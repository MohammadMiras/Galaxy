import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Appbar = () => {
    return <>
        <div className="flex justify-between items-center sticky w-full h-16 px-5 backdrop-blur	bg-slate-300/10 z-10">
            <SearchIcon
                fontSize="large"
                className="text-4xl text-slate-400"
            />
            <div className="flex flex-row items-center gap-5 ">
                <Badge badgeContent={4} color="error">
                    <MailIcon className="text-slate-400" />
                </Badge>

                <Stack >
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                </Stack>
            </div>

        </div>
    </>
}
export default Appbar