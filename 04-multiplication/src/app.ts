import fs from 'fs';

let base: number = 5;
const headerMessage: string = `
====================================
        TABLA DEL ${base}
====================================
\n`
var outputMessage = '';
var iteration: number = 0;

while (iteration < 11) {
    outputMessage += `${base} x ${iteration} = ${base * iteration}\n`
    iteration++
}

outputMessage = headerMessage+outputMessage;

console.log(outputMessage);

const outputPath = `outputs`;


fs.mkdirSync(outputPath,{recursive:true})
fs.writeFileSync(`outputs/tabla-${base}.txt`,outputMessage)
console.log('File created')