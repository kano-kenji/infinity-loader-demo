(this["webpackJsonpinfinity-loader-demo"]=this["webpackJsonpinfinity-loader-demo"]||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),i=(n(22),n(23),n(5)),s=n(6),l=n(4),u=n.n(l),d=u.a.create({baseURL:"https://api.thecatapi.com/v1/",headers:{"x-api-key":"75bd26f4-cf9e-4643-a531-79c8a8e854de"},timeout:2e3,responseType:"json"});n(41);var m=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!0),l=Object(s.a)(r,2),m=l[0],f=l[1],h=Object(a.useState)(!1),p=Object(s.a)(h,2),b=p[0],v=p[1];function E(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&v(!0)}Object(a.useEffect)((function(){return window.addEventListener("scroll",E),function(){return window.removeEventListener("scroll",E)}}),[]),Object(a.useEffect)((function(){b&&g()}),[b]);var g=function(){v(!0),d.get("images/search").then((function(e){o([].concat(Object(i.a)(n),[e.data[0]])),v(!1)})).catch((function(e){console.log(e)}))};if(m){for(var w=[],j=0;j<3;j++)w=[].concat(Object(i.a)(w),[d.get("images/search")]);u.a.all(w).then((function(e){e.map((function(e){o([].concat(Object(i.a)(n),[e.data[0]]))})),f(!1)})).catch((function(e){console.log(e)}))}return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{alt:e.id,className:"card-img-top",src:e.url})),b&&c.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8e5eb2c8.chunk.js.map