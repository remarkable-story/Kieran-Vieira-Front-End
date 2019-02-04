import React from 'react'

import SignUpForm from '../components/SignUpForm/SignUpForm'

class SignUpView extends React.Component{
    state = {
        userInfo: {
            username: '',
            password: '',
            email: '',
            fullname: '',
            country: '',
            orgTitle: '',
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
                fullname: '',
                country: '',
                orgTitle: '',
            }
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <SignUpForm 
                    signUpUser={this.signUpUser}
                    handleSignUpChange={this.handleSignUpChange}
                    userInfo={this.state.userInfo}
                />
            </div>
        )
    }
}

export default SignUpView;