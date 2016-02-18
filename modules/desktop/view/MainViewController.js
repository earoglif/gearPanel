Ext.define('App.modules.desktop.view.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenu-controller',

    control: {
        'mainmenu-panel': {
            select: 'clickMenuItem'
        }
    },

    clickMenuItem: function(menu, select){
        var me = this,
            id = select.data.moduleId,
            title = select.data.text,
            module = select.data.module;

        me.addModule(id, title, module);
    },

    addModule: function(id, title, module){
        var me = this,
            desktop = me.getView(),
            tabPanel = desktop.down('main-tabpanel');

        console.log('addModule:', desktop, tabPanel);
        alert(1);

        if(!id || !module){
            Ext.toast({
                autoCloseDelay: 3000,
                header: false,
                slideInDuration: 250,
                html: 'Модуль отсутствует. Проветирь настройки!',
                bodyStyle: 'background: #fcc;'
            });
            return
        }

        Ext.require(module, function(){
            tabPanel.add({
                xtype: 'panel',
                title: title,
                moduleId: id,
                items: Ext.create(module)
            });
        });
    }
});
