import{r as u}from"./index-l2PZgWEW.js";import{s as v,l as o,c as d,p as s}from"./mini-scrollbar-Bq2Cewqh.js";function b(t){const r=u.useRef(!1),[e,n]=u.useState(t);u.useEffect(()=>(r.current=!1,()=>{r.current=!0}),[]);function i(c,a){a&&r.current||n(c)}return[e,i]}const E=(t,r)=>{const e=u.useRef(!0);u.useLayoutEffect(()=>t(e.current),r),u.useLayoutEffect(()=>(e.current=!1,()=>{e.current=!0}),[])},h=(t,r)=>{E(e=>{if(!e)return t()},r)};function x(t){const r=u.useRef();return r.current=t,u.useCallback((...n)=>{var i;return(i=r.current)==null?void 0:i.call(r,...n)},[])}function f(t){return t!==void 0}function B(t,r){const{defaultValue:e,value:n,onChange:i,postState:c}=r||{},[a,g]=b(()=>f(n)?n:f(e)?typeof e=="function"?e():e:typeof t=="function"?t():t),l=n!==void 0?n:a,m=c?c(l):l,y=x(i),[C,S]=b([l]);h(()=>{const p=C[0];a!==p&&y(a,p)},[C]),h(()=>{f(n)||g(n)},[n]);const M=x((p,$)=>{g(p,$),S([l],$)});return[m,M]}v("common",{inputMainColor:o("colorPrimary"),inputBorderColor:o("colorBorder"),inputIconColor:o("colorTextGray"),inputBackground:"transparent",inputRadius:o("radiusSM")});const R=d`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;

  border-radius: ${o("inputRadius")};
  width: ${o("inputWidth")};
  height: ${o("inputHeight")};
  padding: ${o("inputPadding")};
  background-color: ${o("inputBackground")};
  border: 1px solid ${o("inputBorderColor")};

  .icon-x {
    stroke: ${o("colorTextLight")};
  }

  &:hover:not(.disabled):not(.focused) {
    border-color: color-mix(in srgb, transparent, ${o("inputMainColor")} 45%);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &.status-success {
    ${s("inputBorderColor",o("colorSuccess"))};
    ${s("inputMainColor",o("colorSuccess"))};
    ${s("inputIconColor",o("colorSuccess"))};
  }

  &.status-warning {
    ${s("inputBorderColor",o("colorWarning"))};
    ${s("inputMainColor",o("colorWarning"))};
    ${s("inputIconColor",o("colorWarning"))};
  }

  &.status-error {
    ${s("inputBorderColor",o("colorError"))};
    ${s("inputMainColor",o("colorError"))};
    ${s("inputIconColor",o("colorError"))};
  }

  &.status-success,
  &.status-warning,
  &.status-error {
    svg {
      stroke: ${o("inputIconColor")};
    }
  }

  ::placeholder,
  input::placeholder {
    color: ${o("colorTextLight")};
  }
`,z=d`
  display: inline-block;
  line-height: 1.57;
  font-size: inherit;
  width: 100%;
  border: none;
  outline: none;
  color: ${o("inputTextColor")};
  background-color: transparent;
`,I=d`
  color: ${o("inputTextColor")};
  resize: ${o("textareaResize")};
`,L=d`
  transition:
    outline 0.3s cubic-bezier(0.175, 0.82, 0.265, 1),
    border-color 0.3s;
  outline: transparent solid 6px;
  outline-offset: -2px;

  input {
    outline: none;
  }

  &:focus,
  &.focused {
    outline: 2.5px solid color-mix(in srgb, transparent, ${o("inputMainColor")} 20%);
    outline-offset: 0;
    border-color: ${o("inputMainColor")};
  }
`;export{L as a,z as b,R as i,I as t,B as u};
