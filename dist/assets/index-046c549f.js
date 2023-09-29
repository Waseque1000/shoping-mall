function H0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vp={exports:{}},ko={},Kp={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),W0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),Q0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),q0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),X0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),sf=Symbol.iterator;function e1(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Yp={};function hi(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Qp}hi.prototype.isReactComponent={};hi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qp(){}qp.prototype=hi.prototype;function ku(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Qp}var Eu=ku.prototype=new qp;Eu.constructor=ku;Gp(Eu,hi.prototype);Eu.isPureReactComponent=!0;var of=Array.isArray,Jp=Object.prototype.hasOwnProperty,Su={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Jp.call(t,r)&&!Xp.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ca,type:e,key:a,ref:s,props:i,_owner:Su.current}}function t1(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function n1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n1(""+e.key):t.toString(36)}function xs(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ca:case W0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ol(s,0):r,of(i)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),xs(i,t,n,"",function(u){return u})):i!=null&&(Au(i)&&(i=t1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",of(e))for(var o=0;o<e.length;o++){a=e[o];var l=r+ol(a,o);s+=xs(a,t,n,l,i)}else if(l=e1(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=r+ol(a,o++),s+=xs(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ka(e,t,n){if(e==null)return e;var r=[],i=0;return xs(e,r,"","",function(a){return t.call(n,a,i++)}),r}function r1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ws={transition:null},i1={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ws,ReactCurrentOwner:Su};Y.Children={map:Ka,forEach:function(e,t,n){Ka(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ka(e,function(){t++}),t},toArray:function(e){return Ka(e,function(t){return t})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=hi;Y.Fragment=V0;Y.Profiler=Q0;Y.PureComponent=ku;Y.StrictMode=K0;Y.Suspense=J0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gp({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Su.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Jp.call(t,l)&&!Xp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Ca,type:e.type,key:i,ref:a,props:r,_owner:s}};Y.createContext=function(e){return e={$$typeof:Y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G0,_context:e},e.Consumer=e};Y.createElement=Zp;Y.createFactory=function(e){var t=Zp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:q0,render:e}};Y.isValidElement=Au;Y.lazy=function(e){return{$$typeof:Z0,_payload:{_status:-1,_result:e},_init:r1}};Y.memo=function(e,t){return{$$typeof:X0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ws.transition;ws.transition={};try{e()}finally{ws.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return $e.current.useCallback(e,t)};Y.useContext=function(e){return $e.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};Y.useEffect=function(e,t){return $e.current.useEffect(e,t)};Y.useId=function(){return $e.current.useId()};Y.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return $e.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};Y.useRef=function(e){return $e.current.useRef(e)};Y.useState=function(e){return $e.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return $e.current.useTransition()};Y.version="18.2.0";Kp.exports=Y;var T=Kp.exports;const Eo=Wp(T),a1=H0({__proto__:null,default:Eo},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=T,o1=Symbol.for("react.element"),l1=Symbol.for("react.fragment"),c1=Object.prototype.hasOwnProperty,u1=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d1={key:!0,ref:!0,__self:!0,__source:!0};function em(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)c1.call(t,r)&&!d1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:o1,type:e,key:a,ref:s,props:i,_owner:u1.current}}ko.Fragment=l1;ko.jsx=em;ko.jsxs=em;Vp.exports=ko;var c=Vp.exports,tc={},tm={exports:{}},nt={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,F){var W=C.length;C.push(F);e:for(;0<W;){var ue=W-1>>>1,be=C[ue];if(0<i(be,F))C[ue]=F,C[W]=be,W=ue;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var F=C[0],W=C.pop();if(W!==F){C[0]=W;e:for(var ue=0,be=C.length,Nr=be>>>1;ue<Nr;){var re=2*(ue+1)-1,Mt=C[re],St=re+1,Ir=C[St];if(0>i(Mt,W))St<be&&0>i(Ir,Mt)?(C[ue]=Ir,C[St]=W,ue=St):(C[ue]=Mt,C[re]=W,ue=re);else if(St<be&&0>i(Ir,W))C[ue]=Ir,C[St]=W,ue=St;else break e}}return F}function i(C,F){var W=C.sortIndex-F.sortIndex;return W!==0?W:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],u=[],d=1,f=null,m=3,y=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=C)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function p(C){if(w=!1,v(C),!x)if(n(l)!==null)x=!0,qe(E);else{var F=n(u);F!==null&&Et(p,F.startTime-C)}}function E(C,F){x=!1,w&&(w=!1,g(P),P=-1),y=!0;var W=m;try{for(v(F),f=n(l);f!==null&&(!(f.expirationTime>F)||C&&!Ie());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,m=f.priorityLevel;var be=ue(f.expirationTime<=F);F=e.unstable_now(),typeof be=="function"?f.callback=be:f===n(l)&&r(l),v(F)}else r(l);f=n(l)}if(f!==null)var Nr=!0;else{var re=n(u);re!==null&&Et(p,re.startTime-F),Nr=!1}return Nr}finally{f=null,m=W,y=!1}}var I=!1,N=null,P=-1,z=5,M=-1;function Ie(){return!(e.unstable_now()-M<z)}function ne(){if(N!==null){var C=e.unstable_now();M=C;var F=!0;try{F=N(!0,C)}finally{F?kt():(I=!1,N=null)}}else I=!1}var kt;if(typeof h=="function")kt=function(){h(ne)};else if(typeof MessageChannel<"u"){var cn=new MessageChannel,un=cn.port2;cn.port1.onmessage=ne,kt=function(){un.postMessage(null)}}else kt=function(){S(ne,0)};function qe(C){N=C,I||(I=!0,kt())}function Et(C,F){P=S(function(){C(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,qe(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var W=m;m=F;try{return C()}finally{m=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var W=m;m=C;try{return F()}finally{m=W}},e.unstable_scheduleCallback=function(C,F,W){var ue=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ue+W:ue):W=ue,C){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=W+be,C={id:d++,callback:F,priorityLevel:C,startTime:W,expirationTime:be,sortIndex:-1},W>ue?(C.sortIndex=W,t(u,C),n(l)===null&&C===n(u)&&(w?(g(P),P=-1):w=!0,Et(p,W-ue))):(C.sortIndex=be,t(l,C),x||y||(x=!0,qe(E))),C},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(C){var F=m;return function(){var W=m;m=F;try{return C.apply(this,arguments)}finally{m=W}}}})(rm);nm.exports=rm;var f1=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=T,tt=f1;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var am=new Set,ta={};function Er(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(ta[e]=t,e=0;e<t.length;e++)am.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,h1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},uf={};function p1(e){return nc.call(uf,e)?!0:nc.call(cf,e)?!1:h1.test(e)?uf[e]=!0:(cf[e]=!0,!1)}function m1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g1(e,t,n,r){if(t===null||typeof t>"u"||m1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function Nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_u,Nu);Re[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_u,Nu);Re[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_u,Nu);Re[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iu(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g1(t,n,i,r)&&(n=null),r||i===null?p1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),om=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),ac=Symbol.for("react.suspense_list"),Pu=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),df=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,ll;function Li(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var cl=!1;function ul(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Li(e):""}function v1(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function sc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case Pr:return"Portal";case rc:return"Profiler";case Cu:return"StrictMode";case ic:return"Suspense";case ac:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case om:return(e.displayName||"Context")+".Consumer";case sm:return(e._context.displayName||"Context")+".Provider";case Tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pu:return t=e.displayName||null,t!==null?t:sc(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return sc(e(t))}catch{}}return null}function y1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x1(e){var t=cm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ga(e){e._valueTracker||(e._valueTracker=x1(e))}function um(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oc(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ff(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dm(e,t){t=t.checked,t!=null&&Iu(e,"checked",t,!1)}function lc(e,t){dm(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cc(e,t.type,n):t.hasOwnProperty("defaultValue")&&cc(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cc(e,t,n){(t!=="number"||Ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mi=Array.isArray;function Gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Mi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function fm(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(e){w1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bi[t]=Bi[e]})});function mm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bi.hasOwnProperty(e)&&Bi[e]?(""+t).trim():t+"px"}function gm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var b1=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(e,t){if(t){if(b1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function hc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mc=null,Yr=null,qr=null;function gf(e){if(e=ja(e)){if(typeof mc!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Io(t),mc(e.stateNode,e.type,t))}}function vm(e){Yr?qr?qr.push(e):qr=[e]:Yr=e}function ym(){if(Yr){var e=Yr,t=qr;if(qr=Yr=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function xm(e,t){return e(t)}function wm(){}var dl=!1;function bm(e,t,n){if(dl)return e(t,n);dl=!0;try{return xm(e,t,n)}finally{dl=!1,(Yr!==null||qr!==null)&&(wm(),ym())}}function ra(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var gc=!1;if(qt)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{gc=!1}function k1(e,t,n,r,i,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var $i=!1,Fs=null,Us=!1,vc=null,E1={onError:function(e){$i=!0,Fs=e}};function S1(e,t,n,r,i,a,s,o,l){$i=!1,Fs=null,k1.apply(E1,arguments)}function A1(e,t,n,r,i,a,s,o,l){if(S1.apply(this,arguments),$i){if($i){var u=Fs;$i=!1,Fs=null}else throw Error(_(198));Us||(Us=!0,vc=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function km(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vf(e){if(Sr(e)!==e)throw Error(_(188))}function _1(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return vf(i),e;if(a===r)return vf(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Em(e){return e=_1(e),e!==null?Sm(e):null}function Sm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sm(e);if(t!==null)return t;e=e.sibling}return null}var Am=tt.unstable_scheduleCallback,yf=tt.unstable_cancelCallback,N1=tt.unstable_shouldYield,I1=tt.unstable_requestPaint,we=tt.unstable_now,C1=tt.unstable_getCurrentPriorityLevel,Ru=tt.unstable_ImmediatePriority,_m=tt.unstable_UserBlockingPriority,zs=tt.unstable_NormalPriority,T1=tt.unstable_LowPriority,Nm=tt.unstable_IdlePriority,So=null,Ct=null;function P1(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:O1,j1=Math.log,R1=Math.LN2;function O1(e){return e>>>=0,e===0?32:31-(j1(e)/R1|0)|0}var qa=64,Ja=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=Fi(o):(a&=s,a!==0&&(r=Fi(a)))}else s=n&~i,s!==0?r=Fi(s):a!==0&&(r=Fi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function D1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-xt(a),o=1<<s,l=i[s];l===-1?(!(o&n)||o&r)&&(i[s]=D1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function yc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Im(){var e=qa;return qa<<=1,!(qa&4194240)&&(qa=64),e}function fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function M1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function Cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tm,Du,Pm,jm,Rm,xc=!1,Xa=[],_n=null,Nn=null,In=null,ia=new Map,aa=new Map,yn=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(t.pointerId)}}function _i(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ja(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function U1(e,t,n,r,i){switch(t){case"focusin":return _n=_i(_n,e,t,n,r,i),!0;case"dragenter":return Nn=_i(Nn,e,t,n,r,i),!0;case"mouseover":return In=_i(In,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ia.set(a,_i(ia.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,aa.set(a,_i(aa.get(a)||null,e,t,n,r,i)),!0}return!1}function Om(e){var t=Zn(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=km(n),t!==null){e.blockedOn=t,Rm(e.priority,function(){Pm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return t=ja(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function wf(e,t,n){bs(e)&&n.delete(t)}function z1(){xc=!1,_n!==null&&bs(_n)&&(_n=null),Nn!==null&&bs(Nn)&&(Nn=null),In!==null&&bs(In)&&(In=null),ia.forEach(wf),aa.forEach(wf)}function Ni(e,t){e.blockedOn===t&&(e.blockedOn=null,xc||(xc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,z1)))}function sa(e){function t(i){return Ni(i,e)}if(0<Xa.length){Ni(Xa[0],e);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Ni(_n,e),Nn!==null&&Ni(Nn,e),In!==null&&Ni(In,e),ia.forEach(t),aa.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&yn.shift()}var Jr=sn.ReactCurrentBatchConfig,$s=!0;function B1(e,t,n,r){var i=X,a=Jr.transition;Jr.transition=null;try{X=1,Lu(e,t,n,r)}finally{X=i,Jr.transition=a}}function $1(e,t,n,r){var i=X,a=Jr.transition;Jr.transition=null;try{X=4,Lu(e,t,n,r)}finally{X=i,Jr.transition=a}}function Lu(e,t,n,r){if($s){var i=wc(e,t,n,r);if(i===null)kl(e,t,r,Hs,n),xf(e,r);else if(U1(i,e,t,n,r))r.stopPropagation();else if(xf(e,r),t&4&&-1<F1.indexOf(e)){for(;i!==null;){var a=ja(i);if(a!==null&&Tm(a),a=wc(e,t,n,r),a===null&&kl(e,t,r,Hs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else kl(e,t,r,null,n)}}var Hs=null;function wc(e,t,n,r){if(Hs=null,e=ju(r),e=Zn(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=km(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hs=e,null}function Dm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C1()){case Ru:return 1;case _m:return 4;case zs:case T1:return 16;case Nm:return 536870912;default:return 16}default:return 16}}var En=null,Mu=null,ks=null;function Lm(){if(ks)return ks;var e,t=Mu,n=t.length,r,i="value"in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return ks=i.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Za(){return!0}function bf(){return!1}function rt(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Za:bf,this.isPropagationStopped=bf,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=rt(pi),Pa=me({},pi,{view:0,detail:0}),H1=rt(Pa),hl,pl,Ii,Ao=me({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(hl=e.screenX-Ii.screenX,pl=e.screenY-Ii.screenY):pl=hl=0,Ii=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),kf=rt(Ao),W1=me({},Ao,{dataTransfer:0}),V1=rt(W1),K1=me({},Pa,{relatedTarget:0}),ml=rt(K1),Q1=me({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),G1=rt(Q1),Y1=me({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q1=rt(Y1),J1=me({},pi,{data:0}),Ef=rt(J1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function Uu(){return tx}var nx=me({},Pa,{key:function(e){if(e.key){var t=X1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=rt(nx),ix=me({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=rt(ix),ax=me({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),sx=rt(ax),ox=me({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=rt(ox),cx=me({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=rt(cx),dx=[9,13,27,32],zu=qt&&"CompositionEvent"in window,Hi=null;qt&&"documentMode"in document&&(Hi=document.documentMode);var fx=qt&&"TextEvent"in window&&!Hi,Mm=qt&&(!zu||Hi&&8<Hi&&11>=Hi),Af=String.fromCharCode(32),_f=!1;function Fm(e,t){switch(e){case"keyup":return dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function hx(e,t){switch(e){case"compositionend":return Um(t);case"keypress":return t.which!==32?null:(_f=!0,Af);case"textInput":return e=t.data,e===Af&&_f?null:e;default:return null}}function px(e,t){if(Rr)return e==="compositionend"||!zu&&Fm(e,t)?(e=Lm(),ks=Mu=En=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mm&&t.locale!=="ko"?null:t.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mx[e.type]:t==="textarea"}function zm(e,t,n,r){vm(r),t=Ws(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wi=null,oa=null;function gx(e){Jm(e,0)}function _o(e){var t=Lr(e);if(um(t))return e}function vx(e,t){if(e==="change")return t}var Bm=!1;if(qt){var gl;if(qt){var vl="oninput"in document;if(!vl){var If=document.createElement("div");If.setAttribute("oninput","return;"),vl=typeof If.oninput=="function"}gl=vl}else gl=!1;Bm=gl&&(!document.documentMode||9<document.documentMode)}function Cf(){Wi&&(Wi.detachEvent("onpropertychange",$m),oa=Wi=null)}function $m(e){if(e.propertyName==="value"&&_o(oa)){var t=[];zm(t,oa,e,ju(e)),bm(gx,t)}}function yx(e,t,n){e==="focusin"?(Cf(),Wi=t,oa=n,Wi.attachEvent("onpropertychange",$m)):e==="focusout"&&Cf()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(oa)}function wx(e,t){if(e==="click")return _o(t)}function bx(e,t){if(e==="input"||e==="change")return _o(t)}function kx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:kx;function la(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function Tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pf(e,t){var n=Tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function Hm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wm(){for(var e=window,t=Ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ms(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ex(e){var t=Wm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Pf(n,a);var s=Pf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sx=qt&&"documentMode"in document&&11>=document.documentMode,Or=null,bc=null,Vi=null,kc=!1;function jf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||Or==null||Or!==Ms(r)||(r=Or,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&la(Vi,r)||(Vi=r,r=Ws(bc,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},yl={},Vm={};qt&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function No(e){if(yl[e])return yl[e];if(!Dr[e])return e;var t=Dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vm)return yl[e]=t[n];return e}var Km=No("animationend"),Qm=No("animationiteration"),Gm=No("animationstart"),Ym=No("transitionend"),qm=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){qm.set(e,t),Er(t,[e])}for(var xl=0;xl<Rf.length;xl++){var wl=Rf[xl],Ax=wl.toLowerCase(),_x=wl[0].toUpperCase()+wl.slice(1);$n(Ax,"on"+_x)}$n(Km,"onAnimationEnd");$n(Qm,"onAnimationIteration");$n(Gm,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Ym,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Of(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A1(r,t,void 0,e),e.currentTarget=null}function Jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Of(i,o,u),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Of(i,o,u),a=l}}}if(Us)throw e=vc,Us=!1,vc=null,e}function ae(e,t){var n=t[Nc];n===void 0&&(n=t[Nc]=new Set);var r=e+"__bubble";n.has(r)||(Xm(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),Xm(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function ca(e){if(!e[ts]){e[ts]=!0,am.forEach(function(n){n!=="selectionchange"&&(Nx.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,bl("selectionchange",!1,t))}}function Xm(e,t,n,r){switch(Dm(t)){case 1:var i=B1;break;case 4:i=$1;break;default:i=Lu}n=i.bind(null,t,n,e),i=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function kl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Zn(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}bm(function(){var u=a,d=ju(n),f=[];e:{var m=qm.get(e);if(m!==void 0){var y=Fu,x=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":y=rx;break;case"focusin":x="focus",y=ml;break;case"focusout":x="blur",y=ml;break;case"beforeblur":case"afterblur":y=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sx;break;case Km:case Qm:case Gm:y=G1;break;case Ym:y=lx;break;case"scroll":y=H1;break;case"wheel":y=ux;break;case"copy":case"cut":case"paste":y=q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sf}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var h=u,v;h!==null;){v=h;var p=v.stateNode;if(v.tag===5&&p!==null&&(v=p,g!==null&&(p=ra(h,g),p!=null&&w.push(ua(h,p,v)))),S)break;h=h.return}0<w.length&&(m=new y(m,x,null,n,d),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==pc&&(x=n.relatedTarget||n.fromElement)&&(Zn(x)||x[Jt]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Zn(x):null,x!==null&&(S=Sr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=kf,p="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Sf,p="onPointerLeave",g="onPointerEnter",h="pointer"),S=y==null?m:Lr(y),v=x==null?m:Lr(x),m=new w(p,h+"leave",y,n,d),m.target=S,m.relatedTarget=v,p=null,Zn(d)===u&&(w=new w(g,h+"enter",x,n,d),w.target=v,w.relatedTarget=S,p=w),S=p,y&&x)t:{for(w=y,g=x,h=0,v=w;v;v=Cr(v))h++;for(v=0,p=g;p;p=Cr(p))v++;for(;0<h-v;)w=Cr(w),h--;for(;0<v-h;)g=Cr(g),v--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Cr(w),g=Cr(g)}w=null}else w=null;y!==null&&Df(f,m,y,w,!1),x!==null&&S!==null&&Df(f,S,x,w,!0)}}e:{if(m=u?Lr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=vx;else if(Nf(m))if(Bm)E=bx;else{E=xx;var I=yx}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=wx);if(E&&(E=E(e,u))){zm(f,E,n,d);break e}I&&I(e,m,u),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&cc(m,"number",m.value)}switch(I=u?Lr(u):window,e){case"focusin":(Nf(I)||I.contentEditable==="true")&&(Or=I,bc=u,Vi=null);break;case"focusout":Vi=bc=Or=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,jf(f,n,d);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":jf(f,n,d)}var N;if(zu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rr?Fm(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Mm&&n.locale!=="ko"&&(Rr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rr&&(N=Lm()):(En=d,Mu="value"in En?En.value:En.textContent,Rr=!0)),I=Ws(u,P),0<I.length&&(P=new Ef(P,e,null,n,d),f.push({event:P,listeners:I}),N?P.data=N:(N=Um(n),N!==null&&(P.data=N)))),(N=fx?hx(e,n):px(e,n))&&(u=Ws(u,"onBeforeInput"),0<u.length&&(d=new Ef("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=N))}Jm(f,t)})}function ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ws(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ra(e,n),a!=null&&r.unshift(ua(e,a,i)),a=ra(e,t),a!=null&&r.push(ua(e,a,i))),e=e.return}return r}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=ra(n,a),l!=null&&s.unshift(ua(n,l,o))):i||(l=ra(n,a),l!=null&&s.push(ua(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ix=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(Ix,`
`).replace(Cx,"")}function ns(e,t,n){if(t=Lf(t),Lf(e)!==t&&n)throw Error(_(425))}function Vs(){}var Ec=null,Sc=null;function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Mf=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof Mf<"u"?function(e){return Mf.resolve(null).then(e).catch(jx)}:_c;function jx(e){setTimeout(function(){throw e})}function El(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),sa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(t)}function Cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),Nt="__reactFiber$"+mi,da="__reactProps$"+mi,Jt="__reactContainer$"+mi,Nc="__reactEvents$"+mi,Rx="__reactListeners$"+mi,Ox="__reactHandles$"+mi;function Zn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[Nt])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function ja(e){return e=e[Nt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Io(e){return e[da]||null}var Ic=[],Mr=-1;function Hn(e){return{current:e}}function oe(e){0>Mr||(e.current=Ic[Mr],Ic[Mr]=null,Mr--)}function ie(e,t){Mr++,Ic[Mr]=e.current,e.current=t}var Fn={},Fe=Hn(Fn),Ke=Hn(!1),ur=Fn;function ai(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Ks(){oe(Ke),oe(Fe)}function Uf(e,t,n){if(Fe.current!==Fn)throw Error(_(168));ie(Fe,t),ie(Ke,n)}function Zm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,y1(e)||"Unknown",i));return me({},n,r)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,ur=Fe.current,ie(Fe,e),ie(Ke,Ke.current),!0}function zf(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Zm(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,oe(Ke),oe(Fe),ie(Fe,e)):oe(Ke),ie(Ke,n)}var Bt=null,Co=!1,Sl=!1;function eg(e){Bt===null?Bt=[e]:Bt.push(e)}function Dx(e){Co=!0,eg(e)}function Wn(){if(!Sl&&Bt!==null){Sl=!0;var e=0,t=X;try{var n=Bt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,Co=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),Am(Ru,Wn),i}finally{X=t,Sl=!1}}return null}var Fr=[],Ur=0,Gs=null,Ys=0,st=[],ot=0,dr=null,Wt=1,Vt="";function qn(e,t){Fr[Ur++]=Ys,Fr[Ur++]=Gs,Gs=e,Ys=t}function tg(e,t,n){st[ot++]=Wt,st[ot++]=Vt,st[ot++]=dr,dr=e;var r=Wt;e=Vt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var a=32-xt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Wt=1<<32-xt(t)+i|n<<i|r,Vt=a+e}else Wt=1<<a|n<<i|r,Vt=e}function $u(e){e.return!==null&&(qn(e,1),tg(e,1,0))}function Hu(e){for(;e===Gs;)Gs=Fr[--Ur],Fr[Ur]=null,Ys=Fr[--Ur],Fr[Ur]=null;for(;e===dr;)dr=st[--ot],st[ot]=null,Vt=st[--ot],st[ot]=null,Wt=st[--ot],st[ot]=null}var Ze=null,Xe=null,ce=!1,vt=null;function ng(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=Cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:Wt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Xe=null,!0):!1;default:return!1}}function Cc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tc(e){if(ce){var t=Xe;if(t){var n=t;if(!Bf(e,t)){if(Cc(e))throw Error(_(418));t=Cn(n.nextSibling);var r=Ze;t&&Bf(e,t)?ng(r,n):(e.flags=e.flags&-4097|2,ce=!1,Ze=e)}}else{if(Cc(e))throw Error(_(418));e.flags=e.flags&-4097|2,ce=!1,Ze=e}}}function $f(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function rs(e){if(e!==Ze)return!1;if(!ce)return $f(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ac(e.type,e.memoizedProps)),t&&(t=Xe)){if(Cc(e))throw rg(),Error(_(418));for(;t;)ng(e,t),t=Cn(t.nextSibling)}if($f(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?Cn(e.stateNode.nextSibling):null;return!0}function rg(){for(var e=Xe;e;)e=Cn(e.nextSibling)}function si(){Xe=Ze=null,ce=!1}function Wu(e){vt===null?vt=[e]:vt.push(e)}var Lx=sn.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qs=Hn(null),Js=null,zr=null,Vu=null;function Ku(){Vu=zr=Js=null}function Qu(e){var t=qs.current;oe(qs),e._currentValue=t}function Pc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){Js=e,Vu=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Vu!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Js===null)throw Error(_(308));zr=e,Js.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var er=null;function Gu(e){er===null?er=[e]:er.push(e)}function ig(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Gu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Gu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xs(e,t,n,r){var i=e.updateQueue;vn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;s=0,d=u=l=null,o=a;do{var m=o.lane,y=o.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,w=o;switch(m=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(y,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(y,f,m):x,m==null)break e;f=me({},f,m);break e;case 2:vn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else y={eventTime:y,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=y,l=f):d=d.next=y,s|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);hr|=s,e.lanes=s,e.memoizedState=f}}function Wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var sg=new im.Component().refs;function jc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=jn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,i),t!==null&&(wt(t,e,i,r),Ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=jn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,i),t!==null&&(wt(t,e,i,r),Ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=jn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tn(e,i,r),t!==null&&(wt(t,e,r,n),Ss(t,e,r))}};function Vf(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!la(n,r)||!la(i,a):!0}function og(e,t,n){var r=!1,i=Fn,a=t.contextType;return typeof a=="object"&&a!==null?a=ut(a):(i=Qe(t)?ur:Fe.current,r=t.contextTypes,a=(r=r!=null)?ai(e,i):Fn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Kf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Rc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=sg,Yu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ut(a):(a=Qe(t)?ur:Fe.current,i.context=ai(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(jc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),Xs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;o===sg&&(o=i.refs={}),s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qf(e){var t=e._init;return t(e._payload)}function lg(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Rn(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,h,v,p){return h===null||h.tag!==6?(h=Pl(v,g.mode,p),h.return=g,h):(h=i(h,v),h.return=g,h)}function l(g,h,v,p){var E=v.type;return E===jr?d(g,h,v.props.children,p,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gn&&Qf(E)===h.type)?(p=i(h,v.props),p.ref=Ci(g,h,v),p.return=g,p):(p=Ts(v.type,v.key,v.props,null,g.mode,p),p.ref=Ci(g,h,v),p.return=g,p)}function u(g,h,v,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=jl(v,g.mode,p),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function d(g,h,v,p,E){return h===null||h.tag!==7?(h=lr(v,g.mode,p,E),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Pl(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qa:return v=Ts(h.type,h.key,h.props,null,g.mode,v),v.ref=Ci(g,null,h),v.return=g,v;case Pr:return h=jl(h,g.mode,v),h.return=g,h;case gn:var p=h._init;return f(g,p(h._payload),v)}if(Mi(h)||Si(h))return h=lr(h,g.mode,v,null),h.return=g,h;is(g,h)}return null}function m(g,h,v,p){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:o(g,h,""+v,p);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return v.key===E?l(g,h,v,p):null;case Pr:return v.key===E?u(g,h,v,p):null;case gn:return E=v._init,m(g,h,E(v._payload),p)}if(Mi(v)||Si(v))return E!==null?null:d(g,h,v,p,null);is(g,v)}return null}function y(g,h,v,p,E){if(typeof p=="string"&&p!==""||typeof p=="number")return g=g.get(v)||null,o(h,g,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qa:return g=g.get(p.key===null?v:p.key)||null,l(h,g,p,E);case Pr:return g=g.get(p.key===null?v:p.key)||null,u(h,g,p,E);case gn:var I=p._init;return y(g,h,v,I(p._payload),E)}if(Mi(p)||Si(p))return g=g.get(v)||null,d(h,g,p,E,null);is(h,p)}return null}function x(g,h,v,p){for(var E=null,I=null,N=h,P=h=0,z=null;N!==null&&P<v.length;P++){N.index>P?(z=N,N=null):z=N.sibling;var M=m(g,N,v[P],p);if(M===null){N===null&&(N=z);break}e&&N&&M.alternate===null&&t(g,N),h=a(M,h,P),I===null?E=M:I.sibling=M,I=M,N=z}if(P===v.length)return n(g,N),ce&&qn(g,P),E;if(N===null){for(;P<v.length;P++)N=f(g,v[P],p),N!==null&&(h=a(N,h,P),I===null?E=N:I.sibling=N,I=N);return ce&&qn(g,P),E}for(N=r(g,N);P<v.length;P++)z=y(N,g,P,v[P],p),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?P:z.key),h=a(z,h,P),I===null?E=z:I.sibling=z,I=z);return e&&N.forEach(function(Ie){return t(g,Ie)}),ce&&qn(g,P),E}function w(g,h,v,p){var E=Si(v);if(typeof E!="function")throw Error(_(150));if(v=E.call(v),v==null)throw Error(_(151));for(var I=E=null,N=h,P=h=0,z=null,M=v.next();N!==null&&!M.done;P++,M=v.next()){N.index>P?(z=N,N=null):z=N.sibling;var Ie=m(g,N,M.value,p);if(Ie===null){N===null&&(N=z);break}e&&N&&Ie.alternate===null&&t(g,N),h=a(Ie,h,P),I===null?E=Ie:I.sibling=Ie,I=Ie,N=z}if(M.done)return n(g,N),ce&&qn(g,P),E;if(N===null){for(;!M.done;P++,M=v.next())M=f(g,M.value,p),M!==null&&(h=a(M,h,P),I===null?E=M:I.sibling=M,I=M);return ce&&qn(g,P),E}for(N=r(g,N);!M.done;P++,M=v.next())M=y(N,g,P,M.value,p),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?P:M.key),h=a(M,h,P),I===null?E=M:I.sibling=M,I=M);return e&&N.forEach(function(ne){return t(g,ne)}),ce&&qn(g,P),E}function S(g,h,v,p){if(typeof v=="object"&&v!==null&&v.type===jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:e:{for(var E=v.key,I=h;I!==null;){if(I.key===E){if(E=v.type,E===jr){if(I.tag===7){n(g,I.sibling),h=i(I,v.props.children),h.return=g,g=h;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gn&&Qf(E)===I.type){n(g,I.sibling),h=i(I,v.props),h.ref=Ci(g,I,v),h.return=g,g=h;break e}n(g,I);break}else t(g,I);I=I.sibling}v.type===jr?(h=lr(v.props.children,g.mode,p,v.key),h.return=g,g=h):(p=Ts(v.type,v.key,v.props,null,g.mode,p),p.ref=Ci(g,h,v),p.return=g,g=p)}return s(g);case Pr:e:{for(I=v.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=jl(v,g.mode,p),h.return=g,g=h}return s(g);case gn:return I=v._init,S(g,h,I(v._payload),p)}if(Mi(v))return x(g,h,v,p);if(Si(v))return w(g,h,v,p);is(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Pl(v,g.mode,p),h.return=g,g=h),s(g)):n(g,h)}return S}var oi=lg(!0),cg=lg(!1),Ra={},Tt=Hn(Ra),fa=Hn(Ra),ha=Hn(Ra);function tr(e){if(e===Ra)throw Error(_(174));return e}function qu(e,t){switch(ie(ha,t),ie(fa,e),ie(Tt,Ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dc(t,e)}oe(Tt),ie(Tt,t)}function li(){oe(Tt),oe(fa),oe(ha)}function ug(e){tr(ha.current);var t=tr(Tt.current),n=dc(t,e.type);t!==n&&(ie(fa,e),ie(Tt,n))}function Ju(e){fa.current===e&&(oe(Tt),oe(fa))}var he=Hn(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Xu(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var As=sn.ReactCurrentDispatcher,_l=sn.ReactCurrentBatchConfig,fr=0,pe=null,Ae=null,Ce=null,eo=!1,Ki=!1,pa=0,Mx=0;function De(){throw Error(_(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function ed(e,t,n,r,i,a){if(fr=a,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?Bx:$x,e=n(r,i),Ki){a=0;do{if(Ki=!1,pa=0,25<=a)throw Error(_(301));a+=1,Ce=Ae=null,t.updateQueue=null,As.current=Hx,e=n(r,i)}while(Ki)}if(As.current=to,t=Ae!==null&&Ae.next!==null,fr=0,Ce=Ae=pe=null,eo=!1,t)throw Error(_(300));return e}function td(){var e=pa!==0;return pa=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function dt(){if(Ae===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ce===null?pe.memoizedState:Ce.next;if(t!==null)Ce=t,Ae=e;else{if(e===null)throw Error(_(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ce===null?pe.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ma(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=s=null,l=null,u=a;do{var d=u.lane;if((fr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=r):l=l.next=f,pe.lanes|=d,hr|=d}u=u.next}while(u!==null&&u!==a);l===null?s=r:l.next=o,bt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,pe.lanes|=a,hr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=dt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);bt(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function dg(){}function fg(e,t){var n=pe,r=dt(),i=t(),a=!bt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ve=!0),r=r.queue,nd(mg.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ga(9,pg.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(_(349));fr&30||hg(n,t,i)}return i}function hg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pg(e,t,n,r){t.value=n,t.getSnapshot=r,gg(t)&&vg(e)}function mg(e,t,n){return n(function(){gg(t)&&vg(e)})}function gg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function vg(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function Gf(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t.queue=e,e=e.dispatch=zx.bind(null,pe,e),[t.memoizedState,e]}function ga(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yg(){return dt().memoizedState}function _s(e,t,n,r){var i=_t();pe.flags|=e,i.memoizedState=ga(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=dt();r=r===void 0?null:r;var a=void 0;if(Ae!==null){var s=Ae.memoizedState;if(a=s.destroy,r!==null&&Zu(r,s.deps)){i.memoizedState=ga(t,n,a,r);return}}pe.flags|=e,i.memoizedState=ga(1|t,n,a,r)}function Yf(e,t){return _s(8390656,8,e,t)}function nd(e,t){return Po(2048,8,e,t)}function xg(e,t){return Po(4,2,e,t)}function wg(e,t){return Po(4,4,e,t)}function bg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kg(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,bg.bind(null,t,e),n)}function rd(){}function Eg(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sg(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ag(e,t,n){return fr&21?(bt(n,t)||(n=Im(),pe.lanes|=n,hr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Fx(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{X=n,_l.transition=r}}function _g(){return dt().memoizedState}function Ux(e,t,n){var r=jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ng(e))Ig(t,n);else if(n=ig(e,t,n,r),n!==null){var i=Be();wt(n,e,r,i),Cg(n,t,r)}}function zx(e,t,n){var r=jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ng(e))Ig(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,n);if(i.hasEagerState=!0,i.eagerState=o,bt(o,s)){var l=t.interleaved;l===null?(i.next=i,Gu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ig(e,t,i,r),n!==null&&(i=Be(),wt(n,e,r,i),Cg(n,t,r))}}function Ng(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ig(e,t){Ki=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ou(e,n)}}var to={readContext:ut,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Bx={readContext:ut,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,bg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ux.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Gf,useDebugValue:rd,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Gf(!1),t=e[0];return e=Fx.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=_t();if(ce){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Te===null)throw Error(_(349));fr&30||hg(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Yf(mg.bind(null,r,a,e),[e]),r.flags|=2048,ga(9,pg.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=_t(),t=Te.identifierPrefix;if(ce){var n=Vt,r=Wt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$x={readContext:ut,useCallback:Eg,useContext:ut,useEffect:nd,useImperativeHandle:kg,useInsertionEffect:xg,useLayoutEffect:wg,useMemo:Sg,useReducer:Nl,useRef:yg,useState:function(){return Nl(ma)},useDebugValue:rd,useDeferredValue:function(e){var t=dt();return Ag(t,Ae.memoizedState,e)},useTransition:function(){var e=Nl(ma)[0],t=dt().memoizedState;return[e,t]},useMutableSource:dg,useSyncExternalStore:fg,useId:_g,unstable_isNewReconciler:!1},Hx={readContext:ut,useCallback:Eg,useContext:ut,useEffect:nd,useImperativeHandle:kg,useInsertionEffect:xg,useLayoutEffect:wg,useMemo:Sg,useReducer:Il,useRef:yg,useState:function(){return Il(ma)},useDebugValue:rd,useDeferredValue:function(e){var t=dt();return Ae===null?t.memoizedState=e:Ag(t,Ae.memoizedState,e)},useTransition:function(){var e=Il(ma)[0],t=dt().memoizedState;return[e,t]},useMutableSource:dg,useSyncExternalStore:fg,useId:_g,unstable_isNewReconciler:!1};function ci(e,t){try{var n="",r=t;do n+=v1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Tg(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Wc=r),Oc(e,t)},n}function Pg(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Oc(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e)}var Vx=sn.ReactCurrentOwner,Ve=!1;function ze(e,t,n,r){t.child=e===null?cg(t,null,n,r):oi(t,e.child,n,r)}function Zf(e,t,n,r,i){n=n.render;var a=t.ref;return Xr(t,i),r=ed(e,t,n,r,a,i),n=td(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&n&&$u(t),t.flags|=1,ze(e,t,r,i),t.child)}function eh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!dd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,jg(e,t,a,r,i)):(e=Ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(s,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Rn(a,r),e.ref=t.ref,e.return=t,t.child=e}function jg(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(la(a,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return Dc(e,t,n,r,i)}function Rg(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie($r,Je),Je|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie($r,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie($r,Je),Je|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie($r,Je),Je|=r;return ze(e,t,i,n),t.child}function Og(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dc(e,t,n,r,i){var a=Qe(n)?ur:Fe.current;return a=ai(t,a),Xr(t,i),n=ed(e,t,n,r,a,i),r=td(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&r&&$u(t),t.flags|=1,ze(e,t,n,i),t.child)}function th(e,t,n,r,i){if(Qe(n)){var a=!0;Qs(t)}else a=!1;if(Xr(t,i),t.stateNode===null)Ns(e,t),og(t,n,r),Rc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Qe(n)?ur:Fe.current,u=ai(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Kf(t,s,r,u),vn=!1;var m=t.memoizedState;s.state=m,Xs(t,r,s,i),l=t.memoizedState,o!==r||m!==l||Ke.current||vn?(typeof d=="function"&&(jc(t,n,d,r),l=t.memoizedState),(o=vn||Vf(t,n,o,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ag(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:pt(t.type,o),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=Qe(n)?ur:Fe.current,l=ai(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||m!==l)&&Kf(t,s,r,l),vn=!1,m=t.memoizedState,s.state=m,Xs(t,r,s,i);var x=t.memoizedState;o!==f||m!==x||Ke.current||vn?(typeof y=="function"&&(jc(t,n,y,r),x=t.memoizedState),(u=vn||Vf(t,n,u,r,m,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Lc(e,t,n,r,a,i)}function Lc(e,t,n,r,i,a){Og(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&zf(t,n,!1),Zt(e,t,a);r=t.stateNode,Vx.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=oi(t,e.child,null,a),t.child=oi(t,null,o,a)):ze(e,t,o,a),t.memoizedState=r.state,i&&zf(t,n,!0),t.child}function Dg(e){var t=e.stateNode;t.pendingContext?Uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uf(e,t.context,!1),qu(e,t.containerInfo)}function nh(e,t,n,r,i){return si(),Wu(i),t.flags|=256,ze(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Fc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lg(e,t,n){var r=t.pendingProps,i=he.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(he,i&1),e===null)return Tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Oo(s,r,0,null),e=lr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Fc(n),t.memoizedState=Mc,e):id(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Kx(e,t,s,r,o,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Rn(o,a):(a=lr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Fc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Mc,r}return a=e.child,e=a.sibling,r=Rn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function id(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&Wu(r),oi(t,e.child,null,n),e=id(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kx(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(_(422))),as(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),a=lr(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&oi(t,e.child,null,s),t.child.memoizedState=Fc(s),t.memoizedState=Mc,a);if(!(t.mode&1))return as(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(_(419)),r=Cl(a,r,void 0),as(e,t,s,r)}if(o=(s&e.childLanes)!==0,Ve||o){if(r=Te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Xt(e,i),wt(r,e,i,-1))}return ud(),r=Cl(Error(_(421))),as(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aw.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Xe=Cn(i.nextSibling),Ze=t,ce=!0,vt=null,e!==null&&(st[ot++]=Wt,st[ot++]=Vt,st[ot++]=dr,Wt=e.id,Vt=e.overflow,dr=t),t=id(t,r.children),t.flags|=4096,t)}function rh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pc(e.return,t,n)}function Tl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Mg(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ze(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rh(e,n,t);else if(e.tag===19)rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,a);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qx(e,t,n){switch(t.tag){case 3:Dg(t),si();break;case 5:ug(t);break;case 1:Qe(t.type)&&Qs(t);break;case 4:qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(qs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Lg(e,t,n):(ie(he,he.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ie(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Rg(e,t,n)}return Zt(e,t,n)}var Fg,Uc,Ug,zg;Fg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uc=function(){};Ug=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(Tt.current);var a=null;switch(n){case"input":i=oc(e,i),r=oc(e,r),a=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),a=[];break;case"textarea":i=uc(e,i),r=uc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vs)}fc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};zg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ti(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gx(e,t,n){var r=t.pendingProps;switch(Hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Qe(t.type)&&Ks(),Le(t),null;case 3:return r=t.stateNode,li(),oe(Ke),oe(Fe),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Qc(vt),vt=null))),Uc(e,t),Le(t),null;case 5:Ju(t);var i=tr(ha.current);if(n=t.type,e!==null&&t.stateNode!=null)Ug(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Le(t),null}if(e=tr(Tt.current),rs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Nt]=t,r[da]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)ae(Ui[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ff(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":pf(r,a),ae("invalid",r)}fc(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,o,e),i=["children",""+o]):ta.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":Ga(r),hf(r,a,!0);break;case"textarea":Ga(r),mf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Nt]=t,e[da]=r,Fg(e,t,!1,!1),t.stateNode=e;e:{switch(s=hc(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)ae(Ui[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":ff(e,r),i=oc(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",e);break;case"textarea":pf(e,r),i=uc(e,r),ae("invalid",e);break;default:i=r}fc(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?gm(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pm(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(e,l):typeof l=="number"&&na(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ta.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ae("scroll",e):l!=null&&Iu(e,a,l,s))}switch(n){case"input":Ga(e),hf(e,r,!1);break;case"textarea":Ga(e),mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Gr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)zg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tr(ha.current),tr(Tt.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(a=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Le(t),null;case 13:if(oe(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Xe!==null&&t.mode&1&&!(t.flags&128))rg(),si(),t.flags|=98560,a=!1;else if(a=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Nt]=t}else si(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),a=!1}else vt!==null&&(Qc(vt),vt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?_e===0&&(_e=3):ud())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return li(),Uc(e,t),e===null&&ca(t.stateNode.containerInfo),Le(t),null;case 10:return Qu(t.type._context),Le(t),null;case 17:return Qe(t.type)&&Ks(),Le(t),null;case 19:if(oe(he),a=t.memoizedState,a===null)return Le(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Ti(a,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zs(e),s!==null){for(t.flags|=128,Ti(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(he,he.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>ui&&(t.flags|=128,r=!0,Ti(a,!1),t.lanes=4194304)}else{if(!r)if(e=Zs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ce)return Le(t),null}else 2*we()-a.renderingStartTime>ui&&n!==1073741824&&(t.flags|=128,r=!0,Ti(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,n=he.current,ie(he,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return cd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Yx(e,t){switch(Hu(t),t.tag){case 1:return Qe(t.type)&&Ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return li(),oe(Ke),oe(Fe),Xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ju(t),null;case 13:if(oe(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(he),null;case 4:return li(),null;case 10:return Qu(t.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var ss=!1,Me=!1,qx=typeof WeakSet=="function"?WeakSet:Set,O=null;function Br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function zc(e,t,n){try{n()}catch(r){ge(e,t,r)}}var ih=!1;function Jx(e,t){if(Ec=$s,e=Wm(),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(o=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++u===i&&(o=s),m===a&&++d===r&&(l=s),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:e,selectionRange:n},$s=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:pt(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(p){ge(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=ih,ih=!1,x}function Qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&zc(t,n,a)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bg(e){var t=e.alternate;t!==null&&(e.alternate=null,Bg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[da],delete t[Nc],delete t[Rx],delete t[Ox])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $g(e){return e.tag===5||e.tag===3||e.tag===4}function ah(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vs));else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}var Pe=null,mt=!1;function hn(e,t,n){for(n=n.child;n!==null;)Hg(e,t,n),n=n.sibling}function Hg(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:Me||Br(n,t);case 6:var r=Pe,i=mt;Pe=null,hn(e,t,n),Pe=r,mt=i,Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),sa(e)):El(Pe,n.stateNode));break;case 4:r=Pe,i=mt,Pe=n.stateNode.containerInfo,mt=!0,hn(e,t,n),Pe=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&zc(n,t,s),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Me&&(Br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ge(n,t,o)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,hn(e,t,n),Me=r):hn(e,t,n);break;default:hn(e,t,n)}}function sh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qx),t.forEach(function(r){var i=sw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:Pe=o.stateNode,mt=!1;break e;case 3:Pe=o.stateNode.containerInfo,mt=!0;break e;case 4:Pe=o.stateNode.containerInfo,mt=!0;break e}o=o.return}if(Pe===null)throw Error(_(160));Hg(a,s,i),Pe=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wg(t,e),t=t.sibling}function Wg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),At(e),r&4){try{Qi(3,e,e.return),jo(3,e)}catch(w){ge(e,e.return,w)}try{Qi(5,e,e.return)}catch(w){ge(e,e.return,w)}}break;case 1:ht(t,e),At(e),r&512&&n!==null&&Br(n,n.return);break;case 5:if(ht(t,e),At(e),r&512&&n!==null&&Br(n,n.return),e.flags&32){var i=e.stateNode;try{na(i,"")}catch(w){ge(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&dm(i,a),hc(o,s);var u=hc(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?gm(i,f):d==="dangerouslySetInnerHTML"?pm(i,f):d==="children"?na(i,f):Iu(i,d,f,u)}switch(o){case"input":lc(i,a);break;case"textarea":fm(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Gr(i,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?Gr(i,!!a.multiple,a.defaultValue,!0):Gr(i,!!a.multiple,a.multiple?[]:"",!1))}i[da]=a}catch(w){ge(e,e.return,w)}}break;case 6:if(ht(t,e),At(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ge(e,e.return,w)}}break;case 3:if(ht(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(t.containerInfo)}catch(w){ge(e,e.return,w)}break;case 4:ht(t,e),At(e);break;case 13:ht(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(od=we())),r&4&&sh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||d,ht(t,e),Me=u):ht(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(f=O=d;O!==null;){switch(m=O,y=m.child,m.tag){case 0:case 11:case 14:case 15:Qi(4,m,m.return);break;case 1:Br(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:Br(m,m.return);break;case 22:if(m.memoizedState!==null){lh(f);continue}}y!==null?(y.return=m,O=y):lh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=mm("display",s))}catch(w){ge(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ge(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ht(t,e),At(e),r&4&&sh(e);break;case 21:break;default:ht(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($g(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(na(i,""),r.flags&=-33);var a=ah(e);Hc(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=ah(e);$c(e,o,s);break;default:throw Error(_(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xx(e,t,n){O=e,Vg(e)}function Vg(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ss;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Me;o=ss;var u=Me;if(ss=s,(Me=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?ch(i):l!==null?(l.return=s,O=l):ch(i);for(;a!==null;)O=a,Vg(a),a=a.sibling;O=i,ss=o,Me=u}oh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):oh(e)}}function oh(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Wf(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wf(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Me||t.flags&512&&Bc(t)}catch(m){ge(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function lh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function ch(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var a=t.return;try{Bc(t)}catch(l){ge(t,a,l)}break;case 5:var s=t.return;try{Bc(t)}catch(l){ge(t,s,l)}}}catch(l){ge(t,t.return,l)}if(t===e){O=null;break}var o=t.sibling;if(o!==null){o.return=t.return,O=o;break}O=t.return}}var Zx=Math.ceil,no=sn.ReactCurrentDispatcher,ad=sn.ReactCurrentOwner,ct=sn.ReactCurrentBatchConfig,q=0,Te=null,Ee=null,je=0,Je=0,$r=Hn(0),_e=0,va=null,hr=0,Ro=0,sd=0,Gi=null,We=null,od=0,ui=1/0,zt=null,ro=!1,Wc=null,Pn=null,os=!1,Sn=null,io=0,Yi=0,Vc=null,Is=-1,Cs=0;function Be(){return q&6?we():Is!==-1?Is:Is=we()}function jn(e){return e.mode&1?q&2&&je!==0?je&-je:Lx.transition!==null?(Cs===0&&(Cs=Im()),Cs):(e=X,e!==0||(e=window.event,e=e===void 0?16:Dm(e.type)),e):1}function wt(e,t,n,r){if(50<Yi)throw Yi=0,Vc=null,Error(_(185));Ta(e,n,r),(!(q&2)||e!==Te)&&(e===Te&&(!(q&2)&&(Ro|=n),_e===4&&xn(e,je)),Ge(e,r),n===1&&q===0&&!(t.mode&1)&&(ui=we()+500,Co&&Wn()))}function Ge(e,t){var n=e.callbackNode;L1(e,t);var r=Bs(e,e===Te?je:0);if(r===0)n!==null&&yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yf(n),t===1)e.tag===0?Dx(uh.bind(null,e)):eg(uh.bind(null,e)),Px(function(){!(q&6)&&Wn()}),n=null;else{switch(Cm(r)){case 1:n=Ru;break;case 4:n=_m;break;case 16:n=zs;break;case 536870912:n=Nm;break;default:n=zs}n=Zg(n,Kg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kg(e,t){if(Is=-1,Cs=0,q&6)throw Error(_(327));var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var r=Bs(e,e===Te?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=q;q|=2;var a=Gg();(Te!==e||je!==t)&&(zt=null,ui=we()+500,or(e,t));do try{nw();break}catch(o){Qg(e,o)}while(1);Ku(),no.current=a,q=i,Ee!==null?t=0:(Te=null,je=0,t=_e)}if(t!==0){if(t===2&&(i=yc(e),i!==0&&(r=i,t=Kc(e,i))),t===1)throw n=va,or(e,0),xn(e,r),Ge(e,we()),n;if(t===6)xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ew(i)&&(t=ao(e,r),t===2&&(a=yc(e),a!==0&&(r=a,t=Kc(e,a))),t===1))throw n=va,or(e,0),xn(e,r),Ge(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Jn(e,We,zt);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=od+500-we(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_c(Jn.bind(null,e,We,zt),t);break}Jn(e,We,zt);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-xt(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zx(r/1960))-r,10<r){e.timeoutHandle=_c(Jn.bind(null,e,We,zt),r);break}Jn(e,We,zt);break;case 5:Jn(e,We,zt);break;default:throw Error(_(329))}}}return Ge(e,we()),e.callbackNode===n?Kg.bind(null,e):null}function Kc(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=ao(e,t),e!==2&&(t=We,We=n,t!==null&&Qc(t)),e}function Qc(e){We===null?We=e:We.push.apply(We,e)}function ew(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!bt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~sd,t&=~Ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function uh(e){if(q&6)throw Error(_(327));Zr();var t=Bs(e,0);if(!(t&1))return Ge(e,we()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=yc(e);r!==0&&(t=r,n=Kc(e,r))}if(n===1)throw n=va,or(e,0),xn(e,t),Ge(e,we()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,We,zt),Ge(e,we()),null}function ld(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(ui=we()+500,Co&&Wn())}}function pr(e){Sn!==null&&Sn.tag===0&&!(q&6)&&Zr();var t=q;q|=1;var n=ct.transition,r=X;try{if(ct.transition=null,X=1,e)return e()}finally{X=r,ct.transition=n,q=t,!(q&6)&&Wn()}}function cd(){Je=$r.current,oe($r)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tx(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ks();break;case 3:li(),oe(Ke),oe(Fe),Xu();break;case 5:Ju(r);break;case 4:li();break;case 13:oe(he);break;case 19:oe(he);break;case 10:Qu(r.type._context);break;case 22:case 23:cd()}n=n.return}if(Te=e,Ee=e=Rn(e.current,null),je=Je=t,_e=0,va=null,sd=Ro=hr=0,We=Gi=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}er=null}return e}function Qg(e,t){do{var n=Ee;try{if(Ku(),As.current=to,eo){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(fr=0,Ce=Ae=pe=null,Ki=!1,pa=0,ad.current=null,n===null||n.return===null){_e=1,va=t,Ee=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=je,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Jf(s);if(y!==null){y.flags&=-257,Xf(y,s,o,a,t),y.mode&1&&qf(a,u,t),t=y,l=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if(!(t&1)){qf(a,u,t),ud();break e}l=Error(_(426))}}else if(ce&&o.mode&1){var S=Jf(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Xf(S,s,o,a,t),Wu(ci(l,o));break e}}a=l=ci(l,o),_e!==4&&(_e=2),Gi===null?Gi=[a]:Gi.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Tg(a,l,t);Hf(a,g);break e;case 1:o=l;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pn===null||!Pn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var p=Pg(a,o,t);Hf(a,p);break e}}a=a.return}while(a!==null)}qg(n)}catch(E){t=E,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function Gg(){var e=no.current;return no.current=to,e===null?to:e}function ud(){(_e===0||_e===3||_e===2)&&(_e=4),Te===null||!(hr&268435455)&&!(Ro&268435455)||xn(Te,je)}function ao(e,t){var n=q;q|=2;var r=Gg();(Te!==e||je!==t)&&(zt=null,or(e,t));do try{tw();break}catch(i){Qg(e,i)}while(1);if(Ku(),q=n,no.current=r,Ee!==null)throw Error(_(261));return Te=null,je=0,_e}function tw(){for(;Ee!==null;)Yg(Ee)}function nw(){for(;Ee!==null&&!N1();)Yg(Ee)}function Yg(e){var t=Xg(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?qg(e):Ee=t,ad.current=null}function qg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yx(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ee=null;return}}else if(n=Gx(n,t,Je),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);_e===0&&(_e=5)}function Jn(e,t,n){var r=X,i=ct.transition;try{ct.transition=null,X=1,rw(e,t,n,r)}finally{ct.transition=i,X=r}return null}function rw(e,t,n,r){do Zr();while(Sn!==null);if(q&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(M1(e,a),e===Te&&(Ee=Te=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,Zg(zs,function(){return Zr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ct.transition,ct.transition=null;var s=X;X=1;var o=q;q|=4,ad.current=null,Jx(e,n),Wg(n,e),Ex(Sc),$s=!!Ec,Sc=Ec=null,e.current=n,Xx(n),I1(),q=o,X=s,ct.transition=a}else e.current=n;if(os&&(os=!1,Sn=e,io=i),a=e.pendingLanes,a===0&&(Pn=null),P1(n.stateNode),Ge(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=Wc,Wc=null,e;return io&1&&e.tag!==0&&Zr(),a=e.pendingLanes,a&1?e===Vc?Yi++:(Yi=0,Vc=e):Yi=0,Wn(),null}function Zr(){if(Sn!==null){var e=Cm(io),t=ct.transition,n=X;try{if(ct.transition=null,X=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,io=0,q&6)throw Error(_(331));var i=q;for(q|=4,O=e.current;O!==null;){var a=O,s=a.child;if(O.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Qi(8,d,a)}var f=d.child;if(f!==null)f.return=d,O=f;else for(;O!==null;){d=O;var m=d.sibling,y=d.return;if(Bg(d),d===u){O=null;break}if(m!==null){m.return=y,O=m;break}O=y}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}O=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,O=s;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,O=g;break e}O=a.return}}var h=e.current;for(O=h;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=h;O!==null;){if(o=O,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:jo(9,o)}}catch(E){ge(o,o.return,E)}if(o===s){O=null;break e}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}if(q=i,Wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{X=n,ct.transition=t}}return!1}function dh(e,t,n){t=ci(n,t),t=Tg(e,t,1),e=Tn(e,t,1),t=Be(),e!==null&&(Ta(e,1,t),Ge(e,t))}function ge(e,t,n){if(e.tag===3)dh(e,e,n);else for(;t!==null;){if(t.tag===3){dh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=ci(n,e),e=Pg(t,e,1),t=Tn(t,e,1),e=Be(),t!==null&&(Ta(t,1,e),Ge(t,e));break}}t=t.return}}function iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(je&n)===n&&(_e===4||_e===3&&(je&130023424)===je&&500>we()-od?or(e,0):sd|=n),Ge(e,t)}function Jg(e,t){t===0&&(e.mode&1?(t=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):t=1);var n=Be();e=Xt(e,t),e!==null&&(Ta(e,t,n),Ge(e,n))}function aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jg(e,n)}function sw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Jg(e,n)}var Xg;Xg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Qx(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ce&&t.flags&1048576&&tg(t,Ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ns(e,t),e=t.pendingProps;var i=ai(t,Fe.current);Xr(t,n),i=ed(null,t,r,e,i,n);var a=td();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(a=!0,Qs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yu(t),i.updater=To,t.stateNode=i,i._reactInternals=t,Rc(t,r,e,n),t=Lc(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&$u(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lw(r),e=pt(r,e),i){case 0:t=Dc(null,t,r,e,n);break e;case 1:t=th(null,t,r,e,n);break e;case 11:t=Zf(null,t,r,e,n);break e;case 14:t=eh(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Dc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),th(e,t,r,i,n);case 3:e:{if(Dg(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ag(e,t),Xs(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ci(Error(_(423)),t),t=nh(e,t,r,n,i);break e}else if(r!==i){i=ci(Error(_(424)),t),t=nh(e,t,r,n,i);break e}else for(Xe=Cn(t.stateNode.containerInfo.firstChild),Ze=t,ce=!0,vt=null,n=cg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){t=Zt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return ug(t),e===null&&Tc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Ac(r,i)?s=null:a!==null&&Ac(r,a)&&(t.flags|=32),Og(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&Tc(t),null;case 13:return Lg(e,t,n);case 4:return qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oi(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Zf(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ie(qs,r._currentValue),r._currentValue=s,a!==null)if(bt(a.value,s)){if(a.children===i.children&&!Ke.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Pc(a.return,n,t),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(_(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Pc(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=ut(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),eh(e,t,r,i,n);case 15:return jg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ns(e,t),t.tag=1,Qe(r)?(e=!0,Qs(t)):e=!1,Xr(t,n),og(t,r,i),Rc(t,r,i,n),Lc(null,t,r,!0,e,n);case 19:return Mg(e,t,n);case 22:return Rg(e,t,n)}throw Error(_(156,t.tag))};function Zg(e,t){return Am(e,t)}function ow(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new ow(e,t,n,r)}function dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lw(e){if(typeof e=="function")return dd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tu)return 11;if(e===Pu)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")dd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jr:return lr(n.children,i,a,t);case Cu:s=8,i|=8;break;case rc:return e=lt(12,n,t,i|2),e.elementType=rc,e.lanes=a,e;case ic:return e=lt(13,n,t,i),e.elementType=ic,e.lanes=a,e;case ac:return e=lt(19,n,t,i),e.elementType=ac,e.lanes=a,e;case lm:return Oo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sm:s=10;break e;case om:s=9;break e;case Tu:s=11;break e;case Pu:s=14;break e;case gn:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=lt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function lr(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=lt(22,e,r,t),e.elementType=lm,e.lanes=n,e.stateNode={isHidden:!1},e}function Pl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(e,t,n,r,i,a,s,o,l){return e=new cw(e,t,n,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=lt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(a),e}function uw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ev(e){if(!e)return Fn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Zm(e,n,t)}return t}function tv(e,t,n,r,i,a,s,o,l){return e=fd(n,r,!0,e,i,a,s,o,l),e.context=ev(null),n=e.current,r=Be(),i=jn(n),a=Gt(r,i),a.callback=t??null,Tn(n,a,i),e.current.lanes=i,Ta(e,i,r),Ge(e,r),e}function Do(e,t,n,r){var i=t.current,a=Be(),s=jn(i);return n=ev(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(i,t,s),e!==null&&(wt(e,i,s,a),Ss(e,i,s)),s}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hd(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function dw(){return null}var nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function pd(e){this._internalRoot=e}Lo.prototype.render=pd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Do(e,t,null,null)};Lo.prototype.unmount=pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){Do(null,e,null,null)}),t[Jt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Om(e)}};function md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hh(){}function fw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=so(s);a.call(u)}}var s=tv(t,r,e,0,null,!1,!1,"",hh);return e._reactRootContainer=s,e[Jt]=s.current,ca(e.nodeType===8?e.parentNode:e),pr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=so(l);o.call(u)}}var l=fd(e,0,!1,null,null,!1,!1,"",hh);return e._reactRootContainer=l,e[Jt]=l.current,ca(e.nodeType===8?e.parentNode:e),pr(function(){Do(t,l,n,r)}),l}function Fo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=so(s);o.call(l)}}Do(t,s,e,i)}else s=fw(n,t,e,i,r);return so(s)}Tm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fi(t.pendingLanes);n!==0&&(Ou(t,n|1),Ge(t,we()),!(q&6)&&(ui=we()+500,Wn()))}break;case 13:pr(function(){var r=Xt(e,1);if(r!==null){var i=Be();wt(r,e,1,i)}}),hd(e,1)}};Du=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Be();wt(t,e,134217728,n)}hd(e,134217728)}};Pm=function(e){if(e.tag===13){var t=jn(e),n=Xt(e,t);if(n!==null){var r=Be();wt(n,e,t,r)}hd(e,t)}};jm=function(){return X};Rm=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};mc=function(e,t,n){switch(t){case"input":if(lc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Io(r);if(!i)throw Error(_(90));um(r),lc(r,i)}}}break;case"textarea":fm(e,n);break;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}};xm=ld;wm=pr;var hw={usingClientEntryPoint:!1,Events:[ja,Lr,Io,vm,ym,ld]},Pi={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pw={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Em(e),e===null?null:e.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{So=ls.inject(pw),Ct=ls}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(t))throw Error(_(200));return uw(e,t,null,n)};nt.createRoot=function(e,t){if(!md(e))throw Error(_(299));var n=!1,r="",i=nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fd(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,ca(e.nodeType===8?e.parentNode:e),new pd(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Em(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return pr(e)};nt.hydrate=function(e,t,n){if(!Mo(t))throw Error(_(200));return Fo(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!md(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tv(t,null,e,1,n??null,i,!1,a,s),e[Jt]=t.current,ca(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};nt.render=function(e,t,n){if(!Mo(t))throw Error(_(200));return Fo(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(_(40));return e._reactRootContainer?(pr(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};nt.unstable_batchedUpdates=ld;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Fo(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)}catch(e){console.error(e)}}rv(),tm.exports=nt;var mw=tm.exports,ph=mw;tc.createRoot=ph.createRoot,tc.hydrateRoot=ph.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const mh="popstate";function gw(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:o}=r.location;return ya("",{pathname:a,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mr(i)}return yw(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function di(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vw(){return Math.random().toString(36).substr(2,8)}function gh(e,t){return{usr:e.state,key:e.key,idx:t}}function ya(e,t,n,r){return n===void 0&&(n=null),fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?on(t):t,{state:n,key:t&&t.key||r||vw()})}function mr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function on(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,o=ke.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(fe({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=ke.Pop;let S=d(),g=S==null?null:S-u;u=S,l&&l({action:o,location:w.location,delta:g})}function m(S,g){o=ke.Push;let h=ya(w.location,S,g);n&&n(h,S),u=d()+1;let v=gh(h,u),p=w.createHref(h);try{s.pushState(v,"",p)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(p)}a&&l&&l({action:o,location:w.location,delta:1})}function y(S,g){o=ke.Replace;let h=ya(w.location,S,g);n&&n(h,S),u=d();let v=gh(h,u),p=w.createHref(h);s.replaceState(v,"",p),a&&l&&l({action:o,location:w.location,delta:0})}function x(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:mr(S);return G(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return o},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mh,f),l=S,()=>{i.removeEventListener(mh,f),l=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(S){return s.go(S)}};return w}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));const xw=new Set(["lazy","caseSensitive","path","id","index","children"]);function ww(e){return e.index===!0}function Gc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let s=[...n,a],o=typeof i.id=="string"?i.id:s.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[o],'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),ww(i)){let l=fe({},i,t(i),{id:o});return r[o]=l,l}else{let l=fe({},i,t(i),{id:o,children:void 0});return r[o]=l,i.children&&(l.children=Gc(i.children,t,s,r)),l}})}function Hr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?on(t):t,i=gi(r.pathname||"/",n);if(i==null)return null;let a=iv(e);kw(a);let s=null;for(let o=0;s==null&&o<a.length;++o)s=Pw(a[o],Ow(i));return s}function bw(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function iv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yt([r,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),iv(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Cw(u,a.index),routesMeta:d})};return e.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,s);else for(let l of av(a.path))i(a,s,l)}),t}function av(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=av(r.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),i&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function kw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ew=/^:\w+$/,Sw=3,Aw=2,_w=1,Nw=10,Iw=-2,vh=e=>e==="*";function Cw(e,t){let n=e.split("/"),r=n.length;return n.some(vh)&&(r+=Iw),t&&(r+=Aw),n.filter(i=>!vh(i)).reduce((i,a)=>i+(Ew.test(a)?Sw:a===""?_w:Nw),r)}function Tw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Pw(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let s=0;s<n.length;++s){let o=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=jw({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=o.route;a.push({params:r,pathname:Yt([i,d.pathname]),pathnameBase:Fw(Yt([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Yt([i,d.pathnameBase]))}return a}function jw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Rw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let m=o[f]||"";s=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Dw(o[f]||"",d),u},{}),pathname:a,pathnameBase:s,pattern:e}}function Rw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),di(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ow(e){try{return decodeURI(e)}catch(t){return di(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Dw(e,t){try{return decodeURIComponent(e)}catch(n){return di(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?on(e):e;return{pathname:n?n.startsWith("/")?n:Mw(n,t):t,search:Uw(r),hash:zw(i)}}function Mw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uo(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=on(e):(i=fe({},e),G(!i.pathname||!i.pathname.includes("?"),Rl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Rl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Rl("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,o;if(r||s==null)o=n;else{let f=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}o=f>=0?t[f]:"/"}let l=Lw(i,o),u=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),Fw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class vd{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function sv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ov=["post","put","patch","delete"],Bw=new Set(ov),$w=["get",...ov],Hw=new Set($w),Ww=new Set([301,302,303,307,308]),Vw=new Set([307,308]),Ol={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Kw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ji={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qw=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Gw(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let b=e.detectErrorBoundary;i=k=>({hasErrorBoundary:b(k)})}else i=Qw;let a={},s=Gc(e.routes,i,void 0,a),o,l=e.basename||"/",u=fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,m=null,y=null,x=null,w=e.hydrationData!=null,S=Hr(s,e.history.location,l),g=null;if(S==null){let b=at(404,{pathname:e.history.location.pathname}),{matches:k,route:A}=Ah(s);S=k,g={[A.id]:b}}let h=!S.some(b=>b.route.lazy)&&(!S.some(b=>b.route.loader)||e.hydrationData!=null),v,p={historyAction:e.history.action,location:e.history.location,matches:S,initialized:h,navigation:Ol,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},E=ke.Pop,I=!1,N,P=!1,z=!1,M=[],Ie=[],ne=new Map,kt=0,cn=-1,un=new Map,qe=new Set,Et=new Map,C=new Map,F=new Map,W=!1;function ue(){return d=e.history.listen(b=>{let{action:k,location:A,delta:R}=b;if(W){W=!1;return}di(F.size===0||R!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let $=tf({currentLocation:p.location,nextLocation:A,historyAction:k});if($&&R!=null){W=!0,e.history.go(R*-1),Wa($,{state:"blocked",location:A,proceed(){Wa($,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),e.history.go(R)},reset(){let B=new Map(p.blockers);B.set($,ji),re({blockers:B})}});return}return Qn(k,A)}),p.initialized||Qn(ke.Pop,p.location),v}function be(){d&&d(),f.clear(),N&&N.abort(),p.fetchers.forEach((b,k)=>el(k)),p.blockers.forEach((b,k)=>ef(k))}function Nr(b){return f.add(b),()=>f.delete(b)}function re(b){p=fe({},p,b),f.forEach(k=>k(p))}function Mt(b,k){var A,R;let $=p.actionData!=null&&p.navigation.formMethod!=null&&gt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((A=b.state)==null?void 0:A._isRedirect)!==!0,B;k.actionData?Object.keys(k.actionData).length>0?B=k.actionData:B=null:$?B=p.actionData:B=null;let V=k.loaderData?Sh(p.loaderData,k.loaderData,k.matches||[],k.errors):p.loaderData,U=p.blockers;U.size>0&&(U=new Map(U),U.forEach((de,Oe)=>U.set(Oe,ji)));let L=I===!0||p.navigation.formMethod!=null&&gt(p.navigation.formMethod)&&((R=b.state)==null?void 0:R._isRedirect)!==!0;o&&(s=o,o=void 0),P||E===ke.Pop||(E===ke.Push?e.history.push(b,b.state):E===ke.Replace&&e.history.replace(b,b.state)),re(fe({},k,{actionData:B,loaderData:V,historyAction:E,location:b,initialized:!0,navigation:Ol,revalidation:"idle",restoreScrollPosition:rf(b,k.matches||p.matches),preventScrollReset:L,blockers:U})),E=ke.Pop,I=!1,P=!1,z=!1,M=[],Ie=[]}async function St(b,k){if(typeof b=="number"){e.history.go(b);return}let A=Yc(p.location,p.matches,l,u.v7_prependBasename,b,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:R,submission:$,error:B}=yh(u.v7_normalizeFormMethod,!1,A,k),V=p.location,U=ya(p.location,R,k&&k.state);U=fe({},U,e.history.encodeLocation(U));let L=k&&k.replace!=null?k.replace:void 0,de=ke.Push;L===!0?de=ke.Replace:L===!1||$!=null&&gt($.formMethod)&&$.formAction===p.location.pathname+p.location.search&&(de=ke.Replace);let Oe=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,J=tf({currentLocation:V,nextLocation:U,historyAction:de});if(J){Wa(J,{state:"blocked",location:U,proceed(){Wa(J,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),St(b,k)},reset(){let ee=new Map(p.blockers);ee.set(J,ji),re({blockers:ee})}});return}return await Qn(de,U,{submission:$,pendingError:B,preventScrollReset:Oe,replace:k&&k.replace})}function Ir(){if(Zo(),re({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Qn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Qn(E||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Qn(b,k,A){N&&N.abort(),N=null,E=b,P=(A&&A.startUninterruptedRevalidation)===!0,z0(p.location,p.matches),I=(A&&A.preventScrollReset)===!0;let R=o||s,$=A&&A.overrideNavigation,B=Hr(R,k,l);if(!B){let ee=at(404,{pathname:k.pathname}),{matches:ye,route:Gn}=Ah(R);tl(),Mt(k,{matches:ye,loaderData:{},errors:{[Gn.id]:ee}});return}if(p.initialized&&!z&&Zw(p.location,k)&&!(A&&A.submission&&gt(A.submission.formMethod))){Mt(k,{matches:B});return}N=new AbortController;let V=Oi(e.history,k,N.signal,A&&A.submission),U,L;if(A&&A.pendingError)L={[Wr(B).route.id]:A.pendingError};else if(A&&A.submission&&gt(A.submission.formMethod)){let ee=await R0(V,k,A.submission,B,{replace:A.replace});if(ee.shortCircuited)return;U=ee.pendingActionData,L=ee.pendingActionError,$=Dl(k,A.submission),V=new Request(V.url,{signal:V.signal})}let{shortCircuited:de,loaderData:Oe,errors:J}=await O0(V,k,B,$,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,U,L);de||(N=null,Mt(k,fe({matches:B},U?{actionData:U}:{},{loaderData:Oe,errors:J})))}async function R0(b,k,A,R,$){$===void 0&&($={}),Zo();let B=rb(k,A);re({navigation:B});let V,U=Jc(R,k);if(!U.route.action&&!U.route.lazy)V={type:xe.error,error:at(405,{method:b.method,pathname:k.pathname,routeId:U.route.id})};else if(V=await Ri("action",b,U,R,a,i,l),b.signal.aborted)return{shortCircuited:!0};if(ei(V)){let L;return $&&$.replace!=null?L=$.replace:L=V.location===p.location.pathname+p.location.search,await bi(p,V,{submission:A,replace:L}),{shortCircuited:!0}}if(qi(V)){let L=Wr(R,U.route.id);return($&&$.replace)!==!0&&(E=ke.Push),{pendingActionData:{},pendingActionError:{[L.route.id]:V.error}}}if(nr(V))throw at(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:V.data}}}async function O0(b,k,A,R,$,B,V,U,L){let de=R||Dl(k,$),Oe=$||B||Ih(de),J=o||s,[ee,ye]=xh(e.history,p,A,Oe,k,z,M,Ie,Et,qe,J,l,U,L);if(tl(Z=>!(A&&A.some(ft=>ft.route.id===Z))||ee&&ee.some(ft=>ft.route.id===Z)),cn=++kt,ee.length===0&&ye.length===0){let Z=Xd();return Mt(k,fe({matches:A,loaderData:{},errors:L||null},U?{actionData:U}:{},Z?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!P){ye.forEach(ft=>{let fn=p.fetchers.get(ft.key),sl=Di(void 0,fn?fn.data:void 0);p.fetchers.set(ft.key,sl)});let Z=U||p.actionData;re(fe({navigation:de},Z?Object.keys(Z).length===0?{actionData:null}:{actionData:Z}:{},ye.length>0?{fetchers:new Map(p.fetchers)}:{}))}ye.forEach(Z=>{ne.has(Z.key)&&dn(Z.key),Z.controller&&ne.set(Z.key,Z.controller)});let Gn=()=>ye.forEach(Z=>dn(Z.key));N&&N.signal.addEventListener("abort",Gn);let{results:Yn,loaderResults:ki,fetcherResults:nl}=await qd(p.matches,A,ee,ye,b);if(b.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Gn),ye.forEach(Z=>ne.delete(Z.key));let Ft=_h(Yn);if(Ft){if(Ft.idx>=ee.length){let Z=ye[Ft.idx-ee.length].key;qe.add(Z)}return await bi(p,Ft.result,{replace:V}),{shortCircuited:!0}}let{loaderData:Ut,errors:Va}=Eh(p,A,ee,ki,L,ye,nl,C);C.forEach((Z,ft)=>{Z.subscribe(fn=>{(fn||Z.done)&&C.delete(ft)})});let rl=Xd(),il=Zd(cn),al=rl||il||ye.length>0;return fe({loaderData:Ut,errors:Va},al?{fetchers:new Map(p.fetchers)}:{})}function Yd(b){return p.fetchers.get(b)||Kw}function D0(b,k,A,R){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ne.has(b)&&dn(b);let $=o||s,B=Yc(p.location,p.matches,l,u.v7_prependBasename,A,k,R==null?void 0:R.relative),V=Hr($,B,l);if(!V){Ha(b,k,at(404,{pathname:B}));return}let{path:U,submission:L,error:de}=yh(u.v7_normalizeFormMethod,!0,B,R);if(de){Ha(b,k,de);return}let Oe=Jc(V,U);if(I=(R&&R.preventScrollReset)===!0,L&&gt(L.formMethod)){L0(b,k,U,Oe,V,L);return}Et.set(b,{routeId:k,path:U}),M0(b,k,U,Oe,V,L)}async function L0(b,k,A,R,$,B){if(Zo(),Et.delete(b),!R.route.action&&!R.route.lazy){let Se=at(405,{method:B.formMethod,pathname:A,routeId:k});Ha(b,k,Se);return}let V=p.fetchers.get(b),U=ib(B,V);p.fetchers.set(b,U),re({fetchers:new Map(p.fetchers)});let L=new AbortController,de=Oi(e.history,A,L.signal,B);ne.set(b,L);let Oe=kt,J=await Ri("action",de,R,$,a,i,l);if(de.signal.aborted){ne.get(b)===L&&ne.delete(b);return}if(ei(J))if(ne.delete(b),cn>Oe){let Se=Tr(void 0);p.fetchers.set(b,Se),re({fetchers:new Map(p.fetchers)});return}else{qe.add(b);let Se=Di(B);return p.fetchers.set(b,Se),re({fetchers:new Map(p.fetchers)}),bi(p,J,{fetcherSubmission:B})}if(qi(J)){Ha(b,k,J.error);return}if(nr(J))throw at(400,{type:"defer-action"});let ee=p.navigation.location||p.location,ye=Oi(e.history,ee,L.signal),Gn=o||s,Yn=p.navigation.state!=="idle"?Hr(Gn,p.navigation.location,l):p.matches;G(Yn,"Didn't find any matches after fetcher action");let ki=++kt;un.set(b,ki);let nl=Di(B,J.data);p.fetchers.set(b,nl);let[Ft,Ut]=xh(e.history,p,Yn,B,ee,z,M,Ie,Et,qe,Gn,l,{[R.route.id]:J.data},void 0);Ut.filter(Se=>Se.key!==b).forEach(Se=>{let Ei=Se.key,af=p.fetchers.get(Ei),$0=Di(void 0,af?af.data:void 0);p.fetchers.set(Ei,$0),ne.has(Ei)&&dn(Ei),Se.controller&&ne.set(Ei,Se.controller)}),re({fetchers:new Map(p.fetchers)});let Va=()=>Ut.forEach(Se=>dn(Se.key));L.signal.addEventListener("abort",Va);let{results:rl,loaderResults:il,fetcherResults:al}=await qd(p.matches,Yn,Ft,Ut,ye);if(L.signal.aborted)return;L.signal.removeEventListener("abort",Va),un.delete(b),ne.delete(b),Ut.forEach(Se=>ne.delete(Se.key));let Z=_h(rl);if(Z){if(Z.idx>=Ft.length){let Se=Ut[Z.idx-Ft.length].key;qe.add(Se)}return bi(p,Z.result)}let{loaderData:ft,errors:fn}=Eh(p,p.matches,Ft,il,void 0,Ut,al,C);if(p.fetchers.has(b)){let Se=Tr(J.data);p.fetchers.set(b,Se)}let sl=Zd(ki);p.navigation.state==="loading"&&ki>cn?(G(E,"Expected pending action"),N&&N.abort(),Mt(p.navigation.location,{matches:Yn,loaderData:ft,errors:fn,fetchers:new Map(p.fetchers)})):(re(fe({errors:fn,loaderData:Sh(p.loaderData,ft,Yn,fn)},sl||Ut.length>0?{fetchers:new Map(p.fetchers)}:{})),z=!1)}async function M0(b,k,A,R,$,B){let V=p.fetchers.get(b),U=Di(B,V?V.data:void 0);p.fetchers.set(b,U),re({fetchers:new Map(p.fetchers)});let L=new AbortController,de=Oi(e.history,A,L.signal);ne.set(b,L);let Oe=kt,J=await Ri("loader",de,R,$,a,i,l);if(nr(J)&&(J=await dv(J,de.signal,!0)||J),ne.get(b)===L&&ne.delete(b),de.signal.aborted)return;if(ei(J))if(cn>Oe){let ye=Tr(void 0);p.fetchers.set(b,ye),re({fetchers:new Map(p.fetchers)});return}else{qe.add(b),await bi(p,J);return}if(qi(J)){let ye=Wr(p.matches,k);p.fetchers.delete(b),re({fetchers:new Map(p.fetchers),errors:{[ye.route.id]:J.error}});return}G(!nr(J),"Unhandled fetcher deferred data");let ee=Tr(J.data);p.fetchers.set(b,ee),re({fetchers:new Map(p.fetchers)})}async function bi(b,k,A){let{submission:R,fetcherSubmission:$,replace:B}=A===void 0?{}:A;k.revalidate&&(z=!0);let V=ya(b.location,k.location,{_isRedirect:!0});if(G(V,"Expected a location on the redirect navigation"),n){let ee=!1;if(k.reloadDocument)ee=!0;else if(lv.test(k.location)){const ye=e.history.createURL(k.location);ee=ye.origin!==t.location.origin||gi(ye.pathname,l)==null}if(ee){B?t.location.replace(k.location):t.location.assign(k.location);return}}N=null;let U=B===!0?ke.Replace:ke.Push,{formMethod:L,formAction:de,formEncType:Oe}=b.navigation;!R&&!$&&L&&de&&Oe&&(R=Ih(b.navigation));let J=R||$;if(Vw.has(k.status)&&J&&gt(J.formMethod))await Qn(U,V,{submission:fe({},J,{formAction:k.location}),preventScrollReset:I});else{let ee=Dl(V,R);await Qn(U,V,{overrideNavigation:ee,fetcherSubmission:$,preventScrollReset:I})}}async function qd(b,k,A,R,$){let B=await Promise.all([...A.map(L=>Ri("loader",$,L,k,a,i,l)),...R.map(L=>L.matches&&L.match&&L.controller?Ri("loader",Oi(e.history,L.path,L.controller.signal),L.match,L.matches,a,i,l):{type:xe.error,error:at(404,{pathname:L.path})})]),V=B.slice(0,A.length),U=B.slice(A.length);return await Promise.all([Nh(b,A,V,V.map(()=>$.signal),!1,p.loaderData),Nh(b,R.map(L=>L.match),U,R.map(L=>L.controller?L.controller.signal:null),!0)]),{results:B,loaderResults:V,fetcherResults:U}}function Zo(){z=!0,M.push(...tl()),Et.forEach((b,k)=>{ne.has(k)&&(Ie.push(k),dn(k))})}function Ha(b,k,A){let R=Wr(p.matches,k);el(b),re({errors:{[R.route.id]:A},fetchers:new Map(p.fetchers)})}function el(b){let k=p.fetchers.get(b);ne.has(b)&&!(k&&k.state==="loading"&&un.has(b))&&dn(b),Et.delete(b),un.delete(b),qe.delete(b),p.fetchers.delete(b)}function dn(b){let k=ne.get(b);G(k,"Expected fetch controller: "+b),k.abort(),ne.delete(b)}function Jd(b){for(let k of b){let A=Yd(k),R=Tr(A.data);p.fetchers.set(k,R)}}function Xd(){let b=[],k=!1;for(let A of qe){let R=p.fetchers.get(A);G(R,"Expected fetcher: "+A),R.state==="loading"&&(qe.delete(A),b.push(A),k=!0)}return Jd(b),k}function Zd(b){let k=[];for(let[A,R]of un)if(R<b){let $=p.fetchers.get(A);G($,"Expected fetcher: "+A),$.state==="loading"&&(dn(A),un.delete(A),k.push(A))}return Jd(k),k.length>0}function F0(b,k){let A=p.blockers.get(b)||ji;return F.get(b)!==k&&F.set(b,k),A}function ef(b){p.blockers.delete(b),F.delete(b)}function Wa(b,k){let A=p.blockers.get(b)||ji;G(A.state==="unblocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="blocked"||A.state==="blocked"&&k.state==="proceeding"||A.state==="blocked"&&k.state==="unblocked"||A.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+k.state);let R=new Map(p.blockers);R.set(b,k),re({blockers:R})}function tf(b){let{currentLocation:k,nextLocation:A,historyAction:R}=b;if(F.size===0)return;F.size>1&&di(!1,"A router only supports one blocker at a time");let $=Array.from(F.entries()),[B,V]=$[$.length-1],U=p.blockers.get(B);if(!(U&&U.state==="proceeding")&&V({currentLocation:k,nextLocation:A,historyAction:R}))return B}function tl(b){let k=[];return C.forEach((A,R)=>{(!b||b(R))&&(A.cancel(),k.push(R),C.delete(R))}),k}function U0(b,k,A){if(m=b,x=k,y=A||null,!w&&p.navigation===Ol){w=!0;let R=rf(p.location,p.matches);R!=null&&re({restoreScrollPosition:R})}return()=>{m=null,x=null,y=null}}function nf(b,k){return y&&y(b,k.map(R=>bw(R,p.loaderData)))||b.key}function z0(b,k){if(m&&x){let A=nf(b,k);m[A]=x()}}function rf(b,k){if(m){let A=nf(b,k),R=m[A];if(typeof R=="number")return R}return null}function B0(b){a={},o=Gc(b,i,void 0,a)}return v={get basename(){return l},get state(){return p},get routes(){return s},initialize:ue,subscribe:Nr,enableScrollRestoration:U0,navigate:St,fetch:D0,revalidate:Ir,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:Yd,deleteFetcher:el,dispose:be,getBlocker:F0,deleteBlocker:ef,_internalFetchControllers:ne,_internalActiveDeferreds:C,_internalSetRoutes:B0},v}function Yw(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Yc(e,t,n,r,i,a,s){let o,l;if(a!=null&&s!=="path"){o=[];for(let d of t)if(o.push(d),d.route.id===a){l=d;break}}else o=t,l=t[t.length-1];let u=gd(i||".",Uo(o).map(d=>d.pathnameBase),gi(e.pathname,n)||e.pathname,s==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!yd(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Yt([n,u.pathname])),mr(u)}function yh(e,t,n,r){if(!r||!Yw(r))return{path:n};if(r.formMethod&&!nb(r.formMethod))return{path:n,error:at(405,{method:r.formMethod})};let i=()=>({path:n,error:at(400,{type:"invalid-body"})}),a=r.formMethod||"get",s=e?a.toUpperCase():a.toLowerCase(),o=uv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!gt(s))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,x)=>{let[w,S]=x;return""+y+w+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:o,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!gt(s))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:o,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=qc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=qc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=kh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=kh(l)}catch{return i()}let d={formMethod:s,formAction:o,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(gt(d.formMethod))return{path:n,submission:d};let f=on(n);return t&&f.search&&yd(f.search)&&l.append("index",""),f.search="?"+l,{path:mr(f),submission:d}}function qw(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function xh(e,t,n,r,i,a,s,o,l,u,d,f,m,y){let x=y?Object.values(y)[0]:m?Object.values(m)[0]:void 0,w=e.createURL(t.location),S=e.createURL(i),g=y?Object.keys(y)[0]:void 0,v=qw(n,g).filter((E,I)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(Jw(t.loaderData,t.matches[I],E)||s.some(z=>z===E.route.id))return!0;let N=t.matches[I],P=E;return wh(E,fe({currentUrl:w,currentParams:N.params,nextUrl:S,nextParams:P.params},r,{actionResult:x,defaultShouldRevalidate:a||w.pathname+w.search===S.pathname+S.search||w.search!==S.search||cv(N,P)}))}),p=[];return l.forEach((E,I)=>{if(!n.some(Ie=>Ie.route.id===E.routeId))return;let N=Hr(d,E.path,f);if(!N){p.push({key:I,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let P=t.fetchers.get(I),z=Jc(N,E.path),M=!1;u.has(I)?M=!1:o.includes(I)?M=!0:P&&P.state!=="idle"&&P.data===void 0?M=a:M=wh(z,fe({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:a})),M&&p.push({key:I,routeId:E.routeId,path:E.path,matches:N,match:z,controller:new AbortController})}),[v,p]}function Jw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function cv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function wh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function bh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let a={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";di(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!xw.has(s)&&(a[s]=r[s])}Object.assign(i,a),Object.assign(i,fe({},t(i),{lazy:void 0}))}async function Ri(e,t,n,r,i,a,s,o){o===void 0&&(o={});let l,u,d,f=x=>{let w,S=new Promise((g,h)=>w=h);return d=()=>w(),t.signal.addEventListener("abort",d),Promise.race([x({request:t,params:n.params,context:o.requestContext}),S])};try{let x=n.route[e];if(n.route.lazy)if(x){let w,S=await Promise.all([f(x).catch(g=>{w=g}),bh(n.route,a,i)]);if(w)throw w;u=S[0]}else if(await bh(n.route,a,i),x=n.route[e],x)u=await f(x);else if(e==="action"){let w=new URL(t.url),S=w.pathname+w.search;throw at(405,{method:t.method,pathname:S,routeId:n.route.id})}else return{type:xe.data,data:void 0};else if(x)u=await f(x);else{let w=new URL(t.url),S=w.pathname+w.search;throw at(404,{pathname:S})}G(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(x){l=xe.error,u=x}finally{d&&t.signal.removeEventListener("abort",d)}if(tb(u)){let x=u.status;if(Ww.has(x)){let g=u.headers.get("Location");if(G(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!lv.test(g))g=Yc(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,g);else if(!o.isStaticRequest){let h=new URL(t.url),v=g.startsWith("//")?new URL(h.protocol+g):new URL(g),p=gi(v.pathname,s)!=null;v.origin===h.origin&&p&&(g=v.pathname+v.search+v.hash)}if(o.isStaticRequest)throw u.headers.set("Location",g),u;return{type:xe.redirect,status:x,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(o.isRouteRequest)throw{type:l===xe.error?xe.error:xe.data,response:u};let w,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?w=await u.json():w=await u.text(),l===xe.error?{type:l,error:new vd(x,u.statusText,w),headers:u.headers}:{type:xe.data,data:w,statusCode:u.status,headers:u.headers}}if(l===xe.error)return{type:l,error:u};if(eb(u)){var m,y;return{type:xe.deferred,deferredData:u,statusCode:(m=u.init)==null?void 0:m.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:xe.data,data:u}}function Oi(e,t,n,r){let i=e.createURL(uv(t)).toString(),a={signal:n};if(r&&gt(r.formMethod)){let{formMethod:s,formEncType:o}=r;a.method=s.toUpperCase(),o==="application/json"?(a.headers=new Headers({"Content-Type":o}),a.body=JSON.stringify(r.json)):o==="text/plain"?a.body=r.text:o==="application/x-www-form-urlencoded"&&r.formData?a.body=qc(r.formData):a.body=r.formData}return new Request(i,a)}function qc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function kh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Xw(e,t,n,r,i){let a={},s=null,o,l=!1,u={};return n.forEach((d,f)=>{let m=t[f].route.id;if(G(!ei(d),"Cannot handle redirect results in processLoaderData"),qi(d)){let y=Wr(e,m),x=d.error;r&&(x=Object.values(r)[0],r=void 0),s=s||{},s[y.route.id]==null&&(s[y.route.id]=x),a[m]=void 0,l||(l=!0,o=sv(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else nr(d)?(i.set(m,d.deferredData),a[m]=d.deferredData.data):a[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(o=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:o||200,loaderHeaders:u}}function Eh(e,t,n,r,i,a,s,o){let{loaderData:l,errors:u}=Xw(t,n,r,i,o);for(let d=0;d<a.length;d++){let{key:f,match:m,controller:y}=a[d];G(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let x=s[d];if(!(y&&y.signal.aborted))if(qi(x)){let w=Wr(e.matches,m==null?void 0:m.route.id);u&&u[w.route.id]||(u=fe({},u,{[w.route.id]:x.error})),e.fetchers.delete(f)}else if(ei(x))G(!1,"Unhandled fetcher revalidation redirect");else if(nr(x))G(!1,"Unhandled fetcher deferred data");else{let w=Tr(x.data);e.fetchers.set(f,w)}}return{loaderData:l,errors:u}}function Sh(e,t,n,r){let i=fe({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&a.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function Wr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ah(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function at(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,s="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?o="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?o="defer() is not supported in actions":a==="invalid-body"&&(o="Unable to encode submission body")):e===403?(s="Forbidden",o='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",o='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?o="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(o='Invalid request method "'+i.toUpperCase()+'"')),new vd(e||500,s,new Error(o),!0)}function _h(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ei(n))return{result:n,idx:t}}}function uv(e){let t=typeof e=="string"?on(e):e;return mr(fe({},t,{hash:""}))}function Zw(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function nr(e){return e.type===xe.deferred}function qi(e){return e.type===xe.error}function ei(e){return(e&&e.type)===xe.redirect}function eb(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function tb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function nb(e){return Hw.has(e.toLowerCase())}function gt(e){return Bw.has(e.toLowerCase())}async function Nh(e,t,n,r,i,a){for(let s=0;s<n.length;s++){let o=n[s],l=t[s];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),d=u!=null&&!cv(u,l)&&(a&&a[l.route.id])!==void 0;if(nr(o)&&(i||d)){let f=r[s];G(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await dv(o,f,i).then(m=>{m&&(n[s]=m||n[s])})}}}async function dv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:e.deferredData.data}}}function yd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Jc(e,t){let n=typeof t=="string"?on(t).search:t.search;if(e[e.length-1].route.index&&yd(n||""))return e[e.length-1];let r=Uo(e);return r[r.length-1]}function Ih(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:s}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function Dl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function rb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Di(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ib(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Tr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}const zo=T.createContext(null),fv=T.createContext(null),vi=T.createContext(null),Bo=T.createContext(null),Vn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),hv=T.createContext(null);function ab(e,t){let{relative:n}=t===void 0?{}:t;Oa()||G(!1);let{basename:r,navigator:i}=T.useContext(vi),{hash:a,pathname:s,search:o}=mv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Yt([r,s])),i.createHref({pathname:l,search:o,hash:a})}function Oa(){return T.useContext(Bo)!=null}function $o(){return Oa()||G(!1),T.useContext(Bo).location}function pv(e){T.useContext(vi).static||T.useLayoutEffect(e)}function sb(){let{isDataRoute:e}=T.useContext(Vn);return e?wb():ob()}function ob(){Oa()||G(!1);let e=T.useContext(zo),{basename:t,navigator:n}=T.useContext(vi),{matches:r}=T.useContext(Vn),{pathname:i}=$o(),a=JSON.stringify(Uo(r).map(l=>l.pathnameBase)),s=T.useRef(!1);return pv(()=>{s.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=gd(l,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Yt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,a,i,e])}const lb=T.createContext(null);function cb(e){let t=T.useContext(Vn).outlet;return t&&T.createElement(lb.Provider,{value:e},t)}function mv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Vn),{pathname:i}=$o(),a=JSON.stringify(Uo(r).map(s=>s.pathnameBase));return T.useMemo(()=>gd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function ub(e,t,n){Oa()||G(!1);let{navigator:r}=T.useContext(vi),{matches:i}=T.useContext(Vn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let l=$o(),u;if(t){var d;let w=typeof t=="string"?on(t):t;o==="/"||(d=w.pathname)!=null&&d.startsWith(o)||G(!1),u=w}else u=l;let f=u.pathname||"/",m=o==="/"?f:f.slice(o.length)||"/",y=Hr(e,{pathname:m}),x=mb(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:Yt([o,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Yt([o,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&x?T.createElement(Bo.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ke.Pop}},x):x}function db(){let e=xb(),t=sv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}const fb=T.createElement(db,null);class hb extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Vn.Provider,{value:this.props.routeContext},T.createElement(hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pb(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(zo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Vn.Provider,{value:t},r)}function mb(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let o=a.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));o>=0||G(!1),a=a.slice(0,Math.min(a.length,o+1))}return a.reduceRight((o,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||fb);let m=t.concat(a.slice(0,u+1)),y=()=>{let x;return d?x=f:l.route.Component?x=T.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=o,T.createElement(pb,{match:l,routeContext:{outlet:o,matches:m,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(hb,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var gv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gv||{}),lo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lo||{});function gb(e){let t=T.useContext(zo);return t||G(!1),t}function vb(e){let t=T.useContext(fv);return t||G(!1),t}function yb(e){let t=T.useContext(Vn);return t||G(!1),t}function vv(e){let t=yb(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function xb(){var e;let t=T.useContext(hv),n=vb(lo.UseRouteError),r=vv(lo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function wb(){let{router:e}=gb(gv.UseNavigateStable),t=vv(lo.UseNavigateStable),n=T.useRef(!1);return pv(()=>{n.current=!0}),T.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oo({fromRouteId:t},a)))},[e,t])}const bb="startTransition",Ch=a1[bb];function kb(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=T.useState(n.state),{v7_startTransition:s}=r||{},o=T.useCallback(f=>{s&&Ch?Ch(()=>a(f)):a(f)},[a,s]);T.useLayoutEffect(()=>n.subscribe(o),[n,o]);let l=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,y)=>n.navigate(f,{state:m,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(f,m,y)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",d=T.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return T.createElement(T.Fragment,null,T.createElement(zo.Provider,{value:d},T.createElement(fv.Provider,{value:i},T.createElement(Ab,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?T.createElement(Eb,{routes:n.routes,state:i}):t))),null)}function Eb(e){let{routes:t,state:n}=e;return ub(t,void 0,n)}function Sb(e){return cb(e.context)}function Ab(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ke.Pop,navigator:a,static:s=!1}=e;Oa()&&G(!1);let o=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:o,navigator:a,static:s}),[o,a,s]);typeof r=="string"&&(r=on(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:y="default"}=r,x=T.useMemo(()=>{let w=gi(u,o);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:y},navigationType:i}},[o,u,d,f,m,y,i]);return x==null?null:T.createElement(vi.Provider,{value:l},T.createElement(Bo.Provider,{children:n,value:x}))}new Promise(()=>{});function _b(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}function Nb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ib(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cb(e,t){return e.button===0&&(!t||t==="_self")&&!Ib(e)}const Tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Pb(e,t){return Gw({basename:t==null?void 0:t.basename,future:xa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:gw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||jb(),routes:e,mapRouteProperties:_b}).initialize()}function jb(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=xa({},t,{errors:Rb(t.errors)})),t}function Rb(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new vd(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let s=new a(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:d}=t,f=Nb(t,Tb),{basename:m}=T.useContext(vi),y,x=!1;if(typeof u=="string"&&Db.test(u)&&(y=u,Ob))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),p=gi(v.pathname,m);v.origin===h.origin&&p!=null?u=p+v.search+v.hash:x=!0}catch{}let w=ab(u,{relative:i}),S=Lb(u,{replace:s,state:o,target:l,preventScrollReset:d,relative:i});function g(h){r&&r(h),h.defaultPrevented||S(h)}return T.createElement("a",xa({},f,{href:y||w,onClick:x||a?r:g,ref:n,target:l}))});var Th;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Th||(Th={}));var Ph;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ph||(Ph={}));function Lb(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s}=t===void 0?{}:t,o=sb(),l=$o(),u=mv(e,{relative:s});return T.useCallback(d=>{if(Cb(d,n)){d.preventDefault();let f=r!==void 0?r:mr(l)===mr(u);o(e,{replace:f,state:i,preventScrollReset:a,relative:s})}},[l,o,u,r,i,n,e,a,s])}const yv="/assets/logo-152e4e9b.png",Mb=()=>{const[e,t]=T.useState(!1),n=()=>{t(!e)},r=()=>{t(!1)};return c.jsx("nav",{className:"bg-[#E3E6F3]  p-4",children:c.jsx("div",{className:"container mx-auto    ",children:c.jsxs("div",{className:"flex flex-wrap items-center justify-between",children:[c.jsx("div",{className:"lg:flex  md:flex items-center ml-5 flex-shrink-0  mr-6",children:c.jsx("div",{children:c.jsx(Q,{to:"/",className:"font-bold  text-3xl",children:c.jsx("img",{className:"lg:m-5",src:yv,alt:""})})})}),c.jsx("div",{className:"block  lg:hidden",children:c.jsx("button",{className:" hover:text-yellow-400-400 focus:outline-none",onClick:n,children:c.jsxs("svg",{className:"fill-current h-6 w-6",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("title",{children:"Mobile menu"}),c.jsx("path",{d:"M20 2H0v2h20V2zM20 9H0v2h20V9zM20 16H0v2h20v-2z",fill:"black"})]})})}),c.jsx("div",{className:`w-full lg:flex lg:items-center lg:w-auto ${e?"block":"hidden"}`,children:c.jsxs("div",{className:"text-sm lg:flex-grow text-black lg:mr-9",children:[c.jsx(Q,{to:"/",onClick:r,className:"block  text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4",children:"Home"}),c.jsx(Q,{to:"/shop",onClick:r,className:"block text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4",children:"Shop"}),c.jsx(Q,{to:"/blogs",onClick:r,className:"block text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4 lg:active:border lg:border-green-600 lg:active:p-4",children:"Blog"}),c.jsx(Q,{to:"/about",onClick:r,className:"block  text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 lg:active:border lg:border-green-600 lg:active:p-4",children:"About"}),c.jsx(Q,{to:"/contact",onClick:r,className:"block lg:ml-3 text-[17px] font-bold mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 lg:active:border lg:border-green-600 lg:active:p-4",children:"Contact"})]})})]})})})},Fb="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAqqADAAQAAAABAAAAMAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAMACqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAC//aAAwDAQACEQMRAD8A/v4ooooAKKKKACivB/hd+058BvjP4n17wV8NvEtpqWseGb+40zUrIFo54bm1cpKvlyBWYKwI3oCp7EiveK1rUJ05clRNPzOLAZlhsXT9rhainG7V4tNXWjV1fVPRroFFFFZHaFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/0P7+KKKKACiiigD+Fn4j3XjX4O/t0/Eb4i+CpHilfxZqsksYZkWVTeynBK8qwzlWHKn2yD/R5+zv+3wmofDi38SeLJ31i2XETR8f2hFLjmNxkB8Dnc2Mjncelfir+19b6b4J+Ofi2aHT7nWtd1vxFqMek6PYRtPe387XDnZFEgZyozl3xhR15wD9M/sAf8EqP2tbv4lQftFftQa6PBdncLg+GLPbPcT2x5WC4OWht1GcjBklDcko1e148LF4nLqFXJdMWkrPTlceqnffy6n5V9D7wR9rmGO4k4gxawuWxc7J358RUTdoUoq7a6TqNOMNr3vy/wBHHw4+KvgX4r6OdZ8EXy3SJgSxkFJYi3RZIzyp647HHBNfmrY+KPiP+1PH41+OPiz4oah8LPhd4S1S+0rTo9Fe3tZ5l02Qw3F/f3k8cpVGlDBIlAUKPm55P6e+DPAPg/4faZ/ZHg+wisYTgvsHzuR3dzlmPuSa+Crn9n39pb4B+K/FDfszL4c8T+CvGN/Nqtz4c8SPNbGxvro5uWtp4Yple3mf52ikQbWJ2nk18lkyxn1WH9ocvtbe9y35b+V9fvP2jOXg3ipvAKSpX93mtzW87afcbnwn/a6+AXw6+C17qHjP4zWPxIfQZljm1G1jie8kW7kZLK3NvZBjNO20oCiZkYE7QAcel6H+3V+zZq/gDxF8RL/WZ9Gt/CbxR6tZ6pZ3Fnf2r3HFujWcsYmZpzxEERt54XJBFfIF1/wT++MF5DJ8d7nVNAT4sR+ItM8Q21pbW8kGgQw6VHLDDpoCr5xRkmkZrgrv80htoxknjL9iT9or4369r/x/+It7oOgePmuNCn0HTLJprvS4hoNxJcxrfyvHHJOZ3kYFlj/drt256V6Z5h9geFf26P2bvE3hbxJ4qvdXuNATwjBHdava61Z3Gn3ltbzHEMpt541kdJT8sZRW3MQo+YgV8i/tL/8ABRjwFr3wG8Xad8CdU1fQfHOnafbapbx3+l3NlPHaHULWBpgLuEIUkWbC9cgnHIOOB/aS/Zu+LPxC8MeNf2nP2qtV0TwVfaXomn2WlQaQt3qlnbLp+ox6j5+oMIUlmSSdFQqkRWKIliTg18/eL9P+OH7fPxx1zwxZ33g67vofAS2qz+HL6a/023aXWLK6UXV75ORLOsEjxwqpKKPm5LGgD9db79uj9nLSviW3wrv9WuVuYNQj0efURZXB0qHU5MbbKXUBH9nSckgbC/DHaSDxXD/H/wCOf7QGh/tG6V8DfgvP4V0+Kfw1Pr9zd+JhdbCYLtLbyka3lTGQ4blTgAn2r5h8MfsA/Fv4d/GW9utH0zwv4s8OXfiKXW7LUPEtzf3MmlQXU/n3MEOkj/Q3uCxYJc71bkFumK+tvi1+yL4b+N37Vek/FH4q6FpXiLwnp3ha40sWuoIJ3XUJL2OZJFiZSu0RB13ZzzjGDmgDxr4Mf8FEIPGGtnWPixFp/hnwxaeDI9fvLoNJKFvRq1xpbiCQE+dbStCGt9se9964ySBX1h4O/bA/Z08d29lP4f8AEaF7/VY9DjhuLe5tpl1CaNporeaKaJHheWNS0fmKofGFJPFfI/7TH7Hfxk8Z+PNd8RfAiew0TTZ/COkaDa2kU72BkSw1Rru4sleCMm1imtj5aSx5KHgADmvmvxJ+zH4q+DPwM+OPxQ+MdrbeGINXtdF1Dw7b6fql3rd3Zaro5kNkPtN6olkme6eJV2naQ5RQF6gH7VeFfiR4J8ca3rvh3wpfpe3fhq7Ww1JY1fbb3LRrN5RcqEZwjqWCk7cgNg8V3FfM/wCyL8ItY+DPwL0rQfGEn2nxPqjS6z4guT96fVdRc3F2x/3Xby1xwERQOlfTFABRRRQAUUUUAf/R/v4ooooAKKKKAPLfC/wR+EvgzxvqnxK8M+H7O18Qa0SbzURHuuZATkoJXyyRlst5aEJuJbGSTXqVFFaVKspu83cErJRWy0XkgooorMAooooAjmhhuIWt7hQ8bgqysMgg8EEHggiud8L+CvBvgi0ksPBekWWkQTP5kkdlbx26M5/iZY1UE+55rpqKACiiigAqC4tba7j8q6jWVQQ2HAYZU5Bwe4PIqeigAooooAKKKKACiiigD//Z",Ub="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAqqADAAQAAAABAAAAMAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAMACqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAC//aAAwDAQACEQMRAD8A/v4ooooAKKKKACiivye8Bf8ABUvw98a/+CmOs/8ABPP4F+EbvX7TwJZXNx408WNL5Vlpd1GgEVlFGEYzStM6xuWeMAiQKH8tiAD9YaKK+afjN8W/iR4T+Jng/wCFPwv0rTNQ1HxRbardmXVbqa2hiTTFtyUBggnYtKbgDdtwoUnDZAoA+lqK/P3wp/wUZ+DWs+C4vFniDTdXsDb5tNW8i1e8ttP1VRL/AMS57mIbZJ5WiIgKLtfzIc7GmjU9TrX/AAUH/Zk0eK9kg1S71E2N/Hp7pY2U9w7SSx2ro8aouZIma9ghEi5Xz2MWd6sAAfbNFfn74e/b+8Ea/wDEbUvCVrpOoyJBb2FvZ6fHav8A2xNrM13rFveWLWxIjX7NHpLzGTzPL2bn3ldpPpsf7bXwCfVPBVg2oyxQ+Ponk0q4lQRJvRZmeGeN2W4ikT7PKr7otqOux2ViAQD61or4i+H/AO2z4M8b+I/FuqXtldaJ4L8MeEdM8WrqupW0tu9xZ38mo7rhIiCWg8iyWROBLlirIpABbrv7fnwa8NiSx1rSvEcOswGczaP/AGXK1/FFb2i3zzvEpIEX2ZvMVtxyVaIDzlMdAH2/RXwr+1B+2xp3wI8JWmueEdAu/Ep1rwnr3ifTryBR9iWPRrJLxPtJyJVScSKMopYDtnitfWv28vgZ4V8JTeI/GA1HSbu31ZtFk0u9tvs179rSyXUiBHK6psNk63Ct5nKsE/1p8ugD7TorB8LeJtD8a+GNN8ZeGLgXemavaw3tpOoIEsFwgkjcBgCAyMDggHnmt6gAooooAKKKKAP/0P7+KKKKACuX8ceLtK8AeC9Y8ea6WFjollcX9wVGW8q2jaV8D12qcV1Fc54x8LaX448I6r4K1xS9lrFnPY3CjqYriNo3H4qxoA/ykf2nv+C03/BQ79pr463vxstvid4h8H2n2tptG0bQdQnsLLTrfdmGJYoGRZXVMCSSUO0jZJ4IUeHeJf8AgpZ+3t4pv5dQh+J+taPc3l42oXR8PPHobXt/Ictd3f8AZaWv2q5djkzT73JPWvFf2pf2cvHf7Iv7RHi/9mv4k272+reD9SmsGLAgTQqc29wmesdxCUlQjqrCvA+f4SVPYjgg+ooA/wBiX9gTwX+0x4A/ZE8EeGf2v/FS+MviDFp0b6rqKwrC2+Qb1gkZeJpIFIiefCmVlLlQSc9Z+0p4H+B1x4fT42/HDWbrwzp/gSzvrmXWLbVLnSha2U6Ibzzp7aWJvKZYULZOQVBUg18Y/wDBFD9qn9oj9sb/AIJ++EfjP+0j4ej0XVZQ1jZ3kbt/xObOzCwpqZhZQYTO6uNoZlcqZEwjqo+d/wDgv/8AFe+i/Z88BfsgeGdN1TXdV+Nvi/T9LutK0OAXOpXOhaXIuo6uLWJnQO5iiSPDMq4kO5gM0AffvwE+D37EHxl8L+G/j1+zi9prXhM/ZpdNbSL6dtHuJtJDWdvcParJ5E1xbbDGskiFwUUsS0aFez0P9hD9lnw1ZWmn6H4ZFvHY6da6VDi6uSwtbLUl1eFCzSkki9VZS5yzYCsSgC1/NZ+yZ+0340/Zw/Zp/bp/Zt+Hela98KtV8AW2sfEnwHpmuWkVrqmmaZrdtJOqLblriEJa3cfyYZ1IlGeSQPXdB/aA/bf+AqfsdftV+I/jtefEmP8AaH1nQtA8Q+Dbiz0+PTVg1mzEpuNLW2hSeOSwOPOkeRy7nL7QxSgD+grUP2MPgBe6/qXi62026sNZ1O9TUn1Gzvrq3uortJbyUSwSxyhoiTqF0rBMK0crIwKYAybn9jv9lzwbfad8QbrTv7KtfClna4MmoXEVikOlrctDNdo8vlSmJbu5LyT7i3mO0hY4YfzzXHxT/br+Nvhf9sz4t6d+0tqfgaD9nXxr4lXw3plrZ6WYGh0+L7XDBqbz27yy2jqgt7dAyEN5jMZSQo/ZDw/pt9/wVI/4JEaZp/xku38GXnxm8AW39p3VqNn2OfUbVS0saOwzGZDuEbMN0Z2buc0Acx+yN8Vv+CUXxv8AEvir4D/sv+PNL8e6jf8Ah9dI1TSv7Wu9T/4kFi80MdtCLmR1FnAbySNfJO0CQAseDX1x4K/Zc/Zrv4f+Es8PCXxDNOL23k1WbVbnUJphcW66dPG9y8zs4jhiEKqWPlkMRhy7H8YP2b/iF+0/+z58XtJ/4JBftSWHh3RvEWt+ANRHgb4l/DyOKC7Ww0uMRv8Aa7C7hcW1wFRXDYaB5UA2tyw/Mr9jT4vftF/si/8ABGb4P678F/iZf6fcfG/4h2vgWC71KCyn07wXb3Osakl5e2KGFSZrjZub7U8iq5yoXAoA/sD8ffssfBf4leFdF8GeKNPuG07QNNutGtY4Lu4gP9n3tp9iubWVopFaWKWEKGDknciuCGUGpPFv7L3wf8Y39zrd9Z3Nrqdzqkesi/sry4t7mK9jsI9MEkUkbgoGs41hdB8jjllLc1/P38S/2gf2uv2Lf2gfjp+xlB8XdZ+JWm2fwL1n4j6LrmtRWL614d1axEsCpJNbW8MUkUzKJYlliO07QMrnd434z/at/wCChHwY/YZ+A3xG8QfEvX/GPi79qfW/D1vJNo+naXHceHtPl05riSy0NLvyrVr+9UIvnXjlTL5jqB8oAB/XJaW0dnaxWcRYrEioC5LMQowMsckn1J5NWK/Hj/glj4p/bnm8UfE7wF+1Jo3jFPBOm3On3XgjVvHq6SuvzQ3MTi+tLttIkeCYW8yBopSqsUkAbOMD9h6ACiiigAooooA//9H+/iiiigAooooA/OP9sv8A4JNfsHft8+NdG+I/7TXghNY13REWGO+trq4sZ57ZWLC3uXtZIzNEGJKq+SuTtIBOfnvxl/wb3/8ABIjxnqukarN8ILLTTpMiv5Om3l7aQ3SrjEd1HHOFmU453fMeQWINftBRQBkeH9A0LwpoVl4X8MWcOnabp0EdraWtsixQwQxKEjjjjUBVRFAVVAAAAArybxV+zd8E/HHxy8LftJeLNBjvvGvgm1vLPQ9SklmzZQ6guy6EcIkEO6VRtZ2jL44BAr3CigD85P25f2APh9+0f4B+J/jX4faNY2nxe8ZfD7VPAllrtzPcQxmzvUdo4LlYi8bRLOwfeYXkXHyngCvOv2If+CRX7If7Kul/D/4mz+A9MHxT8MeH7KxudVhuLu5todQFokN/cWFvcSGC3a4kDs0kUETvuJOCzZ/WCigD8Bfgt/wQ1+AniX4sfGr4nftt+EdH8X3Hjn4j6n4o0Nra9vkB0i68qSC11KKJreKfZMrv5MqzRqWJB+Y1+0XxN+Bfwj+Mfwe1H4AfEfQbbUfBmq2S6dc6SA0Nu1qu0LCohKFFUKoUIV24GMYr1iigD4a/Ze/4Js/sUfsa+Kr/AMe/s9eBrfR9f1K3FnPqlzc3eo3ptgwbyEuL6aeWOHIBMaMqkgZBwMcx4Z/4JSf8E+fCPgPx38K9F+Gmnjwx8SrmK81/SZprqeymnhd5I5IIJZmS0ZJJHdTaiIqxyMYGP0MooA+FfhH/AME0f2Ivgd4H8ZfD/wCHXgSC3sviFYvpniOa6ury9vtRspImhNvNfXU8t35QjcqqLKFXOVAPNeheOv2JP2VfiZ+zfpv7I3j7wVY6t8O9FtrS00/R7gyutrHYKEtTBNv8+OSFQAkqyCQc/Nyc/VFFAHzD+zH+xz+z5+x5oeqeH/gDo9zpcGtTR3F613qN/qUs0kSbIyZb+4uHAVOAqsFx2r6eoooAKKKKACiiigD/2Q==",zb="/assets/pay-c064b197.png";function jh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jh(Object(n),!0).forEach(function(r){Ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function co(e){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(e)}function Bb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $b(e,t,n){return t&&Rh(e.prototype,t),n&&Rh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xd(e,t){return Wb(e)||Kb(e,t)||xv(e,t)||Gb()}function Da(e){return Hb(e)||Vb(e)||xv(e)||Qb()}function Hb(e){if(Array.isArray(e))return Xc(e)}function Wb(e){if(Array.isArray(e))return e}function Vb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function xv(e,t){if(e){if(typeof e=="string")return Xc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xc(e,t)}}function Xc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oh=function(){},wd={},wv={},bv=null,kv={mark:Oh,measure:Oh};try{typeof window<"u"&&(wd=window),typeof document<"u"&&(wv=document),typeof MutationObserver<"u"&&(bv=MutationObserver),typeof performance<"u"&&(kv=performance)}catch{}var Yb=wd.navigator||{},Dh=Yb.userAgent,Lh=Dh===void 0?"":Dh,Un=wd,le=wv,Mh=bv,cs=kv;Un.document;var ln=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",Ev=~Lh.indexOf("MSIE")||~Lh.indexOf("Trident/"),us,ds,fs,hs,ps,en="___FONT_AWESOME___",Zc=16,Sv="fa",Av="svg-inline--fa",gr="data-fa-i2svg",eu="data-fa-pseudo-element",qb="data-fa-pseudo-element-pending",bd="data-prefix",kd="data-icon",Fh="fontawesome-i2svg",Jb="async",Xb=["HTML","HEAD","STYLE","SCRIPT"],_v=function(){try{return!0}catch{return!1}}(),se="classic",ve="sharp",Ed=[se,ve];function La(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[se]}})}var wa=La((us={},Ne(us,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ne(us,ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),us)),ba=La((ds={},Ne(ds,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ne(ds,ve,{solid:"fass",regular:"fasr",light:"fasl"}),ds)),ka=La((fs={},Ne(fs,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ne(fs,ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),fs)),Zb=La((hs={},Ne(hs,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ne(hs,ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),hs)),ek=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Nv="fa-layers-text",tk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nk=La((ps={},Ne(ps,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ne(ps,ve,{900:"fass",400:"fasr",300:"fasl"}),ps)),Iv=[1,2,3,4,5,6,7,8,9,10],rk=Iv.concat([11,12,13,14,15,16,17,18,19,20]),ik=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ea=new Set;Object.keys(ba[se]).map(Ea.add.bind(Ea));Object.keys(ba[ve]).map(Ea.add.bind(Ea));var ak=[].concat(Ed,Da(Ea),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rr.GROUP,rr.SWAP_OPACITY,rr.PRIMARY,rr.SECONDARY]).concat(Iv.map(function(e){return"".concat(e,"x")})).concat(rk.map(function(e){return"w-".concat(e)})),Ji=Un.FontAwesomeConfig||{};function sk(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ok(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var lk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lk.forEach(function(e){var t=xd(e,2),n=t[0],r=t[1],i=ok(sk(n));i!=null&&(Ji[r]=i)})}var Cv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Sv,replacementClass:Av,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ji.familyPrefix&&(Ji.cssPrefix=Ji.familyPrefix);var fi=j(j({},Cv),Ji);fi.autoReplaceSvg||(fi.observeMutations=!1);var D={};Object.keys(Cv).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){fi[e]=n,Xi.forEach(function(r){return r(D)})},get:function(){return fi[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){fi.cssPrefix=t,Xi.forEach(function(n){return n(D)})},get:function(){return fi.cssPrefix}});Un.FontAwesomeConfig=D;var Xi=[];function ck(e){return Xi.push(e),function(){Xi.splice(Xi.indexOf(e),1)}}var pn=Zc,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uk(e){if(!(!e||!ln)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return le.head.insertBefore(t,r),e}}var dk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sa(){for(var e=12,t="";e-- >0;)t+=dk[Math.random()*62|0];return t}function yi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sd(e){return e.classList?yi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Tv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Tv(e[n]),'" ')},"").trim()}function Ho(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ad(e){return e.size!==It.size||e.x!==It.x||e.y!==It.y||e.rotate!==It.rotate||e.flipX||e.flipY}function hk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function pk(e){var t=e.transform,n=e.width,r=n===void 0?Zc:n,i=e.height,a=i===void 0?Zc:i,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Ev?l+="translate(".concat(t.x/pn-r/2,"em, ").concat(t.y/pn-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/pn,"em), calc(-50% + ").concat(t.y/pn,"em)) "):l+="translate(".concat(t.x/pn,"em, ").concat(t.y/pn,"em) "),l+="scale(".concat(t.size/pn*(t.flipX?-1:1),", ").concat(t.size/pn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var mk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pv(){var e=Sv,t=Av,n=D.cssPrefix,r=D.replacementClass,i=mk;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Uh=!1;function Ll(){D.autoAddCss&&!Uh&&(uk(Pv()),Uh=!0)}var gk={mixout:function(){return{dom:{css:Pv,insertCss:Ll}}},hooks:function(){return{beforeDOMElementCreation:function(){Ll()},beforeI2svg:function(){Ll()}}}},tn=Un||{};tn[en]||(tn[en]={});tn[en].styles||(tn[en].styles={});tn[en].hooks||(tn[en].hooks={});tn[en].shims||(tn[en].shims=[]);var yt=tn[en],jv=[],vk=function e(){le.removeEventListener("DOMContentLoaded",e),uo=1,jv.map(function(t){return t()})},uo=!1;ln&&(uo=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),uo||le.addEventListener("DOMContentLoaded",vk));function yk(e){ln&&(uo?setTimeout(e,0):jv.push(e))}function Ma(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Tv(e):"<".concat(t," ").concat(fk(r),">").concat(a.map(Ma).join(""),"</").concat(t,">")}function zh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xk=function(t,n){return function(r,i,a,s){return t.call(n,r,i,a,s)}},Ml=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=i!==void 0?xk(n,i):n,l,u,d;for(r===void 0?(l=1,d=t[a[0]]):(l=0,d=r);l<s;l++)u=a[l],d=o(d,t[u],u,t);return d};function wk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function tu(e){var t=wk(e);return t.length===1?t[0].toString(16):null}function bk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Bh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function nu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Bh(t);typeof yt.hooks.addPack=="function"&&!i?yt.hooks.addPack(e,Bh(t)):yt.styles[e]=j(j({},yt.styles[e]||{}),a),e==="fas"&&nu("fa",t)}var ms,gs,vs,Vr=yt.styles,kk=yt.shims,Ek=(ms={},Ne(ms,se,Object.values(ka[se])),Ne(ms,ve,Object.values(ka[ve])),ms),_d=null,Rv={},Ov={},Dv={},Lv={},Mv={},Sk=(gs={},Ne(gs,se,Object.keys(wa[se])),Ne(gs,ve,Object.keys(wa[ve])),gs);function Ak(e){return~ak.indexOf(e)}function _k(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ak(i)?i:null}var Fv=function(){var t=function(a){return Ml(Vr,function(s,o,l){return s[l]=Ml(o,a,{}),s},{})};Rv=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=s})}return i}),Ov=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=s})}return i}),Mv=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(l){i[l]=s}),i});var n="far"in Vr||D.autoFetchSvg,r=Ml(kk,function(i,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});Dv=r.names,Lv=r.unicodes,_d=Wo(D.styleDefault,{family:D.familyDefault})};ck(function(e){_d=Wo(e.styleDefault,{family:D.familyDefault})});Fv();function Nd(e,t){return(Rv[e]||{})[t]}function Nk(e,t){return(Ov[e]||{})[t]}function ir(e,t){return(Mv[e]||{})[t]}function Uv(e){return Dv[e]||{prefix:null,iconName:null}}function Ik(e){var t=Lv[e],n=Nd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zn(){return _d}var Id=function(){return{prefix:null,iconName:null,rest:[]}};function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?se:n,i=wa[r][e],a=ba[r][e]||ba[r][i],s=e in yt.styles?e:null;return a||s||null}var $h=(vs={},Ne(vs,se,Object.keys(ka[se])),Ne(vs,ve,Object.keys(ka[ve])),vs);function Vo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ne(t,se,"".concat(D.cssPrefix,"-").concat(se)),Ne(t,ve,"".concat(D.cssPrefix,"-").concat(ve)),t),s=null,o=se;(e.includes(a[se])||e.some(function(u){return $h[se].includes(u)}))&&(o=se),(e.includes(a[ve])||e.some(function(u){return $h[ve].includes(u)}))&&(o=ve);var l=e.reduce(function(u,d){var f=_k(D.cssPrefix,d);if(Vr[d]?(d=Ek[o].includes(d)?Zb[o][d]:d,s=d,u.prefix=d):Sk[o].indexOf(d)>-1?(s=d,u.prefix=Wo(d,{family:o})):f?u.iconName=f:d!==D.replacementClass&&d!==a[se]&&d!==a[ve]&&u.rest.push(d),!i&&u.prefix&&u.iconName){var m=s==="fa"?Uv(u.iconName):{},y=ir(u.prefix,u.iconName);m.prefix&&(s=null),u.iconName=m.iconName||y||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Vr.far&&Vr.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},Id());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ve&&(Vr.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=ir(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=zn()||"fas"),l}var Ck=function(){function e(){Bb(this,e),this.definitions={}}return $b(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=j(j({},n.definitions[o]||{}),s[o]),nu(o,s[o]);var l=ka[se][o];l&&nu(l,s[o]),Fv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,l=s.iconName,u=s.icon,d=u[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[o][f]=u)}),n[o][l]=u}),n}}]),e}(),Hh=[],Kr={},ti={},Tk=Object.keys(ti);function Pk(e,t){var n=t.mixoutsTo;return Hh=e,Kr={},Object.keys(ti).forEach(function(r){Tk.indexOf(r)===-1&&delete ti[r]}),Hh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),co(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Kr[s]||(Kr[s]=[]),Kr[s].push(a[s])})}r.provides&&r.provides(ti)}),n}function ru(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Kr[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Kr[e]||[];i.forEach(function(a){a.apply(null,n)})}function nn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ti[e]?ti[e].apply(null,t):void 0}function iu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||zn();if(t)return t=ir(n,t)||t,zh(zv.definitions,n,t)||zh(yt.styles,n,t)}var zv=new Ck,jk=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,vr("noAuto")},Rk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ln?(vr("beforeI2svg",t),nn("pseudoElements2svg",t),nn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,yk(function(){Dk({autoReplaceSvgRoot:n}),vr("watch",t)})}},Ok={icon:function(t){if(t===null)return null;if(co(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ir(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Wo(t[0]);return{prefix:r,iconName:ir(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(ek))){var i=Vo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||zn(),iconName:ir(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=zn();return{prefix:a,iconName:ir(a,t)||t}}}},it={noAuto:jk,config:D,dom:Rk,parse:Ok,library:zv,findIconDefinition:iu,toHtml:Ma},Dk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(yt.styles).length>0||D.autoFetchSvg)&&ln&&D.autoReplaceSvg&&it.dom.i2svg({node:r})};function Ko(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ma(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ln){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Lk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(Ad(s)&&n.found&&!r.found){var o=n.width,l=n.height,u={x:o/l/2,y:.5};i.style=Ho(j(j({},a),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Mk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:s}),children:r}]}]}function Cd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,d=e.titleId,f=e.extra,m=e.watchable,y=m===void 0?!1:m,x=r.found?r:n,w=x.width,S=x.height,g=i==="fak",h=[D.replacementClass,a?"".concat(D.cssPrefix,"-").concat(a):""].filter(function(z){return f.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(f.classes).join(" "),v={children:[],attributes:j(j({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},p=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};y&&(v.attributes[gr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(d||Sa())},children:[l]}),delete v.attributes.title);var E=j(j({},v),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:s,symbol:o,styles:j(j({},p),f.styles)}),I=r.found&&n.found?nn("generateAbstractMask",E)||{children:[],attributes:{}}:nn("generateAbstractIcon",E)||{children:[],attributes:{}},N=I.children,P=I.attributes;return E.children=N,E.attributes=P,o?Mk(E):Lk(E)}function Wh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=j(j(j({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(u[gr]="");var d=j({},s.styles);Ad(i)&&(d.transform=pk({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=Ho(d);f.length>0&&(u.style=f);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function Fk(e){var t=e.content,n=e.title,r=e.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ho(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Fl=yt.styles;function au(e){var t=e[0],n=e[1],r=e.slice(4),i=xd(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(rr.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var Uk={found:!1,width:512,height:512};function zk(e,t){!_v&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function su(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=zn()),new Promise(function(r,i){if(nn("missingIconAbstract"),n==="fa"){var a=Uv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Fl[t]&&Fl[t][e]){var s=Fl[t][e];return r(au(s))}zk(e,t),r(j(j({},Uk),{},{icon:D.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}}))})}var Vh=function(){},ou=D.measurePerformance&&cs&&cs.mark&&cs.measure?cs:{mark:Vh,measure:Vh},zi='FA "6.4.2"',Bk=function(t){return ou.mark("".concat(zi," ").concat(t," begins")),function(){return Bv(t)}},Bv=function(t){ou.mark("".concat(zi," ").concat(t," ends")),ou.measure("".concat(zi," ").concat(t),"".concat(zi," ").concat(t," begins"),"".concat(zi," ").concat(t," ends"))},Td={begin:Bk,end:Bv},Ps=function(){};function Kh(e){var t=e.getAttribute?e.getAttribute(gr):null;return typeof t=="string"}function $k(e){var t=e.getAttribute?e.getAttribute(bd):null,n=e.getAttribute?e.getAttribute(kd):null;return t&&n}function Hk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Wk(){if(D.autoReplaceSvg===!0)return js.replace;var e=js[D.autoReplaceSvg];return e||js.replace}function Vk(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function Kk(e){return le.createElement(e)}function $v(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vk:Kk:n;if(typeof e=="string")return le.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild($v(s,{ceFn:r}))}),i}function Qk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var js={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore($v(i),n)}),n.getAttribute(gr)===null&&D.keepOriginalSource){var r=le.createComment(Qk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sd(n).indexOf(D.replacementClass))return js.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,l){return l===D.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return Ma(o)}).join(`
`);n.setAttribute(gr,""),n.innerHTML=s}};function Qh(e){e()}function Hv(e,t){var n=typeof t=="function"?t:Ps;if(e.length===0)n();else{var r=Qh;D.mutateApproach===Jb&&(r=Un.requestAnimationFrame||Qh),r(function(){var i=Wk(),a=Td.begin("mutate");e.map(i),a(),n()})}}var Pd=!1;function Wv(){Pd=!0}function lu(){Pd=!1}var fo=null;function Gh(e){if(Mh&&D.observeMutations){var t=e.treeCallback,n=t===void 0?Ps:t,r=e.nodeCallback,i=r===void 0?Ps:r,a=e.pseudoElementsCallback,s=a===void 0?Ps:a,o=e.observeMutationsRoot,l=o===void 0?le:o;fo=new Mh(function(u){if(!Pd){var d=zn();yi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Kh(f.addedNodes[0])&&(D.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Kh(f.target)&&~ik.indexOf(f.attributeName))if(f.attributeName==="class"&&$k(f.target)){var m=Vo(Sd(f.target)),y=m.prefix,x=m.iconName;f.target.setAttribute(bd,y||d),x&&f.target.setAttribute(kd,x)}else Hk(f.target)&&i(f.target)})}}),ln&&fo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gk(){fo&&fo.disconnect()}function Yk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function qk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Vo(Sd(e));return i.prefix||(i.prefix=zn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Nk(i.prefix,e.innerText)||Nd(i.prefix,tu(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Jk(e){var t=yi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Sa()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qk(e),r=n.iconName,i=n.prefix,a=n.rest,s=Jk(e),o=ru("parseNodeAttributes",{},e),l=t.styleParser?Yk(e):[];return j({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var Zk=yt.styles;function Vv(e){var t=D.autoReplaceSvg==="nest"?Yh(e,{styleParser:!1}):Yh(e);return~t.extra.classes.indexOf(Nv)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}var Bn=new Set;Ed.map(function(e){Bn.add("fa-".concat(e))});Object.keys(wa[se]).map(Bn.add.bind(Bn));Object.keys(wa[ve]).map(Bn.add.bind(Bn));Bn=Da(Bn);function qh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ln)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(Fh,"-").concat(f))},i=function(f){return n.remove("".concat(Fh,"-").concat(f))},a=D.autoFetchSvg?Bn:Ed.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Zk));a.includes("fa")||a.push("fa");var s=[".".concat(Nv,":not([").concat(gr,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(gr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=yi(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Td.begin("onTree"),u=o.reduce(function(d,f){try{var m=Vv(f);m&&d.push(m)}catch(y){_v||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,f){Promise.all(u).then(function(m){Hv(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(m){l(),f(m)})})}function e2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vv(e).then(function(n){n&&Hv([n],t)})}function t2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:iu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:iu(i||{})),e(r,j(j({},n),{},{mask:i}))}}var n2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?It:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,l=o===void 0?null:o,u=n.maskId,d=u===void 0?null:u,f=n.title,m=f===void 0?null:f,y=n.titleId,x=y===void 0?null:y,w=n.classes,S=w===void 0?[]:w,g=n.attributes,h=g===void 0?{}:g,v=n.styles,p=v===void 0?{}:v;if(t){var E=t.prefix,I=t.iconName,N=t.icon;return Ko(j({type:"icon"},t),function(){return vr("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(m?h["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(x||Sa()):(h["aria-hidden"]="true",h.focusable="false")),Cd({icons:{main:au(N),mask:l?au(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:I,transform:j(j({},It),i),symbol:s,title:m,maskId:d,titleId:x,extra:{attributes:h,styles:p,classes:S}})})}},r2={mixout:function(){return{icon:t2(n2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qh,n.nodeCallback=e2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?le:r,a=n.callback,s=a===void 0?function(){}:a;return qh(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,l=r.transform,u=r.symbol,d=r.mask,f=r.maskId,m=r.extra;return new Promise(function(y,x){Promise.all([su(i,o),d.iconName?su(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=xd(w,2),g=S[0],h=S[1];y([n,Cd({icons:{main:g,mask:h},prefix:o,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:s,extra:m,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,l=Ho(o);l.length>0&&(i.style=l);var u;return Ad(s)&&(u=nn("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},i2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ko({type:"layer"},function(){vr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Da(a)).join(" ")},children:s}]})}}}},a2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Ko({type:"counter",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),Fk({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Da(o))}})})}}}},s2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?It:i,s=r.title,o=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,d=r.attributes,f=d===void 0?{}:d,m=r.styles,y=m===void 0?{}:m;return Ko({type:"text",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),Wh({content:n,transform:j(j({},It),a),title:o,extra:{attributes:f,styles:y,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Da(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,l=null;if(Ev){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/u,l=d.height/u}return D.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Wh({content:n.innerHTML,width:o,height:l,transform:a,title:i,extra:s,watchable:!0})])}}},o2=new RegExp('"',"ug"),Jh=[1105920,1112319];function l2(e){var t=e.replace(o2,""),n=bk(t,0),r=n>=Jh[0]&&n<=Jh[1],i=t.length===2?t[0]===t[1]:!1;return{value:tu(i?t[0]:t),isSecondary:r||i}}function Xh(e,t){var n="".concat(qb).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=yi(e.children),s=a.filter(function(N){return N.getAttribute(eu)===t})[0],o=Un.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(tk),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var f=o.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?ve:se,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ba[m][l[2].toLowerCase()]:nk[m][u],x=l2(f),w=x.value,S=x.isSecondary,g=l[0].startsWith("FontAwesome"),h=Nd(y,w),v=h;if(g){var p=Ik(w);p.iconName&&p.prefix&&(h=p.iconName,y=p.prefix)}if(h&&!S&&(!s||s.getAttribute(bd)!==y||s.getAttribute(kd)!==v)){e.setAttribute(n,v),s&&e.removeChild(s);var E=Xk(),I=E.extra;I.attributes[eu]=t,su(h,y).then(function(N){var P=Cd(j(j({},E),{},{icons:{main:N,mask:Id()},prefix:y,iconName:v,extra:I,watchable:!0})),z=le.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=P.map(function(M){return Ma(M)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function c2(e){return Promise.all([Xh(e,"::before"),Xh(e,"::after")])}function u2(e){return e.parentNode!==document.head&&!~Xb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(eu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Zh(e){if(ln)return new Promise(function(t,n){var r=yi(e.querySelectorAll("*")).filter(u2).map(c2),i=Td.begin("searchPseudoElements");Wv(),Promise.all(r).then(function(){i(),lu(),t()}).catch(function(){i(),lu(),n()})})}var d2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;D.searchPseudoElements&&Zh(i)}}},ep=!1,f2={mixout:function(){return{dom:{unwatch:function(){Wv(),ep=!0}}}},hooks:function(){return{bootstrap:function(){Gh(ru("mutationObserverCallbacks",{}))},noAuto:function(){Gk()},watch:function(n){var r=n.observeMutationsRoot;ep?lu():Gh(ru("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},tp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},h2={mixout:function(){return{parse:{transform:function(n){return tp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=tp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(d)},m={transform:"translate(".concat(s/2*-1," -256)")},y={outer:o,inner:f,path:m};return{tag:"g",attributes:j({},y.outer),children:[{tag:"g",attributes:j({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),y.path)}]}]}}}},Ul={x:0,y:0,width:"100%",height:"100%"};function np(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function p2(e){return e.tag==="g"?e.children:[e]}var m2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Vo(i.split(" ").map(function(s){return s.trim()})):Id();return a.prefix||(a.prefix=zn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,l=n.transform,u=a.width,d=a.icon,f=s.width,m=s.icon,y=hk({transform:l,containerWidth:f,iconWidth:u}),x={tag:"rect",attributes:j(j({},Ul),{},{fill:"white"})},w=d.children?{children:d.children.map(np)}:{},S={tag:"g",attributes:j({},y.inner),children:[np(j({tag:d.tag,attributes:j(j({},d.attributes),y.path)},w))]},g={tag:"g",attributes:j({},y.outer),children:[S]},h="mask-".concat(o||Sa()),v="clip-".concat(o||Sa()),p={tag:"mask",attributes:j(j({},Ul),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:p2(m)},p]};return r.push(E,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Ul)}),{children:r,attributes:i}}}},g2={provides:function(t){var n=!1;Un.matchMedia&&(n=Un.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=j(j({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:j(j({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},v2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},y2=[gk,r2,i2,a2,s2,d2,f2,h2,m2,g2,v2];Pk(y2,{mixoutsTo:it});it.noAuto;it.config;it.library;it.dom;var cu=it.parse;it.findIconDefinition;it.toHtml;var x2=it.icon;it.layer;it.text;it.counter;var Kv={exports:{}},w2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b2=w2,k2=b2;function Qv(){}function Gv(){}Gv.resetWarningCache=Qv;var E2=function(){function e(r,i,a,s,o,l){if(l!==k2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gv,resetWarningCache:Qv};return n.PropTypes=n,n};Kv.exports=E2();var S2=Kv.exports;const K=Wp(S2);function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){Qr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ho(e){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ho(e)}function Qr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _2(e,t){if(e==null)return{};var n=A2(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uu(e){return N2(e)||I2(e)||C2(e)||T2()}function N2(e){if(Array.isArray(e))return du(e)}function I2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C2(e,t){if(e){if(typeof e=="string")return du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return du(e,t)}}function du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,s=e.shake,o=e.flash,l=e.spin,u=e.spinPulse,d=e.spinReverse,f=e.pulse,m=e.fixedWidth,y=e.inverse,x=e.border,w=e.listItem,S=e.flip,g=e.size,h=e.rotation,v=e.pull,p=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":s,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":m,"fa-inverse":y,"fa-border":x,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Qr(t,"fa-".concat(g),typeof g<"u"&&g!==null),Qr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Qr(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Qr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map(function(E){return p[E]?E:null}).filter(function(E){return E})}function j2(e){return e=e-0,e===e}function Yv(e){return j2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var R2=["style"];function O2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function D2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Yv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[O2(i)]=a:t[i]=a,t},{})}function qv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return qv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=D2(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Yv(u)]=d}return l},{attrs:{}}),a=n.style,s=a===void 0?{}:a,o=_2(n,R2);return i.attrs.style=An(An({},i.attrs.style),s),e.apply(void 0,[t.tag,An(An({},i.attrs),o)].concat(uu(r)))}var Jv=!1;try{Jv=!0}catch{}function L2(){if(!Jv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ip(e){if(e&&ho(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(cu.icon)return cu.icon(e);if(e===null)return null;if(e&&ho(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function zl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qr({},e,t):{}}var $t=Eo.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,s=e.title,o=e.titleId,l=e.maskId,u=ip(n),d=zl("classes",[].concat(uu(P2(e)),uu(a.split(" ")))),f=zl("transform",typeof e.transform=="string"?cu.transform(e.transform):e.transform),m=zl("mask",ip(r)),y=x2(u,An(An(An(An({},d),f),m),{},{symbol:i,title:s,titleId:o,maskId:l}));if(!y)return L2("Could not find icon",u),null;var x=y.abstract,w={ref:t};return Object.keys(e).forEach(function(S){$t.defaultProps.hasOwnProperty(S)||(w[S]=e[S])}),M2(x[0],w)});$t.displayName="FontAwesomeIcon";$t.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};$t.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var M2=qv.bind(null,Eo.createElement),F2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},U2={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},z2={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},B2={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},$2={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const H2=()=>c.jsxs("footer",{className:"bg-white pl-3 pb-10 pr-3 -mt-10 pt-10",children:[c.jsxs("div",{className:"section-p1 flex flex-wrap  justify-between lg:pl-8 lg:mt-8 lg:pr-8",children:[c.jsxs("div",{className:" flex flex-col lg:mb-14  ",children:[c.jsx("img",{className:"h-50 w-52",src:yv,alt:"logo"}),c.jsx("h4",{className:"text-2xl pb-6 mt-7 text-black font-semibold",children:"Contact"}),c.jsxs(Q,{className:"text-1xl font-semibold text-black",children:[c.jsx("strong",{children:"My Website: "}),c.jsx(Q,{to:"https://wasequearafat.xyz/",children:"Waseque Arafat"})]}),c.jsxs("p",{className:"text-1xl font-semibold text-black",children:[c.jsx("strong",{children:"Address: "}),"Azimpur LalBag , Dhaka"]}),c.jsxs("p",{className:"text-1xl font-semibold text-black",children:[c.jsx("strong",{children:"Phone: "}),"+0123456789"]}),c.jsxs("p",{className:"text-1xl font-semibold text-black",children:[c.jsx("strong",{children:"Hours: "}),"10:00 - 18:00. Mon - Sat"]}),c.jsxs("div",{className:"follow",children:[c.jsx("h4",{className:"tex-2xl text-black font-bold",children:"Follow"}),c.jsxs("div",{className:"lg:pt-6 pt-3 pb-5",children:[c.jsx(Q,{className:"",children:c.jsx($t,{className:" text-blue-800 text-3xl ",icon:U2})}),c.jsx(Q,{className:"ml-4",children:c.jsx($t,{className:"text-red-700  text-3xl lg:ml-4",icon:B2})}),c.jsx(Q,{className:"ml-4",children:c.jsx($t,{className:"text-blue-600 text-3xl lg:ml-4",icon:$2})}),c.jsx(Q,{className:"ml-4",children:c.jsx($t,{className:"text-black text-3xl lg:ml-4",icon:z2})}),c.jsx(Q,{className:"ml-4",children:c.jsx($t,{className:"text-3xl text-red-600 lg:ml-4",icon:F2})})]})]})]}),c.jsxs("div",{className:"mt-10 ",children:[c.jsx("h4",{className:"text-2xl text-black font-bold lg:mb-3",children:"About"}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"About Us"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Delivery Information"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Privacy Policy"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Terms & Conditions"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Contact Us"})]})]}),c.jsxs("div",{className:" ",children:[c.jsx("h4",{className:"text-2xl text-black font-semibold mb-3",children:"My Account"}),c.jsxs("div",{className:"flex flex-col lg:pl-3",children:[c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Sign In"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"View Cart"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"My Wishlist"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Track My Order"}),c.jsx(Q,{className:"font-semibold mt-3 text-black",href:"#",children:"Help"})]})]}),c.jsxs("div",{className:"col install mt-10",children:[c.jsx("h4",{className:"text-black text-2xl font-extrabold lg:mb-4",children:"Install App"}),c.jsx("p",{className:"text-1xl font-semibold text-black",children:"Form App Store or Google Play"}),c.jsxs("div",{className:"",children:[c.jsxs(Q,{children:[" ",c.jsx("img",{className:"mb-5 mt-2",src:Fb,alt:"logo"})]}),c.jsxs(Q,{children:[" ",c.jsx("img",{className:"mb-5 mt-2",src:Ub,alt:"logo"})]})]}),c.jsx("p",{className:"text-1xl font-semibold text-black",children:"Secured Payment Gateways"}),c.jsx(Q,{className:" ",children:c.jsx("img",{className:"mt-5",src:zb,alt:"logo"})})]})]}),c.jsx("div",{className:"text-center lg:pb-24 mt-10",children:c.jsxs("p",{className:"text-2xl font-semibold text-black",children:["©2023 ",c.jsx("strong",{children:"Waseque Arafat"})," - the font-end developer"]})})]});const W2=()=>c.jsxs("section",{id:"newsletter",className:"lg:flex pt-20 pb-20  justify-between items-center lg:pb-20 bg-[#041e42] section-p1 section-m1 ",children:[c.jsxs("div",{className:"newstext pb-11 p-4 lg:pl-10",children:[c.jsx("h4",{className:"text-2xl text-white font-bold",children:"Sign Up For Newsletters"}),c.jsxs("p",{className:"text-1xl text-white font-semibold",children:["Get E-mail update about our latest shop and",c.jsx(Q,{className:"text-yellow-400 ml-3 ",children:"special offers."})]})]}),c.jsxs("div",{className:"form lg:pl-96 p-4   flex w-[100%]",children:[c.jsx("input",{className:"w-[80%] p-3 rounded-md text-1xl",type:"text",placeholder:"Your email address"}),c.jsx("button",{className:"bg-purple-700 px-7 py-2 rounded-xl text-white hover:bg-sky-600",children:"Sign up"})]})]}),V2=()=>c.jsxs("div",{children:[c.jsx(Mb,{}),c.jsx(Sb,{}),c.jsx(W2,{}),c.jsx(H2,{})]});const Xv="/assets/f1-5a53131b.jpg",Zv="/assets/f2-049fbe0a.jpg",ey="/assets/f3-351c2180.jpg",ty="/assets/f4-a0a77c74.jpg",ny="/assets/f5-cec5858d.jpg",ry="/assets/f6-5e0db923.jpg",iy="/assets/f7-ad35d1c9.jpg",ay="/assets/f8-7977094c.jpg",K2=()=>c.jsxs("div",{className:"lg:pb-20 pb-10 mt-10",children:[c.jsxs("div",{className:"text-black",children:[c.jsx("h1",{className:"lg:text-6xl mb-3 text-3xl font-bold text-center",children:"Featured Products"}),c.jsx("p",{className:"lg:text-2xl  mb-4 text-center lg:mt-2",children:"Summer Collection New Modern Design"})]}),c.jsxs("div",{className:" grid grid-rows-2 lg:pt-10 lg:grid-flow-col  gap-4",children:[c.jsxs("div",{className:"pro border  lg:mb-5",children:[c.jsx("img",{src:Xv}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6  text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:Zv,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ey,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ty,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ny,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ry,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:iy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ay,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-5 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] pl-6 text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]})]})]});const Q2=()=>c.jsxs("section",{id:"banner",className:"section-m1 flex items-center justify-center flex-col   lg:pb-20 text-center h-[30vh] w-[100%]",children:[c.jsx("h4",{className:"text-2xl text-white",children:"Repair Services"}),c.jsxs("h2",{className:"lg:text-4xl text-2xl p-2 text-white font-bold",children:["Up To ",c.jsx("span",{children:"70% Off"})," - All t-Shirts & Accessories"]}),c.jsx("button",{className:"  text-1xl px-5 py-2 rounded-md bg-white text-black mt-6 lg:-mb-36 hover:bg-[#088178] hover:text-white",children:"Explore More"})]}),sy="/assets/n1-c83d9eb9.jpg",oy="/assets/n2-d42922e6.jpg",ly="/assets/n3-8fd21ecc.jpg",cy="/assets/n4-2bee2189.jpg",uy="/assets/n5-9cf71e55.jpg",dy="/assets/n6-b0af89dc.jpg",fy="/assets/n7-7a30346f.jpg",hy="/assets/n8-7de5ad9d.jpg",G2=()=>c.jsxs("div",{className:"lg:pb-7 mt-7 lg:ml-8 lg:mr-8 lg:mt-20",children:[c.jsxs("div",{className:"text-black lg:mb-10",children:[c.jsx("h1",{className:"lg:text-6xl font-bold text-center text-3xl mb-2",children:"Featured Products"}),c.jsx("p",{className:"lg:text-2xl text-center lg:mt-2",children:"Summer Collection New Modern Design"})]}),c.jsxs("div",{className:"grid grid-rows-2   lg:pt-10 lg:grid-flow-col gap-4",children:[c.jsxs("div",{className:"pro border   lg:mb-5",children:[c.jsx("img",{src:sy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6  text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:oy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ly,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:cy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:uy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:dy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:fy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:hy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] pl-6 lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black pl-4 lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178]  pl-6 font-semibold text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]})]})]});const Y2=()=>c.jsxs("section",{id:"sm-banner",className:"section-p1 lg:px-40 lg:py-20 flex items-center justify-between flex-wrap",children:[c.jsxs("div",{className:"banner-box h-[40vh] flex justify-center flex-col pl-9 items-start w-[435px] ",children:[c.jsx("h4",{className:"text-white text-2xl font-semibold",children:"Crazy Deals"}),c.jsx("h2",{className:"text-white font-semibold text-1xl",children:"Buy 1 Get 1 Free"}),c.jsx("span",{className:"text-white mb-4",children:"The best classic dress is on sale at cara"}),c.jsx("button",{className:"white  px-5 py-2 bg-red-400 text-white rounded-xl hover:bg-[#088178]",children:"Learn More"})]}),c.jsxs("div",{className:"h-[40vh] pl-9 flex justify-center flex-col items-start w-[435px]  banner-box2",children:[c.jsx("h4",{className:"text-white text-2xl font-semibold",children:"spring/summer"}),c.jsx("h2",{className:"text-white font-semibold text-1xl",children:"upcoming season"}),c.jsx("span",{className:"font-bold text-white mb-4",children:"The best classic dress is on sale at cara"}),c.jsx("button",{className:"white bg-green-500 text-black px-5 py-2 rounded-lg",children:"Collection"})]})]});const q2=()=>c.jsxs("section",{id:"banner3",className:"lg:flex  justify-between items-center p-20",children:[c.jsxs("div",{className:"banner-box h-2/5",children:[c.jsx("h2",{className:"text-white font-bold text-2xl",children:"SEASONAL SALE"}),c.jsx("h3",{className:"text-red-600 font-bold",children:"Winter Collection 50% Off"})]}),c.jsxs("div",{className:"banner-box h-2/5 banner-box2",children:[c.jsx("h2",{className:"text-white font-bold text-2xl",children:"NEW FOOTWEAR COLLECTION"}),c.jsx("h3",{className:"text-red-600 font-bold",children:"Spring / Summer 2022"})]}),c.jsxs("div",{className:"banner-box h-2/5 banner-box3",children:[c.jsx("h2",{className:"text-white font-bold text-2xl",children:"T-SHIRTS"}),c.jsx("h3",{className:"text-red-600 font-bold",children:"New Trendy Prints"})]})]}),J2="/assets/f2-bb945d1f.png",X2="/assets/f1-8a4aa52a.png",Z2="/assets/f3-e9627bfe.png",eE="/assets/f4-f974cf6f.png",tE="/assets/f5-e103eb3f.png",nE="/assets/f6-2e10be5a.png",py=()=>c.jsx("div",{children:c.jsxs("section",{id:"future",className:"section-p1 lg:flex p-6  grid grid-cols-2   lg:ml-20 lg:mt-40 lg:mp-40 ",children:[c.jsxs("div",{className:"fu-box mb-6  lg:ml-20",children:[c.jsx("img",{src:X2,alt:"futures"}),c.jsx("h6",{className:"btn002 ml-5 mt-2  bg-[#cdebbc]",children:"Free Shipping"})]}),c.jsxs("div",{className:"fu-box mb-6  lg:ml-20",children:[c.jsx("img",{src:J2,alt:"futures"}),c.jsx("h6",{className:"btn002 ml-5 mt-2 bg-[#d1ef82]",children:"Online Order"})]}),c.jsxs("div",{className:"fu-box mb-6  lg:ml-20",children:[c.jsx("img",{src:Z2,alt:"futures"}),c.jsx("h6",{className:"btn002 ml-7 mt-3 bg-[ #cdd4f8]",children:"Save Money"})]}),c.jsxs("div",{className:"fu-box mb-6  lg:ml-20",children:[c.jsx("img",{src:eE,alt:"futures"}),c.jsx("h6",{className:"btn002 ml-7 mt-2 bg-[ #f6dbf6]",children:"Promotions"})]}),c.jsxs("div",{className:"fu-box mb-6  lg:ml-20",children:[c.jsx("img",{src:tE,alt:"futures"}),c.jsx("h6",{className:"btn002 ml-8 mt-2 bg-[ #faede0]",children:"Happy Sell"})]}),c.jsxs("div",{className:"fu-box mb-6  lg:ml-20 lg:mb-20",children:[c.jsx("img",{src:nE}),c.jsx("h6",{className:"btn002 ml-6 mt-2",children:"F24/7 Support"})]})]})}),rE=()=>c.jsxs("div",{className:" bg-white  ",children:[c.jsx("section",{className:"lg:pl-40   ",id:"hero",children:c.jsxs("div",{className:"ml-[52px] ",children:[c.jsx("h4",{className:"hh4 text-2xl font-bold",children:"Trade-in-offer"}),c.jsx("h2",{className:"text-4xl text-black lg:text-black font-semibold",children:"Supper value deals"}),c.jsx("h1",{className:"hn1 text-7xl font-semibold lg:mb-5",children:"On all products"}),c.jsx("p",{className:"text-2xl text-black lg:mb-3",children:"Save more with coupons & up to 70% off!"}),c.jsx("button",{className:"btn-01",children:"SHOP NOW"})]})}),c.jsxs("section",{children:[c.jsx(py,{})," ",c.jsx(K2,{}),c.jsx(Q2,{}),c.jsx(G2,{}),c.jsx(Y2,{}),c.jsx(q2,{})]})]});const iE=()=>c.jsxs("section",{className:"hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center",children:[c.jsx("h2",{className:"text-white text-6xl mb-5 font-bold",children:"#StayHome"}),c.jsx("p",{className:"text-white text2xl font-semibold",children:"Save more with coupons & up to 70% off!"})]}),aE=()=>c.jsxs("div",{className:"lg:pb-20  pl-10 pr-10 lg:mt-20",children:[c.jsxs("div",{className:"text-black lg:mb-10 ",children:[c.jsx("h1",{className:"lg:text-6xl text-3xl mt-3 mb-4 font-bold text-center",children:"Featured Products"}),c.jsx("p",{className:"lg:text-2xl mb-4 text-center lg:mt-2",children:"Summer Collection New Modern Design"})]}),c.jsxs("div",{className:" grid grid-rows-2 lg:pt-10 lg:grid-flow-col  gap-4",children:[c.jsxs("div",{className:"pro border lg:mb-5",children:[c.jsx("img",{src:Xv,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6  text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:Zv,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ey,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ty,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ny,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ry,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:iy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ay,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]})]}),c.jsxs("div",{className:" grid grid-rows-2 lg:pt-10 lg:grid-flow-col  gap-4 pb-7",children:[c.jsxs("div",{className:"pro border   lg:mb-5",children:[c.jsx("img",{src:sy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6  text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:oy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:ly,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:cy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:uy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:dy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:fy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),c.jsxs("div",{className:"pro border",children:[c.jsx("img",{src:hy,alt:"product"}),c.jsxs("div",{className:"des",children:[c.jsx("span",{className:"text-[#606063] lg:pl-9 text-1xl",children:"Adidas"}),c.jsx("h5",{className:"text-black lg:pl-6 text-2xl",children:"Cartoon Astronaut T-Shirt"}),c.jsxs("div",{className:"star",children:[c.jsx("i",{className:"fas fa-star"}),c.jsx("i",{className:"fas fa-star"}),c.jsx("i",{className:"fas fa-star"}),c.jsx("i",{className:"fas fa-star"}),c.jsx("i",{className:"fas fa-star"})]}),c.jsx("h4",{className:"text-[#088178] text-2xl lg:pl-9",children:"$75"})]}),c.jsx("a",{href:"#",id:"cart-icon",children:c.jsx("i",{className:"fa-solid fa-cart-shopping"})})]})]})]}),sE=()=>c.jsxs("div",{className:"bg-white",children:[c.jsx(iE,{}),c.jsx(aE,{})]});const oE="/assets/b1-44efc301.jpg",lE="/assets/b2-0ea477fc.jpg",cE="/assets/b3-1c12417f.jpg",uE="/assets/b4-b5dce113.jpg",dE="/assets/b5-2475c5b8.jpg",fE="/assets/b6-617482f1.jpg",hE="/assets/b7-f745450e.jpg",pE=()=>c.jsxs("section",{className:" bg-white lg:pl-20  lg:pt-24",id:"blog",children:[c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:oE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:lE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:cE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:uE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:dE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:fE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]}),c.jsxs("div",{className:"blog-box lg:flex grid  grid-cols-1  items-center pb-24  ",children:[c.jsx("div",{className:"blog-img lg:w-[50%]",children:c.jsx("img",{className:" mt-10 lg:w-[100%] h-[259px] w-[100%]  lg:h-[300px] shadow-xxl object-cover",src:hE})}),c.jsxs("div",{className:"blog-details lg:w-[50%] pl-5 pr-3   lg:ml-10",children:[c.jsx("p",{className:"text-black font-bold text-2xl mt-2 mb-3 lg:text-3xl lg:mb-3 ",children:"The Cotton-Jersey zip-up hoodie"}),c.jsx("p",{className:"text-black  mb-3 ",children:"Kickstarter man braid godard coloring book. Reslette waistocost selfies yrwolf chartreuse hexagon irony, godard...."}),c.jsx(Q,{className:"text-red-500 font-semibold",href:"#",children:"READ MORE......"})]})]})]}),mE=()=>c.jsxs("div",{children:[c.jsxs("section",{className:"blog pt-40 pb-32 w-[100]",children:[c.jsx("h2",{className:"text-center text-white font-bold lg:text-7xl text-6xl",children:"#ReadMore"}),c.jsx("p",{className:"text-center text-white text-2xl font-semibold mt-3",children:"Read all case studies about our product!"})]}),c.jsx(pE,{})]});const gE="/assets/a6-fed0f3aa.jpg",vE=()=>c.jsxs("section",{id:"about-us",className:"section-p1 lg:mt-4 lg:flex  items-center",children:[c.jsx("img",{className:"shadow-lg rounded-xl lg:w-[48%]",src:gE,alt:"aboutUs"}),c.jsxs("div",{className:" lg:pl-10 lg:pr-9 pl-3 pr-3 ",children:[c.jsx("h2",{className:"text-black text-2xl font-bold",children:"Who We Are?"}),c.jsx("p",{className:"text-black text-1xl items-center",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat facilis aut saepe in incidunt, placeat, a dolor eius sit officiis magni ipsa odit consequatur. Dolore nisi voluptas, voluptate unde aspernatur quisquam maiores tempora dicta, provident ut voluptates ommodi accusamus possimus. Quibusdam perferendis porro illum."}),c.jsx(Q,{className:"text-black font-semibold  pt-2",to:"/",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("div",{className:"text-red-600 pl-2 pr-2 font-bold",children:c.jsx("marquee",{children:"Between vacations, many daydream about what adventures the next trip holds. You can spend your days switching back and forth from looking at your favorite travel photos to trying to go about your day to day life. But a few friendly reminders that the next adventure is closer than you think can help you put your wanderlust to rest. And one of the best distractions comes with this list of travel quotes. Pick your favorite from the collection below and use it to inspire your next trip"})})]})]});const yE="/assets/1-b9e724ac.mp4",xE=()=>c.jsx("div",{className:"lg:mt-10 mt-10   lg:pb-10",children:c.jsxs("section",{id:"app",className:"section-p1",children:[c.jsxs("h1",{className:"lg:text-6xl text-3xl mb-4 text-black font-bold lg:pb-10",children:["Download Our ",c.jsx(Q,{href:"#",children:"App"})]}),c.jsx("div",{className:"video",children:c.jsx("video",{src:yE,autoPlay:!0,muted:!0,loop:!0})})]})}),wE="/assets/ezgif.com-video-to-gif-a6127bac.gif",bE=()=>c.jsx("div",{children:c.jsx("div",{className:"hero min-h-screen bg-white",children:c.jsxs("div",{className:"hero-content flex-col lg:flex-row-reverse",children:[c.jsx("img",{src:wE,className:"max-w-3xl rounded-lg w-[100%] shadow-2xl"}),c.jsxs("div",{children:[c.jsx("h1",{className:"lg:text-5xl text-4xl mt-4 text-white font-bold",children:"Box Office News!"}),c.jsx("p",{className:"py-6 text-white font-semibold",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),c.jsx("button",{className:"btn btn-primary",children:"Get Started"})]})]})})}),kE=()=>c.jsxs("div",{className:"bg-white",children:[c.jsxs("section",{className:"hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center",children:[c.jsx("h2",{className:"text-white text-6xl mb-5 font-bold",children:"#KnowUs"}),c.jsx("p",{className:"text-white text2xl font-semibold",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),c.jsx(vE,{}),c.jsx(xE,{}),c.jsx(py,{}),c.jsx(bE,{})]});/**
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
 */const my=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},EE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],s=e[n++],o=e[n++],l=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return t.join("")},gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],s=i+1<e.length,o=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=a>>2,f=(a&3)<<4|o>>4;let m=(o&15)<<2|u>>6,y=u&63;l||(y=64,s||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(my(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):EE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||o==null||u==null||f==null)throw new SE;const m=a<<2|o>>4;if(r.push(m),u!==64){const y=o<<4&240|u>>2;if(r.push(y),f!==64){const x=u<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class SE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AE=function(e){const t=my(e);return gy.encodeByteArray(t,!0)},vy=function(e){return AE(e).replace(/\./g,"")},yy=function(e){try{return gy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NE=()=>_E().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},CE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yy(e[1]);return t&&JSON.parse(t)},jd=()=>{try{return NE()||IE()||CE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},TE=e=>{var t,n;return(n=(t=jd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},xy=()=>{var e;return(e=jd())===null||e===void 0?void 0:e.config},wy=e=>{var t;return(t=jd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class PE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function by(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function RE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OE(){const e=Ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ky(){try{return typeof indexedDB=="object"}catch{return!1}}function Ey(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function DE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LE="FirebaseError";class Lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=LE,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],s=a?ME(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Lt(i,o,r)}}function ME(e,t){return e.replace(FE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const FE=/\{\$([^}]+)}/g;function UE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Aa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],s=t[i];if(ap(a)&&ap(s)){if(!Aa(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ap(e){return e!==null&&typeof e=="object"}/**
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
 */function Fa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function zE(e,t){const n=new BE(e,t);return n.subscribe.bind(n)}class BE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$E(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Bl),i.error===void 0&&(i.error=Bl),i.complete===void 0&&(i.complete=Bl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Bl(){}/**
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
 */const HE=1e3,WE=2,VE=4*60*60*1e3,KE=.5;function sp(e,t=HE,n=WE){const r=t*Math.pow(n,e),i=Math.round(KE*r*(Math.random()-.5)*2);return Math.min(VE,r+i)}/**
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
 */function Kn(e){return e&&e._delegate?e._delegate:e}class Ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class QE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new PE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(YE(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&t(s,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GE(e){return e===Xn?void 0:e}function YE(e){return e.instantiationMode==="EAGER"}/**
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
 */class qE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new QE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const JE={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},XE=te.INFO,ZE={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},eS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ZE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rd{constructor(t){this.name=t,this._logLevel=XE,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?JE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const tS=(e,t)=>t.some(n=>e instanceof n);let op,lp;function nS(){return op||(op=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rS(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,fu=new WeakMap,Ay=new WeakMap,$l=new WeakMap,Od=new WeakMap;function iS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(On(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Sy.set(n,e)}).catch(()=>{}),Od.set(t,e),t}function aS(e){if(fu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});fu.set(e,t)}let hu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ay.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sS(e){hu=e(hu)}function oS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Hl(this),t,...n);return Ay.set(r,t.sort?t.sort():[t]),On(r)}:rS().includes(e)?function(...t){return e.apply(Hl(this),t),On(Sy.get(this))}:function(...t){return On(e.apply(Hl(this),t))}}function lS(e){return typeof e=="function"?oS(e):(e instanceof IDBTransaction&&aS(e),tS(e,nS())?new Proxy(e,hu):e)}function On(e){if(e instanceof IDBRequest)return iS(e);if($l.has(e))return $l.get(e);const t=lS(e);return t!==e&&($l.set(e,t),Od.set(t,e)),t}const Hl=e=>Od.get(e);function cS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=On(s);return r&&s.addEventListener("upgradeneeded",l=>{r(On(s.result),l.oldVersion,l.newVersion,On(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const uS=["get","getKey","getAll","getAllKeys","count"],dS=["put","add","delete","clear"],Wl=new Map;function cp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Wl.get(t))return Wl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=dS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uS.includes(n)))return;const a=async function(s,...o){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return Wl.set(t,a),a}sS(e=>({...e,get:(t,n,r)=>cp(t,n)||e.get(t,n,r),has:(t,n)=>!!cp(t,n)||e.has(t,n)}));/**
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
 */class fS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const pu="@firebase/app",up="0.9.19";/**
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
 */const yr=new Rd("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",vS="@firebase/app-check-compat",yS="@firebase/app-check",xS="@firebase/auth",wS="@firebase/auth-compat",bS="@firebase/database",kS="@firebase/database-compat",ES="@firebase/functions",SS="@firebase/functions-compat",AS="@firebase/installations",_S="@firebase/installations-compat",NS="@firebase/messaging",IS="@firebase/messaging-compat",CS="@firebase/performance",TS="@firebase/performance-compat",PS="@firebase/remote-config",jS="@firebase/remote-config-compat",RS="@firebase/storage",OS="@firebase/storage-compat",DS="@firebase/firestore",LS="@firebase/firestore-compat",MS="firebase",FS="10.4.0";/**
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
 */const mu="[DEFAULT]",US={[pu]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[yS]:"fire-app-check",[vS]:"fire-app-check-compat",[xS]:"fire-auth",[wS]:"fire-auth-compat",[bS]:"fire-rtdb",[kS]:"fire-rtdb-compat",[ES]:"fire-fn",[SS]:"fire-fn-compat",[AS]:"fire-iid",[_S]:"fire-iid-compat",[NS]:"fire-fcm",[IS]:"fire-fcm-compat",[CS]:"fire-perf",[TS]:"fire-perf-compat",[PS]:"fire-rc",[jS]:"fire-rc-compat",[RS]:"fire-gcs",[OS]:"fire-gcs-compat",[DS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[MS]:"fire-js-all"};/**
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
 */const po=new Map,gu=new Map;function zS(e,t){try{e.container.addComponent(t)}catch(n){yr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rn(e){const t=e.name;if(gu.has(t))return yr.debug(`There were multiple attempts to register component ${t}.`),!1;gu.set(t,e);for(const n of po.values())zS(n,e);return!0}function xi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const BS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Ar("app","Firebase",BS);/**
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
 */class $S{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ua=FS;function _y(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=xy()),!n)throw Dn.create("no-options");const a=po.get(i);if(a){if(Aa(n,a.options)&&Aa(r,a.config))return a;throw Dn.create("duplicate-app",{appName:i})}const s=new qE(i);for(const l of gu.values())s.addComponent(l);const o=new $S(n,r,s);return po.set(i,o),o}function Ny(e=mu){const t=po.get(e);if(!t&&e===mu&&xy())return _y();if(!t)throw Dn.create("no-app",{appName:e});return t}function Pt(e,t,n){var r;let i=(r=US[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${t}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}rn(new Ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const HS="firebase-heartbeat-database",WS=1,_a="firebase-heartbeat-store";let Vl=null;function Iy(){return Vl||(Vl=cS(HS,WS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_a)}}}).catch(e=>{throw Dn.create("idb-open",{originalErrorMessage:e.message})})),Vl}async function VS(e){try{return await(await Iy()).transaction(_a).objectStore(_a).get(Cy(e))}catch(t){if(t instanceof Lt)yr.warn(t.message);else{const n=Dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yr.warn(n.message)}}}async function dp(e,t){try{const r=(await Iy()).transaction(_a,"readwrite");await r.objectStore(_a).put(t,Cy(e)),await r.done}catch(n){if(n instanceof Lt)yr.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function Cy(e){return`${e.name}!${e.options.appId}`}/**
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
 */const KS=1024,QS=30*24*60*60*1e3;class GS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=QS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fp(),{heartbeatsToSend:n,unsentEntries:r}=YS(this._heartbeatsCache.heartbeats),i=vy(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fp(){return new Date().toISOString().substring(0,10)}function YS(e,t=KS){const n=[];let r=e.slice();for(const i of e){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),hp(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ky()?Ey().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hp(e){return vy(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function JS(e){rn(new Ot("platform-logger",t=>new fS(t),"PRIVATE")),rn(new Ot("heartbeat",t=>new GS(t),"PRIVATE")),Pt(pu,up,e),Pt(pu,up,"esm2017"),Pt("fire-js","")}JS("");function Dd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function pp(e){return e!==void 0&&e.enterprise!==void 0}class XS{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZS=Ty,Py=new Ar("auth","Firebase",Ty());/**
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
 */const mo=new Rd("@firebase/auth");function eA(e,...t){mo.logLevel<=te.WARN&&mo.warn(`Auth (${Ua}): ${e}`,...t)}function Rs(e,...t){mo.logLevel<=te.ERROR&&mo.error(`Auth (${Ua}): ${e}`,...t)}/**
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
 */function Dt(e,...t){throw Ld(e,...t)}function jt(e,...t){return Ld(e,...t)}function jy(e,t,n){const r=Object.assign(Object.assign({},ZS()),{[t]:n});return new Ar("auth","Firebase",r).create(t,{appName:e.name})}function tA(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Dt(e,"argument-error"),jy(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ld(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Py.create(e,...t)}function H(e,t,...n){if(!e)throw Ld(t,...n)}function Kt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rs(t),new Error(t)}function an(e,t){e||Kt(t)}/**
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
 */function vu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function nA(){return mp()==="http:"||mp()==="https:"}function mp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nA()||by()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class za{constructor(t,n){this.shortDelay=t,this.longDelay=n,an(n>t,"Short delay should be less than long delay!"),this.isMobile=jE()||RE()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Md(e,t){an(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ry{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sA=new za(3e4,6e4);function Qo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function wi(e,t,n,r,i={}){return Oy(e,i,async()=>{let a={},s={};r&&(t==="GET"?s=r:a={body:JSON.stringify(r)});const o=Fa(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ry.fetch()(Ly(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Oy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},aA),t);try{const i=new oA(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw ys(e,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const o=a.ok?s.errorMessage:s.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ys(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ys(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jy(e,d,u);Dt(e,d)}}catch(i){if(i instanceof Lt)throw i;Dt(e,"network-request-failed",{message:String(i)})}}async function Dy(e,t,n,r,i={}){const a=await wi(e,t,n,r,i);return"mfaPendingCredential"in a&&Dt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Ly(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Md(e.config,i):`${e.config.apiScheme}://${i}`}class oA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),sA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jt(e,t,r);return i.customData._tokenResponse=n,i}async function lA(e,t){return wi(e,"GET","/v2/recaptchaConfig",Qo(e,t))}/**
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
 */async function cA(e,t){return wi(e,"POST","/v1/accounts:delete",t)}async function uA(e,t){return wi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Zi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dA(e,t=!1){const n=Kn(e),r=await n.getIdToken(t),i=Fd(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Zi(Kl(i.auth_time)),issuedAtTime:Zi(Kl(i.iat)),expirationTime:Zi(Kl(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Kl(e){return Number(e)*1e3}function Fd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=yy(n);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fA(e){const t=Fd(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Na(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lt&&hA(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function hA({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class pA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class My{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Na(e,uA(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const s=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?vA(a.providerUserInfo):[],o=gA(e.providerData,s),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new My(a.createdAt,a.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function mA(e){const t=Kn(e);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gA(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function vA(e){return e.map(t=>{var{providerId:n}=t,r=Dd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yA(e,t){const n=await Oy(e,{},async()=>{const r=Fa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,s=Ly(e,i,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ry.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fA(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await yA(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,s=new Ia;return r&&(H(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),a&&(H(typeof a=="number","internal-error",{appName:t}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ia,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function mn(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class cr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Dd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new My(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Na(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dA(this,t)}reload(){return mA(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new cr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Na(this,cA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,s,o,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(o=n.tenantId)!==null&&o!==void 0?o:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:p,isAnonymous:E,providerData:I,stsTokenManager:N}=n;H(v&&N,t,"internal-error");const P=Ia.fromJSON(this.name,N);H(typeof v=="string",t,"internal-error"),mn(f,t.name),mn(m,t.name),H(typeof p=="boolean",t,"internal-error"),H(typeof E=="boolean",t,"internal-error"),mn(y,t.name),mn(x,t.name),mn(w,t.name),mn(S,t.name),mn(g,t.name),mn(h,t.name);const z=new cr({uid:v,auth:t,email:m,emailVerified:p,displayName:f,isAnonymous:E,photoURL:x,phoneNumber:y,tenantId:w,stsTokenManager:P,createdAt:g,lastLoginAt:h});return I&&Array.isArray(I)&&(z.providerData=I.map(M=>Object.assign({},M))),S&&(z._redirectEventId=S),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ia;i.updateFromServerResponse(n);const a=new cr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await go(a),a}}/**
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
 */const gp=new Map;function Qt(e){an(e instanceof Function,"Expected a class definition");let t=gp.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gp.set(e,t),t)}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Fy.type="NONE";const vp=Fy;/**
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
 */function Os(e,t,n){return`firebase:${e}:${t}:${n}`}class ni{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Os(this.userKey,i.apiKey,a),this.fullPersistenceKey=Os("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?cr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ni(Qt(vp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Qt(vp);const s=Os(r,t.config.apiKey,t.name);let o=null;for(const u of n)try{const d=await u._get(s);if(d){const f=cr._fromJSON(t,d);u!==a&&(o=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ni(a,t,r):(a=l[0],o&&await a._set(s,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(s)}catch{}})),new ni(a,t,r))}}/**
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
 */function yp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(By(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hy(t))return"Blackberry";if(Wy(t))return"Webos";if(Ud(t))return"Safari";if((t.includes("chrome/")||zy(t))&&!t.includes("edge/"))return"Chrome";if($y(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uy(e=Ue()){return/firefox\//i.test(e)}function Ud(e=Ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zy(e=Ue()){return/crios\//i.test(e)}function By(e=Ue()){return/iemobile/i.test(e)}function $y(e=Ue()){return/android/i.test(e)}function Hy(e=Ue()){return/blackberry/i.test(e)}function Wy(e=Ue()){return/webos/i.test(e)}function Go(e=Ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xA(e=Ue()){var t;return Go(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wA(){return OE()&&document.documentMode===10}function Vy(e=Ue()){return Go(e)||$y(e)||Wy(e)||Hy(e)||/windows phone/i.test(e)||By(e)}function bA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ky(e,t=[]){let n;switch(e){case"Browser":n=yp(Ue());break;case"Worker":n=`${yp(Ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ua}/${r}`}/**
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
 */class kA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((s,o)=>{try{const l=t(a);s(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function EA(e,t={}){return wi(e,"GET","/v2/passwordPolicy",Qo(e,t))}/**
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
 */const SA=6;class AA{constructor(t){var n,r,i,a;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:SA,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,s,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class _A{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xp(this),this.idTokenSubscription=new xp(this),this.beforeStateQueue=new kA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===o)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Kn(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await EA(this),n=new AA(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ar("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(o,this,"internal-error"),o.then(()=>{s||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&eA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _r(e){return Kn(e)}class xp{constructor(t){this.auth=t,this.observer=null,this.addObserver=zE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function NA(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Qy(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=jt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",NA().appendChild(r)})}function IA(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const CA="https://www.google.com/recaptcha/enterprise.js?render=",TA="recaptcha-enterprise",PA="NO_RECAPTCHA";class jA{constructor(t){this.type=TA,this.auth=_r(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,o)=>{lA(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new XS(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,s(u.siteKey)}}).catch(l=>{o(l)})})}function i(a,s,o){const l=window.grecaptcha;pp(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{s(u)}).catch(()=>{s(PA)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,s)=>{r(this.auth).then(o=>{if(!n&&pp(window.grecaptcha))i(o,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Qy(CA+o).then(()=>{i(o,a,s)}).catch(l=>{s(l)})}}).catch(o=>{s(o)})})}}async function wp(e,t,n,r=!1){const i=new jA(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:a}):Object.assign(s,{captchaResponse:a}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */function RA(e,t){const n=xi(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Aa(a,t??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:t})}function OA(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function DA(e,t,n){const r=_r(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=Gy(t),{host:s,port:o}=LA(t),l=o===null?"":`:${o}`;r.config.emulator={url:`${a}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MA()}function Gy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function LA(e){const t=Gy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:bp(r.substr(a.length+1))}}else{const[a,s]=r.split(":");return{host:a,port:bp(s)}}}function bp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function MA(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Yy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(t){return Kt("not implemented")}_linkToIdToken(t,n){return Kt("not implemented")}_getReauthenticationResolver(t){return Kt("not implemented")}}/**
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
 */async function ri(e,t){return Dy(e,"POST","/v1/accounts:signInWithIdp",Qo(e,t))}/**
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
 */const FA="http://localhost";class xr extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Dd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new xr(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return ri(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ri(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ri(t,n)}buildRequest(){const t={requestUri:FA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Fa(n)}return t}}/**
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
 */class zd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ba extends zd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Ba{constructor(){super("facebook.com")}static credential(t){return xr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xr._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class bn extends Ba{constructor(){super("github.com")}static credential(t){return xr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class kn extends Ba{constructor(){super("twitter.com")}static credential(t,n){return xr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function Ql(e,t){return Dy(e,"POST","/v1/accounts:signUp",Qo(e,t))}/**
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
 */class wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await cr._fromIdTokenResponse(t,r,i),s=kp(r);return new wr({user:a,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=kp(r);return new wr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function kp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class vo extends Lt{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vo(t,n,r,i)}}function qy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(e,a,t,r):a})}async function UA(e,t,n=!1){const r=await Na(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wr._forOperation(e,"link",r)}/**
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
 */async function zA(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await Na(e,qy(r,i,t,e),n);H(a.idToken,r,"internal-error");const s=Fd(a.idToken);H(s,r,"internal-error");const{sub:o}=s;return H(e.uid===o,r,"user-mismatch"),wr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),a}}/**
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
 */async function BA(e,t,n=!1){const r="signIn",i=await qy(e,r,t),a=await wr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}/**
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
 */async function $A(e){const t=_r(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function HA(e,t,n){var r;const i=_r(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await wp(i,a,"signUpPassword");s=Ql(i,u)}else s=Ql(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await wp(i,a,"signUpPassword");return Ql(i,d)}throw u});const o=await s.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$A(e),u}),l=await wr._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function WA(e,t,n,r){return Kn(e).onIdTokenChanged(t,n,r)}function VA(e,t,n){return Kn(e).beforeAuthStateChanged(t,n)}const yo="__sak";/**
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
 */class Jy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KA(){const e=Ue();return Ud(e)||Go(e)}const QA=1e3,GA=10;class Xy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KA()&&bA(),this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,o,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},a=this.storage.getItem(r);wA()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,GA):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xy.type="LOCAL";const YA=Xy;/**
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
 */class Zy extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zy.type="SESSION";const e0=Zy;/**
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
 */function qA(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Yo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(s).map(async u=>u(n.origin,a)),l=await qA(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function Bd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class JA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((o,l)=>{const u=Bd("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(m.data.response);break;default:clearTimeout(d),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Rt(){return window}function XA(e){Rt().location.href=e}/**
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
 */function t0(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function ZA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function t_(){return t0()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",n_=1,xo="firebaseLocalStorage",r0="fbase_key";class $a{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([xo],t?"readwrite":"readonly").objectStore(xo)}function r_(){const e=indexedDB.deleteDatabase(n0);return new $a(e).toPromise()}function yu(){const e=indexedDB.open(n0,n_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(xo,{keyPath:r0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(xo)?t(r):(r.close(),await r_(),t(await yu()))})})}async function Ep(e,t,n){const r=qo(e,!0).put({[r0]:t,value:n});return new $a(r).toPromise()}async function i_(e,t){const n=qo(e,!1).get(t),r=await new $a(n).toPromise();return r===void 0?null:r.value}function Sp(e,t){const n=qo(e,!0).delete(t);return new $a(n).toPromise()}const a_=800,s_=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>s_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(t_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||e_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yu();return await Ep(t,yo,"1"),await Sp(t,yo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>i_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=qo(i,!1).getAll();return new $a(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const o_=i0;new za(3e4,6e4);/**
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
 */function a0(e,t){return t?Qt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class $d extends Yy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ri(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ri(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ri(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function l_(e){return BA(e.auth,new $d(e),e.bypassAuthState)}function c_(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),zA(n,new $d(e),e.bypassAuthState)}async function u_(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),UA(n,new $d(e),e.bypassAuthState)}/**
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
 */class s0{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:s,type:o}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return l_;case"linkViaPopup":case"linkViaRedirect":return u_;case"reauthViaPopup":case"reauthViaRedirect":return c_;default:Dt(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const d_=new za(2e3,1e4);async function f_(e,t,n){const r=_r(e);tA(e,t,zd);const i=a0(r,n);return new ar(r,"signInViaPopup",t,i).executeNotNull()}class ar extends s0{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const t=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,d_.get())};t()}}ar.currentPopupAction=null;/**
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
 */const h_="pendingRedirect",Ds=new Map;class p_ extends s0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ds.get(this.auth._key());if(!t){try{const r=await m_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ds.set(this.auth._key(),t)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m_(e,t){const n=y_(t),r=v_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function g_(e,t){Ds.set(e._key(),t)}function v_(e){return Qt(e._redirectPersistence)}function y_(e){return Os(h_,e.config.apiKey,e.name)}async function x_(e,t,n=!1){const r=_r(e),i=a0(r,t),s=await new p_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const w_=10*60*1e3;class b_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!k_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!o0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=w_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ap(t))}saveEventToCache(t){this.cachedEventUids.add(Ap(t)),this.lastProcessedEventTime=Date.now()}}function Ap(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function o0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function k_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(e);default:return!1}}/**
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
 */async function E_(e,t={}){return wi(e,"GET","/v1/projects",t)}/**
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
 */const S_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A_=/^https?/;async function __(e){if(e.config.emulator)return;const{authorizedDomains:t}=await E_(e);for(const n of t)try{if(N_(n))return}catch{}Dt(e,"unauthorized-domain")}function N_(e){const t=vu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!A_.test(n))return!1;if(S_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const I_=new za(3e4,6e4);function _p(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function C_(e){return new Promise((t,n)=>{var r,i,a;function s(){_p(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(jt(e,"network-request-failed"))},timeout:I_.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Rt().gapi)===null||a===void 0)&&a.load)s();else{const o=IA("iframefcb");return Rt()[o]=()=>{gapi.load?s():n(jt(e,"network-request-failed"))},Qy(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Ls=null,t})}let Ls=null;function T_(e){return Ls=Ls||C_(e),Ls}/**
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
 */const P_=new za(5e3,15e3),j_="__/auth/iframe",R_="emulator/auth/iframe",O_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L_(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Md(t,R_):`https://${e.config.authDomain}/${j_}`,r={apiKey:t.apiKey,appName:e.name,v:Ua},i=D_.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Fa(r).slice(1)}`}async function M_(e){const t=await T_(e),n=Rt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:L_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O_,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const s=jt(e,"network-request-failed"),o=Rt().setTimeout(()=>{a(s)},P_.get());function l(){Rt().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{a(s)})}))}/**
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
 */const F_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U_=500,z_=600,B_="_blank",$_="http://localhost";class Np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H_(e,t,n,r=U_,i=z_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},F_),{width:r.toString(),height:i.toString(),top:a,left:s}),u=Ue().toLowerCase();n&&(o=zy(u)?B_:n),Uy(u)&&(t=t||$_,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,x])=>`${m}${y}=${x},`,"");if(xA(u)&&o!=="_self")return W_(t||"",o),new Np(null);const f=window.open(t||"",o,d);H(f,e,"popup-blocked");try{f.focus()}catch{}return new Np(f)}function W_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const V_="__/auth/handler",K_="emulator/auth/handler",Q_=encodeURIComponent("fac");async function Ip(e,t,n,r,i,a){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ua,eventId:i};if(t instanceof zd){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",UE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(a||{}))s[d]=f}if(t instanceof Ba){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await e._getAppCheckToken(),u=l?`#${Q_}=${encodeURIComponent(l)}`:"";return`${G_(e)}?${Fa(o).slice(1)}${u}`}function G_({config:e}){return e.emulator?Md(e,K_):`https://${e.authDomain}/${V_}`}/**
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
 */const Gl="webStorageSupport";class Y_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=x_,this._overrideRedirectResult=g_}async _openPopup(t,n,r,i){var a;an((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Ip(t,n,r,vu(),i);return H_(t,s,Bd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await Ip(t,n,r,vu(),i);return XA(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(an(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await M_(t),r=new b_(t);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gl,{type:Gl},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Gl];s!==void 0&&n(!!s),Dt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=__(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vy()||Ud()||Go()}}const q_=Y_;var Cp="@firebase/auth",Tp="1.3.0";/**
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
 */class J_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function X_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Z_(e){rn(new Ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;H(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(e)},u=new _A(r,i,a,l);return OA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),rn(new Ot("auth-internal",t=>{const n=_r(t.getProvider("auth").getImmediate());return(r=>new J_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Cp,Tp,X_(e)),Pt(Cp,Tp,"esm2017")}/**
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
 */const eN=5*60,tN=wy("authIdTokenMaxAge")||eN;let Pp=null;const nN=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tN)return;const i=n==null?void 0:n.token;Pp!==i&&(Pp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rN(e=Ny()){const t=xi(e,"auth");if(t.isInitialized())return t.getImmediate();const n=RA(e,{popupRedirectResolver:q_,persistence:[o_,YA,e0]}),r=wy("authTokenSyncURL");if(r){const a=nN(r);VA(n,a,()=>a(n.currentUser)),WA(n,s=>a(s))}const i=TE("auth");return i&&DA(n,`http://${i}`),n}Z_("Browser");var iN="firebase",aN="10.4.0";/**
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
 */Pt(iN,aN,"app");const sN=(e,t)=>t.some(n=>e instanceof n);let jp,Rp;function oN(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lN(){return Rp||(Rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l0=new WeakMap,xu=new WeakMap,c0=new WeakMap,Yl=new WeakMap,Hd=new WeakMap;function cN(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(Ln(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&l0.set(n,e)}).catch(()=>{}),Hd.set(t,e),t}function uN(e){if(xu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});xu.set(e,t)}let wu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||c0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dN(e){wu=e(wu)}function fN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ql(this),t,...n);return c0.set(r,t.sort?t.sort():[t]),Ln(r)}:lN().includes(e)?function(...t){return e.apply(ql(this),t),Ln(l0.get(this))}:function(...t){return Ln(e.apply(ql(this),t))}}function hN(e){return typeof e=="function"?fN(e):(e instanceof IDBTransaction&&uN(e),sN(e,oN())?new Proxy(e,wu):e)}function Ln(e){if(e instanceof IDBRequest)return cN(e);if(Yl.has(e))return Yl.get(e);const t=hN(e);return t!==e&&(Yl.set(e,t),Hd.set(t,e)),t}const ql=e=>Hd.get(e);function pN(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=Ln(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ln(s.result),l.oldVersion,l.newVersion,Ln(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const mN=["get","getKey","getAll","getAllKeys","count"],gN=["put","add","delete","clear"],Jl=new Map;function Op(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jl.get(t))return Jl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mN.includes(n)))return;const a=async function(s,...o){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&l.done]))[0]};return Jl.set(t,a),a}dN(e=>({...e,get:(t,n,r)=>Op(t,n)||e.get(t,n,r),has:(t,n)=>!!Op(t,n)||e.has(t,n)}));const u0="@firebase/installations",Wd="0.6.4";/**
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
 */const d0=1e4,f0=`w:${Wd}`,h0="FIS_v2",vN="https://firebaseinstallations.googleapis.com/v1",yN=60*60*1e3,xN="installations",wN="Installations";/**
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
 */const bN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},br=new Ar(xN,wN,bN);function p0(e){return e instanceof Lt&&e.code.includes("request-failed")}/**
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
 */function m0({projectId:e}){return`${vN}/projects/${e}/installations`}function g0(e){return{token:e.token,requestStatus:2,expiresIn:EN(e.expiresIn),creationTime:Date.now()}}async function v0(e,t){const r=(await t.json()).error;return br.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function y0({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kN(e,{refreshToken:t}){const n=y0(e);return n.append("Authorization",SN(t)),n}async function x0(e){const t=await e();return t.status>=500&&t.status<600?e():t}function EN(e){return Number(e.replace("s","000"))}function SN(e){return`${h0} ${e}`}/**
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
 */async function AN({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=m0(e),i=y0(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:h0,appId:e.appId,sdkVersion:f0},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await x0(()=>fetch(r,o));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:g0(u.authToken)}}else throw await v0("Create Installation",l)}/**
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
 */function w0(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function _N(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const NN=/^[cdef][\w-]{21}$/,bu="";function IN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=CN(e);return NN.test(n)?n:bu}catch{return bu}}function CN(e){return _N(e).substr(0,22)}/**
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
 */function Jo(e){return`${e.appName}!${e.appId}`}/**
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
 */const b0=new Map;function k0(e,t){const n=Jo(e);E0(n,t),TN(n,t)}function E0(e,t){const n=b0.get(e);if(n)for(const r of n)r(t)}function TN(e,t){const n=PN();n&&n.postMessage({key:e,fid:t}),jN()}let sr=null;function PN(){return!sr&&"BroadcastChannel"in self&&(sr=new BroadcastChannel("[Firebase] FID Change"),sr.onmessage=e=>{E0(e.data.key,e.data.fid)}),sr}function jN(){b0.size===0&&sr&&(sr.close(),sr=null)}/**
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
 */const RN="firebase-installations-database",ON=1,kr="firebase-installations-store";let Xl=null;function Vd(){return Xl||(Xl=pN(RN,ON,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(kr)}}})),Xl}async function wo(e,t){const n=Jo(e),i=(await Vd()).transaction(kr,"readwrite"),a=i.objectStore(kr),s=await a.get(n);return await a.put(t,n),await i.done,(!s||s.fid!==t.fid)&&k0(e,t.fid),t}async function S0(e){const t=Jo(e),r=(await Vd()).transaction(kr,"readwrite");await r.objectStore(kr).delete(t),await r.done}async function Xo(e,t){const n=Jo(e),i=(await Vd()).transaction(kr,"readwrite"),a=i.objectStore(kr),s=await a.get(n),o=t(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&k0(e,o.fid),o}/**
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
 */async function Kd(e){let t;const n=await Xo(e.appConfig,r=>{const i=DN(r),a=LN(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===bu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function DN(e){const t=e||{fid:IN(),registrationStatus:0};return A0(t)}function LN(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(br.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=MN(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:FN(e)}:{installationEntry:t}}async function MN(e,t){try{const n=await AN(e,t);return wo(e.appConfig,n)}catch(n){throw p0(n)&&n.customData.serverCode===409?await S0(e.appConfig):await wo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function FN(e){let t=await Dp(e.appConfig);for(;t.registrationStatus===1;)await w0(100),t=await Dp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kd(e);return r||n}return t}function Dp(e){return Xo(e,t=>{if(!t)throw br.create("installation-not-found");return A0(t)})}function A0(e){return UN(e)?{fid:e.fid,registrationStatus:0}:e}function UN(e){return e.registrationStatus===1&&e.registrationTime+d0<Date.now()}/**
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
 */async function zN({appConfig:e,heartbeatServiceProvider:t},n){const r=BN(e,n),i=kN(e,n),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:f0,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await x0(()=>fetch(r,o));if(l.ok){const u=await l.json();return g0(u)}else throw await v0("Generate Auth Token",l)}function BN(e,{fid:t}){return`${m0(e)}/${t}/authTokens:generate`}/**
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
 */async function Qd(e,t=!1){let n;const r=await Xo(e.appConfig,a=>{if(!_0(a))throw br.create("not-registered");const s=a.authToken;if(!t&&WN(s))return a;if(s.requestStatus===1)return n=$N(e,t),a;{if(!navigator.onLine)throw br.create("app-offline");const o=KN(a);return n=HN(e,o),o}});return n?await n:r.authToken}async function $N(e,t){let n=await Lp(e.appConfig);for(;n.authToken.requestStatus===1;)await w0(100),n=await Lp(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qd(e,t):r}function Lp(e){return Xo(e,t=>{if(!_0(t))throw br.create("not-registered");const n=t.authToken;return QN(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function HN(e,t){try{const n=await zN(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await wo(e.appConfig,r),n}catch(n){if(p0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await S0(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await wo(e.appConfig,r)}throw n}}function _0(e){return e!==void 0&&e.registrationStatus===2}function WN(e){return e.requestStatus===2&&!VN(e)}function VN(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yN}function KN(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function QN(e){return e.requestStatus===1&&e.requestTime+d0<Date.now()}/**
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
 */async function GN(e){const t=e,{installationEntry:n,registrationPromise:r}=await Kd(t);return r?r.catch(console.error):Qd(t).catch(console.error),n.fid}/**
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
 */async function YN(e,t=!1){const n=e;return await qN(n),(await Qd(n,t)).token}async function qN(e){const{registrationPromise:t}=await Kd(e);t&&await t}/**
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
 */function JN(e){if(!e||!e.options)throw Zl("App Configuration");if(!e.name)throw Zl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Zl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Zl(e){return br.create("missing-app-config-values",{valueName:e})}/**
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
 */const N0="installations",XN="installations-internal",ZN=e=>{const t=e.getProvider("app").getImmediate(),n=JN(t),r=xi(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eI=e=>{const t=e.getProvider("app").getImmediate(),n=xi(t,N0).getImmediate();return{getId:()=>GN(n),getToken:i=>YN(n,i)}};function tI(){rn(new Ot(N0,ZN,"PUBLIC")),rn(new Ot(XN,eI,"PRIVATE"))}tI();Pt(u0,Wd);Pt(u0,Wd,"esm2017");/**
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
 */const bo="analytics",nI="firebase_id",rI="origin",iI=60*1e3,aI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new Rd("@firebase/analytics");/**
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
 */const sI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new Ar("analytics","Analytics",sI);/**
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
 */function oI(e){if(!e.startsWith(Gd)){const t=et.create("invalid-gtag-resource",{gtagURL:e});return Ye.warn(t.message),""}return e}function I0(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function lI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function cI(e,t){const n=lI("firebase-js-sdk-policy",{createScriptURL:oI}),r=document.createElement("script"),i=`${Gd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dI(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const l=(await I0(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(o){Ye.error(o)}e("config",i,a)}async function fI(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await I0(n);for(const l of s){const u=o.find(f=>f.measurementId===l),d=u&&t[u.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){Ye.error(a)}}function hI(e,t,n,r){async function i(a,...s){try{if(a==="event"){const[o,l]=s;await fI(e,t,n,o,l)}else if(a==="config"){const[o,l]=s;await dI(e,t,n,r,o,l)}else if(a==="consent"){const[o]=s;e("consent","update",o)}else if(a==="get"){const[o,l,u]=s;e("get",o,l,u)}else if(a==="set"){const[o]=s;e("set",o)}else e(a,...s)}catch(o){Ye.error(o)}}return i}function pI(e,t,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=hI(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function mI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Gd)&&n.src.includes(e))return n;return null}/**
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
 */const gI=30,vI=1e3;class yI{constructor(t={},n=vI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const C0=new yI;function xI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:xI(r)},a=aI.replace("{app-id}",n),s=await fetch(a,i);if(s.status!==200&&s.status!==304){let o="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(o=l.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function bI(e,t=C0,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw et.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw et.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new SI;return setTimeout(async()=>{o.abort()},n!==void 0?n:iI),T0({appId:r,apiKey:i,measurementId:a},s,o,t)}async function T0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=C0){var a;const{appId:s,measurementId:o}=e;try{await kI(r,t)}catch(l){if(o)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await wI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!EI(u)){if(i.deleteThrottleMetadata(s),o)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw l}const d=Number((a=u==null?void 0:u.customData)===null||a===void 0?void 0:a.httpStatus)===503?sp(n,i.intervalMillis,gI):sp(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,f),Ye.debug(`Calling attemptFetch again in ${d} millis`),T0(e,f,r,i)}}function kI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function EI(e){if(!(e instanceof Lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class SI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function AI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,s=Object.assign(Object.assign({},r),{send_to:a});e("event",n,s)}}/**
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
 */async function _I(){if(ky())try{await Ey()}catch(e){return Ye.warn(et.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ye.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function NI(e,t,n,r,i,a,s){var o;const l=bI(e);l.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Ye.error(y)),t.push(l);const u=_I().then(y=>{if(y)return r.getId()}),[d,f]=await Promise.all([l,u]);mI(a)||cI(a,d.measurementId),i("js",new Date);const m=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return m[rI]="firebase",m.update=!0,f!=null&&(m[nI]=f),i("config",d.measurementId,m),d.measurementId}/**
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
 */class II{constructor(t){this.app=t}_delete(){return delete ea[this.app.options.appId],Promise.resolve()}}let ea={},Mp=[];const Fp={};let ec="dataLayer",CI="gtag",Up,P0,zp=!1;function TI(){const e=[];if(by()&&e.push("This is a browser extension environment."),DE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:t});Ye.warn(n.message)}}function PI(e,t,n){TI();const r=e.options.appId;if(!r)throw et.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(ea[r]!=null)throw et.create("already-exists",{id:r});if(!zp){uI(ec);const{wrappedGtag:a,gtagCore:s}=pI(ea,Mp,Fp,ec,CI);P0=a,Up=s,zp=!0}return ea[r]=NI(e,Mp,Fp,t,Up,ec,n),new II(e)}function jI(e=Ny()){e=Kn(e);const t=xi(e,bo);return t.isInitialized()?t.getImmediate():RI(e)}function RI(e,t={}){const n=xi(e,bo);if(n.isInitialized()){const i=n.getImmediate();if(Aa(t,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:t})}function OI(e,t,n,r){e=Kn(e),AI(P0,ea[e.app.options.appId],t,n,r).catch(i=>Ye.error(i))}const Bp="@firebase/analytics",$p="0.10.0";function DI(){rn(new Ot(bo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return PI(r,i,n)},"PUBLIC")),rn(new Ot("analytics-internal",e,"PRIVATE")),Pt(Bp,$p),Pt(Bp,$p,"esm2017");function e(t){try{const n=t.getProvider(bo).getImmediate();return{logEvent:(r,i,a)=>OI(n,r,i,a)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}DI();const LI={apiKey:"AIzaSyB_CgWVN-MMzUQhlKJ5wHTqNZ6z6UORLqg",authDomain:"shoping-mall-66243.firebaseapp.com",projectId:"shoping-mall-66243",storageBucket:"shoping-mall-66243.appspot.com",messagingSenderId:"186177944494",appId:"1:186177944494:web:6bf4555418f33b353f663f",measurementId:"G-VNTFY5S232"},j0=_y(LI);jI(j0);const Hp=rN(j0),MI=()=>{const[e,t]=T.useState(""),n=i=>{t(" "),i.preventDefault();const a=i.target,s=a.email.value,o=a.password.value;console.log(s,o),HA(Hp,s,o).then(l=>{const u=l.user;console.log(u),alert("Thank you for your interest,, We will reply very soon"),a.reset()}).catch(l=>{console.log(l.message)});//! google
},r=()=>{const i=new Ht;f_(Hp,i).then(a=>{const s=a.user;console.log(s),alert("Thank you for your interest,, We will reply very soon")}).catch(a=>{console.log(a.message)})};return c.jsx("div",{className:" flex items-center justify-center bg-gray-100",children:c.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-96",children:[c.jsx("h2",{className:"text-2xl text-black font-semibold mb-4",children:"Contact Us"}),c.jsxs("form",{onSubmit:n,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-black",children:"Name"}),c.jsx("input",{type:"text",id:"name",name:"name",className:"mt-1 bg-white p-2 w-full border rounded-md",placeholder:"Your Name"})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-black",children:"Email"}),c.jsx("input",{type:"email",id:"email",name:"email",className:"mt-1 bg-white p-2 w-full border rounded-md",placeholder:"you@example.com"})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-black",children:"Password"}),c.jsx("input",{id:"password",type:"password",name:"password",className:"mt-1 bg-white p-2 w-full border rounded-md",placeholder:"Password"})]}),c.jsxs(Q,{onClick:r,className:"text-red-500",children:["Log in with ",c.jsx("span",{children:"Google"})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("button",{type:"submit",className:"px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-600",children:"Submit"}),c.jsx("p",{className:"text-1xl text-green-700",children:e})]})]})]})})},FI=()=>c.jsxs("div",{children:[c.jsxs("section",{className:"hero bg-white h-[45vh] flex  w-[100%] flex-col justify-center items-center text-center",children:[c.jsx("h2",{className:"text-white text-6xl mb-5 font-bold",children:"#KnowUs"}),c.jsx("p",{className:"text-white text2xl font-semibold",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),c.jsx(MI,{})]}),UI=Pb([{path:"/",element:c.jsx(V2,{}),children:[{path:"/",element:c.jsx(rE,{})},{path:"/shop",element:c.jsx(sE,{})},{path:"/blogs",element:c.jsx(mE,{})},{path:"/about",element:c.jsx(kE,{})},{path:"/contact",element:c.jsx(FI,{})}]}]);tc.createRoot(document.getElementById("root")).render(c.jsx(Eo.StrictMode,{children:c.jsx(kb,{router:UI})}));
