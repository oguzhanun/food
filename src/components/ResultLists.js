import React from "react"
import {Text, StyleSheet, View,TouchableOpacity} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ResultsDetail from "./ResultsDetail"
import {withNavigation} from "react-navigation"


const ResultLists = (props)=> {
    if(!props.result.length){
        return null
    }
    return(
        <View style={styles.viewOne}>
            <Text style={{fontSize:18, fontWeight:"bold", marginLeft:10}}>{props.title}</Text>
            {/* <Text>{props.result.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.result}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>{
                    return(<TouchableOpacity onPress={()=>props.navigation.navigate("Results",{id : item.id})}>
                                <ResultsDetail result={item}/>
                            </TouchableOpacity>)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewOne:{
        marginTop : 5
    }
})
export default withNavigation(ResultLists)
