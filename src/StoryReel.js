import React from 'react';
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFEv3fFHKXU9N-0L5MJnBTwW9HkJIVBpgdIA&usqp=CAU'
                profileSrc='https://avatars0.githubusercontent.com/u/69608633?s=460&u=047897434440b6f9d5506353683cf21fd74f73aa&v=4'
                title='Chris Alexander'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWNjOIyQ-ETNmIudruNBBIRDinbggztl41Og&usqp=CAU'
                profileSrc='https://avatars1.githubusercontent.com/u/68451200?s=64&v=4'
                title='Chris MacGeorge'
            />
            <Story
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb8_el81pRbvxlmHzKel0M04GVOpCNbpApKQ&usqp=CAU'
            profileSrc='https://avatars3.githubusercontent.com/u/70074229?s=64&v=4'
            title='Dan Yoder'
            />
            <Story
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFEv3fFHKXU9N-0L5MJnBTwW9HkJIVBpgdIA&usqp=CAU'
            profileSrc=''
            title='Noel Aguirre'
        />
            <Story
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtwf_Ga7bSi7jUZdWCgJ6vl-AuO2ukgQfW7w&usqp=CAU'
            profileSrc='https://avatars1.githubusercontent.com/u/48836188?s=64&v=4'
            title='Troy Mateo'
            />
            <Story
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFEv3fFHKXU9N-0L5MJnBTwW9HkJIVBpgdIA&usqp=CAU'
            profileSrc=''
            title='Noel Aguirre'
        />
        </div>
    )
}

export default StoryReel
