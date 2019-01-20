import React from 'react';
import Summary from '../components/UserPage/Summary';
import Confirm from '../components/UserPage/Confirm';

const AccountPage = () => {
    return (
        <div className="account">
            <Confirm />
            <Summary />
        </div>
    );
};

export default AccountPage;
