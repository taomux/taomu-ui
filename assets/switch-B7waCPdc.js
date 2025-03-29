import{l as t,m as l,p as O,c as W,a as f,f as A}from"./mini-scrollbar-1dk_y2Qh.js";import{R as e}from"./index-D4lIrffr.js";import{u as P,a as Y,c as j}from"./use-taomu-classname-Dqq3FQ7F.js";import"./index-B3Ai5YFw.js";import{i as w}from"./use-custom-event-BYXfsBOj.js";import{L as z}from"./loading-DBrME-eE.js";w("common",{switchColor:t("colorPrimary"),switchWidth:34,switchHeight:18,switchRadius:t("radiusSM"),switchBorderColor:t("colorBorder"),switchOutlineColor:l("colorPrimaryRgb",.3),switchBoxBg:l("colorFrontRgb",.1),switchBoxBgActive:t("switchColor")});w("light",{switchDefaultColor:"#fff",switchBorderColor:"colorBorderSplit"});w("dark",{switchDefaultColor:l("colorFrontRgb",.6)});const E=W`
  --td: 0.25s;

  background-color: ${t("switchBoxBg")};
  border-radius: ${t("switchRadius")};
  width: ${t("switchWidth")};
  height: ${t("switchHeight")};
  border: 1px solid ${t("switchBorderColor")};
  outline: transparent solid 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border var(--td), outline var(--td), background var(--td);

  .switch-thumb {
    position: absolute;
    width: 45%;
    height: calc(100% - 5px);
    top: 50%;
    left: 2.5px;
    transform: translateY(-50%);
    transition: all 0.25s;

    :not(.no-thumb-style) {
      border-radius: inherit;
      background-color: ${t("switchDefaultColor")};
      box-shadow: ${t("boxShadowSM")};
    }
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
    background-color: ${t("switchBoxBgActive")};
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
      ${O("loadingColor",`color-mix(in srgb, ${t("switchColor")}, #fff 65%)`)};
    }
  }
`,y=e.forwardRef(({className:c,cssVars:n,style:r,width:i=34,height:m=18,radius:B,color:R,disabled:S,loading:$,showOutline:k=!0,autoLoading:_=!0,autoFocus:D=!0,noThumbStyle:L,thumbContent:g,name:p,value:d,onChange:h,...N},I)=>{const s=e.useRef(null),[T,b]=e.useState(!1),u=$||T;let x=S||u;const H=P("switch",{disabled:x,active:d,"show-outline":k,"is-loading":u},c),V=Y({switchColor:R,switchWidth:i,switchHeight:m,switchRadius:B,...n},r);e.useImperativeHandle(I,()=>s.current),e.useEffect(()=>{var o;(o=s.current)!=null&&o.target&&(s.current.target.name=p)},[p,s.current]);function F(o){if(x){o.preventDefault();return}o.target.checked=!d,o.target.value=o.target.checked;const C=h==null?void 0:h(o,!d);_&&A(C)&&(b(!0),C.finally(()=>{b(!1),D&&setTimeout(()=>{var a,v;(v=(a=s.current)==null?void 0:a.focus)==null||v.call(a)},0)}))}function M(){return u?G(i,m):g||null}return f("div",{className:H,style:V,css:E,...N,tabIndex:0,onClick:F,children:f("div",{ref:s,className:j("switch-thumb flex center",{"no-thumb-style":L}),children:M()})})});function G(c,n){let r=Math.min(c*.45,n)-12,i=2;return r<6?r=6:r>32&&(r=32),r>15?i=3:r>30&&(i=4),f(z,{size:r,weight:i,cssVars:{loadingTrackColor:"transparent"}})}try{y.displayName="Switch",y.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}export{y as S};
