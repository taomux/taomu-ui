import{a as r,j as i}from"./mini-scrollbar-DFcjLXiE.js";import{R as n}from"./index-D4lIrffr.js";import"./index-CW14urU_.js";import{T as c}from"./index-BPX1WxqX.js";import{B as y}from"./button-DM2Pr_ZD.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-CPr58zXM.js";import"./global-vars-hpilZV8k.js";const z={title:"Components/Transition",component:c,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"动画辅助组件，用于控制内部元素的出入场过渡动画"}}}},s={args:{show:!0,children:r("div",{children:"Element"})}},t={render:()=>{const e=n.useRef(null),[o,R]=n.useState(!1);return n.useEffect(()=>{e.current&&console.log("get nodeRef",e.current)},[e.current]),i("div",{children:[r("div",{className:"mb-12",children:i(y,{onClick:()=>R(!o),children:["show: ",o+""]})}),r(c,{show:o,proxyRef:e,animationConfig:"fade",children:r("div",{className:"bg-primary p-24 br-4 shadow-md border rect-1",children:"Element"})})]})}},a={render:()=>{const[e,o]=n.useState(!1);return i("div",{children:[r("div",{className:"mb-12",children:i(y,{onClick:()=>o(!e),children:["show: ",e+""]})}),r(c,{show:e,animationConfig:{enter:{keyframes:[{transform:"translate3d(100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"}},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(-100%, 0, 0)",opacity:0}],options:{duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"}}},children:r("div",{className:"bg-primary p-24 br-4 shadow-md border rect-1",children:"Element"})})]})}};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    show: true,
    children: <div>Element</div>
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,f,u,h,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      if (!nodeRef.current) return;
      console.log('get nodeRef', nodeRef.current);
    }, [nodeRef.current]);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setShow(!show)}>show: {show + ''}</Button>
        </div>
        <Transition show={show} proxyRef={nodeRef} animationConfig="fade">
          <div className="bg-primary p-24 br-4 shadow-md border rect-1">Element</div>
        </Transition>
      </div>;
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source},description:{story:"`children.ref` 将在内部被更改，即使传入也不会生效，但 `Transition` 接收 `proxyRef` 代理 `children.ref`",...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var b,v,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = React.useState(false);
    return <div>
        <div className="mb-12">
          <Button onClick={() => setShow(!show)}>show: {show + ''}</Button>
        </div>
        <Transition show={show} animationConfig={{
        enter: {
          keyframes: [{
            transform: 'translate3d(100%, 0, 0)',
            opacity: 0
          }, {
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
          }],
          options: {
            duration: 600,
            easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)'
          }
        },
        leave: {
          keyframes: [{
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
          }, {
            transform: 'translate3d(-100%, 0, 0)',
            opacity: 0
          }],
          options: {
            duration: 600,
            easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)'
          }
        }
      }}>
          <div className="bg-primary p-24 br-4 shadow-md border rect-1">Element</div>
        </Transition>
      </div>;
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const j=["基础示例","动态示例","自定义动画函数"];export{j as __namedExportsOrder,z as default,t as 动态示例,s as 基础示例,a as 自定义动画函数};
