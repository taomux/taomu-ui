import{a as i}from"./mini-scrollbar-DnfR8E9z.js";import{R as p}from"./index-D4lIrffr.js";import{R as t}from"./radio-group-7_DZmV9-.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-CR-sgA-2.js";import"./radio-A3JkOk5O.js";import"./global-vars-CYosUT7W.js";const f={title:"Components/Radio/RadioGroup",component:t,tags:["autodocs"],argTypes:{}},a={args:{options:[{label:"Radio 1",value:"1"},{label:"Radio 2",value:"2"},{label:"Radio 3",value:"3"}]},render:n=>{const[s,l]=p.useState();return i(t,{...n,value:s,onChange:u=>l(u.target.value)})}};var e,o,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const S=["基础示例"];export{S as __namedExportsOrder,f as default,a as 基础示例};
