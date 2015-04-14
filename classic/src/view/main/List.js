/**
 * This view is an example list of people.
 */
Ext.define('Ext6Aria.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext6Aria.view.main.LinkField',
        'Ext6Aria.store.Personnel'
    ],

    title: 'Personnel',

    plugins: [
        {
            ptype: 'cellediting',
            clicksToEdit: 1,
            pluginId: 'celleditor'
        }
    ],


    //store: {
    //    type: 'personnel'
    //},

    store: {
        fields: ['name', 'email', 'phone'],
        data: {
            'items': [{
                "name": "Lisa",
                "selected": true,
                "email": "lisa@simpsons.com",
                "phone": "555-111-1224"
            }, {
                "name": "Bart",
                "selected": true,
                "email": "bart@simpsons.com",
                "phone": "555-222-1234"
            }, {
                "name": "Homer",
                "selected": true,
                "email": "home@simpsons.com",
                "phone": "555-222-1244"
            }, {
                "name": "Marge",
                "selected": true,
                "email": "marge@simpsons.com",
                "phone": "555-222-1254"
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    },



    columns: [

        //{
        //    //xtype: 'checkcolumn',
        //    header: 'Select to <br/> Compare',
        //    dataIndex: 'selected',
        //    editor: 'checkboxfield'
        //},

        {
            xtype: 'checkcolumn',
            header: 'Select to <br/> Compare',
            dataIndex: 'active'
        },



        { text: 'Names',  dataIndex: 'name', tabIndex: 5 },
        {
            text: 'Email', dataIndex: 'email', flex: 1
            //editor: {
            //    xtype: 'textfield'
            //}
        },
        {
            text: 'Phone', dataIndex: 'phone', flex: 1
                //editor: {
                //    xtype: 'textfield'
                //}
        },

    {
        header: 'Link',
        width: 200,
        //editor: {
        //    xtype: 'linkfield'
        //},

        defaultRenderer: function (value, metaData, record) {
            return '<a data-cellclicktarget="true" href="#" onClick="alert(\'Hello World!\')">Click Here</a>';
        }
    },


    ]

});
