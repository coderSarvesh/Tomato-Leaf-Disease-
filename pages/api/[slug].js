let diseases = {
    "bacterial-spot": {
        "name":"Bacterial Spot",

        "about":"This disease is caused by several species of the bacterium Xanthomonas (but primarily by Xanthomonas perforans), which infect green but not red tomatoes. Peppers are also infected. The disease is more prevalent during wet seasons. Damage to the plants includes leaf and fruit spots, which result in reduced yields, defoliation, and sunscalded fruit. The symptoms consist of numerous small, angular to irregular, water-soaked spots on the leaves and slightly raised to scabby spots on the fruits. The leaf spots may have a yellow halo. The centers dry out and frequently tear.",
      
        "remedy":"Only use certified disease-free seeds and plants. Avoid areas that were planted with peppers or tomatoes during the previous year. Avoid overhead watering by using drip or furrow irrigation. Remove and dispose of all diseased plant material. Prune plants to promote air circulation. Spraying with a copper fungicide will give fairly good control of the bacterial disease.",
    },
    "early-blight": {
        "name":"Early Blight",

        "about":"This disease is caused by the fungi Alternaria linariae (formally known as A. solani) and is first observed on the plants as small, brown lesions mostly on the older foliage. Spots enlarge and concentric rings in a bull’s-eye pattern may be seen in the center of the diseased area. The tissue surrounding the spots may turn yellow. If high temperature and humidity occur at this time, much of the foliage is killed. Lesions on the stems are similar to those on leaves and sometimes girdle the plant if they occur near the soil line (collar rot). On the fruits, lesions attain considerable size, usually involving nearly the entire fruit. Concentric rings are also present on the fruit. Infected fruit frequently drops.",
        
        "remedy":"Use resistant or tolerant tomato cultivars. Use pathogen-free seed and do not set diseased plants in the field. Use crop rotation, eradicate weeds and volunteer tomato plants, space plants to not touch, mulch plants, fertilize properly, don’t wet tomato foliage with irrigation water, and keep the plants growing vigorously. Trim off and dispose of infected lower branches and leaves.To reduce disease severity, test the garden soil annually and maintain a sufficient level of potassium. Lime the soil according to soil test results. Side dress tomato plants monthly with calcium nitrate for adequate growth.If the disease is severe enough to warrant chemical control, select one of the following fungicides: mancozeb (very good); chlorothalonil or copper fungicides (good). Follow the directions on the label. See Table 1 for examples of fungicide products for home garden use. See Table 2 for tomato cultivars with resistance or tolerance to early blight.",
    }
}



export default async function handler(req, res) {

    let slug = req.query.slug

    if(req.method == 'GET') {     
        try {
            let data = diseases.slug
            return res.status(200).json(JSON.parse(data))
        } catch (error) {
            return res.status(404).json({message: 'no disease found'})
        }  

    } else {
        return res.status(400).json({message: "This method is not allowed"})
    }
}
