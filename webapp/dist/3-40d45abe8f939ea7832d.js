(window.webpackJsonpinfosightportalnimblefrontend=window.webpackJsonpinfosightportalnimblefrontend||[]).push([[3],{1602:function(e,t,r){"use strict";r.r(t);var n=r(16),i=r.n(n),a=(r(54),r(370),window.nimbleShims.jQuery_1_11_1,i.a.fn.button.noConflict());i.a.fn.bs_button=a;var o=i.a.fn.tooltip.noConflict();i.a.fn.bs_tooltip=o;r(371);var u=r(25),c=r(375);function s(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var l=s();l.withExtraArgument=s;var f=l,d=r(673),p=r(235);var v=function(e){var t=function(e){return function(t,r){return void 0!==e.getIn(t,r)}},r=e.deepEqual,n=e.empty,i=e.getIn,a=e.deleteIn,o=e.setIn;return function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return function t(c,s){if("]"===s[s.length-1]){var l=Object(p.a)(s);return l.pop(),i(c,l.join("."))?o(c,s):c}var f=c;u(e)(c,s)&&(f=a(c,s));var d=s.lastIndexOf(".");if(d>0){var v=s.substring(0,d);if("]"!==v[v.length-1]){var y=i(f,v);if(r(y,n))return t(f,v)}}return f}}},y=r(97);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var h=function(e){var t=e.getIn;return function(e,r){var n=null;r.startsWith("values")&&(n=r.replace("values","initial"));var i=!n||void 0===t(e,n);return void 0!==t(e,r)&&i}},g=function(e){return e&&e.type&&e.type.length>d.J.length&&e.type.substring(0,d.J.length)===d.J};var O,j=function(e){var t,r=e.deepEqual,n=e.empty,i=e.forEach,a=e.getIn,o=e.setIn,u=e.deleteIn,c=e.fromJS,s=e.keys,l=e.size,f=e.some,p=e.splice,O=v(e)(h),j=v(y.a)(h),E=function(e,t,r,n,i,u,c){var s=a(e,t+"."+r);return s||c?o(e,t+"."+r,p(s,n,i,u)):e},w=function(e,t,r,n,i,u,c){var s=a(e,t),l=y.a.getIn(s,r);return l||c?o(e,t,y.a.setIn(s,r,y.a.splice(l,n,i,u))):e},S=["values","fields","submitErrors","asyncErrors"],T=function(e,t,r,i,a){var o=e,u=null!=a?n:void 0;return o=E(o,"values",t,r,i,a,!0),o=E(o,"fields",t,r,i,u),o=w(o,"syncErrors",t,r,i,void 0),o=w(o,"syncWarnings",t,r,i,void 0),o=E(o,"submitErrors",t,r,i,void 0),o=E(o,"asyncErrors",t,r,i,void 0)},R=(b(t={},d.a,function(e,t){var r=t.meta,n=r.field,i=r.index,a=t.payload;return T(e,n,i,0,a)}),b(t,d.b,function(e,t){var r=t.meta,n=r.field,i=r.from,u=r.to,c=a(e,"values."+n),s=e;return(c?l(c):0)&&S.forEach(function(e){var t=e+"."+n;if(a(s,t)){var r=a(s,t+"["+i+"]");s=o(s,t,p(a(s,t),i,1)),s=o(s,t,p(a(s,t),u,0,r))}}),s}),b(t,d.c,function(e,t){var r=t.meta.field,n=a(e,"values."+r),i=n?l(n):0;return i?T(e,r,i-1,1):e}),b(t,d.d,function(e,t){var r=t.meta.field,n=t.payload,i=a(e,"values."+r),o=i?l(i):0;return T(e,r,o,0,n)}),b(t,d.e,function(e,t){var r=t.meta,n=r.field,i=r.index;return T(e,n,i,1)}),b(t,d.f,function(e,t){var r=t.meta.field,n=a(e,"values."+r),i=n?l(n):0;return i?T(e,r,0,i):e}),b(t,d.g,function(e,t){var r=t.meta.field;return T(e,r,0,1)}),b(t,d.h,function(e,t){var r=t.meta,n=r.field,i=r.index,a=r.removeNum,o=t.payload;return T(e,n,i,a,o)}),b(t,d.i,function(e,t){var r=t.meta,n=r.field,i=r.indexA,u=r.indexB,c=e;return S.forEach(function(e){var t=a(c,e+"."+n+"["+i+"]"),r=a(c,e+"."+n+"["+u+"]");void 0===t&&void 0===r||(c=o(c,e+"."+n+"["+i+"]",r),c=o(c,e+"."+n+"["+u+"]",t))}),c}),b(t,d.j,function(e,t){var r=t.meta.field,n=t.payload;return T(e,r,0,0,n)}),b(t,d.k,function(e,t){var r=t.meta.field,n=t.payload,i=e;return i=O(i,"asyncErrors."+r),i=O(i,"submitErrors."+r),i=o(i,"fields."+r+".autofilled",!0),i=o(i,"values."+r,n)}),b(t,d.l,function(e,t){var r=t.meta,n=r.field,i=r.touch,c=t.payload,s=e;return void 0===a(s,"initial."+n)&&""===c?s=O(s,"values."+n):void 0!==c&&(s=o(s,"values."+n,c)),n===a(s,"active")&&(s=u(s,"active")),s=u(s,"fields."+n+".active"),i&&(s=o(s,"fields."+n+".touched",!0),s=o(s,"anyTouched",!0)),s}),b(t,d.m,function(e,t){var r=t.meta,n=r.field,i=r.touch,u=r.persistentSubmitErrors,c=t.payload,s=e;return void 0===a(s,"initial."+n)&&""===c?s=O(s,"values."+n):void 0!==c&&(s=o(s,"values."+n,c)),s=O(s,"asyncErrors."+n),u||(s=O(s,"submitErrors."+n)),s=O(s,"fields."+n+".autofilled"),i&&(s=o(s,"fields."+n+".touched",!0),s=o(s,"anyTouched",!0)),s}),b(t,d.p,function(e){return u(e,"triggerSubmit")}),b(t,d.q,function(e){var t=e;return t=O(t,"submitErrors"),t=u(t,"error")}),b(t,d.n,function(e,t){var r=t.meta.field;return u(e,"asyncErrors."+r)}),b(t,d.o,function(e,t){var r=t.meta,n=r.keepTouched,i=r.persistentSubmitErrors,c=e;r.fields.forEach(function(e){c=O(c,"values."+e),c=O(c,"asyncErrors."+e),i||(c=O(c,"submitErrors."+e)),c=O(c,"fields."+e+".autofilled"),n||(c=u(c,"fields."+e+".touched"))});var l=f(s(a(c,"registeredFields")),function(e){return a(c,"fields."+e+".touched")});return c=l?o(c,"anyTouched",!0):u(c,"anyTouched")}),b(t,d.s,function(e,t){var r=t.meta.field,n=e,i=a(e,"active");return n=u(n,"fields."+i+".active"),n=o(n,"fields."+r+".visited",!0),n=o(n,"fields."+r+".active",!0),n=o(n,"active",r)}),b(t,d.t,function(e,t){var u=t.payload,l=t.meta,f=l.keepDirty,d=l.keepSubmitSucceeded,p=l.updateUnregisteredFields,v=l.keepValues,y=c(u),b=n,m=a(e,"warning");m&&(b=o(b,"warning",m));var h=a(e,"syncWarnings");h&&(b=o(b,"syncWarnings",h));var g=a(e,"error");g&&(b=o(b,"error",g));var O=a(e,"syncErrors");O&&(b=o(b,"syncErrors",O));var j=a(e,"registeredFields");j&&(b=o(b,"registeredFields",j));var E=a(e,"values"),w=a(e,"initial"),S=y,T=E;if(f&&j){if(!r(S,w)){var R=function(e){var t=a(w,e),n=a(E,e);if(r(n,t)){var i=a(S,e);a(T,e)!==i&&(T=o(T,e,i))}};p||i(s(j),function(e){return R(e)}),i(s(S),function(e){if(void 0===a(w,e)){var t=a(S,e);T=o(T,e,t)}p&&R(e)})}}else T=S;return v&&(i(s(E),function(e){var t=a(E,e);T=o(T,e,t)}),i(s(w),function(e){var t=a(w,e);S=o(S,e,t)})),d&&a(e,"submitSucceeded")&&(b=o(b,"submitSucceeded",!0)),b=o(b,"values",T),b=o(b,"initial",S)}),b(t,d.u,function(e,t){var r=t.payload,n=r.name,i=r.type,u="registeredFields['"+n+"']",s=a(e,u);if(s){var l=a(s,"count")+1;s=o(s,"count",l)}else s=c({name:n,type:i,count:1});return o(e,u,s)}),b(t,d.v,function(e){var t=n,r=a(e,"registeredFields");r&&(t=o(t,"registeredFields",r));var i=a(e,"initial");return i&&(t=o(t,"values",i),t=o(t,"initial",i)),t}),b(t,d.w,function(e,t){var r=t.meta.sections,n=e;r.forEach(function(t){n=O(n,"asyncErrors."+t),n=O(n,"submitErrors."+t),n=O(n,"fields."+t);var r=a(e,"initial."+t);n=r?o(n,"values."+t,r):O(n,"values."+t)});var i=f(s(a(n,"registeredFields")),function(e){return a(n,"fields."+e+".touched")});return n=i?o(n,"anyTouched",!0):u(n,"anyTouched")}),b(t,d.D,function(e){return o(e,"triggerSubmit",!0)}),b(t,d.z,function(e,t){var r=t.meta.field;return o(e,"asyncValidating",r||!0)}),b(t,d.A,function(e){return o(e,"submitting",!0)}),b(t,d.B,function(e,t){var r=t.payload,n=e;if(n=u(n,"asyncValidating"),r&&Object.keys(r).length){var i=r._error,a=m(r,["_error"]);i&&(n=o(n,"error",i)),Object.keys(a).length&&(n=o(n,"asyncErrors",c(a)))}else n=u(n,"error"),n=u(n,"asyncErrors");return n}),b(t,d.C,function(e,t){var r=t.payload,n=e;if(n=u(n,"submitting"),n=u(n,"submitFailed"),n=u(n,"submitSucceeded"),r&&Object.keys(r).length){var i=r._error,a=m(r,["_error"]);n=i?o(n,"error",i):u(n,"error"),n=Object.keys(a).length?o(n,"submitErrors",c(a)):u(n,"submitErrors"),n=o(n,"submitFailed",!0)}else n=u(n,"error"),n=u(n,"submitErrors");return n}),b(t,d.x,function(e,t){var r=t.meta.fields,n=e;return n=o(n,"submitFailed",!0),n=u(n,"submitSucceeded"),n=u(n,"submitting"),r.forEach(function(e){return n=o(n,"fields."+e+".touched",!0)}),r.length&&(n=o(n,"anyTouched",!0)),n}),b(t,d.y,function(e){var t=e;return t=u(t,"submitFailed"),t=o(t,"submitSucceeded",!0)}),b(t,d.E,function(e,t){var r=e;return t.meta.fields.forEach(function(e){return r=o(r,"fields."+e+".touched",!0)}),r=o(r,"anyTouched",!0)}),b(t,d.F,function(e,t){var i=t.payload,c=i.name,s=i.destroyOnUnmount,l=e,f="registeredFields['"+c+"']",d=a(l,f);if(!d)return l;var p=a(d,"count")-1;if(p<=0&&s){l=u(l,f),r(a(l,"registeredFields"),n)&&(l=u(l,"registeredFields"));var v=a(l,"syncErrors");v&&(v=j(v,c),l=y.a.deepEqual(v,y.a.empty)?u(l,"syncErrors"):o(l,"syncErrors",v));var b=a(l,"syncWarnings");b&&(b=j(b,c),l=y.a.deepEqual(b,y.a.empty)?u(l,"syncWarnings"):o(l,"syncWarnings",b)),l=O(l,"submitErrors."+c),l=O(l,"asyncErrors."+c)}else d=o(d,"count",p),l=o(l,f,d);return l}),b(t,d.G,function(e,t){var r=e;t.meta.fields.forEach(function(e){return r=u(r,"fields."+e+".touched")});var n=f(s(a(r,"registeredFields")),function(e){return a(r,"fields."+e+".touched")});return r=n?o(r,"anyTouched",!0):u(r,"anyTouched")}),b(t,d.H,function(e,t){var r=t.payload,n=r.syncErrors,i=r.error,a=e;return i?(a=o(a,"error",i),a=o(a,"syncError",!0)):(a=u(a,"error"),a=u(a,"syncError")),a=Object.keys(n).length?o(a,"syncErrors",n):u(a,"syncErrors")}),b(t,d.I,function(e,t){var r=t.payload,n=r.syncWarnings,i=r.warning,a=e;return a=i?o(a,"warning",i):u(a,"warning"),a=Object.keys(n).length?o(a,"syncWarnings",n):u(a,"syncWarnings")}),t);return function e(t){return t.plugin=function(t){var r=this;return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"NONE"},u=function(r,n){var u=a(r,n),c=t[n](u,i,a(e,n));return c!==u?o(r,n,c):r},c=r(e,i),s=i&&i.meta&&i.meta.form;return s?t[s]?u(c,s):c:Object.keys(t).reduce(u,c)})},t}(function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"NONE"},i=r&&r.meta&&r.meta.form;if(!i||!g(r))return t;if(r.type===d.r&&r.meta&&r.meta.form)return r.meta.form.reduce(function(e,t){return O(e,t)},t);var u=a(t,i),c=e(u,r);return c===u?t:o(t,i,c)}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1],r=R[t.type];return r?r(e,t):e}))}(y.a),E=r(718),w=r(19),S=r(28),T=(r(326),r(51));function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F,P={timeSeries:null,loadingTimeSeries:!1,applications:null,loadingApplications:!1,folders:null,loadingFolders:!1,summary:null,loadingSummary:!1,arrayCapacity:null,loadingArrayCapacity:!1,pools:null,loadingPools:!1,topPoolsTimeSeries:null,loadingTopPoolsTimeSeries:!1,volumes:null,loadingVolumes:!1},_=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})((R(O={},S.i,function(){return P}),R(O,T.o,function(){return P}),O),Object(w.createReducersForAction)({type:T.p,stateKey:"summary"}),Object(w.createReducersForAction)({type:T.l,stateKey:"applications"}),Object(w.createReducersForAction)({type:T.n,stateKey:"folders"}),Object(w.createReducersForAction)({type:T.q,stateKey:"timeSeries"}),Object(w.createReducersForAction)({type:T.m,stateKey:"arrayCapacity"}),Object(w.createReducersForAction)({type:T.s,stateKey:"topPoolsTimeSeries"}));function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={timeSeries:null,loadingTimeSeries:!1,applications:null,loadingApplications:!1,summary:null,loadingSummary:!1,volumes:null,loadingVolumes:!1},A=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})((C(F={},S.i,function(){return x}),C(F,T.f,function(){return x}),F),Object(w.createReducersForAction)({type:T.g,stateKey:"summary"}),Object(w.createReducersForAction)({type:T.e,stateKey:"applications"}),Object(w.createReducersForAction)({type:T.h,stateKey:"timeSeries"}));var k=r(202),I={poolContext:void 0,folderContext:void 0,objectRelationships:void 0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments[1],r={poolContext:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments[1],r=_[t.type];return r?r(e,t):e}(e.poolContext,t),folderContext:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments[1],r=A[t.type];return r?r(e,t):e}(e.folderContext,t),objectRelationships:Object(k.a)(e.objectRelationships,t)};return Object.keys(r).reduce(function(t,n){return t||e[n]!==r[n]},!1)?r:e},N=(E.a,r(234)),q=r(343),D=r(92),W=null;var B={caseStatus:null,justMine:!1,priority:0,startDate:null,endDate:null,textQuery:"",hideAutoCases:!1};var H=Object(u.combineReducers)({filtering:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments[1];switch(t.type){case S.i:return{};case D.v:return Object.assign({},e,{caseStatus:t.caseStatus});case D.u:return Object.assign({},e,{priority:t.priority});case D.t:return Object.assign({},e,t.filterParams)}return e},cases:q.b,kcs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;switch(arguments[1].type){case S.i:return{};case D.n:case D.m:return e}return e},core:N.b});var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var J={assets:{},isloading:!1},M=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"COPY_ARRAY_DATA",function(e,t){var r=t.assets;return L({},e,{assets:r})});var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments[1],r=M[t.type];return r?r(e,t):e},V=r(36),Y=r(665),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var Q=z({},Object(w.getInitialState)("bulletins")),G=z(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},Y.b,function(){return Q}),Object(w.createReducersForAction)({type:Y.a,stateKey:"bulletins"}));function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments[1],r=G[t.type];return r?r(e,t):e}var Z=Object(w.createSelector)(function(e){return e.bulletins},"bulletins"),$=r(1),ee=r.n($),te=r(17),re=r(8),ne=r.n(re),ie=r(40),ae=r(344),oe=r(666),ue=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var ce=!1,se=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={open:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,$["Component"]),ue(t,[{key:"componentDidMount",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(i,a){try{var o=t[i](a),u=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!ce){e.next=2;break}return e.abrupt("return");case 2:if(![/settings\/admin\/bulletins/,/user\/bulletins/].some(function(e){return window.location.pathname.match(e)})){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,Object(ae.a)()(Object(ie.getStore)().dispatch);case 8:(t=e.sent)&&t.length&&(this.setState({open:!0}),ce=!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.error("Error loading bulletins",e.t0);case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.open?ee.a.createElement(oe.default,{closeModal:function(){return e.setState({open:!1})},bulletins:this.props.bulletins}):null}}]),t}();se.displayName="BulletinController",se.propTypes={bulletins:ne.a.arrayOf(ne.a.shape({id:ne.a.number.isRequired,contents:ne.a.string.isRequired}))};Object(te.connect)(function(e){return Z(e)},null)(se);var le=r(12),fe=r.n(le),de=r(32),pe=r.n(de),ve=r(31),ye=r.n(ve),be=r(14),me=r.n(be),he=r(667),ge=r.n(he),Oe=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var je=me.a.bind(ge.a),Ee=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return fe()(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,$["Component"]),Oe(t,[{key:"componentDidMount",value:function(){this.props.fetchAllBulletins()}},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this.props,t=e.bulletins,r=e.loadingBulletins;return ee.a.createElement("div",null,ee.a.createElement("h2",{style:{margin:"10px 30px"}},"Bulletins"),ee.a.createElement(pe.a,{loading:r},function(){return t&&t.length?t.map(function(e){var t=e.contents,r=e.id;return ee.a.createElement(ye.a,{key:r},ee.a.createElement("div",{className:je("bulletin"),dangerouslySetInnerHTML:{__html:t}}))}):ee.a.createElement("div",{className:"card"},ee.a.createElement("div",{className:"card-section"},ee.a.createElement("h1",null,"You haven't received any bulletins.")))}))}}]),t}();Ee.displayName="Bulletins",Ee.propTypes={loadingBulletins:ne.a.bool,bulletins:ne.a.arrayOf(ne.a.shape({id:ne.a.number.isRequired,contents:ne.a.string.isRequired})),reset:ne.a.func.isRequired,fetchAllBulletins:ne.a.func.isRequired},Ee.defaultProps={};Object(te.connect)(function(e){return Z(e)},{reset:ae.c,fetchAllBulletins:ae.b})(Ee);var we,Se=r(630),Te=r(366),Re=r(596),Fe=r(170),Pe=r(58),_e=Object(w.actionNamespacer)("FOLDERS_COLLECTION"),Ce=_e("LIST_FETCH"),xe=_e("CAPACITY_FETCH"),Ae=_e("THROUGHPUT_FETCH"),ke=_e("LATENCY_FETCH"),Ie=_e("RESET");function Ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ne={capacity:null,loadingCapacity:!1,performance:null,loadingPerformance:!1,loadedPerformance:!1,folders:null,loadingFolders:!1,loadedFolders:!1},qe=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})((Ke(we={},S.i,function(){return Ne}),Ke(we,Ie,function(){return Ne}),we),Object(w.createReducersForAction)({type:xe,stateKey:"capacity"}),Object(w.createReducersForAction)({type:Ae,stateKey:"throughputTimeseries"}),Object(w.createReducersForAction)({type:ke,stateKey:"latencyTimeseries"}),Object(w.createReducersForAction)({type:Ce,stateKey:"folders"}));var De=function(e){return Object(Pe.a)(e).folderCollection},We=(Object(w.createSelector)(De,"capacity"),Object(w.createSelector)(De,"throughputTimeseries"),Object(w.createSelector)(De,"latencyTimeseries"),Object(w.createSelector)(De,"folders"),r(224)),Be=r(129),He=r(135),Le=r(325),Je=r(664),Me=r(87),Ue=r(669),Ve=r(728),Ye=Object(u.combineReducers)({user:Ve.a}),ze=Object(u.combineReducers)({address:Te.c,poolCollection:Re.b,poolDetail:Fe.b,folderCollection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments[1],r=qe[t.type];return r?r(e,t):e},volumeCollection:We.b,volumeDetail:Be.b,groupCollection:Je.a,arrayCollection:He.b,arrayDetail:Le.default,inventory:Me.a,resellerArrays:Ue.b,settings:Ye}),Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ge=function(e){return Object(u.combineReducers)(Qe({capacityReport:K,supportTab:H,user:V.reducer,objectRelationships:k.a,arrayList:U,form:j,bulletins:X,preferences:Se.a,nimble:ze},e))},Xe=r(24),Ze=r.n(Xe),$e=r(620),et=function(){return function(e){return function(t){var r=Ze.a;return r&&$e.a.get(t.type)&&r.event("progeny",t.type,t),e(t)}}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(u.createStore)(Ge(),e,Object(c.composeWithDevTools)({name:"nimble"})(Object(u.applyMiddleware)(f,et)));return t.asyncReducers={},Object(ie.default)(t),t},rt=r(49),nt=r(679);window.nimbleShims.jQuery_1_11_1,t.default=function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(i,a){try{var o=t[i](a),u=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=tt(),e.next=3,new Promise(function(e,t){try{Ze.a.on("start",function(){Ze.a.initializeLegacyControllers(),e()}),Ze.a.start()}catch(e){t(e)}});case 3:return e.next=5,Object(nt.d)()(t.dispatch);case 5:return e.t0=t,e.next=8,Object(rt.b)();case 8:e.t1=e.sent,e.t0.dispatch.call(e.t0,e.t1);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=3-40d45abe8f939ea7832d.js.map