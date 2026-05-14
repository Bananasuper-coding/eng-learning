function Sg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wf={exports:{}},Gs={},kf={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),Eg=Symbol.for("react.portal"),Tg=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Pg=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),Ag=Symbol.for("react.suspense"),Mg=Symbol.for("react.memo"),Rg=Symbol.for("react.lazy"),Ku=Symbol.iterator;function Lg(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var Sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,Tf={};function pr(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Sf}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cf(){}Cf.prototype=pr.prototype;function jl(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||Sf}var Nl=jl.prototype=new Cf;Nl.constructor=jl;Ef(Nl,pr.prototype);Nl.isPureReactComponent=!0;var Yu=Array.isArray,Pf=Object.prototype.hasOwnProperty,Il={current:null},jf={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Pf.call(t,r)&&!jf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xi,type:e,key:s,ref:o,props:i,_owner:Il.current}}function bg(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Al(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function Dg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qu=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dg(""+e.key):t.toString(36)}function qi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case Eg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+To(o,0):r,Yu(i)?(n="",e!=null&&(n=e.replace(Qu,"$&/")+"/"),qi(i,t,n,"",function(u){return u})):i!=null&&(Al(i)&&(i=bg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Yu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+To(s,a);o+=qi(s,t,n,l,i)}else if(l=Lg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+To(s,a++),o+=qi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ai(e,t,n){if(e==null)return e;var r=[],i=0;return qi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Vg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Zi={transition:null},Og={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Zi,ReactCurrentOwner:Il};function If(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ai,forEach:function(e,t,n){Ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!Al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=pr;z.Fragment=Tg;z.Profiler=Pg;z.PureComponent=jl;z.StrictMode=Cg;z.Suspense=Ag;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og;z.act=If;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ef({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Il.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Pf.call(t,l)&&!jf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xi,type:e.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:Ng,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jg,_context:e},e.Consumer=e};z.createElement=Nf;z.createFactory=function(e){var t=Nf.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Ig,render:e}};z.isValidElement=Al;z.lazy=function(e){return{$$typeof:Rg,_payload:{_status:-1,_result:e},_init:Vg}};z.memo=function(e,t){return{$$typeof:Mg,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Zi.transition;Zi.transition={};try{e()}finally{Zi.transition=t}};z.unstable_act=If;z.useCallback=function(e,t){return Ee.current.useCallback(e,t)};z.useContext=function(e){return Ee.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ee.current.useEffect(e,t)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ee.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};z.useRef=function(e){return Ee.current.useRef(e)};z.useState=function(e){return Ee.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.3.1";kf.exports=z;var k=kf.exports;const wi=xf(k),_g=Sg({__proto__:null,default:wi},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg=k,Fg=Symbol.for("react.element"),Bg=Symbol.for("react.fragment"),Ug=Object.prototype.hasOwnProperty,Wg=zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$g={key:!0,ref:!0,__self:!0,__source:!0};function Af(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ug.call(t,r)&&!$g.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fg,type:e,key:s,ref:o,props:i,_owner:Wg.current}}Gs.Fragment=Bg;Gs.jsx=Af;Gs.jsxs=Af;wf.exports=Gs;var c=wf.exports,ma={},Mf={exports:{}},Oe={},Rf={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,V){var _=A.length;A.push(V);e:for(;0<_;){var O=_-1>>>1,Q=A[O];if(0<i(Q,V))A[O]=V,A[_]=Q,_=O;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],_=A.pop();if(_!==V){A[0]=_;e:for(var O=0,Q=A.length,tn=Q>>>1;O<tn;){var tt=2*(O+1)-1,Mn=A[tt],Me=tt+1,nn=A[Me];if(0>i(Mn,_))Me<Q&&0>i(nn,Mn)?(A[O]=nn,A[Me]=_,O=Me):(A[O]=Mn,A[tt]=_,O=tt);else if(Me<Q&&0>i(nn,_))A[O]=nn,A[Me]=_,O=Me;else break e}}return V}function i(A,V){var _=A.sortIndex-V.sortIndex;return _!==0?_:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,g=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function w(A){if(x=!1,p(A),!v)if(n(l)!==null)v=!0,re(T);else{var V=n(u);V!==null&&ze(w,V.startTime-A)}}function T(A,V){v=!1,x&&(x=!1,y(E),E=-1),g=!0;var _=h;try{for(p(V),f=n(l);f!==null&&(!(f.expirationTime>V)||A&&!L());){var O=f.callback;if(typeof O=="function"){f.callback=null,h=f.priorityLevel;var Q=O(f.expirationTime<=V);V=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&r(l),p(V)}else r(l);f=n(l)}if(f!==null)var tn=!0;else{var tt=n(u);tt!==null&&ze(w,tt.startTime-V),tn=!1}return tn}finally{f=null,h=_,g=!1}}var j=!1,C=null,E=-1,I=5,P=-1;function L(){return!(e.unstable_now()-P<I)}function B(){if(C!==null){var A=e.unstable_now();P=A;var V=!0;try{V=C(!0,A)}finally{V?b():(j=!1,C=null)}}else j=!1}var b;if(typeof m=="function")b=function(){m(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Pt=$.port2;$.port1.onmessage=B,b=function(){Pt.postMessage(null)}}else b=function(){S(B,0)};function re(A){C=A,j||(j=!0,b())}function ze(A,V){E=S(function(){A(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,re(T))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var _=h;h=V;try{return A()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var _=h;h=A;try{return V()}finally{h=_}},e.unstable_scheduleCallback=function(A,V,_){var O=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?O+_:O):_=O,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=_+Q,A={id:d++,callback:V,priorityLevel:A,startTime:_,expirationTime:Q,sortIndex:-1},_>O?(A.sortIndex=_,t(u,A),n(l)===null&&A===n(u)&&(x?(y(E),E=-1):x=!0,ze(w,_-O))):(A.sortIndex=Q,t(l,A),v||g||(v=!0,re(T))),A},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(A){var V=h;return function(){var _=h;h=V;try{return A.apply(this,arguments)}finally{h=_}}}})(Lf);Rf.exports=Lf;var Hg=Rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg=k,De=Hg;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bf=new Set,Yr={};function Tn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)bf.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,Kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},qu={};function Yg(e){return pa.call(qu,e)?!0:pa.call(Xu,e)?!1:Kg.test(e)?qu[e]=!0:(Xu[e]=!0,!1)}function Qg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xg(e,t,n,r){if(t===null||typeof t>"u"||Qg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,Rl);me[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,Rl);me[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,Rl);me[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xg(t,n,i,r)&&(n=null),r||i===null?Yg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Of=Symbol.for("react.offscreen"),Zu=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Co;function Ar(e){if(Co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Co=t&&t[1]||""}return`
`+Co+e}var Po=!1;function jo(e,t){if(!e||Po)return"";Po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function qg(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Ln:return"Portal";case ga:return"Profiler";case bl:return"StrictMode";case ya:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vf:return(e.displayName||"Context")+".Consumer";case Df:return(e._context.displayName||"Context")+".Provider";case Dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:xa(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return xa(e(t))}catch{}}return null}function Zg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(t);case 8:return t===bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jg(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){e._valueTracker||(e._valueTracker=Jg(e))}function zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ju(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ff(e,t){t=t.checked,t!=null&&Ll(e,"checked",t,!1)}function ka(e,t){Ff(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sa(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ec(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sa(e,t,n){(t!=="number"||ds(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Mr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Bf(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ey=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){ey.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function $f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Hf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ty=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(e,t){if(t){if(ty[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,qn=null,Zn=null;function rc(e){if(e=Ei(e)){if(typeof Na!="function")throw Error(N(280));var t=e.stateNode;t&&(t=qs(t),Na(e.stateNode,e.type,t))}}function Gf(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function Kf(){if(qn){var e=qn,t=Zn;if(Zn=qn=null,rc(e),t)for(e=0;e<t.length;e++)rc(t[e])}}function Yf(e,t){return e(t)}function Qf(){}var No=!1;function Xf(e,t,n){if(No)return e(t,n);No=!0;try{return Yf(e,t,n)}finally{No=!1,(qn!==null||Zn!==null)&&(Qf(),Kf())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=qs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ia=!1;if(yt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ia=!1}function ny(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vr=!1,fs=null,hs=!1,Aa=null,ry={onError:function(e){Vr=!0,fs=e}};function iy(e,t,n,r,i,s,o,a,l){Vr=!1,fs=null,ny.apply(ry,arguments)}function sy(e,t,n,r,i,s,o,a,l){if(iy.apply(this,arguments),Vr){if(Vr){var u=fs;Vr=!1,fs=null}else throw Error(N(198));hs||(hs=!0,Aa=u)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ic(e){if(Cn(e)!==e)throw Error(N(188))}function oy(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ic(i),e;if(s===r)return ic(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Zf(e){return e=oy(e),e!==null?Jf(e):null}function Jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jf(e);if(t!==null)return t;e=e.sibling}return null}var eh=De.unstable_scheduleCallback,sc=De.unstable_cancelCallback,ay=De.unstable_shouldYield,ly=De.unstable_requestPaint,ie=De.unstable_now,uy=De.unstable_getCurrentPriorityLevel,_l=De.unstable_ImmediatePriority,th=De.unstable_UserBlockingPriority,ms=De.unstable_NormalPriority,cy=De.unstable_LowPriority,nh=De.unstable_IdlePriority,Ks=null,ot=null;function dy(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ks,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:my,fy=Math.log,hy=Math.LN2;function my(e){return e>>>=0,e===0?32:31-(fy(e)/hy|0)|0}var bi=64,Di=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Rr(a):(s&=o,s!==0&&(r=Rr(s)))}else o=n&~i,o!==0?r=Rr(o):s!==0&&(r=Rr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function py(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ze(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=py(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rh(){var e=bi;return bi<<=1,!(bi&4194240)&&(bi=64),e}function Io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function yy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sh,Fl,oh,ah,lh,Ra=!1,Vi=[],Ot=null,_t=null,zt=null,qr=new Map,Zr=new Map,Rt=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function kr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ei(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xy(e,t,n,r,i){switch(t){case"focusin":return Ot=kr(Ot,e,t,n,r,i),!0;case"dragenter":return _t=kr(_t,e,t,n,r,i),!0;case"mouseover":return zt=kr(zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qr.set(s,kr(qr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zr.set(s,kr(Zr.get(s)||null,e,t,n,r,i)),!0}return!1}function uh(e){var t=fn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=qf(n),t!==null){e.blockedOn=t,lh(e.priority,function(){oh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=La(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ja=r,n.target.dispatchEvent(r),ja=null}else return t=Ei(n),t!==null&&Fl(t),e.blockedOn=n,!1;t.shift()}return!0}function ac(e,t,n){Ji(e)&&n.delete(t)}function wy(){Ra=!1,Ot!==null&&Ji(Ot)&&(Ot=null),_t!==null&&Ji(_t)&&(_t=null),zt!==null&&Ji(zt)&&(zt=null),qr.forEach(ac),Zr.forEach(ac)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,wy)))}function Jr(e){function t(i){return Sr(i,e)}if(0<Vi.length){Sr(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&Sr(Ot,e),_t!==null&&Sr(_t,e),zt!==null&&Sr(zt,e),qr.forEach(t),Zr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)uh(n),n.blockedOn===null&&Rt.shift()}var Jn=St.ReactCurrentBatchConfig,gs=!0;function ky(e,t,n,r){var i=W,s=Jn.transition;Jn.transition=null;try{W=1,Bl(e,t,n,r)}finally{W=i,Jn.transition=s}}function Sy(e,t,n,r){var i=W,s=Jn.transition;Jn.transition=null;try{W=4,Bl(e,t,n,r)}finally{W=i,Jn.transition=s}}function Bl(e,t,n,r){if(gs){var i=La(e,t,n,r);if(i===null)zo(e,t,r,ys,n),oc(e,r);else if(xy(i,e,t,n,r))r.stopPropagation();else if(oc(e,r),t&4&&-1<vy.indexOf(e)){for(;i!==null;){var s=Ei(i);if(s!==null&&sh(s),s=La(e,t,n,r),s===null&&zo(e,t,r,ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zo(e,t,r,null,n)}}var ys=null;function La(e,t,n,r){if(ys=null,e=Ol(r),e=fn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ys=e,null}function ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uy()){case _l:return 1;case th:return 4;case ms:case cy:return 16;case nh:return 536870912;default:return 16}default:return 16}}var bt=null,Ul=null,es=null;function dh(){if(es)return es;var e,t=Ul,n=t.length,r,i="value"in bt?bt.value:bt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return es=i.slice(e,1<r?1-r:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function lc(){return!1}function _e(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oi:lc,this.isPropagationStopped=lc,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=_e(gr),Si=te({},gr,{view:0,detail:0}),Ey=_e(Si),Ao,Mo,Er,Ys=te({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Ao=e.screenX-Er.screenX,Mo=e.screenY-Er.screenY):Mo=Ao=0,Er=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),uc=_e(Ys),Ty=te({},Ys,{dataTransfer:0}),Cy=_e(Ty),Py=te({},Si,{relatedTarget:0}),Ro=_e(Py),jy=te({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=_e(jy),Iy=te({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ay=_e(Iy),My=te({},gr,{data:0}),cc=_e(My),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=by[e])?!!t[e]:!1}function $l(){return Dy}var Vy=te({},Si,{key:function(e){if(e.key){var t=Ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oy=_e(Vy),_y=te({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dc=_e(_y),zy=te({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Fy=_e(zy),By=te({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=_e(By),Wy=te({},Ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=_e(Wy),Hy=[9,13,27,32],Hl=yt&&"CompositionEvent"in window,Or=null;yt&&"documentMode"in document&&(Or=document.documentMode);var Gy=yt&&"TextEvent"in window&&!Or,fh=yt&&(!Hl||Or&&8<Or&&11>=Or),fc=" ",hc=!1;function hh(e,t){switch(e){case"keyup":return Hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Ky(e,t){switch(e){case"compositionend":return mh(t);case"keypress":return t.which!==32?null:(hc=!0,fc);case"textInput":return e=t.data,e===fc&&hc?null:e;default:return null}}function Yy(e,t){if(Dn)return e==="compositionend"||!Hl&&hh(e,t)?(e=dh(),es=Ul=bt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fh&&t.locale!=="ko"?null:t.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qy[e.type]:t==="textarea"}function ph(e,t,n,r){Gf(r),t=vs(t,"onChange"),0<t.length&&(n=new Wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,ei=null;function Xy(e){Ph(e,0)}function Qs(e){var t=_n(e);if(zf(t))return e}function qy(e,t){if(e==="change")return t}var gh=!1;if(yt){var Lo;if(yt){var bo="oninput"in document;if(!bo){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),bo=typeof pc.oninput=="function"}Lo=bo}else Lo=!1;gh=Lo&&(!document.documentMode||9<document.documentMode)}function gc(){_r&&(_r.detachEvent("onpropertychange",yh),ei=_r=null)}function yh(e){if(e.propertyName==="value"&&Qs(ei)){var t=[];ph(t,ei,e,Ol(e)),Xf(Xy,t)}}function Zy(e,t,n){e==="focusin"?(gc(),_r=t,ei=n,_r.attachEvent("onpropertychange",yh)):e==="focusout"&&gc()}function Jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(ei)}function e0(e,t){if(e==="click")return Qs(t)}function t0(e,t){if(e==="input"||e==="change")return Qs(t)}function n0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:n0;function ti(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pa.call(t,i)||!et(e[i],t[i]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xh(){for(var e=window,t=ds();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ds(e.document)}return t}function Gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r0(e){var t=xh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vh(n.ownerDocument.documentElement,n)){if(r!==null&&Gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=vc(n,s);var o=vc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i0=yt&&"documentMode"in document&&11>=document.documentMode,Vn=null,ba=null,zr=null,Da=!1;function xc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Da||Vn==null||Vn!==ds(r)||(r=Vn,"selectionStart"in r&&Gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&ti(zr,r)||(zr=r,r=vs(ba,"onSelect"),0<r.length&&(t=new Wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Do={},wh={};yt&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Xs(e){if(Do[e])return Do[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wh)return Do[e]=t[n];return e}var kh=Xs("animationend"),Sh=Xs("animationiteration"),Eh=Xs("animationstart"),Th=Xs("transitionend"),Ch=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Ch.set(e,t),Tn(t,[e])}for(var Vo=0;Vo<wc.length;Vo++){var Oo=wc[Vo],s0=Oo.toLowerCase(),o0=Oo[0].toUpperCase()+Oo.slice(1);qt(s0,"on"+o0)}qt(kh,"onAnimationEnd");qt(Sh,"onAnimationIteration");qt(Eh,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Th,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sy(r,t,void 0,e),e.currentTarget=null}function Ph(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;kc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;kc(i,a,u),s=l}}}if(hs)throw e=Aa,hs=!1,Aa=null,e}function K(e,t){var n=t[Fa];n===void 0&&(n=t[Fa]=new Set);var r=e+"__bubble";n.has(r)||(jh(t,e,2,!1),n.add(r))}function _o(e,t,n){var r=0;t&&(r|=4),jh(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[zi]){e[zi]=!0,bf.forEach(function(n){n!=="selectionchange"&&(a0.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,_o("selectionchange",!1,t))}}function jh(e,t,n,r){switch(ch(t)){case 1:var i=ky;break;case 4:i=Sy;break;default:i=Bl}n=i.bind(null,t,n,e),i=void 0,!Ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xf(function(){var u=s,d=Ol(n),f=[];e:{var h=Ch.get(e);if(h!==void 0){var g=Wl,v=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":g=Oy;break;case"focusin":v="focus",g=Ro;break;case"focusout":v="blur",g=Ro;break;case"beforeblur":case"afterblur":g=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Fy;break;case kh:case Sh:case Eh:g=Ny;break;case Th:g=Uy;break;case"scroll":g=Ey;break;case"wheel":g=$y;break;case"copy":case"cut":case"paste":g=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dc}var x=(t&4)!==0,S=!x&&e==="scroll",y=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,p;m!==null;){p=m;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,y!==null&&(w=Xr(m,y),w!=null&&x.push(ri(m,w,p)))),S)break;m=m.return}0<x.length&&(h=new g(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ja&&(v=n.relatedTarget||n.fromElement)&&(fn(v)||v[vt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?fn(v):null,v!==null&&(S=Cn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=uc,w="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=dc,w="onPointerLeave",y="onPointerEnter",m="pointer"),S=g==null?h:_n(g),p=v==null?h:_n(v),h=new x(w,m+"leave",g,n,d),h.target=S,h.relatedTarget=p,w=null,fn(d)===u&&(x=new x(y,m+"enter",v,n,d),x.target=p,x.relatedTarget=S,w=x),S=w,g&&v)t:{for(x=g,y=v,m=0,p=x;p;p=Rn(p))m++;for(p=0,w=y;w;w=Rn(w))p++;for(;0<m-p;)x=Rn(x),m--;for(;0<p-m;)y=Rn(y),p--;for(;m--;){if(x===y||y!==null&&x===y.alternate)break t;x=Rn(x),y=Rn(y)}x=null}else x=null;g!==null&&Sc(f,h,g,x,!1),v!==null&&S!==null&&Sc(f,S,v,x,!0)}}e:{if(h=u?_n(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=qy;else if(mc(h))if(gh)T=t0;else{T=Jy;var j=Zy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=e0);if(T&&(T=T(e,u))){ph(f,T,n,d);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&Sa(h,"number",h.value)}switch(j=u?_n(u):window,e){case"focusin":(mc(j)||j.contentEditable==="true")&&(Vn=j,ba=u,zr=null);break;case"focusout":zr=ba=Vn=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,xc(f,n,d);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":xc(f,n,d)}var C;if(Hl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Dn?hh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(fh&&n.locale!=="ko"&&(Dn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Dn&&(C=dh()):(bt=d,Ul="value"in bt?bt.value:bt.textContent,Dn=!0)),j=vs(u,E),0<j.length&&(E=new cc(E,e,null,n,d),f.push({event:E,listeners:j}),C?E.data=C:(C=mh(n),C!==null&&(E.data=C)))),(C=Gy?Ky(e,n):Yy(e,n))&&(u=vs(u,"onBeforeInput"),0<u.length&&(d=new cc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Ph(f,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xr(e,n),s!=null&&r.unshift(ri(e,s,i)),s=Xr(e,t),s!=null&&r.push(ri(e,s,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xr(n,s),l!=null&&o.unshift(ri(n,l,a))):i||(l=Xr(n,s),l!=null&&o.push(ri(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var l0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Ec(e){return(typeof e=="string"?e:""+e).replace(l0,`
`).replace(u0,"")}function Fi(e,t,n){if(t=Ec(t),Ec(e)!==t&&n)throw Error(N(425))}function xs(){}var Va=null,Oa=null;function _a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(f0)}:za;function f0(e){setTimeout(function(){throw e})}function Fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),st="__reactFiber$"+yr,ii="__reactProps$"+yr,vt="__reactContainer$"+yr,Fa="__reactEvents$"+yr,h0="__reactListeners$"+yr,m0="__reactHandles$"+yr;function fn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cc(e);e!==null;){if(n=e[st])return n;e=Cc(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){return e=e[st]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function qs(e){return e[ii]||null}var Ba=[],zn=-1;function Zt(e){return{current:e}}function Y(e){0>zn||(e.current=Ba[zn],Ba[zn]=null,zn--)}function H(e,t){zn++,Ba[zn]=e.current,e.current=t}var Yt={},xe=Zt(Yt),je=Zt(!1),xn=Yt;function ir(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ws(){Y(je),Y(xe)}function Pc(e,t,n){if(xe.current!==Yt)throw Error(N(168));H(xe,t),H(je,n)}function Nh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Zg(e)||"Unknown",i));return te({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,xn=xe.current,H(xe,e),H(je,je.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Nh(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,Y(je),Y(xe),H(xe,e)):Y(je),H(je,n)}var ct=null,Zs=!1,Bo=!1;function Ih(e){ct===null?ct=[e]:ct.push(e)}function p0(e){Zs=!0,Ih(e)}function Jt(){if(!Bo&&ct!==null){Bo=!0;var e=0,t=W;try{var n=ct;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Zs=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),eh(_l,Jt),i}finally{W=t,Bo=!1}}return null}var Fn=[],Bn=0,Ss=null,Es=0,Ue=[],We=0,wn=null,dt=1,ft="";function on(e,t){Fn[Bn++]=Es,Fn[Bn++]=Ss,Ss=e,Es=t}function Ah(e,t,n){Ue[We++]=dt,Ue[We++]=ft,Ue[We++]=wn,wn=e;var r=dt;e=ft;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ze(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function Kl(e){e.return!==null&&(on(e,1),Ah(e,1,0))}function Yl(e){for(;e===Ss;)Ss=Fn[--Bn],Fn[Bn]=null,Es=Fn[--Bn],Fn[Bn]=null;for(;e===wn;)wn=Ue[--We],Ue[We]=null,ft=Ue[--We],Ue[We]=null,dt=Ue[--We],Ue[We]=null}var be=null,Le=null,X=!1,qe=null;function Mh(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Le=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Le=null,!0):!1;default:return!1}}function Ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wa(e){if(X){var t=Le;if(t){var n=t;if(!Nc(e,t)){if(Ua(e))throw Error(N(418));t=Ft(n.nextSibling);var r=be;t&&Nc(e,t)?Mh(r,n):(e.flags=e.flags&-4097|2,X=!1,be=e)}}else{if(Ua(e))throw Error(N(418));e.flags=e.flags&-4097|2,X=!1,be=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Bi(e){if(e!==be)return!1;if(!X)return Ic(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_a(e.type,e.memoizedProps)),t&&(t=Le)){if(Ua(e))throw Rh(),Error(N(418));for(;t;)Mh(e,t),t=Ft(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=be?Ft(e.stateNode.nextSibling):null;return!0}function Rh(){for(var e=Le;e;)e=Ft(e.nextSibling)}function sr(){Le=be=null,X=!1}function Ql(e){qe===null?qe=[e]:qe.push(e)}var g0=St.ReactCurrentBatchConfig;function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ui(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ac(e){var t=e._init;return t(e._payload)}function Lh(e){function t(y,m){if(e){var p=y.deletions;p===null?(y.deletions=[m],y.flags|=16):p.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=$t(y,m),y.index=0,y.sibling=null,y}function s(y,m,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<m?(y.flags|=2,m):p):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,p,w){return m===null||m.tag!==6?(m=Yo(p,y.mode,w),m.return=y,m):(m=i(m,p),m.return=y,m)}function l(y,m,p,w){var T=p.type;return T===bn?d(y,m,p.props.children,w,p.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&Ac(T)===m.type)?(w=i(m,p.props),w.ref=Tr(y,m,p),w.return=y,w):(w=ls(p.type,p.key,p.props,null,y.mode,w),w.ref=Tr(y,m,p),w.return=y,w)}function u(y,m,p,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Qo(p,y.mode,w),m.return=y,m):(m=i(m,p.children||[]),m.return=y,m)}function d(y,m,p,w,T){return m===null||m.tag!==7?(m=yn(p,y.mode,w,T),m.return=y,m):(m=i(m,p),m.return=y,m)}function f(y,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Yo(""+m,y.mode,p),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mi:return p=ls(m.type,m.key,m.props,null,y.mode,p),p.ref=Tr(y,null,m),p.return=y,p;case Ln:return m=Qo(m,y.mode,p),m.return=y,m;case It:var w=m._init;return f(y,w(m._payload),p)}if(Mr(m)||xr(m))return m=yn(m,y.mode,p,null),m.return=y,m;Ui(y,m)}return null}function h(y,m,p,w){var T=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:a(y,m,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mi:return p.key===T?l(y,m,p,w):null;case Ln:return p.key===T?u(y,m,p,w):null;case It:return T=p._init,h(y,m,T(p._payload),w)}if(Mr(p)||xr(p))return T!==null?null:d(y,m,p,w,null);Ui(y,p)}return null}function g(y,m,p,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(p)||null,a(m,y,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mi:return y=y.get(w.key===null?p:w.key)||null,l(m,y,w,T);case Ln:return y=y.get(w.key===null?p:w.key)||null,u(m,y,w,T);case It:var j=w._init;return g(y,m,p,j(w._payload),T)}if(Mr(w)||xr(w))return y=y.get(p)||null,d(m,y,w,T,null);Ui(m,w)}return null}function v(y,m,p,w){for(var T=null,j=null,C=m,E=m=0,I=null;C!==null&&E<p.length;E++){C.index>E?(I=C,C=null):I=C.sibling;var P=h(y,C,p[E],w);if(P===null){C===null&&(C=I);break}e&&C&&P.alternate===null&&t(y,C),m=s(P,m,E),j===null?T=P:j.sibling=P,j=P,C=I}if(E===p.length)return n(y,C),X&&on(y,E),T;if(C===null){for(;E<p.length;E++)C=f(y,p[E],w),C!==null&&(m=s(C,m,E),j===null?T=C:j.sibling=C,j=C);return X&&on(y,E),T}for(C=r(y,C);E<p.length;E++)I=g(C,y,E,p[E],w),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?E:I.key),m=s(I,m,E),j===null?T=I:j.sibling=I,j=I);return e&&C.forEach(function(L){return t(y,L)}),X&&on(y,E),T}function x(y,m,p,w){var T=xr(p);if(typeof T!="function")throw Error(N(150));if(p=T.call(p),p==null)throw Error(N(151));for(var j=T=null,C=m,E=m=0,I=null,P=p.next();C!==null&&!P.done;E++,P=p.next()){C.index>E?(I=C,C=null):I=C.sibling;var L=h(y,C,P.value,w);if(L===null){C===null&&(C=I);break}e&&C&&L.alternate===null&&t(y,C),m=s(L,m,E),j===null?T=L:j.sibling=L,j=L,C=I}if(P.done)return n(y,C),X&&on(y,E),T;if(C===null){for(;!P.done;E++,P=p.next())P=f(y,P.value,w),P!==null&&(m=s(P,m,E),j===null?T=P:j.sibling=P,j=P);return X&&on(y,E),T}for(C=r(y,C);!P.done;E++,P=p.next())P=g(C,y,E,P.value,w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),m=s(P,m,E),j===null?T=P:j.sibling=P,j=P);return e&&C.forEach(function(B){return t(y,B)}),X&&on(y,E),T}function S(y,m,p,w){if(typeof p=="object"&&p!==null&&p.type===bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Mi:e:{for(var T=p.key,j=m;j!==null;){if(j.key===T){if(T=p.type,T===bn){if(j.tag===7){n(y,j.sibling),m=i(j,p.props.children),m.return=y,y=m;break e}}else if(j.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&Ac(T)===j.type){n(y,j.sibling),m=i(j,p.props),m.ref=Tr(y,j,p),m.return=y,y=m;break e}n(y,j);break}else t(y,j);j=j.sibling}p.type===bn?(m=yn(p.props.children,y.mode,w,p.key),m.return=y,y=m):(w=ls(p.type,p.key,p.props,null,y.mode,w),w.ref=Tr(y,m,p),w.return=y,y=w)}return o(y);case Ln:e:{for(j=p.key;m!==null;){if(m.key===j)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(y,m.sibling),m=i(m,p.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Qo(p,y.mode,w),m.return=y,y=m}return o(y);case It:return j=p._init,S(y,m,j(p._payload),w)}if(Mr(p))return v(y,m,p,w);if(xr(p))return x(y,m,p,w);Ui(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,p),m.return=y,y=m):(n(y,m),m=Yo(p,y.mode,w),m.return=y,y=m),o(y)):n(y,m)}return S}var or=Lh(!0),bh=Lh(!1),Ts=Zt(null),Cs=null,Un=null,Xl=null;function ql(){Xl=Un=Cs=null}function Zl(e){var t=Ts.current;Y(Ts),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){Cs=e,Xl=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(Cs===null)throw Error(N(308));Un=e,Cs.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var hn=null;function Jl(e){hn===null?hn=[e]:hn.push(e)}function Dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jl(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,Jl(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zl(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ps(e,t,n,r){var i=e.updateQueue;At=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(h=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=te({},f,h);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Sn|=o,e.lanes=o,e.memoizedState=f}}function Rc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Ti={},at=Zt(Ti),si=Zt(Ti),oi=Zt(Ti);function mn(e){if(e===Ti)throw Error(N(174));return e}function tu(e,t){switch(H(oi,t),H(si,e),H(at,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}Y(at),H(at,t)}function ar(){Y(at),Y(si),Y(oi)}function Oh(e){mn(oi.current);var t=mn(at.current),n=Ta(t,e.type);t!==n&&(H(si,e),H(at,n))}function nu(e){si.current===e&&(Y(at),Y(si))}var q=Zt(0);function js(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function ru(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var rs=St.ReactCurrentDispatcher,Wo=St.ReactCurrentBatchConfig,kn=0,J=null,le=null,ce=null,Ns=!1,Fr=!1,ai=0,y0=0;function pe(){throw Error(N(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function su(e,t,n,r,i,s){if(kn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=e===null||e.memoizedState===null?k0:S0,e=n(r,i),Fr){s=0;do{if(Fr=!1,ai=0,25<=s)throw Error(N(301));s+=1,ce=le=null,t.updateQueue=null,rs.current=E0,e=n(r,i)}while(Fr)}if(rs.current=Is,t=le!==null&&le.next!==null,kn=0,ce=le=J=null,Ns=!1,t)throw Error(N(300));return e}function ou(){var e=ai!==0;return ai=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(N(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function li(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((kn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,J.lanes|=d,Sn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,Sn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _h(){}function zh(e,t){var n=J,r=Ke(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,au(Uh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,ui(9,Bh.bind(null,n,r,i,t),void 0,null),de===null)throw Error(N(349));kn&30||Fh(n,t,i)}return i}function Fh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bh(e,t,n,r){t.value=n,t.getSnapshot=r,Wh(t)&&$h(e)}function Uh(e,t,n){return n(function(){Wh(t)&&$h(e)})}function Wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function $h(e){var t=xt(e,1);t!==null&&Je(t,e,1,-1)}function Lc(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=w0.bind(null,J,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hh(){return Ke().memoizedState}function is(e,t,n,r){var i=it();J.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function Js(e,t,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&iu(r,o.deps)){i.memoizedState=ui(t,n,s,r);return}}J.flags|=e,i.memoizedState=ui(1|t,n,s,r)}function bc(e,t){return is(8390656,8,e,t)}function au(e,t){return Js(2048,8,e,t)}function Gh(e,t){return Js(4,2,e,t)}function Kh(e,t){return Js(4,4,e,t)}function Yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qh(e,t,n){return n=n!=null?n.concat([e]):null,Js(4,4,Yh.bind(null,t,e),n)}function lu(){}function Xh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zh(e,t,n){return kn&21?(et(n,t)||(n=rh(),J.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function v0(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),t()}finally{W=n,Wo.transition=r}}function Jh(){return Ke().memoizedState}function x0(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},em(e))tm(t,n);else if(n=Dh(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),nm(n,t,r)}}function w0(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(em(e))tm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,Jl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Dh(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),nm(n,t,r))}}function em(e){var t=e.alternate;return e===J||t!==null&&t===J}function tm(e,t){Fr=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zl(e,n)}}var Is={readContext:Ge,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},k0={readContext:Ge,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4194308,4,Yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=x0.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:lu,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=v0.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=it();if(X){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),de===null)throw Error(N(349));kn&30||Fh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,bc(Uh.bind(null,r,s,e),[e]),r.flags|=2048,ui(9,Bh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=it(),t=de.identifierPrefix;if(X){var n=ft,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=y0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},S0={readContext:Ge,useCallback:Xh,useContext:Ge,useEffect:au,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:qh,useReducer:$o,useRef:Hh,useState:function(){return $o(li)},useDebugValue:lu,useDeferredValue:function(e){var t=Ke();return Zh(t,le.memoizedState,e)},useTransition:function(){var e=$o(li)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:zh,useId:Jh,unstable_isNewReconciler:!1},E0={readContext:Ge,useCallback:Xh,useContext:Ge,useEffect:au,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:qh,useReducer:Ho,useRef:Hh,useState:function(){return Ho(li)},useDebugValue:lu,useDeferredValue:function(e){var t=Ke();return le===null?t.memoizedState=e:Zh(t,le.memoizedState,e)},useTransition:function(){var e=Ho(li)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:zh,useId:Jh,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Bt(e,s,i),t!==null&&(Je(t,e,i,r),ns(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Bt(e,s,i),t!==null&&(Je(t,e,i,r),ns(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Wt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(Je(t,e,r,n),ns(t,e,r))}};function Dc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,s):!0}function rm(e,t,n){var r=!1,i=Yt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(i=Ne(t)?xn:xe.current,r=t.contextTypes,s=(r=r!=null)?ir(e,i):Yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function Ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ge(s):(s=Ne(t)?xn:xe.current,i.context=ir(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ha(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=qg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ka(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function im(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,rl=r),Ka(e,t)},n}function sm(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ka(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ka(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Oc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_0.bind(null,e,t,n),t.then(e,e))}function _c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var C0=St.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?bh(t,null,n,r):or(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var s=t.ref;return er(t,i),r=su(e,t,n,r,s,i),n=ou(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(X&&n&&Kl(t),t.flags|=1,ke(e,t,r,i),t.child)}function Bc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!gu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,om(e,t,s,r,i)):(e=ls(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=$t(s,r),e.ref=t.ref,e.return=t,t.child=e}function om(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ti(s,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,wt(e,t,i)}return Ya(e,t,n,r,i)}function am(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H($n,Re),Re|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H($n,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H($n,Re),Re|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H($n,Re),Re|=r;return ke(e,t,i,n),t.child}function lm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ya(e,t,n,r,i){var s=Ne(n)?xn:xe.current;return s=ir(t,s),er(t,i),n=su(e,t,n,r,s,i),r=ou(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(X&&r&&Kl(t),t.flags|=1,ke(e,t,n,i),t.child)}function Uc(e,t,n,r,i){if(Ne(n)){var s=!0;ks(t)}else s=!1;if(er(t,i),t.stateNode===null)ss(e,t),rm(t,n,r),Ga(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Ne(n)?xn:xe.current,u=ir(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vc(t,o,r,u),At=!1;var h=t.memoizedState;o.state=h,Ps(t,r,o,i),l=t.memoizedState,a!==r||h!==l||je.current||At?(typeof d=="function"&&(Ha(t,n,d,r),l=t.memoizedState),(a=At||Dc(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Vh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=Ne(n)?xn:xe.current,l=ir(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Vc(t,o,r,l),At=!1,h=t.memoizedState,o.state=h,Ps(t,r,o,i);var v=t.memoizedState;a!==f||h!==v||je.current||At?(typeof g=="function"&&(Ha(t,n,g,r),v=t.memoizedState),(u=At||Dc(t,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,s,i)}function Qa(e,t,n,r,i,s){lm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&jc(t,n,!1),wt(e,t,s);r=t.stateNode,C0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=or(t,e.child,null,s),t.child=or(t,null,a,s)):ke(e,t,a,s),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function um(e){var t=e.stateNode;t.pendingContext?Pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pc(e,t.context,!1),tu(e,t.containerInfo)}function Wc(e,t,n,r,i){return sr(),Ql(i),t.flags|=256,ke(e,t,n,r),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(q,i&1),e===null)return Wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ro(o,r,0,null),e=yn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=qa(n),t.memoizedState=Xa,e):uu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return P0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$t(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$t(a,s):(s=yn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Xa,r}return s=e.child,e=s.sibling,r=$t(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uu(e,t){return t=ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Ql(r),or(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function P0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(N(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ro({mode:"visible",children:r.children},i,0,null),s=yn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&or(t,e.child,null,o),t.child.memoizedState=qa(o),t.memoizedState=Xa,s);if(!(t.mode&1))return Wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Go(s,r,void 0),Wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Pe||a){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(e,i),Je(r,e,i,-1))}return pu(),r=Go(Error(N(421))),Wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Ft(i.nextSibling),be=t,X=!0,qe=null,e!==null&&(Ue[We++]=dt,Ue[We++]=ft,Ue[We++]=wn,dt=e.id,ft=e.overflow,wn=t),t=uu(t,r.children),t.flags|=4096,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function Ko(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&js(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ko(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&js(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ko(t,!0,n,null,s);break;case"together":Ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j0(e,t,n){switch(t.tag){case 3:um(t),sr();break;case 5:Oh(t);break;case 1:Ne(t.type)&&ks(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?cm(e,t,n):(H(q,q.current&1),e=wt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,am(e,t,n)}return wt(e,t,n)}var fm,Za,hm,mm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mn(at.current);var s=null;switch(n){case"input":i=wa(e,i),r=wa(e,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Ea(e,i),r=Ea(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}Ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function N0(e,t,n){var r=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ne(t.type)&&ws(),ge(t),null;case 3:return r=t.stateNode,ar(),Y(je),Y(xe),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ol(qe),qe=null))),Za(e,t),ge(t),null;case 5:nu(t);var i=mn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ge(t),null}if(e=mn(at.current),Bi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[ii]=s,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)K(Lr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ju(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":tc(r,s),K("invalid",r)}Ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fi(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Ri(r),ec(r,s,!0);break;case"textarea":Ri(r),nc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[st]=t,e[ii]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Pa(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)K(Lr[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Ju(e,r),i=wa(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),K("invalid",e);break;case"textarea":tc(e,r),i=Ea(e,r),K("invalid",e);break;default:i=r}Ca(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qr(e,l):typeof l=="number"&&Qr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",e):l!=null&&Ll(e,s,l,o))}switch(n){case"input":Ri(e),ec(e,r,!1);break;case"textarea":Ri(e),nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Xn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=mn(oi.current),mn(at.current),Bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ge(t),null;case 13:if(Y(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Le!==null&&t.mode&1&&!(t.flags&128))Rh(),sr(),t.flags|=98560,s=!1;else if(s=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[st]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else qe!==null&&(ol(qe),qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ue===0&&(ue=3):pu())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return ar(),Za(e,t),e===null&&ni(t.stateNode.containerInfo),ge(t),null;case 10:return Zl(t.type._context),ge(t),null;case 17:return Ne(t.type)&&ws(),ge(t),null;case 19:if(Y(q),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Cr(s,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=js(e),o!==null){for(t.flags|=128,Cr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&ie()>ur&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304)}else{if(!r)if(e=js(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return ge(t),null}else 2*ie()-s.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ie(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function I0(e,t){switch(Yl(t),t.tag){case 1:return Ne(t.type)&&ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),Y(je),Y(xe),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nu(t),null;case 13:if(Y(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(q),null;case 4:return ar(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var $i=!1,ve=!1,A0=typeof WeakSet=="function"?WeakSet:Set,M=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Ja(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Hc=!1;function M0(e,t){if(Va=gs,e=xh(),Gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oa={focusedElem:e,selectionRange:n},gs=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),S);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Hc,Hc=!1,v}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ja(t,n,s)}i=i.next}while(i!==r)}}function to(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function el(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pm(e){var t=e.alternate;t!==null&&(e.alternate=null,pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[ii],delete t[Fa],delete t[h0],delete t[m0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gm(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}var fe=null,Xe=!1;function jt(e,t,n){for(n=n.child;n!==null;)ym(e,t,n),n=n.sibling}function ym(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ks,n)}catch{}switch(n.tag){case 5:ve||Wn(n,t);case 6:var r=fe,i=Xe;fe=null,jt(e,t,n),fe=r,Xe=i,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?Fo(e.parentNode,n):e.nodeType===1&&Fo(e,n),Jr(e)):Fo(fe,n.stateNode));break;case 4:r=fe,i=Xe,fe=n.stateNode.containerInfo,Xe=!0,jt(e,t,n),fe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ja(n,t,o),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ve&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,jt(e,t,n),ve=r):jt(e,t,n);break;default:jt(e,t,n)}}function Kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new A0),t.forEach(function(r){var i=F0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Xe=!1;break e;case 3:fe=a.stateNode.containerInfo,Xe=!0;break e;case 4:fe=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(fe===null)throw Error(N(160));ym(s,o,i),fe=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}function vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),nt(e),r&4){try{Br(3,e,e.return),to(3,e)}catch(x){ne(e,e.return,x)}try{Br(5,e,e.return)}catch(x){ne(e,e.return,x)}}break;case 1:Ye(t,e),nt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(Ye(t,e),nt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Qr(i,"")}catch(x){ne(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ff(i,s),Pa(a,o);var u=Pa(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Hf(i,f):d==="dangerouslySetInnerHTML"?Wf(i,f):d==="children"?Qr(i,f):Ll(i,d,f,u)}switch(a){case"input":ka(i,s);break;case"textarea":Bf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xn(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xn(i,!!s.multiple,s.defaultValue,!0):Xn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ii]=s}catch(x){ne(e,e.return,x)}}break;case 6:if(Ye(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){ne(e,e.return,x)}}break;case 3:if(Ye(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(x){ne(e,e.return,x)}break;case 4:Ye(t,e),nt(e);break;case 13:Ye(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fu=ie())),r&4&&Kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||d,Ye(t,e),ve=u):Ye(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:Br(4,h,h.return);break;case 1:Wn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ne(r,n,x)}}break;case 5:Wn(h,h.return);break;case 22:if(h.memoizedState!==null){Qc(f);continue}}g!==null?(g.return=h,M=g):Qc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$f("display",o))}catch(x){ne(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ne(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ye(t,e),nt(e),r&4&&Kc(e);break;case 21:break;default:Ye(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gm(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qr(i,""),r.flags&=-33);var s=Gc(e);nl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Gc(e);tl(e,a,o);break;default:throw Error(N(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R0(e,t,n){M=e,xm(e)}function xm(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$i;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=$i;var u=ve;if($i=o,(ve=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Xc(i):l!==null?(l.return=o,M=l):Xc(i);for(;s!==null;)M=s,xm(s),s=s.sibling;M=i,$i=a,ve=u}Yc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Yc(e)}}function Yc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||to(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Rc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ve||t.flags&512&&el(t)}catch(h){ne(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Qc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Xc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{to(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var s=t.return;try{el(t)}catch(l){ne(t,s,l)}break;case 5:var o=t.return;try{el(t)}catch(l){ne(t,o,l)}}}catch(l){ne(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var L0=Math.ceil,As=St.ReactCurrentDispatcher,cu=St.ReactCurrentOwner,He=St.ReactCurrentBatchConfig,F=0,de=null,ae=null,he=0,Re=0,$n=Zt(0),ue=0,ci=null,Sn=0,no=0,du=0,Ur=null,Ce=null,fu=0,ur=1/0,ut=null,Ms=!1,rl=null,Ut=null,Hi=!1,Dt=null,Rs=0,Wr=0,il=null,os=-1,as=0;function Se(){return F&6?ie():os!==-1?os:os=ie()}function Wt(e){return e.mode&1?F&2&&he!==0?he&-he:g0.transition!==null?(as===0&&(as=rh()),as):(e=W,e!==0||(e=window.event,e=e===void 0?16:ch(e.type)),e):1}function Je(e,t,n,r){if(50<Wr)throw Wr=0,il=null,Error(N(185));ki(e,n,r),(!(F&2)||e!==de)&&(e===de&&(!(F&2)&&(no|=n),ue===4&&Lt(e,he)),Ie(e,r),n===1&&F===0&&!(t.mode&1)&&(ur=ie()+500,Zs&&Jt()))}function Ie(e,t){var n=e.callbackNode;gy(e,t);var r=ps(e,e===de?he:0);if(r===0)n!==null&&sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sc(n),t===1)e.tag===0?p0(qc.bind(null,e)):Ih(qc.bind(null,e)),d0(function(){!(F&6)&&Jt()}),n=null;else{switch(ih(r)){case 1:n=_l;break;case 4:n=th;break;case 16:n=ms;break;case 536870912:n=nh;break;default:n=ms}n=jm(n,wm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wm(e,t){if(os=-1,as=0,F&6)throw Error(N(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=ps(e,e===de?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ls(e,r);else{t=r;var i=F;F|=2;var s=Sm();(de!==e||he!==t)&&(ut=null,ur=ie()+500,gn(e,t));do try{V0();break}catch(a){km(e,a)}while(!0);ql(),As.current=s,F=i,ae!==null?t=0:(de=null,he=0,t=ue)}if(t!==0){if(t===2&&(i=Ma(e),i!==0&&(r=i,t=sl(e,i))),t===1)throw n=ci,gn(e,0),Lt(e,r),Ie(e,ie()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!b0(i)&&(t=Ls(e,r),t===2&&(s=Ma(e),s!==0&&(r=s,t=sl(e,s))),t===1))throw n=ci,gn(e,0),Lt(e,r),Ie(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:an(e,Ce,ut);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=fu+500-ie(),10<t)){if(ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=za(an.bind(null,e,Ce,ut),t);break}an(e,Ce,ut);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L0(r/1960))-r,10<r){e.timeoutHandle=za(an.bind(null,e,Ce,ut),r);break}an(e,Ce,ut);break;case 5:an(e,Ce,ut);break;default:throw Error(N(329))}}}return Ie(e,ie()),e.callbackNode===n?wm.bind(null,e):null}function sl(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ls(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ol(t)),e}function ol(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function b0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~du,t&=~no,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function qc(e){if(F&6)throw Error(N(327));tr();var t=ps(e,0);if(!(t&1))return Ie(e,ie()),null;var n=Ls(e,t);if(e.tag!==0&&n===2){var r=Ma(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=ci,gn(e,0),Lt(e,t),Ie(e,ie()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ce,ut),Ie(e,ie()),null}function hu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(ur=ie()+500,Zs&&Jt())}}function En(e){Dt!==null&&Dt.tag===0&&!(F&6)&&tr();var t=F;F|=1;var n=He.transition,r=W;try{if(He.transition=null,W=1,e)return e()}finally{W=r,He.transition=n,F=t,!(F&6)&&Jt()}}function mu(){Re=$n.current,Y($n)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,c0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ws();break;case 3:ar(),Y(je),Y(xe),ru();break;case 5:nu(r);break;case 4:ar();break;case 13:Y(q);break;case 19:Y(q);break;case 10:Zl(r.type._context);break;case 22:case 23:mu()}n=n.return}if(de=e,ae=e=$t(e.current,null),he=Re=t,ue=0,ci=null,du=no=Sn=0,Ce=Ur=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hn=null}return e}function km(e,t){do{var n=ae;try{if(ql(),rs.current=Is,Ns){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(kn=0,ce=le=J=null,Fr=!1,ai=0,cu.current=null,n===null||n.return===null){ue=1,ci=t,ae=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=_c(o);if(g!==null){g.flags&=-257,zc(g,o,a,s,t),g.mode&1&&Oc(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Oc(s,u,t),pu();break e}l=Error(N(426))}}else if(X&&a.mode&1){var S=_c(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),zc(S,o,a,s,t),Ql(lr(l,a));break e}}s=l=lr(l,a),ue!==4&&(ue=2),Ur===null?Ur=[s]:Ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=im(s,l,t);Mc(s,y);break e;case 1:a=l;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ut===null||!Ut.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=sm(s,a,t);Mc(s,w);break e}}s=s.return}while(s!==null)}Tm(n)}catch(T){t=T,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Sm(){var e=As.current;return As.current=Is,e===null?Is:e}function pu(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||!(Sn&268435455)&&!(no&268435455)||Lt(de,he)}function Ls(e,t){var n=F;F|=2;var r=Sm();(de!==e||he!==t)&&(ut=null,gn(e,t));do try{D0();break}catch(i){km(e,i)}while(!0);if(ql(),F=n,As.current=r,ae!==null)throw Error(N(261));return de=null,he=0,ue}function D0(){for(;ae!==null;)Em(ae)}function V0(){for(;ae!==null&&!ay();)Em(ae)}function Em(e){var t=Pm(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Tm(e):ae=t,cu.current=null}function Tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}else if(n=N0(n,t,Re),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function an(e,t,n){var r=W,i=He.transition;try{He.transition=null,W=1,O0(e,t,n,r)}finally{He.transition=i,W=r}return null}function O0(e,t,n,r){do tr();while(Dt!==null);if(F&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yy(e,s),e===de&&(ae=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,jm(ms,function(){return tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=W;W=1;var a=F;F|=4,cu.current=null,M0(e,n),vm(n,e),r0(Oa),gs=!!Va,Oa=Va=null,e.current=n,R0(n),ly(),F=a,W=o,He.transition=s}else e.current=n;if(Hi&&(Hi=!1,Dt=e,Rs=i),s=e.pendingLanes,s===0&&(Ut=null),dy(n.stateNode),Ie(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,e=rl,rl=null,e;return Rs&1&&e.tag!==0&&tr(),s=e.pendingLanes,s&1?e===il?Wr++:(Wr=0,il=e):Wr=0,Jt(),null}function tr(){if(Dt!==null){var e=ih(Rs),t=He.transition,n=W;try{if(He.transition=null,W=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Rs=0,F&6)throw Error(N(331));var i=F;for(F|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Br(8,d,s)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var h=d.sibling,g=d.return;if(pm(d),d===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Br(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,M=y;break e}M=s.return}}var m=e.current;for(M=m;M!==null;){o=M;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,M=p;else e:for(o=m;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:to(9,a)}}catch(T){ne(a,a.return,T)}if(a===o){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(F=i,Jt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ks,e)}catch{}r=!0}return r}finally{W=n,He.transition=t}}return!1}function Zc(e,t,n){t=lr(n,t),t=im(e,t,1),e=Bt(e,t,1),t=Se(),e!==null&&(ki(e,1,t),Ie(e,t))}function ne(e,t,n){if(e.tag===3)Zc(e,e,n);else for(;t!==null;){if(t.tag===3){Zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=lr(n,e),e=sm(t,e,1),t=Bt(t,e,1),e=Se(),t!==null&&(ki(t,1,e),Ie(t,e));break}}t=t.return}}function _0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(he&n)===n&&(ue===4||ue===3&&(he&130023424)===he&&500>ie()-fu?gn(e,0):du|=n),Ie(e,t)}function Cm(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Se();e=xt(e,t),e!==null&&(ki(e,t,n),Ie(e,n))}function z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cm(e,n)}function F0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Cm(e,n)}var Pm;Pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,j0(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,X&&t.flags&1048576&&Ah(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ss(e,t),e=t.pendingProps;var i=ir(t,xe.current);er(t,n),i=su(null,t,r,e,i,n);var s=ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,ks(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,Ga(t,r,e,n),t=Qa(null,t,r,!0,s,n)):(t.tag=0,X&&s&&Kl(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ss(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U0(r),e=Qe(r,e),i){case 0:t=Ya(null,t,r,e,n);break e;case 1:t=Uc(null,t,r,e,n);break e;case 11:t=Fc(null,t,r,e,n);break e;case 14:t=Bc(null,t,r,Qe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Uc(e,t,r,i,n);case 3:e:{if(um(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Vh(e,t),Ps(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=lr(Error(N(423)),t),t=Wc(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(N(424)),t),t=Wc(e,t,r,n,i);break e}else for(Le=Ft(t.stateNode.containerInfo.firstChild),be=t,X=!0,qe=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){t=wt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Oh(t),e===null&&Wa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,_a(r,i)?o=null:s!==null&&_a(r,s)&&(t.flags|=32),lm(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&Wa(t),null;case 13:return cm(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Fc(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Ts,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!je.current){t=wt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$a(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$a(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,er(t,n),i=Ge(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Bc(e,t,r,i,n);case 15:return om(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ss(e,t),t.tag=1,Ne(r)?(e=!0,ks(t)):e=!1,er(t,n),rm(t,r,i),Ga(t,r,i,n),Qa(null,t,r,!0,e,n);case 19:return dm(e,t,n);case 22:return am(e,t,n)}throw Error(N(156,t.tag))};function jm(e,t){return eh(e,t)}function B0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new B0(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U0(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===Vl)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bn:return yn(n.children,i,s,t);case bl:o=8,i|=8;break;case ga:return e=$e(12,n,t,i|2),e.elementType=ga,e.lanes=s,e;case ya:return e=$e(13,n,t,i),e.elementType=ya,e.lanes=s,e;case va:return e=$e(19,n,t,i),e.elementType=va,e.lanes=s,e;case Of:return ro(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Df:o=10;break e;case Vf:o=9;break e;case Dl:o=11;break e;case Vl:o=14;break e;case It:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=$e(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function yn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function ro(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Of,e.lanes=n,e.stateNode={isHidden:!1},e}function Yo(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,i,s,o,a,l){return e=new W0(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=$e(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(s),e}function $0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nm(e){if(!e)return Yt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Nh(e,n,t)}return t}function Im(e,t,n,r,i,s,o,a,l){return e=yu(n,r,!0,e,i,s,o,a,l),e.context=Nm(null),n=e.current,r=Se(),i=Wt(n),s=mt(r,i),s.callback=t??null,Bt(n,s,i),e.current.lanes=i,ki(e,i,r),Ie(e,r),e}function io(e,t,n,r){var i=t.current,s=Se(),o=Wt(i);return n=Nm(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,o),e!==null&&(Je(e,i,o,s),ns(e,i,o)),o}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){Jc(e,t),(e=e.alternate)&&Jc(e,t)}function H0(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}so.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));io(e,t,null,null)};so.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){io(null,e,null,null)}),t[vt]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&uh(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function G0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bs(o);s.call(u)}}var o=Im(t,r,e,0,null,!1,!1,"",ed);return e._reactRootContainer=o,e[vt]=o.current,ni(e.nodeType===8?e.parentNode:e),En(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bs(l);a.call(u)}}var l=yu(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=l,e[vt]=l.current,ni(e.nodeType===8?e.parentNode:e),En(function(){io(t,l,n,r)}),l}function ao(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bs(o);a.call(l)}}io(t,o,e,i)}else o=G0(n,t,e,i,r);return bs(o)}sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(zl(t,n|1),Ie(t,ie()),!(F&6)&&(ur=ie()+500,Jt()))}break;case 13:En(function(){var r=xt(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),vu(e,1)}};Fl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}vu(e,134217728)}};oh=function(e){if(e.tag===13){var t=Wt(e),n=xt(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}vu(e,t)}};ah=function(){return W};lh=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Na=function(e,t,n){switch(t){case"input":if(ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qs(r);if(!i)throw Error(N(90));zf(r),ka(r,i)}}}break;case"textarea":Bf(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};Yf=hu;Qf=En;var K0={usingClientEntryPoint:!1,Events:[Ei,_n,qs,Gf,Kf,hu]},Pr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y0={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ks=Gi.inject(Y0),ot=Gi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(N(200));return $0(e,t,null,n)};Oe.createRoot=function(e,t){if(!wu(e))throw Error(N(299));var n=!1,r="",i=Am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,ni(e.nodeType===8?e.parentNode:e),new xu(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Zf(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return En(e)};Oe.hydrate=function(e,t,n){if(!oo(t))throw Error(N(200));return ao(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!wu(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Im(t,null,e,1,n??null,i,!1,s,o),e[vt]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new so(t)};Oe.render=function(e,t,n){if(!oo(t))throw Error(N(200));return ao(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!oo(e))throw Error(N(40));return e._reactRootContainer?(En(function(){ao(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Oe.unstable_batchedUpdates=hu;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oo(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ao(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mm)}catch(e){console.error(e)}}Mm(),Mf.exports=Oe;var Q0=Mf.exports,td=Q0;ma.createRoot=td.createRoot,ma.hydrateRoot=td.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const nd="popstate";function X0(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Pn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),al("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Ds(s))}function r(i,s){lo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Z0(t,n,r,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q0(){return Math.random().toString(36).substr(2,8)}function rd(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,n,r){return n===void 0&&(n=null),di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pn(t):t,{state:n,key:t&&t.key||r||q0()})}function Ds(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Z0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(di({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Vt.Pop;let S=d(),y=S==null?null:S-u;u=S,l&&l({action:a,location:x.location,delta:y})}function h(S,y){a=Vt.Push;let m=al(x.location,S,y);n&&n(m,S),u=d()+1;let p=rd(m,u),w=x.createHref(m);try{o.pushState(p,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:x.location,delta:1})}function g(S,y){a=Vt.Replace;let m=al(x.location,S,y);n&&n(m,S),u=d();let p=rd(m,u),w=x.createHref(m);o.replaceState(p,"",w),s&&l&&l({action:a,location:x.location,delta:0})}function v(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Ds(S);return m=m.replace(/ $/,"%20"),ee(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let x={get action(){return a},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nd,f),l=S,()=>{i.removeEventListener(nd,f),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let y=v(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:g,go(S){return o.go(S)}};return x}var id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(id||(id={}));function J0(e,t,n){return n===void 0&&(n="/"),ev(e,t,n)}function ev(e,t,n,r){let i=typeof t=="string"?Pn(t):t,s=cr(i.pathname||"/",n);if(s==null)return null;let o=Rm(e);tv(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=fv(s);a=cv(o[l],u)}return a}function Rm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ht([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rm(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:lv(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Lm(s.path))i(s,o,l)}),t}function Lm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Lm(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function tv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nv=/^:[\w-]+$/,rv=3,iv=2,sv=1,ov=10,av=-2,sd=e=>e==="*";function lv(e,t){let n=e.split("/"),r=n.length;return n.some(sd)&&(r+=av),t&&(r+=iv),n.filter(i=>!sd(i)).reduce((i,s)=>i+(nv.test(s)?rv:s===""?sv:ov),r)}function uv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cv(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=ll({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ht([s,f.pathname]),pathnameBase:yv(Ht([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ht([s,f.pathnameBase]))}return o}function ll(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function dv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function fv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mv=e=>hv.test(e);function pv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pn(e):e,s;if(n)if(mv(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),lo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=od(n.substring(1),"/"):s=od(n,t)}else s=t;return{pathname:s,search:vv(r),hash:xv(i)}}function od(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ku(e,t){let n=gv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Su(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pn(e):(i=di({},e),ee(!i.pathname||!i.pathname.includes("?"),Xo("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),Xo("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),Xo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=pv(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),yv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bm=["post","put","patch","delete"];new Set(bm);const kv=["get",...bm];new Set(kv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(this,arguments)}const uo=k.createContext(null),Dm=k.createContext(null),Et=k.createContext(null),co=k.createContext(null),Tt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Vm=k.createContext(null);function Sv(e,t){let{relative:n}=t===void 0?{}:t;vr()||ee(!1);let{basename:r,navigator:i}=k.useContext(Et),{hash:s,pathname:o,search:a}=fo(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ht([r,o])),i.createHref({pathname:l,search:a,hash:s})}function vr(){return k.useContext(co)!=null}function jn(){return vr()||ee(!1),k.useContext(co).location}function Om(e){k.useContext(Et).static||k.useLayoutEffect(e)}function Nn(){let{isDataRoute:e}=k.useContext(Tt);return e?Dv():Ev()}function Ev(){vr()||ee(!1);let e=k.useContext(uo),{basename:t,future:n,navigator:r}=k.useContext(Et),{matches:i}=k.useContext(Tt),{pathname:s}=jn(),o=JSON.stringify(ku(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Om(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Su(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ht([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function Eu(){let{matches:e}=k.useContext(Tt),t=e[e.length-1];return t?t.params:{}}function fo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Et),{matches:i}=k.useContext(Tt),{pathname:s}=jn(),o=JSON.stringify(ku(i,r.v7_relativeSplatPath));return k.useMemo(()=>Su(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Tv(e,t){return Cv(e,t)}function Cv(e,t,n,r){vr()||ee(!1);let{navigator:i}=k.useContext(Et),{matches:s}=k.useContext(Tt),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=jn(),d;if(t){var f;let S=typeof t=="string"?Pn(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||ee(!1),d=S}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=J0(e,{pathname:g}),x=Av(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Ht([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Ht([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return t&&x?k.createElement(co.Provider,{value:{location:fi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vt.Pop}},x):x}function Pv(){let e=bv(),t=wv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const jv=k.createElement(Pv,null);class Nv extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Tt.Provider,{value:this.props.routeContext},k.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iv(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(uo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Tt.Provider,{value:t},r)}function Av(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let g,v=!1,x=null,S=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||jv,l&&(u<0&&h===0?(Vv("route-fallback"),v=!0,S=null):u===h&&(v=!0,S=f.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,h+1)),m=()=>{let p;return g?p=x:v?p=S:f.route.Component?p=k.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,k.createElement(Iv,{match:f,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?k.createElement(Nv,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var _m=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_m||{}),zm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zm||{});function Mv(e){let t=k.useContext(uo);return t||ee(!1),t}function Rv(e){let t=k.useContext(Dm);return t||ee(!1),t}function Lv(e){let t=k.useContext(Tt);return t||ee(!1),t}function Fm(e){let t=Lv(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function bv(){var e;let t=k.useContext(Vm),n=Rv(),r=Fm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Dv(){let{router:e}=Mv(_m.UseNavigateStable),t=Fm(zm.UseNavigateStable),n=k.useRef(!1);return Om(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fi({fromRouteId:t},s)))},[e,t])}const ad={};function Vv(e,t,n){ad[e]||(ad[e]=!0)}function Ov(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _v(e){let{to:t,replace:n,state:r,relative:i}=e;vr()||ee(!1);let{future:s,static:o}=k.useContext(Et),{matches:a}=k.useContext(Tt),{pathname:l}=jn(),u=Nn(),d=Su(t,ku(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function rt(e){ee(!1)}function zv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:s,static:o=!1,future:a}=e;vr()&&ee(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:fi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Pn(r));let{pathname:d="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,x=k.useMemo(()=>{let S=cr(d,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:g,key:v},navigationType:i}},[l,d,f,h,g,v,i]);return x==null?null:k.createElement(Et.Provider,{value:u},k.createElement(co.Provider,{children:n,value:x}))}function Fv(e){let{children:t,location:n}=e;return Tv(ul(t),n)}new Promise(()=>{});function ul(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,ul(r.props.children,s));return}r.type!==rt&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ul(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}function Bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,t){return e.button===0&&(!t||t==="_self")&&!Bv(e)}const Wv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$v=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Hv="6";try{window.__reactRouterVersion=Hv}catch{}const Gv=k.createContext({isTransitioning:!1}),Kv="startTransition",ld=_g[Kv];function Yv(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=X0({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&ld?ld(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.useEffect(()=>Ov(r),[r]),k.createElement(zv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,h=Bm(t,Wv),{basename:g}=k.useContext(Et),v,x=!1;if(typeof u=="string"&&Xv.test(u)&&(v=u,Qv))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),T=cr(w.pathname,g);w.origin===p.origin&&T!=null?u=T+w.search+w.hash:x=!0}catch{}let S=Sv(u,{relative:i}),y=Jv(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||y(p)}return k.createElement("a",Vs({},h,{href:v||S,onClick:x||s?r:m,ref:n,target:l}))}),jr=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:u,children:d}=t,f=Bm(t,$v),h=fo(l,{relative:f.relative}),g=jn(),v=k.useContext(Dm),{navigator:x,basename:S}=k.useContext(Et),y=v!=null&&ex(h)&&u===!0,m=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,p=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(p=p.toLowerCase(),w=w?w.toLowerCase():null,m=m.toLowerCase()),w&&S&&(w=cr(w,S)||w);const T=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let j=p===m||!o&&p.startsWith(m)&&p.charAt(T)==="/",C=w!=null&&(w===m||!o&&w.startsWith(m)&&w.charAt(m.length)==="/"),E={isActive:j,isPending:C,isTransitioning:y},I=j?r:void 0,P;typeof s=="function"?P=s(E):P=[s,j?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(E):a;return k.createElement(qv,Vs({},f,{"aria-current":I,className:P,ref:n,style:L,to:l,viewTransition:u}),typeof d=="function"?d(E):d)});var cl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cl||(cl={}));var ud;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ud||(ud={}));function Zv(e){let t=k.useContext(uo);return t||ee(!1),t}function Jv(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=Nn(),u=jn(),d=fo(e,{relative:o});return k.useCallback(f=>{if(Uv(f,n)){f.preventDefault();let h=r!==void 0?r:Ds(u)===Ds(d);l(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}function ex(e,t){t===void 0&&(t={});let n=k.useContext(Gv);n==null&&ee(!1);let{basename:r}=Zv(cl.useViewTransitionState),i=fo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=cr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=cr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ll(i.pathname,o)!=null||ll(i.pathname,s)!=null}const tx={},cd=e=>{let t;const n=new Set,r=(d,f)=>{const h=typeof d=="function"?d(t):d;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(v=>v(t,g))}},i=()=>t,l={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(tx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,l);return l},nx=e=>e?cd(e):cd;var Um={exports:{}},Wm={},$m={exports:{}},Hm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=k;function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ix=typeof Object.is=="function"?Object.is:rx,sx=dr.useState,ox=dr.useEffect,ax=dr.useLayoutEffect,lx=dr.useDebugValue;function ux(e,t){var n=t(),r=sx({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return ax(function(){i.value=n,i.getSnapshot=t,qo(i)&&s({inst:i})},[e,n,t]),ox(function(){return qo(i)&&s({inst:i}),e(function(){qo(i)&&s({inst:i})})},[e]),lx(n),n}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ix(e,n)}catch{return!0}}function cx(e,t){return t()}var dx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cx:ux;Hm.useSyncExternalStore=dr.useSyncExternalStore!==void 0?dr.useSyncExternalStore:dx;$m.exports=Hm;var fx=$m.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=k,hx=fx;function mx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var px=typeof Object.is=="function"?Object.is:mx,gx=hx.useSyncExternalStore,yx=ho.useRef,vx=ho.useEffect,xx=ho.useMemo,wx=ho.useDebugValue;Wm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=yx(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=xx(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return f=v}return f=g}if(v=f,px(d,g))return v;var x=r(g);return i!==void 0&&i(v,x)?(d=g,v):(d=g,f=x)}var u=!1,d,f,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=gx(e,s[0],s[1]);return vx(function(){o.hasValue=!0,o.value=a},[a]),wx(a),a};Um.exports=Wm;var kx=Um.exports;const Sx=xf(kx),Gm={},{useDebugValue:Ex}=wi,{useSyncExternalStoreWithSelector:Tx}=Sx;let dd=!1;const Cx=e=>e;function Px(e,t=Cx,n){(Gm?"production":void 0)!=="production"&&n&&!dd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),dd=!0);const r=Tx(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Ex(r),r}const fd=e=>{(Gm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?nx(e):e,n=(r,i)=>Px(t,r,i);return Object.assign(n,t),n},jx=e=>e?fd(e):fd,Nx={};function Ix(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const hi=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return hi(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return hi(r)(n)}}}},Ax=(e,t)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:S=>S,version:0,merge:(S,y)=>({...y,...S}),...t},o=!1;const a=new Set,l=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return e((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...S)},r,i);const d=hi(s.serialize),f=()=>{const S=s.partialize({...r()});let y;const m=d({state:S,version:s.version}).then(p=>u.setItem(s.name,p)).catch(p=>{y=p});if(y)throw y;return m},h=i.setState;i.setState=(S,y)=>{h(S,y),f()};const g=e((...S)=>{n(...S),f()},r,i);let v;const x=()=>{var S;if(!u)return;o=!1,a.forEach(m=>m(r()));const y=((S=s.onRehydrateStorage)==null?void 0:S.call(s,r()))||void 0;return hi(u.getItem.bind(u))(s.name).then(m=>{if(m)return s.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==s.version){if(s.migrate)return s.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var p;return v=s.merge(m,(p=r())!=null?p:g),n(v,!0),f()}).then(()=>{y==null||y(v,void 0),o=!0,l.forEach(m=>m(v))}).catch(m=>{y==null||y(void 0,m)})};return i.persist={setOptions:S=>{s={...s,...S},S.getStorage&&(u=S.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:S=>(a.add(S),()=>{a.delete(S)}),onFinishHydration:S=>(l.add(S),()=>{l.delete(S)})},x(),v||g},Mx=(e,t)=>(n,r,i)=>{let s={storage:Ix(()=>localStorage),partialize:x=>x,version:0,merge:(x,S)=>({...S,...x}),...t},o=!1;const a=new Set,l=new Set;let u=s.storage;if(!u)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...x)},r,i);const d=()=>{const x=s.partialize({...r()});return u.setItem(s.name,{state:x,version:s.version})},f=i.setState;i.setState=(x,S)=>{f(x,S),d()};const h=e((...x)=>{n(...x),d()},r,i);i.getInitialState=()=>h;let g;const v=()=>{var x,S;if(!u)return;o=!1,a.forEach(m=>{var p;return m((p=r())!=null?p:h)});const y=((S=s.onRehydrateStorage)==null?void 0:S.call(s,(x=r())!=null?x:h))||void 0;return hi(u.getItem.bind(u))(s.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==s.version){if(s.migrate)return[!0,s.migrate(m.state,m.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,m.state];return[!1,void 0]}).then(m=>{var p;const[w,T]=m;if(g=s.merge(T,(p=r())!=null?p:h),n(g,!0),w)return d()}).then(()=>{y==null||y(g,void 0),g=r(),o=!0,l.forEach(m=>m(g))}).catch(m=>{y==null||y(void 0,m)})};return i.persist={setOptions:x=>{s={...s,...x},x.storage&&(u=x.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},s.skipHydration||v(),g||h},Rx=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Nx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ax(e,t)):Mx(e,t),Lx=Rx,bx=[{id:"week1-day1",title:"Day 1: Social Media & Smartphone Life",day:1,week:1,completed:!1,xp:0},{id:"week1-day2",title:"Day 2: Money & Online Shopping",day:2,week:1,completed:!1,xp:0},{id:"week1-day3",title:"Day 3: Fitness & Exercise",day:3,week:1,completed:!1,xp:0},{id:"week1-day4",title:"Day 4: Movies & Entertainment",day:4,week:1,completed:!1,xp:0},{id:"week1-day5",title:"Day 5: Travel & Vacations",day:5,week:1,completed:!1,xp:0},{id:"week1-day6",title:"Day 6: Technology & Social Media",day:6,week:1,completed:!1,xp:0},{id:"week1-day7",title:"Day 7: Week 1 Review",day:7,week:1,completed:!1,xp:0}],Dx=[{id:"first-lesson",name:"First Steps",description:"Complete your first lesson",icon:"🎯",unlocked:!1},{id:"streak-3",name:"3-Day Streak",description:"Learn for 3 days in a row",icon:"🔥",unlocked:!1},{id:"streak-7",name:"Week Warrior",description:"Learn for 7 days in a row",icon:"⚡",unlocked:!1},{id:"xp-100",name:"100 XP Club",description:"Earn 100 XP",icon:"⭐",unlocked:!1},{id:"xp-500",name:"500 XP Master",description:"Earn 500 XP",icon:"🏆",unlocked:!1},{id:"vocab-10",name:"Vocabulary Builder",description:"Learn 10 words",icon:"📚",unlocked:!1},{id:"vocab-50",name:"Word Collector",description:"Learn 50 words",icon:"🎓",unlocked:!1},{id:"game-win",name:"Game Champion",description:"Win a game",icon:"🎮",unlocked:!1},{id:"perfect-lesson",name:"Perfect Score",description:"Get 100% on a lesson",icon:"💯",unlocked:!1},{id:"all-week1",name:"Week 1 Complete",description:"Complete all Week 1 lessons",icon:"🎉",unlocked:!1}],Ct=jx(Lx((e,t)=>({user:{name:"Learner",level:1,xp:0,streak:0,lastLogin:null},lessons:bx,achievements:Dx,flashcards:[],gameStats:{gamesPlayed:0,gamesWon:0,highScore:0},settings:{soundEnabled:!0,darkMode:!0,notifications:!0},addXP:n=>{e(r=>{const i=r.user.xp+n,s=Math.floor(i/200)+1;return{user:{...r.user,xp:i,level:s}}}),t().checkAchievements()},completeLesson:(n,r)=>{e(i=>({lessons:i.lessons.map(s=>s.id===n?{...s,completed:!0,xp:r}:s)})),t().addXP(r)},updateStreak:()=>{const n=new Date().toDateString();e(r=>{const i=r.user.lastLogin;if(i===n)return r;const s=new Date(Date.now()-864e5).toDateString(),o=i===s?r.user.streak+1:1;return{user:{...r.user,streak:o,lastLogin:n}}}),t().checkAchievements()},addFlashcard:n=>{e(r=>({flashcards:[...r.flashcards,{...n,id:Date.now(),learned:!1}]}))},markFlashcardLearned:n=>{e(r=>({flashcards:r.flashcards.map(i=>i.id===n?{...i,learned:!0}:i)}))},incrementGamesPlayed:()=>{e(n=>({gameStats:{...n.gameStats,gamesPlayed:n.gameStats.gamesPlayed+1}}))},winGame:n=>{e(r=>({gameStats:{gamesPlayed:r.gameStats.gamesPlayed+1,gamesWon:r.gameStats.gamesWon+1,highScore:Math.max(r.gameStats.highScore,n)}})),t().checkAchievements()},unlockAchievement:n=>{e(r=>({achievements:r.achievements.map(i=>i.id===n?{...i,unlocked:!0}:i)}))},checkAchievements:()=>{const n=t(),{xp:r,streak:i}=n.user,s=n.lessons.filter(l=>l.completed).length,o=n.flashcards.filter(l=>l.learned).length;[{id:"first-lesson",condition:s>=1},{id:"streak-3",condition:i>=3},{id:"streak-7",condition:i>=7},{id:"xp-100",condition:r>=100},{id:"xp-500",condition:r>=500},{id:"vocab-10",condition:o>=10},{id:"vocab-50",condition:o>=50},{id:"game-win",condition:n.gameStats.gamesWon>=1},{id:"all-week1",condition:s>=7}].forEach(({id:l,condition:u})=>{if(u){const d=n.achievements.find(f=>f.id===l);d&&!d.unlocked&&t().unlockAchievement(l)}})},updateSettings:n=>{e(r=>({settings:{...r.settings,...n}}))}}),{name:"english-learning-storage",partialize:e=>({user:e.user,lessons:e.lessons,achievements:e.achievements,flashcards:e.flashcards,gameStats:e.gameStats,settings:e.settings})})),Km=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),mo=k.createContext({}),po=k.createContext(null),go=typeof document<"u",Tu=go?k.useLayoutEffect:k.useEffect,Ym=k.createContext({strict:!1}),Cu=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Vx="framerAppearId",Qm="data-"+Cu(Vx);function Ox(e,t,n,r){const{visualElement:i}=k.useContext(mo),s=k.useContext(Ym),o=k.useContext(po),a=k.useContext(Km).reducedMotion,l=k.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;k.useInsertionEffect(()=>{u&&u.update(n,o)});const d=k.useRef(!!(n[Qm]&&!window.HandoffComplete));return Tu(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),k.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Hn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function _x(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Hn(n)&&(n.current=r))},[t])}function mi(e){return typeof e=="string"||Array.isArray(e)}function yo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Pu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ju=["initial",...Pu];function vo(e){return yo(e.animate)||ju.some(t=>mi(e[t]))}function Xm(e){return!!(vo(e)||e.variants)}function zx(e,t){if(vo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||mi(n)?n:void 0,animate:mi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Fx(e){const{initial:t,animate:n}=zx(e,k.useContext(mo));return k.useMemo(()=>({initial:t,animate:n}),[hd(t),hd(n)])}function hd(e){return Array.isArray(e)?e.join(" "):e}const md={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},pi={};for(const e in md)pi[e]={isEnabled:t=>md[e].some(n=>!!t[n])};function Bx(e){for(const t in e)pi[t]={...pi[t],...e[t]}}const Nu=k.createContext({}),qm=k.createContext({}),Ux=Symbol.for("motionComponentSymbol");function Wx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Bx(e);function s(a,l){let u;const d={...k.useContext(Km),...a,layoutId:$x(a)},{isStatic:f}=d,h=Fx(a),g=r(a,f);if(!f&&go){h.visualElement=Ox(i,g,d,t);const v=k.useContext(qm),x=k.useContext(Ym).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,x,e,v))}return k.createElement(mo.Provider,{value:h},u&&h.visualElement?k.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,a,_x(g,h.visualElement,l),g,f,h.visualElement))}const o=k.forwardRef(s);return o[Ux]=i,o}function $x({layoutId:e}){const t=k.useContext(Nu).id;return t&&e!==void 0?t+"-"+e:e}function Hx(e){function t(r,i={}){return Wx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Gx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Iu(e){return typeof e!="string"||e.includes("-")?!1:!!(Gx.indexOf(e)>-1||/[A-Z]/.test(e))}const Os={};function Kx(e){Object.assign(Os,e)}const Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],In=new Set(Ci);function Zm(e,{layout:t,layoutId:n}){return In.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Os[e]||e==="opacity")}const Ae=e=>!!(e&&e.getVelocity),Yx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qx=Ci.length;function Xx(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<Qx;o++){const a=Ci[o];if(e[a]!==void 0){const l=Yx[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const Jm=e=>t=>typeof t=="string"&&t.startsWith(e),ep=Jm("--"),dl=Jm("var(--"),qx=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Zx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Qt=(e,t,n)=>Math.min(Math.max(n,e),t),An={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},$r={...An,transform:e=>Qt(0,1,e)},Ki={...An,default:1},Hr=e=>Math.round(e*1e5)/1e5,xo=/(-)?([\d]*\.?[\d])+/g,tp=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Jx=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Pi(e){return typeof e=="string"}const ji=e=>({test:t=>Pi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nt=ji("deg"),lt=ji("%"),D=ji("px"),e1=ji("vh"),t1=ji("vw"),pd={...lt,parse:e=>lt.parse(e)/100,transform:e=>lt.transform(e*100)},gd={...An,transform:Math.round},np={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,size:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,rotate:Nt,rotateX:Nt,rotateY:Nt,rotateZ:Nt,scale:Ki,scaleX:Ki,scaleY:Ki,scaleZ:Ki,skew:Nt,skewX:Nt,skewY:Nt,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:$r,originX:pd,originY:pd,originZ:D,zIndex:gd,fillOpacity:$r,strokeOpacity:$r,numOctaves:gd};function Au(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(ep(f)){s[f]=h;continue}const g=np[f],v=Zx(h,g);if(In.has(f)){if(l=!0,o[f]=v,!d)continue;h!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=v):i[f]=v}if(t.transform||(l||r?i.transform=Xx(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:g=0}=a;i.transformOrigin=`${f} ${h} ${g}`}}const Mu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rp(e,t,n){for(const r in t)!Ae(t[r])&&!Zm(r,n)&&(e[r]=t[r])}function n1({transformTemplate:e},t,n){return k.useMemo(()=>{const r=Mu();return Au(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function r1(e,t,n){const r=e.style||{},i={};return rp(i,r,e),Object.assign(i,n1(e,t,n)),e.transformValues?e.transformValues(i):i}function i1(e,t,n){const r={},i=r1(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const s1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _s(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||s1.has(e)}let ip=e=>!_s(e);function o1(e){e&&(ip=t=>t.startsWith("on")?!_s(t):e(t))}try{o1(require("@emotion/is-prop-valid").default)}catch{}function a1(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ip(i)||n===!0&&_s(i)||!t&&!_s(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function yd(e,t,n){return typeof e=="string"?e:D.transform(t+n*e)}function l1(e,t,n){const r=yd(t,e.x,e.width),i=yd(n,e.y,e.height);return`${r} ${i}`}const u1={offset:"stroke-dashoffset",array:"stroke-dasharray"},c1={offset:"strokeDashoffset",array:"strokeDasharray"};function d1(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?u1:c1;e[s.offset]=D.transform(-r);const o=D.transform(t),a=D.transform(n);e[s.array]=`${o} ${a}`}function Ru(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},d,f,h){if(Au(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=l1(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&d1(g,o,a,l,!1)}const sp=()=>({...Mu(),attrs:{}}),Lu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function f1(e,t,n,r){const i=k.useMemo(()=>{const s=sp();return Ru(s,t,{enableHardwareAcceleration:!1},Lu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};rp(s,e.style,e),i.style={...s,...i.style}}return i}function h1(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Iu(n)?f1:i1)(r,s,o,n),d={...a1(r,typeof n=="string",e),...l,ref:i},{children:f}=r,h=k.useMemo(()=>Ae(f)?f.get():f,[f]);return k.createElement(n,{...d,children:h})}}function op(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const ap=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function lp(e,t,n,r){op(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ap.has(i)?i:Cu(i),t.attrs[i])}function bu(e,t){const{style:n}=e,r={};for(const i in n)(Ae(n[i])||t.style&&Ae(t.style[i])||Zm(i,e))&&(r[i]=n[i]);return r}function up(e,t){const n=bu(e,t);for(const r in e)if(Ae(e[r])||Ae(t[r])){const i=Ci.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Du(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function cp(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const zs=e=>Array.isArray(e),m1=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),p1=e=>zs(e)?e[e.length-1]||0:e;function us(e){const t=Ae(e)?e.get():e;return m1(t)?t.toValue():t}function g1({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:y1(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const dp=e=>(t,n)=>{const r=k.useContext(mo),i=k.useContext(po),s=()=>g1(e,t,r,i);return n?s():cp(s)};function y1(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=us(s[h]);let{initial:o,animate:a}=e;const l=vo(e),u=Xm(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;return f&&typeof f!="boolean"&&!yo(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const v=Du(e,g);if(!v)return;const{transitionEnd:x,transition:S,...y}=v;for(const m in y){let p=y[m];if(Array.isArray(p)){const w=d?p.length-1:0;p=p[w]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}),i}const se=e=>e;class vd{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function v1(e){let t=new vd,n=new vd,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&o.add(l),h.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),o.has(d)&&(a.schedule(d),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const Yi=["prepare","read","update","preRender","render","postRender"],x1=40;function w1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=Yi.reduce((f,h)=>(f[h]=v1(()=>n=!0),f),{}),o=f=>s[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,x1),1),i.timestamp=f,i.isProcessing=!0,Yi.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Yi.reduce((f,h)=>{const g=s[h];return f[h]=(v,x=!1,S=!1)=>(n||l(),g.schedule(v,x,S)),f},{}),cancel:f=>Yi.forEach(h=>s[h].cancel(f)),state:i,steps:s}}const{schedule:G,cancel:kt,state:ye,steps:Zo}=w1(typeof requestAnimationFrame<"u"?requestAnimationFrame:se,!0),k1={useVisualState:dp({scrapeMotionValuesFromProps:up,createRenderState:sp,onMount:(e,t,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{Ru(n,r,{enableHardwareAcceleration:!1},Lu(t.tagName),e.transformTemplate),lp(t,n)})}})},S1={useVisualState:dp({scrapeMotionValuesFromProps:bu,createRenderState:Mu})};function E1(e,{forwardMotionProps:t=!1},n,r){return{...Iu(e)?k1:S1,preloadedFeatures:n,useRender:h1(t),createVisualElement:r,Component:e}}function ht(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const fp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function wo(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const T1=e=>t=>fp(t)&&e(t,wo(t));function pt(e,t,n,r){return ht(e,t,T1(n),r)}const C1=(e,t)=>n=>t(e(n)),Gt=(...e)=>e.reduce(C1);function hp(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const xd=hp("dragHorizontal"),wd=hp("dragVertical");function mp(e){let t=!1;if(e==="y")t=wd();else if(e==="x")t=xd();else{const n=xd(),r=wd();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function pp(){const e=mp(!0);return e?(e(),!1):!0}class en{constructor(t){this.isMounted=!1,this.node=t}update(){}}function kd(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||pp())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&G.update(()=>a[r](s,o))};return pt(e.current,n,i,{passive:!e.getProps()[r]})}class P1 extends en{mount(){this.unmount=Gt(kd(this.node,!0),kd(this.node,!1))}unmount(){}}class j1 extends en{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gt(ht(this.node.current,"focus",()=>this.onFocus()),ht(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gp=(e,t)=>t?e===t?!0:gp(e,t.parentElement):!1;function Jo(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,wo(n))}class N1 extends en{constructor(){super(...arguments),this.removeStartListeners=se,this.removeEndListeners=se,this.removeAccessibleListeners=se,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=pt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();G.update(()=>{!f&&!gp(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=pt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Gt(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Jo("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&G.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=ht(this.node.current,"keyup",o),Jo("down",(a,l)=>{this.startPress(a,l)})},n=ht(this.node.current,"keydown",t),r=()=>{this.isPressing&&Jo("cancel",(s,o)=>this.cancelPress(s,o))},i=ht(this.node.current,"blur",r);this.removeAccessibleListeners=Gt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&G.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!pp()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&G.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=pt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=ht(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Gt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const fl=new WeakMap,ea=new WeakMap,I1=e=>{const t=fl.get(e.target);t&&t(e)},A1=e=>{e.forEach(I1)};function M1({root:e,...t}){const n=e||document;ea.has(n)||ea.set(n,{});const r=ea.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(A1,{root:e,...t})),r[i]}function R1(e,t,n){const r=M1(t);return fl.set(e,n),r.observe(e),()=>{fl.delete(e),r.unobserve(e)}}const L1={some:0,all:1};class b1 extends en{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:L1[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return R1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(D1(t,n))&&this.startObserver()}unmount(){}}function D1({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const V1={inView:{Feature:b1},tap:{Feature:N1},focus:{Feature:j1},hover:{Feature:P1}};function yp(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function O1(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function _1(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ko(e,t,n){const r=e.getProps();return Du(r,t,n!==void 0?n:r.custom,O1(e),_1(e))}let Vu=se;const vn=e=>e*1e3,gt=e=>e/1e3,z1={current:!1},vp=e=>Array.isArray(e)&&typeof e[0]=="number";function xp(e){return!!(!e||typeof e=="string"&&wp[e]||vp(e)||Array.isArray(e)&&e.every(xp))}const br=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,wp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:br([0,.65,.55,1]),circOut:br([.55,0,1,.45]),backIn:br([.31,.01,.66,-.59]),backOut:br([.33,1.53,.69,.99])};function kp(e){if(e)return vp(e)?br(e):Array.isArray(e)?e.map(kp):wp[e]}function F1(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=kp(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function B1(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Sp=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,U1=1e-7,W1=12;function $1(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Sp(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>U1&&++a<W1);return o}function Ni(e,t,n,r){if(e===t&&n===r)return se;const i=s=>$1(s,0,1,e,n);return s=>s===0||s===1?s:Sp(i(s),t,r)}const H1=Ni(.42,0,1,1),G1=Ni(0,0,.58,1),Ep=Ni(.42,0,.58,1),K1=e=>Array.isArray(e)&&typeof e[0]!="number",Tp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Cp=e=>t=>1-e(1-t),Ou=e=>1-Math.sin(Math.acos(e)),Pp=Cp(Ou),Y1=Tp(Ou),jp=Ni(.33,1.53,.69,.99),_u=Cp(jp),Q1=Tp(_u),X1=e=>(e*=2)<1?.5*_u(e):.5*(2-Math.pow(2,-10*(e-1))),q1={linear:se,easeIn:H1,easeInOut:Ep,easeOut:G1,circIn:Ou,circInOut:Y1,circOut:Pp,backIn:_u,backInOut:Q1,backOut:jp,anticipate:X1},Sd=e=>{if(Array.isArray(e)){Vu(e.length===4);const[t,n,r,i]=e;return Ni(t,n,r,i)}else if(typeof e=="string")return q1[e];return e},zu=(e,t)=>n=>!!(Pi(n)&&Jx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Np=(e,t,n)=>r=>{if(!Pi(r))return r;const[i,s,o,a]=r.match(xo);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Z1=e=>Qt(0,255,e),ta={...An,transform:e=>Math.round(Z1(e))},pn={test:zu("rgb","red"),parse:Np("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ta.transform(e)+", "+ta.transform(t)+", "+ta.transform(n)+", "+Hr($r.transform(r))+")"};function J1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const hl={test:zu("#"),parse:J1,transform:pn.transform},Gn={test:zu("hsl","hue"),parse:Np("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+lt.transform(Hr(t))+", "+lt.transform(Hr(n))+", "+Hr($r.transform(r))+")"},we={test:e=>pn.test(e)||hl.test(e)||Gn.test(e),parse:e=>pn.test(e)?pn.parse(e):Gn.test(e)?Gn.parse(e):hl.parse(e),transform:e=>Pi(e)?e:e.hasOwnProperty("red")?pn.transform(e):Gn.transform(e)},Z=(e,t,n)=>-n*e+n*t+e;function na(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ew({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=na(l,a,e+1/3),s=na(l,a,e),o=na(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const ra=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},tw=[hl,pn,Gn],nw=e=>tw.find(t=>t.test(e));function Ed(e){const t=nw(e);let n=t.parse(e);return t===Gn&&(n=ew(n)),n}const Ip=(e,t)=>{const n=Ed(e),r=Ed(t),i={...n};return s=>(i.red=ra(n.red,r.red,s),i.green=ra(n.green,r.green,s),i.blue=ra(n.blue,r.blue,s),i.alpha=Z(n.alpha,r.alpha,s),pn.transform(i))};function rw(e){var t,n;return isNaN(e)&&Pi(e)&&(((t=e.match(xo))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(tp))===null||n===void 0?void 0:n.length)||0)>0}const Ap={regex:qx,countKey:"Vars",token:"${v}",parse:se},Mp={regex:tp,countKey:"Colors",token:"${c}",parse:we.parse},Rp={regex:xo,countKey:"Numbers",token:"${n}",parse:An.parse};function ia(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function Fs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ia(n,Ap),ia(n,Mp),ia(n,Rp),n}function Lp(e){return Fs(e).values}function bp(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Fs(e),s=t.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(Ap.token,o[l]):l<r+n?a=a.replace(Mp.token,we.transform(o[l])):a=a.replace(Rp.token,Hr(o[l]));return a}}const iw=e=>typeof e=="number"?0:e;function sw(e){const t=Lp(e);return bp(e)(t.map(iw))}const Xt={test:rw,parse:Lp,createTransformer:bp,getAnimatableNone:sw},Dp=(e,t)=>n=>`${n>0?t:e}`;function Vp(e,t){return typeof e=="number"?n=>Z(e,t,n):we.test(e)?Ip(e,t):e.startsWith("var(")?Dp(e,t):_p(e,t)}const Op=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>Vp(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},ow=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vp(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},_p=(e,t)=>{const n=Xt.createTransformer(t),r=Fs(e),i=Fs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Gt(Op(r.values,i.values),n):Dp(e,t)},gi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Td=(e,t)=>n=>Z(e,t,n);function aw(e){return typeof e=="number"?Td:typeof e=="string"?we.test(e)?Ip:_p:Array.isArray(e)?Op:typeof e=="object"?ow:Td}function lw(e,t,n){const r=[],i=n||aw(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||se:t;a=Gt(l,a)}r.push(a)}return r}function zp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Vu(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=lw(t,r,i),a=o.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=gi(e[d],e[d+1],u);return o[d](f)};return n?u=>l(Qt(e[0],e[s-1],u)):l}function uw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=gi(0,t,r);e.push(Z(n,1,i))}}function cw(e){const t=[0];return uw(t,e.length-1),t}function dw(e,t){return e.map(n=>n*t)}function fw(e,t){return e.map(()=>t||Ep).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=K1(r)?r.map(Sd):Sd(r),s={done:!1,value:t[0]},o=dw(n&&n.length===t.length?n:cw(t),e),a=zp(o,t,{ease:Array.isArray(i)?i:fw(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function Fp(e,t){return t?e*(1e3/t):0}const hw=5;function Bp(e,t,n){const r=Math.max(t-hw,0);return Fp(n-e(r),t-r)}const sa=.001,mw=.01,pw=10,gw=.05,yw=1;function vw({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Qt(gw,yw,o),e=Qt(mw,pw,gt(e)),o<1?(i=u=>{const d=u*o,f=d*e,h=d-n,g=ml(u,o),v=Math.exp(-f);return sa-h/g*v},s=u=>{const f=u*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-f),x=ml(Math.pow(u,2),o);return(-i(u)+sa>0?-1:1)*((h-g)*v)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-sa+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=ww(i,s,a);if(e=vn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const xw=12;function ww(e,t,n){let r=n;for(let i=1;i<xw;i++)r=r-e(r)/t(r);return r}function ml(e,t){return e*Math.sqrt(1-t*t)}const kw=["duration","bounce"],Sw=["stiffness","damping","mass"];function Cd(e,t){return t.some(n=>e[n]!==void 0)}function Ew(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Cd(e,Sw)&&Cd(e,kw)){const n=vw(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Up({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=Ew({...r,velocity:-gt(r.velocity||0)}),g=f||0,v=l/(2*Math.sqrt(a*u)),x=s-i,S=gt(Math.sqrt(a/u)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(v<1){const p=ml(S,v);m=w=>{const T=Math.exp(-v*S*w);return s-T*((g+v*S*x)/p*Math.sin(p*w)+x*Math.cos(p*w))}}else if(v===1)m=p=>s-Math.exp(-S*p)*(x+(g+S*x)*p);else{const p=S*Math.sqrt(v*v-1);m=w=>{const T=Math.exp(-v*S*w),j=Math.min(p*w,300);return s-T*((g+v*S*x)*Math.sinh(j)+p*x*Math.cosh(j))/p}}return{calculatedDuration:h&&d||null,next:p=>{const w=m(p);if(h)o.done=p>=d;else{let T=g;p!==0&&(v<1?T=Bp(m,p,w):T=0);const j=Math.abs(T)<=n,C=Math.abs(s-w)<=t;o.done=j&&C}return o.value=o.done?s:w,o}}}function Pd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},g=E=>a!==void 0&&E<a||l!==void 0&&E>l,v=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const S=f+x,y=o===void 0?S:o(S);y!==S&&(x=y-f);const m=E=>-x*Math.exp(-E/r),p=E=>y+m(E),w=E=>{const I=m(E),P=p(E);h.done=Math.abs(I)<=u,h.value=h.done?y:P};let T,j;const C=E=>{g(h.value)&&(T=E,j=Up({keyframes:[h.value,v(h.value)],velocity:Bp(p,E,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:E=>{let I=!1;return!j&&T===void 0&&(I=!0,w(E),C(E)),T!==void 0&&E>T?j.next(E-T):(!I&&w(E),h)}}}const Tw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>G.update(t,!0),stop:()=>kt(t),now:()=>ye.isProcessing?ye.timestamp:performance.now()}},jd=2e4;function Nd(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<jd;)t+=n,r=e.next(t);return t>=jd?1/0:t}const Cw={decay:Pd,inertia:Pd,tween:Bs,keyframes:Bs,spring:Up};function Us({autoplay:e=!0,delay:t=0,driver:n=Tw,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...h}){let g=1,v=!1,x,S;const y=()=>{S=new Promise(O=>{x=O})};y();let m;const p=Cw[i]||Bs;let w;p!==Bs&&typeof r[0]!="number"&&(w=zp([0,100],r,{clamp:!1}),r=[0,100]);const T=p({...h,keyframes:r});let j;a==="mirror"&&(j=p({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let C="idle",E=null,I=null,P=null;T.calculatedDuration===null&&s&&(T.calculatedDuration=Nd(T));const{calculatedDuration:L}=T;let B=1/0,b=1/0;L!==null&&(B=L+o,b=B*(s+1)-o);let $=0;const Pt=O=>{if(I===null)return;g>0&&(I=Math.min(I,O)),g<0&&(I=Math.min(O-b/g,I)),E!==null?$=E:$=Math.round(O-I)*g;const Q=$-t*(g>=0?1:-1),tn=g>=0?Q<0:Q>b;$=Math.max(Q,0),C==="finished"&&E===null&&($=b);let tt=$,Mn=T;if(s){const Eo=Math.min($,b)/B;let Ii=Math.floor(Eo),rn=Eo%1;!rn&&Eo>=1&&(rn=1),rn===1&&Ii--,Ii=Math.min(Ii,s+1),!!(Ii%2)&&(a==="reverse"?(rn=1-rn,o&&(rn-=o/B)):a==="mirror"&&(Mn=j)),tt=Qt(0,1,rn)*B}const Me=tn?{done:!1,value:r[0]}:Mn.next(tt);w&&(Me.value=w(Me.value));let{done:nn}=Me;!tn&&L!==null&&(nn=g>=0?$>=b:$<=0);const kg=E===null&&(C==="finished"||C==="running"&&nn);return f&&f(Me.value),kg&&A(),Me},re=()=>{m&&m.stop(),m=void 0},ze=()=>{C="idle",re(),x(),y(),I=P=null},A=()=>{C="finished",d&&d(),re(),x()},V=()=>{if(v)return;m||(m=n(Pt));const O=m.now();l&&l(),E!==null?I=O-E:(!I||C==="finished")&&(I=O),C==="finished"&&y(),P=I,E=null,C="running",m.start()};e&&V();const _={then(O,Q){return S.then(O,Q)},get time(){return gt($)},set time(O){O=vn(O),$=O,E!==null||!m||g===0?E=O:I=m.now()-O/g},get duration(){const O=T.calculatedDuration===null?Nd(T):T.calculatedDuration;return gt(O)},get speed(){return g},set speed(O){O===g||!m||(g=O,_.time=gt($))},get state(){return C},play:V,pause:()=>{C="paused",E=$},stop:()=>{v=!0,C!=="idle"&&(C="idle",u&&u(),ze())},cancel:()=>{P!==null&&Pt(P),ze()},complete:()=>{C="finished"},sample:O=>(I=0,Pt(O))};return _}function Pw(e){let t;return()=>(t===void 0&&(t=e()),t)}const jw=Pw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Nw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qi=10,Iw=2e4,Aw=(e,t)=>t.type==="spring"||e==="backgroundColor"||!xp(t.ease);function Mw(e,t,{onUpdate:n,onComplete:r,...i}){if(!(jw()&&Nw.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const d=()=>{l=new Promise(p=>{a=p})};d();let{keyframes:f,duration:h=300,ease:g,times:v}=i;if(Aw(t,i)){const p=Us({...i,repeat:0,delay:0});let w={done:!1,value:f[0]};const T=[];let j=0;for(;!w.done&&j<Iw;)w=p.sample(j),T.push(w.value),j+=Qi;v=void 0,f=T,h=j-Qi,g="linear"}const x=F1(e.owner.current,t,f,{...i,duration:h,ease:g,times:v}),S=()=>{u=!1,x.cancel()},y=()=>{u=!0,G.update(S),a(),d()};return x.onfinish=()=>{u||(e.set(B1(f,i)),r&&r(),y())},{then(p,w){return l.then(p,w)},attachTimeline(p){return x.timeline=p,x.onfinish=null,se},get time(){return gt(x.currentTime||0)},set time(p){x.currentTime=vn(p)},get speed(){return x.playbackRate},set speed(p){x.playbackRate=p},get duration(){return gt(h)},play:()=>{o||(x.play(),kt(S))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:p}=x;if(p){const w=Us({...i,autoplay:!1});e.setWithVelocity(w.sample(p-Qi).value,w.sample(p).value,Qi)}y()},complete:()=>{u||x.finish()},cancel:y}}function Rw({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:se,pause:se,stop:se,then:s=>(s(),Promise.resolve()),cancel:se,complete:se});return t?Us({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Lw={type:"spring",stiffness:500,damping:25,restSpeed:10},bw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Dw={type:"keyframes",duration:.8},Vw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ow=(e,{keyframes:t})=>t.length>2?Dw:In.has(e)?e.startsWith("scale")?bw(t[1]):Lw:Vw,pl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Xt.test(t)||t==="0")&&!t.startsWith("url(")),_w=new Set(["brightness","contrast","saturate","opacity"]);function zw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(xo)||[];if(!r)return e;const i=n.replace(r,"");let s=_w.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Fw=/([a-z-]*)\(.*?\)/g,gl={...Xt,getAnimatableNone:e=>{const t=e.match(Fw);return t?t.map(zw).join(" "):e}},Bw={...np,color:we,backgroundColor:we,outlineColor:we,fill:we,stroke:we,borderColor:we,borderTopColor:we,borderRightColor:we,borderBottomColor:we,borderLeftColor:we,filter:gl,WebkitFilter:gl},Fu=e=>Bw[e];function Wp(e,t){let n=Fu(e);return n!==gl&&(n=Xt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const $p=e=>/^0[^.\s]+$/.test(e);function Uw(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||$p(e)}function Ww(e,t,n,r){const i=pl(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),Uw(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];s[d]=Wp(t,a)}return s}function $w({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Bu(e,t){return e[t]||e.default||e}const Hw={skipAnimations:!1},Uu=(e,t,n,r={})=>i=>{const s=Bu(r,e)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-vn(o);const l=Ww(t,e,n,s),u=l[0],d=l[l.length-1],f=pl(e,u),h=pl(e,d);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if($w(s)||(g={...g,...Ow(e,g)}),g.duration&&(g.duration=vn(g.duration)),g.repeatDelay&&(g.repeatDelay=vn(g.repeatDelay)),!f||!h||z1.current||s.type===!1||Hw.skipAnimations)return Rw(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Mw(t,e,g);if(v)return v}return Us(g)};function Ws(e){return!!(Ae(e)&&e.add)}const Hp=e=>/^\-?\d*\.?\d+$/.test(e);function Wu(e,t){e.indexOf(t)===-1&&e.push(t)}function $u(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Hu{constructor(){this.subscriptions=[]}add(t){return Wu(this.subscriptions,t),()=>$u(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gw=e=>!isNaN(parseFloat(e));class Kw{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=ye;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,G.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>G.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Gw(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hu);const r=this.events[t].add(n);return t==="change"?()=>{r(),G.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Fp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fr(e,t){return new Kw(e,t)}const Gp=e=>t=>t.test(e),Yw={test:e=>e==="auto",parse:e=>e},Kp=[An,D,lt,Nt,t1,e1,Yw],Nr=e=>Kp.find(Gp(e)),Qw=[...Kp,we,Xt],Xw=e=>Qw.find(Gp(e));function qw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,fr(n))}function Zw(e,t){const n=ko(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=p1(s[o]);qw(e,o,a)}}function Jw(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Hp(d)||$p(d))?d=parseFloat(d):!Xw(d)&&Xt.test(u)&&(d=Wp(l,u)),e.addValue(l,fr(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function ek(e,t){return t?(t[e]||t.default||t).from:void 0}function tk(e,t,n){const r={};for(const i in e){const s=ek(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function nk({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function rk(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Yp(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),g=a[f];if(!h||g===void 0||d&&nk(d,f))continue;const v={delay:n,elapsed:0,...Bu(s||{},f)};if(window.HandoffAppearAnimations){const y=e.getProps()[Qm];if(y){const m=window.HandoffAppearAnimations(y,f,h,G);m!==null&&(v.elapsed=m,v.isHandoff=!0)}}let x=!v.isHandoff&&!rk(h,g);if(v.type==="spring"&&(h.getVelocity()||v.velocity)&&(x=!1),h.animation&&(x=!1),x)continue;h.start(Uu(f,h,g,e.shouldReduceMotion&&In.has(f)?{type:!1}:v));const S=h.animation;Ws(l)&&(l.add(f),S.then(()=>l.remove(f))),u.push(S)}return o&&Promise.all(u).then(()=>{o&&Zw(e,o)}),u}function yl(e,t,n={}){const r=ko(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Yp(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return ik(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function ik(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(sk).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(yl(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function sk(e,t){return e.sortNodePosition(t)}function ok(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>yl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=yl(e,t,n);else{const i=typeof t=="function"?ko(e,t,n.custom):t;r=Promise.all(Yp(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const ak=[...Pu].reverse(),lk=Pu.length;function uk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>ok(e,n,r)))}function ck(e){let t=uk(e);const n=fk();let r=!0;const i=(l,u)=>{const d=ko(e,u);if(d){const{transition:f,transitionEnd:h,...g}=d;l={...l,...g,...h}}return l};function s(l){t=l(e)}function o(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],g=new Set;let v={},x=1/0;for(let y=0;y<lk;y++){const m=ak[y],p=n[m],w=d[m]!==void 0?d[m]:f[m],T=mi(w),j=m===u?p.isActive:null;j===!1&&(x=y);let C=w===f[m]&&w!==d[m]&&T;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),p.protectedKeys={...v},!p.isActive&&j===null||!w&&!p.prevProp||yo(w)||typeof w=="boolean")continue;let I=dk(p.prevProp,w)||m===u&&p.isActive&&!C&&T||y>x&&T,P=!1;const L=Array.isArray(w)?w:[w];let B=L.reduce(i,{});j===!1&&(B={});const{prevResolvedValues:b={}}=p,$={...b,...B},Pt=re=>{I=!0,g.has(re)&&(P=!0,g.delete(re)),p.needsAnimating[re]=!0};for(const re in $){const ze=B[re],A=b[re];if(v.hasOwnProperty(re))continue;let V=!1;zs(ze)&&zs(A)?V=!yp(ze,A):V=ze!==A,V?ze!==void 0?Pt(re):g.add(re):ze!==void 0&&g.has(re)?Pt(re):p.protectedKeys[re]=!0}p.prevProp=w,p.prevResolvedValues=B,p.isActive&&(v={...v,...B}),r&&e.blockInitialAnimation&&(I=!1),I&&(!C||P)&&h.push(...L.map(re=>({animation:re,options:{type:m,...l}})))}if(g.size){const y={};g.forEach(m=>{const p=e.getBaseTarget(m);p!==void 0&&(y[m]=p)}),h.push({animation:y})}let S=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(h):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const h=o(d,l);for(const g in n)n[g].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function dk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!yp(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fk(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}class hk extends en{constructor(t){super(t),t.animationState||(t.animationState=ck(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),yo(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let mk=0;class pk extends en{constructor(){super(...arguments),this.id=mk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const gk={animation:{Feature:hk},exit:{Feature:pk}},Id=(e,t)=>Math.abs(e-t);function yk(e,t){const n=Id(e.x,t.x),r=Id(e.y,t.y);return Math.sqrt(n**2+r**2)}class Qp{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=aa(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,g=yk(f.offset,{x:0,y:0})>=3;if(!h&&!g)return;const{point:v}=f,{timestamp:x}=ye;this.history.push({...v,timestamp:x});const{onStart:S,onMove:y}=this.handlers;h||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=oa(h,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=aa(f.type==="pointercancel"?this.lastMoveEventInfo:oa(h,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,S),v&&v(f,S)},!fp(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=wo(t),a=oa(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=ye;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,aa(a,this.history)),this.removeListeners=Gt(pt(this.contextWindow,"pointermove",this.handlePointerMove),pt(this.contextWindow,"pointerup",this.handlePointerUp),pt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),kt(this.updatePoint)}}function oa(e,t){return t?{point:t(e.point)}:e}function Ad(e,t){return{x:e.x-t.x,y:e.y-t.y}}function aa({point:e},t){return{point:e,delta:Ad(e,Xp(t)),offset:Ad(e,vk(t)),velocity:xk(t,.1)}}function vk(e){return e[0]}function Xp(e){return e[e.length-1]}function xk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Xp(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vn(t)));)n--;if(!r)return{x:0,y:0};const s=gt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ve(e){return e.max-e.min}function vl(e,t=0,n=.01){return Math.abs(e-t)<=n}function Md(e,t,n,r=.5){e.origin=r,e.originPoint=Z(t.min,t.max,e.origin),e.scale=Ve(n)/Ve(t),(vl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Z(n.min,n.max,e.origin)-e.originPoint,(vl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Gr(e,t,n,r){Md(e.x,t.x,n.x,r?r.originX:void 0),Md(e.y,t.y,n.y,r?r.originY:void 0)}function Rd(e,t,n){e.min=n.min+t.min,e.max=e.min+Ve(t)}function wk(e,t,n){Rd(e.x,t.x,n.x),Rd(e.y,t.y,n.y)}function Ld(e,t,n){e.min=t.min-n.min,e.max=e.min+Ve(t)}function Kr(e,t,n){Ld(e.x,t.x,n.x),Ld(e.y,t.y,n.y)}function kk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Z(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Z(n,e,r.max):Math.min(e,n)),e}function bd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Sk(e,{top:t,left:n,bottom:r,right:i}){return{x:bd(e.x,n,i),y:bd(e.y,t,r)}}function Dd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ek(e,t){return{x:Dd(e.x,t.x),y:Dd(e.y,t.y)}}function Tk(e,t){let n=.5;const r=Ve(e),i=Ve(t);return i>r?n=gi(t.min,t.max-r,e.min):r>i&&(n=gi(e.min,e.max-i,t.min)),Qt(0,1,n)}function Ck(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const xl=.35;function Pk(e=xl){return e===!1?e=0:e===!0&&(e=xl),{x:Vd(e,"left","right"),y:Vd(e,"top","bottom")}}function Vd(e,t,n){return{min:Od(e,t),max:Od(e,n)}}function Od(e,t){return typeof e=="number"?e:e[t]||0}const _d=()=>({translate:0,scale:1,origin:0,originPoint:0}),Kn=()=>({x:_d(),y:_d()}),zd=()=>({min:0,max:0}),oe=()=>({x:zd(),y:zd()});function Be(e){return[e("x"),e("y")]}function qp({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function jk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Nk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function la(e){return e===void 0||e===1}function wl({scale:e,scaleX:t,scaleY:n}){return!la(e)||!la(t)||!la(n)}function ln(e){return wl(e)||Zp(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Zp(e){return Fd(e.x)||Fd(e.y)}function Fd(e){return e&&e!=="0%"}function $s(e,t,n){const r=e-n,i=t*r;return n+i}function Bd(e,t,n,r,i){return i!==void 0&&(e=$s(e,i,r)),$s(e,n,r)+t}function kl(e,t=0,n=1,r,i){e.min=Bd(e.min,t,n,r,i),e.max=Bd(e.max,t,n,r,i)}function Jp(e,{x:t,y:n}){kl(e.x,t.translate,t.scale,t.originPoint),kl(e.y,n.translate,n.scale,n.originPoint)}function Ik(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Yn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Jp(e,o)),r&&ln(s.latestValues)&&Yn(e,s.latestValues))}t.x=Ud(t.x),t.y=Ud(t.y)}function Ud(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Mt(e,t){e.min=e.min+t,e.max=e.max+t}function Wd(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=Z(e.min,e.max,s);kl(e,t[n],t[r],o,t.scale)}const Ak=["x","scaleX","originX"],Mk=["y","scaleY","originY"];function Yn(e,t){Wd(e.x,t,Ak),Wd(e.y,t,Mk)}function eg(e,t){return qp(Nk(e.getBoundingClientRect(),t))}function Rk(e,t,n){const r=eg(e,n),{scroll:i}=t;return i&&(Mt(r.x,i.offset.x),Mt(r.y,i.offset.y)),r}const tg=({current:e})=>e?e.ownerDocument.defaultView:null,Lk=new WeakMap;class bk{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(wo(d,"page").point)},s=(d,f)=>{const{drag:h,dragPropagation:g,onDragStart:v}=this.getProps();if(h&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=mp(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Be(S=>{let y=this.getAxisMotionValue(S).get()||0;if(lt.test(y)){const{projection:m}=this.visualElement;if(m&&m.layout){const p=m.layout.layoutBox[S];p&&(y=Ve(p)*(parseFloat(y)/100))}}this.originPoint[S]=y}),v&&G.update(()=>v(d,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:h,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:S}=f;if(g&&this.currentDirection===null){this.currentDirection=Dk(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),x&&x(d,f)},a=(d,f)=>this.stop(d,f),l=()=>Be(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Qp(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:tg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&G.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Xi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=kk(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Hn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Sk(i.layoutBox,n):this.constraints=!1,this.elastic=Pk(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Be(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Ck(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Hn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Rk(r,i.root,this.visualElement.getTransformPagePoint());let o=Ek(i.layout.layoutBox,s);if(n){const a=n(jk(o));this.hasMutatedConstraints=!!a,a&&(o=qp(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Be(d=>{if(!Xi(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Uu(t,r,0,n))}stopAnimation(){Be(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Be(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Be(n=>{const{drag:r}=this.getProps();if(!Xi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-Z(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Hn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Be(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=Tk({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Be(o=>{if(!Xi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Z(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;Lk.set(this.visualElement,this);const t=this.visualElement.current,n=pt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Hn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=ht(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Be(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=xl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Xi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Dk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Vk extends en{constructor(t){super(t),this.removeGroupControls=se,this.removeListeners=se,this.controls=new bk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}unmount(){this.removeGroupControls(),this.removeListeners()}}const $d=e=>(t,n)=>{e&&G.update(()=>e(t,n))};class Ok extends en{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(t){this.session=new Qp(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$d(t),onStart:$d(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&G.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=pt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function _k(){const e=k.useContext(po);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=k.useId();return k.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ir={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=Hd(e,t.target.x),r=Hd(e,t.target.y);return`${n}% ${r}%`}},zk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Xt.parse(e);if(i.length>5)return r;const s=Xt.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=Z(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class Fk extends wi.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Kx(Bk),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||G.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ng(e){const[t,n]=_k(),r=k.useContext(Nu);return wi.createElement(Fk,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(qm),isPresent:t,safeToRemove:n})}const Bk={borderRadius:{...Ir,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ir,borderTopRightRadius:Ir,borderBottomLeftRadius:Ir,borderBottomRightRadius:Ir,boxShadow:zk},rg=["TopLeft","TopRight","BottomLeft","BottomRight"],Uk=rg.length,Gd=e=>typeof e=="string"?parseFloat(e):e,Kd=e=>typeof e=="number"||D.test(e);function Wk(e,t,n,r,i,s){i?(e.opacity=Z(0,n.opacity!==void 0?n.opacity:1,$k(r)),e.opacityExit=Z(t.opacity!==void 0?t.opacity:1,0,Hk(r))):s&&(e.opacity=Z(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<Uk;o++){const a=`border${rg[o]}Radius`;let l=Yd(t,a),u=Yd(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Kd(l)===Kd(u)?(e[a]=Math.max(Z(Gd(l),Gd(u),r),0),(lt.test(u)||lt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Z(t.rotate||0,n.rotate||0,r))}function Yd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const $k=ig(0,.5,Pp),Hk=ig(.5,.95,se);function ig(e,t,n){return r=>r<e?0:r>t?1:n(gi(e,t,r))}function Qd(e,t){e.min=t.min,e.max=t.max}function Fe(e,t){Qd(e.x,t.x),Qd(e.y,t.y)}function Xd(e,t,n,r,i){return e-=t,e=$s(e,1/n,r),i!==void 0&&(e=$s(e,1/i,r)),e}function Gk(e,t=0,n=1,r=.5,i,s=e,o=e){if(lt.test(t)&&(t=parseFloat(t),t=Z(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Z(s.min,s.max,r);e===s&&(a-=t),e.min=Xd(e.min,t,n,a,i),e.max=Xd(e.max,t,n,a,i)}function qd(e,t,[n,r,i],s,o){Gk(e,t[n],t[r],t[i],t.scale,s,o)}const Kk=["x","scaleX","originX"],Yk=["y","scaleY","originY"];function Zd(e,t,n,r){qd(e.x,t,Kk,n?n.x:void 0,r?r.x:void 0),qd(e.y,t,Yk,n?n.y:void 0,r?r.y:void 0)}function Jd(e){return e.translate===0&&e.scale===1}function sg(e){return Jd(e.x)&&Jd(e.y)}function Qk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function og(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function ef(e){return Ve(e.x)/Ve(e.y)}class Xk{constructor(){this.members=[]}add(t){Wu(this.members,t),t.scheduleRender()}remove(t){if($u(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function tf(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const qk=(e,t)=>e.depth-t.depth;class Zk{constructor(){this.children=[],this.isDirty=!1}add(t){Wu(this.children,t),this.isDirty=!0}remove(t){$u(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(qk),this.isDirty=!1,this.children.forEach(t)}}function Jk(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(kt(r),e(s-t))};return G.read(r,!0),()=>kt(r)}function eS(e){window.MotionDebug&&window.MotionDebug.record(e)}function tS(e){return e instanceof SVGElement&&e.tagName!=="svg"}function nS(e,t,n){const r=Ae(e)?e:fr(e);return r.start(Uu("",r,t,n)),r.animation}const nf=["","X","Y","Z"],rS={visibility:"hidden"},rf=1e3;let iS=0;const un={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ag({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=iS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,un.totalNodes=un.resolvedTargetDeltas=un.recalculatedProjection=0,this.nodes.forEach(aS),this.nodes.forEach(fS),this.nodes.forEach(hS),this.nodes.forEach(lS),eS(un)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Zk)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tS(o),this.instance=o;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Jk(h,250),cs.hasAnimatedSinceResize&&(cs.hasAnimatedSinceResize=!1,this.nodes.forEach(of))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||vS,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=d.getProps(),m=!this.targetLayout||!og(this.targetLayout,v)||g,p=!h&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,p);const w={...Bu(x,"layout"),onPlay:S,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else h||of(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sf);return}this.isUpdating||this.nodes.forEach(cS),this.isUpdating=!1,this.nodes.forEach(dS),this.nodes.forEach(sS),this.nodes.forEach(oS),this.clearAllSnapshots();const a=performance.now();ye.delta=Qt(0,1e3/60,a-ye.timestamp),ye.timestamp=a,ye.isProcessing=!0,Zo.update.process(ye),Zo.preRender.process(ye),Zo.render.process(ye),ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(uS),this.sharedNodes.forEach(pS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!sg(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(a||ln(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),xS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return oe();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Mt(a.x,l.offset.x),Mt(a.y,l.offset.y)),a}removeElementScroll(o){const a=oe();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){Fe(a,o);const{scroll:h}=this.root;h&&(Mt(a.x,-h.offset.x),Mt(a.y,-h.offset.y))}Mt(a.x,d.offset.x),Mt(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const l=oe();Fe(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Yn(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),ln(d.latestValues)&&Yn(l,d.latestValues)}return ln(this.latestValues)&&Yn(l,this.latestValues),l}removeTransform(o){const a=oe();Fe(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ln(u.latestValues))continue;wl(u.latestValues)&&u.updateSnapshot();const d=oe(),f=u.measurePageBox();Fe(d,f),Zd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return ln(this.latestValues)&&Zd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=ye.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),Kr(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fe(this.target,this.layout.layoutBox),Jp(this.target,this.targetDelta)):Fe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),Kr(this.relativeTargetOrigin,this.target,g.target),Fe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}un.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||wl(this.parent.latestValues)||Zp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ye.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Fe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,g=this.treeScale.y;Ik(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Kn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Kn(),this.projectionDeltaWithTransform=Kn());const x=this.projectionTransform;Gr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=tf(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),un.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Kn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=oe(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,S=this.getStack(),y=!S||S.members.length<=1,m=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(yS));this.animationProgress=0;let p;this.mixTargetDelta=w=>{const T=w/1e3;af(f.x,o.x,T),af(f.y,o.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Kr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gS(this.relativeTarget,this.relativeTargetOrigin,h,T),p&&Qk(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=oe()),Fe(p,this.relativeTarget)),x&&(this.animationValues=d,Wk(d,u,this.latestValues,T,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(kt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{cs.hasAnimatedSinceResize=!0,this.currentAnimation=nS(0,rf,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&lg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||oe();const f=Ve(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=Ve(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Fe(a,l),Yn(a,d),Gr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Xk),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<nf.length;d++){const f="rotate"+nf[d];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const d in u)o.setStaticValue(d,u[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return rS;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=us(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=us(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ln(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=tf(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in Os){if(h[x]===void 0)continue;const{correct:S,applyTo:y}=Os[x],m=u.transform==="none"?h[x]:S(h[x],f);if(y){const p=y.length;for(let w=0;w<p;w++)u[y[w]]=m}else u[x]=m}return this.options.layoutId&&(u.pointerEvents=f===this?us(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(sf),this.root.sharedNodes.clear()}}}function sS(e){e.updateLayout()}function oS(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Be(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=Ve(h);h.min=r[f].min,h.max=h.min+g}):lg(s,n.layoutBox,r)&&Be(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],g=Ve(r[f]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Kn();Gr(a,r,n.layoutBox);const l=Kn();o?Gr(l,e.applyTransform(i,!0),n.measuredBox):Gr(l,r,n.layoutBox);const u=!sg(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:g}=f;if(h&&g){const v=oe();Kr(v,n.layoutBox,h.layoutBox);const x=oe();Kr(x,r,g.layoutBox),og(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function aS(e){un.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function lS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function uS(e){e.clearSnapshot()}function sf(e){e.clearMeasurements()}function cS(e){e.isLayoutDirty=!1}function dS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function of(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function fS(e){e.resolveTargetDelta()}function hS(e){e.calcProjection()}function mS(e){e.resetRotation()}function pS(e){e.removeLeadSnapshot()}function af(e,t,n){e.translate=Z(t.translate,0,n),e.scale=Z(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function lf(e,t,n,r){e.min=Z(t.min,n.min,r),e.max=Z(t.max,n.max,r)}function gS(e,t,n,r){lf(e.x,t.x,n.x,r),lf(e.y,t.y,n.y,r)}function yS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const vS={duration:.45,ease:[.4,0,.1,1]},uf=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),cf=uf("applewebkit/")&&!uf("chrome/")?Math.round:se;function df(e){e.min=cf(e.min),e.max=cf(e.max)}function xS(e){df(e.x),df(e.y)}function lg(e,t,n){return e==="position"||e==="preserve-aspect"&&!vl(ef(t),ef(n),.2)}const wS=ag({attachResizeListener:(e,t)=>ht(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ua={current:void 0},ug=ag({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ua.current){const e=new wS({});e.mount(window),e.setOptions({layoutScroll:!0}),ua.current=e}return ua.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),kS={pan:{Feature:Ok},drag:{Feature:Vk,ProjectionNode:ug,MeasureLayout:ng}},SS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ES(e){const t=SS.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Sl(e,t,n=1){const[r,i]=ES(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Hp(o)?parseFloat(o):o}else return dl(i)?Sl(i,t,n+1):i}function TS(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!dl(s))return;const o=Sl(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!dl(s))continue;const o=Sl(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const CS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),cg=e=>CS.has(e),PS=e=>Object.keys(e).some(cg),ff=e=>e===An||e===D,hf=(e,t)=>parseFloat(e.split(", ")[t]),mf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return hf(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?hf(s[1],e):0}},jS=new Set(["x","y","z"]),NS=Ci.filter(e=>!jS.has(e));function IS(e){const t=[];return NS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const hr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:mf(4,13),y:mf(5,14)};hr.translateX=hr.x;hr.translateY=hr.y;const AS=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=hr[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=hr[u](l,s)}),e},MS=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(cg);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Nr(d);const h=t[l];let g;if(zs(h)){const v=h.length,x=h[0]===null?1:0;d=h[x],f=Nr(d);for(let S=x;S<v&&h[S]!==null;S++)g?Vu(Nr(h[S])===g):g=Nr(h[S])}else g=Nr(h);if(f!==g)if(ff(f)&&ff(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&g===D&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||h===0)?d===0?u.set(g.transform(d)):t[l]=f.transform(h):(o||(s=IS(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=AS(t,e,a);return s.length&&s.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),go&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function RS(e,t,n,r){return PS(t)?MS(e,t,n,r):{target:t,transitionEnd:r}}const LS=(e,t,n,r)=>{const i=TS(e,t,r);return t=i.target,r=i.transitionEnd,RS(e,t,n,r)},El={current:null},dg={current:!1};function bS(){if(dg.current=!0,!!go)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>El.current=e.matches;e.addListener(t),t()}else El.current=!1}function DS(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(Ae(s))e.addValue(i,s),Ws(r)&&r.add(i);else if(Ae(o))e.addValue(i,fr(s,{owner:e})),Ws(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,fr(a!==void 0?a:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const pf=new WeakMap,fg=Object.keys(pi),VS=fg.length,gf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],OS=ju.length;class _S{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>G.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=vo(n),this.isVariantNode=Xm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];a[f]!==void 0&&Ae(h)&&(h.set(a[f],!1),Ws(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,pf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),dg.current||bS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:El.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){pf.delete(this.current),this.projection&&this.projection.unmount(),kt(this.notifyUpdate),kt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=In.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&G.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s){let o,a;for(let l=0;l<VS;l++){const u=fg[l],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:g}=pi[u];h&&(o=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&Hn(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<gf.length;r++){const i=gf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=DS(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<OS;r++){const i=ju[r],s=this.props[i];(mi(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=fr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Du(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Ae(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class hg extends _S{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=tk(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){Jw(this,r,o);const a=LS(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function zS(e){return window.getComputedStyle(e)}class FS extends hg{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(In.has(n)){const r=Fu(n);return r&&r.default||0}else{const r=zS(t),i=(ep(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return eg(t,n)}build(t,n,r,i){Au(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return bu(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ae(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){op(t,n,r,i)}}class BS extends hg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(In.has(n)){const r=Fu(n);return r&&r.default||0}return n=ap.has(n)?n:Cu(n),t.getAttribute(n)}measureInstanceViewportBox(){return oe()}scrapeMotionValuesFromProps(t,n){return up(t,n)}build(t,n,r,i){Ru(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){lp(t,n,r,i)}mount(t){this.isSVGTag=Lu(t.tagName),super.mount(t)}}const US=(e,t)=>Iu(e)?new BS(t,{enableHardwareAcceleration:!1}):new FS(t,{enableHardwareAcceleration:!0}),WS={layout:{ProjectionNode:ug,MeasureLayout:ng}},$S={...gk,...V1,...kS,...WS},R=Hx((e,t)=>E1(e,t,$S,US));function mg(){const e=k.useRef(!1);return Tu(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function HS(){const e=mg(),[t,n]=k.useState(0),r=k.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.useCallback(()=>G.postRender(r),[r]),t]}class GS extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function KS({children:e,isPresent:t}){const n=k.useId(),r=k.useRef(null),i=k.useRef({width:0,height:0,top:0,left:0});return k.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),k.createElement(GS,{isPresent:t,childRef:r,sizeRef:i},k.cloneElement(e,{ref:r}))}const ca=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=cp(YS),l=k.useId(),u=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[n]);return k.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),k.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=k.createElement(KS,{isPresent:n},e)),k.createElement(po.Provider,{value:u},e)};function YS(){return new Map}function QS(e){return k.useEffect(()=>()=>e(),[])}const cn=e=>e.key||"";function XS(e,t){e.forEach(n=>{const r=cn(n);t.set(r,n)})}function qS(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const ZS=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=k.useContext(Nu).forceRender||HS()[0],l=mg(),u=qS(e);let d=u;const f=k.useRef(new Map).current,h=k.useRef(d),g=k.useRef(new Map).current,v=k.useRef(!0);if(Tu(()=>{v.current=!1,XS(u,g),h.current=d}),QS(()=>{v.current=!0,g.clear(),f.clear()}),v.current)return k.createElement(k.Fragment,null,d.map(m=>k.createElement(ca,{key:cn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},m)));d=[...d];const x=h.current.map(cn),S=u.map(cn),y=x.length;for(let m=0;m<y;m++){const p=x[m];S.indexOf(p)===-1&&!f.has(p)&&f.set(p,void 0)}return o==="wait"&&f.size&&(d=[]),f.forEach((m,p)=>{if(S.indexOf(p)!==-1)return;const w=g.get(p);if(!w)return;const T=x.indexOf(p);let j=m;if(!j){const C=()=>{f.delete(p);const E=Array.from(g.keys()).filter(I=>!S.includes(I));if(E.forEach(I=>g.delete(I)),h.current=u.filter(I=>{const P=cn(I);return P===p||E.includes(P)}),!f.size){if(l.current===!1)return;a(),r&&r()}};j=k.createElement(ca,{key:cn(w),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:s,mode:o},w),f.set(p,j)}d.splice(T,0,j)}),d=d.map(m=>{const p=m.key;return f.has(p)?m:k.createElement(ca,{key:cn(m),isPresent:!0,presenceAffectsLayout:s,mode:o},m)}),k.createElement(k.Fragment,null,f.size?d:d.map(m=>k.cloneElement(m)))};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>k.createElement("svg",{ref:d,...JS,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${e2(e)}`,a].join(" "),...u},[...t.map(([f,h])=>k.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=U("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=U("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=U("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=U("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=U("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=U("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=U("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=U("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=U("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=U("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=U("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=U("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=U("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=U("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=U("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=U("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=U("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=U("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=U("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=U("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=U("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=U("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=U("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),fa=[{path:"/dashboard",icon:l2,label:"Home"},{path:"/lessons",icon:mr,label:"Lessons"},{path:"/games",icon:So,label:"Games"},{path:"/flashcards",icon:Gu,label:"Cards"},{path:"/achievements",icon:vi,label:"Achievements"},{path:"/profile",icon:vg,label:"Profile"}];function m2({children:e}){const t=jn(),[n,r]=k.useState(!1);return t.pathname.startsWith("/lesson/")?c.jsx("div",{className:"min-h-screen bg-dark-950",children:e}):c.jsxs("div",{className:"min-h-screen bg-dark-950 flex",children:[c.jsxs("aside",{className:"hidden lg:flex flex-col w-64 bg-dark-900/50 border-r border-dark-800 fixed h-screen",children:[c.jsx("div",{className:"p-6",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold text-xl",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-xl gradient-text",children:"English"})]})}),c.jsx("nav",{className:"flex-1 px-3 py-4 space-y-1",children:fa.map(s=>c.jsxs(jr,{to:s.path,className:({isActive:o})=>`nav-item ${o?"active":""}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"text-sm font-medium",children:s.label})]},s.path))}),c.jsx("div",{className:"p-4 border-t border-dark-800",children:c.jsxs(jr,{to:"/settings",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[c.jsx(yf,{size:20}),c.jsx("span",{className:"text-sm font-medium",children:"Settings"})]})})]}),c.jsx("header",{className:"lg:hidden fixed top-0 left-0 right-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-dark-800",children:c.jsxs("div",{className:"flex items-center justify-between px-4 h-16",children:[c.jsx("button",{onClick:()=>r(!0),className:"p-2 rounded-lg hover:bg-dark-800",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-lg gradient-text",children:"English"})]}),c.jsx("div",{className:"w-10"})]})}),c.jsx(ZS,{children:n&&c.jsxs(c.Fragment,{children:[c.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-black/60 z-50",onClick:()=>r(!1)}),c.jsxs(R.div,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25},className:"lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-dark-900 z-50",children:[c.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-dark-800",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx("span",{className:"text-white font-bold text-xl",children:"E"})}),c.jsx("span",{className:"font-display font-bold text-xl gradient-text",children:"English"})]}),c.jsx("button",{onClick:()=>r(!1),className:"p-2 rounded-lg hover:bg-dark-800",children:c.jsx(h2,{size:20})})]}),c.jsxs("nav",{className:"p-3 space-y-1",children:[fa.map(s=>c.jsxs(jr,{to:s.path,onClick:()=>r(!1),className:({isActive:o})=>`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${o?"bg-primary-500/20 text-primary-400":"text-dark-400 hover:bg-dark-800 hover:text-white"}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"font-medium",children:s.label})]},s.path)),c.jsxs(jr,{to:"/settings",onClick:()=>r(!1),className:({isActive:s})=>`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${s?"bg-primary-500/20 text-primary-400":"text-dark-400 hover:bg-dark-800 hover:text-white"}`,children:[c.jsx(yf,{size:20}),c.jsx("span",{className:"font-medium",children:"Settings"})]})]})]})]})}),c.jsx("main",{className:"flex-1 lg:ml-64 pt-16 lg:pt-0",children:c.jsx("div",{className:"p-4 lg:p-8 pb-24 lg:pb-8",children:e})}),c.jsx("nav",{className:"lg:hidden fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-md border-t border-dark-800 z-40",children:c.jsx("div",{className:"flex justify-around py-2",children:fa.slice(0,5).map(s=>c.jsxs(jr,{to:s.path,className:({isActive:o})=>`nav-item flex-1 ${o?"active":""}`,children:[c.jsx(s.icon,{size:20}),c.jsx("span",{className:"text-xs",children:s.label})]},s.path))})})]})}function p2(){const e=Nn(),{user:t,lessons:n,gameStats:r,achievements:i}=Ct(),s=n.filter(g=>g.completed).length,o=n.length,a=s/o*100,l=200-t.xp%200,u=[{icon:mr,label:"Continue Learning",path:"/lessons",color:"from-primary-500 to-primary-600"},{icon:So,label:"Play Games",path:"/games",color:"from-accent-500 to-accent-600"},{icon:Gu,label:"Flashcards",path:"/flashcards",color:"from-green-500 to-emerald-600"}],d=i.filter(g=>g.unlocked).slice(0,3),f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(R.div,{variants:f,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(R.div,{variants:h,className:"card relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"}),c.jsxs("div",{className:"relative flex flex-col md:flex-row md:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Welcome back, ",c.jsx("span",{className:"gradient-text",children:t.name}),"!"]}),c.jsx("p",{className:"text-dark-400",children:"Ready to continue your English journey?"})]}),c.jsx("div",{className:"flex items-center gap-4",children:c.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-dark-800 rounded-xl",children:[c.jsx(gg,{className:"text-orange-500",size:20}),c.jsx("span",{className:"font-bold text-orange-400",children:t.streak}),c.jsx("span",{className:"text-dark-400 text-sm",children:"day streak"})]})})]})]}),c.jsxs(R.div,{variants:h,className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-3",children:c.jsx(Cl,{className:"text-white",size:24})}),c.jsx("span",{className:"text-2xl font-bold",children:t.xp}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Total XP"})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-3",children:c.jsx(yi,{className:"text-white",size:24})}),c.jsxs("span",{className:"text-2xl font-bold",children:["Level ",t.level]}),c.jsxs("span",{className:"text-dark-400 text-sm",children:[l," XP to next"]})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3",children:c.jsx(mr,{className:"text-white",size:24})}),c.jsxs("span",{className:"text-2xl font-bold",children:[s,"/",o]}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Lessons"})]}),c.jsxs("div",{className:"card flex flex-col items-center text-center",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3",children:c.jsx(vi,{className:"text-white",size:24})}),c.jsx("span",{className:"text-2xl font-bold",children:i.filter(g=>g.unlocked).length}),c.jsx("span",{className:"text-dark-400 text-sm",children:"Achievements"})]})]}),c.jsxs(R.div,{variants:h,className:"card",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("h2",{className:"font-display font-semibold text-lg flex items-center gap-2",children:[c.jsx(yg,{className:"text-primary-400",size:20}),"Weekly Progress"]}),c.jsxs("span",{className:"text-dark-400 text-sm",children:[Math.round(a),"% Complete"]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx(R.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${a}%`},transition:{duration:1,delay:.5}})}),c.jsxs("div",{className:"mt-4 flex justify-between text-sm text-dark-400",children:[c.jsxs("span",{children:[s," lessons completed"]}),c.jsxs("span",{children:[o-s," lessons remaining"]})]})]}),c.jsxs(R.div,{variants:h,children:[c.jsx("h2",{className:"font-display font-semibold text-lg mb-4",children:"Quick Actions"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.map((g,v)=>c.jsxs(R.button,{onClick:()=>e(g.path),whileHover:{scale:1.02},whileTap:{scale:.98},className:`card flex items-center justify-between group bg-gradient-to-r ${g.color} bg-none border-0`,style:{background:"none"},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center`,children:c.jsx(g.icon,{className:"text-white",size:20})}),c.jsx("span",{className:"font-medium text-white",children:g.label})]}),c.jsx(Qn,{className:"text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all",size:20})]},g.label))})]}),c.jsxs(R.div,{variants:h,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"font-display font-semibold text-lg",children:"Continue Learning"}),c.jsxs("button",{onClick:()=>e("/lessons"),className:"text-primary-400 text-sm hover:underline flex items-center gap-1",children:["View All ",c.jsx(Qn,{size:16})]})]}),c.jsxs("div",{className:"space-y-3",children:[n.filter(g=>!g.completed).slice(0,3).map((g,v)=>c.jsxs(R.button,{onClick:()=>e(`/lesson/${g.id}`),whileHover:{scale:1.01},whileTap:{scale:.99},className:"w-full card flex items-center justify-between text-left",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold",children:g.day}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-medium",children:g.title}),c.jsxs("p",{className:"text-dark-400 text-sm flex items-center gap-1",children:[c.jsx(pg,{size:14})," 15 min"]})]})]}),c.jsx(Qn,{className:"text-dark-500",size:20})]},g.id)),n.filter(g=>!g.completed).length===0&&c.jsxs("div",{className:"card text-center py-8",children:[c.jsx(vi,{className:"mx-auto text-yellow-500 mb-2",size:40}),c.jsx("p",{className:"text-dark-400",children:"All lessons completed! Great job!"})]})]})]}),d.length>0&&c.jsxs(R.div,{variants:h,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"font-display font-semibold text-lg",children:"Recent Achievements"}),c.jsxs("button",{onClick:()=>e("/achievements"),className:"text-primary-400 text-sm hover:underline flex items-center gap-1",children:["View All ",c.jsx(Qn,{size:16})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:d.map(g=>c.jsxs("div",{className:"card flex items-center gap-3",children:[c.jsx("div",{className:"text-3xl",children:g.icon}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-medium",children:g.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:g.description})]})]},g.id))})]})]})}const g2=`# [DAY 1: SOCIAL MEDIA & SMARTPHONE LIFE]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Scroll: Lướt điện thoại.
2. Upload: Đăng tải.
3. Notification: Thông báo.
4. Addicted: Nghiện, bị phụ thuộc.
5. Follow: Theo dõi.
6. Viral: Lan truyền mạnh trên mạng.

---

### 5 Natural English Sentences

• Casual:
"I spent the whole night scrolling through TikTok."
(Tối qua mình lướt TikTok cả đêm.)

• Asking:
"What apps do you use the most these days?"
(Dạo này bạn dùng app gì nhiều nhất?)

• Natural:
"That video went viral so fast."
(Video đó nổi nhanh thật.)

• Complaining:
"I think I'm addicted to my phone."
(Mình nghĩ mình nghiện điện thoại rồi.)

• Friendly:
"Send me your Instagram. I'll follow you."
(Gửi Instagram cho mình đi, mình follow cho.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Communicate

• Meaning: Giao tiếp.

• TOEIC/IELTS Example:
"Technology helps people communicate more easily."
(Công nghệ giúp con người giao tiếp dễ dàng hơn.)

• Daily English:
"We mostly communicate through social media now."
(Bây giờ tụi mình chủ yếu giao tiếp qua mạng xã hội.)

---

## 2. Depend

• Meaning: Phụ thuộc.

• TOEIC/IELTS Example:
"Many teenagers depend too much on smartphones."
(Nhiều thanh thiếu niên phụ thuộc quá nhiều vào điện thoại.)

• Daily English:
"I depend on Google Maps all the time."
(Mình lúc nào cũng phụ thuộc vào Google Maps.)

---

## 3. Improve

• Meaning: Cải thiện.

• TOEIC/IELTS Example:
"Online learning can improve language skills."
(Học online có thể cải thiện kỹ năng ngôn ngữ.)

• Daily English:
"I'm trying to improve my English through YouTube."
(Mình đang cố cải thiện tiếng Anh qua YouTube.)

---

## 4. Influence

• Meaning: Ảnh hưởng.

• TOEIC/IELTS Example:
"Social media has a strong influence on young people."
(Mạng xã hội có ảnh hưởng lớn đến giới trẻ.)

• Daily English:
"That influencer really affects fashion trends."
(Influencer đó ảnh hưởng mạnh đến xu hướng thời trang.)

---

## 5. Balance

• Meaning: Cân bằng.

• TOEIC/IELTS Example:
"It is important to balance work and personal life."
(Việc cân bằng công việc và cuộc sống rất quan trọng.)

• Daily English:
"I'm trying to balance studying and social media."
(Mình đang cố cân bằng việc học và mạng xã hội.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why didn't you reply to my message?"

• B: "Sorry, I turned off my notifications."

• A: "Really? I thought you were ignoring me."

• B: "No, I'm trying to spend less time on social media these days."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   You are talking about your favorite app with your friend.

3. Answer the question:
   "How much time do you spend on your phone every day?"

---

# [PART 4 – REAL GRAMMAR]

## Trying to

( Đang cố gắng làm gì )

• Explanation:
Used when talking about effort or habits you want to change.

---

### Examples

• "I'm trying to sleep earlier."
(Tôi đang cố ngủ sớm hơn.)

• "She's trying to use her phone less."
(Cô ấy đang cố dùng điện thoại ít hơn.)

---

### Real-life English

Native speakers use this expression constantly in daily conversation.

• "I'm trying to eat healthier."
• "I'm trying to save money."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much time on social media.

## Task:

Write 2–3 English sentences:

1. Give advice.
2. Talk about balancing phone use and studying.

---

### Example

"You should take breaks from your phone sometimes. Spending too much time online can affect your sleep and studies."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Nowadays, many students spend hours on social media every day. While smartphones make communication easier, depending on them too much can negatively ( ㄱ ) students' concentration. Therefore, it is important to keep a good ( ㄴ ) between studying and phone use."

---

## Hint

• ㄱ = influence / affect
• ㄴ = balance

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Scroll
• Upload
• Notification
• Addicted
• Follow
• Viral

### TOEIC/IELTS Vocabulary

• Communicate
• Depend
• Improve
• Influence
• Balance

---

## Exercises

1. Translate:
   "Mạng xã hội có ảnh hưởng lớn đến cuộc sống của giới trẻ."

2. Make a sentence using the word "addicted".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes in front of a mirror about:
   "How does social media affect my life?"

2. Use these 3 sentences today:

• "I spend too much time on my phone."

• "I'm trying to use social media less."

• "That video went viral overnight."

`,y2=`# [DAY 2: MONEY & ONLINE SHOPPING]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Discount: Giảm giá.
2. Expensive: Đắt.
3. Cheap: Rẻ.
4. Delivery fee: Phí giao hàng.
5. Brand: Thương hiệu.
6. Wallet: Ví tiền.

---

### 5 Natural English Sentences

• Casual:
"I bought it because it was on sale."
(Mình mua nó vì đang giảm giá.)

• Asking:
"How much did you pay for that?"
(Bạn trả bao nhiêu cho cái đó vậy?)

• Complaining:
"The delivery fee is way too expensive."
(Phí giao hàng mắc quá.)

• Natural:
"I'm trying to save money these days."
(Dạo này mình đang cố tiết kiệm tiền.)

• Friendly:
"That brand is really popular right now."
(Thương hiệu đó đang nổi lắm.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Purchase

• Meaning: Mua hàng.

• TOEIC/IELTS Example:
"Many customers purchase products online nowadays."
(Ngày nay nhiều khách hàng mua sản phẩm online.)

• Daily English:
"I purchased a new laptop last week."
(Tuần trước mình mua laptop mới.)

---

## 2. Budget

• Meaning: Ngân sách.

• TOEIC/IELTS Example:
"Students should manage their budgets carefully."
(Sinh viên nên quản lý ngân sách cẩn thận.)

• Daily English:
"My budget this month is really tight."
(Ngân sách tháng này của mình khá eo hẹp.)

---

## 3. Compare

• Meaning: So sánh.

• TOEIC/IELTS Example:
"Consumers often compare prices before buying products."
(Người tiêu dùng thường so sánh giá trước khi mua hàng.)

• Daily English:
"I compared several phones before choosing one."
(Mình đã so sánh nhiều điện thoại trước khi chọn.)

---

## 4. Value

• Meaning: Giá trị.

• TOEIC/IELTS Example:
"This product offers good value for money."
(Sản phẩm này đáng tiền.)

• Daily English:
"I care more about value than brand names."
(Mình quan tâm giá trị hơn là thương hiệu.)

---

## 5. Waste

• Meaning: Lãng phí.

• TOEIC/IELTS Example:
"Buying unnecessary items is a waste of money."
(Mua đồ không cần thiết là lãng phí tiền bạc.)

• Daily English:
"I wasted too much money on snacks."
(Mình đã tiêu quá nhiều tiền vào đồ ăn vặt.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why did you buy so many things?"

• B: "Everything was on sale yesterday."

• A: "You really love online shopping."

• B: "Yeah, but I'm trying to spend less money now."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about something expensive you want to buy.

3. Answer the question:
   "What do you usually spend money on?"

---

# [PART 4 – REAL GRAMMAR]

## Too + Adjective

( Quá... )

• Explanation:
Used when something is excessive or more than necessary.

---

### Examples

• "This bag is too expensive."
(Cái túi này quá đắt.)

• "I spend too much money online."
(Tôi tiêu quá nhiều tiền online.)

---

### Real-life English

Native speakers use "too" constantly in conversation.

• "It's too hot today."
• "That phone is too expensive for me."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much money shopping online.

## Task:

Write 2–3 English sentences:

1. Give advice about saving money.
2. Mention budgeting.

---

### Example

"You should make a monthly budget. Buying unnecessary things online can waste a lot of money."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Online shopping is becoming more popular because it is convenient and fast. However, many people spend money without comparing prices carefully, which can lead to unnecessary ( ㄱ ). Therefore, consumers should manage their ( ㄴ ) wisely."

---

## Hint

• ㄱ = waste
• ㄴ = budget

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Discount
• Expensive
• Cheap
• Delivery fee
• Brand
• Wallet

### TOEIC/IELTS Vocabulary

• Purchase
• Budget
• Compare
• Value
• Waste

---

## Exercises

1. Translate:
   "Tôi đang cố tiết kiệm tiền để mua laptop mới."

2. Make a sentence using the word "discount".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "How do I spend my money every month?"

2. Use these 3 sentences today:

• "I'm trying to save money."

• "That's too expensive for me."

• "I bought it because it was on sale."
`,v2=`# [DAY 3: FITNESS & EXERCISE]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Workout: Buổi tập thể dục.
2. Muscle soreness: Đau cơ.
3. Stretch: Giãn cơ.
4. Diet: Chế độ ăn uống.
5. Gym membership: Thẻ tập gym.
6. Cardio: Bài tập tim mạch.

---

### 5 Natural English Sentences

• Casual:
"I skipped my workout yesterday."
(Hôm qua mình bỏ buổi tập.)

• Asking:
"How often do you go to the gym?"
(Bạn đi gym bao nhiêu lần một tuần?)

• Complaining:
"My legs are sore after leg day."
(Chân mình đau nhức sau buổi tập chân.)

• Natural:
"I'm trying to eat healthier these days."
(Dạo này mình đang cố ăn uống lành mạnh hơn.)

• Friendly:
"Wanna work out together sometime?"
(Hôm nào tập chung không?)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Maintain

• Meaning: Duy trì.

• TOEIC/IELTS Example:
"Regular exercise helps maintain good health."
(Tập thể dục đều đặn giúp duy trì sức khỏe tốt.)

• Daily English:
"I'm trying to maintain a healthy lifestyle."
(Mình đang cố duy trì lối sống lành mạnh.)

---

## 2. Improve

• Meaning: Cải thiện.

• TOEIC/IELTS Example:
"Exercise can improve mental health."
(Tập thể dục có thể cải thiện sức khỏe tinh thần.)

• Daily English:
"I want to improve my stamina."
(Mình muốn cải thiện thể lực.)

---

## 3. Reduce

• Meaning: Giảm bớt.

• TOEIC/IELTS Example:
"Walking daily can reduce stress."
(Đi bộ mỗi ngày có thể giảm stress.)

• Daily English:
"I'm trying to reduce sugar intake."
(Mình đang cố giảm lượng đường nạp vào.)

---

## 4. Energy

• Meaning: Năng lượng.

• TOEIC/IELTS Example:
"Healthy food gives people more energy."
(Đồ ăn lành mạnh giúp con người có nhiều năng lượng hơn.)

• Daily English:
"I have no energy today."
(Hôm nay mình không có năng lượng gì cả.)

---

## 5. Routine

• Meaning: Thói quen hằng ngày/lịch sinh hoạt.

• TOEIC/IELTS Example:
"Having a healthy routine is important."
(Có một lịch sinh hoạt lành mạnh rất quan trọng.)

• Daily English:
"My morning routine is simple."
(Thói quen buổi sáng của mình khá đơn giản.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "You look healthier these days."

• B: "Really? I started going to the gym recently."

• A: "How often do you work out?"

• B: "About four times a week."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your exercise routine.

3. Answer the question:
   "What do you do to stay healthy?"

---

# [PART 4 – REAL GRAMMAR]

## Start + Verb-ing

( Bắt đầu làm gì )

• Explanation:
Used to talk about new habits or activities.

---

### Examples

• "I started exercising last month."
(Tôi bắt đầu tập thể dục tháng trước.)

• "She started eating healthier food."
(Cô ấy bắt đầu ăn uống lành mạnh hơn.)

---

### Real-life English

Native speakers use this structure very naturally.

• "I started learning English online."
• "He started going to bed earlier."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend feels tired and stressed lately.

## Task:

Write 2–3 English sentences:

1. Recommend exercise or healthy habits.
2. Mention stress reduction.

---

### Example

"You should exercise more often. Working out regularly can reduce stress and give you more energy."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Many people exercise regularly to ( ㄱ ) their health and reduce stress. In addition, having a healthy daily ( ㄴ ) can improve both physical and mental health."

---

## Hint

• ㄱ = maintain
• ㄴ = routine

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Workout
• Muscle soreness
• Stretch
• Diet
• Gym membership
• Cardio

### TOEIC/IELTS Vocabulary

• Maintain
• Improve
• Reduce
• Energy
• Routine

---

## Exercises

1. Translate:
   "Tập thể dục đều đặn giúp tôi có nhiều năng lượng hơn."

2. Make a sentence using the word "routine".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My exercise habits and health goals."

2. Use these 3 sentences today:

• "I started working out recently."

• "I'm trying to eat healthier."

• "Exercise helps reduce stress."
`,x2=`# [DAY 4: MOVIES & ENTERTAINMENT]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Spoiler: Tiết lộ nội dung phim.
2. Episode: Tập phim.
3. Series: Series/phim dài tập.
4. Subtitle: Phụ đề.
5. Streaming service: Nền tảng xem phim trực tuyến.
6. Genre: Thể loại.

---

### 5 Natural English Sentences

• Casual:
"I finished the whole series in one night."
(Mình cày hết cả series chỉ trong một đêm.)

• Asking:
"What kind of movies do you usually watch?"
(Bạn thường xem thể loại phim nào?)

• Warning:
"Don't spoil the ending for me."
(Đừng spoil cái kết cho mình.)

• Natural:
"I usually watch movies with English subtitles."
(Mình thường xem phim với phụ đề tiếng Anh.)

• Friendly:
"You should watch this movie. It's really good."
(Bạn nên xem phim này đi, hay lắm.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Entertain

• Meaning: Giải trí.

• TOEIC/IELTS Example:
"Movies can entertain people and reduce stress."
(Phim ảnh có thể giải trí và giảm căng thẳng.)

• Daily English:
"I watch YouTube videos to entertain myself."
(Mình xem YouTube để giải trí.)

---

## 2. Recommend

• Meaning: Đề xuất, giới thiệu.

• TOEIC/IELTS Example:
"I highly recommend this documentary."
(Tôi rất đề xuất bộ phim tài liệu này.)

• Daily English:
"Can you recommend a good movie?"
(Bạn có thể gợi ý phim hay không?)

---

## 3. Popular

• Meaning: Phổ biến, nổi tiếng.

• TOEIC/IELTS Example:
"Korean dramas are popular worldwide."
(Phim Hàn nổi tiếng trên toàn thế giới.)

• Daily English:
"That series is really popular these days."
(Series đó dạo này nổi lắm.)

---

## 4. Relax

• Meaning: Thư giãn.

• TOEIC/IELTS Example:
"Listening to music helps people relax."
(Nghe nhạc giúp con người thư giãn.)

• Daily English:
"I watch movies to relax after studying."
(Mình xem phim để thư giãn sau khi học.)

---

## 5. Emotion

• Meaning: Cảm xúc.

• TOEIC/IELTS Example:
"Movies can strongly affect people's emotions."
(Phim có thể ảnh hưởng mạnh đến cảm xúc con người.)

• Daily English:
"That ending made me emotional."
(Cái kết đó làm mình xúc động.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Have you watched that new Netflix series?"

• B: "Yeah, I finished it yesterday."

• A: "Was it good?"

• B: "Definitely. The story was really emotional."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your favorite movie or drama.

3. Answer the question:
   "What do you usually watch when you want to relax?"

---

# [PART 4 – REAL GRAMMAR]

## Used to

( Từng thường làm gì )

• Explanation:
Used to talk about past habits or situations.

---

### Examples

• "I used to watch cartoons every day."
(Hồi trước tôi từng xem hoạt hình mỗi ngày.)

• "She used to hate horror movies."
(Cô ấy từng ghét phim kinh dị.)

---

### Real-life English

Very common in storytelling and conversations about memories.

• "We used to play games together."
• "I used to stay up late watching movies."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend asks you for movie recommendations.

## Task:

Write 2–3 English sentences:

1. Recommend a movie or drama.
2. Explain why you liked it.

---

### Example

"You should watch this drama on Netflix. The story is really emotional, and the actors are amazing."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Streaming services have become extremely ( ㄱ ) in recent years because they provide convenient entertainment. Many people watch movies or dramas online to ( ㄴ ) after work or school."

---

## Hint

• ㄱ = popular
• ㄴ = relax

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Spoiler
• Episode
• Series
• Subtitle
• Streaming service
• Genre

### TOEIC/IELTS Vocabulary

• Entertain
• Recommend
• Popular
• Relax
• Emotion

---

## Exercises

1. Translate:
   "Tôi thường xem phim để thư giãn sau giờ học."

2. Make a sentence using the word "spoiler".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My favorite movie or drama."

2. Use these 3 sentences today:

• "Don't spoil it for me."

• "That movie was really emotional."

• "Can you recommend something good to watch?"
`,w2=`# [DAY 5: TRAVEL & VACATIONS]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Destination: Điểm đến.
2. Backpack: Ba lô du lịch.
3. Reservation: Đặt chỗ.
4. Tourist attraction: Địa điểm du lịch.
5. Schedule: Lịch trình.
6. Souvenir: Quà lưu niệm.

---

### 5 Natural English Sentences

• Casual:
"I really want to travel abroad someday."
(Mình thật sự muốn đi du lịch nước ngoài một ngày nào đó.)

• Asking:
"What's your dream travel destination?"
(Điểm du lịch mơ ước của bạn là đâu?)

• Natural:
"We already made hotel reservations."
(Bọn mình đã đặt khách sạn rồi.)

• Friendly:
"Don't forget to buy souvenirs."
(Đừng quên mua quà lưu niệm nhé.)

• Complaining:
"Our flight got delayed again."
(Chuyến bay của bọn mình lại bị hoãn nữa rồi.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Explore

• Meaning: Khám phá.

• TOEIC/IELTS Example:
"Traveling allows people to explore different cultures."
(Du lịch cho phép con người khám phá nhiều nền văn hóa khác nhau.)

• Daily English:
"I want to explore more places in Korea."
(Mình muốn khám phá nhiều nơi hơn ở Hàn Quốc.)

---

## 2. Journey

• Meaning: Hành trình.

• TOEIC/IELTS Example:
"The journey took over ten hours."
(Hành trình kéo dài hơn 10 tiếng.)

• Daily English:
"Our journey was really fun."
(Hành trình của bọn mình rất vui.)

---

## 3. Adventure

• Meaning: Cuộc phiêu lưu.

• TOEIC/IELTS Example:
"Traveling alone can be an exciting adventure."
(Du lịch một mình có thể là một cuộc phiêu lưu thú vị.)

• Daily English:
"I'm looking for a new adventure."
(Mình đang tìm một trải nghiệm phiêu lưu mới.)

---

## 4. Culture

• Meaning: Văn hóa.

• TOEIC/IELTS Example:
"Learning about local culture is important when traveling."
(Tìm hiểu văn hóa địa phương rất quan trọng khi du lịch.)

• Daily English:
"Korean culture is really interesting."
(Văn hóa Hàn Quốc thật sự thú vị.)

---

## 5. Memory

• Meaning: Kỷ niệm.

• TOEIC/IELTS Example:
"Traveling creates unforgettable memories."
(Du lịch tạo ra những kỷ niệm khó quên.)

• Daily English:
"That trip gave me a lot of good memories."
(Chuyến đi đó cho mình rất nhiều kỷ niệm đẹp.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Where are you going during vacation?"

• B: "I'm planning to visit Japan."

• A: "That sounds exciting."

• B: "Yeah, I really want to explore the culture there."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your dream vacation.

3. Answer the question:
   "What country do you want to visit most?"

---

# [PART 4 – REAL GRAMMAR]

## Be going to

( Sắp / Dự định sẽ )

• Explanation:
Used for future plans and intentions.

---

### Examples

• "I'm going to travel this summer."
(Tôi sẽ đi du lịch mùa hè này.)

• "We're going to book a hotel tonight."
(Tối nay bọn tôi sẽ đặt khách sạn.)

---

### Real-life English

Very common in casual daily conversation.

• "I'm gonna visit my friend tomorrow."
• "She's gonna study abroad next year."

---

# [PART 5 – APPLICATION]

## Situation:

You are planning a trip with your friend.

## Task:

Write 2–3 English sentences:

1. Mention the destination.
2. Talk about what you want to do there.

---

### Example

"We're going to visit Busan during vacation. I want to explore famous tourist attractions and try local food."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Many people enjoy traveling because it gives them opportunities to ( ㄱ ) different cultures and create unforgettable ( ㄴ ). In addition, traveling can reduce stress and provide exciting experiences."

---

## Hint

• ㄱ = explore
• ㄴ = memories

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Destination
• Backpack
• Reservation
• Tourist attraction
• Schedule
• Souvenir

### TOEIC/IELTS Vocabulary

• Explore
• Journey
• Adventure
• Culture
• Memory

---

## Exercises

1. Translate:
   "Tôi muốn khám phá nhiều nền văn hóa khác nhau."

2. Make a sentence using the word "adventure".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "My dream trip."

2. Use these 3 sentences today:

• "I'm going to travel abroad someday."

• "What's your dream destination?"

• "That trip gave me unforgettable memories."
`,k2=`# [DAY 6: TECHNOLOGY & SOCIAL MEDIA]

## [PART 1 – DAILY ENGLISH COMMUNICATION]

### 6 Useful Vocabulary

1. Notification: Thông báo.
2. Upload: Tải lên.
3. Comment section: Phần bình luận.
4. Screen time: Thời gian sử dụng màn hình.
5. Viral: Lan truyền mạnh, nổi tiếng nhanh.
6. Content creator: Người sáng tạo nội dung.

---

### 5 Natural English Sentences

• Casual:
"I spend way too much time on social media."
(Mình dành quá nhiều thời gian trên mạng xã hội.)

• Asking:
"What apps do you use the most?"
(Bạn dùng ứng dụng nào nhiều nhất?)

• Complaining:
"My phone battery dies so quickly these days."
(Pin điện thoại dạo này hết nhanh quá.)

• Natural:
"That video went viral overnight."
(Video đó nổi chỉ sau một đêm.)

• Friendly:
"I uploaded a new photo yesterday."
(Hôm qua mình đăng ảnh mới.)

---

# [PART 2 – IMPORTANT TOEIC/IELTS VOCAB ⭐]

## 1. Communicate

• Meaning: Giao tiếp.

• TOEIC/IELTS Example:
"Technology helps people communicate more easily."
(Công nghệ giúp con người giao tiếp dễ dàng hơn.)

• Daily English:
"I usually communicate with friends online."
(Mình thường giao tiếp với bạn bè online.)

---

## 2. Access

• Meaning: Truy cập/tiếp cận.

• TOEIC/IELTS Example:
"Students can access information quickly through the internet."
(Học sinh có thể truy cập thông tin nhanh chóng qua internet.)

• Daily English:
"I can't access my account right now."
(Mình không thể truy cập tài khoản lúc này.)

---

## 3. Addiction

• Meaning: Sự nghiện.

• TOEIC/IELTS Example:
"Smartphone addiction is becoming a serious issue."
(Nghiện điện thoại thông minh đang trở thành vấn đề nghiêm trọng.)

• Daily English:
"I think I have a social media addiction."
(Mình nghĩ mình bị nghiện mạng xã hội rồi.)

---

## 4. Convenient

• Meaning: Tiện lợi.

• TOEIC/IELTS Example:
"Online learning is convenient for many students."
(Học online tiện lợi cho nhiều học sinh.)

• Daily English:
"Online shopping is really convenient."
(Mua sắm online rất tiện.)

---

## 5. Influence

• Meaning: Ảnh hưởng.

• TOEIC/IELTS Example:
"Social media has a strong influence on teenagers."
(Mạng xã hội có ảnh hưởng lớn đến thanh thiếu niên.)

• Daily English:
"That influencer has millions of followers."
(Influencer đó có hàng triệu người theo dõi.)

---

# [PART 3 – SPEAKING PRACTICE]

## Dialogue

• A: "Why are you always on your phone?"

• B: "I'm watching short videos online."

• A: "You should reduce your screen time."

• B: "Yeah, I know. It's becoming a bad habit."

---

## Tasks

1. Shadow the dialogue 3 times.

2. Change the situation:
   Talk about your favorite app or website.

3. Answer the question:
   "How does technology affect your daily life?"

---

# [PART 4 – REAL GRAMMAR]

## Spend time + Verb-ing

( Dành thời gian làm gì )

• Explanation:
Used to talk about how time is used.

---

### Examples

• "I spend a lot of time watching YouTube."
(Tôi dành nhiều thời gian xem YouTube.)

• "She spends hours studying English."
(Cô ấy dành hàng giờ học tiếng Anh.)

---

### Real-life English

Very common in daily conversation.

• "He spends too much time gaming."
• "I spend most of my evenings reading."

---

# [PART 5 – APPLICATION]

## Situation:

Your friend spends too much time on social media.

## Task:

Write 2–3 English sentences:

1. Give advice about reducing screen time.
2. Mention healthy habits or studying.

---

### Example

"You should spend less time scrolling on social media. Try reading books or studying English instead."

---

# [PART 6 – MINI TOEIC/IELTS PRACTICE]

(Fill in the blanks)

"Technology has made communication more ( ㄱ ) and efficient. However, excessive smartphone use can lead to internet ( ㄴ ), especially among teenagers."

---

## Hint

• ㄱ = convenient
• ㄴ = addiction

---

# [PART 7 – REVIEW]

## Vocabulary Summary

### Daily Communication

• Notification
• Upload
• Comment section
• Screen time
• Viral
• Content creator

### TOEIC/IELTS Vocabulary

• Communicate
• Access
• Addiction
• Convenient
• Influence

---

## Exercises

1. Translate:
   "Mạng xã hội có ảnh hưởng lớn đến cuộc sống hằng ngày của giới trẻ."

2. Make a sentence using the word "viral".

---

# TEACHER'S REMINDER 📌

1. Speak English for 5 minutes about:
   "How technology affects my life."

2. Use these 3 sentences today:

• "I spend too much time on my phone."

• "That video went viral."

• "Technology makes life more convenient."
`,S2=`# [DAY 7: WEEK 1 REVIEW & MASTER PRACTICE]

## [PART 1 – GOLDEN VOCABULARY REVIEW]

Try reading the words below and check whether you still remember their meanings.

---

## 1. Money & Shopping

• Discount: Giảm giá
• Expensive: Đắt
• Cheap: Rẻ
• Delivery fee: Phí giao hàng
• Brand: Thương hiệu

### Important Vocabulary

• Purchase: Mua hàng
• Budget: Ngân sách
• Compare: So sánh
• Value: Giá trị
• Waste: Lãng phí

---

## 2. Fitness & Exercise

• Workout: Buổi tập
• Stretch: Giãn cơ
• Diet: Chế độ ăn
• Cardio: Bài tập tim mạch
• Muscle soreness: Đau cơ

### Important Vocabulary

• Maintain: Duy trì
• Improve: Cải thiện
• Reduce: Giảm bớt
• Energy: Năng lượng
• Routine: Thói quen/lịch sinh hoạt

---

## 3. Movies & Entertainment

• Spoiler: Tiết lộ nội dung
• Episode: Tập phim
• Series: Series phim
• Subtitle: Phụ đề
• Genre: Thể loại

### Important Vocabulary

• Entertain: Giải trí
• Recommend: Đề xuất
• Popular: Phổ biến
• Relax: Thư giãn
• Emotion: Cảm xúc

---

## 4. Travel & Vacations

• Destination: Điểm đến
• Backpack: Ba lô
• Reservation: Đặt chỗ
• Schedule: Lịch trình
• Souvenir: Quà lưu niệm

### Important Vocabulary

• Explore: Khám phá
• Journey: Hành trình
• Adventure: Phiêu lưu
• Culture: Văn hóa
• Memory: Kỷ niệm

---

## 5. Technology & Social Media

• Notification: Thông báo
• Upload: Tải lên
• Screen time: Thời gian dùng màn hình
• Viral: Nổi nhanh
• Content creator: Người sáng tạo nội dung

### Important Vocabulary

• Communicate: Giao tiếp
• Access: Truy cập
• Addiction: Sự nghiện
• Convenient: Tiện lợi
• Influence: Ảnh hưởng

---

# [PART 2 – GRAMMAR REVIEW]

Review these important grammar structures:

---

## 1. Too + Adjective

( Quá... )

• "This bag is too expensive."
• "The weather is too hot."

---

## 2. Start + Verb-ing

( Bắt đầu làm gì )

• "I started working out recently."
• "She started learning English online."

---

## 3. Used to

( Từng thường làm gì )

• "I used to watch cartoons every day."
• "We used to play games together."

---

## 4. Be going to

( Dự định sẽ )

• "I'm going to travel abroad."
• "We're going to book a hotel."

---

## 5. Spend time + Verb-ing

( Dành thời gian làm gì )

• "I spend a lot of time studying English."
• "He spends too much time gaming."

---

# [PART 3 – MINI TOEIC/IELTS REVIEW TEST]

## Fill in the blanks

"Nowadays, many people spend a lot of time using social media because it is convenient and entertaining. However, excessive screen time can negatively ( ㄱ ) people's health and daily routine. Therefore, it is important to maintain a healthy lifestyle and manage time wisely. During vacations, many people also travel abroad to explore different ( ㄴ ) and create unforgettable memories."

---

## Hint

• ㄱ = influence
• ㄴ = cultures

---

# [PART 4 – COMPREHENSIVE SPEAKING PRACTICE]

## Dialogue

• A: "What do you usually do when you have free time?"

• B: "I usually watch movies or go to the gym."

• A: "That sounds healthy and relaxing."

• B: "Yeah, but sometimes I spend too much time online."

---

## Tasks

1. Shadow the dialogue 5 times.

2. Change the topic:
   Talk about your weekly routine.

3. Answer these questions:
   • "What is your biggest goal this year?"
   • "How do you usually reduce stress?"
   • "What country do you want to visit?"

---

# [PART 5 – WRITING PRACTICE]

## Situation:

You are introducing your lifestyle and hobbies to an online friend.

## Task:

Write 5–7 English sentences about:

1. Your hobbies
2. Your health habits
3. Your favorite entertainment
4. Your travel goals
5. Your screen time habits

---

### Example

"I usually spend my free time watching movies and exercising. Recently, I started working out more often to maintain my health. I also enjoy traveling and exploring different cultures. My dream destination is Japan because I love Japanese food and anime. However, I spend too much time on social media sometimes."

---

# [PART 6 – TRANSLATION PRACTICE]

Translate these sentences into English:

1. Tôi đang cố giảm thời gian sử dụng điện thoại.

2. Tôi muốn khám phá nhiều nền văn hóa khác nhau.

3. Bộ phim đó rất cảm động và thú vị.

4. Tôi thường mua đồ online khi có giảm giá.

5. Tập thể dục giúp tôi giảm stress và duy trì sức khỏe.

---

# [PART 7 – FINAL WEEK REVIEW]

## Weekly Challenge

Try speaking English alone for 5 minutes about:

### "My lifestyle and future goals."

Try using:
• too + adjective
• used to
• be going to
• spend time + V-ing

---

# TEACHER'S REMINDER 📌

1. Review all vocabulary from Day 1–6 for at least 30 minutes.

2. Practice speaking every day, even if your sentences are simple.

3. Don't focus only on grammar — focus on speaking naturally too.

---

## Use these 3 sentences today:

• "I'm trying to improve myself every day."

• "I spend too much time on my phone."

• "I'm going to achieve my goals."
`,E2={"week1-day1":{content:g2,title:"Social Media & Smartphone Life"},"week1-day2":{content:y2,title:"Money & Online Shopping"},"week1-day3":{content:v2,title:"Fitness & Exercise"},"week1-day4":{content:x2,title:"Movies & Entertainment"},"week1-day5":{content:w2,title:"Travel & Vacations"},"week1-day6":{content:k2,title:"Technology & Social Media"},"week1-day7":{content:S2,title:"Week 1 Review"}},T2=e=>{var a;const t=[],n=e.split(`
`);let r=null,i=null,s=[];const o=()=>{s.length>0&&(i?(i.content||(i.content=[]),i.content.push(s.join(`
`).trim())):r&&(r.content||(r.content=[]),r.content.push(s.join(`
`).trim())),s=[])};for(let l=0;l<n.length;l++){const u=n[l].trim();if((a=n[l+1])!=null&&a.trim(),u.startsWith("# [DAY")||u.startsWith("# Day"))o(),i&&(r.parts||(r.parts=[]),r.parts.push(i),i=null),r&&t.push(r),r={type:"day",title:u.replace("# [","").replace("]","").replace("# ",""),parts:[]};else if(u.match(/^#\s*\[PART\s*\d+\]/i)||u.match(/^##\s*PART\s*\d+/i))o(),i&&(r.parts||(r.parts=[]),r.parts.push(i)),i={type:"part",title:u.replace("# [","").replace("]","").replace("# ","").replace("## ",""),content:[]};else if(u.match(/^##\s*\d+\./)||u.match(/^##\s*[A-ZÀ-Ỹ]+/)){o(),i||(i={type:"part",title:"Content",content:[]});const d={word:"",meaning:"",examples:[]},f=u.match(/^##\s*(\d+\.)\s*(.+)/);f&&(d.word=f[2].trim());let h=l+1;for(;h<n.length&&!n[h].trim().startsWith("##")&&!n[h].trim().startsWith("#")&&!n[h].trim().startsWith("---");){const g=n[h].trim();g.startsWith("• Meaning:")&&(d.meaning=g.replace("• Meaning:","").trim()),(g.startsWith("• TOEIC")||g.startsWith("• Daily"))&&d.examples.push(g.replace("• ","")),h++}i.vocab||(i.vocab=[]),i.vocab.push(d)}else u.startsWith("###")?(o(),i||(i={type:"part",title:"Content",content:[]}),i.subtitle=u.replace("###","").trim()):u.startsWith("---")?o():u&&s.push(u)}return o(),i&&(r||(r={type:"day",title:"Unknown",parts:[]}),r.parts.push(i)),r&&t.push(r),t},xg=e=>{const t=E2[e];return t?{id:e,...t,parsed:T2(t.content)}:null},C2=e=>{const t=xg(e);if(!t)return[];const n=[];return t.parsed.forEach(r=>{r.parts&&r.parts.forEach(i=>{i.vocab&&i.vocab.forEach(s=>{n.push({word:s.word,meaning:s.meaning,examples:s.examples})})})}),n};function P2(){const{lessonId:e}=Eu(),t=Nn(),{completeLesson:n,addFlashcard:r}=Ct(),[i,s]=k.useState(null),[o,a]=k.useState([]),[l,u]=k.useState({}),[d,f]=k.useState(!1),[h,g]=k.useState(0);if(k.useEffect(()=>{var m,p;const y=xg(e);if(y){s(y),a(C2(e));const w=(p=(m=y.parsed[0])==null?void 0:m.parts)==null?void 0:p[0];w&&u({0:w.title})}},[e]),!i)return c.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center",children:c.jsx(mr,{className:"text-dark-500",size:32})}),c.jsx("p",{className:"text-dark-400",children:"Loading lesson..."})]})});const v=()=>{n(e,50),o.forEach(m=>r(m)),f(!0)},x=y=>{const m=new SpeechSynthesisUtterance(y);m.rate=.9,speechSynthesis.speak(m)},S=()=>{const y=i.content.split(`
`),m=[];let p=[],w=null;const T=()=>{p.length>0&&(w==="vocab"?m.push(c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 my-4",children:p.map((j,C)=>{const E=j.match(/(\d+)\.\s*(.+?):\s*(.+)/);return E?c.jsx(R.button,{whileTap:{scale:.98},onClick:()=>x(E[2]),className:"card text-left hover:border-primary-500/50",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-primary-400 font-semibold",children:E[2]}),c.jsxs("span",{className:"text-dark-400 text-sm ml-2",children:["- ",E[3]]})]}),c.jsx(Hs,{className:"text-dark-500",size:16})]})},C):null})},m.length)):m.push(c.jsx("ul",{className:`space-y-2 my-4 ${w==="numbered"?"list-decimal":""}`,children:p.map((j,C)=>c.jsxs("li",{className:"text-dark-300 flex items-start gap-2",children:[c.jsx("span",{className:"text-primary-400 mt-1",children:"•"}),c.jsx("span",{className:"leading-relaxed",children:j})]},C))},m.length)),p=[],w=null)};return y.forEach((j,C)=>{var I;const E=j.trim();if(E.startsWith("# [DAY")||E.startsWith("# Day"))T(),m.push(c.jsx(R.h1,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-2xl md:text-3xl font-display font-bold mb-6 gradient-text",children:E.replace("# [","").replace("]","").replace("# ","")},C));else if(E.match(/^#\s*\[PART\s*\d+\]/i))T(),m.push(c.jsx("h2",{className:"text-xl font-bold text-primary-400 mt-8 mb-4",children:E.replace("# [","").replace("]","")},C));else if(E.startsWith("## ")&&!E.match(/^\d+\./)){T();const P=E.includes("VOCAB")||E.includes("Important TOEIC");m.push(c.jsx("h3",{className:`text-lg font-semibold mt-6 mb-3 ${P?"text-accent-400":"text-white"}`,children:E.replace("## ","")},C))}else if(E.startsWith("### "))T(),m.push(c.jsx("h4",{className:"text-md font-medium text-primary-300 mt-4 mb-2",children:E.replace("### ","")},C));else if(E.startsWith("• ")){const P=E.replace("• ","");if(P.match(/^\w+:\s*/)||P.match(/^(Casual|Asking|Natural|Complaining|Friendly|Warning|Task|Situation)/)){T();const L=P.split(":")[0],B=P.split(":").slice(1).join(":");m.push(c.jsxs("div",{className:"my-3",children:[c.jsxs("span",{className:"text-accent-400 font-semibold",children:[L,":"]}),c.jsx("span",{className:"text-dark-300",children:B.replace(/^:\s*/," ")})]},C))}else P.match(/^\d+\.\s*.+:/)?(w="vocab",p.push(P)):(w!=="vocab"&&(w="bullet"),p.push(P))}else if(E.startsWith("- ")&&E.includes("=")){T();const P=E.split("=");m.push(c.jsxs("div",{className:"my-2 py-2 border-t border-dark-700",children:[c.jsx("span",{className:"text-green-400 font-medium",children:P[0].replace("- ","").trim()}),c.jsxs("span",{className:"text-dark-400 ml-2",children:["= ",(I=P[1])==null?void 0:I.trim()]})]},C))}else E.startsWith("---")?(T(),m.push(c.jsx("hr",{className:"border-dark-700 my-6"},C))):E.startsWith("# TEACHER")?(T(),m.push(c.jsxs(R.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20 my-6",children:[c.jsx("h3",{className:"font-semibold text-lg text-yellow-400 mb-3",children:"📌 Teacher's Reminder"}),c.jsx("div",{className:"text-dark-300 space-y-2",children:y.slice(C+1).map((P,L)=>P.trim().startsWith("#")||P.trim()===""?null:c.jsx("p",{children:P.trim()},L))})]},C))):E&&!E.startsWith("#")&&!E.startsWith("---")&&(T(),E.match(/^\d+\.\s*[A-Z]/)&&m.push(c.jsx("p",{className:"text-dark-300 my-2 leading-relaxed",children:E},C)))}),T(),m};return d?c.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs(R.div,{initial:{scale:.8},animate:{scale:1},className:"card text-center max-w-md w-full",children:[c.jsx(R.div,{animate:{rotate:[0,10,-10,0]},transition:{repeat:1/0,duration:2},className:"text-6xl mb-4",children:"🎉"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Lesson Complete!"}),c.jsx("p",{className:"text-dark-400 mb-6",children:"You've earned 50 XP"}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:()=>t("/lessons"),className:"btn-secondary flex-1",children:"Back to Lessons"}),c.jsx("button",{onClick:()=>t("/dashboard"),className:"btn-primary flex-1",children:"Go Home"})]})]})}):c.jsxs("div",{className:"min-h-screen bg-dark-950",children:[c.jsx("header",{className:"sticky top-0 z-40 bg-dark-950/80 backdrop-blur-md border-b border-dark-800",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-3 flex items-center justify-between",children:[c.jsxs("button",{onClick:()=>t("/lessons"),className:"flex items-center gap-2 text-dark-400 hover:text-white transition-colors",children:[c.jsx(t2,{size:20}),c.jsx("span",{children:"Back"})]}),c.jsx("h1",{className:"font-semibold truncate max-w-[200px]",children:i.title}),c.jsx("div",{className:"w-16"})]})}),c.jsx("div",{className:"max-w-4xl mx-auto px-4 py-6 pb-32",children:S()}),c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-md border-t border-dark-800 p-4",children:c.jsxs("div",{className:"max-w-4xl mx-auto flex gap-3",children:[c.jsxs("button",{onClick:()=>t("/flashcards"),className:"btn-secondary flex-1",children:[c.jsx(d2,{size:18}),"Practice Flashcards"]}),c.jsxs("button",{onClick:v,className:"btn-primary flex-1 flex items-center justify-center gap-2",children:[c.jsx(nr,{size:18}),"Complete Lesson"]})]})})]})}const j2=["Social Media & Smartphone","Money & Online Shopping","Fitness & Exercise","Movies & Entertainment","Travel & Vacations","Technology & Social Media","Week 1 Review"];function N2(){const e=Nn(),{lessons:t,user:n}=Ct(),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(R.div,{variants:r,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(R.div,{variants:i,children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Week 1: ",c.jsx("span",{className:"gradient-text",children:"Daily Life English"})]}),c.jsx("p",{className:"text-dark-400",children:"Master everyday English vocabulary and expressions"})]}),c.jsxs(R.div,{variants:i,className:"card",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx(yi,{className:"text-white",size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold",children:"Week 1 Progress"}),c.jsxs("p",{className:"text-dark-400 text-sm",children:["Level ",n.level," • ",n.xp," XP"]})]})]}),c.jsxs("span",{className:"text-2xl font-bold text-primary-400",children:[t.filter(s=>s.completed).length,"/",t.length]})]}),c.jsx("div",{className:"progress-bar h-3",children:c.jsx(R.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${t.filter(s=>s.completed).length/t.length*100}%`},transition:{duration:.8}})})]}),c.jsx(R.div,{variants:i,className:"space-y-3",children:t.map((s,o)=>c.jsxs(R.button,{onClick:()=>e(`/lesson/${s.id}`),whileHover:{scale:1.01,x:4},whileTap:{scale:.99},className:`w-full card flex items-center justify-between text-left group ${s.completed?"border-green-500/30":""}`,children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:`relative w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg
                ${s.completed?"bg-green-500/20 text-green-400":"bg-gradient-to-br from-primary-500 to-accent-500 text-white"}`,children:s.completed?c.jsx(nr,{size:28}):c.jsx("span",{children:o+1})}),c.jsxs("div",{children:[c.jsx("h3",{className:`font-semibold text-lg ${s.completed?"text-dark-400":""}`,children:s.title}),c.jsxs("p",{className:"text-dark-400 text-sm flex items-center gap-2",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(mr,{size:14}),j2[o]]}),c.jsx("span",{className:"text-dark-600",children:"•"}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(pg,{size:14}),"15-20 min"]})]}),s.completed&&c.jsxs("p",{className:"text-green-400 text-sm mt-1",children:["+",s.xp," XP earned"]})]})]}),c.jsx(Qn,{className:`text-dark-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all ${s.completed?"opacity-50":""}`,size:24})]},s.id))}),c.jsxs(R.div,{variants:i,className:"card bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/20",children:[c.jsxs("h3",{className:"font-semibold text-lg mb-2 flex items-center gap-2",children:[c.jsx(yi,{className:"text-yellow-400",size:20}),"Learning Tips"]}),c.jsxs("ul",{className:"space-y-2 text-dark-300 text-sm",children:[c.jsx("li",{children:"• Complete 1 lesson per day to build a strong habit"}),c.jsx("li",{children:"• Review flashcards daily to reinforce memory"}),c.jsx("li",{children:"• Play games to practice vocabulary in a fun way"}),c.jsx("li",{children:"• Don't skip the speaking practice sections!"})]})]})]})}const wg={"week1-day1":{id:"week1-day1",title:"Social Media & Smartphone Life",day:1,week:1,vocabulary:[{word:"Scroll",meaning:"Lướt điện thoại"},{word:"Upload",meaning:"Đăng tải"},{word:"Notification",meaning:"Thông báo"},{word:"Addicted",meaning:"Nghiện, bị phụ thuộc"},{word:"Follow",meaning:"Theo dõi"},{word:"Viral",meaning:"Lan truyền mạnh trên mạng"},{word:"Communicate",meaning:"Giao tiếp"},{word:"Depend",meaning:"Phụ thuộc"},{word:"Improve",meaning:"Cải thiện"},{word:"Influence",meaning:"Ảnh hưởng"},{word:"Balance",meaning:"Cân bằng"}],quizQuestions:[{word:"Scroll",options:["To scroll on phone","To delete","To call","To write"],correct:0},{word:"Viral",options:["To delete","Spread quickly","To vote","To visit"],correct:1},{word:"Addicted",options:["To add","To attach","Dependent on","To connect"],correct:2},{word:"Balance",options:["Balance","Ball","Basket","Ballet"],correct:0}]},"week1-day2":{id:"week1-day2",title:"Money & Online Shopping",day:2,week:1,vocabulary:[{word:"Discount",meaning:"Giảm giá"},{word:"Expensive",meaning:"Đắt"},{word:"Cheap",meaning:"Rẻ"},{word:"Delivery fee",meaning:"Phí giao hàng"},{word:"Brand",meaning:"Thương hiệu"},{word:"Wallet",meaning:"Ví tiền"},{word:"Purchase",meaning:"Mua hàng"},{word:"Budget",meaning:"Ngân sách"},{word:"Compare",meaning:"So sánh"},{word:"Value",meaning:"Giá trị"},{word:"Waste",meaning:"Lãng phí"}],quizQuestions:[{word:"Discount",options:["Sale price","Delivery","Return","Exchange"],correct:0},{word:"Budget",options:["Money plan","Credit card","Bank account","Loan"],correct:0},{word:"Value",options:["Price","Value","Valley"," Valuable"],correct:1},{word:"Waste",options:["To use","To waste","To wash","To watch"],correct:1}]},"week1-day3":{id:"week1-day3",title:"Fitness & Exercise",day:3,week:1,vocabulary:[{word:"Workout",meaning:"Buổi tập thể dục"},{word:"Muscle soreness",meaning:"Đau cơ"},{word:"Stretch",meaning:"Giãn cơ"},{word:"Diet",meaning:"Chế độ ăn uống"},{word:"Gym membership",meaning:"Thẻ tập gym"},{word:"Cardio",meaning:"Bài tập tim mạch"},{word:"Maintain",meaning:"Duy trì"},{word:"Improve",meaning:"Cải thiện"},{word:"Reduce",meaning:"Giảm bớt"},{word:"Energy",meaning:"Năng lượng"},{word:"Routine",meaning:"Thói quen hằng ngày"}],quizQuestions:[{word:"Workout",options:["Work schedule","Exercise","Meeting","Project"],correct:1},{word:"Routine",options:["Emergency","Schedule","Accident","Holiday"],correct:1},{word:"Cardio",options:["Card","Cardio","Career","Cargo"],correct:1},{word:"Energy",options:["Engine","Energy","Entry","Enemy"],correct:1}]},"week1-day4":{id:"week1-day4",title:"Movies & Entertainment",day:4,week:1,vocabulary:[{word:"Spoiler",meaning:"Tiết lộ nội dung phim"},{word:"Episode",meaning:"Tập phim"},{word:"Series",meaning:"Series/phim dài tập"},{word:"Subtitle",meaning:"Phụ đề"},{word:"Streaming service",meaning:"Nền tảng xem phim trực tuyến"},{word:"Genre",meaning:"Thể loại"},{word:"Entertain",meaning:"Giải trí"},{word:"Recommend",meaning:"Đề xuất, giới thiệu"},{word:"Popular",meaning:"Phổ biến, nổi tiếng"},{word:"Relax",meaning:"Thư giãn"},{word:"Emotion",meaning:"Cảm xúc"}],quizQuestions:[{word:"Spoiler",options:["To spoil","To spoiler","Spoiler","To tell"],correct:0},{word:"Genre",options:["Gender","Genre","Gentle","General"],correct:1},{word:"Relax",options:["To relax","To relay","To release","To relate"],correct:0},{word:"Emotion",options:["Emotion","Motion","Mountain","Promotion"],correct:0}]},"week1-day5":{id:"week1-day5",title:"Travel & Vacations",day:5,week:1,vocabulary:[{word:"Destination",meaning:"Điểm đến"},{word:"Backpack",meaning:"Ba lô du lịch"},{word:"Reservation",meaning:"Đặt chỗ"},{word:"Tourist attraction",meaning:"Địa điểm du lịch"},{word:"Schedule",meaning:"Lịch trình"},{word:"Souvenir",meaning:"Quà lưu niệm"},{word:"Explore",meaning:"Khám phá"},{word:"Journey",meaning:"Hành trình"},{word:"Adventure",meaning:"Cuộc phiêu lưu"},{word:"Culture",meaning:"Văn hóa"},{word:"Memory",meaning:"Kỷ niệm"}],quizQuestions:[{word:"Destination",options:["Decision","Location","Information","Reservation"],correct:1},{word:"Explore",options:["To explain","To discover","To express","To expose"],correct:1},{word:"Adventure",options:["Adventure","Adverse","Advance","Advice"],correct:0},{word:"Souvenir",options:["Souvenir","Revenue","Prevent","Convention"],correct:0}]},"week1-day6":{id:"week1-day6",title:"Technology & Social Media",day:6,week:1,vocabulary:[{word:"Notification",meaning:"Thông báo"},{word:"Upload",meaning:"Tải lên"},{word:"Comment section",meaning:"Phần bình luận"},{word:"Screen time",meaning:"Thời gian sử dụng màn hình"},{word:"Viral",meaning:"Lan truyền mạnh"},{word:"Content creator",meaning:"Người sáng tạo nội dung"},{word:"Communicate",meaning:"Giao tiếp"},{word:"Access",meaning:"Truy cập/tiếp cận"},{word:"Addiction",meaning:"Sự nghiện"},{word:"Convenient",meaning:"Tiện lợi"},{word:"Influence",meaning:"Ảnh hưởng"}],quizQuestions:[{word:"Addiction",options:["Habit","Disease","Bad habit","Strong need"],correct:3},{word:"Convenient",options:["Comfortable","Available","Easy to use","Popular"],correct:2},{word:"Access",options:["To access","To success","To process","To possess"],correct:0},{word:"Screen time",options:["Screen time","Screen tide","Screen tile","Screen team"],correct:0}]},"week1-day7":{id:"week1-day7",title:"Week 1 Review",day:7,week:1,vocabulary:[{word:"Scroll",meaning:"Lướt điện thoại"},{word:"Discount",meaning:"Giảm giá"},{word:"Workout",meaning:"Buổi tập"},{word:"Genre",meaning:"Thể loại"},{word:"Destination",meaning:"Điểm đến"},{word:"Communicate",meaning:"Giao tiếp"},{word:"Budget",meaning:"Ngân sách"},{word:"Routine",meaning:"Thói quen"},{word:"Emotion",meaning:"Cảm xúc"},{word:"Culture",meaning:"Văn hóa"},{word:"Influence",meaning:"Ảnh hưởng"}],quizQuestions:[{word:"Budget",options:["Money plan","Credit card","Bank account","Loan"],correct:0},{word:"Routine",options:["Emergency","Schedule","Accident","Holiday"],correct:1},{word:"Influence",options:["To influence","To infer","To inform","To instruct"],correct:0}]}},Pl=e=>{const t=wg[e];return t?t.vocabulary:[]},ha=e=>{const t=wg[e];return t?t.quizQuestions:[]};class I2{constructor(){this.currentUtterance=null,this.audioContext=null,this.enabled=!0}setEnabled(t){this.enabled=t}speak(t,n="en-US",r=.9){return this.enabled?(this.stop(),new Promise((i,s)=>{if(!("speechSynthesis"in window)){console.warn("Speech synthesis not supported"),i();return}const o=new SpeechSynthesisUtterance(t);o.lang=n,o.rate=r,o.pitch=1,o.volume=1,o.onend=()=>{this.currentUtterance=null,i()},o.onerror=a=>{this.currentUtterance=null,console.warn("Audio playback error:",a.error),i()},this.currentUtterance=o,speechSynthesis.speak(o)})):Promise.resolve()}speakWord(t){return this.speak(t,"en-US",.85)}speakVietnamese(t){return this.speak(t,"vi-VN",.9)}stop(){this.currentUtterance&&(speechSynthesis.cancel(),this.currentUtterance=null)}playSuccessSound(){return this.speak("Correct","en-US",1.2)}playErrorSound(){return this.speak("Wrong","en-US",.8)}playCompleteSound(){return this.speak("Congratulations","en-US",1)}}const dn=new I2,A2=[{id:"speed-quiz",name:"Speed Quiz",description:"Answer vocabulary questions quickly!",icon:"⚡",color:"from-yellow-500 to-orange-500"},{id:"memory-match",name:"Memory Match",description:"Match words with their meanings",icon:"🧠",color:"from-blue-500 to-cyan-500"},{id:"vocab-battle",name:"Vocab Battle",description:"Challenge yourself with words",icon:"🎯",color:"from-purple-500 to-violet-500"}];function M2(){Nn();const{lessonId:e}=Eu(),{addXP:t,winGame:n,incrementGamesPlayed:r,gameStats:i}=Ct(),[s,o]=k.useState(null),[a,l]=k.useState({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1,moves:0,timer:0,isPaused:!1}),[u,d]=k.useState([]),[f,h]=k.useState([]),[g,v]=k.useState([]),[x,S]=k.useState([]),[y,m]=k.useState([]),[p,w]=k.useState(null);k.useEffect(()=>{if(e){const P=Pl(e),L=ha(e);m(P),S(L.length>0?L:ha("week1-day1"))}else m(Pl("week1-day1")),S(ha("week1-day1"))},[e]),k.useEffect(()=>()=>{p&&clearInterval(p)},[p]);const T=P=>{if(p&&clearInterval(p),o(P),r(),P==="memory-match"&&y.length>0){const L=y.slice(0,6).flatMap((b,$)=>[{id:`word-${$}`,word:b.word,type:"word",pairId:$},{id:`meaning-${$}`,meaning:b.meaning,type:"meaning",pairId:$}]).sort(()=>Math.random()-.5);d(L),h([]),v([]),l({currentQuestion:0,score:0,answers:[],timeLeft:0,gameOver:!1,moves:0,timer:0,isPaused:!1});const B=setInterval(()=>{l(b=>({...b,timer:b.timer+1}))},1e3);w(B)}else if(P==="speed-quiz"||P==="vocab-battle"){const L=[...x];for(let b=L.length-1;b>0;b--){const $=Math.floor(Math.random()*(b+1));[L[b],L[$]]=[L[$],L[b]]}l({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1,moves:0,timer:0,isPaused:!1});const B=setInterval(()=>{l(b=>b.timeLeft<=1?(clearInterval(B),{...b,timeLeft:0,gameOver:!0}):{...b,timeLeft:b.timeLeft-1})},1e3);w(B)}},j=P=>{const L=x[a.currentQuestion];if(!L)return;const B=P===L.correct;B?dn.playSuccessSound():dn.playErrorSound(),l(b=>({...b,score:B?b.score+10:b.score,answers:[...b.answers,{question:L.word,correct:B,yourAnswer:P,correctAnswer:L.correct}],currentQuestion:b.currentQuestion+1})),a.currentQuestion>=x.length-1&&E()},C=P=>{if(a.isPaused||f.length>=2||g.includes(P.pairId))return;const L=[...f,P];h(L),dn.speakWord(P.word||P.meaning),L.length===2&&(l(b=>({...b,moves:b.moves+1})),L[0].pairId===L[1].pairId&&L[0].id!==L[1].id?(v([...g,L[0].pairId]),h([]),dn.playSuccessSound(),g.length===y.length-1&&(clearInterval(p),l(b=>({...b,score:100-b.moves*5+Math.max(0,60-b.timer)*2,gameOver:!0})),n(100))):(l(b=>({...b,isPaused:!0})),setTimeout(()=>{h([]),l(b=>({...b,isPaused:!1}))},1e3)))},E=()=>{p&&clearInterval(p),l(P=>({...P,gameOver:!0})),t(a.score),n(a.score),dn.playCompleteSound()},I=()=>{p&&clearInterval(p),w(null),o(null),l({currentQuestion:0,score:0,answers:[],timeLeft:60,gameOver:!1,moves:0,timer:0,isPaused:!1})};if(s==="speed-quiz"||s==="vocab-battle"){if(a.gameOver)return c.jsx(R.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center max-w-md w-full",children:[c.jsx("div",{className:"text-6xl mb-4",children:a.score>50?"🏆":"💪"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Game Over!"}),c.jsx("p",{className:"text-dark-400 mb-2",children:"Your Score"}),c.jsxs("p",{className:"text-4xl font-bold gradient-text mb-6",children:[a.score," XP"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>T(s),className:"btn-secondary flex-1",children:[c.jsx(Tl,{size:18}),"Play Again"]}),c.jsx("button",{onClick:I,className:"btn-primary flex-1",children:"Back to Games"})]})]})});const P=x[a.currentQuestion];return P?c.jsx("div",{className:"min-h-screen bg-dark-950 p-4",children:c.jsxs("div",{className:"max-w-xl mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("button",{onClick:I,className:"text-dark-400 hover:text-white",children:"← Back"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2 text-yellow-400",children:[c.jsx(vf,{size:20}),c.jsxs("span",{className:"font-bold",children:[a.timeLeft,"s"]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(Cl,{size:20}),c.jsxs("span",{className:"font-bold",children:[a.score," XP"]})]})]})]}),c.jsx("div",{className:"progress-bar mb-6",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${a.currentQuestion/x.length*100}%`}})}),c.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"card mb-6",children:[c.jsx("h3",{className:"text-xl font-semibold text-center mb-2",children:"What does this mean?"}),c.jsx("p",{className:"text-3xl font-bold text-center gradient-text mb-6",children:P.word}),c.jsx("div",{className:"grid grid-cols-1 gap-3",children:P.options.map((L,B)=>c.jsx(R.button,{whileTap:{scale:.98},onClick:()=>j(B),className:"btn-secondary text-left",children:L},B))})]},a.currentQuestion),c.jsxs("p",{className:"text-center text-dark-400",children:["Question ",a.currentQuestion+1," of ",x.length]})]})}):c.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center",children:c.jsx("p",{className:"text-dark-400",children:"Loading questions..."})})}return s==="memory-match"?a.gameOver?c.jsx(R.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center max-w-md w-full",children:[c.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),c.jsx("h2",{className:"text-2xl font-display font-bold mb-2",children:"Excellent!"}),c.jsxs("p",{className:"text-dark-400 mb-2",children:["Time: ",a.timer,"s | Moves: ",a.moves]}),c.jsxs("p",{className:"text-4xl font-bold gradient-text mb-6",children:["+",a.score," XP"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>T("memory-match"),className:"btn-secondary flex-1",children:[c.jsx(Tl,{size:18}),"Play Again"]}),c.jsx("button",{onClick:I,className:"btn-primary flex-1",children:"Back to Games"})]})]})}):c.jsx("div",{className:"min-h-screen bg-dark-950 p-4",children:c.jsxs("div",{className:"max-w-xl mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("button",{onClick:I,className:"text-dark-400 hover:text-white",children:"← Back"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2 text-yellow-400",children:[c.jsx(vf,{size:20}),c.jsxs("span",{className:"font-bold",children:[a.timer,"s"]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(yg,{size:20}),c.jsxs("span",{className:"font-bold",children:[g.length,"/",y.length]})]})]})]}),c.jsx("div",{className:"grid grid-cols-3 gap-3",children:u.map(P=>{const L=f.includes(P)||g.includes(P.pairId);return c.jsx(R.button,{whileTap:{scale:.95},onClick:()=>C(P),className:`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300 ${L?"bg-primary-500/20 border-2 border-primary-500 text-white":"bg-dark-800 border-2 border-dark-700 hover:border-primary-500 text-dark-400"}`,children:L?c.jsx("span",{className:"text-center px-1",children:P.type==="word"?P.word:P.meaning}):"?"},P.id)})})]})}):c.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:["Games ",c.jsx("span",{className:"gradient-text",children:"Hub"})]}),c.jsx("p",{className:"text-dark-400",children:e?"Practice with lesson vocabulary!":"Practice English through fun mini-games"})]}),e&&c.jsx("div",{className:"card bg-primary-500/10 border-primary-500/20",children:c.jsxs("p",{className:"text-primary-400 text-sm",children:["📚 Playing with vocabulary from: ",y.length," words"]})}),c.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[c.jsxs("div",{className:"card text-center",children:[c.jsx(So,{className:"mx-auto text-primary-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:i.gamesPlayed}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Played"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx(n2,{className:"mx-auto text-accent-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:i.gamesWon}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Won"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx(Cl,{className:"mx-auto text-yellow-400 mb-2",size:24}),c.jsx("span",{className:"text-xl font-bold",children:i.highScore}),c.jsx("p",{className:"text-dark-400 text-sm",children:"High Score"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:A2.map(P=>c.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>T(P.id),className:"card text-left group",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl bg-gradient-to-br ${P.color} flex items-center justify-center text-3xl`,children:P.icon}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-semibold text-lg group-hover:text-primary-400 transition-colors",children:P.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:P.description})]}),c.jsx(Qn,{className:"text-dark-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all",size:20})]})},P.id))}),c.jsxs("div",{className:"card bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/20",children:[c.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[c.jsx(i2,{className:"text-primary-400",size:20}),"Learning Tip"]}),c.jsx("p",{className:"text-dark-300 text-sm",children:"Playing games regularly helps reinforce vocabulary and makes learning more enjoyable!"})]})]})}function R2(){const{lessonId:e}=Eu(),t=Nn(),{markFlashcardLearned:n,flashcards:r}=Ct(),[i,s]=k.useState([]),[o,a]=k.useState(0),[l,u]=k.useState(!1),[d,f]=k.useState(!1),[h,g]=k.useState(!1),[v,x]=k.useState([]),[S,y]=k.useState([]);k.useEffect(()=>{const I=Pl(e||"week1-day1");s(I),a(0),u(!1),g(!1)},[e]);const m=()=>{const I=[...i].sort(()=>Math.random()-.5);s(I),g(!0),a(0),u(!1)},p=I=>{dn.speakWord(I)},w=()=>{u(!1),setTimeout(()=>{a(I=>(I+1)%i.length)},100)},T=()=>{u(!1),setTimeout(()=>{a(I=>(I-1+i.length)%i.length)},100)},j=()=>{const I=i[o];I&&!S.includes(I.word)&&(y([...S,I.word]),n(I.word),dn.playSuccessSound()),w()},C=()=>{const I=i[o];I&&!v.includes(I.word)&&x([...v,I.word]),w()},E=i[o];return E?c.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6 pb-24",children:[c.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Flashcards"})}),c.jsxs("p",{className:"text-dark-400",children:[e?"Lesson Vocabulary":"All Vocabulary"," • ",i.length," cards"]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:()=>f(!d),className:`btn-secondary ${d?"bg-green-500/20 border-green-500":""}`,children:[c.jsx(nr,{size:18}),"Learned (",S.length,")"]}),c.jsx("button",{onClick:m,className:"btn-secondary",children:c.jsx(Tl,{size:18})})]})]}),e&&c.jsx("div",{className:"card bg-primary-500/10 border-primary-500/20",children:c.jsxs("p",{className:"text-primary-400 text-sm flex items-center gap-2",children:["📚 Learning vocabulary from: ",e.replace("week1-day","Day ")]})}),c.jsx("div",{className:"progress-bar h-2",children:c.jsx(R.div,{className:"progress-bar-fill",animate:{width:`${S.length/i.length*100}%`}})}),c.jsxs("div",{className:"flex justify-center gap-4 text-dark-400 text-sm",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(nr,{size:14,className:"text-green-400"}),S.length," learned"]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(da,{size:14,className:"text-yellow-400"}),v.length," difficult"]})]}),c.jsx("div",{className:"flex justify-center",children:c.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:c.jsx("div",{onClick:()=>u(!l),className:"relative min-h-[300px] cursor-pointer perspective-1000",children:c.jsxs(R.div,{animate:{rotateY:l?180:0},transition:{duration:.6},className:"w-full min-h-[300px]",style:{transformStyle:"preserve-3d"},children:[c.jsxs("div",{className:`absolute inset-0 card flex flex-col items-center justify-center p-8 ${l?"opacity-0":"opacity-100"}`,style:{backfaceVisibility:"hidden"},children:[c.jsx("span",{className:"text-sm text-dark-400 mb-2",children:"English"}),c.jsx("h2",{className:"text-4xl font-display font-bold gradient-text mb-6 text-center",children:E.word}),c.jsxs("button",{onClick:I=>{I.stopPropagation(),p(E.word)},className:"btn-secondary",children:[c.jsx(Hs,{size:18}),"Listen"]}),c.jsx("p",{className:"text-dark-500 text-sm mt-4",children:"Tap to flip"})]}),c.jsxs("div",{className:`absolute inset-0 card flex flex-col items-center justify-center p-8 ${l?"opacity-100":"opacity-0"}`,style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[c.jsx("span",{className:"text-sm text-dark-400 mb-2",children:"Vietnamese"}),c.jsx("h2",{className:"text-3xl font-display font-bold text-white mb-6 text-center",children:E.meaning}),c.jsxs("button",{onClick:I=>{I.stopPropagation(),p(E.word)},className:"btn-secondary mb-4",children:[c.jsx(Hs,{size:18}),"Listen"]})]})]})})})}),c.jsxs("div",{className:"flex items-center justify-between max-w-md mx-auto",children:[c.jsxs("button",{onClick:T,className:"btn-secondary flex items-center gap-2",children:[c.jsx(o2,{size:20}),"Previous"]}),c.jsxs("span",{className:"text-dark-400",children:[o+1," / ",i.length]}),c.jsxs("button",{onClick:w,className:"btn-secondary flex items-center gap-2",children:["Next",c.jsx(a2,{size:20})]})]}),c.jsxs("div",{className:"flex justify-center gap-4",children:[c.jsxs("button",{onClick:C,className:"btn-secondary flex items-center gap-2",children:[c.jsx(da,{size:18}),"Mark Difficult"]}),c.jsxs("button",{onClick:j,className:"btn-accent flex items-center gap-2",children:[c.jsx(nr,{size:18}),"Mark as Learned"]})]}),v.length>0&&c.jsxs("div",{className:"card mt-4",children:[c.jsxs("h3",{className:"font-semibold mb-2 flex items-center gap-2",children:[c.jsx(da,{className:"text-yellow-400",size:18}),"Difficult Cards (",v.length,")"]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:v.map(I=>c.jsx("span",{className:"badge badge-primary",children:I},I))})]})]}):c.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center p-4",children:c.jsxs("div",{className:"card text-center",children:[c.jsx(Gu,{className:"mx-auto text-primary-400 mb-4",size:48}),c.jsx("h2",{className:"text-xl font-semibold mb-2",children:"No Flashcards Available"}),c.jsx("p",{className:"text-dark-400 mb-4",children:"Complete a lesson to see flashcards"}),c.jsx("button",{onClick:()=>t("/lessons"),className:"btn-primary",children:"Go to Lessons"})]})})}function L2(){const{achievements:e,user:t,lessons:n,flashcards:r,gameStats:i}=Ct(),s=e.filter(l=>l.unlocked).length,o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(R.div,{variants:o,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Achievements"})}),c.jsxs("p",{className:"text-dark-400",children:[s,"/",e.length," unlocked"]})]}),c.jsx(R.div,{variants:a,className:"card",children:c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-primary-400",children:t.xp}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Total XP"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-orange-400",children:t.streak}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Day Streak"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-green-400",children:n.filter(l=>l.completed).length}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Lessons Done"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-2xl font-bold text-accent-400",children:r.filter(l=>l.learned).length}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Words Learned"})]})]})}),c.jsx(R.div,{variants:a,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map(l=>c.jsxs(R.div,{variants:a,className:`card flex items-center gap-4 ${l.unlocked?"border-primary-500/30 bg-primary-500/5":"opacity-60"}`,children:[c.jsx("div",{className:`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${l.unlocked?"bg-gradient-to-br from-primary-500 to-accent-500":"bg-dark-800"}`,children:l.unlocked?l.icon:"🔒"}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:`font-semibold text-lg ${l.unlocked?"text-white":"text-dark-400"}`,children:l.name}),c.jsx("p",{className:"text-dark-400 text-sm",children:l.description}),l.unlocked&&c.jsxs("p",{className:"text-primary-400 text-xs mt-1 flex items-center gap-1",children:[c.jsx(nr,{size:12})," Unlocked"]})]})]},l.id))}),c.jsx(R.div,{variants:a,className:"card bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx(vi,{className:"text-yellow-400",size:40}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"font-semibold text-lg",children:"Total Progress"}),c.jsx("div",{className:"progress-bar mt-2",children:c.jsx(R.div,{className:"progress-bar-fill bg-gradient-to-r from-yellow-500 to-orange-500",animate:{width:`${s/e.length*100}%`}})})]}),c.jsxs("span",{className:"text-2xl font-bold text-yellow-400",children:[Math.round(s/e.length*100),"%"]})]})})]})}function b2(){const{settings:e,updateSettings:t}=Ct(),n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},i=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(localStorage.clear(),window.location.reload())};return c.jsxs(R.div,{variants:n,initial:"hidden",animate:"visible",className:"space-y-6 max-w-2xl mx-auto",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-display font-bold mb-2",children:c.jsx("span",{className:"gradient-text",children:"Settings"})}),c.jsx("p",{className:"text-dark-400",children:"Customize your learning experience"})]}),c.jsxs(R.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(Hs,{className:"text-primary-400",size:20}),"Sound"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Sound Effects"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Play sounds for achievements and actions"})]}),c.jsx("button",{onClick:()=>t({soundEnabled:!e.soundEnabled}),className:`w-12 h-6 rounded-full transition-colors ${e.soundEnabled?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.soundEnabled?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(R.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(c2,{className:"text-primary-400",size:20}),"Display"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Dark Mode"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Use dark theme throughout the app"})]}),c.jsx("button",{onClick:()=>t({darkMode:!e.darkMode}),className:`w-12 h-6 rounded-full transition-colors ${e.darkMode?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.darkMode?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(R.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(r2,{className:"text-primary-400",size:20}),"Notifications"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-medium",children:"Daily Reminders"}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Get reminded to practice daily"})]}),c.jsx("button",{onClick:()=>t({notifications:!e.notifications}),className:`w-12 h-6 rounded-full transition-colors ${e.notifications?"bg-primary-500":"bg-dark-600"}`,children:c.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${e.notifications?"translate-x-6":"translate-x-0.5"}`})})]})})]}),c.jsxs(R.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(f2,{className:"text-red-400",size:20}),"Data Management"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-dark-400 text-sm mb-3",children:"Clear all your progress, achievements, and settings. This action cannot be undone."}),c.jsx("button",{onClick:i,className:"px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors",children:"Reset All Data"})]})})]}),c.jsxs(R.div,{variants:r,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(u2,{className:"text-primary-400",size:20}),"About"]}),c.jsxs("div",{className:"space-y-2 text-dark-400 text-sm",children:[c.jsx("p",{children:"English Learning App v1.0.0"}),c.jsx("p",{children:"Built with React, Vite, and TailwindCSS"}),c.jsx("p",{children:"Designed for GitHub Pages deployment"})]})]})]})}function D2(){const{user:e,lessons:t,flashcards:n,gameStats:r,achievements:i}=Ct(),s=t.filter(f=>f.completed).length,o=n.filter(f=>f.learned).length,a=i.filter(f=>f.unlocked).length,l=e.xp%200/200*100,u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return c.jsxs(R.div,{variants:u,initial:"hidden",animate:"visible",className:"space-y-6",children:[c.jsxs(R.div,{variants:d,className:"card relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"}),c.jsxs("div",{className:"relative flex flex-col md:flex-row items-center gap-6",children:[c.jsx("div",{className:"w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center",children:c.jsx(vg,{className:"text-white",size:48})}),c.jsxs("div",{className:"text-center md:text-left",children:[c.jsx("h1",{className:"text-2xl font-display font-bold mb-1",children:e.name}),c.jsx("p",{className:"text-dark-400",children:"English Learner"}),c.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-4 mt-3",children:[c.jsxs("div",{className:"flex items-center gap-2 text-primary-400",children:[c.jsx(yi,{size:18,fill:"currentColor"}),c.jsxs("span",{className:"font-bold",children:["Level ",e.level]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-orange-400",children:[c.jsx(gg,{size:18,fill:"currentColor"}),c.jsxs("span",{className:"font-bold",children:[e.streak," day streak"]})]})]})]})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[c.jsxs("span",{className:"text-dark-400",children:["XP Progress to Level ",e.level+1]}),c.jsxs("span",{className:"text-primary-400",children:[e.xp," / ",e.level*200," XP"]})]}),c.jsx("div",{className:"progress-bar h-3",children:c.jsx(R.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${l}%`},transition:{duration:1}})})]})]}),c.jsxs(R.div,{variants:d,className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-500/20 flex items-center justify-center",children:c.jsx(mr,{className:"text-primary-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:s}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Lessons"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-green-500/20 flex items-center justify-center",children:c.jsx(yi,{className:"text-green-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:o}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Words"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-500/20 flex items-center justify-center",children:c.jsx(So,{className:"text-accent-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:r.gamesWon}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Games Won"})]}),c.jsxs("div",{className:"card text-center",children:[c.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-xl bg-yellow-500/20 flex items-center justify-center",children:c.jsx(vi,{className:"text-yellow-400",size:24})}),c.jsx("p",{className:"text-2xl font-bold",children:a}),c.jsx("p",{className:"text-dark-400 text-sm",children:"Achievements"})]})]}),c.jsxs(R.div,{variants:d,className:"card",children:[c.jsxs("h2",{className:"font-semibold text-lg mb-4 flex items-center gap-2",children:[c.jsx(s2,{className:"text-primary-400",size:20}),"Learning Activity"]}),c.jsx("div",{className:"grid grid-cols-7 gap-2",children:Array.from({length:28}).map((f,h)=>{const g=h<e.streak;return c.jsx("div",{className:`aspect-square rounded-lg ${g?"bg-gradient-to-br from-primary-500 to-accent-500":"bg-dark-800"}`,style:{opacity:g?1:.3}},h)})}),c.jsxs("p",{className:"text-dark-400 text-sm mt-4 text-center",children:["You've been learning for ",e.streak," days in a row!"]})]}),c.jsxs(R.div,{variants:d,className:"card",children:[c.jsx("h2",{className:"font-semibold text-lg mb-4",children:"All Time Stats"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Total XP Earned"}),c.jsxs("span",{className:"font-bold text-primary-400",children:[e.xp," XP"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Current Level"}),c.jsxs("span",{className:"font-bold",children:["Level ",e.level]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Current Streak"}),c.jsxs("span",{className:"font-bold text-orange-400",children:[e.streak," days"]})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"Total Games Played"}),c.jsx("span",{className:"font-bold",children:r.gamesPlayed})]}),c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-dark-400",children:"High Score"}),c.jsxs("span",{className:"font-bold text-accent-400",children:[r.highScore," XP"]})]})]})]})]})}function V2(){const{updateStreak:e,user:t}=Ct();return k.useEffect(()=>{e()},[]),c.jsx(m2,{children:c.jsxs(Fv,{children:[c.jsx(rt,{path:"/",element:c.jsx(_v,{to:"/dashboard",replace:!0})}),c.jsx(rt,{path:"/dashboard",element:c.jsx(p2,{})}),c.jsx(rt,{path:"/lessons",element:c.jsx(N2,{})}),c.jsx(rt,{path:"/lesson/:lessonId",element:c.jsx(P2,{})}),c.jsx(rt,{path:"/games",element:c.jsx(M2,{})}),c.jsx(rt,{path:"/flashcards",element:c.jsx(R2,{})}),c.jsx(rt,{path:"/achievements",element:c.jsx(L2,{})}),c.jsx(rt,{path:"/profile",element:c.jsx(D2,{})}),c.jsx(rt,{path:"/settings",element:c.jsx(b2,{})})]})})}ma.createRoot(document.getElementById("root")).render(c.jsx(wi.StrictMode,{children:c.jsx(Yv,{children:c.jsx(V2,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/english-app-v1/sw.js").catch(()=>{})});
