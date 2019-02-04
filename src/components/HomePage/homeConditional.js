import React from 'react';
import { Link } from 'react-router-dom';

const homeConditional = HomeContent => props => {
    if(props.loggedIn){
        return <HomeContent stories={props.stories}/>
    }

    return (
        <Link to="/login">
            <h1>Login to view components</h1>
        </Link>
    )
}

export default homeConditional