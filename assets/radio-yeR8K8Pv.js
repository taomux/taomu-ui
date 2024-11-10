import{l as e,d as v,c as G,a as y,j as $}from"./mini-scrollbar-mYdyJkLe.js";import{R as t}from"./index-DRjF_FHU.js";import{u as x,a as q}from"./use-taomu-classname-CJDXS2sd.js";import{s as C}from"./global-style-BA4-Iv3r.js";C("common",{radioSize:13,radioColor:e("colorPrimary"),radioBorderColor:e("colorBorder"),radioOutlineColor:v("colorPrimaryRgb",.3)});C("dark",{radioBackground:v("colorFrontRgb",.1)});const B=G`
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
`,g=t.forwardRef(({className:i,name:c,options:d,value:n,onChange:l,...h},_)=>{const o=t.useRef({target:{value:n,name:c},focus:()=>{}}),p=x("radio-group",i);t.useImperativeHandle(_,()=>o.current),t.useEffect(()=>{o.current.target.value=n},[n]);function m(a){a.target.checked===!0&&(o.current.target.value=a.target.name,l==null||l(o.current,a.target.name))}return y("div",{className:p,...h,children:d==null?void 0:d.map(({key:a,value:r,name:f,...b},s)=>y(u,{name:f||(r==null?void 0:r.toString()),...b,value:n==r,onChange:m},a||r||s))})});try{g.displayName="RadioGroup",g.__docgenInfo={description:"",displayName:"RadioGroup",props:{}}}catch{}try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{}}}catch{}const u=t.forwardRef(({children:i,className:c,cssVars:d,style:n,label:l,size:h,color:_,disabled:o,showOutline:p=!0,name:m,value:a,onChange:r,...f},b)=>{const s=t.useRef(null),N=x("radio",{disabled:o,"show-outline":p},c),k=q(d,n);t.useImperativeHandle(b,()=>s.current);function w(R){r==null||r(R,R.target.checked)}return $("label",{className:N,style:k,css:B,...f,children:[y("input",{name:m,ref:s,className:"radio-box",type:"radio",disabled:o,checked:a,onChange:w}),i||l]})});u.Group=g;try{u.displayName="Radio",u.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"复选框的标签",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"复选框尺寸",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"复选框颜色",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"禁用状态",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:null,description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: boolean) => void)"}}}}}catch{}export{g as R,u as a};
