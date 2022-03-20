"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5480],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2180:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,assets:()=>d,toc:()=>m,default:()=>c});var a=n(7813),l=n(7044),r=(n(9496),n(9613)),i=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-7.x/cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/es/7.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-7.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/es/7.x/cli/add"},next:{title:"pnpm update",permalink:"/es/7.x/cli/update"}},d={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"Options",id:"options",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:m};function c(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," es usado para instalar las dependencias del projecto."),(0,r.kt)("p",null,"En ambiente CI, la installaci\xf3n falla si el lockfile existe pero necesita ser actualizado."),(0,r.kt)("p",null,"Dentro de un ",(0,r.kt)("a",{parentName:"p",href:"/es/7.x/workspaces"},"workspace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," instala todas las dependencias en todos los proyectos. Si deseas desactivar este comportamiento, define la configuraci\xf3n",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(1393).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comando"),(0,r.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"Instala modo offline desde el almacenamiento interno")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," no es actualizado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Solo ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," es actualizado")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Si es ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm usar\xe1 solo los paquetes disponibles en el almacenamiento interno. Si el paquete no se encuentra localmente, la instalaci\xf3n fallar\xe1."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Si ",(0,r.kt)("inlineCode",{parentName:"p"},"verdadero"),", se omitir\xe1n las comprobaciones de obsolescencia de los datos almacenados en cach\xe9, pero los datos faltantes se solicitar\xe1n al servidor. Para forzar el modo offline, usa ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"No ejecuta ning\xfan sript definido en el proyecto ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," y sus dependencias."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Esta opci\xf3n no previene la ejecuci\xf3n de ",(0,r.kt)("a",{parentName:"p",href:"/es/7.x/pnpmfile"},".pnpmfile.cjs")))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm no instalar\xe1 ningun paquete listado en ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," si la variable de entorno ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," es definida como production. Usa esta propiedad para indicar a pnpm ignorar ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," y tomar production como por defecto."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Solo ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," son instaladas independientemente de ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," no son instaladas."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When used, only updates ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Nothing gets written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"Arregla las entradas lockfile roto automaticamente."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Por defecto",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No para CI: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Para CI: ",(0,r.kt)("strong",{parentName:"li"},"true"),", si lockfile esta presente"))),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Por defecto",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Para TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"Sin  non-TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - ninguna salida se muestra en la consola, excepto errores fatales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - el reporte por defecto cuando la salida stdout es TTY"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (Agregado en v1.29.1) - la salida es siempre agregada al final. No se realizan manipulaciones del cursor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - el reporte con m\xe1s detalle. Imprime todas las salidas en formato ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Creates a flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/es/7.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0},1393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);