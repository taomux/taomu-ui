import{s as D,l as e,c as z,m as y,a as u,j as X}from"./mini-scrollbar-BUn1XUoF.js";import{R as i}from"./index-l2PZgWEW.js";import{u as Y,a as S,c as b}from"./use-taomu-classname-CPnLGqwq.js";import{T as j}from"./index-zbzXvoZu.js";const L=i.createContext({}),s={duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},O={options:s,enter:{keyframes:[{transform:"translate3d(0, -200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, 200%, 0)"}]}},G={options:s,enter:{keyframes:[{transform:"translate3d(0, 200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, -250%, 0)"}]}},H={options:s,enter:{keyframes:[{transform:"translate3d(-200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(200%, 0, 0)"}]}},K={options:s,enter:{keyframes:[{transform:"translate3d(200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(-250%, 0, 0)"}]}};function J(t,a,n){if(!(t===void 0||a===void 0))return t-a>0?n==="vertical"?G:K:n==="vertical"?O:H}D("common",{menuItemPaddingX:8,menuItemPaddingY:6,menuItemRadius:e("radiusSM")});const Q=z`
  padding: ${e("menuItemPaddingY")} ${e("menuItemPaddingX")};
  border-radius: ${e("menuItemRadius")};
  cursor: default;
  position: relative;
  overflow: hidden;
  color: ${e("colorTextDefault")};

  &:hover:not(.disabled) {
    background: ${y("colorFrontRgb",.1)};
    color: ${e("colorTextTitle")};
  }

  &.style-mode-default {
    &.active {
      background: ${y("colorPrimaryRgb",.75)};
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
`,g=t=>{const{children:a,className:n,style:A,cssVars:C,label:h,labelProps:o={},title:k,icon:I,active:r,disabled:c,visible:E=!0,divider:V,ellipsis:f,paddingX:F,paddingY:M,radius:N,styleMode:p="default",onClick:d,...q}=t,{prevIndex:B,currentIndex:m,direction:v}=i.useContext(L),T=Y("menu-item","flex flex-none row center-v gap-4",`style-mode-${p}`,{active:r,disabled:c},n),x=S({menuItemPaddingX:F,menuItemPaddingY:M,menuItemRadius:N,...C},A),[P,w]=i.useState(r);if(!E)return null;if(V)return u("div",{className:"taomu-menu-item-divider border split bottom-1"});i.useEffect(()=>{setTimeout(()=>{w(r)},0)},[r]);function R(l){c||d==null||d(t,l)}function _(){const l=a||h;return l?(o.className=b("taomu-menu-item-label flex-1",{"text-ellipsis":f},o.className),u("div",{...o,title:f?k:void 0,children:l})):null}function $(){switch(p){case"windows":return u(j,{show:P,animationConfig:J(B,m==null?void 0:m[0],v),children:u("div",{className:b("taomu-menu-item-active-block",{horizontal:v==="horizontal"})})});default:return null}}return X("div",{className:T,style:x,css:Q,...q,onClick:R,children:[$(),I,_()]})};try{g.displayName="MenuItem",g.__docgenInfo={description:"",displayName:"MenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"MenuItemKey"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}export{g as M,L as a};
