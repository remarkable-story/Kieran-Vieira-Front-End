import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoadingGif from '../../assets/loading.gif';

const Loading = styled.img`
    width: 65px;
    height: 65px;
    margin: 0 auto;
`;

const homeConditional = HomeContent => props => {
    if(props.loggedIn){
        return <HomeContent 
            stories={props.stories}
            isUpdating={props.isUpdating}
        />
    }
    console.log(props.isLoggingIn)
    return (
        props.isLoggingIn ?
        <Loading src={LoadingGif} alt="Logging In..."/>:
        <Link to="/login">
            <h1>Login to view stories</h1>
        </Link>
    )
}

export default homeConditional