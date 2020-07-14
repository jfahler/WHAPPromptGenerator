const output = document.querySelector('.prompt_output'); 

let whThemes = ['environmental', 'cultural', 'political', 'economic', 'social', 'technological']; 
let whSkills = ['similarity', 'difference', 'change', 'continuity', 'cause', 'effect']; 
let whRegions = ['North America', 'Latin America', 'Africa', 'Eurasia', 'Oceania', 'East Asia', 'Southeast Asia', 'South Asia']; 
let whPeriods = ['1200-1450', '1450-1750', '1750-1900', '1900-Present']; 

function generateTopic() {
  const newPrompt = document.createElement('p'); 
  let randomizedTheme = whThemes[Math.floor(Math.random() * whThemes.length)]; 
  let randomizedSkill = whSkills[Math.floor(Math.random() * whSkills.length)]; 
  let randomizedRegion = whRegions[Math.floor(Math.random() * whRegions.length)];
  let randomizedPeriod = whPeriods[Math.floor(Math.random() * whPeriods.length)]; 

  let finalOutut = newPrompt.textContent; 
  document.frmTest.txtTest.value = 'Evaluate ONE ' + randomizedTheme +' ' + randomizedSkill + ' in ' + randomizedRegion + ' during the period circa ' + randomizedPeriod + '.'; 
  //output.appendChild(newPrompt); 
}