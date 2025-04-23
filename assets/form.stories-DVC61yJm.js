import{a as e,j as n,k as E,F as H}from"./mini-scrollbar-1dk_y2Qh.js";import{R as K}from"./index-D4lIrffr.js";import{F as r}from"./index-DWIvNKL2.js";import{I as t}from"./index-DxVy71At.js";import"./index-CqGNJaoI.js";import"./index-iu53f_tI.js";import{S as J}from"./select-P2JAYu57.js";import{C as M}from"./checkbox-group-2P6_oZPC.js";import{R as P}from"./radio-group-DfXW32Ds.js";import{S as Q}from"./switch-text-DWPFVuco.js";import{B as o}from"./button-DRv67Xl5.js";import{u as L}from"./dialog.hooks-FXdKjpgo.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-taomu-classname-Dqq3FQ7F.js";import"./use-custom-event-BYXfsBOj.js";import"./form-item-CIn-fHDr.js";import"./radio-uoFrRa2P.js";import"./switch-B7waCPdc.js";import"./index-B3Ai5YFw.js";import"./loading-DBrME-eE.js";import"./switch-theme-BvmwJpYr.js";import"./index-B2-v9W4q.js";import"./sun-Chl-fKFA.js";import"./input.styled-aaxw84SM.js";import"./x-circle-B-v9SAgR.js";import"./checkbox-ELlBHack.js";import"./dialog-BhKYDzk6.js";import"./conversion-DyjZL1Co.js";import"./x-BK-4WeVA.js";import"./index-CMKHHU4h.js";import"./popup-trigger-DHttIfv7.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BDZOM4eL.js";import"./popup.store-CZruyQcO.js";import"./dropdown-Djg6ovNl.js";import"./index-Bov2IunZ.js";import"./empty-BT6epCKp.js";import"./menu-item-B2GSHL_6.js";import"./dialog.portal-D6hi53HQ.js";const Ge={title:"Components/Form",component:r,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},i={render:()=>{const{formInstance:a,clearFormAllValues:l}=r.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:n(r,{formInstance:a,onSubmit:m=>{console.log(m),alert(JSON.stringify(m))},labelWidth:80,children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入",onChange:m=>console.log(m)})}),e(r.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(r.Item,{label:"选择器",name:"select",required:!0,children:e(J,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(r.Item,{label:"多选框",name:"checkbox",required:!0,children:e(M,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(r.Item,{label:"单选框",name:"radio",required:!0,onChange:m=>{console.log(m)},children:e(P,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(r.Item,{label:"开关",name:"switch",children:e(Q,{onChange:async m=>{console.log(m),await E(1e3)},children:"Switch text"})}),e(r.Item,{children:n("div",{className:"flex gap-12",children:[e(o,{type:"primary",htmlType:"submit",children:"提交"}),e(o,{type:"default",htmlType:"reset",children:"重置"}),e(o,{type:"default",onClick:()=>{l()},children:"清空"})]})})]})})}},c={render:()=>{const{formInstance:a}=r.useForm();return n("div",{children:[n(r,{formInstance:a,onSubmit:l=>{console.log(l)},children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(r.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(r.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]}),n(r,{layout:"inline",formInstance:a,onSubmit:l=>{console.log(l)},children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(r.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(r.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]}),n(r,{layout:"vertical",formInstance:a,onSubmit:l=>{console.log(l)},children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(r.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(r.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]})]})}},p={render:()=>{const{formInstance:a}=r.useForm();return e("div",{children:n(r,{formInstance:a,labelWidth:100,onSubmit:l=>{console.log(l)},children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(r.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(r.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]})})}},d={render:()=>{const{formInstance:a}=r.useForm();return e("div",{children:e(r,{formInstance:a,onSubmit:l=>{console.log(l)},children:e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},extra:e("span",{children:"额外元素"}),children:e(t,{allowClear:!0,placeholder:"请输入"})})})})}},s={render:()=>{const{formInstance:a}=r.useForm();return e("div",{children:e(r,{formInstance:a,onSubmit:l=>{console.log(l)},children:e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},extra:n(H,{children:[e(o,{onClick:()=>a.reset({name:""}),children:"Reset"}),e(o,{type:"primary",onClick:()=>E(500),children:"Submit"})]}),children:e(t,{allowClear:!0,placeholder:"请输入"})})})})}},u={render:()=>{const{formInstance:a}=r.useForm();return e("div",{children:n(r,{formInstance:a,children:[e(r.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(r.Item,{label:"姓名2",name:"name2",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},triggerOnChange:!1,children:e(t,{allowClear:!0,placeholder:"请输入"})})]})})}},_=({a})=>{const{open:l}=L(_,{title:"test2"}),{formInstance:m}=r.useForm({defaultValues:{type:0,name:""}});return K.useEffect(()=>{console.count("FormDialog init:::"+a)},[]),n(r,{formInstance:m,onSubmit:z=>{console.log(z)},labelWidth:100,children:[e(r.Item,{label:"名称",name:"name",required:!0,children:e(t,{placeholder:"请输入"})}),e(r.Item,{label:"类型",name:"type",required:"请选择类型",children:e(J,{options:[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2}]})}),e(o,{onClick:()=>{l()},children:"open"})]})},h={render:()=>{const{open:a}=L(_,{title:"test"});return e("div",{children:e(o,{onClick:()=>{a({a:"ok"})},children:"Open Dialog"})})}};var g,v,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      }} labelWidth={80}>
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
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,F,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(F=c.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var y,C,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,x,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        }} extra={<span>额外元素</span>}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(q=(x=d.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var $,B,k,T,D;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        }} extra={<>
                <Button onClick={() => formInstance.reset({
            name: ''
          })}>Reset</Button>
                <Button type="primary" onClick={() => sleep(500)}>
                  Submit
                </Button>
              </>}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"使用 `formInstance.trigger()` 触发校验",...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var O,R,W,V,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const {
      formInstance
    } = Form.useForm();
    return <div>
        <Form formInstance={formInstance}>
          <Form.Item label="姓名" name="name" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item label="姓名2" name="name2" required={{
          value: true,
          message: '姓名必填'
        }} pattern={{
          value: /^.{2,4}$/,
          message: '请输入2-4位字符'
        }} triggerOnChange={false}>
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>;
  }
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"通过 triggerOnChange 控制",...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var N,j,A;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const Ne=["基础示例","布局","LabelWidth","额外元素","主动触发校验","变更时校验","DialogForm"];export{h as DialogForm,p as LabelWidth,Ne as __namedExportsOrder,Ge as default,s as 主动触发校验,u as 变更时校验,i as 基础示例,c as 布局,d as 额外元素};
