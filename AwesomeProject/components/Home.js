import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView,ScrollView, FlatList } from 'react-native';
import Header from './Header.js';
import React, { useState ,useEffect} from 'react';
import Input from './Input.js';
import GoalItem from './GoalItem.js';
import {writeToDB,deleteFromDB} from '../firebase/firestore';
import { onSnapshot, QuerySnapshot ,where,collection,query} from 'firebase/firestore';
import {firestore,auth,storage} from '../firebase/firebase-setup';
import {ref,uploadBytes} from 'firebase/storage';
import * as Notifications from 'expo-notifications' ;
import {verifyPermission} from './NotificationHandler';

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  
  const verifyPermission = async () => {
    const permissionStatus = await Notifications.getPermissionsAsync();
    if (permissionStatus.granted) {
      return true;
    }
    const requestedPermission = await Notifications.requestPermissionsAsync({
      ios: {
        allowBadge: true,
      },
    });
    return requestedPermission.granted;
  };


useEffect(() => {
  const getPushToken = async () => {
    const hasPermission = verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (err) {
      console.log("push token ", err);
    }
  };
  getPushToken();
}, []);


  useEffect(()=>{
    const unsubscribe=onSnapshot(
    query(
      collection(firestore,'Goals'),
      where('user','==',auth.currentUser.uid)
    ),
      (querySnapshot)=>{
      if(querySnapshot.empty){
        setGoals([]);
        return;
      }
      setGoals(
        querySnapshot.docs.map((snapDoc)=>{
          let data=snapDoc.data();
          data={...data,key:snapDoc.id};
          return data;
        })
      );
    });
    return ()=>{unsubscribe()};
  },[]);
  const getImage=async(uri)=>{
    try{
      const response=await fetch(uri);
      if(!response.ok){
        throw new Error('image fetch request failed')
      }
      const blob=await response.blob();
      return blob;
    }catch(err){
      console.log('fetch image',err)
    }
  }

  const onTextAdd = async function (newObj) {
    const uri=newObj.uri
    try{
    if (uri){
      // console.log('uri',uri)
      const imageBlob=await getImage(uri);
      const imageName = uri.substring(uri.lastIndexOf('/') + 1);
      const imageRef = await ref(storage, `images/${imageName}`)
      const uploadResult = await uploadBytes(imageRef, imageBlob);
      newObj.uri=uploadResult.metadata.fullPath;
      // console.log('res',uploadResult);
    }
    await writeToDB(newObj);
  }catch(err){
    console.log('image upload',err)
  }
    console.log(newObj);
    // const newGoal={text:newText,key:Math.random()};
    // await writeToDB({text:newText});
    
    // setGoals((prevgoals)=>{
    //   return [...prevgoals,newGoal]
    // });
    // setGoals([...goals,newGoal]);
    console.log(goals);
    // console.log(newText);
    setModalVisible(false);
  }

  const name = "my app";
  const [text, setText] = useState("");
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }

  const[goals,setGoals]=useState([]);

  async function onDelete(deletedKey){
    console.log('delete pressed',deletedKey)
    await deleteFromDB(deletedKey);
    //  setGoals(goals.filter(goal=>{return goal.key!=deletedKey}));
    
}

function itemPressed(goal)
{
  console.log("item pressed");
  console.log("@",goal)
  navigation.navigate("GoalDetails",{goalObject:goal});
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Text>Open up App.js to start working on {name}!</Text> */}
        <Header appName={name} />
        
        <Button title="add a goal" onPress={makeModalVisible} />
      </View>

      <View style={styles.bottomContainer}>
      
      {/* <ScrollView contentContainerStyle={styles.scrollviewItems}>
          {goals.map((goal)=>{return (
            //the parent view of ScrollViewneed to have a height
          <View key={goal.key} style={styles.textContainer}>
            <Text style={styles.text}>{goal.text}</Text>
            </View>
            )})}
              </ScrollView> */}
{console.log('goals:',goals)}
<FlatList data={goals} 
renderItem={({item})=>{
  console.log(item);
  return(
<GoalItem goal={item} onDelete={onDelete} onItemPress={itemPressed}/>
  )}}
contentContainerStyle={styles.scrollviewItems}>
          
              </FlatList>

              
          <Text style={styles.text}>you typed...</Text>
        
      </View>
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // flexDirection:'row'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'pink',
    // alignItems: 'center',
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    color: 'blue',
    padding:15,
    margin:20
  },
  text: {
// fontSize:20

  },
  scrollviewItems:{
    alignItems: 'center'
  }

});
