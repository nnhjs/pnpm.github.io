"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5639],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),v=l,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1957:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,assets:()=>s,toc:()=>u,default:()=>v});var n=r(7813),l=r(7044),o=(r(9496),r(9613)),a=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh/cli/remove",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/zh/cli/update"},next:{title:"pnpm link",permalink:"/zh/cli/link"}},s={},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function v(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"un")),(0,o.kt)("p",null,"\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u548c\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u79fb\u9664\u5305\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"\u5f53\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/zh/workspaces"},"\u5de5\u4f5c\u533a")," \u4e2d\u4f7f\u7528\u6b64\u547d\u4ee4\u65f6\uff0c\u5c06\u4ece\u6bcf\u4e2a\u5de5\u4f5c\u533a\u7684\u5305\u4e2d\u79fb\u9664\u76f8\u5173\u4f9d\u8d56(\u6216 \u591a\u4e2a\u4f9d\u8d56)\u3002"),(0,o.kt)("p",null,"\u5f53\u4e0d\u5728\u5de5\u4f5c\u533a\u5185\u4f7f\u7528\u65f6\uff0c\u5c06\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879 (\u6216\u591a\u4e2a\u4f9d\u8d56), \u4e5f\u5305\u542b\u5b50\u76ee\u5f55\u4e2d\u5bf9\u5e94\u7684\u5305 \u3002"),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"\u4ece\u5168\u5c40\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\u5305\u3002"),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"\u4ec5\u5220\u9664\u5f00\u53d1\u73af\u5883 ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"\u4ec5\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"\u4ec5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}v.isMDXComponent=!0}}]);