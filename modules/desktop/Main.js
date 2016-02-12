Ext.define('App.modules.desktop.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.modules.desktop.view.MainViewModel',
        'App.modules.desktop.view.TreeMainMenu',
        'App.modules.desktop.view.MainTabPanel',
        'App.modules.desktop.view.MainViewController'
    ],
    alias: 'widget.desktop-panel',
    controller: 'mainmenu-controller',
    viewModel: 'mainvm',
    layout: 'border',
    items: [
        {
            xtype: 'mainmenu-panel',
            title: 'Примеры',
            region: 'west',
            width: 220,
            resizable: true,
            border: true,
            collapsible: true,
            style: {
                borderRight: '2px solid #f5f5f5'
            }
        },
        {
            xtype: 'main-tabpanel',
            region: 'center'
        }
    ]
});
