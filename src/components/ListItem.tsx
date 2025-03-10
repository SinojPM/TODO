
import { ListItemProps} from "../interfaces/interface"
const ListItem:React.FC<ListItemProps> = ({data,index,isList,isOngoing,updateStatus,handleDelete}) => {
    
    return (
    
    <div className="List-container">
        <h3>{index+1}.</h3>
        <h3 className="list-content">{data.item} </h3>
        <div className="list-actions">
        <i onClick={()=>handleDelete(data.id)} className="icon-trash fa-solid fa-trash"></i>
        {
            isList?
            <i onClick={()=>updateStatus(data.id)} className="icon-next fa-solid fa-arrow-right"></i>
            :
            isOngoing&&
            <i onClick={()=>updateStatus(data.id)} className="icon-next fa-solid fa-arrow-down"></i>
        }
        </div>
    </div>
  )
}

export default ListItem