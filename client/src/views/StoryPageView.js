import React from 'react';
import { connect } from 'react-redux'

import { fetchStory } from '../store/actions'

class StoryPageView extends React.Component{

    componentDidMount(){
        this.props.fetchStory(this.props.match.params);
    }

    render(){
        return(
            <h1>story here</h1>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        story: state.storyFetcher.story
    }
}

export default connect(
    mapStateToProps,
    {
        fetchStory
    }
)(StoryPageView)