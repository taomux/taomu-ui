import{t as o,a as t,B as r,j as g}from"./iframe-D6mQ9x1r.js";const s={title:"Components/Popup/PopupTrigger",component:o,tags:["autodocs"],argTypes:{}},i={render:()=>t("div",{children:t(o,{content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{children:"Hover Me"})})})},p={render:()=>t("div",{children:t(o,{trigger:"click",content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{onClick:()=>{console.log("Button click")},children:"Click Me"})})})},n={render:()=>t("div",{children:t(o,{trigger:"hover",debounceTime:300,content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),children:t(r,{children:"Hover Me"})})})},c={args:{content:()=>t("div",{className:"p-24 bg-background br-4 shadow-md border rect-1",children:"content"}),portalOptions:{edgeOffset:8}},render:e=>g("div",{className:"flex gap-32 p-32 flex-wrap",children:[t(o,{...e,position:"left",children:t(r,{children:"Left"})}),t(o,{...e,position:"left-top",children:t(r,{children:"Left Top"})}),t(o,{...e,position:"left-center",children:t(r,{children:"Left Center"})}),t(o,{...e,position:"left-bottom",children:t(r,{children:"Left Bottom"})}),t(o,{...e,position:"right",children:t(r,{children:"Right"})}),t(o,{...e,position:"right-top",children:t(r,{children:"Right Top"})}),t(o,{...e,position:"right-center",children:t(r,{children:"Right Center"})}),t(o,{...e,position:"right-bottom",children:t(r,{children:"Right Bottom"})}),t(o,{...e,position:"top",children:t(r,{children:"Top"})}),t(o,{...e,position:"top-left",children:t(r,{children:"Top Left"})}),t(o,{...e,position:"top-center",children:t(r,{children:"Top Center"})}),t(o,{...e,position:"top-right",children:t(r,{children:"Top Right"})}),t(o,{...e,position:"bottom",children:t(r,{children:"Bottom"})}),t(o,{...e,position:"bottom-left",children:t(r,{children:"Bottom Left"})}),t(o,{...e,position:"bottom-center",children:t(r,{children:"Bottom Center"})}),t(o,{...e,position:"bottom-right",children:t(r,{children:"Bottom Right"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <PopupTrigger content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <PopupTrigger trigger="hover" debounceTime={300} content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:'`trigger = "hover"` , 这是默认的\n\n通过 `debounceTime` 来设置防抖时间，默认 150，只在 hover 模式时生效',...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const u=["基础示例","Click","Hover及防抖","弹出位置"];export{p as Click,n as Hover及防抖,u as __namedExportsOrder,s as default,i as 基础示例,c as 弹出位置};
