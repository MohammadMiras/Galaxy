import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const EntityAction = (
    {
        icon,
        title,
        clice
    }
) => {

    return <>
        <Tooltip title={title}>
            <IconButton size="small" onClick={clice}>
                {icon ?? <DeleteIcon/>}
            </IconButton>
        </Tooltip>

    </>
}
export default EntityAction