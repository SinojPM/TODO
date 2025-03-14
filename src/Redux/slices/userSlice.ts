import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Welcome,Users } from "../../interfaces/interface";
import { getData } from "../../api/axios";

const initialState:Welcome[] | [] = []
export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
    const result:Users = await getData()
    console.log(result);
    return result.users
    
})
const userSlice = createSlice({
    name:'users',
    initialState:{
        users:initialState
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,apiResult:PayloadAction<Welcome[] | []>)=>{
            state.users=apiResult.payload
        })
    }

})

export default userSlice.reducer    