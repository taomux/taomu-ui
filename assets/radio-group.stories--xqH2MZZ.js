import{R as e,e as s,a as l}from"./iframe-P3Y-woc8.js";const d={title:"Components/Radio/RadioGroup",component:e,tags:["autodocs"],argTypes:{}},a={args:{options:[{label:"Radio 1",value:"1"},{label:"Radio 2",value:"2"},{label:"Radio 3",value:"3"}]},render:o=>{const[n,r]=s.useState();return l(e,{...o,value:n,onChange:t=>r(t.target.value)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Radio 1',
      value: '1'
    }, {
      label: 'Radio 2',
      value: '2'
    }, {
      label: 'Radio 3',
      value: '3'
    }]
  },
  render: args => {
    const [value, setValue] = React.useState<StringAndNumber>();
    return <RadioGroup {...args} value={value} onChange={r => setValue(r.target.value)} />;
  }
}`,...a.parameters?.docs?.source}}};const i=["基础示例"];export{i as __namedExportsOrder,d as default,a as 基础示例};
