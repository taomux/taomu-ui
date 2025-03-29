import{a as e,j as l,k as R}from"./mini-scrollbar-1dk_y2Qh.js";import{R as S}from"./index-D4lIrffr.js";import"./index-Ds1KdkI-.js";import"./index-BJXMQOYF.js";import{i as P}from"./index-D7Lc_bz4.js";import"./index-BYYFI2W2.js";import{D as a}from"./dialog-Cr4dyDo0.js";import{C as Ae}from"./checkbox-ELlBHack.js";import{D as c}from"./dialog.portal-MlZxASq2.js";import{B as t}from"./button-V48wHozB.js";import"./jsx-runtime-D_zvdyIk.js";import"./checkbox-group-2P6_oZPC.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./conversion-DyjZL1Co.js";import"./icon-B-FLRHt4.js";import"./index-B2-v9W4q.js";import"./x-circle-B-v9SAgR.js";import"./alert-triangle-ess0TkFO.js";import"./alert-circle-ByI2Mpw3.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./use-custom-event-BYXfsBOj.js";import"./index-ahrChKj1.js";import"./popup-trigger-BYKcKynk.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./global-style-CvBFrXCB.js";function N(n,{destroyOnUnmount:o=!0,...r}={},i){const s=S.useRef(new c(n,r,i));return S.useEffect(()=>()=>{o&&s.current.destroy()},[]),s.current}const dn={title:"Components/Dialog",component:a,tags:["autodocs"],argTypes:{}},d={args:{title:"Title",children:"Content"}},g={args:{children:"Content"}},u={args:{children:"Content",footer:!1}},p={args:{title:"Title",children:"Content",footerAlign:"center"}},m={args:{title:"Title",children:"Content",showCloseIcon:!1}},f={args:{title:"Title",children:"Content",outerBorder:!1}},C={args:{title:"Title",children:"Content",splitBorder:!1}},h={args:{title:"Title",children:"Content"},render:n=>l("div",{className:"flex col gap-12",children:[e(a,{...n,shadow:!1,children:"无"}),e(a,{...n,shadow:"xs",children:"xs"}),e(a,{...n,shadow:"sm",children:"sm"}),e(a,{...n,children:"Default"}),e(a,{...n,shadow:"md",children:"md"}),e(a,{...n,shadow:"lg",children:"lg"}),e(a,{...n,shadow:"xl",children:"xl"})]})},v={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[e(Ae,{children:"checkbox"},"checkbox"),e("div",{className:"flex-1"},"full"),e(t,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[e(t,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},T={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},k={render(){function n(){new c(()=>e("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return e("div",{children:e(t,{onClick:n,children:"open一个"})})}},D={render(){function n(){new c(()=>e("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return e("div",{children:e(t,{onClick:n,children:"open一个"})})}},B={render(){function n(){new c(()=>e("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await R(1e3),console.log("onOk")},onCancel:async()=>{await R(1e3),console.log("onCancel")}}).open()}return e("div",{children:e(t,{onClick:n,children:"open一个"})})}},w={render(){async function n(){return new c(({dialogPortalInstance:r,defineOnOk:i,defineOnCancel:s})=>(S.useEffect(()=>{console.log(r)},[]),i(async()=>(await R(1e3),"ok result")),s(async()=>"cancel result"),e("div",{children:"dialog content"})),{title:"Title",children:"Content"},{clickToClose:!0}).open().then(r=>{console.log(r)}).catch(r=>{console.log(r)})}return e("div",{children:e(t,{onClick:n,children:"open一个"})})}},x={render(){const n=N(({dialogPortalInstance:r})=>l("div",{className:"flex col gap-12",children:["dialog content"," ",e(t,{onClick:()=>{r.close()},children:"内部关闭"}),e(t,{onClick:()=>P("toast message"),children:"toast"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function o(){n.open()}return l("div",{className:"flex row gap-12",children:[e(t,{onClick:o,children:"open一个"}),e(t,{onClick:()=>P("toast message"),children:"toast"})]})}},y={render(){const n=S.useRef(0),o=N(({count:s,dialogPortalInstance:Ie})=>l("div",{className:"flex col gap-12",children:[l("div",{children:["dialog content ",s]}),l("div",{children:["esc 关闭 ",Ie.baseOptions.escToClose+""]})]}),{title:"Title"},{overlay:!1,backgroundEvent:!0});function r(){o.open({count:n.current})}function i(){n.current+=1,o.dispatchUpdate({count:n.current},{title:`Title: ${n.current}`},{escToClose:!o.baseOptions.escToClose})}return l("div",{className:"flex row gap-12",children:[e(t,{onClick:r,children:"open一个"}),e(t,{onClick:i,children:"add"})]})}},O={render(){const n=N(({dialogPortalInstance:r})=>l("div",{children:["dialog content"," ",e(t,{onClick:()=>{r.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function o(){n.open()}return e("div",{children:e(t,{onClick:o,children:"open一个"})})}},b={render(){const n=N(()=>e("div",{children:Array.from({length:100}).map((r,i)=>l("div",{children:["item ",i]},i))}),{title:"100 items",stickyFrame:!0});function o(){n.open()}return e("div",{children:e(t,{onClick:o,children:"open一个"})})}};var I,A,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,j,_;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(_=(j=g.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var H,L,U;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var $,q,z;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...(V=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,re;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ie,ae;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(ae=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var se,ce,de;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ge,ue,pe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,Ce;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var he,ve,Te;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var ke,De,Be;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var we,xe,ye;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Oe,be,Se;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Se=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ne,Re,Pe;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Pe=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};const gn=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","更新弹层内容","无动画","超出屏幕滚动"];export{x as Hooks调用,gn as __namedExportsOrder,dn as default,D as 事件穿透,w as 内部定义回调,k as 函数打开,d as 基础示例,v as 底部元素扩展,B as 异步关闭,p as 按钮居中,m as 无关闭icon,C as 无分割线,O as 无动画,f as 无外边框,g as 无头,u as 无脚,y as 更新弹层内容,b as 超出屏幕滚动,T as 长标题,h as 阴影};
