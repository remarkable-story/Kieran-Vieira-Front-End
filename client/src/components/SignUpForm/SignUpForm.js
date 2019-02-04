import React from 'react';

const SignUpForm = props => {
    return(
        <form onSubmit={props.signUpUser}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        value={props.userInfo.username}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={props.userInfo.password}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        value={props.userInfo.email}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        name="fullname" 
                        value={props.userInfo.fullname}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <select 
                        placeholder="Country"
                        name="country" 
                        value={props.userInfo.country} 
                        onChange={props.handleSignUpChange}
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
                        value={props.userInfo.orgTitle}
                        onChange={props.handleSignUpChange}
                        required
                    >
                        <option value="donor">Donor</option>
                        <option value="coordinator">Coordinator</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
    )
}

export default SignUpForm;