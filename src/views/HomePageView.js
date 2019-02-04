import React from 'react';

import HomeContent from '../components/HomePage/HomeContent'
import homeConditional from '../components/HomePage/homeConditional';

class HomePageView extends React.Component{
    render(){
        return(
            <ConditionalView loggedIn={true}/>
        )
    }
}

const ConditionalView = homeConditional(HomeContent)

export default HomePageView