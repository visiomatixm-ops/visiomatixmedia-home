const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. feature-card-bss4
  const featureCardRegex = /(<motion\.div\s+className=(?:\{`[^`]*feature-card-bss4[^`]*`\}|"[^"]*feature-card-bss4[^"]*")[\s\S]*?)(>)/g;
  content = content.replace(featureCardRegex, (match, p1, p2) => {
    if (p1.includes("whileHover")) return match;
    return p1 + `\n            whileHover={{\n              y: -12,\n              scale: 1.03,\n              boxShadow: "0 20px 52px rgba(0,150,255,0.28)",\n              transition: { type: "spring", stiffness: 280, damping: 18 },\n            }}` + p2;
  });

  // 2. icon-box-bss4
  const iconBoxRegex = /(<motion\.div\s+className="icon-box-bss4"[\s\S]*?)(>)/g;
  content = content.replace(iconBoxRegex, (match, p1, p2) => {
    if (p1.includes("whileHover")) return match;
    return p1 + `\n              whileHover={{\n                rotate: [0, -8, 8, 0],\n                scale: 1.2,\n                transition: { duration: 0.4 },\n              }}` + p2;
  });

  // 3. read-more-wrapper-bss4 (transform <div to <motion.div)
  const readMoreDivRegex = /<div className="read-more-wrapper-bss4">([\s\S]*?)<\/div>/g;
  content = content.replace(readMoreDivRegex, (match, p1) => {
    return `<motion.div\n              className="read-more-wrapper-bss4"\n              whileHover={{\n                scale: 1.07,\n                boxShadow: "0 0 18px rgba(0,200,255,0.4)",\n              }}\n              whileTap={{ scale: 0.93 }}\n            >${p1}</motion.div>`;
  });
  
  // existing <motion.div className="read-more-wrapper-bss4">
  const readMoreMotionRegex = /(<motion\.div\s+className="read-more-wrapper-bss4"[\s\S]*?)(>)/g;
  content = content.replace(readMoreMotionRegex, (match, p1, p2) => {
    if (p1.includes("whileHover")) return match;
    return p1 + `\n              whileHover={{\n                scale: 1.07,\n                boxShadow: "0 0 18px rgba(0,200,255,0.4)",\n              }}\n              whileTap={{ scale: 0.93 }}` + p2;
  });

  // 4. Benefit component e-commerce-services-benefits-div
  const benefitDivRegex = /(<motion\.div\s+className=['"]e-commerce-services-benefits-div['"][\s\S]*?)(>)/g;
  content = content.replace(benefitDivRegex, (match, p1, p2) => {
    if (p1.includes("whileHover")) return match;
    return p1 + `\n    whileHover={{\n      y: -8,\n      scale: 1.03,\n      boxShadow: "0 14px 40px rgba(0,200,255,0.20)",\n      transition: { type: "spring", stiffness: 260 }\n    }}` + p2;
  });

  // 5. Benefit component img
  const benefitImgRegex = /(<motion\.img\s+src=\{img\}[\s\S]*?)(>)/g;
  content = content.replace(benefitImgRegex, (match, p1, p2) => {
    if (p1.includes("whileHover")) return match;
    return p1 + `\n      whileHover={{ rotate: [0, -6, 6, 0], scale: 1.15, transition: { duration: 0.4 } }}` + p2;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir('c:/Users/Sahil/Downloads/vm-test/src/components/Services', processFile);
console.log('Done!');
