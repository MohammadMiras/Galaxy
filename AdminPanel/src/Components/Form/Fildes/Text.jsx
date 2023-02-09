import Filled from "./Filde"
import OutlinedInput from '@mui/material/OutlinedInput'

const Text = ({
    label,
    ...ref
}) => {
    return <>
        <Filled
            label={label}
            {...ref}>
            <OutlinedInput
                label={label}
                onChange={(e) => {
                    console.log(e.target.value)
                }}
            />
        </Filled>
    </>
}
export default Text