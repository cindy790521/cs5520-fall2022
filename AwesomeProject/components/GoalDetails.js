import { View, Text, FlatList, Button, Image } from 'react-native';
import React,{useEffect,useState} from 'react';
import { getDownloadURL, ref } from "firebase/storage";
import {storage} from '../firebase/firebase-setup';

export default function GoalDetails({route, navigation}) {
  const [users,setUsers]=useState([]);
  const [imageURL,setImageURL]=useState('');
  const goal=route.params.goalObject;
  
  useEffect(()=>{
      const getImageURL=async()=>{
        try{
      if (goal.uri){
        // console.log('goal.uri',goal.uri)
        const reference = ref(storage, goal.uri);
        const downloadImageURL = await getDownloadURL(reference);
        // console.log('downloadImageURL:',downloadImageURL)
        setImageURL(downloadImageURL);
      }}catch(err){
        console.log('download image', err);
      }
    }
    getImageURL();
    },[]);
     
  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok){
    throw new Error('the fetch request failed')  
  }
  const data=await response.json();
  console.log('read',data);
  setUsers(data);
  }
  catch (err){
console.log(err)
  }}
    fetchUsers();
  },[])

  const addUser=async()=>{
    try{
    const result=await fetch('https://jsonplaceholder.typicode.com/users',{
method:'POST',
headers:{
  'Content-type':'application/json'
},
//convert JS object to JSON
body:JSON.stringify(
  {name:'Neda'}
  )
    });
    if (!response.ok){
      throw new Error('post fetch failed')
    }
    const data=await response.json();
    console.log('add',data);
    setUsers(prevUsers=>[prevUsers,data]);
  }catch(err){
    console.log(err)}
  };

  
  
    // console.log(route)
    return (
    <View>
      <Text>GoalDetails:{route.params.goalObject.text}</Text>
      
      {imageURL &&(
        <Image source={{uri: imageURL}} style={{width:100, height:100}}/>)} 
      <Button title='addUser' onPress={addUser}/>
      <FlatList data={users} renderItem={({item})=>{
        // console.log('item',item)
        return <Text>{item.name}</Text>

      }}/>
    </View>
  )
}