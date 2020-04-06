(function(e){function n(n){for(var r,c,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9834e49","chunk-07ba15ca":"1e81503e"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"h-screen p-5",attrs:{id:"app"}},[t("router-view")],1)},a=[],c=(t("df3d"),t("5c64"),t("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),s=i.exports,l=t("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var f=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col items-center h-full justify-center"},[t("button",{class:e.btnClass,on:{click:function(n){return e.newMatch()}}},[e._v("New Match")]),t("button",{class:e.btnClass},[e._v("Edit Match")]),t("button",{class:e.btnClass},[e._v("View Match")])])},p=[],b={name:"Home",components:{},computed:{btnClass:function(){return["w-48","bg-orange-400","font-bold","border-2","border-orange-600","m-3","p-5"]}},methods:{newMatch:function(){this.$router.push({name:"NewMatch"})}}},h=b,m=Object(c["a"])(h,d,p,!1,null,null,null),v=m.exports;r["a"].use(f["a"]);var g=[{path:"/",name:"Home",component:v},{path:"/new-match",name:"NewMatch",component:function(){return t.e("chunk-07ba15ca").then(t.bind(null,"449d"))}},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],w=new f["a"]({mode:"history",base:"/",routes:g}),y=w,P=(t("b64b"),t("2f62"));r["a"].use(P["a"]);var j=new P["a"].Store({state:{countries:{PAK:["PAK-P1","PAK-P3"],SL:["SL-P1","SL-P3"],SA:["SA-P1","SA-P3"],WI:["WI-P1","WI-P3"],AUS:["AUS-P1","AUS-P3"],ENG:["ENG-P1","ENG-P3"]},teams:["Team1","Team2"]},getters:{getCountries:function(e){return Object.keys(e.countries)},getTeams:function(e){return Object.keys(e.teams)}},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:y,store:j,render:function(e){return e(s)}}).$mount("#app")},"5c64":function(e,n,t){"use strict";var r=t("d32a"),o=t.n(r);o.a},"75f8":function(e,n,t){},d32a:function(e,n,t){},df3d:function(e,n,t){"use strict";var r=t("75f8"),o=t.n(r);o.a}});
//# sourceMappingURL=app.82028d50.js.map