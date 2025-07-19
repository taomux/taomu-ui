import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import{M as r}from"./index-Cx1szrpj.js";import"./index-D4lIrffr.js";import"./iframe-D0I857Z6.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"服务端渲染"}),`
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
`,n.jsx(e.h2,{id:"atomic-css",children:"Atomic CSS"}),`
`,n.jsxs(e.p,{children:["在服务端侧，你可能无法正确加载 ",n.jsx(e.code,{children:"atomic-cls"})," 相关资源，有两种方式可以解决这个问题："]}),`
`,n.jsxs(e.h3,{id:"1使用-initglobalstyles",children:["1.使用 ",n.jsx(e.code,{children:"initGlobalStyles"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { css } from '@emotion/react'
import { initGlobalStyles } from 'taomu-ui'
import atomicCssStr from 'atomic-cls/stringify'

export const atomicCssStyled = css\`
  \${atomicCssStr}
\`

initGlobalStyles(atomicCssStyled)
`})}),`
`,n.jsx(e.h3,{id:"2引用静态资源",children:"2.引用静态资源"}),`
`,n.jsxs(e.p,{children:["将 ",n.jsx(e.code,{children:"atomic-cls"})," 中的",n.jsx(e.a,{href:"https://www.npmjs.com/package/atomic-cls?activeTab=code",rel:"nofollow",children:"静态资源文件"}),"(dist/style.css) 放在你的静态资源服务中，然后在服务端渲染的 html 中引入"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`return reactRenderer(
  ({ c }) => {
    const reactSSRInitialProps = c.get('reactSSRInitialProps')

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{appConfig.APP_TITLE}</title>
          <link rel="stylesheet" href="/static/website/style.css" /> <!-- 👈👈👈 -->
          <script
            dangerouslySetInnerHTML={{
              __html: \`window.__REACT_SSR_INITIAL_PROPS__ = \${JSON.stringify(reactSSRInitialProps)}\`,
            }}
          />
        </head>
        <body>
          <div id="root">
            <AppServerRouter ctx={c as unknown as CustomContext} {...reactSSRInitialProps} isServerSide />
          </div>
          <script type="module" src="/static/website/client.js" async><\/script>
        </body>
      </html>
    )
  },
  {
    stream: true,
  }
)
`})}),`
`,n.jsx(e.p,{children:"这是更加推荐的方案，静态资源可以获得缓存加速，避免在每次访问时返回相同的 css 内容。"}),`
`,n.jsx(e.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["不要在服务端调用 ",n.jsx(e.code,{children:"setGlobalStyles"})," 和 ",n.jsx(e.code,{children:"setGlobalCssVars"}),", 改用 ",n.jsx(e.code,{children:"initGlobalStyles"})," 和 ",n.jsx(e.code,{children:"initGlobalCssVars"})]}),`
`]})]})}function j(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{j as default};
