(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{5961:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tasks/[id]/[classes]/[fraction]",function(){return r(7027)}])},5018:function(t,e,r){"use strict";r.d(e,{D:function(){return b},M:function(){return y}});var n=r(7568),o=r(4051),i=r.n(o),a=r(1449),c=r(1604),u=r(9669),l=r.n(u),s="http://localhost:3000",f=c.z.object({label:c.z.string(),x:c.z.array(c.z.number()),y:c.z.array(c.z.number())}),p=c.z.object({max_x:c.z.number(),min_x:c.z.number(),max_y:c.z.number(),min_y:c.z.number(),data:c.z.array(f)}),d=c.z.object({dataset:c.z.string(),counts:c.z.array(c.z.number()),length:c.z.number(),benchmark:c.z.string()});function y(t){return(0,a.MaybeAsync)((0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/data/jsons/".concat(t,".json"),{baseURL:s});case 2:return r=e.sent.data,e.abrupt("return",p.parse(r));case 4:case"end":return e.stop()}}),e)}))))}function b(){return(0,a.MaybeAsync)((0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().get("/data/datasets.json",{baseURL:s});case 2:return e=t.sent.data,t.abrupt("return",c.z.array(d).parse(e));case 4:case"end":return t.stop()}}),t)}))))}},7027:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Nt}});var n=r(603),o=r(5893),i=r(7294),a=r(5152),c=r.n(a),u=r(6322),l=r(1524),s=r(1480),f=r(9970),p=r(1075),d=r(7265),y=r(2338),b=r(4835),m=["title","size","color","overrides"];function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function v(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){var r=g((0,d.hQ)(),2)[1],n=t.title,o=void 0===n?"Left":n,a=t.size,c=t.color,u=t.overrides,l=void 0===u?{}:u,s=v(t,m),f=(0,y.vt)({component:r.icons&&r.icons.ChevronLeft?r.icons.ChevronLeft:null},l&&l.Svg?(0,y.hq)(l.Svg):{});return i.createElement(b.Z,h({viewBox:"0 0 24 24",ref:e,title:o,size:a,color:c,overrides:{Svg:f}},s),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"}))}var x=i.forwardRef(O),w=r(1163),S=r(4858),P=r(7430),z=r(4793),C=r(9782);function I(t,e){for(var r=[],n=t;n<e;n++)r.push(n);return r}var E=r(1604),k=r(5018),_=r(8243),N=["item"];function R(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){Z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var $=(0,d.zo)("nav",(function(t){var e=t.$theme,r=e.colors;return L(L({},e.typography.font300),{},{color:r.contentPrimary,listStyleType:"none",marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})}));$.displayName="StyledRoot";var T=(0,d.zo)("li",{});T.displayName="StyledNavItemContainer";var M=(0,d.zo)("a",(function(t){var e=t.$theme;return{color:"inherit",outline:"none",textDecoration:"none",":focus > div":t.$isFocusVisible?{outline:"3px solid ".concat(e.colors.accent),outlineOffset:"-3px",borderLeftColor:"transparent",borderTopColor:"transparent",borderRightColor:"transparent",borderBottomColor:"transparent"}:{outline:"none"}}}));M.displayName="StyledNavLink";var B=(0,d.zo)("div",(function(t){var e,r=t.$active,n=t.$selectable,o=t.$level,i=t.$disabled,a=t.$theme,c=t.$theme,u=c.colors,l=c.sizing,s=(0,_.oo)(u.backgroundPrimary,"0.92")||"",f="rtl"===a.direction?"borderRightWidth":"borderLeftWidth",p="rtl"===a.direction?"borderRightStyle":"borderLeftStyle",d="rtl"===a.direction?"borderRightColor":"borderLeftColor",y="rtl"===a.direction?"paddingRight":"paddingLeft",b="rtl"===a.direction?"paddingLeft":"paddingRight",m=n?"pointer":"default",h=r?u.primary:null,v=n?u.primary:null;return i&&(m="not-allowed",h=u.contentSecondary,v=null),Z(e={backgroundColor:r?u.backgroundInversePrimary:"transparent",backgroundImage:r?"linear-gradient(0deg, ".concat(s,", ").concat(s,")"):null,boxSizing:"border-box"},f,"4px"),Z(e,p,"solid"),Z(e,d,r?u.primary:"transparent"),Z(e,"color",h),Z(e,"cursor",m),Z(e,"paddingTop",l.scale500),Z(e,"paddingBottom",l.scale500),Z(e,y,"calc(".concat(l.scale800," * ").concat(o,")")),Z(e,b,l.scale500),Z(e,":hover",{color:v}),Z(e,":focus",{color:n?u.primary:null}),e}));B.displayName="StyledNavItemElement";var D=(0,d.Le)(B,(function(t){return function(e){e.item;var r=R(e,N);return i.createElement(t,r)}})),F=(0,d.zo)("ul",{listStyleType:"none",marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0});function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}F.displayName="StyledSubNavContainer";var U=["item","overrides","itemMemoizationComparator"];function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(this,arguments)}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function J(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=et(t);if(e){var o=et(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Y(this,r)}}function Y(t,e){if(e&&("object"===V(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return tt(t)}function tt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}function rt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var nt=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(a,t);var e,r,n,o=Q(a);function a(){var t;K(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return rt(tt(t=o.call.apply(o,[this].concat(r))),"handleClick",(function(e){var r=t.props,n=r.item,o=r.onSelect;"function"===typeof o&&o({item:n,event:e})})),rt(tt(t),"handleKeyDown",(function(e){var r=t.props,n=r.item,o=r.onSelect;"Enter"===e.key&&"function"===typeof o&&o({item:n,event:e})})),t}return e=a,(r=[{key:"render",value:function(){var t=this.props,e=t.item,r=t.overrides,n=(t.itemMemoizationComparator,J(t,U)),o=G((0,y.jb)(r.NavItem,D),2),a=o[0],c=o[1],u=G((0,y.jb)(r.NavLink,M),2),l=u[0],s=u[1],f={tabIndex:e.disabled?-1:void 0};return i.createElement(l,W({$as:e.disabled?"span":"a",href:e.disabled?null:e.itemId},f,n,s,e.itemId&&!e.disabled?{onClick:this.handleClick,onKeyDown:this.handleKeyDown}:{}),i.createElement(a,W({item:e},n,c),e.title))}}])&&H(e.prototype,r),n&&H(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i.Component);function ot(t,e){return!!e.itemMemoizationComparator&&e.itemMemoizationComparator(t,e)}rt(nt,"defaultProps",{overrides:{},onSelect:function(){}});var it=i.memo(nt,ot),at=r(3495);function ct(t){return ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(t)}function ut(){return ut=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ut.apply(this,arguments)}function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(r),!0).forEach((function(e){jt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return pt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function bt(t,e){return bt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},bt(t,e)}function mt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=gt(t);if(e){var o=gt(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ht(this,r)}}function ht(t,e){if(e&&("object"===ct(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return vt(t)}function vt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gt(t){return gt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},gt(t)}function jt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Ot=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&bt(t,e)}(a,t);var e,r,n,o=mt(a);function a(){var t;dt(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return jt(vt(t=o.call.apply(o,[this].concat(r))),"state",{isFocusVisible:!1}),jt(vt(t),"handleFocus",(function(e){(0,at.E)(e)&&t.setState({isFocusVisible:!0})})),jt(vt(t),"handleBlur",(function(e){!1!==t.state.isFocusVisible&&t.setState({isFocusVisible:!1})})),jt(vt(t),"activePredicate",(function(e){return e.itemId===t.props.activeItemId})),t}return e=a,(r=[{key:"render",value:function(){var t=this,e=this.props,r=e.activeItemId,n=e.activePredicate,o=e.items,a=e.onChange,c=e.overrides,u=e.mapItem,l=ft((0,y.jb)(c.Root,$),2),s=l[0],f=l[1],p=ft((0,y.jb)(c.NavItemContainer,T),2),d=p[0],b=p[1],m=ft((0,y.jb)(c.SubNavContainer,F),2),h=m[0],v=m[1],g=function e(o,u,l,s){"function"===typeof s&&(o=function t(e){var r=[];return e.subNav&&(r=e.subNav.map(t)),s(st(st({},e),{},{subNav:r}))}(o));var f={$active:n?n(o,r):t.activePredicate(o),$level:u,$selectable:!!o.itemId,$disabled:o.disabled||!1};return i.createElement(d,ut({key:"".concat(l,"-level").concat(u,"-").concat("string"===typeof o.title?o.title:o.itemId||"")},f,b,{onFocus:(0,at.Ah)(b,t.handleFocus),onBlur:(0,at.Z5)(b,t.handleBlur)}),i.createElement(i.Fragment,null,i.createElement(it,ut({$isFocusVisible:t.state.isFocusVisible,item:o,itemMemoizationComparator:t.props.itemMemoizationComparator,onSelect:a,overrides:c},f)),o.subNav?i.createElement(h,ut({role:"list"},f,v),o.subNav.map((function(t,r){return e(t,u+1,l)}))):null))};return i.createElement(s,ut({role:"navigation","data-baseweb":"side-navigation"},f),i.createElement(h,{role:"list"},o.map((function(t,e){return g(t,1,e,u)}))))}}])&&yt(e.prototype,r),n&&yt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i.Component);jt(Ot,"defaultProps",{activeItemId:"/",activePredicate:null,items:[],overrides:{},mapItem:null});var xt=r(2674),wt=r(1664),St=r.n(wt),Pt=r(5166),zt=r(104),Ct=c()((function(){return Promise.all([r.e(960),r.e(82)]).then(r.bind(r,9082))}),{loadableGenerated:{webpack:function(){return[9082]}},ssr:!1}),It=function(t){return"#variant-".concat(t)},Et=z.U(function(){return(0,C.$)(I,arguments)}(1,11),(function(t){return{title:"Variant ".concat(t),itemId:It(t)}})),kt=E.z.object({id:E.z.string(),classes:E.z.number(),fraction:E.z.number()}),_t=["initial","initial","400px"];function Nt(){var t=(0,n.Z)(i.useState(!0),2),e=t[0],r=t[1],a=(0,n.Z)(i.useState(P.Nothing),2),c=a[0],d=a[1],y=(0,n.Z)(i.useState(P.Nothing),2),b=y[0],m=y[1],h=(0,n.Z)(i.useState(1),2),v=h[0],g=h[1],j=(0,w.useRouter)();i.useEffect((function(){var t=P.Maybe.encase((function(){var t=j.query,e=t.id,r=t.classes,n=t.fraction,o={id:e,classes:parseInt(r),fraction:parseFloat(n)};return kt.parse(o)}));m(t)}),[j]),i.useEffect((function(){b.ifJust((function(t){(0,k.M)("".concat(t.id,"_").concat(t.classes,"_").concat(t.fraction,"_").concat(v)).run().then((function(t){d(t),r(!1)}))}))}),[b,v]);var O=function(t){var e=t.children;return(0,o.jsx)(u.Z,{flexGridColumnCount:[1,1,2],flexGridColumnGap:"scale300",flexDirection:["column-reverse","column-reverse","row"],children:e})},z=(0,o.jsxs)(l.ZP,{maxWidth:_t,children:[(0,o.jsx)(Ot,{items:Et,activeItemId:It(v),onChange:function(t){var e,r=t.event,n=t.item;r.preventDefault(),g((e=n.itemId,parseInt(e.split("-")[1])))},overrides:{NavItemContainer:{style:function(t){var e=t.$theme;return{outline:"0.1px dashed ".concat(e.colors.mono500),transition:"background .1s ease-in-out",":hover":{backgroundColor:e.colors.mono300}}}}}}),(0,o.jsx)(S.aM,{color:"gray",children:"* If there are more than 100 normal data points, 100 random points are sampled for visualization. If there are more than 100 outliers, we sample an equal amount of normal points."})]}),C=(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(s.Z,{marginTop:"scale200",marginBottom:"scale200",children:(0,o.jsx)(xt.Z,{animation:!0,height:"36px"})}),(0,o.jsxs)(O,{children:[(0,o.jsx)(l.ZP,{maxWidth:_t,children:(0,o.jsx)(xt.Z,{animation:!0,height:"calc(100vh - 225px)"})}),(0,o.jsx)(l.ZP,{children:(0,o.jsx)(xt.Z,{animation:!0,height:"calc(100vh - 225px)"})})]})]}),I=function(t){return(0,o.jsx)(St(),{href:t.href,passHref:!0,children:(0,o.jsx)(Pt.F,{children:t.text})})},E=(0,o.jsx)(zt.Z,{children:(0,o.jsxs)(S.kd,{children:["Could not load task, please ",(0,o.jsx)(I,{href:"/",text:"go back"})," and try again. If the problem persists, please"," ",(0,o.jsx)(I,{href:"https://github.com/outlier-detection/utsd/issues/new",text:"raise an issue on Github"})," to describe your problem."]})});return(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(s.Z,{maxWidth:"1680px",margin:"auto",children:e?C:b.caseOf({Just:function(t){return c.caseOf({Just:function(e){return function(t,e,r,n){return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsxs)(S.aM,{style:{textAlign:"center",padding:"7px 15px",border:"1px dashed"},children:[(0,o.jsx)("b",{children:t})," with ",100*r,"% of outliers and ",e," normal ",e>1?"classes":"class"," *"]}),(0,o.jsx)(s.Z,{maxWidth:_t,display:"flex",alignItems:"center",justifyContent:["stretch"],children:(0,o.jsx)(f.Z,{style:{width:"100%",marginBottom:"16px"},size:p.NO.compact,onClick:function(){return j.push({pathname:"/",query:{classes:e,fraction:r}})},startEnhancer:x,children:"Back to list of tasks"})}),(0,o.jsxs)(O,{children:[z,(0,o.jsx)(l.ZP,{marginTop:["0","0","-52px"],children:(0,o.jsx)(Ct,{dataset:n})})]})]})}(t.id,t.classes,t.fraction,e)},Nothing:function(){return E}})},Nothing:function(){return E}})})})}},1010:function(t,e,r){"use strict";function n(t,e,r){return t.reduce((function(n,o,i){var a=r?e(o,i,t):e(o);return!0===a.hasMany?n.push.apply(n,a.next):!0===a.hasNext&&n.push(a.next),n}),[])}r.d(e,{a:function(){return n}})},4793:function(t,e,r){"use strict";r.d(e,{U:function(){return a}});var n=r(9782),o=r(1010),i=r(6535);function a(){return(0,n.$)(c(!1),arguments,a.lazy)}var c=function(t){return function(e,r){return(0,o.a)(e,t?a.lazyIndexed(r):a.lazy(r),t)}},u=function(t){return function(e){return function(r,n,o){return{done:!1,hasNext:!0,next:t?e(r,n,o):e(r)}}}};!function(t){t.indexed=function(){return(0,n.$)(c(!0),arguments,t.lazyIndexed)},t.lazy=u(!1),t.lazyIndexed=(0,i.H)(u(!0))}(a||(a={}))}},function(t){t.O(0,[703,774,888,179],(function(){return e=5961,t(t.s=e);var e}));var e=t.O();_N_E=e}]);