(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9a27676"],{"0e91":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),a("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},i=[],o=a("5176"),s=a.n(o),l=(a("7f7f"),a("386d"),a("cadf"),a("551c"),a("097d"),a("3079")),c=a("9404"),r=a("b383"),d=a.n(r),u=a("9cf8"),g=a("fc37"),h={leftMenu:[],rightMenu:[{id:"r2",name:"新增"}]},f={table:[{label:"问卷名称",prop:"title"},{label:"时间范围",prop:"time"}],edit:[{name:"问卷统计",id:"t3"},{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},p=["确认删除该条信息?"],b={name:"question",mixins:[u["a"]],data:function(){return{dataOption:h,dataTable:f,dialogVisible:!1,dialogContent:p[0],tableList:[],loading:!1,currentPage:1,name:"",id:""}},components:{Options:l["a"],Tables:c["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/service/questionAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,this.name=t.data.title,"t1"===t.id?this.$router.push("/service/questionAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:"t3"===t.id?this.$router.push("/service/quesStatistic?type=detail&id=".concat(this.id,"&name=").concat(this.name)):"t4"===t.id?this.$router.push("/service/quesDetail?type=detail&id=".concat(this.id)):void 0},sure:function(){var t=this;this.api.delete("/survey/".concat(this.id)).then(function(e){t.loading=!1,t.search(),t.$message(e.data)}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},search:function(){var t=this,e=this.$refs.goodsOpt.getData(),a={size:20,page:this.currentPage-1},n=s()({},e,a),i=d.a.stringify(n||{});this.loading=!0,this.api.get("/survey?".concat(i)).then(function(e){t.loading=!1,t.dataInit(e.data),t.setPage(e.data),t.tableList=e.data.list}).catch(function(e){console.log(e),t.$message(e.data.message)})},dataInit:function(t){var e=t.list.map(function(t){t.beginTime&&t.endTime&&(t.time=Object(g["c"])(t.beginTime)+" 至 "+Object(g["c"])(t.endTime))});this.tableList=e}}},m=b,v=(a("32e4"),a("2877")),P=Object(v["a"])(m,n,i,!1,null,"45f05c32",null);P.options.__file="question.vue";e["default"]=P.exports},2960:function(t,e,a){"use strict";var n=a("c461"),i=a.n(n);i.a},"32e4":function(t,e,a){"use strict";var n=a("a5d0"),i=a.n(n);i.a},9404:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.tableList}},[t._l(t.data.table,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,width:t.width,align:"center"}})}),t.data.edit&&t.data.edit.length>0?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.data.edit,function(n,i){return a("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(a){t.handle(e.row,n)}}},[t._v(t._s(n.name))])})}}])}):t._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(t,e){var a={data:t,id:e.id};this.$emit("change",a)}},watch:{list:function(t){this.tableList=t}}},s=o,l=(a("2960"),a("2877")),c=Object(l["a"])(s,n,i,!1,null,"32822608",null);c.options.__file="tables.vue";e["a"]=c.exports},"9cf8":function(t,e,a){"use strict";a("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a5d0:function(t,e,a){},c461:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f9a27676.cca0544f.js.map