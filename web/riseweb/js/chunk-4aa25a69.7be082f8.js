(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aa25a69"],{"00d8":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e[n]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],a=0;a<e.length;a+=3)for(var i=e[a]<<16|e[a+1]<<8|e[a+2],o=0;o<4;o++)8*a+6*o<=8*e.length?n.push(t.charAt(i>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],a=0,i=0;a<e.length;i=++a%4)0!=i&&n.push((t.indexOf(e.charAt(a-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(a))>>>6-2*i);return n}};e.exports=n})()},"28a5":function(e,t,n){"use strict";var a=n("aae3"),i=n("cb7c"),o=n("ebd6"),r=n("0390"),l=n("9def"),u=n("5f1b"),c=n("520a"),d=Math.min,s=[].push,f="split",h="length",p="lastIndex",m=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("214f")("split",2,function(e,t,n,v){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(i,e,t);var o,r,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,m=void 0===t?4294967295:t>>>0,v=new RegExp(e.source,d+"g");while(o=c.call(v,i)){if(r=v[p],r>f&&(u.push(i.slice(f,o.index)),o[h]>1&&o.index<i[h]&&s.apply(u,o.slice(1)),l=o[0][h],f=r,u[h]>=m))break;v[p]===o.index&&v[p]++}return f===i[h]?!l&&v.test("")||u.push(""):u.push(i.slice(f)),u[h]>m?u.slice(0,m):u}:"0"[f](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,a):g.call(String(i),n,a)},function(e,t){var a=v(g,e,this,t,g!==n);if(a.done)return a.value;var c=i(e),s=String(this),f=o(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),b=new f(m?c:"^(?:"+c.source+")",p),y=void 0===t?4294967295:t>>>0;if(0===y)return[];if(0===s.length)return null===u(b,s)?[s]:[];var I=0,x=0,V=[];while(x<s.length){b.lastIndex=m?x:0;var _,K=u(b,m?s:s.slice(x));if(null===K||(_=d(l(b.lastIndex+(m?0:x)),s.length))===I)x=r(s,x,h);else{if(V.push(s.slice(I,x)),V.length===y)return V;for(var w=1;w<=K.length-1;w++)if(V.push(K[w]),V.length===y)return V;x=I=_}}return V.push(s.slice(I)),V}]})},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3ebc":function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"h",function(){return c}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return h});n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2ef0");var a=n("7c15");function i(e,t,n){return a["a"].get("/role").then(function(a){var i=a.data.map(function(e){var t={id:e.id,dKey:e.id,dValue:e.sign};return t});if("filter"!=t&&i.unshift({id:"",dKey:"",dValue:"全部"}),"less"===n){var o=["超级管理员","学员"];i=i.filter(function(e){return-1==o.indexOf(e.dValue)})}return e&&e(i),a.data}).catch(function(e){console.log(e)}),[]}function o(e,t){a["a"].get("/school").then(function(n){var a=n.data.map(function(e){var t={id:e.id,dKey:e.id,dValue:e.name};return t});return"filter"!=t&&a.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(a),n.data}).catch(function(e){console.log(e)})}function r(e,t){a["a"].get("/class").then(function(n){var a=n.data.map(function(e){var t={id:e.id,dKey:e.id,dValue:e.name};return t});return"filter"!=t&&a.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(a),n.data}).catch(function(e){console.log(e)})}function l(e,t){a["a"].get("/goods").then(function(n){var a=n.data.list.map(function(e){var t={id:e.id,dKey:e.id,dValue:e.name};return t});return"filter"!=t&&a.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(a),n.data}).catch(function(e){console.log(e)})}function u(e,t){var n=[{id:0,dKey:0,dValue:"未发货"},{id:1,dKey:1,dValue:"已发货"},{id:2,dKey:2,dValue:"已收货"}];return"filter"!=t&&n.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(n),n}var c=[{id:-1,dKey:"",dValue:"全部"},{id:1,dKey:1,dValue:"音频"},{id:2,dKey:2,dValue:"视频"}];function d(e,t){var n=[{id:0,dKey:0,dValue:"未审核"},{id:1,dKey:1,dValue:"审核无效"},{id:2,dKey:2,dValue:"审核通过"}];return"filter"!=t&&n.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(n),n}function s(e,t){var n=[{id:0,dKey:0,dValue:"未成交"},{id:1,dKey:1,dValue:"已成交未返卷"},{id:2,dKey:2,dValue:"已成交已返卷"}];return"filter"!=t&&n.unshift({id:"",dKey:"",dValue:"全部"}),e&&e(n),n}var f=[{id:0,dKey:0,dValue:"选择题"},{id:1,dKey:1,dValue:"问答题"}],h=[{id:0,dKey:"A",dValue:"A"},{id:1,dKey:"B",dValue:"B"},{id:2,dKey:"C",dValue:"C"},{id:3,dKey:"D",dValue:"D"},{id:4,dKey:"E",dValue:"E"},{id:5,dKey:"F",dValue:"F"},{id:6,dKey:"G",dValue:"G"},{id:7,dKey:"H",dValue:"H"},{id:8,dKey:"I",dValue:"I"}]},"5d6b":function(e,t,n){var a=n("e53d").parseInt,i=n("a1ce").trim,o=n("e692"),r=/^[-+]?0[xX]/;e.exports=8!==a(o+"08")||22!==a(o+"0x16")?function(e,t){var n=i(String(e),3);return a(n,t>>>0||(r.test(n)?16:10))}:a},6682:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("div",{staticClass:"rise x add"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"content"},e._l(e.data,function(t,a){return n("div",{key:a,staticClass:"item"},[n("span",[e._v(e._s(t.name))]),t.type?e._e():n("div",["name"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),"account"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}):e._e(),"password"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),"email"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}):e._e(),"mobile"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}):e._e(),"score"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.score,callback:function(t){e.score=t},expression:"score"}}):e._e(),"memo"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.memo,callback:function(t){e.memo=t},expression:"memo"}}):e._e()],1),"select"===t.type?n("div",["schoolId"===t.module?n("el-select",{attrs:{placeholder:"全部"},model:{value:e.schoolId,callback:function(t){e.schoolId=t},expression:"schoolId"}},e._l(t.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"classId"===t.module?n("el-select",{attrs:{placeholder:"全部"},model:{value:e.classId,callback:function(t){e.classId=t},expression:"classId"}},e._l(t.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e(),"roleId"===t.module?n("el-select",{attrs:{placeholder:"全部"},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}},e._l(t.options,function(e){return n("el-option",{key:e.id,attrs:{label:e.dValue,value:e.id}})}),1):e._e()],1):e._e()])}),0),n("div",{staticClass:"btn-list"},[n("el-button",{staticClass:"btn",on:{click:function(t){e.cancle()}}},[e._v("取消")]),n("el-button",{staticClass:"btn",on:{click:function(t){e.save()}}},[e._v("保存")])],1)])])},i=[],o=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("b383"),n("fc37"),n("3ebc")),r=n("6821f"),l=n.n(r),u=["新建","编辑"],c=["请补全信息后提交"],d=[{name:"校区：",placeholder:"请选择校区",module:"schoolId",type:"select"},{name:"班级：",placeholder:"请选择班级",module:"classId",type:"select"},{name:"用户姓名：",placeholder:"请输入用户姓名",module:"name"},{name:"用户账号：",placeholder:"请输入用户账号",module:"account"},{name:"用户手机：",placeholder:"请输入用户手机",module:"mobile"},{name:"所属角色：",placeholder:"请选择所属角色",module:"roleId",type:"select"}],s={name:"systemUseradd",data:function(){return{title:"",id:"",data:d,loading:!1,name:"",account:"",schoolId:"",email:"",mobile:"",score:"",classId:"",memo:"",roleId:""}},mounted:function(){this.dropInit(),this.dataInit()},methods:{dropInit:function(){var e=this;Object(o["g"])(function(t){var n=e.data.map(function(e){return"schoolId"===e.module&&(e.options=t),e});e.data=n},"filter"),Object(o["a"])(function(t){var n=e.data.map(function(e){return"classId"===e.module&&(e.options=t),e});e.data=n},"filter"),Object(o["f"])(function(t){var n=e.data.map(function(e){return"roleId"===e.module&&(e.options=t),e});e.data=n},"filter","less")},dataInit:function(){var e=this.$route.query,t=e.type,n=e.id;if(this.type=t,this.id=n,"edit"!==t)return this.title=u[0];this.title=u[1],this.detailAjax()},editInit:function(e){var t=e.data,n=t.name,a=t.account,i=t.password,o=t.schoolId,r=t.classId,l=t.mobile,u=t.email,c=t.memo,d=t.roleId;this.name=n,this.account=a,this.password=i,this.schoolId=o,this.classId=r,this.mobile=l,this.email=u,this.memo=c,this.roleId=d},detailAjax:function(){var e=this;this.loading=!0,this.api.get("/user/".concat(this.id)).then(function(t){e.loading=!1,e.editInit(t)}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.message)})},editAjax:function(){var e=this;if(!this.account||!this.schoolId||!this.classId||!this.roleId)return this.$message(c[0]);var t={name:this.name,account:this.account,password:l()(this.account).toLowerCase(),schoolId:this.schoolId,classId:this.classId,mobile:this.mobile,email:this.email,memo:this.memo,roleId:this.roleId},n=["post","put"],a=n[0];"edit"===this.type&&(t.id=this.id,a=n[1]),this.loading=!0,this.api[a]("/user",t,"form").then(function(t){e.loading=!1,e.$router.go(-1)}).catch(function(t){e.loading=!1,console.log(t),e.$message(t.message)})},save:function(){this.editAjax()},cancle:function(){this.$router.go(-1)}}},f=s,h=(n("dda5"),n("2877")),p=Object(h["a"])(f,a,i,!1,null,"5ef6e1c8",null);p.options.__file="systemUseradd.vue";t["default"]=p.exports},"6821f":function(e,t,n){(function(){var t=n("00d8"),a=n("9a63").utf8,i=n("044b"),o=n("9a63").bin,r=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?o.stringToBytes(e):a.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var l=t.bytesToWords(e),u=8*e.length,c=1732584193,d=-271733879,s=-1732584194,f=271733878,h=0;h<l.length;h++)l[h]=16711935&(l[h]<<8|l[h]>>>24)|4278255360&(l[h]<<24|l[h]>>>8);l[u>>>5]|=128<<u%32,l[14+(u+64>>>9<<4)]=u;var p=r._ff,m=r._gg,v=r._hh,g=r._ii;for(h=0;h<l.length;h+=16){var b=c,y=d,I=s,x=f;c=p(c,d,s,f,l[h+0],7,-680876936),f=p(f,c,d,s,l[h+1],12,-389564586),s=p(s,f,c,d,l[h+2],17,606105819),d=p(d,s,f,c,l[h+3],22,-1044525330),c=p(c,d,s,f,l[h+4],7,-176418897),f=p(f,c,d,s,l[h+5],12,1200080426),s=p(s,f,c,d,l[h+6],17,-1473231341),d=p(d,s,f,c,l[h+7],22,-45705983),c=p(c,d,s,f,l[h+8],7,1770035416),f=p(f,c,d,s,l[h+9],12,-1958414417),s=p(s,f,c,d,l[h+10],17,-42063),d=p(d,s,f,c,l[h+11],22,-1990404162),c=p(c,d,s,f,l[h+12],7,1804603682),f=p(f,c,d,s,l[h+13],12,-40341101),s=p(s,f,c,d,l[h+14],17,-1502002290),d=p(d,s,f,c,l[h+15],22,1236535329),c=m(c,d,s,f,l[h+1],5,-165796510),f=m(f,c,d,s,l[h+6],9,-1069501632),s=m(s,f,c,d,l[h+11],14,643717713),d=m(d,s,f,c,l[h+0],20,-373897302),c=m(c,d,s,f,l[h+5],5,-701558691),f=m(f,c,d,s,l[h+10],9,38016083),s=m(s,f,c,d,l[h+15],14,-660478335),d=m(d,s,f,c,l[h+4],20,-405537848),c=m(c,d,s,f,l[h+9],5,568446438),f=m(f,c,d,s,l[h+14],9,-1019803690),s=m(s,f,c,d,l[h+3],14,-187363961),d=m(d,s,f,c,l[h+8],20,1163531501),c=m(c,d,s,f,l[h+13],5,-1444681467),f=m(f,c,d,s,l[h+2],9,-51403784),s=m(s,f,c,d,l[h+7],14,1735328473),d=m(d,s,f,c,l[h+12],20,-1926607734),c=v(c,d,s,f,l[h+5],4,-378558),f=v(f,c,d,s,l[h+8],11,-2022574463),s=v(s,f,c,d,l[h+11],16,1839030562),d=v(d,s,f,c,l[h+14],23,-35309556),c=v(c,d,s,f,l[h+1],4,-1530992060),f=v(f,c,d,s,l[h+4],11,1272893353),s=v(s,f,c,d,l[h+7],16,-155497632),d=v(d,s,f,c,l[h+10],23,-1094730640),c=v(c,d,s,f,l[h+13],4,681279174),f=v(f,c,d,s,l[h+0],11,-358537222),s=v(s,f,c,d,l[h+3],16,-722521979),d=v(d,s,f,c,l[h+6],23,76029189),c=v(c,d,s,f,l[h+9],4,-640364487),f=v(f,c,d,s,l[h+12],11,-421815835),s=v(s,f,c,d,l[h+15],16,530742520),d=v(d,s,f,c,l[h+2],23,-995338651),c=g(c,d,s,f,l[h+0],6,-198630844),f=g(f,c,d,s,l[h+7],10,1126891415),s=g(s,f,c,d,l[h+14],15,-1416354905),d=g(d,s,f,c,l[h+5],21,-57434055),c=g(c,d,s,f,l[h+12],6,1700485571),f=g(f,c,d,s,l[h+3],10,-1894986606),s=g(s,f,c,d,l[h+10],15,-1051523),d=g(d,s,f,c,l[h+1],21,-2054922799),c=g(c,d,s,f,l[h+8],6,1873313359),f=g(f,c,d,s,l[h+15],10,-30611744),s=g(s,f,c,d,l[h+6],15,-1560198380),d=g(d,s,f,c,l[h+13],21,1309151649),c=g(c,d,s,f,l[h+4],6,-145523070),f=g(f,c,d,s,l[h+11],10,-1120210379),s=g(s,f,c,d,l[h+2],15,718787259),d=g(d,s,f,c,l[h+9],21,-343485551),c=c+b>>>0,d=d+y>>>0,s=s+I>>>0,f=f+x>>>0}return t.endian([c,d,s,f])};r._ff=function(e,t,n,a,i,o,r){var l=e+(t&n|~t&a)+(i>>>0)+r;return(l<<o|l>>>32-o)+t},r._gg=function(e,t,n,a,i,o,r){var l=e+(t&a|n&~a)+(i>>>0)+r;return(l<<o|l>>>32-o)+t},r._hh=function(e,t,n,a,i,o,r){var l=e+(t^n^a)+(i>>>0)+r;return(l<<o|l>>>32-o)+t},r._ii=function(e,t,n,a,i,o,r){var l=e+(n^(t|~a))+(i>>>0)+r;return(l<<o|l>>>32-o)+t},r._blocksize=16,r._digestsize=16,e.exports=function(e,n){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var a=t.wordsToBytes(r(e,n));return n&&n.asBytes?a:n&&n.asString?o.bytesToString(a):t.bytesToHex(a)}})()},"6b54":function(e,t,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),o=n("9e1e"),r="toString",l=/./[r],u=function(e){n("2aba")(RegExp.prototype,r,e,!0)};n("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?u(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):l.name!=r&&u(function(){return l.call(this)})},7445:function(e,t,n){var a=n("63b6"),i=n("5d6b");a(a.G+a.F*(parseInt!=i),{parseInt:i})},"87ce":function(e,t,n){},"9a63":function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},a1ce:function(e,t,n){var a=n("63b6"),i=n("25eb"),o=n("294c"),r=n("e692"),l="["+r+"]",u="​",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),s=function(e,t,n){var i={},l=o(function(){return!!r[e]()||u[e]()!=u}),c=i[e]=l?t(f):r[e];n&&(i[n]=c),a(a.P+a.F*l,"String",i)},f=s.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=s},aae3:function(e,t,n){var a=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},b9e9:function(e,t,n){n("7445"),e.exports=n("584a").parseInt},dda5:function(e,t,n){"use strict";var a=n("87ce"),i=n.n(a);i.a},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,n){e.exports=n("b9e9")},fc37:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});n("7f7f"),n("6b54"),n("28a5");var a=n("e814"),i=n.n(a),o=(n("2ef0"),n("bc3a")),r=n.n(o);function l(e){if(!e)return"";var t=new Date(e).getFullYear(),n=new Date(e).getMonth()+1,a=new Date(e).getDate();return n<10&&(n="0"+i()(n)),a<10&&(a="0"+i()(a)),"".concat(t,"-").concat(n,"-").concat(a)}function u(e){if(!e)return"";var t=new Date(e).getTime();return"".concat(t)}function c(e,t){if(e){var n=e.target.files[0];if(n){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",n,n.name);var i={headers:{"Content-Type":"multipart/form-data"}};r.a.get("/login/qiniu/token").then(function(e){var n=e.data.data;a.append("token",n),d(a,i,t)})}}}function d(e,t,n){r.a.post("http://upload-z1.qiniup.com/",e,t).then(function(e){var t={message:"ok",url:"http://qiniu.tianyalei.com/".concat(e.data.key)};n&&n(t)}).catch(function(e){console.log(e,"pppp")})}}}]);
//# sourceMappingURL=chunk-4aa25a69.7be082f8.js.map