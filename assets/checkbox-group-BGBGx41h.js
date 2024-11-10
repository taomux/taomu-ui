import{l as o,d as _,c as B,j as $,a as g}from"./mini-scrollbar-mYdyJkLe.js";import{R as t}from"./index-DRjF_FHU.js";import{u as w,a as E}from"./use-taomu-classname-CJDXS2sd.js";import{s as R}from"./global-style-BA4-Iv3r.js";R("common",{checkboxSize:13,checkboxColor:o("colorPrimary"),checkboxBorderColor:o("colorBorder"),checkboxRadius:o("radiusSM"),checkboxOutlineColor:_("colorPrimaryRgb",.3)});R("dark",{checkboxBoxBackground:_("colorFrontRgb",.1)});const G=B`
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
    border-radius: ${o("checkboxRadius")};
    transition: all var(--td);

    &::before {
      width: ${o("checkboxSize")};
      height: ${o("checkboxSize")};
      content: '';
      display: flex;
      border-radius: ${o("checkboxRadius")};
      border: 1.5px solid ${o("checkboxBorderColor")};
      background-color: ${o("checkboxBoxBackground")};
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
        background: ${o("checkboxColor")};
        border: 1.5px solid ${o("checkboxColor")};
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
        border-color: ${o("colorPrimary")};
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
        outline: ${o("checkboxOutlineColor")} solid 2px;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;try{CheckboxGroup.displayName="CheckboxGroup",CheckboxGroup.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{}}}catch{}const d=t.forwardRef(({children:c,className:l,cssVars:a,style:p,label:i,size:b,color:h,radius:n,showOutline:m=!0,name:s,value:x,disabled:r,onChange:e,...k},f)=>{const u=t.useRef(null),v=w("checkbox","checkbox-label",{disabled:r,"show-outline":m},l),N=E({checkboxSize:b,checkboxColor:h,checkboxRadius:n,...a},p);t.useImperativeHandle(f,()=>u.current);function V(C){e==null||e(C,C.target.checked)}return $("label",{className:v,style:N,css:G,...k,children:[g("input",{ref:u,name:s,className:"checkbox-box",type:"checkbox",disabled:r,checked:x,onChange:V}),c||i]})});d.Group=y;try{d.displayName="Checkbox",d.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"圆角",name:"radius",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:null,description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}}}}}catch{}const y=t.forwardRef(({className:c,options:l,value:a=[],name:p,onChange:i,...b},h)=>{const n=t.useRef({target:{value:a,name:p},focus:()=>{}}),m=w("checkbox-group",c);t.useImperativeHandle(h,()=>n.current);const s=t.useMemo(()=>{n.current.target.value=a;const r={};return a==null||a.forEach(e=>{r[e]=!0}),r},[a]);function x(r){r.target.checked?s[r.target.name]=!0:delete s[r.target.name];const e=Object.keys(s);n.current.target.value=e,i==null||i(n.current,e)}return g("div",{className:m,...b,children:l==null?void 0:l.map(({key:r,value:e,name:k,...f},u)=>g(d,{name:k||(e==null?void 0:e.toString()),...f,value:s[e]||!1,onChange:x},r||e||u))})});try{y.displayName="CheckboxGroup",y.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{}}}catch{}export{y as C,d as a};
