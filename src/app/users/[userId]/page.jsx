import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage =async ({params}) => {
    console.log("Params -", params);
    const {userId} = await params;
    console.log("UserId-", userId);
    const user = await getUserById(userId);
        console.log("User", user);
    return (
        <div>
            <h1>User: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Role: {user.role}</h1>
        </div>
    );
};

export default UserDetailsPage;