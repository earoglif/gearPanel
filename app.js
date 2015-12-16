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

            console.log('APP:', App, App.constants.PROJECT_PATH);

            Ext.create('Ext.Panel', {
                renderTo: Ext.getBody(),
                width: 200,
                title: 'Hello World',
                items: [
                    {
                        xtype: 'tstgrig'
                    }
                ]
            });

        }
    });
});