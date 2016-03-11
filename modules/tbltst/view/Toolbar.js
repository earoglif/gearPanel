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
            glyph: 0xf206,
            scale: 'large',
            icon: null
        },
        {
            xtype: 'main-button-save'
        }
    ]
});
