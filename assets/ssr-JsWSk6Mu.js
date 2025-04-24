import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-B8rYRX2K.js";import{M as i}from"./index-C1O9drml.js";import"./index-D4lIrffr.js";import"./iframe-BSaZvsLy.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(r){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"服务端渲染"}),`
`,n.jsx(e.h2,{id:"taomuapp",children:"TaomuApp"}),`
`,n.jsxs(e.p,{children:["服务端渲染模式下, ",n.jsx(e.code,{children:"TaomuApp"})," 组件需要传入 ",n.jsx(e.code,{children:"serverRender"})," 属性, 以及可选传入 ",n.jsx(e.code,{children:"serverConfig"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TaomuApp } from 'taomu-ui'

const App = () => {
  return (
    <TaomuApp
      serverRender
      serverConfig={
        {
          // ...
        }
      }
    >
      <div>hello world</div>
    </TaomuApp>
  )
}
`})}),`
`,n.jsx(e.h2,{id:"store",children:"Store"}),`
`,n.jsxs(e.p,{children:["通过在 html 中注入 ",n.jsx(e.code,{children:"window.__TAOMU_STORE_DEFAULT_STATE__"})," 初始化 taomuStore 状态"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`return reactRenderer(() => {
  const initTaomuStoreState = {
    // ...
  }

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: \`window.__TAOMU_STORE_DEFAULT_STATE__ = \${JSON.stringify(initTaomuStoreState)}\`,
          }}
        />
      </head>
      <body>
        <App />
      </body>
    </html>
  )
})
`})}),`
`,n.jsx(e.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["不能在服务端调用 ",n.jsx(e.code,{children:"setGlobalStyles"})," 和 ",n.jsx(e.code,{children:"setGlobalCssVars"}),", 改用 ",n.jsx(e.code,{children:"initGlobalStyles"})," 和 ",n.jsx(e.code,{children:"initGlobalCssVars"})]}),`
`]})]})}function u(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{u as default};
