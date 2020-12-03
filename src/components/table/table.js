const $ = require('jquery');
$.DataTable = require('datatables.net');


const initializeTable = url => {
    $('#example').DataTable( {
        "dom": '<"data-table-wrapper"t>',
        "ajax": url,
        "iDisplayLength": 100,
        "lengthChange": false,
        "searching": false,
        "info": false,
        "paging": true,
        "language": {
            "search": "Поиск:"
        }
    });
}

const destroyTable = () => {
    $('.data-table-wrapper')
    .find('table')
    .DataTable()
    .destroy(true)
}

export {initializeTable,destroyTable}