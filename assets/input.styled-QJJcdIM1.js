import{l as o,c as n,p as r}from"./mini-scrollbar-DFcjLXiE.js";import{i as t}from"./global-vars-hpilZV8k.js";import"./index-D4lIrffr.js";t("common",{inputMainColor:o("colorPrimary"),inputBorderColor:o("colorBorder"),inputIconColor:o("colorTextGray"),inputBackground:"transparent",inputRadius:o("radiusSM")});const l=n`
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
    ${r("inputBorderColor",o("colorSuccess"))};
    ${r("inputMainColor",o("colorSuccess"))};
    ${r("inputIconColor",o("colorSuccess"))};
  }

  &.status-warning {
    ${r("inputBorderColor",o("colorWarning"))};
    ${r("inputMainColor",o("colorWarning"))};
    ${r("inputIconColor",o("colorWarning"))};
  }

  &.status-error {
    ${r("inputBorderColor",o("colorError"))};
    ${r("inputMainColor",o("colorError"))};
    ${r("inputIconColor",o("colorError"))};
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
`,a=n`
  display: inline-block;
  line-height: 1.57;
  font-size: inherit;
  width: 100%;
  border: none;
  outline: none;
  color: ${o("inputTextColor")};
  background-color: transparent;
`,u=n`
  color: ${o("inputTextColor")};
  resize: ${o("textareaResize")};
`,c=n`
  transition: ${o("commonTransition")};
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
`;export{l as a,c as b,a as i,u as t};
