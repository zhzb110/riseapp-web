(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af503"],{"0e91":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods"},[i("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),i("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),i("div",{staticClass:"demonstration-box"},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v(t._s(t.dialogContent))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},n=[],o=i("f360"),s=i.n(o),d=(i("7c09"),i("3079")),r=i("9404"),l=(i("5ee4"),i("9cf8")),c={leftMenu:[{id:"1",name:"问卷名称：",placeholder:"请输入问卷名称",module:"name"},{id:"2",name:"开始日期：",placeholder:"请选择开始日期",module:"beginTime",type:"date"},{id:"3",name:"结束日期：",placeholder:"请选择结束日期",module:"endTime",type:"date"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},u={table:[{label:"问卷名称",prop:"name"},{label:"时间范围",prop:"time"}],edit:[{name:"问卷统计",id:"t3"},{name:"问卷详情",id:"t4"},{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},p=["确认删除该条信息?"],g={name:"question",mixins:[l["a"]],data:function(){return{dataOption:c,dataTable:u,dialogVisible:!1,dialogContent:p[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:d["a"],Tables:r["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("goodsAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id?this.$router.push("goodsAdd?type=edit&id=".concat(t.id)):"t2"===t.id?this.dialogVisible=!0:"t3"===t.id?this.$router.push("/service/quesStatistic?type=detail&id=".concat(t.id)):"t4"===t.id?this.$router.push("/service/quesDetail?type=detail&id=".concat(t.id)):void 0},sure:function(){this.search(),this.dialogVisible=!1},search:function(){var t=this.$refs.goodsOpt.getData(),e={size:20,page:this.currentPage-1};s()({},t,e);this.tableList=[{name:"张三1",count:"100",price:"1200",time:"2018-01-10--2015-02-10"},{name:"张三2",count:"100",price:"1200",time:"2018-01-10--2015-02-10"},{name:"张三3",count:"100",price:"1200",time:"2018-01-10--2015-02-10"}]},dataInit:function(){}}},h=g,m=i("25c1"),b=Object(m["a"])(h,a,n,!1,null,"67378f10",null);b.options.__file="question.vue";e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0af503.c9433940.js.map