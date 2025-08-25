# Taomu UI

一个专为桌面端应用设计的现代化 React UI 组件库。

A modern React UI component library specifically designed for desktop applications.

## 特性 Features

- 🖥️ **桌面端优化** - 专为桌面应用场景设计
- 🎨 **现代化设计** - 简洁优雅的视觉风格
- 🔧 **TypeScript 支持** - 完整的类型定义
- ⚡ **高性能** - 使用 Emotion CSS-in-JS 实现高效样式
- 🎯 **原子化 CSS** - 基于 atomic-cls 的原子化样式系统
- 🌗 **主题系统** - 支持亮色/暗色主题切换
- 📱 **服务端渲染** - 完整的 SSR 支持
- 📚 **完整文档** - 基于 Storybook 的交互式文档

## 组件 Components

- **基础组件**: Button, Loading, Progress, Switch, Checkbox, Radio
- **表单组件**: Input, Select, Form
- **反馈组件**: Dialog, Toast, Popup
- **导航组件**: Menu, Dropdown, Titlebar, Toolbar
- **数据展示**: Empty
- **布局组件**: TaomuApp
- **动效组件**: Transition
- **图标组件**: Icons

## 安装 Installation

```bash
npm install taomu-ui
```

## 快速开始 Quick Start

```tsx
import React from 'react'
import { TaomuApp, Button } from 'taomu-ui'

function App() {
  return (
    <TaomuApp>
      <Button type="primary">Hello Taomu UI</Button>
    </TaomuApp>
  )
}

export default App
```

## 文档 Documentation

- 📖 [组件文档 Component Docs](https://taomux.github.io/taomu-ui/)
- 📋 [类型文档 Type Docs](https://taomux.github.io/taomu-ui/type-doc/)

## 服务端渲染 Server-Side Rendering

Taomu UI 完全支持服务端渲染，详细配置请参考 [SSR 文档](https://taomux.github.io/taomu-ui/?path=/docs/服务端渲染--docs)。

## 开发 Development

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 构建文档
npm run build:docs
```

## License

[Apache 2.0](./LICENSE)
