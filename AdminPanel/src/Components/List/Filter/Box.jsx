import Collapse from '@mui/material/Collapse';

const FilterBox = ({ filters, open }) => {
    console.log(open);
    return <>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="w-full h-20 my-2 p-5">
                {filters}
            </div>
        </Collapse>
    </>
}
export default FilterBox