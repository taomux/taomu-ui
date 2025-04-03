import{a as e,j as n,k as B}from"./mini-scrollbar-1dk_y2Qh.js";import{R as k}from"./index-D4lIrffr.js";import{F as a}from"./index-DKvBSnL1.js";import{I as t}from"./index-CqpZ5Dud.js";import"./index-B4qrdscw.js";import"./index-D1L8ZmSS.js";import{S as x}from"./select-CXXXJg-4.js";import{C as T}from"./checkbox-group-2P6_oZPC.js";import{R as D}from"./radio-group-DfXW32Ds.js";import{S as V}from"./switch-text-DWPFVuco.js";import{B as m}from"./button-B9za9TDP.js";import{u as S}from"./dialog.hooks-Bj5mn1uE.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./form-item-CdkA7WMp.js";import"./radio-uoFrRa2P.js";import"./switch-B7waCPdc.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./switch-theme-BvmwJpYr.js";import"./index-B2-v9W4q.js";import"./sun-Chl-fKFA.js";import"./input.styled-aaxw84SM.js";import"./x-circle-B-v9SAgR.js";import"./checkbox-ELlBHack.js";import"./dialog-BMg1r54e.js";import"./conversion-DyjZL1Co.js";import"./x-BK-4WeVA.js";import"./index-CfuAEkNK.js";import"./popup-trigger-GAT61Aah.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./dropdown-DL3C16A4.js";import"./menu-C5ApdgfH.js";import"./empty-BT6epCKp.js";import"./menu-item-JMdMp9ko.js";import"./dialog.portal-tq69pR5S.js";const Fe={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},s={render:()=>{const{formInstance:l,clearFormAllValues:r}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:n(a,{formInstance:l,onSubmit:o=>{console.log(o),alert(JSON.stringify(o))},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入",onChange:o=>console.log(o)})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(x,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(T,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:o=>{console.log(o)},children:e(D,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",children:e(V,{onChange:async o=>{console.log(o),await B(1e3)},children:"Switch text"})}),e(a.Item,{children:n("div",{className:"flex gap-12",children:[e(m,{type:"primary",htmlType:"submit",children:"提交"}),e(m,{type:"default",htmlType:"reset",children:"重置"}),e(m,{type:"default",onClick:()=>{r()},children:"清空"})]})})]})})}},u={render:()=>{const{formInstance:l}=a.useForm();return n("div",{children:[n(a,{formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"提交"})})]}),n(a,{layout:"inline",formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"提交"})})]}),n(a,{layout:"vertical",formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"提交"})})]})]})}},i={render:()=>{const{formInstance:l}=a.useForm();return e("div",{children:n(a,{formInstance:l,labelWidth:100,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"提交"})})]})})}},q=({a:l})=>{const{open:r}=S(q,{title:"test2"}),{formInstance:o}=a.useForm({defaultValues:{type:0,name:""}});return k.useEffect(()=>{console.count("FormDialog init:::"+l)},[]),n(a,{formInstance:o,onSubmit:$=>{console.log($)},labelWidth:100,children:[e(a.Item,{label:"名称",name:"name",required:!0,children:e(t,{placeholder:"请输入"})}),e(a.Item,{label:"类型",name:"type",required:"请选择类型",children:e(x,{options:[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2}]})}),e(m,{onClick:()=>{r()},children:"open"})]})},c={render:()=>{const{open:l}=S(q,{title:"test"});return e("div",{children:e(m,{onClick:()=>{l({a:"ok"})},children:"Open Dialog"})})}};var p,d,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,v,I;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(v=u.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,F,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(F=i.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var f,C,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const {
      open
    } = useDialog(FormDialog, {
      title: 'test'
    });
    return <div>
        <Button onClick={() => {
        open({
          a: 'ok'
        });
      }}>
          Open Dialog
        </Button>
      </div>;
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const ye=["基础示例","布局","LabelWidth","DialogForm"];export{c as DialogForm,i as LabelWidth,ye as __namedExportsOrder,Fe as default,s as 基础示例,u as 布局};
