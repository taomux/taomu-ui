import{j as i,a as o}from"./mini-scrollbar-BOcaVSbM.js";import"./index-CqP_8i_5.js";import{T,o as A,c as I,i as w,w as v,s as x,e as q,q as N,l as a}from"./index-is3jJnQR.js";import{B as e}from"./button-D9i79FFi.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-2yJIXLcc.js";import"./use-taomu-classname-DiLeWjur.js";import"./conversion-DyjZL1Co.js";import"./icon-BaC7gGTd.js";import"./index-CBoMLUjc.js";import"./x-circle-ByKEyQve.js";import"./alert-triangle-CR2-JLum.js";import"./alert-circle-CWtc5a4z.js";import"./index-C7g-0pn2.js";import"./loading-BZmlYzgx.js";import"./use-custom-event-BLRByl6k.js";import"./index--JTMPUBq.js";import"./popup-trigger-DcMekOIW.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-z_ISaXHk.js";import"./popup.store-F3KXIqw7.js";import"./global-style-DreW4H67.js";const Y={title:"Components/Toast",component:T,tags:["autodocs"],argTypes:{}},s={args:{}},t={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>A({message:"hello"}),children:"open"}),o(e,{onClick:()=>I(),children:"closeAll"})]})},n={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>w("info message"),children:"info"}),o(e,{onClick:()=>v("warning message"),children:"warning"}),o(e,{onClick:()=>x("success message"),children:"success"}),o(e,{onClick:()=>q("error message"),children:"error"}),o(e,{onClick:()=>N("error message"),children:"question"}),o(e,{onClick:()=>a("loading message"),children:"loading"}),o(e,{onClick:()=>a("可以通过设置 popupId: undefined 来禁用"),children:"loading 默认为单例"}),o(e,{onClick:()=>a("loading message",{popupId:void 0}),children:"loading 多例"})]})},r={render:()=>i("div",{className:"flex gap-8",children:[o(e,{onClick:()=>w("info message",{showCloseButton:!0}),children:"info"}),o(e,{onClick:()=>v("warning message",{showCloseButton:!0}),children:"warning"}),o(e,{onClick:()=>x("success message",{showCloseButton:!0}),children:"success"}),o(e,{onClick:()=>q("error message",{showCloseButton:!0}),children:"error"}),o(e,{onClick:()=>N("error message",{showCloseButton:!0}),children:"question"}),o(e,{onClick:()=>a("loading message",{showCloseButton:!0}),children:"loading"})]})};var l,c,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-8">
        <Button onClick={() => toast.openToast({
        message: 'hello'
      })}>open</Button>
        <Button onClick={() => toast.closeAll()}>closeAll</Button>
      </div>;
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,B,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const Z=["基础示例","函数打开","消息类型","显示关闭按钮"];export{Z as __namedExportsOrder,Y as default,t as 函数打开,s as 基础示例,r as 显示关闭按钮,n as 消息类型};
