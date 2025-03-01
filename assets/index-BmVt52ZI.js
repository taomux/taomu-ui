import{l as u,c as f,j as q,a as l}from"./mini-scrollbar-CZ8eNCm3.js";import{u as B,a as b}from"./use-taomu-classname-CGrN28Ws.js";import"./index-CZMpeKRu.js";import{g as w,a as E,r as F,X as T}from"./icon-tBO1rD-p.js";import"./index-DhsYTemN.js";import{i as h}from"./global-vars-CQDXv0Fn.js";import{L as _}from"./loading-eEEt9sJo.js";import"./index-RNVBsLn4.js";import{s as D}from"./use-custom-event-BQUnmHFA.js";import{b as x,e as P}from"./popup-trigger-BkAvKTYJ.js";h("common",{toastColor:u("colorFront"),toastBackground:u("colorBackground"),toastRadius:u("radiusSM"),toastPadding:"8px 14px"});const k=f`
  border-radius: ${u("toastRadius")};
  color: ${u("toastColor")};
  background: ${u("toastBackground")};
  padding: ${u("toastPadding")};
  pointer-events: visible;

  .toast-close-btn {
    cursor: pointer;
    border-radius: 4px;
    transition: ${u("commonTransition")};
    padding: 2px;
    margin: -3px;
    position: relative;
    left: 3px;
    top: 0.5px;

    svg {
      display: block;
      stroke: ${u("colorTextGray")};
      transition: ${u("commonTransition")};
    }

    &:hover:not(.disabled) {
      background-color: ${u("btnBackgroundHover")};
      svg {
        stroke: ${u("colorTextDefault")};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,N=f`
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
`,c=({className:e,cssVars:a,style:r,shadow:d=!0,outerBorder:p=!0,message:s,type:t="info",showCloseButton:i=!1,popupInstance:o,...y})=>{const v=B("toast","flex row center-v gap-8",E(d),w(p),e),g=b(a,r);function C(){switch(t){case"loading":return l(_,{weight:2,size:17});default:return F(t,17)}}function V(){return i?l("div",{className:"toast-close-btn flex center-v",onClick:()=>o==null?void 0:o.close(),children:l(T,{size:16})}):null}return q("div",{className:v,style:g,css:k,...y,children:[C(),l("div",{children:s}),V()]})};try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}const m=new Set;function n({duration:e=2500,popupId:a,hoverNotClose:r=!0,escToClose:d=!1,...p}){D(N);let s;const t=new x(o=>l(c,{...o,...p}),{popupId:a,createContainerId:"taomu-toast-container",createContainerClass:"taomu-toast-container",noFixed:!0,overlay:!1,clickToClose:!1,backgroundEvent:!0,escToClose:d,onClose:()=>{m.delete(t.popupId)},onMouseEnter:()=>{r&&s&&(clearTimeout(s),s=void 0)},onMouseLeave:()=>{r&&i()}});t.open(),m.add(t.popupId);function i(){e<=0||(s=setTimeout(()=>{t.close()},e))}return i(),t}function R(){for(const e of m)P(e)}function X(e,a){return n({type:"info",message:e,...a})}function J(e,a){return n({type:"success",message:e,...a})}function K(e,a){return n({type:"warning",message:e,...a})}function O(e,a){return n({type:"error",message:e,...a})}function Q(e,a){return n({type:"question",message:e,...a})}function U(e="Loading...",a){return n({type:"loading",duration:0,popupId:"toast-loading",message:e,...a})}try{n.displayName="openToast",n.__docgenInfo={description:"",displayName:"openToast",props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}export{c as T,R as c,O as e,X as i,U as l,n as o,Q as q,J as s,K as w};
