(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function u(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(h){if(h.ep)return;h.ep=!0;const m=u(h);fetch(h.href,m)}})();function fg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Uo={exports:{}},Hi={};var sp;function mg(){if(sp)return Hi;sp=1;var o=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(r,h,m){var f=null;if(m!==void 0&&(f=""+m),h.key!==void 0&&(f=""+h.key),"key"in h){m={};for(var A in h)A!=="key"&&(m[A]=h[A])}else m=h;return h=m.ref,{$$typeof:o,type:r,key:f,ref:h!==void 0?h:null,props:m}}return Hi.Fragment=l,Hi.jsx=u,Hi.jsxs=u,Hi}var lp;function gg(){return lp||(lp=1,Uo.exports=mg()),Uo.exports}var d=gg(),Ho={exports:{}},Y={};var rp;function yg(){if(rp)return Y;rp=1;var o=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),U=Symbol.iterator;function K(P){return P===null||typeof P!="object"?null:(P=U&&P[U]||P["@@iterator"],typeof P=="function"?P:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Ue={};function F(P,I,z){this.props=P,this.context=I,this.refs=Ue,this.updater=z||Z}F.prototype.isReactComponent={},F.prototype.setState=function(P,I){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,I,"setState")},F.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function Ce(){}Ce.prototype=F.prototype;function ze(P,I,z){this.props=P,this.context=I,this.refs=Ue,this.updater=z||Z}var Ge=ze.prototype=new Ce;Ge.constructor=ze,J(Ge,F.prototype),Ge.isPureReactComponent=!0;var Xe=Array.isArray;function Re(){}var ie={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Un(P,I,z){var L=z.ref;return{$$typeof:o,type:P,key:I,ref:L!==void 0?L:null,props:z}}function ta(P,I){return Un(P.type,I,P.props)}function Hn(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Je(P){var I={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(z){return I[z]})}var Mt=/\/+/g;function Kn(P,I){return typeof P=="object"&&P!==null&&P.key!=null?Je(""+P.key):I.toString(36)}function xn(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(Re,Re):(P.status="pending",P.then(function(I){P.status==="pending"&&(P.status="fulfilled",P.value=I)},function(I){P.status==="pending"&&(P.status="rejected",P.reason=I)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function x(P,I,z,L,G){var $=typeof P;($==="undefined"||$==="boolean")&&(P=null);var de=!1;if(P===null)de=!0;else switch($){case"bigint":case"string":case"number":de=!0;break;case"object":switch(P.$$typeof){case o:case l:de=!0;break;case R:return de=P._init,x(de(P._payload),I,z,L,G)}}if(de)return G=G(P),de=L===""?"."+Kn(P,0):L,Xe(G)?(z="",de!=null&&(z=de.replace(Mt,"$&/")+"/"),x(G,I,z,"",function(Ka){return Ka})):G!=null&&(Hn(G)&&(G=ta(G,z+(G.key==null||P&&P.key===G.key?"":(""+G.key).replace(Mt,"$&/")+"/")+de)),I.push(G)),1;de=0;var Fe=L===""?".":L+":";if(Xe(P))for(var Ae=0;Ae<P.length;Ae++)L=P[Ae],$=Fe+Kn(L,Ae),de+=x(L,I,z,$,G);else if(Ae=K(P),typeof Ae=="function")for(P=Ae.call(P),Ae=0;!(L=P.next()).done;)L=L.value,$=Fe+Kn(L,Ae++),de+=x(L,I,z,$,G);else if($==="object"){if(typeof P.then=="function")return x(xn(P),I,z,L,G);throw I=String(P),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(P,I,z){if(P==null)return P;var L=[],G=0;return x(P,L,"","",function($){return I.call(z,$,G++)}),L}function q(P){if(P._status===-1){var I=P._result;I=I(),I.then(function(z){(P._status===0||P._status===-1)&&(P._status=1,P._result=z)},function(z){(P._status===0||P._status===-1)&&(P._status=2,P._result=z)}),P._status===-1&&(P._status=0,P._result=I)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:H,forEach:function(P,I,z){H(P,function(){I.apply(this,arguments)},z)},count:function(P){var I=0;return H(P,function(){I++}),I},toArray:function(P){return H(P,function(I){return I})||[]},only:function(P){if(!Hn(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Y.Activity=M,Y.Children=Te,Y.Component=F,Y.Fragment=u,Y.Profiler=h,Y.PureComponent=ze,Y.StrictMode=r,Y.Suspense=g,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Y.__COMPILER_RUNTIME={__proto__:null,c:function(P){return ie.H.useMemoCache(P)}},Y.cache=function(P){return function(){return P.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(P,I,z){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var L=J({},P.props),G=P.key;if(I!=null)for($ in I.key!==void 0&&(G=""+I.key),I)!Ve.call(I,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&I.ref===void 0||(L[$]=I[$]);var $=arguments.length-2;if($===1)L.children=z;else if(1<$){for(var de=Array($),Fe=0;Fe<$;Fe++)de[Fe]=arguments[Fe+2];L.children=de}return Un(P.type,G,L)},Y.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:m,_context:P},P},Y.createElement=function(P,I,z){var L,G={},$=null;if(I!=null)for(L in I.key!==void 0&&($=""+I.key),I)Ve.call(I,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(G[L]=I[L]);var de=arguments.length-2;if(de===1)G.children=z;else if(1<de){for(var Fe=Array(de),Ae=0;Ae<de;Ae++)Fe[Ae]=arguments[Ae+2];G.children=Fe}if(P&&P.defaultProps)for(L in de=P.defaultProps,de)G[L]===void 0&&(G[L]=de[L]);return Un(P,$,G)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(P){return{$$typeof:A,render:P}},Y.isValidElement=Hn,Y.lazy=function(P){return{$$typeof:R,_payload:{_status:-1,_result:P},_init:q}},Y.memo=function(P,I){return{$$typeof:T,type:P,compare:I===void 0?null:I}},Y.startTransition=function(P){var I=ie.T,z={};ie.T=z;try{var L=P(),G=ie.S;G!==null&&G(z,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(Re,fe)}catch($){fe($)}finally{I!==null&&z.types!==null&&(I.types=z.types),ie.T=I}},Y.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Y.use=function(P){return ie.H.use(P)},Y.useActionState=function(P,I,z){return ie.H.useActionState(P,I,z)},Y.useCallback=function(P,I){return ie.H.useCallback(P,I)},Y.useContext=function(P){return ie.H.useContext(P)},Y.useDebugValue=function(){},Y.useDeferredValue=function(P,I){return ie.H.useDeferredValue(P,I)},Y.useEffect=function(P,I){return ie.H.useEffect(P,I)},Y.useEffectEvent=function(P){return ie.H.useEffectEvent(P)},Y.useId=function(){return ie.H.useId()},Y.useImperativeHandle=function(P,I,z){return ie.H.useImperativeHandle(P,I,z)},Y.useInsertionEffect=function(P,I){return ie.H.useInsertionEffect(P,I)},Y.useLayoutEffect=function(P,I){return ie.H.useLayoutEffect(P,I)},Y.useMemo=function(P,I){return ie.H.useMemo(P,I)},Y.useOptimistic=function(P,I){return ie.H.useOptimistic(P,I)},Y.useReducer=function(P,I,z){return ie.H.useReducer(P,I,z)},Y.useRef=function(P){return ie.H.useRef(P)},Y.useState=function(P){return ie.H.useState(P)},Y.useSyncExternalStore=function(P,I,z){return ie.H.useSyncExternalStore(P,I,z)},Y.useTransition=function(){return ie.H.useTransition()},Y.version="19.2.7",Y}var op;function Fo(){return op||(op=1,Ho.exports=yg()),Ho.exports}var Q=Fo();const Tg=fg(Q);var zo={exports:{}},zi={},Oo={exports:{}},Lo={};var cp;function vg(){return cp||(cp=1,(function(o){function l(x,H){var q=x.length;x.push(H);e:for(;0<q;){var fe=q-1>>>1,Te=x[fe];if(0<h(Te,H))x[fe]=H,x[q]=Te,q=fe;else break e}}function u(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var H=x[0],q=x.pop();if(q!==H){x[0]=q;e:for(var fe=0,Te=x.length,P=Te>>>1;fe<P;){var I=2*(fe+1)-1,z=x[I],L=I+1,G=x[L];if(0>h(z,q))L<Te&&0>h(G,z)?(x[fe]=G,x[L]=q,fe=L):(x[fe]=z,x[I]=q,fe=I);else if(L<Te&&0>h(G,q))x[fe]=G,x[L]=q,fe=L;else break e}}return H}function h(x,H){var q=x.sortIndex-H.sortIndex;return q!==0?q:x.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var f=Date,A=f.now();o.unstable_now=function(){return f.now()-A}}var g=[],T=[],R=1,M=null,U=3,K=!1,Z=!1,J=!1,Ue=!1,F=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;function Ge(x){for(var H=u(T);H!==null;){if(H.callback===null)r(T);else if(H.startTime<=x)r(T),H.sortIndex=H.expirationTime,l(g,H);else break;H=u(T)}}function Xe(x){if(J=!1,Ge(x),!Z)if(u(g)!==null)Z=!0,Re||(Re=!0,Je());else{var H=u(T);H!==null&&xn(Xe,H.startTime-x)}}var Re=!1,ie=-1,Ve=5,Un=-1;function ta(){return Ue?!0:!(o.unstable_now()-Un<Ve)}function Hn(){if(Ue=!1,Re){var x=o.unstable_now();Un=x;var H=!0;try{e:{Z=!1,J&&(J=!1,Ce(ie),ie=-1),K=!0;var q=U;try{n:{for(Ge(x),M=u(g);M!==null&&!(M.expirationTime>x&&ta());){var fe=M.callback;if(typeof fe=="function"){M.callback=null,U=M.priorityLevel;var Te=fe(M.expirationTime<=x);if(x=o.unstable_now(),typeof Te=="function"){M.callback=Te,Ge(x),H=!0;break n}M===u(g)&&r(g),Ge(x)}else r(g);M=u(g)}if(M!==null)H=!0;else{var P=u(T);P!==null&&xn(Xe,P.startTime-x),H=!1}}break e}finally{M=null,U=q,K=!1}H=void 0}}finally{H?Je():Re=!1}}}var Je;if(typeof ze=="function")Je=function(){ze(Hn)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Kn=Mt.port2;Mt.port1.onmessage=Hn,Je=function(){Kn.postMessage(null)}}else Je=function(){F(Hn,0)};function xn(x,H){ie=F(function(){x(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(x){x.callback=null},o.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<x?Math.floor(1e3/x):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(x){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var q=U;U=H;try{return x()}finally{U=q}},o.unstable_requestPaint=function(){Ue=!0},o.unstable_runWithPriority=function(x,H){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var q=U;U=x;try{return H()}finally{U=q}},o.unstable_scheduleCallback=function(x,H,q){var fe=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,x){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=q+Te,x={id:R++,callback:H,priorityLevel:x,startTime:q,expirationTime:Te,sortIndex:-1},q>fe?(x.sortIndex=q,l(T,x),u(g)===null&&x===u(T)&&(J?(Ce(ie),ie=-1):J=!0,xn(Xe,q-fe))):(x.sortIndex=Te,l(g,x),Z||K||(Z=!0,Re||(Re=!0,Je()))),x},o.unstable_shouldYield=ta,o.unstable_wrapCallback=function(x){var H=U;return function(){var q=U;U=H;try{return x.apply(this,arguments)}finally{U=q}}}})(Lo)),Lo}var up;function Pg(){return up||(up=1,Oo.exports=vg()),Oo.exports}var Bo={exports:{}},qe={};var dp;function Sg(){if(dp)return qe;dp=1;var o=Fo();function l(g){var T="https://react.dev/errors/"+g;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)T+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+g+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var r={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(g,T,R){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:M==null?null:""+M,children:g,containerInfo:T,implementation:R}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(g,T){if(g==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qe.createPortal=function(g,T){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(l(299));return m(g,T,null,R)},qe.flushSync=function(g){var T=f.T,R=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=T,r.p=R,r.d.f()}},qe.preconnect=function(g,T){typeof g=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,r.d.C(g,T))},qe.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},qe.preinit=function(g,T){if(typeof g=="string"&&T&&typeof T.as=="string"){var R=T.as,M=A(R,T.crossOrigin),U=typeof T.integrity=="string"?T.integrity:void 0,K=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;R==="style"?r.d.S(g,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:M,integrity:U,fetchPriority:K}):R==="script"&&r.d.X(g,{crossOrigin:M,integrity:U,fetchPriority:K,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},qe.preinitModule=function(g,T){if(typeof g=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var R=A(T.as,T.crossOrigin);r.d.M(g,{crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&r.d.M(g)},qe.preload=function(g,T){if(typeof g=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var R=T.as,M=A(R,T.crossOrigin);r.d.L(g,R,{crossOrigin:M,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},qe.preloadModule=function(g,T){if(typeof g=="string")if(T){var R=A(T.as,T.crossOrigin);r.d.m(g,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else r.d.m(g)},qe.requestFormReset=function(g){r.d.r(g)},qe.unstable_batchedUpdates=function(g,T){return g(T)},qe.useFormState=function(g,T,R){return f.H.useFormState(g,T,R)},qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},qe.version="19.2.7",qe}var hp;function Cg(){if(hp)return Bo.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),Bo.exports=Sg(),Bo.exports}var pp;function bg(){if(pp)return zi;pp=1;var o=Pg(),l=Fo(),u=Cg();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function A(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(r(188))}function T(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return g(i),e;if(s===a)return g(i),n;s=s.sibling}throw Error(r(188))}if(t.return!==a.return)t=i,a=s;else{for(var c=!1,p=i.child;p;){if(p===t){c=!0,t=i,a=s;break}if(p===a){c=!0,a=i,t=s;break}p=p.sibling}if(!c){for(p=s.child;p;){if(p===t){c=!0,t=s,a=i;break}if(p===a){c=!0,a=s,t=i;break}p=p.sibling}if(!c)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function R(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=R(e),n!==null)return n;e=e.sibling}return null}var M=Object.assign,U=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Ce=Symbol.for("react.consumer"),ze=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Un=Symbol.for("react.activity"),ta=Symbol.for("react.memo_cache_sentinel"),Hn=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=Hn&&e[Hn]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Symbol.for("react.client.reference");function Kn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case F:return"Profiler";case Ue:return"StrictMode";case Xe:return"Suspense";case Re:return"SuspenseList";case Un:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case ze:return e.displayName||"Context";case Ce:return(e._context.displayName||"Context")+".Consumer";case Ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:Kn(e.type)||"Memo";case Ve:n=e._payload,e=e._init;try{return Kn(e(n))}catch{}}return null}var xn=Array.isArray,x=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},fe=[],Te=-1;function P(e){return{current:e}}function I(e){0>Te||(e.current=fe[Te],fe[Te]=null,Te--)}function z(e,n){Te++,fe[Te]=e.current,e.current=n}var L=P(null),G=P(null),$=P(null),de=P(null);function Fe(e,n){switch(z($,n),z(G,e),z(L,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xh(n),e=Rh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(L),z(L,e)}function Ae(){I(L),I(G),I($)}function Ka(e){e.memoizedState!==null&&z(de,e);var n=L.current,t=Rh(n,e.type);n!==t&&(z(G,e),z(L,t))}function ji(e){G.current===e&&(I(L),I(G)),de.current===e&&(I(de),Ei._currentValue=q)}var ml,ic;function Ut(e){if(ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ml=n&&n[1]||"",ic=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ml+e+ic}var gl=!1;function yl(e,n){if(!e||gl)return"";gl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(k){var w=k}Reflect.construct(e,[],E)}else{try{E.call()}catch(k){w=k}e.call(E.prototype)}}else{try{throw Error()}catch(k){w=k}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(k){if(k&&w&&typeof k.stack=="string")return[k.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),c=s[0],p=s[1];if(c&&p){var y=c.split(`
`),b=p.split(`
`);for(i=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;if(a===y.length||i===b.length)for(a=y.length-1,i=b.length-1;1<=a&&0<=i&&y[a]!==b[i];)i--;for(;1<=a&&0<=i;a--,i--)if(y[a]!==b[i]){if(a!==1||i!==1)do if(a--,i--,0>i||y[a]!==b[i]){var N=`
`+y[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{gl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ut(t):""}function _p(e,n){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return yl(e.type,!1);case 11:return yl(e.type.render,!1);case 1:return yl(e.type,!0);case 31:return Ut("Activity");default:return""}}function sc(e){try{var n="",t=null;do n+=_p(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Tl=Object.prototype.hasOwnProperty,vl=o.unstable_scheduleCallback,Pl=o.unstable_cancelCallback,qp=o.unstable_shouldYield,Fp=o.unstable_requestPaint,rn=o.unstable_now,Qp=o.unstable_getCurrentPriorityLevel,lc=o.unstable_ImmediatePriority,rc=o.unstable_UserBlockingPriority,Ki=o.unstable_NormalPriority,Yp=o.unstable_LowPriority,oc=o.unstable_IdlePriority,Gp=o.log,Xp=o.unstable_setDisableYieldValue,Za=null,on=null;function ot(e){if(typeof Gp=="function"&&Xp(e),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(Za,e)}catch{}}var cn=Math.clz32?Math.clz32:$p,Vp=Math.log,Jp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Vp(e)/Jp|0)|0}var Zi=256,_i=262144,qi=4194304;function Ht(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~s,a!==0?i=Ht(a):(c&=p,c!==0?i=Ht(c):t||(t=p&~e,t!==0&&(i=Ht(t))))):(p=a&~s,p!==0?i=Ht(p):c!==0?i=Ht(c):t||(t=a&~e,t!==0&&(i=Ht(t)))),i===0?0:n!==0&&n!==i&&(n&s)===0&&(s=i&-i,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:i}function _a(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ef(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cc(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function Sl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function qa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nf(e,n,t,a,i,s){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,y=e.expirationTimes,b=e.hiddenUpdates;for(t=c&~t;0<t;){var N=31-cn(t),E=1<<N;p[N]=0,y[N]=-1;var w=b[N];if(w!==null)for(b[N]=null,N=0;N<w.length;N++){var k=w[N];k!==null&&(k.lane&=-536870913)}t&=~E}a!==0&&uc(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~n))}function uc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-cn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function dc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-cn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function hc(e,n){var t=n&-n;return t=(t&42)!==0?1:Cl(t),(t&(e.suspendedLanes|n))!==0?0:t}function Cl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Jh(e.type))}function fc(e,n){var t=H.p;try{return H.p=e,n()}finally{H.p=t}}var ct=Math.random().toString(36).slice(2),We="__reactFiber$"+ct,$e="__reactProps$"+ct,aa="__reactContainer$"+ct,wl="__reactEvents$"+ct,tf="__reactListeners$"+ct,af="__reactHandles$"+ct,mc="__reactResources$"+ct,Fa="__reactMarker$"+ct;function kl(e){delete e[We],delete e[$e],delete e[wl],delete e[tf],delete e[af]}function ia(e){var n=e[We];if(n)return n;for(var t=e.parentNode;t;){if(n=t[aa]||t[We]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=zh(e);e!==null;){if(t=e[We])return t;e=zh(e)}return n}e=t,t=e.parentNode}return null}function sa(e){if(e=e[We]||e[aa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function la(e){var n=e[mc];return n||(n=e[mc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Oe(e){e[Fa]=!0}var gc=new Set,yc={};function zt(e,n){ra(e,n),ra(e+"Capture",n)}function ra(e,n){for(yc[e]=n,e=0;e<n.length;e++)gc.add(n[e])}var sf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tc={},vc={};function lf(e){return Tl.call(vc,e)?!0:Tl.call(Tc,e)?!1:sf.test(e)?vc[e]=!0:(Tc[e]=!0,!1)}function Qi(e,n,t){if(lf(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Yi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Zn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rf(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(c){t=""+c,s.call(this,c)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Al(e){if(!e._valueTracker){var n=Pc(e)?"checked":"value";e._valueTracker=rf(e,n,""+e[n])}}function Sc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Pc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var of=/[\n"\\]/g;function Tn(e){return e.replace(of,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nl(e,n,t,a,i,s,c,p){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yn(n)):e.value!==""+yn(n)&&(e.value=""+yn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?xl(e,c,yn(n)):t!=null?xl(e,c,yn(t)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+yn(p):e.removeAttribute("name")}function Cc(e,n,t,a,i,s,c,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){Al(e);return}t=t!=null?""+yn(t):"",n=n!=null?""+yn(n):t,p||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Al(e)}function xl(e,n,t){n==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function oa(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+yn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function bc(e,n,t){if(n!=null&&(n=""+yn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+yn(t):""}function wc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(xn(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=yn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Al(e)}function ca(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var cf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||cf.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ac(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&kc(e,i,a)}else for(var s in n)n.hasOwnProperty(s)&&kc(e,s,n[s])}function Rl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),df=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(e){return df.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _n(){}var Dl=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,da=null;function Nc(e){var n=sa(e);if(n&&(e=n.stateNode)){var t=e[$e]||null;e:switch(e=n.stateNode,n.type){case"input":if(Nl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[$e]||null;if(!i)throw Error(r(90));Nl(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Sc(a)}break e;case"textarea":bc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&oa(e,!!t.multiple,n,!1)}}}var Il=!1;function xc(e,n,t){if(Il)return e(n,t);Il=!0;try{var a=e(n);return a}finally{if(Il=!1,(ua!==null||da!==null)&&(Os(),ua&&(n=ua,e=da,da=ua=null,Nc(n),e)))for(n=0;n<e.length;n++)Nc(e[n])}}function Ya(e,n){var t=e.stateNode;if(t===null)return null;var a=t[$e]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=!1;if(qn)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{Ml=!1}var ut=null,Ul=null,Vi=null;function Rc(){if(Vi)return Vi;var e,n=Ul,t=n.length,a,i="value"in ut?ut.value:ut.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===i[s-a];a++);return Vi=i.slice(e,1<a?1-a:void 0)}function Ji(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Dc(){return!1}function en(e){function n(t,a,i,s,c){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$i:Dc,this.isPropagationStopped=Dc,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),n}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=en(Ot),Xa=M({},Ot,{view:0,detail:0}),hf=en(Xa),Hl,zl,Va,ns=M({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Va&&(Va&&e.type==="mousemove"?(Hl=e.screenX-Va.screenX,zl=e.screenY-Va.screenY):zl=Hl=0,Va=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Ec=en(ns),pf=M({},ns,{dataTransfer:0}),ff=en(pf),mf=M({},Xa,{relatedTarget:0}),Ol=en(mf),gf=M({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=en(gf),Tf=M({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=en(Tf),Pf=M({},Ot,{data:0}),Ic=en(Pf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bf[e])?!!n[e]:!1}function Ll(){return wf}var kf=M({},Xa,{key:function(e){if(e.key){var n=Sf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=en(kf),Nf=M({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=en(Nf),xf=M({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Rf=en(xf),Df=M({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=en(Df),If=M({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=en(If),Uf=M({},Ot,{newState:0,oldState:0}),Hf=en(Uf),zf=[9,13,27,32],Bl=qn&&"CompositionEvent"in window,Ja=null;qn&&"documentMode"in document&&(Ja=document.documentMode);var Of=qn&&"TextEvent"in window&&!Ja,Uc=qn&&(!Bl||Ja&&8<Ja&&11>=Ja),Hc=" ",zc=!1;function Oc(e,n){switch(e){case"keyup":return zf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function Lf(e,n){switch(e){case"compositionend":return Lc(n);case"keypress":return n.which!==32?null:(zc=!0,Hc);case"textInput":return e=n.data,e===Hc&&zc?null:e;default:return null}}function Bf(e,n){if(ha)return e==="compositionend"||!Bl&&Oc(e,n)?(e=Rc(),Vi=Ul=ut=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uc&&n.locale!=="ko"?null:n.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wf[e.type]:n==="textarea"}function Wc(e,n,t,a){ua?da?da.push(a):da=[a]:ua=a,n=_s(n,"onChange"),0<n.length&&(t=new es("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var $a=null,ei=null;function jf(e){Ch(e,0)}function ts(e){var n=Qa(e);if(Sc(n))return e}function jc(e,n){if(e==="change")return n}var Kc=!1;if(qn){var Wl;if(qn){var jl="oninput"in document;if(!jl){var Zc=document.createElement("div");Zc.setAttribute("oninput","return;"),jl=typeof Zc.oninput=="function"}Wl=jl}else Wl=!1;Kc=Wl&&(!document.documentMode||9<document.documentMode)}function _c(){$a&&($a.detachEvent("onpropertychange",qc),ei=$a=null)}function qc(e){if(e.propertyName==="value"&&ts(ei)){var n=[];Wc(n,ei,e,El(e)),xc(jf,n)}}function Kf(e,n,t){e==="focusin"?(_c(),$a=n,ei=t,$a.attachEvent("onpropertychange",qc)):e==="focusout"&&_c()}function Zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(ei)}function _f(e,n){if(e==="click")return ts(n)}function qf(e,n){if(e==="input"||e==="change")return ts(n)}function Ff(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var un=typeof Object.is=="function"?Object.is:Ff;function ni(e,n){if(un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Tl.call(n,i)||!un(e[i],n[i]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,n){var t=Fc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fc(t)}}function Yc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Gi(e.document)}return n}function Kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qf=qn&&"documentMode"in document&&11>=document.documentMode,pa=null,Zl=null,ti=null,_l=!1;function Xc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_l||pa==null||pa!==Gi(a)||(a=pa,"selectionStart"in a&&Kl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ti&&ni(ti,a)||(ti=a,a=_s(Zl,"onSelect"),0<a.length&&(n=new es("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=pa)))}function Lt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var fa={animationend:Lt("Animation","AnimationEnd"),animationiteration:Lt("Animation","AnimationIteration"),animationstart:Lt("Animation","AnimationStart"),transitionrun:Lt("Transition","TransitionRun"),transitionstart:Lt("Transition","TransitionStart"),transitioncancel:Lt("Transition","TransitionCancel"),transitionend:Lt("Transition","TransitionEnd")},ql={},Vc={};qn&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function Bt(e){if(ql[e])return ql[e];if(!fa[e])return e;var n=fa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vc)return ql[e]=n[t];return e}var Jc=Bt("animationend"),$c=Bt("animationiteration"),eu=Bt("animationstart"),Yf=Bt("transitionrun"),Gf=Bt("transitionstart"),Xf=Bt("transitioncancel"),nu=Bt("transitionend"),tu=new Map,Fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fl.push("scrollEnd");function Rn(e,n){tu.set(e,n),zt(n,[e])}var as=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vn=[],ma=0,Ql=0;function is(){for(var e=ma,n=Ql=ma=0;n<e;){var t=vn[n];vn[n++]=null;var a=vn[n];vn[n++]=null;var i=vn[n];vn[n++]=null;var s=vn[n];if(vn[n++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}s!==0&&au(t,i,s)}}function ss(e,n,t,a){vn[ma++]=e,vn[ma++]=n,vn[ma++]=t,vn[ma++]=a,Ql|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Yl(e,n,t,a){return ss(e,n,t,a),ls(e)}function Wt(e,n){return ss(e,null,null,n),ls(e)}function au(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,s=e.return;s!==null;)s.childLanes|=t,a=s.alternate,a!==null&&(a.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&n!==null&&(i=31-cn(t),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),s):null}function ls(e){if(50<wi)throw wi=0,ao=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ga={};function Vf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,t,a){return new Vf(e,n,t,a)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fn(e,n){var t=e.alternate;return t===null?(t=dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function iu(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rs(e,n,t,a,i,s){var c=0;if(a=e,typeof e=="function")Gl(e)&&(c=1);else if(typeof e=="string")c=tg(e,t,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Un:return e=dn(31,t,n,i),e.elementType=Un,e.lanes=s,e;case J:return jt(t.children,i,s,n);case Ue:c=8,i|=24;break;case F:return e=dn(12,t,n,i|2),e.elementType=F,e.lanes=s,e;case Xe:return e=dn(13,t,n,i),e.elementType=Xe,e.lanes=s,e;case Re:return e=dn(19,t,n,i),e.elementType=Re,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:c=10;break e;case Ce:c=9;break e;case Ge:c=11;break e;case ie:c=14;break e;case Ve:c=16,a=null;break e}c=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=dn(c,t,n,i),n.elementType=e,n.type=a,n.lanes=s,n}function jt(e,n,t,a){return e=dn(7,e,a,n),e.lanes=t,e}function Xl(e,n,t){return e=dn(6,e,null,n),e.lanes=t,e}function su(e){var n=dn(18,null,null,0);return n.stateNode=e,n}function Vl(e,n,t){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lu=new WeakMap;function Pn(e,n){if(typeof e=="object"&&e!==null){var t=lu.get(e);return t!==void 0?t:(n={value:e,source:n,stack:sc(n)},lu.set(e,n),n)}return{value:e,source:n,stack:sc(n)}}var ya=[],Ta=0,os=null,ai=0,Sn=[],Cn=0,dt=null,zn=1,On="";function Qn(e,n){ya[Ta++]=ai,ya[Ta++]=os,os=e,ai=n}function ru(e,n,t){Sn[Cn++]=zn,Sn[Cn++]=On,Sn[Cn++]=dt,dt=e;var a=zn;e=On;var i=32-cn(a)-1;a&=~(1<<i),t+=1;var s=32-cn(n)+i;if(30<s){var c=i-i%5;s=(a&(1<<c)-1).toString(32),a>>=c,i-=c,zn=1<<32-cn(n)+i|t<<i|a,On=s+e}else zn=1<<s|t<<i|a,On=e}function Jl(e){e.return!==null&&(Qn(e,1),ru(e,1,0))}function $l(e){for(;e===os;)os=ya[--Ta],ya[Ta]=null,ai=ya[--Ta],ya[Ta]=null;for(;e===dt;)dt=Sn[--Cn],Sn[Cn]=null,On=Sn[--Cn],Sn[Cn]=null,zn=Sn[--Cn],Sn[Cn]=null}function ou(e,n){Sn[Cn++]=zn,Sn[Cn++]=On,Sn[Cn++]=dt,zn=n.id,On=n.overflow,dt=e}var je=null,Pe=null,se=!1,ht=null,bn=!1,er=Error(r(519));function pt(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ii(Pn(n,e)),er}function cu(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[We]=e,n[$e]=a,t){case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":case"embed":ne("load",n);break;case"video":case"audio":for(t=0;t<Ai.length;t++)ne(Ai[t],n);break;case"source":ne("error",n);break;case"img":case"image":case"link":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"input":ne("invalid",n),Cc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ne("invalid",n);break;case"textarea":ne("invalid",n),wc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Ah(n.textContent,t)?(a.popover!=null&&(ne("beforetoggle",n),ne("toggle",n)),a.onScroll!=null&&ne("scroll",n),a.onScrollEnd!=null&&ne("scrollend",n),a.onClick!=null&&(n.onclick=_n),n=!0):n=!1,n||pt(e,!0)}function uu(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:bn=!1;return;case 27:case 3:bn=!0;return;default:je=je.return}}function va(e){if(e!==je)return!1;if(!se)return uu(e),se=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||vo(e.type,e.memoizedProps)),t=!t),t&&Pe&&pt(e),uu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=Hh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=Hh(e)}else n===27?(n=Pe,Nt(e.type)?(e=wo,wo=null,Pe=e):Pe=n):Pe=je?kn(e.stateNode.nextSibling):null;return!0}function Kt(){Pe=je=null,se=!1}function nr(){var e=ht;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),ht=null),e}function ii(e){ht===null?ht=[e]:ht.push(e)}var tr=P(null),Zt=null,Yn=null;function ft(e,n,t){z(tr,n._currentValue),n._currentValue=t}function Gn(e){e._currentValue=tr.current,I(tr)}function ar(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ir(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var c=i.child;s=s.firstContext;e:for(;s!==null;){var p=s;s=i;for(var y=0;y<n.length;y++)if(p.context===n[y]){s.lanes|=t,p=s.alternate,p!==null&&(p.lanes|=t),ar(s.return,t,e),a||(c=null);break e}s=p.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(r(341));c.lanes|=t,s=c.alternate,s!==null&&(s.lanes|=t),ar(c,t,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Pa(e,n,t,a){e=null;for(var i=n,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var p=i.type;un(i.pendingProps.value,c.value)||(e!==null?e.push(p):e=[p])}}else if(i===de.current){if(c=i.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ei):e=[Ei])}i=i.return}e!==null&&ir(n,e,t,a),n.flags|=262144}function cs(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _t(e){Zt=e,Yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return du(Zt,e)}function us(e,n){return Zt===null&&_t(e),du(e,n)}function du(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Yn===null){if(e===null)throw Error(r(308));Yn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yn=Yn.next=n;return t}var Jf=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},$f=o.unstable_scheduleCallback,em=o.unstable_NormalPriority,De={$$typeof:ze,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Jf,data:new Map,refCount:0}}function si(e){e.refCount--,e.refCount===0&&$f(em,function(){e.controller.abort()})}var li=null,lr=0,Sa=0,Ca=null;function nm(e,n){if(li===null){var t=li=[];lr=0,Sa=co(),Ca={status:"pending",value:void 0,then:function(a){t.push(a)}}}return lr++,n.then(hu,hu),n}function hu(){if(--lr===0&&li!==null){Ca!==null&&(Ca.status="fulfilled");var e=li;li=null,Sa=0,Ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tm(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var pu=x.S;x.S=function(e,n){Xd=rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nm(e,n),pu!==null&&pu(e,n)};var qt=P(null);function rr(){var e=qt.current;return e!==null?e:ve.pooledCache}function ds(e,n){n===null?z(qt,qt.current):z(qt,n.pool)}function fu(){var e=rr();return e===null?null:{parent:De._currentValue,pool:e}}var ba=Error(r(460)),or=Error(r(474)),hs=Error(r(542)),ps={then:function(){}};function mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gu(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(_n,_n),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tu(e),e;default:if(typeof n.status=="string")n.then(_n,_n);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tu(e),e}throw Qt=n,ba}}function Ft(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Qt=t,ba):t}}var Qt=null;function yu(){if(Qt===null)throw Error(r(459));var e=Qt;return Qt=null,e}function Tu(e){if(e===ba||e===hs)throw Error(r(483))}var wa=null,ri=0;function fs(e){var n=ri;return ri+=1,wa===null&&(wa=[]),gu(wa,e,n)}function oi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ms(e,n){throw n.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vu(e){function n(S,v){if(e){var C=S.deletions;C===null?(S.deletions=[v],S.flags|=16):C.push(v)}}function t(S,v){if(!e)return null;for(;v!==null;)n(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function i(S,v){return S=Fn(S,v),S.index=0,S.sibling=null,S}function s(S,v,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<v?(S.flags|=67108866,v):C):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function c(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function p(S,v,C,D){return v===null||v.tag!==6?(v=Xl(C,S.mode,D),v.return=S,v):(v=i(v,C),v.return=S,v)}function y(S,v,C,D){var W=C.type;return W===J?N(S,v,C.props.children,D,C.key):v!==null&&(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ve&&Ft(W)===v.type)?(v=i(v,C.props),oi(v,C),v.return=S,v):(v=rs(C.type,C.key,C.props,null,S.mode,D),oi(v,C),v.return=S,v)}function b(S,v,C,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Vl(C,S.mode,D),v.return=S,v):(v=i(v,C.children||[]),v.return=S,v)}function N(S,v,C,D,W){return v===null||v.tag!==7?(v=jt(C,S.mode,D,W),v.return=S,v):(v=i(v,C),v.return=S,v)}function E(S,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Xl(""+v,S.mode,C),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return C=rs(v.type,v.key,v.props,null,S.mode,C),oi(C,v),C.return=S,C;case Z:return v=Vl(v,S.mode,C),v.return=S,v;case Ve:return v=Ft(v),E(S,v,C)}if(xn(v)||Je(v))return v=jt(v,S.mode,C,null),v.return=S,v;if(typeof v.then=="function")return E(S,fs(v),C);if(v.$$typeof===ze)return E(S,us(S,v),C);ms(S,v)}return null}function w(S,v,C,D){var W=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return W!==null?null:p(S,v,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case K:return C.key===W?y(S,v,C,D):null;case Z:return C.key===W?b(S,v,C,D):null;case Ve:return C=Ft(C),w(S,v,C,D)}if(xn(C)||Je(C))return W!==null?null:N(S,v,C,D,null);if(typeof C.then=="function")return w(S,v,fs(C),D);if(C.$$typeof===ze)return w(S,v,us(S,C),D);ms(S,C)}return null}function k(S,v,C,D,W){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(C)||null,p(v,S,""+D,W);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case K:return S=S.get(D.key===null?C:D.key)||null,y(v,S,D,W);case Z:return S=S.get(D.key===null?C:D.key)||null,b(v,S,D,W);case Ve:return D=Ft(D),k(S,v,C,D,W)}if(xn(D)||Je(D))return S=S.get(C)||null,N(v,S,D,W,null);if(typeof D.then=="function")return k(S,v,C,fs(D),W);if(D.$$typeof===ze)return k(S,v,C,us(v,D),W);ms(v,D)}return null}function O(S,v,C,D){for(var W=null,re=null,B=v,V=v=0,ae=null;B!==null&&V<C.length;V++){B.index>V?(ae=B,B=null):ae=B.sibling;var oe=w(S,B,C[V],D);if(oe===null){B===null&&(B=ae);break}e&&B&&oe.alternate===null&&n(S,B),v=s(oe,v,V),re===null?W=oe:re.sibling=oe,re=oe,B=ae}if(V===C.length)return t(S,B),se&&Qn(S,V),W;if(B===null){for(;V<C.length;V++)B=E(S,C[V],D),B!==null&&(v=s(B,v,V),re===null?W=B:re.sibling=B,re=B);return se&&Qn(S,V),W}for(B=a(B);V<C.length;V++)ae=k(B,S,V,C[V],D),ae!==null&&(e&&ae.alternate!==null&&B.delete(ae.key===null?V:ae.key),v=s(ae,v,V),re===null?W=ae:re.sibling=ae,re=ae);return e&&B.forEach(function(It){return n(S,It)}),se&&Qn(S,V),W}function _(S,v,C,D){if(C==null)throw Error(r(151));for(var W=null,re=null,B=v,V=v=0,ae=null,oe=C.next();B!==null&&!oe.done;V++,oe=C.next()){B.index>V?(ae=B,B=null):ae=B.sibling;var It=w(S,B,oe.value,D);if(It===null){B===null&&(B=ae);break}e&&B&&It.alternate===null&&n(S,B),v=s(It,v,V),re===null?W=It:re.sibling=It,re=It,B=ae}if(oe.done)return t(S,B),se&&Qn(S,V),W;if(B===null){for(;!oe.done;V++,oe=C.next())oe=E(S,oe.value,D),oe!==null&&(v=s(oe,v,V),re===null?W=oe:re.sibling=oe,re=oe);return se&&Qn(S,V),W}for(B=a(B);!oe.done;V++,oe=C.next())oe=k(B,S,V,oe.value,D),oe!==null&&(e&&oe.alternate!==null&&B.delete(oe.key===null?V:oe.key),v=s(oe,v,V),re===null?W=oe:re.sibling=oe,re=oe);return e&&B.forEach(function(pg){return n(S,pg)}),se&&Qn(S,V),W}function ye(S,v,C,D){if(typeof C=="object"&&C!==null&&C.type===J&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case K:e:{for(var W=C.key;v!==null;){if(v.key===W){if(W=C.type,W===J){if(v.tag===7){t(S,v.sibling),D=i(v,C.props.children),D.return=S,S=D;break e}}else if(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ve&&Ft(W)===v.type){t(S,v.sibling),D=i(v,C.props),oi(D,C),D.return=S,S=D;break e}t(S,v);break}else n(S,v);v=v.sibling}C.type===J?(D=jt(C.props.children,S.mode,D,C.key),D.return=S,S=D):(D=rs(C.type,C.key,C.props,null,S.mode,D),oi(D,C),D.return=S,S=D)}return c(S);case Z:e:{for(W=C.key;v!==null;){if(v.key===W)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){t(S,v.sibling),D=i(v,C.children||[]),D.return=S,S=D;break e}else{t(S,v);break}else n(S,v);v=v.sibling}D=Vl(C,S.mode,D),D.return=S,S=D}return c(S);case Ve:return C=Ft(C),ye(S,v,C,D)}if(xn(C))return O(S,v,C,D);if(Je(C)){if(W=Je(C),typeof W!="function")throw Error(r(150));return C=W.call(C),_(S,v,C,D)}if(typeof C.then=="function")return ye(S,v,fs(C),D);if(C.$$typeof===ze)return ye(S,v,us(S,C),D);ms(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,v!==null&&v.tag===6?(t(S,v.sibling),D=i(v,C),D.return=S,S=D):(t(S,v),D=Xl(C,S.mode,D),D.return=S,S=D),c(S)):t(S,v)}return function(S,v,C,D){try{ri=0;var W=ye(S,v,C,D);return wa=null,W}catch(B){if(B===ba||B===hs)throw B;var re=dn(29,B,null,S.mode);return re.lanes=D,re.return=S,re}}}var Yt=vu(!0),Pu=vu(!1),mt=!1;function cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ce&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=ls(e),au(e,null,t),n}return ss(e,a,n,t),ls(e)}function ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,dc(e,t)}}function dr(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?i=s=c:s=s.next=c,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var hr=!1;function ui(){if(hr){var e=Ca;if(e!==null)throw e}}function di(e,n,t,a){hr=!1;var i=e.updateQueue;mt=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var y=p,b=y.next;y.next=null,c===null?s=b:c.next=b,c=y;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==c&&(p===null?N.firstBaseUpdate=b:p.next=b,N.lastBaseUpdate=y))}if(s!==null){var E=i.baseState;c=0,N=b=y=null,p=s;do{var w=p.lane&-536870913,k=w!==p.lane;if(k?(te&w)===w:(a&w)===w){w!==0&&w===Sa&&(hr=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var O=e,_=p;w=n;var ye=t;switch(_.tag){case 1:if(O=_.payload,typeof O=="function"){E=O.call(ye,E,w);break e}E=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=_.payload,w=typeof O=="function"?O.call(ye,E,w):O,w==null)break e;E=M({},E,w);break e;case 2:mt=!0}}w=p.callback,w!==null&&(e.flags|=64,k&&(e.flags|=8192),k=i.callbacks,k===null?i.callbacks=[w]:k.push(w))}else k={lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(b=N=k,y=E):N=N.next=k,c|=w;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);N===null&&(y=E),i.baseState=y,i.firstBaseUpdate=b,i.lastBaseUpdate=N,s===null&&(i.shared.lanes=0),Ct|=c,e.lanes=c,e.memoizedState=E}}function Su(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cu(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Su(t[e],n)}var ka=P(null),gs=P(0);function bu(e,n){e=it,z(gs,e),z(ka,n),it=e|n.baseLanes}function pr(){z(gs,it),z(ka,ka.current)}function fr(){it=gs.current,I(ka),I(gs)}var hn=P(null),wn=null;function Tt(e){var n=e.alternate;z(Ne,Ne.current&1),z(hn,e),wn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(wn=e)}function mr(e){z(Ne,Ne.current),z(hn,e),wn===null&&(wn=e)}function wu(e){e.tag===22?(z(Ne,Ne.current),z(hn,e),wn===null&&(wn=e)):vt()}function vt(){z(Ne,Ne.current),z(hn,hn.current)}function pn(e){I(hn),wn===e&&(wn=null),I(Ne)}var Ne=P(0);function ys(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Co(t)||bo(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xn=0,X=null,me=null,Ee=null,Ts=!1,Aa=!1,Gt=!1,vs=0,hi=0,Na=null,am=0;function we(){throw Error(r(321))}function gr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!un(e[t],n[t]))return!1;return!0}function yr(e,n,t,a,i,s){return Xn=s,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=e===null||e.memoizedState===null?rd:Ir,Gt=!1,s=t(a,i),Gt=!1,Aa&&(s=Au(n,t,a,i)),ku(e),s}function ku(e){x.H=mi;var n=me!==null&&me.next!==null;if(Xn=0,Ee=me=X=null,Ts=!1,hi=0,Na=null,n)throw Error(r(300));e===null||Ie||(e=e.dependencies,e!==null&&cs(e)&&(Ie=!0))}function Au(e,n,t,a){X=e;var i=0;do{if(Aa&&(Na=null),hi=0,Aa=!1,25<=i)throw Error(r(301));if(i+=1,Ee=me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}x.H=od,s=n(t,a)}while(Aa);return s}function im(){var e=x.H,n=e.useState()[0];return n=typeof n.then=="function"?pi(n):n,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(X.flags|=1024),n}function Tr(){var e=vs!==0;return vs=0,e}function vr(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Pr(e){if(Ts){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ts=!1}Xn=0,Ee=me=X=null,Aa=!1,hi=vs=0,Na=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?X.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function xe(){if(me===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=Ee===null?X.memoizedState:Ee.next;if(n!==null)Ee=n,me=e;else{if(e===null)throw X.alternate===null?Error(r(467)):Error(r(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ee===null?X.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ps(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pi(e){var n=hi;return hi+=1,Na===null&&(Na=[]),e=gu(Na,e,n),n=X,(Ee===null?n.memoizedState:Ee.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?rd:Ir),e}function Ss(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pi(e);if(e.$$typeof===ze)return Ke(e)}throw Error(r(438,String(e)))}function Sr(e){var n=null,t=X.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ps(),X.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ta;return n.index++,t}function Vn(e,n){return typeof n=="function"?n(e):n}function Cs(e){var n=xe();return Cr(n,me,e)}function Cr(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}n.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{n=i.next;var p=c=null,y=null,b=n,N=!1;do{var E=b.lane&-536870913;if(E!==b.lane?(te&E)===E:(Xn&E)===E){var w=b.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),E===Sa&&(N=!0);else if((Xn&w)===w){b=b.next,w===Sa&&(N=!0);continue}else E={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},y===null?(p=y=E,c=s):y=y.next=E,X.lanes|=w,Ct|=w;E=b.action,Gt&&t(s,E),s=b.hasEagerState?b.eagerState:t(s,E)}else w={lane:E,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},y===null?(p=y=w,c=s):y=y.next=w,X.lanes|=E,Ct|=E;b=b.next}while(b!==null&&b!==n);if(y===null?c=s:y.next=p,!un(s,e.memoizedState)&&(Ie=!0,N&&(t=Ca,t!==null)))throw t;e.memoizedState=s,e.baseState=c,e.baseQueue=y,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function br(e){var n=xe(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);un(s,n.memoizedState)||(Ie=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Nu(e,n,t){var a=X,i=xe(),s=se;if(s){if(t===void 0)throw Error(r(407));t=t()}else t=n();var c=!un((me||i).memoizedState,t);if(c&&(i.memoizedState=t,Ie=!0),i=i.queue,Ar(Du.bind(null,a,i,e),[e]),i.getSnapshot!==n||c||Ee!==null&&Ee.memoizedState.tag&1){if(a.flags|=2048,xa(9,{destroy:void 0},Ru.bind(null,a,i,t,n),null),ve===null)throw Error(r(349));s||(Xn&127)!==0||xu(a,n,t)}return t}function xu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n=Ps(),X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ru(e,n,t,a){n.value=t,n.getSnapshot=a,Eu(n)&&Iu(e)}function Du(e,n,t){return t(function(){Eu(n)&&Iu(e)})}function Eu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!un(e,t)}catch{return!0}}function Iu(e){var n=Wt(e,2);n!==null&&ln(n,e,2)}function wr(e){var n=Qe();if(typeof e=="function"){var t=e;if(e=t(),Gt){ot(!0);try{t()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},n}function Mu(e,n,t,a){return e.baseState=t,Cr(e,me,typeof a=="function"?a:Vn)}function sm(e,n,t,a,i){if(ks(e))throw Error(r(485));if(e=n.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};x.T!==null?t(!0):s.isTransition=!1,a(s),t=n.pending,t===null?(s.next=n.pending=s,Uu(n,s)):(s.next=t.next,n.pending=t.next=s)}}function Uu(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var s=x.T,c={};x.T=c;try{var p=t(i,a),y=x.S;y!==null&&y(c,p),Hu(e,n,p)}catch(b){kr(e,n,b)}finally{s!==null&&c.types!==null&&(s.types=c.types),x.T=s}}else try{s=t(i,a),Hu(e,n,s)}catch(b){kr(e,n,b)}}function Hu(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){zu(e,n,a)},function(a){return kr(e,n,a)}):zu(e,n,t)}function zu(e,n,t){n.status="fulfilled",n.value=t,Ou(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Uu(e,t)))}function kr(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Ou(n),n=n.next;while(n!==a)}e.action=null}function Ou(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lu(e,n){return n}function Bu(e,n){if(se){var t=ve.formState;if(t!==null){e:{var a=X;if(se){if(Pe){n:{for(var i=Pe,s=bn;i.nodeType!==8;){if(!s){i=null;break n}if(i=kn(i.nextSibling),i===null){i=null;break n}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Pe=kn(i.nextSibling),a=i.data==="F!";break e}}pt(a)}a=!1}a&&(n=t[0])}}return t=Qe(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:n},t.queue=a,t=id.bind(null,X,a),a.dispatch=t,a=wr(!1),s=Er.bind(null,X,!1,a.queue),a=Qe(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=sm.bind(null,X,i,s,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function Wu(e){var n=xe();return ju(n,me,e)}function ju(e,n,t){if(n=Cr(e,n,Lu)[0],e=Cs(Vn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=pi(n)}catch(c){throw c===ba?hs:c}else a=n;n=xe();var i=n.queue,s=i.dispatch;return t!==n.memoizedState&&(X.flags|=2048,xa(9,{destroy:void 0},lm.bind(null,i,t),null)),[a,s,e]}function lm(e,n){e.action=n}function Ku(e){var n=xe(),t=me;if(t!==null)return ju(n,t,e);xe(),n=n.memoizedState,t=xe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function xa(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=X.updateQueue,n===null&&(n=Ps(),X.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Zu(){return xe().memoizedState}function bs(e,n,t,a){var i=Qe();X.flags|=e,i.memoizedState=xa(1|n,{destroy:void 0},t,a===void 0?null:a)}function ws(e,n,t,a){var i=xe();a=a===void 0?null:a;var s=i.memoizedState.inst;me!==null&&a!==null&&gr(a,me.memoizedState.deps)?i.memoizedState=xa(n,s,t,a):(X.flags|=e,i.memoizedState=xa(1|n,s,t,a))}function _u(e,n){bs(8390656,8,e,n)}function Ar(e,n){ws(2048,8,e,n)}function rm(e){X.flags|=4;var n=X.updateQueue;if(n===null)n=Ps(),X.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function qu(e){var n=xe().memoizedState;return rm({ref:n,nextImpl:e}),function(){if((ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Fu(e,n){return ws(4,2,e,n)}function Qu(e,n){return ws(4,4,e,n)}function Yu(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gu(e,n,t){t=t!=null?t.concat([e]):null,ws(4,4,Yu.bind(null,n,e),t)}function Nr(){}function Xu(e,n){var t=xe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&gr(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Vu(e,n){var t=xe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&gr(n,a[1]))return a[0];if(a=e(),Gt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[a,n],a}function xr(e,n,t){return t===void 0||(Xn&1073741824)!==0&&(te&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Jd(),X.lanes|=e,Ct|=e,t)}function Ju(e,n,t,a){return un(t,n)?t:ka.current!==null?(e=xr(e,t,a),un(e,n)||(Ie=!0),e):(Xn&42)===0||(Xn&1073741824)!==0&&(te&261930)===0?(Ie=!0,e.memoizedState=t):(e=Jd(),X.lanes|=e,Ct|=e,n)}function $u(e,n,t,a,i){var s=H.p;H.p=s!==0&&8>s?s:8;var c=x.T,p={};x.T=p,Er(e,!1,n,t);try{var y=i(),b=x.S;if(b!==null&&b(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var N=tm(y,a);fi(e,n,N,gn(e))}else fi(e,n,a,gn(e))}catch(E){fi(e,n,{then:function(){},status:"rejected",reason:E},gn())}finally{H.p=s,c!==null&&p.types!==null&&(c.types=p.types),x.T=c}}function om(){}function Rr(e,n,t,a){if(e.tag!==5)throw Error(r(476));var i=ed(e).queue;$u(e,i,n,q,t===null?om:function(){return nd(e),t(a)})}function ed(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:q},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function nd(e){var n=ed(e);n.next===null&&(n=e.alternate.memoizedState),fi(e,n.next.queue,{},gn())}function Dr(){return Ke(Ei)}function td(){return xe().memoizedState}function ad(){return xe().memoizedState}function cm(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=gn();e=gt(t);var a=yt(n,e,t);a!==null&&(ln(a,n,t),ci(a,n,t)),n={cache:sr()},e.payload=n;return}n=n.return}}function um(e,n,t){var a=gn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ks(e)?sd(n,t):(t=Yl(e,n,t,a),t!==null&&(ln(t,e,a),ld(t,n,a)))}function id(e,n,t){var a=gn();fi(e,n,t,a)}function fi(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ks(e))sd(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var c=n.lastRenderedState,p=s(c,t);if(i.hasEagerState=!0,i.eagerState=p,un(p,c))return ss(e,n,i,0),ve===null&&is(),!1}catch{}if(t=Yl(e,n,i,a),t!==null)return ln(t,e,a),ld(t,n,a),!0}return!1}function Er(e,n,t,a){if(a={lane:2,revertLane:co(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(n)throw Error(r(479))}else n=Yl(e,t,a,2),n!==null&&ln(n,e,2)}function ks(e){var n=e.alternate;return e===X||n!==null&&n===X}function sd(e,n){Aa=Ts=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ld(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,dc(e,t)}}var mi={readContext:Ke,use:Ss,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};mi.useEffectEvent=we;var rd={readContext:Ke,use:Ss,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Ke,useEffect:_u,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,bs(4194308,4,Yu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return bs(4194308,4,e,n)},useInsertionEffect:function(e,n){bs(4,2,e,n)},useMemo:function(e,n){var t=Qe();n=n===void 0?null:n;var a=e();if(Gt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Qe();if(t!==void 0){var i=t(n);if(Gt){ot(!0);try{t(n)}finally{ot(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=um.bind(null,X,e),[a.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:function(e){e=wr(e);var n=e.queue,t=id.bind(null,X,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Nr,useDeferredValue:function(e,n){var t=Qe();return xr(t,e,n)},useTransition:function(){var e=wr(!1);return e=$u.bind(null,X,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=X,i=Qe();if(se){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),ve===null)throw Error(r(349));(te&127)!==0||xu(a,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,_u(Du.bind(null,a,s,e),[e]),a.flags|=2048,xa(9,{destroy:void 0},Ru.bind(null,a,s,t,n),null),t},useId:function(){var e=Qe(),n=ve.identifierPrefix;if(se){var t=On,a=zn;t=(a&~(1<<32-cn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=vs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=am++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Dr,useFormState:Bu,useActionState:Bu,useOptimistic:function(e){var n=Qe();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Er.bind(null,X,!0,t),t.dispatch=n,[e,n]},useMemoCache:Sr,useCacheRefresh:function(){return Qe().memoizedState=cm.bind(null,X)},useEffectEvent:function(e){var n=Qe(),t={impl:e};return n.memoizedState=t,function(){if((ce&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Ir={readContext:Ke,use:Ss,useCallback:Xu,useContext:Ke,useEffect:Ar,useImperativeHandle:Gu,useInsertionEffect:Fu,useLayoutEffect:Qu,useMemo:Vu,useReducer:Cs,useRef:Zu,useState:function(){return Cs(Vn)},useDebugValue:Nr,useDeferredValue:function(e,n){var t=xe();return Ju(t,me.memoizedState,e,n)},useTransition:function(){var e=Cs(Vn)[0],n=xe().memoizedState;return[typeof e=="boolean"?e:pi(e),n]},useSyncExternalStore:Nu,useId:td,useHostTransitionStatus:Dr,useFormState:Wu,useActionState:Wu,useOptimistic:function(e,n){var t=xe();return Mu(t,me,e,n)},useMemoCache:Sr,useCacheRefresh:ad};Ir.useEffectEvent=qu;var od={readContext:Ke,use:Ss,useCallback:Xu,useContext:Ke,useEffect:Ar,useImperativeHandle:Gu,useInsertionEffect:Fu,useLayoutEffect:Qu,useMemo:Vu,useReducer:br,useRef:Zu,useState:function(){return br(Vn)},useDebugValue:Nr,useDeferredValue:function(e,n){var t=xe();return me===null?xr(t,e,n):Ju(t,me.memoizedState,e,n)},useTransition:function(){var e=br(Vn)[0],n=xe().memoizedState;return[typeof e=="boolean"?e:pi(e),n]},useSyncExternalStore:Nu,useId:td,useHostTransitionStatus:Dr,useFormState:Ku,useActionState:Ku,useOptimistic:function(e,n){var t=xe();return me!==null?Mu(t,me,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:ad};od.useEffectEvent=qu;function Mr(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ur={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=gn(),i=gt(a);i.payload=n,t!=null&&(i.callback=t),n=yt(e,i,a),n!==null&&(ln(n,e,a),ci(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=gn(),i=gt(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=yt(e,i,a),n!==null&&(ln(n,e,a),ci(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=gn(),a=gt(t);a.tag=2,n!=null&&(a.callback=n),n=yt(e,a,t),n!==null&&(ln(n,e,t),ci(n,e,t))}};function cd(e,n,t,a,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,c):n.prototype&&n.prototype.isPureReactComponent?!ni(t,a)||!ni(i,s):!0}function ud(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Ur.enqueueReplaceState(n,n.state,null)}function Xt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=M({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function dd(e){as(e)}function hd(e){console.error(e)}function pd(e){as(e)}function As(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function fd(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hr(e,n,t){return t=gt(t),t.tag=3,t.payload={element:null},t.callback=function(){As(e,n)},t}function md(e){return e=gt(e),e.tag=3,e}function gd(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){fd(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){fd(n,t,a),typeof i!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function dm(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Pa(n,t,i,!0),t=hn.current,t!==null){switch(t.tag){case 31:case 13:return wn===null?Ls():t.alternate===null&&ke===0&&(ke=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===ps?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),lo(e,a,i)),!1;case 22:return t.flags|=65536,a===ps?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),lo(e,a,i)),!1}throw Error(r(435,t.tag))}return lo(e,a,i),Ls(),!1}if(se)return n=hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==er&&(e=Error(r(422),{cause:a}),ii(Pn(e,t)))):(a!==er&&(n=Error(r(423),{cause:a}),ii(Pn(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Pn(a,t),i=Hr(e.stateNode,a,i),dr(e,i),ke!==4&&(ke=2)),!1;var s=Error(r(520),{cause:a});if(s=Pn(s,t),bi===null?bi=[s]:bi.push(s),ke!==4&&(ke=2),n===null)return!0;a=Pn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Hr(t.stateNode,a,e),dr(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(bt===null||!bt.has(s))))return t.flags|=65536,i&=-i,t.lanes|=i,i=md(i),gd(i,e,t,a),dr(t,i),!1}t=t.return}while(t!==null);return!1}var zr=Error(r(461)),Ie=!1;function Ze(e,n,t,a){n.child=e===null?Pu(n,null,t,a):Yt(n,e.child,t,a)}function yd(e,n,t,a,i){t=t.render;var s=n.ref;if("ref"in a){var c={};for(var p in a)p!=="ref"&&(c[p]=a[p])}else c=a;return _t(n),a=yr(e,n,t,c,s,i),p=Tr(),e!==null&&!Ie?(vr(e,n,i),Jn(e,n,i)):(se&&p&&Jl(n),n.flags|=1,Ze(e,n,a,i),n.child)}function Td(e,n,t,a,i){if(e===null){var s=t.type;return typeof s=="function"&&!Gl(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,vd(e,n,s,a,i)):(e=rs(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!_r(e,i)){var c=s.memoizedProps;if(t=t.compare,t=t!==null?t:ni,t(c,a)&&e.ref===n.ref)return Jn(e,n,i)}return n.flags|=1,e=Fn(s,a),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,t,a,i){if(e!==null){var s=e.memoizedProps;if(ni(s,a)&&e.ref===n.ref)if(Ie=!1,n.pendingProps=a=s,_r(e,i))(e.flags&131072)!==0&&(Ie=!0);else return n.lanes=e.lanes,Jn(e,n,i)}return Or(e,n,t,a,i)}function Pd(e,n,t,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,n.child=null;return Sd(e,n,s,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ds(n,s!==null?s.cachePool:null),s!==null?bu(n,s):pr(),wu(n);else return a=n.lanes=536870912,Sd(e,n,s!==null?s.baseLanes|t:t,t,a)}else s!==null?(ds(n,s.cachePool),bu(n,s),vt(),n.memoizedState=null):(e!==null&&ds(n,null),pr(),vt());return Ze(e,n,i,t),n.child}function gi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sd(e,n,t,a,i){var s=rr();return s=s===null?null:{parent:De._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&ds(n,null),pr(),wu(n),e!==null&&Pa(e,n,a,!0),n.childLanes=i,null}function Ns(e,n){return n=Rs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cd(e,n,t){return Yt(n,e.child,null,t),e=Ns(n,n.pendingProps),e.flags|=2,pn(n),n.memoizedState=null,e}function hm(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=Ns(n,a),n.lanes=536870912,gi(null,e);if(mr(n),(e=Pe)?(e=Uh(e,bn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:dt!==null?{id:zn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},t=su(e),t.return=n,n.child=t,je=n,Pe=null)):e=null,e===null)throw pt(n);return n.lanes=536870912,null}return Ns(n,a)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(mr(n),i)if(n.flags&256)n.flags&=-257,n=Cd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ie||Pa(e,n,t,!1),i=(t&e.childLanes)!==0,Ie||i){if(a=ve,a!==null&&(c=hc(a,t),c!==0&&c!==s.retryLane))throw s.retryLane=c,Wt(e,c),ln(a,e,c),zr;Ls(),n=Cd(e,n,t)}else e=s.treeContext,Pe=kn(c.nextSibling),je=n,se=!0,ht=null,bn=!1,e!==null&&ou(n,e),n=Ns(n,a),n.flags|=4096;return n}return e=Fn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Or(e,n,t,a,i){return _t(n),t=yr(e,n,t,a,void 0,i),a=Tr(),e!==null&&!Ie?(vr(e,n,i),Jn(e,n,i)):(se&&a&&Jl(n),n.flags|=1,Ze(e,n,t,i),n.child)}function bd(e,n,t,a,i,s){return _t(n),n.updateQueue=null,t=Au(n,a,t,i),ku(e),a=Tr(),e!==null&&!Ie?(vr(e,n,s),Jn(e,n,s)):(se&&a&&Jl(n),n.flags|=1,Ze(e,n,t,s),n.child)}function wd(e,n,t,a,i){if(_t(n),n.stateNode===null){var s=ga,c=t.contextType;typeof c=="object"&&c!==null&&(s=Ke(c)),s=new t(a,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ur,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=a,s.state=n.memoizedState,s.refs={},cr(n),c=t.contextType,s.context=typeof c=="object"&&c!==null?Ke(c):ga,s.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Mr(n,t,c,a),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&Ur.enqueueReplaceState(s,s.state,null),di(n,a,s,i),ui(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){s=n.stateNode;var p=n.memoizedProps,y=Xt(t,p);s.props=y;var b=s.context,N=t.contextType;c=ga,typeof N=="object"&&N!==null&&(c=Ke(N));var E=t.getDerivedStateFromProps;N=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=n.pendingProps!==p,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||b!==c)&&ud(n,s,a,c),mt=!1;var w=n.memoizedState;s.state=w,di(n,a,s,i),ui(),b=n.memoizedState,p||w!==b||mt?(typeof E=="function"&&(Mr(n,t,E,a),b=n.memoizedState),(y=mt||cd(n,t,y,a,w,b,c))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=b),s.props=a,s.state=b,s.context=c,a=y):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,ur(e,n),c=n.memoizedProps,N=Xt(t,c),s.props=N,E=n.pendingProps,w=s.context,b=t.contextType,y=ga,typeof b=="object"&&b!==null&&(y=Ke(b)),p=t.getDerivedStateFromProps,(b=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==E||w!==y)&&ud(n,s,a,y),mt=!1,w=n.memoizedState,s.state=w,di(n,a,s,i),ui();var k=n.memoizedState;c!==E||w!==k||mt||e!==null&&e.dependencies!==null&&cs(e.dependencies)?(typeof p=="function"&&(Mr(n,t,p,a),k=n.memoizedState),(N=mt||cd(n,t,N,a,w,k,y)||e!==null&&e.dependencies!==null&&cs(e.dependencies))?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,k,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,k,y)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=k),s.props=a,s.state=k,s.context=y,a=N):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),a=!1)}return s=a,xs(e,n),a=(n.flags&128)!==0,s||a?(s=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&a?(n.child=Yt(n,e.child,null,i),n.child=Yt(n,null,t,i)):Ze(e,n,t,i),n.memoizedState=s.state,e=n.child):e=Jn(e,n,i),e}function kd(e,n,t,a){return Kt(),n.flags|=256,Ze(e,n,t,a),n.child}var Lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Br(e){return{baseLanes:e,cachePool:fu()}}function Wr(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=mn),e}function Ad(e,n,t){var a=n.pendingProps,i=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),c&&(i=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(se){if(i?Tt(n):vt(),(e=Pe)?(e=Uh(e,bn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:dt!==null?{id:zn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},t=su(e),t.return=n,n.child=t,je=n,Pe=null)):e=null,e===null)throw pt(n);return bo(e)?n.lanes=32:n.lanes=536870912,null}var p=a.children;return a=a.fallback,i?(vt(),i=n.mode,p=Rs({mode:"hidden",children:p},i),a=jt(a,i,t,null),p.return=n,a.return=n,p.sibling=a,n.child=p,a=n.child,a.memoizedState=Br(t),a.childLanes=Wr(e,c,t),n.memoizedState=Lr,gi(null,a)):(Tt(n),jr(n,p))}var y=e.memoizedState;if(y!==null&&(p=y.dehydrated,p!==null)){if(s)n.flags&256?(Tt(n),n.flags&=-257,n=Kr(e,n,t)):n.memoizedState!==null?(vt(),n.child=e.child,n.flags|=128,n=null):(vt(),p=a.fallback,i=n.mode,a=Rs({mode:"visible",children:a.children},i),p=jt(p,i,t,null),p.flags|=2,a.return=n,p.return=n,a.sibling=p,n.child=a,Yt(n,e.child,null,t),a=n.child,a.memoizedState=Br(t),a.childLanes=Wr(e,c,t),n.memoizedState=Lr,n=gi(null,a));else if(Tt(n),bo(p)){if(c=p.nextSibling&&p.nextSibling.dataset,c)var b=c.dgst;c=b,a=Error(r(419)),a.stack="",a.digest=c,ii({value:a,source:null,stack:null}),n=Kr(e,n,t)}else if(Ie||Pa(e,n,t,!1),c=(t&e.childLanes)!==0,Ie||c){if(c=ve,c!==null&&(a=hc(c,t),a!==0&&a!==y.retryLane))throw y.retryLane=a,Wt(e,a),ln(c,e,a),zr;Co(p)||Ls(),n=Kr(e,n,t)}else Co(p)?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Pe=kn(p.nextSibling),je=n,se=!0,ht=null,bn=!1,e!==null&&ou(n,e),n=jr(n,a.children),n.flags|=4096);return n}return i?(vt(),p=a.fallback,i=n.mode,y=e.child,b=y.sibling,a=Fn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,b!==null?p=Fn(b,p):(p=jt(p,i,t,null),p.flags|=2),p.return=n,a.return=n,a.sibling=p,n.child=a,gi(null,a),a=n.child,p=e.child.memoizedState,p===null?p=Br(t):(i=p.cachePool,i!==null?(y=De._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=fu(),p={baseLanes:p.baseLanes|t,cachePool:i}),a.memoizedState=p,a.childLanes=Wr(e,c,t),n.memoizedState=Lr,gi(e.child,a)):(Tt(n),t=e.child,e=t.sibling,t=Fn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function jr(e,n){return n=Rs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rs(e,n){return e=dn(22,e,null,n),e.lanes=0,e}function Kr(e,n,t){return Yt(n,e.child,null,t),e=jr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),ar(e.return,n,t)}function Zr(e,n,t,a,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:s}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=i,c.treeForkCount=s)}function xd(e,n,t){var a=n.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var c=Ne.current,p=(c&2)!==0;if(p?(c=c&1|2,n.flags|=128):c&=1,z(Ne,c),Ze(e,n,a,t),a=se?ai:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,t,n);else if(e.tag===19)Nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ys(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Zr(n,!1,i,t,s,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Zr(n,!0,t,null,s,a);break;case"together":Zr(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Pa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _r(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cs(e)))}function pm(e,n,t){switch(n.tag){case 3:Fe(n,n.stateNode.containerInfo),ft(n,De,e.memoizedState.cache),Kt();break;case 27:case 5:Ka(n);break;case 4:Fe(n,n.stateNode.containerInfo);break;case 10:ft(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mr(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Tt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Ad(e,n,t):(Tt(n),e=Jn(e,n,t),e!==null?e.sibling:null);Tt(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Pa(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return xd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(Ne,Ne.current),a)break;return null;case 22:return n.lanes=0,Pd(e,n,t,n.pendingProps);case 24:ft(n,De,e.memoizedState.cache)}return Jn(e,n,t)}function Rd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ie=!0;else{if(!_r(e,t)&&(n.flags&128)===0)return Ie=!1,pm(e,n,t);Ie=(e.flags&131072)!==0}else Ie=!1,se&&(n.flags&1048576)!==0&&ru(n,ai,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Ft(n.elementType),n.type=e,typeof e=="function")Gl(e)?(a=Xt(e,a),n.tag=1,n=wd(null,n,e,a,t)):(n.tag=0,n=Or(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===Ge){n.tag=11,n=yd(null,n,e,a,t);break e}else if(i===ie){n.tag=14,n=Td(null,n,e,a,t);break e}}throw n=Kn(e)||e,Error(r(306,n,""))}}return n;case 0:return Or(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=Xt(a,n.pendingProps),wd(e,n,a,i,t);case 3:e:{if(Fe(n,n.stateNode.containerInfo),e===null)throw Error(r(387));a=n.pendingProps;var s=n.memoizedState;i=s.element,ur(e,n),di(n,a,null,t);var c=n.memoizedState;if(a=c.cache,ft(n,De,a),a!==s.cache&&ir(n,[De],t,!0),ui(),a=c.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=kd(e,n,a,t);break e}else if(a!==i){i=Pn(Error(r(424)),n),ii(i),n=kd(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pe=kn(e.firstChild),je=n,se=!0,ht=null,bn=!0,t=Pu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Kt(),a===i){n=Jn(e,n,t);break e}Ze(e,n,a,t)}n=n.child}return n;case 26:return xs(e,n),e===null?(t=Wh(n.type,null,n.pendingProps,null))?n.memoizedState=t:se||(t=n.type,e=n.pendingProps,a=qs($.current).createElement(t),a[We]=n,a[$e]=e,_e(a,t,e),Oe(a),n.stateNode=a):n.memoizedState=Wh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ka(n),e===null&&se&&(a=n.stateNode=Oh(n.type,n.pendingProps,$.current),je=n,bn=!0,i=Pe,Nt(n.type)?(wo=i,Pe=kn(a.firstChild)):Pe=i),Ze(e,n,n.pendingProps.children,t),xs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&se&&((i=a=Pe)&&(a=Zm(a,n.type,n.pendingProps,bn),a!==null?(n.stateNode=a,je=n,Pe=kn(a.firstChild),bn=!1,i=!0):i=!1),i||pt(n)),Ka(n),i=n.type,s=n.pendingProps,c=e!==null?e.memoizedProps:null,a=s.children,vo(i,s)?a=null:c!==null&&vo(i,c)&&(n.flags|=32),n.memoizedState!==null&&(i=yr(e,n,im,null,null,t),Ei._currentValue=i),xs(e,n),Ze(e,n,a,t),n.child;case 6:return e===null&&se&&((e=t=Pe)&&(t=_m(t,n.pendingProps,bn),t!==null?(n.stateNode=t,je=n,Pe=null,e=!0):e=!1),e||pt(n)),null;case 13:return Ad(e,n,t);case 4:return Fe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Yt(n,null,a,t):Ze(e,n,a,t),n.child;case 11:return yd(e,n,n.type,n.pendingProps,t);case 7:return Ze(e,n,n.pendingProps,t),n.child;case 8:return Ze(e,n,n.pendingProps.children,t),n.child;case 12:return Ze(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,ft(n,n.type,a.value),Ze(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,_t(n),i=Ke(i),a=a(i),n.flags|=1,Ze(e,n,a,t),n.child;case 14:return Td(e,n,n.type,n.pendingProps,t);case 15:return vd(e,n,n.type,n.pendingProps,t);case 19:return xd(e,n,t);case 31:return hm(e,n,t);case 22:return Pd(e,n,t,n.pendingProps);case 24:return _t(n),a=Ke(De),e===null?(i=rr(),i===null&&(i=ve,s=sr(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=t),i=s),n.memoizedState={parent:a,cache:i},cr(n),ft(n,De,i)):((e.lanes&t)!==0&&(ur(e,n),di(n,null,null,t),ui()),i=e.memoizedState,s=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),ft(n,De,a)):(a=s.cache,ft(n,De,a),a!==i.cache&&ir(n,[De],t,!0))),Ze(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $n(e){e.flags|=4}function qr(e,n,t,a,i){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(th())e.flags|=8192;else throw Qt=ps,or}else e.flags&=-16777217}function Dd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qh(n))if(th())e.flags|=8192;else throw Qt=ps,or}function Ds(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cc():536870912,e.lanes|=n,Ia|=n)}function yi(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function fm(e,n,t){var a=n.pendingProps;switch($l(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(n),null;case 1:return Se(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gn(De),Ae(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(va(n)?$n(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nr())),Se(n),null;case 26:var i=n.type,s=n.memoizedState;return e===null?($n(n),s!==null?(Se(n),Dd(n,s)):(Se(n),qr(n,i,null,a,t))):s?s!==e.memoizedState?($n(n),Se(n),Dd(n,s)):(Se(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&$n(n),Se(n),qr(n,i,e,a,t)),null;case 27:if(ji(n),t=$.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Se(n),null}e=L.current,va(n)?cu(n):(e=Oh(i,a,t),n.stateNode=e,$n(n))}return Se(n),null;case 5:if(ji(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Se(n),null}if(s=L.current,va(n))cu(n);else{var c=qs($.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?c.createElement(i,{is:a.is}):c.createElement(i)}}s[We]=n,s[$e]=a;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=s;e:switch(_e(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&$n(n)}}return Se(n),qr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=$.current,va(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=je,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[We]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Ah(e.nodeValue,t)),e||pt(n,!0)}else e=qs(e).createTextNode(a),e[We]=n,n.stateNode=e}return Se(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=va(n),t!==null){if(e===null){if(!a)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[We]=n}else Kt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Se(n),e=!1}else t=nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(pn(n),n):(pn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Se(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=va(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(r(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));i[We]=n}else Kt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Se(n),i=!1}else i=nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(pn(n),n):(pn(n),null)}return pn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Ds(n,n.updateQueue),Se(n),null);case 4:return Ae(),e===null&&fo(n.stateNode.containerInfo),Se(n),null;case 10:return Gn(n.type),Se(n),null;case 19:if(I(Ne),a=n.memoizedState,a===null)return Se(n),null;if(i=(n.flags&128)!==0,s=a.rendering,s===null)if(i)yi(a,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=ys(e),s!==null){for(n.flags|=128,yi(a,!1),e=s.updateQueue,n.updateQueue=e,Ds(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)iu(t,e),t=t.sibling;return z(Ne,Ne.current&1|2),se&&Qn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&rn()>Hs&&(n.flags|=128,i=!0,yi(a,!1),n.lanes=4194304)}else{if(!i)if(e=ys(s),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,Ds(n,e),yi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!se)return Se(n),null}else 2*rn()-a.renderingStartTime>Hs&&t!==536870912&&(n.flags|=128,i=!0,yi(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(e=a.last,e!==null?e.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rn(),e.sibling=null,t=Ne.current,z(Ne,i?t&1|2:t&1),se&&Qn(n,a.treeForkCount),e):(Se(n),null);case 22:case 23:return pn(n),fr(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Se(n),n.subtreeFlags&6&&(n.flags|=8192)):Se(n),t=n.updateQueue,t!==null&&Ds(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&I(qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Gn(De),Se(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function mm(e,n){switch($l(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gn(De),Ae(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ji(n),null;case 31:if(n.memoizedState!==null){if(pn(n),n.alternate===null)throw Error(r(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(Ne),null;case 4:return Ae(),null;case 10:return Gn(n.type),null;case 22:case 23:return pn(n),fr(),e!==null&&I(qt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gn(De),null;case 25:return null;default:return null}}function Ed(e,n){switch($l(n),n.tag){case 3:Gn(De),Ae();break;case 26:case 27:case 5:ji(n);break;case 4:Ae();break;case 31:n.memoizedState!==null&&pn(n);break;case 13:pn(n);break;case 19:I(Ne);break;case 10:Gn(n.type);break;case 22:case 23:pn(n),fr(),e!==null&&I(qt);break;case 24:Gn(De)}}function Ti(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var s=t.create,c=t.inst;a=s(),c.destroy=a}t=t.next}while(t!==i)}}catch(p){pe(n,n.return,p)}}function Pt(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var c=a.inst,p=c.destroy;if(p!==void 0){c.destroy=void 0,i=n;var y=t,b=p;try{b()}catch(N){pe(i,y,N)}}}a=a.next}while(a!==s)}}catch(N){pe(n,n.return,N)}}function Id(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Cu(n,t)}catch(a){pe(e,e.return,a)}}}function Md(e,n,t){t.props=Xt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){pe(e,n,a)}}function vi(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){pe(e,n,i)}}function Ln(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){pe(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){pe(e,n,i)}else t.current=null}function Ud(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){pe(e,e.return,i)}}function Fr(e,n,t){try{var a=e.stateNode;Om(a,e.type,t,n),a[$e]=n}catch(i){pe(e,e.return,i)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Nt(e.type)||e.tag===4}function Qr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Nt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_n));else if(a!==4&&(a===27&&Nt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Yr(e,n,t),e=e.sibling;e!==null;)Yr(e,n,t),e=e.sibling}function Es(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&Nt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Es(e,n,t),e=e.sibling;e!==null;)Es(e,n,t),e=e.sibling}function zd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);_e(n,a,t),n[We]=e,n[$e]=t}catch(s){pe(e,e.return,s)}}var et=!1,Me=!1,Gr=!1,Od=typeof WeakSet=="function"?WeakSet:Set,Le=null;function gm(e,n){if(e=e.containerInfo,yo=Js,e=Gc(e),Kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var c=0,p=-1,y=-1,b=0,N=0,E=e,w=null;n:for(;;){for(var k;E!==t||i!==0&&E.nodeType!==3||(p=c+i),E!==s||a!==0&&E.nodeType!==3||(y=c+a),E.nodeType===3&&(c+=E.nodeValue.length),(k=E.firstChild)!==null;)w=E,E=k;for(;;){if(E===e)break n;if(w===t&&++b===i&&(p=c),w===s&&++N===a&&(y=c),(k=E.nextSibling)!==null)break;E=w,w=E.parentNode}E=k}t=p===-1||y===-1?null:{start:p,end:y}}else t=null}t=t||{start:0,end:0}}else t=null;for(To={focusedElem:e,selectionRange:t},Js=!1,Le=n;Le!==null;)if(n=Le,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Le=e;else for(;Le!==null;){switch(n=Le,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,i=s.memoizedProps,s=s.memoizedState,a=t.stateNode;try{var O=Xt(t.type,i);e=a.getSnapshotBeforeUpdate(O,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(_){pe(t,t.return,_)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)So(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":So(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Le=e;break}Le=n.return}}function Ld(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:tt(e,t),a&4&&Ti(5,t);break;case 1:if(tt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){pe(t,t.return,c)}else{var i=Xt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){pe(t,t.return,c)}}a&64&&Id(t),a&512&&vi(t,t.return);break;case 3:if(tt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Cu(e,n)}catch(c){pe(t,t.return,c)}}break;case 27:n===null&&a&4&&zd(t);case 26:case 5:tt(e,t),n===null&&a&4&&Ud(t),a&512&&vi(t,t.return);break;case 12:tt(e,t);break;case 31:tt(e,t),a&4&&jd(e,t);break;case 13:tt(e,t),a&4&&Kd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=km.bind(null,t),qm(e,t))));break;case 22:if(a=t.memoizedState!==null||et,!a){n=n!==null&&n.memoizedState!==null||Me,i=et;var s=Me;et=a,(Me=n)&&!s?at(e,t,(t.subtreeFlags&8772)!==0):tt(e,t),et=i,Me=s}break;case 30:break;default:tt(e,t)}}function Bd(e){var n=e.alternate;n!==null&&(e.alternate=null,Bd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&kl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,nn=!1;function nt(e,n,t){for(t=t.child;t!==null;)Wd(e,n,t),t=t.sibling}function Wd(e,n,t){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Za,t)}catch{}switch(t.tag){case 26:Me||Ln(t,n),nt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Me||Ln(t,n);var a=be,i=nn;Nt(t.type)&&(be=t.stateNode,nn=!1),nt(e,n,t),xi(t.stateNode),be=a,nn=i;break;case 5:Me||Ln(t,n);case 6:if(a=be,i=nn,be=null,nt(e,n,t),be=a,nn=i,be!==null)if(nn)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(t.stateNode)}catch(s){pe(t,n,s)}else try{be.removeChild(t.stateNode)}catch(s){pe(t,n,s)}break;case 18:be!==null&&(nn?(e=be,Ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Wa(e)):Ih(be,t.stateNode));break;case 4:a=be,i=nn,be=t.stateNode.containerInfo,nn=!0,nt(e,n,t),be=a,nn=i;break;case 0:case 11:case 14:case 15:Pt(2,t,n),Me||Pt(4,t,n),nt(e,n,t);break;case 1:Me||(Ln(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Md(t,n,a)),nt(e,n,t);break;case 21:nt(e,n,t);break;case 22:Me=(a=Me)||t.memoizedState!==null,nt(e,n,t),Me=a;break;default:nt(e,n,t)}}function jd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wa(e)}catch(t){pe(n,n.return,t)}}}function Kd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wa(e)}catch(t){pe(n,n.return,t)}}function ym(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Od),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Od),n;default:throw Error(r(435,e.tag))}}function Is(e,n){var t=ym(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=Am.bind(null,e,a);a.then(i,i)}})}function tn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],s=e,c=n,p=c;e:for(;p!==null;){switch(p.tag){case 27:if(Nt(p.type)){be=p.stateNode,nn=!1;break e}break;case 5:be=p.stateNode,nn=!1;break e;case 3:case 4:be=p.stateNode.containerInfo,nn=!0;break e}p=p.return}if(be===null)throw Error(r(160));Wd(s,c,i),be=null,nn=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zd(n,e),n=n.sibling}var Dn=null;function Zd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(n,e),an(e),a&4&&(Pt(3,e,e.return),Ti(3,e),Pt(5,e,e.return));break;case 1:tn(n,e),an(e),a&512&&(Me||t===null||Ln(t,t.return)),a&64&&et&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=Dn;if(tn(n,e),an(e),a&512&&(Me||t===null||Ln(t,t.return)),a&4){var s=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Fa]||s[We]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),_e(s,a,t),s[We]=e,Oe(s),a=s;break e;case"link":var c=Zh("link","href",i).get(a+(t.href||""));if(c){for(var p=0;p<c.length;p++)if(s=c[p],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(p,1);break n}}s=i.createElement(a),_e(s,a,t),i.head.appendChild(s);break;case"meta":if(c=Zh("meta","content",i).get(a+(t.content||""))){for(p=0;p<c.length;p++)if(s=c[p],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(p,1);break n}}s=i.createElement(a),_e(s,a,t),i.head.appendChild(s);break;default:throw Error(r(468,a))}s[We]=e,Oe(s),a=s}e.stateNode=a}else _h(i,e.type,e.stateNode);else e.stateNode=Kh(i,a,e.memoizedProps);else s!==a?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,a===null?_h(i,e.type,e.stateNode):Kh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Fr(e,e.memoizedProps,t.memoizedProps)}break;case 27:tn(n,e),an(e),a&512&&(Me||t===null||Ln(t,t.return)),t!==null&&a&4&&Fr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(tn(n,e),an(e),a&512&&(Me||t===null||Ln(t,t.return)),e.flags&32){i=e.stateNode;try{ca(i,"")}catch(O){pe(e,e.return,O)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Fr(e,i,t!==null?t.memoizedProps:i)),a&1024&&(Gr=!0);break;case 6:if(tn(n,e),an(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(O){pe(e,e.return,O)}}break;case 3:if(Ys=null,i=Dn,Dn=Fs(n.containerInfo),tn(n,e),Dn=i,an(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Wa(n.containerInfo)}catch(O){pe(e,e.return,O)}Gr&&(Gr=!1,_d(e));break;case 4:a=Dn,Dn=Fs(e.stateNode.containerInfo),tn(n,e),an(e),Dn=a;break;case 12:tn(n,e),an(e);break;case 31:tn(n,e),an(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 13:tn(n,e),an(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Us=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:i=e.memoizedState!==null;var y=t!==null&&t.memoizedState!==null,b=et,N=Me;if(et=b||i,Me=N||y,tn(n,e),Me=N,et=b,an(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||y||et||Me||Vt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){y=t=n;try{if(s=y.stateNode,i)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{p=y.stateNode;var E=y.memoizedProps.style,w=E!=null&&E.hasOwnProperty("display")?E.display:null;p.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(O){pe(y,y.return,O)}}}else if(n.tag===6){if(t===null){y=n;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(O){pe(y,y.return,O)}}}else if(n.tag===18){if(t===null){y=n;try{var k=y.stateNode;i?Mh(k,!0):Mh(y.stateNode,!1)}catch(O){pe(y,y.return,O)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Is(e,t))));break;case 19:tn(n,e),an(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:tn(n,e),an(e)}}function an(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Hd(a)){t=a;break}a=a.return}if(t==null)throw Error(r(160));switch(t.tag){case 27:var i=t.stateNode,s=Qr(e);Es(e,s,i);break;case 5:var c=t.stateNode;t.flags&32&&(ca(c,""),t.flags&=-33);var p=Qr(e);Es(e,p,c);break;case 3:case 4:var y=t.stateNode.containerInfo,b=Qr(e);Yr(e,b,y);break;default:throw Error(r(161))}}catch(N){pe(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_d(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function tt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ld(e,n.alternate,n),n=n.sibling}function Vt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pt(4,n,n.return),Vt(n);break;case 1:Ln(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Md(n,n.return,t),Vt(n);break;case 27:xi(n.stateNode);case 26:case 5:Ln(n,n.return),Vt(n);break;case 22:n.memoizedState===null&&Vt(n);break;case 30:Vt(n);break;default:Vt(n)}e=e.sibling}}function at(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,s=n,c=s.flags;switch(s.tag){case 0:case 11:case 15:at(i,s,t),Ti(4,s);break;case 1:if(at(i,s,t),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(b){pe(a,a.return,b)}if(a=s,i=a.updateQueue,i!==null){var p=a.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Su(y[i],p)}catch(b){pe(a,a.return,b)}}t&&c&64&&Id(s),vi(s,s.return);break;case 27:zd(s);case 26:case 5:at(i,s,t),t&&a===null&&c&4&&Ud(s),vi(s,s.return);break;case 12:at(i,s,t);break;case 31:at(i,s,t),t&&c&4&&jd(i,s);break;case 13:at(i,s,t),t&&c&4&&Kd(i,s);break;case 22:s.memoizedState===null&&at(i,s,t),vi(s,s.return);break;case 30:break;default:at(i,s,t)}n=n.sibling}}function Xr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&si(t))}function Vr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&si(e))}function En(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qd(e,n,t,a),n=n.sibling}function qd(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n,t,a),i&2048&&Ti(9,n);break;case 1:En(e,n,t,a);break;case 3:En(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&si(e)));break;case 12:if(i&2048){En(e,n,t,a),e=n.stateNode;try{var s=n.memoizedProps,c=s.id,p=s.onPostCommit;typeof p=="function"&&p(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){pe(n,n.return,y)}}else En(e,n,t,a);break;case 31:En(e,n,t,a);break;case 13:En(e,n,t,a);break;case 23:break;case 22:s=n.stateNode,c=n.alternate,n.memoizedState!==null?s._visibility&2?En(e,n,t,a):Pi(e,n):s._visibility&2?En(e,n,t,a):(s._visibility|=2,Ra(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),i&2048&&Xr(c,n);break;case 24:En(e,n,t,a),i&2048&&Vr(n.alternate,n);break;default:En(e,n,t,a)}}function Ra(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,c=n,p=t,y=a,b=c.flags;switch(c.tag){case 0:case 11:case 15:Ra(s,c,p,y,i),Ti(8,c);break;case 23:break;case 22:var N=c.stateNode;c.memoizedState!==null?N._visibility&2?Ra(s,c,p,y,i):Pi(s,c):(N._visibility|=2,Ra(s,c,p,y,i)),i&&b&2048&&Xr(c.alternate,c);break;case 24:Ra(s,c,p,y,i),i&&b&2048&&Vr(c.alternate,c);break;default:Ra(s,c,p,y,i)}n=n.sibling}}function Pi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:Pi(t,a),i&2048&&Xr(a.alternate,a);break;case 24:Pi(t,a),i&2048&&Vr(a.alternate,a);break;default:Pi(t,a)}n=n.sibling}}var Si=8192;function Da(e,n,t){if(e.subtreeFlags&Si)for(e=e.child;e!==null;)Fd(e,n,t),e=e.sibling}function Fd(e,n,t){switch(e.tag){case 26:Da(e,n,t),e.flags&Si&&e.memoizedState!==null&&ag(t,Dn,e.memoizedState,e.memoizedProps);break;case 5:Da(e,n,t);break;case 3:case 4:var a=Dn;Dn=Fs(e.stateNode.containerInfo),Da(e,n,t),Dn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Si,Si=16777216,Da(e,n,t),Si=a):Da(e,n,t));break;default:Da(e,n,t)}}function Qd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ci(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Le=a,Gd(a,e)}Qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&Pt(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ms(e)):Ci(e);break;default:Ci(e)}}function Ms(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Le=a,Gd(a,e)}Qd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pt(8,n,n.return),Ms(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ms(n));break;default:Ms(n)}e=e.sibling}}function Gd(e,n){for(;Le!==null;){var t=Le;switch(t.tag){case 0:case 11:case 15:Pt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:si(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Le=a;else e:for(t=e;Le!==null;){a=Le;var i=a.sibling,s=a.return;if(Bd(a),a===t){Le=null;break e}if(i!==null){i.return=s,Le=i;break e}Le=s}}}var Tm={getCacheForType:function(e){var n=Ke(De),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ke(De).controller.signal}},vm=typeof WeakMap=="function"?WeakMap:Map,ce=0,ve=null,ee=null,te=0,he=0,fn=null,St=!1,Ea=!1,Jr=!1,it=0,ke=0,Ct=0,Jt=0,$r=0,mn=0,Ia=0,bi=null,sn=null,eo=!1,Us=0,Xd=0,Hs=1/0,zs=null,bt=null,He=0,wt=null,Ma=null,st=0,no=0,to=null,Vd=null,wi=0,ao=null;function gn(){return(ce&2)!==0&&te!==0?te&-te:x.T!==null?co():pc()}function Jd(){if(mn===0)if((te&536870912)===0||se){var e=_i;_i<<=1,(_i&3932160)===0&&(_i=262144),mn=e}else mn=536870912;return e=hn.current,e!==null&&(e.flags|=32),mn}function ln(e,n,t){(e===ve&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),kt(e,te,mn,!1)),qa(e,t),((ce&2)===0||e!==ve)&&(e===ve&&((ce&2)===0&&(Jt|=t),ke===4&&kt(e,te,mn,!1)),Bn(e))}function $d(e,n,t){if((ce&6)!==0)throw Error(r(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||_a(e,n),i=a?Cm(e,n):so(e,n,!0),s=a;do{if(i===0){Ea&&!a&&kt(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!Pm(t)){i=so(e,n,!1),s=!1;continue}if(i===2){if(s=n,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var p=e;i=bi;var y=p.current.memoizedState.isDehydrated;if(y&&(Ua(p,c).flags|=256),c=so(p,c,!1),c!==2){if(Jr&&!y){p.errorRecoveryDisabledLanes|=s,Jt|=s,i=4;break e}s=sn,sn=i,s!==null&&(sn===null?sn=s:sn.push.apply(sn,s))}i=c}if(s=!1,i!==2)continue}}if(i===1){Ua(e,0),kt(e,n,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:kt(a,n,mn,!St);break e;case 2:sn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(i=Us+300-rn(),10<i)){if(kt(a,n,mn,!St),Fi(a,0,!0)!==0)break e;st=n,a.timeoutHandle=Dh(eh.bind(null,a,t,sn,zs,eo,n,mn,Jt,Ia,St,s,"Throttled",-0,0),i);break e}eh(a,t,sn,zs,eo,n,mn,Jt,Ia,St,s,null,-0,0)}}break}while(!0);Bn(e)}function eh(e,n,t,a,i,s,c,p,y,b,N,E,w,k){if(e.timeoutHandle=-1,E=n.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_n},Fd(n,s,E);var O=(s&62914560)===s?Us-rn():(s&4194048)===s?Xd-rn():0;if(O=ig(E,O),O!==null){st=s,e.cancelPendingCommit=O(oh.bind(null,e,n,s,t,a,i,c,p,y,N,E,null,w,k)),kt(e,s,c,!b);return}}oh(e,n,s,t,a,i,c,p,y)}function Pm(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kt(e,n,t,a){n&=~$r,n&=~Jt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var s=31-cn(i),c=1<<s;a[s]=-1,i&=~c}t!==0&&uc(e,t,n)}function Os(){return(ce&6)===0?(ki(0),!1):!0}function io(){if(ee!==null){if(he===0)var e=ee.return;else e=ee,Yn=Zt=null,Pr(e),wa=null,ri=0,e=ee;for(;e!==null;)Ed(e.alternate,e),e=e.return;ee=null}}function Ua(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Wm(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),st=0,io(),ve=e,ee=t=Fn(e.current,null),te=n,he=0,fn=null,St=!1,Ea=_a(e,n),Jr=!1,Ia=mn=$r=Jt=Ct=ke=0,sn=bi=null,eo=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-cn(a),s=1<<i;n|=e[i],a&=~s}return it=n,is(),t}function nh(e,n){X=null,x.H=mi,n===ba||n===hs?(n=yu(),he=3):n===or?(n=yu(),he=4):he=n===zr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fn=n,ee===null&&(ke=1,As(e,Pn(n,e.current)))}function th(){var e=hn.current;return e===null?!0:(te&4194048)===te?wn===null:(te&62914560)===te||(te&536870912)!==0?e===wn:!1}function ah(){var e=x.H;return x.H=mi,e===null?mi:e}function ih(){var e=x.A;return x.A=Tm,e}function Ls(){ke=4,St||(te&4194048)!==te&&hn.current!==null||(Ea=!0),(Ct&134217727)===0&&(Jt&134217727)===0||ve===null||kt(ve,te,mn,!1)}function so(e,n,t){var a=ce;ce|=2;var i=ah(),s=ih();(ve!==e||te!==n)&&(zs=null,Ua(e,n)),n=!1;var c=ke;e:do try{if(he!==0&&ee!==null){var p=ee,y=fn;switch(he){case 8:io(),c=6;break e;case 3:case 2:case 9:case 6:hn.current===null&&(n=!0);var b=he;if(he=0,fn=null,Ha(e,p,y,b),t&&Ea){c=0;break e}break;default:b=he,he=0,fn=null,Ha(e,p,y,b)}}Sm(),c=ke;break}catch(N){nh(e,N)}while(!0);return n&&e.shellSuspendCounter++,Yn=Zt=null,ce=a,x.H=i,x.A=s,ee===null&&(ve=null,te=0,is()),c}function Sm(){for(;ee!==null;)sh(ee)}function Cm(e,n){var t=ce;ce|=2;var a=ah(),i=ih();ve!==e||te!==n?(zs=null,Hs=rn()+500,Ua(e,n)):Ea=_a(e,n);e:do try{if(he!==0&&ee!==null){n=ee;var s=fn;n:switch(he){case 1:he=0,fn=null,Ha(e,n,s,1);break;case 2:case 9:if(mu(s)){he=0,fn=null,lh(n);break}n=function(){he!==2&&he!==9||ve!==e||(he=7),Bn(e)},s.then(n,n);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:mu(s)?(he=0,fn=null,lh(n)):(he=0,fn=null,Ha(e,n,s,7));break;case 5:var c=null;switch(ee.tag){case 26:c=ee.memoizedState;case 5:case 27:var p=ee;if(c?qh(c):p.stateNode.complete){he=0,fn=null;var y=p.sibling;if(y!==null)ee=y;else{var b=p.return;b!==null?(ee=b,Bs(b)):ee=null}break n}}he=0,fn=null,Ha(e,n,s,5);break;case 6:he=0,fn=null,Ha(e,n,s,6);break;case 8:io(),ke=6;break e;default:throw Error(r(462))}}bm();break}catch(N){nh(e,N)}while(!0);return Yn=Zt=null,x.H=a,x.A=i,ce=t,ee!==null?0:(ve=null,te=0,is(),ke)}function bm(){for(;ee!==null&&!qp();)sh(ee)}function sh(e){var n=Rd(e.alternate,e,it);e.memoizedProps=e.pendingProps,n===null?Bs(e):ee=n}function lh(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=bd(t,n,n.pendingProps,n.type,void 0,te);break;case 11:n=bd(t,n,n.pendingProps,n.type.render,n.ref,te);break;case 5:Pr(n);default:Ed(t,n),n=ee=iu(n,it),n=Rd(t,n,it)}e.memoizedProps=e.pendingProps,n===null?Bs(e):ee=n}function Ha(e,n,t,a){Yn=Zt=null,Pr(n),wa=null,ri=0;var i=n.return;try{if(dm(e,i,n,t,te)){ke=1,As(e,Pn(t,e.current)),ee=null;return}}catch(s){if(i!==null)throw ee=i,s;ke=1,As(e,Pn(t,e.current)),ee=null;return}n.flags&32768?(se||a===1?e=!0:Ea||(te&536870912)!==0?e=!1:(St=e=!0,(a===2||a===9||a===3||a===6)&&(a=hn.current,a!==null&&a.tag===13&&(a.flags|=16384))),rh(n,e)):Bs(n)}function Bs(e){var n=e;do{if((n.flags&32768)!==0){rh(n,St);return}e=n.return;var t=fm(n.alternate,n,it);if(t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);ke===0&&(ke=5)}function rh(e,n){do{var t=mm(e.alternate,e);if(t!==null){t.flags&=32767,ee=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ee=e;return}ee=e=t}while(e!==null);ke=6,ee=null}function oh(e,n,t,a,i,s,c,p,y){e.cancelPendingCommit=null;do Ws();while(He!==0);if((ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(s=n.lanes|n.childLanes,s|=Ql,nf(e,t,s,c,p,y),e===ve&&(ee=ve=null,te=0),Ma=n,wt=e,st=t,no=s,to=i,Vd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nm(Ki,function(){return ph(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,i=H.p,H.p=2,c=ce,ce|=4;try{gm(e,n,t)}finally{ce=c,H.p=i,x.T=a}}He=1,ch(),uh(),dh()}}function ch(){if(He===1){He=0;var e=wt,n=Ma,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var a=H.p;H.p=2;var i=ce;ce|=4;try{Zd(n,e);var s=To,c=Gc(e.containerInfo),p=s.focusedElem,y=s.selectionRange;if(c!==p&&p&&p.ownerDocument&&Yc(p.ownerDocument.documentElement,p)){if(y!==null&&Kl(p)){var b=y.start,N=y.end;if(N===void 0&&(N=b),"selectionStart"in p)p.selectionStart=b,p.selectionEnd=Math.min(N,p.value.length);else{var E=p.ownerDocument||document,w=E&&E.defaultView||window;if(w.getSelection){var k=w.getSelection(),O=p.textContent.length,_=Math.min(y.start,O),ye=y.end===void 0?_:Math.min(y.end,O);!k.extend&&_>ye&&(c=ye,ye=_,_=c);var S=Qc(p,_),v=Qc(p,ye);if(S&&v&&(k.rangeCount!==1||k.anchorNode!==S.node||k.anchorOffset!==S.offset||k.focusNode!==v.node||k.focusOffset!==v.offset)){var C=E.createRange();C.setStart(S.node,S.offset),k.removeAllRanges(),_>ye?(k.addRange(C),k.extend(v.node,v.offset)):(C.setEnd(v.node,v.offset),k.addRange(C))}}}}for(E=[],k=p;k=k.parentNode;)k.nodeType===1&&E.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<E.length;p++){var D=E[p];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Js=!!yo,To=yo=null}finally{ce=i,H.p=a,x.T=t}}e.current=n,He=2}}function uh(){if(He===2){He=0;var e=wt,n=Ma,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var a=H.p;H.p=2;var i=ce;ce|=4;try{Ld(e,n.alternate,n)}finally{ce=i,H.p=a,x.T=t}}He=3}}function dh(){if(He===4||He===3){He=0,Fp();var e=wt,n=Ma,t=st,a=Vd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?He=5:(He=0,Ma=wt=null,hh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(bt=null),bl(t),n=n.stateNode,on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Za,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=x.T,i=H.p,H.p=2,x.T=null;try{for(var s=e.onRecoverableError,c=0;c<a.length;c++){var p=a[c];s(p.value,{componentStack:p.stack})}}finally{x.T=n,H.p=i}}(st&3)!==0&&Ws(),Bn(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===ao?wi++:(wi=0,ao=e):wi=0,ki(0)}}function hh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,si(n)))}function Ws(){return ch(),uh(),dh(),ph()}function ph(){if(He!==5)return!1;var e=wt,n=no;no=0;var t=bl(st),a=x.T,i=H.p;try{H.p=32>t?32:t,x.T=null,t=to,to=null;var s=wt,c=st;if(He=0,Ma=wt=null,st=0,(ce&6)!==0)throw Error(r(331));var p=ce;if(ce|=4,Yd(s.current),qd(s,s.current,c,t),ce=p,ki(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Za,s)}catch{}return!0}finally{H.p=i,x.T=a,hh(e,n)}}function fh(e,n,t){n=Pn(t,n),n=Hr(e.stateNode,n,2),e=yt(e,n,2),e!==null&&(qa(e,2),Bn(e))}function pe(e,n,t){if(e.tag===3)fh(e,e,t);else for(;n!==null;){if(n.tag===3){fh(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bt===null||!bt.has(a))){e=Pn(t,e),t=md(2),a=yt(n,t,2),a!==null&&(gd(t,a,n,e),qa(a,2),Bn(a));break}}n=n.return}}function lo(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new vm;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Jr=!0,i.add(t),e=wm.bind(null,e,n,t),n.then(e,e))}function wm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ve===e&&(te&t)===t&&(ke===4||ke===3&&(te&62914560)===te&&300>rn()-Us?(ce&2)===0&&Ua(e,0):$r|=t,Ia===te&&(Ia=0)),Bn(e)}function mh(e,n){n===0&&(n=cc()),e=Wt(e,n),e!==null&&(qa(e,n),Bn(e))}function km(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),mh(e,t)}function Am(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),mh(e,t)}function Nm(e,n){return vl(e,n)}var js=null,za=null,ro=!1,Ks=!1,oo=!1,At=0;function Bn(e){e!==za&&e.next===null&&(za===null?js=za=e:za=za.next=e),Ks=!0,ro||(ro=!0,Rm())}function ki(e,n){if(!oo&&Ks){oo=!0;do for(var t=!1,a=js;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var c=a.suspendedLanes,p=a.pingedLanes;s=(1<<31-cn(42|e)+1)-1,s&=i&~(c&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,vh(a,s))}else s=te,s=Fi(a,a===ve?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||_a(a,s)||(t=!0,vh(a,s));a=a.next}while(t);oo=!1}}function xm(){gh()}function gh(){Ks=ro=!1;var e=0;At!==0&&Bm()&&(e=At);for(var n=rn(),t=null,a=js;a!==null;){var i=a.next,s=yh(a,n);s===0?(a.next=null,t===null?js=i:t.next=i,i===null&&(za=t)):(t=a,(e!==0||(s&3)!==0)&&(Ks=!0)),a=i}He!==0&&He!==5||ki(e),At!==0&&(At=0)}function yh(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-cn(s),p=1<<c,y=i[c];y===-1?((p&t)===0||(p&a)!==0)&&(i[c]=ef(p,n)):y<=n&&(e.expiredLanes|=p),s&=~p}if(n=ve,t=te,t=Fi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(he===2||he===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Pl(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||_a(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Pl(a),bl(t)){case 2:case 8:t=rc;break;case 32:t=Ki;break;case 268435456:t=oc;break;default:t=Ki}return a=Th.bind(null,e),t=vl(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Pl(a),e.callbackPriority=2,e.callbackNode=null,2}function Th(e,n){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ws()&&e.callbackNode!==t)return null;var a=te;return a=Fi(e,e===ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:($d(e,a,n),yh(e,rn()),e.callbackNode!=null&&e.callbackNode===t?Th.bind(null,e):null)}function vh(e,n){if(Ws())return null;$d(e,n,!0)}function Rm(){jm(function(){(ce&6)!==0?vl(lc,xm):gh()})}function co(){if(At===0){var e=Sa;e===0&&(e=Zi,Zi<<=1,(Zi&261888)===0&&(Zi=256)),At=e}return At}function Ph(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xi(""+e)}function Sh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Dm(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var s=Ph((i[$e]||null).action),c=a.submitter;c&&(n=(n=c[$e]||null)?Ph(n.formAction):c.getAttribute("formAction"),n!==null&&(s=n,c=null));var p=new es("action","action",null,a,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(At!==0){var y=c?Sh(i,c):new FormData(i);Rr(t,{pending:!0,data:y,method:i.method,action:s},null,y)}}else typeof s=="function"&&(p.preventDefault(),y=c?Sh(i,c):new FormData(i),Rr(t,{pending:!0,data:y,method:i.method,action:s},s,y))},currentTarget:i}]})}}for(var uo=0;uo<Fl.length;uo++){var ho=Fl[uo],Em=ho.toLowerCase(),Im=ho[0].toUpperCase()+ho.slice(1);Rn(Em,"on"+Im)}Rn(Jc,"onAnimationEnd"),Rn($c,"onAnimationIteration"),Rn(eu,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Yf,"onTransitionRun"),Rn(Gf,"onTransitionStart"),Rn(Xf,"onTransitionCancel"),Rn(nu,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));function Ch(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var c=a.length-1;0<=c;c--){var p=a[c],y=p.instance,b=p.currentTarget;if(p=p.listener,y!==s&&i.isPropagationStopped())break e;s=p,i.currentTarget=b;try{s(i)}catch(N){as(N)}i.currentTarget=null,s=y}else for(c=0;c<a.length;c++){if(p=a[c],y=p.instance,b=p.currentTarget,p=p.listener,y!==s&&i.isPropagationStopped())break e;s=p,i.currentTarget=b;try{s(i)}catch(N){as(N)}i.currentTarget=null,s=y}}}}function ne(e,n){var t=n[wl];t===void 0&&(t=n[wl]=new Set);var a=e+"__bubble";t.has(a)||(bh(n,e,2,!1),t.add(a))}function po(e,n,t){var a=0;n&&(a|=4),bh(t,e,a,n)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[Zs]){e[Zs]=!0,gc.forEach(function(t){t!=="selectionchange"&&(Mm.has(t)||po(t,!1,e),po(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zs]||(n[Zs]=!0,po("selectionchange",!1,n))}}function bh(e,n,t,a){switch(Jh(n)){case 2:var i=rg;break;case 8:i=og;break;default:i=Ro}t=i.bind(null,n,t,e),i=void 0,!Ml||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function mo(e,n,t,a,i){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var p=a.stateNode.containerInfo;if(p===i)break;if(c===4)for(c=a.return;c!==null;){var y=c.tag;if((y===3||y===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;p!==null;){if(c=ia(p),c===null)return;if(y=c.tag,y===5||y===6||y===26||y===27){a=s=c;continue e}p=p.parentNode}}a=a.return}xc(function(){var b=s,N=El(t),E=[];e:{var w=tu.get(e);if(w!==void 0){var k=es,O=e;switch(e){case"keypress":if(Ji(t)===0)break e;case"keydown":case"keyup":k=Af;break;case"focusin":O="focus",k=Ol;break;case"focusout":O="blur",k=Ol;break;case"beforeblur":case"afterblur":k=Ol;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Rf;break;case Jc:case $c:case eu:k=yf;break;case nu:k=Ef;break;case"scroll":case"scrollend":k=hf;break;case"wheel":k=Mf;break;case"copy":case"cut":case"paste":k=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Mc;break;case"toggle":case"beforetoggle":k=Hf}var _=(n&4)!==0,ye=!_&&(e==="scroll"||e==="scrollend"),S=_?w!==null?w+"Capture":null:w;_=[];for(var v=b,C;v!==null;){var D=v;if(C=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||C===null||S===null||(D=Ya(v,S),D!=null&&_.push(Ni(v,D,C))),ye)break;v=v.return}0<_.length&&(w=new k(w,O,null,t,N),E.push({event:w,listeners:_}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",w&&t!==Dl&&(O=t.relatedTarget||t.fromElement)&&(ia(O)||O[aa]))break e;if((k||w)&&(w=N.window===N?N:(w=N.ownerDocument)?w.defaultView||w.parentWindow:window,k?(O=t.relatedTarget||t.toElement,k=b,O=O?ia(O):null,O!==null&&(ye=m(O),_=O.tag,O!==ye||_!==5&&_!==27&&_!==6)&&(O=null)):(k=null,O=b),k!==O)){if(_=Ec,D="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=Mc,D="onPointerLeave",S="onPointerEnter",v="pointer"),ye=k==null?w:Qa(k),C=O==null?w:Qa(O),w=new _(D,v+"leave",k,t,N),w.target=ye,w.relatedTarget=C,D=null,ia(N)===b&&(_=new _(S,v+"enter",O,t,N),_.target=C,_.relatedTarget=ye,D=_),ye=D,k&&O)n:{for(_=Um,S=k,v=O,C=0,D=S;D;D=_(D))C++;D=0;for(var W=v;W;W=_(W))D++;for(;0<C-D;)S=_(S),C--;for(;0<D-C;)v=_(v),D--;for(;C--;){if(S===v||v!==null&&S===v.alternate){_=S;break n}S=_(S),v=_(v)}_=null}else _=null;k!==null&&wh(E,w,k,_,!1),O!==null&&ye!==null&&wh(E,ye,O,_,!0)}}e:{if(w=b?Qa(b):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var re=jc;else if(Bc(w))if(Kc)re=qf;else{re=Zf;var B=Kf}else k=w.nodeName,!k||k.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?b&&Rl(b.elementType)&&(re=jc):re=_f;if(re&&(re=re(e,b))){Wc(E,re,t,N);break e}B&&B(e,w,b),e==="focusout"&&b&&w.type==="number"&&b.memoizedProps.value!=null&&xl(w,"number",w.value)}switch(B=b?Qa(b):window,e){case"focusin":(Bc(B)||B.contentEditable==="true")&&(pa=B,Zl=b,ti=null);break;case"focusout":ti=Zl=pa=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Xc(E,t,N);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Xc(E,t,N)}var V;if(Bl)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else ha?Oc(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(Uc&&t.locale!=="ko"&&(ha||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ha&&(V=Rc()):(ut=N,Ul="value"in ut?ut.value:ut.textContent,ha=!0)),B=_s(b,ae),0<B.length&&(ae=new Ic(ae,e,null,t,N),E.push({event:ae,listeners:B}),V?ae.data=V:(V=Lc(t),V!==null&&(ae.data=V)))),(V=Of?Lf(e,t):Bf(e,t))&&(ae=_s(b,"onBeforeInput"),0<ae.length&&(B=new Ic("onBeforeInput","beforeinput",null,t,N),E.push({event:B,listeners:ae}),B.data=V)),Dm(E,e,b,t,N)}Ch(E,n)})}function Ni(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _s(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Ya(e,t),i!=null&&a.unshift(Ni(e,i,s)),i=Ya(e,n),i!=null&&a.push(Ni(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Um(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wh(e,n,t,a,i){for(var s=n._reactName,c=[];t!==null&&t!==a;){var p=t,y=p.alternate,b=p.stateNode;if(p=p.tag,y!==null&&y===a)break;p!==5&&p!==26&&p!==27||b===null||(y=b,i?(b=Ya(t,s),b!=null&&c.unshift(Ni(t,b,y))):i||(b=Ya(t,s),b!=null&&c.push(Ni(t,b,y)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Hm=/\r\n?/g,zm=/\u0000|\uFFFD/g;function kh(e){return(typeof e=="string"?e:""+e).replace(Hm,`
`).replace(zm,"")}function Ah(e,n){return n=kh(n),kh(e)===n}function ge(e,n,t,a,i,s){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ca(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ca(e,""+a);break;case"className":Yi(e,"class",a);break;case"tabIndex":Yi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,t,a);break;case"style":Ac(e,a,s);break;case"data":if(n!=="object"){Yi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Xi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&ge(e,n,"name",i.name,i,null),ge(e,n,"formEncType",i.formEncType,i,null),ge(e,n,"formMethod",i.formMethod,i,null),ge(e,n,"formTarget",i.formTarget,i,null)):(ge(e,n,"encType",i.encType,i,null),ge(e,n,"method",i.method,i,null),ge(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Xi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=_n);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Xi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qi(e,"popover",a);break;case"xlinkActuate":Zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=uf.get(t)||t,Qi(e,t,a))}}function go(e,n,t,a,i,s){switch(t){case"style":Ac(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ca(e,a):(typeof a=="number"||typeof a=="bigint")&&ca(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_n);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),s=e[$e]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Qi(e,t,a)}}}function _e(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,i=!1,s;for(s in t)if(t.hasOwnProperty(s)){var c=t[s];if(c!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ge(e,n,s,c,t,null)}}i&&ge(e,n,"srcSet",t.srcSet,t,null),a&&ge(e,n,"src",t.src,t,null);return;case"input":ne("invalid",e);var p=s=c=i=null,y=null,b=null;for(a in t)if(t.hasOwnProperty(a)){var N=t[a];if(N!=null)switch(a){case"name":i=N;break;case"type":c=N;break;case"checked":y=N;break;case"defaultChecked":b=N;break;case"value":s=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:ge(e,n,a,N,t,null)}}Cc(e,s,p,y,b,c,i,!1);return;case"select":ne("invalid",e),a=c=s=null;for(i in t)if(t.hasOwnProperty(i)&&(p=t[i],p!=null))switch(i){case"value":s=p;break;case"defaultValue":c=p;break;case"multiple":a=p;default:ge(e,n,i,p,t,null)}n=s,t=c,e.multiple=!!a,n!=null?oa(e,!!a,n,!1):t!=null&&oa(e,!!a,t,!0);return;case"textarea":ne("invalid",e),s=i=a=null;for(c in t)if(t.hasOwnProperty(c)&&(p=t[c],p!=null))switch(c){case"value":a=p;break;case"defaultValue":i=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:ge(e,n,c,p,t,null)}wc(e,a,i,s);return;case"option":for(y in t)t.hasOwnProperty(y)&&(a=t[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ge(e,n,y,a,t,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<Ai.length;a++)ne(Ai[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in t)if(t.hasOwnProperty(b)&&(a=t[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ge(e,n,b,a,t,null)}return;default:if(Rl(n)){for(N in t)t.hasOwnProperty(N)&&(a=t[N],a!==void 0&&go(e,n,N,a,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(a=t[p],a!=null&&ge(e,n,p,a,t,null))}function Om(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,c=null,p=null,y=null,b=null,N=null;for(k in t){var E=t[k];if(t.hasOwnProperty(k)&&E!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":y=E;default:a.hasOwnProperty(k)||ge(e,n,k,null,a,E)}}for(var w in a){var k=a[w];if(E=t[w],a.hasOwnProperty(w)&&(k!=null||E!=null))switch(w){case"type":s=k;break;case"name":i=k;break;case"checked":b=k;break;case"defaultChecked":N=k;break;case"value":c=k;break;case"defaultValue":p=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,n));break;default:k!==E&&ge(e,n,w,k,a,E)}}Nl(e,c,p,y,b,N,s,i);return;case"select":k=c=p=w=null;for(s in t)if(y=t[s],t.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":k=y;default:a.hasOwnProperty(s)||ge(e,n,s,null,a,y)}for(i in a)if(s=a[i],y=t[i],a.hasOwnProperty(i)&&(s!=null||y!=null))switch(i){case"value":w=s;break;case"defaultValue":p=s;break;case"multiple":c=s;default:s!==y&&ge(e,n,i,s,a,y)}n=p,t=c,a=k,w!=null?oa(e,!!t,w,!1):!!a!=!!t&&(n!=null?oa(e,!!t,n,!0):oa(e,!!t,t?[]:"",!1));return;case"textarea":k=w=null;for(p in t)if(i=t[p],t.hasOwnProperty(p)&&i!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:ge(e,n,p,null,a,i)}for(c in a)if(i=a[c],s=t[c],a.hasOwnProperty(c)&&(i!=null||s!=null))switch(c){case"value":w=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(r(91));break;default:i!==s&&ge(e,n,c,i,a,s)}bc(e,w,k);return;case"option":for(var O in t)w=t[O],t.hasOwnProperty(O)&&w!=null&&!a.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:ge(e,n,O,null,a,w));for(y in a)w=a[y],k=t[y],a.hasOwnProperty(y)&&w!==k&&(w!=null||k!=null)&&(y==="selected"?e.selected=w&&typeof w!="function"&&typeof w!="symbol":ge(e,n,y,w,a,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in t)w=t[_],t.hasOwnProperty(_)&&w!=null&&!a.hasOwnProperty(_)&&ge(e,n,_,null,a,w);for(b in a)if(w=a[b],k=t[b],a.hasOwnProperty(b)&&w!==k&&(w!=null||k!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,n));break;default:ge(e,n,b,w,a,k)}return;default:if(Rl(n)){for(var ye in t)w=t[ye],t.hasOwnProperty(ye)&&w!==void 0&&!a.hasOwnProperty(ye)&&go(e,n,ye,void 0,a,w);for(N in a)w=a[N],k=t[N],!a.hasOwnProperty(N)||w===k||w===void 0&&k===void 0||go(e,n,N,w,a,k);return}}for(var S in t)w=t[S],t.hasOwnProperty(S)&&w!=null&&!a.hasOwnProperty(S)&&ge(e,n,S,null,a,w);for(E in a)w=a[E],k=t[E],!a.hasOwnProperty(E)||w===k||w==null&&k==null||ge(e,n,E,w,a,k)}function Nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],s=i.transferSize,c=i.initiatorType,p=i.duration;if(s&&p&&Nh(c)){for(c=0,p=i.responseEnd,a+=1;a<t.length;a++){var y=t[a],b=y.startTime;if(b>p)break;var N=y.transferSize,E=y.initiatorType;N&&Nh(E)&&(y=y.responseEnd,c+=N*(y<p?1:(p-b)/(y-b)))}if(--a,n+=8*(s+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yo=null,To=null;function qs(e){return e.nodeType===9?e:e.ownerDocument}function xh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Po=null;function Bm(){var e=window.event;return e&&e.type==="popstate"?e===Po?!1:(Po=e,!0):(Po=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(e){return Eh.resolve(null).then(e).catch(Km)}:Dh;function Km(e){setTimeout(function(){throw e})}function Nt(e){return e==="head"}function Ih(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),Wa(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")xi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,xi(t);for(var s=t.firstChild;s;){var c=s.nextSibling,p=s.nodeName;s[Fa]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=c}}else t==="body"&&xi(e.ownerDocument.body);t=i}while(t);Wa(n)}function Mh(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function So(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":So(t),kl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Zm(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=kn(e.nextSibling),e===null)break}return null}function _m(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kn(e.nextSibling),e===null))return null;return e}function Uh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kn(e.nextSibling),e===null))return null;return e}function Co(e){return e.data==="$?"||e.data==="$~"}function bo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qm(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wo=null;function Hh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return kn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function zh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Oh(e,n,t){switch(n=qs(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);kl(e)}var An=new Map,Lh=new Set;function Fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var lt=H.d;H.d={f:Fm,r:Qm,D:Ym,C:Gm,L:Xm,m:Vm,X:$m,S:Jm,M:eg};function Fm(){var e=lt.f(),n=Os();return e||n}function Qm(e){var n=sa(e);n!==null&&n.tag===5&&n.type==="form"?nd(n):lt.r(e)}var Oa=typeof document>"u"?null:document;function Bh(e,n,t){var a=Oa;if(a&&typeof n=="string"&&n){var i=Tn(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Lh.has(i)||(Lh.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),_e(n,"link",e),Oe(n),a.head.appendChild(n)))}}function Ym(e){lt.D(e),Bh("dns-prefetch",e,null)}function Gm(e,n){lt.C(e,n),Bh("preconnect",e,n)}function Xm(e,n,t){lt.L(e,n,t);var a=Oa;if(a&&e&&n){var i='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Tn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Tn(t.imageSizes)+'"]')):i+='[href="'+Tn(e)+'"]';var s=i;switch(n){case"style":s=La(e);break;case"script":s=Ba(e)}An.has(s)||(e=M({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),An.set(s,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(Ri(s))||n==="script"&&a.querySelector(Di(s))||(n=a.createElement("link"),_e(n,"link",e),Oe(n),a.head.appendChild(n)))}}function Vm(e,n){lt.m(e,n);var t=Oa;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+Tn(a)+'"][href="'+Tn(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ba(e)}if(!An.has(s)&&(e=M({rel:"modulepreload",href:e},n),An.set(s,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Di(s)))return}a=t.createElement("link"),_e(a,"link",e),Oe(a),t.head.appendChild(a)}}}function Jm(e,n,t){lt.S(e,n,t);var a=Oa;if(a&&e){var i=la(a).hoistableStyles,s=La(e);n=n||"default";var c=i.get(s);if(!c){var p={loading:0,preload:null};if(c=a.querySelector(Ri(s)))p.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},t),(t=An.get(s))&&ko(e,t);var y=c=a.createElement("link");Oe(y),_e(y,"link",e),y._p=new Promise(function(b,N){y.onload=b,y.onerror=N}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Qs(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:p},i.set(s,c)}}}function $m(e,n){lt.X(e,n);var t=Oa;if(t&&e){var a=la(t).hoistableScripts,i=Ba(e),s=a.get(i);s||(s=t.querySelector(Di(i)),s||(e=M({src:e,async:!0},n),(n=An.get(i))&&Ao(e,n),s=t.createElement("script"),Oe(s),_e(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function eg(e,n){lt.M(e,n);var t=Oa;if(t&&e){var a=la(t).hoistableScripts,i=Ba(e),s=a.get(i);s||(s=t.querySelector(Di(i)),s||(e=M({src:e,async:!0,type:"module"},n),(n=An.get(i))&&Ao(e,n),s=t.createElement("script"),Oe(s),_e(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Wh(e,n,t,a){var i=(i=$.current)?Fs(i):null;if(!i)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=La(t.href),t=la(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=La(t.href);var s=la(i).hoistableStyles,c=s.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=i.querySelector(Ri(e)))&&!s._p&&(c.instance=s,c.state.loading=5),An.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},An.set(e,t),s||ng(i,e,t,c.state))),n&&a===null)throw Error(r(528,""));return c}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ba(t),t=la(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function La(e){return'href="'+Tn(e)+'"'}function Ri(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function ng(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),_e(n,"link",t),Oe(n),e.head.appendChild(n))}function Ba(e){return'[src="'+Tn(e)+'"]'}function Di(e){return"script[async]"+e}function Kh(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Tn(t.href)+'"]');if(a)return n.instance=a,Oe(a),a;var i=M({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Oe(a),_e(a,"style",i),Qs(a,t.precedence,e),n.instance=a;case"stylesheet":i=La(t.href);var s=e.querySelector(Ri(i));if(s)return n.state.loading|=4,n.instance=s,Oe(s),s;a=jh(t),(i=An.get(i))&&ko(a,i),s=(e.ownerDocument||e).createElement("link"),Oe(s);var c=s;return c._p=new Promise(function(p,y){c.onload=p,c.onerror=y}),_e(s,"link",a),n.state.loading|=4,Qs(s,t.precedence,e),n.instance=s;case"script":return s=Ba(t.src),(i=e.querySelector(Di(s)))?(n.instance=i,Oe(i),i):(a=t,(i=An.get(s))&&(a=M({},t),Ao(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Oe(i),_e(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Qs(a,t.precedence,e));return n.instance}function Qs(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,c=0;c<a.length;c++){var p=a[c];if(p.dataset.precedence===n)s=p;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ko(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ao(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ys=null;function Zh(e,n,t){if(Ys===null){var a=new Map,i=Ys=new Map;i.set(t,a)}else i=Ys,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var s=t[i];if(!(s[Fa]||s[We]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(n)||"";c=e+c;var p=a.get(c);p?p.push(s):a.set(c,[s])}}return a}function _h(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function tg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ag(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=La(a.href),s=n.querySelector(Ri(i));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Gs.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,Oe(s);return}s=n.ownerDocument||n,a=jh(a),(i=An.get(i))&&ko(a,i),s=s.createElement("link"),Oe(s);var c=s;c._p=new Promise(function(p,y){c.onload=p,c.onerror=y}),_e(s,"link",a),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Gs.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var No=0;function ig(e,n){return e.stylesheets&&e.count===0&&Vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&No===0&&(No=62500*Lm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>No?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xs=null;function Vs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xs=new Map,n.forEach(sg,e),Xs=null,Gs.call(e))}function sg(e,n){if(!(n.state.loading&4)){var t=Xs.get(e);if(t)var a=t.get(null);else{t=new Map,Xs.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var c=i[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}i=n.instance,c=i.getAttribute("data-precedence"),s=t.get(c)||a,s===a&&t.set(null,i),t.set(c,i),this.count++,a=Gs.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var Ei={$$typeof:ze,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function lg(e,n,t,a,i,s,c,p,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.hiddenUpdates=Sl(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Fh(e,n,t,a,i,s,c,p,y,b,N,E){return e=new lg(e,n,t,c,y,b,N,E,p),n=1,s===!0&&(n|=24),s=dn(3,null,null,n),e.current=s,s.stateNode=e,n=sr(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:a,isDehydrated:t,cache:n},cr(s),e}function Qh(e){return e?(e=ga,e):ga}function Yh(e,n,t,a,i,s){i=Qh(i),a.context===null?a.context=i:a.pendingContext=i,a=gt(n),a.payload={element:t},s=s===void 0?null:s,s!==null&&(a.callback=s),t=yt(e,a,n),t!==null&&(ln(t,e,n),ci(t,e,n))}function Gh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xo(e,n){Gh(e,n),(e=e.alternate)&&Gh(e,n)}function Xh(e){if(e.tag===13||e.tag===31){var n=Wt(e,67108864);n!==null&&ln(n,e,67108864),xo(e,67108864)}}function Vh(e){if(e.tag===13||e.tag===31){var n=gn();n=Cl(n);var t=Wt(e,n);t!==null&&ln(t,e,n),xo(e,n)}}var Js=!0;function rg(e,n,t,a){var i=x.T;x.T=null;var s=H.p;try{H.p=2,Ro(e,n,t,a)}finally{H.p=s,x.T=i}}function og(e,n,t,a){var i=x.T;x.T=null;var s=H.p;try{H.p=8,Ro(e,n,t,a)}finally{H.p=s,x.T=i}}function Ro(e,n,t,a){if(Js){var i=Do(a);if(i===null)mo(e,n,a,$s,t),$h(e,a);else if(ug(i,e,n,t,a))a.stopPropagation();else if($h(e,a),n&4&&-1<cg.indexOf(e)){for(;i!==null;){var s=sa(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Ht(s.pendingLanes);if(c!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;c;){var y=1<<31-cn(c);p.entanglements[1]|=y,c&=~y}Bn(s),(ce&6)===0&&(Hs=rn()+500,ki(0))}}break;case 31:case 13:p=Wt(s,2),p!==null&&ln(p,s,2),Os(),xo(s,2)}if(s=Do(a),s===null&&mo(e,n,a,$s,t),s===i)break;i=s}i!==null&&a.stopPropagation()}else mo(e,n,a,null,t)}}function Do(e){return e=El(e),Eo(e)}var $s=null;function Eo(e){if($s=null,e=ia(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=f(n),e!==null)return e;e=null}else if(t===31){if(e=A(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $s=e,null}function Jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qp()){case lc:return 2;case rc:return 8;case Ki:case Yp:return 32;case oc:return 268435456;default:return 32}default:return 32}}var Io=!1,xt=null,Rt=null,Dt=null,Ii=new Map,Mi=new Map,Et=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(e,n){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Ii.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(n.pointerId)}}function Ui(e,n,t,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},n!==null&&(n=sa(n),n!==null&&Xh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ug(e,n,t,a,i){switch(n){case"focusin":return xt=Ui(xt,e,n,t,a,i),!0;case"dragenter":return Rt=Ui(Rt,e,n,t,a,i),!0;case"mouseover":return Dt=Ui(Dt,e,n,t,a,i),!0;case"pointerover":var s=i.pointerId;return Ii.set(s,Ui(Ii.get(s)||null,e,n,t,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Mi.set(s,Ui(Mi.get(s)||null,e,n,t,a,i)),!0}return!1}function ep(e){var n=ia(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=f(t),n!==null){e.blockedOn=n,fc(e.priority,function(){Vh(t)});return}}else if(n===31){if(n=A(t),n!==null){e.blockedOn=n,fc(e.priority,function(){Vh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function el(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Do(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Dl=a,t.target.dispatchEvent(a),Dl=null}else return n=sa(t),n!==null&&Xh(n),e.blockedOn=t,!1;n.shift()}return!0}function np(e,n,t){el(e)&&t.delete(n)}function dg(){Io=!1,xt!==null&&el(xt)&&(xt=null),Rt!==null&&el(Rt)&&(Rt=null),Dt!==null&&el(Dt)&&(Dt=null),Ii.forEach(np),Mi.forEach(np)}function nl(e,n){e.blockedOn===n&&(e.blockedOn=null,Io||(Io=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dg)))}var tl=null;function tp(e){tl!==e&&(tl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tl===e&&(tl=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(Eo(a||t)===null)continue;break}var s=sa(t);s!==null&&(e.splice(n,3),n-=3,Rr(s,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Wa(e){function n(y){return nl(y,e)}xt!==null&&nl(xt,e),Rt!==null&&nl(Rt,e),Dt!==null&&nl(Dt,e),Ii.forEach(n),Mi.forEach(n);for(var t=0;t<Et.length;t++){var a=Et[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Et.length&&(t=Et[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Et.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],s=t[a+1],c=i[$e]||null;if(typeof s=="function")c||tp(t);else if(c){var p=null;if(s&&s.hasAttribute("formAction")){if(i=s,c=s[$e]||null)p=c.formAction;else if(Eo(i)!==null)continue}else p=c.action;typeof p=="function"?t[a+1]=p:(t.splice(a,3),a-=3),tp(t)}}}function ap(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function Mo(e){this._internalRoot=e}al.prototype.render=Mo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=gn();Yh(t,a,e,n,null,null)},al.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yh(e.current,2,null,e,null,null),Os(),n[aa]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var n=pc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Et.length&&n!==0&&n<Et[t].priority;t++);Et.splice(t,0,e),t===0&&ep(e)}};var ip=l.version;if(ip!=="19.2.7")throw Error(r(527,ip,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=T(n),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var hg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Za=il.inject(hg),on=il}catch{}}return zi.createRoot=function(e,n){if(!h(e))throw Error(r(299));var t=!1,a="",i=dd,s=hd,c=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=Fh(e,1,!1,null,null,t,a,null,i,s,c,ap),e[aa]=n.current,fo(e),new Mo(n)},zi.hydrateRoot=function(e,n,t){if(!h(e))throw Error(r(299));var a=!1,i="",s=dd,c=hd,p=pd,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(y=t.formState)),n=Fh(e,1,!0,n,t??null,a,i,y,s,c,p,ap),n.context=Qh(null),t=n.current,a=gn(),a=Cl(a),i=gt(a),i.callback=null,yt(t,i,a),t=a,n.current.lanes=t,qa(n,t),Bn(n),e[aa]=n.current,fo(e),new al(n)},zi.version="19.2.7",zi}var fp;function wg(){if(fp)return zo.exports;fp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),zo.exports=bg(),zo.exports}var kg=wg();const Ag=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ng=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,r)=>r?r.toUpperCase():u.toLowerCase()),mp=o=>{const l=Ng(o);return l.charAt(0).toUpperCase()+l.slice(1)},bp=(...o)=>o.filter((l,u,r)=>!!l&&l.trim()!==""&&r.indexOf(l)===u).join(" ").trim(),xg=o=>{for(const l in o)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};var Rg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Dg=Q.forwardRef(({color:o="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:r,className:h="",children:m,iconNode:f,...A},g)=>Q.createElement("svg",{ref:g,...Rg,width:l,height:l,stroke:o,strokeWidth:r?Number(u)*24/Number(l):u,className:bp("lucide",h),...!m&&!xg(A)&&{"aria-hidden":"true"},...A},[...f.map(([T,R])=>Q.createElement(T,R)),...Array.isArray(m)?m:[m]]));const Nn=(o,l)=>{const u=Q.forwardRef(({className:r,...h},m)=>Q.createElement(Dg,{ref:m,iconNode:l,className:bp(`lucide-${Ag(mp(o))}`,`lucide-${o}`,r),...h}));return u.displayName=mp(o),u};const Eg=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],Qo=Nn("beaker",Eg);const Ig=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Mg=Nn("book-open",Ig);const Ug=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Hg=Nn("bookmark",Ug);const zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],rl=Nn("circle-check",zg);const Og=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],wp=Nn("git-branch",Og);const Lg=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Yo=Nn("list-checks",Lg);const Bg=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Wg=Nn("map",Bg);const jg=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],dl=Nn("scroll-text",jg);const Kg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zg=Nn("search",Kg);const _g=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],qg=Nn("star",_g);const Fg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],kp=Nn("target",Fg);const Qg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ap=Nn("triangle-alert",Qg),Yg=`# WK1-OS-Overview

## 课件概述
本课件是计算机系统课程的开篇，介绍了操作系统的基本概念、核心功能和工作原理。课件从操作系统与硬件、应用程序的关系入手，详细讲解了硬件抽象、资源管理、计算机体系结构基础、内存管理、指令执行、子程序调用、栈机制、内存边界保护、执行模式、中断处理和系统调用等核心概念。这些内容为后续学习进程管理、内存管理、文件系统等奠定了坚实基础。

## 必须掌握的知识点

### 1. What is an Operating System? (什么是操作系统)

#### What（是什么）
操作系统（Operating System, OS）是管理计算机硬件资源并为应用程序提供服务的系统软件。它是用户与硬件之间的中介层，负责协调和控制计算机系统的各种活动。

**核心定义**：
- 操作系统是一个程序，它在硬件和应用程序之间提供接口
- 其主要任务是确保其他程序能够高效运行
- 操作系统提供硬件抽象和资源管理两大核心功能

**系统层次结构**：
\`\`\`
用户 (User)
    ↓
应用程序 (Application)
    ↓
操作系统 (Operating System)
    ↓
硬件 (Hardware)
\`\`\`

![操作系统层次结构图](./images/WK1-OS-Overview.png)

#### Why（为什么重要）
操作系统的重要性体现在以下几个方面：

1. **简化编程**：程序员无需直接操作硬件，通过操作系统提供的接口即可完成文件操作、网络通信等任务
2. **资源管理**：多个程序同时运行时，操作系统负责公平、高效地分配CPU时间、内存空间和I/O设备
3. **系统保护**：防止应用程序相互干扰，保护操作系统自身不被破坏
4. **抽象层**：将复杂的硬件细节隐藏，提供统一的、简洁的编程接口

**实际例子**：
- 当你在Python中调用\`open()\`函数时，操作系统负责将这个调用转换为实际的磁盘操作
- 当多个程序同时运行时，操作系统决定哪个程序使用CPU，使用多长时间

#### How（如何工作/实现）
操作系统通过以下机制实现其功能：

1. **硬件抽象层**：
   - 提供进程（Process）、线程（Thread）、地址空间（Address Space）、文件（File）、套接字（Socket）等抽象概念
   - 将复杂的硬件操作封装成简单的API

2. **资源管理机制**：
   - 进程调度：决定哪个进程使用CPU
   - 内存管理：分配和回收内存空间
   - I/O管理：协调设备访问

3. **保护机制**：
   - 用户模式和内核模式的区分
   - 内存边界保护
   - 特权指令限制

#### 关键术语
- **Operating System (OS)**：操作系统，管理硬件资源的系统软件
- **Hardware Abstraction**：硬件抽象，隐藏硬件复杂性
- **Resource Management**：资源管理，协调资源分配

#### 常见问题
- **Q：操作系统和应用程序有什么区别？**
  A：操作系统管理硬件资源，为应用程序提供服务；应用程序使用操作系统提供的接口完成特定任务。

- **Q：常见的操作系统有哪些？**
  A：Windows、Linux、macOS、Android、iOS等。

---

### 2. Hardware Abstraction (硬件抽象)

#### What（是什么）
硬件抽象是操作系统的核心功能之一，它将复杂的硬件细节隐藏起来，为应用程序提供简洁、统一的编程接口。

**两个主要目标**：
1. **简化计算机模型**：呈现一个更简单、更清晰、易于使用的计算机模型
2. **专用抽象机器**：为每个应用程序提供一个看似专属于自己的抽象机器

**抽象层次**：
\`\`\`
应用程序看到的抽象：
- 进程 (Process)：运行中的程序
- 线程 (Thread)：进程中的执行单元
- 地址空间 (Address Space)：程序的内存视图
- 文件 (File)：数据的逻辑组织
- 套接字 (Socket)：网络通信端点

实际硬件：
- 处理器 (Processor)
- 内存 (Memory)
- 磁盘 (Disk)
- 键盘 (Keyboard)
- 显示器 (Display)
- 网络接口 (Network Interfaces)
\`\`\`

#### Why（为什么重要）
硬件抽象的重要性：

1. **可移植性**：应用程序可以在不同硬件平台上运行，无需修改代码
2. **简化开发**：程序员无需了解硬件细节，专注于业务逻辑
3. **资源隔离**：每个程序都认为自己独占硬件资源
4. **安全性**：防止应用程序直接操作硬件造成系统崩溃

**实际例子**：
- 文件系统抽象：程序员只需知道文件名和路径，无需知道数据在磁盘上的具体存储位置
- 网络抽象：程序员只需使用socket API，无需了解网络协议的具体实现

#### How（如何工作/实现）
硬件抽象的实现机制：

1. **系统调用接口**：
   - 提供统一的API（如POSIX标准）
   - 将高级操作转换为低级硬件操作

2. **设备驱动程序**：
   - 为每种硬件设备提供驱动
   - 将通用操作转换为设备特定操作

3. **虚拟化技术**：
   - 虚拟内存：每个程序有自己的地址空间
   - 虚拟处理器：通过时间片轮转实现多任务

#### 关键术语
- **Process**：进程，运行中的程序实例
- **Thread**：线程，进程中的执行单元
- **Address Space**：地址空间，程序可访问的内存范围
- **Socket**：套接字，网络通信端点

#### 常见问题
- **Q：硬件抽象会降低性能吗？**
  A：会有轻微开销，但带来的好处（可移植性、安全性、易用性）远大于性能损失。

- **Q：如何查看系统中的进程？**
  A：Mac/Linux使用\`ps aux\`命令，Windows使用\`tasklist\`命令。

---

### 3. Resource Management (资源管理)

#### What（是什么）
资源管理是操作系统的另一核心功能，负责在多个竞争的进程之间有序、受控地分配处理器、内存和I/O设备。

**管理的资源类型**：
1. **处理器 (Processor)**：CPU时间分配
2. **内存 (Memory)**：内存空间分配
3. **I/O设备**：磁盘、键盘、显示器、网络接口等

**资源分配原则**：
- 有序性：按照某种策略（如优先级、先来先服务）分配
- 受控性：防止资源被某个进程独占
- 公平性：确保所有进程都能获得所需资源

![资源管理层次图](./images/WK1-Resource-Management.png)

#### Why（为什么重要）
资源管理的重要性：

1. **并发支持**：多个程序同时运行，需要合理分配资源
2. **效率优化**：最大化资源利用率，减少空闲时间
3. **防止冲突**：避免多个进程同时访问同一资源造成冲突
4. **系统稳定**：防止某个进程耗尽资源导致系统崩溃

**实际例子**：
- 当你同时打开浏览器、音乐播放器和文档编辑器时，操作系统需要分配CPU时间给每个程序
- 当多个程序需要使用内存时，操作系统需要决定每个程序使用多少内存

#### How（如何工作/实现）
资源管理的实现机制：

1. **进程调度**：
   - 使用调度算法（如轮转调度、优先级调度）
   - 决定哪个进程使用CPU，使用多长时间

2. **内存管理**：
   - 分配和回收内存空间
   - 使用虚拟内存技术扩展可用内存

3. **I/O管理**：
   - 设备分配和回收
   - I/O请求的排队和调度

4. **死锁处理**：
   - 检测和预防死锁
   - 资源分配图的维护

#### 关键术语
- **Resource Allocation**：资源分配
- **Process Scheduling**：进程调度
- **Deadlock**：死锁，多个进程相互等待对方释放资源

#### 常见问题
- **Q：如何查看系统资源使用情况？**
  A：Mac/Linux使用\`top\`或\`htop\`命令，Windows使用任务管理器。

- **Q：什么是资源饥饿？**
  A：某个进程长时间无法获得所需资源，导致无法继续执行。

---

### 4. Computer Architecture Background (计算机体系结构背景)

#### What（是什么）
计算机体系结构是理解操作系统工作原理的基础。课件将计算机硬件简化为两个主要组件：内存和CPU。

**内存 (Memory)**：
- 存储程序和数据的地方
- 内存层次结构：寄存器 → 缓存 → 主存 → 磁盘

**CPU (Central Processing Unit)**：
- 执行实际计算的组件
- 包含以下子组件：
  - **寄存器 (Registers)**：最快的存储，用于存储数据和地址
    - 通用寄存器：存储数据（如int、float）和内存地址
    - 特殊寄存器：特定控制功能
  - **ALU (Arithmetic Logic Unit)**：算术逻辑单元，执行数学和逻辑运算
  - **MMU (Memory Management Unit)**：内存管理单元，处理内存访问

![计算机体系结构图](./images/WK1-Computer-Architecture.png)

**简化视图**：
- 1个CPU，1个核心
- 每个周期执行一条指令

#### Why（为什么重要）
理解计算机体系结构的重要性：

1. **性能优化**：了解硬件特性可以编写更高效的程序
2. **问题诊断**：理解硬件工作原理有助于定位性能瓶颈
3. **系统设计**：操作系统设计需要充分利用硬件特性
4. **并发理解**：理解CPU和内存的交互是理解并发的基础

**实际例子**：
- 寄存器访问速度比主存快100倍以上
- 缓存命中率直接影响程序性能

#### How（如何工作/实现）
CPU的工作原理：

1. **指令周期**：
   \`\`\`
   取指 (Fetch) → 译码 (Decode) → 执行 (Execute)
   \`\`\`

2. **每个周期的操作**：
   - 从内存获取指令（Fetch）
   - 解析指令内容（Decode）
   - 执行指令（Execute）
     - 可能包括：读取寄存器、访问内存、使用ALU计算、存储结果

3. **程序计数器 (PC)**：
   - 记录下一条要执行的指令的内存地址
   - 每执行一条指令后自动更新

#### 关键术语
- **Register**：寄存器，CPU内部的高速存储
- **ALU**：算术逻辑单元，执行计算
- **MMU**：内存管理单元，处理内存访问
- **Program Counter (PC)**：程序计数器，记录下一条指令地址

#### 常见问题
- **Q：寄存器和内存有什么区别？**
  A：寄存器在CPU内部，访问速度极快但数量有限；内存（主存）在CPU外部，容量大但访问速度较慢。

- **Q：什么是缓存？**
  A：位于CPU和主存之间的高速存储，用于减少CPU等待内存数据的时间。

---

### 5. Stack and Subroutine Calls (栈和子程序调用)

#### What（是什么）
栈是内存中的特殊区域，用于存储活跃子程序的状态。当函数调用子程序时，调用函数的状态必须被保存，以便子程序返回后能继续执行。

**栈的特性**：
- 后进先出 (LIFO - Last In, First Out)
- 由栈帧 (Stack Frame) 组成
- 每个栈帧对应一个活跃的函数调用

**栈帧内容**：
- 返回地址 (Return Address)
- 保存的寄存器 (Saved Registers)
- 局部变量 (Local Variables)

**硬件支持**：
- 栈指针寄存器 (SP - Stack Pointer)：指向栈顶
- 帧指针/基址指针 (BP - Frame/Base Pointer)：稳定的参考地址
- 特殊指令：\`call\`、\`ret\`、\`push\`、\`pop\`

![栈帧结构图](./images/WK1-Stack.png)

#### Why（为什么重要）
栈机制的重要性：

1. **函数调用支持**：实现函数的嵌套调用
2. **状态保存**：保存调用函数的局部变量和寄存器状态
3. **内存管理**：自动管理函数的局部变量
4. **递归支持**：支持函数的递归调用

**实际例子（C 伪代码）**：
\`\`\`c
void main() {
    int x = 10;
    foo(x);  // 调用foo时，main的状态被保存到栈
    // foo返回后，main的状态被恢复
}

void foo(int a) {
    int b = a + 1;
    bar(b);  // 调用bar时，foo的状态被保存到栈
}
\`\`\`

**对应汇编示例（x86-64，对应 slide p.13）**：寄存器和栈在调用瞬间如何变化。
\`\`\`asm
; caller: main
mov  edi, 10        ; 参数 x 放入 edi（System V ABI 用寄存器传第一个参数）
call foo            ; call 把返回地址压栈，PC 跳到 foo
; --- callee: foo ---
push rbp            ; 保存调用者帧指针
mov  rbp, rsp       ; 建立新帧
sub  rsp, 16        ; 为局部变量 b 分配栈空间
mov  [rbp-4], edi   ; 存参数 a
mov  eax, [rbp-4]
inc  eax            ; b = a + 1
mov  [rbp-8], eax
; ...call bar(b)...
leave               ; 恢复 rsp/rbp
ret                 ; 弹出返回地址，PC 回到 main
\`\`\`
要点：\`call\` 把返回地址压栈、\`ret\` 弹出它；参数优先走寄存器（edi/rdi），只有超出寄存器数量或被 spill 时才出现在栈帧附近；\`push rbp / leave\` 维护帧链。

#### How（如何工作/实现）
子程序调用的完整流程：

**调用子程序时**：
1. 将参数压入栈（或放入寄存器）
2. 执行\`call\`指令：
   - 将返回地址压入栈
   - 将PC设置为子程序地址
3. 保存调用者的寄存器到栈
4. 为局部变量分配栈空间

**从子程序返回时**：
1. 将返回值放入寄存器（如eax）
2. 释放局部变量的栈空间
3. 恢复调用者的寄存器
4. 执行\`ret\`指令：
   - 从栈中弹出返回地址
   - 将PC设置为返回地址
5. 调整栈指针，移除参数

**栈的内存布局**：
\`\`\`
高地址
┌─────────────────┐
│   参数 (Args)    │
├─────────────────┤
│  返回地址 (RA)   │
├─────────────────┤
│  保存的寄存器    │
├─────────────────┤
│  局部变量        │
├─────────────────┤ ← 栈顶 (SP)
│                 │
│   栈增长方向     │
│       ↓         │
低地址
\`\`\`

#### 关键术语
- **Stack Frame**：栈帧，函数调用的栈空间
- **Stack Pointer (SP)**：栈指针，指向栈顶
- **Frame Pointer (FP/BP)**：帧指针，稳定的参考地址
- **Return Address**：返回地址，函数返回后继续执行的位置

#### 常见问题
- **Q：栈溢出是什么？**
  A：当函数调用层次太深或局部变量太大时，栈空间耗尽，导致程序崩溃。

- **Q：栈和堆有什么区别？**
  A：栈用于存储局部变量和函数调用信息，由编译器自动管理；堆用于动态内存分配，由程序员手动管理。

---

### 6. Memory Boundaries (内存边界)

#### What（是什么）
内存边界是操作系统提供的保护机制，用于防止应用程序修改其他应用程序或操作系统的内存。

**保护内容**：
- 进程之间的内存隔离
- 操作系统内存的保护
- 只允许进程访问自己的地址空间

**硬件支持**：
- MMU (Memory Management Unit) 提供地址转换和保护
- 基址寄存器和界限寄存器
- 页表和TLB (Translation Lookaside Buffer)

#### Why（为什么重要）
内存边界保护的重要性：

1. **系统稳定性**：防止一个程序崩溃影响其他程序
2. **安全性**：防止恶意程序窃取或破坏其他程序的数据
3. **隔离性**：每个程序都认为自己独占内存空间
4. **调试便利**：内存访问错误只影响单个程序

**实际例子**：
- 程序A不能读取程序B的内存，即使程序B有敏感数据
- 程序崩溃时，操作系统可以安全终止该程序，不影响其他程序

#### How（如何工作/实现）
内存边界的实现机制：

1. **地址转换**：
   - 虚拟地址 → 物理地址
   - 由MMU硬件完成

2. **保护检查**：
   - 每次内存访问都进行权限检查
   - 非法访问触发异常

3. **页表机制**：
   - 每个进程有自己的页表
   - 页表项包含访问权限位

4. **异常处理**：
   - 非法内存访问触发段错误 (Segmentation Fault)
   - 操作系统终止违规进程

#### 关键术语
- **Memory Protection**：内存保护
- **Virtual Address**：虚拟地址，程序使用的地址
- **Physical Address**：物理地址，实际内存地址
- **Segmentation Fault**：段错误，非法内存访问

#### 常见问题
- **Q：什么是虚拟内存？**
  A：每个进程有自己的地址空间，通过MMU转换为物理地址，实现内存隔离。

- **Q：为什么需要内存保护？**
  A：防止程序相互干扰，保证系统稳定性和安全性。

---

### 7. Execution Mode (执行模式)

#### What（是什么）
操作系统支持两种执行模式：用户模式 (User Mode) 和内核模式 (Kernel Mode)。

**用户模式**：
- 应用程序运行的模式
- 受限制的模式
- 不能执行特权指令
- 只能访问允许的内存区域

**内核模式**：
- 操作系统运行的模式
- 特权模式
- 可以执行所有指令
- 可以访问所有内存

**模式指示**：
- 程序状态字 (PSW - Program Status Word) 中的模式位
- 模式位 = 1：内核模式
- 模式位 = 0：用户模式

#### Why（为什么重要）
执行模式的重要性：

1. **系统保护**：防止应用程序执行危险操作
2. **资源控制**：操作系统控制硬件资源的访问
3. **安全性**：防止恶意程序破坏系统
4. **稳定性**：限制应用程序的权限，减少系统崩溃风险

**实际例子**：
- 应用程序不能直接访问硬盘，必须通过操作系统
- 应用程序不能修改其他程序的内存
- 应用程序不能关闭中断

#### How（如何工作/实现）
执行模式的切换机制：

**用户模式 → 内核模式**：
1. 系统调用 (System Call)
2. 中断 (Interrupt)
3. 异常 (Exception)

**内核模式 → 用户模式**：
1. 从系统调用返回
2. 从中断返回
3. 从异常返回

**特权指令示例**：
- I/O指令
- 修改PSW的指令
- 修改页表基址寄存器的指令
- 关闭中断的指令

#### 关键术语
- **User Mode**：用户模式，受限模式
- **Kernel Mode**：内核模式，特权模式
- **Privileged Instruction**：特权指令，只能在内核模式执行
- **Program Status Word (PSW)**：程序状态字，包含模式位

#### 常见问题
- **Q：为什么要区分用户模式和内核模式？**
  A：为了保护系统安全，防止应用程序执行危险操作。

- **Q：系统调用时会发生什么？**
  A：CPU从用户模式切换到内核模式，执行操作系统代码，然后返回用户模式。

---

### 8. OS Kernel (操作系统内核)

#### What（是什么）
操作系统内核是操作系统的核心部分，运行在内核模式，提供基本的管理服务。

**内核的组成**：
- 进程管理
- 内存管理
- 文件系统
- 设备驱动
- 网络协议栈

**内核的功能**：
- 调度：决定哪个进程使用CPU
- 资源分配：分配内存、设备等资源
- I/O设备访问：提供统一的设备访问接口

#### Why（为什么重要）
内核的重要性：

1. **系统核心**：所有系统服务都通过内核提供
2. **资源管理**：统一管理所有硬件资源
3. **抽象层**：为应用程序提供统一的接口
4. **保护层**：保护硬件不被应用程序直接访问

**实际例子**：
- 文件操作：应用程序调用\`read()\`，内核负责从磁盘读取数据
- 网络通信：应用程序调用\`send()\`，内核负责发送数据包

#### How（如何工作/实现）
内核的工作机制：

1. **模块化设计**：
   - 可加载的内核模块
   - 设备驱动作为模块

2. **系统调用接口**：
   - 提供统一的API
   - 将用户请求转换为内核操作

3. **中断处理**：
   - 处理硬件中断
   - 调用相应的中断处理程序

4. **进程管理**：
   - 进程创建和销毁
   - 进程调度

#### 关键术语
- **Kernel**：内核，操作系统的核心
- **Module**：模块，可加载的内核组件
- **Device Driver**：设备驱动，控制硬件设备的程序

#### 常见问题
- **Q：内核和操作系统有什么区别？**
  A：内核是操作系统的核心部分，运行在内核模式；操作系统还包括运行在用户模式的系统工具和应用程序。

- **Q：什么是微内核？**
  A：将内核功能最小化，其他服务运行在用户模式的设计。

---

### 9. Interrupts (中断)

#### What（是什么）
中断是导致CPU暂停当前执行并转交给操作系统的事件。

**中断的类型**：
1. **外部中断 (External Interrupts)**：
   - 由外部设备在不可预测的时间产生
   - 例子：
     - 时钟中断：通知操作系统时间流逝
     - I/O设备中断：通知I/O操作完成

2. **内部中断 (Internal Interrupts)**：
   - 由执行当前指令时的异常引起
   - 例子：
     - 错误条件：除零、特权指令违规
     - 临时问题：缺页异常

**中断处理流程**：
1. 中断发生
2. CPU进入内核模式
3. 保存当前状态（PC、PSW）
4. 跳转到中断处理程序
5. 执行中断处理程序
6. 恢复状态
7. 继续执行

![中断处理机制图](./images/WK1-Interrupts.png)

#### Why（为什么重要）
中断的重要性：

1. **异步处理**：处理不可预测的事件
2. **效率提升**：CPU不需要轮询设备状态
3. **实时响应**：及时处理紧急事件
4. **系统控制**：操作系统通过中断控制系统

**实际例子**：
- 键盘输入：按键时产生中断，CPU暂停当前工作，处理键盘输入
- 磁盘读写：读写完成时产生中断，CPU处理数据
- 定时器：时钟中断用于进程调度

#### How（如何工作/实现）
中断的处理机制：

**中断向量表**：
- 存储在OS内存中
- 每个表项存储一个中断处理程序的地址
- 中断号作为索引

**中断发生时**：
1. CPU保存当前PSW和PC到栈
2. 设置PSW为内核模式
3. 从中断向量表加载新的PC
4. 执行中断处理程序

**中断返回时**：
1. 从栈恢复PSW和PC
2. 继续执行被中断的程序

**中断返回后的三种结局（对应 slide p.23）**——被中断程序不一定继续跑：
- 恢复执行被中断的程序（最常见）
- OS 决定**杀掉该应用程序**（例如它触发了致命异常）
- OS 决定**调度另一个进程**运行（例如时钟中断触发的时间片用完），被中断进程进入 ready

**中断处理程序**：
\`\`\`c
void interrupt_handler() {
    // 保存寄存器
    // 处理中断
    // 恢复寄存器
    // 返回
}
\`\`\`

#### 关键术语
- **Interrupt**：中断，导致CPU暂停的事件
- **Interrupt Vector**：中断向量，存储中断处理程序地址的表
- **Interrupt Handler**：中断处理程序，处理中断的函数
- **Clock Interrupt**：时钟中断，定时器产生的中断
- **I/O Interrupt**：I/O中断，设备操作完成产生的中断

#### 常见问题
- **Q：中断和异常有什么区别？**
  A：中断通常由外部设备异步产生；异常由CPU执行指令时同步产生。

- **Q：什么是中断优先级？**
  A：不同中断有不同的优先级，高优先级中断可以打断低优先级中断的处理。

---

### 10. System Calls (系统调用)

#### What（是什么）
系统调用是用户程序和操作系统之间的接口，允许用户程序请求操作系统服务。

**系统调用的作用**：
- 文件操作：open、read、write、close
- 进程控制：fork、exec、exit
- 内存管理：mmap、brk
- 设备操作：ioctl
- 网络通信：socket、bind、listen、accept

**系统调用的执行过程**：
1. 用户程序将系统调用号放入寄存器（如%rax）
2. 执行系统调用指令（如\`syscall\`）
3. CPU切换到内核模式
4. 内核查找系统调用表
5. 执行相应的系统调用处理程序
6. 返回用户程序

![系统调用流程图](./images/WK1-System-Call.png)

#### Why（为什么重要）
系统调用的重要性：

1. **安全接口**：提供受控的方式访问系统资源
2. **抽象层**：隐藏实现细节，提供统一接口
3. **保护机制**：防止应用程序直接操作硬件
4. **可移植性**：不同系统提供相同的接口

**实际例子**：
\`\`\`c
// 用户程序
int fd = open("file.txt", O_RDONLY);  // 系统调用
char buf[100];
read(fd, buf, 100);  // 系统调用
close(fd);  // 系统调用
\`\`\`

#### How（如何工作/实现）
系统调用的详细实现：

**系统调用表**：
- 存储在内核中
- 每个表项对应一个系统调用处理程序
- 系统调用号作为索引

**执行流程**：
\`\`\`
用户程序：
    fork() {
        mov $57, %rax    // 系统调用号
        syscall           // 切换到内核模式
    }

内核：
    syscall_entry_handler() {
        call syscall_tbl[%rax]  // 查找并调用处理程序
    }

    sys_fork() {
        // 创建新进程
    }
\`\`\`

**系统调用的开销**：
- 模式切换：用户模式 ↔ 内核模式
- 参数传递：通过寄存器或栈
- 返回值：通过寄存器

**系统调用可能阻塞调用者（对应 slide p.25）**：系统调用 **不保证立即返回**。例如 \`read()\` 等待磁盘 I/O 时，内核会把调用进程置为 **blocked**，并**调度另一个 ready 进程**运行；等 I/O 完成的中断到了再唤醒它。所以"系统调用 = 同步请求"是就调用者视角而言，内核仍可借机做调度。

**OS 基本运作交互图（对应 slide p.21）**——四条控制路径要分清：
\`\`\`
        非特权指令          系统调用(trap)         特权指令          中断(interrupt)
应用 ──────────────┐  ┌──────────────────┐
                  ↓  ↓                   │
                 ┌──────────┐   ┌────────┴───┐
                 │   OS     │←──│  硬件设备   │
                 │ (kernel) │   │  /时钟/I/O  │
                 └────┬─────┘   └────────────┘
                      │  特权指令直接操作硬件
                      ↓
                   ┌──────┐
                   │硬件   │
                   └──────┘
\`\`\`
- 应用发**非特权指令**：留在用户态，不进内核
- 应用发**系统调用**：trap 进内核，内核代为执行特权操作
- 内核发**特权指令**：直接操作硬件
- 硬件发**中断**：进内核，内核处理后返回（或调度/杀进程，见上文）

#### 关键术语
- **System Call**：系统调用，用户程序请求OS服务
- **System Call Table**：系统调用表，存储处理程序地址
- **Trap**：陷阱，切换到内核模式的指令
- **syscall**：系统调用指令

#### 常见问题
- **Q：系统调用和函数调用有什么区别？**
  A：系统调用需要切换到内核模式，有模式切换开销；函数调用在用户模式执行，开销较小。

- **Q：什么是库函数？**
  A：库函数是用户空间的函数，可能封装了系统调用，也可能不涉及系统调用（如数学函数）。

## 知识点之间的联系

这些知识点形成了一个完整的知识体系：

1. **操作系统定义** → **硬件抽象** → **资源管理**：这是操作系统的三大核心功能
2. **计算机体系结构** → **栈和子程序** → **内存边界**：这是理解程序执行的基础
3. **执行模式** → **OS内核** → **中断** → **系统调用**：这是操作系统工作原理的核心

**整体流程**：
- 应用程序通过系统调用请求操作系统服务
- 操作系统在内核模式执行服务
- 通过中断处理异步事件
- 通过内存边界保护系统安全
- 通过硬件抽象提供简洁接口

## 实际应用案例

### 案例1：文件读取过程
\`\`\`
1. 应用程序调用 read(fd, buf, size)
2. 触发系统调用，切换到内核模式
3. 内核检查参数合法性
4. 内核通过设备驱动读取磁盘
5. 数据复制到用户空间的buf
6. 返回用户模式，返回读取的字节数
\`\`\`

### 案例2：多任务处理
\`\`\`
1. 时钟中断发生
2. CPU进入内核模式
3. 操作系统保存当前进程状态
4. 操作系统选择下一个进程
5. 恢复下一个进程的状态
6. 继续执行
\`\`\`

### 案例3：程序崩溃处理
\`\`\`
1. 程序访问非法内存
2. 触发缺页异常或段错误
3. CPU进入内核模式
4. 操作系统检查错误
5. 操作系统终止程序
6. 释放程序占用的资源
\`\`\`

## 常见错误和易错点

### 1. 混淆用户模式和内核模式
- **错误**：认为应用程序可以直接访问硬件
- **正确**：应用程序必须通过系统调用请求操作系统服务

### 2. 不理解中断和系统调用的区别
- **错误**：认为中断和系统调用是一回事
- **正确**：中断是异步事件，系统调用是同步请求

### 3. 忽视栈的作用
- **错误**：认为函数调用只是简单的跳转
- **正确**：函数调用需要保存状态，通过栈实现

### 4. 不理解内存保护
- **错误**：认为程序可以访问任意内存地址
- **正确**：操作系统通过MMU限制内存访问

### 5. 混淆内核和操作系统
- **错误**：认为内核就是整个操作系统
- **正确**：内核是操作系统的核心，但操作系统还包括其他组件

## 关键术语

| 英文术语 | 中文 | 定义 |
|---------|------|------|
| Operating System (OS) | 操作系统 | 管理硬件资源并为应用程序提供服务的系统软件 |
| Hardware Abstraction | 硬件抽象 | 将复杂的硬件细节隐藏，提供简洁统一的编程接口 |
| Resource Management | 资源管理 | 在多个竞争的进程之间有序分配处理器、内存和I/O设备 |
| Process | 进程 | 运行中的程序实例 |
| Thread | 线程 | 进程中的执行单元 |
| Address Space | 地址空间 | 程序可访问的内存范围 |
| Register | 寄存器 | CPU内部的高速存储，分为通用寄存器和特殊寄存器 |
| ALU | 算术逻辑单元 | 执行数学和逻辑运算的硬件组件 |
| MMU | 内存管理单元 | 处理内存访问和地址转换的硬件组件 |
| Program Counter (PC) | 程序计数器 | 记录下一条要执行的指令的内存地址 |
| Stack Frame | 栈帧 | 函数调用在栈上占用的空间，包含返回地址、保存的寄存器和局部变量 |
| Stack Pointer (SP) | 栈指针 | 指向栈顶的寄存器 |
| Frame Pointer (FP/BP) | 帧指针 | 提供稳定参考地址的寄存器 |
| Return Address | 返回地址 | 函数返回后继续执行的位置 |
| Kernel Mode | 内核模式 | 操作系统运行的特权模式，可执行所有指令和访问所有内存 |
| User Mode | 用户模式 | 应用程序运行的受限模式，不能执行特权指令 |
| Privileged Instruction | 特权指令 | 只能在内核模式执行的指令（如I/O指令、修改PSW） |
| PSW | 程序状态字 | 包含模式位，指示当前执行模式 |
| Interrupt | 中断 | 导致CPU暂停当前执行并转交控制权给OS的事件 |
| Interrupt Vector | 中断向量 | 存储中断处理程序地址的表 |
| Interrupt Handler | 中断处理程序 | 处理特定中断的函数 |
| System Call | 系统调用 | 用户程序请求操作系统服务的接口 |
| System Call Table | 系统调用表 | 存储系统调用处理程序地址的表，以系统调用号为索引 |

## 常见问题

**Q1：操作系统和应用程序有什么区别？**
A：操作系统管理硬件资源，为应用程序提供服务，运行在内核模式；应用程序使用操作系统提供的接口完成特定任务，运行在用户模式。

**Q2：硬件抽象会降低性能吗？**
A：会有轻微开销（如系统调用的模式切换），但带来的好处（可移植性、安全性、易用性）远大于性能损失。

**Q3：中断和系统调用有什么区别？**
A：中断是**异步**事件，由外部设备或执行异常在不可预测的时间触发；系统调用是**同步**请求，由应用程序主动发起。

**Q4：什么是栈溢出？**
A：当函数调用层次太深（如无限递归）或局部变量太大时，栈空间耗尽，导致程序崩溃。

**Q5：系统调用和普通函数调用有什么区别？**
A：系统调用需要切换到内核模式（用户态→内核态→用户态），有模式切换开销；函数调用在用户模式执行，开销较小。

**Q6：什么是特权指令？为什么需要？**
A：特权指令是只能在内核模式执行的指令（如I/O操作、修改页表、关闭中断）。需要防止应用程序执行危险操作，保护系统安全。

## 课件总结

本课件介绍了操作系统的基础知识，包括：

1. **操作系统的定义和功能**：操作系统是管理硬件资源并为应用程序提供服务的系统软件，主要功能包括硬件抽象和资源管理。

2. **硬件抽象**：将复杂的硬件细节隐藏，提供简洁的编程接口，包括进程、线程、地址空间、文件、套接字等抽象概念。

3. **资源管理**：在多个竞争的进程之间有序、受控地分配处理器、内存和I/O设备。

4. **计算机体系结构**：理解CPU、内存、寄存器、ALU、MMU等硬件组件的工作原理。

5. **栈和子程序调用**：理解栈帧、栈指针、返回地址等概念，以及函数调用的完整过程。

6. **内存边界保护**：通过MMU实现进程间的内存隔离，保护系统安全。

7. **执行模式**：用户模式和内核模式的区分，以及模式切换机制。

8. **中断处理**：理解外部中断和内部中断，以及中断向量表和中断处理程序。

9. **系统调用**：理解系统调用的执行过程，以及系统调用表的作用。

这些基础知识为后续学习进程管理、内存管理、文件系统、设备管理等奠定了坚实基础。

## 复习建议

1. **理解概念**：不要死记硬背，理解每个概念的含义和作用
2. **画图辅助**：画出系统调用流程图、中断处理流程图、栈帧结构图
3. **联系实际**：结合实际操作系统（如Linux）理解这些概念
4. **做练习题**：通过练习题巩固知识
5. **重点复习**：系统调用、中断处理、内存保护是重点
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Define operating system (slide wording). · 用课件原文定义操作系统。 | **EN:** A program that interfaces the machine with the application programs; its job is to make other programs run efficiently. / **中文：** 在机器与应用程序之间提供接口的程序；其任务是让其他程序高效运行。 |
| 2 | State the two core functions of an OS. · 写出 OS 的两大核心功能。 | **EN:** Hardware abstraction and resource management. / **中文：** 硬件抽象（Hardware Abstraction）和资源管理（Resource Management）。 |
| 3 | Hardware abstraction — two goals (slide p.3). · 硬件抽象的两个目标（课件 p.3）。 | **EN:** (1) Simplify the computer model; (2) provide each application a dedicated abstract machine. / **中文：** （1）简化计算机模型；（2）为每个应用提供看似专用的抽象机器。 |
| 4 | Name four abstractions the OS provides over hardware. · 写出 OS 提供的四种硬件抽象。 | **EN:** Process, thread, address space, file (and socket). / **中文：** 进程（Process）、线程（Thread）、地址空间（Address Space）、文件（File）（及套接字 Socket）。 |
| 5 | Define OS kernel (slide p.20). · 用课件 p.20 定义 OS kernel。 | **EN:** Part of the OS in kernel mode — core functions for scheduling, resource allocation, and I/O device access. / **中文：** 内核态运行的 OS 部分——调度、资源分配、访问 I/O 设备的核心功能。 |
| 6 | User vs kernel mode (slide p.18–19). · 用户态 vs 内核态（课件 p.18–19）。 | **EN:** User: cannot issue privileged instructions; only OS-allowed memory. Kernel: all instructions; all memory. / **中文：** 用户态：不能执行特权指令；只能访问 OS 允许的内存。内核态：全部指令；全部内存。 |
| 7 | Privileged instruction (slide p.19). · 特权指令（课件 p.19）。 | **EN:** Instructions that affect control of the machine or do I/O. / **中文：** 影响机器控制或执行 I/O 的指令。 |
| 8 | Stack frame contents (slide p.12). · 栈帧内容（课件 p.12）。 | **EN:** Return address, saved registers, and local variables; stack pointer points to top of stack. / **中文：** 返回地址、保存的寄存器、局部变量；栈指针指向栈顶。 |
| 9 | List three outcomes after interrupt handling returns. · 列出中断处理返回后的三种结局。 | **EN:** (1) Resume interrupted program; (2) OS kills it (fatal exception); (3) OS schedules another process. / **中文：** （1）恢复被中断程序；（2）OS 杀掉它（致命异常）；（3）OS 调度另一个进程。 |
| 10 | Can a system call block the caller? What does the kernel do meanwhile? · 系统调用会阻塞调用者吗？此时内核做什么？ | **EN:** Yes (e.g. read()); the kernel may schedule another ready process until an interrupt wakes the blocker. / **中文：** 会（如 read()）；内核可调度另一个 ready 进程，直到中断唤醒阻塞者。 |
| 11 | System call execution — five steps (slide p.25). · 系统调用执行的五个步骤（课件 p.25）。 | **EN:** (1) Put syscall number in register; (2) execute syscall instruction; (3) CPU switches to kernel mode; (4) kernel looks up syscall table; (5) execute handler and return. / **中文：** （1）系统调用号放入寄存器；（2）执行 syscall 指令；（3）CPU 切换到内核态；（4）内核查系统调用表；（5）执行处理程序并返回。 |
| 12 | Interrupt vs system call — sync/async and who triggers. · 中断 vs 系统调用：同步/异步与触发者。 | **EN:** Interrupt = asynchronous event (hardware or exception); system call = synchronous request initiated by the program. / **中文：** Interrupt = 异步事件（硬件或异常）；system call = 程序主动发起的同步请求。 |

`,Gg=`# WK2-Process-Intro

## 课件概述
本课件介绍了进程和线程的基本概念，这是操作系统中最核心的抽象之一。课件从进程的定义入手，详细讲解了进程的组成元素、多道程序设计、进程的创建和终止、进程状态转换、进程控制块（PCB）、线程的概念、多线程执行、进程地址空间、线程与进程的比较、线程控制块（TCB）以及PThreads API。这些内容是理解操作系统并发执行和资源管理的基础。

## 必须掌握的知识点

### 1. Process (进程)

#### What（是什么）
进程是正在执行的程序实例，是操作系统提供的基本抽象。它为程序提供了一个专用的、抽象的机器来运行。

**程序与进程的区别**：
- **程序 (Program)**：静态的代码，类似于食谱
- **进程 (Process)**：程序的动态执行，类似于烹饪过程

**关键特性**：
- 一个程序可以对应多个进程（例如，多个浏览器窗口）
- 每个进程有自己的地址空间、程序计数器、寄存器集合
- 进程是资源分配的基本单位

**进程的组成元素**：
- **线程 (Threads)**：抽象CPU，执行单元
- **地址空间 (Address Space)**：抽象内存，进程可访问的内存范围
- **文件 (Files)**：抽象磁盘，数据存储
- **套接字 (Sockets)**：抽象网络，通信端点

#### Why（为什么重要）
进程的重要性：

1. **并发执行**：允许多个程序在单个CPU上并发运行
2. **资源隔离**：每个进程有自己的地址空间，相互隔离
3. **资源管理**：操作系统以进程为单位分配资源
4. **故障隔离**：一个进程崩溃不影响其他进程

**实际例子**：
- 当你同时打开浏览器、音乐播放器和文档编辑器时，每个都是一个独立的进程
- 每个进程认为自己独占CPU和内存资源

#### How（如何工作/实现）
进程的实现机制：

1. **进程创建**：
   - 系统初始化时创建初始进程
   - 运行中的进程通过系统调用创建新进程
   - 用户请求创建新进程
   - 批处理作业启动

2. **进程终止**：
   - 正常退出（自愿）
   - 错误退出（自愿）
   - 致命错误（非自愿，如除零、非法内存访问）
   - 被其他进程杀死（如kill命令）

3. **进程状态**：
   - **运行 (Running)**：正在使用CPU
   - **就绪 (Ready)**：可以运行，但暂时被停止
   - **阻塞 (Blocked)**：无法运行，直到某个外部事件发生

#### 关键术语
- **Process**：进程，正在执行的程序实例
- **Program**：程序，静态的代码
- **Address Space**：地址空间，进程可访问的内存范围
- **Thread**：线程，进程内的执行单元

#### 常见问题
- **Q：进程和程序有什么区别？**
  A：程序是静态的代码文件，进程是程序的动态执行实例。一个程序可以对应多个进程。

- **Q：如何查看系统中的进程？**
  A：Linux/Mac使用\`ps aux\`或\`top\`命令，Windows使用任务管理器。

---

### 2. Multiprogramming (多道程序设计)

#### What（是什么）
多道程序设计允许多个进程共享CPU，以伪并行方式运行。由于CPU一次只能运行一个进程，操作系统通过快速切换进程来提供并行的假象。

**工作原理**：
- CPU在进程之间快速切换
- 每个进程运行几十毫秒
- 进程执行是交错的
- 提供并行的假象

**调度算法**：
- 决定哪个进程接下来运行
- 决定每个进程运行多长时间

#### Why（为什么重要）
多道程序设计的重要性：

1. **提高效率**：当一个进程等待I/O时，CPU可以运行其他进程
2. **资源利用率**：最大化CPU使用率
3. **响应时间**：用户感觉多个程序同时运行
4. **吞吐量**：单位时间内完成更多任务

**实际例子**：
- 当你在下载文件时，同时可以浏览网页
- 下载进程等待I/O时，浏览器进程可以使用CPU

![多道程序设计时序图](./images/WK2-Multiprogramming.png)

*Multiprogramming 时序图：进程A/B/C/D交替使用CPU，实现伪并行（TB Figure 2-1）*

#### How（如何工作/实现）
多道程序设计的实现：

1. **进程调度**：
   - 调度器选择下一个运行的进程
   - 使用调度算法（如轮转调度、优先级调度）

2. **上下文切换**：
   - 保存当前进程的状态（PC、SP、寄存器）
   - 恢复下一个进程的状态
   - 切换内存映射（页表）

3. **定时器中断**：
   - 防止进程独占CPU
   - 定时器中断触发调度器

#### 关键术语
- **Multiprogramming**：多道程序设计
- **Context Switch**：上下文切换，进程状态的保存和恢复
- **Scheduling Algorithm**：调度算法，决定进程运行顺序

#### 常见问题
- **Q：多道程序设计和多任务有什么区别？**
  A：多道程序设计强调多个程序共享CPU；多任务强调用户同时使用多个程序。

- **Q：上下文切换的开销有多大？**
  A：通常需要几微秒到几十微秒，包括保存/恢复寄存器、切换内存映射等。

---

### 3. Process Creation (进程创建)

#### What（是什么）
进程创建是操作系统创建新进程的过程。在UNIX系统中，主要通过\`fork()\`和\`exec()\`系统调用实现。

**进程创建的四种事件**：
1. 系统初始化
2. 运行中的进程执行进程创建系统调用
3. 用户请求创建新进程
4. 批处理作业启动

![fork()进程创建示意图](./images/WK2-Fork.png)

*fork() 创建子进程：Parent 通过 fork() 生成 Child，拥有独立地址空间但相同内存映像*

**fork()系统调用**：
- 创建调用进程的克隆
- 创建不同的地址空间
- 相同的内存映像
- 相同的程序计数器和通用寄存器值
- 相同的打开文件句柄

**exec()系统调用**：
- 用新程序替换当前进程
- 重新初始化栈、堆和数据段
- 通常在fork()之后调用

#### Why（为什么重要）
进程创建的重要性：

1. **任务分解**：将复杂任务分解为多个进程
2. **并发执行**：允许多个任务同时执行
3. **服务隔离**：不同服务运行在不同进程
4. **故障隔离**：一个进程崩溃不影响其他进程

**实际例子**：
\`\`\`c
// 典型的UNIX进程创建
pid_t pid = fork();
if (pid == 0) {
    // 子进程
    execve("/bin/ls", argv, envp);
} else {
    // 父进程
    wait(NULL);
}
\`\`\`

![fork()代码示例](./images/WK2-Fork-Code.png)

*fork() 代码示例：fork()返回两次，子进程返回0，父进程返回子进程PID*

#### How（如何工作/实现）
进程创建的详细流程：

**fork()的实现**：
1. 为新进程分配唯一的进程ID
2. 创建新的进程控制块（PCB）
3. 复制父进程的地址空间（写时复制优化）
4. 复制父进程的文件描述符表
5. 设置子进程的状态为就绪
6. 返回子进程ID给父进程，返回0给子进程

**exec()的实现**：
1. 加载新程序的代码段和数据段
2. 重新初始化堆和栈
3. 设置程序计数器为新程序的入口点
4. 保留打开的文件描述符（除非设置了close-on-exec标志）

**写时复制 (Copy-on-Write)**：
- 初始时父子进程共享物理内存页
- 只有当某个进程尝试写入时，才复制该内存页
- 大大减少了fork()的开销

#### 关键术语
- **fork()**：创建当前进程的副本
- **exec()**：用新程序替换当前进程
- **Copy-on-Write**：写时复制，优化fork()的机制
- **Process ID (PID)**：进程ID，唯一标识进程

#### 常见问题
- **Q：fork()为什么会返回两次？**
  A：因为fork()创建了一个新进程，父进程和子进程都需要知道结果，所以返回两次。

- **Q：fork()和exec()为什么要分开？**
  A：这样可以在fork()之后、exec()之前修改子进程的属性（如重定向I/O）。

---

### 4. Process States (进程状态)

#### What（是什么）
进程在其生命周期中会经历不同的状态。最基本的三状态模型包括：

**三种基本状态**：
1. **运行 (Running)**：进程正在CPU上执行
2. **就绪 (Ready)**：进程可以运行，但CPU被其他进程占用
3. **阻塞 (Blocked)**：进程无法运行，等待某个事件（如I/O完成）

**状态转换**：
\`\`\`
        调度/分派
就绪 ─────────────→ 运行
  ↑                   │
  │                   │
  │ 等待事件发生       │ I/O请求或等待事件
  │                   │
  │                   ↓
  └─────────────── 阻塞
        事件发生
\`\`\`

![进程状态转换图](./images/WK2-Process-States.png)

*进程三状态模型：Running/Ready/Blocked 及其转换条件（TB Figure 2-2）*

> 补充参考：OSEP（*Operating Systems: Three Easy Pieces*, Arpaci-Dusseau 2023）Figure 4.4 给出了一段具体的状态转移轨迹示例——一个进程在 running / ready / blocked 之间来回切换的时间线，配合 slide p.13 阅读，能更直观看到"调度点"和"I/O 等待点"如何驱动状态变化。

#### Why（为什么重要）
进程状态的重要性：

1. **调度决策**：调度器根据进程状态决定运行哪个进程
2. **资源管理**：阻塞的进程不占用CPU资源
3. **系统效率**：合理管理进程状态提高系统效率
4. **并发控制**：通过状态转换实现并发

**实际例子**：
- 进程等待磁盘I/O时进入阻塞状态
- I/O完成后，进程从阻塞状态转为就绪状态
- 调度器选择就绪进程运行

#### How（如何工作/实现）
进程状态的管理：

**状态转换的触发条件**：
1. **就绪 → 运行**：调度器选择该进程运行
2. **运行 → 就绪**：
   - 时间片用完
   - 更高优先级进程就绪
3. **运行 → 阻塞**：
   - 请求I/O操作
   - 等待事件
   - 申请资源失败
4. **阻塞 → 就绪**：
   - I/O完成
   - 事件发生
   - 资源可用

**进程控制块 (PCB)**：
- 存储进程的当前状态
- 存储进程的其他信息
- 由操作系统维护

#### 关键术语
- **Running**：运行状态，正在CPU上执行
- **Ready**：就绪状态，可以运行但等待CPU
- **Blocked**：阻塞状态，等待事件发生

#### 常见问题
- **Q：进程状态和线程状态有什么区别？**
  A：基本状态相同，但线程状态更细粒度，包括更多状态（如挂起状态）。

- **Q：什么是挂起状态？**
  A：进程被交换到磁盘，不占用内存空间，需要时再换入。

---

### 5. Process Control Block (进程控制块)

#### What（是什么）
进程控制块（PCB）是操作系统维护的关于进程信息的数据结构。每个进程都有一个对应的PCB。

**PCB包含的信息**：
- 进程ID (PID)
- 父进程信息
- 内存管理信息（页表基址寄存器）
- 文件描述符表
- 优先级
- 已使用的CPU时间
- 执行上下文：
  - 程序计数器 (PC)
  - 栈指针 (SP)
  - 其他控制寄存器

**进程表**：
- 包含所有PCB的列表
- 每个进程对应一个PCB
- 操作系统通过进程表管理所有进程

#### Why（为什么重要）
PCB的重要性：

1. **进程管理**：操作系统通过PCB管理进程
2. **上下文切换**：保存和恢复进程状态
3. **资源跟踪**：记录进程使用的资源
4. **调度决策**：调度器使用PCB信息进行调度

**实际例子**：
- 上下文切换时，保存当前进程的PC、SP、寄存器到PCB
- 从PCB恢复下一个进程的PC、SP、寄存器

#### How（如何工作/实现）
PCB的使用：

**上下文切换**：
1. 保存当前进程的执行上下文到PCB
2. 更新进程状态
3. 选择下一个进程
4. 从PCB恢复下一个进程的执行上下文
5. 更新内存管理硬件（如页表基址寄存器）

**PCB的组织**：
- 链表：每个状态（就绪、阻塞）一个链表
- 数组：PCB数组，索引为进程ID
- 树：表示进程间的父子关系

#### 关键术语
- **Process Control Block (PCB)**：进程控制块，存储进程信息
- **Process Table**：进程表，包含所有PCB
- **Execution Context**：执行上下文，程序计数器、栈指针、寄存器

#### 常见问题
- **Q：PCB存储在哪里？**
  A：PCB存储在内核内存中，只有操作系统可以访问。

- **Q：上下文切换的开销主要在哪里？**
  A：保存/恢复寄存器、切换内存映射、刷新TLB等。

---

### 6. Threads (线程)

#### What（是什么）
线程是进程内的执行单元，是CPU调度的基本单位。每个线程有自己的程序计数器、栈指针、寄存器和栈。

**线程的特性**：
- 是进程内的执行单元
- 独立于其他线程运行
- 有自己的执行上下文（PC、SP、寄存器）
- 共享进程的地址空间

**线程与进程的关系**：
- 一个进程可以有一个或多个线程
- 线程在进程定义的环境中执行
- 所有线程共享进程的代码、数据和堆内存
- 每个线程有自己的栈

#### Why（为什么重要）
线程的重要性：

1. **并行性**：利用多核处理器，提高程序性能
2. **重叠I/O与计算**：一个线程等待I/O时，另一个线程可以使用CPU
3. **响应性**：GUI程序中，一个线程处理用户输入，另一个执行后台任务
4. **资源共享**：线程共享进程资源，通信更高效

**实际例子**：
- Web服务器：每个请求一个线程
- 数据库服务器：多个查询并行执行
- 图形界面：一个线程处理界面，另一个执行计算
- **大数组并行（对应 slide p.22）**：把一个很大的数组按段切分，每个线程处理数组的一段，所有线程在多核上并行推进——这是"embarrassingly parallel"模式的典型应用。

![Per-process vs Per-thread items](./images/WK2-Per-process-thread.png)

*进程级资源 vs 线程级资源：地址空间、文件等共享，PC/寄存器/栈独立（TB Figure 2-12）*

![多线程执行示意图](./images/WK2-Multi-threaded.png)

*单核交替执行 vs 多核并行执行（Silberschatz Figure 4-3/4-4）*

#### How（如何工作/实现）
线程的实现：

**用户级线程**：
- 由用户空间的线程库管理
- 创建和切换速度快
- 一个线程阻塞会阻塞整个进程

**内核级线程**：
- 由操作系统内核管理
- 创建和切换开销较大
- 一个线程阻塞不影响其他线程

**线程上下文切换**：
1. 保存当前线程的PC、SP、寄存器到TCB
2. 选择下一个线程
3. 从TCB恢复下一个线程的PC、SP、寄存器
4. 继续执行

**线程"不在运行"时的寄存器细节（对应 slide p.15）**：当一个线程没在运行时，它的上下文（PC、SP、寄存器值）保存在内存（TCB）里；而 CPU 当前的 PC/SP **指向另一个正在运行的线程**的指令和栈。换句话说"寄存器属于当前运行的线程，未运行线程的寄存器状态在内存里等着被恢复"。

#### 关键术语
- **Thread**：线程，进程内的执行单元
- **Thread Control Block (TCB)**：线程控制块，存储线程信息
- **User-level Thread**：用户级线程，由用户空间管理
- **Kernel-level Thread**：内核级线程，由内核管理

#### 常见问题
- **Q：线程和进程有什么区别？**
  A：进程是资源分配单位，线程是CPU调度单位。线程共享进程资源，创建和切换开销更小。

- **Q：什么是线程安全？**
  A：多个线程同时访问共享资源时，程序仍能正确运行。

---

### 7. Process Address Space and Threads (进程地址空间和线程)

#### What（是什么）
进程的地址空间由多个部分组成，所有线程共享相同的地址空间。

**地址空间布局**：
\`\`\`
低地址
┌─────────────┐
│   Code      │ 代码段：程序指令
├─────────────┤
│   Data      │ 数据段：全局变量
├─────────────┤
│   Heap      │ 堆：动态内存分配
├─────────────┤
│   ...       │ 空闲空间
├─────────────┤
│   Stack     │ 栈：局部变量、函数参数
└─────────────┘
高地址
\`\`\`

![单线程进程内存布局](./images/WK2-Memory-Single-Thread.png)

*单线程进程内存布局：Code/Data/Heap 共享，单个 Stack*

**单线程进程**：
- 一个栈
- 栈从高地址向低地址增长
- 堆从低地址向高地址增长

**多线程进程**：
- 所有线程共享代码、数据和堆
- 每个线程有自己的栈
- 多个栈分布在地址空间中

![多线程进程内存布局](./images/WK2-Memory-Multi-Thread.png)

*多线程进程内存布局：Code/Data/Heap 共享，每个线程独立 Stack*

#### Why（为什么重要）
地址空间和线程的关系的重要性：

1. **数据共享**：线程可以高效地共享数据
2. **通信便利**：线程间通信不需要额外的系统调用
3. **资源效率**：共享内存减少资源消耗
4. **编程模型**：简化并发编程

**实际例子**：
\`\`\`c
// 全局变量，所有线程共享
int shared_data = 0;

void* thread_func(void* arg) {
    // 每个线程有自己的局部变量
    int local_data = *(int*)arg;
    shared_data += local_data;  // 访问共享数据
    return NULL;
}
\`\`\`

#### How（如何工作/实现）
地址空间的管理：

**内存管理单元 (MMU)**：
- 将虚拟地址转换为物理地址
- 提供内存保护
- 支持共享内存

**线程栈的分配**：
- 创建线程时分配栈空间
- 栈大小通常固定（如8MB）
- 栈溢出会触发段错误

**共享内存的同步**：
- 需要同步机制（如互斥锁、信号量）
- 防止数据竞争

#### 关键术语
- **Address Space**：地址空间，进程可访问的内存范围
- **Code Segment**：代码段，存储程序指令
- **Data Segment**：数据段，存储全局变量
- **Heap**：堆，动态内存分配区域
- **Stack**：栈，存储局部变量和函数调用信息

#### 常见问题
- **Q：线程栈的大小是多少？**
  A：通常由操作系统或线程库设置，默认值通常是8MB（Linux）或1MB（Windows）。

- **Q：什么是栈溢出？**
  A：当线程使用的栈空间超过分配的大小时，会触发栈溢出错误。

---

### 8. Multiple Threads or Multiple Processes? (多线程还是多进程)

#### What（是什么）
这是选择并发编程模型时的关键决策。多线程和多进程各有优缺点。

**多线程的优势**：
- 共享地址空间，数据共享方便快速
- 创建速度快
- 上下文切换开销小

**多线程的劣势**：
- 隔离性有限，一个线程崩溃会影响整个进程
- 需要同步机制防止数据竞争

**多进程的优势**：
- 可以跨多台机器并行化
- 提供隔离的执行环境
- 一个进程崩溃不影响其他进程

**多进程的劣势**：
- 进程间通信（IPC）开销较大
- 创建速度较慢
- 上下文切换开销较大

#### Why（为什么重要）
选择正确的并发模型的重要性：

1. **性能**：不同的模型有不同的性能特征
2. **可靠性**：隔离性影响系统的可靠性
3. **复杂性**：不同的模型有不同的编程复杂性
4. **可扩展性**：某些模型更适合分布式系统

**实际例子**：
- **多线程适合**：Web服务器、数据库、GUI应用
- **多进程适合**：分布式计算、需要高可靠性的系统

#### How（如何工作/实现）
选择并发模型的考虑因素：

**选择多线程当**：
- 需要频繁共享数据
- 需要快速创建和切换
- 单机多核并行
- 对可靠性要求不高

**选择多进程当**：
- 需要跨机器并行
- 需要高可靠性
- 可以接受IPC开销
- 不同组件需要独立运行

**混合模型**：
- 多进程 + 多线程
- 每个进程内使用多线程
- 结合两者的优势

#### 关键术语
- **Multi-threading**：多线程，一个进程内多个线程
- **Multi-processing**：多进程，多个独立进程
- **Inter-Process Communication (IPC)**：进程间通信

#### 常见问题
- **Q：什么时候使用多线程，什么时候使用多进程？**
  A：需要频繁共享数据时用多线程；需要高隔离性时用多进程。

- **Q：什么是线程池？**
  A：预先创建一组线程，重复使用，避免频繁创建和销毁线程的开销。

---

### 9. Thread Control Block (线程控制块)

#### What（是什么）
线程控制块（TCB）是存储线程执行上下文的数据结构。类似于进程控制块（PCB），但用于线程。

**TCB包含的信息**：
- 线程ID
- 栈指针
- 程序计数器
- 寄存器值
- 状态（运行、阻塞、就绪）
- 指向所属进程PCB的指针

**TCB与PCB的关系**：
- PCB存储进程信息（地址空间、文件等）
- TCB存储线程信息（执行上下文）
- 多个TCB指向同一个PCB

#### Why（为什么重要）
TCB的重要性：

1. **上下文切换**：保存和恢复线程状态
2. **线程管理**：操作系统通过TCB管理线程
3. **资源跟踪**：记录线程使用的资源
4. **调度决策**：调度器使用TCB信息进行调度

**实际例子**：
- 上下文切换时，保存当前线程的PC、SP、寄存器到TCB
- 从TCB恢复下一个线程的PC、SP、寄存器

#### How（如何工作/实现）
TCB的使用：

**线程上下文切换**：
1. 保存当前线程的执行上下文到TCB
2. 更新线程状态
3. 选择下一个线程
4. 从TCB恢复下一个线程的执行上下文
5. 继续执行

**TCB的组织**：
- 链表：每个状态一个链表
- 数组：TCB数组
- 树：表示线程间的层次关系

#### 关键术语
- **Thread Control Block (TCB)**：线程控制块，存储线程信息
- **Thread ID**：线程ID，唯一标识线程
- **Execution Context**：执行上下文，程序计数器、栈指针、寄存器

#### 常见问题
- **Q：TCB和PCB有什么区别？**
  A：PCB存储进程信息，TCB存储线程信息。一个进程有一个PCB，多个TCB。

- **Q：线程上下文切换和进程上下文切换有什么区别？**
  A：线程切换不需要切换地址空间，开销更小。

---

### 10. PThreads

#### What（是什么）
PThreads是POSIX标准的线程创建和同步API，大多数UNIX系统都支持它。

**PThreads的特性**：
- 函数以\`pthread\`开头
- 包含头文件\`pthread.h\`
- 线程ID类型为\`pthread_t\`

**基本API**：
- \`pthread_create()\`：创建新线程
- \`pthread_join()\`：等待线程结束
- \`pthread_exit()\`：终止线程
- \`pthread_self()\`：获取当前线程ID

#### Why（为什么重要）
PThreads的重要性：

1. **标准化**：跨平台的线程编程接口
2. **可移植性**：程序可以在不同UNIX系统间移植
3. **功能丰富**：提供线程创建、同步、通信等功能
4. **性能**：直接映射到内核线程

**实际例子**：
\`\`\`c
#include <pthread.h>

void* thread_func(void* arg) {
    printf("Thread %ld running\\n", (long)arg);
    return NULL;
}

int main() {
    pthread_t threads[5];
    for (long i = 0; i < 5; i++) {
        pthread_create(&threads[i], NULL, thread_func, (void*)i);
    }
    for (int i = 0; i < 5; i++) {
        pthread_join(threads[i], NULL);
    }
    return 0;
}
\`\`\`

#### How（如何工作/实现）
PThreads的使用：

**创建线程**：
\`\`\`c
int pthread_create(
    pthread_t *thread,           // 线程ID
    const pthread_attr_t *attr,  // 线程属性
    void *(*start_routine)(void*), // 线程函数
    void *arg                    // 函数参数
);
\`\`\`

**等待线程结束**：
\`\`\`c
int pthread_join(
    pthread_t thread,  // 线程ID
    void **retval      // 返回值
);
\`\`\`

**线程属性**：
- 栈大小
- 分离状态
- 调度策略

#### 关键术语
- **PThreads**：POSIX线程API
- **pthread_create()**：创建线程
- **pthread_join()**：等待线程结束
- **pthread_t**：线程ID类型

#### 常见问题
- **Q：PThreads和Java线程有什么区别？**
  A：PThreads是C语言的线程库，Java线程是Java语言的线程API。Java线程在不同平台上可能有不同的实现。

- **Q：什么是线程分离？**
  A：分离的线程结束后自动释放资源，不需要pthread_join()等待。

## 知识点之间的联系

这些知识点形成了一个完整的知识体系：

1. **进程定义** → **多道程序设计** → **进程状态**：这是进程管理的基础
2. **进程创建** → **进程终止** → **进程控制块**：这是进程生命周期的管理
3. **线程概念** → **多线程执行** → **地址空间**：这是线程管理的基础
4. **多线程 vs 多进程** → **线程控制块** → **PThreads**：这是并发编程的实践

**整体流程**：
- 程序被加载为进程
- 进程包含一个或多个线程
- 线程是CPU调度的基本单位
- 操作系统通过PCB和TCB管理进程和线程
- 调度器决定哪个线程运行

## 实际应用案例

### 案例1：Web服务器
\`\`\`
主进程：
    while (true) {
        accept connection
        create thread to handle request
    }

工作线程：
    read request
    process request
    send response
    exit
\`\`\`

### 案例2：生产者-消费者问题
\`\`\`
生产者线程：
    while (true) {
        produce item
        put item in buffer
    }

消费者线程：
    while (true) {
        get item from buffer
        consume item
    }
\`\`\`

### 案例3：并行计算
\`\`\`
主线程：
    split data into chunks
    create worker threads
    wait for all threads
    combine results

工作线程：
    process assigned chunk
    return result
\`\`\`

## 常见错误和易错点

### 1. 混淆进程和线程
- **错误**：认为线程是独立的程序
- **正确**：线程是进程内的执行单元，共享进程资源

### 2. 忽视线程同步
- **错误**：多个线程同时访问共享数据而不同步
- **正确**：需要使用互斥锁、信号量等同步机制

### 3. 不理解fork()的行为
- **错误**：认为fork()只返回一次
- **正确**：fork()在父进程和子进程中各返回一次

### 4. 忽视上下文切换开销
- **错误**：创建过多线程而不考虑切换开销
- **正确**：合理控制线程数量，使用线程池

### 5. 不理解地址空间共享
- **错误**：认为线程有独立的地址空间
- **正确**：线程共享进程的地址空间，每个线程有自己的栈

## 课件总结

本课件介绍了进程和线程的基本概念：

1. **进程的定义和特性**：进程是正在执行的程序实例，是资源分配的基本单位。

2. **多道程序设计**：允许多个进程共享CPU，提高系统效率。

3. **进程的创建和终止**：通过fork()和exec()创建进程，有四种终止条件。

4. **进程状态**：运行、就绪、阻塞三种基本状态及其转换。

5. **进程控制块**：操作系统维护的关于进程信息的数据结构。

6. **线程的概念**：进程内的执行单元，是CPU调度的基本单位。

7. **多线程执行**：利用多核处理器，提高程序性能。

8. **地址空间和线程**：线程共享进程地址空间，每个线程有自己的栈。

9. **多线程 vs 多进程**：根据应用场景选择合适的并发模型。

10. **线程控制块**：存储线程执行上下文的数据结构。

11. **PThreads API**：POSIX标准的线程编程接口。

这些内容为后续学习进程同步、进程通信、死锁等奠定了坚实基础。

## 复习建议

1. **理解概念**：重点理解进程和线程的区别，以及各自的优缺点
2. **画状态图**：画出进程状态转换图，理解状态转换条件
3. **编程实践**：编写使用fork()和PThreads的程序
4. **做练习题**：通过练习题巩固知识
5. **重点复习**：进程状态转换、fork()机制、线程共享和同步
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Define process (slide wording). · 用课件原文定义 process。 | **EN:** A running program. / **中文：** 运行中的程序（A running program）。 |
| 2 | List the three basic process states. · 列出进程的三种基本状态。 | **EN:** Running, Ready, Blocked. / **中文：** Running（运行）、Ready（就绪）、Blocked（阻塞）。 |
| 3 | When does a running process enter Blocked state? · 运行中的进程何时进入 Blocked？ | **EN:** When it waits for an event it cannot complete immediately (e.g. disk I/O, waiting for input). / **中文：** 等待无法立即完成的事件时（如磁盘 I/O、等待输入）。 |
| 4 | PCB fields (slide p.14). · PCB 字段（课件 p.14）。 | **EN:** PID, parent process, memory management info, file descriptors, priority, used CPU time; execution context: PC, SP, registers. / **中文：** PID、父进程、内存管理信息、文件描述符、优先级、已用 CPU 时间；执行上下文：PC、SP、寄存器。 |
| 5 | After fork() — same vs different (slide p.9). · fork() 后相同与不同（课件 p.9）。 | **EN:** Different address spaces; same memory image, PC, registers, and open file handles. / **中文：** 不同地址空间；相同内存映像、PC、寄存器、打开文件句柄。 |
| 6 | What does exec() do? · exec() 做什么？ | **EN:** Replaces the current process image with a new program; typically called after fork(). / **中文：** 用新程序替换当前进程映像；通常在 fork() 之后调用。 |
| 7 | Ready → Running — who decides? · Ready → Running 由谁决定？ | **EN:** The OS scheduler selects a ready process/thread and dispatches it to the CPU. / **中文：** OS 调度器从 ready 队列选出进程/线程并分派到 CPU。 |
| 8 | Define thread. · 定义 thread。 | **EN:** A unit of execution within a process. / **中文：** 进程内的执行单元（unit of execution within a process）。 |
| 9 | Where is an idle thread's PC and SP stored? · 未运行线程的 PC 和 SP 存在哪里？ | **EN:** In its TCB in memory; the CPU's PC/SP point at whichever thread is currently running. / **中文：** 存在内存中该线程的 TCB 里；CPU 的 PC/SP 指向当前正在运行的线程。 |
| 10 | Threads share vs own — code, data, heap, stack. · 线程共享什么、各自拥有什么？ | **EN:** Share code, data, and heap; each thread has its own stack. / **中文：** 共享 code、data、heap；每个线程拥有独立 stack。 |
| 11 | Thread vs process — which is lighter to create? · 创建 thread 还是 process 更轻？ | **EN:** Thread — it shares the address space and does not require a full resource duplicate. / **中文：** Thread 更轻——共享地址空间，无需复制全部资源。 |
| 12 | Two benefits of multithreading (slide p.22). · 多线程的两个好处（课件 p.22）。 | **EN:** (1) Overlap I/O with computation — one thread waits while another uses CPU; (2) parallel speedup on multi-core (e.g. each thread processes a segment of a large array). / **中文：** （1）I/O 与计算重叠——一线程等待 I/O 时另一线程用 CPU；（2）多核并行加速（如大数组分段并行处理）。 |

`,Xg=`# WK3-CPU-Scheduling

## 课件概述
本课件介绍了CPU调度的基本概念和常用算法。CPU调度是操作系统中最核心的功能之一，它决定了在多个就绪进程中哪个进程获得CPU使用权。课件从调度的必要性入手，详细讲解了上下文切换、进程行为、调度环境和目标，然后介绍了非抢占式调度算法（FCFS、SJF）和抢占式调度算法（RR、优先级调度、多级反馈队列）。这些内容对于理解操作系统的并发执行和性能优化至关重要。

## 必须掌握的知识点

### 1. Need for CPU Scheduling (CPU调度的必要性)

![CPU调度必要性：多道程序设计需要在进程之间切换CPU](./images/WK3-Need-Scheduling.png)
*图片来源：COMP30023 Lecture WK3, Based on TB Figure 2-1*

#### What（是什么）
CPU调度是操作系统决定哪个进程或线程获得CPU使用权的过程。在单核CPU系统中，一次只能运行一个进程，多道程序设计需要在进程之间切换CPU。

**核心问题**：
- CPU一次只能运行一个进程
- 多个进程需要共享CPU
- 调度算法决定哪个进程接下来运行

**调度单元**：
- 可以是进程（单线程进程）
- 也可以是线程（多线程进程）
- 调度策略是 **task-agnostic**（任务无关）的——同一套算法既能调度进程也能调度线程；本课件主要用进程举例，但策略对两者都适用（对应 slide p.3）

> **非考补充（Not Examinable，对应 slide p.29）**：课件末尾提到一些**线程专属**的调度策略，明确标注不在考试范围，仅作了解：
> - **Gang scheduling**（成组调度）：把同一进程的多个线程同时调度到多核上，减少同步等待
> - **Processor affinity**（处理器亲和性）：尽量让线程留在同一核上，利用热缓存
> - **Hierarchical scheduling**（分层调度）：先选进程、再在进程内选线程
> 线程级调度更多见 Week 4 及之后内容。

#### Why（为什么重要）
CPU调度的重要性：

1. **系统效率**：合理的调度可以提高CPU利用率
2. **响应时间**：影响用户交互的响应速度
3. **吞吐量**：影响单位时间内完成的任务数量
4. **公平性**：确保所有进程都能获得CPU时间

**实际例子**：
- 当你同时运行浏览器、音乐播放器和文档编辑器时，操作系统需要决定哪个程序使用CPU
- 合理的调度可以让用户感觉所有程序都在同时运行

#### How（如何工作/实现）
CPU调度的实现机制：

1. **调度器 (Scheduler)**：
   - 从就绪队列中选择进程
   - 根据调度算法做出决策

2. **调度时机**：
   - 进程从运行状态转为阻塞状态（非抢占式）
   - 进程从运行状态转为就绪状态（抢占式）
   - 进程从阻塞状态转为就绪状态（抢占式）
   - 进程终止

3. **调度策略**：
   - 根据系统目标选择不同的调度算法
   - 不同的算法有不同的性能特征

#### 关键术语
- **CPU Scheduling**：CPU调度，决定哪个进程使用CPU
- **Scheduler**：调度器，执行调度的程序
- **Ready Queue**：就绪队列，等待CPU的进程队列

#### 常见问题
- **Q：调度和上下文切换有什么区别？**
  A：调度是决定哪个进程运行；上下文切换是实际切换进程的过程。

- **Q：什么时候发生调度？**
  A：进程阻塞、时间片用完、更高优先级进程就绪、进程终止时。

---

### 2. Context Switch (上下文切换)

#### What（是什么）
上下文切换是从一个执行进程或线程切换到另一个的过程。这是操作系统实现多任务的核心机制。

**线程上下文切换**（同一进程内的线程）：
- 保存当前线程的执行上下文到TCB
- 从TCB加载另一个线程的执行上下文到CPU

**进程上下文切换**（不同进程的线程）：
- 保存/加载执行上下文（同线程切换）
- 加载内存管理相关状态（如页表指针）
- 刷新TLB（在具有虚拟内存的分页系统中）

**执行上下文包括**：
- 程序计数器 (PC)
- 栈指针 (SP)
- 通用寄存器
- 程序状态字 (PSW)

#### Why（为什么重要）
上下文切换的重要性：

1. **多任务实现**：允许多个进程共享CPU
2. **并发执行**：提供并发的假象
3. **资源管理**：在进程之间公平分配CPU时间
4. **系统响应**：及时响应用户请求

**实际例子**：
- 当进程A请求I/O时，操作系统保存A的上下文，切换到进程B
- I/O完成后，操作系统恢复A的上下文，继续执行A

#### How（如何工作/实现）
上下文切换的详细流程：

**进程上下文切换**：
1. 保存当前进程的PC、SP、寄存器到PCB
2. 保存内存管理信息（页表基址寄存器）
3. 刷新TLB（Translation Lookaside Buffer）
4. 更新进程状态
5. 选择下一个进程
6. 从PCB恢复下一个进程的PC、SP、寄存器
7. 加载内存管理信息
8. 继续执行

**上下文切换的开销**：
- 保存/恢复寄存器：几微秒
- 刷新TLB：导致后续内存访问变慢
- 缓存失效：导致缓存命中率下降

**示例场景**：

![上下文切换示例：Process A和Process B之间的切换流程](./images/WK3-Context-Switch-Scenario.png)
*图片来源：COMP30023 Lecture WK3, Slide 5*

\`\`\`
时间线：
1. 进程A运行
2. 系统调用（B开始I/O并阻塞），上下文切换到A
3. I/O中断（B的I/O完成），上下文切换到B
4. 系统调用（B退出），上下文切换到A
\`\`\`

#### 关键术语
- **Context Switch**：上下文切换，切换进程的过程
- **Execution Context**：执行上下文，程序计数器、栈指针、寄存器
- **TLB (Translation Lookaside Buffer)**：地址转换缓存

#### 常见问题
- **Q：上下文切换的开销有多大？**
  A：通常需要几微秒到几十微秒，包括保存/恢复寄存器、切换内存映射等。

- **Q：如何减少上下文切换开销？**
  A：使用更大的时间片、减少进程数量、使用线程（线程切换开销更小）。

---

### 3. Process Behavior (进程行为)

#### What（是什么）
进程行为描述了进程如何使用CPU和I/O设备。大多数进程在计算和I/O请求之间交替。

**两种进程类型**：
1. **CPU密集型进程 (CPU-bound)**：
   - 有长的CPU突发
   - 大部分时间在计算
   - 例子：科学计算、视频编码

2. **I/O密集型进程 (I/O-bound)**：
   - 有短的CPU突发
   - 大部分时间在等待I/O
   - 例子：文本编辑器、Web浏览器

**CPU突发模式**：
- 进程执行计算 → CPU突发
- 进程请求I/O → I/O突发
- 交替进行

![进程行为：CPU密集型 vs I/O密集型进程的突发模式](./images/WK3-Process-Behavior.png)
*图片来源：COMP30023 Lecture WK3, TB 2-39*

#### Why（为什么重要）
理解进程行为的重要性：

1. **调度优化**：根据进程类型选择调度策略
2. **资源分配**：合理分配CPU和I/O资源
3. **系统性能**：平衡CPU和I/O设备的使用
4. **响应时间**：I/O密集型进程需要更快的响应

**实际例子**：
- I/O密集型进程（如文本编辑器）需要快速响应用户输入
- CPU密集型进程（如视频编码）需要持续的CPU时间

#### How（如何工作/实现）
进程行为的管理：

**调度策略的考虑**：
- I/O密集型进程应该优先运行，以保持I/O设备忙碌
- CPU密集型进程应该获得较长的CPU时间，以减少上下文切换

**实际观察**：
- 通过监控进程的CPU和I/O使用模式
- 动态调整调度策略

#### 关键术语
- **CPU-bound**：CPU密集型，大部分时间在计算
- **I/O-bound**：I/O密集型，大部分时间在等待I/O
- **CPU Burst**：CPU突发，进程使用CPU的时间段
- **I/O Burst**：I/O突发，进程等待I/O的时间段

#### 常见问题
- **Q：如何判断进程是CPU密集型还是I/O密集型？**
  A：观察进程的CPU使用率和I/O等待时间。CPU密集型进程CPU使用率高，I/O密集型进程I/O等待时间长。

- **Q：为什么I/O密集型进程需要优先调度？**
  A：因为它们频繁进行I/O操作，快速调度它们可以保持I/O设备忙碌，提高系统整体效率。

---

### 4. Preemptive vs. Non-preemptive Scheduling (抢占式 vs 非抢占式调度)

#### What（是什么）
这是两种基本的调度方式，决定了进程何时释放CPU。

**非抢占式调度**：
- 选择一个进程运行，直到它阻塞或自愿释放CPU
- 只在必要时进行上下文切换（进程无法使用CPU时）
- 实现简单，开销小

**抢占式调度**：
- 选择一个进程运行一个固定时间（时间片/量子）
- 如果时间片用完，进程被停止，调度器选择另一个进程
- 需要时钟中断来将CPU控制权交还给调度器
- 通常导致更多的上下文切换

**关键区别**：
- 非抢占式：进程运行直到阻塞或完成
- 抢占式：进程运行直到时间片用完或阻塞

#### Why（为什么重要）
调度方式的重要性：

1. **响应时间**：抢占式调度提供更好的响应时间
2. **公平性**：抢占式调度防止进程独占CPU
3. **系统开销**：非抢占式调度开销更小
4. **适用环境**：不同的环境需要不同的调度方式

**实际例子**：
- **批处理系统**：适合非抢占式调度，因为作业不需要交互
- **交互式系统**：适合抢占式调度，因为需要快速响应用户

#### How（如何工作/实现）
调度方式的实现：

**非抢占式调度的实现**：
1. 调度器选择一个就绪进程
2. 进程运行直到：
   - 请求I/O并阻塞
   - 自愿释放CPU
   - 进程终止
3. 调度器选择下一个进程

**抢占式调度的实现**：
1. 设置定时器中断（时钟中断）
2. 调度器选择一个就绪进程
3. 进程运行直到：
   - 时间片用完（时钟中断）
   - 请求I/O并阻塞
   - 更高优先级进程就绪
4. 保存当前进程上下文
5. 调度器选择下一个进程

#### 关键术语
- **Preemptive Scheduling**：抢占式调度，可以强制切换进程
- **Non-preemptive Scheduling**：非抢占式调度，进程运行直到阻塞
- **Quantum/Time Slice**：时间片，进程运行的最大时间
- **Clock Interrupt**：时钟中断，触发调度

#### 常见问题
- **Q：什么时候使用非抢占式调度？**
  A：批处理系统、实时系统（某些情况下）、对响应时间要求不高的系统。

- **Q：抢占式调度的时间片应该设多大？**
  A：通常10-100毫秒，需要在响应时间和上下文切换开销之间平衡。

---

### 5. Scheduling Environments and Goals (调度环境和目标)

#### What（是什么）
不同的系统环境有不同的调度目标。

**批处理系统 (Batch Systems)**：
- 有（可能周期性的）作业需要运行
- 作业不需要与用户交互
- 适合非抢占式调度或长量子的抢占式调度

**交互式系统 (Interactive Systems)**：
- 作业需要与用户交互
- 用户期望系统快速响应
- 抢占式调度是必需的

**调度目标**：
- **所有系统**：
  - 公平性：**comparable processes should get comparable service**（可比的进程应得到可比的服务，对应 slide p.10 原文）；进程获得公平的CPU份额
  - 资源高效使用：例如，让I/O密集型进程使用CPU以保持I/O设备忙碌，同时通过减少不必要的上下文切换次数来降低开销（Reducing overhead by minimising context switches）
- **批处理系统**：
  - 最大化吞吐量：单位时间内完成的进程数
  - 最小化周转时间：从进程提交到完成的时间
- **交互式系统**：
  - 最小化响应时间：从发出命令到收到响应的时间

#### Why（为什么重要）
调度环境和目标的重要性：

1. **系统设计**：根据环境选择调度算法
2. **性能优化**：针对特定目标优化调度
3. **用户体验**：交互式系统需要快速响应
4. **资源利用**：最大化系统资源利用率

**实际例子**：
- Web服务器：需要最小化响应时间
- 科学计算集群：需要最大化吞吐量

#### How（如何工作/实现）
调度目标的实现：

**公平性**：
- 使用轮转调度
- 防止进程饥饿

**吞吐量最大化**：
- 减少上下文切换开销
- 优化作业调度顺序

**响应时间最小化**：
- 使用抢占式调度
- 优先调度I/O密集型进程

**周转时间最小化**：
- 使用短作业优先调度
- 减少等待时间

#### 关键术语
- **Throughput**：吞吐量，单位时间内完成的进程数
- **Turnaround Time**：周转时间，从提交到完成的时间
- **Response Time**：响应时间，从发出命令到收到响应的时间
- **Fairness**：公平性，进程获得公平的CPU份额

#### 常见问题
- **Q：如何衡量调度算法的好坏？**
  A：根据调度目标，使用吞吐量、周转时间、响应时间等指标。

- **Q：不同的调度目标之间有什么冲突？**
  A：例如，最大化吞吐量可能增加响应时间，需要根据系统需求平衡。

---

### 6. Non-preemptive Scheduling Algorithms (非抢占式调度算法)

#### What（是什么）
非抢占式调度算法选择一个进程运行直到它阻塞或完成。

**FCFS (First-come First-served，先来先服务)**：
- 按照进程进入就绪队列的顺序运行
- FIFO队列实现
- 简单易实现

**SJF (Shortest Job First，短作业优先)**：
- 选择CPU突发最短的进程运行
- 需要估计CPU突发长度
- 对于给定的作业集，平均周转时间最优

#### Why（为什么重要）
非抢占式调度算法的重要性：

1. **简单性**：实现简单，开销小
2. **可预测性**：进程运行时间可预测
3. **适用场景**：批处理系统、实时系统

**实际例子**：
- 打印队列：先来先服务
- 作业调度：短作业优先

#### How（如何工作/实现）
FCFS的实现：

**FCFS算法**：
1. 进程按到达顺序进入就绪队列
2. 调度器选择队首进程运行
3. 进程运行直到阻塞或完成
4. 如果进程阻塞，它回到队尾
5. 重复步骤2-4

**FCFS分析**：
- 优点：简单，易于实现，上下文切换开销低
- 缺点：
  - 护航效应：短进程在长进程后面等待
  - 可能导致饥饿：如果运行的进程永不释放CPU

**SJF算法**：
1. 估计每个进程的CPU突发长度
2. 选择突发最短的进程运行
3. 进程运行直到阻塞或完成
4. 重复步骤1-3

**SJF分析**：
- 优点：平均周转时间最优
- 缺点：
  - 需要估计CPU突发长度
  - 长进程可能饥饿

**FCFS示例**：

![FCFS示例：FIFO队列中进程的调度过程](./images/WK3-FCFS-Example.png)
*图片来源：COMP30023 Lecture WK3, Slide 14*

\`\`\`
就绪队列：A, B, C, D
执行顺序：A → B → C → D
\`\`\`

**FCFS 带 blocking 的队列动态（对应 slide p.14，A–F 六进程）**：真实场景中进程会在运行中阻塞、之后又变 ready，队列会反复变动：
\`\`\`
初始 ready queue（按到达）：F E D C B A
调度 A 运行 → A 执行中请求 I/O → A 阻塞（移出 ready queue，进 blocked）
调度 B 运行 → ... → A 的 I/O 完成 → A 重新进入 ready queue 尾部
继续调度队首...
\`\`\`
关键点：**阻塞的进程离开 ready queue**，I/O 完成后**回到队尾**（不是队首），所以 FCFS 的"先来先服务"是对 ready 状态而言，blocked→ready 是一次重新入队。

**RR 带 blocking 的队列动态（对应 slide p.21–22）**：RR 中进程可能在中途阻塞，也可能时间片没用完就阻塞：
\`\`\`
ready queue: A B C
A 跑满 quantum → 回队尾；B 跑
B 跑到一半请求 I/O → B 阻塞（不回队尾，因为 quantum 没用完）
C 接着跑 → 此时 B 的 I/O 完成 → B 回 ready queue 尾部
注意：B 重新入队时不会"补"上它没用完的 quantum
\`\`\`
关键点：**阻塞（时间片未用完）≠ 用完时间片降级**；进程阻塞后重新 ready 时按"新到"处理，排在队尾。

**SJF示例**：

![SJF示例：短作业优先调度的Gantt图和周转时间计算](./images/WK3-SJF-Example.png)
*图片来源：COMP30023 Lecture WK3, Slide 16*

\`\`\`
进程    突发时间
A       5
B       11
C       7
D       3

执行顺序：D(3) → A(5) → C(7) → B(11)
周转时间：
TD = 3 - 0 = 3
TA = 8 - 0 = 8
TC = 15 - 0 = 15
TB = 26 - 0 = 26
平均周转时间 = (3+8+15+26)/4 = 13
\`\`\`

#### 关键术语
- **FCFS (First-come First-served)**：先来先服务
- **SJF (Shortest Job First)**：短作业优先
- **Convoy Effect**：护航效应，短进程在长进程后面等待
- **Starvation**：饥饿，进程长时间无法获得CPU

#### 常见问题
- **Q：FCFS的护航效应是什么？**
  A：当一个长CPU密集型进程运行时，所有短I/O密集型进程都在等待，导致I/O设备空闲。

- **Q：SJF为什么是最优的？**
  A：对于给定的作业集，SJF的平均周转时间最小。

---

### 7. Preemptive Scheduling Algorithms (抢占式调度算法)

#### What（是什么）
抢占式调度算法可以强制切换进程，提供更好的响应时间和公平性。

**Round Robin (RR，轮转调度)**：
- 每个进程运行一个时间片（量子）
- 时间片用完后，进程被移到队尾
- 循环执行直到所有进程完成

**Priority Scheduling (优先级调度)**：
- 为每个进程分配优先级
- 调度器选择优先级最高的进程
- 可以是静态或动态优先级

**Multi-level Feedback Queue (MLFQ，多级反馈队列)**：
- 多个队列，每个队列有不同的优先级
- 进程可以在队列之间移动
- I/O密集型进程获得更高优先级

#### Why（为什么重要）
抢占式调度算法的重要性：

1. **响应时间**：提供更好的响应时间
2. **公平性**：防止进程独占CPU
3. **适应性**：可以根据进程行为调整调度
4. **交互性**：适合交互式系统

**实际例子**：
- 操作系统：使用MLFQ调度进程
- 实时系统：使用优先级调度

#### How（如何工作/实现）
Round Robin的实现：

**RR算法**：
1. 设置时间片（量子）大小
2. 进程按到达顺序进入就绪队列
3. 调度器选择队首进程运行
4. 进程运行一个时间片或直到阻塞
5. 如果时间片用完，进程移到队尾
6. 重复步骤3-5

**RR分析**：
- 优点：简单，易于实现，无饥饿
- 缺点：
  - 周转时间可能较长（Not good for turnaround time）
  - 倾向于CPU密集型进程（favours CPU-bound over I/O-bound）：CPU密集型进程每次都能用满整个时间片，而I/O密集型进程经常在时间片用完前阻塞，导致I/O密集型进程获得的CPU时间相对较少

**时间片大小的影响**：
- 时间片太长：退化为FCFS
- 时间片太短：上下文切换开销大
- 经验法则：时间片应该比上下文切换时间大100倍以上

**优先级调度的实现**：
1. 为每个进程分配优先级
2. 调度器选择优先级最高的进程
3. 优先级可以是：
   - 静态：进程创建时确定
   - 动态：根据进程行为调整
4. 为避免饥饿：每个时钟中断（clock tick）后降低当前运行进程的优先级
5. 如果运行进程的优先级已降至低于下一个最高就绪进程的优先级，则发生抢占（Preempt process if its priority dropped below that of the next highest process）

**MLFQ的实现**：
1. 创建多个队列，每个队列有不同的优先级
2. 每个队列有不同的时间片
3. 进程从高优先级队列开始
4. 如果进程用完时间片，移到低优先级队列
5. 如果进程在时间片内阻塞，留在当前队列
6. 高优先级队列的进程优先运行

![MLFQ结构：4级优先级队列，每级有不同时间片](./images/WK3-MLFQ-Structure.png)
*图片来源：COMP30023 Lecture WK3, Slide 26*

![MLFQ流程：新进程进入最高优先级队列，用完时间片则降级](./images/WK3-MLFQ-Flow.png)
*图片来源：COMP30023 Lecture WK3, Slide 27*

**MLFQ的三个可配置参数**（Parameters include）：
- **队列数量**（Number of queues）
- **每队列的调度算法**（Scheduling algorithm per queue，例如RR或FCFS）
- **每队列的时间片**（Quantum for each queue）

**课件具体配额（对应 slide p.26–27，4 级队列）**：
- Priority 4（最高）= 2 quanta
- Priority 3 = 4 quanta
- Priority 2 = 8 quanta
- Priority 1（最低）= 16 quanta

即**优先级越低、时间片越长**：交互/I/O 进程在高优先级队列用小时间片快速响应；CPU 密集进程沉到低队列后获得大时间片，减少切换开销。

**MLFQ分析**：
- 优点：
  - I/O密集型进程获得高优先级
  - CPU密集型进程获得大时间片
  - 不需要预知进程行为
- 缺点：
  - 实现复杂
  - 可能饥饿（通过优先级提升缓解）

**RR示例**：

![Round Robin示例：时间片=4时的Gantt图和周转时间计算](./images/WK3-RR-Example.png)
*图片来源：COMP30023 Lecture WK3, Slide 19*

\`\`\`
进程    突发时间    到达时间
A       16         0
B       3          2
C       8          3

时间片 = 4

执行顺序：
0-4: A (剩余12)
4-7: B (完成)
7-11: C (剩余4)
11-15: A (剩余8)
15-19: C (完成)
19-23: A (剩余4)
23-27: A (完成)

周转时间：
TA = 27 - 0 = 27
TB = 7 - 2 = 5
TC = 19 - 3 = 16
平均周转时间 = (27+5+16)/3 = 16
\`\`\`

**响应时间计算**（Response Time）：
响应时间 = 第一次运行的时间 - 到达就绪队列的时间

\`\`\`
RA = 0 - 0 = 0
RB = 4 - 2 = 2
RC = 7 - 3 = 4
RAVG = (0 + 2 + 4)/3 = 2
\`\`\`

RR 对响应时间表现良好（Good for response time），因为每个进程都有机会在较短时间内首次获得CPU运行。

#### 关键术语
- **Round Robin (RR)**：轮转调度
- **Priority Scheduling**：优先级调度
- **Multi-level Feedback Queue (MLFQ)**：多级反馈队列
- **Quantum/Time Slice**：时间片

#### 常见问题
- **Q：时间片大小如何选择？**
  A：通常10-100毫秒，需要在响应时间和上下文切换开销之间平衡。

- **Q：MLFQ如何防止饥饿？**
  A：通过定期提升进程的优先级（优先级提升）。

- **Q：优先级调度的缺点是什么？**
  A：可能导致低优先级进程饥饿。

## 知识点之间的联系

这些知识点形成了一个完整的知识体系：

1. **调度必要性** → **上下文切换** → **进程行为**：这是调度的基础
2. **调度环境和目标** → **调度算法**：这是调度策略的选择
3. **非抢占式算法** → **抢占式算法**：这是调度方式的演进

**整体流程**：
- 操作系统根据系统环境和目标选择调度算法
- 调度器从就绪队列选择进程
- 上下文切换执行进程切换
- 根据进程行为调整调度策略

## 实际应用案例

### 案例1：Linux调度器
\`\`\`
Linux使用CFS（完全公平调度器）：
- 基于虚拟运行时间
- 红黑树组织就绪进程
- 优先级影响时间片分配
- 适合交互式系统
\`\`\`

### 案例2：Windows调度器
\`\`\`
Windows使用多级反馈队列：
- 32个优先级级别
- 动态调整优先级
- 时间片根据优先级变化
- 适合桌面系统
\`\`\`

### 案例3：实时系统调度
\`\`\`
实时系统使用优先级调度：
- 严格的时间约束
- 抢占式调度
- 优先级反转问题
- 使用优先级继承协议
\`\`\`

## 常见错误和易错点

### 1. 混淆调度和上下文切换
- **错误**：认为调度和上下文切换是同一概念
- **正确**：调度是决策，上下文切换是执行

### 2. 不理解时间片的影响
- **错误**：认为时间片越小越好
- **正确**：时间片太小会导致上下文切换开销过大

### 3. 忽视进程行为
- **错误**：对所有进程使用相同的调度策略
- **正确**：根据进程类型（CPU密集型 vs I/O密集型）调整策略

### 4. 不理解饥饿问题
- **错误**：认为所有调度算法都是公平的
- **正确**：某些算法（如SJF、优先级调度）可能导致饥饿

### 5. 混淆周转时间和响应时间
- **错误**：认为周转时间就是响应时间
- **正确**：周转时间是从提交到完成，响应时间是从请求到第一次响应

## 课件总结

本课件介绍了CPU调度的核心概念和算法：

1. **CPU调度的必要性**：单核CPU需要多道程序设计，调度器决定进程运行顺序。

2. **上下文切换**：切换进程的机制，包括保存/恢复执行上下文和内存管理信息。

3. **进程行为**：CPU密集型和I/O密集型进程的不同特征。

4. **调度环境和目标**：批处理系统和交互式系统的不同目标。

5. **非抢占式调度算法**：
   - FCFS：简单，但可能导致护航效应
   - SJF：最优平均周转时间，但需要预测

6. **抢占式调度算法**：
   - RR：简单公平，但周转时间可能较长
   - 优先级调度：灵活，但可能饥饿
   - MLFQ：适应性强，但实现复杂

这些内容为理解操作系统的并发执行和性能优化奠定了基础。

## 复习建议

1. **理解概念**：重点理解不同调度算法的优缺点和适用场景
2. **计算练习**：练习计算周转时间和响应时间
3. **画图辅助**：画出调度执行的时间线图
4. **比较算法**：比较不同算法的性能特征
5. **重点复习**：MLFQ的工作原理和优势
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Turnaround time and response time formulas. · 周转时间与响应时间公式。 | **EN:** Turnaround = completion time − arrival time; response = time of first run − arrival time. / **中文：** 周转时间 = 完成时间 − 到达时间；响应时间 = 第一次运行时间 − 到达时间。 |
| 2 | SJF example — average turnaround (slide p.16). · SJF 例子——平均周转时间（课件 p.16）。 | **EN:** Processes D(3), A(5), C(7), B(11) → turnarounds 3, 8, 15, 26 → TAVG = (3+8+15+26)/4 = 13. / **中文：** 进程 D(3)、A(5)、C(7)、B(11) → 周转 3、8、15、26 → 平均 = (3+8+15+26)/4 = 13。 |
| 3 | Define convoy effect in FCFS (slide p.15 full wording). · 定义 FCFS 的 convoy effect（课件 p.15 原文）。 | **EN:** When a long CPU-bound process runs, all short I/O-bound processes wait behind it, leaving I/O devices idle. / **中文：** 长 CPU 密集型进程运行时，所有短 I/O 密集型进程在其后等待，导致 I/O 设备空闲。 |
| 4 | Round Robin — what happens when time quantum is too small? · RR 时间片过小会怎样？ | **EN:** Context-switch overhead dominates; throughput drops. / **中文：** 上下文切换开销占主导，吞吐量下降。 |
| 5 | SJF optimality for turnaround (slide p.17). · SJF 对周转时间的最优性（课件 p.17）。 | **EN:** For a given job set, SJF minimises average turnaround time (if burst times known). / **中文：** 对给定作业集，SJF 最小化平均周转时间（若已知 burst time）。 |
| 6 | Preemptive vs non-preemptive scheduling. · 抢占式 vs 非抢占式调度。 | **EN:** Preemptive: OS can remove a running process (timer interrupt, higher priority); non-preemptive: process runs until it blocks or finishes. / **中文：** 抢占式：OS 可剥夺运行中进程；非抢占式：进程运行到阻塞或结束才切换。 |
| 7 | MLFQ quanta per priority queue (slide p.26–27). · MLFQ 各优先级队列的时间片（课件 p.26–27）。 | **EN:** Priority 4 (highest): 2 quanta; Priority 3: 4; Priority 2: 8; Priority 1 (lowest): 16. New processes start at highest priority; use up quanta → move down. / **中文：** Priority 4（最高）：2；Priority 3：4；Priority 2：8；Priority 1（最低）：16。新进程从最高优先级队列开始，用完配额则降级。 |
| 8 | MLFQ — what if a process blocks before using its quantum? · MLFQ——进程在时间片用完前阻塞会怎样？ | **EN:** If a process blocks within its quantum, it stays in the same queue (does not demote). / **中文：** 若进程在时间片内阻塞，留在当前队列（不降级）。 |
| 9 | Fairness in scheduling — slide wording. · 调度公平性的课件表述。 | **EN:** Comparable processes should get comparable service. / **中文：** 可比的进程应获得可比的服务（comparable processes get comparable service）。 |
| 10 | Priority scheduling — starvation risk (slide p.25). · 优先级调度——饥饿风险（课件 p.25）。 | **EN:** Low-priority processes may never get CPU; aging can gradually raise priority over waiting time. / **中文：** 低优先级进程可能永远得不到 CPU；aging 可随等待时间逐渐提高优先级。 |
| 11 | Process context switch — why flush TLB? · 进程 context switch——为何 flush TLB？ | **EN:** Process switch loads a new page table; TLB entries from the old process are invalid and must be flushed. / **中文：** 进程切换加载新页表；旧进程的 TLB 项失效，必须 flush TLB。 |
| 12 | Blocked process re-queued — FCFS/RR with I/O. · 带 I/O 阻塞时，进程返回 ready 队列排到何处？ | **EN:** FCFS: return to tail of ready queue; RR: treated as new arrival at tail (unused quantum not restored). / **中文：** FCFS：回到 ready 队列尾部；RR：当作新到达排到队尾（未用完的时间片不补）。 |

`,Vg=`# WK3-IPC

## 课件概述
本课件介绍了进程间通信（IPC）的基本概念和实现机制。重点讲解了竞态条件（Race Condition）问题及其解决方案。课件从进程间通信的必要性入手，详细分析了竞态条件产生的原因和危害，然后介绍了临界区、互斥、锁变量、忙等待、优先级反转、严格交替、测试并设置锁（TSL）、阻塞等概念。这些内容是理解并发编程和操作系统同步机制的基础。

## 必须掌握的知识点

### 1. Interprocess Communication (IPC，进程间通信)

#### What（是什么）
进程间通信是指多个进程之间交换数据和共享资源的机制。由于每个进程有独立的地址空间，进程间通信需要特殊的机制来实现。

**IPC的必要性**：
- 进程经常需要与其他进程通信
- 需要共享资源和数据
- 合作进程需要有序执行

**IPC机制**：
- 共享内存（Shared Memory）
- 管道（Pipes）
- 文件（Files）
- 套接字（Sockets）
- 信号（Signals）

**进程与线程**：
- 本课件中进程和线程可互换使用
- 相同的问题和解决方案适用于两者

#### Why（为什么重要）
IPC的重要性：

1. **数据共享**：多个进程需要访问相同数据
2. **任务协作**：复杂任务需要多个进程协作完成
3. **模块化设计**：将系统分解为独立的进程
4. **并发执行**：允许多个任务并行执行

**实际例子**：
- Web服务器：主进程接收请求，工作进程处理请求
- 数据库系统：多个客户端进程同时访问数据库
- 操作系统：不同系统服务之间需要通信

#### How（如何工作/实现）
IPC的实现机制：

**共享内存**：
- 多个进程映射同一块物理内存
- 进程直接读写共享内存
- 需要同步机制防止竞态条件

**管道**：
- 单向数据流
- 一个进程写入，另一个进程读出
- 匿名管道（父子进程）和命名管道（任意进程）

**消息传递**：
- 进程通过发送/接收消息通信
- 消息队列、邮箱等

#### 关键术语
- **IPC (Interprocess Communication)**：进程间通信
- **Shared Memory**：共享内存
- **Race Condition**：竞态条件
- **Critical Region**：临界区

#### 常见问题
- **Q：进程间通信和线程间通信有什么区别？**
  A：线程共享地址空间，可以直接访问共享变量；进程需要特殊的IPC机制。

- **Q：为什么需要同步机制？**
  A：防止多个进程/线程同时访问共享资源导致数据不一致。

---

### 2. Race Conditions (竞态条件)

![竞态条件示例：两个线程同时访问共享栈变量](./images/WK3-Race-Condition-Stack.png)

#### What（是什么）
竞态条件是多个进程/线程访问共享资源时，结果取决于代码执行时序的问题。

**竞态条件的特征**：
- 多个进程/线程访问共享资源
- 结果取决于指令执行顺序
- 结果不确定，每次运行可能不同

**竞态条件的示例**：
\`\`\`c
Stack aStack; // 全局变量

void myStackFunction() {
    if (isEmpty(aStack)) {
        return;
    }
    int element = pop(aStack);
    // 使用element
}
\`\`\`

**问题分析**：
假设栈中只有一个元素：

**执行顺序1**（正确）：
1. 线程A检查isEmpty(aStack) → false
2. 线程A执行pop → 栈为空
3. 线程B检查isEmpty(aStack) → true
4. 线程B返回（没有元素可处理）

**执行顺序2**（错误）：
1. 线程A检查isEmpty(aStack) → false
2. 线程B检查isEmpty(aStack) → false
3. 线程A执行pop → 栈为空
4. 线程B执行pop → **程序逻辑设计为永远不会发生！**

#### Why（为什么重要）
竞态条件的重要性：

1. **数据一致性**：可能导致数据损坏
2. **程序正确性**：破坏程序的逻辑
3. **难以调试**：问题难以重现和定位
4. **系统稳定性**：可能导致系统崩溃

**实际例子**：
- 银行账户：两个ATM同时取款可能导致余额错误
- 购物车：多个用户同时修改购物车可能导致数据丢失
- 文件系统：多个进程同时写入文件可能导致数据损坏

![竞态条件执行轨迹：CPU分配和执行顺序导致的竞态问题](./images/WK3-Race-Condition-Execution.png)

#### How（如何工作/实现）
竞态条件的产生条件：

**必要条件**：
1. **共享资源**：多个进程/线程访问同一资源
2. **并发执行**：多个进程/线程同时执行
3. **修改操作**：至少有一个进程/线程修改资源
4. **无同步**：没有适当的同步机制

**竞态条件的检测**：
- 代码审查
- 压力测试
- 静态分析工具

#### 关键术语
- **Race Condition**：竞态条件
- **Shared Resource**：共享资源
- **Indeterminate**：不确定的

#### 常见问题
- **Q：如何避免竞态条件？**
  A：使用同步机制（如互斥锁）保护共享资源。

- **Q：竞态条件和死锁有什么区别？**
  A：竞态条件是时序问题，死锁是资源等待问题。

---

### 3. Critical Region and Mutual Exclusion (临界区和互斥)

#### What（是什么）
**临界区（Critical Region）**：访问共享资源的代码部分。

**互斥（Mutual Exclusion）**：保证在任何时刻只有一个进程/线程在临界区内执行。

![互斥可视化：进程A和B在时间线上的临界区互斥访问](./images/WK3-Mutex-Visualized.png)

**互斥的可视化**：
\`\`\`
进程A：          进程B：
    ↓               ↓
[非临界区]      [非临界区]
    ↓               ↓
[获取锁]        [等待锁]
    ↓               ↓
[临界区]        [等待锁]
    ↓               ↓
[释放锁]        [获取锁]
    ↓               ↓
[非临界区]      [临界区]
\`\`\`

**关键理解**：如果临界区具有互斥属性，前面竞态条件中的"执行顺序2"（两个线程同时进入临界区）将永远不会发生。

**互斥实现方法的分层结构**（Mutual Exclusion approaches）：
\`\`\`
互斥（Mutual Exclusion）
├── 忙等待（Busy Waiting）
│   ├── 严格交替（Strict Alternation）
│   └── TSL + 忙等待（TSL with busy waiting）
└── 阻塞（Blocking）
    └── 互斥锁（Mutex）
\`\`\`

#### Why（为什么重要）
互斥的重要性：

1. **数据保护**：防止数据损坏
2. **程序正确性**：保证程序逻辑正确
3. **系统稳定性**：防止系统崩溃
4. **资源管理**：有序管理共享资源

**实际例子**：
- 数据库事务：保证事务的原子性
- 文件操作：防止多个进程同时写入
- 打印队列：保证打印任务有序执行

#### How（如何工作/实现）
互斥的实现机制：

**锁机制**：
- 获取锁：进入临界区前获取锁
- 释放锁：离开临界区时释放锁
- 只有持有锁的进程/线程可以进入临界区

**互斥的条件**：
1. **互斥**：任何时刻最多一个进程在临界区内
2. **无假设**：不对CPU速度或数量做假设
3. **不阻塞**：临界区外的进程不能阻塞其他进程
4. **无饥饿**：进程不会永远等待进入临界区

#### 关键术语
- **Critical Region**：临界区，访问共享资源的代码
- **Mutual Exclusion**：互斥，保证独占访问
- **Lock**：锁，控制访问的机制

#### 常见问题
- **Q：临界区应该设多大？**
  A：尽可能小，只包含访问共享资源的代码。

- **Q：忘记释放锁会怎样？**
  A：其他进程永远无法进入临界区，导致死锁或饥饿。

---

### 4. Lock Variables (锁变量)

![锁变量实现：带context switch的lock变量代码示意](./images/WK3-Lock-Variables.png)

#### What（是什么）
锁变量是实现互斥的一种简单方法，使用变量来表示锁的状态。

**锁变量的实现**：
\`\`\`c
int lock = 0; // 全局变量

void threadFunction() {
    while (lock != 0) {
        // 忙等待
    }
    lock = 1;
    criticalRegion();
    lock = 0;
    // 非临界区
}
\`\`\`

**问题分析**：
如果在线程退出循环后、设置lock=1之前发生上下文切换：

1. 线程A检查lock != 0 → false，退出循环
2. 线程B检查lock != 0 → false，退出循环
3. 线程A执行lock = 1，进入临界区
4. 线程B执行lock = 1，进入临界区

**结果**：两个线程同时在临界区内！

#### Why（为什么重要）
锁变量的重要性：

1. **基本同步机制**：理解同步的基础
2. **问题暴露**：展示简单实现的缺陷
3. **设计启发**：启发更复杂的同步机制

**实际例子**：
- 单核系统：可能因为上下文切换导致问题
- 多核系统：多个CPU同时执行导致问题

#### How（如何工作/实现）
锁变量的改进：

**原子操作**：
- 测试和设置必须是原子操作
- 硬件支持（如TSL指令）

**忙等待**：
- 进程循环检查锁状态
- 浪费CPU资源
- 可能导致优先级反转

#### 关键术语
- **Lock Variable**：锁变量
- **Busy Waiting**：忙等待
- **Atomic Operation**：原子操作

#### 常见问题
- **Q：为什么简单的锁变量实现有问题？**
  A：因为测试和设置是两个独立操作，可能被中断。

- **Q：如何解决锁变量的问题？**
  A：使用原子操作（如TSL指令）。

---

### 5. Busy Waiting and Priority Inversion (忙等待和优先级反转)

#### What（是什么）
**忙等待（Busy Waiting）**：进程循环检查条件，不释放CPU。课件原文（slide p.17–18）："**busy waiting – spin until lock becomes 0**"——线程在一个循环里自旋，直到锁变量变成 0 才进临界区。

**上下文切换的形式定义（对应 slide p.18）**：context switch = **OS 停止一个线程、启动另一个线程**的过程，期间要保存旧线程的 PC/SP/寄存器到它的 TCB，并从新线程的 TCB 恢复。它是竞态条件的"温床"——任何在"检查"和"设置"之间发生的 context switch 都可能破坏不变式。

**优先级反转（Priority Inversion）**：高优先级进程等待低优先级进程释放资源，但低优先级进程无法获得CPU。

**优先级反转示例**：
- 系统运行两个进程：高优先级Phigh和低优先级Plow
- 调度规则：Phigh总是获得CPU（除非阻塞）
- 某时刻：
  - Plow在临界区内
  - Phigh变为就绪（如I/O完成）
  - Phigh开始运行，忙等待（无法进入临界区）
  - Plow永远无法退出临界区（因为无法获得CPU）
  - Phigh永远循环等待

#### Why（为什么重要）
忙等待和优先级反转的重要性：

1. **CPU浪费**：忙等待浪费CPU资源
2. **系统性能**：降低系统整体性能
3. **实时性**：影响实时系统的响应时间
4. **死锁风险**：可能导致系统死锁

**实际例子**：
- 实时系统：优先级反转可能导致任务错过截止时间
- 嵌入式系统：资源受限，忙等待影响性能

#### How（如何工作/实现）
忙等待的改进：

**阻塞机制**：
- 进程等待时释放CPU
- 使用系统调用（如yield、sleep）
- 减少CPU浪费

**优先级继承**：
- 低优先级进程继承高优先级进程的优先级
- 确保低优先级进程能尽快释放资源

#### 关键术语
- **Busy Waiting**：忙等待，循环检查条件
- **Priority Inversion**：优先级反转
- **Priority Inheritance**：优先级继承

#### 常见问题
- **Q：忙等待有什么缺点？**
  A：浪费CPU资源，可能导致优先级反转。

- **Q：如何避免优先级反转？**
  A：使用阻塞机制或优先级继承协议。

---

### 6. Strict Alternation (严格交替)

![严格交替：Thread A和Thread B通过turn变量交替执行临界区](./images/WK3-Strict-Alternation.png)

#### What（是什么）
严格交替是忙等待的一种实现方式，两个进程/线程轮流执行临界区。

**实现代码**：
\`\`\`c
int turn; // 全局变量

void threadA() {
    while(TRUE) {
        while (turn != 0) {} // 忙等待
        criticalRegionA();
        turn = 1;
        nonCriticalRegionA();
    }
}

void threadB() {
    while(TRUE) {
        while (turn != 1) {} // 忙等待
        criticalRegionB();
        turn = 0;
        nonCriticalRegionB();
    }
}
\`\`\`

**执行流程**：
- turn = 0：线程A进入临界区
- turn = 1：线程B进入临界区
- 交替执行

**问题**：
- 课件原话（slide p.35）："**Thread B is blocking Thread A … but Thread B is outside of the critical region**"——线程 B 在临界区**外**却仍能阻塞线程 A 进入临界区
- 违反互斥条件 3（临界区外的进程不能阻塞其他进程）：进度性被破坏

#### Why（为什么重要）
严格交替的重要性：

1. **基本概念**：理解同步的基础
2. **问题暴露**：展示忙等待的局限性
3. **设计启发**：启发更好的同步机制

**实际例子**：
- 生产者-消费者问题：需要交替执行
- 读者-写者问题：需要控制访问顺序

#### How（如何工作/实现）
严格交替的实现：

**执行流程**：
1. 线程A检查turn != 0 → false（turn = 0）
2. 线程A进入临界区
3. 线程A设置turn = 1
4. 线程A执行非临界区
5. 线程B检查turn != 1 → false（turn = 1）
6. 线程B进入临界区
7. 线程B设置turn = 0
8. 重复

**问题场景**：
- 线程A设置turn = 1后
- 线程B在非临界区执行很长时间
- 线程A想再次进入临界区，但必须等待线程B

#### 关键术语
- **Strict Alternation**：严格交替
- **Turn Variable**：轮转变量

#### 常见问题
- **Q：严格交替有什么缺点？**
  A：进程必须轮流执行，即使另一个进程不在临界区。

- **Q：什么时候适合使用严格交替？**
  A：当两个进程需要严格交替执行时。

---

### 7. Test and Set Lock (TSL，测试并设置锁)

![TSL原子操作：将LOCK复制到REGISTER并设置LOCK为非零值](./images/WK3-TSL-Atomic.png)

#### What（是什么）
TSL是硬件支持的原子操作，用于实现锁机制。

**TSL指令**：
\`\`\`
TSL REGISTER, LOCK
\`\`\`
1. 将LOCK的内容复制到REGISTER
2. 将非零值存储到LOCK

![TSL忙等待汇编实现：enter_region和leave_region的完整代码](./images/WK3-TSL-Assembly.png)

**关键特性**：
- 测试和设置是原子操作
- 不可被中断
- 硬件支持

**使用TSL实现互斥**：
\`\`\`c
// 进入临界区
while (TRUE) {
    TSL REGISTER, LOCK
    if (REGISTER == 0) {
        break; // 获取锁
    }
    // 否则继续循环（忙等待）
}

// 临界区代码

// 离开临界区
LOCK = 0;
\`\`\`

#### Why（为什么重要）
TSL的重要性：

1. **原子性**：保证操作的原子性
2. **硬件支持**：高效的同步机制
3. **互斥保证**：正确实现互斥
4. **简单实现**：简化锁的实现

**实际例子**：
- 操作系统内核：实现进程同步
- 多线程程序：实现线程安全

#### How（如何工作/实现）
TSL的实现：

**硬件实现**：
- CPU提供TSL指令
- 总线锁定，防止其他CPU访问内存
- 原子操作

**软件实现**：
- 使用TSL指令实现锁
- 忙等待检查锁状态
- 释放锁时设置为0

#### 关键术语
- **TSL (Test and Set Lock)**：测试并设置锁
- **Atomic Operation**：原子操作
- **Hardware Support**：硬件支持

#### 常见问题
- **Q：TSL和普通锁变量有什么区别？**
  A：TSL是原子操作，普通锁变量的测试和设置是分开的。

- **Q：TSL的缺点是什么？**
  A：仍然是忙等待，浪费CPU资源。

---

### 8. Blocking (阻塞)

#### What（是什么）
阻塞是另一种实现互斥的方式，进程等待时释放CPU。课件里 Blocking 这一支下的锁统称为 **Mutex**（互斥锁，对应 slide p.20）：忙等待靠自旋，阻塞靠把线程挂起并在锁可用时唤醒。所以"mutex"在课件语境里常特指**阻塞型**的互斥实现，与 spinlock 相对。

**阻塞机制**：
- 检查是否可以进入临界区
- 如果不能，释放CPU（yield或sleep）
- 等待锁可用时被唤醒

**Yield Mutex**：
\`\`\`c
void lock() {
    while (TSL(LOCK)) {
        yield(); // 释放CPU
    }
}

void unlock() {
    LOCK = 0;
}
\`\`\`

**与忙等待的区别**：
- 忙等待：循环检查，占用CPU
- 阻塞：释放CPU，等待唤醒

#### Why（为什么重要）
阻塞的重要性：

1. **CPU效率**：释放CPU，让其他进程使用
2. **系统性能**：提高系统整体性能
3. **响应性**：提高系统响应性
4. **资源利用**：更好地利用系统资源

**阻塞的缺点**（Cons）：
- **饥饿**：某些进程可能长时间得不到调度
- **系统调用开销**：yield/sleep等系统调用产生额外开销
- **上下文切换开销**：阻塞会导致额外的上下文切换

**实际例子**：
- 操作系统：进程等待I/O时阻塞
- Web服务器：线程等待请求时阻塞
- 数据库：事务等待锁时阻塞

#### How（如何工作/实现）
阻塞的实现：

**系统调用**：
- yield()：让出CPU，重新调度
- sleep()：休眠指定时间
- wait()：等待事件

**唤醒机制**：
- 信号（Signal）
- 条件变量（Condition Variable）
- 事件（Event）

#### 关键术语
- **Blocking**：阻塞，释放CPU等待
- **Yield**：让出CPU
- **Sleep**：休眠

#### 常见问题
- **Q：阻塞和忙等待有什么区别？**
  A：阻塞释放CPU，忙等待占用CPU。

- **Q：什么时候使用阻塞，什么时候使用忙等待？**
  A：等待时间短用忙等待，等待时间长用阻塞。

---

### 9. Deadlocks (死锁) ⚠️ 非考试内容（Not Examinable）

#### What（是什么）
死锁是多个进程相互等待对方释放资源，导致所有进程都无法继续执行的情况。课件定义原话（slide p.41）：进程在"**waiting for an event that only another process in the set can cause**"（等待一个只有该进程组里另一个进程才能引发的事件）。

**死锁的条件**（四个必要条件）：
1. **互斥**：资源不能共享
2. **占有并等待**：进程持有资源并等待其他资源
3. **非抢占**：资源不能被强制释放
4. **循环等待**：存在进程等待的循环链

**死锁示例**：
\`\`\`c
// 进程A
Lock(M1);
DoWork();
Lock(M2);  // 等待进程B释放M2
DoWork();
Release_lock(M1);
Release_lock(M2);

// 进程B
Lock(M2);
DoWork();
Lock(M1);  // 等待进程A释放M1
DoWork();
Release_lock(M2);
Release_lock(M1);
\`\`\`

#### Why（为什么重要）
死锁的重要性：

1. **系统停滞**：导致系统无法继续执行
2. **资源浪费**：占用资源无法释放
3. **难以检测**：死锁可能难以发现
4. **难以恢复**：需要特殊机制恢复

**实际例子**：
- 数据库系统：多个事务相互等待
- 操作系统：多个进程相互等待资源
- 网络系统：多个节点相互等待

#### How（如何工作/实现）
死锁的处理：

**预防**：
- 破坏四个必要条件之一
- 资源有序分配
- 银行家算法

**避免**：
- 动态检查资源分配
- 安全状态检测

**检测和恢复**：
- 定期检查死锁
- 终止进程或回滚事务

#### 关键术语
- **Deadlock**：死锁
- **Circular Wait**：循环等待
- **Resource Allocation Graph**：资源分配图

#### 常见问题
- **Q：如何预防死锁？**
  A：破坏四个必要条件之一，如资源有序分配。

- **Q：死锁和饥饿有什么区别？**
  A：死锁是相互等待，饥饿是单方面等待。

## 知识点之间的联系

这些知识点形成了一个完整的知识体系：

1. **IPC需求** → **竞态条件** → **临界区和互斥**：这是问题的发现和定义
2. **锁变量** → **忙等待** → **优先级反转**：这是简单实现的问题
3. **严格交替** → **TSL** → **阻塞**：这是解决方案的演进
4. **死锁（非考试）**：这是同步机制可能引入的新问题，但本课件明确标为Not Examinable，了解概念即可

**整体流程**：
- 进程需要通信和共享资源
- 并发访问导致竞态条件
- 使用临界区和互斥保护共享资源
- 使用锁机制实现互斥
- 处理忙等待和优先级反转问题
- 避免死锁

## 实际应用案例

### 案例1：生产者-消费者问题（扩展理解，不作为本课件重点）
\`\`\`c
// 共享缓冲区
int buffer[SIZE];
int in = 0, out = 0;
mutex_t mutex;
sem_t empty, full;

// 生产者
void producer() {
    while (1) {
        produce_item();
        wait(&empty);
        lock(&mutex);
        put_item_in_buffer();
        unlock(&mutex);
        signal(&full);
    }
}

// 消费者
void consumer() {
    while (1) {
        wait(&full);
        lock(&mutex);
        get_item_from_buffer();
        unlock(&mutex);
        signal(&empty);
        consume_item();
    }
}
\`\`\`

### 案例2：读者-写者问题（扩展理解，不作为本课件重点）
\`\`\`c
// 共享数据
int data;
mutex_t mutex;
sem_t rw_mutex;
int readers = 0;

// 读者
void reader() {
    while (1) {
        lock(&mutex);
        readers++;
        if (readers == 1) {
            lock(&rw_mutex);
        }
        unlock(&mutex);
        
        read_data();
        
        lock(&mutex);
        readers--;
        if (readers == 0) {
            unlock(&rw_mutex);
        }
        unlock(&mutex);
    }
}

// 写者
void writer() {
    while (1) {
        lock(&rw_mutex);
        write_data();
        unlock(&rw_mutex);
    }
}
\`\`\`

### 案例3：银行账户系统（扩展理解，不作为本课件重点）
\`\`\`c
// 银行账户
typedef struct {
    int balance;
    mutex_t lock;
} Account;

// 转账
void transfer(Account *from, Account *to, int amount) {
    lock(&from->lock);
    lock(&to->lock);
    
    if (from->balance >= amount) {
        from->balance -= amount;
        to->balance += amount;
    }
    
    unlock(&to->lock);
    unlock(&from->lock);
}
\`\`\`

## 常见错误和易错点

### 1. 混淆临界区和互斥
- **错误**：认为临界区就是互斥
- **正确**：临界区是代码，互斥是保证

### 2. 忘记释放锁
- **错误**：获取锁后忘记释放
- **正确**：确保所有路径都释放锁

### 3. 把死锁当作本课件考试重点
- **错误**：花大量时间背死锁四条件、银行家算法或资源分配图
- **正确**：死锁在本课件明确Not Examinable，知道它是同步机制可能引入的等待问题即可

### 4. 忙等待滥用
- **错误**：所有等待都用忙等待
- **正确**：根据等待时间选择忙等待或阻塞

### 5. 忽视优先级反转
- **错误**：不考虑进程优先级
- **正确**：使用优先级继承协议

## 课件总结

本课件介绍了进程间通信和同步的核心概念：

1. **进程间通信**：进程需要通信和共享资源，需要特殊的IPC机制。

2. **竞态条件**：并发访问共享资源导致不确定结果。

3. **临界区和互斥**：使用临界区保护共享资源，保证互斥访问。

4. **锁变量**：简单实现互斥，但可能有问题。

5. **忙等待和优先级反转**：忙等待浪费CPU，可能导致优先级反转。

6. **严格交替**：轮流执行临界区，但可能阻塞其他进程。

7. **TSL**：硬件支持的原子操作，正确实现互斥。

8. **阻塞**：释放CPU等待，提高系统效率。

9. **死锁**：Not Examinable，作为同步问题背景了解即可。

这些内容为理解并发编程和操作系统同步机制奠定了基础。

## 复习建议

1. **理解概念**：重点理解竞态条件和互斥的概念
2. **代码分析**：分析锁变量、严格交替、TSL的实现
3. **问题识别**：重点识别竞态条件、临界区和互斥失败；死锁只需背景了解
4. **解决方案**：理解不同同步机制的优缺点
5. **重点复习**：TSL实现、忙等待vs阻塞；死锁条件不作为考试重点
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Define race condition. · 定义 race condition。 | **EN:** Outcome depends on the interleaving of accesses to shared mutable state by concurrent threads. / **中文：** 结果取决于并发线程对共享可变状态访问的交错顺序。 |
| 2 | Critical region vs mutual exclusion. · Critical region 与 mutual exclusion 的关系。 | **EN:** Critical region = code accessing shared data; mutual exclusion = property that only one thread is in its critical region at a time. / **中文：** Critical region = 访问共享数据的代码段；mutual exclusion = 同一时刻只有一个线程在其 critical region 内的性质。 |
| 3 | Four conditions for a good mutual-exclusion solution. · 良好互斥解的四个条件。 | **EN:** (1) Mutual exclusion; (2) no assumptions about CPU speed/count; (3) no blocking outside CR (progress); (4) no starvation. / **中文：** （1）互斥；（2）不对 CPU 速度/数量做假设；（3）临界区外不阻塞他人（progress）；（4）无饥饿。 |
| 4 | Why is a plain lock variable unsafe? · 普通 lock 变量为何不安全？ | **EN:** Test-and-set is not atomic — two threads can both see unlocked and enter the critical region. / **中文：** 检测-设置不是原子操作——两线程可能都看到 unlocked 并进入 critical region。 |
| 5 | Busy waiting definition (slide wording). · Busy waiting 的课件原文表述。 | **EN:** Busy waiting — spin until lock becomes 0; repeatedly test the lock without yielding. / **中文：** Busy waiting——自旋直到锁变为 0；反复检测锁而不让出 CPU。 |
| 6 | TSL (Test-and-Set Lock) — one-line mechanism. · TSL 一句话机制。 | **EN:** Atomically read old value and set lock to 1 in one indivisible hardware instruction. / **中文：** 一条不可分割的硬件指令原子地读出旧值并将锁置 1。 |
| 7 | Strict alternation failure — exact slide quote (p.35). · 严格交替失败——课件原文（p.35）。 | **EN:** Thread B is blocking Thread A … but Thread B is outside of the critical region. / **中文：** Thread B is blocking Thread A … but Thread B is outside of the critical region（B 在临界区外仍阻塞 A）。 |
| 8 | Define context switch. · 定义 context switch。 | **EN:** OS stops one thread and starts another — save/restore register state (PC, SP, registers). / **中文：** OS 停一线程、启另一线程——保存/恢复寄存器状态（PC、SP、寄存器）。 |
| 9 | Busy-waiting lock vs blocking mutex (slide p.20). · 忙等待锁 vs 阻塞 mutex（课件 p.20）。 | **EN:** Busy waiting = spin until lock free; blocking mutex = thread sleeps until lock available (releases CPU). / **中文：** 忙等待 = 自旋直到锁可用；阻塞 mutex = 线程挂起直到锁可用（释放 CPU）。 |
| 10 | Stack pop race — what goes wrong? (slide p.7–8). · 栈 pop 竞态——错在哪？（课件 p.7–8）。 | **EN:** Two threads both see stack non-empty, both pop — second pop on empty stack violates program logic. / **中文：** 两线程都看到栈非空，都 pop——第二次 pop 空栈，违反程序逻辑。 |
| 11 | Define priority inversion. · 定义 priority inversion。 | **EN:** High-priority thread waits for a lock held by low-priority thread; low-priority thread cannot run (e.g. busy-waiting high-priority thread blocks it). / **中文：** 高优先级线程等待低优先级线程持有的锁；低优先级线程无法运行（如高优先级忙等待阻塞了它）。 |
| 12 | Read-modify-write race — counter example. · Read-modify-write 竞态——counter 例子。 | **EN:** Two threads both read counter=5, both write 6 — one update lost. / **中文：** 两线程都读到 counter=5，都写 6——一次更新丢失。 |

`,Jg=`# WK4 - Memory Management

## 课件概述

本课件介绍了操作系统中的**内存管理（Memory Management）**机制。内存管理是操作系统最核心的功能之一，它负责将有限的物理内存资源合理地分配给多个进程使用。课件从最原始的无内存抽象方案讲起，逐步引出两种关键的内存管理方式：**Base and Limit Registers（基址和界限寄存器）**和**Paged Virtual Memory（分页虚拟内存）**。后半部分重点讲解了页表（Page Table）、页面置换算法（Page Replacement Algorithms）以及TLB（Translation Lookaside Buffer）等关键概念。

---

## 必须掌握的知识点

### 1. 为什么需要内存管理？

**What（是什么）：** 内存管理是操作系统负责管理计算机物理内存资源的机制，决定哪些进程可以使用哪些内存区域。

**Why（为什么）：**
- **支持多道程序设计（Multiprogramming）：** 为了提高CPU利用率，内存中需要同时存放多个进程，确保CPU总有就绪进程可以执行。
- **安全性（Security）：** 需要实现进程之间以及进程与操作系统之间的内存隔离（Isolation），防止一个进程访问或破坏另一个进程的数据。
- **突破物理内存限制：** 使得单个进程可以使用比物理内存更大的地址空间（虚拟内存），且所有进程的总内存需求可以超过实际物理内存大小。

**How（怎么实现）：** 通过引入**内存抽象（Memory Abstraction）**，将逻辑地址空间（Logical Address Space）与物理地址空间（Physical Address Space）分离，由硬件在运行时进行地址翻译。

---

![无内存抽象：程序直接使用物理地址](./images/WK4-No-Abstraction.png)

### 2. 无内存抽象的早期系统

**What（是什么）：** 早期系统中，进程直接引用物理内存地址。例如指令 \`MOV REGISTER, [1000]\` 直接将物理地址1000处的内容复制到寄存器。

**注意可寻址单元（Addressable Unit）：** 示例中每个内存地址对应4个字节（addressable unit = 4 bytes），但现代机器最常见的是**字节寻址（byte-addressable）**，即每个地址对应1个字节。

**Why（有问题）：**
- **无法实现多道程序：** 如果两个程序都被加载到内存中，它们可能引用相同的物理地址，导致冲突。例如程序1使用地址0-16380，程序2使用地址16384-32764，如果程序1中有一条 \`JMP\` 指令错误地跳转到了程序2的地址空间，就会产生严重错误。
- **安全问题：** 进程可以任意访问和修改其他进程甚至操作系统的内存数据。

**How（解决方案）：** 引入内存抽象，将程序使用的逻辑地址与实际物理地址分离。

**早期模型的具体运作（对应 slide p.3）：** 在没有任何内存抽象的最早多道模型里，**同一时刻只有正在运行的那个进程在 RAM 里**，其它进程都放在磁盘上；**每次 context switch 都做一次完整 swap**——把当前进程整体换出到磁盘、把下一个进程整体换进来。这当然慢，正是后来 base/limit、再到分页要解决的动力。

---

![Base and Limit Registers：两个程序加载到物理内存中的地址映射](./images/WK4-Base-Limit-Registers.png)

### 3. Base and Limit Registers（基址和界限寄存器）

**What（是什么）：** 一种简单的内存管理机制，使用两个CPU寄存器来确定进程在物理内存中的位置和大小：
- **Base Register（基址寄存器）：** 存储进程在物理内存中的起始地址
- **Limit Register（界限寄存器）：** 存储进程的大小（长度）

**Why（为什么）：** 实现基本的地址重定位（Relocation）和内存保护（Protection），允许多个进程安全地共享物理内存。

**How（怎么工作）：**

1. **加载进程时：** OS在物理内存中找到一块连续的空闲区域，将进程加载进去。OS将起始地址写入base register，将进程大小写入limit register。这些值保存在PCB中，当进程被调度到CPU时加载到CPU寄存器中。

2. **地址翻译（每次内存访问时）：**
   - CPU硬件（MMU）首先检查：\`逻辑地址 < limit register\`？
   - 如果**不满足**（地址越界）：CPU触发异常中断（Exception/Interrupt），终止进程
   - 如果**满足**：\`物理地址 = 逻辑地址 + base register\`，然后将物理地址发送到内存总线

3. **示例：**
   - 进程2的base = 16384，limit = 16384
   - 执行 \`JMP 28\` 时：28 < 16384 ✓，物理地址 = 28 + 16384 = 16412

**MMU（Memory Management Unit）：** CPU中负责执行地址翻译的硬件单元。

---

![MMU架构：CPU发送虚拟地址给MMU，MMU翻译后发送物理地址给内存](./images/WK4-MMU-Architecture.png)

### 4. 连续内存分配管理

**What（是什么）：** 使用base和limit registers时，OS需要管理物理内存的分配和回收，因为每个进程需要连续的物理内存。

**How（怎么管理）：**

![链表管理内存：内存状态与对应的链表结构](./images/WK4-Linked-List.png)

**跟踪内存使用情况：** 使用**按地址排序的链表**（Linked List sorted by address）记录内存状态，每个节点包含：
- 类型标记：H（Hole，空闲）或 P（Process，已分配）
- 起始地址
- 长度
- 指向下一个节点的指针

**分配策略（Allocation Strategies）：**
| 策略 | 描述 | 优点 | 缺点 |
|------|------|------|------|
| **First-fit** | 从头开始搜索，分配第一个足够大的空闲块 | 快速，搜索最少 | 可能导致内存前部碎片化 |
| **Best-fit** | 搜索整个列表，分配最小的能满足需求的空闲块 | 保留大的空闲块 | 慢，容易产生很小的无用碎片 |
| **Worst-fit** | 分配最大的空闲块 | 产生最大的剩余块 | 慢，效果通常最差 |

**回收（Deallocation）：** 进程终止或被swap out时释放内存，需要合并相邻的空闲块（hole）：
- 释放的区域变成hole
- 如果右边是hole → 合并
- 如果左边是hole → 合并
- 如果两边都是hole → 三块合并成一个大hole

**Swapping（交换）：** 将不运行的进程换出到磁盘（backing store），需要时再换回内存。这使得所有进程的总地址空间可以超过物理内存。

---

![内存回收：进程终止后的4种合并情况](./images/WK4-Deallocating-Memory.png)

### 5. External Fragmentation（外部碎片）

**What（是什么）：** 随着进程的加载和移除，空闲内存被分割成很多小块，虽然总空闲空间足够容纳新进程，但没有足够大的连续空间。

**Why（为什么是问题）：** 导致内存利用率下降，即使有足够的总空闲内存也无法分配给需要连续内存的进程。

**How（如何解决）：** 后续的分页机制可以有效解决外部碎片问题。

---

### 6. Base and Limit Registers的局限性

- 整个进程必须加载到**连续的**物理内存地址中
- 进程不能大于物理内存
- 需要更多空间时，必须将整个进程swap到磁盘
- 存在外部碎片问题
- 如果进程的内存使用增长，OS可能需要移动整个进程

---

![分页模型：逻辑内存→页表→物理内存的映射关系](./images/WK4-Paging-Model.png)

### 7. Paged Virtual Memory（分页虚拟内存）

**What（是什么）：** 现代操作系统使用的内存管理方式，将进程的地址空间和物理内存都划分为固定大小的块：
- **Page（页）：** 进程逻辑地址空间的固定大小块
- **Page Frame（页框/帧）：** 物理内存的固定大小块
- 页和页框大小相同，每个页框恰好容纳一个页

**Why（为什么）：**
- 解决外部碎片问题：不要求连续物理内存
- 允许进程地址空间大于物理内存：只有部分页面需要在内存中
- 页面可以在磁盘和内存之间自由移动，且可以放入任意可用的页框

**How（怎么工作）：**
- 通过**Page Table（页表）** 建立页到页框的映射
- 不同的页可以映射到不相邻的页框
- 不是所有页面都需要同时在物理内存中
- 页面在生命周期内可以在磁盘和内存之间多次移动

---

### 8. Page Table（页表）

**What（是什么）：** 每个进程都有一个页表，由OS维护，记录该进程每个页映射到物理内存的哪个页框。

**How（怎么组织）：**
- **Page Table Base Register (PTBR)：** 指向页表的起始地址，值保存在PCB中
- 页表中每个条目（Page Table Entry, PTE）包含：
  - **Frame Number（页框号）：** 该页映射到的物理页框
  - **Present/Absent Bit（在位位）：** 1=页在物理内存中，0=页在磁盘上（如果为0，MMU不会翻译地址，触发page fault）
  - **Referenced Bit（引用位）：** 当页被访问时，MMU自动设为1
  - **Modified Bit（修改位）：** 当页被写入时，MMU自动设为1

---

![分页地址翻译示例：PA = (frame number × frame size) + offset](./images/WK4-Paging-Example.png)

### 9. 逻辑地址结构与地址翻译

**What（是什么）：** 在分页系统中，逻辑地址被分为两部分：

\`\`\`
|  Page Number (m-n bits)  |  Page Offset (n bits)  |
\`\`\`

- 逻辑地址长度为 m 位（地址空间大小 = 2^m）
- 页偏移占 n 位（页大小 = 2^n）
- 页号占 m-n 位（进程最多可以有 2^(m-n) 个页）

**How（地址翻译过程）：**

1. 从逻辑地址中提取 **page number** 和 **page offset**（offset = logical_address % page_size，即逻辑地址的低 n 位）
2. 用 page number 作为索引查找页表，找到对应的 **frame number**
3. 物理地址 = \`(frame number × frame size) + page offset\`
4. page offset 直接从逻辑地址复制到物理地址

**示例：**
- 页大小 = 4 bytes（2 bit offset）
- 逻辑地址 = 5（二进制 01|01）
  - Page 1, Offset 1
  - Page 1 映射到 Frame 6
  - 物理地址 = (6 × 4) + 1 = 25
- 逻辑地址 = 0（二进制 00|00）
  - Page 0, Offset 0
  - Page 0 映射到 Frame 5
  - 物理地址 = (5 × 4) + 0 = 20

**课件额外 offset 例子（对应 slide p.24，页大小仍 4）：**
- 逻辑地址 = 9 → \`9 mod 4 = 1\` → offset = 1（page = 9 div 4 = 2）
- 逻辑地址 = 14 → \`14 mod 4 = 2\` → offset = 2（page = 14 div 4 = 3）

**位运算分解示例（对应 slide p.25）：**
- m = 4 位逻辑地址 → 地址空间 = 2^4 = 16
- n = 2 位 offset → 页大小 = 2^2 = 4
- 页号位 = m − n = 2 → 进程最多 2^(m−n) = 2^2 = 4 页
- 即 \`地址空间 / 页大小 = 16 / 4 = 4 页\`，与公式一致

---

![MMU在分页系统中的工作流程：CPU→页表→物理内存](./images/WK4-MMU-Paged-System.png)

### 10. Internal Fragmentation（内部碎片）

**What（是什么）：** 分页系统中，进程的最后一页可能没有完全填满，造成空间浪费。

**示例：**
- 页大小 = 4 bytes，进程大小 = 13 bytes
- 需要 ⌈13/4⌉ = 4 页 = 16 bytes
- 内部碎片 = 16 - 13 = 3 bytes

**页大小的影响：**
| 页大小 | 内部碎片 | 页表大小 |
|--------|----------|----------|
| 大 | 更多（平均浪费更多） | 更小（页表条目更少） |
| 小 | 更少 | 更大（页表条目更多） |

这是一个需要权衡的trade-off。

---

### 11. Page Fault（缺页）

**What（是什么）：** 当进程访问一个不在物理内存中的页面（Present/Absent bit = 0）时，MMU触发page fault（内部中断）。

**How（OS如何处理）：**
1. 如果没有空闲页框，选择一个页面进行**驱逐（evict）**：
   - 如果被驱逐的页面被修改过（Modified bit = 1），写回磁盘
   - 如果没有被修改过，直接丢弃（因为磁盘上有原始副本）
2. 从磁盘读取所需页面，加载到空闲页框中
3. 更新页表
4. **重新执行**触发page fault的指令

---

### 12. Page Replacement Algorithms（页面置换算法）

**What（是什么）：** 当发生page fault且没有空闲页框时，需要选择哪个页面被驱逐到磁盘的策略。

#### (a) Optimal（最优算法）
- **策略：** 驱逐在未来最长时间内不会被访问的页面
- **优点：** 产生最少的page fault
- **缺点：** 无法实现（需要预知未来），仅作为比较基准

#### (b) FIFO（先进先出）
- **策略：** 驱逐在内存中停留时间最长的页面
- **实现：** 维护一个FIFO队列，最早加载的页面在队头
- **优点：** 简单
- **缺点：** 可能驱逐频繁使用的页面

#### (c) Second-chance（第二次机会）
- **策略：** FIFO的改进版，检查最老页面的Referenced bit：
  - R = 0：页面又老又没被最近使用，驱逐
  - R = 1：页面虽然老但最近被使用过，清除R bit，移到队尾（给第二次机会）
- **优点：** 利用局部性原理避免驱逐常用页面
- **课件定时场景（对应 slide p.35）：** "Page fault at time 20. A has R bit set (1)"——在时刻 20 发生缺页，队头是页面 A 且它的 R=1，于是 A **不被驱逐**，R 清 0、A 移到队尾，转而检查新的队头。这个例子强调 second-chance 的判断是"**老 + R 位**"两个条件同时看，而不是只看年龄。

#### (d) LRU（Least Recently Used，最近最少使用）
- **策略：** 驱逐最长时间未被访问的页面
- **实现：** 维护一个链表，最近使用的在头部，最久未使用的在尾部。每次内存引用时将对应页面移到头部。
- **优点：** 很好地利用局部性原理
- **缺点：** 硬件实现开销大，需要在每次内存引用时更新链表

---

### 13. Locality Principle（局部性原理）

**What（是什么）：** 大多数程序在访问内存时表现出的两种局部性模式：
- **Temporal Locality（时间局部性）：** 如果一个内存地址被访问，那么在不久的将来它很可能再次被访问（例如循环中的变量）
- **Spatial Locality（空间局部性）：** 如果一个内存地址被访问，那么附近的地址也很可能很快被访问（例如顺序执行的指令、数组遍历）

**Why（为什么重要）：** 这是页面置换算法（Second-chance、LRU）和TLB能够有效工作的理论基础。

---

![Aging算法示例：3个时钟周期内R位和计数器的变化](./images/WK4-Aging-Example.png)

### 14. Aging Algorithm（老化算法 - LRU近似）

**What（是什么）：** LRU的一种硬件近似实现，比精确LRU开销小得多。

**How（怎么工作）：**
1. 为每个页面维护一个 n 位的计数器
2. 在每个时钟中断（clock tick）时：
   - 所有计数器**右移1位**
   - 将该页面的**Referenced bit 插入到最左边**
   - 清除所有R bit
3. 发生page fault时，驱逐**计数器值最小**的页面

**计数器的含义：** 计数器高位的1越多，说明该页面最近越频繁被使用；高位的0越多，说明该页面越久没被使用。

**课件逐 tick 演算（对应 slide p.38–42，8-bit 计数器，pages 0–5，3 个时钟 tick）：**
- 每个时钟 tick：所有计数器先**右移 1 位**（高位补 0），再把本页当前 R 位**追加到最左边**，然后清所有 R 位
- 位模式示例：某页上一 tick 后是 \`X1000000\`（X 是更早的历史），本 tick 它又被引用（R=1）→ 右移得 \`0100000\` → 追加 R=1 → \`11000000\`
- **Page 1 有 2 个前导 0**：说明它在最近 2 个 tick 都没被引用（R=0 两次），计数器高位被 0 占住
- **Page 4 有 1 个前导 0**：只在最近 1 个 tick 没被引用
- 驱逐时选**计数器值最小**的页（即前导 0 最多的）——本例 Page 1 比 Page 4 更久没用，优先驱逐 Page 1
- 注意：因为只有 8 位，超过 8 个 tick 的历史会被移丢，所以 aging 是 LRU 的**近似**而非精确 LRU

**局限性：**
- **Aging可能驱逐并非最近最少使用的页面**（Aging may evict a page that was not the least recently used），它只是一个近似算法
- 每个时钟tick只记录1 bit信息，无法区分tick内早和晚的引用
- 计数器位数有限，无法区分很久以前被引用的页面（例如两个页面计数器都是0，但一个9个tick前被引用，另一个1000个tick前被引用）

---

![TLB条目结构：TLB valid bit + virtual page number + page frame number + other bits](./images/WK4-TLB.png)

### 15. TLB（Translation Lookaside Buffer）

**What（是什么）：** MMU中的一个**硬件缓存**，存储最近使用的页表条目的副本。

**Why（为什么需要）：** 在分页系统中，每次内存访问实际上需要**两次**内存访问——一次查页表，一次访问实际数据。TLB通过缓存页表条目来加速地址翻译。

**How（怎么工作）：**
- 使用**关联电路（Associative Circuitry）** 实现，所有条目并行查找
- 每个TLB条目存储：\`virtual page number | frame number | valid bit | ...\`
- **TLB Hit：** 在TLB中找到页表条目，直接用frame number进行地址翻译（快）
- **TLB Miss：** 在TLB中没找到，需要去内存查页表，然后将条目加载到TLB（如果TLB满了需要驱逐一个条目）

**TLB Valid Bit：** 表示该缓存条目是否有效。

**当前运行进程的页面被换出时的TLB处理：**
- 如果当前运行进程的某个页面被换出到磁盘，该页面在TLB中的对应条目变得无效（page不再映射到frame）
- 该TLB条目需要被**无效化**（invalidate）

**Context Switch时的TLB处理：**
- TLB中的条目只对当前运行的进程有效（不同进程的同一个虚拟页号可能映射到不同的物理页框）
- 一种策略是**flush TLB**（清除所有条目）
- 新运行的进程会经历大量TLB miss，TLB逐渐被重新填充

**页大小对TLB的影响：** 更大的页大小 → 每个TLB条目覆盖更大的地址范围 → TLB miss更少

---

## 关键术语

| 术语 | 英文 | 含义 |
|------|------|------|
| 逻辑地址 | Logical Address / Virtual Address | 程序使用的地址，需要翻译成物理地址 |
| 物理地址 | Physical Address | 实际内存硬件上的地址 |
| 页 | Page | 逻辑地址空间的固定大小块 |
| 页框 | Page Frame | 物理内存的固定大小块 |
| 页表 | Page Table | 记录页到页框映射的数据结构 |
| 缺页 | Page Fault | 访问不在物理内存中的页面时触发的中断 |
| 页面置换 | Page Replacement | 选择哪个页面被驱逐到磁盘 |
| 外部碎片 | External Fragmentation | 空闲内存分散成小块，无法满足大块连续请求 |
| 内部碎片 | Internal Fragmentation | 分配单元内未使用的空间 |
| TLB | Translation Lookaside Buffer | MMU中的页表缓存 |
| 局部性原理 | Locality Principle | 程序访问内存的时间和空间聚集性 |
| 交换 | Swapping | 将进程在内存和磁盘之间移动 |
| 重定位 | Relocation | 将逻辑地址转换为物理地址 |

---

## 常见问题

### Q1: Base and Limit Registers 和 Paging 的主要区别是什么？

| 特性 | Base & Limit | Paging |
|------|-------------|--------|
| 物理内存连续性 | 需要连续 | 不需要连续 |
| 外部碎片 | 有 | 无 |
| 内部碎片 | 无 | 有（最后一页） |
| 进程可以大于物理内存 | 不可以 | 可以（部分页面在磁盘） |
| 实现复杂度 | 简单 | 较复杂 |

### Q2: Page Fault 的处理流程是什么？

1. CPU触发中断 → 陷入内核
2. OS检查访问是否合法（保护检查）
3. 如果没有空闲帧，运行页面置换算法选择victim page
4. 如果victim page被modified（dirty），写回磁盘
5. 从磁盘调度所需页面到空闲帧
6. 更新页表（设置present bit, frame number等）
7. 重新执行引发page fault的指令

### Q3: 为什么Second-chance比FIFO好？

FIFO可能驱逐频繁使用的"老"页面。Second-chance通过检查Referenced bit，如果页面最近被访问过（R=1），就给它"第二次机会"而不是直接驱逐，这样能更好地保留频繁使用的页面。

### Q4: Aging 算法中计数器怎么解读？

- 计数器值越大（高位1越多）→ 最近越频繁使用 → 不应该被驱逐
- 计数器值越小（高位0越多）→ 越久没使用 → 应该优先被驱逐

---

## 知识点之间的联系

\`\`\`
多道程序设计 (WK1)
    ↓ 需要
内存管理 (本课件)
    ↓ 两种方式
Base & Limit Registers ──────→ 连续分配 → 外部碎片
    ↓ 解决
Paged Virtual Memory
    ↓ 核心组件
Page Table ──→ Page Fault ──→ Page Replacement Algorithms
    ↓ 性能优化                    ↓
TLB                     FIFO, Second-chance, LRU, Aging
\`\`\`

**与其他课件的联系：**
- **WK1（OS Overview）：** 内存管理是OS的核心职责之一，实现隔离和保护
- **WK2（Process）：** 每个进程有独立的地址空间，PCB中存储page table base register等信息
- **WK3（Scheduling）：** Swapping与调度密切相关，进程换出/换入影响调度决策
- **WK3（IPC）：** 内存隔离是保证进程安全通信的前提

---

## 实际应用案例

1. **Linux的内存管理：** Linux使用多级页表（Multi-level Page Table）来管理虚拟内存，支持4KB、2MB、1GB等不同页大小。

2. **x86-64架构的页表：** 使用4级页表结构，每级9位索引，支持48位虚拟地址空间（256TB）。

3. **数据库系统：** 数据库经常使用自己的buffer pool（类似OS的页面管理），使用LRU或Clock算法管理缓存页。

4. **嵌入式系统：** 某些嵌入式系统不使用虚拟内存，直接使用物理地址（类似早期系统），因为简单且确定性强。

---

## 常见错误和易错点

1. **混淆 Page 和 Frame：** Page是逻辑概念（进程地址空间的划分），Frame是物理概念（物理内存的划分）。两者大小相同但含义不同。

2. **地址翻译公式记错：** 物理地址 = (frame number × page size) + offset，不是 frame number + offset。容易忘记乘以页大小。

3. **Page Fault不等于程序错误：** Page fault是正常的虚拟内存操作，表示页面不在内存中需要从磁盘加载。只有非法访问（如访问未映射的地址）才是真正的错误。

4. **Internal vs External Fragmentation混淆：**
   - External：内存中有足够空间但不连续（Base & Limit的问题）
   - Internal：分配单元内部有未使用空间（Paging的问题）

5. **LRU vs FIFO的Belady异常：** FIFO页面置换可能存在Belady异常（增加页框数反而增加page fault次数），LRU不会。

6. **TLB Flush vs Page Flush：** Context switch时TLB需要flush（因为不同进程的映射不同），但页表不需要flush（每个进程有自己的页表）。

---

## 课件总结

本课件从内存管理的必要性出发，介绍了两种主要的内存管理方法：

1. **Base and Limit Registers：** 简单的连续内存分配方案，通过硬件寄存器实现地址翻译和内存保护，但存在外部碎片和不支持虚拟内存的局限性。

2. **Paged Virtual Memory：** 现代操作系统使用的方案，将逻辑和物理地址空间划分为固定大小的页和页框，通过页表映射。解决了外部碎片问题，支持虚拟内存。

3. **页面管理的关键技术：**
   - Page Fault处理和页面置换算法（Optimal、FIFO、Second-chance、LRU、Aging）
   - 局部性原理是设计高效置换算法的理论基础
   - TLB通过缓存加速地址翻译

---

## 复习建议

1. **理解地址翻译过程：** 手动练习逻辑地址到物理地址的转换，包括base&limit和paging两种方式。
2. **掌握页面置换算法：** 给定一个页面引用序列，能够手动模拟FIFO、Second-chance、LRU和Aging算法的执行过程。
3. **理解Page Table Entry的各个bit：** Present/Absent、Referenced、Modified bit的作用和在page fault处理中的使用。
4. **对比分析：** 对比Base&Limit vs Paging、各种页面置换算法的优缺点。
5. **计算题：** 练习计算内部碎片大小、逻辑地址结构（page number + offset）、TLB命中率等。
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Early multiprogramming — swap on every context switch (slide p.3). · 早期多道程序——每次 context switch 做什么（课件 p.3）？ | **EN:** Only the running process stays in RAM; each context switch fully swaps the current process out to disk and the next one in. / **中文：** 只有运行中进程在 RAM；每次 context switch 把当前进程整进程换出磁盘、把下一个换进来。 |
| 2 | Logical address split in paging. · 分页系统中逻辑地址如何拆分？ | **EN:** Page number + offset within page. / **中文：** 页号（page number）+ 页内偏移（offset）。 |
| 3 | Paging trace — LA0→PA20, LA5→PA25 (slide p.24). · 分页演算——LA0→PA20，LA5→PA25（课件 p.24）。 | **EN:** Page size 4: LA0 = page 0 offset 0, frame 5 → PA20; LA5 = page 1 offset 1, frame 6 → PA25. / **中文：** 页大小 4：LA0 = 页 0 偏移 0，帧 5 → PA20；LA5 = 页 1 偏移 1，帧 6 → PA25。 |
| 4 | Offset example: logical 9, page size 4. · 例子：逻辑地址 9，页大小 4，offset 是多少？ | **EN:** 9 mod 4 = 1. / **中文：** 9 mod 4 = 1。 |
| 5 | Base/limit address translation. · Base/limit 地址翻译公式。 | **EN:** If logical address < limit: physical = logical + base; else trap (protection fault). / **中文：** 若逻辑地址 < limit：物理地址 = 逻辑地址 + base；否则触发保护异常。 |
| 6 | Internal fragmentation example (slide p.28). · 内部碎片例子（课件 p.28）。 | **EN:** Page size 4 B, process 13 B → needs 4 pages = 16 B → internal fragmentation = 16 − 13 = 3 B. / **中文：** 页大小 4 B，进程 13 B → 需 4 页 = 16 B → 内部碎片 = 16 − 13 = 3 B。 |
| 7 | Page fault — OS handling steps (slide p.30). · Page fault——OS 处理步骤（课件 p.30）。 | **EN:** (1) Evict a page if no free frame (write back if modified); (2) load required page from disk; (3) update page table; (4) re-execute faulting instruction. / **中文：** （1）无空闲帧则驱逐一页（modified 则写回）；（2）从磁盘加载所需页；（3）更新页表；（4）重新执行触发缺页的指令。 |
| 8 | PTE fields — present, referenced, modified (slide p.29). · PTE 字段——present、referenced、modified（课件 p.29）。 | **EN:** Present = in RAM or on disk; Referenced set on access; Modified set on write (must write back if evicted). / **中文：** Present = 在 RAM 或磁盘；Referenced 访问时置位；Modified 写入时置位（驱逐须写回）。 |
| 9 | Temporal vs spatial locality (slide p.33). · 时间局部性 vs 空间局部性（课件 p.33）。 | **EN:** Temporal = recently used data likely reused soon; spatial = nearby addresses likely accessed together. / **中文：** 时间局部性 = 刚用的数据很快再用；空间局部性 = 相邻地址很可能一起访问。 |
| 10 | TLB purpose (slide p.44). · TLB 的作用（课件 p.44）。 | **EN:** Cache recent page-table translations to avoid a full page-table walk on every memory access. / **中文：** 缓存最近页表翻译，避免每次内存访问都做完整页表查找。 |
| 11 | Second-chance at time 20 — page A with R=1 (slide p.35). · Second-chance：时刻 20 缺页，队头页 A 的 R=1（课件 p.35）。 | **EN:** Do not evict A; clear R to 0 and move A to tail; check new head instead. / **中文：** 不驱逐 A；R 清 0 并移到队尾；改检查新队头。 |
| 12 | Aging trace — X1000000 → 11000000 (slide p.38–40). · Aging 演算——X1000000 → 11000000（课件 p.38–40）。 | **EN:** Previous pattern X1000000, R=1 this tick → shift right → append R as MSB → 11000000; lowest value = victim. / **中文：** 上一 tick X1000000，本 tick R=1 → 右移 → 追加 R 为最高位 → 11000000；值最小者被驱逐。 |

`,$g=`# WK5 - Secure Communication

## 课件概述

本课件介绍了计算机网络中**安全通信（Secure Communication）**的基本原理和密码学基础。课件从安全通信的三个核心目标（机密性、完整性、认证）出发，系统讲解了加密（Encryption）、哈希（Hashing）、消息认证码（MAC）、数字签名（Digital Signatures）等密码学技术，以及如何将这些技术组合实现安全通信。最后介绍了TLS（Transport Layer Security）协议的基本工作原理。

---

## 必须掌握的知识点

### 1. 安全通信的三个核心属性

**What（是什么）：** 安全通信需要满足的三个基本属性。

**课件里的具体场景（对应 slide p.2）：** Alice/Bob 在课件中是抽象代号，实际对应多种通信对——**路由器之间**、**浏览器 ↔ web server**、**SSH client ↔ VM**、**Git ↔ GitHub** 等。安全通信的目标就是让这些对端在不可信网络上仍能保密、防篡改、确认身份。

![Confidentiality：Eve窃听Alice和Bob的通信](./images/WK5-Confidentiality-Eve.png)

#### (a) Confidentiality（机密性）
- 只有发送方和接收方能够理解通信的内容
- 防止第三方（如Eve）窃听和理解消息内容
- 课件例子（slide p.4）：Eve 拦截到的信用卡号 \`123 456 789\` 应当对她不可读
- 实现方式：**Encryption（加密）**

#### (b) Integrity（完整性）
- 能够检测通信内容是否被篡改
- 防止第三方修改传输中的消息
- 实现方式：**MAC（消息认证码）** 或 **Digital Signatures（数字签名）**

#### (c) Authentication（认证）
- 确认通信双方（或至少一方）的身份
- 防止冒充攻击（如Eve冒充Bob）
- 实现方式：**Certificates（证书）** + **Digital Signatures**

**Why（为什么重要）：** 在开放的计算机网络中，攻击者可以读取、修改和删除任何消息。没有安全机制，所有通信都是不安全的。

---

### 2. 加密基础（Encryption）

**What（是什么）：** 将明文（plaintext）通过加密算法和密钥转换为密文（ciphertext），只有持有解密密钥的人才能将其还原为明文。

**核心函数：**
- \`c = encrypt(m, Ke)\` — 用加密密钥 Ke 加密消息 m 得到密文 c
- \`m = decrypt(c, Kd)\` — 用解密密钥 Kd 解密密文 c 得到消息 m

**Kerckhoffs' Principle（柯克霍夫原则）：**
- 安全性应该**只依赖于密钥的保密性**，而不依赖于算法的保密性
- 即使攻击者知道加密算法，只要密钥不泄露，安全性就有保障
- 课件精确化（slide p.8）：保密性依赖的是**解密密钥（decryption key）**保持秘密——加密密钥可以公开（公钥密码就是这样），真正必须藏好的是能解密的那一把

---

### 3. 对称加密 vs 非对称加密

#### (a) Symmetric Encryption（对称加密）

**What：** 加密和解密使用**相同的密钥** Ks。

**协议流程：**
1. Alice和Bob安全地交换共享密钥 Ks
2. Alice计算密文 \`c = encrypt(m, Ks)\`
3. Alice将c发送给Bob
4. Bob计算 \`m = decrypt(c, Ks)\` 恢复消息

**优点：** 效率高，适合加密大量数据
**缺点：** 需要安全地交换共享密钥（密钥分发问题）
**例子：** AES（Advanced Encryption Standard）

#### (b) Asymmetric Encryption（非对称加密 / 公钥加密）

**What：** 使用一对密钥——公钥（public key）和私钥（private key）。公钥加密，私钥解密。

**协议流程：**
1. Bob生成密钥对 \`(K_public^B, K_private^B)\`
2. Bob公开发布他的公钥
3. Alice获取Bob的公钥，计算 \`c = encrypt(m, K_public^B)\`
4. Alice将c发送给Bob
5. Bob计算 \`m = decrypt(c, K_private^B)\` 恢复消息

**优点：** 不需要安全地交换密钥
**缺点：** 计算开销大，不适合加密大量数据
**密码学的数学基础：** 现代密码学基于数学上计算困难的问题，例如大整数分解（RSA）和离散对数（ElGamal）。但密码学**并非绝对安全**（no perfect security）——暴力破解（brute force attack）在理论上始终可行，目标是使破解所需的时间远超数据的有用生命周期。**Kerckhoffs原则**强调安全性应仅依赖密钥保密而非算法保密。

---

### 4. 混合加密（Hybrid Encryption）

**What（是什么）：** 结合对称加密和非对称加密的优点。

**Why（为什么）：**
- 对称加密：高效但需要安全交换密钥
- 非对称加密：无需安全交换密钥但效率低
- 混合加密：用非对称加密安全交换对称密钥，再用对称密钥加密通信数据

**How（怎么工作）：**
1. Alice生成密钥对 \`(K_public^A, K_private^A)\`，公开公钥
2. Bob获取 \`K_public^A\`
3. Bob生成共享密钥 K_secret
4. Bob计算 \`c = encrypt(K_secret, K_public^A)\`，将c发送给Alice
5. Alice计算 \`decrypt(c, K_private^A)\` 获得 K_secret
6. Alice和Bob现在共享 K_secret，可以用对称加密通信

---

![Cryptographic Hashing：长消息通过哈希函数生成固定长度哈希值](./images/WK5-Cryptographic-Hashing.png)

### 5. 密码学哈希函数（Cryptographic Hashing）

**What（是什么）：** 将任意长度的输入 m 映射为固定长度的哈希值 H(m)。

**核心属性：**
- **Collision Resistance（抗碰撞性）：** 很难找到 m ≠ m' 使得 H(m) = H(m')
- **One-way（单向性）：** 给定 H(m)，很难推导出 m

**例子：** SHA-2、SHA-3

---

### 6. 消息认证码 MAC（Message Authentication Code）

**What（是什么）：** 用于验证消息是否被篡改的机制，基于**共享密钥**（对称密码学）。

**How（怎么工作）：**
- MAC函数：\`t = mac(m, Ks)\` — 用密钥 Ks 和消息 m 生成标签 t
- 典型实现：\`H(m ∥ s)\` 或 HMAC（\`H((s ⊕ opad) ∥ H((s ⊕ ipad) ∥ m))\`）

**协议流程：**
1. Alice生成消息 m
2. Alice计算标签 \`t = mac(m, Ks)\`
3. Alice将 m 和 t 发送给Bob
4. Bob计算 \`t' = mac(m, Ks)\`
5. Bob验证 t' == t，如果匹配则消息未被篡改

**关键点：**
- 不知道密钥的攻击者无法伪造标签
- 消息以明文发送，**不提供机密性**，只提供完整性检测

---

### 7. 数字签名（Digital Signatures）

**What（是什么）：** 使用非对称密码学实现消息完整性验证和不可否认性。

**核心概念：**
- **Signing Key（签名密钥）：** 私钥，用于生成签名
- **Verification Key（验证密钥）：** 公钥，用于验证签名

**函数：**
- \`s = sign(m, K_sign)\` — 用签名密钥对消息签名
- \`verify(m, s, K_ver)\` — 用验证密钥验证签名

**协议流程：**
1. Alice用私钥签名：\`s = sign(m, K_sign^A)\`
2. Alice将 m 和 s 发送给Bob
3. Bob用Alice的公钥验证：\`verify(m, s, K_ver^A)\`，成功则接受消息

**提供的安全属性：**
- **Integrity（完整性）：** 消息未被修改
- **Non-repudiation（不可否认性）：** Alice不能否认她签过这个消息（因为只有她有私钥）

**大消息的处理：** 对于大消息，先计算哈希 H(m)，再对 H(m) 签名：
1. \`s = sign(H(m), K_sign^A)\`
2. Alice发送 m 和 s
3. Bob计算 H(m)，验证 \`verify(H(m), s, K_ver^A)\`

---

### 8. 认证加密（Authenticated Encryption）

**What（是什么）：** 同时提供**机密性**和**完整性**的加密方式。

**How（怎么实现）：** "Encrypt then MAC" 策略：
1. Alice加密消息：\`c = encrypt(m, K_secret_enc)\`
2. Alice对密文计算MAC标签：\`t = mac(c, K_secret_mac)\`
3. Alice发送 c 和 t
4. Bob验证 t：\`t' = mac(c, K_secret_mac)\`，如果 t == t'
5. Bob解密：\`m = decrypt(c, K_secret_enc)\`

**注意：** 先加密，再对密文计算MAC（Encrypt then MAC），这样可以同时保护机密性和完整性。

**例子：** AES-GCM、AES-OCB、AES-CCM

---

![Man-in-the-Middle攻击：Eve拦截并替换公钥，Alice以为在和Bob通信实际在和Eve通信](./images/WK5-Man-in-the-Middle.png)

### 9. 证书与认证（Certificates and Authentication）

**What（是什么）：** 数字证书将身份与公钥安全地绑定在一起。

**Why（为什么需要）：** 在公钥交换过程中，需要验证公钥确实属于声称的拥有者。否则攻击者可以进行**两步中间人攻击**（Man-in-the-Middle Attack）：

**第一步（公钥替换）：**
- 当Alice请求Bob的公钥时，Eve拦截请求，**用自己公钥 K_public^E 替换Bob的公钥**
- Alice认为她在用Bob的公钥加密，实际在用Eve的公钥
- Eve拦截密文后用自己的私钥 K_private^E 解密得到 K_secret

**第二步（密文重加密）：**
- Eve用Bob的公钥 K_public^B **重新加密** K_secret，生成新密文 c' 发送给Bob
- Bob用自己的私钥解密，以为一切正常（他不知道中间发生过替换）
- 结果：Alice和Bob都认为通信是安全的，但Eve已经获取了所有秘密

**结论：需要一个方法验证公钥确实属于它声称的拥有者**——这就是证书（Certificate）需要解决的问题。

**How（怎么工作）：**

![数字证书：将身份与公钥绑定，由Certificate Authority签名认证](./images/WK5-Certificates.png)

**证书结构：**
- \`binding = (Bob, K_public^Bob)\` — 身份和公钥的绑定
- \`signature = sign(binding, K_private^issuer)\` — 证书颁发者的签名
- \`certificate(Bob, issuer) = (binding, signature)\`

**证书验证流程：**
1. Bob创建消息 "I am Bob"，签名
2. Bob发送 m, 签名, 证书给Alice
3. Alice验证证书签名：\`verify(binding, signature, K_public^issuer)\`
4. Alice从证书中获取Bob的公钥
5. Alice验证Bob的消息签名

**Certificate Authorities (CA)（证书颁发机构）：**
- 被明确信任的实体
- 为其他人签发证书
- CA的公钥包含在**自签名的根证书**中
- 根证书预装在操作系统和浏览器中

**信任链问题：** CA的公钥本身如何被信任？答案：根证书是**自签名**的（self-signed），并预装在OS/浏览器中作为信任锚点（Trust Anchor）。这形成了一个信任链：根CA → 中间CA → 终端实体证书。

---

### 10. TLS（Transport Layer Security）⚠️ 非考试内容（NOT EXAMINABLE）

**What（是什么）：** 互联网上安全通信的协议，HTTPS就是HTTP over TLS。**TLS本身不在考试范围内**，但理解其原理有助于理解整体安全通信框架。

**基本组成：**
- **Handshake Protocol（握手协议）：** 使用公钥密码学建立共享密钥
- **Record Protocol（记录协议）：** 使用建立的密钥保护数据传输

**TLS 1.2 握手流程（简化）：**
1. Client Hello → 协议版本、支持的密码套件、客户端随机数（client random）
2. Server Hello → 选定的密码套件、服务器随机数（server random）
3. Server Certificate → 服务器公钥证书
4. **Server Hello Done** → 通知客户端服务器一侧的 hello 阶段消息发完（对应 slide p.41）
5. Client Key Exchange → 客户端生成 premaster secret，用服务器公钥加密发送
6. 双方用 **premaster secret + client random + server random** 派生出会话密钥
7. **Change Cipher Spec** → 通知对方后续消息开始用协商好的参数加密
8. **Finished** → 握手后**第一条受保护的消息**，用来验证握手本身没被篡改

**TLS 1.3 vs TLS 1.2（对应 slide p.42–43）：**
- TLS 1.3使用**Diffie-Hellman密钥交换**代替RSA密钥交换——**不再支持 RSA 密钥交换**
- 握手中带 **Key share**（客户端 gx、服务器 gy），在第一次往返里就完成密钥协商，更少 RTT
- **CertificateVerify**：服务器用私钥对**整个握手记录**签名（而不只签证书），认证更强
- 提供**Forward Secrecy（前向保密）**：即使长期私钥泄露，过去的会话仍然安全（因为会话密钥来自一次性 DH，不靠私钥解密）

---

## 关键术语

| 术语 | 英文 | 含义 |
|------|------|------|
| 机密性 | Confidentiality | 只有授权方能理解通信内容 |
| 完整性 | Integrity | 能够检测消息是否被篡改 |
| 认证 | Authentication | 确认通信方的身份 |
| 明文 | Plaintext | 原始未加密的消息 |
| 密文 | Ciphertext | 加密后的消息 |
| 对称加密 | Symmetric Encryption | 加密解密使用相同密钥 |
| 非对称加密 | Asymmetric Encryption | 使用公钥加密、私钥解密 |
| 密码学哈希 | Cryptographic Hashing | 将任意输入映射为固定长度的哈希值 |
| 碰撞 | Collision | 不同输入产生相同哈希值 |
| 消息认证码 | MAC | 基于共享密钥的消息完整性验证 |
| 数字签名 | Digital Signature | 基于非对称密码学的完整性+不可否认性 |
| 不可否认性 | Non-repudiation | 签名者不能否认其签名 |
| 证书 | Certificate | 将身份与公钥绑定的签名文档 |
| 证书颁发机构 | CA | 签发证书的受信任实体 |
| 中间人攻击 | Man-in-the-Middle | 攻击者秘密拦截和修改通信 |
| 前向保密 | Forward Secrecy | 长期密钥泄露不影响过去的会话安全 |

---

## 常见问题

### Q1: 对称加密和非对称加密各有什么优缺点？

| 特性 | 对称加密 | 非对称加密 |
|------|----------|-----------|
| 速度 | 快 | 慢 |
| 密钥数量 | n个用户需要 n(n-1)/2 个密钥 | 每个用户一对密钥 |
| 密钥分发 | 需要安全通道 | 公钥可公开 |
| 适用场景 | 大量数据加密 | 密钥交换、签名 |

### Q2: MAC和数字签名有什么区别？

| 特性 | MAC | 数字签名 |
|------|-----|---------|
| 密码学类型 | 对称（共享密钥） | 非对称（公私钥对） |
| 不可否认性 | 无（双方都有密钥） | 有（只有签名者有私钥） |
| 验证方 | 任何持有共享密钥的人 | 任何人（用公钥验证） |

### Q3: 为什么需要证书？

公钥交换时存在**中间人攻击**风险：攻击者可以用自己的公钥替换Bob的公钥，从而截获和篡改所有通信。证书通过受信任的第三方（CA）对公钥进行签名，确保公钥的真实性。

### Q4: Encrypt then MAC 的顺序为什么重要？

先加密再MAC（Encrypt then MAC）可以确保：接收方先验证消息完整性，只有完整性验证通过才解密。这避免了对被篡改的密文进行解密，防止某些攻击（如padding oracle attack）。

---

## 知识点之间的联系

\`\`\`
安全通信的三个目标
    ├── Confidentiality ──→ Encryption
    │                        ├── Symmetric (AES)
    │                        ├── Asymmetric (RSA)
    │                        └── Hybrid (Key Exchange)
    ├── Integrity ──→ MAC (对称) / Digital Signature (非对称)
    │                    └── Cryptographic Hashing (SHA)
    └── Authentication ──→ Certificates + Digital Signatures
                              └── Certificate Authorities (CA)

组合：Authenticated Encryption = Encrypt then MAC
实际应用：TLS (HTTPS) = 以上所有技术的综合应用
\`\`\`

**与其他课件的联系：**
- **WK6-OSI/WK7-Sockets/WK8-HTTP：** 安全通信在网络协议栈中的位置，TLS在传输层之上
- **WK9-TCP：** TLS通常运行在TCP之上

---

## 实际应用案例

1. **HTTPS：** 浏览器与Web服务器之间的安全通信，底层使用TLS
2. **SSH：** 远程登录安全协议，使用公钥认证和对称加密
3. **Git over HTTPS：** GitHub使用TLS保护代码传输
4. **数字证书：** 网站的SSL/TLS证书由CA签发，浏览器预装根证书
5. **PGP/GPG：** 邮件加密，使用混合加密方式

---

## 常见错误和易错点

1. **混淆对称和非对称加密的使用场景：** 对称加密用于数据加密（快），非对称加密用于密钥交换和签名（慢）。

2. **认为MAC提供机密性：** MAC只提供完整性检测，不提供机密性。消息以明文发送。

3. **混淆签名和加密：** 签名用私钥签名、公钥验证；加密用公钥加密、私钥解密。方向相反。

4. **忘记Non-repudiation只属于数字签名：** MAC不提供不可否认性，因为双方都有共享密钥。

5. **证书验证链的理解：** 证书的信任链从根证书（预装在OS/浏览器中）开始，逐级验证。

6. **认为加密就是安全的：** 只有加密是不够的，还需要完整性保护和认证，否则可能遭受各种攻击。

---

## 课件总结

本课件构建了安全通信的完整知识体系：

1. **安全目标：** Confidentiality、Integrity、Authentication
2. **加密技术：** Symmetric → Asymmetric → Hybrid Encryption
3. **完整性技术：** Cryptographic Hashing → MAC → Digital Signatures
4. **组合方案：** Authenticated Encryption（Encrypt then MAC）
5. **认证方案：** Certificates + CA
6. **实际协议：** TLS（综合运用以上所有技术）

核心思想：没有单一技术能解决所有安全问题，需要将多种技术组合使用。

---

## 复习建议

1. **理解每种技术的目标：** 明确每种密码学原语提供哪些安全属性（机密性/完整性/认证/不可否认性）。
2. **掌握协议流程：** 能够描述对称加密、非对称加密、混合加密、MAC、数字签名的完整协议流程。
3. **对比分析：** 对比对称vs非对称、MAC vs 数字签名的优缺点。
4. **理解攻击场景：** 理解中间人攻击以及证书如何防御此类攻击。
5. **综合应用：** 能够设计一个同时提供机密性、完整性和认证的安全通信协议。TLS握手细节明确不考，只需知道TLS综合使用了这些技术。
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | CIA triad — expand each letter. · CIA 三元组各指什么？ | **EN:** Confidentiality, Integrity, Authentication. / **中文：** 保密性（Confidentiality）、完整性（Integrity）、认证（Authentication）。 |
| 2 | Confidentiality vs integrity — one line each. · 保密性与完整性各一句话。 | **EN:** Confidentiality = prevent unauthorised reading; integrity = detect/prevent unauthorised modification. / **中文：** 保密性 = 防止未授权读取；完整性 = 检测/防止未授权篡改。 |
| 3 | Symmetric vs public-key cryptography. · 对称密码 vs 公钥密码。 | **EN:** Symmetric = same secret key encrypts and decrypts; public-key = key pair — public encrypts/verify, private decrypts/signs. / **中文：** 对称 = 同一密钥加解密；公钥 = 密钥对——公钥加密/验证，私钥解密/签名。 |
| 4 | Kerckhoffs' principle (slide wording). · Kerckhoffs 原则（课件表述）。 | **EN:** Security depends on the decryption key, not secrecy of the algorithm. / **中文：** 安全性依赖解密密钥，而非算法保密。 |
| 5 | MAC vs digital signature. · MAC vs 数字签名。 | **EN:** MAC uses shared secret key (both parties); signature uses private key to sign, public key to verify. / **中文：** MAC 用共享密钥（双方持有）；签名用私钥签、公钥验。 |
| 6 | Hash function — collision resistance and one-way (slide p.19). · 哈希函数——抗碰撞与单向性（课件 p.19）。 | **EN:** Collision resistance: hard to find m ≠ m' with H(m)=H(m'); one-way: given H(m), hard to recover m. / **中文：** 抗碰撞：难找 m≠m' 使 H(m)=H(m')；单向：给定 H(m) 难恢复 m。 |
| 7 | What problem does a digital certificate solve? · 数字证书解决什么问题？ | **EN:** Bind a public key to an identity in a trustworthy way (CA signature). / **中文：** 可信地将公钥与身份绑定（CA 签名背书）。 |
| 8 | Man-in-the-middle attack — how certificates help. · 中间人攻击——证书如何防御？ | **EN:** Client verifies server certificate chain to ensure it talks to the real server, not an impostor. / **中文：** 客户端验证服务器证书链，确保连接真实服务器而非冒充者。 |
| 9 | Hybrid encryption — why and how (slide p.15–16). · 混合加密——为何与如何（课件 p.15–16）。 | **EN:** Use public-key crypto to exchange a symmetric session key, then encrypt bulk data with symmetric crypto (efficient + no pre-shared secret). / **中文：** 用公钥密码交换对称会话密钥，再用对称密码加密大量数据（高效且无需预共享密钥）。 |
| 10 | Encrypt-then-MAC strategy (slide p.28). · Encrypt-then-MAC 策略（课件 p.28）。 | **EN:** Encrypt message first, then MAC the ciphertext; verify MAC before decrypting. / **中文：** 先加密消息，再对密文计算 MAC；先验 MAC 再解密。 |
| 11 | Public-key encrypt vs sign — which key for each? · 公钥加密 vs 签名各用哪个密钥？ | **EN:** Encrypt with recipient's public key; sign with sender's private key. / **中文：** 用接收方公钥加密；用发送方私钥签名。 |
| 12 | Non-repudiation — which mechanism provides it? · 不可否认性由哪种机制提供？ | **EN:** Digital signature — only the private-key holder could have produced it. / **中文：** 数字签名——只有私钥持有者才能生成。 |

`,e1=`# WK6 - Introduction to Networks & OSI Layers

## 课件概述

本课件是计算机网络部分的入门，介绍了互联网（Internet）的基本结构和分层网络模型。课件从互联网的复杂性出发，引出为什么需要分层模型，然后详细介绍了两种主要的网络模型：**OSI模型**和**TCP/IP模型**。还讨论了互联网的"窄腰"（narrow waist）架构设计、面向连接和无连接的服务类型，以及协议封装（encapsulation）的概念。

---

## 必须掌握的知识点

### 1. 为什么需要网络分层模型？

**What（是什么）：** 将网络功能划分为多个层次，每层提供特定的服务给上层，同时使用下层的服务。

**Why（为什么需要）：** 互联网连接了数百万节点，面临多个复杂问题：
- 大多数节点之间没有直接的物理连接 → 需要**路由**（告诉数据往哪走）
- 需要指定实际的物理信号 → 需要**物理层规范**
- 需要在不同节点对之间共享物理链路 → 需要**链路层管理**
- 需要不同厂商设备互操作 → 需要**开放标准**（非专有协议）
- 需要一个参考模型来独立开发和验证协议
- 网络是多维度的，参考模型可以简化设计过程

这些问题太复杂，不能放在一个层里解决，需要**模块化**（modular）的方式分别处理。这是工程最佳实践：先有抽象参考模型，再有对应实现，用于验证目的。

**How（怎么实现）：** 将网络功能组织成层次结构：
- 每层为上层提供服务（Service）
- 层与层之间通过接口（API）交互
- 同层之间通过协议（Protocol）通信

---

### 2. Service vs Protocol

**Service（服务）：** 一层提供给上层的一组操作原语（primitives），是层与层之间的接口（类似API）。

**Protocol（协议）：** 控制同层对等实体（peer entities）之间数据包格式和含义的规则，是API的实现。

![Service与Protocol关系：Service是层间接口，Protocol是同层通信规则](./images/WK6-Service-Protocol.png)

\`\`\`
Layer N    ←→    Layer N     (同层协议通信)
   ↑ Service        ↑
Layer N-1         Layer N-1
\`\`\`

---

### 3. 面向连接 vs 无连接服务

#### Connection-oriented（面向连接）
- **流程：** 建立连接 → 使用连接 → 断开连接
- **特点：** 连接建立时有协商过程
- **类比：** 电话服务
- **例子：** TCP、MPLS

#### Connectionless（无连接）
- **特点：** 每条消息独立，无需预先建立连接
- **类比：** 邮政服务或短信
- **例子：** UDP。注意：HTTP是无状态的应用层协议，但传统HTTP通常运行在TCP之上，不应把HTTP当作传输层无连接服务的例子。

选择哪种服务类型会影响可靠性、质量和成本。

---

### 4. OSI参考模型（7层）

**What（是什么）：** 由ISO（国际标准化组织）提出的7层网络参考模型。

**设计原则：**
- 在需要不同抽象的地方创建层
- 每层执行定义良好的功能
- 每层的功能应致力于定义国际标准化协议
- 层边界应最小化跨接口的信息流
- 层数应适中：足够多以分离不同功能，足够少以避免架构臃肿

**7层结构：**

| 层 | 名称 | 功能 | PDU |
|----|------|------|-----|
| 7 | Application（应用层） | 为应用提供网络服务 | Data |
| 6 | Presentation（表示层） | 数据格式转换、加密、压缩 | Data |
| 5 | Session（会话层） | 管理会话、同步 | Data |
| 4 | Transport（传输层） | 端到端可靠传输、流量控制 | Segment |
| 3 | Network（网络层） | 路由、逻辑寻址 | Packet |
| 2 | Data Link（数据链路层） | 帧传输、差错检测 | Frame |
| 1 | Physical（物理层） | 比特传输、物理信号 | Bit |

![OSI Model完整7层结构：Host A→Router→Host B，每层有对应PDU](./images/WK6-OSI-Model.png)

---

### 5. Point-to-point vs End-to-end（点到点 vs 端到端）

**What（是什么）：** 网络通信中的两个不同层次概念：
- **Point-to-point（点到点，p2p）：** 相邻直接连接的节点之间（如路由器→路由器），由**数据链路层**处理
- **End-to-end（端到端，e2e）：** 从源主机到目的主机之间，由**传输层**或**网络层**处理

**Why（为什么区分）：** 
- 数据链路层负责在每段链路上可靠传输（检错、重传），但不保证端到端的可靠
- 传输层负责端到端的整体可靠性，不管中间经过多少跳
- 这种分层使得不同的链路可以使用不同的技术（以太网、Wi-Fi），而端到端通信不受影响

**How（对应功能）：**
| 层次 | 获取数据 | 整理数据 |
|------|---------|---------|
| p2p（数据链路层） | Get data p2p：从相邻节点获取 | Tidy up p2p：差错检测 |
| e2e（传输层） | Get data e2e：从源到目的地 | Tidy up e2e：端到端可靠性 |

---

### 6. TCP/IP模型（4层/5层）

**What（是什么）：** 互联网实际使用的协议栈模型，由Cerf & Kahn于1974年设计。

**TCP/IP vs OSI：**
- TCP/IP模型反映了互联网实际发生的事情
- OSI模型有助于设计网络或诊断故障时的思维过程
- 将TCP/IP协议映射到OSI模型时，协议可能跨越多层或存在归属模糊

**TCP/IP 4层模型：**

| 层 | 名称 | 对应OSI层 |
|----|------|----------|
| 4 | Application | Application + Presentation + Session |
| 3 | Transport | Transport |
| 2 | Internet | Network |
| 1 | Network Access | Data Link + Physical |

![TCP/IP模型与OSI模型对比：TCP/IP省略了Session和Presentation层](./images/WK6-TCP-IP-vs-OSI.png)

**关键设计决策：** TCP/IP被设计为独立于数据链路层和物理层，这意味着它可以在任何物理网络上运行。

---

### 7. 协议封装（Encapsulation）

**What（是什么）：** 数据从上层传递到下层时，每一层都会添加自己的头部信息（有时还有尾部）。

**How（怎么工作）：**
- 应用层数据 → 传输层加上TCP/UDP头部 → 网络层加上IP头部 → 数据链路层加上帧头和帧尾
- 每一层的封装对上层是透明的
- 接收方逐层解封装（去掉对应的头部）

\`\`\`
Application Data
    ↓ 加上TCP头
[TCP Header | Application Data]
    ↓ 加上IP头
[IP Header | TCP Header | Application Data]
    ↓ 加上帧头/尾
[Frame Header | IP Header | TCP Header | App Data | Frame Trailer]
\`\`\`

---

### 8. IP："窄腰"（Narrow Waist）架构

**What（是什么）：** 互联网协议架构像一个沙漏：
- **上层：** 很多应用协议（HTTP、DNS、FTP、SMTP等）
- **中间：** 一个网络协议（IP）— "窄腰"
- **下层：** 很多链路层协议（Ethernet、Wi-Fi、ADSL等）

![协议栈：HTTP/FTP/SMTP/DNS → TCP/UDP → IP → ADSL/SATNET/Packet radio/LAN](./images/WK6-Protocol-Stack.png)

**Why（为什么重要）：**
- "IP over everything, and everything over IP"
- 如果你的新物理网络支持IP，它就支持所有应用
- 如果你的应用运行在IP上，它就能在任何网络上运行
- 这种设计使得互联网具有极大的灵活性和可扩展性

**注意事项：**
- 这不是唯一的设计选择
- SMS最初运行在非IP网络上
- 一个网络可以支持多种网络层协议

**新趋势：** HTTP正在成为新的"窄腰"——许多新协议将数据封装在HTTP请求/响应中，以穿越只允许HTTP的防火墙。课件新版窄腰图（slide p.25）在 HTTP 下方同时画了 **TCP 和 QUIC** 两种传输——即新协议可以跑在 TCP 上，也可以跑在 QUIC（HTTP/3 的选择）上，HTTP 仍是穿越防火墙的汇合点。

**关于"HTTP 是不是 connectionless"的对照（对应 slide p.13）：** 课件在某页把 **HTTP 与 UDP 并列**作为"无连接"的例子来介绍——这容易引起误解。准确说：HTTP 本身是**无状态（stateless）**的请求/响应协议，但它**传统上跑在 TCP（面向连接）之上**，所以不是传输层意义上的 connectionless。把它和 UDP 并列，是为了强调"每次请求独立、服务器不保留会话状态"这个**应用层**的无连接性，而非传输语义。

**IS-IS 补充（对应 slide p.42，非考背景）：** **IS-IS**（Intermediate System to Intermediate System）路由协议最初是 **OSI 协议族**为 CLNP 设计的，后来被 **TCP/IP 社区**广泛采用（很多大型运营商用它跑 IP 路由）。这是一个"OSI 设计、TCP/IP 接手"的有趣案例，说明 OSI 协议族并非全输——它的部分成果被互联网吸收。

---

### 9. 网络架构（Network Architecture）

**What（是什么）：** 超越单个层次的设计决策，是网络的基础结构选择。

**特点：**
- 难以改变——最好一开始就做对
- 但过于追求完美会导致僵化（如OSI的教训）
- TCP/IP的成功在于在网络规模小、灵活性高的时候进行实验

**历史背景：**
- TCP+IP曾经是一个层，但后来分离，使得更多应用能在其上良好运行

---

### 10. 互联网简史 ⚠️ 以下内容为背景知识，非考试范围（not assessable）

**三个发展阶段：**
1. **ARPANET (1960s-1990s)：** 美国国防部资助，最初只有4个节点（UCLA、SRI、UCSB、Utah大学），TCP/IP在此开发
2. **NSFNET (1970s-1990s)：** 美国国家科学基金会网络，为研究人员提供超级计算机访问
3. **Internet (1980s-present)：** 商业ISP出现，CERN开发了WWW

**TCP/IP vs OSI之争：**
- OSI由电话标准组织推动，追求严格的国际标准，但进展缓慢
- TCP/IP由研究社区推动，注重实现而非标准化，最终胜出
- 1992年"宫殿叛乱"：IPv4的局限性被提出，但OSI方案被拒绝
- 1996年才提出IPv6，至今仍未全面普及

**安全问题：** 许多早期协议设计时没有考虑安全性，安全机制是后来添加的（如DNS）。

---

## 关键术语

| 术语 | 英文 | 含义 |
|------|------|------|
| 分层模型 | Layered Model | 将网络功能划分为层次结构 |
| OSI模型 | OSI Model | ISO的7层网络参考模型 |
| TCP/IP模型 | TCP/IP Model | 互联网实际使用的4层模型 |
| 封装 | Encapsulation | 每层添加自己的头部信息 |
| 服务 | Service | 一层提供给上层的操作原语 |
| 协议 | Protocol | 同层对等实体之间的通信规则 |
| 面向连接 | Connection-oriented | 需要建立连接的通信方式 |
| 无连接 | Connectionless | 每条消息独立的通信方式 |
| 窄腰 | Narrow Waist | IP作为唯一的网络层协议 |
| PDU | Protocol Data Unit | 每层的数据单元（Segment/Packet/Frame/Bit） |

---

## 常见问题

### Q1: OSI模型和TCP/IP模型有什么区别？

| 特性 | OSI | TCP/IP |
|------|-----|--------|
| 层数 | 7层 | 4层（或5层） |
| 来源 | ISO标准化 | ARPANET实际实现 |
| 通用性 | 理论参考模型 | 实际互联网使用 |
| 设计方式 | 先设计标准再实现 | 先实现再标准化 |

### Q2: 为什么IP是"窄腰"？

因为IP是唯一广泛使用的网络层协议。所有应用都运行在IP之上，所有物理网络都支持IP。这种设计使得：
- 新物理网络只需支持IP就能支持所有应用
- 新应用只需使用IP就能在所有网络上运行

### Q3: 面向连接和无连接服务的典型例子？

- **面向连接：** TCP（建立连接→传输→断开）、电话通话
- **无连接：** UDP（每条消息独立）、短信。注意HTTP是无状态的应用层请求/响应协议，但通常运行在TCP之上，不是传输层无连接服务的典型例子。

### Q4: 封装过程中数据发生了什么变化？

数据从上到下传递时，每层添加自己的控制信息（头部）：
- 传输层添加端口号、序列号等
- 网络层添加源/目的IP地址
- 数据链路层添加源/目的MAC地址

接收方从下到上逐层剥离这些头部。

---

## 知识点之间的联系

\`\`\`
互联网复杂性
    ↓ 需要模块化
分层模型
    ├── OSI (7层，理论参考)
    └── TCP/IP (4层，实际使用)
         ├── Application (HTTP, DNS, FTP, SMTP)
         ├── Transport (TCP, UDP) ← WK7-WK9
         ├── Internet (IP) ← WK10-WK12
         └── Network Access (Ethernet, Wi-Fi)
              ↓
         封装 (Encapsulation)
              ↓
         窄腰架构 (IP over everything)
\`\`\`

**与其他课件的联系：**
- **WK5（Secure Communication）：** TLS在传输层之上提供安全
- **WK7-WK8（应用层）：** HTTP、DNS、FTP等应用层协议
- **WK8-WK9（传输层）：** TCP、UDP
- **WK10-WK12（网络层）：** IP、路由、NAT

---

## 实际应用案例

1. **访问网页的完整过程：** 浏览器（应用层）→ HTTP请求 → TCP段 → IP包 → 以太网帧 → 物理信号
2. **Wi-Fi和有线网络：** 两者使用不同的数据链路层和物理层，但都支持IP
3. **HTTP成为新窄腰：** 很多防火墙只允许HTTP流量，新协议被迫封装在HTTP中（如WebSocket）
4. **VPN：** 在IP层之上创建加密隧道，保护所有上层通信

---

## 常见错误和易错点

1. **混淆Service和Protocol：** Service是层间接口（API），Protocol是同层通信规则。

2. **OSI和TCP/IP层数记混：** OSI是7层，TCP/IP是4层。用助记词"**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing"（从上到下：Application, Presentation, Session, Transport, Network, Data Link, Physical）。

3. **认为TCP/IP严格对应OSI：** 实际上TCP/IP的应用层对应OSI的上面三层（Application + Presentation + Session），而且有些协议会跨越多层。

4. **忽略封装的重要性：** 封装使得每层可以独立工作，上层不需要知道下层的细节。

5. **误以为IP是唯一选择：** IP是"窄腰"但不是唯一选择。其他网络层协议也存在（如IPv6），只是IP最广泛。

---

## 课件总结

本课件奠定了计算机网络的基础知识：

1. **分层的必要性：** 网络的复杂性要求模块化的层次结构
2. **两种参考模型：** OSI（7层，理论）和TCP/IP（4层，实际）
3. **核心概念：** Service vs Protocol、面向连接 vs 无连接、封装
4. **架构设计：** IP的"窄腰"架构使互联网具有灵活性和可扩展性
5. **历史教训：** 标准化 vs 实现之争，安全设计的后补问题

---

## 复习建议

1. **记住两种模型的层次结构：** 能够列出OSI 7层和TCP/IP 4层的名称、功能和对应关系。
2. **理解封装过程：** 能够描述数据从应用层到物理层的封装过程，以及每层添加了什么信息。
3. **区分Service和Protocol：** 理解两者的关系和区别。
4. **理解"窄腰"概念：** 为什么IP是窄腰？这对互联网的扩展性有什么影响？
5. **历史背景只需简单看过：** 第23页之后是not assessable背景，不需要背ARPANET/NSFNET/OSI之争细节。
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Service vs protocol. · Service vs protocol。 | **EN:** Service = what a layer offers to the layer above; protocol = rules for peer communication at the same layer. / **中文：** Service = 本层向上层提供什么；protocol = 同层对等实体通信的规则。 |
| 2 | Why layering? (two benefits). · 为何分层？（两个好处） | **EN:** Modularity / easier to change one layer; abstraction hides complexity from other layers. / **中文：** 模块化/便于修改某一层；抽象向其他层隐藏复杂性。 |
| 3 | Connection-oriented vs connectionless service. · 面向连接 vs 无连接服务。 | **EN:** Connection-oriented = setup phase before data transfer (e.g. TCP); connectionless = send without prior setup (e.g. UDP). / **中文：** 面向连接 = 传数据前先建立连接（如 TCP）；无连接 = 无预先建立直接发送（如 UDP）。 |
| 4 | Point-to-point vs end-to-end — four tasks (slide p.17). · Point-to-point vs end-to-end——四项任务（课件 p.17）。 | **EN:** p2p (data link): get data p2p, tidy up p2p; e2e (transport): get data e2e, tidy up e2e. / **中文：** p2p（链路层）：get data p2p、tidy up p2p；e2e（传输层）：get data e2e、tidy up e2e。 |
| 5 | List four TCP/IP layers bottom to top. · 自下而上列出 TCP/IP 四层。 | **EN:** Link (Network Access), Internet (Network), Transport, Application. / **中文：** 链路层（Network Access）、网际层（Internet）、传输层、应用层。 |
| 6 | PDU name at transport layer. · 传输层的 PDU 叫什么？ | **EN:** Segment (TCP) or datagram (UDP). / **中文：** Segment（TCP）或 datagram（UDP）。 |
| 7 | Encapsulation — what happens going down the stack? · 封装——数据向下经过协议栈时发生什么？ | **EN:** Each layer adds its own header (and sometimes trailer) around data from above. / **中文：** 每层在上层数据外加自己的首部（有时还有尾部）。 |
| 8 | IP as the narrow waist — slide wording (p.22). · IP 窄腰——课件表述（p.22）。 | **EN:** IP over everything, and everything over IP — many upper protocols and lower link technologies converge on IP. / **中文：** IP over everything, and everything over IP——众多上层协议与下层链路技术以 IP 为汇合点。 |
| 9 | Protocol stack example — HTTP/TCP/UDP/IP (slide p.21). · 协议栈例子——HTTP/TCP/UDP/IP（课件 p.21）。 | **EN:** Application (HTTP) → Transport (TCP or UDP) → Internet (IP) → Link layer. / **中文：** 应用层（HTTP）→ 传输层（TCP 或 UDP）→ 网际层（IP）→ 链路层。 |
| 10 | Network layer main function. · 网络层主要功能。 | **EN:** Host-to-host delivery — routing datagrams across multiple networks. / **中文：** 主机到主机交付——跨多个网络路由数据报。 |
| 11 | Transport layer main function. · 传输层主要功能。 | **EN:** Process-to-process delivery using port numbers on top of host-to-host IP. / **中文：** 在主机到主机 IP 之上用端口号实现进程到进程交付。 |
| 12 | OSI vs TCP/IP — practical difference. · OSI vs TCP/IP——实用区别。 | **EN:** TCP/IP reflects what the Internet actually runs; OSI is a design/diagnostic reference model. / **中文：** TCP/IP 反映互联网实际运行；OSI 是设计/诊断参考模型。 |

`,n1=`# WK7 - Socket Programming

## 课件概述

本课件介绍了**Socket编程（Socket Programming）**的基础知识，Socket是应用层和传输层之间的接口。课件重点讲解Socket的概念、客户端和服务器端Socket的创建流程、服务器为什么有两个socket、阻塞/非阻塞读取，以及TLS在普通socket之上提供加密的概念。QUIC属于课件保留的old/draft非考试材料，只需作为背景简单了解。

---

## 必须掌握的知识点

### 1. 什么是Socket？

**What（是什么）：** Socket是用户空间（user-space）代码向内核空间（kernel-space）网络代码发送消息的方式。它是应用层和传输层之间的"门"（doorway），进程通过Socket发送和接收数据。

**Why（为什么需要）：** 应用程序不能直接访问网络硬件，需要通过操作系统提供的接口（Socket API）来使用网络功能。Socket是应用程序与网络协议栈之间的桥梁。

**历史背景：** Socket接口起源于**Berkeley UNIX**（加州大学伯克利分校），后来所有主流操作系统都采用了这一接口。因此，Socket代码在不同平台之间具有**可移植性**（portable）。

**How（怎么工作）：**
- 在UNIX中，一切皆文件——所有输入/输出都像读写文件一样
- Socket通过**文件描述符**（file descriptor，一个整数）来标识
- API通过**系统调用**实现：\`connect()\`、\`read()\`、\`write()\`、\`close()\`等

![Socket架构图：Client/Server通过Socket Interface和TCP/IP协议栈通信](./images/WK7-Socket-Architecture.png)

> **图片来源：** WK7-Sockets课件第6页。展示了Socket在客户端/服务器架构中的位置——用户代码通过Socket Interface（系统调用）与内核TCP/IP协议栈交互，再通过Hardware Interface（中断）与网络适配器通信。Global IP Internet连接两端的主机。

---

### 2. Socket地址：5元组

**What（是什么）：** 一个Socket由以下**5元组**唯一标识：

| 元素 | 描述 |
|------|------|
| Protocol | 协议（TCP/UDP） |
| Local IP | 本地IP地址 |
| Local Port | 本地端口号 |
| Remote IP | 远端IP地址 |
| Remote Port | 远端端口号 |

**注意：** 经常被误称为"源/目的"（source/dest），正确的术语应该是"本地/远端"（local/remote）。

---

### 3. Client vs Server

**What（是什么）：** Socket编程中的客户端和服务器角色：

- **Server（服务器）：** 被动等待连接的一方（类似等电话的人）
- **Client（客户端）：** 主动发起连接的一方（类似打电话的人）

**电话类比：**
- **接收方（Server）：** 确保SIM卡在 → 手机开机 → 不在飞行模式 → 等待来电
- **呼叫方（Client）：** 同上准备 → 拨号（指定要连接的对象）
- **连接建立后：** 双方可以平等地说和听

---

### 4. Socket原语（Primitives）

| 原语 | 描述 | 对应C函数 |
|------|------|----------|
| SOCKET | 创建新的通信端点 | \`socket()\` |
| BIND | 将本地地址与Socket关联 | \`bind()\` |
| LISTEN | 宣布愿意接受连接，指定队列大小 | \`listen()\` |
| ACCEPT | 被动接受传入连接（阻塞直到连接到达） | \`accept()\` |
| CONNECT | 主动尝试建立连接 | \`connect()\` |
| SEND | 通过连接发送数据 | \`write()\` / \`send()\` |
| RECEIVE | 从连接接收数据 | \`read()\` / \`recv()\` |
| CLOSE | 释放连接 | \`close()\` |

![Socket原语表：SOCKET/BIND/LISTEN/ACCEPT/CONNECT/SEND/RECEIVE/CLOSE及描述](./images/WK7-Socket-Primitives.png)

> **图片来源：** WK7-Sockets课件第14页。展示了8个Socket原语及其描述。SOCKET创建端点，BIND关联地址，LISTEN宣布接受连接，ACCEPT被动建立连接（阻塞），CONNECT主动建立连接，SEND/RECEIVE收发数据，CLOSE释放连接。

---

### 5. 客户端Socket流程

\`\`\`
getaddrinfo()    → 解析主机名和端口，获取地址信息
    ↓
socket()         → 创建Socket
    ↓
connect()        → 主动连接到服务器
    ↓
write()          → 发送数据
    ↓
read()           → 接收响应
    ↓
close()          → 关闭连接
\`\`\`

**C代码关键部分：**
\`\`\`c
// 1. 设置hints
hints.ai_family = AF_INET6;
hints.ai_socktype = SOCK_STREAM;
// 2. 解析地址
s = getaddrinfo("localhost", "5000", &hints, &res);
// 3. 遍历结果，尝试连接
for (rp = res; rp != NULL; rp = rp->ai_next) {
    connfd = socket(rp->ai_family, rp->ai_socktype, rp->ai_protocol);
    if (connfd == -1) continue;
    if (connect(connfd, rp->ai_addr, rp->ai_addrlen) != -1) break;
    close(connfd);
}
// 4. 发送数据
write(connfd, "Hello, network!\\r\\n", len);
// 5. 关闭
close(connfd);
\`\`\`

---

### 6. 服务器端Socket流程

\`\`\`
socket()         → 创建监听Socket
    ↓
setsockopt()     → 设置Socket选项（如SO_REUSEADDR）
    ↓
bind()           → 绑定到本地地址和端口
    ↓
listen()         → 开始监听连接请求
    ↓
accept()         → 阻塞等待客户端连接
    ↓
read()/write()   → 与客户端通信
    ↓
close()          → 关闭连接
\`\`\`

**服务器有两个Socket：**
1. **listening Socket（listenfd）：** "半Socket"，只包含协议、本地IP、本地端口。像接待员，等待来电并转接到另一条线路。
2. **connection Socket（connfd）：** 完整的5元组Socket，用于实际的读写通信。

**服务器被动绑定的关键细节（对应 slide p.16、p.35–36）：**
- \`listen(listenfd, 10)\` 的第二个参数是**backlog**，课件用 **10**——表示在 accept 之前内核最多为 **10** 个待完成连接排队；超过这个数新 SYN 可能被丢弃。
- 服务器端用 \`getaddrinfo(NULL, "5000", &hints, &res)\`，第一个参数传 **NULL**，并设 \`hints.ai_flags = AI_PASSIVE\`——这样得到的地址会绑定到**所有可用接口的通配地址**（INADDR_ANY），适合服务器被动监听；而客户端用 \`getaddrinfo("localhost", ...)\` 绑定到具体主机。

**TCP 连接的 6 状态管理图（对应 slide p.15，TB 6-4）**：课件用一张 6 状态图展示一条连接从建立到释放的状态流转，呼应"you hang up / no, you hang up"的半关闭场景——主动关闭方进 TIME_WAIT 等待，被动关闭方仍可发完剩余数据。这解释了为什么 FIN 是**方向性**的、要双向各发一次。

![服务器的两个Socket：listenfd（半Socket）和connfd（完整5元组）](./images/WK7-Server-Two-Sockets.png)

> **图片来源：** WK7-Sockets课件第18页。服务器有两个Socket：listening socket（listenfd）是"半Socket"，只有协议、本地IP、端口，像接待员等待来电；connection socket（connfd）是完整5元组，用于实际读写。

![服务器端代码示例：read/write/close操作](./images/WK7-Read-Write-Code.png)

> **图片来源：** WK7-Sockets课件第26页。展示了服务器端在accept之后的实际代码：通过connfd进行read/write/close操作。Socket只是创建了两台主机之间的数据管道，关键在于如何使用它。

---

### 7. 阻塞 vs 非阻塞读取

**What（是什么）：** Socket的读取操作有两种模式：

#### Blocking（阻塞模式）
- \`read()\` 会等待直到有数据到达
- 适用于简单的顺序处理
- 循环读取整个连接：\`while ((n = read(connfd, recvBuff, sizeof(recvBuff)-1)) > 0)\`

#### Non-blocking（非阻塞模式）
- \`read()\` 立即返回，即使没有数据（返回0字节）
- 通过 \`fcntl\` 设置 \`O_NONBLOCK\`
- 需要更复杂的事件处理：\`select()\` / \`pselect()\` / \`poll()\` 用于**I/O多路复用**（I/O multiplexing），可以同时监控多个文件描述符，等待其中任何一个变为可读/可写

**关键点：** 网络数据是分阶段到达的，一次 \`read()\` 读到的数据可能少于一次 \`write()\` 发送的数据。**始终检查实际读取了多少字节**。

---

### 8. getaddrinfo() 函数

**What（是什么）：** 用于解析主机名和服务名，返回可用的地址信息链表。

**Why（为什么需要）：**
- 一个主机名可能对应**多个IP地址**（IPv4、IPv6、多个接口）
- 需要遍历所有可能的地址来建立连接

**How（怎么使用）：**
\`\`\`c
struct addrinfo hints, *res;
memset(&hints, 0, sizeof hints);
hints.ai_family = AF_INET6;      // IPv6
hints.ai_socktype = SOCK_STREAM;  // TCP
s = getaddrinfo("localhost", "5000", &hints, &res);
// res是一个链表，需要遍历
\`\`\`

---

### 9. TLS/SSL Socket（概念掌握；Rust实现非考试内容）

**What（是什么）：** TLS（Transport Layer Security）在Socket之上提供加密通信。

**层次关系：**
\`\`\`
应用数据
    ↓
TLS (加密/解密)
    ↓
TCP (可靠传输)
    ↓
IP (路由)
\`\`\`

**两种使用方式：**
1. **简单加密：** 只加密数据，不验证身份——适用于不需要信任服务器的场景
2. **带身份验证的加密：** 验证服务器身份——需要信任服务器时使用（如提供个人信息的网站）

**C语言OpenSSL示例（对应 slide p.24）：** 使用 \`SSL_CTX\`、\`SSL\`、\`BIO\` 等结构实现TLS连接，课件具体示例连接 \`localhost:993\`（IMAPS 端口），用 \`SSLv23_client_method\` 创建 TLS 上下文，通过 \`BIO_new_ssl_connect\` 建立带 TLS 的连接，并设 \`SSL_MODE_AUTO_RETRY\` 让底层自动处理重试。这些是 C/OpenSSL 的具体调用名，理解概念即可，不必背 API。

![TLS/SSL层次：TLS协议运行在TCP之上，提供加密通信](./images/WK7-TLS-Layer.png)

> **图片来源：** WK7-Sockets课件第22页。Socket默认传输明文，TLS（前身为SSL）在TCP之上提供加密。TLS握手在连接开始时验证身份并建立加密参数。类似于TCP的服务但数据被加密。

---

### 10. QUIC协议 ⚠️ old/draft slides，非考试范围（Not assessable）

**What（是什么）：** QUIC 是运行在 UDP 之上的可靠传输协议，HTTP/3 使用它来降低延迟并改善丢包时的并行性。

**复习处理：** 这部分在课件中位于"The following old/draft slides are not assessable"之后。期末不用背QUIC socket类型、API细节或优缺点列表；知道"QUIC over UDP，HTTP/3基于QUIC"即可。

---

## 关键术语

| 术语 | 英文 | 含义 |
|------|------|------|
| Socket | Socket | 应用层与传输层之间的接口 |
| 文件描述符 | File Descriptor | 标识Socket/文件的整数 |
| 5元组 | 5-tuple | Socket的唯一标识（协议+本地IP+本地端口+远端IP+远端端口）|
| 监听Socket | Listening Socket | 服务器等待连接的Socket |
| 连接Socket | Connection Socket | 用于实际通信的Socket |
| 阻塞读取 | Blocking Read | 没有数据时阻塞等待 |
| 非阻塞读取 | Non-blocking Read | 没有数据时立即返回 |
| TLS | Transport Layer Security | 传输层安全协议 |
| QUIC | QUIC | 基于UDP的可靠传输协议；old/draft非考试材料，背景了解 |

---

## 常见问题

### Q1: 为什么服务器需要两个Socket？

- **Listening Socket (listenfd)：** 像接待员，只负责等待和接受新连接。它是一个"半Socket"，只有本地地址信息。
- **Connection Socket (connfd)：** 像具体的通话线路，有完整的5元组信息，用于实际的数据读写。

这样服务器可以持续接受新连接，同时与已连接的客户端通信。

### Q2: 为什么需要用getaddrinfo()而不是直接使用IP地址？

- 一个主机名可能对应多个IP地址（IPv4、IPv6、多宿主主机）
- \`getaddrinfo()\` 返回一个链表，需要遍历尝试所有可能的地址
- 支持协议无关的编程（同时支持IPv4和IPv6）

### Q3: 阻塞和非阻塞Socket的主要区别？

| 特性 | Blocking | Non-blocking |
|------|----------|-------------|
| 没有数据时 | 等待（阻塞） | 立即返回0字节 |
| 编程复杂度 | 简单 | 需要事件循环（select/poll） |
| 适用场景 | 简单的请求-响应 | 需要同时处理多个连接 |

### Q4: QUIC需要作为考试重点吗？

不需要。QUIC在本课件中属于old/draft非考试材料，只需知道它运行在UDP之上、HTTP/3使用它；不需要背QUIC socket API或详细优势。

---

## 知识点之间的联系

\`\`\`
应用程序
    ↓
Socket API (本课件)
    ├── 客户端: getaddrinfo → socket → connect → read/write → close
    └── 服务器: socket → bind → listen → accept → read/write → close
    ↓
传输层协议
    ├── TCP (可靠的，面向连接) ← WK9
    └── UDP (不可靠的，无连接) ← WK8
    ↓
网络层
    └── IP ← WK10-WK12
\`\`\`

**与其他课件的联系：**
- **WK6（OSI）：** Socket是应用层和传输层之间的接口
- **WK7-DNS-Mail：** DNS和Email都使用Socket进行通信
- **WK8-HTTP：** HTTP通过Socket发送请求和响应；HTTP/3与QUIC的关系只作背景理解
- **WK9-TCP：** TCP提供Socket底层的可靠传输
- **WK5（Secure Communication）：** TLS在Socket之上提供安全

---

## 实际应用案例

1. **Web浏览器：** 使用Socket连接Web服务器，发送HTTP请求，接收HTML/CSS/JS
2. **SSH客户端：** 通过Socket连接远程服务器，建立加密通道
3. **邮件客户端：** 通过SMTP Socket发送邮件，IMAP Socket接收邮件
4. **在线游戏：** 使用UDP Socket进行实时数据传输
5. **视频流：** 可使用UDP或应用层流媒体机制；QUIC细节不是本课件考试重点

---

## 常见错误和易错点

1. **混淆listenfd和connfd：** 服务器有两个Socket，listening socket用于接受连接，connection socket用于通信。

2. **忘记检查read()返回值：** 网络数据分阶段到达，一次read()可能读不到全部数据。

3. **5元组记错：** Socket地址由5个元素组成：协议、本地IP、本地端口、远端IP、远端端口。

4. **阻塞模式下死等：** 在阻塞模式下，如果对端不发送数据，read()会永远阻塞。

5. **忽略SO_REUSEADDR：** 服务器重启时，端口可能处于TIME_WAIT状态，需要设置SO_REUSEADDR才能重新绑定。

6. **getaddrinfo()不遍历链表：** 一个主机名可能有多个地址，需要遍历尝试所有地址。

---

## 课件总结

本课件介绍了Socket编程的基础知识：

1. **Socket概念：** 应用层与传输层之间的接口，由5元组唯一标识
2. **客户端/服务器模型：** 客户端主动连接，服务器被动等待
3. **Socket原语：** socket、bind、listen、accept、connect、read、write、close
4. **阻塞/非阻塞：** 两种读取模式，各有适用场景
5. **安全Socket：** TLS在Socket之上提供加密；Rust实现不考
6. **QUIC：** old/draft非考试材料，只需背景了解其与UDP/HTTP3的关系

---

## 复习建议

1. **理解Socket生命周期：** 能够描述客户端和服务器Socket从创建到关闭的完整流程。
2. **区分listening和connection socket：** 理解服务器为什么需要两个Socket。
3. **掌握5元组：** 理解Socket如何被唯一标识。
4. **理解阻塞/非阻塞：** 能够描述两种模式的区别和适用场景。
5. **掌握TLS概念，淡化QUIC：** TLS在socket之上提供加密；QUIC属于非考试背景，不背细节。
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Define socket — slide doorway analogy (p.6). · 定义 socket——课件 doorway 类比（p.6）。 | **EN:** Socket is the doorway between application layer and transport layer — user-space code sends messages to kernel network code. / **中文：** Socket 是应用层与传输层之间的门——用户空间代码向内核网络代码发消息。 |
| 2 | TCP connection 5-tuple. · TCP 连接的五元组。 | **EN:** Protocol, local IP, local port, remote IP, remote port. / **中文：** 协议、本地 IP、本地端口、远端 IP、远端端口。 |
| 3 | Server socket setup order (four calls). · 服务器 socket 建立顺序（四个调用）。 | **EN:** socket() → bind() → listen() → accept(). / **中文：** socket() → bind() → listen() → accept()。 |
| 4 | Client TCP connect — main calls. · 客户端 TCP 连接主要调用。 | **EN:** socket() then connect() to server address/port. / **中文：** socket() 之后 connect() 到服务器地址/端口。 |
| 5 | Listening socket vs connected socket (slide p.17–18). · Listening socket vs connected socket（课件 p.17–18）。 | **EN:** Listening socket = half socket (protocol, local IP, port only); connected socket = full 5-tuple for read/write. / **中文：** Listening socket = 半 socket（仅协议、本地 IP、端口）；connected socket = 完整五元组，用于读写。 |
| 6 | listen(listenfd, 10) — second argument. · listen(listenfd, 10) 第二个参数含义。 | **EN:** Maximum backlog — up to 10 pending connections queued before accept(). / **中文：** Backlog 上限——accept 前最多 10 个待完成连接排队。 |
| 7 | Blocking read behaviour. · Blocking read 的行为。 | **EN:** Process waits until data arrives or an error occurs — does not return immediately with nothing. / **中文：** 进程等待直到有数据到达或出错——不会空读立即返回。 |
| 8 | File descriptor after accept(). · accept() 返回什么？ | **EN:** A new connected socket file descriptor for communicating with that specific client. / **中文：** 与该特定客户端通信的新 connected socket 文件描述符。 |
| 9 | Port number purpose — demultiplexing. · 端口号作用——解复用。 | **EN:** Demultiplex incoming segments to the correct application process/socket on a host. / **中文：** 将到达的分段解复用到主机上正确的应用进程/socket。 |
| 10 | close() on listening socket effect. · close() 关闭 listening socket 的效果。 | **EN:** Stops accepting new connections; existing connected sockets may remain open until closed separately. / **中文：** 停止接受新连接；已有 connected socket 可继续直到单独关闭。 |
| 11 | Server vs client role. · Server vs client 角色。 | **EN:** Server passively waits (bind/listen/accept); client actively initiates connect(). / **中文：** Server 被动等待（bind/listen/accept）；client 主动 connect()。 |
| 12 | Socket identified by file descriptor. · Socket 如何标识？ | **EN:** In UNIX, socket is accessed via a file descriptor (integer) through system calls read/write/close. / **中文：** UNIX 中 socket 通过文件描述符（整数）经 read/write/close 等系统调用访问。 |

`,t1=`# WK7 - DNS & Email Application Layer Services

## 课件概述

本课件介绍了应用层的两个核心服务：**DNS（域名系统）**和**Email（电子邮件）**。DNS负责将人类可读的域名映射为计算机使用的IP地址，是互联网基础设施的关键组成部分。电子邮件部分重点介绍邮件系统架构、SMTP、MIME、Message Transfer & Access，以及IMAP。课件第40页之后明确标为non-examinable，DNS记录插入、HOSTS文件、DNS安全、POP3详细命令和Streaming只作背景。

---

## 必须掌握的知识点

### 1. DNS（Domain Name System，域名系统）

**What（是什么）：** DNS将人类可读的域名（如 \`unimelb.edu.au\`）映射为计算机使用的IP地址（如 \`128.250.81.2\` 或 \`fe80::69a4:1496:4354:1862\`）。

**Why（为什么需要）：**
- 人类容易记住域名，但Socket通信需要IP地址
- DNS是应用层服务，它本身也需要创建Socket来工作——需要一个硬编码的IP地址来打开第一个Socket（先有鸡还是先有蛋的问题）

**DNS的四个核心组成元素：**

#### (a) Domain Name Space（域名空间）
- 使用**树状结构**的命名空间来标识互联网上的资源
- 域名不区分大小写
- 各部分用"."分隔（与IP地址中的"."无关）
- 每个部分最多63个字符
- 整个路径最多255个字符
- 支持国际化域名（1999年起）——带来了安全问题

#### (b) DNS Database（DNS数据库）
- 命名空间树中的每个节点/叶子都有一组信息，存储在**Resource Record（资源记录，RR）**中
- 所有RR的集合构成一个**分布式数据库**

#### (c) Name Servers（域名服务器）
- 持有域名树结构某部分和相关RR信息的服务器程序
- 分层组织，从根服务器开始

#### (d) Resolvers（解析器）
- 从域名服务器提取信息以响应客户端请求的程序

---

### 2. DNS域名层次结构

**Top-level Domains (TLDs)（顶级域名）：**
- 通用TLDs：\`.com\`、\`.edu\`、\`.org\`、\`.net\`等
- 国家TLDs：\`.uk\`、\`.au\`、\`.jp\`等
- 国家TLD内部通常也遵循类似的组织结构

**域名层次示例：**
\`\`\`
                    . (root)
                   / \\
                .com  .edu  .org  .au  ...
               /       \\
         google.com   unimelb.edu.au
         /    \\
    www.google.com  mail.google.com
\`\`\`

![DNS域名层次结构：从根域名到各个TLD再到具体域名的树状结构](./images/WK7-DNS-Hierarchy.png)

---

### 3. DNS服务器类型

![Name Server Zones：DNS命名空间被划分为不重叠的zones，由根服务器层级管理](./images/WK7-Name-Server-Zones.png)

**Zones（区域）：** DNS命名空间被划分为**不重叠的区域（zones）**。每个zone由一组权威名称服务器负责管理，这些服务器对该zone内的域名信息具有权威性。

#### (a) Root Name Servers（根域名服务器）
- 形成权威查询集群
- 当本地域名服务器无法解析名称时，会联系根服务器
- 全球共有13个根服务器集群（A-M）

#### (b) Top-level Domain DNS Servers（顶级域名服务器）
- 负责 \`.com\`、\`.org\`、\`.net\`、\`.edu\` 等通用TLD和所有国家TLD
- 例如：Network Solutions维护 \`.com\` 服务器，Educause维护 \`.edu\` 服务器

#### (c) Authoritative DNS Servers（权威DNS服务器）
- 组织的DNS服务器，提供组织内服务器（如Web、邮件）的权威主机名到IP映射
- 可由组织自己或服务提供商维护

#### (d) Local DNS Server（本地DNS服务器）
- 每个ISP（住宅ISP、公司、大学）都有一个"默认域名服务器"
- 如果有缓存结果则直接返回
- 否则充当代理，将请求转发到查询层次结构中

---

### 4. DNS查询解析过程

**How（怎么工作）：**

1. 客户端的Resolver向本地DNS服务器发送查询
2. 如果本地DNS知道答案 → 直接返回
3. 如果不知道 → 本地DNS向层次结构上级查询直到根DNS
4. 根DNS → TLD DNS → 权威DNS → 返回结果给本地DNS → 返回给客户端
5. 查询受定时器约束，避免过长的响应时间

**递归查询 vs 迭代查询：**
- 客户端到本地DNS通常是**递归查询**（本地DNS负责完成全部解析）
- 本地DNS到其他服务器通常是**迭代查询**（每一步返回下一步应该查询的服务器）

**多IP地址与getaddrinfo()：** 一个域名可能对应多个IP地址（DNS的A/AAAA记录可返回多条结果）。
- \`getaddrinfo()\` 返回一个**链表**（linked list）的地址，客户端需要**遍历**这个链表，逐个尝试 \`socket()\` + \`connect()\`，直到连接成功为止
- 这种方式实现了DNS层面的基本容错——如果一个IP不可用，客户端会自动尝试下一个

---

### 5. Resource Records（资源记录）

**RR的基本格式：** \`(Name, Value, Type, TTL)\`

**常见Type：**
| Type | 含义 | Value示例 |
|------|------|----------|
| A | 主机名到IPv4地址 | (hostname, IPv4 address) |
| AAAA | 主机名到IPv6地址 | (hostname, IPv6 address) |
| NS | 域名到权威DNS服务器 | (domain, hostname of authoritative DNS) |
| CNAME | 别名到规范名 | (alias, canonical name) |
| MX | 域名到邮件服务器 | (domain, mail server hostname) |

**AAAA 记录的具体示例（对应 slide p.14）：** \`1062::A22:AAE9:51C7:8451\` —— 一条 IPv6 地址，注意 AAAA 与 A 的区别只在地址族（IPv6 vs IPv4），记录语义相同。

**绝对域名 vs 相对域名：**
- 绝对域名以"."结尾（如 \`www.google.com.\`）
- 相对域名以TLD结尾（如 \`www.google.com\`）

![Resource Record示例：展示A/AAAA/CNAME/MX/NS等记录类型及绝对/相对域名](./images/WK7-Resource-Record.png)

---

### 6. DNS缓存

**What（是什么）：** DNS查询结果会被缓存，后续相同的查询可以直接使用缓存结果，无需再次查询层次结构。

**部分缓存（partial caching，对应 slide p.42 讨论）：** 本地 DNS / resolver 不必缓存**整个域**的所有记录，可以只缓存它**已查到的那一段**。例如查 \`robot.cs.washington.edu\` 时，如果本地 NS 只查到了 \`cs.washington.edu\` 这一层的 NS 记录却没拿到最终主机记录，它仍可以缓存这条 NS 记录——下次查同子域下其它主机时就能从这一层开始，而不必再从根走。这种"查到哪缓存到哪"的策略叫部分缓存，能显著降低根/TLD 负载。

**Why（为什么重要）：**
- 减少DNS查询延迟
- 减少根服务器和TLD服务器的负载

**HOSTS文件（非考试背景）：** 课件中HOSTS File位于"The following is non-examinable material"之后，只需知道它是本地硬编码域名映射：
- Unix: \`/etc/hosts\`
- Windows: \`C:\\Windows\\System32\\drivers\\etc\\hosts\`
- 可用于广告屏蔽（将广告域名映射到 \`0.0.0.0\`）

---

### 7. DNS安全 ⚠️ 非考试背景（non-examinable）

**问题：** 原始DNS设计没有考虑安全性
- **DNS Spoofing（DNS欺骗）：** 攻击者伪造DNS响应
- **DNS Flooding（DNS洪泛）：** 用大量请求淹没DNS服务器

**解决方案：**
- **DNSSEC（DNS Security Extensions）：** 为DNS响应提供数字签名验证
- **Root Signing：** 根服务器的签名

**复习处理：** DNS Security在课件第40页之后，属于removed/non-examinable material。期末只需把它当作安全背景，不要背DNSSEC细节。

---

### 8. 电子邮件系统架构

**What（是什么）：** 电子邮件系统由两个主要组件构成：

![Email services and architecture：UA/MUA用户代理 + MTA消息传输代理](./images/WK7-Email-Architecture.png)

#### (a) User Agent (UA) / Mail User Agent (MUA)
- 用户用来阅读和发送邮件的程序（如Outlook、Thunderbird、Gmail网页）
- 基本功能：**compose**（撰写）、**report**（报告）、**display**（显示）、**dispose**（处理）（对应 slide p.46）
- 寻址方案：\`user@dns-address\`——收件人地址用 DNS 域名定位邮件域，用本地名定位域内用户
- 邮件三层结构（对应 slide p.46）：**envelope**（信封，MTA 用来路由，含 MAIL FROM / RCPT TO）+ **header**（头部，给 UA/人看的 To/From/Subject）+ **body**（正文）。信封和头部可能看起来一样，但语义不同：信封是传输用的，头部是展示用的

#### (b) Message Transfer Agent (MTA)
- 负责将邮件从源传输到目的地的程序
- 可能有SMTP relay（中继）在发送方和接收方MTA之间

**邮件格式（RFC 2822）：**
- **Header（头部）：** 包含To、From、Subject、Date等字段
- **Blank line（空行）：** 分隔头部和正文
- **Body（正文）：** 消息内容，ASCII字符

**常见头部字段：**
| 字段 | 用途 |
|------|------|
| To, Cc, Bcc | 收件人 |
| From, Sender | 发件人 |
| Subject | 主题 |
| Date | 日期 |
| Message-Id | 消息唯一标识 |
| In-Reply-To, References | 回复相关 |
| Return-Path | 退信路径 |
| Received | 传输路径记录 |

---

### 9. SMTP（Simple Mail Transfer Protocol）

![SMTP协议：使用TCP端口25，三阶段传输（handshaking→message transfer→closure）](./images/WK7-SMTP.png)

**What（是什么）：** 用于在邮件服务器之间传输邮件的协议，使用TCP，**默认端口25**。

**三个阶段：**
1. **Handshaking（握手/问候）**
2. **Transfer of messages（消息传输）**
3. **Closure（关闭）**

**特点：**
- 命令/响应交互模式：命令使用ASCII文本，响应包含状态码和短语
- 通常是直接传输：发送服务器到接收服务器
- 很"chatty"（话多），传统SMTP需要多次往返（back-and-forth）交换——在现代网络中，延迟（latency）远大于序列化延迟（serialization delay），所以这种设计会导致显著延迟
- **现代优化：** 一次性发送一个头部（one header），减少往返次数，降低延迟

---

### 10. MIME（Multipurpose Internet Mail Extensions）

**What（是什么）：** 扩展了原始的ASCII-only邮件格式，支持多种语言和多媒体内容。

**Why（为什么需要）：** 早期邮件只支持ASCII（RFC 822），无法支持其他语言和音频/图片等多媒体内容。

**MIME额外的5个消息头：**
| Header | 用途 |
|--------|------|
| MIME-Version | 标识MIME版本 |
| Content-Description | 人类可读的内容描述 |
| Content-Id | 唯一标识符 |
| Content-Transfer-Encoding | 正文如何编码传输 |
| Content-Type | 内容类型和格式 |

**Content-Type示例：** \`text/plain\`、\`text/html\`、\`image/jpeg\`、\`multipart/alternate\`等

---

### 11. 邮件接收协议

![Message Transfer & Access：SMTP传输到服务器，POP3/IMAP/HTTP访问邮箱](./images/WK7-Message-Transfer-Access.png)

#### (a) POP3（Post Office Protocol，简单了解）
- 课件的Message Transfer & Access页只要求知道POP3用于authorization和download。
- POP3的三个阶段、USER/PASS/LIST/RETR/DELE/QUIT命令位于non-examinable部分，不需要背。
- 高层问题：传统"download and delete"模式不方便重新阅读邮件。

#### (b) IMAP（Internet Message Access Protocol）
- 允许用户查询MTA
- **在会话间保持用户状态**（跨会话记忆）
- 在服务器上保留邮箱内容，允许在线和离线操作
- 更多功能，更复杂
- 需要服务器端存储支持

#### (c) HTTP
- Gmail、Hotmail、Yahoo! Mail等使用Web界面
- 通过HTTP协议访问邮件

**本地 vs 远程邮件接收：**
- **本地（已过时）：** 用户的机器直接运行MTA，有永久网络连接
- **远程（现代）：** 笔记本/手机不是MTA，通过POP3/IMAP/HTTP从邮件服务器获取邮件，网络连接可能是间歇性的

**流媒体与 WebSocket 补充（对应 slide p.50，非考背景）：** 课件在邮件之后顺带讲了实时/流媒体传输：流媒体约占**互联网下载流量的 40%**；常用协议包括 **WebSocket**（\`ws://\`、\`wss://\`，跑在端口 80/443，在 HTTP 之上做双向升级）、**RTP + RTCP / RTSP**（音视频实时传输与控制）、以及早期的 **RTMP**（Flash 时代直播）。它们大多跑在 UDP 或 HTTP 之上，是应用层多样性的体现，了解即可。

---

## 关键术语

| 术语 | 英文 | 含义 |
|------|------|------|
| 域名系统 | DNS | 将域名映射为IP地址的分布式数据库 |
| 资源记录 | Resource Record (RR) | DNS数据库中的基本数据单元 |
| 根服务器 | Root Server | DNS层次结构顶部的服务器 |
| 权威服务器 | Authoritative Server | 对特定域名区域有权威信息的服务器 |
| 解析器 | Resolver | 从DNS服务器提取信息的程序 |
| 递归查询 | Recursive Query | 服务器负责完成全部解析 |
| 迭代查询 | Iterative Query | 每步返回下一步应查询的服务器 |
| 用户代理 | User Agent (UA) | 用户读写邮件的程序 |
| 消息传输代理 | MTA | 传输邮件的服务器程序 |
| 简单邮件传输协议 | SMTP | 邮件传输协议，端口25 |
| 邮局协议 | POP3 | 邮件下载协议；详细命令非考试 |
| 互联网邮件访问协议 | IMAP | 邮件服务器访问协议 |
| 多用途互联网邮件扩展 | MIME | 扩展邮件格式支持多媒体 |

---

## 常见问题

### Q1: DNS查询中，本地DNS服务器的作用是什么？

本地DNS服务器是客户端和DNS层次结构之间的"中间人"：
- 如果有缓存结果，直接返回（快速）
- 如果没有，充当代理，向上级DNS服务器查询
- 减少了客户端直接访问根服务器的需要

### Q2: SMTP和IMAP有什么区别？

| 特性 | SMTP | IMAP |
|------|------|------|
| 方向 | 推送（Push）| 拉取（Pull）|
| 用途 | 从发送方传输到接收方服务器 | 从服务器获取邮件到客户端 |
| 状态 | 无状态 | 有状态 |
| 端口 | 25 | 143 |

### Q3: 为什么DNS使用UDP而不是TCP？

DNS查询通常使用UDP（端口53），因为：
- 查询和响应数据量小，适合单个UDP数据报
- UDP无连接，开销小，速度快
- 如果响应超过512字节，可以回退到TCP

### Q4: 为什么邮件系统需要MIME？

原始的RFC 822邮件格式只支持ASCII文本，无法：
- 使用非英语字符（如中文、日文）
- 附件（图片、文档、音频等）
- HTML格式的邮件

MIME通过添加Content-Type等头部，支持多种内容类型。

---

## 知识点之间的联系

\`\`\`
应用层服务
    ├── DNS (域名→IP映射)
    │    ├── 域名空间 (树状结构)
    │    ├── 域名服务器 (Root → TLD → Authoritative)
    │    ├── 查询过程 (递归/迭代)
    │    └── 缓存 (提高效率)
    │
    └── Email (邮件系统)
         ├── 发送: SMTP (push, port 25)
         ├── 格式: RFC 2822 + MIME
         ├── 接收: POP3 (download) / IMAP (server-side) / HTTP
         └── 架构: UA ←→ MTA ←→ MTA ←→ UA
\`\`\`

**与其他课件的联系：**
- **WK6（OSI）：** DNS和Email都是应用层协议
- **WK7-Sockets：** DNS和Email都使用Socket进行通信
- **WK8-HTTP：** HTTP也用于访问邮件（Gmail等Web邮件）
- **WK5（Secure Communication）：** DNS安全和邮件加密只作背景联系

---

## 实际应用案例

1. **访问网站时的DNS查询：** 输入 \`www.google.com\` → 浏览器向本地DNS查询 → 递归/迭代解析 → 获得IP地址 → 建立TCP连接
2. **发送邮件的过程：** 撰写 → UA通过SMTP发送到邮件服务器 → SMTP中继 → 接收方邮件服务器
3. **Gmail：** 使用Web界面（HTTP）而非IMAP/POP3，MIME支持附件和HTML
4. **广告屏蔽：** 修改HOSTS文件属于non-examinable背景示例，不作为重点

---

## 常见错误和易错点

1. **混淆SMTP和POP3/IMAP的方向：** SMTP用于**发送**邮件（push），POP3/IMAP用于**接收**邮件（pull）。

2. **DNS不是传输层协议：** DNS是应用层协议，但使用UDP（有时TCP）作为传输层。

3. **混淆递归和迭代查询：**
   - 递归查询：客户端让本地DNS负责全部解析
   - 迭代查询：本地DNS每步只问一个服务器，服务器返回下一步该问谁

4. **忽略DNS缓存：** DNS查询结果会被缓存，TTL过期后才重新查询。

5. **MIME不是独立协议：** MIME是邮件格式的扩展，不是传输协议。SMTP仍然用于传输MIME格式的邮件。

6. **POP3细节过度复习：** 期末只需知道POP3是邮件下载/访问方式之一；POP3状态机和命令不考。IMAP的"服务器端保留状态、可操作在线邮箱"更接近本课件重点。

---

## 课件总结

本课件介绍了应用层的两个核心服务：

1. **DNS：** 互联网的"电话簿"，将域名映射为IP地址
   - 分布式、层次化的数据库
   - 多级服务器：Root → TLD → Authoritative
   - 缓存机制提高效率
   - DNS安全/DNSSEC在本课件中为non-examinable背景

2. **Email：** 互联网最古老的应用之一
   - 发送：SMTP（push-based）
   - 格式：RFC 2822 + MIME（支持多媒体）
   - 接收：POP3（概念了解）、IMAP（服务器端管理）、HTTP（Web邮件）

---

## 复习建议

1. **理解DNS查询过程：** 能够描述从输入域名到获得IP地址的完整DNS查询流程，区分递归和迭代查询。
2. **掌握RR类型：** 理解A、AAAA、NS、CNAME、MX记录的含义和用途。
3. **重点掌握IMAP，POP3只高层了解：** IMAP在服务器端保留状态并支持在线邮箱操作；POP3命令和状态机不考。
4. **理解邮件传输流程：** 从发件人到收件人的完整邮件传输路径。
5. **了解MIME的作用：** 为什么需要MIME，它如何扩展邮件格式。
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | DNS hierarchy — three levels top to leaf. · DNS 层次自上而下三层。 | **EN:** Root DNS servers → TLD servers → authoritative DNS servers. / **中文：** 根 DNS 服务器 → 顶级域（TLD）服务器 → 权威 DNS 服务器。 |
| 2 | Local DNS server role. · 本地 DNS 服务器角色。 | **EN:** Default nameserver for a host/ISP — caches answers and relays queries up the hierarchy. / **中文：** 主机/ISP 的默认域名服务器——缓存答案并向上层转发查询。 |
| 3 | AAAA record example (slide p.14). · AAAA 记录例子（课件 p.14）。 | **EN:** AAAA maps hostname to IPv6, e.g. 1062::A22:AAE9:51C7:8451. / **中文：** AAAA 将主机名映射到 IPv6，如 1062::A22:AAE9:51C7:8451。 |
| 4 | A record vs AAAA record. · A 记录 vs AAAA 记录。 | **EN:** A = hostname to IPv4; AAAA = hostname to IPv6. / **中文：** A = 主机名到 IPv4；AAAA = 主机名到 IPv6。 |
| 5 | MX record purpose. · MX 记录用途。 | **EN:** Maps domain to mail server(s) that receive email for that domain. / **中文：** 将域名映射到接收该域邮件的邮件服务器。 |
| 6 | NS record purpose. · NS 记录用途。 | **EN:** Delegates a subdomain to authoritative name servers for that zone. / **中文：** 将子域委派给该区域的权威名称服务器。 |
| 7 | Four DNS components (slide p.7–8). · DNS 四个核心组成（课件 p.7–8）。 | **EN:** Domain name space, DNS database (RRs), name servers, resolvers. / **中文：** 域名空间、DNS 数据库（RR）、域名服务器、解析器（resolvers）。 |
| 8 | Local resolver relay (slide p.21). · 本地 resolver 转发（课件 p.21）。 | **EN:** Resolver sends query to local DNS; local DNS fetches answer from hierarchy if not cached, then returns to client. / **中文：** Resolver 向本地 DNS 发查询；本地 DNS 无缓存则向上查询，再返回客户端。 |
| 9 | SMTP role and port. · SMTP 角色与端口。 | **EN:** Push protocol for sending/transferring mail between MTAs; well-known port 25. / **中文：** 服务器间发送/转发邮件的推送协议；well-known 端口 25。 |
| 10 | IMAP vs POP3 — main difference. · IMAP vs POP3 主要区别。 | **EN:** IMAP keeps mail on server and syncs folders; POP3 typically downloads and may delete from server. / **中文：** IMAP 邮件留服务器并同步文件夹；POP3 通常下载并可能从服务器删除。 |
| 11 | MIME purpose. · MIME 用途。 | **EN:** Extends email format to support non-ASCII text, attachments, and multimedia. / **中文：** 扩展邮件格式以支持非 ASCII 文本、附件和多媒体。 |
| 12 | CNAME record purpose. · CNAME 记录用途。 | **EN:** Alias — canonical name points one hostname to another hostname. / **中文：** 别名——将一个主机名指向另一个规范主机名。 |

`,a1=`# COMP30023 WK8 - Transport Layer: Services & UDP

## 课件概述
本课件介绍了传输层（Transport Layer）的核心概念和服务，重点讲解了传输层在网络栈中的角色、multiplexing/demultiplexing 机制、端口号分配，以及 UDP（User Datagram Protocol）的特点和适用场景。这是从应用层到传输层的过渡，为后续 TCP 学习打基础。

---

## 必须掌握的知识点

### 1. 传输层的角色

**What**: 传输层位于应用层和网络层之间，提供应用进程间的"逻辑"通信通道。

**Why**: 网络层只提供主机到主机（host-to-host）的通信，但一台主机上可能同时运行多个应用进程。传输层解决了"数据应该交给哪个进程"的问题。同时，网络层不保证可靠性，传输层可以在其上构建可靠服务。

**How**:

传输层的职责是：
- 为应用提供所需的服务
- 利用网络层提供的服务来实现

**应用层的需求 vs 网络层的提供**:

| 应用需要 | 网络提供 |
|----------|----------|
| 不同应用的数据不混在一起 | 主机到主机的通信 |
| 数据不会超过处理速度 | 大多数时候能送达 |
| 字节流 | 有时会重复发送 |
| 可靠传输（或知道丢失了） | — |
| 有序到达 | — |

![传输层在网络栈中的位置：OSI 7层模型，Transport层高亮显示](./images/WK8-Transport-Stack-Position.png)

> **图片来源：** WK8-Transport课件第4页。Transport层（第4层）位于Application和Network之间。Host A和Host B之间通过Transport protocol通信，而Router只处理Network层及以下。Transport层的职责：Tidy up e2e（端到端整理）、Get data e2e、Tidy up p2p（点对点整理）、Get data p2p。

---

### 2. 传输层的服务类型

**What**: 传输层提供两种基本服务：面向连接的可靠服务（TCP）和无连接的不可靠服务（UDP）。

**Why**: 不同应用有不同的需求。文件传输需要可靠性（每字节都不能错），而实时语音通话更在意延迟（丢几个包可以忍受）。两种服务分别满足不同需求。

**How**:

**Connection-oriented（面向连接，TCP）**:
- 类似打电话：先建立连接 → 传输数据 → 释放连接
- 提供"完美"的连接：可靠、有序、无重复
- 隐藏了底层的 ack、拥塞控制、丢包重传等细节
- **不提供**：隐私（需 TLS）、等时性（isochrony，保持包间延迟恒定）

![Transport Entity：Host 1通过Transport protocol发送Segment到Host 2](./images/WK8-Transport-Entity.png)

> **图片来源：** WK8-Transport课件第10页。Host 1的Application layer通过Transport address将数据交给Transport entity，Transport entity封装成Segment通过Transport protocol发送到Host 2的Transport entity，再解封装交给Application layer。Transport services provide multiplexing，在不可靠的network之上提供reliable service。

---

### 3. 传输层封装（Encapsulation）

**What**: 传输层将应用数据封装成 **segment**（段），然后交给网络层封装成 **packet**（包），再交给链路层封装成 **frame**（帧）。

**Why**: 每一层添加自己的头部信息，用于该层的寻址和控制。

**How**:

\`\`\`
Application Data
    ↓ 加上 TCP/UDP 头部
[Transport Header | Application Data]  ← Segment（段）
    ↓ 加上 IP 头部
[IP Header | Segment]                   ← Packet（包）
    ↓ 加上链路层头部和尾部
[Link Header | Packet | Link Trailer]   ← Frame（帧）
\`\`\`

术语：
- **Segment**: 传输层的数据单元
- **Packet**: 网络层的数据单元
- **Frame**: 链路层的数据单元

**注意：** 这些术语只是概念性的标签。实际上，"packet"这个词在日常使用中常被用于所有三层（人们可能用"packet"指代段或帧），所以如果在其他地方看到"packet"用于传输层，不要困惑。

![传输层封装：Frame header → Packet header → Segment header → Segment payload](./images/WK8-Transport-Encapsulation.png)

> **图片来源：** WK8-Transport课件第12页。展示了数据在各层的封装过程：Segment payload被Segment header封装，整体作为Packet payload被Packet header封装，再作为Frame payload被Frame header和Frame trailer封装。

---

### 4. Multiplexing / Demultiplexing（复用/分用）

**What**: Multiplexing 是将多个应用的数据流合并到一个共享通道；Demultiplexing 是从共享通道中将数据分发到正确的应用进程。

**Why**: 一台主机上可能有多个应用同时进行网络通信（浏览器、邮件客户端、SSH），它们共享同一个网络层。传输层需要区分这些数据流。

**How**:

传输层使用**端口号（Port Number）**来标识不同的应用进程。

\`\`\`
发送方:                              接收方:
App1 (port 1234) ──┐                ┌── App1 (port 1234)
App2 (port 5678) ──┤── MUX → IP ──→DEMUX ── App2 (port 5678)
App3 (port 80)   ──┘                └── App3 (port 80)
\`\`\`

**完整地址是 5-tuple**:
- (protocol, local IP, local port, remote IP, remote port)
- TCP listen socket 和大多数 UDP socket 只用 3-tuple: (local IP, local port)

![Transport Layer Addressing：5元组寻址，端口号标识应用进程](./images/WK8-Transport-Addressing.png)

> **图片来源：** WK8-Transport课件第14页。传输层使用port numbers寻址。Full address是5-tuple（protocol, local IP, local port, remote IP, remote port）。TCP listen sockets和most UDP sockets only have 3-tuple: local IP/port。

![MUX/DEMUX：多个应用通过端口号复用到IP，再分用到对应应用](./images/WK8-Transport-MUX-DEMUX.png)

> **图片来源：** WK8-Transport课件第16页。HTTP:80、SMTP:25、SSH:22、POP3:110等多个应用通过MUX合并到IP通道，在接收端通过DEMUX根据端口号分发到对应的应用。Really 5-tuples。

---

### 5. 端口号分配

**What**: 端口号是 16 位整数（0-65535），由 IANA（Internet Assigned Numbers Authority）管理。端口的官方注册表在 **\`http://www.iana.org/assignments/port-numbers\`**（对应 slide p.15），可查到每个 well-known/registered 端口对应的服务。

**Why**: 需要一种标准化的方式来标识常用服务，同时为客户端动态分配端口。

**How**:

| 类别 | 范围 | 说明 |
|------|------|------|
| Well Known Ports | 0-1023 | 系统级服务，需要管理员权限 |
| Registered Ports (User Ports) | 1024-49151 | 用户注册的应用服务（如MySQL: 3306, PostgreSQL: 5432） |
| Dynamic Ports | 49152-65535 | 客户端临时端口 |

**常见的 Well Known Ports**（了解概念即可，不需要背）:
- 21 FTP, 22 SSH, 25 SMTP, 80 HTTP, 110 POP3, 443 HTTPS, 23 Telnet, 179 BGP

**BIND 原语：** 进程通过 BIND 系统调用将 Socket 与一个端口号关联，从而使该端口上的数据被传递到这个进程。服务器必须 BIND 到一个固定端口才能被客户端找到。

**Unix 的 xinetd**: \`/etc/xinetd\` 可以拦截到达特定端口的连接请求，按需启动服务处理。这样就不需要为不常用的服务一直保持服务器运行和 \`accept()\`，节省了系统资源。

---

### 6. UDP（User Datagram Protocol）

**What**: UDP 是一个简单的、无连接的传输层协议。它在 IP 之上只添加了 multiplexing（端口号）和可选的校验和（checksum）。

**Why**: 有些应用需要对传输有精确控制（如实时应用不想等重传），或者交互很简单（如 DNS 的请求-响应），不需要 TCP 的开销。

**How**:

**UDP 头部**（只有 8 字节，非常小）:

\`\`\`
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|            Length             |           Checksum            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
\`\`\`

- **Source Port**: 源端口号（可选）
- **Destination Port**: 目的端口号
- **Length**: UDP 段的总长度（头部 + 数据）
- **Checksum**: 校验和（IPv4 可选，IPv6 必须）

**Checksum 的计算**包括一个 IPv4 **pseudo-header**（伪头部），包含源 IP、目的 IP、协议号等信息——确保数据到达了正确的主机和端口。

---

### 7. UDP 的特点——连接无状态

**What**: UDP 是 connectionless 的，每个数据报独立发送，没有连接的概念。

**Why**: 这意味着 UDP 没有连接建立/释放的开销，但也意味着没有连接状态的维护。

**How**:
- 第一个消息从动态端口发到 well-known 端口
- 服务器从 well-known 端口回复到同一动态端口
- 客户端使用同一端口继续发送
- 服务器**猜测**这是同一对话的一部分，但必须通过 payload 内容来判断消息的顺序（如 "1/3...3/3"）

---

### 8. UDP 的优缺点和适用场景

**What**: UDP 相比 IP 只多了 multiplexing（端口号），没有流控制、错误控制或重传。

**Why**: 对于某些应用，TCP 的开销是不必要的甚至是有害的。

**How**:

**优点**:
- 简单高效，头部开销小（8 字节 vs TCP 的 20+ 字节）
- 不被迫等待丢失包的恢复
- 应用可以精确控制数据发送的时机和方式
- 支持 multicast（TCP 不支持）

**缺点**:
- 没有流控制（flow control）：发送方可能淹没接收方
- 没有错误控制（error control）：不保证数据正确到达
- 没有拥塞控制（congestion control）：可能加剧网络拥塞

**适用场景**:
1. **简单的请求-响应交互**: 客户端发送短请求，期望短响应。如 DNS 查询。如果丢失，客户端超时重试。
2. **实时应用**: VoIP、视频会议。如果包丢失，不希望等待重传，而是用"最佳猜测"来填充（loss concealment）。
3. **需要精确控制的应用**: 某些游戏、流媒体应用。

**非考补充（Not Examinable，对应 slide p.22–34）**：课件后半段提到一些**不在考试范围**的传输层相关内容，了解即可：
- **RTP（Real-time Transport Protocol）**：为实时音视频提供帧化、序号、时间戳；它在协议栈里的归属有争议（有人当应用层、有人当传输层、有人当表示层），常与 **RTCP** 配合做反馈/抖动/同步，用 **jitter buffer** 平滑到达抖动
- **OSI 的 Session / Presentation 层**：Session 层管会话（认证、会话恢复，QUIC 实际承担了这些）；Presentation 层管表示（加密、压缩、字符集映射）。TCP/IP 把它们折叠进了应用层，所以 TCP/IP 模型只有 4 层

---

### 9. UDP 安全问题——反射 DDoS 攻击

**What**: 利用 UDP 的无连接特性，攻击者可以伪造源 IP 地址发起反射 DDoS 攻击。

**Why**: UDP 没有连接建立过程，服务器无法验证源 IP 的真实性。

**How**（Memcached 反射攻击案例）:
1. 攻击者向 Memcached 服务器发送小的 UDP 请求，**伪造源 IP** 为受害者 IP
2. Memcached 服务器将大量响应发给受害者
3. 放大倍数可达 **50,000 倍**（203 字节请求 → 100MB 响应）
4. 曾产生 1.3 Tbps 的攻击流量

**教训**: Memcached 这类服务不应暴露在外部网络上。

---

## 关键术语

| 术语 | 定义 |
|------|------|
| Transport Layer | 传输层，提供进程间通信 |
| Segment | 传输层数据单元 |
| MUX/DEMUX | Multiplexing/Demultiplexing，复用/分用 |
| Port Number | 端口号，标识应用进程（16位） |
| Well Known Port | 公认端口（0-1023） |
| Dynamic Port | 动态端口（49152-65535） |
| UDP | User Datagram Protocol，用户数据报协议 |
| Datagram | 数据报，独立发送的数据包 |
| Checksum | 校验和，用于错误检测 |
| Pseudo-header | 伪头部，包含在 UDP checksum 计算中 |
| Connectionless | 无连接，每个数据报独立处理 |
| Flow Control | 流控制，防止发送方淹没接收方 |
| DDoS | Distributed Denial of Service，分布式拒绝服务攻击 |
| Loss Concealment | 丢包隐藏，用最佳猜测填充丢失数据 |

---

## 常见问题

### Q1: UDP 和 IP 的主要区别是什么？
**A**: UDP 在 IP 之上添加了端口号（multiplexing/demultiplexing）和可选的 checksum。IP 只提供主机到主机的通信，UDP 提供进程到进程的通信。

### Q2: 为什么 UDP 没有可靠性但仍然有用？
**A**: 因为有些应用不需要（甚至不想要）可靠性。实时应用更在意延迟，简单查询（DNS）可以通过应用层超时重试来处理。UDP 给应用更多控制权。

### Q3: UDP socket 是 3-tuple 还是 5-tuple？
**A**: UDP socket 通常是 3-tuple（local IP, local port），但每个 UDP 包携带完整的 5-tuple 信息。

---

## 知识点之间的联系

\`\`\`
传输层服务和 UDP
├── 传输层在网络栈中的位置 → WK6-Intro-OSI (分层模型)
├── 端口号用于 MUX/DEMUX → WK7-Sockets (5-tuple)
├── UDP 是 TCP 的基础对比 → WK9-TCP (可靠传输)
├── UDP 用于 DNS → WK7-DNS
├── UDP 用于 QUIC → 背景了解（WK7-Sockets old/draft非考）
├── UDP 用于实时流媒体 → RTP (not assessable背景)
└── Checksum 和 Pseudo-header → 网络安全基础
\`\`\`

---

## 实际应用案例

1. **DNS 查询**: 使用 UDP 端口 53。客户端发送查询请求，服务器返回响应。如果丢失，客户端超时后重试。
2. **VoIP（网络电话）**: 常使用UDP承载实时数据；RTP细节在课件not assessable部分，背景了解即可。
3. **在线游戏**: 使用 UDP 传输玩家操作。游戏状态更新频率高，丢失一个操作不值得等待重传。
4. **Memcached DDoS**: 展示了 UDP 的安全风险——无连接特性可被滥用。

---

## 常见错误和易错点

1. **混淆 Segment/Packet/Frame**: Segment 是传输层，Packet 是网络层，Frame 是链路层。不要混用。
2. **认为 UDP 完全没有错误检测**: UDP 有 checksum，但它是可选的（IPv4）且只检测不纠正。
3. **忽略 Pseudo-header**: UDP checksum 计算时包含了 pseudo-header，这确保了端口号和 IP 地址的正确性。
4. **高估 TCP 的必要性**: 不是所有应用都需要 TCP。DNS、VoIP、DHCP 都使用 UDP。
5. **混淆 well-known ports 的范围**: Well-known ports 是 0-1023，不是 0-1024。

---

## 课件总结

传输层是应用层和网络层之间的桥梁，核心功能是 **multiplexing/demultiplexing**（通过端口号区分不同应用）。UDP 是最简单的传输层协议：
- 无连接、不可靠
- 头部只有 8 字节
- 适合简单请求-响应和实时应用
- 缺少流控制和拥塞控制，存在安全风险

TCP 将在后续课件中介绍，它在 UDP 的基础上提供了可靠性、有序性和流控制。

---

## 复习建议

1. 理解传输层在网络栈中的位置和角色
2. 掌握 MUX/DEMUX 的概念和 5-tuple 寻址
3. 记住端口号的三个类别和范围
4. 理解 UDP 的头部格式（4个字段，共8字节）
5. 对比 UDP 和 TCP 的特点（为 WK9 做准备）
6. 理解 UDP 适用的场景和原因
7. 了解 UDP 的安全风险（反射 DDoS）
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Transport vs network layer scope. · 传输层 vs 网络层范围。 | **EN:** Network = host-to-host; transport = process-to-process using ports. / **中文：** 网络层 = 主机到主机；传输层 = 用端口实现进程到进程。 |
| 2 | Well-known, registered, dynamic port ranges. · Well-known、registered、dynamic 端口范围。 | **EN:** 0–1023 well-known; 1024–49151 registered; 49152–65535 dynamic/ephemeral. / **中文：** 0–1023 well-known；1024–49151 registered；49152–65535 dynamic/ephemeral。 |
| 3 | IANA port registry URL (slide p.15). · IANA 端口注册表 URL（课件 p.15）。 | **EN:** http://www.iana.org/assignments/port-numbers / **中文：** http://www.iana.org/assignments/port-numbers |
| 4 | UDP header fields (four main). · UDP 首部四个主要字段。 | **EN:** Source port, destination port, length, checksum. / **中文：** 源端口、目的端口、长度、校验和。 |
| 5 | UDP checksum — pseudo-header (slide p.20). · UDP 校验和——伪首部（课件 p.20）。 | **EN:** Checksum covers UDP segment plus pseudo-header (src/dst IP, protocol, length). / **中文：** 校验和覆盖 UDP 段加伪首部（源/目的 IP、协议、长度）。 |
| 6 | Multiplexing at sender. · 发送端 multiplexing。 | **EN:** Gathering data from multiple application sockets and passing to network layer with proper headers. / **中文：** 从多个应用 socket 收集数据，加首部交给网络层。 |
| 7 | Demultiplexing at receiver. · 接收端 demultiplexing。 | **EN:** Delivering incoming segments to correct socket using destination port (and IP for UDP). / **中文：** 用目的端口（UDP 还看 IP）将到达分段交给正确 socket。 |
| 8 | 3-tuple vs 5-tuple (slide p.14). · 3 元组 vs 5 元组（课件 p.14）。 | **EN:** Full address = 5-tuple (protocol, local IP, local port, remote IP, remote port); TCP listen/most UDP sockets use 3-tuple (local IP, local port). / **中文：** 完整地址 = 5 元组；TCP listen/多数 UDP socket 用 3 元组（本地 IP、本地端口）。 |
| 9 | UDP connectionless — meaning. · UDP 无连接的含义。 | **EN:** No handshake or connection state — each datagram is independent. / **中文：** 无握手或连接状态——每个 datagram 独立。 |
| 10 | When prefer UDP over TCP? (two cases). · 何时选 UDP 而非 TCP？（两例） | **EN:** Simple request-response (DNS) and real-time apps tolerating loss (VoIP). / **中文：** 简单请求-响应（DNS）与可容忍丢包的实时应用（VoIP）。 |
| 11 | UDP strengths and weaknesses (slide p.23). · UDP 优缺点（课件 p.23）。 | **EN:** Strengths: simple, low header overhead, no forced retransmission wait, multicast. Weaknesses: no flow/error/congestion control. / **中文：** 优点：简单、首部小、不强制等重传、支持 multicast。缺点：无流控/差错控制/拥塞控制。 |
| 12 | Memcached reflected DDoS attack (slide p.25). · Memcached 反射 DDoS（课件 p.25）。 | **EN:** Attacker spoofs victim IP; small UDP query triggers huge response to victim (amplification). / **中文：** 攻击者伪造受害者 IP；小 UDP 查询触发大响应打向受害者（放大攻击）。 |

`,i1=`# COMP30023 WK8 - Application Layer: HTTP

## 课件概述
本课件介绍了**超文本传输协议（HTTP）**——World Wide Web 的核心协议。考试重点是 Web 的组成部分（client/server/URL）、HTTP 协议的工作流程、请求与响应格式、persistent vs non-persistent 连接、HTTP 方法和状态码、常见HTTP headers、HTTPS、HTTP/2 和 HTTP/3。Cookies、web cache/proxy 和多线程web server位于课件后半的背景/非考材料中，只需简单了解。

---

## 必须掌握的知识点

### 1. WWW 的三个组成部分

**What**: World Wide Web 由三个核心组件构成：Client（客户端）、Server（服务器）和 URL（统一资源定位符）。

**Why**: 理解 Web 的基本架构是学习 HTTP 的前提。Web 是一个分布式的信息系统，需要明确谁在请求、谁在响应、如何定位资源。

**How**:
- **Client**: 通常是浏览器（browser），负责向服务器发送 HTTP 请求并渲染返回的页面
- **Server**: 守护进程（daemon），监听特定端口（默认80），接收请求并返回内容
- **URL**: 资源的地址，格式为 \`scheme://host[:port]/path[?query][#fragment]\`

\`\`\`
URL 结构示例:
https://www.example.com:443/path/page.html?name=value#section1
│         │              │   │              │         │
scheme    host           port path           query     fragment
\`\`\`

**URI vs URL（对应 slide p.10，重要区分）**：
- **URI（Uniform Resource Identifier）** 是更广的概念，**包含 URL 和 URN**；甚至像 **ISBN** 这种标识符也属于 URI（它标识了一本书，但不是"定位"它的地址）
- **URL** 是 URI 中"通过位置定位资源"的子集，可以是**绝对**的（\`http://www.google.com\`）也可以是**相对**的（\`./nextpage.html\`，相对当前页面解析）
- 完整语法示例：\`abc://user:passwd@example.com:123/path/data?key=value#frag1\`——可带**认证信息** \`user:passwd@\`，这是简单 URL 模板里常省略的部分
- 一句话：**所有 URL 都是 URI，但不是所有 URI 都是 URL**（URN/ISBN 是 URI 但不是 URL）

![WWW组成部分：Client通过Browser连接Server，URL = Protocol + DNS Name + file name](./images/WK8-WWW-Components.png)

> **图片来源：** WK8-HTTP课件第6页。Client通过浏览器访问Web Server，Server通过daemon提供内容。Hyperlink在不同Server之间链接。URL ≈ Protocol + DNS Name + file name。

---

### 2. HTTP 协议概述

**What**: HTTP（HyperText Transfer Protocol）是一个应用层协议，定义了 Web 上资源交换的规则。它基于请求-响应模型，客户端发送请求，服务器返回响应。

**Why**: HTTP 是整个 Web 的基础。浏览器加载网页、API 调用、文件下载等都依赖 HTTP。

**How**:
1. 浏览器解析 URL，确定服务器的 DNS 名
2. 通过 DNS 查询获取服务器的 IP 地址
3. 建立 TCP 连接（默认端口80）
4. 发送 HTTP 请求消息
5. 服务器处理请求并返回 HTTP 响应消息
6. 浏览器渲染页面，可能需要获取其他资源（图片、CSS、JS）
7. 关闭 TCP 连接

**课件 11 步流程（对应 slide p.15）**：完整版还包含——浏览器**边收边渲染**（progressive page display，HTML 到一部分就开始布局）；对新发现的每个嵌入对象重复"DNS→TCP→请求→响应"；persistent 连接下复用同一条 TCP 减少握手；最后由一方关闭连接。关键加细：**渲染不是等全部对象到齐才开始**，而是渐进式的。

---

### 3. Non-persistent vs Persistent 连接

**What**: HTTP/1.0 使用 non-persistent 连接（每个请求/响应对使用独立的 TCP 连接），HTTP/1.1 默认使用 persistent 连接（同一 TCP 连接上发送多个请求/响应）。

**Why**: Non-persistent 连接需要为每个对象建立新的 TCP 连接，涉及三次握手开销，效率低。Persistent 连接避免了重复建立连接的开销。

**How**:

**Non-persistent HTTP (HTTP/1.0)**:
- 每个对象需要 2 个 RTT（Round Trip Time）：一个用于 TCP 建立，一个用于 HTTP 请求/响应
- 加上文件传输时间
- 浏览器通常并行打开多个 TCP 连接来加速

**Persistent HTTP (HTTP/1.1)**:
- 服务器发送响应后保持连接开放
- 后续请求可以复用同一连接
- 支持 **pipelining**：客户端不必等待前一个请求的响应就可以发送下一个请求

\`\`\`
(a) Non-persistent: 每个对象一个新连接
[连接建立] [请求/响应] [关闭] ... [连接建立] [请求/响应] [关闭]

(b) Persistent, sequential:
[连接建立] [请求1/响应1] [请求2/响应2] [请求3/响应3] ... [关闭]

(c) Persistent, pipelined:
[连接建立] [请求1] [请求2] [请求3] [响应1] [响应2] [响应3] ... [关闭]
\`\`\`

![HTTP连接类型：(a)非持久连接 (b)持久连接顺序请求 (c)持久连接管线化请求](./images/WK8-HTTP-Connection.png)

> **图片来源：** WK8-HTTP课件第14页。(a)每次请求都需要新的Connection setup（non-persistent）；(b)一次Connection setup后顺序发送多个请求（persistent）；(c)一次Connection setup后管线化发送多个请求（pipelined）。

---

### 4. HTTP 请求消息格式

**What**: HTTP 请求由请求行（request line）和头部行（header lines）组成，以空行（CRLF）结束。

**Why**: 理解请求格式对于编程实现 HTTP 客户端/服务器以及调试网络问题至关重要。

**How**:

\`\`\`
GET /somedir/page.html HTTP/1.1          ← 请求行（方法 URL 版本）
Host: www.somesite.com                   ← Host 头部（必须）
User-Agent: Mozilla/5.0                  ← 浏览器信息
Connection: close                        ← 告诉服务器发送完关闭连接
Accept-language: fr                      ← 首选语言
                                         ← 空行（两个 CRLF）表示头部结束
\`\`\`

![HTTP请求示例：request line + header lines + blank line (2 CR/LF)](./images/WK8-HTTP-Request-Example.png)

> **图片来源：** WK8-HTTP课件第18页。GET /somedir/page.html HTTP/1.1 是请求行（method URL version），后面是header lines（Host, User-agent, Connection, Accept-language），最后是Blank line（2 CR/LF）表示消息结束。

---

### 5. HTTP 请求方法

**What**: HTTP 定义了多种请求方法，每种有不同的语义。

**Why**: 不同的操作应该使用不同的方法，这关系到安全性（Safe）和幂等性（Idempotent）。

**How**:

| 方法 | Safe | Idempotent | Cacheable | 用途 |
|------|------|------------|-----------|------|
| GET | Yes | Yes | Yes | 获取资源 |
| HEAD | Yes | Yes | Yes | 只获取头部，不返回 body |
| POST | No | No | 视情况 | 提交数据（如表单） |
| PUT | No | Yes | No | 上传/替换资源 |
| DELETE | No | Yes | No | 删除资源 |
| OPTIONS | Yes | Yes | No | 查询服务器支持的方法 |
| TRACE | Yes | Yes | No | 回显请求，用于调试 |
| PATCH | No | No | No | 部分修改资源 |
| CONNECT | No | No | No | 创建隧道，用于HTTPS代理连接 |

**Safe**: 只用于信息检索，不应改变服务器状态
**Idempotent**: 多次相同的请求与一次请求的效果相同

---

### 6. HTTP 响应消息格式和状态码

**What**: HTTP 响应由状态行（status line）、头部行和消息体（body）组成。

**Why**: 状态码告诉客户端请求的结果，是调试和错误处理的基础。

**How**:

\`\`\`
HTTP/1.1 200 OK                         ← 状态行（版本 状态码 短语）
Connection: close
Date: Thu, 06 Aug 2009 12:00:15 GMT
Server: Apache/2.2.11 (Unix)
Last-modified: Mon, 22 Jun 2009
Content-Length: 6821
Content-Type: text/html
                                         ← 空行
<html><head>...</html>                   ← 消息体
\`\`\`

**状态码分类**:

| 类别 | 含义 | 常见例子 |
|------|------|----------|
| 1xx | Information | 100 Continue |
| 2xx | Success | 200 OK, 204 No Content |
| 3xx | Redirection | 301 Moved Permanently, 304 Not Modified |
| 4xx | Client Error | 403 Forbidden, 404 Not Found |
| 5xx | Server Error | 500 Internal Server Error, 503 Service Unavailable |

---

### 7. 常见 HTTP 头部

**What**: HTTP 头部传递关于请求/响应的元数据。

**Why**: 头部控制缓存行为、内容类型、连接管理等重要功能。

**How**:

**请求头部**:
- \`Host\`: 服务器的 DNS 名（必须）
- \`User-Agent\`: 浏览器和平台信息
- \`Accept-Encoding\`: 客户端能处理的压缩格式
- \`Accept-Language\`: 客户端首选语言
- \`If-Modified-Since\`: 缓存新鲜度检查
- \`Referer\`: 请求来源页面
- \`Cookie\`: 之前设置的 cookie

**响应头部**:
- \`Content-Type\`: 页面的 MIME 类型（如 \`text/html\`）
- \`Content-Encoding\`: 内容编码方式（如 gzip）
- \`Content-Length\`: 内容长度（字节）
- \`Last-Modified\`: 页面最后修改时间
- \`Set-Cookie\`: 设置 cookie
- \`Location\`: 重定向目标 URL

**通用头部**:
- \`Date\`: 消息发送时间
- \`Cache-Control\`: 缓存指令
- \`Etag\`: 内容标签（用于缓存验证）

![HTTP Headers表：请求头部和响应头部的常见字段及描述](./images/WK8-HTTP-Headers.png)

> **图片来源：** WK8-HTTP课件第22页。请求头部包括Host（服务器DNS名）、User-Agent（浏览器信息）、Accept-Encoding（压缩格式）、Accept-Language（首选语言）、If-Modified-Since（缓存检查）、Referer（来源URL）。响应头部包括Content-Type（MIME类型）、Content-Encoding（编码方式如gzip）、Last-Modified（最后修改时间）。

---

### 8. HTTPS - HTTP over TLS

**What**: HTTPS 不是一个独立的协议，而是 HTTP 运行在 TLS（Transport Layer Security）之上。

**Why**: 普通 HTTP 以明文传输，容易被窃听和篡改。HTTPS 提供加密、认证和完整性保护。

**How**:
- 使用端口 **443** 而非 80
- 所有内容（包括 URL 路径）都被加密，不仅仅是 payload
- 客户端和服务器先进行 TLS 握手，建立加密通道
- 然后在加密通道上进行普通的 HTTP 通信

---

### 9. HTTP/2 和 HTTP/3

**What**: HTTP/2 和 HTTP/3 是 HTTP 协议的演进版本，主要目标是降低延迟。

**Why**: HTTP/1.1 存在队头阻塞（head-of-line blocking）问题——一个请求阻塞了后续请求。

**How**:

**HTTP/2 改进**:
- **Header 压缩**: 减少重复头部的传输开销
- **Server Push**: 服务器可以主动推送客户端即将需要的资源（如在发送 HTML 时提前推送其中引用的图片）
- **Multiplexing**: 在同一 TCP 连接上多路复用多个请求，互不阻塞
- 虽然逻辑上兼容 HTTP/1.1，但在 TCP 层面完全不同
- **版本协商：** 客户端和服务器在连接建立时可以选择使用 HTTP/1.1、HTTP/2 或其他协议（通过 ALPN 等机制协商）

**HTTP/3 改进**:
- 基于 **QUIC** 协议（而非 TCP），QUIC 运行在 UDP 之上
- 更好的并行性，尤其在丢包场景下（QUIC 避免了 TCP 的队头阻塞）
- HTTP 层面与 HTTP/2 基本相同
- 融合了 TLS 握手与连接建立

**部署现状（对应 slide p.24–25，了解即可）**：
- HTTP/2 已被约 **1/3 的网站** 支持（"Supported by 1 in 3 web sites"）
- HTTP/3 已成为 **Proposed standard**，同样约 **1/3 的服务器** 支持
- 两者都在快速普及，但 HTTP/1.1 仍是兜底，协商失败时回落

---

### 10. Cookies ⚠️ 背景补充，非核心考试范围

**What**: Cookie 是服务器发送给浏览器的一小段数据（<4KB），浏览器会在后续请求中自动回传。

**复习处理：** Cookies在课件"And finally/Background"附近出现，后续详细cookie例子在not assessable部分。期末重点仍是HTTP请求/响应、headers、状态码、连接管理和HTTP/2/3；Cookie只需知道它用于在HTTP消息中携带状态。

**How**:
1. 服务器在响应中通过 \`Set-Cookie\` 头部设置 cookie
2. 浏览器保存 cookie（包括 domain、path、content、expiry、security 五个字段）
3. 后续向同一 domain 发送请求时，浏览器自动在 \`Cookie\` 头部中携带 cookie

**Cookie 的争议：** 可用于用户跟踪（tracking），引发隐私问题。课件只用它作为"tracking with cookies is well known"的背景提醒，不需要背浏览器指纹等扩展材料。

---

### 11. Web Cache（Web 缓存/代理）⚠️ not assessable，简单了解

**What**: Web cache（也叫 proxy cache）是位于客户端和源服务器之间的中间服务器，用于缓存经常访问的内容。

**复习处理：** Web cache/proxy在课件"The remainder of these slides are not assessable"之后。只需知道目标是减少响应时间、降低源服务器负载；不需要背proxy工作细节或多线程web server图。

![多线程Web服务器架构：Front end + Processing modules (threads) + Cache + Disk](./images/WK8-Multi-threaded-Server.png)

> **⚠️ 非考试范围（not assessable）：** 该图片及其相关说明仅为背景知识，不在考试范围内。

> **图片来源：** WK8-HTTP课件第30页。Client发送Request到Server的Front end，Front end将请求分配给多个Processing module（thread），每个thread从Cache或Disk获取数据并返回Response。

---

### 12. HTTP 与 SMTP 的对比

**What**: HTTP 和 SMTP 都是应用层协议，但设计理念和工作方式有本质不同。

| 特性 | HTTP | SMTP |
|------|------|------|
| 方向 | Pull（客户端拉取） | Push（发送方推送） |
| 消息格式 | 每个对象独立封装 | 所有内容在一个消息中 |
| 编码 | 二进制数据可直接传输 | 需要编码（如 Base64） |
| 用途 | 获取 Web 资源 | 发送电子邮件 |

**SMTP 对话示例（对应 slide p.21）**：SMTP 是命令/响应式的，每条命令后服务器回一个**3 位状态码**：
\`\`\`
C: MAIL FROM:<alice@example.com>
C: RCPT TO:<bob@example.com>
C: DATA
C: From: alice@example.com
C: To: bob@example.com
C: Subject: Hello
C:
C: body text
C: .
S: 250 Message accepted
\`\`\`
关键：服务器用 \`250\` 表示成功接受；\`DATA\` 之后输入正文，以单独一行 \`.\` 结束；这和 HTTP"一次性发完整请求"不同，SMTP 是**逐条命令交互**的。

**Wireshark 抓包（对应 slide p.17，了解即可）**：课件用 Wireshark 演示了真实的 HTTP 交互——能看到 TCP 三次握手、HTTP 请求行、各 header、响应状态行和 body 在网络上的实际字节。这是把"协议格式"和"线上真实数据"对应起来的最佳工具，期末不考 Wireshark 操作，但理解它展示的字节能帮你想清楚格式。

---

## 关键术语

| 术语 | 定义 |
|------|------|
| HTTP | 超文本传输协议，Web 的核心应用层协议 |
| URL | 统一资源定位符，资源的地址 |
| URI | 统一资源标识符，包含 URL 和 URN |
| RTT | Round Trip Time，往返时间 |
| Persistent Connection | 持久连接，TCP 连接在多个请求间复用 |
| Pipelining | 管线化，无需等待响应即可发送后续请求 |
| MIME Type | 内容类型标识（如 text/html, image/png） |
| Cookie | 服务器存储在客户端的状态数据；背景了解 |
| Web Cache | Web 缓存/代理服务器；not assessable背景 |
| HTTPS | HTTP over TLS，加密的 HTTP |
| TLS | Transport Layer Security，传输层安全协议 |
| QUIC | 基于 UDP 的传输协议，HTTP/3 的基础 |
| Safe Method | 不修改服务器状态的方法（GET, HEAD） |
| Idempotent Method | 多次调用效果相同的方法 |

---

## 常见问题

### Q1: 为什么 HTTP/1.0 要为每个对象建立新连接？
**A**: HTTP/1.0 设计简单，每次请求-响应后就关闭连接。这确保了服务器资源不会被长期占用，但效率低。浏览器通过并行打开多个连接来缓解这个问题。

### Q2: HTTP/2 解决了队头阻塞问题，为什么还需要 HTTP/3？
**A**: HTTP/2 在同一 TCP 连接上多路复用，但 TCP 层面仍然有队头阻塞——一个 TCP 段丢失会阻塞该连接上的所有流。HTTP/3 使用 QUIC（基于 UDP），每个流独立处理丢包，真正消除了队头阻塞。

### Q3: Cookies 和 Web Cache 需要背吗？
**A**: 不作为核心考试重点。Cookies只需知道用于在HTTP消息中携带状态；Web cache/proxy位于not assessable背景部分，知道其目标是减少响应时间即可。

---

## 知识点之间的联系

\`\`\`
HTTP 协议
├── 依赖 DNS 解析域名 → WK7-DNS
├── 运行在 TCP 之上 → WK8-Transport-Services (TCP 端口)
├── HTTPS 使用 TLS → WK5-Secure-Communication
├── HTTP/3 使用 QUIC → 基于 UDP → WK7-Sockets
├── Cookie 维持状态 → 背景了解
└── Web Cache → not assessable背景
\`\`\`

---

## 实际应用案例

1. **浏览网页**: 输入 URL → DNS 解析 → TCP 连接 → HTTP 请求 → 服务器返回 HTML → 浏览器请求图片/CSS/JS → 渲染页面
2. **API 调用**: RESTful API 使用 GET/POST/PUT/DELETE 方法操作资源
3. **CDN**: Content Delivery Network 利用缓存思想，将内容缓存到全球各地的节点（背景了解）
4. **登录认证**: 通过 Cookie 或 token 维持登录状态（背景了解）

---

## 常见错误和易错点

1. **混淆 Safe 和 Idempotent**: Safe 意味着不修改状态，Idempotent 意味着多次调用效果相同。GET 既是 safe 又是 idempotent，PUT 是 idempotent 但不是 safe。
2. **忽略 Host 头部**: HTTP/1.1 要求 Host 头部是必须的，因为同一 IP 可能托管多个网站（虚拟主机）。
3. **混淆 HTTP 版本特性**: HTTP/1.0 是 non-persistent，HTTP/1.1 默认 persistent，HTTP/2 是 multiplexing over TCP，HTTP/3 是 over QUIC/UDP。
4. **误解 HTTPS**: HTTPS 不仅仅是"加密的 HTTP"，URL 路径也被加密（不像有些人认为的只有 body 被加密）。
5. **Cookie细节过度复习**: Cookie和Web Cache不是本课件核心考试范围，不要把浏览器指纹、具体cookie字段或proxy实现当作重点。

---

## 课件总结

HTTP 是 Web 的核心协议，从 HTTP/1.0 的简单请求-响应模型演进到 HTTP/3 基于 QUIC 的高效传输。关键概念包括：
- **连接管理**: non-persistent → persistent → pipelining → multiplexing
- **安全**: 通过 TLS/HTTPS 保护数据
- **性能**: 通过 Header 压缩、Server Push、HTTP/3 over QUIC 降低延迟；Web Cache是背景材料

---

## 复习建议

1. 掌握 HTTP 请求和响应的完整格式（包括请求行、状态行、头部）
2. 理解 persistent vs non-persistent 的性能差异（RTT 计算）
3. 记住常见的状态码分类（1xx-5xx）和几个重要的具体状态码
4. 对比 HTTP/1.1、HTTP/2、HTTP/3 的主要区别
5. 了解 HTTPS 如何保护通信（结合 WK5 的 TLS 知识）
6. Cookies/Web Cache只作背景了解，不要作为主要背诵点
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | URI vs URL. · URI vs URL。 | **EN:** URI = identifier (includes URN like ISBN); URL = locator with access mechanism (http://…). All URLs are URIs. / **中文：** URI = 标识符（含 URN 如 ISBN）；URL = 带访问机制的定位符（http://…）。所有 URL 都是 URI。 |
| 2 | Persistent vs non-persistent HTTP. · 持久 vs 非持久 HTTP 连接。 | **EN:** Non-persistent = one object per TCP connection; persistent = multiple objects over same connection. / **中文：** 非持久 = 每个对象一条 TCP 连接；持久 = 同一连接传多个对象。 |
| 3 | HTTP 11-step flow — progressive display (slide p.15). · HTTP 11 步流程——渐进渲染（课件 p.15）。 | **EN:** DNS → TCP setup → HTTP request → response; browser renders progressively; repeat for embedded objects; may reuse persistent connection. / **中文：** DNS → TCP 建立 → HTTP 请求 → 响应；HTML 边收边渲染；嵌入对象重复此流程；可复用持久连接。 |
| 4 | HTTP request line — GET example. · HTTP 请求行——GET 例子。 | **EN:** GET /path HTTP/1.1 — method, URI/path, HTTP version. / **中文：** GET /path HTTP/1.1——方法、URI/路径、HTTP 版本。 |
| 5 | HTTP response status line format. · HTTP 响应状态行格式。 | **EN:** HTTP/version status-code reason-phrase (e.g. HTTP/1.1 200 OK). / **中文：** HTTP/版本 状态码 原因短语（如 HTTP/1.1 200 OK）。 |
| 6 | Conditional GET — 304 Not Modified (slide p.19–22). · Conditional GET——304 Not Modified（课件 p.19–22）。 | **EN:** Client sends If-Modified-Since; if unchanged server returns 304 Not Modified with no body. / **中文：** 客户端发 If-Modified-Since；未修改则服务器回 304 Not Modified，无 body。 |
| 7 | HTTPS — port (slide p.23). · HTTPS 端口（课件 p.23）。 | **EN:** HTTPS uses port 443 (HTTP over TLS). / **中文：** HTTPS 使用端口 443（HTTP 跑在 TLS 之上）。 |
| 8 | HTTP/2 main improvement — multiplexing (slide p.24). · HTTP/2 主要改进——多路复用（课件 p.24）。 | **EN:** Many streams multiplexed over one TCP connection; header compression. / **中文：** 单 TCP 连接上多路复用多条流；首部压缩。 |
| 9 | HTTP GET vs POST. · GET vs POST。 | **EN:** GET retrieves data (should be safe/idempotent); POST submits data and may change server state. / **中文：** GET 获取数据（应安全/幂等）；POST 提交数据并可能改变服务器状态。 |
| 10 | SMTP success reply code example (slide p.21). · SMTP 成功应答码例子（课件 p.21）。 | **EN:** 250 Message accepted for delivery. / **中文：** 250 Message accepted（接受投递）。 |
| 11 | HTTP is stateless — meaning. · HTTP 无状态的含义。 | **EN:** Server retains no information about past requests between connections. / **中文：** 服务器在连接间不保留过去请求的信息。 |
| 12 | Non-persistent HTTP cost. · 非持久 HTTP 的开销。 | **EN:** Each object needs new TCP connection — at least 2 RTT per object (TCP setup + request/response). / **中文：** 每个对象需新 TCP 连接——每对象至少 2 RTT（TCP 建立 + 请求/响应）。 |

`,s1=`# WK9 - TCP (Transmission Control Protocol)

## 课件概述

本课件详细介绍 TCP 协议的核心机制，包括 TCP 的特性、服务模型、头部格式、连接建立（三次握手）、连接关闭（FIN/RST）、SYN Flooding 攻击，以及 Sliding Window 流量控制机制。TCP 是互联网最重要的传输层协议，提供了可靠的、面向连接的字节流传输服务。

---

## 必须掌握的知识点

### 1. TCP 概述与特性

#### What（是什么）
TCP（Transmission Control Protocol）是一种**面向连接的、可靠的、字节流**传输层协议。它让应用程序可以发送和接收字节流，而无需担心：
- **Segmenting into IP datagrams**（分段）→ **Stream oriented**（面向流）
- **Bytes being dropped or duplicated**（丢包或重复）→ **Reliable**（可靠）
- **Bytes arriving out of order**（乱序到达）→ **In order**（有序）

#### Why（为什么需要）
网络层（IP）提供的是"尽力而为"的服务，存在以下问题：
- Packets don't say which application they are for（不标识应用）
- Packets may be corrupted（可能损坏）
- Packets may be lost（可能丢失）
- Packets may arrive out of order（可能乱序）
- Packets may be duplicated（可能重复）
- Packets may arrive faster than we can process（可能太快）

TCP 提供了"更干净、更友好"的服务集。其中TCP使用**校验和（Checksum）**检测损坏的segment——这是一种廉价哈希（而非数字签名），只检测意外损坏，不是用于安全目的。

**传输层类比（对应 slide p.2–3）**：课件把 **UDP 比作短信（text messages）**——发出去就完事，不保证送达、不需要先"接通"；把 **TCP 比作电话（phone call）**——先拨号建立连接（握手），确认对方在听，然后双向持续对话，挂断前要正式道别（FIN）。这个类比帮助记住"connectionless vs connection-oriented"的根本差别。

#### How（工作原理）
TCP transport entity 接受用户数据流，将其分段为 <64KB 的 segments（通常 1460 bytes，以便 IP + TCP header 能装入单个 Ethernet frame），每个 segment 作为独立的 IP datagram 发送。接收端 TCP entity 从封装中重建原始字节流。

---

### 2. TCP 的关键特性

| 特性 | 说明 |
|------|------|
| **Full duplex** | 全双工，数据可同时双向传输 |
| **End to end** | 端到端，精确的发送-接收对 |
| **Byte streams** | 字节流，**不保留**应用层消息边界 |
| **Buffer capable** | 缓冲能力强，TCP entity 可选择何时发送 |

**重要理解**：TCP 是**字节流**而非**消息流**。这意味着：
- 不能区分一次 \`write()\` 和下一次 \`write()\` 的边界
- 发送端发 4 个 512-byte segment，接收端可能一次 \`READ\` 收到全部 2048 bytes
- 多次 \`write()\` 可能合并到同一 packet（Nagle's algorithm）

**缓冲的权衡（对应 slide p.13）**：TCP entity 可以攒一批数据再发，这是"Buffer capable"带来的好处——**减少开销**（更少的 header、更少的 segment）但**增加延迟**（等数据攒满才走）。所以 TCP 在"立刻发小包"和"攒着发大包"之间有取舍，Nagle 算法就是为小包做合并的典型策略。

---

### 3. TCP Service Primitives（服务原语）

| Primitive | Packet Sent | Meaning |
|-----------|-------------|---------|
| **LISTEN** | (none) | 设置 kernel 跟踪 SYN packets |
| **ACCEPT** | (none) | 阻塞直到有连接请求 |
| **CONNECT** | CONNECTION REQ | 主动尝试建立连接 |
| **SEND** | DATA | 发送数据 |
| **RECEIVE** | (none) | 阻塞直到 DATA packet 到达 |
| **DISCONNECT** | DISCONNECTION REQ | 请求释放连接 |

\`Select\` 是非 TCP 原语，允许非阻塞接收（non-blocking receive）。

---

### 4. TCP Service Model（服务模型）

#### What（是什么）
发送方和接收方都创建 **socket**：
- Socket 是一个 kernel 数据结构，由 **5-tuple** 命名：
  - Source IP, Source Port, Destination IP, Destination Port, Protocol
- TCP 连接必须在发送方 socket 和接收方 socket 之间**显式建立**

#### 示例
\`\`\`
Host 128.250.58.23                    Host 93.184.216.34
Port 38286 ←→ Port 80                Port 80
Port 53970 ←→ Port 80                Port 80
Web browser (client)                  Web server
\`\`\`

---

### 5. TCP Segment 格式

![TCP Header Format - Source/Dest port, Seq/Ack numbers, Flags, Window size](./images/WK9-TCP-Header-Format.png)
*TCP Header 格式：20-60 bytes，关键字段包括 Sequence Number、Acknowledgement Number、Flags（SYN/ACK/FIN/RST）、Window Size（Tanenbaum TN 6th 6-36）*

#### TCP Header（20-60 bytes）

| 字段 | 大小 | 说明 |
|------|------|------|
| **Source port** | 16 bits | 发送端端口 |
| **Destination port** | 16 bits | 接收端端口 |
| **Sequence Number** | 32 bits | 如果 SYN=1: 初始序列号；如果 SYN=0: 本 segment 第一个数据字节的累积序列号 |
| **Acknowledgement Number** | 32 bits | 如果 ACK=1: 发送方期望接收的下一个序列号 |
| **Data offset** | 4 bits | TCP Header 大小（20-60 bytes = 5-15 × 32-bit words） |
| **Flags** | 6 bits | SYN, ACK, RST, FIN, URG, PSH 等单 bit 标志 |
| **Window size** | 16 bits | 本segment发送者通告的接收窗口大小——表示自己还能接收多少数据 |

#### 关键问题
- **Source port** 存的是本地还是远程端口号？→ 本地
- **Sequence number** 为什么计字节而不是包？→ 因为 TCP 是字节流协议，需要精确追踪每个字节
- **如果传输 5GB 会怎样？** → 序列号会 wrap around（32-bit 序列号空间约 4GB）

---

### 6. TCP 三次握手（Three-way Handshake）

#### What（是什么）
三次握手是 TCP 建立连接的过程，确保：
- 即使 setup packets 丢失或重传，也能建立**且仅建立一个**连接
- 为 sliding window 建立初始序列号

#### Why（为什么需要三次）
TCP 运行在**无连接的网络层（IP）**之上。网络可能：
- 丢失 packets
- 存储并延迟 packets
- 重复 packets
- 乱序 packets

**两次握手的问题**：如果双方同时分配了相同的序列号（如主机/路由器崩溃后），可能导致混乱。

**延迟重复（Delayed Duplicates）问题**：拥塞的网络可能延迟ACK，导致发送方重传多次。这些重传中可能有一些没有到达、乱序到达，或者成为**延迟重复**——在连接关闭后才到达的旧packet被误认为是新连接的packet。三次握手通过随机的初始序列号避免了这个问题。

#### How（过程）

\`\`\`
Client                              Server
  |                                    |
  |--- SYN=1, ACK=0, seq=x --------->|  (Connection Request)
  |                                    |
  |<-- SYN=1, ACK=1, seq=y, ack=x+1 --|  (Connection Accepted)
  |                                    |
  |--- ACK=1, seq=x+1, ack=y+1 ----->|  (Confirm)
  |                                    |
  |         Connection Established     |
\`\`\`

**关键细节**：
- **SYN** 和 **FIN** 各占 1 byte 的序列号
- 因此第一个数据字节的序列号 = SYN 的序列号 + 1
- 连接建立后，Sequence Number = 本 segment payload 的第一个字节编号
- 初始值是**随机的**（arbitrary），双方的序列号和确认号都反映这个初始偏移

---

### 7. TCP 连接关闭

#### FIN（有序关闭）
- **FIN flag** 请求关闭连接
- 每个 FIN 是**方向性的**：一旦确认，该方向不能再发新数据
- 反方向的数据传输可以继续
- 通常需要 **4 个 segment**（每个方向 FIN + ACK）
- **FIN 会重传（对应 slide p.31）**：发 FIN 的一方如果收不到对端的 ACK，会**重传未确认的 segment（包括 FIN 本身）**——FIN 和普通数据一样受可靠传输保护，不是"发了就完事"。

\`\`\`
Client                              Server
  |                                    |
  |--- FIN=1 ----------------------->|  (Client 请求关闭)
  |<-- ACK=1 ------------------------|  (Server 确认)
  |                                    |  (Server 可能继续发数据)
  |<-- FIN=1 ------------------------|  (Server 也请求关闭)
  |--- ACK=1 ----------------------->|  (Client 确认)
  |                                    |
  |         Connection Closed          |
\`\`\`

#### RST（硬关闭）
- **RST flag** 表示"hard close"
- 发送方声明关闭连接，不再监听任何消息
- 用于回复发往没有开放连接的 5-tuple 的 packet
- 场景：无效数据、进程崩溃后 OS 清理遗留 socket

**FIN vs RST**：FIN 是有序关闭（preferred），RST 是重置（异常情况）。

---

### 8. SYN Flooding 攻击与 SYN Cookies

#### What（是什么）
SYN Flooding 是 90 年代流行的 DoS 攻击：
- 攻击者发送初始 SYN 请求，但**不发送后续 ACK**
- 服务器为每个 SYN 请求存储初始序列号（占用内存）
- 逐渐填满序列号队列，导致服务器无法响应正常连接

#### SYN Cookies 解决方案
- 不存储序列号，而是从**连接信息和定时器**中**派生**序列号
- 使用**密码学哈希**创建**无状态的 SYN 队列**
- 代价：验证 SYN Cookies 有性能开销
- 策略：通常只在**受到攻击时**才启用

---

### 9. TCP Sliding Window（滑动窗口）

#### What（是什么）
![TCP Sliding Window - ACK:11, Window:40 visualization](./images/WK9-Sliding-Window.png)
*TCP Sliding Window 示意图：接收方发送 ACK:11, Window:40，表示期望收到第 11 字节，还能接收 40 字节（Lecture Slide 43）*

Sliding Window 提供：
- **Reliable delivery**（可靠传输）
- **Flow control**（流量控制，防止发送过快）
- **In-order delivery**（有序传输）
- **累积确认：** TCP使用累积确认——ACK号表示"期望接收的下一个字节"。如果中间有segment丢失，即使后续segment已收到，ACK号也不会增长。这为快速重传（Fast Retransmit）奠定了基础。

#### How（工作原理）

**窗口类型**：
- **Send Window**: 发送方能发送的数据 = 未确认 segments + 能装入接收窗口的未发送数据
- **Receive Window**: 接收方愿意接收的数据量（在 ACK 中通告）
- **其他窗口**: 用于拥塞控制（下节课讲）

**关键不变量**：
\`\`\`
LastByteSent - LastByteAcked <= ReceiveWindowAdvertised
\`\`\`

**课件完整字节追踪（对应 slide p.41–52，seg size = 10 bytes，byte 位置 1…141）**——把窗口推进串成一条线：
\`\`\`
握手后：  SYN:1, ACK:1, Window:50          （双方就绪，接收方通告 50）
发送 seg1 (byte 1-10) →
接收方回：ACK:11, Window:40                （已收 1-10，期望 11；应用还没读，缓冲占 10，可用 40）
应用读走 10 bytes →
接收方回：ACK:11, Window:50（WindowUpdate） （数据被取走，窗口恢复 50）
发送 seg2 (byte 11-20) →
接收方回：ACK:21, Window:40 → 应用读 → ACK:21, Window:50
...如此推进，窗口在 50/40/50 之间随"发-收-读"循环
\`\`\`
要点：① **ACK 号 = 期望的下一个字节**（所以收到 1-10 后回 ACK:11）；② **Window 缩小是因为缓冲被占、增大是因为应用读走数据**（WindowUpdate）；③ 整个过程受不变量 \`LastByteSent − LastByteAcked ≤ RWND\` 约束；④ 这条 trace 在 WK10 会被扩展成"丢包 → fast retransmit → Window:0 死锁 → persist/probe"的完整故事。

**窗口为 0 时**：
- 发送方不应发送数据
- 但可以发送 **URGENT data**
- 可以发送 **zero window probe**（0 字节 segment），让接收方重新通告窗口大小，防止死锁

**延迟发送**：
- 发送方可能延迟发送，等待更多数据填满窗口
- 例如：不立即发送 2KiB，而是等待更多数据填满 4KiB 接收窗口

---

### 10. TCP 属性与 MTU

| 属性 | 说明 |
|------|------|
| **Segment size** | 每个 segment 有 20-60 byte header + 0 或更多数据 |
| **IP payload** | < 65,515 bytes |
| **MTU** | Maximum Transfer Unit，通常 1500 bytes（Ethernet） |
| **Typical segment** | 1460 bytes 数据（1500 - 20 IP header - 20 TCP header） |

---

## 关键术语

| 术语 | 定义 |
|------|------|
| TCP | Transmission Control Protocol，传输控制协议 |
| Segment | TCP 数据单元，包含 header + payload |
| Socket | Kernel 数据结构，由 5-tuple 标识 |
| Three-way handshake | 三次握手，TCP 连接建立过程 |
| SYN | Synchronize，连接建立标志 |
| FIN | Finish，有序关闭标志 |
| RST | Reset，硬关闭标志 |
| ISN | Initial Sequence Number，初始序列号 |
| MTU | Maximum Transfer Unit，最大传输单元 |
| Sliding Window | 滑动窗口，流量控制机制 |
| SYN Cookie | 无状态 SYN 队列，防御 SYN Flooding |
| Full duplex | 全双工，双向同时传输 |
| Byte stream | 字节流，不保留消息边界 |

---

## 常见问题

### Q1: TCP 为什么是字节流而不是消息流？
因为 TCP 不保留应用层消息边界。发送端多次 \`write()\` 的数据可能被合并到一个 segment，接收端一次 \`READ()\` 可能收到多次 \`write()\` 的数据。这简化了 TCP 设计，但应用层需要自己处理消息边界（如 HTTP 的 Content-Length）。

### Q2: 三次握手中 SYN 为什么占 1 byte 序列号？
因为 SYN 是连接建立的标志，需要消耗序列号空间，以便后续数据的序列号可以正确计算。FIN 同理。

### Q3: TCP 的 Window Size 是什么？
Window Size 是接收方在 ACK 中通告的**接收窗口大小**，告诉发送方"我还能接收多少数据"。这实现了流量控制。

### Q4: 为什么 TCP 需要 4 个 segment 来关闭？
因为 TCP 是全双工的，每个方向需要独立关闭。一方发 FIN 后，另一方可能还有数据要发，所以需要双方各发 FIN + ACK。

---

## 知识点之间的联系

\`\`\`
WK8-Transport-Services-UDP (传输层基础)
    ↓ 对比
WK9-TCP (TCP 详解) ←→ WK9-Protocol-Design (协议设计)
    ↓ 流量控制
WK10-TCP-Flow-Congestion-Control (拥塞控制)
    ↓ 路由
WK11-Routing (路由算法)
\`\`\`

- **TCP vs UDP**: TCP 是面向连接的、可靠的；UDP 是无连接的、不可靠的
- **TCP Sliding Window** 是**拥塞控制**的基础（WK10）
- **TCP Header** 的 flags（SYN/ACK/FIN/RST）是**协议设计**的实例（WK9-Protocol-Design）

---

## 实际应用案例

### 案例 1: HTTP 请求的 TCP 连接
\`\`\`
1. Client → Server: SYN (建立连接)
2. Server → Client: SYN+ACK
3. Client → Server: ACK
4. Client → Server: HTTP GET 请求
5. Server → Client: HTTP 响应
6. Client → Server: FIN (关闭连接)
7. Server → Client: FIN+ACK
\`\`\`

### 案例 2: Wireshark 分析
课件中展示了使用 Wireshark 捕获 BBC 天气图标请求的例子，可以看到完整的 TCP 三次握手、数据传输、四次挥手过程。

![Wireshark Example - TCP handshake, HTTP request, and FIN sequence](./images/WK9-Wireshark-Example.png)
*Wireshark 实际抓包示例：DNS 查询 → TCP SYN/SYN-ACK/ACK → HTTP GET → HTTP 200 OK → FIN/ACK 关闭连接（Lecture Slide 27）*

### 案例 3: SYN Cookie 在 Linux 中的应用
Linux 内核默认启用 SYN Cookie（\`net.ipv4.tcp_syncookies = 1\`），当 SYN 队列满时自动启用。

---

## 常见错误和易错点

### ❌ 错误 1: 认为 TCP 保留消息边界
TCP 是**字节流**，不保留消息边界。应用层需要自己处理（如使用 \`\\r\\n\`、Content-Length 等）。

### ❌ 错误 2: 混淆 Sequence Number 和 Acknowledgement Number
- Sequence Number = 本 segment 的第一个字节编号
- Acknowledgement Number = 期望接收的下一个字节编号（不是最后一个已收到的）

### ❌ 错误 3: 认为 RST 是正常关闭方式
RST 是**异常处理**机制。正常情况下应该使用 FIN 进行有序关闭。

### ❌ 错误 4: 忽略 SYN 占用序列号
SYN 和 FIN 各占 1 byte 序列号，第一个数据字节的序列号 = SYN 序列号 + 1。

### ❌ 错误 5: 认为 Window Size 是发送方的窗口
Window Size 是**接收方通告的接收窗口**，告诉发送方"我还能接收多少数据"。

---

## 课件总结

本课件全面介绍了 TCP 协议：
1. **TCP 特性**: 面向连接、可靠、字节流、全双工
2. **服务模型**: 通过 5-tuple 标识的 socket 进行通信
3. **连接管理**: 三次握手建立、FIN/RST 关闭
4. **SYN Flooding**: 攻击原理与 SYN Cookie 防御
5. **Sliding Window**: 流量控制机制，确保可靠传输

TCP 是互联网的核心协议，理解其工作机制对于网络编程和故障排查至关重要。

---

## 复习建议

1. **画出 TCP 三次握手和四次挥手的时序图**，标注每个 segment 的 SYN/ACK/FIN 值
2. **理解 TCP Header 的关键字段**：Sequence Number、Acknowledgement Number、Window Size
3. **掌握 Sliding Window 的工作原理**：Send Window、Receive Window、不变量公式
4. **理解 TCP vs UDP 的区别**：可靠性、连接性、性能
5. **思考 SYN Flooding 攻击**：为什么需要三次握手？SYN Cookie 如何工作？

---

*课件来源: COMP30023 2026 S1 WK9*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | TCP vs UDP — slide analogy. · TCP vs UDP——课件类比。 | **EN:** UDP is like text messages; TCP is like a phone call (connection-oriented, ongoing session). / **中文：** UDP 像短信；TCP 像电话（面向连接、持续会话）。 |
| 2 | Three-way handshake — SYN bit patterns (slide p.22–28). · 三次握手——SYN 位模式（课件 p.22–28）。 | **EN:** Client: SYN=1, ACK=0; Server: SYN=1, ACK=1; Client: ACK=1 — exchange initial sequence numbers. / **中文：** Client: SYN=1, ACK=0；Server: SYN=1, ACK=1；Client: ACK=1——交换初始序号。 |
| 3 | TCP sequence number field purpose. · TCP 序号字段用途。 | **EN:** Byte offset in sender's byte stream — first data byte in segment. / **中文：** 发送方字节流中的字节偏移——段中第一个数据字节的序号。 |
| 4 | Receive window (rwnd) — meaning. · 接收窗口（rwnd）含义。 | **EN:** Bytes the receiver is willing to accept — flow control limit on sender. / **中文：** 接收方愿意接收的字节数——对发送方的流量控制上限。 |
| 5 | Sliding window invariant (slide p.52). · 滑动窗口不变式（课件 p.52）。 | **EN:** LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised. / **中文：** LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised。 |
| 6 | ACK number meaning — cumulative. · ACK 号含义——累积确认。 | **EN:** Next byte sequence number the receiver expects (cumulative ACK). / **中文：** 接收方期望的下一个字节序号（累积确认）。 |
| 7 | Four-way connection teardown. · 四次挥手关闭连接。 | **EN:** FIN → ACK → FIN → ACK (each direction closed separately). / **中文：** FIN → ACK → FIN → ACK（每个方向单独关闭）。 |
| 8 | FIN retransmit behaviour (slide p.31). · FIN 重传行为（课件 p.31）。 | **EN:** Sender retransmits unacknowledged segments including FIN if ACK not received. / **中文：** 若收不到 ACK，发送方重传未确认段（包括 FIN）。 |
| 9 | RST vs FIN (slide p.32). · RST vs FIN（课件 p.32）。 | **EN:** FIN = orderly shutdown; RST = hard close — immediately terminate, no further listening. / **中文：** FIN = 有序关闭；RST = 硬关闭——立即终止，不再监听。 |
| 10 | SYN segment consumes one sequence number? · SYN 段是否占用一个序号？ | **EN:** Yes — SYN counts as one byte in the sequence space. / **中文：** 是——SYN 在序号空间中占一个字节。 |
| 11 | Byte trace — ACK:11 Window:40 then WindowUpdate Window:50 (slide p.43–50). · 字节追踪——ACK:11 Window:40 后 WindowUpdate Window:50（课件 p.43–50）。 | **EN:** After bytes 1–10 received: ACK:11, Window:40; after app reads 10 B: ACK:11, Window:50 (WindowUpdate). / **中文：** 收到 1–10 后：ACK:11, Window:40；应用读走 10 B 后：ACK:11, Window:50（WindowUpdate）。 |
| 12 | TCP buffering trade-off (slide p.13). · TCP 缓冲权衡（课件 p.13）。 | **EN:** Larger buffers reduce header overhead but increase delay. / **中文：** 更大缓冲减少首部开销但增加延迟。 |

`,l1=`# WK9 - Protocol Design (RPC) & TCP Closing

## 课件概述

本课件分为两部分：第一部分回顾 TCP 的同步和关闭机制（SYN、FIN、RST），第二部分以 Remote Procedure Call (RPC) 为例，介绍协议设计的一般方法论。重点在于理解协议设计的迭代过程，以及 RPC 如何隐藏网络细节让远程调用看起来像本地调用。

---

## 必须掌握的知识点

### 1. TCP Synchronization Recap（TCP 同步回顾）

![TCP Synchronization Recap - SYN/ACK bits used to establish connection](./images/WK9-TCP-Sync-Recap.png)
*TCP 同步回顾：SYN bit 用于建立连接，ACK bit 区分请求和回复（Lecture Slide 2）*

#### What（是什么）
TCP 使用 **SYN bit** 来建立连接。三次握手过程：
- **Connection Request**: SYN=1, ACK=0（客户端发起）
- **Connection Reply**: SYN=1, ACK=1（服务端回复）
- **Third segment**: ACK=1（客户端确认）

SYN 用于 CONNECTION_REQUEST 和 CONNECTION_ACCEPTED 两种消息，通过 ACK bit 区分。

#### Why（为什么）
三次握手的核心目的是**同步双方的初始序列号（Initial Sequence Number, ISN）**。由于 TCP 是全双工的，双方都需要告诉对方自己的起始序列号。

#### How（怎么工作）
连接建立后的编号规则：
- **Sequence Number**: 本 segment payload 的第一个字节编号（= 1 + 之前已发送的数据量）。初始值是随机的（arbitrary），双方的序列号和确认号都反映这个初始偏移。
- **Acknowledgement Number**: 发送方期望接收的下一个字节编号（= 已成功接收的数据 + 1）。如果中间有 gap（某个 segment 丢失），即使后续的 segment 已经收到，ACK number 也不会继续增长。

**关键理解**: ACK number 表示的是"我期望收到的下一个字节"，而不是"我已经收到的最后一个字节"。这意味着 TCP 使用的是**累积确认（cumulative acknowledgement）**机制。

---

### 2. TCP Closing（TCP 关闭）

![TCP Closing - FIN flag for orderly shutdown, RST for hard close](./images/WK9-TCP-Closing.png)
*TCP 关闭：FIN 用于有序关闭（4 segments），RST 用于硬关闭（Lecture Slide 4）*

#### What（是什么）
TCP 使用 **FIN flag** 来请求关闭连接。关闭是**方向性的（directional）**：
- 一旦 FIN 被确认，该方向不能再发送新数据
- 但反方向的数据传输可以继续
- 发送 FIN 的一方仍然会重传未确认的 segment

通常需要 **4 个 segment** 来关闭连接：每个方向各一个 FIN + ACK。

**具体例子：** 客户端可能在发送请求后但在收到响应前就发送 FIN，表示它不再发送数据了。但服务器仍然可以继续发送响应数据。这说明 FIN 关闭的是**发送方向**而非整个连接。

#### FIN vs RST
| 特性 | FIN | RST |
|------|-----|-----|
| 类型 | 有序关闭（orderly shutdown） | 硬关闭（hard close） |
| 含义 | 请求关闭连接 | 立即终止，不再监听 |
| 使用场景 | 正常关闭 | 无效数据、进程崩溃、无开放连接 |
| 优先级 | 优先使用 | 仅在异常时使用 |

#### RST 的触发场景
当收到一个发往没有开放连接的 5-tuple 的 packet 时，会发送 RST：
- 发送了无效数据
- 远程进程崩溃，OS 正在清理遗留的 socket

---

### 3. Protocol Design Methodology（协议设计方法论）

#### What（是什么）
协议设计是一个**迭代过程**，需要回答以下核心问题：

1. **What does an interaction look like?**（交互模式）
   - 提供给上层的 API 是什么？
   - 需要发送什么消息/包？
   - 面向连接还是无连接？

2. **What data needs to be communicated?**（数据内容）
   - 任务所需的数据
   - 协议本身所需的数据
   - 使用什么下层协议？

3. **What format should be used?**（数据格式）
   - Headers? Fields? Free-form data?
   - 合法的数据范围是什么？

4. **How are errors handled?**（错误处理）

5. **What security risks are there?**（安全风险）
   - 哪些可能的安全威胁？
   - 协议设计中需要考虑哪些安全机制？

#### Why（为什么重要）
设计协议时不能一开始就锁定 API（如 Waterfall 方法会锁定 API 和整体设计），也不能没有整体设计就开始编码（如纯粹的 Agile 中"客户端"嵌入在开发过程中难以解耦）。正确的方法是**从简单功能开始，逐步扩展**。

**部署阶段的考量（对应 slide p.22）**：协议设计不只到"能跑"为止，还要回答部署问题：
- **多成熟才能上线？**（how finished before deploy）——过早发布会被用户当"事实标准"锁死，过晚则错过反馈
- **新 spec 发布怎么办？**（what happens on new spec release）——版本协商、向后兼容、灰度 rolled out
- **公开发布前如何充分测试？**（how to test thoroughly before public release）——协议一旦部署到互联网就很难收回，测试要在受控环境里穷举边界情况

---

### 4. Remote Procedure Call (RPC)（远程过程调用）

![RPC Architecture - Client/Server stubs hide network details](./images/WK9-RPC-Architecture.png)
*RPC 架构：Client 和 Server 各有 Stub，通过 Network 通信，对上层透明（Lecture Slide 12）*

#### What（是什么）
RPC 允许客户端像调用本地函数一样调用远程服务器上的函数，**对程序员隐藏网络细节**。RPC 不是单一协议，有几十种变体（数据库 API、Google Maps API、gRPC 等）。

#### How（工作原理）

**抽象流程**：
1. Machine A 上的客户端进程调用 Machine B 上的过程
2. Machine A 上的线程被**挂起（suspended）**，执行在 Machine B 上进行
3. Machine B 返回结果给 Machine A，A 继续处理

**Stub 机制**：
- **Client Stub**: 在客户端地址空间中运行，负责将调用请求打包
- **Server Stub**: 在服务端地址空间中运行，负责解包请求并执行
- 对客户端和服务器进程来说，所有调用都是"本地的"

**Marshalling / Unmarshalling**：
- **Marshalling**: 将内存中的数据结构转换为可存储或传输的格式（序列化）
- **Unmarshalling**: 将存储或传输的数据转换回内存中的数据结构（反序列化）

\`\`\`
Client Process → Client Stub → [Network] → Server Stub → Server Process
     ↑                                                        ↓
     ← Client Stub ← [Network] ← Server Stub ← 结果返回 ←
\`\`\`

#### RPC 的挑战
- **指针无法直接传递**: 客户端和服务器在不同地址空间。可以 marshal/unmarshal 底层值并在各地址空间创建指针，但对复杂数据结构不适用。
- **弱类型语言问题**: 如 C 语言，数组大小未知
- **无法推断参数类型**
- **全局变量不共享**

---

### 5. 协议设计的迭代过程（RPC Exercise）

![Protocol Design Exercise - RPC as example](./images/WK9-Protocol-Design-Questions.png)
*协议设计练习：以 RPC 为例的迭代设计方法（Lecture Slide 10）*

#### Phase 1: 最简单的例子
设计一个支持单个函数的协议：
- 输入：一个 64-bit 整数
- 输出：一个 64-bit 整数

#### 逐步扩展
1. 支持**多个函数** → 如何标识函数？API 和消息格式如何变化？
2. 支持最多 **32 个整数**作为参数
3. 支持**复杂数据类型**的混合参数
4. 支持**返回结构体**
5. 支持**有状态（stateful）**的函数

#### 设计决策点
- 使用什么位置在协议栈中？（Application layer vs Transport layer）
- End-to-end vs Point-to-point 的权衡
- 部署前应该多完善？新版本如何发布？

---

## 关键术语

| 术语 | 定义 |
|------|------|
| SYN | Synchronize，用于 TCP 连接建立的标志位 |
| FIN | Finish，用于 TCP 有序关闭的标志位 |
| RST | Reset，用于 TCP 硬关闭的标志位 |
| ISN | Initial Sequence Number，初始序列号 |
| Cumulative Acknowledgement | 累积确认，ACK number 表示期望接收的下一个字节 |
| RPC | Remote Procedure Call，远程过程调用 |
| Stub | 存根，在 RPC 中负责代理远程调用的代码 |
| Marshalling | 序列化，将内存数据结构转换为传输格式 |
| Unmarshalling | 反序列化，将传输格式转换回内存数据结构 |
| 5-tuple | 五元组：源IP、源端口、目的IP、目的端口、协议 |

---

## 常见问题

### Q1: TCP 关闭为什么需要 4 个 segment？
因为 TCP 是**全双工**的，每个方向需要独立关闭。FIN 表示"我不再发送数据"，但对方可能还有数据要发，所以需要双方各发一个 FIN + ACK。

### Q2: FIN 和 RST 什么情况下用哪个？
- FIN：正常关闭（如 HTTP 请求完成后关闭连接）
- RST：异常情况（如收到无效数据、进程崩溃、连接不存在）

### Q3: RPC 中的 Marshalling 有什么实际例子？
- JSON 序列化（Web API）
- Protocol Buffers（gRPC）
- XML 序列化（SOAP）
- Java 的 Serializable

### Q4: 为什么 RPC 不能直接传递指针？
因为客户端和服务器在**不同的地址空间**中。指针指向的是本地内存地址，在远程机器上这个地址是无效的。需要先将指针指向的数据 marshal 成字节流，传输后再 unmarshal 并创建新的本地指针。

---

## 知识点之间的联系

\`\`\`
WK7-Sockets (Socket API)
    ↓ 使用
WK8-HTTP (应用层协议)
    ↓ 基于
WK8-Transport-Services-UDP (传输层)
    ↓ 对比
WK9-TCP (TCP 传输层)
    ↓ 连接管理
WK9-Protocol Design (协议设计方法论)
    ↓ 实例
RPC (远程过程调用)
\`\`\`

- **TCP SYN/FIN/RST** 与 **WK8-Transport-Services** 中的连接建立/关闭直接相关
- **RPC Marshalling** 是本章协议设计练习的核心例子
- **协议设计方法论**适用于所有网络协议的开发

---

## 实际应用案例

### 案例 1: gRPC (Google Remote Procedure Call)
- 使用 Protocol Buffers 进行 marshalling
- 基于 HTTP/2 传输
- 支持多种语言（C++, Java, Python, Go）
- 自动代码生成，隐藏网络细节

### 案例 2: REST API vs RPC
- REST：基于资源（Resource-oriented），使用 HTTP 方法（GET/POST/PUT/DELETE）
- RPC：基于动作（Action-oriented），调用远程函数
- 现代趋势：gRPC 在微服务中越来越流行

### 案例 3: 数据库 API
- JDBC（Java Database Connectivity）
- ODBC（Open Database Connectivity）
- 都是 RPC 的变体，隐藏了底层网络通信

---

## 常见错误和易错点

### ❌ 错误 1: 混淆 Sequence Number 和 Acknowledgement Number
- Sequence Number = 本 segment 的第一个字节编号
- Acknowledgement Number = 期望接收的下一个字节编号（不是最后一个已收到的）

### ❌ 错误 2: 认为 TCP 关闭是"双方同时关闭"
实际上每个方向**独立关闭**。一方发 FIN 后，另一方可能继续发送数据，直到它也发 FIN。

### ❌ 错误 3: 认为 RST 是正常关闭方式
RST 是**异常处理**机制。正常情况下应该使用 FIN 进行有序关闭。

### ❌ 错误 4: 忽略 RPC 中的错误处理
RPC 调用可能失败（网络超时、服务器崩溃、参数错误），设计协议时必须考虑错误处理机制。

---

## 课件总结

本课件的核心是理解 **TCP 连接管理**（SYN/FIN/RST）和 **协议设计的迭代方法**。TCP 通过 SYN 建立连接、FIN 有序关闭、RST 异常终止。RPC 通过 Stub 和 Marshalling 机制隐藏网络细节，让远程调用透明化。协议设计应该从最简单的功能开始，逐步扩展，而不是一开始就设计完整方案。

---

## 复习建议

1. **画出 TCP 三次握手和四次挥手的时序图**，标注每个 segment 的 SYN/ACK/FIN 值
2. **理解 RPC 的完整流程**：Client → Client Stub → Network → Server Stub → Server → 返回
3. **掌握协议设计的 4 个核心问题**：交互模式、数据内容、数据格式、错误处理
4. **思考 RPC 的实际挑战**：指针传递、类型安全、全局变量、错误处理
5. **对比 FIN 和 RST**：何时用哪个？为什么 FIN 更好？

---

*课件来源: COMP30023 2026 S1 WK9*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | RPC definition. · RPC 定义。 | **EN:** Remote Procedure Call — invoke a procedure on a remote host as if it were local. / **中文：** 远程过程调用——像调用本地函数一样调用远程主机上的过程。 |
| 2 | Marshalling definition. · Marshalling 定义。 | **EN:** Convert in-memory data structures to a canonical byte stream for transmission (unmarshalling reverses). / **中文：** 将内存数据结构转换为规范字节流以便传输（unmarshalling 反向转换）。 |
| 3 | Client stub vs server stub roles. · Client stub vs server stub 角色。 | **EN:** Client stub marshals args, sends request, unmarshals result; server stub unmarshals args, calls procedure, marshals result. / **中文：** Client stub：marshal 参数、发请求、unmarshal 结果；Server stub：unmarshal 参数、调用过程、marshal 结果。 |
| 4 | Protocol design — four core questions (slide p.9). · 协议设计——四个核心问题（课件 p.9）。 | **EN:** (1) What does interaction look like? (2) What data to communicate? (3) What format? (4) How handle errors? / **中文：** （1）交互模式？（2）传什么数据？（3）什么格式？（4）如何处理错误？ |
| 5 | RPC challenges — pointers and global variables (slide p.13). · RPC 挑战——指针与全局变量（课件 p.13）。 | **EN:** Pointers cannot be passed directly across address spaces; global variables are not shared between client and server. / **中文：** 指针不能跨地址空间直接传递；全局变量在客户端与服务器间不共享。 |
| 6 | Protocol deployment questions (slide p.22 exact). · 协议部署问题（课件 p.22 原文）。 | **EN:** How finished before deploy? What happens on new spec release? How to test thoroughly before public release? / **中文：** 多成熟才能上线？新 spec 发布怎么办？公开发布前如何充分测试？ |
| 7 | TCP sync recap — SYN/ACK patterns (slide p.4–5). · TCP 同步回顾——SYN/ACK 模式（课件 p.4–5）。 | **EN:** Connection request: SYN=1, ACK=0; reply: SYN=1, ACK=1; third segment: ACK=1. / **中文：** 连接请求：SYN=1, ACK=0；回复：SYN=1, ACK=1；第三段：ACK=1。 |
| 8 | TCP close recap — FIN directional (slide p.4–5). · TCP 关闭回顾——FIN 方向性（课件 p.4–5）。 | **EN:** FIN closes one direction; other direction may still send data; typically 4 segments (FIN+ACK each way). / **中文：** FIN 关闭一个方向；另一方向仍可发数据；通常 4 段（各向 FIN+ACK）。 |
| 9 | RST vs FIN recap (slide p.4–5). · RST vs FIN 回顾（课件 p.4–5）。 | **EN:** FIN = orderly shutdown; RST = hard close when invalid data, crash, or no open connection. / **中文：** FIN = 有序关闭；RST = 无效数据、崩溃或无连接时的硬关闭。 |
| 10 | Cumulative ACK recap. · 累积 ACK 回顾。 | **EN:** ACK number = next byte expected; does not advance past a gap even if later bytes arrived. / **中文：** ACK 号 = 期望下一字节；中间有 gap 时不前进，即使后续字节已到。 |
| 11 | RPC — client thread suspended during call. · RPC——调用期间客户端线程。 | **EN:** Client thread is suspended while server executes; resumes when result returns. / **中文：** 客户端线程在服务器执行期间挂起；结果返回后恢复。 |
| 12 | Protocol design — start simple, iterate. · 协议设计——从简开始迭代。 | **EN:** Begin with minimal functionality (e.g. one RPC function), then extend — do not lock API too early. / **中文：** 从最小功能开始（如单个 RPC 函数），再逐步扩展——不要过早锁定 API。 |

`,r1=`# WK10 - IP Addresses and Packet Switching

## 课件概述

本课件介绍网络层（Internet Layer）的核心概念，包括 IP 地址和分组交换。重点讲解 IPv4 和 IPv6 的地址格式、层次化地址设计、前缀表示法、路由聚合，以及分组交换和电路交换的对比。网络层的核心任务是将数据从源端送到目的端，这需要高效的路由和寻址机制。

---

## 必须掌握的知识点

### 1. 网络层的角色（Internet Layer Role）

#### What（是什么）
网络层的核心任务：**get data from the source all the way to the destination**（端到端传输）。

特点：
- 通常不是单跳（single hop），需要经过多个中间节点
- 流量需要被**高效路由**（routed efficiently）
- 由**路由器（routers）**执行
- 节点必须被赋予**地址（addresses）**

#### 与其他层的关系
\`\`\`
Application Layer    (HTTP, DNS, etc.)
       ↓
Transport Layer      (TCP, UDP)
       ↓
Network Layer        (IP) ← 本课重点
       ↓
Link Layer           (Ethernet, Wi-Fi)
       ↓
Physical Layer       (Cables, signals)
\`\`\`

---

### 2. 分组交换 vs 电路交换

![Packet Forwarding - Connectionless (IP) with forwarding tables](./images/WK10-Packet-Forwarding.png)
*无连接分组转发（IP）：每个 packet 独立路由，路由器根据 Forwarding table 决定下一跳（Tanenbaum TN 6th 5-2）*

#### What（是什么）

| 类型 | 特点 | 协议 |
|------|------|------|
| **Connectionless (Datagram)** | 无连接，每个 packet 独立路由 | IP (Internet Protocol) |
| **Connection-oriented (Virtual Circuit)** | 面向连接，建立虚电路 | ATM, MPLS |

#### Store-and-Forward Packet Switching（存储转发分组交换）

**工作过程**：
1. Host H1 发送 packet 到最近的 router（A）
2. Packet 在到达时被**缓冲**，checksum 被验证
3. 如果有效，packet 被存储直到**出接口空闲**
4. Router 将 packet 转发到路径上的下一个 router
5. 重复 2-4

**关键理解**：每个 router 都会**完整接收**一个 packet 后才转发（store-and-forward），这引入了延迟。

#### Datagram vs Virtual Circuit 对比

| 问题 | Datagram Network | Virtual Circuit |
|------|------------------|-----------------|
| **类型** | Connectionless | Connection-oriented |
| **状态** | + 路由器不保存连接状态 | - 每个 VC 需要 router 表空间，重启是问题 |
| **地址** | - 每个 packet 有完整源和目的地址 | + 每个 packet 只有短 VC 号 |
| **路由** | 每个 packet 独立，同一TCP连接的不同packet可能走不同路径 | 在 setup 时定义，路径固定 |
| **QoS** | - 困难 | + 连接建立时承诺最大速率，每跳检查容量，不够则拒绝连接（Admission Control） |
| **拥塞控制** | - 困难 | + 如果资源足够则容易 |
| **链路故障恢复** | + 简单 | - 需要额外工作 |

**Virtual Circuit 的转发机制：** VC 的转发表是每跳的本地映射：\`In: (连接ID) → Out: (下一跳, 新连接号)\`。VC号是**每跳局部的（hop-local）**，不同链路可以使用不同的VC号。VC网络（如MPLS）通常作为IP网络的单个"链路"存在，而不是取代IP。

---

### 3. Internet Protocol (IP) 设计原则

#### 设计哲学
1. **"Something that works OK is better than an ideal standard 'in progress'"**
   - 能用的标准比理想中但未完成的标准更好
   - 随着互联网变得重要，"OK"的标准已经提高

2. **Keep it simple**（**Occam's Razor，奥卡姆剃刀原则**，对应 slide p.13）——能用更简单的机制解决就不用复杂的；这是 IP 头部、转发规则都尽量简洁的根因

3. **Be strict when sending, tolerant when receiving**
   - 发送时严格，接收时宽容
   - 例如：Web 浏览器能处理无效 HTML 的页面

4. **Avoid static options and parameters** — 在运行时协商

5. **Think about scalability**（可扩展性）

6. **"Best effort"**，不保证性能

7. **多路径冗余（对应 slide p.14）**：IP 路由允许到同一目的地存在**多条路径**，路由器可在它们间分流——既提供冗余（一条断了换另一条），又均衡负载。这与虚电路"一条路径走到底"形成对比。

---

### 4. IPv4 地址格式

#### What（是什么）
- **32-bit 数字**
- 表示为**十进制**，每个 byte 用十进制表示，用点分隔
- 例：\`172.22.44.10\`（十六进制：\`0xAC162C0A\`）
- 最低：\`0.0.0.0\`，最高：\`255.255.255.255\`
- **IP 地址分配给接口（interfaces），不是主机（hosts）**
  - 一个有多个网卡的主机将有多个 IP 地址
- IPv4 地址已经基本耗尽

#### 地址类型
- **Unicast**: 单播，一个目的地（"正常"地址）
- **Broadcast**: 广播，发送给所有人
- **Multicast**: 组播，发送给特定节点集合（如直播视频）

---

### 5. 层次化地址设计（Network + Host）

![Network and Host Addresses - hierarchical IP addressing](./images/WK10-Network-Host-Addresses.png)
*IP 地址分为 Network address（网络号）+ Host address（主机号），层次化设计使路由可扩展（Lecture Slide 18）*

#### What（是什么）
IP 地址分为两部分：
- **Network address**（网络地址）：高位 bits
- **Host address**（主机地址）：低位 bits

\`\`\`
128.250.32.1  →  Network: 128.250.0.0/16, Host: 32.1
128.250.128.5 →  Network: 128.250.0.0/16, Host: 128.5
\`\`\`

#### Why（为什么）
- **Scalable**（可扩展）：先将 packet 发送到正确的网络，再让网络找到正确的主机
- 中间路由器只需要维护**前缀（prefix）**的路由，而不是每个单独的主机

#### How（前缀表示法）
- 网络对应 IP 地址空间的一个**连续块**，称为 **prefix**
- 写法：最低 IP 地址 + \`/\` + 网络部分的大小
- 例：\`192.0.2.0/24\`
  - 24 bits 用于网络
  - 剩下 8 bits 用于主机（最多 256 个地址）
- \`10.0.0.0/8\`（保留私有块）
  - 8 bits 用于网络
  - 24 bits 用于主机（最多 16,777,216 个地址）

#### Subnet Mask（子网掩码）
- \`/24\` 对应子网掩码：\`255.255.255.0\`
- \`/16\` 对应子网掩码：\`255.255.0.0\`
- \`/8\` 对应子网掩码：\`255.0.0.0\`

#### 关键理解
**接口必须知道网络掩码**：
- 不能仅从 IP 地址推断网络掩码
- 每个接口需要被告知 IP 地址**和**网络掩码
- 同一网络上的所有接口必须有相同的网络掩码

**课件前缀练习题（对应 slide p.21–22，重点计算题）**——用 \`128.250.73.5\` 做一组判断：
- 它在 \`128.250.0.0/16\` 里吗？→ **是**（前 16 位 \`128.250\` 匹配）
- 它在 \`128.250.0.0/24\` 里吗？→ 取决于第三字节：\`73\` ≠ \`0\`，所以**不在** \`128.250.0.0/24\`（而在 \`128.250.73.0/24\`）
- 它在 \`128.250.0.0/17\` 里吗？→ \`/17\` 看第 17 位（第三字节最高位）；\`73\` = \`01001001\`，最高位 0，而 \`128.250.0.0/17\` 要求第三字节在 \`0–127\`，所以**在**
- \`/17\` 有多少地址？→ \`2^(32−17) = 2^15 = 32768\`
- 它的网络掩码是什么？→ **不能单从 IP 推断！**（这正是 slide p.22 的陷阱答案）必须由接口配置给定；若被告知是 \`/24\`，则掩码 \`255.255.255.0\`、网络 \`128.250.73.0\`

**关键陷阱（slide p.22）**：**单凭一个 IP 地址无法推断它的网络掩码**——\`128.250.73.5\` 在 \`/16\`、\`/17\`、\`/24\` 下分别属于不同网络。掩码是配置信息，不是地址的固有属性。

---

### 6. IP 地址的路由聚合（Route Aggregation）

![Route Aggregation - prefix aggregation and longest prefix match](./images/WK10-Route-Aggregation.png)
*路由聚合：多个子网前缀合并为一个聚合前缀，减少路由表大小。前缀可重叠，使用 Longest Prefix Match（Tanenbaum TN 6th 5-52, 5-53）*

#### What（是什么）
- **Network number = Network mask (bitwise-AND) IP address**
- 这对于高效路由至关重要：
  - 网络被分配地址块
  - 中间路由器只需要维护前缀的路由，而不是每个单独的主机
  - 只有当 packet 到达目的网络时，才需要读取主机部分

#### 聚合效果
- 自动执行
- 目前大约将路由表大小减半
- 前缀可以重叠 → 选择**最长匹配前缀（longest matching prefix）**

---

### 7. 路由器连接网络

#### How（工作方式）
- 路由器是连接网络的**特殊节点**
- 路由器之间的链路本身就是一个"网络"
- **路由器有多个 IP 地址**（每个接口一个）

\`\`\`
10.5.25.10/31 ←→ Router ←→ 10.0.25.5/31
                      ↕
              10.5.25.8/31
\`\`\`

\`/31\` 网络只有 2 个地址，用于点对点链路。

---

### 8. IPv4 Header 格式

| 字段 | 用途 |
|------|------|
| **Version** | 协议版本（4） |
| **IHL** | Header 长度（32-bit words），最小 5，最大 15 |
| **Differentiated services** | QoS 服务类别 |
| **ECN** | 显式拥塞通知 |
| **Total length** | 包含 payload，最大 65,535 |
| **Identification, DF, MF, Fragment Offset** | 分片处理（本课程不深入） |
| **Time to live (TTL)** | 跳数计数，到 0 时丢弃 |
| **Protocol** | 传输层服务（TCP/UDP/SCTP/DCCP 等） |
| **Source and Destination** | IPv4 地址 |
| **Options** | 很少使用，支持不好 |

---

### 9. IPv6 地址

#### What（是什么）
- 设计于近 30 年前，解决 IPv4 地址耗尽问题
- **128-bit 地址**，不太可能用尽
- 其他改进：
  - **更简单的 header** → 更快处理
  - **改进的安全性**（已回移到 IPv4）
  - **更好的 QoS 支持**

#### IPv6 地址格式
- 写为 **8 组**（最多 4 个十六进制数字）
- 例：\`8000:0000:0000:0000:0123:4567:89AB:CDEF\`
- 可以省略一组连续的 0：\`8000::123:4567:89AB:CDEF\`
- IPv4 兼容：\`::ffff:192.31.2.46\`（注意十六进制和十进制混合）

#### IPv6 Header

| 字段 | 用途 |
|------|------|
| **Version** | 6 |
| **Differentiated services** | 6 bits 服务类别 + 2 bits 拥塞控制（ECN） |
| **Flow label** | 伪虚电路标识符 |
| **Payload length** | 40-byte header 之后的字节数 |
| **Next header** | 指定额外 headers 或 Protocol（TCP/UDP） |
| **Hop limit** | 等同于 TTL |
| **Source and Destination** | 16-byte IPv6 地址 |

#### IPv6 部署现状
- 全球约 50% 支持
- 澳大利亚约 35%
- 继续增长中

---

### 10. IPv4 地址的稀缺性

#### 问题
- 层次化地址空间的缺点：如果分配不当会浪费大量地址
- 可用 IPv4 地址稀缺（耗尽），地址已成为**有价值的资产**
- 理论上不应出售，应返还给分配机构重新分配
- IPv6 早期采用者能够以高价出售其 IPv4 地址空间

---

## 关键术语

| 术语 | 定义 |
|------|------|
| Network Layer | 网络层，负责端到端数据传输 |
| Router | 路由器，连接不同网络的设备 |
| Packet Switching | 分组交换，数据被分成独立的 packets 传输 |
| Circuit Switching | 电路交换，建立专用路径传输数据 |
| Store-and-Forward | 存储转发，router 完整接收 packet 后才转发 |
| Datagram | 数据报，无连接的 packet |
| Virtual Circuit | 虚电路，面向连接的逻辑路径 |
| IPv4 | Internet Protocol version 4，32-bit 地址 |
| IPv6 | Internet Protocol version 6，128-bit 地址 |
| Prefix | 前缀，IP 地址的网络部分 |
| Subnet Mask | 子网掩码，标识网络和主机部分 |
| Route Aggregation | 路由聚合，合并多个前缀为一个 |
| Longest Prefix Match | 最长前缀匹配，路由查找原则 |
| TTL | Time To Live，packet 的跳数限制 |
| ECN | Explicit Congestion Notification，显式拥塞通知 |
| Unicast | 单播，点对点通信 |
| Broadcast | 广播，一对所有通信 |
| Multicast | 组播，一对多通信 |

---

## 常见问题

### Q1: 为什么 IP 地址分配给接口而不是主机？
因为一个主机可能有多个网络接口（如有线网卡、无线网卡、Loopback），每个接口需要独立的地址来标识其在网络中的位置。

### Q2: 为什么需要层次化地址？
为了**可扩展性**。路由器只需要维护网络前缀的路由表，而不是每个主机。这大大减小了路由表的大小。

### Q3: 为什么 IPv4 地址会耗尽？
32-bit 地址空间只有约 43 亿个地址，而互联网设备数量远超此数。加上早期分配不当（如某些公司获得 /8 块），导致地址浪费。

### Q4: 为什么 IPv6 还没有完全取代 IPv4？
- **兼容性问题**: 大量现有设备和软件只支持 IPv4
- **成本**: 升级基础设施需要大量投资
- **NAT**: Network Address Translation 延长了 IPv4 的使用寿命
- **惯性**: "如果没坏，就不要修"

---

## 知识点之间的联系

\`\`\`
WK6-Intro-OSI (网络层概念)
    ↓ 详细
WK10-Addressing-Switching (IP 寻址和分组交换)
    ↓ 路由
WK11-Routing (路由算法)
    ↓ 地址转换
WK12-NAT (网络地址转换)
\`\`\`

- **IP 地址**是**路由**的基础（WK11）
- **分组交换**是互联网的核心架构
- **IPv4 vs IPv6** 的演进反映了互联网的发展

---

## 实际应用案例

### 案例 1: 子网划分
一个公司获得 \`192.168.1.0/24\` 的地址块：
- 可以进一步划分为 \`/25\`（128 个地址）和 \`/26\`（64 个地址）
- 不同部门使用不同的子网
- 路由器在子网之间转发 packets

### 案例 2: 私有地址空间
RFC 1918 定义的私有地址块：
- \`10.0.0.0/8\`（16M 地址）
- \`172.16.0.0/12\`（1M 地址）
- \`192.168.0.0/16\`（65K 地址）
- 用于内部网络，需要 NAT 才能访问互联网

### 案例 3: IPv6 部署
- Google 报告约 50% 的请求来自 IPv6-capable 客户端
- T-Mobile、Comcast 等运营商已大规模部署 IPv6
- 中国、印度等国家 IPv6 采用率快速增长

---

## 常见错误和易错点

### ❌ 错误 1: 认为 IP 地址分配给主机
IP 地址分配给**接口（interface）**，不是主机。一个主机可以有多个接口，每个接口有独立的 IP 地址。

### ❌ 错误 2: 混淆网络地址和主机地址
网络地址 = IP 地址 AND 子网掩码。例如：
- IP: \`128.250.73.5\`
- Mask: \`/16\` = \`255.255.0.0\`
- Network: \`128.250.0.0\`

### ❌ 错误 3: 认为 /24 比 /16 大
\`/24\` 的网络部分更长，主机部分更短，所以**网络更小**。\`/16\` 的网络更大（65K vs 256 个地址）。

### ❌ 错误 4: 忘记路由器有多个 IP 地址
路由器连接多个网络，每个接口都有独立的 IP 地址。

### ❌ 错误 5: 混淆 Datagram 和 Virtual Circuit
- **Datagram**: 无连接，每个 packet 独立路由（IP）
- **Virtual Circuit**: 面向连接，预先建立路径（ATM, MPLS）

---

## 课件总结

本课件介绍了网络层的核心概念：
1. **网络层角色**: 端到端数据传输，由路由器执行
2. **分组交换**: Store-and-forward，每个 packet 独立路由
3. **IP 地址**: 层次化设计（网络 + 主机），前缀表示法
4. **IPv4 vs IPv6**: 32-bit vs 128-bit 地址，header 改进
5. **路由聚合**: 减小路由表，提高查找效率

理解 IP 地址和分组交换是理解互联网架构的基础。

---

## 复习建议

1. **练习子网计算**: 给定 IP 和前缀，计算网络地址、广播地址、可用主机数
2. **理解层次化地址的优缺点**: 可扩展性 vs 地址浪费
3. **对比 Datagram 和 Virtual Circuit**: 状态、路由、QoS、故障恢复
4. **掌握 IPv4 和 IPv6 的区别**: 地址大小、header 格式、部署现状
5. **理解路由聚合的原理**: 为什么能减小路由表？最长前缀匹配是什么？

---

*课件来源: COMP30023 2026 S1 WK10*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | IP address binds to what? · IP 地址绑定到什么？ | **EN:** An interface (host-router port), not the host as a whole. / **中文：** 接口（interface），而非整台主机。 |
| 2 | CIDR notation meaning. · CIDR 表示法含义。 | **EN:** a.b.c.d/x — x is prefix length (number of leading network bits). / **中文：** a.b.c.d/x——x 为前缀长度（网络位前导位数）。 |
| 3 | Number of addresses in /n prefix. · /n 前缀有多少地址？ | **EN:** 2^(32−n) addresses (IPv4). / **中文：** 2^(32−n) 个地址（IPv4）。 |
| 4 | Network vs broadcast vs host in a subnet. · 子网中网络地址、广播地址与主机地址。 | **EN:** Network = all host bits 0; broadcast = all host bits 1; usable hosts between them. / **中文：** 网络地址 = 主机位全 0；广播 = 主机位全 1；可用主机在中间。 |
| 5 | Can you infer netmask from IP alone? (slide p.22) · 能否单从 IP 推断 netmask？（课件 p.22） | **EN:** No — netmask/prefix is configuration, not inherent in the address. / **中文：** 不能——掩码/前缀是配置信息，不是地址固有属性。 |
| 6 | 128.250.73.5 prefix exercise (slide p.21–22). · 128.250.73.5 前缀练习（课件 p.21–22）。 | **EN:** In /16 yes; in 128.250.0.0/24 no (use 128.250.73.0/24); in /17 yes; /17 has 2^15 = 32768 addresses. / **中文：** 在 /16 是；在 128.250.0.0/24 否（属 128.250.73.0/24）；在 /17 是；/17 有 2^15 = 32768 地址。 |
| 7 | Longest prefix match rule. · 最长前缀匹配规则。 | **EN:** Router chooses forwarding entry with longest matching network prefix. / **中文：** 路由器选择匹配网络前缀最长的转发表项。 |
| 8 | Route aggregation benefit. · 路由聚合好处。 | **EN:** One forwarding-table entry covers many networks — smaller tables, faster lookup. / **中文：** 一条转发表项覆盖多个网络——表更小、查找更快。 |
| 9 | Datagram vs virtual circuit network. · Datagram vs 虚电路网络。 | **EN:** Datagram = connectionless per-packet routing; VC = setup phase, fixed path, local VC numbers per hop. / **中文：** Datagram = 无连接逐包路由；VC = 有建立阶段、固定路径、VC 号逐跳本地。 |
| 10 | Store-and-forward — five steps (slide p.9). · 存储转发——五步（课件 p.9）。 | **EN:** (1) Host sends to router; (2) buffer on arrival, verify checksum; (3) store until out interface free; (4) forward to next router; (5) repeat. / **中文：** （1）主机发到路由器；（2）到达缓冲、校验 checksum；（3）存到出接口空闲；（4）转发下一跳；（5）重复。 |
| 11 | Private address range 10.0.0.0/8. · 私有地址 10.0.0.0/8 范围。 | **EN:** 10.0.0.0 through 10.255.255.255. / **中文：** 10.0.0.0 至 10.255.255.255。 |
| 12 | IPv6 basics — 128-bit, hop limit, ::ffff, compression (slide p.26–28). · IPv6 基础——128 位、hop limit、::ffff、压缩（课件 p.26–28）。 | **EN:** 128-bit addresses; hop limit like TTL; IPv4-mapped ::ffff:x.x.x.x; compress longest zero run (8000::123:4567:89AB:CDEF). / **中文：** 128 位地址；hop limit 同 TTL；IPv4-mapped ::ffff:x.x.x.x；压缩最长零段（8000::123:4567:89AB:CDEF）。 |

`,o1=`# WK10 - TCP Sliding Window and Congestion Control

## 课件概述

本课件深入讲解 TCP 的核心机制：Sliding Window（滑动窗口）和 Congestion Control（拥塞控制）。Sliding Window 是 TCP 的"魔法"，它同时提供可靠性、有序传输和速率控制。拥塞控制是 TCP 在网络拥塞时自动降低发送速率的机制，是互联网稳定运行的关键。

---

## 必须掌握的知识点

### 1. TCP Sliding Window 回顾

![TCP Sliding Window 缓冲区机制](./images/WK10-Sliding-Window-Buffer.png)
*TCP Sliding Window 机制：发送方和接收方维护缓冲区，接收方通过 ACK 告知可用窗口大小，发送方据此控制发送速率*

#### What（是什么）
Sliding Window 提供三大功能：
- **Reliability**（可靠性）：确保数据正确到达
- **In-order delivery**（有序传输）：数据按顺序到达
- **Rate control**（速率控制）：防止发送过快

#### How（工作原理）

**窗口类型**：
- **Send Window**: 发送方能发送的数据 = 未确认 segments + 能装入接收窗口的未发送数据
- **Receive Window**: 接收方愿意接收的数据量（在 ACK 中通告）
- **Other windows**: 用于拥塞控制（CWND）

**关键不变量**：
\`\`\`
LastByteSent - LastByteAcked <= ReceiveWindowAdvertised
\`\`\`

**窗口为 0 时的处理**：
- 发送方不应发送数据
- 但可以发送 **URGENT data**
- 可以发送 **ACK packets**（0 bytes data）
- 可以发送 **zero window probe**（0 字节 segment），让接收方重新通告窗口大小，防止死锁

**死锁场景与 Persist Timer：**
- 当接收方缓冲区满（window=0）且应用层不读取数据时，接收方不会发送ACK
- 发送方收到 window=0 后停止发送，等待接收方的 WindowUpdate
- 但接收方也在等待发送方发送数据——造成**死锁**
- **解决方案：** 发送方启动 **Persist Timer**（坚持定时器），超时后发送 **ZeroWindowProbe**，强制接收方重新通告窗口大小
- 注意区分：**WindowUpdate** 由接收方发起（有数据可读时），**ZeroWindowProbe** 由发送方主动发起（防止死锁）

![TCP Sliding Window 避免死锁](./images/WK10-Sliding-Window-Deadlock.png)
*避免死锁：应用层读取数据后，接收方发送 ACK 通告新的窗口大小，发送方窗口向前滑动*

![TCP Sliding Window 滑动过程](./images/WK10-Sliding-Window-Slide.png)
*窗口滑动：接收方确认数据后，发送窗口向前移动，允许发送更多数据*

**延迟发送**：
- 发送方可能延迟发送，等待更多数据填满窗口
- 例如：不立即发送 1000B，而是等待更多数据填满 1500B packet
- **课件数值（对应 slide p.8）**：另一种说法是"已有 1000B，再等 **500B** 凑满一个 **1500B** 的 packet 才发"——核心都是用延迟换更少的 segment/header 开销，但代价是延迟

**把零窗口、丢包、persist/probe 串成一条完整 trace（对应 slide p.23–41，承接 WK9 的 byte trace，seg size=10）**：
\`\`\`
正常发送中，seg 21 在路上丢失，31/41/51/... 到达接收方
→ 接收方对每个收到的乱序 segment 回 DupACK:21, Window:50（重复确认，窗口仍 50）
→ 发送方收到 ACK + 3 个 DupACK:21 → 触发 Fast Retransmit，重传 seg 21
→ seg 21 到达，接收方按序收到 1-70 → 回 ACK:71, Window:0（缓冲被占满！）
→ 发送方收到 Window:0，停止发送，等接收方应用读数据
→ 死锁风险：若那条 WindowUpdate 丢了，双方互等
→ 发送方 Persist Timer 超时 → 发 ZeroWindowProbe
→ 接收方回 ZeroWindowProbeACK:71, Window:50（应用已读，窗口恢复）
→ 发送方恢复发送
\`\`\`
这条 trace 把"丢包→3 DupACK→fast retransmit→Window:0→persist→probe→恢复"串成一个闭环，是 WK9 滑动窗口 + WK10 拥塞/死锁的合体考点。

**缓冲区独立于应用：** 发送方和接收方的缓冲区独立于应用层运行。发送方可能缓冲数据等待填充更大的 segment，接收方也可能延迟将数据交付给应用——**不能保证数据立即被发送或读取**。这意味着窗口不会总是在应用读写后立即滑动。

---

### 2. Segment Loss 处理

#### 问题
当 segment 丢失时，接收方会收到乱序的数据，需要机制来检测和重传丢失的 segment。

#### 解决方案：Fast Retransmit（快速重传）

**触发条件**：收到 **3 个重复 ACK**（3 DupACKs）

**过程**：
1. 发送方发送 segments: 1, 11, 21, 31, 41, 51
2. Segment 21 丢失
3. 接收方收到 31, 41, 51（乱序），发送 ACK:21（重复）
4. 发送方收到 3 个重复 ACK:21
5. 发送方**立即重传** segment 21，不等待超时

**为什么是 3 个重复 ACK？**
- 1-2 个重复 ACK 可能是网络乱序导致
- 3 个重复 ACK 强烈暗示 segment 丢失

---

### 3. 两种流控机制

#### Go-back-N（回退 N）
- 当 packet 丢失时，从丢失点开始，**重传所有后续 packets**
- 优点：接收方不需要存储/重排 packets
- 缺点：重传大量可能已正确到达的数据

#### Selective Repeat（选择性重传）
- 只重传**丢失的 packet**
- Packets 可能乱序到达，接收方必须**存储乱序 packets**，然后按顺序交给应用层
- 更复杂，只在丢包常见时才有优势

#### 历史背景
- 链路层已经有流控和错误控制
- TCP 最初使用链路层的经验（Go-back-N）
- **这是一个糟糕的设计决定**

**为什么是糟糕的决定：** 链路层假设错误很少（因为它在物理链路上运行，出错率低），Go-back-N 在错误少时效率尚可。但 TCP 运行在互联网上，丢包是**常态**。每次丢包时 Go-back-N 重传 N 个 packets，这**加剧了拥塞**——每次丢包导致更多数据进入网络，形成恶性循环，直接导致了 1980 年代的拥塞崩溃。

---

### 4. Congestion Collapse（拥塞崩溃）

#### What（是什么）
1980 年代末，互联网发生了**拥塞崩溃**：
- 发送一个 packet 到隔壁大楼需要**几十分钟**

#### Why（为什么会发生）
- Router buffers 溢出，导致高丢包率
- 发送方使用 Go-back-N，每次丢包导致 **N 个更多 packets** 进入系统
- 形成恶性循环：丢包 → 重传 → 更多 packets → 更多丢包

**Pre-Jacobson 的基线（对应 slide p.44）**：在 Jacobson 之前，TCP **只有接收窗口（rwnd）做流控**，没有拥塞窗口——发送方完全不知道网络中间拥塞了，只看接收方还能不能收。所以拥塞发生在**网络**（路由器缓冲）而非**接收方缓冲**，rwnd 根本感知不到，于是窗口开得很大、持续往已拥塞的网络里灌包。Jacobson 引入 **CWND** 正是为了让发送方对"网络这一侧"也有限制。

#### How（如何解决）
Van Jacobson 诊断并解决了问题：
- 引入 **Selective Repeat**（fast retransmit）
- 引入 **Congestion Window (CWND)**
- **"Packet conservation" principle**: 只有在旧 packet 离开网络后才发送新 packet

---

### 5. Congestion Control Window (CWND)

#### What（是什么）
- **CWND (Congestion Window)**: 拥塞窗口，由**发送方**维护
- 动态调整，基于 packet loss 来限制发送速率到网络容量
- 与 Receive Window 不同：CWND 是发送方自己维护的，不需要修改 packet 格式

#### Why（为什么需要）
- Receive Window 只能防止**接收方缓冲区溢出**
- 但不能防止**网络拥塞**
- CWND 解决了网络拥塞问题

---

### 6. Slow Start（慢启动）

#### What（是什么）
- 初始：CWND = Maximum Segment Size (MSS)
- 发送方只发送 1 个 segment

#### How（增长过程）
1. 每收到一个 ACK：CWND += MSS
2. 发送方发送 2 个更多 segments（1 个替换已 ACK 的，1 个因为窗口增长）
3. 每个完整窗口的 ACK 使拥塞窗口**翻倍**
4. **指数增长**，直到：
   - 超时（timeout）
   - 达到阈值 **ssthresh**

#### 关键理解
- "Slow Start" 名称有误导性——实际上是**指数增长**
- "Slow" 是相对于最初一次发送整个窗口来说的

---

### 7. Congestion Avoidance（拥塞避免）

#### 机制
- 当 CWND 达到 **ssthresh** 时，增长变为**线性**
- 实现：每个完整窗口的 ACK，CWND += MSS
- 称为 **"Additive Increase"**（加法增长）

#### 丢包处理
- 当发生丢包时：**ssthresh = CWND / 2**
- 重新开始 slow start

---

### 8. TCP Tahoe (1988)

![Incremental Congestion Control - TCP Tahoe](./images/WK10-TCP-Tahoe.png)
*TCP Tahoe 拥塞控制：Slow Start（指数增长）→ 达到 ssthresh 后 Congestion Avoidance（线性增长）→ 丢包时 ssthresh=CWND/2 重新 Slow Start*

#### What（是什么）
TCP Tahoe 是 BSD Tahoe 版本中的 TCP 实现，引入了：
- **Slow Start**
- **Congestion Avoidance**
- **Fast Retransmit**

#### 工作流程
1. 初始：CWND = MSS, ssthresh = 大值
2. Slow Start：指数增长
3. 达到 ssthresh → Congestion Avoidance：线性增长
4. 超时或 3 DupACKs → ssthresh = CWND/2, 重新 Slow Start

---

### 9. TCP Reno（优化）

#### What（是什么）
TCP Reno 在 Tahoe 基础上增加了 **Fast Recovery**（快速恢复）：

#### 改进
- 当 fast retransmit 触发时：
  - ssthresh = CWND / 2
  - CWND = ssthresh + 3（因为有 3 个 DupACKs 说明有 3 个 packets 到达了接收方）
  - 直接进入 **Congestion Avoidance**，跳过 Slow Start

#### 对比

| 事件 | TCP Tahoe | TCP Reno |
|------|-----------|----------|
| 超时 | ssthresh=CWND/2, Slow Start | ssthresh=CWND/2, Slow Start |
| 3 DupACKs | ssthresh=CWND/2, Slow Start | ssthresh=CWND/2, **Fast Recovery** |

**SACK（Selective Acknowledgment，对应 slide p.54，非考）**：标准 TCP 的累积 ACK 只能说"我连续收到到第 N 字节"，中间多段丢失时发送方不知道哪些段其实到了。**SACK** 在 TCP option 里额外通告**最多 3 段已收到的字节范围**，让发送方只重传真正缺的段，而非 go-back-N 式全重传。这对高带宽延迟乘积（BDP）链路特别有用，但不属于期末考点，了解概念即可。

---

### 10. 宏观模型（Macroscopic Model）⚠️ 以下内容为扩展知识，非考试范围（not examinable）

#### 窗口大小公式
- W 每个窗口增加一次
- 近似：每个到达的 packet 使 W 增加 1/W
- 当丢包发生（概率 p）时，W 减半

**平衡状态**：
\`\`\`
W ≈ √(2/p)
\`\`\`

#### 速率公式
- 窗口每 RTT (T) 发送一次
\`\`\`
Rate ≈ W/T = √(2/p)/T
\`\`\`

#### 两个重要洞察
1. **RTT 不公平性**：对于给定的丢包率，RTT 更长的流获得更少的速率
2. **如果 RTT 很小，TCP 会强制丢包率很高**

---

### 11. 现代拥塞控制 ⚠️ 背景了解，不背细节

#### 问题
- 对于高带宽、长距离的网络（如跨洲数据中心），TCP Reno 需要**不现实的小丢包率**
- 数据中心内部的需求又不同

#### 解决方案
- **DCTCP**: 数据中心内部使用
- **Google's BBR**: 数据中心之间使用
- IETF 不愿改变标准，公司自己实现

**复习处理：** 课件把DCTCP/BBR放在"And finally"里，用来说明为什么Reno不适合所有现代网络。期末重点仍是Sliding Window、CWND、Slow Start、Congestion Avoidance、Tahoe/Reno；不需要背DCTCP/BBR算法细节。

---

## 关键术语

| 术语 | 定义 |
|------|------|
| Sliding Window | 滑动窗口，TCP 流量控制机制 |
| Receive Window | 接收窗口，接收方通告的可接收数据量 |
| CWND | Congestion Window，拥塞窗口，发送方维护 |
| ssthresh | Slow Start Threshold，慢启动阈值 |
| Slow Start | 慢启动，指数增长阶段 |
| Additive Increase | 加法增长，线性增长阶段 |
| Multiplicative Decrease | 乘法减少，丢包时窗口减半 |
| Fast Retransmit | 快速重传，3 DupACKs 触发 |
| Fast Recovery | 快速恢复，TCP Reno 的优化 |
| Go-back-N | 回退 N，重传丢失点之后的所有数据 |
| Selective Repeat | 选择性重传，只重传丢失的数据 |
| Congestion Collapse | 拥塞崩溃，网络严重过载 |
| MSS | Maximum Segment Size，最大 segment 大小 |
| RTT | Round Trip Time，往返时间 |
| DupACK | Duplicate ACK，重复确认 |

---

## 常见问题

### Q1: Slow Start 为什么叫"慢"？
实际上 Slow Start 是**指数增长**，并不慢。"Slow" 是相对于最初一次发送整个窗口来说的。它从 1 个 segment 开始，逐步探测网络容量。

### Q2: CWND 和 Receive Window 有什么区别？
- **Receive Window**: 接收方通告，防止接收方缓冲区溢出
- **CWND**: 发送方维护，防止网络拥塞
- 实际发送窗口 = min(CWND, Receive Window)

### Q3: 为什么是 3 个重复 ACK 触发 Fast Retransmit？
- 1-2 个重复 ACK 可能是网络乱序
- 3 个重复 ACK 强烈暗示 segment 丢失
- 这是一个启发式（heuristic），不是绝对正确

### Q4: TCP Tahoe 和 Reno 的主要区别？
- Tahoe: 无论超时还是 3 DupACKs，都回到 Slow Start
- Reno: 3 DupACKs 触发 Fast Recovery，直接进入 Congestion Avoidance

### Q5: 什么是 RTT 不公平性？
这是宏观模型给出的背景洞察，属于not examinable部分。知道"长RTT流可能吃亏"即可，不需要背公式或推导。

---

## 知识点之间的联系

\`\`\`
WK9-TCP (TCP 基础)
    ↓ Sliding Window
WK10-TCP-Flow-Congestion-Control (流控和拥塞控制)
    ↓ 网络层
WK10-Addressing-Switching (IP 寻址)
    ↓ 路由
WK11-Routing (路由算法)
\`\`\`

- **Sliding Window** 是 TCP 的核心机制
- **CWND** 与 **Receive Window** 共同决定发送速率
- **Fast Retransmit** 解决了拥塞崩溃问题
- **TCP Tahoe/Reno** 是拥塞控制的演进
- **宏观模型、DCTCP/BBR** 是背景材料，不作为主要复习对象

---

## 实际应用案例

### 案例 1: 文件传输的拥塞控制
\`\`\`
1. 连接建立，CWND = 1 MSS
2. Slow Start: 1 → 2 → 4 → 8 → 16 segments
3. 达到 ssthresh，进入 Congestion Avoidance
4. 线性增长：16 → 17 → 18 → ...
5. 检测到丢包（3 DupACKs）
6. Fast Retransmit + Fast Recovery
7. ssthresh = CWND/2, 继Congestion Avoidance
\`\`\`

### 案例 2: 视频流的拥塞控制
- 实时视频流使用 TCP 可能导致延迟
- 更好的选择：UDP + 应用层拥塞控制
- WebRTC 使用 GCC (Google Congestion Control)，属于背景理解

### 案例 3: 数据中心网络
- 传统 TCP Reno 在数据中心环境中表现不佳
- DCTCP (Data Center TCP) 使用 ECN 标记来更早检测拥塞
- Google's BBR 基于带宽和延迟建模，而不是丢包
- 这些现代算法不用背细节

---

## 常见错误和易错点

### ❌ 错误 1: 认为 Slow Start 是线性增长
Slow Start 是**指数增长**（每 RTT 翻倍）。Congestion Avoidance 才是线性增长。

### ❌ 错误 2: 混淆 Receive Window 和 CWND
- Receive Window: 接收方控制，防止接收方溢出
- CWND: 发送方控制，防止网络拥塞

### ❌ 错误 3: 认为 Fast Retransmit 需要等待超时
Fast Retransmit 在收到 **3 个重复 ACK** 时立即触发，不需要等待超时。

### ❌ 错误 4: 认为 TCP Tahoe 和 Reno 处理 3 DupACKs 的方式相同
- Tahoe: 回到 Slow Start
- Reno: Fast Recovery，直接进入 Congestion Avoidance

### ❌ 错误 5: 忘记 ssthresh 的更新时机
ssthresh 只在**丢包时**更新：ssthresh = CWND / 2

---

## 课件总结

本课件深入讲解了 TCP 的两大核心机制：
1. **Sliding Window**: 流量控制、可靠传输、有序传输
2. **Congestion Control**: Slow Start → Congestion Avoidance → Fast Retransmit/Fast Recovery

TCP 的拥塞控制从最初的简单机制演进到 Tahoe（1988）和 Reno，解决了拥塞崩溃问题。现代网络（数据中心、长距离传输）需要新的拥塞控制算法（DCTCP, BBR），但这些只需作为背景了解。

---

## 复习建议

1. **画出 Sliding Window 的变化过程**：理解窗口如何滑动、ACK 如何影响窗口
2. **理解 Slow Start 和 Congestion Avoidance 的区别**：指数 vs 线性增长
3. **掌握 Fast Retransmit 的触发条件**：3 个重复 ACK
4. **对比 TCP Tahoe 和 Reno**：Fast Recovery 的作用
5. **不要把宏观模型当重点**：W ≈ √(2/p) 和速率公式明确属于not examinable背景，最多理解结论。

---

*课件来源: COMP30023 2026 S1 WK10*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | rwnd vs cwnd — who sets each? (slide p.45) · rwnd vs cwnd——各由谁决定？（课件 p.45） | **EN:** rwnd = receiver advertises (flow control); cwnd = sender infers from network (congestion control). / **中文：** rwnd = 接收方通告（流量控制）；cwnd = 发送方根据网络推断（拥塞控制）。 |
| 2 | Effective send window formula. · 有效发送窗口公式。 | **EN:** min(rwnd, cwnd) — unacknowledged data may not exceed this. / **中文：** min(rwnd, cwnd)——未确认数据不得超过此值。 |
| 3 | Slow start — cwnd growth (slide p.46). · 慢启动——cwnd 增长（课件 p.46）。 | **EN:** Increase cwnd by one MSS for each ACK received (exponential growth per RTT). / **中文：** 每收到一个 ACK，cwnd 增加一个 MSS（每 RTT 近似翻倍）。 |
| 4 | Congestion avoidance — cwnd growth (slide p.48). · 拥塞避免——cwnd 增长（课件 p.48）。 | **EN:** Linear increase: add MSS per window of ACKs (additive increase). / **中文：** 线性增加：每窗口 ACK 增加 MSS（加法增长）。 |
| 5 | TCP Tahoe on loss (slide p.48). · TCP Tahoe 丢包时（课件 p.48）。 | **EN:** ssthresh = cwnd/2 before loss; cwnd = 1 MSS; restart slow start. / **中文：** 丢包前 cwnd 一半设为 ssthresh；cwnd = 1 MSS；重新慢启动。 |
| 6 | Fast retransmit trigger — 3 DupACKs (slide p.27). · 快重传触发——3 个 DupACK（课件 p.27）。 | **EN:** Three duplicate ACKs for same sequence number — infer loss without waiting for timeout. / **中文：** 同一序号三个重复 ACK——不等超时就推断丢包。 |
| 7 | TCP Reno vs Tahoe on fast retransmit (slide p.50). · Reno vs Tahoe 快重传后（课件 p.50）。 | **EN:** Reno: halve cwnd and enter fast recovery; Tahoe: cwnd=1 MSS and restart slow start. / **中文：** Reno：cwnd 减半并 fast recovery；Tahoe：cwnd=1 MSS 并重新慢启动。 |
| 8 | Zero window — URGENT data and probe (slide p.8). · 零窗口——URGENT 数据与 probe（课件 p.8）。 | **EN:** When rwnd=0 sender stops data; may send URGENT data or zero-window probe to get new window. / **中文：** rwnd=0 时发送方停发数据；可发 URGENT 数据或 zero-window probe 获取新窗口。 |
| 9 | Persist timer and ZeroWindowProbe. · Persist 定时器与 ZeroWindowProbe。 | **EN:** If window stays zero, persist timer fires → sender sends ZeroWindowProbe → receiver re-advertises rwnd. / **中文：** 窗口持续为零时 persist 定时器超时 → 发送 ZeroWindowProbe → 接收方重新通告 rwnd。 |
| 10 | Full trace — SYN:1 Window:50 through seg21 dupACK (slide p.23–41). · 完整 trace——SYN:1 Window:50 到 seg21 dupACK（课件 p.23–41）。 | **EN:** Handshake Window:50 → send/receive → seg21 lost → DupACK:21 ×3 → fast retransmit → ACK:71 Window:0 → persist probe → Window:50 restored. / **中文：** 握手 Window:50 → 收发 → seg21 丢 → DupACK:21 三次 → 快重传 → ACK:71 Window:0 → persist probe → 窗口恢复 50。 |
| 11 | Pre-Jacobson TCP — only rwnd (slide p.44). · Jacobson 之前——仅 rwnd（课件 p.44）。 | **EN:** Before Jacobson, TCP used only rwnd for flow control — no cwnd; senders could not detect network congestion. / **中文：** Jacobson 之前 TCP 仅用 rwnd 流控——无 cwnd；发送方无法感知网络拥塞。 |
| 12 | ssthresh role and DupACK meaning. · ssthresh 作用与 DupACK 含义。 | **EN:** ssthresh = threshold between slow start and congestion avoidance; DupACK = receiver repeats same ACK when out-of-order segment arrives. / **中文：** ssthresh = 慢启动与拥塞避免之间的阈值；DupACK = 乱序段到达时接收方重复同一 ACK。 |

`,c1=`# WK11 - Routing Algorithms

## 课件概述

本课件介绍网络层的路由算法，包括静态路由、自适应路由、Flooding（洪泛）、Bellman最优性原理、Dijkstra 最短路径算法，以及 Link State Routing（链路状态路由，如 OSPF）。本课件考试重点是会区分forwarding/routing、理解flooding的性质、能手动执行Dijkstra、掌握Link State Routing的五步。Distance Vector和BGP只作背景对比。

---

## 必须掌握的知识点

### 0. IPv6 开场（对应 slide p.1–4，背景但要点名）

课件在进入 routing 之前先用 IPv6 做"为什么需要网络层演进"的开场，要点：
- **IPv6 约 30 年前**为缓解 IPv4 地址耗尽而设计，地址 **128 位**（vs IPv4 的 32 位）
- **IPv6 header 更简单**，安全性后被**回移植到 IPv4**，并带 **QoS** 字段
- 自检：**\`http://test-ipv6.com\`**
- **IPv6 header 字段**：Version=6、**Differentiated services**（6-bit class + 2-bit ECN）、**Flow label**（伪虚电路标识）、**Payload length**、**Next header**、**Hop limit**（即 IPv4 的 TTL）、**16 字节** src/dst
- **地址格式**：\`8000:0000:0000:0000:0123:4567:89AB:CDEF\`，可缩写为 \`8000::123:4567:89AB:CDEF\`（连续全 0 段用 \`::\` 压缩，只能压一次）；带端口写成 \`[addr]:port\`
- **IPv4-mapped IPv6**：\`::ffff:192.31.2.46\`——把 IPv4 地址嵌入 IPv6 后 32 位
- **部署**：Google 统计约 **50% 全球、35% 澳大利亚**已支持 IPv6

> 注：本课件 IPv6 是开场背景，routing 才是考试重点；但 IPv6 头部字段和地址缩写是可考的硬知识。

---

### 1. Forwarding vs Routing

#### What（是什么）
- **Forwarding（转发）**: 当 packet 到达 router 时，根据 forwarding table 决定从哪个接口发出
- **Routing（路由）**: 决定 forwarding table 如何创建

#### How（工作方式）
每个 router 有 forwarding table（路由表）：
1. 检查 packet 的目的 IP 地址
2. 查表确定出接口
3. 将 packet 从该接口转发出去
4. 下一个 router 重复此过程

**关键理解**: Forwarding 是**本地操作**，Routing 是**全局决策**。

---

### 2. 路由算法的性质

一个好的路由算法应该具备：
- **Correctness**: 在所有节点对之间找到有效路由
- **Simplicity**: 简单
- **Robustness**: router 崩溃不需要"网络重启"
- **Stability**: 稳定算法达到平衡并保持
- **Fairness**: 公平
- **Efficiency**: 高效
- **Flexibility**: 能够实现策略

---

### 3. Delay vs Bandwidth 优化

#### 优化目标
- **Mean packet delay**: 平均 packet 延迟
- **Max network throughput**: 最大网络吞吐量

#### 最简单的方法
- **最小化跳数**: packet 需要经过的 router 数量
- 倾向于减少每 packet 带宽并改善延迟
- 但不保证减少实际距离——跨越太平洋可能只是 1 个 IP hop

#### 更灵活的方法
- 为每条链路分配**成本（cost）**
- 更灵活，但仍然不能表达所有路由偏好

---

### 4. 静态路由 vs 自适应路由

#### 静态路由（Non-adaptive）
- **不适应**网络拓扑变化
- **离线计算**，在 router 启动时上传
- **不响应故障**
- 适用于有明确或隐含选择的场景
- 例如：家庭 router——只有一条出路

#### 自适应路由（Adaptive）
- **动态路由**，适应拓扑和流量变化
- 优化某些属性：距离、跳数、估计传输时间等
- 可能从**相邻 router** 或**网络中的所有 router** 获取信息

---

### 5. Flooding（洪泛）

#### What（是什么）
- 将 packet 发送给**所有还没有它的邻居**
- 最简单的非静态路由

#### How（工作过程）
1. 发送 packet 给所有邻居
2. 每个邻居收到后，转发给**除了来源之外的所有邻居**
3. 必须跟踪已转发的 packet，避免重复转发
4. 使用 **TTL** 限制 packet 的传播

#### 优缺点

| 优点 | 缺点 |
|------|------|
| 保证最短距离和最小延迟 | 产生大量重复 packets |
| 速度基准 | 高度低效 |
| 极其 robust——如果有路径就能找到 | 必须有丢弃 packet 的机制（TTL） |

**课件 flooding 演练 A→D（对应 slide p.14–17）**：在一个有多条路径的图里从 A 发到 D，packet 会沿所有路径同时扩散。关键观察：**E 会从两条不同路径收到同一 packet 的两份副本**（"E receives two copies"）；但 E **只转发其中一份**（"E forwards only one copy"），靠的就是"已转发过这个 packet 就丢弃后续副本"的去重机制（用序号/记录表实现）。这正是 flooding 既要保证到达、又要靠去重避免无限复制的体现。

---

### 6. Bellman's Optimality Principle（最优性原理）

#### What（是什么）
> If router J is on the optimal path from router I to K, then the optimal path from J to K also falls along the same route.

如果 router J 在从 I 到 K 的最优路径上，那么从 J 到 K 的最优路径也沿着同一条路线。

#### Why（为什么）
如果存在更好的 J→K 路径，它会与 I→J 路径结合，形成更好的 I→K 路径，这与我们最初假设 I→K 是最优的矛盾。

#### Sink Tree（汇树）
- 最优性原理意味着从所有源到某个目的地的最优路由形成一棵**以目的地为根的树**
- 这就是 **Sink Tree**

---

### 7. Dijkstra's Shortest Path Algorithm

![Dijkstra 算法初始状态](./images/WK11-Dijkstra-Graph-Initial.png)
*Dijkstra 算法初始状态：节点 A 为永久节点（绿色），其他节点为 tentative（蓝色），每个节点标记 (距离, 前驱节点)*

![Dijkstra 算法执行步骤](./images/WK11-Dijkstra-Graph-Step.png)
*Dijkstra 算法执行中：选择距离最小的 tentative 节点 E（距离 4）设为永久，更新邻居节点的距离和前驱*

#### What（是什么）
- 将网络视为**带标签的图**
- 标签权重基于延迟、距离、成本等
- 找到从源到所有目的地的最短路径

#### How（算法步骤）

**节点分类**：
- **Unseen（未见）**: 不是我们已处理节点的邻居
- **Open（开放）**: 我们"访问"了邻居，但不是它。我们知道一条路径
- **Closed（关闭）**: 我们访问了它。我们知道到它的最短路径

**算法流程**：
1. 访问源节点："Open" 所有邻居，设置距离标签
2. 重复直到所有节点被访问或找到目的地：
   - 检查"工作节点"的相邻节点，计算距离，如果改进则更新标签
   - 检查所有 open 节点，选择距离最低的，标记为 closed
   - 将其作为新的"工作节点"
   - 回到步骤 1

**详细示例**：
\`\`\`
初始: A=0, 其他=∞

步骤1: A → Open B(2), G(6)
       Make A closed

步骤2: 选 B(2) → Open C(9), E(4)
       Make B closed

步骤3: 选 E(4) → Open F(6), G(5, 更新)
       Make E closed

步骤4: 选 G(5) → Open H(9)
       Make G closed

步骤5: 选 F(6) → Open H(8, 更新)
       Make F closed

步骤6: 选 H(8) → Open D(10)
       Make H closed

步骤7: 选 C(9) → (无改进)
       Make C closed

步骤8: 选 D(10) → 到达目的地
\`\`\`

**关键理解**：
- 距离必须**非负**
- 标签从**临时（tentative/open）**变为**永久（permanent/closed）**
- 一旦 closed，标签不会再改变
- **提前终止（对应 slide p.41）**：如果你只关心**到某个目的地 D** 的最短路径，那么当 D 成为**当前最低 tentative 的节点**被选中时就可以停——因为 D 一旦被选为最小，它的标签就是最终答案，不会再被改进。本例中步骤 8 选 D(10) 即可终止，无需继续 closed C。

---

### 8. Link State Routing（链路状态路由）

![Link State Routing 详解](./images/WK11-Link-State-Routing.png)
*Link State Routing：通过 HELLO 包发现邻居，使用 1/bandwidth 计算链路代价，通过可靠洪泛传播 Link State Packet，最常见实现是 OSPF*

#### What（是什么）
- 是一种**分布式**算法，取代了收敛慢的 Distance Vector Routing（Bellman-Ford）
- 今天使用的路由协议（如 OSPF）基于此

#### How（5 步过程）

1. **Discover neighbours**: 发送 HELLO packet，邻居回复其唯一 ID
2. **Set cost**: 设置到每个邻居的距离/成本
   - 常见技术：1/bandwidth（1 Gbps = 1, 100 Mbps = 10）
   - 也可以用延迟（通过 ECHO packet 计算）
   - 许多网络手动选择首选路由，然后找到使这些路由最短的链路成本（"Traffic Engineering"）
3. **Construct packet**: 构建包含所有信息的 Link State packet
   - 包含：ID, sequence number, age, 邻居列表和成本
   - **何时构建？** 构建packet本身容易，但决定何时构建很困难——是按固定间隔？还是链路变化时（如断开/恢复）？
4. **Send to all routers**: 使用**可靠洪泛（reliable flooding）**发送到所有 router
   - 使用 ACK 保证每个 router 收到
   - 比较 sequence number，如果不是更大则丢弃
   - Sequence numbers 是 32 bits 避免 wrap-around
   - Age 字段每秒减 1，到 0 时丢弃信息
5. **Compute shortest path**: 使用 Dijkstra 算法计算到每个其他 router 的最短路径

#### OSPF (Open Shortest Path First)
- 最常见的 Link State Routing 协议
- 用于**域内路由**（within a domain）

---

### 9. Distance Vector Routing vs Link State Routing ⚠️ 背景对比，非本课件重点

课件只明确提到：Link State Routing 取代了收敛慢的 Distance Vector Routing（Bellman-Ford），最常见的Link State Routing是OSPF。

**复习处理：** 不需要背完整DV vs LS表格，也不需要掌握Bellman-Ford算法。重点放在：
- Link State Routing的五步：发现邻居、设置cost、构造link state packet、可靠洪泛、运行Dijkstra
- Link State packet包含ID、sequence number、age、邻居及cost
- sequence number和age如何避免旧信息造成问题

---

## 关键术语

| 术语 | 定义 |
|------|------|
| Forwarding | 转发，根据路由表决定 packet 的出接口 |
| Routing | 路由，决定 forwarding table 如何创建 |
| Routing Table | 路由表，映射目的地址到出接口 |
| Flooding | 洪泛，将 packet 发送给所有邻居 |
| Dijkstra's Algorithm | 最短路径算法 |
| Link State Routing | 链路状态路由，OSPF 的基础 |
| Distance Vector Routing | 距离向量路由，Bellman-Ford；本课件背景对比 |
| OSPF | Open Shortest Path First，链路状态路由协议 |
| Sink Tree | 汇树，最优路由形成的树 |
| HELLO Packet | 用于发现邻居的 packet |
| Sequence Number | 序列号，用于避免旧信息 |
| Age | 年龄字段，用于过期信息 |
| Cost | 链路成本，通常基于带宽或延迟 |
| Static Routing | 静态路由，不适应拓扑变化 |
| Adaptive Routing | 自适应路由，动态调整 |

---

## 常见问题

### Q1: Forwarding 和 Routing 有什么区别？
- **Forwarding**: 当 packet 到达时，查表决定从哪个接口发出（本地操作）
- **Routing**: 决定路由表如何创建（全局决策）

### Q2: 为什么 Flooding 不实用？
因为会产生**大量重复 packets**，极度低效。但它极其 robust，如果有路径就能找到。

### Q3: Dijkstra 算法的时间复杂度是多少？
课件没有要求背复杂度。期末更可能考手动执行Dijkstra：维护unseen/open/closed节点，反复选择当前距离最小的open节点并更新邻居。

### Q4: 为什么需要 Age 字段？
因为 router 崩溃重启后，sequence number 可能从 0 开始。Age 字段每秒减 1，到 0 时丢弃信息，避免使用过时的路由信息。

### Q5: OSPF 和 BGP 有什么区别？
OSPF在本课件中作为Link State Routing的常见实现出现；BGP不属于本课件重点。只需知道OSPF是基于Link State的域内路由协议，BGP细节不用背。

---

## 知识点之间的联系

\`\`\`
WK10-Addressing-Switching (IP 地址)
    ↓ 路由基础
WK11-Routing (路由算法)
    ↓ 实现
OSPF (Link State Routing的常见实现)
    ↓ 地址转换
WK12-NAT (网络地址转换)
\`\`\`

- **IP 地址**是路由的基础（前缀匹配）
- **Dijkstra 算法**是 OSPF 的核心
- **Link State Routing** 取代了收敛慢的 Distance Vector，但DV算法细节不是本课件重点
- **Flooding** 是 Link State Routing 的一部分（可靠洪泛）

---

## 实际应用案例

### 案例 1: OSPF 在企业网络中的应用
- 企业网络使用 OSPF 进行域内路由
- 每个 router 维护完整的网络拓扑图
- 使用 Dijkstra 算法计算最短路径
- 支持负载均衡和故障恢复

### 案例 2: 家庭路由器的静态路由
- 家庭 router 只有一条出路（到 ISP）
- 使用静态路由：所有流量发往默认网关
- 不需要复杂的路由算法

### 案例 3: 数据中心网络
- 使用 ECMP (Equal-Cost Multi-Path) 路由
- 多条等成本路径，负载均衡
- 需要快速收敛，避免服务中断
- 这是现实背景，不是课件核心考点

---

## 常见错误和易错点

### ❌ 错误 1: 混淆 Forwarding 和 Routing
- Forwarding: 查表转发（本地）
- Routing: 创建路由表（全局）

### ❌ 错误 2: 认为 Dijkstra 算法可以处理负权重
Dijkstra 算法**不能处理负权重**。距离必须非负。

### ❌ 错误 3: 认为 Flooding 是实用的路由协议
Flooding 产生大量重复 packets，极度低效，不实用。

### ❌ 错误 4: 忘记 Age 字段的作用
Age 字段用于处理 router 崩溃重启后 sequence number 从 0 开始的问题。

### ❌ 错误 5: 混淆 OSPF 和 BGP
OSPF是本课件提到的Link State Routing实现；BGP不在本课件核心范围内，不要把BGP细节当作复习重点。

---

## 课件总结

本课件介绍了网络层的路由算法：
1. **Forwarding vs Routing**: 本地转发 vs 全局决策
2. **Flooding**: 简单但低效的洪泛算法
3. **Dijkstra's Algorithm**: 最短路径算法，OSPF 的基础
4. **Link State Routing**: 分布式算法，可靠洪泛 + 本地计算；OSPF是常见实现

路由算法是互联网高效运行的核心，理解它们有助于网络设计和故障排查。

---

## 复习建议

1. **手动执行 Dijkstra 算法**: 给定一个图，逐步计算最短路径
2. **理解 Link State Routing 的 5 个步骤**: 发现邻居、设置成本、构建包、洪泛、计算
3. **对比 Flooding 和 Link State Routing**: 效率、robustness、复杂度
4. **掌握 Bellman's Optimality Principle**: 为什么最优路径形成 Sink Tree？
5. **淡化背景内容**: Distance Vector/BGP/ECMP只作背景，不背算法细节。

---

*课件来源: COMP30023 2026 S1 WK11*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | Forwarding vs routing. · Forwarding vs routing。 | **EN:** Forwarding = data plane, move packet to next hop using table; routing = control plane, build the table. / **中文：** Forwarding = 数据平面，查表转下一跳；routing = 控制平面，构建转发表。 |
| 2 | Link State Routing — five steps (slide p.42). · 链路状态路由——五步（课件 p.42）。 | **EN:** (1) Discover neighbours; (2) set link costs; (3) construct link-state packet; (4) reliable flooding to all routers; (5) run Dijkstra locally. / **中文：** （1）发现邻居；（2）设置链路代价；（3）构造链路状态包；（4）可靠洪泛到所有路由器；（5）本地运行 Dijkstra。 |
| 3 | OSPF — what is it? · OSPF 是什么？ | **EN:** Open Shortest Path First — most common link-state routing protocol (within a domain). / **中文：** Open Shortest Path First——最常见的链路状态路由协议（域内）。 |
| 4 | Dijkstra early termination condition (slide p.41). · Dijkstra 提前终止条件（课件 p.41）。 | **EN:** Stop when destination node has smallest tentative distance (e.g. D=10 is minimum). / **中文：** 当目的节点 tentative 距离最小时停止（如 D=10 已为最小）。 |
| 5 | Flooding — duplicate control (slide p.14). · Flooding 如何控制重复（课件 p.14）。 | **EN:** Sequence numbers / record seen packets — forward each packet at most once per link. / **中文：** 序号/记录已见分组——每条链路最多转发一次。 |
| 6 | IPv6 address length (slide p.2). · IPv6 地址长度（课件 p.2）。 | **EN:** 128 bits. / **中文：** 128 位。 |
| 7 | IPv6 Hop limit field (slide p.3). · IPv6 Hop limit 字段（课件 p.3）。 | **EN:** Same role as IPv4 TTL — decremented each hop, drop at zero. / **中文：** 同 IPv4 TTL——每跳减 1，为零则丢弃。 |
| 8 | IPv4-mapped IPv6 address form (slide p.4). · IPv4-mapped IPv6 地址形式（课件 p.4）。 | **EN:** ::ffff:192.31.2.46 — IPv4 embedded in low 32 bits. / **中文：** ::ffff:192.31.2.46——IPv4 嵌入低 32 位。 |
| 9 | Compress IPv6: 8000:0000:0000:0000:0123:4567:89AB:CDEF (slide p.4). · 压缩 IPv6（课件 p.4）。 | **EN:** 8000::123:4567:89AB:CDEF. / **中文：** 8000::123:4567:89AB:CDEF。 |
| 10 | Link-state packet contents. · 链路状态包内容。 | **EN:** Router ID, sequence number, age, list of neighbours and costs. / **中文：** 路由器 ID、序号、age、邻居列表及代价。 |
| 11 | Static vs adaptive routing. · 静态 vs 自适应路由。 | **EN:** Static = manually configured, does not adapt; adaptive = updates as topology changes. / **中文：** 静态 = 手工配置、不随拓扑变；自适应 = 拓扑变化时更新。 |
| 12 | Sink tree from shortest paths. · 最短路径汇树。 | **EN:** Optimal routes from all routers to a destination form a sink tree (no loops). / **中文：** 所有路由器到同一目的的最优路由形成汇树（无环）。 |

`,u1=`# WK11 - Internet Control Protocols (ICMP, DHCP, ARP)

## 课件概述

本课件介绍互联网网络层的三个关键控制协议：ICMP（Internet Control Message Protocol）、DHCP（Dynamic Host Configuration Protocol）和 ARP（Address Resolution Protocol）。这些协议虽然不属于数据传输的核心路径，但对于网络的正常运行、故障诊断和地址管理至关重要。

---

## 必须掌握的知识点

### 1. Data Plane vs Control Plane

![Data Plane vs Control Plane 架构图](./images/WK11-Data-Control-Plane.png)
*Data Plane vs Control Plane：Control Plane 通过 OSPF/EIGRP 等协议构建 Routing Table，Data Plane 根据 Forwarding Table 转发数据包*

#### What（是什么）
协议并不真的形成单一的栈。更好的模型是将协议分为不同的"平面"：
- **Data Plane**（数据平面）：网络层的**转发**功能
- **Control Plane**（控制平面）：网络层的**路由选择**功能
- **Management Plane**（管理平面）：网络层的 BGP 策略设置

#### Why（为什么需要区分）
- BGP（网络层）使用 TCP（传输层）进行更新
- 这打破了传统的分层模型
- 需要更灵活的理解方式

---

### 2. ICMP (Internet Control Message Protocol)

![ICMP 消息类型表](./images/WK11-ICMP-Message-Types.png)
*ICMP 消息类型：Destination Unreachable、Time Exceeded（traceroute 利用此机制）、Echo/Reply（ping 使用）等*

#### What（是什么）
ICMP 是网络层的**管理协议**，用于报告错误和传递控制信息。最常见的应用是 \`ping\`。

#### ICMP 消息类型

| Message Type | Description |
|--------------|-------------|
| **Destination Unreachable** | Packet 无法送达 |
| **Time exceeded** | TTL 字段减到 0 |
| **Parameter problem** | 无效的 header 字段 |
| **Source quench** | 阻塞包（choke packet） |
| **Redirect** | 教会 router 更好的路由 |
| **Echo and echo reply** | 检查机器是否在线 |
| **Timestamp request/reply** | 与 Echo 相同，但带时间戳 |
| **Router advertisement/solicitation** | 查找附近的 router |

#### ICMP 在协议栈中的位置
ICMP 是**网络层协议**，但它的消息**封装在 IP packet 中**传输。

---

### 3. Traceroute（路由追踪）

![Traceroute 实际输出示例](./images/WK11-Traceroute-Example.png)
*Traceroute 输出示例：通过逐步增加 TTL 值，逐跳发现从源到目的地的路径，每跳显示 3 次 RTT*

#### What（是什么）
Traceroute 是一个利用 ICMP Time Exceeded 消息来追踪 packet 路径的工具。

#### How（工作原理）
1. 发送 TTL=1 的 packet → 第一个 router 收到后 TTL 减到 0，返回 **Time Exceeded** 消息（包含 router 的 IP 地址）
2. 发送 TTL=2 的 packet → 第二个 router 返回 Time Exceeded
3. 发送 TTL=3 的 packet → 第三个 router 返回 Time Exceeded
4. 重复直到到达目的地

#### 实际输出示例
\`\`\`
tracert bbc.com
Tracing route to bbc.com [151.101.0.81] over 30 hops:
1   3 ms   2 ms   5 ms   10.128.0.1
2   4 ms   *      *      124.19.10.193
3   6 ms   2 ms   4 ms   59.154.142.234
...
8   5 ms   8 ms   5 ms   151.101.0.81
\`\`\`

**关键理解**：
- \`*\` 表示请求超时（router 不返回 ICMP 消息）
- 每一行是路径上的一个 hop
- IP 地址是每个 router 的接口地址

**国际 traceroute（对应 slide p.10）**：课件还有一个**跨洲**的 traceroute 例子，能看到长距离跳的 RTT 明显更大（例如 **169 ms**、**325 ms** 级别的单跳延迟），并且响应里带**运营商域名**（如 \`telia.net\`、\`cogentco.com\`、\`atlas.cogentco.com\`）——因为跨洲流量通常经过 Tier-1 运营商的骨干。这与上面 \`bbc.com\` 的短距离例子对比，能直观看到"跳数少 ≠ 延迟低"，延迟主要由光速传播距离决定。

**海底电缆（对应 slide p.20–21，非考背景）**：全球互联网的跨洲连接**物理上依赖海底通信电缆**（submarine cables），不是卫星。可查 **\`submarinecablemap.com\`** 看全球海缆走向。了解即可——它解释了为什么跨洲 traceroute 的 RTT 那么大：信号要沿几千公里海缆走，受光速限制。

---

### 4. DHCP (Dynamic Host Configuration Protocol)

#### What（是什么）
DHCP 自动化 IP 地址分配。每个网络都有一个 DHCP server 来发放 IP 地址。

#### Why（为什么需要）
- 手动配置每个主机：困难、容易出错
- 对新设备响应慢
- 移动设备需要频繁重新配置

#### How（工作过程）

\`\`\`
Client                              DHCP Server
  |                                    |
  |--- DHCP DISCOVER (广播) --------->|  (我在哪里？我需要 IP)
  |                                    |
  |<-- DHCP OFFER --------------------|  (给你一个 IP: 192.168.1.100)
  |                                    |
  |--- DHCP REQUEST ----------------->|  (我要用这个 IP)
  |                                    |
  |<-- DHCP ACK ----------------------|  (确认，租期 24 小时)
  |                                    |
  |         IP Address Assigned        |
\`\`\`

**关键细节**：
- **DHCP DISCOVER** 通过 UDP 广播发送
- Router 可以配置为**中继**这些请求到 DHCP server（如果不是直接连接）
- IP 地址通常有**租期（lease）**——到期后 server 会回收并重新发放
- 主机可以在租期到期前请求**续租**
- 还可以设置其他参数：默认网关、DNS server 地址、时间 server
- **安全风险：** DHCP 允许任何连接的设备获取 IP 地址（可以应用 MAC 限制，但基本机制无认证）

#### DHCP 在协议栈中的位置
- DHCP 是 **Layer 7（应用层）协议**，属于 **Control Plane**
- 尽管它被网络层使用，但它本身运行在 UDP 之上
- 这打破了传统的分层模型

---

### 5. MAC Address

#### What（是什么）
- **MAC (Media Access Control) Address**: 网络接口的**硬件地址**，常被称为 "**physical address**"（对应 slide p.15）
- ⚠️ 命名陷阱：MAC 虽叫 "physical address"，但**它不在 physical layer**——它工作在 **Data Link layer（host-to-network layer）**，是链路层概念。物理层只管比特如何在介质上传输，不涉及地址。
- 可以看作是接口的**全局唯一标识符**
- 通常由制造商**硬编码**
- 48 或 64 bits 长，例如：\`00:1A:2B:3C:4D:5E\`
- 工作在 **Host-to-network/Data Link layer**

#### Why（为什么需要）
- DHCP 请求时还没有 IP 地址，需要用 MAC 地址来标识
- 底层网络（Ethernet/WiFi）使用 MAC 地址进行通信

---

### 6. ARP (Address Resolution Protocol)

![ARP 与 OSI 层级关系](./images/WK11-ARP-OSI.png)
*ARP 是连接 Network Layer（IP 地址）和 Data Link Layer（MAC 地址）的桥梁，通过广播请求将 IP 地址解析为 MAC 地址*

#### What（是什么）
ARP 是网络层和底层网络层之间的**桥梁**：
- 将 **IP 地址** 转换为 **MAC 地址**
- 使得 IP packet 能在 Ethernet/WiFi 网络上传输

#### How（工作过程）

\`\`\`
Host A (1.2.3.4)                     Host B (5.6.7.8)
  |                                    |
  |--- ARP Request (广播):             |
  |    "谁拥有 IP 5.6.7.8？"          |
  |                                    |
  |<-- ARP Response (单播):            |
  |    "我是 5.6.7.8，MAC 是 XX:XX:XX"|
  |                                    |
  |         用 MAC 地址通信            |
\`\`\`

**关键细节**：
- ARP **广播**一个 Ethernet packet，询问谁拥有目标 IP 地址
- 广播到达网络上的**每个主机**，拥有者会用其 MAC 地址响应
- 低层发送是通过 MAC 地址完成的
- 这个协议运行非常频繁，甚至用于查找最近的 router

#### ARP Cache
- 为了提高效率，主机会**缓存** ARP 响应
- 缓存有过期时间

---

### 7. ARP Spoofing（ARP 欺骗攻击）

#### What（是什么）
ARP 是**安全噩梦**：
- **没有认证机制**
- 缓存响应，即使不是直接请求的
- **ARP Spoofing** 是大多数中间人攻击的**入口攻击**

#### How（攻击原理）
1. 攻击者发送伪造的 ARP 响应
2. 将攻击者的 MAC 地址与另一个主机的 IP 地址关联
3. 例如：将攻击者的 MAC 与默认网关、DNS server、网站的 IP 关联
4. 所有流量都会经过攻击者

#### 防御
- **Dynamic ARP Inspection (DAI)**
- **DHCP Snooping**
- 静态 ARP 条目（不实用）

---

### 8. Data Plane vs Control Plane 总结

| Plane | 功能 | 协议示例 |
|-------|------|----------|
| **Data Plane** | 数据转发 | IP |
| **Control Plane** | 路由选择、地址管理 | BGP, OSPF, DHCP, ARP |
| **Management Plane** | 策略配置 | BGP policies |

**关键理解**：
- DHCP 是 Layer 7 协议（运行在 UDP 上），但属于 Control Plane
- ARP 是 Link Layer 协议，但为 Network Layer 服务
- 协议栈不是严格的分层，而是有交叉
- **注意：** 在本课程之外，"Control Plane"一词通常**仅指路由协议**（如 BGP, OSPF），不包括 DHCP/ARP。本课程将这些都归入 Control Plane 是为了理解方便。

---

## 关键术语

| 术语 | 定义 |
|------|------|
| ICMP | Internet Control Message Protocol，网络层控制消息协议 |
| DHCP | Dynamic Host Configuration Protocol，动态主机配置协议 |
| ARP | Address Resolution Protocol，地址解析协议 |
| MAC Address | Media Access Control Address，硬件地址 |
| TTL | Time To Live，packet 的跳数限制 |
| Traceroute | 路由追踪工具，利用 ICMP Time Exceeded |
| DHCP DISCOVER | DHCP 客户端广播请求 |
| DHCP OFFER | DHCP 服务器提供的 IP 地址 |
| DHCP REQUEST | 客户端确认使用该 IP |
| DHCP ACK | 服务器确认分配 |
| ARP Request | 广播询问谁拥有某 IP |
| ARP Response | 单播回复 MAC 地址 |
| ARP Spoofing | ARP 欺骗攻击 |
| Data Plane | 数据转发平面 |
| Control Plane | 控制平面（路由、地址管理） |

---

## 常见问题

### Q1: ICMP 是网络层还是传输层协议？
ICMP 是**网络层协议**，但它的消息封装在 IP packet 中。它不提供数据传输服务，而是提供错误报告和控制信息。

### Q2: DHCP 为什么是应用层协议？
因为 DHCP 运行在 **UDP** 之上（端口 67/68），使用客户端-服务器模型。尽管它为网络层服务，但它本身是应用层协议。

### Q3: ARP 为什么是安全噩梦？
因为：
- 没有认证机制
- 缓存所有响应（即使不是直接请求的）
- 攻击者可以轻易发送伪造的 ARP 响应
- 是中间人攻击的入口

### Q4: Traceroute 如何工作？
通过发送递增 TTL 的 packets，每个 router 在 TTL 减到 0 时返回 ICMP Time Exceeded 消息，从而揭示路径上的每个 router。

### Q5: 为什么需要 MAC 地址和 IP 地址两套地址？⚠️ 补充知识，非考试内容（Not examinable）
- **MAC 地址**: 硬件层面的标识，全球唯一，用于本地网络通信
- **IP 地址**: 逻辑层面的标识，用于路由和端到端通信
- 两层地址使得网络更灵活（IP 可以改变，MAC 不变）

---

## 知识点之间的联系

\`\`\`
WK10-Addressing-Switching (IP 地址)
    ↓ 地址解析
WK11-Control (ICMP, DHCP, ARP)
    ↓ 路由
WK11-Routing (路由算法)
    ↓ 地址转换
WK12-NAT (网络地址转换)
\`\`\`

- **ARP** 将 IP 地址转换为 MAC 地址，是 IP 通信的基础
- **DHCP** 自动分配 IP 地址，减少手动配置
- **ICMP** 提供网络诊断工具（ping, traceroute）
- 这三个协议都是网络正常运行的**基础设施**

---

## 实际应用案例

### 案例 1: 网络故障排查
\`\`\`
1. ping 目标 → 检查是否可达（ICMP Echo）
2. traceroute 目标 → 查看路径（ICMP Time Exceeded）
3. 检查 ARP 缓存 → 确认 MAC 地址映射
4. 检查 DHCP 租期 → 确认 IP 地址有效
\`\`\`

### 案例 2: 企业网络安全
- **ARP Spoofing** 是常见的内部攻击
- 使用 **Dynamic ARP Inspection** 防御
- **DHCP Snooping** 防止伪造 DHCP server

### 案例 3: 移动设备漫游
- 设备从一个网络移动到另一个网络
- DHCP 自动分配新的 IP 地址
- ARP 重新解析网关的 MAC 地址

---

## 常见错误和易错点

### ❌ 错误 1: 认为 ICMP 是传输层协议
ICMP 是**网络层协议**，封装在 IP packet 中。

### ❌ 错误 2: 认为 DHCP 是网络层协议
DHCP 是**应用层协议**（运行在 UDP 上），但属于 Control Plane。

### ❌ 错误 3: 认为 ARP 有安全机制
ARP **没有任何认证机制**，是安全噩梦。

### ❌ 错误 4: 混淆 MAC 地址和 IP 地址
- MAC 地址: 硬件标识，48/64 bits，本地网络使用
- IP 地址: 逻辑标识，32/128 bits，路由使用

### ❌ 错误 5: 只背某一种 Traceroute 实现
本课件重点是 **TTL逐步增加，路由器返回ICMP Time Exceeded**。不同系统的探测包可能是ICMP、UDP或TCP，但路径发现依赖的是ICMP错误消息。

---

## 课件总结

本课件介绍了三个关键的互联网控制协议：
1. **ICMP**: 错误报告和诊断（ping, traceroute）
2. **DHCP**: 自动 IP 地址分配
3. **ARP**: IP 地址到 MAC 地址的转换

这些协议虽然不在数据传输的核心路径上，但对于网络的正常运行、故障诊断和地址管理至关重要。理解它们的工作原理有助于网络编程和故障排查。

---

## 复习建议

1. **理解 ICMP 的消息类型**: 尤其是 Destination Unreachable 和 Time Exceeded
2. **掌握 DHCP 的工作过程**: DISCOVER → OFFER → REQUEST → ACK
3. **理解 ARP 的工作原理**: 广播请求，单播响应
4. **了解 ARP Spoofing**: 攻击原理和防御方法
5. **区分 Data Plane 和 Control Plane**: 哪些协议属于哪个平面？

---

*课件来源: COMP30023 2026 S1 WK11*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | ARP purpose (slide p.16). · ARP 用途（课件 p.16）。 | **EN:** Resolve next-hop IP address to MAC address on a LAN. / **中文：** 在同一 LAN 上将下一跳 IP 解析为 MAC 地址。 |
| 2 | ARP request — broadcast or unicast? · ARP 请求是广播还是单播？ | **EN:** Broadcast on LAN — who has IP X? Target replies unicast. / **中文：** LAN 上广播——谁有 IP X？目标单播回复。 |
| 3 | ARP cache (slide p.18). · ARP 缓存（课件 p.18）。 | **EN:** Resolved IP→MAC mappings cached temporarily; entries time out and must be refreshed. / **中文：** IP→MAC 映射临时缓存；表项超时后须重新解析。 |
| 4 | ICMP purpose (slide p.6). · ICMP 用途（课件 p.6）。 | **EN:** Error reporting and network diagnostics between IP entities. / **中文：** IP 实体间的差错报告与网络诊断。 |
| 5 | Traceroute — TTL mechanism (slide p.7). · Traceroute——TTL 机制（课件 p.7）。 | **EN:** Send packets with TTL=1,2,3…; each hop returns Time Exceeded; map path and RTTs. / **中文：** 发送 TTL=1,2,3… 的包；每跳返回 Time Exceeded；映射路径与 RTT。 |
| 6 | ICMP Time Exceeded — when sent? · ICMP Time Exceeded 何时发送？ | **EN:** When a router decrements TTL to zero (or reassembly timeout). / **中文：** 路由器将 TTL 减到零时（或重组超时时）。 |
| 7 | DHCP DISCOVER and OFFER (slide p.11–12). · DHCP DISCOVER 与 OFFER（课件 p.11–12）。 | **EN:** Client broadcasts DISCOVER; server replies OFFER with proposed IP address. / **中文：** 客户端广播 DISCOVER；服务器 OFFER 回复提议的 IP 地址。 |
| 8 | DHCP also provides gateway and DNS (slide p.12). · DHCP 还提供网关与 DNS（课件 p.12）。 | **EN:** Besides IP address, DHCP can assign default gateway and DNS server. / **中文：** 除 IP 地址外，DHCP 可分配默认网关和 DNS 服务器。 |
| 9 | DHCP — layer 7 control plane (slide p.13). · DHCP——第 7 层控制平面（课件 p.13）。 | **EN:** DHCP is an application-layer (Layer 7) control-plane protocol running over UDP. / **中文：** DHCP 是跑在 UDP 之上的应用层（第 7 层）控制平面协议。 |
| 10 | Data plane vs control plane (slide p.4). · Data plane vs control plane（课件 p.4）。 | **EN:** Data plane forwards packets; control plane builds routing/forwarding state. / **中文：** Data plane 转发分组；control plane 构建路由/转发状态。 |
| 11 | MAC address — layer note (slide p.15). · MAC 地址——层次说明（课件 p.15）。 | **EN:** Called physical address but works at data link layer, not physical layer. / **中文：** 虽叫 physical address，但工作在数据链路层，不在物理层。 |
| 12 | Ping — ICMP Echo (slide p.6) and default gateway (slide p.12). · Ping——ICMP Echo（课件 p.6）与默认网关（课件 p.12）。 | **EN:** Ping sends ICMP Echo Request; target replies Echo Reply. Default gateway = router for off-subnet destinations. / **中文：** Ping 发 ICMP Echo Request；目标回 Echo Reply。默认网关 = 目的不在本地子网时的路由器。 |

`,d1=`# WK12 - Network Address Translation (NAT) & Debugging

## 课件概述

本课件介绍 Network Address Translation (NAT) 的动机、机制、优缺点，以及如何调试"互联网不工作"的问题。NAT 是解决 IPv4 地址耗尽的关键技术，通过将私有地址转换为公共地址，允许多个设备共享一个公共 IP 地址。

---

## 必须掌握的知识点

### 1. IPv4 地址稀缺性

#### What（是什么）
随着 IP 地址变得稀缺，需要处理更多客户端的方法。IPv6 能解决问题，但需要一个**临时方案**。

#### 私有地址（Private Addresses）
- 许多主机只需要内部访问
- **私有子网（RFC 1918，对应 slide p.5）**：
  - \`192.168.0.0/16\`（192.168.0.0 – 192.168.255.255）
  - \`172.16.0.0/12\`（172.16.0.0 – 172.31.255.255）
  - \`10.0.0.0/8\`（\`10.0.0.0\` – \`10.255.255.255\`，课件写全的范围）
- 可以重复使用：在组织内唯一，但**全球不唯一**
- **绝对不能**在公共互联网上使用

**原始设计意图：** 最初考虑使用**应用层代理**来访问外部服务，但实际上 NAT 最终成为被广泛采用的方案。

---

### 2. NAT 的工作原理

![NAT 机制示意图](./images/WK12-NAT-Mechanism.png)
*NAT 工作原理：内部主机 (10.0.0.1:5544) 发送数据包到 NAT box，NAT 将源 IP 和端口转换为公网 IP (198.60.42.12:3344)，同时修改端口号 (NAPT)*

#### What（是什么）
- 每个客户/家庭被分配**一个公共 IP 地址**
- 内部主机/接口被分配**私有 IP 地址**
- 内部 IP 地址用于 LAN 内部通信
- 当 packet 发往互联网时，内部地址被**转换**为公共 IP 地址

#### How（详细机制）

**假设**: TCP/UDP（有一些例外），特别是源和目的端口字段的位置

**过程**：
1. NAT box 将 IP 源地址（\`10.x.y.z\`）替换为公共 IP 地址
2. TCP 源端口被替换为 NAT 转换表条目的**索引**
   - 共 65,536 个条目（16 bits，与 TCP 端口字段相同）
   - 每个条目包含原始 IP 地址（私有 IP）和原始源端口号
3. IP 和 TCP checksums 被**重新计算**
4. 当从互联网到达 NAT box 的 packet 到达时，查找 TCP header 中的目的端口
   - 检索原始源端口和源 IP 地址
   - 更新 headers 和 checksums
   - 发送给内部主机

**关键理解**: 这实际上是 **NAPT (Network Address Port Translation)**，因为端口号也改变了。

---

### 3. NAT 的批评

#### 违反端到端连接性
- 私有网络中的接口**只能在发送 packets 并创建映射后才能接收 packets**（某些例外情况：如 UPnP 端口映射、静态端口转发）
- 打破了端到端连接模型

#### 违反 IP 架构模型
- IP 架构规定每个 IP 地址表示互联网上的**唯一接口**
- 但数千个连接到互联网的接口都有 \`10.0.0.1\`

#### 层级违规（Layering Violation）
- 假设了 payload 内容的性质
- 最初只适用于 TCP 和 UDP
- 必须窥探 FTP 消息（因为 FTP 在 payload 中嵌入 IP 地址）

#### 将互联网从无连接变为伪面向连接
- NAT 维护**连接状态**
- 如果 NAT 崩溃，所有连接都会丢失

#### 限制连接数量
- 端口号是 16 bits，限制了同时连接数

---

### 4. NAT 的优势

#### 广泛部署
- 尽管有批评，NAT 在家庭和小型企业中广泛部署
- **Carrier Grade NAT**: ISP 只给客户私有地址

#### 安全优势
- 只有在创建出站连接后才能接收 packets
- 内部网络**大大屏蔽**了来自入站未请求 packets 的攻击
- **但 NAT 不应取代防火墙**

#### 未来
- 即使 IPv6 广泛部署且不再稀缺，NAT 可能仍会继续使用

---

### 5. UPnP (Universal Plug and Play)（And finally：功能概念）

#### What（是什么）
- 试图克服 NAT 的弱点
- 随着互联网使用增长，家庭机器需要充当服务器（游戏、聊天、媒体播放器等）

#### How（工作方式）
- UPnP 实现了 **Internet Gateway Device Protocol**
- 允许在 NAT 转换表中创建**端口映射**
- 使得内部网络可以运行服务器

#### 安全问题
- UPnP 的**不良实现**允许攻击者从外部 IP 地址修改转换表

**复习处理：** 记住UPnP的功能：允许内部主机在NAT上创建端口映射，从而运行服务器；以及风险：坏实现可能让外部攻击者改NAT表。不需要背Internet Gateway Device Protocol细节。

---

### 6. 调试"互联网不工作"

#### 症状分析
- **一个应用还是多个/所有应用？**
- **无响应**：一个、多个、所有？
- **非常慢**
- **访问被拒绝**
- **部分响应**（页面部分加载或未格式化）

#### 结构化探究框架
当有人报告"互联网不工作"时，可以用这4个问题引导排查：
1. **用户体验的哪些部分可能出了问题？**（症状分析）
2. **可以问同事什么问题来缩小可能性范围？**（例如："你还能访问其他网站吗？"）
3. **每个部分存在哪些可能的问题？**（按位置排查）
4. **如何检验这些假设？**（使用调试工具验证）

#### 可能的位置
- **空间位置**：本地计算机、服务器、router、NAT、防火墙？
- **协议栈位置**：物理层、链路层、网络层、传输层、应用层？
- 注意：并非所有层级组合都有意义——**路由器没有应用层**
- "关闭再重新打开"对本地设备有用，但对**互联网整体不起作用**

**调试矩阵练习（对应 slide p.12–13）**：课件用一个**二维网格**来组织排查——**行 = 空间位置**（本机、本地网、网关、ISP、远端服务），**列 = 协议栈层**（物理/链路/网络/传输/应用）。把症状填进对应格子（如"本机 × 物理层 = 网线没插"、"网关 × 网络层 = 路由表错"），就能系统地把大问题切成小假设，再逐格用工具验证。这个矩阵法比漫无目的地 ping 更高效，是课件想传达的"结构化调试"思路。

#### 调试工具

| 功能 | 工具例子 |
|------|----------|
| 查看本机网络配置 | \`ifconfig\`/\`ipconfig\` |
| 查看路由表 | \`route\` |
| 查看 ARP 缓存 | \`arp\` |
| 测试连通性 | \`ping\` |
| 追踪路径 | \`traceroute\`/\`tracert\` |
| 查询 DNS | \`dig\`/\`host\`/\`nslookup\` |
| 直接发 HTTP 请求 | \`cURL\`/\`wget\`/\`snarf\` |
| 测试带宽或外部服务状态 | Speedtest、Downdetector |
| 分析浏览器请求 | Browser Dev Tools 的 Network tab |
| 检查本机资源 | Task Manager |

**考试提示：** 课件明确说：考试记住这些"功能"可用，不需要背所有命令名或网站名。

#### 常见问题
- **IP 黑名单**: 目标服务器封锁了你的 IP
- **DNS 配置错误**: DNS server 配置不正确
- **本地 ISP 问题**: ISP 网络故障
- **服务器宕机**: 一个页面还是整个站点？DoS 攻击？
- **CDN 问题**: CDN 节点故障
- **密码错误**: 剪切粘贴空格、大写锁定
- **WiFi 未连接**: 物理连接问题
- **链路拥塞**: 网络拥堵

---

### 7. NAT 转换表示例

\`\`\`
私有 IP:Port          公共 IP:Port         状态
192.168.1.100:50001 → 203.0.113.1:40001   ESTABLISHED
192.168.1.101:50002 → 203.0.113.1:40002   ESTABLISHED
192.168.1.100:50003 → 203.0.113.1:40003   ESTABLISHED
\`\`\`

**关键理解**:
- 多个内部主机可以共享同一个公共 IP
- 通过不同的端口号区分不同的连接
- NAT box 维护映射表，进行地址转换

---

## 关键术语

| 术语 | 定义 |
|------|------|
| NAT | Network Address Translation，网络地址转换 |
| NAPT | Network Address Port Translation，网络地址端口转换 |
| Private IP | 私有 IP 地址，仅在内部网络使用 |
| Public IP | 公共 IP 地址，全球唯一 |
| Translation Table | NAT 转换表，维护地址映射 |
| Carrier Grade NAT | 运营商级 NAT，ISP 使用 |
| UPnP | Universal Plug and Play，允许 NAT 端口映射 |
| End-to-end Connectivity | 端到端连接性 |
| Layering Violation | 层级违规 |
| Connection State | 连接状态，NAT 维护 |

---

## 常见问题

### Q1: NAT 如何处理多个内部主机？
通过**端口号**区分。每个内部连接被分配一个唯一的公共端口号，NAT 维护映射表。

### Q2: NAT 为什么是安全优势？
因为只有在创建出站连接后才能接收 packets，内部网络被屏蔽了来自入站未请求 packets 的攻击。

### Q3: NAT 违反了什么架构原则？
- 端到端连接性
- IP 地址唯一性
- 分层原则（假设 payload 内容）

### Q4: Carrier Grade NAT 是什么？
ISP 只给客户私有地址，进一步节省公共 IP 地址。

### Q5: UPnP 有什么安全风险？
不良实现允许攻击者从外部 IP 地址修改 NAT 转换表。

---

## 知识点之间的联系

\`\`\`
WK10-Addressing-Switching (IP 地址)
    ↓ 地址稀缺
WK12-NAT (网络地址转换)
    ↓ 安全
Firewall (防火墙)
\`\`\`

- **IP 地址稀缺**是 NAT 的主要动机
- **私有地址**是 NAT 的基础
- **NAT** 与**防火墙**共同提供安全保护
- **UPnP** 试图克服 NAT 的限制

---

## 实际应用案例

### 案例 1: 家庭网络 NAT
\`\`\`
内部网络: 192.168.1.0/24
公共 IP: 203.0.113.1

设备 192.168.1.100:50001 → NAT → 203.0.113.1:40001 → 互联网
设备 192.168.1.101:50002 → NAT → 203.0.113.1:40002 → 互联网
\`\`\`

### 案例 2: 企业网络
- 企业获得少量公共 IP
- 内部使用私有地址
- NAT box 负责地址转换
- 防火墙提供额外安全

### 案例 3: Carrier Grade NAT
- ISP 使用 Carrier Grade NAT
- 客户获得私有地址
- 多个客户共享一个公共 IP
- 进一步节省 IPv4 地址

---

## 常见错误和易错点

### ❌ 错误 1: 认为私有地址可以在互联网上使用
私有地址**绝对不能**在公共互联网上使用。

### ❌ 错误 2: 认为 NAT 是防火墙
NAT 提供安全优势，但**不应取代防火墙**。

### ❌ 错误 3: 认为 NAT 不影响应用
NAT 违反分层原则，某些应用（如 FTP）需要特殊处理。

### ❌ 错误 4: 认为 IPv6 部署后 NAT 会消失
即使 IPv6 广泛部署，NAT 可能仍会继续使用。

### ❌ 错误 5: 忘记 NAT 维护连接状态
如果 NAT 崩溃，所有连接都会丢失。

---

## 课件总结

本课件介绍了 NAT 的动机、机制和影响：
1. **IPv4 地址稀缺**是 NAT 的主要动机
2. **NAT 机制**: 私有地址 → 公共地址转换，通过端口号区分
3. **NAT 优缺点**: 节省地址、安全优势 vs 违反架构原则
4. **UPnP**: 试图克服 NAT 的限制
5. **调试方法**: 使用各种工具定位网络问题

NAT 是互联网的重要组成部分，理解它有助于网络编程和故障排查。

**考试提示：** 重点理解**功能概念**而非记忆具体命令名或网站名。知道有什么工具可用，而不需要记住所有命令细节。

---

## 复习建议

1. **理解 NAT 的工作原理**: 私有地址转换、端口映射、checksum 重算
2. **掌握 NAT 的批评**: 端到端连接性、层级违规、连接状态
3. **理解 NAT 的安全优势**: 屏蔽入站未请求 packets
4. **掌握调试思路**: 能按症状、空间位置和协议栈位置缩小问题；工具记功能，不背所有命令名
5. **理解 Carrier Grade NAT**: ISP 如何进一步节省地址

---

*课件来源: COMP30023 2026 S1 WK12*
## 默写背诵 Dictation

> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。

| # | 默写提示 Prompt | 标准答案 Answer |
|---|----------------|----------------|
| 1 | NAT main purpose. · NAT 主要目的。 | **EN:** Allow many private hosts to share one or few public IP addresses. / **中文：** 让多台私有主机共享一个或少数公网 IP。 |
| 2 | RFC1918 private ranges (three) (slide p.4–5). · RFC1918 三个私有地址范围（课件 p.4–5）。 | **EN:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. / **中文：** 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。 |
| 3 | NAT outbound — replace IP+port with table index (slide p.7). · NAT 出站——用表索引替换 IP+端口（课件 p.7）。 | **EN:** Replace private source IP with public IP; replace source port with NAT table entry index (stores original IP:port). / **中文：** 私有源 IP 换为公网 IP；源端口换为 NAT 表项索引（存原始 IP:port）。 |
| 4 | NAT — checksum recalculation (slide p.7). · NAT——校验和重算（课件 p.7）。 | **EN:** IP and TCP/UDP checksums must be recalculated after header fields change. / **中文：** 首部字段改变后须重新计算 IP 与 TCP/UDP 校验和。 |
| 5 | NAT is stateful — meaning. · NAT 有状态——含义。 | **EN:** NAT box maintains mapping table for active flows — inbound packets matched to entries. / **中文：** NAT 设备维护活跃流的映射表——入站包须匹配表项。 |
| 6 | NAT is not a firewall (slide p.9). · NAT 不是防火墙（课件 p.9）。 | **EN:** NAT translates addresses; firewall filters by policy — NAT provides obscurity not full security. / **中文：** NAT 做地址翻译；防火墙按策略过滤——NAT 仅提供隐蔽性而非完整安全。 |
| 7 | End-to-end connectivity break (slide p.8). · 端到端连接性破坏（课件 p.8）。 | **EN:** Private hosts can receive inbound packets only after outbound flow created mapping (unless port forwarding). / **中文：** 私有主机只有出站流建立映射后才能收 inbound 包（除非端口转发）。 |
| 8 | Inbound connection to private host — NAT issue (slide p.8–9). · 外部主动连内网主机——NAT 问题（课件 p.8–9）。 | **EN:** No mapping exists unless port forwarding or similar configured. / **中文：** 无映射表项除非配置端口转发等。 |
| 9 | Layered debugging — four guiding questions (slide p.13–16). · 分层调试——四个引导问题（课件 p.13–16）。 | **EN:** (1) Which part of user experience failed? (2) What to ask colleagues? (3) What could fail at each location? (4) How to test each hypothesis? / **中文：** （1）用户体验哪部分失败？（2）问同事什么？（3）各位置可能什么问题？（4）如何验证假设？ |
| 10 | ping works but TCP fails — likely layer? · ping 通但 TCP 失败——可能哪层？ | **EN:** Transport or application — IP works; check port/firewall/app. / **中文：** 传输或应用层——IP 可达；查端口/防火墙/应用。 |
| 11 | DNS resolves but HTTP fails — check what? · DNS 能解析但 HTTP 失败——查什么？ | **EN:** Application/transport — port 80/443 blocked, server down, or wrong Host header. / **中文：** 应用/传输——80/443 被挡、服务器宕机或 Host 头错误。 |
| 12 | Debug tools by function (slide p.16) and traceroute one hop. · 按功能记调试工具（课件 p.16）与 traceroute 只走一跳。 | **EN:** Know tool functions (ping connectivity, traceroute path, dig DNS, curl HTTP) not every command name. One hop only → local gateway/first router. / **中文：** 记工具功能（ping 连通、traceroute 路径、dig DNS、curl HTTP），不背所有命令名。只走一跳 → 本地网关/第一跳路由器。 |

`,Be=o=>`/knowledge/images/${o}`,jn=[{id:"wk1-os",week:"WK1",title:"OS Overview",filename:"WK1-OS-Overview.md",group:"Operating Systems",lab:"system-call",image:Be("WK1-OS-Overview.png"),focus:["hardware abstraction","resource management","system calls","interrupts"],md:Yg},{id:"wk2-process",week:"WK2",title:"Process Intro",filename:"WK2-Process-Intro.md",group:"Operating Systems",lab:"process-thread",image:Be("WK2-Process-States.png"),focus:["process states","PCB/TCB","fork","threads"],md:Gg},{id:"wk3-cpu",week:"WK3",title:"CPU Scheduling",filename:"WK3-CPU-Scheduling.md",group:"Operating Systems",lab:"scheduling",image:Be("WK3-RR-Example.png"),focus:["FCFS","SJF","RR","response time","turnaround time"],md:Xg},{id:"wk3-ipc",week:"WK3",title:"IPC",filename:"WK3-IPC.md",group:"Operating Systems",lab:"race-condition",image:Be("WK3-Race-Condition-Execution.png"),focus:["race condition","critical region","mutual exclusion","TSL"],md:Vg},{id:"wk4-memory",week:"WK4",title:"Memory Management",filename:"WK4-Memory-Management.md",group:"Operating Systems",lab:"paging",image:Be("WK4-Paging-Model.png"),focus:["base/limit","paging","page fault","TLB"],md:Jg},{id:"wk5-security",week:"WK5",title:"Secure Communication",filename:"WK5-Secure-Communication.md",group:"Security",lab:"crypto",image:Be("WK5-Certificates.png"),focus:["confidentiality","integrity","authentication","MAC","signature"],md:$g},{id:"wk6-osi",week:"WK6",title:"Intro OSI",filename:"WK6-Intro-OSI.md",group:"Networks",lab:"encapsulation",image:Be("WK6-OSI-Model.png"),focus:["layering","service vs protocol","encapsulation","narrow waist"],md:e1},{id:"wk7-sockets",week:"WK7",title:"Socket Programming",filename:"WK7-Sockets.md",group:"Networks",lab:"sockets",image:Be("WK7-Socket-Primitives.png"),focus:["socket primitives","5-tuple","blocking read","server two sockets"],md:n1},{id:"wk7-dns",week:"WK7",title:"DNS & Mail",filename:"WK7-DNS-Mail-RPC.md",group:"Application Layer",lab:"dns",image:Be("WK7-DNS-Hierarchy.png"),focus:["DNS hierarchy","resource records","SMTP","IMAP"],md:t1},{id:"wk8-udp",week:"WK8",title:"Transport Services & UDP",filename:"WK8-Transport-Services-UDP.md",group:"Transport Layer",lab:"udp-demux",image:Be("WK8-Transport-MUX-DEMUX.png"),focus:["process-to-process","ports","UDP header","mux/demux"],md:a1},{id:"wk8-http",week:"WK8",title:"HTTP",filename:"WK8-HTTP.md",group:"Application Layer",lab:"http",image:Be("WK8-HTTP-Request-Example.png"),focus:["request/response","headers","HTTPS","HTTP/2","HTTP/3"],md:i1},{id:"wk9-tcp",week:"WK9",title:"TCP",filename:"WK9-TCP.md",group:"Transport Layer",lab:"tcp-handshake",image:Be("WK9-TCP-Header-Format.png"),focus:["three-way handshake","byte stream","sequence number","window"],md:s1},{id:"wk9-protocol",week:"WK9",title:"Protocol Design",filename:"WK9-Protocol-Design.md",group:"Application Layer",lab:"rpc",image:Be("WK9-RPC-Architecture.png"),focus:["syntax","semantics","timing","RPC","marshalling"],md:l1},{id:"wk10-addressing",week:"WK10",title:"Addressing & Switching",filename:"WK10-Addressing-Switching.md",group:"Network Layer",lab:"cidr",image:Be("WK10-Network-Host-Addresses.png"),focus:["IPv4","CIDR","route aggregation","packet switching"],md:r1},{id:"wk10-congestion",week:"WK10",title:"TCP Flow & Congestion",filename:"WK10-TCP-Flow-Congestion-Control.md",group:"Transport Layer",lab:"cwnd",image:Be("WK10-TCP-Tahoe.png"),focus:["sliding window","zero window probe","CWND","slow start"],md:o1},{id:"wk11-routing",week:"WK11",title:"Routing Algorithms",filename:"WK11-Routing.md",group:"Network Layer",lab:"dijkstra",image:Be("WK11-Dijkstra-Graph-Step.png"),focus:["forwarding vs routing","Dijkstra","flooding","link state"],md:c1},{id:"wk11-control",week:"WK11",title:"Control Plane",filename:"WK11-Control.md",group:"Network Layer",lab:"control-plane",image:Be("WK11-ICMP-Message-Types.png"),focus:["ARP","ICMP","traceroute","data/control plane"],md:u1},{id:"wk12-nat",week:"WK12",title:"NAT & Debugging",filename:"WK12-NAT.md",group:"Network Layer",lab:"nat",image:Be("WK12-NAT-Mechanism.png"),focus:["private address","port mapping","end-to-end","debugging"],md:d1}];Object.fromEntries(jn.map(o=>[o.id,o]));const Np={"wk1-os":{summary:"OS as hardware abstraction and resource manager; the user/kernel boundary is the spine of everything that follows.",summaryZh:"把 OS 看成硬件抽象 + 资源管理器；user/kernel 边界是后续所有内容的脊柱。",topics:[{en:"Operating System vs Kernel",zh:"操作系统 vs 内核",asks:"Explain the difference between the OS kernel and the whole operating system.",asksZh:"区分 OS kernel 和 whole OS。",distinction:"Kernel = the privileged core that runs in kernel mode; the whole OS also includes libraries, daemons, shells, system utilities.",distinctionZh:"Kernel = 内核态运行的核心；whole OS 还包括库、守护进程、shell、系统工具。",trap:"Treating 'OS' and 'kernel' as exact synonyms in a written answer."},{en:"Hardware Abstraction",zh:"硬件抽象",asks:"Why does the OS provide an abstraction layer over hardware?",asksZh:"OS 为什么要对硬件做抽象？",distinction:"Abstraction hides detail and gives each app a private virtual machine; resource management shares the real machine.",distinctionZh:"抽象隐藏细节、给每个程序一台虚拟机；资源管理是共享真实机器。",trap:"Confusing abstraction (simplification) with protection (isolation)."},{en:"User Mode vs Kernel Mode",zh:"用户态 vs 内核态",asks:"Why do we need two CPU execution modes?",asksZh:"为什么 CPU 要分两种模式？",distinction:"Kernel mode can run privileged instructions and touch any memory; user mode cannot.",distinctionZh:"内核态可执行特权指令、访问任意内存；用户态不行。",trap:"Thinking a system call is itself a mode — the call is the request, the mode switch happens via a trap."},{en:"Interrupt vs System Call vs Trap",zh:"中断 vs 系统调用 vs 陷阱",asks:"Contrast interrupt handling with system call handling.",asksZh:"对比中断处理和系统调用处理。",distinction:"Interrupt = asynchronous hardware/software event; system call = synchronous request from a program; both transfer control to the kernel.",distinctionZh:"中断 = 异步事件；系统调用 = 程序主动同步请求；两者都把控制权交给内核。",trap:"Saying 'interrupts come from user programs' — software interrupts/traps are a special case, normal interrupts are async."},{en:"Memory Boundary / Protection",zh:"内存边界 / 保护",asks:"What problem does a memory boundary solve?",asksZh:"内存边界解决什么问题？",distinction:"A base/limit or MMU boundary stops one process from reading/writing another's (or the kernel's) memory.",distinctionZh:"base/limit 或 MMU 边界阻止进程越界访问其它进程或内核内存。",trap:"Confusing the memory boundary with the user/kernel mode bit — both protect, but they protect different things."},{en:"Stack Frames & Subroutine Call",zh:"栈帧与子程序调用",asks:"What is stored on the stack when a function is called?",asksZh:"函数调用时栈上保存什么？",distinction:"A frame holds arguments, return address, saved registers, local variables; SP moves toward lower addresses.",distinctionZh:"栈帧含参数、返回地址、保存的寄存器、局部变量；SP 向低地址增长。",trap:"Assuming the call order equals the hardware push order — calling convention decides what lives in registers vs on the stack."},{en:"Interrupt Return Outcomes",zh:"中断返回的三种结局",asks:"After handling an interrupt, does the interrupted program always resume?",asksZh:"中断处理完之后，被中断的程序一定继续跑吗？",distinction:"Three outcomes: resume the interrupted program; OS kills it (fatal exception); OS schedules another process (e.g. time slice expired via clock interrupt).",distinctionZh:"三种结局：恢复被中断程序；OS 杀掉它（致命异常）；OS 调度另一个进程（时钟中断时间片用完）。",trap:"Assuming 'return from interrupt' always means 'resume exactly what was running' — the kernel may use the interrupt as a scheduling point."},{en:"System Call Can Block the Caller",zh:"系统调用可能阻塞调用者",asks:"Is a system call guaranteed to return immediately? What does the kernel do meanwhile?",asksZh:"系统调用一定立即返回吗？此时内核做什么？",distinction:"A syscall like read() may block the caller (→ blocked state); the kernel then schedules another ready process until an interrupt wakes the blocker. Synchronous for the caller, still a scheduling opportunity for the kernel.",distinctionZh:"read() 等可能把调用者阻塞（→ blocked），内核转去调度另一个 ready 进程，等中断唤醒它。对调用者同步，对内核仍是调度点。",trap:"Equating 'system call = synchronous' with 'returns immediately' — synchronous refers to the caller waiting for the result, not to instant return."}]},"wk2-process":{summary:"Process = resource container; thread = execution flow; fork, PCB, process states and address space are the four pillars.",summaryZh:"进程 = 资源容器；线程 = 执行流；fork、PCB、进程状态、地址空间是四根支柱。",topics:[{en:"Process vs Thread",zh:"进程 vs 线程",asks:"What is shared and what is private between threads of the same process?",asksZh:"同一进程的线程之间，什么共享、什么私有？",distinction:"Process owns address space + open files; threads share address space & files but each has its own stack, registers, PC.",distinctionZh:"进程持有地址空间与打开的文件；线程共享地址空间与文件，但各有独立 stack、register、PC。",trap:"Saying threads have separate address spaces — they do not; only the stack is per-thread."},{en:"Process Control Block (PCB) / TCB",zh:"进程控制块 / 线程控制块",asks:"What information must the OS keep in a PCB?",asksZh:"OS 必须在 PCB 里保存什么？",distinction:"PCB stores PID, state, CPU registers, memory bounds, scheduling info, open files; TCB is the lighter per-thread subset.",distinctionZh:"PCB 存 PID、状态、寄存器、内存界限、调度信息、打开文件；TCB 是更轻的每线程子集。",trap:"Forgetting that the saved PC/registers live in the PCB — that is what makes a context switch reversible."},{en:"Process States (ready / running / blocked / terminated)",zh:"进程状态",asks:"When does a process move from running to blocked? From blocked to running?",asksZh:"什么时候 running→blocked？blocked→running？",distinction:"Running→blocked on an event (I/O, wait); blocked→ready when the event completes; ready→running by the scheduler.",distinctionZh:"等待事件时 running→blocked；事件完成 blocked→ready；调度器选它 ready→running。",trap:"Drawing an arrow blocked→running directly — it must go through ready."},{en:"fork() Semantics",zh:"fork 语义",asks:"After fork(), how do parent and child differ, and what does fork return?",asksZh:"fork 后父子进程有何不同？fork 返回什么？",distinction:"Two independent address spaces (copy-on-write under the hood); fork returns child PID to parent, 0 to child.",distinctionZh:"两份独立地址空间（底层 copy-on-write）；fork 给父返回子 PID，给子返回 0。",trap:"Assuming the child sees the same PID as the parent, or that variables are shared post-fork."},{en:"Context Switch",zh:"上下文切换",asks:"What does a context switch actually do, and what is its cost?",asksZh:"上下文切换到底做什么？代价是什么？",distinction:"Save the running process's registers/PC into its PCB, load another's, switch page tables; pure overhead, no useful work.",distinctionZh:"把当前进程的寄存器/PC 存入 PCB，装入另一个，切换页表；是纯开销。",trap:"Confusing a mode switch (user↔kernel) with a context switch (process↔process)."},{en:"Address Space Layout",zh:"地址空间布局",asks:"Sketch the layout of a process address space.",asksZh:"画出进程地址空间布局。",distinction:"Code, Data, Heap (grows up), free space, Stack (grows down); threads share all but the stack.",distinctionZh:"Code、Data、Heap（向上）、空闲、Stack（向下）；线程共享除 stack 外的全部。",trap:"Drawing the stack at the top growing up — it sits at the high end and grows toward low addresses."},{en:"Thread Context vs Running Thread",zh:"未运行线程的上下文",asks:"When a thread is not running, where are its PC/SP, and what do the CPU's PC/SP point to?",asksZh:"线程不在运行时，它的 PC/SP 在哪？CPU 的 PC/SP 指向什么？",distinction:"An idle thread's context (PC, SP, registers) lives in memory (its TCB); the CPU's PC/SP currently point at whichever thread is running.",distinctionZh:"未运行线程的上下文（PC、SP、寄存器）在内存（TCB）里；CPU 的 PC/SP 当前指向正在运行的那个线程。",trap:"Thinking each thread 'owns' the CPU registers permanently — registers belong to the running thread; others' register state is saved in memory."}]},"wk3-cpu":{summary:"Read scheduling off a Gantt chart, not from definitions; know which metric each algorithm optimises.",summaryZh:"从 Gantt 图读调度，而不是背定义；清楚每个算法优化哪个指标。",topics:[{en:"Preemptive vs Non-preemptive",zh:"可抢占 vs 不可抢占",asks:"Give an example of each and say when preemption is triggered.",asksZh:"各举一例，说明何时抢占。",distinction:"Non-preemptive runs a job until it blocks or finishes; preemptive can be interrupted by a timer or higher-priority arrival.",distinctionZh:"不可抢占：进程阻塞或结束才让出 CPU；可抢占：定时器或更高优先级到来时打断。",trap:"Calling RR non-preemptive — RR is the textbook preemptive algorithm via timer."},{en:"FCFS / SJF / RR / Priority",zh:"FCFS / SJF / RR / 优先级",asks:"Given arrival and burst times, draw the Gantt chart and compute waiting time.",asksZh:"给到达与 burst，画 Gantt、算等待时间。",distinction:"FCFS = arrival order; SJF = shortest remaining burst; RR = fixed quantum in FIFO order; Priority = by priority number.",distinctionZh:"FCFS 按到达；SJF 按最短剩余；RR 按 FIFO 加时间片；Priority 按优先级。",trap:"Forgetting to re-sort on each arrival for preemptive SJF (SRTF)."},{en:"Turnaround vs Response vs Waiting Time",zh:"周转 vs 响应 vs 等待时间",asks:"Define turnaround time and response time precisely.",asksZh:"精确给出 turnaround 和 response 的定义。",distinction:"Turnaround = completion − arrival; response = first CPU time − arrival; waiting = turnaround − burst.",distinctionZh:"Turnaround = 完成 − 到达；Response = 首次运行 − 到达；Waiting = Turnaround − burst。",trap:"Confusing waiting time with response time when a job waits, runs, then waits again."},{en:"Convoy Effect (FCFS)",zh:"护航效应",asks:"What is the convoy effect and which algorithm suffers from it?",asksZh:"什么是 convoy effect？哪个算法受其影响？",distinction:"One slow CPU-bound process makes all short I/O-bound processes wait behind it under FCFS.",distinctionZh:"FCFS 下一个慢的 CPU 密集进程让所有短 I/O 进程排在后面。",trap:"Blaming SJF for the convoy effect — it is an FCFS pathology."},{en:"Starvation & Aging",zh:"饥饿与老化",asks:"How can priority scheduling starve a process, and how is aging a fix?",asksZh:"优先级调度如何饿死进程？aging 如何解决？",distinction:"Starvation = indefinite wait because higher-priority jobs keep arriving; aging raises priority over time.",distinctionZh:"Starvation = 高优先级不断到来导致无限等待；aging 随时间提升优先级。",trap:"Thinking SJF cannot starve — short jobs can starve a long one forever."},{en:"Round Robin Quantum Trade-off",zh:"RR 时间片权衡",asks:"What happens if the RR quantum is too small? Too large?",asksZh:"RR 时间片太小/太大分别会怎样？",distinction:"Too small → context-switch overhead dominates; too large → RR degrades to FCFS.",distinctionZh:"太小 → 上下文切换开销占主导；太大 → RR 退化为 FCFS。",trap:"Saying smaller quantum always means better response — past a point, overhead cancels the gain."},{en:"MLFQ Quanta Trade-off",zh:"MLFQ 配额权衡",asks:"In the lecture's 4-level MLFQ, why are the quanta 2 / 4 / 8 / 16 — smaller at the top, larger at the bottom?",asksZh:"课件 4 级 MLFQ 的配额 2/4/8/16，为什么上小下大？",distinction:"High-priority queues serve interactive/I/O jobs that need fast response → small quantum; low-priority queues hold CPU-bound jobs that already sank down → large quantum to amortise context-switch cost.",distinctionZh:"高优先级队列服务交互/I/O 作业，需要快响应 → 小时间片；低队列是沉下来的 CPU 密集作业 → 大时间片摊薄切换开销。",trap:"Thinking all MLFQ queues share one quantum — each level has its own, and the ratio (doubling here) is the design knob."}]},"wk3-ipc":{summary:"Race conditions come from non-atomic interleavings; mutual exclusion needs atomic hardware primitives.",summaryZh:"竞态来自非原子的交错；互斥需要硬件级原子原语。",topics:[{en:"Race Condition",zh:"竞态条件",asks:"Define a race condition and give the read-modify-write example.",asksZh:"定义竞态，举 read-modify-write 例子。",distinction:"Outcome depends on the relative timing/interleaving of threads; correctness is not guaranteed.",distinctionZh:"结果取决于线程交错时序；正确性不保证。",trap:"Believing a single-core CPU cannot have races — preemption between instructions still interleaves."},{en:"Critical Region vs Mutual Exclusion",zh:"临界区 vs 互斥",asks:"Distinguish a critical region from mutual exclusion.",asksZh:"区分临界区与互斥。",distinction:"Critical region = the code that touches shared state; mutual exclusion = the property that only one thread is inside at a time.",distinctionZh:"临界区 = 访问共享状态的代码段；互斥 = 同时只允许一个线程在里面的性质。",trap:"Using the two terms as synonyms — one names a place, the other names a guarantee."},{en:"Requirements for a Good Lock",zh:"好锁的四个条件",asks:"List the four conditions a correct mutual-exclusion solution must satisfy.",asksZh:"列出正确互斥方案需满足的四条。",distinction:"Mutual exclusion, progress (decide who enters next), bounded waiting (no starvation), and (ideally) no busy waiting.",distinctionZh:"互斥、进展、有限等待、（理想）无忙等。",trap:"Forgetting 'progress' — a solution that deadlocks satisfies mutual exclusion but fails progress."},{en:"Busy Waiting",zh:"忙等待",asks:"What is the cost of busy waiting, and when is it acceptable?",asksZh:"忙等的代价？什么情况可接受？",distinction:"Spinning burns CPU cycles; acceptable only when the wait is shorter than a context switch (short critical sections).",distinctionZh:"自旋消耗 CPU；仅当等待短于上下文切换时可接受。",trap:"Assuming spinlocks are always bad — on multiprocessors with short waits they can beat blocking locks."},{en:"TSL / Hardware Atomicity",zh:"TSL / 硬件原子性",asks:"Why must TSL be a single atomic instruction?",asksZh:"为什么 TSL 必须是单条原子指令？",distinction:"A naive lock variable does read-then-write as two steps, so two threads can both see it free; TSL does test-and-set atomically in hardware.",distinctionZh:"普通锁变量读和写是两步，两线程都能看到空闲；TSL 在硬件里原子地测试并设置。",trap:"Thinking a `while (lock)` in C is enough — without atomicity it is exactly the bug locks exist to fix."},{en:"Deadlock Conditions (Coffman)",zh:"死锁四条件",asks:"List the four necessary conditions for deadlock.",asksZh:"列出死锁四个必要条件。",distinction:"Mutual exclusion, hold-and-wait, no preemption, circular wait — all four must hold.",distinctionZh:"互斥、占有并等待、不可抢占、循环等待 — 四者同时成立。",trap:"Saying any three are enough — deadlock requires all four; breaking any one prevents it."},{en:"Strict Alternation Failure Mode",zh:"严格交替的失败模式",asks:"Why does strict alternation violate the mutual-exclusion requirements even though it provides mutual exclusion?",asksZh:"严格交替明明提供了互斥，为什么仍违反互斥的几个条件？",distinction:"It provides mutual exclusion but breaks the progress requirement: a thread outside the critical region can still block another from entering, because the turn variable forces strict turns.",distinctionZh:"它给了互斥，但破坏了进展性：临界区外的线程仍能阻塞别人进入，因为 turn 变量强制轮流。",trap:"Conflating 'mutual exclusion' (which strict alternation has) with the full set of four conditions (which it fails on progress)."}]},"wk4-memory":{summary:"Base/limit motivates paging; paging fixes contiguous allocation; learn to compute page/offset/frame/physical by hand.",summaryZh:"base/limit 引出分页；分页解决连续分配；能手算 page/offset/frame/physical。",topics:[{en:"External vs Internal Fragmentation",zh:"外部 vs 内部碎片",asks:"Give an example of each fragmentation type and which scheme causes it.",asksZh:"各举一例，说明哪种方案产生。",distinction:"External = free holes between allocated blocks (variable partitioning); internal = unused space inside an allocated block (fixed pages).",distinctionZh:"外部 = 已分配块之间的空闲洞（变长分区）；内部 = 已分配块内部未用空间（固定页）。",trap:"Saying paging suffers external fragmentation — it suffers internal, not external."},{en:"Logical vs Physical Address",zh:"逻辑地址 vs 物理地址",asks:"Who generates the logical address and who produces the physical one?",asksZh:"谁产生逻辑地址？谁产生物理地址？",distinction:"CPU emits a logical address; the MMU translates it to a physical address using the page table.",distinctionZh:"CPU 产生逻辑地址；MMU 用页表翻译成物理地址。",trap:"Thinking the program ever sees a physical address — it never does."},{en:"Address Translation (page number, offset, frame)",zh:"地址翻译",asks:"Given a logical address and page size, compute page number, offset, and physical address.",asksZh:"给逻辑地址和页大小，算页号、偏移、物理地址。",distinction:"page = addr div pageSize; offset = addr mod pageSize; physical = frame × pageSize + offset.",distinctionZh:"页号 = 地址 ÷ 页大小；偏移 = 地址 mod 页大小；物理 = 页框 × 页大小 + 偏移。",trap:"Forgetting that the offset is copied verbatim — only the page number is translated."},{en:"Page Fault & TLB",zh:"缺页与 TLB",asks:"On a TLB hit, do we still consult the page table? On a page fault?",asksZh:"TLB 命中还查页表吗？缺页呢？",distinction:"TLB hit → skip the page table; TLB miss → walk the page table, and if the page is not resident, raise a page fault.",distinctionZh:"TLB 命中 → 跳过页表；未命中 → 查页表，若不在内存则触发缺页。",trap:"Confusing a TLB miss with a page fault — a miss just means 'check the table'; a fault means 'the page is on disk'."},{en:"Replacement Algorithms (FIFO / LRU / Second Chance)",zh:"页面置换算法",asks:"Given a reference string, count page faults for FIFO vs LRU vs Second Chance.",asksZh:"给引用串，数 FIFO/LRU/Second Chance 的缺页次数。",distinction:"FIFO uses arrival time; LRU uses last use time; Second Chance uses a reference bit + a circular queue.",distinctionZh:"FIFO 按到达；LRU 按最近使用；Second Chance 用引用位 + 循环队列。",trap:"Believing LRU = optimal in practice — Belady's anomaly hits FIFO, not LRU, but LRU needs hardware support."},{en:"TLB and Effective Access Time",zh:"TLB 与有效访问时间",asks:"Compute effective memory access time given TLB hit ratio and memory access cost.",asksZh:"给 TLB 命中率与访存代价，算有效访问时间。",distinction:"EAT = hit_ratio × (TLB + mem) + (1 − hit_ratio) × (TLB + pagetable + mem); fault cost adds disk time.",distinctionZh:"EAT = 命中率×(TLB+访存) + (1−命中率)×(TLB+查表+访存)；缺页还要加磁盘时间。",trap:"Forgetting to add the page-table lookup on a TLB miss."},{en:"Aging Counter Mechanics",zh:"老化计数器演算",asks:"Walk through how an 8-bit aging counter changes over clock ticks, and how you pick the victim.",asksZh:"演示 8 位 aging 计数器逐 tick 的变化，以及如何选牺牲页。",distinction:"Each tick: shift every counter right 1 bit, prepend that page's R bit to the left, clear all R bits; evict the page with the smallest counter (most leading zeros).",distinctionZh:"每 tick：所有计数器右移 1 位，把本页 R 追加到最左，清所有 R；驱逐计数器最小（前导 0 最多）的页。",trap:"Treating aging as exact LRU — a page referenced 9 ticks ago and one referenced 1000 ticks ago can both read 0 once the history shifts out."}]},"wk5-security":{summary:"Confidentiality, integrity, authentication solve different problems; never conflate MAC, signature, certificate.",summaryZh:"保密性、完整性、认证解决不同问题；MAC、签名、证书不能混。",topics:[{en:"Security Goals (CIA)",zh:"安全三目标",asks:"Map an attack (eavesdrop / tamper / impersonate) to the security goal it violates.",asksZh:"把窃听/篡改/冒充映射到违反的安全目标。",distinction:"Confidentiality blocks reading; integrity blocks tampering; authentication verifies identity.",distinctionZh:"保密性防读；完整性防改；认证验身份。",trap:"Calling encryption an authentication mechanism — encryption alone gives confidentiality, not authentication."},{en:"Symmetric vs Public-key Crypto",zh:"对称 vs 公钥密码",asks:"When do you use symmetric, when public-key, and why combine them?",asksZh:"何时用对称、何时用公钥？为何要组合？",distinction:"Symmetric = one shared key, fast, for bulk data; public-key = key pair, slow, for key exchange and signatures.",distinctionZh:"对称 = 一个共享密钥，快，用于数据；公钥 = 密钥对，慢，用于密钥交换与签名。",trap:"Thinking public-key is 'more secure' so use it for everything — it is too slow for bulk encryption."},{en:"MAC vs Digital Signature",zh:"MAC vs 数字签名",asks:"Who can verify a MAC vs a signature? Can either be repudiated?",asksZh:"MAC 与签名谁能验证？能否抵赖？",distinction:"MAC uses a shared secret — both parties can produce/verify, so non-repudiation fails; signatures use private-key sign / public-key verify, giving non-repudiation.",distinctionZh:"MAC 用共享密钥 — 双方都能生成/验证，无法防抵赖；签名用私钥签、公钥验，可防抵赖。",trap:"Saying a MAC proves who sent the message — it only proves 'someone with the secret' sent it."},{en:"Hash Functions & HMAC",zh:"哈希与 HMAC",asks:"Why do we use a keyed hash (HMAC) instead of a plain hash for integrity?",asksZh:"为什么用 HMAC 而不是普通哈希做完整性？",distinction:"A plain hash has no key, so anyone can recompute it; HMAC keys the hash so only holders of the key can produce a valid tag.",distinctionZh:"普通哈希无密钥，任何人都能重算；HMAC 带密钥，只有持密钥者能生成有效 tag。",trap:"Using a raw hash(md5(msg)) as a tag — vulnerable to length-extension; use HMAC."},{en:"Certificates & CA",zh:"证书与 CA",asks:"What problem does a certificate solve that a bare public key cannot?",asksZh:"证书解决了裸公钥解决不了什么问题？",distinction:"A certificate binds a public key to an identity, signed by a trusted CA — it solves key authenticity, not confidentiality.",distinctionZh:"证书把公钥与身份绑定，由可信 CA 签名 — 解决的是公钥真实性，不是保密。",trap:"Thinking the CA encrypts anything — it only signs the binding."},{en:"Encrypt-then-MAC vs MAC-then-Encrypt",zh:"先加密后 MAC",asks:"Why is encrypt-then-MAC preferred over MAC-then-encrypt?",asksZh:"为什么 encrypt-then-MAC 更优？",distinction:"Encrypt-then-MAC lets the receiver reject tampered ciphertext before decrypting, avoiding oracle attacks; MAC-then-encrypt requires decryption to check the tag.",distinctionZh:"先加密后 MAC 可在解密前拒绝被篡改的密文；先 MAC 后加密必须先解密才能验。",trap:"Putting the MAC inside the encryption and believing it is authenticated — that is MAC-then-encrypt, the riskier order."},{en:"TLS 1.2 vs 1.3 Handshake (Not Examinable)",zh:"TLS 1.2 vs 1.3 握手（非考）",asks:"What key-exchange change does TLS 1.3 make, and what security property does it gain?",asksZh:"TLS 1.3 在密钥交换上做了什么改变？获得了什么安全属性？",distinction:"TLS 1.3 drops RSA key exchange, uses Diffie-Hellman key share (gx/gy) in the first round trip, and CertificateVerify signs the whole handshake; this yields forward secrecy.",distinctionZh:"TLS 1.3 取消 RSA 密钥交换，改用 DH key share 在首轮往返完成协商，CertificateVerify 对整个握手签名；由此获得前向保密。",trap:"Thinking forward secrecy comes from encrypting with RSA — it comes from one-time DH keys that are discarded, so a later private-key leak can't decrypt old sessions."}]},"wk6-osi":{summary:"Layering, service vs protocol, encapsulation, and the IP narrow waist are the roots of every network topic.",summaryZh:"分层、服务 vs 协议、封装、IP 窄腰是所有网络话题的根。",topics:[{en:"Service vs Protocol",zh:"服务 vs 协议",asks:"Explain the difference between a service and a protocol with an example.",asksZh:"举例区分服务与协议。",distinction:"Service = what a layer offers the layer above (interface); protocol = how peer entities at the same layer talk to each other (rules).",distinctionZh:"服务 = 给上层提供什么（接口）；协议 = 同层对等实体怎么通信（规则）。",trap:"Confusing a service primitive (e.g. CONNECT) with a protocol message (e.g. SYN)."},{en:"OSI 7 vs TCP/IP 4 Layers",zh:"OSI 7 层 vs TCP/IP 4 层",asks:"Map the OSI layers to the TCP/IP layers; where does the session/presentation layer go?",asksZh:"把 OSI 层映射到 TCP/IP 层；会话/表示层去哪了？",distinction:"OSI = 7 (Physical, Data Link, Network, Transport, Session, Presentation, Application); TCP/IP = 4 (Link, Internet, Transport, Application), folding session+presentation into the application.",distinctionZh:"OSI 7 层；TCP/IP 4 层，把会话与表示并入应用层。",trap:"Counting 5 layers — the 5-layer hybrid is a teaching model, not the TCP/IP model itself."},{en:"Encapsulation / Decapsulation",zh:"封装与解封装",asks:"Describe what happens to headers as data goes down then up the stack.",asksZh:"数据上下栈时 header 怎么变？",distinction:"Going down each layer adds its own header (encapsulation); going up each layer strips its header (decapsulation).",distinctionZh:"下行每层加自己的 header；上行每层去掉自己的 header。",trap:"Thinking the application header is removed at the transport layer — each layer only removes its own."},{en:"End-to-end vs Point-to-Point",zh:"端到端 vs 点到点",asks:"Which layers are end-to-end and which are point-to-point?",asksZh:"哪些层端到端、哪些点到点？",distinction:"Transport and above are end-to-end (host-to-host); network is host-to-host but hop-by-hop; link is point-to-point on one link.",distinctionZh:"传输层及以上端到端；网络层主机到主机但逐跳；链路层单链路点到点。",trap:"Calling the network layer end-to-end — it is end-to-end in destination but executed hop-by-hop at routers."},{en:"IP Narrow Waist",zh:"IP 窄腰",asks:"Why is IP called the narrow waist of the Internet?",asksZh:"为什么 IP 叫互联网窄腰？",distinction:"Many applications run over IP, and IP runs over many link technologies; IP is the single common point that lets everything interoperate.",distinctionZh:"众多应用跑在 IP 上，IP 跑在众多链路上；IP 是让一切互通的唯一汇合点。",trap:"Thinking TCP is the narrow waist — it is IP; TCP is one of many things sitting on IP."},{en:"Connection-oriented vs Connectionless Service",zh:"面向连接 vs 无连接服务",asks:"Classify TCP and UDP as service types and explain the trade-off.",asksZh:"把 TCP/UDP 归类为服务类型并说明权衡。",distinction:"Connection-oriented (TCP) sets up state first, gives reliability; connectionless (UDP) sends at once, no per-flow state.",distinctionZh:"面向连接（TCP）先建状态、给可靠性；无连接（UDP）直接发、无流状态。",trap:"Equating connection-oriented with reliable — they are correlated in TCP but are independent properties in general."},{en:"IS-IS and the Narrow Waist",zh:"IS-IS 与窄腰",asks:"Give an example of an OSI-originated protocol that the TCP/IP community adopted, and explain the narrow waist.",asksZh:"举一个 OSI 起源、被 TCP/IP 社区采用的协议，并解释窄腰。",distinction:"IS-IS was designed by OSI but is widely used for IP routing; the IP narrow waist means many apps run over IP and IP runs over many links, so IP is the single interop point.",distinctionZh:"IS-IS 由 OSI 设计但广泛用于 IP 路由；IP 窄腰指众多应用跑在 IP 上、IP 跑在众多链路上，IP 是唯一互通点。",trap:"Believing the narrow waist is TCP — it is IP; and that OSI produced nothing usable — IS-IS is a counter-example."}]},"wk7-sockets":{summary:"A socket is the API between app and transport; the server's two sockets and the primitive order are the core traps.",summaryZh:"socket 是应用与传输的接口；server 两个 socket 与原语顺序是核心陷阱。",topics:[{en:"What is a Socket",zh:"socket 是什么",asks:"Define a socket and its 5-tuple.",asksZh:"定义 socket 与其 5 元组。",distinction:"A socket is a kernel data structure; named by the 5-tuple (proto, local IP, local port, remote IP, remote port).",distinctionZh:"socket 是内核数据结构；由 5 元组（协议、本地 IP、本地端口、远端 IP、远端端口）命名。",trap:"Confusing a port with a socket — one socket occupies one port at a time, but a port can host many sockets via accept()."},{en:"Server Two Sockets",zh:"服务器两个 socket",asks:"Why does a TCP server need a listening socket and a connected socket?",asksZh:"为什么 TCP 服务器需要监听 socket 与连接 socket？",distinction:"The listening socket only accepts SYN/connections; accept() returns a fresh connected socket bound to one specific client 5-tuple.",distinctionZh:"监听 socket 只接连接；accept() 返回一个新的连接 socket，绑定到某客户端 5 元组。",trap:"Thinking accept() reuses the listening socket — it returns a new one; the listening socket stays open for more clients."},{en:"Primitive Order (server: socket→bind→listen→accept)",zh:"原语顺序",asks:"Put bind/listen/accept/connect in the correct order for server and client.",asksZh:"给 server 与 client 排出正确顺序。",distinction:"Server: socket, bind, listen, accept, read/write, close; Client: socket, connect, read/write, close.",distinctionZh:"服务器：socket, bind, listen, accept, read/write, close；客户端：socket, connect, read/write, close。",trap:"Calling accept() before listen() — listen() must mark the socket as passive first."},{en:"Blocking vs Non-blocking I/O",zh:"阻塞 vs 非阻塞 I/O",asks:"What does a blocking read return when no data is available?",asksZh:"无数据时阻塞 read 返回什么？",distinction:"Blocking read sleeps until data or error; non-blocking read returns immediately with EAGAIN/EWOULDBLOCK if nothing is ready.",distinctionZh:"阻塞 read 睡到有数据或出错；非阻塞 read 立即返回 EAGAIN/EWOULDBLOCK。",trap:"Assuming a non-blocking read always returns some bytes — it can return 'nothing ready' immediately."},{en:"Concurrent Server (fork / threads / select)",zh:"并发服务器",asks:"How does a concurrent server serve many clients at once?",asksZh:"并发服务器如何同时服务多客户端？",distinction:"After accept(), fork a child (or spawn a thread) per client, or use select/poll/epoll to multiplex on one process.",distinctionZh:"accept() 后每客户端 fork 子进程或建线程，或用 select/poll/epoll 在一个进程里多路复用。",trap:"Forgetting the listening socket is inherited by forked children and must be closed in the child."},{en:"TCP vs UDP Sockets",zh:"TCP vs UDP socket",asks:"What socket calls does UDP skip that TCP needs?",asksZh:"UDP socket 跳过哪些 TCP 需要的调用？",distinction:"UDP uses socket, (optional bind), sendto/recvfrom, close — no listen, accept, or connect (connect on UDP only sets the default destination).",distinctionZh:"UDP 用 socket、(可选 bind)、sendto/recvfrom、close — 无 listen/accept；UDP 的 connect 只设默认目的地。",trap:"Calling accept() on a UDP socket — UDP is connectionless, accept() does not exist for it."},{en:"Listen Backlog & AI_PASSIVE",zh:"listen backlog 与被动绑定",asks:"What is the second argument to listen(), and why does a server call getaddrinfo with NULL host + AI_PASSIVE?",asksZh:"listen() 第二个参数是什么？服务器为何用 NULL 主机 + AI_PASSIVE 调 getaddrinfo？",distinction:"listen(fd, N) caps the backlog of pending (not-yet-accept) connections at N (lecture uses 10); NULL + AI_PASSIVE binds to the wildcard address on all interfaces, suitable for a passive listener.",distinctionZh:"listen(fd, N) 限制待 accept 的排队连接上限为 N（课件用 10）；NULL + AI_PASSIVE 绑到所有接口的通配地址，适合被动监听。",trap:"Passing a concrete hostname like 'localhost' on the server side — that binds only to the loopback, refusing external connections."}]},"wk7-dns":{summary:"DNS is a hierarchical, cacheable, distributed database; mail is UA/MTA/MDA with SMTP push and IMAP/POP3 pull.",summaryZh:"DNS 是分层可缓存分布式数据库；邮件是 UA/MTA/MDA，SMTP 推、IMAP/POP3 拉。",topics:[{en:"DNS Hierarchy",zh:"DNS 层级",asks:"Name the DNS levels from root to leaf and give examples.",asksZh:"从根到叶列出 DNS 层级并举例。",distinction:"Root → TLD (.com, .org, .au) → authoritative for the domain → leaf host records.",distinctionZh:"根 → TLD → 域权威 → 叶子主机记录。",trap:"Forgetting the root zone — there are 13 logical root server addresses, and queries start from them on a cache miss."},{en:"Recursive vs Iterative Query",zh:"递归 vs 迭代查询",asks:"Distinguish recursive and iterative DNS queries; who does which?",asksZh:"区分递归与迭代查询；谁做哪个？",distinction:"Client→local DNS is recursive (local DNS must return the answer); local DNS→root/TLD/authoritative is iterative (it follows referrals).",distinctionZh:"客户端→本地 DNS 递归（本地 DNS 必须给答案）；本地 DNS→根/TLD/权威迭代（顺着引荐走）。",trap:"Saying the root server resolves the name for the client — it only gives a referral to the TLD."},{en:"Resource Records (A / MX / CNAME / NS / AAAA)",zh:"资源记录",asks:"What does each record type return?",asksZh:"每种记录返回什么？",distinction:"A → IPv4; AAAA → IPv6; MX → mail exchanger + priority; CNAME → alias to canonical name; NS → authoritative name server.",distinctionZh:"A→IPv4；AAAA→IPv6；MX→邮件交换+优先级；CNAME→规范名别名；NS→权威服务器。",trap:"Treating CNAME as 'the same as A' — CNAME points to a name, not an IP; you must then resolve that name."},{en:"DNS Caching & TTL",zh:"DNS 缓存与 TTL",asks:"How does TTL trade off freshness against load?",asksZh:"TTL 如何权衡新鲜度与负载？",distinction:"Long TTL → fewer queries, slower propagation of changes; short TTL → fast updates, more load on authoritative servers.",distinctionZh:"长 TTL → 查询少、变更传播慢；短 TTL → 更新快、权威负载高。",trap:"Assuming a cache always honours the TTL exactly — negative caching and resolver overrides can differ."},{en:"SMTP vs IMAP vs POP3",zh:"SMTP vs IMAP vs POP3",asks:"Which protocol pushes mail and which pulls it?",asksZh:"哪个协议推邮件、哪个拉？",distinction:"SMTP pushes mail server-to-server and client-to-server (submission); IMAP/POP3 pull mail from server to the user agent.",distinctionZh:"SMTP 在服务器间和客户端到服务器推；IMAP/POP3 从服务器拉到 UA。",trap:"Thinking SMTP is used to read mail — it only delivers; reading is IMAP or POP3."},{en:"RPC & Marshalling",zh:"RPC 与 marshalling",asks:"Why does RPC need marshalling, and why can't it pass a pointer?",asksZh:"RPC 为什么要 marshalling？为何不能传指针？",distinction:"Marshalling encodes arguments into network bytes; a pointer is only meaningful in the caller's address space, so it cannot be sent.",distinctionZh:"marshalling 把参数编码成网络字节；指针只在调用方地址空间有意义，不能发送。",trap:"Believing RPC can hand a pointer across machines — the callee's address space is unrelated to the caller's."},{en:"WebSocket vs HTTP Streaming",zh:"WebSocket vs HTTP 流",asks:"How does a WebSocket differ from plain HTTP for streaming, and on what ports does it run?",asksZh:"WebSocket 与普通 HTTP 在流式传输上有何不同？用什么端口？",distinction:"WebSocket (ws://, wss://) upgrades an HTTP connection to a persistent bidirectional byte stream on ports 80/443; plain HTTP is request/response and server push is a workaround, not a true bidirectional channel.",distinctionZh:"WebSocket（ws://、wss://）把 HTTP 连接升级为持久双向字节流，跑在 80/443；普通 HTTP 是请求/响应，服务端推送是 workaround 而非真双向。",trap:"Thinking WebSocket needs a new port — it reuses 80/443 and starts life as an HTTP upgrade handshake."}]},"wk8-udp":{summary:"Transport gives process-to-process delivery via ports; UDP is connectionless, minimal, but powerful where it fits.",summaryZh:"传输层经端口给进程到进程交付；UDP 无连接、最小化，但适用场景很强。",topics:[{en:"Transport vs Network Layer",zh:"传输层 vs 网络层",asks:"What does the transport layer add over the network layer?",asksZh:"传输层比网络层多了什么？",distinction:"Network = host-to-host best effort; transport = process-to-process (via ports) and optional reliability/order.",distinctionZh:"网络层 = 主机到主机尽力而为；传输层 = 进程到进程（靠端口）+ 可选可靠/有序。",trap:"Saying the network layer knows which app a packet is for — it does not; the port does."},{en:"Multiplexing / Demultiplexing",zh:"多路复用与分用",asks:"How does demultiplexing decide which socket gets a segment?",asksZh:"分用如何决定 segment 给哪个 socket？",distinction:"On arrival the OS reads the (proto, dst port, dst IP, src port, src IP) tuple and matches it to a registered socket.",distinctionZh:"到达时 OS 读 5 元组，匹配已注册的 socket。",trap:"Thinking only the destination port matters — for connected TCP sockets the full 5-tuple is matched."},{en:"Port Registry & Well-known Ranges",zh:"端口注册表与范围",asks:"Name the three IANA port ranges and where the official registry lives.",asksZh:"说出 IANA 端口三段范围，以及官方注册表在哪。",distinction:"Well-known 0–1023, registered 1024–49151, dynamic 49152–65535; registry at iana.org/assignments/port-numbers.",distinctionZh:"公认 0–1023、注册 1024–49151、动态 49152–65535；注册表在 iana.org/assignments/port-numbers。",trap:"Putting 1024 in the well-known range — well-known ends at 1023; 1024 starts the registered range."},{en:"UDP Header (8 bytes)",zh:"UDP 头部",asks:"List the four UDP header fields and their sizes.",asksZh:"列出 UDP 头四个字段及大小。",distinction:"Source Port (16), Destination Port (16), Length (16), Checksum (16) — total 8 bytes.",distinctionZh:"源端口、目的端口、长度、校验和 — 各 16 位，共 8 字节。",trap:"Forgetting the length field covers header + data, not just data."},{en:"Why UDP at all",zh:"为什么用 UDP",asks:"Give two reasons applications choose UDP over TCP.",asksZh:"举两个应用选 UDP 而非 TCP 的理由。",distinction:"No handshake (low latency), no per-connection state (scalable), app controls reliability/timing (DNS, VoIP, games).",distinctionZh:"无握手（低延迟）、无连接状态（可扩展）、应用自控可靠性/时序（DNS、VoIP、游戏）。",trap:"Claiming UDP is reliable — it is not; reliability is the application's job if needed."},{en:"UDP Checksum",zh:"UDP 校验和",asks:"What does the UDP checksum cover, and is it mandatory in IPv4?",asksZh:"UDP 校验和覆盖什么？IPv4 里强制吗？",distinction:"It covers a pseudo-header + UDP header + data; optional in IPv4, mandatory in IPv6.",distinctionZh:"覆盖伪头 + UDP 头 + 数据；IPv4 可选，IPv6 强制。",trap:"Treating the checksum as a security feature — it only catches accidental corruption."},{en:"UDP Reflection / Amplification",zh:"UDP 反射放大攻击",asks:"How can UDP be abused for a reflection/amplification DDoS?",asksZh:"UDP 如何被滥用做反射放大 DDoS？",distinction:"Attacker spoofs the victim's IP as source, sends small UDP queries to servers with large responses (DNS, NTP); the large replies hit the victim.",distinctionZh:"攻击者伪造受害者 IP 为源，发小请求给大响应服务器（DNS/NTP）；大响应打向受害者。",trap:"Blaming TCP for amplification — TCP's handshake stops spoofed reflection; UDP's statelessness enables it."}]},"wk8-http":{summary:"HTTP is a request/response message protocol; connections, headers, cookies, caching and HTTP/2-3 motivations are common.",summaryZh:"HTTP 是请求/响应消息协议；连接、头部、cookie、缓存、HTTP/2-3 动机是常考点。",topics:[{en:"Request/Response Format",zh:"请求/响应格式",asks:"Write out the structure of an HTTP request and a response.",asksZh:"写出 HTTP 请求与响应结构。",distinction:"Request = request line (method, path, version) + headers + blank line + optional body; Response = status line + headers + blank line + body.",distinctionZh:"请求 = 请求行 + 头部 + 空行 + 可选体；响应 = 状态行 + 头部 + 空行 + 体。",trap:"Forgetting the blank line — it is what tells the receiver the headers are done."},{en:"Persistent vs Non-persistent Connection",zh:"持久 vs 非持久连接",asks:"Compute how many RTTs it takes to fetch N objects with and without persistent connections.",asksZh:"算取 N 个对象在两种连接下各需多少 RTT。",distinction:"Non-persistent (HTTP/1.0) = 2 RTTs per object (1 TCP + 1 request); persistent (HTTP/1.1) = 1 TCP + N RTTs, or pipelined fewer.",distinctionZh:"非持久 = 每对象 2 RTT；持久 = 1 个 TCP + N RTT，流水线更少。",trap:"Counting one RTT per object under HTTP/1.1 without subtracting the shared handshake."},{en:"Cookies & Sessions",zh:"cookie 与会话",asks:"How does a cookie let a server remember a stateless HTTP client?",asksZh:"cookie 如何让无状态 HTTP 记住客户端？",distinction:"Server sends Set-Cookie; client stores it and echoes it in Cookie headers; the server maps the cookie to server-side session state.",distinctionZh:"服务器发 Set-Cookie；客户端存储并在 Cookie 头回送；服务器把 cookie 映射到服务端会话。",trap:"Believing cookies hold the session data — usually the cookie is only a session ID; the data lives server-side."},{en:"Conditional GET / Caching",zh:"条件 GET 与缓存",asks:"Use Cache-Control, Expires, ETag, If-None-Match to make a cache revalidate.",asksZh:"用 Cache-Control、Expires、ETag、If-None-Match 让缓存再验证。",distinction:"Last-Modified + If-Modified-Since uses time; ETag + If-None-Match uses a version token; a 304 means 'use your cache'.",distinctionZh:"Last-Modified + If-Modified-Since 用时间；ETag + If-None-Match 用版本 token；304 表示用缓存。",trap:"Mixing up If-None-Match (ETag) with If-Modified-Since (time) — they are two different validators."},{en:"HTTPS = HTTP over TLS",zh:"HTTPS = HTTP over TLS",asks:"What does HTTPS add, and on what port does it usually run?",asksZh:"HTTPS 加了什么？常用端口？",distinction:"HTTPS runs ordinary HTTP inside a TLS tunnel; default port 443; TLS provides confidentiality + integrity + (server) authentication.",distinctionZh:"HTTPS 把普通 HTTP 跑在 TLS 隧道里；默认 443；TLS 给保密+完整+（服务器）认证。",trap:"Saying HTTPS is a different message format — the HTTP messages are identical; only the transport is encrypted."},{en:"HTTP/2 and HTTP/3 Motivation",zh:"HTTP/2 与 HTTP/3 动机",asks:"What problems of HTTP/1.1 do HTTP/2 and HTTP/3 solve?",asksZh:"HTTP/2 与 HTTP/3 解决 HTTP/1.1 的什么问题？",distinction:"HTTP/2 adds multiplexing over one TCP + binary framing + header compression; HTTP/3 runs over QUIC (UDP) to avoid TCP head-of-line blocking.",distinctionZh:"HTTP/2 在一条 TCP 上多路复用 + 二进制帧 + 头压缩；HTTP/3 跑在 QUIC(UDP) 上避免 TCP 队头阻塞。",trap:"Thinking HTTP/3 runs over TCP — it runs over QUIC, which is UDP-based."},{en:"URI vs URL",zh:"URI vs URL",asks:"Is every URL a URI? Is every URI a URL? Give a URI that is not a URL.",asksZh:"每个 URL 都是 URI 吗？每个 URI 都是 URL 吗？举一个不是 URL 的 URI。",distinction:"URI is the superset (URL + URN); URLs locate by address and can be absolute or relative; a URN like an ISBN is a URI but not a URL.",distinctionZh:"URI 是超集（URL + URN）；URL 按地址定位，可绝对可相对；像 ISBN 这样的 URN 是 URI 但不是 URL。",trap:"Treating URI and URL as synonyms — an ISBN/URN identifies without locating, so it is a URI but not a URL."}]},"wk9-tcp":{summary:"TCP is a reliable byte stream; the 3-way handshake, 4-way close, sequence/ack and window are the calculation core.",summaryZh:"TCP 是可靠字节流；三次握手、四次挥手、序号/确认、窗口是计算核心。",topics:[{en:"Byte Stream (no message boundaries)",zh:"字节流（无消息边界）",asks:"Why is TCP called a byte stream, and what does that mean for read/write?",asksZh:"为什么 TCP 叫字节流？对 read/write 意味着什么？",distinction:"TCP sends an ordered byte stream; one write ≠ one read — multiple writes may merge, one write may be split.",distinctionZh:"TCP 发有序字节流；一次 write ≠ 一次 read — 多次 write 可合并，一次 write 可拆分。",trap:"Assuming `recv` returns exactly what one `send` sent — TCP gives no such guarantee."},{en:"Three-way Handshake & Seq Numbers",zh:"三次握手与序号",asks:"Walk through SYN / SYN-ACK / ACK with sequence numbers; does SYN consume a seq number?",asksZh:"走一遍 SYN/SYN-ACK/ACK 的序号；SYN 占序号吗？",distinction:"Client SYN seq=x; Server SYN-ACK seq=y, ack=x+1; Client ACK ack=y+1; SYN and FIN each consume one sequence number.",distinctionZh:"客户端 SYN seq=x；服务器 SYN-ACK seq=y, ack=x+1；客户端 ACK ack=y+1；SYN 与 FIN 各占一个序号。",trap:"Saying SYN does not consume a seq number — it does; that is why ack=x+1, not x."},{en:"Connection Close (FIN / RST, half-close)",zh:"连接关闭与半关闭",asks:"Explain half-close and the difference between FIN and RST.",asksZh:"解释半关闭；FIN 与 RST 区别。",distinction:"FIN closes one direction only (half-close); the other side may still send; RST aborts the whole connection abruptly.",distinctionZh:"FIN 只关一个方向（半关闭），对端仍可发；RST 立即硬关闭整条连接。",trap:"Thinking FIN closes both directions at once — each side must send its own FIN."},{en:"TCP Header Fields",zh:"TCP 头部字段",asks:"Identify the role of sequence number, ack number, and window in the header.",asksZh:"说明头部里序号、确认号、窗口的作用。",distinction:"Seq = first byte in this segment; ACK = next byte expected; Window = receive buffer the receiver is advertising.",distinctionZh:"Seq = 本段第一字节；ACK = 期望下一字节；Window = 接收方通告的接收缓冲。",trap:"Reading ACK as 'last received' — it is 'next expected', so it is last_received + 1."},{en:"Sliding Window / Flow Control",zh:"滑动窗口与流控",asks:"How does the receive window stop a fast sender from overwhelming a slow receiver?",asksZh:"接收窗口如何防止快发送方压垮慢接收方？",distinction:"The receiver advertises rwnd; the sender keeps unacknowledged bytes ≤ rwnd, so the receiver's buffer cannot overflow.",distinctionZh:"接收方通告 rwnd；发送方未确认字节 ≤ rwnd，接收缓冲不会溢出。",trap:"Confusing rwnd (flow control, receiver-driven) with cwnd (congestion control, sender-driven)."},{en:"Sliding Window Byte Trace",zh:"滑动窗口字节追踪",asks:"Walk a sliding-window exchange with segment size 10: after sending bytes 1–10 and the app reading them, what ACK and Window does the receiver send?",asksZh:"用 seg size 10 走一遍：发出 1–10 字节且应用读走后，接收方回什么 ACK 和 Window？",distinction:"After receiving 1–10: ACK:11, Window:40 (buffer holds 10); after the app reads those 10 bytes: a WindowUpdate with ACK:11, Window:50; invariant LastByteSent − LastByteAcked ≤ RWND throughout.",distinctionZh:"收到 1–10：ACK:11, Window:40（缓冲占 10）；应用读走后：WindowUpdate，ACK:11, Window:50；全程满足 LastByteSent − LastByteAcked ≤ RWND。",trap:"Thinking ACK advances the moment data arrives but Window stays fixed — the Window shrinks on arrival and reopens on a WindowUpdate after the app reads."},{en:"TCP 5-tuple & Service Primitives",zh:"TCP 5 元组与服务原语",asks:"What uniquely identifies a TCP connection, and which primitive is non-blocking?",asksZh:"什么唯一标识一条 TCP 连接？哪个原语非阻塞？",distinction:"The 5-tuple (proto, local IP, local port, remote IP, remote port); select() is the non-blocking multiplexing primitive, not a TCP primitive itself.",distinctionZh:"5 元组唯一标识连接；select() 是非阻塞多路复用，本身不是 TCP 原语。",trap:"Listing select() as a TCP service primitive — it is an OS multiplexing facility."}]},"wk9-protocol":{summary:"A protocol must define syntax, semantics, timing, and error handling; RPC fakes local calls but cannot ship pointers.",summaryZh:"协议要定义语法、语义、时序与错误处理；RPC 伪装本地调用但不能传指针。",topics:[{en:"Protocol Three Elements (syntax / semantics / timing)",zh:"协议三要素",asks:"Define syntax, semantics, and timing of a protocol with examples.",asksZh:"定义协议的语法、语义、时序并举例。",distinction:"Syntax = message format/fields; semantics = what each field means and what action to take; timing = ordering, timeouts, speed.",distinctionZh:"语法 = 报文格式；语义 = 字段含义与动作；时序 = 顺序、超时、速率。",trap:"Listing only format and forgetting timing — a protocol without timeouts is not implementable."},{en:"Error Handling in Protocols",zh:"协议错误处理",asks:"Give three ways a protocol can recover from errors.",asksZh:"举三种协议错误恢复方式。",distinction:"ACK/NACK + retransmission, sequence numbers to detect duplicates, checksum/CRC to detect corruption.",distinctionZh:"ACK/NACK + 重传、序号查重复、校验和/CRC 查损坏。",trap:"Confusing error detection (checksum) with error recovery (retransmission)."},{en:"RPC Architecture (stub / marshalling)",zh:"RPC 架构",asks:"Describe the role of client stub and server stub in RPC.",asksZh:"描述客户端存根与服务器存根的作用。",distinction:"Client stub marshals args into a request and unmarshals the reply; server stub unmarshals the request, calls the real procedure, marshals the reply.",distinctionZh:"客户端存根把参数编为请求、解回复；服务器存根解请求、调真实过程、编回复。",trap:"Thinking the stubs do the network I/O themselves — they hand bytes to the transport; the RPC runtime does I/O."},{en:"Marshalling / Unmarshalling",zh:"编组与解组",asks:"What does marshalling convert, and why must it be standardised?",asksZh:"marshalling 转换什么？为何要标准化？",distinction:"Marshalling converts in-memory structures (ints, structs, strings) into a canonical byte stream; unmarshalling reverses it on the remote side.",distinctionZh:"marshalling 把内存结构转成规范字节流；远端解组还原。",trap:"Assuming the wire format matches the local memory layout — endianness and padding differ across machines."},{en:"Why RPC Cannot Pass Pointers",zh:"为何 RPC 不能传指针",asks:"Explain why passing a pointer over RPC is meaningless.",asksZh:"解释为何跨 RPC 传指针无意义。",distinction:"A pointer is a local address; the callee's address space is unrelated, so the value points to nothing valid remotely.",distinctionZh:"指针是本地地址；被调用方地址空间无关，远端该值不指向有效内容。",trap:"Trying to 'send the data the pointer points to' without copying it explicitly — RPC needs the data marshalled, not the address."},{en:"Protocol Deployment & Rollout",zh:"协议部署与上线",asks:"Name three deployment questions a protocol designer must answer before releasing a spec publicly.",asksZh:"说出协议公开发布前必须回答的三个部署问题。",distinction:"How finished before deploy; what happens on a new spec release (versioning/back-compat); how to test thoroughly before public release.",distinctionZh:"多成熟才上线；新 spec 发布怎么办（版本协商/向后兼容）；公开发布前如何充分测试。",trap:"Thinking the job ends at 'it works in the lab' — once deployed on the Internet a protocol is nearly impossible to un-deploy."},{en:"Synchronous vs Asynchronous RPC",zh:"同步 vs 异步 RPC",asks:"Contrast synchronous RPC and asynchronous RPC for the caller.",asksZh:"对比调用方视角的同步与异步 RPC。",distinction:"Synchronous RPC blocks the caller until the reply returns; asynchronous RPC returns control immediately and delivers the reply later via callback/polling.",distinctionZh:"同步 RPC 阻塞到回复；异步 RPC 立即返回，回复稍后经回调/轮询送达。",trap:"Assuming RPC is always blocking — asynchronous RPC is a standard variant."}]},"wk10-addressing":{summary:"IP addresses name interfaces, not hosts; CIDR, masks, host ranges and aggregation are the arithmetic core.",summaryZh:"IP 地址命名接口而非主机；CIDR、掩码、主机范围、聚合是算术核心。",topics:[{en:"IP Address Names an Interface",zh:"IP 地址命名接口",asks:"To what entity is an IP address assigned — a host or an interface?",asksZh:"IP 地址分配给主机还是接口？",distinction:"An IP address identifies a network interface; a router with N interfaces has N IP addresses.",distinctionZh:"IP 地址标识网络接口；有 N 个接口的路由器有 N 个 IP。",trap:"Saying 'one IP per host' — a multihomed host/router has several."},{en:"CIDR & Prefix Length",zh:"CIDR 与前缀长度",asks:"Given 192.168.10.42/24, compute network, mask, broadcast, host range.",asksZh:"给 192.168.10.42/24，算网络、掩码、广播、主机范围。",distinction:"/n means the first n bits are network; host bits = 32 − n; mask has n ones then zeros.",distinctionZh:"/n 表示前 n 位为网络；主机位 = 32 − n；掩码前 n 个 1 其余 0。",trap:"Believing /24 is bigger than /16 — /24 has fewer hosts; shorter prefix = bigger network."},{en:"Network vs Broadcast vs Host Address",zh:"网络地址 vs 广播地址 vs 主机地址",asks:"Which two addresses in a subnet cannot be assigned to hosts?",asksZh:"子网中哪两个地址不能分给主机？",distinction:"All-zeros host = network address; all-ones host = broadcast address; usable hosts = 2^(hostbits) − 2.",distinctionZh:"主机位全 0 = 网络地址；全 1 = 广播地址；可用主机 = 2^主机位 − 2。",trap:"Forgetting to subtract the network and broadcast addresses when counting usable hosts."},{en:"Route Aggregation / Supernetting",zh:"路由聚合",asks:"How does route aggregation shrink routing tables?",asksZh:"路由聚合如何缩小路由表？",distinction:"Several prefixes sharing a common high-order bits are advertised as one shorter prefix (e.g. 4 × /24 → one /22).",distinctionZh:"若干共享高位的前缀合并为一个更短前缀（如 4 个 /24 → 一个 /22）。",trap:"Aggregating prefixes that do not share enough leading bits — the merged prefix would include addresses you don't own."},{en:"Prefix Membership Drill",zh:"前缀归属判断",asks:"Is 128.250.73.5 in 128.250.0.0/16? /24? /17? Can you infer its netmask from the IP alone?",asksZh:"128.250.73.5 在 /16? /24? /17? 内吗？能单从 IP 推断掩码吗？",distinction:"/16 yes; /24 no (third byte 73≠0); /17 yes (73<128, the 17th bit is 0); you cannot infer the netmask from the IP alone — it is a per-interface config.",distinctionZh:"/16 是；/24 否（第三字节 73≠0）；/17 是（73<128，第 17 位为 0）；不能单从 IP 推掩码，它是接口配置。",trap:"Assuming a single 'correct' prefix for an IP — the same IP belongs to different prefixes under different masks; the mask must be configured."},{en:"Packet Switching vs Virtual Circuit",zh:"数据报 vs 虚电路",asks:"Compare datagram packet switching with virtual-circuit switching.",asksZh:"对比数据报与虚电路交换。",distinction:"Datagram = each packet routed independently, no setup, stateless; virtual circuit = setup a path, packets carry a VC number, routers keep per-flow state.",distinctionZh:"数据报 = 每包独立路由、无建立、无状态；虚电路 = 先建路径、包带 VC 号、路由器存每流状态。",trap:"Thinking the Internet uses virtual circuits — IP is datagram-based."},{en:"Store-and-Forward Delay",zh:"存储转发延迟",asks:"Compute the per-hop store-and-forward delay for an L-bit packet on a link of rate R.",asksZh:"算 L 位包在速率 R 链路上每跳存储转发延迟。",distinction:"Each hop must receive the whole packet before forwarding: delay = L / R per hop, plus propagation.",distinctionZh:"每跳需收完整包才转发：延迟 = L / R 每跳，再加传播延迟。",trap:"Counting only propagation and ignoring the L/R transmission time at each hop."}]},"wk10-congestion":{summary:"Sliding window gives reliability/order/flow control; cwnd handles network congestion; slow start is actually exponential.",summaryZh:"滑动窗口给可靠/有序/流控；cwnd 处理网络拥塞；slow start 其实是指数增长。",topics:[{en:"rwnd vs cwnd",zh:"rwnd vs cwnd",asks:"Distinguish receive window and congestion window; which limits the sender?",asksZh:"区分接收窗口与拥塞窗口；谁限制发送方？",distinction:"rwnd is advertised by the receiver (flow control); cwnd is computed by the sender (congestion control); effective window = min(rwnd, cwnd).",distinctionZh:"rwnd 由接收方通告（流控）；cwnd 由发送方算（拥塞控制）；有效窗口 = min(rwnd, cwnd)。",trap:"Saying the receiver sets cwnd — it never does; cwnd is purely sender-side."},{en:"Slow Start (exponential growth)",zh:"慢启动（指数增长）",asks:"Why is slow start called slow, and how does the window grow?",asksZh:"slow start 为什么叫慢？窗口如何增长？",distinction:"It starts at 1 and doubles per RTT — exponential, but 'slow' compared to starting at the full window; stops growing at ssthresh.",distinctionZh:"从 1 起，每 RTT 翻倍 — 指数；到 ssthresh 停止；'slow' 是相对一开始就发满窗口而言。",trap:"Believing slow start grows linearly — it doubles, so it is exponential."},{en:"Congestion Avoidance (AIMD)",zh:"拥塞避免（AIMD）",asks:"Describe additive increase / multiplicative decrease.",asksZh:"描述加性增、乘性减。",distinction:"Above ssthresh, cwnd grows by 1 MSS per RTT (additive); on loss, cwnd is halved and ssthresh = cwnd/2 (multiplicative).",distinctionZh:"超过 ssthresh 后每 RTT 加 1 MSS；丢包时 cwnd 减半、ssthresh = cwnd/2。",trap:"Halving ssthresh but leaving cwnd unchanged after loss — both must react."},{en:"Timeout vs Fast Retransmit",zh:"超时 vs 快速重传",asks:"What triggers a timeout retransmit vs a fast retransmit?",asksZh:"什么触发超时重传？什么触发快速重传？",distinction:"Timeout = no ACK in time (coarse, strong congestion signal → cwnd = 1); fast retransmit = 3 duplicate ACKs (mild signal → cwnd halved, not 1).",distinctionZh:"超时 = 时间内无 ACK（强信号 → cwnd=1）；快速重传 = 3 个重复 ACK（弱信号 → cwnd 减半，不归 1）。",trap:"Resetting cwnd to 1 on 3 duplicate ACKs — that is the timeout behaviour, not fast retransmit."},{en:"Tahoe vs Reno",zh:"Tahoe vs Reno",asks:"How does Reno improve on Tahoe on a fast-retransmit event?",asksZh:"Reno 在快速重传上如何改进 Tahoe？",distinction:"Tahoe sets cwnd = 1 on any loss; Reno halves cwnd and enters fast recovery on 3 dup ACKs, only resetting to 1 on a timeout.",distinctionZh:"Tahoe 任何丢包都 cwnd=1；Reno 收到 3 重复 ACK 时减半并进入快速恢复，仅超时才归 1。",trap:"Treating 'fast recovery' as the same in both — Tahoe does not have it; only Reno does."},{en:"Zero Window Probe / Persist Timer",zh:"零窗口探测与持续计时器",asks:"How does TCP avoid deadlock when the receiver advertises a zero window?",asksZh:"接收方通告零窗口时，TCP 如何防死锁？",distinction:"The sender periodically sends a 1-byte probe to elicit a fresh window advertisement, driven by the persist timer (not the retransmit timer).",distinctionZh:"发送方周期性发 1 字节探测，由持续计时器（非重传计时器）驱动，以获取新窗口通告。",trap:"Using the retransmission timer for probes — that is a different timer with a different purpose."},{en:"Zero-window Deadlock & Persist Timer",zh:"零窗口死锁与持续计时器",asks:"Trace the full path: seg 21 lost → fast retransmit → Window:0 → deadlock → recovery.",asksZh:"走完整路径：seg 21 丢→fast retransmit→Window:0→死锁→恢复。",distinction:"3 DupACK:21 (Window:50) triggers fast retransmit of seg 21; receiver then ACKs 71 but Window:0 (buffer full); if the WindowUpdate is lost, the persist timer fires a ZeroWindowProbe and the receiver replies ZeroWindowProbeACK with the new window.",distinctionZh:"3 个 DupACK:21（Window:50）触发重传 seg 21；接收方回 ACK:71 但 Window:0（缓冲满）；若 WindowUpdate 丢失，persist timer 发 ZeroWindowProbe，接收方回 ZeroWindowProbeACK 带新窗口。",trap:"Conflating the persist timer with the retransmission timer — the persist timer exists precisely because there is nothing to retransmit (the window, not data, is stuck)."}]},"wk11-routing":{summary:"Forwarding is a local table lookup; routing builds that table; Dijkstra and link-state are the centrepiece.",summaryZh:"转发是本地查表；路由构建该表；Dijkstra 与链路状态是重点。",topics:[{en:"Forwarding vs Routing",zh:"转发 vs 路由",asks:"Distinguish forwarding from routing, and which plane each belongs to.",asksZh:"区分转发与路由，各属哪个平面。",distinction:"Forwarding = data plane, move a packet from input to output link using the table; routing = control plane, compute/maintain that table.",distinctionZh:"转发 = 数据平面，按表把包从入链路移到出链路；路由 = 控制平面，算/维护该表。",trap:"Saying routing is what a router does to each packet — that is forwarding; routing happens in the background."},{en:"Dijkstra's Algorithm",zh:"Dijkstra 算法",asks:"Run Dijkstra step by step on a small graph and report shortest paths.",asksZh:"在小图上逐步跑 Dijkstra，给最短路径。",distinction:"Repeatedly settle the unsettled node with the smallest tentative distance, then relax its edges; greedy and optimal for non-negative weights.",distinctionZh:"反复选未确定节点中 tentative 距离最小者确定，再松弛其边；贪心、对非负权最优。",trap:"Applying Dijkstra to a graph with negative edge weights — it can give wrong results; use Bellman-Ford."},{en:"Link State vs Distance Vector",zh:"链路状态 vs 距离向量",asks:"Compare what each router knows and how it converges in LS vs DV.",asksZh:"对比 LS 与 DV 中路由器知道什么、如何收敛。",distinction:"LS floods full topology, every router runs Dijkstra (global view); DV tells neighbours only its best distances, uses Bellman-Ford (local view).",distinctionZh:"LS 泛洪全网拓扑，每路由器跑 Dijkstra（全局视图）；DV 只向邻居告最佳距离，用 Bellman-Ford（局部视图）。",trap:"Saying DV routers know the whole topology — they only know their neighbours' distance vectors."},{en:"Flooding & Sequence/Age",zh:"泛洪与序号/年龄",asks:"Why do link-state advertisements carry a sequence number and an age?",asksZh:"为什么 LSA 要带序号和 age？",distinction:"Sequence number lets a receiver keep the newest copy; age (TTL) lets old LSAs expire so stale info cannot persist forever.",distinctionZh:"序号让接收方保留最新副本；age（TTL）让旧 LSA 过期，陈旧信息不会永久存在。",trap:"Keeping an LSA purely by 'larger sequence' and forgetting age — a crashed router's last LSA would otherwise live forever."},{en:"IPv6 Header & Address Format",zh:"IPv6 头部与地址格式",asks:"Name the key IPv6 header fields and write 8000:0000:0000:0000:0123:4567:89AB:CDEF in compressed form; what is ::ffff:192.31.2.46?",asksZh:"说出 IPv6 关键头部字段，把上述地址压缩；::ffff:192.31.2.46 是什么？",distinction:"Fields: Version=6, Differentiated services (6-bit class + 2-bit ECN), Flow label, Payload length, Next header, Hop limit (=TTL), 16-byte src/dst; compressed: 8000::123:4567:89AB:CDEF; ::ffff:192.31.2.46 is an IPv4-mapped IPv6 address.",distinctionZh:"字段：Version=6、Differentiated services、Flow label、Payload length、Next header、Hop limit(=TTL)、16 字节 src/dst；压缩：8000::123:4567:89AB:CDEF；::ffff:192.31.2.46 是 IPv4-mapped IPv6 地址。",trap:"Using :: more than once to compress different zero runs — only one :: is allowed, otherwise the address is ambiguous."},{en:"Count-to-Infinity (DV)",zh:"计数到无穷",asks:"Explain the count-to-infinity problem in distance-vector routing.",asksZh:"解释 DV 的 count-to-infinity 问题。",distinction:"When a link cost increases, DV updates propagate slowly and routers keep advertising ever-growing distances to an unreachable network.",distinctionZh:"链路代价增加时，DV 更新传播慢，路由器对不可达网络持续通告越来越大的距离。",trap:"Blaming link-state for count-to-infinity — it is a DV-specific pathology; split horizon/poison reverse mitigate it."},{en:"Hierarchical Routing / Autonomous Systems",zh:"层次路由与自治系统",asks:"Why does the Internet use hierarchical routing?",asksZh:"互联网为何用层次路由？",distinction:"Scale: intra-AS (IGP like OSPF/RIP) handles inside; inter-AS (BGP) handles between ASes; each AS hides internal detail.",distinctionZh:"为可扩展：AS 内用 IGP（OSPF/RIP），AS 间用 BGP；每个 AS 隐藏内部细节。",trap:"Assuming BGP picks shortest paths — BGP picks paths by policy, not just distance."}]},"wk11-control":{summary:"ARP, ICMP and traceroute are control-plane tools; keeping the data plane and control plane separate is the key idea.",summaryZh:"ARP、ICMP、traceroute 是控制平面工具；数据平面与控制平面分开是关键。",topics:[{en:"Data Plane vs Control Plane",zh:"数据平面 vs 控制平面",asks:"Classify forwarding, routing-table computation, ARP, ICMP into planes.",asksZh:"把转发、路由表计算、ARP、ICMP 归入平面。",distinction:"Data plane = per-packet actions (forwarding); control plane = background functions that build state (routing, ARP, ICMP signalling).",distinctionZh:"数据平面 = 每包动作（转发）；控制平面 = 后台建状态（路由、ARP、ICMP 信令）。",trap:"Calling ICMP a transport protocol — it is a network-layer control protocol."},{en:"ARP (IP → MAC on a LAN)",zh:"ARP（局域网 IP→MAC）",asks:"Explain ARP's scope: does it cross routers?",asksZh:"解释 ARP 范围：是否穿过路由器？",distinction:"ARP resolves a next-hop IP to a MAC on one local link; ARP broadcasts do not pass routers.",distinctionZh:"ARP 在单条本地链路上把下一跳 IP 解析为 MAC；ARP 广播不穿路由器。",trap:"Thinking ARP resolves the destination's MAC across the Internet — it only resolves the next hop on the local link."},{en:"ICMP",zh:"ICMP",asks:"Give two ICMP message types and what they report.",asksZh:"举两种 ICMP 消息及其报告内容。",distinction:"ICMP carries control/error messages at the network layer — e.g. Echo Request/Reply (ping) and Time Exceeded (TTL hit 0).",distinctionZh:"ICMP 在网络层传控制/错误消息 — 如 Echo 请求/应答（ping）和 Time Exceeded（TTL 到 0）。",trap:"Putting ICMP in the transport layer — it sits in IP, alongside TCP/UDP's peer, not above it."},{en:"Traceroute via TTL & ICMP",zh:"traceroute 原理",asks:"How does traceroute discover each hop using TTL and ICMP?",asksZh:"traceroute 如何用 TTL 与 ICMP 发现每一跳？",distinction:"It sends packets with TTL = 1, 2, 3, …; each router that decrements TTL to 0 returns ICMP Time Exceeded, revealing the hop; the final host returns Echo Reply / port-unreachable.",distinctionZh:"发 TTL=1,2,3… 的包；TTL 减到 0 的路由器回 ICMP Time Exceeded，暴露该跳；终点回 Echo Reply/端口不可达。",trap:"Assuming traceroute measures physical distance — it measures hop count and round-trip time, not geography."},{en:"DHCP (briefly, as control/signalling)",zh:"DHCP 简述",asks:"Outline how a host obtains an IP via DHCP (DORA).",asksZh:"简述主机经 DHCP 获取 IP（DORA）。",distinction:"Discover (broadcast) → Offer (server) → Request (client picks) → Ack (server confirms lease); it is application-layer on UDP but bootstraps IP.",distinctionZh:"Discover（广播）→ Offer → Request → Ack；跑在 UDP 上，但为 IP 提供引导。",trap:"Forgetting DHCP uses UDP broadcast initially because the host has no IP yet."},{en:"Why Separate Planes",zh:"为何分平面",asks:"Give one reason the control plane is kept separate from the data plane.",asksZh:"举一个控制平面与数据平面分离的理由。",distinction:"Separation lets forwarding stay fast/simple in hardware while control logic runs slower in software and can change without disrupting forwarding.",distinctionZh:"分离让转发在硬件里快而简单，控制逻辑在软件里慢跑且可更新而不打断转发。",trap:"Believing control-plane changes always pause forwarding — well-designed networks keep forwarding alive during recomputation."},{en:"Traceroute across International Hops",zh:"跨洲 traceroute",asks:"Why can a traceroute with few hops still show large RTTs, and what do carrier names in the output reveal?",asksZh:"为什么跳数少的 traceroute 仍可能有大 RTT？输出里的运营商名说明了什么？",distinction:"RTT is dominated by propagation distance (speed of light along cables), not hop count; carrier domains like telia.net/cogentco.com show the packet is crossing a Tier-1 backbone, often over submarine cables.",distinctionZh:"RTT 主要由传播距离（光速沿电缆）决定，而非跳数；telia.net/cogentco.com 等运营商名说明在穿越 Tier-1 骨干，常走海底电缆。",trap:"Equating 'few hops' with 'low latency' — a single cross-Pacific hop can be ~150 ms while 10 local hops may be < 5 ms."}]},"wk12-nat":{summary:"NAT is stateful address/port translation; it eases IPv4 scarcity but breaks the end-to-end principle.",summaryZh:"NAT 是有状态的地址/端口转换；缓解 IPv4 稀缺但破坏端到端原则。",topics:[{en:"What NAT Does",zh:"NAT 做什么",asks:"Describe how a NAT box rewrites packets in both directions.",asksZh:"描述 NAT 在两个方向如何改写包。",distinction:"Outbound: rewrite source (private IP:port) → (public IP: new port), record mapping; inbound: look up the dest public port, rewrite dest back to the private IP:port.",distinctionZh:"出向：源（私 IP:端口）→（公 IP:新端口）并记映射；入向：按目的公网端口查表，目的改回私 IP:端口。",trap:"Thinking NAT rewrites the destination on outbound packets — it rewrites the source outbound, the destination inbound."},{en:"NAT is Stateful",zh:"NAT 有状态",asks:"Why must a NAT keep per-flow state?",asksZh:"为什么 NAT 必须保存每流状态？",distinction:"Return packets carry only the public port, so without the mapping table NAT cannot know which private host to deliver to.",distinctionZh:"返回包只带公网端口，没有映射表 NAT 无法知道交给哪台私网主机。",trap:"Assuming NAT is stateless like a router — routers forward statelessly; NAT must remember every flow."},{en:"NAT is not a Firewall",zh:"NAT 不是防火墙",asks:"Why is NAT not equivalent to a firewall?",asksZh:"为什么 NAT 不等于防火墙？",distinction:"NAT hides private hosts as a side effect, but it does not inspect content or enforce policy; a real firewall explicitly allows/denies by rule.",distinctionZh:"NAT 顺带隐藏私网主机，但不检查内容、不执行策略；防火墙按规则显式允许/拒绝。",trap:"Relying on NAT for security — inbound pinholes, UPnP and outbound tunnels can all expose hosts."},{en:"Private Addresses (RFC1918)",zh:"私有地址",asks:"Why are RFC1918 addresses not routed on the public Internet?",asksZh:"为什么 RFC1918 地址不在公网路由？",distinction:"They are reusable across private networks; public routers have no route to them, so they must be translated at a NAT to reach the Internet.",distinctionZh:"它们在多个私网可复用；公网路由器无路由，必须经 NAT 才能上网。",trap:"Trying to ping an RFC1918 address across the Internet — it will not route."},{en:"NAT breaks End-to-End / Layering",zh:"NAT 破坏端到端与分层",asks:"In what two ways does NAT violate Internet design principles?",asksZh:"NAT 在哪两方面违反互联网设计原则？",distinction:"It violates the end-to-end principle (peers cannot assume a raw IP path) and layering (it rewrites port numbers, a transport-layer field, in a network-layer box).",distinctionZh:"它违反端到端原则（对端不能假设有原始 IP 路径）与分层（在网络层设备里改写传输层端口号）。",trap:"Defending NAT as clean layering — it is the textbook example of a layering violation."},{en:"Layered Debugging Matrix",zh:"分层调试矩阵",asks:"How does the lecture's debugging matrix help isolate 'the internet is not working'?",asksZh:"课件的调试矩阵如何帮助定位'网络不工作'？",distinction:"Rows = spatial location (host, LAN, gateway, ISP, remote), columns = stack layer (physical/link/network/transport/app); place the symptom in a cell to shrink the hypothesis space, then verify each cell with a matching tool.",distinctionZh:"行 = 空间位置（主机、LAN、网关、ISP、远端），列 = 协议栈层（物理/链路/网络/传输/应用）；把症状填进格子缩小假设空间，再用对应工具逐格验证。",trap:"Jumping straight to 'the server is down' before checking DNS or local routing — work the matrix cell by cell instead."},{en:"Network Debugging Checklist",zh:"网络排错清单",asks:"List a bottom-up debugging order for 'a host cannot reach a remote service'.",asksZh:"列出'主机连不上远端服务'的自下而上排错顺序。",distinction:"Local link & IP → gateway/ARP → DNS resolution → routing table → NAT/firewall → remote service & port.",distinctionZh:"本地链路与 IP → 网关/ARP → DNS 解析 → 路由表 → NAT/防火墙 → 远端服务与端口。",trap:"Jumping to 'the server is down' before checking DNS or local routing — work layer by layer."}]}},xp={"wk1-os":{summary:"Memorise the OS definition, hardware-abstraction goals, kernel boundary, interrupts, and syscalls.",summaryZh:"默写 OS 定义、硬件抽象目标、内核边界、中断与系统调用。",items:[{en:"Define operating system (slide wording).",zh:"用课件原文定义操作系统。",answerEn:"A program that interfaces the machine with the application programs; its job is to make other programs run efficiently.",answerZh:"在机器与应用程序之间提供接口的程序；其任务是让其他程序高效运行。",slide:"p.2"},{en:"State the two core functions of an OS.",zh:"写出 OS 的两大核心功能。",answerEn:"Hardware abstraction and resource management.",answerZh:"硬件抽象（Hardware Abstraction）和资源管理（Resource Management）。",slide:"p.2"},{en:"Hardware abstraction — two goals (slide p.3).",zh:"硬件抽象的两个目标（课件 p.3）。",answerEn:"(1) Simplify the computer model; (2) provide each application a dedicated abstract machine.",answerZh:"（1）简化计算机模型；（2）为每个应用提供看似专用的抽象机器。",slide:"p.3"},{en:"Name four abstractions the OS provides over hardware.",zh:"写出 OS 提供的四种硬件抽象。",answerEn:"Process, thread, address space, file (and socket).",answerZh:"进程（Process）、线程（Thread）、地址空间（Address Space）、文件（File）（及套接字 Socket）。",slide:"p.4"},{en:"Define OS kernel (slide p.20).",zh:"用课件 p.20 定义 OS kernel。",answerEn:"Part of the OS in kernel mode — core functions for scheduling, resource allocation, and I/O device access.",answerZh:"内核态运行的 OS 部分——调度、资源分配、访问 I/O 设备的核心功能。",slide:"p.20"},{en:"User vs kernel mode (slide p.18–19).",zh:"用户态 vs 内核态（课件 p.18–19）。",answerEn:"User: cannot issue privileged instructions; only OS-allowed memory. Kernel: all instructions; all memory.",answerZh:"用户态：不能执行特权指令；只能访问 OS 允许的内存。内核态：全部指令；全部内存。",slide:"p.18–19"},{en:"Privileged instruction (slide p.19).",zh:"特权指令（课件 p.19）。",answerEn:"Instructions that affect control of the machine or do I/O.",answerZh:"影响机器控制或执行 I/O 的指令。",slide:"p.19"},{en:"Stack frame contents (slide p.12).",zh:"栈帧内容（课件 p.12）。",answerEn:"Return address, saved registers, and local variables; stack pointer points to top of stack.",answerZh:"返回地址、保存的寄存器、局部变量；栈指针指向栈顶。",slide:"p.12"},{en:"List three outcomes after interrupt handling returns.",zh:"列出中断处理返回后的三种结局。",answerEn:"(1) Resume interrupted program; (2) OS kills it (fatal exception); (3) OS schedules another process.",answerZh:"（1）恢复被中断程序；（2）OS 杀掉它（致命异常）；（3）OS 调度另一个进程。",slide:"p.23"},{en:"Can a system call block the caller? What does the kernel do meanwhile?",zh:"系统调用会阻塞调用者吗？此时内核做什么？",answerEn:"Yes (e.g. read()); the kernel may schedule another ready process until an interrupt wakes the blocker.",answerZh:"会（如 read()）；内核可调度另一个 ready 进程，直到中断唤醒阻塞者。",slide:"p.25"},{en:"System call execution — five steps (slide p.25).",zh:"系统调用执行的五个步骤（课件 p.25）。",answerEn:"(1) Put syscall number in register; (2) execute syscall instruction; (3) CPU switches to kernel mode; (4) kernel looks up syscall table; (5) execute handler and return.",answerZh:"（1）系统调用号放入寄存器；（2）执行 syscall 指令；（3）CPU 切换到内核态；（4）内核查系统调用表；（5）执行处理程序并返回。",slide:"p.25"},{en:"Interrupt vs system call — sync/async and who triggers.",zh:"中断 vs 系统调用：同步/异步与触发者。",answerEn:"Interrupt = asynchronous event (hardware or exception); system call = synchronous request initiated by the program.",answerZh:"Interrupt = 异步事件（硬件或异常）；system call = 程序主动发起的同步请求。",slide:"p.25"}]},"wk2-process":{summary:"Memorise process/thread definitions, three states, PCB, fork/exec, and thread sharing.",summaryZh:"默写 process/thread 定义、三状态、PCB、fork/exec 与线程共享。",items:[{en:"Define process (slide wording).",zh:"用课件原文定义 process。",answerEn:"A running program.",answerZh:"运行中的程序（A running program）。",slide:"p.2"},{en:"List the three basic process states.",zh:"列出进程的三种基本状态。",answerEn:"Running, Ready, Blocked.",answerZh:"Running（运行）、Ready（就绪）、Blocked（阻塞）。",slide:"p.12"},{en:"When does a running process enter Blocked state?",zh:"运行中的进程何时进入 Blocked？",answerEn:"When it waits for an event it cannot complete immediately (e.g. disk I/O, waiting for input).",answerZh:"等待无法立即完成的事件时（如磁盘 I/O、等待输入）。",slide:"p.12"},{en:"PCB fields (slide p.14).",zh:"PCB 字段（课件 p.14）。",answerEn:"PID, parent process, memory management info, file descriptors, priority, used CPU time; execution context: PC, SP, registers.",answerZh:"PID、父进程、内存管理信息、文件描述符、优先级、已用 CPU 时间；执行上下文：PC、SP、寄存器。",slide:"p.14"},{en:"After fork() — same vs different (slide p.9).",zh:"fork() 后相同与不同（课件 p.9）。",answerEn:"Different address spaces; same memory image, PC, registers, and open file handles.",answerZh:"不同地址空间；相同内存映像、PC、寄存器、打开文件句柄。",slide:"p.9"},{en:"What does exec() do?",zh:"exec() 做什么？",answerEn:"Replaces the current process image with a new program; typically called after fork().",answerZh:"用新程序替换当前进程映像；通常在 fork() 之后调用。",slide:"p.10"},{en:"Ready → Running — who decides?",zh:"Ready → Running 由谁决定？",answerEn:"The OS scheduler selects a ready process/thread and dispatches it to the CPU.",answerZh:"OS 调度器从 ready 队列选出进程/线程并分派到 CPU。",slide:"p.12"},{en:"Define thread.",zh:"定义 thread。",answerEn:"A unit of execution within a process.",answerZh:"进程内的执行单元（unit of execution within a process）。",slide:"p.15"},{en:"Where is an idle thread's PC and SP stored?",zh:"未运行线程的 PC 和 SP 存在哪里？",answerEn:"In its TCB in memory; the CPU's PC/SP point at whichever thread is currently running.",answerZh:"存在内存中该线程的 TCB 里；CPU 的 PC/SP 指向当前正在运行的线程。",slide:"p.15"},{en:"Threads share vs own — code, data, heap, stack.",zh:"线程共享什么、各自拥有什么？",answerEn:"Share code, data, and heap; each thread has its own stack.",answerZh:"共享 code、data、heap；每个线程拥有独立 stack。",slide:"p.19"},{en:"Thread vs process — which is lighter to create?",zh:"创建 thread 还是 process 更轻？",answerEn:"Thread — it shares the address space and does not require a full resource duplicate.",answerZh:"Thread 更轻——共享地址空间，无需复制全部资源。",slide:"p.19"},{en:"Two benefits of multithreading (slide p.22).",zh:"多线程的两个好处（课件 p.22）。",answerEn:"(1) Overlap I/O with computation — one thread waits while another uses CPU; (2) parallel speedup on multi-core (e.g. each thread processes a segment of a large array).",answerZh:"（1）I/O 与计算重叠——一线程等待 I/O 时另一线程用 CPU；（2）多核并行加速（如大数组分段并行处理）。",slide:"p.22"}]},"wk3-cpu":{summary:"Memorise scheduling metrics, SJF/RR/MLFQ properties, convoy effect, and context-switch cost.",summaryZh:"默写调度指标、SJF/RR/MLFQ 特性、convoy effect 与上下文切换开销。",items:[{en:"Turnaround time and response time formulas.",zh:"周转时间与响应时间公式。",answerEn:"Turnaround = completion time − arrival time; response = time of first run − arrival time.",answerZh:"周转时间 = 完成时间 − 到达时间；响应时间 = 第一次运行时间 − 到达时间。",slide:"p.5"},{en:"SJF example — average turnaround (slide p.16).",zh:"SJF 例子——平均周转时间（课件 p.16）。",answerEn:"Processes D(3), A(5), C(7), B(11) → turnarounds 3, 8, 15, 26 → TAVG = (3+8+15+26)/4 = 13.",answerZh:"进程 D(3)、A(5)、C(7)、B(11) → 周转 3、8、15、26 → 平均 = (3+8+15+26)/4 = 13。",slide:"p.16"},{en:"Define convoy effect in FCFS (slide p.15 full wording).",zh:"定义 FCFS 的 convoy effect（课件 p.15 原文）。",answerEn:"When a long CPU-bound process runs, all short I/O-bound processes wait behind it, leaving I/O devices idle.",answerZh:"长 CPU 密集型进程运行时，所有短 I/O 密集型进程在其后等待，导致 I/O 设备空闲。",slide:"p.15"},{en:"Round Robin — what happens when time quantum is too small?",zh:"RR 时间片过小会怎样？",answerEn:"Context-switch overhead dominates; throughput drops.",answerZh:"上下文切换开销占主导，吞吐量下降。",slide:"p.23"},{en:"SJF optimality for turnaround (slide p.17).",zh:"SJF 对周转时间的最优性（课件 p.17）。",answerEn:"For a given job set, SJF minimises average turnaround time (if burst times known).",answerZh:"对给定作业集，SJF 最小化平均周转时间（若已知 burst time）。",slide:"p.17"},{en:"Preemptive vs non-preemptive scheduling.",zh:"抢占式 vs 非抢占式调度。",answerEn:"Preemptive: OS can remove a running process (timer interrupt, higher priority); non-preemptive: process runs until it blocks or finishes.",answerZh:"抢占式：OS 可剥夺运行中进程；非抢占式：进程运行到阻塞或结束才切换。",slide:"p.8"},{en:"MLFQ quanta per priority queue (slide p.26–27).",zh:"MLFQ 各优先级队列的时间片（课件 p.26–27）。",answerEn:"Priority 4 (highest): 2 quanta; Priority 3: 4; Priority 2: 8; Priority 1 (lowest): 16. New processes start at highest priority; use up quanta → move down.",answerZh:"Priority 4（最高）：2；Priority 3：4；Priority 2：8；Priority 1（最低）：16。新进程从最高优先级队列开始，用完配额则降级。",slide:"p.26–27"},{en:"MLFQ — what if a process blocks before using its quantum?",zh:"MLFQ——进程在时间片用完前阻塞会怎样？",answerEn:"If a process blocks within its quantum, it stays in the same queue (does not demote).",answerZh:"若进程在时间片内阻塞，留在当前队列（不降级）。",slide:"p.27"},{en:"Fairness in scheduling — slide wording.",zh:"调度公平性的课件表述。",answerEn:"Comparable processes should get comparable service.",answerZh:"可比的进程应获得可比的服务（comparable processes get comparable service）。",slide:"p.10"},{en:"Priority scheduling — starvation risk (slide p.25).",zh:"优先级调度——饥饿风险（课件 p.25）。",answerEn:"Low-priority processes may never get CPU; aging can gradually raise priority over waiting time.",answerZh:"低优先级进程可能永远得不到 CPU；aging 可随等待时间逐渐提高优先级。",slide:"p.25"},{en:"Process context switch — why flush TLB?",zh:"进程 context switch——为何 flush TLB？",answerEn:"Process switch loads a new page table; TLB entries from the old process are invalid and must be flushed.",answerZh:"进程切换加载新页表；旧进程的 TLB 项失效，必须 flush TLB。",slide:"p.4"},{en:"Blocked process re-queued — FCFS/RR with I/O.",zh:"带 I/O 阻塞时，进程返回 ready 队列排到何处？",answerEn:"FCFS: return to tail of ready queue; RR: treated as new arrival at tail (unused quantum not restored).",answerZh:"FCFS：回到 ready 队列尾部；RR：当作新到达排到队尾（未用完的时间片不补）。",slide:"p.14,21–22"}]},"wk3-ipc":{summary:"Memorise race conditions, ME conditions, TSL, strict alternation, and priority inversion.",summaryZh:"默写 race condition、互斥条件、TSL、严格交替与优先级反转。",items:[{en:"Define race condition.",zh:"定义 race condition。",answerEn:"Outcome depends on the interleaving of accesses to shared mutable state by concurrent threads.",answerZh:"结果取决于并发线程对共享可变状态访问的交错顺序。",slide:"p.4"},{en:"Critical region vs mutual exclusion.",zh:"Critical region 与 mutual exclusion 的关系。",answerEn:"Critical region = code accessing shared data; mutual exclusion = property that only one thread is in its critical region at a time.",answerZh:"Critical region = 访问共享数据的代码段；mutual exclusion = 同一时刻只有一个线程在其 critical region 内的性质。",slide:"p.10"},{en:"Four conditions for a good mutual-exclusion solution.",zh:"良好互斥解的四个条件。",answerEn:"(1) Mutual exclusion; (2) no assumptions about CPU speed/count; (3) no blocking outside CR (progress); (4) no starvation.",answerZh:"（1）互斥；（2）不对 CPU 速度/数量做假设；（3）临界区外不阻塞他人（progress）；（4）无饥饿。",slide:"p.15"},{en:"Why is a plain lock variable unsafe?",zh:"普通 lock 变量为何不安全？",answerEn:"Test-and-set is not atomic — two threads can both see unlocked and enter the critical region.",answerZh:"检测-设置不是原子操作——两线程可能都看到 unlocked 并进入 critical region。",slide:"p.19"},{en:"Busy waiting definition (slide wording).",zh:"Busy waiting 的课件原文表述。",answerEn:"Busy waiting — spin until lock becomes 0; repeatedly test the lock without yielding.",answerZh:"Busy waiting——自旋直到锁变为 0；反复检测锁而不让出 CPU。",slide:"p.17"},{en:"TSL (Test-and-Set Lock) — one-line mechanism.",zh:"TSL 一句话机制。",answerEn:"Atomically read old value and set lock to 1 in one indivisible hardware instruction.",answerZh:"一条不可分割的硬件指令原子地读出旧值并将锁置 1。",slide:"p.36–37"},{en:"Strict alternation failure — exact slide quote (p.35).",zh:"严格交替失败——课件原文（p.35）。",answerEn:"Thread B is blocking Thread A … but Thread B is outside of the critical region.",answerZh:"Thread B is blocking Thread A … but Thread B is outside of the critical region（B 在临界区外仍阻塞 A）。",slide:"p.35"},{en:"Define context switch.",zh:"定义 context switch。",answerEn:"OS stops one thread and starts another — save/restore register state (PC, SP, registers).",answerZh:"OS 停一线程、启另一线程——保存/恢复寄存器状态（PC、SP、寄存器）。",slide:"p.18"},{en:"Busy-waiting lock vs blocking mutex (slide p.20).",zh:"忙等待锁 vs 阻塞 mutex（课件 p.20）。",answerEn:"Busy waiting = spin until lock free; blocking mutex = thread sleeps until lock available (releases CPU).",answerZh:"忙等待 = 自旋直到锁可用；阻塞 mutex = 线程挂起直到锁可用（释放 CPU）。",slide:"p.20"},{en:"Stack pop race — what goes wrong? (slide p.7–8).",zh:"栈 pop 竞态——错在哪？（课件 p.7–8）。",answerEn:"Two threads both see stack non-empty, both pop — second pop on empty stack violates program logic.",answerZh:"两线程都看到栈非空，都 pop——第二次 pop 空栈，违反程序逻辑。",slide:"p.7–8"},{en:"Define priority inversion.",zh:"定义 priority inversion。",answerEn:"High-priority thread waits for a lock held by low-priority thread; low-priority thread cannot run (e.g. busy-waiting high-priority thread blocks it).",answerZh:"高优先级线程等待低优先级线程持有的锁；低优先级线程无法运行（如高优先级忙等待阻塞了它）。",slide:"p.22"},{en:"Read-modify-write race — counter example.",zh:"Read-modify-write 竞态——counter 例子。",answerEn:"Two threads both read counter=5, both write 6 — one update lost.",answerZh:"两线程都读到 counter=5，都写 6——一次更新丢失。",slide:"p.4"}]},"wk4-memory":{summary:"Memorise paging translation, page faults, replacement traces, TLB, and locality.",summaryZh:"默写分页翻译、缺页、置换演算、TLB 与局部性。",items:[{en:"Early multiprogramming — swap on every context switch (slide p.3).",zh:"早期多道程序——每次 context switch 做什么（课件 p.3）？",answerEn:"Only the running process stays in RAM; each context switch fully swaps the current process out to disk and the next one in.",answerZh:"只有运行中进程在 RAM；每次 context switch 把当前进程整进程换出磁盘、把下一个换进来。",slide:"p.3"},{en:"Logical address split in paging.",zh:"分页系统中逻辑地址如何拆分？",answerEn:"Page number + offset within page.",answerZh:"页号（page number）+ 页内偏移（offset）。",slide:"p.24"},{en:"Paging trace — LA0→PA20, LA5→PA25 (slide p.24).",zh:"分页演算——LA0→PA20，LA5→PA25（课件 p.24）。",answerEn:"Page size 4: LA0 = page 0 offset 0, frame 5 → PA20; LA5 = page 1 offset 1, frame 6 → PA25.",answerZh:"页大小 4：LA0 = 页 0 偏移 0，帧 5 → PA20；LA5 = 页 1 偏移 1，帧 6 → PA25。",slide:"p.24"},{en:"Offset example: logical 9, page size 4.",zh:"例子：逻辑地址 9，页大小 4，offset 是多少？",answerEn:"9 mod 4 = 1.",answerZh:"9 mod 4 = 1。",slide:"p.24"},{en:"Base/limit address translation.",zh:"Base/limit 地址翻译公式。",answerEn:"If logical address < limit: physical = logical + base; else trap (protection fault).",answerZh:"若逻辑地址 < limit：物理地址 = 逻辑地址 + base；否则触发保护异常。",slide:"p.9"},{en:"Internal fragmentation example (slide p.28).",zh:"内部碎片例子（课件 p.28）。",answerEn:"Page size 4 B, process 13 B → needs 4 pages = 16 B → internal fragmentation = 16 − 13 = 3 B.",answerZh:"页大小 4 B，进程 13 B → 需 4 页 = 16 B → 内部碎片 = 16 − 13 = 3 B。",slide:"p.28"},{en:"Page fault — OS handling steps (slide p.30).",zh:"Page fault——OS 处理步骤（课件 p.30）。",answerEn:"(1) Evict a page if no free frame (write back if modified); (2) load required page from disk; (3) update page table; (4) re-execute faulting instruction.",answerZh:"（1）无空闲帧则驱逐一页（modified 则写回）；（2）从磁盘加载所需页；（3）更新页表；（4）重新执行触发缺页的指令。",slide:"p.30"},{en:"PTE fields — present, referenced, modified (slide p.29).",zh:"PTE 字段——present、referenced、modified（课件 p.29）。",answerEn:"Present = in RAM or on disk; Referenced set on access; Modified set on write (must write back if evicted).",answerZh:"Present = 在 RAM 或磁盘；Referenced 访问时置位；Modified 写入时置位（驱逐须写回）。",slide:"p.29"},{en:"Temporal vs spatial locality (slide p.33).",zh:"时间局部性 vs 空间局部性（课件 p.33）。",answerEn:"Temporal = recently used data likely reused soon; spatial = nearby addresses likely accessed together.",answerZh:"时间局部性 = 刚用的数据很快再用；空间局部性 = 相邻地址很可能一起访问。",slide:"p.33"},{en:"TLB purpose (slide p.44).",zh:"TLB 的作用（课件 p.44）。",answerEn:"Cache recent page-table translations to avoid a full page-table walk on every memory access.",answerZh:"缓存最近页表翻译，避免每次内存访问都做完整页表查找。",slide:"p.44"},{en:"Second-chance at time 20 — page A with R=1 (slide p.35).",zh:"Second-chance：时刻 20 缺页，队头页 A 的 R=1（课件 p.35）。",answerEn:"Do not evict A; clear R to 0 and move A to tail; check new head instead.",answerZh:"不驱逐 A；R 清 0 并移到队尾；改检查新队头。",slide:"p.35"},{en:"Aging trace — X1000000 → 11000000 (slide p.38–40).",zh:"Aging 演算——X1000000 → 11000000（课件 p.38–40）。",answerEn:"Previous pattern X1000000, R=1 this tick → shift right → append R as MSB → 11000000; lowest value = victim.",answerZh:"上一 tick X1000000，本 tick R=1 → 右移 → 追加 R 为最高位 → 11000000；值最小者被驱逐。",slide:"p.38–40"}]},"wk5-security":{summary:"Memorise CIA, crypto primitives, certificates, hybrid encryption, and encrypt-then-MAC.",summaryZh:"默写 CIA、密码原语、证书、混合加密与 encrypt-then-MAC。",items:[{en:"CIA triad — expand each letter.",zh:"CIA 三元组各指什么？",answerEn:"Confidentiality, Integrity, Authentication.",answerZh:"保密性（Confidentiality）、完整性（Integrity）、认证（Authentication）。",slide:"p.3"},{en:"Confidentiality vs integrity — one line each.",zh:"保密性与完整性各一句话。",answerEn:"Confidentiality = prevent unauthorised reading; integrity = detect/prevent unauthorised modification.",answerZh:"保密性 = 防止未授权读取；完整性 = 检测/防止未授权篡改。",slide:"p.4"},{en:"Symmetric vs public-key cryptography.",zh:"对称密码 vs 公钥密码。",answerEn:"Symmetric = same secret key encrypts and decrypts; public-key = key pair — public encrypts/verify, private decrypts/signs.",answerZh:"对称 = 同一密钥加解密；公钥 = 密钥对——公钥加密/验证，私钥解密/签名。",slide:"p.10"},{en:"Kerckhoffs' principle (slide wording).",zh:"Kerckhoffs 原则（课件表述）。",answerEn:"Security depends on the decryption key, not secrecy of the algorithm.",answerZh:"安全性依赖解密密钥，而非算法保密。",slide:"p.8"},{en:"MAC vs digital signature.",zh:"MAC vs 数字签名。",answerEn:"MAC uses shared secret key (both parties); signature uses private key to sign, public key to verify.",answerZh:"MAC 用共享密钥（双方持有）；签名用私钥签、公钥验。",slide:"p.22"},{en:"Hash function — collision resistance and one-way (slide p.19).",zh:"哈希函数——抗碰撞与单向性（课件 p.19）。",answerEn:"Collision resistance: hard to find m ≠ m' with H(m)=H(m'); one-way: given H(m), hard to recover m.",answerZh:"抗碰撞：难找 m≠m' 使 H(m)=H(m')；单向：给定 H(m) 难恢复 m。",slide:"p.19"},{en:"What problem does a digital certificate solve?",zh:"数字证书解决什么问题？",answerEn:"Bind a public key to an identity in a trustworthy way (CA signature).",answerZh:"可信地将公钥与身份绑定（CA 签名背书）。",slide:"p.33–34"},{en:"Man-in-the-middle attack — how certificates help.",zh:"中间人攻击——证书如何防御？",answerEn:"Client verifies server certificate chain to ensure it talks to the real server, not an impostor.",answerZh:"客户端验证服务器证书链，确保连接真实服务器而非冒充者。",slide:"p.31"},{en:"Hybrid encryption — why and how (slide p.15–16).",zh:"混合加密——为何与如何（课件 p.15–16）。",answerEn:"Use public-key crypto to exchange a symmetric session key, then encrypt bulk data with symmetric crypto (efficient + no pre-shared secret).",answerZh:"用公钥密码交换对称会话密钥，再用对称密码加密大量数据（高效且无需预共享密钥）。",slide:"p.15–16"},{en:"Encrypt-then-MAC strategy (slide p.28).",zh:"Encrypt-then-MAC 策略（课件 p.28）。",answerEn:"Encrypt message first, then MAC the ciphertext; verify MAC before decrypting.",answerZh:"先加密消息，再对密文计算 MAC；先验 MAC 再解密。",slide:"p.28"},{en:"Public-key encrypt vs sign — which key for each?",zh:"公钥加密 vs 签名各用哪个密钥？",answerEn:"Encrypt with recipient's public key; sign with sender's private key.",answerZh:"用接收方公钥加密；用发送方私钥签名。",slide:"p.14"},{en:"Non-repudiation — which mechanism provides it?",zh:"不可否认性由哪种机制提供？",answerEn:"Digital signature — only the private-key holder could have produced it.",answerZh:"数字签名——只有私钥持有者才能生成。",slide:"p.23"}]},"wk6-osi":{summary:"Memorise layering, service vs protocol, TCP/IP stack, narrow waist, and encapsulation.",summaryZh:"默写分层、service vs protocol、TCP/IP 栈、窄腰与封装。",items:[{en:"Service vs protocol.",zh:"Service vs protocol。",answerEn:"Service = what a layer offers to the layer above; protocol = rules for peer communication at the same layer.",answerZh:"Service = 本层向上层提供什么；protocol = 同层对等实体通信的规则。",slide:"p.11"},{en:"Why layering? (two benefits).",zh:"为何分层？（两个好处）",answerEn:"Modularity / easier to change one layer; abstraction hides complexity from other layers.",answerZh:"模块化/便于修改某一层；抽象向其他层隐藏复杂性。",slide:"p.10"},{en:"Connection-oriented vs connectionless service.",zh:"面向连接 vs 无连接服务。",answerEn:"Connection-oriented = setup phase before data transfer (e.g. TCP); connectionless = send without prior setup (e.g. UDP).",answerZh:"面向连接 = 传数据前先建立连接（如 TCP）；无连接 = 无预先建立直接发送（如 UDP）。",slide:"p.13"},{en:"Point-to-point vs end-to-end — four tasks (slide p.17).",zh:"Point-to-point vs end-to-end——四项任务（课件 p.17）。",answerEn:"p2p (data link): get data p2p, tidy up p2p; e2e (transport): get data e2e, tidy up e2e.",answerZh:"p2p（链路层）：get data p2p、tidy up p2p；e2e（传输层）：get data e2e、tidy up e2e。",slide:"p.17"},{en:"List four TCP/IP layers bottom to top.",zh:"自下而上列出 TCP/IP 四层。",answerEn:"Link (Network Access), Internet (Network), Transport, Application.",answerZh:"链路层（Network Access）、网际层（Internet）、传输层、应用层。",slide:"p.19"},{en:"PDU name at transport layer.",zh:"传输层的 PDU 叫什么？",answerEn:"Segment (TCP) or datagram (UDP).",answerZh:"Segment（TCP）或 datagram（UDP）。",slide:"p.14"},{en:"Encapsulation — what happens going down the stack?",zh:"封装——数据向下经过协议栈时发生什么？",answerEn:"Each layer adds its own header (and sometimes trailer) around data from above.",answerZh:"每层在上层数据外加自己的首部（有时还有尾部）。",slide:"p.20"},{en:"IP as the narrow waist — slide wording (p.22).",zh:"IP 窄腰——课件表述（p.22）。",answerEn:"IP over everything, and everything over IP — many upper protocols and lower link technologies converge on IP.",answerZh:"IP over everything, and everything over IP——众多上层协议与下层链路技术以 IP 为汇合点。",slide:"p.22"},{en:"Protocol stack example — HTTP/TCP/UDP/IP (slide p.21).",zh:"协议栈例子——HTTP/TCP/UDP/IP（课件 p.21）。",answerEn:"Application (HTTP) → Transport (TCP or UDP) → Internet (IP) → Link layer.",answerZh:"应用层（HTTP）→ 传输层（TCP 或 UDP）→ 网际层（IP）→ 链路层。",slide:"p.21"},{en:"Network layer main function.",zh:"网络层主要功能。",answerEn:"Host-to-host delivery — routing datagrams across multiple networks.",answerZh:"主机到主机交付——跨多个网络路由数据报。",slide:"p.9"},{en:"Transport layer main function.",zh:"传输层主要功能。",answerEn:"Process-to-process delivery using port numbers on top of host-to-host IP.",answerZh:"在主机到主机 IP 之上用端口号实现进程到进程交付。",slide:"p.9"},{en:"OSI vs TCP/IP — practical difference.",zh:"OSI vs TCP/IP——实用区别。",answerEn:"TCP/IP reflects what the Internet actually runs; OSI is a design/diagnostic reference model.",answerZh:"TCP/IP 反映互联网实际运行；OSI 是设计/诊断参考模型。",slide:"p.19"}]},"wk7-sockets":{summary:"Memorise socket doorway, 5-tuple, server/client setup, two sockets, and blocking I/O.",summaryZh:"默写 socket 门、五元组、服务器/客户端建立、双 socket 与阻塞 I/O。",items:[{en:"Define socket — slide doorway analogy (p.6).",zh:"定义 socket——课件 doorway 类比（p.6）。",answerEn:"Socket is the doorway between application layer and transport layer — user-space code sends messages to kernel network code.",answerZh:"Socket 是应用层与传输层之间的门——用户空间代码向内核网络代码发消息。",slide:"p.6"},{en:"TCP connection 5-tuple.",zh:"TCP 连接的五元组。",answerEn:"Protocol, local IP, local port, remote IP, remote port.",answerZh:"协议、本地 IP、本地端口、远端 IP、远端端口。",slide:"p.8"},{en:"Server socket setup order (four calls).",zh:"服务器 socket 建立顺序（四个调用）。",answerEn:"socket() → bind() → listen() → accept().",answerZh:"socket() → bind() → listen() → accept()。",slide:"p.14"},{en:"Client TCP connect — main calls.",zh:"客户端 TCP 连接主要调用。",answerEn:"socket() then connect() to server address/port.",answerZh:"socket() 之后 connect() 到服务器地址/端口。",slide:"p.12–13"},{en:"Listening socket vs connected socket (slide p.17–18).",zh:"Listening socket vs connected socket（课件 p.17–18）。",answerEn:"Listening socket = half socket (protocol, local IP, port only); connected socket = full 5-tuple for read/write.",answerZh:"Listening socket = 半 socket（仅协议、本地 IP、端口）；connected socket = 完整五元组，用于读写。",slide:"p.17–18"},{en:"listen(listenfd, 10) — second argument.",zh:"listen(listenfd, 10) 第二个参数含义。",answerEn:"Maximum backlog — up to 10 pending connections queued before accept().",answerZh:"Backlog 上限——accept 前最多 10 个待完成连接排队。",slide:"p.16"},{en:"Blocking read behaviour.",zh:"Blocking read 的行为。",answerEn:"Process waits until data arrives or an error occurs — does not return immediately with nothing.",answerZh:"进程等待直到有数据到达或出错——不会空读立即返回。",slide:"p.21"},{en:"File descriptor after accept().",zh:"accept() 返回什么？",answerEn:"A new connected socket file descriptor for communicating with that specific client.",answerZh:"与该特定客户端通信的新 connected socket 文件描述符。",slide:"p.14"},{en:"Port number purpose — demultiplexing.",zh:"端口号作用——解复用。",answerEn:"Demultiplex incoming segments to the correct application process/socket on a host.",answerZh:"将到达的分段解复用到主机上正确的应用进程/socket。",slide:"p.13–14"},{en:"close() on listening socket effect.",zh:"close() 关闭 listening socket 的效果。",answerEn:"Stops accepting new connections; existing connected sockets may remain open until closed separately.",answerZh:"停止接受新连接；已有 connected socket 可继续直到单独关闭。",slide:"p.17"},{en:"Server vs client role.",zh:"Server vs client 角色。",answerEn:"Server passively waits (bind/listen/accept); client actively initiates connect().",answerZh:"Server 被动等待（bind/listen/accept）；client 主动 connect()。",slide:"p.12–13"},{en:"Socket identified by file descriptor.",zh:"Socket 如何标识？",answerEn:"In UNIX, socket is accessed via a file descriptor (integer) through system calls read/write/close.",answerZh:"UNIX 中 socket 通过文件描述符（整数）经 read/write/close 等系统调用访问。",slide:"p.6"}]},"wk7-dns":{summary:"Memorise DNS hierarchy, record types, resolver relay, and mail protocols.",summaryZh:"默写 DNS 层次、记录类型、resolver 转发与邮件协议。",items:[{en:"DNS hierarchy — three levels top to leaf.",zh:"DNS 层次自上而下三层。",answerEn:"Root DNS servers → TLD servers → authoritative DNS servers.",answerZh:"根 DNS 服务器 → 顶级域（TLD）服务器 → 权威 DNS 服务器。",slide:"p.18–19"},{en:"Local DNS server role.",zh:"本地 DNS 服务器角色。",answerEn:"Default nameserver for a host/ISP — caches answers and relays queries up the hierarchy.",answerZh:"主机/ISP 的默认域名服务器——缓存答案并向上层转发查询。",slide:"p.19"},{en:"AAAA record example (slide p.14).",zh:"AAAA 记录例子（课件 p.14）。",answerEn:"AAAA maps hostname to IPv6, e.g. 1062::A22:AAE9:51C7:8451.",answerZh:"AAAA 将主机名映射到 IPv6，如 1062::A22:AAE9:51C7:8451。",slide:"p.14"},{en:"A record vs AAAA record.",zh:"A 记录 vs AAAA 记录。",answerEn:"A = hostname to IPv4; AAAA = hostname to IPv6.",answerZh:"A = 主机名到 IPv4；AAAA = 主机名到 IPv6。",slide:"p.14"},{en:"MX record purpose.",zh:"MX 记录用途。",answerEn:"Maps domain to mail server(s) that receive email for that domain.",answerZh:"将域名映射到接收该域邮件的邮件服务器。",slide:"p.16"},{en:"NS record purpose.",zh:"NS 记录用途。",answerEn:"Delegates a subdomain to authoritative name servers for that zone.",answerZh:"将子域委派给该区域的权威名称服务器。",slide:"p.16"},{en:"Four DNS components (slide p.7–8).",zh:"DNS 四个核心组成（课件 p.7–8）。",answerEn:"Domain name space, DNS database (RRs), name servers, resolvers.",answerZh:"域名空间、DNS 数据库（RR）、域名服务器、解析器（resolvers）。",slide:"p.7–8"},{en:"Local resolver relay (slide p.21).",zh:"本地 resolver 转发（课件 p.21）。",answerEn:"Resolver sends query to local DNS; local DNS fetches answer from hierarchy if not cached, then returns to client.",answerZh:"Resolver 向本地 DNS 发查询；本地 DNS 无缓存则向上查询，再返回客户端。",slide:"p.21"},{en:"SMTP role and port.",zh:"SMTP 角色与端口。",answerEn:"Push protocol for sending/transferring mail between MTAs; well-known port 25.",answerZh:"服务器间发送/转发邮件的推送协议；well-known 端口 25。",slide:"p.28"},{en:"IMAP vs POP3 — main difference.",zh:"IMAP vs POP3 主要区别。",answerEn:"IMAP keeps mail on server and syncs folders; POP3 typically downloads and may delete from server.",answerZh:"IMAP 邮件留服务器并同步文件夹；POP3 通常下载并可能从服务器删除。",slide:"p.44"},{en:"MIME purpose.",zh:"MIME 用途。",answerEn:"Extends email format to support non-ASCII text, attachments, and multimedia.",answerZh:"扩展邮件格式以支持非 ASCII 文本、附件和多媒体。",slide:"p.42"},{en:"CNAME record purpose.",zh:"CNAME 记录用途。",answerEn:"Alias — canonical name points one hostname to another hostname.",answerZh:"别名——将一个主机名指向另一个规范主机名。",slide:"p.16"}]},"wk8-udp":{summary:"Memorise transport services, UDP header, mux/demux, port ranges, and UDP trade-offs.",summaryZh:"默写传输层服务、UDP 首部、复用/解复用、端口范围与 UDP 权衡。",items:[{en:"Transport vs network layer scope.",zh:"传输层 vs 网络层范围。",answerEn:"Network = host-to-host; transport = process-to-process using ports.",answerZh:"网络层 = 主机到主机；传输层 = 用端口实现进程到进程。",slide:"p.8–9"},{en:"Well-known, registered, dynamic port ranges.",zh:"Well-known、registered、dynamic 端口范围。",answerEn:"0–1023 well-known; 1024–49151 registered; 49152–65535 dynamic/ephemeral.",answerZh:"0–1023 well-known；1024–49151 registered；49152–65535 dynamic/ephemeral。",slide:"p.15"},{en:"IANA port registry URL (slide p.15).",zh:"IANA 端口注册表 URL（课件 p.15）。",answerEn:"http://www.iana.org/assignments/port-numbers",answerZh:"http://www.iana.org/assignments/port-numbers",slide:"p.15"},{en:"UDP header fields (four main).",zh:"UDP 首部四个主要字段。",answerEn:"Source port, destination port, length, checksum.",answerZh:"源端口、目的端口、长度、校验和。",slide:"p.20"},{en:"UDP checksum — pseudo-header (slide p.20).",zh:"UDP 校验和——伪首部（课件 p.20）。",answerEn:"Checksum covers UDP segment plus pseudo-header (src/dst IP, protocol, length).",answerZh:"校验和覆盖 UDP 段加伪首部（源/目的 IP、协议、长度）。",slide:"p.20"},{en:"Multiplexing at sender.",zh:"发送端 multiplexing。",answerEn:"Gathering data from multiple application sockets and passing to network layer with proper headers.",answerZh:"从多个应用 socket 收集数据，加首部交给网络层。",slide:"p.13–14"},{en:"Demultiplexing at receiver.",zh:"接收端 demultiplexing。",answerEn:"Delivering incoming segments to correct socket using destination port (and IP for UDP).",answerZh:"用目的端口（UDP 还看 IP）将到达分段交给正确 socket。",slide:"p.13–14"},{en:"3-tuple vs 5-tuple (slide p.14).",zh:"3 元组 vs 5 元组（课件 p.14）。",answerEn:"Full address = 5-tuple (protocol, local IP, local port, remote IP, remote port); TCP listen/most UDP sockets use 3-tuple (local IP, local port).",answerZh:"完整地址 = 5 元组；TCP listen/多数 UDP socket 用 3 元组（本地 IP、本地端口）。",slide:"p.14"},{en:"UDP connectionless — meaning.",zh:"UDP 无连接的含义。",answerEn:"No handshake or connection state — each datagram is independent.",answerZh:"无握手或连接状态——每个 datagram 独立。",slide:"p.19"},{en:"When prefer UDP over TCP? (two cases).",zh:"何时选 UDP 而非 TCP？（两例）",answerEn:"Simple request-response (DNS) and real-time apps tolerating loss (VoIP).",answerZh:"简单请求-响应（DNS）与可容忍丢包的实时应用（VoIP）。",slide:"p.21"},{en:"UDP strengths and weaknesses (slide p.23).",zh:"UDP 优缺点（课件 p.23）。",answerEn:"Strengths: simple, low header overhead, no forced retransmission wait, multicast. Weaknesses: no flow/error/congestion control.",answerZh:"优点：简单、首部小、不强制等重传、支持 multicast。缺点：无流控/差错控制/拥塞控制。",slide:"p.23"},{en:"Memcached reflected DDoS attack (slide p.25).",zh:"Memcached 反射 DDoS（课件 p.25）。",answerEn:"Attacker spoofs victim IP; small UDP query triggers huge response to victim (amplification).",answerZh:"攻击者伪造受害者 IP；小 UDP 查询触发大响应打向受害者（放大攻击）。",slide:"p.25"}]},"wk8-http":{summary:"Memorise HTTP flow, methods, caching, URI vs URL, HTTPS, and HTTP/2.",summaryZh:"默写 HTTP 流程、方法、缓存、URI vs URL、HTTPS 与 HTTP/2。",items:[{en:"URI vs URL.",zh:"URI vs URL。",answerEn:"URI = identifier (includes URN like ISBN); URL = locator with access mechanism (http://…). All URLs are URIs.",answerZh:"URI = 标识符（含 URN 如 ISBN）；URL = 带访问机制的定位符（http://…）。所有 URL 都是 URI。",slide:"p.10"},{en:"Persistent vs non-persistent HTTP.",zh:"持久 vs 非持久 HTTP 连接。",answerEn:"Non-persistent = one object per TCP connection; persistent = multiple objects over same connection.",answerZh:"非持久 = 每个对象一条 TCP 连接；持久 = 同一连接传多个对象。",slide:"p.12–13"},{en:"HTTP 11-step flow — progressive display (slide p.15).",zh:"HTTP 11 步流程——渐进渲染（课件 p.15）。",answerEn:"DNS → TCP setup → HTTP request → response; browser renders progressively; repeat for embedded objects; may reuse persistent connection.",answerZh:"DNS → TCP 建立 → HTTP 请求 → 响应；HTML 边收边渲染；嵌入对象重复此流程；可复用持久连接。",slide:"p.15"},{en:"HTTP request line — GET example.",zh:"HTTP 请求行——GET 例子。",answerEn:"GET /path HTTP/1.1 — method, URI/path, HTTP version.",answerZh:"GET /path HTTP/1.1——方法、URI/路径、HTTP 版本。",slide:"p.18"},{en:"HTTP response status line format.",zh:"HTTP 响应状态行格式。",answerEn:"HTTP/version status-code reason-phrase (e.g. HTTP/1.1 200 OK).",answerZh:"HTTP/版本 状态码 原因短语（如 HTTP/1.1 200 OK）。",slide:"p.18"},{en:"Conditional GET — 304 Not Modified (slide p.19–22).",zh:"Conditional GET——304 Not Modified（课件 p.19–22）。",answerEn:"Client sends If-Modified-Since; if unchanged server returns 304 Not Modified with no body.",answerZh:"客户端发 If-Modified-Since；未修改则服务器回 304 Not Modified，无 body。",slide:"p.19–22"},{en:"HTTPS — port (slide p.23).",zh:"HTTPS 端口（课件 p.23）。",answerEn:"HTTPS uses port 443 (HTTP over TLS).",answerZh:"HTTPS 使用端口 443（HTTP 跑在 TLS 之上）。",slide:"p.23"},{en:"HTTP/2 main improvement — multiplexing (slide p.24).",zh:"HTTP/2 主要改进——多路复用（课件 p.24）。",answerEn:"Many streams multiplexed over one TCP connection; header compression.",answerZh:"单 TCP 连接上多路复用多条流；首部压缩。",slide:"p.24"},{en:"HTTP GET vs POST.",zh:"GET vs POST。",answerEn:"GET retrieves data (should be safe/idempotent); POST submits data and may change server state.",answerZh:"GET 获取数据（应安全/幂等）；POST 提交数据并可能改变服务器状态。",slide:"p.7"},{en:"SMTP success reply code example (slide p.21).",zh:"SMTP 成功应答码例子（课件 p.21）。",answerEn:"250 Message accepted for delivery.",answerZh:"250 Message accepted（接受投递）。",slide:"p.21"},{en:"HTTP is stateless — meaning.",zh:"HTTP 无状态的含义。",answerEn:"Server retains no information about past requests between connections.",answerZh:"服务器在连接间不保留过去请求的信息。",slide:"p.6"},{en:"Non-persistent HTTP cost.",zh:"非持久 HTTP 的开销。",answerEn:"Each object needs new TCP connection — at least 2 RTT per object (TCP setup + request/response).",answerZh:"每个对象需新 TCP 连接——每对象至少 2 RTT（TCP 建立 + 请求/响应）。",slide:"p.12–13"}]},"wk9-tcp":{summary:"Memorise TCP handshake, sequence/window, teardown, byte trace, and buffering trade-off.",summaryZh:"默写 TCP 握手、序号/窗口、关闭、字节追踪与缓冲权衡。",items:[{en:"TCP vs UDP — slide analogy.",zh:"TCP vs UDP——课件类比。",answerEn:"UDP is like text messages; TCP is like a phone call (connection-oriented, ongoing session).",answerZh:"UDP 像短信；TCP 像电话（面向连接、持续会话）。",slide:"p.2–3"},{en:"Three-way handshake — SYN bit patterns (slide p.22–28).",zh:"三次握手——SYN 位模式（课件 p.22–28）。",answerEn:"Client: SYN=1, ACK=0; Server: SYN=1, ACK=1; Client: ACK=1 — exchange initial sequence numbers.",answerZh:"Client: SYN=1, ACK=0；Server: SYN=1, ACK=1；Client: ACK=1——交换初始序号。",slide:"p.22–28"},{en:"TCP sequence number field purpose.",zh:"TCP 序号字段用途。",answerEn:"Byte offset in sender's byte stream — first data byte in segment.",answerZh:"发送方字节流中的字节偏移——段中第一个数据字节的序号。",slide:"p.10"},{en:"Receive window (rwnd) — meaning.",zh:"接收窗口（rwnd）含义。",answerEn:"Bytes the receiver is willing to accept — flow control limit on sender.",answerZh:"接收方愿意接收的字节数——对发送方的流量控制上限。",slide:"p.15"},{en:"Sliding window invariant (slide p.52).",zh:"滑动窗口不变式（课件 p.52）。",answerEn:"LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised.",answerZh:"LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised。",slide:"p.52"},{en:"ACK number meaning — cumulative.",zh:"ACK 号含义——累积确认。",answerEn:"Next byte sequence number the receiver expects (cumulative ACK).",answerZh:"接收方期望的下一个字节序号（累积确认）。",slide:"p.11"},{en:"Four-way connection teardown.",zh:"四次挥手关闭连接。",answerEn:"FIN → ACK → FIN → ACK (each direction closed separately).",answerZh:"FIN → ACK → FIN → ACK（每个方向单独关闭）。",slide:"p.30"},{en:"FIN retransmit behaviour (slide p.31).",zh:"FIN 重传行为（课件 p.31）。",answerEn:"Sender retransmits unacknowledged segments including FIN if ACK not received.",answerZh:"若收不到 ACK，发送方重传未确认段（包括 FIN）。",slide:"p.31"},{en:"RST vs FIN (slide p.32).",zh:"RST vs FIN（课件 p.32）。",answerEn:"FIN = orderly shutdown; RST = hard close — immediately terminate, no further listening.",answerZh:"FIN = 有序关闭；RST = 硬关闭——立即终止，不再监听。",slide:"p.32"},{en:"SYN segment consumes one sequence number?",zh:"SYN 段是否占用一个序号？",answerEn:"Yes — SYN counts as one byte in the sequence space.",answerZh:"是——SYN 在序号空间中占一个字节。",slide:"p.22–28"},{en:"Byte trace — ACK:11 Window:40 then WindowUpdate Window:50 (slide p.43–50).",zh:"字节追踪——ACK:11 Window:40 后 WindowUpdate Window:50（课件 p.43–50）。",answerEn:"After bytes 1–10 received: ACK:11, Window:40; after app reads 10 B: ACK:11, Window:50 (WindowUpdate).",answerZh:"收到 1–10 后：ACK:11, Window:40；应用读走 10 B 后：ACK:11, Window:50（WindowUpdate）。",slide:"p.43–50"},{en:"TCP buffering trade-off (slide p.13).",zh:"TCP 缓冲权衡（课件 p.13）。",answerEn:"Larger buffers reduce header overhead but increase delay.",answerZh:"更大缓冲减少首部开销但增加延迟。",slide:"p.13"}]},"wk9-protocol":{summary:"Memorise RPC, marshalling, stubs, protocol design questions, and TCP close recap.",summaryZh:"默写 RPC、marshalling、stub、协议设计问题与 TCP 关闭回顾。",items:[{en:"RPC definition.",zh:"RPC 定义。",answerEn:"Remote Procedure Call — invoke a procedure on a remote host as if it were local.",answerZh:"远程过程调用——像调用本地函数一样调用远程主机上的过程。",slide:"p.10"},{en:"Marshalling definition.",zh:"Marshalling 定义。",answerEn:"Convert in-memory data structures to a canonical byte stream for transmission (unmarshalling reverses).",answerZh:"将内存数据结构转换为规范字节流以便传输（unmarshalling 反向转换）。",slide:"p.11"},{en:"Client stub vs server stub roles.",zh:"Client stub vs server stub 角色。",answerEn:"Client stub marshals args, sends request, unmarshals result; server stub unmarshals args, calls procedure, marshals result.",answerZh:"Client stub：marshal 参数、发请求、unmarshal 结果；Server stub：unmarshal 参数、调用过程、marshal 结果。",slide:"p.11–12"},{en:"Protocol design — four core questions (slide p.9).",zh:"协议设计——四个核心问题（课件 p.9）。",answerEn:"(1) What does interaction look like? (2) What data to communicate? (3) What format? (4) How handle errors?",answerZh:"（1）交互模式？（2）传什么数据？（3）什么格式？（4）如何处理错误？",slide:"p.9"},{en:"RPC challenges — pointers and global variables (slide p.13).",zh:"RPC 挑战——指针与全局变量（课件 p.13）。",answerEn:"Pointers cannot be passed directly across address spaces; global variables are not shared between client and server.",answerZh:"指针不能跨地址空间直接传递；全局变量在客户端与服务器间不共享。",slide:"p.13"},{en:"Protocol deployment questions (slide p.22 exact).",zh:"协议部署问题（课件 p.22 原文）。",answerEn:"How finished before deploy? What happens on new spec release? How to test thoroughly before public release?",answerZh:"多成熟才能上线？新 spec 发布怎么办？公开发布前如何充分测试？",slide:"p.22"},{en:"TCP sync recap — SYN/ACK patterns (slide p.4–5).",zh:"TCP 同步回顾——SYN/ACK 模式（课件 p.4–5）。",answerEn:"Connection request: SYN=1, ACK=0; reply: SYN=1, ACK=1; third segment: ACK=1.",answerZh:"连接请求：SYN=1, ACK=0；回复：SYN=1, ACK=1；第三段：ACK=1。",slide:"p.4–5"},{en:"TCP close recap — FIN directional (slide p.4–5).",zh:"TCP 关闭回顾——FIN 方向性（课件 p.4–5）。",answerEn:"FIN closes one direction; other direction may still send data; typically 4 segments (FIN+ACK each way).",answerZh:"FIN 关闭一个方向；另一方向仍可发数据；通常 4 段（各向 FIN+ACK）。",slide:"p.4–5"},{en:"RST vs FIN recap (slide p.4–5).",zh:"RST vs FIN 回顾（课件 p.4–5）。",answerEn:"FIN = orderly shutdown; RST = hard close when invalid data, crash, or no open connection.",answerZh:"FIN = 有序关闭；RST = 无效数据、崩溃或无连接时的硬关闭。",slide:"p.4–5"},{en:"Cumulative ACK recap.",zh:"累积 ACK 回顾。",answerEn:"ACK number = next byte expected; does not advance past a gap even if later bytes arrived.",answerZh:"ACK 号 = 期望下一字节；中间有 gap 时不前进，即使后续字节已到。",slide:"p.4–5"},{en:"RPC — client thread suspended during call.",zh:"RPC——调用期间客户端线程。",answerEn:"Client thread is suspended while server executes; resumes when result returns.",answerZh:"客户端线程在服务器执行期间挂起；结果返回后恢复。",slide:"p.10"},{en:"Protocol design — start simple, iterate.",zh:"协议设计——从简开始迭代。",answerEn:"Begin with minimal functionality (e.g. one RPC function), then extend — do not lock API too early.",answerZh:"从最小功能开始（如单个 RPC 函数），再逐步扩展——不要过早锁定 API。",slide:"p.9"}]},"wk10-addressing":{summary:"Memorise CIDR, prefix exercises, longest match, switching, store-and-forward, and IPv6.",summaryZh:"默写 CIDR、前缀练习、最长匹配、交换、存储转发与 IPv6。",items:[{en:"IP address binds to what?",zh:"IP 地址绑定到什么？",answerEn:"An interface (host-router port), not the host as a whole.",answerZh:"接口（interface），而非整台主机。",slide:"p.6"},{en:"CIDR notation meaning.",zh:"CIDR 表示法含义。",answerEn:"a.b.c.d/x — x is prefix length (number of leading network bits).",answerZh:"a.b.c.d/x——x 为前缀长度（网络位前导位数）。",slide:"p.19"},{en:"Number of addresses in /n prefix.",zh:"/n 前缀有多少地址？",answerEn:"2^(32−n) addresses (IPv4).",answerZh:"2^(32−n) 个地址（IPv4）。",slide:"p.21"},{en:"Network vs broadcast vs host in a subnet.",zh:"子网中网络地址、广播地址与主机地址。",answerEn:"Network = all host bits 0; broadcast = all host bits 1; usable hosts between them.",answerZh:"网络地址 = 主机位全 0；广播 = 主机位全 1；可用主机在中间。",slide:"p.18"},{en:"Can you infer netmask from IP alone? (slide p.22)",zh:"能否单从 IP 推断 netmask？（课件 p.22）",answerEn:"No — netmask/prefix is configuration, not inherent in the address.",answerZh:"不能——掩码/前缀是配置信息，不是地址固有属性。",slide:"p.22"},{en:"128.250.73.5 prefix exercise (slide p.21–22).",zh:"128.250.73.5 前缀练习（课件 p.21–22）。",answerEn:"In /16 yes; in 128.250.0.0/24 no (use 128.250.73.0/24); in /17 yes; /17 has 2^15 = 32768 addresses.",answerZh:"在 /16 是；在 128.250.0.0/24 否（属 128.250.73.0/24）；在 /17 是；/17 有 2^15 = 32768 地址。",slide:"p.21–22"},{en:"Longest prefix match rule.",zh:"最长前缀匹配规则。",answerEn:"Router chooses forwarding entry with longest matching network prefix.",answerZh:"路由器选择匹配网络前缀最长的转发表项。",slide:"p.24"},{en:"Route aggregation benefit.",zh:"路由聚合好处。",answerEn:"One forwarding-table entry covers many networks — smaller tables, faster lookup.",answerZh:"一条转发表项覆盖多个网络——表更小、查找更快。",slide:"p.24"},{en:"Datagram vs virtual circuit network.",zh:"Datagram vs 虚电路网络。",answerEn:"Datagram = connectionless per-packet routing; VC = setup phase, fixed path, local VC numbers per hop.",answerZh:"Datagram = 无连接逐包路由；VC = 有建立阶段、固定路径、VC 号逐跳本地。",slide:"p.12"},{en:"Store-and-forward — five steps (slide p.9).",zh:"存储转发——五步（课件 p.9）。",answerEn:"(1) Host sends to router; (2) buffer on arrival, verify checksum; (3) store until out interface free; (4) forward to next router; (5) repeat.",answerZh:"（1）主机发到路由器；（2）到达缓冲、校验 checksum；（3）存到出接口空闲；（4）转发下一跳；（5）重复。",slide:"p.9"},{en:"Private address range 10.0.0.0/8.",zh:"私有地址 10.0.0.0/8 范围。",answerEn:"10.0.0.0 through 10.255.255.255.",answerZh:"10.0.0.0 至 10.255.255.255。",slide:"p.23"},{en:"IPv6 basics — 128-bit, hop limit, ::ffff, compression (slide p.26–28).",zh:"IPv6 基础——128 位、hop limit、::ffff、压缩（课件 p.26–28）。",answerEn:"128-bit addresses; hop limit like TTL; IPv4-mapped ::ffff:x.x.x.x; compress longest zero run (8000::123:4567:89AB:CDEF).",answerZh:"128 位地址；hop limit 同 TTL；IPv4-mapped ::ffff:x.x.x.x；压缩最长零段（8000::123:4567:89AB:CDEF）。",slide:"p.26–28"}]},"wk10-congestion":{summary:"Memorise rwnd vs cwnd, slow start, AIMD, fast retransmit, zero-window probe, and full trace.",summaryZh:"默写 rwnd vs cwnd、慢启动、AIMD、快重传、零窗口探测与完整 trace。",items:[{en:"rwnd vs cwnd — who sets each? (slide p.45)",zh:"rwnd vs cwnd——各由谁决定？（课件 p.45）",answerEn:"rwnd = receiver advertises (flow control); cwnd = sender infers from network (congestion control).",answerZh:"rwnd = 接收方通告（流量控制）；cwnd = 发送方根据网络推断（拥塞控制）。",slide:"p.45"},{en:"Effective send window formula.",zh:"有效发送窗口公式。",answerEn:"min(rwnd, cwnd) — unacknowledged data may not exceed this.",answerZh:"min(rwnd, cwnd)——未确认数据不得超过此值。",slide:"p.45"},{en:"Slow start — cwnd growth (slide p.46).",zh:"慢启动——cwnd 增长（课件 p.46）。",answerEn:"Increase cwnd by one MSS for each ACK received (exponential growth per RTT).",answerZh:"每收到一个 ACK，cwnd 增加一个 MSS（每 RTT 近似翻倍）。",slide:"p.46"},{en:"Congestion avoidance — cwnd growth (slide p.48).",zh:"拥塞避免——cwnd 增长（课件 p.48）。",answerEn:"Linear increase: add MSS per window of ACKs (additive increase).",answerZh:"线性增加：每窗口 ACK 增加 MSS（加法增长）。",slide:"p.48"},{en:"TCP Tahoe on loss (slide p.48).",zh:"TCP Tahoe 丢包时（课件 p.48）。",answerEn:"ssthresh = cwnd/2 before loss; cwnd = 1 MSS; restart slow start.",answerZh:"丢包前 cwnd 一半设为 ssthresh；cwnd = 1 MSS；重新慢启动。",slide:"p.48"},{en:"Fast retransmit trigger — 3 DupACKs (slide p.27).",zh:"快重传触发——3 个 DupACK（课件 p.27）。",answerEn:"Three duplicate ACKs for same sequence number — infer loss without waiting for timeout.",answerZh:"同一序号三个重复 ACK——不等超时就推断丢包。",slide:"p.27"},{en:"TCP Reno vs Tahoe on fast retransmit (slide p.50).",zh:"Reno vs Tahoe 快重传后（课件 p.50）。",answerEn:"Reno: halve cwnd and enter fast recovery; Tahoe: cwnd=1 MSS and restart slow start.",answerZh:"Reno：cwnd 减半并 fast recovery；Tahoe：cwnd=1 MSS 并重新慢启动。",slide:"p.50"},{en:"Zero window — URGENT data and probe (slide p.8).",zh:"零窗口——URGENT 数据与 probe（课件 p.8）。",answerEn:"When rwnd=0 sender stops data; may send URGENT data or zero-window probe to get new window.",answerZh:"rwnd=0 时发送方停发数据；可发 URGENT 数据或 zero-window probe 获取新窗口。",slide:"p.8"},{en:"Persist timer and ZeroWindowProbe.",zh:"Persist 定时器与 ZeroWindowProbe。",answerEn:"If window stays zero, persist timer fires → sender sends ZeroWindowProbe → receiver re-advertises rwnd.",answerZh:"窗口持续为零时 persist 定时器超时 → 发送 ZeroWindowProbe → 接收方重新通告 rwnd。",slide:"p.8"},{en:"Full trace — SYN:1 Window:50 through seg21 dupACK (slide p.23–41).",zh:"完整 trace——SYN:1 Window:50 到 seg21 dupACK（课件 p.23–41）。",answerEn:"Handshake Window:50 → send/receive → seg21 lost → DupACK:21 ×3 → fast retransmit → ACK:71 Window:0 → persist probe → Window:50 restored.",answerZh:"握手 Window:50 → 收发 → seg21 丢 → DupACK:21 三次 → 快重传 → ACK:71 Window:0 → persist probe → 窗口恢复 50。",slide:"p.23–41"},{en:"Pre-Jacobson TCP — only rwnd (slide p.44).",zh:"Jacobson 之前——仅 rwnd（课件 p.44）。",answerEn:"Before Jacobson, TCP used only rwnd for flow control — no cwnd; senders could not detect network congestion.",answerZh:"Jacobson 之前 TCP 仅用 rwnd 流控——无 cwnd；发送方无法感知网络拥塞。",slide:"p.44"},{en:"ssthresh role and DupACK meaning.",zh:"ssthresh 作用与 DupACK 含义。",answerEn:"ssthresh = threshold between slow start and congestion avoidance; DupACK = receiver repeats same ACK when out-of-order segment arrives.",answerZh:"ssthresh = 慢启动与拥塞避免之间的阈值；DupACK = 乱序段到达时接收方重复同一 ACK。",slide:"p.46–48"}]},"wk11-routing":{summary:"Memorise forwarding vs routing, link-state five steps, Dijkstra, flooding, and IPv6.",summaryZh:"默写转发 vs 路由、链路状态五步、Dijkstra、洪泛与 IPv6。",items:[{en:"Forwarding vs routing.",zh:"Forwarding vs routing。",answerEn:"Forwarding = data plane, move packet to next hop using table; routing = control plane, build the table.",answerZh:"Forwarding = 数据平面，查表转下一跳；routing = 控制平面，构建转发表。",slide:"p.8–10"},{en:"Link State Routing — five steps (slide p.42).",zh:"链路状态路由——五步（课件 p.42）。",answerEn:"(1) Discover neighbours; (2) set link costs; (3) construct link-state packet; (4) reliable flooding to all routers; (5) run Dijkstra locally.",answerZh:"（1）发现邻居；（2）设置链路代价；（3）构造链路状态包；（4）可靠洪泛到所有路由器；（5）本地运行 Dijkstra。",slide:"p.42"},{en:"OSPF — what is it?",zh:"OSPF 是什么？",answerEn:"Open Shortest Path First — most common link-state routing protocol (within a domain).",answerZh:"Open Shortest Path First——最常见的链路状态路由协议（域内）。",slide:"p.42+"},{en:"Dijkstra early termination condition (slide p.41).",zh:"Dijkstra 提前终止条件（课件 p.41）。",answerEn:"Stop when destination node has smallest tentative distance (e.g. D=10 is minimum).",answerZh:"当目的节点 tentative 距离最小时停止（如 D=10 已为最小）。",slide:"p.41"},{en:"Flooding — duplicate control (slide p.14).",zh:"Flooding 如何控制重复（课件 p.14）。",answerEn:"Sequence numbers / record seen packets — forward each packet at most once per link.",answerZh:"序号/记录已见分组——每条链路最多转发一次。",slide:"p.14"},{en:"IPv6 address length (slide p.2).",zh:"IPv6 地址长度（课件 p.2）。",answerEn:"128 bits.",answerZh:"128 位。",slide:"p.2"},{en:"IPv6 Hop limit field (slide p.3).",zh:"IPv6 Hop limit 字段（课件 p.3）。",answerEn:"Same role as IPv4 TTL — decremented each hop, drop at zero.",answerZh:"同 IPv4 TTL——每跳减 1，为零则丢弃。",slide:"p.3"},{en:"IPv4-mapped IPv6 address form (slide p.4).",zh:"IPv4-mapped IPv6 地址形式（课件 p.4）。",answerEn:"::ffff:192.31.2.46 — IPv4 embedded in low 32 bits.",answerZh:"::ffff:192.31.2.46——IPv4 嵌入低 32 位。",slide:"p.4"},{en:"Compress IPv6: 8000:0000:0000:0000:0123:4567:89AB:CDEF (slide p.4).",zh:"压缩 IPv6（课件 p.4）。",answerEn:"8000::123:4567:89AB:CDEF.",answerZh:"8000::123:4567:89AB:CDEF。",slide:"p.4"},{en:"Link-state packet contents.",zh:"链路状态包内容。",answerEn:"Router ID, sequence number, age, list of neighbours and costs.",answerZh:"路由器 ID、序号、age、邻居列表及代价。",slide:"p.42"},{en:"Static vs adaptive routing.",zh:"静态 vs 自适应路由。",answerEn:"Static = manually configured, does not adapt; adaptive = updates as topology changes.",answerZh:"静态 = 手工配置、不随拓扑变；自适应 = 拓扑变化时更新。",slide:"p.8"},{en:"Sink tree from shortest paths.",zh:"最短路径汇树。",answerEn:"Optimal routes from all routers to a destination form a sink tree (no loops).",answerZh:"所有路由器到同一目的的最优路由形成汇树（无环）。",slide:"p.10"}]},"wk11-control":{summary:"Memorise ARP, ICMP, DHCP, traceroute, data vs control plane, and MAC layer note.",summaryZh:"默写 ARP、ICMP、DHCP、traceroute、数据/控制平面与 MAC 层次说明。",items:[{en:"ARP purpose (slide p.16).",zh:"ARP 用途（课件 p.16）。",answerEn:"Resolve next-hop IP address to MAC address on a LAN.",answerZh:"在同一 LAN 上将下一跳 IP 解析为 MAC 地址。",slide:"p.16"},{en:"ARP request — broadcast or unicast?",zh:"ARP 请求是广播还是单播？",answerEn:"Broadcast on LAN — who has IP X? Target replies unicast.",answerZh:"LAN 上广播——谁有 IP X？目标单播回复。",slide:"p.16"},{en:"ARP cache (slide p.18).",zh:"ARP 缓存（课件 p.18）。",answerEn:"Resolved IP→MAC mappings cached temporarily; entries time out and must be refreshed.",answerZh:"IP→MAC 映射临时缓存；表项超时后须重新解析。",slide:"p.18"},{en:"ICMP purpose (slide p.6).",zh:"ICMP 用途（课件 p.6）。",answerEn:"Error reporting and network diagnostics between IP entities.",answerZh:"IP 实体间的差错报告与网络诊断。",slide:"p.6"},{en:"Traceroute — TTL mechanism (slide p.7).",zh:"Traceroute——TTL 机制（课件 p.7）。",answerEn:"Send packets with TTL=1,2,3…; each hop returns Time Exceeded; map path and RTTs.",answerZh:"发送 TTL=1,2,3… 的包；每跳返回 Time Exceeded；映射路径与 RTT。",slide:"p.7"},{en:"ICMP Time Exceeded — when sent?",zh:"ICMP Time Exceeded 何时发送？",answerEn:"When a router decrements TTL to zero (or reassembly timeout).",answerZh:"路由器将 TTL 减到零时（或重组超时时）。",slide:"p.7"},{en:"DHCP DISCOVER and OFFER (slide p.11–12).",zh:"DHCP DISCOVER 与 OFFER（课件 p.11–12）。",answerEn:"Client broadcasts DISCOVER; server replies OFFER with proposed IP address.",answerZh:"客户端广播 DISCOVER；服务器 OFFER 回复提议的 IP 地址。",slide:"p.11–12"},{en:"DHCP also provides gateway and DNS (slide p.12).",zh:"DHCP 还提供网关与 DNS（课件 p.12）。",answerEn:"Besides IP address, DHCP can assign default gateway and DNS server.",answerZh:"除 IP 地址外，DHCP 可分配默认网关和 DNS 服务器。",slide:"p.12"},{en:"DHCP — layer 7 control plane (slide p.13).",zh:"DHCP——第 7 层控制平面（课件 p.13）。",answerEn:"DHCP is an application-layer (Layer 7) control-plane protocol running over UDP.",answerZh:"DHCP 是跑在 UDP 之上的应用层（第 7 层）控制平面协议。",slide:"p.13"},{en:"Data plane vs control plane (slide p.4).",zh:"Data plane vs control plane（课件 p.4）。",answerEn:"Data plane forwards packets; control plane builds routing/forwarding state.",answerZh:"Data plane 转发分组；control plane 构建路由/转发状态。",slide:"p.4"},{en:"MAC address — layer note (slide p.15).",zh:"MAC 地址——层次说明（课件 p.15）。",answerEn:"Called physical address but works at data link layer, not physical layer.",answerZh:"虽叫 physical address，但工作在数据链路层，不在物理层。",slide:"p.15"},{en:"Ping — ICMP Echo (slide p.6) and default gateway (slide p.12).",zh:"Ping——ICMP Echo（课件 p.6）与默认网关（课件 p.12）。",answerEn:"Ping sends ICMP Echo Request; target replies Echo Reply. Default gateway = router for off-subnet destinations.",answerZh:"Ping 发 ICMP Echo Request；目标回 Echo Reply。默认网关 = 目的不在本地子网时的路由器。",slide:"p.6,12"}]},"wk12-nat":{summary:"Memorise NAT mechanism, RFC1918 ranges, limitations, debugging matrix, and tools.",summaryZh:"默写 NAT 机制、RFC1918 范围、局限、调试矩阵与工具。",items:[{en:"NAT main purpose.",zh:"NAT 主要目的。",answerEn:"Allow many private hosts to share one or few public IP addresses.",answerZh:"让多台私有主机共享一个或少数公网 IP。",slide:"p.4"},{en:"RFC1918 private ranges (three) (slide p.4–5).",zh:"RFC1918 三个私有地址范围（课件 p.4–5）。",answerEn:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",answerZh:"10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。",slide:"p.4–5"},{en:"NAT outbound — replace IP+port with table index (slide p.7).",zh:"NAT 出站——用表索引替换 IP+端口（课件 p.7）。",answerEn:"Replace private source IP with public IP; replace source port with NAT table entry index (stores original IP:port).",answerZh:"私有源 IP 换为公网 IP；源端口换为 NAT 表项索引（存原始 IP:port）。",slide:"p.7"},{en:"NAT — checksum recalculation (slide p.7).",zh:"NAT——校验和重算（课件 p.7）。",answerEn:"IP and TCP/UDP checksums must be recalculated after header fields change.",answerZh:"首部字段改变后须重新计算 IP 与 TCP/UDP 校验和。",slide:"p.7"},{en:"NAT is stateful — meaning.",zh:"NAT 有状态——含义。",answerEn:"NAT box maintains mapping table for active flows — inbound packets matched to entries.",answerZh:"NAT 设备维护活跃流的映射表——入站包须匹配表项。",slide:"p.7–8"},{en:"NAT is not a firewall (slide p.9).",zh:"NAT 不是防火墙（课件 p.9）。",answerEn:"NAT translates addresses; firewall filters by policy — NAT provides obscurity not full security.",answerZh:"NAT 做地址翻译；防火墙按策略过滤——NAT 仅提供隐蔽性而非完整安全。",slide:"p.9"},{en:"End-to-end connectivity break (slide p.8).",zh:"端到端连接性破坏（课件 p.8）。",answerEn:"Private hosts can receive inbound packets only after outbound flow created mapping (unless port forwarding).",answerZh:"私有主机只有出站流建立映射后才能收 inbound 包（除非端口转发）。",slide:"p.8"},{en:"Inbound connection to private host — NAT issue (slide p.8–9).",zh:"外部主动连内网主机——NAT 问题（课件 p.8–9）。",answerEn:"No mapping exists unless port forwarding or similar configured.",answerZh:"无映射表项除非配置端口转发等。",slide:"p.8–9"},{en:"Layered debugging — four guiding questions (slide p.13–16).",zh:"分层调试——四个引导问题（课件 p.13–16）。",answerEn:"(1) Which part of user experience failed? (2) What to ask colleagues? (3) What could fail at each location? (4) How to test each hypothesis?",answerZh:"（1）用户体验哪部分失败？（2）问同事什么？（3）各位置可能什么问题？（4）如何验证假设？",slide:"p.13–16"},{en:"ping works but TCP fails — likely layer?",zh:"ping 通但 TCP 失败——可能哪层？",answerEn:"Transport or application — IP works; check port/firewall/app.",answerZh:"传输或应用层——IP 可达；查端口/防火墙/应用。",slide:"p.13–16"},{en:"DNS resolves but HTTP fails — check what?",zh:"DNS 能解析但 HTTP 失败——查什么？",answerEn:"Application/transport — port 80/443 blocked, server down, or wrong Host header.",answerZh:"应用/传输——80/443 被挡、服务器宕机或 Host 头错误。",slide:"p.13–16"},{en:"Debug tools by function (slide p.16) and traceroute one hop.",zh:"按功能记调试工具（课件 p.16）与 traceroute 只走一跳。",answerEn:"Know tool functions (ping connectivity, traceroute path, dig DNS, curl HTTP) not every command name. One hop only → local gateway/first router.",answerZh:"记工具功能（ping 连通、traceroute 路径、dig DNS、curl HTTP），不背所有命令名。只走一跳 → 本地网关/第一跳路由器。",slide:"p.16"}]}},Rp={"wk1-os":{goal:"把 OS 看成硬件抽象和资源管理器，特别抓住 user mode、kernel mode、interrupt、system call 的边界。",goalEn:"See the OS as hardware abstraction + resource manager; nail the user/kernel, interrupt/syscall boundaries.",lab:"System call journey：按步骤观察 read() 从用户程序进入内核、等待设备中断、再返回用户态。",exam:["中断 vs 系统调用 Interrupt vs System call","kernel vs whole OS Kernel vs OS","为什么需要内存边界 Memory boundary"]},"wk2-process":{goal:"建立 process 是资源容器、thread 是执行流的心智模型。",goalEn:"Build the mental model: process = resource container, thread = execution flow.",lab:"Process/thread memory map：切换进程和线程，看 address space、stack、register、file descriptor 哪些共享。",exam:["process vs thread","fork 后父子进程行为 fork semantics","ready 与 blocked 的区别 ready vs blocked"]},"wk3-cpu":{goal:"从 timeline 和指标理解调度算法，而不是只背 FCFS/SJF/RR 名字。",goalEn:"Understand scheduling from timelines & metrics, not by memorising names.",lab:"Scheduling simulator：切换 FCFS、SJF、RR，自动生成 Gantt chart 和 waiting/turnaround/response time。",exam:["turnaround vs response time","preemptive vs non-preemptive","starvation 与 aging"]},"wk3-ipc":{goal:"看见 race condition 来自不同 interleaving，理解 mutual exclusion 为什么必须靠原子性。",goalEn:"See that races come from interleavings; mutual exclusion needs atomic primitives.",lab:"Race condition interleaving：点击两个线程的 read/modify/write 步骤，观察 lost update。",exam:["critical region vs mutual exclusion","busy waiting 的成本 Cost of busy waiting","TSL 的硬件原子性 TSL atomicity"]},"wk4-memory":{goal:"把 base/limit 的限制自然过渡到 paging，能手算 page number、offset、frame 和 physical address。",goalEn:"Bridge base/limit to paging; compute page/offset/frame/physical by hand.",lab:"Paging calculator：输入 logical address，立即算出地址翻译过程。",exam:["external vs internal fragmentation","logical vs physical address","TLB hit/miss"]},"wk5-security":{goal:"分清 confidentiality、integrity、authentication，以及 MAC、signature、certificate 的角色。",goalEn:"Separate confidentiality / integrity / authentication and the roles of MAC, signature, certificate.",lab:"Hybrid encryption flow：逐步看 session key、public key、certificate、MAC/signature 各自保护什么。",exam:["MAC vs digital signature","certificate 与 CA Certificate & CA","encrypt-then-MAC"]},"wk6-osi":{goal:"用 layering 和 encapsulation 组织所有网络知识。",goalEn:"Organise all networking knowledge around layering and encapsulation.",lab:"Encapsulation stack：从 HTTP message 到 TCP segment、IP packet、link frame 逐层加 header。",exam:["service vs protocol","OSI vs TCP/IP","end-to-end vs point-to-point"]},"wk7-sockets":{goal:"记住 socket 是应用和传输层的接口，server two sockets 是核心易错点。",goalEn:"Socket = app/transport interface; the server's two sockets is the key trap.",lab:"Socket lifecycle：client/server 两列按顺序点亮 primitives。",exam:["listening vs connected socket","bind/listen/accept/connect 顺序","blocking vs non-blocking"]},"wk7-dns":{goal:"把 DNS 理解为分层、可缓存的分布式数据库。",goalEn:"Treat DNS as a hierarchical, cacheable, distributed database.",lab:"DNS lookup path：local DNS、root、TLD、authoritative 逐步解析。",exam:["recursive vs iterative","A/MX/CNAME/NS record","SMTP vs IMAP"]},"wk8-udp":{goal:"理解 transport layer 的 process-to-process 角色，以及 UDP 简单但有用的原因。",goalEn:"Transport gives process-to-process delivery; UDP is minimal but powerful where it fits.",lab:"Mux/demux demo：segment 到达后按 port 分发给正确 socket。",exam:["transport vs network layer","UDP socket tuple","UDP 为什么适合 DNS/实时应用 Why UDP"]},"wk8-http":{goal:"把 HTTP 看成 request/response message protocol，重点抓连接、message format、headers、HTTPS、HTTP/2/3。",goalEn:"HTTP = request/response message protocol; connections, format, headers, HTTPS, HTTP/2-3.",lab:"HTTP request builder：选择 method、path、headers，生成原始请求报文。",exam:["persistent connection","request/response format","HTTP/2 与 HTTP/3 动机"]},"wk9-tcp":{goal:"掌握 reliable byte stream、sequence/ack、三次握手、四次挥手和 window。",goalEn:"Master reliable byte stream, seq/ack, 3-way handshake, 4-way close, window.",lab:"TCP handshake animation：SYN、SYN-ACK、ACK 和 sequence number 消耗。",exam:["SYN/FIN 是否消耗序列号","TCP 不保留消息边界 Byte stream","receive window 是谁维护的"]},"wk9-protocol":{goal:"协议设计必须同时定义 syntax、semantics、timing 和错误处理。",goalEn:"A protocol must define syntax, semantics, timing, and error handling together.",lab:"RPC marshalling cards：本地函数参数如何变成 bytes，再在远端恢复。",exam:["protocol 三要素 Three elements","marshalling/unmarshalling","RPC 为什么不能传 pointer"]},"wk10-addressing":{goal:"把 IP 地址看成 interface 的层次化地址；能算 CIDR、mask、host range。",goalEn:"IP addresses name interfaces; compute CIDR, mask, host range.",lab:"CIDR calculator：输入 IP/prefix 自动计算 network、mask、host count。",exam:["/24 与 /16 的大小","network address vs host address","datagram vs virtual circuit"]},"wk10-congestion":{goal:"区分 receive window 和 congestion window，理解 slow start、avoidance、loss response。",goalEn:"Tell rwnd from cwnd; understand slow start, avoidance, loss response.",lab:"CWND chart：调节 ssthresh 和 loss round，观察 Tahoe 风格窗口变化。",exam:["RWND vs CWND","slow start 为什么是指数增长","timeout vs fast retransmit"]},"wk11-routing":{goal:"分清 forwarding 和 routing，用 Dijkstra stepper 看 link state 如何形成路径。",goalEn:"Separate forwarding from routing; see link-state paths via a Dijkstra stepper.",lab:"Dijkstra stepper：每一步选择最小 tentative distance 并更新邻居。",exam:["forwarding vs routing","Dijkstra 不能处理负权 Negative weights","age 字段作用"]},"wk11-control":{goal:"理解 ARP、ICMP、traceroute 这些控制消息如何帮助网络运行和调试。",goalEn:"Understand how ARP, ICMP, traceroute support network operation and debugging.",lab:"Traceroute/ARP flow：用 TTL 和 ICMP 看路径发现过程。",exam:["ARP 的局域网范围 ARP scope","ICMP 不是传输层协议","traceroute 与 TTL"]},"wk12-nat":{goal:"NAT 是状态化的地址/端口转换；它缓解 IPv4 稀缺但破坏 end-to-end。",goalEn:"NAT is stateful address/port translation; eases IPv4 scarcity, breaks end-to-end.",lab:"NAT table simulator：发起连接生成公网端口映射，返回包按表转回内网主机。",exam:["NAT 不是防火墙 Not a firewall","私有地址不能公网路由","layering/end-to-end violation"]}},h1=[["OS abstraction","Process"],["Process","CPU scheduling"],["Process","IPC"],["IPC","Mutual exclusion"],["Process","Memory management"],["Memory management","Paging/TLB"],["Layering","Transport services"],["Transport services","UDP"],["Transport services","TCP"],["TCP","HTTP"],["TCP","Congestion control"],["Layering","IP addressing"],["IP addressing","Routing"],["Routing","Control plane"],["IP addressing","NAT"],["DNS","HTTP"],["Secure communication","HTTPS/TLS"]],p1=[{id:"OS abstraction",chapter:"wk1-os",group:"OS"},{id:"Process",chapter:"wk2-process",group:"OS"},{id:"CPU scheduling",chapter:"wk3-cpu",group:"OS"},{id:"IPC",chapter:"wk3-ipc",group:"OS"},{id:"Mutual exclusion",chapter:"wk3-ipc",group:"OS"},{id:"Memory management",chapter:"wk4-memory",group:"OS"},{id:"Paging/TLB",chapter:"wk4-memory",group:"OS"},{id:"Secure communication",chapter:"wk5-security",group:"Security"},{id:"Layering",chapter:"wk6-osi",group:"Network"},{id:"DNS",chapter:"wk7-dns",group:"Application"},{id:"Transport services",chapter:"wk8-udp",group:"Transport"},{id:"UDP",chapter:"wk8-udp",group:"Transport"},{id:"HTTP",chapter:"wk8-http",group:"Application"},{id:"TCP",chapter:"wk9-tcp",group:"Transport"},{id:"Congestion control",chapter:"wk10-congestion",group:"Transport"},{id:"IP addressing",chapter:"wk10-addressing",group:"Network"},{id:"Routing",chapter:"wk11-routing",group:"Network"},{id:"Control plane",chapter:"wk11-control",group:"Network"},{id:"NAT",chapter:"wk12-nat",group:"Network"},{id:"HTTPS/TLS",chapter:"wk5-security",group:"Security"}],j=(o,l,u,r)=>({question:o,options:l,answer:u,explain:r}),f1={"wk1-os":[j("System call 和 interrupt 最核心的区别是什么？",["system call 通常由程序主动请求服务；interrupt 通常由硬件或异步事件触发","interrupt 一定来自用户程序","system call 不会进入 kernel mode"],0,"两者都可能导致控制权进入内核，但触发来源和意图不同。"),j("Kernel mode 的权限更高主要是为了什么？",["允许直接执行特权指令和访问受保护资源","让普通应用运行更快","避免使用 stack"],0,"内核需要管理硬件和保护资源，因此必须有特权模式。"),j("Memory boundary 的直接目的是什么？",["防止进程随意访问其他进程或 OS 的内存","让 CPU cache 更大","让程序自动并行"],0,"边界和保护是多道程序安全运行的基础。")],"wk2-process":[j("Process 和 thread 的正确关系是？",["process 持有资源和地址空间，thread 是执行流","thread 持有独立地址空间，process 只是调度单位","process 和 thread 完全等价"],0,"线程通常共享同一进程的地址空间，但各自有 stack/register 等执行状态。"),j("Running process 等待磁盘 I/O 时通常会进入哪个状态？",["Blocked","Ready","Terminated"],0,"等待外部事件完成时不能继续运行，也不是已经 ready。"),j("fork 后父子进程的变量关系更接近哪一种？",["逻辑上各自拥有一份地址空间","完全共享所有变量","子进程不能访问代码段"],0,"现代系统可能用 copy-on-write，但语义上父子地址空间独立。")],"wk3-cpu":[j("Turnaround time 通常等于什么？",["完成时间 - 到达时间","第一次运行时间 - 到达时间","等待时间 - burst time"],0,"Response time 才关注第一次响应。"),j("Round Robin 的 time quantum 太小，最明显的问题是？",["context switch 开销变大","永远退化成 FCFS","无法抢占"],0,"时间片太小会频繁切换，吞吐下降。"),j("SJF 的主要风险是什么？",["长作业可能 starvation","一定比 RR 响应慢","无法计算 waiting time"],0,"短作业优先可能长期推迟长作业。")],"wk3-ipc":[j("Race condition 的根源是？",["共享状态被不同 interleaving 以非原子方式访问","程序使用了太多函数","CPU 速度太快"],0,"read-modify-write 这类序列如果可交错，就可能丢更新。"),j("Critical region 和 mutual exclusion 的关系是？",["critical region 是代码区域；mutual exclusion 是保护性质/机制","二者完全同义","mutual exclusion 只用于内存分页"],0,"一个是被保护的区域，一个是保护目标。"),j("为什么普通 lock variable 不够安全？",["检查和设置不是原子操作","变量不能放在内存中","锁只能用于一个进程"],0,"两个线程可能同时看到 unlocked，然后同时进入。")],"wk4-memory":[j("Paging 主要解决了 base/limit 的哪个问题？",["进程必须占用连续物理内存","CPU 无法执行加法","所有程序都必须使用同一 stack"],0,"分页允许逻辑页面映射到不连续的物理页框。"),j("Logical address 被分页系统拆成什么？",["page number 和 offset","base 和 limit","MAC 和 IP"],0,"page number 查页表，offset 在页内保持不变。"),j("TLB hit 时通常意味着什么？",["可以跳过慢的页表访问","一定发生 page fault","物理内存不存在该页"],0,"TLB 缓存最近的地址翻译。")],"wk5-security":[j("MAC 和 digital signature 最大区别之一是？",["MAC 使用共享密钥；签名使用私钥/公钥","MAC 只能加密图片","签名不能验证身份"],0,"MAC 双方共享 secret，签名能让持公钥者验证私钥持有者。"),j("Certificate 解决的核心问题是？",["把公钥和身份可信地绑定起来","让 HTTP 变成 UDP","替代所有加密算法"],0,"CA 对身份和公钥绑定做背书。"),j("Confidentiality 主要防止什么？",["未授权读取内容","消息被静默篡改","发送方否认发送"],0,"保密性关注内容不被看见；完整性和认证解决其他问题。")],"wk6-osi":[j("Service 和 protocol 的区别更接近哪项？",["service 是给上层提供什么；protocol 是同层实体如何通信","service 只用于物理层","protocol 是用户界面"],0,"这是分层模型中很常考的边界。"),j("Encapsulation 发生时通常会怎样？",["每层在数据前后加入自己的控制信息","每层删除所有 header","只有应用层处理 header"],0,"下传时逐层封装，上交时逐层解封装。"),j("IP narrow waist 的意义是？",["多种上层协议和下层技术通过 IP 汇合","IP 只能运行在一种链路上","IP 替代 TCP"],0,"窄腰让互联网可扩展。")],"wk7-sockets":[j("TCP server 为什么通常有两个 socket？",["一个 listening socket 接收连接，一个 connected socket 与特定 client 通信","一个 socket 只能读，另一个只能写","因为 UDP 要求两个 socket"],0,"accept 返回的 connected socket 代表具体连接。"),j("client 主动建立 TCP 连接通常调用什么？",["connect","listen","accept"],0,"listen/accept 是 server 侧。"),j("Blocking read 在没有数据时会怎样？",["等待直到数据到达或出错","立即返回所有未来数据","自动关闭 socket"],0,"阻塞语义是网络编程的核心行为。")],"wk7-dns":[j("Authoritative DNS server 的角色是？",["对某个 zone 的记录给出权威答案","只缓存浏览器历史","负责发送邮件正文"],0,"最终记录来源通常在 authoritative server。"),j("MX record 主要用于什么？",["指向处理该域邮件的 mail server","把名字映射到 IPv4 地址","表示别名"],0,"A 记录映射 IPv4，CNAME 是别名。"),j("IMAP 和 SMTP 的区别是？",["SMTP 主要发送/转发邮件；IMAP 主要读取/同步邮箱","IMAP 负责 DNS 查询","SMTP 只能传图片"],0,"邮件发送和读取是不同协议角色。")],"wk8-udp":[j("Transport layer 相比 network layer 多关注什么？",["process-to-process communication","单个链路上的电信号","显示网页样式"],0,"端口让传输层能把数据交给正确进程。"),j("UDP 的特点是？",["无连接、低开销、不保证可靠交付","必须三次握手","保证按序字节流"],0,"可靠按序字节流是 TCP 的特点。"),j("Demultiplexing 主要依靠什么？",["端口号和协议等 socket 标识","屏幕分辨率","文件扩展名"],0,"收到 segment 后根据头部字段交给正确 socket。")],"wk8-http":[j("HTTP 的基本交互模型是？",["request/response","peer-to-peer flooding","CPU interrupt only"],0,"客户端发请求，服务器回响应。"),j("Persistent connection 的主要收益是？",["复用 TCP 连接，减少重复握手开销","让 UDP 变可靠","完全取消 header"],0,"多个对象可以使用同一 TCP connection。"),j("HTTPS 和 HTTP 的关系更准确的是？",["HTTP over TLS，通常使用 443 端口","完全不使用 HTTP message format","HTTP over UDP 必然就是 HTTPS"],0,"课件重点是 HTTPS 是普通 HTTP 运行在 TLS 服务之上。")],"wk9-tcp":[j("TCP 为什么叫 byte stream？",["应用写入的消息边界不被 TCP 保留","TCP 只能发送一个 byte","TCP 不使用 sequence number"],0,"接收方看到的是有序字节流。"),j("SYN 是否消耗 sequence number？",["是","否","只在 UDP 中消耗"],0,"SYN 和 FIN 都会消耗一个序列号。"),j("Receive window 由谁通告？",["接收方","路由器","DNS server"],0,"它反映接收方还能接收多少数据。")],"wk9-protocol":[j("Protocol design 至少要定义什么？",["syntax、semantics、timing 等规则","只定义 UI 颜色","只定义文件名"],0,"消息格式、含义、时序都要明确。"),j("Marshalling 是什么？",["把参数/结构编码成可传输 bytes","把路由器关机","把 TCP 改成 UDP"],0,"RPC 调用必须把本地数据表示转成网络表示。"),j("RPC 为什么不能直接传 pointer？",["远端进程地址空间不同，指针值无意义","pointer 只能在 DNS 中使用","pointer 会自动变成 IP"],0,"地址只在本进程上下文内有意义。")],"wk10-addressing":[j("/24 和 /16 哪个网络通常容纳更多 host？",["/16","/24","一样多"],0,"prefix 越短，host bits 越多。"),j("IP 地址更准确地说分配给什么？",["interface","整台主机且只能一个","应用层 header"],0,"路由器有多个接口，也就有多个 IP。"),j("Route aggregation 的目的是什么？",["用更短前缀合并多条路由，缩小路由表","把所有包改成广播","隐藏 TCP header"],0,"层次化地址让聚合成为可能。")],"wk10-congestion":[j("CWND 和 RWND 的区别是？",["CWND 反映网络拥塞控制；RWND 反映接收方缓冲能力","二者完全相同","RWND 是 DNS 字段"],0,"实际可发送窗口受两者共同限制。"),j("Slow start 的增长形态是？",["指数增长","完全不增长","每小时增长一次"],0,"每个 RTT 大致翻倍，名字容易误导。"),j("3 个 duplicate ACK 常触发什么？",["fast retransmit","DNS cache flush","ARP broadcast"],0,"这强烈暗示中间某个 segment 丢失。")],"wk11-routing":[j("Forwarding 和 routing 的区别是？",["forwarding 是按表转发包；routing 是计算/维护路由表","routing 只发生在应用层","二者完全相同"],0,"一个是数据平面动作，一个是路径选择过程。"),j("Dijkstra 每一步选择什么节点？",["当前 tentative distance 最小的未确定节点","名字最长的节点","随机节点"],0,"贪心选择最小临时距离。"),j("Link state routing 中 age 字段常用于什么？",["让旧的链路状态信息过期","表示网页缓存时间","统计应用线程数"],0,"避免陈旧信息永久存在。")],"wk11-control":[j("ARP 主要解决什么？",["同一局域网内 IP 地址到 MAC 地址的映射","HTTP cookie 加密","TCP 拥塞窗口计算"],0,"ARP 工作在本地链路范围。"),j("Traceroute 为什么能发现路径？",["逐步增加 TTL 并接收 ICMP Time Exceeded","让 DNS 返回所有路由器","强制 NAT 打印表"],0,"每一跳 TTL 到 0 时通常返回 ICMP。"),j("ICMP 更接近什么？",["网络层控制/错误报告消息","传输层可靠字节流","应用层邮件协议"],0,"ICMP 支持诊断和错误报告。")],"wk12-nat":[j("NAT table 为什么必须维护状态？",["返回包需要根据公网端口映射回内部主机","为了渲染 HTML","为了计算 CPU waiting time"],0,"端口映射是连接状态的一部分。"),j("NAT 是否等价于 firewall？",["不是","是，完全一样","只在 IPv6 中一样"],0,"NAT 有一定屏蔽效果，但不是防火墙策略本身。"),j("私有地址为什么不能直接在公网通信？",["公网路由器不会全局路由这些地址","私有地址只能用于 UDP","私有地址没有二进制表示"],0,"RFC1918 地址在不同私网可重复使用。")]};function m1({chapter:o}){switch(o.lab){case"system-call":return d.jsx(sl,{title:"System call journey",steps:g1});case"process-thread":return d.jsx(P1,{});case"scheduling":return d.jsx(S1,{});case"race-condition":return d.jsx(w1,{});case"paging":return d.jsx(k1,{});case"crypto":return d.jsx(A1,{});case"encapsulation":return d.jsx(N1,{});case"sockets":return d.jsx(x1,{});case"dns":return d.jsx(sl,{title:"DNS lookup path",steps:y1});case"udp-demux":return d.jsx(R1,{});case"http":return d.jsx(D1,{});case"tcp-handshake":return d.jsx(sl,{title:"TCP three-way handshake",steps:T1});case"rpc":return d.jsx(E1,{});case"cidr":return d.jsx(M1,{});case"cwnd":return d.jsx(z1,{});case"dijkstra":return d.jsx(L1,{});case"control-plane":return d.jsx(sl,{title:"Traceroute and ARP flow",steps:v1});case"nat":return d.jsx(W1,{});default:return d.jsx("div",{className:"empty-panel",children:"这一章的互动实验还在排队。"})}}function sl({title:o,steps:l}){const[u,r]=Q.useState(0),h=l[u];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:o})]}),d.jsxs("div",{className:"step-count",children:[u+1,"/",l.length]})]}),d.jsx("div",{className:"stepper-track",children:l.map((m,f)=>d.jsx("button",{className:f===u?"step-dot active":"step-dot",onClick:()=>r(f),title:m.label,children:f+1},m.label))}),d.jsxs("div",{className:"lab-stage",children:[d.jsx("h4",{children:h.label}),d.jsx("p",{children:h.body}),d.jsx("code",{children:h.note})]}),d.jsxs("div",{className:"lab-actions",children:[d.jsx("button",{onClick:()=>r(Math.max(0,u-1)),children:"上一步"}),d.jsx("button",{onClick:()=>r(Math.min(l.length-1,u+1)),children:"下一步"})]})]})}const g1=[{label:"User code",body:"应用程序调用 read(fd, buf, n)，此时仍在 user mode。",note:"普通应用不能直接碰硬件。"},{label:"Trap",body:"CPU 通过 trap 切入 kernel mode，控制权交给 OS 的 system call handler。",note:"mode switch 发生在这里。"},{label:"Kernel work",body:"内核检查参数、权限和文件状态，必要时让进程 blocked 等待 I/O。",note:"blocked 不等于 terminated。"},{label:"Interrupt",body:"设备完成 I/O 后发出 interrupt，内核把数据放到合适缓冲区。",note:"interrupt 通常是异步事件。"},{label:"Return",body:"内核恢复进程上下文，返回 user mode，read 得到结果。",note:"用户代码继续执行。"}],y1=[{label:"Browser asks local DNS",body:"浏览器或 OS resolver 先问本地 DNS。",note:"缓存命中就可以直接返回。"},{label:"Root server",body:"本地 DNS 若无缓存，先问 root，得到 TLD server 线索。",note:"root 不保存所有主机 IP。"},{label:"TLD server",body:"TLD server 例如 .com 返回 authoritative server 线索。",note:"这是分层数据库。"},{label:"Authoritative server",body:"权威服务器返回 A/AAAA/CNAME/MX 等记录。",note:"最终权威答案来自这里。"},{label:"Cache and answer",body:"本地 DNS 按 TTL 缓存结果，再把答案返回给客户端。",note:"TTL 控制缓存有效期。"}],T1=[{label:"SYN",body:"Client 发送 SYN，选择初始 sequence number x。",note:"SYN 消耗 1 个序列号。"},{label:"SYN-ACK",body:"Server 回复 SYN-ACK，ack=x+1，并选择自己的 sequence number y。",note:"双方都同步初始序列号。"},{label:"ACK",body:"Client 回复 ACK，ack=y+1，连接进入 established。",note:"第三个 ACK 通常可携带数据。"},{label:"Byte stream",body:"之后 TCP 传输的是有序 byte stream，不保留应用消息边界。",note:"read 次数不一定等于 write 次数。"}],v1=[{label:"Need next hop MAC",body:"主机要发 IP packet 到下一跳，先检查 ARP cache。",note:"ARP 只在本地链路范围内解析。"},{label:"ARP request",body:"若无缓存，广播 Who has this IP?",note:"广播不会穿过路由器。"},{label:"ARP reply",body:"目标接口回复自己的 MAC，发送方缓存映射。",note:"之后 frame 用这个 MAC 发出。"},{label:"Traceroute TTL=1",body:"traceroute 从 TTL=1 开始发包，第一跳让 TTL 归零并回 ICMP。",note:"ICMP Time Exceeded 暴露这一跳。"},{label:"Increase TTL",body:"逐步增加 TTL，直到到达目标或停止。",note:"路径是一跳一跳探出来的。"}];function P1(){const[o,l]=Q.useState("process"),u=o==="process"?[["Address space","separate"],["Open files","can be inherited, then independent descriptors"],["Registers","separate"],["Stack","separate"],["Crash impact","usually isolated from other processes"]]:[["Address space","shared within the process"],["Open files","shared process resource"],["Registers","separate per thread"],["Stack","separate per thread"],["Crash impact","can bring down the process"]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Process vs thread map"})]}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{className:o==="process"?"active":"",onClick:()=>l("process"),children:"Process"}),d.jsx("button",{className:o==="thread"?"active":"",onClick:()=>l("thread"),children:"Thread"})]})]}),d.jsx("div",{className:"memory-map",children:u.map(([r,h])=>d.jsxs("div",{className:"memory-row",children:[d.jsx("span",{children:r}),d.jsx("strong",{children:h})]},r))})]})}function S1(){const[o,l]=Q.useState("RR"),[u,r]=Q.useState(2),h=[{id:"P1",arrival:0,burst:5},{id:"P2",arrival:1,burst:3},{id:"P3",arrival:2,burst:8},{id:"P4",arrival:3,burst:6}],m=Q.useMemo(()=>C1(h,o,u),[o,u]);return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"CPU scheduling simulator"})]}),d.jsx("div",{className:"segmented",children:["FCFS","SJF","RR"].map(f=>d.jsx("button",{className:o===f?"active":"",onClick:()=>l(f),children:f},f))})]}),o==="RR"&&d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"Quantum"}),d.jsx("input",{type:"range",min:"1",max:"5",value:u,onChange:f=>r(Number(f.target.value))}),d.jsx("strong",{children:u})]}),d.jsx("div",{className:"process-grid",children:h.map(f=>d.jsxs("div",{children:[d.jsx("strong",{children:f.id}),d.jsxs("span",{children:["arr ",f.arrival]}),d.jsxs("span",{children:["burst ",f.burst]})]},f.id))}),d.jsx("div",{className:"gantt",children:m.segments.map((f,A)=>d.jsxs("div",{className:`gantt-bar tone-${f.id}`,style:{flexGrow:f.end-f.start},title:`${f.id}: ${f.start}-${f.end}`,children:[d.jsx("span",{children:f.id}),d.jsxs("small",{children:[f.start,"-",f.end]})]},`${f.id}-${f.start}-${A}`))}),d.jsx("div",{className:"metric-grid",children:m.metrics.map(f=>d.jsxs("div",{children:[d.jsx("strong",{children:f.id}),d.jsxs("span",{children:["wait ",f.waiting]}),d.jsxs("span",{children:["turn ",f.turnaround]}),d.jsxs("span",{children:["resp ",f.response]})]},f.id))})]})}function C1(o,l,u){if(l==="RR")return b1(o,u);const r=[...o].sort((f,A)=>f.arrival-A.arrival||f.id.localeCompare(A.id)),h=[];let m=0;for(;r.length;){const f=r.filter(g=>g.arrival<=m);let A;f.length===0?(A=r[0],m=A.arrival):l==="SJF"?A=f.sort((g,T)=>g.burst-T.burst||g.arrival-T.arrival)[0]:A=f[0],h.push({id:A.id,start:m,end:m+A.burst}),m+=A.burst,r.splice(r.findIndex(g=>g.id===A.id),1)}return Dp(o,h)}function b1(o,l){const u=o.map(g=>({...g,remaining:g.burst})),r=[],h=[];let m=0,f=0;const A=[...u].sort((g,T)=>g.arrival-T.arrival);for(;h.length||f<A.length;){for(;f<A.length&&A[f].arrival<=m;)h.push(A[f]),f+=1;if(!h.length){m=A[f].arrival;continue}const g=h.shift(),T=Math.min(l,g.remaining);for(r.push({id:g.id,start:m,end:m+T}),m+=T,g.remaining-=T;f<A.length&&A[f].arrival<=m;)h.push(A[f]),f+=1;g.remaining>0&&h.push(g)}return Dp(o,r)}function Dp(o,l){const u=o.map(r=>{const h=l.filter(g=>g.id===r.id),m=Math.max(...h.map(g=>g.end)),f=Math.min(...h.map(g=>g.start)),A=m-r.arrival;return{id:r.id,waiting:A-r.burst,turnaround:A,response:f-r.arrival}});return{segments:l,metrics:u}}function w1(){const[o,l]=Q.useState(0),[u,r]=Q.useState({A:null,B:null}),[h,m]=Q.useState([]);function f(T){r(R=>({...R,[T]:o})),m(R=>[`${T}: read ${o}`,...R].slice(0,5))}function A(T){if(u[T]===null)return;const R=u[T]+1;l(R),m(M=>[`${T}: write ${R}`,...M].slice(0,5))}function g(){l(0),r({A:null,B:null}),m([])}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Race condition interleaving"})]}),d.jsx("button",{onClick:g,children:"Reset"})]}),d.jsxs("div",{className:"counter-display",children:["shared counter = ",o]}),d.jsx("div",{className:"thread-grid",children:["A","B"].map(T=>d.jsxs("div",{children:[d.jsxs("h4",{children:["Thread ",T]}),d.jsxs("p",{children:["local = ",u[T]===null?"empty":u[T]]}),d.jsx("button",{onClick:()=>f(T),children:"Read"}),d.jsx("button",{onClick:()=>A(T),children:"Write +1"})]},T))}),d.jsx("ol",{className:"log-list",children:h.map((T,R)=>d.jsx("li",{children:T},`${T}-${R}`))})]})}function k1(){const[o,l]=Q.useState(2148),u=1024,r={0:5,1:9,2:1,3:7},h=Math.floor(o/u),m=o%u,f=r[h],A=f===void 0?null:f*u+m;return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Paging calculator"})]}),d.jsxs("code",{children:["page size = ",u," B"]})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Logical address"}),d.jsx("input",{type:"number",min:"0",max:"4095",value:o,onChange:g=>l(Number(g.target.value))})]}),d.jsxs("div",{className:"translation-grid",children:[d.jsxs("div",{children:[d.jsx("span",{children:"page number"}),d.jsx("strong",{children:h})]}),d.jsxs("div",{children:[d.jsx("span",{children:"offset"}),d.jsx("strong",{children:m})]}),d.jsxs("div",{children:[d.jsx("span",{children:"frame"}),d.jsx("strong",{children:f??"page fault"})]}),d.jsxs("div",{children:[d.jsx("span",{children:"physical address"}),d.jsx("strong",{children:A??"not resident"})]})]}),d.jsx("div",{className:"page-table",children:Object.entries(r).map(([g,T])=>d.jsxs("div",{className:Number(g)===h?"active":"",children:["page ",g," ","->"," frame ",T]},g))})]})}function A1(){const[o,l]=Q.useState(0),u=[["Certificate","Browser checks the server certificate and learns the real server public key."],["Session key","Client creates a fast symmetric session key for this connection."],["Key exchange","Public-key crypto protects the session key during setup."],["Encrypted data","Bulk data uses symmetric encryption for confidentiality."],["Integrity/auth","MAC or AEAD detects tampering; signatures/certificates support authentication."]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Hybrid encryption flow"})]}),d.jsxs("div",{className:"step-count",children:[o+1,"/",u.length]})]}),d.jsx("div",{className:"crypto-flow",children:u.map(([r],h)=>d.jsx("button",{className:h===o?"active":"",onClick:()=>l(h),children:r},r))}),d.jsxs("div",{className:"lab-stage",children:[d.jsx("h4",{children:u[o][0]}),d.jsx("p",{children:u[o][1]})]})]})}function N1(){const[o,l]=Q.useState(4),u=[["Application","HTTP message","GET /index.html"],["Transport","TCP segment","TCP hdr | HTTP message"],["Network","IP packet","IP hdr | TCP hdr | HTTP message"],["Link","Frame","ETH hdr | IP hdr | TCP hdr | HTTP message | FCS"]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Encapsulation stack"})]}),d.jsx("input",{type:"range",min:"1",max:"4",value:o,onChange:r=>l(Number(r.target.value))})]}),d.jsx("div",{className:"stack-view",children:u.slice(0,o).map(([r,h,m])=>d.jsxs("div",{children:[d.jsx("strong",{children:r}),d.jsx("span",{children:h}),d.jsx("code",{children:m})]},r))})]})}function x1(){const[o,l]=Q.useState(0),u=["socket()","bind()","listen()","accept()","read()/write()","close()"];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Server socket lifecycle"})]}),d.jsx("button",{onClick:()=>l((o+1)%u.length),children:"Next"})]}),d.jsxs("div",{className:"socket-columns",children:[d.jsxs("div",{children:[d.jsx("h4",{children:"Listening socket"}),u.slice(0,4).map((r,h)=>d.jsx("span",{className:h<=o?"active":"",children:r},r))]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Connected socket"}),["created by accept()","read()/write()","close()"].map((r,h)=>d.jsx("span",{className:o>=h+3?"active":"",children:r},r))]})]})]})}function R1(){const[o,l]=Q.useState(53),u=[{port:53,app:"DNS resolver"},{port:123,app:"NTP client"},{port:5004,app:"RTP media app"}],r=u.find(h=>h.port===Number(o));return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"UDP demultiplexing"})]}),d.jsx("select",{value:o,onChange:h=>l(Number(h.target.value)),children:u.map(h=>d.jsxs("option",{value:h.port,children:["port ",h.port]},h.port))})]}),d.jsxs("div",{className:"packet-box",children:["UDP segment: src 62000 ","->"," dst ",o]}),d.jsx("div",{className:"socket-list",children:u.map(h=>d.jsxs("div",{className:h.port===Number(o)?"active":"",children:[d.jsx("strong",{children:h.app}),d.jsxs("span",{children:["listening on ",h.port]})]},h.port))}),d.jsxs("p",{className:"lab-note",children:["Delivered to: ",d.jsx("strong",{children:r?.app})]})]})}function D1(){const[o,l]=Q.useState("GET"),[u,r]=Q.useState("/index.html"),[h,m]=Q.useState("example.com"),[f,A]=Q.useState(!0),g=`${o} ${u} HTTP/1.1
Host: ${h}
Accept: text/html${f?`
Cookie: sid=abc123`:""}

`;return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"HTTP request builder"})]}),d.jsx("select",{value:o,onChange:T=>l(T.target.value),children:["GET","POST","PUT","DELETE"].map(T=>d.jsx("option",{children:T},T))})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Path"}),d.jsx("input",{value:u,onChange:T=>r(T.target.value)})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Host"}),d.jsx("input",{value:h,onChange:T=>m(T.target.value)})]}),d.jsxs("label",{className:"check-row",children:[d.jsx("input",{type:"checkbox",checked:f,onChange:T=>A(T.target.checked)})," Cookie"]}),d.jsx("pre",{className:"request-box",children:g})]})}function E1(){const[o,l]=Q.useState("add(7, 5)");return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"RPC marshalling"})]})}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Call"}),d.jsx("input",{value:o,onChange:u=>l(u.target.value)})]}),d.jsxs("div",{className:"rpc-flow",children:[d.jsxs("div",{children:[d.jsx("strong",{children:"Client stub"}),d.jsx("span",{children:o})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Bytes on network"}),d.jsx("code",{children:I1(o)})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Server stub"}),d.jsx("span",{children:"unmarshal and execute"})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Reply"}),d.jsx("span",{children:"result encoded back to client"})]})]})]})}function I1(o){return Array.from(o).map(l=>l.charCodeAt(0).toString(16).padStart(2,"0")).join(" ")}function M1(){const[o,l]=Q.useState("192.168.10.42"),[u,r]=Q.useState(24),h=Q.useMemo(()=>U1(o,u),[o,u]);return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"CIDR calculator"})]})}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"IP"}),d.jsx("input",{value:o,onChange:m=>l(m.target.value)})]}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"Prefix"}),d.jsx("input",{type:"range",min:"8",max:"30",value:u,onChange:m=>r(Number(m.target.value))}),d.jsxs("strong",{children:["/",u]})]}),d.jsxs("div",{className:"translation-grid",children:[d.jsxs("div",{children:[d.jsx("span",{children:"mask"}),d.jsx("strong",{children:h.mask})]}),d.jsxs("div",{children:[d.jsx("span",{children:"network"}),d.jsx("strong",{children:h.network})]}),d.jsxs("div",{children:[d.jsx("span",{children:"broadcast"}),d.jsx("strong",{children:h.broadcast})]}),d.jsxs("div",{children:[d.jsx("span",{children:"usable hosts"}),d.jsx("strong",{children:h.hosts})]})]})]})}function U1(o,l){const u=H1(o);if(u===null)return{mask:"invalid",network:"invalid",broadcast:"invalid",hosts:"invalid"};const r=l===0?0:4294967295<<32-l>>>0,h=(u&r)>>>0,m=(h|~r>>>0)>>>0,f=l>=31?2**(32-l):Math.max(0,2**(32-l)-2);return{mask:Wo(r),network:Wo(h),broadcast:Wo(m),hosts:f}}function H1(o){const l=o.split(".").map(Number);return l.length!==4||l.some(u=>!Number.isInteger(u)||u<0||u>255)?null:l.reduce((u,r)=>(u<<8)+r>>>0,0)}function Wo(o){return[24,16,8,0].map(l=>o>>>l&255).join(".")}function z1(){const[o,l]=Q.useState(8),[u,r]=Q.useState(7),h=Q.useMemo(()=>O1(o,u),[o,u]),m=Math.max(...h.map(f=>f.cwnd),1);return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Congestion window chart"})]})}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"ssthresh"}),d.jsx("input",{type:"range",min:"4",max:"16",value:o,onChange:f=>l(Number(f.target.value))}),d.jsx("strong",{children:o})]}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"loss round"}),d.jsx("input",{type:"range",min:"3",max:"12",value:u,onChange:f=>r(Number(f.target.value))}),d.jsx("strong",{children:u})]}),d.jsx("div",{className:"bar-chart",children:h.map(f=>d.jsxs("div",{className:f.loss?"loss":"",children:[d.jsx("span",{style:{height:`${f.cwnd/m*100}%`}}),d.jsx("small",{children:f.round})]},f.round))}),d.jsx("p",{className:"lab-note",children:"当前模型：Tahoe 风格，loss 后 ssthresh = cwnd / 2，并重新 slow start。"})]})}function O1(o,l){const u=[];let r=1,h=o;for(let m=1;m<=12;m+=1)u.push({round:m,cwnd:r,loss:m===l}),m===l?(h=Math.max(1,Math.floor(r/2)),r=1):r<h?r*=2:r+=1;return u}function L1(){const o={A:{B:2,C:5},B:{A:2,C:1,D:4},C:{A:5,B:1,D:1,E:7},D:{B:4,C:1,E:3},E:{C:7,D:3}},[l,u]=Q.useState(()=>gp(o)),r=B1(o,l);function h(){if(!r)return;const m={settled:[...l.settled,r],dist:{...l.dist},prev:{...l.prev},last:r};Object.entries(o[r]).forEach(([f,A])=>{if(m.settled.includes(f))return;const g=m.dist[r]+A;g<m.dist[f]&&(m.dist[f]=g,m.prev[f]=r)}),u(m)}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Dijkstra stepper"})]}),d.jsxs("div",{className:"lab-actions compact",children:[d.jsx("button",{onClick:()=>u(gp(o)),children:"Reset"}),d.jsx("button",{onClick:h,disabled:!r,children:"Step"})]})]}),d.jsx("div",{className:"node-grid",children:Object.keys(o).map(m=>d.jsxs("div",{className:l.settled.includes(m)?"settled":r===m?"candidate":"",children:[d.jsx("strong",{children:m}),d.jsx("span",{children:l.dist[m]===1/0?"inf":l.dist[m]}),d.jsxs("small",{children:["prev ",l.prev[m]||"-"]})]},m))}),d.jsxs("p",{className:"lab-note",children:["Next: ",d.jsx("strong",{children:r||"done"})]})]})}function gp(o){return{settled:[],dist:Object.fromEntries(Object.keys(o).map(l=>[l,l==="A"?0:1/0])),prev:{},last:null}}function B1(o,l){return Object.keys(o).filter(u=>!l.settled.includes(u)).sort((u,r)=>l.dist[u]-l.dist[r]||u.localeCompare(r))[0]}function W1(){const[o,l]=Q.useState("192.168.0.10"),[u,r]=Q.useState([{inside:"192.168.0.10:51510",outside:"203.0.113.5:40001",remote:"142.250.66.78:443"}]);function h(){const m=40001+u.length;r([...u,{inside:`${o}:${51510+u.length}`,outside:`203.0.113.5:${m}`,remote:"93.184.216.34:443"}])}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"NAT table simulator"})]}),d.jsx("button",{onClick:h,children:"New flow"})]}),d.jsxs("select",{value:o,onChange:m=>l(m.target.value),children:[d.jsx("option",{children:"192.168.0.10"}),d.jsx("option",{children:"192.168.0.11"}),d.jsx("option",{children:"192.168.0.25"})]}),d.jsxs("div",{className:"nat-table",children:[d.jsx("div",{className:"header",children:"Inside"}),d.jsx("div",{className:"header",children:"Public mapping"}),d.jsx("div",{className:"header",children:"Remote"}),u.flatMap(m=>[d.jsx("div",{children:m.inside},`${m.inside}-i`),d.jsx("div",{children:m.outside},`${m.inside}-o`),d.jsx("div",{children:m.remote},`${m.inside}-r`)])]}),d.jsx("p",{className:"lab-note",children:"返回包命中 public port 后，NAT 才知道该转回哪台内网主机。"})]})}function Go(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var na=Go();function Ep(o){na=o}var $t={exec:()=>null};function le(o,l=""){let u=typeof o=="string"?o:o.source,r={replace:(h,m)=>{let f=typeof m=="string"?m:m.source;return f=f.replace(Ye.caret,"$1"),u=u.replace(h,f),r},getRegex:()=>new RegExp(u,l)};return r}var j1=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:o=>new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}#`),htmlBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}>`)},K1=/^(?:[ \t]*(?:\n|$))+/,Z1=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_1=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,q1=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ip=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Mp=le(Ip).replace(/bull/g,Xo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),F1=le(Ip).replace(/bull/g,Xo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Vo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Q1=/^[^\n]+/,Jo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Y1=le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Jo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),G1=le(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Xo).getRegex(),hl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$o=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,X1=le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",$o).replace("tag",hl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Up=le(Vo).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hl).getRegex(),V1=le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Up).getRegex(),ec={blockquote:V1,code:Z1,def:Y1,fences:_1,heading:q1,hr:Wi,html:X1,lheading:Mp,list:G1,newline:K1,paragraph:Up,table:$t,text:Q1},yp=le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hl).getRegex(),J1={...ec,lheading:F1,table:yp,paragraph:le(Vo).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",yp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hl).getRegex()},$1={...ec,html:le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$o).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$t,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:le(Vo).replace("hr",Wi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Mp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ey=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ny=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hp=/^( {2,}|\\)\n(?!\s*$)/,ty=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ja=/[\p{P}\p{S}]/u,pl=/[\s\p{P}\p{S}]/u,nc=/[^\s\p{P}\p{S}]/u,ay=le(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,pl).getRegex(),zp=/(?!~)[\p{P}\p{S}]/u,iy=/(?!~)[\s\p{P}\p{S}]/u,sy=/(?:[^\s\p{P}\p{S}]|~)/u,ly=le(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",j1?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Op=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ry=le(Op,"u").replace(/punct/g,ja).getRegex(),oy=le(Op,"u").replace(/punct/g,zp).getRegex(),Lp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",cy=le(Lp,"gu").replace(/notPunctSpace/g,nc).replace(/punctSpace/g,pl).replace(/punct/g,ja).getRegex(),uy=le(Lp,"gu").replace(/notPunctSpace/g,sy).replace(/punctSpace/g,iy).replace(/punct/g,zp).getRegex(),dy=le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nc).replace(/punctSpace/g,pl).replace(/punct/g,ja).getRegex(),hy=le(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,ja).getRegex(),py="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",fy=le(py,"gu").replace(/notPunctSpace/g,nc).replace(/punctSpace/g,pl).replace(/punct/g,ja).getRegex(),my=le(/\\(punct)/,"gu").replace(/punct/g,ja).getRegex(),gy=le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),yy=le($o).replace("(?:-->|$)","-->").getRegex(),Ty=le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",yy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ol=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,vy=le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ol).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Bp=le(/^!?\[(label)\]\[(ref)\]/).replace("label",ol).replace("ref",Jo).getRegex(),Wp=le(/^!?\[(ref)\](?:\[\])?/).replace("ref",Jo).getRegex(),Py=le("reflink|nolink(?!\\()","g").replace("reflink",Bp).replace("nolink",Wp).getRegex(),Tp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,tc={_backpedal:$t,anyPunctuation:my,autolink:gy,blockSkip:ly,br:Hp,code:ny,del:$t,delLDelim:$t,delRDelim:$t,emStrongLDelim:ry,emStrongRDelimAst:cy,emStrongRDelimUnd:dy,escape:ey,link:vy,nolink:Wp,punctuation:ay,reflink:Bp,reflinkSearch:Py,tag:Ty,text:ty,url:$t},Sy={...tc,link:le(/^!?\[(label)\]\((.*?)\)/).replace("label",ol).getRegex(),reflink:le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ol).getRegex()},Zo={...tc,emStrongRDelimAst:uy,emStrongLDelim:oy,delLDelim:hy,delRDelim:fy,url:le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Tp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Tp).getRegex()},Cy={...Zo,br:le(Hp).replace("{2,}","*").getRegex(),text:le(Zo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ll={normal:ec,gfm:J1,pedantic:$1},Oi={normal:tc,gfm:Zo,breaks:Cy,pedantic:Sy},by={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vp=o=>by[o];function Wn(o,l){if(l){if(Ye.escapeTest.test(o))return o.replace(Ye.escapeReplace,vp)}else if(Ye.escapeTestNoEncode.test(o))return o.replace(Ye.escapeReplaceNoEncode,vp);return o}function Pp(o){try{o=encodeURI(o).replace(Ye.percentDecode,"%")}catch{return null}return o}function Sp(o,l){let u=o.replace(Ye.findPipe,(m,f,A)=>{let g=!1,T=f;for(;--T>=0&&A[T]==="\\";)g=!g;return g?"|":" |"}),r=u.split(Ye.splitPipe),h=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),l)if(r.length>l)r.splice(l);else for(;r.length<l;)r.push("");for(;h<r.length;h++)r[h]=r[h].trim().replace(Ye.slashPipe,"|");return r}function Li(o,l,u){let r=o.length;if(r===0)return"";let h=0;for(;h<r&&o.charAt(r-h-1)===l;)h++;return o.slice(0,r-h)}function wy(o,l){if(o.indexOf(l[1])===-1)return-1;let u=0;for(let r=0;r<o.length;r++)if(o[r]==="\\")r++;else if(o[r]===l[0])u++;else if(o[r]===l[1]&&(u--,u<0))return r;return u>0?-2:-1}function ky(o,l=0){let u=l,r="";for(let h of o)if(h==="	"){let m=4-u%4;r+=" ".repeat(m),u+=m}else r+=h,u++;return r}function Cp(o,l,u,r,h){let m=l.href,f=l.title||null,A=o[1].replace(h.other.outputLinkReplace,"$1");r.state.inLink=!0;let g={type:o[0].charAt(0)==="!"?"image":"link",raw:u,href:m,title:f,text:A,tokens:r.inlineTokens(A)};return r.state.inLink=!1,g}function Ay(o,l,u){let r=o.match(u.other.indentCodeCompensation);if(r===null)return l;let h=r[1];return l.split(`
`).map(m=>{let f=m.match(u.other.beginningSpace);if(f===null)return m;let[A]=f;return A.length>=h.length?m.slice(h.length):m}).join(`
`)}var cl=class{options;rules;lexer;constructor(o){this.options=o||na}space(o){let l=this.rules.block.newline.exec(o);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(o){let l=this.rules.block.code.exec(o);if(l){let u=l[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:l[0],codeBlockStyle:"indented",text:this.options.pedantic?u:Li(u,`
`)}}}fences(o){let l=this.rules.block.fences.exec(o);if(l){let u=l[0],r=Ay(u,l[3]||"",this.rules);return{type:"code",raw:u,lang:l[2]?l[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):l[2],text:r}}}heading(o){let l=this.rules.block.heading.exec(o);if(l){let u=l[2].trim();if(this.rules.other.endingHash.test(u)){let r=Li(u,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(u=r.trim())}return{type:"heading",raw:l[0],depth:l[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(o){let l=this.rules.block.hr.exec(o);if(l)return{type:"hr",raw:Li(l[0],`
`)}}blockquote(o){let l=this.rules.block.blockquote.exec(o);if(l){let u=Li(l[0],`
`).split(`
`),r="",h="",m=[];for(;u.length>0;){let f=!1,A=[],g;for(g=0;g<u.length;g++)if(this.rules.other.blockquoteStart.test(u[g]))A.push(u[g]),f=!0;else if(!f)A.push(u[g]);else break;u=u.slice(g);let T=A.join(`
`),R=T.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${T}`:T,h=h?`${h}
${R}`:R;let M=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,m,!0),this.lexer.state.top=M,u.length===0)break;let U=m.at(-1);if(U?.type==="code")break;if(U?.type==="blockquote"){let K=U,Z=K.raw+`
`+u.join(`
`),J=this.blockquote(Z);m[m.length-1]=J,r=r.substring(0,r.length-K.raw.length)+J.raw,h=h.substring(0,h.length-K.text.length)+J.text;break}else if(U?.type==="list"){let K=U,Z=K.raw+`
`+u.join(`
`),J=this.list(Z);m[m.length-1]=J,r=r.substring(0,r.length-U.raw.length)+J.raw,h=h.substring(0,h.length-K.raw.length)+J.raw,u=Z.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:m,text:h}}}list(o){let l=this.rules.block.list.exec(o);if(l){let u=l[1].trim(),r=u.length>1,h={type:"list",raw:"",ordered:r,start:r?+u.slice(0,-1):"",loose:!1,items:[]};u=r?`\\d{1,9}\\${u.slice(-1)}`:`\\${u}`,this.options.pedantic&&(u=r?u:"[*+-]");let m=this.rules.other.listItemRegex(u),f=!1;for(;o;){let g=!1,T="",R="";if(!(l=m.exec(o))||this.rules.block.hr.test(o))break;T=l[0],o=o.substring(T.length);let M=ky(l[2].split(`
`,1)[0],l[1].length),U=o.split(`
`,1)[0],K=!M.trim(),Z=0;if(this.options.pedantic?(Z=2,R=M.trimStart()):K?Z=l[1].length+1:(Z=M.search(this.rules.other.nonSpaceChar),Z=Z>4?1:Z,R=M.slice(Z),Z+=l[1].length),K&&this.rules.other.blankLine.test(U)&&(T+=U+`
`,o=o.substring(U.length+1),g=!0),!g){let J=this.rules.other.nextBulletRegex(Z),Ue=this.rules.other.hrRegex(Z),F=this.rules.other.fencesBeginRegex(Z),Ce=this.rules.other.headingBeginRegex(Z),ze=this.rules.other.htmlBeginRegex(Z),Ge=this.rules.other.blockquoteBeginRegex(Z);for(;o;){let Xe=o.split(`
`,1)[0],Re;if(U=Xe,this.options.pedantic?(U=U.replace(this.rules.other.listReplaceNesting,"  "),Re=U):Re=U.replace(this.rules.other.tabCharGlobal,"    "),F.test(U)||Ce.test(U)||ze.test(U)||Ge.test(U)||J.test(U)||Ue.test(U))break;if(Re.search(this.rules.other.nonSpaceChar)>=Z||!U.trim())R+=`
`+Re.slice(Z);else{if(K||M.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(M)||Ce.test(M)||Ue.test(M))break;R+=`
`+U}K=!U.trim(),T+=Xe+`
`,o=o.substring(Xe.length+1),M=Re.slice(Z)}}h.loose||(f?h.loose=!0:this.rules.other.doubleBlankLine.test(T)&&(f=!0)),h.items.push({type:"list_item",raw:T,task:!!this.options.gfm&&this.rules.other.listIsTask.test(R),loose:!1,text:R,tokens:[]}),h.raw+=T}let A=h.items.at(-1);if(A)A.raw=A.raw.trimEnd(),A.text=A.text.trimEnd();else return;h.raw=h.raw.trimEnd();for(let g of h.items){if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),g.task){if(g.text=g.text.replace(this.rules.other.listReplaceTask,""),g.tokens[0]?.type==="text"||g.tokens[0]?.type==="paragraph"){g.tokens[0].raw=g.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),g.tokens[0].text=g.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let R=this.lexer.inlineQueue.length-1;R>=0;R--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[R].src)){this.lexer.inlineQueue[R].src=this.lexer.inlineQueue[R].src.replace(this.rules.other.listReplaceTask,"");break}}let T=this.rules.other.listTaskCheckbox.exec(g.raw);if(T){let R={type:"checkbox",raw:T[0]+" ",checked:T[0]!=="[ ]"};g.checked=R.checked,h.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=R.raw+g.tokens[0].raw,g.tokens[0].text=R.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(R)):g.tokens.unshift({type:"paragraph",raw:R.raw,text:R.raw,tokens:[R]}):g.tokens.unshift(R)}}if(!h.loose){let T=g.tokens.filter(M=>M.type==="space"),R=T.length>0&&T.some(M=>this.rules.other.anyLine.test(M.raw));h.loose=R}}if(h.loose)for(let g of h.items){g.loose=!0;for(let T of g.tokens)T.type==="text"&&(T.type="paragraph")}return h}}html(o){let l=this.rules.block.html.exec(o);if(l)return{type:"html",block:!0,raw:l[0],pre:l[1]==="pre"||l[1]==="script"||l[1]==="style",text:l[0]}}def(o){let l=this.rules.block.def.exec(o);if(l){let u=l[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=l[2]?l[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",h=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):l[3];return{type:"def",tag:u,raw:l[0],href:r,title:h}}}table(o){let l=this.rules.block.table.exec(o);if(!l||!this.rules.other.tableDelimiter.test(l[2]))return;let u=Sp(l[1]),r=l[2].replace(this.rules.other.tableAlignChars,"").split("|"),h=l[3]?.trim()?l[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:l[0],header:[],align:[],rows:[]};if(u.length===r.length){for(let f of r)this.rules.other.tableAlignRight.test(f)?m.align.push("right"):this.rules.other.tableAlignCenter.test(f)?m.align.push("center"):this.rules.other.tableAlignLeft.test(f)?m.align.push("left"):m.align.push(null);for(let f=0;f<u.length;f++)m.header.push({text:u[f],tokens:this.lexer.inline(u[f]),header:!0,align:m.align[f]});for(let f of h)m.rows.push(Sp(f,m.header.length).map((A,g)=>({text:A,tokens:this.lexer.inline(A),header:!1,align:m.align[g]})));return m}}lheading(o){let l=this.rules.block.lheading.exec(o);if(l){let u=l[1].trim();return{type:"heading",raw:l[0],depth:l[2].charAt(0)==="="?1:2,text:u,tokens:this.lexer.inline(u)}}}paragraph(o){let l=this.rules.block.paragraph.exec(o);if(l){let u=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:u,tokens:this.lexer.inline(u)}}}text(o){let l=this.rules.block.text.exec(o);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(o){let l=this.rules.inline.escape.exec(o);if(l)return{type:"escape",raw:l[0],text:l[1]}}tag(o){let l=this.rules.inline.tag.exec(o);if(l)return!this.lexer.state.inLink&&this.rules.other.startATag.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:l[0]}}link(o){let l=this.rules.inline.link.exec(o);if(l){let u=l[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(u)){if(!this.rules.other.endAngleBracket.test(u))return;let m=Li(u.slice(0,-1),"\\");if((u.length-m.length)%2===0)return}else{let m=wy(l[2],"()");if(m===-2)return;if(m>-1){let f=(l[0].indexOf("!")===0?5:4)+l[1].length+m;l[2]=l[2].substring(0,m),l[0]=l[0].substring(0,f).trim(),l[3]=""}}let r=l[2],h="";if(this.options.pedantic){let m=this.rules.other.pedanticHrefTitle.exec(r);m&&(r=m[1],h=m[3])}else h=l[3]?l[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(u)?r=r.slice(1):r=r.slice(1,-1)),Cp(l,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:h&&h.replace(this.rules.inline.anyPunctuation,"$1")},l[0],this.lexer,this.rules)}}reflink(o,l){let u;if((u=this.rules.inline.reflink.exec(o))||(u=this.rules.inline.nolink.exec(o))){let r=(u[2]||u[1]).replace(this.rules.other.multipleSpaceGlobal," "),h=l[r.toLowerCase()];if(!h){let m=u[0].charAt(0);return{type:"text",raw:m,text:m}}return Cp(u,h,u[0],this.lexer,this.rules)}}emStrong(o,l,u=""){let r=this.rules.inline.emStrongLDelim.exec(o);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&u.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!u||this.rules.inline.punctuation.exec(u))){let h=[...r[0]].length-1,m,f,A=h,g=0,T=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(T.lastIndex=0,l=l.slice(-1*o.length+h);(r=T.exec(l))!==null;){if(m=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!m)continue;if(f=[...m].length,r[3]||r[4]){A+=f;continue}else if((r[5]||r[6])&&h%3&&!((h+f)%3)){g+=f;continue}if(A-=f,A>0)continue;f=Math.min(f,f+A+g);let R=[...r[0]][0].length,M=o.slice(0,h+r.index+R+f);if(Math.min(h,f)%2){let K=M.slice(1,-1);return{type:"em",raw:M,text:K,tokens:this.lexer.inlineTokens(K)}}let U=M.slice(2,-2);return{type:"strong",raw:M,text:U,tokens:this.lexer.inlineTokens(U)}}}}codespan(o){let l=this.rules.inline.code.exec(o);if(l){let u=l[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(u),h=this.rules.other.startingSpaceChar.test(u)&&this.rules.other.endingSpaceChar.test(u);return r&&h&&(u=u.substring(1,u.length-1)),{type:"codespan",raw:l[0],text:u}}}br(o){let l=this.rules.inline.br.exec(o);if(l)return{type:"br",raw:l[0]}}del(o,l,u=""){let r=this.rules.inline.delLDelim.exec(o);if(r&&(!r[1]||!u||this.rules.inline.punctuation.exec(u))){let h=[...r[0]].length-1,m,f,A=h,g=this.rules.inline.delRDelim;for(g.lastIndex=0,l=l.slice(-1*o.length+h);(r=g.exec(l))!==null;){if(m=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!m||(f=[...m].length,f!==h))continue;if(r[3]||r[4]){A+=f;continue}if(A-=f,A>0)continue;f=Math.min(f,f+A);let T=[...r[0]][0].length,R=o.slice(0,h+r.index+T+f),M=R.slice(h,-h);return{type:"del",raw:R,text:M,tokens:this.lexer.inlineTokens(M)}}}}autolink(o){let l=this.rules.inline.autolink.exec(o);if(l){let u,r;return l[2]==="@"?(u=l[1],r="mailto:"+u):(u=l[1],r=u),{type:"link",raw:l[0],text:u,href:r,tokens:[{type:"text",raw:u,text:u}]}}}url(o){let l;if(l=this.rules.inline.url.exec(o)){let u,r;if(l[2]==="@")u=l[0],r="mailto:"+u;else{let h;do h=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])?.[0]??"";while(h!==l[0]);u=l[0],l[1]==="www."?r="http://"+l[0]:r=l[0]}return{type:"link",raw:l[0],text:u,href:r,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(o){let l=this.rules.inline.text.exec(o);if(l){let u=this.lexer.state.inRawBlock;return{type:"text",raw:l[0],text:l[0],escaped:u}}}},In=class _o{tokens;options;state;inlineQueue;tokenizer;constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||na,this.options.tokenizer=this.options.tokenizer||new cl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let u={other:Ye,block:ll.normal,inline:Oi.normal};this.options.pedantic?(u.block=ll.pedantic,u.inline=Oi.pedantic):this.options.gfm&&(u.block=ll.gfm,this.options.breaks?u.inline=Oi.breaks:u.inline=Oi.gfm),this.tokenizer.rules=u}static get rules(){return{block:ll,inline:Oi}}static lex(l,u){return new _o(u).lex(l)}static lexInline(l,u){return new _o(u).inlineTokens(l)}lex(l){l=l.replace(Ye.carriageReturn,`
`),this.blockTokens(l,this.tokens);for(let u=0;u<this.inlineQueue.length;u++){let r=this.inlineQueue[u];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,u=[],r=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(l=l.replace(Ye.tabCharGlobal,"    ").replace(Ye.spaceLine,""));l;){let h;if(this.options.extensions?.block?.some(f=>(h=f.call({lexer:this},l,u))?(l=l.substring(h.raw.length),u.push(h),!0):!1))continue;if(h=this.tokenizer.space(l)){l=l.substring(h.raw.length);let f=u.at(-1);h.raw.length===1&&f!==void 0?f.raw+=`
`:u.push(h);continue}if(h=this.tokenizer.code(l)){l=l.substring(h.raw.length);let f=u.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+h.raw,f.text+=`
`+h.text,this.inlineQueue.at(-1).src=f.text):u.push(h);continue}if(h=this.tokenizer.fences(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.heading(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.hr(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.blockquote(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.list(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.html(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.def(l)){l=l.substring(h.raw.length);let f=u.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+h.raw,f.text+=`
`+h.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title},u.push(h));continue}if(h=this.tokenizer.table(l)){l=l.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.lheading(l)){l=l.substring(h.raw.length),u.push(h);continue}let m=l;if(this.options.extensions?.startBlock){let f=1/0,A=l.slice(1),g;this.options.extensions.startBlock.forEach(T=>{g=T.call({lexer:this},A),typeof g=="number"&&g>=0&&(f=Math.min(f,g))}),f<1/0&&f>=0&&(m=l.substring(0,f+1))}if(this.state.top&&(h=this.tokenizer.paragraph(m))){let f=u.at(-1);r&&f?.type==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+h.raw,f.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):u.push(h),r=m.length!==l.length,l=l.substring(h.raw.length);continue}if(h=this.tokenizer.text(l)){l=l.substring(h.raw.length);let f=u.at(-1);f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+h.raw,f.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):u.push(h);continue}if(l){let f="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,u}inline(l,u=[]){return this.inlineQueue.push({src:l,tokens:u}),u}inlineTokens(l,u=[]){this.tokenizer.lexer=this;let r=l,h=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(r))!==null;)g.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.anyPunctuation.exec(r))!==null;)r=r.slice(0,h.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let m;for(;(h=this.tokenizer.rules.inline.blockSkip.exec(r))!==null;)m=h[2]?h[2].length:0,r=r.slice(0,h.index+m)+"["+"a".repeat(h[0].length-m-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let f=!1,A="";for(;l;){f||(A=""),f=!1;let g;if(this.options.extensions?.inline?.some(R=>(g=R.call({lexer:this},l,u))?(l=l.substring(g.raw.length),u.push(g),!0):!1))continue;if(g=this.tokenizer.escape(l)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.tag(l)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.link(l)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(g.raw.length);let R=u.at(-1);g.type==="text"&&R?.type==="text"?(R.raw+=g.raw,R.text+=g.text):u.push(g);continue}if(g=this.tokenizer.emStrong(l,r,A)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.codespan(l)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.br(l)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.del(l,r,A)){l=l.substring(g.raw.length),u.push(g);continue}if(g=this.tokenizer.autolink(l)){l=l.substring(g.raw.length),u.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(l))){l=l.substring(g.raw.length),u.push(g);continue}let T=l;if(this.options.extensions?.startInline){let R=1/0,M=l.slice(1),U;this.options.extensions.startInline.forEach(K=>{U=K.call({lexer:this},M),typeof U=="number"&&U>=0&&(R=Math.min(R,U))}),R<1/0&&R>=0&&(T=l.substring(0,R+1))}if(g=this.tokenizer.inlineText(T)){l=l.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(A=g.raw.slice(-1)),f=!0;let R=u.at(-1);R?.type==="text"?(R.raw+=g.raw,R.text+=g.text):u.push(g);continue}if(l){let R="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return u}},ul=class{options;parser;constructor(o){this.options=o||na}space(o){return""}code({text:o,lang:l,escaped:u}){let r=(l||"").match(Ye.notSpaceStart)?.[0],h=o.replace(Ye.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Wn(r)+'">'+(u?h:Wn(h,!0))+`</code></pre>
`:"<pre><code>"+(u?h:Wn(h,!0))+`</code></pre>
`}blockquote({tokens:o}){return`<blockquote>
${this.parser.parse(o)}</blockquote>
`}html({text:o}){return o}def(o){return""}heading({tokens:o,depth:l}){return`<h${l}>${this.parser.parseInline(o)}</h${l}>
`}hr(o){return`<hr>
`}list(o){let l=o.ordered,u=o.start,r="";for(let f=0;f<o.items.length;f++){let A=o.items[f];r+=this.listitem(A)}let h=l?"ol":"ul",m=l&&u!==1?' start="'+u+'"':"";return"<"+h+m+`>
`+r+"</"+h+`>
`}listitem(o){return`<li>${this.parser.parse(o.tokens)}</li>
`}checkbox({checked:o}){return"<input "+(o?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:o}){return`<p>${this.parser.parseInline(o)}</p>
`}table(o){let l="",u="";for(let h=0;h<o.header.length;h++)u+=this.tablecell(o.header[h]);l+=this.tablerow({text:u});let r="";for(let h=0;h<o.rows.length;h++){let m=o.rows[h];u="";for(let f=0;f<m.length;f++)u+=this.tablecell(m[f]);r+=this.tablerow({text:u})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+r+`</table>
`}tablerow({text:o}){return`<tr>
${o}</tr>
`}tablecell(o){let l=this.parser.parseInline(o.tokens),u=o.header?"th":"td";return(o.align?`<${u} align="${o.align}">`:`<${u}>`)+l+`</${u}>
`}strong({tokens:o}){return`<strong>${this.parser.parseInline(o)}</strong>`}em({tokens:o}){return`<em>${this.parser.parseInline(o)}</em>`}codespan({text:o}){return`<code>${Wn(o,!0)}</code>`}br(o){return"<br>"}del({tokens:o}){return`<del>${this.parser.parseInline(o)}</del>`}link({href:o,title:l,tokens:u}){let r=this.parser.parseInline(u),h=Pp(o);if(h===null)return r;o=h;let m='<a href="'+o+'"';return l&&(m+=' title="'+Wn(l)+'"'),m+=">"+r+"</a>",m}image({href:o,title:l,text:u,tokens:r}){r&&(u=this.parser.parseInline(r,this.parser.textRenderer));let h=Pp(o);if(h===null)return Wn(u);o=h;let m=`<img src="${o}" alt="${Wn(u)}"`;return l&&(m+=` title="${Wn(l)}"`),m+=">",m}text(o){return"tokens"in o&&o.tokens?this.parser.parseInline(o.tokens):"escaped"in o&&o.escaped?o.text:Wn(o.text)}},ac=class{strong({text:o}){return o}em({text:o}){return o}codespan({text:o}){return o}del({text:o}){return o}html({text:o}){return o}text({text:o}){return o}link({text:o}){return""+o}image({text:o}){return""+o}br(){return""}checkbox({raw:o}){return o}},Mn=class qo{options;renderer;textRenderer;constructor(l){this.options=l||na,this.options.renderer=this.options.renderer||new ul,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ac}static parse(l,u){return new qo(u).parse(l)}static parseInline(l,u){return new qo(u).parseInline(l)}parse(l){this.renderer.parser=this;let u="";for(let r=0;r<l.length;r++){let h=l[r];if(this.options.extensions?.renderers?.[h.type]){let f=h,A=this.options.extensions.renderers[f.type].call({parser:this},f);if(A!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){u+=A||"";continue}}let m=h;switch(m.type){case"space":{u+=this.renderer.space(m);break}case"hr":{u+=this.renderer.hr(m);break}case"heading":{u+=this.renderer.heading(m);break}case"code":{u+=this.renderer.code(m);break}case"table":{u+=this.renderer.table(m);break}case"blockquote":{u+=this.renderer.blockquote(m);break}case"list":{u+=this.renderer.list(m);break}case"checkbox":{u+=this.renderer.checkbox(m);break}case"html":{u+=this.renderer.html(m);break}case"def":{u+=this.renderer.def(m);break}case"paragraph":{u+=this.renderer.paragraph(m);break}case"text":{u+=this.renderer.text(m);break}default:{let f='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return u}parseInline(l,u=this.renderer){this.renderer.parser=this;let r="";for(let h=0;h<l.length;h++){let m=l[h];if(this.options.extensions?.renderers?.[m.type]){let A=this.options.extensions.renderers[m.type].call({parser:this},m);if(A!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(m.type)){r+=A||"";continue}}let f=m;switch(f.type){case"escape":{r+=u.text(f);break}case"html":{r+=u.html(f);break}case"link":{r+=u.link(f);break}case"image":{r+=u.image(f);break}case"checkbox":{r+=u.checkbox(f);break}case"strong":{r+=u.strong(f);break}case"em":{r+=u.em(f);break}case"codespan":{r+=u.codespan(f);break}case"br":{r+=u.br(f);break}case"del":{r+=u.del(f);break}case"text":{r+=u.text(f);break}default:{let A='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(A),"";throw new Error(A)}}}return r}},Bi=class{options;block;constructor(o){this.options=o||na}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(o){return o}postprocess(o){return o}processAllTokens(o){return o}emStrongMask(o){return o}provideLexer(o=this.block){return o?In.lex:In.lexInline}provideParser(o=this.block){return o?Mn.parse:Mn.parseInline}},Ny=class{defaults=Go();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Mn;Renderer=ul;TextRenderer=ac;Lexer=In;Tokenizer=cl;Hooks=Bi;constructor(...o){this.use(...o)}walkTokens(o,l){let u=[];for(let r of o)switch(u=u.concat(l.call(this,r)),r.type){case"table":{let h=r;for(let m of h.header)u=u.concat(this.walkTokens(m.tokens,l));for(let m of h.rows)for(let f of m)u=u.concat(this.walkTokens(f.tokens,l));break}case"list":{let h=r;u=u.concat(this.walkTokens(h.items,l));break}default:{let h=r;this.defaults.extensions?.childTokens?.[h.type]?this.defaults.extensions.childTokens[h.type].forEach(m=>{let f=h[m].flat(1/0);u=u.concat(this.walkTokens(f,l))}):h.tokens&&(u=u.concat(this.walkTokens(h.tokens,l)))}}return u}use(...o){let l=this.defaults.extensions||{renderers:{},childTokens:{}};return o.forEach(u=>{let r={...u};if(r.async=this.defaults.async||r.async||!1,u.extensions&&(u.extensions.forEach(h=>{if(!h.name)throw new Error("extension name required");if("renderer"in h){let m=l.renderers[h.name];m?l.renderers[h.name]=function(...f){let A=h.renderer.apply(this,f);return A===!1&&(A=m.apply(this,f)),A}:l.renderers[h.name]=h.renderer}if("tokenizer"in h){if(!h.level||h.level!=="block"&&h.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let m=l[h.level];m?m.unshift(h.tokenizer):l[h.level]=[h.tokenizer],h.start&&(h.level==="block"?l.startBlock?l.startBlock.push(h.start):l.startBlock=[h.start]:h.level==="inline"&&(l.startInline?l.startInline.push(h.start):l.startInline=[h.start]))}"childTokens"in h&&h.childTokens&&(l.childTokens[h.name]=h.childTokens)}),r.extensions=l),u.renderer){let h=this.defaults.renderer||new ul(this.defaults);for(let m in u.renderer){if(!(m in h))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;let f=m,A=u.renderer[f],g=h[f];h[f]=(...T)=>{let R=A.apply(h,T);return R===!1&&(R=g.apply(h,T)),R||""}}r.renderer=h}if(u.tokenizer){let h=this.defaults.tokenizer||new cl(this.defaults);for(let m in u.tokenizer){if(!(m in h))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;let f=m,A=u.tokenizer[f],g=h[f];h[f]=(...T)=>{let R=A.apply(h,T);return R===!1&&(R=g.apply(h,T)),R}}r.tokenizer=h}if(u.hooks){let h=this.defaults.hooks||new Bi;for(let m in u.hooks){if(!(m in h))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;let f=m,A=u.hooks[f],g=h[f];Bi.passThroughHooks.has(m)?h[f]=T=>{if(this.defaults.async&&Bi.passThroughHooksRespectAsync.has(m))return(async()=>{let M=await A.call(h,T);return g.call(h,M)})();let R=A.call(h,T);return g.call(h,R)}:h[f]=(...T)=>{if(this.defaults.async)return(async()=>{let M=await A.apply(h,T);return M===!1&&(M=await g.apply(h,T)),M})();let R=A.apply(h,T);return R===!1&&(R=g.apply(h,T)),R}}r.hooks=h}if(u.walkTokens){let h=this.defaults.walkTokens,m=u.walkTokens;r.walkTokens=function(f){let A=[];return A.push(m.call(this,f)),h&&(A=A.concat(h.call(this,f))),A}}this.defaults={...this.defaults,...r}}),this}setOptions(o){return this.defaults={...this.defaults,...o},this}lexer(o,l){return In.lex(o,l??this.defaults)}parser(o,l){return Mn.parse(o,l??this.defaults)}parseMarkdown(o){return(l,u)=>{let r={...u},h={...this.defaults,...r},m=this.onError(!!h.silent,!!h.async);if(this.defaults.async===!0&&r.async===!1)return m(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));if(h.hooks&&(h.hooks.options=h,h.hooks.block=o),h.async)return(async()=>{let f=h.hooks?await h.hooks.preprocess(l):l,A=await(h.hooks?await h.hooks.provideLexer(o):o?In.lex:In.lexInline)(f,h),g=h.hooks?await h.hooks.processAllTokens(A):A;h.walkTokens&&await Promise.all(this.walkTokens(g,h.walkTokens));let T=await(h.hooks?await h.hooks.provideParser(o):o?Mn.parse:Mn.parseInline)(g,h);return h.hooks?await h.hooks.postprocess(T):T})().catch(m);try{h.hooks&&(l=h.hooks.preprocess(l));let f=(h.hooks?h.hooks.provideLexer(o):o?In.lex:In.lexInline)(l,h);h.hooks&&(f=h.hooks.processAllTokens(f)),h.walkTokens&&this.walkTokens(f,h.walkTokens);let A=(h.hooks?h.hooks.provideParser(o):o?Mn.parse:Mn.parseInline)(f,h);return h.hooks&&(A=h.hooks.postprocess(A)),A}catch(f){return m(f)}}}onError(o,l){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,o){let r="<p>An error occurred:</p><pre>"+Wn(u.message+"",!0)+"</pre>";return l?Promise.resolve(r):r}if(l)return Promise.reject(u);throw u}}},ea=new Ny;function ue(o,l){return ea.parse(o,l)}ue.options=ue.setOptions=function(o){return ea.setOptions(o),ue.defaults=ea.defaults,Ep(ue.defaults),ue};ue.getDefaults=Go;ue.defaults=na;ue.use=function(...o){return ea.use(...o),ue.defaults=ea.defaults,Ep(ue.defaults),ue};ue.walkTokens=function(o,l){return ea.walkTokens(o,l)};ue.parseInline=ea.parseInline;ue.Parser=Mn;ue.parser=Mn.parse;ue.Renderer=ul;ue.TextRenderer=ac;ue.Lexer=In;ue.lexer=In.lex;ue.Tokenizer=cl;ue.Hooks=Bi;ue.parse=ue;ue.options;ue.setOptions;ue.use;ue.walkTokens;ue.parseInline;Mn.parse;In.lex;const fl=new ue.Renderer,jo="/knowledge/";fl.image=({href:o,title:l,text:u})=>{const r=Ey(o),h=l?` title="${rt(l)}"`:"";return`<figure><img src="${rt(r)}" alt="${rt(u||"")}"${h} loading="lazy" /><figcaption>${rt(u||"")}</figcaption></figure>`};fl.heading=({tokens:o,depth:l})=>{const u=o.map(h=>h.raw||h.text||"").join(""),r=Kp(u);return`<h${l} id="${r}">${u}</h${l}>`};fl.code=({text:o,lang:l})=>{if(l)return`<pre><code class="language-${rt(l)}">${rt(o)}</code></pre>`;const u=Iy(o);return u||`<pre><code>${rt(o)}</code></pre>`};ue.setOptions({gfm:!0,breaks:!1,renderer:fl});function xy(o){return ue.parse(o)}function Ry(o){return o.split(`
`).map(l=>{const u=l.match(/^(#{2,4})\s+(.+)$/);if(!u)return null;const r=u[2].replace(/\*\*/g,"").trim();return{depth:u[1].length,title:r,id:Kp(r)}}).filter(Boolean)}function jp(o){return o.replace(/!\[[^\]]*]\([^)]+\)/g," ").replace(/\[[^\]]+]\([^)]+\)/g," ").replace(/`{1,3}[^`]*`{1,3}/g," ").replace(/[#>*_\-|]/g," ").replace(/\s+/g," ").trim()}function Dy(o,l,u=120){const r=jp(o);if(!l)return r.slice(0,u);const m=r.toLowerCase().indexOf(l.toLowerCase());if(m<0)return r.slice(0,u);const f=Math.max(0,m-Math.floor(u/2)),A=Math.min(r.length,f+u);return`${f>0?"...":""}${r.slice(f,A)}${A<r.length?"...":""}`}function Kp(o){return o.toLowerCase().replace(/[`~!@#$%^&*()+=[\]{};:'",.<>/?\\|]/g,"").replace(/\s+/g,"-").slice(0,80)}function rt(o){return String(o).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ey(o){const l=String(o||"");if(/^(https?:|data:|mailto:|#)/i.test(l))return l;const u=l.replace(/^\.?\//,"");return u.startsWith("images/")?`${jo.endsWith("/")?jo:`${jo}/`}${u}`:l}function Iy(o){const l=String(o).trim();return My(l)?Ly():Uy(l)?By():Hy(l)?Wy("UDP Header",[["Source Port","Destination Port"],["Length","Checksum"]]):zy(l)?jy(l):Oy(l)?Ky(l):""}function My(o){return o.includes("栈顶")&&o.includes("返回地址")&&o.includes("局部变量")}function Uy(o){return o.includes("Code")&&o.includes("Data")&&o.includes("Heap")&&o.includes("Stack")&&o.includes("低地址")}function Hy(o){return o.includes("Source Port")&&o.includes("Destination Port")&&o.includes("Checksum")}function zy(o){return o.includes("Client")&&o.includes("Server")&&(o.includes("SYN")||o.includes("FIN")||o.includes("ACK"))}function Oy(o){const l=o.split(`
`).map(u=>u.trim()).filter(Boolean);return l.length<3||l.length>16?!1:l.filter(u=>u.includes("→")||u==="↓"||u.startsWith("↓")).length>=2}function Ly(){const o=[["参数","Args","调用者传入的数据"],["返回地址","RA","函数返回后 PC 跳回的位置"],["保存的寄存器","Saved registers","恢复调用者执行现场"],["局部变量","Local variables","当前函数自己的临时数据"]];return`
    <figure class="concept-visual stack-visual">
      <figcaption>栈帧结构：高地址在上，栈向低地址增长。这里画的是常见布局，不是所有架构的压栈时间顺序</figcaption>
      <div class="stack-layout">
        <div class="stack-address-axis"><span>高地址</span><b></b><span>低地址</span></div>
        <div class="stack-frame-card">
          ${o.map(([l,u,r],h)=>`
            <div class="stack-slot ${h===o.length-1?"stack-top":""}">
              <strong>${l}</strong>
              <span>${u}</span>
              <small>${r}</small>
              ${h===o.length-1?"<em>SP 指向这里</em>":""}
            </div>
          `).join("")}
          <div class="growth-arrow">栈增长方向 ↓</div>
        </div>
      </div>
      <div class="stack-order">
        <strong>常见调用顺序</strong>
        <span>1. caller 准备参数</span>
        <span>2. call 保存返回地址 RA</span>
        <span>3. callee 保存寄存器/旧 FP</span>
        <span>4. callee 分配局部变量</span>
      </div>
      <p class="visual-note">注意：很多现代 calling convention 会优先用寄存器传参数；如果参数被 spill 到栈上，或者超过寄存器数量，才会出现在栈帧附近。</p>
    </figure>
  `}function By(){return`
    <figure class="concept-visual address-space-visual">
      <figcaption>进程地址空间：线程共享 Code/Data/Heap，每个线程有自己的 Stack</figcaption>
      <div class="address-axis"><span>低地址</span><b></b><span>高地址</span></div>
      <div class="address-space-card">
        ${[["Code","程序指令","共享"],["Data","全局变量 / 静态数据","共享"],["Heap","动态分配内存","向高地址增长"],["Free space","堆和栈之间的空闲区域","可变化"],["Stack","局部变量 / 函数参数","向低地址增长"]].map(([l,u,r])=>`
          <div class="address-region ${l==="Free space"?"free":""}">
            <strong>${l}</strong>
            <span>${u}</span>
            <small>${r}</small>
          </div>
        `).join("")}
      </div>
    </figure>
  `}function Wy(o,l){return`
    <figure class="concept-visual packet-visual">
      <figcaption>${o}：固定 8 bytes，核心作用是端口分用和错误检测</figcaption>
      <div class="bit-ruler">
        <span>0</span><span>7</span><span>15</span><span>23</span><span>31</span>
      </div>
      <div class="packet-grid">
        ${l.flat().map(u=>`<div>${u}</div>`).join("")}
      </div>
    </figure>
  `}function jy(o){const u=o.split(`
`).map(h=>h.trim()).filter(Boolean).filter(h=>h.includes("---")||h.includes("<--")).map(h=>{const m=h.includes("<--"),f=h.replace(/[|<>-]/g," ").replace(/\s+/g," ").trim();return{left:m,label:f}});return`
    <figure class="concept-visual sequence-visual">
      <figcaption>${o.includes("FIN")?"TCP 连接关闭时序":"TCP 三次握手时序"}</figcaption>
      <div class="sequence-head"><span>Client</span><span>Server</span></div>
      <div class="sequence-body">
        ${u.map(h=>`
          <div class="sequence-row ${h.left?"left":"right"}">
            <span></span>
            <b>${rt(h.label)}</b>
            <span></span>
          </div>
        `).join("")}
      </div>
      <p>${o.includes("SYN")?"SYN/FIN 会消耗 1 个 sequence number；ACK number 表示期望收到的下一个字节。":"FIN 是方向性的；一边 FIN 后，反方向仍可能继续发送数据。"}</p>
    </figure>
  `}function Ky(o){const l=o.split(`
`).map(u=>u.trim()).filter(u=>u&&u!=="↓").flatMap(u=>u.split(/\s*→\s*/)).map(u=>u.replace(/^↓\s*/,"").trim()).filter(Boolean);return l.length<3||l.length>14?"":`
    <figure class="concept-visual flow-visual">
      <figcaption>流程关系图</figcaption>
      <div class="flow-chain">
        ${l.map((u,r)=>`
          <div class="flow-node">${rt(u)}</div>
          ${r<l.length-1?"<span>→</span>":""}
        `).join("")}
      </div>
    </figure>
  `}const Zp="comp30023-interactive-revision";function Zy(){try{return JSON.parse(localStorage.getItem(Zp))||{}}catch{return{}}}function _y(o){localStorage.setItem(Zp,JSON.stringify(o))}function qy(o,l,u){return{...o,[l]:{...o[l]||{},...u,updatedAt:Date.now()}}}const Fy=[{id:"read",label:"阅读 Read",icon:Mg},{id:"exam",label:"考点 Exam",icon:kp},{id:"recite",label:"默写 Recite",icon:dl},{id:"lab",label:"实验 Lab",icon:Qo},{id:"quiz",label:"题卡 Quiz",icon:Yo},{id:"map",label:"地图 Map",icon:wp},{id:"plan",label:"规划 Plan",icon:Wg}];function Qy(){const[o,l]=Q.useState(jn[0].id),[u,r]=Q.useState(""),[h,m]=Q.useState("read"),[f,A]=Q.useState(()=>Zy()),g=jn.find(F=>F.id===o)||jn[0],T=f[g.id]||{},R=Q.useMemo(()=>xy(g.md),[g]),M=Q.useMemo(()=>Ry(g.md),[g]),U=Q.useMemo(()=>{const F=u.trim().toLowerCase();return F?jn.map(Ce=>({chapter:Ce,text:`${Ce.title} ${Ce.filename} ${jp(Ce.md)}`.toLowerCase()})).filter(Ce=>Ce.text.includes(F)).slice(0,12):[]},[u]),K=jn.filter(F=>f[F.id]?.done).length,Z=Math.round(K/jn.length*100);Q.useEffect(()=>{_y(f)},[f]);function J(F){A(Ce=>qy(Ce,g.id,F))}function Ue(F,Ce=h){l(F),m(Ce),requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"smooth"}))}return d.jsxs("div",{className:"app-shell",children:[d.jsxs("aside",{className:"sidebar",children:[d.jsxs("div",{className:"brand",children:[d.jsx("span",{children:"COMP30023"}),d.jsx("strong",{children:"Interactive Revision"}),d.jsx("small",{children:"期末复习工作台 · bilingual exam focus"})]}),d.jsxs("label",{className:"search-box",children:[d.jsx(Zg,{size:16}),d.jsx("input",{value:u,onChange:F=>r(F.target.value),placeholder:"搜索知识点 · search notes"})]}),u.trim()?d.jsx(Gy,{results:U,query:u,onPick:F=>{r(""),Ue(F,"read")}}):d.jsx(Yy,{selectedId:g.id,onPick:F=>Ue(F,"read"),progress:f})]}),d.jsxs("main",{className:"workspace",children:[d.jsxs("header",{className:"topbar",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"eyebrow",children:[g.week," · ",g.group]}),d.jsx("h1",{children:g.title}),d.jsx("span",{className:"filename",children:g.filename})]}),d.jsxs("div",{className:"progress-pill",children:[d.jsx(rl,{size:18}),d.jsxs("strong",{children:[Z,"%"]}),d.jsxs("span",{children:[K,"/",jn.length," done"]})]})]}),d.jsx("div",{className:"tabbar",role:"tablist","aria-label":"Study mode",children:Fy.map(F=>{const Ce=F.icon;return d.jsxs("button",{className:h===F.id?"active":"",onClick:()=>m(F.id),children:[d.jsx(Ce,{size:17}),F.label]},F.id)})}),h==="read"&&d.jsx("article",{className:"markdown-panel",dangerouslySetInnerHTML:{__html:R}}),h==="exam"&&d.jsx(tT,{chapterId:g.id,onJumpToLab:()=>m("lab")}),h==="recite"&&d.jsx($y,{chapterId:g.id,memorized:T.reciteDone||[],onMemorizedChange:F=>J({reciteDone:F})}),h==="lab"&&d.jsx(m1,{chapter:g}),h==="quiz"&&d.jsx(nT,{chapterId:g.id,questions:f1[g.id]||[],bestScore:T.bestScore,onScore:F=>J({bestScore:F})}),h==="map"&&d.jsx(aT,{onPick:F=>Ue(F,"read"),activeId:g.id}),h==="plan"&&d.jsx(iT,{onPick:F=>Ue(F,"lab")})]}),d.jsxs("aside",{className:"inspector",children:[d.jsx(Xy,{chapter:g,progress:T,onPatch:J,onOpenLab:()=>m("lab"),onOpenQuiz:()=>m("quiz"),onOpenExam:()=>m("exam"),onOpenRecite:()=>m("recite")}),d.jsx(Vy,{chapterId:g.id,onOpenExam:()=>m("exam")}),d.jsx(Jy,{chapterId:g.id,onOpenRecite:()=>m("recite")}),d.jsx(eT,{headings:M})]})]})}function Yy({selectedId:o,onPick:l,progress:u}){const r=jn.reduce((h,m)=>(h[m.group]=h[m.group]||[],h[m.group].push(m),h),{});return d.jsx("nav",{className:"chapter-nav",children:Object.entries(r).map(([h,m])=>d.jsxs("section",{children:[d.jsx("h2",{children:h}),m.map(f=>d.jsxs("button",{className:f.id===o?"active":"",onClick:()=>l(f.id),children:[d.jsx("span",{children:f.week}),d.jsx("strong",{children:f.title}),u[f.id]?.done&&d.jsx(rl,{size:15})]},f.id))]},h))})}function Gy({results:o,query:l,onPick:u}){return d.jsxs("div",{className:"search-results",children:[d.jsxs("p",{children:[o.length," 个结果 · results"]}),o.map(({chapter:r})=>d.jsxs("button",{onClick:()=>u(r.id),children:[d.jsxs("strong",{children:[r.week," · ",r.title]}),d.jsx("span",{children:Dy(r.md,l,110)})]},r.id))]})}function Xy({chapter:o,progress:l,onPatch:u,onOpenLab:r,onOpenQuiz:h,onOpenExam:m,onOpenRecite:f}){const A=Rp[o.id];return d.jsxs("section",{className:"side-card hero-card",children:[d.jsx("img",{src:o.image,alt:""}),d.jsxs("div",{className:"side-actions",children:[d.jsx("button",{className:l.done?"active":"",onClick:()=>u({done:!l.done}),title:"完成 Done",children:d.jsx(rl,{size:18})}),d.jsx("button",{className:l.star?"active":"",onClick:()=>u({star:!l.star}),title:"收藏 Star",children:d.jsx(Hg,{size:18})}),d.jsx("button",{className:l.weak?"active warn":"",onClick:()=>u({weak:!l.weak}),title:"不熟 Weak",children:d.jsx(Ap,{size:18})})]}),d.jsxs("h3",{children:[o.week," · ",o.title]}),d.jsx("p",{children:A.goal}),d.jsx("div",{className:"focus-list",children:o.focus.map(g=>d.jsx("span",{children:g},g))}),d.jsxs("div",{className:"mini-buttons",children:[d.jsxs("button",{onClick:m,children:[d.jsx(kp,{size:16}),"考点"]}),d.jsxs("button",{onClick:f,children:[d.jsx(dl,{size:16}),"默写"]}),d.jsxs("button",{onClick:r,children:[d.jsx(Qo,{size:16}),"实验"]}),d.jsxs("button",{onClick:h,children:[d.jsx(Yo,{size:16}),"题卡"]})]}),typeof l.bestScore=="number"&&d.jsxs("div",{className:"score-note",children:[d.jsx(qg,{size:15})," best quiz ",l.bestScore,"%"]}),Array.isArray(l.reciteDone)&&l.reciteDone.length>0&&d.jsxs("div",{className:"score-note",children:[d.jsx(rl,{size:15})," recite ",l.reciteDone.length," done"]})]})}function Vy({chapterId:o,onOpenExam:l}){const u=Np[o];return u?d.jsxs("section",{className:"side-card exam-quick",children:[d.jsxs("div",{className:"exam-quick-head",children:[d.jsx(dl,{size:16}),d.jsx("h3",{children:"考点速览 Exam Focus"})]}),d.jsx("p",{className:"exam-summary",children:u.summaryZh}),d.jsx("ul",{className:"exam-quick-list",children:u.topics.slice(0,6).map(r=>d.jsxs("li",{children:[d.jsx("strong",{children:r.en}),d.jsx("span",{children:r.zh})]},r.en))}),d.jsx("button",{className:"exam-quick-open",onClick:l,children:"展开全部 · open full list"})]}):null}function Jy({chapterId:o,onOpenRecite:l}){const u=xp[o];return u?d.jsxs("section",{className:"side-card recite-quick",children:[d.jsxs("div",{className:"exam-quick-head",children:[d.jsx(dl,{size:16}),d.jsx("h3",{children:"默写速览 Recite"})]}),d.jsx("p",{className:"exam-summary",children:u.summaryZh}),d.jsx("ul",{className:"exam-quick-list",children:u.items.slice(0,5).map(r=>d.jsxs("li",{children:[d.jsx("strong",{children:r.en}),d.jsx("span",{children:r.zh})]},r.en))}),d.jsx("button",{className:"exam-quick-open",onClick:l,children:"开始默写 · start recite"})]}):null}function $y({chapterId:o,memorized:l,onMemorizedChange:u}){const r=xp[o],[h,m]=Q.useState({});if(Q.useEffect(()=>{m({})},[o]),!r)return d.jsx("div",{className:"empty-panel",children:"本章默写整理中 · recitation coming soon."});const f=r.items,A=f.filter((U,K)=>h[K]).length,g=new Set(l);function T(U){m(K=>({...K,[U]:!K[U]}))}function R(U){if(!U){m({});return}const K={};f.forEach((Z,J)=>{K[J]=!0}),m(K)}function M(U){const K=g.has(U)?l.filter(Z=>Z!==U):[...l,U].sort((Z,J)=>Z-J);u(K)}return d.jsxs("section",{className:"recite-panel",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Dictation · 双语默写"}),d.jsx("h3",{children:"默写背诵 Recite"})]}),d.jsxs("div",{className:"recite-toolbar",children:[d.jsxs("span",{className:"recite-progress",children:[g.size,"/",f.length," 已掌握 · ",A,"/",f.length," 已揭示"]}),d.jsx("button",{type:"button",className:"lab-link",onClick:()=>R(!0),children:"全部显示 Reveal all"}),d.jsx("button",{type:"button",className:"lab-link",onClick:()=>R(!1),children:"全部隐藏 Hide all"})]})]}),d.jsxs("p",{className:"exam-lead",children:[r.summaryZh,d.jsx("span",{className:"exam-lead-en",children:r.summary})]}),d.jsx("ol",{className:"recite-list",children:f.map((U,K)=>{const Z=h[K],J=g.has(K);return d.jsxs("li",{className:`recite-card ${Z?"recite-revealed":""} ${J?"recite-memorized":""}`,children:[d.jsxs("div",{className:"recite-card-head",children:[d.jsx("span",{className:"exam-index",children:String(K+1).padStart(2,"0")}),d.jsxs("div",{className:"recite-prompt",children:[d.jsx("h4",{children:U.en}),d.jsx("span",{className:"exam-zh",children:U.zh})]}),d.jsxs("label",{className:"recite-check",children:[d.jsx("input",{type:"checkbox",checked:J,onChange:()=>M(K)}),d.jsx("span",{children:"已掌握 Got it"})]})]}),d.jsx("div",{className:`recite-answer ${Z?"":"recite-hidden"}`,children:Z?d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"recite-answer-en",children:U.answerEn}),d.jsx("p",{className:"recite-answer-zh",children:U.answerZh}),U.slide&&d.jsx("span",{className:"recite-slide",children:U.slide})]}):d.jsx("button",{type:"button",className:"recite-reveal-btn",onClick:()=>T(K),children:"显示答案 Reveal answer"})}),Z&&d.jsx("button",{type:"button",className:"recite-hide-btn",onClick:()=>T(K),children:"隐藏 Hide"})]},U.en)})})]})}function eT({headings:o}){const l=o.filter(u=>u.depth<=3).slice(0,24);return d.jsxs("section",{className:"side-card toc",children:[d.jsx("h3",{children:"目录 Outline"}),l.map(u=>d.jsx("button",{className:`depth-${u.depth}`,onClick:()=>document.getElementById(u.id)?.scrollIntoView({behavior:"smooth",block:"start"}),children:u.title},`${u.id}-${u.title}`))]})}function nT({chapterId:o,questions:l,bestScore:u,onScore:r}){const[h,m]=Q.useState({});Q.useEffect(()=>m({}),[o]);const f=Object.keys(h).length,A=l.filter((T,R)=>h[R]===T.answer).length,g=l.length?Math.round(A/l.length*100):0;return Q.useEffect(()=>{f===l.length&&l.length&&g>(u||0)&&r(g)},[f,u,r,l.length,g]),d.jsxs("section",{className:"quiz-panel",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Exam cards"}),d.jsx("h3",{children:"易错题卡 Trap cards"})]}),d.jsxs("div",{className:"step-count",children:[A,"/",l.length]})]}),d.jsx("div",{className:"quiz-list",children:l.map((T,R)=>d.jsxs("article",{className:"quiz-item",children:[d.jsxs("h4",{children:[R+1,". ",T.question]}),d.jsx("div",{className:"answer-grid",children:T.options.map((M,U)=>{const K=h[R]===U,Z=h[R]!==void 0,J=T.answer===U;return d.jsx("button",{className:[K?"picked":"",Z&&J?"correct":"",Z&&K&&!J?"wrong":""].join(" "),onClick:()=>m(Ue=>({...Ue,[R]:U})),children:M},M)})}),h[R]!==void 0&&d.jsx("p",{children:T.explain})]},T.question))})]})}function tT({chapterId:o,onJumpToLab:l}){const u=Np[o];return u?d.jsxs("section",{className:"exam-panel",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Exam focus · 双语考点"}),d.jsx("h3",{children:"考点详解 Exam Focus"})]}),d.jsxs("button",{className:"lab-link",onClick:l,children:[d.jsx(Qo,{size:15}),"配套实验 Lab"]})]}),d.jsxs("p",{className:"exam-lead",children:[u.summaryZh,d.jsx("span",{className:"exam-lead-en",children:u.summary})]}),d.jsx("ol",{className:"exam-list",children:u.topics.map((r,h)=>d.jsxs("li",{className:"exam-card",children:[d.jsxs("div",{className:"exam-card-head",children:[d.jsx("span",{className:"exam-index",children:String(h+1).padStart(2,"0")}),d.jsxs("div",{children:[d.jsx("h4",{children:r.en}),d.jsx("span",{className:"exam-zh",children:r.zh})]})]}),d.jsxs("div",{className:"exam-fields",children:[d.jsx(Ko,{icon:"listChecks",label:"考试会问 Asks",en:r.asks,zh:r.asksZh,tone:"asks"}),d.jsx(Ko,{icon:"gitCompare",label:"核心区分 Distinction",en:r.distinction,zh:r.distinctionZh,tone:"distinction"}),d.jsx(Ko,{icon:"triangleAlert",label:"常见陷阱 Trap",en:r.trap,zh:r.trap,tone:"trap",bare:!0})]})]},r.en))})]}):d.jsx("div",{className:"empty-panel",children:"本章考点整理中 · exam focus coming soon."})}function Ko({label:o,en:l,zh:u,tone:r,bare:h}){return d.jsxs("div",{className:`exam-field tone-${r}`,children:[d.jsxs("div",{className:"exam-field-label",children:[r==="trap"&&d.jsx(Ap,{size:14}),r==="asks"&&d.jsx(Yo,{size:14}),r==="distinction"&&d.jsx(wp,{size:14}),o]}),d.jsx("p",{className:"exam-field-en",children:l}),!h&&d.jsx("p",{className:"exam-field-zh",children:u})]})}function aT({activeId:o,onPick:l}){return d.jsxs("section",{className:"map-panel",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Knowledge graph"}),d.jsx("h3",{children:"知识点地图 Knowledge Map"})]})}),d.jsx("div",{className:"map-grid",children:p1.map(u=>d.jsxs("button",{className:u.chapter===o?"active":"",onClick:()=>l(u.chapter),children:[d.jsx("strong",{children:u.id}),d.jsx("span",{children:u.group})]},u.id))}),d.jsx("div",{className:"edge-list",children:h1.map(([u,r])=>d.jsxs("div",{children:[d.jsx("span",{children:u}),d.jsx("b",{children:"→"}),d.jsx("span",{children:r})]},`${u}-${r}`))})]})}function iT({onPick:o}){return d.jsxs("section",{className:"plan-board",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Build plan"}),d.jsx("h3",{children:"每章互动规划 Study Plan"})]})}),d.jsx("div",{className:"plan-grid",children:jn.map(l=>{const u=Rp[l.id];return d.jsxs("article",{children:[d.jsxs("div",{children:[d.jsx("span",{children:l.week}),d.jsx("h4",{children:l.title})]}),d.jsx("p",{children:u.goal}),d.jsx("strong",{children:u.lab}),d.jsx("ul",{children:u.exam.map(r=>d.jsx("li",{children:r},r))}),d.jsx("button",{onClick:()=>o(l.id),children:"打开实验 Open lab"})]},l.id)})})]})}kg.createRoot(document.getElementById("root")).render(d.jsx(Tg.StrictMode,{children:d.jsx(Qy,{})}));
