import{j as S,a as B}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";import{R as m}from"./index-l2PZgWEW.js";import{s as F,l as e,m as l,c as N,p as r,K as W}from"./mini-scrollbar-DUVypj3v.js";import{u as O,a as P,c as j}from"./use-taomu-classname-BHBGss1S.js";F("common",{btnWidth:"auto",btnColorHover:e("colorTextDefault"),btnOutlineColor:l("colorFrontRgb",.3),btnBorderColor:e("colorBorder"),btnRadius:e("radiusSM"),btnHeight:30,btnPaddingX:14,btnFontSize:14});F("light",{btnColor:e("colorTextDefault"),btnBackground:"#fff",btnBackgroundHover:"#fafafa",btnOutlineColor:l("colorFrontRgb",.05)});F("dark",{btnColor:e("colorTextGray"),btnBackground:l("colorFrontRgb",.1),btnBackgroundHover:l("colorFrontRgb",.25)});const X=N`
  user-select: none;
  transition: all 0.25s;
  outline: transparent solid 0;
  overflow: hidden;
  position: relative;

  width: ${e("btnWidth")};
  height: ${e("btnHeight")};
  background-color: ${e("btnBackground")};
  border-radius: ${e("btnRadius")};
  border: 1px solid ${e("btnBorderColor")};
  padding: 0 ${e("btnPaddingX")};
  color: ${e("btnColor")};
  font-size: ${e("btnFontSize")};

  &[disabled]:not(.is-loading) {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.is-loading {
    cursor: progress;
  }

  &:hover:not([disabled]) {
    background-color: ${e("btnBackgroundHover")};
    color: ${e("btnColorHover")};
  }

  &.show-outline:not([disabled]) {
    outline-offset: 0px;
    &:active,
    &:focus {
      outline-offset: 0;
      outline: ${e("btnOutlineColor")} solid 3px;
    }
  }

  &.btn-primary {
    ${r("btnBackground",e("colorPrimary"))};
    ${r("btnOutlineColor",l("colorPrimaryRgb",.3))};
    ${r("btnBackgroundHover",l("colorPrimaryRgb",.75))};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-warning {
    ${r("btnBackground",e("colorWarning"))};
    ${r("btnOutlineColor",l("colorWarningRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-danger {
    ${r("btnBackground",e("colorError"))};
    ${r("btnOutlineColor",l("colorErrorRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-link {
    ${r("btnBackground","transparent")};
    ${r("btnBackgroundHover","transparent")};
    ${r("btnOutlineColor","transparent")};
    ${r("btnBorderColor","transparent")};
    ${r("btnColor",e("colorTextLink"))};
    ${r("btnColorHover",e("colorTextLinkHover"))};
    &:hover {
      text-shadow: 0 0 24px ${e("colorTextLinkHover")};
    }
  }

  &.btn-ghost:not(.btn-default):not(.btn-link) {
    background-color: transparent;
    ${r("btnBorderColor",e("btnBackground"))};
    ${r("btnColor",e("btnBackground"))};

    &:not([disabled]) {
      &:hover,
      &:active {
        background-color: transparent;
        box-shadow: 0 0 12px 0px color-mix(in srgb, ${e("btnBackground")}, transparent 70%);
        ${r("btnBorderColor",e("btnBackgroundHover"))};
        ${r("btnColorHover",e("btnBackground"))};
      }
    }
  }

  &.btn-glass {
    backdrop-filter: blur(5px);
    &:not(.btn-default):not(.btn-link) {
      color: ${e("btnBackground")};
      border-color: ${e("btnBackground")};

      &.btn-primary {
        background-color: ${l("colorPrimaryRgb",.15)};
      }
      &.btn-warning {
        background-color: ${l("colorWarningRgb",.15)};
      }
      &.btn-danger {
        background-color: ${l("colorErrorRgb",.15)};
      }

      &:not([disabled]) {
        &:hover,
        &:active {
          box-shadow: 0 0 12px 0px color-mix(in srgb, ${e("btnBackground")}, transparent 70%);
          ${r("btnColorHover",e("btnBackground"))};
        }
      }
    }
  }

  .btn-loader-wrap {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  &.btn-default,
  &.btn-primary,
  &.btn-warning,
  &.btn-danger {
    --btn-progress-bar-bg-color: rgba(225, 225, 225, 0.75);
    .progress-bar.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        var(--btn-progress-bar-bg-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--btn-progress-bar-bg-color) 50%,
        var(--btn-progress-bar-bg-color) 75%,
        transparent 75%,
        transparent
      );
    }

    &.btn-glass,
    &.btn-ghost {
      --btn-progress-bar-bg-color: ${l("colorBackgroundRgb",.5)};
    }
  }

  &.btn-default {
    --btn-progress-bar-bg-color: ${l("colorFrontRgb",.35)};

    .progress-bar {
      ${r("progressColor",l("colorPrimaryRgb",.4))};
    }
  }

  &.btn-link {
    .progress-bar {
      ${r("progressColor",l("colorInfoRgb",.45))};
    }
  }

  &.btn-primary {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 20%)`)};
    }
  }

  &.btn-warning {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 12%)`)};
    }
  }

  &.btn-danger {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 16%)`)};
    }
  }
`;F("common",{progressWidth:"100%",progressHeight:18,progressRadius:e("radiusSM"),progressBarRadius:e("progressRadius"),progressStripedSize:"1.6em",progressSpeed:"0.6s",progressColor:e("colorPrimary"),progressBackgroundMixinColor:"transparent"});const K=N`
  --progress-bar-striped-angle: 45deg;
  --progress-bar-animation-proportion: -1;

  border-radius: ${e("progressRadius")};
  width: ${e("progressWidth")};
  height: ${e("progressHeight")};
  background-color: color-mix(in srgb, ${e("progressColor")}, ${e("progressBackgroundMixinColor")} 75%);
  overflow: hidden;
  position: relative;
  color: #fff;

  &.progress-info {
    ${r("progressColor",e("colorInfo"))};
  }

  &.progress-success {
    ${r("progressColor",e("colorSuccess"))};
  }

  &.progress-warning {
    ${r("progressColor",e("colorWarning"))};
  }

  &.progress-error {
    ${r("progressColor",e("colorError"))};
  }

  &.progress-gray {
    ${r("progressColor",e("colorTextLight"))};
  }

  &.striped-reverse {
    --progress-bar-striped-angle: -45deg;
  }

  &.striped-animation-reverse {
    --progress-bar-animation-proportion: 1;
  }

  &.progress-transition {
    .progress-bar {
      transition: width 0.3s;
    }
  }

  .progress-bar {
    width: ${e("progressWidth")};
    height: inherit;
    background-color: ${e("progressColor")};
    border-radius: ${e("progressBarRadius")};
    position: absolute;
    left: 0;
    top: 0;

    &.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        rgba(${e("colorFrontRgb")}, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(${e("colorFrontRgb")}, 0.15) 50%,
        rgba(${e("colorFrontRgb")}, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: ${e("progressStripedSize")} ${e("progressStripedSize")};

      &.animated {
        animation: ${e("progressSpeed")} linear infinite progress-bar-stripes;
      }
    }

    @keyframes progress-bar-stripes {
      0% {
        background-position-x: calc(var(--progress-bar-animation-proportion) * ${e("progressStripedSize")});
      }
    }
  }
`,A=({children:u,className:d,cssVars:f,style:g,width:p="100%",height:n=18,radius:i,color:o,striped:c,stripedReverse:a,stripedAnimationReverse:s,animated:b=!0,transition:y=!0,progress:v=0,type:h="primary",...C})=>{const k=O("progress",`progress-${h}`,{"striped-reverse":a,"striped-animation-reverse":s,"progress-transition":y},d),$=P({progressWidth:p,progressHeight:n,progressRadius:i,progressColor:o,...f},g);return S("div",{className:k,style:$,css:K,...C,children:[B("div",{className:j("progress-bar",{striped:c,animated:c&&b}),style:{width:`${v}%`}}),u&&B("div",{className:"relative flex center fs-12 full-screen",children:u})]})};try{A.displayName="Progress",A.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"gray"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}try{Progress.displayName="Progress",Progress.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"gray"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}const t={duration:300,easing:"ease-out"},Z={options:t,enter:{keyframes:[{opacity:0},{opacity:1}]},leave:{keyframes:[{opacity:1},{opacity:0}]}},G={options:t,enter:{keyframes:[{transform:"translate3d(-100%, 0, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(-100%, 0, 0)"}]}},J={options:t,enter:{keyframes:[{transform:"translate3d(-100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(-100%, 0, 0)",opacity:0}]}},Q={options:t,enter:{keyframes:[{transform:"translate3d(100%, 0, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(100%, 0, 0)"}]}},U={options:t,enter:{keyframes:[{transform:"translate3d(100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(100%, 0, 0)",opacity:0}]}},Y={options:t,enter:{keyframes:[{transform:"translate3d(0, -100%, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, -100%, 0)"}]}},ee={options:t,enter:{keyframes:[{transform:"translate3d(0, -100%, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, -100%, 0)",opacity:0}]}},re={options:t,enter:{keyframes:[{transform:"translate3d(0, 100%, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, 100%, 0)"}]}},te={options:t,enter:{keyframes:[{transform:"translate3d(0, 100%, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, 100%, 0)",opacity:0}]}},ae={options:t,enter:{keyframes:[{transform:"translate3d(-100%, 0, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(100%, 0, 0)"}]}},ne={options:t,enter:{keyframes:[{transform:"translate3d(-100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(100%, 0, 0)",opacity:0}]}},oe={options:t,enter:{keyframes:[{transform:"translate3d(100%, 0, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(-100%, 0, 0)"}]}},se={options:t,enter:{keyframes:[{transform:"translate3d(100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(-100%, 0, 0)",opacity:0}]}},ue={options:t,enter:{keyframes:[{transform:"translate3d(0, -100%, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, 100%, 0)"}]}},le={options:t,enter:{keyframes:[{transform:"translate3d(0, -100%, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, 100%, 0)",opacity:0}]}},ie={options:t,enter:{keyframes:[{transform:"translate3d(0, 100%, 0)"},{transform:"translate3d(0, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, -100%, 0)"}]}},de={options:t,enter:{keyframes:[{transform:"translate3d(0, 100%, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, -100%, 0)",opacity:0}]}},pe={options:t,enter:{keyframes:[{transform:"translate3d(-12px, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(-12px, 0, 0)",opacity:0}]}},ce={options:t,enter:{keyframes:[{transform:"translate3d(12px, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(12px, 0, 0)",opacity:0}]}},fe={options:t,enter:{keyframes:[{transform:"translate3d(0, -12px, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, -12px, 0)",opacity:0}]}},me={options:t,enter:{keyframes:[{transform:"translate3d(0, 12px, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}]},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, 12px, 0)",opacity:0}]}},ge={options:t,enter:{keyframes:[{transform:"scale3d(0.5, 0.5, 0.5)",opacity:0},{transform:"scale3d(1, 1, 1)",opacity:1}]},leave:{keyframes:[{transform:"scale3d(1, 1, 1)",opacity:1},{transform:"scale3d(0.5, 0.5, 0.5)",opacity:0}]}},be={options:t,enter:{keyframes:[{transform:"scale3d(1.5, 1.5, 1.5)",opacity:0},{transform:"scale3d(1, 1, 1)",opacity:1}]},leave:{keyframes:[{transform:"scale3d(1, 1, 1)",opacity:1},{transform:"scale3d(1.5, 1.5, 1.5)",opacity:0}]}},ye={options:t,enter:{keyframes:[{transform:"scale3d(0.5, 0.5, 0.5)",opacity:0},{transform:"scale3d(1, 1, 1)",opacity:1}]},leave:{keyframes:[{transform:"scale3d(1, 1, 1)",opacity:1},{transform:"scale3d(1.5, 1.5, 1.5)",opacity:0}]}},ve={options:t,enter:{keyframes:[{transform:"scale3d(1.5, 1.5, 1.5)",opacity:0},{transform:"scale3d(1, 1, 1)",opacity:1}]},leave:{keyframes:[{transform:"scale3d(1, 1, 1)",opacity:1},{transform:"scale3d(0.5, 0.5, 0.5)",opacity:0}]}},he={options:t,enter:{keyframes:[{transform:"translateX(-50%) scale3d(1.28, 1.28, 1.28)",opacity:0},{transform:"translateX(-50%) scale3d(1, 1, 1)",opacity:1}]},leave:{keyframes:[{transform:"translateX(-50%) scale3d(1, 1, 1)",opacity:1},{transform:"translateX(-50%) scale3d(0.78, 0.78, 0.78)",opacity:0}]}},ke=Object.freeze(Object.defineProperty({__proto__:null,dialogZoomOut:he,fade:Z,moveBottom:me,moveLeft:pe,moveRight:ce,moveTop:fe,slideBottom:re,slideBottomFade:te,slideLeft:G,slideLeftFade:J,slideRight:Q,slideRightFade:U,slideTop:Y,slideTopFade:ee,throughBottom:ie,throughBottomFade:de,throughLeft:ae,throughLeftFade:ne,throughRight:oe,throughRightFade:se,throughTop:ue,throughTopFade:le,throughZoomIn:ye,throughZoomOut:ve,zoomIn:ge,zoomOut:be},Symbol.toStringTag,{value:"Module"})),R=({children:u,proxyRef:d,show:f,options:g,animationConfig:p="fade",onBeforeEnter:n,onEnter:i,onBeforeLeave:o,onLeave:c})=>{const a=m.useRef(null),s=m.useRef(),[b,y]=m.useState(f);return m.useEffect(()=>{var v,h;if(f)((v=s.current)==null?void 0:v.playState)==="running"?(a.current.style.visibility="hidden",(h=s.current)==null||h.cancel(),y(!1),setTimeout(()=>{y(!0),setTimeout(()=>{n==null||n(a.current)},0)},0)):(y(!0),setTimeout(()=>{n==null||n(a.current)},0));else if(b){if(!a.current)return;s.current=T(a.current,p,"leave",g),s.current?(o==null||o(a.current),s.current.play(),s.current.onfinish=()=>{a.current.style.display="none",y(!1),c==null||c()}):(o==null||o(a.current),c==null||c())}},[f]),m.useEffect(()=>{if(d&&(d.current=a.current),b){if(!a.current)return;a.current.style.visibility="",s.current=T(a.current,p,"enter",g),s.current?(s.current.play(),s.current.onfinish=()=>{i==null||i(a.current)}):i==null||i(a.current)}},[b]),m.useEffect(()=>()=>{s.current&&s.current.cancel()},[]),b?m.cloneElement(u,{ref:a}):null};function T(u,d,f="enter",g){if(d===!1)return;const p=typeof d=="string"?ke[d]:d;if(typeof p=="object"){const n=p[f],i={...p.options,...g};if(typeof n=="function"){const o=n(u,i);return o!=null&&o.keyframes?new Animation(new KeyframeEffect(u,o.keyframes,{...i,...o.options})):void 0}else if(typeof n=="object")return new Animation(new KeyframeEffect(u,n.keyframes,{...n.options,...i}))}else console.warn("createAnimation Error: invalid animationConfig",{animationType:d,config:p})}try{R.displayName="Transition",R.__docgenInfo={description:"",displayName:"Transition",props:{proxyRef:{defaultValue:null,description:"children 的 ref 代理",name:"proxyRef",required:!1,type:{name:"MutableRefObject<HTMLElement | null>"}},show:{defaultValue:null,description:"外部控制的状态，决定 children 是否进场",name:"show",required:!1,type:{name:"boolean"}},animationConfig:{defaultValue:{value:"fade"},description:"动画配置",name:"animationConfig",required:!1,type:{name:"AnimationConfig"}},options:{defaultValue:null,description:"动画函数选项，高优先级",name:"options",required:!1,type:{name:"KeyframeEffectOptions"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}}}}}catch{}try{Transition.displayName="Transition",Transition.__docgenInfo={description:"",displayName:"Transition",props:{proxyRef:{defaultValue:null,description:"children 的 ref 代理",name:"proxyRef",required:!1,type:{name:"MutableRefObject<HTMLElement | null>"}},show:{defaultValue:null,description:"外部控制的状态，决定 children 是否进场",name:"show",required:!1,type:{name:"boolean"}},animationConfig:{defaultValue:{value:"fade"},description:"动画配置",name:"animationConfig",required:!1,type:{name:"AnimationConfig"}},options:{defaultValue:null,description:"动画函数选项，高优先级",name:"options",required:!1,type:{name:"KeyframeEffectOptions"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}}}}}catch{}const H=({children:u,className:d,cssVars:f,style:g,type:p="default",width:n,height:i,paddingX:o,fontSize:c,showOutline:a=!0,ghost:s,glass:b,loading:y,disabled:v,autoLoading:h=!0,autoFocus:C=!0,onClick:k,...$})=>{const V=m.useRef(null),[z,x]=m.useState(!1),E=y||z;let q=v||E;const M=O("btn","flex flex-inline center flex-none",`btn-${p}`,{"show-outline":a,"btn-ghost":s,"btn-glass":b,"is-loading":E},d),I=P({btnWidth:n,btnHeight:i,btnPaddingX:o,btnFontSize:c,...f},g);function L(D){if(q){D.preventDefault();return}const _=k==null?void 0:k(D);h&&W(_)&&(x(!0),_.finally(()=>{x(!1),C&&setTimeout(()=>{var w;(w=V.current)==null||w.focus()},0)}))}return S("button",{ref:V,css:X,className:M,style:I,disabled:q,onClick:L,...$,children:[u,B(R,{show:E,animationConfig:"throughRightFade",children:B("div",{className:"btn-loader-wrap",children:B(A,{className:"btn-loader",height:3,striped:!0,progress:100,cssVars:{progressSpeed:"0.35s"}})})})]})};try{H.displayName="Button",H.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"warning"'},{value:'"danger"'},{value:'"link"'}]}},width:{defaultValue:null,description:"按钮宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"按钮高度",name:"height",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"按钮横向间距",name:"paddingX",required:!1,type:{name:"string | number"}},block:{defaultValue:null,description:"使用 flex 替换 inline-flex",name:"block",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"字体大小",name:"fontSize",required:!1,type:{name:"string | number"}},ghost:{defaultValue:null,description:"幽灵按钮",name:"ghost",required:!1,type:{name:"boolean"}},glass:{defaultValue:null,description:"半透明 + 毛玻璃效果",name:"glass",required:!1,type:{name:"boolean"}},htmlType:{defaultValue:null,description:"原生按钮类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"加载状态",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:{value:"true"},description:"如果 onClick 返回一个 promise, 则自动添加按钮 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"在 loading 结束后，自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}}}}}catch{}export{H as B,A as P,R as T};
