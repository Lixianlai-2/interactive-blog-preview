webpackJsonp([0],{"0tIY":function(t,e){},eerB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),r={name:"index",data:function(){return{blogs:[],currentPage:1,totalArticle:0}},created:function(){var t=this;this.currentPage=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.currentPage}).then(function(e){t.blogs=e.data,t.totalArticle=e.total,t.currentPage=e.page})},methods:{onPageChange:function(t){var e=this;n.a.getIndexBlogs({page:t}).then(function(a){e.blogs=a.data,e.totalArticle=a.total,e.currentPage=a.page,e.$router.push({path:"/",query:{page:t}})}).then(function(){!function t(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(t),window.scrollTo(0,e-e/8))}()})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username,border:"0"}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v("\n        "+t._s(e.title)+" "),a("span",[t._v(t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("div",{staticClass:"pContainer"},[a("p",[t._v("\n          "+t._s(e.description)+"\n        ")])])])}),1),t._v(" "),a("section",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.totalArticle,"current-page":t.currentPage},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("0tIY")},"data-v-1a03cd92",null);e.default=o.exports}});
//# sourceMappingURL=0.88ed89fb3bdb49085f72.js.map