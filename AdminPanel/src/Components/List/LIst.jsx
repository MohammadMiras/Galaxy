import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ActionCreate from './ListActions/Create';
import ActionDelte from './ListActions/Delete';
import ActionEdit from './ListActions/Edit';
import FilterAction from './ListActions/Filter';
import MenuActions from './ListActions/MenuActions';
import FilterBox from './Filter/Box';
import { useState } from 'react';

const List = (
    {
        row,
        entityType,
        hasEdit,
        hasDelet,
        edit,
        delet,
        hasFilter,
        filters,
        create,
        hasNew,
    }
) => {

    const [openFilterBox, setOpenFilterBox] = useState(false);

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
        <Card className="my-5 p-5">
            <div className="flex flex-row justify-between">
                {
                    hasNew && create &&
                    <ActionCreate
                        create={create} />
                }
                <div>
                    {
                        hasFilter &&
                        <FilterAction open={openFilterBox} setOpen={setOpenFilterBox} />
                    }
                </div>

            </div>
            {
                hasFilter && <>
                    <FilterBox
                        open={openFilterBox}
                        filters={filters}                  
                    />

                </>
            }

        </Card>
        <Card className="p-5">
            <table className="w-full min-w-[640px]" >
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
                        data?.map((item, index) => {
                            const className = data.length - 1 == index ? "" : "border-b border-blue-gray-50"
                            return <>
                                <tr className={className}>
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
                                        <MenuActions />
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