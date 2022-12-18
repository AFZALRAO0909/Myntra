import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Xyz = ({
    title,
    style,
    onPress=()=>{},
}) => {
  return (
    <View>
      <Text style={{...style}} onPress={onPress('hello')}>{title}</Text>
    </View>
  )
}

export default Xyz

const styles = StyleSheet.create({})