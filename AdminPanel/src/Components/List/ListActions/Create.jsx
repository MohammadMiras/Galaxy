import { DialogContext } from 'Contexts'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
    useContext,
    useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const ActionCreate = ({ create, entity }
) => {
    const [open, setopen] = useState(false);

    const manageCreateion = () => {

        if (typeof create === 'string') {
            useNavigate(edit);
        } else {
            if(typeof create == 'object')
            {
                return create
            }else if(typeof create == 'function')
            {
                return create()
            }
        }
    }


    const creatAction = <>
        <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="outlined"
            color="success"
            onClick={manageCreateion}
        >
            Create
        </Button>
    </>
    return <>
        <DialogContext.Provider value={{
            entity,
            setopen,
            open
        }}>

            {creatAction}

        </DialogContext.Provider>
    </>
}
export default ActionCreate