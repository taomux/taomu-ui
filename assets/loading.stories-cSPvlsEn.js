import{L as e,j as t,a as r}from"./iframe-Ci2SqJ0Y.js";const p={title:"Components/Loading",component:e,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"常规 Loading 组件"}}}},a={args:{}},n={args:{color:"#09c"}},s={args:{},render:()=>t("div",{className:"flex gap-12",children:[r(e,{size:4}),r(e,{size:8}),r(e,{size:12}),r(e,{size:24}),r(e,{size:32}),r(e,{size:48}),r(e,{size:64})]})},o={args:{size:48,weight:8}},c={args:{size:48,speed:.4}},i={args:{},render:()=>t("div",{className:"flex gap-8 center-v",children:[r(e,{}),r("div",{children:"Text..."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#09c'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Loading size={4} />
        <Loading size={8} />
        <Loading size={12} />
        <Loading size={24} />
        <Loading size={32} />
        <Loading size={48} />
        <Loading size={64} />
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:"不能 < 4",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 48,
    weight: 8
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 48,
    speed: 0.4
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-8 center-v">
        <Loading />
        <div>Text...</div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const g=["基础示例","颜色","尺寸","粗细","速度","居中测试"];export{g as __namedExportsOrder,p as default,a as 基础示例,s as 尺寸,i as 居中测试,o as 粗细,c as 速度,n as 颜色};
