const fs = require('fs');
const path = require('path');

function findJsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findJsxFiles(filePath, fileList);
    } else if (filePath.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const jsxFiles = findJsxFiles(path.join(process.cwd(), 'src'));
let totalReplaced = 0;

jsxFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // We want to remove whileHover and whileTap from button elements, or elements that look like buttons
    // e.g. <motion.button ... whileHover={{...}} ...>
    // A simple regex to remove whileHover={...} and whileTap={...}
    
    // We will find any element that has whileHover or whileTap
    // Then check if it's a button, or an anchor tag, or a div with button class.
    
    content = content.replace(/<(?:motion\.)?[a-zA-Z]+[^>]*>/g, (match) => {
        const isButton = match.includes('<button') || match.includes('<motion.button') || 
            match.includes('<motion.a') ||
            /className=[\"'][^\"']*(btn|button|read-more|connect|apply|talk)[^\"']*[\"']/i.test(match);
            
        if (isButton) {
            let newMatch = match;
            // Remove whileHover
            newMatch = newMatch.replace(/\bwhileHover=\{[^}]*(?:}[^}]*)*\}/g, '');
            // Remove whileTap
            newMatch = newMatch.replace(/\bwhileTap=\{[^}]*(?:}[^}]*)*\}/g, '');
            // Remove animate="pulse"
            newMatch = newMatch.replace(/\banimate=[\"']pulse[\"']/g, '');
            // Remove {...glowPulse}
            newMatch = newMatch.replace(/\{\.\.\.glowPulse\}/g, '');
            // Remove variants={glowPulse}
            newMatch = newMatch.replace(/variants=\{glowPulse\}/g, '');
            
            return newMatch;
        }
        return match;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        totalReplaced++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`Total files updated: ${totalReplaced}`);
