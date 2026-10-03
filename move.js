const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\avira\\OneDrive\\Desktop\\portfolio conts';
const frontendDir = path.join(rootDir, 'frontend');
const backendDir = path.join(rootDir, 'backend');

if (!fs.existsSync(frontendDir)) fs.mkdirSync(frontendDir);
if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir);

const filesToMove = [
  'src',
  'public',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'next.config.ts',
  'next.config.mjs',
  'tailwind.config.ts',
  'tailwind.config.js',
  'postcss.config.mjs',
  'eslint.config.mjs',
  'next-env.d.ts',
  '.gitignore',
  'README.md',
  '.next',
  'node_modules'
];

for (const item of filesToMove) {
  const oldPath = path.join(rootDir, item);
  const newPath = path.join(frontendDir, item);
  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Moved ${item} to frontend`);
    } catch (e) {
      console.error(`Error moving ${item}: ${e.message}`);
    }
  }
}

// Create a basic gitignore in the root
const rootGitignore = path.join(rootDir, '.gitignore');
fs.writeFileSync(rootGitignore, `node_modules
.DS_Store
`);

console.log('Done moving files.');
