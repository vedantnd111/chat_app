import React from 'react'
import './Input.css';

function Input({ message, setMessage, sendMessage }) {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Enter text here.."
                onChange={({ target: { value } }) => setMessage(value)}
                value={message}
                onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={(event) => sendMessage(event)}>send
            <span class="material-icons" style={{paddingTop:"3px",marginLeft:"5px"}}>
                send
</span></button>

        </form>
    )
}

export default Input
