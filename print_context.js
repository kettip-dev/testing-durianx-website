const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'scratch', 'about.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const keyPhrases = [
  'Welcome to DurianX',
  'Built on Collaboration',
  'Partner-Centric Design',
  'Fair and Transparent Terms',
  'Dedicated Local Support',
  'What Drives DurianX Forward',
  'Mission',
  'Vision',
  'Values',
  'Why Partner with DurianX'
];

keyPhrases.forEach(phrase => {
  const index = html.indexOf(phrase);
  if (index !== -1) {
    console.log(`=== Context for "${phrase}" ===`);
    const start = Math.max(0, index - 100);
    const end = Math.min(html.length, index + 800);
    console.log(html.substring(start, end).replace(/\s+/g, ' ').substring(0, 500));
    console.log('\n');
  } else {
    console.log(`Could not find "${phrase}"`);
  }
});
