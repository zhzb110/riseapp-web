(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7a92d56"],{"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),o=n("ebd6"),c=n("0390"),s=n("9def"),d=n("5f1b"),r=n("520a"),u=Math.min,l=[].push,p="split",f="length",h="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,m){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var o,c,s,d=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,u+"g");while(o=r.call(m,a)){if(c=m[h],c>p&&(d.push(a.slice(p,o.index)),o[f]>1&&o.index<a[f]&&l.apply(d,o.slice(1)),s=o[0][f],p=c,d[f]>=v))break;m[h]===o.index&&m[h]++}return p===a[f]?!s&&m.test("")||d.push(""):d.push(a.slice(p)),d[f]>v?d.slice(0,v):d}:"0"[p](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):g.call(String(a),n,i)},function(t,e){var i=m(g,t,this,e,g!==n);if(i.done)return i.value;var r=a(t),l=String(this),p=o(r,RegExp),f=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(v?"y":"g"),y=new p(v?r:"^(?:"+r.source+")",h),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===l.length)return null===d(y,l)?[l]:[];var C=0,x=0,_=[];while(x<l.length){y.lastIndex=v?x:0;var V,K=d(y,v?l:l.slice(x));if(null===K||(V=u(s(y.lastIndex+(v?0:x)),l.length))===C)x=c(l,x,f);else{if(_.push(l.slice(C,x)),_.length===b)return _;for(var k=1;k<=K.length-1;k++)if(_.push(K[k]),_.length===b)return _;x=C=V}}return _.push(l.slice(C)),_}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3ebc":function(t,e,n){"use strict";n.d(e,"f",function(){return a}),n.d(e,"e",function(){return d}),n.d(e,"h",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"b",function(){return l}),n.d(e,"i",function(){return p}),n.d(e,"j",function(){return f});n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2ef0");var i=n("7c15");function a(t,e,n){return i["a"].get("/role").then(function(i){var a=i.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.sign};return e});if("filter"!=e&&a.unshift({id:"",dKey:"",dValue:"全部"}),"less"===n){var o=["超级管理员","学员"];a=a.filter(function(t){return-1==o.indexOf(t.dValue)})}return t&&t(a),i.data}).catch(function(t){console.log(t)}),[]}function o(t,e){i["a"].get("/school").then(function(n){var i=n.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function c(t,e){i["a"].get("/class").then(function(n){var i=n.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function s(t,e){i["a"].get("/goods").then(function(n){var i=n.data.list.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function d(t,e){var n=[{id:0,dKey:0,dValue:"未发货"},{id:1,dKey:1,dValue:"已发货"},{id:2,dKey:2,dValue:"已收货"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var r=[{id:-1,dKey:"",dValue:"全部"},{id:1,dKey:1,dValue:"音频"},{id:2,dKey:2,dValue:"视频"}];function u(t,e){var n=[{id:0,dKey:0,dValue:"未审核"},{id:1,dKey:1,dValue:"审核无效"},{id:2,dKey:2,dValue:"审核通过"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}function l(t,e){var n=[{id:0,dKey:0,dValue:"未成交"},{id:1,dKey:1,dValue:"已成交未返卷"},{id:2,dKey:2,dValue:"已成交已返卷"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var p=[{id:0,dKey:0,dValue:"选择题"},{id:1,dKey:1,dValue:"问答题"}],f=[{id:0,dKey:"A",dValue:"A"},{id:1,dKey:"B",dValue:"B"},{id:2,dKey:"C",dValue:"C"},{id:3,dKey:"D",dValue:"D"},{id:4,dKey:"E",dValue:"E"},{id:5,dKey:"F",dValue:"F"},{id:6,dKey:"G",dValue:"G"},{id:7,dKey:"H",dValue:"H"},{id:8,dKey:"I",dValue:"I"}]},"3f8e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rise x add question"},[n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"title"},[t._v(t._s(t.header))]),n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("div",{staticClass:"item"},[n("span",[t._v("问卷名称：")]),n("el-input",{attrs:{placeholder:"请输入问卷名称"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("div",{staticClass:"item"},[n("span",[t._v("开始时间：")]),n("el-date-picker",{attrs:{placeholder:"请输入开始时间",type:"date"},model:{value:t.beginTime,callback:function(e){t.beginTime=e},expression:"beginTime"}})],1),n("div",{staticClass:"item"},[n("span",[t._v("结束时间：")]),n("el-date-picker",{attrs:{placeholder:"请输入结束时间",type:"date"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)]),n("div",{staticClass:"right"},t._l(t.headerBtn,function(e,i){return n("div",{key:i,staticClass:"item"},[n("button",{staticClass:"el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.headerClick(i)}}},[n("span",[t._v(t._s(e))])])])}),0)]),"new"!=t.type?n("div",{staticClass:"content"},[n("div",{staticClass:"top"},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"item"},[n("div",{staticClass:"item-name"},[n("span",[t._v(t._s(e.title))]),n("span",{staticClass:"red",on:{click:function(n){t.themeDel(e,i)}}},[t._v("删除")])]),n("div",{staticClass:"item-opt"},[n("div",[t._v(t._s(e.item1))]),n("div",[t._v(t._s(e.item2))]),n("div",[t._v(t._s(e.item3))]),n("div",[t._v(t._s(e.item4))]),n("div",[t._v(t._s(e.item5))])])])}),0),n("div",{staticClass:"line"}),n("div",{staticClass:"article"},[n("div",{staticClass:"left"},[n("div",{staticClass:"item"},[n("span",[t._v("题目类型：")]),n("el-select",{attrs:{placeholder:"请选择题目类型"},on:{change:t.selectChange},model:{value:t.product.type,callback:function(e){t.$set(t.product,"type",e)},expression:"product.type"}},t._l(t.topicList,function(t){return n("el-option",{key:t.id,attrs:{label:t.dValue,value:t.id}})}),1)],1),n("div",{staticClass:"item"},[n("span",[t._v("题目名称：")]),n("el-input",{attrs:{placeholder:"请输入题目名称"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),t._l(t.product.options,function(e,i){return n("div",{key:i,staticClass:"item-opt"},[n("span",[t._v(t._s(e.content))]),e.content?n("span",{staticClass:"red",on:{click:function(n){t.themeOptDel(e,i)}}},[t._v("删除")]):t._e()])})],2),0==t.product.type?n("div",{staticClass:"item"},[n("span",[t._v("选项：")]),n("el-input",{attrs:{placeholder:"请输入选项内容"},model:{value:t.productOpt.content,callback:function(e){t.$set(t.productOpt,"content",e)},expression:"productOpt.content"}}),n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeOptAdd()}}},[n("span",[t._v("添加")])])],1):t._e(),n("div",{staticClass:"item"},[n("span"),n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeClear()}}},[n("span",[t._v("清空")])]),n("button",{staticClass:"add el-button btn el-button--primary",attrs:{type:"button"},on:{click:function(e){t.themeClick()}}},[n("span",[t._v("出题")])])])])])]):t._e()])],1)},a=[],o=(n("7f7f"),n("5176")),c=n.n(o),s=(n("cadf"),n("551c"),n("097d"),n("b383"),n("fc37")),d=n("3ebc"),r=["新建","编辑"],u=["取消","保存"],l=["请补全选项内容","请补全题目内容","请勿重复添加"],p={name:"add",data:function(){return{title:"",id:"",type:"",beginTime:"",endTime:"",header:"",headerBtn:u,topicList:d["i"],topicOption:d["j"],typeOption:"",loading:!1,data:[],name:"",product:{type:"",name:"",options:[]},productOpt:{type:"",content:""}}},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=this.$route.query,e=t.type,n=t.id;if(this.type=e,this.id=n,"edit"!==e)return this.header=r[0];this.header=r[1],this.detailAjax(),this.ajax()},headerClick:function(t){0==t&&this.$router.go(-1),1==t&&this.save()},editInit:function(t){var e=t.data,n=e.title,i=e.beginTime,a=e.endTime;this.title=n,this.beginTime=i,this.endTime=a},detailAjax:function(){var t=this;this.loading=!0,this.api.get("/survey/".concat(this.id)).then(function(e){t.loading=!1,t.editInit(e)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})},save:function(){var t=this,e={title:this.title,beginTime:Object(s["a"])(this.beginTime),endTime:Object(s["a"])(this.endTime)},n=["post","put"],i=n[0];"edit"===this.type&&(e.id=this.id,i=n[1]),this.loading=!0,this.api[i]("/survey",e,"form").then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){t.loading=!1,console.log(e),t.$message(e.message)})},themeOptAdd:function(){var t=c()({},this.productOpt),e=[].concat(this.product.options),n=e.filter(function(e){return e.content===t.content});return t.content?n.length>0?this.$message(l[2]):(e.push(t),void(this.product.options=e)):this.$message(l[0])},themeOptDel:function(t,e){var n=[].concat(this.product.options),i=n.filter(function(e){return t.type!==e.type});this.product.options=i},themeClear:function(){this.product={type:"",name:"",options:[]},this.productOpt={type:"",content:""}},themeClick:function(){var t=this,e=c()({},this.product);if(!e.name)return this.$message(l[0]);if(!e.type&&0!=e.type)return this.$message(l[0]);for(var n=0;n<5;n++)e.options[n]||(e.options[n]={});var i={title:e.name,type:e.type,content:"",surveyId:this.id,item1:e.options[0].content,item2:e.options[1].content,item3:e.options[2].content,item4:e.options[3].content,item5:e.options[4].content};this.loading=!0,this.api.post("/question",i,"form").then(function(e){t.ajax()}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})},themeDel:function(t,e){var n=this;this.loading=!0,this.api.delete("/question/".concat(t.id)).then(function(t){n.ajax()}).catch(function(t){console.log(t),n.loading=!1,n.$message(t.message)})},selectChange:function(t){this.themeClear(),this.product.type=t},ajax:function(){var t=this;this.loading=!0,this.api.get("/question?surveyId=".concat(this.id)).then(function(e){t.loading=!1,t.data=e.data}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})}}},f=p,h=(n("b5c3"),n("2877")),v=Object(h["a"])(f,i,a,!1,null,"70c1136f",null);v.options.__file="add.vue";e["default"]=v.exports},5176:function(t,e,n){t.exports=n("51b6")},"5d6b":function(t,e,n){var i=n("e53d").parseInt,a=n("a1ce").trim,o=n("e692"),c=/^[-+]?0[xX]/;t.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(t,e){var n=a(String(t),3);return i(n,e>>>0||(c.test(n)?16:10))}:i},"68a8":function(t,e,n){},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),o=n("9e1e"),c="toString",s=/./[c],d=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?d(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)}):s.name!=c&&d(function(){return s.call(this)})},7445:function(t,e,n){var i=n("63b6"),a=n("5d6b");i(i.G+i.F*(parseInt!=a),{parseInt:a})},a1ce:function(t,e,n){var i=n("63b6"),a=n("25eb"),o=n("294c"),c=n("e692"),s="["+c+"]",d="​",r=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,n){var a={},s=o(function(){return!!c[t]()||d[t]()!=d}),r=a[t]=s?e(p):c[t];n&&(a[n]=r),i(i.P+i.F*s,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},b5c3:function(t,e,n){"use strict";var i=n("68a8"),a=n.n(i);a.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},fc37:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return r});n("7f7f"),n("6b54"),n("28a5");var i=n("e814"),a=n.n(i),o=(n("2ef0"),n("bc3a")),c=n.n(o);function s(t){if(!t)return"";var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,i=new Date(t).getDate();return n<10&&(n="0"+a()(n)),i<10&&(i="0"+a()(i)),"".concat(e,"-").concat(n,"-").concat(i)}function d(t){if(!t)return"";var e=new Date(t).getTime();return"".concat(e)}function r(t,e){if(t){var n=t.target.files[0];if(n){var i=new FormData;i.append("chunk","0"),i.append("chunks","1"),i.append("file",n,n.name);var a={headers:{"Content-Type":"multipart/form-data"}};c.a.get("/login/qiniu/token").then(function(t){var n=t.data.data;i.append("token",n),u(i,a,e)})}}}function u(t,e,n){c.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};n&&n(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-d7a92d56.2ef68651.js.map