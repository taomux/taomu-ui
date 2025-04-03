import{j as i,a as o}from"./mini-scrollbar-1dk_y2Qh.js";import"./index-B4qrdscw.js";import{T,o as A,c as I,i as w,w as v,s as x,e as q,q as N,l as a}from"./index-Cd_610k-.js";import{B as e}from"./button-B9za9TDP.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./conversion-DyjZL1Co.js";import"./icon-CUwNImcR.js";import"./index-B2-v9W4q.js";import"./x-circle-B-v9SAgR.js";import"./alert-triangle-ess0TkFO.js";import"./alert-circle-ByI2Mpw3.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./use-custom-event-BYXfsBOj.js";import"./x-BK-4WeVA.js";import"./index-CfuAEkNK.js";import"./popup-trigger-GAT61Aah.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./global-style-CvBFrXCB.js";const Z={title:"Components/Toast",component:T,tags:["autodocs"],argTypes:{}},s={args:{}},t={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>A({message:"hello"}),children:"open"}),o(e,{onClick:()=>I(),children:"closeAll"})]})},n={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>w("info message"),children:"info"}),o(e,{onClick:()=>v("warning message"),children:"warning"}),o(e,{onClick:()=>x("success message"),children:"success"}),o(e,{onClick:()=>q("error message"),children:"error"}),o(e,{onClick:()=>N("error message"),children:"question"}),o(e,{onClick:()=>a("loading message"),children:"loading"}),o(e,{onClick:()=>a("可以通过设置 popupId: undefined 来禁用"),children:"loading 默认为单例"}),o(e,{onClick:()=>a("loading message",{popupId:void 0}),children:"loading 多例"})]})},r={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>w("info message",{showCloseButton:!0}),children:"info"}),o(e,{onClick:()=>v("warning message",{showCloseButton:!0}),children:"warning"}),o(e,{onClick:()=>x("success message",{showCloseButton:!0}),children:"success"}),o(e,{onClick:()=>q("error message",{showCloseButton:!0}),children:"error"}),o(e,{onClick:()=>N("error message",{showCloseButton:!0}),children:"question"}),o(e,{onClick:()=>a("loading message",{showCloseButton:!0}),children:"loading"})]})};var l,c,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.openToast({
        message: 'hello'
      })}>open</Button>
        <Button onClick={() => toast.closeAll()}>closeAll</Button>
      </div>;
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,B,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var h,k,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const $=["基础示例","函数打开","消息类型","显示关闭按钮"];export{$ as __namedExportsOrder,Z as default,t as 函数打开,s as 基础示例,r as 显示关闭按钮,n as 消息类型};
