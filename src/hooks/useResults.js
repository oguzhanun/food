import {useState, useEffect} from "react"
import axios from "axios"


export default ()=>{
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState()

    const searchApi = async (searchTerm) => {
        console.log("searchApi içindeyiz...")
        
        try{
            const response = await axios({
                method : "get",
                url : "https://api.yelp.com/v3/businesses/search",
                headers:{
                    "Authorization" : "Bearer iU5ypEJZY1nQpX1IUcpvCiodm3BM7LT7nz1PS6lR2dZa0YfS5h9zQVBJUhJo8K-yPiasNKP7QXTAxolF3T-TiEfYOY35Su96h1y_xRL5rdQDaAj7lU6ly9E-iqCdXXYx"
                },
                params:{
                    limit : 30,
                    term : searchTerm,
                    location : "350 5th Ave, New York, NY 10118"
                }
            })
            console.log("no problem")
            //console.log(response.data.businesses)
            setResult(response.data.businesses)
        } catch(e){
            console.log(e)
            setErrorMessage("Something went wrong !!!")
        }
    }

    useEffect(()=>{
        searchApi("pasta")
    },[])

    return ([searchApi, result, errorMessage])
}