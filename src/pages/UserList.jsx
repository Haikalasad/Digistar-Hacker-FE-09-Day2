import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/UserList.css'
import { userData } from '../data/UserData';

const UserList = () => {
    const navigate = useNavigate();

    const handleViewDetail = (id) => {
        navigate(`/users/${id}`);
    };

    return (
        <div className="user-list-container">
            <h1>User List</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Photo Profile</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} alt={user.name} className="user-photo" /></td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => handleViewDetail(user.id)} className="view-detail-btn">
                                    View Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
