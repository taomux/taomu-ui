import{l as s,c as S,j as B,a as o}from"./mini-scrollbar-CZ8eNCm3.js";import"./index-B8IF1OLn.js";import{u as R,a as O}from"./use-taomu-classname-CGrN28Ws.js";import"./index-CZMpeKRu.js";import{g as X,a as J,X as K}from"./conversion-C3YVphii.js";import{r as Q}from"./icon-DK4Ek3YN.js";import"./index-DhsYTemN.js";import{i as U}from"./global-vars-CQDXv0Fn.js";import{L as W}from"./loading-eEEt9sJo.js";import"./index-RNVBsLn4.js";import{s as Y}from"./use-custom-event-BQUnmHFA.js";import{b as Z,e as ee}from"./popup-trigger-BkAvKTYJ.js";import{B as a}from"./button-CwsxCB5A.js";import"./jsx-runtime-CLpGMVip.js";import"./index-bPVxIqPX.js";import"./help-circle-CUIW5fQg.js";import"./x-circle-CdlKYc8_.js";import"./alert-triangle-DUSJc6lc.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-CUnKnXLJ.js";import"./popup.store-C2C6BHPT.js";U("common",{toastColor:s("colorFront"),toastBackground:s("colorBackground"),toastRadius:s("radiusSM"),toastPadding:"8px 14px"});const oe=S`
  border-radius: ${s("toastRadius")};
  color: ${s("toastColor")};
  background: ${s("toastBackground")};
  padding: ${s("toastPadding")};
  pointer-events: visible;

  .toast-close-btn {
    cursor: pointer;
    border-radius: 4px;
    transition: ${s("commonTransition")};
    padding: 2px;
    margin: -3px;
    position: relative;
    left: 3px;
    top: 0.5px;

    svg {
      display: block;
      stroke: ${s("colorTextGray")};
      transition: ${s("commonTransition")};
    }

    &:hover:not(.disabled) {
      background-color: ${s("btnBackgroundHover")};
      svg {
        stroke: ${s("colorTextDefault")};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,ae=S`
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
`,C=({className:e,cssVars:t,style:i,shadow:y=!0,outerBorder:v=!0,message:u,type:r="info",showCloseButton:d=!1,popupInstance:l,...M})=>{const z=R("toast","flex row center-v gap-8",J(y),X(v),e),H=O(t,i);function j(){switch(r){case"loading":return o(W,{weight:2,size:17});default:return Q(r,17)}}function G(){return d?o("div",{className:"toast-close-btn flex center-v",onClick:()=>l==null?void 0:l.close(),children:o(K,{size:16})}):null}return B("div",{className:z,style:H,css:oe,...M,children:[j(),o("div",{children:u}),G()]})};try{C.displayName="Toast",C.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"loading"'},{value:'"info"'},{value:'"question"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}const h=new Set;function n({duration:e=2500,popupId:t,hoverNotClose:i=!0,escToClose:y=!1,...v}){Y(ae);let u;const r=new Z(l=>o(C,{...l,...v}),{popupId:t,createContainerClass:"taomu-toast-container",noFixed:!0,overlay:!1,clickToClose:!1,backgroundEvent:!0,escToClose:y,onClose:()=>{h.delete(r.popupId)},onMouseEnter:()=>{i&&u&&(clearTimeout(u),u=void 0)},onMouseLeave:()=>{i&&d()}});r.open(),h.add(r.popupId);function d(){e<=0||(u=setTimeout(()=>{r.close()},e))}return d(),r}function te(){for(const e of h)ee(e)}function I(e,t){return n({type:"info",message:e,...t})}function P(e,t){return n({type:"success",message:e,...t})}function A(e,t){return n({type:"warning",message:e,...t})}function $(e,t){return n({type:"error",message:e,...t})}function L(e,t){return n({type:"question",message:e,...t})}function g(e="Loading...",t){return n({type:"loading",duration:0,popupId:"toast-loading",message:e,...t})}try{n.displayName="openToast",n.__docgenInfo={description:"",displayName:"openToast",props:{duration:{defaultValue:{value:"2500"},description:"持续时间 默认 2500",name:"duration",required:!1,type:{name:"number"}},hoverNotClose:{defaultValue:{value:"true"},description:"鼠标悬浮时不关闭 默认 true",name:"hoverNotClose",required:!1,type:{name:"boolean"}},popupId:{defaultValue:null,description:"toast id (需要单例时管用)",name:"popupId",required:!1,type:{name:"string"}},escToClose:{defaultValue:{value:"false"},description:"按下 esc 关闭, 默认 false",name:"escToClose",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"loading"'},{value:'"info"'},{value:'"question"'}]}},shadow:{defaultValue:null,description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:null,description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"info"},description:"消息类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"loading"'},{value:'"info"'},{value:'"question"'}]}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},message:{defaultValue:null,description:"内容",name:"message",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"false"},description:"是否显示关闭按钮",name:"showCloseButton",required:!1,type:{name:"boolean"}},popupInstance:{defaultValue:null,description:"由 PopupPortal 传入",name:"popupInstance",required:!1,type:{name:"PopupPortal<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"ToastCssVars"}}}}}catch{}const Ee={title:"Components/Toast",component:C,tags:["autodocs"],argTypes:{}},c={args:{}},p={render:()=>B("div",{className:"flex gap-8",children:[o(a,{onClick:()=>n({message:"hello"}),children:"open"}),o(a,{onClick:()=>te(),children:"closeAll"})]})},m={render:()=>B("div",{className:"flex gap-8",children:[o(a,{onClick:()=>I("info message"),children:"info"}),o(a,{onClick:()=>A("warning message"),children:"warning"}),o(a,{onClick:()=>P("success message"),children:"success"}),o(a,{onClick:()=>$("error message"),children:"error"}),o(a,{onClick:()=>L("error message"),children:"question"}),o(a,{onClick:()=>g("loading message"),children:"loading"}),o(a,{onClick:()=>g("可以通过设置 popupId: undefined 来禁用"),children:"loading 默认为单例"}),o(a,{onClick:()=>g("loading message",{popupId:void 0}),children:"loading 多例"})]})},f={render:()=>B("div",{className:"flex gap-8",children:[o(a,{onClick:()=>I("info message",{showCloseButton:!0}),children:"info"}),o(a,{onClick:()=>A("warning message",{showCloseButton:!0}),children:"warning"}),o(a,{onClick:()=>P("success message",{showCloseButton:!0}),children:"success"}),o(a,{onClick:()=>$("error message",{showCloseButton:!0}),children:"error"}),o(a,{onClick:()=>L("error message",{showCloseButton:!0}),children:"question"}),o(a,{onClick:()=>g("loading message",{showCloseButton:!0}),children:"loading"})]})};var k,V,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var w,b,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.openToast({
        message: 'hello'
      })}>open</Button>
        <Button onClick={() => toast.closeAll()}>closeAll</Button>
      </div>;
  }
}`,...(E=(b=p.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var T,x,F;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.info('info message')}>info</Button>
        <Button onClick={() => toast.warning('warning message')}>warning</Button>
        <Button onClick={() => toast.success('success message')}>success</Button>
        <Button onClick={() => toast.error('error message')}>error</Button>
        <Button onClick={() => toast.question('error message')}>question</Button>
        <Button onClick={() => toast.loading('loading message')}>loading</Button>
        <Button onClick={() => toast.loading('可以通过设置 popupId: undefined 来禁用')}>loading 默认为单例</Button>
        <Button onClick={() => toast.loading('loading message', {
        popupId: undefined
      })}>loading 多例</Button>
      </div>;
  }
}`,...(F=(x=m.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var _,N,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.info('info message', {
        showCloseButton: true
      })}>info</Button>
        <Button onClick={() => toast.warning('warning message', {
        showCloseButton: true
      })}>warning</Button>
        <Button onClick={() => toast.success('success message', {
        showCloseButton: true
      })}>success</Button>
        <Button onClick={() => toast.error('error message', {
        showCloseButton: true
      })}>error</Button>
        <Button onClick={() => toast.question('error message', {
        showCloseButton: true
      })}>question</Button>
        <Button onClick={() => toast.loading('loading message', {
        showCloseButton: true
      })}>loading</Button>
      </div>;
  }
}`,...(D=(N=f.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const Te=["基础示例","函数打开","消息类型","显示关闭按钮"];export{Te as __namedExportsOrder,Ee as default,p as 函数打开,c as 基础示例,f as 显示关闭按钮,m as 消息类型};
