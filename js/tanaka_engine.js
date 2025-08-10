// Tanaka0-style optimal formula generation engine
class TanakaFormulaGenerator {
    constructor() {
        this.equipmentType = 'w'; // 'w' for weapon, 'a' for armor
    }

    generateOptimalFormula(startingPot, desiredStats, equipmentType = 'w') {
        this.equipmentType = equipmentType;
        let pot = startingPot;
        const steps = [];
        let slotCount = 0;
        
        try {
            // Step 1: Validate input
            const duplicateCheck = hasDuplicateStats(desiredStats);
            if (duplicateCheck) {
                return { success: false, error: "Duplicate stat found in the stat list" };
            }

            // Validate each stat
            for (let stat of desiredStats) {
                if (stat && stat.value !== 0) {
                    const validation = validateStatValue(stat.statData, stat.value);
                    if (!validation.valid) {
                        return { success: false, error: validation.error };
                    }
                }
            }

            // Step 2: Sort stats by Toram priority
            const sortedStats = sortByToramPriority(desiredStats);

            // Step 3: Pre-check slot limit
            const totalSlotsNeeded = countNonZeroStats(sortedStats);
            if (totalSlotsNeeded > 8) {
                return { success: false, error: "More than 8 stat slots required" };
            }

            // Step 4: Add negative stats first (they add potential)
            for (let stat of sortedStats.filter(s => s.value < 0)) {
                const potChange = calculatePotentialChange(stat, pot, this.equipmentType);
                pot += Math.abs(potChange); // negative stats add potential
                slotCount++;
                
                const matCost = calculateMaterialCost(stat);
                const stepText = this.formatStatChange(stat);
                
                steps.push({
                    step: steps.length + 1,
                    change: stepText,
                    remaining_pot: pot,
                    success_rate: 100,
                    materials: this.formatMaterialCost(stat.statData.mat, matCost)
                });

                if (pot < 1) {
                    return { success: false, error: `Potential below 1 after adding ${stat.name}` };
                }
            }

            // Step 5: Add positive stats 
            for (let stat of sortedStats.filter(s => s.value > 0)) {
                // Check if we can apply full value in one step
                const fullPotCost = Math.abs(calculatePotentialChange(stat, pot, this.equipmentType));
                
                if (pot - fullPotCost >= 1) {
                    // Apply full value at once
                    pot -= fullPotCost;
                    slotCount++;
                    
                    const matCost = calculateMaterialCost(stat);
                    const stepText = this.formatStatChange(stat);
                    
                    steps.push({
                        step: steps.length + 1,
                        change: stepText,
                        remaining_pot: pot,
                        success_rate: calculateSuccessRate(pot),
                        materials: this.formatMaterialCost(stat.statData.mat, matCost)
                    });
                } else {
                    // Need to break into incremental steps
                    const incrementalSteps = this.generateIncrementalSteps(stat, pot);
                    if (!incrementalSteps.success) {
                        return { success: false, error: incrementalSteps.error };
                    }
                    
                    // Add each incremental step
                    for (let incStep of incrementalSteps.steps) {
                        pot -= incStep.potCost;
                        steps.push({
                            step: steps.length + 1,
                            change: incStep.change,
                            remaining_pot: pot,
                            success_rate: calculateSuccessRate(pot),
                            materials: incStep.materials
                        });
                        
                        if (pot < 1) {
                            return { success: false, error: `Potential below 1 during incremental steps for ${stat.name}` };
                        }
                    }
                    slotCount++;
                }

                // Check slot limit
                if (slotCount >= 8) {
                    break;
                }
            }

            return { 
                success: true, 
                steps: steps,
                finalPotential: pot,
                totalMaterials: this.calculateTotalMaterials(steps)
            };

        } catch (error) {
            return { success: false, error: `Calculation error: ${error.message}` };
        }
    }

    generateIncrementalSteps(stat, currentPot) {
        const steps = [];
        let pot = currentPot;
        
        for (let i = 1; i <= Math.abs(stat.value); i++) {
            const singleStep = {
                name: stat.name,
                value: 1,
                statData: stat.statData
            };
            
            const stepCost = Math.abs(calculatePotentialChange(singleStep, pot, this.equipmentType));
            
            if (pot - stepCost < 1) {
                return { 
                    success: false, 
                    error: `Potential would drop below 1 during step ${i} of ${stat.name}` 
                };
            }
            
            const matCost = calculateMaterialCost(singleStep);
            
            steps.push({
                change: this.formatStatChange(singleStep),
                potCost: stepCost,
                materials: this.formatMaterialCost(stat.statData.mat, matCost)
            });
            
            pot -= stepCost;
        }
        
        return { success: true, steps: steps };
    }

    formatStatChange(stat) {
        const sign = stat.value > 0 ? '+' : '';
        if (stat.statData.is_percent) {
            return `${stat.name.replace(' %', '')} ${sign}${stat.value}%`;
        } else {
            return `${stat.name} ${sign}${stat.value}`;
        }
    }

    formatMaterialCost(material, amount) {
        return `${material}: ${amount}`;
    }

    calculateTotalMaterials(steps) {
        const materials = {
            Metal: 0,
            Cloth: 0,
            Beast: 0,
            Wood: 0,
            Medicine: 0,
            Mana: 0
        };

        for (let step of steps) {
            const matInfo = step.materials.split(': ');
            if (matInfo.length === 2) {
                const matType = matInfo[0];
                const amount = parseInt(matInfo[1]);
                if (materials.hasOwnProperty(matType)) {
                    materials[matType] += amount;
                }
            }
        }

        return materials;
    }
}

// Global instance for use in UI
const tanakaGenerator = new TanakaFormulaGenerator();