import{T as a,c as d,b as r,C as l,L as f,D as g}from"./mini-scrollbar-1dk_y2Qh.js";import{R as i}from"./index-D4lIrffr.js";const n={common:{...l},light:{...f},dark:{...g}};function A(t,s){Object.assign(n[t],s)}function E(t,s){Object.assign(n[t],s),L("taomu://update-global-style")}function O(){return d`
    :root {
      ${a(n.common,r)}
    }

    :root[data-theme='light'] {
      ${a(n.light,r)}
    }

    :root[data-theme='dark'] {
      ${a(n.dark,r)}
    }
  `}function h(t,s,o=[]){const e=i.useRef(s);e.current=s,i.useEffect(()=>{if(!e.current)return;function u(m){var c;(c=e.current)==null||c.call(e,m)}return document.addEventListener(t,u),()=>{document.removeEventListener(t,u)}},o)}function L(t,s){const o=new CustomEvent(t,{detail:s});return document.dispatchEvent(o),o}export{L as d,O as g,A as i,E as s,h as u};
