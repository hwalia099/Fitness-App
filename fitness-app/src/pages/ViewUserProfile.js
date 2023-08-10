import  React, {useEffect, useState } from 'react';
import ShowUserProfile from '../components/ShowUserProfile';
import { fetchData } from '../utils/fetchData';

const ViewUserProfile = () => {
   

    return (
        <div>
            <h2>My Profile</h2>
            <ShowUserProfile/>
        </div>
    )
}

export default ViewUserProfile;