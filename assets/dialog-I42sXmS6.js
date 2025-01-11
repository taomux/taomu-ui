import{l as a,c as ue,j as F,a as r}from"./mini-scrollbar-CZ8eNCm3.js";import{R as C}from"./index-CZMpeKRu.js";import{u as le,a as ie,c as g}from"./use-taomu-classname-CGrN28Ws.js";import"./index-B8IF1OLn.js";import{g as E,a as ne,X as re,b as te}from"./conversion-C3YVphii.js";import{i as oe}from"./global-vars-CQDXv0Fn.js";import{B as R}from"./button-CwsxCB5A.js";oe("common",{dialogBackground:a("colorBackground"),dialogTextColor:a("colorTextDefault"),dialogWidth:480,dialogHeaderHeight:42,dialogRadius:a("radiusMD"),dialogPadding:16});const se=ue`
  width: ${a("dialogWidth")};
  background: ${a("dialogBackground")};
  border-radius: ${a("dialogRadius")};
  position: relative;

  .dialog-header {
    height: ${a("dialogHeaderHeight")};
    padding: 0 ${a("dialogPadding")};
  }

  .close-btn {
    border-radius: 4px;
    position: absolute;
    z-index: 10;
    transition: ${a("commonTransition")};
    right: calc(${a("dialogPadding")} - 6px);
    padding: 3px;
    top: 9px;

    svg {
      display: block;
      stroke: ${a("colorTextGray")};
      transition: ${a("commonTransition")};
    }

    &:hover:not(.disabled) {
      background-color: ${a("btnBackgroundHover")};
      svg {
        stroke: ${a("colorTextDefault")};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .dialog-content {
    padding: ${a("dialogPadding")};
  }

  .dialog-footer {
    padding: 12px ${a("dialogPadding")};
  }

  &.sticky-frame {
    .dialog-header {
      position: sticky;
      top: 0;
      border-radius: ${a("dialogRadius")} ${a("dialogRadius")} 0 0;
      backdrop-filter: blur(20px);
    }
    .dialog-footer {
      position: sticky;
      bottom: 0;
      border-radius: 0 0 ${a("dialogRadius")} ${a("dialogRadius")};
      backdrop-filter: blur(20px);
    }
  }

  &.show-close-icon {
    .dialog-title {
      padding-right: 22px;
    }
  }
`,$=({children:h,className:w,cssVars:T,style:L,title:D,width:S,outerBorder:O=!0,splitBorder:V=!0,shadow:_=!0,stickyFrame:H,headerProps:c={},footer:W,footerAlign:j="right",footerProps:f={},beforeFooterNodes:y,afterFooterNodes:B,showOkButton:z=!0,okButtonText:G="确定",okButtonProps:t={},showCancelButton:M=!0,cancelButtonText:X="取消",cancelButtonProps:o={},showCloseIcon:A=!0,noContentWrapper:J,dialogPortalInstance:l,onOk:K,onCancel:Q,onClose:k,asyncCallback:b,...U})=>{const Y=le("dialog",ne(_),E(O),{"show-close-icon":A,"sticky-frame":H},w),Z=ie({dialogWidth:S,...T},L),[s,q]=C.useState(!1),[d,x]=C.useState(!1);C.useEffect(()=>{v(!!(s||d))},[s,d]);function v(e){var u;(u=l==null?void 0:l.popupRef.current)!=null&&u.closeLockRef&&(l.popupRef.current.closeLockRef.current=e)}function n(e,u){!s&&!d&&v(!1),b==null||b(e,u),e!=="ok:error"&&(k==null||k())}function I(){var m,p;const e=((p=(m=l==null?void 0:l.asyncCallbackRef)==null?void 0:m.current)==null?void 0:p.onOk)||K;e||n("ok");const u=e==null?void 0:e();return u instanceof Promise?(q(!0),u.then(i=>(n("ok",i),i)).catch(i=>{n("ok:error",i)}).finally(()=>{q(!1)})):(n("ok"),u)}function P(){var m,p;const e=((p=(m=l==null?void 0:l.asyncCallbackRef)==null?void 0:m.current)==null?void 0:p.onCancel)||Q;e||n("cancel");const u=e==null?void 0:e();return u instanceof Promise?(x(!0),u.then(i=>(n("cancel",i),i)).catch(i=>(n("cancel",i),i)).finally(()=>{x(!1)})):(n("cancel"),u)}function ee(){return D?(c.className=g("dialog-header flex row center-v",E(V,"bottom",!0),c==null?void 0:c.className),F("div",{...c,children:[r("h2",{className:"dialog-title fs-16 text-ellipsis",children:D}),r("span",{className:"flex-1"}),N()]})):null}function N(){return A?r("span",{className:g("close-btn",{disabled:s||d}),onClick:()=>{n("close")},children:r(re,{size:17})}):null}function ae(){if(W===!1)return null;f.className=g("dialog-footer flex row center-v gap-12",E(V,"top",!0),te(j),f==null?void 0:f.className);const e=[];return y!=null&&y.length&&e.push(...y),M&&(o.className=g("cancel-btn",o==null?void 0:o.className),o.children||(o.children=X),e.push(r(R,{autoLoading:!1,loading:d,disabled:s,onClick:P,...o},"cancel"))),z&&(t.className=g("ok-btn",t==null?void 0:t.className),t.children||(t.children=G),e.push(r(R,{type:"primary",autoLoading:!1,loading:s,disabled:d,onClick:I,...t},"ok"))),B&&e.push(...B),e.length?r("div",{...f,children:e}):null}return F("div",{className:Y,style:Z,css:se,...U,children:[!D&&N(),ee(),J?h:r("div",{className:"dialog-content",children:h}),ae()]})};try{$.displayName="Dialog",$.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"对话框标题",name:"title",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"对话框宽度",name:"width",required:!1,type:{name:"string | number"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},splitBorder:{defaultValue:{value:"true"},description:"是否显示分割线",name:"splitBorder",required:!1,type:{name:"number | boolean"}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"boolean | BaseSizeLevel"}},stickyFrame:{defaultValue:null,description:"框架(title/footer)是否固定",name:"stickyFrame",required:!1,type:{name:"boolean"}},headerProps:{defaultValue:{value:"{}"},description:"header props",name:"headerProps",required:!1,type:{name:"ReactDivProps"}},footer:{defaultValue:null,description:"是否渲染 footer",name:"footer",required:!1,type:{name:"boolean"}},footerProps:{defaultValue:{value:"{}"},description:"footer props",name:"footerProps",required:!1,type:{name:"ReactDivProps"}},footerAlign:{defaultValue:{value:"right"},description:"footer 对齐方式(横向)",name:"footerAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},beforeFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"beforeFooterNodes",required:!1,type:{name:"ReactNode[]"}},afterFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"afterFooterNodes",required:!1,type:{name:"ReactNode[]"}},showOkButton:{defaultValue:{value:"true"},description:"展示确认按钮",name:"showOkButton",required:!1,type:{name:"boolean"}},okButtonText:{defaultValue:{value:"确定"},description:"确认按钮文案",name:"okButtonText",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:{value:"{}"},description:"确认按钮 props",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},showCancelButton:{defaultValue:{value:"true"},description:"展示取消按钮",name:"showCancelButton",required:!1,type:{name:"boolean"}},cancelButtonText:{defaultValue:{value:"取消"},description:"取消按钮文案",name:"cancelButtonText",required:!1,type:{name:"string"}},cancelButtonProps:{defaultValue:{value:"{}"},description:"取消按钮 props",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},showCloseIcon:{defaultValue:{value:"true"},description:"是否显示右上角关闭图标",name:"showCloseIcon",required:!1,type:{name:"boolean"}},noContentWrapper:{defaultValue:null,description:"无内容包裹层",name:"noContentWrapper",required:!1,type:{name:"boolean"}},dialogPortalInstance:{defaultValue:null,description:"",name:"dialogPortalInstance",required:!1,type:{name:"DialogPortal<DialogComponentProps, any>"}},onOk:{defaultValue:null,description:"确认回调 (支持 Promise)",name:"onOk",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onCancel:{defaultValue:null,description:"取消回调 (支持 Promise)",name:"onCancel",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}},asyncCallback:{defaultValue:null,description:"异步回调",name:"asyncCallback",required:!1,type:{name:"DialogAsyncCallback"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"DialogCssVars"}}}}}catch{}export{$ as D};
