import{s as c,l as e,m as i,c as y,j as C,a as v}from"./mini-scrollbar-BUn1XUoF.js";import{u as w,a as B}from"./use-taomu-classname-CPnLGqwq.js";import"./index-l2PZgWEW.js";c("common",{checkboxSize:13,checkboxColor:e("colorPrimary"),checkboxBorderColor:e("colorBorder"),checkboxRadius:e("radiusSM"),checkboxOutlineColor:i("colorPrimaryRgb",.3)});c("dark",{checkboxBoxBackground:i("colorFrontRgb",.1)});const V=y`
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
`,t=({children:a,className:n,cssVars:s,style:u,label:d,size:b,color:h,radius:p,showOutline:x=!0,value:k,disabled:r,onChange:o,...m})=>{const f=w("checkbox","checkbox-label",{disabled:r,"show-outline":x},n),g=B({checkboxSize:b,checkboxColor:h,checkboxRadius:p,...s},u);return C("label",{className:f,style:g,css:V,...m,children:[v("input",{className:"checkbox-box",type:"checkbox",disabled:r,checked:k,onChange:l=>o==null?void 0:o(l.target.checked,l)}),a||d]})};try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"圆角",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean, e: ChangeEvent<Element>) => void)"}}}}}catch{}export{t as C};
