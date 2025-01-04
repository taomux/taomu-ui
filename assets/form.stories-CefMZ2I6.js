import{a as e,j as o,S as y}from"./mini-scrollbar-BRbUwqmL.js";import{F as a}from"./index-CjNa3YCz.js";import{I as l}from"./index-DONgOMzK.js";import"./index-C838t2gh.js";import"./index-DYbj1BER.js";import{S as f}from"./select-CtfG77eh.js";import{C}from"./checkbox-group-eUA05zy6.js";import{R as w}from"./radio-group-BZn_eW8k.js";import{S as x}from"./switch-text-CDoafc5g.js";import{B as n}from"./button-YXz2mmDt.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./use-taomu-classname-DvhRoCTO.js";import"./global-style-QoB4c899.js";import"./form-item-DpyfqMQ2.js";import"./radio-Bnjtpt_7.js";import"./switch-tkEaZOLo.js";import"./index-DUskeos7.js";import"./loading-B3JByMQH.js";import"./input.styled-sT3znOwy.js";import"./x-circle-ehOOJA42.js";import"./index-Dw6WB_A6.js";import"./checkbox-DSUVCzTP.js";import"./dropdown-D6kgbf2U.js";import"./index-BZI_Twr7.js";import"./popup-trigger-BTX0wcO3.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-CEPolm7I.js";import"./menu-CBGT1Qdk.js";import"./empty-Bz8b51HP.js";import"./menu-item-DOtmYXnY.js";const re={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},s={render:()=>{const{formInstance:m,clearFormAllValues:r}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:o(a,{formInstance:m,onSubmit:t=>{console.log(t),alert(JSON.stringify(t))},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入",onChange:t=>console.log(t)})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(f,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(C,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:t=>{console.log(t)},children:e(w,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",children:e(x,{onChange:async t=>{console.log(t),await y(1e3)},children:"Switch text"})}),e(a.Item,{children:o("div",{className:"flex gap-12",children:[e(n,{type:"primary",htmlType:"submit",children:"提交"}),e(n,{type:"default",htmlType:"reset",children:"重置"}),e(n,{type:"default",onClick:()=>{r()},children:"清空"})]})})]})})}},u={render:()=>{const{formInstance:m}=a.useForm();return o("div",{children:[o(a,{formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]}),o(a,{layout:"inline",formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]}),o(a,{layout:"vertical",formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]})]})}},i={render:()=>{const{formInstance:m}=a.useForm();return e("div",{children:o(a,{formInstance:m,labelWidth:100,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]})})}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      formInstance,
      clearFormAllValues
    } = Form.useForm<FormData>({
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
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="default" htmlType="reset">
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            <Button type="primary" htmlType="submit">
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
            <Button type="primary" htmlType="submit">
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
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var I,b,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const {
      formInstance
    } = Form.useForm();
    return <div>
        <Form formInstance={formInstance} labelWidth={100} onSubmit={values => {
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
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const te=["基础示例","布局","LabelWidth"];export{i as LabelWidth,te as __namedExportsOrder,re as default,s as 基础示例,u as 布局};
