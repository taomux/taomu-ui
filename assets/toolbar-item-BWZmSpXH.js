import{l as t,c as p,m as T,a as o,e as x,j as N,F as V}from"./mini-scrollbar-1dk_y2Qh.js";import{u as I,a as _,c as q}from"./use-taomu-classname-Dqq3FQ7F.js";import"./index-D4lIrffr.js";import"./index-CfuAEkNK.js";import{s as O}from"./use-custom-event-BYXfsBOj.js";import{a as C}from"./popup-trigger-GAT61Aah.js";O("common",{toolbarBg:T("colorFrontRgb",.1)});const R=p`
  transition: ${t("commonTransition")};
  cursor: pointer;
  border-radius: ${t("radiusSM")};
  padding: 8px 12px;

  &:hover {
    background: ${t("toolbarBg")};
  }
`,S=p`
  --tooltipOffset: 4px;

  &.toolbar-tooltip-top {
    margin-bottom: var(--tooltipOffset);
  }

  &.toolbar-tooltip-bottom {
    margin-top: var(--tooltipOffset);
  }

  &.toolbar-tooltip-left {
    margin-right: var(--tooltipOffset);
  }

  &.toolbar-tooltip-right {
    margin-left: var(--tooltipOffset);
  }
`,m=({className:l,cssVars:c,style:f,children:a,label:r,icon:i,tooltip:n,tooltipTrigger:d="hover",tooltipPosition:s,tooltipOffset:v,...b})=>{const g=I("toolbar-item","flex col center",l),h=_(c,f);function y(){let e=null;return a?(e=a,e):(i&&(e=i),r&&(e=N(V,{children:[e,r]})),e)}const u=o("div",{className:g,style:h,css:R,...b,children:y()});return n?o(C,{trigger:d,position:s,content:()=>o("div",{css:S,className:q("bg-background p-8 shadow-md br-4 border rect-1",`toolbar-tooltip-${s}`),style:x({tooltipOffset:v}),children:n}),children:u}):u};try{m.displayName="ToolbarItem",m.__docgenInfo={description:"",displayName:"ToolbarItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},tooltipTrigger:{defaultValue:{value:"hover"},description:"",name:"tooltipTrigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},tooltipPosition:{defaultValue:null,description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"dialog-center"'}]}},tooltipOffset:{defaultValue:null,description:"",name:"tooltipOffset",required:!1,type:{name:"string | number"}}}}}catch{}export{m as T};
