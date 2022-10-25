import { initializeApp } from 'firebase/app'; 
import { getFirestore } from 'firebase/firestore'; 
import{apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId} from'@env';
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