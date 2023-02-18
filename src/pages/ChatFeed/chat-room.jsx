import React, { useEffect } from "react";
import "./chatroom.css";


import { useState, useRef } from "react";
import Avatar from 'react-avatar';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'

//   const element = 
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
// import { doc, onSnapshot } from "firebase/firestore";

import { orderBy, limit } from "firebase/firestore";  

function ChatRoom({db, Hackathon, Team,Channels,messageref, dummy,chatInd }) {
    const[edit,toggleEdit]=useState(-1);
  const [data, setdata] = useState([]);
  const [dataId, setdataId] = useState([]);
  const [edittext,setEditText]=useState('');
  var user="anurag";
 

//   console.log(chatInd);
  
//   console.log(data);


    useEffect(()=>{
        // console.log(chatInd)
       
        const q = query(messageref, orderBy("createdAt"));
        onSnapshot(q, (data) => {
            let temp = [];
            let ids=[];
            data.docs.map((item) => {
              temp.push({ ...item.data() });
              ids.push(item.id)
            //   console.log(dataId)
            });
            setdata(temp);
            setdataId(ids)
          });

          
      
        
        //   dummy.current.scrollIntoView({ behavior: 'smooth' });

    },[chatInd],[])
    useEffect(()=>{
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    },[data])
   

  return (
    <div class="chat-room" style={{ overflow: "scroll" }}>
      {data.map((item,index) => {
        return ChatMessage({item,index});
      })}
      <span ref={dummy}></span>
    </div>
  );
      function handleToggleEdit({index}){

        if(edit===-1){
            toggleEdit(index);
        }
        else if(edit===index){
            toggleEdit(-1);
        }
        else{
            toggleEdit(index);
        }
      }

 



  function ChatMessage({item,index}) {
    if(user===item.user){
    return (
        
        
        <div>
    <div class='d-flex msg-component'>
      <div className="msg-box d-flex">
        {
            ((index-1<0) || !(data[index-1]?.user===data[index]?.user))?
            <div>
                 <Avatar name="Anurag Raut" size="40" round='20px' />

            </div>
            
            :
            <div style={{width:'40px'}}></div>
           
            
            
        }
     
      
      <p>{item.text}</p>
  
      </div>
      <div class='edit-buttons' >
      <FontAwesomeIcon onClick={()=>{handleToggleEdit({index})}} icon={faEdit} />
    
      <FontAwesomeIcon onClick={()=>{deletemsg({index})}} icon={faTrash} />
    
      </div>
     
     
    </div>
    {
         
        edit===index?
       
        <div >
        <input type="text" onChange={(e)=>{setEditText(e.target.value)}} />
        <button style={{height:'20px'}} onClick={()=>{if(!(edittext==='')){editmsg({index,edittext},toggleEdit(-1),setEditText(''))}}}>

        </button>
      </div>:
      null

    }
  
    </div>
    
   )
}

else{

    return(
        <div class='d-flex msg-component'>
        <div className="msg-box d-flex">
        {
            (!(index-1>0) && !(data[index-1]?.user===data[index]?.user))?
            <div>
                 <Avatar name={item.user} size="40" round='20px' />

            </div>
            
            :
            <div style={{width:'40px'}}></div>
           
            
            
        }
        
        <p>{item.text}</p>
    
        </div>
       
       
       
      </div>
    );

}
  }

  function deletemsg({index}){
    // console.log(dataId[index]);
    const doctoupdate = doc(db, `/Hackathon/${Hackathon}/Teams/${Team}/Channels/${Channels[chatInd]}/Messages`, dataId[index])
    deleteDoc(doctoupdate)
      .then(() => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  function editmsg({index,edittext}){
    // console.log(dataId[index]);
    const doctoupdate = doc(db, `/Hackathon/${Hackathon}/Teams/${Team}/Channels/${Channels[chatInd]}/Messages`, dataId[index])
    updateDoc(doctoupdate, {
        text: edittext
      })
        .then(() => {
          console.log("updated");
        })
        .catch((err) => {
          console.log(err.message);
        })
  }


}

export default ChatRoom;
