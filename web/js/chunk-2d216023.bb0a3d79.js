(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216023"],{c143:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),a("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},n=[],o=a("f360"),s=a.n(o),r=(a("7c09"),a("3079")),c=a("9404"),d=(a("5ee4"),a("9cf8")),l={leftMenu:[{id:"1",name:"公告标题：",placeholder:"请输入公告标题",module:"name"},{id:"2",name:"公告时间：",placeholder:"请选择公告时间",module:"beginTime",type:"date"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},u={table:[{label:"公告标题",prop:"name"},{label:"公告时间",prop:"count"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},p=["确认删除该条信息?"],g={name:"notices",mixins:[d["a"]],data:function(){return{dataOption:l,dataTable:u,dialogVisible:!1,dialogContent:p[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:r["a"],Tables:c["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return"r1"===t.id?this.search():"r2"===t.id?this.$router.push("noticesAdd?type=new"):void 0},tabchange:function(t){return this.id=t.data.id,"t1"===t.id?this.$router.push("noticesAdd?type=edit&id=".concat(t.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){this.search(),this.dialogVisible=!1},search:function(){var t=this.$refs.goodsOpt.getData(),e={size:20,page:this.currentPage-1};s()({},t,e);this.tableList=[{name:"张三1",count:"100",price:"1200",time:"2018-01-10--2015-02-10"},{name:"张三2",count:"100",price:"1200",time:"2018-01-10--2015-02-10"},{name:"张三3",count:"100",price:"1200",time:"2018-01-10--2015-02-10"}]},dataInit:function(){}}},h=g,b=a("25c1"),m=Object(b["a"])(h,i,n,!1,null,"08c1f2ea",null);m.options.__file="notices.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d216023.bb0a3d79.js.map