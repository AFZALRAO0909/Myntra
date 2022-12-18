import { StyleSheet,Text,TextInput,View,label } from "react-native";
import React from "react";

const Innput = ({
    placeholder,
    onchange,
    securetextEntry,
    placeholderTextColor,
    length,
}) => {
    return(
        <View>

         <TextInput style={{
            backgroundColor:"white",
            elevation:10,
            borderRadius:7,
            width:'90%',
            fontSize:15,
            height:60,
            marginTop:0,
            alignSelf:'center',
            paddingRight:10,
            borderWidth:0,
            borderColor:'blue',
            marginBottom:20,
            marginTop:10,
            ...style
         }}
            placeholder={placeholder}
            onChangeText={onchange}
            securetextEntry={securetextEntry}
            placeholderTextColor={placeholderTextColor}
            maxLength={length}
            /> 
        </View>
    )
}
export default Innput;