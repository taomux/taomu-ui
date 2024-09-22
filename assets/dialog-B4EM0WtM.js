import{s as ne,l as u,c as ie,j as _,a as f}from"./mini-scrollbar-BFxqz1iK.js";import{r as le,R as h}from"./index-l2PZgWEW.js";import{u as oe,a as se,c as B}from"./use-taomu-classname-XwI4-eYN.js";import"./index-D2_3dmVz.js";import{P as A}from"./index-CE9T9n2a.js";import{B as W}from"./button-D6cjTgMG.js";function N(){return N=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},N.apply(this,arguments)}function de(e,i){if(e==null)return{};var n=ce(e,i),t,r;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function ce(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,l;for(l=0;l<t.length;l++)r=t[l],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var F=le.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,l=r===void 0?24:r,v=de(e,["color","size"]);return h.createElement("svg",N({ref:i,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v),h.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});F.propTypes={color:A.string,size:A.oneOfType([A.string,A.number])};F.displayName="X";ne("common",{dialogBackground:u("colorBackground"),dialogTextColor:u("colorTextDefault"),dialogWidth:480,dialogHeaderHeight:42,dialogRadius:u("radiusMD"),dialogPadding:16});const fe=ie`
  width: ${u("dialogWidth")};
  background: ${u("dialogBackground")};
  border-radius: ${u("dialogRadius")};
  position: relative;

  .dialog-header {
    height: ${u("dialogHeaderHeight")};
    padding: 0 ${u("dialogPadding")};
  }

  .close-btn {
    border-radius: 4px;
    position: absolute;
    z-index: 10;
    transition: ${u("commonTransition")};
    right: calc(${u("dialogPadding")} - 6px);
    padding: 3px;
    top: 9px;

    svg {
      display: block;
      stroke: ${u("colorTextGray")};
      transition: ${u("commonTransition")};
    }

    &:hover:not(.disabled) {
      background-color: ${u("btnBackgroundHover")};
      svg {
        stroke: ${u("colorTextDefault")};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .dialog-content {
    padding: ${u("dialogPadding")};
  }

  .dialog-footer {
    padding: 12px ${u("dialogPadding")};
  }

  &.sticky-frame {
    .dialog-header {
      position: sticky;
      top: 0;
      background-color: inherit;
      border-radius: ${u("dialogRadius")} ${u("dialogRadius")} 0 0;
    }
    .dialog-footer {
      position: sticky;
      bottom: 0;
      background-color: inherit;
      border-radius: 0 0 ${u("dialogRadius")} ${u("dialogRadius")};
    }
  }

  &.show-close-icon {
    .dialog-title {
      padding-right: 22px;
    }
  }
`;function pe(e){return e===!0?"shadow-md":typeof e=="string"?`shadow-${e}`:null}function q(e,i,n,t){if(!e)return null;let r="border";const l=i||"rect",v=typeof e=="number"?e:1;return n&&(r+=" split"),r+` ${l}-${v}`}function me(e){switch(e){case"center":return"center-h";case"right":return"end-h";case"left":default:return null}}const z=({children:e,className:i,cssVars:n,style:t,title:r,width:l,outerBorder:v=!0,splitBorder:$=!0,shadow:H=!0,stickyFrame:S,headerProps:b={},footer:G,footerAlign:X="right",footerProps:k={},beforeFooterNodes:x,afterFooterNodes:O,showOkButton:M=!0,okButtonText:J="确定",okButtonProps:p={},showCancelButton:K=!0,cancelButtonText:Q="取消",cancelButtonProps:m={},showCloseIcon:R=!0,noContentWrapper:U,dialogPortalInstance:s,onOk:Y,onCancel:Z,onClose:C,asyncCallback:w,...I})=>{const P=oe("dialog",pe(H),q(v),{"show-close-icon":R,"sticky-frame":S},i),ee=se({dialogWidth:l,...n},t),[g,T]=h.useState(!1),[y,j]=h.useState(!1);h.useEffect(()=>{V(!!(g||y))},[g,y]);function V(a){var o;(o=s==null?void 0:s.popupRef.current)!=null&&o.closeLockRef&&(s.popupRef.current.closeLockRef.current=a)}function c(a,o){!g&&!y&&V(!1),w==null||w(a,o),a!=="ok:error"&&(C==null||C())}function ae(){var D,E;const a=((E=(D=s==null?void 0:s.asyncCallbackRef)==null?void 0:D.current)==null?void 0:E.onOk)||Y;a||c("ok");const o=a==null?void 0:a();return o instanceof Promise?(T(!0),o.then(d=>(c("ok",d),d)).catch(d=>{c("ok:error",d)}).finally(()=>{T(!1)})):(c("ok"),o)}function ue(){var D,E;const a=((E=(D=s==null?void 0:s.asyncCallbackRef)==null?void 0:D.current)==null?void 0:E.onCancel)||Z;a||c("cancel");const o=a==null?void 0:a();return o instanceof Promise?(j(!0),o.then(d=>(c("cancel",d),d)).catch(d=>(c("cancel",d),d)).finally(()=>{j(!1)})):(c("cancel"),o)}function re(){return r?(b.className=B("dialog-header flex row center-v",q($,"bottom",!0),b==null?void 0:b.className),_("div",{...b,children:[f("h2",{className:"dialog-title fs-16 text-ellipsis",children:r}),f("span",{className:"flex-1"}),L()]})):null}function L(){return R?f("span",{className:B("close-btn",{disabled:g||y}),onClick:()=>{c("close")},children:f(F,{size:17})}):null}function te(){if(G===!1)return null;k.className=B("dialog-footer flex row center-v gap-12",q($,"top",!0),me(X),k==null?void 0:k.className);const a=[];return x!=null&&x.length&&a.push(...x),K&&(m.className=B("cancel-btn",m==null?void 0:m.className),m.children||(m.children=Q),a.push(f(W,{autoLoading:!1,loading:y,disabled:g,onClick:ue,...m},"cancel"))),M&&(p.className=B("ok-btn",p==null?void 0:p.className),p.children||(p.children=J),a.push(f(W,{type:"primary",autoLoading:!1,loading:g,disabled:y,onClick:ae,...p},"ok"))),O&&a.push(...O),a.length?f("div",{...k,children:a}):null}return _("div",{className:P,style:ee,css:fe,...I,children:[!r&&L(),re(),U?e:f("div",{className:"dialog-content",children:e}),te()]})};try{z.displayName="Dialog",z.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"对话框标题",name:"title",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"对话框宽度",name:"width",required:!1,type:{name:"string | number"}},outerBorder:{defaultValue:{value:"true"},description:"外边框",name:"outerBorder",required:!1,type:{name:"number | boolean"}},splitBorder:{defaultValue:{value:"true"},description:"是否显示分割线",name:"splitBorder",required:!1,type:{name:"number | boolean"}},shadow:{defaultValue:{value:"true"},description:"阴影",name:"shadow",required:!1,type:{name:"any"}},stickyFrame:{defaultValue:null,description:"框架(title/footer)是否固定",name:"stickyFrame",required:!1,type:{name:"boolean"}},headerProps:{defaultValue:{value:"{}"},description:"header props",name:"headerProps",required:!1,type:{name:"any"}},footer:{defaultValue:null,description:"是否渲染 footer",name:"footer",required:!1,type:{name:"boolean"}},footerProps:{defaultValue:{value:"{}"},description:"footer props",name:"footerProps",required:!1,type:{name:"any"}},footerAlign:{defaultValue:{value:"right"},description:"footer 对齐方式(横向)",name:"footerAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},beforeFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"beforeFooterNodes",required:!1,type:{name:"ReactNode[]"}},afterFooterNodes:{defaultValue:null,description:"底部添加额外自定义元素",name:"afterFooterNodes",required:!1,type:{name:"ReactNode[]"}},showOkButton:{defaultValue:{value:"true"},description:"展示确认按钮",name:"showOkButton",required:!1,type:{name:"boolean"}},okButtonText:{defaultValue:{value:"确定"},description:"确认按钮文案",name:"okButtonText",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:{value:"{}"},description:"确认按钮 props",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},showCancelButton:{defaultValue:{value:"true"},description:"展示取消按钮",name:"showCancelButton",required:!1,type:{name:"boolean"}},cancelButtonText:{defaultValue:{value:"取消"},description:"取消按钮文案",name:"cancelButtonText",required:!1,type:{name:"string"}},cancelButtonProps:{defaultValue:{value:"{}"},description:"取消按钮 props",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},showCloseIcon:{defaultValue:{value:"true"},description:"是否显示右上角关闭图标",name:"showCloseIcon",required:!1,type:{name:"boolean"}},noContentWrapper:{defaultValue:null,description:"无内容包裹层",name:"noContentWrapper",required:!1,type:{name:"boolean"}},dialogPortalInstance:{defaultValue:null,description:"",name:"dialogPortalInstance",required:!1,type:{name:"DialogPortal<DialogComponentProps, any>"}},onOk:{defaultValue:null,description:"确认回调 (支持 Promise)",name:"onOk",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onCancel:{defaultValue:null,description:"取消回调 (支持 Promise)",name:"onCancel",required:!1,type:{name:"((res?: any) => void | Promise<any>)"}},onClose:{defaultValue:null,description:"关闭回调",name:"onClose",required:!1,type:{name:"(() => void)"}},asyncCallback:{defaultValue:null,description:"异步回调",name:"asyncCallback",required:!1,type:{name:"DialogAsyncCallback"}}}}}catch{}export{z as D,F as X};
