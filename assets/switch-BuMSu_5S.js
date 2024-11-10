import{l as e,d as w,c as B,p as P,a as c,K as A}from"./mini-scrollbar-mYdyJkLe.js";import{R as i}from"./index-DRjF_FHU.js";import{u as N,c as H,a as M}from"./use-taomu-classname-CJDXS2sd.js";import"./index-Dipmk4as.js";import{s as _}from"./global-style-BA4-Iv3r.js";import{L as O}from"./loading-CVXqBEeO.js";_("common",{switchColor:e("colorPrimary"),switchWidth:34,switchHeight:18,switchRadius:e("radiusSM"),switchBorderColor:e("colorBorder"),switchOutlineColor:w("colorPrimaryRgb",.3),switchBoxBackground:w("colorFrontRgb",.1)});_("light",{switchDefaultColor:"#fff",switchBorderColor:"transparent"});_("dark",{switchDefaultColor:w("colorFrontRgb",.6)});const W=B`
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
      background-color: ${w("colorFrontRgb",.2)};
    }
  }

  &.is-loading {
    cursor: progress;
    &:not(.active) {
      ${P("loadingColor",`color-mix(in srgb, ${e("switchColor")}, #fff 65%)`)};
    }
  }
`,q=i.forwardRef(({label:t,children:u,className:a,cssVars:l,value:f,disabled:g,onChange:y,switchProps:d={},beforeText:x,...v},C)=>{const p=i.useRef(null),h=N("switch-text flex gap-8",a);i.useImperativeHandle(C,()=>p.current),d.className=H("switch-text-switch flex-none",d.className);const o=[c(b,{ref:p,cssVars:l,disabled:g,value:f,onChange:y,...d},"switch")],n=t||u;return x?o.unshift(n):o.push(n),c("div",{className:h,...v,children:o})});try{q.displayName="SwitchText",q.__docgenInfo={description:"",displayName:"SwitchText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => any)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},switchProps:{defaultValue:{value:"{}"},description:"",name:"switchProps",required:!1,type:{name:"Partial<SwitchProps>"}},beforeText:{defaultValue:null,description:"",name:"beforeText",required:!1,type:{name:"boolean"}}}}}catch{}try{SwitchText.displayName="SwitchText",SwitchText.__docgenInfo={description:"",displayName:"SwitchText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => any)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},switchProps:{defaultValue:{value:"{}"},description:"",name:"switchProps",required:!1,type:{name:"Partial<SwitchProps>"}},beforeText:{defaultValue:null,description:"",name:"beforeText",required:!1,type:{name:"boolean"}}}}}catch{}const b=i.forwardRef(({className:t,cssVars:u,style:a,width:l=34,height:f=18,radius:g,color:y,disabled:d,loading:x,showOutline:v=!0,autoLoading:C=!0,autoFocus:p=!0,name:h,value:o,onChange:n,...$},k)=>{const s=i.useRef(null),[D,S]=i.useState(!1),V=x||D;let T=d||V;const I=N("switch",{disabled:T,active:o,"show-outline":v,"is-loading":V},t),L=M({switchColor:y,switchWidth:l,switchHeight:f,switchRadius:g,...u},a);i.useImperativeHandle(k,()=>s.current),i.useEffect(()=>{var r;(r=s.current)!=null&&r.target&&(s.current.target.name=h)},[h,s.current]);function F(r){if(T){r.preventDefault();return}r.target.checked=!o,r.target.value=r.target.checked;const R=n==null?void 0:n(r,!o);C&&A(R)&&(S(!0),R.finally(()=>{S(!1),p&&setTimeout(()=>{var m,E;(E=(m=s.current)==null?void 0:m.focus)==null||E.call(m)},0)}))}return c("div",{className:I,style:L,css:W,...$,tabIndex:0,onClick:F,children:c("div",{ref:s,className:"switch-thumb flex center",children:V?K(l,f):null})})});b.Text=q;function K(t,u){let a=Math.min(t*.45,u)-12,l=2;return a<6?a=6:a>32&&(a=32),a>15?l=3:a>30&&(l=4),c(O,{size:a,weight:l,cssVars:{loadingTrackColor:"transparent"}})}try{b.displayName="Switch",b.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:null,description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:null,description:"如果 onChange 返回一个 Promise, 则自动添加 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"loading 结束后自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => any)"}}}}}catch{}export{q as S,b as a};
