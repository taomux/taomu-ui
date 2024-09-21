var ge=Object.defineProperty;var ve=(n,e,o)=>e in n?ge(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var y=(n,e,o)=>ve(n,typeof e!="symbol"?e+"":e,o);import{R as c}from"./index-l2PZgWEW.js";import"./_getTag-Dgi2y9Uc.js";import{s as be,c as ye,l as J,j as xe,a as F}from"./mini-scrollbar-Bq2Cewqh.js";import{u as Z,a as Ce,c as W}from"./use-taomu-classname-Bo7IX2bY.js";import{r as we}from"./index-BtTJd_qj.js";import{p as x,u as ee}from"./popup.store-CTuOgDEi.js";import{T as Q}from"./index-zbzXvoZu.js";class Ee{constructor(){Object.defineProperty(this,"TM",{enumerable:!0,configurable:!0,writable:!0,value:Date.now()})}debounce(e,o){this.TM=Date.now(),setTimeout(()=>{Date.now()-this.TM>=o&&e()},o)}throttle(e,o){Date.now()-this.TM>=o&&(e(),this.TM=Date.now())}}function L(n,e,o){if(!n||!n.matches)return!1;if(n.matches(e))return!0;if(o){if(typeof o=="string"){if(n.matches(o))return!1}else if(n===o)return!1}return n!=null&&n.parentElement?L(n.parentElement,e,o):!1}function Be(){const n=document.body.clientWidth;return window.innerWidth-n}function M(n,e,o,u=[],s){const i=c.useRef(o);i.current=o,c.useEffect(()=>{if(!i.current)return;function r(p){var t;(t=i.current)==null||t.call(this,p)}return n.addEventListener(e,r,s),()=>{n.removeEventListener(e,r,s)}},u)}be("common",{zIndex:"1000",overlayBackground:"rgba(0, 0, 0, 0.4)"});const Fe=ye`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${J("zIndex")};

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
    background: ${J("overlayBackground")};
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
`,Pe=(n,e)=>{if(e)switch(n){case"top-left":case"top-right":return"moveTop";case"bottom-left":case"bottom-right":return"moveBottom"}switch(n){case"bottom":case"center-bottom":case"bottom-center":return"moveBottom";case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return"moveLeft";case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return"moveRight";default:return"moveTop"}};function Ae(n,e,o="bottom-left",u,s=0){var v;if(!n||!(e!=null&&e.className.includes("target-relative-position")))return;const i=n.getBoundingClientRect();let r=e.getBoundingClientRect(),p=o;const t={...r};function m(b,P){p=p.replace(b,P)}p==="center-top"?p="top-center":p==="center-bottom"&&(p="bottom-center"),u==="equal"?e.style.width=i.width+"px":u==="max-width"?e.style.maxWidth=i.width+"px":u==="min-width"&&(e.style.minWidth=i.width+"px");const g=e.firstElementChild;if(g){const b=(v=g.computedStyleMap().get("border-radius"))==null?void 0:v.toString();b&&(e.style.borderRadius=b)}switch(p.startsWith("top")?i.top-r.height<0&&m("top","bottom"):p.startsWith("bottom")?i.bottom+r.height>window.innerHeight&&m("bottom","top"):p.endsWith("top")?i.bottom+r.height>window.innerHeight&&m("top","bottom"):p.endsWith("bottom")?i.top-r.height<0&&m("bottom","top"):p.startsWith("left")?i.left-r.width<0&&m("left","right"):p.startsWith("right")&&i.right+r.width>window.innerWidth&&m("right","left"),e.classList.add(`popup-fixed-position-${p}`),r=e.getBoundingClientRect(),p){case"top-left":t.top=i.top-r.height-s,t.left=i.left;break;case"top":case"top-center":t.top=i.top-r.height-s,t.left=i.left+i.width/2-r.width/2;break;case"top-right":t.top=i.top-r.height-s,t.left=i.right-r.width;break;case"bottom-left":t.top=i.bottom+s,t.left=i.left;break;case"bottom":case"bottom-center":t.top=i.bottom+s,t.left=i.left+i.width/2-r.width/2;break;case"bottom-right":t.top=i.bottom+s,t.left=i.right-r.width;break;case"left-top":t.top=i.top,t.left=i.left-r.width-s;break;case"left-center":case"left":t.top=i.top+i.height/2-r.height/2,t.left=i.left-r.width-s;break;case"left-bottom":t.top=i.bottom-r.height,t.left=i.left-r.width-s;break;case"right-top":t.top=i.top,t.left=i.right+s;break;case"right":case"right-center":case"center-right":t.top=i.top+i.height/2-r.height/2,t.left=i.right+s;break;case"right-bottom":t.top=i.bottom-r.height,t.left=i.right+s;break}e.style.left=t.left?t.left+"px":"unset",e.style.top=t.top?t.top+"px":"unset",e.style.right=t.right?t.right+"px":"unset",e.style.bottom=t.bottom?t.bottom+"px":"unset"}function Te(n,e=160){const o=n.getBoundingClientRect();let u=window.innerHeight/2-o.height/2;u<0?u=0:u>e&&(u=e),n.style.top=u+"px"}function ke(){if(document.body.style.overflow==="hidden")return;const n=Be();document.body.style.overflow="hidden",document.body.style.paddingRight=n+"px"}function Re(){const{popupsMap:n}=x.getState();console.log("unlockBodyScroll");let e=0;for(const[,[o]]of n)if(o.baseOptions,o.baseOptions.lockScroll&&(e+=1),e>1)return;document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function Le(){const{popupsMap:n}=x.getState();for(const[,[e]]of n)e.close()}const te="taomu-popup-xxxx-xxxx-xxxx",j=c.forwardRef(({className:n,cssVars:e,style:o,popupId:u=ee(te),children:s,show:i,zIndex:r=1e3,backgroundEvent:p,escToClose:t=!0,clickToClose:m=!0,lockScroll:g,overlay:v=!1,overlayProps:b={},overlayAnimationConfig:P,overlayTransitionOptions:A,contentWrapperProps:C={},contentAnimationConfig:B,contentTransitionOptions:k,equalWidth:a,positionType:l,positionTargetElement:f,autoFixPosition:h=!0,edgeOffset:E,popupAnimationConfigBuilder:oe=Pe,onBeforeEnter:I,onEnter:ne,onBeforeLeave:q,onLeave:ie,onBackgroundClickClose:V,onEscClose:S,...ue},re)=>{const D=c.useRef(null),R=c.useRef(!1),z=c.useRef(!1),ae=Z("popup",`position-${l}`,{"position-absolute":!f,"background-event":p||!v},n),se=Ce({zIndex:r.toString(),...e},o),[le,H]=c.useState(!1),[pe,K]=c.useState(!1);M(document,"keydown",d=>{if(d.key==="Escape"&&t){const{popupsMap:w}=x.getState();Array.from(w.keys()).pop()===u&&(T(),S==null||S())}}),M(window,"resize",()=>{h&&_()}),M(document,"scroll",()=>{h&&_()}),c.useImperativeHandle(re,()=>({open:U,close:T,closeLockRef:z})),c.useEffect(()=>{const d=m&&(p||!v);if(g&&ce(),d){let w=function($){var G,X;(X=(G=D.current)==null?void 0:G.firstChild)!=null&&X.contains($.target)||(T(),V==null||V())};return setTimeout(()=>{document.addEventListener("click",w)},0),()=>{O(),document.removeEventListener("click",w)}}return()=>{O()}},[]),c.useEffect(()=>{i?U():T()},[i]);function ce(){R.current||(ke(),R.current=!0)}function O(){R.current&&(Re(),R.current=!1)}function U(){H(!0),K(!0)}function T(){if(z.current===!0){console.warn("close action is locked");return}H(!1),K(!1)}function fe(){if(!v)return null;if(b.className=W("popup-overlay",b.className),m){const d=b.onClick;b.onClick=w=>{T(),d==null||d(w)}}return F(Q,{show:le,animationConfig:P,options:A,children:F("div",{...b})})}function de(d){I==null||I(d),_()}function me(d){q==null||q(d),g&&O()}function _(){const d=D.current;if(d){if(l==="dialog-center"){Te(d);return}Ae(f,d,l,a,E)}}function he(){if(!s)return null;const d=B??oe(l,!!f),w=Object.assign({duration:300,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},k);return C.className=W("popup-content",u,{"target-relative-position":!!f},C.className),F(Q,{show:pe,proxyRef:D,animationConfig:d,options:w,onBeforeEnter:de,onEnter:ne,onBeforeLeave:me,onLeave:ie,children:F("div",{...C,children:s})})}return xe("div",{className:ae,style:se,css:Fe,...ue,children:[fe(),he()]})});try{j.displayName="Popup",j.__docgenInfo={description:"",displayName:"Popup",props:{popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:{value:"{}"},description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
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
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}}}}}catch{}class N{constructor(e,o={}){y(this,"popupId",ee(te));y(this,"popupRef",c.createRef());y(this,"createIndex",x.getState().popupsMap.size+1);y(this,"isEnter",!1);y(this,"render",e=>{const{portalContainer:o,createContainerId:u,createContainerClass:s,zIndex:i=1e3,onBeforeEnter:r,onBeforeLeave:p,onLeave:t,...m}=this.baseOptions,g=this.Content;return we.createPortal(F(j,{ref:this.popupRef,popupId:this.popupId,zIndex:i+this.createIndex,show:!0,onBeforeEnter:v=>(this.isEnter=!0,r==null?void 0:r(v)),onBeforeLeave:v=>(this.isEnter=!1,p==null?void 0:p(v)),onLeave:()=>(this.destroy(),t==null?void 0:t()),...m,children:F(g,{...e})},this.popupId),this.container,this.popupId)});y(this,"close",()=>{var e;this.popupRef.current&&((e=this.popupRef.current)==null||e.close())});y(this,"destroy",()=>{const{popupsMap:e,updateCount:o}=x.getState();e.delete(this.popupId),x.setState({popupsMap:e,updateCount:o+1})});y(this,"dispatchUpdate",(e,o)=>{const{popupsMap:u,updateCount:s}=x.getState();u.has(this.popupId)&&(o&&this.updateBaseOptionsStatic(o),u.set(this.popupId,[this,e]),x.setState({popupsMap:u,updateCount:s+1}))});this.Content=e,this.baseOptions=o}get containerId(){return this.baseOptions.createContainerId||"taomu-popup-container"}get container(){if(this.baseOptions.portalContainer)return this.baseOptions.portalContainer;const e=this.containerId,o=document.getElementById(e);if(o)return o;const u=document.createElement("div");return u.id=e,u.className=W("taomu-popup-container",this.baseOptions.createContainerClass),u.style.width="0",u.style.height="0",document.body.appendChild(u),u}get isOpened(){return!!this.popupRef.current}baseOpen(e){var s;const{popupsMap:o,updateCount:u}=x.getState();o.set(this.popupId,[this,e]),x.setState({popupsMap:o,updateCount:u+1}),this.isOpened&&((s=this.popupRef.current)==null||s.open())}}try{N.displayName="PopupPortalBase",N.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}class Ie extends N{constructor(o,u={}){super(o,u);y(this,"open",(o,u)=>{u&&this.updateBaseOptionsStatic(u),this.baseOpen(o)});y(this,"updateBaseOptionsStatic",o=>{Object.assign(this.baseOptions,o)});this.Content=o,this.baseOptions=u}}const Y=c.forwardRef(({children:n,content:e,trigger:o="hover",position:u="bottom-left",portalOptions:s,debounceTime:i=150,contentProps:r={}},p)=>{var k;const t=c.useRef(),m=c.useRef(new Ee),g=c.useRef(!1),[v,b]=c.useState(null),P=Z("popup-trigger",v,(k=n.props)==null?void 0:k.className);c.useImperativeHandle(p,()=>({openPopup:A,closePopup:C,popupPortal:t.current})),c.useEffect(()=>()=>{var a;(a=t.current)==null||a.destroy()},[]),c.useEffect(()=>{if(e){const a={positionType:u,...s,clickToClose:o==="click"};if(o==="hover"){a.contentWrapperProps||(a.contentWrapperProps={});const l=a.contentWrapperProps.onMouseEnter,f=a.contentWrapperProps.onMouseLeave;a.contentWrapperProps.onMouseEnter=h=>{g.current=!0,l==null||l(h)},a.contentWrapperProps.onMouseLeave=h=>{g.current=!1,f==null||f(h),!(t.current&&h.relatedTarget&&L(h.relatedTarget,"."+t.current.popupId))&&C()}}t.current?t.current.dispatchUpdate(r,a):t.current=new Ie(e,a),b(t.current.popupId)}else t.current=void 0},[e,s,o,r]);function A(a){if(!t.current)return console.warn("PopupPortal instance not found");m.current.debounce(()=>{var l;(l=t==null?void 0:t.current)==null||l.open(r,{positionTargetElement:a,...s})},o==="hover"?i:0)}function C(){m.current.debounce(()=>{var a;o==="hover"&&g.current||(a=t.current)==null||a.close()},o==="hover"?i:0)}const B={className:P};return o==="click"?B.onClick=a=>{var l,f,h,E;if((f=(l=n.props)==null?void 0:l.onClick)==null||f.call(l,a),(h=t.current)!=null&&h.isEnter){C();return}else(E=t.current)!=null&&E.isOpened&&t.current.destroy();A(a.currentTarget||a.target)}:o==="hover"&&(B.onMouseEnter=a=>{var l,f,h,E;g.current=!0,(f=(l=n.props)==null?void 0:l.onMouseEnter)==null||f.call(l,a),!((h=t.current)!=null&&h.isEnter)&&((E=t.current)!=null&&E.isOpened&&t.current.destroy(),A(a.currentTarget||a.target))},B.onMouseLeave=a=>{var l,f;g.current=!1,(f=(l=n.props)==null?void 0:l.onMouseOut)==null||f.call(l,a),!(t.current&&a.relatedTarget&&L(a.relatedTarget,"."+t.current.popupId,t.current.containerId))&&C()}),c.cloneElement(n,{...n.props,...B})});try{Y.displayName="PopupTrigger",Y.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}export{N as P,Y as a,Ie as b,j as c,Le as d};
