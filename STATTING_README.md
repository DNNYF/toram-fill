# Toram Online Statting Optimizer

A modern, efficient statting calculator for Toram Online inspired by tanaka0.work's design philosophy.

## Features

### Automatic Formula Generation
- **Smart Optimization**: Automatically calculates the most efficient statting sequence
- **Real-time Updates**: Instantly recalculates when you change stats or settings
- **Accurate Calculations**: Uses precise Toram Online mechanics for potential and material costs

### Modern Interface
- **Clean Design**: Left panel for inputs, right panel for results
- **Responsive Layout**: Works on desktop and mobile devices
- **Intuitive Controls**: Easy-to-use dropdowns and input fields

### Advanced Calculations
- **Penalty System**: Accurately calculates penalties for multiple stats in same category
- **Material Efficiency**: Optimizes material usage and cost
- **Success Rate**: Precise success rate calculations based on TEC and potential
- **Equipment Types**: Supports both weapon and armor statting

### Export & Sharing
- **Copy to Clipboard**: One-click copying of statting formulas
- **Export to File**: Download complete statting plans
- **Formula Validation**: Automatic validation of stat configurations

## How to Use

1. **Configure Equipment**
   - Select equipment type (Weapon/Armor)
   - Set base potential and recipe potential
   - Adjust TEC stat and proficiency level

2. **Add Desired Stats**
   - Click "+ Add Stat" to add new stat lines
   - Select stat type from dropdown
   - Enter desired value (positive or negative)
   - Remove unwanted stats with "Remove" button

3. **Generate Formula**
   - Click "Generate Formula" for manual calculation
   - Or just change values - auto-updates in real-time!

4. **Review Results**
   - View step-by-step statting sequence
   - Check total material costs
   - See final success rate
   - Export or copy formula for use

## Advanced Settings

- **TEC Stat**: Affects potential return rate and success calculations
- **Proficiency Level**: Reduces material costs
- **Material Reduction Passive**: Additional 10% material cost reduction

## Supported Stats

### Primary Stats
- STR, INT, VIT, AGI, DEX (flat and percentage)

### Combat Stats
- ATK, MATK, Critical Rate, Critical Damage (flat and percentage)
- Accuracy, Dodge

### Defensive Stats
- DEF, MDEF, MaxHP (flat and percentage)

### Speed Stats
- ASPD, CSPD

## Technical Details

### Calculation Accuracy
- Uses the same penalty system as the original Toram mechanics
- Accurate material cost calculations with quadratic scaling
- Proper potential return rates for negative stats
- Equipment type modifiers (weapon stats on armor cost double)

### Optimization Algorithm
- Processes negative stats first to maximize potential gain
- Sorts stats by potential impact for optimal ordering
- Minimizes penalty effects through smart sequencing
- Validates configurations for feasibility

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers supported
- No external dependencies required
- Works offline once loaded

## Files

- `statting.html` - Main application file
- `js/math.js` - Mathematical calculation utilities
- `js/formulas.js` - Predefined stat formulas
- `statting_old.html` - Original implementation (backup)

## Migration from Old Version

The new version maintains compatibility with Toram Online mechanics while providing a much more user-friendly interface. Key improvements:

1. **Automatic Calculation**: No more manual step-by-step input
2. **Real-time Updates**: See results instantly as you type
3. **Better Validation**: Prevents invalid configurations
4. **Modern UI**: Clean, responsive design
5. **Export Features**: Easy sharing and saving of formulas

The old manual interface is still available in `statting_old.html` if needed for reference.