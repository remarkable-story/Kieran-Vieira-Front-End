import React from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../store/actions'

import HomeContent from '../components/HomePage/HomeContent'
import homeConditional from '../components/HomePage/homeConditional';

class HomePageView extends React.Component{
    componentDidMount(){
        this.props.fetchStories()
    }

    render(){
        return(
            <ConditionalView loggedIn={true} stories={this.props.stories}/>
        )
    }
}

const ConditionalView = homeConditional(HomeContent)

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
)(HomePageView)