import{I as s,a as e,j as g,m,n as a,e as i}from"./iframe-P3Y-woc8.js";import{A as u}from"./activity-BPTfy63e.js";const f={title:"Components/Input",component:s,tags:["autodocs"],argTypes:{}},t={args:{allowClear:!0,placeholder:"请输入"}},n={args:{allowClear:!0,placeholder:"请输入",leftNode:e(u,{size:16}),rightNode:e(u,{size:16})}},o={args:{allowClear:!0,leftNode:e(u,{size:16}),rightNode:e(u,{size:16})},render:r=>g("div",{className:"flex col gap-12",children:[e(s,{...r,status:"default",placeholder:"default"}),e(s,{...r,status:"success",placeholder:"success"}),e(s,{...r,status:"warning",placeholder:"warning"}),e(s,{...r,status:"error",placeholder:"error"})]})},c={render:()=>e(m,{placeholder:"InputPassword",maxLength:20})},l={render:()=>g("div",{className:"flex col gap-12",children:[e(a,{width:500,rows:5,placeholder:"InputTextarea"}),e(a,{width:500,rows:5,placeholder:"success",status:"success"}),e(a,{width:500,rows:5,placeholder:"warning",status:"warning"}),e(a,{width:500,rows:5,placeholder:"error",status:"error"})]})},d={args:{},render:r=>{const p=i.useRef(null);return i.useEffect(()=>{console.log(p)},[]),e("div",{className:"flex col gap-12",children:e(s,{...r,ref:p})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '请输入'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '请输入',
    leftNode: <IconActivity size={16} />,
    rightNode: <IconActivity size={16} />
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    leftNode: <IconActivity size={16} />,
    rightNode: <IconActivity size={16} />
  },
  render: args => {
    return <div className="flex col gap-12">
        <Input {...args} status="default" placeholder="default" />
        <Input {...args} status="success" placeholder="success" />
        <Input {...args} status="warning" placeholder="warning" />
        <Input {...args} status="error" placeholder="error" />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InputPassword placeholder="InputPassword" maxLength={20} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex col gap-12">
        <InputTextarea width={500} rows={5} placeholder="InputTextarea" />
        <InputTextarea width={500} rows={5} placeholder="success" status="success" />
        <InputTextarea width={500} rows={5} placeholder="warning" status="warning" />
        <InputTextarea width={500} rows={5} placeholder="error" status="error" />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useEffect(() => {
      console.log(inputRef);
    }, []);
    return <div className="flex col gap-12">
        <Input {...args} ref={inputRef} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const I=["基础示例","扩展元素","状态","密码输入","多行文本输入","Ref"];export{d as Ref,I as __namedExportsOrder,f as default,t as 基础示例,l as 多行文本输入,c as 密码输入,n as 扩展元素,o as 状态};
