Ext.require('Ext.app.Application');
Ext.onReady(function(){
    Ext.application({
        name   : 'App',
        paths: {
            "App.modules": App.constants.PROJECT_PATH
        },
        requires: [
            'App.modules.tbltst.Init'
        ],
        launch : function() {
            Ext.require('App.modules.desktop.Main', function(){
                Ext.create('App.modules.desktop.Main');
            });
        }
    });
});