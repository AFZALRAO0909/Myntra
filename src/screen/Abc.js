import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Abc = ({
    title,
    style,
    onPress=()=>{},
}) => {
  return (
    <View>
      <Text style={{...style}} onPress={onPress('hello')}> Afzal</Text>
    </View>
  )
}

export default Abc

const styles = StyleSheet.create({})