import { View, Text, FlatList, Button } from 'react-native'
import React,{useEffect,useState} from 'react'

export default function GoalDetails({route, navigation}) {
  const [users,setUsers]=useState([]);

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
      <Button title='addUser' onPress={addUser}/>
      <FlatList data={users} renderItem={({item})=>{
        console.log('item',item)
        return <Text>{item.name}</Text>

      }}/>
    </View>
  )
}