import React from 'react';

import stockImg from '../assets/stock-1.jpg'
import HomeContent from '../components/HomePage/HomeContent'
import homeConditional from '../components/HomePage/homeConditional';

class HomePageView extends React.Component{
    state = {
        mockData:[
            {
                id: 0,
                title: 'Story Name Here',
                country: 'countryName',
                img: stockImg,
                shortDescription: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis.',
                description: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis est aliquet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean viverra ut nibh eu pulvinar. Aliquam diam justo, tincidunt ac urna vel, varius porta nulla.',
                date: '05/02/2089'
            },
            {
                id: 1,
                title: 'Story Name Here',
                country: 'countryName',
                img: stockImg,
                shortDescription: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis.',
                description: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis est aliquet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean viverra ut nibh eu pulvinar. Aliquam diam justo, tincidunt ac urna vel, varius porta nulla.',
                date: '05/02/2089'
            },
            {
                id: 2,
                title: 'Story Name Here',
                country: 'countryName',
                img: stockImg,
                shortDescription: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis.',
                description: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis est aliquet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean viverra ut nibh eu pulvinar. Aliquam diam justo, tincidunt ac urna vel, varius porta nulla.',
                date: '05/02/2089'
            },
            {
                id: 3,
                title: 'Story Name Here',
                country: 'countryName',
                img: stockImg,
                shortDescription: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis.',
                description: 'Morbi in suscipit orci. Quisque ut nunc scelerisque, scelerisque libero eu, gravida elit. In et semper elit. Mauris cursus lacus lacus, ut lobortis est aliquet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean viverra ut nibh eu pulvinar. Aliquam diam justo, tincidunt ac urna vel, varius porta nulla.',
                date: '05/02/2089'
            }
        ]
    }

    render(){
        return(
            <ConditionalView loggedIn={true} stories={this.state.mockData}/>
        )
    }
}

const ConditionalView = homeConditional(HomeContent)

export default HomePageView