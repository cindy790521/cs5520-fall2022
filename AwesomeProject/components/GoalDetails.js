import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetails({route}) {
  return (
    <View>
        {console.log(route)}
      <Text>GoalDetails:{route.params.goalObject.text}</Text>
    </View>
  )
}