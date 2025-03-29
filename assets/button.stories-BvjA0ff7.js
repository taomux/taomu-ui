import{j as a,a as n}from"./mini-scrollbar-1dk_y2Qh.js";import{R as f}from"./index-D4lIrffr.js";import{B as r}from"./button-V48wHozB.js";import{M as hn}from"./mail-ssTr-E9Y.js";import{S as fn}from"./sun-Chl-fKFA.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./index-BDZOM4eL.js";import"./index-B2-v9W4q.js";const Wn={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{}},g={args:{children:"Default"}},m={args:{},render:()=>a("div",{className:"flex gap-12",children:[n(r,{type:"default",children:"Default"}),n(r,{type:"primary",children:"Primary"}),n(r,{type:"warning",children:"Warning"}),n(r,{type:"danger",children:"Danger"}),n(r,{type:"link",children:"Link"})]})},y={args:{disabled:!0},render:e=>a("div",{className:"flex gap-12",children:[n(r,{...e,type:"default",children:"Default"}),n(r,{...e,type:"primary",children:"Primary"}),n(r,{...e,type:"warning",children:"Warning"}),n(r,{...e,type:"danger",children:"Danger"}),n(r,{...e,type:"link",children:"Link"})]})},o={args:{ghost:!0},render:e=>a("div",{className:"flex gap-12",children:[n(r,{...e,type:"default",children:"Default"}),n(r,{...e,type:"primary",children:"Primary"}),n(r,{...e,type:"warning",children:"Warning"}),n(r,{...e,type:"danger",children:"Danger"}),n(r,{...e,type:"link",children:"Link"})]})},i={args:{glass:!0},render:e=>a("div",{className:"flex gap-12",children:[n(r,{...e,type:"default",children:"Default"}),n(r,{...e,type:"primary",children:"Primary"}),n(r,{...e,type:"warning",children:"Warning"}),n(r,{...e,type:"danger",children:"Danger"}),n(r,{...e,type:"link",children:"Link"})]})},l={args:{dashed:!0},render:e=>a("div",{className:"flex gap-12",children:[n(r,{...e,type:"default",children:"Default"}),n(r,{...e,type:"primary",children:"Primary"}),n(r,{...e,type:"warning",children:"Warning"}),n(r,{...e,type:"danger",children:"Danger"}),n(r,{...e,type:"link",children:"Link"})]})},B={args:{children:"Default",showOutline:!1}},h={args:{children:"Default",block:!0},render:e=>n("div",{className:"flex gap-12",children:n(r,{...e,type:"default",ghost:!0,block:!0,children:"Default"})})},d={render:e=>{const[t,s]=f.useState(!0);return a("div",{className:"flex col gap-12",children:[n("div",{children:a(r,{...e,onClick:()=>s(!t),children:["loading: ",t?"on":"off"]})}),a("div",{className:"flex gap-12",children:[n(r,{...e,loading:t,type:"default",children:"Default"}),n(r,{...e,loading:t,type:"primary",children:"Primary"}),n(r,{...e,loading:t,type:"warning",children:"Warning"}),n(r,{...e,loading:t,type:"danger",children:"Danger"}),n(r,{...e,loading:t,type:"link",children:"Link"})]}),a("div",{className:"flex gap-12",children:[n(r,{...e,loading:t,glass:!0,type:"default",children:"Default"}),n(r,{...e,loading:t,glass:!0,type:"primary",children:"Primary"}),n(r,{...e,loading:t,glass:!0,type:"warning",children:"Warning"}),n(r,{...e,loading:t,glass:!0,type:"danger",children:"Danger"}),n(r,{...e,loading:t,glass:!0,type:"link",children:"Link"})]}),a("div",{className:"flex gap-12",children:[n(r,{...e,loading:t,ghost:!0,type:"default",disabled:!0,children:"Default"}),n(r,{...e,loading:t,ghost:!0,type:"primary",children:"Primary"}),n(r,{...e,loading:t,ghost:!0,type:"warning",children:"Warning"}),n(r,{...e,loading:t,ghost:!0,type:"danger",children:"Danger"}),n(r,{...e,loading:t,ghost:!0,type:"link",children:"Link"})]})]})}},c={render:()=>n("div",{children:a(r,{className:"gap-12",children:[n(hn,{size:16}),n("span",{children:"Text"}),n("span",{className:"fs-18",children:"fs-18"}),n(fn,{size:12})]})})},u={args:{},render:()=>{const[e,t]=f.useState(0),[s,Bn]=f.useState([]);return a("div",{className:"flex row center-v gap-12",children:[n(r,{children:"Default"}),n(r,{cssVars:{btnRadius:e,btnOutlineColor:"red"},style:{zIndex:e},className:s,onClick:()=>{t(e+1),Bn(s.concat(`add-class-${e}`))},children:"越点越圆"})]})}},p={args:{autoLoading:!0},render:e=>{async function t(){return new Promise(s=>setTimeout(s,2e3))}return a("div",{className:"flex gap-12",children:[n(r,{...e,type:"default",onClick:t,children:"Promise"}),n(r,{...e,type:"primary",onClick:t,children:"Promise"}),n(r,{...e,type:"primary",glass:!0,onClick:t,children:"Promise"}),n(r,{...e,type:"warning",glass:!0,onClick:t,children:"Promise"}),n(r,{...e,type:"danger",glass:!0,onClick:t,children:"Promise"})]})}};var k,v,D;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(D=(v=g.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var N,x,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var C,L,w;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(L=y.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var S,W,b,R,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source},description:{story:"幽灵按钮",...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var G,I,O,T,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"玻璃按钮",...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var _,j,M,A,U;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <Button {...args} type="link">
          Link
        </Button>
      </div>;
  }
}`,...(M=(j=l.parameters)==null?void 0:j.docs)==null?void 0:M.source},description:{story:"虚线边框",...(U=(A=l.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};var $,E,q;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    showOutline: false
  }
}`,...(q=(E=B.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var F,H,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X,Y,Z;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`加载中状态

使用了 [Progress](/docs/components-progress--docs) 组件`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var nn,en,rn,tn,an;c.parameters={...c.parameters,docs:{...(nn=c.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(rn=(en=c.parameters)==null?void 0:en.docs)==null?void 0:rn.source},description:{story:"默认使用 flex 布局",...(an=(tn=c.parameters)==null?void 0:tn.docs)==null?void 0:an.description}}};var sn,on,ln,dn,cn;u.parameters={...u.parameters,docs:{...(sn=u.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=u.parameters)==null?void 0:on.docs)==null?void 0:ln.source},description:{story:"本 UI 库的大多数组件都接收 `props.cssVars` 来自定义样式\n详见 typedoc",...(cn=(dn=u.parameters)==null?void 0:dn.docs)==null?void 0:cn.description}}};var un,pn,gn,mn,yn;p.parameters={...p.parameters,docs:{...(un=p.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(gn=(pn=p.parameters)==null?void 0:pn.docs)==null?void 0:gn.source},description:{story:"如果 onClick 返回一个 Promise, 则自动添加 loading\n\n控制开关：`autoLoading`，默认为 `true`\n\n效果不错，不用担心动画性能，你的GPU参与了渲染",...(yn=(mn=p.parameters)==null?void 0:mn.docs)==null?void 0:yn.description}}};const bn=["基础示例","类型","禁用状态","Ghost","Glass","Dashed","不显示外轮廓","Block","Loading","居中测试","CssVars_深度自定义","AutoLoading"];export{p as AutoLoading,h as Block,u as CssVars_深度自定义,l as Dashed,o as Ghost,i as Glass,d as Loading,bn as __namedExportsOrder,Wn as default,B as 不显示外轮廓,g as 基础示例,c as 居中测试,y as 禁用状态,m as 类型};
