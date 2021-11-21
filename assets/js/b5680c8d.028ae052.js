"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48061],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60344:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={id:"core.node",title:"Interface: Node",sidebar_label:"Node",custom_edit_url:null,hide_title:!0},p="Interface: Node",l={unversionedId:"api/interfaces/core.node",id:"version-4.5/api/interfaces/core.node",isDocsHomePage:!1,title:"Interface: Node",description:"core.Node",source:"@site/versioned_docs/version-4.5/api/interfaces/core.node.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.node",permalink:"/docs/api/interfaces/core.node",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637516652,formattedLastUpdatedAt:"11/21/2021",frontMatter:{id:"core.node",title:"Interface: Node",sidebar_label:"Node",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"NamingStrategy",permalink:"/docs/api/interfaces/core.namingstrategy"},next:{title:"OneToOneOptions",permalink:"/docs/api/interfaces/core.onetooneoptions"}},s=[{value:"Properties",id:"properties",children:[{value:"dependencies",id:"dependencies",children:[],level:3},{value:"hash",id:"hash",children:[],level:3},{value:"state",id:"state",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-node"},"Interface: Node"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Node"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"dependencies"},"dependencies"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"dependencies"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,a.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.edge"},(0,a.kt)("em",{parentName:"a"},"Edge")),">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L13"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hash"},"hash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"hash"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L11"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"state"},"state"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"state"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/enums/core.nodestate"},(0,a.kt)("em",{parentName:"a"},"NodeState"))),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L12"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:12")))}u.isMDXComponent=!0}}]);