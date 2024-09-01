import{j as y,a as n}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";import{R as O}from"./index-l2PZgWEW.js";import{a as S}from"./mini-scrollbar-DUVypj3v.js";import"./index-Ct6AoaM2.js";import"./index-CTghhhKo.js";import{D as l}from"./dialog-41DE-mic.js";import{C as yn}from"./checkbox-0VPT8jCQ.js";import{D as x}from"./dialog.portal-DtF177Ek.js";import{B as r}from"./button-DXEHRL-y.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-B888oYOY.js";import"./popup-trigger-BnUp-N6y.js";import"./use-taomu-classname-BHBGss1S.js";import"./index-6lph7OXq.js";import"./popup.store-CruYBn8Q.js";import"./index-CE9T9n2a.js";function b(e,{destroyOnUnmount:t=!0,...o}={},i){const a=O.useRef(new x(e,o,i));return O.useEffect(()=>()=>{t&&a.current.destroy()},[]),a.current}const zn={title:"Components/Dialog",component:l,tags:["autodocs"],argTypes:{}},s={args:{title:"Title",children:"Content"}},c={args:{children:"Content"}},d={args:{children:"Content",footer:!1}},g={args:{title:"Title",children:"Content",footerAlign:"center"}},u={args:{title:"Title",children:"Content",showCloseIcon:!1}},p={args:{title:"Title",children:"Content",outerBorder:!1}},m={args:{title:"Title",children:"Content",splitBorder:!1}},h={args:{title:"Title",children:"Content"},render:e=>y("div",{className:"flex col gap-12",children:[n(l,{...e,shadow:!1,children:"无"}),n(l,{...e,shadow:"xs",children:"xs"}),n(l,{...e,shadow:"sm",children:"sm"}),n(l,{...e,children:"Default"}),n(l,{...e,shadow:"md",children:"md"}),n(l,{...e,shadow:"lg",children:"lg"}),n(l,{...e,shadow:"xl",children:"xl"})]})},C={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[n(yn,{children:"checkbox"},"checkbox"),n("div",{className:"flex-1"},"full"),n(r,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[n(r,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},f={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},T={render(){function e(){new x(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},k={render(){function e(){new x(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await S(1e3),console.log("onOk")},onCancel:async()=>{await S(1e3),console.log("onCancel")}}).open()}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},v={render(){async function e(){return new x(({dialogPortalInstance:o,defineOnOk:i,defineOnCancel:a})=>(O.useEffect(()=>{console.log(o)},[]),i(async()=>(await S(1e3),"ok result")),a(async()=>"cancel result"),n("div",{children:"dialog content"})),{title:"Title",children:"Content"},{clickToClose:!0}).open().then(o=>{console.log(o)}).catch(o=>{console.log(o)})}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},D={render(){const e=b(({dialogPortalInstance:o})=>y("div",{children:["dialog content"," ",n(r,{onClick:()=>{o.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function t(){e.open()}return n("div",{children:n(r,{onClick:t,children:"open一个"})})}},w={render(){const e=b(({dialogPortalInstance:o})=>y("div",{children:["dialog content"," ",n(r,{onClick:()=>{o.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function t(){e.open()}return n("div",{children:n(r,{onClick:t,children:"open一个"})})}},B={render(){const e=b(()=>n("div",{children:Array.from({length:100}).map((o,i)=>y("div",{children:["item ",i]},i))}),{title:"100 items",stickyFrame:!0});function t(){e.open()}return n("div",{children:n(r,{onClick:t,children:"open一个"})})}};var P,I,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var N,R,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var j,E,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var H,L,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,G,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,V,W;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,nn,en;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(en=(nn=C.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var on,tn,rn;f.parameters={...f.parameters,docs:{...(on=f.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(rn=(tn=f.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var ln,an,sn;T.parameters={...T.parameters,docs:{...(ln=T.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(sn=(an=T.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var cn,dn,gn;k.parameters={...k.parameters,docs:{...(cn=k.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(gn=(dn=k.parameters)==null?void 0:dn.docs)==null?void 0:gn.source}}};var un,pn,mn;v.parameters={...v.parameters,docs:{...(un=v.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(pn=v.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var hn,Cn,fn;D.parameters={...D.parameters,docs:{...(hn=D.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(fn=(Cn=D.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var Tn,kn,vn;w.parameters={...w.parameters,docs:{...(Tn=w.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(vn=(kn=w.parameters)==null?void 0:kn.docs)==null?void 0:vn.source}}};var Dn,wn,Bn;B.parameters={...B.parameters,docs:{...(Dn=B.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Bn=(wn=B.parameters)==null?void 0:wn.docs)==null?void 0:Bn.source}}};const Gn=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","异步关闭","内部定义回调","Hooks调用","无动画","超出屏幕滚动"];export{D as Hooks调用,Gn as __namedExportsOrder,zn as default,v as 内部定义回调,T as 函数打开,s as 基础示例,C as 底部元素扩展,k as 异步关闭,g as 按钮居中,u as 无关闭icon,m as 无分割线,w as 无动画,p as 无外边框,c as 无头,d as 无脚,B as 超出屏幕滚动,f as 长标题,h as 阴影};
