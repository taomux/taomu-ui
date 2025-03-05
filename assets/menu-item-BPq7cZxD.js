import{l as e,c as S,m as b,a as l,j as z}from"./mini-scrollbar-CZ8eNCm3.js";import{R as s}from"./index-CZMpeKRu.js";import{u as X,a as Y,c as v}from"./use-taomu-classname-CGrN28Ws.js";import{T as j}from"./index-CUnKnXLJ.js";import{i as G}from"./global-vars-CQDXv0Fn.js";const L=s.createContext({}),i={duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},O={options:i,enter:{keyframes:[{transform:"translate3d(0, -200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, 200%, 0)"}]}},H={options:i,enter:{keyframes:[{transform:"translate3d(0, 200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, -250%, 0)"}]}},K={options:i,enter:{keyframes:[{transform:"translate3d(-200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(200%, 0, 0)"}]}},J={options:i,enter:{keyframes:[{transform:"translate3d(200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(-250%, 0, 0)"}]}};function Q(a,t,n){if(!(a===void 0||t===void 0))return a-t>0?n==="vertical"?H:J:n==="vertical"?O:K}G("common",{menuItemPaddingX:8,menuItemPaddingY:6,menuItemRadius:e("radiusSM")});const U=S`
  padding: ${e("menuItemPaddingY")} ${e("menuItemPaddingX")};
  border-radius: ${e("menuItemRadius")};
  cursor: default;
  position: relative;
  overflow: hidden;
  color: ${e("colorTextDefault")};
  gap: ${e("menuItemGap")};
  transition: ${e("commonTransition")};

  &:hover:not(.disabled) {
    background: ${b("colorFrontRgb",.1)};
    color: ${e("colorTextTitle")};
  }

  &.style-mode-default {
    &.active {
      background: ${b("colorPrimaryRgb",.75)};
      color: #fff;
    }
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .taomu-menu-item-active-block {
    --size: 3px;
    background-color: ${e("colorPrimary")};
    position: absolute;
    width: var(--size);
    height: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;

    &.horizontal {
      transform: translateX(-50%);
      height: var(--size);
      width: 50%;
      left: 50%;
      top: 0;
      top: unset;
      bottom: 0;
    }
  }
`,g=a=>{const{children:t,className:n,style:V,cssVars:C,label:A,labelProps:o={},title:I,icon:h,active:u,disabled:c,visible:q=!0,divider:E,ellipsis:f,paddingX:k,paddingY:F,radius:N,gap:M=4,styleMode:p="default",onClick:d,meta:W,...P}=a,{prevIndex:T,currentIndex:m,direction:y}=s.useContext(L),B=X("menu-item","flex flex-none row center-v",`style-mode-${p}`,{active:u,disabled:c},n),x=Y({menuItemPaddingX:k,menuItemPaddingY:F,menuItemRadius:N,menuItemGap:M,...C},V),[D,w]=s.useState(u);if(!q)return null;if(E)return l("div",{className:"taomu-menu-item-divider border split bottom-1"});s.useEffect(()=>{setTimeout(()=>{w(u)},0)},[u]);function R(r){c||d==null||d(a,r)}function $(){const r=t||A;return r?(o.className=v("taomu-menu-item-label flex-1",{"text-ellipsis":f},o.className),l("div",{...o,title:f?I:void 0,children:r})):null}function _(){switch(p){case"windows":return l(j,{show:D,animationConfig:Q(T,m==null?void 0:m[0],y),children:l("div",{className:v("taomu-menu-item-active-block",{horizontal:y==="horizontal"})})});default:return null}}return z("div",{className:B,style:x,css:U,...P,onClick:R,children:[_(),h,$()]})};try{g.displayName="MenuItem",g.__docgenInfo={description:"",displayName:"MenuItem",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"MenuItemKey"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"ReactDivProps"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"间距",name:"gap",required:!1,type:{name:"string | number"}},meta:{defaultValue:null,description:"传递元数据",name:"meta",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"MenuItemCssVars"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{g as M,L as a};
