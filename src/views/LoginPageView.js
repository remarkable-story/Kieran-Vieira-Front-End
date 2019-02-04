import React from 'react'

import LoginForm from '../components/LoginForm/LoginForm'

class LoginPageView extends React.Component{
    state = {
        loginInfo:{
            username: '',
            password: ''
        }
    }

    handleLoginChange = e => {
        this.setState({
            loginInfo:{
                ...this.state.loginInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    loginUser = e => {
        e.preventDefault();
        console.log(this.state.loginInfo)
        //send user data to backend here
        this.setState({
            loginInfo:{
                username: '',
                password: ''
            }
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <LoginForm 
                    loginInfo={this.state.loginInfo}
                    handleLoginChange={this.handleLoginChange}
                    loginUser={this.loginUser}
                />
            </div>
        )
    }
}

export default LoginPageView