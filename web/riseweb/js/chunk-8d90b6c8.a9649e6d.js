(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d90b6c8"],{"07b6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic upload"},[n("div",{staticClass:"picTop"},[n("span",[t._v(t._s(t.label))]),n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[n("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),n("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:t.fileChange}})]),t.process?n("div",{staticClass:"process"},[t._v("\n                上传进度："+t._s(t.process)+"\n            ")]):t._e()])],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length>0,expression:"imageList.length > 0"}],staticClass:"list"},t._l(t.imageList,function(e,i){return n("li",{key:i},[n("div",[t._v("链接地址："),n("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(e))])]),n("div",{on:{click:function(n){t.del(e,i)}}},[t._v("删除")])])}),0)])},a=[],o=(n("28a5"),n("fc37")),s={props:["label","defaultValue"],data:function(){return{imageList:[],loading:!1,process:""}},methods:{fileChange:function(t){var e=this;this.loading=!0,this.process="",Object(o["b"])(t,function(t){e.loading=!1,e.process="",e.imageList.unshift(t.url)},function(t){e.process=t})},del:function(t,e){var n=this.imageList.filter(function(e){return t!==e});this.imageList=n},getData:function(){var t=this.imageList.join(",");return t}},watch:{defaultValue:function(){this.imageList=this.defaultValue.split(",")}}},c=s,r=(n("ae01"),n("2877")),l=Object(r["a"])(c,i,a,!1,null,null,null);l.options.__file="picupload.vue";e["a"]=l.exports},"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),o=n("ebd6"),s=n("0390"),c=n("9def"),r=n("5f1b"),l=n("520a"),u=Math.min,d=[].push,f="split",p="length",h="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,v){var m;return m="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var o,s,c,r=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");while(o=l.call(v,a)){if(s=v[h],s>f&&(r.push(a.slice(f,o.index)),o[p]>1&&o.index<a[p]&&d.apply(r,o.slice(1)),c=o[0][p],f=s,r[p]>=g))break;v[h]===o.index&&v[h]++}return f===a[p]?!c&&v.test("")||r.push(""):r.push(a.slice(f)),r[p]>g?r.slice(0,g):r}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):m.call(String(a),n,i)},function(t,e){var i=v(m,t,this,e,m!==n);if(i.done)return i.value;var l=a(t),d=String(this),f=o(l,RegExp),p=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),b=new f(g?l:"^(?:"+l.source+")",h),x=void 0===e?4294967295:e>>>0;if(0===x)return[];if(0===d.length)return null===r(b,d)?[d]:[];var _=0,w=0,y=[];while(w<d.length){b.lastIndex=g?w:0;var k,C=r(b,g?d:d.slice(w));if(null===C||(k=u(c(b.lastIndex+(g?0:w)),d.length))===_)w=s(d,w,p);else{if(y.push(d.slice(_,w)),y.length===x)return y;for(var E=1;E<=C.length-1;E++)if(y.push(C[E]),y.length===x)return y;w=_=k}}return y.push(d.slice(_)),y}]})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3b63":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"rise x add"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"content"},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"item"},[n("span",[t._v(t._s(e.name))]),"count"===e.module?n("el-input",{attrs:{placeholder:e.placeholder},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}):t._e(),"month"===e.module?n("el-date-picker",{attrs:{placeholder:e.placeholder,type:"date"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}}):t._e()],1)}),0),n("div",{staticClass:"btn-list"},[n("el-button",{staticClass:"btn",on:{click:function(e){t.cancle()}}},[t._v("取消")]),n("el-button",{staticClass:"btn",on:{click:function(e){t.save()}}},[t._v("保存")])],1)])])},a=[],o=(n("b383"),n("fc37")),s=(n("07b6"),["新建","编辑"]),c=[{name:"单人月均额：",placeholder:"请输入单人月均额",module:"count"},{name:"日期：",placeholder:"请选择日期",module:"month",type:"date"}],r={name:"add",data:function(){return{title:"",id:"",count:"",month:"",type:"",data:c,loading:!1}},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=this.$route.query,e=t.type,n=t.id;if(this.type=e,this.id=n,"edit"!==e)return this.title=s[0];this.title=s[1],this.detailAjax()},editInit:function(t){var e=t.data,n=e.count,i=e.month;this.count=n,this.month=i},detailAjax:function(){var t=this;this.loading=!0,this.api.get("/scoreLimit/".concat(this.id)).then(function(e){t.loading=!1,t.editInit(e)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)})},editAjax:function(){var t=this,e={month:Object(o["a"])(this.month),count:this.count},n=["post","put"],i=n[0];"edit"===this.type&&(e.id=this.id,i=n[1]),this.loading=!0,this.api[i]("/scoreLimit",e,"form").then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){t.loading=!1,console.log(e),t.$message(e.message)})},save:function(){this.editAjax()},cancle:function(){this.$router.go(-1)}}},l=r,u=(n("6b0d"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"1b5ddc96",null);d.options.__file="add.vue";e["default"]=d.exports},"3ed8":function(t,e,n){},"5d6b":function(t,e,n){var i=n("e53d").parseInt,a=n("a1ce").trim,o=n("e692"),s=/^[-+]?0[xX]/;t.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(t,e){var n=a(String(t),3);return i(n,e>>>0||(s.test(n)?16:10))}:i},"67dd":function(t,e,n){},"6b0d":function(t,e,n){"use strict";var i=n("3ed8"),a=n.n(i);a.a},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),o=n("9e1e"),s="toString",c=/./[s],r=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?r(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)}):c.name!=s&&r(function(){return c.call(this)})},7445:function(t,e,n){var i=n("63b6"),a=n("5d6b");i(i.G+i.F*(parseInt!=a),{parseInt:a})},a1ce:function(t,e,n){var i=n("63b6"),a=n("25eb"),o=n("294c"),s=n("e692"),c="["+s+"]",r="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,n){var a={},c=o(function(){return!!s[t]()||r[t]()!=r}),l=a[t]=c?e(f):s[t];n&&(a[n]=l),i(i.P+i.F*c,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},ae01:function(t,e,n){"use strict";var i=n("67dd"),a=n.n(i);a.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},fc37:function(t,e,n){"use strict";n.d(e,"c",function(){return c}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return l});n("7f7f"),n("6b54"),n("28a5");var i=n("e814"),a=n.n(i),o=(n("2ef0"),n("bc3a")),s=n.n(o);function c(t){if(!t)return"";var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,i=new Date(t).getDate();return n<10&&(n="0"+a()(n)),i<10&&(i="0"+a()(i)),"".concat(e,"-").concat(n,"-").concat(i)}function r(t){if(!t)return"";var e=new Date(t).getTime();return"".concat(e)}function l(t,e,n){if(t){var i=t.target.files[0];if(i){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",i,i.name);var o={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){var e=(t.loaded/t.total*100|0)+"%";n&&n(e)}};s.a.get("/login/qiniu/token").then(function(t){var n=t.data.data;a.append("token",n),u(a,o,e)})}}}function u(t,e,n){s.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};n&&n(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-8d90b6c8.a9649e6d.js.map