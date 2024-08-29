import React from 'react';
import { useParams } from 'react-router-dom';
import { userData } from '../data/UserData';
import '../styling/UserDetail.css'

const UserDetail = () => {
    const { id } = useParams();
    const user = userData.find((u) => u.id === parseInt(id));

    if (!user) {
        return <div>User not found!</div>;
    }

    return (
        <div className="profile-card">
        <div className="card-header">
            <img src={user.avatar} alt={user.name} className="profile-photo" />
        </div>
        <div className="card-body">
            <h1>{user.name}</h1>
            <p className="username">@{user.username}</p>
            <p className="email">{user.email}</p>
            <p className="phone">{user.phone}</p>
            
            <div className="address">
                <h3>Address</h3>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
            
            <div className="company">
                <h3>Company</h3>
                <p><strong>{user.company.name}</strong></p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    </div>
    );
};

export default UserDetail;
