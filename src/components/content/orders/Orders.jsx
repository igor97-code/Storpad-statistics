import React from "react"
import {initializeTable,destroyTable} from "../../table/table"



export default () => {
    React.useEffect(()=>{
        initializeTable('./arrays.txt');
        return destroyTable
    },[])

    return (
        <div>
            <h1>Заказы</h1>
            <table id="example" className="display" cellSpacing="0">
                 <thead className="c1 padding">
                     <tr className="c1">
                        <th>ID Дисплея</th>
                        <th>ID Заказа</th>
                        <th>Дата Заказа</th>
                        <th>Клиент</th>
                        <th>Сумма</th>
                        <th>Скидка</th>
                        <th>Итого</th>
                        <th>Статус заказа</th>
                     </tr>
                </thead>
            </table>
        </div>
    )
}