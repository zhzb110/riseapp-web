(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f6ee6c6"],{"159f":function(e,t,a){"use strict";var n=a("670d"),i=a.n(n);i.a},"28a5":function(e,t,a){"use strict";var n=a("aae3"),i=a("cb7c"),o=a("ebd6"),l=a("0390"),r=a("9def"),c=a("5f1b"),s=a("520a"),u=Math.min,d=[].push,p="split",f="length",h="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(e){}}();a("214f")("split",2,function(e,t,a,m){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(i,e,t);var o,l,r,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=void 0===t?4294967295:t>>>0,m=new RegExp(e.source,u+"g");while(o=s.call(m,i)){if(l=m[h],l>p&&(c.push(i.slice(p,o.index)),o[f]>1&&o.index<i[f]&&d.apply(c,o.slice(1)),r=o[0][f],p=l,c[f]>=g))break;m[h]===o.index&&m[h]++}return p===i[f]?!r&&m.test("")||c.push(""):c.push(i.slice(p)),c[f]>g?c.slice(0,g):c}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,n):b.call(String(i),a,n)},function(e,t){var n=m(b,e,this,t,b!==a);if(n.done)return n.value;var s=i(e),d=String(this),p=o(s,RegExp),f=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),v=new p(g?s:"^(?:"+s.source+")",h),x=void 0===t?4294967295:t>>>0;if(0===x)return[];if(0===d.length)return null===c(v,d)?[d]:[];var k=0,_=0,y=[];while(_<d.length){v.lastIndex=g?_:0;var S,L=c(v,g?d:d.slice(_));if(null===L||(S=u(r(v.lastIndex+(g?0:_)),d.length))===k)_=l(d,_,f);else{if(y.push(d.slice(k,_)),y.length===x)return y;for(var C=1;C<=L.length-1;C++)if(y.push(L[C]),y.length===x)return y;_=k=S}}return y.push(d.slice(k)),y}]})},2960:function(e,t,a){"use strict";var n=a("c461"),i=a.n(n);i.a},3079:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{staticClass:"options"},[a("div",{staticClass:"option-header"},[a("div",{staticClass:"left"},e._l(e.data.leftMenu,function(t,n){return a("div",{key:n,staticClass:"item"},[a("span",[e._v(e._s(t.name))]),t.type?e._e():a("div",["name"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),"goodsName"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.goodsName,callback:function(t){e.goodsName=t},expression:"goodsName"}}):e._e(),"title"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}):e._e(),"count"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}}):e._e(),"price"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}):e._e(),"contactPerson"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.contactPerson,callback:function(t){e.contactPerson=t},expression:"contactPerson"}}):e._e(),"mobile"===t.module?a("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}):e._e()],1),"date"===t.type?a("div",["beginTime"===t.module?a("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}}):e._e(),"endTime"===t.module?a("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1):e._e(),"select"===t.type?a("div",["schoolId"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.schoolId,callback:function(t){e.schoolId=t},expression:"schoolId"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"classId"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.classId,callback:function(t){e.classId=t},expression:"classId"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"roleId"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"role"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"checkState"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.checkState,callback:function(t){e.checkState=t},expression:"checkState"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"goodsId"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.goodsId,callback:function(t){e.goodsId=t},expression:"goodsId"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"dealState"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.dealState,callback:function(t){e.dealState=t},expression:"dealState"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"state"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"select"===t.module?a("el-select",{attrs:{placeholder:"全部"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(t.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e()],1):e._e()])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:e.data.rightMenu&&e.data.rightMenu.length>0,expression:"data.rightMenu && data.rightMenu.length > 0"}],staticClass:"right"},e._l(e.data.rightMenu,function(t,n){return a("el-button",{key:n,staticClass:"btn",attrs:{type:"primary"},on:{click:function(a){e.btnClick(t)}}},[e._v(e._s(t.name))])}),1)])])],1)},i=[],o=(a("ac6a"),a("fc37")),l={name:"options",props:["data"],data:function(){var e={};return this.data.leftMenu.forEach(function(t){e[t.module]=""}),e},methods:{btnClick:function(e){var t={data:e,id:e.id};this.$emit("change",t)},getData:function(){var e=this,t={};return this.data.leftMenu.forEach(function(a){var n=e[a.module];"date"===a.type&&n&&(n=Object(o["a"])(n)),t[a.module]=n}),t}}},r=l,c=(a("ac7a"),a("2877")),s=Object(c["a"])(r,n,i,!1,null,"c8ca6a5c",null);s.options.__file="options.vue";t["a"]=s.exports},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"386d":function(e,t,a){"use strict";var n=a("cb7c"),i=a("83a1"),o=a("5f1b");a("214f")("search",1,function(e,t,a,l){return[function(a){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=l(a,e,this);if(t.done)return t.value;var r=n(e),c=String(this),s=r.lastIndex;i(s,0)||(r.lastIndex=0);var u=o(r,c);return i(r.lastIndex,s)||(r.lastIndex=s),null===u?-1:u.index}]})},5176:function(e,t,a){e.exports=a("51b6")},"5d6b":function(e,t,a){var n=a("e53d").parseInt,i=a("a1ce").trim,o=a("e692"),l=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var a=i(String(e),3);return n(a,t>>>0||(l.test(a)?16:10))}:n},"670d":function(e,t,a){},"6b54":function(e,t,a){"use strict";a("3846");var n=a("cb7c"),i=a("0bfb"),o=a("9e1e"),l="toString",r=/./[l],c=function(e){a("2aba")(RegExp.prototype,l,e,!0)};a("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):r.name!=l&&c(function(){return r.call(this)})},7445:function(e,t,a){var n=a("63b6"),i=a("5d6b");n(n.G+n.F*(parseInt!=i),{parseInt:i})},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},9404:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-table",{attrs:{data:e.tableList}},[e._l(e.data.table,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,width:e.width,align:"center"}})}),e.data.edit&&e.data.edit.length>0?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.data.edit,function(n,i){return a("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(a){e.handle(t.row,n)}}},[e._v(e._s(n.name))])})}}])}):e._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(e,t){var a={data:e,id:t.id};this.$emit("change",a)}},watch:{list:function(e){this.tableList=e}}},l=o,r=(a("2960"),a("2877")),c=Object(r["a"])(l,n,i,!1,null,"32822608",null);c.options.__file="tables.vue";t["a"]=c.exports},"9cf8":function(e,t,a){"use strict";a("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(e){this.pageParams.totalCount=e.totalCount,this.pageParams.totalPage=e.totalPage},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.currentPage=e}},watch:{currentPage:function(){this.search()}}};t["a"]=i},a1ce:function(e,t,a){var n=a("63b6"),i=a("25eb"),o=a("294c"),l=a("e692"),r="["+l+"]",c="​",s=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(e,t,a){var i={},r=o(function(){return!!l[e]()||c[e]()!=c}),s=i[e]=r?t(p):l[e];a&&(i[a]=s),n(n.P+n.F*r,"String",i)},p=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aae3:function(e,t,a){var n=a("d3f4"),i=a("2d95"),o=a("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},ac6a:function(e,t,a){for(var n=a("cadf"),i=a("0d58"),o=a("2aba"),l=a("7726"),r=a("32e9"),c=a("84f2"),s=a("2b4c"),u=s("iterator"),d=s("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),g=0;g<h.length;g++){var m,b=h[g],v=f[b],x=l[b],k=x&&x.prototype;if(k&&(k[u]||r(k,u,p),k[d]||r(k,d,b),c[b]=p,v))for(m in n)k[m]||o(k,m,n[m],!0)}},ac7a:function(e,t,a){"use strict";var n=a("fdbd"),i=a.n(n);i.a},b9e9:function(e,t,a){a("7445"),e.exports=a("584a").parseInt},c461:function(e,t,a){},ca1e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:e.dataOption},on:{change:e.optchange}}),a("tables",{attrs:{data:e.dataTable,list:e.tableList},on:{change:e.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageParams.size,layout:"total, prev, pager, next",total:e.pageParams.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(e.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确 定")])],1)])],1)},i=[],o=a("5176"),l=a.n(o),r=(a("386d"),a("3079")),c=a("9404"),s=a("b383"),u=a.n(s),d=a("9cf8"),p=a("fc37"),f={leftMenu:[{id:"1",name:"商品名称：",placeholder:"请输入商品名称",module:"name"},{id:"2",name:"商品数量：",placeholder:"请输入商品数量",module:"count"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},h={table:[{label:"商品名称",prop:"name"},{label:"商品价格",prop:"count"},{label:"商品数量",prop:"price"},{label:"时间范围",prop:"time"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},g=["确认删除该条信息?"],m={name:"goods",mixins:[d["a"]],data:function(){return{dataOption:f,dataTable:h,dialogVisible:!1,dialogContent:g[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:r["a"],Tables:c["a"]},mounted:function(){this.search()},methods:{optchange:function(e){return console.log(e.id+"--id被单击了"),"r1"===e.id?this.search():"r2"===e.id?this.$router.push("goodsAdd?type=new"):void 0},tabchange:function(e){return console.log(e.id+"--id被单击了"),this.id=e.data.id,"t1"===e.id?this.$router.push("goodsAdd?type=edit&id=".concat(this.id)):"t2"===e.id?this.dialogVisible=!0:void 0},sure:function(){var e=this;this.api.delete("/goods/".concat(this.id)).then(function(t){e.loading=!1,e.search(),e.$message(t.data)}).catch(function(t){console.log(t),e.$message(t.data.message)}),this.dialogVisible=!1},search:function(){var e=this,t=this.$refs.goodsOpt.getData(),a={size:20,page:this.currentPage-1},n=l()({},t,a),i=u.a.stringify(n||{});this.loading=!0,this.api.get("/goods?".concat(i)).then(function(t){e.loading=!1,e.dataInit(t.data),e.setPage(t.data),e.tableList=t.data.list}).catch(function(t){console.log(t),e.$message(t.data.message)})},dataInit:function(e){var t=e.list.map(function(e){e.beginTime&&e.endTime&&(e.time=Object(p["c"])(e.beginTime)+" 至 "+Object(p["c"])(e.endTime))});this.tableList=t}}},b=m,v=(a("159f"),a("2877")),x=Object(v["a"])(b,n,i,!1,null,"5df29278",null);x.options.__file="goods.vue";t["default"]=x.exports},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,a){e.exports=a("b9e9")},fc37:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});a("7f7f"),a("6b54"),a("28a5");var n=a("e814"),i=a.n(n),o=(a("2ef0"),a("bc3a")),l=a.n(o);function r(e){if(!e)return"";var t=new Date(e).getFullYear(),a=new Date(e).getMonth()+1,n=new Date(e).getDate();return a<10&&(a="0"+i()(a)),n<10&&(n="0"+i()(n)),"".concat(t,"-").concat(a,"-").concat(n)}function c(e){if(!e)return"";var t=new Date(e).getTime();return"".concat(t)}function s(e,t){if(e){var a=e.target.files[0];if(a){var n=new FormData;n.append("chunk","0"),n.append("chunks","1"),n.append("file",a,a.name);var i={headers:{"Content-Type":"multipart/form-data"}};l.a.get("/login/qiniu/token").then(function(e){var a=e.data.data;n.append("token",a),u(n,i,t)})}}}function u(e,t,a){l.a.post("http://upload-z1.qiniup.com/",e,t).then(function(e){var t={message:"ok",url:"http://qiniu.tianyalei.com/".concat(e.data.key)};a&&a(t)}).catch(function(e){console.log(e,"pppp")})}},fdbd:function(e,t,a){}}]);
//# sourceMappingURL=chunk-0f6ee6c6.b7691110.js.map