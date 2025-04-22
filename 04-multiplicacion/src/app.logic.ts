import fs from 'fs';
import { yarg } from './config/plugins/args.plugins';

const { b:base,l:limit,s:show} = yarg;

let outputMessage = '';
const headerMessage: string = `
===============================
    BASE ${base}
===============================
\n`

for (let i = 1; i < limit+1; i++) {
    
    outputMessage += `${base} x ${i} = ${base*i}\n`
}

outputMessage = headerMessage + outputMessage;

if (show) console.log(outputMessage);


const outputPath = 'outputs/';

fs.mkdirSync(outputPath,{recursive:true})
fs.writeFileSync(`${outputPath}Tabla del ${base}.txt`,outputMessage)

console.log('File created!');
