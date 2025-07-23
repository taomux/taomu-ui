import{D as a,a as n,j as l,B as t,b as A,i as E,e as N,k as P,w as F,s as j}from"./iframe-P3Y-woc8.js";import{u as O}from"./dialog.hooks-VUXyUXNv.js";import{D as R}from"./dialog.portal-B2wUB2XD.js";const L={title:"Components/Dialog",component:a,tags:["autodocs"],argTypes:{}},c={args:{title:"Title",children:"Content"}},d={args:{children:"Content"}},u={args:{children:"Content",footer:!1}},g={args:{title:"Title",children:"Content",footerAlign:"center"}},p={args:{title:"Title",children:"Content",showCloseIcon:!1}},m={args:{title:"Title",children:"Content",outerBorder:!1}},f={args:{title:"Title",children:"Content",splitBorder:!1}},C={args:{title:"Title",children:"Content"},render:e=>l("div",{className:"flex col gap-12",children:[n(a,{...e,shadow:!1,children:"无"}),n(a,{...e,shadow:"xs",children:"xs"}),n(a,{...e,shadow:"sm",children:"sm"}),n(a,{...e,children:"Default"}),n(a,{...e,shadow:"md",children:"md"}),n(a,{...e,shadow:"lg",children:"lg"}),n(a,{...e,shadow:"xl",children:"xl"})]})},h={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[n(A,{children:"checkbox"},"checkbox"),n("div",{className:"flex-1"},"full"),n(t,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[n(t,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},k={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},v={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},T={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},D={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await P(300),console.log("onOk")},onCancel:async()=>{await P(1e3),console.log("onCancel")}}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},w={render(){async function e(){return new R(({dialogPortalInstance:o,defineOnOk:s,defineOnCancel:S})=>{const i=N.useRef(0);return N.useEffect(()=>{i.current=3,console.log(o)},[]),s(async()=>{if(await P(300),i.current>0){const I=`${i.current} 次后关闭`;throw F(I),i.current-=1,new Error(I)}return"ok result"}),S(async()=>"cancel result"),n("div",{children:"dialog content"})},{title:"Title",children:"Content",asyncCallback:o=>{console.log("asyncCallback",o),o==="ok"&&j("Success")}},{clickToClose:!0}).open().then(o=>{console.log(o)}).catch(o=>{console.log(o)})}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},B={render(){const e=O(({dialogPortalInstance:o})=>l("div",{className:"flex col gap-12",children:["dialog content"," ",n(t,{onClick:()=>{o.close()},children:"内部关闭"}),n(t,{onClick:()=>E("toast message"),children:"toast"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function r(){e.open()}return l("div",{className:"flex row gap-12",children:[n(t,{onClick:r,children:"open一个"}),n(t,{onClick:()=>E("toast message"),children:"toast"})]})}},y={render(){const e=N.useRef(0),r=O(({count:S,dialogPortalInstance:i})=>l("div",{className:"flex col gap-12",children:[l("div",{children:["dialog content ",S]}),l("div",{children:["esc 关闭 ",i.baseOptions.escToClose+""]})]}),{title:"Title"},{overlay:!1,backgroundEvent:!0});function o(){r.open({count:e.current})}function s(){e.current+=1,r.dispatchUpdate({count:e.current},{title:`Title: ${e.current}`},{escToClose:!r.baseOptions.escToClose})}return l("div",{className:"flex row gap-12",children:[n(t,{onClick:o,children:"open一个"}),n(t,{onClick:s,children:"add"})]})}},x={render(){const e=O(({dialogPortalInstance:o})=>l("div",{children:["dialog content"," ",n(t,{onClick:()=>{o.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function r(){e.open()}return n("div",{children:n(t,{onClick:r,children:"open一个"})})}},b={render(){const e=O(()=>n("div",{children:Array.from({length:100}).map((o,s)=>l("div",{children:["item ",s]},s))}),{title:"100 items",stickyFrame:!0});function r(){e.open()}return n("div",{children:n(t,{onClick:r,children:"open一个"})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  },
  render: args => {
    return <div className="flex col gap-12">
        <Dialog {...args} shadow={false}>
          无
        </Dialog>
        <Dialog {...args} shadow="xs">
          xs
        </Dialog>
        <Dialog {...args} shadow="sm">
          sm
        </Dialog>
        <Dialog {...args}>Default</Dialog>
        <Dialog {...args} shadow="md">
          md
        </Dialog>
        <Dialog {...args} shadow="lg">
          lg
        </Dialog>
        <Dialog {...args} shadow="xl">
          xl
        </Dialog>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    width: 600,
    beforeFooterNodes: [<Checkbox key="checkbox">checkbox</Checkbox>, <div key="full" className="flex-1"></div>, <Button key="btn-left" type="warning" glass>
        Btn Left
      </Button>],
    afterFooterNodes: [<Button key="btn-right" type="primary" glass>
        Btn Right
      </Button>]
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        onClose: () => {
          console.log('onClose');
        },
        onOk: () => {
          console.log('onOk');
        },
        onCancel: () => {
          console.log('onCancel');
        }
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title'
      }, {
        overlay: false,
        backgroundEvent: true
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        onClose: () => {
          console.log('onClose');
        },
        onOk: async () => {
          await sleep(300);
          console.log('onOk');
        },
        onCancel: async () => {
          await sleep(1000);
          console.log('onCancel');
          // return Promise.reject() // 中断关闭动作
        }
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render() {
    async function openDialog() {
      const dialog = new DialogPortal(({
        dialogPortalInstance,
        defineOnOk,
        defineOnCancel
      }) => {
        const countRef = React.useRef(0);
        React.useEffect(() => {
          countRef.current = 3;
          console.log(dialogPortalInstance);
        }, []);
        defineOnOk(async () => {
          await sleep(300);
          if (countRef.current > 0) {
            const msg = \`\${countRef.current} 次后关闭\`;
            toast.warning(msg);
            countRef.current -= 1;
            throw new Error(msg);
          }
          return 'ok result';
        });
        defineOnCancel(async () => {
          return 'cancel result';
        });
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        children: 'Content',
        asyncCallback: type => {
          console.log('asyncCallback', type);
          if (type === 'ok') {
            toast.success('Success');
          }
        }
      }, {
        clickToClose: true
      });
      return dialog.open().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(({
      dialogPortalInstance
    }) => {
      return <div className="flex col gap-12">
            dialog content{' '}
            <Button onClick={() => {
          dialogPortalInstance.close();
        }}>
              内部关闭
            </Button>
            <Button onClick={() => toast.info('toast message')}>toast</Button>
          </div>;
    }, {
      title: 'Title',
      onClose: () => {
        console.log('onClose');
      },
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      }
    });
    function openDialog() {
      dialog.open();
    }
    return <div className="flex row gap-12">
        <Button onClick={openDialog}>open一个</Button>
        <Button onClick={() => toast.info('toast message')}>toast</Button>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render() {
    const countRef = React.useRef(0);
    const dialog = useDialog<DialogComponentProps & {
      count: number;
    }>(({
      count,
      dialogPortalInstance
    }) => {
      return <div className="flex col gap-12">
            <div>dialog content {count}</div>
            <div>esc 关闭 {dialogPortalInstance.baseOptions.escToClose + ''}</div>
          </div>;
    }, {
      title: 'Title'
    }, {
      overlay: false,
      backgroundEvent: true
    });
    function openDialog() {
      dialog.open({
        count: countRef.current
      });
    }
    function add() {
      countRef.current += 1;
      dialog.dispatchUpdate({
        count: countRef.current
      }, {
        title: \`Title: \${countRef.current}\`
      }, {
        escToClose: !dialog.baseOptions.escToClose
      });
    }
    return <div className="flex row gap-12">
        <Button onClick={openDialog}>open一个</Button>
        <Button onClick={add}>add</Button>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(({
      dialogPortalInstance
    }) => {
      return <div>
            dialog content{' '}
            <Button onClick={() => {
          dialogPortalInstance.close();
        }}>
              内部关闭
            </Button>
          </div>;
    }, {
      title: 'Title',
      onClose: () => {
        console.log('onClose');
      },
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      }
    }, {
      contentAnimationConfig: false,
      overlayAnimationConfig: false
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(() => {
      return <div>
            {Array.from({
          length: 100
        }).map((_, index) => {
          return <div key={index}>item {index}</div>;
        })}
          </div>;
    }, {
      title: '100 items',
      stickyFrame: true
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const U=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","更新弹层内容","无动画","超出屏幕滚动"];export{B as Hooks调用,U as __namedExportsOrder,L as default,T as 事件穿透,w as 内部定义回调,v as 函数打开,c as 基础示例,h as 底部元素扩展,D as 异步关闭,g as 按钮居中,p as 无关闭icon,f as 无分割线,x as 无动画,m as 无外边框,d as 无头,u as 无脚,y as 更新弹层内容,b as 超出屏幕滚动,k as 长标题,C as 阴影};
