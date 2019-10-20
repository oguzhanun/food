import React,{useState, useEffect} from "react"
import {Text, View, StyleSheet,FlatList,Image} from "react-native"
import axios from "axios"


const ResultsShow = (props) => {
    const id = props.navigation.getParam("id")
    
    const [result, setResult] = useState(null)

    const getResults = async (sth) => {
        const result = await axios({
            method:"get",
            url:`https://api.yelp.com/v3/businesses/${sth}`,
            headers:{
                "Authorization" : "Bearer iU5ypEJZY1nQpX1IUcpvCiodm3BM7LT7nz1PS6lR2dZa0YfS5h9zQVBJUhJo8K-yPiasNKP7QXTAxolF3T-TiEfYOY35Su96h1y_xRL5rdQDaAj7lU6ly9E-iqCdXXYx"
            }
        })
        setResult(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        getResults(id)
    }, [])

    if(!result){
        return null
    }

    return(
        <View>
            <Text>
                Results Show !!!! the id is : {id}
                        The name of the restaurant is : {result.name}
            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={{width:200, height:125}} source={{uri : item}}/>
                }}
            />
        </View>
    )
}


export default ResultsShow