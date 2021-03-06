import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/logo.png'

const NavBar = styled.div`
    height: 100px;
    .nav-container{
        width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-right{
            a{
                color: black;
                text-decoration: none;
                font-size: 1.8rem;
                margin-right: 20px;
                padding: 5px 15px;
                &:hover{
                    cursor: pointer;
                    transition: 0.2s;
                    color: white;
                    background-color: #FBA423
                }
                @media (max-width: 720px){
                    margin: 0 5px;
                }
            }
            .active{
                color: white;
                background-color: #FBA423
            }
        }
        @media (max-width: 1100px){
            width: 95%;
        }
        @media (max-width: 720px){
            flex-direction: column;
            height: unset;
            width: 95%;
        }
    }
`;

const Navigation = props => {
    return(
        <NavBar>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/"><img src={logo} alt=''/></Link>
                </div>
                <div className="nav-right">
                    <NavLink exact to="/">Home</NavLink>
                    {localStorage.getItem('loggedIn') ?
                    <>
                        {localStorage.getItem('userType') === 'coordinator' ?
                        <NavLink to="/my-stories">My Stories</NavLink>  :
                        <NavLink to='/donations'>Donations</NavLink>
                        }
                        <a onClick={() => {
                            localStorage.clear();
                            props.history.push('/login')
                        }}>Log Out</a>
                    </>
                    :
                    <NavLink to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </NavBar>
    )
}

export default Navigation