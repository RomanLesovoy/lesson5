import React from 'react';
import {useSelector} from "react-redux";
import {selectUser, selectUserStatus} from "../store/old/reducers/user";

const UserFromApi = () => {
    const userData = useSelector(selectUser);
    const userStatus = useSelector(selectUserStatus);
    const isPending = userStatus === 'pending';

    if (isPending) {
        return ('Pending');
    }


    if (userData) {
        return (
            <div>
                First name: { userData.name.first }
                <br/>
                Last name: { userData.name.last }
            </div>
        )
    }

    return (
        <div>
            No user
        </div>
    )
}

export default UserFromApi;
