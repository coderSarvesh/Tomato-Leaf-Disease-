import fs from 'fs/promises'

export default async function handler(req, res) {

    let slug = req.query.slug

    if(req.method == 'GET') {     
        try {
            let data = await fs.readFile(`diseasedata/${slug}.json`, 'utf-8');
            return res.status(200).json(JSON.parse(data))
        } catch (error) {
            return res.status(404).json({message: 'no disease found'})
        }  

    } else {
        return res.status(400).json({message: "This method is not allowed"})
    }
}
