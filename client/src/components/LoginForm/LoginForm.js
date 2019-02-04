import React from 'react';

const LoginForm = props => {
    return(
        <form onSubmit={props.loginUser}>
            <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                value={props.loginInfo.username}
                onChange={props.handleLoginChange}
            />
            <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={props.loginInfo.password}
                onChange={props.handleLoginChange}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm