import{a as e,j as o,k as y}from"./mini-scrollbar-1dk_y2Qh.js";import{F as a}from"./index-CA-f8fi_.js";import{I as l}from"./index-C8myRggy.js";import"./index-Ds1KdkI-.js";import"./index-BJXMQOYF.js";import{S as f}from"./select-BiqgRB-9.js";import{C}from"./checkbox-group-2P6_oZPC.js";import{R as w}from"./radio-group-DfXW32Ds.js";import{S as x}from"./switch-text-DWPFVuco.js";import{B as n}from"./button-V48wHozB.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./form-item-CMjpWpa1.js";import"./radio-uoFrRa2P.js";import"./switch-B7waCPdc.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./switch-theme-BvmwJpYr.js";import"./index-B2-v9W4q.js";import"./sun-Chl-fKFA.js";import"./input.styled-aaxw84SM.js";import"./x-circle-B-v9SAgR.js";import"./checkbox-ELlBHack.js";import"./dropdown-icrASy0p.js";import"./index-ahrChKj1.js";import"./popup-trigger-BYKcKynk.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./menu-CVXdeK9f.js";import"./empty-BT6epCKp.js";import"./menu-item-JMdMp9ko.js";const oe={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},s={render:()=>{const{formInstance:m,clearFormAllValues:r}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:o(a,{formInstance:m,onSubmit:t=>{console.log(t),alert(JSON.stringify(t))},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入",onChange:t=>console.log(t)})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(f,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(C,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:t=>{console.log(t)},children:e(w,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",children:e(x,{onChange:async t=>{console.log(t),await y(1e3)},children:"Switch text"})}),e(a.Item,{children:o("div",{className:"flex gap-12",children:[e(n,{type:"primary",htmlType:"submit",children:"提交"}),e(n,{type:"default",htmlType:"reset",children:"重置"}),e(n,{type:"default",onClick:()=>{r()},children:"清空"})]})})]})})}},u={render:()=>{const{formInstance:m}=a.useForm();return o("div",{children:[o(a,{formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]}),o(a,{layout:"inline",formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]}),o(a,{layout:"vertical",formInstance:m,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]})]})}},i={render:()=>{const{formInstance:m}=a.useForm();return e("div",{children:o(a,{formInstance:m,labelWidth:100,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(l,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(l,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(n,{type:"primary",htmlType:"submit",children:"提交"})})]})})}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const ne=["基础示例","布局","LabelWidth"];export{i as LabelWidth,ne as __namedExportsOrder,oe as default,s as 基础示例,u as 布局};
