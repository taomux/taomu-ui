var fr=Object.defineProperty;var br=(r,t,o)=>t in r?fr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var f=(r,t,o)=>br(r,typeof t!="symbol"?t+"":t,o);import{R as k,r as I}from"./index-l2PZgWEW.js";import{j as D}from"./jsx-runtime-DWbWqHZ-.js";import{s as rr,w as dr,T as gr,u as G,i as hr}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";var pr=Object.defineProperty,xr=(r,t,o)=>t in r?pr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,mr=(r,t,o)=>(xr(r,t+"",o),o),S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vr=typeof S=="object"&&S&&S.Object===Object&&S,tr=vr,yr=tr,Sr=typeof self=="object"&&self&&self.Object===Object&&self,wr=yr||Sr||Function("return this")(),d=wr,$r=d,Tr=$r.Symbol,L=Tr,V=L,or=Object.prototype,jr=or.hasOwnProperty,Rr=or.toString,m=V?V.toStringTag:void 0;function kr(r){var t=jr.call(r,m),o=r[m];try{r[m]=void 0;var e=!0}catch{}var c=Rr.call(r);return e&&(t?r[m]=o:delete r[m]),c}var Or=kr,Er=Object.prototype,Fr=Er.toString;function Br(r){return Fr.call(r)}var Mr=Br,z=L,Lr=Or,Cr=Mr,Pr="[object Null]",Ar="[object Undefined]",_=z?z.toStringTag:void 0;function Ir(r){return r==null?r===void 0?Ar:Pr:_&&_ in Object(r)?Lr(r):Cr(r)}var C=Ir;function Dr(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var er=Dr,Gr=C,Vr=er,zr="[object AsyncFunction]",_r="[object Function]",Wr="[object GeneratorFunction]",Kr="[object Proxy]";function Xr(r){if(!Vr(r))return!1;var t=Gr(r);return t==_r||t==Wr||t==zr||t==Kr}var Nr=Xr,Ur=d,qr=Ur["__core-js_shared__"],Hr=qr,j=Hr,W=function(){var r=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Yr(r){return!!W&&W in r}var Jr=Yr,Zr=Function.prototype,Qr=Zr.toString;function rt(r){if(r!=null){try{return Qr.call(r)}catch{}try{return r+""}catch{}}return""}var nr=rt,tt=Nr,ot=Jr,et=er,nt=nr,at=/[\\^$.*+?()[\]{}|]/g,ct=/^\[object .+?Constructor\]$/,st=Function.prototype,it=Object.prototype,lt=st.toString,ut=it.hasOwnProperty,ft=RegExp("^"+lt.call(ut).replace(at,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bt(r){if(!et(r)||ot(r))return!1;var t=tt(r)?ft:ct;return t.test(nt(r))}var dt=bt;function gt(r,t){return r==null?void 0:r[t]}var ht=gt,pt=dt,xt=ht;function mt(r,t){var o=xt(r,t);return pt(o)?o:void 0}var p=mt,vt=p,yt=d,St=vt(yt,"Map"),wt=St,$t=p;$t(Object,"create");var Tt=d;Tt.Uint8Array;var K=L,X=K?K.prototype:void 0;X&&X.valueOf;function jt(r){return r!=null&&typeof r=="object"}var ar=jt,Rt=C,kt=ar,Ot="[object Arguments]";function Et(r){return kt(r)&&Rt(r)==Ot}var Ft=Et,N=Ft,Bt=ar,cr=Object.prototype,Mt=cr.hasOwnProperty,Lt=cr.propertyIsEnumerable;N(function(){return arguments}());var $={exports:{}};function Ct(){return!1}var Pt=Ct;$.exports;(function(r,t){var o=d,e=Pt,c=t&&!t.nodeType&&t,n=c&&!0&&r&&!r.nodeType&&r,s=n&&n.exports===c,i=s?o.Buffer:void 0,l=i?i.isBuffer:void 0,g=l||e;r.exports=g})($,$.exports);$.exports;var T={exports:{}};T.exports;(function(r,t){var o=tr,e=t&&!t.nodeType&&t,c=e&&!0&&r&&!r.nodeType&&r,n=c&&c.exports===e,s=n&&o.process,i=function(){try{var l=c&&c.require&&c.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();r.exports=i})(T,T.exports);var At=T.exports,U=At;U&&U.isTypedArray;var It=p,Dt=d,Gt=It(Dt,"DataView"),Vt=Gt,zt=p,_t=d,Wt=zt(_t,"Promise"),Kt=Wt,Xt=p,Nt=d,Ut=Xt(Nt,"Set"),qt=Ut,Ht=p,Yt=d,Jt=Ht(Yt,"WeakMap"),Zt=Jt,O=Vt,E=wt,F=Kt,B=qt,M=Zt,sr=C,x=nr,q="[object Map]",Qt="[object Object]",H="[object Promise]",Y="[object Set]",J="[object WeakMap]",Z="[object DataView]",ro=x(O),to=x(E),oo=x(F),eo=x(B),no=x(M),h=sr;(O&&h(new O(new ArrayBuffer(1)))!=Z||E&&h(new E)!=q||F&&h(F.resolve())!=H||B&&h(new B)!=Y||M&&h(new M)!=J)&&(h=function(r){var t=sr(r),o=t==Qt?r.constructor:void 0,e=o?x(o):"";if(e)switch(e){case ro:return Z;case to:return q;case oo:return H;case eo:return Y;case no:return J}return t});function ir(r){return r!=null}function mo(r){return r instanceof Promise}async function vo(r){return new Promise(t=>setTimeout(t,r))}class yo{constructor(){mr(this,"TM",Date.now())}debounce(t,o){this.TM=Date.now(),setTimeout(()=>{Date.now()-this.TM>=o&&t()},o)}throttle(t,o){Date.now()-this.TM>=o&&(t(),this.TM=Date.now())}}function So(r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"){return r.replace(/[xy]/g,function(t){const o=Math.random()*16|0;return(t=="x"?o:o&3|8).toString(16)})}function wo(r){return new Promise((t,o)=>{const e=document.createElement("textarea");e.value=r,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")?t(void 0):o()}catch(c){console.error("Fallback: Oops, unable to copy",c)}document.body.removeChild(e)})}function ao(r,t){const o={},e=P(t);for(const c in r){let n=r[c];ir(n)&&(typeof n=="number"&&(n=n+"px"),o[`${e}${c}`]=n)}return o}function R(r,t){const o=P(t);let e="";for(const c in r){let n=r[c];ir(n)&&(typeof n=="number"&&(n=n+"px"),e+=`${o}${c}: ${n}; `)}return e.trim()}function P(...r){let t="--";for(const o of r)o&&(t+=`${o}-`);return t}function co(r,t,o){if(!r||!r.matches)return!1;if(r.matches(t))return!0;if(o){if(typeof o=="string"){if(r.matches(o))return!1}else if(r===o)return!1}return r!=null&&r.parentElement?co(r.parentElement,t,o):!1}function $o(){const r=document.body.clientWidth;return window.innerWidth-r}class so{constructor(t,o){f(this,"state");f(this,"actions");f(this,"defaultDispatchOptions",{check:!1});f(this,"listeners",new Map);f(this,"subscribe",(t,o)=>{const e=this.listeners.get(o)||new Set;return e.add(t),this.listeners.set(o,e),()=>e.delete(t)});f(this,"setState",this.dispatch);f(this,"useStore",t=>{const o={};return t.forEach(e=>{o[e]===void 0&&(o[e]=k.useSyncExternalStore(c=>this.subscribe(c,e),()=>this.getState(e)))}),o});f(this,"withStore",t=>o=>{const e=c=>{const n=this.useStore(t);return D.jsx("div",{children:D.jsx(o,{...c,...n})})};return o.beforeRouter&&(e.beforeRouter=o.beforeRouter),e});this.state=t,this.actions=o}getState(t){return t?this.state[t]:this.state}dispatch(t,o){var s;const e={...this.defaultDispatchOptions},c=Object.keys(t),n={};typeof o=="function"?e.onChanged=o:Object.assign(e,o),c.forEach(i=>{var g,y,A;const l=t[i];if(typeof((g=this.actions)==null?void 0:g[i])=="function")Object.assign(n,(A=(y=this.actions)==null?void 0:y[i])==null?void 0:A.call(y,l,this.state));else if(e.check){const ur=this.state[i];l!==ur&&(n[i]=l)}else n[i]=l}),this.state={...this.state,...n};for(const i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;const l=this.listeners.get(i);if(l)l.forEach(g=>g());else continue}(s=e.onChanged)==null||s.call(e,this.state)}}const io=new so({theme:localStorage.getItem("taomu-theme")||"system"},{theme(r){return localStorage.setItem("taomu-theme",r),{theme:r}}}),u=window.matchMedia("(prefers-color-scheme: dark)"),lo=u!=null&&u.matches?"dark":"light";function To(){const{theme:r}=io.useStore(["theme"]),[t,o]=k.useState(lo);k.useEffect(()=>{if(r==="system"){if(!u)return;u.addEventListener("change",e)}else o(r);return()=>{u&&u.removeEventListener("change",e)}},[r]);function e(){o(u!=null&&u.matches?"dark":"light")}return{theme:t}}const v="taomu";function a(r,t=!0){const o=`${P(v)}${r}`;return t?`var(${o})`:o}function jo(r,t){return`${a(r,!1)}: ${t};`}function b(r,t){return`rgba(${a(r)}, ${t})`}function Ro(r){return ao(r,v)}var ko=dr(function(r,t){var o=r.styles,e=rr([o],void 0,I.useContext(gr)),c=I.useRef();return G(function(){var n=t.key+"-global",s=new t.sheet.constructor({key:n,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,l=document.querySelector('style[data-emotion="'+n+" "+e.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(i=!0,l.setAttribute("data-emotion",n),s.hydrate([l])),c.current=[s,i],function(){s.flush()}},[t]),G(function(){var n=c.current,s=n[0],i=n[1];if(i){n[1]=!1;return}if(e.next!==void 0&&hr(t,e.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",e,s,!1)},[t,e.name]),null});function lr(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return rr(t)}const uo={colorBackgroundRoot:a("colorBackground"),colorPrimary:"#a2c339",colorPrimaryRgb:"162, 195, 57",colorSuccess:"#52c41a",colorSuccessRgb:"82, 196, 26",colorInfo:"#1890ff",colorInfoRgb:"24, 144, 255",colorWarning:"#ff9900",colorWarningRgb:"255, 153, 0",colorError:"#ff5257",colorErrorRgb:"255, 82, 87",colorTextLink:a("colorInfo"),colorTextLinkHover:b("colorInfoRgb",.75),fontSize:16,radiusSM:4,radiusMD:8,radiusLG:16,boxShadowXS:`0px 1px 2px 0px ${a("colorShadow")}`,boxShadowSM:`0px 1px 4px 0px ${a("colorShadow")}`,boxShadowMD:`0px 3px 8px 0px ${a("colorShadow")}`,boxShadowLG:`1px 6px 12px 0px ${a("colorShadow")}`,boxShadowXL:`2px 8px 16px 0px ${a("colorShadow")}`},fo={colorBackground:`rgb(${a("colorBackgroundRgb")})`,colorBackgroundRgb:"255, 255, 255",colorFront:`rgb(${a("colorFrontRgb")})`,colorFrontRgb:"46, 52, 64",colorTextTitle:a("colorFront"),colorTextDefault:"rgba(23, 35, 61, 0.8)",colorTextGray:"rgba(81, 90, 110, 0.65)",colorTextLight:"rgba(81, 90, 110, 0.4)",colorBorder:"rgba(0, 0, 0, 0.1)",colorBorderSplit:"rgba(0, 0, 0, 0.06)",colorShadow:"rgba(0, 21, 41, 0.08)"},bo={colorBackground:`rgb(${a("colorBackgroundRgb")})`,colorBackgroundRgb:"25, 29, 36",colorFront:`rgb(${a("colorFrontRgb")})`,colorFrontRgb:"255, 255, 255",colorTextTitle:a("colorFront"),colorTextDefault:b("colorFrontRgb",.9),colorTextGray:b("colorFrontRgb",.65),colorTextLight:b("colorFrontRgb",.4),colorBorder:b("colorFrontRgb",.1),colorBorderSplit:b("colorFrontRgb",.06),colorShadow:"rgba(0, 21, 41, 0.28)"},w={common:{...uo},light:{...fo},dark:{...bo}},Q={};function Oo(r,t){Object.assign(w[r],t)}function Eo(){let r="";for(const t in Q){const o=Q[t];o.scoped?r+=`.${t}{${o.styled.styles}}`:r+=o.styled.styles}return lr`
    :root {
      ${R(w.common,v)}
    }

    :root[data-theme='light'] {
      ${R(w.light,v)}
    }

    :root[data-theme='dark'] {
      ${R(w.dark,v)}
    }

    :root {
      --ac-color-primary: ${a("colorPrimary")};
      --ac-color-primary-light: color-mix(in srgb, ${a("colorPrimary")}, #fff 45%);
      --ac-color-primary-dark: color-mix(in srgb, ${a("colorPrimary")}, #000 15%);

      --ac-color-info: ${a("colorInfo")};
      --ac-color-success: ${a("colorSuccess")};
      --ac-color-warning: ${a("colorWarning")};
      --ac-color-error: ${a("colorError")};

      --ac-color-background: ${a("colorBackground")};
      --ac-color-text-title: ${a("colorTextTitle")};
      --ac-color-text-gray: ${a("colorTextGray")};
      --ac-color-text-default: ${a("colorTextDefault")};
      --ac-color-text-light: ${a("colorTextLight")};

      --ac-color-border: ${a("colorBorder")};
      --ac-color-border-split: ${a("colorBorderSplit")};

      --ac-color-shadow: ${a("colorShadow")};

      /* background-color: ${a("colorBackgroundRoot")}; */
      color: ${a("colorTextDefault")};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: ${a("fontSize")};
      text-rendering: optimizeLegibility;
    }

    ${r}
  `}lr`
  :root {
    --scrollbar-size: 6px;
    --scrollbar-thumb-bg: ${b("colorFrontRgb",.2)};
    --scrollbar-track-bg: ${b("colorFrontRgb",.05)};
    --scrollbar-thumb-hover-bg: ${b("colorFrontRgb",.3)};
  }

  &::-webkit-scrollbar {
    height: var(--scrollbar-size);
    width: var(--scrollbar-size);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 1px solid var(--scrollbar-track-bg);
    background-color: var(--scrollbar-thumb-bg);
  }

  &::-webkit-scrollbar-track {
    // border-radius: 10px;
    background-color: var(--scrollbar-track-bg);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover-bg);
  }
`;export{ko as G,mo as K,co as N,So as Q,so as S,v as T,yo as X,vo as a,Ro as b,lr as c,$o as d,wo as e,Eo as g,a as l,b as m,jo as p,Oo as s,To as u};
