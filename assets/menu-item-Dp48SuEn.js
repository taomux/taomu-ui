import{s as D,l as a,c as X,m as v,a as u,j as Y}from"./mini-scrollbar-Bq2Cewqh.js";import{R as i}from"./index-l2PZgWEW.js";import{u as $,a as S,c as y}from"./use-taomu-classname-Bo7IX2bY.js";import{T as j}from"./index-zbzXvoZu.js";const L=i.createContext({}),l={duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"},O={options:l,enter:{keyframes:[{transform:"translate3d(0, -200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, 200%, 0)"}]}},G={options:l,enter:{keyframes:[{transform:"translate3d(0, 200%, 0)"},{transform:"translate3d(0, -50%, 0)"}]},leave:{keyframes:[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, -250%, 0)"}]}},H={options:l,enter:{keyframes:[{transform:"translate3d(-200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(200%, 0, 0)"}]}},J={options:l,enter:{keyframes:[{transform:"translate3d(200%, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}]},leave:{keyframes:[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(-250%, 0, 0)"}]}};function K(e,t,n){if(!(e===void 0||t===void 0))return e-t>0?n==="vertical"?G:J:n==="vertical"?O:H}D("common",{menuItemPaddingX:8,menuItemPaddingY:6,menuItemRadius:a("radiusSM")});const Q=X`
  padding: ${a("menuItemPaddingY")} ${a("menuItemPaddingX")};
  border-radius: ${a("menuItemRadius")};
  cursor: default;
  position: relative;
  overflow: hidden;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover:not(.disabled) {
    background: ${v("colorFrontRgb",.1)};
  }

  &.style-mode-default {
    &.active {
      background: ${v("colorPrimaryRgb",.75)};
      color: #fff;
    }
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .taomu-menu-item-active-block {
    --size: 3px;
    background-color: ${a("colorPrimary")};
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
`,g=e=>{const{children:t,className:n,style:A,cssVars:k,label:C,labelProps:o={},title:h,icon:E,active:r,disabled:c,visible:I=!0,divider:V,ellipsis:f,paddingX:F,paddingY:N,radius:q,styleMode:p="default",onClick:d,...B}=e,{prevIndex:M,currentIndex:m,direction:b}=i.useContext(L),P=$("menu-item","flex flex-none row center-v gap-4",`style-mode-${p}`,{active:r,disabled:c},n),w=S({menuItemPaddingX:F,menuItemPaddingY:N,menuItemRadius:q,...k},A),[x,T]=i.useState(r);if(!I)return null;if(V)return u("div",{className:"taomu-menu-item-divider border split bottom-1"});i.useEffect(()=>{setTimeout(()=>{T(r)},0)},[r]);function R(s){c||d==null||d(e,s)}function _(){const s=t||C;return s?(o.className=y("taomu-menu-item-label flex-1",{"text-ellipsis":f},o.className),u("div",{...o,title:f?h:void 0,children:s})):null}function z(){switch(p){case"windows":return u(j,{show:x,animationConfig:K(M,m==null?void 0:m[0],b),children:u("div",{className:y("taomu-menu-item-active-block",{horizontal:b==="horizontal"})})});default:return null}}return Y("div",{className:P,style:w,css:Q,...B,onClick:R,children:[z(),E,_()]})};try{g.displayName="MenuItem",g.__docgenInfo={description:"",displayName:"MenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}export{g as M,L as a};
