import{j as a,a as n,k as S}from"./mini-scrollbar-DKhO_gnw.js";import{R as b}from"./index-CZMpeKRu.js";import"./index-tbJd9dN2.js";import"./index-LZw6kEXB.js";import{i as P}from"./index-BIXbpMTK.js";import"./index-BNQ5sGV9.js";import{D as l}from"./dialog-CxKgFBc4.js";import{C as Nn}from"./checkbox-D1ZeRea0.js";import{D as s}from"./dialog.portal-DtJrRx0Z.js";import{B as o}from"./button-EQaJ-xSn.js";import"./jsx-runtime-CLpGMVip.js";import"./checkbox-group-AgIvxVuN.js";import"./use-taomu-classname-BRbG1Owv.js";import"./icon-B0NDHoC9.js";import"./index-bPVxIqPX.js";import"./x-circle-CdlKYc8_.js";import"./alert-triangle-DUSJc6lc.js";import"./index-b9g8Vhfs.js";import"./loading-DUVmW9bg.js";import"./global-vars-CuQyjSF-.js";import"./index-CRAKvOf5.js";import"./popup-trigger-BJg6Zaf7.js";import"./index-C5atF7ks.js";import"./index-D-TIQtLp.js";import"./index-CUnKnXLJ.js";import"./popup.store-B3fQShZ5.js";import"./use-custom-event-WcP5NWBu.js";function N(e,{destroyOnUnmount:r=!0,...t}={},i){const c=b.useRef(new s(e,t,i));return b.useEffect(()=>()=>{r&&c.current.destroy()},[]),c.current}const te={title:"Components/Dialog",component:l,tags:["autodocs"],argTypes:{}},d={args:{title:"Title",children:"Content"}},g={args:{children:"Content"}},p={args:{children:"Content",footer:!1}},u={args:{title:"Title",children:"Content",footerAlign:"center"}},m={args:{title:"Title",children:"Content",showCloseIcon:!1}},h={args:{title:"Title",children:"Content",outerBorder:!1}},C={args:{title:"Title",children:"Content",splitBorder:!1}},f={args:{title:"Title",children:"Content"},render:e=>a("div",{className:"flex col gap-12",children:[n(l,{...e,shadow:!1,children:"无"}),n(l,{...e,shadow:"xs",children:"xs"}),n(l,{...e,shadow:"sm",children:"sm"}),n(l,{...e,children:"Default"}),n(l,{...e,shadow:"md",children:"md"}),n(l,{...e,shadow:"lg",children:"lg"}),n(l,{...e,shadow:"xl",children:"xl"})]})},k={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[n(Nn,{children:"checkbox"},"checkbox"),n("div",{className:"flex-1"},"full"),n(o,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[n(o,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},T={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},v={render(){function e(){new s(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return n("div",{children:n(o,{onClick:e,children:"open一个"})})}},D={render(){function e(){new s(()=>n("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return n("div",{children:n(o,{onClick:e,children:"open一个"})})}},B={render(){function e(){new s(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await S(1e3),console.log("onOk")},onCancel:async()=>{await S(1e3),console.log("onCancel")}}).open()}return n("div",{children:n(o,{onClick:e,children:"open一个"})})}},w={render(){async function e(){return new s(({dialogPortalInstance:t,defineOnOk:i,defineOnCancel:c})=>(b.useEffect(()=>{console.log(t)},[]),i(async()=>(await S(1e3),"ok result")),c(async()=>"cancel result"),n("div",{children:"dialog content"})),{title:"Title",children:"Content"},{clickToClose:!0}).open().then(t=>{console.log(t)}).catch(t=>{console.log(t)})}return n("div",{children:n(o,{onClick:e,children:"open一个"})})}},y={render(){const e=N(({dialogPortalInstance:t})=>a("div",{className:"flex col gap-12",children:["dialog content"," ",n(o,{onClick:()=>{t.close()},children:"内部关闭"}),n(o,{onClick:()=>P("toast message"),children:"toast"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function r(){e.open()}return a("div",{className:"flex row gap-12",children:[n(o,{onClick:r,children:"open一个"}),n(o,{onClick:()=>P("toast message"),children:"toast"})]})}},x={render(){const e=N(({dialogPortalInstance:t})=>a("div",{children:["dialog content"," ",n(o,{onClick:()=>{t.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function r(){e.open()}return n("div",{children:n(o,{onClick:r,children:"open一个"})})}},O={render(){const e=N(()=>n("div",{children:Array.from({length:100}).map((t,i)=>a("div",{children:["item ",i]},i))}),{title:"100 items",stickyFrame:!0});function r(){e.open()}return n("div",{children:n(o,{onClick:r,children:"open一个"})})}};var I,A,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var E,F,j;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var _,H,L;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var q,z,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,V;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,nn;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(nn=($=f.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,on,tn;k.parameters={...k.parameters,docs:{...(en=k.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(tn=(on=k.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};var rn,ln,an;T.parameters={...T.parameters,docs:{...(rn=T.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(an=(ln=T.parameters)==null?void 0:ln.docs)==null?void 0:an.source}}};var sn,cn,dn;v.parameters={...v.parameters,docs:{...(sn=v.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(dn=(cn=v.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var gn,pn,un;D.parameters={...D.parameters,docs:{...(gn=D.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(un=(pn=D.parameters)==null?void 0:pn.docs)==null?void 0:un.source}}};var mn,hn,Cn;B.parameters={...B.parameters,docs:{...(mn=B.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(Cn=(hn=B.parameters)==null?void 0:hn.docs)==null?void 0:Cn.source}}};var fn,kn,Tn;w.parameters={...w.parameters,docs:{...(fn=w.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Tn=(kn=w.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var vn,Dn,Bn;y.parameters={...y.parameters,docs:{...(vn=y.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(Bn=(Dn=y.parameters)==null?void 0:Dn.docs)==null?void 0:Bn.source}}};var wn,yn,xn;x.parameters={...x.parameters,docs:{...(wn=x.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(xn=(yn=x.parameters)==null?void 0:yn.docs)==null?void 0:xn.source}}};var On,Sn,bn;O.parameters={...O.parameters,docs:{...(On=O.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(bn=(Sn=O.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};const re=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","无动画","超出屏幕滚动"];export{y as Hooks调用,re as __namedExportsOrder,te as default,D as 事件穿透,w as 内部定义回调,v as 函数打开,d as 基础示例,k as 底部元素扩展,B as 异步关闭,u as 按钮居中,m as 无关闭icon,C as 无分割线,x as 无动画,h as 无外边框,g as 无头,p as 无脚,O as 超出屏幕滚动,T as 长标题,f as 阴影};
