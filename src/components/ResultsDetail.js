import React from "react"
import {Text, View, Image, StyleSheet} from "react-native"


const ResultsDetail = ({result}) => {
    
    return(
        <View style={styles.viewOne}>
            <Image style={styles.imageOne} source={{uri : result.image_url}}/>
            <Text style={styles.textOne}>{result.name}</Text>
            <Text style={styles.textTwo}>{result.rating} Stars & {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewOne:{
        marginBottom : 10
    },
    imageOne : {
        width : 250,
        height : 120,
        borderRadius : 4,
        marginLeft : 10
    },
    textOne : {
        fontSize:15,
        fontWeight : "bold",
        marginLeft : 10
    },
    textTwo : {
        marginLeft : 10
    }
})

export default ResultsDetail