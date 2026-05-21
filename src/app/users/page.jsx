import React from 'react';
import { getUsers } from '../lib/data';
import UserTablePage from '../component/UserTable';

const usersPage = async () => {
    const users = await getUsers()
    return (
        <div>
            <h2>Users: {users.length} </h2>
            <UserTablePage users={users}/>
        </div>
    );
};

export default usersPage;