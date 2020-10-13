import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS65jzj0cTJN8NQ5AKpWvjwYLk8WD8rU2Ey3g&usqp=CAU"
                username="Henry Clement"
                message="I have been working on the website for all most 3 hours.... damn."
                image="https://www.xperiencedays.com/images/Dirt-Biking-Lesson-Plympton-XD-1225-001_700x410.jpg"
            />
            <Post
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS65jzj0cTJN8NQ5AKpWvjwYLk8WD8rU2Ey3g&usqp=CAU"
            username="Henry Clement"
            message="I really need to stop and go play APEX LEGENDS!"
            image=""
        />
        </div>
    )
}

export default Feed
