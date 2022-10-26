import {createReducer} from '@reduxjs/toolkit'
import {createAction} from "@reduxjs/toolkit";
import addUser from "../components/AddUser";

const initialState = {
    users: [
        {
            id:{
                title:4980011111,
                checked: false
            },
            name: {
                title: "John",
                checked: false
            },
            family_name: {
                title: "Stewart",
                checked: false
            },
            mobile: {
                title: "02348992019",
                checked: false
            },
            birth_date: {
                title: "1991/01/13",
                checked: false
            },
            address: {
                title: "No. 58 Goldensmith St,London,U.K",
                checked: false
            },
            img_url: {
                title: "/img/Rectangle5.png",
                checked: false
            }
        },
        {
            id: {
                title: 4980011112,
                checked: false
            },
            name: {
                title: "Jack",
                checked: false
            },
            family_name: {
                title: "Stewart",
                checked: false
            },
            mobile: {
                title: "02348992019",
                checked: false
            },
            birth_date: {
                title: "1991/01/13",
                checked: false
            },
            address: {
                title: "No. 58 Goldensmith St,London,U.K",
                checked: false
            },
            img_url: {
                title: "/img/Rectangle7.png",
                checked: false
            },
        },
        {
            id: {
                title: 8463830885,
                checked: false
            },
            name: {
                title: "Natalia",
                checked: false
            },
            family_name: {
                title: "Gomez",
                checked: false
            },
            mobile: {
                title: "02348992019",
                checked: false
            },
            birth_date: {
                title: "1986/06/06",
                checked: false
            },
            address: {
                title: "No. 58 Goldensmith St,London,U.K",
                checked: false
            },
            img_url: {
                title: "/img/Rectangle6.png",
                checked: false
            },
        }
    ],
    currentUser: {}
}

createAction('addUser', user => user)
createAction('editUser', user => user)

const usersReducer = createReducer({...initialState},
    (builder) => {
        builder.addCase(addUser , (state, action) => {
            console.log(action)
        })
    }
)

export default usersReducer