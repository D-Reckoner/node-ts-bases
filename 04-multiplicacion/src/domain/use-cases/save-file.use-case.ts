import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string,
    destination?: string,
    fileName?: string,
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
        /** Storage repo */
    }

    execute({
        fileContent,
        destination = 'outputs',
        fileName = 'table'
    }: Options): boolean {
        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            
            return true;
        } catch (error) {
            console.error('Error creating file:', error);
            return false;
        }
    }
}