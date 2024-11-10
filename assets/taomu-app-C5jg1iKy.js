import{a as u,F as c,Q as i,u as l,j as _,G as f}from"./mini-scrollbar-BRbUwqmL.js";import{R as r}from"./index-DRjF_FHU.js";import{g as y}from"./global-style-QoB4c899.js";import{p as g}from"./popup.store-CEPolm7I.js";const s=()=>{const{popupsMap:e,updateCount:p}=g.useStore(["popupsMap","updateCount"]),t=r.useMemo(()=>{const a=[];for(const[h,[m,d]]of e)a.push(m.render(d));return a},[e,p]);return u(c,{children:t})};try{s.displayName="PopupService",s.__docgenInfo={description:"",displayName:"PopupService",props:{}}}catch{}let o="";const n=({children:e})=>{const p=r.useRef(i()),{theme:t}=l();return r.useEffect(()=>{document.documentElement.dataset.theme=t},[t]),r.useEffect(()=>(o?console.error("TaomuApp only support one instance"):o=p.current,()=>{o=""}),[]),_(c,{children:[(!o||o===p.current)&&u(s,{}),u(f,{styles:y()}),e]})};try{n.displayName="TaomuApp",n.__docgenInfo={description:`初始化 TaomuApp

包裹根节点

请确保全局只有一个 TaomuApp`,displayName:"TaomuApp",props:{}}}catch{}export{n as T};
