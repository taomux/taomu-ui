import{a as t,j as k}from"./mini-scrollbar-1dk_y2Qh.js";import"./index-CqGNJaoI.js";import{a as o}from"./popup-trigger-DHttIfv7.js";import{B as r}from"./button-DRv67Xl5.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./use-custom-event-BYXfsBOj.js";import"./popup.store-CZruyQcO.js";const _={title:"Components/Popup/PopupTrigger",component:o,tags:["autodocs"],argTypes:{}},i={render:()=>t("div",{children:t(o,{content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{children:"Hover Me"})})})},p={render:()=>t("div",{children:t(o,{trigger:"click",content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{onClick:()=>{console.log("Button click")},children:"Click Me"})})})},n={render:()=>t("div",{children:t(o,{trigger:"hover",debounceTime:300,content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{children:"Hover Me"})})})},c={args:{content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),portalOptions:{edgeOffset:8}},render:e=>k("div",{className:"flex gap-32 p-32 flex-wrap",children:[t(o,{...e,position:"left",children:t(r,{children:"Left"})}),t(o,{...e,position:"left-top",children:t(r,{children:"Left Top"})}),t(o,{...e,position:"left-center",children:t(r,{children:"Left Center"})}),t(o,{...e,position:"left-bottom",children:t(r,{children:"Left Bottom"})}),t(o,{...e,position:"right",children:t(r,{children:"Right"})}),t(o,{...e,position:"right-top",children:t(r,{children:"Right Top"})}),t(o,{...e,position:"right-center",children:t(r,{children:"Right Center"})}),t(o,{...e,position:"right-bottom",children:t(r,{children:"Right Bottom"})}),t(o,{...e,position:"top",children:t(r,{children:"Top"})}),t(o,{...e,position:"top-left",children:t(r,{children:"Top Left"})}),t(o,{...e,position:"top-center",children:t(r,{children:"Top Center"})}),t(o,{...e,position:"top-right",children:t(r,{children:"Top Right"})}),t(o,{...e,position:"bottom",children:t(r,{children:"Bottom"})}),t(o,{...e,position:"bottom-left",children:t(r,{children:"Bottom Left"})}),t(o,{...e,position:"bottom-center",children:t(r,{children:"Bottom Center"})}),t(o,{...e,position:"bottom-right",children:t(r,{children:"Bottom Right"})})]})};var g,d,s;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <PopupTrigger content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>;
  }
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,a,l;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <PopupTrigger trigger="click" content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button onClick={() => {
          console.log('Button click');
        }}>
            Click Me
          </Button>
        </PopupTrigger>
      </div>;
  }
}`,...(l=(a=p.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var h,m,T,B,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <PopupTrigger trigger="hover" debounceTime={300} content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>;
  }
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source},description:{story:'`trigger = "hover"` , 这是默认的\n\n通过 `debounceTime` 来设置防抖时间，默认 150，只在 hover 模式时生效',...(b=(B=n.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var P,f,v;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: () => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>,
    portalOptions: {
      edgeOffset: 8
    }
  },
  render: args => {
    return <div className="flex gap-32 p-32 flex-wrap">
        <PopupTrigger {...args} position="left">
          <Button>Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-top">
          <Button>Left Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-center">
          <Button>Left Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-bottom">
          <Button>Left Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right">
          <Button>Right</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-top">
          <Button>Right Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-center">
          <Button>Right Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-bottom">
          <Button>Right Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top">
          <Button>Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-left">
          <Button>Top Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-center">
          <Button>Top Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-right">
          <Button>Top Right</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom">
          <Button>Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-left">
          <Button>Bottom Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-center">
          <Button>Bottom Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-right">
          <Button>Bottom Right</Button>
        </PopupTrigger>
      </div>;
  }
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const E=["基础示例","Click","Hover及防抖","弹出位置"];export{p as Click,n as Hover及防抖,E as __namedExportsOrder,_ as default,i as 基础示例,c as 弹出位置};
