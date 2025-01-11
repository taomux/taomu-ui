import{l as e,c,p,a as g}from"./mini-scrollbar-CZ8eNCm3.js";import{u as f,a as C}from"./use-taomu-classname-CGrN28Ws.js";import"./index-CZMpeKRu.js";import{i as y}from"./global-vars-CQDXv0Fn.js";y("common",{loadingColor:e("colorPrimary")});const V=c`
  ${p("loadingTrackColor",`color-mix(in srgb, ${e("loadingColor")}, transparent 80%)`)}

  cursor: progress;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  height: ${e("loadingSize")};
  width: ${e("loadingSize")};
  border-radius: 50%;
  border-width: ${e("loadingWeight")};
  border-style: solid;
  border-color: ${e("loadingTrackColor")};
  border-top-color: ${e("loadingColor")};
  animation: animation-rotate ${e("loadingSpeed")} linear infinite;

  @keyframes animation-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,r=({className:a,cssVars:o,style:l,size:i=24,color:s,weight:n=3,speed:t=.8,...u})=>{const d=f("loading",a),m=C({loadingColor:s,loadingSize:i,loadingWeight:n,loadingSpeed:`${t}s`,...o},l);return g("div",{className:d,style:m,css:V,...u})};try{r.displayName="Loading",r.__docgenInfo={description:"",displayName:"Loading",props:{size:{defaultValue:{value:"24"},description:"大小 默认 26",name:"size",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"线条宽度 默认 3",name:"weight",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"颜色",name:"color",required:!1,type:{name:"string"}},speed:{defaultValue:{value:"0.8"},description:"旋转速度，x秒/圈 数值越小越快，默认0.8",name:"speed",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},cssVars:{defaultValue:null,description:"重写 css 变量",name:"cssVars",required:!1,type:{name:"LoadingCssVars"}}}}}catch{}export{r as L};
