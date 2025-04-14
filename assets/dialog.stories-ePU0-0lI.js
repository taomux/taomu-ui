import{a as n,j as l,k as N}from"./mini-scrollbar-1dk_y2Qh.js";import{R as P}from"./index-D4lIrffr.js";import"./index-B4qrdscw.js";import"./index-6yg4yX49.js";import{w as Fn,s as jn,i as E}from"./index-BERMybpM.js";import{D as a}from"./dialog-DJmAQl5E.js";import{C as _n}from"./checkbox-ELlBHack.js";import{u as b}from"./dialog.hooks-CJdGZeA-.js";import{D as R}from"./dialog.portal-BIaU2LFM.js";import{B as t}from"./button-B9za9TDP.js";import"./jsx-runtime-D_zvdyIk.js";import"./checkbox-group-2P6_oZPC.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./index-CMKHHU4h.js";import"./popup-trigger-DHttIfv7.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./use-custom-event-BYXfsBOj.js";import"./popup.store-CZruyQcO.js";import"./conversion-DyjZL1Co.js";import"./icon-CUwNImcR.js";import"./index-B2-v9W4q.js";import"./x-circle-B-v9SAgR.js";import"./alert-triangle-ess0TkFO.js";import"./alert-circle-ByI2Mpw3.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./x-BK-4WeVA.js";import"./global-style-CvBFrXCB.js";const me={title:"Components/Dialog",component:a,tags:["autodocs"],argTypes:{}},c={args:{title:"Title",children:"Content"}},d={args:{children:"Content"}},u={args:{children:"Content",footer:!1}},g={args:{title:"Title",children:"Content",footerAlign:"center"}},p={args:{title:"Title",children:"Content",showCloseIcon:!1}},m={args:{title:"Title",children:"Content",outerBorder:!1}},f={args:{title:"Title",children:"Content",splitBorder:!1}},C={args:{title:"Title",children:"Content"},render:e=>l("div",{className:"flex col gap-12",children:[n(a,{...e,shadow:!1,children:"无"}),n(a,{...e,shadow:"xs",children:"xs"}),n(a,{...e,shadow:"sm",children:"sm"}),n(a,{...e,children:"Default"}),n(a,{...e,shadow:"md",children:"md"}),n(a,{...e,shadow:"lg",children:"lg"}),n(a,{...e,shadow:"xl",children:"xl"})]})},h={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[n(_n,{children:"checkbox"},"checkbox"),n("div",{className:"flex-1"},"full"),n(t,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[n(t,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},k={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},v={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},T={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},D={render(){function e(){new R(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await N(300),console.log("onOk")},onCancel:async()=>{await N(1e3),console.log("onCancel")}}).open()}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},w={render(){async function e(){return new R(({dialogPortalInstance:o,defineOnOk:i,defineOnCancel:S})=>{const s=P.useRef(0);return P.useEffect(()=>{s.current=3,console.log(o)},[]),i(async()=>{if(await N(300),s.current>0){const I=`${s.current} 次后关闭`;throw Fn(I),s.current-=1,new Error(I)}return"ok result"}),S(async()=>"cancel result"),n("div",{children:"dialog content"})},{title:"Title",children:"Content",asyncCallback:o=>{console.log("asyncCallback",o),o==="ok"&&jn("Success")}},{clickToClose:!0}).open().then(o=>{console.log(o)}).catch(o=>{console.log(o)})}return n("div",{children:n(t,{onClick:e,children:"open一个"})})}},B={render(){const e=b(({dialogPortalInstance:o})=>l("div",{className:"flex col gap-12",children:["dialog content"," ",n(t,{onClick:()=>{o.close()},children:"内部关闭"}),n(t,{onClick:()=>E("toast message"),children:"toast"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function r(){e.open()}return l("div",{className:"flex row gap-12",children:[n(t,{onClick:r,children:"open一个"}),n(t,{onClick:()=>E("toast message"),children:"toast"})]})}},y={render(){const e=P.useRef(0),r=b(({count:S,dialogPortalInstance:s})=>l("div",{className:"flex col gap-12",children:[l("div",{children:["dialog content ",S]}),l("div",{children:["esc 关闭 ",s.baseOptions.escToClose+""]})]}),{title:"Title"},{overlay:!1,backgroundEvent:!0});function o(){r.open({count:e.current})}function i(){e.current+=1,r.dispatchUpdate({count:e.current},{title:`Title: ${e.current}`},{escToClose:!r.baseOptions.escToClose})}return l("div",{className:"flex row gap-12",children:[n(t,{onClick:o,children:"open一个"}),n(t,{onClick:i,children:"add"})]})}},x={render(){const e=b(({dialogPortalInstance:o})=>l("div",{children:["dialog content"," ",n(t,{onClick:()=>{o.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function r(){e.open()}return n("div",{children:n(t,{onClick:r,children:"open一个"})})}},O={render(){const e=b(()=>n("div",{children:Array.from({length:100}).map((o,i)=>l("div",{children:["item ",i]},i))}),{title:"100 items",stickyFrame:!0});function r(){e.open()}return n("div",{children:n(t,{onClick:r,children:"open一个"})})}};var A,F,j;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var _,$,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(H=($=d.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,U,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var V,W,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,nn;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(nn=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var en,on,tn;C.parameters={...C.parameters,docs:{...(en=C.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(tn=(on=C.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};var rn,ln,an;h.parameters={...h.parameters,docs:{...(rn=h.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(an=(ln=h.parameters)==null?void 0:ln.docs)==null?void 0:an.source}}};var sn,cn,dn;k.parameters={...k.parameters,docs:{...(sn=k.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(dn=(cn=k.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var un,gn,pn;v.parameters={...v.parameters,docs:{...(un=v.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(gn=v.parameters)==null?void 0:gn.docs)==null?void 0:pn.source}}};var mn,fn,Cn;T.parameters={...T.parameters,docs:{...(mn=T.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(Cn=(fn=T.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var hn,kn,vn;D.parameters={...D.parameters,docs:{...(hn=D.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(vn=(kn=D.parameters)==null?void 0:kn.docs)==null?void 0:vn.source}}};var Tn,Dn,wn;w.parameters={...w.parameters,docs:{...(Tn=w.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(wn=(Dn=w.parameters)==null?void 0:Dn.docs)==null?void 0:wn.source}}};var Bn,yn,xn;B.parameters={...B.parameters,docs:{...(Bn=B.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(xn=(yn=B.parameters)==null?void 0:yn.docs)==null?void 0:xn.source}}};var On,bn,Rn;y.parameters={...y.parameters,docs:{...(On=y.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Rn=(bn=y.parameters)==null?void 0:bn.docs)==null?void 0:Rn.source}}};var Sn,Nn,Pn;x.parameters={...x.parameters,docs:{...(Sn=x.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Pn=(Nn=x.parameters)==null?void 0:Nn.docs)==null?void 0:Pn.source}}};var In,En,An;O.parameters={...O.parameters,docs:{...(In=O.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(An=(En=O.parameters)==null?void 0:En.docs)==null?void 0:An.source}}};const fe=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","更新弹层内容","无动画","超出屏幕滚动"];export{B as Hooks调用,fe as __namedExportsOrder,me as default,T as 事件穿透,w as 内部定义回调,v as 函数打开,c as 基础示例,h as 底部元素扩展,D as 异步关闭,g as 按钮居中,p as 无关闭icon,f as 无分割线,x as 无动画,m as 无外边框,d as 无头,u as 无脚,y as 更新弹层内容,O as 超出屏幕滚动,k as 长标题,C as 阴影};
