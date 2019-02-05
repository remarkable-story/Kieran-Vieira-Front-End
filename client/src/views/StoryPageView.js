import React from 'react';
import { connect } from 'react-redux'

import { fetchStories } from '../store/actions'

class StoryPageView extends React.Component{

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        const storyId = this.props.match.params.id;
        const singleStory = this.props.stories.find(story => {
            return `${story.id}` === storyId
        })
        return(
            singleStory ? 
            <div>
                <h1>{singleStory.title}</h1> 
                <h2>{singleStory.country}</h2>
                <p>{singleStory.story}</p>
            </div>
            : <h1>Loading...</h1>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        stories: state.storyFetcher.stories
    }
}

export default connect(
    mapStateToProps,
    {
        fetchStories
    }
)(StoryPageView)