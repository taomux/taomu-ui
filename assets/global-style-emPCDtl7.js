import{C as i,L as n,D as d,c as $,n as t,l as o,T as e}from"./mini-scrollbar-CovzJoiJ.js";const c={common:{...i},light:{...n},dark:{...d}},s={};function f(r,l){Object.assign(c[r],l)}function m(){let r="";for(const l in s){const a=s[l];a.scoped?r+=`.${l}{${a.styled.styles}}`:r+=a.styled.styles}return $`
    :root {
      ${t(c.common,e)}
    }

    :root[data-theme='light'] {
      ${t(c.light,e)}
    }

    :root[data-theme='dark'] {
      ${t(c.dark,e)}
    }

    :root {
      --ac-color-primary: ${o("colorPrimary")};
      --ac-color-primary-light: color-mix(in srgb, ${o("colorPrimary")}, #fff 45%);
      --ac-color-primary-dark: color-mix(in srgb, ${o("colorPrimary")}, #000 15%);

      --ac-color-info: ${o("colorInfo")};
      --ac-color-success: ${o("colorSuccess")};
      --ac-color-warning: ${o("colorWarning")};
      --ac-color-error: ${o("colorError")};

      --ac-color-background: ${o("colorBackground")};
      --ac-color-text-title: ${o("colorTextTitle")};
      --ac-color-text-gray: ${o("colorTextGray")};
      --ac-color-text-default: ${o("colorTextDefault")};
      --ac-color-text-light: ${o("colorTextLight")};

      --ac-color-border: ${o("colorBorder")};
      --ac-color-border-split: ${o("colorBorderSplit")};

      --ac-color-shadow: ${o("colorShadow")};

      background: ${o("colorBackgroundRoot")};
      color: ${o("colorTextDefault")};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: ${o("fontSize")};
      text-rendering: optimizeLegibility;
    }

    ${r}
  `}export{m as g,f as s};
