import{a as e,j as m,S as v}from"./mini-scrollbar-BRbUwqmL.js";import{F as a}from"./index-Bor54P3n.js";import{I as r}from"./index-cJAsIJmo.js";import"./index-B1pybB_d.js";import"./index-DYbj1BER.js";import{S as I}from"./select-Cdk3yrvy.js";import{C as b}from"./checkbox-group-eUA05zy6.js";import{R as F}from"./radio-group-BZn_eW8k.js";import{S as y}from"./switch-text-CDoafc5g.js";import{B as o}from"./button-9XEQia8c.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./use-taomu-classname-DvhRoCTO.js";import"./global-style-QoB4c899.js";import"./form-item-BXuAwI0y.js";import"./radio-Bnjtpt_7.js";import"./switch-tkEaZOLo.js";import"./index-DUskeos7.js";import"./loading-B3JByMQH.js";import"./input.styled-sT3znOwy.js";import"./x-circle-ehOOJA42.js";import"./index-Dw6WB_A6.js";import"./checkbox-DSUVCzTP.js";import"./dropdown-DKsReAnr.js";import"./index-DooJlp1X.js";import"./popup-trigger-kY5N0Z_u.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-CEPolm7I.js";import"./menu-Djxl_b9P.js";import"./menu-item-CAh3YJAo.js";const Y={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},s={render:()=>{const{formInstance:n,clearFormAllValues:t}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:m(a,{formInstance:n,onSubmit:l=>{console.log(l),alert(JSON.stringify(l))},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(r,{allowClear:!0,placeholder:"请输入",onChange:l=>console.log(l)})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(r,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(I,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(b,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:l=>{console.log(l)},children:e(F,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",children:e(y,{onChange:async l=>{console.log(l),await v(1e3)},children:"Switch text"})}),e(a.Item,{children:m("div",{className:"flex gap-12",children:[e(o,{type:"primary",htmltype:"submit",children:"提交"}),e(o,{type:"default",htmltype:"reset",children:"重置"}),e(o,{type:"default",onClick:()=>{t()},children:"清空"})]})})]})})}},u={render:()=>{const{formInstance:n}=a.useForm();return m("div",{children:[m(a,{formInstance:n,onSubmit:t=>{console.log(t)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(r,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(r,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]}),m(a,{layout:"inline",formInstance:n,onSubmit:t=>{console.log(t)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(r,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(r,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]}),m(a,{layout:"vertical",formInstance:n,onSubmit:t=>{console.log(t)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(r,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(r,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]})]})}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      formInstance,
      clearFormAllValues
    } = Form.useForm<any>({
      defaultValues: {
        name: '张三',
        length: '11',
        select: '2',
        checkbox: [2]
      }
    });
    return <div>
        <Form formInstance={formInstance} onSubmit={values => {
        console.log(values);
        alert(JSON.stringify(values));
      }}>
          <Form.Item label="姓名" name="name" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }}>
            <Input allowClear placeholder="请输入" onChange={e => console.log(e)} />
          </Form.Item>
          <Form.Item label="尺寸" name="length" min={{
          value: 1,
          message: '最小为1'
        }} max={{
          value: 20,
          message: '最大为20'
        }} required pattern={{
          value: /^[0-9]{1,2}$/,
          message: '1-20的整数'
        }}>
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item label="选择器" name="select" required>
            <Select placeholder="请选择" options={[{
            label: '选项1',
            value: 1
          }, {
            label: '选项2',
            value: 2
          }]} allowClear />
          </Form.Item>

          <Form.Item label="多选框" name="checkbox" required>
            <CheckboxGroup options={[{
            label: '选项1',
            value: 1
          }, {
            label: '选项2',
            value: 2
          }, {
            label: '选项3',
            value: 3
          }]} />
          </Form.Item>

          <Form.Item label="单选框" name="radio" required onChange={e => {
          console.log(e);
        }}>
            <RadioGroup options={[{
            label: '选项1',
            value: 1
          }, {
            label: '选项2',
            value: 2
          }, {
            label: '选项3',
            value: 3
          }]} />
          </Form.Item>

          <Form.Item label="开关" name="switch">
            <SwitchText onChange={async e => {
            console.log(e);
            await sleep(1000);
          }}>
              Switch text
            </SwitchText>
          </Form.Item>

          <Form.Item>
            <div className="flex gap-12">
              <Button type="primary" htmltype="submit">
                提交
              </Button>
              <Button type="default" htmltype="reset">
                重置
              </Button>
              <Button type="default" onClick={() => {
              clearFormAllValues();
            }}>
                清空
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,h,g;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const {
      formInstance
    } = Form.useForm();
    return <div>
        <Form formInstance={formInstance} onSubmit={values => {
        console.log(values);
      }}>
          <Form.Item label="姓名" name="name" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item label="尺寸" name="length" min={{
          value: 1,
          message: '最小为1'
        }} max={{
          value: 20,
          message: '最大为20'
        }} pattern={{
          value: /^[0-9]{1,2}$/,
          message: '1-20的整数'
        }}>
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmltype="submit">
              提交
            </Button>
          </Form.Item>
        </Form>

        <Form layout="inline" formInstance={formInstance} onSubmit={values => {
        console.log(values);
      }}>
          <Form.Item label="姓名" name="name" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item label="尺寸" name="length" min={{
          value: 1,
          message: '最小为1'
        }} max={{
          value: 20,
          message: '最大为20'
        }} pattern={{
          value: /^[0-9]{1,2}$/,
          message: '1-20的整数'
        }}>
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmltype="submit">
              提交
            </Button>
          </Form.Item>
        </Form>

        <Form layout="vertical" formInstance={formInstance} onSubmit={values => {
        console.log(values);
      }}>
          <Form.Item label="姓名" name="name" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item label="尺寸" name="length" min={{
          value: 1,
          message: '最小为1'
        }} max={{
          value: 20,
          message: '最大为20'
        }} pattern={{
          value: /^[0-9]{1,2}$/,
          message: '1-20的整数'
        }}>
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmltype="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(g=(h=u.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Z=["基础示例","布局"];export{Z as __namedExportsOrder,Y as default,s as 基础示例,u as 布局};
