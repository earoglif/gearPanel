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
                        text: 'Настройки',
                        leaf: true
                    }
                ]
            }
        }
    }
});
