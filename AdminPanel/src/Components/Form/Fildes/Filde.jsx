import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'

const Filled = ({
    required,
    progress,
    type,
    id,
    label,
    helpText,
    children

}) => {

    return <div className="field mt-4">
        <FormControl
            id="fullWidth"
            // error={isDirty && !isValid()}
            fullWidth
            required={required ? true : false}
            disabled={progress}
        >
            {
                type !== 'Check'
                && type !== 'Upload'
                && type !== 'Radio'
                && type !== 'View'
                && <InputLabel
                    htmlFor={id}
                    disableAnimation={progress}
                    disabled={progress}
                >
                    {label}
                </InputLabel>
            }
            {children}
            <FormHelperText
                disabled={progress}
            >
                {helpText || " "}
            </FormHelperText>
        </FormControl>
    </div>
}
export default Filled 