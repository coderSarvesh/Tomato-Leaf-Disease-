import * as fs from 'fs/promises'
// export default async function handler(req,res){
//      allInfo = await fs.readFile(`diseases/${req.query.slug}.json`,`utf-8`,(err,data) =>{
//         if(err){
//             res.status(500).json({error:"No "})
//         }
//         console.log(req.query.slug)
//         res.status(200).json(allInfo);
//      })}

// WORKSS -----
// export default async function handler(req, res) {
//     const data = await fs.readFile("diseases/disease-2.json", 'utf-8',(err, data) => {
//         console.log(data)
//     })
//     res.status(200).send(data);
// }

export default async function handler(req, res) {
    const data = await fs.readFile(`diseases/${req.query.slug}.json`,'utf-8',(err, data) => {
        if(err){
            res.status(500).json({error:"Disease not found"});
        }
        res.status(200).json(JSON.parse(data));
    })
    res.status(200).send(data);
}