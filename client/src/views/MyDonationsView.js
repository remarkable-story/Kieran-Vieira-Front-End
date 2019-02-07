import React from 'react';
import { connect } from 'react-redux';

import { fetchDonations } from '../store/actions';

class MyDonationsView extends React.Component{
    componentDidMount(){
        this.props.fetchDonations()
    }

    render(){
        return(
            <>
            {localStorage.getItem('userType') === 'donator' ?
            <>
                {this.props.donations.length > 0 ?
                    this.props.donations.map(donation => {
                        return <h1>{donation.amount}</h1>
                    }) :
                <h1>loading donations...</h1>
            }
            </> :
            <h1>This page is only for Donators.</h1>
            }
            </>
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