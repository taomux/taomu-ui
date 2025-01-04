var ge=Object.defineProperty;var ve=(i,t,n)=>t in i?ge(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var y=(i,t,n)=>ve(i,typeof t!="symbol"?t+"":t,n);import{R as c}from"./index-DRjF_FHU.js";import{c as be,l as Q,g as ye,j as xe,Q as Z,a as F,X as Ce,N as G}from"./mini-scrollbar-BRbUwqmL.js";import{u as ee,a as Ee,c as M}from"./use-taomu-classname-DvhRoCTO.js";import{r as Be}from"./index-rX-Bn4lm.js";import{T as J}from"./index-BpBZeYWD.js";import{s as we}from"./global-style-QoB4c899.js";import{p as x}from"./popup.store-CEPolm7I.js";function L(i,t,n,u=[],s){const o=c.useRef(n);o.current=n,c.useEffect(()=>{if(!o.current)return;function r(l){var e;(e=o.current)==null||e.call(this,l)}return i.addEventListener(t,r,s),()=>{i.removeEventListener(t,r,s)}},u)}we("common",{zIndex:"1000",overlayBackground:"rgba(0, 0, 0, 0.4)"});const Fe=be`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Q("zIndex")};

  &.background-event {
    pointer-events: none;
    .popup-overlay {
      pointer-events: none;
    }
    .popup-content {
      pointer-events: all;
    }
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: ${Q("overlayBackground")};
  }

  .popup-content {
    &.target-relative-position {
      position: absolute;
    }
  }

  &.position-absolute {
    &.position-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.position-dialog-center {
      overflow-y: auto;
      overflow-x: hidden;

      .popup-content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &.position-top {
      .popup-content {
        position: absolute;
        top: 0;
        width: 100vw;
      }
    }

    &.position-bottom {
      .popup-content {
        position: absolute;
        bottom: 0;
        width: 100vw;
      }
    }

    &.position-left {
      .popup-content {
        position: absolute;
        left: 0;
        height: 100vh;
      }
    }

    &.position-right {
      .popup-content {
        position: absolute;
        right: 0;
        height: 100vh;
      }
    }

    &.position-center-top,
    &.position-top-center {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    &.position-bottom,
    &.position-center-bottom,
    &.position-bottom-center {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    &.position-left,
    &.position-left-center,
    &.position-center-left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &.position-right,
    &.position-right-center,
    &.position-center-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &.position-left-top,
    &.position-top-left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &.position-left-bottom,
    &.position-bottom-left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }

    &.position-right-top,
    &.position-top-right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }

    &.position-right-bottom,
    &.position-bottom-right {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  &.popup-fixed-position-top-left,
  &.popup-fixed-position-top-center,
  &.popup-fixed-position-top-right {
    padding-bottom: var(--targetOffset);
  }

  &.popup-fixed-position-bottom-left,
  &.popup-fixed-position-bottom-center,
  &.popup-fixed-position-bottom-right {
    padding-top: var(--targetOffset);
  }

  &.popup-fixed-position-left-top,
  &.popup-fixed-position-left-center,
  &.popup-fixed-position-left-bottom {
    padding-right: var(--targetOffset);
  }

  &.popup-fixed-position-right-top,
  &.popup-fixed-position-right-center,
  &.popup-fixed-position-right-bottom {
    padding-left: var(--targetOffset);
  }
`,Pe=(i,t)=>{if(t)switch(i){case"top-left":case"top-right":return"moveTop";case"bottom-left":case"bottom-right":return"moveBottom"}switch(i){case"bottom":case"center-bottom":case"bottom-center":return"moveBottom";case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return"moveLeft";case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return"moveRight";default:return"moveTop"}};function Ae(i,t,n="bottom-left",u,s=0){var v;if(!i||!(t!=null&&t.className.includes("target-relative-position")))return;const o=i.getBoundingClientRect();let r=t.getBoundingClientRect(),l=n;const e={...r};function m(b,P){l=l.replace(b,P)}l==="center-top"?l="top-center":l==="center-bottom"&&(l="bottom-center"),u==="equal"?t.style.width=o.width+"px":u==="max-width"?t.style.maxWidth=o.width+"px":u==="min-width"&&(t.style.minWidth=o.width+"px");const g=t.firstElementChild;if(g){const b=(v=g.computedStyleMap().get("border-radius"))==null?void 0:v.toString();b&&(t.style.borderRadius=b)}switch(l.startsWith("top")?o.top-r.height<0&&m("top","bottom"):l.startsWith("bottom")?o.bottom+r.height>window.innerHeight&&m("bottom","top"):l.endsWith("top")?o.bottom+r.height>window.innerHeight&&m("top","bottom"):l.endsWith("bottom")?o.top-r.height<0&&m("bottom","top"):l.startsWith("left")?o.left-r.width<0&&m("left","right"):l.startsWith("right")&&o.right+r.width>window.innerWidth&&m("right","left"),t.classList.add(`popup-fixed-position-${l}`),r=t.getBoundingClientRect(),l){case"top-left":e.top=o.top-r.height-s,e.left=o.left;break;case"top":case"top-center":e.top=o.top-r.height-s,e.left=o.left+o.width/2-r.width/2;break;case"top-right":e.top=o.top-r.height-s,e.left=o.right-r.width;break;case"bottom-left":e.top=o.bottom+s,e.left=o.left;break;case"bottom":case"bottom-center":e.top=o.bottom+s,e.left=o.left+o.width/2-r.width/2;break;case"bottom-right":e.top=o.bottom+s,e.left=o.right-r.width;break;case"left-top":e.top=o.top,e.left=o.left-r.width-s;break;case"left-center":case"left":e.top=o.top+o.height/2-r.height/2,e.left=o.left-r.width-s;break;case"left-bottom":e.top=o.bottom-r.height,e.left=o.left-r.width-s;break;case"right-top":e.top=o.top,e.left=o.right+s;break;case"right":case"right-center":case"center-right":e.top=o.top+o.height/2-r.height/2,e.left=o.right+s;break;case"right-bottom":e.top=o.bottom-r.height,e.left=o.right+s;break}t.style.left=e.left?e.left+"px":"unset",t.style.top=e.top?e.top+"px":"unset",t.style.right=e.right?e.right+"px":"unset",t.style.bottom=e.bottom?e.bottom+"px":"unset"}function Te(i,t=160){const n=i.getBoundingClientRect();let u=window.innerHeight/2-n.height/2;u<0?u=0:u>t&&(u=t),i.style.top=u+"px"}function ke(){if(document.body.style.overflow==="hidden")return;const i=ye();document.body.style.overflow="hidden",document.body.style.paddingRight=i+"px"}function Re(){const{popupsMap:i}=x.getState();console.log("unlockBodyScroll");let t=0;for(const[,[n]]of i)if(n.baseOptions,n.baseOptions.lockScroll&&(t+=1),t>1)return;document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function Ne(){const{popupsMap:i}=x.getState();for(const[,[t]]of i)t.close()}const te="taomu-popup-xxxx-xxxx-xxxx",N=c.forwardRef(({className:i,cssVars:t,style:n,popupId:u=Z(te),children:s,show:o,zIndex:r=1e3,backgroundEvent:l,escToClose:e=!0,clickToClose:m=!0,lockScroll:g,overlay:v=!1,overlayProps:b={},overlayAnimationConfig:P,overlayTransitionOptions:A,contentWrapperProps:C={},contentAnimationConfig:w,contentTransitionOptions:k,equalWidth:a,positionType:p,positionTargetElement:f,autoFixPosition:h=!0,edgeOffset:B,popupAnimationConfigBuilder:oe=Pe,onBeforeEnter:I,onEnter:ne,onBeforeLeave:q,onLeave:ie,onBackgroundClickClose:V,onEscClose:S,...ue},re)=>{const O=c.useRef(null),R=c.useRef(!1),j=c.useRef(!1),ae=ee("popup",`position-${p}`,{"position-absolute":!f,"background-event":l||!v},i),se=Ee({zIndex:r.toString(),...t},n),[pe,z]=c.useState(!1),[le,H]=c.useState(!1);L(document,"keydown",d=>{if(d.key==="Escape"&&e){const{popupsMap:E}=x.getState();Array.from(E.keys()).pop()===u&&(T(),S==null||S())}}),L(window,"resize",()=>{h&&D()}),L(document,"scroll",()=>{h&&D()}),c.useImperativeHandle(re,()=>({open:K,close:T,closeLockRef:j})),c.useEffect(()=>{const d=m&&(l||!v);if(g&&ce(),d){let E=function(U){var $,X;(X=($=O.current)==null?void 0:$.firstChild)!=null&&X.contains(U.target)||(T(),V==null||V())};return setTimeout(()=>{document.addEventListener("click",E)},0),()=>{_(),document.removeEventListener("click",E)}}return()=>{_()}},[]),c.useEffect(()=>{o?K():T()},[o]);function ce(){R.current||(ke(),R.current=!0)}function _(){R.current&&(Re(),R.current=!1)}function K(){z(!0),H(!0)}function T(){if(j.current===!0){console.warn("close action is locked");return}z(!1),H(!1)}function fe(){if(!v)return null;if(b.className=M("popup-overlay",b.className),m){const d=b.onClick;b.onClick=E=>{T(),d==null||d(E)}}return F(J,{show:pe,animationConfig:P,options:A,children:F("div",{...b})})}function de(d){I==null||I(d),D()}function me(d){q==null||q(d),g&&_()}function D(){const d=O.current;if(d){if(p==="dialog-center"){Te(d);return}Ae(f,d,p,a,B)}}function he(){if(!s)return null;const d=w??oe(p,!!f),E=Object.assign({duration:300,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},k);return C.className=M("popup-content",u,{"target-relative-position":!!f},C.className),F(J,{show:le,proxyRef:O,animationConfig:d,options:E,onBeforeEnter:de,onEnter:ne,onBeforeLeave:me,onLeave:ie,children:F("div",{...C,children:s})})}return xe("div",{className:ae,style:se,css:Fe,...ue,children:[fe(),he()]})});try{N.displayName="Popup",N.__docgenInfo={description:"",displayName:"Popup",props:{popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:{value:"{}"},description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
  if (isTargetRelative) {
    switch (positionType) {
      case 'top-left':
      case 'top-right':
        return 'moveTop'

      case 'bottom-left':
      case 'bottom-right':
        return 'moveBottom'
    }
  }

  switch (positionType) {
    case 'bottom':
    case 'center-bottom':
    case 'bottom-center':
      return 'moveBottom'

    case 'left':
    case 'left-center':
    case 'left-bottom':
    case 'left-top':
    case 'top-left':
    case 'bottom-left':
      return 'moveLeft'

    case 'right':
    case 'right-center':
    case 'right-bottom':
    case 'right-top':
    case 'top-right':
    case 'bottom-right':
      return 'moveRight'

    default:
      return 'moveTop'
  }
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}}}}}catch{}class W{constructor(t,n={}){y(this,"popupId",Z(te));y(this,"popupRef",c.createRef());y(this,"createIndex",x.getState().popupsMap.size+1);y(this,"isEnter",!1);y(this,"render",t=>{const{portalContainer:n,createContainerId:u,createContainerClass:s,zIndex:o=1e3,onBeforeEnter:r,onBeforeLeave:l,onLeave:e,...m}=this.baseOptions,g=this.Content;return Be.createPortal(F(N,{ref:this.popupRef,popupId:this.popupId,zIndex:o+this.createIndex,show:!0,onBeforeEnter:v=>(this.isEnter=!0,r==null?void 0:r(v)),onBeforeLeave:v=>(this.isEnter=!1,l==null?void 0:l(v)),onLeave:()=>(this.destroy(),e==null?void 0:e()),...m,children:F(g,{...t})},this.popupId),this.container,this.popupId)});y(this,"close",()=>{var t;this.popupRef.current&&((t=this.popupRef.current)==null||t.close())});y(this,"destroy",()=>{const{popupsMap:t,updateCount:n}=x.getState();t.delete(this.popupId),x.setState({popupsMap:t,updateCount:n+1})});y(this,"dispatchUpdate",(t,n)=>{const{popupsMap:u,updateCount:s}=x.getState();u.has(this.popupId)&&(n&&this.updateBaseOptionsStatic(n),u.set(this.popupId,[this,t]),x.setState({popupsMap:u,updateCount:s+1}))});this.Content=t,this.baseOptions=n}get containerId(){return this.baseOptions.createContainerId||"taomu-popup-container"}get container(){if(this.baseOptions.portalContainer)return this.baseOptions.portalContainer;const t=this.containerId,n=document.getElementById(t);if(n)return n;const u=document.createElement("div");return u.id=t,u.className=M("taomu-popup-container",this.baseOptions.createContainerClass),u.style.width="0",u.style.height="0",document.body.appendChild(u),u}get isOpened(){return!!this.popupRef.current}baseOpen(t){var s;const{popupsMap:n,updateCount:u}=x.getState();n.set(this.popupId,[this,t]),x.setState({popupsMap:n,updateCount:u+1}),this.isOpened&&((s=this.popupRef.current)==null||s.open())}}try{W.displayName="PopupPortalBase",W.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}class Ie extends W{constructor(n,u={}){super(n,u);y(this,"open",(n,u)=>{u&&this.updateBaseOptionsStatic(u),this.baseOpen(n)});y(this,"updateBaseOptionsStatic",n=>{Object.assign(this.baseOptions,n)});this.Content=n,this.baseOptions=u}}const Y=c.forwardRef(({children:i,content:t,trigger:n="hover",position:u="bottom-left",portalOptions:s,debounceTime:o=150,contentProps:r={}},l)=>{var k;const e=c.useRef(),m=c.useRef(new Ce),g=c.useRef(!1),[v,b]=c.useState(null),P=ee("popup-trigger",v,(k=i.props)==null?void 0:k.className);c.useImperativeHandle(l,()=>({openPopup:A,closePopup:C,popupPortal:e.current})),c.useEffect(()=>()=>{var a;(a=e.current)==null||a.destroy()},[]),c.useEffect(()=>{if(t){const a={positionType:u,...s,clickToClose:n==="click"};if(n==="hover"){a.contentWrapperProps||(a.contentWrapperProps={});const p=a.contentWrapperProps.onMouseEnter,f=a.contentWrapperProps.onMouseLeave;a.contentWrapperProps.onMouseEnter=h=>{g.current=!0,p==null||p(h)},a.contentWrapperProps.onMouseLeave=h=>{g.current=!1,f==null||f(h),!(e.current&&h.relatedTarget&&G(h.relatedTarget,"."+e.current.popupId))&&C()}}e.current?e.current.dispatchUpdate(r,a):e.current=new Ie(t,a),b(e.current.popupId)}else console.warn("PopupTrigger props.content is not exist."),e.current=void 0},[t,s,n,r]);function A(a){if(!e.current)return console.warn("PopupPortal instance not found.");m.current.debounce(()=>{var p;(p=e==null?void 0:e.current)==null||p.open(r,{positionTargetElement:a,...s})},n==="hover"?o:0)}function C(){m.current.debounce(()=>{var a;n==="hover"&&g.current||(a=e.current)==null||a.close()},n==="hover"?o:0)}const w={className:P};return n==="click"?w.onClick=a=>{var p,f,h,B;if((f=(p=i.props)==null?void 0:p.onClick)==null||f.call(p,a),(h=e.current)!=null&&h.isEnter){C();return}else(B=e.current)!=null&&B.isOpened&&e.current.destroy();A(a.currentTarget||a.target)}:n==="hover"&&(w.onMouseEnter=a=>{var p,f,h,B;g.current=!0,(f=(p=i.props)==null?void 0:p.onMouseEnter)==null||f.call(p,a),!((h=e.current)!=null&&h.isEnter)&&((B=e.current)!=null&&B.isOpened&&e.current.destroy(),A(a.currentTarget||a.target))},w.onMouseLeave=a=>{var p,f;g.current=!1,(f=(p=i.props)==null?void 0:p.onMouseOut)==null||f.call(p,a),!(e.current&&a.relatedTarget&&G(a.relatedTarget,"."+e.current.popupId,e.current.containerId))&&C()}),c.cloneElement(i,{...i.props,...w})});try{Y.displayName="PopupTrigger",Y.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}export{W as P,Y as a,Ie as b,N as c,Ne as d};
