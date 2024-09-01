import{a as r,j as N}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";import{u as k,a as M,c as x}from"./use-taomu-classname-BHBGss1S.js";import{s as R,l as e,c as _,m as s}from"./mini-scrollbar-DUVypj3v.js";import"./index-l2PZgWEW.js";R("common",{menuItemPaddingX:8,menuItemPaddingY:6,menuItemRadius:e("radiusSM")});const h=_`
  padding: ${e("menuItemPaddingY")} ${e("menuItemPaddingX")};
  border-radius: ${e("menuItemRadius")};
  cursor: default;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover:not(.disabled, .active) {
    background-color: ${s("colorFrontRgb",.1)};
  }

  &.active {
    background-color: ${s("colorPrimaryRgb",.15)};
    color: ${e("colorPrimary")};
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,d=a=>{const{children:o,className:m,style:c,cssVars:p,label:f,labelProps:l={},title:b,icon:g,active:y,disabled:i,visible:v=!0,divider:E,ellipsis:t,paddingX:I,paddingY:V,radius:F,onClick:n,...q}=a,A=k("menu-item","flex row center-v gap-4",{active:y,disabled:i},m),C=M({menuItemPaddingX:I,menuItemPaddingY:V,menuItemRadius:F,...p},c);if(!v)return null;if(E)return r("div",{className:"taomu-menu-item-divider border split bottom-1"});function P(u){i||n==null||n(a,u)}function B(){const u=o||f;return u?(l.className=x("taomu-menu-item-label flex-1",{"text-ellipsis":t},l.className),r("div",{...l,title:t?b:void 0,children:u})):null}return N("div",{className:A,style:C,css:h,...q,onClick:P,children:[g,B()]})};try{d.displayName="MenuItem",d.__docgenInfo={description:"",displayName:"MenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}export{d as M};
