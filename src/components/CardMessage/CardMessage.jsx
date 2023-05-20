import React from 'react'
import './CardMessage.css'



export default function CardMessage(props) {

    const messages = props.messages
    let i=1
       return (
        < div className="conversation-container">
             <div class="bubble-container">
            {messages.map((message)=>{
                i+=1
                let owner;
                if(message.USERNAME==localStorage.getItem("userId")){
                    owner=true
                }
                if(message.MESSAGE_VALUE){
                if(messages.length==i){

                    return(
                        <a id="last_message">
                        <div class="bubble-container mt-5 mb-10">
                            {
                            owner?(
                                <div class="bubble sent text-center">
                                {message.MESSAGE_VALUE}
                                </div>
                            ):
                            <div class="bubble received">
                                {message.MESSAGE_VALUE}
                            </div>
                        }
                        </div>
                        </a>
                        
                    )
                }
                else{
                    return(
                    
                        <div class="bubble-container mt-5 mb-10">
                            {
                            owner?(
                                <div class="bubble sent text-center">
                                {message.MESSAGE_VALUE}
                                </div>
                            ):
                            <div class="bubble received">
                                {message.MESSAGE_VALUE}
                            </div>
                        }
                        </div>
                        
                    )
                }
                }
            })}
                

                

            </div>

        </div>
    )
}

