export const actionTypes = {
    increment: 'counter/increment',
    decrement: 'counter/decrement',
    incrementBy: 'counter/incrementBy',
    fetchUniversities: 'universities/fetch',
    setUserPending: 'user/pending',
    setUser: 'user/setUser',
}

export const increment = () => ({
    type: actionTypes.increment,
});

export const decrement = () => ({
    type: actionTypes.decrement,
});

export const incrementBy = (amount) => ({
    type: actionTypes.incrementBy,
    payload: amount,
});

export const setUser = (user) => ({
    type: actionTypes.setUser,
    user: user,
})

export const setUserPending = () => ({
    type: actionTypes.setUserPending,
})