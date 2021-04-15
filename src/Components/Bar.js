import React from 'react'
import CloseIcon from '../Icons/closeIcon.png';
import OnlineIcon from '../Icons/onlineIcon.png';
import './Bar.css';
function Bar({room}) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={OnlineIcon} alt="olIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={CloseIcon} alt="close icon" /></a>

            </div>

        </div>
    )
}

export default Bar
