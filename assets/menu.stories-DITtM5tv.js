import{a as r}from"./mini-scrollbar-1dk_y2Qh.js";import"./index-Ds1KdkI-.js";import{M as he}from"./menu-CVXdeK9f.js";import"./index-ahrChKj1.js";import{A as we}from"./activity-BvFYPvFO.js";import{A as be}from"./alert-circle-ByI2Mpw3.js";import{A as Me}from"./alert-triangle-ess0TkFO.js";import{A as fe,S as ye}from"./save-DvGorKtL.js";import{a as ve}from"./popup-trigger-BYKcKynk.js";import{B as Se}from"./button-V48wHozB.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./empty-BT6epCKp.js";import"./index-B2-v9W4q.js";import"./menu-item-JMdMp9ko.js";import"./index-BDZOM4eL.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./popup.store-CZruyQcO.js";const Ge={title:"Components/Menu",component:he,tags:["autodocs"],argTypes:{}},e=[{name:"menu1",icon:r(we,{size:16}),label:"选项1"},{name:"menu2",icon:r(be,{size:16}),label:"选项2"},{name:"menu3",icon:r(Me,{size:16}),label:"选项3",disabled:!0},{name:"menu4",icon:r(fe,{size:16}),label:"选项4"},{name:"menu5",icon:r(ye,{size:16}),label:"选项5"}],f=[{label:"菜单1",onClick:()=>console.log("onClick 1")},{label:"菜单2"},{label:"菜单-禁用",disabled:!0,onClick:()=>console.log("onClick 3")},{label:"菜单-选中",active:!0},{label:"菜单-选中-禁用",active:!0,disabled:!0},{label:"菜单3"},{label:"不可见",visible:!1},{divider:!0},{label:"自定义属性"},{label:"自定义图标",icon:r(we,{size:16})},{label:"超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"},{label:"超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略",ellipsis:!0,title:"超出省略 hover title 需要手动传入"}],n={args:{width:200,items:f}},a={args:{width:200,height:120,items:f}},i={args:{width:200,padding:0,gap:0,itemProps:{radius:0},items:f}},d={args:{items:e,direction:"horizontal"}},o={args:{items:e,direction:"horizontal",width:300}},m={args:{items:e,direction:"horizontal",width:300,overflowBreak:!0}},c={args:{items:e,mode:"radio"}},l={args:{items:e,mode:"checkbox",width:200}},p={args:{items:e,mode:"radio",styleMode:"windows",width:200,defaultIndex:[1]}},u={args:{items:e.map(s=>({icon:s.icon})),mode:"radio",styleMode:"windows"}},g={args:{items:e,mode:"radio",styleMode:"windows",direction:"horizontal"}},w={args:{items:e.map(s=>({icon:s.icon})),mode:"radio",styleMode:"windows",direction:"horizontal"}},h={args:{items:e,mode:"checkbox",styleMode:"windows",width:200}},t={args:{items:e,mode:"radio",styleMode:"windows",width:200,defaultKeys:"menu2",beforeItemRender:(s,M)=>M.disabled?s:r(ve,{trigger:"hover",position:"right",content:()=>r("div",{className:"px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12",children:M.label}),children:s},M.name)}},b={args:{items:e,mode:"radio",styleMode:"windows",width:200,defaultIndex:[1],children:r("div",{children:r(Se,{dashed:!0,block:!0,children:"Add"})})}};var y,v,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    width: 200,
    items: testMenus2
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var z,_,k;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 120,
    items: testMenus2
  }
}`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var x,A,W;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: {
      radius: 0
    },
    items: testMenus2
  }
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var I,B,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal'
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var P,R,T,N,K;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Default",...(K=(N=o.parameters)==null?void 0:N.docs)==null?void 0:K.description}}};var j,D,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,O,q;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio'
  }
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var F,G,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndex: [1]
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows'
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,se,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var te,ne,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200
  }
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,de,me,ce,le;t.parameters={...t.parameters,docs:{...(ie=t.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: 'menu2',
    beforeItemRender: (itemNode, props) => {
      if (props.disabled) return itemNode;
      return <PopupTrigger key={props.name} trigger="hover" position="right" content={() => <div className="px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12">{props.label}</div>}>
          {itemNode}
        </PopupTrigger>;
    }
  }
}`,...(me=(de=t.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"使用 `beforeItemRender` 函数为菜单项添加包裹层",...(le=(ce=t.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,ue,ge;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndex: [1],
    children: <div>
        <Button dashed block>
          Add
        </Button>
      </div>
  }
}`,...(ge=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const He=["基础示例","固定高度","边距和间距","横向排列","横向排列_超出滚动","横向排列_超出换行","单选模式","多选模式","Windows风格","Windows风格_仅图标","Windows风格_横向","Windows风格_横向_仅图标","Windows风格_多选","beforeItemRender","额外元素"];export{p as Windows风格,u as Windows风格_仅图标,h as Windows风格_多选,g as Windows风格_横向,w as Windows风格_横向_仅图标,He as __namedExportsOrder,t as beforeItemRender,Ge as default,c as 单选模式,a as 固定高度,n as 基础示例,l as 多选模式,d as 横向排列,m as 横向排列_超出换行,o as 横向排列_超出滚动,i as 边距和间距,b as 额外元素};
