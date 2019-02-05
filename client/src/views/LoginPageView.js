import React from 'react'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm/LoginForm'

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

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
            <FormContainer>
                <h1>Login</h1>
                <LoginForm 
                    loginInfo={this.state.loginInfo}
                    handleLoginChange={this.handleLoginChange}
                    loginUser={this.loginUser}
                />
            </FormContainer>
        )
    }
}

export default LoginPageView