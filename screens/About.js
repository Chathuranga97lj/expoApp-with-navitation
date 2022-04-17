import React from 'react'
import { View, Text } from 'react-native'
import { global } from '../styles/global'

const About = () => {
  return (
    <View style={global.container}>
      <Text>About</Text>
      <Text>
        Developed by: H.M Chathuranga Jayawardhana
        Institute of Technology,
        University of Moratuwa.
      </Text>
    </View>
  )
}

export default About