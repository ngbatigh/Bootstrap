const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'data/concepts/concepts.js');
const jsonPath = path.join(__dirname, 'data/concepts/concepts.json');

try {
    const content = fs.readFileSync(jsPath, 'utf8');
    
    // Replace the JS variable assignment with pure JSON
    let jsonStr = content.replace(/^[\s\S]*?window\.CompIde\.data\s*=\s*/, '');
    jsonStr = jsonStr.replace(/;\s*$/, '');
    
    // Parse to ensure it's valid JSON
    const dataObj = JSON.parse(jsonStr);
    
    fs.writeFileSync(jsonPath, JSON.stringify(dataObj, null, 2), 'utf8');
    console.log("Successfully converted concepts.js to concepts.json!");
} catch (e) {
    console.error("Error:", e.message);
}
