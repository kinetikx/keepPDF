const fs = require('fs');
const path = require('path');
const dir = 'src/pages/[lang]';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro') && f !== 'index.astro' && f !== 'split.astro');

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const slug = file.replace('.astro', '');

    if (!content.includes('import HowToSection')) {
        content = content.replace(
            'import UseCaseSection from',
            'import HowToSection from "../../components/tools/HowToSection";\nimport UseCaseSection from'
        );
    }

    if (!content.includes('<HowToSection')) {
        content = content.replace(
            '<UseCaseSection',
            `<HowToSection client:visible slug="${slug}" lang={lang} />\n  <UseCaseSection`
        );
    }

    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
}
