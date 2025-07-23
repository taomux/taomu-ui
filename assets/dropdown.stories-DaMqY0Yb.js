import{c as t,a as o,B as r,j as u}from"./iframe-Ci2SqJ0Y.js";const h={title:"Components/Dropdown",component:t,tags:["autodocs"],argTypes:{}},n=[{label:"菜单1",onClick:()=>{alert(1)}},{label:"菜单2"},{label:"菜单-禁用",disabled:!0},{label:"菜单3"}],p={args:{menus:n,children:o(r,{children:"下拉菜单"})}},d={args:{equalWidth:"equal",menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})}},a={args:{equalWidth:"max-width",children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:e,...i})=>u("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i})]})},c={args:{equalWidth:"min-width",children:o(r,{children:"下拉菜单下拉菜单下拉菜单下拉菜单"})},render:({menuProps:e,...i})=>u("div",{className:"flex gap-12",children:[o(t,{menus:n,...i}),o(t,{menus:[...n,{label:"菜单4菜单4菜单4菜单4菜单4菜单4菜单4"}],...i}),o("div",{className:"flex-1"}),o(t,{...i,position:"bottom-right",menuProps:{items:n},...i})]})},l={args:{trigger:"hover",menuProps:{items:n}},render:({...e})=>u("div",{className:"flex gap-12 center-v",children:[o(t,{...e,children:o(r,{children:"Hover Me"})}),o(t,{...e,children:o("a",{href:"##",children:"Hover Me"})})]})},s={args:{trigger:"hover",position:"right-center",menuProps:{items:n}},render:e=>u("div",{className:"flex rpw gap-12 flex-wrap p-48 mb-48",children:[o(t,{...e,position:"top",children:o(r,{children:"Top"})}),o(t,{...e,position:"top-center",children:o(r,{children:"TopCenter"})}),o(t,{...e,position:"top-left",children:o(r,{children:"TopLeft"})}),o(t,{...e,position:"top-right",children:o(r,{children:"TopRight"})}),o(t,{...e,position:"bottom",children:o(r,{children:"Bottom"})}),o(t,{...e,position:"bottom-center",children:o(r,{children:"BottomCenter"})}),o(t,{...e,position:"bottom-left",children:o(r,{children:"BottomLeft"})}),o(t,{...e,position:"bottom-right",children:o(r,{children:"BottomRight"})}),o(t,{...e,position:"left",children:o(r,{children:"Left"})}),o(t,{...e,position:"left-center",children:o(r,{children:"LeftCenter"})}),o(t,{...e,position:"left-top",children:o(r,{children:"LeftTop"})}),o(t,{...e,position:"left-bottom",children:o(r,{children:"LeftBottom"})}),o(t,{...e,position:"right",children:o(r,{children:"Right"})}),o(t,{...e,position:"right-center",children:o(r,{children:"RightCenter"})}),o(t,{...e,position:"right-top",children:o(r,{children:"RightTop"})}),o(t,{...e,position:"right-bottom",children:o(r,{children:"RightBottom"})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    menus: menuConfig,
    children: <Button>下拉菜单</Button>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    equalWidth: 'equal',
    menus: [...menuConfig, {
      label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4'
    }],
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`通过 position 来控制弹出方向

继承自 PopupTrigger`,...s.parameters?.docs?.description}}};const g=["基础示例","弹出层与触发器等宽","等宽_最大宽度","等宽_最小宽度","Hover","弹出方向"];export{l as Hover,g as __namedExportsOrder,h as default,p as 基础示例,d as 弹出层与触发器等宽,s as 弹出方向,a as 等宽_最大宽度,c as 等宽_最小宽度};
