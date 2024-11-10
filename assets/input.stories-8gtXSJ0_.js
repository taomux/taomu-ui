import{a as e,j}from"./mini-scrollbar-CovzJoiJ.js";import{R as i}from"./index-DRjF_FHU.js";import{I as s,a as L,b as a}from"./index-CI-pzQoc.js";import{A as d}from"./activity-BMafiJeT.js";import"./jsx-runtime-DR9Q75dM.js";import"./use-taomu-classname-DM2_Z24H.js";import"./input.styled-CAYR-obT.js";import"./global-style-emPCDtl7.js";import"./x-circle-ehOOJA42.js";import"./index-Dw6WB_A6.js";const G={title:"Components/Input",component:s,tags:["autodocs"],argTypes:{}},t={args:{allowClear:!0,placeholder:"请输入"}},o={args:{allowClear:!0,placeholder:"请输入",leftNode:e(d,{size:16}),rightNode:e(d,{size:16})}},n={args:{allowClear:!0,leftNode:e(d,{size:16}),rightNode:e(d,{size:16})},render:r=>j("div",{className:"flex col gap-12",children:[e(s,{...r,status:"default",placeholder:"default"}),e(s,{...r,status:"success",placeholder:"success"}),e(s,{...r,status:"warning",placeholder:"warning"}),e(s,{...r,status:"error",placeholder:"error"})]})},c={render:()=>e(L,{placeholder:"InputPassword",maxLength:20})},l={render:()=>j("div",{className:"flex col gap-12",children:[e(a,{width:500,rows:5,placeholder:"InputTextarea"}),e(a,{width:500,rows:5,placeholder:"success",status:"success"}),e(a,{width:500,rows:5,placeholder:"warning",status:"warning"}),e(a,{width:500,rows:5,placeholder:"error",status:"error"})]})},p={args:{},render:r=>{const u=i.useRef(null);return i.useEffect(()=>{console.log(u)},[]),e("div",{className:"flex col gap-12",children:e(s,{...r,ref:u})})}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '请输入'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,f,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '请输入',
    leftNode: <IconActivity size={16} />,
    rightNode: <IconActivity size={16} />
  }
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var x,v,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var R,T,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <InputPassword placeholder="InputPassword" maxLength={20} />
}`,...(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var C,y,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex col gap-12">
        <InputTextarea width={500} rows={5} placeholder="InputTextarea" />
        <InputTextarea width={500} rows={5} placeholder="success" status="success" />
        <InputTextarea width={500} rows={5} placeholder="warning" status="warning" />
        <InputTextarea width={500} rows={5} placeholder="error" status="error" />
      </div>;
  }
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var S,E,P;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const J=["基础示例","扩展元素","状态","密码输入","多行文本输入","Ref"];export{p as Ref,J as __namedExportsOrder,G as default,t as 基础示例,l as 多行文本输入,c as 密码输入,o as 扩展元素,n as 状态};
