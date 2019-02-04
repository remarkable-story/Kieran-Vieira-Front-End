import React from 'react'

class LoginPageView extends React.Component{
    state = {
        username: '',
        password: ''
    }

    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginUser = () => {
        //send user data to backend here
        this.setState({
            username:'',
            password:'',
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.loginUser}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleLoginChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleLoginChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPageView