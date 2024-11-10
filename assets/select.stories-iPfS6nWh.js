import{j as d,a as r}from"./mini-scrollbar-BRbUwqmL.js";import{R as m}from"./index-DRjF_FHU.js";import"./index-B1pybB_d.js";import{S as a}from"./select-Cdk3yrvy.js";import{B as F}from"./button-9XEQia8c.js";import"./jsx-runtime-DR9Q75dM.js";import"./use-taomu-classname-DvhRoCTO.js";import"./input.styled-sT3znOwy.js";import"./global-style-QoB4c899.js";import"./dropdown-DKsReAnr.js";import"./index-DooJlp1X.js";import"./popup-trigger-kY5N0Z_u.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-CEPolm7I.js";import"./menu-Djxl_b9P.js";import"./menu-item-CAh3YJAo.js";import"./index-DUskeos7.js";import"./loading-B3JByMQH.js";import"./index-Dw6WB_A6.js";const ee={title:"Components/Select",component:a,tags:["autodocs"],argTypes:{}},o={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},n={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:e=>d("div",{className:"grid col-3 gap-12",children:[r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e})]})},t={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},s={args:{placeholder:"请选择"},render:e=>{const[l,p]=m.useState([]);return m.useEffect(()=>{let i=0;const w=setInterval(()=>{p([{label:`选项1-${i}`,value:1},{label:`选项2-${i}`,value:2}]),i++},1e3);return()=>clearInterval(w)},[]),r(a,{...e,options:l})}},c={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[l,p]=m.useState(!0);return d("div",{className:"flex col gap-12",children:[d(F,{onClick:()=>p(!l),children:["loading: ",l+""]}),r(a,{...e,loading:l})]})}},u={args:{placeholder:"请选择",value:"1",options:[{label:"选项1, value 固定为1",value:"1"},{label:"选项2",value:"2"}]}};var v,g,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,h,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var O,x,I;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var R,B,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(B=s.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var $,j,C;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,L,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const ae=["基础示例","聚焦自动打开","支持搜索","数据刷新","加载中","受控组件"];export{ae as __namedExportsOrder,ee as default,c as 加载中,u as 受控组件,o as 基础示例,t as 支持搜索,s as 数据刷新,n as 聚焦自动打开};
