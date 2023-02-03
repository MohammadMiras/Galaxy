import { DialogContext } from 'Contexts'
import EditIcon from '@mui/icons-material/Edit'
import {
    useContext,
    useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import EntityAction from './EntityAction'
const ActionEdit = ({ edit, entity }
) => {
    const [open, setopen] = useState(false);

    const manageEdition = () => {

        if (typeof edit === 'string') {
            useNavigate(edit);
        } else {
            setopen(true)
        }
    }


    const editAction = <EntityAction
        icon={<EditIcon style={{ color: '#10B981' , fontSize:"20px" }}  />}
        title={"Edit"}
        click={() => {
            if (edit) {
                manageEdition(edit)
            }
        }}
    />
    return <>
        <DialogContext.Provider value={{
            entity,
            setopen,
            open
        }}>

            {editAction}

        </DialogContext.Provider>
    </>
}
export default ActionEdit