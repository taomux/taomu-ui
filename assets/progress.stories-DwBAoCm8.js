import{j as o,a as e}from"./mini-scrollbar-BUn1XUoF.js";import{R as P}from"./index-l2PZgWEW.js";import"./index-Cz-o97uH.js";import{P as s,B as a}from"./button-qJzTgKsm.js";import"./jsx-runtime-DWbWqHZ-.js";import"./use-taomu-classname-CPnLGqwq.js";import"./index-zbzXvoZu.js";const er={title:"Components/Progress",component:s,tags:["autodocs"],argTypes:{}},d={args:{progress:75,children:"Text..."}},c={args:{progress:75,striped:!0,children:"Text..."},render:r=>o("div",{className:"flex col gap-16",children:[e(s,{...r}),e(s,{...r,animated:!1})]})},p={args:{striped:!0,progress:75,children:"Text..."},render:r=>o("div",{className:"flex col gap-16",children:[e(s,{...r,cssVars:{progressSpeed:"1s"}}),e(s,{...r,cssVars:{progressSpeed:"0.3s"}}),e(s,{...r,cssVars:{progressSpeed:"100ms"}})]})},g={args:{progress:75},render:r=>o("div",{className:"flex col gap-16",children:[e(s,{...r}),e(s,{...r,striped:!0}),e(s,{...r,type:"success"}),e(s,{...r,type:"success",striped:!0}),e(s,{...r,type:"info"}),e(s,{...r,type:"info",striped:!0}),e(s,{...r,type:"warning"}),e(s,{...r,type:"warning",striped:!0}),e(s,{...r,type:"error"}),e(s,{...r,type:"error",striped:!0}),e(s,{...r,type:"gray"}),e(s,{...r,type:"gray",striped:!0})]})},u={args:{striped:!0,progress:75},render:r=>o("div",{className:"flex col gap-16",children:[e(s,{...r,width:500,height:100}),e(s,{...r,width:"50%"}),e(s,{...r,width:500,height:4,cssVars:{progressStripedSize:10,progressSpeed:"200ms"}})]})},l={args:{striped:!0,progress:75},render:r=>o("div",{className:"flex col gap-16",children:[e(s,{...r}),e(s,{...r,stripedAnimationReverse:!0}),e(s,{...r,stripedReverse:!0}),e(s,{...r,stripedReverse:!0,stripedAnimationReverse:!0})]})},m={args:{striped:!0,progress:45,width:500,height:30,cssVars:{progressRadius:0,progressBarRadius:0,progressColor:"#09c",progressBackgroundMixinColor:"#2c49ba",progressStripedSize:"100px"},children:"Text..."}},h={args:{striped:!0},render:r=>{const[n,i]=P.useState(0),[f,J]=P.useState(!0);function K(){let t=n+10;t>100&&(t=0),i(t)}function L(){let t=n-10;t<0&&(t=100),i(t)}async function v(t=100){for(let x=0;x<=t;x++)i(x*(100/t)),await new Promise(Q=>setTimeout(Q,1e3/t))}return o("div",{className:"flex col gap-12",children:[o("div",{className:"flex row gap-12",children:[e(a,{onClick:K,children:"Add"}),e(a,{onClick:L,children:"Reduce"}),e(a,{onClick:()=>{i(Math.floor(Math.random()*100))},children:"Random"}),e(a,{onClick:()=>v(10),children:"AutoAdd"})]}),o("div",{children:[e("p",{children:"高密度情况下应该关闭过渡动画"}),o("div",{className:"flex row gap-12",children:[e(a,{onClick:()=>v(),children:"AutoAdd"}),o(a,{onClick:()=>J(!f),children:["transition: ",f?"on":"off"]})]})]}),o(s,{...r,progress:n,transition:f,children:[n,"%"]})]})}};var S,y,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    progress: 75,
    children: 'Text...'
  }
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var R,A,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    progress: 75,
    striped: true,
    children: 'Text...'
  },
  render: args => {
    return <div className="flex col gap-16">
        <Progress {...args} />
        <Progress {...args} animated={false} />
      </div>;
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var C,N,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    striped: true,
    progress: 75,
    children: 'Text...'
  },
  render: args => {
    return <div className="flex col gap-16">
        <Progress {...args} cssVars={{
        progressSpeed: '1s'
      }} />
        <Progress {...args} cssVars={{
        progressSpeed: '0.3s'
      }} />
        <Progress {...args} cssVars={{
        progressSpeed: '100ms'
      }} />
      </div>;
  }
}`,...(k=(N=p.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var T,V,M;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    progress: 75
  },
  render: args => {
    return <div className="flex col gap-16">
        <Progress {...args} />
        <Progress {...args} striped />
        <Progress {...args} type="success" />
        <Progress {...args} type="success" striped />
        <Progress {...args} type="info" />
        <Progress {...args} type="info" striped />
        <Progress {...args} type="warning" />
        <Progress {...args} type="warning" striped />
        <Progress {...args} type="error" />
        <Progress {...args} type="error" striped />
        <Progress {...args} type="gray" />
        <Progress {...args} type="gray" striped />
      </div>;
  }
}`,...(M=(V=g.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var z,j,b;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    striped: true,
    progress: 75
  },
  render: args => {
    return <div className="flex col gap-16">
        <Progress {...args} width={500} height={100} />
        <Progress {...args} width={'50%'} />
        <Progress {...args} width={500} height={4} cssVars={{
        progressStripedSize: 10,
        progressSpeed: '200ms'
      }} />
      </div>;
  }
}`,...(b=(j=u.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var _,E,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    striped: true,
    progress: 75
  },
  render: args => {
    return <div className="flex col gap-16">
        <Progress {...args} />
        <Progress {...args} stripedAnimationReverse />
        <Progress {...args} stripedReverse />
        <Progress {...args} stripedReverse stripedAnimationReverse />
      </div>;
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var q,D,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    striped: true,
    progress: 45,
    width: 500,
    height: 30,
    cssVars: {
      progressRadius: 0,
      progressBarRadius: 0,
      progressColor: '#09c',
      progressBackgroundMixinColor: '#2c49ba',
      progressStripedSize: '100px'
    },
    children: 'Text...'
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,H,I;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: args => {
    const [progress, setProgress] = React.useState(0);
    const [transition, setTransition] = React.useState(true);
    function add() {
      let next = progress + 10;
      if (next > 100) {
        next = 0;
      }
      setProgress(next);
    }
    function reduce() {
      let next = progress - 10;
      if (next < 0) {
        next = 100;
      }
      setProgress(next);
    }
    async function autoAdd(count = 100) {
      for (let i = 0; i <= count; i++) {
        setProgress(i * (100 / count));
        await new Promise(resolve => setTimeout(resolve, 1000 / count));
      }
    }
    return <div className="flex col gap-12">
        <div className="flex row gap-12">
          <Button onClick={add}>Add</Button>
          <Button onClick={reduce}>Reduce</Button>
          <Button onClick={() => {
          setProgress(Math.floor(Math.random() * 100));
        }}>
            Random
          </Button>
          <Button onClick={() => autoAdd(10)}>AutoAdd</Button>
        </div>

        <div>
          <p>高密度情况下应该关闭过渡动画</p>
          <div className="flex row gap-12">
            <Button onClick={() => autoAdd()}>AutoAdd</Button>
            <Button onClick={() => setTransition(!transition)}>transition: {transition ? 'on' : 'off'}</Button>
          </div>
        </div>

        <Progress {...args} progress={progress} transition={transition}>
          {progress}%
        </Progress>
      </div>;
  }
}`,...(I=(H=h.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const sr=["基础示例","条纹","条纹动画速度","类型","尺寸","反转","更多自定义","动态效果"];export{sr as __namedExportsOrder,er as default,h as 动态效果,l as 反转,d as 基础示例,u as 尺寸,m as 更多自定义,c as 条纹,p as 条纹动画速度,g as 类型};
