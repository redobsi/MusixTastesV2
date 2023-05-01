import firebase from "firebase/compat/app";
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCTmoff7do6yWqpwjPwGyewyiJ_jz0T9A0",
    authDomain: "musixtastes.firebaseapp.com",
    databaseURL: "https://musixtastes-default-rtdb.firebaseio.com",
    projectId: "musixtastes",
    storageBucket: "musixtastes.appspot.com",
    messagingSenderId: "576353030067",
    appId: "1:576353030067:web:160ad7d07e59b97d8885c6",
    measurementId: "G-4WKCVV26P1"
  };

export function getData(ref_path: string): Promise<object|null> {
  return new Promise((resolve, reject) => {
    // Initialize Firebase app

    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database
    const database = getDatabase();

    // Define the path to the data you want to retrieve
    const dataRef = ref(database, ref_path);

    // Retrieve the data
    onValue(dataRef, (snapshot) => {
      // The data is contained in the snapshot parameter
      const data = snapshot.val();
      // Do something with the data
      console.log(data);
      const new_data = Object.keys(data).map(key => ({
        id:key,
        ...data[key]
      }));
      resolve(new_data);
    }, (error) => {
      reject(error);
    });
  });
}

export async function setData(refPath: string, data: any): Promise<void> {
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const database = getDatabase();
  const dataRef = ref(database, refPath);

  return set(dataRef, data)
    .then(() => {
      console.log('Data set successfully!');
    })
    .catch((error) => {
      console.error('Error setting data:', error);
    });
}