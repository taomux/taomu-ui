import{l as e,m as s,c as x,j as R,a as k}from"./mini-scrollbar-CZ8eNCm3.js";import{R as r}from"./index-CZMpeKRu.js";import{u as q,a as w}from"./use-taomu-classname-CGrN28Ws.js";import{i as d}from"./global-vars-CQDXv0Fn.js";d("common",{radioSize:13,radioColor:e("colorPrimary"),radioBorderColor:e("colorBorder"),radioOutlineColor:s("colorPrimaryRgb",.3)});d("dark",{radioBackground:s("colorFrontRgb",.1)});const N=x`
  --td: 0.24s;

  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;

  .radio-box {
    position: relative;
    appearance: none;
    cursor: pointer;
    transition: all var(--td);
    border-radius: 50%;
    margin: 0 3px;

    &::before {
      width: ${e("radioSize")};
      height: ${e("radioSize")};
      content: '';
      display: flex;
      border-radius: inherit;
      border: 2px solid ${e("radioBorderColor")};
      background-color: ${e("radioBackground")};
      transition: all var(--td);
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: inherit;
      pointer-events: none;
      background: rgba(255, 255, 255, 0.7);
      transition: all var(--td);
    }

    &:checked {
      &::before {
        background: ${e("radioColor")};
        border: 2px solid ${e("radioColor")};
      }

      &::after {
        width: 50%;
        height: 50%;
      }

      &:hover {
        &::before {
          opacity: 0.8;
        }
      }
    }

    &:hover:not(:disabled):not(:checked) {
      &::before {
        border-color: ${e("colorPrimary")};
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }

  &.show-outline {
    .radio-box:not([disabled]) {
      outline: transparent solid;
    }

    .radio-box:not([disabled]) {
      &:active,
      &:focus {
        outline: ${e("radioOutlineColor")} solid 2px;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`,t=r.forwardRef(({children:o,className:u,cssVars:c,style:p,label:m,size:B,color:E,disabled:i,showOutline:f=!0,name:b,value:y,onChange:a,...h},g)=>{const l=r.useRef(null),C=q("radio",{disabled:i,"show-outline":f},u),V=w(c,p);r.useImperativeHandle(g,()=>l.current);function v(n){a==null||a(n,n.target.checked)}return R("label",{className:C,style:V,css:N,...h,children:[k("input",{name:b,ref:l,className:"radio-box",type:"radio",disabled:i,checked:y,onChange:v}),o||m]})});try{t.displayName="Radio",t.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"RadioCssVars"}}}}}catch{}export{t as R};
