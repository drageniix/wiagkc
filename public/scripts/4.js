(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{371:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return r});var r=function(t){return t&&t.data&&t.data.reduce(function(t,e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},t,o({},e.param,e.msg))},{})}},372:function(t,e,n){"use strict";var i={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f=Object.defineProperty,l=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,y=h&&h(Object);t.exports=function t(e,n,r){if("string"==typeof n)return e;if(y){var o=h(n);o&&o!==y&&t(e,o,r)}var a=l(n);m&&(a=a.concat(m(n)));for(var c=0;c<a.length;++c){var s=a[c];if(!(i[s]||p[s]||r&&r[s])){var u=b(n,s);try{f(e,s,u)}catch(t){}}}return e}},373:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"b",function(){return l});var a=n(14);function u(t,e,n,r,o,a,c){try{var s=t[a](c),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function c(s){return function(){var t=this,c=arguments;return new Promise(function(e,n){var r=s.apply(t,c);function o(t){u(r,e,n,o,a,"next",t)}function a(t){u(r,e,n,o,a,"throw",t)}o(void 0)})}}var r=function(t){return{type:"SET_POST",post:t}},o=function(e){return function(t){t({type:"SET_POSTS_PAGE",page:e}),t(i())}},s=function(t){return function(e){e(r(void 0)),fetch("https://wiakc.herokuapp.com/feed/post/"+t).then(function(t){return t.json()}).then(function(t){return e(r(t.post))}).catch(function(t){return e(Object(a.a)(t))})}},i=function(){return function(e,t){fetch("https://wiakc.herokuapp.com/feed/posts?page="+t().feed.page).then(function(t){return t.json()}).then(function(t){e({type:"GET_POSTS",posts:t.posts,totalItems:t.totalItems,itemsPerPage:t.itemsPerPage})}).catch(function(t){return e(Object(a.a)(t))})}},p=function(n){return function(r,t){var e=JSON.stringify(n);fetch("https://wiakc.herokuapp.com/feed/post",{method:"POST",headers:{"Content-Type":"application/json",Authorization:t().user.token},body:e}).then(function(){var e=c(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:n=t.sent,201!==e.status&&r(Object(a.a)(n));case 4:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){return r(Object(a.a)(t))})}},f=function(n,o){return function(r,t){var e=JSON.stringify(o);fetch("https://wiakc.herokuapp.com/feed/post/"+n,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:t().user.token},body:e}).then(function(){var e=c(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:n=t.sent,200!==e.status&&r(Object(a.a)(n));case 4:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){return r(Object(a.a)(t))})}},l=function(e){return function(r,t){return fetch("https://wiakc.herokuapp.com/feed/post/"+e,{method:"DELETE",headers:{Authorization:t().user.token}}).then(function(){var e=c(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:n=t.sent,200!==e.status&&r(Object(a.a)(n));case 4:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){return r(Object(a.a)(t))})}}},375:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(2),c=n.n(a),s=function(t){var e=t.post,n=t.onClick;return o.a.createElement("div",{className:"posts__post",onClick:n},o.a.createElement("h1",{className:"posts__post--title"},e.title),o.a.createElement("h2",{className:"posts__post--author"},e.creator.name),o.a.createElement("h6",{className:"posts__post--date"},e.updatedAt),o.a.createElement("p",{className:"posts__post--content"},e.content))};s.propTypes={post:c.a.object,onClick:c.a.func},e.a=s},376:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(24),c=n(2),s=n.n(c),u=n(373),i=n(371),p=n(377);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){function s(){var t,n,e,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=this,r=(t=m(s)).call.apply(t,[this].concat(a)),y(h(h(n=!r||"object"!==f(r)&&"function"!=typeof r?h(e):r)),"state",{title:n.props.post&&n.props.post.title||"",content:n.props.post&&n.props.post.content||""}),y(h(h(n)),"onChange",function(t){return n.setState(y({},t.target.name,t.target.value))}),y(h(h(n)),"onSumbit",function(e){return function(t){switch(t.preventDefault(),e){case 0:n.props.addPost(n.state);break;case 1:n.props.updatePost(n.props.post._id,n.state);break;case 2:n.props.deletePost(n.props.post._id),n.props.history.push("/feed")}n.props.post||n.setState({title:"",content:""})}}),n}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(s,o.a.Component),e=s,(n=[{key:"render",value:function(){var t=this.props.errors,e=this.state,n=e.content,r=e.title;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__form"},o.a.createElement("input",{className:"post__form--title",value:r,onChange:this.onChange,type:"text",placeholder:"New Post Title",name:"title"}),t&&t.title&&o.a.createElement("p",{className:"post__form--invalid"},t.title)),o.a.createElement("div",{className:"post__form"},o.a.createElement("textarea",{className:"post__form--content",value:n,onChange:this.onChange,placeholder:"Share a recipe, experience, or anything else!",name:"content"}),t&&t.content&&o.a.createElement("p",{className:"post__form--invalid"},t.content)),this.props.post&&o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"post__form--btn post__form--btn--update",onClick:this.onSumbit(1)},"Update Post"),o.a.createElement("button",{className:"post__form--btn post__form--btn--delete",onClick:this.onSumbit(2)},"Delete Post"))||o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"post__form--btn post__form--btn--add",onClick:this.onSumbit(0)},"Add Post")))}}])&&l(e.prototype,n),r&&l(e,r),s}(),v={addPost:function(t){return Object(u.a)(t)},updatePost:function(t,e){return Object(u.e)(t,e)},deletePost:function(t){return Object(u.b)(t)}};d.propTypes={post:s.a.object,addPost:s.a.func.isRequired,updatePost:s.a.func.isRequired,deletePost:s.a.func.isRequired,errors:s.a.object,history:s.a.object},e.a=Object(a.b)(function(t){return{errors:Object(i.a)(t.common.errors)}},v)(Object(p.a)(d))},377:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(2),c=n.n(a),s=n(372),u=n.n(s),i=n(115),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var f=function(r){var t=function(t){var e=t.wrappedComponentRef,n=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["wrappedComponentRef"]);return o.a.createElement(i.a,{children:function(t){return o.a.createElement(r,p({},n,t,{ref:e}))}})};return t.displayName="withRouter("+(r.displayName||r.name)+")",t.WrappedComponent=r,t.propTypes={wrappedComponentRef:c.a.func},u()(t,r)};e.a=f},384:function(t,e,n){"use strict";n.r(e),n.d(e,"PostPage",function(){return v});var o=n(1),a=n.n(o),r=n(2),c=n.n(r),u=n(376),s=n(377),i=n(24),p=n(373),f=n(375);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function s(){var t,e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=this,d(y(y(e=!(r=(t=b(s)).call.apply(t,[this].concat(a)))||"object"!==l(r)&&"function"!=typeof r?y(n):r)),"state",{postId:e.props.match.params.postId}),e}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(s,o["Component"]),e=s,(n=[{key:"componentDidMount",value:function(){this.props.getPost(this.state.postId)}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.post&&a.a.createElement("div",null,a.a.createElement(u.a,{post:this.props.post}),a.a.createElement(f.a,{post:this.props.post}))||"No post found.")}}])&&m(e.prototype,n),r&&m(e,r),s}();d(v,"propTypes",{post:c.a.object,match:c.a.object,getPost:c.a.func});var O={getPost:function(t){return Object(p.c)(t)}};e.default=Object(i.b)(function(t){return{post:t.feed.post}},O)(Object(s.a)(v))}}]);
//# sourceMappingURL=4.js.map