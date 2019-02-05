import React from 'react'
import styled from 'styled-components';

import SignUpForm from '../components/SignUpForm/SignUpForm'

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

class SignUpView extends React.Component{
    state = {
        userInfo: {
            username: '',
            password: '',
            email: '',
            country: '',
            title: '',
        }
    }

    handleSignUpChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    signUpUser = e => {
        //send user data to backend here
        e.preventDefault();
        console.log(this.state.userInfo)
        this.setState({
            userInfo: {
                username: '',
                password: '',
                email: '',
                country: '',
                title: '',
            }
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <FormContainer>
                <h1>Sign Up</h1>
                <SignUpForm 
                    signUpUser={this.signUpUser}
                    handleSignUpChange={this.handleSignUpChange}
                    userInfo={this.state.userInfo}
                /> 
            </FormContainer>
        )
    }
}

export default SignUpView;