const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\avira\\OneDrive\\Desktop\\portfolio conts\\recovered';
const srcDir = 'C:\\Users\\avira\\OneDrive\\Desktop\\portfolio conts\\src';

const filesToRestore = [
  { name: 'Navbar.tsx', path: 'components' },
  { name: 'Projects.tsx', path: 'components' },
  { name: 'Contact.tsx', path: 'components' },
  { name: 'globals.css', path: 'app' },
  { name: 'BackgroundScene.tsx', path: 'components' },
  { name: 'Hero.tsx', path: 'components' },
  { name: 'About.tsx', path: 'components' },
  { name: 'Skills.tsx', path: 'components' },
  { name: 'Achievements.tsx', path: 'components' },
  { name: 'Certifications.tsx', path: 'components' }
];

for (const file of filesToRestore) {
  const recoveredPath = path.join(targetDir, `${file.name}.v0`);
  if (fs.existsSync(recoveredPath)) {
    const destPath = path.join(srcDir, file.path, file.name);
    fs.copyFileSync(recoveredPath, destPath);
    console.log(`Restored ${file.name} to v0`);
  } else {
    console.log(`Missing v0 for ${file.name}`);
  }
}
