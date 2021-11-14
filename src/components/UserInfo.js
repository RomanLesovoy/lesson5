import React from 'react';
import { UserContext } from '../context/UserContext';

const UserInfo = () => (
    <UserContext.Consumer>
        {({ user, updateState }) => (
            <>
                <p>{user.userName}</p>
                <p>{user.surname}</p>
            </>
        )}
    </UserContext.Consumer>
);

export default UserInfo;