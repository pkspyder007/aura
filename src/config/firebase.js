import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDioclbEh-kYKZXZ5_9FdPqnMY6Mx3VxGc",
  authDomain: "dsc-iiitu.firebaseapp.com",
  databaseURL: "https://dsc-iiitu.firebaseio.com",
  projectId: "dsc-iiitu",
  storageBucket: "dsc-iiitu.appspot.com",
  messagingSenderId: "602152914431",
  appId: "1:602152914431:web:f061d61a92c8fa8624ebca"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};