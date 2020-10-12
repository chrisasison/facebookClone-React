import { Avatar } from "@material-ui/core";
import React from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://avatars0.githubusercontent.com/u/69608633?s=460&u=047897434440b6f9d5506353683cf21fd74f73aa&v=4"/>
                <form>
                    <input
                        className="messageSender__input"
                        placeholder={`What's on your mind ?`}
                    />
                    <input placeholder="imageURL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                    
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
