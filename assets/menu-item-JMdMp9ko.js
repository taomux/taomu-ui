import{l as e,m as y,c as z,a as l,j as X}from"./mini-scrollbar-1dk_y2Qh.js";import{R as i}from"./index-D4lIrffr.js";import{u as Y,a as S,c as b}from"./use-taomu-classname-Dqq3FQ7F.js";import{T as j}from"./index-BDZOM4eL.js";import{i as G}from"./use-custom-event-BYXfsBOj.js";const L=i.createContext({}),s={duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},O={options:s,enter:{keyframes:[{transform:"translate3d(0, -200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, 200%, 0)"}]}},H={options:s,enter:{keyframes:[{transform:"translate3d(0, 200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, -250%, 0)"}]}},K={options:s,enter:{keyframes:[{transform:"translate3d(-200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(200%, 0, 0)"}]}},J={options:s,enter:{keyframes:[{transform:"translate3d(200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(-250%, 0, 0)"}]}};function Q(a,t,n){if(!(a===void 0||t===void 0))return a-t>0?n==="vertical"?H:J:n==="vertical"?O:K}G("common",{menuItemPaddingX:8,menuItemPaddingY:6,menuItemRadius:e("radiusSM")});const U=z`
  padding: ${e("menuItemPaddingY")} ${e("menuItemPaddingX")};
  border-radius: ${e("menuItemRadius")};
  cursor: default;
  position: relative;
  overflow: hidden;
  color: ${e("colorTextDefault")};
  gap: ${e("menuItemGap")};
  transition: ${e("commonTransition")};

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
`,g=a=>{const{children:t,className:n,style:A,cssVars:I,label:C,labelProps:o={},title:h,icon:E,active:r,disabled:c,visible:V=!0,divider:k,ellipsis:f,paddingX:F,paddingY:q,radius:M,gap:N=4,styleMode:p="default",onClick:d,meta:W,...T}=a,{prevIndex:B,currentIndex:m,direction:v}=i.useContext(L),x=Y("menu-item","flex flex-none row center-v",`style-mode-${p}`,{active:r,disabled:c},n),P=S({menuItemPaddingX:F,menuItemPaddingY:q,menuItemRadius:M,menuItemGap:N,...I},A),[w,D]=i.useState(r);if(!V)return null;if(k)return l("div",{className:"taomu-menu-item-divider border split bottom-1"});i.useEffect(()=>{setTimeout(()=>{D(r)},0)},[r]);function R(u){c||d==null||d(a,u)}function $(){const u=t||C;return u?(o.className=b("taomu-menu-item-label flex-1",{"text-ellipsis":f},o.className),l("div",{...o,title:f?h:void 0,children:u})):null}function _(){switch(p){case"windows":return l(j,{show:w,animationConfig:Q(B,m==null?void 0:m[0],v),children:l("div",{className:b("taomu-menu-item-active-block",{horizontal:v==="horizontal"})})});default:return null}}return X("div",{className:x,style:P,css:U,...T,onClick:R,children:[_(),E,$()]})};try{g.displayName="MenuItem",g.__docgenInfo={description:"",displayName:"MenuItem",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"MenuItemKey"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"间距",name:"gap",required:!1,type:{name:"string | number"}},meta:{defaultValue:null,description:"传递元数据",name:"meta",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}export{g as M,L as a};
