import{l as e,m as i,c as V,j as B,a as $}from"./mini-scrollbar-CovzJoiJ.js";import{R as a}from"./index-DRjF_FHU.js";import{u as q,a as E}from"./use-taomu-classname-DM2_Z24H.js";import{s}from"./global-style-emPCDtl7.js";s("common",{checkboxSize:13,checkboxColor:e("colorPrimary"),checkboxBorderColor:e("colorBorder"),checkboxRadius:e("radiusSM"),checkboxOutlineColor:i("colorPrimaryRgb",.3)});s("dark",{checkboxBoxBackground:i("colorFrontRgb",.1)});const S=V`
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
`,c=a.forwardRef(({children:r,className:u,cssVars:d,style:b,label:p,size:h,color:m,radius:x,showOutline:k=!0,name:f,value:g,disabled:t,onChange:o,...y},C)=>{const l=a.useRef(null),v=q("checkbox","checkbox-label",{disabled:t,"show-outline":k},u),w=E({checkboxSize:h,checkboxColor:m,checkboxRadius:x,...d},b);a.useImperativeHandle(C,()=>l.current);function R(n){o==null||o(n,n.target.checked)}return B("label",{className:v,style:w,css:S,...y,children:[$("input",{ref:l,name:f,className:"checkbox-box",type:"checkbox",disabled:t,checked:g,onChange:R}),r||p]})});try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"圆角",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}}}}}catch{}export{c as C};
