import{G as m,j as i,a as o,H as B,B as e,J as C,i as l,w as c,s as u,K as d,N as g,O as a}from"./iframe-Ci2SqJ0Y.js";const h={title:"Components/Toast",component:m,tags:["autodocs"],argTypes:{}},s={args:{}},n={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>B({message:"hello"}),children:"open"}),o(e,{onClick:()=>C(),children:"closeAll"})]})},t={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>l("info message"),children:"info"}),o(e,{onClick:()=>c("warning message"),children:"warning"}),o(e,{onClick:()=>u("success message"),children:"success"}),o(e,{onClick:()=>d("error message"),children:"error"}),o(e,{onClick:()=>g("error message"),children:"question"}),o(e,{onClick:()=>a("loading message"),children:"loading"}),o(e,{onClick:()=>a("可以通过设置 popupId: undefined 来禁用"),children:"loading 默认为单例"}),o(e,{onClick:()=>a("loading message",{popupId:void 0}),children:"loading 多例"})]})},r={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>l("info message",{showCloseButton:!0}),children:"info"}),o(e,{onClick:()=>c("warning message",{showCloseButton:!0}),children:"warning"}),o(e,{onClick:()=>u("success message",{showCloseButton:!0}),children:"success"}),o(e,{onClick:()=>d("error message",{showCloseButton:!0}),children:"error"}),o(e,{onClick:()=>g("error message",{showCloseButton:!0}),children:"question"}),o(e,{onClick:()=>a("loading message",{showCloseButton:!0}),children:"loading"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.openToast({
        message: 'hello'
      })}>open</Button>
        <Button onClick={() => toast.closeAll()}>closeAll</Button>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.info('info message')}>info</Button>
        <Button onClick={() => toast.warning('warning message')}>warning</Button>
        <Button onClick={() => toast.success('success message')}>success</Button>
        <Button onClick={() => toast.error('error message')}>error</Button>
        <Button onClick={() => toast.question('error message')}>question</Button>
        <Button onClick={() => toast.loading('loading message')}>loading</Button>
        <Button onClick={() => toast.loading('可以通过设置 popupId: undefined 来禁用')}>loading 默认为单例</Button>
        <Button onClick={() => toast.loading('loading message', {
        popupId: undefined
      })}>loading 多例</Button>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.info('info message', {
        showCloseButton: true
      })}>info</Button>
        <Button onClick={() => toast.warning('warning message', {
        showCloseButton: true
      })}>warning</Button>
        <Button onClick={() => toast.success('success message', {
        showCloseButton: true
      })}>success</Button>
        <Button onClick={() => toast.error('error message', {
        showCloseButton: true
      })}>error</Button>
        <Button onClick={() => toast.question('error message', {
        showCloseButton: true
      })}>question</Button>
        <Button onClick={() => toast.loading('loading message', {
        showCloseButton: true
      })}>loading</Button>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const k=["基础示例","函数打开","消息类型","显示关闭按钮"];export{k as __namedExportsOrder,h as default,n as 函数打开,s as 基础示例,r as 显示关闭按钮,t as 消息类型};
