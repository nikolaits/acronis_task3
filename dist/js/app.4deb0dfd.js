(function(e){function n(n){for(var r,u,a=n[0],i=n[1],l=n[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var s=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("MainComponent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Test")]),t("h3",[e._v(e._s(e.msg))])])},a=[],i=t("bc3a"),l=t.n(i),s={name:"MainComponent",data:function(){return{msg:"Test",items:[]}},methods:{},mounted:function(){l.a.get("https://www.acronis.com/en-us/api/v1/price/?machine_name=acronis_backup&locale=en-us",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log("response",e)})).catch((function(e){console.log("error",e)}))}},p=s,f=(t("bf25"),t("2877")),d=Object(f["a"])(p,u,a,!1,null,"7418e6dd",null),h=d.exports,v={name:"App",components:{MainComponent:h}},b=v,m=(t("034f"),Object(f["a"])(b,o,c,!1,null,null,null)),g=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,n,t){},"8c11":function(e,n,t){},bf25:function(e,n,t){"use strict";var r=t("8c11"),o=t.n(r);o.a}});
//# sourceMappingURL=app.4deb0dfd.js.map