import{a as e,j as l,k as N}from"./mini-scrollbar-1dk_y2Qh.js";import{R as Re}from"./index-D4lIrffr.js";import"./index-B4qrdscw.js";import"./index-D1L8ZmSS.js";import{i as P}from"./index-Cd_610k-.js";import{D as i}from"./dialog-BMg1r54e.js";import{C as Ae}from"./checkbox-ELlBHack.js";import{u as O}from"./dialog.hooks-Bj5mn1uE.js";import{D as b}from"./dialog.portal-tq69pR5S.js";import{B as o}from"./button-B9za9TDP.js";import"./jsx-runtime-D_zvdyIk.js";import"./checkbox-group-2P6_oZPC.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./index-CfuAEkNK.js";import"./popup-trigger-GAT61Aah.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./use-custom-event-BYXfsBOj.js";import"./popup.store-CZruyQcO.js";import"./conversion-DyjZL1Co.js";import"./icon-CUwNImcR.js";import"./index-B2-v9W4q.js";import"./x-circle-B-v9SAgR.js";import"./alert-triangle-ess0TkFO.js";import"./alert-circle-ByI2Mpw3.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./x-BK-4WeVA.js";import"./global-style-CvBFrXCB.js";const gn={title:"Components/Dialog",component:i,tags:["autodocs"],argTypes:{}},s={args:{title:"Title",children:"Content"}},c={args:{children:"Content"}},d={args:{children:"Content",footer:!1}},g={args:{title:"Title",children:"Content",footerAlign:"center"}},u={args:{title:"Title",children:"Content",showCloseIcon:!1}},p={args:{title:"Title",children:"Content",outerBorder:!1}},m={args:{title:"Title",children:"Content",splitBorder:!1}},C={args:{title:"Title",children:"Content"},render:n=>l("div",{className:"flex col gap-12",children:[e(i,{...n,shadow:!1,children:"无"}),e(i,{...n,shadow:"xs",children:"xs"}),e(i,{...n,shadow:"sm",children:"sm"}),e(i,{...n,children:"Default"}),e(i,{...n,shadow:"md",children:"md"}),e(i,{...n,shadow:"lg",children:"lg"}),e(i,{...n,shadow:"xl",children:"xl"})]})},h={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[e(Ae,{children:"checkbox"},"checkbox"),e("div",{className:"flex-1"},"full"),e(o,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[e(o,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},f={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},v={render(){function n(){new b(()=>e("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return e("div",{children:e(o,{onClick:n,children:"open一个"})})}},T={render(){function n(){new b(()=>e("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return e("div",{children:e(o,{onClick:n,children:"open一个"})})}},k={render(){function n(){new b(()=>e("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await N(1e3),console.log("onOk")},onCancel:async()=>{await N(1e3),console.log("onCancel")}}).open()}return e("div",{children:e(o,{onClick:n,children:"open一个"})})}},D={render(){async function n(){return new b(({dialogPortalInstance:r,defineOnOk:a,defineOnCancel:S})=>(Re.useEffect(()=>{console.log(r)},[]),a(async()=>(await N(1e3),"ok result")),S(async()=>"cancel result"),e("div",{children:"dialog content"})),{title:"Title",children:"Content"},{clickToClose:!0}).open().then(r=>{console.log(r)}).catch(r=>{console.log(r)})}return e("div",{children:e(o,{onClick:n,children:"open一个"})})}},B={render(){const n=O(({dialogPortalInstance:r})=>l("div",{className:"flex col gap-12",children:["dialog content"," ",e(o,{onClick:()=>{r.close()},children:"内部关闭"}),e(o,{onClick:()=>P("toast message"),children:"toast"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function t(){n.open()}return l("div",{className:"flex row gap-12",children:[e(o,{onClick:t,children:"open一个"}),e(o,{onClick:()=>P("toast message"),children:"toast"})]})}},w={render(){const n=Re.useRef(0),t=O(({count:S,dialogPortalInstance:Ie})=>l("div",{className:"flex col gap-12",children:[l("div",{children:["dialog content ",S]}),l("div",{children:["esc 关闭 ",Ie.baseOptions.escToClose+""]})]}),{title:"Title"},{overlay:!1,backgroundEvent:!0});function r(){t.open({count:n.current})}function a(){n.current+=1,t.dispatchUpdate({count:n.current},{title:`Title: ${n.current}`},{escToClose:!t.baseOptions.escToClose})}return l("div",{className:"flex row gap-12",children:[e(o,{onClick:r,children:"open一个"}),e(o,{onClick:a,children:"add"})]})}},x={render(){const n=O(({dialogPortalInstance:r})=>l("div",{children:["dialog content"," ",e(o,{onClick:()=>{r.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function t(){n.open()}return e("div",{children:e(o,{onClick:t,children:"open一个"})})}},y={render(){const n=O(()=>e("div",{children:Array.from({length:100}).map((r,a)=>l("div",{children:["item ",a]},a))}),{title:"100 items",stickyFrame:!0});function t(){n.open()}return e("div",{children:e(o,{onClick:t,children:"open一个"})})}};var R,I,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,F,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var _,H,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var U,$,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var V,W,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,oe,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ae,se,ce;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,ge,ue;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var pe,me,Ce;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
          await sleep(1000);
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
}`,...(Ce=(me=k.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};var he,fe,ve;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render() {
    async function openDialog() {
      const dialog = new DialogPortal(({
        dialogPortalInstance,
        defineOnOk,
        defineOnCancel
      }) => {
        React.useEffect(() => {
          console.log(dialogPortalInstance);
        }, []);
        defineOnOk(async () => {
          await sleep(1000);
          return 'ok result';
        });
        defineOnCancel(async () => {
          return 'cancel result';
        });
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        children: 'Content'
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
}`,...(ve=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Te,ke,De;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Be,we,xe;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(xe=(we=w.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ye,Oe,be;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var Se,Ne,Pe;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};const un=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","更新弹层内容","无动画","超出屏幕滚动"];export{B as Hooks调用,un as __namedExportsOrder,gn as default,T as 事件穿透,D as 内部定义回调,v as 函数打开,s as 基础示例,h as 底部元素扩展,k as 异步关闭,g as 按钮居中,u as 无关闭icon,m as 无分割线,x as 无动画,p as 无外边框,c as 无头,d as 无脚,w as 更新弹层内容,y as 超出屏幕滚动,f as 长标题,C as 阴影};
