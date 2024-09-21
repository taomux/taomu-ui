import{s as t,l as e,m as n,c as h,j as g,a as v}from"./mini-scrollbar-Bq2Cewqh.js";import{u as x,a as C}from"./use-taomu-classname-Bo7IX2bY.js";import"./index-l2PZgWEW.js";t("common",{radioSize:13,radioColor:e("colorPrimary"),radioBorderColor:e("colorBorder"),radioOutlineColor:n("colorPrimaryRgb",.3)});t("dark",{radioBackground:n("colorFrontRgb",.1)});const k=h`
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
    top: -1.5px;

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
`,l=({children:r,className:d,cssVars:s,style:u,label:c,size:V,color:w,disabled:a,showOutline:p=!0,value:b,onChange:o,...m})=>{const f=x("radio",{disabled:a,"show-outline":p},d),y=C(s,u);return g("label",{className:f,style:y,css:k,...m,children:[v("input",{className:"radio-box",type:"radio",disabled:a,checked:b,onChange:i=>o==null?void 0:o(i.target.checked,i)}),r||c]})};try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean, e: ChangeEvent<Element>) => void)"}}}}}catch{}export{l as R};
