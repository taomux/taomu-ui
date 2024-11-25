import{a as e,j as I}from"./mini-scrollbar-BRbUwqmL.js";import{M as r}from"./menu-item-CukKi_en.js";import{A as M}from"./activity-BMafiJeT.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./use-taomu-classname-DvhRoCTO.js";import"./index-BpBZeYWD.js";import"./global-style-QoB4c899.js";import"./index-Dw6WB_A6.js";const j={title:"Components/Menu/MenuItem",component:r,tags:["autodocs"],argTypes:{}},t={args:{children:"MenuItem"}},n={args:{icon:e(M,{size:16}),children:"MenuItem"}},s={args:{},render:()=>I("div",{className:"flex col gap-8",style:{width:200},children:[e(r,{children:"正常"}),e(r,{active:!0,children:"Active"}),e(r,{divider:!0}),e(r,{disabled:!0,children:"Disabled"}),e(r,{disabled:!0,active:!0,children:"Disabled-Active"})]})};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'MenuItem'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,d,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    icon: <IconActivity size={16} />,
    children: 'MenuItem'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,l,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="flex col gap-8" style={{
      width: 200
    }}>
        <MenuItem>正常</MenuItem>
        <MenuItem active>Active</MenuItem>
        <MenuItem divider />
        <MenuItem disabled>Disabled</MenuItem>
        <MenuItem disabled active>
          Disabled-Active
        </MenuItem>
      </div>;
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["基础示例","Icon","不同状态"];export{n as Icon,S as __namedExportsOrder,j as default,s as 不同状态,t as 基础示例};
