const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'scratch');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fetch('https://www.durianx.com/about-us/')
  .then(r => r.text())
  .then(html => {
    fs.writeFileSync(path.join(dir, 'about.html'), html);
    console.log('Successfully wrote to scratch/about.html, size: ' + html.length);
  })
  .catch(err => console.error(err));
