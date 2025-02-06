import { createSlice } from "@reduxjs/toolkit";
export const postSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[{
            postId:"P001",
            caption:"Learning Redux Toolkit",
            likes:22,
            user:{
                userId:"user1234",
                name:'John Doe'
            }

        },
        {
            postId:"P002",
            caption:"Fun in Learning Redux Toolkit",
            likes:82,
            user:{
                userId:"user1234",
                name:'John Doe'
            }

        }]
    }
    ,reducers:{}
})
export default postSlice.reducer;