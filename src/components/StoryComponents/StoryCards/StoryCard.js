import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Story = styled.div`
    width: 300px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 15px;
    a{
        color: black;
        text-decoration: none;
    }
    img{
        width: 100%;
        height: auto;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
    }
    div{
        padding: 15px;
        h1{
            font-size: 1.8rem;
            margin: unset;
            margin-bottom: 5px;
        }
        p{
            text-align: left;
            font-size: 1.6rem;
            margin: unset;
        }
    }
    &:hover{
        transition: 0.2s;
        transform: scale(1.04);
    }
`;

const StoryCard = props => {
    return(
        <Story>
            <Link to={`story/${props.story.id}`}>
                <img src={props.story.img} alt=''/>
                <div>
                    <h1>{props.story.country}</h1>
                    <p>{props.story.shortDescription}</p>
                </div>
            </Link>
        </Story>
    )
}

export default StoryCard