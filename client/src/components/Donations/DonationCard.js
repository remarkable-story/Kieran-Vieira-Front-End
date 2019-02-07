import React from 'react';
import styled from 'styled-components'

const DonationItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 100%;
    margin: 5px;
    padding: 0 10px;
    border: 1px solid lightgray;
    border-radius: 2px;
    div{
        width: 25%;
        height: 40px;
        display: flex;
        align-items: center;
        align-content: center;
        h2{
            margin-left: 5px
        }
    }
`;

const DonationCard = props => {
    return(
        <DonationItem>
            <div>
                <h2>Amount:</h2>
                <h2>{props.donation.amount}</h2>
            </div>
            {props.donation.name && 
            <div>
                <h2>Donator:</h2>
                <h2>{props.donation.name}</h2>
            </div>
            }
            <div>
                <h2>Country:</h2>
                <h2>{props.donation.country}</h2>
            </div>
            {props.donation.comment && 
            <div>
                <h2>Comment:</h2>
                <h2>{props.donation.comment}</h2>
            </div>
            }
        </DonationItem>
    )
}

export default DonationCard