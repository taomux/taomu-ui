import{V as c,a as r,e as n,j as i,B as d}from"./iframe-D6mQ9x1r.js";const u={title:"Components/Transition",component:c,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"动画辅助组件，用于控制内部元素的出入场过渡动画"}}}},t={args:{show:!0,children:r("div",{children:"Element"})}},o={render:()=>{const e=n.useRef(null),[s,m]=n.useState(!1);return n.useEffect(()=>{e.current&&console.log("get nodeRef",e.current)},[e.current]),i("div",{children:[r("div",{className:"mb-12",children:i(d,{onClick:()=>m(!s),children:["show: ",s+""]})}),r(c,{show:s,proxyRef:e,animationConfig:"fade",children:r("div",{className:"bg-primary p-24 br-4 shadow-md border rect-1",children:"Element"})})]})}},a={render:()=>{const[e,s]=n.useState(!1);return i("div",{children:[r("div",{className:"mb-12",children:i(d,{onClick:()=>s(!e),children:["show: ",e+""]})}),r(c,{show:e,animationConfig:{enter:{keyframes:[{transform:"translate3d(100%, 0, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}],options:{duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"}},leave:{keyframes:[{transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(-100%, 0, 0)",opacity:0}],options:{duration:600,easing:"cubic-bezier(0.175, 0.82, 0.265, 1)"}}},children:r("div",{className:"bg-primary p-24 br-4 shadow-md border rect-1",children:"Element"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    show: true,
    children: <div>Element</div>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"`children.ref` 将在内部被更改，即使传入也不会生效，但 `Transition` 接收 `proxyRef` 代理 `children.ref`",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const p=["基础示例","动态示例","自定义动画函数"];export{p as __namedExportsOrder,u as default,o as 动态示例,t as 基础示例,a as 自定义动画函数};
