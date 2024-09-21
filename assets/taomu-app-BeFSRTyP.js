import{a as u,F as c,u as i,j as l,g as _,G as f}from"./mini-scrollbar-Bq2Cewqh.js";import{R as r}from"./index-l2PZgWEW.js";import"./_getTag-Dgi2y9Uc.js";import{p as y,u as g}from"./popup.store-CTuOgDEi.js";const s=()=>{const{popupsMap:e,updateCount:p}=y.useStore(["popupsMap","updateCount"]),t=r.useMemo(()=>{const a=[];for(const[h,[d,m]]of e)a.push(d.render(m));return a},[e,p]);return u(c,{children:t})};try{s.displayName="PopupService",s.__docgenInfo={description:"",displayName:"PopupService",props:{}}}catch{}let o="";const n=({children:e})=>{const p=r.useRef(g()),{theme:t}=i();return r.useEffect(()=>{document.documentElement.dataset.theme=t},[t]),r.useEffect(()=>(o?console.error("TaomuApp only support one instance"):o=p.current,()=>{o=""}),[]),l(c,{children:[(!o||o===p.current)&&u(s,{}),u(f,{styles:_()}),e]})};try{n.displayName="TaomuApp",n.__docgenInfo={description:`初始化 TaomuApp

包裹根节点

请确保全局只有一个 TaomuApp`,displayName:"TaomuApp",props:{}}}catch{}export{n as T};
