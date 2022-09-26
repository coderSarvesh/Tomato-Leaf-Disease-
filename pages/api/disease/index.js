
const disease = ()=>{
    const [disease, setdisease] = useState([])

    useEffect(()=> {
        console.log("Use effect runnig");
        fetch("http://localhost:3000/api/diseases").then((a)=>{
        return a.json();}).then((parsed)=>{
            console.log(parsed);
        })
    })
}
export default disease;