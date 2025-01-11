import{j as p,a as o}from"./mini-scrollbar-CZ8eNCm3.js";import"./index-LoP-yWzs.js";import{r as w}from"./icon-DK4Ek3YN.js";import{D as v}from"./dialog.portal-DNSVncFT.js";import{B as r}from"./button-q8HGN2cW.js";import"./jsx-runtime-CLpGMVip.js";import"./index-CZMpeKRu.js";import"./help-circle-CUIW5fQg.js";import"./index-bPVxIqPX.js";import"./x-circle-CdlKYc8_.js";import"./alert-triangle-DUSJc6lc.js";import"./index-BzWh1BKN.js";import"./popup-trigger-DzyMuDii.js";import"./use-taomu-classname-CGrN28Ws.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-CUnKnXLJ.js";import"./global-vars-CQDXv0Fn.js";import"./popup.store-C2C6BHPT.js";import"./dialog-CuJfVslN.js";import"./conversion-C3YVphii.js";function s(e,{type:n,title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?o("div",{children:i}):null,o("div",{children:e})]})},{title:u,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...f});return d&&t.open(),t}function y(e,n){return s(e,{type:"info",...n})}function N(e,n){return s(e,{type:"warning",...n})}function O(e,n){return s(e,{type:"success",...n})}function T(e,n){return s(e,{type:"error",...n})}function l(e,{type:n="question",title:u=" ",icon:m,autoOpen:d=!0,...f}={}){const t=new v(()=>{const i=m||w(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[i?o("div",{children:i}):null,o("div",{children:e})]})},{title:u,splitBorder:!1,noContentWrapper:!0,...f});return d&&t.open(),t}const U={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},c={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[o(r,{onClick:()=>s("hello",{title:"Title"}),children:"open"}),o(r,{onClick:()=>y("hello"),children:"info"}),o(r,{onClick:()=>O("hello"),children:"success"}),o(r,{onClick:()=>N("hello"),children:"warning"}),o(r,{onClick:()=>T("hello"),children:"error"})]})},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[o(r,{onClick:()=>l("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),o(r,{onClick:()=>l("hello",{type:"info"}),children:"info"}),o(r,{onClick:()=>l("hello",{type:"success"}),children:"success"}),o(r,{onClick:()=>l("hello",{type:"warning"}),children:"warning"}),o(r,{onClick:()=>l("hello",{type:"error"}),children:"error"})]})};var h,g,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const V=["基础示例","Confirm"];export{a as Confirm,V as __namedExportsOrder,U as default,c as 基础示例};
