const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BdpghPmH.js","../chunks/Bg9kRutz.js","../chunks/69_IOA4Y.js","../chunks/DIeogL5L.js","../chunks/Bm0FhLEK.js","../chunks/BQPxy4xd.js","../chunks/Cy-pn9s0.js","../chunks/CMB7kT7n.js","../chunks/eP3un58F.js","../chunks/HxPqkZ8F.js","../chunks/CHZwxh0T.js","../assets/0.6XrnjVld.css","../nodes/1.Bdez-2aR.js","../chunks/C92lvqdm.js","../nodes/2.6xiKYCuF.js","../assets/global.DuPibpby.css","../nodes/3.CqFWMRxw.js","../nodes/4.CG42OUbp.js","../chunks/F2zvKX18.js","../assets/4.CMibUpoG.css","../nodes/5.5mJwviCY.js","../nodes/6.Yy1PuL4y.js","../nodes/7.BgoFVPZS.js","../nodes/8.BlIfxeEe.js"])))=>i.map(i=>d[i]);
var N=r=>{throw TypeError(r)};var U=(r,t,s)=>t.has(r)||N("Cannot "+s);var l=(r,t,s)=>(U(r,t,"read from private field"),s?s.call(r):t.get(r)),x=(r,t,s)=>t.has(r)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,s),D=(r,t,s,o)=>(U(r,t,"write to private field"),o?o.call(r,s):t.set(r,s),s);import{E as K,p as M,a4 as Q,a5 as X,C as Z,a9 as $,t as tt,a0 as T,ah as et,g,an as rt,V as st,af as at,D as ot,a as nt,b as it,ao as V,ap as ct,K as w,O as lt,G as ut,M as mt,N as dt,i as C,L as ft}from"../chunks/Bm0FhLEK.js";import{h as _t,m as ht,u as vt,s as gt}from"../chunks/C92lvqdm.js";import"../chunks/Bg9kRutz.js";import{p as I,a as Et,i as S}from"../chunks/F2zvKX18.js";import{t as Y,a as p,c as j,d as yt}from"../chunks/BQPxy4xd.js";import{b as B}from"../chunks/Cy-pn9s0.js";import{o as bt}from"../chunks/eP3un58F.js";function q(r,t,s){K&&M();var o=r,n,c;Q(()=>{n!==(n=t())&&(c&&($(c),c=null),n&&(c=Z(()=>s(o,n))))},X),K&&(o=tt)}function Pt(r){return class extends Rt{constructor(t){super({component:r,...t})}}}var E,m;class Rt{constructor(t){x(this,E);x(this,m);var c;var s=new Map,o=(a,e)=>{var d=at(e);return s.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,e){return g(s.get(e)??o(e,Reflect.get(a,e)))},has(a,e){return e===et?!0:(g(s.get(e)??o(e,Reflect.get(a,e))),Reflect.has(a,e))},set(a,e,d){return T(s.get(e)??o(e,d),d),Reflect.set(a,e,d)}});D(this,m,(t.hydrate?_t:ht)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&rt(),D(this,E,n.$$events);for(const a of Object.keys(l(this,m)))a==="$set"||a==="$destroy"||a==="$on"||st(this,a,{get(){return l(this,m)[a]},set(e){l(this,m)[a]=e},enumerable:!0});l(this,m).$set=a=>{Object.assign(n,a)},l(this,m).$destroy=()=>{vt(l(this,m))}}$set(t){l(this,m).$set(t)}$on(t,s){l(this,E)[t]=l(this,E)[t]||[];const o=(...n)=>s.call(this,...n);return l(this,E)[t].push(o),()=>{l(this,E)[t]=l(this,E)[t].filter(n=>n!==o)}}$destroy(){l(this,m).$destroy()}}E=new WeakMap,m=new WeakMap;const pt="modulepreload",Ot=function(r,t){return new URL(r,t).href},W={},v=function(t,s,o){let n=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));n=Promise.allSettled(s.map(u=>{if(u=Ot(u,o),u in W)return;W[u]=!0;const y=u.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(!!o)for(let b=a.length-1;b>=0;b--){const i=a[b];if(i.href===u&&(!y||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${k}`))return;const _=document.createElement("link");if(_.rel=y?"stylesheet":pt,y||(_.as="script"),_.crossOrigin="",_.href=u,d&&_.setAttribute("nonce",d),document.head.appendChild(_),y)return new Promise((b,i)=>{_.addEventListener("load",b),_.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(a){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=a,window.dispatchEvent(e),!e.defaultPrevented)throw a}return n.then(a=>{for(const e of a||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Ft={};var Lt=Y('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),At=Y("<!> <!>",1);function wt(r,t){ot(t,!0);let s=I(t,"components",23,()=>[]),o=I(t,"data_0",3,null),n=I(t,"data_1",3,null);nt(()=>t.stores.page.set(t.page)),it(()=>{t.stores,t.page,t.constructors,s(),t.form,o(),n(),t.stores.page.notify()});let c=V(!1),a=V(!1),e=V(null);bt(()=>{const i=t.stores.page.subscribe(()=>{g(c)&&(T(a,!0),ct().then(()=>{T(e,Et(document.title||"untitled page"))}))});return T(c,!0),i});const d=C(()=>t.constructors[1]);var u=At(),y=w(u);{var k=i=>{var h=j();const O=C(()=>t.constructors[0]);var L=w(h);q(L,()=>g(O),(P,R)=>{B(R(P,{get data(){return o()},get form(){return t.form},children:(f,xt)=>{var G=j(),z=w(G);q(z,()=>g(d),(H,J)=>{B(J(H,{get data(){return n()},get form(){return t.form}}),A=>s()[1]=A,()=>{var A;return(A=s())==null?void 0:A[1]})}),p(f,G)},$$slots:{default:!0}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),p(i,h)},F=i=>{var h=j();const O=C(()=>t.constructors[0]);var L=w(h);q(L,()=>g(O),(P,R)=>{B(R(P,{get data(){return o()},get form(){return t.form}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),p(i,h)};S(y,i=>{t.constructors[1]?i(k):i(F,!1)})}var _=lt(y,2);{var b=i=>{var h=Lt(),O=mt(h);{var L=P=>{var R=yt();ft(()=>gt(R,g(e))),p(P,R)};S(O,P=>{g(a)&&P(L)})}dt(h),p(i,h)};S(_,i=>{g(c)&&i(b)})}p(r,u),ut()}const Gt=Pt(wt),Nt=[()=>v(()=>import("../nodes/0.BdpghPmH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>v(()=>import("../nodes/1.Bdez-2aR.js"),__vite__mapDeps([12,1,2,3,4,13,10,5,7,9,8]),import.meta.url),()=>v(()=>import("../nodes/2.6xiKYCuF.js"),__vite__mapDeps([14,1,2,3,4,5,15]),import.meta.url),()=>v(()=>import("../nodes/3.CqFWMRxw.js"),__vite__mapDeps([16,1,2,3]),import.meta.url),()=>v(()=>import("../nodes/4.CG42OUbp.js"),__vite__mapDeps([17,1,2,3,4,5,18,10,7,8,13,6,19,15]),import.meta.url),()=>v(()=>import("../nodes/5.5mJwviCY.js"),__vite__mapDeps([20,1,2,3,4,5,15]),import.meta.url),()=>v(()=>import("../nodes/6.Yy1PuL4y.js"),__vite__mapDeps([21,1,2,3,4,5,15]),import.meta.url),()=>v(()=>import("../nodes/7.BgoFVPZS.js"),__vite__mapDeps([22,1,2,3,4,5,15]),import.meta.url),()=>v(()=>import("../nodes/8.BlIfxeEe.js"),__vite__mapDeps([23,1,2,3,4,5,15]),import.meta.url)],Ut=[],Kt={"/":[2],"/contributions":[3],"/dataset":[4],"/methodology":[5],"/problem":[6],"/references":[7],"/results":[8]},Tt={handleError:({error:r})=>{console.error(r)},reroute:()=>{},transport:{}},kt=Object.fromEntries(Object.entries(Tt.transport).map(([r,t])=>[r,t.decode])),Wt=!1,Yt=(r,t)=>kt[r](t);export{Yt as decode,kt as decoders,Kt as dictionary,Wt as hash,Tt as hooks,Ft as matchers,Nt as nodes,Gt as root,Ut as server_loads};
