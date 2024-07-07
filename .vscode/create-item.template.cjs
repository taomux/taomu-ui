/**
 * This is template config for extension: [Create Item By Template]
 * This is a JavaScript code file that will be executed in the Node environment
 * And you can add any Javascript(commonjs) code here
 * For more advanced usage, please see this wiki: https://github.com/lanten/create-item-by-template/wiki/Template-Example
 */

/** file list */
const files = {
  tsx: (name) => {
    const nameR = removeSuffix(name)
    const nameH = toCamel(nameR)
    const nameX = toCamel(nameR, false)
    return [
      `import React from 'react'`,
      ``,
      `import { useTaomuClassName, useInlineStyle } from '../../hooks'`,
      ``,
      `import { ${nameX}Styled, ${nameH}CssVars } from './${nameR}.styled'`,
      ``,
      `export interface ${nameH}Props extends BaseComponentType<${nameH}CssVars> {}`,
      ``,
      `export const ${nameH}: React.FC<${nameH}Props> = ({ className, cssVars, style, ...wrapProps }) => {`,
      `  const ${nameX}ClassNames = useTaomuClassName('${nameR}', className)`,
      `  const ${nameX}Style = useInlineStyle<${nameH}CssVars>(cssVars, style)`,
      ``,
      `  return (`,
      `    <div className={${nameX}ClassNames} style={${nameX}Style} css={${nameX}Styled} {...wrapProps}>`,
      `      <p>component ${nameR} is created</p>`,
      `    </div>`,
      `  )`,
      `}`,
      ``,
    ]
  },

  stories: (name) => {
    const nameR = removeSuffix(name)
    const nameH = toCamel(nameR)

    return [
      `import type { Meta, StoryObj } from '@storybook/react'`,
      ``,
      `import { ${nameH} } from './${nameR}'`,
      ``,
      `const meta: Meta<typeof ${nameH}> = {`,
      `  title: 'Components/${nameH}',`,
      `  component: ${nameH},`,
      `  tags: ['autodocs'],`,
      `  argTypes: {},`,
      `}`,
      ``,
      `type Story = StoryObj<typeof meta>`,
      `export default meta`,
      ``,
      `export const 基础示例: Story = {`,
      `  args: {},`,
      `}`,
      ``,
    ]
  },

  'index.ts': (name) => {
    return [`export * from './${name}'`, ``]
  },

  styled: (name) => {
    const nameR = removeSuffix(name)
    const nameX = toCamel(nameR, false)
    const nameH = toCamel(nameR)

    return [
      `import { css } from '@emotion/react'`,
      ``,
      `import { setGlobalCssVars, linkCssVar } from '../../styles'`,
      ``,
      `export interface ${nameH}CssVars {`,
      `  ${nameX}Color?: string`,
      `}`,
      ``,
      `setGlobalCssVars('common', {`,
      `  ${nameX}Color: linkCssVar('colorPrimary'),`,
      `})`,
      ``,
      `export const ${nameX}Styled = css\``,
      `  stroke: \${linkCssVar('${nameX}Color')};`,
      `\``,
      ``,
      `declare global {`,
      `  interface GlobalCssVars extends ${nameH}CssVars {}`,
      `}`,
      ``,
    ]
  },

  less: (name) => {
    return [`.${name} {`, ``, `}`]
  },
}

/** folder list */
const folders = {
  'react-component': (name) => {
    return {
      'index.tsx': files['index.ts'],
      [`${name}.tsx`]: files.tsx,
      [`${name}.stories.tsx`]: files.stories,
      [`${name}.styled.ts`]: files.styled,
    }
  },
}

/**
 * 中划线转驼峰
 * @param {String} str
 * @param {Boolean} c 首字母大写
 */
function toCamel(str, c = true) {
  let strH = str.replace(/([^\-])(?:\-+([^\-]))/g, (_, $1, $2) => $1 + $2.toUpperCase())
  if (c) strH = strH.slice(0, 1).toUpperCase() + strH.slice(1)
  return strH
}

/**
 * 移除后缀名
 * @param {String} str
 * @returns
 */
function removeSuffix(str) {
  return str.replace(/^(.+)\..*$/, '$1')
}

module.exports = { files, folders }
