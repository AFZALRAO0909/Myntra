import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({Submiit}) => {
  return (
    <View>


<TouchableOpacity>
      <Text style={{backgroundColor:'yellow',width:'40%',height:40,top:280,paddingLeft:50,alignSelf:'center',fontWeight:'bold'}}>{Submiit}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})