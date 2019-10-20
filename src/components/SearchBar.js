import React from "react"
import {StyleSheet, View, TextInput} from "react-native"
import {Feather} from "@expo/vector-icons"


const SearchBar = (props) => {

    return(
        <View style={styles.viewOne}>
            <Feather style={styles.featherOne} name="search" size={30}/>
            <TextInput 
                style={styles.textInputOne} 
                value={props.term}
                onChangeText={(newTerm)=> {props.onTermChange(newTerm)}}
                onEndEditing={()=>{props.onTermSubmit()}}
                autoCapitalize="none"
                autoCorrect = {false}
                placeholder="Search"
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    viewOne : {
        backgroundColor : "#F0EEEE",
        height : 50,
        borderRadius : 8,
        margin : 10,
        flexDirection : "row",
        //borderWidth : 1,
        borderColor : "black"
    },
    textInputOne : {
        paddingLeft : 10,
        
        flex : 1
    },
    featherOne : {
        alignSelf : "center",
        paddingLeft : 5,
        fontSize : 35
    }
})

export default SearchBar