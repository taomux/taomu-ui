import{l as e,m as o,p as r,c as z,j as W,a as u,f as ee}from"./mini-scrollbar-CPC470y1.js";import{R as p}from"./index-D4lIrffr.js";import{u as O,a as T,c as re}from"./use-taomu-classname-DBKvGVUz.js";import{i as g}from"./global-vars-CoVtkCb5.js";import{T as oe}from"./index-vYJU6RZc.js";g("common",{btnWidth:"auto",btnColorHover:e("colorTextDefault"),btnOutlineColor:o("colorFrontRgb",.3),btnBorderColor:e("colorBorder"),btnRadius:e("radiusSM"),btnHeight:30,btnPaddingX:14,btnFontSize:14});g("light",{btnColor:e("colorTextDefault"),btnBackground:"#fff",btnBackgroundHover:"#fafafa",btnOutlineColor:o("colorFrontRgb",.05)});g("dark",{btnColor:e("colorTextDefault"),btnBackground:o("colorFrontRgb",.1),btnBackgroundHover:o("colorFrontRgb",.25)});const ae=z`
  user-select: none;
  outline: transparent solid 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: ${e("commonTransition")};

  width: ${e("btnWidth")};
  height: ${e("btnHeight")};
  background-color: ${e("btnBackground")};
  border-radius: ${e("btnRadius")};
  border: 1px solid ${e("btnBorderColor")};
  padding: 0 ${e("btnPaddingX")};
  color: ${e("btnColor")};
  font-size: ${e("btnFontSize")};

  &.dash-border {
    border-style: dashed;
  }

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
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
    &:not(.btn-glass):not(.btn-ghost) {
      ${r("btnBackground",e("colorPrimaryDark"))};
      ${r("btnOutlineColor",o("colorPrimaryDarkRgb",.3))};
      ${r("btnBackgroundHover",o("colorPrimaryDarkRgb",.75))};
    }
    &.btn-glass,
    &.btn-ghost {
      ${r("btnBackground",e("colorPrimary"))};
      ${r("btnOutlineColor",o("colorPrimaryRgb",.3))};
      ${r("btnBackgroundHover",o("colorPrimaryRgb",.75))};
    }
  }

  &.btn-warning {
    ${r("btnBackground",e("colorWarning"))};
    ${r("btnOutlineColor",o("colorWarningRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-danger {
    ${r("btnBackground",e("colorError"))};
    ${r("btnOutlineColor",o("colorErrorRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-text {
    ${r("btnBackground","transparent")};
    ${r("btnBackgroundHover","transparent")};
    ${r("btnOutlineColor","transparent")};
    ${r("btnBorderColor","transparent")};
  }

  &.btn-ghost:not(.btn-default):not(.btn-text) {
    background-color: transparent;
    ${r("btnBorderColor",e("btnBackground"))};
    ${r("btnColor",e("btnBackground"))};

    &:not([disabled]) {
      &:hover,
      &:active {
        background-color: transparent;
        ${r("btnBorderColor",e("btnBackgroundHover"))};
        ${r("btnColorHover",e("btnBackgroundHover"))};
      }
    }
  }

  &.btn-glass {
    backdrop-filter: blur(5px);
    &:not(.btn-default):not(.btn-text) {
      color: ${e("btnBackground")};
      border-color: ${e("btnBackground")};

      &.btn-primary {
        background-color: ${o("colorPrimaryRgb",.15)};
      }
      &.btn-warning {
        background-color: ${o("colorWarningRgb",.15)};
      }
      &.btn-danger {
        background-color: ${o("colorErrorRgb",.15)};
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
      --btn-progress-bar-bg-color: ${o("colorBackgroundRgb",.5)};
    }
  }

  &.btn-default {
    --btn-progress-bar-bg-color: ${o("colorFrontRgb",.35)};

    .progress-bar {
      ${r("progressColor",o("colorPrimaryRgb",.4))};
    }
  }

  &.btn-text {
    .progress-bar {
      ${r("progressColor",o("colorInfoRgb",.45))};
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
`;g("common",{progressWidth:"100%",progressHeight:18,progressRadius:e("radiusSM"),progressBarRadius:e("progressRadius"),progressStripedSize:"1.6em",progressSpeed:"0.6s",progressColor:e("colorPrimary"),progressBackgroundMixinColor:"transparent"});const ne=z`
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
`,q=({children:n,className:b,cssVars:c,style:m,width:s="100%",height:t=18,radius:f,color:v,striped:l,stripedReverse:B,stripedAnimationReverse:y,animated:h=!0,transition:$=!0,progress:C=0,type:i="primary",...F})=>{const E=O("progress",`progress-${i}`,{"striped-reverse":B,"striped-animation-reverse":y,"progress-transition":$},b),A=T({progressWidth:s,progressHeight:t,progressRadius:f,progressColor:v,...c},m);return W("div",{className:E,style:A,css:ne,...F,children:[u("div",{className:re("progress-bar",{striped:l,animated:l&&h}),style:{width:`${C}%`}}),n&&u("div",{className:"relative flex center fs-12 full-screen",children:n})]})};try{q.displayName="Progress",q.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"gray"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}try{Progress.displayName="Progress",Progress.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"gray"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}const N=({children:n,className:b,cssVars:c,style:m,type:s="default",hoverType:t,width:f,height:v,paddingX:l,fontSize:B,showOutline:y=!0,ghost:h,glass:$,dashed:C,block:i,loading:F,disabled:E,autoLoading:A=!0,autoFocus:I=!0,radius:X,round:L,onClick:k,onMouseEnter:D,onMouseLeave:V,htmlType:j="button",...G})=>{const x=p.useRef(null),[M,w]=p.useState(!1),[S,H]=p.useState(!1),R=F||M;let d=E||R;const J=p.useMemo(()=>t&&S?`btn-${t}`:`btn-${s}`,[S,s,t]),K=O("btn","flex center flex-none",i?"flex":"flex-inline",J,{"show-outline":y,"btn-ghost":h,"btn-glass":$,"is-loading":R,"dash-border":C},b),Q=T({btnWidth:i?"100%":f,btnHeight:v,btnPaddingX:l,btnFontSize:B,btnRadius:L?45:X,...c},m);function U(a){if(d){a.preventDefault();return}const _=k==null?void 0:k(a);A&&ee(_)&&(w(!0),_.finally(()=>{w(!1),I&&setTimeout(()=>{var P;(P=x.current)==null||P.focus()},0)}))}function Y(a){if(D==null||D(a),d){a.preventDefault();return}t&&H(!0)}function Z(a){if(V==null||V(a),d){a.preventDefault();return}t&&H(!1)}return W("button",{ref:x,css:ae,className:K,style:Q,disabled:d,onClick:U,onMouseEnter:Y,onMouseLeave:Z,type:j,...G,children:[n,u(oe,{show:R,animationConfig:"throughRightFade",children:u("div",{className:"btn-loader-wrap",children:u(q,{className:"btn-loader",height:3,striped:!0,progress:100,cssVars:{progressSpeed:"0.35s"}})})})]})};try{N.displayName="Button",N.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"warning"'},{value:'"danger"'},{value:'"text"'}]}},hoverType:{defaultValue:null,description:"",name:"hoverType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"warning"'},{value:'"danger"'},{value:'"text"'}]}},width:{defaultValue:null,description:"按钮宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"按钮高度",name:"height",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"按钮横向间距",name:"paddingX",required:!1,type:{name:"string | number"}},block:{defaultValue:null,description:"使用 flex 替换 inline-flex",name:"block",required:!1,type:{name:"boolean"}},dashed:{defaultValue:null,description:"虚线边框",name:"dashed",required:!1,type:{name:"boolean"}},radius:{defaultValue:null,description:"圆角",name:"radius",required:!1,type:{name:"string | number"}},round:{defaultValue:null,description:"圆形按钮",name:"round",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"字体大小",name:"fontSize",required:!1,type:{name:"string | number"}},ghost:{defaultValue:null,description:"幽灵按钮",name:"ghost",required:!1,type:{name:"boolean"}},glass:{defaultValue:null,description:"半透明 + 毛玻璃效果",name:"glass",required:!1,type:{name:"boolean"}},htmlType:{defaultValue:{value:"button"},description:"原生按钮类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"加载状态",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:{value:"true"},description:"如果 onClick 返回一个 promise, 则自动添加按钮 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"在 loading 结束后，自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}}}}}catch{}export{N as B,q as P};
