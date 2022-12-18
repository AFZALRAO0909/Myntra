
import { StyleSheet, Text, View, Input} from "react-native";
import React from "react";
import { useState } from "react";
import Innput from "./Innput";                                   


const Data=()=>{
    const[Name,setName]=useState('');
    const[adreese,setadreese]=useState('');
    const[email,setemail]=useState('');
    const[pincode,setpincode]=useState('');
    const[number,setnumber]=useState('');

return( 
    <View>
        <Text style={style.name}>name:{Name}</Text>
        <Text style={style.name}>adreese:{adreese}</Text>
        <Text style={style.name}>email:{email}</Text>
        <Text style={style.name}>pincode:{pincode}</Text>
        <Text style={style.name}>number:{number}</Text>

<Innput style={{margintop:20}} placeholder = "enter the name"  onchange={(e)=>setName(e)}/>
<Innput placeholder="enter the email " onchange={(e)=>setadreese(e)}/>
<Innput  placeholder="enter the pincode" onchange={(e)=>setemail(e)}/>
<Innput  placeholder="Enter the adreese " onchange={(e)=>setpincode(e)}/>
<Innput  placeholder="enter the number" onchange={(e)=>setnumber(e)}/>
    </View>
    )   }  
     
    export default Data;

    // const style=StyleSheet.create({
    //  name:{
    //     fontSize:15,
    //     marginBottom:10,
    //     color:'red',
    //     marginLeft:10
    //      },
    // })