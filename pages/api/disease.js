import * as fs from 'fs/promises'
export default async function handler(req, res) {
    const allInfo = await fs.readdir(`diseases/`, `utf-8`, (err, allInfo) => {
        if (err) {
            res.status(500).json({ error: "Not foud " })
        }
        console.log(allInfo)
    })
    res.status(200).json(allInfo);
}