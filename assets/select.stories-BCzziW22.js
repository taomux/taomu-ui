import{j as g,a}from"./mini-scrollbar-1dk_y2Qh.js";import{R as m}from"./index-D4lIrffr.js";import"./index-B4qrdscw.js";import{S as r}from"./select-CXXXJg-4.js";import{B as q}from"./button-B9za9TDP.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./input.styled-aaxw84SM.js";import"./use-custom-event-BYXfsBOj.js";import"./dropdown-DL3C16A4.js";import"./index-CfuAEkNK.js";import"./popup-trigger-GAT61Aah.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./menu-C5ApdgfH.js";import"./empty-BT6epCKp.js";import"./index-B2-v9W4q.js";import"./menu-item-JMdMp9ko.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";const ce={title:"Components/Select",component:r,tags:["autodocs"],argTypes:{}},s={args:{placeholder:"请选择",value:0,options:[{label:"选项0",value:0},{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},c={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:e=>g("div",{className:"grid col-3 gap-12",children:[a(r,{...e}),a(r,{...e}),a(r,{...e}),a(r,{...e}),a(r,{...e}),a(r,{...e})]})},u={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},p={args:{placeholder:"请选择",options:[]}},o={args:{placeholder:"请选择"},render:e=>{const[n,l]=m.useState([]);return m.useEffect(()=>{let t=0;const v=setInterval(()=>{l([{label:`选项1-${t}`,value:1},{label:`选项2-${t}`,value:2}]),t++},1e3);return()=>clearInterval(v)},[]),a(r,{...e,options:n,dropdownProps:{dynamic:!0}})}},i={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[n,l]=m.useState(!0);return g("div",{className:"flex col gap-12",children:[g(q,{onClick:()=>l(!n),children:["loading: ",n+""]}),a(r,{...e,loading:n})]})}},d={args:{placeholder:"请选择",value:"1",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[n,l]=m.useState(e.value);return a("div",{children:a(r,{...e,value:n,onChange:(t,v)=>l(v)})})}};var b,S,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    value: 0,
    options: [{
      label: '选项0',
      value: 0
    }, {
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,O,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(O=c.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var R,w,y;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,I,B;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: []
  }
}`,...(B=(I=p.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var N,_,$,j,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    return <Select {...args} options={options} dropdownProps={{
      dynamic: true
    }} />;
  }
}`,...($=(_=o.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"使用 `dropdownProps.dynamic` 动态刷新数据\n\n⚠️需要注意存在弹层嵌套时会导致循环刷新⚠️",...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var L,P,V;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var k,F,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    value: '1',
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  },
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <div>
        <Select {...args} value={value} onChange={(_, value) => setValue(value)} />
      </div>;
  }
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const ue=["基础示例","聚焦自动打开","支持搜索","空选项","数据刷新","加载中","受控组件"];export{ue as __namedExportsOrder,ce as default,i as 加载中,d as 受控组件,s as 基础示例,u as 支持搜索,o as 数据刷新,p as 空选项,c as 聚焦自动打开};
