import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Button from './Button'

const LogIn = () => {
  return (
    <>
    <View>
        <Text style={{textAlign:'center',fontSize:30,top:170,fontWeight:'bold'}}>Log In Now</Text>
        <Text style={{textAlign:'center',top:200}}> please login to continue using our app </Text>
        <TextInput style={{textAlign:'center',fontSize:20,top:250}}  keyboardType='text' placeholder='Enter the Email'/>
        <TextInput style={{textAlign:'center',fontSize:20,top:280}}  keyboardType='text' placeholder='Enter the password'/>
      <Text style={{marginLeft:190,top:350}}>Forgot Password?</Text>
     
    </View>
    {/* < Button Submiit ="LOGIN"/> */}

    </>

    
  )
}

export default LogIn

const styles = StyleSheet.create({})