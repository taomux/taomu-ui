import{j as n,a as e}from"./mini-scrollbar-CpYozGie.js";import{R}from"./index-l2PZgWEW.js";import"./index-BaOCVB8q.js";import{C as s}from"./checkbox-Dciiz1bq.js";import{B as L}from"./button-BW6W9uNl.js";import"./jsx-runtime-DWbWqHZ-.js";import"./use-taomu-classname-C0XxHi0q.js";import"./index-zbzXvoZu.js";const G={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"纯粹且完美"}}}},c={args:{label:"checkbox"}},o={args:{label:"disabled",disabled:!0}},r={render:()=>n("div",{className:"flex row gap-12 flex-wrap",children:[e(s,{label:"size-11",size:11}),e(s,{label:"size-13(default)"}),e(s,{label:"size-18",size:18}),e(s,{label:"size-24",size:24}),e(s,{label:"size-32",size:32}),e(s,{label:"size-32-r-12",size:32,radius:12}),e(s,{label:"size-48",size:48}),e(s,{label:"size-48-r-30",size:48,radius:30})]})},a={args:{label:"checkbox label",children:"checkbox children"}},l={render:()=>{const[i,t]=R.useState(!1);return n("div",{children:[e("div",{className:"mb-12",children:n(L,{onClick:()=>t(!i),children:["checked: ",i+""]})}),e(s,{label:"controlled",value:i,onChange:t})]})}};var d,b,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'checkbox'
  }
}`,...(m=(b=c.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,z,x,C,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex row gap-12 flex-wrap">
        <Checkbox label="size-11" size={11} />
        <Checkbox label="size-13(default)" />
        <Checkbox label="size-18" size={18} />
        <Checkbox label="size-24" size={24} />
        <Checkbox label="size-32" size={32} />
        <Checkbox label="size-32-r-12" size={32} radius={12} />
        <Checkbox label="size-48" size={48} />
        <Checkbox label="size-48-r-30" size={48} radius={30} />
      </div>;
  }
}`,...(x=(z=r.parameters)==null?void 0:z.docs)==null?void 0:x.source},description:{story:"一般不会搞这么大，使用默认尺寸获得最佳视觉效果",...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var f,v,S,w,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'checkbox label',
    children: 'checkbox children'
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:`label 作为快捷属性用于快速定义标签

如果你传入了任意 children，那么 label 将失效`,...(B=(w=a.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var N,j,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>checked: {checked + ''}</Button>
        </div>

        <Checkbox label="controlled" value={checked} onChange={setChecked} />
      </div>;
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const H=["基础示例","禁用","尺寸和圆角","Label与Children","受控状态"];export{a as Label与Children,H as __namedExportsOrder,G as default,l as 受控状态,c as 基础示例,r as 尺寸和圆角,o as 禁用};
