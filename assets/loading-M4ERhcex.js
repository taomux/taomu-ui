import{p as g,l as e,c,a as p}from"./mini-scrollbar-CPC470y1.js";import"./index-D4lIrffr.js";import{u as C,a as f}from"./use-taomu-classname-DBKvGVUz.js";import{i as y}from"./global-vars-CoVtkCb5.js";y("common",{loadingColor:e("colorPrimary")});const b=c`
  ${g("loadingTrackColor",`color-mix(in srgb, ${e("loadingColor")}, transparent 80%)`)}

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
`,a=({className:o,cssVars:r,style:i,size:l=24,color:n,weight:s=3,speed:t=.8,...d})=>{const u=C("loading",o),m=f({loadingColor:n,loadingSize:l,loadingWeight:s,loadingSpeed:`${t}s`,...r},i);return p("div",{className:u,style:m,css:b,...d})};try{a.displayName="Loading",a.__docgenInfo={description:"",displayName:"Loading",props:{size:{defaultValue:{value:"24"},description:"大小 默认 26",name:"size",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"线条宽度 默认 3",name:"weight",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"颜色",name:"color",required:!1,type:{name:"string"}},speed:{defaultValue:{value:"0.8"},description:"旋转速度，x秒/圈 数值越小越快，默认0.8",name:"speed",required:!1,type:{name:"number"}}}}}catch{}export{a as L};
