import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
        isLogged: false
    },
    reducers: {
        addUser:(state, action) =>{
            state.userInfo = action.payload
            state.isLogged = true
        },
        removeUser:(state, action) => {
            state.userInfo = null
            state.isLogged = false
        }
    }

})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;