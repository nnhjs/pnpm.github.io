"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[150],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,u=c["".concat(o,".").concat(m)]||c[m]||k[m]||r;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1002:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>d,assets:()=>s,toc:()=>k,default:()=>m});var n=a(7813),l=a(7044),r=(a(9496),a(9613)),p=["components"],i={id:"add",title:"pnpm add <pkg>"},o=void 0,d={unversionedId:"cli/add",id:"version-7.x/cli/add",title:"pnpm add <pkg>",description:"\ud328\ud0a4\uc9c0\uc640 \ud328\ud0a4\uc9c0\uac00 \uc758\uc874\ud558\ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc0c8 \ud328\ud0a4\uc9c0\ub294 \ud504\ub85c\ub355\uc158 \uc758\uc874\uc131\uc73c\ub85c \uc124\uce58\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/ko/7.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-7.x/docs",previous:{title:"Scripts",permalink:"/ko/7.x/scripts"},next:{title:"pnpm install",permalink:"/ko/7.x/cli/install"}},s={},k=[{value:"TL;DR",id:"tldr",level:2},{value:"\uc9c0\uc6d0\ub418\ub294 \ud328\ud0a4\uc9c0 \uc704\uce58",id:"\uc9c0\uc6d0\ub418\ub294-\ud328\ud0a4\uc9c0-\uc704\uce58",level:2},{value:"npm \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c \uc124\uce58",id:"npm-\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c-\uc124\uce58",level:3},{value:"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uc124\uce58\ud558\uae30",id:"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c-\uc124\uce58\ud558\uae30",level:3},{value:"\ub85c\uceec \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc124\uce58",id:"\ub85c\uceec-\ud30c\uc77c-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\uc124\uce58",level:3},{value:"\uc6d0\uaca9 \ud0c0\ub974\ubcfc\uc5d0\uc11c \uc124\uce58",id:"\uc6d0\uaca9-\ud0c0\ub974\ubcfc\uc5d0\uc11c-\uc124\uce58",level:3},{value:"Git \uc800\uc7a5\uc18c\uc5d0\uc11c \uc124\uce58",id:"git-\uc800\uc7a5\uc18c\uc5d0\uc11c-\uc124\uce58",level:3},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],c={toc:k};function m(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud328\ud0a4\uc9c0\uc640 \ud328\ud0a4\uc9c0\uac00 \uc758\uc874\ud558\ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc0c8 \ud328\ud0a4\uc9c0\ub294 \ud504\ub85c\ub355\uc158 \uc758\uc874\uc131\uc73c\ub85c \uc124\uce58\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"),"\uc5d0 \uc800\uc7a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"),"\uc5d0 \uc800\uc7a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"),"\uc5d0 \uc800\uc7a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud328\ud0a4\uc9c0\ub97c \uc804\uc5ed\uc73c\ub85c \uc124\uce58\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"next")," \ud0dc\uadf8\ub85c\ubd80\ud130 \uc124\uce58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0")," \ubc84\uc804 \uba85\uc2dc")))),(0,r.kt)("h2",{id:"\uc9c0\uc6d0\ub418\ub294-\ud328\ud0a4\uc9c0-\uc704\uce58"},"\uc9c0\uc6d0\ub418\ub294 \ud328\ud0a4\uc9c0 \uc704\uce58"),(0,r.kt)("h3",{id:"npm-\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c-\uc124\uce58"},"npm \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c \uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," by default."),(0,r.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0, \uba85\ub839\uc740 \uba3c\uc800 \uc791\uc5c5\uacf5\uac04\uc5d0 \uc788\ub294 \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\uac00 \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \uc774\ubbf8 \uc0ac\uc6a9\ub41c \ubc84\uc804\uc774 \uc124\uce58\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"You may also install packages by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0dc\uadf8: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"\ubc84\uc804: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"\ubc84\uc804 \ubc94\uc704: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c-\uc124\uce58\ud558\uae30"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,"Note that when adding dependencies and working within a ",(0,r.kt)("a",{parentName:"p",href:"/ko/7.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,r.kt)("a",{parentName:"p",href:"/ko/7.x/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,r.kt)("a",{parentName:"p",href:"/ko/7.x/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,r.kt)("h3",{id:"\ub85c\uceec-\ud30c\uc77c-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\uc124\uce58"},"\ub85c\uceec \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc124\uce58"),(0,r.kt)("p",null,"There are two ways to install from the local file system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ud0c0\ub974\ubcfc \ud30c\uc77c\uc5d0\uc11c \uc124\uce58 (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"\ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc124\uce58")),(0,r.kt)("p",null,"\uc608\uc2dc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"\uc6d0\uaca9-\ud0c0\ub974\ubcfc\uc5d0\uc11c-\uc124\uce58"},"\uc6d0\uaca9 \ud0c0\ub974\ubcfc\uc5d0\uc11c \uc124\uce58"),(0,r.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"git-\uc800\uc7a5\uc18c\uc5d0\uc11c-\uc124\uce58"},"Git \uc800\uc7a5\uc18c\uc5d0\uc11c \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,r.kt)("p",null,"You may install from Git by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master\ub85c\ubd80\ud130 \ucd5c\uc2e0 \ucee4\ubc0b: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"\ucee4\ubc0b: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"\ube0c\ub79c\uce58: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"\ubc84\uc804 \ubc94\uc704: pnpm add kevva/is-positive#semver:^2.0.0")),(0,r.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Install the specified packages as regular ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Install the specified packages as ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Install the specified packages as ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,r.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag is used."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w"),"."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Install a package globally."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ko/7.x/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}m.isMDXComponent=!0}}]);