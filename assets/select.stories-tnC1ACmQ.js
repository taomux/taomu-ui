import{a as r,j as V}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";import{R as n}from"./index-l2PZgWEW.js";import"./index-Ct6AoaM2.js";import{u as Me,a as je,c as Be}from"./use-taomu-classname-BHBGss1S.js";import{s as We,c as qe,l as q}from"./mini-scrollbar-DUVypj3v.js";import{u as Ae,i as He,a as Ue,b as Fe}from"./input.styled-D5KV9H9K.js";import"./index-BXaX6dLG.js";import"./index-B7c9_jvv.js";import{D as Je}from"./dropdown-CGK3jTFE.js";import{S as Qe,C as Xe,a as Ye}from"./search-CFe4NkL3.js";import{L as Ze}from"./loading-DEh7TbkL.js";import{B as Ke}from"./button-DXEHRL-y.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-B888oYOY.js";import"./popup-trigger-BnUp-N6y.js";import"./index-6lph7OXq.js";import"./popup.store-CruYBn8Q.js";import"./menu-DCOHPR0s.js";import"./menu-item-KQygMNP2.js";import"./index-CE9T9n2a.js";We("common",{});const we=qe``,u=n.forwardRef(({className:s,cssVars:g,style:x,status:O="default",allowClear:A,width:ve="100%",height:be=32,padding:Se="0 8px",placeholder:he,radius:xe,leftNode:Oe,rightNode:H,showSearch:i,options:a,loading:ye,defaultOpened:Ie=!1,openOnFocus:U,closeOnBlur:Ee=!0,dropdownProps:I={},labelProp:F="label",valueProp:d="value",filterProp:E="label",onChange:b,onFocus:$,onBlur:z,onKeyDown:D,...G},ke)=>{const S=n.useRef(null),p=n.useRef(null),[J,M]=n.useState(!1),[o,Q]=n.useState(Ie),[v,k]=n.useState(),[h,X]=n.useState(""),[f,Re]=Ae(G.defaultValue,{value:G.value,onChange:Te}),_e=Me("select","flex row center-v gap-6",`status-${O}`,{focused:J},s),Ne=je({inputWidth:ve,inputHeight:be,inputPadding:Se,inputRadius:xe,...g},x);n.useImperativeHandle(ke,()=>({opened:o,input:S.current,dropdown:p.current,setFocused:M})),n.useEffect(()=>{var t,e,l;console.log({opened:o}),o?(t=S.current)!=null&&t.parentElement?(e=p.current)==null||e.openPopup(S.current.parentElement):console.warn("Select open field: element not found"):(l=p.current)==null||l.closePopup()},[o]),n.useEffect(()=>{var t;if(i){const e=a==null?void 0:a.find(l=>l[d]===f);e&&X(((t=e==null?void 0:e.label)==null?void 0:t.toString())||"")}},[f,i,d]);const m=n.useMemo(()=>{var e;const t=[];if(!(a!=null&&a.length))return t;for(let l=0;l<a.length;l++){const c=a[l];if(i&&h){const y=typeof E=="string"?[E]:E;let K=!1;for(let W=0;W<y.length;W++){const Ge=y[W];if((e=c[Ge])!=null&&e.includes(h)){K=!0;break}}if(!K)continue}t.push({key:(c.key||c[d])??l,active:v===l,...c})}return t},[a,v,h,E]);n.useEffect(()=>{j()},[f,h]);const Le=n.useMemo(()=>{if(i)return h;if(!f)return"";const t=a==null?void 0:a.find(l=>l[d]===f);return(t==null?void 0:t[F])||f},[f,a,F,d,h,i]);function Te(t){const e=a==null?void 0:a.findIndex(c=>c.value===t);if(e===void 0||e<0)return;const l=a==null?void 0:a[e];k(e),b==null||b(l==null?void 0:l[d],l)}function Y(t=0){const e=m==null?void 0:m[t<0?0:t];e&&(Re(e[d]),b==null||b(e[d],e),B())}function j(){const t=a==null?void 0:a.findIndex(e=>e[d]===f);k(t)}function Z(){j(),Q(!0)}function B(){console.log("closeOptionList"),j(),Q(!1)}function Ce(t){M(!0),$==null||$(t),console.log("handleOnFocus"),setTimeout(()=>{var e,l,c,y;console.log({openOnFocus:U,opened:o,isEnter:(l=(e=p.current)==null?void 0:e.popupPortal)==null?void 0:l.isEnter}),U&&!o&&!((y=(c=p.current)==null?void 0:c.popupPortal)!=null&&y.isEnter)&&Z()},20)}function Ve(t){M(!1),z==null||z(t),console.log("handleOnBlur"),Ee&&B()}function $e(t){switch(D==null||D(t),t.key){case"Escape":B();break;case"Enter":o?Y(v):Z();break;case"ArrowDown":if(o){t.preventDefault();const e=v===void 0?0:(v+1)%m.length;k(e)}break;case"ArrowUp":if(o){t.preventDefault();const e=v===void 0?m.length-1:(v-1+m.length)%m.length;k(e)}break}}function ze(t){var e,l,c;i&&(X(t.target.value),!((l=(e=p.current)==null?void 0:e.popupPortal)!=null&&l.isEnter)&&S.current&&((c=p.current)==null||c.openPopup(S.current.parentElement)))}function De(){return H||(ye?r(Ze,{size:16,weight:2}):i&&J?r(Qe,{size:16,color:q("colorTextGray")}):o?r(Xe,{size:16,color:q("colorTextGray")}):r(Ye,{size:16,color:q("colorTextGray")}))}return r(Je,{ref:p,trigger:"click",equalWidth:"equal",menus:m,onMenuItemClick:(t,e)=>{Y(e)},...I,portalOptions:{escToClose:!0,...I==null?void 0:I.portalOptions},children:V("div",{className:_e,style:Ne,css:[He,Ue,we],onKeyDown:$e,...G,children:[Oe,r("input",{ref:S,css:Fe,readOnly:!i,placeholder:he,value:Le,className:Be({cud:!i}),onFocus:Ce,onBlur:Ve,onChange:ze}),De()]})})});try{u.displayName="Select",u.__docgenInfo={description:"",displayName:"Select",props:{}}}catch{}const ht={title:"Components/Select",component:u,tags:["autodocs"],argTypes:{}},R={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},_={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:s=>V("div",{className:"grid col-3 gap-12",children:[r(u,{...s}),r(u,{...s}),r(u,{...s}),r(u,{...s}),r(u,{...s}),r(u,{...s})]})},N={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},L={args:{placeholder:"请选择"},render:s=>{const[g,x]=n.useState([]);return n.useEffect(()=>{let O=0;const A=setInterval(()=>{x([{label:`选项1-${O}`,value:1},{label:`选项2-${O}`,value:2}]),O++},1e3);return()=>clearInterval(A)},[]),r(u,{...s,options:g})}},T={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:s=>{const[g,x]=n.useState(!0);return V("div",{className:"flex col gap-12",children:[V(Ke,{onClick:()=>x(!g),children:["loading: ",g+""]}),r(u,{...s,loading:g})]})}},C={args:{placeholder:"请选择",value:"1",options:[{label:"选项1, value 固定为1",value:"1"},{label:"选项2",value:"2"}]}};var w,P,ee;R.parameters={...R.parameters,docs:{...(w=R.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(ee=(P=R.parameters)==null?void 0:P.docs)==null?void 0:ee.source}}};var te,le,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,re,se;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ce,ue,oe;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(oe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,de,pe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var fe,me,ge;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const xt=["基础示例","聚焦自动打开","支持搜索","数据刷新","加载中","受控组件"];export{xt as __namedExportsOrder,ht as default,T as 加载中,C as 受控组件,R as 基础示例,N as 支持搜索,L as 数据刷新,_ as 聚焦自动打开};
