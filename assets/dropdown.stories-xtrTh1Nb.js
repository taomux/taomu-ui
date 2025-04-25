import{a as o,j as l}from"./mini-scrollbar-CPC470y1.js";import{D as t}from"./dropdown-D8iQSey3.js";import"./index-NSfGIA9G.js";import{B as e}from"./button-BzRCPAUa.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./index-B_0C_U-u.js";import"./popup-trigger-CpvpAY-N.js";import"./use-taomu-classname-DBKvGVUz.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-vYJU6RZc.js";import"./global-vars-CoVtkCb5.js";import"./popup.store-D6eLbj-g.js";import"./index-B9JZMv8D.js";import"./empty-CaYBi6fm.js";import"./index-B2-v9W4q.js";import"./menu-item-DQBSkhrQ.js";const Y={title:"Components/Dropdown",component:t,tags:["autodocs"],argTypes:{}},n=[{label:"菜单1",onClick:()=>{alert(1)}},{label:"菜单2"},{label:"菜单-禁用",disabled:!0},{label:"菜单3"}],p={args:{menus:n,children:o(e,{children:"下拉菜单"})}},d={args:{equalWidth:"equal",menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],children:o(e,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})}},a={args:{equalWidth:"max-width",children:o(e,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:r,...i})=>l("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i})]})},m={args:{equalWidth:"min-width",children:o(e,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:r,...i})=>l("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i}),o("div",{className:"flex-1"}),o(t,{...i,position:"bottom-right",menuProps:{items:n},...i})]})},c={args:{trigger:"hover",menuProps:{items:n}},render:({...r})=>l("div",{className:"flex gap-12 center-v",children:[o(t,{...r,children:o(e,{children:"Hover Me"})}),o(t,{...r,children:o("a",{href:"##",children:"Hover Me"})})]})},s={args:{trigger:"hover",position:"right-center",menuProps:{items:n}},render:r=>l("div",{className:"flex rpw gap-12 flex-wrap p-48 mb-48",children:[o(t,{...r,position:"top",children:o(e,{children:"Top"})}),o(t,{...r,position:"top-center",children:o(e,{children:"TopCenter"})}),o(t,{...r,position:"top-left",children:o(e,{children:"TopLeft"})}),o(t,{...r,position:"top-right",children:o(e,{children:"TopRight"})}),o(t,{...r,position:"bottom",children:o(e,{children:"Bottom"})}),o(t,{...r,position:"bottom-center",children:o(e,{children:"BottomCenter"})}),o(t,{...r,position:"bottom-left",children:o(e,{children:"BottomLeft"})}),o(t,{...r,position:"bottom-right",children:o(e,{children:"BottomRight"})}),o(t,{...r,position:"left",children:o(e,{children:"Left"})}),o(t,{...r,position:"left-center",children:o(e,{children:"LeftCenter"})}),o(t,{...r,position:"left-top",children:o(e,{children:"LeftTop"})}),o(t,{...r,position:"left-bottom",children:o(e,{children:"LeftBottom"})}),o(t,{...r,position:"right",children:o(e,{children:"Right"})}),o(t,{...r,position:"right-center",children:o(e,{children:"RightCenter"})}),o(t,{...r,position:"right-top",children:o(e,{children:"RightTop"})}),o(t,{...r,position:"right-bottom",children:o(e,{children:"RightBottom"})})]})};var u,h,g;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    menus: menuConfig,
    children: <Button>下拉菜单</Button>
  }
}`,...(g=(h=p.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var B,f,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    equalWidth: 'equal',
    menus: [...menuConfig, {
      label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4'
    }],
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>
  }
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var D,b,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    equalWidth: 'max-width',
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>
  },
  render: ({
    menuProps,
    ...args
  }) => {
    return <div className="flex gap-12">
        <Dropdown menus={menuConfig} {...args} />
        <Dropdown menus={[...menuConfig, {
        label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4'
      }]} {...args} />
      </div>;
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,x,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    equalWidth: 'min-width',
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>
  },
  render: ({
    menuProps,
    ...args
  }) => {
    return <div className="flex gap-12">
        <Dropdown menus={menuConfig} {...args} />
        <Dropdown menus={[...menuConfig, {
        label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4'
      }]} {...args} />
        <div className="flex-1"></div>
        <Dropdown {...args} position="bottom-right" menuProps={{
        items: menuConfig
      }} {...args} />
      </div>;
  }
}`,...(T=(x=m.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var L,R,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    menuProps: {
      items: menuConfig
    }
  },
  render: ({
    ...args
  }) => {
    return <div className="flex gap-12 center-v">
        <Dropdown {...args}>
          <Button>Hover Me</Button>
        </Dropdown>
        <Dropdown {...args}>
          <a href="##">Hover Me</a>
        </Dropdown>
      </div>;
  }
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var N,q,H,S,W;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    position: 'right-center',
    menuProps: {
      items: menuConfig
    }
  },
  render: args => {
    return <div className="flex rpw gap-12 flex-wrap p-48 mb-48">
        <Dropdown {...args} position="top">
          <Button>Top</Button>
        </Dropdown>
        <Dropdown {...args} position="top-center">
          <Button>TopCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="top-left">
          <Button>TopLeft</Button>
        </Dropdown>
        <Dropdown {...args} position="top-right">
          <Button>TopRight</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom">
          <Button>Bottom</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-center">
          <Button>BottomCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-left">
          <Button>BottomLeft</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-right">
          <Button>BottomRight</Button>
        </Dropdown>
        <Dropdown {...args} position="left">
          <Button>Left</Button>
        </Dropdown>
        <Dropdown {...args} position="left-center">
          <Button>LeftCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="left-top">
          <Button>LeftTop</Button>
        </Dropdown>
        <Dropdown {...args} position="left-bottom">
          <Button>LeftBottom</Button>
        </Dropdown>
        <Dropdown {...args} position="right">
          <Button>Right</Button>
        </Dropdown>
        <Dropdown {...args} position="right-center">
          <Button>RightCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="right-top">
          <Button>RightTop</Button>
        </Dropdown>
        <Dropdown {...args} position="right-bottom">
          <Button>RightBottom</Button>
        </Dropdown>
      </div>;
  }
}`,...(H=(q=s.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:`通过 position 来控制弹出方向

继承自 PopupTrigger`,...(W=(S=s.parameters)==null?void 0:S.docs)==null?void 0:W.description}}};const Z=["基础示例","弹出层与触发器等宽","等宽_最大宽度","等宽_最小宽度","Hover","弹出方向"];export{c as Hover,Z as __namedExportsOrder,Y as default,p as 基础示例,d as 弹出层与触发器等宽,s as 弹出方向,a as 等宽_最大宽度,m as 等宽_最小宽度};
