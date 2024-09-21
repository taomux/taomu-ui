import{s as u,l as e,m as i,c as B,p as L,a as n,i as A}from"./mini-scrollbar-Bq2Cewqh.js";import{R as g}from"./index-l2PZgWEW.js";import"./_getTag-Dgi2y9Uc.js";import{u as _,a as N}from"./use-taomu-classname-Bo7IX2bY.js";import"./index-DfD08_1O.js";import{L as O}from"./loading-BYHYPpAm.js";u("common",{switchColor:e("colorPrimary"),switchWidth:34,switchHeight:18,switchRadius:e("radiusSM"),switchBorderColor:e("colorBorder"),switchOutlineColor:i("colorPrimaryRgb",.3),switchBoxBackground:i("colorFrontRgb",.1)});u("light",{switchDefaultColor:"#fff",switchBorderColor:"transparent"});u("dark",{switchDefaultColor:i("colorFrontRgb",.6)});const T=B`
  --td: 0.25s;

  background-color: ${e("switchBoxBackground")};
  border-radius: ${e("switchRadius")};
  width: ${e("switchWidth")};
  height: ${e("switchHeight")};
  border: 1px solid ${e("switchBorderColor")};
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
    background-color: ${e("switchDefaultColor")};
    box-shadow: ${e("boxShadowSM")};
    transition: all 0.25s;
  }

  &:not(.disabled) {
    &:hover {
      border-color: ${e("switchColor")};
    }

    &:active {
      .switch-thumb {
        width: 60%;
      }
    }

    &.show-outline {
      &:active,
      &:focus {
        outline: ${e("switchOutlineColor")} solid 2px;
      }
    }
  }

  &.active {
    background-color: ${e("switchColor")};
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
      background-color: ${i("colorFrontRgb",.2)};
    }
  }

  &.is-loading {
    cursor: progress;
    &:not(.active) {
      ${L("loadingColor",`color-mix(in srgb, ${e("switchColor")}, #fff 65%)`)};
    }
  }
`,y=({className:a,cssVars:r,style:t,width:o=34,height:c=18,radius:v,color:C,disabled:x,loading:V,showOutline:$=!0,autoLoading:D=!0,autoFocus:E=!0,value:d,onChange:s,...R})=>{const h=g.useRef(null),[S,m]=g.useState(!1),l=V||S;let f=x||l;const k=_("switch",{disabled:f,active:d,"show-outline":$,"is-loading":l},a),q=N({switchColor:C,switchWidth:o,switchHeight:c,switchRadius:v,...r},t);function F(p){if(f){p.preventDefault();return}const w=s==null?void 0:s(!d,p);D&&A(w)&&(m(!0),w.finally(()=>{m(!1),E&&setTimeout(()=>{var b;(b=h.current)==null||b.focus()},0)}))}return n("div",{className:k,style:q,css:T,...R,tabIndex:0,onClick:F,children:n("div",{ref:h,className:"switch-thumb flex center",children:l?H(o,c):null})})};function H(a,r){let t=Math.min(a*.45,r)-12,o=2;return t<6?t=6:t>32&&(t=32),t>15?o=3:t>30&&(o=4),n(O,{size:t,weight:o,cssVars:{loadingTrackColor:"transparent"}})}try{y.displayName="Switch",y.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:{value:"34"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"18"},description:"",name:"height",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:{value:"true"},description:"如果 onChange 返回一个 Promise, 则自动添加 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"loading 结束后自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean, e: FormEvent<HTMLDivElement>) => any)"}}}}}catch{}export{y as S};
