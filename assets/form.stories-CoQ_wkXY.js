import{c as B,l as S,a as e,j as u}from"./mini-scrollbar-CovzJoiJ.js";import{R as k}from"./index-DRjF_FHU.js";import{u as E,a as N}from"./use-taomu-classname-DM2_Z24H.js";import{s as w}from"./global-style-emPCDtl7.js";import{u as D,F as A,a as $}from"./form-item-C-QP9SCV.js";import{I as o}from"./index-D11MP51d.js";import"./index-D2knjuM6.js";import{S as R}from"./select-BGEy_Glf.js";import"./index-CK_3fjli.js";import"./index-CREK0-H5.js";import{C as T}from"./checkbox-group-BFn_9th0.js";import{R as M}from"./radio-group-8txZ_xk5.js";import{S as U}from"./switch-text-CITeuSRQ.js";import{B as s}from"./button-UU1IEuIw.js";import"./jsx-runtime-DR9Q75dM.js";import"./input.styled-CAYR-obT.js";import"./x-circle-ehOOJA42.js";import"./index-Dw6WB_A6.js";import"./eye-D6XBSePw.js";import"./index-gPDqJng4.js";import"./dropdown-CclC1Dz-.js";import"./index-Cc8o1g5Y.js";import"./popup-trigger-BNFacwHF.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-DsFx4roX.js";import"./menu-DRUjh2Ck.js";import"./menu-item-DJ8LZOPp.js";import"./index-_UnNtNEu.js";import"./loading-C9fjBMuP.js";import"./search-C40fYa5O.js";import"./checkbox-BtBRIfuK.js";import"./radio-K8-kgQeA.js";import"./switch-D8hyqKMU.js";w("common",{formMarginBottom:18,formLabelWidth:100,formGap:12,formItemGap:8});const O=B`
  &.form-layout-inline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${S("formGap")};
  }
`;function j(l){const r=D(l);return{formInstance:r,clearFormAllValues:()=>G(r)}}function G(l){const r=l.getValues();for(const t in r){const m=r[t],i=typeof m;let n;switch(i){case"string":n="";break;case"object":if(m===null){n=null;break}Array.isArray(m)?n=[]:n={};break;case"boolean":n=!1;break;case"number":n=0;break}l.setValue(t,n)}}try{FormItem.displayName="FormItem",FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"string | ValidationRule<boolean>"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"ValidationRule<string | number>"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"ValidationRule<string | number>"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"ValidationRule<number>"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"ValidationRule<number>"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},setValueAs:{defaultValue:null,description:"",name:"setValueAs",required:!1,type:{name:"((value: any) => any)"}},shouldUnregister:{defaultValue:null,description:"",name:"shouldUnregister",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: any) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: any) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},deps:{defaultValue:null,description:"",name:"deps",required:!1,type:{name:"string | string[]"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"ValidationRule<RegExp>"}},valueAsNumber:{defaultValue:null,description:"",name:"valueAsNumber",required:!1,type:{name:"boolean"}},valueAsDate:{defaultValue:null,description:"",name:"valueAsDate",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"布局方式",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"inline"'}]}},marginBottom:{defaultValue:null,description:"底部边距",name:"marginBottom",required:!1,type:{name:"string"}},labelWidth:{defaultValue:null,description:"标签宽度",name:"labelWidth",required:!1,type:{name:"string"}},noStyle:{defaultValue:null,description:"无样式",name:"noStyle",required:!1,type:{name:"boolean"}},colon:{defaultValue:{value:"true"},description:"显示冒号 `:`",name:"colon",required:!1,type:{name:"boolean"}},useController:{defaultValue:{value:"true"},description:"是否使用状态控制器，默认为 `true`, 设为 `false` 可提高性能",name:"useController",required:!1,type:{name:"boolean"}}}}}catch{}const a=({children:l,className:r,cssVars:t,style:m,formInstance:i,onSubmit:n,onReset:c,marginBottom:f,layout:y="horizontal",...q})=>{const _=E("form",`form-layout-${y}`,r),x=N({formMarginBottom:f,...t},m);return e("form",{className:_,style:x,css:O,autoComplete:"off",onSubmit:n?i.handleSubmit(n):void 0,onReset:(v,...C)=>{v.preventDefault(),i.reset(),c==null||c(v,...C)},...q,children:e($.Provider,{value:{formInstance:i,marginBottom:f,layout:y},children:l})})};a.Item=A;a.useForm=j;a.useFormContext=k.useContext;try{a.displayName="Form",a.__docgenInfo={description:"",displayName:"Form",props:{formInstance:{defaultValue:null,description:"Form.useForm",name:"formInstance",required:!0,type:{name:"FormInstance<Record<string, any>>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(<V extends Record<string, any>>(values: V) => any)"}},layout:{defaultValue:{value:"horizontal"},description:"布局方式",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"inline"'}]}},marginBottom:{defaultValue:null,description:"底部边距",name:"marginBottom",required:!1,type:{name:"string"}},labelWidth:{defaultValue:null,description:"标签宽度",name:"labelWidth",required:!1,type:{name:"string"}}}}}catch{}try{a.useForm.displayName="Form.useForm",a.useForm.__docgenInfo={description:"",displayName:"Form.useForm",props:{mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'},{value:'"all"'},{value:'"onTouched"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reValidateMode:{defaultValue:null,description:"",name:"reValidateMode",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'}]}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"AsyncDefaultValues<FieldValuesType> | { [x: string]: any; } | ((BrowserNativeObject | NestedValue) & FieldValues) | { ...; }"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"FieldValues"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"FieldErrors<FieldValuesType>"}},resetOptions:{defaultValue:null,description:"",name:"resetOptions",required:!1,type:{name:"Partial<{ keepDirtyValues: boolean; keepErrors: boolean; keepDirty: boolean; keepValues: boolean; keepDefaultValues: boolean; keepIsSubmitted: boolean; keepIsSubmitSuccessful: boolean; keepTouched: boolean; keepIsValidating: boolean; keepIsValid: boolean; keepSubmitCount: boolean; }>"}},resolver:{defaultValue:null,description:"",name:"resolver",required:!1,type:{name:"Resolver<FieldValuesType, Context>"}},context:{defaultValue:null,description:"",name:"context",required:!1,type:{name:"Context"}},shouldFocusError:{defaultValue:null,description:"",name:"shouldFocusError",required:!1,type:{name:"boolean"}},shouldUnregister:{defaultValue:null,description:"",name:"shouldUnregister",required:!1,type:{name:"boolean"}},shouldUseNativeValidation:{defaultValue:null,description:"",name:"shouldUseNativeValidation",required:!1,type:{name:"boolean"}},progressive:{defaultValue:null,description:"",name:"progressive",required:!1,type:{name:"boolean"}},criteriaMode:{defaultValue:null,description:"",name:"criteriaMode",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"firstError"'}]}},delayError:{defaultValue:null,description:"",name:"delayError",required:!1,type:{name:"number"}}}}}catch{}try{a.useFormContext.displayName="Form.useFormContext",a.useFormContext.__docgenInfo={description:"Accepts a context object (the value returned from `React.createContext`) and returns the current\ncontext value, as given by the nearest context provider for the given context.",displayName:"Form.useFormContext",props:{}}}catch{}try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{formInstance:{defaultValue:null,description:"Form.useForm",name:"formInstance",required:!0,type:{name:"FormInstance<Record<string, any>>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(<V extends Record<string, any>>(values: V) => any)"}},layout:{defaultValue:{value:"horizontal"},description:"布局方式",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"inline"'}]}},marginBottom:{defaultValue:null,description:"底部边距",name:"marginBottom",required:!1,type:{name:"string"}},labelWidth:{defaultValue:null,description:"标签宽度",name:"labelWidth",required:!1,type:{name:"string"}}}}}catch{}try{Form.useForm.displayName="Form.useForm",Form.useForm.__docgenInfo={description:"",displayName:"Form.useForm",props:{mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'},{value:'"all"'},{value:'"onTouched"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reValidateMode:{defaultValue:null,description:"",name:"reValidateMode",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'}]}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"AsyncDefaultValues<FieldValuesType> | { [x: string]: any; } | ((BrowserNativeObject | NestedValue) & FieldValues) | { ...; }"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"FieldValues"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"FieldErrors<FieldValuesType>"}},resetOptions:{defaultValue:null,description:"",name:"resetOptions",required:!1,type:{name:"Partial<{ keepDirtyValues: boolean; keepErrors: boolean; keepDirty: boolean; keepValues: boolean; keepDefaultValues: boolean; keepIsSubmitted: boolean; keepIsSubmitSuccessful: boolean; keepTouched: boolean; keepIsValidating: boolean; keepIsValid: boolean; keepSubmitCount: boolean; }>"}},resolver:{defaultValue:null,description:"",name:"resolver",required:!1,type:{name:"Resolver<FieldValuesType, Context>"}},context:{defaultValue:null,description:"",name:"context",required:!1,type:{name:"Context"}},shouldFocusError:{defaultValue:null,description:"",name:"shouldFocusError",required:!1,type:{name:"boolean"}},shouldUnregister:{defaultValue:null,description:"",name:"shouldUnregister",required:!1,type:{name:"boolean"}},shouldUseNativeValidation:{defaultValue:null,description:"",name:"shouldUseNativeValidation",required:!1,type:{name:"boolean"}},progressive:{defaultValue:null,description:"",name:"progressive",required:!1,type:{name:"boolean"}},criteriaMode:{defaultValue:null,description:"",name:"criteriaMode",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"firstError"'}]}},delayError:{defaultValue:null,description:"",name:"delayError",required:!1,type:{name:"number"}}}}}catch{}try{Form.useFormContext.displayName="Form.useFormContext",Form.useFormContext.__docgenInfo={description:"Accepts a context object (the value returned from `React.createContext`) and returns the current\ncontext value, as given by the nearest context provider for the given context.",displayName:"Form.useFormContext",props:{}}}catch{}try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{}}}catch{}const qe={title:"Components/Form",component:a,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"Base: react-hook-form"}}}},d={render:()=>{const{formInstance:l,clearFormAllValues:r}=a.useForm({defaultValues:{name:"张三",length:"11",select:"2",checkbox:[2]}});return e("div",{children:u(a,{formInstance:l,onSubmit:t=>{console.log(t),alert(JSON.stringify(t))},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(o,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},required:!0,pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(o,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{label:"选择器",name:"select",required:!0,children:e(R,{placeholder:"请选择",options:[{label:"选项1",value:1},{label:"选项2",value:2}],allowClear:!0})}),e(a.Item,{label:"多选框",name:"checkbox",required:!0,children:e(T,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"单选框",name:"radio",required:!0,onChange:t=>{console.log(t)},children:e(M,{options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]})}),e(a.Item,{label:"开关",name:"switch",required:!0,onChange:t=>console.log(t),children:e(U,{children:"Switch text"})}),e(a.Item,{children:u("div",{className:"flex gap-12",children:[e(s,{type:"primary",htmltype:"submit",children:"提交"}),e(s,{type:"default",htmltype:"reset",children:"重置"}),e(s,{type:"default",onClick:()=>{r()},children:"清空"})]})})]})})}},p={render:()=>{const{formInstance:l}=a.useForm();return u("div",{children:[u(a,{formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(o,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(o,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(s,{type:"primary",htmltype:"submit",children:"提交"})})]}),u(a,{layout:"inline",formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(o,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(o,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(s,{type:"primary",htmltype:"submit",children:"提交"})})]}),u(a,{layout:"vertical",formInstance:l,onSubmit:r=>{console.log(r)},children:[e(a.Item,{label:"姓名",name:"name",required:{value:!0,message:"姓名必填"},pattern:{value:/^.{2,4}$/,message:"请输入2-4位字符"},children:e(o,{allowClear:!0,placeholder:"请输入"})}),e(a.Item,{label:"尺寸",name:"length",min:{value:1,message:"最小为1"},max:{value:20,message:"最大为20"},pattern:{value:/^[0-9]{1,2}$/,message:"1-20的整数"},children:e(o,{allowClear:!0,placeholder:"请输入0-20的整数"})}),e(a.Item,{children:e(s,{type:"primary",htmltype:"submit",children:"提交"})})]})]})}};var b,g,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var F,V,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const _e=["基础示例","布局"];export{_e as __namedExportsOrder,qe as default,d as 基础示例,p as 布局};
