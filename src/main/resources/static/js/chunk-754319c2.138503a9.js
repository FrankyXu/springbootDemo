(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-754319c2"],{"0438":function(e,t,a){"use strict";var i=a("f1bc");a.n(i).a},"0f32":function(e,t,a){"use strict";var i=a("596f");a.n(i).a},1896:function(e,t,a){},"21f4":function(e,t,a){},2235:function(e,t,a){},2363:function(e,t,a){"use strict";var i=a("2235");a.n(i).a},"2f9f":function(e,t,a){"use strict";var i=a("21f4");a.n(i).a},3455:function(e,t,a){"use strict";var i=a("dad4");a.n(i).a},5943:function(e,t,a){},"596f":function(e,t,a){},"6a31":function(e,t,a){},8294:function(e,t,a){"use strict";var i=a("6a31");a.n(i).a},"8f9c":function(e,t,a){"use strict";var i=a("1896");a.n(i).a},"9e11":function(e,t,a){"use strict";a.r(t);a("386d");var i=a("d225"),s=a("b0b4"),l=a("308d"),o=a("6bb5"),n=a("4e2b"),r=a("9ab4"),c=a("1b40"),d=a("5176"),u=a.n(d),m={name:"createApi",data:function(){return{loading:!1,systemList:[],relationSystemList:[],form:{apiCode:"",apiDocUrl:"",apiName:"",systemCode:"",relationSystemCode:"",version:"",status:""},rules:{status:[{required:!0,message:"请选择接口状态",trigger:"change"}],apiCode:[{required:!0,message:"请输入接口编码",trigger:"blur"}],apiName:[{required:!0,message:"请输入接口名称",trigger:"blur"}],systemCode:[{required:!0,message:"请选择所属系统",trigger:"change"}]}}},methods:{submit:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.loading=!0,e.$http.post("/api/interface",u()({},e.form)).then(function(t){"success"===t.data.status&&(e.$refs.form.resetFields(),e.$noty.success("新增成功",{timeout:2500}),setTimeout(function(){window.$eventBus.$emit("getApiList")},500),e.$emit("closeSidebox"))}).finally(function(){e.loading=!1}))})}},mounted:function(){var e=this;this.$http.post("/api/listSystem",{pageNum:1,pageSize:1e4}).then(function(t){e.loading=!1,e.systemList=t.data.data.list,e.relationSystemList=t.data.data.list})}},p=(a("8294"),a("2877")),f=Object(p.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rk-profile-task"},[a("el-form",{ref:"form",staticStyle:{width:"350px",margin:"0 auto"},attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("apiCode"),prop:"apiCode"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.apiCode,callback:function(t){e.$set(e.form,"apiCode",t)},expression:"form.apiCode"}})],1),a("el-form-item",{attrs:{label:e.$t("apiName"),prop:"apiName"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.apiName,callback:function(t){e.$set(e.form,"apiName",t)},expression:"form.apiName"}})],1),a("el-form-item",{attrs:{label:e.$t("apiBelongs"),prop:"systemCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small"},model:{value:e.form.systemCode,callback:function(t){e.$set(e.form,"systemCode",t)},expression:"form.systemCode"}},e._l(e.systemList,function(e){return a("el-option",{key:e.systemCode,attrs:{label:e.systemCode,value:e.systemCode}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("apiRelation"),prop:"relationSystemCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small",clearable:""},model:{value:e.form.relationSystemCode,callback:function(t){e.$set(e.form,"relationSystemCode",t)},expression:"form.relationSystemCode"}},e._l(e.relationSystemList,function(e){return a("el-option",{key:e.systemCode,attrs:{label:e.systemCode,value:e.systemCode}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("apiVersion"),prop:"version"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:e.$t("apiWiki"),prop:"apiDocUrl"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.apiDocUrl,callback:function(t){e.$set(e.form,"apiDocUrl",t)},expression:"form.apiDocUrl"}})],1),a("el-form-item",{attrs:{label:e.$t("apiStatus"),prop:"status"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"启用",value:0}}),a("el-option",{attrs:{label:"禁用",value:1}})],1)],1),a("el-form-item",[a("el-button",{staticStyle:{width:"40%"},attrs:{type:"primary",loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("\n        "+e._s(e.$t("newApi"))+"\n      ")]),a("el-button",{staticStyle:{width:"40%"},attrs:{type:"default",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.$emit("closeSidebox")}}},[e._v("\n        "+e._s(e.$t("cancel"))+"\n      ")])],1)],1)],1)},[],!1,null,"72ae15e9",null).exports,v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).apply(this,arguments))).keyWord="",e.systemCode="",e.dialogVisible=!1,e.systemList=[],e}return Object(n.a)(t,e),Object(s.a)(t,[{key:"created",value:function(){var e=this;this.$http.post("/api/listSystem",{pageNum:1,pageSize:1e4}).then(function(t){e.systemList=t.data.data.list,e.systemCode=t.data.data.list[0].systemCode,e.searchTask()})}},{key:"searchTask",value:function(){this.$emit("search",{keyWord:this.keyWord,systemCode:this.systemCode})}},{key:"showDialogTask",value:function(){this.dialogVisible=!0}},{key:"closeSidebox",value:function(){this.dialogVisible=!1}}]),t}(c.d),b=v=r.a([Object(c.a)({components:{RegisterAPI:f}})],v),h=(a("b4ca"),Object(p.a)(b,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rk-profile-header"},[a("div",[a("div",{staticClass:"flex-h"},[a("div",{staticClass:"mr-10",staticStyle:{padding:"3px 15px 0"}},[a("div",{staticClass:"sm grey"},[e._v(e._s(e.$t("searchKeyword")))]),a("el-input",{attrs:{size:"mini"},model:{value:e.keyWord,callback:function(t){e.keyWord=t},expression:"keyWord"}})],1),a("div",{staticClass:"mr-10",staticStyle:{padding:"3px 15px 0"}},[a("div",{staticClass:"sm grey"},[e._v("所属系统")]),a("el-select",{attrs:{size:"mini"},on:{change:function(t){e.keyWord="",e.searchTask()}},model:{value:e.systemCode,callback:function(t){e.systemCode=t},expression:"systemCode"}},e._l(e.systemList,function(e){return a("el-option",{attrs:{label:e.systemCode,value:e.systemCode,index:e.systemCode}})}),1)],1),a("a",{staticClass:"rk-profile-header-btn bg-blue mr-10",on:{click:e.searchTask}},[a("svg",{staticClass:"icon mr-5 vm"},[a("use",{attrs:{"xlink:href":"#search"}})]),a("span",{staticClass:"vm"},[e._v(e._s(e.$t("search")))])]),a("a",{directives:[{name:"role",rawName:"v-role",value:[0,1],expression:"[0, 1]"}],staticClass:"rk-new-task-btn",on:{click:e.showDialogTask}},[a("span",{staticClass:"mr-5 vm"},[e._v(e._s(e.$t("newApi")))])])]),a("el-dialog",{staticClass:"profile-task-box",attrs:{width:"600px",title:e.$t("newApi"),visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("RegisterAPI",{on:{closeSidebox:e.closeSidebox}})],1)],1)])},[],!1,null,null,null).exports),g=(a("6d67"),{name:"createApi",props:["item","index"],data:function(){return{loading:!1,systemList:[],relationSystemList:[],form:{apiCode:"",apiDocUrl:"",apiName:"",systemCode:"",relationSystemCode:"",version:"",status:""},rules:{status:[{required:!0,message:"请选择接口状态",trigger:"change"}],apiCode:[{required:!0,message:"请输入接口编码",trigger:"blur"}],apiName:[{required:!0,message:"请输入接口名称",trigger:"blur"}],systemCode:[{required:!0,message:"请选择所属系统",trigger:"change"}]}}},methods:{submit:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.loading=!0,e.$http.put("/api/interface",u()({},e.form)).then(function(t){"success"===t.data.status&&(e.$refs.form.resetFields(),e.$noty.success("编辑成功",{timeout:2500}),setTimeout(function(){window.$eventBus.$emit("getApiList")},500),e.$emit("closeSidebox"))}).finally(function(){e.loading=!1}))})}},watch:{item:{immediate:!0,handler:function(){for(var e in this.form)this.form[e]=this.item[e];this.$forceUpdate()}}},mounted:function(){var e=this;this.$http.post("/api/listSystem",{pageNum:1,pageSize:1e4}).then(function(t){e.loading=!1,e.systemList=t.data.data.list,e.relationSystemList=t.data.data.list})}}),y=(a("8f9c"),Object(p.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rk-profile-task"},[a("el-form",{ref:"form",staticStyle:{width:"350px",margin:"0 auto"},attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("apiCode"),prop:"apiCode"}},[a("el-input",{attrs:{size:"small",disabled:""},model:{value:e.form.apiCode,callback:function(t){e.$set(e.form,"apiCode",t)},expression:"form.apiCode"}})],1),a("el-form-item",{attrs:{label:e.$t("apiName"),prop:"apiName"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.apiName,callback:function(t){e.$set(e.form,"apiName",t)},expression:"form.apiName"}})],1),a("el-form-item",{attrs:{label:e.$t("apiBelongs"),prop:"systemCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small",disabled:""},model:{value:e.form.systemCode,callback:function(t){e.$set(e.form,"systemCode",t)},expression:"form.systemCode"}},e._l(e.systemList,function(e){return a("el-option",{key:e.systemCode,attrs:{label:e.systemCode,value:e.systemCode}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("apiRelation"),prop:"systemCode"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small",clearable:""},model:{value:e.form.relationSystemCode,callback:function(t){e.$set(e.form,"relationSystemCode",t)},expression:"form.relationSystemCode"}},e._l(e.relationSystemList,function(e){return a("el-option",{key:e.systemCode,attrs:{label:e.systemCode,value:e.systemCode}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("apiVersion"),prop:"version"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:e.$t("apiWiki"),prop:"apiDocUrl"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.apiDocUrl,callback:function(t){e.$set(e.form,"apiDocUrl",t)},expression:"form.apiDocUrl"}})],1),a("el-form-item",{attrs:{label:e.$t("apiStatus"),prop:"status"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",size:"small"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"启用",value:0}}),a("el-option",{attrs:{label:"禁用",value:1}})],1)],1),a("el-form-item",[a("el-button",{staticStyle:{width:"40%"},attrs:{type:"primary",loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("\n        "+e._s(e.$t("editDetail"))+"\n      ")]),a("el-button",{staticStyle:{width:"40%"},attrs:{type:"default",loading:e.loading,disabled:e.loading},on:{click:function(t){return e.$emit("closeSidebox")}}},[e._v("\n        "+e._s(e.$t("cancel"))+"\n      ")])],1)],1)],1)},[],!1,null,"70041af5",null).exports),C=(a("cadf"),a("551c"),a("f751"),a("097d"),[{label:"序号",method:50,value:"apiIndex"},{label:"接口编码",method:150,value:"apiCode"},{label:"接口名称",method:350,value:"apiName"},{label:"版本",method:100,value:"apiVersion"},{label:"所属系统",method:150,value:"apiBelongs"},{label:"关联系统",method:150,value:"apiRelation"},{label:"接口文档",method:200,value:"apiWiki"},{label:"状态",method:60,value:"apiStatus"},{label:"创建人",method:100,value:"apiCreateUser"},{label:"操作",method:150,value:"apiHandle"}]),$=a("5d73"),k=a.n($),_=(a("57e7"),a("ac6a"),a("f3e2"),a("a481"),a("4bb5")),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(n.a)(t,e),Object(s.a)(t,[{key:"created",value:function(){}}]),t}(c.d);r.a([Object(_.b)("profileStore/updateTaskOpt")],x.prototype,"updateTaskOpt",void 0),r.a([Object(_.a)("profileStore/CREATE_PROFILE_TASK")],x.prototype,"CREATE_PROFILE_TASK",void 0),r.a([Object(_.c)("profileStore/SET_TASK_OPTIONS")],x.prototype,"SET_TASK_OPTIONS",void 0),r.a([Object(_.d)("rocketbot")],x.prototype,"rocketbotGlobal",void 0),r.a([Object(c.b)()],x.prototype,"item",void 0);var S=x=r.a([c.a],x),w=(a("3455"),{name:"item",props:["data","method","index"],watch:{data:{handler:function(){this.setLogItemHeight()},deep:!0,immediate:!0}},data:function(){return{dialogVisible:!1,columns:C,displayChildren:!0,selectedSpan:0}},components:{RegisterDetail:Object(p.a)(S,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rk-profile-task"},[a("div",[a("label",[e._v(e._s(e.$t("apiCode"))+":")]),a("span",[e._v(e._s(e.item.apiCode))])]),a("div",[a("label",[e._v(e._s(e.$t("apiName"))+":")]),a("span",[e._v(e._s(e.item.apiName))])]),a("div",[a("label",[e._v(e._s(e.$t("apiBelongs"))+":")]),a("span",[e._v(e._s(e.item.systemCode))])]),a("div",[a("label",[e._v(e._s(e.$t("apiRelation"))+":")]),a("span",[e._v(e._s(e.item.relationSystemCode))])]),a("div",[a("label",[e._v(e._s(e.$t("apiVersion"))+":")]),a("span",[e._v(e._s(e.item.apiVersion))])]),a("div",[a("label",[e._v(e._s(e.$t("apiWiki"))+":")]),a("span",[e._v(e._s(e.item.apiDocUrl))])])])},[],!1,null,"6b7816a8",null).exports},computed:{},methods:{lineBreak:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,"<br />").replace(/\n/g,"<br />")},setLogItemHeight:function(){var e=this;this.$nextTick(function(){var t=[];if(e.$refs.logItem){e.$refs.logItem.childNodes.forEach(function(e){if(e.getAttribute("class").indexOf("autoHeight")>-1){var a=e.childNodes[0].getBoundingClientRect().height;t.push(a+11)}});var a=Math.max.apply(Math,t);e.$refs.logItem.style.height=a+"px"}})},showSelectSpan:function(){var e=document.querySelectorAll(".log-item"),t=!0,a=!1,i=void 0;try{for(var s,l=k()(e);!(t=(s=l.next()).done);t=!0){s.value.style.background="#fff"}}catch(e){a=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}this.$refs.logItem&&(this.$refs.logItem.style.background="rgba(0, 0, 0, 0.1)",this.$eventBus.$emit("HANDLE-SELECT-LOG",this.data))},del:function(){var e=this;this.$confirm("此操作将永久删除该内容, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=e.data.apiId;e.$http.delete("/api/interface/"+t).then(function(t){window.$eventBus.$emit("delApiItem",e.index)})}).catch(function(){})},onedit:function(){this.$emit("onedit",this.index)},closeSidebox:function(){this.dialogEditVisible=!1}}}),O=(a("2f9f"),{components:{BrowserItem:Object(p.a)(w,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"logItem",class:["log-item","clearfix"],on:{click:e.showSelectSpan}},[e._l(e.columns,function(t,i){return a("div",{key:i,class:["method",["message","stack"].includes(t.value)?"autoHeight":""],style:{lineHeight:1.3,width:t.method+"px"}},[["message","stack"].includes(t.value)?a("span",{staticClass:"text",domProps:{innerHTML:e._s(e.lineBreak(e.data[t.value]))}}):"apiStatus"===t.value?[e._v("\n      "+e._s(1==e.data.apiStatus?e.$t("disabled"):e.$t("enable"))+"\n    ")]:"apiHandle"===t.value?[e._v("\n        \n      "),a("a",{attrs:{href:"javascript: void 0;"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("查看")]),a("a",{directives:[{name:"role",rawName:"v-role",value:[0,1],expression:"[0, 1]"}],attrs:{href:"javascript: void 0;"},on:{click:e.onedit}},[e._v("编辑")]),a("a",{directives:[{name:"role",rawName:"v-role",value:[0,1],expression:"[0, 1]"}],attrs:{href:"javascript: void 0;"},on:{click:e.del}},[e._v("删除")])]:a("span",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:e.data[t.value]||"-",expression:"data[item.value] || '-'",arg:"bottom"}]},[e._v(e._s(e.data[t.value]||"-"))])],2)}),a("el-dialog",{staticClass:"profile-task-box",attrs:{width:"600px",title:e.$t("apiDetail"),visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("RegisterDetail",{attrs:{item:e.data}})],1)],2)},[],!1,null,"db2aa572",null).exports,RegisterEdit:y},name:"RegisterContainer",props:["type","tableData","noLink"],data:function(){return{method:380,columns:C,dialogEditVisible:!1,data:{},index:0}},methods:{onedit:function(e){this.dialogEditVisible=!0,this.index=e,this.data=this.tableData[e]},closeSidebox:function(){this.dialogEditVisible=!1}},created:function(){},mounted:function(){}}),N=(a("0f32"),{components:{RegisterContainer:Object(p.a)(O,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log"},[a("div",{staticClass:"log-header"},[e._l(e.columns,function(t,i){return[a("div",{key:i,class:t.label,style:"width: "+t.method+"px;"},[e._v("\n        "+e._s(e.$t(t.value))+"\n      ")])]})],2),a("div",e._l(e.tableData,function(t,i){return a("BrowserItem",{key:"key"+i,attrs:{method:e.method,data:t,index:i},on:{onedit:e.onedit}})}),1),a("el-dialog",{staticClass:"profile-task-box",attrs:{width:"600px",title:e.$t("editDetail"),visible:e.dialogEditVisible},on:{"update:visible":function(t){e.dialogEditVisible=t}}},[e.data.apiId?a("RegisterEdit",{attrs:{item:e.data,index:e.index},on:{closeSidebox:e.closeSidebox}}):e._e()],1),e._t("default")],2)},[],!1,null,"0bc3d228",null).exports},data:function(){return{tableData:[],diaplay:!0,showDetail:!1,list:[],val:{},currentSpan:[],loading:!0,pageNum:1,pageSize:10,total:0}},methods:{search:function(e){this.val=e,this.getList(e)},getList:function(e){var t=this;e||(e=this.val),this.$http.post("/api/listInterface",{pageNum:this.pageNum,systemCode:e.systemCode,pageSize:this.pageSize,queryStr:e.keyWord}).then(function(e){t.loading=!1,t.total=e.data.data.total,t.tableData=e.data.data.list.map(function(e,t){return u()({apiIndex:t+1,apiId:e.id,apiName:e.apiName,apiVersion:e.version,apiCode:e.apiCode,apiWiki:e.apiDocUrl,apiStatus:e.status,apiCreateUser:e.createUser,apiBelongs:e.systemCode,apiRelation:e.relationSystemCode},e)})})}},destroyed:function(){window.$eventBus.$off("getApiList"),window.$eventBus.$off("delApiItem")},created:function(){var e=this;this.loading=!0,window.$eventBus.$on("delApiItem",function(t){e.tableData.splice(t,1)}),window.$eventBus.$on("getApiList",this.getList)},mounted:function(){}}),j=(a("2363"),a("0438"),Object(p.a)(N,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trace-detail-chart-table"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"rk-trace-t-loading"},[a("svg",{staticClass:"icon loading"},[a("use",{attrs:{"xlink:href":"#spinner"}})])]),a("RegisterContainer",{attrs:{tableData:e.tableData}},[e.tableData.length?e._e():a("div",{staticClass:"trace-tips"},[e._v(e._s(e.$t("noData")))]),a("div",{staticStyle:{padding:"20px","text-align":"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,jumper","current-page":e.pageNum,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.pageNum=t},"update:current-page":function(t){e.pageNum=t},"current-change":e.getList}})],1)])],1)},[],!1,null,null,null).exports),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(n.a)(t,e),Object(s.a)(t,[{key:"onSearch",value:function(e){this.$refs.table.search(e)}},{key:"beforeMount",value:function(){}}]),t}(c.d),D=L=r.a([Object(c.a)({components:{RegisterHeader:h,RegsiterTable:j}})],L),E=(a("f2c8"),Object(p.a)(D,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"rk-profile flex-v"},[t("RegisterHeader",{on:{search:this.onSearch}}),t("div",{staticClass:"rk-profile-context"},[t("RegsiterTable",{ref:"table"})],1)],1)},[],!1,null,null,null));t.default=E.exports},b4ca:function(e,t,a){"use strict";var i=a("5943");a.n(i).a},dad4:function(e,t,a){},ea30:function(e,t,a){},f1bc:function(e,t,a){},f2c8:function(e,t,a){"use strict";var i=a("ea30");a.n(i).a}}]);