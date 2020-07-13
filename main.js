function themes() {
    let whThemes = ['environmental', 'cultural', 'political', 'economic', 'social', 'technological']; 
    let randomizedTheme = whThemes[Math.floor(Math.random() * whThemes.length)]; 
    return randomizedTheme; 
}; 

function skills() {
    let whSkills = ['similarity', 'difference', 'change', 'continue', 'cause', 'effect']; 
    let randomizedSkill = whSkills[Math.floor(Math.random() * whSkills.length)]; 
    return randomizedSkill; 
}; 

function regions() {
    let whRegions = ['North America', 'Latin America', 'Africa', 'Eurasia', 'Oceania', 'East Asia', 'Southeast Asia', 'South Asia']; 
    let randomizedRegion = whRegions[Math.floor(Math.random() * whRegions.length)]; 
    return randomizedRegion; 
}; 


function periods() {
    let whPeriods = ['1200-1450', '1450-1750', '1750-1900', '1900-Present']; 
    let randomizedPeriod = whPeriods[Math.floor(Math.random() * whPeriods.length)]; 
    return randomizedPeriod; 
}; 
