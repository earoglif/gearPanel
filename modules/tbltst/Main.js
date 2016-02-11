Ext.define('App.modules.tbltst.Main', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tstgrig',
    title: 'Тестовая таблица',
    store: {
        fields: ['id', 'name'],
        data: [
            {
                id: 1,
                name: 'Москва'
            },
            {
                id: 2,
                name: 'Магадан'
            },
            {
                id: 3,
                name: 'Смоленск'
            },
            {
                id: 4,
                name: 'Анапа'
            },
            {
                id: 5,
                name: 'Сочи'
            }
        ]
    },
    columns: [
        {
            text: 'ID',
            dataIndex: 'id'
        },
        {
            text: 'Город',
            dataIndex: 'name'
        }
    ]
})