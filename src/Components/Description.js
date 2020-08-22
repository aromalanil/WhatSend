import React from 'react';
import {appName} from '../constants';

function Description() {
    return (
        <div className="description">
            <div className="content">
            <h1>{appName}</h1>
            <p>By default Whatsapp only let's you message or call to the number which is present in your contact.</p>
            <p>But what if you don't want a number in your contact but still send a message to it ?</p>
            <p>{appName} let's you do exactly the same.</p>
            </div>
            <div className="image">
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default Description
