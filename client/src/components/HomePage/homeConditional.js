import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <h1>logging in...</h1>:
        <Link to="/login">
            <h1>Login to view components</h1>
        </Link>
    )
}

export default homeConditional