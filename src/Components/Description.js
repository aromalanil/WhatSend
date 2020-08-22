import React from 'react';
import {appName} from '../constants';
import demo from '../img/demo.webp'

function Description() {
    return (
        <div className="description">
            <div className="content">
            <h1>Whats is {appName} ?</h1>
            <p>Whatsapp only let's you make calls or send messages to the numbers present in your contact.</p>
            <p>But what if you don't want a person in your contact but still want to send a message to him ?</p>
            <p>And that's where {appName} comes in. Just fill the fields and press "Send Message" button.</p>
            </div>
            <div className="img-wrapper">
                <img  className="demo-image" src={demo} alt="demo-img"/>
            </div>
        </div>
    )
}

export default Description
