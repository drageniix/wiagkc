(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{373:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r});var r=function(e){return e&&e.data&&e.data.reduce(function(e,t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},e,o({},t.param,t.msg))},{})}},375:function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return p}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return m});var a=n(14);function i(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function c(u){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=u.apply(e,c);function o(e){i(r,t,n,o,a,"next",e)}function a(e){i(r,t,n,o,a,"throw",e)}o(void 0)})}}var r=function(e){return{type:"SET_POST",post:e}},u=function(e){return{type:"SET_EDITING",editing:e}},o=function(t){return function(e){e({type:"SET_POSTS_PAGE",page:t}),e(f())}},s=function(e){return function(t){t(r(void 0)),fetch("https://wiakc.herokuapp.com/feed/post/"+e).then(function(e){return e.json()}).then(function(e){return t(r(e.post))}).catch(function(e){return t(Object(a.a)(e))})}},f=function(){return function(t,e){fetch("https://wiakc.herokuapp.com/feed/posts?page="+e().feed.page).then(function(e){return e.json()}).then(function(e){t({type:"GET_POSTS",posts:e.posts,totalItems:e.totalItems,itemsPerPage:e.itemsPerPage})}).catch(function(e){return t(Object(a.a)(e))})}},p=function(n){return function(r,e){var t=JSON.stringify(n);fetch("https://wiakc.herokuapp.com/feed/post",{method:"POST",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:t}).then(function(){var t=c(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,201!==t.status&&r(Object(a.a)(n));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return r(Object(a.a)(e))})}},l=function(n,o){return function(r,e){var t=JSON.stringify(o);fetch("https://wiakc.herokuapp.com/feed/post/"+n,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:t}).then(function(){var t=c(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status?r(Object(a.a)(n)):r(u(""));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return r(Object(a.a)(e))})}},m=function(t){return function(r,e){return fetch("https://wiakc.herokuapp.com/feed/post/"+t,{method:"DELETE",headers:{Authorization:e().user.token}}).then(function(){var t=c(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&r(Object(a.a)(n));case 4:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return r(Object(a.a)(e))})}}},381:function(e,t,n){"use strict";var r=n(1),c=n.n(r),o=n(2),a=n.n(o),u=n(382),i=n.n(u),s=n(375),f=n(24),p=n(482),l=n(115),m=function(e){var t=e.post,n=e.setEditing,r=e.editable,o=e.history,a=e.isAuth;return c.a.createElement("div",{className:"post",onClick:function(){return r&&n(t._id)||a&&o.push("/feed/"+t._id)}},c.a.createElement("h1",{className:"post__title"},t.title),c.a.createElement("h2",{className:"post__author"},t.creator.name),c.a.createElement("h6",{className:"post__date"},t.updatedAt),c.a.createElement(i.a,{className:"post__content",source:t.content}))};m.propTypes={post:a.a.object,setEditing:a.a.func,isAuth:a.a.bool,editable:a.a.bool,history:a.a.object};var b={setEditing:s.d};t.a=Object(f.b)(function(e){return{isAuth:Object(l.b)(e.user,0)}},b)(Object(p.a)(m))},388:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(24),c=n(2),u=n.n(c),i=n(375),s=n(373),f=n(482);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function u(){var e,n,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=this,r=(e=m(u)).call.apply(e,[this].concat(a)),h(y(y(n=!r||"object"!==p(r)&&"function"!=typeof r?y(t):r)),"state",{title:n.props.post&&n.props.post.title||"",content:n.props.post&&n.props.post.content||""}),h(y(y(n)),"onChange",function(e){return n.setState(h({},e.target.name,e.target.value))}),h(y(y(n)),"onSumbit",function(t){return function(e){switch(e.preventDefault(),t){case 0:n.props.addPost(n.state);break;case 1:n.props.updatePost(n.props.post._id,n.state);break;case 2:n.props.deletePost(n.props.post._id),n.props.history.push("/feed")}n.props.post||n.setState({title:"",content:""})}}),n}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,o.a.Component),t=u,(n=[{key:"render",value:function(){var e=this.props.errors,t=this.state,n=t.content,r=t.title;return o.a.createElement("div",{className:"post-form__container"},o.a.createElement("div",{className:"post-form"},o.a.createElement("input",{className:"post-form__title",value:r,onChange:this.onChange,type:"text",placeholder:"New Post Title",name:"title"}),e&&e.title&&o.a.createElement("p",{className:"post-form__invalid"},e.title)),o.a.createElement("div",{className:"post-form"},o.a.createElement("textarea",{className:"post-form__content",value:n,onChange:this.onChange,placeholder:"Share a recipe, experience, or anything else!",name:"content"}),e&&e.content&&o.a.createElement("p",{className:"post-form__invalid"},e.content)),this.props.post&&o.a.createElement("div",{className:"post-form__buttons"},o.a.createElement("button",{className:"btn btn--update",onClick:this.onSumbit(1)},"Update Post"),o.a.createElement("button",{className:"btn btn--delete",onClick:this.onSumbit(2)},"Delete Post"))||o.a.createElement("div",{className:"post-form__buttons"},o.a.createElement("button",{className:"btn btn--add",onClick:this.onSumbit(0)},"Add Post")))}}])&&l(t.prototype,n),r&&l(t,r),u}(),v={addPost:i.a,updatePost:i.f,deletePost:i.b};d.propTypes={post:u.a.object,addPost:u.a.func.isRequired,updatePost:u.a.func.isRequired,deletePost:u.a.func.isRequired,errors:u.a.object,history:u.a.object},t.a=Object(a.b)(function(e){return{errors:Object(s.a)(e.common.errors)}},v)(Object(f.a)(d))},389:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(2),c=function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("img",{src:"https://i.gifer.com/ZNeS.gif",className:"loading-icon"}),o.a.createElement("h4",{className:"centered"},"Loading!"))};c.propTypes={className:n.n(a).a.string},t.a=c},476:function(e,t,n){"use strict";var r=n(477),c=n(116),u=n(478);function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function o(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function a(e,t){var o=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=c({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),n=t.shift(),r=0<t.length?t.join("="):void 0;r=void 0===r?null:u(r),o(u(n),r,a)}),Object.keys(a).sort().reduce(function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):a}t.extract=o,t.parse=a,t.stringify=function(r,o){!1===(o=c({encode:!0,strict:!0,arrayFormat:"none"},o)).sort&&(o.sort=function(){});var a=function(r){switch(r.arrayFormat){case"index":return function(e,t,n){return null===t?[i(e,r),"[",n,"]"].join(""):[i(e,r),"[",i(n,r),"]=",i(t,r)].join("")};case"bracket":return function(e,t){return null===t?i(e,r):[i(e,r),"[]=",i(t,r)].join("")};default:return function(e,t){return null===t?i(e,r):[i(e,r),"=",i(t,r)].join("")}}}(o);return r?Object.keys(r).sort(o.sort).map(function(t){var e=r[t];if(void 0===e)return"";if(null===e)return i(t,o);if(Array.isArray(e)){var n=[];return e.slice().forEach(function(e){void 0!==e&&n.push(a(t,e,n.length))}),n.join("&")}return i(t,o)+"="+i(e,o)}).filter(function(e){return 0<e.length}).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:a(o(e),t)}}},477:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},478:function(e,t,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),u=new RegExp("("+r+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(t){try{return decodeURIComponent(t)}catch(e){for(var n=t.match(o),r=1;r<n.length;r++)n=(t=a(n,r).join("")).match(o);return t}}e.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=u.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=i(n[0]);r!==n[0]&&(t[n[0]]=r)}n=u.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),a=0;a<o.length;a++){var c=o[a];e=e.replace(new RegExp(c,"g"),t[c])}return e}(t)}}},491:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),u=n(24),i=n(115),s=n(381),f=n(388),p=n(389);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,v,g,j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.posts,n=e.canPost;return c.a.createElement("div",{className:"feed__posts"},n&&c.a.createElement(f.a,null),0===t.length?c.a.createElement(p.a,null):t.map(function(e,t){return c.a.createElement(s.a,{key:t,post:e})}))}}])&&m(n.prototype,r),o&&m(n,o),t}();d=j,v="propTypes",g={posts:o.a.array,canPost:o.a.bool},v in d?Object.defineProperty(d,v,{value:g,enumerable:!0,configurable:!0,writable:!0}):d[v]=g;var O=Object(u.b)(function(e){return{posts:e.feed.posts,canPost:Object(i.b)(e.user,1)&&1===e.feed.page}})(j),P=n(375),_=n(482),E=n(476),w=n.n(E);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){function u(){var e,n,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=this,r=(e=N(u)).call.apply(e,[this].concat(a)),T(x(x(n=!r||"object"!==S(r)&&"function"!=typeof r?x(t):r)),"state",{currentPage:n.props.page}),T(x(x(n)),"changePage",function(t){return function(){var e=n.state.currentPage+t;n.props.history.push({pathname:"/feed",search:"?page="+e}),n.setState({currentPage:e}),n.props.setPage(e)}}),n}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,a["Component"]),t=u,r=[{key:"getDerivedStateFromProps",value:function(e){var t=parseInt(w.a.parse(e.history.location.search).page)||1;return 0<t&&e.page!==t?(e.setPage(t),{currentPage:t}):null}}],(n=[{key:"render",value:function(){var e=this.state.currentPage,t=this.props.lastPage;return c.a.createElement("div",{className:"feed__controls"},1<e&&c.a.createElement("button",{className:"feed__controls",onClick:this.changePage(-1)},"←"),1<t&&c.a.createElement("span",{className:"feed__controls--current"},"Page ",e),e<t&&c.a.createElement("button",{className:"feed__controls",onClick:this.changePage(1)},"→"))}}])&&k(t.prototype,n),r&&k(t,r),u}();T(R,"propTypes",{lastPage:o.a.number,page:o.a.number,setPage:o.a.func,history:o.a.object});var A={setPage:function(e){return Object(P.e)(e)}},I=Object(u.b)(function(e){return{page:e.feed.page,lastPage:Math.ceil(e.feed.totalItems/e.feed.itemsPerPage)}},A)(Object(_.a)(R));t.default=function(){return c.a.createElement("div",{className:"feed"},c.a.createElement(O,null),c.a.createElement(I,null))}}}]);
//# sourceMappingURL=1.js.map