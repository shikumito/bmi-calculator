var Lt=Object.defineProperty;var Nt=(t,e,n)=>e in t?Lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>Nt(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function C(){}function kt(t){return t()}function bt(){return Object.create(null)}function J(t){t.forEach(kt)}function Bt(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $t(t){return Object.keys(t).length===0}function At(t,...e){if(t==null){for(const l of e)l(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function T(t,e,n){t.$$.on_destroy.push(At(e,n))}function M(t,e,n){return t.set(n),e}function d(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function B(){return W(" ")}function Mt(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return t===""?null:+t}function Ft(t){return Array.from(t.childNodes)}function it(t,e){e=""+e,t.data!==e&&(t.data=e)}function _t(t,e){t.value=e??""}function ht(t,e,n){t.classList.toggle(e,!!n)}let ut;function q(t){ut=t}const A=[],D=[];let F=[];const tt=[],St=Promise.resolve();let et=!1;function jt(){et||(et=!0,St.then(Et))}function nt(t){F.push(t)}function gt(t){tt.push(t)}const Z=new Set;let N=0;function Et(){if(N!==0)return;const t=ut;do{try{for(;N<A.length;){const e=A[N];N++,q(e),Pt(e.$$)}}catch(e){throw A.length=0,N=0,e}for(q(null),A.length=0,N=0;D.length;)D.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];Z.has(n)||(Z.add(n),n())}F.length=0}while(A.length);for(;tt.length;)tt.pop()();et=!1,Z.clear(),q(t)}function Pt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Tt(t){const e=[],n=[];F.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),F=e}const z=new Set;let Ut;function K(t,e){t&&t.i&&(z.delete(t),t.i(e))}function lt(t,e,n,l){if(t&&t.o){if(z.has(t))return;z.add(t),Ut.c.push(()=>{z.delete(t)}),t.o(e)}}function xt(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function rt(t){t&&t.c()}function R(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),nt(()=>{const r=t.$$.on_mount.map(kt).filter(Bt);t.$$.on_destroy?t.$$.on_destroy.push(...r):J(r),t.$$.on_mount=[]}),i.forEach(nt)}function G(t,e){const n=t.$$;n.fragment!==null&&(Tt(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(A.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(t,e,n,l,i,r,a=null,s=[-1]){const w=ut;q(t);const u=t.$$={fragment:null,ctx:[],props:r,update:C,not_equal:i,bound:bt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(w?w.$$.context:[])),callbacks:bt(),dirty:s,skip_bound:!1,root:e.target||w.$$.root};a&&a(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(c,x,..._)=>{const v=_.length?_[0]:x;return u.ctx&&i(u.ctx[c],u.ctx[c]=v)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](v),f&&qt(t,c)),x}):[],u.update(),f=!0,J(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const c=Ft(e.target);u.fragment&&u.fragment.l(c),c.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&K(t.$$.fragment),R(t,e.target,e.anchor),Et()}q(w)}class ot{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){G(this,1),this.$destroy=C}$on(e,n){if(!Bt(n))return C;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ht);const $=[];function U(t,e=C){let n;const l=new Set;function i(s){if(Q(t,s)&&(t=s,n)){const w=!$.length;for(const u of l)u[1](),$.push(u,t);if(w){for(let u=0;u<$.length;u+=2)$[u][0]($[u+1]);$.length=0}}}function r(s){i(s(t))}function a(s,w=C){const u=[s,w];return l.add(u),l.size===1&&(n=e(i,r)||C),s(t),()=>{l.delete(u),l.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:a}}function Vt(t){let e,n,l,i,r,a,s,w;return{c(){e=p("div"),n=p("label"),l=W(t[2]),i=B(),r=p("input"),o(n,"for",t[1]),o(n,"class","tw-inline-flex tw-items-center tw-min-w-20 tw-px-3 tw-rounded-l-md tw-border-t tw-border-l tw-border-b tw-border-slate-300 tw-bg-white tw-text-gray-500 tw-text-sm tw-shadow-sm "),o(r,"id",t[1]),o(r,"type","number"),o(r,"step",t[4]),o(r,"min",t[5]),o(r,"placeholder",t[3]),o(r,"class","tw-flex-1 tw-w-full tw-px-4 tw-py-2 tw-rounded-r-md tw-border tw-border-slate-300 tw-bg-white tw-text-gray-700 tw-text-base placeholder:tw-text-gray-400 tw-shadow-sm tw-appearance-none focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-border-transparent "),o(e,"class",a=`tw-flex tw-relative tw-min-w-48 ${t[6]}`)},m(u,f){L(u,e,f),d(e,n),d(n,l),d(e,i),d(e,r),_t(r,t[0]),s||(w=Mt(r,"input",t[7]),s=!0)},p(u,[f]){f&4&&it(l,u[2]),f&2&&o(n,"for",u[1]),f&2&&o(r,"id",u[1]),f&16&&o(r,"step",u[4]),f&32&&o(r,"min",u[5]),f&8&&o(r,"placeholder",u[3]),f&1&&Ct(r.value)!==u[0]&&_t(r,u[0]),f&64&&a!==(a=`tw-flex tw-relative tw-min-w-48 ${u[6]}`)&&o(e,"class",a)},i:C,o:C,d(u){u&&I(e),s=!1,w()}}}function zt(t,e,n){let{id:l}=e,{label:i}=e,{value:r}=e,{placeholder:a}=e,{step:s}=e,{min:w}=e,{class:u=""}=e;function f(){r=Ct(this.value),n(0,r)}return t.$$set=c=>{"id"in c&&n(1,l=c.id),"label"in c&&n(2,i=c.label),"value"in c&&n(0,r=c.value),"placeholder"in c&&n(3,a=c.placeholder),"step"in c&&n(4,s=c.step),"min"in c&&n(5,w=c.min),"class"in c&&n(6,u=c.class)},[r,l,i,a,s,w,u,f]}class vt extends ot{constructor(e){super(),st(this,e,zt,Vt,Q,{id:1,label:2,value:0,placeholder:3,step:4,min:5,class:6})}}function yt(t){let e,n;return{c(){e=p("p"),n=W(t[4]),o(e,"class","tw-absolute -tw-top-4 tw-left-0 tw-right-0 tw-text-red-500 tw-text-sm tw-text-center tw-bg-white tw-py-1")},m(l,i){L(l,e,i),d(e,n)},p(l,i){i&16&&it(n,l[4])},d(l){l&&I(e)}}}function Dt(t){let e;return{c(){e=p("div"),e.innerHTML='<div class="tw-inline-block tw-text-left"><ol class="tw-list-decimal tw-pl-5"><li class="tw-mb-2"><span>「体重」と「身長」を入力してください。</span></li> <li><span>「BMIを診断する」を押すと診断結果が表示されます。</span></li></ol></div>',o(e,"class","tw-text-gray-500 tw-text-center")},m(n,l){L(n,e,l)},p:C,d(n){n&&I(e)}}}function Kt(t){let e,n,l,i,r,a,s,w,u,f,c,x;function _(g,k){return g[2]===g[5].Normal?Jt:g[2]===g[5].Under?Gt:Rt}let v=_(t),h=v(t);return{c(){e=p("div"),n=p("div"),l=p("p"),l.textContent="あなたのBMI",i=B(),r=p("p"),a=W(t[3]),s=B(),w=p("div"),u=B(),f=p("div"),c=p("p"),c.textContent="判定",x=B(),h.c(),o(l,"class","tw-text-base tw-text-gray-700 tw-mb-2"),o(r,"class","tw-text-4xl tw-font-bold"),o(n,"class","tw-flex-1 tw-text-center"),o(w,"class","tw-w-0.5 tw-self-stretch tw-bg-white tw-mx-4"),o(c,"class","tw-text-base tw-text-gray-700 tw-mb-3"),o(f,"class","tw-flex-1 tw-text-center"),o(e,"class","tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full")},m(g,k){L(g,e,k),d(e,n),d(n,l),d(n,i),d(n,r),d(r,a),d(e,s),d(e,w),d(e,u),d(e,f),d(f,c),d(f,x),h.m(f,null)},p(g,k){k&8&&it(a,g[3]),v!==(v=_(g))&&(h.d(1),h=v(g),h&&(h.c(),h.m(f,null)))},d(g){g&&I(e),h.d()}}}function Rt(t){let e;return{c(){e=p("p"),e.innerHTML='肥満<span class="tw-text-xl tw-ml-1">気味</span>',o(e,"class","tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-amber-500")},m(n,l){L(n,e,l)},d(n){n&&I(e)}}}function Gt(t){let e;return{c(){e=p("p"),e.textContent="やせ",o(e,"class","tw-text-4xl tw-font-bold tw-text-cyan-500")},m(n,l){L(n,e,l)},d(n){n&&I(e)}}}function Jt(t){let e;return{c(){e=p("p"),e.textContent="適正",o(e,"class","tw-text-4xl tw-font-bold tw-text-emerald-500")},m(n,l){L(n,e,l)},d(n){n&&I(e)}}}function Qt(t){let e,n,l,i,r,a,s,w,u,f,c,x,_,v,h,g,k,b,S,j,ft,H,P,X,ct;function It(m){t[12](m)}let at={id:"weight",label:"体重(kg)",placeholder:"60",step:"0.1",min:"0",class:"tw-w-full sm:tw-w-1/2"};t[1]!==void 0&&(at.value=t[1]),s=new vt({props:at}),D.push(()=>xt(s,"value",It));function Ot(m){t[13](m)}let dt={id:"height",label:"身長(cm)",placeholder:"160",step:"1",min:"0",class:"tw-w-full sm:tw-w-1/2"};t[0]!==void 0&&(dt.value=t[0]),f=new vt({props:dt}),D.push(()=>xt(f,"value",Ot));let y=t[4]&&yt(t);function wt(m,O){return m[3]>0?Kt:Dt}let V=wt(t),E=V(t);return{c(){e=p("div"),n=p("div"),l=p("p"),l.textContent="自分の肥満度をチェックしてみましょう!",i=B(),r=p("div"),a=p("div"),rt(s.$$.fragment),u=B(),rt(f.$$.fragment),x=B(),_=p("div"),y&&y.c(),v=B(),h=p("button"),h.textContent="BMIを診断する",g=B(),k=p("div"),b=p("h3"),b.textContent="診断結果",S=B(),j=p("div"),E.c(),ft=B(),H=p("div"),H.innerHTML=`<p><span class="tw-pr-2">BMI計算式：</span>体重kg ÷ (身長m × 身長m) = BMI</p> <p><span class="tw-pr-2">BMI判定基準：</span>18.5未満 (痩せ) / 18.5以上～25.0未満 (適正) /
			25.0以上(肥満気味)</p>`,o(l,"class","tw-mb-4 tw-text-xl tw-font-bold tw-text-center tw-text-gray-700"),o(a,"class","tw-flex tw-flex-col sm:tw-flex-row sm:tw-space-x-4 tw-space-y-4 sm:tw-space-y-0 tw-my-8"),o(h,"type","button"),o(h,"class","tw-w-full tw-py-3 tw-mt-4 tw-rounded-lg tw-bg-red-500 tw-text-white tw-text-lg tw-text-center tw-font-semibold tw-transition tw-ease-in tw-duration-200 hover:tw-bg-red-600 focus:tw-outline-none focus:tw-ring-2 tw-ring-red-500 focus:tw-ring-offset-2 focus:tw-ring-offset-red-200 "),o(_,"class","tw-relative"),o(r,"class","tw-px-8"),o(b,"class","tw-text-xl tw-font-normal tw-text-center tw-text-gray-500 tw-mb-4 tw-pb-3 tw-border-b-2 tw-border-white"),ht(b,"tw-text-gray-700",t[3]>0),o(j,"class","tw-flex-1 tw-flex tw-items-center tw-justify-center"),o(k,"class","tw-flex tw-flex-col tw-min-h-48 tw-mt-10 tw-px-6 sm:tw-px-8 tw-py-4 tw-bg-slate-100 tw-rounded-3xl"),o(n,"class","tw-p-6 sm:tw-p-8 tw-bg-white tw-rounded-xl tw-border-2 tw-border-slate-300"),o(H,"class","tw-mt-2 tw-px-4 tw-text-sm tw-text-gray-500"),o(e,"class","tw-max-w-xl tw-mx-auto")},m(m,O){L(m,e,O),d(e,n),d(n,l),d(n,i),d(n,r),d(r,a),R(s,a,null),d(a,u),R(f,a,null),d(r,x),d(r,_),y&&y.m(_,null),d(_,v),d(_,h),d(n,g),d(n,k),d(k,b),d(k,S),d(k,j),E.m(j,null),d(e,ft),d(e,H),P=!0,X||(ct=Mt(h,"click",t[11]),X=!0)},p(m,[O]){const pt={};!w&&O&2&&(w=!0,pt.value=m[1],gt(()=>w=!1)),s.$set(pt);const mt={};!c&&O&1&&(c=!0,mt.value=m[0],gt(()=>c=!1)),f.$set(mt),m[4]?y?y.p(m,O):(y=yt(m),y.c(),y.m(_,v)):y&&(y.d(1),y=null),(!P||O&8)&&ht(b,"tw-text-gray-700",m[3]>0),V===(V=wt(m))&&E?E.p(m,O):(E.d(1),E=V(m),E&&(E.c(),E.m(j,null)))},i(m){P||(K(s.$$.fragment,m),K(f.$$.fragment,m),P=!0)},o(m){lt(s.$$.fragment,m),lt(f.$$.fragment,m),P=!1},d(m){m&&I(e),G(s),G(f),y&&y.d(),E.d(),X=!1,ct()}}}function Wt(t,e,n){let l,i,r,a,s;const w={Under:"under",Normal:"normal",Over:"over"};let u=U(null);T(t,u,b=>n(1,a=b));let f=U(null);T(t,f,b=>n(0,r=b));let c=U(0);T(t,c,b=>n(3,i=b));let x=U(null);T(t,x,b=>n(2,l=b));let _=U(null);T(t,_,b=>n(4,s=b)),u.subscribe(v),f.subscribe(v);function v(){i!==0&&(M(c,i=0,i),M(x,l=null,l))}function h(){if(a===null&&r===null){M(_,s="体重と身長を入力してください。",s);return}else if(a===null){M(_,s="体重を入力してください。",s);return}else if(r===null){M(_,s="身長を入力してください。",s);return}M(_,s=null,s);const b=a,S=r/100;M(c,i=Number((b/(S*S)).toFixed(1)),i),i<18.5?M(x,l=w.Under,l):i<25?M(x,l=w.Normal,l):M(x,l=w.Over,l)}function g(b){a=b,u.set(a)}function k(b){r=b,f.set(r)}return t.$$.update=()=>{t.$$.dirty&3&&(a!==null||r!==null)&&M(_,s=null,s)},[r,a,l,i,s,w,u,f,c,x,_,h,g,k]}class Xt extends ot{constructor(e){super(),st(this,e,Wt,Qt,Q,{})}}function Yt(t){let e,n;return e=new Xt({}),{c(){rt(e.$$.fragment)},m(l,i){R(e,l,i),n=!0},p:C,i(l){n||(K(e.$$.fragment,l),n=!0)},o(l){lt(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}class Zt extends ot{constructor(e){super(),st(this,e,null,Yt,Q,{})}}new Zt({target:document.getElementById("bmi")});