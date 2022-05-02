import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser }) => {
    const userCard = users.map(user => <UserCard user={ user } key={ user.id } deleteUser={ deleteUser }/>)

  return (
    <div class="row">
        <h1>Customer List</h1>
        <div class="column">
            <ul>
                { userCard }
            </ul>
        </div>
    </div>
  )
}

export default UserList