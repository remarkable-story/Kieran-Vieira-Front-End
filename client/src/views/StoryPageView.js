import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { deleteStory } from '../store/actions'

class StoryPageView extends React.Component{
    state={
        singleStory:{
            title: '',
            country: '',
            story: '',
            description: '',
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
                <button onClick={() => {
                    this.props.deleteStory(this.state.singleStory.id, this.props.token);
                    this.props.history.push('/')
                }
                }>Delete</button>
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
        deleteStory
    }
)(StoryPageView)