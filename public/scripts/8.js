(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{373:function(e,t,n){"use strict";var l={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f=Object.defineProperty,s=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,g=m&&m(Object);e.exports=function e(t,n,r){if("string"==typeof n)return t;if(g){var o=m(n);o&&o!==g&&e(t,o,r)}var a=s(n);y&&(a=a.concat(y(n)));for(var c=0;c<a.length;++c){var u=a[c];if(!(l[u]||p[u]||r&&r[u])){var i=b(n,u);try{f(t,u,i)}catch(e){}}}return t}},382:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),u=n(22),i=n(101),l=n(373),p=n.n(l),f=n(134),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var y=function(r){var e=function(e){var t=e.wrappedComponentRef,n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["wrappedComponentRef"]);return c.a.createElement(f.a,{children:function(e){return c.a.createElement(r,s({},n,e,{ref:t}))}})};return e.displayName="withRouter("+(r.displayName||r.name)+")",e.WrappedComponent=r,e.propTypes={wrappedComponentRef:o.a.func},p()(e,r)};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function p(){var e,t,n,r,o,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);for(var u=arguments.length,i=new Array(u),l=0;l<u;l++)i[l]=arguments[l];return n=this,r=(e=g(p)).call.apply(e,[this].concat(i)),t=!r||"object"!==b(r)&&"function"!=typeof r?O(n):r,o=O(O(t)),c=function(e){e.preventDefault(),t.props.logout(),t.props.history.push("/")},(a="logout")in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(p,c.a.Component),t=p,(n=[{key:"render",value:function(){return c.a.createElement("button",{className:"user__btn user__btn--logout",onClick:this.logout},"Logout")}}])&&m(t.prototype,n),r&&m(t,r),p}(),d={logout:function(e){return Object(i.c)(e)}};h.propTypes={logout:o.a.func.isRequired,history:o.a.object.isRequired};var w=Object(u.b)(void 0,d)(y(h));function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"AccountPage",function(){return N});var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,P(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.props.getFlag(this.props.user.country)}},{key:"render",value:function(){var e=this.props.user;return c.a.createElement("div",{className:"account"},c.a.createElement("div",{className:"account__content"},c.a.createElement("p",{className:"account__content--item"},c.a.createElement("strong",null,"Name: "),e.name),c.a.createElement("p",{className:"account__content--item"},c.a.createElement("strong",null,"Country: "),e.flag&&c.a.createElement("img",{className:"account__flag",src:e.flag}),e.country),c.a.createElement("p",{className:"account__content--item"},c.a.createElement("strong",null,"Email: "),e.email),c.a.createElement("p",{className:"account__content--item"},c.a.createElement("strong",null,"Status: "),3===e.privilege?"Admin":"Active Member"),c.a.createElement(w,null)))}}])&&j(n.prototype,r),o&&j(n,o),t}(),C={getFlag:function(e){return Object(i.a)(e)}};N.propTypes={user:o.a.object,getFlag:o.a.func};t.default=Object(u.b)(function(e){return{user:e.user.user}},C)(N)}}]);
//# sourceMappingURL=8.js.map