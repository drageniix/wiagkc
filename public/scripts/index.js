!function(c){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],u=0,i=[];u<r.length;u++)n=r[u],m[n]&&i.push(m[n][0]),m[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t]);for(d&&d(e);i.length;)i.shift()();return s.push.apply(s,o||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==m[o]&&(r=!1)}r&&(s.splice(t--,1),e=p(p.s=n[0]))}return e}var n={},f={1:0},m={1:0},s=[];function p(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(s){var e=[];f[s]?e.push(f[s]):0!==f[s]&&{3:1}[s]&&e.push(f[s]=new Promise(function(e,r){for(var t="38601207970fa07608e1.css",a=p.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var u=(c=n[o]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===t||u===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var c;if((u=(c=i[o]).getAttribute("data-href"))===t||u===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");n.request=t,delete f[s],l.parentNode.removeChild(l),r(n)},l.href=a,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){f[s]=0}));var t,n=m[s];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,t){n=m[s]=[e,t]});e.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.src=p.p+"./scripts/"+({}[t=s]||t)+".js",a=function(e){o.onerror=o.onload=null,clearTimeout(u);var t=m[s];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+s+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,t[1](a)}m[s]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:o})},12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(e)},p.m=c,p.c=n,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)p.d(n,r,function(e){return t[e]}.bind(null,r));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;s.push([140,2]),l()}({101:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return f});var o=n(26);function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(i){return function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){c(r,t,n,a,o,"next",e)}function o(e){c(r,t,n,a,o,"throw",e)}a(void 0)})}}var l=function(){return function(e){e(Object(o.b)(0)),e({type:"LOGOUT"})}},r=function(){var r=i(regeneratorRuntime.mark(function e(t,n,a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(){var t=i(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&201!==t.status?a(Object(o.a)(n)):(r=new Date(Date.now()+36e5),a(u({type:"LOGIN",expiryDate:r.toISOString()},n)),a(Object(o.b)(0)),setTimeout(function(){a(l),a(Object(o.b)(3))},36e5));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return a(Object(o.a)(e))}));case 1:case"end":return e.stop()}},e,this)}));return function(e,t,n){return r.apply(this,arguments)}}(),s=function(t){return function(e){return r("https://wiakc.herokuapp.com/auth/signup",t,e)}},f=function(t){return function(e){return r("https://wiakc.herokuapp.com/auth/login",t,e)}}},133:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e,t){return e.user&&e.user.privilege>=t}},140:function(e,t,n){n(141),n(316),e.exports=n(315)},26:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(e){return{type:"SET_ERRORS",errors:e}},a=function(e){return{type:"SET_MODAL",errors:null,modal:e}}},315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(134),u=n.n(o),i=n(33),c=n(32),l=n(100);function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function p(){return d.apply(this,arguments)}function d(){var i;return i=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/assets/data/index.json").then(function(e){return e.json()});case 2:return r=e.sent,e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length?arguments[1]:void 0,n=s({},e,{errors:t.errors});switch(t.type){case"SET_MODAL":n.modal=t.modal}return n});case 4:case"end":return e.stop()}},e,this)}),(d=function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){m(r,t,n,a,o,"next",e)}function o(e){m(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function v(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function h(){return g.apply(this,arguments)}function g(){var i;return i=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/assets/data/home.json").then(function(e){return e.json()});case 2:return t=e.sent,e.abrupt("return",function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:t});case 4:case"end":return e.stop()}},e,this)}),(g=function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){v(r,t,n,a,o,"next",e)}function o(e){v(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function w(){return O.apply(this,arguments)}function O(){var i;return i=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={events:[]},e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=1<arguments.length?arguments[1]:void 0,n=b({},e);switch(t.type){case"GET_EVENTS":n.events=t.events;break;case"CREATE_EVENT":n.events=n.events.concat(t.event);break;case"UPDATE_EVENT":n.events=n.events.map(function(e){return e._id===t.event._id?t.event:e});break;case"DELETE_EVENT":n.events=n.events.filter(function(e){return e._id!==t.event});break;case"SET_EVENT":n.event=t.event}return n});case 2:case"end":return e.stop()}},e,this)}),(O=function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){E(r,t,n,a,o,"next",e)}function o(e){E(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){j(t,e,n[e])})}return t}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function S(){return P.apply(this,arguments)}function P(){var i;return i=regeneratorRuntime.mark(function e(){var t,n,r,a,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),n=new Date(localStorage.getItem("expiryDate")),r=localStorage.getItem("userId"),a=localStorage.getItem("user"),o=n>new Date,u={token:o&&t,user:o&&a&&JSON.parse(a),userId:o&&r||"",remainingMilliseconds:o&&n&&n.getTime()-Date.now()},e.abrupt("return",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u,t=1<arguments.length?arguments[1]:void 0,n=k({},e);switch(t.type){case"UPDATE_USER":localStorage.setItem("user",JSON.stringify(t.user)),n.user=t.user;break;case"LOGIN":localStorage.setItem("token",t.token),localStorage.setItem("expiryDate",t.expiryDate),localStorage.setItem("userId",t.userId),localStorage.setItem("user",JSON.stringify(t.user)),n.token=t.token,n.userId=t.userId,n.user=t.user;break;case"LOGOUT":localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("user"),n.token=null,n.userId=null,n.user=null}return n});case 7:case"end":return e.stop()}},e,this)}),(P=function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){_(r,t,n,a,o,"next",e)}function o(e){_(r,t,n,a,o,"throw",e)}a(void 0)})}).apply(this,arguments)}var x=n(101),N=function(e){var t=e.getState().user.remainingMilliseconds;t&&setTimeout(function(){e.dispatch(x.b)},t)};function T(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,R=function(){var i,t=(i=regeneratorRuntime.mark(function e(t){var n,r,a,o,u,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return n=e.sent,e.next=5,h();case 5:return r=e.sent,e.next=8,S();case 8:return a=e.sent,e.next=11,w();case 11:return o=e.sent,u=Object(c.c)({common:n,user:a,events:o,home:r}),i=t&&"undefined"==typeof window?Object(c.e)(u,I(Object(c.a)(l.a))):window.storen?window.store:window.store=Object(c.e)(u,I(Object(c.a)(l.a))),N(i),e.abrupt("return",i);case 16:case"end":return e.stop()}},e,this)}),function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function a(e){T(r,t,n,a,o,"next",e)}function o(e){T(r,t,n,a,o,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}(),D=n(36),M=n.n(D),C=function(){return a.a.createElement("div",null)},A=n(56),L=n.n(A),q=n(2),J=n.n(q),U=n(318),V=n(26),G=n(133),B=function(e){var t=e.isAuth,n=e.data,r=e.setModal;return a.a.createElement("nav",{className:"navigation section--down"},a.a.createElement(L.a,{className:"navigation__logo",image:n.logo}),a.a.createElement("span",{className:"navigation__title"},n.shortName),a.a.createElement("span",{className:"navigation__links"},n.links.map(function(e,t){return a.a.createElement(U.a,{key:t,className:"navigation__links--link",to:e.href},e.display)}),t&&a.a.createElement("a",{className:"navigation__links--link pointer",onClick:r(5)},"Account")||a.a.createElement("span",null,a.a.createElement("a",{className:"navigation__links--link pointer",onClick:r(3)},"Login"),a.a.createElement("a",{className:"navigation__links--link pointer",onClick:r(4)},"Signup"))))};B.propTypes={isAuth:J.a.bool,data:J.a.object.isRequired,setModal:J.a.func.isRequired};var X=Object(i.b)(function(e){return{isAuth:Object(G.a)(e.user,1),data:e.common.marginals}},function(t){return{setModal:function(e){return function(){return t(Object(V.b)(e))}}}})(B),z=M()({loader:function(){return n.e(9).then(n.bind(null,375))},loading:C}),F=M()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(4)]).then(n.bind(null,376))},loading:C}),H=M()({loader:function(){return n.e(8).then(n.bind(null,380))},loading:C}),K=M()({loader:function(){return n.e(7).then(n.bind(null,377))},loading:C}),Q=M()({loader:function(){return n.e(6).then(n.bind(null,378))},loading:C}),W=function(e){var t,n=e.modal,r=e.setModalClose;switch(n){case 1:t=a.a.createElement(z,null);break;case 2:t=a.a.createElement(F,null);break;case 3:t=a.a.createElement(Q,null);break;case 4:t=a.a.createElement(K,null);break;case 5:t=a.a.createElement(H,null);break;default:t=null}return t?a.a.createElement("div",{className:"modal",onClick:r},a.a.createElement("div",{className:"modal__content"},t)):null};W.propTypes={modal:J.a.number,setModalClose:J.a.func.isRequired};var Y=Object(i.b)(function(e){return{modal:e.common.modal}},function(t){return{setModalClose:function(e){e.target===e.currentTarget&&(e.preventDefault(),t(Object(V.b)(0)))}}})(W),Z=function(e){var t=e.data;return a.a.createElement("footer",{className:"section footer",id:"footer"},a.a.createElement("div",{className:"footer__logobox"},a.a.createElement(L.a,{className:"footer__logobox--logo",image:t.logo}),a.a.createElement("h2",{className:"section__title"},t.title)),a.a.createElement("div",{className:"footer__data"},a.a.createElement("p",null,a.a.createElement("a",{href:"https://twitter.com/".concat(t.twitter)},"@",t.twitter)),a.a.createElement("p",null,a.a.createElement("a",{href:"mailto:"+t.email},t.email)),a.a.createElement("p",null,a.a.createElement("a",{href:"tel:"+t.phone.replace("-","")},t.phone)),a.a.createElement("p",null,a.a.createElement("a",{href:t.geo,target:"_blank",rel:"noopener noreferrer"},t.address))))};Z.propTypes={data:J.a.object.isRequired};var $=Object(i.b)(function(e){return{data:e.common.marginals}})(Z),ee=n(317),te=n(319),ne=n(138),re=M()({loader:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,379))},loading:C}),ae=function(){return a.a.createElement(ee.a,null,a.a.createElement("div",null,a.a.createElement(Y,null),a.a.createElement(X,null),a.a.createElement("div",{className:"main-layout"},a.a.createElement("main",{className:"main-layout__body"},a.a.createElement(te.a,null,a.a.createElement(ne.a,{exact:!0,path:"/",component:re}))),a.a.createElement($,null))))};R().then(function(e){u.a.render(a.a.createElement(function(){return a.a.createElement(i.a,{store:e},a.a.createElement(ae,null))},null),document.getElementById("content"))})}});
//# sourceMappingURL=index.js.map