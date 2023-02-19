import React from "react";
import './chat-bar.css'
import { useNavigate } from "react-router";
function ChatBar({setChatInd,chatInd,userid,mentor}){
    const navigate=useNavigate();
    return(
        <div class='chat-bar'>

            <div class='profile' onClick={()=>{navigate(-1)}}>
               <h1 style={{color:'white'}}>{userid}</h1> 

            </div>

            <div style={{marginTop:'50%' }} class='channels'>
                {
                    mentor===1?
                    <div onClick={()=>setChatInd(0)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Mentor Chat</h3>
                </div>
                    

                    :
                    <div>
                         <div onClick={()=>setChatInd(0)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Announcement</h3>
                </div>
                <div onClick={()=>setChatInd(1)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Group Chat</h3>
                </div>
                <div onClick={()=>setChatInd(2)}>
                    <h3 style={{color:'white' ,marginTop:'10%'}}>Mentor Chat</h3>
                </div>
                    </div>


                }
                
               

            </div>





        </div>
    )

}
export default ChatBar;