import fs from 'fs'
export default async function handler(req, res) {
    let data = await fs.promises.readdir('diseases');
    let myDisease;
    let allDiseases = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item);
        myDisease = await fs.promises.readFile(('diseases/' + item), 'utf-8');
        allDiseases.push(JSON.parse(myDisease));
    }
    res.status(200).json(allDiseases);
}