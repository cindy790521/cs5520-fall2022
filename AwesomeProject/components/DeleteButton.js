import { StyleSheet,View, Text,Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function DeleteButton({onDeletePressed}) {
    return(
        <Pressable 
        onPress={onDeletePressed}
        style={({pressed})=>{
          return pressed&&styles.pressedItem;
        }}
        android_ripple={{color:"#223355", foreground: true}}
        >
          <View style={styles.button}>
          <EvilIcons name="trash" size={24} color="black" />
            {/* <Text style={styles.button}>x</Text> */}
          </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button:{
        color:'red',
        fontSize:18,
        flex:1,
        justifyContent:'center'
    },
    pressedItem:{
      opacity:0.5,
      backgroundColor:"#222"
    }
})