(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{494:function(e,t,n){"use strict";n.r(t);var a=n(1),u=n.n(a),o=n(2),r=n.n(o),c=n(401),i=n(487),s=n(24),f=n(375),l=n(400),p=n(379),m=n.n(p),b=n(114),d=function(t){return function(e){return t.user.userId===e.creator._id||Object(b.c)(t.user,3)}};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _,O,w,j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,g(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.comment,n=t._id,o=t.content,r=t.creator,a=r.name,c=r.flag,i=e.setEditing;return u.a.createElement("div",{className:"comment"},u.a.createElement("div",{className:"comment__user"},u.a.createElement("img",{className:"comment__user--flag",src:c}),u.a.createElement("p",{className:"comment__user--author"},a),u.a.createElement("svg",{className:"icon icon--edit pointer",onClick:function(){return i(n)},viewBox:"0 0 32 32"},u.a.createElement("title",null,"Edit Event"),u.a.createElement("path",{d:"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"}))),u.a.createElement(m.a,{className:"comment__content",source:o}))}}])&&h(n.prototype,o),r&&h(n,r),t}();_=j,O="propTypes",w={comment:r.a.object,ownsComment:r.a.bool,setEditing:r.a.func,canEditComment:r.a.bool},O in _?Object.defineProperty(_,O,{value:w,enumerable:!0,configurable:!0,writable:!0}):_[O]=w;var C={setEditing:f.d},k=Object(s.b)(function(e,t){var n=t.comment;return{canEditComment:d(e)(n)}},C)(j),P=n(382),S=n.n(P),N=n(14);function T(e,t,n,o,r,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(o,r)}function x(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var o=i.apply(e,c);function r(e){T(o,t,n,r,a,"next",e)}function a(e){T(o,t,n,r,a,"throw",e)}r(void 0)})}}var R=n(373);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){function i(){var e,n,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=this,o=(e=M(i)).call.apply(e,[this].concat(a)),D(A(A(n=!o||"object"!==I(o)&&"function"!=typeof o?A(t):o)),"state",{content:n.props.comment&&n.props.comment.content||""}),D(A(A(n)),"onChange",function(e){return n.setState(D({},e.target.name,e.target.value))}),D(A(A(n)),"onSumbit",function(t){return function(e){switch(e.preventDefault(),t){case 0:n.props.addComment(n.state);break;case 1:n.props.updateComment(n.props.comment._id,n.state);break;case 2:n.props.deleteComment(n.props.comment._id)}n.props.comment||n.setState({content:""})}}),n}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(i,u.a.Component),t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.errors,n=e.comment,o=e.setEditing,r=this.state.content;return u.a.createElement("div",{className:"comment-form"},!!n&&u.a.createElement("svg",{className:"icon icon--cancel pointer",onClick:function(){return o("")},viewBox:"0 0 32 32"},u.a.createElement("title",null,"Cancel Editing"),u.a.createElement("path",{d:"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"}),u.a.createElement("path",{d:"M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"})),u.a.createElement("div",{className:"comment-form__input"},u.a.createElement(S.a,{rows:4,className:"comment-form__input--content",value:r,onChange:this.onChange,placeholder:"What do you think?",name:"content"})),t&&t.content&&u.a.createElement("p",{className:"comment-form__invalid"},t.content),n&&u.a.createElement("div",{className:"comment-form__buttons"},u.a.createElement("button",{className:"btn btn--update",onClick:this.onSumbit(1)},"Update"),u.a.createElement("button",{className:"btn btn--delete",onClick:this.onSumbit(2)},"Delete"))||u.a.createElement("div",{className:"comment-form__buttons"},u.a.createElement("button",{className:"btn btn--add",onClick:this.onSumbit(0)},"Add Comment")))}}])&&z(t.prototype,n),o&&z(t,o),i}(),q={addComment:function(r){return function(o,e){var t,n=JSON.stringify(r);fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments",{method:"POST",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:n}).then((t=x(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,201!==t.status&&o(Object(N.a)(n));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(N.a)(e))})}},updateComment:function(r,a){return function(o,e){var t,n=JSON.stringify(a);fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments/"+r,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:e().user.token},body:n}).then((t=x(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status?o(Object(N.a)(n)):o(Object(f.d)(""));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(N.a)(e))})}},deleteComment:function(n){return function(o,e){return fetch("https://wiakc.herokuapp.com/feed/post/"+e().feed.post._id+"/comments/"+n,{method:"DELETE",headers:{Authorization:e().user.token}}).then((t=x(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,200!==t.status&&o(Object(N.a)(n));case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})).catch(function(e){return o(Object(N.a)(e))});var t}},setEditing:f.d};J.propTypes={comment:r.a.object,addComment:r.a.func.isRequired,updateComment:r.a.func.isRequired,deleteComment:r.a.func.isRequired,errors:r.a.object,setEditing:r.a.func};var B=Object(s.b)(function(e){return{errors:Object(R.a)(e.common.errors)}},q)(J);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function W(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,G(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,u.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.comments,n=e.isEditingComment,o=e.userId;return u.a.createElement("div",{className:"comments"},t.map(function(e,t){return u.a.createElement(a.Fragment,{key:t},n(e)&&u.a.createElement(B,{comment:e})||u.a.createElement(k,{comment:e}))}),o&&u.a.createElement("div",{className:"comments__new"},u.a.createElement(B,null)))}}])&&L(n.prototype,o),r&&L(n,r),t}();K.propTypes={isEditingComment:r.a.func,comments:r.a.array,userId:r.a.string};var Q=Object(s.b)(function(e){return{comments:e.feed.post.comments,userId:e.user.userId,isEditingComment:(t=e,function(e){return(t.user.userId===e.creator._id||Object(b.c)(t.user,3))&&t.feed.editing===e._id})};var t})(K),V=n(378);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"PostPage",function(){return re});var te,ne,oe,re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,$(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.getPost(this.props.postId)}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.showForm,o=e.editable,r=e.loading;return u.a.createElement("div",{className:"individual-post",onClick:function(){return Object(f.d)("")}},r&&u.a.createElement(V.a,null)||u.a.createElement("div",{className:"individual-post__container"},t&&u.a.createElement(a.Fragment,null,n&&o&&u.a.createElement(c.a,{post:t})||u.a.createElement(l.a,{post:t,editable:o}),u.a.createElement(Q,null))||"No Post Found"))}}])&&Y(n.prototype,o),r&&Y(n,r),t}();te=re,ne="propTypes",oe={post:r.a.object,postId:r.a.string,showForm:r.a.bool,editable:r.a.bool,getPost:r.a.func,setEditing:r.a.func,loading:r.a.bool},ne in te?Object.defineProperty(te,ne,{value:oe,enumerable:!0,configurable:!0,writable:!0}):te[ne]=oe;var ae={getPost:f.c,setEditing:f.d};t.default=Object(s.b)(function(e,t){var n=t.match;return{showForm:!!e.feed.post&&e.feed.editing===e.feed.post._id,editable:!!e.feed.post&&(e.feed.post.creator._id===e.user.userId||Object(b.c)(e.user,3)),postId:n.params.postId,post:e.feed.post,loading:e.common.loading}},ae)(Object(i.a)(re))}}]);
//# sourceMappingURL=4.js.map