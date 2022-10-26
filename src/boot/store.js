import { configureStore } from '@reduxjs/toolkit'


import usersReducer from "../stores/users.js";

const reducer = {
    users: usersReducer
}

export const store = configureStore({
    reducer,
})