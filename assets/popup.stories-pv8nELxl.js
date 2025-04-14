import{j as p,a as o}from"./mini-scrollbar-1dk_y2Qh.js";import{R as C}from"./index-D4lIrffr.js";import"./index-B4qrdscw.js";import"./index-CMKHHU4h.js";import{b as i,c as G,d as K}from"./popup-trigger-DHttIfv7.js";import{B as n}from"./button-B9za9TDP.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./use-custom-event-BYXfsBOj.js";import"./popup.store-CZruyQcO.js";function X(e,{destroyOnUnmount:t=!0,...r}={}){const c=C.useRef(new i(e,r));return C.useEffect(()=>()=>{t&&c.current.destroy()},[]),c.current}const it={title:"Components/Popup",component:G,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`弹层核心

只支持使用函数打开

不提供 JSX 渲染后通过状态控制是否显示的方案。`}}}},l={render:()=>{function e(){new i(()=>o("div",{className:"bg-background shadow-md p-24",children:"content"})).open()}return p("div",{className:"flex gap-12",children:[o(n,{onClick:()=>e(),children:"open一个"}),o(n,{onClick:K,children:"close All"})]})}},u={render:()=>o(()=>{const[t,r]=C.useState(0);C.useEffect(()=>{c.dispatchUpdate({contentCount:t})},[t]);const c=X(({contentCount:z})=>p("div",{className:"bg-background shadow-md p-24 br-8 border rect-1",children:["content",p("div",{children:["contentCount: ",z]})]}),{positionType:"center",clickToClose:!1});function q(){r(t+1)}return p("div",{className:"flex gap-12",children:[o(n,{onClick:()=>c.open({contentCount:t}),children:"open一个"}),o(n,{onClick:()=>c.close(),children:"close"}),p(n,{onClick:q,children:["updateCount: ",t]})]})},{})},s={render(){function e(t){new i(()=>o("div",{className:"bg-background br-4 shadow-md p-24 border rect-1",children:"content"}),{positionType:t}).open()}return p("div",{className:"flex gap-12 flex-wrap",children:[o(n,{onClick:()=>e(),children:"default"}),o(n,{onClick:()=>e("center"),children:"center"}),o(n,{onClick:()=>e("center-top"),children:"center-top"}),o(n,{onClick:()=>e("center-bottom"),children:"center-bottom"}),o(n,{onClick:()=>e("left"),children:"left"}),o(n,{onClick:()=>e("left-center"),children:"left-center"}),o(n,{onClick:()=>e("left-top"),children:"left-top"}),o(n,{onClick:()=>e("left-bottom"),children:"left-bottom"}),o(n,{onClick:()=>e("right"),children:"right"}),o(n,{onClick:()=>e("right-center"),children:"right-center"}),o(n,{onClick:()=>e("right-top"),children:"right-top"}),o(n,{onClick:()=>e("right-bottom"),children:"right-bottom"}),o(n,{onClick:()=>e("top"),children:"top"}),o(n,{onClick:()=>e("top-center"),children:"top-center"}),o(n,{onClick:()=>e("top-left"),children:"top-left"}),o(n,{onClick:()=>e("top-right"),children:"top-right"}),o(n,{onClick:()=>e("bottom"),children:"bottom"}),o(n,{onClick:()=>e("bottom-center"),children:"bottom-center"}),o(n,{onClick:()=>e("bottom-left"),children:"bottom-left"}),o(n,{onClick:()=>e("bottom-right"),children:"bottom-right"})]})}},a={render(){function e(t,r){new i(()=>o("div",{className:"bg-background br-4 shadow-md p-24 border rect-1",style:{height:100},children:"content"}),{overlay:!1,positionType:r,positionTargetElement:t.currentTarget,autoFixPosition:!0}).open()}return p("div",{className:"flex gap-12 flex-wrap",children:[o(n,{onClick:t=>e(t),children:"default"}),o(n,{disabled:!0,children:"center(不支持)"}),o(n,{onClick:t=>e(t,"center-top"),children:"center-top"}),o(n,{onClick:t=>e(t,"center-bottom"),children:"center-bottom"}),o(n,{onClick:t=>e(t,"left"),children:"left"}),o(n,{onClick:t=>e(t,"left-center"),children:"left-center"}),o(n,{onClick:t=>e(t,"left-top"),children:"left-top"}),o(n,{onClick:t=>e(t,"left-bottom"),children:"left-bottom"}),o(n,{onClick:t=>e(t,"right"),children:"right"}),o(n,{onClick:t=>e(t,"right-center"),children:"right-center"}),o(n,{onClick:t=>e(t,"right-top"),children:"right-top"}),o(n,{onClick:t=>e(t,"right-bottom"),children:"right-bottom"}),o(n,{onClick:t=>e(t,"top"),children:"top"}),o(n,{onClick:t=>e(t,"top-center"),children:"top-center"}),o(n,{onClick:t=>e(t,"top-left"),children:"top-left"}),o(n,{onClick:t=>e(t,"top-right"),children:"top-right"}),o(n,{onClick:t=>e(t,"bottom"),children:"bottom"}),o(n,{onClick:t=>e(t,"bottom-center"),children:"bottom-center"}),o(n,{onClick:t=>e(t,"bottom-left"),children:"bottom-left"}),o(n,{onClick:t=>e(t,"bottom-right"),children:"bottom-right"})]})}},d={render(){function e(t,r){new i(()=>o("div",{className:"bg-background br-4 shadow-md p-24 border rect-1",style:{height:50},children:"content"}),{overlay:!1,positionType:r,positionTargetElement:t.currentTarget,autoFixPosition:!0,edgeOffset:8}).open()}return p("div",{className:"flex gap-12 flex-wrap",style:{padding:100},children:[o(n,{onClick:t=>e(t),children:"default"}),o(n,{disabled:!0,children:"center(不支持)"}),o(n,{onClick:t=>e(t,"center-top"),children:"center-top"}),o(n,{onClick:t=>e(t,"center-bottom"),children:"center-bottom"}),o(n,{onClick:t=>e(t,"left"),children:"left"}),o(n,{onClick:t=>e(t,"left-center"),children:"left-center"}),o(n,{onClick:t=>e(t,"left-top"),children:"left-top"}),o(n,{onClick:t=>e(t,"left-bottom"),children:"left-bottom"}),o(n,{onClick:t=>e(t,"right"),children:"right"}),o(n,{onClick:t=>e(t,"right-center"),children:"right-center"}),o(n,{onClick:t=>e(t,"right-top"),children:"right-top"}),o(n,{onClick:t=>e(t,"right-bottom"),children:"right-bottom"}),o(n,{onClick:t=>e(t,"top"),children:"top"}),o(n,{onClick:t=>e(t,"top-center"),children:"top-center"}),o(n,{onClick:t=>e(t,"top-left"),children:"top-left"}),o(n,{onClick:t=>e(t,"top-right"),children:"top-right"}),o(n,{onClick:t=>e(t,"bottom"),children:"bottom"}),o(n,{onClick:t=>e(t,"bottom-center"),children:"bottom-center"}),o(n,{onClick:t=>e(t,"bottom-left"),children:"bottom-left"}),o(n,{onClick:t=>e(t,"bottom-right"),children:"bottom-right"})]})}},m={render:()=>o(()=>{const t=X(({contentCount:r})=>p("div",{className:"bg-background shadow-md p-24 br-8 border rect-1",children:["content",p("div",{children:["contentCount: ",r]})]}),{positionType:"center",lockScroll:!0});return o("div",{className:"flex gap-12",children:o(n,{onClick:()=>t.open(),children:"open一个"})})},{})},h={render:()=>{function e(){new i(()=>o("div",{className:"bg-background shadow-md p-24",children:"content"}),{contentAnimationConfig:!1,overlayAnimationConfig:!1,onBeforeEnter:r=>{console.log("onBeforeEnter",r)},onEnter:r=>{console.log("onEnter",r)},onBeforeLeave:r=>{console.log("onBeforeLeave",r)},onLeave:()=>{console.log("onLeave")}}).open()}return o("div",{className:"flex gap-12",children:o(n,{onClick:()=>e(),children:"open一个"})})}};var g,f,k,B,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    function openPopup() {
      const demoPopup = new PopupPortal(() => {
        return <div className="bg-background shadow-md p-24">content</div>;
      });
      demoPopup.open();
    }
    return <div className="flex gap-12">
        <Button onClick={() => openPopup()}>open一个</Button>
        <Button onClick={closeAllPopups}>close All</Button>
      </div>;
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"使用 `new PopupPortal()` 创建一个弹层实例，随后使用 `.open()` 打开",...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var P,v,R,w,y;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const DemoPopup = () => {
      const [count, setCount] = React.useState(0);
      React.useEffect(() => {
        popup.dispatchUpdate({
          contentCount: count
        });
      }, [count]);
      const popup = usePopup<{
        contentCount: number;
      }>(({
        contentCount
      }) => {
        return <div className="bg-background shadow-md p-24 br-8 border rect-1">
              content
              <div>contentCount: {contentCount}</div>
            </div>;
      }, {
        positionType: 'center',
        clickToClose: false
      });
      function updateCount() {
        setCount(count + 1);
      }
      return <div className="flex gap-12">
          <Button onClick={() => popup.open({
          contentCount: count
        })}>open一个</Button>
          <Button onClick={() => popup.close()}>close</Button>
          <Button onClick={updateCount}>updateCount: {count}</Button>
        </div>;
    };
    return <DemoPopup />;
  }
}`,...(R=(v=u.parameters)==null?void 0:v.docs)==null?void 0:R.source},description:{story:"推荐的方案\n\n使用 `usePopup()` 是单例模式，它返回一个 `PopupPortal` 实例，但在整个组件生命周期中只初始化一次\n\n单例模式下弹层内的 state 是独立的，你需要调用 `.dispatchUpdate()` 才能更新内部 state\n\n此用法会在组件销毁时自动销毁弹层，否则你可能需要手动关闭",...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var x,N,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render() {
    function openPopup(positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(() => {
        return <div className="bg-background br-4 shadow-md p-24 border rect-1">content</div>;
      }, {
        positionType
      });
      demoPopup.open();
    }
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={() => openPopup()}>default</Button>
        <Button onClick={() => openPopup('center')}>center</Button>
        <Button onClick={() => openPopup('center-top')}>center-top</Button>
        <Button onClick={() => openPopup('center-bottom')}>center-bottom</Button>
        <Button onClick={() => openPopup('left')}>left</Button>
        <Button onClick={() => openPopup('left-center')}>left-center</Button>
        <Button onClick={() => openPopup('left-top')}>left-top</Button>
        <Button onClick={() => openPopup('left-bottom')}>left-bottom</Button>
        <Button onClick={() => openPopup('right')}>right</Button>
        <Button onClick={() => openPopup('right-center')}>right-center</Button>
        <Button onClick={() => openPopup('right-top')}>right-top</Button>
        <Button onClick={() => openPopup('right-bottom')}>right-bottom</Button>
        <Button onClick={() => openPopup('top')}>top</Button>
        <Button onClick={() => openPopup('top-center')}>top-center</Button>
        <Button onClick={() => openPopup('top-left')}>top-left</Button>
        <Button onClick={() => openPopup('top-right')}>top-right</Button>
        <Button onClick={() => openPopup('bottom')}>bottom</Button>
        <Button onClick={() => openPopup('bottom-center')}>bottom-center</Button>
        <Button onClick={() => openPopup('bottom-left')}>bottom-left</Button>
        <Button onClick={() => openPopup('bottom-right')}>bottom-right</Button>
      </div>;
  }
}`,...(T=(N=s.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var E,S,L,A,D;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render() {
    function openPopupRelative(e: React.MouseEvent<Element>, positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(() => {
        return <div className="bg-background br-4 shadow-md p-24 border rect-1" style={{
          height: 100
        }}>
              content
            </div>;
      }, {
        overlay: false,
        positionType,
        positionTargetElement: e.currentTarget as HTMLElement,
        autoFixPosition: true
      });
      demoPopup.open();
    }
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={e => openPopupRelative(e)}>default</Button>
        <Button disabled>center(不支持)</Button>
        <Button onClick={e => openPopupRelative(e, 'center-top')}>center-top</Button>
        <Button onClick={e => openPopupRelative(e, 'center-bottom')}>center-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'left')}>left</Button>
        <Button onClick={e => openPopupRelative(e, 'left-center')}>left-center</Button>
        <Button onClick={e => openPopupRelative(e, 'left-top')}>left-top</Button>
        <Button onClick={e => openPopupRelative(e, 'left-bottom')}>left-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'right')}>right</Button>
        <Button onClick={e => openPopupRelative(e, 'right-center')}>right-center</Button>
        <Button onClick={e => openPopupRelative(e, 'right-top')}>right-top</Button>
        <Button onClick={e => openPopupRelative(e, 'right-bottom')}>right-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'top')}>top</Button>
        <Button onClick={e => openPopupRelative(e, 'top-center')}>top-center</Button>
        <Button onClick={e => openPopupRelative(e, 'top-left')}>top-left</Button>
        <Button onClick={e => openPopupRelative(e, 'top-right')}>top-right</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom')}>bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-center')}>bottom-center</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-left')}>bottom-left</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-right')}>bottom-right</Button>
      </div>;
  }
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:"传入 `positionTargetElement` 启用相对位置\n\n自动动态位置修正，窗口大小变更和body滚动会自动修正弹层位置，通过 autoFixPosition 控制，默认启用",...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var F,U,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render() {
    function openPopupRelative(e: React.MouseEvent<Element>, positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(() => {
        return <div className="bg-background br-4 shadow-md p-24 border rect-1" style={{
          height: 50
        }}>
              content
            </div>;
      }, {
        overlay: false,
        positionType,
        positionTargetElement: e.currentTarget as HTMLElement,
        autoFixPosition: true,
        edgeOffset: 8
      });
      demoPopup.open();
    }
    return <div className="flex gap-12 flex-wrap" style={{
      padding: 100
    }}>
        <Button onClick={e => openPopupRelative(e)}>default</Button>
        <Button disabled>center(不支持)</Button>
        <Button onClick={e => openPopupRelative(e, 'center-top')}>center-top</Button>
        <Button onClick={e => openPopupRelative(e, 'center-bottom')}>center-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'left')}>left</Button>
        <Button onClick={e => openPopupRelative(e, 'left-center')}>left-center</Button>
        <Button onClick={e => openPopupRelative(e, 'left-top')}>left-top</Button>
        <Button onClick={e => openPopupRelative(e, 'left-bottom')}>left-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'right')}>right</Button>
        <Button onClick={e => openPopupRelative(e, 'right-center')}>right-center</Button>
        <Button onClick={e => openPopupRelative(e, 'right-top')}>right-top</Button>
        <Button onClick={e => openPopupRelative(e, 'right-bottom')}>right-bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'top')}>top</Button>
        <Button onClick={e => openPopupRelative(e, 'top-center')}>top-center</Button>
        <Button onClick={e => openPopupRelative(e, 'top-left')}>top-left</Button>
        <Button onClick={e => openPopupRelative(e, 'top-right')}>top-right</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom')}>bottom</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-center')}>bottom-center</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-left')}>bottom-left</Button>
        <Button onClick={e => openPopupRelative(e, 'bottom-right')}>bottom-right</Button>
      </div>;
  }
}`,...(M=(U=d.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var j,O,H;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const DemoPopup = () => {
      const popup = usePopup<{
        contentCount: number;
      }>(({
        contentCount
      }) => {
        return <div className="bg-background shadow-md p-24 br-8 border rect-1">
              content
              <div>contentCount: {contentCount}</div>
            </div>;
      }, {
        positionType: 'center',
        lockScroll: true
      });
      return <div className="flex gap-12">
          <Button onClick={() => popup.open()}>open一个</Button>
        </div>;
    };
    return <DemoPopup />;
  }
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var _,I,J;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    function openPopup() {
      const demoPopup = new PopupPortal(() => {
        return <div className="bg-background shadow-md p-24">content</div>;
      }, {
        contentAnimationConfig: false,
        overlayAnimationConfig: false,
        onBeforeEnter: el => {
          console.log('onBeforeEnter', el);
        },
        onEnter: el => {
          console.log('onEnter', el);
        },
        onBeforeLeave: el => {
          console.log('onBeforeLeave', el);
        },
        onLeave: () => {
          console.log('onLeave');
        }
      });
      demoPopup.open();
    }
    return <div className="flex gap-12">
        <Button onClick={() => openPopup()}>open一个</Button>
      </div>;
  }
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const lt=["函数打开","UsePopup","绝对位置","相对位置","边缘偏移","锁定滚动条","无动画"];export{u as UsePopup,lt as __namedExportsOrder,it as default,l as 函数打开,h as 无动画,a as 相对位置,s as 绝对位置,d as 边缘偏移,m as 锁定滚动条};
