import React from "react"
import {initializeTable,destroyTable} from "../../table/table"

export default () => {
    React.useEffect(()=>{
        initializeTable('./Clients.txt');
        return destroyTable
    },[])

    return (
        <div>
            <h1>Клиенты</h1>
            <table id="example" className="display" cellSpacing="0">
                 <thead className="c1 padding">
                     <tr className="c1">
                        <th>ID Клиента</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                     </tr>
                </thead>
            </table>
        </div>
    )
}