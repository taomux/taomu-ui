import{B as n,j as a,a as e,e as v,S as T}from"./iframe-Ci2SqJ0Y.js";import{M as N}from"./mail-D2xHwOEp.js";const C={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{}},y={args:{children:"Default"}},m={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{type:"default",children:"Default"}),e(n,{type:"primary",children:"Primary"}),e(n,{type:"warning",children:"Warning"}),e(n,{type:"danger",children:"Danger"}),e(n,{type:"text",children:"Text"})]})},o={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{type:"default",hoverType:"primary",children:"Default"}),e(n,{type:"primary",hoverType:"danger",children:"Primary"}),e(n,{type:"warning",hoverType:"primary",children:"Warning"}),e(n,{type:"danger",hoverType:"default",children:"Danger"}),e(n,{type:"text",hoverType:"default",glass:!0,children:"Text"}),e(n,{type:"text",hoverType:"primary",ghost:!0,children:"Text"}),e(n,{type:"text",hoverType:"danger",glass:!0,children:"Text"})]})},B={args:{disabled:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},h={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{round:!0,children:"Default"}),e(n,{radius:0,children:"Default"}),e(n,{radius:4,children:"Default"}),e(n,{radius:12,children:"Default"})]})},i={args:{ghost:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},d={args:{glass:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},l={args:{dashed:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},f={args:{children:"Default",showOutline:!1}},x={args:{children:"Default",block:!0},render:t=>e("div",{className:"flex gap-12",children:e(n,{...t,type:"default",ghost:!0,block:!0,children:"Default"})})},u={render:t=>{const[r,s]=v.useState(!0);return a("div",{className:"flex col gap-12",children:[e("div",{children:a(n,{...t,onClick:()=>s(!r),children:["loading: ",r?"on":"off"]})}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,type:"default",children:"Default"}),e(n,{...t,loading:r,type:"primary",children:"Primary"}),e(n,{...t,loading:r,type:"warning",children:"Warning"}),e(n,{...t,loading:r,type:"danger",children:"Danger"}),e(n,{...t,loading:r,type:"text",children:"Text"})]}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,glass:!0,type:"default",children:"Default"}),e(n,{...t,loading:r,glass:!0,type:"primary",children:"Primary"}),e(n,{...t,loading:r,glass:!0,type:"warning",children:"Warning"}),e(n,{...t,loading:r,glass:!0,type:"danger",children:"Danger"}),e(n,{...t,loading:r,glass:!0,type:"text",children:"Text"})]}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,ghost:!0,type:"default",disabled:!0,children:"Default"}),e(n,{...t,loading:r,ghost:!0,type:"primary",children:"Primary"}),e(n,{...t,loading:r,ghost:!0,type:"warning",children:"Warning"}),e(n,{...t,loading:r,ghost:!0,type:"danger",children:"Danger"}),e(n,{...t,loading:r,ghost:!0,type:"text",children:"Text"})]})]})}},c={render:()=>e("div",{children:a(n,{className:"gap-12",children:[e(N,{size:16}),e("span",{children:"Text"}),e("span",{className:"fs-18",children:"fs-18"}),e(T,{size:12})]})})},p={args:{},render:()=>{const[t,r]=v.useState(0),[s,D]=v.useState([]);return a("div",{className:"flex row center-v gap-12",children:[e(n,{children:"Default"}),e(n,{cssVars:{btnRadius:t,btnOutlineColor:"red"},style:{zIndex:t},className:s,onClick:()=>{r(t+1),D(s.concat(`add-class-${t}`))},children:"越点越圆"})]})}},g={args:{autoLoading:!0},render:t=>{async function r(){return new Promise(s=>setTimeout(s,2e3))}return a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",onClick:r,children:"Promise"}),e(n,{...t,type:"primary",onClick:r,children:"Promise"}),e(n,{...t,type:"primary",glass:!0,onClick:r,children:"Promise"}),e(n,{...t,type:"warning",glass:!0,onClick:r,children:"Promise"}),e(n,{...t,type:"danger",glass:!0,onClick:r,children:"Promise"})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="text">Text</Button>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Button type="default" hoverType="primary">
          Default
        </Button>
        <Button type="primary" hoverType="danger">
          Primary
        </Button>
        <Button type="warning" hoverType="primary">
          Warning
        </Button>
        <Button type="danger" hoverType="default">
          Danger
        </Button>
        <Button type="text" hoverType="default" glass>
          Text
        </Button>
        <Button type="text" hoverType="primary" ghost>
          Text
        </Button>
        <Button type="text" hoverType="danger" glass>
          Text
        </Button>
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"使用 hoverType 在鼠标悬停时从一个类型过渡到另一个类型",...o.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    return <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="text">
          Text
        </Button>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Button round>Default</Button>
        <Button radius={0}>Default</Button>
        <Button radius={4}>Default</Button>
        <Button radius={12}>Default</Button>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ghost: true
  },
  render: args => {
    return <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="text">
          Text
        </Button>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"幽灵按钮",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    glass: true
  },
  render: args => {
    return <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="text">
          Text
        </Button>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"玻璃按钮",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dashed: true
  },
  render: args => {
    return <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="text">
          Text
        </Button>
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"虚线边框",...l.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    showOutline: false
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    block: true
  },
  render: args => {
    return <div className="flex gap-12">
        <Button {...args} type="default" ghost block>
          Default
        </Button>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = React.useState(true);
    return <div className="flex col gap-12">
        <div>
          <Button {...args} onClick={() => setLoading(!loading)}>
            loading: {loading ? 'on' : 'off'}
          </Button>
        </div>
        <div className="flex gap-12">
          <Button {...args} loading={loading} type="default">
            Default
          </Button>
          <Button {...args} loading={loading} type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} type="text">
            Text
          </Button>
        </div>

        <div className="flex gap-12">
          <Button {...args} loading={loading} glass type="default">
            Default
          </Button>
          <Button {...args} loading={loading} glass type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} glass type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} glass type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} glass type="text">
            Text
          </Button>
        </div>

        <div className="flex gap-12">
          <Button {...args} loading={loading} ghost type="default" disabled>
            Default
          </Button>
          <Button {...args} loading={loading} ghost type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} ghost type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} ghost type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} ghost type="text">
            Text
          </Button>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:`加载中状态

使用了 [Progress](/docs/components-progress--docs) 组件`,...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Button className="gap-12">
          <IconMail size={16} />
          <span>Text</span>
          <span className="fs-18">fs-18</span>
          <IconSun size={12} />
        </Button>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"默认使用 flex 布局",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [count, setCount] = React.useState(0);
    const [classNames, setClassNames] = React.useState<string[]>([]);
    return <div className="flex row center-v gap-12">
        <Button>Default</Button>
        <Button cssVars={{
        btnRadius: count,
        btnOutlineColor: 'red'
      }} style={{
        zIndex: count
      }} className={classNames} onClick={() => {
        setCount(count + 1);
        setClassNames(classNames.concat(\`add-class-\${count}\`));
      }}>
          越点越圆
        </Button>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"本 UI 库的大多数组件都接收 `props.cssVars` 来自定义样式\n详见 typedoc",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoLoading: true
  },
  render: args => {
    async function sleep() {
      return new Promise(resolve => setTimeout(resolve, 2000));
    }
    return <div className="flex gap-12">
        <Button {...args} type="default" onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="primary" onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="primary" glass onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="warning" glass onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="danger" glass onClick={sleep}>
          Promise
        </Button>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"如果 onClick 返回一个 Promise, 则自动添加 loading\n\n控制开关：`autoLoading`，默认为 `true`\n\n效果不错，不用担心动画性能，你的GPU参与了渲染",...g.parameters?.docs?.description}}};const S=["基础示例","类型","HoverType","禁用状态","圆角","Ghost","Glass","Dashed","不显示外轮廓","Block","Loading","居中测试","CssVars_深度自定义","AutoLoading"];export{g as AutoLoading,x as Block,p as CssVars_深度自定义,l as Dashed,i as Ghost,d as Glass,o as HoverType,u as Loading,S as __namedExportsOrder,C as default,f as 不显示外轮廓,h as 圆角,y as 基础示例,c as 居中测试,B as 禁用状态,m as 类型};
