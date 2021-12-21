(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[303],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return b}});var i=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),b=a,m=f["".concat(s,".").concat(b)]||f[b]||u[b]||n;return t?i.createElement(m,o(o({ref:r},p),{},{components:t})):i.createElement(m,o({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8633:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var i=t(2122),a=t(9756),n=(t(7294),t(3905)),o=["components"],l={description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet library","client library","Tangle","C","golang","javascript","rust"]},s="Libraries",c={unversionedId:"libraries/overview",id:"libraries/overview",isDocsHomePage:!1,title:"Libraries",description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",source:"@site/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/overview",permalink:"/libraries/overview",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/libraries/overview.md",version:"current",frontMatter:{description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet library","client library","Tangle","C","golang","javascript","rust"]},sidebar:"mySidebar",previous:{title:"Node Software",permalink:"/node_software"},next:{title:"IOTA Client Library",permalink:"/libraries/client"}},p=[{value:"Utilities",id:"utilities",children:[]}],u={toc:p};function f(e){var r=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"libraries"},"Libraries"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The IOTA client libraries allow you to easily integrate IOTA into your own applications. You can choose a library to match your use case.")),(0,n.kt)("p",null,"The official IOTA libraries serve as ",(0,n.kt)("inlineCode",{parentName:"p"},"one-source-code-of-truth")," to IOTA users and provide binding to other programming languages. You can read more about core principles behind IOTA client libraries in the following blog ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"post"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/libraries/client"},"client-lib"),": a general purpose IOTA client library for interacting with the IOTA network (Tangle)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/libraries/wallet"},"wallet-lib"),": a stateful library specifically designed to be used for IOTA value-based transfers ."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.c"},"iota.c"),": a special-purpose library in C for embedded devices (with microcontrollers) covering a basic features of ",(0,n.kt)("inlineCode",{parentName:"li"},"client-lib")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"wallet-lib.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.js/tree/chrysalis"},"iota.js"),": an initial IOTA client library in Typescript that can be used in a web browser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/tree/chrysalis/phase2"},"iota.go"),": an initial IOTA client library in Golang.")),(0,n.kt)("div",{class:"iframe-wrapper"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/N2VW3zJQmso",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Libraries Overview",src:t(4776).Z})),(0,n.kt)("p",null,"All libraries are in active development. The libraries target the Chrysalis devnet and no longer work with the previous IOTA mainnet."),(0,n.kt)("p",null,"The IOTA foundation is in charge of maintaining the official client libraries.  You can find the libraries source code in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger"},"Official GitHub repository"),"."),(0,n.kt)("h2",{id:"utilities"},"Utilities"),(0,n.kt)("h4",{id:"developer-tools"},(0,n.kt)("strong",{parentName:"h4"},"Developer tools")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://explorer.iota.org/chrysalis"},"Official explorer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://faucet.devnet.chrysalis2.com/"},"Devnet faucet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"Commandline wallet"))),(0,n.kt)("hr",null))}f.isMDXComponent=!0},4776:function(e,r,t){"use strict";r.Z=t.p+"assets/images/overview-libraries-1305e7244710fefcd1d3d1cbf708353e.svg"}}]);