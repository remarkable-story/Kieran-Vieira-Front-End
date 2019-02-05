import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { createStory } from '../store/actions'

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
            story: '',
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
        this.props.createStory(this.props.token, this.state.storyInfo);
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

const mapStateToProps = state => {
    return{
        token: state.authenticationReducer.token
    }
}

export default connect(
    mapStateToProps,
    {
        createStory
    }
)(CreateStoryView)