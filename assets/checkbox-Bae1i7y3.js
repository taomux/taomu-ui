import{l as e,m as s,c as q,j as R,a as E}from"./mini-scrollbar-CZ8eNCm3.js";import{R as a}from"./index-CZMpeKRu.js";import{u as B,a as S}from"./use-taomu-classname-CGrN28Ws.js";import{i as c}from"./global-vars-CQDXv0Fn.js";c("common",{checkboxSize:13,checkboxColor:e("colorPrimary"),checkboxBorderColor:e("colorBorder"),checkboxRadius:e("radiusSM"),checkboxOutlineColor:s("colorPrimaryRgb",.3)});c("dark",{checkboxBoxBackground:s("colorFrontRgb",.1)});const $=q`
  --td: 0.24s;

  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;

  .checkbox-box {
    position: relative;
    appearance: none;
    cursor: pointer;
    border-radius: ${e("checkboxRadius")};
    transition: all var(--td);

    &::before {
      width: ${e("checkboxSize")};
      height: ${e("checkboxSize")};
      content: '';
      display: flex;
      border-radius: ${e("checkboxRadius")};
      border: 1.5px solid ${e("checkboxBorderColor")};
      background-color: ${e("checkboxBoxBackground")};
      transition: all var(--td);
    }

    &::after {
      content: '';
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      pointer-events: none;
      background-size: auto 100%;
      background-repeat: no-repeat;
      transition: width var(--td);
      background-image: url("data:image/svg+xml,%3Csvg width='14px' height='14px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.2,6.6 6,9.3 11,4' style='fill:none;stroke:white;stroke-width:1.6;'/%3E%3C/svg%3E");
    }

    &:checked {
      &::before {
        background: ${e("checkboxColor")};
        border: 1.5px solid ${e("checkboxColor")};
      }

      &::after {
        width: 100%;
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

    &:hover {
      &::before {
        opacity: 0.8;
      }
    }
  }

  &.show-outline {
    .checkbox-box:not([disabled]) {
      outline: transparent solid;
    }

    .checkbox-box:not([disabled]) {
      &:active,
      &:focus {
        outline: ${e("checkboxOutlineColor")} solid 2px;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`,i=a.forwardRef(({children:r,className:u,cssVars:d,style:p,label:b,size:m,color:h,radius:x,showOutline:f=!0,name:k,value:y,disabled:l,onChange:o,...g},C)=>{const t=a.useRef(null),v=B("checkbox","checkbox-label",{disabled:l,"show-outline":f},u),V=S({checkboxSize:m,checkboxColor:h,checkboxRadius:x,...d},p);a.useImperativeHandle(C,()=>t.current);function w(n){o==null||o(n,n.target.checked)}return R("label",{className:v,style:V,css:$,...g,children:[E("input",{ref:t,name:k,className:"checkbox-box",type:"checkbox",disabled:l,checked:y,onChange:w}),r||b]})});try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"圆角",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"CheckboxCssVars"}}}}}catch{}export{i as C};
