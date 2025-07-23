import{o as k,a as e,A as z,q as B,t as N,B as i,e as A,j as I}from"./iframe-P3Y-woc8.js";import{A as K}from"./activity-BPTfy63e.js";import{A as W,S as R}from"./save-CjgY_4eg.js";const q={title:"Components/Menu",component:k,tags:["autodocs"],argTypes:{}},s=[{name:"menu1",icon:e(K,{size:16}),label:"选项1"},{name:"menu2",icon:e(z,{size:16}),label:"选项2"},{name:"menu3",icon:e(B,{size:16}),label:"选项3",disabled:!0},{name:"menu4",icon:e(W,{size:16}),label:"选项4"},{name:"menu5",icon:e(R,{size:16}),label:"选项5"}],S=[{label:"菜单1",onClick:()=>console.log("onClick 1")},{label:"菜单2"},{label:"菜单-禁用",disabled:!0,onClick:()=>console.log("onClick 3")},{label:"菜单-选中",active:!0},{label:"菜单-选中-禁用",active:!0,disabled:!0},{label:"菜单3"},{label:"不可见",visible:!1},{divider:!0},{label:"自定义属性"},{label:"自定义图标",icon:e(K,{size:16})},{label:"超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"},{label:"超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略",ellipsis:!0,title:"超出省略 hover title 需要手动传入"}],d={args:{width:200,items:S}},c={args:{width:200,height:120,items:S}},m={args:{width:200,padding:0,gap:0,itemProps:{radius:0},items:S}},l={args:{items:s,direction:"horizontal"}},n={args:{items:s,direction:"horizontal",width:300}},u={args:{items:s,direction:"horizontal",width:300,overflowBreak:!0}},p={args:{items:s,mode:"radio"}},g={args:{items:s,mode:"checkbox",width:200}},w={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1]}},h={args:{items:s.map(r=>({icon:r.icon})),mode:"radio",styleMode:"windows"}},y={args:{items:s,mode:"radio",styleMode:"windows",direction:"horizontal"}},v={args:{items:s.map(r=>({icon:r.icon})),mode:"radio",styleMode:"windows",direction:"horizontal"}},b={args:{items:s,mode:"checkbox",styleMode:"windows",width:200}},a={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultKeys:"menu2",beforeItemRender:(r,t)=>t.disabled?r:e(N,{trigger:"hover",position:"right",content:()=>e("div",{className:"px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12",children:t.label}),children:r},t.name)}},M={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1],children:e("div",{children:e(i,{dashed:!0,block:!0,children:"Add"})})}},x={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1]},render:r=>{const[t,o]=A.useState(r.defaultIndexes);return I("div",{className:"flex col gap-12",children:[I("div",{className:"flex gap-12",children:[e(i,{onClick:()=>o([0]),children:"选中第一个"}),e(i,{onClick:()=>o([1]),children:"选中第二个"})]}),e(k,{...r,activeIndexes:t,onChange:(_,C)=>o(C)})]})}},f={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultKeys:["menu2"]},render:r=>{const[t,o]=A.useState(r.defaultKeys);return I("div",{className:"flex col gap-12",children:[I("div",{className:"flex gap-12",children:[e(i,{onClick:()=>o("menu1"),children:"选中第一个"}),e(i,{onClick:()=>o("menu2"),children:"选中第二个"})]}),e(k,{...r,activeKeys:t,onChange:_=>o(_)})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    items: testMenus2
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 120,
    items: testMenus2
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: {
      radius: 0
    },
    items: testMenus2
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300
  }
}`,...n.parameters?.docs?.source},description:{story:"Default",...n.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1]
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200
  }
}`,...b.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: 'menu2',
    beforeItemRender: (itemNode: any, props: any) => {
      if (props.disabled) return itemNode;
      return <PopupTrigger key={props.name} trigger="hover" position="right" content={() => <div className="px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12">{props.label}</div>}>
          {itemNode}
        </PopupTrigger>;
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"使用 `beforeItemRender` 函数为菜单项添加包裹层",...a.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1],
    children: <div>
        <Button dashed block>
          Add
        </Button>
      </div>
  }
}`,...M.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1]
  },
  render: args => {
    const [activeIndexes, setActiveIndexes] = React.useState<number | number[]>(args.defaultIndexes);
    return <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveIndexes([0])}>选中第一个</Button>
          <Button onClick={() => setActiveIndexes([1])}>选中第二个</Button>
        </div>
        <Menu {...args} activeIndexes={activeIndexes} onChange={(_, indexes) => setActiveIndexes(indexes)} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: ['menu2']
  },
  render: args => {
    const [activeKeys, setActiveKeys] = React.useState<MenuItemKey | MenuItemKey[]>(args.defaultKeys);
    return <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveKeys('menu1')}>选中第一个</Button>
          <Button onClick={() => setActiveKeys('menu2')}>选中第二个</Button>
        </div>
        <Menu {...args} activeKeys={activeKeys} onChange={keys => setActiveKeys(keys)} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const D=["基础示例","固定高度","边距和间距","横向排列","横向排列_超出滚动","横向排列_超出换行","单选模式","多选模式","Windows风格","Windows风格_仅图标","Windows风格_横向","Windows风格_横向_仅图标","Windows风格_多选","beforeItemRender","额外元素","受控模式_Index","受控模式_Keys"];export{w as Windows风格,h as Windows风格_仅图标,b as Windows风格_多选,y as Windows风格_横向,v as Windows风格_横向_仅图标,D as __namedExportsOrder,a as beforeItemRender,q as default,p as 单选模式,x as 受控模式_Index,f as 受控模式_Keys,c as 固定高度,d as 基础示例,g as 多选模式,l as 横向排列,u as 横向排列_超出换行,n as 横向排列_超出滚动,m as 边距和间距,M as 额外元素};
