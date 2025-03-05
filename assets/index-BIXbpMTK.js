import{l as o,c as f,j as q,a as s}from"./mini-scrollbar-DKhO_gnw.js";import{u as b,a as w}from"./use-taomu-classname-BRbG1Owv.js";import"./index-CZMpeKRu.js";import{g as h,a as V,r as _,X as F}from"./icon-B0NDHoC9.js";import"./index-b9g8Vhfs.js";import{i as T}from"./global-vars-CuQyjSF-.js";import{L as E}from"./loading-DUVmW9bg.js";import"./index-CRAKvOf5.js";import{s as x}from"./use-custom-event-WcP5NWBu.js";import{b as I,e as P}from"./popup-trigger-BJg6Zaf7.js";T("common",{toastColor:o("colorFront"),toastBackground:o("colorBackground"),toastRadius:o("radiusSM"),toastPadding:"8px 14px"});const D=f`
  border-radius: ${o("toastRadius")};
  color: ${o("toastColor")};
  background: ${o("toastBackground")};
  padding: ${o("toastPadding")};
  pointer-events: visible;

  .toast-close-btn {
    cursor: pointer;
    border-radius: 4px;
    transition: ${o("commonTransition")};
    padding: 2px;
    margin: -3px;
    position: relative;
    left: 3px;
    top: 0.5px;

    svg {
      display: block;
      stroke: ${o("colorTextGray")};
      transition: ${o("commonTransition")};
    }

    &:hover:not(.disabled) {
      background-color: ${o("btnBackgroundHover")};
      svg {
        stroke: ${o("colorTextDefault")};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,k=f`
  .taomu-toast-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    pointer-events: none;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-top: 4vh;
  }
`,c=({className:e,cssVars:a,style:l,shadow:d=!0,outerBorder:p=!0,message:n,type:u="info",showCloseButton:i=!1,popupInstance:r,...y})=>{const g=b("toast","flex row center-v gap-8",V(d),h(p),e),v=w(a,l);function B(){switch(u){case"loading":return s(E,{weight:2,size:17});default:return _(u,17)}}function C(){return i?s("div",{className:"toast-close-btn flex center-v",onClick:()=>r==null?void 0:r.close(),children:s(F,{size:16})}):null}return q("div",{className:g,style:v,css:D,...y,children:[B(),s("div",{children:n}),C()]})};try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}const m=new Set;function t({duration:e=2500,popupId:a,hoverNotClose:l=!0,escToClose:d=!1,...p}){x(k);let n;const u=new I(r=>s(c,{...r,...p}),{popupId:a,createContainerId:"taomu-toast-container",createContainerClass:"taomu-toast-container",noFixed:!0,overlay:!1,clickToClose:!1,backgroundEvent:!0,escToClose:d,onClose:()=>{m.delete(u.popupId)},onMouseEnter:()=>{l&&n&&(clearTimeout(n),n=void 0)},onMouseLeave:()=>{l&&i()}});u.open(),m.add(u.popupId);function i(){e<=0||(n=setTimeout(()=>{u.close()},e))}return i(),u}function H(){for(const e of m)P(e)}function X(e,a){return t({type:"info",message:e,...a})}function J(e,a){return t({type:"success",message:e,...a})}function K(e,a){return t({type:"warning",message:e,...a})}function O(e,a){return t({type:"error",message:e,...a})}function Q(e,a){return t({type:"question",message:e,...a})}function U(e="Loading...",a){return t({type:"loading",duration:0,popupId:"toast-loading",message:e,...a})}try{t.displayName="openToast",t.__docgenInfo={description:"",displayName:"openToast",props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}export{c as T,H as c,O as e,X as i,U as l,t as o,Q as q,J as s,K as w};
