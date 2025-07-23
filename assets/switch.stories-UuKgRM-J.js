import{y as t,j as u,a as e,e as w,B as p}from"./iframe-P3Y-woc8.js";const S={title:"Components/Switch",component:t,tags:["autodocs"],argTypes:{}},i={args:{}},a={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(t,{width:24}),e(t,{}),e(t,{radius:18,disabled:!0}),e(t,{width:50}),e(t,{width:32,height:32}),e(t,{width:68,height:32}),e(t,{width:100,height:100}),e(t,{width:188,height:100})]})},c={args:{disabled:!0}},d={args:{value:!0}},o={render:()=>u("div",{className:"flex row gap-12 flex-wrap",children:[e(t,{loading:!0}),e(t,{loading:!0,value:!0}),e(t,{loading:!0,width:32,height:32,value:!0}),e(t,{loading:!0,width:50,height:20,value:!0}),e(t,{loading:!0,width:50,height:50,value:!0}),e(t,{loading:!0,width:88,height:88,value:!0}),e(t,{loading:!0,width:188,height:88,value:!0})]})},h={render:()=>{const[r,s]=w.useState(!1);return u("div",{children:[e("div",{className:"mb-12",children:u(p,{onClick:()=>s(!r),children:["active: ",r+""]})}),e(t,{value:r,onChange:l=>s(l.target.checked)})]})}},n={render:()=>{const[r,s]=w.useState(!1);async function l(g){return new Promise(m=>{setTimeout(()=>{s(g),m()},1e3)})}return e("div",{children:e(t,{value:r,onChange:g=>l(g.target.checked)})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"通过 `width` 与 `height` 控制尺寸\n\n通过 `radius` 控制圆角",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>active: {checked + ''}</Button>
        </div>

        <Switch value={checked} onChange={e => setChecked(e.target.checked)} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"如果 onChange 返回一个 Promise, 则自动添加 loading",...n.parameters?.docs?.description}}};const k=["基础示例","尺寸与圆角","禁用状态","激活状态","Loading状态","受控状态","autoLoading"];export{o as Loading状态,k as __namedExportsOrder,n as autoLoading,S as default,h as 受控状态,i as 基础示例,a as 尺寸与圆角,d as 激活状态,c as 禁用状态};
