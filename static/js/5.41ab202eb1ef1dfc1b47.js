webpackJsonp([5],{S2NW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),n=s.n(r),a=s("NYxO"),i={name:"register",data:function(){return{username:"",password:""}},methods:n()({onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}},Object(a.b)(["register"]))},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"register"}},[s("h4",[e._v("用户名")]),e._v(" "),s("el-input",{attrs:{placeholder:"用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),s("h4",[e._v("密码")]),e._v(" "),s("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),s("p",{staticClass:"notice"},[e._v("\n    已有账号？ "),s("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},staticRenderFns:[]};var u=s("VU/8")(i,o,!1,function(e){s("dGqf")},"data-v-700fa22d",null);t.default=u.exports},dGqf:function(e,t){}});
//# sourceMappingURL=5.41ab202eb1ef1dfc1b47.js.map