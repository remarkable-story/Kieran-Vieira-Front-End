import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMyStories } from '../store/actions';
import StoryContainer from '../components/StoryComponents/StoryCards/StoryContainer';

class MyStoryView extends React.Component{
    componentDidMount(){
        this.props.fetchMyStories(localStorage.getItem('token'), localStorage.getItem('userId'))
    }

    render(){
        return(
            <>
                <h1>My Stories</h1>
                {this.props.stories.length > 0 ? 
                <>
                <StoryContainer stories={this.props.stories}/>
                </> :
                <h1>You have no stories... <Link to="/create-story">Create one?</Link></h1>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        stories: state.storyReducer.stories,
        isUpdating: state.storyReducer.isUpdatingStory
    }
}

export default connect(
    mapStateToProps,
    {
        fetchMyStories
    }
)(MyStoryView);