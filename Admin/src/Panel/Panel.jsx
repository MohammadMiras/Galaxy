import List from '../Components/List/LIst'
import Page from '../Components/Page'
import Appbar from './Appbar'
import Menu from './Menu'

const Panel = () => {

    const row =(entity)=>
    {
        return<>
            <td className="py-3 px-5 ">{entity?.title}</td>
            <td className="py-3 px-5 ">{entity?.subtitle}</td>
            <td className="py-3 px-5 ">{entity?.slug}</td>
        </>
    }

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
                    />
                </Page>
            </div>
        </div>
    </>
}
export default Panel