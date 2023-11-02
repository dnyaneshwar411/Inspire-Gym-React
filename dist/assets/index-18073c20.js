function pm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wd={exports:{}},js={},_d={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),gm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Em=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),Im=Symbol.for("react.suspense"),km=Symbol.for("react.memo"),Cm=Symbol.for("react.lazy"),wu=Symbol.iterator;function Tm(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var Ed={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,Id={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Ed}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kd(){}kd.prototype=Jn.prototype;function rl(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Ed}var il=rl.prototype=new kd;il.constructor=rl;Sd(il,Jn.prototype);il.isPureReactComponent=!0;var _u=Array.isArray,Cd=Object.prototype.hasOwnProperty,sl={current:null},Td={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Cd.call(t,r)&&!Td.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ii,type:e,key:s,ref:o,props:i,_owner:sl.current}}function xm(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eu=/\/+/g;function uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function Mi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ii:case gm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+uo(o,0):r,_u(i)?(n="",e!=null&&(n=e.replace(Eu,"$&/")+"/"),Mi(i,t,n,"",function(u){return u})):i!=null&&(ol(i)&&(i=xm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",_u(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+uo(s,a);o+=Mi(s,t,n,l,i)}else if(l=Tm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+uo(s,a++),o+=Mi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yi(e,t,n){if(e==null)return e;var r=[],i=0;return Mi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},bi={transition:null},Rm={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:bi,ReactCurrentOwner:sl};j.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Jn;j.Fragment=vm;j.Profiler=wm;j.PureComponent=rl;j.StrictMode=ym;j.Suspense=Im;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=sl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Cd.call(t,l)&&!Td.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ii,type:e.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_m,_context:e},e.Consumer=e};j.createElement=xd;j.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Sm,render:e}};j.isValidElement=ol;j.lazy=function(e){return{$$typeof:Cm,_payload:{_status:-1,_result:e},_init:Nm}};j.memo=function(e,t){return{$$typeof:km,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return he.current.useCallback(e,t)};j.useContext=function(e){return he.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return he.current.useDeferredValue(e)};j.useEffect=function(e,t){return he.current.useEffect(e,t)};j.useId=function(){return he.current.useId()};j.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return he.current.useMemo(e,t)};j.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};j.useRef=function(e){return he.current.useRef(e)};j.useState=function(e){return he.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return he.current.useTransition()};j.version="18.2.0";_d.exports=j;var S=_d.exports;const Pd=mm(S),Om=pm({__proto__:null,default:Pd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am=S,Lm=Symbol.for("react.element"),jm=Symbol.for("react.fragment"),Dm=Object.prototype.hasOwnProperty,Mm=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bm={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Dm.call(t,r)&&!bm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lm,type:e,key:s,ref:o,props:i,_owner:Mm.current}}js.Fragment=jm;js.jsx=Nd;js.jsxs=Nd;wd.exports=js;var c=wd.exports,Yo={},Rd={exports:{}},xe={},Od={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var A=T.length;T.push(O);e:for(;0<A;){var q=A-1>>>1,Z=T[q];if(0<i(Z,O))T[q]=O,T[A]=Z,A=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],A=T.pop();if(A!==O){T[0]=A;e:for(var q=0,Z=T.length,gi=Z>>>1;q<gi;){var Kt=2*(q+1)-1,lo=T[Kt],Gt=Kt+1,vi=T[Gt];if(0>i(lo,A))Gt<Z&&0>i(vi,lo)?(T[q]=vi,T[Gt]=A,q=Gt):(T[q]=lo,T[Kt]=A,q=Kt);else if(Gt<Z&&0>i(vi,A))T[q]=vi,T[Gt]=A,q=Gt;else break e}}return O}function i(T,O){var A=T.sortIndex-O.sortIndex;return A!==0?A:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,p=null,g=3,y=!1,w=!1,_=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(T){if(_=!1,m(T),!w)if(n(l)!==null)w=!0,oo(I);else{var O=n(u);O!==null&&ao(v,O.startTime-T)}}function I(T,O){w=!1,_&&(_=!1,h(P),P=-1),y=!0;var A=g;try{for(m(O),p=n(l);p!==null&&(!(p.expirationTime>O)||T&&!De());){var q=p.callback;if(typeof q=="function"){p.callback=null,g=p.priorityLevel;var Z=q(p.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),m(O)}else r(l);p=n(l)}if(p!==null)var gi=!0;else{var Kt=n(u);Kt!==null&&ao(v,Kt.startTime-O),gi=!1}return gi}finally{p=null,g=A,y=!1}}var C=!1,x=null,P=-1,b=5,L=-1;function De(){return!(e.unstable_now()-L<b)}function or(){if(x!==null){var T=e.unstable_now();L=T;var O=!0;try{O=x(!0,T)}finally{O?ar():(C=!1,x=null)}}else C=!1}var ar;if(typeof d=="function")ar=function(){d(or)};else if(typeof MessageChannel<"u"){var yu=new MessageChannel,hm=yu.port2;yu.port1.onmessage=or,ar=function(){hm.postMessage(null)}}else ar=function(){N(or,0)};function oo(T){x=T,C||(C=!0,ar())}function ao(T,O){P=N(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,oo(I))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var A=g;g=O;try{return T()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=g;g=T;try{return O()}finally{g=A}},e.unstable_scheduleCallback=function(T,O,A){var q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?q+A:q):A=q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,T={id:f++,callback:O,priorityLevel:T,startTime:A,expirationTime:Z,sortIndex:-1},A>q?(T.sortIndex=A,t(u,T),n(l)===null&&T===n(u)&&(_?(h(P),P=-1):_=!0,ao(v,A-q))):(T.sortIndex=Z,t(l,T),w||y||(w=!0,oo(I))),T},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(T){var O=g;return function(){var A=g;g=O;try{return T.apply(this,arguments)}finally{g=A}}}})(Ad);Od.exports=Ad;var Um=Od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=S,Te=Um;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jd=new Set,Lr={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)jd.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=Object.prototype.hasOwnProperty,Fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Iu={};function zm(e){return Jo.call(Iu,e)?!0:Jo.call(Su,e)?!1:Fm.test(e)?Iu[e]=!0:(Su[e]=!0,!1)}function Bm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,n,r){if(t===null||typeof t>"u"||Bm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,ll);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,ll);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,ll);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,n,i,r)&&(n=null),r||i===null?zm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),In=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),cl=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),dl=Symbol.for("react.forward_ref"),Zo=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),bd=Symbol.for("react.offscreen"),ku=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,co;function gr(e){if(co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);co=t&&t[1]||""}return`
`+co+e}var fo=!1;function ho(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Vm(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=ho(e.type,!1),e;case 11:return e=ho(e.type.render,!1),e;case 1:return e=ho(e.type,!0),e;default:return""}}function ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case In:return"Portal";case Xo:return"Profiler";case cl:return"StrictMode";case Zo:return"Suspense";case ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:ta(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ta(e(t))}catch{}}return null}function Hm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(t);case 8:return t===cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e){var t=Ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=Wm(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function na(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zd(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function ra(e,t){zd(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(vr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Bd(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $d(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$d(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,Vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Km=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(Gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function la(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,bn=null,Un=null;function Nu(e){if(e=ai(e)){if(typeof ca!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Fs(t),ca(e.stateNode,e.type,t))}}function Kd(e){bn?Un?Un.push(e):Un=[e]:bn=e}function Gd(){if(bn){var e=bn,t=Un;if(Un=bn=null,Nu(e),t)for(e=0;e<t.length;e++)Nu(t[e])}}function qd(e,t){return e(t)}function Qd(){}var po=!1;function Yd(e,t,n){if(po)return e(t,n);po=!0;try{return qd(e,t,n)}finally{po=!1,(bn!==null||Un!==null)&&(Qd(),Gd())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Fs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var da=!1;if(lt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){da=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{da=!1}function qm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ir=!1,Zi=null,es=!1,fa=null,Qm={onError:function(e){Ir=!0,Zi=e}};function Ym(e,t,n,r,i,s,o,a,l){Ir=!1,Zi=null,qm.apply(Qm,arguments)}function Jm(e,t,n,r,i,s,o,a,l){if(Ym.apply(this,arguments),Ir){if(Ir){var u=Zi;Ir=!1,Zi=null}else throw Error(E(198));es||(es=!0,fa=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(gn(e)!==e)throw Error(E(188))}function Xm(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ru(i),e;if(s===r)return Ru(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Xd(e){return e=Xm(e),e!==null?Zd(e):null}function Zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zd(e);if(t!==null)return t;e=e.sibling}return null}var ef=Te.unstable_scheduleCallback,Ou=Te.unstable_cancelCallback,Zm=Te.unstable_shouldYield,eg=Te.unstable_requestPaint,Q=Te.unstable_now,tg=Te.unstable_getCurrentPriorityLevel,pl=Te.unstable_ImmediatePriority,tf=Te.unstable_UserBlockingPriority,ts=Te.unstable_NormalPriority,ng=Te.unstable_LowPriority,nf=Te.unstable_IdlePriority,Ds=null,Ge=null;function rg(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:og,ig=Math.log,sg=Math.LN2;function og(e){return e>>>=0,e===0?32:31-(ig(e)/sg|0)|0}var Si=64,Ii=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=yr(a):(s&=o,s!==0&&(r=yr(s)))}else o=n&~i,o!==0?r=yr(o):s!==0&&(r=yr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function ag(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ze(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ag(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function sf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,gl,af,lf,uf,pa=!1,ki=[],Nt=null,Rt=null,Ot=null,Mr=new Map,br=new Map,_t=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function cr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ai(t),t!==null&&gl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dg(e,t,n,r,i){switch(t){case"focusin":return Nt=cr(Nt,e,t,n,r,i),!0;case"dragenter":return Rt=cr(Rt,e,t,n,r,i),!0;case"mouseover":return Ot=cr(Ot,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mr.set(s,cr(Mr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,br.set(s,cr(br.get(s)||null,e,t,n,r,i)),!0}return!1}function cf(e){var t=Jt(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jd(n),t!==null){e.blockedOn=t,uf(e.priority,function(){af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ma(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ua=r,n.target.dispatchEvent(r),ua=null}else return t=ai(n),t!==null&&gl(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){Ui(e)&&n.delete(t)}function fg(){pa=!1,Nt!==null&&Ui(Nt)&&(Nt=null),Rt!==null&&Ui(Rt)&&(Rt=null),Ot!==null&&Ui(Ot)&&(Ot=null),Mr.forEach(Lu),br.forEach(Lu)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,fg)))}function Ur(e){function t(i){return dr(i,e)}if(0<ki.length){dr(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&dr(Nt,e),Rt!==null&&dr(Rt,e),Ot!==null&&dr(Ot,e),Mr.forEach(t),br.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)cf(n),n.blockedOn===null&&_t.shift()}var Fn=pt.ReactCurrentBatchConfig,rs=!0;function hg(e,t,n,r){var i=M,s=Fn.transition;Fn.transition=null;try{M=1,vl(e,t,n,r)}finally{M=i,Fn.transition=s}}function pg(e,t,n,r){var i=M,s=Fn.transition;Fn.transition=null;try{M=4,vl(e,t,n,r)}finally{M=i,Fn.transition=s}}function vl(e,t,n,r){if(rs){var i=ma(e,t,n,r);if(i===null)Co(e,t,r,is,n),Au(e,r);else if(dg(i,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<cg.indexOf(e)){for(;i!==null;){var s=ai(i);if(s!==null&&of(s),s=ma(e,t,n,r),s===null&&Co(e,t,r,is,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Co(e,t,r,null,n)}}var is=null;function ma(e,t,n,r){if(is=null,e=hl(r),e=Jt(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function df(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case pl:return 1;case tf:return 4;case ts:case ng:return 16;case nf:return 536870912;default:return 16}default:return 16}}var Tt=null,yl=null,Fi=null;function ff(){if(Fi)return Fi;var e,t=yl,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Fi=i.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function ju(){return!1}function Pe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ci:ju,this.isPropagationStopped=ju,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Pe(Xn),oi=K({},Xn,{view:0,detail:0}),mg=Pe(oi),go,vo,fr,Ms=K({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(go=e.screenX-fr.screenX,vo=e.screenY-fr.screenY):vo=go=0,fr=e),go)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),Du=Pe(Ms),gg=K({},Ms,{dataTransfer:0}),vg=Pe(gg),yg=K({},oi,{relatedTarget:0}),yo=Pe(yg),wg=K({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=Pe(wg),Eg=K({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=Pe(Eg),Ig=K({},Xn,{data:0}),Mu=Pe(Ig),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tg[e])?!!t[e]:!1}function _l(){return xg}var Pg=K({},oi,{key:function(e){if(e.key){var t=kg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ng=Pe(Pg),Rg=K({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Pe(Rg),Og=K({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Ag=Pe(Og),Lg=K({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Pe(Lg),Dg=K({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=Pe(Dg),bg=[9,13,27,32],El=lt&&"CompositionEvent"in window,kr=null;lt&&"documentMode"in document&&(kr=document.documentMode);var Ug=lt&&"TextEvent"in window&&!kr,hf=lt&&(!El||kr&&8<kr&&11>=kr),Uu=String.fromCharCode(32),Fu=!1;function pf(e,t){switch(e){case"keyup":return bg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Fg(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(Fu=!0,Uu);case"textInput":return e=t.data,e===Uu&&Fu?null:e;default:return null}}function zg(e,t){if(Cn)return e==="compositionend"||!El&&pf(e,t)?(e=ff(),Fi=yl=Tt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hf&&t.locale!=="ko"?null:t.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bg[e.type]:t==="textarea"}function gf(e,t,n,r){Kd(r),t=ss(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Fr=null;function $g(e){xf(e,0)}function bs(e){var t=Pn(e);if(Fd(t))return e}function Vg(e,t){if(e==="change")return t}var vf=!1;if(lt){var wo;if(lt){var _o="oninput"in document;if(!_o){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),_o=typeof Bu.oninput=="function"}wo=_o}else wo=!1;vf=wo&&(!document.documentMode||9<document.documentMode)}function $u(){Cr&&(Cr.detachEvent("onpropertychange",yf),Fr=Cr=null)}function yf(e){if(e.propertyName==="value"&&bs(Fr)){var t=[];gf(t,Fr,e,hl(e)),Yd($g,t)}}function Hg(e,t,n){e==="focusin"?($u(),Cr=t,Fr=n,Cr.attachEvent("onpropertychange",yf)):e==="focusout"&&$u()}function Wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(Fr)}function Kg(e,t){if(e==="click")return bs(t)}function Gg(e,t){if(e==="input"||e==="change")return bs(t)}function qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:qg;function zr(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jo.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _f(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qg(e){var t=_f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wf(n.ownerDocument.documentElement,n)){if(r!==null&&Sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Hu(n,s);var o=Hu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yg=lt&&"documentMode"in document&&11>=document.documentMode,Tn=null,ga=null,Tr=null,va=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;va||Tn==null||Tn!==Xi(r)||(r=Tn,"selectionStart"in r&&Sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&zr(Tr,r)||(Tr=r,r=ss(ga,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function Ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},Eo={},Ef={};lt&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Us(e){if(Eo[e])return Eo[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ef)return Eo[e]=t[n];return e}var Sf=Us("animationend"),If=Us("animationiteration"),kf=Us("animationstart"),Cf=Us("transitionend"),Tf=new Map,Ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Tf.set(e,t),mn(t,[e])}for(var So=0;So<Ku.length;So++){var Io=Ku[So],Jg=Io.toLowerCase(),Xg=Io[0].toUpperCase()+Io.slice(1);Vt(Jg,"on"+Xg)}Vt(Sf,"onAnimationEnd");Vt(If,"onAnimationIteration");Vt(kf,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Cf,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function Gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jm(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gu(i,a,u),s=l}}}if(es)throw e=fa,es=!1,fa=null,e}function z(e,t){var n=t[Sa];n===void 0&&(n=t[Sa]=new Set);var r=e+"__bubble";n.has(r)||(Pf(t,e,2,!1),n.add(r))}function ko(e,t,n){var r=0;t&&(r|=4),Pf(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[xi]){e[xi]=!0,jd.forEach(function(n){n!=="selectionchange"&&(Zg.has(n)||ko(n,!1,e),ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,ko("selectionchange",!1,t))}}function Pf(e,t,n,r){switch(df(t)){case 1:var i=hg;break;case 4:i=pg;break;default:i=vl}n=i.bind(null,t,n,e),i=void 0,!da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Co(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Yd(function(){var u=s,f=hl(n),p=[];e:{var g=Tf.get(e);if(g!==void 0){var y=wl,w=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":y=Ng;break;case"focusin":w="focus",y=yo;break;case"focusout":w="blur",y=yo;break;case"beforeblur":case"afterblur":y=yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ag;break;case Sf:case If:case kf:y=_g;break;case Cf:y=jg;break;case"scroll":y=mg;break;case"wheel":y=Mg;break;case"copy":case"cut":case"paste":y=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bu}var _=(t&4)!==0,N=!_&&e==="scroll",h=_?g!==null?g+"Capture":null:g;_=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=Dr(d,h),v!=null&&_.push($r(d,v,m)))),N)break;d=d.return}0<_.length&&(g=new y(g,w,null,n,f),p.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ua&&(w=n.relatedTarget||n.fromElement)&&(Jt(w)||w[ut]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Jt(w):null,w!==null&&(N=gn(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Du,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(_=bu,v="onPointerLeave",h="onPointerEnter",d="pointer"),N=y==null?g:Pn(y),m=w==null?g:Pn(w),g=new _(v,d+"leave",y,n,f),g.target=N,g.relatedTarget=m,v=null,Jt(f)===u&&(_=new _(h,d+"enter",w,n,f),_.target=m,_.relatedTarget=N,v=_),N=v,y&&w)t:{for(_=y,h=w,d=0,m=_;m;m=Sn(m))d++;for(m=0,v=h;v;v=Sn(v))m++;for(;0<d-m;)_=Sn(_),d--;for(;0<m-d;)h=Sn(h),m--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Sn(_),h=Sn(h)}_=null}else _=null;y!==null&&qu(p,g,y,_,!1),w!==null&&N!==null&&qu(p,N,w,_,!0)}}e:{if(g=u?Pn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var I=Vg;else if(zu(g))if(vf)I=Gg;else{I=Wg;var C=Hg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=Kg);if(I&&(I=I(e,u))){gf(p,I,n,f);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&ia(g,"number",g.value)}switch(C=u?Pn(u):window,e){case"focusin":(zu(C)||C.contentEditable==="true")&&(Tn=C,ga=u,Tr=null);break;case"focusout":Tr=ga=Tn=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,Wu(p,n,f);break;case"selectionchange":if(Yg)break;case"keydown":case"keyup":Wu(p,n,f)}var x;if(El)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cn?pf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hf&&n.locale!=="ko"&&(Cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cn&&(x=ff()):(Tt=f,yl="value"in Tt?Tt.value:Tt.textContent,Cn=!0)),C=ss(u,P),0<C.length&&(P=new Mu(P,e,null,n,f),p.push({event:P,listeners:C}),x?P.data=x:(x=mf(n),x!==null&&(P.data=x)))),(x=Ug?Fg(e,n):zg(e,n))&&(u=ss(u,"onBeforeInput"),0<u.length&&(f=new Mu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=x))}xf(p,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Dr(e,n),s!=null&&r.unshift($r(e,s,i)),s=Dr(e,t),s!=null&&r.push($r(e,s,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Dr(n,s),l!=null&&o.unshift($r(n,l,a))):i||(l=Dr(n,s),l!=null&&o.push($r(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ev=/\r\n?/g,tv=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(ev,`
`).replace(tv,"")}function Pi(e,t,n){if(t=Qu(t),Qu(e)!==t&&n)throw Error(E(425))}function os(){}var ya=null,wa=null;function _a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(iv)}:Ea;function iv(e){setTimeout(function(){throw e})}function To(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ur(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Zn,Vr="__reactProps$"+Zn,ut="__reactContainer$"+Zn,Sa="__reactEvents$"+Zn,sv="__reactListeners$"+Zn,ov="__reactHandles$"+Zn;function Jt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Ke])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[Ke]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Fs(e){return e[Vr]||null}var Ia=[],Nn=-1;function Ht(e){return{current:e}}function B(e){0>Nn||(e.current=Ia[Nn],Ia[Nn]=null,Nn--)}function F(e,t){Nn++,Ia[Nn]=e.current,e.current=t}var $t={},ue=Ht($t),ve=Ht(!1),sn=$t;function Wn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function as(){B(ve),B(ue)}function Xu(e,t,n){if(ue.current!==$t)throw Error(E(168));F(ue,t),F(ve,n)}function Nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Hm(e)||"Unknown",i));return K({},n,r)}function ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,sn=ue.current,F(ue,e),F(ve,ve.current),!0}function Zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Nf(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(ue),F(ue,e)):B(ve),F(ve,n)}var nt=null,zs=!1,xo=!1;function Rf(e){nt===null?nt=[e]:nt.push(e)}function av(e){zs=!0,Rf(e)}function Wt(){if(!xo&&nt!==null){xo=!0;var e=0,t=M;try{var n=nt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,zs=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),ef(pl,Wt),i}finally{M=t,xo=!1}}return null}var Rn=[],On=0,us=null,cs=0,Ne=[],Re=0,on=null,rt=1,it="";function qt(e,t){Rn[On++]=cs,Rn[On++]=us,us=e,cs=t}function Of(e,t,n){Ne[Re++]=rt,Ne[Re++]=it,Ne[Re++]=on,on=e;var r=rt;e=it;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var s=32-ze(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rt=1<<32-ze(t)+i|n<<i|r,it=s+e}else rt=1<<s|n<<i|r,it=e}function Il(e){e.return!==null&&(qt(e,1),Of(e,1,0))}function kl(e){for(;e===us;)us=Rn[--On],Rn[On]=null,cs=Rn[--On],Rn[On]=null;for(;e===on;)on=Ne[--Re],Ne[Re]=null,it=Ne[--Re],Ne[Re]=null,rt=Ne[--Re],Ne[Re]=null}var ke=null,Ie=null,$=!1,Fe=null;function Af(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,Ie=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,Ie=null,!0):!1;default:return!1}}function ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ca(e){if($){var t=Ie;if(t){var n=t;if(!ec(e,t)){if(ka(e))throw Error(E(418));t=At(n.nextSibling);var r=ke;t&&ec(e,t)?Af(r,n):(e.flags=e.flags&-4097|2,$=!1,ke=e)}}else{if(ka(e))throw Error(E(418));e.flags=e.flags&-4097|2,$=!1,ke=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ni(e){if(e!==ke)return!1;if(!$)return tc(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_a(e.type,e.memoizedProps)),t&&(t=Ie)){if(ka(e))throw Lf(),Error(E(418));for(;t;)Af(e,t),t=At(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=ke?At(e.stateNode.nextSibling):null;return!0}function Lf(){for(var e=Ie;e;)e=At(e.nextSibling)}function Kn(){Ie=ke=null,$=!1}function Cl(e){Fe===null?Fe=[e]:Fe.push(e)}var lv=pt.ReactCurrentBatchConfig;function be(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ds=Ht(null),fs=null,An=null,Tl=null;function xl(){Tl=An=fs=null}function Pl(e){var t=ds.current;B(ds),e._currentValue=t}function Ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){fs=e,Tl=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(fs===null)throw Error(E(308));An=e,fs.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var Xt=null;function Nl(e){Xt===null?Xt=[e]:Xt.push(e)}function jf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Nl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var i=e.updateQueue;wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,f=u=l=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(g=t,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(y,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(y,p,g):w,g==null)break e;p=K({},p,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,l=p):f=f.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ln|=o,e.lanes=o,e.memoizedState=p}}function rc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Mf=new Ld.Component().refs;function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Dt(e),s=at(r,i);s.payload=t,n!=null&&(s.callback=n),t=Lt(e,s,i),t!==null&&(Be(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Dt(e),s=at(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Lt(e,s,i),t!==null&&(Be(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Dt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(Be(t,e,r,n),Bi(t,e,r))}};function ic(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,s):!0}function bf(e,t,n){var r=!1,i=$t,s=t.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=ye(t)?sn:ue.current,r=t.contextTypes,s=(r=r!=null)?Wn(e,i):$t),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mf,Rl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=ye(t)?sn:ue.current,i.context=Wn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bs.enqueueReplaceState(i,i.state,null),hs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Mf&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function Uf(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Mt(h,d),h.index=0,h.sibling=null,h}function s(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,v){return d===null||d.tag!==6?(d=jo(m,h.mode,v),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,v){var I=m.type;return I===kn?f(h,d,m.props.children,v,m.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yt&&oc(I)===d.type)?(v=i(d,m.props),v.ref=hr(h,d,m),v.return=h,v):(v=Gi(m.type,m.key,m.props,null,h.mode,v),v.ref=hr(h,d,m),v.return=h,v)}function u(h,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Do(m,h.mode,v),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function f(h,d,m,v,I){return d===null||d.tag!==7?(d=nn(m,h.mode,v,I),d.return=h,d):(d=i(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=jo(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wi:return m=Gi(d.type,d.key,d.props,null,h.mode,m),m.ref=hr(h,null,d),m.return=h,m;case In:return d=Do(d,h.mode,m),d.return=h,d;case yt:var v=d._init;return p(h,v(d._payload),m)}if(vr(d)||lr(d))return d=nn(d,h.mode,m,null),d.return=h,d;Ri(h,d)}return null}function g(h,d,m,v){var I=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(h,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:return m.key===I?l(h,d,m,v):null;case In:return m.key===I?u(h,d,m,v):null;case yt:return I=m._init,g(h,d,I(m._payload),v)}if(vr(m)||lr(m))return I!==null?null:f(h,d,m,v,null);Ri(h,m)}return null}function y(h,d,m,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,a(d,h,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wi:return h=h.get(v.key===null?m:v.key)||null,l(d,h,v,I);case In:return h=h.get(v.key===null?m:v.key)||null,u(d,h,v,I);case yt:var C=v._init;return y(h,d,m,C(v._payload),I)}if(vr(v)||lr(v))return h=h.get(m)||null,f(d,h,v,I,null);Ri(d,v)}return null}function w(h,d,m,v){for(var I=null,C=null,x=d,P=d=0,b=null;x!==null&&P<m.length;P++){x.index>P?(b=x,x=null):b=x.sibling;var L=g(h,x,m[P],v);if(L===null){x===null&&(x=b);break}e&&x&&L.alternate===null&&t(h,x),d=s(L,d,P),C===null?I=L:C.sibling=L,C=L,x=b}if(P===m.length)return n(h,x),$&&qt(h,P),I;if(x===null){for(;P<m.length;P++)x=p(h,m[P],v),x!==null&&(d=s(x,d,P),C===null?I=x:C.sibling=x,C=x);return $&&qt(h,P),I}for(x=r(h,x);P<m.length;P++)b=y(x,h,P,m[P],v),b!==null&&(e&&b.alternate!==null&&x.delete(b.key===null?P:b.key),d=s(b,d,P),C===null?I=b:C.sibling=b,C=b);return e&&x.forEach(function(De){return t(h,De)}),$&&qt(h,P),I}function _(h,d,m,v){var I=lr(m);if(typeof I!="function")throw Error(E(150));if(m=I.call(m),m==null)throw Error(E(151));for(var C=I=null,x=d,P=d=0,b=null,L=m.next();x!==null&&!L.done;P++,L=m.next()){x.index>P?(b=x,x=null):b=x.sibling;var De=g(h,x,L.value,v);if(De===null){x===null&&(x=b);break}e&&x&&De.alternate===null&&t(h,x),d=s(De,d,P),C===null?I=De:C.sibling=De,C=De,x=b}if(L.done)return n(h,x),$&&qt(h,P),I;if(x===null){for(;!L.done;P++,L=m.next())L=p(h,L.value,v),L!==null&&(d=s(L,d,P),C===null?I=L:C.sibling=L,C=L);return $&&qt(h,P),I}for(x=r(h,x);!L.done;P++,L=m.next())L=y(x,h,P,L.value,v),L!==null&&(e&&L.alternate!==null&&x.delete(L.key===null?P:L.key),d=s(L,d,P),C===null?I=L:C.sibling=L,C=L);return e&&x.forEach(function(or){return t(h,or)}),$&&qt(h,P),I}function N(h,d,m,v){if(typeof m=="object"&&m!==null&&m.type===kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:e:{for(var I=m.key,C=d;C!==null;){if(C.key===I){if(I=m.type,I===kn){if(C.tag===7){n(h,C.sibling),d=i(C,m.props.children),d.return=h,h=d;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yt&&oc(I)===C.type){n(h,C.sibling),d=i(C,m.props),d.ref=hr(h,C,m),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===kn?(d=nn(m.props.children,h.mode,v,m.key),d.return=h,h=d):(v=Gi(m.type,m.key,m.props,null,h.mode,v),v.ref=hr(h,d,m),v.return=h,h=v)}return o(h);case In:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Do(m,h.mode,v),d.return=h,h=d}return o(h);case yt:return C=m._init,N(h,d,C(m._payload),v)}if(vr(m))return w(h,d,m,v);if(lr(m))return _(h,d,m,v);Ri(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=jo(m,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return N}var Gn=Uf(!0),Ff=Uf(!1),li={},qe=Ht(li),Hr=Ht(li),Wr=Ht(li);function Zt(e){if(e===li)throw Error(E(174));return e}function Ol(e,t){switch(F(Wr,t),F(Hr,e),F(qe,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}B(qe),F(qe,t)}function qn(){B(qe),B(Hr),B(Wr)}function zf(e){Zt(Wr.current);var t=Zt(qe.current),n=oa(t,e.type);t!==n&&(F(Hr,e),F(qe,n))}function Al(e){Hr.current===e&&(B(qe),B(Hr))}var V=Ht(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Po=[];function Ll(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var $i=pt.ReactCurrentDispatcher,No=pt.ReactCurrentBatchConfig,an=0,H=null,J=null,ee=null,ms=!1,xr=!1,Kr=0,uv=0;function oe(){throw Error(E(321))}function jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,i,s){if(an=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?hv:pv,e=n(r,i),xr){s=0;do{if(xr=!1,Kr=0,25<=s)throw Error(E(301));s+=1,ee=J=null,t.updateQueue=null,$i.current=mv,e=n(r,i)}while(xr)}if($i.current=gs,t=J!==null&&J.next!==null,an=0,ee=J=H=null,ms=!1,t)throw Error(E(300));return e}function Ml(){var e=Kr!==0;return Kr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function je(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Gr(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=je(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((an&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,H.lanes|=f,ln|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$e(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=je(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);$e(s,t.memoizedState)||(ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Bf(){}function $f(e,t){var n=H,r=je(),i=t(),s=!$e(r.memoizedState,i);if(s&&(r.memoizedState=i,ge=!0),r=r.queue,bl(Wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,qr(9,Hf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));an&30||Vf(n,t,i)}return i}function Vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,r){t.value=n,t.getSnapshot=r,Kf(t)&&Gf(e)}function Wf(e,t,n){return n(function(){Kf(t)&&Gf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Gf(e){var t=ct(e,1);t!==null&&Be(t,e,1,-1)}function ac(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=fv.bind(null,H,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qf(){return je().memoizedState}function Vi(e,t,n,r){var i=We();H.flags|=e,i.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function $s(e,t,n,r){var i=je();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&jl(r,o.deps)){i.memoizedState=qr(t,n,s,r);return}}H.flags|=e,i.memoizedState=qr(1|t,n,s,r)}function lc(e,t){return Vi(8390656,8,e,t)}function bl(e,t){return $s(2048,8,e,t)}function Qf(e,t){return $s(4,2,e,t)}function Yf(e,t){return $s(4,4,e,t)}function Jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xf(e,t,n){return n=n!=null?n.concat([e]):null,$s(4,4,Jf.bind(null,t,e),n)}function Ul(){}function Zf(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function th(e,t,n){return an&21?($e(n,t)||(n=rf(),H.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function cv(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=No.transition;No.transition={};try{e(!1),t()}finally{M=n,No.transition=r}}function nh(){return je().memoizedState}function dv(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rh(e))ih(t,n);else if(n=jf(e,t,n,r),n!==null){var i=fe();Be(n,e,r,i),sh(n,t,r)}}function fv(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rh(e))ih(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,o)){var l=t.interleaved;l===null?(i.next=i,Nl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jf(e,t,i,r),n!==null&&(i=fe(),Be(n,e,r,i),sh(n,t,r))}}function rh(e){var t=e.alternate;return e===H||t!==null&&t===H}function ih(e,t){xr=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var gs={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},hv={readContext:Le,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,Jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dv.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ac,useDebugValue:Ul,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ac(!1),t=e[0];return e=cv.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=We();if($){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));an&30||Vf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,lc(Wf.bind(null,r,s,e),[e]),r.flags|=2048,qr(9,Hf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if($){var n=it,r=rt;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pv={readContext:Le,useCallback:Zf,useContext:Le,useEffect:bl,useImperativeHandle:Xf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:eh,useReducer:Ro,useRef:qf,useState:function(){return Ro(Gr)},useDebugValue:Ul,useDeferredValue:function(e){var t=je();return th(t,J.memoizedState,e)},useTransition:function(){var e=Ro(Gr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Bf,useSyncExternalStore:$f,useId:nh,unstable_isNewReconciler:!1},mv={readContext:Le,useCallback:Zf,useContext:Le,useEffect:bl,useImperativeHandle:Xf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:eh,useReducer:Oo,useRef:qf,useState:function(){return Oo(Gr)},useDebugValue:Ul,useDeferredValue:function(e){var t=je();return J===null?t.memoizedState=e:th(t,J.memoizedState,e)},useTransition:function(){var e=Oo(Gr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Bf,useSyncExternalStore:$f,useId:nh,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ao(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gv=typeof WeakMap=="function"?WeakMap:Map;function oh(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,Fa=r),Na(e,t)},n}function ah(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Na(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rv.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var vv=pt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?Ff(t,null,n,r):Gn(t,e.child,n,r)}function fc(e,t,n,r,i){n=n.render;var s=t.ref;return zn(t,i),r=Dl(e,t,n,r,s,i),n=Ml(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):($&&n&&Il(t),t.flags|=1,de(e,t,r,i),t.child)}function hc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Kl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,lh(e,t,s,r,i)):(e=Gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(o,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Mt(s,r),e.ref=t.ref,e.return=t,t.child=e}function lh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(zr(s,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Ra(e,t,n,r,i)}function uh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(jn,Se),Se|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(jn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(jn,Se),Se|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(jn,Se),Se|=r;return de(e,t,i,n),t.child}function ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,r,i){var s=ye(n)?sn:ue.current;return s=Wn(t,s),zn(t,i),n=Dl(e,t,n,r,s,i),r=Ml(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):($&&r&&Il(t),t.flags|=1,de(e,t,n,i),t.child)}function pc(e,t,n,r,i){if(ye(n)){var s=!0;ls(t)}else s=!1;if(zn(t,i),t.stateNode===null)Hi(e,t),bf(t,n,r),Pa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(n)?sn:ue.current,u=Wn(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sc(t,o,r,u),wt=!1;var g=t.memoizedState;o.state=g,hs(t,r,o,i),l=t.memoizedState,a!==r||g!==l||ve.current||wt?(typeof f=="function"&&(xa(t,n,f,r),l=t.memoizedState),(a=wt||ic(t,n,a,r,g,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Df(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:be(t.type,a),o.props=u,p=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=ye(n)?sn:ue.current,l=Wn(t,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==l)&&sc(t,o,r,l),wt=!1,g=t.memoizedState,o.state=g,hs(t,r,o,i);var w=t.memoizedState;a!==p||g!==w||ve.current||wt?(typeof y=="function"&&(xa(t,n,y,r),w=t.memoizedState),(u=wt||ic(t,n,u,r,g,w,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,s,i)}function Oa(e,t,n,r,i,s){ch(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Zu(t,n,!1),dt(e,t,s);r=t.stateNode,vv.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gn(t,e.child,null,s),t.child=Gn(t,null,a,s)):de(e,t,a,s),t.memoizedState=r.state,i&&Zu(t,n,!0),t.child}function dh(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),Ol(e,t.containerInfo)}function mc(e,t,n,r,i){return Kn(),Cl(i),t.flags|=256,de(e,t,n,r),t.child}var Aa={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function fh(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return Ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ws(o,r,0,null),e=nn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=La(n),t.memoizedState=Aa,e):Fl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yv(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mt(a,s):(s=nn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?La(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Aa,r}return s=e.child,e=s.sibling,r=Mt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fl(e,t){return t=Ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,r){return r!==null&&Cl(r),Gn(t,e.child,null,n),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ao(Error(E(422))),Oi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ws({mode:"visible",children:r.children},i,0,null),s=nn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Gn(t,e.child,null,o),t.child.memoizedState=La(o),t.memoizedState=Aa,s);if(!(t.mode&1))return Oi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Ao(s,r,void 0),Oi(e,t,o,r)}if(a=(o&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(e,i),Be(r,e,i,-1))}return Wl(),r=Ao(Error(E(421))),Oi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ov.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ie=At(i.nextSibling),ke=t,$=!0,Fe=null,e!==null&&(Ne[Re++]=rt,Ne[Re++]=it,Ne[Re++]=on,rt=e.id,it=e.overflow,on=t),t=Fl(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ta(e.return,t,n)}function Lo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(de(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Lo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Lo(t,!0,n,null,s);break;case"together":Lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wv(e,t,n){switch(t.tag){case 3:dh(t),Kn();break;case 5:zf(t);break;case 1:ye(t.type)&&ls(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(ds,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?fh(e,t,n):(F(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,uh(e,t,n)}return dt(e,t,n)}var ph,ja,mh,gh;ph=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ja=function(){};mh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(qe.current);var s=null;switch(n){case"input":i=na(e,i),r=na(e,r),s=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),s=[];break;case"textarea":i=sa(e,i),r=sa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}aa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};gh=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _v(e,t,n){var r=t.pendingProps;switch(kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&as(),ae(t),null;case 3:return r=t.stateNode,qn(),B(ve),B(ue),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&($a(Fe),Fe=null))),ja(e,t),ae(t),null;case 5:Al(t);var i=Zt(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)mh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ae(t),null}if(e=Zt(qe.current),Ni(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ke]=t,r[Vr]=s,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<wr.length;i++)z(wr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Cu(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":xu(r,s),z("invalid",r)}aa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pi(r.textContent,a,e),i=["children",""+a]):Lr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":_i(r),Tu(r,s,!0);break;case"textarea":_i(r),Pu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$d(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ke]=t,e[Vr]=r,ph(e,t,!1,!1),t.stateNode=e;e:{switch(o=la(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<wr.length;i++)z(wr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":Cu(e,r),i=na(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),z("invalid",e);break;case"textarea":xu(e,r),i=sa(e,r),z("invalid",e);break;default:i=r}aa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wd(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jr(e,l):typeof l=="number"&&jr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",e):l!=null&&ul(e,s,l,o))}switch(n){case"input":_i(e),Tu(e,r,!1);break;case"textarea":_i(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Mn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)gh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Zt(Wr.current),Zt(qe.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(s=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ae(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ie!==null&&t.mode&1&&!(t.flags&128))Lf(),Kn(),t.flags|=98560,s=!1;else if(s=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ke]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),s=!1}else Fe!==null&&($a(Fe),Fe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Wl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return qn(),ja(e,t),e===null&&Br(t.stateNode.containerInfo),ae(t),null;case 10:return Pl(t.type._context),ae(t),null;case 17:return ye(t.type)&&as(),ae(t),null;case 19:if(B(V),s=t.memoizedState,s===null)return ae(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)pr(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ps(e),o!==null){for(t.flags|=128,pr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>Yn&&(t.flags|=128,r=!0,pr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ps(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return ae(t),null}else 2*Q()-s.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,pr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Ev(e,t){switch(kl(t),t.tag){case 1:return ye(t.type)&&as(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),B(ve),B(ue),Ll(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return qn(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var Ai=!1,le=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){G(e,t,r)}}var vc=!1;function Iv(e,t){if(ya=rs,e=_f(),Sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++f===r&&(l=o),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},rs=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,N=w.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:be(t.type,_),N);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=vc,vc=!1,w}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Da(t,n,s)}i=i.next}while(i!==r)}}function Vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vh(e){var t=e.alternate;t!==null&&(e.alternate=null,vh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Vr],delete t[Sa],delete t[sv],delete t[ov])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yh(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}var ne=null,Ue=!1;function gt(e,t,n){for(n=n.child;n!==null;)wh(e,t,n),n=n.sibling}function wh(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Ds,n)}catch{}switch(n.tag){case 5:le||Ln(n,t);case 6:var r=ne,i=Ue;ne=null,gt(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?To(e.parentNode,n):e.nodeType===1&&To(e,n),Ur(e)):To(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,gt(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Da(n,t,o),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!le&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,gt(e,t,n),le=r):gt(e,t,n);break;default:gt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sv),t.forEach(function(r){var i=Av.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(E(160));wh(s,o,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}function _h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Pr(3,e,e.return),Vs(3,e)}catch(_){G(e,e.return,_)}try{Pr(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(_){G(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zd(i,s),la(a,o);var u=la(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Wd(i,p):f==="dangerouslySetInnerHTML"?Vd(i,p):f==="children"?jr(i,p):ul(i,f,p,u)}switch(a){case"input":ra(i,s);break;case"textarea":Bd(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Mn(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?Mn(i,!!s.multiple,s.defaultValue,!0):Mn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vr]=s}catch(_){G(e,e.return,_)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){G(e,e.return,_)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($l=Q())),r&4&&wc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||f,Me(t,e),le=u):Me(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(k=e,f=e.child;f!==null;){for(p=k=f;k!==null;){switch(g=k,y=g.child,g.tag){case 0:case 11:case 14:case 15:Pr(4,g,g.return);break;case 1:Ln(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){Ec(p);continue}}y!==null?(y.return=g,k=y):Ec(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hd("display",o))}catch(_){G(e,e.return,_)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){G(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),He(e),r&4&&wc(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var s=yc(e);Ua(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yc(e);ba(e,a,o);break;default:throw Error(E(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kv(e,t,n){k=e,Eh(e)}function Eh(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ai;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Ai;var u=le;if(Ai=o,(le=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Sc(i):l!==null?(l.return=o,k=l):Sc(i);for(;s!==null;)k=s,Eh(s),s=s.sibling;k=i,Ai=a,le=u}_c(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):_c(e)}}function _c(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&rc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ur(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}le||t.flags&512&&Ma(t)}catch(g){G(t,t.return,g)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Ec(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Sc(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vs(4,t)}catch(l){G(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){G(t,i,l)}}var s=t.return;try{Ma(t)}catch(l){G(t,s,l)}break;case 5:var o=t.return;try{Ma(t)}catch(l){G(t,o,l)}}}catch(l){G(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var Cv=Math.ceil,vs=pt.ReactCurrentDispatcher,zl=pt.ReactCurrentOwner,Ae=pt.ReactCurrentBatchConfig,D=0,te=null,Y=null,ie=0,Se=0,jn=Ht(0),X=0,Qr=null,ln=0,Hs=0,Bl=0,Nr=null,me=null,$l=0,Yn=1/0,tt=null,ys=!1,Fa=null,jt=null,Li=!1,xt=null,ws=0,Rr=0,za=null,Wi=-1,Ki=0;function fe(){return D&6?Q():Wi!==-1?Wi:Wi=Q()}function Dt(e){return e.mode&1?D&2&&ie!==0?ie&-ie:lv.transition!==null?(Ki===0&&(Ki=rf()),Ki):(e=M,e!==0||(e=window.event,e=e===void 0?16:df(e.type)),e):1}function Be(e,t,n,r){if(50<Rr)throw Rr=0,za=null,Error(E(185));si(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(Hs|=n),X===4&&Et(e,ie)),we(e,r),n===1&&D===0&&!(t.mode&1)&&(Yn=Q()+500,zs&&Wt()))}function we(e,t){var n=e.callbackNode;lg(e,t);var r=ns(e,e===te?ie:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?av(Ic.bind(null,e)):Rf(Ic.bind(null,e)),rv(function(){!(D&6)&&Wt()}),n=null;else{switch(sf(r)){case 1:n=pl;break;case 4:n=tf;break;case 16:n=ts;break;case 536870912:n=nf;break;default:n=ts}n=Nh(n,Sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sh(e,t){if(Wi=-1,Ki=0,D&6)throw Error(E(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=ns(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_s(e,r);else{t=r;var i=D;D|=2;var s=kh();(te!==e||ie!==t)&&(tt=null,Yn=Q()+500,tn(e,t));do try{Pv();break}catch(a){Ih(e,a)}while(1);xl(),vs.current=s,D=i,Y!==null?t=0:(te=null,ie=0,t=X)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(r=i,t=Ba(e,i))),t===1)throw n=Qr,tn(e,0),Et(e,r),we(e,Q()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!Tv(i)&&(t=_s(e,r),t===2&&(s=ha(e),s!==0&&(r=s,t=Ba(e,s))),t===1))throw n=Qr,tn(e,0),Et(e,r),we(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Qt(e,me,tt);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=$l+500-Q(),10<t)){if(ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ea(Qt.bind(null,e,me,tt),t);break}Qt(e,me,tt);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ze(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cv(r/1960))-r,10<r){e.timeoutHandle=Ea(Qt.bind(null,e,me,tt),r);break}Qt(e,me,tt);break;case 5:Qt(e,me,tt);break;default:throw Error(E(329))}}}return we(e,Q()),e.callbackNode===n?Sh.bind(null,e):null}function Ba(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=_s(e,t),e!==2&&(t=me,me=n,t!==null&&$a(t)),e}function $a(e){me===null?me=e:me.push.apply(me,e)}function Tv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$e(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~Bl,t&=~Hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ic(e){if(D&6)throw Error(E(327));Bn();var t=ns(e,0);if(!(t&1))return we(e,Q()),null;var n=_s(e,t);if(e.tag!==0&&n===2){var r=ha(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Qr,tn(e,0),Et(e,t),we(e,Q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,me,tt),we(e,Q()),null}function Vl(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Yn=Q()+500,zs&&Wt())}}function un(e){xt!==null&&xt.tag===0&&!(D&6)&&Bn();var t=D;D|=1;var n=Ae.transition,r=M;try{if(Ae.transition=null,M=1,e)return e()}finally{M=r,Ae.transition=n,D=t,!(D&6)&&Wt()}}function Hl(){Se=jn.current,B(jn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nv(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&as();break;case 3:qn(),B(ve),B(ue),Ll();break;case 5:Al(r);break;case 4:qn();break;case 13:B(V);break;case 19:B(V);break;case 10:Pl(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(te=e,Y=e=Mt(e.current,null),ie=Se=t,X=0,Qr=null,Bl=Hs=ln=0,me=Nr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return e}function Ih(e,t){do{var n=Y;try{if(xl(),$i.current=gs,ms){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ms=!1}if(an=0,ee=J=H=null,xr=!1,Kr=0,zl.current=null,n===null||n.return===null){X=1,Qr=t,Y=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=cc(o);if(y!==null){y.flags&=-257,dc(y,o,a,s,t),y.mode&1&&uc(s,u,t),t=y,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){uc(s,u,t),Wl();break e}l=Error(E(426))}}else if($&&a.mode&1){var N=cc(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),dc(N,o,a,s,t),Cl(Qn(l,a));break e}}s=l=Qn(l,a),X!==4&&(X=2),Nr===null?Nr=[s]:Nr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=oh(s,l,t);nc(s,h);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jt===null||!jt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=ah(s,a,t);nc(s,v);break e}}s=s.return}while(s!==null)}Th(n)}catch(I){t=I,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function kh(){var e=vs.current;return vs.current=gs,e===null?gs:e}function Wl(){(X===0||X===3||X===2)&&(X=4),te===null||!(ln&268435455)&&!(Hs&268435455)||Et(te,ie)}function _s(e,t){var n=D;D|=2;var r=kh();(te!==e||ie!==t)&&(tt=null,tn(e,t));do try{xv();break}catch(i){Ih(e,i)}while(1);if(xl(),D=n,vs.current=r,Y!==null)throw Error(E(261));return te=null,ie=0,X}function xv(){for(;Y!==null;)Ch(Y)}function Pv(){for(;Y!==null&&!Zm();)Ch(Y)}function Ch(e){var t=Ph(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Th(e):Y=t,zl.current=null}function Th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ev(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=_v(n,t,Se),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Qt(e,t,n){var r=M,i=Ae.transition;try{Ae.transition=null,M=1,Nv(e,t,n,r)}finally{Ae.transition=i,M=r}return null}function Nv(e,t,n,r){do Bn();while(xt!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ug(e,s),e===te&&(Y=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Nh(ts,function(){return Bn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ae.transition,Ae.transition=null;var o=M;M=1;var a=D;D|=4,zl.current=null,Iv(e,n),_h(n,e),Qg(wa),rs=!!ya,wa=ya=null,e.current=n,kv(n),eg(),D=a,M=o,Ae.transition=s}else e.current=n;if(Li&&(Li=!1,xt=e,ws=i),s=e.pendingLanes,s===0&&(jt=null),rg(n.stateNode),we(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ys)throw ys=!1,e=Fa,Fa=null,e;return ws&1&&e.tag!==0&&Bn(),s=e.pendingLanes,s&1?e===za?Rr++:(Rr=0,za=e):Rr=0,Wt(),null}function Bn(){if(xt!==null){var e=sf(ws),t=Ae.transition,n=M;try{if(Ae.transition=null,M=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,ws=0,D&6)throw Error(E(331));var i=D;for(D|=4,k=e.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var f=k;switch(f.tag){case 0:case 11:case 15:Pr(8,f,s)}var p=f.child;if(p!==null)p.return=f,k=p;else for(;k!==null;){f=k;var g=f.sibling,y=f.return;if(vh(f),f===u){k=null;break}if(g!==null){g.return=y,k=g;break}k=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var N=_.sibling;_.sibling=null,_=N}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,k=h;break e}k=s.return}}var d=e.current;for(k=d;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=d;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vs(9,a)}}catch(I){G(a,a.return,I)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(D=i,Wt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Ds,e)}catch{}r=!0}return r}finally{M=n,Ae.transition=t}}return!1}function kc(e,t,n){t=Qn(n,t),t=oh(e,t,1),e=Lt(e,t,1),t=fe(),e!==null&&(si(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)kc(e,e,n);else for(;t!==null;){if(t.tag===3){kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=Qn(n,e),e=ah(t,e,1),t=Lt(t,e,1),e=fe(),t!==null&&(si(t,1,e),we(t,e));break}}t=t.return}}function Rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(X===4||X===3&&(ie&130023424)===ie&&500>Q()-$l?tn(e,0):Bl|=n),we(e,t)}function xh(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=fe();e=ct(e,t),e!==null&&(si(e,t,n),we(e,n))}function Ov(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xh(e,n)}function Av(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),xh(e,n)}var Ph;Ph=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,wv(e,t,n);ge=!!(e.flags&131072)}else ge=!1,$&&t.flags&1048576&&Of(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var i=Wn(t,ue.current);zn(t,n),i=Dl(null,t,r,e,i,n);var s=Ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(s=!0,ls(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rl(t),i.updater=Bs,t.stateNode=i,i._reactInternals=t,Pa(t,r,e,n),t=Oa(null,t,r,!0,s,n)):(t.tag=0,$&&s&&Il(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jv(r),e=be(r,e),i){case 0:t=Ra(null,t,r,e,n);break e;case 1:t=pc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),pc(e,t,r,i,n);case 3:e:{if(dh(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Df(e,t),hs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Qn(Error(E(423)),t),t=mc(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(E(424)),t),t=mc(e,t,r,n,i);break e}else for(Ie=At(t.stateNode.containerInfo.firstChild),ke=t,$=!0,Fe=null,n=Ff(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===i){t=dt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return zf(t),e===null&&Ca(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,_a(r,i)?o=null:s!==null&&_a(r,s)&&(t.flags|=32),ch(e,t),de(e,t,o,n),t.child;case 6:return e===null&&Ca(t),null;case 13:return fh(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),fc(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(ds,r._currentValue),r._currentValue=o,s!==null)if($e(s.value,o)){if(s.children===i.children&&!ve.current){t=dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=at(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ta(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ta(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=Le(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),hc(e,t,r,i,n);case 15:return lh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Hi(e,t),t.tag=1,ye(r)?(e=!0,ls(t)):e=!1,zn(t,n),bf(t,r,i),Pa(t,r,i,n),Oa(null,t,r,!0,e,n);case 19:return hh(e,t,n);case 22:return uh(e,t,n)}throw Error(E(156,t.tag))};function Nh(e,t){return ef(e,t)}function Lv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Lv(e,t,n,r)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jv(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dl)return 11;if(e===fl)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gi(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Kl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return nn(n.children,i,s,t);case cl:o=8,i|=8;break;case Xo:return e=Oe(12,n,t,i|2),e.elementType=Xo,e.lanes=s,e;case Zo:return e=Oe(13,n,t,i),e.elementType=Zo,e.lanes=s,e;case ea:return e=Oe(19,n,t,i),e.elementType=ea,e.lanes=s,e;case bd:return Ws(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:o=10;break e;case Md:o=9;break e;case dl:o=11;break e;case fl:o=14;break e;case yt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Oe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function nn(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Ws(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=bd,e.lanes=n,e.stateNode={isHidden:!1},e}function jo(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,i,s,o,a,l){return e=new Dv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Oe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(s),e}function Mv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rh(e){if(!e)return $t;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ye(n))return Nf(e,n,t)}return t}function Oh(e,t,n,r,i,s,o,a,l){return e=Gl(n,r,!0,e,i,s,o,a,l),e.context=Rh(null),n=e.current,r=fe(),i=Dt(n),s=at(r,i),s.callback=t??null,Lt(n,s,i),e.current.lanes=i,si(e,i,r),we(e,r),e}function Ks(e,t,n,r){var i=t.current,s=fe(),o=Dt(i);return n=Rh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,o),e!==null&&(Be(e,i,o,s),Bi(e,i,o)),o}function Es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ql(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function bv(){return null}var Ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}Gs.prototype.render=Ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ks(e,t,null,null)};Gs.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){Ks(null,e,null,null)}),t[ut]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&cf(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Uv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Es(o);s.call(u)}}var o=Oh(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=o,e[ut]=o.current,Br(e.nodeType===8?e.parentNode:e),un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Es(l);a.call(u)}}var l=Gl(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[ut]=l.current,Br(e.nodeType===8?e.parentNode:e),un(function(){Ks(t,l,n,r)}),l}function Qs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Es(o);a.call(l)}}Ks(t,o,e,i)}else o=Uv(n,t,e,i,r);return Es(o)}of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(ml(t,n|1),we(t,Q()),!(D&6)&&(Yn=Q()+500,Wt()))}break;case 13:un(function(){var r=ct(e,1);if(r!==null){var i=fe();Be(r,e,1,i)}}),ql(e,1)}};gl=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=fe();Be(t,e,134217728,n)}ql(e,134217728)}};af=function(e){if(e.tag===13){var t=Dt(e),n=ct(e,t);if(n!==null){var r=fe();Be(n,e,t,r)}ql(e,t)}};lf=function(){return M};uf=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ca=function(e,t,n){switch(t){case"input":if(ra(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fs(r);if(!i)throw Error(E(90));Fd(r),ra(r,i)}}}break;case"textarea":Bd(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};qd=Vl;Qd=un;var Fv={usingClientEntryPoint:!1,Events:[ai,Pn,Fs,Kd,Gd,Vl]},mr={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zv={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xd(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Ds=ji.inject(zv),Ge=ji}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(t))throw Error(E(200));return Mv(e,t,null,n)};xe.createRoot=function(e,t){if(!Yl(e))throw Error(E(299));var n=!1,r="",i=Ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Br(e.nodeType===8?e.parentNode:e),new Ql(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Xd(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return un(e)};xe.hydrate=function(e,t,n){if(!qs(t))throw Error(E(200));return Qs(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Yl(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ah;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Oh(t,null,e,1,n??null,i,!1,s,o),e[ut]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gs(t)};xe.render=function(e,t,n){if(!qs(t))throw Error(E(200));return Qs(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!qs(e))throw Error(E(40));return e._reactRootContainer?(un(function(){Qs(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};xe.unstable_batchedUpdates=Vl;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qs(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Qs(e,t,n,!1,r)};xe.version="18.2.0-next-9e3b772b8-20220608";function Lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lh)}catch(e){console.error(e)}}Lh(),Rd.exports=xe;var Bv=Rd.exports,xc=Bv;Yo.createRoot=xc.createRoot,Yo.hydrateRoot=xc.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Pc="popstate";function $v(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Va("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ss(i)}return Hv(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vv(){return Math.random().toString(36).substr(2,8)}function Nc(e,t){return{usr:e.state,key:e.key,idx:t}}function Va(e,t,n,r){return n===void 0&&(n=null),Yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||r||Vv()})}function Ss(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Yr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function p(){a=Pt.Pop;let N=f(),h=N==null?null:N-u;u=N,l&&l({action:a,location:_.location,delta:h})}function g(N,h){a=Pt.Push;let d=Va(_.location,N,h);n&&n(d,N),u=f()+1;let m=Nc(d,u),v=_.createHref(d);try{o.pushState(m,"",v)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(v)}s&&l&&l({action:a,location:_.location,delta:1})}function y(N,h){a=Pt.Replace;let d=Va(_.location,N,h);n&&n(d,N),u=f();let m=Nc(d,u),v=_.createHref(d);o.replaceState(m,"",v),s&&l&&l({action:a,location:_.location,delta:0})}function w(N){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:Ss(N);return W(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let _={get action(){return a},get location(){return e(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pc,p),l=N,()=>{i.removeEventListener(Pc,p),l=null}},createHref(N){return t(i,N)},createURL:w,encodeLocation(N){let h=w(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(N){return o.go(N)}};return _}var Rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rc||(Rc={}));function Wv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?er(t):t,i=Jr(r.pathname||"/",n);if(i==null)return null;let s=jh(e);Kv(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ty(s[a],ry(i));return o}function jh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(W(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bt([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(W(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jh(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zv(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Dh(s.path))i(s,o,l)}),t}function Dh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Dh(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ey(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gv=/^:\w+$/,qv=3,Qv=2,Yv=1,Jv=10,Xv=-2,Oc=e=>e==="*";function Zv(e,t){let n=e.split("/"),r=n.length;return n.some(Oc)&&(r+=Xv),t&&(r+=Qv),n.filter(i=>!Oc(i)).reduce((i,s)=>i+(Gv.test(s)?qv:s===""?Yv:Jv),r)}function ey(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ty(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Ha({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;s.push({params:r,pathname:bt([i,f.pathname]),pathnameBase:ay(bt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=bt([i,f.pathnameBase]))}return s}function Ha(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ny(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let g=a[p]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=iy(a[p]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ny(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ry(e){try{return decodeURI(e)}catch(t){return Jl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function iy(e,t){try{return decodeURIComponent(e)}catch(n){return Jl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Jr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?er(e):e;return{pathname:n?n.startsWith("/")?n:oy(n,t):t,search:ly(r),hash:uy(i)}}function oy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xl(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=er(e):(i=Yr({},e),W(!i.pathname||!i.pathname.includes("?"),Mo("?","pathname","search",i)),W(!i.pathname||!i.pathname.includes("#"),Mo("#","pathname","hash",i)),W(!i.search||!i.search.includes("#"),Mo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?t[p]:"/"}let l=sy(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),ay=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mh=["post","put","patch","delete"];new Set(Mh);const dy=["get",...Mh];new Set(dy);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Is.apply(this,arguments)}const Ys=S.createContext(null),bh=S.createContext(null),vn=S.createContext(null),Js=S.createContext(null),mt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Uh=S.createContext(null);function fy(e,t){let{relative:n}=t===void 0?{}:t;tr()||W(!1);let{basename:r,navigator:i}=S.useContext(vn),{hash:s,pathname:o,search:a}=Xs(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:bt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function tr(){return S.useContext(Js)!=null}function nr(){return tr()||W(!1),S.useContext(Js).location}function Fh(e){S.useContext(vn).static||S.useLayoutEffect(e)}function zh(){let{isDataRoute:e}=S.useContext(mt);return e?xy():hy()}function hy(){tr()||W(!1);let e=S.useContext(Ys),{basename:t,navigator:n}=S.useContext(vn),{matches:r}=S.useContext(mt),{pathname:i}=nr(),s=JSON.stringify(Xl(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return Fh(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=Zl(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:bt([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,s,i,e])}const py=S.createContext(null);function my(e){let t=S.useContext(mt).outlet;return t&&S.createElement(py.Provider,{value:e},t)}function Xs(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(mt),{pathname:i}=nr(),s=JSON.stringify(Xl(r).map(o=>o.pathnameBase));return S.useMemo(()=>Zl(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function gy(e,t){return vy(e,t)}function vy(e,t,n){tr()||W(!1);let{navigator:r}=S.useContext(vn),{matches:i}=S.useContext(mt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=nr(),u;if(t){var f;let _=typeof t=="string"?er(t):t;a==="/"||(f=_.pathname)!=null&&f.startsWith(a)||W(!1),u=_}else u=l;let p=u.pathname||"/",g=a==="/"?p:p.slice(a.length)||"/",y=Wv(e,{pathname:g}),w=Sy(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:bt([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:bt([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&w?S.createElement(Js.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pt.Pop}},w):w}function yy(){let e=Ty(),t=cy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,s)}const wy=S.createElement(yy,null);class _y extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(mt.Provider,{value:this.props.routeContext},S.createElement(Uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ey(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Ys);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(mt.Provider,{value:t},r)}function Sy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||W(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let f=l.route.id?o==null?void 0:o[l.route.id]:null,p=null;n&&(p=l.route.errorElement||wy);let g=t.concat(s.slice(0,u+1)),y=()=>{let w;return f?w=p:l.route.Component?w=S.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=a,S.createElement(Ey,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(_y,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Bh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bh||{}),ks=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ks||{});function Iy(e){let t=S.useContext(Ys);return t||W(!1),t}function ky(e){let t=S.useContext(bh);return t||W(!1),t}function Cy(e){let t=S.useContext(mt);return t||W(!1),t}function $h(e){let t=Cy(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function Ty(){var e;let t=S.useContext(Uh),n=ky(ks.UseRouteError),r=$h(ks.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xy(){let{router:e}=Iy(Bh.UseNavigateStable),t=$h(ks.UseNavigateStable),n=S.useRef(!1);return Fh(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Is({fromRouteId:t},s)))},[e,t])}function Zs(e){let{to:t,replace:n,state:r,relative:i}=e;tr()||W(!1);let{matches:s}=S.useContext(mt),{pathname:o}=nr(),a=zh(),l=Zl(t,Xl(s).map(f=>f.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Py(e){return my(e.context)}function Ee(e){W(!1)}function Ny(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:s,static:o=!1}=e;tr()&&W(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=er(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:y="default"}=r,w=S.useMemo(()=>{let _=Jr(u,a);return _==null?null:{location:{pathname:_,search:f,hash:p,state:g,key:y},navigationType:i}},[a,u,f,p,g,y,i]);return w==null?null:S.createElement(vn.Provider,{value:l},S.createElement(Js.Provider,{children:n,value:w}))}function Ry(e){let{children:t,location:n}=e;return gy(Wa(t),n)}new Promise(()=>{});function Wa(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Wa(r.props.children,s));return}r.type!==Ee&&W(!1),!r.props.index||!r.props.children||W(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}function Vh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ay(e,t){return e.button===0&&(!t||t==="_self")&&!Oy(e)}const Ly=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],jy=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Dy=S.createContext({isTransitioning:!1}),My="startTransition",Ac=Om[My];function by(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=$v({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(p=>{u&&Ac?Ac(()=>l(p)):l(p)},[l,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.createElement(Ny,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zy=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,g=Vh(t,Ly),{basename:y}=S.useContext(vn),w,_=!1;if(typeof u=="string"&&Fy.test(u)&&(w=u,Uy))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),I=Jr(v.pathname,y);v.origin===m.origin&&I!=null?u=I+v.search+v.hash:_=!0}catch{}let N=fy(u,{relative:i}),h=$y(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:p});function d(m){r&&r(m),m.defaultPrevented||h(m)}return S.createElement("a",Cs({},g,{href:w||N,onClick:_||s?r:d,ref:n,target:l}))}),re=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:f}=t,p=Vh(t,jy),g=Xs(l,{relative:p.relative}),y=nr(),w=S.useContext(bh),{navigator:_}=S.useContext(vn),N=w!=null&&Vy(g)&&u===!0,h=_.encodeLocation?_.encodeLocation(g).pathname:g.pathname,d=y.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(d=d.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase());let v=d===h||!o&&d.startsWith(h)&&d.charAt(h.length)==="/",I=m!=null&&(m===h||!o&&m.startsWith(h)&&m.charAt(h.length)==="/"),C={isActive:v,isPending:I,isTransitioning:N},x=v?r:void 0,P;typeof s=="function"?P=s(C):P=[s,v?"active":null,I?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(C):a;return S.createElement(zy,Cs({},p,{"aria-current":x,className:P,ref:n,style:b,to:l,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var Ka;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ka||(Ka={}));var Lc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lc||(Lc={}));function By(e){let t=S.useContext(Ys);return t||W(!1),t}function $y(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=zh(),u=nr(),f=Xs(e,{relative:o});return S.useCallback(p=>{if(Ay(p,n)){p.preventDefault();let g=r!==void 0?r:Ss(u)===Ss(f);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,f,r,i,n,e,s,o,a])}function Vy(e,t){t===void 0&&(t={});let n=S.useContext(Dy);n==null&&W(!1);let{basename:r}=By(Ka.useViewTransitionState),i=Xs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Jr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Jr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ha(i.pathname,o)!=null||Ha(i.pathname,s)!=null}const Hy="/assets/hero-banner.jpg",Wy=()=>c.jsx("div",{id:"hero",style:{backgroundImage:`url(${Hy})`},children:c.jsx("div",{className:"full-container flex",children:c.jsxs("div",{className:"wrapper",children:[c.jsx("h1",{children:"RAISE THE BAR OF YOUR FITNESS"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore autem illum, molestias doloremque voluptates, sint vero id optio omnis, aut distinctio dignissimos quasi quis maxime debitis explicabo fugiat eveniet."}),c.jsx(re,{to:"/contact",children:c.jsx("button",{className:"btn-primary",children:"Get Started Now"})}),c.jsxs("div",{className:"flex",children:[c.jsxs("div",{children:[c.jsx("span",{children:"200+"}),c.jsx("p",{children:"HAPPY CLIENTS"})]}),c.jsxs("div",{children:[c.jsx("span",{children:"150+"}),c.jsx("p",{children:"SUCCESS STORIES"})]}),c.jsxs("div",{children:[c.jsx("span",{children:"125+"}),c.jsx("p",{children:"PERFECT BODIES"})]})]})]})})}),Hh="/assets/person-1.jpg",Ky="/assets/person-2.jpg";const Gy=()=>{const e=[{id:0,name:"John Smith",testimonial:"This gym is a true gem. The trainers' expertise and personalized guidance have propelled me to achieve remarkable fitness goals.I couldn't be happier with my transformation!",date:"15 th Oct, 2023",personImg:Hh},{id:2,name:"Emily Parker",testimonial:"My fitness journey has been incredible at this gym. The supportive community and cutting-edge facilities have empowered me to surpass my expectations and feel like a true gym goddess!",date:"5 th Nov, 2023",personImg:Ky}],[t,n]=S.useState(e[0]);return c.jsxs("div",{id:"testimonial",children:[c.jsx("h2",{children:"TESTIMONIAL"}),c.jsxs("div",{className:"testimonial-container",children:[c.jsx("div",{className:"testimonial-content",children:c.jsx("p",{children:t.testimonial})}),c.jsxs("div",{className:"flex",children:[c.jsx("img",{src:t.personImg,alt:"this is a gym enthusiast"}),c.jsxs("div",{children:[c.jsx("p",{className:"person-name",children:t.name}),c.jsx("p",{className:"date-of-testimonial",children:t.date})]})]}),c.jsxs("span",{style:{cursor:"pointer",userSelect:"none"},onClick:()=>{t.id===0?n(e[1]):n(e[0])},children:[c.jsx("i",{className:"fa-solid fa-arrows-rotate"})," Change"]})]})]})};const qy="/assets/about.jpg",Wh=()=>c.jsxs("div",{id:"about",children:[c.jsxs("div",{className:"flex",children:[c.jsx("img",{src:qy,alt:""}),c.jsxs("div",{className:"about-content",children:[c.jsx("h2",{children:"ABOUT US"}),c.jsx("p",{children:"Inspire Gym is a state-of-the-art fitness facility dedicated to helping you achieve your fitness goals. We offer a wide range of equipment and classes to meet the needs of all fitness levels, from beginners to experienced athletes. "}),c.jsx("p",{children:"At Inspire Gym, we believe that fitness is a journey, not a destination. That's why we offer a variety of membership options to fit your budget and lifestyle. We also offer a free trial membership so you can try us out before you commit."}),c.jsx(re,{to:"/about",children:c.jsx("button",{className:"btn-primary",children:"Find Out More"})})]})]}),c.jsxs("div",{className:"our-numbers flex",children:[c.jsxs("div",{children:[c.jsx("i",{className:"fa-regular fa-clock"}),c.jsx("div",{className:"numbers",children:"8hrs / day"}),c.jsx("div",{children:"WORKING HOURS"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-regular fa-heart"}),c.jsx("div",{className:"numbers",children:"200+"}),c.jsx("div",{children:"HAPPY CLIENTS"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-regular fa-thumbs-up"}),c.jsx("div",{className:"numbers",children:"150+"}),c.jsx("div",{children:"SUCCESS STORIES"})]}),c.jsxs("div",{children:[c.jsx("i",{className:"fa-regular fa-gem"}),c.jsx("div",{className:"numbers",children:"125+"}),c.jsx("div",{children:"PERFECT BODIES"})]})]})]}),Qy=({service:e})=>c.jsx("div",{className:"service",style:{backgroundImage:`url(${e.backgroundImage})`},children:c.jsxs("div",{className:"service-wrapper flex",onMouseOver:t=>t.target.style.backgroundImage="rgba(0,0,0,0)",children:[c.jsx("i",{className:e.icon}),c.jsx("h4",{children:e.serviceHeading}),c.jsx("p",{children:e.serviceDesc})]})});const Yy="/assets/service-1.jpg",Jy="/assets/service-3.jpg",Xy=()=>{const e=[{id:1,icon:"fa-regular fa-heart",serviceHeading:"HEALTH",serviceDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus exercitationem ab pariatur vel nostrum.",backgroundImage:Yy},{id:2,icon:"fa-solid fa-dumbbell",serviceHeading:"WORKOUT",serviceDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus exercitationem ab pariatur vel nostrum.",backgroundImage:Hh},{id:3,icon:"fa-solid fa-headphones",serviceHeading:"FUN & ADVENTURE",serviceDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus exercitationem ab pariatur vel nostrum.",backgroundImage:Jy}];return c.jsx("div",{id:"services",children:c.jsx("div",{className:"flex service-container",children:e.map((t,n)=>c.jsx(Qy,{service:t},n))})})},Zy=({blog:e})=>c.jsxs("div",{className:"blog-container",children:[c.jsx("img",{src:e.backgroundImage,alt:"blog image"}),c.jsxs("div",{className:"blog-content",children:[c.jsx("div",{className:"blog-heading",children:c.jsx("h3",{children:e.blogHeading})}),c.jsx("div",{className:"blog-description",children:c.jsx("p",{children:e.blogDesc})}),c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"blog-release-date",children:e.blogReleaseDate}),c.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]});const e0="/assets/blog-1.jpg",t0="/assets/blog-2.jpg",n0="/assets/blog-3.jpg",Kh=()=>{const e=[{id:1,icon:"fa-regular fa-heart",blogHeading:"Unlock Your Full Potential: The Benefits of Strength Training",blogDesc:"Discover how strength training can transform your body and improve your overall fitness in this informative blog.",blogReleaseDate:"20th May 2003",backgroundImage:e0},{id:2,icon:"fa-solid fa-dumbbell",blogHeading:"Fueling Your Workout: A Guide to Pre- and Post-Exercise Nutrition",blogDesc:"Learn the essential nutrition tips to maximize your gym performance and recovery for better results.",blogReleaseDate:"20th May 2003",backgroundImage:t0},{id:3,icon:"fa-solid fa-headphones",blogHeading:"Incorporating Yoga for Flexibility and Mind-Body Balance",blogDesc:"Explore how yoga can complement your gym routine, enhance flexibility, and promote mental well-being for a holistic fitness approach.",blogReleaseDate:"20th May 2003",backgroundImage:n0}];return c.jsxs("div",{id:"blogs",children:[c.jsx("h2",{children:"OUR BLOGS"}),c.jsx("div",{className:"blogs-container flex",children:e.map((t,n)=>c.jsx(Zy,{blog:t},n))})]})};const r0="/assets/our-coach.jpg",i0=()=>c.jsx("div",{id:"coach",children:c.jsxs("div",{className:"coach-container flex",children:[c.jsx("img",{src:r0,alt:""}),c.jsxs("div",{className:"coach-content",children:[c.jsx("h2",{children:"OUR BEST COACH"}),c.jsxs("p",{className:"coach-info",children:[c.jsx("span",{className:"text-highlighter",children:"Adam Flexwheeler"}),", a seasoned fitness expert, is dedicated to helping clients achieve their fitness goals. With years of experience, he specializes in strength training, nutrition, and personalized fitness plans, ensuring clients reach their full potential"]}),c.jsx("div",{className:"coach-services",children:c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-dumbbell"})," Personalized Workout Plans"]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-regular fa-eye"})," Exercise Demonstrations"]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-chart-line"})," Progress Tracking"]}),c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-shield"})," Safety"]})]})}),c.jsx(re,{to:"/subscription",children:c.jsx("button",{className:"btn-primary",children:"START TRAINING"})})]})]})}),s0="/assets/equipment-1.jpg",o0="/assets/equipment-2.jpg",a0="/assets/equipment-3.jpg",l0="/assets/equipment-4.jpg",u0="/assets/equipment-5.jpg",c0="/assets/equipment-6.jpg",d0=()=>c.jsxs("main",{children:[c.jsx(Wy,{}),c.jsxs("div",{className:"words-carousel",children:[c.jsxs("div",{className:"carousel-words",children:[c.jsx("span",{className:"text-transparent",children:"STAY FOCUSED"}),c.jsx("span",{children:"LIFT HEAVY"}),c.jsx("span",{className:"text-transparent",children:"STAY COMMITTED"}),c.jsx("span",{children:"PUSH HARD"}),c.jsx("span",{className:"text-transparent",children:"OWN IT"}),c.jsx("span",{children:"CRUSH LIMITS"})]}),c.jsxs("div",{className:"carousel-words",children:[c.jsx("span",{className:"text-transparent",children:"STAY FOCUSED"}),c.jsx("span",{children:"LIFT HEAVY"}),c.jsx("span",{className:"text-transparent",children:"STAY COMMITTED"}),c.jsx("span",{children:"PUSH HARD"}),c.jsx("span",{className:"text-transparent",children:"OWN IT"}),c.jsx("span",{children:"CRUSH LIMITS"})]})]}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"our-equipments",children:[c.jsx("h2",{children:"OUR EQUIPMENTS"}),c.jsxs("div",{className:"flex",children:[c.jsx("img",{src:s0,alt:""}),c.jsx("img",{src:o0,alt:""}),c.jsx("img",{src:l0,alt:""}),c.jsx("img",{src:a0,alt:""}),c.jsx("img",{src:u0,alt:""}),c.jsx("img",{src:c0,alt:""})]})]}),c.jsx(i0,{}),c.jsx(Kh,{})]}),c.jsx(Xy,{}),c.jsx("div",{className:"container margin-block",children:c.jsx(Gy,{})}),c.jsx(Wh,{})]}),Gh="/assets/gym-workout.jpg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},f0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):f0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new h0;const g=s<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p0=function(e){const t=qh(e);return Qh.encodeByteArray(t,!0)},Yh=function(e){return p0(e).replace(/\./g,"")},Jh=function(e){try{return Qh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=()=>m0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},y0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jh(e[1]);return t&&JSON.parse(t)},eu=()=>{try{return g0()||v0()||y0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},w0=e=>{var t,n;return(n=(t=eu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Xh=()=>{var e;return(e=eu())===null||e===void 0?void 0:e.config},Zh=e=>{var t;return(t=eu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function ep(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function S0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I0(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function tp(){try{return typeof indexedDB=="object"}catch{return!1}}function np(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function k0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class Ze extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=C0,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?T0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ze(i,a,r)}}function T0(e,t){return e.replace(x0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const x0=/\{\$([^}]+)}/g;function P0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(jc(s)&&jc(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _r(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Er(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function N0(e,t){const n=new R0(e,t);return n.subscribe.bind(n)}class R0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=bo),i.error===void 0&&(i.error=bo),i.complete===void 0&&(i.complete=bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function bo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=1e3,L0=2,j0=4*60*60*1e3,D0=.5;function Dc(e,t=A0,n=L0){const r=t*Math.pow(n,e),i=Math.round(D0*r*(Math.random()-.5)*2);return Math.min(j0,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return e&&e._delegate?e._delegate:e}class Xe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(U0(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b0(e){return e===Yt?void 0:e}function U0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new M0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const z0={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},B0=U.INFO,$0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},V0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=$0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tu{constructor(t){this.name=t,this._logLevel=B0,this._logHandler=V0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?z0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const H0=(e,t)=>t.some(n=>e instanceof n);let Mc,bc;function W0(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K0(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rp=new WeakMap,Ga=new WeakMap,ip=new WeakMap,Uo=new WeakMap,nu=new WeakMap;function G0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ut(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&rp.set(n,e)}).catch(()=>{}),nu.set(t,e),t}function q0(e){if(Ga.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ga.set(e,t)}let qa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ga.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ip.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Q0(e){qa=e(qa)}function Y0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fo(this),t,...n);return ip.set(r,t.sort?t.sort():[t]),Ut(r)}:K0().includes(e)?function(...t){return e.apply(Fo(this),t),Ut(rp.get(this))}:function(...t){return Ut(e.apply(Fo(this),t))}}function J0(e){return typeof e=="function"?Y0(e):(e instanceof IDBTransaction&&q0(e),H0(e,W0())?new Proxy(e,qa):e)}function Ut(e){if(e instanceof IDBRequest)return G0(e);if(Uo.has(e))return Uo.get(e);const t=J0(e);return t!==e&&(Uo.set(e,t),nu.set(t,e)),t}const Fo=e=>nu.get(e);function X0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ut(o.result),l.oldVersion,l.newVersion,Ut(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Z0=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],zo=new Map;function Uc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zo.get(t))return zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Z0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zo.set(t,s),s}Q0(e=>({...e,get:(t,n,r)=>Uc(t,n)||e.get(t,n,r),has:(t,n)=>!!Uc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qa="@firebase/app",Fc="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new tu("@firebase/app"),rw="@firebase/app-compat",iw="@firebase/analytics-compat",sw="@firebase/analytics",ow="@firebase/app-check-compat",aw="@firebase/app-check",lw="@firebase/auth",uw="@firebase/auth-compat",cw="@firebase/database",dw="@firebase/database-compat",fw="@firebase/functions",hw="@firebase/functions-compat",pw="@firebase/installations",mw="@firebase/installations-compat",gw="@firebase/messaging",vw="@firebase/messaging-compat",yw="@firebase/performance",ww="@firebase/performance-compat",_w="@firebase/remote-config",Ew="@firebase/remote-config-compat",Sw="@firebase/storage",Iw="@firebase/storage-compat",kw="@firebase/firestore",Cw="@firebase/firestore-compat",Tw="firebase",xw="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",Pw={[Qa]:"fire-core",[rw]:"fire-core-compat",[sw]:"fire-analytics",[iw]:"fire-analytics-compat",[aw]:"fire-app-check",[ow]:"fire-app-check-compat",[lw]:"fire-auth",[uw]:"fire-auth-compat",[cw]:"fire-rtdb",[dw]:"fire-rtdb-compat",[fw]:"fire-fn",[hw]:"fire-fn-compat",[pw]:"fire-iid",[mw]:"fire-iid-compat",[gw]:"fire-fcm",[vw]:"fire-fcm-compat",[yw]:"fire-perf",[ww]:"fire-perf-compat",[_w]:"fire-rc",[Ew]:"fire-rc-compat",[Sw]:"fire-gcs",[Iw]:"fire-gcs-compat",[kw]:"fire-fst",[Cw]:"fire-fst-compat","fire-js":"fire-js",[Tw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map,Ja=new Map;function Nw(e,t){try{e.container.addComponent(t)}catch(n){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(Ja.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;Ja.set(t,e);for(const n of Ts.values())Nw(n,e);return!0}function rr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new yn("app","Firebase",Rw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=xw;function sp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ya,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Xh()),!n)throw Ft.create("no-options");const s=Ts.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const o=new F0(i);for(const l of Ja.values())o.addComponent(l);const a=new Ow(n,r,o);return Ts.set(i,a),a}function op(e=Ya){const t=Ts.get(e);if(!t&&e===Ya&&Xh())return sp();if(!t)throw Ft.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=Pw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}ft(new Xe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="firebase-heartbeat-database",Lw=1,Zr="firebase-heartbeat-store";let Bo=null;function ap(){return Bo||(Bo=X0(Aw,Lw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Bo}async function jw(e){try{return await(await ap()).transaction(Zr).objectStore(Zr).get(lp(e))}catch(t){if(t instanceof Ze)cn.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});cn.warn(n.message)}}}async function zc(e,t){try{const r=(await ap()).transaction(Zr,"readwrite");await r.objectStore(Zr).put(t,lp(e)),await r.done}catch(n){if(n instanceof Ze)cn.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function lp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1024,Mw=30*24*60*60*1e3;class bw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bc(),{heartbeatsToSend:n,unsentEntries:r}=Uw(this._heartbeatsCache.heartbeats),i=Yh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bc(){return new Date().toISOString().substring(0,10)}function Uw(e,t=Dw){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$c(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$c(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tp()?np().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $c(e){return Yh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(e){ft(new Xe("platform-logger",t=>new tw(t),"PRIVATE")),ft(new Xe("heartbeat",t=>new bw(t),"PRIVATE")),Qe(Qa,Fc,e),Qe(Qa,Fc,"esm2017"),Qe("fire-js","")}zw("");function ru(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function up(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bw=up,cp=new yn("auth","Firebase",up());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new tu("@firebase/auth");function $w(e,...t){xs.logLevel<=U.WARN&&xs.warn(`Auth (${ci}): ${e}`,...t)}function qi(e,...t){xs.logLevel<=U.ERROR&&xs.error(`Auth (${ci}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,...t){throw iu(e,...t)}function Ye(e,...t){return iu(e,...t)}function Vw(e,t,n){const r=Object.assign(Object.assign({},Bw()),{[t]:n});return new yn("auth","Firebase",r).create(t,{appName:e.name})}function iu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cp.create(e,...t)}function R(e,t,...n){if(!e)throw iu(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qi(t),new Error(t)}function ht(e,t){e||st(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Hw(){return Vc()==="http:"||Vc()==="https:"}function Vc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hw()||ep()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=E0()||S0()}get(){return Ww()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new di(3e4,6e4);function wn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _n(e,t,n,r,i={}){return fp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ui(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),dp.fetch()(hp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function fp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gw),t);try{const i=new Yw(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Di(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Di(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Di(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vw(e,f,u);Ve(e,f)}}catch(i){if(i instanceof Ze)throw i;Ve(e,"network-request-failed",{message:String(i)})}}async function fi(e,t,n,r,i={}){const s=await _n(e,t,n,r,i);return"mfaPendingCredential"in s&&Ve(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?su(e.config,i):`${e.config.apiScheme}://${i}`}function Qw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),qw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(e,t,r);return i.customData._tokenResponse=n,i}function Hc(e){return e!==void 0&&e.enterprise!==void 0}class Jw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Qw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Xw(e,t){return _n(e,"GET","/v2/recaptchaConfig",wn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t){return _n(e,"POST","/v1/accounts:delete",t)}async function e_(e,t){return _n(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function t_(e,t=!1){const n=et(e),r=await n.getIdToken(t),i=ou(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Or($o(i.auth_time)),issuedAtTime:Or($o(i.iat)),expirationTime:Or($o(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $o(e){return Number(e)*1e3}function ou(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jh(n);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function n_(e){const t=ou(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ze&&r_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function r_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ei(e,e_(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?a_(s.providerUserInfo):[],a=o_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function s_(e){const t=et(e);await Ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function o_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function a_(e){return e.map(t=>{var{providerId:n}=t,r=ru(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e,t){const n=await fp(e,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=hp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):n_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ti;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ru(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ei(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return t_(this,t)}reload(){return s_(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ei(this,Zw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:v,isAnonymous:I,providerData:C,stsTokenManager:x}=n;R(m&&x,t,"internal-error");const P=ti.fromJSON(this.name,x);R(typeof m=="string",t,"internal-error"),vt(p,t.name),vt(g,t.name),R(typeof v=="boolean",t,"internal-error"),R(typeof I=="boolean",t,"internal-error"),vt(y,t.name),vt(w,t.name),vt(_,t.name),vt(N,t.name),vt(h,t.name),vt(d,t.name);const b=new rn({uid:m,auth:t,email:g,emailVerified:v,displayName:p,isAnonymous:I,photoURL:w,phoneNumber:y,tenantId:_,stsTokenManager:P,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&(b.providerData=C.map(L=>Object.assign({},L))),N&&(b._redirectEventId=N),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new ti;i.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ps(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Map;function ot(e){ht(e instanceof Function,"Expected a class definition");let t=Wc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mp.type="NONE";const Kc=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){return`firebase:${e}:${t}:${n}`}class $n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $n(ot(Kc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ot(Kc);const o=Qi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const p=rn._fromJSON(t,f);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $n(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $n(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_p(t))return"Blackberry";if(Ep(t))return"Webos";if(au(t))return"Safari";if((t.includes("chrome/")||vp(t))&&!t.includes("edge/"))return"Chrome";if(wp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gp(e=ce()){return/firefox\//i.test(e)}function au(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vp(e=ce()){return/crios\//i.test(e)}function yp(e=ce()){return/iemobile/i.test(e)}function wp(e=ce()){return/android/i.test(e)}function _p(e=ce()){return/blackberry/i.test(e)}function Ep(e=ce()){return/webos/i.test(e)}function eo(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function u_(e=ce()){var t;return eo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function c_(){return I0()&&document.documentMode===10}function Sp(e=ce()){return eo(e)||wp(e)||Ep(e)||_p(e)||/windows phone/i.test(e)||yp(e)}function d_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(e,t=[]){let n;switch(e){case"Browser":n=Gc(ce());break;case"Worker":n=`${Gc(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(e,t={}){return _n(e,"GET","/v2/passwordPolicy",wn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6;class m_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:p_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new f_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?et(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await h_(this),n=new m_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&$w(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function En(e){return et(e)}class qc{constructor(t){this.auth=t,this.observer=null,this.addObserver=N0(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function kp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",v_().appendChild(r)})}function y_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const w_="https://www.google.com/recaptcha/enterprise.js?render=",__="recaptcha-enterprise",E_="NO_RECAPTCHA";class S_{constructor(t){this.type=__,this.auth=En(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Xw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Hc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(E_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kp(w_+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Qc(e,t,n,r=!1){const i=new S_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Cp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Qc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(e,t){const n=rr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,t??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function k_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function C_(e,t,n){const r=En(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Tp(t),{host:o,port:a}=T_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x_()}function Tp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function T_(e){const t=Tp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yc(o)}}}function Yc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function x_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function P_(e,t){return _n(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(e,t){return fi(e,"POST","/v1/accounts:signInWithPassword",wn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(e,t){return fi(e,"POST","/v1/accounts:signInWithEmailLink",wn(e,t))}async function O_(e,t){return fi(e,"POST","/v1/accounts:signInWithEmailLink",wn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends lu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ni(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ni(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cp(t,n,"signInWithPassword",N_);case"emailLink":return R_(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return P_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return O_(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t){return fi(e,"POST","/v1/accounts:signInWithIdp",wn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="http://localhost";class dn extends lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ru(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Vn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Vn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Vn(t,n)}buildRequest(){const t={requestUri:A_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ui(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j_(e){const t=_r(Er(e)).link,n=t?_r(Er(t)).deep_link_id:null,r=_r(Er(e)).deep_link_id;return(r?_r(Er(r)).link:null)||r||n||t||e}class uu{constructor(t){var n,r,i,s,o,a;const l=_r(Er(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=L_((i=l.mode)!==null&&i!==void 0?i:null);R(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=j_(t);try{return new uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(t,n){return ni._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=uu.parseLink(n);return R(r,"argument-error"),ni._fromEmailAndCode(t,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends xp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends hi{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends hi{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends hi{constructor(){super("twitter.com")}static credential(t,n){return dn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(e,t){return fi(e,"POST","/v1/accounts:signUp",wn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await rn._fromIdTokenResponse(t,r,i),o=Jc(r);return new fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Jc(r);return new fn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Jc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Ze{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ns(t,n,r,i)}}function Pp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(e,s,t,r):s})}async function M_(e,t,n=!1){const r=await ei(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ei(e,Pp(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=ou(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(e.uid===a,r,"user-mismatch"),fn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(e,t,n=!1){const r="signIn",i=await Pp(e,r,t),s=await fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function U_(e,t){return Np(En(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(e){const t=En(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function F_(e,t,n){const r=En(e),o=await Cp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",D_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Rp(e),l}),a=await fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function z_(e,t,n){return U_(et(e),ir.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rp(e),r})}function B_(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function $_(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function V_(e,t,n,r){return et(e).onAuthStateChanged(t,n,r)}const Rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){const e=ce();return au(e)||eo(e)}const W_=1e3,K_=10;class Ap extends Op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H_()&&d_(),this.fallbackToPolling=Sp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);c_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,K_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ap.type="LOCAL";const G_=Ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends Op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lp.type="SESSION";const jp=Lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new to(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await q_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Y_(e){Je().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function J_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Z_(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebaseLocalStorageDb",eE=1,Os="firebaseLocalStorage",bp="fbase_key";class pi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function no(e,t){return e.transaction([Os],t?"readwrite":"readonly").objectStore(Os)}function tE(){const e=indexedDB.deleteDatabase(Mp);return new pi(e).toPromise()}function Za(){const e=indexedDB.open(Mp,eE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Os,{keyPath:bp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Os)?t(r):(r.close(),await tE(),t(await Za()))})})}async function Xc(e,t,n){const r=no(e,!0).put({[bp]:t,value:n});return new pi(r).toPromise()}async function nE(e,t){const n=no(e,!1).get(t),r=await new pi(n).toPromise();return r===void 0?null:r.value}function Zc(e,t){const n=no(e,!0).delete(t);return new pi(n).toPromise()}const rE=800,iE=3;class Up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>iE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(Z_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await J_(),!this.activeServiceWorker)return;this.sender=new Q_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||X_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Za();return await Xc(t,Rs,"1"),await Zc(t,Rs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>nE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=no(i,!1).getAll();return new pi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Up.type="LOCAL";const sE=Up;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e,t){return t?ot(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends lu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Vn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function aE(e){return Np(e.auth,new du(e),e.bypassAuthState)}function lE(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),b_(n,new du(e),e.bypassAuthState)}async function uE(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),M_(n,new du(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:Ve(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new di(2e3,1e4);class Dn extends Fp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cE.get())};t()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="pendingRedirect",Yi=new Map;class fE extends Fp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yi.get(this.auth._key());if(!t){try{const r=await hE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yi.set(this.auth._key(),t)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hE(e,t){const n=gE(t),r=mE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pE(e,t){Yi.set(e._key(),t)}function mE(e){return ot(e._redirectPersistence)}function gE(e){return Qi(dE,e.config.apiKey,e.name)}async function vE(e,t,n=!1){const r=En(e),i=oE(r,t),o=await new fE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=10*60*1e3;class wE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_E(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(t))}saveEventToCache(t){this.cachedEventUids.add(ed(t)),this.lastProcessedEventTime=Date.now()}}function ed(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _E(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(e,t={}){return _n(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IE=/^https?/;async function kE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await EE(e);for(const n of t)try{if(CE(n))return}catch{}Ve(e,"unauthorized-domain")}function CE(e){const t=Xa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IE.test(n))return!1;if(SE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new di(3e4,6e4);function td(){const e=Je().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function xE(e){return new Promise((t,n)=>{var r,i,s;function o(){td(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{td(),n(Ye(e,"network-request-failed"))},timeout:TE.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=y_("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ye(e,"network-request-failed"))},kp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ji=null,t})}let Ji=null;function PE(e){return Ji=Ji||xE(e),Ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new di(5e3,15e3),RE="__/auth/iframe",OE="emulator/auth/iframe",AE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jE(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?su(t,OE):`https://${e.config.authDomain}/${RE}`,r={apiKey:t.apiKey,appName:e.name,v:ci},i=LE.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ui(r).slice(1)}`}async function DE(e){const t=await PE(e),n=Je().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:jE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(e,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},NE.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,UE=600,FE="_blank",zE="http://localhost";class nd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BE(e,t,n,r=bE,i=UE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ME),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ce().toLowerCase();n&&(a=vp(u)?FE:n),gp(u)&&(t=t||zE,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,w])=>`${g}${y}=${w},`,"");if(u_(u)&&a!=="_self")return $E(t||"",a),new nd(null);const p=window.open(t||"",a,f);R(p,e,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function $E(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="__/auth/handler",HE="emulator/auth/handler",WE=encodeURIComponent("fac");async function rd(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(t instanceof xp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",P0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(t instanceof hi){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${WE}=${encodeURIComponent(l)}`:"";return`${KE(e)}?${ui(a).slice(1)}${u}`}function KE({config:e}){return e.emulator?su(e,HE):`https://${e.authDomain}/${VE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="webStorageSupport";class GE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jp,this._completeRedirectFn=vE,this._overrideRedirectResult=pE}async _openPopup(t,n,r,i){var s;ht((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rd(t,n,r,Xa(),i);return BE(t,o,cu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await rd(t,n,r,Xa(),i);return Y_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await DE(t),r=new wE(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vo,{type:Vo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vo];o!==void 0&&n(!!o),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sp()||au()||eo()}}const qE=GE;var id="@firebase/auth",sd="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JE(e){ft(new Xe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ip(e)},u=new g_(r,i,s,l);return k_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Xe("auth-internal",t=>{const n=En(t.getProvider("auth").getImmediate());return(r=>new QE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(id,sd,YE(e)),Qe(id,sd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=5*60,ZE=Zh("authIdTokenMaxAge")||XE;let od=null;const eS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZE)return;const i=n==null?void 0:n.token;od!==i&&(od=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ro(e=op()){const t=rr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I_(e,{popupRedirectResolver:qE,persistence:[sE,G_,jp]}),r=Zh("authTokenSyncURL");if(r){const s=eS(r);$_(n,s,()=>s(n.currentUser)),B_(n,o=>s(o))}const i=w0("auth");return i&&C_(n,`http://${i}`),n}JE("Browser");var tS="firebase",nS="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(tS,nS,"app");const rS=(e,t)=>t.some(n=>e instanceof n);let ad,ld;function iS(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,el=new WeakMap,$p=new WeakMap,Ho=new WeakMap,fu=new WeakMap;function oS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bp.set(n,e)}).catch(()=>{}),fu.set(t,e),t}function aS(e){if(el.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});el.set(e,t)}let tl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return el.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$p.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lS(e){tl=e(tl)}function uS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wo(this),t,...n);return $p.set(r,t.sort?t.sort():[t]),zt(r)}:sS().includes(e)?function(...t){return e.apply(Wo(this),t),zt(Bp.get(this))}:function(...t){return zt(e.apply(Wo(this),t))}}function cS(e){return typeof e=="function"?uS(e):(e instanceof IDBTransaction&&aS(e),rS(e,iS())?new Proxy(e,tl):e)}function zt(e){if(e instanceof IDBRequest)return oS(e);if(Ho.has(e))return Ho.get(e);const t=cS(e);return t!==e&&(Ho.set(e,t),fu.set(t,e)),t}const Wo=e=>fu.get(e);function dS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zt(o.result),l.oldVersion,l.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const fS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],Ko=new Map;function ud(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ko.get(t))return Ko.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=hS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ko.set(t,s),s}lS(e=>({...e,get:(t,n,r)=>ud(t,n)||e.get(t,n,r),has:(t,n)=>!!ud(t,n)||e.has(t,n)}));const Vp="@firebase/installations",hu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=1e4,Wp=`w:${hu}`,Kp="FIS_v2",pS="https://firebaseinstallations.googleapis.com/v1",mS=60*60*1e3,gS="installations",vS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hn=new yn(gS,vS,yS);function Gp(e){return e instanceof Ze&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp({projectId:e}){return`${pS}/projects/${e}/installations`}function Qp(e){return{token:e.token,requestStatus:2,expiresIn:_S(e.expiresIn),creationTime:Date.now()}}async function Yp(e,t){const r=(await t.json()).error;return hn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Jp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function wS(e,{refreshToken:t}){const n=Jp(e);return n.append("Authorization",ES(t)),n}async function Xp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function _S(e){return Number(e.replace("s","000"))}function ES(e){return`${Kp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=qp(e),i=Jp(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Kp,appId:e.appId,sdkVersion:Wp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Qp(u.authToken)}}else throw await Yp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=/^[cdef][\w-]{21}$/,nl="";function CS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=TS(e);return kS.test(n)?n:nl}catch{return nl}}function TS(e){return IS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function tm(e,t){const n=io(e);nm(n,t),xS(n,t)}function nm(e,t){const n=em.get(e);if(n)for(const r of n)r(t)}function xS(e,t){const n=PS();n&&n.postMessage({key:e,fid:t}),NS()}let en=null;function PS(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{nm(e.data.key,e.data.fid)}),en}function NS(){em.size===0&&en&&(en.close(),en=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="firebase-installations-database",OS=1,pn="firebase-installations-store";let Go=null;function pu(){return Go||(Go=dS(RS,OS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pn)}}})),Go}async function As(e,t){const n=io(e),i=(await pu()).transaction(pn,"readwrite"),s=i.objectStore(pn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&tm(e,t.fid),t}async function rm(e){const t=io(e),r=(await pu()).transaction(pn,"readwrite");await r.objectStore(pn).delete(t),await r.done}async function so(e,t){const n=io(e),i=(await pu()).transaction(pn,"readwrite"),s=i.objectStore(pn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&tm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(e){let t;const n=await so(e.appConfig,r=>{const i=AS(r),s=LS(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===nl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function AS(e){const t=e||{fid:CS(),registrationStatus:0};return im(t)}function LS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=jS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:DS(e)}:{installationEntry:t}}async function jS(e,t){try{const n=await SS(e,t);return As(e.appConfig,n)}catch(n){throw Gp(n)&&n.customData.serverCode===409?await rm(e.appConfig):await As(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function DS(e){let t=await cd(e.appConfig);for(;t.registrationStatus===1;)await Zp(100),t=await cd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mu(e);return r||n}return t}function cd(e){return so(e,t=>{if(!t)throw hn.create("installation-not-found");return im(t)})}function im(e){return MS(e)?{fid:e.fid,registrationStatus:0}:e}function MS(e){return e.registrationStatus===1&&e.registrationTime+Hp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS({appConfig:e,heartbeatServiceProvider:t},n){const r=US(e,n),i=wS(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Wp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xp(()=>fetch(r,a));if(l.ok){const u=await l.json();return Qp(u)}else throw await Yp("Generate Auth Token",l)}function US(e,{fid:t}){return`${qp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(e,t=!1){let n;const r=await so(e.appConfig,s=>{if(!sm(s))throw hn.create("not-registered");const o=s.authToken;if(!t&&BS(o))return s;if(o.requestStatus===1)return n=FS(e,t),s;{if(!navigator.onLine)throw hn.create("app-offline");const a=VS(s);return n=zS(e,a),a}});return n?await n:r.authToken}async function FS(e,t){let n=await dd(e.appConfig);for(;n.authToken.requestStatus===1;)await Zp(100),n=await dd(e.appConfig);const r=n.authToken;return r.requestStatus===0?gu(e,t):r}function dd(e){return so(e,t=>{if(!sm(t))throw hn.create("not-registered");const n=t.authToken;return HS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function zS(e,t){try{const n=await bS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await As(e.appConfig,r),n}catch(n){if(Gp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await As(e.appConfig,r)}throw n}}function sm(e){return e!==void 0&&e.registrationStatus===2}function BS(e){return e.requestStatus===2&&!$S(e)}function $S(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+mS}function VS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function HS(e){return e.requestStatus===1&&e.requestTime+Hp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(e){const t=e,{installationEntry:n,registrationPromise:r}=await mu(t);return r?r.catch(console.error):gu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(e,t=!1){const n=e;return await GS(n),(await gu(n,t)).token}async function GS(e){const{registrationPromise:t}=await mu(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(e){if(!e||!e.options)throw qo("App Configuration");if(!e.name)throw qo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qo(e){return hn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="installations",QS="installations-internal",YS=e=>{const t=e.getProvider("app").getImmediate(),n=qS(t),r=rr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JS=e=>{const t=e.getProvider("app").getImmediate(),n=rr(t,om).getImmediate();return{getId:()=>WS(n),getToken:i=>KS(n,i)}};function XS(){ft(new Xe(om,YS,"PUBLIC")),ft(new Xe(QS,JS,"PRIVATE"))}XS();Qe(Vp,hu);Qe(Vp,hu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="analytics",ZS="firebase_id",e1="origin",t1=60*1e3,n1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new tu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ce=new yn("analytics","Analytics",r1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(e){if(!e.startsWith(vu)){const t=Ce.create("invalid-gtag-resource",{gtagURL:e});return _e.warn(t.message),""}return e}function am(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function s1(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function o1(e,t){const n=s1("firebase-js-sdk-policy",{createScriptURL:i1}),r=document.createElement("script"),i=`${vu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function a1(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function l1(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await am(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){_e.error(a)}e("config",i,s)}async function u1(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await am(n);for(const l of o){const u=a.find(p=>p.measurementId===l),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){_e.error(s)}}function c1(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await u1(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await l1(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){_e.error(a)}}return i}function d1(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=c1(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function f1(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(vu)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=30,p1=1e3;class m1{constructor(t={},n=p1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lm=new m1;function g1(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function v1(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:g1(r)},s=n1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function y1(e,t=lm,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ce.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ce.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new E1;return setTimeout(async()=>{a.abort()},n!==void 0?n:t1),um({appId:r,apiKey:i,measurementId:s},o,a,t)}async function um(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=lm){var s;const{appId:o,measurementId:a}=e;try{await w1(r,t)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await v1(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!_1(u)){if(i.deleteThrottleMetadata(o),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dc(n,i.intervalMillis,h1):Dc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),_e.debug(`Calling attemptFetch again in ${f} millis`),um(e,p,r,i)}}function w1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ce.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function _1(e){if(!(e instanceof Ze)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class E1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function S1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(){if(tp())try{await np()}catch(e){return _e.warn(Ce.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return _e.warn(Ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function k1(e,t,n,r,i,s,o){var a;const l=y1(e);l.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>_e.error(y)),t.push(l);const u=I1().then(y=>{if(y)return r.getId()}),[f,p]=await Promise.all([l,u]);f1(s)||o1(s,f.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[e1]="firebase",g.update=!0,p!=null&&(g[ZS]=p),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(t){this.app=t}_delete(){return delete Ar[this.app.options.appId],Promise.resolve()}}let Ar={},fd=[];const hd={};let Qo="dataLayer",T1="gtag",pd,cm,md=!1;function x1(){const e=[];if(ep()&&e.push("This is a browser extension environment."),k0()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ce.create("invalid-analytics-context",{errorInfo:t});_e.warn(n.message)}}function P1(e,t,n){x1();const r=e.options.appId;if(!r)throw Ce.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ce.create("no-api-key");if(Ar[r]!=null)throw Ce.create("already-exists",{id:r});if(!md){a1(Qo);const{wrappedGtag:s,gtagCore:o}=d1(Ar,fd,hd,Qo,T1);cm=s,pd=o,md=!0}return Ar[r]=k1(e,fd,hd,t,pd,Qo,n),new C1(e)}function N1(e=op()){e=et(e);const t=rr(e,Ls);return t.isInitialized()?t.getImmediate():R1(e)}function R1(e,t={}){const n=rr(e,Ls);if(n.isInitialized()){const i=n.getImmediate();if(Xr(t,n.getOptions()))return i;throw Ce.create("already-initialized")}return n.initialize({options:t})}function O1(e,t,n,r){e=et(e),S1(cm,Ar[e.app.options.appId],t,n,r).catch(i=>_e.error(i))}const gd="@firebase/analytics",vd="0.10.0";function A1(){ft(new Xe(Ls,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return P1(r,i,n)},"PUBLIC")),ft(new Xe("analytics-internal",e,"PRIVATE")),Qe(gd,vd),Qe(gd,vd,"esm2017");function e(t){try{const n=t.getProvider(Ls).getImmediate();return{logEvent:(r,i,s)=>O1(n,r,i,s)}}catch(n){throw Ce.create("interop-component-reg-failed",{reason:n})}}}A1();const L1={apiKey:"AIzaSyCZtRFfGXEld7ILPy5kAp8eifslPxAU61E",authDomain:"inspire-6d54d.firebaseapp.com",projectId:"inspire-6d54d",storageBucket:"inspire-6d54d.appspot.com",messagingSenderId:"1070609544896",appId:"1:1070609544896:web:3a657900902b99a47f5f25",measurementId:"G-S00T62R710"},mi=sp(L1);N1(mi);const j1=ro(mi),D1=()=>{if(S.useContext(sr))return c.jsx(Zs,{to:"/"});const[t,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState(!1),a=function(f){f.preventDefault(),z_(j1,t,r).then(p=>{p.user}).catch(p=>{o(!0)})},l=()=>{const f=document.getElementById("password");f.type=f.type==="password"?"text":"password"},u=function(){o(!1)};return c.jsx("div",{className:"account-wrapper",style:{backgroundImage:`url(${Gh})`},children:c.jsx("div",{className:"form-container flex",children:c.jsxs("form",{children:[c.jsx("h3",{children:"LOGIN"}),c.jsx("p",{children:"Welcome back to Inspire"}),s&&c.jsxs("div",{className:"toast-message",children:["The credentials do no match. ",c.jsx("i",{className:"fa-solid fa-xmark",onClick:u})]}),c.jsx("div",{className:"form-tag-container",children:c.jsx("input",{type:"email",name:"email",value:t,onChange:f=>n(f.target.value),autoComplete:"off",placeholder:"Email"})}),c.jsxs("div",{className:"form-tag-container",children:[c.jsx("input",{type:"password",name:"password",value:r,onChange:f=>i(f.target.value),id:"password",autoComplete:"off",placeholder:"Password"}),c.jsx("i",{className:"fa-regular fa-eye",id:"showBtn",onClick:l})]}),c.jsx("div",{className:"form-tag-container",children:c.jsx("button",{className:"btn-primary",onClick:a,children:"Login"})}),c.jsx("hr",{}),c.jsxs("div",{className:"flex",style:{justifyContent:"space-between"},children:[c.jsx("p",{children:"Don't have an account?"}),c.jsx(re,{to:"/account/sign-up",children:"Sign Up"})]})]})})})},M1=ro(mi),b1=()=>{if(S.useContext(sr))return c.jsx(Zs,{to:"/"});const[t,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState(!1),a=function(f){f.preventDefault(),F_(M1,t,r).then(p=>{const g=p.user;console.log("User Created The Credentials are -",g)}).catch(p=>{o(!0)})},l=f=>{const p=document.getElementById("password");p.type=p.type==="password"?"text":"password"},u=function(){o(!1)};return c.jsx("div",{className:"account-wrapper",style:{backgroundImage:`url(${Gh})`},children:c.jsx("div",{className:"form-container flex",children:c.jsxs("form",{children:[c.jsx("h3",{children:"SIGN UP"}),c.jsx("p",{children:"Register to Inspire"}),s&&c.jsxs("div",{className:"toast-message",children:["The email is already taken use different email. ",c.jsx("i",{className:"fa-solid fa-xmark",onClick:u})]}),c.jsx("div",{className:"form-tag-container",children:c.jsx("input",{type:"email",name:"email",value:t,onChange:f=>n(f.target.value),autoComplete:"off",placeholder:"Email"})}),c.jsxs("div",{className:"form-tag-container",children:[c.jsx("input",{type:"password",name:"password",value:r,onChange:f=>i(f.target.value),id:"password",autoComplete:"off",placeholder:"Password"}),c.jsx("i",{className:"fa-regular fa-eye",id:"showBtn",onClick:l})]}),c.jsx("div",{className:"form-tag-container",children:c.jsx("button",{className:"btn-primary",onClick:a,children:"Sign Up"})}),c.jsx("hr",{}),c.jsxs("div",{className:"flex",style:{justifyContent:"space-between"},children:[c.jsx("p",{children:"Already have an account?"}),c.jsx(re,{to:"/account/login",children:"Login"})]})]})})})},U1=()=>(S.useContext(sr),c.jsx("div",{id:"about-page",children:c.jsx("div",{className:"",children:c.jsx(Wh,{})})})),F1=()=>c.jsx("div",{id:"blog-listing-page",style:{backgroundColor:"#111"},children:c.jsx("div",{className:"container",children:c.jsx(Kh,{})})}),z1=()=>c.jsxs("div",{id:"contact-page",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"wrapper flex",children:[c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.275183871301!2d73.98769345687795!3d19.527632083311573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd08db7a25034d%3A0xe4ed7a15a8af7248!2sDhumalwadi%2C%20Maharashtra%20422601!5e0!3m2!1sen!2sin!4v1692435869358!5m2!1sen!2sin",loading:"lazy"})}),c.jsxs("div",{className:"contact-content",children:[c.jsx("h2",{children:"CONTACT US"}),c.jsxs("form",{action:"",children:[c.jsx("input",{type:"text",placeholder:"Name"}),c.jsx("input",{type:"email",placeholder:"Email"}),c.jsx("textarea",{name:"",rows:10,placeholder:"Enter your Message"}),c.jsx("button",{className:"btn-primary",children:"CONTACT"})]})]})]})}),c.jsx("div",{className:"container",children:c.jsx("div",{className:"flex"})})]});function B1({plan:e}){return c.jsxs("div",{className:"plan",children:[c.jsx("div",{className:"plan-name",children:c.jsx("h3",{children:e.planName})}),c.jsx("p",{className:"plan-description",children:e.planDescription}),c.jsxs("div",{className:"plan-pricing",children:[c.jsxs("span",{className:"text-highlighter",children:[e.planPricing," /"]})," month"]}),c.jsx("hr",{}),c.jsx("ul",{children:e.planBenefits.map((t,n)=>c.jsxs("li",{children:[c.jsx("i",{className:"fa-solid fa-check"})," ",t]},n))}),c.jsx("hr",{}),c.jsx("a",{href:"tel: +91 9067183889",children:c.jsx("button",{className:"btn-primary",children:"Call Now"})})]})}const $1=()=>{const e=[{id:1,planName:"Pro",planDescription:"Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!",planPricing:"₹500",planBenefits:["Access to Gym Facilities","Flexible Hours","Locker Room Access","Discounts on Classes"]},{id:2,planName:"Pro Plus",planDescription:"Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!",planPricing:"₹800",planBenefits:["Access to Gym Facilities","24/7 Access","Personal Training Session","Nutrition Consultation","Priority Class Booking","Guest Passes"]},{id:3,planName:"Custom",planDescription:"Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!",planPricing:"From ₹900",planBenefits:["Unlimited Personal Training","Customized Nutrition Plan","Access to Specialty Classes","Monthly Health Checkups","Exclusive Events","Discounts on Merchandise"]}];return c.jsx("div",{id:"subscription-page",children:c.jsxs("div",{className:"container",children:[c.jsx("h2",{children:"CHOOSE RIGHT SUBSCRIPTION PAGE"}),c.jsx("p",{children:"Select best plan ensuring the a perfect match. Need more or less? Customize your subscription for a seamless fit!"}),c.jsx("div",{className:"plans-container flex",children:e.map((t,n)=>c.jsx(B1,{plan:t},n))})]})})};const V1="/assets/logo.png",H1=()=>{const e=S.useContext(sr),t=function(){const n=document.querySelector("nav ul"),r=document.querySelector("body"),i=n.querySelectorAll("li");n.classList.toggle("toggle-nav-bar"),r.classList.toggle("body-overflow"),i.forEach(s=>{s.addEventListener("click",()=>{n.classList.remove("toggle-nav-bar"),r.classList.remove("body-overflow")})})};return c.jsxs("nav",{className:"flex container",children:[c.jsx(re,{to:"/",children:c.jsxs("div",{className:"branding flex",children:[c.jsx("img",{src:V1,alt:""}),c.jsx("h1",{className:"text-highlighter",children:"INSPIRE"})]})}),c.jsxs("ul",{className:"flex",children:[c.jsx("li",{children:c.jsx(re,{to:"/blogs",children:"Blogs"})}),c.jsx("li",{children:c.jsx(re,{to:"/subscription",children:"Subscription"})}),c.jsx("li",{children:c.jsx(re,{to:"/about",children:"About"})}),c.jsx("li",{children:c.jsx(re,{to:"/contact",children:"Contact"})}),c.jsxs("li",{children:[!e&&c.jsxs(re,{to:"/account/login",children:[" ",c.jsx("button",{className:"btn-primary",children:"Login"})," "]}),e&&c.jsx(re,{to:"/account/profile",children:c.jsx("button",{className:"btn-primary",children:"Profile"})})]})]}),c.jsx("i",{className:"fa-solid fa-bars",onClick:()=>{t()}})]})};const ri={_origin:"https://api.emailjs.com"},W1=(e,t="https://api.emailjs.com")=>{ri._userID=e,ri._origin=t},dm=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class yd{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const fm=(e,t,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new yd(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new yd(o))}),s.open("POST",ri._origin+e,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(t)}),K1=(e,t,n,r)=>{const i=r||ri._userID;return dm(i,e,t),fm("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},G1=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},q1=(e,t,n,r)=>{const i=r||ri._userID,s=G1(n);dm(i,e,t);const o=new FormData(s);return o.append("lib_version","3.11.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),fm("/api/v1.0/email/send-form",o)},Q1={init:W1,send:K1,sendForm:q1},Y1=()=>{const e=S.useRef(),t=n=>{n.preventDefault(),Q1.sendForm("service_2x4kkdp","template_wg0sw96",e.current,"Y-OWIHuTfDyLT-40g").then(r=>{console.log(r.text)},r=>{console.log(r.text)})};return c.jsxs("footer",{children:[c.jsxs("div",{className:"flex container",children:[c.jsxs("div",{children:[c.jsx(re,{to:"/",children:c.jsx("h1",{className:"text-highlighter",children:"INSPIRE"})}),c.jsx("p",{children:"Get fit and strong at the gym. Build muscle, burn calories, and boost your energy with cardio, weights, and expert guidance."})]}),c.jsxs("div",{className:"important-links",children:[c.jsx("h3",{children:"Important Links"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(re,{to:"/blogs",children:"Blogs"})}),c.jsx("li",{children:c.jsx(re,{to:"/subscription",children:"Subscription"})}),c.jsx("li",{children:c.jsx(re,{to:"/about",children:"About"})}),c.jsx("li",{children:c.jsx(re,{to:"/contact",children:"Contact"})})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"Newletter"}),c.jsxs("form",{ref:e,onSubmit:t,children:[c.jsx("input",{type:"hidden",name:"message",value:"Thanks for subscribing to Newsletter of Inspire"}),c.jsx("div",{className:"form-tag-container",children:c.jsx("input",{type:"email",placeholder:"Enter you email",name:"user_email"})}),c.jsx("div",{className:"form-tag-container",children:c.jsx("button",{type:"submit",className:"btn-primary",children:"Subscribe"})})]})]})]}),c.jsxs("div",{className:"copyright-socials flex",children:[c.jsx("p",{children:"© INSPIRE 2023"}),c.jsxs("div",{className:"socials",children:[c.jsx("a",{href:"https://www.instagram.com/athleanx",target:"_blank",children:c.jsx("i",{className:"fa-brands fa-instagram"})}),c.jsx("a",{href:"https://www.facebook.com/athleanx",target:"_blank",children:c.jsx("i",{className:"fa-brands fa-facebook"})}),c.jsx("a",{href:"https://www.youtube.com/@athleanx",target:"_blank",children:c.jsx("i",{className:"fa-brands fa-youtube"})})]})]})]})},J1=()=>c.jsx("div",{children:c.jsx(Py,{})}),X1="/assets/no-user.jpg",Z1=ro(mi);function eI(){const e=S.useContext(sr),t=function(){Z1.signOut()};return e?c.jsx("div",{id:"profile-page",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"flex",children:[c.jsx("img",{src:X1,alt:""}),c.jsxs("div",{className:"user-data",children:[c.jsx("span",{children:"HELLO EVERYBODY, I AM"}),c.jsx("h2",{children:"JOHN SMIT"}),c.jsx("p",{children:"I'm John Smith, a fitness enthusiast who's deeply committed to a healthy and active lifestyle. With a strong passion for weightlifting and nutrition, I've spent years in the gym, honing my physical strength and endurance. I believe in the transformative power of fitness and aim to motivate and guide others on their wellness journey. Whether it's hitting personal records or inspiring positive changes in those around me, I'm driven to make fitness a cornerstone of my life."}),c.jsxs("div",{className:"socials",children:[c.jsx("a",{target:"_blank",href:"https://www.facebook.com/athleanx",children:c.jsx("i",{className:"fa-brands fa-facebook"})}),c.jsx("a",{target:"_blank",href:"https://www.instagram.com/athleanx",children:c.jsx("i",{className:"fa-brands fa-instagram"})}),c.jsx("a",{target:"_blank",href:"tel: +919067183889",children:c.jsx("i",{className:"fa-brands fa-whatsapp"})}),c.jsx("a",{target:"_blank",href:"https://www.youtube.com/@athleanx",children:c.jsx("i",{className:"fa-brands fa-youtube"})})]}),c.jsx("button",{onClick:t,className:"btn-primary",children:"LOGOUT"})]})]})})}):c.jsx(Zs,{to:"/account/login"})}const sr=S.createContext(!1),tI=ro(mi);function nI(){const[e,t]=S.useState(!1);return S.useEffect(()=>{V_(tI,n=>{t(n||!1)})},[]),c.jsx(c.Fragment,{children:c.jsxs(sr.Provider,{value:e,children:[c.jsx(H1,{}),c.jsxs(Ry,{children:[c.jsx(Ee,{path:"/",element:c.jsx(d0,{})}),c.jsxs(Ee,{element:c.jsx(J1,{}),children:[c.jsx(Ee,{index:!0,path:"/account",element:c.jsx(Zs,{to:"/account/login"})}),c.jsx(Ee,{path:"/account/login",element:c.jsx(D1,{})}),c.jsx(Ee,{path:"/account/sign-up",element:c.jsx(b1,{})}),c.jsx(Ee,{path:"/account/profile",element:c.jsx(eI,{})})]}),c.jsx(Ee,{path:"/about",element:c.jsx(U1,{})}),c.jsx(Ee,{path:"/blogs",element:c.jsx(F1,{})}),c.jsx(Ee,{path:"/contact",element:c.jsx(z1,{})}),c.jsx(Ee,{path:"/subscription",element:c.jsx($1,{})}),c.jsx(Ee,{path:"/blog/:id",element:c.jsx(c.Fragment,{children:"india"})}),c.jsx(Ee,{path:"*",element:c.jsx("h1",{children:"Not Fund"})})]}),c.jsx(Y1,{})]})})}Yo.createRoot(document.getElementById("root")).render(c.jsx(Pd.StrictMode,{children:c.jsx(by,{children:c.jsx(nI,{})})}));
