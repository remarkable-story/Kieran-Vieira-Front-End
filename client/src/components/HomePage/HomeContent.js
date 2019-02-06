import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import StoryContainer from '../StoryComponents/StoryCards/StoryContainer';

const StoryBtn = styled.div`
    display: flex;
    justify-content: center;
    a{
        display: flex;
        font-size: 1.5rem;
        background-color: #C12E6A;
        text-decoration: none;
        padding: 10px 25px;
        color: white;
        &:hover{
            transition: 0.2s;
            background-color: #8c1e4b;
        }
    }
`;

const HomeContent = props => {
    return(
        <>
            <StoryBtn>
                <Link to="/create-story">{props.isUpdating ? 'Update Story' : 'Create Your Story'}</Link>
            </StoryBtn>
            <StoryContainer stories={props.stories}/>
        </>
    )
}

export default HomeContent;