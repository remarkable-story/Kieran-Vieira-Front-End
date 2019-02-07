import React from 'react';

class MyDonationsView extends React.Component{
    render(){
        return(
            <>
            {localStorage.getItem('userType') === 'donator' ?
            <h1>Donations here</h1> :
            <h1>This page is only for Donators.</h1>
            }
            </>
        )
    }
}

export default MyDonationsView