import{j as p,a as e}from"./mini-scrollbar-CZ8eNCm3.js";import"./index-CMVlnm8_.js";import{r as w}from"./icon-tBO1rD-p.js";import{D as v}from"./dialog.portal-Q12hy1rS.js";import{B as r}from"./button-3JF325eH.js";import"./jsx-runtime-CLpGMVip.js";import"./index-CZMpeKRu.js";import"./index-bPVxIqPX.js";import"./x-circle-CdlKYc8_.js";import"./alert-triangle-DUSJc6lc.js";import"./index-RNVBsLn4.js";import"./popup-trigger-BkAvKTYJ.js";import"./use-taomu-classname-CGrN28Ws.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-CUnKnXLJ.js";import"./global-vars-CQDXv0Fn.js";import"./popup.store-C2C6BHPT.js";import"./dialog-ruDuZsTD.js";function s(o,{type:n,title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?e("div",{children:i}):null,e("div",{children:o})]})},{title:u,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...f});return d&&t.open(),t}function y(o,n){return s(o,{type:"info",...n})}function N(o,n){return s(o,{type:"warning",...n})}function O(o,n){return s(o,{type:"success",...n})}function T(o,n){return s(o,{type:"error",...n})}function l(o,{type:n="question",title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?e("div",{children:i}):null,e("div",{children:o})]})},{title:u,splitBorder:!1,noContentWrapper:!0,...f});return d&&t.open(),t}const M={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},c={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>s("hello",{title:"Title"}),children:"open"}),e(r,{onClick:()=>y("hello"),children:"info"}),e(r,{onClick:()=>O("hello"),children:"success"}),e(r,{onClick:()=>N("hello"),children:"warning"}),e(r,{onClick:()=>T("hello"),children:"error"})]})},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>l("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),e(r,{onClick:()=>l("hello",{type:"info"}),children:"info"}),e(r,{onClick:()=>l("hello",{type:"success"}),children:"success"}),e(r,{onClick:()=>l("hello",{type:"warning"}),children:"warning"}),e(r,{onClick:()=>l("hello",{type:"error"}),children:"error"})]})};var h,g,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const R=["基础示例","Confirm"];export{a as Confirm,R as __namedExportsOrder,M as default,c as 基础示例};
