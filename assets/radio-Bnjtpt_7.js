import{l as e,m as d,c as R,j as k,a as V}from"./mini-scrollbar-BRbUwqmL.js";import{R as r}from"./index-DRjF_FHU.js";import{u as w,a as q}from"./use-taomu-classname-DvhRoCTO.js";import{s}from"./global-style-QoB4c899.js";s("common",{radioSize:13,radioColor:e("colorPrimary"),radioBorderColor:e("colorBorder"),radioOutlineColor:d("colorPrimaryRgb",.3)});s("dark",{radioBackground:d("colorFrontRgb",.1)});const B=R`
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
`,n=r.forwardRef(({children:a,className:u,cssVars:c,style:p,label:m,size:_,color:$,disabled:i,showOutline:f=!0,name:b,value:y,onChange:o,...h},g)=>{const t=r.useRef(null),v=w("radio",{disabled:i,"show-outline":f},u),x=q(c,p);r.useImperativeHandle(g,()=>t.current);function C(l){o==null||o(l,l.target.checked)}return k("label",{className:v,style:x,css:B,...h,children:[V("input",{name:b,ref:t,className:"radio-box",type:"radio",disabled:i,checked:y,onChange:C}),a||m]})});try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}}}}}catch{}export{n as R};
