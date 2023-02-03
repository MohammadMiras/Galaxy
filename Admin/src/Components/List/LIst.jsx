import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ActionDelte from './ListActions/Delete';
import ActionEdit from './ListActions/Edit';
import MenuActions from './ListActions/MenuActions';

const List = (
    {
        row,
        entityType,
        hasEdit,
        hasDelet,
        edit,
        delet,
        hasNew,
    }
) => {

    const data = [{
        title: "mohammad",
        subtitle: "ali",
        slug: "Miras"
    },
    {
        title: "mohammad",
        subtitle: "ali",
        slug: "Miras"
    },
    {
        title: "mohammad",
        subtitle: "ali",
        slug: "Miras"
    }]
    return <>
        <Card>
            <table className="w-full min-w-[640px] " >
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-50 py-3 px-5 text-left">name</th>
                        <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Title</th>
                        <th className="border-b border-blue-gray-50 py-3 px-5 text-left">slug</th>
                        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(item => {
                            return <>
                                <tr className="border-b border-blue-gray-50">
                                    {
                                        row &&
                                        typeof row === 'function' &&
                                        row(item)
                                    }
                                    <td className="flex flex-row items-center">
                                        {
                                            hasEdit &&
                                            <ActionEdit />
                                        }
                                        {
                                            hasDelet &&
                                            <ActionDelte id={item} />
                                        }
                                        <MenuActions/>
                                    </td>
                                </tr>
                            </>
                        })
                    }

                </tbody>
            </table>
        </Card>
    </>
}
export default List