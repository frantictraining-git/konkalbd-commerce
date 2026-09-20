const fs = require('fs');

let html = fs.readFileSync('konkal-homepage.html', 'utf8');

// Extract everything inside body
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}
let bodyHtml = bodyMatch[1];

// Extract everything inside style
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
let styleCss = styleMatch ? styleMatch[1] : '';

// Convert HTML to JSX
// Replace class= with className=
bodyHtml = bodyHtml.replace(/class=/g, 'className=');

// Replace inline styles (e.g. style="width: 100%") - basic regex, might need manual fixes but let's try
bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim() !== '').map(s => {
    const [key, value] = s.split(':');
    if (!key || !value) return '';
    const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    return `${camelKey}: "${value.trim()}"`;
  });
  return `style={{ ${styles.join(', ')} }}`;
});

// Self close void elements
const voidElements = ['img', 'br', 'hr', 'input', 'path', 'rect', 'circle', 'line', 'polygon', 'polyline', 'ellipse'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
  bodyHtml = bodyHtml.replace(regex, `<${tag}$1 />`);
});

// Remove <!-- --> comments or convert to {/* */}
bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Replace any remaining weird JSX things
// viewBox -> viewBox
bodyHtml = bodyHtml.replace(/viewbox=/gi, 'viewBox=');
// fill-rule -> fillRule
bodyHtml = bodyHtml.replace(/fill-rule=/gi, 'fillRule=');
// clip-rule -> clipRule
bodyHtml = bodyHtml.replace(/clip-rule=/gi, 'clipRule=');
// stroke-width -> strokeWidth
bodyHtml = bodyHtml.replace(/stroke-width=/gi, 'strokeWidth=');
// stroke-linecap -> strokeLinecap
bodyHtml = bodyHtml.replace(/stroke-linecap=/gi, 'strokeLinecap=');
// stroke-linejoin -> strokeLinejoin
bodyHtml = bodyHtml.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');

const output = `
import React from 'react';
import Head from 'next/head';

export default function LandingCustom() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
        ${styleCss}
      \`}} />
      <div className="konkal-custom-wrapper">
        ${bodyHtml}
      </div>
    </>
  );
}
`;

fs.mkdirSync('src/app/landing-3', { recursive: true });
fs.writeFileSync('src/app/landing-3/page.tsx', output);
console.log('Successfully created src/app/landing-3/page.tsx');
