import EntityAction from "./EntityAction"
import DeleteIcon from '@mui/icons-material/Delete';
const ActionDelte =({id})=>{
    return<>
    <EntityAction
        icon={<DeleteIcon style={{ color: '#dc2626' , fontSize:"20px" }}/>}
        title={"Delete"}
        clice={()=>{alert("De")}}
        />
    </>
}
export default ActionDelte