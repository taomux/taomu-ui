import{a as r}from"./mini-scrollbar-CZ8eNCm3.js";import{M as le}from"./menu-D8uTjR7R.js";import"./index-RNVBsLn4.js";import{A as pe}from"./activity-B-N34vtE.js";import{A as ue,a as ge}from"./alert-triangle-DUSJc6lc.js";import{A as we,S as he}from"./save-CpYvOxAp.js";import{a as be}from"./popup-trigger-BkAvKTYJ.js";import"./jsx-runtime-CLpGMVip.js";import"./index-CZMpeKRu.js";import"./use-taomu-classname-CGrN28Ws.js";import"./global-vars-CQDXv0Fn.js";import"./empty-si-ChZ48.js";import"./index-bPVxIqPX.js";import"./menu-item-CgXwQbRp.js";import"./index-CUnKnXLJ.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./popup.store-C2C6BHPT.js";const Ke={title:"Components/Menu",component:le,tags:["autodocs"],argTypes:{}},e=[{name:"menu1",icon:r(pe,{size:16}),label:"选项1"},{name:"menu2",icon:r(ue,{size:16}),label:"选项2"},{name:"menu3",icon:r(ge,{size:16}),label:"选项3",disabled:!0},{name:"menu4",icon:r(we,{size:16}),label:"选项4"},{name:"menu5",icon:r(he,{size:16}),label:"选项5"}],M=[{label:"菜单1",onClick:()=>console.log("onClick 1")},{label:"菜单2"},{label:"菜单-禁用",disabled:!0,onClick:()=>console.log("onClick 3")},{label:"菜单-选中",active:!0},{label:"菜单-选中-禁用",active:!0,disabled:!0},{label:"菜单3"},{label:"不可见",visible:!1},{divider:!0},{label:"自定义属性"},{label:"自定义图标",icon:r(pe,{size:16})},{label:"超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本"},{label:"超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略",ellipsis:!0,title:"超出省略 hover title 需要手动传入"}],a={args:{width:200,items:M}},n={args:{width:200,height:120,items:M}},i={args:{width:200,padding:0,gap:0,itemProps:{radius:0},items:M}},d={args:{items:e,direction:"horizontal"}},o={args:{items:e,direction:"horizontal",width:300}},m={args:{items:e,direction:"horizontal",width:300,overflowBreak:!0}},c={args:{items:e,mode:"radio"}},p={args:{items:e,mode:"checkbox",width:200}},l={args:{items:e,mode:"radio",styleMode:"windows",width:200,defaultIndex:[1]}},u={args:{items:e.map(s=>({icon:s.icon})),mode:"radio",styleMode:"windows"}},g={args:{items:e,mode:"radio",styleMode:"windows",direction:"horizontal"}},w={args:{items:e.map(s=>({icon:s.icon})),mode:"radio",styleMode:"windows",direction:"horizontal"}},h={args:{items:e,mode:"checkbox",styleMode:"windows",width:200}},t={args:{items:e,mode:"radio",styleMode:"windows",width:200,defaultKeys:"menu2",beforeItemRender:(s,b)=>b.disabled?s:r(be,{trigger:"hover",position:"right",content:()=>r("div",{className:"px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12",children:b.label}),children:s},b.name)}};var f,y,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    width: 200,
    items: testMenus2
  }
}`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,_,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 120,
    items: testMenus2
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,x,W;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: {
      radius: 0
    },
    items: testMenus2
  }
}`,...(W=(x=i.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var A,I,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal'
  }
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var P,R,T,N,B;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Default",...(B=(N=o.parameters)==null?void 0:N.docs)==null?void 0:B.description}}};var K,j,D;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true
  }
}`,...(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,L,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,F,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndex: [1]
  }
}`,...(Q=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,X;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows'
  }
}`,...(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: testMenus.map(item => ({
      icon: item.icon
    })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal'
  }
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,te,ae;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ie,de,me,ce;t.parameters={...t.parameters,docs:{...(ne=t.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(ie=t.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"使用 `beforeItemRender` 函数为菜单项添加包裹层",...(ce=(me=t.parameters)==null?void 0:me.docs)==null?void 0:ce.description}}};const je=["基础示例","固定高度","边距和间距","横向排列","横向排列_超出滚动","横向排列_超出换行","单选模式","多选模式","Windows风格","Windows风格_仅图标","Windows风格_横向","Windows风格_横向_仅图标","Windows风格_多选","beforeItemRender"];export{l as Windows风格,u as Windows风格_仅图标,h as Windows风格_多选,g as Windows风格_横向,w as Windows风格_横向_仅图标,je as __namedExportsOrder,t as beforeItemRender,Ke as default,c as 单选模式,n as 固定高度,a as 基础示例,p as 多选模式,d as 横向排列,m as 横向排列_超出换行,o as 横向排列_超出滚动,i as 边距和间距};
