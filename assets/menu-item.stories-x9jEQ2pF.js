import{M as e,a as r,j as a}from"./iframe-P3Y-woc8.js";import{A as c}from"./activity-BPTfy63e.js";const o={title:"Components/Menu/MenuItem",component:e,tags:["autodocs"],argTypes:{}},n={args:{children:"MenuItem"}},s={args:{icon:r(c,{size:16}),children:"MenuItem"}},t={args:{},render:()=>a("div",{className:"flex col gap-8",style:{width:200},children:[r(e,{children:"正常"}),r(e,{active:!0,children:"Active"}),r(e,{divider:!0}),r(e,{disabled:!0,children:"Disabled"}),r(e,{disabled:!0,active:!0,children:"Disabled-Active"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'MenuItem'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <IconActivity size={16} />,
    children: 'MenuItem'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex col gap-8" style={{
      width: 200
    }}>
        <MenuItem>正常</MenuItem>
        <MenuItem active>Active</MenuItem>
        <MenuItem divider />
        <MenuItem disabled>Disabled</MenuItem>
        <MenuItem disabled active>
          Disabled-Active
        </MenuItem>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const m=["基础示例","Icon","不同状态"];export{s as Icon,m as __namedExportsOrder,o as default,t as 不同状态,n as 基础示例};
