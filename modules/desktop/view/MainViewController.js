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
            module = select.data.module,
            tabId = 'tab_' + id,
            desktop = me.getView(),
            tabPanel = desktop.down('main-tabpanel');

        if(!me.searchModule(id)){
            me.addModule(id, title, module);
        }

        tabPanel.setActiveTab(tabId);
    },

    searchModule: function(moduleId){
        var me = this,
            tabId = 'tab_' + moduleId,
            desktop = me.getView(),
            tabPanel = desktop.down('main-tabpanel'),
            module = tabPanel.getComponent(tabId);

        return module || null
    },

    addModule: function(id, title, module){
        var me = this,
            tabId = 'tab_' + id,
            desktop = me.getView(),
            tabPanel = desktop.down('main-tabpanel');

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
                id: tabId,
                xtype: 'panel',
                title: title,
                moduleId: id,
                items: Ext.create(module)
            });

            tabPanel.setActiveTab(tabId);
        });
    }
});
