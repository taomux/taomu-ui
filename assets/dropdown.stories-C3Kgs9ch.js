import{a as o,j as l}from"./mini-scrollbar-BRbUwqmL.js";import{D as t}from"./dropdown-CH2f0y3G.js";import"./index-B1pybB_d.js";import{B as r}from"./button-9XEQia8c.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./index-DooJlp1X.js";import"./popup-trigger-kY5N0Z_u.js";import"./use-taomu-classname-DvhRoCTO.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./global-style-QoB4c899.js";import"./popup.store-CEPolm7I.js";import"./menu-B5O7DHdV.js";import"./empty-Bz8b51HP.js";import"./index-Dw6WB_A6.js";import"./menu-item-CAh3YJAo.js";const X={title:"Components/Dropdown",component:t,tags:["autodocs"],argTypes:{}},n=[{label:"菜单1",onClick:()=>{alert(1)}},{label:"菜单2"},{label:"菜单-禁用",disabled:!0},{label:"菜单3"}],p={args:{menus:n,children:o(r,{children:"下拉菜单"})}},d={args:{equalWidth:"equal",menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})}},a={args:{equalWidth:"max-width",children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:e,...i})=>l("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i})]})},m={args:{equalWidth:"min-width",children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:e,...i})=>l("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i}),o("div",{className:"flex-1"}),o(t,{...i,position:"bottom-right",menuProps:{items:n},...i})]})},c={args:{trigger:"hover",menuProps:{items:n},children:o(r,{children:"Hover Me"})}},s={args:{trigger:"hover",position:"right-center",menuProps:{items:n}},render:e=>l("div",{className:"flex rpw gap-12 flex-wrap p-48 mb-48",children:[o(t,{...e,position:"top",children:o(r,{children:"Top"})}),o(t,{...e,position:"top-center",children:o(r,{children:"TopCenter"})}),o(t,{...e,position:"top-left",children:o(r,{children:"TopLeft"})}),o(t,{...e,position:"top-right",children:o(r,{children:"TopRight"})}),o(t,{...e,position:"bottom",children:o(r,{children:"Bottom"})}),o(t,{...e,position:"bottom-center",children:o(r,{children:"BottomCenter"})}),o(t,{...e,position:"bottom-left",children:o(r,{children:"BottomLeft"})}),o(t,{...e,position:"bottom-right",children:o(r,{children:"BottomRight"})}),o(t,{...e,position:"left",children:o(r,{children:"Left"})}),o(t,{...e,position:"left-center",children:o(r,{children:"LeftCenter"})}),o(t,{...e,position:"left-top",children:o(r,{children:"LeftTop"})}),o(t,{...e,position:"left-bottom",children:o(r,{children:"LeftBottom"})}),o(t,{...e,position:"right",children:o(r,{children:"Right"})}),o(t,{...e,position:"right-center",children:o(r,{children:"RightCenter"})}),o(t,{...e,position:"right-top",children:o(r,{children:"RightTop"})}),o(t,{...e,position:"right-bottom",children:o(r,{children:"RightBottom"})})]})};var u,h,g;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    },
    children: <Button>Hover Me</Button>
  }
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var q,N,S,W,_;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:`通过 position 来控制弹出方向

继承自 PopupTrigger`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};const Y=["基础示例","弹出层与触发器等宽","等宽_最大宽度","等宽_最小宽度","Hover","弹出方向"];export{c as Hover,Y as __namedExportsOrder,X as default,p as 基础示例,d as 弹出层与触发器等宽,s as 弹出方向,a as 等宽_最大宽度,m as 等宽_最小宽度};
