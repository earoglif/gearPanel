Ext.define('App.modules.desktop.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainvm',

    stores: {
        mainMenu: {
            type: 'tr' +
                'ee',
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
                                link: 'App.modules.tbltst.Main',
                                leaf: true
                            },
                            {
                                text: 'Экспандер строк',
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