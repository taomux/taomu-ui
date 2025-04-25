import{l as a,c as ue,j as N,a as r}from"./mini-scrollbar-CPC470y1.js";import{R as v}from"./index-D4lIrffr.js";import{u as le,a as ie,c as g}from"./use-taomu-classname-DBKvGVUz.js";import"./index-NSfGIA9G.js";import{g as B,a as ne,b as re}from"./conversion-DyjZL1Co.js";import{i as te}from"./global-vars-CoVtkCb5.js";import{X as oe}from"./x-BK-4WeVA.js";import{B as R}from"./button-BzRCPAUa.js";te("common",{dialogBackground:a("colorBackground"),dialogTextColor:a("colorTextDefault"),dialogWidth:480,dialogHeaderHeight:42,dialogRadius:a("radiusMD"),dialogPadding:16});const de=ue`
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
    cursor: pointer;

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
`,$=({children:h,className:w,cssVars:T,style:L,title:D,width:O,outerBorder:_=!0,splitBorder:A=!0,shadow:H=!0,stickyFrame:S,headerProps:c={},footer:W,footerAlign:j="right",footerProps:f={},beforeFooterNodes:y,afterFooterNodes:C,showOkButton:z=!0,okButtonText:G="确定",okButtonProps:t={},showCancelButton:M=!0,cancelButtonText:X="取消",cancelButtonProps:o={},showCloseIcon:V=!0,noContentWrapper:J,dialogPortalInstance:l,onOk:K,onCancel:Q,onClose:b,asyncCallback:k,...U})=>{const Y=le("dialog",re(H),B(_),{"show-close-icon":V,"sticky-frame":S},w),Z=ie({dialogWidth:O,...T},L),[d,q]=v.useState(!1),[s,x]=v.useState(!1);v.useEffect(()=>{E(!!(d||s))},[d,s]);function E(e){var u;(u=l==null?void 0:l.popupRef.current)!=null&&u.closeLockRef&&(l.popupRef.current.closeLockRef.current=e)}function n(e,u){!d&&!s&&E(!1),k==null||k(e,u),e!=="ok:error"&&(b==null||b())}function I(){var m,p;const e=((p=(m=l==null?void 0:l.asyncCallbackRef)==null?void 0:m.current)==null?void 0:p.onOk)||K;e||n("ok");const u=e==null?void 0:e();return u instanceof Promise?(q(!0),u.then(i=>(n("ok",i),i)).catch(i=>{n("ok:error",i)}).finally(()=>{q(!1)})):(n("ok"),u)}function P(){var m,p;const e=((p=(m=l==null?void 0:l.asyncCallbackRef)==null?void 0:m.current)==null?void 0:p.onCancel)||Q;e||n("cancel");const u=e==null?void 0:e();return u instanceof Promise?(x(!0),u.then(i=>(n("cancel",i),i)).catch(i=>(n("cancel",i),i)).finally(()=>{x(!1)})):(n("cancel"),u)}function ee(){return D?(c.className=g("dialog-header flex row center-v",B(A,"bottom",!0),c==null?void 0:c.className),N("div",{...c,children:[r("h2",{className:"dialog-title fs-16 text-ellipsis",children:D}),r("span",{className:"flex-1"}),F()]})):null}function F(){return V?r("span",{className:g("close-btn",{disabled:d||s}),onClick:()=>{n("close")},children:r(oe,{size:17})}):null}function ae(){if(W===!1)return null;f.className=g("dialog-footer flex row center-v gap-12",B(A,"top",!0),ne(j),f==null?void 0:f.className);const e=[];return y!=null&&y.length&&e.push(...y),M&&(o.className=g("cancel-btn",o==null?void 0:o.className),o.children||(o.children=X),e.push(r(R,{autoLoading:!1,loading:s,disabled:d,onClick:P,...o},"cancel"))),z&&(t.className=g("ok-btn",t==null?void 0:t.className),t.children||(t.children=G),e.push(r(R,{type:"primary",autoLoading:!1,loading:d,disabled:s,onClick:I,...t},"ok"))),C&&e.push(...C),e.length?r("div",{...f,children:e}):null}return N("div",{className:Y,style:Z,css:de,...U,children:[!D&&F(),ee(),J?h:r("div",{className:"dialog-content",children:h}),ae()]})};try{$.displayName="Dialog",$.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"对话框标题",name:"title",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"对话框宽度",name:"width",required:!1,type:{name:"string | number"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},splitBorder:{defaultValue:{value:"true"},description:"是否显示分割线",name:"splitBorder",required:!1,type:{name:"number | boolean"}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},stickyFrame:{defaultValue:null,description:"框架(title/footer)是否固定",name:"stickyFrame",required:!1,type:{name:"boolean"}},headerProps:{defaultValue:{value:"{}"},description:"header props",name:"headerProps",required:!1,type:{name:"any"}},footer:{defaultValue:null,description:"是否渲染 footer",name:"footer",required:!1,type:{name:"boolean"}},footerProps:{defaultValue:{value:"{}"},description:"footer props",name:"footerProps",required:!1,type:{name:"any"}},footerAlign:{defaultValue:{value:"right"},description:"footer 对齐方式(横向)",name:"footerAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},beforeFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"beforeFooterNodes",required:!1,type:{name:"ReactNode[]"}},afterFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"afterFooterNodes",required:!1,type:{name:"ReactNode[]"}},showOkButton:{defaultValue:{value:"true"},description:"展示确认按钮",name:"showOkButton",required:!1,type:{name:"boolean"}},okButtonText:{defaultValue:{value:"确定"},description:"确认按钮文案",name:"okButtonText",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:{value:"{}"},description:"确认按钮 props",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},showCancelButton:{defaultValue:{value:"true"},description:"展示取消按钮",name:"showCancelButton",required:!1,type:{name:"boolean"}},cancelButtonText:{defaultValue:{value:"取消"},description:"取消按钮文案",name:"cancelButtonText",required:!1,type:{name:"string"}},cancelButtonProps:{defaultValue:{value:"{}"},description:"取消按钮 props",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},showCloseIcon:{defaultValue:{value:"true"},description:"是否显示右上角关闭图标",name:"showCloseIcon",required:!1,type:{name:"boolean"}},noContentWrapper:{defaultValue:null,description:"无内容包裹层",name:"noContentWrapper",required:!1,type:{name:"boolean"}},dialogPortalInstance:{defaultValue:null,description:"",name:"dialogPortalInstance",required:!1,type:{name:"DialogPortal<any, any>"}},onOk:{defaultValue:null,description:"确认回调 (支持 Promise)",name:"onOk",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onCancel:{defaultValue:null,description:"取消回调 (支持 Promise)",name:"onCancel",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}},asyncCallback:{defaultValue:null,description:"异步回调",name:"asyncCallback",required:!1,type:{name:"DialogAsyncCallback"}}}}}catch{}export{$ as D};
