import{j as a,a as e}from"./mini-scrollbar-1dk_y2Qh.js";import{R as v}from"./index-D4lIrffr.js";import{B as n}from"./button-B9za9TDP.js";import{M as Ce}from"./mail-ssTr-E9Y.js";import{S as Se}from"./sun-Chl-fKFA.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./index-BDZOM4eL.js";import"./index-B2-v9W4q.js";const _e={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{}},m={args:{children:"Default"}},y={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{type:"default",children:"Default"}),e(n,{type:"primary",children:"Primary"}),e(n,{type:"warning",children:"Warning"}),e(n,{type:"danger",children:"Danger"}),e(n,{type:"text",children:"Text"})]})},o={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{type:"default",hoverType:"primary",children:"Default"}),e(n,{type:"primary",hoverType:"danger",children:"Primary"}),e(n,{type:"warning",hoverType:"primary",children:"Warning"}),e(n,{type:"danger",hoverType:"default",children:"Danger"}),e(n,{type:"text",hoverType:"default",glass:!0,children:"Text"}),e(n,{type:"text",hoverType:"primary",ghost:!0,children:"Text"}),e(n,{type:"text",hoverType:"danger",glass:!0,children:"Text"})]})},B={args:{disabled:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},h={args:{},render:()=>a("div",{className:"flex gap-12",children:[e(n,{round:!0,children:"Default"}),e(n,{radius:0,children:"Default"}),e(n,{radius:4,children:"Default"}),e(n,{radius:12,children:"Default"})]})},i={args:{ghost:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},d={args:{glass:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},l={args:{dashed:!0},render:t=>a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",children:"Default"}),e(n,{...t,type:"primary",children:"Primary"}),e(n,{...t,type:"warning",children:"Warning"}),e(n,{...t,type:"danger",children:"Danger"}),e(n,{...t,type:"text",children:"Text"})]})},f={args:{children:"Default",showOutline:!1}},x={args:{children:"Default",block:!0},render:t=>e("div",{className:"flex gap-12",children:e(n,{...t,type:"default",ghost:!0,block:!0,children:"Default"})})},u={render:t=>{const[r,s]=v.useState(!0);return a("div",{className:"flex col gap-12",children:[e("div",{children:a(n,{...t,onClick:()=>s(!r),children:["loading: ",r?"on":"off"]})}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,type:"default",children:"Default"}),e(n,{...t,loading:r,type:"primary",children:"Primary"}),e(n,{...t,loading:r,type:"warning",children:"Warning"}),e(n,{...t,loading:r,type:"danger",children:"Danger"}),e(n,{...t,loading:r,type:"text",children:"Text"})]}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,glass:!0,type:"default",children:"Default"}),e(n,{...t,loading:r,glass:!0,type:"primary",children:"Primary"}),e(n,{...t,loading:r,glass:!0,type:"warning",children:"Warning"}),e(n,{...t,loading:r,glass:!0,type:"danger",children:"Danger"}),e(n,{...t,loading:r,glass:!0,type:"text",children:"Text"})]}),a("div",{className:"flex gap-12",children:[e(n,{...t,loading:r,ghost:!0,type:"default",disabled:!0,children:"Default"}),e(n,{...t,loading:r,ghost:!0,type:"primary",children:"Primary"}),e(n,{...t,loading:r,ghost:!0,type:"warning",children:"Warning"}),e(n,{...t,loading:r,ghost:!0,type:"danger",children:"Danger"}),e(n,{...t,loading:r,ghost:!0,type:"text",children:"Text"})]})]})}},c={render:()=>e("div",{children:a(n,{className:"gap-12",children:[e(Ce,{size:16}),e("span",{children:"Text"}),e("span",{className:"fs-18",children:"fs-18"}),e(Se,{size:12})]})})},p={args:{},render:()=>{const[t,r]=v.useState(0),[s,we]=v.useState([]);return a("div",{className:"flex row center-v gap-12",children:[e(n,{children:"Default"}),e(n,{cssVars:{btnRadius:t,btnOutlineColor:"red"},style:{zIndex:t},className:s,onClick:()=>{r(t+1),we(s.concat(`add-class-${t}`))},children:"越点越圆"})]})}},g={args:{autoLoading:!0},render:t=>{async function r(){return new Promise(s=>setTimeout(s,2e3))}return a("div",{className:"flex gap-12",children:[e(n,{...t,type:"default",onClick:r,children:"Promise"}),e(n,{...t,type:"primary",onClick:r,children:"Promise"}),e(n,{...t,type:"primary",glass:!0,onClick:r,children:"Promise"}),e(n,{...t,type:"warning",glass:!0,onClick:r,children:"Promise"}),e(n,{...t,type:"danger",glass:!0,onClick:r,children:"Promise"})]})}};var D,T,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var P,w,C;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(w=y.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,k,W,b,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source},description:{story:"使用 hoverType 在鼠标悬停时从一个类型过渡到另一个类型",...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.description}}};var R,z,G;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(z=B.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var I,O,V;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex gap-12">
        <Button round>Default</Button>
        <Button radius={0}>Default</Button>
        <Button radius={4}>Default</Button>
        <Button radius={12}>Default</Button>
      </div>;
  }
}`,...(V=(O=h.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,j,M,A,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source},description:{story:"幽灵按钮",...(H=(A=i.parameters)==null?void 0:A.docs)==null?void 0:H.description}}};var U,$,E,q,F;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=($=d.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"玻璃按钮",...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var J,K,Q,X,Y;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"虚线边框",...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ne;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    showOutline: false
  }
}`,...(ne=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,ie,de,le;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:`加载中状态

使用了 [Progress](/docs/components-progress--docs) 组件`,...(le=(de=u.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};var ue,ce,pe,ge,me;c.parameters={...c.parameters,docs:{...(ue=c.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=c.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"默认使用 flex 布局",...(me=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:me.description}}};var ye,Be,he,fe,xe;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(Be=p.parameters)==null?void 0:Be.docs)==null?void 0:he.source},description:{story:"本 UI 库的大多数组件都接收 `props.cssVars` 来自定义样式\n详见 typedoc",...(xe=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:xe.description}}};var ve,De,Te,Ne,Pe;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Te=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Te.source},description:{story:"如果 onClick 返回一个 Promise, 则自动添加 loading\n\n控制开关：`autoLoading`，默认为 `true`\n\n效果不错，不用担心动画性能，你的GPU参与了渲染",...(Pe=(Ne=g.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.description}}};const je=["基础示例","类型","HoverType","禁用状态","圆角","Ghost","Glass","Dashed","不显示外轮廓","Block","Loading","居中测试","CssVars_深度自定义","AutoLoading"];export{g as AutoLoading,x as Block,p as CssVars_深度自定义,l as Dashed,i as Ghost,d as Glass,o as HoverType,u as Loading,je as __namedExportsOrder,_e as default,f as 不显示外轮廓,h as 圆角,m as 基础示例,c as 居中测试,B as 禁用状态,y as 类型};
