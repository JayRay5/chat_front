import React from 'react'
import './CardMessage.css'



export default function CardMessage(props) {

    const messages = props.messages
       return (
        <div className="conversation-container custom-container">
             <div class="bubble-container">
            {messages.map((message,i)=>{
                let owner;
                if(message.USERNAME==localStorage.getItem("userId")){
                    owner=true
                }
                if(message.MESSAGE_VALUE){
                if(messages.length==(i+1)){
                    console.log("ccccccc")
                    return(
                        <a id="last_message">
                        
                            {
                            owner?(
                                <div class="bubble-container mt-5 mb-10">
                                <div class="bubble sent text-left p-3">
                                {message.MESSAGE_VALUE}
                                </div>
                                </div>
                            ):
                            <div class="bubble-container mt-5 mb-10">
                            <div className='username-left'>{message.FIRSTNAME +" "+ message.LASTNAME}</div>
                            <div class="bubble received p-3">
                                {message.MESSAGE_VALUE}
                            </div>
                            </div>
                        }
                        </a>
                        
                    )
                }
                else{
                    return(
                        <>
                            
                            {
                            owner?(
                                <div class="bubble-container mt-5 mb-10">
                                <div class="bubble sent text-left p-3">
                                {message.MESSAGE_VALUE}
                                </div>
                                </div>
                            ):
                            <div class="bubble-container mt-5 mb-10">
                                 <div className='username-left'>{message.FIRSTNAME +" "+ message.LASTNAME}</div>
                            <div class="bubble received p-3">
                                {message.MESSAGE_VALUE}
                            </div>
                            </div>
                        }
                      </>
                        
                    )
                }
                }
            })}
                


            </div>

        </div>
    )
}

