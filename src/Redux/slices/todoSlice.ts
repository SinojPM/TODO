import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListData } from "../../interfaces/interface";


const initialState:ListData[] | [] = []
const todoSlice = createSlice({
    name:"todolist",
    initialState:{
        Data:initialState,
    },
    reducers:{
        updateList:(state,listItem:PayloadAction<ListData>)=>{
            
            state.Data = [...state.Data,listItem.payload]
        },
        updateStatusToOngoing:(state,id:PayloadAction<number>)=>{
                
                state.Data.forEach(item=>{
                    item.id===id.payload?item.status="ongoing":item
                })
                
        },
        updateStatusToComplete:(state,id:PayloadAction<number>)=>{
            state.Data.forEach(item=>{
                item.id===id.payload?item.status="completed":item
                
            })
        },
        handleDeleteItem:(state,id:PayloadAction<number>)=>{
            let index = 0
            for(let i=0;i<state.Data.length;i++){
                if(state.Data[i].id==id.payload){
                    index=i
                }
            }
            state.Data.splice(index,1)
            
        }
    }
})

export const {updateList,updateStatusToOngoing,updateStatusToComplete,handleDeleteItem} = todoSlice.actions
export default todoSlice.reducer