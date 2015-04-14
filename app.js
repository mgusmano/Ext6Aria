Ext.define('Override.form.field.Text', {
    override: 'Ext.form.field.Text',
    initComponent: function () {
        this.callParent(arguments);
        this.on('specialkey', function (field, e) {
            // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
            // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
            if (e.getKey() == e.ENTER) {
                var form = field.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function (form, action) {
                            Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('Failed', action.failureType);
                        }
                    });
                }
            }
        }, this);
    }
});



Ext.application({
    name: 'Ext6Aria',

    extend: 'Ext6Aria.Application',

    requires: [
        'Ext6Aria.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'Ext6Aria.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Ext6Aria.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
