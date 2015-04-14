Ext.define('Ext6Aria.view.main.LinkField', {
    extend: 'Ext.form.field.Base',
    xtype: 'linkfield',
    requires: [
        'Ext.form.field.Base'
    ],
    //fieldSubTpl : ['<input id="{id}" data-ref="inputEl" type="{type}" role="{role}" {inputAttrTpl}', ' size="1"', '<tpl if="name"> name="{name}"</tpl>', '<tpl if="value"> value="a{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>', '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>', '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}', '<tpl if="readOnly"> readonly="readonly"</tpl>', '<tpl if="disabled"> disabled="disabled"</tpl>', '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>', '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>', ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls}" autocomplete="off"/>', { disableFormats: true }]

    fieldSubTpl: ['<a  id="{id}" role="{role}" {inputAttrTpl} data-cellclicktarget="true" href="#" onClick="alert(\'Hello World!\')"><span style="border: 1px blue solid;background-color:red;color:white;">Click Here (Edit Mode)</span></a>', { disableFormats: true }]

    //<input id="linkfield-1037-inputEl" data-ref="inputEl" type="text" role="" aria-readonly="false" size="1" name="linkfield-1037-inputEl" class="x-form-field x-form-text x-form-text-default " autocomplete="off" aria-labelledby="linkfield-1037-labelEl" componentid="linkfield-1037" aria-invalid="false">

});