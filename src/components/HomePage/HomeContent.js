import React from 'react';
import StoryContainer from '../StoryComponents/StoryCards/StoryContainer';

const HomeContent = props => {
    return(
        <StoryContainer stories={props.stories}/>
    )
}

export default HomeContent;