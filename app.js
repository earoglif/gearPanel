Ext.require('Ext.app.Application');
Ext.onReady(function(){
    Ext.application({
        name   : 'App',
        paths: {
            "App.modules": '/extjs5/modules'
        },
        requires: [
            'App.modules.tbltst.Init'
        ],
        launch : function() {

            console.log('APP:', App);

            Ext.create('Ext.Panel', {
                renderTo     : Ext.getBody(),
                width        : 200,
                title        : 'Hello World',
                items: [
                    {
                        xtype: 'tstgrig'
                    }
                ]
            });

        }
    });
});