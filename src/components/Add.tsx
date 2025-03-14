import { useState } from "react"
import { ListData, UpdateList } from "../interfaces/interface";
import { useAppDispatch } from "../Redux/Hooks";
import { updateList } from "../Redux/slices/todoSlice";


const Add:React.FC<UpdateList> = ({todoList}) => {
    const [listItem,setListItems] = useState<ListData>({id:0,item:" ",status:"list"})
    const dispatch = useAppDispatch()
    const updateListItems = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        dispatch(updateList(listItem))
        setListItems({id:0,item:" ",status:"list"})
    }
  return ( 
    <form onSubmit={(event)=>updateListItems(event)} className="add-container">
        <input id="add-input" value={listItem.item} onChange={(event)=>setListItems({...listItem,item:event.target.value,id:todoList.length+1})} type="text" placeholder="Enter Task Here" />
        <button type="submit">Add</button>
    </form>
  )
}

export default Add