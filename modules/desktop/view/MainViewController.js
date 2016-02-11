Ext.define('App.modules.desktop.view.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenu-controller',

    control: {
        'mainmenu-panel': {
            select: 'clickMenuItem'
        }
    },

    clickMenuItem: function(){
        console.log('clickMenuItem:', arguments);
        alert(1);
    }
});