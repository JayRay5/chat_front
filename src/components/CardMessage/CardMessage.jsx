import React from 'react'
import './CardMessage.css'


import { delete_chat, get_chats } from '../../utils/api'

export default function CardMessage() {

    return (
        <>
            <div class="bubble-container">
                <div class="bubble received">
                    Message reçu 1
                </div>

                <div class="bubble sent">
                    Message envoyé 1
                </div>

                <div class="bubble received">
                    Message reçu 2
                </div>

                <div class="bubble sent">
                    Message envoyé 2
                </div>
            </div>

        </>
    )
}