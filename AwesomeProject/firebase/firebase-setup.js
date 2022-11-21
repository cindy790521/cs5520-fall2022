import { initializeApp } from 'firebase/app'; 
import { getFirestore } from 'firebase/firestore'; 
import{apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId} from'@env';
// import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { initializeAuth , getReactNativePersistence} from 'firebase/auth';
import { getStorage } from "firebase/storage";

// To import a Firebase service, use this pattern: import {} from 'firebase/<service>'
//Your web app's Firebase configuration. 
// Copy this object from Firebase console
const firebaseConfig = {
    
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
 } ;
const myApp = initializeApp(firebaseConfig); 
export const firestore = getFirestore(myApp);
// export const auth = getAuth(myApp);
export const auth = initializeAuth(myApp, {
  persistence: getReactNativePersistence(AsyncStorage) });
export const storage = getStorage();