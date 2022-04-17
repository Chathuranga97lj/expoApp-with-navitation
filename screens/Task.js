import { View, Text, Button } from 'react-native'
import React from 'react'
import { global } from '../styles/global'

const Task = ({navigation}) => {

  const goToHome = () => {
    navigation.push("Home")
  }

  return (
    <View style={global.container}>
      <Text>Task</Text>
      <Button title="Go to Home" onPress={goToHome}/>
    </View>
  )
}

export default Task