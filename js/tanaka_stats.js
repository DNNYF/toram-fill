// Enhanced stat definitions for Tanaka0-style optimal formula generation
const TANAKA_STATS = [
    // Enhance Stats - % type
    { "name": "STR %", "mat": "Beast", "pot": 10, "cost": 50, "cat": "Enhance Stats", "type": "u", "max": 15, "is_percent": true },
    { "name": "INT %", "mat": "Wood", "pot": 10, "cost": 50, "cat": "Enhance Stats", "type": "u", "max": 15, "is_percent": true },
    { "name": "VIT %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance Stats", "type": "u", "max": 15, "is_percent": true },
    { "name": "AGI %", "mat": "Cloth", "pot": 10, "cost": 50, "cat": "Enhance Stats", "type": "u", "max": 15, "is_percent": true },
    { "name": "DEX %", "mat": "Medicine", "pot": 10, "cost": 50, "cat": "Enhance Stats", "type": "u", "max": 15, "is_percent": true },
    
    // Enhance Stats - flat type
    { "name": "STR", "mat": "Beast", "pot": 5, "cost": 25, "cat": "Enhance Stats", "type": "u", "max": 20, "is_percent": false },
    { "name": "INT", "mat": "Wood", "pot": 5, "cost": 25, "cat": "Enhance Stats", "type": "u", "max": 20, "is_percent": false },
    { "name": "VIT", "mat": "Metal", "pot": 5, "cost": 25, "cat": "Enhance Stats", "type": "u", "max": 20, "is_percent": false },
    { "name": "AGI", "mat": "Cloth", "pot": 5, "cost": 25, "cat": "Enhance Stats", "type": "u", "max": 20, "is_percent": false },
    { "name": "DEX", "mat": "Medicine", "pot": 5, "cost": 25, "cat": "Enhance Stats", "type": "u", "max": 20, "is_percent": false },

    // Enhance HP/MP - % type
    { "name": "Natural HP Regen %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance HP/MP", "type": "a", "max": 15, "is_percent": true },
    { "name": "Natural MP Regen %", "mat": "Wood", "pot": 20, "cost": 100, "cat": "Enhance HP/MP", "type": "a", "max": 15, "is_percent": true },
    { "name": "MaxHP %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance HP/MP", "type": "u", "max": 15, "is_percent": true },
    
    // Enhance HP/MP - flat type
    { "name": "Natural HP Regen", "mat": "Metal", "pot": 5, "cost": 25, "cat": "Enhance HP/MP", "type": "a", "max": 20, "is_percent": false },
    { "name": "Natural MP Regen", "mat": "Wood", "pot": 10, "cost": 50, "cat": "Enhance HP/MP", "type": "a", "max": 20, "is_percent": false },
    { "name": "MaxHP", "mat": "Metal", "pot": 3, "cost": 16.49, "cat": "Enhance HP/MP", "type": "u", "max": 20, "is_percent": false, "step": 10 },
    { "name": "MaxMP", "mat": "Wood", "pot": 6, "cost": 33.49, "cat": "Enhance HP/MP", "type": "u", "max": 15, "is_percent": false, "step": 10 },

    // Enhance Attack - % type
    { "name": "ATK %", "mat": "Beast", "pot": 10, "cost": 50, "cat": "Enhance Attack", "type": "w", "max": 15, "is_percent": true },
    { "name": "MATK %", "mat": "Wood", "pot": 10, "cost": 50, "cat": "Enhance Attack", "type": "w", "max": 15, "is_percent": true },
    { "name": "Stability %", "mat": "Medicine", "pot": 20, "cost": 100, "cat": "Enhance Attack", "type": "u", "max": 15, "is_percent": true },
    { "name": "Physical Pierce %", "mat": "Beast", "pot": 20, "cost": 100, "cat": "Enhance Attack", "type": "w", "max": 15, "is_percent": true },
    { "name": "Magic Pierce %", "mat": "Wood", "pot": 20, "cost": 100, "cat": "Enhance Attack", "type": "w", "max": 15, "is_percent": true },
    
    // Enhance Attack - flat type
    { "name": "ATK", "mat": "Beast", "pot": 3, "cost": 16.49, "cat": "Enhance Attack", "type": "w", "max": 20, "is_percent": false },
    { "name": "MATK", "mat": "Wood", "pot": 3, "cost": 16.49, "cat": "Enhance Attack", "type": "w", "max": 20, "is_percent": false },

    // Enhance Defense - % type
    { "name": "DEF %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance Defense", "type": "a", "max": 15, "is_percent": true },
    { "name": "MDEF %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance Defense", "type": "a", "max": 15, "is_percent": true },
    { "name": "Physical Resistance %", "mat": "Metal", "pot": 10, "cost": 50, "cat": "Enhance Defense", "type": "a", "max": 15, "is_percent": true },
    { "name": "Magical Resistance %", "mat": "Wood", "pot": 10, "cost": 50, "cat": "Enhance Defense", "type": "a", "max": 15, "is_percent": true },
    
    // Enhance Defense - flat type
    { "name": "DEF", "mat": "Metal", "pot": 3, "cost": 16.49, "cat": "Enhance Defense", "type": "a", "max": 20, "is_percent": false },
    { "name": "MDEF", "mat": "Metal", "pot": 3, "cost": 16.49, "cat": "Enhance Defense", "type": "a", "max": 20, "is_percent": false },

    // Enhance Accuracy - % type
    { "name": "Accuracy %", "mat": "Medicine", "pot": 20, "cost": 100, "cat": "Enhance Accuracy", "type": "w", "max": 15, "is_percent": true },
    
    // Enhance Accuracy - flat type
    { "name": "Accuracy", "mat": "Medicine", "pot": 10, "cost": 50, "cat": "Enhance Accuracy", "type": "w", "max": 20, "is_percent": false },

    // Enhance Dodge - % type
    { "name": "Dodge %", "mat": "Cloth", "pot": 20, "cost": 100, "cat": "Enhance Dodge", "type": "a", "max": 15, "is_percent": true },
    
    // Enhance Dodge - flat type
    { "name": "Dodge", "mat": "Cloth", "pot": 10, "cost": 50, "cat": "Enhance Dodge", "type": "a", "max": 20, "is_percent": false },

    // Enhance Speed - % type
    { "name": "ASPD %", "mat": "Cloth", "pot": 1, "cost": 5, "cat": "Enhance Speed", "type": "u", "max": 20, "is_percent": true },
    { "name": "CSPD %", "mat": "Medicine", "pot": 1, "cost": 5, "cat": "Enhance Speed", "type": "u", "max": 20, "is_percent": true },
    
    // Enhance Speed - flat type
    { "name": "ASPD", "mat": "Cloth", "pot": 1, "cost": 1.49, "cat": "Enhance Speed", "type": "u", "max": 20, "is_percent": false },
    { "name": "CSPD", "mat": "Medicine", "pot": 1, "cost": 1.49, "cat": "Enhance Speed", "type": "u", "max": 20, "is_percent": false },

    // Enhance Critical - % type
    { "name": "Critical Rate %", "mat": "Mana", "pot": 1, "cost": 5, "cat": "Enhance Critical", "type": "u", "max": 20, "is_percent": true },
    { "name": "Critical Damage %", "mat": "Mana", "pot": 10, "cost": 50, "cat": "Enhance Critical", "type": "u", "max": 15, "is_percent": true },
    
    // Enhance Critical - flat type
    { "name": "Critical Rate", "mat": "Mana", "pot": 1, "cost": 5, "cat": "Enhance Critical", "type": "u", "max": 20, "is_percent": false },
    { "name": "Critical Damage", "mat": "Mana", "pot": 3, "cost": 16.49, "cat": "Enhance Critical", "type": "u", "max": 20, "is_percent": false },

    // Special Enhancement - % type
    { "name": "Ailment Resistance %", "mat": "Mana", "pot": 20, "cost": 100, "cat": "Special Enhancement", "type": "u", "max": 15, "is_percent": true },
    { "name": "Guard Power %", "mat": "Mana", "pot": 20, "cost": 100, "cat": "Special Enhancement", "type": "u", "max": 15, "is_percent": true },
    { "name": "Guard Rate %", "mat": "Mana", "pot": 20, "cost": 100, "cat": "Special Enhancement", "type": "u", "max": 15, "is_percent": true },
    { "name": "Evasion Rate %", "mat": "Mana", "pot": 20, "cost": 100, "cat": "Special Enhancement", "type": "u", "max": 15, "is_percent": true },
    { "name": "Aggro %", "mat": "Mana", "pot": 6, "cost": 33.49, "cat": "Special Enhancement", "type": "u", "max": 15, "is_percent": true },

    // Elements - % type  
    { "name": "% stronger against Fire", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "% stronger against Water", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "% stronger against Wind", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "% stronger against Earth", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "% stronger against Light", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "% stronger against Dark", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "w", "max": 15, "is_percent": true },
    { "name": "Fire resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },
    { "name": "Water resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },
    { "name": "Wind resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },
    { "name": "Earth resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },
    { "name": "Light resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },
    { "name": "Dark resistance %", "mat": "Mana", "pot": 5, "cost": 25, "cat": "Enhance Elements", "type": "a", "max": 15, "is_percent": true },

    // Awaken Elements - special type (1 max, no negative)
    { "name": "Fire Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
    { "name": "Water Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
    { "name": "Wind Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
    { "name": "Earth Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
    { "name": "Light Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
    { "name": "Dark Element", "mat": "Mana", "pot": 100, "cost": 150, "cat": "Awaken Elements", "type": "e", "max": 1, "is_percent": false, "no_negative": true },
];

// Penalty data for stat combinations
const PENALTY_DATA = [0, 0, 20, 45, 80, 125, 180, 245, 320];

// Helper functions for stat management
function getStatByName(name) {
    return TANAKA_STATS.find(stat => stat.name === name);
}

function validateStatValue(stat, value) {
    if (!stat) return { valid: false, error: "Stat not found" };
    if (Math.abs(value) > stat.max) {
        return { valid: false, error: `${stat.name} exceeds maximum allowed value (${stat.max})` };
    }
    if (stat.no_negative && value < 0) {
        return { valid: false, error: `${stat.name} cannot be negative` };
    }
    return { valid: true };
}

function hasDuplicateStats(stats) {
    const statNames = new Set();
    for (let stat of stats) {
        if (stat && stat.name && stat.value !== 0) {
            if (statNames.has(stat.name)) {
                return true;
            }
            statNames.add(stat.name);
        }
    }
    return false;
}

function countNonZeroStats(stats) {
    return stats.filter(stat => stat && stat.value !== 0).length;
}

function calculatePotentialChange(stat, currentPot, equipmentType = 'w') {
    if (!stat || !stat.statData) return 0;
    
    const statData = stat.statData;
    let basePot = Math.abs(stat.value) * statData.pot;
    
    // Apply equipment type multiplier
    if (statData.type !== equipmentType && ['a', 'w'].includes(statData.type)) {
        basePot *= 2;
    }
    
    // For negative stats, potential is gained (30% efficiency)
    if (stat.value < 0) {
        return Math.floor(basePot * 0.3);
    }
    
    // For positive stats, potential is consumed
    return -Math.floor(basePot);
}

function calculateMaterialCost(stat) {
    if (!stat || !stat.statData) return 0;
    
    const statData = stat.statData;
    const value = Math.abs(stat.value);
    let totalCost = 0;
    
    for (let i = 1; i <= value; i++) {
        totalCost += statData.cost * Math.pow(i, 2);
    }
    
    return Math.floor(totalCost);
}

function calculateSuccessRate(remainingPot) {
    if (remainingPot >= 1) return 100;
    return Math.max(0, Math.floor(remainingPot * 100));
}

// Sort stats by Toram priority: Negative % -> Negative flat -> Positive flat -> Positive %
function sortByToramPriority(stats) {
    return stats.filter(s => s && s.value !== 0).sort((a, b) => {
        // Negative stats come first
        if (a.value < 0 && b.value >= 0) return -1;
        if (a.value >= 0 && b.value < 0) return 1;
        
        // Both negative: % stats first
        if (a.value < 0 && b.value < 0) {
            if (a.statData.is_percent && !b.statData.is_percent) return -1;
            if (!a.statData.is_percent && b.statData.is_percent) return 1;
        }
        
        // Both positive: flat stats first, then %
        if (a.value > 0 && b.value > 0) {
            if (!a.statData.is_percent && b.statData.is_percent) return -1;
            if (a.statData.is_percent && !b.statData.is_percent) return 1;
        }
        
        return 0;
    });
}