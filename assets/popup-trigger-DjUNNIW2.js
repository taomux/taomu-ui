var xe=Object.defineProperty;var Be=(u,e,t)=>e in u?xe(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var g=(u,e,t)=>Be(u,typeof e!="symbol"?e+"":e,t);import{R as f}from"./index-D4lIrffr.js";import{l as Y,c as Ee,i as Fe,j as we,h as oe,a as P,y as Pe,n as Z}from"./mini-scrollbar-DnfR8E9z.js";import{u as ne,a as Ae,c as j}from"./use-taomu-classname-CR-sgA-2.js";import{r as Te}from"./index-Dc97iC8r.js";import{T as ee}from"./index-C-Lg1Z-Y.js";import{i as Ie}from"./global-vars-CYosUT7W.js";import{p as b}from"./popup.store-CTbEFpjp.js";function N(u,e,t,r=[],l){const o=f.useRef(t);o.current=t,f.useEffect(()=>{if(!o.current)return;function i(p){var n;(n=o.current)==null||n.call(this,p)}return u.addEventListener(e,i,l),()=>{u.removeEventListener(e,i,l)}},r)}Ie("common",{zIndex:"1000",overlayBackground:"rgba(0, 0, 0, 0.4)"});const Ve=Ee`
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
`,ke=(u,e)=>{if(e)switch(u){case"top-left":case"top-right":return"moveTop";case"bottom-left":case"bottom-right":return"moveBottom"}switch(u){case"bottom":case"center-bottom":case"bottom-center":return"moveBottom";case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return"moveLeft";case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return"moveRight";default:return"moveTop"}};function Re(u,e,t="bottom-left",r,l=0){var v;if(!u||!(e!=null&&e.className.includes("target-relative-position")))return;const o=u.getBoundingClientRect();let i=e.getBoundingClientRect(),p=t;const n={...i};function a(C,x){p=p.replace(C,x)}p==="center-top"?p="top-center":p==="center-bottom"&&(p="bottom-center"),r==="equal"?e.style.width=o.width+"px":r==="max-width"?e.style.maxWidth=o.width+"px":r==="min-width"&&(e.style.minWidth=o.width+"px");const y=e.firstElementChild;if(y){const C=(v=y.computedStyleMap().get("border-radius"))==null?void 0:v.toString();C&&(e.style.borderRadius=C)}switch(p.startsWith("top")?o.top-i.height<0&&a("top","bottom"):p.startsWith("bottom")?o.bottom+i.height>window.innerHeight&&a("bottom","top"):p.endsWith("top")?o.bottom+i.height>window.innerHeight&&a("top","bottom"):p.endsWith("bottom")?o.top-i.height<0&&a("bottom","top"):p.startsWith("left")?o.left-i.width<0&&a("left","right"):p.startsWith("right")&&o.right+i.width>window.innerWidth&&a("right","left"),e.classList.add(`popup-fixed-position-${p}`),i=e.getBoundingClientRect(),p){case"top-left":n.top=o.top-i.height-l,n.left=o.left;break;case"top":case"top-center":n.top=o.top-i.height-l,n.left=o.left+o.width/2-i.width/2;break;case"top-right":n.top=o.top-i.height-l,n.left=o.right-i.width;break;case"bottom-left":n.top=o.bottom+l,n.left=o.left;break;case"bottom":case"bottom-center":n.top=o.bottom+l,n.left=o.left+o.width/2-i.width/2;break;case"bottom-right":n.top=o.bottom+l,n.left=o.right-i.width;break;case"left-top":n.top=o.top,n.left=o.left-i.width-l;break;case"left-center":case"left":n.top=o.top+o.height/2-i.height/2,n.left=o.left-i.width-l;break;case"left-bottom":n.top=o.bottom-i.height,n.left=o.left-i.width-l;break;case"right-top":n.top=o.top,n.left=o.right+l;break;case"right":case"right-center":case"center-right":n.top=o.top+o.height/2-i.height/2,n.left=o.right+l;break;case"right-bottom":n.top=o.bottom-i.height,n.left=o.right+l;break}e.style.left=n.left?n.left+"px":"unset",e.style.top=n.top?n.top+"px":"unset",e.style.right=n.right?n.right+"px":"unset",e.style.bottom=n.bottom?n.bottom+"px":"unset"}function qe(u,e=160){const t=u.getBoundingClientRect();let r=window.innerHeight/2-t.height/2;r<0?r=0:r>e&&(r=e),u.style.top=r+"px"}function Se(){if(document.body.style.overflow==="hidden")return;const u=Fe();document.body.style.overflow="hidden",document.body.style.paddingRight=u+"px"}function De(){const{popupsMap:u}=b.getState();let e=0;for(const[,[t]]of u)if(t.baseOptions,t.baseOptions.lockScroll&&(e+=1),e>1)return;document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function Ke(){const{popupsMap:u}=b.getState();for(const[,[e]]of u)e.close()}function Ue(u){const{popupsMap:e}=b.getState(),t=e.get(u);return t?(t[0].close(),!0):!1}const ue="taomu-popup-xxxx-xxxx-xxxx",z=f.forwardRef(({className:u,cssVars:e,style:t,popupId:r=oe(ue),children:l,show:o,noFixed:i,zIndex:p=1e3,backgroundEvent:n,escToClose:a=!0,clickToClose:y=!0,lockScroll:v,overlay:C=!1,overlayProps:x={},overlayAnimationConfig:R,overlayTransitionOptions:A,contentWrapperProps:{className:F,...w}={},contentAnimationConfig:I,contentTransitionOptions:s,equalWidth:c,positionType:d,positionTargetElement:h,autoFixPosition:B=!0,edgeOffset:ie,popupAnimationConfigBuilder:re=ke,onBeforeEnter:q,onEnter:ae,onBeforeLeave:S,onLeave:se,onBackgroundClickClose:D,onEscClose:_,onClose:O,...le},pe)=>{const L=f.useRef(null),V=f.useRef(!1),K=f.useRef(!1),ce=ne("popup",`position-${d}`,{"no-fixed":i,"position-absolute":!h,"background-event":n||!C},u),fe=Ae({zIndex:p.toString(),...e},t),[de,U]=f.useState(!1),[me,$]=f.useState(!1),[G,he]=f.useState(!1);N(document,"keydown",m=>{if(m.key==="Escape"&&a){const{popupsMap:E}=b.getState();Array.from(E.keys()).pop()===r&&(T(),_==null||_())}}),N(window,"resize",()=>{B&&W()}),N(document,"scroll",()=>{B&&W()}),f.useImperativeHandle(pe,()=>({open:X,close:T,closeLockRef:K})),f.useEffect(()=>{const m=y&&(n||!C);if(v&&ve(),m){let E=function(k){var J,Q;(Q=(J=L.current)==null?void 0:J.firstChild)!=null&&Q.contains(k.target)||(T(),D==null||D())};return setTimeout(()=>{document.addEventListener("click",E)},0),()=>{M(),document.removeEventListener("click",E)}}return()=>{M()}},[]),f.useEffect(()=>{o?X():T()},[o]);function ve(){V.current||(Se(),V.current=!0)}function M(){V.current&&(De(),V.current=!1)}function X(){U(!0),$(!0)}function T(){if(K.current===!0){console.warn("close action is locked");return}U(!1),$(!1),O==null||O()}function ge(){if(!C)return null;if(x.className=j("popup-overlay",x.className),y){const m=x.onClick;x.onClick=E=>{T(),m==null||m(E)}}return P(ee,{show:de,animationConfig:R,options:A,children:P("div",{...x})})}function be(m){q==null||q(m),setTimeout(()=>{W()},0)}function ye(m){S==null||S(m),v&&M()}function W(){const m=L.current;m&&(d==="dialog-center"?qe(m):Re(h,m,d,c,ie),G||he(!0))}function Ce(){if(!l)return null;const m=I??re(d,!!h),E=Object.assign({duration:300,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},s),k=j("popup-content",r,F,{"target-relative-position":!!h,"visibility-hidden":!G});return P(ee,{show:me,proxyRef:L,animationConfig:m,options:E,onBeforeEnter:be,onEnter:ae,onBeforeLeave:ye,onLeave:se,children:P("div",{className:k,...w,children:l})})}return we("div",{className:ce,style:fe,css:Ve,...le,children:[ge(),Ce()]})});try{z.displayName="Popup",z.__docgenInfo={description:"",displayName:"Popup",props:{cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"PopupCssVars"}},popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},noFixed:{defaultValue:null,description:"不脱离文档流",name:"noFixed",required:!1,type:{name:"boolean"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:{value:"{}"},description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-left"'},{value:'"left-center"'},{value:'"left-right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"center-left"'},{value:'"center-center"'},{value:'"center-right"'},{value:'"center-bottom"'},{value:'"center-top"'},{value:'"right-left"'},{value:'"right-center"'},{value:'"right-right"'},{value:'"right-bottom"'},{value:'"right-top"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"bottom-bottom"'},{value:'"bottom-top"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"top-bottom"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
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
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}class H{constructor(e,t={}){g(this,"popupId");g(this,"popupRef",f.createRef());g(this,"createIndex",b.getState().popupsMap.size+1);g(this,"isEnter",!1);g(this,"render",e=>{const{portalContainer:t,createContainerId:r,createContainerClass:l,zIndex:o=1e3,onBeforeEnter:i,onBeforeLeave:p,onLeave:n,...a}=this.baseOptions,y=this.Content;return Te.createPortal(P(z,{ref:this.popupRef,popupId:this.popupId,zIndex:o+this.createIndex,show:!0,onBeforeEnter:v=>(this.isEnter=!0,i==null?void 0:i(v)),onBeforeLeave:v=>(this.isEnter=!1,p==null?void 0:p(v)),onLeave:()=>(this.destroy(),n==null?void 0:n()),...a,children:P(y,{popupInstance:this,...e})},this.popupId),this.container,this.popupId)});g(this,"close",()=>{var e;this.popupRef.current&&((e=this.popupRef.current)==null||e.close())});g(this,"destroy",()=>{const{popupsMap:e,updateCount:t}=b.getState();e.delete(this.popupId),b.setState({popupsMap:e,updateCount:t+1})});g(this,"dispatchUpdate",(e,t)=>{const{popupsMap:r,updateCount:l}=b.getState();r.has(this.popupId)&&(t&&this.updateBaseOptionsStatic(t),r.set(this.popupId,[this,e]),b.setState({popupsMap:r,updateCount:l+1}))});this.Content=e,this.baseOptions=t,t.popupId?this.popupId=t.popupId:this.popupId=oe(ue)}get containerId(){return this.baseOptions.createContainerId||"taomu-popup-container"}get container(){if(this.baseOptions.portalContainer)return this.baseOptions.portalContainer;const e=this.containerId,t=document.getElementById(e);if(t)return t;const r=document.createElement("div");return r.id=e,r.className=j("taomu-popup-container",this.baseOptions.createContainerClass),document.body.appendChild(r),r}get isOpened(){return!!this.popupRef.current}baseOpen(e){var l;const{popupsMap:t,updateCount:r}=b.getState();t.set(this.popupId,[this,e]),b.setState({popupsMap:t,updateCount:r+1}),this.isOpened&&((l=this.popupRef.current)==null||l.open())}}try{H.displayName="PopupPortalBase",H.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}class _e extends H{constructor(t,r={}){super(t,r);g(this,"open",(t,r)=>{r&&this.updateBaseOptionsStatic(r),this.baseOpen(t)});g(this,"updateBaseOptionsStatic",t=>{Object.assign(this.baseOptions,t)});this.Content=t,this.baseOptions=r}}const te=f.forwardRef(({children:u,content:e,trigger:t="hover",position:r="bottom-left",portalOptions:l,debounceTime:o=150,contentProps:i={},dynamic:p=!1},n)=>{var I;const a=f.useRef(void 0),y=f.useRef(new Pe),v=f.useRef(!1),[C,x]=f.useState(null),R=ne("popup-trigger",C,(I=u.props)==null?void 0:I.className);f.useImperativeHandle(n,()=>({openPopup:A,closePopup:F,popupPortal:a.current})),f.useEffect(()=>()=>{var s;(s=a.current)==null||s.destroy()},[]),f.useEffect(()=>{if(e){const s={positionType:r,...l,clickToClose:t==="click"};if(t==="hover"){s.contentWrapperProps||(s.contentWrapperProps={});const c=s.contentWrapperProps.onMouseEnter,d=s.contentWrapperProps.onMouseLeave;s.contentWrapperProps.onMouseEnter=h=>{v.current=!0,c==null||c(h)},s.contentWrapperProps.onMouseLeave=h=>{v.current=!1,d==null||d(h),!(a.current&&h.relatedTarget&&Z(h.relatedTarget,"."+a.current.popupId))&&F()}}a.current?p&&a.current.dispatchUpdate(i,s):a.current=new _e(e,s),x(a.current.popupId)}else console.warn("PopupTrigger props.content is not exist."),a.current=void 0},[e,l,t,i]);function A(s){if(!a.current)return console.warn("PopupPortal instance not found.");y.current.debounce(()=>{var c;(c=a==null?void 0:a.current)==null||c.open(i,{positionTargetElement:s,...l})},t==="hover"?o:0)}function F(){y.current.debounce(()=>{var s;t==="hover"&&v.current||(s=a.current)==null||s.close()},t==="hover"?o:0)}const w={className:R};return t==="click"?w.onClick=s=>{var c,d,h,B;if((d=(c=u.props)==null?void 0:c.onClick)==null||d.call(c,s),(h=a.current)!=null&&h.isEnter){F();return}else(B=a.current)!=null&&B.isOpened&&a.current.destroy();A(s.currentTarget||s.target)}:t==="hover"&&(w.onMouseEnter=s=>{var c,d,h,B;v.current=!0,(d=(c=u.props)==null?void 0:c.onMouseEnter)==null||d.call(c,s),!((h=a.current)!=null&&h.isEnter)&&((B=a.current)!=null&&B.isOpened&&a.current.destroy(),A(s.currentTarget||s.target))},w.onMouseLeave=s=>{var c,d;v.current=!1,(d=(c=u.props)==null?void 0:c.onMouseOut)==null||d.call(c,s),!(a.current&&s.relatedTarget&&Z(s.relatedTarget,"."+a.current.popupId,a.current.containerId))&&F()}),f.cloneElement(u,{...u.props,...w})});try{te.displayName="PopupTrigger",te.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-left"'},{value:'"left-center"'},{value:'"left-right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"center-left"'},{value:'"center-center"'},{value:'"center-right"'},{value:'"center-bottom"'},{value:'"center-top"'},{value:'"right-left"'},{value:'"right-center"'},{value:'"right-right"'},{value:'"right-bottom"'},{value:'"right-top"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"bottom-bottom"'},{value:'"bottom-top"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"top-bottom"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}},dynamic:{defaultValue:{value:"false"},description:"是否动态更新, 如果存在弹层嵌套,请勿使用",name:"dynamic",required:!1,type:{name:"boolean"}}}}}catch{}export{H as P,te as a,_e as b,z as c,Ke as d,Ue as e};
