import{j as p,a as o}from"./mini-scrollbar-1dk_y2Qh.js";import"./index-d97UjbBP.js";import{r as w}from"./icon-CUwNImcR.js";import{D as v}from"./dialog.portal-RvVp2rJl.js";import{B as r}from"./button-DlLFFbL_.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./index-B2-v9W4q.js";import"./x-circle-B-v9SAgR.js";import"./alert-triangle-ess0TkFO.js";import"./alert-circle-ByI2Mpw3.js";import"./index-CMKHHU4h.js";import"./popup-trigger-DHttIfv7.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./use-custom-event-BYXfsBOj.js";import"./popup.store-CZruyQcO.js";import"./dialog-DxknDVm6.js";import"./conversion-DyjZL1Co.js";import"./x-BK-4WeVA.js";function s(e,{type:n,title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?o("div",{children:i}):null,o("div",{children:e})]})},{title:u,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...f});return d&&t.open(),t}function y(e,n){return s(e,{type:"info",...n})}function N(e,n){return s(e,{type:"warning",...n})}function O(e,n){return s(e,{type:"success",...n})}function T(e,n){return s(e,{type:"error",...n})}function l(e,{type:n="question",title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?o("div",{children:i}):null,o("div",{children:e})]})},{title:u,splitBorder:!1,noContentWrapper:!0,...f});return d&&t.open(),t}const V={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},c={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[o(r,{onClick:()=>s("hello",{title:"Title"}),children:"open"}),o(r,{onClick:()=>y("hello"),children:"info"}),o(r,{onClick:()=>O("hello"),children:"success"}),o(r,{onClick:()=>N("hello"),children:"warning"}),o(r,{onClick:()=>T("hello"),children:"error"})]})},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[o(r,{onClick:()=>l("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),o(r,{onClick:()=>l("hello",{type:"info"}),children:"info"}),o(r,{onClick:()=>l("hello",{type:"success"}),children:"success"}),o(r,{onClick:()=>l("hello",{type:"warning"}),children:"warning"}),o(r,{onClick:()=>l("hello",{type:"error"}),children:"error"})]})};var h,g,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={() => messageBox.open('hello', {
        title: 'Title'
      })}>open</Button>
        <Button onClick={() => messageBox.info('hello')}>info</Button>
        <Button onClick={() => messageBox.success('hello')}>success</Button>
        <Button onClick={() => messageBox.warning('hello')}>warning</Button>
        <Button onClick={() => messageBox.error('hello')}>error</Button>
      </div>;
  }
}`,...(B=(g=c.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var C,x,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={() => messageBox.confirm('Question', {
        onOk: () => console.log('onOk'),
        onCancel: () => console.log('onCancel')
      })}>
          question
        </Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'info'
      })}>info</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'success'
      })}>success</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'warning'
      })}>warning</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'error'
      })}>error</Button>
      </div>;
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const X=["基础示例","Confirm"];export{a as Confirm,X as __namedExportsOrder,V as default,c as 基础示例};
