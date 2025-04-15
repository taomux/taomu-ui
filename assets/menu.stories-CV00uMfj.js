import{a as e,j as I}from"./mini-scrollbar-1dk_y2Qh.js";import{R as Ke}from"./index-D4lIrffr.js";import"./index-d97UjbBP.js";import{M as k}from"./index-QWSoNPD7.js";import"./index-CMKHHU4h.js";import{A as Ce}from"./activity-BvFYPvFO.js";import{A as Be}from"./alert-circle-ByI2Mpw3.js";import{A as Ne}from"./alert-triangle-ess0TkFO.js";import{A as We,S as Re}from"./save-DvGorKtL.js";import{a as Pe}from"./popup-trigger-DHttIfv7.js";import{B as i}from"./button-DlLFFbL_.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./empty-BT6epCKp.js";import"./index-B2-v9W4q.js";import"./menu-item-JMdMp9ko.js";import"./index-BDZOM4eL.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./popup.store-CZruyQcO.js";const ts={title:"Components/Menu",component:k,tags:["autodocs"],argTypes:{}},s=[{name:"menu1",icon:e(Ce,{size:16}),label:"选项1"},{name:"menu2",icon:e(Be,{size:16}),label:"选项2"},{name:"menu3",icon:e(Ne,{size:16}),label:"选项3",disabled:!0},{name:"menu4",icon:e(We,{size:16}),label:"选项4"},{name:"menu5",icon:e(Re,{size:16}),label:"选项5"}],S=[{label:"菜单1",onClick:()=>console.log("onClick 1")},{label:"菜单2"},{label:"菜单-禁用",disabled:!0,onClick:()=>console.log("onClick 3")},{label:"菜单-选中",active:!0},{label:"菜单-选中-禁用",active:!0,disabled:!0},{label:"菜单3"},{label:"不可见",visible:!1},{divider:!0},{label:"自定义属性"},{label:"自定义图标",icon:e(Ce,{size:16})},{label:"超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"},{label:"超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略",ellipsis:!0,title:"超出省略 hover title 需要手动传入"}],d={args:{width:200,items:S}},c={args:{width:200,height:120,items:S}},m={args:{width:200,padding:0,gap:0,itemProps:{radius:0},items:S}},l={args:{items:s,direction:"horizontal"}},n={args:{items:s,direction:"horizontal",width:300}},u={args:{items:s,direction:"horizontal",width:300,overflowBreak:!0}},p={args:{items:s,mode:"radio"}},g={args:{items:s,mode:"checkbox",width:200}},w={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1]}},h={args:{items:s.map(r=>({icon:r.icon})),mode:"radio",styleMode:"windows"}},y={args:{items:s,mode:"radio",styleMode:"windows",direction:"horizontal"}},v={args:{items:s.map(r=>({icon:r.icon})),mode:"radio",styleMode:"windows",direction:"horizontal"}},b={args:{items:s,mode:"checkbox",styleMode:"windows",width:200}},a={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultKeys:"menu2",beforeItemRender:(r,t)=>t.disabled?r:e(Pe,{trigger:"hover",position:"right",content:()=>e("div",{className:"px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12",children:t.label}),children:r},t.name)}},f={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1],children:e("div",{children:e(i,{dashed:!0,block:!0,children:"Add"})})}},M={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultIndexes:[1]},render:r=>{const[t,o]=Ke.useState(r.defaultIndexes);return I("div",{className:"flex col gap-12",children:[I("div",{className:"flex gap-12",children:[e(i,{onClick:()=>o([0]),children:"选中第一个"}),e(i,{onClick:()=>o([1]),children:"选中第二个"})]}),e(k,{...r,activeIndexes:t,onChange:(_,ze)=>o(ze)})]})}},x={args:{items:s,mode:"radio",styleMode:"windows",width:200,defaultKeys:["menu2"]},render:r=>{const[t,o]=Ke.useState(r.defaultKeys);return I("div",{className:"flex col gap-12",children:[I("div",{className:"flex gap-12",children:[e(i,{onClick:()=>o("menu1"),children:"选中第一个"}),e(i,{onClick:()=>o("menu2"),children:"选中第二个"})]}),e(k,{...r,activeKeys:t,onChange:_=>o(_)})]})}};var A,K,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    width: 200,
    items: testMenus2
  }
}`,...(C=(K=d.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var z,B,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 120,
    items: testMenus2
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var W,R,P;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: {
      radius: 0
    },
    items: testMenus2
  }
}`,...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var T,j,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal'
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,L,O,q,F;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300
  }
}`,...(O=(L=n.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:"Default",...(F=(q=n.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,U,V;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio'
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1]
  }
}`,...(se=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,te,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows'
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ae,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(ie=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,ce,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,ue,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200
  }
}`,...(pe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,we,he,ye,ve;a.parameters={...a.parameters,docs:{...(ge=a.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: 'menu2',
    beforeItemRender: (itemNode: any, props: any) => {
      if (props.disabled) return itemNode;
      return <PopupTrigger key={props.name} trigger="hover" position="right" content={() => <div className="px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12">{props.label}</div>}>
          {itemNode}
        </PopupTrigger>;
    }
  }
}`,...(he=(we=a.parameters)==null?void 0:we.docs)==null?void 0:he.source},description:{story:"使用 `beforeItemRender` 函数为菜单项添加包裹层",...(ve=(ye=a.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};var be,fe,Me;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1],
    children: <div>
        <Button dashed block>
          Add
        </Button>
      </div>
  }
}`,...(Me=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Me.source}}};var xe,Ie,ke;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1]
  },
  render: args => {
    const [activeIndexes, setActiveIndexes] = React.useState<number | number[]>(args.defaultIndexes);
    return <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveIndexes([0])}>选中第一个</Button>
          <Button onClick={() => setActiveIndexes([1])}>选中第二个</Button>
        </div>
        <Menu {...args} activeIndexes={activeIndexes} onChange={(_, indexes) => setActiveIndexes(indexes)} />
      </div>;
  }
}`,...(ke=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Se,_e,Ae;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: ['menu2']
  },
  render: args => {
    const [activeKeys, setActiveKeys] = React.useState<MenuItemKey | MenuItemKey[]>(args.defaultKeys);
    return <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveKeys('menu1')}>选中第一个</Button>
          <Button onClick={() => setActiveKeys('menu2')}>选中第二个</Button>
        </div>
        <Menu {...args} activeKeys={activeKeys} onChange={keys => setActiveKeys(keys)} />
      </div>;
  }
}`,...(Ae=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};const os=["基础示例","固定高度","边距和间距","横向排列","横向排列_超出滚动","横向排列_超出换行","单选模式","多选模式","Windows风格","Windows风格_仅图标","Windows风格_横向","Windows风格_横向_仅图标","Windows风格_多选","beforeItemRender","额外元素","受控模式_Index","受控模式_Keys"];export{w as Windows风格,h as Windows风格_仅图标,b as Windows风格_多选,y as Windows风格_横向,v as Windows风格_横向_仅图标,os as __namedExportsOrder,a as beforeItemRender,ts as default,p as 单选模式,M as 受控模式_Index,x as 受控模式_Keys,c as 固定高度,d as 基础示例,g as 多选模式,l as 横向排列,u as 横向排列_超出换行,n as 横向排列_超出滚动,m as 边距和间距,f as 额外元素};
