import React from 'react'
import './CardMessage.css'



export default function CardMessage(props) {

    const messages = props.messages
    return (
        <>
            <div class="bubble-container">
                {messages.map((message) => {
                    console.log(message)
                    let owner;
                    if (message.USERNAME == localStorage.getItem("userId")) {
                        owner = true
                    }

                    return (
                        <div class="bubble-container mt-5 mb-10">
                            {
                                owner ? (
                                    <div class="bubble sent text-center">
                                        {message.MESSAGE_VALUE}
                                    </div>
                                ) :
                                    <div class="bubble received">
                                        {message.MESSAGE_VALUE}
                                    </div>
                            }
                        </div>

                    )
                })}

            </div>

        </>
    )
}

