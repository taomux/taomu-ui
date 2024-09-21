import{j as u,a as e}from"./mini-scrollbar-CpYozGie.js";import{R as A}from"./index-l2PZgWEW.js";import"./index-BaOCVB8q.js";import{S as r}from"./switch-BE6QHHDs.js";import{B as H}from"./button-BW6W9uNl.js";import"./jsx-runtime-DWbWqHZ-.js";import"./use-taomu-classname-C0XxHi0q.js";import"./index-a1TUFKBR.js";import"./loading-Dobe5VFt.js";import"./index-zbzXvoZu.js";const Z={title:"Components/Switch",component:r,tags:["autodocs"],argTypes:{}},s={args:{}},a={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(r,{width:24}),e(r,{}),e(r,{radius:18,disabled:!0}),e(r,{width:50}),e(r,{width:32,height:32}),e(r,{width:68,height:32}),e(r,{width:100,height:100}),e(r,{width:188,height:100})]})},o={args:{disabled:!0}},d={args:{value:!0}},c={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(r,{loading:!0}),e(r,{loading:!0,value:!0}),e(r,{loading:!0,width:32,height:32,value:!0}),e(r,{loading:!0,width:50,height:20,value:!0}),e(r,{loading:!0,width:50,height:50,value:!0}),e(r,{loading:!0,width:88,height:88,value:!0}),e(r,{loading:!0,width:188,height:88,value:!0})]})},h={render:()=>{const[t,i]=A.useState(!1);return u("div",{children:[e("div",{className:"mb-12",children:u(H,{onClick:()=>i(!t),children:["active: ",t+""]})}),e(r,{value:t,onChange:i})]})}},n={render:()=>{const[t,i]=A.useState(!1);async function D(F){return new Promise(G=>{setTimeout(()=>{i(F),G()},1e3)})}return e("div",{children:e(r,{value:t,onChange:D})})}};var l,g,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,w,v,S,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex row gap-12 flex-wrap">
        <Switch width={24} />
        <Switch />
        <Switch radius={18} disabled />
        <Switch width={50} />
        <Switch width={32} height={32} />
        <Switch width={68} height={32} />
        <Switch width={100} height={100} />
        <Switch width={188} height={100} />
      </div>;
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"通过 `width` 与 `height` 控制尺寸\n\n通过 `radius` 控制圆角",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var k,C,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var b,N,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var B,L,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex row gap-12 flex-wrap">
        <Switch loading />
        <Switch loading value />
        <Switch loading width={32} height={32} value />
        <Switch loading width={50} height={20} value />
        <Switch loading width={50} height={50} value />
        <Switch loading width={88} height={88} value />
        <Switch loading width={188} height={88} value />
      </div>;
  }
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,P,T;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>active: {checked + ''}</Button>
        </div>

        <Switch value={checked} onChange={setChecked} />
      </div>;
  }
}`,...(T=(P=h.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var _,E,O,q,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    async function handleChange(checked: boolean) {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          setChecked(checked);
          resolve();
        }, 1000);
      });
    }
    return <div>
        <Switch value={checked} onChange={handleChange} />
      </div>;
  }
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"如果 onChange 返回一个 Promise, 则自动添加 loading",...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};const $=["基础示例","尺寸与圆角","禁用状态","激活状态","Loading状态","受控状态","autoLoading"];export{c as Loading状态,$ as __namedExportsOrder,n as autoLoading,Z as default,h as 受控状态,s as 基础示例,a as 尺寸与圆角,d as 激活状态,o as 禁用状态};
