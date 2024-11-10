import{l as t,m as l,c as V,p as F,a as w,K as M}from"./mini-scrollbar-BRbUwqmL.js";import{R as e}from"./index-DRjF_FHU.js";import{u as O,a as W}from"./use-taomu-classname-DvhRoCTO.js";import"./index-DUskeos7.js";import{s as f}from"./global-style-QoB4c899.js";import{L as K}from"./loading-B3JByMQH.js";f("common",{switchColor:t("colorPrimary"),switchWidth:34,switchHeight:18,switchRadius:t("radiusSM"),switchBorderColor:t("colorBorder"),switchOutlineColor:l("colorPrimaryRgb",.3),switchBoxBackground:l("colorFrontRgb",.1)});f("light",{switchDefaultColor:"#fff",switchBorderColor:"transparent"});f("dark",{switchDefaultColor:l("colorFrontRgb",.6)});const P=V`
  --td: 0.25s;

  background-color: ${t("switchBoxBackground")};
  border-radius: ${t("switchRadius")};
  width: ${t("switchWidth")};
  height: ${t("switchHeight")};
  border: 1px solid ${t("switchBorderColor")};
  outline: transparent solid 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    border var(--td),
    outline var(--td),
    background var(--td);

  .switch-thumb {
    position: absolute;
    width: 45%;
    height: calc(100% - 5px);
    top: 50%;
    left: 2.5px;
    transform: translateY(-50%);
    border-radius: inherit;
    background-color: ${t("switchDefaultColor")};
    box-shadow: ${t("boxShadowSM")};
    transition: all 0.25s;
  }

  &:not(.disabled) {
    &:hover {
      border-color: ${t("switchColor")};
    }

    &:active {
      .switch-thumb {
        width: 60%;
      }
    }

    &.show-outline {
      &:active,
      &:focus {
        outline: ${t("switchOutlineColor")} solid 2px;
      }
    }
  }

  &.active {
    background-color: ${t("switchColor")};
    .switch-thumb {
      left: calc(100% - 2.5px);
      transform: translateX(-100%) translateY(-50%);
    }
  }

  &.disabled:not(.is-loading) {
    cursor: not-allowed;
    opacity: 0.8;
    .switch-thumb {
      opacity: 0.8;
      background-color: ${l("colorFrontRgb",.2)};
    }
  }

  &.is-loading {
    cursor: progress;
    &:not(.active) {
      ${F("loadingColor",`color-mix(in srgb, ${t("switchColor")}, #fff 65%)`)};
    }
  }
`,v=e.forwardRef(({className:a,cssVars:n,style:r,width:i=34,height:m=18,radius:k,color:y,disabled:R,loading:$,showOutline:S=!0,autoLoading:B=!0,autoFocus:_=!0,name:g,value:d,onChange:h,...D},L)=>{const s=e.useRef(null),[N,p]=e.useState(!1),u=$||N;let b=R||u;const I=O("switch",{disabled:b,active:d,"show-outline":S,"is-loading":u},a),H=W({switchColor:y,switchWidth:i,switchHeight:m,switchRadius:k,...n},r);e.useImperativeHandle(L,()=>s.current),e.useEffect(()=>{var o;(o=s.current)!=null&&o.target&&(s.current.target.name=g)},[g,s.current]);function T(o){if(b){o.preventDefault();return}o.target.checked=!d,o.target.value=o.target.checked;const C=h==null?void 0:h(o,!d);B&&M(C)&&(p(!0),C.finally(()=>{p(!1),_&&setTimeout(()=>{var c,x;(x=(c=s.current)==null?void 0:c.focus)==null||x.call(c)},0)}))}return w("div",{className:I,style:H,css:P,...D,tabIndex:0,onClick:T,children:w("div",{ref:s,className:"switch-thumb flex center",children:u?Y(i,m):null})})});function Y(a,n){let r=Math.min(a*.45,n)-12,i=2;return r<6?r=6:r>32&&(r=32),r>15?i=3:r>30&&(i=4),w(K,{size:r,weight:i,cssVars:{loadingTrackColor:"transparent"}})}try{v.displayName="Switch",v.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}export{v as S};
