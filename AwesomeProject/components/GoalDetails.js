import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetails({route, navigation}) {
    console.log(route)
    return (
    <View>
      <Text>GoalDetails:{route.params.goalObject.text}</Text>
    </View>
  )
}