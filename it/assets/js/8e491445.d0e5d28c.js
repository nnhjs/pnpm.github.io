"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1108],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var r=i(9496);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(i),d=n,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return i?r.createElement(b,l(l({ref:t},u),{},{components:i})):r.createElement(b,l({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},605:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,assets:()=>u,toc:()=>s,default:()=>d});var r=i(7813),n=i(7044),a=(i(9496),i(9613)),l=["components"],o={id:"publish",title:"pnpm publish"},p=void 0,c={unversionedId:"cli/publish",id:"cli/publish",title:"pnpm publish",description:"Pubblica un pacchetto nel registro.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/it/next/cli/publish",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/it/next/cli/env"},next:{title:"pnpm pack",permalink:"/it/next/cli/pack"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:s};function d(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pubblica un pacchetto nel registro."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,a.kt)("p",null,"Quando pubblichi un pacchetto in uno ",(0,a.kt)("a",{parentName:"p",href:"/it/next/workspaces"},"spazio di lavoro"),", il file LICENSE viene preso dalla radice dello spazio di lavoro e compresso con il pacchetto (a meno che il pacchetto abbia una sua licenza)."),(0,a.kt)("p",null,"Puoi sovrascrivere alcuni campi prima della pubblicazione, utilizzando il campo ",(0,a.kt)("a",{parentName:"p",href:"/it/next/package_json#publishconfig"},"publishConfig")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \xc8 inoltre possibile utilizzare ",(0,a.kt)("a",{parentName:"p",href:"/it/next/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," per personalizzare la sottocartella pubblicata (di solito utilizzando strumenti di compilazione di terze parti)."),(0,a.kt)("p",null,"Quando si esegue questo comando ricorsivamente (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm pubblicher\xe0 tutti i pacchetti che hanno versioni non ancora pubblicate nel registro."),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"Pubblica il pacchetto con il tag specificato. Per impostazione predefinita, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," aggiorna il tag ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,a.kt)("p",null,"Ad esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# nella cartella del pacchetto foo\npnpm publish --tag next\n# in un progetto dove vuoi usare la prossima versione di foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"Indica al registro se il pacchetto pubblicato deve essere pubblico o limitato."),(0,a.kt)("h3",{id:"git-checks"},"git-checks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito : ",(0,a.kt)("strong",{parentName:"li"},"true")," (a partire dalla versione v5)"),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se true, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," controlla se il ramo corrente \xe8 il tuo ramo di pubblicazione (master per impostazione predefinita), pulito e aggiornato."),(0,a.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Stringa"))),(0,a.kt)("p",null,"Il ramo principale del repository utilizzato per pubblicare le ultime modifiche."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"Prova a pubblicare i pacchetti anche se la loro versione attuale \xe8 gi\xe0 presente nel registro."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"Salva l'elenco dei pacchetti pubblicati in ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Utile quando vengono utilizzati altri strumenti per segnalare l'elenco dei pacchetti pubblicati."),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,"Aggiunto nella versione: v4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);