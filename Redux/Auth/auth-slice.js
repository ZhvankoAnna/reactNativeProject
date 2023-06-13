import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: '',
    userNickname: '',
    userEmail: '',
    userAvatar: '',
    stateChange: false,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserInfo: (state, {payload}) => ({
            ...state,
            userId: payload.id,
            userEmail: payload.email,
            userNickname: payload.nickname,
            userAvatar: payload.avatar,
            stateChange: true,
        }),
        userLogOut: (state) => ({
            state: initialState,
        }),
    },
})
