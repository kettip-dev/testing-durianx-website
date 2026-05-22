const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'scratch', 'about.html');
if (!fs.existsSync(htmlPath)) {
  console.error("scratch/about.html does not exist");
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// A very basic HTML text extractor
function extractText(htmlStr) {
  // Find where the body starts
  let bodyStart = htmlStr.indexOf('<body');
  if (bodyStart === -1) bodyStart = 0;
  
  let content = htmlStr.substring(bodyStart);
  
  // Let's remove script and style tags completely
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Let's extract headers and paragraphs, or lists
  const matches = [];
  const regex = /<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>|<p\b[^>]*>([\s\S]*?)<\/p>|<li\b[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const fullTag = match[0];
    const text = (match[1] || match[2] || match[3] || '').replace(/<[^>]+>/g, '').trim();
    if (text) {
      matches.push({ tag: fullTag.substring(0, 4), text: text });
    }
  }
  
  return matches;
}

const result = extractText(html);
const textOutput = result.map(m => `[${m.tag.toUpperCase().trim()}] ${m.text}`).join('\n');

fs.writeFileSync(path.join(__dirname, 'scratch', 'about_text.txt'), textOutput);
console.log('Successfully wrote text content to scratch/about_text.txt. Total items: ' + result.length);
