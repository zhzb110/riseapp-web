(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bd723ba"],{"7dec":function(t,e,a){},8709:function(t,e,a){"use strict";var i=a("7dec"),n=a.n(i);n.a},ca1e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),a("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},n=[],o=a("5176"),s=a.n(o),d=(a("386d"),a("cadf"),a("551c"),a("097d"),a("3079")),c=a("9404"),l=a("b383"),r=a.n(l),g=a("9cf8"),u=a("fc37"),p={leftMenu:[{id:"1",name:"商品名称：",placeholder:"请输入商品名称",module:"name"},{id:"2",name:"商品数量：",placeholder:"请输入商品数量",module:"count"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},h={table:[{label:"商品名称",prop:"name"},{label:"商品价格",prop:"price"},{label:"商品数量",prop:"count"},{label:"时间范围",prop:"time"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},b=["确认删除该条信息?"],f={name:"goods",mixins:[g["a"]],data:function(){return{dataOption:p,dataTable:h,dialogVisible:!1,dialogContent:b[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:d["a"],Tables:c["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("goodsAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id?this.$router.push("goodsAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){var t=this;this.api.delete("/goods/".concat(this.id)).then(function(e){t.loading=!1,t.search(),t.$message(e.data)}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},search:function(){var t=this,e=this.$refs.goodsOpt.getData(),a={size:20,page:this.currentPage-1},i=s()({},e,a),n=r.a.stringify(i||{});this.loading=!0,this.api.get("/goods?".concat(n)).then(function(e){t.loading=!1,t.dataInit(e.data),t.setPage(e.data),t.tableList=e.data.list}).catch(function(e){console.log(e),t.$message(e.data.message)})},dataInit:function(t){var e=t.list.map(function(t){t.beginTime&&t.endTime&&(t.time=Object(u["c"])(t.beginTime)+" 至 "+Object(u["c"])(t.endTime))});this.tableList=e}}},m=f,v=(a("8709"),a("2877")),C=Object(v["a"])(m,i,n,!1,null,"334521c4",null);C.options.__file="goods.vue";e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7bd723ba.61cc52b3.js.map