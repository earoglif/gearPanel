Ext.define('App.modules.desktop.view.TreeMainMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mainmenu-panel',

    bind: {
        store: '{mainMenu}'
    },

    useArrows: true,
    rootVisible: false,

    initComponent: function(){
        var me = this;

        console.log('MAIN:', me);
        //alert(1);

        me.callParent(arguments);
    }
});
