import { StyleSheet, Text, View } from "react-native";
import React from "react";


const FormList=({route,navigation }) => {
    let data = route.params
    console.log("===34567====>",route.params);
    return(
        <View style={{flex:1,paddingHorizontal:8}}>
            <Press onpress={()=>navigation.navigate('from')} style={{alignSelf:'flex-end'}} title='Add'/>
             <View style={{flex:1,alignSelf: 'center',}}>
                <Text style={{fontSize:30,alignSelf:'center',color:'#000'}}>{data.para}</Text>
             </View>
        </View>
    )
}
export default FormList

const style = StyleSheet.create({})