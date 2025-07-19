import{l as u,c as f,j as C,a as s}from"./mini-scrollbar-DnfR8E9z.js";import"./index-D4lIrffr.js";import{u as h,a as w}from"./use-taomu-classname-CR-sgA-2.js";import{g as b,b as E}from"./conversion-DyjZL1Co.js";import{r as F}from"./icon-C8mbH_3v.js";import"./index-D8sUy8HA.js";import{i as V}from"./global-vars-CYosUT7W.js";import{L as _}from"./loading-DGXQEBb8.js";import{X as T}from"./x-BK-4WeVA.js";import"./index-DAQkSNxJ.js";import{s as D}from"./use-custom-event-B9N0hwYz.js";import{b as I,e as P}from"./popup-trigger-DjUNNIW2.js";V("common",{toastColor:u("colorFront"),toastBackground:u("colorBackground"),toastRadius:u("radiusSM"),toastPadding:"8px 14px"});const x=f`
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
`,A=f`
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
`,c=({className:e,cssVars:a,style:l,shadow:d=!0,outerBorder:p=!0,message:n,type:o="info",showCloseButton:i=!1,popupInstance:r,...y})=>{const v=h("toast","flex row center-v gap-8",E(d),b(p),e),g=w(a,l);function B(){switch(o){case"loading":return s(_,{weight:2,size:17});default:return F(o,17)}}function q(){return i?s("div",{className:"toast-close-btn flex center-v",onClick:()=>r==null?void 0:r.close(),children:s(T,{size:16})}):null}return C("div",{className:v,style:g,css:x,...y,children:[B(),s("div",{children:n}),q()]})};try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}const m=new Set;function t({duration:e=2500,popupId:a,hoverNotClose:l=!0,escToClose:d=!1,...p}){D(A);let n;const o=new I(r=>s(c,{...r,...p}),{popupId:a,createContainerId:"taomu-toast-container",createContainerClass:"taomu-toast-container",noFixed:!0,overlay:!1,clickToClose:!1,backgroundEvent:!0,escToClose:d,onClose:()=>{m.delete(o.popupId)},onMouseEnter:()=>{l&&n&&(clearTimeout(n),n=void 0)},onMouseLeave:()=>{l&&i()}});o.open(),m.add(o.popupId);function i(){e<=0||(n=setTimeout(()=>{o.close()},e))}return i(),o}function J(){for(const e of m)P(e)}function K(e,a){return t({type:"info",message:e,...a})}function O(e,a){return t({type:"success",message:e,...a})}function Q(e,a){return t({type:"warning",message:e,...a})}function U(e,a){return t({type:"error",message:e,...a})}function W(e,a){return t({type:"question",message:e,...a})}function Y(e="Loading...",a){return t({type:"loading",duration:0,popupId:"toast-loading",message:e,...a})}try{t.displayName="openToast",t.__docgenInfo={description:"",displayName:"openToast",props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}try{"/home/runner/work/taomu-ui/taomu-ui/src/components/toast/open-toast".openToast.displayName='"/home/runner/work/taomu-ui/taomu-ui/src/components/toast/open-toast".openToast',"/home/runner/work/taomu-ui/taomu-ui/src/components/toast/open-toast".openToast.__docgenInfo={description:"",displayName:'"/home/runner/work/taomu-ui/taomu-ui/src/components/toast/open-toast".openToast',props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"question"'},{value:'"loading"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}}}}}catch{}export{c as T,J as c,U as e,K as i,Y as l,t as o,W as q,O as s,Q as w};
