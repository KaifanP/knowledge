(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(f){if(f.ep)return;f.ep=!0;const g=o(f);fetch(f.href,g)}})();function cm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var wu={exports:{}},Ol={};var th;function um(){if(th)return Ol;th=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(r,f,g){var p=null;if(g!==void 0&&(p=""+g),f.key!==void 0&&(p=""+f.key),"key"in f){g={};for(var x in f)x!=="key"&&(g[x]=f[x])}else g=f;return f=g.ref,{$$typeof:u,type:r,key:p,ref:f!==void 0?f:null,props:g}}return Ol.Fragment=s,Ol.jsx=o,Ol.jsxs=o,Ol}var ah;function rm(){return ah||(ah=1,wu.exports=um()),wu.exports}var d=rm(),Eu={exports:{}},q={};var lh;function om(){if(lh)return q;lh=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),B=Symbol.iterator;function nn(v){return v===null||typeof v!="object"?null:(v=B&&v[B]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rn=Object.assign,On={};function Q(v,E,O){this.props=v,this.context=E,this.refs=On,this.updater=O||G}Q.prototype.isReactComponent={},Q.prototype.setState=function(v,E){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,E,"setState")},Q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Pn(){}Pn.prototype=Q.prototype;function Bn(v,E,O){this.props=v,this.context=E,this.refs=On,this.updater=O||G}var Vn=Bn.prototype=new Pn;Vn.constructor=Bn,rn(Vn,Q.prototype),Vn.isPureReactComponent=!0;var Zn=Array.isArray;function Rn(){}var an={H:null,A:null,T:null,S:null},Jn=Object.prototype.hasOwnProperty;function Ue(v,E,O){var z=O.ref;return{$$typeof:u,type:v,key:E,ref:z!==void 0?z:null,props:O}}function ta(v,E){return Ue(v.type,E,v.props)}function He(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function $n(v){var E={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(O){return E[O]})}var Ut=/\/+/g;function Ie(v,E){return typeof v=="object"&&v!==null&&v.key!=null?$n(""+v.key):E.toString(36)}function Ne(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Rn,Rn):(v.status="pending",v.then(function(E){v.status==="pending"&&(v.status="fulfilled",v.value=E)},function(E){v.status==="pending"&&(v.status="rejected",v.reason=E)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function D(v,E,O,z,X){var Z=typeof v;(Z==="undefined"||Z==="boolean")&&(v=null);var dn=!1;if(v===null)dn=!0;else switch(Z){case"bigint":case"string":case"number":dn=!0;break;case"object":switch(v.$$typeof){case u:case s:dn=!0;break;case R:return dn=v._init,D(dn(v._payload),E,O,z,X)}}if(dn)return X=X(v),dn=z===""?"."+Ie(v,0):z,Zn(X)?(O="",dn!=null&&(O=dn.replace(Ut,"$&/")+"/"),D(X,E,O,"",function(Ia){return Ia})):X!=null&&(He(X)&&(X=ta(X,O+(X.key==null||v&&v.key===X.key?"":(""+X.key).replace(Ut,"$&/")+"/")+dn)),E.push(X)),1;dn=0;var Gn=z===""?".":z+":";if(Zn(v))for(var Nn=0;Nn<v.length;Nn++)z=v[Nn],Z=Gn+Ie(z,Nn),dn+=D(z,E,O,Z,X);else if(Nn=nn(v),typeof Nn=="function")for(v=Nn.call(v),Nn=0;!(z=v.next()).done;)z=z.value,Z=Gn+Ie(z,Nn++),dn+=D(z,E,O,Z,X);else if(Z==="object"){if(typeof v.then=="function")return D(Ne(v),E,O,z,X);throw E=String(v),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return dn}function H(v,E,O){if(v==null)return v;var z=[],X=0;return D(v,z,"","",function(Z){return E.call(O,Z,X++)}),z}function K(v){if(v._status===-1){var E=v._result;E=E(),E.then(function(O){(v._status===0||v._status===-1)&&(v._status=1,v._result=O)},function(O){(v._status===0||v._status===-1)&&(v._status=2,v._result=O)}),v._status===-1&&(v._status=0,v._result=E)}if(v._status===1)return v._result.default;throw v._result}var gn=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},yn={map:H,forEach:function(v,E,O){H(v,function(){E.apply(this,arguments)},O)},count:function(v){var E=0;return H(v,function(){E++}),E},toArray:function(v){return H(v,function(E){return E})||[]},only:function(v){if(!He(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return q.Activity=U,q.Children=yn,q.Component=Q,q.Fragment=o,q.Profiler=f,q.PureComponent=Bn,q.StrictMode=r,q.Suspense=m,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=an,q.__COMPILER_RUNTIME={__proto__:null,c:function(v){return an.H.useMemoCache(v)}},q.cache=function(v){return function(){return v.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(v,E,O){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var z=rn({},v.props),X=v.key;if(E!=null)for(Z in E.key!==void 0&&(X=""+E.key),E)!Jn.call(E,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&E.ref===void 0||(z[Z]=E[Z]);var Z=arguments.length-2;if(Z===1)z.children=O;else if(1<Z){for(var dn=Array(Z),Gn=0;Gn<Z;Gn++)dn[Gn]=arguments[Gn+2];z.children=dn}return Ue(v.type,X,z)},q.createContext=function(v){return v={$$typeof:p,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:g,_context:v},v},q.createElement=function(v,E,O){var z,X={},Z=null;if(E!=null)for(z in E.key!==void 0&&(Z=""+E.key),E)Jn.call(E,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(X[z]=E[z]);var dn=arguments.length-2;if(dn===1)X.children=O;else if(1<dn){for(var Gn=Array(dn),Nn=0;Nn<dn;Nn++)Gn[Nn]=arguments[Nn+2];X.children=Gn}if(v&&v.defaultProps)for(z in dn=v.defaultProps,dn)X[z]===void 0&&(X[z]=dn[z]);return Ue(v,Z,X)},q.createRef=function(){return{current:null}},q.forwardRef=function(v){return{$$typeof:x,render:v}},q.isValidElement=He,q.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:K}},q.memo=function(v,E){return{$$typeof:T,type:v,compare:E===void 0?null:E}},q.startTransition=function(v){var E=an.T,O={};an.T=O;try{var z=v(),X=an.S;X!==null&&X(O,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Rn,gn)}catch(Z){gn(Z)}finally{E!==null&&O.types!==null&&(E.types=O.types),an.T=E}},q.unstable_useCacheRefresh=function(){return an.H.useCacheRefresh()},q.use=function(v){return an.H.use(v)},q.useActionState=function(v,E,O){return an.H.useActionState(v,E,O)},q.useCallback=function(v,E){return an.H.useCallback(v,E)},q.useContext=function(v){return an.H.useContext(v)},q.useDebugValue=function(){},q.useDeferredValue=function(v,E){return an.H.useDeferredValue(v,E)},q.useEffect=function(v,E){return an.H.useEffect(v,E)},q.useEffectEvent=function(v){return an.H.useEffectEvent(v)},q.useId=function(){return an.H.useId()},q.useImperativeHandle=function(v,E,O){return an.H.useImperativeHandle(v,E,O)},q.useInsertionEffect=function(v,E){return an.H.useInsertionEffect(v,E)},q.useLayoutEffect=function(v,E){return an.H.useLayoutEffect(v,E)},q.useMemo=function(v,E){return an.H.useMemo(v,E)},q.useOptimistic=function(v,E){return an.H.useOptimistic(v,E)},q.useReducer=function(v,E,O){return an.H.useReducer(v,E,O)},q.useRef=function(v){return an.H.useRef(v)},q.useState=function(v){return an.H.useState(v)},q.useSyncExternalStore=function(v,E,O){return an.H.useSyncExternalStore(v,E,O)},q.useTransition=function(){return an.H.useTransition()},q.version="19.2.7",q}var ih;function Iu(){return ih||(ih=1,Eu.exports=om()),Eu.exports}var Y=Iu();const fm=cm(Y);var Uu={exports:{}},Ll={},Hu={exports:{}},Ou={};var sh;function dm(){return sh||(sh=1,(function(u){function s(D,H){var K=D.length;D.push(H);n:for(;0<K;){var gn=K-1>>>1,yn=D[gn];if(0<f(yn,H))D[gn]=H,D[K]=yn,K=gn;else break n}}function o(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],K=D.pop();if(K!==H){D[0]=K;n:for(var gn=0,yn=D.length,v=yn>>>1;gn<v;){var E=2*(gn+1)-1,O=D[E],z=E+1,X=D[z];if(0>f(O,K))z<yn&&0>f(X,O)?(D[gn]=X,D[z]=K,gn=z):(D[gn]=O,D[E]=K,gn=E);else if(z<yn&&0>f(X,K))D[gn]=X,D[z]=K,gn=z;else break n}}return H}function f(D,H){var K=D.sortIndex-H.sortIndex;return K!==0?K:D.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var p=Date,x=p.now();u.unstable_now=function(){return p.now()-x}}var m=[],T=[],R=1,U=null,B=3,nn=!1,G=!1,rn=!1,On=!1,Q=typeof setTimeout=="function"?setTimeout:null,Pn=typeof clearTimeout=="function"?clearTimeout:null,Bn=typeof setImmediate<"u"?setImmediate:null;function Vn(D){for(var H=o(T);H!==null;){if(H.callback===null)r(T);else if(H.startTime<=D)r(T),H.sortIndex=H.expirationTime,s(m,H);else break;H=o(T)}}function Zn(D){if(rn=!1,Vn(D),!G)if(o(m)!==null)G=!0,Rn||(Rn=!0,$n());else{var H=o(T);H!==null&&Ne(Zn,H.startTime-D)}}var Rn=!1,an=-1,Jn=5,Ue=-1;function ta(){return On?!0:!(u.unstable_now()-Ue<Jn)}function He(){if(On=!1,Rn){var D=u.unstable_now();Ue=D;var H=!0;try{n:{G=!1,rn&&(rn=!1,Pn(an),an=-1),nn=!0;var K=B;try{e:{for(Vn(D),U=o(m);U!==null&&!(U.expirationTime>D&&ta());){var gn=U.callback;if(typeof gn=="function"){U.callback=null,B=U.priorityLevel;var yn=gn(U.expirationTime<=D);if(D=u.unstable_now(),typeof yn=="function"){U.callback=yn,Vn(D),H=!0;break e}U===o(m)&&r(m),Vn(D)}else r(m);U=o(m)}if(U!==null)H=!0;else{var v=o(T);v!==null&&Ne(Zn,v.startTime-D),H=!1}}break n}finally{U=null,B=K,nn=!1}H=void 0}}finally{H?$n():Rn=!1}}}var $n;if(typeof Bn=="function")$n=function(){Bn(He)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Ie=Ut.port2;Ut.port1.onmessage=He,$n=function(){Ie.postMessage(null)}}else $n=function(){Q(He,0)};function Ne(D,H){an=Q(function(){D(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Jn=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return B},u.unstable_next=function(D){switch(B){case 1:case 2:case 3:var H=3;break;default:H=B}var K=B;B=H;try{return D()}finally{B=K}},u.unstable_requestPaint=function(){On=!0},u.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=B;B=D;try{return H()}finally{B=K}},u.unstable_scheduleCallback=function(D,H,K){var gn=u.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?gn+K:gn):K=gn,D){case 1:var yn=-1;break;case 2:yn=250;break;case 5:yn=1073741823;break;case 4:yn=1e4;break;default:yn=5e3}return yn=K+yn,D={id:R++,callback:H,priorityLevel:D,startTime:K,expirationTime:yn,sortIndex:-1},K>gn?(D.sortIndex=K,s(T,D),o(m)===null&&D===o(T)&&(rn?(Pn(an),an=-1):rn=!0,Ne(Zn,K-gn))):(D.sortIndex=yn,s(m,D),G||nn||(G=!0,Rn||(Rn=!0,$n()))),D},u.unstable_shouldYield=ta,u.unstable_wrapCallback=function(D){var H=B;return function(){var K=B;B=H;try{return D.apply(this,arguments)}finally{B=K}}}})(Ou)),Ou}var ch;function hm(){return ch||(ch=1,Hu.exports=dm()),Hu.exports}var Lu={exports:{}},Yn={};var uh;function pm(){if(uh)return Yn;uh=1;var u=Iu();function s(m){var T="https://react.dev/errors/"+m;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)T+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+m+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(m,T,R){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:U==null?null:""+U,children:m,containerInfo:T,implementation:R}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(m,T){if(m==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Yn.createPortal=function(m,T){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(s(299));return g(m,T,null,R)},Yn.flushSync=function(m){var T=p.T,R=r.p;try{if(p.T=null,r.p=2,m)return m()}finally{p.T=T,r.p=R,r.d.f()}},Yn.preconnect=function(m,T){typeof m=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,r.d.C(m,T))},Yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Yn.preinit=function(m,T){if(typeof m=="string"&&T&&typeof T.as=="string"){var R=T.as,U=x(R,T.crossOrigin),B=typeof T.integrity=="string"?T.integrity:void 0,nn=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;R==="style"?r.d.S(m,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:U,integrity:B,fetchPriority:nn}):R==="script"&&r.d.X(m,{crossOrigin:U,integrity:B,fetchPriority:nn,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Yn.preinitModule=function(m,T){if(typeof m=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var R=x(T.as,T.crossOrigin);r.d.M(m,{crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&r.d.M(m)},Yn.preload=function(m,T){if(typeof m=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var R=T.as,U=x(R,T.crossOrigin);r.d.L(m,R,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Yn.preloadModule=function(m,T){if(typeof m=="string")if(T){var R=x(T.as,T.crossOrigin);r.d.m(m,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else r.d.m(m)},Yn.requestFormReset=function(m){r.d.r(m)},Yn.unstable_batchedUpdates=function(m,T){return m(T)},Yn.useFormState=function(m,T,R){return p.H.useFormState(m,T,R)},Yn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var rh;function gm(){if(rh)return Lu.exports;rh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Lu.exports=pm(),Lu.exports}var oh;function mm(){if(oh)return Ll;oh=1;var u=hm(),s=Iu(),o=gm();function r(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function g(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function p(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function x(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function m(n){if(g(n)!==n)throw Error(r(188))}function T(n){var e=n.alternate;if(!e){if(e=g(n),e===null)throw Error(r(188));return e!==n?null:n}for(var t=n,a=e;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return m(l),n;if(i===a)return m(l),e;i=i.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=i;else{for(var c=!1,h=l.child;h;){if(h===t){c=!0,t=l,a=i;break}if(h===a){c=!0,a=l,t=i;break}h=h.sibling}if(!c){for(h=i.child;h;){if(h===t){c=!0,t=i,a=l;break}if(h===a){c=!0,a=i,t=l;break}h=h.sibling}if(!c)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?n:e}function R(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=R(n),e!==null)return e;n=n.sibling}return null}var U=Object.assign,B=Symbol.for("react.element"),nn=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),On=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),Pn=Symbol.for("react.consumer"),Bn=Symbol.for("react.context"),Vn=Symbol.for("react.forward_ref"),Zn=Symbol.for("react.suspense"),Rn=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Ue=Symbol.for("react.activity"),ta=Symbol.for("react.memo_cache_sentinel"),He=Symbol.iterator;function $n(n){return n===null||typeof n!="object"?null:(n=He&&n[He]||n["@@iterator"],typeof n=="function"?n:null)}var Ut=Symbol.for("react.client.reference");function Ie(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ut?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case rn:return"Fragment";case Q:return"Profiler";case On:return"StrictMode";case Zn:return"Suspense";case Rn:return"SuspenseList";case Ue:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case G:return"Portal";case Bn:return n.displayName||"Context";case Pn:return(n._context.displayName||"Context")+".Consumer";case Vn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case an:return e=n.displayName||null,e!==null?e:Ie(n.type)||"Memo";case Jn:e=n._payload,n=n._init;try{return Ie(n(e))}catch{}}return null}var Ne=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},gn=[],yn=-1;function v(n){return{current:n}}function E(n){0>yn||(n.current=gn[yn],gn[yn]=null,yn--)}function O(n,e){yn++,gn[yn]=n.current,n.current=e}var z=v(null),X=v(null),Z=v(null),dn=v(null);function Gn(n,e){switch(O(Z,e),O(X,n),O(z,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?kd(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=kd(e),n=xd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}E(z),O(z,n)}function Nn(){E(z),E(X),E(Z)}function Ia(n){n.memoizedState!==null&&O(dn,n);var e=z.current,t=xd(e,n.type);e!==t&&(O(X,n),O(z,t))}function _l(n){X.current===n&&(E(z),E(X)),dn.current===n&&(E(dn),wl._currentValue=K)}var hs,$u;function Ht(n){if(hs===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hs=e&&e[1]||"",$u=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hs+n+$u}var ps=!1;function gs(n,e){if(!n||ps)return"";ps=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(k){var A=k}Reflect.construct(n,[],w)}else{try{w.call()}catch(k){A=k}n.call(w.prototype)}}else{try{throw Error()}catch(k){A=k}(w=n())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(k){if(k&&A&&typeof k.stack=="string")return[k.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],h=i[1];if(c&&h){var S=c.split(`
`),P=h.split(`
`);for(l=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;if(a===S.length||l===P.length)for(a=S.length-1,l=P.length-1;1<=a&&0<=l&&S[a]!==P[l];)l--;for(;1<=a&&0<=l;a--,l--)if(S[a]!==P[l]){if(a!==1||l!==1)do if(a--,l--,0>l||S[a]!==P[l]){var N=`
`+S[a].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=a&&0<=l);break}}}finally{ps=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Ht(t):""}function zh(n,e){switch(n.tag){case 26:case 27:case 5:return Ht(n.type);case 16:return Ht("Lazy");case 13:return n.child!==e&&e!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return gs(n.type,!1);case 11:return gs(n.type.render,!1);case 1:return gs(n.type,!0);case 31:return Ht("Activity");default:return""}}function nr(n){try{var e="",t=null;do e+=zh(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ms=Object.prototype.hasOwnProperty,Ss=u.unstable_scheduleCallback,Ts=u.unstable_cancelCallback,jh=u.unstable_shouldYield,Wh=u.unstable_requestPaint,ce=u.unstable_now,_h=u.unstable_getCurrentPriorityLevel,er=u.unstable_ImmediatePriority,tr=u.unstable_UserBlockingPriority,Il=u.unstable_NormalPriority,Ih=u.unstable_LowPriority,ar=u.unstable_IdlePriority,Kh=u.log,Qh=u.unstable_setDisableYieldValue,Ka=null,ue=null;function ut(n){if(typeof Kh=="function"&&Qh(n),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Ka,n)}catch{}}var re=Math.clz32?Math.clz32:Gh,qh=Math.log,Yh=Math.LN2;function Gh(n){return n>>>=0,n===0?32:31-(qh(n)/Yh|0)|0}var Kl=256,Ql=262144,ql=4194304;function Ot(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Yl(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var l=0,i=n.suspendedLanes,c=n.pingedLanes;n=n.warmLanes;var h=a&134217727;return h!==0?(a=h&~i,a!==0?l=Ot(a):(c&=h,c!==0?l=Ot(c):t||(t=h&~n,t!==0&&(l=Ot(t))))):(h=a&~i,h!==0?l=Ot(h):c!==0?l=Ot(c):t||(t=a&~n,t!==0&&(l=Ot(t)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,t=e&-e,i>=t||i===32&&(t&4194048)!==0)?e:l}function Qa(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Xh(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(){var n=ql;return ql<<=1,(ql&62914560)===0&&(ql=4194304),n}function ys(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function qa(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Fh(n,e,t,a,l,i){var c=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var h=n.entanglements,S=n.expirationTimes,P=n.hiddenUpdates;for(t=c&~t;0<t;){var N=31-re(t),w=1<<N;h[N]=0,S[N]=-1;var A=P[N];if(A!==null)for(P[N]=null,N=0;N<A.length;N++){var k=A[N];k!==null&&(k.lane&=-536870913)}t&=~w}a!==0&&ir(n,a,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(c&~e))}function ir(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-re(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function sr(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-re(t),l=1<<a;l&e|n[a]&e&&(n[a]|=e),t&=~l}}function cr(n,e){var t=e&-e;return t=(t&42)!==0?1:vs(t),(t&(n.suspendedLanes|e))!==0?0:t}function vs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Cs(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ur(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:Fd(n.type))}function rr(n,e){var t=H.p;try{return H.p=n,e()}finally{H.p=t}}var rt=Math.random().toString(36).slice(2),_n="__reactFiber$"+rt,ne="__reactProps$"+rt,aa="__reactContainer$"+rt,bs="__reactEvents$"+rt,Vh="__reactListeners$"+rt,Zh="__reactHandles$"+rt,or="__reactResources$"+rt,Ya="__reactMarker$"+rt;function Ps(n){delete n[_n],delete n[ne],delete n[bs],delete n[Vh],delete n[Zh]}function la(n){var e=n[_n];if(e)return e;for(var t=n.parentNode;t;){if(e=t[aa]||t[_n]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ud(n);n!==null;){if(t=n[_n])return t;n=Ud(n)}return e}n=t,t=n.parentNode}return null}function ia(n){if(n=n[_n]||n[aa]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Ga(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(r(33))}function sa(n){var e=n[or];return e||(e=n[or]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function zn(n){n[Ya]=!0}var fr=new Set,dr={};function Lt(n,e){ca(n,e),ca(n+"Capture",e)}function ca(n,e){for(dr[n]=e,n=0;n<e.length;n++)fr.add(e[n])}var Jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hr={},pr={};function $h(n){return ms.call(pr,n)?!0:ms.call(hr,n)?!1:Jh.test(n)?pr[n]=!0:(hr[n]=!0,!1)}function Gl(n,e,t){if($h(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Xl(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ke(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+a)}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function gr(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function np(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function As(n){if(!n._valueTracker){var e=gr(n)?"checked":"value";n._valueTracker=np(n,e,""+n[e])}}function mr(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=gr(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Fl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ep=/[\n"\\]/g;function Te(n){return n.replace(ep,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ks(n,e,t,a,l,i,c,h){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),e!=null?c==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Se(e)):n.value!==""+Se(e)&&(n.value=""+Se(e)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),e!=null?xs(n,c,Se(e)):t!=null?xs(n,c,Se(t)):a!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?n.name=""+Se(h):n.removeAttribute("name")}function Sr(n,e,t,a,l,i,c,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),e!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){As(n);return}t=t!=null?""+Se(t):"",e=e!=null?""+Se(e):t,h||e===n.value||(n.value=e),n.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=h?n.checked:!!a,n.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c),As(n)}function xs(n,e,t){e==="number"&&Fl(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function ua(n,e,t,a){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Se(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,a&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function Tr(n,e,t){if(e!=null&&(e=""+Se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Se(t):""}function yr(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(r(92));if(Ne(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Se(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),As(n)}function ra(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vr(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||tp.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Cr(n,e,t){if(e!=null&&typeof e!="object")throw Error(r(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&vr(n,l,a)}else for(var i in e)e.hasOwnProperty(i)&&vr(n,i,e[i])}function Ns(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(n){return lp.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Qe(){}var Ds=null;function Ms(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var oa=null,fa=null;function br(n){var e=ia(n);if(e&&(n=e.stateNode)){var t=n[ne]||null;n:switch(n=e.stateNode,e.type){case"input":if(ks(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Te(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var l=a[ne]||null;if(!l)throw Error(r(90));ks(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&mr(a)}break n;case"textarea":Tr(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ua(n,!!t.multiple,e,!1)}}}var Rs=!1;function Pr(n,e,t){if(Rs)return n(e,t);Rs=!0;try{var a=n(e);return a}finally{if(Rs=!1,(oa!==null||fa!==null)&&(Bi(),oa&&(e=oa,n=fa,fa=oa=null,br(e),n)))for(e=0;e<n.length;e++)br(n[e])}}function Xa(n,e){var t=n.stateNode;if(t===null)return null;var a=t[ne]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(r(231,e,typeof t));return t}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ws=!1;if(qe)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{ws=!1}var ot=null,Es=null,Zl=null;function Ar(){if(Zl)return Zl;var n,e=Es,t=e.length,a,l="value"in ot?ot.value:ot.textContent,i=l.length;for(n=0;n<t&&e[n]===l[n];n++);var c=t-n;for(a=1;a<=c&&e[t-a]===l[i-a];a++);return Zl=l.slice(n,1<a?1-a:void 0)}function Jl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $l(){return!0}function kr(){return!1}function ee(n){function e(t,a,l,i,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var h in n)n.hasOwnProperty(h)&&(t=n[h],this[h]=t?t(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$l:kr,this.isPropagationStopped=kr,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=ee(Bt),Va=U({},Bt,{view:0,detail:0}),ip=ee(Va),Us,Hs,Za,ei=U({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Za&&(Za&&n.type==="mousemove"?(Us=n.screenX-Za.screenX,Hs=n.screenY-Za.screenY):Hs=Us=0,Za=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:Hs}}),xr=ee(ei),sp=U({},ei,{dataTransfer:0}),cp=ee(sp),up=U({},Va,{relatedTarget:0}),Os=ee(up),rp=U({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),op=ee(rp),fp=U({},Bt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dp=ee(fp),hp=U({},Bt,{data:0}),Nr=ee(hp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=mp[n])?!!e[n]:!1}function Ls(){return Sp}var Tp=U({},Va,{key:function(n){if(n.key){var e=pp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(n){return n.type==="keypress"?Jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yp=ee(Tp),vp=U({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dr=ee(vp),Cp=U({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),bp=ee(Cp),Pp=U({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=ee(Pp),kp=U({},ei,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=ee(kp),Np=U({},Bt,{newState:0,oldState:0}),Dp=ee(Np),Mp=[9,13,27,32],Bs=qe&&"CompositionEvent"in window,Ja=null;qe&&"documentMode"in document&&(Ja=document.documentMode);var Rp=qe&&"TextEvent"in window&&!Ja,Mr=qe&&(!Bs||Ja&&8<Ja&&11>=Ja),Rr=" ",wr=!1;function Er(n,e){switch(n){case"keyup":return Mp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function wp(n,e){switch(n){case"compositionend":return Ur(e);case"keypress":return e.which!==32?null:(wr=!0,Rr);case"textInput":return n=e.data,n===Rr&&wr?null:n;default:return null}}function Ep(n,e){if(da)return n==="compositionend"||!Bs&&Er(n,e)?(n=Ar(),Zl=Es=ot=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mr&&e.locale!=="ko"?null:e.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Up[n.type]:e==="textarea"}function Or(n,e,t,a){oa?fa?fa.push(a):fa=[a]:oa=a,e=Qi(e,"onChange"),0<e.length&&(t=new ni("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var $a=null,nl=null;function Hp(n){yd(n,0)}function ti(n){var e=Ga(n);if(mr(e))return n}function Lr(n,e){if(n==="change")return e}var Br=!1;if(qe){var zs;if(qe){var js="oninput"in document;if(!js){var zr=document.createElement("div");zr.setAttribute("oninput","return;"),js=typeof zr.oninput=="function"}zs=js}else zs=!1;Br=zs&&(!document.documentMode||9<document.documentMode)}function jr(){$a&&($a.detachEvent("onpropertychange",Wr),nl=$a=null)}function Wr(n){if(n.propertyName==="value"&&ti(nl)){var e=[];Or(e,nl,n,Ms(n)),Pr(Hp,e)}}function Op(n,e,t){n==="focusin"?(jr(),$a=e,nl=t,$a.attachEvent("onpropertychange",Wr)):n==="focusout"&&jr()}function Lp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ti(nl)}function Bp(n,e){if(n==="click")return ti(e)}function zp(n,e){if(n==="input"||n==="change")return ti(e)}function jp(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var oe=typeof Object.is=="function"?Object.is:jp;function el(n,e){if(oe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!ms.call(e,l)||!oe(n[l],e[l]))return!1}return!0}function _r(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ir(n,e){var t=_r(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=_r(t)}}function Kr(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Kr(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Qr(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Fl(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fl(n.document)}return e}function Ws(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Wp=qe&&"documentMode"in document&&11>=document.documentMode,ha=null,_s=null,tl=null,Is=!1;function qr(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Is||ha==null||ha!==Fl(a)||(a=ha,"selectionStart"in a&&Ws(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),tl&&el(tl,a)||(tl=a,a=Qi(_s,"onSelect"),0<a.length&&(e=new ni("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=ha)))}function zt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:zt("Animation","AnimationEnd"),animationiteration:zt("Animation","AnimationIteration"),animationstart:zt("Animation","AnimationStart"),transitionrun:zt("Transition","TransitionRun"),transitionstart:zt("Transition","TransitionStart"),transitioncancel:zt("Transition","TransitionCancel"),transitionend:zt("Transition","TransitionEnd")},Ks={},Yr={};qe&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function jt(n){if(Ks[n])return Ks[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Yr)return Ks[n]=e[t];return n}var Gr=jt("animationend"),Xr=jt("animationiteration"),Fr=jt("animationstart"),_p=jt("transitionrun"),Ip=jt("transitionstart"),Kp=jt("transitioncancel"),Vr=jt("transitionend"),Zr=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function De(n,e){Zr.set(n,e),Lt(e,[n])}var ai=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ye=[],ga=0,qs=0;function li(){for(var n=ga,e=qs=ga=0;e<n;){var t=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var l=ye[e];ye[e++]=null;var i=ye[e];if(ye[e++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&Jr(t,l,i)}}function ii(n,e,t,a){ye[ga++]=n,ye[ga++]=e,ye[ga++]=t,ye[ga++]=a,qs|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Ys(n,e,t,a){return ii(n,e,t,a),si(n)}function Wt(n,e){return ii(n,null,null,e),si(n)}function Jr(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=n.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&e!==null&&(l=31-re(t),n=i.hiddenUpdates,a=n[l],a===null?n[l]=[e]:a.push(e),e.lane=t|536870912),i):null}function si(n){if(50<Al)throw Al=0,eu=null,Error(r(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ma={};function Qp(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(n,e,t,a){return new Qp(n,e,t,a)}function Gs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ye(n,e){var t=n.alternate;return t===null?(t=fe(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function $r(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function ci(n,e,t,a,l,i){var c=0;if(a=n,typeof n=="function")Gs(n)&&(c=1);else if(typeof n=="string")c=Fg(n,t,z.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Ue:return n=fe(31,t,e,l),n.elementType=Ue,n.lanes=i,n;case rn:return _t(t.children,l,i,e);case On:c=8,l|=24;break;case Q:return n=fe(12,t,e,l|2),n.elementType=Q,n.lanes=i,n;case Zn:return n=fe(13,t,e,l),n.elementType=Zn,n.lanes=i,n;case Rn:return n=fe(19,t,e,l),n.elementType=Rn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Bn:c=10;break n;case Pn:c=9;break n;case Vn:c=11;break n;case an:c=14;break n;case Jn:c=16,a=null;break n}c=29,t=Error(r(130,n===null?"null":typeof n,"")),a=null}return e=fe(c,t,e,l),e.elementType=n,e.type=a,e.lanes=i,e}function _t(n,e,t,a){return n=fe(7,n,a,e),n.lanes=t,n}function Xs(n,e,t){return n=fe(6,n,null,e),n.lanes=t,n}function no(n){var e=fe(18,null,null,0);return e.stateNode=n,e}function Fs(n,e,t){return e=fe(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var eo=new WeakMap;function ve(n,e){if(typeof n=="object"&&n!==null){var t=eo.get(n);return t!==void 0?t:(e={value:n,source:e,stack:nr(e)},eo.set(n,e),e)}return{value:n,source:e,stack:nr(e)}}var Sa=[],Ta=0,ui=null,al=0,Ce=[],be=0,ft=null,Oe=1,Le="";function Ge(n,e){Sa[Ta++]=al,Sa[Ta++]=ui,ui=n,al=e}function to(n,e,t){Ce[be++]=Oe,Ce[be++]=Le,Ce[be++]=ft,ft=n;var a=Oe;n=Le;var l=32-re(a)-1;a&=~(1<<l),t+=1;var i=32-re(e)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Oe=1<<32-re(e)+l|t<<l|a,Le=i+n}else Oe=1<<i|t<<l|a,Le=n}function Vs(n){n.return!==null&&(Ge(n,1),to(n,1,0))}function Zs(n){for(;n===ui;)ui=Sa[--Ta],Sa[Ta]=null,al=Sa[--Ta],Sa[Ta]=null;for(;n===ft;)ft=Ce[--be],Ce[be]=null,Le=Ce[--be],Ce[be]=null,Oe=Ce[--be],Ce[be]=null}function ao(n,e){Ce[be++]=Oe,Ce[be++]=Le,Ce[be++]=ft,Oe=e.id,Le=e.overflow,ft=n}var In=null,Cn=null,ln=!1,dt=null,Pe=!1,Js=Error(r(519));function ht(n){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ve(e,n)),Js}function lo(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[_n]=n,e[ne]=a,t){case"dialog":$("cancel",e),$("close",e);break;case"iframe":case"object":case"embed":$("load",e);break;case"video":case"audio":for(t=0;t<xl.length;t++)$(xl[t],e);break;case"source":$("error",e);break;case"img":case"image":case"link":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"input":$("invalid",e),Sr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",e);break;case"textarea":$("invalid",e),yr(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Pd(e.textContent,t)?(a.popover!=null&&($("beforetoggle",e),$("toggle",e)),a.onScroll!=null&&$("scroll",e),a.onScrollEnd!=null&&$("scrollend",e),a.onClick!=null&&(e.onclick=Qe),e=!0):e=!1,e||ht(n,!0)}function io(n){for(In=n.return;In;)switch(In.tag){case 5:case 31:case 13:Pe=!1;return;case 27:case 3:Pe=!0;return;default:In=In.return}}function ya(n){if(n!==In)return!1;if(!ln)return io(n),ln=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||mu(n.type,n.memoizedProps)),t=!t),t&&Cn&&ht(n),io(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Cn=Ed(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Cn=Ed(n)}else e===27?(e=Cn,Nt(n.type)?(n=Cu,Cu=null,Cn=n):Cn=e):Cn=In?ke(n.stateNode.nextSibling):null;return!0}function It(){Cn=In=null,ln=!1}function $s(){var n=dt;return n!==null&&(ie===null?ie=n:ie.push.apply(ie,n),dt=null),n}function ll(n){dt===null?dt=[n]:dt.push(n)}var nc=v(null),Kt=null,Xe=null;function pt(n,e,t){O(nc,e._currentValue),e._currentValue=t}function Fe(n){n._currentValue=nc.current,E(nc)}function ec(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function tc(n,e,t,a){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;n:for(;i!==null;){var h=i;i=l;for(var S=0;S<e.length;S++)if(h.context===e[S]){i.lanes|=t,h=i.alternate,h!==null&&(h.lanes|=t),ec(i.return,t,n),a||(c=null);break n}i=h.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(r(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),ec(c,t,n),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function va(n,e,t,a){n=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var h=l.type;oe(l.pendingProps.value,c.value)||(n!==null?n.push(h):n=[h])}}else if(l===dn.current){if(c=l.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(wl):n=[wl])}l=l.return}n!==null&&tc(e,n,t,a),e.flags|=262144}function ri(n){for(n=n.firstContext;n!==null;){if(!oe(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qt(n){Kt=n,Xe=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return so(Kt,n)}function oi(n,e){return Kt===null&&Qt(n),so(n,e)}function so(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Xe===null){if(n===null)throw Error(r(308));Xe=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Xe=Xe.next=e;return t}var qp=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Yp=u.unstable_scheduleCallback,Gp=u.unstable_NormalPriority,wn={$$typeof:Bn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new qp,data:new Map,refCount:0}}function il(n){n.refCount--,n.refCount===0&&Yp(Gp,function(){n.controller.abort()})}var sl=null,lc=0,Ca=0,ba=null;function Xp(n,e){if(sl===null){var t=sl=[];lc=0,Ca=cu(),ba={status:"pending",value:void 0,then:function(a){t.push(a)}}}return lc++,e.then(co,co),e}function co(){if(--lc===0&&sl!==null){ba!==null&&(ba.status="fulfilled");var n=sl;sl=null,Ca=0,ba=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Fp(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var uo=D.S;D.S=function(n,e){Gf=ce(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xp(n,e),uo!==null&&uo(n,e)};var qt=v(null);function ic(){var n=qt.current;return n!==null?n:vn.pooledCache}function fi(n,e){e===null?O(qt,qt.current):O(qt,e.pool)}function ro(){var n=ic();return n===null?null:{parent:wn._currentValue,pool:n}}var Pa=Error(r(460)),sc=Error(r(474)),di=Error(r(542)),hi={then:function(){}};function oo(n){return n=n.status,n==="fulfilled"||n==="rejected"}function fo(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Qe,Qe),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,po(n),n;default:if(typeof e.status=="string")e.then(Qe,Qe);else{if(n=vn,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,po(n),n}throw Gt=e,Pa}}function Yt(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Gt=t,Pa):t}}var Gt=null;function ho(){if(Gt===null)throw Error(r(459));var n=Gt;return Gt=null,n}function po(n){if(n===Pa||n===di)throw Error(r(483))}var Aa=null,cl=0;function pi(n){var e=cl;return cl+=1,Aa===null&&(Aa=[]),fo(Aa,n,e)}function ul(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function gi(n,e){throw e.$$typeof===B?Error(r(525)):(n=Object.prototype.toString.call(e),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function go(n){function e(C,y){if(n){var b=C.deletions;b===null?(C.deletions=[y],C.flags|=16):b.push(y)}}function t(C,y){if(!n)return null;for(;y!==null;)e(C,y),y=y.sibling;return null}function a(C){for(var y=new Map;C!==null;)C.key!==null?y.set(C.key,C):y.set(C.index,C),C=C.sibling;return y}function l(C,y){return C=Ye(C,y),C.index=0,C.sibling=null,C}function i(C,y,b){return C.index=b,n?(b=C.alternate,b!==null?(b=b.index,b<y?(C.flags|=67108866,y):b):(C.flags|=67108866,y)):(C.flags|=1048576,y)}function c(C){return n&&C.alternate===null&&(C.flags|=67108866),C}function h(C,y,b,M){return y===null||y.tag!==6?(y=Xs(b,C.mode,M),y.return=C,y):(y=l(y,b),y.return=C,y)}function S(C,y,b,M){var W=b.type;return W===rn?N(C,y,b.props.children,M,b.key):y!==null&&(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Jn&&Yt(W)===y.type)?(y=l(y,b.props),ul(y,b),y.return=C,y):(y=ci(b.type,b.key,b.props,null,C.mode,M),ul(y,b),y.return=C,y)}function P(C,y,b,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=Fs(b,C.mode,M),y.return=C,y):(y=l(y,b.children||[]),y.return=C,y)}function N(C,y,b,M,W){return y===null||y.tag!==7?(y=_t(b,C.mode,M,W),y.return=C,y):(y=l(y,b),y.return=C,y)}function w(C,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Xs(""+y,C.mode,b),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nn:return b=ci(y.type,y.key,y.props,null,C.mode,b),ul(b,y),b.return=C,b;case G:return y=Fs(y,C.mode,b),y.return=C,y;case Jn:return y=Yt(y),w(C,y,b)}if(Ne(y)||$n(y))return y=_t(y,C.mode,b,null),y.return=C,y;if(typeof y.then=="function")return w(C,pi(y),b);if(y.$$typeof===Bn)return w(C,oi(C,y),b);gi(C,y)}return null}function A(C,y,b,M){var W=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return W!==null?null:h(C,y,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case nn:return b.key===W?S(C,y,b,M):null;case G:return b.key===W?P(C,y,b,M):null;case Jn:return b=Yt(b),A(C,y,b,M)}if(Ne(b)||$n(b))return W!==null?null:N(C,y,b,M,null);if(typeof b.then=="function")return A(C,y,pi(b),M);if(b.$$typeof===Bn)return A(C,y,oi(C,b),M);gi(C,b)}return null}function k(C,y,b,M,W){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(b)||null,h(y,C,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case nn:return C=C.get(M.key===null?b:M.key)||null,S(y,C,M,W);case G:return C=C.get(M.key===null?b:M.key)||null,P(y,C,M,W);case Jn:return M=Yt(M),k(C,y,b,M,W)}if(Ne(M)||$n(M))return C=C.get(b)||null,N(y,C,M,W,null);if(typeof M.then=="function")return k(C,y,b,pi(M),W);if(M.$$typeof===Bn)return k(C,y,b,oi(y,M),W);gi(y,M)}return null}function L(C,y,b,M){for(var W=null,cn=null,j=y,V=y=0,tn=null;j!==null&&V<b.length;V++){j.index>V?(tn=j,j=null):tn=j.sibling;var un=A(C,j,b[V],M);if(un===null){j===null&&(j=tn);break}n&&j&&un.alternate===null&&e(C,j),y=i(un,y,V),cn===null?W=un:cn.sibling=un,cn=un,j=tn}if(V===b.length)return t(C,j),ln&&Ge(C,V),W;if(j===null){for(;V<b.length;V++)j=w(C,b[V],M),j!==null&&(y=i(j,y,V),cn===null?W=j:cn.sibling=j,cn=j);return ln&&Ge(C,V),W}for(j=a(j);V<b.length;V++)tn=k(j,C,V,b[V],M),tn!==null&&(n&&tn.alternate!==null&&j.delete(tn.key===null?V:tn.key),y=i(tn,y,V),cn===null?W=tn:cn.sibling=tn,cn=tn);return n&&j.forEach(function(Et){return e(C,Et)}),ln&&Ge(C,V),W}function I(C,y,b,M){if(b==null)throw Error(r(151));for(var W=null,cn=null,j=y,V=y=0,tn=null,un=b.next();j!==null&&!un.done;V++,un=b.next()){j.index>V?(tn=j,j=null):tn=j.sibling;var Et=A(C,j,un.value,M);if(Et===null){j===null&&(j=tn);break}n&&j&&Et.alternate===null&&e(C,j),y=i(Et,y,V),cn===null?W=Et:cn.sibling=Et,cn=Et,j=tn}if(un.done)return t(C,j),ln&&Ge(C,V),W;if(j===null){for(;!un.done;V++,un=b.next())un=w(C,un.value,M),un!==null&&(y=i(un,y,V),cn===null?W=un:cn.sibling=un,cn=un);return ln&&Ge(C,V),W}for(j=a(j);!un.done;V++,un=b.next())un=k(j,C,V,un.value,M),un!==null&&(n&&un.alternate!==null&&j.delete(un.key===null?V:un.key),y=i(un,y,V),cn===null?W=un:cn.sibling=un,cn=un);return n&&j.forEach(function(sm){return e(C,sm)}),ln&&Ge(C,V),W}function Tn(C,y,b,M){if(typeof b=="object"&&b!==null&&b.type===rn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case nn:n:{for(var W=b.key;y!==null;){if(y.key===W){if(W=b.type,W===rn){if(y.tag===7){t(C,y.sibling),M=l(y,b.props.children),M.return=C,C=M;break n}}else if(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Jn&&Yt(W)===y.type){t(C,y.sibling),M=l(y,b.props),ul(M,b),M.return=C,C=M;break n}t(C,y);break}else e(C,y);y=y.sibling}b.type===rn?(M=_t(b.props.children,C.mode,M,b.key),M.return=C,C=M):(M=ci(b.type,b.key,b.props,null,C.mode,M),ul(M,b),M.return=C,C=M)}return c(C);case G:n:{for(W=b.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){t(C,y.sibling),M=l(y,b.children||[]),M.return=C,C=M;break n}else{t(C,y);break}else e(C,y);y=y.sibling}M=Fs(b,C.mode,M),M.return=C,C=M}return c(C);case Jn:return b=Yt(b),Tn(C,y,b,M)}if(Ne(b))return L(C,y,b,M);if($n(b)){if(W=$n(b),typeof W!="function")throw Error(r(150));return b=W.call(b),I(C,y,b,M)}if(typeof b.then=="function")return Tn(C,y,pi(b),M);if(b.$$typeof===Bn)return Tn(C,y,oi(C,b),M);gi(C,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,y!==null&&y.tag===6?(t(C,y.sibling),M=l(y,b),M.return=C,C=M):(t(C,y),M=Xs(b,C.mode,M),M.return=C,C=M),c(C)):t(C,y)}return function(C,y,b,M){try{cl=0;var W=Tn(C,y,b,M);return Aa=null,W}catch(j){if(j===Pa||j===di)throw j;var cn=fe(29,j,null,C.mode);return cn.lanes=M,cn.return=C,cn}}}var Xt=go(!0),mo=go(!1),gt=!1;function cc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function mt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function St(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(on&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=si(n),Jr(n,null,t),e}return ii(n,a,e,t),si(n)}function rl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,sr(n,t)}}function rc(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?l=i=e:i=i.next=e}else l=i=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var oc=!1;function ol(){if(oc){var n=ba;if(n!==null)throw n}}function fl(n,e,t,a){oc=!1;var l=n.updateQueue;gt=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var S=h,P=S.next;S.next=null,c===null?i=P:c.next=P,c=S;var N=n.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==c&&(h===null?N.firstBaseUpdate=P:h.next=P,N.lastBaseUpdate=S))}if(i!==null){var w=l.baseState;c=0,N=P=S=null,h=i;do{var A=h.lane&-536870913,k=A!==h.lane;if(k?(en&A)===A:(a&A)===A){A!==0&&A===Ca&&(oc=!0),N!==null&&(N=N.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});n:{var L=n,I=h;A=e;var Tn=t;switch(I.tag){case 1:if(L=I.payload,typeof L=="function"){w=L.call(Tn,w,A);break n}w=L;break n;case 3:L.flags=L.flags&-65537|128;case 0:if(L=I.payload,A=typeof L=="function"?L.call(Tn,w,A):L,A==null)break n;w=U({},w,A);break n;case 2:gt=!0}}A=h.callback,A!==null&&(n.flags|=64,k&&(n.flags|=8192),k=l.callbacks,k===null?l.callbacks=[A]:k.push(A))}else k={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(P=N=k,S=w):N=N.next=k,c|=A;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;k=h,h=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);N===null&&(S=w),l.baseState=S,l.firstBaseUpdate=P,l.lastBaseUpdate=N,i===null&&(l.shared.lanes=0),bt|=c,n.lanes=c,n.memoizedState=w}}function So(n,e){if(typeof n!="function")throw Error(r(191,n));n.call(e)}function To(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)So(t[n],e)}var ka=v(null),mi=v(0);function yo(n,e){n=lt,O(mi,n),O(ka,e),lt=n|e.baseLanes}function fc(){O(mi,lt),O(ka,ka.current)}function dc(){lt=mi.current,E(ka),E(mi)}var de=v(null),Ae=null;function Tt(n){var e=n.alternate;O(Dn,Dn.current&1),O(de,n),Ae===null&&(e===null||ka.current!==null||e.memoizedState!==null)&&(Ae=n)}function hc(n){O(Dn,Dn.current),O(de,n),Ae===null&&(Ae=n)}function vo(n){n.tag===22?(O(Dn,Dn.current),O(de,n),Ae===null&&(Ae=n)):yt()}function yt(){O(Dn,Dn.current),O(de,de.current)}function he(n){E(de),Ae===n&&(Ae=null),E(Dn)}var Dn=v(0);function Si(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||yu(t)||vu(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ve=0,F=null,mn=null,En=null,Ti=!1,xa=!1,Ft=!1,yi=0,dl=0,Na=null,Vp=0;function kn(){throw Error(r(321))}function pc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!oe(n[t],e[t]))return!1;return!0}function gc(n,e,t,a,l,i){return Ve=i,F=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=n===null||n.memoizedState===null?af:Rc,Ft=!1,i=t(a,l),Ft=!1,xa&&(i=bo(e,t,a,l)),Co(n),i}function Co(n){D.H=gl;var e=mn!==null&&mn.next!==null;if(Ve=0,En=mn=F=null,Ti=!1,dl=0,Na=null,e)throw Error(r(300));n===null||Un||(n=n.dependencies,n!==null&&ri(n)&&(Un=!0))}function bo(n,e,t,a){F=n;var l=0;do{if(xa&&(Na=null),dl=0,xa=!1,25<=l)throw Error(r(301));if(l+=1,En=mn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=lf,i=e(t,a)}while(xa);return i}function Zp(){var n=D.H,e=n.useState()[0];return e=typeof e.then=="function"?hl(e):e,n=n.useState()[0],(mn!==null?mn.memoizedState:null)!==n&&(F.flags|=1024),e}function mc(){var n=yi!==0;return yi=0,n}function Sc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Tc(n){if(Ti){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Ti=!1}Ve=0,En=mn=F=null,xa=!1,dl=yi=0,Na=null}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?F.memoizedState=En=n:En=En.next=n,En}function Mn(){if(mn===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var e=En===null?F.memoizedState:En.next;if(e!==null)En=e,mn=n;else{if(n===null)throw F.alternate===null?Error(r(467)):Error(r(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},En===null?F.memoizedState=En=n:En=En.next=n}return En}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(n){var e=dl;return dl+=1,Na===null&&(Na=[]),n=fo(Na,n,e),e=F,(En===null?e.memoizedState:En.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?af:Rc),n}function Ci(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hl(n);if(n.$$typeof===Bn)return Kn(n)}throw Error(r(438,String(n)))}function yc(n){var e=null,t=F.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=F.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=vi(),F.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=ta;return e.index++,t}function Ze(n,e){return typeof e=="function"?e(n):e}function bi(n){var e=Mn();return vc(e,mn,n)}function vc(n,e,t){var a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=n.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}e.baseQueue=l=i,a.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{e=l.next;var h=c=null,S=null,P=e,N=!1;do{var w=P.lane&-536870913;if(w!==P.lane?(en&w)===w:(Ve&w)===w){var A=P.revertLane;if(A===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),w===Ca&&(N=!0);else if((Ve&A)===A){P=P.next,A===Ca&&(N=!0);continue}else w={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},S===null?(h=S=w,c=i):S=S.next=w,F.lanes|=A,bt|=A;w=P.action,Ft&&t(i,w),i=P.hasEagerState?P.eagerState:t(i,w)}else A={lane:w,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},S===null?(h=S=A,c=i):S=S.next=A,F.lanes|=w,bt|=w;P=P.next}while(P!==null&&P!==e);if(S===null?c=i:S.next=h,!oe(i,n.memoizedState)&&(Un=!0,N&&(t=ba,t!==null)))throw t;n.memoizedState=i,n.baseState=c,n.baseQueue=S,a.lastRenderedState=i}return l===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Cc(n){var e=Mn(),t=e.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=n;var a=t.dispatch,l=t.pending,i=e.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do i=n(i,c.action),c=c.next;while(c!==l);oe(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,a]}function Po(n,e,t){var a=F,l=Mn(),i=ln;if(i){if(t===void 0)throw Error(r(407));t=t()}else t=e();var c=!oe((mn||l).memoizedState,t);if(c&&(l.memoizedState=t,Un=!0),l=l.queue,Ac(xo.bind(null,a,l,n),[n]),l.getSnapshot!==e||c||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,Da(9,{destroy:void 0},ko.bind(null,a,l,t,e),null),vn===null)throw Error(r(349));i||(Ve&127)!==0||Ao(a,e,t)}return t}function Ao(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=F.updateQueue,e===null?(e=vi(),F.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ko(n,e,t,a){e.value=t,e.getSnapshot=a,No(e)&&Do(n)}function xo(n,e,t){return t(function(){No(e)&&Do(n)})}function No(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!oe(n,t)}catch{return!0}}function Do(n){var e=Wt(n,2);e!==null&&se(e,n,2)}function bc(n){var e=Xn();if(typeof n=="function"){var t=n;if(n=t(),Ft){ut(!0);try{t()}finally{ut(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},e}function Mo(n,e,t,a){return n.baseState=t,vc(n,mn,typeof a=="function"?a:Ze)}function Jp(n,e,t,a,l){if(ki(n))throw Error(r(485));if(n=e.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};D.T!==null?t(!0):i.isTransition=!1,a(i),t=e.pending,t===null?(i.next=e.pending=i,Ro(e,i)):(i.next=t.next,e.pending=t.next=i)}}function Ro(n,e){var t=e.action,a=e.payload,l=n.state;if(e.isTransition){var i=D.T,c={};D.T=c;try{var h=t(l,a),S=D.S;S!==null&&S(c,h),wo(n,e,h)}catch(P){Pc(n,e,P)}finally{i!==null&&c.types!==null&&(i.types=c.types),D.T=i}}else try{i=t(l,a),wo(n,e,i)}catch(P){Pc(n,e,P)}}function wo(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Eo(n,e,a)},function(a){return Pc(n,e,a)}):Eo(n,e,t)}function Eo(n,e,t){e.status="fulfilled",e.value=t,Uo(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Ro(n,t)))}function Pc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Uo(e),e=e.next;while(e!==a)}n.action=null}function Uo(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Ho(n,e){return e}function Oo(n,e){if(ln){var t=vn.formState;if(t!==null){n:{var a=F;if(ln){if(Cn){e:{for(var l=Cn,i=Pe;l.nodeType!==8;){if(!i){l=null;break e}if(l=ke(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Cn=ke(l.nextSibling),a=l.data==="F!";break n}}ht(a)}a=!1}a&&(e=t[0])}}return t=Xn(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=a,t=nf.bind(null,F,a),a.dispatch=t,a=bc(!1),i=Mc.bind(null,F,!1,a.queue),a=Xn(),l={state:e,dispatch:null,action:n,pending:null},a.queue=l,t=Jp.bind(null,F,l,i,t),l.dispatch=t,a.memoizedState=n,[e,t,!1]}function Lo(n){var e=Mn();return Bo(e,mn,n)}function Bo(n,e,t){if(e=vc(n,e,Ho)[0],n=bi(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=hl(e)}catch(c){throw c===Pa?di:c}else a=e;e=Mn();var l=e.queue,i=l.dispatch;return t!==e.memoizedState&&(F.flags|=2048,Da(9,{destroy:void 0},$p.bind(null,l,t),null)),[a,i,n]}function $p(n,e){n.action=e}function zo(n){var e=Mn(),t=mn;if(t!==null)return Bo(e,t,n);Mn(),e=e.memoizedState,t=Mn();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Da(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=F.updateQueue,e===null&&(e=vi(),F.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function jo(){return Mn().memoizedState}function Pi(n,e,t,a){var l=Xn();F.flags|=n,l.memoizedState=Da(1|e,{destroy:void 0},t,a===void 0?null:a)}function Ai(n,e,t,a){var l=Mn();a=a===void 0?null:a;var i=l.memoizedState.inst;mn!==null&&a!==null&&pc(a,mn.memoizedState.deps)?l.memoizedState=Da(e,i,t,a):(F.flags|=n,l.memoizedState=Da(1|e,i,t,a))}function Wo(n,e){Pi(8390656,8,n,e)}function Ac(n,e){Ai(2048,8,n,e)}function ng(n){F.flags|=4;var e=F.updateQueue;if(e===null)e=vi(),F.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function _o(n){var e=Mn().memoizedState;return ng({ref:e,nextImpl:n}),function(){if((on&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function Io(n,e){return Ai(4,2,n,e)}function Ko(n,e){return Ai(4,4,n,e)}function Qo(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function qo(n,e,t){t=t!=null?t.concat([n]):null,Ai(4,4,Qo.bind(null,e,n),t)}function kc(){}function Yo(n,e){var t=Mn();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&pc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Go(n,e){var t=Mn();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&pc(e,a[1]))return a[0];if(a=n(),Ft){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[a,e],a}function xc(n,e,t){return t===void 0||(Ve&1073741824)!==0&&(en&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Ff(),F.lanes|=n,bt|=n,t)}function Xo(n,e,t,a){return oe(t,e)?t:ka.current!==null?(n=xc(n,t,a),oe(n,e)||(Un=!0),n):(Ve&42)===0||(Ve&1073741824)!==0&&(en&261930)===0?(Un=!0,n.memoizedState=t):(n=Ff(),F.lanes|=n,bt|=n,e)}function Fo(n,e,t,a,l){var i=H.p;H.p=i!==0&&8>i?i:8;var c=D.T,h={};D.T=h,Mc(n,!1,e,t);try{var S=l(),P=D.S;if(P!==null&&P(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=Fp(S,a);pl(n,e,N,me(n))}else pl(n,e,a,me(n))}catch(w){pl(n,e,{then:function(){},status:"rejected",reason:w},me())}finally{H.p=i,c!==null&&h.types!==null&&(c.types=h.types),D.T=c}}function eg(){}function Nc(n,e,t,a){if(n.tag!==5)throw Error(r(476));var l=Vo(n).queue;Fo(n,l,e,K,t===null?eg:function(){return Zo(n),t(a)})}function Vo(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:K},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Zo(n){var e=Vo(n);e.next===null&&(e=n.alternate.memoizedState),pl(n,e.next.queue,{},me())}function Dc(){return Kn(wl)}function Jo(){return Mn().memoizedState}function $o(){return Mn().memoizedState}function tg(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=me();n=mt(t);var a=St(e,n,t);a!==null&&(se(a,e,t),rl(a,e,t)),e={cache:ac()},n.payload=e;return}e=e.return}}function ag(n,e,t){var a=me();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ki(n)?ef(e,t):(t=Ys(n,e,t,a),t!==null&&(se(t,n,a),tf(t,e,a)))}function nf(n,e,t){var a=me();pl(n,e,t,a)}function pl(n,e,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ki(n))ef(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,h=i(c,t);if(l.hasEagerState=!0,l.eagerState=h,oe(h,c))return ii(n,e,l,0),vn===null&&li(),!1}catch{}if(t=Ys(n,e,l,a),t!==null)return se(t,n,a),tf(t,e,a),!0}return!1}function Mc(n,e,t,a){if(a={lane:2,revertLane:cu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ki(n)){if(e)throw Error(r(479))}else e=Ys(n,t,a,2),e!==null&&se(e,n,2)}function ki(n){var e=n.alternate;return n===F||e!==null&&e===F}function ef(n,e){xa=Ti=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function tf(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,sr(n,t)}}var gl={readContext:Kn,use:Ci,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useLayoutEffect:kn,useInsertionEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useSyncExternalStore:kn,useId:kn,useHostTransitionStatus:kn,useFormState:kn,useActionState:kn,useOptimistic:kn,useMemoCache:kn,useCacheRefresh:kn};gl.useEffectEvent=kn;var af={readContext:Kn,use:Ci,useCallback:function(n,e){return Xn().memoizedState=[n,e===void 0?null:e],n},useContext:Kn,useEffect:Wo,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Pi(4194308,4,Qo.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Pi(4194308,4,n,e)},useInsertionEffect:function(n,e){Pi(4,2,n,e)},useMemo:function(n,e){var t=Xn();e=e===void 0?null:e;var a=n();if(Ft){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Xn();if(t!==void 0){var l=t(e);if(Ft){ut(!0);try{t(e)}finally{ut(!1)}}}else l=e;return a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},a.queue=n,n=n.dispatch=ag.bind(null,F,n),[a.memoizedState,n]},useRef:function(n){var e=Xn();return n={current:n},e.memoizedState=n},useState:function(n){n=bc(n);var e=n.queue,t=nf.bind(null,F,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:kc,useDeferredValue:function(n,e){var t=Xn();return xc(t,n,e)},useTransition:function(){var n=bc(!1);return n=Fo.bind(null,F,n.queue,!0,!1),Xn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=F,l=Xn();if(ln){if(t===void 0)throw Error(r(407));t=t()}else{if(t=e(),vn===null)throw Error(r(349));(en&127)!==0||Ao(a,e,t)}l.memoizedState=t;var i={value:t,getSnapshot:e};return l.queue=i,Wo(xo.bind(null,a,i,n),[n]),a.flags|=2048,Da(9,{destroy:void 0},ko.bind(null,a,i,t,e),null),t},useId:function(){var n=Xn(),e=vn.identifierPrefix;if(ln){var t=Le,a=Oe;t=(a&~(1<<32-re(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=yi++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=Vp++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Dc,useFormState:Oo,useActionState:Oo,useOptimistic:function(n){var e=Xn();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Mc.bind(null,F,!0,t),t.dispatch=e,[n,e]},useMemoCache:yc,useCacheRefresh:function(){return Xn().memoizedState=tg.bind(null,F)},useEffectEvent:function(n){var e=Xn(),t={impl:n};return e.memoizedState=t,function(){if((on&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Rc={readContext:Kn,use:Ci,useCallback:Yo,useContext:Kn,useEffect:Ac,useImperativeHandle:qo,useInsertionEffect:Io,useLayoutEffect:Ko,useMemo:Go,useReducer:bi,useRef:jo,useState:function(){return bi(Ze)},useDebugValue:kc,useDeferredValue:function(n,e){var t=Mn();return Xo(t,mn.memoizedState,n,e)},useTransition:function(){var n=bi(Ze)[0],e=Mn().memoizedState;return[typeof n=="boolean"?n:hl(n),e]},useSyncExternalStore:Po,useId:Jo,useHostTransitionStatus:Dc,useFormState:Lo,useActionState:Lo,useOptimistic:function(n,e){var t=Mn();return Mo(t,mn,n,e)},useMemoCache:yc,useCacheRefresh:$o};Rc.useEffectEvent=_o;var lf={readContext:Kn,use:Ci,useCallback:Yo,useContext:Kn,useEffect:Ac,useImperativeHandle:qo,useInsertionEffect:Io,useLayoutEffect:Ko,useMemo:Go,useReducer:Cc,useRef:jo,useState:function(){return Cc(Ze)},useDebugValue:kc,useDeferredValue:function(n,e){var t=Mn();return mn===null?xc(t,n,e):Xo(t,mn.memoizedState,n,e)},useTransition:function(){var n=Cc(Ze)[0],e=Mn().memoizedState;return[typeof n=="boolean"?n:hl(n),e]},useSyncExternalStore:Po,useId:Jo,useHostTransitionStatus:Dc,useFormState:zo,useActionState:zo,useOptimistic:function(n,e){var t=Mn();return mn!==null?Mo(t,mn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:yc,useCacheRefresh:$o};lf.useEffectEvent=_o;function wc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ec={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=me(),l=mt(a);l.payload=e,t!=null&&(l.callback=t),e=St(n,l,a),e!==null&&(se(e,n,a),rl(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=me(),l=mt(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=St(n,l,a),e!==null&&(se(e,n,a),rl(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=me(),a=mt(t);a.tag=2,e!=null&&(a.callback=e),e=St(n,a,t),e!==null&&(se(e,n,t),rl(e,n,t))}};function sf(n,e,t,a,l,i,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,i,c):e.prototype&&e.prototype.isPureReactComponent?!el(t,a)||!el(l,i):!0}function cf(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&Ec.enqueueReplaceState(e,e.state,null)}function Vt(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=U({},t));for(var l in n)t[l]===void 0&&(t[l]=n[l])}return t}function uf(n){ai(n)}function rf(n){console.error(n)}function of(n){ai(n)}function xi(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ff(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uc(n,e,t){return t=mt(t),t.tag=3,t.payload={element:null},t.callback=function(){xi(n,e)},t}function df(n){return n=mt(n),n.tag=3,n}function hf(n,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;n.payload=function(){return l(i)},n.callback=function(){ff(e,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){ff(e,t,a),typeof l!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function lg(n,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&va(e,t,l,!0),t=de.current,t!==null){switch(t.tag){case 31:case 13:return Ae===null?zi():t.alternate===null&&xn===0&&(xn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===hi?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),lu(n,a,l)),!1;case 22:return t.flags|=65536,a===hi?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),lu(n,a,l)),!1}throw Error(r(435,t.tag))}return lu(n,a,l),zi(),!1}if(ln)return e=de.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Js&&(n=Error(r(422),{cause:a}),ll(ve(n,t)))):(a!==Js&&(e=Error(r(423),{cause:a}),ll(ve(e,t))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,a=ve(a,t),l=Uc(n.stateNode,a,l),rc(n,l),xn!==4&&(xn=2)),!1;var i=Error(r(520),{cause:a});if(i=ve(i,t),Pl===null?Pl=[i]:Pl.push(i),xn!==4&&(xn=2),e===null)return!0;a=ve(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=l&-l,t.lanes|=n,n=Uc(t.stateNode,a,n),rc(t,n),!1;case 1:if(e=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Pt===null||!Pt.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=df(l),hf(l,n,t,a),rc(t,l),!1}t=t.return}while(t!==null);return!1}var Hc=Error(r(461)),Un=!1;function Qn(n,e,t,a){e.child=n===null?mo(e,null,t,a):Xt(e,n.child,t,a)}function pf(n,e,t,a,l){t=t.render;var i=e.ref;if("ref"in a){var c={};for(var h in a)h!=="ref"&&(c[h]=a[h])}else c=a;return Qt(e),a=gc(n,e,t,c,i,l),h=mc(),n!==null&&!Un?(Sc(n,e,l),Je(n,e,l)):(ln&&h&&Vs(e),e.flags|=1,Qn(n,e,a,l),e.child)}function gf(n,e,t,a,l){if(n===null){var i=t.type;return typeof i=="function"&&!Gs(i)&&i.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=i,mf(n,e,i,a,l)):(n=ci(t.type,null,a,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!Ic(n,l)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:el,t(c,a)&&n.ref===e.ref)return Je(n,e,l)}return e.flags|=1,n=Ye(i,a),n.ref=e.ref,n.return=e,e.child=n}function mf(n,e,t,a,l){if(n!==null){var i=n.memoizedProps;if(el(i,a)&&n.ref===e.ref)if(Un=!1,e.pendingProps=a=i,Ic(n,l))(n.flags&131072)!==0&&(Un=!0);else return e.lanes=n.lanes,Je(n,e,l)}return Oc(n,e,t,a,l)}function Sf(n,e,t,a){var l=a.children,i=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,e.child=null;return Tf(n,e,i,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&fi(e,i!==null?i.cachePool:null),i!==null?yo(e,i):fc(),vo(e);else return a=e.lanes=536870912,Tf(n,e,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(fi(e,i.cachePool),yo(e,i),yt(),e.memoizedState=null):(n!==null&&fi(e,null),fc(),yt());return Qn(n,e,l,t),e.child}function ml(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Tf(n,e,t,a,l){var i=ic();return i=i===null?null:{parent:wn._currentValue,pool:i},e.memoizedState={baseLanes:t,cachePool:i},n!==null&&fi(e,null),fc(),vo(e),n!==null&&va(n,e,a,!0),e.childLanes=l,null}function Ni(n,e){return e=Mi({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function yf(n,e,t){return Xt(e,n.child,null,t),n=Ni(e,e.pendingProps),n.flags|=2,he(e),e.memoizedState=null,n}function ig(n,e,t){var a=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(ln){if(a.mode==="hidden")return n=Ni(e,a),e.lanes=536870912,ml(null,n);if(hc(e),(n=Cn)?(n=wd(n,Pe),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ft!==null?{id:Oe,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},t=no(n),t.return=e,e.child=t,In=e,Cn=null)):n=null,n===null)throw ht(e);return e.lanes=536870912,null}return Ni(e,a)}var i=n.memoizedState;if(i!==null){var c=i.dehydrated;if(hc(e),l)if(e.flags&256)e.flags&=-257,e=yf(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(r(558));else if(Un||va(n,e,t,!1),l=(t&n.childLanes)!==0,Un||l){if(a=vn,a!==null&&(c=cr(a,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,Wt(n,c),se(a,n,c),Hc;zi(),e=yf(n,e,t)}else n=i.treeContext,Cn=ke(c.nextSibling),In=e,ln=!0,dt=null,Pe=!1,n!==null&&ao(e,n),e=Ni(e,a),e.flags|=4096;return e}return n=Ye(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Di(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Oc(n,e,t,a,l){return Qt(e),t=gc(n,e,t,a,void 0,l),a=mc(),n!==null&&!Un?(Sc(n,e,l),Je(n,e,l)):(ln&&a&&Vs(e),e.flags|=1,Qn(n,e,t,l),e.child)}function vf(n,e,t,a,l,i){return Qt(e),e.updateQueue=null,t=bo(e,a,t,l),Co(n),a=mc(),n!==null&&!Un?(Sc(n,e,i),Je(n,e,i)):(ln&&a&&Vs(e),e.flags|=1,Qn(n,e,t,i),e.child)}function Cf(n,e,t,a,l){if(Qt(e),e.stateNode===null){var i=ma,c=t.contextType;typeof c=="object"&&c!==null&&(i=Kn(c)),i=new t(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ec,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},cc(e),c=t.contextType,i.context=typeof c=="object"&&c!==null?Kn(c):ma,i.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(wc(e,t,c,a),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Ec.enqueueReplaceState(i,i.state,null),fl(e,a,i,l),ol(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){i=e.stateNode;var h=e.memoizedProps,S=Vt(t,h);i.props=S;var P=i.context,N=t.contextType;c=ma,typeof N=="object"&&N!==null&&(c=Kn(N));var w=t.getDerivedStateFromProps;N=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||P!==c)&&cf(e,i,a,c),gt=!1;var A=e.memoizedState;i.state=A,fl(e,a,i,l),ol(),P=e.memoizedState,h||A!==P||gt?(typeof w=="function"&&(wc(e,t,w,a),P=e.memoizedState),(S=gt||sf(e,t,S,a,A,P,c))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=P),i.props=a,i.state=P,i.context=c,a=S):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,uc(n,e),c=e.memoizedProps,N=Vt(t,c),i.props=N,w=e.pendingProps,A=i.context,P=t.contextType,S=ma,typeof P=="object"&&P!==null&&(S=Kn(P)),h=t.getDerivedStateFromProps,(P=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==w||A!==S)&&cf(e,i,a,S),gt=!1,A=e.memoizedState,i.state=A,fl(e,a,i,l),ol();var k=e.memoizedState;c!==w||A!==k||gt||n!==null&&n.dependencies!==null&&ri(n.dependencies)?(typeof h=="function"&&(wc(e,t,h,a),k=e.memoizedState),(N=gt||sf(e,t,N,a,A,k,S)||n!==null&&n.dependencies!==null&&ri(n.dependencies))?(P||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,k,S),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,k,S)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&A===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&A===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=k),i.props=a,i.state=k,i.context=S,a=N):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&A===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&A===n.memoizedState||(e.flags|=1024),a=!1)}return i=a,Di(n,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,n!==null&&a?(e.child=Xt(e,n.child,null,l),e.child=Xt(e,null,t,l)):Qn(n,e,t,l),e.memoizedState=i.state,n=e.child):n=Je(n,e,l),n}function bf(n,e,t,a){return It(),e.flags|=256,Qn(n,e,t,a),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(n){return{baseLanes:n,cachePool:ro()}}function zc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ge),n}function Pf(n,e,t){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=n!==null&&n.memoizedState===null?!1:(Dn.current&2)!==0),c&&(l=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,n===null){if(ln){if(l?Tt(e):yt(),(n=Cn)?(n=wd(n,Pe),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ft!==null?{id:Oe,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},t=no(n),t.return=e,e.child=t,In=e,Cn=null)):n=null,n===null)throw ht(e);return vu(n)?e.lanes=32:e.lanes=536870912,null}var h=a.children;return a=a.fallback,l?(yt(),l=e.mode,h=Mi({mode:"hidden",children:h},l),a=_t(a,l,t,null),h.return=e,a.return=e,h.sibling=a,e.child=h,a=e.child,a.memoizedState=Bc(t),a.childLanes=zc(n,c,t),e.memoizedState=Lc,ml(null,a)):(Tt(e),jc(e,h))}var S=n.memoizedState;if(S!==null&&(h=S.dehydrated,h!==null)){if(i)e.flags&256?(Tt(e),e.flags&=-257,e=Wc(n,e,t)):e.memoizedState!==null?(yt(),e.child=n.child,e.flags|=128,e=null):(yt(),h=a.fallback,l=e.mode,a=Mi({mode:"visible",children:a.children},l),h=_t(h,l,t,null),h.flags|=2,a.return=e,h.return=e,a.sibling=h,e.child=a,Xt(e,n.child,null,t),a=e.child,a.memoizedState=Bc(t),a.childLanes=zc(n,c,t),e.memoizedState=Lc,e=ml(null,a));else if(Tt(e),vu(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var P=c.dgst;c=P,a=Error(r(419)),a.stack="",a.digest=c,ll({value:a,source:null,stack:null}),e=Wc(n,e,t)}else if(Un||va(n,e,t,!1),c=(t&n.childLanes)!==0,Un||c){if(c=vn,c!==null&&(a=cr(c,t),a!==0&&a!==S.retryLane))throw S.retryLane=a,Wt(n,a),se(c,n,a),Hc;yu(h)||zi(),e=Wc(n,e,t)}else yu(h)?(e.flags|=192,e.child=n.child,e=null):(n=S.treeContext,Cn=ke(h.nextSibling),In=e,ln=!0,dt=null,Pe=!1,n!==null&&ao(e,n),e=jc(e,a.children),e.flags|=4096);return e}return l?(yt(),h=a.fallback,l=e.mode,S=n.child,P=S.sibling,a=Ye(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,P!==null?h=Ye(P,h):(h=_t(h,l,t,null),h.flags|=2),h.return=e,a.return=e,a.sibling=h,e.child=a,ml(null,a),a=e.child,h=n.child.memoizedState,h===null?h=Bc(t):(l=h.cachePool,l!==null?(S=wn._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=ro(),h={baseLanes:h.baseLanes|t,cachePool:l}),a.memoizedState=h,a.childLanes=zc(n,c,t),e.memoizedState=Lc,ml(n.child,a)):(Tt(e),t=n.child,n=t.sibling,t=Ye(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(c=e.deletions,c===null?(e.deletions=[n],e.flags|=16):c.push(n)),e.child=t,e.memoizedState=null,t)}function jc(n,e){return e=Mi({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Mi(n,e){return n=fe(22,n,null,e),n.lanes=0,n}function Wc(n,e,t){return Xt(e,n.child,null,t),n=jc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Af(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),ec(n.return,e,t)}function _c(n,e,t,a,l,i){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l,c.treeForkCount=i)}function kf(n,e,t){var a=e.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var c=Dn.current,h=(c&2)!==0;if(h?(c=c&1|2,e.flags|=128):c&=1,O(Dn,c),Qn(n,e,a,t),a=ln?al:0,!h&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Af(n,t,e);else if(n.tag===19)Af(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Si(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),_c(e,!1,l,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Si(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}_c(e,!0,t,null,i,a);break;case"together":_c(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Je(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bt|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(va(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(r(153));if(e.child!==null){for(n=e.child,t=Ye(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ye(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ic(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&ri(n)))}function sg(n,e,t){switch(e.tag){case 3:Gn(e,e.stateNode.containerInfo),pt(e,wn,n.memoizedState.cache),It();break;case 27:case 5:Ia(e);break;case 4:Gn(e,e.stateNode.containerInfo);break;case 10:pt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hc(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Tt(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Pf(n,e,t):(Tt(e),n=Je(n,e,t),n!==null?n.sibling:null);Tt(e);break;case 19:var l=(n.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(va(n,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return kf(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(Dn,Dn.current),a)break;return null;case 22:return e.lanes=0,Sf(n,e,t,e.pendingProps);case 24:pt(e,wn,n.memoizedState.cache)}return Je(n,e,t)}function xf(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Un=!0;else{if(!Ic(n,t)&&(e.flags&128)===0)return Un=!1,sg(n,e,t);Un=(n.flags&131072)!==0}else Un=!1,ln&&(e.flags&1048576)!==0&&to(e,al,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=Yt(e.elementType),e.type=n,typeof n=="function")Gs(n)?(a=Vt(n,a),e.tag=1,e=Cf(null,e,n,a,t)):(e.tag=0,e=Oc(null,e,n,a,t));else{if(n!=null){var l=n.$$typeof;if(l===Vn){e.tag=11,e=pf(null,e,n,a,t);break n}else if(l===an){e.tag=14,e=gf(null,e,n,a,t);break n}}throw e=Ie(n)||n,Error(r(306,e,""))}}return e;case 0:return Oc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=Vt(a,e.pendingProps),Cf(n,e,a,l,t);case 3:n:{if(Gn(e,e.stateNode.containerInfo),n===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,uc(n,e),fl(e,a,null,t);var c=e.memoizedState;if(a=c.cache,pt(e,wn,a),a!==i.cache&&tc(e,[wn],t,!0),ol(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=bf(n,e,a,t);break n}else if(a!==l){l=ve(Error(r(424)),e),ll(l),e=bf(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Cn=ke(n.firstChild),In=e,ln=!0,dt=null,Pe=!0,t=mo(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(It(),a===l){e=Je(n,e,t);break n}Qn(n,e,a,t)}e=e.child}return e;case 26:return Di(n,e),n===null?(t=Bd(e.type,null,e.pendingProps,null))?e.memoizedState=t:ln||(t=e.type,n=e.pendingProps,a=qi(Z.current).createElement(t),a[_n]=e,a[ne]=n,qn(a,t,n),zn(a),e.stateNode=a):e.memoizedState=Bd(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ia(e),n===null&&ln&&(a=e.stateNode=Hd(e.type,e.pendingProps,Z.current),In=e,Pe=!0,l=Cn,Nt(e.type)?(Cu=l,Cn=ke(a.firstChild)):Cn=l),Qn(n,e,e.pendingProps.children,t),Di(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&ln&&((l=a=Cn)&&(a=Lg(a,e.type,e.pendingProps,Pe),a!==null?(e.stateNode=a,In=e,Cn=ke(a.firstChild),Pe=!1,l=!0):l=!1),l||ht(e)),Ia(e),l=e.type,i=e.pendingProps,c=n!==null?n.memoizedProps:null,a=i.children,mu(l,i)?a=null:c!==null&&mu(l,c)&&(e.flags|=32),e.memoizedState!==null&&(l=gc(n,e,Zp,null,null,t),wl._currentValue=l),Di(n,e),Qn(n,e,a,t),e.child;case 6:return n===null&&ln&&((n=t=Cn)&&(t=Bg(t,e.pendingProps,Pe),t!==null?(e.stateNode=t,In=e,Cn=null,n=!0):n=!1),n||ht(e)),null;case 13:return Pf(n,e,t);case 4:return Gn(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Xt(e,null,a,t):Qn(n,e,a,t),e.child;case 11:return pf(n,e,e.type,e.pendingProps,t);case 7:return Qn(n,e,e.pendingProps,t),e.child;case 8:return Qn(n,e,e.pendingProps.children,t),e.child;case 12:return Qn(n,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,pt(e,e.type,a.value),Qn(n,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Qt(e),l=Kn(l),a=a(l),e.flags|=1,Qn(n,e,a,t),e.child;case 14:return gf(n,e,e.type,e.pendingProps,t);case 15:return mf(n,e,e.type,e.pendingProps,t);case 19:return kf(n,e,t);case 31:return ig(n,e,t);case 22:return Sf(n,e,t,e.pendingProps);case 24:return Qt(e),a=Kn(wn),n===null?(l=ic(),l===null&&(l=vn,i=ac(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),e.memoizedState={parent:a,cache:l},cc(e),pt(e,wn,l)):((n.lanes&t)!==0&&(uc(n,e),fl(e,null,null,t),ol()),l=n.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),pt(e,wn,a)):(a=i.cache,pt(e,wn,a),a!==l.cache&&tc(e,[wn],t,!0))),Qn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function $e(n){n.flags|=4}function Kc(n,e,t,a,l){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(l&335544128)===l)if(n.stateNode.complete)n.flags|=8192;else if($f())n.flags|=8192;else throw Gt=hi,sc}else n.flags&=-16777217}function Nf(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Id(e))if($f())n.flags|=8192;else throw Gt=hi,sc}function Ri(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?lr():536870912,n.lanes|=e,Ea|=e)}function Sl(n,e){if(!ln)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function cg(n,e,t){var a=e.pendingProps;switch(Zs(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(e),null;case 1:return bn(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Fe(wn),Nn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ya(e)?$e(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$s())),bn(e),null;case 26:var l=e.type,i=e.memoizedState;return n===null?($e(e),i!==null?(bn(e),Nf(e,i)):(bn(e),Kc(e,l,null,a,t))):i?i!==n.memoizedState?($e(e),bn(e),Nf(e,i)):(bn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&$e(e),bn(e),Kc(e,l,n,a,t)),null;case 27:if(_l(e),t=Z.current,l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&$e(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return bn(e),null}n=z.current,ya(e)?lo(e):(n=Hd(l,a,t),e.stateNode=n,$e(e))}return bn(e),null;case 5:if(_l(e),l=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&$e(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return bn(e),null}if(i=z.current,ya(e))lo(e);else{var c=qi(Z.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}i[_n]=e,i[ne]=a;n:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break n;for(;c.sibling===null;){if(c.return===null||c.return===e)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;n:switch(qn(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&$e(e)}}return bn(e),Kc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&$e(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(n=Z.current,ya(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,l=In,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}n[_n]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Pd(n.nodeValue,t)),n||ht(e,!0)}else n=qi(n).createTextNode(a),n[_n]=e,e.stateNode=n}return bn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=ya(e),t!==null){if(n===null){if(!a)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[_n]=e}else It(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bn(e),n=!1}else t=$s(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(he(e),e):(he(e),null);if((e.flags&128)!==0)throw Error(r(558))}return bn(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=ya(e),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(r(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[_n]=e}else It(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bn(e),l=!1}else l=$s(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(he(e),e):(he(e),null)}return he(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Ri(e,e.updateQueue),bn(e),null);case 4:return Nn(),n===null&&fu(e.stateNode.containerInfo),bn(e),null;case 10:return Fe(e.type),bn(e),null;case 19:if(E(Dn),a=e.memoizedState,a===null)return bn(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)Sl(a,!1);else{if(xn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(i=Si(n),i!==null){for(e.flags|=128,Sl(a,!1),n=i.updateQueue,e.updateQueue=n,Ri(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)$r(t,n),t=t.sibling;return O(Dn,Dn.current&1|2),ln&&Ge(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&ce()>Oi&&(e.flags|=128,l=!0,Sl(a,!1),e.lanes=4194304)}else{if(!l)if(n=Si(i),n!==null){if(e.flags|=128,l=!0,n=n.updateQueue,e.updateQueue=n,Ri(e,n),Sl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ln)return bn(e),null}else 2*ce()-a.renderingStartTime>Oi&&t!==536870912&&(e.flags|=128,l=!0,Sl(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(n=a.last,n!==null?n.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=ce(),n.sibling=null,t=Dn.current,O(Dn,l?t&1|2:t&1),ln&&Ge(e,a.treeForkCount),n):(bn(e),null);case 22:case 23:return he(e),dc(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(bn(e),e.subtreeFlags&6&&(e.flags|=8192)):bn(e),t=e.updateQueue,t!==null&&Ri(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&E(qt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Fe(wn),bn(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function ug(n,e){switch(Zs(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Fe(wn),Nn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return _l(e),null;case 31:if(e.memoizedState!==null){if(he(e),e.alternate===null)throw Error(r(340));It()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(he(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(r(340));It()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return E(Dn),null;case 4:return Nn(),null;case 10:return Fe(e.type),null;case 22:case 23:return he(e),dc(),n!==null&&E(qt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Fe(wn),null;case 25:return null;default:return null}}function Df(n,e){switch(Zs(e),e.tag){case 3:Fe(wn),Nn();break;case 26:case 27:case 5:_l(e);break;case 4:Nn();break;case 31:e.memoizedState!==null&&he(e);break;case 13:he(e);break;case 19:E(Dn);break;case 10:Fe(e.type);break;case 22:case 23:he(e),dc(),n!==null&&E(qt);break;case 24:Fe(wn)}}function Tl(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&n)===n){a=void 0;var i=t.create,c=t.inst;a=i(),c.destroy=a}t=t.next}while(t!==l)}}catch(h){pn(e,e.return,h)}}function vt(n,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&n)===n){var c=a.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,l=e;var S=t,P=h;try{P()}catch(N){pn(l,S,N)}}}a=a.next}while(a!==i)}}catch(N){pn(e,e.return,N)}}function Mf(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{To(e,t)}catch(a){pn(n,n.return,a)}}}function Rf(n,e,t){t.props=Vt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){pn(n,e,a)}}function yl(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(l){pn(n,e,l)}}function Be(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){pn(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){pn(n,e,l)}else t.current=null}function wf(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){pn(n,n.return,l)}}function Qc(n,e,t){try{var a=n.stateNode;Rg(a,n.type,t,e),a[ne]=e}catch(l){pn(n,n.return,l)}}function Ef(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Nt(n.type)||n.tag===4}function qc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ef(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Nt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yc(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qe));else if(a!==4&&(a===27&&Nt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Yc(n,e,t),n=n.sibling;n!==null;)Yc(n,e,t),n=n.sibling}function wi(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(a===27&&Nt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(wi(n,e,t),n=n.sibling;n!==null;)wi(n,e,t),n=n.sibling}function Uf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);qn(e,a,t),e[_n]=n,e[ne]=t}catch(i){pn(n,n.return,i)}}var nt=!1,Hn=!1,Gc=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,jn=null;function rg(n,e){if(n=n.containerInfo,pu=Ji,n=Qr(n),Ws(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var c=0,h=-1,S=-1,P=0,N=0,w=n,A=null;e:for(;;){for(var k;w!==t||l!==0&&w.nodeType!==3||(h=c+l),w!==i||a!==0&&w.nodeType!==3||(S=c+a),w.nodeType===3&&(c+=w.nodeValue.length),(k=w.firstChild)!==null;)A=w,w=k;for(;;){if(w===n)break e;if(A===t&&++P===l&&(h=c),A===i&&++N===a&&(S=c),(k=w.nextSibling)!==null)break;w=A,A=w.parentNode}w=k}t=h===-1||S===-1?null:{start:h,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(gu={focusedElem:n,selectionRange:t},Ji=!1,jn=e;jn!==null;)if(e=jn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,jn=n;else for(;jn!==null;){switch(e=jn,i=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)l=n[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,t=e,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var L=Vt(t.type,l);n=a.getSnapshotBeforeUpdate(L,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(I){pn(t,t.return,I)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Tu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Tu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=e.sibling,n!==null){n.return=e.return,jn=n;break}jn=e.return}}function Of(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:tt(n,t),a&4&&Tl(5,t);break;case 1:if(tt(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(c){pn(t,t.return,c)}else{var l=Vt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(c){pn(t,t.return,c)}}a&64&&Mf(t),a&512&&yl(t,t.return);break;case 3:if(tt(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{To(n,e)}catch(c){pn(t,t.return,c)}}break;case 27:e===null&&a&4&&Uf(t);case 26:case 5:tt(n,t),e===null&&a&4&&wf(t),a&512&&yl(t,t.return);break;case 12:tt(n,t);break;case 31:tt(n,t),a&4&&zf(n,t);break;case 13:tt(n,t),a&4&&jf(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Tg.bind(null,t),zg(n,t))));break;case 22:if(a=t.memoizedState!==null||nt,!a){e=e!==null&&e.memoizedState!==null||Hn,l=nt;var i=Hn;nt=a,(Hn=e)&&!i?at(n,t,(t.subtreeFlags&8772)!==0):tt(n,t),nt=l,Hn=i}break;case 30:break;default:tt(n,t)}}function Lf(n){var e=n.alternate;e!==null&&(n.alternate=null,Lf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Ps(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var An=null,te=!1;function et(n,e,t){for(t=t.child;t!==null;)Bf(n,e,t),t=t.sibling}function Bf(n,e,t){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Ka,t)}catch{}switch(t.tag){case 26:Hn||Be(t,e),et(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Hn||Be(t,e);var a=An,l=te;Nt(t.type)&&(An=t.stateNode,te=!1),et(n,e,t),Dl(t.stateNode),An=a,te=l;break;case 5:Hn||Be(t,e);case 6:if(a=An,l=te,An=null,et(n,e,t),An=a,te=l,An!==null)if(te)try{(An.nodeType===9?An.body:An.nodeName==="HTML"?An.ownerDocument.body:An).removeChild(t.stateNode)}catch(i){pn(t,e,i)}else try{An.removeChild(t.stateNode)}catch(i){pn(t,e,i)}break;case 18:An!==null&&(te?(n=An,Md(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Wa(n)):Md(An,t.stateNode));break;case 4:a=An,l=te,An=t.stateNode.containerInfo,te=!0,et(n,e,t),An=a,te=l;break;case 0:case 11:case 14:case 15:vt(2,t,e),Hn||vt(4,t,e),et(n,e,t);break;case 1:Hn||(Be(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Rf(t,e,a)),et(n,e,t);break;case 21:et(n,e,t);break;case 22:Hn=(a=Hn)||t.memoizedState!==null,et(n,e,t),Hn=a;break;default:et(n,e,t)}}function zf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Wa(n)}catch(t){pn(e,e.return,t)}}}function jf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Wa(n)}catch(t){pn(e,e.return,t)}}function og(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Hf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Hf),e;default:throw Error(r(435,n.tag))}}function Ei(n,e){var t=og(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var l=yg.bind(null,n,a);a.then(l,l)}})}function ae(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=n,c=e,h=c;n:for(;h!==null;){switch(h.tag){case 27:if(Nt(h.type)){An=h.stateNode,te=!1;break n}break;case 5:An=h.stateNode,te=!1;break n;case 3:case 4:An=h.stateNode.containerInfo,te=!0;break n}h=h.return}if(An===null)throw Error(r(160));Bf(i,c,l),An=null,te=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Wf(e,n),e=e.sibling}var Me=null;function Wf(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ae(e,n),le(n),a&4&&(vt(3,n,n.return),Tl(3,n),vt(5,n,n.return));break;case 1:ae(e,n),le(n),a&512&&(Hn||t===null||Be(t,t.return)),a&64&&nt&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Me;if(ae(e,n),le(n),a&512&&(Hn||t===null||Be(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=n.memoizedState,t===null)if(a===null)if(n.stateNode===null){n:{a=n.type,t=n.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ya]||i[_n]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),qn(i,a,t),i[_n]=n,zn(i),a=i;break n;case"link":var c=Wd("link","href",l).get(a+(t.href||""));if(c){for(var h=0;h<c.length;h++)if(i=c[h],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(h,1);break e}}i=l.createElement(a),qn(i,a,t),l.head.appendChild(i);break;case"meta":if(c=Wd("meta","content",l).get(a+(t.content||""))){for(h=0;h<c.length;h++)if(i=c[h],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(h,1);break e}}i=l.createElement(a),qn(i,a,t),l.head.appendChild(i);break;default:throw Error(r(468,a))}i[_n]=n,zn(i),a=i}n.stateNode=a}else _d(l,n.type,n.stateNode);else n.stateNode=jd(l,a,n.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?_d(l,n.type,n.stateNode):jd(l,a,n.memoizedProps)):a===null&&n.stateNode!==null&&Qc(n,n.memoizedProps,t.memoizedProps)}break;case 27:ae(e,n),le(n),a&512&&(Hn||t===null||Be(t,t.return)),t!==null&&a&4&&Qc(n,n.memoizedProps,t.memoizedProps);break;case 5:if(ae(e,n),le(n),a&512&&(Hn||t===null||Be(t,t.return)),n.flags&32){l=n.stateNode;try{ra(l,"")}catch(L){pn(n,n.return,L)}}a&4&&n.stateNode!=null&&(l=n.memoizedProps,Qc(n,l,t!==null?t.memoizedProps:l)),a&1024&&(Gc=!0);break;case 6:if(ae(e,n),le(n),a&4){if(n.stateNode===null)throw Error(r(162));a=n.memoizedProps,t=n.stateNode;try{t.nodeValue=a}catch(L){pn(n,n.return,L)}}break;case 3:if(Xi=null,l=Me,Me=Yi(e.containerInfo),ae(e,n),Me=l,le(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(L){pn(n,n.return,L)}Gc&&(Gc=!1,_f(n));break;case 4:a=Me,Me=Yi(n.stateNode.containerInfo),ae(e,n),le(n),Me=a;break;case 12:ae(e,n),le(n);break;case 31:ae(e,n),le(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ei(n,a)));break;case 13:ae(e,n),le(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Hi=ce()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ei(n,a)));break;case 22:l=n.memoizedState!==null;var S=t!==null&&t.memoizedState!==null,P=nt,N=Hn;if(nt=P||l,Hn=N||S,ae(e,n),Hn=N,nt=P,le(n),a&8192)n:for(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||S||nt||Hn||Zt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){S=t=e;try{if(i=S.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=S.stateNode;var w=S.memoizedProps.style,A=w!=null&&w.hasOwnProperty("display")?w.display:null;h.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(L){pn(S,S.return,L)}}}else if(e.tag===6){if(t===null){S=e;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(L){pn(S,S.return,L)}}}else if(e.tag===18){if(t===null){S=e;try{var k=S.stateNode;l?Rd(k,!0):Rd(S.stateNode,!1)}catch(L){pn(S,S.return,L)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ei(n,t))));break;case 19:ae(e,n),le(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ei(n,a)));break;case 30:break;case 21:break;default:ae(e,n),le(n)}}function le(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(Ef(a)){t=a;break}a=a.return}if(t==null)throw Error(r(160));switch(t.tag){case 27:var l=t.stateNode,i=qc(n);wi(n,i,l);break;case 5:var c=t.stateNode;t.flags&32&&(ra(c,""),t.flags&=-33);var h=qc(n);wi(n,h,c);break;case 3:case 4:var S=t.stateNode.containerInfo,P=qc(n);Yc(n,P,S);break;default:throw Error(r(161))}}catch(N){pn(n,n.return,N)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function _f(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;_f(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function tt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Of(n,e.alternate,e),e=e.sibling}function Zt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:vt(4,e,e.return),Zt(e);break;case 1:Be(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Rf(e,e.return,t),Zt(e);break;case 27:Dl(e.stateNode);case 26:case 5:Be(e,e.return),Zt(e);break;case 22:e.memoizedState===null&&Zt(e);break;case 30:Zt(e);break;default:Zt(e)}n=n.sibling}}function at(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=n,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:at(l,i,t),Tl(4,i);break;case 1:if(at(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(P){pn(a,a.return,P)}if(a=i,l=a.updateQueue,l!==null){var h=a.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)So(S[l],h)}catch(P){pn(a,a.return,P)}}t&&c&64&&Mf(i),yl(i,i.return);break;case 27:Uf(i);case 26:case 5:at(l,i,t),t&&a===null&&c&4&&wf(i),yl(i,i.return);break;case 12:at(l,i,t);break;case 31:at(l,i,t),t&&c&4&&zf(l,i);break;case 13:at(l,i,t),t&&c&4&&jf(l,i);break;case 22:i.memoizedState===null&&at(l,i,t),yl(i,i.return);break;case 30:break;default:at(l,i,t)}e=e.sibling}}function Xc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&il(t))}function Fc(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&il(n))}function Re(n,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)If(n,e,t,a),e=e.sibling}function If(n,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Re(n,e,t,a),l&2048&&Tl(9,e);break;case 1:Re(n,e,t,a);break;case 3:Re(n,e,t,a),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&il(n)));break;case 12:if(l&2048){Re(n,e,t,a),n=e.stateNode;try{var i=e.memoizedProps,c=i.id,h=i.onPostCommit;typeof h=="function"&&h(c,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(S){pn(e,e.return,S)}}else Re(n,e,t,a);break;case 31:Re(n,e,t,a);break;case 13:Re(n,e,t,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?Re(n,e,t,a):vl(n,e):i._visibility&2?Re(n,e,t,a):(i._visibility|=2,Ma(n,e,t,a,(e.subtreeFlags&10256)!==0||!1)),l&2048&&Xc(c,e);break;case 24:Re(n,e,t,a),l&2048&&Fc(e.alternate,e);break;default:Re(n,e,t,a)}}function Ma(n,e,t,a,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=n,c=e,h=t,S=a,P=c.flags;switch(c.tag){case 0:case 11:case 15:Ma(i,c,h,S,l),Tl(8,c);break;case 23:break;case 22:var N=c.stateNode;c.memoizedState!==null?N._visibility&2?Ma(i,c,h,S,l):vl(i,c):(N._visibility|=2,Ma(i,c,h,S,l)),l&&P&2048&&Xc(c.alternate,c);break;case 24:Ma(i,c,h,S,l),l&&P&2048&&Fc(c.alternate,c);break;default:Ma(i,c,h,S,l)}e=e.sibling}}function vl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,l=a.flags;switch(a.tag){case 22:vl(t,a),l&2048&&Xc(a.alternate,a);break;case 24:vl(t,a),l&2048&&Fc(a.alternate,a);break;default:vl(t,a)}e=e.sibling}}var Cl=8192;function Ra(n,e,t){if(n.subtreeFlags&Cl)for(n=n.child;n!==null;)Kf(n,e,t),n=n.sibling}function Kf(n,e,t){switch(n.tag){case 26:Ra(n,e,t),n.flags&Cl&&n.memoizedState!==null&&Vg(t,Me,n.memoizedState,n.memoizedProps);break;case 5:Ra(n,e,t);break;case 3:case 4:var a=Me;Me=Yi(n.stateNode.containerInfo),Ra(n,e,t),Me=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Cl,Cl=16777216,Ra(n,e,t),Cl=a):Ra(n,e,t));break;default:Ra(n,e,t)}}function Qf(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function bl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];jn=a,Yf(a,n)}Qf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qf(n),n=n.sibling}function qf(n){switch(n.tag){case 0:case 11:case 15:bl(n),n.flags&2048&&vt(9,n,n.return);break;case 3:bl(n);break;case 12:bl(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Ui(n)):bl(n);break;default:bl(n)}}function Ui(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];jn=a,Yf(a,n)}Qf(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:vt(8,e,e.return),Ui(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Ui(e));break;default:Ui(e)}n=n.sibling}}function Yf(n,e){for(;jn!==null;){var t=jn;switch(t.tag){case 0:case 11:case 15:vt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:il(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,jn=a;else n:for(t=n;jn!==null;){a=jn;var l=a.sibling,i=a.return;if(Lf(a),a===t){jn=null;break n}if(l!==null){l.return=i,jn=l;break n}jn=i}}}var fg={getCacheForType:function(n){var e=Kn(wn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Kn(wn).controller.signal}},dg=typeof WeakMap=="function"?WeakMap:Map,on=0,vn=null,J=null,en=0,hn=0,pe=null,Ct=!1,wa=!1,Vc=!1,lt=0,xn=0,bt=0,Jt=0,Zc=0,ge=0,Ea=0,Pl=null,ie=null,Jc=!1,Hi=0,Gf=0,Oi=1/0,Li=null,Pt=null,Ln=0,At=null,Ua=null,it=0,$c=0,nu=null,Xf=null,Al=0,eu=null;function me(){return(on&2)!==0&&en!==0?en&-en:D.T!==null?cu():ur()}function Ff(){if(ge===0)if((en&536870912)===0||ln){var n=Ql;Ql<<=1,(Ql&3932160)===0&&(Ql=262144),ge=n}else ge=536870912;return n=de.current,n!==null&&(n.flags|=32),ge}function se(n,e,t){(n===vn&&(hn===2||hn===9)||n.cancelPendingCommit!==null)&&(Ha(n,0),kt(n,en,ge,!1)),qa(n,t),((on&2)===0||n!==vn)&&(n===vn&&((on&2)===0&&(Jt|=t),xn===4&&kt(n,en,ge,!1)),ze(n))}function Vf(n,e,t){if((on&6)!==0)throw Error(r(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Qa(n,e),l=a?gg(n,e):au(n,e,!0),i=a;do{if(l===0){wa&&!a&&kt(n,e,0,!1);break}else{if(t=n.current.alternate,i&&!hg(t)){l=au(n,e,!1),i=!1;continue}if(l===2){if(i=e,n.errorRecoveryDisabledLanes&i)var c=0;else c=n.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;n:{var h=n;l=Pl;var S=h.current.memoizedState.isDehydrated;if(S&&(Ha(h,c).flags|=256),c=au(h,c,!1),c!==2){if(Vc&&!S){h.errorRecoveryDisabledLanes|=i,Jt|=i,l=4;break n}i=ie,ie=l,i!==null&&(ie===null?ie=i:ie.push.apply(ie,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){Ha(n,0),kt(n,e,0,!0);break}n:{switch(a=n,i=l,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:kt(a,e,ge,!Ct);break n;case 2:ie=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(l=Hi+300-ce(),10<l)){if(kt(a,e,ge,!Ct),Yl(a,0,!0)!==0)break n;it=e,a.timeoutHandle=Nd(Zf.bind(null,a,t,ie,Li,Jc,e,ge,Jt,Ea,Ct,i,"Throttled",-0,0),l);break n}Zf(a,t,ie,Li,Jc,e,ge,Jt,Ea,Ct,i,null,-0,0)}}break}while(!0);ze(n)}function Zf(n,e,t,a,l,i,c,h,S,P,N,w,A,k){if(n.timeoutHandle=-1,w=e.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qe},Kf(e,i,w);var L=(i&62914560)===i?Hi-ce():(i&4194048)===i?Gf-ce():0;if(L=Zg(w,L),L!==null){it=i,n.cancelPendingCommit=L(id.bind(null,n,e,i,t,a,l,c,h,S,N,w,null,A,k)),kt(n,i,c,!P);return}}id(n,e,i,t,a,l,c,h,S)}function hg(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!oe(i(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kt(n,e,t,a){e&=~Zc,e&=~Jt,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var l=e;0<l;){var i=31-re(l),c=1<<i;a[i]=-1,l&=~c}t!==0&&ir(n,t,e)}function Bi(){return(on&6)===0?(kl(0),!1):!0}function tu(){if(J!==null){if(hn===0)var n=J.return;else n=J,Xe=Kt=null,Tc(n),Aa=null,cl=0,n=J;for(;n!==null;)Df(n.alternate,n),n=n.return;J=null}}function Ha(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,Ug(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),it=0,tu(),vn=n,J=t=Ye(n.current,null),en=e,hn=0,pe=null,Ct=!1,wa=Qa(n,e),Vc=!1,Ea=ge=Zc=Jt=bt=xn=0,ie=Pl=null,Jc=!1,(e&8)!==0&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var l=31-re(a),i=1<<l;e|=n[l],a&=~i}return lt=e,li(),t}function Jf(n,e){F=null,D.H=gl,e===Pa||e===di?(e=ho(),hn=3):e===sc?(e=ho(),hn=4):hn=e===Hc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,J===null&&(xn=1,xi(n,ve(e,n.current)))}function $f(){var n=de.current;return n===null?!0:(en&4194048)===en?Ae===null:(en&62914560)===en||(en&536870912)!==0?n===Ae:!1}function nd(){var n=D.H;return D.H=gl,n===null?gl:n}function ed(){var n=D.A;return D.A=fg,n}function zi(){xn=4,Ct||(en&4194048)!==en&&de.current!==null||(wa=!0),(bt&134217727)===0&&(Jt&134217727)===0||vn===null||kt(vn,en,ge,!1)}function au(n,e,t){var a=on;on|=2;var l=nd(),i=ed();(vn!==n||en!==e)&&(Li=null,Ha(n,e)),e=!1;var c=xn;n:do try{if(hn!==0&&J!==null){var h=J,S=pe;switch(hn){case 8:tu(),c=6;break n;case 3:case 2:case 9:case 6:de.current===null&&(e=!0);var P=hn;if(hn=0,pe=null,Oa(n,h,S,P),t&&wa){c=0;break n}break;default:P=hn,hn=0,pe=null,Oa(n,h,S,P)}}pg(),c=xn;break}catch(N){Jf(n,N)}while(!0);return e&&n.shellSuspendCounter++,Xe=Kt=null,on=a,D.H=l,D.A=i,J===null&&(vn=null,en=0,li()),c}function pg(){for(;J!==null;)td(J)}function gg(n,e){var t=on;on|=2;var a=nd(),l=ed();vn!==n||en!==e?(Li=null,Oi=ce()+500,Ha(n,e)):wa=Qa(n,e);n:do try{if(hn!==0&&J!==null){e=J;var i=pe;e:switch(hn){case 1:hn=0,pe=null,Oa(n,e,i,1);break;case 2:case 9:if(oo(i)){hn=0,pe=null,ad(e);break}e=function(){hn!==2&&hn!==9||vn!==n||(hn=7),ze(n)},i.then(e,e);break n;case 3:hn=7;break n;case 4:hn=5;break n;case 7:oo(i)?(hn=0,pe=null,ad(e)):(hn=0,pe=null,Oa(n,e,i,7));break;case 5:var c=null;switch(J.tag){case 26:c=J.memoizedState;case 5:case 27:var h=J;if(c?Id(c):h.stateNode.complete){hn=0,pe=null;var S=h.sibling;if(S!==null)J=S;else{var P=h.return;P!==null?(J=P,ji(P)):J=null}break e}}hn=0,pe=null,Oa(n,e,i,5);break;case 6:hn=0,pe=null,Oa(n,e,i,6);break;case 8:tu(),xn=6;break n;default:throw Error(r(462))}}mg();break}catch(N){Jf(n,N)}while(!0);return Xe=Kt=null,D.H=a,D.A=l,on=t,J!==null?0:(vn=null,en=0,li(),xn)}function mg(){for(;J!==null&&!jh();)td(J)}function td(n){var e=xf(n.alternate,n,lt);n.memoizedProps=n.pendingProps,e===null?ji(n):J=e}function ad(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=vf(t,e,e.pendingProps,e.type,void 0,en);break;case 11:e=vf(t,e,e.pendingProps,e.type.render,e.ref,en);break;case 5:Tc(e);default:Df(t,e),e=J=$r(e,lt),e=xf(t,e,lt)}n.memoizedProps=n.pendingProps,e===null?ji(n):J=e}function Oa(n,e,t,a){Xe=Kt=null,Tc(e),Aa=null,cl=0;var l=e.return;try{if(lg(n,l,e,t,en)){xn=1,xi(n,ve(t,n.current)),J=null;return}}catch(i){if(l!==null)throw J=l,i;xn=1,xi(n,ve(t,n.current)),J=null;return}e.flags&32768?(ln||a===1?n=!0:wa||(en&536870912)!==0?n=!1:(Ct=n=!0,(a===2||a===9||a===3||a===6)&&(a=de.current,a!==null&&a.tag===13&&(a.flags|=16384))),ld(e,n)):ji(e)}function ji(n){var e=n;do{if((e.flags&32768)!==0){ld(e,Ct);return}n=e.return;var t=cg(e.alternate,e,lt);if(t!==null){J=t;return}if(e=e.sibling,e!==null){J=e;return}J=e=n}while(e!==null);xn===0&&(xn=5)}function ld(n,e){do{var t=ug(n.alternate,n);if(t!==null){t.flags&=32767,J=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){J=n;return}J=n=t}while(n!==null);xn=6,J=null}function id(n,e,t,a,l,i,c,h,S){n.cancelPendingCommit=null;do Wi();while(Ln!==0);if((on&6)!==0)throw Error(r(327));if(e!==null){if(e===n.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=qs,Fh(n,t,i,c,h,S),n===vn&&(J=vn=null,en=0),Ua=e,At=n,it=t,$c=i,nu=l,Xf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,vg(Il,function(){return od(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,l=H.p,H.p=2,c=on,on|=4;try{rg(n,e,t)}finally{on=c,H.p=l,D.T=a}}Ln=1,sd(),cd(),ud()}}function sd(){if(Ln===1){Ln=0;var n=At,e=Ua,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=D.T,D.T=null;var a=H.p;H.p=2;var l=on;on|=4;try{Wf(e,n);var i=gu,c=Qr(n.containerInfo),h=i.focusedElem,S=i.selectionRange;if(c!==h&&h&&h.ownerDocument&&Kr(h.ownerDocument.documentElement,h)){if(S!==null&&Ws(h)){var P=S.start,N=S.end;if(N===void 0&&(N=P),"selectionStart"in h)h.selectionStart=P,h.selectionEnd=Math.min(N,h.value.length);else{var w=h.ownerDocument||document,A=w&&w.defaultView||window;if(A.getSelection){var k=A.getSelection(),L=h.textContent.length,I=Math.min(S.start,L),Tn=S.end===void 0?I:Math.min(S.end,L);!k.extend&&I>Tn&&(c=Tn,Tn=I,I=c);var C=Ir(h,I),y=Ir(h,Tn);if(C&&y&&(k.rangeCount!==1||k.anchorNode!==C.node||k.anchorOffset!==C.offset||k.focusNode!==y.node||k.focusOffset!==y.offset)){var b=w.createRange();b.setStart(C.node,C.offset),k.removeAllRanges(),I>Tn?(k.addRange(b),k.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),k.addRange(b))}}}}for(w=[],k=h;k=k.parentNode;)k.nodeType===1&&w.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<w.length;h++){var M=w[h];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Ji=!!pu,gu=pu=null}finally{on=l,H.p=a,D.T=t}}n.current=e,Ln=2}}function cd(){if(Ln===2){Ln=0;var n=At,e=Ua,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=D.T,D.T=null;var a=H.p;H.p=2;var l=on;on|=4;try{Of(n,e.alternate,e)}finally{on=l,H.p=a,D.T=t}}Ln=3}}function ud(){if(Ln===4||Ln===3){Ln=0,Wh();var n=At,e=Ua,t=it,a=Xf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ln=5:(Ln=0,Ua=At=null,rd(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(Pt=null),Cs(t),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,l=H.p,H.p=2,D.T=null;try{for(var i=n.onRecoverableError,c=0;c<a.length;c++){var h=a[c];i(h.value,{componentStack:h.stack})}}finally{D.T=e,H.p=l}}(it&3)!==0&&Wi(),ze(n),l=n.pendingLanes,(t&261930)!==0&&(l&42)!==0?n===eu?Al++:(Al=0,eu=n):Al=0,kl(0)}}function rd(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,il(e)))}function Wi(){return sd(),cd(),ud(),od()}function od(){if(Ln!==5)return!1;var n=At,e=$c;$c=0;var t=Cs(it),a=D.T,l=H.p;try{H.p=32>t?32:t,D.T=null,t=nu,nu=null;var i=At,c=it;if(Ln=0,Ua=At=null,it=0,(on&6)!==0)throw Error(r(331));var h=on;if(on|=4,qf(i.current),If(i,i.current,c,t),on=h,kl(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Ka,i)}catch{}return!0}finally{H.p=l,D.T=a,rd(n,e)}}function fd(n,e,t){e=ve(t,e),e=Uc(n.stateNode,e,2),n=St(n,e,2),n!==null&&(qa(n,2),ze(n))}function pn(n,e,t){if(n.tag===3)fd(n,n,t);else for(;e!==null;){if(e.tag===3){fd(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Pt===null||!Pt.has(a))){n=ve(t,n),t=df(2),a=St(e,t,2),a!==null&&(hf(t,a,e,n),qa(a,2),ze(a));break}}e=e.return}}function lu(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new dg;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Vc=!0,l.add(t),n=Sg.bind(null,n,e,t),e.then(n,n))}function Sg(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,vn===n&&(en&t)===t&&(xn===4||xn===3&&(en&62914560)===en&&300>ce()-Hi?(on&2)===0&&Ha(n,0):Zc|=t,Ea===en&&(Ea=0)),ze(n)}function dd(n,e){e===0&&(e=lr()),n=Wt(n,e),n!==null&&(qa(n,e),ze(n))}function Tg(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),dd(n,t)}function yg(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),dd(n,t)}function vg(n,e){return Ss(n,e)}var _i=null,La=null,iu=!1,Ii=!1,su=!1,xt=0;function ze(n){n!==La&&n.next===null&&(La===null?_i=La=n:La=La.next=n),Ii=!0,iu||(iu=!0,bg())}function kl(n,e){if(!su&&Ii){su=!0;do for(var t=!1,a=_i;a!==null;){if(n!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,h=a.pingedLanes;i=(1<<31-re(42|n)+1)-1,i&=l&~(c&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,md(a,i))}else i=en,i=Yl(a,a===vn?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Qa(a,i)||(t=!0,md(a,i));a=a.next}while(t);su=!1}}function Cg(){hd()}function hd(){Ii=iu=!1;var n=0;xt!==0&&Eg()&&(n=xt);for(var e=ce(),t=null,a=_i;a!==null;){var l=a.next,i=pd(a,e);i===0?(a.next=null,t===null?_i=l:t.next=l,l===null&&(La=t)):(t=a,(n!==0||(i&3)!==0)&&(Ii=!0)),a=l}Ln!==0&&Ln!==5||kl(n),xt!==0&&(xt=0)}function pd(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var c=31-re(i),h=1<<c,S=l[c];S===-1?((h&t)===0||(h&a)!==0)&&(l[c]=Xh(h,e)):S<=e&&(n.expiredLanes|=h),i&=~h}if(e=vn,t=en,t=Yl(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(hn===2||hn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Qa(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Ts(a),Cs(t)){case 2:case 8:t=tr;break;case 32:t=Il;break;case 268435456:t=ar;break;default:t=Il}return a=gd.bind(null,n),t=Ss(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Ts(a),n.callbackPriority=2,n.callbackNode=null,2}function gd(n,e){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Wi()&&n.callbackNode!==t)return null;var a=en;return a=Yl(n,n===vn?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Vf(n,a,e),pd(n,ce()),n.callbackNode!=null&&n.callbackNode===t?gd.bind(null,n):null)}function md(n,e){if(Wi())return null;Vf(n,e,!0)}function bg(){Hg(function(){(on&6)!==0?Ss(er,Cg):hd()})}function cu(){if(xt===0){var n=Ca;n===0&&(n=Kl,Kl<<=1,(Kl&261888)===0&&(Kl=256)),xt=n}return xt}function Sd(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vl(""+n)}function Td(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Pg(n,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var i=Sd((l[ne]||null).action),c=a.submitter;c&&(e=(e=c[ne]||null)?Sd(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var h=new ni("action","action",null,a,l);n.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xt!==0){var S=c?Td(l,c):new FormData(l);Nc(t,{pending:!0,data:S,method:l.method,action:i},null,S)}}else typeof i=="function"&&(h.preventDefault(),S=c?Td(l,c):new FormData(l),Nc(t,{pending:!0,data:S,method:l.method,action:i},i,S))},currentTarget:l}]})}}for(var uu=0;uu<Qs.length;uu++){var ru=Qs[uu],Ag=ru.toLowerCase(),kg=ru[0].toUpperCase()+ru.slice(1);De(Ag,"on"+kg)}De(Gr,"onAnimationEnd"),De(Xr,"onAnimationIteration"),De(Fr,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(_p,"onTransitionRun"),De(Ip,"onTransitionStart"),De(Kp,"onTransitionCancel"),De(Vr,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function yd(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],l=a.event;a=a.listeners;n:{var i=void 0;if(e)for(var c=a.length-1;0<=c;c--){var h=a[c],S=h.instance,P=h.currentTarget;if(h=h.listener,S!==i&&l.isPropagationStopped())break n;i=h,l.currentTarget=P;try{i(l)}catch(N){ai(N)}l.currentTarget=null,i=S}else for(c=0;c<a.length;c++){if(h=a[c],S=h.instance,P=h.currentTarget,h=h.listener,S!==i&&l.isPropagationStopped())break n;i=h,l.currentTarget=P;try{i(l)}catch(N){ai(N)}l.currentTarget=null,i=S}}}}function $(n,e){var t=e[bs];t===void 0&&(t=e[bs]=new Set);var a=n+"__bubble";t.has(a)||(vd(e,n,2,!1),t.add(a))}function ou(n,e,t){var a=0;e&&(a|=4),vd(t,n,a,e)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function fu(n){if(!n[Ki]){n[Ki]=!0,fr.forEach(function(t){t!=="selectionchange"&&(xg.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ki]||(e[Ki]=!0,ou("selectionchange",!1,e))}}function vd(n,e,t,a){switch(Fd(e)){case 2:var l=nm;break;case 8:l=em;break;default:l=xu}t=l.bind(null,e,t,n),l=void 0,!ws||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function du(n,e,t,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var h=a.stateNode.containerInfo;if(h===l)break;if(c===4)for(c=a.return;c!==null;){var S=c.tag;if((S===3||S===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;h!==null;){if(c=la(h),c===null)return;if(S=c.tag,S===5||S===6||S===26||S===27){a=i=c;continue n}h=h.parentNode}}a=a.return}Pr(function(){var P=i,N=Ms(t),w=[];n:{var A=Zr.get(n);if(A!==void 0){var k=ni,L=n;switch(n){case"keypress":if(Jl(t)===0)break n;case"keydown":case"keyup":k=yp;break;case"focusin":L="focus",k=Os;break;case"focusout":L="blur",k=Os;break;case"beforeblur":case"afterblur":k=Os;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=bp;break;case Gr:case Xr:case Fr:k=op;break;case Vr:k=Ap;break;case"scroll":case"scrollend":k=ip;break;case"wheel":k=xp;break;case"copy":case"cut":case"paste":k=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Dr;break;case"toggle":case"beforetoggle":k=Dp}var I=(e&4)!==0,Tn=!I&&(n==="scroll"||n==="scrollend"),C=I?A!==null?A+"Capture":null:A;I=[];for(var y=P,b;y!==null;){var M=y;if(b=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||b===null||C===null||(M=Xa(y,C),M!=null&&I.push(Nl(y,M,b))),Tn)break;y=y.return}0<I.length&&(A=new k(A,L,null,t,N),w.push({event:A,listeners:I}))}}if((e&7)===0){n:{if(A=n==="mouseover"||n==="pointerover",k=n==="mouseout"||n==="pointerout",A&&t!==Ds&&(L=t.relatedTarget||t.fromElement)&&(la(L)||L[aa]))break n;if((k||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,k?(L=t.relatedTarget||t.toElement,k=P,L=L?la(L):null,L!==null&&(Tn=g(L),I=L.tag,L!==Tn||I!==5&&I!==27&&I!==6)&&(L=null)):(k=null,L=P),k!==L)){if(I=xr,M="onMouseLeave",C="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(I=Dr,M="onPointerLeave",C="onPointerEnter",y="pointer"),Tn=k==null?A:Ga(k),b=L==null?A:Ga(L),A=new I(M,y+"leave",k,t,N),A.target=Tn,A.relatedTarget=b,M=null,la(N)===P&&(I=new I(C,y+"enter",L,t,N),I.target=b,I.relatedTarget=Tn,M=I),Tn=M,k&&L)e:{for(I=Ng,C=k,y=L,b=0,M=C;M;M=I(M))b++;M=0;for(var W=y;W;W=I(W))M++;for(;0<b-M;)C=I(C),b--;for(;0<M-b;)y=I(y),M--;for(;b--;){if(C===y||y!==null&&C===y.alternate){I=C;break e}C=I(C),y=I(y)}I=null}else I=null;k!==null&&Cd(w,A,k,I,!1),L!==null&&Tn!==null&&Cd(w,Tn,L,I,!0)}}n:{if(A=P?Ga(P):window,k=A.nodeName&&A.nodeName.toLowerCase(),k==="select"||k==="input"&&A.type==="file")var cn=Lr;else if(Hr(A))if(Br)cn=zp;else{cn=Lp;var j=Op}else k=A.nodeName,!k||k.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?P&&Ns(P.elementType)&&(cn=Lr):cn=Bp;if(cn&&(cn=cn(n,P))){Or(w,cn,t,N);break n}j&&j(n,A,P),n==="focusout"&&P&&A.type==="number"&&P.memoizedProps.value!=null&&xs(A,"number",A.value)}switch(j=P?Ga(P):window,n){case"focusin":(Hr(j)||j.contentEditable==="true")&&(ha=j,_s=P,tl=null);break;case"focusout":tl=_s=ha=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,qr(w,t,N);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":qr(w,t,N)}var V;if(Bs)n:{switch(n){case"compositionstart":var tn="onCompositionStart";break n;case"compositionend":tn="onCompositionEnd";break n;case"compositionupdate":tn="onCompositionUpdate";break n}tn=void 0}else da?Er(n,t)&&(tn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(tn="onCompositionStart");tn&&(Mr&&t.locale!=="ko"&&(da||tn!=="onCompositionStart"?tn==="onCompositionEnd"&&da&&(V=Ar()):(ot=N,Es="value"in ot?ot.value:ot.textContent,da=!0)),j=Qi(P,tn),0<j.length&&(tn=new Nr(tn,n,null,t,N),w.push({event:tn,listeners:j}),V?tn.data=V:(V=Ur(t),V!==null&&(tn.data=V)))),(V=Rp?wp(n,t):Ep(n,t))&&(tn=Qi(P,"onBeforeInput"),0<tn.length&&(j=new Nr("onBeforeInput","beforeinput",null,t,N),w.push({event:j,listeners:tn}),j.data=V)),Pg(w,n,P,t,N)}yd(w,e)})}function Nl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Qi(n,e){for(var t=e+"Capture",a=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Xa(n,t),l!=null&&a.unshift(Nl(n,l,i)),l=Xa(n,e),l!=null&&a.push(Nl(n,l,i))),n.tag===3)return a;n=n.return}return[]}function Ng(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Cd(n,e,t,a,l){for(var i=e._reactName,c=[];t!==null&&t!==a;){var h=t,S=h.alternate,P=h.stateNode;if(h=h.tag,S!==null&&S===a)break;h!==5&&h!==26&&h!==27||P===null||(S=P,l?(P=Xa(t,i),P!=null&&c.unshift(Nl(t,P,S))):l||(P=Xa(t,i),P!=null&&c.push(Nl(t,P,S)))),t=t.return}c.length!==0&&n.push({event:e,listeners:c})}var Dg=/\r\n?/g,Mg=/\u0000|\uFFFD/g;function bd(n){return(typeof n=="string"?n:""+n).replace(Dg,`
`).replace(Mg,"")}function Pd(n,e){return e=bd(e),bd(n)===e}function Sn(n,e,t,a,l,i){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ra(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ra(n,""+a);break;case"className":Xl(n,"class",a);break;case"tabIndex":Xl(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xl(n,t,a);break;case"style":Cr(n,a,i);break;case"data":if(e!=="object"){Xl(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Vl(""+a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(e!=="input"&&Sn(n,e,"name",l.name,l,null),Sn(n,e,"formEncType",l.formEncType,l,null),Sn(n,e,"formMethod",l.formMethod,l,null),Sn(n,e,"formTarget",l.formTarget,l,null)):(Sn(n,e,"encType",l.encType,l,null),Sn(n,e,"method",l.method,l,null),Sn(n,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Vl(""+a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Qe);break;case"onScroll":a!=null&&$("scroll",n);break;case"onScrollEnd":a!=null&&$("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));n.innerHTML=t}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Vl(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""+a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":$("beforetoggle",n),$("toggle",n),Gl(n,"popover",a);break;case"xlinkActuate":Ke(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ke(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ke(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ke(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ke(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ke(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gl(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ap.get(t)||t,Gl(n,t,a))}}function hu(n,e,t,a,l,i){switch(t){case"style":Cr(n,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));n.innerHTML=t}}break;case"children":typeof a=="string"?ra(n,a):(typeof a=="number"||typeof a=="bigint")&&ra(n,""+a);break;case"onScroll":a!=null&&$("scroll",n);break;case"onScrollEnd":a!=null&&$("scrollend",n);break;case"onClick":a!=null&&(n.onclick=Qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dr.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),i=n[ne]||null,i=i!=null?i[t]:null,typeof i=="function"&&n.removeEventListener(e,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,a,l);break n}t in n?n[t]=a:a===!0?n.setAttribute(t,""):Gl(n,t,a)}}}function qn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",n),$("load",n);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Sn(n,e,i,c,t,null)}}l&&Sn(n,e,"srcSet",t.srcSet,t,null),a&&Sn(n,e,"src",t.src,t,null);return;case"input":$("invalid",n);var h=i=c=l=null,S=null,P=null;for(a in t)if(t.hasOwnProperty(a)){var N=t[a];if(N!=null)switch(a){case"name":l=N;break;case"type":c=N;break;case"checked":S=N;break;case"defaultChecked":P=N;break;case"value":i=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,e));break;default:Sn(n,e,a,N,t,null)}}Sr(n,i,h,S,P,c,l,!1);return;case"select":$("invalid",n),a=c=i=null;for(l in t)if(t.hasOwnProperty(l)&&(h=t[l],h!=null))switch(l){case"value":i=h;break;case"defaultValue":c=h;break;case"multiple":a=h;default:Sn(n,e,l,h,t,null)}e=i,t=c,n.multiple=!!a,e!=null?ua(n,!!a,e,!1):t!=null&&ua(n,!!a,t,!0);return;case"textarea":$("invalid",n),i=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(h=t[c],h!=null))switch(c){case"value":a=h;break;case"defaultValue":l=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:Sn(n,e,c,h,t,null)}yr(n,a,l,i);return;case"option":for(S in t)t.hasOwnProperty(S)&&(a=t[S],a!=null)&&(S==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":Sn(n,e,S,a,t,null));return;case"dialog":$("beforetoggle",n),$("toggle",n),$("cancel",n),$("close",n);break;case"iframe":case"object":$("load",n);break;case"video":case"audio":for(a=0;a<xl.length;a++)$(xl[a],n);break;case"image":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"embed":case"source":case"link":$("error",n),$("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in t)if(t.hasOwnProperty(P)&&(a=t[P],a!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Sn(n,e,P,a,t,null)}return;default:if(Ns(e)){for(N in t)t.hasOwnProperty(N)&&(a=t[N],a!==void 0&&hu(n,e,N,a,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(a=t[h],a!=null&&Sn(n,e,h,a,t,null))}function Rg(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,h=null,S=null,P=null,N=null;for(k in t){var w=t[k];if(t.hasOwnProperty(k)&&w!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":S=w;default:a.hasOwnProperty(k)||Sn(n,e,k,null,a,w)}}for(var A in a){var k=a[A];if(w=t[A],a.hasOwnProperty(A)&&(k!=null||w!=null))switch(A){case"type":i=k;break;case"name":l=k;break;case"checked":P=k;break;case"defaultChecked":N=k;break;case"value":c=k;break;case"defaultValue":h=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,e));break;default:k!==w&&Sn(n,e,A,k,a,w)}}ks(n,c,h,S,P,N,i,l);return;case"select":k=c=h=A=null;for(i in t)if(S=t[i],t.hasOwnProperty(i)&&S!=null)switch(i){case"value":break;case"multiple":k=S;default:a.hasOwnProperty(i)||Sn(n,e,i,null,a,S)}for(l in a)if(i=a[l],S=t[l],a.hasOwnProperty(l)&&(i!=null||S!=null))switch(l){case"value":A=i;break;case"defaultValue":h=i;break;case"multiple":c=i;default:i!==S&&Sn(n,e,l,i,a,S)}e=h,t=c,a=k,A!=null?ua(n,!!t,A,!1):!!a!=!!t&&(e!=null?ua(n,!!t,e,!0):ua(n,!!t,t?[]:"",!1));return;case"textarea":k=A=null;for(h in t)if(l=t[h],t.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Sn(n,e,h,null,a,l)}for(c in a)if(l=a[c],i=t[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":A=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&Sn(n,e,c,l,a,i)}Tr(n,A,k);return;case"option":for(var L in t)A=t[L],t.hasOwnProperty(L)&&A!=null&&!a.hasOwnProperty(L)&&(L==="selected"?n.selected=!1:Sn(n,e,L,null,a,A));for(S in a)A=a[S],k=t[S],a.hasOwnProperty(S)&&A!==k&&(A!=null||k!=null)&&(S==="selected"?n.selected=A&&typeof A!="function"&&typeof A!="symbol":Sn(n,e,S,A,a,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in t)A=t[I],t.hasOwnProperty(I)&&A!=null&&!a.hasOwnProperty(I)&&Sn(n,e,I,null,a,A);for(P in a)if(A=a[P],k=t[P],a.hasOwnProperty(P)&&A!==k&&(A!=null||k!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,e));break;default:Sn(n,e,P,A,a,k)}return;default:if(Ns(e)){for(var Tn in t)A=t[Tn],t.hasOwnProperty(Tn)&&A!==void 0&&!a.hasOwnProperty(Tn)&&hu(n,e,Tn,void 0,a,A);for(N in a)A=a[N],k=t[N],!a.hasOwnProperty(N)||A===k||A===void 0&&k===void 0||hu(n,e,N,A,a,k);return}}for(var C in t)A=t[C],t.hasOwnProperty(C)&&A!=null&&!a.hasOwnProperty(C)&&Sn(n,e,C,null,a,A);for(w in a)A=a[w],k=t[w],!a.hasOwnProperty(w)||A===k||A==null&&k==null||Sn(n,e,w,A,a,k)}function Ad(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wg(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,c=l.initiatorType,h=l.duration;if(i&&h&&Ad(c)){for(c=0,h=l.responseEnd,a+=1;a<t.length;a++){var S=t[a],P=S.startTime;if(P>h)break;var N=S.transferSize,w=S.initiatorType;N&&Ad(w)&&(S=S.responseEnd,c+=N*(S<h?1:(h-P)/(S-P)))}if(--a,e+=8*(i+c)/(l.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var pu=null,gu=null;function qi(n){return n.nodeType===9?n:n.ownerDocument}function kd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function mu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=null;function Eg(){var n=window.event;return n&&n.type==="popstate"?n===Su?!1:(Su=n,!0):(Su=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(n){return Dd.resolve(null).then(n).catch(Og)}:Nd;function Og(n){setTimeout(function(){throw n})}function Nt(n){return n==="head"}function Md(n,e){var t=e,a=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(l),Wa(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Dl(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Dl(t);for(var i=t.firstChild;i;){var c=i.nextSibling,h=i.nodeName;i[Ya]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&Dl(n.ownerDocument.body);t=l}while(t);Wa(e)}function Rd(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Tu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Tu(t),Ps(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Lg(n,e,t,a){for(;n.nodeType===1;){var l=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[Ya])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=ke(n.nextSibling),n===null)break}return null}function Bg(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=ke(n.nextSibling),n===null))return null;return n}function wd(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ke(n.nextSibling),n===null))return null;return n}function yu(n){return n.data==="$?"||n.data==="$~"}function vu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function zg(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function ke(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Cu=null;function Ed(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return ke(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Ud(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Hd(n,e,t){switch(e=qi(t),n){case"html":if(n=e.documentElement,!n)throw Error(r(452));return n;case"head":if(n=e.head,!n)throw Error(r(453));return n;case"body":if(n=e.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Dl(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ps(n)}var xe=new Map,Od=new Set;function Yi(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var st=H.d;H.d={f:jg,r:Wg,D:_g,C:Ig,L:Kg,m:Qg,X:Yg,S:qg,M:Gg};function jg(){var n=st.f(),e=Bi();return n||e}function Wg(n){var e=ia(n);e!==null&&e.tag===5&&e.type==="form"?Zo(e):st.r(n)}var Ba=typeof document>"u"?null:document;function Ld(n,e,t){var a=Ba;if(a&&typeof e=="string"&&e){var l=Te(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Od.has(l)||(Od.add(l),n={rel:n,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),qn(e,"link",n),zn(e),a.head.appendChild(e)))}}function _g(n){st.D(n),Ld("dns-prefetch",n,null)}function Ig(n,e){st.C(n,e),Ld("preconnect",n,e)}function Kg(n,e,t){st.L(n,e,t);var a=Ba;if(a&&n&&e){var l='link[rel="preload"][as="'+Te(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Te(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Te(t.imageSizes)+'"]')):l+='[href="'+Te(n)+'"]';var i=l;switch(e){case"style":i=za(n);break;case"script":i=ja(n)}xe.has(i)||(n=U({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),xe.set(i,n),a.querySelector(l)!==null||e==="style"&&a.querySelector(Ml(i))||e==="script"&&a.querySelector(Rl(i))||(e=a.createElement("link"),qn(e,"link",n),zn(e),a.head.appendChild(e)))}}function Qg(n,e){st.m(n,e);var t=Ba;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Te(a)+'"][href="'+Te(n)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ja(n)}if(!xe.has(i)&&(n=U({rel:"modulepreload",href:n},e),xe.set(i,n),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Rl(i)))return}a=t.createElement("link"),qn(a,"link",n),zn(a),t.head.appendChild(a)}}}function qg(n,e,t){st.S(n,e,t);var a=Ba;if(a&&n){var l=sa(a).hoistableStyles,i=za(n);e=e||"default";var c=l.get(i);if(!c){var h={loading:0,preload:null};if(c=a.querySelector(Ml(i)))h.loading=5;else{n=U({rel:"stylesheet",href:n,"data-precedence":e},t),(t=xe.get(i))&&bu(n,t);var S=c=a.createElement("link");zn(S),qn(S,"link",n),S._p=new Promise(function(P,N){S.onload=P,S.onerror=N}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Gi(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:h},l.set(i,c)}}}function Yg(n,e){st.X(n,e);var t=Ba;if(t&&n){var a=sa(t).hoistableScripts,l=ja(n),i=a.get(l);i||(i=t.querySelector(Rl(l)),i||(n=U({src:n,async:!0},e),(e=xe.get(l))&&Pu(n,e),i=t.createElement("script"),zn(i),qn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Gg(n,e){st.M(n,e);var t=Ba;if(t&&n){var a=sa(t).hoistableScripts,l=ja(n),i=a.get(l);i||(i=t.querySelector(Rl(l)),i||(n=U({src:n,async:!0,type:"module"},e),(e=xe.get(l))&&Pu(n,e),i=t.createElement("script"),zn(i),qn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Bd(n,e,t,a){var l=(l=Z.current)?Yi(l):null;if(!l)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=za(t.href),t=sa(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=za(t.href);var i=sa(l).hoistableStyles,c=i.get(n);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,c),(i=l.querySelector(Ml(n)))&&!i._p&&(c.instance=i,c.state.loading=5),xe.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xe.set(n,t),i||Xg(l,n,t,c.state))),e&&a===null)throw Error(r(528,""));return c}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ja(t),t=sa(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function za(n){return'href="'+Te(n)+'"'}function Ml(n){return'link[rel="stylesheet"]['+n+"]"}function zd(n){return U({},n,{"data-precedence":n.precedence,precedence:null})}function Xg(n,e,t,a){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),qn(e,"link",t),zn(e),n.head.appendChild(e))}function ja(n){return'[src="'+Te(n)+'"]'}function Rl(n){return"script[async]"+n}function jd(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Te(t.href)+'"]');if(a)return e.instance=a,zn(a),a;var l=U({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),zn(a),qn(a,"style",l),Gi(a,t.precedence,n),e.instance=a;case"stylesheet":l=za(t.href);var i=n.querySelector(Ml(l));if(i)return e.state.loading|=4,e.instance=i,zn(i),i;a=zd(t),(l=xe.get(l))&&bu(a,l),i=(n.ownerDocument||n).createElement("link"),zn(i);var c=i;return c._p=new Promise(function(h,S){c.onload=h,c.onerror=S}),qn(i,"link",a),e.state.loading|=4,Gi(i,t.precedence,n),e.instance=i;case"script":return i=ja(t.src),(l=n.querySelector(Rl(i)))?(e.instance=l,zn(l),l):(a=t,(l=xe.get(i))&&(a=U({},t),Pu(a,l)),n=n.ownerDocument||n,l=n.createElement("script"),zn(l),qn(l,"link",a),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Gi(a,t.precedence,n));return e.instance}function Gi(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var h=a[c];if(h.dataset.precedence===e)i=h;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function bu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Pu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Xi=null;function Wd(n,e,t){if(Xi===null){var a=new Map,l=Xi=new Map;l.set(t,a)}else l=Xi,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),l=0;l<t.length;l++){var i=t[l];if(!(i[Ya]||i[_n]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=n+c;var h=a.get(c);h?h.push(i):a.set(c,[i])}}return a}function _d(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Fg(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Id(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Vg(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=za(a.href),i=e.querySelector(Ml(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Fi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,zn(i);return}i=e.ownerDocument||e,a=zd(a),(l=xe.get(l))&&bu(a,l),i=i.createElement("link"),zn(i);var c=i;c._p=new Promise(function(h,S){c.onload=h,c.onerror=S}),qn(i,"link",a),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Fi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Au=0;function Zg(n,e){return n.stylesheets&&n.count===0&&Zi(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Zi(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+e);0<n.imgBytes&&Au===0&&(Au=62500*wg());var l=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Zi(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>Au?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zi(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Vi=null;function Zi(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Vi=new Map,e.forEach(Jg,n),Vi=null,Fi.call(n))}function Jg(n,e){if(!(e.state.loading&4)){var t=Vi.get(n);if(t)var a=t.get(null);else{t=new Map,Vi.set(n,t);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=e.instance,c=l.getAttribute("data-precedence"),i=t.get(c)||a,i===a&&t.set(null,l),t.set(c,l),this.count++,a=Fi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}var wl={$$typeof:Bn,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function $g(n,e,t,a,l,i,c,h,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Kd(n,e,t,a,l,i,c,h,S,P,N,w){return n=new $g(n,e,t,c,S,P,N,w,h),e=1,i===!0&&(e|=24),i=fe(3,null,null,e),n.current=i,i.stateNode=n,e=ac(),e.refCount++,n.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:e},cc(i),n}function Qd(n){return n?(n=ma,n):ma}function qd(n,e,t,a,l,i){l=Qd(l),a.context===null?a.context=l:a.pendingContext=l,a=mt(e),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=St(n,a,e),t!==null&&(se(t,n,e),rl(t,n,e))}function Yd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ku(n,e){Yd(n,e),(n=n.alternate)&&Yd(n,e)}function Gd(n){if(n.tag===13||n.tag===31){var e=Wt(n,67108864);e!==null&&se(e,n,67108864),ku(n,67108864)}}function Xd(n){if(n.tag===13||n.tag===31){var e=me();e=vs(e);var t=Wt(n,e);t!==null&&se(t,n,e),ku(n,e)}}var Ji=!0;function nm(n,e,t,a){var l=D.T;D.T=null;var i=H.p;try{H.p=2,xu(n,e,t,a)}finally{H.p=i,D.T=l}}function em(n,e,t,a){var l=D.T;D.T=null;var i=H.p;try{H.p=8,xu(n,e,t,a)}finally{H.p=i,D.T=l}}function xu(n,e,t,a){if(Ji){var l=Nu(a);if(l===null)du(n,e,a,$i,t),Vd(n,a);else if(am(l,n,e,t,a))a.stopPropagation();else if(Vd(n,a),e&4&&-1<tm.indexOf(n)){for(;l!==null;){var i=ia(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ot(i.pendingLanes);if(c!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var S=1<<31-re(c);h.entanglements[1]|=S,c&=~S}ze(i),(on&6)===0&&(Oi=ce()+500,kl(0))}}break;case 31:case 13:h=Wt(i,2),h!==null&&se(h,i,2),Bi(),ku(i,2)}if(i=Nu(a),i===null&&du(n,e,a,$i,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else du(n,e,a,null,t)}}function Nu(n){return n=Ms(n),Du(n)}var $i=null;function Du(n){if($i=null,n=la(n),n!==null){var e=g(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=p(e),n!==null)return n;n=null}else if(t===31){if(n=x(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return $i=n,null}function Fd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_h()){case er:return 2;case tr:return 8;case Il:case Ih:return 32;case ar:return 268435456;default:return 32}default:return 32}}var Mu=!1,Dt=null,Mt=null,Rt=null,El=new Map,Ul=new Map,wt=[],tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vd(n,e){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":El.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(e.pointerId)}}function Hl(n,e,t,a,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=ia(e),e!==null&&Gd(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function am(n,e,t,a,l){switch(e){case"focusin":return Dt=Hl(Dt,n,e,t,a,l),!0;case"dragenter":return Mt=Hl(Mt,n,e,t,a,l),!0;case"mouseover":return Rt=Hl(Rt,n,e,t,a,l),!0;case"pointerover":var i=l.pointerId;return El.set(i,Hl(El.get(i)||null,n,e,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Ul.set(i,Hl(Ul.get(i)||null,n,e,t,a,l)),!0}return!1}function Zd(n){var e=la(n.target);if(e!==null){var t=g(e);if(t!==null){if(e=t.tag,e===13){if(e=p(t),e!==null){n.blockedOn=e,rr(n.priority,function(){Xd(t)});return}}else if(e===31){if(e=x(t),e!==null){n.blockedOn=e,rr(n.priority,function(){Xd(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ns(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Nu(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);Ds=a,t.target.dispatchEvent(a),Ds=null}else return e=ia(t),e!==null&&Gd(e),n.blockedOn=t,!1;e.shift()}return!0}function Jd(n,e,t){ns(n)&&t.delete(e)}function lm(){Mu=!1,Dt!==null&&ns(Dt)&&(Dt=null),Mt!==null&&ns(Mt)&&(Mt=null),Rt!==null&&ns(Rt)&&(Rt=null),El.forEach(Jd),Ul.forEach(Jd)}function es(n,e){n.blockedOn===e&&(n.blockedOn=null,Mu||(Mu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,lm)))}var ts=null;function $d(n){ts!==n&&(ts=n,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ts===n&&(ts=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],l=n[e+2];if(typeof a!="function"){if(Du(a||t)===null)continue;break}var i=ia(t);i!==null&&(n.splice(e,3),e-=3,Nc(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Wa(n){function e(S){return es(S,n)}Dt!==null&&es(Dt,n),Mt!==null&&es(Mt,n),Rt!==null&&es(Rt,n),El.forEach(e),Ul.forEach(e);for(var t=0;t<wt.length;t++){var a=wt[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<wt.length&&(t=wt[0],t.blockedOn===null);)Zd(t),t.blockedOn===null&&wt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],c=l[ne]||null;if(typeof i=="function")c||$d(t);else if(c){var h=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[ne]||null)h=c.formAction;else if(Du(l)!==null)continue}else h=c.action;typeof h=="function"?t[a+1]=h:(t.splice(a,3),a-=3),$d(t)}}}function nh(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Ru(n){this._internalRoot=n}as.prototype.render=Ru.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(r(409));var t=e.current,a=me();qd(t,a,n,e,null,null)},as.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;qd(n.current,2,null,n,null,null),Bi(),e[aa]=null}};function as(n){this._internalRoot=n}as.prototype.unstable_scheduleHydration=function(n){if(n){var e=ur();n={blockedOn:null,target:n,priority:e};for(var t=0;t<wt.length&&e!==0&&e<wt[t].priority;t++);wt.splice(t,0,n),t===0&&Zd(n)}};var eh=s.version;if(eh!=="19.2.7")throw Error(r(527,eh,"19.2.7"));H.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=T(e),n=n!==null?R(n):null,n=n===null?null:n.stateNode,n};var im={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Ka=ls.inject(im),ue=ls}catch{}}return Ll.createRoot=function(n,e){if(!f(n))throw Error(r(299));var t=!1,a="",l=uf,i=rf,c=of;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Kd(n,1,!1,null,null,t,a,null,l,i,c,nh),n[aa]=e.current,fu(n),new Ru(e)},Ll.hydrateRoot=function(n,e,t){if(!f(n))throw Error(r(299));var a=!1,l="",i=uf,c=rf,h=of,S=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(S=t.formState)),e=Kd(n,1,!0,e,t??null,a,l,S,i,c,h,nh),e.context=Qd(null),t=e.current,a=me(),a=vs(a),l=mt(a),l.callback=null,St(t,l,a),t=a,e.current.lanes=t,qa(e,t),ze(e),n[aa]=e.current,fu(n),new as(e)},Ll.version="19.2.7",Ll}var fh;function Sm(){if(fh)return Uu.exports;fh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Uu.exports=mm(),Uu.exports}var Tm=Sm();const ym=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vm=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,r)=>r?r.toUpperCase():o.toLowerCase()),dh=u=>{const s=vm(u);return s.charAt(0).toUpperCase()+s.slice(1)},vh=(...u)=>u.filter((s,o,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===o).join(" ").trim(),Cm=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var bm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Pm=Y.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:f="",children:g,iconNode:p,...x},m)=>Y.createElement("svg",{ref:m,...bm,width:s,height:s,stroke:u,strokeWidth:r?Number(o)*24/Number(s):o,className:vh("lucide",f),...!g&&!Cm(x)&&{"aria-hidden":"true"},...x},[...p.map(([T,R])=>Y.createElement(T,R)),...Array.isArray(g)?g:[g]]));const _e=(u,s)=>{const o=Y.forwardRef(({className:r,...f},g)=>Y.createElement(Pm,{ref:g,iconNode:s,className:vh(`lucide-${ym(dh(u))}`,`lucide-${u}`,r),...f}));return o.displayName=dh(u),o};const Am=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],Ch=_e("beaker",Am);const km=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xm=_e("book-open",km);const Nm=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Dm=_e("bookmark",Nm);const Mm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ku=_e("circle-check",Mm);const Rm=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],wm=_e("git-branch",Rm);const Em=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],bh=_e("list-checks",Em);const Um=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Hm=_e("map",Um);const Om=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Lm=_e("search",Om);const Bm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],zm=_e("star",Bm);const jm=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Wm=_e("triangle-alert",jm),_m=`# WK1-OS-Overview

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

**实际例子**：
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
`,Im=`# WK2-Process-Intro

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
`,Km=`# WK3-CPU-Scheduling

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
- 本课件主要关注进程调度，但调度策略对两者都适用

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
  - 公平性：进程获得公平的CPU份额
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
`,Qm=`# WK3-IPC

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
**忙等待（Busy Waiting）**：进程循环检查条件，不释放CPU。

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
- 线程B阻塞线程A进入临界区，即使线程B在临界区外
- 不满足互斥条件3（临界区外的进程不能阻塞其他进程）

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
阻塞是另一种实现互斥的方式，进程等待时释放CPU。

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
死锁是多个进程相互等待对方释放资源，导致所有进程都无法继续执行的情况。

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
`,qm=`# WK4 - Memory Management

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
`,Ym=`# WK5 - Secure Communication

## 课件概述

本课件介绍了计算机网络中**安全通信（Secure Communication）**的基本原理和密码学基础。课件从安全通信的三个核心目标（机密性、完整性、认证）出发，系统讲解了加密（Encryption）、哈希（Hashing）、消息认证码（MAC）、数字签名（Digital Signatures）等密码学技术，以及如何将这些技术组合实现安全通信。最后介绍了TLS（Transport Layer Security）协议的基本工作原理。

---

## 必须掌握的知识点

### 1. 安全通信的三个核心属性

**What（是什么）：** 安全通信需要满足的三个基本属性：

![Confidentiality：Eve窃听Alice和Bob的通信](./images/WK5-Confidentiality-Eve.png)

#### (a) Confidentiality（机密性）
- 只有发送方和接收方能够理解通信的内容
- 防止第三方（如Eve）窃听和理解消息内容
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
1. Client Hello → 协议版本、支持的密码套件、客户端随机数
2. Server Hello → 选定的密码套件、服务器随机数
3. Server Certificate → 服务器公钥证书
4. Client Key Exchange → 客户端生成premaster secret，用服务器公钥加密发送
5. 双方用premaster secret和随机数生成会话密钥
6. Change Cipher Spec → 通知对方开始使用加密通信
7. Finished → 第一条加密消息，验证握手完整性

**TLS 1.3 vs TLS 1.2：**
- TLS 1.3使用**Diffie-Hellman密钥交换**代替RSA密钥交换
- 提供**Forward Secrecy（前向保密）**：即使长期私钥泄露，过去的会话仍然安全

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
`,Gm=`# WK6 - Introduction to Networks & OSI Layers

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

**新趋势：** HTTP正在成为新的"窄腰"——许多新协议将数据封装在HTTP请求/响应中，以穿越只允许HTTP的防火墙。

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
`,Xm=`# WK7 - Socket Programming

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

**C语言OpenSSL示例：** 使用 \`SSL_CTX\`、\`SSL\`、\`BIO\` 等结构实现TLS连接。

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
`,Fm=`# WK7 - DNS & Email Application Layer Services

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

**绝对域名 vs 相对域名：**
- 绝对域名以"."结尾（如 \`www.google.com.\`）
- 相对域名以TLD结尾（如 \`www.google.com\`）

![Resource Record示例：展示A/AAAA/CNAME/MX/NS等记录类型及绝对/相对域名](./images/WK7-Resource-Record.png)

---

### 6. DNS缓存

**What（是什么）：** DNS查询结果会被缓存，后续相同的查询可以直接使用缓存结果，无需再次查询层次结构。

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
- 基本功能：compose（撰写）、report（报告）、display（显示）、dispose（处理）

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
`,Vm=`# COMP30023 WK8 - Transport Layer: Services & UDP

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

**What**: 端口号是 16 位整数（0-65535），由 IANA（Internet Assigned Numbers Authority）管理。

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
`,Zm=`# COMP30023 WK8 - Application Layer: HTTP

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
`,Jm=`# WK9 - TCP (Transmission Control Protocol)

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
- 发送端发送 4 个 512-byte 的 segments，接收端可能一次 \`READ\` 收到全部 2048 bytes
- 多次 \`write()\` 可能合并到同一个 packet 中（Nagle's algorithm）

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
`,$m=`# WK9 - Protocol Design (RPC) & TCP Closing

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
`,nS=`# WK10 - IP Addresses and Packet Switching

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

2. **Keep it simple**（奥卡姆剃刀原则）

3. **Be strict when sending, tolerant when receiving**
   - 发送时严格，接收时宽容
   - 例如：Web 浏览器能处理无效 HTML 的页面

4. **Avoid static options and parameters** — 在运行时协商

5. **Think about scalability**（可扩展性）

6. **"Best effort"**，不保证性能

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
`,eS=`# WK10 - TCP Sliding Window and Congestion Control

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
`,tS=`# WK11 - Routing Algorithms

## 课件概述

本课件介绍网络层的路由算法，包括静态路由、自适应路由、Flooding（洪泛）、Bellman最优性原理、Dijkstra 最短路径算法，以及 Link State Routing（链路状态路由，如 OSPF）。本课件考试重点是会区分forwarding/routing、理解flooding的性质、能手动执行Dijkstra、掌握Link State Routing的五步。Distance Vector和BGP只作背景对比。

---

## 必须掌握的知识点

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
`,aS=`# WK11 - Internet Control Protocols (ICMP, DHCP, ARP)

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
- **MAC (Media Access Control) Address**: 网络接口的**硬件地址**
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
`,lS=`# WK12 - Network Address Translation (NAT) & Debugging

## 课件概述

本课件介绍 Network Address Translation (NAT) 的动机、机制、优缺点，以及如何调试"互联网不工作"的问题。NAT 是解决 IPv4 地址耗尽的关键技术，通过将私有地址转换为公共地址，允许多个设备共享一个公共 IP 地址。

---

## 必须掌握的知识点

### 1. IPv4 地址稀缺性

#### What（是什么）
随着 IP 地址变得稀缺，需要处理更多客户端的方法。IPv6 能解决问题，但需要一个**临时方案**。

#### 私有地址（Private Addresses）
- 许多主机只需要内部访问
- **私有子网**：
  - \`192.168.0.0/16\`
  - \`172.16.0.0/12\`
  - \`10.0.0.0/8\`
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

#### 调试工具

| 功能 | 工具例子 |
|------|----------|
| 查看本机网络配置 | \`ifconfig\`/\`ipconfig\` |
| 查看路由表 | \`route\` |
| 查看 ARP 缓存 | \`arp\` |
| 测试连通性 | \`ping\` |
| 追踪路径 | \`traceroute\`/\`tracert\` |
| 查询 DNS | \`dig\`/\`host\`/\`nslookup\` |
| 直接发 HTTP 请求 | \`cURL\`/\`wget\` |
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
`,Wn=u=>`/knowledge/images/${u}`,We=[{id:"wk1-os",week:"WK1",title:"OS Overview",filename:"WK1-OS-Overview.md",group:"Operating Systems",lab:"system-call",image:Wn("WK1-OS-Overview.png"),focus:["hardware abstraction","resource management","system calls","interrupts"],md:_m},{id:"wk2-process",week:"WK2",title:"Process Intro",filename:"WK2-Process-Intro.md",group:"Operating Systems",lab:"process-thread",image:Wn("WK2-Process-States.png"),focus:["process states","PCB/TCB","fork","threads"],md:Im},{id:"wk3-cpu",week:"WK3",title:"CPU Scheduling",filename:"WK3-CPU-Scheduling.md",group:"Operating Systems",lab:"scheduling",image:Wn("WK3-RR-Example.png"),focus:["FCFS","SJF","RR","response time","turnaround time"],md:Km},{id:"wk3-ipc",week:"WK3",title:"IPC",filename:"WK3-IPC.md",group:"Operating Systems",lab:"race-condition",image:Wn("WK3-Race-Condition-Execution.png"),focus:["race condition","critical region","mutual exclusion","TSL"],md:Qm},{id:"wk4-memory",week:"WK4",title:"Memory Management",filename:"WK4-Memory-Management.md",group:"Operating Systems",lab:"paging",image:Wn("WK4-Paging-Model.png"),focus:["base/limit","paging","page fault","TLB"],md:qm},{id:"wk5-security",week:"WK5",title:"Secure Communication",filename:"WK5-Secure-Communication.md",group:"Security",lab:"crypto",image:Wn("WK5-Certificates.png"),focus:["confidentiality","integrity","authentication","MAC","signature"],md:Ym},{id:"wk6-osi",week:"WK6",title:"Intro OSI",filename:"WK6-Intro-OSI.md",group:"Networks",lab:"encapsulation",image:Wn("WK6-OSI-Model.png"),focus:["layering","service vs protocol","encapsulation","narrow waist"],md:Gm},{id:"wk7-sockets",week:"WK7",title:"Socket Programming",filename:"WK7-Sockets.md",group:"Networks",lab:"sockets",image:Wn("WK7-Socket-Primitives.png"),focus:["socket primitives","5-tuple","blocking read","server two sockets"],md:Xm},{id:"wk7-dns",week:"WK7",title:"DNS & Mail",filename:"WK7-DNS-Mail-RPC.md",group:"Application Layer",lab:"dns",image:Wn("WK7-DNS-Hierarchy.png"),focus:["DNS hierarchy","resource records","SMTP","IMAP"],md:Fm},{id:"wk8-udp",week:"WK8",title:"Transport Services & UDP",filename:"WK8-Transport-Services-UDP.md",group:"Transport Layer",lab:"udp-demux",image:Wn("WK8-Transport-MUX-DEMUX.png"),focus:["process-to-process","ports","UDP header","mux/demux"],md:Vm},{id:"wk8-http",week:"WK8",title:"HTTP",filename:"WK8-HTTP.md",group:"Application Layer",lab:"http",image:Wn("WK8-HTTP-Request-Example.png"),focus:["request/response","headers","HTTPS","HTTP/2","HTTP/3"],md:Zm},{id:"wk9-tcp",week:"WK9",title:"TCP",filename:"WK9-TCP.md",group:"Transport Layer",lab:"tcp-handshake",image:Wn("WK9-TCP-Header-Format.png"),focus:["three-way handshake","byte stream","sequence number","window"],md:Jm},{id:"wk9-protocol",week:"WK9",title:"Protocol Design",filename:"WK9-Protocol-Design.md",group:"Application Layer",lab:"rpc",image:Wn("WK9-RPC-Architecture.png"),focus:["syntax","semantics","timing","RPC","marshalling"],md:$m},{id:"wk10-addressing",week:"WK10",title:"Addressing & Switching",filename:"WK10-Addressing-Switching.md",group:"Network Layer",lab:"cidr",image:Wn("WK10-Network-Host-Addresses.png"),focus:["IPv4","CIDR","route aggregation","packet switching"],md:nS},{id:"wk10-congestion",week:"WK10",title:"TCP Flow & Congestion",filename:"WK10-TCP-Flow-Congestion-Control.md",group:"Transport Layer",lab:"cwnd",image:Wn("WK10-TCP-Tahoe.png"),focus:["sliding window","zero window probe","CWND","slow start"],md:eS},{id:"wk11-routing",week:"WK11",title:"Routing Algorithms",filename:"WK11-Routing.md",group:"Network Layer",lab:"dijkstra",image:Wn("WK11-Dijkstra-Graph-Step.png"),focus:["forwarding vs routing","Dijkstra","flooding","link state"],md:tS},{id:"wk11-control",week:"WK11",title:"Control Plane",filename:"WK11-Control.md",group:"Network Layer",lab:"control-plane",image:Wn("WK11-ICMP-Message-Types.png"),focus:["ARP","ICMP","traceroute","data/control plane"],md:aS},{id:"wk12-nat",week:"WK12",title:"NAT & Debugging",filename:"WK12-NAT.md",group:"Network Layer",lab:"nat",image:Wn("WK12-NAT-Mechanism.png"),focus:["private address","port mapping","end-to-end","debugging"],md:lS}];Object.fromEntries(We.map(u=>[u.id,u]));const Ph={"wk1-os":{goal:"把 OS 看成硬件抽象和资源管理器，特别抓住 user mode、kernel mode、interrupt、system call 的边界。",lab:"System call journey：按步骤观察 read() 从用户程序进入内核、等待设备中断、再返回用户态。",exam:["中断和系统调用的区别","kernel 和 OS 的区别","为什么需要内存边界"]},"wk2-process":{goal:"建立 process 是资源容器、thread 是执行流的心智模型。",lab:"Process/thread memory map：切换进程和线程，看 address space、stack、register、file descriptor 哪些共享。",exam:["process vs thread","fork 后父子进程行为","ready 与 blocked 的区别"]},"wk3-cpu":{goal:"从 timeline 和指标理解调度算法，而不是只背 FCFS/SJF/RR 名字。",lab:"Scheduling simulator：切换 FCFS、SJF、RR，自动生成 Gantt chart 和 waiting/turnaround/response time。",exam:["turnaround vs response time","preemptive vs non-preemptive","starvation 与 aging"]},"wk3-ipc":{goal:"看见 race condition 来自不同 interleaving，理解 mutual exclusion 为什么必须靠原子性。",lab:"Race condition interleaving：点击两个线程的 read/modify/write 步骤，观察 lost update。",exam:["critical region vs mutual exclusion","busy waiting 的成本","TSL 的硬件原子性"]},"wk4-memory":{goal:"把 base/limit 的限制自然过渡到 paging，能手算 page number、offset、frame 和 physical address。",lab:"Paging calculator：输入 logical address，立即算出地址翻译过程。",exam:["external vs internal fragmentation","logical vs physical address","TLB hit/miss"]},"wk5-security":{goal:"分清 confidentiality、integrity、authentication，以及 MAC、signature、certificate 的角色。",lab:"Hybrid encryption flow：逐步看 session key、public key、certificate、MAC/signature 各自保护什么。",exam:["MAC vs digital signature","certificate 与 CA","encrypt-then-MAC"]},"wk6-osi":{goal:"用 layering 和 encapsulation 组织所有网络知识。",lab:"Encapsulation stack：从 HTTP message 到 TCP segment、IP packet、link frame 逐层加 header。",exam:["service vs protocol","OSI vs TCP/IP","end-to-end vs point-to-point"]},"wk7-sockets":{goal:"记住 socket 是应用和传输层的接口，server two sockets 是核心易错点。",lab:"Socket lifecycle：client/server 两列按顺序点亮 primitives。",exam:["listening socket vs connected socket","bind/listen/accept/connect 顺序","blocking vs non-blocking"]},"wk7-dns":{goal:"把 DNS 理解为分层、可缓存的分布式数据库。",lab:"DNS lookup path：local DNS、root、TLD、authoritative 逐步解析。",exam:["recursive vs iterative","A/MX/CNAME/NS record","SMTP vs IMAP"]},"wk8-udp":{goal:"理解 transport layer 的 process-to-process 角色，以及 UDP 简单但有用的原因。",lab:"Mux/demux demo：segment 到达后按 port 分发给正确 socket。",exam:["transport vs network","UDP socket tuple","UDP 为什么适合 DNS/实时应用"]},"wk8-http":{goal:"把 HTTP 看成 request/response message protocol，重点抓连接、message format、headers、HTTPS、HTTP/2/3。",lab:"HTTP request builder：选择 method、path、headers，生成原始请求报文。",exam:["persistent connection","request/response format","HTTP/2 与 HTTP/3 动机"]},"wk9-tcp":{goal:"掌握 reliable byte stream、sequence/ack、三次握手、四次挥手和 window。",lab:"TCP handshake animation：SYN、SYN-ACK、ACK 和 sequence number 消耗。",exam:["SYN/FIN 是否消耗序列号","TCP 不保留消息边界","receive window 是谁维护的"]},"wk9-protocol":{goal:"协议设计必须同时定义 syntax、semantics、timing 和错误处理。",lab:"RPC marshalling cards：本地函数参数如何变成 bytes，再在远端恢复。",exam:["protocol 三要素","marshalling/unmarshalling","RPC 为什么不能传 pointer"]},"wk10-addressing":{goal:"把 IP 地址看成 interface 的层次化地址；能算 CIDR、mask、host range。",lab:"CIDR calculator：输入 IP/prefix 自动计算 network、mask、host count。",exam:["/24 与 /16 的大小","network address vs host address","datagram vs virtual circuit"]},"wk10-congestion":{goal:"区分 receive window 和 congestion window，理解 slow start、avoidance、loss response。",lab:"CWND chart：调节 ssthresh 和 loss round，观察 Tahoe 风格窗口变化。",exam:["RWND vs CWND","slow start 为什么是指数增长","timeout vs fast retransmit"]},"wk11-routing":{goal:"分清 forwarding 和 routing，用 Dijkstra stepper 看 link state 如何形成路径。",lab:"Dijkstra stepper：每一步选择最小 tentative distance 并更新邻居。",exam:["forwarding vs routing","Dijkstra 不能处理负权","age 字段作用"]},"wk11-control":{goal:"理解 ARP、ICMP、traceroute 这些控制消息如何帮助网络运行和调试。",lab:"Traceroute/ARP flow：用 TTL 和 ICMP 看路径发现过程。",exam:["ARP 的局域网范围","ICMP 不是传输层协议","traceroute 与 TTL"]},"wk12-nat":{goal:"NAT 是状态化的地址/端口转换；它缓解 IPv4 稀缺但破坏 end-to-end。",lab:"NAT table simulator：发起连接生成公网端口映射，返回包按表转回内网主机。",exam:["NAT 不是防火墙","私有地址不能公网路由","layering/end-to-end violation"]}},iS=[["OS abstraction","Process"],["Process","CPU scheduling"],["Process","IPC"],["IPC","Mutual exclusion"],["Process","Memory management"],["Memory management","Paging/TLB"],["Layering","Transport services"],["Transport services","UDP"],["Transport services","TCP"],["TCP","HTTP"],["TCP","Congestion control"],["Layering","IP addressing"],["IP addressing","Routing"],["Routing","Control plane"],["IP addressing","NAT"],["DNS","HTTP"],["Secure communication","HTTPS/TLS"]],sS=[{id:"OS abstraction",chapter:"wk1-os",group:"OS"},{id:"Process",chapter:"wk2-process",group:"OS"},{id:"CPU scheduling",chapter:"wk3-cpu",group:"OS"},{id:"IPC",chapter:"wk3-ipc",group:"OS"},{id:"Mutual exclusion",chapter:"wk3-ipc",group:"OS"},{id:"Memory management",chapter:"wk4-memory",group:"OS"},{id:"Paging/TLB",chapter:"wk4-memory",group:"OS"},{id:"Secure communication",chapter:"wk5-security",group:"Security"},{id:"Layering",chapter:"wk6-osi",group:"Network"},{id:"DNS",chapter:"wk7-dns",group:"Application"},{id:"Transport services",chapter:"wk8-udp",group:"Transport"},{id:"UDP",chapter:"wk8-udp",group:"Transport"},{id:"HTTP",chapter:"wk8-http",group:"Application"},{id:"TCP",chapter:"wk9-tcp",group:"Transport"},{id:"Congestion control",chapter:"wk10-congestion",group:"Transport"},{id:"IP addressing",chapter:"wk10-addressing",group:"Network"},{id:"Routing",chapter:"wk11-routing",group:"Network"},{id:"Control plane",chapter:"wk11-control",group:"Network"},{id:"NAT",chapter:"wk12-nat",group:"Network"},{id:"HTTPS/TLS",chapter:"wk5-security",group:"Security"}],_=(u,s,o,r)=>({question:u,options:s,answer:o,explain:r}),cS={"wk1-os":[_("System call 和 interrupt 最核心的区别是什么？",["system call 通常由程序主动请求服务；interrupt 通常由硬件或异步事件触发","interrupt 一定来自用户程序","system call 不会进入 kernel mode"],0,"两者都可能导致控制权进入内核，但触发来源和意图不同。"),_("Kernel mode 的权限更高主要是为了什么？",["允许直接执行特权指令和访问受保护资源","让普通应用运行更快","避免使用 stack"],0,"内核需要管理硬件和保护资源，因此必须有特权模式。"),_("Memory boundary 的直接目的是什么？",["防止进程随意访问其他进程或 OS 的内存","让 CPU cache 更大","让程序自动并行"],0,"边界和保护是多道程序安全运行的基础。")],"wk2-process":[_("Process 和 thread 的正确关系是？",["process 持有资源和地址空间，thread 是执行流","thread 持有独立地址空间，process 只是调度单位","process 和 thread 完全等价"],0,"线程通常共享同一进程的地址空间，但各自有 stack/register 等执行状态。"),_("Running process 等待磁盘 I/O 时通常会进入哪个状态？",["Blocked","Ready","Terminated"],0,"等待外部事件完成时不能继续运行，也不是已经 ready。"),_("fork 后父子进程的变量关系更接近哪一种？",["逻辑上各自拥有一份地址空间","完全共享所有变量","子进程不能访问代码段"],0,"现代系统可能用 copy-on-write，但语义上父子地址空间独立。")],"wk3-cpu":[_("Turnaround time 通常等于什么？",["完成时间 - 到达时间","第一次运行时间 - 到达时间","等待时间 - burst time"],0,"Response time 才关注第一次响应。"),_("Round Robin 的 time quantum 太小，最明显的问题是？",["context switch 开销变大","永远退化成 FCFS","无法抢占"],0,"时间片太小会频繁切换，吞吐下降。"),_("SJF 的主要风险是什么？",["长作业可能 starvation","一定比 RR 响应慢","无法计算 waiting time"],0,"短作业优先可能长期推迟长作业。")],"wk3-ipc":[_("Race condition 的根源是？",["共享状态被不同 interleaving 以非原子方式访问","程序使用了太多函数","CPU 速度太快"],0,"read-modify-write 这类序列如果可交错，就可能丢更新。"),_("Critical region 和 mutual exclusion 的关系是？",["critical region 是代码区域；mutual exclusion 是保护性质/机制","二者完全同义","mutual exclusion 只用于内存分页"],0,"一个是被保护的区域，一个是保护目标。"),_("为什么普通 lock variable 不够安全？",["检查和设置不是原子操作","变量不能放在内存中","锁只能用于一个进程"],0,"两个线程可能同时看到 unlocked，然后同时进入。")],"wk4-memory":[_("Paging 主要解决了 base/limit 的哪个问题？",["进程必须占用连续物理内存","CPU 无法执行加法","所有程序都必须使用同一 stack"],0,"分页允许逻辑页面映射到不连续的物理页框。"),_("Logical address 被分页系统拆成什么？",["page number 和 offset","base 和 limit","MAC 和 IP"],0,"page number 查页表，offset 在页内保持不变。"),_("TLB hit 时通常意味着什么？",["可以跳过慢的页表访问","一定发生 page fault","物理内存不存在该页"],0,"TLB 缓存最近的地址翻译。")],"wk5-security":[_("MAC 和 digital signature 最大区别之一是？",["MAC 使用共享密钥；签名使用私钥/公钥","MAC 只能加密图片","签名不能验证身份"],0,"MAC 双方共享 secret，签名能让持公钥者验证私钥持有者。"),_("Certificate 解决的核心问题是？",["把公钥和身份可信地绑定起来","让 HTTP 变成 UDP","替代所有加密算法"],0,"CA 对身份和公钥绑定做背书。"),_("Confidentiality 主要防止什么？",["未授权读取内容","消息被静默篡改","发送方否认发送"],0,"保密性关注内容不被看见；完整性和认证解决其他问题。")],"wk6-osi":[_("Service 和 protocol 的区别更接近哪项？",["service 是给上层提供什么；protocol 是同层实体如何通信","service 只用于物理层","protocol 是用户界面"],0,"这是分层模型中很常考的边界。"),_("Encapsulation 发生时通常会怎样？",["每层在数据前后加入自己的控制信息","每层删除所有 header","只有应用层处理 header"],0,"下传时逐层封装，上交时逐层解封装。"),_("IP narrow waist 的意义是？",["多种上层协议和下层技术通过 IP 汇合","IP 只能运行在一种链路上","IP 替代 TCP"],0,"窄腰让互联网可扩展。")],"wk7-sockets":[_("TCP server 为什么通常有两个 socket？",["一个 listening socket 接收连接，一个 connected socket 与特定 client 通信","一个 socket 只能读，另一个只能写","因为 UDP 要求两个 socket"],0,"accept 返回的 connected socket 代表具体连接。"),_("client 主动建立 TCP 连接通常调用什么？",["connect","listen","accept"],0,"listen/accept 是 server 侧。"),_("Blocking read 在没有数据时会怎样？",["等待直到数据到达或出错","立即返回所有未来数据","自动关闭 socket"],0,"阻塞语义是网络编程的核心行为。")],"wk7-dns":[_("Authoritative DNS server 的角色是？",["对某个 zone 的记录给出权威答案","只缓存浏览器历史","负责发送邮件正文"],0,"最终记录来源通常在 authoritative server。"),_("MX record 主要用于什么？",["指向处理该域邮件的 mail server","把名字映射到 IPv4 地址","表示别名"],0,"A 记录映射 IPv4，CNAME 是别名。"),_("IMAP 和 SMTP 的区别是？",["SMTP 主要发送/转发邮件；IMAP 主要读取/同步邮箱","IMAP 负责 DNS 查询","SMTP 只能传图片"],0,"邮件发送和读取是不同协议角色。")],"wk8-udp":[_("Transport layer 相比 network layer 多关注什么？",["process-to-process communication","单个链路上的电信号","显示网页样式"],0,"端口让传输层能把数据交给正确进程。"),_("UDP 的特点是？",["无连接、低开销、不保证可靠交付","必须三次握手","保证按序字节流"],0,"可靠按序字节流是 TCP 的特点。"),_("Demultiplexing 主要依靠什么？",["端口号和协议等 socket 标识","屏幕分辨率","文件扩展名"],0,"收到 segment 后根据头部字段交给正确 socket。")],"wk8-http":[_("HTTP 的基本交互模型是？",["request/response","peer-to-peer flooding","CPU interrupt only"],0,"客户端发请求，服务器回响应。"),_("Persistent connection 的主要收益是？",["复用 TCP 连接，减少重复握手开销","让 UDP 变可靠","完全取消 header"],0,"多个对象可以使用同一 TCP connection。"),_("HTTPS 和 HTTP 的关系更准确的是？",["HTTP over TLS，通常使用 443 端口","完全不使用 HTTP message format","HTTP over UDP 必然就是 HTTPS"],0,"课件重点是 HTTPS 是普通 HTTP 运行在 TLS 服务之上。")],"wk9-tcp":[_("TCP 为什么叫 byte stream？",["应用写入的消息边界不被 TCP 保留","TCP 只能发送一个 byte","TCP 不使用 sequence number"],0,"接收方看到的是有序字节流。"),_("SYN 是否消耗 sequence number？",["是","否","只在 UDP 中消耗"],0,"SYN 和 FIN 都会消耗一个序列号。"),_("Receive window 由谁通告？",["接收方","路由器","DNS server"],0,"它反映接收方还能接收多少数据。")],"wk9-protocol":[_("Protocol design 至少要定义什么？",["syntax、semantics、timing 等规则","只定义 UI 颜色","只定义文件名"],0,"消息格式、含义、时序都要明确。"),_("Marshalling 是什么？",["把参数/结构编码成可传输 bytes","把路由器关机","把 TCP 改成 UDP"],0,"RPC 调用必须把本地数据表示转成网络表示。"),_("RPC 为什么不能直接传 pointer？",["远端进程地址空间不同，指针值无意义","pointer 只能在 DNS 中使用","pointer 会自动变成 IP"],0,"地址只在本进程上下文内有意义。")],"wk10-addressing":[_("/24 和 /16 哪个网络通常容纳更多 host？",["/16","/24","一样多"],0,"prefix 越短，host bits 越多。"),_("IP 地址更准确地说分配给什么？",["interface","整台主机且只能一个","应用层 header"],0,"路由器有多个接口，也就有多个 IP。"),_("Route aggregation 的目的是什么？",["用更短前缀合并多条路由，缩小路由表","把所有包改成广播","隐藏 TCP header"],0,"层次化地址让聚合成为可能。")],"wk10-congestion":[_("CWND 和 RWND 的区别是？",["CWND 反映网络拥塞控制；RWND 反映接收方缓冲能力","二者完全相同","RWND 是 DNS 字段"],0,"实际可发送窗口受两者共同限制。"),_("Slow start 的增长形态是？",["指数增长","完全不增长","每小时增长一次"],0,"每个 RTT 大致翻倍，名字容易误导。"),_("3 个 duplicate ACK 常触发什么？",["fast retransmit","DNS cache flush","ARP broadcast"],0,"这强烈暗示中间某个 segment 丢失。")],"wk11-routing":[_("Forwarding 和 routing 的区别是？",["forwarding 是按表转发包；routing 是计算/维护路由表","routing 只发生在应用层","二者完全相同"],0,"一个是数据平面动作，一个是路径选择过程。"),_("Dijkstra 每一步选择什么节点？",["当前 tentative distance 最小的未确定节点","名字最长的节点","随机节点"],0,"贪心选择最小临时距离。"),_("Link state routing 中 age 字段常用于什么？",["让旧的链路状态信息过期","表示网页缓存时间","统计应用线程数"],0,"避免陈旧信息永久存在。")],"wk11-control":[_("ARP 主要解决什么？",["同一局域网内 IP 地址到 MAC 地址的映射","HTTP cookie 加密","TCP 拥塞窗口计算"],0,"ARP 工作在本地链路范围。"),_("Traceroute 为什么能发现路径？",["逐步增加 TTL 并接收 ICMP Time Exceeded","让 DNS 返回所有路由器","强制 NAT 打印表"],0,"每一跳 TTL 到 0 时通常返回 ICMP。"),_("ICMP 更接近什么？",["网络层控制/错误报告消息","传输层可靠字节流","应用层邮件协议"],0,"ICMP 支持诊断和错误报告。")],"wk12-nat":[_("NAT table 为什么必须维护状态？",["返回包需要根据公网端口映射回内部主机","为了渲染 HTML","为了计算 CPU waiting time"],0,"端口映射是连接状态的一部分。"),_("NAT 是否等价于 firewall？",["不是","是，完全一样","只在 IPv6 中一样"],0,"NAT 有一定屏蔽效果，但不是防火墙策略本身。"),_("私有地址为什么不能直接在公网通信？",["公网路由器不会全局路由这些地址","私有地址只能用于 UDP","私有地址没有二进制表示"],0,"RFC1918 地址在不同私网可重复使用。")]};function uS({chapter:u}){switch(u.lab){case"system-call":return d.jsx(is,{title:"System call journey",steps:rS});case"process-thread":return d.jsx(hS,{});case"scheduling":return d.jsx(pS,{});case"race-condition":return d.jsx(SS,{});case"paging":return d.jsx(TS,{});case"crypto":return d.jsx(yS,{});case"encapsulation":return d.jsx(vS,{});case"sockets":return d.jsx(CS,{});case"dns":return d.jsx(is,{title:"DNS lookup path",steps:oS});case"udp-demux":return d.jsx(bS,{});case"http":return d.jsx(PS,{});case"tcp-handshake":return d.jsx(is,{title:"TCP three-way handshake",steps:fS});case"rpc":return d.jsx(AS,{});case"cidr":return d.jsx(xS,{});case"cwnd":return d.jsx(MS,{});case"dijkstra":return d.jsx(wS,{});case"control-plane":return d.jsx(is,{title:"Traceroute and ARP flow",steps:dS});case"nat":return d.jsx(US,{});default:return d.jsx("div",{className:"empty-panel",children:"这一章的互动实验还在排队。"})}}function is({title:u,steps:s}){const[o,r]=Y.useState(0),f=s[o];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:u})]}),d.jsxs("div",{className:"step-count",children:[o+1,"/",s.length]})]}),d.jsx("div",{className:"stepper-track",children:s.map((g,p)=>d.jsx("button",{className:p===o?"step-dot active":"step-dot",onClick:()=>r(p),title:g.label,children:p+1},g.label))}),d.jsxs("div",{className:"lab-stage",children:[d.jsx("h4",{children:f.label}),d.jsx("p",{children:f.body}),d.jsx("code",{children:f.note})]}),d.jsxs("div",{className:"lab-actions",children:[d.jsx("button",{onClick:()=>r(Math.max(0,o-1)),children:"上一步"}),d.jsx("button",{onClick:()=>r(Math.min(s.length-1,o+1)),children:"下一步"})]})]})}const rS=[{label:"User code",body:"应用程序调用 read(fd, buf, n)，此时仍在 user mode。",note:"普通应用不能直接碰硬件。"},{label:"Trap",body:"CPU 通过 trap 切入 kernel mode，控制权交给 OS 的 system call handler。",note:"mode switch 发生在这里。"},{label:"Kernel work",body:"内核检查参数、权限和文件状态，必要时让进程 blocked 等待 I/O。",note:"blocked 不等于 terminated。"},{label:"Interrupt",body:"设备完成 I/O 后发出 interrupt，内核把数据放到合适缓冲区。",note:"interrupt 通常是异步事件。"},{label:"Return",body:"内核恢复进程上下文，返回 user mode，read 得到结果。",note:"用户代码继续执行。"}],oS=[{label:"Browser asks local DNS",body:"浏览器或 OS resolver 先问本地 DNS。",note:"缓存命中就可以直接返回。"},{label:"Root server",body:"本地 DNS 若无缓存，先问 root，得到 TLD server 线索。",note:"root 不保存所有主机 IP。"},{label:"TLD server",body:"TLD server 例如 .com 返回 authoritative server 线索。",note:"这是分层数据库。"},{label:"Authoritative server",body:"权威服务器返回 A/AAAA/CNAME/MX 等记录。",note:"最终权威答案来自这里。"},{label:"Cache and answer",body:"本地 DNS 按 TTL 缓存结果，再把答案返回给客户端。",note:"TTL 控制缓存有效期。"}],fS=[{label:"SYN",body:"Client 发送 SYN，选择初始 sequence number x。",note:"SYN 消耗 1 个序列号。"},{label:"SYN-ACK",body:"Server 回复 SYN-ACK，ack=x+1，并选择自己的 sequence number y。",note:"双方都同步初始序列号。"},{label:"ACK",body:"Client 回复 ACK，ack=y+1，连接进入 established。",note:"第三个 ACK 通常可携带数据。"},{label:"Byte stream",body:"之后 TCP 传输的是有序 byte stream，不保留应用消息边界。",note:"read 次数不一定等于 write 次数。"}],dS=[{label:"Need next hop MAC",body:"主机要发 IP packet 到下一跳，先检查 ARP cache。",note:"ARP 只在本地链路范围内解析。"},{label:"ARP request",body:"若无缓存，广播 Who has this IP?",note:"广播不会穿过路由器。"},{label:"ARP reply",body:"目标接口回复自己的 MAC，发送方缓存映射。",note:"之后 frame 用这个 MAC 发出。"},{label:"Traceroute TTL=1",body:"traceroute 从 TTL=1 开始发包，第一跳让 TTL 归零并回 ICMP。",note:"ICMP Time Exceeded 暴露这一跳。"},{label:"Increase TTL",body:"逐步增加 TTL，直到到达目标或停止。",note:"路径是一跳一跳探出来的。"}];function hS(){const[u,s]=Y.useState("process"),o=u==="process"?[["Address space","separate"],["Open files","can be inherited, then independent descriptors"],["Registers","separate"],["Stack","separate"],["Crash impact","usually isolated from other processes"]]:[["Address space","shared within the process"],["Open files","shared process resource"],["Registers","separate per thread"],["Stack","separate per thread"],["Crash impact","can bring down the process"]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Process vs thread map"})]}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{className:u==="process"?"active":"",onClick:()=>s("process"),children:"Process"}),d.jsx("button",{className:u==="thread"?"active":"",onClick:()=>s("thread"),children:"Thread"})]})]}),d.jsx("div",{className:"memory-map",children:o.map(([r,f])=>d.jsxs("div",{className:"memory-row",children:[d.jsx("span",{children:r}),d.jsx("strong",{children:f})]},r))})]})}function pS(){const[u,s]=Y.useState("RR"),[o,r]=Y.useState(2),f=[{id:"P1",arrival:0,burst:5},{id:"P2",arrival:1,burst:3},{id:"P3",arrival:2,burst:8},{id:"P4",arrival:3,burst:6}],g=Y.useMemo(()=>gS(f,u,o),[u,o]);return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"CPU scheduling simulator"})]}),d.jsx("div",{className:"segmented",children:["FCFS","SJF","RR"].map(p=>d.jsx("button",{className:u===p?"active":"",onClick:()=>s(p),children:p},p))})]}),u==="RR"&&d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"Quantum"}),d.jsx("input",{type:"range",min:"1",max:"5",value:o,onChange:p=>r(Number(p.target.value))}),d.jsx("strong",{children:o})]}),d.jsx("div",{className:"process-grid",children:f.map(p=>d.jsxs("div",{children:[d.jsx("strong",{children:p.id}),d.jsxs("span",{children:["arr ",p.arrival]}),d.jsxs("span",{children:["burst ",p.burst]})]},p.id))}),d.jsx("div",{className:"gantt",children:g.segments.map((p,x)=>d.jsxs("div",{className:`gantt-bar tone-${p.id}`,style:{flexGrow:p.end-p.start},title:`${p.id}: ${p.start}-${p.end}`,children:[d.jsx("span",{children:p.id}),d.jsxs("small",{children:[p.start,"-",p.end]})]},`${p.id}-${p.start}-${x}`))}),d.jsx("div",{className:"metric-grid",children:g.metrics.map(p=>d.jsxs("div",{children:[d.jsx("strong",{children:p.id}),d.jsxs("span",{children:["wait ",p.waiting]}),d.jsxs("span",{children:["turn ",p.turnaround]}),d.jsxs("span",{children:["resp ",p.response]})]},p.id))})]})}function gS(u,s,o){if(s==="RR")return mS(u,o);const r=[...u].sort((p,x)=>p.arrival-x.arrival||p.id.localeCompare(x.id)),f=[];let g=0;for(;r.length;){const p=r.filter(m=>m.arrival<=g);let x;p.length===0?(x=r[0],g=x.arrival):s==="SJF"?x=p.sort((m,T)=>m.burst-T.burst||m.arrival-T.arrival)[0]:x=p[0],f.push({id:x.id,start:g,end:g+x.burst}),g+=x.burst,r.splice(r.findIndex(m=>m.id===x.id),1)}return Ah(u,f)}function mS(u,s){const o=u.map(m=>({...m,remaining:m.burst})),r=[],f=[];let g=0,p=0;const x=[...o].sort((m,T)=>m.arrival-T.arrival);for(;f.length||p<x.length;){for(;p<x.length&&x[p].arrival<=g;)f.push(x[p]),p+=1;if(!f.length){g=x[p].arrival;continue}const m=f.shift(),T=Math.min(s,m.remaining);for(r.push({id:m.id,start:g,end:g+T}),g+=T,m.remaining-=T;p<x.length&&x[p].arrival<=g;)f.push(x[p]),p+=1;m.remaining>0&&f.push(m)}return Ah(u,r)}function Ah(u,s){const o=u.map(r=>{const f=s.filter(m=>m.id===r.id),g=Math.max(...f.map(m=>m.end)),p=Math.min(...f.map(m=>m.start)),x=g-r.arrival;return{id:r.id,waiting:x-r.burst,turnaround:x,response:p-r.arrival}});return{segments:s,metrics:o}}function SS(){const[u,s]=Y.useState(0),[o,r]=Y.useState({A:null,B:null}),[f,g]=Y.useState([]);function p(T){r(R=>({...R,[T]:u})),g(R=>[`${T}: read ${u}`,...R].slice(0,5))}function x(T){if(o[T]===null)return;const R=o[T]+1;s(R),g(U=>[`${T}: write ${R}`,...U].slice(0,5))}function m(){s(0),r({A:null,B:null}),g([])}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Race condition interleaving"})]}),d.jsx("button",{onClick:m,children:"Reset"})]}),d.jsxs("div",{className:"counter-display",children:["shared counter = ",u]}),d.jsx("div",{className:"thread-grid",children:["A","B"].map(T=>d.jsxs("div",{children:[d.jsxs("h4",{children:["Thread ",T]}),d.jsxs("p",{children:["local = ",o[T]===null?"empty":o[T]]}),d.jsx("button",{onClick:()=>p(T),children:"Read"}),d.jsx("button",{onClick:()=>x(T),children:"Write +1"})]},T))}),d.jsx("ol",{className:"log-list",children:f.map((T,R)=>d.jsx("li",{children:T},`${T}-${R}`))})]})}function TS(){const[u,s]=Y.useState(2148),o=1024,r={0:5,1:9,2:1,3:7},f=Math.floor(u/o),g=u%o,p=r[f],x=p===void 0?null:p*o+g;return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Paging calculator"})]}),d.jsxs("code",{children:["page size = ",o," B"]})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Logical address"}),d.jsx("input",{type:"number",min:"0",max:"4095",value:u,onChange:m=>s(Number(m.target.value))})]}),d.jsxs("div",{className:"translation-grid",children:[d.jsxs("div",{children:[d.jsx("span",{children:"page number"}),d.jsx("strong",{children:f})]}),d.jsxs("div",{children:[d.jsx("span",{children:"offset"}),d.jsx("strong",{children:g})]}),d.jsxs("div",{children:[d.jsx("span",{children:"frame"}),d.jsx("strong",{children:p??"page fault"})]}),d.jsxs("div",{children:[d.jsx("span",{children:"physical address"}),d.jsx("strong",{children:x??"not resident"})]})]}),d.jsx("div",{className:"page-table",children:Object.entries(r).map(([m,T])=>d.jsxs("div",{className:Number(m)===f?"active":"",children:["page ",m," ","->"," frame ",T]},m))})]})}function yS(){const[u,s]=Y.useState(0),o=[["Certificate","Browser checks the server certificate and learns the real server public key."],["Session key","Client creates a fast symmetric session key for this connection."],["Key exchange","Public-key crypto protects the session key during setup."],["Encrypted data","Bulk data uses symmetric encryption for confidentiality."],["Integrity/auth","MAC or AEAD detects tampering; signatures/certificates support authentication."]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Hybrid encryption flow"})]}),d.jsxs("div",{className:"step-count",children:[u+1,"/",o.length]})]}),d.jsx("div",{className:"crypto-flow",children:o.map(([r],f)=>d.jsx("button",{className:f===u?"active":"",onClick:()=>s(f),children:r},r))}),d.jsxs("div",{className:"lab-stage",children:[d.jsx("h4",{children:o[u][0]}),d.jsx("p",{children:o[u][1]})]})]})}function vS(){const[u,s]=Y.useState(4),o=[["Application","HTTP message","GET /index.html"],["Transport","TCP segment","TCP hdr | HTTP message"],["Network","IP packet","IP hdr | TCP hdr | HTTP message"],["Link","Frame","ETH hdr | IP hdr | TCP hdr | HTTP message | FCS"]];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Encapsulation stack"})]}),d.jsx("input",{type:"range",min:"1",max:"4",value:u,onChange:r=>s(Number(r.target.value))})]}),d.jsx("div",{className:"stack-view",children:o.slice(0,u).map(([r,f,g])=>d.jsxs("div",{children:[d.jsx("strong",{children:r}),d.jsx("span",{children:f}),d.jsx("code",{children:g})]},r))})]})}function CS(){const[u,s]=Y.useState(0),o=["socket()","bind()","listen()","accept()","read()/write()","close()"];return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Server socket lifecycle"})]}),d.jsx("button",{onClick:()=>s((u+1)%o.length),children:"Next"})]}),d.jsxs("div",{className:"socket-columns",children:[d.jsxs("div",{children:[d.jsx("h4",{children:"Listening socket"}),o.slice(0,4).map((r,f)=>d.jsx("span",{className:f<=u?"active":"",children:r},r))]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Connected socket"}),["created by accept()","read()/write()","close()"].map((r,f)=>d.jsx("span",{className:u>=f+3?"active":"",children:r},r))]})]})]})}function bS(){const[u,s]=Y.useState(53),o=[{port:53,app:"DNS resolver"},{port:123,app:"NTP client"},{port:5004,app:"RTP media app"}],r=o.find(f=>f.port===Number(u));return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"UDP demultiplexing"})]}),d.jsx("select",{value:u,onChange:f=>s(Number(f.target.value)),children:o.map(f=>d.jsxs("option",{value:f.port,children:["port ",f.port]},f.port))})]}),d.jsxs("div",{className:"packet-box",children:["UDP segment: src 62000 ","->"," dst ",u]}),d.jsx("div",{className:"socket-list",children:o.map(f=>d.jsxs("div",{className:f.port===Number(u)?"active":"",children:[d.jsx("strong",{children:f.app}),d.jsxs("span",{children:["listening on ",f.port]})]},f.port))}),d.jsxs("p",{className:"lab-note",children:["Delivered to: ",d.jsx("strong",{children:r?.app})]})]})}function PS(){const[u,s]=Y.useState("GET"),[o,r]=Y.useState("/index.html"),[f,g]=Y.useState("example.com"),[p,x]=Y.useState(!0),m=`${u} ${o} HTTP/1.1
Host: ${f}
Accept: text/html${p?`
Cookie: sid=abc123`:""}

`;return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"HTTP request builder"})]}),d.jsx("select",{value:u,onChange:T=>s(T.target.value),children:["GET","POST","PUT","DELETE"].map(T=>d.jsx("option",{children:T},T))})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Path"}),d.jsx("input",{value:o,onChange:T=>r(T.target.value)})]}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Host"}),d.jsx("input",{value:f,onChange:T=>g(T.target.value)})]}),d.jsxs("label",{className:"check-row",children:[d.jsx("input",{type:"checkbox",checked:p,onChange:T=>x(T.target.checked)})," Cookie"]}),d.jsx("pre",{className:"request-box",children:m})]})}function AS(){const[u,s]=Y.useState("add(7, 5)");return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"RPC marshalling"})]})}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"Call"}),d.jsx("input",{value:u,onChange:o=>s(o.target.value)})]}),d.jsxs("div",{className:"rpc-flow",children:[d.jsxs("div",{children:[d.jsx("strong",{children:"Client stub"}),d.jsx("span",{children:u})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Bytes on network"}),d.jsx("code",{children:kS(u)})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Server stub"}),d.jsx("span",{children:"unmarshal and execute"})]}),d.jsxs("div",{children:[d.jsx("strong",{children:"Reply"}),d.jsx("span",{children:"result encoded back to client"})]})]})]})}function kS(u){return Array.from(u).map(s=>s.charCodeAt(0).toString(16).padStart(2,"0")).join(" ")}function xS(){const[u,s]=Y.useState("192.168.10.42"),[o,r]=Y.useState(24),f=Y.useMemo(()=>NS(u,o),[u,o]);return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"CIDR calculator"})]})}),d.jsxs("label",{className:"input-row",children:[d.jsx("span",{children:"IP"}),d.jsx("input",{value:u,onChange:g=>s(g.target.value)})]}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"Prefix"}),d.jsx("input",{type:"range",min:"8",max:"30",value:o,onChange:g=>r(Number(g.target.value))}),d.jsxs("strong",{children:["/",o]})]}),d.jsxs("div",{className:"translation-grid",children:[d.jsxs("div",{children:[d.jsx("span",{children:"mask"}),d.jsx("strong",{children:f.mask})]}),d.jsxs("div",{children:[d.jsx("span",{children:"network"}),d.jsx("strong",{children:f.network})]}),d.jsxs("div",{children:[d.jsx("span",{children:"broadcast"}),d.jsx("strong",{children:f.broadcast})]}),d.jsxs("div",{children:[d.jsx("span",{children:"usable hosts"}),d.jsx("strong",{children:f.hosts})]})]})]})}function NS(u,s){const o=DS(u);if(o===null)return{mask:"invalid",network:"invalid",broadcast:"invalid",hosts:"invalid"};const r=s===0?0:4294967295<<32-s>>>0,f=(o&r)>>>0,g=(f|~r>>>0)>>>0,p=s>=31?2**(32-s):Math.max(0,2**(32-s)-2);return{mask:Bu(r),network:Bu(f),broadcast:Bu(g),hosts:p}}function DS(u){const s=u.split(".").map(Number);return s.length!==4||s.some(o=>!Number.isInteger(o)||o<0||o>255)?null:s.reduce((o,r)=>(o<<8)+r>>>0,0)}function Bu(u){return[24,16,8,0].map(s=>u>>>s&255).join(".")}function MS(){const[u,s]=Y.useState(8),[o,r]=Y.useState(7),f=Y.useMemo(()=>RS(u,o),[u,o]),g=Math.max(...f.map(p=>p.cwnd),1);return d.jsxs("section",{className:"lab",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Congestion window chart"})]})}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"ssthresh"}),d.jsx("input",{type:"range",min:"4",max:"16",value:u,onChange:p=>s(Number(p.target.value))}),d.jsx("strong",{children:u})]}),d.jsxs("label",{className:"slider-row",children:[d.jsx("span",{children:"loss round"}),d.jsx("input",{type:"range",min:"3",max:"12",value:o,onChange:p=>r(Number(p.target.value))}),d.jsx("strong",{children:o})]}),d.jsx("div",{className:"bar-chart",children:f.map(p=>d.jsxs("div",{className:p.loss?"loss":"",children:[d.jsx("span",{style:{height:`${p.cwnd/g*100}%`}}),d.jsx("small",{children:p.round})]},p.round))}),d.jsx("p",{className:"lab-note",children:"当前模型：Tahoe 风格，loss 后 ssthresh = cwnd / 2，并重新 slow start。"})]})}function RS(u,s){const o=[];let r=1,f=u;for(let g=1;g<=12;g+=1)o.push({round:g,cwnd:r,loss:g===s}),g===s?(f=Math.max(1,Math.floor(r/2)),r=1):r<f?r*=2:r+=1;return o}function wS(){const u={A:{B:2,C:5},B:{A:2,C:1,D:4},C:{A:5,B:1,D:1,E:7},D:{B:4,C:1,E:3},E:{C:7,D:3}},[s,o]=Y.useState(()=>hh(u)),r=ES(u,s);function f(){if(!r)return;const g={settled:[...s.settled,r],dist:{...s.dist},prev:{...s.prev},last:r};Object.entries(u[r]).forEach(([p,x])=>{if(g.settled.includes(p))return;const m=g.dist[r]+x;m<g.dist[p]&&(g.dist[p]=m,g.prev[p]=r)}),o(g)}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"Dijkstra stepper"})]}),d.jsxs("div",{className:"lab-actions compact",children:[d.jsx("button",{onClick:()=>o(hh(u)),children:"Reset"}),d.jsx("button",{onClick:f,disabled:!r,children:"Step"})]})]}),d.jsx("div",{className:"node-grid",children:Object.keys(u).map(g=>d.jsxs("div",{className:s.settled.includes(g)?"settled":r===g?"candidate":"",children:[d.jsx("strong",{children:g}),d.jsx("span",{children:s.dist[g]===1/0?"inf":s.dist[g]}),d.jsxs("small",{children:["prev ",s.prev[g]||"-"]})]},g))}),d.jsxs("p",{className:"lab-note",children:["Next: ",d.jsx("strong",{children:r||"done"})]})]})}function hh(u){return{settled:[],dist:Object.fromEntries(Object.keys(u).map(s=>[s,s==="A"?0:1/0])),prev:{},last:null}}function ES(u,s){return Object.keys(u).filter(o=>!s.settled.includes(o)).sort((o,r)=>s.dist[o]-s.dist[r]||o.localeCompare(r))[0]}function US(){const[u,s]=Y.useState("192.168.0.10"),[o,r]=Y.useState([{inside:"192.168.0.10:51510",outside:"203.0.113.5:40001",remote:"142.250.66.78:443"}]);function f(){const g=40001+o.length;r([...o,{inside:`${u}:${51510+o.length}`,outside:`203.0.113.5:${g}`,remote:"93.184.216.34:443"}])}return d.jsxs("section",{className:"lab",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Interactive lab"}),d.jsx("h3",{children:"NAT table simulator"})]}),d.jsx("button",{onClick:f,children:"New flow"})]}),d.jsxs("select",{value:u,onChange:g=>s(g.target.value),children:[d.jsx("option",{children:"192.168.0.10"}),d.jsx("option",{children:"192.168.0.11"}),d.jsx("option",{children:"192.168.0.25"})]}),d.jsxs("div",{className:"nat-table",children:[d.jsx("div",{className:"header",children:"Inside"}),d.jsx("div",{className:"header",children:"Public mapping"}),d.jsx("div",{className:"header",children:"Remote"}),o.flatMap(g=>[d.jsx("div",{children:g.inside},`${g.inside}-i`),d.jsx("div",{children:g.outside},`${g.inside}-o`),d.jsx("div",{children:g.remote},`${g.inside}-r`)])]}),d.jsx("p",{className:"lab-note",children:"返回包命中 public port 后，NAT 才知道该转回哪台内网主机。"})]})}function Qu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ea=Qu();function kh(u){ea=u}var $t={exec:()=>null};function sn(u,s=""){let o=typeof u=="string"?u:u.source,r={replace:(f,g)=>{let p=typeof g=="string"?g:g.source;return p=p.replace(Fn.caret,"$1"),o=o.replace(f,p),r},getRegex:()=>new RegExp(o,s)};return r}var HS=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Fn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}>`)},OS=/^(?:[ \t]*(?:\n|$))+/,LS=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,BS=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wl=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,zS=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,qu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,xh=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Nh=sn(xh).replace(/bull/g,qu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),jS=sn(xh).replace(/bull/g,qu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,WS=/^[^\n]+/,Gu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_S=sn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Gu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),IS=sn(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,qu).getRegex(),os="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Xu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,KS=sn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Xu).replace("tag",os).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Dh=sn(Yu).replace("hr",Wl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",os).getRegex(),QS=sn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Dh).getRegex(),Fu={blockquote:QS,code:LS,def:_S,fences:BS,heading:zS,hr:Wl,html:KS,lheading:Nh,list:IS,newline:OS,paragraph:Dh,table:$t,text:WS},ph=sn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",os).getRegex(),qS={...Fu,lheading:jS,table:ph,paragraph:sn(Yu).replace("hr",Wl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ph).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",os).getRegex()},YS={...Fu,html:sn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Xu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$t,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:sn(Yu).replace("hr",Wl).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Nh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},GS=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,XS=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Mh=/^( {2,}|\\)\n(?!\s*$)/,FS=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_a=/[\p{P}\p{S}]/u,fs=/[\s\p{P}\p{S}]/u,Vu=/[^\s\p{P}\p{S}]/u,VS=sn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,fs).getRegex(),Rh=/(?!~)[\p{P}\p{S}]/u,ZS=/(?!~)[\s\p{P}\p{S}]/u,JS=/(?:[^\s\p{P}\p{S}]|~)/u,$S=sn(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",HS?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),wh=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,n1=sn(wh,"u").replace(/punct/g,_a).getRegex(),e1=sn(wh,"u").replace(/punct/g,Rh).getRegex(),Eh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",t1=sn(Eh,"gu").replace(/notPunctSpace/g,Vu).replace(/punctSpace/g,fs).replace(/punct/g,_a).getRegex(),a1=sn(Eh,"gu").replace(/notPunctSpace/g,JS).replace(/punctSpace/g,ZS).replace(/punct/g,Rh).getRegex(),l1=sn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vu).replace(/punctSpace/g,fs).replace(/punct/g,_a).getRegex(),i1=sn(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,_a).getRegex(),s1="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",c1=sn(s1,"gu").replace(/notPunctSpace/g,Vu).replace(/punctSpace/g,fs).replace(/punct/g,_a).getRegex(),u1=sn(/\\(punct)/,"gu").replace(/punct/g,_a).getRegex(),r1=sn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),o1=sn(Xu).replace("(?:-->|$)","-->").getRegex(),f1=sn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",o1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),cs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,d1=sn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Uh=sn(/^!?\[(label)\]\[(ref)\]/).replace("label",cs).replace("ref",Gu).getRegex(),Hh=sn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Gu).getRegex(),h1=sn("reflink|nolink(?!\\()","g").replace("reflink",Uh).replace("nolink",Hh).getRegex(),gh=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Zu={_backpedal:$t,anyPunctuation:u1,autolink:r1,blockSkip:$S,br:Mh,code:XS,del:$t,delLDelim:$t,delRDelim:$t,emStrongLDelim:n1,emStrongRDelimAst:t1,emStrongRDelimUnd:l1,escape:GS,link:d1,nolink:Hh,punctuation:VS,reflink:Uh,reflinkSearch:h1,tag:f1,text:FS,url:$t},p1={...Zu,link:sn(/^!?\[(label)\]\((.*?)\)/).replace("label",cs).getRegex(),reflink:sn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",cs).getRegex()},ju={...Zu,emStrongRDelimAst:a1,emStrongLDelim:e1,delLDelim:i1,delRDelim:c1,url:sn(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",gh).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:sn(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",gh).getRegex()},g1={...ju,br:sn(Mh).replace("{2,}","*").getRegex(),text:sn(ju.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ss={normal:Fu,gfm:qS,pedantic:YS},Bl={normal:Zu,gfm:ju,breaks:g1,pedantic:p1},m1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mh=u=>m1[u];function je(u,s){if(s){if(Fn.escapeTest.test(u))return u.replace(Fn.escapeReplace,mh)}else if(Fn.escapeTestNoEncode.test(u))return u.replace(Fn.escapeReplaceNoEncode,mh);return u}function Sh(u){try{u=encodeURI(u).replace(Fn.percentDecode,"%")}catch{return null}return u}function Th(u,s){let o=u.replace(Fn.findPipe,(g,p,x)=>{let m=!1,T=p;for(;--T>=0&&x[T]==="\\";)m=!m;return m?"|":" |"}),r=o.split(Fn.splitPipe),f=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),s)if(r.length>s)r.splice(s);else for(;r.length<s;)r.push("");for(;f<r.length;f++)r[f]=r[f].trim().replace(Fn.slashPipe,"|");return r}function zl(u,s,o){let r=u.length;if(r===0)return"";let f=0;for(;f<r&&u.charAt(r-f-1)===s;)f++;return u.slice(0,r-f)}function S1(u,s){if(u.indexOf(s[1])===-1)return-1;let o=0;for(let r=0;r<u.length;r++)if(u[r]==="\\")r++;else if(u[r]===s[0])o++;else if(u[r]===s[1]&&(o--,o<0))return r;return o>0?-2:-1}function T1(u,s=0){let o=s,r="";for(let f of u)if(f==="	"){let g=4-o%4;r+=" ".repeat(g),o+=g}else r+=f,o++;return r}function yh(u,s,o,r,f){let g=s.href,p=s.title||null,x=u[1].replace(f.other.outputLinkReplace,"$1");r.state.inLink=!0;let m={type:u[0].charAt(0)==="!"?"image":"link",raw:o,href:g,title:p,text:x,tokens:r.inlineTokens(x)};return r.state.inLink=!1,m}function y1(u,s,o){let r=u.match(o.other.indentCodeCompensation);if(r===null)return s;let f=r[1];return s.split(`
`).map(g=>{let p=g.match(o.other.beginningSpace);if(p===null)return g;let[x]=p;return x.length>=f.length?g.slice(f.length):g}).join(`
`)}var us=class{options;rules;lexer;constructor(u){this.options=u||ea}space(u){let s=this.rules.block.newline.exec(u);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(u){let s=this.rules.block.code.exec(u);if(s){let o=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?o:zl(o,`
`)}}}fences(u){let s=this.rules.block.fences.exec(u);if(s){let o=s[0],r=y1(o,s[3]||"",this.rules);return{type:"code",raw:o,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:r}}}heading(u){let s=this.rules.block.heading.exec(u);if(s){let o=s[2].trim();if(this.rules.other.endingHash.test(o)){let r=zl(o,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(o=r.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(u){let s=this.rules.block.hr.exec(u);if(s)return{type:"hr",raw:zl(s[0],`
`)}}blockquote(u){let s=this.rules.block.blockquote.exec(u);if(s){let o=zl(s[0],`
`).split(`
`),r="",f="",g=[];for(;o.length>0;){let p=!1,x=[],m;for(m=0;m<o.length;m++)if(this.rules.other.blockquoteStart.test(o[m]))x.push(o[m]),p=!0;else if(!p)x.push(o[m]);else break;o=o.slice(m);let T=x.join(`
`),R=T.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${T}`:T,f=f?`${f}
${R}`:R;let U=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,g,!0),this.lexer.state.top=U,o.length===0)break;let B=g.at(-1);if(B?.type==="code")break;if(B?.type==="blockquote"){let nn=B,G=nn.raw+`
`+o.join(`
`),rn=this.blockquote(G);g[g.length-1]=rn,r=r.substring(0,r.length-nn.raw.length)+rn.raw,f=f.substring(0,f.length-nn.text.length)+rn.text;break}else if(B?.type==="list"){let nn=B,G=nn.raw+`
`+o.join(`
`),rn=this.list(G);g[g.length-1]=rn,r=r.substring(0,r.length-B.raw.length)+rn.raw,f=f.substring(0,f.length-nn.raw.length)+rn.raw,o=G.substring(g.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:g,text:f}}}list(u){let s=this.rules.block.list.exec(u);if(s){let o=s[1].trim(),r=o.length>1,f={type:"list",raw:"",ordered:r,start:r?+o.slice(0,-1):"",loose:!1,items:[]};o=r?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=r?o:"[*+-]");let g=this.rules.other.listItemRegex(o),p=!1;for(;u;){let m=!1,T="",R="";if(!(s=g.exec(u))||this.rules.block.hr.test(u))break;T=s[0],u=u.substring(T.length);let U=T1(s[2].split(`
`,1)[0],s[1].length),B=u.split(`
`,1)[0],nn=!U.trim(),G=0;if(this.options.pedantic?(G=2,R=U.trimStart()):nn?G=s[1].length+1:(G=U.search(this.rules.other.nonSpaceChar),G=G>4?1:G,R=U.slice(G),G+=s[1].length),nn&&this.rules.other.blankLine.test(B)&&(T+=B+`
`,u=u.substring(B.length+1),m=!0),!m){let rn=this.rules.other.nextBulletRegex(G),On=this.rules.other.hrRegex(G),Q=this.rules.other.fencesBeginRegex(G),Pn=this.rules.other.headingBeginRegex(G),Bn=this.rules.other.htmlBeginRegex(G),Vn=this.rules.other.blockquoteBeginRegex(G);for(;u;){let Zn=u.split(`
`,1)[0],Rn;if(B=Zn,this.options.pedantic?(B=B.replace(this.rules.other.listReplaceNesting,"  "),Rn=B):Rn=B.replace(this.rules.other.tabCharGlobal,"    "),Q.test(B)||Pn.test(B)||Bn.test(B)||Vn.test(B)||rn.test(B)||On.test(B))break;if(Rn.search(this.rules.other.nonSpaceChar)>=G||!B.trim())R+=`
`+Rn.slice(G);else{if(nn||U.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Q.test(U)||Pn.test(U)||On.test(U))break;R+=`
`+B}nn=!B.trim(),T+=Zn+`
`,u=u.substring(Zn.length+1),U=Rn.slice(G)}}f.loose||(p?f.loose=!0:this.rules.other.doubleBlankLine.test(T)&&(p=!0)),f.items.push({type:"list_item",raw:T,task:!!this.options.gfm&&this.rules.other.listIsTask.test(R),loose:!1,text:R,tokens:[]}),f.raw+=T}let x=f.items.at(-1);if(x)x.raw=x.raw.trimEnd(),x.text=x.text.trimEnd();else return;f.raw=f.raw.trimEnd();for(let m of f.items){if(this.lexer.state.top=!1,m.tokens=this.lexer.blockTokens(m.text,[]),m.task){if(m.text=m.text.replace(this.rules.other.listReplaceTask,""),m.tokens[0]?.type==="text"||m.tokens[0]?.type==="paragraph"){m.tokens[0].raw=m.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),m.tokens[0].text=m.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let R=this.lexer.inlineQueue.length-1;R>=0;R--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[R].src)){this.lexer.inlineQueue[R].src=this.lexer.inlineQueue[R].src.replace(this.rules.other.listReplaceTask,"");break}}let T=this.rules.other.listTaskCheckbox.exec(m.raw);if(T){let R={type:"checkbox",raw:T[0]+" ",checked:T[0]!=="[ ]"};m.checked=R.checked,f.loose?m.tokens[0]&&["paragraph","text"].includes(m.tokens[0].type)&&"tokens"in m.tokens[0]&&m.tokens[0].tokens?(m.tokens[0].raw=R.raw+m.tokens[0].raw,m.tokens[0].text=R.raw+m.tokens[0].text,m.tokens[0].tokens.unshift(R)):m.tokens.unshift({type:"paragraph",raw:R.raw,text:R.raw,tokens:[R]}):m.tokens.unshift(R)}}if(!f.loose){let T=m.tokens.filter(U=>U.type==="space"),R=T.length>0&&T.some(U=>this.rules.other.anyLine.test(U.raw));f.loose=R}}if(f.loose)for(let m of f.items){m.loose=!0;for(let T of m.tokens)T.type==="text"&&(T.type="paragraph")}return f}}html(u){let s=this.rules.block.html.exec(u);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(u){let s=this.rules.block.def.exec(u);if(s){let o=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:o,raw:s[0],href:r,title:f}}}table(u){let s=this.rules.block.table.exec(u);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;let o=Th(s[1]),r=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=s[3]?.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],g={type:"table",raw:s[0],header:[],align:[],rows:[]};if(o.length===r.length){for(let p of r)this.rules.other.tableAlignRight.test(p)?g.align.push("right"):this.rules.other.tableAlignCenter.test(p)?g.align.push("center"):this.rules.other.tableAlignLeft.test(p)?g.align.push("left"):g.align.push(null);for(let p=0;p<o.length;p++)g.header.push({text:o[p],tokens:this.lexer.inline(o[p]),header:!0,align:g.align[p]});for(let p of f)g.rows.push(Th(p,g.header.length).map((x,m)=>({text:x,tokens:this.lexer.inline(x),header:!1,align:g.align[m]})));return g}}lheading(u){let s=this.rules.block.lheading.exec(u);if(s){let o=s[1].trim();return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:o,tokens:this.lexer.inline(o)}}}paragraph(u){let s=this.rules.block.paragraph.exec(u);if(s){let o=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:o,tokens:this.lexer.inline(o)}}}text(u){let s=this.rules.block.text.exec(u);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(u){let s=this.rules.inline.escape.exec(u);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(u){let s=this.rules.inline.tag.exec(u);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(u){let s=this.rules.inline.link.exec(u);if(s){let o=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(o)){if(!this.rules.other.endAngleBracket.test(o))return;let g=zl(o.slice(0,-1),"\\");if((o.length-g.length)%2===0)return}else{let g=S1(s[2],"()");if(g===-2)return;if(g>-1){let p=(s[0].indexOf("!")===0?5:4)+s[1].length+g;s[2]=s[2].substring(0,g),s[0]=s[0].substring(0,p).trim(),s[3]=""}}let r=s[2],f="";if(this.options.pedantic){let g=this.rules.other.pedanticHrefTitle.exec(r);g&&(r=g[1],f=g[3])}else f=s[3]?s[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(o)?r=r.slice(1):r=r.slice(1,-1)),yh(s,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(u,s){let o;if((o=this.rules.inline.reflink.exec(u))||(o=this.rules.inline.nolink.exec(u))){let r=(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=s[r.toLowerCase()];if(!f){let g=o[0].charAt(0);return{type:"text",raw:g,text:g}}return yh(o,f,o[0],this.lexer,this.rules)}}emStrong(u,s,o=""){let r=this.rules.inline.emStrongLDelim.exec(u);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!o||this.rules.inline.punctuation.exec(o))){let f=[...r[0]].length-1,g,p,x=f,m=0,T=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(T.lastIndex=0,s=s.slice(-1*u.length+f);(r=T.exec(s))!==null;){if(g=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!g)continue;if(p=[...g].length,r[3]||r[4]){x+=p;continue}else if((r[5]||r[6])&&f%3&&!((f+p)%3)){m+=p;continue}if(x-=p,x>0)continue;p=Math.min(p,p+x+m);let R=[...r[0]][0].length,U=u.slice(0,f+r.index+R+p);if(Math.min(f,p)%2){let nn=U.slice(1,-1);return{type:"em",raw:U,text:nn,tokens:this.lexer.inlineTokens(nn)}}let B=U.slice(2,-2);return{type:"strong",raw:U,text:B,tokens:this.lexer.inlineTokens(B)}}}}codespan(u){let s=this.rules.inline.code.exec(u);if(s){let o=s[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(o),f=this.rules.other.startingSpaceChar.test(o)&&this.rules.other.endingSpaceChar.test(o);return r&&f&&(o=o.substring(1,o.length-1)),{type:"codespan",raw:s[0],text:o}}}br(u){let s=this.rules.inline.br.exec(u);if(s)return{type:"br",raw:s[0]}}del(u,s,o=""){let r=this.rules.inline.delLDelim.exec(u);if(r&&(!r[1]||!o||this.rules.inline.punctuation.exec(o))){let f=[...r[0]].length-1,g,p,x=f,m=this.rules.inline.delRDelim;for(m.lastIndex=0,s=s.slice(-1*u.length+f);(r=m.exec(s))!==null;){if(g=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!g||(p=[...g].length,p!==f))continue;if(r[3]||r[4]){x+=p;continue}if(x-=p,x>0)continue;p=Math.min(p,p+x);let T=[...r[0]][0].length,R=u.slice(0,f+r.index+T+p),U=R.slice(f,-f);return{type:"del",raw:R,text:U,tokens:this.lexer.inlineTokens(U)}}}}autolink(u){let s=this.rules.inline.autolink.exec(u);if(s){let o,r;return s[2]==="@"?(o=s[1],r="mailto:"+o):(o=s[1],r=o),{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}url(u){let s;if(s=this.rules.inline.url.exec(u)){let o,r;if(s[2]==="@")o=s[0],r="mailto:"+o;else{let f;do f=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])?.[0]??"";while(f!==s[0]);o=s[0],s[1]==="www."?r="http://"+s[0]:r=s[0]}return{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(u){let s=this.rules.inline.text.exec(u);if(s){let o=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:o}}}},we=class Wu{tokens;options;state;inlineQueue;tokenizer;constructor(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||ea,this.options.tokenizer=this.options.tokenizer||new us,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let o={other:Fn,block:ss.normal,inline:Bl.normal};this.options.pedantic?(o.block=ss.pedantic,o.inline=Bl.pedantic):this.options.gfm&&(o.block=ss.gfm,this.options.breaks?o.inline=Bl.breaks:o.inline=Bl.gfm),this.tokenizer.rules=o}static get rules(){return{block:ss,inline:Bl}}static lex(s,o){return new Wu(o).lex(s)}static lexInline(s,o){return new Wu(o).inlineTokens(s)}lex(s){s=s.replace(Fn.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){let r=this.inlineQueue[o];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,o=[],r=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(s=s.replace(Fn.tabCharGlobal,"    ").replace(Fn.spaceLine,""));s;){let f;if(this.options.extensions?.block?.some(p=>(f=p.call({lexer:this},s,o))?(s=s.substring(f.raw.length),o.push(f),!0):!1))continue;if(f=this.tokenizer.space(s)){s=s.substring(f.raw.length);let p=o.at(-1);f.raw.length===1&&p!==void 0?p.raw+=`
`:o.push(f);continue}if(f=this.tokenizer.code(s)){s=s.substring(f.raw.length);let p=o.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+f.raw,p.text+=`
`+f.text,this.inlineQueue.at(-1).src=p.text):o.push(f);continue}if(f=this.tokenizer.fences(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.heading(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.hr(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.blockquote(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.list(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.html(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.def(s)){s=s.substring(f.raw.length);let p=o.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+f.raw,p.text+=`
`+f.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title},o.push(f));continue}if(f=this.tokenizer.table(s)){s=s.substring(f.raw.length),o.push(f);continue}if(f=this.tokenizer.lheading(s)){s=s.substring(f.raw.length),o.push(f);continue}let g=s;if(this.options.extensions?.startBlock){let p=1/0,x=s.slice(1),m;this.options.extensions.startBlock.forEach(T=>{m=T.call({lexer:this},x),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(g=s.substring(0,p+1))}if(this.state.top&&(f=this.tokenizer.paragraph(g))){let p=o.at(-1);r&&p?.type==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+f.raw,p.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):o.push(f),r=g.length!==s.length,s=s.substring(f.raw.length);continue}if(f=this.tokenizer.text(s)){s=s.substring(f.raw.length);let p=o.at(-1);p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+f.raw,p.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):o.push(f);continue}if(s){let p="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,o}inline(s,o=[]){return this.inlineQueue.push({src:s,tokens:o}),o}inlineTokens(s,o=[]){this.tokenizer.lexer=this;let r=s,f=null;if(this.tokens.links){let m=Object.keys(this.tokens.links);if(m.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(r))!==null;)m.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(r))!==null;)r=r.slice(0,f.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let g;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(r))!==null;)g=f[2]?f[2].length:0,r=r.slice(0,f.index+g)+"["+"a".repeat(f[0].length-g-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let p=!1,x="";for(;s;){p||(x=""),p=!1;let m;if(this.options.extensions?.inline?.some(R=>(m=R.call({lexer:this},s,o))?(s=s.substring(m.raw.length),o.push(m),!0):!1))continue;if(m=this.tokenizer.escape(s)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.tag(s)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.link(s)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(m.raw.length);let R=o.at(-1);m.type==="text"&&R?.type==="text"?(R.raw+=m.raw,R.text+=m.text):o.push(m);continue}if(m=this.tokenizer.emStrong(s,r,x)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.codespan(s)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.br(s)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.del(s,r,x)){s=s.substring(m.raw.length),o.push(m);continue}if(m=this.tokenizer.autolink(s)){s=s.substring(m.raw.length),o.push(m);continue}if(!this.state.inLink&&(m=this.tokenizer.url(s))){s=s.substring(m.raw.length),o.push(m);continue}let T=s;if(this.options.extensions?.startInline){let R=1/0,U=s.slice(1),B;this.options.extensions.startInline.forEach(nn=>{B=nn.call({lexer:this},U),typeof B=="number"&&B>=0&&(R=Math.min(R,B))}),R<1/0&&R>=0&&(T=s.substring(0,R+1))}if(m=this.tokenizer.inlineText(T)){s=s.substring(m.raw.length),m.raw.slice(-1)!=="_"&&(x=m.raw.slice(-1)),p=!0;let R=o.at(-1);R?.type==="text"?(R.raw+=m.raw,R.text+=m.text):o.push(m);continue}if(s){let R="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return o}},rs=class{options;parser;constructor(u){this.options=u||ea}space(u){return""}code({text:u,lang:s,escaped:o}){let r=(s||"").match(Fn.notSpaceStart)?.[0],f=u.replace(Fn.endingNewline,"")+`
`;return r?'<pre><code class="language-'+je(r)+'">'+(o?f:je(f,!0))+`</code></pre>
`:"<pre><code>"+(o?f:je(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:s}){return`<h${s}>${this.parser.parseInline(u)}</h${s}>
`}hr(u){return`<hr>
`}list(u){let s=u.ordered,o=u.start,r="";for(let p=0;p<u.items.length;p++){let x=u.items[p];r+=this.listitem(x)}let f=s?"ol":"ul",g=s&&o!==1?' start="'+o+'"':"";return"<"+f+g+`>
`+r+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let s="",o="";for(let f=0;f<u.header.length;f++)o+=this.tablecell(u.header[f]);s+=this.tablerow({text:o});let r="";for(let f=0;f<u.rows.length;f++){let g=u.rows[f];o="";for(let p=0;p<g.length;p++)o+=this.tablecell(g[p]);r+=this.tablerow({text:o})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+r+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let s=this.parser.parseInline(u.tokens),o=u.header?"th":"td";return(u.align?`<${o} align="${u.align}">`:`<${o}>`)+s+`</${o}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${je(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:s,tokens:o}){let r=this.parser.parseInline(o),f=Sh(u);if(f===null)return r;u=f;let g='<a href="'+u+'"';return s&&(g+=' title="'+je(s)+'"'),g+=">"+r+"</a>",g}image({href:u,title:s,text:o,tokens:r}){r&&(o=this.parser.parseInline(r,this.parser.textRenderer));let f=Sh(u);if(f===null)return je(o);u=f;let g=`<img src="${u}" alt="${je(o)}"`;return s&&(g+=` title="${je(s)}"`),g+=">",g}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:je(u.text)}},Ju=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Ee=class _u{options;renderer;textRenderer;constructor(s){this.options=s||ea,this.options.renderer=this.options.renderer||new rs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ju}static parse(s,o){return new _u(o).parse(s)}static parseInline(s,o){return new _u(o).parseInline(s)}parse(s){this.renderer.parser=this;let o="";for(let r=0;r<s.length;r++){let f=s[r];if(this.options.extensions?.renderers?.[f.type]){let p=f,x=this.options.extensions.renderers[p.type].call({parser:this},p);if(x!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(p.type)){o+=x||"";continue}}let g=f;switch(g.type){case"space":{o+=this.renderer.space(g);break}case"hr":{o+=this.renderer.hr(g);break}case"heading":{o+=this.renderer.heading(g);break}case"code":{o+=this.renderer.code(g);break}case"table":{o+=this.renderer.table(g);break}case"blockquote":{o+=this.renderer.blockquote(g);break}case"list":{o+=this.renderer.list(g);break}case"checkbox":{o+=this.renderer.checkbox(g);break}case"html":{o+=this.renderer.html(g);break}case"def":{o+=this.renderer.def(g);break}case"paragraph":{o+=this.renderer.paragraph(g);break}case"text":{o+=this.renderer.text(g);break}default:{let p='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return o}parseInline(s,o=this.renderer){this.renderer.parser=this;let r="";for(let f=0;f<s.length;f++){let g=s[f];if(this.options.extensions?.renderers?.[g.type]){let x=this.options.extensions.renderers[g.type].call({parser:this},g);if(x!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){r+=x||"";continue}}let p=g;switch(p.type){case"escape":{r+=o.text(p);break}case"html":{r+=o.html(p);break}case"link":{r+=o.link(p);break}case"image":{r+=o.image(p);break}case"checkbox":{r+=o.checkbox(p);break}case"strong":{r+=o.strong(p);break}case"em":{r+=o.em(p);break}case"codespan":{r+=o.codespan(p);break}case"br":{r+=o.br(p);break}case"del":{r+=o.del(p);break}case"text":{r+=o.text(p);break}default:{let x='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return r}},jl=class{options;block;constructor(u){this.options=u||ea}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(u=this.block){return u?we.lex:we.lexInline}provideParser(u=this.block){return u?Ee.parse:Ee.parseInline}},v1=class{defaults=Qu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ee;Renderer=rs;TextRenderer=Ju;Lexer=we;Tokenizer=us;Hooks=jl;constructor(...u){this.use(...u)}walkTokens(u,s){let o=[];for(let r of u)switch(o=o.concat(s.call(this,r)),r.type){case"table":{let f=r;for(let g of f.header)o=o.concat(this.walkTokens(g.tokens,s));for(let g of f.rows)for(let p of g)o=o.concat(this.walkTokens(p.tokens,s));break}case"list":{let f=r;o=o.concat(this.walkTokens(f.items,s));break}default:{let f=r;this.defaults.extensions?.childTokens?.[f.type]?this.defaults.extensions.childTokens[f.type].forEach(g=>{let p=f[g].flat(1/0);o=o.concat(this.walkTokens(p,s))}):f.tokens&&(o=o.concat(this.walkTokens(f.tokens,s)))}}return o}use(...u){let s=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(o=>{let r={...o};if(r.async=this.defaults.async||r.async||!1,o.extensions&&(o.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let g=s.renderers[f.name];g?s.renderers[f.name]=function(...p){let x=f.renderer.apply(this,p);return x===!1&&(x=g.apply(this,p)),x}:s.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let g=s[f.level];g?g.unshift(f.tokenizer):s[f.level]=[f.tokenizer],f.start&&(f.level==="block"?s.startBlock?s.startBlock.push(f.start):s.startBlock=[f.start]:f.level==="inline"&&(s.startInline?s.startInline.push(f.start):s.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(s.childTokens[f.name]=f.childTokens)}),r.extensions=s),o.renderer){let f=this.defaults.renderer||new rs(this.defaults);for(let g in o.renderer){if(!(g in f))throw new Error(`renderer '${g}' does not exist`);if(["options","parser"].includes(g))continue;let p=g,x=o.renderer[p],m=f[p];f[p]=(...T)=>{let R=x.apply(f,T);return R===!1&&(R=m.apply(f,T)),R||""}}r.renderer=f}if(o.tokenizer){let f=this.defaults.tokenizer||new us(this.defaults);for(let g in o.tokenizer){if(!(g in f))throw new Error(`tokenizer '${g}' does not exist`);if(["options","rules","lexer"].includes(g))continue;let p=g,x=o.tokenizer[p],m=f[p];f[p]=(...T)=>{let R=x.apply(f,T);return R===!1&&(R=m.apply(f,T)),R}}r.tokenizer=f}if(o.hooks){let f=this.defaults.hooks||new jl;for(let g in o.hooks){if(!(g in f))throw new Error(`hook '${g}' does not exist`);if(["options","block"].includes(g))continue;let p=g,x=o.hooks[p],m=f[p];jl.passThroughHooks.has(g)?f[p]=T=>{if(this.defaults.async&&jl.passThroughHooksRespectAsync.has(g))return(async()=>{let U=await x.call(f,T);return m.call(f,U)})();let R=x.call(f,T);return m.call(f,R)}:f[p]=(...T)=>{if(this.defaults.async)return(async()=>{let U=await x.apply(f,T);return U===!1&&(U=await m.apply(f,T)),U})();let R=x.apply(f,T);return R===!1&&(R=m.apply(f,T)),R}}r.hooks=f}if(o.walkTokens){let f=this.defaults.walkTokens,g=o.walkTokens;r.walkTokens=function(p){let x=[];return x.push(g.call(this,p)),f&&(x=x.concat(f.call(this,p))),x}}this.defaults={...this.defaults,...r}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,s){return we.lex(u,s??this.defaults)}parser(u,s){return Ee.parse(u,s??this.defaults)}parseMarkdown(u){return(s,o)=>{let r={...o},f={...this.defaults,...r},g=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&r.async===!1)return g(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let p=f.hooks?await f.hooks.preprocess(s):s,x=await(f.hooks?await f.hooks.provideLexer(u):u?we.lex:we.lexInline)(p,f),m=f.hooks?await f.hooks.processAllTokens(x):x;f.walkTokens&&await Promise.all(this.walkTokens(m,f.walkTokens));let T=await(f.hooks?await f.hooks.provideParser(u):u?Ee.parse:Ee.parseInline)(m,f);return f.hooks?await f.hooks.postprocess(T):T})().catch(g);try{f.hooks&&(s=f.hooks.preprocess(s));let p=(f.hooks?f.hooks.provideLexer(u):u?we.lex:we.lexInline)(s,f);f.hooks&&(p=f.hooks.processAllTokens(p)),f.walkTokens&&this.walkTokens(p,f.walkTokens);let x=(f.hooks?f.hooks.provideParser(u):u?Ee.parse:Ee.parseInline)(p,f);return f.hooks&&(x=f.hooks.postprocess(x)),x}catch(p){return g(p)}}}onError(u,s){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let r="<p>An error occurred:</p><pre>"+je(o.message+"",!0)+"</pre>";return s?Promise.resolve(r):r}if(s)return Promise.reject(o);throw o}}},na=new v1;function fn(u,s){return na.parse(u,s)}fn.options=fn.setOptions=function(u){return na.setOptions(u),fn.defaults=na.defaults,kh(fn.defaults),fn};fn.getDefaults=Qu;fn.defaults=ea;fn.use=function(...u){return na.use(...u),fn.defaults=na.defaults,kh(fn.defaults),fn};fn.walkTokens=function(u,s){return na.walkTokens(u,s)};fn.parseInline=na.parseInline;fn.Parser=Ee;fn.parser=Ee.parse;fn.Renderer=rs;fn.TextRenderer=Ju;fn.Lexer=we;fn.lexer=we.lex;fn.Tokenizer=us;fn.Hooks=jl;fn.parse=fn;fn.options;fn.setOptions;fn.use;fn.walkTokens;fn.parseInline;Ee.parse;we.lex;const ds=new fn.Renderer,zu="/knowledge/";ds.image=({href:u,title:s,text:o})=>{const r=A1(u),f=s?` title="${ct(s)}"`:"";return`<figure><img src="${ct(r)}" alt="${ct(o||"")}"${f} loading="lazy" /><figcaption>${ct(o||"")}</figcaption></figure>`};ds.heading=({tokens:u,depth:s})=>{const o=u.map(f=>f.raw||f.text||"").join(""),r=Lh(o);return`<h${s} id="${r}">${o}</h${s}>`};ds.code=({text:u,lang:s})=>{if(s)return`<pre><code class="language-${ct(s)}">${ct(u)}</code></pre>`;const o=k1(u);return o||`<pre><code>${ct(u)}</code></pre>`};fn.setOptions({gfm:!0,breaks:!1,renderer:ds});function C1(u){return fn.parse(u)}function b1(u){return u.split(`
`).map(s=>{const o=s.match(/^(#{2,4})\s+(.+)$/);if(!o)return null;const r=o[2].replace(/\*\*/g,"").trim();return{depth:o[1].length,title:r,id:Lh(r)}}).filter(Boolean)}function Oh(u){return u.replace(/!\[[^\]]*]\([^)]+\)/g," ").replace(/\[[^\]]+]\([^)]+\)/g," ").replace(/`{1,3}[^`]*`{1,3}/g," ").replace(/[#>*_\-|]/g," ").replace(/\s+/g," ").trim()}function P1(u,s,o=120){const r=Oh(u);if(!s)return r.slice(0,o);const g=r.toLowerCase().indexOf(s.toLowerCase());if(g<0)return r.slice(0,o);const p=Math.max(0,g-Math.floor(o/2)),x=Math.min(r.length,p+o);return`${p>0?"...":""}${r.slice(p,x)}${x<r.length?"...":""}`}function Lh(u){return u.toLowerCase().replace(/[`~!@#$%^&*()+=[\]{};:'",.<>/?\\|]/g,"").replace(/\s+/g,"-").slice(0,80)}function ct(u){return String(u).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function A1(u){const s=String(u||"");if(/^(https?:|data:|mailto:|#)/i.test(s))return s;const o=s.replace(/^\.?\//,"");return o.startsWith("images/")?`${zu.endsWith("/")?zu:`${zu}/`}${o}`:s}function k1(u){const s=String(u).trim();return x1(s)?w1():N1(s)?E1():D1(s)?U1("UDP Header",[["Source Port","Destination Port"],["Length","Checksum"]]):M1(s)?H1(s):R1(s)?O1(s):""}function x1(u){return u.includes("栈顶")&&u.includes("返回地址")&&u.includes("局部变量")}function N1(u){return u.includes("Code")&&u.includes("Data")&&u.includes("Heap")&&u.includes("Stack")&&u.includes("低地址")}function D1(u){return u.includes("Source Port")&&u.includes("Destination Port")&&u.includes("Checksum")}function M1(u){return u.includes("Client")&&u.includes("Server")&&(u.includes("SYN")||u.includes("FIN")||u.includes("ACK"))}function R1(u){const s=u.split(`
`).map(o=>o.trim()).filter(Boolean);return s.length<3||s.length>16?!1:s.filter(o=>o.includes("→")||o==="↓"||o.startsWith("↓")).length>=2}function w1(){const u=[["参数","Args","调用者传入的数据"],["返回地址","RA","函数返回后 PC 跳回的位置"],["保存的寄存器","Saved registers","恢复调用者执行现场"],["局部变量","Local variables","当前函数自己的临时数据"]];return`
    <figure class="concept-visual stack-visual">
      <figcaption>栈帧结构：高地址在上，栈向低地址增长。这里画的是常见布局，不是所有架构的压栈时间顺序</figcaption>
      <div class="stack-layout">
        <div class="stack-address-axis"><span>高地址</span><b></b><span>低地址</span></div>
        <div class="stack-frame-card">
          ${u.map(([s,o,r],f)=>`
            <div class="stack-slot ${f===u.length-1?"stack-top":""}">
              <strong>${s}</strong>
              <span>${o}</span>
              <small>${r}</small>
              ${f===u.length-1?"<em>SP 指向这里</em>":""}
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
  `}function E1(){return`
    <figure class="concept-visual address-space-visual">
      <figcaption>进程地址空间：线程共享 Code/Data/Heap，每个线程有自己的 Stack</figcaption>
      <div class="address-axis"><span>低地址</span><b></b><span>高地址</span></div>
      <div class="address-space-card">
        ${[["Code","程序指令","共享"],["Data","全局变量 / 静态数据","共享"],["Heap","动态分配内存","向高地址增长"],["Free space","堆和栈之间的空闲区域","可变化"],["Stack","局部变量 / 函数参数","向低地址增长"]].map(([s,o,r])=>`
          <div class="address-region ${s==="Free space"?"free":""}">
            <strong>${s}</strong>
            <span>${o}</span>
            <small>${r}</small>
          </div>
        `).join("")}
      </div>
    </figure>
  `}function U1(u,s){return`
    <figure class="concept-visual packet-visual">
      <figcaption>${u}：固定 8 bytes，核心作用是端口分用和错误检测</figcaption>
      <div class="bit-ruler">
        <span>0</span><span>7</span><span>15</span><span>23</span><span>31</span>
      </div>
      <div class="packet-grid">
        ${s.flat().map(o=>`<div>${o}</div>`).join("")}
      </div>
    </figure>
  `}function H1(u){const o=u.split(`
`).map(f=>f.trim()).filter(Boolean).filter(f=>f.includes("---")||f.includes("<--")).map(f=>{const g=f.includes("<--"),p=f.replace(/[|<>-]/g," ").replace(/\s+/g," ").trim();return{left:g,label:p}});return`
    <figure class="concept-visual sequence-visual">
      <figcaption>${u.includes("FIN")?"TCP 连接关闭时序":"TCP 三次握手时序"}</figcaption>
      <div class="sequence-head"><span>Client</span><span>Server</span></div>
      <div class="sequence-body">
        ${o.map(f=>`
          <div class="sequence-row ${f.left?"left":"right"}">
            <span></span>
            <b>${ct(f.label)}</b>
            <span></span>
          </div>
        `).join("")}
      </div>
      <p>${u.includes("SYN")?"SYN/FIN 会消耗 1 个 sequence number；ACK number 表示期望收到的下一个字节。":"FIN 是方向性的；一边 FIN 后，反方向仍可能继续发送数据。"}</p>
    </figure>
  `}function O1(u){const s=u.split(`
`).map(o=>o.trim()).filter(o=>o&&o!=="↓").flatMap(o=>o.split(/\s*→\s*/)).map(o=>o.replace(/^↓\s*/,"").trim()).filter(Boolean);return s.length<3||s.length>14?"":`
    <figure class="concept-visual flow-visual">
      <figcaption>流程关系图</figcaption>
      <div class="flow-chain">
        ${s.map((o,r)=>`
          <div class="flow-node">${ct(o)}</div>
          ${r<s.length-1?"<span>→</span>":""}
        `).join("")}
      </div>
    </figure>
  `}const Bh="comp30023-interactive-revision";function L1(){try{return JSON.parse(localStorage.getItem(Bh))||{}}catch{return{}}}function B1(u){localStorage.setItem(Bh,JSON.stringify(u))}function z1(u,s,o){return{...u,[s]:{...u[s]||{},...o,updatedAt:Date.now()}}}const j1=[{id:"read",label:"阅读",icon:xm},{id:"lab",label:"实验",icon:Ch},{id:"quiz",label:"题卡",icon:bh},{id:"map",label:"地图",icon:wm},{id:"plan",label:"规划",icon:Hm}];function W1(){const[u,s]=Y.useState(We[0].id),[o,r]=Y.useState(""),[f,g]=Y.useState("read"),[p,x]=Y.useState(()=>L1()),m=We.find(Q=>Q.id===u)||We[0],T=p[m.id]||{},R=Y.useMemo(()=>C1(m.md),[m]),U=Y.useMemo(()=>b1(m.md),[m]),B=Y.useMemo(()=>{const Q=o.trim().toLowerCase();return Q?We.map(Pn=>({chapter:Pn,text:`${Pn.title} ${Pn.filename} ${Oh(Pn.md)}`.toLowerCase()})).filter(Pn=>Pn.text.includes(Q)).slice(0,12):[]},[o]),nn=We.filter(Q=>p[Q.id]?.done).length,G=Math.round(nn/We.length*100);Y.useEffect(()=>{B1(p)},[p]);function rn(Q){x(Pn=>z1(Pn,m.id,Q))}function On(Q,Pn=f){s(Q),g(Pn),requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"smooth"}))}return d.jsxs("div",{className:"app-shell",children:[d.jsxs("aside",{className:"sidebar",children:[d.jsxs("div",{className:"brand",children:[d.jsx("span",{children:"COMP30023"}),d.jsx("strong",{children:"Interactive Revision"})]}),d.jsxs("label",{className:"search-box",children:[d.jsx(Lm,{size:16}),d.jsx("input",{value:o,onChange:Q=>r(Q.target.value),placeholder:"搜索知识点"})]}),o.trim()?d.jsx(I1,{results:B,query:o,onPick:Q=>{r(""),On(Q,"read")}}):d.jsx(_1,{selectedId:m.id,onPick:Q=>On(Q,"read"),progress:p})]}),d.jsxs("main",{className:"workspace",children:[d.jsxs("header",{className:"topbar",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"eyebrow",children:[m.week," · ",m.group]}),d.jsx("h1",{children:m.title}),d.jsx("span",{className:"filename",children:m.filename})]}),d.jsxs("div",{className:"progress-pill",children:[d.jsx(Ku,{size:18}),d.jsxs("strong",{children:[G,"%"]}),d.jsxs("span",{children:[nn,"/",We.length]})]})]}),d.jsx("div",{className:"tabbar",role:"tablist","aria-label":"Study mode",children:j1.map(Q=>{const Pn=Q.icon;return d.jsxs("button",{className:f===Q.id?"active":"",onClick:()=>g(Q.id),children:[d.jsx(Pn,{size:17}),Q.label]},Q.id)})}),f==="read"&&d.jsx("article",{className:"markdown-panel",dangerouslySetInnerHTML:{__html:R}}),f==="lab"&&d.jsx(uS,{chapter:m}),f==="quiz"&&d.jsx(q1,{chapterId:m.id,questions:cS[m.id]||[],bestScore:T.bestScore,onScore:Q=>rn({bestScore:Q})}),f==="map"&&d.jsx(Y1,{onPick:Q=>On(Q,"read"),activeId:m.id}),f==="plan"&&d.jsx(G1,{onPick:Q=>On(Q,"lab")})]}),d.jsxs("aside",{className:"inspector",children:[d.jsx(K1,{chapter:m,progress:T,onPatch:rn,onOpenLab:()=>g("lab"),onOpenQuiz:()=>g("quiz")}),d.jsx(Q1,{headings:U})]})]})}function _1({selectedId:u,onPick:s,progress:o}){const r=We.reduce((f,g)=>(f[g.group]=f[g.group]||[],f[g.group].push(g),f),{});return d.jsx("nav",{className:"chapter-nav",children:Object.entries(r).map(([f,g])=>d.jsxs("section",{children:[d.jsx("h2",{children:f}),g.map(p=>d.jsxs("button",{className:p.id===u?"active":"",onClick:()=>s(p.id),children:[d.jsx("span",{children:p.week}),d.jsx("strong",{children:p.title}),o[p.id]?.done&&d.jsx(Ku,{size:15})]},p.id))]},f))})}function I1({results:u,query:s,onPick:o}){return d.jsxs("div",{className:"search-results",children:[d.jsxs("p",{children:[u.length," 个结果"]}),u.map(({chapter:r})=>d.jsxs("button",{onClick:()=>o(r.id),children:[d.jsxs("strong",{children:[r.week," · ",r.title]}),d.jsx("span",{children:P1(r.md,s,110)})]},r.id))]})}function K1({chapter:u,progress:s,onPatch:o,onOpenLab:r,onOpenQuiz:f}){const g=Ph[u.id];return d.jsxs("section",{className:"side-card hero-card",children:[d.jsx("img",{src:u.image,alt:""}),d.jsxs("div",{className:"side-actions",children:[d.jsx("button",{className:s.done?"active":"",onClick:()=>o({done:!s.done}),title:"完成",children:d.jsx(Ku,{size:18})}),d.jsx("button",{className:s.star?"active":"",onClick:()=>o({star:!s.star}),title:"收藏",children:d.jsx(Dm,{size:18})}),d.jsx("button",{className:s.weak?"active warn":"",onClick:()=>o({weak:!s.weak}),title:"不熟",children:d.jsx(Wm,{size:18})})]}),d.jsxs("h3",{children:[u.week," · ",u.title]}),d.jsx("p",{children:g.goal}),d.jsx("div",{className:"focus-list",children:u.focus.map(p=>d.jsx("span",{children:p},p))}),d.jsxs("div",{className:"mini-buttons",children:[d.jsxs("button",{onClick:r,children:[d.jsx(Ch,{size:16}),"实验"]}),d.jsxs("button",{onClick:f,children:[d.jsx(bh,{size:16}),"题卡"]})]}),typeof s.bestScore=="number"&&d.jsxs("div",{className:"score-note",children:[d.jsx(zm,{size:15})," best quiz ",s.bestScore,"%"]})]})}function Q1({headings:u}){const s=u.filter(o=>o.depth<=3).slice(0,24);return d.jsxs("section",{className:"side-card toc",children:[d.jsx("h3",{children:"目录"}),s.map(o=>d.jsx("button",{className:`depth-${o.depth}`,onClick:()=>document.getElementById(o.id)?.scrollIntoView({behavior:"smooth",block:"start"}),children:o.title},`${o.id}-${o.title}`))]})}function q1({chapterId:u,questions:s,bestScore:o,onScore:r}){const[f,g]=Y.useState({});Y.useEffect(()=>g({}),[u]);const p=Object.keys(f).length,x=s.filter((T,R)=>f[R]===T.answer).length,m=s.length?Math.round(x/s.length*100):0;return Y.useEffect(()=>{p===s.length&&s.length&&m>(o||0)&&r(m)},[p,o,r,s.length,m]),d.jsxs("section",{className:"quiz-panel",children:[d.jsxs("div",{className:"lab-head",children:[d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Exam cards"}),d.jsx("h3",{children:"易错题卡"})]}),d.jsxs("div",{className:"step-count",children:[x,"/",s.length]})]}),d.jsx("div",{className:"quiz-list",children:s.map((T,R)=>d.jsxs("article",{className:"quiz-item",children:[d.jsxs("h4",{children:[R+1,". ",T.question]}),d.jsx("div",{className:"answer-grid",children:T.options.map((U,B)=>{const nn=f[R]===B,G=f[R]!==void 0,rn=T.answer===B;return d.jsx("button",{className:[nn?"picked":"",G&&rn?"correct":"",G&&nn&&!rn?"wrong":""].join(" "),onClick:()=>g(On=>({...On,[R]:B})),children:U},U)})}),f[R]!==void 0&&d.jsx("p",{children:T.explain})]},T.question))})]})}function Y1({activeId:u,onPick:s}){return d.jsxs("section",{className:"map-panel",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Knowledge graph"}),d.jsx("h3",{children:"知识点地图"})]})}),d.jsx("div",{className:"map-grid",children:sS.map(o=>d.jsxs("button",{className:o.chapter===u?"active":"",onClick:()=>s(o.chapter),children:[d.jsx("strong",{children:o.id}),d.jsx("span",{children:o.group})]},o.id))}),d.jsx("div",{className:"edge-list",children:iS.map(([o,r])=>d.jsxs("div",{children:[d.jsx("span",{children:o}),d.jsx("b",{children:"→"}),d.jsx("span",{children:r})]},`${o}-${r}`))})]})}function G1({onPick:u}){return d.jsxs("section",{className:"plan-board",children:[d.jsx("div",{className:"lab-head",children:d.jsxs("div",{children:[d.jsx("p",{className:"eyebrow",children:"Build plan"}),d.jsx("h3",{children:"每章互动规划"})]})}),d.jsx("div",{className:"plan-grid",children:We.map(s=>{const o=Ph[s.id];return d.jsxs("article",{children:[d.jsxs("div",{children:[d.jsx("span",{children:s.week}),d.jsx("h4",{children:s.title})]}),d.jsx("p",{children:o.goal}),d.jsx("strong",{children:o.lab}),d.jsx("ul",{children:o.exam.map(r=>d.jsx("li",{children:r},r))}),d.jsx("button",{onClick:()=>u(s.id),children:"打开实验"})]},s.id)})})]})}Tm.createRoot(document.getElementById("root")).render(d.jsx(fm.StrictMode,{children:d.jsx(W1,{})}));
