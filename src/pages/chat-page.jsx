import React, { useEffect, useState } from "react";

import ChatBar from "./ChatBar/chatbar";
import ChatFeed from "./ChatFeed/chatfeed";
import firebase from 'firebase/compat/app';

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
const app=firebase.initializeApp({
    apiKey: "AIzaSyBcJo1L-Z2pweUsbpbIiOEkyanMHTOv8nU",
    authDomain: "duhacks-644f1.firebaseapp.com",
    projectId: "duhacks-644f1",
    storageBucket: "duhacks-644f1.appspot.com",
    messagingSenderId: "906804235351",
    appId: "1:906804235351:web:904db7291b2dcf3c0ce712"
  })
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();
  const db = getFirestore(app);
function Chat(){
  const { state } = useLocation();
  // var {hackathon}=state;
  console.log(state);
    var Hackathon='N2vuNc7NKUswlcpixx1l'
    const [chatInd,setChatInd]=useState(1);

    
    const [Channels,setchannel]=useState(['']);
    var team='20xeBxjQfzm6hbuXqvI2';
    const channelref = collection(db, `/Hackathon/${Hackathon}/Teams/${team}/Channels`)

    useEffect(()=>{
        getDocs(channelref)
        .then((res) => {
          var c=[]
          res.docs.map((item) => {
            c.push(item.id)
          });
          setchannel(c);
        })
        .catch((err) => {
          console.log(err.message);
        })
        

    },[])
    // console.log(Channels);
   
    return(
       <div style={{width:'100%'}} class='d-flex main-chat'>
        <ChatBar chatInd={chatInd} setChatInd={setChatInd}/>
        

        <ChatFeed Hackathon={'N2vuNc7NKUswlcpixx1l'} Team={team} Channels={Channels} chatInd={chatInd} />



       </div>

    
    );


}
export default Chat;