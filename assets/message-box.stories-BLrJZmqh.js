import{j as p,a as e,l as i}from"./mini-scrollbar-CovzJoiJ.js";import"./index-D2knjuM6.js";import{D as v}from"./dialog.portal-jUCKqHJx.js";import{H as N,C as z}from"./help-circle-0lmX3Uhn.js";import{X as O}from"./x-circle-ehOOJA42.js";import{a as T,A as q}from"./alert-triangle-Dv0IAcXG.js";import{B as n}from"./button-UU1IEuIw.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./index-Cc8o1g5Y.js";import"./popup-trigger-BNFacwHF.js";import"./use-taomu-classname-DM2_Z24H.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./global-style-emPCDtl7.js";import"./popup.store-DsFx4roX.js";import"./dialog-BVBZMW39.js";import"./index-Dw6WB_A6.js";function y(o){switch(o){case"info":return e(q,{size:36,color:i("colorInfo")});case"warning":return e(T,{size:36,color:i("colorWarning")});case"success":return e(z,{size:36,color:i("colorSuccess")});case"error":return e(O,{size:36,color:i("colorError")});case"question":return e(N,{size:36,color:i("colorWarning")});default:return null}}function c(o,{type:r,title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(r);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...g});return f&&t.open(),t}function W(o,r){return c(o,{type:"info",...r})}function j(o,r){return c(o,{type:"warning",...r})}function A(o,r){return c(o,{type:"success",...r})}function D(o,r){return c(o,{type:"error",...r})}function s(o,{type:r="question",title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(r);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,noContentWrapper:!0,...g});return f&&t.open(),t}const Y={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(n,{onClick:()=>c("hello",{title:"Title"}),children:"open"}),e(n,{onClick:()=>W("hello"),children:"info"}),e(n,{onClick:()=>A("hello"),children:"success"}),e(n,{onClick:()=>j("hello"),children:"warning"}),e(n,{onClick:()=>D("hello"),children:"error"})]})},u={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(n,{onClick:()=>s("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),e(n,{onClick:()=>s("hello",{type:"info"}),children:"info"}),e(n,{onClick:()=>s("hello",{type:"success"}),children:"success"}),e(n,{onClick:()=>s("hello",{type:"warning"}),children:"warning"}),e(n,{onClick:()=>s("hello",{type:"error"}),children:"error"})]})};var h,C,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Z=["基础示例","Confirm"];export{u as Confirm,Z as __namedExportsOrder,Y as default,a as 基础示例};
