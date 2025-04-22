import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log('ServerApp running...');

        const table = new CreateTable().execute({ base, limit });
        const wasSaved = new SaveFile().execute({
            fileContent: table,
            destination: fileDestination,
            fileName: fileName
        });

        if (showTable) console.log(table);
        (wasSaved)
            ? console.log('File created!')
            : console.log('Error creating file!');

    }
} 