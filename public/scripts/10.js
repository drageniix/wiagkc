(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{380:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),l=function(e){var t=e.className;return a.a.createElement("div",{className:t||"loading-icon"},a.a.createElement("img",{src:"https://i.gifer.com/ZNeS.gif",className:"loading-icon"}),a.a.createElement("h4",{className:"centered"},"Loading!"))};l.propTypes={className:n.n(o).a.string},t.a=l},499:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),l=n.n(r),u=n(26),c=n(82),i=n(47),s=n(3),f=n(380);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function u(){var e,t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=this,h(d(d(t=!(r=(e=b(u)).call.apply(e,[this].concat(o)))||"object"!==p(r)&&"function"!=typeof r?d(n):r)),"state",{loading:!0,users:[]}),t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,a["Component"]),t=u,r=[{key:"getDerivedStateFromProps",value:function(e){return e.getAllUsers(),0<e.users.length?{users:e.users,loading:!1}:null}}],(n=[{key:"render",value:function(){var e=this.state,t=e.users;return e.loading&&o.a.createElement(f.a,null)||o.a.createElement("table",{className:"admin__users--table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,"Email"),o.a.createElement("td",null,"Country"),o.a.createElement("td",null,"Status"))),o.a.createElement("tbody",null,t.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.country),o.a.createElement("td",null,Object(c.b)(e.privilege)))})))}}])&&m(t.prototype,n),r&&m(t,r),u}();h(g,"propTypes",{users:l.a.array,getAllUsers:l.a.func});var E={getAllUsers:function(){return function(t,e){t(Object(i.b)(!0)),fetch("https://wiakc.herokuapp.com/auth/users",{headers:{Authorization:e().user.token,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.users&&t({type:s.g,users:e.users}),t(Object(i.b)(!1))}).catch(function(e){t(Object(i.a)(e)),t(Object(i.b)(!1))})}}},v=Object(u.b)(function(e){return{users:e.admin.users}},E)(g);t.default=function(){return o.a.createElement("div",{className:"admin"},o.a.createElement(v,null))}}}]);
//# sourceMappingURL=10.js.map