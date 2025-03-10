import { useState } from "react"
import { ListData, UpdateList } from "../interfaces/interface";

const Add:React.FC<UpdateList> = ({handleUpdateList,todoList}) => {
    const [listItem,setListItems] = useState<ListData>({id:0,item:" ",status:"list"})
    const updateListItems = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        handleUpdateList(listItem)
        setListItems({id:0,item:" ",status:"list"})
    }
  return ( 
    <form onSubmit={(event)=>updateListItems(event)} className="add-container">
        <input value={listItem.item} onChange={(event)=>setListItems({...listItem,item:event.target.value,id:todoList.length+1})} type="text" placeholder="Enter Task Here" />
        <button type="submit">Add</button>
    </form>
  )
}

export default Add