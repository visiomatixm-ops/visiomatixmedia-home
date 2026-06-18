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
  /whatsapp/i,
  /arrow/i
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

const removeProps = ['box-shadow', 'text-shadow', 'transform', 'transition', 'scale'];

const plugin = postcss.plugin('remove-button-effects', () => {
  return (root) => {
    // First, remove :hover states completely for these selectors if they exist
    root.walkRules((rule) => {
      if (rule.selector.includes(':hover')) {
        const selectors = rule.selectors;
        const newSelectors = selectors.filter(sel => {
          if (sel.includes(':hover') && isButtonSelector(sel)) {
            console.log(`Removing hover selector: ${sel}`);
            return false;
          }
          return true;
        });

        if (newSelectors.length === 0) {
          rule.remove();
          return;
        } else if (newSelectors.length !== selectors.length) {
          rule.selectors = newSelectors;
        }
      }
      
      // Then remove any transition, transform, box-shadow, text-shadow, filter from button classes
      const isButton = rule.selectors.some(isButtonSelector);
      
      if (isButton && !rule.selector.includes('.feature-card') && !rule.selector.includes('.slider') && !rule.selector.includes('.hero-visual')) {
        rule.walkDecls((decl) => {
          if (removeProps.includes(decl.prop)) {
            console.log(`Removing ${decl.prop} from ${rule.selector}`);
            decl.remove();
          } else if (decl.prop === 'filter' && (decl.value.includes('drop-shadow') || decl.value.includes('brightness'))) {
            console.log(`Removing filter from ${rule.selector}`);
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
