const fs = require('fs');

const darkColors = JSON.parse(fs.readFileSync('colors/dark.json', 'utf8'));

let template = fs.readFileSync('templates/dark.template.json', 'utf8');

for (const [key, value] of Object.entries(darkColors)) {
  const regex = new RegExp(`{{${key}}}`, 'g');
  template = template.replace(regex, value);
}

fs.writeFileSync('./themes/Seamless - Dark-color-theme.json', template);
