var xe=Object.defineProperty;var Ee=(u,t,o)=>t in u?xe(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o;var b=(u,t,o)=>Ee(u,typeof t!="symbol"?t+"":t,o);import{R as c}from"./index-D4lIrffr.js";import{l as Y,c as Be,i as Fe,j as we,h as oe,a as P,y as Pe,n as Z}from"./mini-scrollbar-1dk_y2Qh.js";import{u as ne,a as Ae,c as N}from"./use-taomu-classname-Dqq3FQ7F.js";import{r as Te}from"./index-BQQLSK9g.js";import{T as ee}from"./index-BDZOM4eL.js";import{i as Ie}from"./use-custom-event-BYXfsBOj.js";import{p as y}from"./popup.store-CZruyQcO.js";function W(u,t,o,r=[],s){const n=c.useRef(o);n.current=o,c.useEffect(()=>{if(!n.current)return;function i(l){var e;(e=n.current)==null||e.call(this,l)}return u.addEventListener(t,i,s),()=>{u.removeEventListener(t,i,s)}},r)}Ie("common",{zIndex:"1000",overlayBackground:"rgba(0, 0, 0, 0.4)"});const ke=Be`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Y("zIndex")};

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
    background: ${Y("overlayBackground")};
  }

  .popup-content {
    &.target-relative-position {
      position: absolute;
    }
    &.visibility-hidden {
      visibility: hidden;
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
`,Ve=(u,t)=>{if(t)switch(u){case"top-left":case"top-right":return"moveTop";case"bottom-left":case"bottom-right":return"moveBottom"}switch(u){case"bottom":case"center-bottom":case"bottom-center":return"moveBottom";case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return"moveLeft";case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return"moveRight";default:return"moveTop"}};function Re(u,t,o="bottom-left",r,s=0){var g;if(!u||!(t!=null&&t.className.includes("target-relative-position")))return;const n=u.getBoundingClientRect();let i=t.getBoundingClientRect(),l=o;const e={...i};function h(C,E){l=l.replace(C,E)}l==="center-top"?l="top-center":l==="center-bottom"&&(l="bottom-center"),r==="equal"?t.style.width=n.width+"px":r==="max-width"?t.style.maxWidth=n.width+"px":r==="min-width"&&(t.style.minWidth=n.width+"px");const v=t.firstElementChild;if(v){const C=(g=v.computedStyleMap().get("border-radius"))==null?void 0:g.toString();C&&(t.style.borderRadius=C)}switch(l.startsWith("top")?n.top-i.height<0&&h("top","bottom"):l.startsWith("bottom")?n.bottom+i.height>window.innerHeight&&h("bottom","top"):l.endsWith("top")?n.bottom+i.height>window.innerHeight&&h("top","bottom"):l.endsWith("bottom")?n.top-i.height<0&&h("bottom","top"):l.startsWith("left")?n.left-i.width<0&&h("left","right"):l.startsWith("right")&&n.right+i.width>window.innerWidth&&h("right","left"),t.classList.add(`popup-fixed-position-${l}`),i=t.getBoundingClientRect(),l){case"top-left":e.top=n.top-i.height-s,e.left=n.left;break;case"top":case"top-center":e.top=n.top-i.height-s,e.left=n.left+n.width/2-i.width/2;break;case"top-right":e.top=n.top-i.height-s,e.left=n.right-i.width;break;case"bottom-left":e.top=n.bottom+s,e.left=n.left;break;case"bottom":case"bottom-center":e.top=n.bottom+s,e.left=n.left+n.width/2-i.width/2;break;case"bottom-right":e.top=n.bottom+s,e.left=n.right-i.width;break;case"left-top":e.top=n.top,e.left=n.left-i.width-s;break;case"left-center":case"left":e.top=n.top+n.height/2-i.height/2,e.left=n.left-i.width-s;break;case"left-bottom":e.top=n.bottom-i.height,e.left=n.left-i.width-s;break;case"right-top":e.top=n.top,e.left=n.right+s;break;case"right":case"right-center":case"center-right":e.top=n.top+n.height/2-i.height/2,e.left=n.right+s;break;case"right-bottom":e.top=n.bottom-i.height,e.left=n.right+s;break}t.style.left=e.left?e.left+"px":"unset",t.style.top=e.top?e.top+"px":"unset",t.style.right=e.right?e.right+"px":"unset",t.style.bottom=e.bottom?e.bottom+"px":"unset"}function qe(u,t=160){const o=u.getBoundingClientRect();let r=window.innerHeight/2-o.height/2;r<0?r=0:r>t&&(r=t),u.style.top=r+"px"}function Se(){if(document.body.style.overflow==="hidden")return;const u=Fe();document.body.style.overflow="hidden",document.body.style.paddingRight=u+"px"}function De(){const{popupsMap:u}=y.getState();console.log("unlockBodyScroll");let t=0;for(const[,[o]]of u)if(o.baseOptions,o.baseOptions.lockScroll&&(t+=1),t>1)return;document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function Ke(){const{popupsMap:u}=y.getState();for(const[,[t]]of u)t.close()}function Ue(u){const{popupsMap:t}=y.getState(),o=t.get(u);return o?(o[0].close(),!0):!1}const ue="taomu-popup-xxxx-xxxx-xxxx",j=c.forwardRef(({className:u,cssVars:t,style:o,popupId:r=oe(ue),children:s,show:n,noFixed:i,zIndex:l=1e3,backgroundEvent:e,escToClose:h=!0,clickToClose:v=!0,lockScroll:g,overlay:C=!1,overlayProps:E={},overlayAnimationConfig:A,overlayTransitionOptions:F,contentWrapperProps:{className:w,...I}={},contentAnimationConfig:a,contentTransitionOptions:p,equalWidth:m,positionType:d,positionTargetElement:x,autoFixPosition:H=!0,edgeOffset:ie,popupAnimationConfigBuilder:re=Ve,onBeforeEnter:R,onEnter:ae,onBeforeLeave:q,onLeave:se,onBackgroundClickClose:S,onEscClose:D,onClose:_,...le},pe)=>{const O=c.useRef(null),k=c.useRef(!1),K=c.useRef(!1),ce=ne("popup",`position-${d}`,{"no-fixed":i,"position-absolute":!x,"background-event":e||!C},u),fe=Ae({zIndex:l.toString(),...t},o),[de,U]=c.useState(!1),[me,$]=c.useState(!1),[G,he]=c.useState(!1);W(document,"keydown",f=>{if(f.key==="Escape"&&h){const{popupsMap:B}=y.getState();Array.from(B.keys()).pop()===r&&(T(),D==null||D())}}),W(window,"resize",()=>{H&&M()}),W(document,"scroll",()=>{H&&M()}),c.useImperativeHandle(pe,()=>({open:X,close:T,closeLockRef:K})),c.useEffect(()=>{const f=v&&(e||!C);if(g&&ve(),f){let B=function(V){var J,Q;(Q=(J=O.current)==null?void 0:J.firstChild)!=null&&Q.contains(V.target)||(T(),S==null||S())};return setTimeout(()=>{document.addEventListener("click",B)},0),()=>{L(),document.removeEventListener("click",B)}}return()=>{L()}},[]),c.useEffect(()=>{n?X():T()},[n]);function ve(){k.current||(Se(),k.current=!0)}function L(){k.current&&(De(),k.current=!1)}function X(){U(!0),$(!0)}function T(){if(K.current===!0){console.warn("close action is locked");return}U(!1),$(!1),_==null||_()}function ge(){if(!C)return null;if(E.className=N("popup-overlay",E.className),v){const f=E.onClick;E.onClick=B=>{T(),f==null||f(B)}}return P(ee,{show:de,animationConfig:A,options:F,children:P("div",{...E})})}function be(f){R==null||R(f),setTimeout(()=>{M()},0)}function ye(f){q==null||q(f),g&&L()}function M(){const f=O.current;f&&(d==="dialog-center"?qe(f):Re(x,f,d,m,ie),G||he(!0))}function Ce(){if(!s)return null;const f=a??re(d,!!x),B=Object.assign({duration:300,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},p),V=N("popup-content",r,w,{"target-relative-position":!!x,"visibility-hidden":!G});return P(ee,{show:me,proxyRef:O,animationConfig:f,options:B,onBeforeEnter:be,onEnter:ae,onBeforeLeave:ye,onLeave:se,children:P("div",{className:V,...I,children:s})})}return we("div",{className:ce,style:fe,css:ke,...le,children:[ge(),Ce()]})});try{j.displayName="Popup",j.__docgenInfo={description:"",displayName:"Popup",props:{cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"PopupCssVars"}},popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},noFixed:{defaultValue:null,description:"不脱离文档流",name:"noFixed",required:!1,type:{name:"boolean"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:null,description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
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
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}class z{constructor(t,o={}){b(this,"popupId");b(this,"popupRef",c.createRef());b(this,"createIndex",y.getState().popupsMap.size+1);b(this,"isEnter",!1);b(this,"render",t=>{const{portalContainer:o,createContainerId:r,createContainerClass:s,zIndex:n=1e3,onBeforeEnter:i,onBeforeLeave:l,onLeave:e,...h}=this.baseOptions,v=this.Content;return Te.createPortal(P(j,{ref:this.popupRef,popupId:this.popupId,zIndex:n+this.createIndex,show:!0,onBeforeEnter:g=>(this.isEnter=!0,i==null?void 0:i(g)),onBeforeLeave:g=>(this.isEnter=!1,l==null?void 0:l(g)),onLeave:()=>(this.destroy(),e==null?void 0:e()),...h,children:P(v,{popupInstance:this,...t})},this.popupId),this.container,this.popupId)});b(this,"close",()=>{var t;this.popupRef.current&&((t=this.popupRef.current)==null||t.close())});b(this,"destroy",()=>{const{popupsMap:t,updateCount:o}=y.getState();t.delete(this.popupId),y.setState({popupsMap:t,updateCount:o+1})});b(this,"dispatchUpdate",(t,o)=>{const{popupsMap:r,updateCount:s}=y.getState();r.has(this.popupId)&&(o&&this.updateBaseOptionsStatic(o),r.set(this.popupId,[this,t]),y.setState({popupsMap:r,updateCount:s+1}))});this.Content=t,this.baseOptions=o,o.popupId?this.popupId=o.popupId:this.popupId=oe(ue)}get containerId(){return this.baseOptions.createContainerId||"taomu-popup-container"}get container(){if(this.baseOptions.portalContainer)return this.baseOptions.portalContainer;const t=this.containerId,o=document.getElementById(t);if(o)return o;const r=document.createElement("div");return r.id=t,r.className=N("taomu-popup-container",this.baseOptions.createContainerClass),document.body.appendChild(r),r}get isOpened(){return!!this.popupRef.current}baseOpen(t){var s;const{popupsMap:o,updateCount:r}=y.getState();o.set(this.popupId,[this,t]),y.setState({popupsMap:o,updateCount:r+1}),this.isOpened&&((s=this.popupRef.current)==null||s.open())}}try{z.displayName="PopupPortalBase",z.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}class _e extends z{constructor(o,r={}){super(o,r);b(this,"open",(o,r)=>{r&&this.updateBaseOptionsStatic(r),this.baseOpen(o)});b(this,"updateBaseOptionsStatic",o=>{Object.assign(this.baseOptions,o)});this.Content=o,this.baseOptions=r}}const te=c.forwardRef(({children:u,content:t,trigger:o="hover",position:r="bottom-left",portalOptions:s,debounceTime:n=150,contentProps:i={}},l)=>{var I;const e=c.useRef(void 0),h=c.useRef(new Pe),v=c.useRef(!1),[g,C]=c.useState(null),E=ne("popup-trigger",g,(I=u.props)==null?void 0:I.className);c.useImperativeHandle(l,()=>({openPopup:A,closePopup:F,popupPortal:e.current})),c.useEffect(()=>()=>{var a;(a=e.current)==null||a.destroy()},[]),c.useEffect(()=>{if(t){const a={positionType:r,...s,clickToClose:o==="click"};if(o==="hover"){a.contentWrapperProps||(a.contentWrapperProps={});const p=a.contentWrapperProps.onMouseEnter,m=a.contentWrapperProps.onMouseLeave;a.contentWrapperProps.onMouseEnter=d=>{v.current=!0,p==null||p(d)},a.contentWrapperProps.onMouseLeave=d=>{v.current=!1,m==null||m(d),!(e.current&&d.relatedTarget&&Z(d.relatedTarget,"."+e.current.popupId))&&F()}}e.current?e.current.dispatchUpdate(i,a):e.current=new _e(t,a),C(e.current.popupId)}else console.warn("PopupTrigger props.content is not exist."),e.current=void 0},[t,s,o,i]);function A(a){if(!e.current)return console.warn("PopupPortal instance not found.");h.current.debounce(()=>{var p;(p=e==null?void 0:e.current)==null||p.open(i,{positionTargetElement:a,...s})},o==="hover"?n:0)}function F(){h.current.debounce(()=>{var a;o==="hover"&&v.current||(a=e.current)==null||a.close()},o==="hover"?n:0)}const w={className:E};return o==="click"?w.onClick=a=>{var p,m,d,x;if((m=(p=u.props)==null?void 0:p.onClick)==null||m.call(p,a),(d=e.current)!=null&&d.isEnter){F();return}else(x=e.current)!=null&&x.isOpened&&e.current.destroy();A(a.currentTarget||a.target)}:o==="hover"&&(w.onMouseEnter=a=>{var p,m,d,x;v.current=!0,(m=(p=u.props)==null?void 0:p.onMouseEnter)==null||m.call(p,a),!((d=e.current)!=null&&d.isEnter)&&((x=e.current)!=null&&x.isOpened&&e.current.destroy(),A(a.currentTarget||a.target))},w.onMouseLeave=a=>{var p,m;v.current=!1,(m=(p=u.props)==null?void 0:p.onMouseOut)==null||m.call(p,a),!(e.current&&a.relatedTarget&&Z(a.relatedTarget,"."+e.current.popupId,e.current.containerId))&&F()}),c.cloneElement(u,{...u.props,...w})});try{te.displayName="PopupTrigger",te.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}export{z as P,te as a,_e as b,j as c,Ke as d,Ue as e};
