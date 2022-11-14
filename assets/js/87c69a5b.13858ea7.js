"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="VID",p={unversionedId:"introduction/vid",id:"version-1.0.0/introduction/vid",title:"VID",description:"In Nebula Graph, a vertex is uniquely identified by its ID, which is called a VID or a Vertex ID.",source:"@site/versioned_docs/version-1.0.0/2.introduction/8.vid.md",sourceDirName:"2.introduction",slug:"/introduction/vid",permalink:"/docs/1.0.0/introduction/vid",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/versioned_docs/version-1.0.0/2.introduction/8.vid.md",tags:[],version:"1.0.0",sidebarPosition:8,frontMatter:{},sidebar:"docs",previous:{title:"Path types",permalink:"/docs/1.0.0/introduction/path"}},l={},s=[{value:"Features",id:"features",level:2},{value:"VID Operation",id:"vid-operation",level:2},{value:"VID Generation",id:"vid-generation",level:2},{value:"Define and modify a VID and its data type",id:"define-and-modify-a-vid-and-its-data-type",level:2},{value:"Query <code>start vid</code> and global scan",id:"query-start-vid-and-global-scan",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vid"},"VID"),(0,r.kt)("p",null,"In Nebula Graph, a vertex is uniquely identified by its ID, which is called a VID or a Vertex ID."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The data types of VIDs are restricted to ",(0,r.kt)("inlineCode",{parentName:"p"},"FIXED_STRING(<N>)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INT64"),". One graph space can only select one VID type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A VID in a graph space is unique. It functions just as a primary key in a relational database. VIDs in different graph spaces are independent.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The VID generation method must be set by users, because Nebula Graph does not provide auto increasing ID, or UUID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vertices with the same VID will be identified as the same one. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A VID is the unique identifier of an entity, like a person's ID card number. A tag means the type of an entity,  such as driver, and boss. Different tags define two groups of different properties, such as driving license number, driving age, order amount, order taking alt, and job number, payroll, debt ceiling, business phone number.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements (neither uses a parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS"),") with the same VID and tag are operated at the same time, the latter ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," will overwrite the former.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When two ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements with the same VID but different tags, like ",(0,r.kt)("inlineCode",{parentName:"p"},"TAG A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TAG B"),", are operated at the same time, the operation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Tag A")," will not affect ",(0,r.kt)("inlineCode",{parentName:"p"},"Tag B"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VIDs will usually be indexed and stored into memory (in the way of LSM-tree). Thus, direct access to VIDs enjoys peak performance."))),(0,r.kt)("h2",{id:"vid-operation"},"VID Operation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nebula Graph 1.x only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"INT64")," while Nebula Graph 2.x supports ",(0,r.kt)("inlineCode",{parentName:"p"},"INT64")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FIXED_STRING(<N>)"),". In ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SPACE"),", VID types can be set via ",(0,r.kt)("inlineCode",{parentName:"p"},"vid_type"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id()")," function can be used to specify or locate a VID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LOOKUP")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," statements can be used to find a VID via property index.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Direct access to vertices statements via VIDs enjoys peak performance, such as ",(0,r.kt)("inlineCode",{parentName:"p"},'DELETE xxx WHERE id(xxx) == "player100"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "player100"'),". Finding VIDs via properties and then operating the graph will cause poor performance, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"LOOKUP | GO FROM $-.ids"),", which will run both ",(0,r.kt)("inlineCode",{parentName:"p"},"LOOKUP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," one more time."))),(0,r.kt)("h2",{id:"vid-generation"},"VID Generation"),(0,r.kt)("p",null,"VIDs can be generated via applications. Here are some tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Optimal) Directly take a unique primary key or property as a VID. Property access depends on the VID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate a VID via a unique combination of properties. Property access depends on property index.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate a VID via algorithms like snowflake. Property access depends on property index.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If short primary keys greatly outnumber long primary keys, do not enlarge the ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"FIXED_STRING(<N>)")," too much. Otherwise, it will occupy a lot of memory and hard disks, and slow down performance. Generate VIDs via BASE64, MD5, hash by encoding and splicing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you generate int64 VID via hash, the probability of collision is about 1/10 when there are 1 billion vertices. The number of edges has no concern with the probability of collision."))),(0,r.kt)("h2",{id:"define-and-modify-a-vid-and-its-data-type"},"Define and modify a VID and its data type"),(0,r.kt)("p",null,"The data type of a VID must be defined when you ",(0,r.kt)("a",{parentName:"p",href:"../3.ngql-guide/9.space-statements/1.create-space.md"},"create the graph space"),". Once defined, it cannot be modified."),(0,r.kt)("p",null,"A VID is set when you ",(0,r.kt)("a",{parentName:"p",href:"../3.ngql-guide/12.vertex-statements/1.insert-vertex.md"},"insert a vertex")," and cannot be modified. "),(0,r.kt)("h2",{id:"query-start-vid-and-global-scan"},"Query ",(0,r.kt)("inlineCode",{parentName:"h2"},"start vid")," and global scan"),(0,r.kt)("p",null,"In most cases, the execution plan of query statements in Nebula Graph (",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GO"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"LOOKUP"),") must query the ",(0,r.kt)("inlineCode",{parentName:"p"},"start vid")," in a certain way."),(0,r.kt)("p",null,"There are only two ways to locate ",(0,r.kt)("inlineCode",{parentName:"p"},"start vid"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "player100" OVER')," explicitly indicates in the statement that ",(0,r.kt)("inlineCode",{parentName:"p"},"start vid"),' is "player100".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'LOOKUP ON player WHERE player.name == "Tony Parker"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'MATCH (v:player {name:"Tony Parker"})')," locates ",(0,r.kt)("inlineCode",{parentName:"p"},"start vid")," by the index of the property ",(0,r.kt)("inlineCode",{parentName:"p"},"player.name"),"."))),(0,r.kt)("p",null,"!!! caution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," For example, `match (n) return n;` returns an error: `Scan vertices or edges need to specify a limit number, or limit number can not push down.`, because it is a global scan, you must use the `LIMIT` clause to limit the number of returns.\n")))}m.isMDXComponent=!0}}]);