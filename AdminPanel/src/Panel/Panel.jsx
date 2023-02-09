import List from '../Components/List/LIst'
import Page from '../Components/Page'
import Appbar from './Appbar'
import Menu from './Menu'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormDialog from '../Components/Form/FormDialog';
import { useState, useEffect } from 'react';
import Text from '../Components/Form/Fildes/Text';

const Panel = () => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(open)
    }, [open])
    const row = (entity) => {
        return <>
            <td className="py-3 px-5 ">{entity?.title}</td>
            <td className="py-3 px-5 ">{entity?.subtitle}</td>
            <td className="py-3 px-5 ">{entity?.slug}</td>
        </>
    }
    const fildes = () => {

        return <>
            <Text
                id={"kdjflksdjf"}
                label={"djfsljdf"}

            />

            <Text
                id={"kdjflksdjf"}
                label={"djfsljdf"}

            />
        </>
    }


    const filters = <>
        <div className="flex flex-row gap-2">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" className="" size="small" />
            <TextField id="filled-basic" label="Filled" variant="outlined" size="small" />
        </div>
    </>

    return <>
        <div className="w-full flex justify-between bg-[#f7f9fe] min-h-[100vh]">
            <Menu />
            <div className="w-full h-full">
                <Appbar />
                <Page title={"Test page 1"} breadcrumbs={[{ title: "Home" }, { title: "blog" }]}>
                    <List
                        row={row}
                        hasEdit
                        hasDelet
                        hasNew
                        hasFilter
                        filters={filters}
                        create={() => setOpen(true)} />

                </Page>
            </div>
            <FormDialog title={"Create new Page"} open={open} setOpen={setOpen} fildes={fildes} />
        </div>
    </>
}
export default Panel