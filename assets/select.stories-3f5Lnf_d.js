import{s as Me,c as je,a as n,j as V,l as A}from"./mini-scrollbar-BUn1XUoF.js";import{R as l}from"./index-l2PZgWEW.js";import"./index-Cz-o97uH.js";import{u as We,a as qe,c as Ae}from"./use-taomu-classname-CPnLGqwq.js";import{u as Be,i as He,a as Ue,b as Fe}from"./input.styled-CrLUBb0Y.js";import"./index-CZTU-kQM.js";import"./index-aao1w1AZ.js";import{D as Je}from"./dropdown-CAc9niU1.js";import{S as Qe,C as Xe,a as Ye}from"./search-CFe4NkL3.js";import{L as Ze}from"./loading-DGX-Y6S9.js";import{B as Ke}from"./button-qJzTgKsm.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-C-QEH7QW.js";import"./popup-trigger-BqqXL0ok.js";import"./index-BtTJd_qj.js";import"./index-zbzXvoZu.js";import"./popup.store-DSULGjyH.js";import"./menu-DtQPywV3.js";import"./menu-item-DaID7xNV.js";import"./index-CE9T9n2a.js";Me("common",{});const we=je``,c=l.forwardRef(({className:s,cssVars:m,style:h,status:y="default",allowClear:B,width:ge="100%",height:ve=32,padding:be="0 8px",placeholder:Se,radius:xe,leftNode:he,rightNode:H,showSearch:u,options:a,loading:ye,defaultOpened:Oe=!1,openOnFocus:Ie,closeOnBlur:ke=!0,dropdownProps:O={},labelProp:U="label",valueProp:o="value",filterProp:I="label",onChange:b,onFocus:$,onBlur:z,onKeyDown:D,...G},Ee)=>{const d=l.useRef(null),g=l.useRef(null),[k,M]=l.useState(!1),[S,F]=l.useState(Oe),[v,E]=l.useState(),[x,J]=l.useState(""),[p,Re]=Be(G.defaultValue,{value:G.value,onChange:Ce}),_e=We("select","flex row center-v gap-6",`status-${y}`,{focused:k},s),Ne=qe({inputWidth:ge,inputHeight:ve,inputPadding:be,inputRadius:xe,...m},h);l.useImperativeHandle(Ee,()=>({opened:S,input:d.current,dropdown:g.current,setFocused:M})),l.useEffect(()=>{var e,t;k?(e=d.current)==null||e.focus():(t=d.current)==null||t.blur()},[k]),l.useEffect(()=>{var e;if(u){const t=a==null?void 0:a.find(r=>r[o]===p);t&&J(((e=t==null?void 0:t.label)==null?void 0:e.toString())||"")}},[p,u,o]);const f=l.useMemo(()=>{var t;const e=[];if(!(a!=null&&a.length))return e;for(let r=0;r<a.length;r++){const i=a[r];if(u&&x){const Y=typeof I=="string"?[I]:I;let Z=!1;for(let q=0;q<Y.length;q++){const Ge=Y[q];if((t=i[Ge])!=null&&t.includes(x)){Z=!0;break}}if(!Z)continue}e.push({key:(i.key||i[o])??r,active:v===r,...i})}return e},[a,v,x,I]);l.useEffect(()=>{j()},[p,x]);const Te=l.useMemo(()=>{if(u)return x;if(!p)return"";const e=a==null?void 0:a.find(r=>r[o]===p);return(e==null?void 0:e[U])||p},[p,a,U,o,x,u]);function Ce(e){const t=a==null?void 0:a.findIndex(i=>i.value===e);if(t===void 0||t<0)return;const r=a==null?void 0:a[t];E(t),b==null||b(r==null?void 0:r[o],r)}function Q(e=0){const t=f==null?void 0:f[e<0?0:e];t&&(Re(t[o]),b==null||b(t[o],t),W())}function j(){const e=a==null?void 0:a.findIndex(t=>t[o]===p);E(e)}function X(){var e,t;j(),(e=d.current)!=null&&e.parentElement?(F(!0),(t=g.current)==null||t.openPopup(d.current.parentElement)):console.warn("Select open field: element not found")}function W(){var e;j(),F(!1),(e=g.current)==null||e.closePopup()}function Le(e){M(!0),$==null||$(e),setTimeout(()=>{var t,r;Ie&&!S&&!((r=(t=g.current)==null?void 0:t.popupPortal)!=null&&r.isEnter)&&X()},120)}function Ve(e){M(!1),z==null||z(e),ke&&W()}function $e(e){switch(D==null||D(e),e.key){case"Escape":W();break;case"Enter":S?Q(v):X();break;case"ArrowDown":if(S){e.preventDefault();const t=v===void 0?0:(v+1)%f.length;E(t)}break;case"ArrowUp":if(S){e.preventDefault();const t=v===void 0?f.length-1:(v-1+f.length)%f.length;E(t)}break}}function ze(e){var t,r,i;u&&(J(e.target.value),!((r=(t=g.current)==null?void 0:t.popupPortal)!=null&&r.isEnter)&&d.current&&((i=g.current)==null||i.openPopup(d.current.parentElement)))}function De(){return H||(ye?n(Ze,{size:16,weight:2}):u&&k?n(Qe,{size:16,color:A("colorTextGray")}):S?n(Xe,{size:16,color:A("colorTextGray")}):n(Ye,{size:16,color:A("colorTextGray")}))}return n(Je,{ref:g,trigger:"click",equalWidth:"equal",menus:f,onMenuItemClick:(e,t)=>{Q(t)},...O,portalOptions:{escToClose:!0,...O==null?void 0:O.portalOptions},children:V("div",{className:_e,style:Ne,css:[He,Ue,we],onKeyDown:$e,...G,children:[he,n("input",{ref:d,css:Fe,readOnly:!u,placeholder:Se,value:Te,className:Ae({cud:!u}),onFocus:Le,onBlur:Ve,onChange:ze}),De()]})})});try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{}}}catch{}const xt={title:"Components/Select",component:c,tags:["autodocs"],argTypes:{}},R={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},_={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:s=>V("div",{className:"grid col-3 gap-12",children:[n(c,{...s}),n(c,{...s}),n(c,{...s}),n(c,{...s}),n(c,{...s}),n(c,{...s})]})},N={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},T={args:{placeholder:"请选择"},render:s=>{const[m,h]=l.useState([]);return l.useEffect(()=>{let y=0;const B=setInterval(()=>{h([{label:`选项1-${y}`,value:1},{label:`选项2-${y}`,value:2}]),y++},1e3);return()=>clearInterval(B)},[]),n(c,{...s,options:m})}},C={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:s=>{const[m,h]=l.useState(!0);return V("div",{className:"flex col gap-12",children:[V(Ke,{onClick:()=>h(!m),children:["loading: ",m+""]}),n(c,{...s,loading:m})]})}},L={args:{placeholder:"请选择",value:"1",options:[{label:"选项1, value 固定为1",value:"1"},{label:"选项2",value:"2"}]}};var K,w,P;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}`,...(P=(w=R.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var ee,te,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    openOnFocus: true,
    options: [{
      label: '选项1',
      value: 1
    }, {
      label: '选项2',
      value: 2
    }]
  },
  render: args => {
    return <div className="grid col-3 gap-12">
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
      </div>;
  }
}`,...(ae=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,le,ne;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    showSearch: true,
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }, {
      label: '选项3',
      value: '3'
    }, {
      label: '选项4',
      value: '4'
    }, {
      label: '选项5',
      value: '5'
    }, {
      label: '选项6',
      value: '6'
    }]
  }
}`,...(ne=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ce,ue;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择'
  },
  render: args => {
    const [options, setOptions] = React.useState<SelectOptionItem[]>([]);
    React.useEffect(() => {
      let count = 0;
      const timer = setInterval(() => {
        setOptions([{
          label: \`选项1-\${count}\`,
          value: 1
        }, {
          label: \`选项2-\${count}\`,
          value: 2
        }]);
        count++;
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return <Select {...args} options={options} />;
  }
}`,...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var oe,ie,de;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  },
  render: args => {
    const [loading, setLoading] = React.useState(true);
    return <div className="flex col gap-12">
        <Button onClick={() => setLoading(!loading)}>loading: {loading + ''}</Button>
        <Select {...args} loading={loading} />
      </div>;
  }
}`,...(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,fe,me;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    value: '1',
    options: [{
      label: '选项1, value 固定为1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}`,...(me=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};const ht=["基础示例","聚焦自动打开","支持搜索","数据刷新","加载中","受控组件"];export{ht as __namedExportsOrder,xt as default,C as 加载中,L as 受控组件,R as 基础示例,N as 支持搜索,T as 数据刷新,_ as 聚焦自动打开};
