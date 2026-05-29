import React from 'react';
import { getUsers } from '../lib/data';
import UserTablePage from '../component/UserTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../component/AddUserModal';

const usersPage = async () => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <div className='flex justify-between text-2xl'>
                <h2>Users Management: {users.length} </h2>
                <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <UserTablePage users={users} deleteAction={deleteUser} />
        </div>
    );
};

export default usersPage;