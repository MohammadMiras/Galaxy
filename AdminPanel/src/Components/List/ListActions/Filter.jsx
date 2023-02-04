import EntityAction from "./EntityAction"
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterAction = ({ open, setOpen }) => {
    return <>
        <EntityAction
            icon={<FilterListIcon style={{ fontSize: "25px" }} />}
            title={"Filters"}
            clice={() => { setOpen(!open) }}
        />
    </>


}
export default FilterAction