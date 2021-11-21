import React from 'react';

interface AdditionalData {
    address: string,
}
interface UserPart {
    body?: any
}

export enum Gender {
    Male = 'male',
    Female = 'female'
}

export interface User extends UserPart {
    userName: string,
    surname: string,
    additionalData: AdditionalData,
    family: Array<string>,
    gender: Gender,
    [userData: string]: any,
}

type UserType = string | User



export const user: User = {
    body: '',
    userName: 'Roman',
    surname: 'Lisovyi',
    gender: Gender.Female,
    family: ['Father', 'Mother'],
    additionalData: {
        address: '',
    },
}

const getUser = (): User => user


export const UserContext = React.createContext(user);
