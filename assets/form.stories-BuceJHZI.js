import{a as e,j as m}from"./mini-scrollbar-CovzJoiJ.js";import{F as l}from"./index-pbFBgpfh.js";import{I as a}from"./index-CI-pzQoc.js";import"./index-D95NPG_q.js";import"./index-CK_3fjli.js";import{S as g}from"./select-D-_DVTk6.js";import{C as I}from"./checkbox-group-BFn_9th0.js";import{R as b}from"./radio-group-8txZ_xk5.js";import{S as F}from"./switch-text-CITeuSRQ.js";import{B as o}from"./button-rm53FtF1.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./use-taomu-classname-DM2_Z24H.js";import"./global-style-emPCDtl7.js";import"./form-item-C-QP9SCV.js";import"./radio-K8-kgQeA.js";import"./switch-D8hyqKMU.js";import"./index-_UnNtNEu.js";import"./loading-C9fjBMuP.js";import"./input.styled-CAYR-obT.js";import"./x-circle-ehOOJA42.js";import"./index-Dw6WB_A6.js";import"./checkbox-BtBRIfuK.js";import"./dropdown-CGTNDKXn.js";import"./index-Dvld9rH6.js";import"./popup-trigger-C3L69WIX.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-DsFx4roX.js";import"./menu-DRUjh2Ck.js";import"./menu-item-DJ8LZOPp.js";const X={title:"Components/Form",component:l,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},s={render:()=>{const{formInstance:n,clearFormAllValues:r}=l.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:m(l,{formInstance:n,onSubmit:t=>{console.log(t),alert(JSON.stringify(t))},children:[e(l.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(a,{allowClear:!0,placeholder:"请输入"})}),e(l.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(a,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(l.Item,{label:"选择器",name:"select",required:!0,children:e(g,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(l.Item,{label:"多选框",name:"checkbox",required:!0,children:e(I,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(l.Item,{label:"单选框",name:"radio",required:!0,onChange:t=>{console.log(t)},children:e(b,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(l.Item,{label:"开关",name:"switch",required:!0,onChange:t=>console.log(t),children:e(F,{children:"Switch text"})}),e(l.Item,{children:m("div",{className:"flex gap-12",children:[e(o,{type:"primary",htmltype:"submit",children:"提交"}),e(o,{type:"default",htmltype:"reset",children:"重置"}),e(o,{type:"default",onClick:()=>{r()},children:"清空"})]})})]})})}},u={render:()=>{const{formInstance:n}=l.useForm();return m("div",{children:[m(l,{formInstance:n,onSubmit:r=>{console.log(r)},children:[e(l.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(a,{allowClear:!0,placeholder:"请输入"})}),e(l.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(a,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(l.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]}),m(l,{layout:"inline",formInstance:n,onSubmit:r=>{console.log(r)},children:[e(l.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(a,{allowClear:!0,placeholder:"请输入"})}),e(l.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(a,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(l.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]}),m(l,{layout:"vertical",formInstance:n,onSubmit:r=>{console.log(r)},children:[e(l.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(a,{allowClear:!0,placeholder:"请输入"})}),e(l.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(a,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(l.Item,{children:e(o,{type:"primary",htmltype:"submit",children:"提交"})})]})]})}};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <Input allowClear placeholder="请输入" />
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

          <Form.Item label="开关" name="switch" required onChange={e => console.log(e)}>
            <SwitchText>Switch text</SwitchText>
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
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,h,v;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(h=u.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Y=["基础示例","布局"];export{Y as __namedExportsOrder,X as default,s as 基础示例,u as 布局};
