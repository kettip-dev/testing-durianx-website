const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'scratch', 'about.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Find all matches of headings and lists
// Let's look for elementor sections or widgets
// A simple way is to search for class names and tags inside the body
const bodyStart = html.indexOf('<body');
const body = html.substring(bodyStart);

// Let's print out all h1, h2, h3, h4, h5, h6, and p elements and lists in order
// We can also extract custom info-box sections
const regex = /<(h[1-6]|p|div|li)\b[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/\1>/gi;

// Let's use a cleaner approach: write a regex-based parser that scans the HTML and extracts sections
// Let's search for elementor-widget-container to see where blocks are
const blockRegex = /<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi;
let match;
console.log("--- Widget Containers ---");
let count = 0;
while ((match = blockRegex.exec(body)) !== null && count < 30) {
  const innerHtml = match[1].trim();
  // Strip tags but keep some structure
  const text = innerHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 10 && !text.includes('function(') && !text.includes('.sticky')) {
    console.log(`[Widget ${count++}]: ${text.substring(0, 300)}`);
  }
}
