import{j as u,a as e}from"./mini-scrollbar-DFcjLXiE.js";import{R as F}from"./index-D4lIrffr.js";import"./index-CW14urU_.js";import{S as t}from"./switch-Bf6BtEof.js";import{B as H}from"./button-DM2Pr_ZD.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-CPr58zXM.js";import"./index-D3JWA8ig.js";import"./loading-DUJnLnMm.js";import"./global-vars-hpilZV8k.js";import"./index-BPX1WxqX.js";const $={title:"Components/Switch",component:t,tags:["autodocs"],argTypes:{}},s={args:{}},a={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(t,{width:24}),e(t,{}),e(t,{radius:18,disabled:!0}),e(t,{width:50}),e(t,{width:32,height:32}),e(t,{width:68,height:32}),e(t,{width:100,height:100}),e(t,{width:188,height:100})]})},c={args:{disabled:!0}},o={args:{value:!0}},d={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(t,{loading:!0}),e(t,{loading:!0,value:!0}),e(t,{loading:!0,width:32,height:32,value:!0}),e(t,{loading:!0,width:50,height:20,value:!0}),e(t,{loading:!0,width:50,height:50,value:!0}),e(t,{loading:!0,width:88,height:88,value:!0}),e(t,{loading:!0,width:188,height:88,value:!0})]})},h={render:()=>{const[r,n]=F.useState(!1);return u("div",{children:[e("div",{className:"mb-12",children:u(H,{onClick:()=>n(!r),children:["active: ",r+""]})}),e(t,{value:r,onChange:l=>n(l.target.checked)})]})}},i={render:()=>{const[r,n]=F.useState(!1);async function l(g){return new Promise(G=>{setTimeout(()=>{n(g),G()},1e3)})}return e("div",{children:e(t,{value:r,onChange:g=>l(g.target.checked)})})}};var m,p,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var v,S,k,f,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"通过 `width` 与 `height` 控制尺寸\n\n通过 `radius` 控制圆角",...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.description}}};var x,b,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var y,B,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,j,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var T,_,E;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>active: {checked + ''}</Button>
        </div>

        <Switch value={checked} onChange={e => setChecked(e.target.checked)} />
      </div>;
  }
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,q,z,A,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        <Switch value={checked} onChange={e => handleChange(e.target.checked)} />
      </div>;
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"如果 onChange 返回一个 Promise, 则自动添加 loading",...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const ee=["基础示例","尺寸与圆角","禁用状态","激活状态","Loading状态","受控状态","autoLoading"];export{d as Loading状态,ee as __namedExportsOrder,i as autoLoading,$ as default,h as 受控状态,s as 基础示例,a as 尺寸与圆角,o as 激活状态,c as 禁用状态};
