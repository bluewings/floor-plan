(this["webpackJsonpfloor-plan"]=this["webpackJsonpfloor-plan"]||[]).push([[0],{101:function(e,t,n){e.exports={root:"Item_root__8ZGj6"}},120:function(e,t,n){e.exports={root:"Home_root__3GMAO"}},127:function(e,t,n){e.exports={root:"FloorPlan_root__3Mxaj"}},128:function(e,t,n){e.exports=n.p+"static/media/blueprint.173beae2.png"},132:function(e,t,n){e.exports={root:"Workspace_root__2tRmB"}},133:function(e,t,n){},138:function(e,t,n){e.exports=n(216)},145:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),o=n.n(a),i=n(5),l=n.n(i),u=(n(143),n(144),n(145),n(43)),s=n(38),f=n(119),m=n(21),b=n(51),O=n(70),p=n.n(O),d=n(10),j=n(224),v=n(221),y=n(15),g=(Object(j.a)("app/SET_DATA",(function(e){return{data:e}})),Object(j.a)("app/SET_RANGE",(function(e,t){return{from:e,to:t}})),Object(v.a)((r={},Object(d.a)(r,"app/SET_DATA",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.data;e.data=t}))})),Object(d.a)(r,"app/SET_RANGE",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n,r=t.from,c=t.to;e.range={from:r,to:c}}))})),r),{data:[],collections:[],collectionDict:{},keywords:[],range:{from:"",to:""}})),E=n(37),h=n(219);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P,D="workspace/ADD",S=Object(j.a)(D,(function(e){return e})),C=Object(j.a)("workspace/UPDATE",(function(e){return e})),_=Object(j.a)("workspace/REMOVE",(function(e){return{id:e}})),M=Object(v.a)((c={},Object(d.a)(c,D,(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=Math.random().toString(36).substr(-6);e.workspaces=[].concat(Object(E.a)(e.workspaces),[k({name:Object(h.a)(new Date,"yyyy.MM.dd. HH:mm")},n,{id:t,scale:50,createTime:(new Date).toISOString()})]);e.focus=t}))})),Object(d.a)(c,"workspace/UPDATE",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.id,r=e.workspaces.findIndex((function(e){return e.id===t}));-1!==r&&(e.workspaces[r]=k({},e.workspaces[r],{},n,{updateTime:(new Date).toISOString()}))}))})),Object(d.a)(c,"workspace/REMOVE",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.id;e.workspaces=e.workspaces.filter((function(e){return e.id!==t})),e.focus===t&&(e.focus=null)}))})),c),{workspaces:[],focus:null,collections:[],collectionDict:{},keywords:[],range:{from:"",to:""}});function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(j.a)("item/ADD",(function(e){return e})),Object(j.a)("item/UPDATE",(function(e){return e})),Object(j.a)("item/FOCUS",(function(e){return{id:e}})),Object(j.a)("item/REMOVE",(function(e){return{id:e}}));var T=Object(v.a)((P={},Object(d.a)(P,"item/ADD",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=Math.random().toString(36).substr(-6);e.items=[].concat(Object(E.a)(e.items),[N({top:~~(500*Math.random()),left:~~(500*Math.random()),width:200,height:100,rotate:0},n,{id:t})]);e.focus=t}))})),Object(d.a)(P,"item/FOCUS",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.id;e.focus===t?e.focus=null:e.items.find((function(e){return e.id===t}))&&(e.focus=t)}))})),Object(d.a)(P,"item/UPDATE",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.id,r=e.items.findIndex((function(e){return e.id===t}));-1!==r&&(e.items[r]=N({},e.items[r],{},n))}))})),Object(d.a)(P,"item/REMOVE",(function(e,t){var n=t.payload;return Object(y.a)(e,(function(e){var t=n.id;e.items=e.items.filter((function(e){return e.id!==t})),e.focus===t&&(e.focus=null)}))})),P),{items:[],focus:null,scale:50,collections:[],collectionDict:{},keywords:[],range:{from:"",to:""}}),R=Object(m.b)({app:Object(b.a)({key:"app",storage:p.a},g),item:Object(b.a)({key:"item",storage:p.a},T),workspace:Object(b.a)({key:"workspace",storage:p.a},M)});console.log(R);var x=R;var U=n(39),V=n(218),X=n(103),F=n(2),I=n.n(F),Y=n(120),G=n.n(Y);var H=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return Object(V.a)(e,["workspace","workspaces"])})),r=Object(a.useCallback)((function(){t(S({}))}),[t]);return a.createElement("div",{className:I()("container",G.a.root)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement("div",{style:{float:"right"}},a.createElement(X.a,{onClick:r},"New Page")),a.createElement("h3",null,"Floor Plan"))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement("hr",null),a.createElement("ul",null,n.map((function(e,t){return a.createElement("li",{key:t},a.createElement(u.b,{to:"/workspaces/".concat(e.id)},e.name||e.id))}))))))},J=n(222),B=n(69),L=n(220),W=n(124);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={items:[],scale:50,focus:null,collections:[],collectionDict:{},keywords:[],range:{from:"",to:""}},q=Object(j.a)("item/ADD",(function(e){return e})),K=Object(j.a)("item/UPDATE",(function(e){return e})),Q=Object(j.a)("item/FOCUS",(function(e){return{id:e}})),ee=Object(j.a)("item/REMOVE",(function(e){return{id:e}})),te=Object(j.a)("item/SET_SCALE",(function(e){return{scale:e}})),ne=function(e,t){var n=t.type,r=t.payload;switch(n){case"item/ADD":var c=Math.random().toString(36).substr(-6);return e.items=[].concat(Object(E.a)(e.items),[Z({top:~~(500*Math.random()),left:~~(500*Math.random()),width:100,height:100,rotate:0},r,{id:c})]),void(e.focus=c);case"item/FOCUS":var a=r.id;return void(e.focus===a?e.focus=null:e.items.find((function(e){return e.id===a}))&&(e.focus=a));case"item/UPDATE":var o=r.id,i=e.items.findIndex((function(e){return e.id===o}));return void(-1!==i&&(e.items[i]=Z({},e.items[i],{},r)));case"item/REMOVE":var l=r.id;return e.items=e.items.filter((function(e){return e.id!==l})),void(e.focus===l&&(e.focus=null));case"item/SET_SCALE":var u=r.scale;return void(e.scale=u)}};var re=function(e){return Object(W.a)(ne,e||$)},ce=n(134),ae=n(101),oe=n.n(ae);var ie=function(e){var t=e.name,n=e.id,r=e.scale,c=e.top,o=e.left,i=e.width,l=e.height,u=e.rotate,s=e.state,f=e.dispatch,m=Object(a.useMemo)((function(){return Object(V.a)(s,["focus"])}),[s]),b=Object(a.useRef)(),O=Object(a.useCallback)((function(){b.current||f(Q(n))}),[f,n]);console.log("test");var p=Object(a.useMemo)((function(){return{top:c*r,left:o*r,width:i*r,height:l*r,fontSize:"".concat(2.5*r,"rem"),transform:"rotate(".concat(u,"deg)")}}),[c,o,i,l,u,r]),d=Object(a.useRef)(),j=Object(a.useState)(),v=Object(B.a)(j,2),y=v[0],g=v[1],E=Object(a.useRef)(),h=Object(a.useCallback)((function(e){var t=e.clientX,n=e.clientY;E.current={clientX:t,clientY:n}}),[]),w=Object(a.useCallback)((function(e){console.log(e),console.log(E.current);var t=e.clientX,a=e.clientY,i=(t-E.current.clientX)/r,l=(a-E.current.clientY)/r;b.current=!0,setTimeout((function(){b.current=!1,f(K({id:n,top:c+l,left:o+i}))}),0)}),[n,c,o,r]),k=Object(a.useCallback)((function(e){var t=e.clientX,n=e.clientY;E.current={clientX:t,clientY:n}}),[]),P=Object(a.useCallback)((function(e){var t=e.target.style.transform.match(/rotate\(([\-0-9]+)deg\)/);t&&t[1]&&setTimeout((function(){f(K({id:n,rotate:u+~~t[1]}))}),0)}),[n,u]),D="".concat(n,"_").concat(c,"_").concat(o,"_").concat(i,"_").concat(l,"_").concat(u,"_").concat(r);return Object(a.useEffect)((function(){g(d.current)}),[D]),a.createElement(a.Fragment,{key:D},a.createElement("div",{ref:d,className:I()(oe.a.root,m===n&&oe.a.focus),onClick:O,style:p},a.createElement("span",null," ",t||n)),y&&m===n&&a.createElement(ce.a,{target:y,container:null,origin:!1,draggable:!0,onDrag:function(e){var t=e.target,n=(e.beforeDelta,e.beforeDist,e.left,e.top,e.right,e.bottom,e.delta,e.dist,e.transform);e.clientX,e.clientY;t.style.transform=n},onDragStart:h,onDragEnd:w,rotatable:!0,throttleRotate:5,onRotateStart:k,onRotate:function(e){var t=e.target,n=(e.delta,e.dist),r=e.transform;e.clientX,e.clientY;console.log("onRotate",n),t.style.transform=r},onRotateEnd:P}))},le=n(223);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var se=function(e){var t=e.state,n=e.dispatch,r=Object(a.useMemo)((function(){var e=Object(V.a)(t,["items"],[]),n=Object(V.a)(t,["focus"]);return e.find((function(e){return e.id===n}))}),[t]),c=Object(a.useCallback)((function(){n(q({}))}),[n]),o=Object(a.useCallback)((function(){n(ee(r.id))}),[n,r]),i=Object(a.useCallback)((function(){n(q(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{top:r.top+20,left:r.left+20})))}),[n,r]),l=Object(a.useCallback)((function(e){var t=e.target.name,c="name"===t?e.target.value:~~e.target.value;n(K(Object(d.a)({id:r.id},t,c)))}),[r]);return a.createElement(le.a,{placement:"right",closable:!1,visible:!0,mask:!1},a.createElement(X.a,{onClick:c},"add"),a.createElement("hr",null),r&&a.createElement("div",{key:r.id},a.createElement(J.a,{name:"name",defaultValue:r.name,placeholder:"name",onChange:l}),a.createElement(J.a,{name:"width",type:"number",defaultValue:r.width,placeholder:"width",onChange:l}),a.createElement(J.a,{name:"height",type:"number",defaultValue:r.height,placeholder:"height",onChange:l}),a.createElement("hr",null),a.createElement(X.a,{onClick:o},"\uc0ad\uc81c"),a.createElement(X.a,{onClick:i},"\ubcf5\uc0ac")))},fe=n(127),me=n.n(fe),be=n(128),Oe=n.n(be);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=function(e){var t=re(e.data),n=Object(B.a)(t,2),r=n[0],c=n[1],o=(Object(a.useCallback)((function(){c(q({}))}),[c]),r.items);Object(a.useEffect)((function(){"function"===typeof e.onChange&&e.onChange(r)}),[r]);var i=Object(a.useCallback)((function(e){c(te(e))}),[c]);return a.createElement("div",null,a.createElement("div",{style:{width:200}},a.createElement(L.a,{min:10,max:100,value:r.scale,onChange:i})),a.createElement("div",{className:me.a.root},a.createElement("div",null,a.createElement("img",{src:Oe.a,style:{transform:"scale(".concat(r.scale/100,")"),transformOrigin:"0 0"}}),o.map((function(e,t){return a.createElement(ie,Object.assign({key:t},e,{state:de({},r),scale:r.scale/100,dispatch:c}))}))),a.createElement(se,{state:de({},r),dispatch:c})))},ve=n(132),ye=n.n(ve);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ee=function(e){var t=e.match,n=Object(V.a)(t,["params","id"]),r=Object(s.c)((function(e){return Object(V.a)(e,["workspace","workspaces"],[]).find((function(e){return e.id===n}))})),c=Object(s.b)(),o=Object(a.useCallback)((function(){c(S(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},JSON.parse(JSON.stringify(r)),{id:void 0,name:"".concat(r.name," (\ubcf5\uc0ac)")})))}),[c,r]),i=Object(a.useCallback)((function(){c(_(n))}),[c,n]),l=Object(a.useCallback)((function(e){c(C({id:n,data:e}))}),[c,n]),f=Object(a.useCallback)((function(e){c(C({id:n,name:e.target.value}))}),[c,n]);return a.createElement("div",{className:I()("container-fluid",ye.a.root)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement(u.b,{to:"/home"},"Home"),r&&a.createElement(a.Fragment,null,a.createElement(X.a,{onClick:o},"\ubcf5\uc0ac"),a.createElement(X.a,{onClick:i},"\uc0ad\uc81c"),a.createElement(J.a,{type:"text",defaultValue:r.name,onChange:f})))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement("hr",null),r&&a.createElement(je,{data:r.data,onChange:l}))))},he=n(133),we=n.n(he);var ke=function(e){return a.createElement("div",{className:we.a.root},e.children)},Pe=[{path:"/home",exact:!0,component:H},{path:"/workspaces/:id",component:Ee}],De="/home",Se=[].concat(Object(E.a)(Pe.map((function(e,t){var n=e.path,r=e.exact,c=e.component;return a.createElement(U.b,{key:"route-".concat(t),path:n,exact:!!r,render:function(e){return a.createElement(c,e)}})}))),[a.createElement(U.a,{key:"redirect-to-default",to:De})]),Ce=function(){return a.createElement(ke,null,a.createElement(U.d,null,Se))},_e=function(e){var t;try{t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.c}catch(c){t=m.c}var n=t(),r=Object(m.d)(x,e,n);return{store:r,persistor:Object(b.b)(r)}}(),Me=_e.store,Ae=_e.persistor;var Ne=function(){return a.createElement(s.a,{store:Me},a.createElement(f.a,{persistor:Ae,loading:null},a.createElement(u.a,null,a.createElement(Ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[138,1,2]]]);
//# sourceMappingURL=main.387c100e.chunk.js.map