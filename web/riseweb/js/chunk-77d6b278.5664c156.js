(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d6b278"],{"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),o=n("ebd6"),c=n("0390"),s=n("9def"),d=n("5f1b"),u=n("520a"),r=Math.min,l=[].push,f="split",p="length",h="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,m){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var o,c,s,d=[],r=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,r+"g");while(o=u.call(m,a)){if(c=m[h],c>f&&(d.push(a.slice(f,o.index)),o[p]>1&&o.index<a[p]&&l.apply(d,o.slice(1)),s=o[0][p],f=c,d[p]>=v))break;m[h]===o.index&&m[h]++}return f===a[p]?!s&&m.test("")||d.push(""):d.push(a.slice(f)),d[p]>v?d.slice(0,v):d}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):g.call(String(a),n,i)},function(t,e){var i=m(g,t,this,e,g!==n);if(i.done)return i.value;var u=a(t),l=String(this),f=o(u,RegExp),p=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),y=new f(v?u:"^(?:"+u.source+")",h),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===l.length)return null===d(y,l)?[l]:[];var _=0,C=0,x=[];while(C<l.length){y.lastIndex=v?C:0;var V,K=d(y,v?l:l.slice(C));if(null===K||(V=r(s(y.lastIndex+(v?0:C)),l.length))===_)C=c(l,C,p);else{if(x.push(l.slice(_,C)),x.length===b)return x;for(var k=1;k<=K.length-1;k++)if(x.push(K[k]),x.length===b)return x;C=_=V}}return x.push(l.slice(_)),x}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3ebc":function(t,e,n){"use strict";n.d(e,"g",function(){return a}),n.d(e,"i",function(){return c}),n.d(e,"f",function(){return r}),n.d(e,"j",function(){return l}),n.d(e,"h",function(){return s}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return p}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return v});n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2ef0");var i=n("7c15");function a(t,e,n){return i["a"].get("/role").then(function(i){var a=i.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.sign};return e});if("filter"!=e&&a.unshift({id:"",dKey:"",dValue:"全部"}),"less"===n){var o=["超级管理员","学员"];a=a.filter(function(t){return-1==o.indexOf(t.dValue)})}return t&&t(a),i.data}).catch(function(t){console.log(t)}),[]}function o(t,e,n){i["a"].get("/user?schoolId=".concat(t,"&roleId=3&page=0&size=1000000")).then(function(t){var i=t.data.list.map(function(t){var e={id:t.id,dKey:t.account,dValue:t.name};return e});return"filter"!=n&&i.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(i),t.data}).catch(function(t){console.log(t)})}function c(t,e){return i["a"].get("/user?roleId=2").then(function(n){var i=n.data.list.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)}),[]}function s(t,e){i["a"].get("/school").then(function(n){var i=n.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function d(t,e,n){i["a"].get("/class?schoolId=".concat(t)).then(function(t){var i=t.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=n&&i.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(i),t.data}).catch(function(t){console.log(t)})}function u(t,e){i["a"].get("/goods").then(function(n){var i=n.data.list.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function r(t,e){var n=[{id:0,dKey:0,dValue:"未发货"},{id:1,dKey:1,dValue:"已发货"},{id:2,dKey:2,dValue:"已收货"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var l=[{id:-1,dKey:"",dValue:"全部"},{id:1,dKey:1,dValue:"音频"},{id:2,dKey:2,dValue:"视频"}];function f(t,e){var n=[{id:0,dKey:0,dValue:"未审核"},{id:1,dKey:1,dValue:"审核无效"},{id:2,dKey:2,dValue:"审核通过"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}function p(t,e){var n=[{id:0,dKey:0,dValue:"未成交"},{id:1,dKey:1,dValue:"已成交未返卷"},{id:2,dKey:2,dValue:"已成交已返卷"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var h=[{id:0,dKey:0,dValue:"选择题"},{id:1,dKey:1,dValue:"问答题"}],v=[{id:0,dKey:"A",dValue:"A"},{id:1,dKey:"B",dValue:"B"},{id:2,dKey:"C",dValue:"C"},{id:3,dKey:"D",dValue:"D"},{id:4,dKey:"E",dValue:"E"},{id:5,dKey:"F",dValue:"F"},{id:6,dKey:"G",dValue:"G"},{id:7,dKey:"H",dValue:"H"},{id:8,dKey:"I",dValue:"I"}]},"3f8e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rise x add question"},[n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"titleHeader"},[n("div",{staticClass:"title"},[t._v(t._s(t.header))]),n("div",{staticClass:"right"},t._l(t.headerBtn,function(e,i){return n("div",{key:i,staticClass:"item"},[n("button",{staticClass:"el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.headerClick(i)}}},[n("span",[t._v(t._s(e))])])])}),0)]),n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("div",{staticClass:"item"},[n("span",[t._v("问卷名称：")]),n("el-input",{attrs:{placeholder:"请输入问卷名称"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("div",{staticClass:"item"},[n("span",[t._v("开始时间：")]),n("el-date-picker",{attrs:{placeholder:"请输入开始时间",type:"date"},model:{value:t.beginTime,callback:function(e){t.beginTime=e},expression:"beginTime"}})],1),n("div",{staticClass:"item"},[n("span",[t._v("结束时间：")]),n("el-date-picker",{attrs:{placeholder:"请输入结束时间",type:"date"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)])]),"new"!=t.type?n("div",{staticClass:"content"},[n("div",{staticClass:"line"}),n("div",{staticClass:"article"},[n("div",{staticClass:"top"},[n("div",{staticClass:"item"},[n("span",[t._v("题目类型：")]),n("el-select",{attrs:{placeholder:"请选择题目类型"},on:{change:t.selectChange},model:{value:t.product.type,callback:function(e){t.$set(t.product,"type",e)},expression:"product.type"}},t._l(t.topicList,function(t){return n("el-option",{key:t.id,attrs:{label:t.dValue,value:t.id}})}),1)],1),n("div",{staticClass:"item"},[n("span",[t._v("题目名称：")]),n("el-input",{attrs:{placeholder:"请输入题目名称"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1)]),0==t.product.type?n("div",{staticClass:"item"},[n("span",[t._v("选项：")]),n("el-input",{attrs:{placeholder:"请输入选项内容"},model:{value:t.productOpt.content,callback:function(e){t.$set(t.productOpt,"content",e)},expression:"productOpt.content"}}),n("div",{staticClass:"item-select"},t._l(t.product.options,function(e,i){return n("div",{key:i,staticClass:"item-opt"},[n("span",[t._v(t._s(e.content))]),e.content?n("span",{staticClass:"red",on:{click:function(n){t.themeOptDel(e,i)}}},[t._v("删除")]):t._e()])}),0)],1):t._e(),n("div",{staticClass:"item"},[n("span"),n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeClick()}}},[n("span",[t._v("出题")])]),n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeClick("edit")}}},[n("span",[t._v("试题修改")])]),0==t.product.type?n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeOptAdd()}}},[n("span",[t._v("选项添加")])]):t._e()])]),t.data.length>0?n("div",{staticClass:"line"}):t._e(),n("div",{staticClass:"cont"},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"item-name"},[n("span",[t._v(t._s(i+1)+"、"+t._s(e.title))]),n("span",{staticClass:"red",on:{click:function(n){t.themeEdit(e,i)}}},[t._v("试题编辑")]),n("span",{staticClass:"red",on:{click:function(n){t.themeDel(e,i)}}},[t._v("试题删除")])]),n("div",{staticClass:"item-opt"},[e.item1?n("div",[t._v(t._s(e.item1))]):t._e(),e.item2?n("div",[t._v(t._s(e.item2))]):t._e(),e.item3?n("div",[t._v(t._s(e.item3))]):t._e(),e.item4?n("div",[t._v(t._s(e.item4))]):t._e(),e.item5?n("div",[t._v(t._s(e.item5))]):t._e()])])}),0)]):t._e()])],1)},a=[],o=(n("7f7f"),n("5176")),c=n.n(o),s=(n("cadf"),n("551c"),n("097d"),n("b383"),n("fc37")),d=n("3ebc"),u=["新建","编辑"],r=["取消","保存"],l=["请补全选项内容","请补全题目内容","请勿重复添加"],f={name:"add",data:function(){return{title:"",id:"",type:"",beginTime:"",endTime:"",header:"",itemId:"",headerBtn:r,topicList:d["k"],topicOption:d["l"],typeOption:"",loading:!1,data:[],name:"",product:{type:"",name:"",options:[]},productOpt:{type:"",content:""}}},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=this.$route.query,e=t.type,n=t.id;if(this.type=e,this.id=n,"edit"!==e)return this.header=u[0];this.header=u[1],this.detailAjax(),this.ajax()},headerClick:function(t){0==t&&this.$router.go(-1),1==t&&this.save()},editInit:function(t){var e=t.data,n=e.title,i=e.beginTime,a=e.endTime;this.title=n,this.beginTime=i,this.endTime=a},detailAjax:function(){var t=this;this.loading=!0,this.api.get("/survey/".concat(this.id)).then(function(e){t.loading=!1,t.editInit(e)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})},save:function(){var t=this,e={title:this.title,beginTime:Object(s["a"])(this.beginTime),endTime:Object(s["a"])(this.endTime)},n=["post","put"],i=n[0];"edit"===this.type&&(e.id=this.id,i=n[1]),this.loading=!0,this.api[i]("/survey",e,"form").then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){t.loading=!1,console.log(e),t.$message(e.message)})},themeOptAdd:function(){var t=c()({},this.productOpt),e=[].concat(this.product.options),n=e.filter(function(e){return e.content===t.content});return t.content?n.length>0?this.$message(l[2]):(e.push(t),void(this.product.options=e)):this.$message(l[0])},themeOptDel:function(t,e){var n=[].concat(this.product.options),i=n.filter(function(e){return t.content!==e.content});this.product.options=i},themeClear:function(){this.product={type:"",name:"",options:[]},this.productOpt={type:"",content:""}},themeClick:function(t){var e=this,n=c()({},this.product);if(!n.name)return this.$message(l[0]);if(!n.type&&0!=n.type)return this.$message(l[0]);for(var i=0;i<5;i++)n.options[i]||(n.options[i]={});var a={title:n.name,type:n.type,content:"",surveyId:this.id,item1:n.options[0].content,item2:n.options[1].content,item3:n.options[2].content,item4:n.options[3].content,item5:n.options[4].content};"edit"===t&&(a.id=this.itemId),this.loading=!0,this.api.post("/question",a,"form").then(function(t){e.themeClear(),e.ajax()}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.message)})},themeEdit:function(t,e){var n=[];this.itemId=t.id,t.item1&&n.push({content:t.item1}),t.item2&&n.push({content:t.item2}),t.item3&&n.push({content:t.item3}),t.item4&&n.push({content:t.item4}),t.item5&&n.push({content:t.item5}),this.product={name:t.title,type:t.type,options:n}},themeDel:function(t,e){var n=this;this.loading=!0,this.api.delete("/question/".concat(t.id)).then(function(t){n.$message(t.data),n.ajax()}).catch(function(t){console.log(t),n.loading=!1,n.$message(t.message)})},selectChange:function(t){this.themeClear(),this.product.type=t},ajax:function(){var t=this;this.loading=!0,this.api.get("/question?surveyId=".concat(this.id)).then(function(e){t.loading=!1,t.data=e.data}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})}}},p=f,h=(n("cdfa"),n("2877")),v=Object(h["a"])(p,i,a,!1,null,"57268efd",null);v.options.__file="add.vue";e["default"]=v.exports},5176:function(t,e,n){t.exports=n("51b6")},"5d6b":function(t,e,n){var i=n("e53d").parseInt,a=n("a1ce").trim,o=n("e692"),c=/^[-+]?0[xX]/;t.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(t,e){var n=a(String(t),3);return i(n,e>>>0||(c.test(n)?16:10))}:i},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),o=n("9e1e"),c="toString",s=/./[c],d=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?d(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)}):s.name!=c&&d(function(){return s.call(this)})},7445:function(t,e,n){var i=n("63b6"),a=n("5d6b");i(i.G+i.F*(parseInt!=a),{parseInt:a})},a1ce:function(t,e,n){var i=n("63b6"),a=n("25eb"),o=n("294c"),c=n("e692"),s="["+c+"]",d="​",u=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),l=function(t,e,n){var a={},s=o(function(){return!!c[t]()||d[t]()!=d}),u=a[t]=s?e(f):c[t];n&&(a[n]=u),i(i.P+i.F*s,"String",a)},f=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(r,"")),t};t.exports=l},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},cdfa:function(t,e,n){"use strict";var i=n("d8f3"),a=n.n(i);a.a},d8f3:function(t,e,n){},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},fc37:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return u});n("7f7f"),n("6b54"),n("28a5");var i=n("e814"),a=n.n(i),o=(n("cadf"),n("551c"),n("097d"),n("2ef0"),n("bc3a")),c=n.n(o);function s(t){if(!t)return"";var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,i=new Date(t).getDate();return n<10&&(n="0"+a()(n)),i<10&&(i="0"+a()(i)),"".concat(e,"-").concat(n,"-").concat(i)}function d(t){if(!t)return"";var e=new Date(t).getTime();return"".concat(e)}function u(t,e,n){if(t){var i=t.target.files[0];if(i){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",i,i.name);var o={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){var e=(t.loaded/t.total*100|0)+"%";n&&n(e)}};c.a.get("/login/qiniu/token").then(function(t){var n=t.data.data;a.append("token",n),r(a,o,e)})}}}function r(t,e,n){c.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};n&&n(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-77d6b278.5664c156.js.map