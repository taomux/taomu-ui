import{d as a,a as e,j as m,I as t,f as g,C as y,R as C,g as f,k as v,B as o,h as w,e as S}from"./iframe-P3Y-woc8.js";import{u as I}from"./dialog.hooks-VUXyUXNv.js";import"./dialog.portal-B2wUB2XD.js";const B={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},c={render:()=>{const{formInstance:r,clearFormAllValues:l}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:m(a,{formInstance:r,onSubmit:n=>{console.log(n),alert(JSON.stringify(n))},labelWidth:80,children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入",onChange:n=>console.log(n)})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(g,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(y,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:n=>{console.log(n)},children:e(C,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",children:e(f,{onChange:async n=>{console.log(n),await v(1e3)},children:"Switch text"})}),e(a.Item,{children:m("div",{className:"flex gap-12",children:[e(o,{type:"primary",htmlType:"submit",children:"提交"}),e(o,{type:"default",htmlType:"reset",children:"重置"}),e(o,{type:"default",onClick:()=>{l()},children:"清空"})]})})]})})}},i={render:()=>{const{formInstance:r}=a.useForm();return m("div",{children:[m(a,{formInstance:r,onSubmit:l=>{console.log(l)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]}),m(a,{layout:"inline",formInstance:r,onSubmit:l=>{console.log(l)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]}),m(a,{layout:"vertical",formInstance:r,onSubmit:l=>{console.log(l)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]})]})}},d={render:()=>{const{formInstance:r}=a.useForm();return e("div",{children:m(a,{formInstance:r,labelWidth:100,onSubmit:l=>{console.log(l)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(t,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(o,{type:"primary",htmlType:"submit",children:"提交"})})]})})}},p={render:()=>{const{formInstance:r}=a.useForm();return e("div",{children:e(a,{formInstance:r,onSubmit:l=>{console.log(l)},children:e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},extra:e("span",{children:"额外元素"}),children:e(t,{allowClear:!0,placeholder:"请输入"})})})})}},s={render:()=>{const{formInstance:r}=a.useForm();return e("div",{children:e(a,{formInstance:r,onSubmit:l=>{console.log(l)},children:e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},extra:m(w,{children:[e(o,{onClick:()=>r.reset({name:""}),children:"Reset"}),e(o,{type:"primary",onClick:()=>v(500),children:"Submit"})]}),children:e(t,{allowClear:!0,placeholder:"请输入"})})})})}},u={render:()=>{const{formInstance:r}=a.useForm();return e("div",{children:m(a,{formInstance:r,children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(t,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"姓名2",name:"name2",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},triggerOnChange:!1,children:e(t,{allowClear:!0,placeholder:"请输入"})})]})})}},b=({a:r})=>{const{open:l}=I(b,{title:"test2"}),{formInstance:n}=a.useForm({defaultValues:{type:0,name:""}});return S.useEffect(()=>{console.count("FormDialog init:::"+r)},[]),m(a,{formInstance:n,onSubmit:F=>{console.log(F)},labelWidth:100,children:[e(a.Item,{label:"名称",name:"name",required:!0,children:e(t,{placeholder:"请输入"})}),e(a.Item,{label:"类型",name:"type",required:"请选择类型",children:e(g,{options:[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2}]})}),e(o,{onClick:()=>{l()},children:"open"})]})},h={render:()=>{const{open:r}=I(b,{title:"test"});return e("div",{children:e(o,{onClick:()=>{r({a:"ok"})},children:"Open Dialog"})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"使用 `formInstance.trigger()` 触发校验",...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"通过 triggerOnChange 控制",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const k=["基础示例","布局","LabelWidth","额外元素","主动触发校验","变更时校验","DialogForm"];export{h as DialogForm,d as LabelWidth,k as __namedExportsOrder,B as default,s as 主动触发校验,u as 变更时校验,c as 基础示例,i as 布局,p as 额外元素};
