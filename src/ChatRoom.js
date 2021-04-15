import React, { useState, useEffect } from 'react'
import queryString from "querystring";
import io from 'socket.io-client';
import Bar from './Components/Bar';
import Input from './Components/Input';
import Messages from './Components/Messages';
import './chatRoom.css'
let socket;

function ChatRoom({ location }) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users,setUsers]=useState('');

    const API = "https://projectchat-app.herokuapp.com/";
    useEffect(() => {
        const search = queryString.parse(location.search);
        const { name, room } = search;
        socket = io(API);
        // console.log(socket);
        setName(name);
        setRoom(room);
        // console.log(name, room);
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
        // socket.emit('disconnect');
        // socket.off();

    }, [API, location.search]);
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [message,users]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    return (
        <div className="main-container">
            <div className="sub-container">
                <Bar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default ChatRoom
