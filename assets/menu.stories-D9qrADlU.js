import{a as s}from"./mini-scrollbar-Bq2Cewqh.js";import{M as ae}from"./menu-DJ5Dr7V0.js";import{A as te}from"./activity-CJCCpKeJ.js";import{A as ne,a as ie}from"./alert-triangle-DYG16pxB.js";import{A as ce,S as de}from"./save-C3XNyep-.js";import"./_getTag-Dgi2y9Uc.js";import"./index-l2PZgWEW.js";import"./use-taomu-classname-Bo7IX2bY.js";import"./menu-item-Dp48SuEn.js";import"./index-zbzXvoZu.js";import"./index-CE9T9n2a.js";const Se={title:"Components/Menu",component:ae,tags:["autodocs"],argTypes:{}},e=[{icon:s(te,{size:16}),label:"选项1"},{icon:s(ne,{size:16}),label:"选项2"},{icon:s(ie,{size:16}),label:"选项3"},{icon:s(ce,{size:16}),label:"选项4"},{icon:s(de,{size:16}),label:"选项5"}],h=[{label:"菜单1",onClick:()=>console.log("onClick 1")},{label:"菜单2"},{label:"菜单-禁用",disabled:!0,onClick:()=>console.log("onClick 3")},{label:"菜单-选中",active:!0},{label:"菜单-选中-禁用",active:!0,disabled:!0},{label:"菜单3"},{label:"不可见",visible:!1},{divider:!0},{label:"自定义属性"},{label:"自定义图标",icon:s(te,{size:16})},{label:"超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"},{label:"超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略",ellipsis:!0,title:"超出省略 hover title 需要手动传入"}],o={args:{width:200,items:h}},t={args:{width:200,height:120,items:h}},a={args:{width:200,padding:0,gap:0,itemProps:{radius:0},items:h}},n={args:{items:e,direction:"horizontal"}},r={args:{items:e,direction:"horizontal",width:300}},i={args:{items:e,direction:"horizontal",width:300,overflowBreak:!0}},c={args:{items:e,mode:"radio"}},d={args:{items:e,mode:"checkbox",width:200}},m={args:{items:e,mode:"radio",styleMode:"windows",width:200}},l={args:{items:e.map(w=>({icon:w.icon})),mode:"radio",styleMode:"windows"}},p={args:{items:e,mode:"radio",styleMode:"windows",direction:"horizontal"}},u={args:{items:e.map(w=>({icon:w.icon})),mode:"radio",styleMode:"windows",direction:"horizontal"}},g={args:{items:e,mode:"checkbox",styleMode:"windows",width:200}};var M,b,z;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    width: 200,
    items: testMenus2
  }
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var _,S,y;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 120,
    items: testMenus2
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,k,W;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: {
      radius: 0
    },
    items: testMenus2
  }
}`,...(W=(k=a.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,x,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal'
  }
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var C,B,P,T,j;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300
  }
}`,...(P=(B=r.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:"Default",...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var D,E,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true
  }
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,q,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio'
  }
}`,...(F=(q=c.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,H,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200
  }
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,N;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200
  }
}`,...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,R,U;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows'
  }
}`,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,re,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const ye=["基础示例","固定高度","边距和间距","横向排列","横向排列_超出滚动","横向排列_超出换行","单选模式","多选模式","Windows风格","Windows风格_仅图标","Windows风格_横向","Windows风格_横向_仅图标","Windows风格_多选"];export{m as Windows风格,l as Windows风格_仅图标,g as Windows风格_多选,p as Windows风格_横向,u as Windows风格_横向_仅图标,ye as __namedExportsOrder,Se as default,c as 单选模式,t as 固定高度,o as 基础示例,d as 多选模式,n as 横向排列,i as 横向排列_超出换行,r as 横向排列_超出滚动,a as 边距和间距};
