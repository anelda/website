(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},101:function(t,n,e){t.exports=!e(31)&&!e(70)((function(){return 7!=Object.defineProperty(e(79)("div"),"a",{get:function(){return 7}}).a}))},102:function(t,n,e){var r=e(50);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},124:function(t,n,e){},14:function(t,n,e){var r=e(16),o=e(26),a=e(21),i=e(28),s=e(36),c=function(t,n,e){var u,f,l,p,v=t&c.F,d=t&c.G,h=t&c.S,g=t&c.P,m=t&c.B,y=d?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,x=d?o:o[n]||(o[n]={}),_=x.prototype||(x.prototype={});for(u in d&&(e=n),e)l=((f=!v&&y&&void 0!==y[u])?y:e)[u],p=m&&f?s(l,r):g&&"function"==typeof l?s(Function.call,l):l,y&&i(y,u,l,t&c.U),x[u]!=l&&a(x,u,p),g&&_[u]!=l&&(_[u]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},15:function(t,n,e){var r=e(32)("wks"),o=e(33),a=e(16).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},16:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},17:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},18:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},19:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},20:function(t,n,e){var r=e(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},21:function(t,n,e){var r=e(34),o=e(44);t.exports=e(22)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},22:function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},23:function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},233:function(t,n,e){"use strict";var r=e(124);e.n(r).a},24:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},25:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},26:function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},27:function(t,n,e){var r=e(19);t.exports=function(t){return Object(r(t))}},28:function(t,n,e){var r=e(16),o=e(21),a=e(35),i=e(33)("src"),s=e(65),c=(""+s).split("toString");e(26).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var u="function"==typeof e;u&&(a(e,"name")||o(e,"name",n)),t[n]!==e&&(u&&(a(e,i)||o(e,i,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||s.call(this)}))},29:function(t,n,e){"use strict";var r=e(18);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},30:function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},31:function(t,n,e){t.exports=!e(70)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},32:function(t,n,e){var r=e(26),o=e(16),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(51)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},33:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},34:function(t,n,e){var r=e(20),o=e(53),a=e(55),i=Object.defineProperty;n.f=e(22)?Object.defineProperty:function(t,n,e){if(r(t),n=a(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},341:function(t,n,e){"use strict";e.r(n);e(76),e(77),e(42),e(93);var r=e(95),o=e(96),a=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],i=function(){function t(n){Object(r.a)(this,t),this.shape=[8,3],this.domNode=n}return Object(o.a)(t,[{key:"configure",value:function(){var t=this,n=Honeycomb.extendHex({size:75,orientation:"flat",currentIndex:function(){var n=this.toPoint(),e=t.gridType.pointToHex([n.x,n.y]);return e.x+1+(e.y+1)*t.shape[0]},render:function(n){var e=this.toPoint(),r=e.x,o=e.y,i=this.toPoint(),s=this.center().add(i),c=(t.gridType.pointToHex([i.x,i.y]),this.corners()),u=this.currentIndex(),f={width:1,color:"#999"};""===a[u][0]&&(f={}),this.draw=n.polygon(c.map((function(t){var n=t.x,e=t.y;return"".concat(n,",").concat(e)}))).fill("none").stroke(f).translate(r,o);var l=a[u][0],p=l.includes("\n")?s.y-26:s.y-13;n.text(l).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(s.x,p)},openAnchor:function(){var t=this.currentIndex();""!==a[t][0]&&window.open(a[t][1])},highlight:function(){var t=this.currentIndex();""!==a[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(n)}},{key:"setup",value:function(){var t=this.shape;this.configure();var n=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(n)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(n){var e=n.offsetX,r=n.offsetY,o=t.gridType.pointToHex([e,r]),a=t.gridInstance.get(o);a&&a.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(n){var e=n.offsetX,r=n.offsetY,o=t.gridType.pointToHex([e,r]),a=t.gridInstance.get(o);a&&a.openAnchor()}))}}]),t}(),s={mounted:function(){var t=new i(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},c=(e(233),e(0)),u={components:{JobsDiagram:Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"00d74f52",null).exports}},f=Object(c.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{staticClass:"text-center pt-6"},[t._v("Used by")]),t._v(" "),e("div",{staticClass:"container h-32 flex items-stretch"},[e("img",{staticClass:"w-1/6 self-center",attrs:{src:"/img/home/pandas.png"}}),t._v(" "),e("img",{staticClass:"w-1/6 self-center pl-8",attrs:{src:"/img/home/kaggle.png"}}),t._v(" "),e("img",{staticClass:"w-1/5 self-center pl-8",attrs:{src:"/img/home/openrefine.png"}}),t._v(" "),e("img",{staticClass:"w-1/5 self-center pl-8",attrs:{src:"/img/home/data-gov-uk.png"}}),t._v(" "),e("img",{staticClass:"w-1/12 self-center pl-8",attrs:{src:"/img/home/18f.png"}}),t._v(" "),e("img",{staticClass:"w-1/5 self-center pl-8",attrs:{src:"/img/home/data-gouv-fr.png"}})]),t._v(" "),e("h1",{staticClass:"text-center",attrs:{id:"more"}},[t._v("For anyone who works with data"),e("br"),e("small",[t._v("Especially diverse data and/or across tools or teams")])]),t._v(" "),e("div",{staticClass:"features text-center"},[e("div",{staticClass:"feature"},[e("img",{attrs:{src:"/img/home/for-researchers.svg"}}),t._v(" "),e("h2",[t._v("Researchers")]),t._v(" "),e("p",[t._v("Easily create reproducible research")])]),t._v(" "),e("div",{staticClass:"feature"},[e("img",{attrs:{src:"/img/home/for-data-scientists.svg"}}),t._v(" "),e("h2",[t._v("Data Scientists")]),t._v(" "),e("p",[t._v("Create pipelines without effort")])]),t._v(" "),e("div",{staticClass:"feature"},[e("img",{attrs:{src:"/img/home/for-data-engineers.svg",height:"223.375"}}),t._v(" "),e("h2",[t._v("Data Engineers")]),t._v(" "),e("p",[t._v("Standardize data platforms")])])]),t._v(" "),e("h1",{staticClass:"text-center pt-6 pb-6"},[t._v("Data Integration and Management")]),t._v(" "),e("h3",{attrs:{id:"what-is-data-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-data-integration"}},[t._v("#")]),t._v(" What is data integration")]),t._v(" "),e("p",[t._v("Data integration (aka what ETL became) is the job of bringing diverse (and often dirty) data together, cleaning it up, knitting it together and pushing this into downstream applications, analytics or warehouses – and doing this reliably, repeatedly and automatedly. Data integration subsumes activities like scraping, cleaning, transformation etc.")]),t._v(" "),e("h3",{attrs:{id:"what-is-data-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-data-management"}},[t._v("#")]),t._v(" What is data management")]),t._v(" "),e("p",[t._v("With the data explosion it has become a job in itself to manage data assets – locate, track, curate, store and share them.")]),t._v(" "),e("h3",{attrs:{id:"these-overlap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#these-overlap"}},[t._v("#")]),t._v(" These overlap")]),t._v(" "),e("p",[t._v("For example, data integration work will require a way to reliably discover internal and external data assets.")]),t._v(" "),e("p",[t._v("Conversely, data management often requires some data cleaning (integration)")]),t._v(" "),e("h3",{attrs:{id:"and-they-share-a-common-set-of-“jobs-to-be-done”-“steps-on-the-data-journey”"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#and-they-share-a-common-set-of-“jobs-to-be-done”-“steps-on-the-data-journey”"}},[t._v("#")]),t._v(" And they share a common set of “jobs to be done” / “steps on the data journey”")]),t._v(" "),e("ul",[e("li",[t._v("Sourcing data")]),t._v(" "),e("li",[t._v("Transform data")]),t._v(" "),e("li",[t._v("Pushing and storing data")])]),t._v(" "),e("h1",{staticClass:"text-center pt-6"},[t._v("Some of Our Tooling")]),t._v(" "),e("div",{staticClass:"container flex flex-row py-12"},[e("div",{staticClass:"w-1/4 text-center mx-auto"},[e("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/data-package-icon-2.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("Data Package")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("Simple container format to describe and package data.")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"/products/data-package/"}},[t._v("Read more »")])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center pl-8"},[e("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/goodtables-icon.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("GoodTables")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("Validate data on every change so you catch errors before your users.")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"/products/goodtables/"}},[t._v("Read more »")])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center pl-8"},[e("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/datahub-icon.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("DataHub")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("Publish and find data on the next generation data platform.")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"/products/datahub/"}},[t._v("Read more »")])]),t._v(" "),e("div",{staticClass:"w-1/4 mx-auto text-center pl-8"},[e("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/dataflows-icon.svg"}}),t._v(" "),e("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("DataFlows")]),t._v(" "),e("p",{staticClass:"text-lg font-light pt-4"},[t._v("A light intuitive framework for building data processing flows.")]),t._v(" "),e("a",{staticClass:"links-github",attrs:{href:"/products/data-package-pipelines/"}},[t._v("Read more »")])])])])}),[],!1,null,null,null);n.default=f.exports},35:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},36:function(t,n,e){var r=e(56);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},37:function(t,n,e){var r=e(36),o=e(41),a=e(27),i=e(23),s=e(66);t.exports=function(t,n){var e=1==t,c=2==t,u=3==t,f=4==t,l=6==t,p=5==t||l,v=n||s;return function(n,s,d){for(var h,g,m=a(n),y=o(m),x=r(s,d,3),_=i(y.length),b=0,w=e?v(n,_):c?v(n,0):void 0;_>b;b++)if((p||b in y)&&(g=x(h=y[b],b,m),t))if(e)w[b]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:w.push(h)}else if(f)return!1;return l?-1:u||f?f:w}}},38:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},40:function(t,n,e){var r=e(41),o=e(19);t.exports=function(t){return r(o(t))}},41:function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},42:function(t,n,e){"use strict";var r=e(14),o=e(37)(1);r(r.P+r.F*!e(29)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},43:function(t,n,e){var r=e(59),o=e(101),a=e(102),i=Object.defineProperty;n.f=e(31)?Object.defineProperty:function(t,n,e){if(r(t),n=a(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},44:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},45:function(t,n,e){var r=e(15)("unscopables"),o=Array.prototype;null==o[r]&&e(21)(o,r,{}),t.exports=function(t){o[r][t]=!0}},46:function(t,n,e){var r=e(40),o=e(23),a=e(47);t.exports=function(t){return function(n,e,i){var s,c=r(n),u=o(c.length),f=a(i,u);if(t&&e!=e){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},47:function(t,n,e){var r=e(24),o=Math.max,a=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):a(t,n)}},49:function(t,n,e){var r=e(43),o=e(71);t.exports=e(31)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},50:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},51:function(t,n){t.exports=!1},53:function(t,n,e){t.exports=!e(22)&&!e(18)((function(){return 7!=Object.defineProperty(e(54)("div"),"a",{get:function(){return 7}}).a}))},54:function(t,n,e){var r=e(17),o=e(16).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},55:function(t,n,e){var r=e(17);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},56:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},57:function(t,n,e){var r=e(25);t.exports=Array.isArray||function(t){return"Array"==r(t)}},58:function(t,n,e){var r=e(38),o=e(30),a=e(78),i=e(49),s=e(60),c=function(t,n,e){var u,f,l,p=t&c.F,v=t&c.G,d=t&c.S,h=t&c.P,g=t&c.B,m=t&c.W,y=v?o:o[n]||(o[n]={}),x=y.prototype,_=v?r:d?r[n]:(r[n]||{}).prototype;for(u in v&&(e=n),e)(f=!p&&_&&void 0!==_[u])&&s(y,u)||(l=f?_[u]:e[u],y[u]=v&&"function"!=typeof _[u]?e[u]:g&&f?a(l,r):m&&_[u]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?a(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[u]=l,t&c.R&&x&&!x[u]&&i(x,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},59:function(t,n,e){var r=e(50);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},60:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},65:function(t,n,e){t.exports=e(32)("native-function-to-string",Function.toString)},66:function(t,n,e){var r=e(67);t.exports=function(t,n){return new(r(t))(n)}},67:function(t,n,e){var r=e(17),o=e(57),a=e(15)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[a])&&(n=void 0)),void 0===n?Array:n}},68:function(t,n,e){var r=e(17),o=e(25),a=e(15)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==o(t))}},70:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},71:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},76:function(t,n,e){"use strict";var r=e(14),o=e(46)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(45)("includes")},77:function(t,n,e){"use strict";var r=e(14),o=e(91);r(r.P+r.F*e(92)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},78:function(t,n,e){var r=e(100);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},79:function(t,n,e){var r=e(50),o=e(38).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},91:function(t,n,e){var r=e(68),o=e(19);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},92:function(t,n,e){var r=e(15)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},93:function(t,n,e){var r=e(14);r(r.P,"Array",{fill:e(94)}),e(45)("fill")},94:function(t,n,e){"use strict";var r=e(27),o=e(47),a=e(23);t.exports=function(t){for(var n=r(this),e=a(n.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,e),c=i>2?arguments[2]:void 0,u=void 0===c?e:o(c,e);u>s;)n[s++]=t;return n}},95:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},96:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(97),o=e.n(r);function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function i(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}},97:function(t,n,e){t.exports=e(98)},98:function(t,n,e){e(99);var r=e(30).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},99:function(t,n,e){var r=e(58);r(r.S+r.F*!e(31),"Object",{defineProperty:e(43).f})}}]);