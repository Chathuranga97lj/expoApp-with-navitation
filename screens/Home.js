import { View, Text, Button } from 'react-native'
import React from 'react'
import { global } from '../styles/global'

const Home = ({navigation}) => {
  const goToTask = () => {
    navigation.push("Task")
  }

  return (
    <View style={global.container}>
      <Text>Home</Text>
      <Button title="Go to Task" onPress={goToTask}/>
    </View>
  )
}



export default Home