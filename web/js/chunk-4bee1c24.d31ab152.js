(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bee1c24"],{"11a33":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:e.dataOption},on:{change:e.optchange}}),a("tables",{attrs:{data:e.dataTable,list:e.tableList},on:{change:e.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageParams.size,layout:"total, prev, pager, next",total:e.pageParams.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(e.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确 定")])],1)])],1)},i=[],o=a("f360"),r=a.n(o),l=(a("7c09"),a("a6b5")),s=a.n(l),d=(a("175c"),a("bc97"),a("a5be"),a("3079")),c=a("9404"),u=(a("5ee4"),a("9cf8")),p={leftMenu:[{id:"1",name:"校区：",placeholder:"请输入校区",module:"name"},{id:"2",name:"班级：",placeholder:"请输入班级",module:"count"},{id:"3",name:"带班老师：",placeholder:"请输入带班老师",module:"price"},{id:"4",name:"学员姓名：",placeholder:"请输入学员姓名",module:"count"},{id:"5",name:"审批人：",placeholder:"请输入审批人",module:"count"},{id:"6",name:"审批时间：",placeholder:"请选择审批时间",module:"beginTime",type:"date"}],rightMenu:[{id:"r1",name:"查询"}]},g={table:[{label:"校区",prop:"name"},{label:"班级",prop:"count"},{label:"带班老师",prop:"price"},{label:"学员姓名",prop:"studentName"},{label:"审批人",prop:"person"},{label:"审批时间",prop:"beginTime"},{label:"积分",prop:"integral"}],edit:[{name:"拒绝",id:"t1"}]},b=["确认拒绝该审批?"],h={name:"integral",mixins:[u["a"]],data:function(){return{dataOption:p,dataTable:JSON.parse(s()(g)),dialogVisible:!1,dialogContent:b[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:d["a"],Tables:c["a"]},mounted:function(){this.init(),this.search()},methods:{init:function(){var e=this.$route.query,t=e.type;e.id;if("detail"===t)return this.dataTable.edit=[];this.dataTable=g},optchange:function(e){return console.log(e.id+"--id被单击了"),"r1"===e.id?this.search():"r2"===e.id?this.$router.push("/studentAdd?type=new"):void 0},tabchange:function(e){if(console.log(e.id+"--id被单击了"),this.id=e.data.id,"t1"===e.id)return this.dialogVisible=!0},sure:function(){this.search(),this.dialogVisible=!1},search:function(){var e=this.$refs.goodsOpt.getData(),t={size:20,page:this.currentPage-1};r()({},e,t);this.tableList=[{name:"中山校区",count:"三年级二班",price:"王老师",studentName:"张学生",person:"李老师",beginTime:"2018-01-20",integral:"1000"},{name:"中山校区",count:"三年级二班",price:"王老师",studentName:"张学生",person:"李老师",beginTime:"2018-01-20",integral:"1000"},{name:"中山校区",count:"三年级二班",price:"王老师",studentName:"张学生",person:"李老师",beginTime:"2018-01-20",integral:"1000"}]},dataInit:function(){}}},m=h,f=a("25c1"),v=Object(f["a"])(m,n,i,!1,null,"2ab5d79e",null);v.options.__file="integral.vue";t["default"]=v.exports},"8fb9":function(e,t,a){var n=a("332a"),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},a6b5:function(e,t,a){e.exports=a("8fb9")}}]);
//# sourceMappingURL=chunk-4bee1c24.d31ab152.js.map