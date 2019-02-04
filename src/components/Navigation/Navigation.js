import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    height: 100px;
    a{
        font-size: 2rem;
    }
`;

const Navigation = props => {
    return(
        <NavBar>
            <div className="nav-left">
                <h1>Bountiful</h1>
            </div>
            <div className="nav-right">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
            </div>
        </NavBar>
    )
}

export default Navigation