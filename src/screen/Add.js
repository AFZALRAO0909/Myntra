import react from"react";
import{View,text,TouchableOpacity,Image, AsyncStorage,}from "react-native";





const Data=({navigator})=>{
    const getdata=async()=>{
        let name=await  asyncStorage.getItem('name');
        console.log("====>",name)
    }
    return(

        <View style={{flex:1,justifyContent:'center',backgroundColor:'white'}}>
            

        </View>

    )
}