"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8938],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(v,i(i({ref:n},s),{},{components:t})):r.createElement(v,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},297:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,assets:()=>s,toc:()=>u,default:()=>m});var r=t(7813),l=t(7044),o=(t(9496),t(9613)),i=["components"],a={id:"env",title:"pnpm env <cmd>"},p=void 0,c={unversionedId:"cli/env",id:"version-7.x/cli/env",title:"pnpm env <cmd>",description:"Gestisce l'ambiente Node.js.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/it/7.x/cli/env",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-7.x/docs",previous:{title:"pnpm start",permalink:"/it/7.x/cli/start"},next:{title:"pnpm publish",permalink:"/it/7.x/cli/publish"}},s={},u=[{value:"Comandi",id:"comandi",level:2},{value:"use",id:"use",level:3},{value:"Opzioni",id:"opzioni",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gestisce l'ambiente Node.js."),(0,o.kt)("h2",{id:"comandi"},"Comandi"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Installa e usa la versione specificata di Node.js"),(0,o.kt)("p",null,"Installare la versione LTS di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Installare Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Inoltre dalla v6.18.0:"),(0,o.kt)("p",null,"Installa una versione non definitiva di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Installa l'ultima versione di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Le modifiche sono effettuate a livello di sistema."))}m.isMDXComponent=!0}}]);