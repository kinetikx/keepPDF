const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const exts = ['.astro', '.mjs', '.js', '.ts', '.cjs', '.tsx', '.jsx'];

function walkAndReplace(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.astro') {
                walkAndReplace(fullPath);
            }
        } else {
            if (exts.includes(path.extname(fullPath))) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let newContent = content
                    .replace(/https:\/\/keep-pdf\.vercel\.app/g, 'https://keep-pdf.online')
                    .replace(/https:\/\/keep-pdf\.com/g, 'https://keep-pdf.online');

                if (content !== newContent) {
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                    console.log(`Updated: ${fullPath}`);
                }
            }
        }
    }
}

walkAndReplace(projectDir);
console.log('Done replacing URLs.');
