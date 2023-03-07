MAIN.types = {};
MAIN.tokens = {};
MAIN.paused = true;
MAIN.ready = false;

CONF.allow_custom_titles = true;
CONF.version = '1';
CONF.op_icon = 'ti ti-database';

// UI
COMPONENTATOR('ui', 'layout,properties,searchinput,search,columns,notify,fileuploader,empty,dropdownlist,message,edit,datepicker,clipboard,datagrid,windows,flow,menu,movable,intranetcss,radiobuttonexpert,exec,input,colorpicker,icons,box,miniform,viewbox,directory,loading,locale,importer,part,validate,approve,tangular-jsonformat,tangular-color,objecttree,errorhandler,ready', true);

// Audit logs
DEF.onAudit = function(name, data) {
	data.app = CONF.name;
	data.sessionid = data.thread = undefined;
	RESTBuilder.POST(PREF.changelog, data).keepalive().callback(ERROR('Changelog'));
};