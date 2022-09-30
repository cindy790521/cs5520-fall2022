import { View, Text } from 'react-native'
import React from 'react'

// export default function Header(props) {
  export default function Header({appName}) {
  return (
    <View>
      {/* <Text>Open up App.js to start working on {props.name}!</Text> */}
      <Text>Open up App.js to start working on {appName}!</Text>
    </View>
  )
}