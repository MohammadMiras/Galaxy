import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
const Page = ({
    children,
    className,
    breadcrumbs,
    title,
}) => {
    return <>
        <div className="p-5">
            <div className="flex flex-col gap-3 mb-5">
                <h1 className="text-3xl">{title}</h1>
                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">

                        {
                            breadcrumbs?.map(i => <>
                                <Link to="/">
                                    {i.title}
                                </Link>
                            </>)
                        }
                    </Breadcrumbs>
                </div>
            </div>
            {children}
        </div>
    </>
}
export default Page