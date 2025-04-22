const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.match(/react/gi ?? []).length;

//console.log('words: ', words);
console.log('wordCount: ', wordCount);