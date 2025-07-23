import{X as h,j as u,a as e,B as r}from"./iframe-Ci2SqJ0Y.js";import{D as g}from"./dialog.portal-Dj7rE2k1.js";function c(n,{type:o,title:p=" ",icon:d,autoOpen:f=!0,...m}={}){const t=new g(()=>{const l=d||h(o);return u("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:n})]})},{title:p,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...m});return f&&t.open(),t}function B(n,o){return c(n,{type:"info",...o})}function C(n,o){return c(n,{type:"warning",...o})}function x(n,o){return c(n,{type:"success",...o})}function k(n,o){return c(n,{type:"error",...o})}function s(n,{type:o="question",title:p=" ",icon:d,autoOpen:f=!0,...m}={}){const t=new g(()=>{const l=d||h(o);return u("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:n})]})},{title:p,splitBorder:!1,noContentWrapper:!0,...m});return f&&t.open(),t}const y={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},i={render:()=>u("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>c("hello",{title:"Title"}),children:"open"}),e(r,{onClick:()=>B("hello"),children:"info"}),e(r,{onClick:()=>x("hello"),children:"success"}),e(r,{onClick:()=>C("hello"),children:"warning"}),e(r,{onClick:()=>k("hello"),children:"error"})]})},a={render:()=>u("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>s("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),e(r,{onClick:()=>s("hello",{type:"info"}),children:"info"}),e(r,{onClick:()=>s("hello",{type:"success"}),children:"success"}),e(r,{onClick:()=>s("hello",{type:"warning"}),children:"warning"}),e(r,{onClick:()=>s("hello",{type:"error"}),children:"error"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const N=["基础示例","Confirm"];export{a as Confirm,N as __namedExportsOrder,y as default,i as 基础示例};
