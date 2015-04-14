/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Ext6Aria.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Ext6Aria.view.main.MainController',
        'Ext6Aria.view.main.MainModel',
        'Ext6Aria.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Home',
            iconCls: 'fa-home',
            items: [
                //{
                //    html: "The following grid shares a store with the modern version's grid as well!",
                //    margin: '0 0 10 0'
                //},

  	            {
  	                xtype: 'field',
  	                fieldLabel: 'First',
  	                name: 'firstName'
  	            }, {
  	                xtype: 'field',
  	                fieldLabel: 'Last',
  	                name: 'lastName'
  	            },


                {
                    xtype: 'mainlist'
                },


                {
                    xtype: 'field',
                    fieldLabel: 'Bottom',
                    tabIndex: 100,
                    name: 'bottom'
                }


            ]
        },
        //{
        //    title: 'Users',
        //    iconCls: 'fa-user',
        //    bind: {
        //        html: '{loremIpsum}'
        //    }
        //},
        {
            title: 'Users',
            iconCls: 'fa-user',
            xtype: 'form',

            bodyPadding: 5,
            width: 350,

            // The form will submit an AJAX request to this URL when submitted
            url: 'save-form.php',

            // Fields will be arranged vertically, stretched to full width
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },

            // The fields
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'First Name',
                name: 'first',

                allowBlank: true
            }, {
                fieldLabel: 'Last Name',
                name: 'last',
                allowBlank: true
            }],

            // Reset and Submit buttons
            buttons: [{
                text: 'Reset',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    alert('hi');
                    var form = this.up('form').getForm();
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
            }]
        },




    {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
