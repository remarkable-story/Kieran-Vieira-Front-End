import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchDonations } from '../store/actions';

import DonationCard from '../components/Donations/DonationCard';
import LoadingGif from '../assets/loading.gif';

const DonationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`;

const Header = styled.h1`
    font-weight: 100;
    a{
        text-decoration: none
    }
`;

const Loading = styled.img`
    width: 65px;
    height: 65px;
    margin: 0 auto;
`;

class MyDonationsView extends React.Component{
    componentDidMount(){
        this.props.fetchDonations()
    }

    render(){
        return(
            <DonationsContainer>
                {localStorage.getItem('userType') === 'donator' ?
                <>
                    <Header>Donations</Header>
                    {this.props.donations.length > 0 ?
                        this.props.donations.map(donation => {
                            return <DonationCard donation={donation}/>
                        }) :
                    <Loading src={LoadingGif} alt="loading donations..."/>
                }
                </> :
                <Header>This page is only for Donators.</Header>
                }
            </DonationsContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        donations: state.donationsReducer.donations
    }
}

export default connect(
    mapStateToProps,
    {
        fetchDonations
    }
)(MyDonationsView);