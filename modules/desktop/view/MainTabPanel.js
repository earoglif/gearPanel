Ext.define('App.modules.desktop.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.ux.TabReorderer'
    ],
    alias: 'widget.main-tabpanel',
    plugins: 'tabreorderer',

    defaults: {
        closable: true,
        scrollable: true
    }
});
