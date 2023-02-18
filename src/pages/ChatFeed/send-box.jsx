import React from "react";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";

function SendBox({settext,text,messageref,firebase,dummy}){

    const sendMessage = async (e) => {
        e.preventDefault();
        if(text===''){
            return;
        }

        await  addDoc(messageref, {
          text: text,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          user:'anurag'
        })
    
       
    
      
    
        settext('');
        document.getElementById("textform").reset();
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }


    return (
        <form id='textform' class='d-flex' onSubmit={sendMessage}>
  <div class="form-group" style={{width:'90%'}}>
   
    <input  class="form-control"placeholder="Send Message"  onChange={(e)=>{settext(e.target.value)}}/>
   
  </div>
  
  
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
        
    )


}
export default SendBox;