(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1),n("router-view")],1)},o=[],i={beforeCreate:function(){this.$store.dispatch("site/loadSite")}},s=i,c=(n("7faf"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("page-loader",{attrs:{id:e.id}})],1)},f=[],m=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-loader"},[e._t("loading",[e.page?e._e():n("div",[e._v("Loading...")])],{page:e.page}),e._t("default",[e.page?n("div",{domProps:{innerHTML:e._s(e.page.content.text)}}):e._e()],{page:e.page})],2)}),g=[],v=n("cebc"),h=n("2f62"),b={name:"page",props:{id:{type:String,required:!0}},computed:Object(v["a"])({},Object(h["b"])("pages",["getPage"]),{page:function(){return this.getPage(this.id)}}),created:function(){this.loadPage()},updated:function(){this.loadPage()},methods:{loadPage:function(){this.page||this.$store.dispatch("pages/loadPage",{id:this.id})}}},y=b,_=Object(c["a"])(y,m,g,!1,null,null,null),w=_.exports,j={name:"page",components:{PageLoader:w},computed:{id:function(){return this.$route.params.pathMatch.replace(/^\/+/,"").toLowerCase()}}},x=j,P=Object(c["a"])(x,d,f,!1,null,null,null),O=P.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("page-loader",{attrs:{id:e.id}})],1)},k=[],$={name:"home",components:{PageLoader:w},computed:{id:function(){return"home"}}},E=$,C=Object(c["a"])(E,S,k,!1,null,null,null),L=C.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("page-loader",{attrs:{id:e.id},scopedSlots:e._u([{key:"loading",fn:function(t){var a=t.page;return[a?e._e():n("div",[e._v("Loading projects...")])]}},{key:"default",fn:function(t){var a=t.page;return[a?[n("h1",[e._v(e._s(a.title))]),n("ul",e._l(a.children,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t.id}},[e._v(e._s(t.title))])],1)}),0)]:e._e()]}}])})],1)},M=[],T={name:"home",components:{PageLoader:w},computed:{id:function(){return"projects"}}},N=T,J=Object(c["a"])(N,R,M,!1,null,null,null),H=J.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-new"},[n("form",{attrs:{method:"patch",actions:"/rest/pages/projects/children"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("p",[n("label",[e._v("\n        Title\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.title,expression:"payload.content.title"}],attrs:{type:"text",name:"title"},domProps:{value:e.payload.content.title},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"title",t.target.value)}}})])]),n("p",[n("label",[e._v("\n        Slug\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.slug,expression:"payload.slug"}],attrs:{type:"text",name:"slug"},domProps:{value:e.payload.slug},on:{input:function(t){t.target.composing||e.$set(e.payload,"slug",t.target.value)}}})])]),n("p",[n("label",[e._v("\n        Intro\n        "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.intro,expression:"payload.content.intro"}],attrs:{name:"intro"},domProps:{value:e.payload.content.intro},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"intro",t.target.value)}}})])]),n("p",[n("label",[e._v("\n        Text\n        "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.text,expression:"payload.content.text"}],attrs:{name:"text"},domProps:{value:e.payload.content.text},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"text",t.target.value)}}})])]),n("input",{attrs:{type:"submit",value:"save"}}),e.error?n("div",{staticStyle:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e.success?n("div",{staticStyle:{color:"green"}},[e._v(e._s(e.success))]):e._e()])])},z=[],A=(n("96cf"),n("3b8d")),D=n("d225"),I=n("b0b4"),K=n("bc3a"),U=n.n(K),B=function(){function e(){Object(D["a"])(this,e);var t="api@email.mhgbrown.is",n="se44lifE";if(!t||!n)throw new Error("KirbyClient authorization values are missing! email: ".concat(t," password: ").concat(n));this.http=U.a.create({baseURL:"/rest",auth:{username:t,password:n},transformResponse:function(e){var t=JSON.parse(e);if("error"===t.status)throw new Error(t.message);return t.data}})}return Object(I["a"])(e,[{key:"getPath",value:function(e){return this.http.get(e)}},{key:"getSite",value:function(){return this.getPath("/site")}}]),e}(),F=new B,G={name:"new-project",data:function(){return{error:"",success:"",payload:{template:"project",slug:"",content:{title:"",intro:"",text:""}}}},methods:{onSubmit:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.error="",e.prev=2,e.next=5,F.http.post("/pages/projects/children",this.payload);case 5:this.success="Page created successfully!",e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[2,8]])}));function t(){return e.apply(this,arguments)}return t}()}},Q=G,V=Object(c["a"])(Q,q,z,!1,null,null,null),W=V.exports;a["a"].use(p["a"]);var X=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L},{path:"/projects",name:"projects",component:H},{path:"/projects/new",name:"new-project",component:W},{path:"*",name:"page",component:O}]}),Y=(n("ac6a"),n("5df3"),{}),Z={},ee={loadSite:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){var n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Promise.all([F.getSite(),F.getPath("/site/children")]);case 3:a=e.sent,r=a[0].data,r.children=a[1].data,n("setSite",{site:r});case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},te={setSite:function(e,t){var n=t.site;Object.assign(e,n)}},ne={namespaced:!0,state:Y,getters:Z,actions:ee,mutations:te},ae=(n("7514"),{all:[]}),re={getPage:function(e){return function(t){return e.all.find(function(e){return e.id===t})}}},oe={loadPage:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=n.id,o=r.replace(/^\/+/,"").replace(/\/([^\/]*)$/,"+$1"),e.next=5,Promise.all([F.getPath("/pages/".concat(o)),F.getPath("/pages/".concat(o,"/children"))]);case 5:i=e.sent,s=i[0].data,s.children=i[1].data,a("addPage",{page:s});case 9:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},ie={addPage:function(e,t){var n=t.page;e.all.push(n)}},se={namespaced:!0,state:ae,getters:re,actions:oe,mutations:ie},ce=n("b054"),ue=n.n(ce);a["a"].use(h["a"]);var le=!1,pe=new h["a"].Store({modules:{site:ne,pages:se},strict:le,plugins:le?[ue()()]:[]});a["a"].config.productionTip=!1,new a["a"]({router:X,store:pe,render:function(e){return e(l)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var a=n("8fba"),r=n.n(a);r.a},"8fba":function(e,t,n){}});
//# sourceMappingURL=app.73caf192.js.map