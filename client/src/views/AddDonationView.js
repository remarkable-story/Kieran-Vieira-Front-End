import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addDonation } from '../store/actions';

import DonationForm from '../components/DonationForm/DonationForm';

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

class AddDonationView extends React.Component{
    state = {
        donationInfo: {
            name: '',
            amount: '',
            comment: '',
            country: ''
        }
    }

    addDonation = e => {
        this.props.addDonation({...this.state.donationInfo, user_id: localStorage.getItem('userId')})
        e.preventDefault();
        this.setState({
            donationInfo: {
                name: '',
                amount: '',
                comment: '',
                country: ''
            }
        });
        this.props.history.push('/')
    }

    handleDonationChange = e => {
        this.setState({
            donationInfo: {
                ...this.state.donationInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            localStorage.getItem('userType') === 'donator' ?
            <FormContainer>
                <h1>Donate</h1>
                <DonationForm
                    addDonation={this.addDonation}
                    handleDonationChange={this.handleDonationChange}
                    donationInfo={this.state.donationInfo}
                />
            </FormContainer> :
            <h1>This page is only for Donators</h1>
        )
    }
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(
    mapStateToProps,
    {
        addDonation
    }
)(AddDonationView);