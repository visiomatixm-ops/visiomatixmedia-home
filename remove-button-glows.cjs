const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const buttonPatterns = [
  /btn/i,
  /button/i,
  /read-more/i,
  /talk/i,
  /socials\s+a/i,
  /nav-link/i,
  /apply/i,
  /connect/i,
  /whatsapp/i
];

function isButtonSelector(selector) {
  return buttonPatterns.some(pattern => pattern.test(selector));
}

function findCssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findCssFiles(filePath, fileList);
    } else if (filePath.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const cssFiles = findCssFiles(path.join(process.cwd(), 'src'));

const glowProps = ['box-shadow', 'text-shadow'];

const plugin = postcss.plugin('remove-button-glows', () => {
  return (root) => {
    root.walkRules((rule) => {
      // Check if any selector matches a button pattern
      const isButton = rule.selectors.some(isButtonSelector);
      
      if (isButton) {
        rule.walkDecls((decl) => {
          if (glowProps.includes(decl.prop)) {
            console.log(`Removing ${decl.prop} from ${rule.selector}`);
            decl.remove();
          } else if (decl.prop === 'filter' && decl.value.includes('drop-shadow')) {
            console.log(`Removing filter: drop-shadow from ${rule.selector}`);
            decl.remove();
          }
        });
      }
    });
  };
});

async function processFiles() {
  for (const file of cssFiles) {
    const css = fs.readFileSync(file, 'utf8');
    try {
      const result = await postcss([plugin]).process(css, { from: file, to: file });
      if (result.css !== css) {
        fs.writeFileSync(file, result.css);
        console.log(`Updated ${file}`);
      }
    } catch (e) {
      console.error(`Error processing ${file}:`, e);
    }
  }
}

processFiles().then(() => console.log('Done'));
