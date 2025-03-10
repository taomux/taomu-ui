import{l,c as I,a as u}from"./mini-scrollbar-BOcaVSbM.js";import{R as A}from"./index-2yJIXLcc.js";import{c as P}from"./conversion-DyjZL1Co.js";import{u as N,a as w}from"./use-taomu-classname-DiLeWjur.js";import{T as x}from"./toolbar-item-D2a9dppw.js";import{s as F}from"./use-custom-event-BLRByl6k.js";try{ToolbarItem.displayName="ToolbarItem",ToolbarItem.__docgenInfo={description:"",displayName:"ToolbarItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},tooltipTrigger:{defaultValue:{value:"hover"},description:"",name:"tooltipTrigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},tooltipPosition:{defaultValue:null,description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-left"'},{value:'"left-center"'},{value:'"left-right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"center-left"'},{value:'"center-center"'},{value:'"center-right"'},{value:'"center-bottom"'},{value:'"center-top"'},{value:'"right-left"'},{value:'"right-center"'},{value:'"right-right"'},{value:'"right-bottom"'},{value:'"right-top"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"bottom-bottom"'},{value:'"bottom-top"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"top-bottom"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},tooltipOffset:{defaultValue:null,description:"",name:"tooltipOffset",required:!1,type:{name:"string | number"}}}}}catch{}F("common",{toolbarWidth:68,toolbarPadding:0});const C=I`
  --toolbar-width: ${l("toolbarWidth")};

  box-sizing: border-box;
  padding: ${l("toolbarPadding")};

  &.toolbar-position-left,
  &.toolbar-position-right {
    top: 0;
    flex-direction: column;
    width: var(--toolbar-width);
    height: 100vh;
  }

  &.toolbar-position-top,
  &.toolbar-position-bottom {
    left: 0;
    flex-direction: row;
    height: ${l("toolbarWidth")};
    width: 100%;
  }

  &.toolbar-fixed {
    position: fixed;
    &.toolbar-position-left {
      left: 0;
    }
    &.toolbar-position-right {
      right: 0;
    }
    &.toolbar-position-top {
      top: 0;
    }
    &.toolbar-position-bottom {
      bottom: 0;
    }
  }
`,i=({className:e,cssVars:n,style:d,fixed:p,position:o="left",items:t,width:s,padding:m,bordered:f,shadow:c,defaultItemProps:b,...v})=>{const a=A.useMemo(()=>P(o),[o]),g=N("toolbar","flex gap-4",`toolbar-position-${o}`,{"toolbar-fixed":p,"shadow-md":c,[`border ${a}-1`]:f},e),h=w({toolbarWidth:s,toolbarPadding:m,...n},d);function y(){return t!=null&&t.length?t.map(({id:r,tooltipPosition:V,..._},q)=>{const T=r||q;return u(x,{id:r,...b,..._,tooltipPosition:V||a},T)}):null}return u("div",{className:g,style:h,css:C,...v,children:y()})};try{i.displayName="Toolbar",i.__docgenInfo={description:"",displayName:"Toolbar",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"ToolbarItemProps[]"}},defaultItemProps:{defaultValue:null,description:"",name:"defaultItemProps",required:!1,type:{name:"ToolbarItemProps"}},fixed:{defaultValue:null,description:"高度",name:"fixed",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"left"},description:"固定位置",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},width:{defaultValue:null,description:"宽度，如果横向，则为高度",name:"width",required:!1,type:{name:"string | number"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string | number"}}}}}catch{}try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"ToolbarItemProps[]"}},defaultItemProps:{defaultValue:null,description:"",name:"defaultItemProps",required:!1,type:{name:"ToolbarItemProps"}},fixed:{defaultValue:null,description:"高度",name:"fixed",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"left"},description:"固定位置",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},width:{defaultValue:null,description:"宽度，如果横向，则为高度",name:"width",required:!1,type:{name:"string | number"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string | number"}}}}}catch{}try{ToolbarItem.displayName="ToolbarItem",ToolbarItem.__docgenInfo={description:"",displayName:"ToolbarItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},tooltipTrigger:{defaultValue:{value:"hover"},description:"",name:"tooltipTrigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},tooltipPosition:{defaultValue:null,description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-left"'},{value:'"left-center"'},{value:'"left-right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"center-left"'},{value:'"center-center"'},{value:'"center-right"'},{value:'"center-bottom"'},{value:'"center-top"'},{value:'"right-left"'},{value:'"right-center"'},{value:'"right-right"'},{value:'"right-bottom"'},{value:'"right-top"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"bottom-bottom"'},{value:'"bottom-top"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"top-bottom"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},tooltipOffset:{defaultValue:null,description:"",name:"tooltipOffset",required:!1,type:{name:"string | number"}}}}}catch{}export{i as T};
