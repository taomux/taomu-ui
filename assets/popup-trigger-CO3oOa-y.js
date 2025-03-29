var be=Object.defineProperty;var ye=(u,t,o)=>t in u?be(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o;var b=(u,t,o)=>ye(u,typeof t!="symbol"?t+"":t,o);import{R as c}from"./index-D4lIrffr.js";import{l as J,c as Ce,i as xe,j as Ee,h as ee,a as P,y as Be,n as Q}from"./mini-scrollbar-1dk_y2Qh.js";import{u as te,a as Fe,c as N}from"./use-taomu-classname-Dqq3FQ7F.js";import{r as we}from"./index-BQQLSK9g.js";import{T as Y}from"./index-7qhzFOdQ.js";import{i as Pe}from"./use-custom-event-BYXfsBOj.js";import{p as y}from"./popup.store-CZruyQcO.js";function M(u,t,o,r=[],s){const n=c.useRef(o);n.current=o,c.useEffect(()=>{if(!n.current)return;function i(l){var e;(e=n.current)==null||e.call(this,l)}return u.addEventListener(t,i,s),()=>{u.removeEventListener(t,i,s)}},r)}Pe("common",{zIndex:"1000",overlayBackground:"rgba(0, 0, 0, 0.4)"});const Ae=Ce`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${J("zIndex")};

  &.no-fixed {
    position: relative;
    width: unset;
    height: unset;
  }

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
`,Te=(u,t)=>{if(t)switch(u){case"top-left":case"top-right":return"moveTop";case"bottom-left":case"bottom-right":return"moveBottom"}switch(u){case"bottom":case"center-bottom":case"bottom-center":return"moveBottom";case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return"moveLeft";case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return"moveRight";default:return"moveTop"}};function Ie(u,t,o="bottom-left",r,s=0){var v;if(!u||!(t!=null&&t.className.includes("target-relative-position")))return;const n=u.getBoundingClientRect();let i=t.getBoundingClientRect(),l=o;const e={...i};function h(C,x){l=l.replace(C,x)}l==="center-top"?l="top-center":l==="center-bottom"&&(l="bottom-center"),r==="equal"?t.style.width=n.width+"px":r==="max-width"?t.style.maxWidth=n.width+"px":r==="min-width"&&(t.style.minWidth=n.width+"px");const g=t.firstElementChild;if(g){const C=(v=g.computedStyleMap().get("border-radius"))==null?void 0:v.toString();C&&(t.style.borderRadius=C)}switch(l.startsWith("top")?n.top-i.height<0&&h("top","bottom"):l.startsWith("bottom")?n.bottom+i.height>window.innerHeight&&h("bottom","top"):l.endsWith("top")?n.bottom+i.height>window.innerHeight&&h("top","bottom"):l.endsWith("bottom")?n.top-i.height<0&&h("bottom","top"):l.startsWith("left")?n.left-i.width<0&&h("left","right"):l.startsWith("right")&&n.right+i.width>window.innerWidth&&h("right","left"),t.classList.add(`popup-fixed-position-${l}`),i=t.getBoundingClientRect(),l){case"top-left":e.top=n.top-i.height-s,e.left=n.left;break;case"top":case"top-center":e.top=n.top-i.height-s,e.left=n.left+n.width/2-i.width/2;break;case"top-right":e.top=n.top-i.height-s,e.left=n.right-i.width;break;case"bottom-left":e.top=n.bottom+s,e.left=n.left;break;case"bottom":case"bottom-center":e.top=n.bottom+s,e.left=n.left+n.width/2-i.width/2;break;case"bottom-right":e.top=n.bottom+s,e.left=n.right-i.width;break;case"left-top":e.top=n.top,e.left=n.left-i.width-s;break;case"left-center":case"left":e.top=n.top+n.height/2-i.height/2,e.left=n.left-i.width-s;break;case"left-bottom":e.top=n.bottom-i.height,e.left=n.left-i.width-s;break;case"right-top":e.top=n.top,e.left=n.right+s;break;case"right":case"right-center":case"center-right":e.top=n.top+n.height/2-i.height/2,e.left=n.right+s;break;case"right-bottom":e.top=n.bottom-i.height,e.left=n.right+s;break}t.style.left=e.left?e.left+"px":"unset",t.style.top=e.top?e.top+"px":"unset",t.style.right=e.right?e.right+"px":"unset",t.style.bottom=e.bottom?e.bottom+"px":"unset"}function ke(u,t=160){const o=u.getBoundingClientRect();let r=window.innerHeight/2-o.height/2;r<0?r=0:r>t&&(r=t),u.style.top=r+"px"}function Ve(){if(document.body.style.overflow==="hidden")return;const u=xe();document.body.style.overflow="hidden",document.body.style.paddingRight=u+"px"}function Re(){const{popupsMap:u}=y.getState();console.log("unlockBodyScroll");let t=0;for(const[,[o]]of u)if(o.baseOptions,o.baseOptions.lockScroll&&(t+=1),t>1)return;document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function je(){const{popupsMap:u}=y.getState();for(const[,[t]]of u)t.close()}function ze(u){const{popupsMap:t}=y.getState(),o=t.get(u);return o?(o[0].close(),!0):!1}const oe="taomu-popup-xxxx-xxxx-xxxx",W=c.forwardRef(({className:u,cssVars:t,style:o,popupId:r=ee(oe),children:s,show:n,noFixed:i,zIndex:l=1e3,backgroundEvent:e,escToClose:h=!0,clickToClose:g=!0,lockScroll:v,overlay:C=!1,overlayProps:x={},overlayAnimationConfig:A,overlayTransitionOptions:w,contentWrapperProps:E={},contentAnimationConfig:I,contentTransitionOptions:a,equalWidth:p,positionType:f,positionTargetElement:m,autoFixPosition:B=!0,edgeOffset:ne,popupAnimationConfigBuilder:ue=Te,onBeforeEnter:V,onEnter:ie,onBeforeLeave:R,onLeave:re,onBackgroundClickClose:q,onEscClose:S,onClose:D,...ae},se)=>{const _=c.useRef(null),k=c.useRef(!1),z=c.useRef(!1),le=te("popup",`position-${f}`,{"no-fixed":i,"position-absolute":!m,"background-event":e||!C},u),pe=Fe({zIndex:l.toString(),...t},o),[ce,H]=c.useState(!1),[fe,K]=c.useState(!1);M(document,"keydown",d=>{if(d.key==="Escape"&&h){const{popupsMap:F}=y.getState();Array.from(F.keys()).pop()===r&&(T(),S==null||S())}}),M(window,"resize",()=>{B&&L()}),M(document,"scroll",()=>{B&&L()}),c.useImperativeHandle(se,()=>({open:U,close:T,closeLockRef:z})),c.useEffect(()=>{const d=g&&(e||!C);if(v&&de(),d){let F=function($){var G,X;(X=(G=_.current)==null?void 0:G.firstChild)!=null&&X.contains($.target)||(T(),q==null||q())};return setTimeout(()=>{document.addEventListener("click",F)},0),()=>{O(),document.removeEventListener("click",F)}}return()=>{O()}},[]),c.useEffect(()=>{n?U():T()},[n]);function de(){k.current||(Ve(),k.current=!0)}function O(){k.current&&(Re(),k.current=!1)}function U(){H(!0),K(!0)}function T(){if(z.current===!0){console.warn("close action is locked");return}H(!1),K(!1),D==null||D()}function me(){if(!C)return null;if(x.className=N("popup-overlay",x.className),g){const d=x.onClick;x.onClick=F=>{T(),d==null||d(F)}}return P(Y,{show:ce,animationConfig:A,options:w,children:P("div",{...x})})}function he(d){V==null||V(d),setTimeout(()=>{L()},0)}function ge(d){R==null||R(d),v&&O()}function L(){const d=_.current;if(d){if(f==="dialog-center"){ke(d);return}Ie(m,d,f,p,ne)}}function ve(){if(!s)return null;const d=I??ue(f,!!m),F=Object.assign({duration:300,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},a);return E.className=N("popup-content",r,{"target-relative-position":!!m},E.className),P(Y,{show:fe,proxyRef:_,animationConfig:d,options:F,onBeforeEnter:he,onEnter:ie,onBeforeLeave:ge,onLeave:re,children:P("div",{...E,children:s})})}return Ee("div",{className:le,style:pe,css:Ae,...ae,children:[me(),ve()]})});try{W.displayName="Popup",W.__docgenInfo={description:"",displayName:"Popup",props:{cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"PopupCssVars"}},popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},noFixed:{defaultValue:null,description:"不脱离文档流",name:"noFixed",required:!1,type:{name:"boolean"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:{value:"{}"},description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
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
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}class j{constructor(t,o={}){b(this,"popupId");b(this,"popupRef",c.createRef());b(this,"createIndex",y.getState().popupsMap.size+1);b(this,"isEnter",!1);b(this,"render",t=>{const{portalContainer:o,createContainerId:r,createContainerClass:s,zIndex:n=1e3,onBeforeEnter:i,onBeforeLeave:l,onLeave:e,...h}=this.baseOptions,g=this.Content;return we.createPortal(P(W,{ref:this.popupRef,popupId:this.popupId,zIndex:n+this.createIndex,show:!0,onBeforeEnter:v=>(this.isEnter=!0,i==null?void 0:i(v)),onBeforeLeave:v=>(this.isEnter=!1,l==null?void 0:l(v)),onLeave:()=>(this.destroy(),e==null?void 0:e()),...h,children:P(g,{popupInstance:this,...t})},this.popupId),this.container,this.popupId)});b(this,"close",()=>{var t;this.popupRef.current&&((t=this.popupRef.current)==null||t.close())});b(this,"destroy",()=>{const{popupsMap:t,updateCount:o}=y.getState();t.delete(this.popupId),y.setState({popupsMap:t,updateCount:o+1})});b(this,"dispatchUpdate",(t,o)=>{const{popupsMap:r,updateCount:s}=y.getState();r.has(this.popupId)&&(o&&this.updateBaseOptionsStatic(o),r.set(this.popupId,[this,t]),y.setState({popupsMap:r,updateCount:s+1}))});this.Content=t,this.baseOptions=o,o.popupId?this.popupId=o.popupId:this.popupId=ee(oe)}get containerId(){return this.baseOptions.createContainerId||"taomu-popup-container"}get container(){if(this.baseOptions.portalContainer)return this.baseOptions.portalContainer;const t=this.containerId,o=document.getElementById(t);if(o)return o;const r=document.createElement("div");return r.id=t,r.className=N("taomu-popup-container",this.baseOptions.createContainerClass),document.body.appendChild(r),r}get isOpened(){return!!this.popupRef.current}baseOpen(t){var s;const{popupsMap:o,updateCount:r}=y.getState();o.set(this.popupId,[this,t]),y.setState({popupsMap:o,updateCount:r+1}),this.isOpened&&((s=this.popupRef.current)==null||s.open())}}try{j.displayName="PopupPortalBase",j.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}class qe extends j{constructor(o,r={}){super(o,r);b(this,"open",(o,r)=>{r&&this.updateBaseOptionsStatic(r),this.baseOpen(o)});b(this,"updateBaseOptionsStatic",o=>{Object.assign(this.baseOptions,o)});this.Content=o,this.baseOptions=r}}const Z=c.forwardRef(({children:u,content:t,trigger:o="hover",position:r="bottom-left",portalOptions:s,debounceTime:n=150,contentProps:i={}},l)=>{var I;const e=c.useRef(void 0),h=c.useRef(new Be),g=c.useRef(!1),[v,C]=c.useState(null),x=te("popup-trigger",v,(I=u.props)==null?void 0:I.className);c.useImperativeHandle(l,()=>({openPopup:A,closePopup:w,popupPortal:e.current})),c.useEffect(()=>()=>{var a;(a=e.current)==null||a.destroy()},[]),c.useEffect(()=>{if(t){const a={positionType:r,...s,clickToClose:o==="click"};if(o==="hover"){a.contentWrapperProps||(a.contentWrapperProps={});const p=a.contentWrapperProps.onMouseEnter,f=a.contentWrapperProps.onMouseLeave;a.contentWrapperProps.onMouseEnter=m=>{g.current=!0,p==null||p(m)},a.contentWrapperProps.onMouseLeave=m=>{g.current=!1,f==null||f(m),!(e.current&&m.relatedTarget&&Q(m.relatedTarget,"."+e.current.popupId))&&w()}}e.current?e.current.dispatchUpdate(i,a):e.current=new qe(t,a),C(e.current.popupId)}else console.warn("PopupTrigger props.content is not exist."),e.current=void 0},[t,s,o,i]);function A(a){if(!e.current)return console.warn("PopupPortal instance not found.");h.current.debounce(()=>{var p;(p=e==null?void 0:e.current)==null||p.open(i,{positionTargetElement:a,...s})},o==="hover"?n:0)}function w(){h.current.debounce(()=>{var a;o==="hover"&&g.current||(a=e.current)==null||a.close()},o==="hover"?n:0)}const E={className:x};return o==="click"?E.onClick=a=>{var p,f,m,B;if((f=(p=u.props)==null?void 0:p.onClick)==null||f.call(p,a),(m=e.current)!=null&&m.isEnter){w();return}else(B=e.current)!=null&&B.isOpened&&e.current.destroy();A(a.currentTarget||a.target)}:o==="hover"&&(E.onMouseEnter=a=>{var p,f,m,B;g.current=!0,(f=(p=u.props)==null?void 0:p.onMouseEnter)==null||f.call(p,a),!((m=e.current)!=null&&m.isEnter)&&((B=e.current)!=null&&B.isOpened&&e.current.destroy(),A(a.currentTarget||a.target))},E.onMouseLeave=a=>{var p,f;g.current=!1,(f=(p=u.props)==null?void 0:p.onMouseOut)==null||f.call(p,a),!(e.current&&a.relatedTarget&&Q(a.relatedTarget,"."+e.current.popupId,e.current.containerId))&&w()}),c.cloneElement(u,{...u.props,...E})});try{Z.displayName="PopupTrigger",Z.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}export{j as P,Z as a,qe as b,W as c,je as d,ze as e};
