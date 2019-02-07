import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteStory, startUpdatingStory } from '../store/actions'

class StoryPageView extends React.Component{
    state={
        singleStory:{
            title: '',
            country: '',
            story: '',
            description: '',
            id: ''
        }
    }


    componentDidMount(){
        axios.get(`https://remarkable-story-backend.herokuapp.com/api/stories/${this.props.match.params.id}`)
            .then(res => this.setState({singleStory:res.data[0]}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>{this.state.singleStory.title}</h1> 
                <h2>{this.state.singleStory.country}</h2>
                <p>{this.state.singleStory.story}</p>
                {localStorage.getItem('userType') === 'coordinator' &&
                <>
                    <button onClick={() => {
                        this.props.deleteStory(this.state.singleStory.id, localStorage.getItem('token'));
                        this.props.history.push('/')
                    }}>Delete</button>
                    <button onClick={() => {
                        this.props.startUpdatingStory(this.state.singleStory)
                        this.props.history.push('/create-story')
                    }}>Update</button>
                </>
                }
                {localStorage.getItem('userType') === 'donator' &&
                    <Link to='/add-donation'>Donate</Link>
                }
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        token: state.authenticationReducer.token,
        userId: state.authenticationReducer.userId
    }
}

export default connect(
    mapStateToProps,
    {
        deleteStory,
        startUpdatingStory
    }
)(StoryPageView)