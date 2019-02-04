import React from 'react'

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
                <form onSubmit={this.signUpUser}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleSignUpChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleSignUpChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleSignUpChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        name="fullname" 
                        value={this.state.fullname}
                        onChange={this.handleSignUpChange}
                        required
                    />
                    <select 
                        placeholder="Country"
                        name="country" 
                        value={this.state.country} 
                        onChange={this.handleSignUpChange}
                        required
                    >
                        <option value="Brazil">Brazil</option>
                        <option value="Bolvia">Bolvia</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <select 
                        type="text" 
                        placeholder="Organization Title" 
                        name="orgTitle" 
                        value={this.state.orgTitle}
                        onChange={this.handleSignUpChange}
                        required
                    >
                        <option value="donor">Donor</option>
                        <option value="coordinator">Coordinator</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpView;