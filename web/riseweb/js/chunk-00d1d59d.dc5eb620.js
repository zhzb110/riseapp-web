(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d1d59d"],{"07b6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic upload"},[n("div",{staticClass:"picTop"},[n("span",[t._v(t._s(t.label))]),n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[n("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),n("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:t.fileChange}})]),t.process?n("div",{staticClass:"process"},[t._v("\n                上传进度："+t._s(t.process)+"\n            ")]):t._e()])],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length>0,expression:"imageList.length > 0"}],staticClass:"list"},t._l(t.imageList,function(e,i){return n("li",{key:i},[n("div",[t._v("链接地址："),n("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(e))])]),n("div",{on:{click:function(n){t.del(e,i)}}},[t._v("删除")])])}),0)])},a=[],l=(n("28a5"),n("fc37")),u={props:["label","defaultValue"],data:function(){return{imageList:[],loading:!1,process:""}},methods:{fileChange:function(t){var e=this;this.loading=!0,this.process="",Object(l["b"])(t,function(t){e.loading=!1,e.process="",e.imageList.unshift(t.url)},function(t){e.process=t})},del:function(t,e){var n=this.imageList.filter(function(e){return t!==e});this.imageList=n},getData:function(){var t=this.imageList.join(",");return t}},watch:{defaultValue:function(){this.imageList=this.defaultValue.split(",")}}},r=u,o=(n("ae01"),n("2877")),s=Object(o["a"])(r,i,a,!1,null,null,null);s.options.__file="picupload.vue";e["a"]=s.exports},"1de4":function(t,e,n){},"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),l=n("ebd6"),u=n("0390"),r=n("9def"),o=n("5f1b"),s=n("520a"),c=Math.min,d=[].push,f="split",p="length",h="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,g){var m;return m="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var l,u,r,o=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,c+"g");while(l=s.call(g,a)){if(u=g[h],u>f&&(o.push(a.slice(f,l.index)),l[p]>1&&l.index<a[p]&&d.apply(o,l.slice(1)),r=l[0][p],f=u,o[p]>=v))break;g[h]===l.index&&g[h]++}return f===a[p]?!r&&g.test("")||o.push(""):o.push(a.slice(f)),o[p]>v?o.slice(0,v):o}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),l=void 0==n?void 0:n[e];return void 0!==l?l.call(n,a,i):m.call(String(a),n,i)},function(t,e){var i=g(m,t,this,e,m!==n);if(i.done)return i.value;var s=a(t),d=String(this),f=l(s,RegExp),p=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),y=new f(v?s:"^(?:"+s.source+")",h),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===d.length)return null===o(y,d)?[d]:[];var _=0,V=0,x=[];while(V<d.length){y.lastIndex=v?V:0;var K,k=o(y,v?d:d.slice(V));if(null===k||(K=c(r(y.lastIndex+(v?0:V)),d.length))===_)V=u(d,V,p);else{if(x.push(d.slice(_,V)),x.length===b)return x;for(var C=1;C<=k.length-1;C++)if(x.push(k[C]),x.length===b)return x;V=_=K}}return x.push(d.slice(_)),x}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3dcc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"rise x add"},[n("div",{staticClass:"title"},[t._v(t._s(t.header))]),n("div",{staticClass:"content"},[t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"item"},[n("span",[t._v(t._s(e.name))]),e.type?t._e():n("div",["title"===e.module?n("el-input",{attrs:{placeholder:e.placeholder},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}):t._e()],1),"select"===e.type?n("div",["type"===e.module?n("el-select",{attrs:{placeholder:"全部"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(e.options,function(t){return n("el-option",{key:t.id,attrs:{label:t.dValue,value:t.id}})}),1):t._e()],1):t._e()])}),n("mediaupload",{ref:"mediaup",staticStyle:{marginBottom:"15px"},attrs:{label:"音视频上传：",defaultValue:t.mediaDefault}}),n("picupload",{ref:"picup",attrs:{label:"背景图上传：",defaultValue:t.picDefault}}),n("div",{staticClass:"item"},[n("span",[t._v("媒体介绍：")]),n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入媒体介绍"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],2),n("div",{staticClass:"btn-list"},[n("el-button",{staticClass:"btn",on:{click:function(e){t.cancle()}}},[t._v("取消")]),n("el-button",{staticClass:"btn",on:{click:function(e){t.save()}}},[t._v("保存")])],1)])])},a=[],l=(n("b383"),n("3ebc")),u=n("07b6"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic upload"},[n("div",{staticClass:"picTop"},[n("span",[t._v(t._s(t.label))]),n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[n("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),n("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:t.fileChange}})]),t.process?n("div",{staticClass:"process"},[t._v("\n                上传进度："+t._s(t.process)+"\n            ")]):t._e()])],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length>0,expression:"imageList.length > 0"}],staticClass:"list"},t._l(t.imageList,function(e,i){return n("li",{key:i},[n("div",[t._v("链接地址："),n("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(e))])]),n("div",{on:{click:function(n){t.del(e,i)}}},[t._v("删除")])])}),0)])},o=[],s=(n("28a5"),n("fc37")),c={props:["label","defaultValue"],data:function(){return{imageList:[],loading:!1,process:""}},methods:{fileChange:function(t){var e=this;this.loading=!0,this.process="",Object(s["b"])(t,function(t){e.loading=!1,e.process="",e.imageList.unshift(t.url)},function(t){e.process=t})},del:function(t,e){var n=this.imageList.filter(function(e){return t!==e});this.imageList=n},getData:function(){var t=this.imageList.join(",");return t}},watch:{defaultValue:function(){this.imageList=this.defaultValue.split(",")}}},d=c,f=(n("77dc"),n("2877")),p=Object(f["a"])(d,r,o,!1,null,null,null);p.options.__file="mediaupload.vue";var h=p.exports,v=["新建","编辑"],g=[{name:"媒体标题：",placeholder:"请输入媒体标题",module:"title"},{name:"媒体类型：",placeholder:"请选择媒体类型",module:"type",type:"select",options:l["j"]}],m={name:"add",data:function(){return{title:"",header:"",id:"",name:"",remark:"",type:"",types:"",mediaDefault:null,picDefault:null,data:g,loading:!1}},components:{Picupload:u["a"],Mediaupload:h},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=this.$route.query,e=t.type,n=t.id;if(this.types=e,this.id=n,"edit"!==e)return this.header=v[0];this.header=v[1],this.detailAjax()},editInit:function(t){var e=t.data,n=e.remark,i=e.title,a=e.pics,l=e.url,u=e.type;this.remark=n,this.title=i,this.type=u,this.picDefault=a,this.mediaDefault=l},detailAjax:function(){var t=this;this.loading=!0,this.api.get("/media/".concat(this.id)).then(function(e){t.loading=!1,t.editInit(e)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})},editAjax:function(){var t=this,e={remark:this.remark,title:this.title,type:this.type};e.pics=this.$refs.picup.getData(),e.url=this.$refs.mediaup.getData();var n=["post","put"],i=n[0];"edit"===this.types&&(e.id=this.id,i=n[1]),this.loading=!0,this.api[i]("/media",e,"form").then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){t.loading=!1,console.log(e),t.$message(e.message)})},save:function(){this.editAjax()},cancle:function(){this.$router.go(-1)}}},y=m,b=(n("92c9"),Object(f["a"])(y,i,a,!1,null,"27958fb9",null));b.options.__file="add.vue";e["default"]=b.exports},"3ebc":function(t,e,n){"use strict";n.d(e,"g",function(){return a}),n.d(e,"i",function(){return u}),n.d(e,"f",function(){return c}),n.d(e,"j",function(){return d}),n.d(e,"h",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return p}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return v});n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2ef0");var i=n("7c15");function a(t,e,n){return i["a"].get("/role").then(function(i){var a=i.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.sign};return e});if("filter"!=e&&a.unshift({id:"",dKey:"",dValue:"全部"}),"less"===n){var l=["超级管理员","学员"];a=a.filter(function(t){return-1==l.indexOf(t.dValue)})}return t&&t(a),i.data}).catch(function(t){console.log(t)}),[]}function l(t,e,n){i["a"].get("/user?schoolId=".concat(t,"&roleId=3")).then(function(t){var i=t.data.list.map(function(t){var e={id:t.id,dKey:t.account,dValue:t.name};return e});return"filter"!=n&&i.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(i),t.data}).catch(function(t){console.log(t)})}function u(t,e){return i["a"].get("/user?roleId=2").then(function(n){var i=n.data.list.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)}),[]}function r(t,e){i["a"].get("/school").then(function(n){var i=n.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function o(t,e,n){i["a"].get("/class?schoolId=".concat(t)).then(function(t){var i=t.data.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=n&&i.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(i),t.data}).catch(function(t){console.log(t)})}function s(t,e){i["a"].get("/goods").then(function(n){var i=n.data.list.map(function(t){var e={id:t.id,dKey:t.id,dValue:t.name};return e});return"filter"!=e&&i.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(i),n.data}).catch(function(t){console.log(t)})}function c(t,e){var n=[{id:0,dKey:0,dValue:"未发货"},{id:1,dKey:1,dValue:"已发货"},{id:2,dKey:2,dValue:"已收货"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var d=[{id:-1,dKey:"",dValue:"全部"},{id:1,dKey:1,dValue:"音频"},{id:2,dKey:2,dValue:"视频"}];function f(t,e){var n=[{id:0,dKey:0,dValue:"未审核"},{id:1,dKey:1,dValue:"审核无效"},{id:2,dKey:2,dValue:"审核通过"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}function p(t,e){var n=[{id:0,dKey:0,dValue:"未成交"},{id:1,dKey:1,dValue:"已成交未返卷"},{id:2,dKey:2,dValue:"已成交已返卷"}];return"filter"!=e&&n.unshift({id:"",dKey:"",dValue:"全部"}),t&&t(n),n}var h=[{id:0,dKey:0,dValue:"选择题"},{id:1,dKey:1,dValue:"问答题"}],v=[{id:0,dKey:"A",dValue:"A"},{id:1,dKey:"B",dValue:"B"},{id:2,dKey:"C",dValue:"C"},{id:3,dKey:"D",dValue:"D"},{id:4,dKey:"E",dValue:"E"},{id:5,dKey:"F",dValue:"F"},{id:6,dKey:"G",dValue:"G"},{id:7,dKey:"H",dValue:"H"},{id:8,dKey:"I",dValue:"I"}]},"58c9":function(t,e,n){},"5d6b":function(t,e,n){var i=n("e53d").parseInt,a=n("a1ce").trim,l=n("e692"),u=/^[-+]?0[xX]/;t.exports=8!==i(l+"08")||22!==i(l+"0x16")?function(t,e){var n=a(String(t),3);return i(n,e>>>0||(u.test(n)?16:10))}:i},"67dd":function(t,e,n){},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),l=n("9e1e"),u="toString",r=/./[u],o=function(t){n("2aba")(RegExp.prototype,u,t,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!l&&t instanceof RegExp?a.call(t):void 0)}):r.name!=u&&o(function(){return r.call(this)})},7445:function(t,e,n){var i=n("63b6"),a=n("5d6b");i(i.G+i.F*(parseInt!=a),{parseInt:a})},"77dc":function(t,e,n){"use strict";var i=n("1de4"),a=n.n(i);a.a},"92c9":function(t,e,n){"use strict";var i=n("58c9"),a=n.n(i);a.a},a1ce:function(t,e,n){var i=n("63b6"),a=n("25eb"),l=n("294c"),u=n("e692"),r="["+u+"]",o="​",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t,e,n){var a={},r=l(function(){return!!u[t]()||o[t]()!=o}),s=a[t]=r?e(f):u[t];n&&(a[n]=s),i(i.P+i.F*r,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(c,"")),t};t.exports=d},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),l=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==a(t))}},ae01:function(t,e,n){"use strict";var i=n("67dd"),a=n.n(i);a.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},fc37:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});n("7f7f"),n("6b54"),n("28a5");var i=n("e814"),a=n.n(i),l=(n("cadf"),n("551c"),n("097d"),n("2ef0"),n("bc3a")),u=n.n(l);function r(t){if(!t)return"";var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,i=new Date(t).getDate();return n<10&&(n="0"+a()(n)),i<10&&(i="0"+a()(i)),"".concat(e,"-").concat(n,"-").concat(i)}function o(t){if(!t)return"";var e=new Date(t).getTime();return"".concat(e)}function s(t,e,n){if(t){var i=t.target.files[0];if(i){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",i,i.name);var l={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){var e=(t.loaded/t.total*100|0)+"%";n&&n(e)}};u.a.get("/login/qiniu/token").then(function(t){var n=t.data.data;a.append("token",n),c(a,l,e)})}}}function c(t,e,n){u.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};n&&n(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-00d1d59d.dc5eb620.js.map