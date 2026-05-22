const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'scratch', 'about.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const sections = [
  { name: 'Welcome to DurianX', search: 'Welcome to DurianX', size: 1000 },
  { name: 'Built on Collaboration', search: 'Built on Collaboration', size: 2500 },
  { name: 'What Drives DurianX Forward', search: 'What Drives DurianX Forward', size: 3000 },
  { name: 'Mission / Vision / Values', search: 'What Drives DurianX Forward', size: 5000 }, // Mission/Vision/Values are probably here
  { name: 'Why Partner with DurianX', search: 'Why Partner with DurianX', size: 4000 }
];

sections.forEach(sec => {
  const index = html.indexOf(sec.search);
  if (index !== -1) {
    console.log(`\n=========================================`);
    console.log(`SECTION: ${sec.name}`);
    console.log(`=========================================`);
    const chunk = html.substring(index, index + sec.size);
    // Strip tags but keep some separation for readability
    const formatted = chunk
      .replace(/<\/div>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/h[1-6]>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&rsquo;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/\u2028/g, '\n') // unicode line separator
      .replace(/\s+/g, ' ')
      .trim();
    
    // Split into sentences or lines to present it nicely
    console.log(formatted.substring(0, 1500));
  } else {
    console.log(`Could not find search term for section "${sec.name}": "${sec.search}"`);
  }
});
