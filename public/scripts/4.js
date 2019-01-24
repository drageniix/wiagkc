(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{494:function(e,t,n){"use strict";n.r(t);var a=n(1),u=n.n(a),o=n(2),r=n.n(o),c=n(401),i=n(487),s=n(24),f=n(376),p=n(400),l=n(378),m=n.n(l);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _,w,O,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,h(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.comment,n=t._id,o=t.content,r=t.creator,a=r.name,c=r.flag,i=e.setEditing;return u.a.createElement("div",{className:"comment",onClick:function(){return i(n)}},u.a.createElement("div",{className:"comment__user"},u.a.createElement("img",{className:"comment__user--flag",src:c}),u.a.createElement("p",{className:"comment__user--author"},a)),u.a.createElement(m.a,{className:"comment__content",source:o}))}}])&&y(n.prototype,o),r&&y(n,r),t}();_=g,w="propTypes",O={comment:r.a.object,ownsComment:r.a.bool,setEditing:r.a.func},w in _?Object.defineProperty(_,w,{value:O,enumerable:!0,configurable:!0,writable:!0}):_[w]=O;var j={setEditing:f.d},E=Object(s.b)(null,j)(g),S=n(381),k=n.n(S),P=n(14);function C(e,t,n,o,r,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(o,r)}function N(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var o=i.apply(e,c);function r(e){C(o,t,n,r,a,"next",e)}function a(e){C(o,t,n,r,a,"throw",e)}r(void 0)})}}var T=n(373);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){function i(){var e,n,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=this,o=(e=I(i)).call.apply(e,[this].concat(a)),F(D(D(n=!o||"object"!==R(o)&&"function"!=typeof o?D(t):o)),"state",{content:n.props.comment&&n.props.comment.content||""}),F(D(D(n)),"onChange",function(e){return n.setState(F({},e.target.name,e.target.value))}),F(D(D(n)),"onSumbit",function(t){return function(e){switch(e.preventDefault(),t){case 0:n.props.addComment(n.state);break;case 1:n.props.updateComment(n.props.comment._id,n.state);break;case 2:n.props.deleteComment(n.props.comment._id)}n.props.comment||n.setState({content:""})}}),n}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(i,u.a.Component),t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.errors,n=e.comment,o=this.state.content;return u.a.createElement("div",{className:"comment-form"},u.a.createElement("div",{className:"comment-form__input"},u.a.createElement(k.a,{rows:4,className:"comment-form__input--content",value:o,onChange:this.onChange,placeholder:"What do you think?",name:"content"})),t&&t.content&&u.a.createElement("p",{className:"comment-form__invalid"},t.content),n&&u.a.createElement("div",{className:"comment-form__buttons"},u.a.createElement("button",{className:"btn btn--update",onClick:this.onSumbit(1)},"Update"),u.a.createElement("button",{className:"btn btn--delete",onClick:this.onSumbit(2)},"Delete"))||u.a.createElement("div",{className:"comment-form__buttons"},u.a.createElement("button",{className:"btn btn--add",onClick:this.onSumbit(0)},"Add Comment")))}}])&&x(t.prototype,n),o&&x(t,o),i}(),q={addComment:function(r){return function(o,e){var t,n=JSON.stringify(r);fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments",{method:"POST",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:n}).then((t=N(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,201!==t.status&&o(Object(P.a)(n));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(P.a)(e))})}},updateComment:function(r,a){return function(o,e){var t,n=JSON.stringify(a);fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments/"+r,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:n}).then((t=N(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status?o(Object(P.a)(n)):o(Object(f.d)(""));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(P.a)(e))})}},deleteComment:function(n){return function(o,e){return fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments/"+n,{method:"DELETE",headers:{Authorization:e().user.token}}).then((t=N(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&o(Object(P.a)(n));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(P.a)(e))});var t}}};J.propTypes={comment:r.a.object,addComment:r.a.func.isRequired,updateComment:r.a.func.isRequired,deleteComment:r.a.func.isRequired,errors:r.a.object};var z=Object(s.b)(function(e){return{errors:Object(T.a)(e.common.errors)}},q)(J);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,W(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,u.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.comments,n=e.editing,o=e.userId;return u.a.createElement("div",{className:"comments"},t.map(function(e,t){return u.a.createElement(a.Fragment,{key:t},o===e.creator._id&&n===e._id&&u.a.createElement(z,{comment:e})||u.a.createElement(E,{comment:e}))}),o&&u.a.createElement("div",{className:"comments__new"},u.a.createElement(z,null)))}}])&&L(n.prototype,o),r&&L(n,r),t}();G.propTypes={editing:r.a.string,comments:r.a.array,userId:r.a.string};var H=Object(s.b)(function(e){return{comments:e.feed.post.comments,editing:e.feed.editing,userId:e.user.userId}})(G),K=n(377);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function X(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"PostPage",function(){return ne});var $,ee,te,ne=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,Y(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.getPost(this.props.postId)}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.showForm,o=e.editable;return u.a.createElement("div",{className:"individual-post",onClick:function(){return Object(f.d)("")}},t&&u.a.createElement("div",{className:"individual-post__container"},n&&o&&u.a.createElement(c.a,{post:t})||u.a.createElement(p.a,{post:t,editable:o}),u.a.createElement(H,null))||u.a.createElement(K.a,null))}}])&&V(n.prototype,o),r&&V(n,r),t}();$=ne,ee="propTypes",te={post:r.a.object,postId:r.a.string,showForm:r.a.bool,editable:r.a.bool,getPost:r.a.func,setEditing:r.a.func},ee in $?Object.defineProperty($,ee,{value:te,enumerable:!0,configurable:!0,writable:!0}):$[ee]=te;var oe={getPost:f.c,setEditing:f.d};t.default=Object(s.b)(function(e,t){var n=t.match;return{showForm:!!e.feed.post&&e.feed.editing===e.feed.post._id,editable:!!e.feed.post&&e.feed.post.creator._id===e.user.userId,postId:n.params.postId,post:e.feed.post}},oe)(Object(i.a)(ne))}}]);
//# sourceMappingURL=4.js.map