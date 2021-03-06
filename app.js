Ext.require('Ext.app.Application');
Ext.onReady(function(){
    Ext.application({
        name   : 'App',
        paths: {
            "App.modules": App.constants.PROJECT_PATH,
            "Ext.ux": App.constants.UX_PATH,
            "App.main": App.constants.FRONTEND_PATH
        },
        launch : function() {
            Ext.setGlyphFontFamily('FontAwesome');
            Ext.require('App.modules.desktop.Main', function(){
                Ext.create('App.modules.desktop.Main');
            });
        }
    });
});
