import React from "react";
import './chat-bar.css'
function ChatBar({setChatInd,chatInd}){
    return(
        <div class='chat-bar'>

            <div class='profile'>
               <h1 style={{color:'white'}}>Anurag</h1> 

            </div>

            <div style={{marginTop:'50%' }} class='channels'>
                <div onClick={()=>setChatInd(0)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Announcemnt</h3>
                </div>
                <div onClick={()=>setChatInd(1)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Group Chat</h3>
                </div>
                <div onClick={()=>setChatInd(2)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Mentor Chat</h3>
                </div>

            </div>





        </div>
    )

}
export default ChatBar;