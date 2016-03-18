Ext.define('App.modules.desktop.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainvm',

    stores: {
        mainMenu: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Карта',
                        leaf: true
                    },
                    {
                        text: 'Гриды',
                        expanded: true,
                        children: [
                            {
                                text: 'Объединенный ячейки',
                                leaf: true
                            },
                            {
                                text: 'Экспандер строк',
                                moduleId: 2,
                                module: 'App.modules.tbltst.Main',
                                leaf: true
                            },
                            {
                                text: 'Тестовый модуль',
                                moduleId: 1,
                                module: 'App.modules.tbltst.Main',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Пользователи',
                        moduleId: 3,
                        module: 'App.modules.users.Main',
                        leaf: true,
                        //glyph: 0xf0c0,
                        iconCls : 'fa fa-power-off fa-icon'
                    },
                    {
                        text: 'Настройки',
                        leaf: true
                    }
                ]
            }
        }
    }
});
