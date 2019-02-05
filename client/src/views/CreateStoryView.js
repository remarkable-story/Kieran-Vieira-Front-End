import React from 'react';
import styled from 'styled-components';

import CreateStoryForm from '../components/CreateStoryForm/CreateStoryForm'

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

class CreateStoryView extends React.Component{
    state = {
        storyInfo: {
            title: '',
            country: '',
            description: '',
        }
    }

    handleStoryChange = e => {
        this.setState({
            storyInfo: {
                ...this.state.storyInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    submitStory = e => {
        //send user data to backend here
        e.preventDefault();
        this.setState({
            storyInfo: {
                title: '',
                country: '',
                description: '',
            }
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <FormContainer>
                <h1>Create Story</h1>
                <CreateStoryForm 
                    submitStory={this.submitStory}
                    handleStoryChange={this.handleStoryChange}
                    storyInfo={this.state.storyInfo}
                />
            </FormContainer>
        )
    }
}

export default CreateStoryView