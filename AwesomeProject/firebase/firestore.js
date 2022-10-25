import{collection,addDoc,doc, deleteDoc} from 'firebase/firestore';
import {firestore} from './firebase-setup';


export async function deleteFromDB(key) { try {
    await deleteDoc(doc(firestore,'Goals',key))
 }
    catch (err) {
    console.log(err) }
    }

export async function writeToDB(goal){
    try{
    await addDoc(collection(firestore,'Goals'),goal);
}catch(err){
    console.log(err);
}

// function 

}