import{j as a,a as n}from"./mini-scrollbar-CZ8eNCm3.js";import{R as B}from"./index-CZMpeKRu.js";import{B as t}from"./button-CwsxCB5A.js";import{M as on,S as ln}from"./sun-ptqNbFAz.js";import"./jsx-runtime-CLpGMVip.js";import"./use-taomu-classname-CGrN28Ws.js";import"./global-vars-CQDXv0Fn.js";import"./index-CUnKnXLJ.js";import"./index-bPVxIqPX.js";const fn={title:"Components/Button",component:t,tags:["autodocs"],argTypes:{}},p={args:{children:"Default"}},g={args:{},render:()=>a("div",{className:"flex gap-12",children:[n(t,{type:"default",children:"Default"}),n(t,{type:"primary",children:"Primary"}),n(t,{type:"warning",children:"Warning"}),n(t,{type:"danger",children:"Danger"}),n(t,{type:"link",children:"Link"})]})},m={args:{disabled:!0},render:e=>a("div",{className:"flex gap-12",children:[n(t,{...e,type:"default",children:"Default"}),n(t,{...e,type:"primary",children:"Primary"}),n(t,{...e,type:"warning",children:"Warning"}),n(t,{...e,type:"danger",children:"Danger"}),n(t,{...e,type:"link",children:"Link"})]})},o={args:{ghost:!0},render:e=>a("div",{className:"flex gap-12",children:[n(t,{...e,type:"default",children:"Default"}),n(t,{...e,type:"primary",children:"Primary"}),n(t,{...e,type:"warning",children:"Warning"}),n(t,{...e,type:"danger",children:"Danger"}),n(t,{...e,type:"link",children:"Link"})]})},i={args:{glass:!0},render:e=>a("div",{className:"flex gap-12",children:[n(t,{...e,type:"default",children:"Default"}),n(t,{...e,type:"primary",children:"Primary"}),n(t,{...e,type:"warning",children:"Warning"}),n(t,{...e,type:"danger",children:"Danger"}),n(t,{...e,type:"link",children:"Link"})]})},y={args:{children:"Default",showOutline:!1}},l={render:e=>{const[r,s]=B.useState(!0);return a("div",{className:"flex col gap-12",children:[n("div",{children:a(t,{...e,onClick:()=>s(!r),children:["loading: ",r?"on":"off"]})}),a("div",{className:"flex gap-12",children:[n(t,{...e,loading:r,type:"default",children:"Default"}),n(t,{...e,loading:r,type:"primary",children:"Primary"}),n(t,{...e,loading:r,type:"warning",children:"Warning"}),n(t,{...e,loading:r,type:"danger",children:"Danger"}),n(t,{...e,loading:r,type:"link",children:"Link"})]}),a("div",{className:"flex gap-12",children:[n(t,{...e,loading:r,glass:!0,type:"default",children:"Default"}),n(t,{...e,loading:r,glass:!0,type:"primary",children:"Primary"}),n(t,{...e,loading:r,glass:!0,type:"warning",children:"Warning"}),n(t,{...e,loading:r,glass:!0,type:"danger",children:"Danger"}),n(t,{...e,loading:r,glass:!0,type:"link",children:"Link"})]}),a("div",{className:"flex gap-12",children:[n(t,{...e,loading:r,ghost:!0,type:"default",disabled:!0,children:"Default"}),n(t,{...e,loading:r,ghost:!0,type:"primary",children:"Primary"}),n(t,{...e,loading:r,ghost:!0,type:"warning",children:"Warning"}),n(t,{...e,loading:r,ghost:!0,type:"danger",children:"Danger"}),n(t,{...e,loading:r,ghost:!0,type:"link",children:"Link"})]})]})}},d={render:()=>n("div",{children:a(t,{className:"gap-12",children:[n(on,{size:16}),n("span",{children:"Text"}),n("span",{className:"fs-18",children:"fs-18"}),n(ln,{size:12})]})})},c={args:{},render:()=>{const[e,r]=B.useState(0),[s,sn]=B.useState([]);return a("div",{className:"flex row center-v gap-12",children:[n(t,{children:"Default"}),n(t,{cssVars:{btnRadius:e,btnOutlineColor:"red"},style:{zIndex:e},className:s,onClick:()=>{r(e+1),sn(s.concat(`add-class-${e}`))},children:"越点越圆"})]})}},u={args:{autoLoading:!0},render:e=>{async function r(){return new Promise(s=>setTimeout(s,2e3))}return a("div",{className:"flex gap-12",children:[n(t,{...e,type:"default",onClick:r,children:"Promise"}),n(t,{...e,type:"primary",onClick:r,children:"Promise"}),n(t,{...e,type:"primary",glass:!0,onClick:r,children:"Promise"}),n(t,{...e,type:"warning",glass:!0,onClick:r,children:"Promise"}),n(t,{...e,type:"danger",glass:!0,onClick:r,children:"Promise"})]})}};var h,f,k;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(k=(f=p.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,D,N;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>;
  }
}`,...(N=(D=g.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var x,P,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <Button {...args} type="link">
          Link
        </Button>
      </div>;
  }
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var L,w,S,W,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <Button {...args} type="link">
          Link
        </Button>
      </div>;
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"幽灵按钮",...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.description}}};var R,z,G,I,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        <Button {...args} type="link">
          Link
        </Button>
      </div>;
  }
}`,...(G=(z=i.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"玻璃按钮",...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var T,V,_;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    showOutline: false
  }
}`,...(_=(V=y.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var j,M,A,U,$;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          <Button {...args} loading={loading} type="link">
            Link
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
          <Button {...args} loading={loading} glass type="link">
            Link
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
          <Button {...args} loading={loading} ghost type="link">
            Link
          </Button>
        </div>
      </div>;
  }
}`,...(A=(M=l.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:`加载中状态

使用了 [Progress](/docs/components-progress--docs) 组件`,...($=(U=l.parameters)==null?void 0:U.docs)==null?void 0:$.description}}};var E,q,F,H,J;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"默认使用 flex 布局",...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"本 UI 库的大多数组件都接收 `props.cssVars` 来自定义样式\n详见 typedoc",...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var nn,en,tn,rn,an;u.parameters={...u.parameters,docs:{...(nn=u.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(tn=(en=u.parameters)==null?void 0:en.docs)==null?void 0:tn.source},description:{story:"如果 onClick 返回一个 Promise, 则自动添加 loading\n\n控制开关：`autoLoading`，默认为 `true`\n\n效果不错，不用担心动画性能，你的GPU参与了渲染",...(an=(rn=u.parameters)==null?void 0:rn.docs)==null?void 0:an.description}}};const kn=["基础示例","类型","禁用状态","Ghost","Glass","不显示外轮廓","Loading","居中测试","CssVars_深度自定义","AutoLoading"];export{u as AutoLoading,c as CssVars_深度自定义,o as Ghost,i as Glass,l as Loading,kn as __namedExportsOrder,fn as default,y as 不显示外轮廓,p as 基础示例,d as 居中测试,m as 禁用状态,g as 类型};
