!function(u){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],c=0,i=[];c<r.length;c++)n=r[c],f[n]&&i.push(f[n][0]),f[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(d&&d(e);i.length;)i.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==f[o]&&(r=!1)}r&&(l.splice(t--,1),e=m(m.s=n[0]))}return e}var n={},p={4:0},f={4:0},l=[];function m(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(l){var e=[];p[l]?e.push(p[l]):0!==p[l]&&{6:1}[l]&&e.push(p[l]=new Promise(function(e,r){for(var t="a52ebddbfdc296fc7165.css",a=m.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=(u=n[o]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===t||c===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var u;if((c=(u=i[o]).getAttribute("data-href"))===t||c===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");n.request=t,delete p[l],s.parentNode.removeChild(s),r(n)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){p[l]=0}));var t,n=f[l];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,t){n=f[l]=[e,t]});e.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,m.nc&&o.setAttribute("nonce",m.nc),o.src=m.p+"./scripts/"+({}[t=l]||t)+".js",a=function(e){o.onerror=o.onload=null,clearTimeout(c);var t=f[l];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,t[1](a)}f[l]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:o})},12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(e)},m.m=u,m.c=n,m.d=function(e,t,n){m.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(t,e){if(1&e&&(t=m(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)m.d(n,r,function(e){return t[e]}.bind(null,r));return n},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,"a",t),t},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.p="/",m.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;l.push([167,5]),s()}({114:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return r}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return m});var o=n(14);n(148);function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function i(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var s=function(){return function(e){e(Object(o.b)(0)),e({type:"LOGOUT"})}},r=function(e,t){return function(r,a){return fetch("https://wiakc.herokuapp.com/auth/privilege",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({privilege:e,token:t})}).then(function(){var t=i(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&201!==t.status?r(Object(o.a)(n)):a().user.user&&r(c({type:"UPDATE_USER"},n));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return r(Object(o.a)(e))})}},l=function(t){return function(r,e){return fetch("https://wiakc.herokuapp.com/auth/update",{method:"PUT",headers:{Authorization:e().user.token,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var t=i(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&201!==t.status?r(Object(o.a)(n)):(r(c({type:"UPDATE_USER"},n)),r(Object(o.b)(0)));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return r(Object(o.a)(e))})}},p=function(){var r=i(regeneratorRuntime.mark(function e(t,n,a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(){var t=i(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&201!==t.status?a(Object(o.a)(n)):(r=new Date(Date.now()+36e5),a(c({type:"LOGIN",expiryDate:r.toISOString()},n)),a(Object(o.b)(0)),setTimeout(function(){a(s),a(Object(o.b)(3))},36e5));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return a(Object(o.a)(e))}));case 1:case"end":return e.stop()}},e,this)}));return function(e,t,n){return r.apply(this,arguments)}}(),f=function(t){return function(e){return p("https://wiakc.herokuapp.com/auth/signup",t,e)}},m=function(t){return function(e){return p("https://wiakc.herokuapp.com/auth/login",t,e)}}},115:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=function(e,t){return e.user&&e.user.privilege>=t},a=function(e){switch(e){case 0:return"New Member";case 1:return"Active Member";case 2:return"Board Member";case 3:return"Administrator"}},o=function(e){return e.user&&e.user.name.split(" ")[0]}},14:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(e){return{type:"SET_ERRORS",errors:e}},a=function(e){return{type:"SET_MODAL",errors:null,modal:e}}},167:function(e,t,n){n(168),n(148),n(368),e.exports=n(367)},363:function(e,t){},367:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(161),c=n.n(r),i=n(24),s=n(34),l=n(113);function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){p(t,e,n[e])})}return t}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function m(){return d.apply(this,arguments)}function d(){var i;return i=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/assets/data/index.json").then(function(e){return e.json()});case 2:return r=e.sent,e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length?arguments[1]:void 0,n=u({},e,{errors:t.errors});switch(t.type){case"LOGOUT":n.errors=null;break;case"SET_MODAL":n.modal=t.modal}return n});case 4:case"end":return e.stop()}},e,this)}),(d=function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){f(r,t,n,a,o,"next",e)}function o(e){f(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function h(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function v(){return b.apply(this,arguments)}function b(){var i;return i=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/assets/data/home.json").then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:t});case 4:case"end":return e.stop()}},e,this)}),(b=function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){h(r,t,n,a,o,"next",e)}function o(e){h(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function O(){return w.apply(this,arguments)}function w(){var i;return i=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={events:[]},e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length?arguments[1]:void 0,n=g({},e);switch(t.type){case"LOGOUT":n.event=null;break;case"GET_EVENTS":n.events=t.events;break;case"CREATE_EVENT":n.events=n.events.concat(t.event);break;case"UPDATE_EVENT":n.events=n.events.map(function(e){return e._id===t.event._id?t.event:e});break;case"DELETE_EVENT":n.events=n.events.filter(function(e){return e._id!==t.eventId});break;case"SET_EVENT":n.event=t.event}return n});case 2:case"end":return e.stop()}},e,this)}),(w=function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){E(r,t,n,a,o,"next",e)}function o(e){E(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){k(t,e,n[e])})}return t}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function P(){return j.apply(this,arguments)}function j(){var i;return i=regeneratorRuntime.mark(function e(){var t,n,r,a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),n=new Date(localStorage.getItem("expiryDate")),r=localStorage.getItem("userId"),a=localStorage.getItem("user"),o=n>new Date,c={token:o&&t,user:o&&a&&JSON.parse(a),userId:o&&r||"",remainingMilliseconds:o&&n&&n.getTime()-Date.now()},e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0,n=_({},e);switch(t.type){case"UPDATE_USER":localStorage.setItem("user",JSON.stringify(t.user)),n.user=t.user;break;case"LOGIN":localStorage.setItem("token",t.token),localStorage.setItem("expiryDate",t.expiryDate),localStorage.setItem("userId",t.userId),localStorage.setItem("user",JSON.stringify(t.user)),n.token=t.token,n.userId=t.userId,n.user=t.user;break;case"LOGOUT":localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("user"),n.token=null,n.userId=null,n.user=null}return n});case 7:case"end":return e.stop()}},e,this)}),(j=function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){T(r,t,n,a,o,"next",e)}function o(e){T(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){N(t,e,n[e])})}return t}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function R(){return D.apply(this,arguments)}function D(){var i;return i=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={page:0,posts:[]},e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length?arguments[1]:void 0,n=I({},e);switch(t.type){case"LOGOUT":n.post=null,n.editing=null;break;case"SET_POSTS_PAGE":n.page=t.page;break;case"SET_EDITING":n.editing=t.editing;break;case"GET_POSTS":n.posts=t.posts,n.totalItems=t.totalItems,n.itemsPerPage=t.itemsPerPage;break;case"CREATE_POST":n.posts=[t.post].concat(S(n.posts.slice(0,7)));break;case"UPDATE_POST":n.posts=n.posts.map(function(e){return e._id===t.post._id?t.post:e}),n.post=n.post&&n.post._id===t.post._id&&t.post||n.post;break;case"DELETE_POST":n.posts=n.posts.filter(function(e){return e._id!==t.postId}),n.post=n.post&&n.post._id===t.postId?null:n.post;break;case"SET_POST":n.post=t.post;break;case"CREATE_COMMENT":n.post=n.post._id===t.comment.postId&&I({},n.post,{comments:[].concat(S(n.post.comments),[t.comment])})||n.post;break;case"UPDATE_COMMENT":n.post=n.post._id===t.comment.postId&&I({},n.post,{comments:n.post.comments.map(function(e){return e._id===t.comment._id?t.comment:e})})||n.post;break;case"DELETE_COMMENT":n.post=n.post._id===t.postId&&I({},n.post,{comments:n.post.comments.filter(function(e){return e._id!==t.commentId})})||n.post}return n});case 2:case"end":return e.stop()}},e,this)}),(D=function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){x(r,t,n,a,o,"next",e)}function o(e){x(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}var A=n(114),M=n(164),C=n.n(M)()("https://wiakc.herokuapp.com"),L=function(t){C.on("events",function(e){switch(e.action){case"create":t.dispatch({type:"CREATE_EVENT",event:e.event});break;case"update":t.dispatch({type:"UPDATE_EVENT",event:e.event});break;case"delete":t.dispatch({type:"DELETE_EVENT",eventId:e.eventId})}}),C.on("posts",function(e){switch(e.action){case"create":t.dispatch({type:"CREATE_POST",post:e.post});break;case"update":t.dispatch({type:"UPDATE_POST",post:e.post});break;case"delete":t.dispatch({type:"DELETE_POST",postId:e.postId})}}),C.on("comments",function(e){switch(e.action){case"create":t.dispatch({type:"CREATE_COMMENT",comment:e.comment});break;case"update":t.dispatch({type:"UPDATE_COMMENT",comment:e.comment});break;case"delete":t.dispatch({type:"DELETE_COMMENT",commentId:e.commentId,postId:e.postId})}});var e=t.getState().user.remainingMilliseconds;e&&setTimeout(function(){t.dispatch(A.c)},e)};function U(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,V=function(){var i,t=(i=regeneratorRuntime.mark(function e(t){var n,r,a,o,c,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return n=e.sent,e.next=5,v();case 5:return r=e.sent,e.next=8,P();case 8:return a=e.sent,e.next=11,O();case 11:return o=e.sent,e.next=14,R();case 14:return c=e.sent,i=Object(s.c)({common:n,user:a,events:o,home:r,feed:c}),u=t&&"undefined"==typeof window?Object(s.e)(i,G(Object(s.a)(l.a))):window.storen?window.store:window.store=Object(s.e)(i,G(Object(s.a)(l.a))),L(u),e.abrupt("return",u);case 19:case"end":return e.stop()}},e,this)}),function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function a(e){U(r,t,n,a,o,"next",e)}function o(e){U(r,t,n,a,o,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}(),J=n(2),q=n.n(J),B=n(15),F=n.n(B),X=function(){return o.a.createElement("div",null)},z=n(370),H=n(166),K=F()({loader:function(){return n.e(3).then(n.bind(null,488))},loading:X}),Q=F()({loader:function(){return n.e(8).then(n.bind(null,490))},loading:X}),W=F()({loader:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,491))},loading:X}),Y=F()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,489))},loading:X}),Z=o.a.createElement(z.a,null,o.a.createElement(H.a,{path:"/feed/:postId",component:Y}),o.a.createElement(H.a,{exact:!0,path:"/feed",component:W}),o.a.createElement(H.a,{path:"/account",component:Q}),o.a.createElement(H.a,{component:K})),$=F()({loader:function(){return n.e(3).then(n.bind(null,488))},loading:X}),ee=F()({loader:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,491))},loading:X}),te=F()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,489))},loading:X}),ne=o.a.createElement(z.a,null,o.a.createElement(H.a,{path:"/feed/:postId",component:te}),o.a.createElement(H.a,{path:"/feed",component:ee}),o.a.createElement(H.a,{component:$})),re=n(59),ae=n.n(re),oe=n(371),ce=n(14),ie=n(115),ue=function(e){var t=e.username,n=e.data,r=e.setModal;return o.a.createElement("nav",{className:"navigation section--down"},o.a.createElement(ae.a,{className:"navigation__logo",image:n.logo}),o.a.createElement("span",{className:"navigation__title"},n.shortName),o.a.createElement("span",{className:"navigation__links"},n.links.map(function(e,t){return o.a.createElement(oe.a,{key:t,className:"navigation__links--link pointer",to:e.href},e.display)}),t&&o.a.createElement(a.Fragment,null,o.a.createElement(oe.a,{className:"navigation__links--link navigation__links--username pointer",to:"/account"},t))||o.a.createElement(a.Fragment,null,o.a.createElement("a",{className:"navigation__links--link pointer",onClick:r(3)},"Login"),o.a.createElement("a",{className:"navigation__links--link navigation__links--signup pointer",onClick:r(4)},"Signup"))))};ue.propTypes={username:q.a.oneOfType([q.a.string,q.a.bool]),data:q.a.object.isRequired,setModal:q.a.func.isRequired};var se=Object(i.b)(function(e){return{username:Object(ie.a)(e.user),data:e.common.marginals}},function(t){return{setModal:function(e){return function(){return t(Object(ce.b)(e))}}}})(ue),le=F()({loader:function(){return n.e(12).then(n.bind(null,483))},loading:X}),pe=F()({loader:function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,484))},loading:X}),fe=F()({loader:function(){return n.e(10).then(n.bind(null,485))},loading:X}),me=F()({loader:function(){return n.e(9).then(n.bind(null,486))},loading:X}),de=F()({loader:function(){return n.e(11).then(n.bind(null,487))},loading:X}),he=function(e){var t,n=e.modal,r=e.setModalClose;switch(n){case 1:t=o.a.createElement(le,null);break;case 2:t=o.a.createElement(pe,null);break;case 3:t=o.a.createElement(me,null);break;case 4:t=o.a.createElement(fe,null);break;case 5:t=o.a.createElement(de,null);break;default:t=null}return t?o.a.createElement("div",{className:"modal",onClick:r},o.a.createElement("div",{className:"modal__content"},t)):null};he.propTypes={modal:q.a.number,setModalClose:q.a.func.isRequired};var ve=Object(i.b)(function(e){return{modal:e.common.modal}},function(t){return{setModalClose:function(e){e.target===e.currentTarget&&(e.preventDefault(),t(Object(ce.b)(0)))}}})(he),be=function(e){var t=e.data;return o.a.createElement("footer",{className:"section footer",id:"footer"},o.a.createElement("div",{className:"footer__logobox"},o.a.createElement(ae.a,{className:"footer__logobox--logo",image:t.logo}),o.a.createElement("h2",{className:"section__title"},t.title)),o.a.createElement("div",{className:"footer__data"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://twitter.com/".concat(t.twitter)},"@",t.twitter)),o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:"+t.email},t.email)),o.a.createElement("p",null,o.a.createElement("a",{href:"tel:"+t.phone.replace("-","")},t.phone)),o.a.createElement("p",null,o.a.createElement("a",{href:t.geo,target:"_blank",rel:"noopener noreferrer"},t.address))))};be.propTypes={data:q.a.object.isRequired};var ge=Object(i.b)(function(e){return{data:e.common.marginals}})(be),ye=n(369),Ee=function(e){var t=e.isAuth;return o.a.createElement(ye.a,null,o.a.createElement("div",null,o.a.createElement(ve,null),o.a.createElement(se,null),o.a.createElement("div",{className:"main-layout"},o.a.createElement("main",{className:"main-layout__body"},t&&Z||ne),o.a.createElement(ge,null))))};Ee.propTypes={isAuth:q.a.bool};var Oe=Object(i.b)(function(e){return{isAuth:!!e.user.user}})(Ee);V().then(function(e){c.a.render(o.a.createElement(function(){return o.a.createElement(i.a,{store:e},o.a.createElement(Oe,null))},null),document.getElementById("content"))})}});
//# sourceMappingURL=index.js.map