Ext.define('App.modules.tbltst.view.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    requires: [
        'App.main.button.Save'
    ],
    alias: 'widget.tbltst-toolbar',

    items: [
        {
            xtype: 'button',
            text: 'Кнопка',
            //glyph: 0xf206,
            iconCls: 'fa fa-gear',
            scale: 'large',
            icon: null
        },
        {
            xtype: 'main-button-save'
        }
    ]
});
