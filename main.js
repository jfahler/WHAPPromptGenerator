const output = document.querySelector('.output_box'); 

let whThemes = ['environmental', 'cultural', 'political', 'economic', 'social', 'technological']; 
let whSkills = ['similarity', 'difference', 'change', 'continuity', 'cause', 'effect']; 
let pdThreeContent = ['global revolutions', 'the industrial revolution', 'new imperialism', 'responses to European imperialism']; 
let whRegions = ['North America', 'Latin America', 'Africa', 'Eurasia', 'Oceania', 'East Asia', 'Southeast Asia', 'South Asia']; 
let whPeriods = ['1750-1900']; 
//Remember to re-add other date ranges!


function generateSAQ() {
  const newPrompt = document.querySelector('.saq_output_box'); 
  let randomizedTheme = whThemes[Math.floor(Math.random() * whThemes.length)]; 
  let randomizedSkill = whSkills[Math.floor(Math.random() * whSkills.length)]; 
  let randomizedPdThreeContent = pdThreeContent[Math.floor(Math.random() * pdThreeContent.length)]; 
  let randomizedRegion = whRegions[Math.floor(Math.random() * whRegions.length)];
  let randomizedPeriod = whPeriods[Math.floor(Math.random() * whPeriods.length)];  
  newPrompt.textContent = 'Evaluate ONE ' + randomizedTheme +' ' + randomizedSkill + ' of ' + randomizedPdThreeContent + ' in ' + randomizedRegion + ' during the period circa ' + randomizedPeriod + '.'; 
}

function generateLEQ() {
  const newLeq = document.querySelector('.leq_output_box'); 
  let randomizedTheme = whThemes[Math.floor(Math.random() * whThemes.length)]; 
  let randomizedSkill = whSkills[Math.floor(Math.random() * whSkills.length)]; 
  let randomizedPdThreeContent = pdThreeContent[Math.floor(Math.random() * pdThreeContent.length)]; 
  let randomizedRegion = whRegions[Math.floor(Math.random() * whRegions.length)];
  let randomizedPeriod = whPeriods[Math.floor(Math.random() * whPeriods.length)];  
  newLeq.textContent = 'Develop an argument that evaluates the extent to which ' + randomizedTheme +' ' + randomizedSkill + ' of ' + randomizedPdThreeContent + ' in ' + randomizedRegion + ' during the period circa ' + randomizedPeriod + '.'; 
}