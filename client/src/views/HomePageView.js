import React from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../store/actions';

import HomeContent from '../components/HomePage/HomeContent';
import homeConditional from '../components/HomePage/homeConditional';

class HomePageView extends React.Component{
    componentDidMount(){
        this.props.fetchStories()
    }

    render(){
        return(
            <>
                <ConditionalView 
                    loggedIn={this.props.token.length > 0} 
                    stories={this.props.stories}
                    isUpdating={this.props.isUpdating}
                />
            </>
        )
    }
}

const ConditionalView = homeConditional(HomeContent)

const mapStateToProps = state => {
    return{
        stories: state.storyReducer.stories,
        token: state.authenticationReducer.token,
        isUpdating: state.storyReducer.isUpdatingStory
    }
}

export default connect(
    mapStateToProps,
    {
        fetchStories
    }
)(HomePageView)