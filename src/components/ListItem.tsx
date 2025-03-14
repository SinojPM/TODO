
import { useDispatch } from "react-redux"
import { ListItemProps} from "../interfaces/interface"
import { updateStatusToOngoing ,updateStatusToComplete, handleDeleteItem} from "../Redux/slices/todoSlice"
const ListItem:React.FC<ListItemProps> = ({data,index,isList,isOngoing}) => {
    const dispatch = useDispatch()
    return (
    
    <div className="List-container">
        <h3>{index+1}.</h3>
        <h3 className="list-content">{data.item} </h3>
        <div className="list-actions">
        <i onClick={()=>dispatch(handleDeleteItem(data.id))} className="icon-trash fa-solid fa-trash"></i>
        {
            isList?
            <i onClick={()=>dispatch(updateStatusToOngoing(data.id))} className="icon-next fa-solid fa-arrow-right"></i>
            :
            isOngoing&&
            <i onClick={()=>dispatch(updateStatusToComplete(data.id))} className="icon-next fa-solid fa-arrow-down"></i>
        }
        </div>
    </div>
  )
}

export default ListItem