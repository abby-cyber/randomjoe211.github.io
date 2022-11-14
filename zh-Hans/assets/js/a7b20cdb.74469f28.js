"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=r,s=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(s,p(p({ref:t},d),{},{components:a})):n.createElement(s,p({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},p="\u6570\u636e\u6a21\u578b",i={unversionedId:"introduction/data-model",id:"version-1.1.0/introduction/data-model",title:"\u6570\u636e\u6a21\u578b",description:"\u672c\u6587\u4ecb\u7ecd Nebula Graph \u7684\u6570\u636e\u6a21\u578b\u3002\u6570\u636e\u6a21\u578b\u662f\u4e00\u79cd\u7ec4\u7ec7\u6570\u636e\u5e76\u8bf4\u660e\u5b83\u4eec\u5982\u4f55\u76f8\u4e92\u5173\u8054\u7684\u6a21\u578b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-1.1.0/2.introduction/6.data-model.md",sourceDirName:"2.introduction",slug:"/introduction/data-model",permalink:"/zh-Hans/docs/introduction/data-model",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/versioned_docs/version-1.1.0/2.introduction/6.data-model.md",tags:[],version:"1.1.0",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Storage \u670d\u52a1",permalink:"/zh-Hans/docs/introduction/nebula-graph-architecture/storage-service"},next:{title:"\u8def\u5f84",permalink:"/zh-Hans/docs/introduction/path"}},o={},m=[{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b-1",level:2},{value:"\u6709\u5411\u5c5e\u6027\u56fe",id:"\u6709\u5411\u5c5e\u6027\u56fe",level:2}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Nebula Graph \u7684\u6570\u636e\u6a21\u578b\u3002\u6570\u636e\u6a21\u578b\u662f\u4e00\u79cd\u7ec4\u7ec7\u6570\u636e\u5e76\u8bf4\u660e\u5b83\u4eec\u5982\u4f55\u76f8\u4e92\u5173\u8054\u7684\u6a21\u578b\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u6a21\u578b-1"},"\u6570\u636e\u6a21\u578b"),(0,r.kt)("p",null,"Nebula Graph \u6570\u636e\u6a21\u578b\u4f7f\u7528 6 \u79cd\u57fa\u672c\u7684\u6570\u636e\u6a21\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56fe\u7a7a\u95f4\uff08Space\uff09"),(0,r.kt)("p",{parentName:"li"},"\u56fe\u7a7a\u95f4\u7528\u4e8e\u9694\u79bb\u4e0d\u540c\u56e2\u961f\u6216\u8005\u9879\u76ee\u7684\u6570\u636e\u3002\u4e0d\u540c\u56fe\u7a7a\u95f4\u7684\u6570\u636e\u662f\u76f8\u4e92\u9694\u79bb\u7684\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e0d\u540c\u7684\u5b58\u50a8\u526f\u672c\u6570\u3001\u6743\u9650\u3001\u5206\u7247\u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\uff08Vertex\uff09"),(0,r.kt)("p",{parentName:"li"},"\u70b9\u7528\u6765\u4fdd\u5b58\u5b9e\u4f53\u5bf9\u8c61\uff0c\u7279\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u70b9\u662f\u7528\u70b9\u6807\u8bc6\u7b26\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"VID"),"\uff09\u6807\u8bc6\u7684\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"VID"),"\u5728\u540c\u4e00\u56fe\u7a7a\u95f4\u4e2d\u552f\u4e00\u3002VID \u662f\u4e00\u4e2a int64\uff0c\u6216\u8005 fixed_string(N)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u53ef\u4ee5\u6709 0 \u5230\u591a\u4e2a Tag\u3002")),(0,r.kt)("p",{parentName:"li"},"!!! Compatibility"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  Nebula Graph 2.x \u53ca\u4ee5\u4e0b\u7248\u672c\u4e2d\u7684\u70b9\u5fc5\u987b\u5305\u542b\u81f3\u5c11\u4e00\u4e2a Tag\u3002\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fb9\uff08Edge\uff09"),(0,r.kt)("p",{parentName:"li"},"\u8fb9\u662f\u7528\u6765\u8fde\u63a5\u70b9\u7684\uff0c\u8868\u793a\u4e24\u4e2a\u70b9\u4e4b\u95f4\u7684\u5173\u7cfb\u6216\u884c\u4e3a\uff0c\u7279\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e24\u70b9\u4e4b\u95f4\u53ef\u4ee5\u6709\u591a\u6761\u8fb9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fb9\u662f\u6709\u65b9\u5411\u7684\uff0c\u4e0d\u5b58\u5728\u65e0\u5411\u8fb9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56db\u5143\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"li"},"<\u8d77\u70b9 VID\u3001Edge type\u3001\u8fb9\u6392\u5e8f\u503c (rank)\u3001\u7ec8\u70b9 VID>")," \u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u4e00\u6761\u8fb9\u3002\u8fb9\u6ca1\u6709 EID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6761\u8fb9\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a Edge type\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6761\u8fb9\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a Rank\uff0c\u7c7b\u578b\u4e3a int64\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\u3002")),(0,r.kt)("p",{parentName:"li"},"!!! \u5173\u4e8e Rank"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," Rank \u53ef\u4ee5\u7528\u6765\u533a\u5206 Edge type\u3001\u8d77\u59cb\u70b9\u3001\u76ee\u7684\u70b9\u90fd\u76f8\u540c\u7684\u8fb9\u3002\u8be5\u503c\u5b8c\u5168\u7531\u7528\u6237\u81ea\u5df1\u6307\u5b9a\u3002       \n \u8bfb\u53d6\u65f6\u5fc5\u987b\u81ea\u884c\u53d6\u5f97\u5168\u90e8\u7684 Rank \u503c\u540e\u6392\u5e8f\u8fc7\u6ee4\u548c\u62fc\u63a5\u3002       \n \u4e0d\u652f\u6301\u8bf8\u5982`next(), pre(), head(), tail(), max(), min(), lessThan(), moreThan()`\u7b49\u51fd\u6570\u529f\u80fd\uff0c\u4e5f\u4e0d\u80fd\u901a\u8fc7\u521b\u5efa\u7d22\u5f15\u52a0\u901f\u8bbf\u95ee\u6216\u8005\u6761\u4ef6\u8fc7\u6ee4\u3002 \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6807\u7b7e\uff08Tag\uff09"),(0,r.kt)("p",{parentName:"li"},"Tag \u7531\u4e00\u7ec4\u4e8b\u5148\u9884\u5b9a\u4e49\u7684\u5c5e\u6027\u6784\u6210\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fb9\u7c7b\u578b\uff08Edge type\uff09"),(0,r.kt)("p",{parentName:"li"},"Edge type \u7531\u4e00\u7ec4\u4e8b\u5148\u9884\u5b9a\u4e49\u7684\u5c5e\u6027\u6784\u6210\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c5e\u6027\uff08Property\uff09"),(0,r.kt)("p",{parentName:"li"},"\u5c5e\u6027\u662f\u6307\u4ee5\u952e\u503c\u5bf9\uff08Key-value pair\uff09\u5f62\u5f0f\u8868\u793a\u7684\u4fe1\u606f\u3002"))),(0,r.kt)("p",null,"!!! Note"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tag \u548c Edge type \u7684\u4f5c\u7528\uff0c\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u201c\u70b9\u8868\u201d\u548c\u201c\u8fb9\u8868\u201d\u7684\u8868\u7ed3\u6784\u3002\n")),(0,r.kt)("h2",{id:"\u6709\u5411\u5c5e\u6027\u56fe"},"\u6709\u5411\u5c5e\u6027\u56fe"),(0,r.kt)("p",null,"Nebula Graph \u4f7f\u7528\u6709\u5411\u5c5e\u6027\u56fe\u6a21\u578b\uff0c\u6307\u70b9\u548c\u8fb9\u6784\u6210\u7684\u56fe\uff0c\u8fd9\u4e9b\u8fb9\u662f\u6709\u65b9\u5411\u7684\uff0c\u70b9\u548c\u8fb9\u90fd\u53ef\u4ee5\u6709\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u4e0b\u8868\u4e3a\u7bee\u7403\u8fd0\u52a8\u5458\u6570\u636e\u96c6\u7684\u7ed3\u6784\u793a\u4f8b\uff0c\u5305\u62ec\u4e24\u79cd\u7c7b\u578b\u7684\u70b9\uff08",(0,r.kt)("strong",{parentName:"p"},"player"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"team"),"\uff09\u548c\u4e24\u79cd\u7c7b\u578b\u7684\u8fb9\uff08",(0,r.kt)("strong",{parentName:"p"},"serve"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"follow"),"\uff09\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d\uff08\u6570\u636e\u7c7b\u578b\uff09"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"player")),(0,r.kt)("td",{parentName:"tr",align:"left"},"name (string) ",(0,r.kt)("br",null),"age\uff08int\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u7403\u5458\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"team")),(0,r.kt)("td",{parentName:"tr",align:"left"},"name (string)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u7403\u961f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Edge type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"serve")),(0,r.kt)("td",{parentName:"tr",align:"left"},"start_year (int) ",(0,r.kt)("br",null)," end_year (int)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u7403\u5458\u7684\u884c\u4e3a\u3002",(0,r.kt)("br",null),"\u8be5\u884c\u4e3a\u5c06\u7403\u5458\u548c\u7403\u961f\u8054\u7cfb\u8d77\u6765\uff0c\u65b9\u5411\u662f\u4ece\u7403\u5458\u5230\u7403\u961f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Edge type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"follow")),(0,r.kt)("td",{parentName:"tr",align:"left"},"degree (int)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u7403\u5458\u7684\u884c\u4e3a\u3002",(0,r.kt)("br",null),"\u8be5\u884c\u4e3a\u5c06\u4e24\u4e2a\u7403\u5458\u8054\u7cfb\u8d77\u6765\uff0c\u65b9\u5411\u662f\u4ece\u4e00\u4e2a\u7403\u5458\u5230\u53e6\u4e00\u4e2a\u7403\u5458\u3002")))),(0,r.kt)("p",null,"!!! Note"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Nebula Graph \u4e2d\u6ca1\u6709\u65e0\u5411\u8fb9\uff0c\u53ea\u652f\u6301\u6709\u5411\u8fb9\u3002\n")),(0,r.kt)("p",null,"!!! compatibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u7531\u4e8e Nebula Graph {{ nebula.release }} \u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c\u5141\u8bb8\u5b58\u5728"\u60ac\u6302\u8fb9"\uff0c\u56e0\u6b64\u5728\u589e\u5220\u65f6\uff0c\u7528\u6237\u9700\u81ea\u884c\u4fdd\u8bc1\u201c\u4e00\u6761\u8fb9\u6240\u5bf9\u5e94\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u201d\u7684\u5b58\u5728\u6027\u3002\u8be6\u89c1 [INSERT VERTEX](../3.ngql-guide/12.vertex-statements/1.insert-vertex.md)\u3001[DELETE VERTEX](../3.ngql-guide/12.vertex-statements/4.delete-vertex.md)\u3001[INSERT EDGE](../3.ngql-guide/13.edge-statements/1.insert-edge.md)\u3001[DELETE EDGE](../3.ngql-guide/13.edge-statements/4.delete-edge.md)\u3002\n\n\u4e0d\u652f\u6301 openCypher \u4e2d\u7684 MERGE \u8bed\u53e5\u3002\n')))}u.isMDXComponent=!0}}]);