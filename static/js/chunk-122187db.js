(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-122187db"],{"2a0bc":function(e,t,r){e.exports=r.p+"static/img/logo-green.png"},"5f03":function(e,t,r){},"8da2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-login",attrs:{id:"login"}},[r("Form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.validate}},[r("h3",{staticClass:"form-title"},[r("img",{attrs:{src:e.logo}})]),r("Form-item",{attrs:{prop:"username"}},[r("Input",{attrs:{prefix:"md-person",placeholder:"请输入手机号码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit("loginForm")}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),r("Form-item",{attrs:{prop:"password"}},[r("Input",{attrs:{prefix:"md-key",type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit("loginForm")}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),r("Form-item",[r("Checkbox",{model:{value:e.remeberPwd,callback:function(t){e.remeberPwd=t},expression:"remeberPwd"}},[e._v("记住密码")])],1),r("Form-item",[r("Button",{attrs:{type:"primary",long:"",loading:e.loading},on:{click:function(t){return e.submit("loginForm")}}},[e._v("登录")])],1),r("div",{staticStyle:{"text-align":"center"}},[e._v("普通用户登录账号: 18888888888 密码: 666666")]),r("div",{staticStyle:{"text-align":"center"}},[e._v("管理员登录账号: 13543501039 密码: 123456")]),r("div",{staticStyle:{"text-align":"center"}},[e._v("超级管理员登录账号: 18376686974 密码: 123456")])],1)],1)},o=[],i=r("ed08"),s=r("7ded"),a={data:function(){return{loading:!1,logo:r("2a0bc"),loginForm:{username:"",password:""},remeberPwd:!1,validate:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空",trigger:"blur"}]}}},created:function(){Object(i["i"])("username")&&(this.loginForm.username=Object(i["i"])("username"),this.loginForm.password=Object(i["d"])(Object(i["i"])("password")),this.remeberPwd=!0)},mounted:function(){var e=document.getElementById("login");e.style.height=document.body.scrollHeight+"px",window.onresize=function(){e.style.height=document.body.scrollHeight+"px"}},methods:{submit:function(e){var t=this;this.$refs[e].validate((function(e){e?s["a"].Login(t.loginForm).then((function(e){if(200==e.code){var r=e.data;Object(i["n"])("xl_admin_t",r.token),t.$store.commit("SET_USER_TOKEN",r.token),t.remeberPwd&&(Object(i["p"])("username",t.loginForm.username),Object(i["p"])("password",Object(i["f"])(t.loginForm.password))),t.$Message.success("登录成功!"),t.$router.push({name:"Main"})}else t.$Message.error("登录失败!用户名或密码不正确！")})).catch((function(e){return t.$Message.error("登录失败!用户名或密码不正确！")})):t.$Message.error("登录失败!填写有误！")}))}}},l=a,m=(r("af25"),r("2877")),c=Object(m["a"])(l,n,o,!1,null,"0e944df6",null);t["default"]=c.exports},af25:function(e,t,r){"use strict";var n=r("5f03"),o=r.n(n);o.a}}]);