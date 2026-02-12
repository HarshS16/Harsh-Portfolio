const fs = require('fs');
const buf = fs.readFileSync('public/Harsh_Srivastava_Resume.pdf');
const text = buf.toString('latin1');

// Extract text between parentheses in BT/ET blocks (common PDF text encoding)
const blocks = [];
const regex = /BT[\s\S]*?ET/g;
let match;
while ((match = regex.exec(text)) !== null) {
    const block = match[0];
    const textMatches = block.match(/\(([^)]*)\)/g);
    if (textMatches) {
        for (const m of textMatches) {
            const t = m.slice(1, -1);
            if (t.length > 0) blocks.push(t);
        }
    }
}

fs.writeFileSync('resume_text.txt', blocks.join('\n'), 'utf8');
console.log('Done - wrote ' + blocks.length + ' text blocks');
