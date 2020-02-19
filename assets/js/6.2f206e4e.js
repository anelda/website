(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(t,e,a){},104:function(t,e,a){},159:function(t,e,a){"use strict";var n=a(88);a.n(n).a},160:function(t,e,a){"use strict";var n=a(89);a.n(n).a},164:function(t,e,a){"use strict";var n=a(90);a.n(n).a},165:function(t,e,a){"use strict";var n=a(103);a.n(n).a},166:function(t,e,a){"use strict";var n=a(104);a.n(n).a},293:function(t,e,a){"use strict";a.r(e);a(72);var n={components:{NavLink:a(127).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(159),a(0)),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner hero-section"},[a("div",{staticClass:"banner"},[a("main",{staticClass:"container relative mx-auto"},[a("header",{staticClass:"hero flex flex-row items-center"},[a("div",{staticClass:"container pt-32 pb-16 pl-6"},["null"!==t.data.heroText?a("h1",{staticClass:"text-5xl pb-2 text-white font-medium pt-"},[t._v(" "+t._s(t.data.heroText||"Frictionless Data")+" ")]):t._e(),t._v(" "),a("p",{staticClass:"description pb-6 text-white text-2xl"},[t._v("\n            "+t._s(t.$page.frontmatter.tagline||t.$description||"Welcome to Frictionless Data")+"\n          ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"container"})]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),a("div",{staticClass:"banner"},[a("Content",{staticClass:"theme-default-content custom"})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container inline"},[e("button",{staticClass:"w-48 rounded-full button-hero h-16 font-medium text-xl shadow-lg"},[this._v("Learn more")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container pl-4 inline"},[e("button",{staticClass:"w-48 rounded-full button-hero2 h-16 font-medium text-xl shadow-lg"},[this._v("Get started")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner pl-6 pr-12"},[e("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-row flex-wrap"},[a("div",{staticClass:"w-1/3"},[a("div",{staticClass:"pt-20 text-left p-6"},[a("h1",{staticClass:"text-2xl font-normal text-white"},[t._v("Approachable")]),t._v(" "),a("p",{staticClass:"text-xl text-white font-light pb-12"},[t._v("We keep things as simple as possible. Read the guide and start using and building  in no time!")])])]),t._v(" "),a("div",{staticClass:"w-1/3"},[a("div",{staticClass:"pt-20 text-left p-6"},[a("h1",{staticClass:"text-2xl font-normal text-white"},[t._v("Versatile")]),t._v(" "),a("p",{staticClass:"text-xl text-white font-light pb-12"},[t._v("An incrementally adoptable ecosystem that scales between a library and a full-featured framework and which works whether you are wrangling an Excel file or working with Terabytes.\n              ")])])]),t._v(" "),a("div",{staticClass:"w-1/3"},[a("div",{staticClass:"pt-20 text-left p-6"},[a("h1",{staticClass:"text-2xl font-normal text-white"},[t._v("Progressive")]),t._v(" "),a("p",{staticClass:"text-xl text-white font-light pb-12"},[t._v("We work with your existing tooling and data, enhancing and adding to it. – not replacing it!")])])])])}],!1,null,null,null).exports,r={computed:{data:function(){return this.$page.frontmatter}}},o=(a(160),Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"theme-default-content"},[a("header",{staticClass:"hero"},[a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title||"Product ..."))]),t._v(" "),t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"}):t._e()]),t._v(" "),a("Content")],1)])}),[],!1,null,null,null).exports),l=(a(75),a(131),a(132),a(83),a(161),a(42),a(162),a(69),/#.*$/),c=/\.(md|html)$/,u=/\/$/,d=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function h(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function p(t){return decodeURI(t).replace(l,"").replace(c,"")}function f(t){return d.test(t)}function v(t){if(f(t))return t;var e=t.match(l),a=e?e[0]:"",n=p(t);return u.test(n)?t:n+".html"+a}function m(t,e,a){if(f(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var n=p(e),i=0;i<t.length;i++)if(p(t[i].regularPath)===n)return Object.assign({},t[i],{type:"page",path:v(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t,e,a,n){var i=a.pages,s=a.themeConfig,r=n&&s.locales&&s.locales[n]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return m(a,e,n);if(Array.isArray(e))return Object.assign(m(a,e[0],n),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(m(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,a,n,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}var b=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"w-4 h-4 inline text-lg",attrs:{src:"https://image.flaticon.com/icons/png/512/94/94699.png"}}),t._v(" "),t._l(t.$page.frontmatter.tags,(function(e){return a("router-link",{key:e,staticClass:"pl-2",attrs:{to:{path:""}}},[t._v("\n    "+t._s(e)+"\n  ")])}))],2)}),[],!1,null,null,null).exports,_={components:{TagLinks:b},methods:{formatDate:h}},x=(a(164),Object(i.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"blog-home",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"pb-6"},[t._v("Frictionless Blog")]),t._v(" "),a("ul",{staticClass:"flex flex-col"},t._l(t.$pagination.pages,(function(e){return a("li",{},[a("div",{staticClass:"container shadow-md pl-6 pt-6 flex flex-row pb-6"},[a("div",{staticClass:"container flex flex-col w-2/3"},[a("router-link",{staticClass:"text-2xl page-link pr-12",attrs:{to:e.path}},[t._v(t._s(e.title)+"\n          ")]),t._v(" "),a("div",{staticClass:"container pt-2"},[a("p",{staticClass:"text-sm italic inline"},[t._v(" "+t._s(t.formatDate(e.frontmatter.date))+" by "+t._s(e.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),a("TagLinks",{staticClass:"inline pl-4"})],1),t._v(" "),e.frontmatter.summary?a("p",{staticClass:"pt-2 text-xl mr-12"},[t._v(" "+t._s(e.frontmatter.summary)+" ")]):e.frontmatter.summary?t._e():a("p",{staticClass:"pt-2 text-xl mr-12",domProps:{innerHTML:t._s(e.excerpt)}})],1),t._v(" "),a("div",{staticClass:"container pl-6 w-1/3 pt-2"},[a("img",{staticClass:"w-56 shadow-md",attrs:{src:e.frontmatter.image||e.frontmatter.heroImage||"https://i.ytimg.com/vi/lWHKVXxuci0/maxresdefault.jpg"}})])]),t._v(" "),a("hr")])})),0),t._v(" "),a("div",{attrs:{id:"pagination"}},[t.$pagination.hasPrev?a("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?a("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1),t._v(" "),a("br"),a("br")])])}),[],!1,null,"a3f32a58",null).exports),C={components:{TagLinks:b},methods:{formatDate:h}},y=Object(i.a)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"theme-default-content"},[a("header",[a("h1",{staticClass:"text-3xl pt-6"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),a("p",{staticClass:"text-xl pb-6"},[t._v(t._s(t.$page.frontmatter.summary)+" ")]),t._v(" "),a("time",{staticClass:"italic"},[t._v(" "+t._s(t.formatDate(t.$page.frontmatter.date))+" by "+t._s(t.$page.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),a("TagLinks",{staticClass:"pt-4 text-blue-500 pb-6"})],1),t._v(" "),a("Content"),t._v(" "),t._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("a",{attrs:{href:"/blog/"}},[this._v(" < Go back")])])}],!1,null,null,null).exports,w=(a(76),a(77),a(93),a(95)),$=a(96),k=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],j=function(){function t(e){Object(w.a)(this,t),this.shape=[8,3],this.domNode=e}return Object($.a)(t,[{key:"configure",value:function(){var t=this,e=Honeycomb.extendHex({size:61,orientation:"flat",currentIndex:function(){var e=this.toPoint(),a=t.gridType.pointToHex([e.x,e.y]);return a.x+1+(a.y+1)*t.shape[0]},render:function(e){var a=this.toPoint(),n=a.x,i=a.y,s=this.toPoint(),r=this.center().add(s),o=(t.gridType.pointToHex([s.x,s.y]),this.corners()),l=this.currentIndex(),c={width:1,color:"#999"};""===k[l][0]&&(c={}),this.draw=e.polygon(o.map((function(t){var e=t.x,a=t.y;return"".concat(e,",").concat(a)}))).fill("none").stroke(c).translate(n,i);var u=k[l][0],d=u.includes("\n")?r.y-26:r.y-13;e.text(u).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(r.x,d)},openAnchor:function(){var t=this.currentIndex();""!==k[t][0]&&window.open(k[t][1])},highlight:function(){var t=this.currentIndex();""!==k[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(e)}},{key:"setup",value:function(){var t=this.shape;this.configure();var e=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(e)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(e){var a=e.offsetX,n=e.offsetY,i=t.gridType.pointToHex([a,n]),s=t.gridInstance.get(i);s&&s.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(e){var a=e.offsetX,n=e.offsetY,i=t.gridType.pointToHex([a,n]),s=t.gridInstance.get(i);s&&s.openAnchor()}))}}]),t}(),S={mounted:function(){var t=new j(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},D=(a(165),{components:{JobsDiagramSmall:Object(i.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"a5ca1272",null).exports},computed:{data:function(){return this.$page.frontmatter}}}),P=(a(166),Object(i.a)(D,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"theme-default-content"},[a("header",{staticClass:"hero"},[a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline))])]),t._v(" "),a("JobsDiagramSmall",{staticClass:"pt-12"}),t._v(" "),a("p",[t._v(t._s(t.data.description))]),t._v(" "),a("h2",[t._v("Context")]),t._v(" "),a("p",[t._v(t._s(t.data.context))]),t._v(" "),a("p",[t._v(t._s(t.data.pain))]),t._v(" "),a("Content")],1)])}),[],!1,null,null,null).exports),T=a(290),E=a(289),I=a(291),O={components:{Home:s,Product:o,BlogIndex:x,BlogPost:y,Job:P,Page:E.a,Sidebar:I.a,Navbar:T.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!("home"==t.layout)&&!this.isBlogIndexPage&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return g(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass,e=this.$page.frontmatter.layout;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},e,t]},isBlogIndexPage:function(){return!(!this.$page.frontmatter.title||!this.$page.frontmatter.title.match(/(?:Page \d+ \| )?Blog/))}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},L=Object(i.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),"home"===t.$page.frontmatter.layout?a("Home"):"product"===t.$page.frontmatter.layout?a("Product"):t.isBlogIndexPage?a("BlogIndex"):"Post"===t.$page.frontmatter.layout?a("BlogPost"):"job"===t.$page.frontmatter.layout?a("Job"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=L.exports},88:function(t,e,a){},89:function(t,e,a){},90:function(t,e,a){}}]);