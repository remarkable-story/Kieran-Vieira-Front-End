import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchDonations } from '../store/actions';

import DonationCard from '../components/Donations/DonationCard'

const DonationsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
                    <h1>Donations:</h1>
                    {this.props.donations.length > 0 ?
                        this.props.donations.map(donation => {
                            return <DonationCard donation={donation}/>
                        }) :
                    <h1>loading donations...</h1>
                }
                </> :
                <h1>This page is only for Donators.</h1>
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