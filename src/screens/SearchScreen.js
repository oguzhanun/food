import React, {useState} from "react"
import { Text, View, ScrollView} from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultLists from "../components/ResultLists"

const SearchScreen = () => {
    const [termy, setTerm] = useState("")
    const [searchApi, result, errorMessage] = useResults()
    
    const groupByCost = (price) => {
        return result.filter((res)=>{
            return(
                res.price === price
            )
        })
    }
    
    return (
        // <View style={{flex:1}}>
        <>
            <SearchBar 
                term={termy} 
                onTermChange={(newTerm)=> {setTerm(newTerm)}}
                onTermSubmit={(termy)=>{searchApi(termy)}}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text> </Text>
            <ScrollView>
                {/* navigation={props.navigation}
                    navigation={props.navigation}
                    navigation={props.navigation}
                    navigation={props.navigation}  ResultLists kompanentinden bunları çıkarıyoruz. 
                    çünkü artık navigasyonu parent üzerinden almayacağız. withNavigation fonksiyonu ile
                    doğrudan react-navigation üzerinden alacağız.*/}
                <ResultLists  title="Cost Effective" result={groupByCost("$")}/>
                <ResultLists  title="Spender" result={groupByCost("$$")}/>
                <ResultLists  title="Big Spender" result={groupByCost("$$$")}/>
                <ResultLists  title="Big Big Spender" result={groupByCost("$$$$")}/>
            </ScrollView>
        {/* </View> */}
        </>
    )
}


export default SearchScreen