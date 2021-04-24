import * as fs from 'fs';

export async function saveData (name: string, data: string) {
    fs.writeFile(`./saveFiles/${name}.txt`, data, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log('File Successfully created')
        }
    })
}

