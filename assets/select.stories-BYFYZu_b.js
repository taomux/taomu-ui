import{f as a,j as m,a as n,e as v,B as b}from"./iframe-Ci2SqJ0Y.js";const h={title:"Components/Select",component:a,tags:["autodocs"],argTypes:{}},t={args:{placeholder:"请选择",value:0,options:[{label:"选项0",value:0},{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},c={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:e=>m("div",{className:"grid col-3 gap-12",children:[n(a,{...e}),n(a,{...e}),n(a,{...e}),n(a,{...e}),n(a,{...e}),n(a,{...e})]})},u={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},d={args:{placeholder:"请选择",options:[]}},s={args:{placeholder:"请选择"},render:e=>{const[r,l]=v.useState([]);return v.useEffect(()=>{let o=0;const g=setInterval(()=>{l([{label:`选项1-${o}`,value:1},{label:`选项2-${o}`,value:2}]),o++},1e3);return()=>clearInterval(g)},[]),n(a,{...e,options:r,dropdownProps:{dynamic:!0}})}},p={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[r,l]=v.useState(!0);return m("div",{className:"flex col gap-12",children:[m(b,{onClick:()=>l(!r),children:["loading: ",r+""]}),n(a,{...e,loading:r})]})}},i={args:{placeholder:"请选择",value:"1",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[r,l]=v.useState(e.value);return n("div",{children:n(a,{...e,value:r,onChange:(o,g)=>l(g)})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: []
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"使用 `dropdownProps.dynamic` 动态刷新数据\n\n⚠️需要注意存在弹层嵌套时会导致循环刷新⚠️",...s.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const f=["基础示例","聚焦自动打开","支持搜索","空选项","数据刷新","加载中","受控组件"];export{f as __namedExportsOrder,h as default,p as 加载中,i as 受控组件,t as 基础示例,u as 支持搜索,s as 数据刷新,d as 空选项,c as 聚焦自动打开};
