import{b as e,j as i,a as s,e as b,B as h}from"./iframe-D6mQ9x1r.js";const m={title:"Components/Checkbox",component:e,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"纯粹且完美"}}}},c={args:{label:"checkbox"}},l={args:{label:"disabled",disabled:!0}},a={render:()=>i("div",{className:"flex row gap-12 flex-wrap",children:[s(e,{label:"size-11",size:11}),s(e,{label:"size-13(default)"}),s(e,{label:"size-18",size:18}),s(e,{label:"size-24",size:24}),s(e,{label:"size-32",size:32}),s(e,{label:"size-32-r-12",size:32,radius:12}),s(e,{label:"size-48",size:48}),s(e,{label:"size-48-r-30",size:48,radius:30})]})},r={args:{label:"checkbox label",children:"checkbox children"}},o={render:()=>{const[n,d]=b.useState(!1);return i("div",{children:[s("div",{className:"mb-12",children:i(h,{onClick:()=>d(!n),children:["checked: ",n+""]})}),s(e,{label:"controlled",value:n,onChange:t=>d(t.target.checked)})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'checkbox'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"一般不会搞这么大，使用默认尺寸获得最佳视觉效果",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'checkbox label',
    children: 'checkbox children'
  }
}`,...r.parameters?.docs?.source},description:{story:`label 作为快捷属性用于快速定义标签

如果你传入了任意 children，那么 label 将失效`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>checked: {checked + ''}</Button>
        </div>

        <Checkbox label="controlled" value={checked} onChange={e => setChecked(e.target.checked)} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const u=["基础示例","禁用","尺寸和圆角","Label与Children","受控状态"];export{r as Label与Children,u as __namedExportsOrder,m as default,o as 受控状态,c as 基础示例,a as 尺寸和圆角,l as 禁用};
