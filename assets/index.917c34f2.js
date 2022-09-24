const v5=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};v5();function Q0(c,n){const t=Object.create(null),e=c.split(",");for(let s=0;s<e.length;s++)t[e[s]]=!0;return n?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const b5="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",z5=Q0(b5);function u4(c){return!!c||c===""}function a0(c){if(O(c)){const n={};for(let t=0;t<c.length;t++){const e=c[t],s=l1(e)?w5(e):a0(e);if(s)for(const o in s)n[o]=s[o]}return n}else{if(l1(c))return c;if(n1(c))return c}}const y5=/;(?![^(]*\))/g,x5=/:(.+)/;function w5(c){const n={};return c.split(y5).forEach(t=>{if(t){const e=t.split(x5);e.length>1&&(n[e[0].trim()]=e[1].trim())}}),n}function b2(c){let n="";if(l1(c))n=c;else if(O(c))for(let t=0;t<c.length;t++){const e=b2(c[t]);e&&(n+=e+" ")}else if(n1(c))for(const t in c)c[t]&&(n+=t+" ");return n.trim()}const B0=c=>l1(c)?c:c==null?"":O(c)||n1(c)&&(c.toString===_4||!R(c.toString))?JSON.stringify(c,h4,2):String(c),h4=(c,n)=>n&&n.__v_isRef?h4(c,n.value):_2(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[e,s])=>(t[`${e} =>`]=s,t),{})}:d4(n)?{[`Set(${n.size})`]:[...n.values()]}:n1(n)&&!O(n)&&!C4(n)?String(n):n,Q={},p2=[],T1=()=>{},$5=()=>!1,T5=/^on[^a-z]/,f0=c=>T5.test(c),X0=c=>c.startsWith("onUpdate:"),p1=Object.assign,Z0=(c,n)=>{const t=c.indexOf(n);t>-1&&c.splice(t,1)},E5=Object.prototype.hasOwnProperty,U=(c,n)=>E5.call(c,n),O=Array.isArray,_2=c=>u0(c)==="[object Map]",d4=c=>u0(c)==="[object Set]",R=c=>typeof c=="function",l1=c=>typeof c=="string",c3=c=>typeof c=="symbol",n1=c=>c!==null&&typeof c=="object",p4=c=>n1(c)&&R(c.then)&&R(c.catch),_4=Object.prototype.toString,u0=c=>_4.call(c),S5=c=>u0(c).slice(8,-1),C4=c=>u0(c)==="[object Object]",n3=c=>l1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,G2=Q0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),h0=c=>{const n=Object.create(null);return t=>n[t]||(n[t]=c(t))},I5=/-(\w)/g,M2=h0(c=>c.replace(I5,(n,t)=>t?t.toUpperCase():"")),A5=/\B([A-Z])/g,z2=h0(c=>c.replace(A5,"-$1").toLowerCase()),M4=h0(c=>c.charAt(0).toUpperCase()+c.slice(1)),T0=h0(c=>c?`on${M4(c)}`:""),B2=(c,n)=>!Object.is(c,n),E0=(c,n)=>{for(let t=0;t<c.length;t++)c[t](n)},n0=(c,n,t)=>{Object.defineProperty(c,n,{configurable:!0,enumerable:!1,value:t})},g4=c=>{const n=parseFloat(c);return isNaN(n)?c:n};let E3;const O5=()=>E3||(E3=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let O1;class m4{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&O1&&(this.parent=O1,this.index=(O1.scopes||(O1.scopes=[])).push(this)-1)}run(n){if(this.active){const t=O1;try{return O1=this,n()}finally{O1=t}}}on(){O1=this}off(){O1=this.parent}stop(n){if(this.active){let t,e;for(t=0,e=this.effects.length;t<e;t++)this.effects[t].stop();for(t=0,e=this.cleanups.length;t<e;t++)this.cleanups[t]();if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function v4(c){return new m4(c)}function B5(c,n=O1){n&&n.active&&n.effects.push(c)}const t3=c=>{const n=new Set(c);return n.w=0,n.n=0,n},b4=c=>(c.w&Q1)>0,z4=c=>(c.n&Q1)>0,F5=({deps:c})=>{if(c.length)for(let n=0;n<c.length;n++)c[n].w|=Q1},L5=c=>{const{deps:n}=c;if(n.length){let t=0;for(let e=0;e<n.length;e++){const s=n[e];b4(s)&&!z4(s)?s.delete(c):n[t++]=s,s.w&=~Q1,s.n&=~Q1}n.length=t}},F0=new WeakMap;let E2=0,Q1=1;const L0=30;let w1;const i2=Symbol(""),k0=Symbol("");class e3{constructor(n,t=null,e){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,B5(this,e)}run(){if(!this.active)return this.fn();let n=w1,t=Y1;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=w1,w1=this,Y1=!0,Q1=1<<++E2,E2<=L0?F5(this):S3(this),this.fn()}finally{E2<=L0&&L5(this),Q1=1<<--E2,w1=this.parent,Y1=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w1===this?this.deferStop=!0:this.active&&(S3(this),this.onStop&&this.onStop(),this.active=!1)}}function S3(c){const{deps:n}=c;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(c);n.length=0}}let Y1=!0;const y4=[];function y2(){y4.push(Y1),Y1=!1}function x2(){const c=y4.pop();Y1=c===void 0?!0:c}function v1(c,n,t){if(Y1&&w1){let e=F0.get(c);e||F0.set(c,e=new Map);let s=e.get(t);s||e.set(t,s=t3()),x4(s)}}function x4(c,n){let t=!1;E2<=L0?z4(c)||(c.n|=Q1,t=!b4(c)):t=!c.has(w1),t&&(c.add(w1),w1.deps.push(c))}function j1(c,n,t,e,s,o){const r=F0.get(c);if(!r)return;let i=[];if(n==="clear")i=[...r.values()];else if(t==="length"&&O(c))r.forEach((a,u)=>{(u==="length"||u>=e)&&i.push(a)});else switch(t!==void 0&&i.push(r.get(t)),n){case"add":O(c)?n3(t)&&i.push(r.get("length")):(i.push(r.get(i2)),_2(c)&&i.push(r.get(k0)));break;case"delete":O(c)||(i.push(r.get(i2)),_2(c)&&i.push(r.get(k0)));break;case"set":_2(c)&&i.push(r.get(i2));break}if(i.length===1)i[0]&&P0(i[0]);else{const a=[];for(const u of i)u&&a.push(...u);P0(t3(a))}}function P0(c,n){const t=O(c)?c:[...c];for(const e of t)e.computed&&I3(e);for(const e of t)e.computed||I3(e)}function I3(c,n){(c!==w1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const k5=Q0("__proto__,__v_isRef,__isVue"),w4=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(c3)),P5=s3(),N5=s3(!1,!0),R5=s3(!0),A3=U5();function U5(){const c={};return["includes","indexOf","lastIndexOf"].forEach(n=>{c[n]=function(...t){const e=K(this);for(let o=0,r=this.length;o<r;o++)v1(e,"get",o+"");const s=e[n](...t);return s===-1||s===!1?e[n](...t.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(n=>{c[n]=function(...t){y2();const e=K(this)[n].apply(this,t);return x2(),e}}),c}function s3(c=!1,n=!1){return function(e,s,o){if(s==="__v_isReactive")return!c;if(s==="__v_isReadonly")return c;if(s==="__v_isShallow")return n;if(s==="__v_raw"&&o===(c?n?t6:I4:n?S4:E4).get(e))return e;const r=O(e);if(!c&&r&&U(A3,s))return Reflect.get(A3,s,o);const i=Reflect.get(e,s,o);return(c3(s)?w4.has(s):k5(s))||(c||v1(e,"get",s),n)?i:o1(i)?r&&n3(s)?i:i.value:n1(i)?c?A4(i):p0(i):i}}const j5=$4(),D5=$4(!0);function $4(c=!1){return function(t,e,s,o){let r=t[e];if(g2(r)&&o1(r)&&!o1(s))return!1;if(!c&&(!t0(s)&&!g2(s)&&(r=K(r),s=K(s)),!O(t)&&o1(r)&&!o1(s)))return r.value=s,!0;const i=O(t)&&n3(e)?Number(e)<t.length:U(t,e),a=Reflect.set(t,e,s,o);return t===K(o)&&(i?B2(s,r)&&j1(t,"set",e,s):j1(t,"add",e,s)),a}}function H5(c,n){const t=U(c,n);c[n];const e=Reflect.deleteProperty(c,n);return e&&t&&j1(c,"delete",n,void 0),e}function K5(c,n){const t=Reflect.has(c,n);return(!c3(n)||!w4.has(n))&&v1(c,"has",n),t}function V5(c){return v1(c,"iterate",O(c)?"length":i2),Reflect.ownKeys(c)}const T4={get:P5,set:j5,deleteProperty:H5,has:K5,ownKeys:V5},W5={get:R5,set(c,n){return!0},deleteProperty(c,n){return!0}},q5=p1({},T4,{get:N5,set:D5}),o3=c=>c,d0=c=>Reflect.getPrototypeOf(c);function D2(c,n,t=!1,e=!1){c=c.__v_raw;const s=K(c),o=K(n);t||(n!==o&&v1(s,"get",n),v1(s,"get",o));const{has:r}=d0(s),i=e?o3:t?l3:F2;if(r.call(s,n))return i(c.get(n));if(r.call(s,o))return i(c.get(o));c!==s&&c.get(n)}function H2(c,n=!1){const t=this.__v_raw,e=K(t),s=K(c);return n||(c!==s&&v1(e,"has",c),v1(e,"has",s)),c===s?t.has(c):t.has(c)||t.has(s)}function K2(c,n=!1){return c=c.__v_raw,!n&&v1(K(c),"iterate",i2),Reflect.get(c,"size",c)}function O3(c){c=K(c);const n=K(this);return d0(n).has.call(n,c)||(n.add(c),j1(n,"add",c,c)),this}function B3(c,n){n=K(n);const t=K(this),{has:e,get:s}=d0(t);let o=e.call(t,c);o||(c=K(c),o=e.call(t,c));const r=s.call(t,c);return t.set(c,n),o?B2(n,r)&&j1(t,"set",c,n):j1(t,"add",c,n),this}function F3(c){const n=K(this),{has:t,get:e}=d0(n);let s=t.call(n,c);s||(c=K(c),s=t.call(n,c)),e&&e.call(n,c);const o=n.delete(c);return s&&j1(n,"delete",c,void 0),o}function L3(){const c=K(this),n=c.size!==0,t=c.clear();return n&&j1(c,"clear",void 0,void 0),t}function V2(c,n){return function(e,s){const o=this,r=o.__v_raw,i=K(r),a=n?o3:c?l3:F2;return!c&&v1(i,"iterate",i2),r.forEach((u,d)=>e.call(s,a(u),a(d),o))}}function W2(c,n,t){return function(...e){const s=this.__v_raw,o=K(s),r=_2(o),i=c==="entries"||c===Symbol.iterator&&r,a=c==="keys"&&r,u=s[c](...e),d=t?o3:n?l3:F2;return!n&&v1(o,"iterate",a?k0:i2),{next(){const{value:C,done:M}=u.next();return M?{value:C,done:M}:{value:i?[d(C[0]),d(C[1])]:d(C),done:M}},[Symbol.iterator](){return this}}}}function K1(c){return function(...n){return c==="delete"?!1:this}}function Y5(){const c={get(o){return D2(this,o)},get size(){return K2(this)},has:H2,add:O3,set:B3,delete:F3,clear:L3,forEach:V2(!1,!1)},n={get(o){return D2(this,o,!1,!0)},get size(){return K2(this)},has:H2,add:O3,set:B3,delete:F3,clear:L3,forEach:V2(!1,!0)},t={get(o){return D2(this,o,!0)},get size(){return K2(this,!0)},has(o){return H2.call(this,o,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:V2(!0,!1)},e={get(o){return D2(this,o,!0,!0)},get size(){return K2(this,!0)},has(o){return H2.call(this,o,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:V2(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{c[o]=W2(o,!1,!1),t[o]=W2(o,!0,!1),n[o]=W2(o,!1,!0),e[o]=W2(o,!0,!0)}),[c,t,n,e]}const[G5,J5,Q5,X5]=Y5();function r3(c,n){const t=n?c?X5:Q5:c?J5:G5;return(e,s,o)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?e:Reflect.get(U(t,s)&&s in e?t:e,s,o)}const Z5={get:r3(!1,!1)},c6={get:r3(!1,!0)},n6={get:r3(!0,!1)},E4=new WeakMap,S4=new WeakMap,I4=new WeakMap,t6=new WeakMap;function e6(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function s6(c){return c.__v_skip||!Object.isExtensible(c)?0:e6(S5(c))}function p0(c){return g2(c)?c:i3(c,!1,T4,Z5,E4)}function o6(c){return i3(c,!1,q5,c6,S4)}function A4(c){return i3(c,!0,W5,n6,I4)}function i3(c,n,t,e,s){if(!n1(c)||c.__v_raw&&!(n&&c.__v_isReactive))return c;const o=s.get(c);if(o)return o;const r=s6(c);if(r===0)return c;const i=new Proxy(c,r===2?e:t);return s.set(c,i),i}function G1(c){return g2(c)?G1(c.__v_raw):!!(c&&c.__v_isReactive)}function g2(c){return!!(c&&c.__v_isReadonly)}function t0(c){return!!(c&&c.__v_isShallow)}function O4(c){return G1(c)||g2(c)}function K(c){const n=c&&c.__v_raw;return n?K(n):c}function m2(c){return n0(c,"__v_skip",!0),c}const F2=c=>n1(c)?p0(c):c,l3=c=>n1(c)?A4(c):c;function B4(c){Y1&&w1&&(c=K(c),x4(c.dep||(c.dep=t3())))}function F4(c,n){c=K(c),c.dep&&P0(c.dep)}function o1(c){return!!(c&&c.__v_isRef===!0)}function R2(c){return r6(c,!1)}function r6(c,n){return o1(c)?c:new i6(c,n)}class i6{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:K(n),this._value=t?n:F2(n)}get value(){return B4(this),this._value}set value(n){const t=this.__v_isShallow||t0(n)||g2(n);n=t?n:K(n),B2(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:F2(n),F4(this))}}function _(c){return o1(c)?c.value:c}const l6={get:(c,n,t)=>_(Reflect.get(c,n,t)),set:(c,n,t,e)=>{const s=c[n];return o1(s)&&!o1(t)?(s.value=t,!0):Reflect.set(c,n,t,e)}};function L4(c){return G1(c)?c:new Proxy(c,l6)}function a6(c){const n=O(c)?new Array(c.length):{};for(const t in c)n[t]=u6(c,t);return n}class f6{constructor(n,t,e){this._object=n,this._key=t,this._defaultValue=e,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function u6(c,n,t){const e=c[n];return o1(e)?e:new f6(c,n,t)}var k4;class h6{constructor(n,t,e,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[k4]=!1,this._dirty=!0,this.effect=new e3(n,()=>{this._dirty||(this._dirty=!0,F4(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=e}get value(){const n=K(this);return B4(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}k4="__v_isReadonly";function d6(c,n,t=!1){let e,s;const o=R(c);return o?(e=c,s=T1):(e=c.get,s=c.set),new h6(e,s,o||!s,t)}function J1(c,n,t,e){let s;try{s=e?c(...e):c()}catch(o){_0(o,n,t)}return s}function z1(c,n,t,e){if(R(c)){const o=J1(c,n,t,e);return o&&p4(o)&&o.catch(r=>{_0(r,n,t)}),o}const s=[];for(let o=0;o<c.length;o++)s.push(z1(c[o],n,t,e));return s}function _0(c,n,t,e=!0){const s=n?n.vnode:null;if(n){let o=n.parent;const r=n.proxy,i=t;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](c,r,i)===!1)return}o=o.parent}const a=n.appContext.config.errorHandler;if(a){J1(a,null,10,[c,r,i]);return}}p6(c,t,s,e)}function p6(c,n,t,e=!0){console.error(c)}let L2=!1,N0=!1;const _1=[];let F1=0;const C2=[];let P1=null,s2=0;const P4=Promise.resolve();let a3=null;function N4(c){const n=a3||P4;return c?n.then(this?c.bind(this):c):n}function _6(c){let n=F1+1,t=_1.length;for(;n<t;){const e=n+t>>>1;k2(_1[e])<c?n=e+1:t=e}return n}function f3(c){(!_1.length||!_1.includes(c,L2&&c.allowRecurse?F1+1:F1))&&(c.id==null?_1.push(c):_1.splice(_6(c.id),0,c),R4())}function R4(){!L2&&!N0&&(N0=!0,a3=P4.then(j4))}function C6(c){const n=_1.indexOf(c);n>F1&&_1.splice(n,1)}function M6(c){O(c)?C2.push(...c):(!P1||!P1.includes(c,c.allowRecurse?s2+1:s2))&&C2.push(c),R4()}function k3(c,n=L2?F1+1:0){for(;n<_1.length;n++){const t=_1[n];t&&t.pre&&(_1.splice(n,1),n--,t())}}function U4(c){if(C2.length){const n=[...new Set(C2)];if(C2.length=0,P1){P1.push(...n);return}for(P1=n,P1.sort((t,e)=>k2(t)-k2(e)),s2=0;s2<P1.length;s2++)P1[s2]();P1=null,s2=0}}const k2=c=>c.id==null?1/0:c.id,g6=(c,n)=>{const t=k2(c)-k2(n);if(t===0){if(c.pre&&!n.pre)return-1;if(n.pre&&!c.pre)return 1}return t};function j4(c){N0=!1,L2=!0,_1.sort(g6);const n=T1;try{for(F1=0;F1<_1.length;F1++){const t=_1[F1];t&&t.active!==!1&&J1(t,null,14)}}finally{F1=0,_1.length=0,U4(),L2=!1,a3=null,(_1.length||C2.length)&&j4()}}function m6(c,n,...t){if(c.isUnmounted)return;const e=c.vnode.props||Q;let s=t;const o=n.startsWith("update:"),r=o&&n.slice(7);if(r&&r in e){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:C,trim:M}=e[d]||Q;M&&(s=t.map($=>$.trim())),C&&(s=t.map(g4))}let i,a=e[i=T0(n)]||e[i=T0(M2(n))];!a&&o&&(a=e[i=T0(z2(n))]),a&&z1(a,c,6,s);const u=e[i+"Once"];if(u){if(!c.emitted)c.emitted={};else if(c.emitted[i])return;c.emitted[i]=!0,z1(u,c,6,s)}}function D4(c,n,t=!1){const e=n.emitsCache,s=e.get(c);if(s!==void 0)return s;const o=c.emits;let r={},i=!1;if(!R(c)){const a=u=>{const d=D4(u,n,!0);d&&(i=!0,p1(r,d))};!t&&n.mixins.length&&n.mixins.forEach(a),c.extends&&a(c.extends),c.mixins&&c.mixins.forEach(a)}return!o&&!i?(n1(c)&&e.set(c,null),null):(O(o)?o.forEach(a=>r[a]=null):p1(r,o),n1(c)&&e.set(c,r),r)}function C0(c,n){return!c||!f0(n)?!1:(n=n.slice(2).replace(/Once$/,""),U(c,n[0].toLowerCase()+n.slice(1))||U(c,z2(n))||U(c,n))}let g1=null,M0=null;function e0(c){const n=g1;return g1=c,M0=c&&c.type.__scopeId||null,n}function H4(c){M0=c}function K4(){M0=null}function s0(c,n=g1,t){if(!n||c._n)return c;const e=(...s)=>{e._d&&q3(-1);const o=e0(n),r=c(...s);return e0(o),e._d&&q3(1),r};return e._n=!0,e._c=!0,e._d=!0,e}function S0(c){const{type:n,vnode:t,proxy:e,withProxy:s,props:o,propsOptions:[r],slots:i,attrs:a,emit:u,render:d,renderCache:C,data:M,setupState:$,ctx:A,inheritAttrs:L}=c;let F,k;const r1=e0(c);try{if(t.shapeFlag&4){const W=s||e;F=B1(d.call(W,W,C,o,$,M,A)),k=a}else{const W=n;F=B1(W.length>1?W(o,{attrs:a,slots:i,emit:u}):W(o,null)),k=n.props?a:v6(a)}}catch(W){A2.length=0,_0(W,c,1),F=V(y1)}let J=F;if(k&&L!==!1){const W=Object.keys(k),{shapeFlag:H}=J;W.length&&H&7&&(r&&W.some(X0)&&(k=b6(k,r)),J=X1(J,k))}return t.dirs&&(J=X1(J),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&(J.transition=t.transition),F=J,e0(r1),F}const v6=c=>{let n;for(const t in c)(t==="class"||t==="style"||f0(t))&&((n||(n={}))[t]=c[t]);return n},b6=(c,n)=>{const t={};for(const e in c)(!X0(e)||!(e.slice(9)in n))&&(t[e]=c[e]);return t};function z6(c,n,t){const{props:e,children:s,component:o}=c,{props:r,children:i,patchFlag:a}=n,u=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return e?P3(e,r,u):!!r;if(a&8){const d=n.dynamicProps;for(let C=0;C<d.length;C++){const M=d[C];if(r[M]!==e[M]&&!C0(u,M))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:e===r?!1:e?r?P3(e,r,u):!0:!!r;return!1}function P3(c,n,t){const e=Object.keys(n);if(e.length!==Object.keys(c).length)return!0;for(let s=0;s<e.length;s++){const o=e[s];if(n[o]!==c[o]&&!C0(t,o))return!0}return!1}function y6({vnode:c,parent:n},t){for(;n&&n.subTree===c;)(c=n.vnode).el=t,n=n.parent}const x6=c=>c.__isSuspense;function w6(c,n){n&&n.pendingBranch?O(c)?n.effects.push(...c):n.effects.push(c):M6(c)}function $6(c,n){if(d1){let t=d1.provides;const e=d1.parent&&d1.parent.provides;e===t&&(t=d1.provides=Object.create(e)),t[c]=n}}function J2(c,n,t=!1){const e=d1||g1;if(e){const s=e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides;if(s&&c in s)return s[c];if(arguments.length>1)return t&&R(n)?n.call(e.proxy):n}}function o0(c,n){return u3(c,null,n)}const N3={};function Q2(c,n,t){return u3(c,n,t)}function u3(c,n,{immediate:t,deep:e,flush:s,onTrack:o,onTrigger:r}=Q){const i=d1;let a,u=!1,d=!1;if(o1(c)?(a=()=>c.value,u=t0(c)):G1(c)?(a=()=>c,e=!0):O(c)?(d=!0,u=c.some(k=>G1(k)||t0(k)),a=()=>c.map(k=>{if(o1(k))return k.value;if(G1(k))return d2(k);if(R(k))return J1(k,i,2)})):R(c)?n?a=()=>J1(c,i,2):a=()=>{if(!(i&&i.isUnmounted))return C&&C(),z1(c,i,3,[M])}:a=T1,n&&e){const k=a;a=()=>d2(k())}let C,M=k=>{C=F.onStop=()=>{J1(k,i,4)}};if(N2)return M=T1,n?t&&z1(n,i,3,[a(),d?[]:void 0,M]):a(),T1;let $=d?[]:N3;const A=()=>{if(!!F.active)if(n){const k=F.run();(e||u||(d?k.some((r1,J)=>B2(r1,$[J])):B2(k,$)))&&(C&&C(),z1(n,i,3,[k,$===N3?void 0:$,M]),$=k)}else F.run()};A.allowRecurse=!!n;let L;s==="sync"?L=A:s==="post"?L=()=>M1(A,i&&i.suspense):(A.pre=!0,i&&(A.id=i.uid),L=()=>f3(A));const F=new e3(a,L);return n?t?A():$=F.run():s==="post"?M1(F.run.bind(F),i&&i.suspense):F.run(),()=>{F.stop(),i&&i.scope&&Z0(i.scope.effects,F)}}function T6(c,n,t){const e=this.proxy,s=l1(c)?c.includes(".")?V4(e,c):()=>e[c]:c.bind(e,e);let o;R(n)?o=n:(o=n.handler,t=n);const r=d1;v2(this);const i=u3(s,o.bind(e),t);return r?v2(r):l2(),i}function V4(c,n){const t=n.split(".");return()=>{let e=c;for(let s=0;s<t.length&&e;s++)e=e[t[s]];return e}}function d2(c,n){if(!n1(c)||c.__v_skip||(n=n||new Set,n.has(c)))return c;if(n.add(c),o1(c))d2(c.value,n);else if(O(c))for(let t=0;t<c.length;t++)d2(c[t],n);else if(d4(c)||_2(c))c.forEach(t=>{d2(t,n)});else if(C4(c))for(const t in c)d2(c[t],n);return c}function E6(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return J4(()=>{c.isMounted=!0}),Q4(()=>{c.isUnmounting=!0}),c}const b1=[Function,Array],S6={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:b1,onEnter:b1,onAfterEnter:b1,onEnterCancelled:b1,onBeforeLeave:b1,onLeave:b1,onAfterLeave:b1,onLeaveCancelled:b1,onBeforeAppear:b1,onAppear:b1,onAfterAppear:b1,onAppearCancelled:b1},setup(c,{slots:n}){const t=g3(),e=E6();let s;return()=>{const o=n.default&&Y4(n.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const L of o)if(L.type!==y1){r=L;break}}const i=K(c),{mode:a}=i;if(e.isLeaving)return I0(r);const u=R3(r);if(!u)return I0(r);const d=R0(u,i,e,t);U0(u,d);const C=t.subTree,M=C&&R3(C);let $=!1;const{getTransitionKey:A}=u.type;if(A){const L=A();s===void 0?s=L:L!==s&&(s=L,$=!0)}if(M&&M.type!==y1&&(!o2(u,M)||$)){const L=R0(M,i,e,t);if(U0(M,L),a==="out-in")return e.isLeaving=!0,L.afterLeave=()=>{e.isLeaving=!1,t.update()},I0(r);a==="in-out"&&u.type!==y1&&(L.delayLeave=(F,k,r1)=>{const J=q4(e,M);J[String(M.key)]=M,F._leaveCb=()=>{k(),F._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=r1})}return r}}},W4=S6;function q4(c,n){const{leavingVNodes:t}=c;let e=t.get(n.type);return e||(e=Object.create(null),t.set(n.type,e)),e}function R0(c,n,t,e){const{appear:s,mode:o,persisted:r=!1,onBeforeEnter:i,onEnter:a,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:C,onLeave:M,onAfterLeave:$,onLeaveCancelled:A,onBeforeAppear:L,onAppear:F,onAfterAppear:k,onAppearCancelled:r1}=n,J=String(c.key),W=q4(t,c),H=(w,P)=>{w&&z1(w,e,9,P)},s1=(w,P)=>{const j=P[1];H(w,P),O(w)?w.every(q=>q.length<=1)&&j():w.length<=1&&j()},N={mode:o,persisted:r,beforeEnter(w){let P=i;if(!t.isMounted)if(s)P=L||i;else return;w._leaveCb&&w._leaveCb(!0);const j=W[J];j&&o2(c,j)&&j.el._leaveCb&&j.el._leaveCb(),H(P,[w])},enter(w){let P=a,j=u,q=d;if(!t.isMounted)if(s)P=F||a,j=k||u,q=r1||d;else return;let E=!1;const X=w._enterCb=a1=>{E||(E=!0,a1?H(q,[w]):H(j,[w]),N.delayedLeave&&N.delayedLeave(),w._enterCb=void 0)};P?s1(P,[w,X]):X()},leave(w,P){const j=String(c.key);if(w._enterCb&&w._enterCb(!0),t.isUnmounting)return P();H(C,[w]);let q=!1;const E=w._leaveCb=X=>{q||(q=!0,P(),X?H(A,[w]):H($,[w]),w._leaveCb=void 0,W[j]===c&&delete W[j])};W[j]=c,M?s1(M,[w,E]):E()},clone(w){return R0(w,n,t,e)}};return N}function I0(c){if(g0(c))return c=X1(c),c.children=null,c}function R3(c){return g0(c)?c.children?c.children[0]:void 0:c}function U0(c,n){c.shapeFlag&6&&c.component?U0(c.component.subTree,n):c.shapeFlag&128?(c.ssContent.transition=n.clone(c.ssContent),c.ssFallback.transition=n.clone(c.ssFallback)):c.transition=n}function Y4(c,n=!1,t){let e=[],s=0;for(let o=0;o<c.length;o++){let r=c[o];const i=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===h1?(r.patchFlag&128&&s++,e=e.concat(Y4(r.children,n,i))):(n||r.type!==y1)&&e.push(i!=null?X1(r,{key:i}):r)}if(s>1)for(let o=0;o<e.length;o++)e[o].patchFlag=-2;return e}const S2=c=>!!c.type.__asyncLoader,g0=c=>c.type.__isKeepAlive;function I6(c,n){G4(c,"a",n)}function A6(c,n){G4(c,"da",n)}function G4(c,n,t=d1){const e=c.__wdc||(c.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(m0(n,e,t),t){let s=t.parent;for(;s&&s.parent;)g0(s.parent.vnode)&&O6(e,n,t,s),s=s.parent}}function O6(c,n,t,e){const s=m0(n,c,e,!0);h3(()=>{Z0(e[n],s)},t)}function m0(c,n,t=d1,e=!1){if(t){const s=t[c]||(t[c]=[]),o=n.__weh||(n.__weh=(...r)=>{if(t.isUnmounted)return;y2(),v2(t);const i=z1(n,t,c,r);return l2(),x2(),i});return e?s.unshift(o):s.push(o),o}}const D1=c=>(n,t=d1)=>(!N2||c==="sp")&&m0(c,n,t),B6=D1("bm"),J4=D1("m"),F6=D1("bu"),L6=D1("u"),Q4=D1("bum"),h3=D1("um"),k6=D1("sp"),P6=D1("rtg"),N6=D1("rtc");function R6(c,n=d1){m0("ec",c,n)}function Z1(c,n,t,e){const s=c.dirs,o=n&&n.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let a=i.dir[e];a&&(y2(),z1(a,t,8,[c.el,i,c,n]),x2())}}const U6=Symbol();function X4(c,n,t,e){let s;const o=t&&t[e];if(O(c)||l1(c)){s=new Array(c.length);for(let r=0,i=c.length;r<i;r++)s[r]=n(c[r],r,void 0,o&&o[r])}else if(typeof c=="number"){s=new Array(c);for(let r=0;r<c;r++)s[r]=n(r+1,r,void 0,o&&o[r])}else if(n1(c))if(c[Symbol.iterator])s=Array.from(c,(r,i)=>n(r,i,void 0,o&&o[i]));else{const r=Object.keys(c);s=new Array(r.length);for(let i=0,a=r.length;i<a;i++){const u=r[i];s[i]=n(c[u],u,i,o&&o[i])}}else s=[];return t&&(t[e]=s),s}function X2(c,n,t={},e,s){if(g1.isCE||g1.parent&&S2(g1.parent)&&g1.parent.isCE)return V("slot",n==="default"?null:{name:n},e&&e());let o=c[n];o&&o._c&&(o._d=!1),t1();const r=o&&Z4(o(t)),i=U2(h1,{key:t.key||r&&r.key||`_${n}`},r||(e?e():[]),r&&c._===1?64:-2);return!s&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function Z4(c){return c.some(n=>l0(n)?!(n.type===y1||n.type===h1&&!Z4(n.children)):!0)?c:null}const j0=c=>c?a5(c)?m3(c)||c.proxy:j0(c.parent):null,r0=p1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>j0(c.parent),$root:c=>j0(c.root),$emit:c=>c.emit,$options:c=>d3(c),$forceUpdate:c=>c.f||(c.f=()=>f3(c.update)),$nextTick:c=>c.n||(c.n=N4.bind(c.proxy)),$watch:c=>T6.bind(c)}),j6={get({_:c},n){const{ctx:t,setupState:e,data:s,props:o,accessCache:r,type:i,appContext:a}=c;let u;if(n[0]!=="$"){const $=r[n];if($!==void 0)switch($){case 1:return e[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(e!==Q&&U(e,n))return r[n]=1,e[n];if(s!==Q&&U(s,n))return r[n]=2,s[n];if((u=c.propsOptions[0])&&U(u,n))return r[n]=3,o[n];if(t!==Q&&U(t,n))return r[n]=4,t[n];D0&&(r[n]=0)}}const d=r0[n];let C,M;if(d)return n==="$attrs"&&v1(c,"get",n),d(c);if((C=i.__cssModules)&&(C=C[n]))return C;if(t!==Q&&U(t,n))return r[n]=4,t[n];if(M=a.config.globalProperties,U(M,n))return M[n]},set({_:c},n,t){const{data:e,setupState:s,ctx:o}=c;return s!==Q&&U(s,n)?(s[n]=t,!0):e!==Q&&U(e,n)?(e[n]=t,!0):U(c.props,n)||n[0]==="$"&&n.slice(1)in c?!1:(o[n]=t,!0)},has({_:{data:c,setupState:n,accessCache:t,ctx:e,appContext:s,propsOptions:o}},r){let i;return!!t[r]||c!==Q&&U(c,r)||n!==Q&&U(n,r)||(i=o[0])&&U(i,r)||U(e,r)||U(r0,r)||U(s.config.globalProperties,r)},defineProperty(c,n,t){return t.get!=null?c._.accessCache[n]=0:U(t,"value")&&this.set(c,n,t.value,null),Reflect.defineProperty(c,n,t)}};let D0=!0;function D6(c){const n=d3(c),t=c.proxy,e=c.ctx;D0=!1,n.beforeCreate&&U3(n.beforeCreate,c,"bc");const{data:s,computed:o,methods:r,watch:i,provide:a,inject:u,created:d,beforeMount:C,mounted:M,beforeUpdate:$,updated:A,activated:L,deactivated:F,beforeDestroy:k,beforeUnmount:r1,destroyed:J,unmounted:W,render:H,renderTracked:s1,renderTriggered:N,errorCaptured:w,serverPrefetch:P,expose:j,inheritAttrs:q,components:E,directives:X,filters:a1}=n;if(u&&H6(u,e,null,c.appContext.config.unwrapInjectedRef),r)for(const e1 in r){const Z=r[e1];R(Z)&&(e[e1]=Z.bind(t))}if(s){const e1=s.call(t,t);n1(e1)&&(c.data=p0(e1))}if(D0=!0,o)for(const e1 in o){const Z=o[e1],L1=R(Z)?Z.bind(t,t):R(Z.get)?Z.get.bind(t,t):T1,x0=!R(Z)&&R(Z.set)?Z.set.bind(t):T1,w2=v3({get:L1,set:x0});Object.defineProperty(e,e1,{enumerable:!0,configurable:!0,get:()=>w2.value,set:a2=>w2.value=a2})}if(i)for(const e1 in i)c5(i[e1],e,t,e1);if(a){const e1=R(a)?a.call(t):a;Reflect.ownKeys(e1).forEach(Z=>{$6(Z,e1[Z])})}d&&U3(d,c,"c");function u1(e1,Z){O(Z)?Z.forEach(L1=>e1(L1.bind(t))):Z&&e1(Z.bind(t))}if(u1(B6,C),u1(J4,M),u1(F6,$),u1(L6,A),u1(I6,L),u1(A6,F),u1(R6,w),u1(N6,s1),u1(P6,N),u1(Q4,r1),u1(h3,W),u1(k6,P),O(j))if(j.length){const e1=c.exposed||(c.exposed={});j.forEach(Z=>{Object.defineProperty(e1,Z,{get:()=>t[Z],set:L1=>t[Z]=L1})})}else c.exposed||(c.exposed={});H&&c.render===T1&&(c.render=H),q!=null&&(c.inheritAttrs=q),E&&(c.components=E),X&&(c.directives=X)}function H6(c,n,t=T1,e=!1){O(c)&&(c=H0(c));for(const s in c){const o=c[s];let r;n1(o)?"default"in o?r=J2(o.from||s,o.default,!0):r=J2(o.from||s):r=J2(o),o1(r)&&e?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):n[s]=r}}function U3(c,n,t){z1(O(c)?c.map(e=>e.bind(n.proxy)):c.bind(n.proxy),n,t)}function c5(c,n,t,e){const s=e.includes(".")?V4(t,e):()=>t[e];if(l1(c)){const o=n[c];R(o)&&Q2(s,o)}else if(R(c))Q2(s,c.bind(t));else if(n1(c))if(O(c))c.forEach(o=>c5(o,n,t,e));else{const o=R(c.handler)?c.handler.bind(t):n[c.handler];R(o)&&Q2(s,o,c)}}function d3(c){const n=c.type,{mixins:t,extends:e}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=c.appContext,i=o.get(n);let a;return i?a=i:!s.length&&!t&&!e?a=n:(a={},s.length&&s.forEach(u=>i0(a,u,r,!0)),i0(a,n,r)),n1(n)&&o.set(n,a),a}function i0(c,n,t,e=!1){const{mixins:s,extends:o}=n;o&&i0(c,o,t,!0),s&&s.forEach(r=>i0(c,r,t,!0));for(const r in n)if(!(e&&r==="expose")){const i=K6[r]||t&&t[r];c[r]=i?i(c[r],n[r]):n[r]}return c}const K6={data:j3,props:e2,emits:e2,methods:e2,computed:e2,beforeCreate:C1,created:C1,beforeMount:C1,mounted:C1,beforeUpdate:C1,updated:C1,beforeDestroy:C1,beforeUnmount:C1,destroyed:C1,unmounted:C1,activated:C1,deactivated:C1,errorCaptured:C1,serverPrefetch:C1,components:e2,directives:e2,watch:W6,provide:j3,inject:V6};function j3(c,n){return n?c?function(){return p1(R(c)?c.call(this,this):c,R(n)?n.call(this,this):n)}:n:c}function V6(c,n){return e2(H0(c),H0(n))}function H0(c){if(O(c)){const n={};for(let t=0;t<c.length;t++)n[c[t]]=c[t];return n}return c}function C1(c,n){return c?[...new Set([].concat(c,n))]:n}function e2(c,n){return c?p1(p1(Object.create(null),c),n):n}function W6(c,n){if(!c)return n;if(!n)return c;const t=p1(Object.create(null),c);for(const e in n)t[e]=C1(c[e],n[e]);return t}function q6(c,n,t,e=!1){const s={},o={};n0(o,v0,1),c.propsDefaults=Object.create(null),n5(c,n,s,o);for(const r in c.propsOptions[0])r in s||(s[r]=void 0);t?c.props=e?s:o6(s):c.type.props?c.props=s:c.props=o,c.attrs=o}function Y6(c,n,t,e){const{props:s,attrs:o,vnode:{patchFlag:r}}=c,i=K(s),[a]=c.propsOptions;let u=!1;if((e||r>0)&&!(r&16)){if(r&8){const d=c.vnode.dynamicProps;for(let C=0;C<d.length;C++){let M=d[C];if(C0(c.emitsOptions,M))continue;const $=n[M];if(a)if(U(o,M))$!==o[M]&&(o[M]=$,u=!0);else{const A=M2(M);s[A]=K0(a,i,A,$,c,!1)}else $!==o[M]&&(o[M]=$,u=!0)}}}else{n5(c,n,s,o)&&(u=!0);let d;for(const C in i)(!n||!U(n,C)&&((d=z2(C))===C||!U(n,d)))&&(a?t&&(t[C]!==void 0||t[d]!==void 0)&&(s[C]=K0(a,i,C,void 0,c,!0)):delete s[C]);if(o!==i)for(const C in o)(!n||!U(n,C)&&!0)&&(delete o[C],u=!0)}u&&j1(c,"set","$attrs")}function n5(c,n,t,e){const[s,o]=c.propsOptions;let r=!1,i;if(n)for(let a in n){if(G2(a))continue;const u=n[a];let d;s&&U(s,d=M2(a))?!o||!o.includes(d)?t[d]=u:(i||(i={}))[d]=u:C0(c.emitsOptions,a)||(!(a in e)||u!==e[a])&&(e[a]=u,r=!0)}if(o){const a=K(t),u=i||Q;for(let d=0;d<o.length;d++){const C=o[d];t[C]=K0(s,a,C,u[C],c,!U(u,C))}}return r}function K0(c,n,t,e,s,o){const r=c[t];if(r!=null){const i=U(r,"default");if(i&&e===void 0){const a=r.default;if(r.type!==Function&&R(a)){const{propsDefaults:u}=s;t in u?e=u[t]:(v2(s),e=u[t]=a.call(null,n),l2())}else e=a}r[0]&&(o&&!i?e=!1:r[1]&&(e===""||e===z2(t))&&(e=!0))}return e}function t5(c,n,t=!1){const e=n.propsCache,s=e.get(c);if(s)return s;const o=c.props,r={},i=[];let a=!1;if(!R(c)){const d=C=>{a=!0;const[M,$]=t5(C,n,!0);p1(r,M),$&&i.push(...$)};!t&&n.mixins.length&&n.mixins.forEach(d),c.extends&&d(c.extends),c.mixins&&c.mixins.forEach(d)}if(!o&&!a)return n1(c)&&e.set(c,p2),p2;if(O(o))for(let d=0;d<o.length;d++){const C=M2(o[d]);D3(C)&&(r[C]=Q)}else if(o)for(const d in o){const C=M2(d);if(D3(C)){const M=o[d],$=r[C]=O(M)||R(M)?{type:M}:M;if($){const A=V3(Boolean,$.type),L=V3(String,$.type);$[0]=A>-1,$[1]=L<0||A<L,(A>-1||U($,"default"))&&i.push(C)}}}const u=[r,i];return n1(c)&&e.set(c,u),u}function D3(c){return c[0]!=="$"}function H3(c){const n=c&&c.toString().match(/^\s*function (\w+)/);return n?n[1]:c===null?"null":""}function K3(c,n){return H3(c)===H3(n)}function V3(c,n){return O(n)?n.findIndex(t=>K3(t,c)):R(n)&&K3(n,c)?0:-1}const e5=c=>c[0]==="_"||c==="$stable",p3=c=>O(c)?c.map(B1):[B1(c)],G6=(c,n,t)=>{if(n._n)return n;const e=s0((...s)=>p3(n(...s)),t);return e._c=!1,e},s5=(c,n,t)=>{const e=c._ctx;for(const s in c){if(e5(s))continue;const o=c[s];if(R(o))n[s]=G6(s,o,e);else if(o!=null){const r=p3(o);n[s]=()=>r}}},o5=(c,n)=>{const t=p3(n);c.slots.default=()=>t},J6=(c,n)=>{if(c.vnode.shapeFlag&32){const t=n._;t?(c.slots=K(n),n0(n,"_",t)):s5(n,c.slots={})}else c.slots={},n&&o5(c,n);n0(c.slots,v0,1)},Q6=(c,n,t)=>{const{vnode:e,slots:s}=c;let o=!0,r=Q;if(e.shapeFlag&32){const i=n._;i?t&&i===1?o=!1:(p1(s,n),!t&&i===1&&delete s._):(o=!n.$stable,s5(n,s)),r=n}else n&&(o5(c,n),r={default:1});if(o)for(const i in s)!e5(i)&&!(i in r)&&delete s[i]};function r5(){return{app:null,config:{isNativeTag:$5,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X6=0;function Z6(c,n){return function(e,s=null){R(e)||(e=Object.assign({},e)),s!=null&&!n1(s)&&(s=null);const o=r5(),r=new Set;let i=!1;const a=o.app={_uid:X6++,_component:e,_props:s,_container:null,_context:o,_instance:null,version:b7,get config(){return o.config},set config(u){},use(u,...d){return r.has(u)||(u&&R(u.install)?(r.add(u),u.install(a,...d)):R(u)&&(r.add(u),u(a,...d))),a},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),a},component(u,d){return d?(o.components[u]=d,a):o.components[u]},directive(u,d){return d?(o.directives[u]=d,a):o.directives[u]},mount(u,d,C){if(!i){const M=V(e,s);return M.appContext=o,d&&n?n(M,u):c(M,u,C),i=!0,a._container=u,u.__vue_app__=a,m3(M.component)||M.component.proxy}},unmount(){i&&(c(null,a._container),delete a._container.__vue_app__)},provide(u,d){return o.provides[u]=d,a}};return a}}function V0(c,n,t,e,s=!1){if(O(c)){c.forEach((M,$)=>V0(M,n&&(O(n)?n[$]:n),t,e,s));return}if(S2(e)&&!s)return;const o=e.shapeFlag&4?m3(e.component)||e.component.proxy:e.el,r=s?null:o,{i,r:a}=c,u=n&&n.r,d=i.refs===Q?i.refs={}:i.refs,C=i.setupState;if(u!=null&&u!==a&&(l1(u)?(d[u]=null,U(C,u)&&(C[u]=null)):o1(u)&&(u.value=null)),R(a))J1(a,i,12,[r,d]);else{const M=l1(a),$=o1(a);if(M||$){const A=()=>{if(c.f){const L=M?d[a]:a.value;s?O(L)&&Z0(L,o):O(L)?L.includes(o)||L.push(o):M?(d[a]=[o],U(C,a)&&(C[a]=d[a])):(a.value=[o],c.k&&(d[c.k]=a.value))}else M?(d[a]=r,U(C,a)&&(C[a]=r)):$&&(a.value=r,c.k&&(d[c.k]=r))};r?(A.id=-1,M1(A,t)):A()}}}const M1=w6;function c7(c){return n7(c)}function n7(c,n){const t=O5();t.__VUE__=!0;const{insert:e,remove:s,patchProp:o,createElement:r,createText:i,createComment:a,setText:u,setElementText:d,parentNode:C,nextSibling:M,setScopeId:$=T1,cloneNode:A,insertStaticContent:L}=c,F=(l,f,p,m=null,g=null,z=null,x=!1,b=null,y=!!f.dynamicChildren)=>{if(l===f)return;l&&!o2(l,f)&&(m=j2(l),H1(l,g,z,!0),l=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:v,ref:S,shapeFlag:T}=f;switch(v){case C3:k(l,f,p,m);break;case y1:r1(l,f,p,m);break;case Z2:l==null&&J(f,p,m,x);break;case h1:X(l,f,p,m,g,z,x,b,y);break;default:T&1?s1(l,f,p,m,g,z,x,b,y):T&6?a1(l,f,p,m,g,z,x,b,y):(T&64||T&128)&&v.process(l,f,p,m,g,z,x,b,y,f2)}S!=null&&g&&V0(S,l&&l.ref,z,f||l,!f)},k=(l,f,p,m)=>{if(l==null)e(f.el=i(f.children),p,m);else{const g=f.el=l.el;f.children!==l.children&&u(g,f.children)}},r1=(l,f,p,m)=>{l==null?e(f.el=a(f.children||""),p,m):f.el=l.el},J=(l,f,p,m)=>{[l.el,l.anchor]=L(l.children,f,p,m,l.el,l.anchor)},W=({el:l,anchor:f},p,m)=>{let g;for(;l&&l!==f;)g=M(l),e(l,p,m),l=g;e(f,p,m)},H=({el:l,anchor:f})=>{let p;for(;l&&l!==f;)p=M(l),s(l),l=p;s(f)},s1=(l,f,p,m,g,z,x,b,y)=>{x=x||f.type==="svg",l==null?N(f,p,m,g,z,x,b,y):j(l,f,g,z,x,b,y)},N=(l,f,p,m,g,z,x,b)=>{let y,v;const{type:S,props:T,shapeFlag:I,transition:B,patchFlag:D,dirs:Y}=l;if(l.el&&A!==void 0&&D===-1)y=l.el=A(l.el);else{if(y=l.el=r(l.type,z,T&&T.is,T),I&8?d(y,l.children):I&16&&P(l.children,y,null,m,g,z&&S!=="foreignObject",x,b),Y&&Z1(l,null,m,"created"),T){for(const c1 in T)c1!=="value"&&!G2(c1)&&o(y,c1,null,T[c1],z,l.children,m,g,k1);"value"in T&&o(y,"value",null,T.value),(v=T.onVnodeBeforeMount)&&A1(v,m,l)}w(y,l,l.scopeId,x,m)}Y&&Z1(l,null,m,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&B&&!B.persisted;G&&B.beforeEnter(y),e(y,f,p),((v=T&&T.onVnodeMounted)||G||Y)&&M1(()=>{v&&A1(v,m,l),G&&B.enter(y),Y&&Z1(l,null,m,"mounted")},g)},w=(l,f,p,m,g)=>{if(p&&$(l,p),m)for(let z=0;z<m.length;z++)$(l,m[z]);if(g){let z=g.subTree;if(f===z){const x=g.vnode;w(l,x,x.scopeId,x.slotScopeIds,g.parent)}}},P=(l,f,p,m,g,z,x,b,y=0)=>{for(let v=y;v<l.length;v++){const S=l[v]=b?q1(l[v]):B1(l[v]);F(null,S,f,p,m,g,z,x,b)}},j=(l,f,p,m,g,z,x)=>{const b=f.el=l.el;let{patchFlag:y,dynamicChildren:v,dirs:S}=f;y|=l.patchFlag&16;const T=l.props||Q,I=f.props||Q;let B;p&&c2(p,!1),(B=I.onVnodeBeforeUpdate)&&A1(B,p,f,l),S&&Z1(f,l,p,"beforeUpdate"),p&&c2(p,!0);const D=g&&f.type!=="foreignObject";if(v?q(l.dynamicChildren,v,b,p,m,D,z):x||L1(l,f,b,null,p,m,D,z,!1),y>0){if(y&16)E(b,f,T,I,p,m,g);else if(y&2&&T.class!==I.class&&o(b,"class",null,I.class,g),y&4&&o(b,"style",T.style,I.style,g),y&8){const Y=f.dynamicProps;for(let G=0;G<Y.length;G++){const c1=Y[G],x1=T[c1],u2=I[c1];(u2!==x1||c1==="value")&&o(b,c1,x1,u2,g,l.children,p,m,k1)}}y&1&&l.children!==f.children&&d(b,f.children)}else!x&&v==null&&E(b,f,T,I,p,m,g);((B=I.onVnodeUpdated)||S)&&M1(()=>{B&&A1(B,p,f,l),S&&Z1(f,l,p,"updated")},m)},q=(l,f,p,m,g,z,x)=>{for(let b=0;b<f.length;b++){const y=l[b],v=f[b],S=y.el&&(y.type===h1||!o2(y,v)||y.shapeFlag&70)?C(y.el):p;F(y,v,S,null,m,g,z,x,!0)}},E=(l,f,p,m,g,z,x)=>{if(p!==m){for(const b in m){if(G2(b))continue;const y=m[b],v=p[b];y!==v&&b!=="value"&&o(l,b,v,y,x,f.children,g,z,k1)}if(p!==Q)for(const b in p)!G2(b)&&!(b in m)&&o(l,b,p[b],null,x,f.children,g,z,k1);"value"in m&&o(l,"value",p.value,m.value)}},X=(l,f,p,m,g,z,x,b,y)=>{const v=f.el=l?l.el:i(""),S=f.anchor=l?l.anchor:i("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:B}=f;B&&(b=b?b.concat(B):B),l==null?(e(v,p,m),e(S,p,m),P(f.children,p,S,g,z,x,b,y)):T>0&&T&64&&I&&l.dynamicChildren?(q(l.dynamicChildren,I,p,g,z,x,b),(f.key!=null||g&&f===g.subTree)&&_3(l,f,!0)):L1(l,f,p,S,g,z,x,b,y)},a1=(l,f,p,m,g,z,x,b,y)=>{f.slotScopeIds=b,l==null?f.shapeFlag&512?g.ctx.activate(f,p,m,x,y):i1(f,p,m,g,z,x,y):u1(l,f,y)},i1=(l,f,p,m,g,z,x)=>{const b=l.component=p7(l,m,g);if(g0(l)&&(b.ctx.renderer=f2),_7(b),b.asyncDep){if(g&&g.registerDep(b,e1),!l.el){const y=b.subTree=V(y1);r1(null,y,f,p)}return}e1(b,l,f,p,g,z,x)},u1=(l,f,p)=>{const m=f.component=l.component;if(z6(l,f,p))if(m.asyncDep&&!m.asyncResolved){Z(m,f,p);return}else m.next=f,C6(m.update),m.update();else f.el=l.el,m.vnode=f},e1=(l,f,p,m,g,z,x)=>{const b=()=>{if(l.isMounted){let{next:S,bu:T,u:I,parent:B,vnode:D}=l,Y=S,G;c2(l,!1),S?(S.el=D.el,Z(l,S,x)):S=D,T&&E0(T),(G=S.props&&S.props.onVnodeBeforeUpdate)&&A1(G,B,S,D),c2(l,!0);const c1=S0(l),x1=l.subTree;l.subTree=c1,F(x1,c1,C(x1.el),j2(x1),l,g,z),S.el=c1.el,Y===null&&y6(l,c1.el),I&&M1(I,g),(G=S.props&&S.props.onVnodeUpdated)&&M1(()=>A1(G,B,S,D),g)}else{let S;const{el:T,props:I}=f,{bm:B,m:D,parent:Y}=l,G=S2(f);if(c2(l,!1),B&&E0(B),!G&&(S=I&&I.onVnodeBeforeMount)&&A1(S,Y,f),c2(l,!0),T&&$0){const c1=()=>{l.subTree=S0(l),$0(T,l.subTree,l,g,null)};G?f.type.__asyncLoader().then(()=>!l.isUnmounted&&c1()):c1()}else{const c1=l.subTree=S0(l);F(null,c1,p,m,l,g,z),f.el=c1.el}if(D&&M1(D,g),!G&&(S=I&&I.onVnodeMounted)){const c1=f;M1(()=>A1(S,Y,c1),g)}(f.shapeFlag&256||Y&&S2(Y.vnode)&&Y.vnode.shapeFlag&256)&&l.a&&M1(l.a,g),l.isMounted=!0,f=p=m=null}},y=l.effect=new e3(b,()=>f3(v),l.scope),v=l.update=()=>y.run();v.id=l.uid,c2(l,!0),v()},Z=(l,f,p)=>{f.component=l;const m=l.vnode.props;l.vnode=f,l.next=null,Y6(l,f.props,m,p),Q6(l,f.children,p),y2(),k3(),x2()},L1=(l,f,p,m,g,z,x,b,y=!1)=>{const v=l&&l.children,S=l?l.shapeFlag:0,T=f.children,{patchFlag:I,shapeFlag:B}=f;if(I>0){if(I&128){w2(v,T,p,m,g,z,x,b,y);return}else if(I&256){x0(v,T,p,m,g,z,x,b,y);return}}B&8?(S&16&&k1(v,g,z),T!==v&&d(p,T)):S&16?B&16?w2(v,T,p,m,g,z,x,b,y):k1(v,g,z,!0):(S&8&&d(p,""),B&16&&P(T,p,m,g,z,x,b,y))},x0=(l,f,p,m,g,z,x,b,y)=>{l=l||p2,f=f||p2;const v=l.length,S=f.length,T=Math.min(v,S);let I;for(I=0;I<T;I++){const B=f[I]=y?q1(f[I]):B1(f[I]);F(l[I],B,p,null,g,z,x,b,y)}v>S?k1(l,g,z,!0,!1,T):P(f,p,m,g,z,x,b,y,T)},w2=(l,f,p,m,g,z,x,b,y)=>{let v=0;const S=f.length;let T=l.length-1,I=S-1;for(;v<=T&&v<=I;){const B=l[v],D=f[v]=y?q1(f[v]):B1(f[v]);if(o2(B,D))F(B,D,p,null,g,z,x,b,y);else break;v++}for(;v<=T&&v<=I;){const B=l[T],D=f[I]=y?q1(f[I]):B1(f[I]);if(o2(B,D))F(B,D,p,null,g,z,x,b,y);else break;T--,I--}if(v>T){if(v<=I){const B=I+1,D=B<S?f[B].el:m;for(;v<=I;)F(null,f[v]=y?q1(f[v]):B1(f[v]),p,D,g,z,x,b,y),v++}}else if(v>I)for(;v<=T;)H1(l[v],g,z,!0),v++;else{const B=v,D=v,Y=new Map;for(v=D;v<=I;v++){const m1=f[v]=y?q1(f[v]):B1(f[v]);m1.key!=null&&Y.set(m1.key,v)}let G,c1=0;const x1=I-D+1;let u2=!1,w3=0;const $2=new Array(x1);for(v=0;v<x1;v++)$2[v]=0;for(v=B;v<=T;v++){const m1=l[v];if(c1>=x1){H1(m1,g,z,!0);continue}let I1;if(m1.key!=null)I1=Y.get(m1.key);else for(G=D;G<=I;G++)if($2[G-D]===0&&o2(m1,f[G])){I1=G;break}I1===void 0?H1(m1,g,z,!0):($2[I1-D]=v+1,I1>=w3?w3=I1:u2=!0,F(m1,f[I1],p,null,g,z,x,b,y),c1++)}const $3=u2?t7($2):p2;for(G=$3.length-1,v=x1-1;v>=0;v--){const m1=D+v,I1=f[m1],T3=m1+1<S?f[m1+1].el:m;$2[v]===0?F(null,I1,p,T3,g,z,x,b,y):u2&&(G<0||v!==$3[G]?a2(I1,p,T3,2):G--)}}},a2=(l,f,p,m,g=null)=>{const{el:z,type:x,transition:b,children:y,shapeFlag:v}=l;if(v&6){a2(l.component.subTree,f,p,m);return}if(v&128){l.suspense.move(f,p,m);return}if(v&64){x.move(l,f,p,f2);return}if(x===h1){e(z,f,p);for(let T=0;T<y.length;T++)a2(y[T],f,p,m);e(l.anchor,f,p);return}if(x===Z2){W(l,f,p);return}if(m!==2&&v&1&&b)if(m===0)b.beforeEnter(z),e(z,f,p),M1(()=>b.enter(z),g);else{const{leave:T,delayLeave:I,afterLeave:B}=b,D=()=>e(z,f,p),Y=()=>{T(z,()=>{D(),B&&B()})};I?I(z,D,Y):Y()}else e(z,f,p)},H1=(l,f,p,m=!1,g=!1)=>{const{type:z,props:x,ref:b,children:y,dynamicChildren:v,shapeFlag:S,patchFlag:T,dirs:I}=l;if(b!=null&&V0(b,null,p,l,!0),S&256){f.ctx.deactivate(l);return}const B=S&1&&I,D=!S2(l);let Y;if(D&&(Y=x&&x.onVnodeBeforeUnmount)&&A1(Y,f,l),S&6)m5(l.component,p,m);else{if(S&128){l.suspense.unmount(p,m);return}B&&Z1(l,null,f,"beforeUnmount"),S&64?l.type.remove(l,f,p,g,f2,m):v&&(z!==h1||T>0&&T&64)?k1(v,f,p,!1,!0):(z===h1&&T&384||!g&&S&16)&&k1(y,f,p),m&&y3(l)}(D&&(Y=x&&x.onVnodeUnmounted)||B)&&M1(()=>{Y&&A1(Y,f,l),B&&Z1(l,null,f,"unmounted")},p)},y3=l=>{const{type:f,el:p,anchor:m,transition:g}=l;if(f===h1){g5(p,m);return}if(f===Z2){H(l);return}const z=()=>{s(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:b}=g,y=()=>x(p,z);b?b(l.el,z,y):y()}else z()},g5=(l,f)=>{let p;for(;l!==f;)p=M(l),s(l),l=p;s(f)},m5=(l,f,p)=>{const{bum:m,scope:g,update:z,subTree:x,um:b}=l;m&&E0(m),g.stop(),z&&(z.active=!1,H1(x,l,f,p)),b&&M1(b,f),M1(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},k1=(l,f,p,m=!1,g=!1,z=0)=>{for(let x=z;x<l.length;x++)H1(l[x],f,p,m,g)},j2=l=>l.shapeFlag&6?j2(l.component.subTree):l.shapeFlag&128?l.suspense.next():M(l.anchor||l.el),x3=(l,f,p)=>{l==null?f._vnode&&H1(f._vnode,null,null,!0):F(f._vnode||null,l,f,null,null,null,p),k3(),U4(),f._vnode=l},f2={p:F,um:H1,m:a2,r:y3,mt:i1,mc:P,pc:L1,pbc:q,n:j2,o:c};let w0,$0;return n&&([w0,$0]=n(f2)),{render:x3,hydrate:w0,createApp:Z6(x3,w0)}}function c2({effect:c,update:n},t){c.allowRecurse=n.allowRecurse=t}function _3(c,n,t=!1){const e=c.children,s=n.children;if(O(e)&&O(s))for(let o=0;o<e.length;o++){const r=e[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=q1(s[o]),i.el=r.el),t||_3(r,i))}}function t7(c){const n=c.slice(),t=[0];let e,s,o,r,i;const a=c.length;for(e=0;e<a;e++){const u=c[e];if(u!==0){if(s=t[t.length-1],c[s]<u){n[e]=s,t.push(e);continue}for(o=0,r=t.length-1;o<r;)i=o+r>>1,c[t[i]]<u?o=i+1:r=i;u<c[t[o]]&&(o>0&&(n[e]=t[o-1]),t[o]=e)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=n[r];return t}const e7=c=>c.__isTeleport,I2=c=>c&&(c.disabled||c.disabled===""),W3=c=>typeof SVGElement!="undefined"&&c instanceof SVGElement,W0=(c,n)=>{const t=c&&c.to;return l1(t)?n?n(t):null:t},s7={__isTeleport:!0,process(c,n,t,e,s,o,r,i,a,u){const{mc:d,pc:C,pbc:M,o:{insert:$,querySelector:A,createText:L,createComment:F}}=u,k=I2(n.props);let{shapeFlag:r1,children:J,dynamicChildren:W}=n;if(c==null){const H=n.el=L(""),s1=n.anchor=L("");$(H,t,e),$(s1,t,e);const N=n.target=W0(n.props,A),w=n.targetAnchor=L("");N&&($(w,N),r=r||W3(N));const P=(j,q)=>{r1&16&&d(J,j,q,s,o,r,i,a)};k?P(t,s1):N&&P(N,w)}else{n.el=c.el;const H=n.anchor=c.anchor,s1=n.target=c.target,N=n.targetAnchor=c.targetAnchor,w=I2(c.props),P=w?t:s1,j=w?H:N;if(r=r||W3(s1),W?(M(c.dynamicChildren,W,P,s,o,r,i),_3(c,n,!0)):a||C(c,n,P,j,s,o,r,i,!1),k)w||q2(n,t,H,u,1);else if((n.props&&n.props.to)!==(c.props&&c.props.to)){const q=n.target=W0(n.props,A);q&&q2(n,q,null,u,0)}else w&&q2(n,s1,N,u,1)}},remove(c,n,t,e,{um:s,o:{remove:o}},r){const{shapeFlag:i,children:a,anchor:u,targetAnchor:d,target:C,props:M}=c;if(C&&o(d),(r||!I2(M))&&(o(u),i&16))for(let $=0;$<a.length;$++){const A=a[$];s(A,n,t,!0,!!A.dynamicChildren)}},move:q2,hydrate:o7};function q2(c,n,t,{o:{insert:e},m:s},o=2){o===0&&e(c.targetAnchor,n,t);const{el:r,anchor:i,shapeFlag:a,children:u,props:d}=c,C=o===2;if(C&&e(r,n,t),(!C||I2(d))&&a&16)for(let M=0;M<u.length;M++)s(u[M],n,t,2);C&&e(i,n,t)}function o7(c,n,t,e,s,o,{o:{nextSibling:r,parentNode:i,querySelector:a}},u){const d=n.target=W0(n.props,a);if(d){const C=d._lpa||d.firstChild;if(n.shapeFlag&16)if(I2(n.props))n.anchor=u(r(c),n,i(c),t,e,s,o),n.targetAnchor=C;else{n.anchor=r(c);let M=C;for(;M;)if(M=r(M),M&&M.nodeType===8&&M.data==="teleport anchor"){n.targetAnchor=M,d._lpa=n.targetAnchor&&r(n.targetAnchor);break}u(C,n,d,t,e,s,o)}}return n.anchor&&r(n.anchor)}const r7=s7,h1=Symbol(void 0),C3=Symbol(void 0),y1=Symbol(void 0),Z2=Symbol(void 0),A2=[];let $1=null;function t1(c=!1){A2.push($1=c?null:[])}function i7(){A2.pop(),$1=A2[A2.length-1]||null}let P2=1;function q3(c){P2+=c}function i5(c){return c.dynamicChildren=P2>0?$1||p2:null,i7(),P2>0&&$1&&$1.push(c),c}function f1(c,n,t,e,s,o){return i5(h(c,n,t,e,s,o,!0))}function U2(c,n,t,e,s){return i5(V(c,n,t,e,s,!0))}function l0(c){return c?c.__v_isVNode===!0:!1}function o2(c,n){return c.type===n.type&&c.key===n.key}const v0="__vInternal",l5=({key:c})=>c!=null?c:null,c0=({ref:c,ref_key:n,ref_for:t})=>c!=null?l1(c)||o1(c)||R(c)?{i:g1,r:c,k:n,f:!!t}:c:null;function h(c,n=null,t=null,e=0,s=null,o=c===h1?0:1,r=!1,i=!1){const a={__v_isVNode:!0,__v_skip:!0,type:c,props:n,key:n&&l5(n),ref:n&&c0(n),scopeId:M0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:e,dynamicProps:s,dynamicChildren:null,appContext:null};return i?(M3(a,t),o&128&&c.normalize(a)):t&&(a.shapeFlag|=l1(t)?8:16),P2>0&&!r&&$1&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&$1.push(a),a}const V=l7;function l7(c,n=null,t=null,e=0,s=null,o=!1){if((!c||c===U6)&&(c=y1),l0(c)){const i=X1(c,n,!0);return t&&M3(i,t),P2>0&&!o&&$1&&(i.shapeFlag&6?$1[$1.indexOf(c)]=i:$1.push(i)),i.patchFlag|=-2,i}if(m7(c)&&(c=c.__vccOpts),n){n=a7(n);let{class:i,style:a}=n;i&&!l1(i)&&(n.class=b2(i)),n1(a)&&(O4(a)&&!O(a)&&(a=p1({},a)),n.style=a0(a))}const r=l1(c)?1:x6(c)?128:e7(c)?64:n1(c)?4:R(c)?2:0;return h(c,n,t,e,s,r,o,!0)}function a7(c){return c?O4(c)||v0 in c?p1({},c):c:null}function X1(c,n,t=!1){const{props:e,ref:s,patchFlag:o,children:r}=c,i=n?u7(e||{},n):e;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:i,key:i&&l5(i),ref:n&&n.ref?t&&s?O(s)?s.concat(c0(n)):[s,c0(n)]:c0(n):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:r,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:n&&c.type!==h1?o===-1?16:o|16:o,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&X1(c.ssContent),ssFallback:c.ssFallback&&X1(c.ssFallback),el:c.el,anchor:c.anchor}}function U1(c=" ",n=0){return V(C3,null,c,n)}function E1(c,n){const t=V(Z2,null,c);return t.staticCount=n,t}function f7(c="",n=!1){return n?(t1(),U2(y1,null,c)):V(y1,null,c)}function B1(c){return c==null||typeof c=="boolean"?V(y1):O(c)?V(h1,null,c.slice()):typeof c=="object"?q1(c):V(C3,null,String(c))}function q1(c){return c.el===null||c.memo?c:X1(c)}function M3(c,n){let t=0;const{shapeFlag:e}=c;if(n==null)n=null;else if(O(n))t=16;else if(typeof n=="object")if(e&65){const s=n.default;s&&(s._c&&(s._d=!1),M3(c,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!(v0 in n)?n._ctx=g1:s===3&&g1&&(g1.slots._===1?n._=1:(n._=2,c.patchFlag|=1024))}else R(n)?(n={default:n,_ctx:g1},t=32):(n=String(n),e&64?(t=16,n=[U1(n)]):t=8);c.children=n,c.shapeFlag|=t}function u7(...c){const n={};for(let t=0;t<c.length;t++){const e=c[t];for(const s in e)if(s==="class")n.class!==e.class&&(n.class=b2([n.class,e.class]));else if(s==="style")n.style=a0([n.style,e.style]);else if(f0(s)){const o=n[s],r=e[s];r&&o!==r&&!(O(o)&&o.includes(r))&&(n[s]=o?[].concat(o,r):r)}else s!==""&&(n[s]=e[s])}return n}function A1(c,n,t,e=null){z1(c,n,7,[t,e])}const h7=r5();let d7=0;function p7(c,n,t){const e=c.type,s=(n?n.appContext:c.appContext)||h7,o={uid:d7++,vnode:c,type:e,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new m4(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:t5(e,s),emitsOptions:D4(e,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:e.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=m6.bind(null,o),c.ce&&c.ce(o),o}let d1=null;const g3=()=>d1||g1,v2=c=>{d1=c,c.scope.on()},l2=()=>{d1&&d1.scope.off(),d1=null};function a5(c){return c.vnode.shapeFlag&4}let N2=!1;function _7(c,n=!1){N2=n;const{props:t,children:e}=c.vnode,s=a5(c);q6(c,t,s,n),J6(c,e);const o=s?C7(c,n):void 0;return N2=!1,o}function C7(c,n){const t=c.type;c.accessCache=Object.create(null),c.proxy=m2(new Proxy(c.ctx,j6));const{setup:e}=t;if(e){const s=c.setupContext=e.length>1?g7(c):null;v2(c),y2();const o=J1(e,c,0,[c.props,s]);if(x2(),l2(),p4(o)){if(o.then(l2,l2),n)return o.then(r=>{Y3(c,r,n)}).catch(r=>{_0(r,c,0)});c.asyncDep=o}else Y3(c,o,n)}else f5(c,n)}function Y3(c,n,t){R(n)?c.type.__ssrInlineRender?c.ssrRender=n:c.render=n:n1(n)&&(c.setupState=L4(n)),f5(c,t)}let G3;function f5(c,n,t){const e=c.type;if(!c.render){if(!n&&G3&&!e.render){const s=e.template||d3(c).template;if(s){const{isCustomElement:o,compilerOptions:r}=c.appContext.config,{delimiters:i,compilerOptions:a}=e,u=p1(p1({isCustomElement:o,delimiters:i},r),a);e.render=G3(s,u)}}c.render=e.render||T1}v2(c),y2(),D6(c),x2(),l2()}function M7(c){return new Proxy(c.attrs,{get(n,t){return v1(c,"get","$attrs"),n[t]}})}function g7(c){const n=e=>{c.exposed=e||{}};let t;return{get attrs(){return t||(t=M7(c))},slots:c.slots,emit:c.emit,expose:n}}function m3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(L4(m2(c.exposed)),{get(n,t){if(t in n)return n[t];if(t in r0)return r0[t](c)}}))}function m7(c){return R(c)&&"__vccOpts"in c}const v3=(c,n)=>d6(c,n,N2);function v7(c,n,t){const e=arguments.length;return e===2?n1(n)&&!O(n)?l0(n)?V(c,null,[n]):V(c,n):V(c,null,n):(e>3?t=Array.prototype.slice.call(arguments,2):e===3&&l0(t)&&(t=[t]),V(c,n,t))}const b7="3.2.39",z7="http://www.w3.org/2000/svg",r2=typeof document!="undefined"?document:null,J3=r2&&r2.createElement("template"),y7={insert:(c,n,t)=>{n.insertBefore(c,t||null)},remove:c=>{const n=c.parentNode;n&&n.removeChild(c)},createElement:(c,n,t,e)=>{const s=n?r2.createElementNS(z7,c):r2.createElement(c,t?{is:t}:void 0);return c==="select"&&e&&e.multiple!=null&&s.setAttribute("multiple",e.multiple),s},createText:c=>r2.createTextNode(c),createComment:c=>r2.createComment(c),setText:(c,n)=>{c.nodeValue=n},setElementText:(c,n)=>{c.textContent=n},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>r2.querySelector(c),setScopeId(c,n){c.setAttribute(n,"")},cloneNode(c){const n=c.cloneNode(!0);return"_value"in c&&(n._value=c._value),n},insertStaticContent(c,n,t,e,s,o){const r=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{J3.innerHTML=e?`<svg>${c}</svg>`:c;const i=J3.content;if(e){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}n.insertBefore(i,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function x7(c,n,t){const e=c._vtc;e&&(n=(n?[n,...e]:[...e]).join(" ")),n==null?c.removeAttribute("class"):t?c.setAttribute("class",n):c.className=n}function w7(c,n,t){const e=c.style,s=l1(t);if(t&&!s){for(const o in t)q0(e,o,t[o]);if(n&&!l1(n))for(const o in n)t[o]==null&&q0(e,o,"")}else{const o=e.display;s?n!==t&&(e.cssText=t):n&&c.removeAttribute("style"),"_vod"in c&&(e.display=o)}}const Q3=/\s*!important$/;function q0(c,n,t){if(O(t))t.forEach(e=>q0(c,n,e));else if(t==null&&(t=""),n.startsWith("--"))c.setProperty(n,t);else{const e=$7(c,n);Q3.test(t)?c.setProperty(z2(e),t.replace(Q3,""),"important"):c[e]=t}}const X3=["Webkit","Moz","ms"],A0={};function $7(c,n){const t=A0[n];if(t)return t;let e=M2(n);if(e!=="filter"&&e in c)return A0[n]=e;e=M4(e);for(let s=0;s<X3.length;s++){const o=X3[s]+e;if(o in c)return A0[n]=o}return n}const Z3="http://www.w3.org/1999/xlink";function T7(c,n,t,e,s){if(e&&n.startsWith("xlink:"))t==null?c.removeAttributeNS(Z3,n.slice(6,n.length)):c.setAttributeNS(Z3,n,t);else{const o=z5(n);t==null||o&&!u4(t)?c.removeAttribute(n):c.setAttribute(n,o?"":t)}}function E7(c,n,t,e,s,o,r){if(n==="innerHTML"||n==="textContent"){e&&r(e,s,o),c[n]=t==null?"":t;return}if(n==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=t;const a=t==null?"":t;(c.value!==a||c.tagName==="OPTION")&&(c.value=a),t==null&&c.removeAttribute(n);return}let i=!1;if(t===""||t==null){const a=typeof c[n];a==="boolean"?t=u4(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{c[n]=t}catch{}i&&c.removeAttribute(n)}const[u5,S7]=(()=>{let c=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(c=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[c,n]})();let Y0=0;const I7=Promise.resolve(),A7=()=>{Y0=0},O7=()=>Y0||(I7.then(A7),Y0=u5());function B7(c,n,t,e){c.addEventListener(n,t,e)}function F7(c,n,t,e){c.removeEventListener(n,t,e)}function L7(c,n,t,e,s=null){const o=c._vei||(c._vei={}),r=o[n];if(e&&r)r.value=e;else{const[i,a]=k7(n);if(e){const u=o[n]=P7(e,s);B7(c,i,u,a)}else r&&(F7(c,i,r,a),o[n]=void 0)}}const c4=/(?:Once|Passive|Capture)$/;function k7(c){let n;if(c4.test(c)){n={};let e;for(;e=c.match(c4);)c=c.slice(0,c.length-e[0].length),n[e[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):z2(c.slice(2)),n]}function P7(c,n){const t=e=>{const s=e.timeStamp||u5();(S7||s>=t.attached-1)&&z1(N7(e,t.value),n,5,[e])};return t.value=c,t.attached=O7(),t}function N7(c,n){if(O(n)){const t=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{t.call(c),c._stopped=!0},n.map(e=>s=>!s._stopped&&e&&e(s))}else return n}const n4=/^on[a-z]/,R7=(c,n,t,e,s=!1,o,r,i,a)=>{n==="class"?x7(c,e,s):n==="style"?w7(c,t,e):f0(n)?X0(n)||L7(c,n,t,e,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):U7(c,n,e,s))?E7(c,n,e,o,r,i,a):(n==="true-value"?c._trueValue=e:n==="false-value"&&(c._falseValue=e),T7(c,n,e,s))};function U7(c,n,t,e){return e?!!(n==="innerHTML"||n==="textContent"||n in c&&n4.test(n)&&R(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&c.tagName==="INPUT"||n==="type"&&c.tagName==="TEXTAREA"||n4.test(n)&&l1(t)?!1:n in c}const V1="transition",T2="animation",b3=(c,{slots:n})=>v7(W4,j7(c),n);b3.displayName="Transition";const h5={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};b3.props=p1({},W4.props,h5);const n2=(c,n=[])=>{O(c)?c.forEach(t=>t(...n)):c&&c(...n)},t4=c=>c?O(c)?c.some(n=>n.length>1):c.length>1:!1;function j7(c){const n={};for(const E in c)E in h5||(n[E]=c[E]);if(c.css===!1)return n;const{name:t="v",type:e,duration:s,enterFromClass:o=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:a=o,appearActiveClass:u=r,appearToClass:d=i,leaveFromClass:C=`${t}-leave-from`,leaveActiveClass:M=`${t}-leave-active`,leaveToClass:$=`${t}-leave-to`}=c,A=D7(s),L=A&&A[0],F=A&&A[1],{onBeforeEnter:k,onEnter:r1,onEnterCancelled:J,onLeave:W,onLeaveCancelled:H,onBeforeAppear:s1=k,onAppear:N=r1,onAppearCancelled:w=J}=n,P=(E,X,a1)=>{t2(E,X?d:i),t2(E,X?u:r),a1&&a1()},j=(E,X)=>{E._isLeaving=!1,t2(E,C),t2(E,$),t2(E,M),X&&X()},q=E=>(X,a1)=>{const i1=E?N:r1,u1=()=>P(X,E,a1);n2(i1,[X,u1]),e4(()=>{t2(X,E?a:o),W1(X,E?d:i),t4(i1)||s4(X,e,L,u1)})};return p1(n,{onBeforeEnter(E){n2(k,[E]),W1(E,o),W1(E,r)},onBeforeAppear(E){n2(s1,[E]),W1(E,a),W1(E,u)},onEnter:q(!1),onAppear:q(!0),onLeave(E,X){E._isLeaving=!0;const a1=()=>j(E,X);W1(E,C),V7(),W1(E,M),e4(()=>{!E._isLeaving||(t2(E,C),W1(E,$),t4(W)||s4(E,e,F,a1))}),n2(W,[E,a1])},onEnterCancelled(E){P(E,!1),n2(J,[E])},onAppearCancelled(E){P(E,!0),n2(w,[E])},onLeaveCancelled(E){j(E),n2(H,[E])}})}function D7(c){if(c==null)return null;if(n1(c))return[O0(c.enter),O0(c.leave)];{const n=O0(c);return[n,n]}}function O0(c){return g4(c)}function W1(c,n){n.split(/\s+/).forEach(t=>t&&c.classList.add(t)),(c._vtc||(c._vtc=new Set)).add(n)}function t2(c,n){n.split(/\s+/).forEach(e=>e&&c.classList.remove(e));const{_vtc:t}=c;t&&(t.delete(n),t.size||(c._vtc=void 0))}function e4(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let H7=0;function s4(c,n,t,e){const s=c._endId=++H7,o=()=>{s===c._endId&&e()};if(t)return setTimeout(o,t);const{type:r,timeout:i,propCount:a}=K7(c,n);if(!r)return e();const u=r+"end";let d=0;const C=()=>{c.removeEventListener(u,M),o()},M=$=>{$.target===c&&++d>=a&&C()};setTimeout(()=>{d<a&&C()},i+1),c.addEventListener(u,M)}function K7(c,n){const t=window.getComputedStyle(c),e=A=>(t[A]||"").split(", "),s=e(V1+"Delay"),o=e(V1+"Duration"),r=o4(s,o),i=e(T2+"Delay"),a=e(T2+"Duration"),u=o4(i,a);let d=null,C=0,M=0;n===V1?r>0&&(d=V1,C=r,M=o.length):n===T2?u>0&&(d=T2,C=u,M=a.length):(C=Math.max(r,u),d=C>0?r>u?V1:T2:null,M=d?d===V1?o.length:a.length:0);const $=d===V1&&/\b(transform|all)(,|$)/.test(t[V1+"Property"]);return{type:d,timeout:C,propCount:M,hasTransform:$}}function o4(c,n){for(;c.length<n.length;)c=c.concat(c);return Math.max(...n.map((t,e)=>r4(t)+r4(c[e])))}function r4(c){return Number(c.slice(0,-1).replace(",","."))*1e3}function V7(){return document.body.offsetHeight}const W7=p1({patchProp:R7},y7);let i4;function q7(){return i4||(i4=c7(W7))}const Y7=(...c)=>{const n=q7().createApp(...c),{mount:t}=n;return n.mount=e=>{const s=G7(e);if(!s)return;const o=n._component;!R(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},n};function G7(c){return l1(c)?document.querySelector(c):c}var J7=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let d5;const b0=c=>d5=c,p5=Symbol();function G0(c){return c&&typeof c=="object"&&Object.prototype.toString.call(c)==="[object Object]"&&typeof c.toJSON!="function"}var O2;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(O2||(O2={}));function Q7(){const c=v4(!0),n=c.run(()=>R2({}));let t=[],e=[];const s=m2({install(o){b0(s),s._a=o,o.provide(p5,s),o.config.globalProperties.$pinia=s,e.forEach(r=>t.push(r)),e=[]},use(o){return!this._a&&!J7?e.push(o):t.push(o),this},_p:t,_a:null,_e:c,_s:new Map,state:n});return s}const _5=()=>{};function l4(c,n,t,e=_5){c.push(n);const s=()=>{const o=c.indexOf(n);o>-1&&(c.splice(o,1),e())};return!t&&g3()&&h3(s),s}function h2(c,...n){c.slice().forEach(t=>{t(...n)})}function J0(c,n){c instanceof Map&&n instanceof Map&&n.forEach((t,e)=>c.set(e,t)),c instanceof Set&&n instanceof Set&&n.forEach(c.add,c);for(const t in n){if(!n.hasOwnProperty(t))continue;const e=n[t],s=c[t];G0(s)&&G0(e)&&c.hasOwnProperty(t)&&!o1(e)&&!G1(e)?c[t]=J0(s,e):c[t]=e}return c}const X7=Symbol();function Z7(c){return!G0(c)||!c.hasOwnProperty(X7)}const{assign:N1}=Object;function c8(c){return!!(o1(c)&&c.effect)}function n8(c,n,t,e){const{state:s,actions:o,getters:r}=n,i=t.state.value[c];let a;function u(){i||(t.state.value[c]=s?s():{});const d=a6(t.state.value[c]);return N1(d,o,Object.keys(r||{}).reduce((C,M)=>(C[M]=m2(v3(()=>{b0(t);const $=t._s.get(c);return r[M].call($,$)})),C),{}))}return a=C5(c,u,n,t,e,!0),a.$reset=function(){const C=s?s():{};this.$patch(M=>{N1(M,C)})},a}function C5(c,n,t={},e,s,o){let r;const i=N1({actions:{}},t),a={deep:!0};let u,d,C=m2([]),M=m2([]),$;const A=e.state.value[c];!o&&!A&&(e.state.value[c]={}),R2({});let L;function F(N){let w;u=d=!1,typeof N=="function"?(N(e.state.value[c]),w={type:O2.patchFunction,storeId:c,events:$}):(J0(e.state.value[c],N),w={type:O2.patchObject,payload:N,storeId:c,events:$});const P=L=Symbol();N4().then(()=>{L===P&&(u=!0)}),d=!0,h2(C,w,e.state.value[c])}const k=_5;function r1(){r.stop(),C=[],M=[],e._s.delete(c)}function J(N,w){return function(){b0(e);const P=Array.from(arguments),j=[],q=[];function E(i1){j.push(i1)}function X(i1){q.push(i1)}h2(M,{args:P,name:N,store:H,after:E,onError:X});let a1;try{a1=w.apply(this&&this.$id===c?this:H,P)}catch(i1){throw h2(q,i1),i1}return a1 instanceof Promise?a1.then(i1=>(h2(j,i1),i1)).catch(i1=>(h2(q,i1),Promise.reject(i1))):(h2(j,a1),a1)}}const W={_p:e,$id:c,$onAction:l4.bind(null,M),$patch:F,$reset:k,$subscribe(N,w={}){const P=l4(C,N,w.detached,()=>j()),j=r.run(()=>Q2(()=>e.state.value[c],q=>{(w.flush==="sync"?d:u)&&N({storeId:c,type:O2.direct,events:$},q)},N1({},a,w)));return P},$dispose:r1},H=p0(N1({},W));e._s.set(c,H);const s1=e._e.run(()=>(r=v4(),r.run(()=>n())));for(const N in s1){const w=s1[N];if(o1(w)&&!c8(w)||G1(w))o||(A&&Z7(w)&&(o1(w)?w.value=A[N]:J0(w,A[N])),e.state.value[c][N]=w);else if(typeof w=="function"){const P=J(N,w);s1[N]=P,i.actions[N]=w}}return N1(H,s1),N1(K(H),s1),Object.defineProperty(H,"$state",{get:()=>e.state.value[c],set:N=>{F(w=>{N1(w,N)})}}),e._p.forEach(N=>{N1(H,r.run(()=>N({store:H,app:e._a,pinia:e,options:i})))}),A&&o&&t.hydrate&&t.hydrate(H.$state,A),u=!0,d=!0,H}function t8(c,n,t){let e,s;const o=typeof n=="function";typeof c=="string"?(e=c,s=o?t:n):(s=c,e=c.id);function r(i,a){const u=g3();return i=i||u&&J2(p5),i&&b0(i),i=d5,i._s.has(e)||(o?C5(e,n,s,i):n8(e,s,i)),i._s.get(e)}return r.$id=e,r}const Y2={theme:sessionStorage.getItem(R1("theme")),wordSize:Number.parseInt(sessionStorage.getItem(R1("wordsize"))),resultBase:Number.parseInt(sessionStorage.getItem(R1("resultbase"))),lighted:Number.parseInt(sessionStorage.getItem(R1("lighted")))},z0=t8({id:"store",state:()=>({theme:Y2.theme||"light",wordSize:Y2.wordSize||8,resultBase:Y2.resultBase||10,lighted:Y2.lighted||0}),getters:{isDarkTheme:c=>c.theme!=="light",bitRange:c=>Array.from(Array(c.wordSize)).map((n,t)=>{const e=Math.pow(2,t);return{id:`bit-${e}`,label:String(e),weight:e,index:t,isOn:!!(c.lighted&e)}}).reverse(),maxNumber:c=>Math.pow(2,c.wordSize),lightedToBase:c=>c.lighted.toString(c.resultBase)},actions:{setLighted(c){this.lighted=Number.parseInt(c,this.resultBase),sessionStorage.setItem(R1("lighted"),this.lighted)},toggleLighted(c){const n=!!(this.lighted&c),t=this.maxNumber-1;this.lighted=n?this.lighted&(t^c):this.lighted|c,sessionStorage.setItem(R1("lighted"),this.lighted)},toggleTheme(){this.theme=this.theme==="light"?"dark":"light",sessionStorage.setItem(R1("theme"),this.theme)},setWordSize(c){this.wordSize=Number.parseInt(c),sessionStorage.setItem(R1("wordsize"),this.wordSize)},setResultBase(c){this.resultBase=c,sessionStorage.setItem(R1("resultbase"),this.resultBase)}}});function R1(c){return`binlamps-${c}`}var S1=(c,n)=>{const t=c.__vccOpts||c;for(const[e,s]of n)t[e]=s;return t};const e8=["id","name","value","checked"],s8=["for"],o8={__name:"ConsoleSwitch",props:{modelValue:{type:[String,Number,void 0,null],default:null},name:{type:String,default:"console-switch"},items:{type:Array,required:!0,validator(c){return c.every(n=>"value"in n&&"label"in n)}},options:{type:Object,default(){return{}}}},emits:["update:modelValue"],setup(c,{emit:n}){const t=c,e=R2("0");o0(()=>{const r=t.items.findIndex(i=>i.value==t.modelValue);r!==-1&&(e.value=`${100/t.items.length*r}%`)});const s=v3(()=>({transform:`translateY(${e.value})`}));function o(r){n("update:modelValue",r.target.value)}return(r,i)=>(t1(),f1("div",{class:b2(["console-switch",{"--vertical":c.options.isVertical,"--right":c.options.isRight}])},[X2(r.$slots,"default",{},void 0,!0),(t1(!0),f1(h1,null,X4(c.items,a=>(t1(),f1(h1,{key:a.label},[h("input",{id:`${a.label}-id`,type:"radio",class:"console-switch__native-input",name:c.name,value:a.value,checked:a.value===c.modelValue,onChange:o},null,40,e8),h("label",{for:`${a.label}-id`,class:"console-switch__label"},B0(a.label),9,s8)],64))),128)),h("i",{class:"console-switch__indicator",style:a0(_(s))},null,4)],2))}};var a4=S1(o8,[["__scopeId","data-v-3f38fb12"]]);const r8={class:"light-board-console"},i8={class:"light-board-console__display"},l8=["value"];let f4=null;const a8={__name:"LightBoardConsole",setup(c){const n=z0();function t(o){clearTimeout(f4),f4=setTimeout(()=>{n.setLighted(o.target.value)},300)}const e=[{value:8,label:"8 bit"},{value:16,label:"16 bit"},{value:24,label:"24 bit"}],s=[{value:10,label:"dec"},{value:2,label:"bin"},{value:16,label:"hex"}];return(o,r)=>(t1(),f1("div",r8,[V(_(a4),{title:"Light bulb numeric label format",items:s,options:{isVertical:!0,isRight:!0},"model-value":_(n).resultBase,name:"resultBase","onUpdate:modelValue":_(n).setResultBase},null,8,["model-value","onUpdate:modelValue"]),h("div",i8,[h("input",{value:_(n).lightedToBase,type:"text",name:"result","aria-label":"Numeric representation (can enter)",onInput:t},null,40,l8)]),V(_(a4),{"model-value":_(n).wordSize,name:"wordSize",items:e,options:{isVertical:!0},title:"Byte word size","onUpdate:modelValue":_(n).setWordSize},null,8,["model-value","onUpdate:modelValue"]),h("button",{class:"button light-board-console__reset",onClick:r[0]||(r[0]=i=>_(n).setLighted(0))}," C ")]))}};var f8=S1(a8,[["__scopeId","data-v-4578a774"]]);const u8={},h8={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},d8=E1('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),p8=[d8];function _8(c,n){return t1(),f1("svg",h8,p8)}var C8=S1(u8,[["render",_8]]);const M8={},g8={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},m8=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),v8=[m8];function b8(c,n){return t1(),f1("svg",g8,v8)}var z8=S1(M8,[["render",b8]]);const y8=["aria-checked"],x8={class:"theme-switch__check"},w8={__name:"ThemeSwitch",setup(c){const n=z0();return(t,e)=>(t1(),f1("button",{class:"theme-switch button",type:"button",role:"switch","aria-label":"toggle dark mode","aria-checked":_(n).isDarkTheme,onClick:e[0]||(e[0]=(...s)=>_(n).toggleTheme&&_(n).toggleTheme(...s))},[h("span",x8,[V(_(C8),{class:"icon theme-switch__check--light"}),V(_(z8),{class:"icon theme-switch__check--dark"})])],8,y8))}};const $8={},T8={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 805.000000 805.000000",class:"ilbs-root"},E8=E1('<g stroke="none" transform="translate(0.000000,805.000000) scale(0.100000,-0.100000)" data-v-2dac79f7><path fill="var(--ilbs-color-ray)" d="M3018 8027 c-15 -12 -32 -35 -38 -52 -23 -62 -11 -286 25 -465 3 -14 8 -38 10 -55 28 -164 74 -418 86 -475 5 -25 11 -60 14 -79 18 -107 116 -153 185 -85 22 22 25 32 25 102 -1 42 -4 102 -8 132 -8 60 -17 121 -22 160 -2 14 -7 50 -10 80 -3 30 -8 66 -10 80 -9 62 -27 187 -29 210 -2 14 -7 50 -11 80 -5 30 -9 62 -10 70 -1 8 -8 51 -14 95 -7 44 -14 94 -17 110 -8 51 -24 81 -53 98 -40 24 -91 21 -123 -6z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M5184 7671 c-41 -25 -59 -51 -143 -211 -112 -214 -190 -402 -286 -685 -31 -92 -36 -120 -33 -172 4 -71 11 -81 61 -93 65 -14 95 10 153 125 157 311 382 836 398 929 6 34 -18 92 -44 106 -36 19 -75 20 -106 1z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M1263 7088 c-11 -5 -29 -25 -39 -44 -16 -29 -17 -39 -6 -80 30 -113 265 -410 622 -788 106 -112 157 -127 215 -66 32 33 37 87 12 133 -19 36 -362 471 -558 708 -111 134 -176 171 -246 137z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M7109 6206 c-67 -23 -353 -193 -434 -258 -5 -4 -80 -60 -165 -124 -85 -65 -157 -120 -160 -123 -3 -4 -27 -23 -55 -43 -107 -77 -136 -127 -108 -185 31 -67 93 -84 168 -46 36 19 619 408 810 541 42 30 82 81 91 119 21 81 -63 148 -147 119z" data-v-2dac79f7></path><path fill="var(--ilbs-color-bulb)" d="M3689 6146 c-2 -2 -46 -6 -97 -9 -51 -4 -96 -8 -100 -11 -4 -2 -23 -7 -42 -10 -19 -3 -46 -8 -60 -11 -14 -3 -52 -10 -85 -15 -207 -37 -446 -131 -628 -247 -382 -244 -647 -637 -733 -1088 -25 -126 -24 -524 1 -690 2 -16 7 -55 9 -85 3 -30 8 -75 11 -100 13 -104 26 -198 30 -221 3 -13 7 -40 10 -59 6 -52 31 -171 81 -405 8 -35 18 -168 18 -230 -1 -198 -52 -369 -163 -540 -25 -38 -56 -81 -69 -95 -55 -59 -94 -171 -93 -265 3 -177 114 -396 291 -573 74 -74 219 -192 236 -192 4 0 15 -6 23 -14 25 -22 208 -111 291 -141 72 -25 176 -53 230 -61 14 -2 50 -8 80 -13 82 -14 274 -11 364 5 114 20 180 41 272 85 166 82 227 179 202 323 -9 51 -11 118 -5 146 39 172 212 409 415 569 90 71 191 135 437 278 351 205 510 307 615 397 67 58 206 201 253 261 26 33 51 65 55 70 4 6 34 53 66 105 167 269 249 553 250 865 1 259 -32 442 -119 661 -159 397 -420 723 -751 937 -176 114 -489 243 -680 281 -10 2 -49 11 -85 20 -36 8 -88 18 -115 22 -27 3 -51 7 -54 9 -3 2 -34 6 -70 10 -36 4 -72 9 -81 10 -9 2 -56 6 -105 10 -49 4 -92 9 -95 11 -3 2 -8 2 -10 0z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M348 5413 c-59 -9 -87 -93 -52 -151 17 -28 77 -72 98 -72 6 0 16 -4 22 -9 36 -32 478 -173 644 -205 14 -3 92 -18 174 -35 164 -34 184 -36 218 -20 28 12 58 61 53 86 -2 10 -4 23 -4 29 -1 6 -12 23 -26 37 -41 40 -354 152 -735 262 -69 19 -161 47 -206 60 -75 23 -121 28 -186 18z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M6610 4250 c-50 -9 -79 -27 -90 -56 -31 -80 13 -139 110 -150 85 -9 1018 -13 1055 -4 114 26 112 177 -3 210 -37 10 -1015 10 -1072 0z" data-v-2dac79f7></path><path fill="var(--ilbs-color-ray)" d="M5847 2974 c-37 -20 -58 -69 -45 -104 15 -39 288 -291 478 -441 97 -77 305 -229 313 -229 3 0 31 -18 63 -39 85 -57 134 -57 167 -2 23 39 22 85 -3 136 -23 48 -45 68 -258 247 -88 73 -414 311 -554 402 -65 44 -120 54 -161 30z" data-v-2dac79f7></path><path fill="var(--ilbs-color-socket)" d="M1705 1618 c-78 -42 -74 -162 11 -317 65 -119 128 -205 214 -292 217 -218 451 -322 860 -384 234 -35 473 -20 555 36 73 50 77 187 6 224 -45 23 -148 33 -346 36 -331 4 -646 114 -875 308 -115 97 -218 211 -287 319 -20 31 -43 62 -52 69 -20 15 -60 16 -86 1z" data-v-2dac79f7></path><path fill="var(--ilbs-color-socket)" d="M1530 1150 c-31 -29 -32 -34 -27 -83 7 -76 67 -205 142 -312 70 -98 197 -220 300 -287 55 -36 185 -108 195 -108 4 0 29 -10 56 -22 99 -43 348 -105 499 -124 92 -11 143 -11 230 2 127 19 166 32 205 72 32 32 37 44 39 89 2 59 -17 106 -52 124 -14 8 -89 13 -222 15 -110 1 -216 5 -235 9 -299 57 -443 111 -633 238 -107 71 -270 230 -323 314 -20 32 -46 68 -57 81 -30 32 -77 29 -117 -8z" data-v-2dac79f7></path><path fill="var(--ilbs-color-socket)" d="M1744 466 c-24 -18 -32 -81 -19 -151 40 -216 258 -345 500 -296 87 18 167 60 179 93 12 34 -11 64 -58 74 -93 20 -313 125 -444 211 -115 76 -136 85 -158 69z" data-v-2dac79f7></path></g>',1),S8=[E8];function I8(c,n){return t1(),f1("svg",T8,S8)}var A8=S1($8,[["render",I8],["__scopeId","data-v-2dac79f7"]]);const z3=c=>(H4("data-v-b5fdd72c"),c=c(),K4(),c),O8={class:"app-header"},B8={class:"app-container"},F8={class:"app-header__brand"},L8={title:"Turn On a Binary Lamp!"},k8=z3(()=>h("span",{class:"cap"},"B",-1)),P8=U1("in"),N8=z3(()=>h("span",{class:"cap"},"L",-1)),R8=U1("amps "),U8=z3(()=>h("h2",{class:"app-header__subtitle"}," Light Up Your Bytes ",-1)),j8={__name:"TheHeader",setup(c){const n=z0();return o0(()=>{const t=n.$state.theme==="light"?"add":"remove";document.documentElement.classList[t]("dark")}),o0(()=>{n.$state.lighted>=n.maxNumber&&n.setLighted((n.maxNumber-1).toString(n.$state.resultBase))}),(t,e)=>(t1(),f1("header",O8,[h("div",B8,[h("div",F8,[h("h1",L8,[V(_(A8),{class:"app-header__brand-icon"}),k8,P8,N8,R8]),U8]),V(_(f8)),V(_(w8),{class:"app-header__theme"})])]))}};var D8=S1(j8,[["__scopeId","data-v-b5fdd72c"]]),H8="/binlamps/assets/logo.da9b9095.svg";const K8={key:0,class:"modal-wrapper"},V8={class:"modal-container"},W8={class:"modal-header"},q8={class:"modal-body"},Y8={class:"modal-footer"},G8={__name:"BaseModal",props:{isShown:Boolean},emits:["close"],setup(c,{emit:n}){return(t,e)=>(t1(),U2(b3,{name:"modal",mode:"out-in"},{default:s0(()=>[c.isShown?(t1(),f1("div",K8,[h("div",{class:"modal-mask",onClick:e[0]||(e[0]=s=>n("close"))}),h("div",V8,[h("div",W8,[X2(t.$slots,"header")]),h("div",q8,[X2(t.$slots,"body")]),h("div",Y8,[X2(t.$slots,"footer")])])])):f7("",!0)]),_:3}))}},J8={},Q8=h("p",null," This is a small toy project created as an exercise in using CSS custom properties (a.k.a. CSS variables) and direct manipulation of inline SVG as well as bitwise operations. Built using Vue 3 (Vite flavor) and Composition API. ",-1),X8=h("ul",{style:{"margin-top":"1em"}},[U1(" Credits: "),h("li",null,[U1(" Ticking Timebomb BB font: \xA9 2012 Nate Piekos. "),h("a",{href:"/fontinfo.txt",rel:"noreferrer noopener",target:"_blank"},"Detailed font info")]),h("li",null,[U1(" Realistic light bulb SVG image: "),h("a",{href:"https://pixabay.com/vectors/light-bulb-electric-bulb-lighting-147810/",rel:"noreferrer noopener",target:"_blank"},"https://pixabay.com")])],-1);function Z8(c,n){return t1(),f1(h1,null,[Q8,X8],64)}var c9=S1(J8,[["render",Z8]]);const y0=c=>(H4("data-v-2049a643"),c=c(),K4(),c),n9={class:"app-footer"},t9={class:"app-container"},e9=y0(()=>h("span",{class:"app-footer__brand"},"BinLamps",-1)),s9=U1(" visual toy \u30FB "),o9=y0(()=>h("span",null,"Helps you understand binary numbers",-1)),r9=y0(()=>h("span",null,[h("img",{src:H8,alt:"Vue logo",width:"24",height:"24"}),U1(" Built with "),h("a",{href:"https://vuejs.org/",rel:"noreferrer noopener",target:"_blank"},"Vue 3"),U1(" on "),h("a",{href:"https://vitejs.dev/",rel:"noreferrer noopener",target:"_blank"},"Vite")],-1)),i9=y0(()=>h("h3",null,"About BinLamps",-1)),l9={__name:"TheFooter",setup(c){const n=R2(!1);return(t,e)=>(t1(),f1("footer",n9,[h("div",t9,[h("address",null,[e9,s9,h("button",{class:"button button-text",onClick:e[0]||(e[0]=s=>n.value=!0)}," About ")]),o9,r9]),(t1(),U2(r7,{to:"body"},[V(_(G8),{"is-shown":n.value,onClose:e[1]||(e[1]=s=>n.value=!1)},{header:s0(()=>[i9]),body:s0(()=>[V(_(c9))]),_:1},8,["is-shown"])]))]))}};var a9=S1(l9,[["__scopeId","data-v-2049a643"]]);const f9={viewBox:"-25 0 290 450",xmlns:"http://www.w3.org/2000/svg",class:"light-bulb"},u9=["id"],h9=h("path",{d:"m565.09388,1139.0893c8.18657-6.4984 16.37296-12.997 22.72619-21.1138 1.10679-1.7006-.17632-3.2298-.23026-3.2456-1.48574-.6885-2.19324-1.4928-1.44103-2.6323 .27302-.4136.71511-.7634 1.25442-.9944 .057-.035.10976-.077.1568-.1244l1.59913-1.2117c.0578-.026.10044-.065.15666-.093 1.02685-.5126 1.78979-1.3089 2.13508-2.2718 .3642-1.0157.24638-2.2031-.39213-3.1892-.42658-.6589-1.06509-1.1486-1.80584-1.508l.0313-.031-.15579-.095-1.58861-1.1633c-.0497-.026-.10203-.047-.15597-.063-1.48575-.6884-1.92573-2.022-1.17352-3.1615 .27301-.4136.71511-.7634 1.25442-.9944 .0569-.035.10976-.077.1568-.1243l1.59927-1.2429c.0578-.026.10044-.066.15666-.093 1.02685-.5126 1.78978-1.3089 2.13508-2.2718 .3642-1.0156.24638-2.2032-.39213-3.1893-.42658-.6588-1.06509-1.1485-1.80584-1.508l.0313-.031-.15583-.095-1.58861-1.1632c-.0497-.026-.10204-.048-.15598-.063-1.48574-.6885-1.92572-2.022-1.17351-3.1615 .27301-.4136.7151-.7635 1.25441-.9945 .057-.035.10976-.076.1568-.1243l1.59913-1.2116c.0578-.026.10044-.065.15667-.093 1.02685-.5127 1.78978-1.309 2.13508-2.2719 .3642-1.0156.24638-2.2031-.39213-3.1893-.42658-.6588-1.06509-1.1485-1.80585-1.508l.0314-.031-.15583-.095-1.58862-1.1633c-.0497-.026-.10203-.047-.15597-.063-1.48576-.6884-1.92567-2.0218-1.17351-3.1615 .24886-.377.57005-.7154.84747-.8399 .16285-.073.13556-.078.15667-.093l.0626-.031c.0333-.026.0501-.058.0941-.094 .0882-.071.23255-.161.37624-.2796 .28736-.237.65226-.56 1.09789-.9326 .89127-.7452 1.60328-1.162 2.51706-1.9273 .0487-5.252.24789-11.9367.52869-17.4881-45.46912,11.6343-86.91104,4.5702-105.09698-1.768-1.76725,2.5109-.26263,6.2291-.49793,9.122 .64344.8635 1.31164,1.7049 1.8401,2.6153 .90696.7734 2.01065,1.7285 2.89529,2.4815l1.08959.9424c.14263.1198.28616.2112.37375.2829 .0437.036.0603.068.0933.094l.0624.031c.0209.015-.006.02.15583.095 .27631.127.5945.4681.84001.8474 .74203,1.1463.29033,2.4757-1.20146,3.151-.0541.015-.10661.036-.15653.061l-1.59885,1.1492-.15666.093 .0311.031c-.74391.3529-1.38673.837-1.81912,1.492-.64722.9804-.77556,2.1669-.42036,3.1857 .33675.9659 1.09261,1.7689 2.11488,2.2906 .056.028.0982.068.15583.095l1.58834,1.2258c.0466.048.099.09.15569.1257 .53724.2357.97622.5895 1.24556,1.0055 .74209,1.1461.29032,2.4757-1.20146,3.151-.0541.015-.10661.036-.15652.061l-1.59886,1.1491-.15666.093 .0311.031c-.74391.3529-1.38673.837-1.81912,1.4919-.64722.9805-.77555,2.1669-.42036,3.1857 .33676.9659 1.09261,1.769 2.11488,2.2907 .056.028.0982.067.15583.095l1.5882,1.257c.0466.048.099.091.15569.1257 .53725.2358.97622.5896 1.24556,1.0056 .7421,1.1461.29033,2.4757-1.20146,3.1509-.0541.015-.10661.035-.15652.061l-1.59885,1.1492-.15667.093 .0311.031c-.74391.3529-1.38673.8368-1.81912,1.4919-.64722.9805-.77555,2.1668-.42036,3.1857 .33676.9659 1.09261,1.7689 2.11488,2.2906 .056.028.0982.067.15583.095l1.58834,1.2258c.0466.048.099.09.1557.1257 .53724.2358.97622.5895 1.24556,1.0055 .74209,1.1461.29032,2.4757-1.20147,3.1509l-.15652.061-1.59885,1.1493-.15667.093 .0311.031c-.74391.3529-1.38673.8369-1.81913,1.492-.62769.9508-.77219,2.0985-.45119,3.0917 .31034.9603 1.0355,1.7818 2.02099,2.3215l.0934.062c.006.01-.007.026-.00014.031 .0821.064.19564.1332.34264.2515 .29399.2368.70768.5905 1.15195.9739 .85563.7385 1.83458,1.6651 2.45807,2.4171-.004.066-.011.1566-.0326.3124-.0517.3735-.15254.9624.11794,1.5943 .17984.4201.43192.6004.74598.9095s.7028.6583 1.15167,1.0364c.89773.7562 2.02266,1.6388 3.1139,2.5139 1.09125.8749 2.14959,1.7561 2.89543,2.4503l12.39581,10.0825c16.79651,1.274 33.59783,1.457 50.40684-.094z"},null,-1),d9=[h9],p9=["id"],_9=h("path",{d:"m1439.2 1276.6c-5.9251-5.1185-9.0216-12.798-10.741-20.437-2.7624-12.273-2.5088-25.093-5.5362-37.303-2.7675-11.162-8.1885-21.465-13.814-31.495-11.956-21.315-25.22-42.34-31.544-65.947-5.5801-20.83-5.4418-43.167 0.4371-63.914 4.531-15.991 12.442-31.028 23.146-43.742 11.453-13.603 26.051-24.486 42.19-31.952 15.868-7.3405 33.367-11.415 50.839-10.78 21.559 0.78271 42.541 8.7397 60.326 20.95 21.306 14.627 38.439 35.676 46.906 60.093 6.1972 17.871 7.696 37.302 4.6844 55.976-2.768 17.163-9.2518 33.566-17.476 48.884-8.8893 16.557-19.886 32.092-26.548 49.664-4.1426 10.926-6.5278 22.449-8.1082 34.027-1.1015 8.0697-1.8454 16.298-4.759 23.903-1.696 4.4272-4.1934 8.6704-7.9081 11.616-2.8319 2.2457-6.2591 3.6469-9.7701 4.5049s-7.1254 1.1968-10.727 1.5016c-7.2278 0.6116-14.466 1.0962-21.705 1.555-10.975 0.6955-21.974 1.3319-32.963 0.9187-4.7734-0.1795-9.5671-0.5615-14.198-1.733s-9.1175-3.1672-12.732-6.2899"},null,-1),C9=[_9],M9=["id"],g9=h("feGaussianBlur",{stdDeviation:".39491"},null,-1),m9=[g9],v9=["id"],b9=h("feGaussianBlur",{stdDeviation:".3825"},null,-1),z9=[b9],y9=["id"],x9=h("feGaussianBlur",{stdDeviation:".2649"},null,-1),w9=[x9],$9=["id"],T9=h("feGaussianBlur",{stdDeviation:"2.73839"},null,-1),E9=[T9],S9=["id"],I9=h("feGaussianBlur",{stdDeviation:"6.84564"},null,-1),A9=[I9],O9=["id"],B9=h("feGaussianBlur",{stdDeviation:"8.38728"},null,-1),F9=[B9],L9=["id"],k9=h("feGaussianBlur",{stdDeviation:".86518"},null,-1),P9=[k9],N9=["id"],R9=h("feGaussianBlur",{stdDeviation:"2.88393"},null,-1),U9=[R9],j9=["id"],D9=h("feGaussianBlur",{stdDeviation:"12.4"},null,-1),H9=[D9],K9=["id"],V9=E1('<stop stop-color="var(--q-1)" stop-opacity="0" offset="0"></stop><stop stop-color="var(--q-2)" stop-opacity="0" offset=".72366"></stop><stop stop-color="var(--q-3)" offset=".83213"></stop><stop stop-color="var(--q-4)" offset=".92827"></stop><stop stop-color="var(--q-5)" offset="1"></stop>',5),W9=[V9],q9=["id"],Y9=E1('<stop stop-color="var(--g-1)" offset="0"></stop><stop stop-color="var(--g-2)" offset=".7911"></stop><stop stop-color="var(--g-3)" offset=".87509"></stop><stop stop-color="var(--g-4)" offset=".95291"></stop><stop stop-color="var(--g-5)" offset="1"></stop>',5),G9=[Y9],J9=["id"],Q9=E1('<stop stop-color="var(--p-1)" offset="0"></stop><stop stop-color="var(--p-2)" offset=".05396"></stop><stop stop-color="var(--p-3)" offset=".13956"></stop><stop stop-color="var(--p-4)" offset=".23309"></stop><stop stop-color="var(--p-5)" offset=".358"></stop><stop stop-color="var(--p-6)" offset=".47632"></stop><stop stop-color="var(--p-7)" offset=".63574"></stop><stop stop-color="var(--p-8)" offset=".72366"></stop><stop stop-color="var(--p-9)" offset=".83213"></stop><stop stop-color="var(--p-10)" offset=".92827"></stop><stop stop-color="var(--p-11)" offset="1"></stop>',11),X9=[Q9],Z9=["id"],cc=E1('<stop stop-color="var(--r-1)" offset="0"></stop><stop stop-color="var(--r-2)" offset=".22628"></stop><stop stop-color="var(--r-3)" offset=".3566"></stop><stop stop-color="var(--r-4)" offset=".5296"></stop><stop stop-color="var(--r-5)" offset=".67068"></stop><stop stop-color="var(--r-6)" offset=".91711"></stop><stop stop-color="var(--r-7)" offset="1"></stop>',7),nc=[cc],tc=["id"],ec=E1('<stop stop-color="var(--s-1)" offset="0"></stop><stop stop-color="var(--s-2)" offset=".13651"></stop><stop stop-color="var(--s-3)" offset=".25"></stop><stop stop-color="var(--s-4)" offset=".44737"></stop><stop stop-color="var(--s-5)" offset=".61513"></stop><stop stop-color="var(--s-6)" offset=".87007"></stop><stop stop-color="var(--s-7)" offset="1"></stop>',7),sc=[ec],oc=["id"],rc=h("stop",{"stop-color":"var(--bulb-1)",offset:"0"},null,-1),ic=h("stop",{"stop-color":"var(--bulb-1)","stop-opacity":"0",offset:"1"},null,-1),lc=[rc,ic],ac=["id"],fc=h("stop",{"stop-color":"var(--glare-1)",offset:"0"},null,-1),uc=h("stop",{"stop-color":"var(--glare-1)","stop-opacity":".49804",offset:".30486"},null,-1),hc=h("stop",{"stop-color":"var(--glare-1)","stop-opacity":"0",offset:"1"},null,-1),dc=[fc,uc,hc],pc=["id"],_c=E1('<stop offset="0"></stop><stop stop-color="var(--l-1)" offset=".13511"></stop><stop stop-color="var(--l-2)" offset=".22977"></stop><stop stop-color="var(--l-3)" offset=".33936"></stop><stop stop-color="var(--l-4)" offset=".42978"></stop><stop stop-color="var(--l-5)" stop-opacity=".47843" offset=".51595"></stop><stop stop-color="var(--l-5)" stop-opacity=".41176" offset=".58298"></stop><stop stop-color="var(--l-5)" stop-opacity=".32549" offset=".667"></stop><stop stop-color="var(--l-5)" stop-opacity=".24314" offset=".74786"></stop><stop stop-color="var(--l-5)" stop-opacity=".1451" offset=".84893"></stop><stop stop-color="var(--l-5)" stop-opacity=".07843" offset=".917"></stop><stop stop-color="var(--l-5)" stop-opacity="0" offset="1"></stop>',12),Cc=[_c],Mc=["id","xlink:href"],gc=["id","xlink:href"],mc=["id","xlink:href"],vc=["id","xlink:href"],bc=["id","xlink:href"],zc=["id","xlink:href"],yc=["id","xlink:href"],xc=["id","xlink:href"],wc=["id"],$c=E1('<stop stop-color="var(--b-1)" offset="0"></stop><stop stop-color="var(--b-2)" offset=".70077"></stop><stop stop-color="var(--b-3)" offset=".84687"></stop><stop stop-color="var(--b-4)" offset=".97479"></stop><stop stop-color="var(--b-5)" offset="1"></stop>',5),Tc=[$c],Ec=["id","xlink:href"],Sc=["id","xlink:href"],Ic=["id","xlink:href"],Ac={transform:"translate(-1225 -900.72)"},Oc=["stroke"],Bc={transform:"translate(856.64 417.37)"},Fc={transform:"translate(248.57 38.571)"},Lc={transform:"translate(200.38 -11.617)"},kc=["fill"],Pc=["fill","filter"],Nc=["fill"],Rc=["fill","filter"],Uc=["fill","filter"],jc=["fill"],Dc=["fill","filter"],Hc=["fill","filter"],Kc=E1('<path d="m219.46 807.4c0.68589-19.692 1.3387-39.386 1.9583-59.081 0.41968-13.339 0.81452-26.808-1.7057-39.914-1.8893-9.8246-5.3836-19.259-8.9681-28.6-7.7383-20.164-15.969-40.139-24.683-59.901l0.91348-0.11736 5.6876 12.523" fill="none" stroke="var(--fill-1)" stroke-linecap="round" stroke-linejoin="round"></path><path d="m250.45 807.4c-0.68589-19.692-1.3387-39.386-1.9583-59.081-0.41968-13.339-0.81452-26.808 1.7057-39.914 1.8893-9.8246 5.3836-19.259 8.9681-28.6 7.7383-20.164 15.969-40.139 24.683-59.901l-0.91348-0.11736-5.6876 12.523" fill="none" stroke="var(--fill-1)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="matrix(.85917 0 0 .8292 33.074 102.54)" fill="none" stroke="var(--fill-1)" stroke-width=".5"><path d="m201.02 602.09c0.93231 2.78 1.9859 5.5193 3.1567 8.2075 0.58746 1.3488 1.2277 2.7184 2.2848 3.7416 0.52852 0.51161 1.1586 0.92744 1.8584 1.1542s1.4711 0.25731 2.1703 0.0287c0.70891-0.23179 1.3204-0.72293 1.7484-1.3337s0.6782-1.3363 0.77694-2.0755c0.16612-1.2437-0.11517-2.577-0.92028-3.5394-0.40256-0.48121-0.92956-0.86154-1.5217-1.069s-1.2486-0.23814-1.8512-0.0635c-0.46221 0.13392-0.88733 0.38548-1.2419 0.71084s-0.63948 0.72335-0.85269 1.1548c-0.42642 0.86283-0.56294 1.8439-0.55707 2.8064 0.0109 1.7918 0.49458 3.5548 1.1869 5.2074s1.5914 3.209 2.4749 4.7678c3.316 5.8507 6.4458 11.805 9.7227 17.678 3.4578 6.1971 7.0792 12.303 10.859 18.309"></path><path d="m268.7 602.09c-0.93231 2.78-1.9859 5.5193-3.1567 8.2075-0.58746 1.3488-1.2277 2.7184-2.2848 3.7416-0.52852 0.51161-1.1586 0.92744-1.8584 1.1542s-1.4711 0.25731-2.1703 0.0287c-0.70891-0.23179-1.3204-0.72293-1.7484-1.3337s-0.6782-1.3363-0.77694-2.0755c-0.16612-1.2437 0.11517-2.577 0.92028-3.5394 0.40256-0.48121 0.92956-0.86154 1.5217-1.069s1.2486-0.23814 1.8512-0.0636c0.46221 0.13392 0.88733 0.38548 1.2419 0.71084s0.63948 0.72335 0.85269 1.1548c0.42642 0.86283 0.56294 1.8439 0.55707 2.8064-0.0109 1.7918-0.49458 3.5548-1.1869 5.2074s-1.5914 3.209-2.4749 4.7678c-3.316 5.8507-6.4458 11.805-9.7227 17.678-3.4578 6.1971-7.0792 12.303-10.859 18.309"></path></g>',3),Vc=["filter"],Wc={transform:"translate(-147.08 -36.77)",class:"light-bulb__body"},qc=["clip-path"],Yc=["filter"],Gc=["filter"],Jc=["fill"],Qc=["fill"],Xc={transform:"translate(588.08 343.37)"},Zc=["stroke"],cn=h("path",{d:"m725.20988,985.30152 .375.53125 6.03125,5.62505c1.38304,1.4423 2.67121,3.0742 3.9375,4.75 .55097.7291 1.09257,1.2257 1.28125,1.7187-.0789.1055-.125.235-.125.3437 0,.174.11371.33468.3125.49998 1.59035,1.3226 9.24804,2.3126 18.46875,2.3126 10.3733,0 18.78125-1.2468 18.78125-2.81258 0-.1413-.0864-.3016-.21875-.4374 .004-.1464.0275-.6391.625-1.5626 .67573-1.0443 1.78125-2.625 1.78125-2.625-.0831-.41554 3.33935-3.4514 3.8125-4.0624l1.39071-1.04481-56.45321-3.23649z",fill:"var(--fill-5)"},null,-1),nn=["fill"],tn={transform:"translate(920.22 251.16)"},en=["fill"],sn=["fill"],on=["fill"],rn=["clip-path"],ln={transform:"matrix(1.0587 0 0 1 162.17 164.04)"},an=["fill"],fn=["fill"],un={transform:"matrix(1.0587 0 0 1 162.17 150.61)"},hn=["fill"],dn=["fill"],pn={transform:"matrix(1.0587 0 0 1 162.17 137.01)"},_n=["fill"],Cn=["fill"],Mn={transform:"matrix(1.0587 0 0 1 162.17 123.42)"},gn=["fill"],mn=["fill"],vn=["fill"],bn=["stroke"],zn={__name:"IconLightBulb",setup(c){const n=Math.floor(Math.random()*1e6);return(t,e)=>(t1(),f1("svg",f9,[h("defs",null,[h("clipPath",{id:`v-${_(n)}`},d9,8,u9),h("clipPath",{id:`ae-${_(n)}`},C9,8,p9),h("filter",{id:`u-${_(n)}`},m9,8,M9),h("filter",{id:`d-${_(n)}`},z9,8,v9),h("filter",{id:`t-${_(n)}`},w9,8,y9),h("filter",{id:`ad-${_(n)}`},E9,8,$9),h("filter",{id:`ab-${_(n)}`},A9,8,S9),h("filter",{id:`y-${_(n)}`},F9,8,O9),h("filter",{id:`ac-${_(n)}`,x:"-.02114",y:"-.12112",width:"1.0423",height:"1.2422"},P9,8,L9),h("filter",{id:`aa-${_(n)}`,x:"-.07047",y:"-.40375",width:"1.141",height:"1.8075"},U9,8,N9),h("filter",{id:`z-${_(n)}`,x:"-.24",y:"-.24",width:"1.48",height:"1.48"},H9,8,j9),h("linearGradient",{id:`q-${_(n)}`},W9,8,K9),h("linearGradient",{id:`g-${_(n)}`},G9,8,q9),h("linearGradient",{id:`p-${_(n)}`},X9,8,J9),h("linearGradient",{id:`r-${_(n)}`},nc,8,Z9),h("linearGradient",{id:`s-${_(n)}`},sc,8,tc),h("linearGradient",{id:`bulb-${_(n)}`,x1:"1372.1",x2:"1606.2",gradientUnits:"userSpaceOnUse"},lc,8,oc),h("linearGradient",{id:`glare-${_(n)}`,x1:"1256.8",x2:"1410.8",y1:"1026",y2:"1068",gradientUnits:"userSpaceOnUse"},dc,8,ac),h("linearGradient",{id:`l-${_(n)}`,x1:"703.29",x2:"768.23",y1:"999.56",y2:"962.79",gradientUnits:"userSpaceOnUse"},Cc,8,pc),h("linearGradient",{id:`f-${_(n)}`,x1:"751.38",x2:"768.55",gradientUnits:"userSpaceOnUse","xlink:href":`#g-${_(n)}`},null,8,Mc),h("linearGradient",{id:`o-${_(n)}`,x1:"15.681",x2:"53.916",gradientUnits:"userSpaceOnUse","xlink:href":`#s-${_(n)}`},null,8,gc),h("linearGradient",{id:`n-${_(n)}`,x2:"0",y1:"777.79",y2:"793.7",gradientUnits:"userSpaceOnUse","xlink:href":`#r-${_(n)}`},null,8,mc),h("linearGradient",{id:`e-${_(n)}`,x1:"27.949",x2:"41.52",gradientUnits:"userSpaceOnUse","xlink:href":`#s-${_(n)}`},null,8,vc),h("linearGradient",{id:`m-${_(n)}`,x1:"662.91",x2:"705.34",gradientUnits:"userSpaceOnUse","xlink:href":`#p-${_(n)}`},null,8,bc),h("linearGradient",{id:`k-${_(n)}`,x1:"367.69",x2:"473.65",gradientUnits:"userSpaceOnUse","xlink:href":`#p-${_(n)}`},null,8,zc),h("linearGradient",{id:`j-${_(n)}`,x1:"380.26",x2:"438.85",y1:"1043.2",y2:"1096.7",gradientUnits:"userSpaceOnUse","xlink:href":`#q-${_(n)}`},null,8,yc),h("linearGradient",{id:`i-${_(n)}`,x1:"446.04",x2:"370.63",y1:"1006.8",y2:"1073.8",gradientUnits:"userSpaceOnUse","xlink:href":`#q-${_(n)}`},null,8,xc),h("radialGradient",{id:`b-${_(n)}`,cx:"163.69",cy:"809.36",r:"52.149",gradientTransform:"matrix(1.3905 -.04109 .01303 .44111 113.49 576.22)",gradientUnits:"userSpaceOnUse"},Tc,8,wc),h("radialGradient",{id:`c-${_(n)}`,cx:"517.5",cy:"797.36",r:"8.9286",gradientTransform:"matrix(1 0 0 .88 0 95.683)",gradientUnits:"userSpaceOnUse","xlink:href":`#r-${_(n)}`},null,8,Ec),h("radialGradient",{id:`a-${_(n)}`,cx:"161.71",cy:"814.47",r:"52.149",gradientTransform:"matrix(1.3148 -.0234 .00685 .38483 132.14 625.74)",gradientUnits:"userSpaceOnUse","xlink:href":`#g-${_(n)}`},null,8,Sc),h("radialGradient",{id:`h-${_(n)}`,cx:"161.71",cy:"814.47",r:"52.149",gradientTransform:"matrix(1.392 -.0234 .00725 .38483 302.06 735.57)",gradientUnits:"userSpaceOnUse","xlink:href":`#g-${_(n)}`},null,8,Ic)]),h("g",Ac,[h("path",{transform:"matrix(6.3617 0 0 2.0454 -3493.8 -537.55)",d:"m768.27 868.87c0 2.1479-3.7198 3.8891-8.3085 3.8891s-8.3085-1.7412-8.3085-3.8891 3.7198-3.8891 8.3085-3.8891 8.3085 1.7412 8.3085 3.8891z",fill:"var(--fill-0)",stroke:`url(#f-${_(n)})`,"stroke-width":".55443"},null,8,Oc),h("g",Bc,[h("g",Fc,[h("g",Lc,[h("path",{d:"m17.824 721.35c3.6714-1.9958 7.9091-2.9342 12.059-3.4283 4.1828-0.49803 8.5156-0.41173 12.627 0.50508 4.0198 0.8964 8.5201 1.8402 11.386 4.7982 0.57689 0.59545 0.76246 1.5027 0.89286 2.3214 0.91291 5.732-0.37306 11.609-0.89286 17.39-0.44275 4.9241-1.9948 9.7674-1.894 14.71 0.0766 3.7565 1.5772 7.3678 1.894 11.112 1.31 15.481 0 46.609 0 46.609h-38.214c0.0188-13.916-1.389-31.141 0.0605-46.609 0.35161-3.7522 2.0094-7.3439 2.086-11.112 0.10077-4.9544-1.7879-9.768-2.1466-14.71-0.47561-6.5532-2.715-13.728 0-19.711 0.39219-0.8643 1.309-1.4217 2.1429-1.875z",fill:`url(#o-${_(n)})`,opacity:".7"},null,8,kc),h("path",{transform:"matrix(1 0 0 2.0562 -478.59 -859.69)",d:"m512.98 779.49c3.3671 0.01 6.7225 0.53445 10.089 0.49108 2.4023-0.031 5.4457-2.1904 7.1875-0.53572 1.8669 1.7736-0.19895 5.1481-0.17858 7.723 0.0181 2.2933 1.8407 5.2059 0.26786 6.875-4.0014 4.2462-11.667 0.46901-17.5 0.35714-5.3207-0.10204-12.236 2.886-15.937-0.9375-1.5738-1.6256-0.0478-4.5267-0.17866-6.7855-0.1253-2.1628-2.0084-4.8441-0.58037-6.4732 1.404-1.6016 4.256-0.17775 6.384-0.26787 3.4822-0.14746 6.9612-0.45675 10.446-0.44642z",fill:`url(#n-${_(n)})`,filter:`url(#u-${_(n)})`},null,8,Pc),h("path",{d:"m27.948 764.31h13.571v61.071h-13.571v-61.071",fill:`url(#e-${_(n)})`,opacity:".7"},null,8,Nc),h("path",{transform:"matrix(1.05 0 0 .61932 -508.64 271.13)",d:"m526.43 797.36c0 4.3394-3.9975 7.8572-8.9286 7.8572s-8.9286-3.5178-8.9286-7.8572 3.9975-7.8571 8.9286-7.8571 8.9286 3.5178 8.9286 7.8571z",fill:`url(#c-${_(n)})`,filter:`url(#t-${_(n)})`,opacity:".5"},null,8,Rc),h("path",{transform:"matrix(2.17 0 0 .8608 -1088.2 38.118)",d:"m526.43 797.36c0 4.3394-3.9975 7.8572-8.9286 7.8572s-8.9286-3.5178-8.9286-7.8572 3.9975-7.8571 8.9286-7.8571 8.9286 3.5178 8.9286 7.8571z",fill:`url(#c-${_(n)})`,filter:`url(#d-${_(n)})`,opacity:".5"},null,8,Uc),h("path",{d:"m27.948 657.04h13.571v66.428h-13.571v-66.428",fill:`url(#e-${_(n)})`,opacity:".7"},null,8,jc),h("path",{transform:"matrix(1.1316 0 0 .4489 -550.89 302.72)",d:"m526.43 797.36c0 4.3394-3.9975 7.8572-8.9286 7.8572s-8.9286-3.5178-8.9286-7.8572 3.9975-7.8571 8.9286-7.8571 8.9286 3.5178 8.9286 7.8571z",fill:`url(#c-${_(n)})`,filter:`url(#d-${_(n)})`},null,8,Dc),h("path",{transform:"matrix(1.1316 0 0 .4489 -550.89 301.83)",d:"m526.43 797.36c0 4.3394-3.9975 7.8572-8.9286 7.8572s-8.9286-3.5178-8.9286-7.8572 3.9975-7.8571 8.9286-7.8571 8.9286 3.5178 8.9286 7.8571z",fill:`url(#c-${_(n)})`,filter:`url(#d-${_(n)})`},null,8,Hc)]),Kc]),h("path",{d:"m434.64 664.15 27.5-17.143 41.786 0.35714 28.929 14.643",class:"light-bulb__spiral",filter:`url(#ac-${_(n)})`},null,8,Vc)]),h("g",Wc,[h("g",{transform:"translate(-1.4142,.70715)","clip-path":`url(#ae-${_(n)})`},[h("path",{d:"m1488.9 965.11c-15.196 0.2588-30.532 4.5861-44.344 10.906-15.99 7.3168-30.727 18.468-42.188 31.969-10.636 12.53-19.123 27.67-23.156 43.719-5.1855 20.634-5.0706 43.154-0.4375 63.938 5.3141 23.838 21.408 43.781 31.562 65.938 4.7753 10.419 10.638 20.468 13.812 31.5 3.4735 12.07 1.637 25.344 5.5313 37.281 2.3916 7.331 4.8586 15.566 10.75 20.438 7.2624 6.0049 17.632 6.8093 26.906 8.0312 10.903 1.4363 21.99-0.3602 32.969-0.9062 7.2445-0.3604 14.578-0.2753 21.719-1.5626 7.0018-1.262 14.725-1.781 20.5-6 3.7598-2.7466 6.0913-7.2907 7.9063-11.625 3.1309-7.4768 3.0153-15.971 4.75-23.906 2.4905-11.393 3.9682-23.144 8.0937-34.031 6.6637-17.586 18.951-32.474 26.562-49.656 7.0023-15.806 15.227-31.681 17.469-48.875 2.4197-18.558 2.109-38.561-4.6875-55.969-9.2806-23.771-26.367-45.352-46.906-60.094-17.369-12.466-39.114-19.634-60.312-20.969-2.1604-0.136-4.3291-0.1619-6.5-0.125zm0.4063 40.187c1.5-0.025 3.0309 0.025 4.625 0.125 17.011 1.0715 34.93 7.0653 48.25 16.625 16.773 12.038 31.312 30.446 38.812 49.656 4.6913 12.016 5.3913 28.348 3.2812 44.531-1.5375 11.792-8.2945 25.813-15.688 42.5-5.875 13.261-18.554 28.472-27.031 50.844-5.4365 14.348-6.8743 27.271-9.0625 37.281-2.5192 11.524-2.8688 18.399-3.5 19.906-0.3835 0.9158-0.5637 1.1324-0.8438 1.5937-1.4127 0.2698-4.6481 1.1154-10.25 2.125-4.1674 0.7514-10.481 0.8075-18.75 1.2188-12.772 0.6352-22.43 1.9305-28.781 1.0938-9.5245-1.2551-14.278-2.7813-14.656-2.7813-9e-4 0 1e-3 -0.031 0-0.031-0.1827-0.7699-2.0567-4.0785-3.9375-9.8437-1.6478-5.0511 0.017-18.01-5.3125-36.531-4.2396-14.733-10.868-25.734-15-34.75-11.828-25.807-26.254-44.51-30-61.312-3.8765-17.389-3.912-36.502 0.2813-53.188 2.9992-11.934 9.7493-24.25 18.344-34.375 9.1744-10.808 21.322-19.985 34.125-25.844 11.57-5.2942 24.072-8.6561 35.094-8.8438z","clip-path":"none",fill:"var(--fill-3)",filter:`url(#ab-${_(n)})`,opacity:".36688"},null,8,Yc),h("path",{d:"m1488.9 970.05c-15.196 0.2587-30.532 4.6173-44.344 10.938-15.99 7.3168-30.727 18.468-42.188 31.969-10.636 12.53-19.092 27.67-23.125 43.719-5.1855 20.634-5.0706 43.154-0.4375 63.938 5.3141 23.838 21.376 43.781 31.531 65.938 4.7753 10.419 10.638 20.468 13.812 31.5 3.4735 12.07 1.6369 25.344 5.5312 37.281 2.3916 7.331 4.8586 15.566 10.75 20.438 7.2624 6.005 17.664 6.8093 26.938 8.0312 10.903 1.4363 21.99-0.3602 32.969-0.9062 7.2445-0.3603 14.547-0.2752 21.688-1.5625 7.0018-1.2621 14.725-1.7811 20.5-6 3.7598-2.7467 6.0912-7.2907 7.9062-11.625 3.1309-7.4769 3.0153-15.971 4.75-23.906 2.4905-11.393 3.9995-23.144 8.125-34.031 6.6637-17.586 18.919-32.475 26.531-49.656 7.0023-15.806 15.258-31.681 17.5-48.875 2.4197-18.558 2.109-38.592-4.6875-56-9.2806-23.771-26.367-45.321-46.906-60.062-17.369-12.466-39.145-19.634-60.344-20.969-2.1604-0.1361-4.3292-0.1932-6.5-0.1562zm3.1875 7.75c1.0387 0 2.0871 0.025 3.125 0.062 20.49 0.7438 40.65 8.332 57.781 20.094 20.52 14.088 36.974 34.394 45.062 57.719 5.9217 17.077 7.3877 35.688 4.5 53.594-2.6565 16.472-8.9244 32.392-16.969 47.375-8.702 16.208-19.831 31.918-26.781 50.25-4.3222 11.4-6.7952 23.292-8.4062 35.094-1.1219 8.2188-1.8727 16.036-4.4688 22.812-1.4996 3.9145-3.6384 7.3677-6.4062 9.5625-2.105 1.6692-4.8936 2.8499-7.9375 3.5938-3.054 0.7463-6.3957 1.0726-9.9688 1.375-7.1743 0.6071-14.4 1.1046-21.625 1.5625-10.963 0.6947-21.76 1.339-32.438 0.9375-4.6268-0.174-9.1062-0.5846-13.219-1.625-4.0894-1.0346-7.8593-2.7528-10.75-5.25-4.7493-4.1028-7.5894-10.744-9.1875-17.844-2.59-11.507-2.3296-24.367-5.5625-37.406-2.9546-11.916-8.6121-22.612-14.281-32.719-12.04-21.465-25.053-42.145-31.125-64.812-5.3518-19.978-5.1992-41.451 0.4375-61.344 4.3453-15.335 11.936-29.793 22.188-41.969 10.968-13.027 25.005-23.474 40.531-30.656 14.305-6.6173 29.92-10.45 45.5-10.406z","clip-path":"none",fill:"var(--fill-4)",filter:`url(#ad-${_(n)})`},null,8,Gc)],8,qc),h("path",{d:"m1437.8 1277.3c-5.9251-5.1185-9.0216-12.798-10.741-20.437-2.7624-12.273-2.5088-25.093-5.5362-37.303-2.7675-11.162-8.1885-21.465-13.814-31.495-11.956-21.315-25.22-42.34-31.544-65.947-5.5801-20.83-5.4418-43.167 0.4371-63.914 4.531-15.991 12.442-31.028 23.146-43.742 11.454-13.603 26.051-24.486 42.19-31.952 15.868-7.3405 33.367-11.415 50.839-10.781 21.559 0.7827 42.541 8.7398 60.326 20.95 21.305 14.627 38.439 35.675 46.906 60.092 6.1972 17.871 7.696 37.302 4.6844 55.976-2.768 17.163-9.2518 33.566-17.476 48.884-8.8893 16.557-19.886 32.092-26.548 49.664-4.1426 10.926-6.5278 22.449-8.1082 34.027-1.1015 8.0697-1.8454 16.298-4.759 23.903-1.696 4.4272-4.1934 8.6704-7.9081 11.616-2.8319 2.2457-6.2591 3.6469-9.7701 4.5049s-7.1254 1.1968-10.727 1.5016c-7.2278 0.6116-14.466 1.0962-21.705 1.555-10.975 0.6955-21.974 1.3319-32.963 0.9187-4.7734-0.1795-9.5671-0.5615-14.198-1.733s-9.1175-3.1672-12.732-6.2899",fill:`url(#bulb-${_(n)})`,opacity:".36688"},null,8,Jc)]),h("path",{d:"m1306.4 967.93c-13.791 2.008-24.544 14.269-33.64 24.828-9.3091 10.807-16.544 23.982-20.031 37.812-4.505 17.868-4.3911 37.297-0.375 55.281 4.5927 20.567 18.501 37.874 27.281 57.031 4.1277 9.0063 9.1979 17.698 11.938 27.219 3.008 10.454 1.3988 21.943 4.7813 32.281 2.069 6.324 4.1702 13.434 9.3125 17.656 6.258 5.139 15.349 5.3109 23.281 6.9375 0.8012 0.1643 1.8186 0.816 2.4375 0.2813 2.3105-1.9964 0.153-6.1055 0.2813-9.1563 1.6749-39.855 6.6958-79.611 6.375-119.5-0.3287-40.868 16.128-89.698-8.5-122.31-4.9423-6.545-15.025-9.5407-23.141-8.3591z",fill:`url(#glare-${_(n)})`,opacity:".7"},null,8,Qc),h("g",Xc,[h("path",{transform:"matrix(.88542 0 0 .4717 149.83 532.39)",d:"m705.34 988.37c0 3.3194-9.4975 6.0104-21.213 6.0104s-21.213-2.691-21.213-6.0104 9.4975-6.0104 21.213-6.0104 21.213 2.691 21.213 6.0104z",fill:"none",stroke:`url(#m-${_(n)})`,"stroke-width":"3.0947"},null,8,Zc),cn,h("path",{d:"m725.20988,985.30151 .375.53125 6.03125,5.62505c1.38304,1.4423 2.67121,3.0742 3.9375,4.75 .55097.7291 1.09257,1.2257 1.28125,1.7187-.0789.1055-.125.235-.125.3437 0,.174.11371.3347.3125.5 1.59035,1.32259 9.24804,2.31259 18.46875,2.31259 10.3733,0 18.78125-1.24679 18.78125-2.81259 0-.1413-.0864-.3016-.21875-.4374 .004-.1464.0275-.6391.625-1.5626 .67573-1.0443 1.78125-2.625 1.78125-2.625-.0831-.41554 3.33935-3.4514 3.8125-4.0624l1.39071-1.04481-56.45321-3.23649z",fill:`url(#l-${_(n)})`},null,8,nn)]),h("g",tn,[h("path",{d:"m447.12731,1081.3965c8.15772-6.5346 16.31525-13.0693 22.63249-21.2143 1.09925-1.7053-.19062-3.2289-.24463-3.2444-1.48878-.6819-2.19983-1.4831-1.45267-2.626 .27118-.4147.71172-.7665 1.25-1 .0568-.035.10942-.077.15625-.125l1.59375-1.2187c.0577-.026.10015-.065.15625-.094 1.02457-.5171 1.78397-1.3168 2.125-2.2813 .3597-1.0172.23662-2.2042-.40625-3.1875-.42949-.6569-1.07016-1.1437-1.8125-1.5l.0312-.031-.1562-.094-1.59375-1.1563c-.0498-.026-.10224-.047-.15625-.062-1.48878-.6818-1.93466-2.0134-1.1875-3.1562 .27118-.4148.71172-.7666 1.25-1 .0568-.035.10942-.077.15625-.125l1.59375-1.25c.0577-.026.10015-.065.15625-.094 1.02457-.5171 1.78397-1.3168 2.125-2.2813 .3597-1.0172.23662-2.2042-.40625-3.1875-.42949-.6569-1.07016-1.1437-1.8125-1.5l.0312-.031-.15625-.094-1.59375-1.1562c-.0498-.026-.10224-.047-.15625-.062-1.48878-.6819-1.93466-2.0134-1.1875-3.1563 .27118-.4147.71172-.7665 1.25-1 .0568-.035.10942-.077.15625-.125l1.59375-1.2187c.0577-.026.10015-.065.15625-.094 1.02457-.5171 1.78397-1.3168 2.125-2.2813 .3597-1.0172.23662-2.2042-.40625-3.1875-.42949-.6569-1.07016-1.1437-1.8125-1.5l.0313-.031-.15625-.094-1.59375-1.1562c-.0498-.026-.10224-.047-.15625-.062-1.48879-.6819-1.9346-2.0133-1.1875-3.1563 .24719-.3781.56688-.7179.84375-.8437 .16252-.074.13521-.079.15625-.094l.0625-.031c.0332-.026.0498-.058.0937-.094 .0879-.071.23184-.1621.375-.2813 .28631-.2383.64977-.5629 1.09375-.9375 .88796-.749 1.59812-1.169 2.5085-1.9384 .0255-5.2522.19504-11.93768.45126-17.49023-45.41717,11.83543-86.88995,4.95496-105.10378-1.30264-1.75611,2.51873-.23505,6.23018-.45754,9.12408 .64726.86066 1.31918,1.69909 1.85166,2.60709 .91038.7694 2.01829,1.7197 2.90625,2.4687 .44398.3746.80744.6992 1.09375.9375 .14316.1192.2871.21.375.2813 .0439.036.0606.068.0937.094l.0625.031c.021.015-.006.02.15625.094 .27687.1258.59656.4656.84375.8437 .7471,1.143.30129,2.4744-1.1875,3.1563-.054.015-.10645.036-.15625.062l-1.59375,1.1562-.15625.094 .0312.031c-.74234.3562-1.38301.8431-1.8125,1.5-.64287.9833-.76595,2.1703-.40625,3.1875 .34103.9644 1.10043,1.7642 2.125,2.2813 .0561.028.0985.067.15625.094l1.59375,1.2187c.0468.048.0994.09.15625.125 .53828.2335.97882.5852 1.25,1 .74716,1.1429.30128,2.4744-1.1875,3.1563l-.15625.062-1.59375,1.1562-.15625.094 .0312.031c-.74234.3562-1.38301.8431-1.8125,1.5-.64287.9833-.76595,2.1703-.40625,3.1875 .34103.9644 1.10043,1.7642 2.125,2.2813 .0561.028.0985.067.15625.094l1.59375,1.25c.0468.048.0994.09.15625.125 .53828.2334.97882.5852 1.25,1 .74716,1.1428.30128,2.4744-1.1875,3.1562l-.15625.062-1.59375,1.1563-.15625.094 .0312.031c-.74234.3562-1.38301.843-1.8125,1.5-.64287.9833-.76595,2.1703-.40625,3.1875 .34103.9644 1.10043,1.7641 2.125,2.2812 .0561.028.0985.067.15625.094l1.59375,1.2188c.0468.048.0994.09.15625.125 .53828.2334.97882.5852 1.25,1 .74716,1.1428.30128,2.4744-1.1875,3.1562-.054.015-.10645.036-.15625.062l-1.59375,1.1563-.15625.094 .0312.031c-.74234.3562-1.38301.843-1.8125,1.5-.62348.9536-.76289,2.1019-.4375,3.0937 .31459.9589 1.04338,1.7773 2.03125,2.3125l.0937.062c.006,0-.007.026 0,.031 .0824.064.19623.1323.34375.25 .29504.2355.71029.5873 1.15625.9688 .85889.7347 1.84194,1.6569 2.46875,2.4062-.004.066-.0103.1566-.0312.3125-.05.3737-.14827.9631.125,1.5938 .1817.4193.43458.5986.75.9062s.70571.6552 1.15625,1.0313c.90107.7522 2.02989,1.6299 3.125,2.5s2.15734,1.7466 2.90625,2.4375l12.44033,10.0276c16.80198,1.1996 33.60395,1.3082 50.40593-.3172z",fill:`url(#k-${_(n)})`},null,8,en),h("path",{d:"m448.39042,1081.3963c8.15772-6.5346 16.31525-13.0693 22.63249-21.2143 1.09925-1.7053-.19062-3.2289-.24463-3.2444-48.55977.6981-111.63031-35.4263-99.35912-.064 .31459.9589 1.04338,1.7773 2.03125,2.3125l.0937.062c.006,0-.007.026 0,.031 .0824.064.19623.1323.34375.25 .29504.2355.71029.5873 1.15625.9688 .85889.7347 1.84194,1.6569 2.46875,2.4062-.004.066-.0103.1566-.0312.3125-.05.3737-.14827.9631.125,1.5938 .1817.4193.43458.5986.75.9062s.70571.6552 1.15625,1.0313c.90107.7522 2.02989,1.6299 3.125,2.5s2.15734,1.7466 2.90625,2.4375l12.44033,10.0276c16.80198,1.1996 33.60395,1.3082 50.40593-.3172v.0007-.0002z",fill:`url(#j-${_(n)})`},null,8,sn),h("path",{d:"m447.17276,1081.3079c8.15772-6.5346 16.31525-13.0693 22.63249-21.2143 1.09925-1.7053-.19062-3.2289-.24463-3.2444l-99.35912-.064c.31459.9589 1.04338,1.7773 2.03125,2.3125l.0937.062c.006,0-.007.026 0,.031 .0824.064.19623.1323.34375.25 .29504.2355.71029.5873 1.15625.9688 .85889.7347 1.84194,1.6569 2.46875,2.4062-.004.066-.0103.1566-.0312.3125-.05.3737-.14827.9631.125,1.5938 .1817.4193.43458.5986.75.9062s.70571.6552 1.15625,1.0313c.90107.7522 2.02989,1.6299 3.125,2.5s2.15734,1.7466 2.90625,2.4375l12.44033,10.0276c16.80198,1.1996 33.60395,1.3082 50.40593-.3172v.0007-.0002z",fill:`url(#i-${_(n)})`},null,8,on),h("g",{transform:"matrix(.99999 -.00443 .00443 .99999 -123.01 -55.203)","clip-path":`url(#v-${_(n)})`},[h("g",ln,[h("path",{d:"m321.04 940.01c4.0427 0.50361 8.1207 0.67151 12.186 0.92982 4.1296 0.26237 8.2599 0.65609 12.398 0.62967 5.483-0.035 10.95-0.60669 16.416-1.0441 6.1346-0.49093 12.315-0.71225 18.377-1.7733 4.4049-0.77098 8.7555-1.9076 12.997-3.3236 2.6096-0.87116 5.6518-1.9246 7.6211-3.1687 3.9902-2.3292 0.97428 1.497 1.162 4.0082 0.12442 1.6648 4.5132 1.4376 2.1498 3.2047-1.2018 0.89858-8.0655 3.9-12.322 5.246-4.1722 1.3195-8.5233 2.0145-12.839 2.7379-5.9417 0.99606-11.934 1.7196-17.939 2.2011-4.4972 0.36059-9.0135 0.49632-13.525 0.51335-4.6942 0.0177-9.3915-0.12774-14.076-0.42788-5.4792-0.35105-11-0.57491-16.393-1.6047-2.649-0.50582-5.9899-1.4333-7.7762-2.2341-2.6287-1.1785 1.686-2.0421 1.6142-3.5152-0.0876-1.797-3.9414-4.6548-0.96626-4.2722 3.4 0.43727 7.2506 1.4365 10.915 1.8929z",fill:`url(#b-${_(n)})`},null,8,an),h("path",{d:"m321.18 947.55c8.5024 0.95853 17.054 1.5951 25.611 1.7381 12.372-0.32062 23.617-1.1963 35.106-3.2638 7.1712-1.3705 14.451-2.9574 20.842-6.6262 3.9902-2.3292 5.9296-1.137 6.1173 1.3743 0.12442 1.6648-0.71006 3.7144-3.0734 5.4815-8.1958 3.1395-16.838 5.4463-25.473 7.0911-10.286 1.5724-20.701 2.4662-31.107 2.6251-10.131-0.28571-20.317-0.56243-30.38-1.854-2.9585-0.44691-6.972-1.1654-8.7583-1.9663-2.6287-1.1785-3.3586-2.7564-3.4304-4.2295-0.0876-1.797 0.83544-2.512 3.8105-2.1294 3.4 0.43727 7.2592 1.3244 10.736 1.759z",fill:`url(#a-${_(n)})`},null,8,fn)]),h("g",un,[h("path",{d:"m321.04 940.01c4.0427 0.50361 8.1207 0.67151 12.186 0.92982 4.1296 0.26237 8.2599 0.65609 12.398 0.62967 5.483-0.035 10.95-0.60669 16.416-1.0441 6.1346-0.49093 12.315-0.71225 18.377-1.7733 4.4049-0.77098 8.7555-1.9076 12.997-3.3236 2.6096-0.87116 5.6518-1.9246 7.6211-3.1687 3.9902-2.3292 0.97428 1.497 1.162 4.0082 0.12442 1.6648 4.5132 1.4376 2.1498 3.2047-1.2018 0.89858-8.0655 3.9-12.322 5.246-4.1722 1.3195-8.5233 2.0145-12.839 2.7379-5.9417 0.99606-11.934 1.7196-17.939 2.2011-4.4972 0.36059-9.0135 0.49632-13.525 0.51335-4.6942 0.0177-9.3915-0.12774-14.076-0.42788-5.4792-0.35105-11-0.57491-16.393-1.6047-2.649-0.50582-5.9899-1.4333-7.7762-2.2341-2.6287-1.1785 1.686-2.0421 1.6142-3.5152-0.0876-1.797-3.9414-4.6548-0.96626-4.2722 3.4 0.43727 7.2506 1.4365 10.915 1.8929z",fill:`url(#b-${_(n)})`},null,8,hn),h("path",{d:"m321.18 947.55c8.5024 0.95853 17.054 1.5951 25.611 1.7381 12.372-0.32062 23.617-1.1963 35.106-3.2638 7.1712-1.3705 14.451-2.9574 20.842-6.6262 3.9902-2.3292 5.9296-1.137 6.1173 1.3743 0.12442 1.6648-0.71006 3.7144-3.0734 5.4815-8.1958 3.1395-16.838 5.4463-25.473 7.0911-10.286 1.5724-20.701 2.4662-31.107 2.6251-10.131-0.28571-20.317-0.56243-30.38-1.854-2.9585-0.44691-6.972-1.1654-8.7583-1.9663-2.6287-1.1785-3.3586-2.7564-3.4304-4.2295-0.0876-1.797 0.83544-2.512 3.8105-2.1294 3.4 0.43727 7.2592 1.3244 10.736 1.759z",fill:`url(#a-${_(n)})`},null,8,dn)]),h("g",pn,[h("path",{d:"m321.04 940.01c4.0427 0.50361 8.1207 0.67151 12.186 0.92982 4.1296 0.26237 8.2599 0.65609 12.398 0.62967 5.483-0.035 10.95-0.60669 16.416-1.0441 6.1346-0.49093 12.315-0.71225 18.377-1.7733 4.4049-0.77098 8.7555-1.9076 12.997-3.3236 2.6096-0.87116 5.6518-1.9246 7.6211-3.1687 3.9902-2.3292 0.97428 1.497 1.162 4.0082 0.12442 1.6648 4.5132 1.4376 2.1498 3.2047-1.2018 0.89858-8.0655 3.9-12.322 5.246-4.1722 1.3195-8.5233 2.0145-12.839 2.7379-5.9417 0.99606-11.934 1.7196-17.939 2.2011-4.4972 0.36059-9.0135 0.49632-13.525 0.51335-4.6942 0.0177-9.3915-0.12774-14.076-0.42788-5.4792-0.35105-11-0.57491-16.393-1.6047-2.649-0.50582-5.9899-1.4333-7.7762-2.2341-2.6287-1.1785 1.686-2.0421 1.6142-3.5152-0.0876-1.797-3.9414-4.6548-0.96626-4.2722 3.4 0.43727 7.2506 1.4365 10.915 1.8929z",fill:`url(#b-${_(n)})`},null,8,_n),h("path",{d:"m321.18 947.55c8.5024 0.95853 17.054 1.5951 25.611 1.7381 12.372-0.32062 23.617-1.1963 35.106-3.2638 7.1712-1.3705 14.451-2.9574 20.842-6.6262 3.9902-2.3292 5.9296-1.137 6.1173 1.3743 0.12442 1.6648-0.71006 3.7144-3.0734 5.4815-8.1958 3.1395-16.838 5.4463-25.473 7.0911-10.286 1.5724-20.701 2.4662-31.107 2.6251-10.131-0.28571-20.317-0.56243-30.38-1.854-2.9585-0.44691-6.972-1.1654-8.7583-1.9663-2.6287-1.1785-3.3586-2.7564-3.4304-4.2295-0.0876-1.797 0.83544-2.512 3.8105-2.1294 3.4 0.43727 7.2592 1.3244 10.736 1.759z",fill:`url(#a-${_(n)})`},null,8,Cn)]),h("g",Mn,[h("path",{d:"m321.04 940.01c4.0427 0.50361 8.1207 0.67151 12.186 0.92982 4.1296 0.26237 8.2599 0.65609 12.398 0.62967 5.483-0.035 10.95-0.60669 16.416-1.0441 6.1346-0.49093 12.315-0.71225 18.377-1.7733 4.4049-0.77098 8.7555-1.9076 12.997-3.3236 2.6096-0.87116 5.6518-1.9246 7.6211-3.1687 3.4595-2.0194 6.5054-0.92278 6.7481 1.1713 0.0372 0.32125-2.2994 1.1434-2.2744 1.4774 0.12442 1.6648 1.2014 2.797-1.1619 4.5642-1.2018 0.89858-8.0655 3.9-12.322 5.246-4.1722 1.3195-8.5233 2.0145-12.839 2.7379-5.9417 0.99606-11.934 1.7196-17.939 2.2011-4.4972 0.36059-9.0135 0.49632-13.525 0.51335-4.6942 0.0177-9.3915-0.12774-14.076-0.42788-5.4792-0.35105-11-0.57491-16.393-1.6047-2.649-0.50582-5.9899-1.4333-7.7762-2.2341-2.6287-1.1785 1.686-2.0421 1.6142-3.5152-0.0876-1.797-3.9414-4.6548-0.96626-4.2722 3.4 0.43727 7.2506 1.4365 10.915 1.8929z",fill:`url(#b-${_(n)})`},null,8,gn),h("path",{d:"m321.18 947.55c8.5024 0.95853 17.054 1.5951 25.611 1.7381 12.372-0.32062 23.617-1.1963 35.106-3.2638 7.1712-1.3705 14.451-2.9574 20.842-6.6262 3.9902-2.3292 5.9296-1.137 6.1173 1.3743 0.12442 1.6648-0.71006 3.7144-3.0734 5.4815-8.1958 3.1395-16.838 5.4463-25.473 7.0911-10.286 1.5724-20.701 2.4662-31.107 2.6251-10.131-0.28571-20.317-0.56243-30.38-1.854-2.9585-0.44691-6.972-1.1654-8.7583-1.9663-2.6287-1.1785-3.3586-2.7564-3.4304-4.2295-0.0876-1.797 0.83544-2.512 3.8105-2.1294 3.4 0.43727 7.2592 1.3244 10.736 1.759z",fill:`url(#a-${_(n)})`},null,8,mn)]),h("path",{d:"m500.86 1049.7c9.0013 0.9585 18.733 3.5981 27.793 3.7411 13.098-0.3206 25.184 0.242 37.347-1.8255 7.592-1.3705 15.041-1.2085 22.3-3.3752 4.2244-2.3292 6.5232-0.1358 6.7219 2.3755 0.13172 1.6647-0.75173 3.7143-3.2538 5.4814-8.6768 3.1395-17.826 5.4463-26.968 7.0911-10.889 1.5725-21.916 2.4662-32.933 2.6252-10.726-0.2857-21.51-0.5625-32.163-1.854-3.1322-0.4469-7.3812-1.1654-9.2723-1.9663-2.783-1.1785-3.5557-2.7563-3.6318-4.2295-0.0927-1.7969-2.5087-12.527 0.64096-12.144 3.5995 0.4373 9.7374 3.646 13.419 4.0806z",fill:`url(#h-${_(n)})`},null,8,vn)],8,rn)]),h("path",{transform:"matrix(6.3617 0 0 2.0454 -3493.8 -537.55)",d:"m768.27 868.87c0 2.1479-3.7198 3.8891-8.3085 3.8891s-8.3085-1.7412-8.3085-3.8891c0-0.055 2e-3 -0.11008 7e-3 -0.16507",fill:"none",stroke:`url(#f-${_(n)})`,"stroke-width":".55443"},null,8,bn)])]))}};const yn={__name:"LightBulb",props:{bit:{type:Object,default(){return{}}}},setup(c){const n=c,t=new Intl.NumberFormat("en-US").format(n.bit.weight).replace(/,/g," ");return(e,s)=>(t1(),f1("div",{class:b2({activated:c.bit.isOn})},[h("span",null,B0(`# ${c.bit.index}`),1),V(_(zn)),h("span",null,B0(_(t)),1)],2))}};var xn=S1(yn,[["__scopeId","data-v-aad489ec"]]);const wn={},$n={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2560 1708.497"},Tn=E1(`<g><path d="M35.012,0H47.51c8.698,12.093,5.554-1.864,4.392,70.78
  c-1.907,61.852-3.185,119.09-3.733,125.06c-0.126,0.61-1.263,55.401-0.848,59.099c0.415,3.684-0.817,7.277-0.872,10.949
  c-0.238,11.193-0.348,22.385-0.854,33.572c0,0-2.434,100.105-2.434,100.107c-2.117,31.112,1.225,22.688,6.71,30.01
  c3.69,5.008,8.668,8.82,12.962,13.273c3.062,2.964,5.886,6.899,10.321,7.746c20.509,1.172,68.096,0.822,81.173,0.543
  c81.174,0.259,71.217-2.403,82.229,7.631c8.054,8.154,29.967,28.319,37.549,36.238c2.348,2.484,33.007,31.446,44.57,42.74
  c31.132,31.266,26.216,26.853,41.794,26.222c0,0,38.803,0.707,43.88,0.415c31.346,0.127,254.384,0.268,254.384,0.268
  c3.959-0.201,8.192,0.457,11.827-1.543c5.477-3.184,10.406-7.32,16.268-9.833c13.771-6.653,32.396,6.643,25.289,22.995
  c-1.956,5.344-12.414,12.046-22.575,9.143c-7.744-2.252-17.242-12.622-24.069-13.224c-0.001,0-157.979-0.537-157.98-0.537
  c-158.21-0.548-159.845,0.602-164.573-0.854c-5.15-1.648-9.487-8.299-40.605-37.464c0,0-44.347-42.692-58.282-56.433
  c-4.312-4.41-9.198-8.216-13.352-12.779c-2.629-2.787-5.697-5.88-9.784-6.002c-0.004,0-139.241-1.067-139.242-1.067
  c-12.592,1.844-15.682-0.673-19.543-4.288c-12.417-12.616-26.744-23.628-27.466-29.479c-0.709-6.077,1.43-74.034,1.543-75.647
  c0,0,2.3-99.816,2.232-106.121c0.826-16.12,3.185-122.35,3.221-125.09c0.035-0.61,3.436-101.973,1.848-106.359
  C41.331,6.191,37.36,3.763,35.012,0 M694.122,557.174c-3.91,0.738-7.155,4.294-7.167,8.332c-0.61,2.885,0.665,5.593,1.525,8.271
  c8.706,10.384,21.214,0.447,17.829-10.552c-1.342-2.007-2.989-3.812-5.075-5.044C698.946,557.472,696.537,556.405,694.122,557.174z
  "></path><path d="M65.882,0h12.541c5.238,6.215-0.05,0.522,18.842,18.634
  c8.57,8.297,3.494,12.215,6.484,18.085c3.661,7.296,10.865,15.412,11.76,22.459c2.138,14.891-19.222,25.156-31.126,13.779
  c-19.916-17.002,19.958-34.622,6.197-48.266c-2.617-2.647-5.325-5.203-7.881-7.911C77.166,11.12,70.511,6.49,65.882,0
   M90.158,54.756c-1.3,2.738-2.115,13.415,6.24,15.432c7.344,1.805,15.005-6.764,11.925-13.816
  C105.573,49.658,94.692,46.687,90.158,54.756z"></path><path d="M96.428,0h12.803c5.554,6.8,33.192,32.162,56.135,54.811
  c8.572,7.776,3.255,8.247,1.769,136.058c-0.237,6.334-2.199,103.543-2.464,107.42c-0.318,4.856-2.537,6.917-22.532,24.99
  c-7.359,6.481-9.144,3.951-27.473,4.55c-15.234-0.199-20.267-1.387-25.222,3.208c-17.911,15.982-18.288,16.623-19.403,19.006
  c-1.332,2.963-1.138,22.469-1.116,25.698c0.096,18.21-2.732,21.649,3.41,27.692c19.765,18.554,22.454,23.894,28.906,23.734
  c0.001,0,86.663,0.268,86.663,0.268c53.991-0.32,52.168-0.123,54.933,1.854c6.092,4.29,26.638,25.394,31.754,29.851
  c0,0,39.743,38.986,39.745,38.989c20.688,18.749,26.617,24.663,33.944,31.944c4.893,4.685-3.887,4.976,122.571,4.605
  c0,0,73.246-0.109,132.422,0.293c108.046,0.41,104.166-0.824,108.481,2.025c4.977,3.873,9.119,8.698,14.017,12.675
  c12.187,15.895,18.707,4.313,25.1,3.495c3.233-0.396,6.496-0.092,9.747-0.159c5.551-0.256,11.01,3.062,13.37,8.094
  c11.175,16.749-17.461,35.936-31.169,18.451c-9.171-11.524-26.332-25.749-31.266-30.919c-6.012-5.757-4.689-5.979-14.926-6.026
  c-36.294-0.318-167.384-0.47-167.757-0.457c-0.001,0-103.065-0.287-103.065-0.287c-4.504-0.326-72.626-0.19-73.238-0.189
  c-3.879,0.055-6.929-2.611-9.454-5.24c-1.763-1.722-53.166-52.28-57.519-55.946c-1.769-1.482-3.367-3.147-4.825-4.922
  c-2.702-3.428-6.734-5.386-9.735-8.503c-9.21-9.332-19.043-18.018-28.278-27.32c-2.348-2.422-5.075-4.947-8.625-5.191
  c-8.055-0.429-97.697-0.131-132.867-0.348c-9.868-0.326-8.866-0.967-16.451-7.917c-31.032-28.73-24.638-21.308-24.74-42.636
  c0.043-10.79,0.695-21.568,0.915-32.358c-0.03-3.074,1.629-5.837,3.77-7.917c5.148-5.166,10.68-9.918,16.06-14.84
  c3.782-3.336,7.624-7.606,13.059-7.722c33.476-0.347,37.808,1.511,41.788-2.153c5.421-4.776,15.93-13.939,18.537-17.414
  c1.58-2.056,1.836-4.739,1.836-7.24c0.012-8.344,0.787-16.664,0.61-25.008c0,0,2.122-94.574,2.379-114.672
  c0.236-21.174,1.843-82.823,1.61-88.475c-0.414-7.053-6.498-9.088-36.463-38.714c-3.117-2.989-6.533-5.654-9.454-8.851
  C108.762,12.059,101.814,6.764,96.428,0 M749.006,569.068c0.189,2.83,2.001,5.111,3.739,7.216c0.238-0.073,0.72-0.22,0.964-0.287
  l-0.366,0.793c6.998,3.63,13.657-1.642,14.511-5.673c0.085,0.012,0.25,0.037,0.329,0.049c1.147-3.471,0.909-7.612-1.86-10.266
  C761.774,555.232,748.106,554.515,749.006,569.068z"></path><path d="M127.189,0h13.029c2.36,2.926,20.848,20.733,21.458,21.318
  c21.347,21.416,27.269,24.168,27.046,30.559c-0.037,19.818-1.293,56.492-1.311,70.743c0.116,3.519-1.647,6.85-1.067,10.388
  c0.671,5.459,0.47,10.973,0.329,16.457c-0.646,43.066-2.785,38.636,4.532,44.149c4.269,2.915,69.576,66.02,73.177,69.627
  c0,0,52.964,50.574,53.359,50.926c2.962,3.074,88.284,84.98,90.262,86.633c0.015,0.014,39.551,37.792,50.072,48.138
  c32.491,30.039,22.776,25.899,40.898,26.521c0.616-0.001,89.711-0.273,99.997,0.311c0.611,0.037,54.106-1.055,67.742,0.061
  c0.617-0.007,39.645,0.076,42.648-0.061c4.726-0.444,11.596-7.648,12.376-10.955c1.738-6.453-0.372-13.053,0.134-19.58
  c-0.006-1.824,0.25-3.824-0.756-5.447c-3.702-6.079-36.659-34.585-39.123-37.226c-16.286-18.098,15.391-41.04,30.547-19.683
  c5.779,9.49,0.001,17.948-2.8,28.827c-1.26,5.18,10.126,12.26,15.798,18.61c8.608,9.143,5.777,4.437,6.039,35.103
  c0.024,5.246-4.605,8.454-7.966,11.76c-10.474,8.915-0.5,5.349-81.905,6.039c-26.638-0.224-155.022-0.149-158.358-0.75
  c-6.787-1.279-32.112-30.14-49.541-45.228c-2.039-1.896-53.499-51.496-55.634-53.603c0,0-84.81-81.427-96.361-92.665
  c-1.722-1.553-56.421-54.057-57.031-54.628c-3.168-3.142-41.98-39.355-45.18-43.862c-4.843-6.634-2.092-5.482-2.769-19.836
  c0.769-11.37,0.421-22.776,0.677-34.164c0.801-12.878,1.69-67.025,1.683-73.823c0.055-18.796,7.221-6.225-44.728-57.025
  C131.849,5.276,129.257,2.873,127.189,0 M687.595,391.978c0.893,5.849,4.736,9.031,11.65,7.698c2.971-1.531,6.459-3.648,6.99-7.265
  l0.415-0.006c-0.012-2.458,0.299-5.13-1.074-7.313C701.449,377.228,684.953,377.009,687.595,391.978z"></path><path d="M157.315,0h31.132C180.178,9.877,165.266,12.45,157.315,0z"></path><path d="M226.624,0h12.12c3.615,4.427,9.419,10.556,14.895,12.102
  c10.896,3.272,27.247,3.372,30.211,16.695c4.124,22.741-30.845,28.725-36.293,7.704c-4.77-16.557-0.3-15.704-11.931-26.972
  C232.559,6.417,228.954,3.763,226.624,0 M258.171,28.619c-0.183,3.086-0.299,6.594,1.744,9.149
  c6.433,8.618,20.171,0.009,16.609-9.857C273.321,18.173,258.948,19.405,258.171,28.619z"></path><path d="M298.624,0h9.589c0,0.61-0.676,38.859-1.159,48.242
  c-0.569,6.811-9.279,10.933-16.475,19.122c-3.204,3.58-2.322,7.129-2.476,18.024c0.174,5.939-1.237,38.485-1.116,43.911
  c0,0-1.982,112.865-1.982,112.867c-0.307,5.877,1.971,6.639,34.853,38.171c1.54,1.556,30.332,29.482,33.285,32.029
  c0.243,0.261,48.459,46.59,48.803,46.924c0.489,0.506,56.864,54.333,57.727,54.982c3.586,2.618,1.943,2.076,77.099,2.056
  c0.001,0,26.252,0.366,26.253,0.366c3.745,0.037,7.478-0.659,11.229-0.281c4.562,0.5,9.149,0.22,13.73,0.22
  c101.835,0.513,71.747-2.752,91.341,10.601c3.932,3.303,16.463,3.794,25.515,7.435c17.295,8.64,11.223,35.78-12.59,32.785
  c-16.067-2.668-15.162-18.763-18.024-30.004c-1.346-4.676-9.599-12.758-14.371-13.12c-4.404-0.324-103.04-0.344-110.848-0.433
  c-1.553,0.019-88.754-0.393-89.39-0.476c-5.549-0.871-36.942-33.412-43.136-38.421c0,0-99.749-95.97-108.487-104.51
  c-3.094-2.625-27.97-26.666-29.986-29.046c-2.769-3.257-1.988-7.783-1.988-11.711c0.029-0.612,0.713-44.132,0.671-48.858
  c-0.134-2.19-0.952-4.367-0.421-6.569c0.87-3.885,0.429-26.904,1.11-34.804c-0.029-0.795,1.249-44.628,0.64-49.382
  c-0.891-5.27-1.385-10.735-0.183-15.999c2.378-10.219-1.098-16.271,4.703-21.721c16.205-15.145,15.22-10.957,15.438-28.247
  C297.916,22.764,298.746,11.394,298.624,0 M687.705,447.198c-1.548,14.335,12.111,15.995,16.194,9.674
  c0.464-0.397,0.933-0.793,1.409-1.183c0.171-0.787,0.579-1.464,1.104-2.062c0.445-1.525,0.884-3.092,0.781-4.691
  C706.491,437.846,689.856,436.535,687.705,447.198z"></path><path d="M316.984,0h9.711c0,0.001-0.903,53.078-0.903,53.079
  c-1.028,16.491,3.568,16.889,6.533,28.747c2.398,9.782-7.09,19.294-18.213,20.007c-11.38-0.155-18.856-9.566-18.518-15.841
  c0.772-14.903,11.721-15.269,19.128-26.869c2.252-3.799,1.229-6.558,1.683-32.273C317.112,17.915,316.715,8.948,316.984,0z"></path><path d="M342.315,0h21.086C358.935,5.072,347.592,5.277,342.315,0z"></path><path d="M386.001,0h13.419c7.657,9.704,24.89,20.945,25.74,28.857
  c0.709,9.285-0.713,17.025-0.317,40.038c0.258,6.62,12.629,18.132,13.389,26.857c1.642,15.421-21.617,26.111-33.237,12.132
  c-10.274-11.09,1.749-22.841,4.312-26.905c8.465-13.539,4.566-10.246,6.173-23.673c0.822-33.363,2.839-25.511-17.75-45.735
  C393.863,7.673,389.203,4.538,386.001,0 M410.826,92.171c-0.317,2.19,0.073,4.398,0.372,6.569c0.238,3.946,4.129,6.832,7.887,6.978
  c9.028-0.55,10.909-8.783,9.967-12.73C426.336,83.687,412.441,83.669,410.826,92.171z"></path><path d="M410.21,0h13.578c14.759,15.192,45.044,42.122,48.974,47.54
  c2.049,2.849,1.397,6.539,2.049,9.796c0.956,6.729,10.447,18.132,12.285,23.496c2.257,8.228-2.513,17.811-10.699,20.543
  c-20.267,4.12-26.929-8.682-26.332-15.957c0.479-14.93,23.92-24.155,10.589-36.762c0,0-24.79-23.903-40.074-38.043
  C417.157,7.039,413.339,3.855,410.21,0z"></path><path d="M434.919,0h13.809c1.955,2.614,112.644,108.713,116.838,111.867
  c0.073,0.232,0.22,0.695,0.299,0.927c4.682,3.857,4.966,4.288,16.658,4.142c11.459,0.591,42.559,0.394,43.289,0.287
  c3.994-0.784,13.809-10.811,15.816-13.004c4.022-4.347,1.071-8.998,2.403-46.333c0.037-2.861-1.22-5.593-3.263-7.57
  c-3.757-3.739-7.393-7.624-11.455-11.034c-5.825-4.902-4.171-5.347-10.747-6.423c-7.506,0.334-24.847,5.241-33.597-5.453
  C578.402,20.302,579.088,5.07,595.43,0h10.32c2.251,1.189,4.563,2.306,6.606,3.843c4.587,3.715,7.173,9.125,9.985,14.163
  c2.696,4.538,6.935,7.795,10.504,11.589c8.377,8.827,21.072,17.675,20.94,23.465c0.067,4.65,0.001,42.33-0.36,48.858
  c-0.363,4.762-3.187,7.758-14.163,17.079c-8.727,7.992-7.824,6.122-24.435,6.246c-46.636,0.433-47.978,0.163-51.633-2.794
  c-3.947-3.117-24.47-23.526-25.875-24.825c-8.628-7.416-26.868-25.655-34.64-32.474c-1.836-1.876-29.155-27.522-29.449-27.771
  c-6.892-5.975-15.206-14.743-15.206-14.743c-1.629-1.415-3.282-2.818-4.782-4.367C447.234,12.077,440.232,6.85,434.919,0
   M593.936,15.42c0.988,2.153,0.939,4.989,3.16,6.386c0.018,0.335,0.055,1.013,0.073,1.354c0.396,0.012,1.189,0.043,1.586,0.055
  c0.244,0.281,0.732,0.842,0.976,1.122c1.092-0.5,2.226-0.903,3.391-1.226c2.22-2.696,4.898-4.959,7.063-7.704
  c-0.262-5.227-5.288-9.503-10.479-8.973C596.619,6.724,591.207,9.631,593.936,15.42z"></path><path d="M459.293,0h14.066c9.37,10.712,10.23,9.61,15.182,7.917
  C489.152,7.7,504.817,0.98,506.584,0h14.084c1.543,1.391,3.208,2.641,4.782,4.007c3.141,2.698,9.337,11.57,4.77,18.805
  c-5.871,9.775-17.739,10.469-22.178,9.54c-2.415-0.494-4.404-2.025-6.545-3.129c-2.72-1.482-5.691-2.373-8.607-3.355
  c-14.539-4.83-17.661-10.615-24.581-16.579C465.118,6.38,461.898,3.465,459.293,0z"></path><path d="M661.885,0h10.656c0.426,10.334-0.505,94.338-0.659,122.37
  c-0.094,11.423-5.589,10.27-20.781,26.161c-6.676,6.752-7.028,6.592-35.658,6.045c-9.632-0.2-7.675-0.695-27.235,17.664
  c-9.861,9.007-10.019,8.694-9.826,15.645c0,0-0.567,45.168-0.518,56.757c-0.047,6.429,9.12,14.596,10.845,21.916
  c0.976,3.885,2.574,8.058,1.116,12.022c-1.885,4.331-4.813,8.698-9.485,10.29c-14.9,5.243-26.137-5.907-26.137-14.358
  c0.203-11.655,8.106-15.148,13.181-25.387c1.885-3.942,1.164-38.146,1.458-60.63c0.111-5.44-1.308-9.679,6.453-16.237
  c39.101-33.117,14.241-24.028,61.466-25.765c4.946-0.271,7.434-3.967,20.196-15.938c7.317-6.535,4.631-4.715,5.142-42.069
  c0,0,0.45-66.72,0.58-72.048C662.605,10.955,663.209,5.386,661.885,0 M563.877,270.419c-2.388,8.45,9.619,17.818,16.945,10.308
  c2.147-2.086,4.081-4.575,5.014-7.448c-0.329-4.19-2.891-8.228-6.667-10.15C572.526,260.138,566.181,263.92,563.877,270.419z"></path><path d="M720.71,0h13.407c-5.561,12.585-14.517,9.666-34.56,9.991
  c-10.935-0.1-10.206,13.749-1.793,14.029c24.217,0.821,22.035,0.005,26.375,0.915c12.42,4.295,11.065,18.412,8.692,24.228
  c-1.665,1.592-3.172,3.349-4.989,4.77c-4.227,3.303-7.027,2.241-28.833,2.434c-9.705-0.134-9.985,10.98-4.154,13.498
  c8.396,2.573,24.306-0.655,30.907,2.403c11.266,5.683,9.394,20.703,5.557,24.691c-7.62,7.943-9.798,5.291-29.87,5.648
  c-2.696,0.073-5.782-0.342-8.003,1.537c-3.989,2.757-3.8,9.765,0.579,12.059c5.776,3.06,22.687-0.819,31.352,2.684
  c4.258,2.3,8.405,6.429,8.192,11.632c-0.134,3.983,0.732,8.509-1.946,11.888c-7.234,8.877-9.663,6.383-37.451,6.649
  c-2.373,0.006-4.965-0.012-7.021,1.354c-1.464,1.092-2.806,2.617-2.958,4.514c-0.384,3.532,0.055,7.46-2.11,10.522
  c-2.617,3.556-6.612,6.411-11.113,6.746c-14.902,0.465-48.528-2.211-52.554,1.561c-4.52,3.424-4.136,13.809,5.569,13.694
  c0,0,53.667,0.024,53.67,0.024c0.618-0.007,32.46,0.288,36.628,0.146c3.8,0.11,7.618,0.354,11.357,1.11
  c7.477,5.326,8.293,10.205,7.191,19.903c-0.851,4.42-5.315,10.795-16.725,10.528c-46.873-0.606-46.697-0.501-49.126,1.946
  c-2.385,2.104-2.495,5.679-1.641,8.533c0.646,2.001,2.556,3.111,4.16,4.276c5.532,0.854,11.126,0.36,16.695,0.488
  c31.279,0.271,33.386-0.542,37.372,0.927c2.214,0.653,3.989,2.196,5.575,3.806c0.256,0.128,0.775,0.384,1.031,0.506
  c4.043,6.732,2.488,5.209,2.666,52.56c0,0-0.733,46.375-0.561,64.058c-0.201,4.526,3.922,7.143,6.685,10.04
  c2.684,2.8,6.142,4.983,10.07,5.41c4.8,0.61,9.326,2.379,14.047,3.349c3.709,0.842,7.155,2.824,9.833,5.514
  c12.9,13.238-3.267,34.048-21.495,26.985c-11.558-4.436-11.618-14.265-13.742-24.496c-2.675-11.845-4.772-8.788-12.73-18.049
  c-2.746-3.277-2.123,2.195-1.812-110.622c0.028-4.782,2.456-12.032-10.052-12.108c-40.458-0.225-46.407,1.153-51.194-2.562
  c-5.582-4.258-7.769-8.116-5.825-18.189c0.771-3.913,5.288-10.747,17.341-10.821c13.395,0.823,26.826,0.244,40.239,0.47
  c2.519-0.049,5.392-0.085,7.356-1.909c4.581-4.049,2.812-13.516-4.251-13.334c-33.728-0.884-87.794-0.089-98.222-1.013
  c-4.77-0.207-8.448-3.818-11.022-7.503c-1.854-3.617-1.33-7.899-1.055-11.803c0.133-5.291,6.896-10.981,11.394-11.333
  c5.766-0.418,23.226-0.013,23.837-0.043c20.028-0.922,31.761,2.953,32.486-6.276c0.348-3.373-0.012-7.112,2.062-10.022
  c2.452-3.117,5.557-6.264,9.735-6.661c19.167-2.066,37.279,4.042,37.763-6.423c0.57-6.442-2.592-8.895-8.844-8.985
  c-19.689-0.038-23.634,0.736-27.991-2.806c-2.507-2.074-5.465-4.319-5.959-7.765c-0.75-4.276-0.964-8.966,0.909-12.98
  c7.329-10.797,13.581-7.721,35.494-8.173c2.373,0.098,4.081-1.751,5.782-3.129c4.604-23.926-26.42-0.065-41.496-19.897
  c-0.988-4.154-1.019-8.515-0.415-12.724c0.616-4.654,8.238-10.645,12.931-10.625c18.365-0.595,28.73,2.411,29.638-5.063
  c0.635-6.738-2.831-9.438-7.631-9.479c-22.136-0.512-25.835,1.155-29.485-1.915c-5.575-3.77-5.959-11.235-5.593-17.317
  c0.11-3.867,2.672-7.033,5.477-9.436c6.155-5.662,15.31-2.954,28.912-3.214C717.288,1.342,719.002,0.61,720.71,0 M750.622,384.799
  c-1.13,3.402,2.362,4.588,0.671,10.546c2.414,3.2,5.085,5.739,11.467,3.867c1.513-1.092,2.958-2.281,4.3-3.587
  c2.306-2.245,2.422-5.856,1.897-8.832C766.946,378.335,753.654,376.234,750.622,384.799z"></path><path d="M742.565,0h10.467c-0.013,22.929-2.386,327.968-1.702,335.185
  c1.772,4.715,6.854,7.353,8.783,9.802c3.391,2.72,6.234,6.039,9.314,9.107c2.977,3.129,6.581,5.593,9.503,8.796
  c10.827,11.809,16.942,10.77,15.377,25.21c-0.122,5.764,0.238,11.656-1.171,17.298c-7.892,9.793-21.648,17.244-21.214,24.02
  c1.304,13.424,10.426,18.771,0.189,33.096c-0.22,0.091-0.659,0.268-0.878,0.36c-4.197,4.184-10.412,5.508-16.146,4.752
  c-8.195-0.623-18.04-10.396-15.609-20.592c0.817-4.422,3.861-8.076,7.429-10.644c2.903-2.104,5.221-4.88,8.021-7.112
  c2.517-1.988,20.108-19.376,23.331-21.867c7.642-7.757,6.172-4.724,6.368-19.513c-0.154-6.078,0.314-7.181-7.783-13.858
  c-1.022-0.829-21.65-21.35-22.367-22.081c-10.879-10.171-13.332-10.683-13.108-18.311c0.177-10.202-0.291-35.202,0.366-42.148
  c0.22-3.861,0.185-87.978,0.348-120.119c0.226-7.528-0.031-21.951-0.061-22.562c-0.232-4.282,0.628-8.546,0.213-12.827
  c-0.36-4.032-0.415-8.1-0.024-12.132c0.507-7.605-0.219-28.427-0.195-28.729c0.256-3.397,0.561-6.819,0.14-10.223
  c-0.555-4.312,0.409-8.613,0.232-12.925c-0.165-8.539,0.281-17.079,0.049-25.618C742.424,30.907,742.65,15.456,742.565,0
   M752.098,443.41c-3.111,2.94-0.988,7.32-0.866,10.949c-0.062,5.104,7.171,8.967,13.45,4.874
  c5.708-3.761,5.523-10.949,3.757-13.822C765.414,439.665,756.289,438.164,752.098,443.41z"></path><path d="M760.931,0h10.516c-0.019,0.61-2.101,51.887-0.305,67.028
  c0.022,0.4-0.676,131.075-0.787,132.398c-0.47,27.773,0.097,46.586-0.781,125.676c0.026,5.835,0.603,6.66,10.327,15.462
  c2.263,1.8,18.805,17.816,20.781,19.403c17.205,20.097,30.575,8.598,37.836,26.893c4.662,16.734-13.422,26.963-26.814,20.196
  c-12.484-6.292-9.749-16.522-11.071-28.863c-0.767-9.755-1.686-5.444-21.385-25.966c-6.988-6.714-18.548-15.499-18.903-20.995
  c-0.2-5.486-0.018-126.414-0.018-126.414c-0.36-5.453,0.628-10.876,0.384-16.335c0.226-6.112-0.506-12.211-0.006-18.311
  c0.241-130.415-0.317-124.615-0.317-124.615c1.249-16.649-1.121-13.831,0.22-26.027c0.317-2.842-0.439-5.679-0.043-8.515
  C760.992,7.362,760.839,3.672,760.931,0 M812.753,386.678c0.073,2.598,0.012,5.24,0.775,7.753
  c2.157,2.727,3.298,5.888,10.455,4.721c1.671-0.512,2.897-1.848,4.3-2.83c0.988-1.208,1.751-2.58,2.751-3.776
  c0.36-2.245,0.854-4.617,0.037-6.819C826.997,375.405,811.968,378.802,812.753,386.678z"></path><path d="M779.266,0h10.51c0.307,2.937-0.988,180.292-0.793,200.055
  c-0.344,15.17-0.632,98.249-0.634,98.868c0.043,8.186-0.458,8.339,11.12,19.128c0.871,0.704,33.083,31.03,51.773,49.407
  c7.066,6.572,4.569,6.556,4.843,32.676c0.207,3.953-2.293,7.344-5.124,9.826c-23.054,19.956-7.873,13.502-43.807,14.968
  c-5.19,0.456-13.5,8.087-13.309,13.035c0.223,40.209-0.007,40.934-1.726,44.222c-3.391,5.172-9.765,8.155-11.705,14.316
  c-2.019,6.46-2.684,13.297-5.063,19.659c-1.458,3.709-4.611,6.325-7.655,8.722c-6.125,2.005-16.232,1.932-21.391-0.714
  c-7.671-5.028-11.414-20.108-0.146-27.985c5.008-4.406,24.191-7.245,25.405-7.563c2.47-0.663,11.17-7.294,12.376-11.797
  c1.427-12.578-1.34-33.495,1.299-45.948c4.355-5.014,8.997-9.991,14.682-13.517c14.518-2.031,27.812,1.513,32.267-2.287
  c17.908-15.718,14.07-12.191,14.572-29.571c-0.086-12.024,2.107-8.037-27.918-36.86c-3.567-3.771-38.516-35.733-39.464-39.141
  c-1.749-7.699-0.059-36.835-0.641-41.203c0-0.004,0.516-249.948,0.824-256.049C779.254,8.173,779.174,4.087,779.266,0
   M756.124,498.258c-5.648,1.092-9.796,7.313-8.18,12.925c2.973,13.074,22.576,8.998,20.83-3.745
  C768.159,501.521,761.974,496.891,756.124,498.258z"></path><path d="M871.724,0h10.083c0.384,38.445-0.5,213.474-0.5,213.474
  c0.277,78.357-1.041,87.191,0.659,92.006c2.345,5.649,14.288,12.794,18.714,23.044c0.22,4.062,0.665,8.448-1.427,12.138
  c-6.704,14.126-31.66,12.582-35.134-4.526c-1.601-11.904,7.721-16.981,7.57-29.302c0-0.003-0.244-137.82-0.244-137.82
  c0.533-5.033,0.276-114.746,0.25-115.356C871.772,35.774,871.846,17.89,871.724,0 M875.402,327.542
  c-0.585,1.53-1.182,13.537,5.965,14.999c6.533,2.318,13.572-4.538,12.443-11.089C892.962,322.581,880.287,318.918,875.402,327.542z
  "></path><path d="M932.976,0h10.363c-0.008,4.04-0.409,148.208-0.409,148.208
  c-0.159,4.264,0.561,8.515,0.262,12.773c-0.974,14.337-0.121,17.682,2.257,20.11c4.708,4.969,13.433,12.571,14.175,13.108
  c0.116,0.183,0.348,0.561,0.464,0.75c5.014,3.965,8.966,9.088,13.95,13.09c6.946,5.965,5.915,10.356,6.02,15.841
  c0.027,2.412-0.082,105.526-0.085,106.139c-0.517,20.575,2.34,20.234-6.533,28.607c-9.311,8.19-7.483,7.209-16.981,7.692
  c-34.857,0.13-38.249-1.442-42.478,1.757c-10.008,7.402-9.551,11.968-10.601,16.005c-2.124,8.277-2.765,21.298-16.353,24.27
  c-16.466,4.612-29.947-14.218-20.147-26.387c6.976-10,25-6.846,33.054-13.206c4.343-2.94,7.246-7.856,12.309-9.735
  c4.849-1.263,9.918-0.451,14.865-0.83c9.57,0.293,19.153-0.073,28.729,0.079c3.477,0.207,6.679-1.525,9.101-3.892
  c6.165-6.242,5.536-4.882,5.667-16.481c0-0.002-0.348-61.856-0.348-61.856c0.143-1.473,1.217-56.221-1.549-59.727
  c-3.451-4.488-25.026-23.703-25.637-24.252c-1.946-1.94-3.538-4.221-5.636-6.02c-1.891-1.622-3.605-3.672-3.892-6.234
  c-0.532-5.519-0.181-46.465-0.512-50.517c-0.012-3.837,0.634-7.673,0.116-11.504c-0.518-3.519,0.195-7.057-0.104-10.583
  c-0.54-10.479,0.258-32.073-0.171-37.079C933.006,46.753,932.774,23.374,932.976,0 M874.712,386.098
  c-0.744,2.672,0.567,5.282,0.781,7.936c-0.049,3.648,3.263,6.685,6.783,6.966c5.782,0.573,11.736-4.623,11.071-10.613
  C894.117,380.212,877.198,376.226,874.712,386.098z"></path><path d="M962.418,0h20.909c5.216,6.179,12.411,11.33,10.51,22.209
  c-2.727,13.519-21.943,18.194-32.194,8.533c-4.813-4.453-7.008-11.784-4.654-18.024C958.655,8.424,960.875,4.355,962.418,0
   M968.366,11.248c-2.117,2.562-1.074,6.02-1.122,9.027c1.828,5.503,4.75,7.981,10.833,6.716c5.374-2.007,8.436-9.271,5.307-14.31
  C980.54,7.411,972.105,6.52,968.366,11.248z"></path><path d="M1000.559,0h10.388c0.2,28.575,0.106,31.367-0.567,35.847
  c-0.749,4.44-8.803,10.618-13.498,15.023c-5.831,5.142-11.296,10.668-17.012,15.932c-2.464,2.476-5.648,5.002-5.758,8.802
  c-0.239,2.572-0.28,80.281-0.232,93.36c-0.061,5.477,4.965,8.552,8.417,11.967c3.867,3.422,7.204,7.411,11.217,10.674
  c6.547,5.651,5.221,10.087,5.136,22.489c-0.648,7.973,0.217,7.851-0.055,36.561c-0.448,8.077,0.621,27.773-0.006,36.097
  c-0.505,6.31,0.484,32.596-0.104,41.508c0.009,0.612,0.897,37.826-0.287,45.692c-0.849,4.827-6.821,8.181-15.633,16.993
  c-6.844,6.435-16.024,9.265-24.069,13.803c-4.489,2.69-9.625,4.447-14.901,4.337c-7.524-0.145-17.203-5.492-18-16.884
  c-0.455-12.148,12.937-21.427,26.826-15.999c3.59,1.086,18.473,8.337,20.434,8.875c2.763,0.494,4.709-1.903,6.655-3.44
  c0.146-0.226,0.433-0.677,0.58-0.903c9.331-7.019,8.849-9.457,8.954-14.133c0-0.002-0.457-134.892-0.457-134.893
  c0.039-0.625,1.026-27.094-0.647-31.291c-1.202-2.669-1.718-2.967-13.248-13.803c-9.754-9.416-10.561-7.829-10.729-20.104
  c-0.144-100.696-0.55-94.853,0.891-97.734c1.14-2.299,1.647-3.317,19.122-19.202c2.691-2.487,13.104-12.311,15.92-16.262
  C1001.289,25.689,999.913,22.552,1000.559,0 M936.392,385.58c-0.988,2.55,0.177,5.209,0.299,7.807
  c-0.203,7.865,10.129,9.983,13.95,5.85c1.214-1.33,3.08-2.452,3.184-4.441c0.134,0.024,0.409,0.073,0.543,0.098
  c0.811-3.263,1.013-7.069-1.128-9.887C948.961,378.643,939.542,379.524,936.392,385.58z"></path><path d="M1018.828,0h10.43c0.085,1.656,0.296,31.952,0,39.617
  c-0.418,6.162-6.857,9.473-15.92,19.159c-3.754,3.952-1.907,3.526-2.373,45.54c-0.329,5.971,4.52,10.223,7.356,14.956
  c0.067,0.293,0.201,0.878,0.268,1.165c10.877,13.422,4.97,24.141-1.318,28.137c-10.319,6.23-20.56,2.742-25.49-2.751
  c-11.283-11.415,0.453-23.674,3.373-28.528c2.129-3.507,5.404-6.777,5.374-11.156c-0.043-3.635,0.634-7.259,0.305-10.894
  c-0.435-5.081-0.244-32.42-0.238-33.035c0.059-8.237,7.105-11.329,12.852-17.378c2.568-2.354,5.41-5.081,5.386-8.863
  C1018.962,23.984,1018.736,11.992,1018.828,0 M999.534,137.521c1.599,2.679,3.823,6.618,10.534,4.892
  c7.707-2.41,10.352-17.365-3.019-19.086C995.605,123.414,999.32,134.301,999.534,137.521z"></path><path d="M1037.169,0h10.467c0.164,332.294,2.821,296.917-6.161,305.87
  c-30.51,30.121-23.936,10.573-24.417,70.475c-0.067,3.91,0.598,8.137-1.397,11.711c-2.232,3.934-6.185,6.392-9.241,9.613
  c-48.624,48.44-35.37,27.548-42.276,50.34c-1.406,4.562-1.813,15.568-14.487,19.214c-9.32,2.83-20.8-2.544-23.49-12.187
  c-1.433-3.989,0.122-8.1,1.391-11.894c7.364-11.151,16.645-9.087,29.925-13.285c6.829-2.074,10.921-9.7,43.734-39.172
  c2.147-2.287,5.008-4.203,6.002-7.319c1.074-6.978-0.207-14.029,0.506-21.031c-0.439-9.149-0.323-18.317-0.409-27.473
  c-0.067-3.593-0.25-7.557,2.025-10.583c2.285-3.055,18.558-18.023,19.805-19.104c8.947-8.505,9.306-8.185,9.204-16.652
  c-0.188-80.639-0.531-93.915-0.531-93.915c-0.138-79.407-0.665-153.746-0.665-153.746C1037.303,27.241,1036.98,13.62,1037.169,0
   M935.788,446.557c-0.506,2.074,0.707,3.995,0.951,6.026c1.287,9.522,11.93,9.343,16.64,2.903c1.299-2.592,1.049-5.563,0.994-8.369
  c-0.586-3.837-4.099-6.71-7.765-7.448C942.009,438.475,936.282,441.592,935.788,446.557z"></path><path d="M1069.643,0h6.203c0,0.25,0.006,0.756,0.006,1.013
  C1073.73,1.061,1071.473,1.293,1069.643,0z"></path><path d="M1103.429,0h14.169c-4.844,6.175-36.586,35.071-40.849,39.281
  c-9.455,9.127-10.781,8.18-10.705,18.037c0.228,17.911-0.285,80.135,0.201,84.004c1.041,8.114,7.747,1.5,6.032,27.643
  c-0.038,3.996,0.388,27.718,0.043,33.56c0,0.001,0.244,35.353,0.244,35.353c0.04,6.836-0.193,42.416-0.024,44.515
  c0.039,0.653-0.236,19.016,0.244,23.032c1.021,5.363,9.346,14.379,12.303,20.952c2.667,5.76,3.396,16.123-8.613,22.849
  c-2.898,1.717-16.75,4.225-24.654-7.137c-7.384-10.934,1.857-20.511,4.904-25.197c7.944-12.109,6.171,0.342,5.898-100.997
  c0,0-0.227,2.397-0.403-48.15c-0.085-4.373,0.897-8.863-0.427-13.132c-0.86-2.55-3.062-4.258-4.404-6.502
  c-2.719-4.537-0.681-13.283-1.446-55.378c-0.005-0.159,0.099-18.456-0.421-34.194c0.384-4.16-0.451-8.375,0.543-12.48
  C1060.667,39.727,1066.558,36.079,1103.429,0 M1060.36,326.591c-1.842,2.641-0.848,5.953-0.518,8.887
  c0.253,4.221,4.321,10.155,13.498,6.081c5.893-3.829,6.213-12.248,0.952-16.621C1070.302,321.4,1063.306,322.016,1060.36,326.591z"></path><path d="M1127.772,0h13.553c-0.134,0.421-0.396,1.257-0.531,1.677
  c-20.39,20.64-40.042,35.718-41.258,41.081c0.134,1.897,1.549,3.391,2.629,4.867c2.409,2.934,4.136,6.337,6.319,9.436
  c3.014,8.181,1.861,9.703-0.116,15.469c-2.617,3.501-6.276,6.325-10.516,7.503c-2.886,0.853-14.521,0.099-17.86-2.3
  c-7.951-4.858-10.271-14.538-2.83-25.143c8.27-10.21,10.123-14.668,14.67-18.409c3.95-3.212,23.471-22.177,24.081-22.739
  C1119.666,7.417,1124.1,4.117,1127.772,0z"></path><path d="M1164.358,0h11.644c-0.989,5.76-2.297,5.119-20.94,23.014
  c-4.745,4.172-8.918,8.954-13.785,12.986c-3.099,3.275-7.789,6.057-7.911,11.083c-0.678,17.447,0.223,21.646,3.373,25.557
  c2.83,3.629,4.794,7.814,7.411,11.583c4.386,6.1,4.319,15.298-0.775,20.977c-10.794,12.719-34.084,5.029-33.743-10.68
  c-0.134-5.987,1.915-9.493,10.741-22.105c3.602-5.012,2.663-7.104,2.8-27.332c-0.041-5.005,1.919-8.226,12.498-17.207
  c0.61-0.533,20.534-19.672,22.88-21.525C1160.771,4.508,1162.51,2.196,1164.358,0 M1121.411,88.737
  c-1.745,8.917,5.589,15.768,11.797,12.773c4.428-2.403,6.996-8.21,5.032-13.004C1135.412,81.486,1123.838,81.314,1121.411,88.737z"></path><path d="M1184.09,0h10.449c0.163,8.602,0.215,73.059,0.177,79.283
  c0.093,4.603-1.506,7.455-12.901,17.378c-0.585,0.61-57.927,54.651-60.124,57.043c-7.281,7.973-18.562,14.824-18.543,20.751
  c0.181,152.922,0.134,140.834,0.537,144.524c0.232,22.581,0.844,26.789-3.404,31.077c-0.966,0.952-13.805,12.231-16.469,15.719
  c-4.865,6.19-1.771,3.321,2.666,22.697c1.68,7.529-1.99,19.572-17.847,20.958c-4.66-0.037-9.162-1.812-13.053-4.282
  c-3.031-1.964-4.507-5.453-5.544-8.759c-2.056-6.307,0.732-13.596,5.941-17.512c2.727-2.117,4.971-4.776,7.704-6.886
  c0.048-0.044,27.216-26.491,27.216-26.491c2.702-2.544,3.013-6.52,3.001-10.003c-0.146-6.305-0.017-43.939-0.018-44.551
  c0.085-5.709-0.677-11.388-0.494-17.091c-0.099-110.489-1.574-104.504,2.964-108.927c9.051-9.23,43.658-42.169,43.74-42.264
  c5.877-5.339,28.327-27.087,32.194-30.242c0.134-0.201,0.396-0.592,0.525-0.787c3.093-2.251,5.587-5.166,8.344-7.795
  c4.189-4.004,3.879-5.668,3.452-25.246c-1.025-10.973,0.152-22.001-0.409-32.987C1184.255,17.067,1184.035,8.533,1184.09,0
   M1062.793,381.261c-7.59,5.274-4.944,14.375-0.848,18.238c3.782,2.566,9.849,2.419,13.944-4.075l0.421,0.122
  C1079.084,383.495,1070.886,378.697,1062.793,381.261z"></path><path d="M1202.438,0h10.595c-2.657,112.975,7.484,87.791-13.218,108.622
  c-0.029,0.026-52.063,49.539-53.091,50.596c-8.926,9.238-12.855,8.772-12.962,18.287c-0.005,0.61,0.064,32.977,0.311,36.61
  c-0.012,0.501,0.159,87.828,0.159,87.828c-0.13,4.683,0.47,6.58,8.594,18.354c6.948,9.172,7.663,15.921,0.866,24.874
  c-1.927,1.397-3.764,2.983-5.965,3.934c-7.901,3.456-17.497,2.197-24.453-7.167c-2.818-3.751-2.952-8.838-1.836-13.224
  c1.122-4.575,4.733-7.838,7.069-11.772c10.364-16.624,4.231,4.593,5.307-124.194c0.266-28.609-1.949-22.17,7.929-32.694
  c0.156-0.17,23.21-22.319,24.356-23.252c0.61-0.566,16.521-15.609,30.864-29.461c4.965-3.959,9.162-8.753,13.736-13.145
  c2.043-1.927,2.476-4.874,2.415-7.557c-0.006-0.358-0.468-40.022-0.561-42.063C1202.48,29.717,1202.48,14.859,1202.438,0
   M1127.412,322.345c-12.225,4.081-8.276,21.755,3.434,20.836c6.002-0.024,11.028-6.008,10.07-11.937
  C1140.496,324.901,1133.463,320.052,1127.412,322.345z"></path><path d="M1220.242,0h22.764c10.025,9.123,15.244,9.449,13.663,22.788
  c-1.915,6.996-9.357,11.998-16.567,11.107c-4.713-0.565-22.063-0.291-21.751-17.439C1218.205,10.882,1220.535,5.587,1220.242,0z"></path><path d="M1264.294,0h12.339c-3.763,6.754-2.357,5.877-2.464,20.123
  c0.329,4.792,1.14,40.955-0.531,45.912c-1.104,3.379-4.02,5.648-6.515,7.99c-3.891,3.233-7.319,6.972-11.107,10.321
  c-0.926,0.835-20.833,19.957-22.812,21.654c-2.605,2.275-25.222,24.239-25.838,24.819c-7.41,6.579-38.816,36.77-39.434,37.366
  c-4.46,4.107-3.191,1.406-3.031,73.994c-0.004,0.612-0.101,32.552,0.25,35.402c0,0,0.154,36.269,0.14,37.763
  c0.094,32.935,0.385,33.046-0.659,36.25c-1.116,3.269-4.05,5.325-6.362,7.704c-3.068,2.958-6.215,6.478-10.65,7.155
  c-6.613,1.104-24.728-0.993-32.877,0.592c-3.998,1.109-11.274,7.612-11.016,12.925c0.654,34.087-1.41,37.427,1.909,41.032
  c10.863,12.383,11.723,7.803,30.199,13.773c5.099,1.635,9.204,5.538,11.711,10.205c0.488,2.446,1.287,4.88,1.305,7.393
  c-0.775,5.636-4.221,11.065-9.454,13.529c-11.443,5.392-22.311-0.08-26.137-7.478c-3.741-6.048-3.018-18.755-7.015-23.971
  c-2.903-3.959-7.234-6.545-10.363-10.296c-1.915-2.245-1.623-5.41-1.818-8.161c-0.375-47.827-1.641-41.322,6.575-49.736
  c9.824-9.477,8.942-7.631,18.659-8.009c19.932-0.513,24.117,0.974,27.149-0.952c1.56-1.034,6.876-5.375,8.247-8.485
  c1.078-2.241,0.854,1.356,0.683-59.709c-0.239-4.821-0.082-22.55-0.079-23.16c-0.506-14.025-0.284-16.882-0.598-93.324
  c-0.427-5.057,3.733-8.655,6.96-11.913c5.319-4.41,9.857-9.643,14.968-14.279c0.75-0.607,20.69-19.561,20.69-19.561
  c1.272-1.384,22.397-21.156,24.606-23.532c1.123-1.215,23.968-22.475,25.161-23.642c1.848-2.092,4.001-3.892,5.923-5.923
  c0.25-0.146,0.744-0.445,0.994-0.592c0.147-0.274,0.439-0.817,0.592-1.092c3.41-2.44,6.203-5.612,8.844-8.851
  C1265.707,52.451,1261.776,12.405,1264.294,0 M1122.112,444.331c-3.735,15.64,13.303,18.358,16.524,9.467l0.775,0.494
  c-0.171-0.396-0.506-1.195-0.677-1.592l1.305,0.232c-0.152-0.342-0.464-1.037-0.616-1.379l0.83,0.037
  c0.006-2.446,0.646-5.05-0.384-7.368C1135.938,435.895,1123.45,436.989,1122.112,444.331z"></path><path d="M1287.13,0h14.035c-10.106,14.403-8.386-7.989-8.265,73.232
  c0.167,8.296-7.272,11.077-24.282,28.54c-1.015,0.889-26.721,25.162-27.332,25.74c-0.503,0.472-18.921,18.241-20.318,19.421
  c-2.243,1.883-22.72,21.603-23.746,22.55c-17.043,14.823-13.992,14.109-14.188,22.648c0.001,0.61,0.177,104.448,0.531,108.573
  c0.064,68.466,2.223,61.697-6.941,70.67c-1.292,1.341-18.106,16.871-29.302,28.747c-7.619,8.321-15.062,11.705-25.673,7.624
  c-11.503-4.622-13.595-19.025-7.027-26.271c11.699-12.605,24.269-4.309,37.671-2.013c4.576-0.937,8.02-5.42,20.873-17.908
  c0.519-1.738,1.135-3.489,1.141-5.325c-0.761-19.305-0.616-92.319-0.646-97.618c0-0.006-0.493-24.406-0.421-27.387
  c0.031-1.032,0.02-28.574-0.171-44.625c0.215-6.701-0.337-6.464,6.819-13.724c0.611-0.586,19.461-18.934,22.178-21.166
  c3.047-2.657,23.908-23.046,26.747-25.673c12.629-11.684,26.974-25.909,27.985-26.857c3.313-2.893,12.149-11.457,16.542-15.902
  c7.319-6.862,9.176-7.14,9.094-14.316c0-0.001-0.659-54.932-0.659-54.933c-0.018-2.69-0.073-5.471,0.903-8.027
  c0.842-2.123,2.233-3.971,3.66-5.74C1286.539,0.195,1286.929,0.067,1287.13,0 M1127.065,400.426
  c1.903,0.183,3.806,0.439,5.728,0.628c1.793-0.665,3.532-1.537,4.928-2.873c6.921-12.351-2.805-18.353-8.747-17.561
  C1118.66,381.529,1120.462,397.322,1127.065,400.426z"></path><path d="M1355.489,0h10.516c0.285,18.298-1.004,19.658,3.654,26.497
  c10.68,14.552,10.755,17.715,9.753,25.801c-1.974,11.984-23.256,18.958-33.566,5.965c-4.758-5.325-5.264-13.852-1.379-19.787
  c7.935-12.38,11.306-14.518,11.004-23.807C1355.324,9.778,1355.293,4.886,1355.489,0 M1352.298,45.235
  c0.323,2.714,0.384,5.721,2.354,7.856c3.141,4.166,10.162,3.678,12.974-0.647c2.365-4.256,2.495-8.03,1.501-10.79
  C1365.11,33.374,1350.833,35.643,1352.298,45.235z"></path><path d="M1374.818,0h35.524c3.8,4.739,6.874,10.949,5.301,17.152
  c-0.506,2.672-2.635,4.526-4.489,6.325c-12.905,12.53-32.989,4.001-34.646-13.248C1376.209,6.777,1375.343,3.416,1374.818,0z"></path><path d="M1422.547,0h10.223c0.621,4.181,0.516,35.334,0.482,39.098
  c0.008,4.876-3.157,8.615-13.755,17.793c-31.841,26.783-12.873,23.99-51.956,23.99c-9.171,0.071-8.312-0.891-15.194,5.154
  c-33.376,32.766-34.484,29.37-34.505,38.995c0.192,23.55-0.324,59.998,0.994,65.07c1.935,5.375,11.594,15.29,13.035,22.855
  c3.047,24.234-30.824,28.331-36.555,7.503c-1.367-8.419-0.087-10.991,10.906-26.82c3.41-5.185,1.622-11.449,1.885-17.207
  c-0.433-16.097,0.329-32.23-0.787-48.303c0.183-5.349-0.964-11.888,3.404-15.957c0.615-0.587,34.804-33.7,37.281-35.811
  c8.102-6.38,8.132-4.236,23.185-4.813c13.431-0.471,16.917,2.187,23.178-4.483c31.202-32.003,28.898-19.115,28.04-54.848
  C1421.87,8.149,1422.633,4.081,1422.547,0 M1305.082,209.497c-3.619,10.919,6.326,18.05,13.242,13.242
  c2.812-1.885,4.227-5.343,4.44-8.631C1323.15,204.962,1309.3,200.617,1305.082,209.497z"></path><path d="M1459.255,0h10.534c-0.221,5.374,1.183,20.266,0.397,33.621
  c-0.522,7.238-12.866,16.164-18.22,21.55c-0.61,0.6-39.697,37.974-42.294,40.093c-5.251,4.438-9.666,2.558-24.862,3.001
  c-13.749,0.226-12.096-2.404-21.611,6.6c-14.362,14.721-14.607,10.84-14.761,23.819c0.516,15.056,0.614,60.498,0.622,61.057
  c0.189,10.558-0.043,21.111,0.085,31.669c0.049,4.227,1.238,8.588-0.177,12.724c-1.031,3.587-4.331,5.697-6.728,8.302
  c-3.123,3.086-6.6,6.716-11.296,6.844c-61.555,2.325-44.358-6.036-62.875,11.083c-5.99,6.225-10.899,7.865-10.693,15.359
  c0.242,93.427-0.467,88.988,3.123,94.166c9.086,13.231,12.643,17.02,10.851,26.82c-3.798,13.412-24.217,17.232-33.682,5.154
  c-3.324-4.843-1.787-10.857-1.586-16.286c0.982-3.928,3.953-6.935,6.094-10.272c7.456-11.551,6.133-4.89,5.892-36.14
  c-0.576-12.143-0.53-67.175-0.378-69.407c0.573-4.233,4.154-7.088,7.002-9.918c4.264-3.373,7.771-7.57,11.931-11.065
  c2.336-1.964,4.19-4.563,6.984-5.947c4.8-2.83,10.558-1.452,15.834-1.793c4.79,0.294,22.23-1.18,31.706-0.323
  c9.837-1.026,5.534,1.757,14.493-5.49c1.708-2.019,3.703-4.245,3.464-7.1c-0.122-18.701,0.012-37.415-0.537-56.11
  c0,0-0.205-40.775-0.238-42.697c0.087-10.51-1.124-13.299,4.142-18.36c0.586-0.615,19.406-18.642,21.458-19.933
  c4.385-2.71,7.458-1.658,33.468-1.824c6.797,0.031,9.063-5.446,46.668-40.727c14.099-11.876,15.294-14.909,15.231-17.982
  C1459.334,20.324,1459.237,10.162,1459.255,0 M1249.435,380.645c-4.452,4.385-4.671,4.19-3.3,10.266
  c0.58,1.94,0.159,4.172,1.354,5.929c1.641,3.147,5.813,4.203,9.046,3.196c2.653-0.689,4.392-2.958,6.087-4.953
  C1267.361,383.858,1257.605,377.978,1249.435,380.645z"></path><path d="M1477.426,0h10.656c1.152,55.588,1.765,47.481-6.551,56.098
  c-1.606,1.653-40.67,38.869-41.709,39.971c-0.582,0.616-16.388,15.658-18.641,17.189c-4.734,3.217-8.725,2.155-28.021,2.379
  c-11.104,0.241-9.357-1.124-17.762,6.935c-6.961,7.136-9.172,6.929-8.43,16.493c0.094,0.712,0.891,72.64,0.891,72.64
  c-0.41,4.255,0.563,22.571-0.293,27.43c-0.734,3.748-1.53,3.787-19.61,21.233c-14.324,13.09-9.562,10.36-17.609,23.264
  c-5.87,9.604-20.659,11.527-30.254,2.794c-6.052-6.246-6.735-16.687,0.079-23.801c8.785-7.389,14.17-5.757,29.565-4.892
  c6.376,0.455,5.246,1.258,11.839-4.935c7.164-7.853,16.227-12.295,15.871-19.787c0,0-0.702-90.159-0.823-100.058
  c-0.809-8.912,8.667-13.656,13.23-19.043c2.33-2.397,4.959-4.477,7.746-6.331c5.325-0.866,10.76-1.592,16.164-1.037
  c5.52,0.25,11.065-0.573,16.56,0.128c5.946-0.278,9.862-6.668,21.849-17.603c4.151-3.34,25.132-24.439,28.619-27.052
  c0.171-0.293,0.506-0.891,0.671-1.183c0.305-0.085,0.909-0.244,1.214-0.329c0.11-0.299,0.329-0.903,0.439-1.208
  c1.734-1.252,13.317-11.605,14.303-15.365c1.464-5.41,0.079-11.016,0.134-16.506C1477.56,18.28,1477.45,9.143,1477.426,0
   M1305.826,268.315c-1.592,4.703-0.226,10.729,4.013,13.62c11.872,6.012,18.696-11.759,8.741-17.073
  C1314.365,262.142,1307.875,263.551,1305.826,268.315z"></path><path d="M1555.659,0h13.95c-2.167,3.167-20.349,20.621-23.246,23.16
  c-0.009,0.009-20.483,19.747-21.208,20.373c0,0-25.246,24.146-25.862,24.777c-8.884,9.036-37.713,35.568-52.524,50.614
  c-11.467,11.231-14.727,13.69-19.037,13.809c-28.404,0.623-24.947-1.349-32.48,5.99c-3.288,3.397-7.917,5.947-9.418,10.711
  c-0.671,3.208-0.171,6.514-0.232,9.765c0.179,20.849,0.439,31.419,0.439,31.419s0.383,60.269,0.293,75.964
  c0.257,3.652-0.983,5.384-14.871,18.488c-1.801,1.481-22.347,21.201-22.556,21.428c-10.369,10.992-10.292,5.331-13.98,22.3
  c-1.104,5.227-1.726,10.924-5.234,15.2c-7.307,8.222-21.641,8.674-29.315,0.726c-4.677-4.57-7.372-13.347-0.585-22.648
  c6.838-5.776,9.998-5.535,18.726-7.515c4.483-1.055,9.369-1.61,12.998-4.739c6.892-5.435,12.358-12.437,19.012-18.146
  c2.434-2.016,21.847-20.912,22.465-21.507c2.08-1.976,3.501-4.703,3.44-7.624c-0.238-12.895,0.11-25.807-0.683-38.69
  c0-0.002-0.494-60.374-0.494-60.374c-0.678-14.364,0.012-18.316,2.226-21.105c3.721-4.8,8.326-8.82,12.864-12.821
  c2.696-3.086,6.472-5.49,10.68-5.581c26.57-0.155,23.721,1.599,31.7-5.679c0.541-0.529,29.33-28.663,30.821-30.041
  c1.359-1.086,16.094-15.014,19.122-18.268c2.46-2.179,24.168-23.455,26.789-25.569c1.573-1.321,23.266-22.411,25.667-24.423
  c4.014-3.605,7.509-7.777,11.76-11.113c0.098-0.22,0.293-0.659,0.39-0.884C1548.505,7.076,1550.417,6.013,1555.659,0
   M1304.844,331.58c0.567,3.074,1.049,6.563,3.617,8.686c2.568,1.683,5.898,2.178,8.796,1.037c7.49-5.775,7.296-13.047,2.885-16.969
  C1314.644,318.636,1303.017,321.554,1304.844,331.58z"></path><path d="M1585.608,0h14.572c-1.793,2.714-3.983,5.13-6.429,7.259
  c-5.508,4.623-10.327,9.979-15.572,14.883c-3.052,2.64-25.313,24.311-25.923,24.899c-10.793,9.97-29.467,28.363-29.467,28.363
  c-0.614,0.607-30.468,28.93-33.267,31.346c-7.824,8.348-23.673,22.975-24.142,23.465c0,0-21.683,20.97-21.684,20.97
  c-8.762,7.568-32.373,30.506-37.421,35.701c-3.104,3.291-1.72,1.087-1.72,55.275c0.238,33.476,2.653,38.983-3.806,44.185
  c-6.184,5.206-28.998,27.982-32.871,31.206c-7.555,6.709-5.056,5.995-5.477,30.766c0,7.224-8.467,10.871-22.318,25.606
  c-5.613,5.938-4.101,20.026-9.839,27.997c-10.651,13.41-32.996,6.302-33.786-8.417c-2.437-17.258,16.539-18.985,23.599-20.659
  c12.927-3.33,8.475-1.104,20.623-12.346c3.666-3.855,7.814-7.222,11.266-11.29c2.719-13.966-2.828-14.359-0.616-19.653
  c1.183-3.08,1.226-6.398,1.842-9.601c1.531-2.287,3.007-4.672,5.166-6.435c5.789-4.715,10.65-10.43,16.176-15.432
  c3.011-2.476,18.051-17.258,19.342-19.391c1.775-3.806,1.122-8.161,1.019-12.217c-0.756-19.488,0.207-39.013-0.885-58.483
  c-0.134-19.838-0.872-22.456,3.672-26.588c0.61-0.581,23.111-22.674,26.027-25.179c1.604-1.31,17.841-16.976,19.336-18.567
  c0.912-1.154,17.997-17.509,18.622-18.097c4.636-3.885,8.442-8.668,13.206-12.407c0.146-0.238,0.439-0.72,0.585-0.958
  C1477.228,104.833,1582.259,3.707,1585.608,0 M1306.277,389.709c0.335,2.897,0.756,5.959,2.415,8.442
  c4.688,7.163,18.642,3.146,16.512-9.393C1322.131,377.811,1305.606,379.193,1306.277,389.709z"></path><path d="M1823.248,0h14.377c-2.245,3.353-11.884,14.709-18.817,15.45
  c-10.155,0.543-69.365,0.801-88.975,0.683c-9.816-0.11-115.062,0.51-118.247,0.592c-8.145,0.165-16.709,15.009-38.757,33.633
  c0,0-71.528,68.851-71.53,68.852c-3.62,3.064-48.164,45.881-54.518,52.133c-2.177,2.379-5.368,4.453-5.667,7.948
  c-0.171,4.221-0.402,8.637,1.415,12.571c7.946,12.614,17.319,21.505,9.936,33.523c-9.461,12.784-27.525,9.126-33.499-2.214
  c-5.734-10.165,3.257-19.582,6.142-24.087c7.534-11.888,5.021-7.714,5.917-22.251c0.432-7.055,6.45-9.848,11.803-15.578
  c1.844-1.898,21.188-20.398,21.361-20.55c0,0,39.277-37.62,42.063-40.44c18.385-17.682,43.798-42.434,46.784-44.917
  c0.098-0.238,0.281-0.701,0.372-0.939c1.83-1.244,3.465-2.769,4.88-4.483c0.751-0.93,26.599-25.532,27.149-25.972
  c5.2-4.381,12.187-13.426,17.658-15.792c5.175-1.868,14.7-0.246,25.496-0.964c0,0,82.024-0.219,95.141-0.403
  c24.307-0.87,53.121-0.03,53.121-0.03c10.695-1.064,32.336,0.113,38.531-0.897C1818.82,5.294,1821.205,2.598,1823.248,0
   M1435.814,224.087c1.879,0.512,3.8,0.476,5.709,0.073c9.642-5.028,6.925-18.608-3.251-19.214
  C1429.566,204.907,1424.419,217.227,1435.814,224.087z"></path><path d="M1847.592,0h14.102c-0.134,0.384-0.409,1.147-0.543,1.531
  c-1.901,2.096-23.297,22.828-29.217,28.07c-4.803,4.241-7.77,3.323-44.771,3.587c-0.002,0-110.384,0.549-110.384,0.549
  c-56.612-0.106-55.226-0.324-58.404,2.44c-5.344,4.658-27.301,26.33-27.912,26.93c-14.736,13.349-65.022,62.563-65.632,63.143
  c-5.909,5.033-40.205,38.734-45.96,43.679c-2.836,2.885-6.777,5.514-7.063,9.93c-0.311,4.309,0.097,24.799,0.262,26.356
  c0.279,39.741,1.187,38.721-2.714,43.71c-11.819,9.394-9.93,12.181-12.022,19.903c-1.446,5.185-1.635,11.046-5.307,15.316
  c-5.111,6.569-14.645,8.35-22.257,5.673c-9.29-4.065-15.28-14.615-9.613-25.265c4.887-8.222,14.598-8.606,25.887-11.272
  c6.502-0.97,11.784-5.813,15.133-11.229c2.129-5.965,0.555-12.413,0.396-18.567c0.699-49.179-2.454-49.595,4.093-55.61
  c0.61-0.577,24.374-23.923,28.381-27.149c0.61-0.579,39.204-37.96,40.477-39.696c4.007-3.019,7.094-7.051,11.028-10.168
  c0.152-0.22,0.464-0.653,0.622-0.872c1.231-0.952,26.267-25.124,26.838-25.734c1.894-2.057,36.59-35.135,37.726-36.128
  c8.26-7.747,8.201-3.373,70.938-4.709c6.989-0.371,19.812-0.088,81.686-0.5c64.848,0.315,59.02,0.643,64.997-5.301
  C1834.496,12.132,1841.358,6.386,1847.592,0 M1430.88,267.144c-2.983,5.709-0.281,14.371,6.289,16.103
  c8.449,2.154,15.085-10.38,8.003-16.865C1441.469,262.38,1433.875,262.185,1430.88,267.144z"></path><path d="M1871.691,0h14.676c-3.37,5.223-6.783,6.823-25.094,25.307
  c-0.001,0.001-23.294,22.001-23.294,22.001c-5.278,4.703-10.097,2.22-54.439,3.3c-4.632,0.369-61.241,0.179-93.354,0.354
  c-7.211,0.104-57.492-0.023-61.033,0.488c-4.729,0.47-7.289,5.196-18.634,15.865c-3.071,2.555-21.198,20.47-21.727,21.08
  c-1.959,1.483-12.055,11.014-12.657,11.626c-0.611,0.6-14.514,14.358-15.432,15.109c-3.495,2.946-26.086,25.147-26.698,25.728
  c-2.757,2.252-30.027,28.656-32.346,31.102c-2.824,2.824-9.702,7.783-11.01,11.827c-0.385,1.17-0.045,46.142-0.037,46.753
  c0,0,0.534,21.634,0.47,39.672c0.065,6.422-2.271,8.682-10.589,16.005c-5.932,5.089-16.074,16.533-21.007,19.69
  c-3.302,2.179-5.806,2.171-29.729,1.763c-5.165,0.057-9.391-1.141-16.634,8.021c-2.626,3.728-1.233,2.83-1.354,39.306
  c0.049,2.049,0.238,4.276,1.537,5.978c3.446,3.873,7.265,7.502,11.913,9.924c2.928,0.622,5.874,1.25,8.863,1.629
  c11.167,0.974,23.413,8.435,22.995,19.677c0.187,14.506-19.678,22.649-32.188,11.534c-8.345-8.423-5.591-22.734-11.052-29.132
  c-8.446-9.719-11.845-7.854-11.845-17.799c-0.033-14.493-0.711-36.718,0.049-41.727c0.811-3.562,3.922-5.807,6.313-8.308
  c3.471-3.391,7.155-7.484,12.401-7.594c32.006-1.249,29.13,2.573,37.458-4.752c1.177-1.446,2.422-2.842,3.818-4.093
  c5.703-4.654,10.62-10.168,15.902-15.279c3.428-3.294,3.343-8.405,3.202-12.797c-1.067-13.584-0.037-27.247-1.086-40.837
  c-0.006-0.611-0.321-37.064,0.031-40.166c0.598-3.568,3.233-6.313,5.91-8.539c3.806-3.257,7.051-7.124,10.949-10.29
  c0.975-0.77,10.628-10.999,11.9-11.967c2.842-2.214,5.087-5.081,7.917-7.32c0.201-0.287,0.61-0.854,0.811-1.141
  c2.55-1.487,30.076-29.508,35.365-33.682c0.116-0.262,0.342-0.781,0.457-1.043c0.305-0.14,0.909-0.421,1.214-0.561
  c2.219-2.049,21.014-20.86,22.617-22.056c1.496-1.341,29.362-28.413,29.406-28.455c6.037-4.662,11.053-12.254,16.17-13.73
  c4.243-1.206-3.81-0.619,118.613-0.939c5.823-0.337,19.638-0.49,20.123-0.476c20.543,0.281,41.081-0.152,61.624-0.037
  c2.739-0.037,5.843,0.177,8.094-1.714c4.997-4.111,26.113-24.967,26.771-25.673c1.08-1.025,2.159-2.08,3.184-3.184
  C1864.884,7.161,1868.434,3.715,1871.691,0 M1430.806,389.044c0.506,2.464,0.775,5.063,2.086,7.271
  c4.041,6.284,9.74,5.371,14.883-0.226c2.172-2.385,2.245-5.923,1.574-8.893C1446.703,378.8,1432.195,376.7,1430.806,389.044z"></path><path d="M1896.37,0h14.334c-3.558,4.575-24.317,24.436-28.021,27.778
  c-1.04,1.04-33.278,32.767-38.665,37.061c-5.015,4.041-6.527,1.962-42.831,3.086c-0.334,0.014-74.283,0.322-95.721,0.256
  c-72.924,2.284-68.791-3.211-77.3,5.368c-5.278,4.951-37.997,36.831-38.617,37.427c-1.197,1.291-17.351,16.239-17.963,16.804
  c-0.615,0.599-30.507,29.691-32.901,31.785c-2.836,2.464-5.075,5.52-7.899,7.99c-4.788,4.538-10.052,8.637-14.139,13.858
  c-2.363,2.945-1.952,2.466-1.08,54.616c-0.281,29.798,1.19,39.013-0.415,44.594c-0.92,2.701-0.839,3.238-23.856,24.886
  c-1.062,0.925-24.786,22.892-31.108,30.919c-2.001,2.544-4.709,4.38-6.935,6.697c-3.385,3.434-7.649,6.319-12.522,6.954
  c-15.918,2.402-28.88-14.166-18.659-27.753c2.897-3.763,7.362-5.965,11.937-6.929c3.019-0.775,6.124,0,9.119,0.579
  c18.615,4.584,14.418,4.606,19.995,3.05c0.324-0.354,34.426-32.914,35.603-33.78c0.11-0.293,0.329-0.884,0.439-1.177
  c0.299-0.098,0.903-0.299,1.202-0.396c1.281-1.561,2.672-3.038,3.879-4.672c2.841-3.81,0.722-7.448,0.683-58.788
  c0.201-22.386-1.349-32.458-0.201-39.129c0.946-5.768,15.471-16.819,23.16-25.002c0.612-0.595,25.763-25.174,28.534-27.576
  c0.542-0.424,19-18.674,19.403-19.067c0.33-0.364,22.262-21.467,24.02-22.922c11.015-10.746,13.723-13.893,25.063-24.258
  c4.535-3.966,6.354-2.812,56.128-3.025c0.612,0.008,30.063-0.264,32.968-0.055c0,0-1.476-0.55,78.063-0.464
  c0,0,41.488-0.494,41.489-0.494c2.994,0.13,3.908-0.597,22.825-19.537c2.617-2.72,5.758-4.867,8.32-7.649
  C1875.131,20.55,1885.983,10.528,1896.37,0 M1429.501,329.964c0.622,3.269,1.128,6.697,3.056,9.509
  c7.371,6.445,16.507-1.591,15.127-9.418C1446.474,318.896,1428.118,319.477,1429.501,329.964z"></path><path d="M1920.72,0h14.316c-5.203,7.284-9.144,9.055-42.661,42.356
  c-18.549,16.264-38.369,39.403-45.479,41.801c-4.843,1.393-76.83,0.999-203.726,1.671c-5.517,0.34-6.762,3.733-14.297,10.857
  c-5.272,4.416-31.74,30.943-35.463,33.975c-5.748,4.647-43.665,42.733-52.615,50.517c-6.484,5.873-8.036,7.471-7.259,15.853
  c0,0,0.348,28.649,0.348,28.65c-0.068,18.61,1.449,113.189,1.257,122.041c0.104,3.489-1.989,6.527-4.477,8.765
  c-3.147,2.903-5.776,6.569-9.747,8.417c-3.794,1.385-7.923,1.379-11.906,1.311c-5.679-0.268-11.357,0.195-17.03-0.006
  c-8.342,0.209-7.456-1.487-16.042,7.503c-2.354,2.386-2.271,2.218-1.793,41.666c-0.31,7.823,0.445,6.844-10.241,17.115
  c-3.923,3.743-2.406,7.084-6.667,22.062c-0.848,2.91-2.562,5.447-4.398,7.814c-1.236,0.84-11.903,10.49-24.716,2.086
  c-7.244-4.526-11.522-14.98-3.843-25.319c7.98-6.56,10.082-5.178,24.124-8.753c6.483-1.584,16.236-9.121,15.828-15.023
  c-0.185-46.203-3.577-42.017,11.211-54.354c2.708-2.324,6.264-3.44,9.82-3.373c29.911,0.335,30.052,0.849,35.939-5.093
  c2.19-2.293,4.166-5.227,3.977-8.546c-0.305-10.156,0.183-20.342-0.641-30.48c0-0.001-1.226-90.274-1.226-90.274
  c0.098-47.493-4.209-32.727,10.638-49.468c4.001-4.585,39.582-38.221,40.33-39.019c0.61-0.592,29.294-28.368,29.864-29.156
  c1.969-1.676,25.88-24.791,25.911-24.825c5.198-5.824,0.123-4.317,145.5-4.495c70.789-2.007,63.536,3.685,75.336-8.277
  c0,0,33.87-33.217,33.871-33.218c0.035-0.037,22.966-22.044,24.051-22.953C1912.839,7.942,1916.792,3.983,1920.72,0
   M1431.453,444.026c-1.369,2.719-0.664,9.809,4.404,14.09c7.145,4.607,15.815-3.543,13.529-11.65
  C1446.956,437.818,1434.883,436.453,1431.453,444.026z"></path><path d="M1944.886,0h14.578c-4.331,5.652-24.83,24.371-35.744,35.372
  c-1.006,0.865-23.415,22.764-24.075,23.38c-6.352,5.627-34.661,33.735-42.331,40.666c-4.76,3.763-8.405,2.737-28.68,2.824
  c-0.617-0.006-33.431,0.588-41.477,0.457c-48.907-0.281-96.337,0.586-96.337,0.586c-0.506-0.025-36.888-0.014-42.374,0.104
  c-5.593,1.037-8.619,6.496-12.59,10.016c-8.064,7.161-15.42,15.054-23.178,22.526c-4.829,3.956-27.907,26.957-31.181,29.9
  c-1.265,1.033-20.458,19.392-20.909,19.879c-8.485,9.009-8.99,6.231-8.93,18.036c0.609,12.9,0.626,42.756,0.61,45.143
  c0.344,5.638,0.95,55.959,0.915,56.385c0.904,57.796,1.495,56.635-1.781,60.386c-0.64,0.7-21.441,21.475-21.922,21.946
  c-9.507,8.889-14.946,19.254-25.289,20.94c-14.024,2.776-28.438-10.082-21.605-24.575c7.319-16.091,26.86-8.189,35.445-6.142
  c4.497,0.811,4.559,3.159,14.139-6.398c9.482-9.738,11.929-10.164,11.797-17.64c-0.933-10.526-0.872-70.059-1.665-85.144
  c0-0.001-0.866-72.255-0.866-72.256c-0.14-3.416,0.671-7.076,3.214-9.521c2.928-2.806,5.642-5.85,8.808-8.405
  c0,0,20.044-19.684,20.562-20.159c6.448-5.204,6.746-7.271,14.255-13.322c0.152-0.226,0.458-0.683,0.604-0.909
  c6.453-5.343,11.821-11.858,18.098-17.402c0.356-0.326,27.655-26.686,27.655-26.686c2.91-3.361,7.033-6.045,11.638-5.923
  c18.927,0.049,37.854-0.183,56.781-0.012c18.483-0.794,27.606-0.423,38.372-0.5c0.003,0,65.705-0.464,65.705-0.464
  c1.986,0.24,16.985,0.296,18.427,0.128c8.088-0.994,16.341,1.177,24.331-0.921c4.089-3.14,19.319-18.833,22.172-21.062
  c0.104-0.213,0.311-0.647,0.415-0.866C1875.63,67.959,1942.952,2.231,1944.886,0 M1492.022,388.544
  c1.391,7.538-0.936,4.439,5.172,10.729c3.208-0.415,6.459-0.872,9.534-1.927c3.574-2.062,4.831-6.899,3.538-10.674
  C1506.971,376.613,1491.398,377.831,1492.022,388.544z"></path><path d="M1975.738,0h14.182c-2.907,4.104-56.721,55.722-59.672,58.294
  c-0.611,0.576-51.677,50.321-54.646,53.304c-10.942,10.095-9.291,7.032-21.318,8.1c-0.617,0.003-112.316,0.283-120.131,0.592
  c-82.109,0.472-80.866-1.104-84.626,3.269c-6.362,5.633-31.761,30.998-31.761,30.998c-3.742,2.954-42.33,40.551-42.941,41.13
  c-6.49,6.194-4.233,2.29-4.257,48.931c0.319,5.253,1.73,123.204,1.732,123.822c-0.265,8.41,5.662,2.289-49.157,54.366
  c-2.385,2.507-5.551,5.185-5.197,9.015c0.329,7.277,1.891,14.541,1.086,21.843c-3.692,14.502-20.341,17.343-30.205,9.875
  c-8.265-5.16-9.583-18.39-2.452-25.057c3.013-3.153,7.1-4.88,11.046-6.545c7.309-3.025,8.29-6.153,17.975-14.468
  c2.798-2.714,35.075-34.779,39.208-38.098c11.16-10.374,7.202-6.47,7.124-50.663c-0.587-26.232-0.819-83.635-1.482-99.362
  c-0.443-2.469-0.327-28.075-0.329-28.686c-0.122-4.05,2.348-7.643,5.264-10.235c3.701-3.063,16.146-15.664,16.146-15.664
  c5.116-4.084,29.409-28.797,35.292-33.578c27.742-27.392,28.36-28.483,32.852-29.296c7.925-1.338,85.584-0.112,182.848-1.409
  c36.968-0.309,23.385,5.749,55.494-25.063c2.686-2.361,57.915-56.041,62.875-60.972c4.392-3.507,8.143-7.704,12.144-11.632
  C1967.138,8.546,1971.444,4.276,1975.738,0 M1496.359,440.549c-2.428,1.647-3.916,4.77-3.129,7.667
  c1.067,3.275,0.915,7.234,3.873,9.582c4.38,4.111,12.004,0.994,13.712-4.318l0.354,0.018c2.408-8.41-2.34-13.097-6.917-14.236
  C1501.592,439.067,1498.567,438.732,1496.359,440.549z"></path><path d="M2006.328,0h14.261c-3.189,4.781-58.48,56.519-63.277,62.832
  c-1.995,2.513-4.904,3.995-7.222,6.142c-1.805,1.641-3.483,3.41-5.221,5.105c-0.612,0.627-55.738,54.064-55.756,54.079
  c-5.213,4.314-6.182,8.461-14.108,8.747c-0.001,0-62.771,0.494-62.771,0.494c-0.61-0.003-150.501-0.446-154.265,1.836
  c-1.475,0.827-44.416,42.764-45.027,43.35c-2.895,2.501-19.814,18.578-22.422,21.483c-2.568,2.873-1.596,5.472-1.635,24.087
  c0,0,1.372,100.52,1.372,100.521c1.137,54.249,0.889,52.221-2.867,55.842c-19.35,17.995-20.881,19.857-20.702,23.52
  c-0.075,16.488-0.594,14.206,5.209,23.215c4.824,7.256,14.743,17.416,6.106,28.875c-6.056,9.603-25.896,10.74-32.907-3.178
  c-6.348-10.977,5.065-19.815,10.967-31.913c1.587-3.326,0.677-9.959,0.781-19.427c-0.091-5.202,1.817-7.034,19.299-23.752
  c7.043-7.195,4.107,2.845,3.684-81.747c-0.06-0.644-2.249-92.367-0.86-97.289c1.165-3.153,3.55-5.697,6.094-7.826
  c3.263-2.623,5.917-5.898,9.009-8.71c5.579-4.788,25.52-24.652,25.899-25.185c6.602-5.313,28.326-29.059,34.548-31.45
  c3.547-1.205,116.184-1.32,116.795-1.324c51.001,0.086,70.798-0.512,70.798-0.512c33.21-0.249,31.407,1.082,36.286-3.672
  c2.199-2.273,30.149-29.001,30.156-29.01c9.441-9.427,63.325-61.482,63.424-61.588c0,0,17.133-16.417,19.854-19.226
  C1996.94,9.845,2001.857,5.13,2006.328,0 M1553.567,445.96c-0.388,12.705,7.638,14.598,12.26,12.815
  c5.063-1.86,7.783-8.015,6.252-13.096C1569.046,435.896,1553.765,437.01,1553.567,445.96z"></path><path d="M2030.634,0h14.31c-2.686,3.932-89.052,86.99-89.701,87.566
  c-0.61,0.584-56.23,55.049-60.264,58.69c-15.712,12.782,5.677,5.729-102.284,8.582c0,0-120.197,0.439-120.199,0.439
  c-10.725-0.357-8.812,2.628-25.789,17.768c-0.61,0.563-19.399,18.213-20.69,21.208c-1.141,3.434-0.588,19.916-0.281,23.496
  c3.273,101.852-3.585,79.566,9.094,99.869c1.241,2.064,11.555,14.109,3.593,24.185c-5.703,8.476-18.599,9.387-25.362,5.465
  c-8.562-4.469-11.012-11.938-8.521-21.19c10.794-17.383,12.841-18.284,12.382-22.947c-0.013-0.131-0.921-56.691-0.921-56.696
  c0.746-59.24-7.259-52.787,12.846-69.901c3.483-3.013,5.959-7.002,9.515-9.942c3.239-2.659,6.575-5.227,9.412-8.344
  c3.751-3.532,7.039-7.722,11.565-10.333c5.685-2.8,12.151-0.958,18.201-1.659c0.001,0,116.996-0.805,116.996-0.805
  c3.837,0.317,7.698-0.287,11.534,0.256c4.081,0.531,8.161-0.238,12.248-0.323c70.411,0.238,60.295,1.273,69.401-6.484
  c1.026-1.436,26.056-25.166,26.625-25.777c27.675-27.773,49.445-47.303,62.734-61.075c3.114-2.766,27.61-26.913,31.449-30.12
  C2016.069,14.792,2023.168,7.21,2030.634,0 M1613.44,326.92c-0.805,4.489,1.013,9.497,4.745,12.187
  c5.624,3.501,14.053-1.934,13.206-8.491c-0.116-2.696-0.561-5.624-2.403-7.716C1624.578,318.152,1614.29,319.688,1613.44,326.92z"></path><path d="M2055.149,0h14.194c-1.638,2.543-32.659,32.728-36.335,35.963
  c-0.178,0.181-41.259,39.816-49.474,48.187c-18.263,16.651-11.151,12.792-19.067,18.854c-9.6,7.854-20.574,19.876-25.026,23.63
  c-0.001,0.001-24.441,23.733-24.441,23.734c-0.61,0.582-17.954,17.446-19.604,18.805c-3.572,2.887-4.969,2.78-42.978,2.605
  c-30.823,0.818-44.746,0.11-65.235,0.573c-53.411,0.41-52.56-2.088-58.647,4.477c-0.61,0.549-22.565,20.52-24.203,25.85
  c-1.897,5.972-2.202,12.352-4.355,18.25c-2.69,7.32-10.607,12.144-18.342,11.376c-15.064,0.533-24.896-18.227-13.462-29.266
  c6.189-6.722,20.756-5.923,29.656-10.546c2.551-1.278,20.85-19.741,24.069-22.953c7.806-6.803,6.884-5.676,19.525-5.984
  c15.985,0.22,32.962-0.396,32.962-0.396c5.446,0.567,3.201-0.201,42.075-0.031c67.391-0.635,69.099,1.162,73.653-2.8
  c0.065-0.057,10.804-10.635,17.878-17.128c1.679-2.449,9.117-8.824,14.297-14.218c0,0,24.709-24.05,24.709-24.051
  c0.047-0.049,23.946-23.057,25.081-23.978c0.11-0.287,0.336-0.854,0.445-1.141c0.329-0.11,0.988-0.323,1.318-0.427
  c0.122-0.281,0.372-0.842,0.5-1.122C1978.409,75.007,2053.326,2.041,2055.149,0 M1676.632,206.63
  c-2.287,2.037-2.214,5.362-2.214,8.173c2.412,10.951,9.689,8.557,12.413,8.125c6.933-4.414,6.476-12.082,2.922-15.658
  C1686.514,203.611,1680.115,203.031,1676.632,206.63z"></path><path d="M2220.039,0h13.87c-14.496,17.675-7.563,12.545-106.133,13.742
  c-51.865,2.879-40.921-7.777-62.472,14.316c-12.012,12.042-49.479,48.113-50.09,48.681c-4.287,3.754-82.341,79.934-85.992,83.516
  c-2.444,2.15-21.406,20.795-22.02,21.397c-9.589,8.358-6.593,6.818-18.744,7.259c0,0-27.429,0.711-58.611,0.457
  c-46.094,1.012-51.655-2.293-57.3,3.965c-3.875,4.028-59.003,56.957-64.027,62.24c-5.036,5.199-4.988,19.041-8.521,25.716
  c-6.021,12.069-24.02,13.239-31.773,2.958c-6.246-6.668-7.845-23.44,11.955-28.339c18.608-4.23,14.974-1.765,24.276-9.863
  c5.157-5.101,55.549-54.121,55.61-54.177c3.928-3.611,7.472-7.765,12.187-10.418c6.727-1.125,36.528-0.491,78.355-1.311
  c42.896,0.415,43.125,0.56,46.668-2.983c0-0.001,34.2-33.462,34.2-33.462c6.174-5.166,60.383-58.613,62.216-60.374
  c5.852-4.841,32.524-31.36,57.958-56.153c4.221-4.526,9.204-8.234,13.395-12.797c3.672-3.391,6.819-8.076,12.022-9.137
  c7.414-0.843,91.101-0.309,104.151-1.135c7.232-0.46,27.875,1.258,34.109-0.396C2217.398,3.257,2218.648,1.433,2220.039,0
   M1679.92,282.009c9.042,5.476,17.339-8.914,11.351-15.243c-1.696-2.232-4.422-3.312-7.094-3.757
  C1672.342,262.024,1673.081,278.562,1679.92,282.009z"></path><path d="M2250.372,0h13.523c-2.707,4.546-18.189,18.567-25.027,25.356
  c-5.453,5.285-8.349,4.693-15.548,4.861c-42.044-0.685-95.191-0.276-109.896,1.049c-4.395,0.304-7.401,5.135-15.237,12.571
  c-2.617,2.391-3.745,5.88-4.166,9.296c-0.415,4.264-1.976,8.283-2.958,12.425c-4.187,16.286-26.282,16.869-34.621,4.861
  c-7.096-10.414-1.221-23.143,11.449-25.521c14.509-3.619,17.844-2.229,24.941-10.095c14.821-16.629,17.194-11.737,36.524-12.785
  c0.021-0.002,63.514-0.238,72.012-0.189c31.844-0.185,25.519,1.182,37.805-10.235C2242.937,7.765,2247.042,4.245,2250.372,0
   M2070.983,50.218c-5.389,0.923-8.823,6.154-4.142,15.774c2.994,5.467,14.65,5.827,15.481-6.185
  C2083.054,53.872,2076.455,49.199,2070.983,50.218z"></path><path d="M2312.338,0h12.876c0,0-56.731,56.17-56.732,56.171
  c-13.185,12.638-4.325,7.476-62.844,8.905c-0.004,0-47.625,0.329-47.626,0.329c-13.354,0.226-9.425,1.165-17.603,5.526
  c-4.672,2.574-9.052,6.02-14.407,7.021c-6.929,1.189-14.45-1.391-19.019-6.771c-13.345-13.231,4.415-32.516,20.318-25.807
  c31.674,12.901-2.464,12.455,105.114,10.912c22.164-0.71,19.502,2.628,29.943-7.472c3.391-3.313,19.785-20.01,24.6-24.16
  c4.855-4.3,9.076-9.253,13.925-13.559C2305.031,7.753,2308.617,3.794,2312.338,0z"></path><path d="M2341.97,0h13.712c-4.056,5.14-23.783,24.167-26.789,26.954
  c-5.193,5.092-23.76,23.21-46.467,45.601c-24.916,22.467-30.08,32.948-38.995,32.895c-16.563,0.581-53.329-0.07-61.612,0.884
  c-2.13,0.198-3.284,0.326-15.566,12.84c0,0-23.819,23.245-23.819,23.246c-2.653,2.818-5.947,4.996-8.216,8.161
  c-3.678,5.038-8.68,8.863-12.943,13.358c-0.567,0.611-19.332,19.185-23.362,21.824c-5.163,3.358-20.846,0.99-42.294,2.226
  c-56.65,0.567-65.906,0.189-65.906,0.189c-5.95-0.167-56.792,0.501-57.403,0.506c-8.378,0.152-8.031,0.12-14.053,5.831
  c-8.271,7.875-10.93,10.943-15.109,11.339c-4.922,0.574-72.614,0.666-73.226,0.665c-15.337,0.804-15.098-0.755-20.745,4.556
  c-0.001,0.001-45.125,43.953-45.125,43.954c0,0-2.214,1.954-27.46,26.765c-0.579,0.611-14.792,14.458-21.958,20.794
  c-5.268,4.72-6.38,4.031-25.051,4.111c-15.977,1.004-30.794-3.093-31.602,6.051c-0.249,2.111,0.315,44.053,0.323,44.673
  c-0.073,1.714,0.165,3.55-0.567,5.16c-3.105,6.136-10.729,9.058-12.413,16.036c-2.01,7.107-2.732,18.032-6.496,22.55
  c-8.258,9.756-23.072,8.833-30.12,0.518c-7.842-8.164-5.115-24.481,10.101-27.79c20.952-4.764,17.922-2.593,27.155-11.992
  c2.306-2.257,2.977-5.624,2.647-8.741c-0.5-5.886-0.207-11.797-0.464-17.689c-0.175-2.255-1.794-25.99,1.775-30.486
  c5.856-6.951,5.737-7.427,41.496-7.106c4.526,0.043,9.082,0.756,13.59,0.006c5.897-4.103,23.074-21.457,23.532-22.074
  c5.177-4.012,18.702-18.489,22.715-22.05c4.73-3.923,36.135-35.011,37.458-36.268c11.259-9.217,15.464-17.642,22.355-18.909
  c7.001-0.995,4.982-0.661,84.693-0.793c6.537-0.256,6.785-1.685,19.183-13.931c4.476-4.5,8.88-3.873,22.867-3.782
  c0.618,0.01,28.922-0.486,34.188-0.256c5.026-0.302,36.677-0.284,40.263-0.317c16.361,0.118,68.226-0.046,71.353-0.201
  c11.315-1.021,7.019,0.793,27.503-18.903c0,0,24.721-24.093,24.722-24.093c0.597-0.617,25.064-24.33,28.595-28.003
  c2.952-3.202,6.759-5.429,9.881-8.454c3.154-2.946,7.759-2.556,11.754-2.647c0.613,0.003,48.828,0.098,54.982-0.476
  c3.818-0.299,6.435-3.465,9.088-5.874c6.045-6.161,12.4-12.022,18.213-18.409c0.001-0.001,22.336-21.501,22.337-21.501
  c0.611-0.599,32.19-31.79,39.519-38.586C2334.15,8.265,2338.682,4.691,2341.97,0 M1615.063,388.477
  c1.27,9.539,5.642,11.889,12.047,10.662c7.752-2.353,9.987-14.006,1.738-18.689C1623.177,376.96,1614.223,380.682,1615.063,388.477
  z"></path><path d="M2372.499,0h13.767c-3.119,3.998-50.55,50.279-51.163,50.852
  c-7.094,6.399-67.528,66.375-72.024,69.432c-4.714,3.236-9.681,1.905-41.605,2.428c-29.735,0.52-26.418-1.163-34.505,6.813
  c-4.513,4.726-70.677,68.895-71.377,69.602c-9.024,8.932-69.336,68.059-71.579,69.932c-41.43,39.284-31.758,34.73-47.199,35.658
  c-10.482,0.014-143.929,1.095-146.701,1.232c-3.497,0.064-5.631,1.135-18.372,14.322c-12.233,12.17-24.764,24.032-24.764,24.032
  c-1.816,1.727-56.542,55.221-59.386,57.684c-2.172,2.01-48.966,47.534-49.541,48.077c-4.575,4.234-15.092,3.005-35.902,3.294
  c-12.698,0.381-8.68-1.215-23.807,9.534c-3.648,2.22-7.881,3.861-12.218,3.483c-4.398-0.305-9.223,0.122-13.065-2.409
  c-17.661-11.019-4.27-50.301,37.214-19.842c2.263,0.592,4.599,0.872,6.947,0.933c0,0,25.062,0.409,25.063,0.409
  c9.076,0.091,10.091-2.86,19.775-12.114c0.611-0.593,50.748-49.401,55.519-54.311c0,0,52.577-51.046,52.578-51.048
  c3.124-3.123,5.572-6.257,8.704-8.631c0.14-0.207,0.409-0.616,0.543-0.817c4.788-3.465,8.241-8.387,12.882-12.022
  c0.134-0.262,0.403-0.775,0.543-1.037c0.281-0.122,0.848-0.366,1.135-0.488c8.171-9.099,11.768-7.617,19.11-7.777
  c154.543-0.846,147.72,0.721,152.179-3.532c4.19-3.934,7.887-8.411,12.425-11.974c2.391-1.866,4.044-4.453,6.228-6.539
  c3.044-2.537,54.113-52.596,57.916-56.22c5.28-4.908,63.756-62.942,74.982-73.213c35.154-34.377,28.631-31.296,46.381-31.321
  c60.093-1.446,49.291,3.429,61.929-8.607c10.617-10.608,45.533-44.636,45.906-44.985c3.464-3.276,48.279-47.301,51.224-49.98
  C2365.819,7.399,2369.54,4.038,2372.499,0 M1618.9,454.932c2.457,4.202,9.149,5.617,13.389,0.018
  c0.792-1.488,3.589-4.655,2.696-8.79c-0.641-3.946-4.038-7.045-7.844-7.929C1621.128,436.477,1611.916,442.769,1618.9,454.932z"></path><path d="M2423.314,0h12.974c-4.369,5.378-30.99,30.548-65.65,64.955
  c-28.323,26.796-55.823,54.006-55.823,54.006c-1.635,1.35-13.651,12.677-15.017,16.048c-1.371,3.149-0.567,7.958,0.092,32.102
  c-0.009,1.41,1.141,45.149,1.141,45.149c0.173,10.054,0.754,10.358,5.532,14.987c54.397,49.949,49.2,36.488,49.51,72.238
  c-0.206,19.865,6.76,12.016-23.904,41.752c-40.294,38.853-31.753,34.354-46.009,34.743c-23.916,0.253-64.77,1.018-74.403-0.055
  c-3.758,0.041-51.094,0.334-54.469,0.195c-16.044-0.782-4.279,1.107-22.373,1.031c-5.052-0.041-79.302,0.121-81.271,0.305
  c-13.719,1.324-18.565-2.05-23.959,2.946c-0.001,0.001-78.996,77.117-78.996,77.117c0,0-58.287,56.945-58.288,56.946
  c-3.574,3.519-7.265,7.777-12.535,8.43c-10.146,0.532-34.162,0.55-37.171,0.342c-6.556,0.298-117.736,0.817-118.35,0.823
  c-36.982-0.75-20.274-4.447-61.496,33.511c-2.97,3.361-6.478,6.167-9.68,9.29c-2.977,2.769-7.143,3.818-11.12,3.513
  c-3.591-0.233-50.096-0.003-50.706,0c-3.373-0.085-6.624,1.33-8.881,3.818c-1.877,1.995-34.719,33.621-34.719,33.621
  c-29.163,28.239-13.286,16.237-53.024,19.708c-0.803,0.048-161.68,0.4-164.933,0.525c-1.807,0.053-91.604,0.043-91.604,0.043
  s-28.926,0.17-29.858,0.189c-54.186-0.081-51.758-0.88-56.141,3.05c0,0-53.719,51.807-55.281,53.213
  c-1.081,0.971-112.237,107.514-112.458,107.743c-28.097,24.699-13.154,22.64-57.928,22.013c-1.367-0.021-80.484,0.207-80.484,0.207
  c-7.111-0.594-75.019,0.268-75.629,0.25c0,0-39.653,0.128-39.653,0.128c-2.946-0.133-4.85,1.223-18.073,14.322
  c-8.61,8.152-8.563,6.384-23.422,7.008c-2.253,0.091-38.808-0.259-42.679-0.122c-156.008-0.342-128.296,4.693-146.134-10.418
  c-3.416-2.903-6.148-6.539-9.704-9.265c-4.19-2.964-9.576-1.476-14.334-1.769c-6.996-0.465-34.672,0.091-40.288-0.152
  c-3.568,0.232-8.222-0.75-10.516,2.781c-9.839,15.705-2.039,30.909-29.107,29.437c-12.998-0.63-16.316-11.082-14.688-16.512
  c2.644-13.996,18.146-13.677,32.505-20.214c6.447-2.879,13.633-2.739,20.543-2.611c6.71,0.244,13.407-0.39,20.11,0.037
  c50.051-0.569,33.463-2.186,56.665,17.359c5.916,5.017,1.592,4.355,30.04,4.312c0,0,54.994-0.642,63.991-0.305
  c0,0,90.072-0.055,90.079-0.055c8.161-0.178,6.659-2.452,14.438-8.747c10.275-8.457,8.505-12.483,21.782-12.724
  c10.517,0.069,123.109,0.126,123.224,0.128c55.041-0.683,16.338-0.723,60.355-0.238c50.457-0.434,37.915,2.082,52.304-10.784
  c2.142-1.921,29.75-28.725,35.799-34.804c0.61-0.579,11.085-9.363,13.62-12.651c1.659-2.141,12.774-11.917,14.182-13.291
  c2.214-2.068,3.818-4.721,6.222-6.6c2.334-1.856,15.815-14.761,16.396-15.371c0.212-0.202,41.146-39.799,41.532-40.141
  c6.449-5.655,43.438-42.293,48.345-46.211c2.391-2.025,4.288-4.806,7.356-5.886c4.056-1.366,8.399-0.561,12.596-0.805
  c11.268-0.069,131.774-0.105,133.88-0.464c1.385-0.194,49.358,0.094,51.444-0.116c187.302-0.511,173.755,3.326,181.878-8.222
  c0.988-0.811,1.982-1.622,2.891-2.531c5.895-6.376,29.733-28.735,43.722-42.935c5.194-5.195,9.426-3.586,28.333-3.831
  c36.594-0.08,38.705,2.317,46.753-8.241c1.45-1.245,30.664-29.65,30.986-29.998c11.316-11.372-0.84-8.322,99.765-8.747
  c0.61-0.002,60.23-0.742,89.682-0.464c6.161-0.02,6.146-1.541,17.975-12.773c3.757-3.617,7.118-7.667,11.272-10.851
  c0.122-0.201,0.372-0.604,0.5-0.805c6.73-5.849,6.397-7.079,9.668-9.345c0.61-0.574,62.443-60.981,67.882-66.498
  c0.603-0.618,42.68-41.674,44.917-43.423c5.638-4.441,47.463-1.488,56.806-2.483c3.883-0.437,33.977-0.053,59.306-0.22
  c3.513-0.195,6.911,1.061,10.424,1.049c3.342-0.414,52.246-0.64,59.16-0.945c3.47,0.451,6.88-0.372,10.326-0.653
  c20.531-0.152,41.075,0.11,61.612-0.14c11.162,0.038,9.53-0.934,17.75-8.631c11.04-10.039,29.424-29.156,29.424-29.156
  c12.647-12.541,16.865-15.253,16.615-19.659c-0.011-5.219-0.449-29.443-1.263-33.639c-1.776-9.835-52.676-44.973-53.512-55.421
  c-0.486-7.921-2.712-77.477-2.732-78.087c-0.303-11.126-1.745-11.242,12.669-24.362c0.61-0.595,34.624-34.008,37.037-36.189
  c0.001-0.001,74.006-72.408,74.006-72.408C2416.422,6.88,2420.271,3.837,2423.314,0z"></path><path d="M1300.995,15.847c7.53-12.391,29.985-13.394,35.823,5.233
  c0.509,8.237-0.187,10.366-6.972,20.104c-1.395,2.169-3.786,5.533-3.367,11.235c0.076,1.562,0.116,24.996,0.116,24.996
  c-0.256,6.854,1.042,7.259-9.961,17.823c-0.61,0.534-12.447,11.471-23.544,22.465c-8.486,7.385-36.628,34.649-37.641,35.536
  c-0.61,0.535-19.955,18.639-24.264,23.343c-3.355,3.822-2.276,13.454-1.836,21.05c0.27,88.645,0.537,85.26,0.537,85.26
  s0.216,55.084,0.134,74.537c-0.042,8.612,0.428,47.866,0.47,48.65c-1.286,12.08,1.925,15.941-4.178,21.812
  c-10.895,10.688-11.82,11.44-12.864,13.578c-2.167,4.219-0.565,6.193-4.264,16.316c-7.331,14.69-9.503,6.541-9.564,28.327
  c-0.042,0.615,0.545,20.71-0.293,25.075c-1.53,4.171-3.587,5.195-33.115,33.493c-0.611,0.577-27.207,26.473-30.376,29.309
  c-0.613,0.602-29.752,28.767-37.067,35.555c-1.157,1.068-39.402,37.617-41.721,39.934c-0.671,0.614-44.726,42.709-46.491,44.484
  c-0.484,0.61-15.018,15.509-22.697,19.574c-0.615,0.479-25.367,19.966-29.693,24.423c-1.726,1.771-17.166,16.326-18.866,17.811
  c-9.559,8.576-8.22,10.318-21.3,10.339c0,0-28.361-0.198-29.309-0.189c-5.721,0.255-95.426,0.191-103.693,0.165
  c0,0-84.737,0.031-84.742,0.031c-7.279-0.096-13.839,12.903-22.727,16.847c-5.901,1.792-6.08,0.437-64.552,0.897
  c-8.515,0.39-17.024-0.317-25.539,0.061c-3.757,0.311-6.984-2.08-9.406-4.678c-3.989-4.19-8.491-7.838-12.486-12.016
  c-3.208-2.971-6.24-7.216-11.071-7.198c-133.654-0.059-236.965,0.046-248.967-0.079c-6.798-1.502-31.847-1.17-35.945-0.525
  c-0.035,0.006-18.099-0.202-20.123-0.268c0,0,5.366,0.833-123.791,0.854c-4.226-0.148-13.244,5.179-16.329,7.435
  c-9.496,6.591-25.777,1.649-28.07-10.418c-0.232-3.184-0.549-6.551,0.836-9.534c1.604-2.373,2.977-5.026,5.38-6.703
  c5.563-4.394,14.73-5.577,21.135-2.177c5.148,2.501,9.668,6.161,14.987,8.344c0.611,0.036,22.333,0.122,35.677-0.256
  c6.812,0.348,36.399,0.189,40.196,0.232c12.546,0.223,42.308-0.54,59.733,0.781c1.786-0.024,23.006,0.238,27.839-0.207
  c0.611-0.06,26.977-1.608,43.594-0.787c0.644-0.002,30.254-0.456,33.475-0.342c0.61,0.003,36.333,0.194,40.355-0.031
  c5.528,0.408,27.966,0.552,33.487,0.073c1.963-0.18,19.531,0.345,20.141,0.329c21.542-0.241,57.664,0.375,67.089-0.403
  c44.096,0.031,19.606-0.344,38.062,0.659c5.641,1.54,7.964,5.935,17.494,14.767c8.67,7.422,7.651,9.146,17.689,8.814
  c35.944-0.261,39.007-0.012,39.007-0.012c7.046-0.131,30.101,0.364,33.267-0.573c1.046-1.046,0.846-0.903,3.666-2.391
  c11.577-12.185,11.951-11.521,13.822-13.34c5.575-3.001,12.071-1.799,18.122-1.921c230.993,0.381,212.122,0.347,216.328-1.317
  c2.074-2.007,4.52-3.599,6.398-5.813c1.94-2.275,4.77-3.587,6.539-6.014c1.36-1.897,3.452-3.044,4.977-4.782
  c9.781-10.739,11.692-8.286,10.388-20.153c-0.513-4.085-3.639-11.534,4.02-20.348c9.494-8.279,17.916-4.178,29.461-2.196
  c1.995,0.555,4.081,0.848,6.124,0.262c4.361-3.641,8.893-7.13,12.827-11.242c1.159-1.562,2.324-3.172,3.995-4.227
  c1.936-1.689,10.978-10.306,11.37-11.211c0.238-0.067,0.701-0.189,0.939-0.256c3.257-3.062,6.045-6.673,9.717-9.259
  c3.723-3.744,25.217-24.87,28.32-27.448c5.311-5.543,18.5-17.934,19.11-18.476c3.649-2.496,13.615-13.962,19.226-18.305
  c4.727-4.434,9.9-8.466,13.925-13.59c0.488-0.579,1.092-1.031,1.714-1.47c0.457-0.402,18.699-18.037,19.079-18.512
  c0.354-0.331,10.037-9.336,10.351-9.784c5.203-4.215,9.21-9.747,14.529-13.816c0,0,15.808-15.878,18.689-18.122
  c2.483-2.025,4.502-4.532,6.893-6.661c1.568-1.342,2.232-3.349,2.958-5.209c-0.232-7.509,0.299-15.017-0.128-22.514
  c-0.174-14.745-1.531-10.391-8.015-21.635c-3.276-4.148-3.355-9.759-2.172-14.682c1.531-3.666,4.276-6.514,7.252-9.058
  c8.034-5.05,14.95-0.24,27.113-12.102c2.403-1.805,3.989-4.367,5.66-6.813c1.989-7.833-0.609-7.21,0.214-13.09
  c0,0-0.134-22.466,0.085-29.046c-0.104-16.786-0.665-56.47-0.726-59.526c0.101-26.425-0.11-89.627-0.11-89.627
  c0.013-0.618-0.623-34.421-0.476-39.098c0.405-7.636-2.666-14.629,8.161-22.623c0,0,26.99-26.069,26.991-26.07
  c1.835-1.47,15.607-14.811,15.658-14.871c0.001-0.001,12.242-11.528,12.242-11.528c5.533-5.302,10.481-10.514,18.781-18.415
  c0,0,7.426-6.952,12.73-12.217c5.3-5.455,1.847-17.895,2.33-29.065c0.485-8.547-3.918-12.013-9.564-20.373
  C1298.165,26.905,1297.805,20.604,1300.995,15.847 M1311.809,16.859c-5.282,5.952,1.207,20.483,10.18,15.584
  c6.659-4.282,6.791-12.394,2.318-16.066C1320.886,13.206,1314.871,13.163,1311.809,16.859 M1188.219,439.299
  c-5.981,3.466-4.711,7.257-2.678,15.627c1.415,1.635,2.891,3.568,5.246,3.763c3.782,1.025,7.588-0.86,9.887-3.855
  c0.97-2.287,2.373-4.587,1.934-7.179C1202.34,440.952,1194.173,436.402,1188.219,439.299 M967.097,693.536
  c-12.348,6.449-5.63,21.692,3.959,20.714c7.16,0.969,15.459-13.972,3.422-20.08C972.099,693.341,969.567,693.512,967.097,693.536z"></path><path d="M2560,47.26v12.766c-6.874,5.599-12.797,12.248-19.36,18.195
  c-3.196,3.141-7.374,6.459-7.197,11.4c0.72,15.348,4.905,117.328,5.044,126.884c2.696,50.496,1.144,56.317,4.343,62.826
  c7.511,15.023,8.374,16.769,6.886,22.526c-1.049,5.477-5.813,9.735-11.077,11.083c-3.202,0.945-6.167-0.891-9.137-1.702
  c-9.667-2.643-19.592-3.031-16.884-17.64c1.568-5.508,6.521-8.948,10.443-12.754c11.572-11.482,7.92-10.404,8.088-25.893
  c-1.103-22.347-3.913-96.115-4.947-103.114c-0.262-3.861,0.165-7.722,0-11.583c-2.48-51.457-2.872-52.357-1.647-56.684
  c0.537-2.037,1.885-3.727,3.312-5.24C2531.76,74.295,2555.188,50.534,2560,47.26z"></path><path d="M2560,75.769v13.078c-9.118,8.472,0-7.244,0,189.289
  c-2.617-1.842-5.197-4.142-5.959-7.387c-0.504-2.363-1.341-30.582-1.921-37.744c-0.104-1.774-1.08-29.254-1.08-29.254
  c-1.231-15.366-2.552-60.65-3.465-72.018c0,0-1.427-35.65-1.415-38.421C2545.842,88.825,2548.662,84.685,2560,75.769z"></path><path d="M526.737,116.246c8.807-0.3,7.261-0.563,14.645,2.483
  c11.975,8.179,10.046,26.194-5.172,30.352c-13.34,3.417-24.66-6.552-24.02-16.756c0.226-1.952,0.665-3.861,1.098-5.77l0.317-0.159
  C515.898,121.022,521.277,117.722,526.737,116.246 M523.589,129.372c-0.12,6.355,0.876,11.756,7.088,12.791
  c6.697,1.61,13.084-5.843,11.522-12.278C540.089,119.31,524.137,119.929,523.589,129.372z"></path><path d="M1966.93,133.227c7.447-12.874,29.698-10.125,34.597,5.362
  c2.628,16.776-12.815,23.96-24.374,19.897c-9.992-3.347-14.355-13.654-12.102-21.525
  C1965.68,135.722,1966.296,134.472,1966.93,133.227 M1976.116,137.332c-0.5,2.245,0.354,4.447,1.128,6.527
  c-0.445,0.817-1.122,1.818-0.079,2.495c0.854,1.409,1.812,2.769,2.958,3.977c3.056,1.122,6.984,1.452,9.619-0.823
  c6.956-5.436,4.197-18.946-6.661-18.104C1979.886,131.794,1976.793,134.093,1976.116,137.332z"></path><path d="M2008.889,195.071c9.039-1.247,16.384,0.44,22.514,9.509
  c2.693,7.593,2.246,7.124,1.183,13.383c-9.884,22.954-47.686,6.773-33.999-15.212
  C2000.752,198.822,2004.9,196.724,2008.889,195.071 M2007.785,207.972c0.238,2.178,0.683,4.337,0.854,6.533
  c1.312,2.204,4.119,7.834,11.62,4.941c5.038-2.135,6.935-8.607,5.117-13.504C2021.032,196.495,2006.596,199.705,2007.785,207.972z"></path><path d="M2234.379,217.835c11.647-7.931,31.701-0.168,28.754,18.927
  c-8.104,20.453-37.887,11.354-36.494-6.173c0.006-0.817,0.055-1.629,0.134-2.434
  C2228.298,224.124,2230.597,220.134,2234.379,217.835 M2235.965,226.35c-1.262,5.448,3.537,17.071,13.547,12.779
  c4.807-2.367,6.429-8.869,4.459-13.608C2250.52,217.928,2237.652,217.479,2235.965,226.35z"></path><path d="M1930.345,247.302c4.697-9.308,17.64-12.773,26.558-7.661
  c2.818,1.165,4.654,3.696,6.795,5.746c8.615,15.093-4.811,32.225-25.008,24.398
  C1936.915,268.391,1924.592,261.139,1930.345,247.302 M1939.86,250.73c-0.476,3.031,1.202,5.782,1.513,8.741
  c1.317,1.476,2.531,3.166,4.288,4.184c6.561,1.993,13.734-3.295,11.943-13.248C1954.466,241.421,1940.011,242.056,1939.86,250.73z"></path><path d="M1790.408,263.1c5.699-7.327,16.178-10.25,26.411-4.727
  c8.395,5.815,10.158,16.074,5.953,23.197c-6.719,10.658-24.328,12.237-33.462-0.653
  C1786.767,275.25,1786.681,268.278,1790.408,263.1 M1797.41,269.041c-0.695,2.836,0.537,5.575,1.25,8.271
  c4.469,7.323,11.339,5.205,13.456,2.647c0.366-0.61,3.549-3.793,3.538-6.667c0.384-4.123-2.47-7.679-5.557-10.04
  C1805.376,260.514,1798.234,263.49,1797.41,269.041z"></path><path d="M1857.607,257.751c6.838-3.245,15.517-3.08,21.867,1.25
  c2.354,1.72,3.837,4.288,5.514,6.624c8.999,19.075-18.827,33.806-31.645,17.658c-4.033-4.548-5.71-10.113-3.099-17.695
  C1851.922,262.313,1854.6,259.806,1857.607,257.751 M1859.797,268.004c-0.464,3.038,0.799,5.947,1.702,8.783
  c1.183,1.372,2.58,2.55,4.154,3.471c4.491,0.423,6.05,1.091,10.131-2.885c0.378-0.689,0.805-1.36,1.257-2.019
  c2.769-5.599-0.927-13.852-7.509-14.291C1865.177,260.367,1860.2,263.423,1859.797,268.004z"></path><path d="M109.213,261.099c8.899-1.348,17.982,5.252,19.689,14.023
  c1.055,7.875-4.569,15.676-11.986,18.036c-12.974,4.352-26.139-6.06-24.057-17.963C94.074,267.388,101.607,261.764,109.213,261.099
   M103.144,274.518c0.281,3.111-0.262,6.807,2.196,9.223c7.123,8.501,21.616-1.556,17.109-11.516
  C118.114,262.114,101.934,264.436,103.144,274.518z"></path><path d="M2387.107,293.067c9.724-16.278,38.253-8.818,34.011,13.944
  C2408.473,331.063,2376.278,311.205,2387.107,293.067 M2395.262,298.856c1.575,16.201,14.66,13.184,17.981,7.625
  c1.995-3.611,2.092-8.393-0.219-11.882C2407.891,286.875,2394.384,289.927,2395.262,298.856z"></path><path d="M2297.437,294.427c4.819-2.794,9.723-6.118,15.511-6.234
  c7.667-0.586,15.542,3.709,18.671,10.845c1.812,3.397,1.36,7.356,1.141,11.052c-6.132,14.102-20.131,14.317-28.778,8.899
  c-18.437-11.907-16.079-9.883-25.765-10.247c-3.377,0.041-57.9,0.658-61.734,0.195c-13.896-1.537-2.261,0.368-15.737-0.037
  c-4.874,0.031-43.945,0.286-47.62,0.055c0,0-3.128,0.963-65.235,1.116c-14.01,0.257-12.063,0.388-18.805,6.734
  c-0.29,0.329-22.583,21.982-24.185,23.331c-0.001,0.001-31.095,30.443-31.096,30.443c-26.527,26.25-26.558,25.911-26.558,25.911
  c-19.152,19.496-27.584,26.398-31.663,31.279c-0.714,0.576-13.898,13.143-14.017,13.285c-19.176,18.812-15.345,15.273-33.34,32.529
  c-9.125,9.345-18.897,18-28.003,27.363c-2.013,2.165-4.581,4.075-7.625,4.282c-1.488,0.101-32.409,0.61-64.058,0.518
  c-0.611,0.005-33.012,0.502-36.006,0.25c-1.447-0.099-24.014,0.298-24.411,0.293c-4.375-0.207-28.272,0.627-34.743,0.031
  c-26.423,0.433-28.506-1.095-32.389,2.3c-10.511,9.737-25.362,25.311-32.822,31.279c-3.178,2.385-7.35,1.818-11.059,1.842
  c-3.678-0.189-7.332,0.396-10.998,0.238c-12.815-0.354-25.63,0.214-38.44-0.122c-3.678,0.287-7.893-0.305-10.924,2.245
  c-4.56,3.62-20.236,20.005-26.765,25.679c-11.946,11.389-11.109,6.443-19.647,8.417c-5.488,1.576-15.251,11.242-24.532,12.864
  c-9.284,1.696-19.488-4.288-21.995-13.492c-0.378-2.428-0.232-4.886-0.012-7.313c1.031-2.702,1.988-5.569,4.16-7.612
  c1.6-1.843,4.975-4.201,8.637-5.398c4.837-1.568,9.839-0.006,14.584,1.128c0.001,0,14.322,8.405,14.322,8.405
  c11.166,7.143,14.112-0.417,18.409-3.641c0.708-0.573,1.287-1.299,1.83-2.043c0.25-0.128,0.738-0.384,0.982-0.512
  c0.47-0.72,0.927-1.494,1.635-2.025c3.385-2.251,5.404-5.941,8.625-8.405c6.952-5.938,10.931-12.199,17.652-15.511
  c3.545-1.062,25.167-0.608,26.228-0.567c40.3-0.669,39.605,1.474,44.307-4.123c0.226-0.067,0.683-0.201,0.909-0.268
  c4.032-4.239,8.314-8.228,12.358-12.461c0.541-0.596,15.064-14.253,18.683-17.128c4.118-3.159,20.727-0.81,35.042-2.123
  c35.488-0.038,119.294,0.071,145.762-0.61c4.215-0.214,8.539,0.445,12.644-0.854c2.054-1.406,4.763-3.375,6.209-5.069
  c0.952-1.043,1.806-2.275,3.154-2.867c0.577-1.154,58.45-57.696,59.068-58.032c0.611-0.583,122.604-120.305,125.103-122.053
  c0.146-0.25,0.427-0.756,0.567-1.006c3.446-2.397,5.835-5.427,12.858-5.368c9.879-0.105,32.334,0.174,37.183-0.421
  c24.188-0.588,35.384,0.86,35.384,0.86c1.564-0.176,24.775-1.195,29.278-0.775c9.576,0.769,19.195-0.329,28.766,0.592
  c3.709,0.451,7.222-1.22,10.937-1.208c7.881-0.253,50.16-0.149,54.244-0.122c4.983-0.067,10.058,0.152,14.901-1.281l0.043-0.403
  C2291.587,298.276,2294.533,296.343,2297.437,294.427 M2311.99,293.744c-4.068,0.342-8.289,4.642-6.74,8.844
  c0.976,2.714,1.153,5.685,2.366,8.32c4.025,6.785,17.767,2.602,16.005-9.302C2322.604,296.392,2317.12,293.012,2311.99,293.744
   M1494.035,575.613c0.043,0.384,0.128,1.147,0.171,1.531c0.903,1.83,1.763,3.904,3.666,4.935
  c10.492,7.206,20.146-8.8,11.656-16.524c-1.854-1.927-4.624-2.672-7.222-2.592C1496.901,562.516,1491.834,568.868,1494.035,575.613
  z"></path><path d="M1858.26,316.343c15.005-10.27,38.685,7.317,26.112,24.88
  c-7.513,10.178-21.673,6.15-28.851,13.767c-5.113,5.121-41.349,39.992-48.528,47.266c-0.756,0.73-76.146,74.298-79.447,77.288
  c-12.667,11.167-6.684,2.836-103.205,6.801c-15.27,0.493-24.905-2.3-29.309,2.196c-9.53,9.469-35.825,34.258-35.859,34.298
  c-5.531,6.722-17.921,17.36-20.922,20.745c-6.161,2.525-12.931,1.836-19.415,1.726c0,0-59.146,0.169-74.433,0.024
  c-7.484,0.457-14.999-0.512-22.453,0.354c-4.599,0.561-7.448,4.526-10.619,7.423c-22.705,20.286-49.344,50.734-57.196,51.42
  c-0.002,0-81.692,0.171-81.692,0.171c-17.075-0.913-37.304,0.981-47.022,0.201c-5.588-0.242-61.844,0.464-76.867,0.073
  c-8.893,0.33-6.205-2.339-28.467,19.812c-3.174,2.762-33.025,31.661-35.884,34.225c0,0-63.676,61.264-71.353,68.309
  c-0.003,0.003-48.913,46.918-48.913,46.918c-22.473,17.945,1.776,16.217-88.627,15.645c-181.011,1.487-153.283-4.893-168.495,8.411
  c-10.029,8.635-14.032,15.905-22.447,15.432c-5.735-0.115-60.759,0.191-72.616,0.067c-3.521,0.219-43.218,0.084-43.832,0.085
  c-7.409-0.013-9.968-6.673-26.527-21.312c-3.764-3.652,24.912-2.886-384.006-2.647c-15.693,1.291-7.848-2.189-26.369,14.493
  c-7.896,7.012-44.22,41.013-51.072,47.235c-11.271,9.705-15.772,1.745-21.971,1.842c-3.654-0.183-7.289,0.695-10.943,0.268
  c-5.319-0.61-10.662-0.061-15.987,0.085C9.362,853.197,8.039,854.872,0,856.542v-12.791c4.97,0.223,59.824,1.461,68.12-1.037
  c4.296-1.912,54.245-49.54,58.391-53.188c22.147-20.825-0.488-8.953,154.076-12.748c7.554,0.311,153.131-0.141,153.136-0.14
  c0.61-0.004,103.368-0.2,109.006,0.293c5.936,1.192,7.99,4.616,25.277,20.958c4.1,2.998,0.848,3.299,67.608,2.605
  c50.512,0.451,47.06,0.785,51.468-3.306c0.055-0.274,0.171-0.811,0.226-1.08c2.885-2.025,5.313-4.605,8.015-6.862
  c14.775-13.59,10.329-11.953,23.837-12.962c8.143,0.323,16.31-0.573,24.441,0.287c0,0,49.327-0.274,49.327-0.275
  c2.345-0.182,80.814,0.055,139.681-0.098c8.873-0.293,6.145,1.876,18.079-9.717c0.567-0.611,10.894-10.198,13.218-13.157
  c4.282-2.385,6.533-6.954,10.473-9.741c13.908-12.385,42.582-41.407,51.499-48.907c0,0,50.742-48.754,50.743-48.754
  c60.568-59.337,54.886-54.528,65.223-54.616c19.429-0.024,202.661-0.004,205.861-0.5c5.701-0.954,35.228-32.232,44.582-40.8
  c30.83-24.621-1.767-17.14,86.822-18.689c11.056-1.139,44.504,0.152,49.309-0.732c3.544-1.47,5.874-4.721,8.619-7.271
  c4.727-5.044,10.321-9.18,14.877-14.395c3.184-3.924,14.216-13.967,14.828-14.499c10.322-8.611,17.984-19.748,24.984-21.879
  c5.903-1.382,3.5-0.711,116.795-0.878c7.149-0.271,7.867-2.976,16.743-11.479c3.757-3.587,7.094-7.643,11.284-10.76
  c1.115-1.539,69.607-68.363,70.749-69.45c1.873-1.622,3.91-3.117,5.38-5.16c1.799-2.415,4.422-3.989,6.508-6.118
  c31.415-32.307,27.398-22.997,31.004-40.459C1851.056,323.352,1854.277,319.167,1858.26,316.343 M1867.135,320.113
  c-4.404,1.031-7.253,6.057-5.722,10.357c0.018,0.964,0.037,1.934,0.098,2.903c0.281,0.275,0.848,0.817,1.128,1.092
  c0.018,0.366,0.043,1.11,0.055,1.482c0.842,0.86,1.677,1.744,2.586,2.574c5.205,5.015,15.836-0.774,14.541-9.814
  C1879.529,322.675,1872.759,318.405,1867.135,320.113z"></path><path d="M1676.48,315.642c4.149-0.933,9.964-3.23,19.153,2.806
  c4.745,3.567,8.428,11.91,6.557,17.64c-0.781,4.111-3.953,7.057-6.673,9.985c-7.014,3.265-12.241,4.553-21.477,0.61
  c-2.895-2.363-9.506-6.396-9.186-16.103c0.439-4.404,2.586-8.552,5.807-11.577C1672.399,317.581,1674.497,316.691,1676.48,315.642
   M1677.352,325.743c-1.122,3.58,0.287,7.289,1.5,10.65c0.854,2.3,3.141,3.452,5.258,4.386c2.257-0.024,4.678-0.122,6.563-1.586
  c10.475-8.594,2.445-18.563-4.709-18.384C1682.427,320.393,1678.822,322.553,1677.352,325.743z"></path><path d="M691.645,316.112c8.08-2.304,17.639,0.747,22.934,10.455
  c4.649,19.214-15.091,27.163-26.686,20.751c-11.2-4.813-13.574-21.057-2.574-28.351c1.507-0.982,3.092-1.921,4.88-2.306
  l-0.153-0.482C690.45,316.16,691.249,316.13,691.645,316.112 M693.182,323.419c-5.795,2.772-5.076,7.428-4.032,14.151
  c1.324,2.855,4.306,4.483,7.161,5.484c3.061,0.839,12.652-1.171,10.833-13.199c-1.08-3.391-4.221-5.63-7.271-7.155
  C697.635,322.73,695.238,322.315,693.182,323.419z"></path><path d="M1482.818,323.425c11.638-15.937,39.177-6.884,34.902,13.974
  c-4.711,13.392-20.361,15.645-29.674,9.29c-1.86-1.311-3.276-3.105-4.831-4.727
  C1479.524,336.539,1479.579,329.043,1482.818,323.425 M1491.485,324.639c-2.19,2.373-1.769,5.801-1.592,8.759l0.64-0.183
  c-0.006,0.457-0.018,1.366-0.024,1.824c1.738,2.495,3.55,5.551,6.825,6.093c10.016,2.527,17.722-15.766,3.776-19.671
  C1497.64,320.271,1493.651,321.772,1491.485,324.639z"></path><path d="M928.346,324.065c5.079-7.414,19.474-13.854,32.657,1.214
  c5.947,12.683-2.832,21.582-9.479,23.856c-11.197,4.811-26.272-3.153-25.862-17.433
  C926.315,329.079,926.882,326.389,928.346,324.065 M936.916,326.426c-2.138,5.48,0.794,14.596,6.728,15.145
  c6.478,1.519,13.035-5.111,11.693-11.565C954.071,320.636,940.132,318.366,936.916,326.426z"></path><path d="M2462.852,347.238c0.161-0.013,86.332-0.374,97.148-0.482v7.631
  c-14.902,0.015-80.429,0.343-95.166,0.653c-0.611,0.003-100.284,0.233-117.741,0.695c-4.071,0.096-5.583,1.075-26.911,22.971
  c-12.811,11.616-10.394,12.533-23.099,12.437c-27.748-0.05-31.04,1.059-44.539,0.268c-22.099,0.361-136.581,0.979-137.192,0.97
  c-4.709-0.134-9.448,0.36-14.108-0.457c-5.044-0.884-10.131,0.061-15.188,0.049c-4.9-0.142-43.417-0.024-44.027-0.012
  c-1.928,0.488-3.282,2.025-4.563,3.422c-7.372,8.183-27.81,26.689-58.483,57.507c0,0-68.064,66.106-68.065,66.107
  c-30.532,29.673-15.753,19.167-46.802,21.867c-15.406,0.353-131.464,0.758-131.831,0.732c-9.834,0.239-27.584-1.225-31.675,2.025
  c-2.597,2.103-35.716,34.769-40.385,39.403c-10.868,9.016-15.627,18.121-23.721,18.049c-23.02,0.545-24.78-2.055-31.657,5.319
  c-7.61,8.353-3.276,7.669-4.032,27.961c-0.293,9.235,1.273,10.805-3.843,15.883c-13.382,13.382-15.743,16.071-21.452,16.261
  c-2.532,0.009-52.186,0.236-54.823,0c-11.759-1.03-10.397,1.606-18.098-4.947c-1.859-1.524-18.531-17.258-18.628-17.329
  c-4.6-3.39-17.846-0.844-26.179-1.397c0,0-44.489-0.134-44.49-0.134c-4.975,0.245-183.433,0.405-186.648,0.268
  c-54.441,1.761-59.206-1.047-63.356,1.921c-2.875,1.955-27.647,25.96-28.253,26.57c-1.256,1.193-91.746,88.059-93.354,89.707
  c-8.652,7.83-65.205,63.544-70.408,66.089c-4.562,2.221-82.537,0.58-95.989,1.226c-0.031,0.002-74.835,0.305-75.922,0.232
  c0,0-14.277,0.185-55.83,0.244c-6.666-0.289-9.208,5.355-33.17,27.229c-3.621,2.995-21.863,21.067-26.118,24.465
  c-4.329,3.468,0.175,2.606-110.878,2.586c-2.111,0.069-91.008,0.328-92.714,0.457c-7.921-0.253-94.892,0.142-95.733,0.146
  C-6.299,883.808,4.198,883.836,0,884.075v-6.954c34.566,0.012,69.133-0.018,103.705-0.037c0.61,0.001,158.165-0.243,160.395-0.415
  c7.13-0.119,164.702-0.327,198.889-0.525c1.58-0.027,175.769,0.142,189.661-0.128c40.505-1.342,13.093,6.67,59.154-32.517
  c1.342-1.284,18.951-18.856,23.636-21.532c6.356-0.865,197.18-0.596,197.792-0.567c27.232-0.539,31.711,1.402,35.555-2.141
  c4.001-3.469,29.785-28.977,33.658-32.102c2.7-2.769,50.238-48.331,51.066-49.48c0,0,16.077-14.994,27.985-27.058
  c2.983-3.147,6.52-5.697,9.558-8.79c10.654-9.685,19.656-19.699,23.282-22.465c0.001-0.001,39.818-38.287,39.818-38.287
  c5.808-4.928,4.305-4.946,15.737-5.172c81.63-0.382,99.38,0.213,105.535-0.604c86.556,0.289-29.992,0.318,203.172-0.11
  c8.906,0.043,9.05,0.8,16.103,7.411c3.361,3.568,7.307,6.514,10.693,10.07c5.656,5.295,4.657,7.687,33.548,5.953
  c3.837-0.244,7.667,0.567,11.516,0.201c7.984-1.08,16.066,0.689,24.045-0.567c3.135-0.808,11.401-9.211,13.59-11.394
  c5.35-5.389,2.254-7.571,3.062-35.67c-0.006-3.269,2.281-5.837,4.495-7.972c2.794-2.635,5.301-5.593,8.326-7.984
  c4.239-3.54,12.69-1.51,28.912-2.19c5.403-0.134,7.483-3.413,27.113-23.081c3.837-4.184,8.887-7.161,12.089-11.949
  c0.213-0.085,0.647-0.268,0.866-0.354c24.782-24.862,23.808-24.921,33.755-24.173c10.454-0.238,9.915-0.023,120.083-0.366
  c8.936-0.781,17.915-0.262,26.875-0.403c2.952-0.055,5.88-0.909,8.851-0.47c2.887,0.426,18.321,1.195,21.727-0.842
  c3.933-2.738,5.31-5.06,6.911-6.246c10.571-9.723,20.049-20.598,30.955-29.955c0.098-0.25,0.287-0.738,0.384-0.982
  c3.017-2.297,47.375-46.223,48.541-47.455c44.594-42.451,59.49-59.582,64.662-60.929c7.174-1.995,59.415-0.768,63.814-1.226
  c11.569-1.087,68.709-1.239,69.322-1.183c0.611-0.007,126.684-0.571,130.72-0.701c6.134-0.21,18.781-16.788,36.579-32.676
  C2341.058,345.322,2427.419,347.986,2462.852,347.238z"></path><path d="M1964.667,349.007c12.44-3.118,28.355,8.291,21.574,24.636
  c-8.893,13.656-25.626,10.534-32.694,1.61c-3.402-4.648-4.494-11.676-1.714-16.75
  C1954.219,353.472,1959.245,350.007,1964.667,349.007 M1960.776,361.712c0.098,2.806,0.878,5.557,1.683,8.234
  c5.721,8.92,18.806,3.877,16.426-9.595C1975.945,351.125,1960.331,351.762,1960.776,361.712z"></path><path d="M88.505,361.139c12.269-14.43,30.069,0.232,35.5,2.72
  c4.086,1.792,0.354,1.154,79.118,1.378c0.401,0.041,25.218,0.305,25.618,0.329c14.289,0.898,20.719-1.815,30.162,2.037
  c3.233,3.257,6.886,6.057,10.058,9.387c0.158,0.163,35.396,34.158,35.396,34.158c2.422,2.44,5.343,4.38,7.441,7.137
  c1.244,1.592,2.702,3.007,4.276,4.276c3.678,2.989,6.74,6.636,9.973,10.07c3.58,2.287,6.533,5.349,9.357,8.497
  c3.397,3.062,6.728,6.222,9.717,9.698c1.598,1.909,3.873,3.062,5.575,4.874c0.001,0.001,20.537,19.665,20.537,19.665
  c1.988,1.455,1.869,1.624,10.168,9.546c0,0,14.541,14.004,14.541,14.005c5.147,4.728,10.776,1.873,35.914,3.068
  c1.611,0.158,22.903-0.235,23.514-0.213c1.72-0.098,3.44-0.244,5.172-0.152c9.296,1.086,18.683,0.207,28.015,0.433
  c7.219,0.242,43.376-0.152,49.413,0.14c184.485-0.101,168.019-0.207,173.564,1.33c2.543,1.671,5.233,3.214,7.301,5.496
  c5.377,5.817,13.727,13.025,14.053,13.376c2.806,3.153,6.331,5.532,9.271,8.552c5.524,1.385,0.628,1.144,34.292,1.122
  c3.794-0.012,8.21,0.506,11.235-2.312c3.745-3.678,7.832-7.124,10.79-11.504c1.977-6.831,2.107-9.026,3.965-15.481l0.323,0.116
  c3.607-9.305,16.067-12.635,24.612-8.954l0.061,0.244c9.493,4.377,13.192,12.869,9.619,22.831
  c-0.183,0.232-0.555,0.708-0.738,0.939c-8.674,12.343-20.092,8.182-27.466,12.827c-5.447,3.831-9.534,9.284-15.005,13.09
  c-2.916,2.123-6.667,1.805-10.064,2.037c-28.98,0.263-38.982,0.519-45.186-0.256c-6.234-0.902-14.987-11.958-20.086-16.072
  c-8.292-6.164-9.73-13.691-18.927-13.565c0,0-21.563,0.108-42.715-0.287c-0.073,0.002-143.582-0.306-150.611-0.305
  c0,0-71.944-0.311-71.945-0.311c-33.882-0.065-37.651,0.7-42.52-1.147c-5.335-2.347-22.242-20.684-34.786-32.242
  c-26.015-25.346-25.77-26.022-30.388-29.467c-11.778-11.778-24.758-23.978-24.758-23.978c-10.19-8.939-34.922-33.542-39.355-37.464
  c-9.338-9.237-11.986-12.116-16.072-12.071c-40.163-0.9-93.813-0.377-116.496-0.561c-9.676-0.501-15.526,10.626-28.058,10.412
  c-7.722,0.11-15.432-5.197-17.341-12.821C83.028,370.605,85.041,365.036,88.505,361.139 M95.794,365
  c-5.736,17.686,12.466,22.229,18.823,10.497c2.653-6.716-2.788-15.578-10.296-15.072C100.79,359.968,97.63,362.133,95.794,365
   M812.399,502.601c-1.452,2.678-0.823,5.862-0.708,8.765c1.603,2.848,3.46,8.371,11.083,7.435
  c6.784-1.604,10.094-8.308,6.862-15.578c-1.098-2.446-3.526-3.806-5.862-4.819C819.587,497.947,816.351,497.148,812.399,502.601z"></path><path d="M2383.087,365.024c3.159-0.093,176.192-0.825,176.913-0.781v7.832
  c-0.332,0.004-40.787,0.179-40.879,0.177c-0.617,0.001-110.435,0.828-136.003,0.75c-17.668,0.767-23.703-0.676-27.393,1.507
  c-2.413,1.474-21.472,20.621-22.081,21.233c-3.385,3.587-7.313,6.588-11.083,9.735c-3.001,2.507-7.118,2.58-10.814,2.605
  c-25.691-0.188-35.378,0.525-35.378,0.525c-4.026-0.445-8.07,0.14-12.077-0.299c-3.531-0.409-6.966,0.689-10.467,0.738
  c-0.001,0-43.331,0.348-43.332,0.348c-0.004,0-98.197,0.622-98.197,0.622c-59.883-0.182-57.829-0.198-60.972,2.415
  c-3.265,2.704-34.276,33.397-34.89,33.999c-1.651,1.398-24.365,23.87-24.978,24.453c-1.859,1.626-20.092,19.513-20.702,20.068
  c-2.211,2.29-25.332,24.685-25.332,24.685c-3.662,3.187-21.044,20.674-25.679,24.978c-4.082,3.908-13.978,14.868-18.702,16.841
  c-4.073,1.622-18.398,0.395-33.926,1.238c-0.002,0-73.189,0.372-73.189,0.372c-1.385,0.076-45.794,0.183-46.412,0.171
  c-32.926-0.226-32.067-0.694-37.317,4.947c-5.347,5.647-36.105,34.763-42.581,41.428c-3.829,3.993-16.448,14.354-19.226,20.665
  c-2.678,5.819-5.593,11.967-11.229,15.487c-4.788,2.495-10.552,3.349-15.743,1.635c-6.313-1.769-11.339-7.198-12.888-13.523
  c-0.939-3.788,0.329-7.6,1.482-11.187c2.574-3.684,6.094-6.868,10.504-8.112c10.65-2.877,25.298,2.167,29.662-1.11
  c5.476-3.719,17.881-17.508,22.8-21.605c4.965-5.336,13.811-13.065,22.013-21.843c2.409-2.544,5.465-4.379,7.765-7.045
  c2.672-2.568,4.959-5.953,8.722-6.996c7.541-1.783,9.544-0.399,88.45-1.135c7.979-0.6,91.521-0.44,92.134-0.439
  c2.781,0.128,5.246-1.287,7.515-2.727c0.085-0.25,0.256-0.756,0.335-1.013c4.979-3.503,16.822-17.04,23.892-22.91
  c0.128-0.213,0.384-0.628,0.512-0.842c6.184-5.191,44.457-43.306,50.084-48.992c0,0,32.222-31.224,33.896-32.669
  c25.386-25.191,2.911-3.279,36.567-35.963c2.147-2.165,5.209-3.263,8.247-3.19c3.874,0.037,7.722-0.622,11.608-0.537
  c74.076,0.213,92.689-0.555,92.689-0.555c108.862,0,88.334-0.854,103.15,0.561c5.707,0.183,36.39-0.651,44.496-0.348
  c12.436,0.245,12.706-2.312,18.061-8.1c0.59-0.617,15.137-15.232,19.409-18.927c3.751-3.269,6.716-8.204,12.041-8.972
  C2364.063,364.652,2373.578,365.11,2383.087,365.024 M1618.046,622.189c0.317,4.087,1.305,8.302,3.837,11.632
  c5.044,3.388,12.195,2.024,14.645-4.611l0.256-0.073c0.397-2.855,0.805-5.795-0.311-8.546c-2.025-3.105-5.27-5.642-9.094-5.764
  C1623.127,614.674,1618.448,617.743,1618.046,622.189z"></path><path d="M1678.359,374.296c3.306-1.055,6.807-0.872,10.235-0.708
  c1.653,0.671,3.312,1.342,5.008,1.946c2.754,1.958,10.296,5.79,9.845,16.664c0.067,3.013-1.507,5.685-2.672,8.363
  c-9.581,11.262-26.596,8.815-33.279-3.367c-2.901-6.168-1.662-16.633,7.753-21.641
  C1676.266,375.131,1677.309,374.716,1678.359,374.296 M1677.883,386.714c0.988,2.672,1.421,5.49,1.867,8.289
  c4.556,7.761,13.802,4.219,16.213-1.745c0.445-2.19,0.793-4.44,0.159-6.63C1694.595,376.689,1678.552,376.076,1677.883,386.714z"></path><path d="M1185.536,375.509c8.015-2.22,17.518,0.525,22.087,7.716
  c1.757,3.757,0.921,8.021,1.147,12.022c0.905,11.516-18.34,19.813-31.175,8.411c-6.435-6.472-6.124-18.348,0.805-24.356
  C1180.4,377.449,1182.962,376.339,1185.536,375.509 M1183.096,386.757c-0.402,8.781,1.037,14.94,9.991,14.505
  c3.257,0.098,5.526-2.641,7.515-4.849c2.629-5.416,0.342-13.322-5.776-15.17C1190.312,379.316,1184.31,381.932,1183.096,386.757z"></path><path d="M2505.085,382.164c18.299-0.22,36.61,0.024,54.915-0.122v7.734
  c-29.115,0.29-30.633-0.327-38.738,0.415c-13.208-0.654-41.285,0.094-49.126-0.092c-8.878,0.453-45.893,0.144-78.008,0.518
  c-20.623,0.291-23.111-1.693-28.991,4.367c-0.598,0.61-26.89,27.252-30.705,29.546c-4.834,2.972-7.913,1.602-83.699,2.068
  c-7.32,0.201-14.639-0.146-21.934,0.36c-4.081,0.262-8.179,0.177-12.199-0.543c-0.478-0.089-40.29,0.225-41.087,0.22
  c-31.917-0.187-31.256,1.027-40.025,1.049c-0.719-0.075-59.322,0.046-64.723,0.104c-2.525-0.012-5.124,0.689-6.941,2.507
  c-3.239,3.288-6.99,6.039-9.979,9.57c-0.371,0.432-27.976,27.737-33.664,32.865c-40.504,39.989-48.899,47.425-60.374,59.123
  c0,0-33.256,32.399-35.89,34.884c-9.912,11.909-14.487,9.109-23.886,9.479c-0.105,0.004-51.865,0.25-51.865,0.25
  c-52.184,0.122-57.324,0.592-57.324,0.592c-3.992-0.494-35.509-0.404-40.27-0.336c-4.684,0.153-7.875,3.971-11.004,6.954
  c-8.271,8.43-17.158,16.231-25.338,24.752c-5.294,5.303-4.463,21.009-9.32,28.07c-7.979,10.11-22.431,9.544-30.041,0.964
  c-8.276-8.62-5.105-24.582,9.314-27.393c0.001,0,18.957-4.16,18.958-4.16c6.392-3.855,10.381-10.436,16.237-14.95
  c15.653-14.481,19.387-21.852,27.076-22.081c6.817-0.26,56.608-0.084,77.306-0.336c0,0,43.757-0.673,70.743-0.366
  c11.609-0.364,14.479,0.922,18.952-3.94c0.61-0.601,19.497-19.313,20.299-19.976c1.869-1.567,17.213-16.957,17.805-17.567
  c3.757-4.172,8.655-7.179,11.949-11.797c3.975-3.232,93.052-91.352,97.172-94.416c7.289-2.047,33.037-0.76,63.149-1.342
  c1.865-0.224,23.767-0.02,25.643,0.183c4.77,0.623,4.514-0.027,38.446,0.305c27.987-0.108,32.938-1,32.938-1
  c8.948-0.311,17.908,0.305,26.863-0.055c2.598-0.22,5.124-1.006,7.728-1.317c1.366,0.744,2.83,1.391,4.459,1.293
  c0.002,0,31.12-0.451,31.12-0.451c37.492,0.419,36.344,0.203,38.306-1.092c3.864-2.54,25.729-24.79,26.332-25.405
  c10.55-11.182,9.813-8.579,22.581-8.954c6.749,0.31,32.925-0.458,33.535-0.445c23.996,0.226,47.992-0.262,71.994,0.122
  C2490.867,381.963,2497.973,382.286,2505.085,382.164 M1682.274,624.489c1.031,2.263,1.281,4.745,1.671,7.179
  c1.281,1.232,2.312,2.842,4.001,3.587c6.491,2.032,14.455-2.616,12.956-12.821c-0.744-3.178-3.404-5.343-6.069-6.929
  C1684.53,612.697,1680.749,620.248,1682.274,624.489z"></path><path d="M2407.504,399.993c6.339-0.06,147.48-0.234,152.496-0.329v7.259
  c-5.22,0.403-70.145,0.535-70.761,0.531c-0.613,0.004-56.26,0.041-69.572,0.628c-35.56-0.343-36.612-0.102-39.733,2.903
  c-14.613,13.73-27.869,28.312-32.377,30.797c-4.335,2.361-9.318-1.005-23.16,0.738c-8.069,1.572-35.705,0.904-36.421,0.921
  c-34.175-0.557-25.445,0.751-31.785,0.781c-0.611,0.003-66.443,0.127-70.676,0.396c0,0-47.152,0.19-72.994,0.36
  c-10.822,0.279-30.358-0.64-34.207,1.744c-3.612,2.229-19.048,18.205-34.505,33.127c-2.157,2.03-48.644,47.717-48.644,47.717
  c-0.622,0.591-31.731,31.28-37.476,36.354c-27.202,27.182-28.332,28.32-32.23,29.363c-3.651,0.929-33.407,0.878-34.017,0.872
  c-4.134-0.015-95.098,0.143-97.453,0.287c-7.161,0.501-10.483,8.466-24.734,20.726c-0.437,0.417-22.163,21.547-25.313,24.758
  c-23.952,22.082-23.097,26.155-33.627,26.155c0,0-45.441,0.06-45.729,0.067c-52.67,0.195-51.692-0.977-55.799,2.769
  c-14.494,12.794-12.331,16.551-28.351,15.462c-55.924-0.143-54.864-0.759-58.013,2.336c-14.197,13.896-13.804,11.161-13.785,21.434
  c-0.001,1.8,0.823,77.177,1.33,82.363c0.336,2.989,2.812,5.057,4.898,6.972c3.111,2.544,5.862,5.502,8.991,8.039
  c5.886,4.651,11.127,0.939,20.147,3.099c5.197,1.812,8.723,6.283,12.62,9.93c2.47,2.336,5.959,2.873,9.162,3.581
  c8.672,2.619,22.103,1.471,26.515,15.444c3.701,11.443-6.093,22.092-16.792,21.544c-6.612,0.354-13.279-2.922-16.908-8.46
  c-2.623-4.343-2.891-9.534-4.196-14.322c-2.494-9.178,0.408-7.635-9.357-17.109c-3.985-3.692-4.474-3.6-18.945-3.641
  c-3.873,0.159-6.856-2.714-9.436-5.209c-4.343-4.392-9.125-8.35-13.291-12.913c-3.572-3.852-2.489-7.943-3.019-44.814
  c0,0-0.55-16.576-0.891-50.596c-0.273-5.559,2.141-6.405,17.536-21.977c4.455-4.628,7.593-3.105,18.244-3.483
  c0,0,46.224-0.035,46.991-0.037c5.009-0.168,7.623,0.214,17.231-10.937c8.955-10.278,7.976-6.512,87.053-7.271
  c19.485-0.599,23.962,1.615,28.894-3.074c3.562-3.268,49.272-48.346,49.882-48.937c8.285-6.793,16.048-16.781,19.708-18.616
  c3.773-1.891,1.534-1.273,63.174-1.537c2.891-0.006,5.789-0.506,8.698-0.189c5.063,0.525,10.156,0.024,15.237-0.11
  c51.081-0.405,48.434,1.228,53.115-3.074c0,0,23.921-23.195,23.923-23.197c4.55-4.672,9.241-9.204,13.815-13.852
  c0.25-0.073,0.738-0.22,0.982-0.299c13.086-13.588,37.367-36.484,38.623-38.641c7.688-6.566,43.282-42.759,49.931-48.144
  c17.925-17.925,2.99-3.504,18.653-18.555c4.28-4.099,1.451-3.176,96.691-3.294c0.612-0.023,29.133-0.511,43.234-0.415
  c2.826,0.049,37.855-0.331,44.527,0.018c13.181,1.503,58.662-0.025,59.276-0.055c15.274-0.846,19.891,2.127,25.289-0.037
  c3.678-1.738,6.35-4.959,8.924-8.009c1.921-2.342,4.435-4.087,6.582-6.215c14.035-13.374,18.135-19.881,25.185-21.422
  c3.556-0.488,7.167-0.189,10.766-0.305C2396.921,400.481,2402.198,399.737,2407.504,399.993 M1568.535,848.85
  c4.709,5.552,16.782,2.135,16.329-9.467c-0.293-4.52-4.561-8.048-9.497-9.003C1565.078,828.005,1561.392,842.791,1568.535,848.85z"></path><path d="M2407.266,423.196c11.154-2.422,23.534,5.418,23.581,18.445
  c-2.691,18.206-26.18,19.434-34.53,5.758c-4.251-6.337-2.348-15.554,3.446-20.281
  C2401.959,425.331,2404.467,423.849,2407.266,423.196 M2404.027,436.755c-0.787,10.447,7.269,13.922,12.016,12.925
  c6.337-0.982,10.558-8.564,8.149-14.487C2420.671,425.115,2404.904,426.16,2404.027,436.755z"></path><path d="M630.35,433.151c3.44-0.897,6.953,0.043,10.308,0.86
  c5.073,3.523,6.176,2.135,10.955,11.693c2.812,8.942-3.843,18.524-12.541,20.8c-11.885,4.126-28.621-6.252-22.648-23.191
  C619.084,437.951,624.501,434.2,630.35,433.151 M625.495,445.289c0.098,2.257,0.885,4.44,0.878,6.722
  c-0.063,10.203,19.478,11.411,18.256-6.154C642.035,436.214,626.562,436.222,625.495,445.289z"></path><path d="M812.155,434.639c12.384-4.413,23.17,2.684,25.704,11.089
  c3.521,12.464-6.862,21.327-15.706,21.837c-11.855,1.286-24.101-8.832-19.616-22.965
  C804.622,440.421,807.8,436.566,812.155,434.639 M814.674,442.507c-1.275,1.379-1.47,3.306-1.708,5.081
  c0.97,3.099,0.226,6.795,2.513,9.418c2.385,3.278,8.953,4.867,14.438-0.39c3.59-3.71,4.731-12.801-4.306-16.749
  C821.878,438.78,817.242,439.323,814.674,442.507z"></path><path d="M1305.569,435.853c12.505-6.14,30.15,0.208,27.936,19.22
  c-8.69,23.412-44.875,11.08-35.024-11.974c1.067-1.513,2.092-3.05,3.214-4.52C1303.02,437.725,1304.313,436.81,1305.569,435.853
   M1315.091,459.44c6.468,1.19,14.253-8.806,9.009-15.908c-1.061-1.677-2.812-2.666-4.428-3.696
  C1301.578,434.238,1305.364,459.709,1315.091,459.44z"></path><path d="M1055.712,438.445c7.139-6.097,19.046-5.83,25.136,0.079
  c1.122,1.037,2.153,2.178,3.239,3.269c9.406,17.124-8.938,30.523-22.642,24.886c-8.889-3.721-12.028-10.182-12.028-17.969
  C1050.399,444.746,1052.357,440.915,1055.712,438.445 M1058.804,446.442c0.86,2.483,0.927,5.136,1.519,7.673
  c1.025,3.806,5.453,5.325,9.021,4.88c1.626-0.15,4.852-1.573,7.502-5.453c0.634-1.982,1.537-3.989,1.22-6.118
  c-0.329-4.001-3.556-7.454-7.319-8.558C1064.67,437.506,1059.5,439.657,1058.804,446.442z"></path><path d="M2251.879,476.726c7.2-12.271,27.976-10.948,33.652,3.367
  c2.847,6.108,0.59,14.345-6.618,19.671c-10.417,6.81-27.58,0.122-29.016-11.815
  C2249.585,484.143,2249.628,480.002,2251.879,476.726 M2259.552,479.812c-2.296,5.731,0.983,15.633,12.779,13.938
  c4.617-1.153,8.015-5.868,7.576-10.638C2280.031,472.242,2263.654,468.756,2259.552,479.812z"></path><path d="M1432.496,493.195c28.711-10.883,39.941,40.829-1.769,31.639l-0.122-0.36
  C1416.582,519.114,1417.943,497.137,1432.496,493.195 M1431.459,505.028c-0.815,5.15,1.436,15.23,10.564,13.95
  c3.416-0.22,5.886-2.958,7.698-5.606c0.622-2.58,0.842-5.319,0.396-7.942C1447.606,495.974,1432.67,495.907,1431.459,505.028z"></path><path d="M1493.51,493.177c14.609-5.621,32.987,6.743,24.343,25.082
  c-3.047,4.578-7.269,7.509-13.102,7.338c-7.745-0.24-8.103,0.845-14.407-2.062c-2.69-2.562-5.709-5.118-6.838-8.796
  c-2.574-6.533-0.146-14.56,5.38-18.811C1490.29,494.805,1491.876,493.933,1493.51,493.177 M1493.089,511.896
  c8.973,14.173,21.897,1.092,17.994-8.32c-1.854-3.623-5.819-6.264-9.967-5.88C1497.471,497.432,1490.325,500.565,1493.089,511.896z
  "></path><path d="M1309.29,493.213c3.568-1.104,7.319-0.793,10.998-0.683l-0.012,0.5
  c2.367,0.604,4.63,1.531,6.813,2.641c1.293,1.257,2.659,2.452,3.824,3.849c3.556,4.996,4.538,11.742,2.178,17.463
  c-5.977,8.39-12.536,11.259-22.983,8.966c-11.722-4.805-12.105-12.236-12.992-15.359
  C1298.046,499.471,1301.606,497.27,1309.29,493.213 M1308.327,503.955c-1.3,4.679,1.612,15.211,9.204,14.852
  c3.355,0.207,5.245-2.94,7.667-4.678c-0.092-0.256-0.268-0.769-0.36-1.031l0.805,0.317c0.464-1.757,0.738-3.562,1.281-5.294
  C1326.432,497.877,1312.136,494.922,1308.327,503.955z"></path><path d="M1616.1,493.116c4.068-1.226,8.35-0.445,12.529-0.586
  c2.983-0.116,5.746,1.177,8.338,2.519c1.494,1.427,2.879,2.97,4.007,4.721c3.208,4.898,3.556,11.309,1.232,16.646
  c-1.805,2.727-4.209,4.953-6.588,7.161c-3.086,1.025-6.136,2.489-9.448,2.47c-10.855,0.7-24.009-10.37-18.646-24.38
  C1609.317,497.953,1612.385,494.909,1616.1,493.116 M1617.423,503.881c-0.891,9.139,4.116,13.997,8.369,14.23
  c6.917,0.823,12.907-7.076,10.552-13.578C1634.092,495.335,1618.588,494.314,1617.423,503.881z"></path><path d="M938.868,493.445c10.776-1.95,18.484,1.381,23.227,12.016
  c0.241,2.45,2.422,14.305-9.406,19.458c-13.994,6.811-30.172-6.049-26.734-18.018C927.193,500.423,932.61,495.183,938.868,493.445
   M936.91,509.951c0.531,2.123,0.201,4.556,1.653,6.368c4.19,6.074,16.701,3.735,17.402-5.74
  C959.076,496.84,933.095,493.029,936.91,509.951z"></path><path d="M1001.956,493.238c13.953-2.446,26.873,8.219,21.69,23.002
  c-7.498,15.286-30.556,13.787-35.719-2.537c-0.891-6.63,1.159-15.011,8.003-17.689l-0.342-0.256
  C997.766,495.055,999.718,493.781,1001.956,493.238 M997.168,506.895c0.256,3.831,0.451,8.271,3.855,10.772
  c8.623,5.078,11.317-1.643,14.383-3.568c-0.018-0.146-0.061-0.433-0.079-0.579c3.194-5.169,0.47-14.089-8.857-15.145
  C1001.889,498.264,996.686,501.911,997.168,506.895z"></path><path d="M1061.708,493.799c18.665-5.378,30.191,12.457,23.032,24.411
  c-9.83,14.623-30.217,8.849-34.091-2.647c-3.335-6.735,0.843-16.287,6.996-19.744c0.207-0.152,0.622-0.451,0.823-0.604
  C1059.555,494.781,1060.64,494.311,1061.708,493.799 M1060.457,503.448c-1.714,3.038,0.061,6.411,0.567,9.521
  c0.256,2.855,2.373,5.368,5.105,6.197c2.159,0.86,4.434-0.085,6.557-0.622c1.641-1.232,3.294-2.458,4.861-3.806
  c-0.049-0.25-0.152-0.762-0.201-1.013l0.72,0.207c2.091-7.328,1-10.355-4.77-14.352c-2.312-0.689-4.764-0.921-7.143-0.537
  C1063.727,499.606,1061.793,501.429,1060.457,503.448z"></path><path d="M1121.417,494.464c12.436-5.013,27.704,1.568,27.509,18.036
  c-0.842,2.647-1.976,5.172-3.233,7.649c-11.204,11.491-28.466,8.276-33.92-6.466C1111.059,505.18,1112.28,499.918,1121.417,494.464
   M1123.076,503.265c-0.951,2.544,0.262,5.124,0.641,7.643c-0.104,6.289,8.448,10.095,13.382,6.478
  c6.008-3.324,6.807-12.773,1.446-17.048C1131.687,495.363,1125.11,498.59,1123.076,503.265z"></path><path d="M147.098,497.8c16.116-2.755,28.302,16.79,15.139,27.997
  c-12.982,12.596-35.657-0.164-30.486-15.334C133.746,503.625,140.163,498.752,147.098,497.8 M141.383,517.563
  c0.628,2.354,2.727,3.831,4.642,5.136c7.609,2.199,12.642-1.607,14.688-6.886c2.275-8.246-3.954-14.741-12.541-13.736
  C142.766,503.125,138.714,508.142,141.383,517.563z"></path><path d="M2388.583,518.758c39.667-0.776,156.642-0.233,171.417-0.738v7.411
  c-0.112-0.005-38.049,0.276-39.007,0.323c-11.882,0.052-83.244,0.034-93.36,0.36c-2.634,0.017-98.706,0.597-100.619,0.659
  c-0.001,0-56.738,0.116-56.738,0.116c-10.995,0.374-43.044,0.031-50.596,0.366c-0.004,0-70.161,0.416-78.117,0.421
  c-6.691-0.195-13.431,0.561-20.074-0.476c-3.465-0.634-6.978-0.464-10.449-0.207c-37.211,0.205-35.076,1.125-53.725-0.134
  c-3.068-0.043-5.99,1.086-9.034,1.244c-6.88,0.433-13.797-0.159-20.659,0.451c-2.683,0.387-2.96-0.651-34.658,31.657
  c-8.624,7.668-40.471,40.043-51.011,49.083c-6.043,4.47-8.315,1.592-87.7,2.751c-51.177,0.205-50.032-0.427-52.975,2.306
  c0,0-25.069,24.258-25.069,24.258c-14.498,14.455-31.169,30.437-31.169,30.437c-9.865,9.493-12.884,14.127-18.842,14.633
  c-1.418,0.078-53.121,0.319-53.731,0.311c-0.611,0.006-33.629-0.097-38.995,0.287c-8.873,0.544-7.661-1.911-17.396,7.74
  c-1.802,1.903-19.017,18.918-24.075,23.477c-2.976,2.965-34.207,33.517-34.207,33.517c-5.507,5.87-1.038,7.576,2.55,22.465
  c1.51,9.441-0.57,15.579-9.674,20.226c-15.621,7.73-33.45-9.543-24.667-23.691c1.279-2.124,29.721-28.925,37.628-36.964
  c1.433-1.635,2.684-3.452,4.434-4.782c4.355-3.312,7.594-7.826,11.961-11.12c3.931-3.492,19.382-19.641,23.691-23.313
  c16.572-14.468,10.882-14.401,22.465-15.591c21.293-0.179,78.594,0.051,95.178-0.323c5.263,0.186,5.201-1.129,28.052-23.819
  c0,0,16.911-16.187,22.312-21.629c10.264-10.899,23.368-22.934,23.368-22.934c3.685-4.039,7.314-3.682,29.925-3.373
  c22.308,0.075,65.979-0.549,65.979-0.549c42.095-0.689,42.156,1.228,45.515-1.494c0.663-0.607,23.892-23.282,23.892-23.282
  c0,0,23.749-23.157,23.752-23.16c3.623-3.501,6.948-7.332,10.949-10.43c3.678-2.855,5.984-7.057,9.631-9.942
  c8.398-6.74,12.256-14.414,19.098-14.804c0.611-0.035,23.108-0.68,25.661-0.067c3.732,0.89,27.791-0.58,45.601,0.299
  c3.684-0.165,7.374-0.378,11.077-0.214c4.233-0.952,8.399,1.293,12.614,0.262c6.289-1.366,12.748-0.653,19.128-0.83
  c4.904,0.336,9.747-1.092,14.651-0.518c4.044,0.445,8.137,0.598,12.205,0.146c3.233-0.384,6.471,0.159,9.723,0.171
  c3.861,0.098,7.716-0.543,11.589-0.256c3.404,0.297,32.987-0.108,33.603-0.116c3.264-0.022,44.302-0.001,48.925-0.5
  c3.806-0.287,7.594,0.579,11.412,0.256c5.276-0.439,10.564-0.305,15.859-0.305c0.01,0,67.469-0.094,72.622-0.116
  C2375.188,518.356,2381.886,518.514,2388.583,518.758 M1534.445,767.646c-1.744,2.043-1.36,4.837-1.33,7.313
  c0.262,3.524,1.895,6.507,3.227,7.698c9.347,8.456,22.776-7.474,13.139-15.548C1545.619,762.858,1537.818,762.754,1534.445,767.646
  z"></path><path d="M2470.305,535.978c29.894-0.317,59.801,0.268,89.695-0.464v7.765
  c-5.131-0.41-104.266,0.86-104.266,0.86c-6.825-0.982-38.153-0.137-60.41,0c-0.61-0.006-27.737-0.179-32.297,0.891
  c-3.111,0.787-6.063-1.135-9.174-0.823c-4.45,0.137-62.922,0.315-64.662,0.5c-3.715,0.433-7.289-1.074-10.973-0.939
  c-8.332,0.634-16.688,0.183-25.027,0.317c-9.57,0.281-19.135-0.122-28.699,0.226c-6.112-0.177-12.169,0.976-18.274,0.683
  c-7.983,0.13-146.822,1.012-163.426,0.982c-7.141-0.141-8.247,4.508-17.292,12.632c-0.66,0.585-34.892,33.971-34.908,33.987
  c-2.158,2.192-32.335,32.308-36.372,35.018c-3.4,2.301-3.942,2.117-58.489,1.915c-98.141,1.473-70.901-6.781-101.778,21.983
  c-3.232,3.662-28.899,27.984-36.396,35.567c-9.458,8.992-12.592,14.793-20.989,14.438c-25.612-0.17-70.312,0.623-78.118,0.244
  c-20.844,0.923-25.288-2.052-31.389,3.623c-30.417,29.416-30.28,29.164-30.858,32.682c-1.295,11.484,2.246,14.616,4.861,18.427
  c3.876,6.571,17.471,20.468,3.751,32.181c-11.457,10.629-32.05,1.984-31.407-14.023c1.04-8.585,4.305-8.127,12.461-22.703
  c2.924-5.064-0.832-15.28,2.818-20.812c3.554-4.193,22.614-22.024,28.93-29.022c7.659-6.528,4.465-8.889,29.266-8.332
  c3.66,0.134,78.653,0.025,79.27,0.024c13.195-0.263,10.168,1.017,17.274-5.02c0.271-0.233,51.596-50.84,52.975-52.396
  c14.255-11.843,9.615-13.876,21.891-14.59c3.54-0.005,82.396,0.001,87.846-0.555c0,0,3.764,0.424,33.529-0.085
  c9.395-0.471,5.446,3.126,23.459-14.609c0,0,37.402-36.371,37.403-36.372c6.909-5.783,29.435-31.207,34.847-31.925
  c5.076-0.806,135.458-0.904,136.076-0.891c11.684-0.742,104.267,0.878,110.329-0.445c1.319-0.278,138.037-0.959,138.51-0.945
  C2436.965,536.014,2453.635,535.764,2470.305,535.978 M1583.571,770.592c-1.061,2.8-0.067,5.764,0.567,8.546
  c1.021,1.625,3.781,9.314,11.571,6.484c2.861-0.848,4.813-3.263,6.63-5.484c-0.037-0.213-0.104-0.647-0.14-0.866
  c2.255-4.646,0.954-10.522-6.85-14.371C1592.359,764.931,1586.568,763.806,1583.571,770.592z"></path><path d="M0,545.932c0,0,58.568,0.445,58.568,0.445
  c5.299,0.141,5.653,1.646,46.711,41.264c7.885,7.753,7.302,5.536,16.091,6.246c1.179-0.011,72.463-0.081,79.917,0.378
  c12.059-0.838,62.069,0.11,62.069,0.11c3.381-0.433,30.441,0.514,33.749,0.11c4.148-0.525,8.35-0.555,12.51-0.146
  c2.952,0.281,5.85-0.555,8.802-0.531c94.543,0.066,107.901,0.333,127.518,0.415c3.155,0.064,251.261,0.195,251.261,0.195
  c97.274-0.637,92.57-0.303,95.873,2.434c4.41,3.599,7.747,8.844,13.431,10.619c5.368,1.604,10.961,2.324,16.396,3.696
  c3.269,0.592,6.112,2.385,8.93,4.05c14.822,15.158,0.721,34.733-18.689,29.492c-5.093-1.287-8.808-5.557-11.193-10.028
  c-1.989-3.434-1.702-7.521-2.489-11.284c-0.933-4.453-1.147-9.534-4.593-12.919c-3.312-3.355-6.496-7.911-11.626-8.253
  c0,0-117.203-0.354-117.204-0.354c-2.147-0.198-68.553-0.377-88.395-0.098c-24.526-0.489-251.316-0.357-251.926-0.354
  c-21.662-0.226-4.061-1.138-24.99-1.696c-2.201-0.054-35.857,0.184-40.849,0.024c0,0,7.863,1.393-147.067,1.049
  c-6.59,0.273-8.153-3.511-28.18-22.392c-1.942-1.94-23.597-23.552-26.454-24.746c-3.861-1.673-22.308-0.927-25.252-0.64
  c-3.239,0.238-6.459-0.396-9.698-0.366c-7.74-0.061-15.481,0.03-23.221-0.031V545.932 M809.91,626.422
  c0.494,2.153,0.738,4.355,1.372,6.484c1.214,1.635,2.141,3.837,4.282,4.447c1.751,0.622,3.727,1.275,5.563,0.549
  c4.062-1.122,7.795-4.172,8.722-8.424c0.091-1.745-0.055-3.483-0.36-5.191C823.171,612.97,810.505,616.203,809.91,626.422z"></path><path d="M1310.962,548.799c6.209-3.648,14.212-4.538,20.702-1.049
  c4.129,1.805,6.502,5.734,8.68,9.467c2.703,8.805-1.071,16.377-6.96,19.775c-2.237,1.578-2.902,1.721-8.539,3.282
  c-1.488-0.006-2.964-0.006-4.422,0.024c-2.91-0.86-5.788-1.812-8.515-3.129c-4.666-3.172-7.795-8.491-8.131-14.133
  c-0.244-3.696,1.525-7.045,3.178-10.223C1308.284,551.477,1309.614,550.129,1310.962,548.799 M1314.182,559.369
  c0.793,2.458,1.873,4.874,1.982,7.496c0.604,1.153,1.244,2.3,1.885,3.446c8.579,5.656,17.438-3.187,14.712-12.169
  C1328.674,548.02,1314.098,549.934,1314.182,559.369z"></path><path d="M811.929,553.306c1.763-0.451,3.513-0.982,5.258-1.537
  c1.531-0.012,3.074-0.024,4.617-0.006c1.763,0.604,3.556,1.122,5.38,1.543c13.659,7.343,13.27,20.797,6.045,27.412
  c-2.3,2.489-5.508,3.696-8.57,4.922c-3.904,1.031-7.917,0.494-11.766-0.494c-10.012-4.634-14.095-13.743-11.193-21.879
  C804.073,559.089,807.208,554.935,811.929,553.306 M811.606,573.191c1.47,1.257,2.617,2.885,4.203,4.014
  c4.992,2.384,10.107,1.045,13.718-5.849c2.007-3.513,1.116-8.1-1.854-10.79C822.886,555.157,806.814,554.374,811.606,573.191z"></path><path d="M872.834,554.295c1.125-0.302,17.088-7.51,25.948,8.204
  c1.398,2.413,2.267,6.576,0.445,12.87c-6.871,14.616-30.527,14.415-35.469-2.739c-1.074-4.16-0.335-8.783,2.141-12.309
  C867.857,557.954,870.095,555.746,872.834,554.295 M874.633,571.251c0.762,0.976,1.494,2.001,2.275,2.989
  c2.356,3.362,10.924,4.62,15.554-2.739c0.195-0.958,0.238-1.958,0.311-2.916l0.537,0.244c0.012-2.672,0.47-5.673-1.311-7.936
  C886.364,552.164,869.664,555.037,874.633,571.251z"></path><path d="M2440.442,554.398c7.287-0.725,116.605-0.918,119.558-0.793v7.576
  c-0.636,0-81.464,0.024-85.394,0.348c-0.365,0.031-29.906-0.372-29.906-0.372c-4.276-0.201-8.515,1.098-12.754,0.195
  c-9.149-0.518-18.323,0.018-27.472,0c0,0-15.296,0.737-43.966,0.701c-4.594-0.178-41.167,0.418-46.29,0.207
  c-17.243,0.297-78.93,0.25-94.531,0.72c-7.267-0.015-100.26,0.292-100.314,0.293c-0.949,0.033-41.846,0.272-42.459,0.256
  c-9.369-0.311-18.732,0.195-28.095,0.159c-3.727-0.25-6.606,2.458-8.942,4.989c-0.006,0.007-34.106,33.446-35.146,34.402
  c-11.87,11.922-24.288,23.839-24.898,24.404c-3.715,4.251-8.192,7.71-12.077,11.778c-3.172,2.818-5.819,6.789-10.272,7.588
  c-4.44,0.764-28.026,0.09-39.178,0.433c-3.709,0.257-30.855-0.199-38.409,0.305c-32.841,0.193-43.893,0.067-43.893,0.067
  c-6.522,0.672-6.202-1.288-14.968,7.722c-0.004,0.004-14.284,13.687-24.106,23.496c-5.386,5.537-30.527,29.69-36.933,36.28
  c-2.318,2.385-5.301,4.502-8.783,4.319c-10.18-0.195-20.361,0.085-30.535-0.104c-9.862,0.541-54.258,0.384-54.872,0.39
  c-5.008-0.11-8.119,4.337-11.449,7.362c-1.739,1.641-3.044,3.733-3.556,6.081c-2.989,12.547-2.57,21.747-11.034,26.96
  c-9.22,5.968-22.93,3.448-27.814-7.405c-4.819-9.84,2.095-20.885,10.772-23.081c16.754-4.194,18.316-3.719,22.026-5.923
  c5.982-3.291,9.661-10.083,13.779-11.223c3.356-0.992,29.511-0.233,59.093-0.543c17.403-1.454,29.099,1.497,33.798-1.208
  c2.102-1.22,14.052-13.243,15.969-15.096c0.61-0.545,15.22-15.62,18.976-18.842c4.426-3.749,25.325-24.878,26.997-26.637
  c2.33-3.044,5.581-5.185,8.064-8.088c0.268-0.055,0.799-0.177,1.061-0.232c0.214-0.287,0.628-0.86,0.836-1.141
  c10.038-2.194,40.521-0.974,57.159-1.25c81.621-0.359,71.766,1.194,78.105-4.428c3.033-2.308,19.5-18.462,20.11-19.025
  c2.208-1.995,3.91-4.489,6.234-6.368c0.079-0.256,0.232-0.775,0.311-1.037c0.323-0.091,0.97-0.274,1.293-0.366
  c7.361-7.605,23.477-23.117,23.477-23.117s12.311-12.099,19.36-19.128c9.306-9.82,11.419-10.688,18.921-10.674
  c69.03,0.041,105.656-0.155,111.543-0.183c3.276-0.012,6.539-0.537,9.827-0.476c3.147-0.031,6.289,0.439,9.448,0.201
  c0,0,94.548-0.105,113.019-0.494c2.086,0.066,94.423-0.305,96.441-0.323c5.484,0.061,10.955,1.049,16.451,0.445
  C2416.824,554.319,2428.633,554.575,2440.442,554.398 M1634.026,755.026c6.405-4.27,9.085-13.725-0.787-19.372
  C1612.164,729.632,1618.359,762.964,1634.026,755.026z"></path><path d="M0,570.013c30.738,0.974,17.524-5.816,51.224,26.484
  c16.7,15.339,19.164,21.398,26.832,21.275c4.28,0.094,54.909,0.256,54.909,0.256c2.879,0.439,5.795,0.5,8.704,0.482
  c0.22-0.165,0.665-0.494,0.891-0.659c0,0,137.391-0.128,137.393-0.128c0,0,104.931,0.159,104.931,0.159
  c8.884-0.467,31.426-0.085,42.697,0.043c5.668,0.17,81.765,0.039,87.749,0.232c0,0,213.544,0.073,213.547,0.073
  c12.197,0.784,23.61-13.153,38.214-4.88c4.445,2.481,8.738,8.763,8.582,14.907c0.199,10.449-10.967,21.227-25.667,16.188
  c-6.515-2.233-15.355-13.005-18.775-16.036c-4.611-4.164-1.911-2.13-108.469-2.641c-5.753-0.694-74.126,0.41-82.338-0.14
  c-9.212-0.56-88.54,0.037-92.11-0.232c-62.014-0.202-261.715-0.262-261.715-0.262c-2.53-0.252-28.015-0.504-31.01-0.207
  c-4.111,0.403-8.155-0.634-12.236-0.891c-33.528-0.396-70.786,0.567-70.786,0.567c-2.885-0.169-5.86-1.4-17.262-13.2
  c-2.448-2.571-31.957-31.62-34.505-33.267c-2.165-1.44-4.867-1.452-7.368-1.501C8.954,576.65,4.477,576.729,0,576.656V570.013
   M754.203,618.523c-8.263,3.988-6.18,12.906-4.77,16.225c1.561,1.555,2.812,3.77,5.148,4.233c3.001,0.61,6.411,0.488,9.064-1.195
  c1.641-1.275,3.294-2.928,3.501-5.105l0.439,0.207c1.381-5.554,1.394-9.03-5.368-13.755
  C759.625,618.328,756.887,618.084,754.203,618.523z"></path><path d="M2430.688,571.843c4.942-0.277,115.907-0.651,129.312-0.476v7.484
  c-0.001,0-103.089,0.293-103.089,0.293c-22.961,0.571-12.277,0.239-61.6,0.372c-4.283,0.199-46.559,0.078-53.061,0.244
  c0,0,0.835,0.324-92.153,0.464c-0.001,0-44.484,0.464-44.484,0.464c-23.903,0-79.689,0.192-79.899,0.189
  c-3.044,0.006-6.02-0.793-9.052-0.708c-18.543,1.183-37.128,0.165-55.689,0.598c-3.12,0.028-4.33,1.577-16.75,14.194
  c-4.505,3.945-25.324,24.703-25.905,25.313c0,0-16.761,15.865-37.146,36.683c-12.563,11.18-3.562,7.04-59.197,8.198
  c-25.417-0.445-50.828,0.647-76.233,0.134c-3.776-0.189-6.752,2.464-9.198,4.99c-1.012,1.065-17.761,17.933-21.501,21.251
  c-5.123,5.378-33.596,32.223-37.177,36.604c-1.238,1.47-2.31,3.123-5.477,19.726c-3.084,13.804-16.028,17.285-24.008,14.31
  c-12.266-3.884-18.414-18.666-8.698-28.327c4.269-4.311,8.333-4.806,23.246-8.302c9.432-2.383,6.972-2.53,16.066-10.955
  c0.611-0.614,43.39-42.767,46.534-45.503c6.239-5.141,6.874-11.206,18.39-11.711c93.277-0.296,107.698-0.233,115.911-0.232
  c12.126,0.361,11.25-4.371,20.385-12.15c0.001-0.001,35.402-34.749,35.402-34.749c0-0.001,34.462-33.871,34.463-33.871
  c4.58-4.461,15.828-1.353,46.955-2.653c0,0,40.879-0.769,40.879-0.769c13.989,0.095,35.475-0.329,35.475-0.329
  s33.552-0.494,43.82,0.171c11.665-0.447,83.44-0.578,89.658-0.531c8.741,0.134,17.457-0.518,26.198-0.384
  C2365.606,571.861,2398.147,571.831,2430.688,571.843 M1746.601,737.777c-2.275,3.395-1.452,10.988,3.086,15.164
  c6.232,4.92,14.972-0.409,14.737-5.038l0.47,0.305c1.386-5.417,0.239-10.651-4.916-13.364
  C1755.777,732.39,1749.241,733.13,1746.601,737.777z"></path><path d="M2377.64,589.617c0.002,0,153.643-0.427,153.643-0.427
  c7.85,0.451,21.703-1.4,28.717,1.738v10.327c-7.263-4.837-2.838-5.347-42.051-4.434c0,0-131.196,0.83-131.196,0.83
  c0,0-82.434,0.272-98.801,0.244c-3.867,0.079-7.692-0.775-11.546-0.518c-3.241,0.164-48.608,0.557-49.407,0.543
  c0,0-28.34,0.815-53.756,0.512c-104.773,1.198-100.512-0.632-104.145,2.501c-1.58,1.331-45.133,44.125-45.631,44.643
  c-41.575,40.394-34.361,36.765-47.821,37.208c-11.264,0.419-93.628-0.74-97.27,1.921c-2.557,1.812-53.719,52.296-55.281,53.865
  c0,0-34.827,34.181-34.829,34.182c-9.802,9.023-4.479,5.893-61.46,6.264c-7.727-0.353-9.518-4.392-15.45-9.119
  c-1.391-1.257-3.379-0.988-5.05-1.433c-2.611-0.531-4.209-3.233-6.905-3.513c-7.773-1.31-26.735-3.204-26.667-18.933
  c-0.392-8.864,7.729-19.579,22.117-17.134c15.74,3.977,16.012,19.008,17.402,23.776c1.068,3.703,1.489,7.966,4.441,10.766
  c2.568,2.464,5.099,5.069,8.161,6.935c2.762,1.754,2.8,0.824,42.813,0.884c10.474-0.288,7.993,1.099,16.5-6.954
  c2.842-2.849,5.642-5.752,8.771-8.302c3.41-2.928,5.721-6.929,9.296-9.686c2.311-1.737,49.126-47.679,60.581-59.532
  c11.544-10.717,9.02-11.216,21.19-11.742c3.265,0.5,21.144-0.275,23.91-0.128c2.568,0.198,55.362-0.13,68.962-0.012
  c4.568,0,6.197-1.673,19.818-15.828c2.104-2.208,4.788-3.824,6.606-6.325c1.927-2.72,4.843-4.447,7.173-6.783
  c12.838-13.029,51.846-51.207,52.755-52.011c2.379-2.196,5.709-2.769,8.844-2.69c10.961,0.177,21.928-0.305,32.889,0.049
  c3.94,0.134,7.85-0.891,11.809-0.433c2.964,0.378,5.959,0.177,8.942-0.067c39.433-0.399,126.101,0.397,141.486,0.012
  c7.32-0.262,14.682,0.494,21.977-0.457c4.245-0.567,8.54-0.207,12.821-0.311c17.677-0.201,35.353,0.079,53.036-0.049
  C2362.568,590.002,2370.095,589.404,2377.64,589.617 M1687.734,753.331c7.342,6.481,19.27-2.496,15.218-13.181
  c-1.616-2.409-3.757-4.379-6.356-5.66C1687.978,730.932,1677.213,741.784,1687.734,753.331z"></path><path d="M0,596.547c4.375,3.131,34.374,32.729,35.89,34.249
  c6.921,6.329,5.328,4.593,23.862,4.758c0.335,0,172.296-0.1,172.631-0.116c0.611-0.014,86.19,1.738,122.626-0.012
  c0,0,53.096,0.262,53.097,0.262c12.996,0.353,158.977,0.116,160.968,0.116c159.189,0.671,150.54-2.126,157.4,4.654
  c15.19,13.865,11.698,13.738,23.782,13.596c34.137,0.605,37.598-1.324,42.618,2.434c8.206,6.613,7.072,10.157,20.824,12.297
  c3.995,0.567,7.887,1.684,11.809,2.611c3.654,1.976,7.661,3.904,9.887,7.606c3.605,5.581,3.233,13.224-0.537,18.628
  c-2.293,3.324-6.039,5.118-9.43,7.094c-2.476,0.354-4.959,0.738-7.46,0.659c-7.313-0.348-14.657-5.203-16.67-12.449
  c-4.698-18.168-0.999-19.269-13.224-29.345c-3.596-3.042-7.648-2.238-22.575-2.043c-7.902-0.188-25.011,1.155-29.729-1.153
  c-6.496-4.093-11.144-10.455-17.134-15.182c-6.107-4.484-66.891,0.409-281.868-1.867c-0.611-0.034-101.083,0.182-104.279-0.159
  c-6.423-0.567-12.895,0.238-19.305-0.433c-7.911-1.653-16.024-0.61-24.032-1.013c-0.61-0.027-33.201-0.604-41.489,1.061
  c-4.787,0.181,12.916,0.098-151.941,0.098c-63.437-0.635-55.391,2.453-65.546-6.996c-2.53-2.33-23.998-23.428-24.35-23.807
  c-1.732-1.903-3.782-3.458-5.825-5.002V596.547 M815.174,678.318c-4.619,3.045-6.306,4.904-4.154,15.231
  c0.22,0.165,0.671,0.494,0.891,0.659c3.249,6.798,12.989,5.37,16.634-0.409c3.247-6.05,1.746-12.076-4.739-15.481
  C821.005,677.397,817.974,677.433,815.174,678.318z"></path><path d="M2497.717,607.27c3.312,0.091,6.575-1.25,9.9-0.531
  c4.19,0.915,8.509,0.457,12.772,0.506c35.303,0.155,27.464-2.157,39.611,5.984v10.839c-4.27-2.556-7.161-7.002-11.827-8.911
  c-5.288-1.507-10.827-0.268-16.219-0.5c-40.489,0.613-71.969-0.098-71.969-0.098c-3.373,0.171-6.746-0.543-10.083,0.055
  c-2.72,0.482-5.429-0.189-8.125-0.134c-2.284,0.132-77.079,1.211-100.784,1.043c-1.945,0.107-147.554,0.698-148.165,0.701
  c0,0-105.571,0.482-105.572,0.482c-6.189-0.124-5.999,3.741-62.85,58.513c-33.219,33.529-19.082,23.451-57.263,25.429
  c0,0-23.128,0.222-72,0.256c-12.995,0.314-7.578-0.26-20.751,11.479c-9.538,9.616-63.942,62.893-63.942,62.893
  c-44.304,43.375-36.418,38.65-45.979,45.82c-6.046,1.969-10.016,4.144-19.543-1.177c-5.604-3.121-11.489-11.998-7.271-21.641
  c4.357-8.221,8.653-8.514,13.364-10.522c8.674-0.384,16.847,3.038,25.21,4.782c5.165,1.173,9.158-6.135,17.86-13.407
  c0.162-0.185,38.126-37.832,38.299-38.007c3.702-3.361,7.521-6.636,10.735-10.491c2.025-2.482,4.715-4.282,6.923-6.594
  c6.562-6.81,15.792-15.273,15.792-15.273c16.324-17.063,14.62-15.307,23.209-15.767c4.952,0,82.224-0.09,85.376-0.329
  c19.158-0.689,18.101,2.368,26.753-7.173c0.229-0.333,35.297-35.015,37.824-37.189c55.417-53.798,22.568-36.108,101.369-39.879
  c37.993,0.496,168.158-0.852,203.708-0.701c7.613-0.216,31.083-0.116,31.083-0.116c12.631-0.584,54.833,0.987,62.716,0.25
  c3.343-0.659,6.752-0.25,10.107,0.183c0.219-0.159,0.653-0.464,0.872-0.622c3.306,0.037,6.594,0.842,9.93,0.506
  C2471.727,606.66,2484.737,607.428,2497.717,607.27 M1746.521,802.078c0.006,2.586-0.281,5.41,1.287,7.661
  c1.549,2.232,3.233,4.916,6.13,5.459c9.197,1.711,11.408-5.415,12.297-7.618c0.018-2.531,0.756-5.313-0.744-7.57
  C1760.738,790.468,1746.589,793.886,1746.521,802.078z"></path><path d="M1555.092,612.241c14.463-8.447,33.578,5.781,27.637,20.507
  c-0.049,0.287-0.146,0.86-0.195,1.147c-3.385,6.74-11.077,11.065-18.592,10.424c-0.823-0.03-1.622-0.055-2.409-0.061
  C1543.169,638.434,1542.186,620.491,1555.092,612.241 M1556.263,623.464c-0.491,11.669,6.589,16.181,13.328,12.834
  c1.995-0.988,3.221-2.94,4.642-4.581c0.994-2.775,1.726-5.911,0.543-8.747C1571.042,614.117,1557.274,614.577,1556.263,623.464z"></path><path d="M872.614,613.357c10.113-4.478,19.733-1.222,25.271,6.789
  c5.941,9.919-0.413,21.716-9.881,24.496c-14.444,5.242-30.45-9.436-23.355-22.971c1.025-2.239,2.873-3.934,4.453-5.776
  C870.278,615.065,871.443,614.205,872.614,613.357 M874.895,620.603c-2.745,2.836-1.47,7.002-1.208,10.473
  c0.75,2.806,2.861,4.874,5.038,6.655c4.508,1.69,9.912-0.11,12.449-4.215c0.36-0.866,0.811-1.69,1.324-2.47
  C894.767,616.37,879.94,614.311,874.895,620.603z"></path><path d="M2330.643,625.544c261.034-0.193,195.828-6.017,229.357,16.475v10.747
  c-5.856-4.264-10.778-9.619-16.194-14.395c-5.329-4.629-5.904-7.075-17.396-5.636c0,0-23.31-0.303-23.776-0.323
  c-3.263-0.171-6.472,0.671-9.705,0.464c-6.704-0.653-13.45-0.256-20.147,0.085c-7.338-0.189-14.7-0.677-22.014,0.116
  c-5.069,0.659-10.156-0.098-15.23,0.067c-108.122-0.021-142.712,0.61-142.712,0.61c-52.757-0.048-77.422,0.329-77.422,0.329
  c-3.423-0.174-39.469,0.411-45.155,0.177c-0.614,0.01-53.72,0.292-55.512,0.232c-23.151,0.336-21.237-1.695-29.199,4.312
  c-1.726,1.263-3.123,2.891-4.471,4.532c-2.574,3.105-5.697,5.673-8.552,8.503c-3.941,3.642-30.449,29.223-33.89,33.304
  c-8.057,8.808-16.877,16.89-25.222,25.423c-3.702,3.629-7.673,8.131-13.334,7.966c-0.614,0-95.169-0.03-98.508,0.378
  c-3.556,0.457-6.002,3.3-8.338,5.715c-2.44,2.629-5.392,4.721-7.753,7.417c-1.939,2.178-37.422,37.123-43.679,42.917
  c-7.373,7.591-31.459,30.863-33.956,33.731c0,0-20.439,19.823-20.44,19.824c-3.221,3.105-5.874,6.953-9.967,8.997
  c-4.13,2.202-8.942,1.263-13.407,1.5c-11.2,0.288-41.555-0.245-49.401,0.146c-8.106,0.452-12.636-0.236-47.034,0.177
  c-5.361,0-13.531,8.898-14.633,13.358c-3.001,13.601-2.989,26.57-17.006,29.943c-3.166,0.75-6.6,1.44-9.723,0.195
  c-4.593-1.629-9.418-4.001-11.699-8.564c-4.03-6.581-3.403-17.564,7.442-23.776c5.909-3.309,20.265-3.631,25.502-6.99
  c12.539-10.521,8.398-11.8,24.447-11.736c21.348-0.136,64.326,0.237,75.598-0.58c29.636-0.867,21.313,2.498,31.517-6.771
  c3.337-3.77,7.679-6.52,10.711-10.565c2.293-3.013,5.526-5.093,8.076-7.875c0.001-0.001,40.898-40.172,40.898-40.172
  c0.834-0.808,21.123-20.958,21.123-20.958c1.163-1.055,15.546-15.586,16.371-16.542c9.324-7.479,14.029-14.82,18.47-16.481
  c5.073-1.978,29.46-0.308,71.249-1.177c4.502-0.489,24.818-0.39,27.363-0.152c9.032,0.689,7.531-0.222,27.924-20.287
  c22.808-21.936,11.559-10.386,33.548-32.273c4.759-4.091,14.772-15.589,19.33-18.659c4.848-3.24,7.29-12.908,16.835-12.565
  c13.848,0.101,68.925-0.439,68.925-0.439c7.889-0.183,49.358-0.126,50.657-0.091c23.718,0.103,62.24-0.864,77.44-0.256
  c5.484-0.256,10.973-0.159,16.469-0.39C2313.156,625.422,2321.902,625.825,2330.643,625.544 M1623.773,871.864
  c3.77,6.94,18.59,5.562,17.591-8.814c-0.933-3.843-4.142-7.015-7.942-8.033C1623.948,851.809,1616.698,864.158,1623.773,871.864z"></path><path d="M2402.002,643.282c7.344-0.287,14.694,0.238,22.044-0.091
  c3.605-0.104,7.222-1.013,10.839-0.281c3.416,0.683,6.948,0.012,10.382,0.573c4.745,1.464,8.094,5.374,12.132,8.052
  c3.697,2.397,5.905,6.362,9.29,9.131c3.776,3.196,8.021,6.679,9.131,11.766c0,0,2.568,64.966,2.568,64.967
  c0.006,2.928,0,5.935,1.037,8.722c1.318,3.434,4.862,5.837,8.552,5.825c82.843,0.591,51.211,0.738,72.024-11.949v11.644
  c-3.239,1.94-5.526,5.209-9.033,6.691c-3.384,1.189-0.944,1.273-66.041,1.074c-4.91-0.024-8.576-3.861-11.711-7.167
  c-5.859-6.189-3.168-68.275-6.795-79.234c-1.943-4.581-12.12-12.237-13.23-12.968c-7.616-5.084-8.34-8.928-12.047-9.101
  c0,0-64.161-0.043-64.162-0.043c-0.61-0.012-70.322,0.04-78.66,0.488c-2.83,0.11-47.178-1.389-47.516-1.433
  c-4.922-0.592-9.808,0.579-14.718,0.348c-5.667-0.134-11.388-0.287-16.945,0.964c-6.498,0.705-56.173,0.31-79.417,1.006
  c-8.735-0.354-17.475-0.073-26.204,0.055c-3.642-0.03-6.484,2.476-8.869,4.922c-13.446,13.514-71.623,70.668-72.841,71.731
  c-8.693,7.569-5.653,6.963-18.305,7.313c-12.284-0.072-100.538,0.392-105.023,0.61c-5.61,0.134-6.314,4.37-45.418,41.703
  c-21.481,21.588-69.071,67.431-81.161,79.801c-6.845,7.197-5.673,16.454-17.158,22.562c-12.847,6.564-27.595-4.045-27.332-16.054
  c-0.501-5.707,4.051-16.858,19.885-17.176c4.441,0.677,8.96,0.22,13.413,0.884c9.752,0.563,5.26,3.216,37.879-28.814
  c3.318-3.77,7.326-6.886,10.382-10.894c2.141-2.751,5.288-4.453,7.6-7.051c0,0,45.324-44.318,45.332-44.326
  c27.102-26.101,26.197-29.244,36.5-28.772c0.074,0.005,67.517-0.135,86.175-0.354c23.065,1.142,25.741-0.051,28.686-3.153
  c4.748-4.79,69.193-68.477,74.086-72.908c9.541-8.782,5.279-7.695,22.282-7.923c50.583,0.186,55.903-0.26,75.592-0.274
  c22.583,0.071,76.813,1.253,88.432-0.195c0,0,84.565-0.59,89.109-0.61C2382.508,642.995,2392.249,643.465,2402.002,643.282
   M1750.657,871.553c5.253,6.662,18.658,2.689,16.987-10.546c-1.226-2.769-3.245-5.087-5.764-6.74
  c-2.397-1.043-5.063-1.177-7.606-0.799C1747.903,855.318,1743.999,864.295,1750.657,871.553z"></path><path d="M168.959,653.718c4.409-0.12,45.012,0.003,45.125,0
  c18.902-0.047,165.625-0.069,172.612-0.006c45.984-0.204,199.2,0.012,250.687-0.122c1.609,0.088,48.154,0.457,66.492,0.329
  c6.935-0.439,8.353,3.547,23.081,17.055c6.708,5.94,4.416,5.623,22.27,0.787c12.18-3.767,22.124,2.323,25.435,11.419
  c4.559,13.017-10.7,26.963-25.935,20.507c-5.445-1.851-14.307-14.439-22.459-21.483c-4.733-4.666-9.833-8.936-14.444-13.724
  c-3.019-2.842-5.837-6.807-10.394-6.941c0,0-38.822-0.112-43.88-0.305c-7.84-0.03-319.685-0.038-332.422-0.037
  c-22.48-0.118-13.643,0.273-76.867-0.305c-23.602,0.452-18.995-0.115-44.527,0.091c-1.938-0.073-39.868-0.006-42.075-0.146
  c-25.725-1.197-21.087-0.175-27.57-0.329c-5.62-0.127-25.67-0.079-28.528-0.323c-0.616,0.027-37.366,0.618-42.118,0.421
  c-21.147-0.031-42.295-0.018-63.442-0.006v-6.722C9.647,653.797,168.347,653.715,168.959,653.718 M754.215,676.463
  c-3.086,1.464-6.356,4.19-5.953,7.96c1.043,2.69,1.354,5.532,1.214,8.405c1.189,1.08,2.342,2.202,3.422,3.404
  c14.555,5.815,20.417-13.739,9.503-18.689C759.93,676.042,756.96,676.402,754.215,676.463z"></path><path d="M853.358,661.294c11.477-9.476,1.439-6.556,37.811-7.1
  c3.641,0.091,7.448-0.427,10.943,0.915c3.324,1.141,5.465,4.215,8.704,5.532c13.157,5.026,29.326,1.82,33.066,20.226
  c1.616,16.709-22.014,25.317-32.962,12.4c-7.44-7.831-4.452-23.876-10.491-29.113c-2.621-2.997-4.033-2.442-31.895-2.3
  c-4.882-0.051-13.024,8.058-13.517,12.199c-0.142,1.336-0.18,28.538-0.195,29.193c-0.116,4.038-3.092,7.106-5.88,9.686
  c-13.413,12.343-3.14,6.545-56.641,8.18c0,0-85.973,0.079-85.974,0.079c-33.511-0.86-27.965-0.587-37.177,7.722
  c-10.93,9.358-7.6,10.203-22.611,10.363c-48.539-0.285-26.921,7.18-76.648-38.617c-7.941-7.724-28.2-0.676-207.587-3.745
  c-30.668,0.511-148.059,0.189-150.678,0.061c-10.016,0.538-87.529-0.61-89.06-0.756c0,0-119.593,0.37-122.565,0.372v-6.862
  c4.88,0,9.759,0.098,14.639,0.085c3.363-0.053,182.109-0.06,185.476-0.043c4.607-0.291,184.083-0.055,189.636-0.134
  c193.405-0.273,178.955-0.804,183.201,2.391c5.82,4.622,26.475,25.639,34.542,32.657c7.075,6.049,4.124,7.076,18.329,6.935
  c33.095-0.532,25.098,2.215,36.012-7.557c3.861-3.519,6.947-8.369,12.193-9.942c4.011-0.669,53.016-0.362,53.628-0.348
  c27.317-0.89,72.012,0.006,72.012,0.006c8.131,0.091,16.262-0.714,24.392-0.293c5.368,0.488,11.766,0.695,15.841-3.483
  c2.586-2.501,5.691-5.264,5.819-9.137c0.151-5.531-0.364-25.719,0.232-30.522C847.319,666.606,850.68,664.087,853.358,661.294
   M928.999,691.072c2.723-0.576,8.142-4.675,7.112-12.705c-0.653-3.336-3.544-5.544-6.203-7.32c-1.531-0.336-3.062-0.805-4.63-0.701
  C911.852,670.768,914.236,695.041,928.999,691.072z"></path><path d="M627.044,670.986c16.431-3.888,29.921,14.914,18.842,27.326
  c-11.23,13.496-33.696,4.883-33.121-10.296C612.405,679.727,619.322,672.785,627.044,670.986 M623.47,692.652
  c2.821,8.705,18.839,6.569,19.391-7.076c-0.189-3.831-3.099-6.752-6.295-8.484c-1.921-0.561-3.873-0.958-5.849-1.189
  C618.271,678.425,622.755,689.017,623.47,692.652z"></path><path d="M678.427,678.36c8.204-11.119,23.586-8.564,28.558-3.19
  c6.883,6.897,8.04,18.358-0.11,25.045c-7.584,6.325-15.115,5.883-31.078,3.257c-3.721-0.837-6.797,0.951-19.165,13.468
  c-6.247,6.299-10.392,3.361-28.363,4.276c-4.739-0.348-10.174,0.781-14.121-2.544c-8.32-6.899-15.42-15.127-23.569-22.215
  c-15.864-15.501-16.919-17.068-22.087-16.951c-0.001,0-76.269-0.091-76.269-0.091c-25.768-0.81-176.059,0.189-198.859-1.025
  c-4.5-0.081-73.092,0.483-78.648,0.543C212.722,679.102,4.293,678.626,0,678.806v-7.143c0,0,104.752-0.337,152.539,0.018
  c31.721-0.801,104.834,0.482,104.834,0.482c23.605,0.009,86.564-0.721,86.584-0.72c4.349,0.346,149.063,0.136,160.486,0.299
  c23.471-0.372,46.955,0.152,70.432,0.134c5.044,1.263,8.027,5.752,11.803,8.924c0.056,0.047,32.029,30.632,32.078,30.675
  c3.812,3.251,9.168,2.019,13.742,2.019c5.008-0.421,10.138,0.695,15.066-0.506c6.151-3.138,23.425-22.049,24.002-22.66
  C674.188,686.546,675.914,682.215,678.427,678.36 M696.013,697.641c8.53-1.424,14.188-14.797,2.123-20.482
  C679.236,672.856,681.393,699.198,696.013,697.641z"></path><path d="M868.759,675.231c6.189-5.052,12.905-6.569,22.751-2.049
  c7.885,5.793,9.551,9.383,8.466,18.433c-5.566,23.863-42.977,13.773-36.372-8.667C864.185,679.782,866.576,677.415,868.759,675.231
   M872.419,687.461c-0.578,6.571,6.369,14.474,15.597,8.613l-0.47-0.336c1.891-0.781,4.123-2.385,3.959-4.672l0.488,0.378
  c0.488-2.141,1.208-4.404,0.531-6.581c-1.299-5.05-6.649-8.552-11.809-7.807C875.682,677.299,871.504,682.471,872.419,687.461z"></path><path d="M2342.873,673.493c4.684-0.543,9.357,0.159,14.047,0.238
  c2.635,0.012,5.075,1.275,7.13,2.855c1.665,1.289,12.59,10.041,13.267,14.432c0.493,3.316,1.153,29.349,1.153,29.967
  c1.433,23.019-7.101,12.396,27.546,43.582c4.048,3.56,9.455,1.987,19.201,2.025c5.323,0.058,74.062-0.026,79.832-0.36
  c10.595,0.313,47.626-0.147,48.236-0.207c2.525-0.555,4.611-2.257,6.716-3.69v10.528c-3.001,0.769-6.105,0.805-9.162,0.683
  c-0.118-0.004-49.198,0.348-50.615,0.476c-106.424,0.192-93.458,2.405-103.943-7.698c-6.472-5.679-12.736-11.595-18.994-17.506
  c-2.592-2.409-5.807-4.709-6.533-8.399c-1.124-5.637-0.724-24.141-1.507-31.718c-1.793-17.796,2.307-13.7-8.259-24.124
  c-2.33-2.397-5.563-3.855-8.924-3.733c0,0-70.081,0.503-72.079,0.451c-1.944-0.089-114.801,0.275-115.88,0.238
  c-38.452,1.358-42.907-0.684-47.162,1.391c-5.715,2.992-34.992,32.871-37.604,35.548c-5.075,5.13-10.991,9.46-15.456,15.176
  c-2.342,3.099-5.063,5.88-8.003,8.405c-11.081,9.632-8.196,11.9-21.062,11.9c-0.027-0.001-38.38,0.382-40.873,0.275
  c0,0-71.364,0.342-71.365,0.342c-6.306-0.015-6.391,2.752-40.959,36.378c-0.415,0.477-45.308,44.4-45.314,44.405
  c-6.043,5.757-5.543,6.761-3.635,12.62c4.156,11.404,6.207,18.394,3.52,23.978c-13.463,26.732-53.126-1.537-29.059-20.763
  c5.728-4.464,66.104-64.302,66.717-64.912c20.523-20.361,35.379-35.345,39.05-37.781c3.586-2.373,8.07-1.592,12.138-1.751
  c3.818,0.165,7.606-0.823,11.437-0.384c1.655,0.189,48.212,0.049,50.157,0c0.354-0.016,40.539,0.001,40.892,0
  c4.422-0.012,9.491,1.275,13.297-1.726c6.301-5.197,11.199-11.967,17.915-16.707c2.963-2.047,11.633-12.68,17.854-17.646
  c8.24-8.222,16.585-16.347,24.898-24.496c3.343-3.562,5.984-7.99,10.412-10.357c3.135-1.555,6.746-1.141,10.144-1.202
  c9.143,0.195,18.287-0.055,27.436,0.153c38.227-1.058,152.22-0.257,172.661-0.799
  C2329.045,673.853,2335.956,673.444,2342.873,673.493 M1821.76,873.81c5.897-1.536,12.613-11.568,1.183-19.842
  c-2.482-0.756-5.136-0.97-7.667-0.457C1804.473,856.53,1807.578,875.845,1821.76,873.81z"></path><path d="M2156.201,698.086c108.785,2.175,133.84-3.534,144.975,1.415
  c26.648,25.106,17.557,15.155,38.94,21.592c6.533,2.037,12.461,7.07,13.968,13.968c2.293,9.863-8.222,19.94-18.012,17.378
  c-3.623-0.586-6.728-2.806-10.363-3.294c-3.635-1.153-6.496-4.02-7.704-7.618c-1.387-3.047-3.381-17.327-6.612-20.897
  c-2.095-2.397-13.65-13.525-15.877-14.59c-2.531-1.269-5.447-1.025-8.167-0.982c-6.911,0.238-13.822-0.189-20.72,0.037
  c-4.282,0.079-8.57-0.116-12.791-0.75c-4.867-0.714-9.765,0.067-14.639-0.213c-7.229-0.351-20.657,0.724-20.794,0.714
  c-16.259-0.991-34.762,0.413-35.378,0.396c-42.304,0.49-38.258-1.482-45.875,5.77c-6.164,6.169-27.223,26.491-47.784,47.412
  c-11.775,10.929-11.475,13.494-23.477,13.187c-0.004,0-78.624,0.372-78.624,0.372c-51.285,1.449-53.215-2.524-59.611,4.16
  c-21.405,21.168-24.575,24.093-24.575,24.093c-13.794,14.183-17.173,15.737-17.963,19.61c-0.238,4.453,0.037,8.918-0.018,13.376
  c-0.079,2.422,0.458,4.855,1.616,6.996c1.031,1.433,1.958,2.946,2.897,4.453c1.683,1.738,2.916,3.849,3.91,6.051
  c1.134,2.598,3.294,4.575,4.514,7.137c2.964,5.41,2.641,12.852-1.659,17.487c-8.069,9.157-19.182,8.809-26.259,2.977
  c-5.868-3.885-9.101-11.913-6.582-18.64c0.83-3.105,3.025-5.539,4.709-8.198c7.077-9.833,7.93-13.075,7.801-16.42
  c-0.446-15.511-1.281-18.921,2.629-22.599c0,0,10.177-10.423,22.093-21.928c1.656-1.793,22.047-22.154,26.466-25.283
  c4.062-1.116,8.302-0.464,12.468-0.616c4.17,0.009,67.802-0.062,71.945-0.25c13.509-0.193,37.894-0.479,51.371-0.268
  c8.818-1.205,4.339,3.934,19.976-11.437c0.375-0.373,43.313-43.132,43.728-43.46c4.288-3.245,7.368-7.972,12.254-10.461
  C2144.648,697.653,2150.455,698.276,2156.201,698.086 M1872.996,868.192c0.827,1.292,4.436,9.272,12.37,6.441
  c2.531-0.525,4.123-2.678,5.85-4.416C1901.196,852.131,1865.845,845.281,1872.996,868.192z"></path><path d="M1537.043,699.386c14.981-2.326,23.328,8.564,23.081,17.323
  c0.563,10.333-10.198,18.058-20.104,16.878c-16.813-1.884-23.021-20.755-10.357-30.394
  C1531.828,701.417,1534.463,700.404,1537.043,699.386 M1531.48,717.514c0.445,3.154,3.007,5.362,5.337,7.265
  c6.714,2.937,12.329-0.85,13.608-6.569c0.104-0.024,0.311-0.079,0.415-0.104c2.324-8.021-3.797-13.173-10.064-13.584
  C1535.047,704.73,1530.129,708.716,1531.48,717.514z"></path><path d="M895.457,709.383c8.821-5.639,23.8-3.493,28.272,8.204
  c4.908,12.615-5.057,22.123-15.036,23.355c-5.447,0.311-10.863-0.75-16.298-1.067c-14.371-1.751-28.863-0.598-43.289-0.61
  c-4.093-0.14-8.18-0.726-12.266-0.262c-7.899,0.762-15.816-0.439-23.715,0.177c0,0-116.099,0.079-126.335,0.116
  c-8.532,0.177-16.714,17.101-26.155,17.591c-58.258,0.792-56.182,0.29-59.014-1.915c-3.801-2.961-30.976-29.43-33.102-31.553
  c-8.312-7.854-7.189-8.391-17.732-8.503c-2.387,0.034-240.171,0.003-243.258-0.171c-7.394-1.134-56.573-0.055-109.903,0.128
  c-31.747-0.123-133.104-0.003-148.177-0.579C32.968,714.202,16.481,714.33,0,714.263v-6.52
  c4.557-0.232,121.044-0.109,121.425-0.073c5.804,0.519,70.877-0.29,75.019,0.006c9.433-0.41,42.055,0.488,93.873,0.488
  c14.853,0.165,29.681-1.019,44.533-0.695c7.326-0.421,14.627,0.854,21.946,0.305c3.712-0.385,71.55-0.352,75.056-0.396
  c0.61-0.015,57.748-0.082,59.794,0.177c1.88,0.164,51.819-0.158,52.438-0.153c6.203-0.152,12.394,0.543,18.604,0.457
  c2.245,1.098,4.428,2.379,6.197,4.178c0.1,0.1,17.942,16.984,26.972,26.015c2.727,2.8,5.849,5.172,8.564,7.99
  c1.757,1.848,4.081,3.434,6.74,3.349c0.616,0.012,42.646,0.25,47.827-0.183c3.43-0.956,14.183-12.815,19.616-16.896
  c2.702-0.549,5.447-0.921,8.21-0.83c4.289,0.058,113.086,0.13,116.502,0.214c6.352-0.229,46.991,0.024,47.601,0.024
  c18.51-0.848,25.828,1.735,29.626-1.848c2.97-2.696,4.184-6.679,6.411-9.918C889.48,716.221,891.572,711.908,895.457,709.383
   M897.683,725.937c2.068,5.111,8.393,7.838,13.517,5.764c6.283-2.312,9.156-10.43,6.209-16.316
  C910.723,702.592,892.265,713.207,897.683,725.937z"></path><path d="M2272.886,724.705c11.225-8.76,23.812-2.566,28.9,5.227
  c1.244,1.854,1.604,4.105,2.245,6.216c-0.043,1.257-0.031,2.519,0.043,3.788c-3.98,19.326-30.289,18.607-36.183,2.232
  C2265.585,736.014,2267.866,728.798,2272.886,724.705 M2276.729,733.867c-0.214,2.574,0.988,4.965,2.019,7.252
  c0.208,0.201,0.616,0.616,0.823,0.817c1.836,3.666,6.441,5.624,10.345,4.203c6.893-1.964,9.918-11.736,5.246-17.183
  C2289.432,721.504,2276.881,725.486,2276.729,733.867z"></path><path d="M1124.094,731.189c9.899-3.33,19.398,0.51,24.655,11.608
  c0.738,3.452,1.165,7.185-0.579,10.43c-2.324,4.282-5.685,8.497-10.534,9.973c-8.135,3.139-20.968-0.017-24.795-12.376
  c-1.165-3.532-0.024-7.21,0.665-10.705C1116.528,735.513,1121.123,732.355,1124.094,731.189 M1126.229,737.02
  c-5.166,3.58-5.551,11.693-1.488,16.261c2.013,2.324,5.075,2.964,7.96,3.513c8.948-2,10.326-8.629,9.198-13.26
  C1140.563,736.916,1131.835,733.299,1126.229,737.02z"></path><path d="M1177.301,738.691c7.437-12.076,27.67-11.6,33.597,3.068
  c2.066,8.237-0.03,14.641-7.679,19.83c-11.705,7.164-26.756-0.838-28.186-12.028
  C1174.794,745.834,1175.172,741.869,1177.301,738.691 M1190.616,736.05c-3.318,0.708-5.953,3.617-6.423,6.96
  c-0.092,2.971-0.092,6.094,1.439,8.759c1.263,1.647,2.415,3.684,4.556,4.294c14.141,3.747,19.4-14.648,6.886-19.763
  C1194.953,735.867,1192.721,735.239,1190.616,736.05z"></path><path d="M1252.887,730.207c9.978-1.838,21.333,6.624,21.025,16.383
  c1.041,15.842-21.069,23.664-31.736,11.913c-4.87-4.593-7.998-13.761-0.543-22.526
  C1244.464,732.677,1248.636,730.811,1252.887,730.207 M1247.965,751.873c4.839,8.317,18.701,4.512,18.317-6.484
  c0.091-5.758-5.465-10.516-11.046-10.351C1250.877,735.4,1242.562,739.22,1247.965,751.873z"></path><path d="M1314.542,730.195c9.828-1.331,19.601,3.92,21.446,15.127
  c1.203,9.828-8.422,22.187-24.38,17.53c-13.074-3.93-16.416-20.697-5.959-28.747
  C1308.198,732.061,1311.34,730.811,1314.542,730.195 M1309.711,740.601c-1.861,5.926,1.066,14.774,7.094,15.597
  c5.715,1.305,11.443-3.294,12.126-8.954C1331.066,736.912,1315.262,729.825,1309.711,740.601z"></path><path d="M1367.541,734.367c10.891-11.587,34.755,0.189,30.315,16.207
  c-5.359,18.513-30.972,16.32-35.427,0.982c-0.927-2.836-0.817-5.849-0.622-8.777
  C1363.168,739.637,1364.815,736.544,1367.541,734.367 M1371.915,739.326c-1.318,3.336,0.915,6.521,1.128,9.833
  c3.919,11.983,20.79,4.178,17.805-7.008c-0.537-3.544-3.251-6.374-6.496-7.673C1379.771,732.769,1373.818,734.599,1371.915,739.326
  z"></path><path d="M2304.866,763.413c8.761-3.619,17.154,0.769,32.2,10.192
  c5.465,3.117,11.919,1.098,17.811,2.19c4.355,0.805,7.161,5.288,11.742,5.38c11.539,0.214,67.087-0.086,70.139-0.067
  c9.682-0.315,75.637-0.429,76.27-0.439c15.658,0.037,31.315-0.134,46.973-0.012v7.411c-134.75,0.069-4.847,0.506-179.334,0.61
  c-20.849-0.223-17.164,1.494-26.002-4.471c-3.242-2.281-12.829-2.763-17.89,0.817c-12.715,8.824-17.854,11.315-23.77,11.571
  c-12.53-0.262-23.076-11.907-18.317-23.666C2296.607,768.543,2300.371,765.06,2304.866,763.413 M2309.514,767.579
  c-4.965,1.549-7.747,7.374-6.094,12.248c0.86,2.263,1.372,4.898,3.373,6.496c6.102,5.853,18.591,0.84,16.298-11.479
  C2321.506,769.226,2315.04,765.926,2309.514,767.579z"></path><path d="M2094.363,771.495c8.393-5.02,19.97-2.422,25.954,5.166
  c0.586,1.147,1.22,2.293,1.903,3.422c4.958,11.362-4.212,23.461-16.634,23.325c-12.449,0.373-24.611-13.379-16.554-26.375
  C2090.496,774.923,2092.307,773.038,2094.363,771.495 M2101.603,774.045c-4.02,1.555-6.783,5.459-6.722,9.802
  c1.434,2.336,1.751,5.105,2.574,7.692c12.593,14.371,27.492-10.844,10.693-16.987
  C2106.062,773.715,2103.769,774.124,2101.603,774.045z"></path><path d="M1947.515,788.495c3.345-0.701,12.049-4.226,22.044,5.66
  c5.038,5.557,5.85,15.048,0.708,20.794c-0.537,0.628-1.049,1.263-1.537,1.915C1944.516,833.764,1922.172,801.553,1947.515,788.495
   M1950.888,793.582c-2.367,1.513-4.751,3.678-4.904,6.679c-0.037,2.8-0.512,5.947,1.262,8.369c1.683,2.324,3.733,4.8,6.71,5.416
  c10.037,1.643,14.137-9.588,11.449-14.987c-1.372-2.989-4.209-4.874-7.155-6.075
  C1955.774,792.899,1953.255,792.764,1950.888,793.582z"></path><path d="M1124.033,790.947c3.044-0.647,6.154-1.598,9.302-0.994
  c6.179,0.817,11.979,4.715,14.694,10.382c6.531,11.187-5.876,26.635-20.153,23.416c-9.629-1.694-17.185-10.329-14.615-20.336
  C1114.445,797.736,1119.154,793.618,1124.033,790.947 M1122.691,801.651c-0.775,3.934-0.104,8.241,2.318,11.516
  c4.996,8.57,22.1,1.115,16.713-11.522c-1.342-2.525-3.69-4.41-6.289-5.52C1130.658,794.301,1124.192,796.455,1122.691,801.651z"></path><path d="M1180.723,793.96c9.442-7.088,23.854-5.172,29.168,5.404
  c7.625,13.44-6.649,28.257-21.074,24.039c-7.005-1.705-15.586-9.012-13.389-20.019
  C1176.508,799.925,1178.308,796.668,1180.723,793.96 M1191.501,796.65c-11.705,7.25-4.566,20.528,2.257,20.848
  c10.681,1.728,18.174-14.992,4.538-20.806C1196.051,796.107,1193.74,796.034,1191.501,796.65z"></path><path d="M1247.983,790.989c9.99-2.668,17.744-1.095,23.837,7.246
  c8.73,14.073-5.603,28.223-18.878,25.521c-6.758-0.83-12.602-5.856-15.145-12.059
  C1235.333,803.561,1240.389,794.369,1247.983,790.989 M1249.081,810.539c0.189,0.213,0.573,0.634,0.762,0.848
  c3.643,6.677,11.074,6.227,16.158,0.915c1.69-3.324,3.019-7.57,1.116-11.077c-1.763-3.751-5.904-6.24-10.052-5.904
  C1251.539,794.64,1244.884,801.329,1249.081,810.539z"></path><path d="M1315.628,789.8c17.789-2.412,27.638,17.801,16.262,28.381
  c-12.344,13.181-34.799,1.194-31.895-13.95C1301.257,796.632,1308.131,790.788,1315.628,789.8 M1314.097,795.052
  c-2.897,1.122-5.404,3.635-6.02,6.74c-1.626,13.965,11.574,16.855,16.249,11.339c7.465-6.534,3.494-16.143-3.757-18.238
  C1318.415,794.722,1316.189,794.539,1314.097,795.052z"></path><path d="M1374.629,790.349c12.04-3.749,24.868,6.447,24.301,16.634
  c0.255,14.317-19.845,22.668-31.212,11.4c-4.05-3.727-6.868-9.54-5.307-15.078C1363.717,797.144,1368.932,792.533,1374.629,790.349
   M1372.256,807.098c1.122,2.379,1.964,5.233,4.581,6.417c4.91,2.922,11.547,0.384,13.938-4.636c0.098-0.891,0.451-1.702,0.939-2.44
  c0.183-2.226,0.714-4.654-0.335-6.746C1387.429,790.782,1369.844,789.669,1372.256,807.098z"></path><path d="M2372.761,795.662c0.001,0,187.239-0.579,187.239-0.579v7.637
  c-3.053-0.482-31.126-0.044-31.736-0.018c-95.015,0.086-93.257,0.226-93.257,0.226c-1.186-0.082-62.358,0.376-62.966,0.433
  c-5.914,0.385-9.556,8.131-17,13.395c-3.745,2.678-8.546,1.61-12.822,1.818c-6.094,0.244-12.181,0.22-18.268,0
  c0,0-51.175,0.335-51.176,0.335c-4.015,0.238-22.241-1.956-31.767-1.214c-9.188,0.575-32.729-0.453-39.117,1.019
  c-3.822,0.833,0.887,0.215-81.1,0.677c-12.754,0.784-71.56,0.042-98.155,0.628c-29.198-0.758-33.004-0.484-36.396,3.099
  c-0.151,0.151-29.044,28.457-29.516,28.955c0,0-7.786,7.827-37.756,37.323c-11.213,10.751-9.091,8.722-22.63,9.064
  c-0.013,0-62.21,0.378-62.21,0.378c-1.077,0.008-44.507,0.231-46.979,0.134c-0.614,0.009-59.396,0.96-63.881-1.202
  c-4.684-2.22-7.46-6.911-11.772-9.65c-3.953-2.788-8.936-2.928-13.505-3.861c-5.831-1.043-12.242-1.818-16.731-6.087
  c-4.227-3.434-7.301-8.826-6.35-14.407c1.14-12.488,14.52-17.793,23.264-14.913c15.935,4.482,15.031,22.548,18.494,31.193
  c1.116,2.434,8.357,11.495,15.584,11.443c0.002,0,89.701-0.336,89.701-0.336c4.998-0.42,63.851,0.021,81.033-0.348
  c2.727-0.262,4.758-2.342,6.569-4.209c4.965-5.374,10.461-10.217,15.469-15.554c1.958-1.698,23.008-22.399,23.197-22.581
  c9.441-9.203,23.926-24.071,25.728-25.466c2.723-2.2,8.09-9.956,13.864-10.272c5.462-0.485,36.122-0.049,40.27-0.177
  c0,0,66.365-0.492,68.962-0.579c0.001,0,65.321,0.097,65.321,0.098c0,0,24.453-0.264,49.919,0.403
  c55.787-0.087,56.793-0.769,56.793-0.769c18.818,0.032,75.18-0.133,76.202-0.146c7.473-0.117,10.621-9.145,19.299-14.578
  C2367.045,795.54,2369.998,795.729,2372.761,795.662 M1685.056,863.068c0.062,5.985,4.596,10.528,6.947,11.016
  c4.77,1.763,10.51-1.055,12.199-5.795l0.317-0.006c0.409-1.738,0.884-3.489,0.842-5.282c-0.5-4.91-4.733-9.265-9.668-9.68
  C1690.307,852.608,1684.36,857.414,1685.056,863.068z"></path><path d="M2385.814,812.606c2.574-2.409,6.21-2.574,9.497-3.269
  c3.056-0.787,6.044,0.744,9.131,0.586c0.131,0,133.594-0.457,133.594-0.457c7.313,0.25,14.639-0.366,21.965,0.116v7.625
  c-15.725-1.039-56.26,0.286-67.699,0.122c-105.28,0.142-98.028-1.562-104.022,4.556c-23.716,23.609-25.187,26.13-30.608,26.759
  c-5.536,0.553-115.648,0.403-123.999,0.433c-0.61,0.016-135.805,1.27-145.183,0.171c-0.431-0.006-60.958,0.269-61.551,0.384
  c-3.038,0.549-6.124,0.836-9.192,0.5c-5.087-0.567-10.18,0.214-15.267,0.159c-20.554,0.362,1.128-10.666-101.784,87.907
  c-3.849,4.471-8.454,8.155-12.583,12.333c-2.958,2.812-5.502,6.417-9.515,7.789c-3.016,0.949-59.099,0.573-59.709,0.567
  c-4.471-0.134-9.375,1.104-13.443-1.305c-4.013-2.312-6.795-6.136-10.351-9.015c-8.106-6.646-10.647-12.755-17.073-10.577
  c-13.315,4.077-20.808,7.907-29.022,3.001c-11.689-5.831-12.926-19.773-6.063-26.954c4.831-5.49,13.169-7.624,20.013-4.959
  c4.416,1.214,7.801,4.422,11.113,7.417c0,0,29.35,28.615,29.656,28.9c8.178,7.243,1.206,6.127,60.319,5.868
  c15.025-0.146,9.517,0.211,17.866-6.356c0.37-0.294,24.014-23.668,25.612-25.508c0,0,64.474-63.4,69.413-68.456
  c3.526-3.379,6.874-7.997,12.205-8.271c27.997-0.347,45.71,0.293,45.71,0.293c33.859-0.038,127.232-1.416,151.203-0.848
  c0.001,0,166.629-0.561,166.629-0.561c6.82-0.16,8.946-5.667,22.026-18.03C2378.476,819.962,2381.928,816.065,2385.814,812.606
   M1757.672,914.402c-11.799,2.922-8.867,15.815-2.184,20.604c8.175,4.993,16.457-6.136,14.047-12.773
  c-0.659-2.891-2.946-4.91-5.221-6.575C1762.149,914.958,1759.928,914.445,1757.672,914.402z"></path><path d="M2425.98,824.226c2.656-0.155,133.408-0.274,134.02-0.275v7.002
  c-8.656-0.412-37.56,0.753-50.681,0.335c-28.694,0.482-32.709-0.243-74.385,0.268c-5.368-0.287-10.723,0.11-16.078,0.323
  c-2.373,0.067-4.392,1.476-6.069,3.007c-2.789,2.525-25.247,25.149-25.606,25.57c-6.562,7.579-10.722,6.171-16.243,6.307
  c-66.887,0.072-68.352,0.421-68.352,0.421c-3.732-0.058-30.857,0.696-37.305-1.153c-2.776-0.327-29.577-0.85-29.772-0.842
  c-9.344,0.805-18.738,0.134-28.095,0.457c-3.318,0.159-6.386,1.769-9.717,1.726c-0.613,0.005-37.38,0.157-39.019,0.085
  c-1.406,0.043-48.735,0.935-61.655,0.189c0,0-6.052,0.485-84.15,0.384c-10.501,0.557-8.73-0.599-17.671,7.911
  c-1.792,1.732-34.524,34.259-38.031,37.659c-8.929,8.499-29.168,28.717-33.761,33.267c-8.253,8.43-17.012,16.341-25.21,24.825
  c-2.788,3.147-6.63,5.685-10.985,5.484c-23.315-0.099-81.874,0.137-83.65-0.043c-6.469-0.607-13.186-10.934-22.154-16.664
  c-3.679-2.206-20.105-1.125-22.916-1.019c-28.459,0.163-31.742,0.578-35.939-2.476c-4.355-3.105-7.49-7.838-12.431-10.107
  c-8.338-2.903-17.854-2.001-25.539-6.789c-9.663-5.646-11.783-19.357-2.47-27.216c8.547-7.398,22.432-5.392,29.4,5.807
  c2.75,5.554,4.48,17.983,7.24,22.806c1.831,3.386,9.212,10.225,14.114,10.308c0.611-0.005,46.838-0.28,47.644-0.177
  c2.489,0.268,5.239,0.537,7.161,2.367c3.33,3.013,6.85,5.837,9.936,9.131c10.181,9.805,6.366,5.329,39.623,6.545
  c50.115-0.14,50.281,0.949,54.292-3.41c11.508-11.822,42.941-42.465,42.941-42.465c0.612-0.639,20.319-20.358,23.77-23.209
  c4.723-4.856,16.058-16.442,33.621-33.468c8.058-8.024,7.725-6.541,27.064-6.624c0.001,0,91.536-0.159,91.537-0.159
  c0,0,52.456-0.482,52.456-0.482c0.458,0.038,34.327-0.001,34.786,0c0.728-0.014,16.568,1.56,24.392,0.421
  c3.002-0.375,19.855-0.27,22.855-0.061c4.898-0.075,5.995-0.345,9.436,0.116c0.354-0.043,17.837-0.889,18.317-0.86
  c1.321,0.084,29.83-0.05,33.566-0.226c2.474,0.061,66.664,0.757,69.651-0.354c3.294-1.542,29.209-28.104,29.796-28.717
  c2.269-2.251,4.611-4.831,7.911-5.477C2417.697,823.976,2421.856,824.488,2425.98,824.226 M1686.727,922.942
  c0.329,2.885,1.641,5.526,2.318,8.338c0.927,1.433,1.769,3.135,3.452,3.831c10.557,5.27,21.859-12.122,7.801-20.116
  C1691.067,912.186,1686.007,918.679,1686.727,922.942z"></path><path d="M1493.187,829.557c5.921-4.824,5.503-5.126,16.414-4.416
  c9.189,1.712,12.069,8.045,13.102,9.576c4.471,10.811-0.253,18.874-8.417,22.605c-11.47,5.72-27.282-2.729-26.893-14.981
  C1487.356,837.499,1489.417,832.65,1493.187,829.557 M1503.837,830.911c-4.239,0.61-8.253,4.453-7.765,8.948
  c0.695,2.903,0.22,6.331,2.568,8.582c1.775,2.611,4.837,4.148,7.997,4.056c7.48-1.375,9.802-6.192,9.576-12.583
  C1515.408,834.199,1509.381,830.234,1503.837,830.911z"></path><path d="M450.528,834.297c3.404-1.013,6.935-2.08,10.534-1.562
  c5.624,0.586,10.717,3.965,13.864,8.6c9.281,14.152-8.051,30.805-22.886,24.783c-8.625-2.873-14.584-13.505-10.699-22.117
  C443.007,839.731,446.435,836.291,450.528,834.297 M452.004,854.376c1.314,1.703,4.206,6.897,11.974,4.813
  c2.769-0.787,4.52-3.275,6.264-5.386c3.484-7.994,0.358-13.311-6.35-15.591C454.49,835.039,447.83,844.115,452.004,854.376z"></path><path d="M334.892,833.217c12.066-1.798,20.694,5.602,22.105,14.639
  c1.354,10.327-8.344,19.775-18.463,19.543c-8.924,0.287-17.969-6.752-18.518-15.932
  C319.369,842.744,326.566,834.864,334.892,833.217 M336.972,838.7c-3.3,1.549-6.856,4.459-6.484,8.509
  c0.335,2.684,0.342,5.477,1.342,8.033c1.769,4.251,7.185,6.1,11.382,4.605c8.468-3.11,12.086-16.435,0.518-20.861
  C341.498,838.572,339.223,838.682,336.972,838.7z"></path><path d="M1251.472,850.235c11.888-2.17,20.07,4.029,22.886,12.638
  c3.454,14.747-11.949,24.598-24.295,20.141c-6.935-2.006-15.763-11.862-11.144-22.276
  C1241.414,855.749,1245.873,851.4,1251.472,850.235 M1247.093,861.501c-2.153,8.076,4.158,18.123,13.486,14.169
  c5.032-2.11,7.588-8.326,5.88-13.425C1262.607,852.717,1249.637,853.323,1247.093,861.501z"></path><path d="M1316.933,849.704c9.149-1.244,18.39,5.569,20.049,14.621
  c1.5,8.344-4.678,16.871-12.797,18.775c-14.143,4.158-28.15-9.224-22.874-21.898
  C1303.782,854.809,1310.126,850.265,1316.933,849.704 M1309.979,861.617c-1.508,9.312,5.077,15.2,12.742,13.352
  c4.892-1.214,8.143-6.27,7.82-11.199C1329.987,852.428,1311.878,849.813,1309.979,861.617z"></path><path d="M1372.092,851.296c12.865-6.329,31.357,3.124,26.119,22.367
  C1380.411,899.259,1345.89,869.622,1372.092,851.296 M1375.867,872.358c3.093,5.667,12.913,5.496,15.426-0.622l0.708,0.342
  c-0.183-0.39-0.537-1.159-0.714-1.549l1.195,0.329c-0.061-0.244-0.171-0.732-0.232-0.976c3.311-6.799-1.234-13.665-7.673-14.834
  C1379.667,853.607,1368.562,857.513,1375.867,872.358z"></path><path d="M749.659,851.455c8.049-2.532,15.898-0.36,22.129,8.265
  c7.781,16.005-9.111,28.356-21.544,24.703c-7.094-1.854-13.328-8.265-13.474-15.822
  C736.471,860.799,742.266,853.553,749.659,851.455 M744.687,867.936c0.366,3.129,1.202,7.082,4.447,8.411
  c2.385,0.055,4.764-0.323,7.161-0.335l-0.329,0.927c2.037-0.159,4.459,0.146,6.02-1.482c6.055-4.988,5.049-15.958-4.752-19.348
  C750.561,854.035,742.418,860.897,744.687,867.936z"></path><path d="M1115.927,857.945c7.018-10.765,25.498-11.706,32.791,3.129
  c2.136,7.798,1.2,14.681-5.923,19.476c-8.488,6.608-23.401,4.274-28.717-7.387C1111.981,868.216,1112.67,862.233,1115.927,857.945
   M1122.447,863.093c-1.365,4.98,1.813,11.713,4.868,13.267c10.802,6.378,21.914-9.071,11.98-17.402
  C1134.253,854.414,1124.552,855.685,1122.447,863.093z"></path><path d="M1187.524,850.741c17.534-4.956,29.427,11.441,23.05,23.794
  c-8.179,14.865-31.581,11.855-35.085-4.813c-0.646-2.928,0.201-5.868,0.921-8.692
  C1180.577,854.165,1180.885,853.901,1187.524,850.741 M1188.652,858.048c-4.38,3.678-4.074,10.851-0.641,15.072
  c2.694,4.448,10.849,6.476,16.085-0.409c2.196-3.77,2.861-9.125-0.061-12.687C1200.675,855.285,1193.02,854.047,1188.652,858.048z"></path><path d="M2419.026,855.084c5.251-3.572,6.935-0.928,140.974-1.94v6.905
  c-0.617,0.007-21.153,0.38-51.841,0.604c-86.844,0.06-81.813-1.121-86.285,2.836c-13.741,12.036-18.156,21.313-26.552,21.336
  c-21.003,0.305-108.915,0.276-109.189,0.256c-9.791-0.031-37.725,0.818-44.527,0.464c-0.301-0.017-20.746-0.132-28.668,0.043
  c-126.208,0.192-115.871,0.321-120.79-0.518c-2.675-0.54-15.864,0.864-20.269,0.415c-3.611-0.341-7.222-0.085-10.814,0.159
  c-3.879,0.25-7.722-0.665-11.583-0.299c-1.688,0.147-35.719,0.933-36.036,0.927c-5.289-0.418-8.954,5.917-16.133,12.413
  c-0.611,0.565-34.864,34.132-41.819,41.221c-0.647,0.625-44.011,43.432-47.028,46.32c-12.75,12.048-2.284,8.423-57.867,9.229
  c-59.999,0.064-54.05,1.747-62.679-6.209c-10.655-11.142-13.278-11.862-15.932-11.87c-0.092-0.003-26.094,0.518-42.136,0.104
  c-14.23,0.494-28.473,0.189-42.703,0.305c-3.611,0.128-7.136-1.299-9.741-3.763c-10.505-9.457-24.927-24.004-29.748-28.144
  c-0.611-0.591-33.789-32.443-37.781-34.701c-8.492-3.577-24.646-1.174-31.864-12.833c-4.323-6.543-4.574-18.429,9.399-25.228
  c2.94-0.329,5.904-0.805,8.887-0.567c6.752,0.697,13.307,6.499,15.365,12.242c2.263,6.173,3.245,12.724,5.093,19.019
  c1.793,5.087,6.838,7.692,10.345,11.437c2.05,2.122,23.87,22.463,24.88,23.276c0.611,0.555,20.852,20.194,24.691,23.483
  c13.173,11.456,4.299,7.158,33.054,8.119c11.69,0.279,41.037-0.808,48.748-0.293c5.077,0.303,16.371-1.327,21.885,1.446
  c1.953,0.904,11.643,10.167,12.242,10.778c5.715,5.518,5.988,5.823,14.121,5.862c0.787,0.004,25.849-0.302,27.411-0.226
  c0,0,37.193-0.061,37.195-0.061c4.691,0.214,9.381-0.512,14.078-0.152c2.751,0.116,5.563,0.281,8.302-0.275
  c4.097-1.111,5.414-4.277,23.532-21.556c14.543-14.931,46.294-45.595,63.656-63.088c7.562-6.756,6.679-6.717,21.952-21.44
  c4.537-4.55,11.664-1.923,38.659-2.165c0.617,0.014,50.803-0.013,56.177-0.775c3.317-0.064,71.409-0.121,72.536-0.055
  c8.099-0.373,38.588,0.15,69.548-0.232c7.252-0.389,93.389-0.23,99.985-0.207c57.304,0.141,54.942,0.646,58.428-2.598
  c3.837-3.471,7.136-7.503,11.114-10.833C2412.695,861.367,2415.409,857.719,2419.026,855.084 M1585.486,885.631
  c0.012,3.111-0.171,6.49,1.494,9.271c1.165,2.11,2.574,4.514,5.111,5.136c2.843,0.336,6.179,0.531,8.466-1.555
  c1.379-1.36,3.227-2.635,3.501-4.703c0.091-0.012,0.268-0.031,0.36-0.037c0.659-2.562,1.183-5.355,0.134-7.881
  C1601.422,876.676,1587.66,877.025,1585.486,885.631z"></path><path d="M2438.521,868.088c7.325-0.979,113.975-0.718,121.479-0.628v7.222
  c-5.949,0-64.076,0.055-64.076,0.055c-54.235-0.372-53.292,0.056-55.811,2.013c-5.321,4.159-15.586,16.116-23.435,22.91
  c-6.806,6.01-12.131,1.444-76.849,3.507c-1.113-0.034-67.602,0.231-67.718,0.232c-4.142,0.073-8.052-1.793-12.211-1.446
  c-15.651-0.342-31.309-0.201-46.961-0.238c-4.386-0.11-8.466,1.903-12.834,1.873c-3.678,0.024-7.356-0.354-11.016,0.067
  c-0.092,0.009-24.761-0.312-31.638,0.262c-0.003,0-100.662,0.256-100.662,0.256c-22.225,0.4-28.912-1.047-33.645,1.031
  c-3.589,1.557-31.444,30.07-32.035,30.681c-13.622,12.982-61.358,60.26-68.255,67.12c-9.561,9.152-8.505,10.648-19.793,10.388
  c-5.909-0.268-40.165,0.497-50.005,0.201c-0.832,0.014-59.337,0.702-62.856-0.415c-2.033-0.539-4.212-1.257-16.932-14.188
  c-4.34-4.416-3.09-3.679-50.742-3.434c-9.282,0.254-37.571-0.295-41.91,0.762c-5.642,2.068-8.32,8.241-13.773,10.638
  c-3.989,1.787-8.442,1.025-12.651,0.909c-0.611,0-69.946,0.44-71.396,0.482c-7.424,0.255-17.089,13.243-29.217,14.163
  c-13.189,0.593-23.149-12.029-19.415-22.001c2.811-10.285,15.221-16.841,27.485-10.266c16.285,8.661,15.041,8.621,18.567,9.796
  c3.404,1.21,6.919,0.391,34.938,0.689c14.645-0.36,29.309,0.268,43.954-0.25c8.588-0.134,10.894-11.754,19.415-12.028
  c1.331-0.027,37.214-0.431,38.556-0.287c0,0,50.589-0.281,50.59-0.281c8.884-0.229,9.821,4.847,23.551,16.286
  c3.997,3.424,8.997,1.433,35.628,1.799c24.757,0.301,4.406-0.333,48.778-0.085c16.526-0.534,23.68-0.29,25.008-0.201
  c8.855,0.061,6.727,0.369,15.017-7.417c1.821-1.753,22.306-22.233,22.306-22.233c11.365-10.546,13.257-13.125,47.882-47.247
  c4.795-4.281,26.037-25.571,26.759-26.271c2.092-2.037,4.117-4.453,7.039-5.294c8.454-1.488,17.042-0.189,25.557-0.671
  c0,0,75.578-0.006,104.273-0.366c7.42,0.236,31.138-0.146,31.138-0.146c3.157,0.289,17.099-0.627,23.313,0.171
  c5.924,0.733,37.713,0.381,38.324,0.366c6.899-0.171,13.815,0.287,20.714-0.146c5.636-1.196,11.388-0.445,17.103-0.61
  c0,0,16.878,0.165,67.077-0.183c6.474,0.454,41.415-0.371,45.747-0.238c14.083-0.518,13.936,2.756,21.788-5.014
  c4.813-4.953,9.747-9.778,14.639-14.651C2432.226,873.065,2434.604,869.357,2438.521,868.088 M1545.162,1009.196
  c1.323,1.726,2.598,3.733,4.77,4.495c9.58,3.543,14.283-6.95,13.193-12.748c-0.927-4.245-4.703-7.777-9.076-8.088
  C1545.139,991.4,1540.098,1001.7,1545.162,1009.196z"></path><path d="M825.361,881.3c22.907-6.363,34.333,27.229,8.783,33.481
  c-10.851,1.946-15.737-4.586-27.65-11.492c-3.448-2.036-6.73-3.02-25.173-2.306c-16.565,0.124-62.58,0.233-70.694,0.372
  c0,0-55.175,0.03-55.464,0.049c-7.81,0.258-127.304-0.07-170.221,0.281c-17.852-0.328-53.419,0.17-126.865,0.415
  c-7.385-0.005-156.198-0.165-156.198-0.165c-25.301-0.722-56.726,0.124-76.221,0.104c0,0-115.997,0.119-125.658,0.116v-6.886
  c0,0,90.87-0.116,90.872-0.116c7.742-0.116,76.288-0.187,81.747-0.268c0,0,214.084-0.464,214.09-0.464
  c0.001,0,78.075-0.22,78.075-0.22c17.807,0.396,129.589-0.401,179.322-0.171c178.964,0.379,156.715,1.186,167.227-5.355
  C816.028,886.259,820.17,882.654,825.361,881.3 M822.701,891.059c-1.958,2.684-0.445,6.106-0.409,9.119
  c0.189,0.232,0.567,0.701,0.762,0.939c0.616,1.988,2.172,3.44,3.526,4.959c0.238-0.024,0.701-0.079,0.933-0.11l-0.189,0.708
  c2.751,0.775,6.264,1.58,8.564-0.646c1.409-1.354,3.215-2.495,3.916-4.404l0.323,0.39c4.855-8.757-2.185-16.292-9.375-15.761
  C827.453,886.253,824.44,888.345,822.701,891.059z"></path><path d="M2560,882.001v7.32c-1.12-0.056-51.802-0.118-59.825,0.024
  c-4.937-0.06-3.944-0.11-52.834,48.968c-13.893,13.963-11.532,12.406-21.52,12.718c-89.464,1.981-90.214-2.682-92.628,4.867
  c-0.799,2.379-1.775,4.697-2.97,6.905c-1.439,2.495-1.293,5.459-2.056,8.161c-4.76,16.282-15.244,16.061-19.153,16.414
  c-6.313,1.025-12.358-3.08-15.676-8.186c-0.61-1.458-1.257-2.891-1.952-4.282c-1.192-6.231-3.484-9.83,5.069-17.256
  c8.164-6.6,18.754-0.163,22.654-3.593c14.326-12.535-5.548-9.932,100.009-9.863c15.07-0.214,5.038,5.836,58.965-47.766
  C2496.829,878.226,2480.582,881.862,2560,882.001z"></path><path d="M963.01,893.328c14.333-4.638,29.337,10.322,22.02,24.142
  c-1.921,4.355-5.252,7.844-7.594,11.943c-2.117,3.782-1.354,8.234-1.354,12.37c-0.008,0.612-0.168,58.992-0.055,60.953
  c-0.475,8.439,0.015,38.717-0.177,42.087c-0.779,14.274,2.068,10.295-11.528,23.795c-22.757,22.486-10.664,16.19-67.041,17.183
  c-56.206,3.252-34.329-8.719-63.649,18.03c-54.074,51.707-38.049,42.59-68.193,43.685c-2.622,0.082-92.052-0.158-92.665-0.165
  c-4.691,0.018-9.375,0.793-14.06,0.256c-6.703-0.769-13.407,0.793-20.11,0.031c-21.825,0.369-132.331,0.458-132.941,0.445
  c-66.131,1.937-49.173-3.518-64.595,9.729c-17.503,15.239-18.782,18.319-18.829,21.812c-0.011,0.611-2.696,135.173-2.964,140.974
  c-0.019,4.425-2.602,143.023-2.946,146.36c-4.675,227.95-4.621,221.026-6.783,225.27c-2.922,5.508-5.587,11.193-9.247,16.268
  h-45.399c-13.279-27.414-9.984-8.152-8.588-103.675c0,0,2.413-91.523,2.434-101.241c0.006-0.073,2.663-116.662,3.483-143.999
  c-0.158-10.519,0.605-5.822-4.154-17.445c-3.327-8.084-11.895-9.248-19.055-4.294c-8.925,7.65-6.276,19.666-7.008,35.811
  c-0.167,2.631-1.723,63.619-1.641,70.078c-0.495,8.885-1.404,52.627-4.294,168.416c0.071,7.215-1.298,43.487-1.171,50.596
  c-0.697,31.095-0.186,24.772-6.551,37.567c-1.5,2.745-2.97,5.508-4.593,8.186h-46.601c-9.547-24.053-9.57-12.667-9.643-30.541
  c0-0.001,1.177-42.66,1.177-42.661c-0.254-20.958,1.711-66.807,1.824-78.075c0.135-9.755,2.982-107.307,2.94-118.93
  c0.131-24.112,2.333-30.284-1.049-36.537c-2.049-3.77-2.879-8.533-6.624-11.089c-9.09-6.041-20.818-0.187-23.709,6.13
  c-1.769,3.916-4.355,7.728-4.331,12.187c-0.585,17.976-2.485,90.321-2.483,90.933c-1.454,62.559-2.379,90.829-2.379,90.829
  c0.045,2.729-2.573,93.618-2.592,94.275c-0.131,6.214-6.896,18.168-10.016,23.477H152.6c-2.056-5.795-4.837-11.303-7.643-16.756
  c-2.141-4.27-1.202-9.162-1.342-13.73c0.021-0.617,2.538-98.448,2.513-99.442c0-0.009,2.931-99.797,3.111-103.071
  c0.577-6.756-4.545-19.465-9.338-22.178c-9.398-4.919-19.488,0.752-22.068,5.148c-8.214,14.918-4.495,14.73-5.856,29.205
  c-0.02,0.668-2.689,90.159-2.702,103.705c-5.832,103.505,2.406,87.313-9.314,110.866c-1.08,2.086-2.104,4.209-3.288,6.252H48.827
  c-1.836-5.904-4.959-11.272-7.588-16.829c-2.062-4.483-0.921-9.521-1.165-14.255c2.852-126.333,4.586-126.135,2.092-132.52
  c-5.282-12.982-7.29-16.091-10.827-17.823c-3.69-1.793-8.003-3.44-12.083-1.934c-3.361,1.196-6.954,2.129-9.814,4.361
  c-4.642,3.806-5.606,10.211-9.442,14.676v-26.314c6.722-2.08,12.992-5.416,19.805-7.216c5.789-1.391,11.254,1.781,16.646,3.385
  c13.552,4.45,11.859,10.494,17.969,21.099c7.16,11.438,3.299-2.207,0.476,137.991c-0.105,7.63-1.893,13.02,5.465,25.002
  c2.135,3.373,5.972,5.166,9.753,5.978c7.322,1.56,18.815-4.776,21.105-18.781c0.807-8.162,2.691-89.676,2.739-90.286
  c0.749-16.414,2.764-98.662,3.465-117.076c0.335-8.959-0.808-12.446,9.021-29.004c2.239-3.861,6.533-5.66,10.528-7.124
  c4.007-1.348,7.753-3.397,11.833-4.532c6.566-1.842,21.853,4.83,24.807,7.826c3.038,2.989,4.294,7.161,6.118,10.906
  c2.086,4.635,4.819,9.308,4.459,14.584c-0.006,0.12-2.829,103.246-2.8,106.157c-2.939,106.259-5.054,110.046,3.526,121.73
  c2.141,2.867,5.642,4.184,8.991,5.038c3.922,1.013,7.795-0.872,11.242-2.562c11.865-6.083,10.268-26.732,10.29-28.491
  c0.69-16.897,1.874-65.76,1.805-68.279c0.334-7.002,2.457-85.129,2.44-85.413c4.091-134.147,0.111-109.716,10.528-130.745
  c1.799-3.788,5.02-6.764,8.911-8.283c4.959-2.031,9.851-4.288,14.968-5.88c4.441-1.427,8.808,0.811,12.962,2.147
  c4.465,1.708,9.564,2.952,12.638,6.917c2.836,3.745,4.288,8.289,6.429,12.437c1.805,3.52,3.721,7.265,3.428,11.364
  c-0.207,4.593-2.751,100.447-2.952,116.893c0.002,0.62-0.6,42.845-2.147,50.663c-0.579,2.903,1.043,5.624,0.945,8.515
  c-0.421,6.332,0.708,12.663,0.244,19c-0.985,6.045-1.432,6.07-0.836,24.349c0.171,2.745-1.135,5.227-1.995,7.765
  c-0.714,2.013,0.012,4.13,0.354,6.155c0.402,1.959-0.534,37.668-0.586,39.135c-0.355,6.463,4.773,17.567,7.972,20.342
  c10.143,7.921,21.138-0.25,23.404-3.343c5.65-7.89,6.482-12.27,6.258-53.609c0.525-7.459,1.884-88.63,2.635-100.643
  c0.109-18.79,3.77-153.649,3.77-153.649c-0.043-12.821,0.793-25.637,0.586-38.458c-0.122-3.086,1.305-5.898,2.55-8.619
  c7.106-14.164,4.959-12.219,17.793-17.774c4.599-1.732,9.643-4.111,14.584-2.245c4.014,1.476,8.283,2.354,12.114,4.276
  c5.728,3.367,6.685,10.455,10.357,15.481c6.307,8.917,0.752,13.235,0.921,99.734c0.006,0.61-2.026,88.816-2.178,91.506
  c-0.155,2.939-3.239,140.297-3.239,140.297c-0.367,10.069-1.21,10.119,5.093,22.806c1.97,3.885,6.197,5.971,10.284,6.88
  c3.934,0.683,7.649-1.269,11.107-2.873c4.459-2.147,6.612-6.893,8.478-11.181c1.525-3.397,1.452-7.179,1.58-10.815
  c0.061-1.445,0.726-30.273,0.708-31.096c1.119-68.73,2.782-120.591,2.483-129.232c0.702-13.37,2.53-106.147,2.495-106.804
  c0,0,1.905-89.569,1.915-90.884c-0.061-4.044,0.726-8.088,0.128-12.114c-0.64-3.892,0.61-7.74,0.464-11.638
  c0,0,1.952-88.629,1.793-93.342c-0.098-9.4,0.616-18.781,0.665-28.18c0.403-3.849,3.202-6.85,5.959-9.308
  c31.878-27.598,23.549-30.174,47.254-29.711c1.111-0.007,159.301-0.438,159.822-0.47c6.434-0.477,115.915-0.491,116.527-0.464
  c0,0,41.458-0.403,41.459-0.403c5.605,0.444,7.276-5.211,26.149-21.824c2.716-2.383,21.421-20.693,22.032-21.233
  c20.466-19.965,16.292-17.321,30.461-18.128c104.271,0.472,75.581,2.746,97.27-13.98c10.241-8.606,4.891-5.045,6.124-85.071
  c0.287-2.07,1.335-40.121-0.628-44.24c-3.273-6.305-12.037-13.755-9.003-23.483C951.994,899.623,957.185,895.061,963.01,893.328
   M962.547,916.049c2.391,3.472,9.728,5.421,15.67-1.202c3.865-5.164,2.415-13.708-5.624-16.701
  C963.647,896.376,955.409,902.404,962.547,916.049z"></path><path d="M2522.878,904.674c10.628-11.051,6.323-7.378,37.122-8.192v7.478
  c-4.288-0.018-8.564,0.031-12.833-0.018c-3.641-0.024-7.338-0.787-10.906,0.165c-4.01,1.136-0.762-0.397-64.741,63.247
  c-13.488,12.319-3.756,8.372-34.731,9.375c0,0-53.676,0.421-53.676,0.421c-24.953,0.786-24.691-2.615-31.718,4.221
  c-1.77,1.799-20.655,22.048-24.557,23.801c-4.297,1.736-6.616,1.17-30.962,1.281c-4.79-0.051-8.034,0.701-13.931-4.965
  c-23.099-22.536-27.964-24.089-29.766-29.559c-2.177-10.208,1.657-14.143-4.782-20.001c-8.04-7.206-10.934-11.249-14.969-11.949
  c-3.658-0.636-22.931-0.56-25.63-0.439c-2.092,0.079-4.166-0.14-6.209-0.403c-3.794-0.543-7.612,0.079-11.4-0.152
  c-2.877-0.15-21.555-0.639-34.804,0.268c-1.064,0.08-16.325-0.747-19.549,0.11c-6.871,1.727-14.489-1.674-15.822,5.416
  c-1.915,7.021-1.891,14.987-6.636,20.903c-4.697,5.819-13.236,7.856-20.214,5.465c-10.633-3.353-16.417-14.928-11.418-24.222
  c4.715-9.016,11.135-8.363,26.722-12.638c12.797-3.52,28.73-1.176,36.555-1.067c5.069,0,10.174,0.244,15.219-0.531
  c7.307-0.189,14.633,0.018,21.958-0.085c3.642-0.098,7.246,0.915,10.9,0.384c13.022-0.823,26.082-0.695,39.129-0.665
  c6.444-0.053,8.941,1.52,19.238,11.614c8.4,8.381,9.258,6.313,9.759,18.573c0.079,3.05-0.384,6.496,1.61,9.088
  c3.172,4.142,7.612,7.039,11.193,10.802c3.47,3.635,7.551,6.612,11.089,10.192c2.477,2.202,4.691,5.075,8.07,5.917
  c3.199,0.754,23.619,0.401,26.326,0.311c5.734-0.114,6.707-3.612,20-16.225c10.628-10.026,10.989-13.164,20.232-12.882
  c5.831-0.235,36.862,0.307,46.345-0.262c0.61-0.044,29.153-0.252,34.707,0.183c14.939-0.155,17.312,1.054,22.123-3.953
  C2482.236,945.346,2502.554,925.004,2522.878,904.674 M2089.081,949.737c0.183,3.355,1.427,6.472,2.409,9.656
  c1.36,1.305,2.513,2.861,4.081,3.965c7.776,3.683,15.85-4.12,14.065-12.876c-0.829-3.031-3.068-5.606-5.849-7.002
  C2098.864,940.901,2091.335,942.023,2089.081,949.737z"></path><path d="M1809.378,910.657c10.325-5.702,17.648-0.862,22.148,0.982
  c6.403,5.369,7.428,11.478,7.228,16.701c-0.732,2.031-1.403,4.087-2.196,6.1c-2.708,2.855-5.484,5.892-9.302,7.234
  c-7.74,3.129-17.115,0.256-22.355-6.075c-3.921-4.857-5.053-12.535-0.836-19.854
  C1805.718,913.933,1807.548,912.292,1809.378,910.657 M1814.471,932.116c1.976,2.971,6.191,3.013,9.32,2.184
  c6.9-2.047,11.099-13.63,1.519-19.641C1813.322,909.453,1805.674,921.65,1814.471,932.116z"></path><path d="M1128.748,910.432c12.474-1.702,22.647,8.282,21.001,19.141
  c-1.649,14.834-22.276,19.282-31.425,9.461c-6.842-6.383-7.197-16.887-0.036-23.258
  C1120.929,912.689,1124.753,910.926,1128.748,910.432 M1123.045,924.186c-0.431,5.587,2.765,14.25,12.632,12.468
  c6.081-1.641,9.863-9.326,6.807-15.005C1138.176,912.201,1122.576,914.058,1123.045,924.186z"></path><path d="M1191.483,910.365c12.357-2.507,26.442,10.988,19.269,24.587
  c-4.272,7.368-12.792,11.208-23.209,8.198c-9.958-3.443-18.094-17.268-5.093-29.119
  C1184.92,911.78,1188.293,910.981,1191.483,910.365 M1184.907,925.199c2.13,9.537,7.63,11.997,12.004,10.723
  c2.842-0.482,5.075-2.537,6.777-4.745c2.403-3.263,1.366-7.557,0.323-11.12C1198.066,909.67,1182.487,915.139,1184.907,925.199z"></path><path d="M1244.305,914.451c12.757-11.57,33.117,0.878,30.748,14.529
  c-1.107,13.657-20.143,22.122-34.737,7.692C1239.646,933.624,1234.294,922.881,1244.305,914.451 M1248.368,920.246
  c-1.549,3.971-0.891,8.692,1.818,12.016c1.757,2.385,4.806,3.013,7.527,3.684c5.234,0.037,9.814-4.258,10.363-9.399
  C1269.971,915.104,1252.203,909.609,1248.368,920.246z"></path><path d="M1314.676,910.297c9.229-2.397,19.94,3.208,22.385,12.614
  c3.056,9.375-4.617,19.683-14.078,20.861c-19.776,2.699-29.108-18.836-16.42-29.437
  C1308.869,912.341,1311.742,911.078,1314.676,910.297 M1310.779,929.67c4.141,8.929,13.201,9.773,18.738,1.519
  c2.094-5.388,1.132-11.457-4.16-14.322C1317.291,912.025,1307.068,918.537,1310.779,929.67z"></path><path d="M1377.911,910.114c16.577-3.654,30.287,16.421,17.012,28.571
  c-11.938,12.262-34.423,1.091-31.407-14.523C1364.565,916.989,1371,911.481,1377.911,910.114 M1373.068,926.748
  c1.25,2.056,1.812,4.569,3.855,6.081c0.043,0.262,0.128,0.793,0.171,1.055c1.629,0.628,3.263,1.366,5.038,1.555
  c7.116-0.246,11.829-5.83,10.272-14.255c-1.086-3.166-3.885-5.477-6.886-6.752C1380.198,912.63,1371.161,914.812,1373.068,926.748z
  "></path><path d="M2560,911.054v7.094c-12.204-0.232-15.782-0.958-20.104,3.513
  c-64.981,64.981-64.515,65.577-69.023,68.248c-3.716,2.213-89.37,1.866-99.32,1.866c-5.973,0.126-7.147-0.71-11.723,4.184
  c-0.575,0.611-20.852,21.168-23.892,23.075c-4.707,2.969-3.011,1.823-111.403,2.056c-11.448-0.201-8.557-2.58-15.09-6.246
  c-3.056-1.653-6.649-0.988-9.955-1.055c-7.917,0.384-15.841-0.061-23.758,0.189c-10.55-0.198-47.525,0.437-69.511,0.159
  c-22.02,1.387-31.924-3.11-34.573,4.007c-1.007,2.733-1.94,5.508-3.41,8.033c-1.83,3.025-1.916,6.661-3.147,9.912
  c-1.97,6.173-6.935,11.107-12.888,13.505c-3.27,0.787-6.618-0.293-9.704-1.293c-4.127-1.459-8.307-1.329-13.37-9.393
  c-1.634-2.448-1.697-10.333,0.146-12.986c6.531-10.836,16.304-8.892,21.849-12.535c3.126-2.045,14.484-6.455,20.922-6.514
  c5.709-0.147,106.761-0.409,106.761-0.409c12.083,0.439,28.139-1.174,33.206,0.823c3.959,1.385,6.398,5.612,10.735,6.173
  c6.335,0.586,94.831-0.33,100.546,0.079c8.209,0.482,8.734-1.499,23.642-17.042c9.854-9.298,12.577-13.267,19.677-12.833
  c15.626,0.904,68.875-0.218,95.221,0.378c5.473,0.125,7.248-3.249,14.108-9.82c2.242-2.331,31.635-31.737,31.706-31.815
  c3.667-3.824,21.617-21.872,24.032-24.081C2541.417,909.269,2536.402,911.182,2560,911.054z"></path><path d="M542.266,912.323c3.564-0.062,136.925-0.222,139.662-0.146
  c10.58-0.559,73.95,0.117,86.614-0.134c16.98-1.242,14.386,1.67,28.144,13.81c3.224,2.768,22.157,21.22,23.801,23.618
  c2.979,4.257-0.516,8.406,3.336,15.2c5.936,10.848,14.064,16.64,11.62,27.826c-2.187,10.429-16.159,17.226-27.113,11.461
  c-8.133-4.041-13.373-15.169-6.527-25.136c9.497-13.819,12.583-16.95,11.071-24.161c-2.034-5.316-11.524-12.24-16.121-17.231
  c-16.255-16.789-18.883-18.511-24.551-18.226c-34.945,0.177-118.107-0.084-123.242,0.433c-0.103,0.011-226.751,0.238-226.85,0.238
  c-6.736,0.109-147.245,0.289-156.772,0.482c-11.209-0.128-13.72-1.703-19.098,3.562c-6.804,6.605-55.076,51.375-55.878,52.145
  c-0.254,0.209-62.787,58.668-63.027,58.892c0,0-53.445,49.923-57.452,53.555c-5.459,3.89-37.114,34.773-38.226,35.536
  c-4.794,3.282-8.094,8.247-12.864,11.553c-3.613,2.377-12.015,13.613-18.793,17.744v-10.418c2.123-1.446,4.105-3.074,5.947-4.861
  c4.628-4.546-1.443,3.269,21.989-20.739c2.752-2.215,18.177-17.199,22.477-20.836c0.597-0.614,73.765-69.044,74.061-69.297
  c2.328-2.459,51.717-48.607,52.231-49.102c0.772-0.762,59.581-55.586,59.581-55.586c13.954-11.455,0.863-9.437,49.773-9.534
  c9.884-0.141,65.918-0.274,65.918-0.274c16.775-0.553,55.176,0.14,64.625-0.366C458.494,912.329,500.38,912.316,542.266,912.323
   M808.635,986.359c0.909,3.208,0.677,6.826,2.659,9.674c3.666,4.136,10.9,4.197,14.676,0.159c2.898-2.557,7.299-10.868-2.757-17.78
  C812.752,975.37,808.656,982.197,808.635,986.359z"></path><path d="M2300.072,912.75c12.913-2.357,24.781,8.743,23.538,19.214
  c-1.394,14.313-18.654,17.859-26.765,13.053c-6.24-3.247-8.519-7.588-15.371-18.768c-4.556-7.101-7.804-4.517-17.909-4.593
  c-46.91-0.018-104.75-0.074-172.625,0.232c-12.43,0.192-11.261,0.314-18.457,12.821c-4.363,9.498-13.777,19.259-14.102,24.16
  c-0.802,14.878,2.52,12.891-5.654,21.611c-51.615,51.375-49.435,49.924-54.524,50.425c-20.299,0.587-137.691,0.532-155.497,0.604
  c-4.331-0.256-8.643,1.037-12.937,0.22c-3.812-0.604-7.649,0.122-11.461-0.14c0,0-15.375,0.841-33.023,0.354
  c-5.603-0.219-9.033-7.56-14.59-10.869c-3.53-2.091-7.823-0.439-25.563-1.195c-3.214,0-6.722-0.415-9.521,1.5
  c-3.891,2.757-6.746,6.783-10.821,9.284c-3.428,2.08-7.576,1.232-11.357,1.391c-8.558-0.134-17.115,0.262-25.667,0.006
  c-22.328,0.652-30.221-2.033-31.992,4.337c-3.379,11.007-1.154,17.875-11.022,25.612c-5.253,2.445-10.447,4.089-16.579,1.787
  c-7.309-2.611-15.301-10.385-11.675-22.782c1.366-3.495,4.27-6.026,6.929-8.545c1.122-0.494,2.214-1.074,3.306-1.659
  c0.683-0.079,1.366-0.232,2.05-0.445l0.079-0.348c20.397-4.111,11.637-4.365,30.809-5.258c5.88-0.416,46.925,0.045,59.166-0.311
  c5.172-2.068,8.015-7.375,12.407-10.565c1.379-0.805,2.989-1.067,4.526-1.519c36.756-0.425,35.873,0.007,37.555,0.634
  c4.172,1.256,10.279,9.151,14.176,10.68c5.459,1.428,16.751,0.129,24.099,0.646c0,0-8.724-0.488,152.465-0.378
  c0.61,0.008,28.504-0.009,30.736-0.293c4.21-0.658,3.467-0.807,47.693-44.948c6.653-7.447,7.618-4.664,6.887-19.317
  c-0.11-2.525-1.47-4.758-3.007-6.661c-2.929-3.529-2.727-4.471-8.594-11.327c-0.745-1.932-7.25-10.129-0.83-20.037
  c9.339-15.779,30.866-2.885,95.447-6.96c162.699-0.696,136.201,0.291,148.202-0.793
  C2287.092,913.609,2293.576,913.128,2300.072,912.75 M2295.229,925.29c0,12.31,9.574,18.107,16.987,11.467
  c6.697-5.642,3.674-17.96-5.172-19.006C2301.932,916.122,2295.595,919.752,2295.229,925.29 M2043.846,925.193
  c-0.787,2.903-0.354,5.965,0.403,8.832c0.122,0.012,0.372,0.043,0.5,0.055c4.152,8.503,14.611,7.686,17.732,1.446
  c4.728-7.321-0.656-17.037-9.369-16.939C2049.098,918.733,2045.151,921.332,2043.846,925.193 M1625.109,1042.366
  c0.024,3.263-0.287,7.021,2.306,9.497c5.363,8.59,17.331,4.12,18.012-3.898c0.165-2.22,0.72-4.672-0.47-6.703
  c-1.635-3.269-4.861-5.703-8.472-6.283C1631.544,1033.979,1625.938,1037.236,1625.109,1042.366z"></path><path d="M2547.142,926.492c4.074-1.616,8.564-1.061,12.858-1.165v7.301
  c-11.148,0.097-3.469-5.006-57.159,48.974c-21.231,21.25-22.641,24.24-28.839,24.228c-59.058,0-59.745,0.274-59.745,0.274
  c-1.268-0.07-31.113-0.079-31.114-0.079c-6.479-0.245-10.065-1.007-14.834,3.922c-28.728,29.129-23.616,24.94-35.189,25.368
  c-15.269,0.594-114.465,0.403-127.542,0.378c-5.947-0.085-8.661-7.265-14.566-7.283c-22.788-0.177-45.582,0.268-68.371,0.177
  c-10.016-0.805-2.174,12.719-9.399,21.647c-11.765,16.479-40.722,1.13-33.023-16.652c5.39-14.315,12.56-13.101,105.919-12.681
  c3.44,0.104,6.972-0.354,10.375,0.439c3.629,0.83,5.709,4.3,8.985,5.825c3.486,1.787,2.817,0.885,84.315,0.726
  c0.433,0.01,44.022,0.105,45.991,0c5.221-0.394,8.271-6.293,26.033-23.227c9.09-8.891-0.83-5.69,109.146-6.191
  c4.6,0.024,1.415,1.922,67.742-64.503C2541.347,931.304,2543.689,928.145,2547.142,926.492 M2089.313,1035.699
  c-0.098,2.592-0.232,5.362,1.049,7.734c1.537,2.257,2.677,5.264,5.544,6.154c5.069,2.257,11.553-0.817,13.352-5.978
  c0.951-3.513,1.305-7.63-0.952-10.729C2103.547,1026.071,2090.84,1026.584,2089.313,1035.699z"></path><path d="M303.138,931.073c8.001-0.529,181.877-0.492,192.735-0.421
  c0,0,133.175-0.328,141.529-0.433c0.616-0.032,120.641-0.667,125.054,0.701c3.422,1.006,5.703,3.904,8.192,6.264
  c4.105,4.27,8.771,7.948,12.834,12.266c7.946,8.788,6.982,3.172,6.911,25.887c-0.572,27.656-1.201,29.606,4.471,33.987
  c2.397,1.818,4.245,4.691,7.387,5.288c6.02,0.75,12.089-0.024,18.14,0.14c81.493,0.595,75.823,1.035,81.381-4.38
  c8.596-8.521,6.297-5.797,9.784-21.733c0.805-4.007,1.86-8.259,4.837-11.242c3.818-4.129,9.442-6.301,15.005-6.398
  c11.728,1.082,17.551,8.952,17.957,17.707c-0.399,16.967-21.988,18.101-26.43,19.073c-3.025,0.677-6.264,0.933-8.93,2.659
  c-4.373,2.836-7.32,7.429-11.858,10.046c-2.663,1.544-77.453,1.79-78.721,1.745c-28.695-0.044-25.838,1.858-35.213-7.374
  c-2.641-2.727-6.106-5.179-6.905-9.119c-0.665-7.136,0.799-14.304-0.018-21.434c-0.283-7.622,2.303-20.517-2.056-27.021
  c-4.075-4.459-8.625-8.448-12.87-12.73c-3.135-2.781-5.917-6.935-10.54-7.008c-20.58-0.086-137.389-0.076-150.733,0.366
  c-5.978-0.061-11.955-0.708-17.933-0.171c-5.41,0.573-10.821-0.488-16.231-0.055c-8.008,0.687-239.707,0.454-240.318,0.451
  c-3.548,0.209-32.749,0.079-34.786,0.189c-13.696,0.954-30.847-1.87-35.701,2.434c-0.611,0.569-34.398,32.375-37.512,35.109
  c-21.529,20.198-7.211,4.073-27.412,23.764c-3.141,3.239-7.094,5.526-10.333,8.661c-4.288,3.843-8.021,8.271-12.571,11.821
  c-4.471,4.026-9.338,7.881-12.425,13.157c-3.208,5.063-8.289,8.472-12.461,12.669c-0.343,0.301-83.332,77.92-86.889,81.381
  c-4.041,3.325-55.248,52.586-60.508,55.982v-10.668c3.544-2.379,6.581-5.362,9.57-8.381c5.449-4.733,57.025-53.4,60.057-56.427
  c5.701-4.798,54.894-51.637,59.965-55.824c15.878-15.878,38.065-34.297,42.209-39.062c0,0,47.745-44.924,58.538-55.525
  c31.985-27.25,21.758-25.889,39.239-26.265c7.167-0.189,14.352,0.445,21.501-0.262C295.098,930.56,299.112,931.292,303.138,931.073
   M921.588,984.499c-0.286,12.01,7.97,14.91,13.529,12.907c7.516-3.384,8.888-11.605,5.215-16.341
  C935.217,973.873,922.592,975.218,921.588,984.499z"></path><path d="M2010.475,938.179c10.684-2.61,20.772,4.585,22.422,10.565l0.402-0.061
  c0.89,3.954,3.084,9.954-2.641,16.975c-5.396,7.713-19.293,10.278-29.248-0.329c-3.995-4.276-5.654-10.857-3.306-16.341
  C1999.929,943.455,2005.071,939.777,2010.475,938.179 M2006.401,954.05c0.183,0.262,0.561,0.781,0.75,1.037
  c0.171,2.147,1.122,4.093,1.995,6.033c1.452,1.452,2.586,3.519,4.739,4.05c10.974,3.217,17.24-11.635,10.15-18.067
  C2018.816,941.266,2006.321,942.648,2006.401,954.05z"></path><path d="M1535.036,948.237c3.306-5.551,9.619-9.149,16.091-9.156
  c3.843-0.195,7.32,1.696,10.784,3.105c2.47,2.739,5.923,4.91,7.039,8.619c6.129,23.295-26.632,31.989-35.036,11.065
  C1531.98,957.478,1532.84,952.354,1535.036,948.237 M1542.331,950.061c-2.471,7.68,3.712,17.661,11.809,15.572
  c3.227-0.537,5.447-3.239,7.112-5.843c0.866-3.556,1.714-7.801-0.811-10.894C1555.894,942.464,1544.715,942.62,1542.331,950.061z"></path><path d="M2551.613,943.754c2.214-2.33,5.258-3.538,8.387-4.062v8.222
  c-2.056,1.305-4.105,2.672-5.66,4.556c-2.854,3.294-6.337,5.953-9.278,9.162c-1.927,2.119-47.367,47.809-47.985,48.425
  c-12.139,11.768-8.284,9.921-21.885,10.406c-109.941,0.634-90.261-3.272-104.309,9.747c-28.249,26.237-11.516,18.053-45.741,20.056
  c-160.057,0.478-151.004-1.404-155.167,2.916c-8.801,8.944-13.201,17.132-23.459,18.476c-10.729,1.366-21.831-7.881-21.532-18.891
  c0.366-9.814,10.815-17.061,20.166-15.792c6.868,0.946,13.218,3.983,19.946,5.526c5.331,0.811,10.741,0.091,16.115,0.317
  c9.673,0.344,54.853-0.531,82.375,0.134c4.64-0.361,79.282-0.482,79.892-0.476c5.344,0.157,8.399-5.731,25.423-22.221
  c9.332-9.332,7.692-6.578,29.467-7.124c90.416,0.062,82.903,1.438,88.834-4.477c5.68-6.026,27.706-28.224,28.101-28.607
  C2527.428,967.975,2539.499,955.837,2551.613,943.754 M2136.963,1043.897c-8.479,7.531,2.306,26.234,13.736,17.286
  c5.111-3.733,5.508-12.272,0.823-16.499C2147.838,1040.719,2140.988,1040.103,2136.963,1043.897z"></path><path d="M628.258,948.579c0.61-0.021,86.282-0.987,91.372,1.238
  c6.01,3.77,15.861,16.534,22.166,18.012c18.854,4.012,23.222,4.572,28.735,12.23c8.833,14.06-6.511,29.201-20.745,25.777
  c-7.204-1.616-13.151-7.911-14.182-15.243c-0.653-4.855-1.97-9.583-2.842-14.395c-0.804-4.79-3.443-5.849-12.968-15.566
  c-6.143-6.559-5.691-4.528-42.721-4.825c-0.61,0.004-78.964,0.116-81.155,0.018c-0.61-0.027-57.644-0.215-75.635,0.586
  c-3.016,0.094-206.754-0.254-218.372,0.464c-36.908,3.058-12.04-13.303-62.649,33.249c-5.476,4.895-82.402,77.23-95.105,88.493
  c-0.982,1-33.743,32.578-40.532,37.476c-0.337,0.282-35.646,33.591-39.08,37.36c-2.556,2.928-5.734,5.185-8.796,7.545
  c0,0-12.209,12.812-31.803,30.406c-1.741,1.869-20.173,19.351-23.947,21.971v-10.723c5.004-3.389,34.999-32.4,45.052-41.447
  c2.586-2.049,5.618-3.617,7.612-6.319c2.779-3.684,24.44-23.873,25.051-24.411c1.624-1.285,56.892-53.474,57.495-54.085
  c0.077-0.069,93.972-87.917,96.41-90.28c41.123-36.173,33.071-36.74,48.961-36.811c0.61-0.005,76.072-0.382,79.307-0.335
  c0.002,0,162.902-0.024,162.902-0.024c0.001,0,88.981-0.5,88.981-0.5C617.261,948.829,622.756,948.432,628.258,948.579
   M745.694,992.929c5.652,9.16,14.295,5.871,17.335,1.757c6.371-10.04-1.684-17.755-8.497-17.549
  C749.125,976.96,742.557,981.896,745.694,992.929z"></path><path d="M2213.635,961.979c17.042-4.167,31.349,16.731,18.628,28.4
  c-7.762,7.691-20.554,8.205-29.284-2.684c-3.617-4.642-4.203-11.315-1.47-16.518
  C2204.028,966.597,2208.432,962.986,2213.635,961.979 M2213.177,966.81c-7.872,5.433-5.35,14.306,0.256,19.555
  c10.164,7.455,19.919-8.67,13.376-16.353C2223.418,966.341,2217.837,965.249,2213.177,966.81z"></path><path d="M622.171,966.646c15.042-0.256,30.083,0.153,45.125-0.11
  c5.148-0.25,10.162,1.128,15.194,2.037c7.684,1.827,21.232,2.948,25.38,12.699c4.246,8.389,1.34,18.357-8.954,23.392
  c-10.504,4.603-23.253-0.229-26.149-12.346c-2.379-9.893-2.214-18.756-8.472-18.207c-50.11-0.163-169.05,0.384-169.05,0.384
  s-194.655,0.49-201.836,0.348c-6.93,0.067-7.606,1.468-15.755,9.18c-18.547,17.479-51.029,47.132-51.029,47.132
  c-2.763,2.739-6.02,4.959-8.509,7.984c-2.983,3.556-7.106,5.831-10.43,9.015c-0.61,0.568-77.509,74.323-86.035,81.759
  c0,0-74.554,70.022-74.555,70.023c-5.121,4.429-42.734,40.654-47.095,43.624v-10.668c3.256-2.325,23.888-22.007,24.502-22.611
  c3.242-2.899,94.001-87.982,110.073-103.419c0.09-0.095,57.854-54.091,60.16-56.385c42.152-39.3,41.453-38.318,41.453-38.318
  c2.097-2.399,40.714-38.717,41.325-39.263c6.987-6.376-4.737-5.772,132.996-5.636c1.058,0.011,143.323-0.319,145.158-0.36
  c0,0,39.677-0.098,39.678-0.098C604.281,966.548,613.229,966.621,622.171,966.646 M682.032,985.078
  c-0.079,3.227-0.183,6.71,1.342,9.668c2.208,4.209,7.911,5.88,12.157,3.91c2.281-0.86,3.8-2.824,5.343-4.599
  c0.872-1.873,1.842-3.818,1.775-5.929c-0.25-4.831-4.166-9.101-8.851-10.077C688.846,976.765,683.222,980.101,682.032,985.078z"></path><path d="M1377.185,970.269c9.853-1.122,17.394,1.044,22.867,11.65
  c0.628,3.928,1.025,8.112-0.653,11.858c-2.495,5.105-7.46,8.948-13.017,10.113c-17.84,2.704-29.332-15.924-17.86-28.028
  c1.11-1.135,2.373-2.104,3.611-3.111C1373.787,971.873,1375.465,971.031,1377.185,970.269 M1378.692,976.649
  c-3.495,1.738-5.154,5.868-4.861,9.619c-0.207,2.611,1.293,4.837,2.232,7.155c2.641,3.617,7.868,4.77,11.913,3.007
  c8.667-4.808,9.328-16.506-1.824-20.44C1383.663,975.746,1380.948,975.301,1378.692,976.649z"></path><path d="M1126.498,970.97c27.104-4.24,31.278,29.361,9.192,33.499
  c-20.257,2.043-28.113-16.348-18.177-27.9C1119.861,973.825,1123.228,972.318,1126.498,970.97 M1129.297,977.192
  c-8.842,5.835-5.021,10.117-3.806,15.834c3.607,5.735,10.886,6.548,14.413,2.971c7.562-6.627,4.312-15.668-2.592-18.707
  C1134.817,976.021,1131.871,976.46,1129.297,977.192z"></path><path d="M1191.965,970.537c19.565-3.084,30.57,24.785,9.186,33.029
  c-11.029,4.076-24.484-3.038-25.283-15.432C1175.563,979.259,1183.279,971.348,1191.965,970.537 M1186.749,982.517
  c-0.406,2.055,1.252,12.998,7.149,14.499c12.18,2.12,16.081-11.31,10.321-17.549
  C1198.885,973.118,1187.795,975.278,1186.749,982.517z"></path><path d="M1252.46,970.69c10.827-3.145,24.345,6.04,23.014,18.787
  c-1.775,16.262-23.349,18.828-32.035,9.284c-3.172-3.062-4.813-7.442-4.807-11.803
  C1238.968,979.235,1244.812,972.172,1252.46,970.69 M1249.325,982.108c-0.811,2.19,0.482,4.197,1.36,6.118
  c0.846,1.54,0.302,9.357,7.716,9.198c4.312,0.439,8.539-2.373,10.15-6.319c0.006-1.5-0.866-2.769-1.555-4.02
  c-0.951-2.025,0.433-4.001,0.287-6.014c-1.244-3.288-4.959-5.051-8.301-5.16C1254.851,975.508,1250.765,978.29,1249.325,982.108z"></path><path d="M1315.219,970.58c16.174-4.245,30.599,14.72,19.006,27.546
  c-7.354,8.292-18.45,6.22-22.532,4.349c-7.055-3.023-13.214-10.987-9.07-21.312C1304.502,975.667,1309.815,972.068,1315.219,970.58
   M1311.791,992.807c6.67,7.377,14.026,4.516,16.865-0.75c0.872-2.415,0.988-5.032,1.08-7.57c0.134-3.208-2.263-5.947-4.935-7.405
  c-2.379-1.47-5.301-1.385-7.966-1.086C1312.637,976.781,1306.533,981.518,1311.791,992.807z"></path><path d="M872.48,972.733c11.614-4.652,23.096,1.542,25.588,11.065
  c3.365,9.907-4.262,19.362-13.023,21.403c-13.531,4.202-27.601-9.888-22.483-21.818C864.361,978.741,867.814,974.66,872.48,972.733
   M871.785,983.846c-0.238,2.226-0.012,4.477,0.171,6.71c0.905,1.706,3.585,9.602,11.577,7.661c3.056-0.61,5.435-3.019,6.941-5.63
  l0.634,0.134c-0.134-0.348-0.396-1.043-0.531-1.391l0.836,0.213c1.891-6.47,0.272-9.403-4.813-13.462
  C876.226,974.58,872.25,980.943,871.785,983.846z"></path><path d="M334.246,985.603c276.376-0.365,86.467-0.466,308.646-0.683
  c7.529-0.191,10.614,4.268,17.067,10.571c4.288,4.453,9.137,8.32,13.413,12.791c10.452,9.615,0.575,5.343,52.475,7.027
  c45.077-1.134,43.038-0.952,51.926,8.149c5.264,5.715,11.266,10.687,16.682,16.255c7.409,7.586-1.104,5.358,89.39,5.544
  c4.776-0.22,9.887,0.866,14.352-1.385c5.667-2.928,10.766-6.862,16.475-9.717c19.934-10.551,39.71,15.773,20.543,29.156
  c-4.532,3.044-10.272,1.726-15.383,1.885c-8.084,0.08-16.834-11.762-25.295-12.712c-4.376-0.477-66.235-0.305-66.846-0.256
  c-8.728,0.555-17.487,0.11-26.222,0.573c-3.885,0.189-7.435-1.842-10.058-4.556c-7.404-6.056-21.658-22.122-27.479-24.795
  c-3.222-1.456-17.408-0.694-24.6-0.878c-6.441-0.418-49.42-0.263-53.14-0.244c-11.819,0.242-7.586,2.879-35.384-24.429
  c-7.615-7.693,11.018-5.54-165.281-5.477c-0.001,0-83.552,0.433-83.552,0.433c-3.718-0.196-40.657,0.18-41.465,0.159
  c-61.305,0.04-59.622-0.865-63.283,2.58c-8.475,7.551-94.557,88.468-95.16,89.079c-0.362,0.342-59.455,55.302-64.68,60.404
  c-2.611,2.464-5.697,4.41-8.07,7.13c-2.446,2.824-5.355,5.179-8.234,7.545c-1.096,0.898-18.306,17.48-21.69,21.074
  c-3.153,3.397-7.149,5.856-10.43,9.119c-21.667,21.114-30.583,29.436-51.188,48.785c-0.612,0.587-32.59,31.252-37.775,34.817
  v-10.687c5.48-3.819,10.084-9.098,41.886-38.824c4.536-3.642,32.405-30.844,36.073-33.536c0.012-0.008,33.064-31.292,36.299-34.45
  c0.001-0.001,47.131-44.301,47.132-44.301c3.025-3.083,54.466-50.775,62.588-58.818c1.24-1.106,39.517-36.643,48.687-45.747
  c8.989-7.635,18.404-18.101,22.959-20.348c7.185-2.306,14.792-0.445,22.154-1.195C323.266,985.341,328.756,986.018,334.246,985.603
   M914.689,1043.452c-0.823,4.563,0.878,9.174,3.684,12.748c5.785,4.719,17.184,1.866,16.384-10.546
  C934.469,1035.173,917.26,1032.792,914.689,1043.452z"></path><path d="M305.504,1009.947c7.299-4.476,14.656-11.411,27.436-3.989
  c5.818,3.354,10.857,12.335,6.02,21.513c-5.152,9.397-17.663,13.503-27.619,6.886c-9.174-5.519-12.299-11.133-18.055-5.502
  c-21.367,20.465-30.856,27.14-36.677,34.323c-1.635,2.013-3.751,3.532-5.843,5.032c-2.135,1.494-3.355,3.885-5.191,5.685
  c-1.83,1.885-4.276,2.977-6.234,4.709c-4.672,4.3-9.131,8.838-13.907,13.041c-2.44,2.226-4.398,4.916-6.746,7.24
  c-4.513,4.294-29.594,27.807-30.504,28.571c-0.018,0.016-43.97,41.23-44.698,42.002c-10.109,9.641-77.898,72.983-85.163,80.149
  c-3.913,3.26-52.139,49.64-58.324,54.201v-10.619c1.507-1.159,3.056-2.269,4.416-3.599c8.583-8.172,84.442-79.528,84.504-79.587
  c0.61-0.521,79.066-74.068,87.371-82.759c11.765-10.243,44.835-41.451,45.631-42.27c0.002-0.001,44.051-40.696,44.051-40.697
  c7.039-8.192,15.658-14.816,23.197-22.514C293.958,1016.979,299.807,1013.515,305.504,1009.947 M313.324,1017.181
  c0.573,2.623,0.622,5.429,1.83,7.881c7.96,12.813,28.414-6.273,14.243-16.207C321.992,1003.514,311.602,1009.676,313.324,1017.181z
  "></path><path d="M450.76,1016.016c15.246-0.387,66.073,0.103,89.06-0.537
  c11.36,0.391,10.957-0.19,48.211-0.043c13.504,0.072,10.589,1.86,21.397,10.882c6.272,5.213,16.383,3.108,27.003,8.478
  c9.821,5.568,13.616,18.519,3.385,27.808c-10.053,10.093-29.896,3.841-31.7-11.638c-2.526-18.679-3.307-17.758-11.943-25.82
  c-4.363-4.176-6.172-1.893-190.557-1.622c-2.745,0.006-5.459-0.732-8.204-0.415c-4.38,0.482-8.783-0.067-13.169,0.305
  c-3.367,0.311-7.155-0.622-10.083,1.537c-4.715,3.361-8.356,7.942-12.681,11.76c-13.368,11.756-15.987,17.372-24.783,17.317
  c-44.17-0.095-36.024-1.857-47.388,8.674c-4.937,4.63-112.278,105.425-115.02,107.633c-6.108,4.777-53.343,49.897-54.189,50.834
  c-4.328,5.012-59.352,55.932-61.1,57.788c-3.098,3.163-54.693,51.86-59.001,55.067v-10.68c4.639-3.258,18.994-17.315,21.745-20.013
  c16.456-15.173,66.974-63.045,66.974-63.045c0.612-0.561,49.56-46.532,51.627-48.327c7.339-6.436,18.412-17.706,18.671-17.957
  c2.232-2.293,5.154-3.77,7.295-6.154c6.763-7.332,5.882-6.29,63.436-60.355c0.735-0.609,54.313-50.708,60.648-57.135
  c2.367-2.428,5.795-3.41,9.113-3.275c8.948,0.049,17.884-0.738,26.826-0.293c13.18-1.44,8.329,4.783,24.679-11.418
  c18.472-17.689,19.938-18.834,23.502-18.982c5.82-0.65,45.393-0.204,53.103-0.348C435.328,1015.82,443.044,1016.18,450.76,1016.016
   M625.989,1037.761c-4.117,0.762-7.661,4.575-7.313,8.899c-0.538,19.851,21.722,14.129,20.653,1.202
  C639.347,1041.274,632.229,1036.315,625.989,1037.761z"></path><path d="M2384.252,1028.855c4.204-1.644-8.221-1.045,175.748-1.086v6.722
  c-0.611,0.01-78.39,0.742-95.209,0.61c-77.288,0.162-26.706,0.921-70.084,0.067c-4.253-0.092-6.785,0.007-14.822,8.875
  c-0.556,0.613-17.347,18.286-21.531,19.994c-3.356,0.982-22.818,0.498-23.428,0.519c0,0,4.007,0.612-109.768,0.427
  c-2.946-0.14-5.99,0.756-8.088,2.879c-4.672,4.703-9.607,9.137-14.072,14.041c-9.935,9.719-9.555,10.003-17.53,9.948
  c-41.739-0.388-44.293,1.051-50.334-1.013c-2.702-0.897-5.447,0.409-8.167,0.39c-4.257-0.012-8.509-0.549-12.76-0.195
  c-2.57,0.206-24.498-0.154-25.112-0.14c-24.088,0.239-17.514,1.18-23.124,1.458c-12.59,0.588-15.695-0.269-18.945-2.934
  c-11.174-9.172-22.577-21.646-28.034-25.6c-3.416-2.556,2.352-1.899-89.688-1.879c-0.001,0-90.902,0.396-90.902,0.396
  c-67.607-0.835-56.701,1.097-76.221,2.074c-13.276,0.723-25.821-12.021-19.018-25.643c1.714-3.678,5.13-6.032,8.442-8.143
  c3.635-0.933,11.789-4.113,20.708,3.44c4.883,3.32,10.807,15.017,14.285,18.677c1.866,1.946,4.77,1.757,7.265,1.866
  c12.608-0.476,25.222,0.537,37.83-0.232c2.993,0.232,82.644-0.122,131.202,0.049c16.445-0.22,32.895,0.128,49.34-0.238
  c3.135-0.049,6.46-0.122,9.345,1.336c4.705,2.072,15.18,13.73,19.177,16.945c11.136,8.889,7.73,12.33,21.568,11.998
  c0,0,2.532,0.741,69.505,0.61c9.767-1.382,38.166-0.473,53.689-0.75c4.792-0.055,8.941-6.284,18.616-15.426
  c11.175-10.261,7.697-11.654,21.635-11.571c7.026,0.248,34.615-0.092,35.341-0.152c0,0,48.186-0.134,48.187-0.134
  c6.281,0.222,42.109-0.045,42.722-0.055c4.88,0.176,6.131-3.64,22.824-19.781
  C2377.903,1034.363,2380.349,1030.661,2384.252,1028.855 M1756.653,1055.169c4.975,3.341,13.688,0.668,15.164-9.052
  c0.159-5.038-3.27-10.235-8.381-11.205C1754.021,1031.864,1744.916,1044.566,1756.653,1055.169z"></path><path d="M1558.91,1034.29c2.434-1.763,4.977-3.672,8.064-4.038
  c3.928-0.531,8.051-0.512,11.797,0.982c7.526,4.055,8.549,7.373,10.369,10.979c3.226,10.58-2.595,19.366-13.078,22.312
  c-10.049,1.274-18.496-2.66-22.69-12.87C1552.366,1042.999,1554.032,1039.548,1558.91,1034.29 M1563.088,1039.694
  c-1.982,2.629-1.458,5.996-1.208,9.052l0.744,0.012c-0.073,0.415-0.226,1.244-0.299,1.659c0.146,0.037,0.433,0.122,0.573,0.165
  c0.842,2.257,2.33,4.312,4.453,5.538c11.011,5.585,20.703-10.694,11.357-18.122
  C1574.275,1033.991,1566.321,1034.394,1563.088,1039.694z"></path><path d="M743.102,1034.632c16.017-7.507,25.814,2.197,28.491,9.753
  c5.087,14.621-12.098,27.528-25.966,20.909c-14.622-7.584-12.055-12.253-28.912-12.504c-39.138-0.059-41.855-0.697-45.796,2.971
  c-45.398,43.036-8.243,22.802-131.654,28.43c-7.253-0.529-76.331,0.26-76.94,0.299c-156.056,0.178-146.51,0.885-154.911,0.39
  c-3.141-0.146-6.459-1.446-9.509-0.128c-6.191,3.074-9.521,9.662-15.206,13.462c-4.928,4.197-9.046,9.241-13.992,13.425
  c-4.379,4.581-9.796,8.052-13.919,12.901c-6.049,6.938-40.872,38.413-47.552,45.229c-6.526,5.951-59.205,55.461-59.807,56.073
  c-0.001,0.001-86.013,81.164-88.804,83.863c-2.697,2.24-49.417,47.073-58.623,54.567v-10.564
  c5.292-3.845,19.55-17.859,20.153-18.47c0.629-0.63,61.249-57.644,61.868-58.288c0,0,58.734-55.49,58.959-55.708
  c0.586-0.611,55.8-52.824,59.038-55.635c2.43-2.238,42.724-40.606,46.015-43.13c3.735-2.861,40.826-38.877,45.79-42.532
  c4.892-3.751,25.223-1.701,99.783-2.733c1.476-0.1,107.358-0.201,107.969-0.207c9.106-0.342,133.58-0.731,134.191-0.726
  c5.104,0.112,7.067-3.611,18.701-14.548c10.72-9.074,14.302-15.861,20.354-15.889c4.394-0.18,46.347-0.433,46.357-0.433
  c11.599-0.468,6.278-0.755,16.115-5.782C738.051,1038.194,740.259,1035.919,743.102,1034.632 M745.047,1045.135
  c-1.111,10.778,5.993,14.922,10.827,14.285c6.974-1.368,11.288-8.281,9.326-14.913
  C761.574,1034.721,746.321,1035.438,745.047,1045.135z"></path><path d="M560.053,1032.851c14.905-3.394,29.257,13.852,18.159,27.704
  c-11.929,13.982-34.045,4.832-33.279-10.784C545.042,1041.433,552.172,1034.491,560.053,1032.851 M555.319,1042.665
  c-2.21,3.861-2.176,14.242,5.215,16.829c10.709,4.406,21.288-13.878,8.942-19.976
  C566.963,1037.94,559.667,1036.071,555.319,1042.665z"></path><path d="M1492.071,1039.426c11.944-7.589,26.415,0.022,28.43,11.187l0.439-0.152
  c0.197,7.208-0.299,7.015-0.848,9.101c-5.484,13.214-23.266,14.483-31.803,4.819c-3.94-3.959-5.398-10.144-3.696-15.45
  C1485.581,1044.854,1488.533,1041.542,1492.071,1039.426 M1495.06,1049.637c4.782,11.189,7.024,8.981,11.79,9.924
  c5.709-5.125,6.53-5.216,7.204-7.161c-0.035-3.397,1.026-5.76-5.874-10.546C1497.13,1039.002,1493.489,1046.324,1495.06,1049.637z"></path><path d="M2407.51,1042.421c6.508-0.134,13.084,0.47,19.519-0.805
  c5.432,1.062,44.13,0.803,47.559,0.787c8.563-0.159,11.985,7.254,20.312,13.285c2.615,1.945,0.206,1.331,65.101,1.372v6.777
  c-0.14-0.001-42.003,0.076-42.142,0.085c-3.733,0.209-21.752,1.451-26.003-0.939c-28.411-16.694,15.974-12.723-90.475-13.236
  c-5.794-0.139-5.878,1.513-29.632,25.246c-3.665,3.611-5.026,4.415-13.626,4.636c-25.96-0.061-123.258,0.011-123.871,0.012
  c-4.758-0.023-5.686,1.77-22.88,19.159c-6.04,5.758-9.977,11.318-16.737,11.333c-0.634,0.001-75.449-0.049-84.815,0.384
  c-67.666-0.265-63.255,2.148-72.396-6.045c-24.443-23.572-25.835-24.279-28.821-24.221c-99.431-0.2-133.63,0.287-133.63,0.287
  c-9.455-0.276-77.409,0.33-78.02,0.323c-57.538-0.122-55.653,1.839-63.009-5.917c-2.867-3.062-6.344-5.459-9.235-8.484
  c-2.019-2.092-4.672-3.745-7.643-3.824c-41.484-0.569-41.33-0.185-43.917,1.714c-5.697,4.465-10.083,10.382-15.822,14.798
  c-3.324,2.58-7.722,2.08-11.644,2.043c-0.405-0.012-34.794-0.149-37.061,0.024c-4.672,0.384-7.582,4.422-10.68,7.429
  c-2.934,2.759-4.23,5.854-6.673,20.922c-1.104,7.887-7.814,14.7-15.719,15.816c-11.747,1.735-24.534-8.78-21.129-21.477
  c0.909-4.074,3.764-7.344,6.899-9.93c2.653-2.117,6.069-2.757,9.302-3.452c3.599-0.726,7.112-1.842,10.735-2.519
  c3.087-0.653,6.496-1.141,8.869-3.44c17.012-16.557,5.489-9.222,58.532-11.412c4.251-0.3,4.593-2.039,20.403-17.03
  c4.081-1.013,8.32-1.098,12.51-1.061c40.648-0.392,41.486-0.2,44.753,1.989c7.68,5.147,14.957,16.286,21.678,16.109
  c41.179-0.467,53.702,0.389,70.792-0.427c0.002,0,180.536-0.226,180.536-0.226c18.863-0.044,14.815-0.508,27.845,11.065
  c6.143,5.094,16.604,16.907,21.373,18.689c3.034,0.79,120.525,0.445,128.311,0.116c17.359,1.084,18.261,0.495,22.574-3.739
  c24.327-24.418,24.903-25.395,28.68-26.253c4.716-0.631,65.166-0.673,75.666-0.518c6.916,0.276,44.6-0.365,52.957-0.122
  c6.715-0.173,5.661,0.461,12.644-6.325c18.483-17.988,20.199-21.563,25.039-22.526
  C2398.781,1042.024,2403.179,1042.512,2407.51,1042.421 M1563.357,1101.867c-0.894,6.26,1.159,12.109,6.612,14.956
  c5.105,2.049,11.937-1.171,12.888-6.783c0.647-2.836,1.183-6.094-0.488-8.68c-1.324-2.617-3.946-4.123-6.533-5.234
  C1570.775,1095.908,1567.456,1095.138,1563.357,1101.867z"></path><path d="M1202.84,1053.241c144.198-0.417,138.682,0.307,178.663-0.604
  c0.616,0.01,42.742,0.742,54.976,0.195c4.52-0.177,9.308-0.439,13.511,1.58c4.892,2.415,19.906,18.239,24.52,21.934
  c0.25,0.251,34.095,32.605,34.621,33.054c11.514,9.706,7.309,13.362,8.588,34.292c1.47,32.836-2.167,32.935,5.234,39.165
  c12.846,10.644,5.057,10.243,29.973,9.711c39.44,1.362,41.268-3.609,52.121,8.222c6.555,7.081,9.538,4.579,8.625,31.938
  c0.358,10.746-1.198,12.943,6.697,18.598c3.675,2.678,4.567,2.845,29.583,2.324c8.765,0.119,10.055-1.144,20.373,9.247
  c10.288,10.576,6.13,7.98,7.789,22.312c0.875,25.008-1.121,30.099,1.806,34.725c8.67,12.375,17.632,13.603,19.732,14.218
  c15.178,4.473,27.337-18.105,35.067-21.41c3.318-1.535,48.626-1.432,49.236-1.36c4.331,0.585,8.655-0.433,13.01-0.214
  c0.574,0.023,20.702,0.37,21.275,0.335c5.165-0.451,94.261-0.283,99.478-0.238c42.405-1.035,42.787,2.075,48.028-2.476
  c2.177-1.88,38.377-38.485,42.173-42.008c6.051-5.711,3.144-7.092,18.939-7.557c22.914,0.371,22.511,0.214,24.197-0.897
  c1.671-1.128,3.873-1.519,5.691-0.427c3.33,1.97,7.313,1.183,11.004,1.33c0.61,0.018,25.99,0.836,31.01-1.202
  c6.362-3.111,11.937-8.216,19.104-9.454c9.546-0.769,19.458,6.234,21.092,15.847c0.793,3.69-0.531,7.326-1.464,10.857
  c-6.049,7.299-13.278,10.942-22.849,7.625c-9.747-3.021-11.34-9.972-23.74-9.802c-4.882-0.105-41.867,0.056-42.032,0.043
  c-7.149-0.329-14.285,0.238-21.416-0.043c-2.672,0.049-5.319,1.037-7.289,2.83c-53.776,52.44-44.268,49.724-62.862,49.388
  c-80.203,0.458-77.472-0.269-192.046,0.427c-22.007,0.367-21.065-2.321-29.351,5.715c-10.985,11.44-10.594,9.501-12.48,19.708
  c-0.701,4.319-1.531,8.826-4.172,12.437c-3.294,4.861-9.125,7.881-15.023,7.478c-8.369,0.646-16.975-5.038-19.135-13.236
  c-1.372-4.489-1.787-9.222-3.385-13.632c-3.601-8.269-16.763-13.895-18.165-21.513c-0.045-0.323-1.249-34.584-1.171-36.341
  c0.382-24.401-15.658-16.771-32.608-18.506c-10.993-1.316-11.591,2.193-20.891-6.856c-2.769-2.745-5.831-5.209-8.265-8.259
  c-3.062-4.007-1.641-9.308-2.391-13.932c-1.495-8.878,1.354-21.154-2.043-25.551c-6.175-7.795-9.146-6.418-14.596-6.551
  c-4.558-0.074-36.472-0.314-51.255-0.079c-3.816-0.239-6.323-1.565-24.404-20.208c-3.651-3.497-3.129-9.38-3.129-24.447
  c0,0-0.527-3.463-0.586-20.116c0.347-21.556,0.465-18.313-7.978-26.674c-20.056-19.05-47.098-44.939-49.797-47.162
  c-2.539-2.184-1.538-2.202-50.047-1.751c-0.001,0-98.831,0.336-98.832,0.336c0,0-83.999,0.368-170.783,0.226
  c-16.206,0.559-100.625,0.555-100.625,0.555c-15.761,0.739-11.146-2.079-21.086,6.453c-77.158,75.63-75.099,72.953-80.222,72.994
  c-61.034,2.15-55.661-3.057-65.016,6.801c-5.54,5.36,0.385,31.607-4.032,39.257c-2.021,3.542-71.188,69.818-71.798,70.371
  c-8.748,8.617-10.487,7.306-22.562,7.387c-5.929-0.079-11.833,0.909-17.75,0.378c-2.428-0.232-5.057,0.006-6.99,1.641
  c-10.825,9.124-6.033,7.384-7.649,39.257c-0.244,4.264-3.123,7.631-6.057,10.449c-3.885,3.69-7.466,8.277-12.888,9.698
  c-5.838,1.506-32.742,0.953-33.371,0.988c-5.68,0.373-8.064,5.722-28.51,24.319c-9.175,8.796-4.041,8.578-5.874,37.622
  c-0.028,0.611-0.96,57.742-0.927,59.758c0.003,0.612-0.804,60.129-1.135,64.04c-0.229,4.342-2.307,7.501-18.549,21.989
  c-9.908,8.951-54.007,52.924-60.429,58.507c-13.295,12.671-9.548,3.623-11.107,62.216c0.113,5.753-0.926,40.494-0.866,46.985
  h-15.279c0.847-51.38,1.624-97.032,2.171-102.339c1.451-6.307,6.293-8.092,52.609-53.792c28.551-29.421,36.143-30.902,36.256-39.66
  c0.021-21.306,1.828-103.473,1.427-108.616c0,0,0.566-22.636,0.525-37.738c0.779-12.281,1.897-10.301,10.516-18.939
  c27.234-27.627,29.118-27.721,32.322-28.174c0.287-0.035,31.831-0.707,32.425-0.702c4.212,0.19,9.245-5.235,10.436-8.631
  c1.748-4.221-0.094-19.849,1.574-34.109c0.293-2.774,1.448-3.8,12.956-14.993c5.185-4.999,8.429-3.847,38.391-3.867
  c4.872,0.2,4.141-0.315,32.797-28.064c4.859-4.256,29.423-28.407,30.034-28.985c1.763-1.754,12.81-10.757,13.084-15.92
  c1.057-27.951-1.211-32.018,3.361-36.073c4.691-4.081,8.149-9.546,13.565-12.766c5.623-3.142,47.396-0.665,60.734-1.623
  c4.25-0.444,6.352-2.126,23.959-20.306c7.277-5.929,13.236-13.285,20.403-19.336c1.757-1.586,2.33-4.026,3.934-5.721
  c1.787-1.555,4.288-2.043,5.898-3.843c0.569-0.61,25.635-25.3,30.205-28.51c4.067-2.979,23.391-1.489,31.639-1.921
  c2.162,0.179,60.907-0.183,74.439-0.104c7.515-0.155,61.736-0.417,70.707-0.11
  C1186.56,1053.888,1194.691,1053.022,1202.84,1053.241 M2116.767,1255.571c-3.428,1.507-6.417,4.959-6.124,8.887
  c0.009,2.904,3.287,9.493,5.551,11.266c9.189,5.968,19.573-5.998,13.657-15.42
  C2127.295,1255.919,2121.488,1254.113,2116.767,1255.571 M1695.675,1355.94c0.665,1.976,2.232,3.477,3.495,5.105
  c1.805,2.153,4.855,2.171,7.448,2.232c3.443,0.131,9.413-3.819,8.533-12.864C1712.937,1338.322,1691.564,1337.238,1695.675,1355.94
  z"></path><path d="M2400.203,1058.328c2.862-1.716-0.471-1.271,62.85-1.336
  c8.591-0.142,11.031,0.099,17.286,6.496c20.775,19.276,23.084,23.095,28.424,22.843c47.895,0.027,46.856,0.149,51.237-0.543v7.996
  c-3.477-0.39-6.96-0.921-10.448-0.555c-0.61,0.056-45.254,0.689-48.132-0.732c-5.752-2.744-20.136-17.853-24.728-21.611
  c-8.05-6.762-4.516-6.186-15.456-6.508c-62.541-0.11-54.079-1.949-64.729,8.539c-7.901,7.627-17.672,20.072-23.758,20.794
  c-7.156,0.613-116.945,0.568-127.518,0.537c-6.259-0.508-10.015,6.642-23.691,19.616c-9.475,9.084-12.244,14.664-20.196,14.578
  c-30.679-0.121-86.022,0.439-86.022,0.439s-45.892-0.35-54.835,0.049c-6.118,0.201-12.23-0.25-18.335,0.098
  c-3.916,0.067-8.173,0.36-11.608-1.848c-4.672-3.088-10.22-9.896-22.983-20.854c-7.5-6.589-5.981-8.145-15.426-8.1
  c-7.22,0.363-155.552,0.484-156.162,0.439c-0.999,0.025-34.34,0.468-50.633,0.494c-46.703-0.83-48.461,2.441-55.311-3.776
  c-13.01-11.876-14.11-14.979-20.342-14.517c-26.486,0.931-26.127-2.088-32.608,3.904c-22.02,20.912-17.463,17.91-22.099,26.204
  c-2.373,4.794-5.234,9.857-10.205,12.352c-20.861,10.044-38.648-16.84-21.196-29.126c3.52-2.653,7.929-3.843,12.315-3.696
  c6.319,0.323,12.663,0.226,18.958,0.909c5.27,0.44,14.504-12.754,21.647-16.987c2.721-1.631,2.191-1.076,38.086-1.214
  c9.326,0.1,17.851,16.64,26.265,18.189c0,0,49.406-0.378,49.407-0.378c18.055,0.09,209.079-0.127,209.265-0.116
  c4.123,0.238,7.277,3.269,10.223,5.856c3.666,3.684,7.777,6.899,11.376,10.668c18.835,19.789,10.015,12.429,66.199,13.535
  c0.61,0.005,93.217,0.062,103.059-0.043c13.008-0.141,10.509,1.231,17.933-5.666c7.191-7.649,14.663-15.029,22.178-22.361
  c2.8-2.354,5.294-5.831,9.259-6.075c13.798-0.535,129.318-0.421,129.318-0.421c4.681-0.543,7.94-6.11,19.159-16.914
  C2392.151,1065.709,2395.494,1061.214,2400.203,1058.328 M1625.823,1100.574c-1.81,4.948,1.459,14.542,7.704,15.938
  c7.227,1.778,14.359-6.479,11.205-15.231C1641.288,1093.24,1629.265,1092.659,1625.823,1100.574z"></path><path d="M2405.54,1075.194c2.434-2.434,5.874-3.721,9.32-3.501
  c5.679,0.378,11.357-0.238,17.054-0.018c42.015,1.638,26.349-6.433,53.311,17.506c7.063,7.21,14.834,13.681,22.044,20.745
  c2.092,1.738,4.593,4.416,7.606,3.257c13.767-4.869,15.932-8.847,21.659-10.583c13.912-3.485,21.425,8.944,23.465,11.632v12.498
  c-2.58,2.251-4.666,5.203-7.929,6.521c-12.102,4.793-16.256,0.035-24.63-4.666c-2.998-1.813-11.976,0.749-24.655-12.486
  c-38.851-35.644-38.844-37.208-44.027-37.061c-43.95-0.021-44.927,0.054-47.577,2.361c-3.613,3.011-17.807,18.059-21.062,21.05
  c-8.066,7.542-6.929,5.579-20.415,6.191c-2.954,0.116-33.565-0.027-36.585,0.238c-85.901,0.284-80.277-1.295-84.626,3.269
  c-32.195,32.345-33.257,34.501-39.19,34.566c-35.52,0.027-32.658,0.909-36.744,0.281c-1.115-0.154-59.013,0.098-59.013,0.098
  c0,0-86.052,0.268-86.053,0.268c-10.822,0.288-11.236-4.637-27.345-18.464c-15.837-13.141-8.612-11.493-20.83-12.083
  c-1.584-0.074-153.98,0.082-168.953,0.128c-3.08,0.1-82.563,0.135-87.767,0.744c-9.753,1.764-19.195,10.673-29.4,7.161
  c-13.879-5.002-15.828-17.691-11.87-24.966c5.253-9.969,18.685-13.06,29.211-5.288c6.348,3.848,14.064,13.481,18.11,14.548
  c4.933,0.943,81.13,0.207,81.741,0.213c0.048,0,176.696-0.094,176.821-0.091c3.879,0.085,6.954,2.727,9.601,5.288
  c3.105,3.031,6.697,5.532,9.65,8.741c1.551,1.678,15.169,15.021,18.085,15.932c2.048,0.519,35.235,0.515,35.853,0.5
  c8.61-0.57,140.795-0.41,142.145-0.409c7.348-0.252,5.776,1.056,13.218-6.264c31.13-31.011,30.363-31.797,36.213-31.62
  c28.649-0.256,122.753,0.159,125.176-0.226c3.52-0.555,5.85-3.489,8.222-5.862
  C2392.109,1088.644,2398.672,1081.763,2405.54,1075.194 M1688.825,1102.825c-0.675,3.324,1.726,10.52,4.428,12.779
  c7.531,5.704,17.923-3.587,15.182-13.096C1704.118,1092.724,1689.951,1093.805,1688.825,1102.825z"></path><path d="M661.422,1077.841c2.579-1.765,2.923-1.982,34.518-1.555
  c1.068-0.081,24.779-1.014,28.979,1.153c4.52,2.879,7.704,7.46,12.297,10.241c6.136,3.184,13.242,3.3,19.818,5.069
  c17.386,6.045,19.864,23.618,5.929,32.688c-4.178,2.562-9.284,1.446-13.907,1.5c-6.697,0.104-11.925-5.679-13.889-11.632
  c-1.732-6.081-2.153-12.468-4.026-18.512c-1.276-4.099-9.163-14.274-17.482-13.511c-7.335,0.546-42.044,0.293-42.654,0.311
  c-9.017,0.331-16.65,16.36-25.789,17.841c-5.59,0.613-36.698-0.001-57.836,0.549c-7.405,0.477-120.575-0.186-140.309,0.714
  c-10.063-0.583-118.185,0.035-133.423,0.519c-6.015-0.206-9.747,6.372-19.641,14.859c-0.029,0.025-36.399,34.255-39.22,37.018
  c-11.291,9.674-19.073,18.336-25.826,24.124c-5.903,6.152-21.853,19.725-22.465,20.306c-4.099,3.404-7.807,7.24-11.333,11.229
  c-2.458,2.843-5.667,4.868-8.295,7.533c-15.129,15.064-28.888,25.417-28.888,25.417c-2.318,2.22-3.702,5.203-5.923,7.515
  c-13.014,13.492-21.257,19.853-29.607,28.345c0,0-39.543,37.178-50.37,47.833c-10.567,9.074-67.914,64.542-72.079,67.01v-10.321
  c3.904-2.793,7.002-6.49,10.638-9.582c0,0,105.506-99.578,109.543-103.29c0.611-0.576,48.7-46.389,59.581-56.324
  c1.72-1.873,52.236-49.147,52.847-49.754c1.268-1.108,44.507-42.54,50.797-47.937c1.703-1.771,18.994-18.032,21.257-19.61
  c3.129-2.19,7.112-1.61,10.705-1.696c5.879,0.098,93.924-0.44,94.525-0.47c59.025-0.344,204.527-0.902,229.381-0.775
  c5.191,0.293,8.533-4.135,11.864-7.38C654.548,1084.105,657.524,1080.427,661.422,1077.841 M756.338,1120.557
  c2.739-0.439,4.556-2.702,6.435-4.514c3.864-7.059,2.008-12.461-4.227-16.237C738.311,1092.97,740.701,1124.732,756.338,1120.557z"></path><path d="M1170.244,1083.77c0.611-0.056,27.179-0.135,37.439-0.043
  c9.73-0.157,100.686-0.141,101.296-0.14c3.056,0.031,6.106-0.171,9.156-0.415c4.038,0.171,8.094,0.646,12.132,0.134
  c4.075-0.695,8.161,0.415,12.266,0.146c5.032-0.439,10.101-0.476,15.157-0.201c3.239,0.433,6.581-0.165,9.771,0.726
  c1.531,0.445,3.099,0.787,4.703,0.952l-0.037,0.519c1.214,0.244,2.422,0.525,3.66,0.775l-0.024,0.268
  c20.101,7.77,19.057,7.927,24.984,14.767c1.494,3.605,1.702,7.649,1.031,11.473c-2.112,7.639-10.311,16.677-25.795,11.577
  c-10.2-3.519-11.438-14.944-14.889-23.063c-2.494-5.749-4.518-4.518-32.627-4.538c-6.081,0.14-12.193-0.311-18.244,0.293
  c-4.282,0.787-8.558-0.427-12.846-0.293c-0.61,0.003-45.309,0.041-50.639,0.458c-0.61,0.01-30.073-0.516-37.201,0
  c-3.388,0.233-29.981-0.237-37.159,0.116c-46.114,0.094-110.355-0.062-114.746,0.262c-3.257,0.299-6.502-0.494-9.747-0.098
  c-5.636,0.909-11.37,0.171-17.042,0.598c-5.759,1.102-9.239,7.651-22.587,19.336c-44.952,44.891-44.32,38.194-46.211,55.11
  c-1.421,3.77-2.842,7.753-5.923,10.534c-5.734,6.167-15.749,7.356-22.989,3.245c-9.704-4.966-12.285-18.222-4.959-26.295
  c8.317-9.867,23.552-4.734,29.302-14.108c2.818-2.129,5.392-4.569,7.856-7.088c0.001-0.001,18.591-17.682,18.592-17.683
  c7.727-7.727,30.294-29.52,30.577-29.79c2.788-2.08,4.825-5.185,8.222-6.374c6.722-1.208,13.559-0.354,20.342-0.689
  c22.997,0.199,80.87-0.31,104.309-0.561C1154.995,1083.489,1162.625,1084.563,1170.244,1083.77 M1382.443,1095.829
  c-12.172,2.471-10.583,21.235,1.494,21.477c5.77,0.281,10.455-5.319,10.601-10.815
  C1394.764,1100.3,1388.475,1094.963,1382.443,1095.829 M933.561,1165.889c-1.499,8.112,3.503,14.786,8.173,14.962
  c5.493,1.09,13.266-3.897,12.01-13.822C951.432,1157.574,936.148,1155.184,933.561,1165.889z"></path><path d="M2418.928,1086.789c3.006-0.698,26.897-0.549,28.235-0.476
  c8.469,0.341,10.547-1.227,16.774,4.581c0.611,0.565,59.844,55.476,62.631,57.513c2.921,2.111,4.43,1.822,18.842,4.953
  c6.446,1.438,8.022,2.4,14.59,8.015v20.598c-2.226,1.47-4.264,3.208-6.575,4.526c-11.976,6.32-24.4-3.011-26.924-12.492
  c-4.636-17.278-2.019-17.404-12.681-26.863c-60.029-55.472-57-53.521-61.13-53.493c-29.372,0.02-29.969-0.719-33.603,2.47
  c-1.006,0.862-22.778,22.636-23.203,23.063c-6.805,6.611-7.99,3.022-32.926,3.843c-7.794-0.136-43.122,0.025-43.283,0.012
  c-52.603,0.686-49.739-0.734-54.744,4.367c-1.552,1.577-33.331,34.001-37.464,36.323c-3.866,2.097-7.097,1.068-27.979,1.299
  c-0.613-0.011-76.839,0.615-85.333,0.232c-0.628,0.012-108.985,1.491-113.044-0.708c-4.425-2.38-16.316-14.641-23.24-20.714
  c-4.89-4.207-2.72-2.37-52.835-2.604c-37.877-0.24-57.342,0.403-57.342,0.403c-7.843-1.156-103.054,0.263-103.669,0.25
  c-27.04-0.256-54.073,0.201-81.106-0.043c-2.629,0.018-5.514-0.049-7.716,1.604c-4.784,3.781-2.581,8.408-2.934,23.386
  c-0.015,0.611,0.515,27.399,0.781,28.918c0.699,3.24,9.024,11.769,14.115,13.199c11.452,3.252,21.445,1.738,29.406,12.681
  c4.547,6.232,4.716,19.638-8.35,25.112c-9.521,4.355-21.806-1.439-25.265-11.15c-2.074-6.588-2.47-13.608-4.819-20.11
  c-4.407-8.907-13.48-9.022-14.163-21.166c-0.786-31.956-0.893-37.993-0.83-46.985c-0.079-5.764,5.647-11.448,9.991-12.407
  c5.597-1.324,89.901-0.684,91.469-0.781c0.177-0.007,81.681-0.462,101.253-0.403c114.544,0.121,110.072-0.875,113.709,1.202
  c5.339,2.886,19.035,17.867,24.49,21.696c3.335,2.157,2.674,1.206,49.681,1.336c4.044,0.134,8.058-1.019,12.114-0.402
  c1.942,0.307,39.986,0.443,42.77,0.189c1.015-0.063,73.785-0.303,86.023,0.11c20.19-1.392,25.618,2.524,30.864-2.818
  c0,0,29.338-29.25,32.072-32.059c7.286-7.52,6.847-6.468,16.341-7.033c0,0,110.902,0.043,110.903,0.043
  c5.307-0.61,7.984-5.752,11.467-9.125c4.666-4.294,9.107-8.832,13.504-13.407
  C2412.42,1090.785,2415.189,1087.851,2418.928,1086.789 M2542.653,1159.301c-13.811,0.911-9.794,24.16,3.385,22.19
  c5.661-0.628,10.04-6.49,9.217-12.126C2555.456,1162.949,2548.594,1158.459,2542.653,1159.301 M1693.858,1233.173
  c2.013,2.58,3.849,5.978,7.332,6.71c10.457,1.611,13.615-9.449,11.943-14.81C1708.589,1214.862,1690.05,1214.557,1693.858,1233.173
  z"></path><path d="M678.739,1096.39c12.919-7.918,24.205-0.734,27.808,6.886
  c4.886,8.265,0.018,19.769-8.759,22.977c-4.331,1.305-8.918,0.683-13.352,0.58c-5.843-0.073-9.778-5.24-12.474-9.82
  C669.897,1108.809,671.577,1102.021,678.739,1096.39 M682.929,1116.025c1.574,1.824,3.172,3.953,5.703,4.422
  c10.793,3.927,21.118-15.139,6.667-21.172C687.74,1095.994,676.555,1103.346,682.929,1116.025z"></path><path d="M871.724,1094.298c22.792-7.454,36.841,17.901,17.268,31.425
  c-4.526,0.872-9.155,0.702-13.736,0.756c-4.855,0.036-9.076-3.312-11.528-7.277c-1.812-3.306-3.221-7.088-2.641-10.9
  C861.873,1102.24,865.923,1096.488,871.724,1094.298 M870.729,1107.662c0.256,3.727,0.958,7.997,4.154,10.406
  c8.129,5.722,15.775-1.326,16.634-7.252c1.427-6.283-4.258-12.974-10.723-12.315
  C875.609,1097.708,870.241,1102.343,870.729,1107.662z"></path><path d="M2440.302,1115.14c16.084,7.546,11.379,23.064,17.219,32.816
  c3.341,4.199,45.837,43.212,49.754,46.516c6.284,5.147,12.937,1.024,52.725,2.318v7.271c-16.274,0.012-32.542-0.031-48.809,0.031
  c-7.258,0.285-8.926-4.273-38.214-30.693c-10.651-9.252-27.865-27.244-32.499-27.643c-3.453-0.018-7.015,0.915-10.321-0.451
  c-2.482-1.025-5.569,0.012-7.649-1.927c-4.343-3.635-7.692-9.027-7.387-14.852
  C2417.26,1117.418,2430.039,1109.825,2440.302,1115.14z"></path><path d="M1189.445,1120.319c168.773,0.786,149.269-4.35,162.554,7.795
  c1.51,1.631,55.147,52.797,55.732,53.408c32.017,29.74,23.712,28.443,45.399,32.188c5.886,2.022,9.434,4.592,12.937,11.004
  c-0.031,0.244-0.092,0.738-0.128,0.988l0.579,0.018c3.432,13.115,1.516,14.714,10.967,22.623
  c10.013,9.518,10.116,10.511,10.418,17.359c-0.118,18.776,0.398,19.34,0.695,67.047c0.132,6.538,1.166,23.618,0.598,51.31
  c-0.58,8.886-13.872,14.891-17.091,22.776c-1.982,5.758-1.61,12.23-4.825,17.585c-3.196,4.989-8.296,9.229-14.389,9.759
  c-16.694,0.748-25.934-15.096-19.513-26.314c8.206-13.533,19.655-7.78,28.949-14.474c1.086-0.745,11.442-9.466,11.669-14.846
  c0,0-0.793-47.631-0.793-47.632c0.357-16.529-1.479-45.717-0.915-59.166c-0.085-2.946,0.47-6.289-1.513-8.759
  c-9.272-11.266-12.828-12.157-17.317-12.791c-8.276-0.834-18.18-4.129-22.038-11.18c-6.439-14.139,1.356-14.319-13.279-26.997
  c-10.642-10.642-34.57-33.408-51.487-49.797c0,0-22.015-20.95-22.807-21.66c-7.89-6.866-0.974-8.165-47.138-6.984
  c-12.262,0.818-22.961-2.607-24.624,4.245c-0.133,1.833,0.122,38.776,0.159,40.617c-0.045,2.063,0.949,109.843,1.067,130.58
  c-0.842,60.193,9.795,29.082-41.087,82.948c-4.05,4.294-8.735,7.978-12.443,12.589c-4.38,5.953-2.604,14.072-6.49,20.232
  c-6.874,11.649-18.599,11.334-25.265,8.198c-11.669-4.936-16.183-21.996-2.037-31.236c5.22-2.732,9.432-2.981,16.597-4.752
  c6.054-1.25,11.686-9.313,19.128-15.475c33.576-33.832,33.87-32.479,35.756-36.695c1.44-4.444-0.221-42.563,0.177-59.678
  c-0.005-11.931-0.518-96.875-0.573-97.545c0.043-5.317-0.143-46.323-0.201-48.224c0.254-8.393-11.244-5.287-21.684-5.984
  c-4.741-0.306-89.693,0.69-90.305,0.714c-8.905-0.173-77.181-0.727-89.066,0.555c-3.434,0.573-5.868,3.318-8.222,5.636
  c-5.886,5.929-12.01,11.626-17.793,17.652c-5.537,6.03-2.102,15.817-9.521,23.947c-17.336,19.716-45.065-6.964-28.211-22.715
  c4.677-4.735,7.464-5.759,17.994-7.338c11.402-3.099,14.349-10.423,25.594-19.812c12.692-11.126,7.068-10.6,21.428-11.199
  c4.379,0.036,59.123-0.159,59.123-0.159c3.672-0.043,7.362,0.226,11.022-0.226c5.27-0.476,10.552,0.226,15.834,0.073
  C1158.52,1120.014,1173.989,1120.538,1189.445,1120.319 M1003.67,1159.862c-14.801,2.884-5.231,30.063,8.869,19.659
  c4.88-3.391,5.947-10.985,2.33-15.67C1012.472,1160.332,1007.726,1158.813,1003.67,1159.862 M1440.651,1222.273
  c-6.434,5.616,2.595,29.234,16.561,13.34C1463.229,1221.952,1447.688,1214.771,1440.651,1222.273 M1193.837,1404.932
  c-10.808,2.83-7.748,20.115,2.22,21.483c6.911,0.909,12.657-6.606,11.168-13.145
  C1206.414,1407.17,1199.559,1403.468,1193.837,1404.932 M1442.158,1410.354c-1.804,5.325,1.77,17.776,12.406,15.505
  c5.471-1.866,8.936-8.338,7.076-13.907C1458.778,1403.067,1445.093,1401.632,1442.158,1410.354z"></path><path d="M2352.181,1139.203c3.361,3.403,4.581,8.179,5.837,12.657
  c1.68,5.584,0.031,11.188,7.82,17.689c7.804,6.871-0.946,4.985,69.151,5.221c4.943,0.042,7.669,1.723,20.049,14.084
  c40.215,34.53,35.55,38.287,48.895,37.622c3.866-0.218,31.785-0.092,31.785-0.092c4.214-0.278,23.662-0.084,24.282-0.073v7.216
  c-0.115,0.002-34.774,0.122-34.774,0.122c-6.911,0.336-13.828-0.207-20.727,0.281c-4.355-0.14-9.137,0.836-13.047-1.58
  c-4.741-3.031-22.902-21.067-45.058-40.916c-12.9-12.217-1.45-9.301-74.909-9.326c-5.747,0.144-9.091-6.05-15.2-10.29
  c-2.19-1.525-4.953-2.269-6.612-4.447c-7.896-9.443-7.833-4.093-14.298-7.533c-4.132-2.236-7.352,2.841-12.602-2.159
  C2310.2,1145.804,2333.026,1119.11,2352.181,1139.203z"></path><path d="M2378.208,1135.244c5.666-4.767,16.662-5.732,26.411,4.63
  c7.365,7.511,10.388,18.196,17.53,17.719c29.441-0.495,15.304-5.126,65.925,40.343c20.038,17.332,1.221,13.521,71.926,13.443v7.32
  c-2.916-0.013-54.292,0.091-54.292,0.091c-11.335-0.538-1.933,2.422-57.477-46.912c-9.765-9.029-5.709-6.283-22.447-6.88
  c-11.01-0.293-21.965,0.805-32.901,1.842c-9.857,0.903-20.135-6.209-21.788-16.14
  C2370.352,1144.748,2373.224,1138.587,2378.208,1135.244 M2379.867,1146.632c2.587,12.996,11.528,14.235,16.53,10.327
  c3.989-2.72,5.898-8.039,4.398-12.657C2398.492,1132.838,2378.51,1134.287,2379.867,1146.632z"></path><path d="M2271.825,1142.222c6.911-6.288,19.203-5.842,26.204,2.367
  c6.146,5.778,7.234,20.19,10.333,26.289c1.627,3.151,14.33,14.855,16.804,16.731c4.3,3.311,9.565,1.904,19.513,2.104
  c93.247,2.213,82.295-4.83,94.062,5.093c49.744,45.738,48.069,46.38,54.146,46.345c22.367,0.158,44.74-0.244,67.114-0.061v6.929
  c0,0-54.564,0.122-54.567,0.122c-6.104,0.439-18.137,1.069-22.922-2.666c-0.817-0.651-21.426-19.727-22.19-20.501
  c-26.804-23.477-27.851-28.498-35.719-28.241c-114.089,0.303-97.95,2.303-110.567-8.991c-4.227-3.69-7.893-8.271-13.041-10.711
  c-7.722-2.849-16.274-2.684-23.849-5.99c-5.972-2.452-10.577-8.167-11.382-14.602
  C2265.121,1151.03,2267.774,1145.693,2271.825,1142.222 M2274.271,1154.031c3.123,14.034,13.165,13.037,17.103,9.583
  c4.282-3.806,5.85-11.034,2.214-15.78C2288.321,1140.839,2274.29,1141.709,2274.271,1154.031z"></path><path d="M1312.139,1148.505c5.917-3.385,13.529-2.702,19.287,0.714
  c9.137,4.459,11.321,18.299,4.312,25.551c-6.595,8.272-18.7,7.072-28.162,10.217c-3.85,1.404-12.941,8.942-13.157,14.169
  c0,0,0.841,88.481,0.915,119.528c-0.951,42.875,10.285,30.443-30.596,68.065c-12.044,12.278-4.344-3.381-6.161,129.635
  c-0.312,6.688,5.432,8.996,22.941,26.814c0.224,0.23,30.128,29.365,33.182,32.188c83.48,79.45,46.613,59.881,105.31,62.448
  c26.398-0.287,99.426-0.367,113.44-0.256c79.794-1.079,74.762-0.864,80.82,4.776c63.153,61.606,48.11,51.408,69.224,51.956
  c255.99,0.605,245.041-2.075,250.852,2.983c3.995,3.471,8.192,6.844,11.284,11.205h-11.858c-6.943-9.25-8.711-5.979-42.899-6.106
  c-0.455-0.015-48.791-0.311-48.791-0.311c-13.727,0.369-94.579,0.222-95.19,0.201c-85.436,0.959-81.335,0.291-85.175-3.093
  c-10.091-8.668-29.195-28.243-40.642-38.69c-12.976-13.556-14.666-14.698-18.421-14.956c-9.104-0.878-38.897,0.128-43.582-0.085
  c0,0-176.306,0.293-176.309,0.293c-11.598,0-10-2.576-22.379-13.681c-0.08-0.071-52.856-51.333-56.238-54.762
  c-64.663-65.287-54.222-39.493-54.744-85.955c0.001-0.145-0.534-79.301-0.567-79.911c-0.232-4.538,0.268-9.082,0.024-13.614
  c-0.098-2.848-0.329-5.984,1.385-8.436c1.431-2.104,29.796-30.02,30.406-30.614c6.97-7.075,5.715-5.548,5.715-16.243
  c-0.381-148.983-1.67-144.936,0.146-149.288c2.458-5.429,8.271-8.094,11.467-12.968c2.342-3.623,2.647-8.057,3.55-12.169
  c0.836-3.715,1.116-7.576,2.501-11.138C1305.679,1153.342,1308.571,1150.292,1312.139,1148.505 M1312.554,1159.38
  c0.403,1.647,0.573,3.428,1.696,4.807c0.049,0.305,0.152,0.909,0.208,1.208c4.97,4.97,4.243,5.149,9.448,3.94
  c1.933-1.202,3.812-2.489,5.605-3.897c1.409-1.092,2.623-2.824,2.226-4.691C1329.984,1150.166,1314.022,1149.211,1312.554,1159.38z
  "></path><path d="M1131.304,1147.761c3.506-0.639,16.064-3.462,22.495,7.179
  c9.399,12.102-2.738,28.618-16.914,26.948c-7.618-0.598-14.871-6.191-16.518-13.791
  C1117.989,1159.814,1123.515,1150.786,1131.304,1147.761 M1129.633,1162.662c1.07,7.514,5.141,10.831,9.21,11.059
  c7.35,1.086,13.413-7.545,10.857-14.236C1146.64,1149.171,1128.646,1149.424,1129.633,1162.662z"></path><path d="M1757.745,1151.561c11.525-2.177,20.617,5.274,22.739,12.864
  c4.115,10.895-6.572,22.938-18.384,21.94c-11.879-1.52-21.428-11.99-17.463-23.014
  C1746.735,1157.63,1751.736,1152.903,1757.745,1151.561 M1757.86,1175.398c2.916,2.58,7.417,2.842,10.815,1.061
  c9.588-4.545,6.37-21.175-5.294-20.635C1756.824,1155.413,1747.985,1164.323,1757.86,1175.398z"></path><path d="M1632.38,1151.817c13.919-3.499,26.368,11.049,21.946,22.733
  c-1.476,3.105-3.044,6.472-6.161,8.259c-3.855,2.312-8.369,4.331-12.956,3.507c-16.411-2.692-21.188-16.982-14.548-26.777
  C1623.322,1155.538,1627.652,1152.702,1632.38,1151.817 M1628.391,1172.726c1.141,1.446,2.202,2.977,3.556,4.257
  c7.539,6.297,20.469-4.768,14.517-14.663c-1.5-2.55-4.014-4.477-6.868-5.221
  C1634.563,1155.183,1623.109,1159.494,1628.391,1172.726z"></path><path d="M1693.9,1151.89c12.43-3.464,19.232,5.688,22.147,8.466
  c4.983,12.61,2.336,7.326,4.233,13.913c2.837,9.977,1.323,9.818,9.064,16.841c2.733,2.196,4.947,4.953,6.893,7.862
  c1.12,37.57,0.066,39.622,2.537,42.636c2.31,2.544,31.803,30.49,32.108,30.724c6.058,5.128,6.864,1.748,32.792,2.91
  c17.362-0.36,58.646,0.003,69.468-0.354c13.45,0.634,26.893-0.61,40.349-0.214c4.514,0.037,9.174,1.086,13.608-0.232
  c3.36-1.731,2.591-0.784,57.452-55.994c6.124-5.658,5.712-5.414,20.36-5.313c0.611,0.001,108.34-0.24,151.319-0.092
  c13.948-0.021,12.855,1.834,20.177,8.07c0,0,25.252,23.587,25.252,23.587c4.215,4.3,8.875,8.125,13.108,12.419
  c3.099,2.556,5.941,6.277,10.302,6.447c25.937,0.865,32.106-1.739,38.007,3.099c2.216,1.853,21.237,19.5,21.41,19.635
  c2.787,2.19,4.995,5.319,8.448,6.551c7.228,1.403,14.548-0.134,21.831,0.128c0.611-0.008,44.99,0.204,48.333,0.592
  c4.697,0.104,9.454,0.415,14.139-0.177c3.568-0.964,7.131,0.464,10.735,0.329c38.874-0.042,36.688,1.142,41.355-3.812
  c17.223-17.808,15.513-17.436,30.675-24.758c6.628-2.695,11.752-8.232,20.08-8.045c13.677,1.156,21.593,13.865,18.177,22.312
  c-2.05,5.965-7.929,11.229-14.542,10.479c-4.983-0.811-9.351-3.55-14.017-5.288c-3.215-1.342-6.813-0.397-10.058-1.531
  c-2.598-0.671-4.928-2.184-7.594-2.519c-3.815,0.082-5.195,3.212-18.079,15.847c-3.493,3.646-15.449,2.731-17.945,2.806
  c-0.001,0-24.349,0.146-24.35,0.146c-7.563,0.214-15.127-0.47-22.672,0.14c-3.477,0.055-6.844,1.129-10.314,0.958
  c-0.195,0.004-51.23,0.366-51.23,0.366c-14-1.166-16.265,1.567-21.141-2.373c-0.921-0.75-20.646-18.695-25.356-23.471
  c-5.346-4.936-2.703-3.797-32.803-3.818c-7.51-0.157-8.57,0.635-14.975-5.099c-0.61-0.575-31.966-29.288-40.69-38.007
  c-10.419-9.375-4.063-7.384-41.331-7.521c-0.61-0.009-39.833,0.066-43.289,0.238c-0.61,0.023-24.688,0.314-29.888,0.061
  c0,0-59.733,0.256-59.733,0.256c-4.102-0.362-6.67,2.13-17.628,13.651c0,0-13.01,12.711-41.258,41.038
  c-5.937,5.361-6.197,6.984-14.328,6.984c-19.662-0.04-135.921,0.057-137.845,0.128c-17.328,0.605-18.109-0.081-25.813-7.905
  c-1.988-2.082-28.453-27.042-29.064-27.589c-4.853-4.614-4.484-5.917-4.502-20.745c-0.353-27.442,0.862-24.987-8.332-33.53
  c-7.829-7.471-25.565-2.484-35.195-14.279c-4.026-4.788-4.819-11.992-1.915-17.53
  C1684.665,1156.764,1688.856,1153.031,1693.9,1151.89 M1697.133,1156.745c-3.648,1.305-6.893,4.77-6.636,8.85
  c2.179,21.363,23.656,12.444,20.031-0.75C1709.692,1158.783,1702.775,1155.196,1697.133,1156.745z"></path><path d="M812.978,1154.214c8.792-1.834,20.337,4.725,20.47,13.834
  c0.085,7.569,2.51,13.288-8.826,19.446c-9.176,4.367-20.283,2.771-25.935,7.021c-9.312,6.429-7.165,11.755-22.233,11.107
  c0,0-95.32,0.686-103.681,0.342c-4.195,0.143-64.495-0.23-79.331,0.683c-6.44,0.88-29.307,0.219-45.735,0.561
  c-6.333,0.251-8.67,6.775-26.301,21.751c-10.811,10.458-5.291,0.829-7.862,84.333c-2.301,54.392,0.756,67.375-3.391,72.786
  c-3.758,4.945-17.593,16.474-24.777,24.008c-10.934,11.544-19.296,15.643-19.208,22.074c0,0.001-3.702,178.12-3.702,178.12
  c-1.732,86.439-1.488,76.324-2.092,98.216h-10.339c0.543-2.936,1.19-51.041,1.189-53.048c0.165-2.669,2.015-96.62,2.165-102.918
  c0,0,2.271-116.82,2.293-117.338c0.931-10.063-1.653-7.689,9.418-18.573c29.82-29.536,36.584-32.356,36.677-38.684
  c0.877-39.182,2.348-130.017,2.489-138.51c-0.236-7.048,2.44-9.533,13.669-20.031c8.561-7.255,18.168-18.405,23.471-20.257
  c3.775-0.77,50.666-1.1,55.823-0.299c7.95,0.43,82.474-0.223,83.497-0.299c0.005,0,34.335-0.107,35.408-0.134
  c67.004,0.261,65.37,0.681,68.925-2.885c9.828-9.563,7.481-4.842,12.541-27.503
  C799.285,1160.857,805.756,1155.257,812.978,1154.214 M811.399,1180.095c5.691,4.644,13.467,1.117,15.981-5.843
  c1.309-5.847,0.125-9.776-6.045-13.407c-1.507-0.36-3.019-0.787-4.569-0.726C806.797,1159.767,802.582,1173.343,811.399,1180.095z"></path><path d="M872.84,1155.08c5.276,0.518,10.906-1.183,15.896,1.208
  c6.953,3.641,11.345,12.547,8.497,20.147c-3.63,10.649-15.84,14.777-25.539,11.089c-11.16-4.908-10.286-12.594-9.833-20.818
  C862.33,1160.82,867.655,1156.837,872.84,1155.08 M870.058,1165.2c-1.753,5.483,1.838,15.144,8.228,15.554
  c9.647,1.814,18.368-12.803,6.807-20.531C881.569,1157.709,872.977,1158.001,870.058,1165.2z"></path><path d="M742.632,1156.886c2.824-1.738,6.252-1.555,9.436-1.372
  c3.666,0.195,7.661-0.415,10.949,1.641c13.739,8.186,9.96,29.612-8.015,32.151c-7.552,0.911-10.871-0.945-24.886-1.69
  c-160.801-0.643-105.107,1.624-190.893,1.189c-8.008-0.062-8.293,1.158-14.157,6.606c-27.694,25.7-28.97,27.102-29.333,31.206
  c-0.087,0.928-1.994,113.33-1.988,113.483c-0.376,9.743,0.638,28.997-2.342,33.231c-1.641,2.37-28.204,27.382-28.814,27.936
  c-8.143,8.366-15.626,12.179-15.591,19.342c0,0-1.944,109.008-3.989,190.923c0.006,0.611-0.932,89.991-3.44,96.965h-12.864
  c4.04-6.081,4.556-6.046,4.654-15.89c-0.025-7.502,1.567-87.018,1.574-87.145c0.396-6.069,2.401-122.885,2.8-128.744
  c0.099-1.472,0.989-47.208,0.817-56.72c-0.272-10.851,3.983-8.682,43.252-47.827c4.509-4.557,2.928-3.19,4.203-61.35
  c-0.009-0.493,1.558-85.321,1.629-86.468c0.214-4.636,4.001-7.71,7.161-10.571c4.849-4.691,9.515-9.564,14.474-14.145
  c14.669-12.333,15.567-19.172,27.027-19.5c0.613-0.004,56.318-0.225,61.173,0.299c9.58,0.532,85.87-0.219,85.87-0.219
  c7.652,0.699,31.065-0.289,37.195-0.055c8.361-0.321,6.862-0.024,12.998-9.412C734.55,1165.669,737.374,1160.021,742.632,1156.886
   M743.205,1168.725c-0.44,7.788,4.157,15.228,12.163,13.706c3.129-0.537,5.166-3.099,7.191-5.288
  c1.281-2.843,2.287-6.087,1.269-9.168C760.651,1156.831,743.871,1158.277,743.205,1168.725z"></path><path d="M2116.328,1175.679c1.769-0.775,3.721-0.823,5.508-0.006
  c3.965,1.714,8.375,0.275,12.449,1.574c2.916,0.988,5.563-1.318,8.503-0.952c6.508,0.445,13.023-0.201,19.537,0.092
  c32.397,1.124,33.119-2.978,40.861,4.501c0.029,0.028,28.548,26.531,38.909,36.085c3.399,2.99-3.782,2.201,123.95,2.299
  c13.825-0.157,10.535-3.56,25.612-11.467c11.161-6.001,22.567,0.175,26.704,8.637c4.857,9.244-0.981,20.945-11.241,23.307
  c-12.732,2.78-18.844-6.109-30.577-12.004c-5.727-2.855-20.646-1.074-25.149-1.11c-7.929,0.037-15.847-0.299-23.764-0.256
  c-1.816-0.166-49.225,0.186-49.443,0.208c-3.015,0.024-31.831,0.051-32.999-0.012c-4.43-0.32-7.274-1.721-23.423-17.829
  c-1.432-1.425-19.496-17.81-21.556-20.025c-7.424-8.004-12.99-4.263-21.971-5.13c-5.36-0.524-33.301,1.085-37.287-0.061
  c-1.848-0.439-3.708-1.44-5.624-0.891c-5.292,1.391-22.113-0.378-27.344,0.47c-2.477,0.39-4.983,0.451-7.46,0.275
  c-3.745-1.031-7.631-0.11-11.431-0.366c-3.861-0.323-7.753-0.012-11.577-0.634c-2.403-0.47-4.343,1.464-6.667,1.531
  c-12.661,0.189-155.262-0.079-183.47,0.281c-12.569,1.617-4.497-2.44-23.685,15.292c-13.678,14.316-13.126,10.389-15.651,22.959
  c-1.309,6.933-1.904,20.64-14.535,24.405c-12.215,3.63-26.613-6.091-24.959-19.092c0.756-7.618,7.454-13.645,14.761-15.029
  c4.02-0.677,7.978-1.653,11.937-2.653c1.168-0.333,6.759-0.891,9.954-4.105c6.544-6.188,21.821-22.47,28.314-27.448
  c1.995-1.494,4.569-1.629,6.978-1.653c8.344-0.018,16.695-0.311,25.051-0.14c0.001,0,174.406-0.061,174.406-0.061
  c8.729-0.14,17.463-0.012,26.198-0.055C2109.545,1176.508,2113.089,1177.051,2116.328,1175.679 M2395.213,1212.478
  c-7.859,5.324-1.913,14.882-1.293,16.414c4.81,7.111,13.362,4,16.158,0.281c3.08-3.617,3.306-9.235,0.72-13.175
  C2407.687,1210.892,2400.221,1209.263,2395.213,1212.478 M1818.265,1223.621c-0.909,5.02,1.244,10.449,5.233,13.626
  c11.715,6.82,22.846-12.966,9.442-19.214C1827.707,1214.991,1819.851,1217.54,1818.265,1223.621z"></path><path d="M2105.598,1194.801c73.129-0.348,67.013-0.52,71.451,0.58
  c5.254,2.905,17.656,16.043,24.191,21.513c4.719,4.751,18.701,17.458,21.44,20.141c1.94,1.75,3.977,3.776,6.709,4.135
  c13.188,1.019,26.424-0.415,39.629,0.146c8.101,1.012,10.99-1.558,23.923,1.098c6.228,2.306,12.187,5.447,18.762,6.758
  c6.057,1.312,11.998,4.233,15.578,9.485c7.346,9.121,1.101,23.468-10.071,24.99c-2.263,0.043-4.239-1.177-6.228-2.043
  c-3.019-1.58-6.557-0.793-9.747-1.708c-4.361-2.745-8.302-6.984-8.545-12.388c-0.226-4.044-3.251-7.008-4.648-10.625
  c-0.97-2.025-1.293-4.416-2.891-6.069c-2.723-2.875-0.774-2.384-56.378-2.165c-6.949,0.464-10.773-6.041-19.635-13.34
  c-9.881-9.637-20.202-18.805-30.199-28.314c-2.33-2.379-5.172-5.008-8.747-4.764c-0.343,0.001-60.307,0-60.307,0
  c-0.501,0.003-70.277,0.238-70.78,0.207c-2.539-0.067-57.473,0.07-62.216,0.36c-3.758,0.358-1.422-1.218-56.549,53.969
  c-6.931,7.133-8.768,7.405-14.23,7.375c-11.037,0.559-51.188,0.232-51.188,0.232c-5.35,0.232-23.788-0.098-23.788-0.098
  c-4.235,0.316-24.952-0.071-29.321,0.159c-12.224-0.657-13.199-7.832-20.629-12.266c-5.154-3.138-19.41-2.527-27.235-7.655
  c-9.108-6.02-11.417-14.54-5.99-24.307c8.289-10.855,22.905-9.918,30.73-0.335c4.384,4.681,6.283,16.414,8.259,23.569
  c1.078,4.401,8.662,10.677,11.345,12.211c5.521,2.6,21.06-0.005,30.382,0.866c8.717-0.442,36.8-0.018,76.873-0.226
  c3.025,0.189,5.313-2.086,7.167-4.178c3.599-4.16,7.923-7.6,11.571-11.717c7.502-6.841,37.383-36.87,38.013-37.506
  c7.565-7.096,6.864-8.082,18.244-7.972c3.751-0.19,70.578-0.297,97.002-0.128
  C2086.897,1194.642,2096.248,1194.508,2105.598,1194.801 M1756.385,1222.627c-2.349,4.272,0.709,11.762,3.891,15.023
  c3.58,2.952,9.339,2.3,12.596-0.878c4.898-4.367,4.953-13.279-0.579-17.14C1768.551,1216.581,1760.027,1215.633,1756.385,1222.627z
  "></path><path d="M1063.147,1197.18c174.954,0.74,146.707-6.292,168.953,14.743
  c8.473,8.513,4.828-2.597,6.264,92.183c-0.186,9.046-0.431,9.117-6.606,15.463c-6.867,6.673-7.383,7.67-14.285,7.734
  c-42.787-0.554-37.773,0.093-44.911,6.917c-2.117,2.001-3.971,4.605-3.733,7.673c0.027,1.291,0.648,29.974-0.683,32.822
  c-1.343,2.839-2.524,3.772-13.907,14.981c-4.517,4.58-4.277,5.66-4.337,11.979c0.839,44.464-1.394,48.452,1.806,52.39
  c0.837,1.04,16.184,16.103,17.189,16.975c0.679,0.642,30.011,29.119,40.745,39.794c8.03,7.707,11.498,9.135,10.991,20.159
  c-0.923,14.332,0.787,15.806,2.97,18.256c5.553,5.751,40.8,39.757,40.8,39.757c0.61,0.611,69.869,68.488,74.415,72.597
  c12.103,11.801,13.106,14.995,20.775,14.584c6.994-0.387,107.948-0.434,108.585-0.433c0.001,0,103.674-0.317,103.675-0.317
  c4.367,0.043,9.07-0.531,13.078,1.641c5.861,3.358,18.5,18.227,28.68,26.966c1.5,1.275,2.617,2.916,3.855,4.453h-11.699
  c-4.02-4.987-14.146-14.611-16.554-16.75c-9.334-8.336-5.422-8.45-19.141-8.399c-8.476,0.144-151.645,0.614-163.518,0.323
  c-55.208,0.825-54.765,0.808-57.8-0.872c-3.51-1.904-60.025-58.26-92.824-89.591c0,0-36.962-36.195-39.513-38.598
  c-9.039-8.316-2.887-17.158-5.636-29.022c-1.141-3.636-66.009-65.923-66.62-66.51c-2.422-2.159-3.501-5.38-3.416-8.558
  c0.073-16.695-0.476-33.383-0.22-50.078c0-10.024-0.471-9.041,12.035-21.568c6.841-6.989,7.187-6.309,7.228-15.609
  c-0.332-30.384-1.125-27.314,6.142-34.481c9.697-8.975,5.755-8.852,24.74-8.948c21.731-0.595,27.271,1.399,32.328-3.501
  c8.83-8.406,6.062-6.391,5.88-42.764c0,0,0.125-40.497,0.006-48.193c0.017-7.031-3.909-8.059-9.509-14.084
  c-8.208-7.63-5.608-6.677-17.158-6.923c-8.5,0.416-41.666-1.079-56.135,0.116c0,0-78.233-0.136-101.223,0.195
  c-69.126-0.314-66.678-0.384-69.56,1.769c-10.619,7.892-10.539,13.497-11.443,17.073c-0.951,4.471-1.995,8.924-3.263,13.328
  c-2.196,9.479-13.212,14.889-22.331,12.84c-11.742-2.192-20.726-16.957-9.747-29.016c3.477-3.651,8.723-5.939,26.009-8.936
  c7.35-1.446,10.845-8.991,16.89-12.632c3.715-2.336,8.283-1.348,12.431-1.525c5.6-0.268,62.801-0.061,62.801-0.061
  C1052.137,1197.21,1057.645,1197.363,1063.147,1197.18 M932.884,1227.428c-1.215,3.637,0.426,11.197,5.514,14.712
  c5.545,2.824,13.468-1.22,14.2-7.454l0.525,0.275c0.012-2.348,0.732-4.886-0.421-7.063
  C949.12,1219.658,936.187,1218.275,932.884,1227.428z"></path><path d="M318.942,1214.417c2.237-13.716,22.053-20.678,32.462-9.192
  c6.728,6.819,6.82,20.589-7.088,27.149c-2.3,0.689-4.624,1.464-7.039,1.561c-5.221-0.134-10.644-1.915-14.157-5.941
  C319.759,1224.427,317.96,1219.272,318.942,1214.417 M327.707,1209.788c-0.866,3.19,0.537,6.337,1.189,9.424
  c3.29,13.235,20.272,6.039,19.994-5.398C347.877,1202.782,331.703,1199.474,327.707,1209.788z"></path><path d="M1885.488,1212.795c15.663-3.341,25.951,9.861,23.417,21.099
  c-1.965,10.667-15.447,17.047-25.021,11.943c-5.587-2.336-10.528-7.057-11.669-13.175
  C1870.264,1223.92,1876.681,1214.35,1885.488,1212.795 M1881.444,1227.775c1.092,2.781,1.848,5.703,3.117,8.436
  c2.403,2.879,6.398,4.111,10.04,3.172c6.976-1.493,13.08-12.787,2.11-20.629C1885.382,1215.128,1881.17,1222.553,1881.444,1227.775
  z"></path><path d="M1497.634,1218.839c12.276-13.011,37.027-1.775,31.755,17.091
  c-5.476,12.392-17.788,15.136-28.022,9.424c-4.989-3.025-8.576-8.539-8.643-14.45
  C1492.296,1226.348,1494.706,1222.121,1497.634,1218.839 M1501.806,1223.865c-2.285,9.418,3.81,17.947,12.492,15.932
  c5.599-1.775,9.296-8.466,7.179-14.084C1519.007,1218.882,1508.433,1213.867,1501.806,1223.865z"></path><path d="M1628.988,1214.301c16.973-7.135,21.901,4.992,57.739,38.36
  c7.726,7.948,17.548,1.724,30.004,4.813l-0.037,0.329c3.166,1.598,27.03,25.12,34.719,32.401c7.623,4.845-1.46,2.956,35.713,3.282
  c1.498,0.017,68.98,0.018,68.98,0.018c113.787-1.548,81.698,6.736,108.396-17.048c4.902-4.035,40.935-42.86,46.991-44.515
  c4.715-0.128,9.467,0.183,14.163-0.476c4.093-0.525,8.149,0.525,12.254,0.39c2.586-0.056,82.546-0.427,82.546-0.427
  c2.568,0.531,5.185-0.122,7.789,0.152c11.749,0.915,20.833-1.529,26.417,1.976c5.959,3.874,43.808,41.45,49.657,45.637
  c3.547,2.682,6.46,1.384,36.616,1.641c12.836-0.163,11.183,2.684,21.519,10.845c27.418,24.23,23.631,26.197,31.035,26.448
  c12.193-0.024,24.386,0.012,36.585-0.018c3.77,0.171,7.6,1.214,11.37,0.25c5.557,0.256,11.095-0.543,16.664-0.329
  c7.564,0.147,68.897,0.04,71.384,0.049c5.714,0.231,9.963-6.983,18.579-15.42c2.16-2.264,2.442-2.692,49.15-2.183
  c7.159,0.602,13.502-7.001,14.877-11.297c4.139-12.125,0.007-25.434,15.603-31.346c17.303-5.931,35.12,18.6,16.786,31.358
  c-8.417,5.409-21.816,3.985-27.637,8.936c-3.477,2.635-5.91,6.551-9.881,8.509c-3.245,1.61-6.948,1.031-10.424,1.122
  c-45.052,0.086-40.225-1.568-48.62,6.88c-15.814,15.286-3.573,9.153-69.072,10.784c-0.001,0-26.313-0.079-26.314-0.079
  c-3.038-0.244-5.923-2.013-8.991-1.25c-2.846,0.587-41.461-0.021-44.649,0.311c-3.733,0.183-7.99,0.72-10.998-1.995
  c-2.33-2.104-5.612-2.251-8.149-3.898c-37.618-32.84-27.028-29.891-43.636-30.26c-8.155,0.25-16.304-0.134-24.459-0.006
  c-10.336-0.355-8.945-0.646-16.451-6.789c-0.447-0.359-36.456-33.953-36.872-34.347c-5.749-5.269-7.052-8.226-14.944-8.186
  c-8.288,0.102-96.777,0.11-100.07,0.238c-42.71,3.267-12.394-14.935-83.638,54.439c-10.108,10.067-8.871,6.796-23.05,7.576
  c-10.436-0.285-45.717,0.22-45.717,0.22c-21.095,0.251-61.939-0.427-82.991,0.036c-0.001,0-23.093,0-23.093,0
  c-11.523-0.289-30.089,1.513-34.78-1.677c-3.711-2.57-26.892-24.389-27.723-25.271c-7.812-7.518-9.567-9.71-13.785-9.674
  c-16.722-0.068-20.081-0.05-23.246-2.239c-5.845-3.916-16.399-16.268-21.965-20.098c-6.656-4.559-12.384,1.012-16.957,3.855
  c-2.184,0.627-19.56,3.886-25.246-7.802c-1.61-3.42-2.538-14.508,1.409-19.171
  C1624.286,1217.205,1626.652,1215.729,1628.988,1214.301 M1634.935,1218.967c-14.749,4.927-1.481,29.009,9.534,19.927
  c3.806-3.196,6.155-8.966,3.782-13.675C1646.159,1220.139,1640.151,1217.51,1634.935,1218.967 M2524.714,1273.98
  c3.018,4.977,2.311,11.688,13.041,9.955c1.47-0.775,3.007-1.525,4.227-2.696c3.635-3.52,4.703-9.778,1.696-14.005
  C2535.422,1254.531,2519.362,1265.978,2524.714,1273.98z"></path><path d="M1305.826,1221.773c4.953-8.035,18.31-12.467,29.675-2.733
  c10.826,10.666,1.953,22.91-3.123,30.474c-6.861,10.457-5.346,5.783-5.551,21.66c-0.188,17.121,0.537,70.096,0.537,70.096
  c-0.226,3.343,0.287,7.094-1.812,9.973c-2.763,3.898-6.752,6.673-9.954,10.18c-49.046,50.657-37.177,26.536-38.232,70.774
  c0.514,77.133-0.841,75.191,3.538,79.313c3.185,3.181,38.569,37.105,52.578,51.072c9.828,9.026,54.542,54.228,58.751,55.799
  c4.553,1.298,45.301-0.149,69.182,0.256c13.604,0.096,155.144-0.264,157.449,0.104c3.885,0.769,6.832,3.69,9.534,6.398
  c4.081,4.288,8.826,7.868,12.962,12.108c3.791,3.55,35.854,36.956,41.319,37.848c2.854,0.407,37.616,0.165,93.525,0.232
  c0,0,112.244-0.073,112.245-0.073c0.617-0.02,41.722-0.065,45.149,0.146c7.514,0.629,16.963,13.542,28.192,23.142
  c3.3,3.166,6.771,6.216,9.467,9.955h-11.784c-2.789-3.61-16.225-16.42-16.835-16.981c-8.457-7.651-7.202-8.703-17.597-8.57
  c-8.993,0.347-76.251,0.055-76.251,0.055c-2.107,0.097-145.026,0.185-146.402,0.128c-38.368-0.526-13.831,6.796-70.792-43.49
  c-22.551-19.496-0.682-11.508-58.532-13.285c-12.127,0.031-118.308,0.421-118.308,0.421c-79.862-0.35-60.872,5.798-89.396-21.031
  c-2.655-2.442-84.628-82.242-88.084-85.712c-14.249-13.571-6.621,0.079-9.479-118.911c-0.51-7.401,7.955-11.128,46.693-50.682
  c4.417-4.618,3.583-5.476,3.526-18.256c0.078-11.258-0.244-64.716-0.561-72.03c-0.137-4.758-3.26-7.151-11.394-19.141
  C1302.087,1235.461,1302.007,1227.422,1305.826,1221.773 M1313.743,1234.979c0.195,0.232,0.573,0.701,0.769,0.933
  c2.098,5.758,10.76,6.868,14.639,2.361c3.044-3.282,5.349-8.454,2.885-12.705
  C1326.138,1215.397,1308.755,1217.775,1313.743,1234.979z"></path><path d="M1369.072,1221.511c6.562-9.93,24.486-11.731,32.572,1.976
  c0.22,0.238,0.665,0.714,0.884,0.946c0.364,2.517,5.212,15.92-9.692,22.684c-12.276,5.634-27.94-4.177-26.722-18.195
  C1366.883,1226.372,1367.468,1223.689,1369.072,1221.511 M1376.325,1226.055c-0.821,11.066,6.12,15.817,12.651,13.913
  c6.583-1.424,9.641-10.196,6.758-15.365C1391.163,1216.079,1377.938,1216.68,1376.325,1226.055z"></path><path d="M996.802,1216.57c8.818-5.069,22.22-0.967,26.417,8.954
  c5.468,12.326,0.943,19.406,11.382,28.394c3.068,2.623,5.801,5.612,8.698,8.424c2.342,2.415,4.929,5.221,4.892,8.82
  c-0.205,251.845,1.177,244.513-2.171,249.455c-5.193,7.891-4.806,0.163-4.532,45.747c0.04,7.568,2.184,7.749,7.649,13.468
  c9.599,9.118,7.577,9.05,15.847,8.948c0,0,31.804-0.049,34.133-0.085c8.364-0.017,10.936,0.085,18.945,8.179
  c7.526,7.858,39.415,38.56,46.973,46.351c0,0,13.899,13.38,56.092,54.945c3.33,3.361,6.923,6.49,9.741,10.327h-11.974
  c-5.831-7.627-24.172-23.797-47.113-46.979c-0.61-0.585-45.151-43.847-47.583-46.369c-3.855-4.099-8.24-7.643-12.028-11.797
  c-2.824-2.879-5.715-6.496-10.064-6.771c-18.796-0.64-42.772,1.851-48.455-1.189c-3.311-1.851-18.008-16.839-18.555-17.451
  c-4.518-4.879-1.909-7.93-2.72-46.973c0.012-2.714-0.762-5.691,0.72-8.143c4.832-8.274,7.115-0.585,5.642-31.511
  c0.401-5.556,0.363-93.885,0.354-94.495c0,0-0.111-21.426,0.079-70.17c-0.079-52.601,0.725-54.971-2.604-58.824
  c-2.885-3.385-6.435-6.112-9.46-9.363c-2.031-2.147-4.325-4.19-7.179-5.13c-10.736-3.442-34.503-1.343-32.7-23.429
  C987.872,1224.207,991.886,1219.291,996.802,1216.57 M996.796,1234.052c2.111,8.231,9.283,10.201,14.975,5.971
  c6.414-5.142,5.949-12.18,2.458-15.713C1008.851,1217.443,993.221,1218.995,996.796,1234.052z"></path><path d="M1119.861,1218.675c9.107-8.683,25.742-4.408,30.321,7.771
  c2.245,6.893-0.372,15.09-6.435,19.171c-5.044,3.94-11.644,4.221-17.646,5.508c-13.075,3.125-5.803-1.962-52.182,43.673
  c-8.861,8.699-6.279,7.717-6.764,16.628c-0.027,0.617-0.166,52.393,0.006,59.154c2.204,110.327-3.903,116.712,3.483,123.59
  c4.095,3.851,35.267,34.316,35.878,34.914c13.831,13.471,11.258,10.243,11.687,26.924c0.451,13.528-8.433,0.771,70.359,78.959
  c2.58,2.337,70.803,67.996,74.659,73.531h-12.108c-5.331-7.21-12.272-12.962-18.793-19.037
  c-5.531-5.086-56.686-56.165-62.618-61.301c-62.345-60.988-60.708-57.991-60.459-63.588c0.203-21.782,1.108-20.234-6.679-27.259
  c0,0-35.75-35.027-39.159-38.251c-5.908-5.684-5.263-7.011-5.301-17.426c-0.022-4.692,0.003-98.686,0.006-98.844
  c-0.015-3.264-0.044-80.74,0.073-81.832c0.588-5.282,10.679-12.593,15.096-17.244c0.617-0.606,23.373-23.438,26.777-26.253
  c8.397-8.627,10.018-6.458,13.468-27.79C1114.274,1225.409,1116.555,1221.462,1119.861,1218.675 M1124.283,1222.511
  c-4.903,4.903-1.194,14.551,2.47,16.743c6.569,4.742,16.568-0.97,16.005-10.058
  C1141.876,1220.322,1129.811,1215.932,1124.283,1222.511z"></path><path d="M1182.736,1218.766c5.685-5.191,19.192-9.53,30.144,5.819
  c4.667,13.106-4.305,22.041-12.553,23.935c-17.953,1.637-23.819-9.875-23.404-17.628c0.043-1.677,0.39-3.3,0.665-4.928
  C1178.966,1223.347,1180.473,1220.718,1182.736,1218.766 M1186.017,1228.477c0.207,5.404,3.696,11.492,9.57,11.98
  c7.368,0.689,13.023-8.027,10.601-14.694C1201.25,1214.23,1185.042,1217.851,1186.017,1228.477z"></path><path d="M1557.367,1223.268c2.202-4.898,6.948-9.479,12.675-9.021
  c4.074,0.189,8.234-0.22,12.266,0.604c4.776,1.604,9.186,5.868,9.326,11.168c0.092,3.66,0.5,7.338,0.122,10.991
  c-0.577,5.972-6.157,4.229-5.032,14.651c0.214,3.379,3.276,5.398,5.435,7.631c4.959,4.416,9.192,9.589,14.352,13.791
  c6.4,5.403,4.349,9.661,5.185,15.804c1.397,73.632-0.202,78.786,3.044,82.838c1.321,1.641,58.228,56.199,58.892,56.787
  c13.51,13.075,13.73,14.23,20.848,14.2c9.163-0.425,11.279-0.412,56.141-0.36c22.843,0.484,31.256-1.914,36.238,2.934
  c1.245,1.242,14.393,13.296,16.92,16.615c2.324,3.051,2.659,6.28,2.726,25.789c0.154,5.663-0.412,7.677,8.814,15.164
  c4.758,3.852,13.682,1.349,32.371,2.208c4.341,0.159,45.023-0.088,45.637-0.091c0,0,85.375,0.134,85.376,0.134
  c14.77-0.063,6.061-5.668,65.888,51.584c4.289,4.394,30.548,29.086,87.175,82.973c7.229,7.075,9.206,2.438,42.734,4.068
  c2.659,0.061,5.264,1.281,7.948,0.695c5.011-1.068,54.21-0.812,59.733-0.274c0,0,110.58-1.048,121.986-0.506
  c9.115,0.292,9.496,0.228,16.743,6.703c0.613,0.565,57.937,54.126,60.807,58.148h-10.998c-3.361-4.355-7.783-7.673-11.516-11.656
  c-3.914-3.78-32.731-30.565-38.848-36.872c-10.544-10.233-9.482-9.255-21.001-9.339c-11.083,0.435-57.805,0.233-62.875,0.067
  c-14.573,0.155-45.378,0.152-46.308,0.134c-2.965-0.018-5.599-1.738-8.533-1.75c-14.379,0.964-58.716-0.546-62.771,1.049
  c-3.938,1.446-5.123,0.942-37.25,1.043c-10.943-0.089-9.766-0.815-17.732-7.942c-6.696-5.987-46.619-44.339-47.229-44.923
  c-6.67-5.812-83.859-79.774-88.121-83.327c-5.693-4.796-42.074-1.173-119.009-2.275c-59.464-1.268-51.314,3.869-62.564-6.405
  c-8.008-7.643-8.888-7.457-9.521-16.774c-0.439-18.09,0.098-21.14-2.489-24.209c-0.568-0.722-12.233-14.687-17.469-14.676
  c-22.017-0.469-39.129-0.686-53.134-0.232c-0.614,0.009-34.921,0.419-37.781-0.378c-5.555-1.345-21.635-18.205-22.203-18.817
  c-0.177-0.192-37.905-36.047-44.545-42.721c-21.291-21.321-14.774-0.005-17.28-92.933c-2.753-19.859,9.34-5.035-32.212-44.771
  c-3.178-2.958-6.655-5.575-9.741-8.613C1555.696,1237.358,1554.171,1229.422,1557.367,1223.268 M1565.302,1222.969
  c-3.095,6.509,2.518,18.464,11.406,16.03c5.691-0.976,9.534-7.545,7.814-12.992
  C1581.636,1217.681,1570.523,1213.847,1565.302,1222.969z"></path><path d="M681.66,1217.052c12.762-5.691,28.771,6.939,25.118,20.08
  c-2.84,9.822-11.347,14.041-19.336,13.999c-12.342-0.685-21.123-13.615-29.26-13.505c-0.62-0.005-58.981-0.238-73.86,0.348
  c-5.926,0.122-25.431-1.047-29.339,2.001c-1.935,1.481-16.463,15.036-19.58,18.866c-1.867,2.22-2.208,5.239-2.135,8.039
  c0.104,6.533-0.506,13.059-0.14,19.592c-0.495,18.012-1.133,61.218-1.824,111.531c-0.017,0.684-2.119,98.819-2.123,98.862
  c-0.366,9.842-2.657,8.147-12.98,19.055c0,0-26.088,24.951-27.765,26.521c-6.528,6.363-5.159,7.104-5.746,30.559
  c-0.041,4.822-1.324,68.954-1.324,68.98c-0.092,1.746-1.235,58.525-1.214,66.516h-10.357c0.052-4.097,0.865-51.537,1.299-61.63
  c1.212-105.343,1.082-101.144,4.386-104.498c4.495-4.759,23.043-22.307,23.654-22.825c26.323-24.099,18.968-13.59,20.696-58.684
  c0.257-3.919,1.282-87.687,1.397-89.658c0,0,1.897-107.388,1.897-107.39c0.189-10.398,4.276-9.49,19.744-25.533
  c9.745-9.631,7.184-9.8,49.419-8.759c0.617,0.01,67.874,0.265,71.17-1.745C669.534,1224.225,675.231,1219.974,681.66,1217.052
   M681.105,1238.004c1.494,1.879,3.05,3.995,5.496,4.672c7.758,2.265,12.663-4.179,13.047-7.509
  c0.506-2.879,1.275-6.142-0.396-8.783C693.931,1217.185,674.755,1219.167,681.105,1238.004z"></path><path d="M866.874,1219.266c8.05-5.822,18.879-5.912,27.296,3.727
  c7.027,8.041,3.287,21.78-7.728,25.807c-6.972,2.519-14.438,3.178-21.556,5.166c-3.635,1.08-6.02,4.197-8.741,6.612
  c-6.094,5.524-4.7,4.696-4.947,40.477c-0.226,6.796,8.615,10.88,17.018,20.562c3.67,4.65,0.676,95.303,1.183,136.192
  c0,0-0.112-1.99-1.33,164.689c0.115,7.369-0.851,7.363,5.337,13.395c11.708,10.475,40.356,40.331,49.077,47.985
  c12.253,12.565,23.044,23.044,23.044,23.044c0.14,0.396,0.409,1.183,0.543,1.574H934.44c-3.84-5.155-34.769-34.806-50.309-50.37
  c-16.273-15.717-19.007-17.973-22.758-22.349c-3.694-4.052-2.103-3.781-2.123-66.351c0,0,0.661-99.209,1.098-119.528
  c-0.149-10.702,0.693-118.395,0.701-119.015c0.594-9.698-19.445-17.17-18.933-27.369c0.866-55.572-1.646-35.062,12.614-53.426
  c2.253-3.094,2.92-7.135,5.111-18.585C860.653,1226.769,863.233,1222.371,866.874,1219.266 M871.108,1225.543
  c-1.011,1.812-1.47,8.948,4.087,14.505c8.159,6.041,20.063-5.547,14.852-14.243
  C886.666,1219.257,875.851,1216.941,871.108,1225.543z"></path><path d="M1689.265,1278.207c4.459-2.672,9.65-5.099,14.981-3.91
  c6.155,1.488,12.358,4.971,15.103,10.955c0.287,0.677,0.653,1.421,1.006,2.129c0.317,3.714,0.537,7.533-0.518,11.168
  c-2.348,4.172-5.74,8.009-10.308,9.747c-11.484,4.48-24.105-4.702-24.947-10.796c-0.201-3.086,0-6.185-0.11-9.271
  C1684.36,1284.325,1686.495,1280.793,1689.265,1278.207 M1698.694,1298.531c0.116,0.25,0.354,0.738,0.47,0.982
  c1.226,0.506,2.44,1.116,3.776,1.391c4.611,0.079,8.838-3.623,9.772-8.07c0.134-0.018,0.397-0.061,0.531-0.079
  c0.012-0.909,0.037-1.799,0.079-2.678c0.549-5.947-5.093-11.297-10.906-11.12
  C1694.158,1278.435,1686.762,1291.194,1698.694,1298.531z"></path><path d="M1442.335,1275.73c5.404-2.3,11.711-1.11,16.713,1.671
  c2.678,1.433,4.501,3.934,6.411,6.228c0.976,4.709,1.287,9.613,0.817,14.407c-0.268,3.678-3.007,6.533-5.795,8.655
  c-5.099,3.55-11.443,3.995-17.323,5.313c-7.064,1.538-11.105,0.969-19.256,11.284c-1.592,1.958-1.94,4.556-1.848,7.008
  c1.333,52.149,1.947,41.499-8.802,53.628c-3.336,3.867-8.637,6.826-9.332,12.315c-0.122,7.905,0.573,15.81,0.354,23.727
  c0.67,19.585-1.5,23.884,3.129,28.4c2.163,2.186,29.08,28.254,31.358,30.309c7.47,7.041,62.29,60.375,62.905,60.971
  c5.109,5.109,5.138,2.98,59.813,3.361c111.378,0,105.522-1.023,109.683,0.909c3.588,1.494,12.727,10.806,16.274,14.267
  c5.31,5.408,36.495,35.249,36.573,35.329c8.63,8.078,6.36,5.153,32.084,5.923c8.235-0.411,124.28-0.3,126.841-0.165
  c83.927-0.79,76.378-1.636,85.437,7.289c18.277,17.691,63.261,59.798,93.592,89.5c4.282,4.05,8.991,7.71,12.59,12.437h-11.778
  c-2.468-3.244-61.757-59.609-62.368-60.179c-49.377-46.456-39.384-40.916-55.226-41.27c-0.612,0-152.839,0.238-155.546,0.201
  c-62.415,0.02-60.354,0.561-63.71-1.5c-5-3.018-15.87-14.319-32.236-30.022c-22.501-20.735-23.802-25.666-31.553-25.155
  c-0.204,0.012-50.895,0.034-59.197,0.226c0,0-65.823,0.307-66.455,0.299c-35.696-0.256-32.716,2.175-42.148-7.204
  c0,0-90.174-86.667-90.176-86.669c-10.079-9.831-8.241-7.878-8.911-18.323c0.203-22.899-1.312-44.574,0.464-48.833
  c1.26-3.19,11.545-12.757,12.163-13.321c4.761-4.686,6.244-5.987,5.435-15.316c-0.38-3.728-0.413-33.773-0.049-37.153
  c1.629-8.125,11.418-10.821,13.614-18.616c1.696-6.703,2.135-13.718,4.398-20.275
  C1433.49,1280.884,1437.687,1277.505,1442.335,1275.73 M1440.163,1293.529c2.671,5.476,4.235,8.836,11.553,7.405
  c2.849-0.634,4.782-2.964,6.417-5.209c4.136-11.438-4.889-16.808-10.76-15.993
  C1443.129,1280.194,1436.144,1284.915,1440.163,1293.529z"></path><path d="M1507.314,1274.956c14.244-2.694,23.951,7.745,23.581,18.177
  c-0.161,8.148-8.769,20.293-24.502,15.444c-14.108-4.595-11.534-15.434-11.662-19.116
  C1494.236,1282.251,1500.696,1276.359,1507.314,1274.956 M1503.965,1294.395c1.629,2.55,3.379,5.563,6.533,6.386
  c14.193,2.792,18.397-17.936,4.666-21.123C1510.247,1277.88,1499.659,1281.064,1503.965,1294.395z"></path><path d="M1560.032,1281.891c9.014-11.993,27.132-7.878,31.712,1.775
  c5.821,9.07,1.259,21.991-11.095,25.649c-14.379,4.285-17.638,0.558-27.832,11.107c-5.995,6.151-3.573,8.621-3.288,31.254
  c-0.309,17.457,1.119,54.001,0.982,70.78c-0.134,3.05,1.702,5.685,3.867,7.661c16.234,15.044,10.424,11.946,24.215,12.711
  c12.596-0.262,25.197,0.281,37.787-0.219c8.804,0.203,10.249,1.731,16.78,8.173c0.587,0.61,18.529,17.962,21.824,20.812
  c14.559,12.687,3.229,6.788,43.087,8.527c4.709,0.049,7.942,3.885,11.211,6.752c7.728,7.936,16.109,15.206,23.88,23.105
  c32.693,28.63,29.045,34.064,43.643,32.596c2.846-0.349,26.441-0.102,27.052-0.049c6.832,0.622,13.681-0.128,20.525-0.287
  c0.001,0,57.409,0.317,57.41,0.317c0,0,42.468-0.129,42.679-0.134c55.443,0.062,51.659-1.874,59.745,5.685
  c0.001,0.001,98.709,93.976,98.71,93.977c6.181,6.177,50.627,48.274,51.243,48.858c1.964,1.915,4.501,3.489,7.362,3.385
  c24.333-0.326,142.117-0.047,147.653,0.012c4.02,0.159,8.045-0.75,12.065-0.055c4.319,0.671,8.613-0.531,12.949-0.445
  c57.919-0.366,53.961-0.619,64.942,9.552c1.708,1.562,3.233,3.306,4.721,5.105h-11.632c-6.869-9.327-6.167-7.565-16.518-7.942
  c-18.904,0.425-46.146-0.837-54.232,0.964c-2.832,0.428-148.264,0.457-157.51,0.5c-3.91,0-8.253,0.476-11.607-1.946
  c-2.906-2.076-22.116-20.712-22.697-21.324c-2.342-2.277-94.96-90.083-96.971-92.098c-0.61-0.594-34.705-33.417-37.049-34.92
  c-2.867-1.793,5.338-1.168-114.678-1.189c-8.698,0.104-56.343-0.138-73.75,0.055c-24.231-0.087-21.726,1.647-31.321-7.234
  c-9.095-8.942-34.411-33.15-41.001-39.05c-10.832-10.351-13.515-15.055-18.402-16.176c-3.566-0.81-24.519,0.402-33.554-0.567
  c-5.27-0.786-15.981-11.464-18.5-14.523c-5.142-5.447-11.046-10.101-16.323-15.401c-2.952-3.001-5.959-6.746-10.491-7.07
  c-13.165-0.475-33.448,0.785-44.1,0.14c-14.643-0.905-11.91-2.69-24.831-14.31c-9.204-9.089-6.895-5.448-7.569-30.998
  c0-0.001-1.244-51.932-1.244-51.932c0.387-43.389-2.035-26.259,10.546-42.722c3.739-3.855,4.166-9.43,5.056-14.438
  C1556.324,1291.358,1556.739,1285.953,1560.032,1281.891 M1567.346,1294.651c0.744,1.037,1.476,2.104,2.318,3.111
  c3.3,4.751,11.175,4.105,14.456-0.366c2.165-2.897,3.757-6.85,2.409-10.418C1582.388,1274.351,1560.719,1276.938,1567.346,1294.651
  z"></path><path d="M1130.127,1275.651c13.685-2.423,27.464,14.056,18.573,26.753
  c-3.056,4.617-7.996,7.887-13.468,8.82c-10.294,2.761-28.472-13.633-33.45-11.815c-2.642,0.86-12.923,11.583-13.474,12.193
  c-2.08,2.232-2.275,5.459-2.214,8.356c0.129,5.648,0.425,77.051,0.421,78.685c-0.003,0.61-0.137,55.61-0.012,65.912
  c0.19,8.577-2.451,11.048,3.782,17.323c46.824,46.443,53.003,49.261,53.329,55.781c2.009,28.613-6.848,13.463,20.281,41.441
  c9.341,8.761,96.916,94.955,106.023,103.242c0.611,0.6,23.792,23.505,25.759,26.155h-12.248
  c-3.688-5.378-45.363-45.067-45.973-45.637c0,0-61.142-59.666-61.142-59.666c-50.812-50.458-40.583-33.974-41.49-62.417
  c-0.116-3.074-2.159-5.563-4.282-7.576c-10.674-9.656-20.354-20.354-30.998-30.041c-30.676-30.011-20.602-12.823-22.416-65.497
  c-0.682-132.362-0.64-125.727,2.519-129.232c2.897-3.208,15.893-16.486,20.098-18.854c4.721-2.739,9.375-5.654,14.456-7.71
  C1119.465,1279.695,1124.314,1276.249,1130.127,1275.651 M1129.95,1282.47c-4.288,1.153-7.85,5.435-7.399,9.997
  c0.831,16.985,20.206,13.117,20.525,1.293C1143.857,1286.978,1136.385,1281.019,1129.95,1282.47z"></path><path d="M1180.613,1282.543c10.918-13.492,37.096-7.193,33.395,15.359
  c-1.101,5.991-9.623,14.684-20.903,13.102c-18.341-2.716-19.876-2.833-25.356,3.031c-10.086,9.83-11.836,13.785-20.427,13.852
  c-0.001,0-33.56-0.018-33.56-0.018c-3.733-0.287-7.716,2.354-8.295,6.167c-0.476,3.416-0.092,6.868-0.092,10.308
  c0.076,143.734-2.743,124.056,7.429,134.527c22.295,22.422,47.79,44.711,49.785,50.73c1.733,8.297-2.701,14.195,4.52,21.33
  c3.294,3.184,23.477,22.831,30.26,29.485c0,0,59.313,57.709,59.654,58.019c0.86,0.79,69.293,67.883,69.907,68.486
  c0.043,0.396,0.134,1.183,0.177,1.574h-11.37c-5.057-6.295-10.827-12.016-17-17.213c0,0-91.024-88.925-91.024-88.926
  c-1.287-1.163-44.573-43.541-47.559-46.32c-2.55-2.544-5.691-5.252-5.904-9.101c-0.744-12.817,0.953-14.797-4.63-20.025
  c-0.467-0.422-49.243-47.835-49.559-48.144c-6.517-6.542-2.701-10.274-4.038-41.697c-0.159-4.282,0.293-8.546,0.214-12.809
  c-0.037-3.879-0.415-7.746-0.281-11.614c0.508-10.062-0.734-79.225,1.092-83.247c1.33-2.97,3.898-5.136,6.429-7.069
  c2.916-2.226,6.777-2.147,10.266-2.049c1.489,0.052,32.857,0.086,35.353-0.653c2.132-0.79,21.433-20.396,22.032-21.007
  C1175.49,1294.017,1176.819,1287.527,1180.613,1282.543 M1188.36,1297.109c3.86,12.101,21.515,5.692,19.122-6.185
  c-0.854-5.215-6.057-9.363-11.357-8.808C1190.31,1282.117,1184.24,1288.609,1188.36,1297.109z"></path><path d="M1381.076,1275.438c10.773-2.223,22.939,4.849,23.38,16.426
  c0.76,11.433-8.497,15.812-21.178,28.046c-6.561,5.829-78.415,77.376-83.534,82.399c-1.751,1.818-3.544,4.001-3.391,6.697
  c0.079,12.187-0.226,24.374,0.073,36.567c0.71,52.828-1.541,48.309,5.118,54.988c0.61,0.565,37.967,36.529,48.894,47.571
  c45.753,42.386,49.751,52.085,57.33,51.596c0.671-0.012,28.686,0.372,28.686,0.372c0,0,71.59-0.409,71.591-0.409
  c0.61-0.025,122.35-1.097,126.664,1.391c5.303,3.083,22.29,21.187,32.297,30.108c25.47,24.755,23.423,25.617,34.17,25.271
  c16.082-0.61,124.315-0.108,129.311-0.165c112.552,0.165,109.984-2.423,117.027,4.001c1.099,1.027,46.126,43.811,49.62,48.199
  h-11.98c-3.136-4.456-42.358-41.546-44.582-43.021c-2.775-1.854-6.258-1.482-9.412-1.513c-9.363,0.152-18.726-0.165-28.076,0.152
  c-6.361-0.013-102.844-0.131-112.818,0.122c-0.265-0.007-95.745-0.195-95.745-0.195c-7.12,0.337-10.096-5.164-20.592-14.871
  c-37.083-34.142-39.906-40.882-46.034-41.758c-0.61-0.072-82.984,0.109-83.473,0.128c0,0-137.875,0.354-137.875,0.354
  c-8.141,0.793-12.201-5.228-32.627-25.271c-2.636-2.378-36.97-35.004-44.612-43.258c-14.901-13.531-24.123-23.773-35.738-34.359
  c-8.357-7.973-5.406-5.074-6.203-45.948c-0.011-0.611-0.249-42.062-0.464-46.997c-0.326-13.393,2.082-10.369,18.903-28.229
  c0.712-0.729,48.315-47.375,48.315-47.375c14.533-14.986,19.266-17.257,18.701-22.032c-2.228-11.382-10.215-20.869-3.349-30.998
  C1372.305,1279.585,1376.404,1276.578,1381.076,1275.438 M1376.996,1285.422c-1.244,3.141-0.585,6.581,0.043,9.796l0.415-0.061
  c4.746,12.619,22.246,4.902,18.799-6.948C1393.699,1279.002,1380.622,1276.664,1376.996,1285.422z"></path><path d="M1628.262,1276.853c4.014-2.354,8.777-1.232,13.175-1.623
  c5.978-0.531,10.875,3.995,13.999,8.613c1.171,5.343,1.055,10.906,0.311,16.304
  C1638.655,1325.806,1603.351,1293.343,1628.262,1276.853 M1634.954,1281.067c-3.123,1.488-6.289,4.703-5.636,8.448
  c0.459,20.126,23.812,13.87,20.409-1.104C1647.86,1282.58,1640.791,1278.542,1634.954,1281.067z"></path><path d="M997.113,1278.121c21.294-11.068,44.384,23.104,10.089,35.311
  c-6.331,2.239-10.436,7.789-15.267,12.12c-3.763,3.751-7.82,7.216-11.376,11.168c-2.531,2.696-2.647,6.563-2.452,10.046
  c0.366,6.514-0.195,13.029-0.018,19.543c-0.008,4.586-0.117,138.906-0.518,149.458c0.936,74.176-2.584,73.616,2.867,78.99
  c0.61,0.595,51.253,50.054,54.506,53.432c4.731,4.665,57.749,56.721,60.209,60.307h-11.986c-2.62-3.473-36.768-36.89-37.378-37.482
  c0,0-72.963-71.651-72.963-71.652c-5.873-5.484-4.507,2.31-4.386-112.3c0,0,0.601-43.008,0.573-46.997
  c-0.254-12.781,0.158-78.108-0.061-93.928c0.188-10.44-0.383-10.779,14.907-24.411c6.657-6.794,4.141-7.422,3.501-18.994
  c-0.232-5.069-1.482-10.339,0.518-15.218C989.214,1283.068,993.032,1279.988,997.113,1278.121 M997.375,1291.235
  c-0.089,5.661,2.96,13.186,10.266,13.45c9.456-0.446,14.315-12.143,7.801-18.768
  C1010.604,1280.358,999.049,1281.248,997.375,1291.235z"></path><path d="M674.774,1282.232c3.367-3.074,7.868-4.215,12.187-5.215
  c3.263-0.415,6.362,1.171,9.345,2.293c9.765,5.105,8.431,11.582,9.119,18.073c0.61,5.411-2.928,10.571-7.655,12.937
  c-3.857,2.39-15.151,1.75-17.872,1.171c-3.465-1.025-5.831-4.172-9.357-5.081c-6.545-2.284-7.51,0.749-36.091,28.29
  c-2.794,2.512-15.308,14.082-17.585,17.25c-2.034,2.749-1.958,4.18-1.854,22.892c-0.271,23.939-2.002,125.469-2.001,125.707
  c-0.21,13.497,3.206,2.28-63.899,69.67c-19.5,19.681-28.098,24.664-28.668,30.962c-0.42,4.103-0.787,34.566-0.683,37.769
  c0,0-1.622,69.544-1.622,69.548h-8.991c0.259-9.073,0.869-51.147,1.208-56.72c-0.18-4.236,0.867-49.103,1.116-53.103
  c0.195-3.532,2.69-6.252,5.13-8.546c1.762-1.665,55.594-53.991,57.531-55.994c2.76-2.363,19.86-18.776,25.502-24.459
  c3.669-3.432,3.382-5.061,3.501-48.833c0.519-10.72,1.31-97.185,1.543-101.814c0.639-13.336-1.379-6.295,18.726-27.424
  c5.893-4.95,28.025-27.263,31.212-29.821c3.623-2.879,6.655-6.398,10.016-9.564C668.174,1289.04,670.766,1284.898,674.774,1282.232
   M680.068,1289.436c-3.06,4.38-0.936,14.848,6.209,16.926c11.319,2.355,19.931-13.181,8.198-20.391
  C692.006,1284.356,685.082,1282.228,680.068,1289.436z"></path><path d="M861.037,1287.563c10.296-20.76,40.59-8.666,36.03,10.528
  c-1.922,9.699-6.596,11.85-6.405,21.269c0.008,0.611-0.387,38.746-0.451,39.617c0.053,66.832-0.657,115.349-0.659,115.959
  c0.092,159.872-4.607,137.758,7.198,149.898c0,0,55.329,54.487,73.707,72.707c3.446,3.696,7.576,6.758,10.479,10.955h-16.03
  c-2.327-3.005-62.484-62.519-63.094-63.113c-3.666-3.315-21.102-20.124-23.392-23.551c-2.667-4.247-1.286-36.475-1.159-38.397
  c0,0,0.458-118.499,0.775-132.965c-0.368-11.734,1.025-101.715,0.61-127.488c-0.639-5.204-5.046-6.983-14.371-16.548
  C859.665,1301.464,858.305,1293.767,861.037,1287.563 M871.419,1299.464c0.498,0.745,4.804,9.378,14.005,4.233
  c1.562-1.159,2.788-2.696,4.148-4.075C898.676,1280.536,863.022,1274.473,871.419,1299.464z"></path><path d="M924.802,1287.271c5.411-12.655,26.039-16.067,34.664-0.335
  c2.507,4.729,3.185,15.172-6.868,22.019c-5.167,3.468-13.791,3.732-23.532,6.155c-3.016,0.726-5.381,2.014-17.908,15.084
  c-1.94,1.958-3.099,4.672-2.849,7.46c0.329,13.822-0.421,27.631-0.244,41.453c-0.009,1.576-1.034,184.75-1.116,190.368
  c0.924,19.249-3.009,26.059,3.129,32.322c1.068,1.105,49.8,49.015,59.38,58.221c21.832,22.185,43.931,42.359,48.266,48.48h-12.163
  c-1.5-1.879-2.873-3.867-4.691-5.441c-1.662-1.447-38.328-37.352-38.94-37.958c-35.708-35.736-42.799-42.122-57.007-56.446
  c-8.881-8.902-7.701,0.106-7.027-67.279c-0.112-1.736,0.7-127.553,0.726-128.165c2.112-42.544-2.97-79.899,3.178-85.595
  c13.93-13.533,17.175-15.666,18.537-21.147C921.948,1300.098,922.332,1293.401,924.802,1287.271 M932.835,1291.961
  c-0.224,5.313,5.091,14.691,12.266,11.65c3.288-1.458,6.283-3.867,7.899-7.136c0.262-2.164,2.528-7.504-4.386-12.651
  C942.529,1279.721,931.67,1284.247,932.835,1291.961z"></path><path d="M810.008,1277.67c9.672-2.85,26.488,3.034,23.276,22.947
  c-3.032,10.463-6.436,16.25-4.075,19.805c1.729,2.675,13.242,12.825,16.987,17.006c8.319,8.944,2.724,8.473,4.892,37.433
  c-1.079,9.218-0.631,81.098-1.098,90.811c0,0.001-1.623,195.26-1.623,195.26c-0.372,15.853-0.22,31.712-0.476,47.565h-8.881
  c-0.397-8.041,0.69-82.313,0.689-82.924c-0.018-0.61,0.992-111.305,0.714-114.776c0.827-61.46,1.102-115.21,1.08-116.411
  c-0.041-1.037,0.606-32.768,0.037-39.684c-0.147-12.592,1.664-7.006-12.309-21.641c-12.087-13.019-30.326-26.134-31.864-31.413
  c-1.507-4.63-1.83-10.016,0.659-14.365C800.59,1282.733,804.823,1278.884,810.008,1277.67 M806.092,1291.973
  c0.067,3.459,0.738,7.057,2.483,10.107c4.083,4.584,10.928,5.378,16.444-1.317c4.47-5.799,1.676-14.924-6.441-16.902
  C813.186,1282.11,806.135,1285.898,806.092,1291.973z"></path><path d="M608.984,1284.892c8.125-9.08,19.987-8.743,27.771-2.135
  c10.525,9.342,6.051,28.093-10.186,30.656c-21.385,3.49-19.079,4.005-26.497,11.309c-5.889,5.689-3.114,7.773-4.233,52.011
  c-0.159,3.117-1.758,98.758-1.781,99.368c0.175,2.634-0.213,22.767-0.817,25.173c-1.337,4.642-6.082,6.954-14.846,15.792
  c-13.183,13.174-58.977,57.022-72.39,69.816c-8.697,8.308-3.355,7.768-6.862,94.763c0.256,8.954-0.384,17.896-0.281,26.85h-9.192
  c0.512-8.527,0.978-60.466,1.696-77.184c1.295-46.812-3.102-39.091,12.089-53.146c14.31-14.176,60.49-58.446,60.49-58.446
  c18.01-17.348,18.967-18.321,19.391-21.971c0.487-11.121,1.18-50.291,1.171-50.901c-0.036-0.989,0.88-69.279,0.915-70.786
  c0.517-48.371-0.1-48.981,3.19-52.999c3.312-4.008,7.539-7.137,10.9-11.077c3.404-4.123,3.349-9.68,4.593-14.621
  C605.19,1293.059,605.58,1288.125,608.984,1284.892 M615.84,1292.547c0.226,2.781,1.098,5.465,1.836,8.155
  c1.36,2.001,2.739,4.318,5.264,4.983c10.839,3.444,20.184-12.967,9.265-20.117C624.625,1280.343,615.609,1286.295,615.84,1292.547z
  "></path><path d="M555.758,1278.554c11.865-2.47,22.993,6.133,22.69,17.018
  c0.218,14.416-17.725,23.158-29.534,14.682c-9.892-6.999-10.924-18.433-2.025-27.137
  C549.409,1280.891,552.556,1279.488,555.758,1278.554 M558.29,1284.837c-5.026,0.964-8.765,6.155-7.777,11.248
  c1.696,18.734,23.776,10.826,21.08-2.324C570.8,1287.655,564.091,1283.684,558.29,1284.837z"></path><path d="M740.442,1280.439c4.666-3.139,17.545-2.675,21.306-0.171
  c8.678,5.404,10.716,15.737,6.167,23.148c-3.686,5.91-17.121,16.234-21.184,20.33c-6.563,6.039-12.736,12.474-19.189,18.628
  c-1.622,1.622-3.446,3.373-3.806,5.764c-1.274,14.022,0.649,25.591-2.117,29.98c-2.26,3.402-10.015,10.913-13.986,12.681
  c-4.526,1.748-26.994,1.375-31.791,1.159c-4.107-0.304-7.7,0.057-15.243,9.131c-1.836,2.147-1.964,5.075-2.007,7.765
  c-0.001,0.614-0.473,42.937-0.897,61.13c-1.553,66.405,2.052,61.482-6.868,69.578c-0.002,0.002-71.536,69.334-71.536,69.334
  c-10.57,10.408-7.188-1.809-9.369,99.6h-8.637c0.121-15.24,0.669-53.072,0.695-53.683c2.307-50.457-6.14-32.89,20.885-60.648
  c2.86-2.667,62.402-59.869,64.125-63.216c1.389-2.952,1.759-53.906,1.653-56.043c-0.034-0.617,0.091-23.508,0.75-42.124
  c0.323-36.641-1.007-31.497,6.313-39.056c10.972-9.925,6.807-8.914,24.429-9.399c18.955-0.462,22.275,1.021,25.929-2.464
  c8.144-7.559,8.069-8.328,8.027-14.981c-0.018-0.61-0.581-19.58,1.244-23.868c1.132-2.171,17.308-17.544,17.927-18.134
  c4.965-4.768,7.486-5.616,5.984-13.657c-1.491-7.761-7.462-2.019-5.026-22.385C734.739,1285.185,737.362,1282.251,740.442,1280.439
   M744.132,1301.647c2.287,4.05,7.582,5.508,11.784,3.794c12.298-5.4,6.728-22.655-5.02-21.526
  C744.854,1283.873,738.336,1291.613,744.132,1301.647z"></path><path d="M2226.065,1298.518c18.656-4.112,32.906,21.824,14.706,32.352
  c-11.323,7.315-26.507-1.38-28.619-12.449c-2.072-8.979,5.364-16.739,8.393-18.14
  C2222.308,1299.513,2224.168,1298.933,2226.065,1298.518 M2221.113,1309.827c-1.073,2.721,0.872,5.258,1.122,7.948
  c1.476,2.025,2.324,4.599,4.355,6.185c14.646,8.241,23.064-19.866,4.044-21.086
  C2226.303,1302.636,2222.204,1305.63,2221.113,1309.827z"></path><path d="M2051.934,1305.826c11.706,4.02,16.741,12.192,25.6,12.126
  c45.001,1.352,25.984-5.409,54,18.744c1.674,1.398,22.141,20.473,23.368,21.733c4.064,4.191-4.889,2.607,162.334,2.922
  c52.578-0.618,48.208,0.081,53.939,1.769c1.964-0.903,4.056-2.019,6.307-1.44c4.348,0.762,22.924-1.108,33.127,0.128
  c5.038-0.427,10.131-0.634,15.194-0.195c2.434,0.409,4.929,0.567,7.399,0.152c10.668-1.661,17.52,2.095,23.782-3.349
  c16.309-14.986,17.135-20.513,26.131-20.72c25.625-0.165,51.255,0.061,76.885-0.14v6.966c0,0-73.219,0.476-73.219,0.476
  c-5.43,0.084-7.478,2.204-17.939,13.157c-11.35,11.708-8.773,10.726-31.449,10.607c-3.099,0.037-5.844-2.239-8.979-1.464
  c-6.784,1.467-31.888,0.624-32.499,0.628c-12.174-0.707-17.911,1.703-25.075-1.653c-2.318,1-4.611,2.239-7.161,2.409
  c-10.669,0.423-37.271-0.158-46.448,0.201c0,0-81.944,0.128-82.332,0.11c-95.326-1.273-71.579,7.094-97.13-15.353
  c-0.855-0.876-23.228-22.21-23.978-22.922c-8.09-7.411-8.838-4.374-19.824-4.88c-2.123-0.115-17.11-0.739-22.776,0.939
  c-5.956,1.487-15.036,12.717-22.935,11.894c-16.461-2.264-20.578-12.911-19.25-19.933
  C2029.914,1310.061,2042.337,1302.515,2051.934,1305.826z"></path><path d="M2157.097,1310.901c6.453-1.22,13.26,1.659,17.518,6.545
  c4.313,4.483,5.471,10.845,7.057,16.64c0.762,2.586,1.214,5.66,3.586,7.356c2.672,2.074,6.222,1.293,9.357,1.421
  c1.823,0.019,54.625-0.006,58.013-0.116c5.61,0.147,90.106,0.306,96.904,0.049c5.098,0.236,30.517-0.266,31.755-0.207
  c5.538,0.396,30.36-0.048,34.139,0.226c29.159,0.51,30,0.187,32.462-1.372c4.263-2.817,12.929-13.365,17.536-16.694
  c3.146-2.344,4.49-1.805,25.85-1.763c0.226,0.183,0.677,0.561,0.903,0.744c8.902-1.476,14.7-0.257,67.821-0.811v6.85
  c-5.654-0.232-11.321,0.445-16.945-0.189c-8.558-0.976-17.158,0.091-25.734-0.092c-3.873-0.293-7.753-0.366-11.62-0.348
  c-0.06,0-18.686,0.489-20.098,0.421c-13.994-0.539-15.81,1.755-19.964,5.935c-9.45,9.907-13.274,14.813-19.104,14.401
  c-0.611-0.018-44.355,0.094-46.955,0.232c-4.778,0.27-36.676-0.175-46.973,0.256c-5.769,0.026-76.5,0.02-82.973,0.079
  c-0.526,0.015-28.929-0.189-33.542-0.012c-51.629-0.264-53.598,1.608-79.856-4.965c-13.007-3.591-19.068-19.152-9.479-29.467
  C2149.485,1313.182,2153.328,1311.748,2157.097,1310.901 M2152.022,1323.624c-0.755,6.908,5.14,17.931,13.986,14.499
  c8.228-2.423,11.145-17.52-0.329-21.55C2158.399,1314.721,2153.395,1318.22,2152.022,1323.624z"></path><path d="M1749.272,1346.266c3.208-6.313,9.973-10.821,17.158-10.601
  c5.014-0.085,9.625,2.543,14.657,2.306c7.268-0.256,108.558,0.188,120.18-0.055c99.959,1.401,107.152-2.201,114.685,2.001
  c4.477,2.056,7.661,6.008,11.906,8.424c3.226,1.94,17.61,1.495,22.203,1.714c5.065-0.142,51.833,0.104,52.444,0.11
  c8.643,0.026,11.706,2.644,24.697,15.17c23.69,20.146-2.929,15.399,118.692,15.774c0.15,0.01,110.328,0.14,110.384,0.14
  c2.129-0.211,94.889,0.138,98.198,0.006c8.891,0.107,96.834,0.033,105.523,0.116v34.103c-6.258-4.644-6.629-4.585-11.644-4.715
  c-6.839-0.05-157.344,0.156-163.396,0.079c-0.001,0-177.468,0.159-177.468,0.159c-7.996-0.159-66.548,0.125-67.144,0.14
  c-14.159-0.124-11.691-5.377-39.544-28.491c-2.754-2.407,0.607-2.834-74.525-2.281c-16.844,0.388-18.339-12.621-26.856-12.248
  c-6.453-0.042-173.21,0.128-173.21,0.128c-8.533-0.122-17.067,0.207-25.6,0.11c-8.186,0.25-16.603-0.994-24.563,1.537
  c-3.861,1.385-8.021,1.049-12.035,1.012c-5.569-0.122-10.18-4.001-13.309-8.295
  C1747.345,1357.904,1747.021,1351.493,1749.272,1346.266 M1757.916,1348.047c-1.055,3.019,1.716,10.062,4.465,12.626
  c6.105,6.459,17.636-1.066,15.414-11.894C1775.343,1339.22,1761.213,1337.682,1757.916,1348.047z"></path><path d="M1380.808,1336.842c2.879-0.427,5.856-1.019,8.741-0.232
  c5.514,1.415,10.766,4.739,13.535,9.833c2.83,5.172,2.708,11.815-0.189,16.932c-4.123,6.252-11.235,9.247-17.481,12.858
  c-9.932,5.611-6.503,7.741-6.728,19.995c-0.004,0.61-0.127,48.227,0.909,54.152c0.47,2.617,2.489,4.489,4.367,6.209
  c2.458,2.208,4.648,4.709,7.125,6.917c2.577,2.217,61.416,59.343,62.027,59.953c0.617,0.593,29.682,29.198,34.365,33.231
  c8.153,7.242-1.175,4.783,66.724,5.148c111.086-0.716,103.981-0.614,108.731,3.66c7.052,6.875,45.023,43.452,46.339,44.606
  c7.831,6.793,5.131,8.043,16.914,8.32c7.618-0.114,61.624-0.329,61.624-0.329c10.658,0.016,108.99-0.202,114.02,0.146
  c0,0,30.207-0.377,45.204-0.061c13.255,0.675,8.483,2.556,29.156,20.281c10.301,10.126,62.44,59.787,62.612,59.959
  c3.263,3.41,7.155,6.203,9.93,10.077h-11.772c-5.678-6.44-67.259-64.855-67.87-65.394c-25.206-21.983,0.592-16.856-98.35-16.951
  c-170.539,0.64-155.076,1.762-163.317-6.258c-2.101-2.108-48.266-46.564-48.754-46.991c-4.976-4.911-8.32-2.991-19.702-3.349
  c-7.21-0.277-104.334,0.409-104.334,0.409c-60.582-2.622-34.563,7.579-65.979-19.36c-74.51-72.211-10.715-10.688-72.524-70.157
  c-7.509-6.911-14.407-14.462-22.044-21.233c-2.842-2.47-4.428-6.191-4.288-9.942c-0.017-8.651-0.241-66.933-0.848-75.922
  c-2.199-19.183-2.429-24.508,2.196-30.23C1373.58,1339.996,1377.221,1338.276,1380.808,1336.842 M1378.008,1353.244
  c1.809,8.296,4.178,13.113,13.065,11.516c5.654-1.842,8.326-8.802,6.368-14.218
  C1393.931,1338.485,1375.535,1343.123,1378.008,1353.244z"></path><path d="M1439.559,1338.788c10.495-6.518,26.057,0.241,27.558,10.418
  c0.672,10.974,0.614,15.409-8.539,21.55c-10.606,5.962-7.819-0.112-31.608,24.533c-4.884,5.26-3.89,6.823-3.8,13.736
  c0.213,19.066-0.508,21.532,1.446,24.709c0.945,1.572,20.128,20.108,20.739,20.677c3.251,2.847,67.376,64.993,67.986,65.565
  c5.207,4.941,6.69,4.03,18.903,4.16c27.113-0.217,133.686-0.109,145.768-0.342c8.958-0.094,6.058,1.605,51.834,44.405
  c14.027,13.054,9.741,12.216,23.776,12.339c9.111-0.733,25.367,0.25,29.906-0.159c1.279-0.117,120.727-0.089,121.339-0.098
  c60.178-0.467,58.484-0.416,62.143,1.427c4.282,2.217,23.071,21.073,24.465,22.471c0.001,0.001,97.77,93.232,97.77,93.232
  c3.745,3.648,7.875,6.935,11.107,11.083h-11.894c-3.101-3.899-64.843-62.6-65.455-63.174c-4.631-4.023-37.364-36.039-49.285-46.534
  c-12.402-10.61-6.291-10.02-20.61-10.449c-4.392,0.005-209.808,0.061-209.808,0.061c-7.608-0.403-11.837-8.147-24.624-19.409
  c-0.141-0.135-36.599-34.989-36.799-35.134c-1.995-1.47-4.471-2.239-6.929-2.123c-16.268,0.378-32.541-0.232-48.803,0.445
  c-3.873,0.159-7.71-0.537-11.571-0.451c-6.722,0.134-13.443,0.476-20.159,0.171c-24.997-0.83-73.828,1.788-80.301-1.049
  c-6.969-3.16-16.73-15.811-29.357-26.832c0,0-26.868-25.557-26.869-25.557c-12.709-13.03-41.496-38.919-43.118-43.551
  c-0.667-3.422-0.783-26.454-0.781-27.107c-0.006-4.745-1.22-10.235,2.275-14.127c6.759-8.395,15.804-12.687,16.213-19.427
  c-0.067-7.563-2.434-15.017-1.671-22.599C1431.41,1346.223,1435.161,1341.74,1439.559,1338.788 M1440.346,1352.244
  c-0.426,7.991,9.066,16.628,16.268,10.351c5.124-3.702,6.215-12.211,1.372-16.585
  C1451.552,1338.594,1439.503,1343.577,1440.346,1352.244z"></path><path d="M1505.038,1337.781c14.753-6.96,35.112,9.354,23.813,26.954
  c-11.959,19.974-10.567,10.337-10.613,28.449c0.737,86.693,0.963,82.471,3.251,85.028c0.95,1.026,24.401,23.733,25.801,24.899
  c4.772,4.142,16.777,1.423,70.944,2.098c23.861,0.869,74.129-1.972,79.661,2.117c15.591,12.203,52.797,54.328,61.167,54.085
  c0,0,155.038-0.085,155.564-0.092c71.106,0.787,50.609-5.568,79.124,20.489c10.542,9.549,64.992,62.088,73.122,69.682
  c0.61,0.568,55.45,52.119,59.075,57.007h-11.668c-2.867-3.902-43.044-41.707-46.662-44.972
  c-8.441-8.15-78.972-75.704-87.871-83.516c-10.891-12.281-15.278-10.492-21.129-10.583c-220.86,0.02-205.81,1.402-211.052-3.721
  c-66.136-62.234-48.729-52.132-73.195-52.603c-3.974-0.115-123.524,0.936-127.451-0.488c-4.306-1.429-7.95-5.96-17.39-14.901
  c-12.193-12.403-19.18-15.654-19.055-22.178c-0.336-6.678-1.111-68.466-1.598-92.202c-0.099-5.812-7.747-12.542-12.156-20.495
  c-1.934-3.623-1.281-7.826-1.366-11.754C1495.108,1345.089,1499.878,1340.093,1505.038,1337.781 M1505.13,1350.493
  c0.586,2.452,1.897,4.666,3.007,6.929c0.689,1.555,2.287,2.33,3.568,3.355c1.421,0.372,2.861,0.634,4.349,0.756
  c3.178-2.489,6.734-4.928,8.527-8.667c0.085-4.514-3.587-8.21-7.625-9.601C1512.035,1341.746,1505.38,1344.961,1505.13,1350.493z"></path><path d="M1630.092,1338.446c10.606-6.128,24.087-0.326,27.893,9.979
  c3.636,9.901,2.57,13.194,5.038,17.036c1.026,1.743,9.051,10.292,13.126,11.912c3.121,0.616,81.522,0.213,84.827,0.177
  c11.041,0.19,136.603,0.095,150.026-0.116c12.315,0.501,66.885-0.59,75.214,0.903c5.833,2.589,15.829,13.6,20.647,17.774
  c8.427,8.188,7.773,6.077,25.533,6.319c25.17,0.023,20.092,0.999,28.662-3.086c4.581-2.226,8.295-6.014,13.26-7.508
  c17.653-4.133,28.82,13.212,23.727,23.935c-3.234,8.469-13.701,14.641-26.271,8.796c-10.971-6.643-11.693-9.312-19.275-9.393
  c-39.79-0.53-42.489,1.883-49.395-4.892c-16.378-15.77-18.389-17.659-20.787-18.896c-3.652-1.814-19.069-1.386-23.026-0.836
  c-3.312,0.47-6.563-0.653-9.863-0.451c-5.304-0.137-56.137,0.61-61.026,0.317c-48.057,0.577-170.124,0.442-170.734,0.433
  c-56.525-0.261-44.773,1.335-56.775-8.521c-3.977-3.501-7.661-8.143-13.206-8.966c-6.502-1.275-13.565-1.671-19.098-5.703
  c-4.886-3.397-7.972-9.345-7.484-15.328C1621.242,1346.486,1625.06,1341.185,1630.092,1338.446 M1632.075,1345.345
  c-2.964,3.184-2.513,7.997-1.08,11.778c1.348,2.171,3.196,3.983,5.075,5.715c5.166,3.141,13.254-0.555,13.736-6.728l0.439,0.146
  c0.319-2.13,2.377-7.559-4.074-12.376C1641.993,1340.782,1635.417,1341.209,1632.075,1345.345 M2072.764,1402.504
  c-2.221,7.809,4.063,18.74,11.662,16.579c6.508-1.11,9.546-8.912,8.131-14.792
  C2089.191,1395.381,2076.461,1394.649,2072.764,1402.504z"></path><path d="M87.932,1337.141c11.656-0.644,19.94,8.441,19.622,16.926
  c0.152,9.711-8.942,18.171-18.524,17.963c-15.815,0.525-26.506-19.018-11.571-30.809
  C80.417,1338.8,84.205,1337.684,87.932,1337.141 M87.517,1342.85c-4.721,0.354-9.015,4.624-8.686,9.485
  c0.384,2.47,1.25,4.843,1.683,7.319c1.718,10.133,20.429,7.741,20.354-5.569C101.32,1347.193,94.111,1341.636,87.517,1342.85z"></path><path d="M1121.655,1340.575c14.627-11.263,42.408,6.773,23.496,29.046
  c-18.163,20.303-14.07-6.764-14.139,91.891c-0.152,3.324,1.94,6.124,4.313,8.228c4.276,3.855,8.076,8.216,12.516,11.9
  c49.908,48.2,39.112,35.512,40.757,55.958c0.354,3.153,2.69,5.563,4.825,7.716c7.887,6.96,14.938,14.81,22.831,21.782
  c0.611,0.599,66.769,65.538,71.121,69.645c4.944,4.344,55.719,54.735,58.129,56.507c4.329,3.268,62.049,1.385,103.754,1.494
  c116.523,1.798,117.984-3.193,125.713,3.318c3.782,3.147,7.307,6.624,10.436,10.437h-11.754
  c-5.279-7.918-10.132-5.831-23.123-6.026c-5.169,0.166-43.39-0.087-46.4,0.006c-10.332,0.252-60.892,0.146-60.892,0.146
  c-3.622,0.306-30.508,0.238-31.12,0.183c-0.374-0.036-58.911,0.397-62.881,0.281c-5.696-0.013-8.541-2.566-14.993-8.905
  c0,0-32.169-31.266-32.169-31.266c-0.001-0.001-87.37-85.187-87.37-85.187c-3.111-2.766-30.938-29.844-32.749-31.938
  c-4.355-5.459-1.574-12.84-2.781-19.128c-1.298-5.223-0.81-2.53-53.841-54.793c-5.348-5.7-3.158-7.857-3.696-22.63
  c0-0.615-0.272-51.961,0.018-67.083c0.201-9.107-6.703-16.243-8.058-24.978C1112.877,1350.706,1116.36,1344.192,1121.655,1340.575
   M1122.21,1352.963c-0.647,6.762,4.353,13.602,11.052,12.876c7.038-0.018,14.856-12.63,5.16-19.836
  C1132.857,1341.689,1122.502,1344.77,1122.21,1352.963z"></path><path d="M1186.743,1339.178c8.527-4.922,20.427-1.446,25.539,6.813
  c4.355,6.588,3.074,16.255-2.69,21.605c-8.857,9.339-40.459,34.679-40.446,42.02c-0.804,32.936-2.55,19.63,23.917,47.601
  c56.046,57.953,45.046,32.109,46.631,72.957c0.129,3.53,1.855,6.613,16.207,19.214c0.611,0.605,39.639,38.944,40.276,39.544
  c5.098,4.655,55.756,54.072,56.348,54.683c20.975,20.717,0.244,11.21,108.311,13.242c3.05,0.018,6.081-0.525,9.143-0.342
  c6.691,0.561,13.419,0.25,20.129,0.287c6.4-0.556,98.854-0.361,99.472-0.36c8.256-0.062,9.595,2.269,25.88,18.317
  c0.611,0.589,31.725,30.552,34.097,33.737h-11.614c-3.042-4.125-41.272-41.169-44.387-43.094
  c-2.75-1.619-10.369-1.101-68.614-0.836c-1.413,0.001-159.175,0.195-159.175,0.195c-6.179-0.418-8.441-4.781-23.307-19.012
  c-4.394-3.628-34.34-33.287-36.494-35.457c-14.149-13.545-69.975-68.112-72.036-70.084c-1.854-1.769-3.245-4.099-3.367-6.691
  c-1.897-28.734,3.61-23.647-6.795-34.42c-3.522-3.19-59.745-57.691-62.045-60.581c-1.964-2.476-1.647-5.819-1.726-8.771
  c0.043-7.948-0.598-15.896,0.018-23.819c0.237-3.747,1.362-4.39,18.171-20.958c4.781-4.782,5.822-5.259,3.91-11.51
  c-4.751-12.864-6.288-18.356-4.385-23.825C1179.393,1345.235,1182.779,1341.636,1186.743,1339.178 M1187.567,1349.761
  c-2.667,8.294,7.001,19.851,15.255,13.523c4.19-3.245,6.1-9.424,3.953-14.359C1202.33,1340.61,1190.484,1341.082,1187.567,1349.761
  z"></path><path d="M937.239,1338.782c20.888-4.029,32.366,21.018,14.92,32.425
  c-7.606,4.617-18.268,3.44-24.417-3.093c-6.039-6.209-6.338-17.164-0.274-23.453
  C929.95,1341.649,933.427,1339.593,937.239,1338.782 M933.811,1350.481c-1.049,3.196,0.146,6.496,0.988,9.601
  c1.598,1.836,2.903,4.514,5.563,4.898l-0.134,0.354c0.909,0.152,1.867,0.348,2.806,0.482c1.287-0.421,2.598-0.805,3.879-1.263
  c2.025-1.732,4.288-3.178,6.148-5.105c3.907-11.224-4.638-15.863-10.089-15.719
  C938.959,1343.881,934.879,1346.479,933.811,1350.481z"></path><path d="M996.277,1340.179c12.943-7.447,30.763,3.892,27.851,19.141
  c-2.483,8.478-8.924,14.938-13.084,22.562c-1.708,3.288-1.08,7.106-1.135,10.668c0.354,215.248-4.179,189.055,8.265,201.195
  c22.987,23.306,9.613,10.562,58.391,14.175c14.035-0.169,18.313-1.583,23.88,3.538c1.691,1.44,40.759,39.757,41.361,40.367
  c18.544,18.784,52.733,51.322,56.989,56.671h-12.413c-4.199-5.703-19.087-19.308-27.247-27.704
  c-9.393-10.124-49.988-48.74-59.032-57.995c-8.927-8.606-6.21-7.156-19.866-7.46c-11.844-0.257-43.947,0.964-50.017-0.305
  c-3.396-0.808-4.944-1.503-24.642-21.562c-7.037-6.776-4.53-7.332-5.179-28.906c0.065-6.033,0.405-173.101,0.409-176.315
  c0.139-11.146-7.123-13.903-12.724-25.094c-3.111-6.21-1.61-13.95,2.824-19.104
  C992.502,1342.509,994.368,1341.276,996.277,1340.179 M997.394,1351.67c-1.116,2.909,0.396,5.874,0.958,8.747l0.281,0.049
  c0.793,4.483,6.057,7.234,10.29,5.923c13.064-3.579,10.858-21.069-1.232-21.434
  C1003.286,1344.582,998.851,1347.522,997.394,1351.67z"></path><path d="M739.869,1342.503c20.975-14.349,45.708,18.725,15.957,32.456
  c-12.942,6.331-6.982,2.455-20.94,15.67c-0.617,0.596-11.914,10.157-12.236,16.481c0,0-1.189,111.878-1.379,116.527
  c0,0.012-0.964,71.694-1.263,86.675c0.121,6.674-0.373,66.72-1.305,72.494c-0.506,3.312,0.659,6.539,0.738,9.845
  c0.348,5.282-0.573,10.589,0.317,15.847h-10.07c0-4.075,0.396-8.143,0.189-12.211c-0.171-2.781,0.134-5.557,0.891-8.228
  c0.982-3.16-0.573-6.301-0.506-9.467c0,0,0.567-42.678,0.567-42.679c0-0.003,1.019-92.683,1.019-92.683
  c0.413-3.969,1.328-120.067,1.555-126.298c0.334-12.988-0.894-16.332,3.324-20.745c5.539-5.772,14.587-13.622,15.889-16.426
  c2.047-4.798-1.534-14.638-0.951-23.801C732.012,1350.487,735.3,1345.43,739.869,1342.503 M743.315,1362.491
  c8.93,9.655,18.066,1.671,19.098-5.325c0.964-6.179-4.575-12.736-10.937-12.236
  C745.755,1344.436,736.922,1349.963,743.315,1362.491z"></path><path d="M812.167,1339.544c9.945-2.199,18.76,6.552,20.123,10.479
  c4.438,12.734-4.622,21.559-11.882,23.672c-18.37,5.554-17.458,0.298-28.455,10.607c-6.854,6.51-4.83,7.183-5.398,36.902
  c0.237,14.753-1.841,13.043,6.539,21.184c0.611,0.592,26.771,26.214,27.375,26.911c8.392,9.486,10.636,7.362,10.394,20.196
  c-0.442,9.397-0.247,59.15-0.86,73.256c-0.054,27.04-1.243,117.074-0.982,121.321c-0.159,8.137-0.14,16.28-0.39,24.423h-9.119
  c0.087-3.817,1.714-161.676,1.714-161.676c0.011-0.61,0.107-48.455,0.281-54.878c-0.294-11.208,1.428-7.405-9.027-18.262
  c-33.186-34.432-35.596-31.441-35.225-40.288c0.014-0.647,0.152-42.859,1.013-45.576c2.464-6.96,10.802-9.491,13.212-16.457
  c5.007-13.352,1.767-18.193,9.473-26.936C803.811,1341.264,808.178,1340.38,812.167,1339.544 M809.093,1363.583
  c4.864,4.603,12.38,2.319,15.603-4.02c4.356-11.607-4.787-15.95-9.796-15.865C806.406,1343.131,800.817,1354.141,809.093,1363.583z
  "></path><path d="M680.398,1341.1c15.009-0.857,16.448-0.27,21.397,5.429
  c7.834,9.68,3.496,21.27-5.355,26.112c-16.424,10.646-36.644-10.192-25.783-24.191
  C673.017,1345.107,676.171,1341.783,680.398,1341.1 M677.086,1352.256c-1.009,4.181,1.188,16.062,9.064,15.859
  c6.703,0.488,12.266-6.283,11.693-12.73C697.359,1343.935,679.806,1342.185,677.086,1352.256z"></path><path d="M1571.981,1398.68c7.446-1.575,13.557-0.08,30.102,10.613
  c5.879,3.709,11.663,1.434,20.013,2.702c6.034,1.314,8.436,6.745,23.483,20.196c2.142,2.198,26.519,25.353,27.131,25.954
  c4.467,4.555,10.927,2.798,30.315,3.105c11.889,0.353,9.583-0.911,18.341,6.832c5.244,4.643,54.201,51.969,54.811,52.542
  c6.289,5.978,11.205,1.871,68.932,2.855c107.361,1.114,134.423-2.523,141.029,2.489c3.789,2.947,46.241,43.5,46.851,44.094
  c3.273,3.409,74.874,71.017,81.173,77.495c0.615,0.599,26.541,24.991,27.412,25.618c4.977,3.685,22.273,1.37,34.164,2.184
  c7.269,0.751,46.066-0.517,48.217-0.329c7.307-0.171,14.584,0.677,21.885,0.762c6.521-0.672,36.076-0.561,40.867-0.396
  c0.61-0.021,82.885-0.988,87.767,0.848c4.684,1.889,33.063,29.468,35.201,32.255h-11.479c-6.203-7.356-13.779-13.389-20.513-20.226
  c-2.232-2.074-4.422-4.563-7.502-5.258c-3.378-0.586-41.988-0.363-42.6-0.348c-0.61,0.025-76.265,0.457-80.527-0.829
  c-0.402-0.128-65.848-0.156-67.675,0.421c-3.305,0.984-34.736,0.663-35.347,0.653c-5.02,0.018-8.509-4.069-11.925-7.155
  c-6.728-6.656-70.229-66.585-74.543-71.066c-4.449-4.132-71.364-67.703-73.573-69.865c-2.226-2.135-5.27-3.373-8.35-3.221
  c-209.528,0.139-197.681,0.804-201.262-1.793c-3.336-2.311-51.955-49.523-61.789-58.422c-3.555-3.359-8.052-1.581-31.541-2.025
  c-9.362-0.507-9.051-0.537-17.396-8.265c-8.625-8.56-31.427-29.588-36.982-35.524c-2.507-2.653-5.264-5.605-9.101-5.996
  c-4.965-0.384-10.388-0.677-14.792,2.049c-9.392,5.75-17.778,15.029-29.052,11.906c-11.635-2.506-19.221-15.78-12.962-25.905
  C1563.283,1403.474,1567.108,1399.766,1571.981,1398.68 M1568.84,1409.141c-1.731,3.982,0.735,12.611,4.837,15.09
  c6.441,4.817,16.88-2.542,14.877-12.449C1586.578,1402.558,1572.166,1400.265,1568.84,1409.141z"></path><path d="M1814.971,1407.366c5.192-9.881,16.273-11.629,25.966-7.612
  c7.202,2.577,15.935,11.514,22.44,11.449c76.761,0.698,75.826-1.633,81.228,2.556c4.067,3.068,39.573,37.312,40.208,37.927
  c16.132,14.297,44.109,41.59,60.02,56.507c11.873,11.539,46.037,44.026,47.833,45.46c24.793,23.016,25.268,26.714,32.401,26.637
  c32.125,0.096,46.332-0.171,52.816,0.555c0,0,55.24-0.438,58.806-0.018c0,0,30.389-0.692,37.873-0.567
  c42.962,0.42,96.377,0.452,96.99,0.445c10.944-0.195,9.824,5.389,66.699,56.793c3.136,3.099,71.725,67.318,74.482,70.999h-10.875
  c-3.028-3.5-18.689-18.368-19.299-18.939c-16.776-15.486-96.958-91.451-97.594-92.055c-14.413-12.897,7.668-9.933-137.265-9.759
  c-2.958,0.122-5.612-1.36-8.478-1.683c-0.61-0.049-58.401-0.445-61.539,0.72c-2.769,1.013-5.733,1.153-8.637,1.074
  c-8.149-0.25-16.286,0.354-24.429,0.14c-7.527,0.555-15.072,0.281-22.605,0.287c-5.886-0.177-9.826-4.995-13.822-8.655
  c-7.311-7.372-81.969-77.533-83.333-78.898c-46.863-44.073-51.718-49.51-51.718-49.51c-43.534-38.542-22.651-32.084-65.766-32.432
  c-5.294-0.079-10.571,0.738-15.853,0.214c-4.075-0.445-8.161,0.012-12.23,0.043c-18.746-0.563-19.741,0.438-23.471,3.105
  c-12.661,8.902-17.745,12.447-25.942,11.382c-5.88-0.933-11.248-4.581-14.316-9.668
  C1812.61,1418.924,1812.293,1412.483,1814.971,1407.366 M1822.907,1413.227c0.085,2.769,1.464,5.252,2.537,7.747
  c1.5,1.726,3.001,3.885,5.508,4.117c2.916,0.323,6.411,0.787,8.747-1.458c3.983-4.117,5.666-11.571,1.318-16.042
  C1835.938,1401.12,1822.876,1403.443,1822.907,1413.227z"></path><path d="M1307.918,1406.054c4.531-6.326,16.317-11.766,27.796-3.092
  c8.664,6.634,7.563,20.142,11.431,29.455c2.873,4.861,8.033,7.807,11.29,12.382c2.092,3.123,1.379,7.057,1.799,10.601
  c1.848,17.867-8.784-3.385,78.368,85.126c0.589,0.613,31.415,29.955,34.097,32.919c3.184,3.111,6.405,7.307,11.26,7.454
  c179.226-0.563,159.674-2.298,169.831,6.636c0.618,0.599,47.541,46.09,49.779,47.772c4.662,3.622,43.866,1.355,59.209,1.647
  c7.24-0.232,14.493,0.988,21.727,0.11c3.324-0.372,6.661,0.183,10.003,0.104c4.726-0.142,78.799-0.375,84.797-0.055
  c1.303,0.103,36.6-0.137,37.214-0.11c10.271,0.715,28.659-1.99,34.768,2.55c1.541,1.192,46.784,44.573,61.563,58.654
  c3.464,3.349,7.368,6.301,10.168,10.29h-11.839c-4.853-5.838-46.843-45.151-56.574-54.555c-11.165-11.121-2.711-9.075-53.957-8.863
  c0,0-190.335,0.031-190.338,0.031c-7.251-0.073-8.347,0.654-17.988-8.838c-5.556-5.749-45.326-43.789-45.326-43.789
  c-6.221-6.752-13.717-2.994-29.357-3.849c-2.086-0.099-43.647,0.177-48.223,0.024c-5.133,0.382-39.015,0.156-39.635,0.152
  c-52.142,0.672-52.048,0.199-55.695-2.757c-5.696-4.532-95.995-92.505-96.605-93.104c-34.722-32.304-24.077-21.498-26.881-42.038
  c-0.755-4.252-9.029-11.827-12.504-13.029c-10.693-3.442-29.449-1.232-33.163-17.628
  C1303.624,1415.374,1304.953,1410.062,1307.918,1406.054 M1314.078,1411.001c-1.803,5.862,3.001,17.047,10.79,15.603
  c5.386-1.129,9.766-6.429,9.277-12.029C1334.467,1404.232,1317.72,1399.8,1314.078,1411.001z"></path><path d="M1698.786,1398.631c5.392-0.342,11.327-0.884,16.133,2.153
  c19.343,12.391,2.607,39.887-15.969,31.712C1678.531,1424.474,1684.55,1401.358,1698.786,1398.631 M1695.791,1409.141
  c-1.519,3.202-0.14,6.819,0.945,9.955l0.262-0.134c1.403,2.94,3.782,5.935,7.21,6.453c14.414,0.992,16.193-20.047,2.385-22.044
  C1702.214,1402.516,1697.859,1405.408,1695.791,1409.141z"></path><path d="M1762.222,1398.509c24.085-2.481,23.727,15.027,31.919,23.111
  c4.849,5.319,10.321,10.01,15.53,14.968c2.848,2.8,6.105,6.026,10.461,5.728c57.644-0.613,43.237-1.057,59.349,12.297
  c30.47,27.938,8.405,15.757,58.355,19.263c47.994-0.173,43.337-1.698,51.859,6.49c8.206,7.353,65.381,62.051,65.381,62.051
  c2.894,2.612,52.369,49.654,66.949,63.692c7.415,7.306,7.413,5.698,22.593,5.88c13.643-0.399,38.318,0.506,38.318,0.506
  c4.839-0.762,121.923-0.386,182.494-0.506c12.886-0.552,11.821,8.039,83.888,72.402c0.611,0.53,22.898,21.24,24.831,24.106h-11.034
  c-7.413-8.16-50.534-47.934-54.695-52.152c-0.61-0.607-35.304-33.996-37.689-35.5c-4.766-3.134-15.495-1.257-31.523-1.83
  c-35.988,0.294-69.365-0.24-82.973,0.421c-20.073-0.377-4.958-1.901-23.203-1.494c0,0-36.659-0.549-49.376,0
  c-3.782-0.433-7.228,1.635-10.973,1.525c-4.496-0.067-8.985,0.006-13.468,0.159c-33.706-1.195-31.35,2.813-40.703-5.801
  c0,0-35.611-33.811-39.391-37.464c-5.244-4.613-57.923-55.363-62.954-59.587c-39.313-37.663-34.368-35.37-44.167-35.408
  c-27.189-0.486-66.764,0.538-73.14-0.219c-4.474-0.461-6.406-2.84-30.974-26.576c-7.917-7.735-11.9-2.732-41.636-4.258
  c-5.417-0.177-11.516,0.72-16.219-2.55c-5.874-4.227-10.4-10.01-16.164-14.352c-4.068-3.233-11.135,0.242-24.374,0.415
  c-12.741,0.367-25.82-14.766-17.219-27.973C1754.689,1402.455,1758.086,1399.491,1762.222,1398.509 M1761.526,1418.009
  c0.418,0.634,3.853,9.318,11.211,7.082c10.923-3.216,10.67-19.865-0.927-21.995
  C1764.266,1401.519,1756.015,1409.359,1761.526,1418.009z"></path><path d="M923.839,1411.904c5.297-13.792,25.345-15.952,34.432-1.592
  c6.909,10.751-2.981,20.976-9.131,30.486c-3.9,5.639-3.117-3.447-3.58,111.568c-0.193,2.551-0.469,38.706-0.366,42.057
  c0.079,4.032,3.019,7.106,5.807,9.68c4.262,3.886,59.106,57.802,59.514,58.257c6.095,6.674,41.715,40.265,46.082,46.137h-12.047
  c-8.512-9.887-27.865-27.325-31.163-31.334c-0.264-0.313-69.793-68.436-69.895-68.547c-11.679-12.407-5.607-0.37-7.021-67.913
  c-0.18-7.703,0.172-45.788,0.171-46.4c0.044-56.026,1.737-47.235-4.898-57.013c-2.409-3.611-5.002-7.124-7.094-10.924
  C922.417,1421.938,921.905,1416.521,923.839,1411.904 M946.102,1427.305c2.379-0.384,4.117-2.214,5.752-3.831
  c6.786-11.637-2.398-18.449-8.899-18.177C929.003,1404.539,930.59,1429.745,946.102,1427.305z"></path><path d="M806.257,1402.632c19.444-8.601,38.332,17.669,17.793,31.407
  c-16.724,9.364-33.097-6.087-28.247-20.836C798.156,1408.799,801.407,1404.432,806.257,1402.632 M805.836,1413.258
  c-0.38,10.522,4.508,15.363,8.43,15.81c9.428,1.586,17.857-13.874,7.832-20.531
  C816.374,1404.346,807.321,1407.037,805.836,1413.258z"></path><path d="M743.059,1402.559c7.763-2.987,16.643-1.212,23.124,7.448
  c8.929,12.253-4.237,23.756-8.399,32.096c-0.818,2.061-1.267,1.587-1.244,39.507c0.075,8.772-1.286,14.679,6.624,17.512
  c4.991,1.844,9.631,0.31,24.337,1.189c5.607,0.424,17.451,8.166,19.561,11.827c1.927,2.879,1.33,6.49,1.476,9.766
  c-0.061,3.513,0.409,7.313-1.324,10.54c-2.513,4.543-14.983,10.4-18.701,11.193c-7.718,1.389-23.079-0.537-28.583,1.879
  c-17.206,7.539-11.644,18.138,6.807,17.567c19.952-0.952,22.633,0.429,26.1,2.147c15.643,7.67,15.33,12.593,15.17,18.829
  c-0.463,8.785,1.16,11.821-7.076,16.524c-18.815,10.148-12.563,5.214-36.75,6.874c-6.096,0.365-18.097,7.156-14.846,12.986
  c4.423,8.315,16.743,5.123,22.88,5.435c6.746,0.317,13.986-0.945,20.165,2.519c4.514,2.672,9.235,5.325,12.779,9.277
  c3.367,3.578,2.224,16.585,1.372,19.561c-1.22,3.837-4.904,6.02-8.259,7.783c-4.276,2.165-8.448,5.099-13.401,5.282
  c-20.424,0.897-25.485-1.553-34.469,6.643c-5.716,5.318-0.061,11.082,5.996,12.352c9.016,1.682,24.745-0.65,29.839,0.561
  c4.126,0.727,15.983,7.352,19.214,12.687c1.134,1.763,1.147,3.922,1.378,5.953h-15.67c-3.542-3.649-5.539-6.573-15.316-6.222
  c-21.215,0.998-25.053-0.28-29.101-2.415c-8.307-4.441-13.713-7.314-13.242-13.962c0.444-10.91-1.223-13.52,9.119-19.854
  c3.953-2.367,6.514-7.094,11.425-7.698c9.662-0.854,19.409,0.189,29.065-0.842c6.497-0.901,12.203-6.489,8.905-12.156
  c-8.129-12.218-26.37-3.028-41.636-7.734c-18.087-8.112-16.096-11.986-16.152-19.397c0.302-11.873,2.976-11.427,9.839-16.079
  c5.375-3.506,5.178-6.992,13.486-7.332c20.842-0.676,28.857,1.613,34.457-4.953c5.301-6.031-2.038-14.756-14.291-14.334
  c-28.037,0.336-22.927,1.1-33.273-4.489c-9.516-5.545-9.268-6.998-9.351-14.438c0.134-3.446-0.708-7.136,1.019-10.32
  c1.812-3.513,5.618-5.105,8.716-7.234c7.177-4.74,3.648-7.243,17.012-7.521c19.948-0.703,24.404,1.747,30.608-4.605
  c4.217-4.12,1.643-11.531-8.722-13.852c-6.844-1.019-13.785,0.256-20.647-0.299c-4.941-0.329-9.052-3.324-13.157-5.776
  c-9.577-5.714-7.978-17.2-7.692-42.471c0.371-17.746,1.065-20.861-1.568-25.142c-2.751-5.319-7.295-9.644-9.198-15.389
  C728.865,1415.173,734.855,1405.761,743.059,1402.559 M744.779,1426.72c3.613,4.09,11.561,3.928,15.847-4.331
  c0.299-1.415,0.988-2.714,1.074-4.154c0.584-5.024-3.25-12.1-13.334-11.028C737.141,1408.591,740.547,1422.567,744.779,1426.72z"></path><path d="M667.131,1421.87c-2.088-14.473,16.153-25.595,28.589-17.567
  c8.853,5.469,12.854,15.97,5.904,26.204c-11.163,17.324-8.999-0.423-9.759,91.342c0.076,3.812-0.716,40.92-0.726,44.551
  c0,8.108-2.316,8.011-25.533,30.626c-12.155,11.605-31.506-3.157-44.472,12.297c-4.287,4.966,2.084,11.433,10.821,11.65
  c11.01,0.033,40.003-0.964,46.125,0.232c3.755,0.844,12.309,5.346,14.554,9.595c1.84,3.22,1.726,13.216-0.189,16.31
  c-2.198,3.468-11.547,9.522-13.913,10.443c-3.91,1.56-28.469,0.694-47.79,1.323c-11.052,0.349-10.897-1.391-19.952,4.66
  c-7.502,5.2-4.953,10.518,0.397,13.206c7.406,3.698,58.361-0.5,67.382,2.056c2.826,0.878,17.953,7.729,18.323,15.7
  c0.195,4.66-0.232,9.326-0.287,13.999h-18.665c2.288-2.48,8.753-8.025,2.007-13.822c-7.116-7.001-14.394-3.366-66.357-3.885
  c-5.184-0.049-19.66-7.142-21.373-13.096c-3.646-19.663,4.494-19.566,11.181-25.143c2.202-1.769,4.062-4.099,6.771-5.118
  c4.02-1.36,29.191-1.291,33.322-1.049c27.036-0.531,27.656,0.096,31.041-1.83c5.153-2.962,5.96-7.022,0.988-10.131
  c-2.984-1.408-3.575-1.034-47.241-0.933c-7.935,0.156-18.682-7.765-20.092-9.21c-3.886-4.05-3.166-17.018-1.256-20.653
  c1.751-3.318,5.362-4.88,8.253-7.002c5.843-3.802,5.312-7.453,16.146-7.301c29.869,0.634,22.063,0.362,38.171-14.127
  c9.242-9.551,7.305-4.626,7.85-29.571c0.01-0.61,0.758-61.841,0.769-68.34c0.26-3.018,0.755-30.203,0.207-33.468
  c-0.726-3.831-3.605-6.655-5.453-9.936C670.657,1430.05,667.479,1426.476,667.131,1421.87 M678.122,1412.416
  c-2.427,4.184,0.109,14.901,6.63,16.463c12.382,2.087,19.243-13.603,8.173-20.586
  C689.348,1406.387,682.275,1405.342,678.122,1412.416z"></path><path d="M2302.682,1422.468c20.468-2.163,30.72,26.63,9.869,34.316
  c-15.031,5.309-31.284-11.155-23.667-24.893C2291.679,1426.842,2296.949,1423.219,2302.682,1422.468 M2296.625,1433.533
  c-3.143,7.413,3.819,19.472,12.687,16.39c8.413-2.027,11.37-15.58,2.232-20.672
  C2308.203,1426.944,2299.63,1426.568,2296.625,1433.533z"></path><path d="M2532.863,1428.891c17.613-3.488,30.533,21.045,14.651,31.657
  c-13.101,8.894-30.483-3.124-29.229-16.146C2518.541,1436.552,2525.348,1430.123,2532.863,1428.891 M2526.971,1443.872
  c-0.839,9.427,10.823,20.069,20.141,7.277c1.915-2.556,1.763-6.033,1.019-8.973
  C2544.362,1431.081,2526.845,1432.209,2526.971,1443.872z"></path><path d="M2013.842,1444.543c7.284-14.117,29.703-13.314,35.652,4.855
  c7.631,23.846,2.122,15.528,12.114,26.143c0.035,0.037,56.893,54.142,59.794,56.805c5.354,4.99,7.246,3.874,13.456,4.032
  c0.611,0.002,37.273-0.042,39.794,0.329c0,0,25.515-0.277,58.434-0.226c2.482-0.061,4.739,1.647,7.258,1.11
  c3.019-0.604,6.075-1.22,9.186-1.171c87.587,0.159,83.05,0.974,87.108-3.099c37.951-38.707,17.34-25.676,73.714-28.272
  c0,0,121.336-0.007,149.647-0.323v6.99c-8.96,0.226-17.921,0.043-26.869,0.336c-3.824-0.093-160.037-0.551-164.25,1.049
  c-7.133,2.882-26.808,30.512-35.188,30.26c-0.611-0.005-55.616,0.578-61.063,0.275c-9.137-0.366-18.287,0.677-27.406-0.049
  c-2.94-0.232-5.569-2.714-8.57-1.751c-4.777,1.31-51.003-0.328-57.47,0.72c-8.931,1.142,3.626,1.639-52.292,1.232
  c-3.781-0.031-6.486-0.525-26.368-20.556c-49.098-45.907-49.018-47.636-54.671-49.065c-16.002-3.943-23.125-2.603-29.864-11.443
  C2011.726,1457.828,2010.713,1450.27,2013.842,1444.543 M2022.76,1447.672c-2.261,6.189,2.471,13.97,7.033,15.841
  c10.66,3.446,17.565-11.048,10.796-18.275C2036.268,1440.29,2025.869,1440.229,2022.76,1447.672z"></path><path d="M55.128,1437.363c12.001-1.091,21.099,8.944,19.671,18.927
  c-1.033,10.572-13.235,20.403-27.155,14.285c-5.911-2.842-10.138-9.198-10.028-15.804
  C38.244,1445.72,46.235,1438.242,55.128,1437.363 M47.321,1454.076c0.335,1.677,0.781,3.324,1.177,5.002
  c0.97,5.349,7.521,8.765,12.468,6.551c7.993-3.348,10.452-12.181,6.337-17.756C60.813,1438.473,44.955,1443.571,47.321,1454.076z"></path><path d="M2089.971,1441.566c14.482,2.119,17.267,12.387,19.543,20.867
  c0.976,3.599,0.464,7.545,2.196,10.961c1.714,3.379,5.179,6.081,9.076,6.197c2.316,0.197,64.052,0.958,64.052,0.958
  c11.337-1.092,58.582,0.438,62.868-0.177c3.985-0.552,55.843-0.254,144.548-0.287c0.61-0.006,146.14,0.163,167.745-0.281v6.96
  c-8.119,0.543-16.25-0.366-24.356,0.165c0,0-136.077,0.167-143.999,0.153c-0.615,0.008-121.978,0.346-147.58-0.744
  c-20.336,0.085-40.678,0.043-61.008-0.012c-3.086,0.055-6.099,0.878-9.174,0.811c-72.399-0.754-52.064,3.764-70.865-8.265
  c-1.568-2.025-3.361-4.227-6.026-4.678c-4.074-0.86-7.978-2.391-12.12-2.861c-3.324-0.665-7.204-0.531-9.717-3.141
  c-3.52-3.587-5.423-8.985-4.215-13.938C2071.98,1450.427,2080.187,1440.234,2089.971,1441.566z"></path><path d="M0,1456.559c24.846-1.797,28.63,33.405,0,35.079v-6.868
  c19.142-1.485,16.787-24.39,0-23.355V1456.559z"></path><path d="M1572.896,1460.743c26.361-4.703,32.525,27.391,12.986,34.298
  c-11.293,4.656-28.169-4.739-25.887-19.592C1561.265,1468.697,1566.376,1462.89,1572.896,1460.743 M1568.791,1472.747
  c0.304,16.441,10.635,16.651,15.206,14.255c4.605-2.849,6.948-8.96,5.118-14.102
  C1585.878,1465.518,1573.868,1461.662,1568.791,1472.747z"></path><path d="M1764.796,1460.347c13.536-3.692,27.059,10.849,23.764,21.233
  c-2.969,12.51-18.123,18.943-29.174,10.815c-12.494-9.429-8.858-21.534-3.623-26.369
  C1758.153,1463.305,1761.307,1461.347,1764.796,1460.347 M1760.447,1476.511c0.262,2.69,1.171,5.374,3.166,7.295l0.098,0.573
  c9.918,9.449,19.998-1.848,17.634-10.284C1778.126,1460.521,1757.613,1465.002,1760.447,1476.511z"></path><path d="M1828.201,1460.396c13.362-3.555,25.957,8.542,24.032,20.501
  c-1.567,11.293-16.41,20.214-28.79,11.406c-9.688-7.021-10.75-15.718-6.825-22.623
  C1819.064,1465.239,1823.328,1461.811,1828.201,1460.396 M1824.572,1472.534c-0.706,3.651,2.34,11.143,5.331,13.279
  c7.358,5.563,18.51-2.874,14.84-13.584C1841.328,1463.623,1827.393,1462.64,1824.572,1472.534z"></path><path d="M1316.738,1461.89c13.901-4.021,23.848,4.512,25.655,13.925
  c2.844,10.54-8.326,24.141-21.898,20.373c-13.427-2.532-19.107-15.129-13.23-25.905
  C1309.132,1466.33,1312.797,1463.573,1316.738,1461.89 M1315.53,1474.778c-1.817,8.707,6.559,18.243,15.151,13.151
  c3.568-2.476,6.234-6.874,5.319-11.321C1335.095,1466.098,1317.951,1463.069,1315.53,1474.778z"></path><path d="M490.511,1465.788c9.959-1.618,19.717,6.999,20.635,15.78
  c2.097,16.601-22.238,27.803-34.042,12.76c-6.566-9.092-3.623-18.063,1.409-22.806
  C481.557,1468.087,486.065,1466.428,490.511,1465.788 M483.106,1479.768c0.561,7.019,2.789,14.377,9.759,14.047
  c9.483,0.515,16.507-14.203,7.082-20.623C493.85,1468.787,483.347,1471.75,483.106,1479.768z"></path><path d="M542.711,1471.058c13.945-13.334,34.561-0.99,32.822,13.541
  c-1.46,12.849-17.404,22.119-29.87,13.181c-4.117-2.647-6.972-7.069-7.881-11.845
  C536.874,1480.5,539.259,1475.132,542.711,1471.058 M548.104,1477.157c-0.799,3.263,1.055,6.35,1.305,9.576l0.323,0.012
  c0.854,5.294,7.179,7.545,11.791,5.673c4.19-2.287,7.228-6.655,7.771-11.4C569.698,1468.917,550.067,1466.229,548.104,1477.157z"></path><path d="M2522.006,1544.289c5.642-1.269,8.734-7.637,14.792-7.832
  c7.722-0.201,15.463-0.037,23.203-0.049v6.813c-5.496-0.043-10.979-0.024-16.463-0.024c-9.97,0.067-11.375,4.304-13.114,13.078
  c-1.502,5.622-1.563,24.59-16.834,26.155c-23.095,3.267-31.818-28.876-7.869-34.499
  C2511.136,1546.699,2516.602,1545.631,2522.006,1544.289 M2500.242,1558.447c-5.277,9.835,7.643,23.81,16.597,15.414
  c4.05-3.227,5.233-9.302,3.202-13.962C2516.327,1552.541,2504.302,1550.523,2500.242,1558.447z"></path><path d="M1056.145,1548.401c12.305-11.651,36.154-0.904,30.98,18.707
  c-5,11.255-15.418,14.728-25.557,11.181c-6.514-2.598-11.595-9.082-11.662-16.225
  C1049.594,1556.824,1052.131,1551.694,1056.145,1548.401 M1059.921,1556.44c-1.125,2.945,0.458,10.712,3.879,13.529
  c7.298,6.956,17.993-1.717,16.804-10.43C1079.511,1549.444,1064.519,1545.078,1059.921,1556.44z"></path><path d="M2554.138,1592.208c1.982-1.671,3.843-3.483,5.862-5.118v13.218
  c-2.422,5.138-2.948,17.453-5.66,22.709c-6.243,12.718-22.966,13.174-31.62,1.94c-6.359-7.888-4.019-21.227,8.71-25.954
  c3.556-1.232,7.301-1.86,10.943-2.848C2546.343,1595.062,2550.796,1594.879,2554.138,1592.208 M2527.66,1605.95
  c-5.52,7.253,1.196,19.903,10.43,18.945c5.91-0.732,10.131-6.941,9.32-12.712C2546.768,1603.009,2534.477,1597.457,2527.66,1605.95
  z"></path><path d="M2560,1639.077v26.838C2549.238,1658.207,2551.526,1644.17,2560,1639.077z"></path><path d="M1146.102,1687.178c4.166,4.083,16.699,16.612,20.36,21.318h-50.828
  c-0.842-2.361-1.623-4.776-1.793-7.271C1113.034,1684.983,1134.562,1675.73,1146.102,1687.178z"></path><path d="M907.193,1708.497h-36.781
  C876.884,1692.852,898.369,1691.343,907.193,1708.497z"></path></g>`,1),En=[Tn];function Sn(c,n){return t1(),f1("svg",$n,En)}var In=S1(wn,[["render",Sn]]);const An={class:"light-board"},On={class:"light-board__ramp"},Bn={__name:"LightBoard",setup(c){const n=z0(),t=R2(0),e=[],s=200;let o=200;return o0(()=>{const r=s*n.$state.wordSize+o;t.value=0,e.forEach(i=>{clearTimeout(i)}),e.length=0;for(let i=0;i<n.$state.wordSize;i++)e.push(setTimeout(()=>{t.value|=Math.pow(2,i)},r-s*i));o=0}),(r,i)=>(t1(),f1("section",An,[V(_(In),{class:"light-board__backdrop"}),h("div",On,[(t1(!0),f1(h1,null,X4(_(n).bitRange,a=>(t1(),U2(_(xn),{key:a.id,class:b2([{"is-visible":!!(t.value&a.weight)},"light-board__ramp-item"]),bit:a,onClick:u=>_(n).toggleLighted(a.weight)},null,8,["class","bit","onClick"]))),128))])]))}};var Fn=S1(Bn,[["__scopeId","data-v-52c1983a"]]);const Ln={class:"app-main"},kn={__name:"App",setup(c){return(n,t)=>(t1(),f1(h1,null,[V(_(D8)),h("main",Ln,[V(_(Fn))]),V(_(a9))],64))}},M5=Y7(kn);M5.use(Q7());M5.mount("#app");
