import{j as p,a as e,l as s}from"./mini-scrollbar-CpYozGie.js";import"./index-BaOCVB8q.js";import{D as v}from"./dialog.portal-BEmBkwaz.js";import{H as N,C as z}from"./help-circle-DW_TYR9c.js";import{X as O}from"./x-circle-BdzjYyNm.js";import{a as T,A as q}from"./alert-triangle-DYG16pxB.js";import{B as n}from"./button-BW6W9uNl.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./index-DAQyP9AW.js";import"./popup-trigger-BB6D6FcK.js";import"./use-taomu-classname-C0XxHi0q.js";import"./index-BtTJd_qj.js";import"./index-zbzXvoZu.js";import"./popup.store-BdyN-U9w.js";import"./dialog-C4eKRClH.js";import"./index-CE9T9n2a.js";function y(o){switch(o){case"info":return e(q,{size:36,color:s("colorInfo")});case"warning":return e(T,{size:36,color:s("colorWarning")});case"success":return e(z,{size:36,color:s("colorSuccess")});case"error":return e(O,{size:36,color:s("colorError")});case"question":return e(N,{size:36,color:s("colorWarning")});default:return null}}function c(o,{type:r,title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(r);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...g});return f&&t.open(),t}function W(o,r){return c(o,{type:"info",...r})}function j(o,r){return c(o,{type:"warning",...r})}function A(o,r){return c(o,{type:"success",...r})}function D(o,r){return c(o,{type:"error",...r})}function i(o,{type:r="question",title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(r);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,noContentWrapper:!0,...g});return f&&t.open(),t}const U={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(n,{onClick:()=>c("hello",{title:"Title"}),children:"open"}),e(n,{onClick:()=>W("hello"),children:"info"}),e(n,{onClick:()=>A("hello"),children:"success"}),e(n,{onClick:()=>j("hello"),children:"warning"}),e(n,{onClick:()=>D("hello"),children:"error"})]})},u={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(n,{onClick:()=>i("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),e(n,{onClick:()=>i("hello",{type:"info"}),children:"info"}),e(n,{onClick:()=>i("hello",{type:"success"}),children:"success"}),e(n,{onClick:()=>i("hello",{type:"warning"}),children:"warning"}),e(n,{onClick:()=>i("hello",{type:"error"}),children:"error"})]})};var h,C,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var x,k,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Y=["基础示例","Confirm"];export{u as Confirm,Y as __namedExportsOrder,U as default,a as 基础示例};
