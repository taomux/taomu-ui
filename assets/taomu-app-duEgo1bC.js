import{a as u,F as c,Q as i,u as l,j as _,g as f,G as y}from"./mini-scrollbar-BUn1XUoF.js";import{R as r}from"./index-l2PZgWEW.js";import{p as g}from"./popup.store-DSULGjyH.js";const s=()=>{const{popupsMap:e,updateCount:p}=g.useStore(["popupsMap","updateCount"]),t=r.useMemo(()=>{const a=[];for(const[h,[d,m]]of e)a.push(d.render(m));return a},[e,p]);return u(c,{children:t})};try{s.displayName="PopupService",s.__docgenInfo={description:"",displayName:"PopupService",props:{}}}catch{}let o="";const n=({children:e})=>{const p=r.useRef(i()),{theme:t}=l();return r.useEffect(()=>{document.documentElement.dataset.theme=t},[t]),r.useEffect(()=>(o?console.error("TaomuApp only support one instance"):o=p.current,()=>{o=""}),[]),_(c,{children:[(!o||o===p.current)&&u(s,{}),u(y,{styles:f()}),e]})};try{n.displayName="TaomuApp",n.__docgenInfo={description:`初始化 TaomuApp

包裹根节点

请确保全局只有一个 TaomuApp`,displayName:"TaomuApp",props:{}}}catch{}export{n as T};
