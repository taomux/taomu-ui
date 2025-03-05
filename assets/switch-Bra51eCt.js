import{l as e,m as n,c as N,p as _,a as f,K as H}from"./mini-scrollbar-CZ8eNCm3.js";import{R as o}from"./index-CZMpeKRu.js";import{u as I,a as M}from"./use-taomu-classname-CGrN28Ws.js";import"./index-DhsYTemN.js";import{i as h}from"./global-vars-CQDXv0Fn.js";import{L as O}from"./loading-eEEt9sJo.js";h("common",{switchColor:e("colorPrimary"),switchWidth:34,switchHeight:18,switchRadius:e("radiusSM"),switchBorderColor:e("colorBorder"),switchOutlineColor:n("colorPrimaryRgb",.3),switchBoxBackground:n("colorFrontRgb",.1)});h("light",{switchDefaultColor:"#fff",switchBorderColor:"transparent"});h("dark",{switchDefaultColor:n("colorFrontRgb",.6)});const T=N`
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
      background-color: ${n("colorFrontRgb",.2)};
    }
  }

  &.is-loading {
    cursor: progress;
    &:not(.active) {
      ${_("loadingColor",`color-mix(in srgb, ${e("switchColor")}, #fff 65%)`)};
    }
  }
`,V=o.forwardRef(({className:s,cssVars:u,style:t,width:r=34,height:p=18,radius:v,color:q,disabled:k,loading:x,showOutline:E=!0,autoLoading:S=!0,autoFocus:D=!0,name:w,value:d,onChange:c,...R},$)=>{const i=o.useRef(null),[F,g]=o.useState(!1),m=x||F;let b=k||m;const B=I("switch",{disabled:b,active:d,"show-outline":E,"is-loading":m},s),L=M({switchColor:q,switchWidth:r,switchHeight:p,switchRadius:v,...u},t);o.useImperativeHandle($,()=>i.current),o.useEffect(()=>{var a;(a=i.current)!=null&&a.target&&(i.current.target.name=w)},[w,i.current]);function A(a){if(b){a.preventDefault();return}a.target.checked=!d,a.target.value=a.target.checked;const y=c==null?void 0:c(a,!d);S&&H(y)&&(g(!0),y.finally(()=>{g(!1),D&&setTimeout(()=>{var l,C;(C=(l=i.current)==null?void 0:l.focus)==null||C.call(l)},0)}))}return f("div",{className:B,style:L,css:T,...R,tabIndex:0,onClick:A,children:f("div",{ref:i,className:"switch-thumb flex center",children:m?P(r,p):null})})});function P(s,u){let t=Math.min(s*.45,u)-12,r=2;return t<6?t=6:t>32&&(t=32),t>15?r=3:t>30&&(r=4),f(O,{size:t,weight:r,cssVars:{loadingTrackColor:"transparent"}})}try{V.displayName="Switch",V.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:{value:"34"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"18"},description:"",name:"height",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:{value:"true"},description:"如果 onChange 返回一个 Promise, 则自动添加 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"loading 结束后自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => any)"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"SwitchCssVars"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}}}catch{}export{V as S};
