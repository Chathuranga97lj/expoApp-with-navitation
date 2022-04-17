import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import About from '../screens/About'
import Home from '../screens/Home'
import Task from '../screens/Task'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Task" component={Task}/>
        <Stack.Screen name = "About" component={About}/>
    </Stack.Navigator>
  )
}

export default MyStack