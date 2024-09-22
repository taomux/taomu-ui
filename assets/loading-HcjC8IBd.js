import{s as m,l as e,c,p,a as C}from"./mini-scrollbar-BFxqz1iK.js";import{u as f,a as y}from"./use-taomu-classname-XwI4-eYN.js";import"./index-l2PZgWEW.js";m("common",{loadingColor:e("colorPrimary")});const b=c`
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
`,o=({className:a,cssVars:r,style:i,size:l=24,color:n,weight:s=3,speed:d=.8,...t})=>{const u=f("loading",a),g=y({loadingColor:n,loadingSize:l,loadingWeight:s,loadingSpeed:`${d}s`,...r},i);return C("div",{className:u,style:g,css:b,...t})};try{o.displayName="Loading",o.__docgenInfo={description:"",displayName:"Loading",props:{size:{defaultValue:{value:"24"},description:"大小 默认 26",name:"size",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"线条宽度 默认 3",name:"weight",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"颜色",name:"color",required:!1,type:{name:"string"}},speed:{defaultValue:{value:"0.8"},description:"旋转速度，x秒/圈 数值越小越快，默认0.8",name:"speed",required:!1,type:{name:"number"}}}}}catch{}export{o as L};
