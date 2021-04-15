import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const joinRoom = (event) => {
        if (!name || !room) {
            event.preventDefault();
        }
    }

    return (
        <div className="home-container">
            <div className="cont">
                <div className="heading-box">
                    <h2 className="heading">JOIN ROOM</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="enter your name"
                        value={name}
                        onChange={handleNameChange}
                        className="text-input-field" />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Room"
                        value={room}
                        onChange={handleRoomChange}
                        className="text-input-field mt-20"
                    />
                </div>
                <Link onClick={joinRoom} to={`/chat?&name=${name}&room=${room}`}>
                    <button className="enter-room-button mt-20" type="submit">
                        Join room
      </button>
                </Link>
            </div>
        </div>
    );
};

export default Home