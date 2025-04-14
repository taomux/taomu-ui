import{l as o,c as f,j as b,a as s}from"./mini-scrollbar-1dk_y2Qh.js";import"./index-D4lIrffr.js";import{u as q,a as w}from"./use-taomu-classname-Dqq3FQ7F.js";import{g as h,b as V}from"./conversion-DyjZL1Co.js";import{r as _}from"./icon-CUwNImcR.js";import"./index-B3Ai5YFw.js";import{i as F}from"./use-custom-event-BYXfsBOj.js";import{L as T}from"./loading-DBrME-eE.js";import{X as E}from"./x-BK-4WeVA.js";import"./index-CnYZ9M0K.js";import{s as x}from"./global-style-CvBFrXCB.js";import{b as I,e as P}from"./popup-trigger-CQr14FCK.js";F("common",{toastColor:o("colorFront"),toastBackground:o("colorBackground"),toastRadius:o("radiusSM"),toastPadding:"8px 14px"});const D=f`
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
`,c=({className:e,cssVars:a,style:l,shadow:d=!0,outerBorder:p=!0,message:n,type:u="info",showCloseButton:i=!1,popupInstance:r,...y})=>{const v=q("toast","flex row center-v gap-8",V(d),h(p),e),g=w(a,l);function B(){switch(u){case"loading":return s(T,{weight:2,size:17});default:return _(u,17)}}function C(){return i?s("div",{className:"toast-close-btn flex center-v",onClick:()=>r==null?void 0:r.close(),children:s(E,{size:16})}):null}return b("div",{className:v,style:g,css:D,...y,children:[B(),s("div",{children:n}),C()]})};try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}const m=new Set;function t({duration:e=2500,popupId:a,hoverNotClose:l=!0,escToClose:d=!1,...p}){x(k);let n;const u=new I(r=>s(c,{...r,...p}),{popupId:a,createContainerId:"taomu-toast-container",createContainerClass:"taomu-toast-container",noFixed:!0,overlay:!1,clickToClose:!1,backgroundEvent:!0,escToClose:d,onClose:()=>{m.delete(u.popupId)},onMouseEnter:()=>{l&&n&&(clearTimeout(n),n=void 0)},onMouseLeave:()=>{l&&i()}});u.open(),m.add(u.popupId);function i(){e<=0||(n=setTimeout(()=>{u.close()},e))}return i(),u}function J(){for(const e of m)P(e)}function K(e,a){return t({type:"info",message:e,...a})}function O(e,a){return t({type:"success",message:e,...a})}function Q(e,a){return t({type:"warning",message:e,...a})}function U(e,a){return t({type:"error",message:e,...a})}function W(e,a){return t({type:"question",message:e,...a})}function Y(e="Loading...",a){return t({type:"loading",duration:0,popupId:"toast-loading",message:e,...a})}try{t.displayName="openToast",t.__docgenInfo={description:"",displayName:"openToast",props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}export{c as T,J as c,U as e,K as i,Y as l,t as o,W as q,O as s,Q as w};
