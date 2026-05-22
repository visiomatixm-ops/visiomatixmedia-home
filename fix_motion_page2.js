const fs = require('fs');
const path = require('path');
const glob = require('glob');
const root = process.cwd();
const files = glob.sync('src/components/Services/**/Page2.jsx', { nodir: true });
const missing = [];
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  if (!/import\s+\{\s*motion\s*\}\s+from\s+['\"]framer-motion['\"]/m.test(txt)) {
    missing.push(f);
  }
}
console.log('total', files.length, 'missing', missing.length);
missing.forEach(f => console.log(f));
