(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e45f98b0"],{"199e":function(t,e,a){"use strict";a("7925")},"21aa":function(t,e,a){},"21b1":function(t,e,a){"use strict";a("a5bb")},"39d3":function(t,e,a){"use strict";a("21aa")},6599:function(t,e,a){"use strict";a("a434"),a("b64b"),a("d3b7");var s,n=a("ade3"),i=a("56c6");e["a"]=(s={GetProdList:function(t,e,a){var s=i["a"].GetQuery("Product");return t&&Object.keys(t).length&&(t.id&&s.equalTo("objectId","==",t.id),t.productName&&s.equalTo("productName","==",t.productName),t.dataFrom&&s.equalTo("dataFrom","==",parseInt(t.dataFrom))),new Promise((function(t,n){i["a"].GetListData(s,e,a).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))},AddProduct:function(t){return new Promise((function(e,a){i["a"].AddOne("Product",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))},EditProduct:function(t,e){return new Promise((function(a,s){i["a"].EditOne("Product",e,t).then((function(t){return a(t)})).catch((function(t){return s(t)}))}))},DeleteProd:function(t){return new Promise((function(e,a){i["a"].DelMore("Product",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))},GetProdInfo:function(t){return new Promise((function(e,a){i["a"].GetOne("Product",t).then((function(t){return e(t)})).catch((function(t){return a(t)}))}))}},Object(n["a"])(s,"EditProduct",(function(t,e){return new Promise((function(a,s){i["a"].EditOne("Product",e,t).then((function(t){return a(t)})).catch((function(t){return s(t)}))}))})),Object(n["a"])(s,"GetCaseList",(function(t){return new Promise((function(e,a){i["a"].GetOne("Product",t).then((function(t){return e({code:200,data:t.data.caseList})})).catch((function(t){return a(t)}))}))})),Object(n["a"])(s,"AddCase",(function(t,e){var a=i["a"].GetQuery("Product");return new Promise((function(s,n){a.get(e).then((function(e){var a=e.caseList?e.caseList:[];a.push(t),e.set("caseList",a),e.save().then((function(){return s({code:200,msg:"操作成功！"})})).catch((function(t){return n(t)}))})).catch((function(){return s({code:404,msg:"对象不存在！"})}))}))})),Object(n["a"])(s,"EditCase",(function(t,e,a){var s=i["a"].GetQuery("Product");return new Promise((function(n,i){s.get(e).then((function(e){var s=e.caseList?e.caseList:[];s.splice(a,1,t),e.set("caseList",s),e.save().then((function(){return n({code:200,msg:"操作成功！"})})).catch((function(t){return i(t)}))})).catch((function(){return n({code:404,msg:"对象不存在！"})}))}))})),Object(n["a"])(s,"DelCase",(function(t,e){var a=i["a"].GetQuery("Product");return new Promise((function(s,n){a.get(t).then((function(t){var a=t.caseList?t.caseList:[];a.splice(e,1),t.set("caseList",a),t.save().then((function(){return s({code:200,msg:"操作成功！"})})).catch((function(t){return n(t)}))})).catch((function(){return s({code:404,msg:"对象不存在！"})}))}))})),s)},7457:function(t,e,a){"use strict";a("da50")},7925:function(t,e,a){},a5bb:function(t,e,a){},a6c3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-Upload",attrs:{id:"singleImage"}},[""!=t.getImageUrl?a("div",{staticClass:"upload-show"},[a("div",{staticClass:"upload-img-wrap"},[a("img",{staticClass:"upload-image",attrs:{src:t.getImageUrl,alt:"图片加载失败"},on:{error:t.notFoundPic}})]),a("div",{staticClass:"upload-mask"},[t.preview?a("Icon",{staticClass:"g-mr10",attrs:{type:"md-eye"},nativeOn:{click:function(e){return t.viewImage(e)}}}):t._e(),a("Icon",{attrs:{type:"md-create"},nativeOn:{click:function(e){return t.uploadClick(e)}}})],1)]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showUploadBtn,expression:"showUploadBtn"}],staticClass:"upload-btn",on:{click:t.uploadClick}},[a("Icon",{attrs:{type:"md-camera",size:"20"}}),a("input",{ref:"imgFile",attrs:{type:"file",accept:t.format,hidden:""},on:{change:t.selectFile}})],1),"finished"!=t.uploadStatus?[t.showProgress?a("Progress",{staticStyle:{width:"340px"},attrs:{percent:t.percentage,"hide-info":"","stroke-width":3}}):t._e()]:t._e(),t.showHint?a("div",{staticClass:"hint"},[t._v(" * 图片格式要求：jpg、jpeg、png，文件大小为 "),t.fileSize<1024?a("span",[t._v(t._s(t.fileSize)+"kb")]):a("span",[t._v(t._s(Math.floor(t.fileSize/1024))+"M")]),t._v(" 以内。 ")]):t._e(),a("div",{staticClass:"clearfix"}),a("Modal",{staticClass:"m-view-img",attrs:{title:"查看图片",width:"600"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("img",{attrs:{src:t.getImageUrl},on:{error:t.notFoundPic}}),a("div",{attrs:{slot:"footer"},slot:"footer"})])],2)},n=[],i=(a("b0c0"),a("a9e3"),a("ff51"),a("1b62")),o={name:"singleImage",mixins:[i["f"]],props:{src:{type:String,default:""},preview:{type:Boolean,default:!1},showHint:{type:Boolean,default:!0},sizeHint:{type:String,default:"100*100px"},fileSize:{type:Number,default:150},index:{type:Number,default:-1}},watch:{src:function(t){this.showUploadBtn=!t,this.getImageUrl=t}},data:function(){return{getImageUrl:this.src,showUploadBtn:!this.src}},methods:{uploadFile:function(t){var e=this;this.progressShow();var a=Bmob.File(t.name,t);this.uploadToBomb(a).then((function(t){e.getImageUrl=t[0].url,e.$emit("update:src",e.getImageUrl),e.$emit("get-img-url",e.getImageUrl)})).catch((function(t){return console.log(t)}))}}},r=o,c=(a("199e"),a("2877")),u=Object(c["a"])(r,s,n,!1,null,"76d80f4a",null);e["a"]=u.exports},a9e3:function(t,e,a){"use strict";var s=a("83ab"),n=a("da84"),i=a("94ca"),o=a("6eeb"),r=a("5135"),c=a("c6b6"),u=a("7156"),d=a("c04e"),l=a("d039"),p=a("7c73"),f=a("241c").f,m=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,v="Number",b=n[v],w=b.prototype,I=c(p(w))==v,C=function(t){var e,a,s,n,i,o,r,c,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+u}for(i=u.slice(2),o=i.length,r=0;r<o;r++)if(c=i.charCodeAt(r),c<48||c>n)return NaN;return parseInt(i,s)}return+u};if(i(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var F,L=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof L&&(I?l((function(){w.valueOf.call(a)})):c(a)!=v)?u(new b(C(e)),a,L):C(e)},_=s?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;_.length>P;P++)r(b,F=_[P])&&!r(L,F)&&h(L,F,m(b,F));L.prototype=w,w.constructor=L,o(n,v,L)}},da50:function(t,e,a){},dce2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-content"},[a("Tabs",{staticClass:"m-tabs",attrs:{type:"card",animated:!1}},[a("TabPane",{attrs:{label:"基本信息"}},[a("div",{staticClass:"tabs-cont"},[a("ProductInfo",{attrs:{"product-id":t.productId}})],1)]),a("TabPane",{attrs:{label:"案例展示"}},[a("div",{staticClass:"tabs-cont"},[a("CaseList",{attrs:{"product-id":t.productId}})],1)])],1),a("Button",{staticClass:"u-btn-goback fr",attrs:{type:"default"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-product-info"},[t.pageLoading?a("Loading"):a("div",[a("Form",{ref:"infoForm",attrs:{model:t.infoForm,rules:t.validate,"label-width":100}},[a("Form-item",{attrs:{label:"产品名称：",prop:"productName"}},[a("Input",{attrs:{placeholder:"请输入产品名称"},model:{value:t.infoForm.productName,callback:function(e){t.$set(t.infoForm,"productName",e)},expression:"infoForm.productName"}})],1),a("Form-item",{attrs:{label:"产品说明：",prop:"productDesc"}},[a("Tinymce",{attrs:{height:"500"},model:{value:t.infoForm.productDesc,callback:function(e){t.$set(t.infoForm,"productDesc",e)},expression:"infoForm.productDesc"}})],1),a("div",{staticClass:"m-operation"},[a("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(e){return t.edit("infoForm")}}},[t._v("确认修改")]),a("div",{staticClass:"clearfix"})],1)],1)],1)],1)},o=[],r=a("be51"),c=a("557c"),u=a("6599"),d={components:{Loading:r["a"],Tinymce:c["a"]},props:{productId:{type:String,default:""}},data:function(){return{pageLoading:!1,infoForm:{productName:"",productDesc:""},validate:{productName:[{required:!0,message:"产品名称不能为空",trigger:"blur"}]}}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.pageLoading=!0,u["a"].GetProdInfo(this.productId).then((function(e){t.pageLoading=!1;var a=e.data;200==e.code?t.infoForm=a:t.$Message.warning(e.msg)})).catch((function(t){return console.log(t)}))},edit:function(t){var e=this;this.$refs[t].validate((function(t){t?(e.pageLoading=!0,u["a"].EditProduct(e.infoForm,e.productId).then((function(t){e.pageLoading=!1,200==t.code?(e.$Message.success("信息修改成功!"),e.getDetail()):e.$Message.warning(t.msg)})).catch((function(t){return console.log(t)}))):e.$Message.error("提交失败！填写有误")}))}}},l=d,p=(a("7457"),a("2877")),f=Object(p["a"])(l,i,o,!1,null,null,null),m=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-case-list"},[t.pageLoading?a("Loading"):a("div",[a("div",{staticClass:"case-pic-list"},[a("swiper",{ref:"caseList",attrs:{options:t.swiperOption}},[t._l(t.caseList,(function(e,s){return a("swiper-slide",{key:s},[a("div",{class:t.caseIndex===s?"swiper-active":"swiper-div",on:{click:function(e){return t.showThisCase(s)}}},[a("img",{attrs:{src:e.img},on:{error:t.notFoundPic}}),a("span",[t._v(t._s(e.title))])])])})),a("swiper-slide",[a("div",{staticClass:"u-add-btn",on:{click:t.addCase}},[t._v("+ 新增案例")])])],2),a("a",{staticClass:"swiper-btn-prev",on:{click:function(e){return t.swiperPrev()}}}),a("a",{staticClass:"swiper-btn-next",on:{click:function(e){return t.swiperNext()}}})],1),t.caseList.length?a("div",{staticClass:"case-cont"},[a("div",{staticClass:"case-cont-item"},[a("span",{staticClass:"item-label"},[t._v("案例标题：")]),a("span",{staticClass:"item-info"},[t._v(t._s(t.caseInfo.title))])]),a("div",{staticClass:"case-cont-item"},[a("span",{staticClass:"item-label"},[t._v("案例封面：")]),a("img",{staticClass:"item-info",attrs:{src:t.caseInfo.img},on:{error:t.notFoundPic}})]),a("div",{staticClass:"case-cont-item"},[a("span",{staticClass:"item-label"},[t._v("品牌名称：")]),a("span",{staticClass:"item-info"},[t._v(t._s(t.caseInfo.brand))])]),a("div",{staticClass:"case-cont-item"},[a("span",{staticClass:"item-label"},[t._v("更新时间：")]),a("span",{staticClass:"item-info"},[t._v(t._s(t.caseInfo.updateTime))])]),a("div",{staticClass:"m-operation"},[a("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.editCase}},[t._v("编辑")]),a("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.deleteCase}},[t._v("删除")]),a("div",{staticClass:"clearfix"})],1)]):t._e()]),a("Modal",{attrs:{width:"500"},on:{"on-cancel":function(e){return t.closeModal("paramsForm")}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("span",{domProps:{textContent:t._s(""==t.paramsForm.title?"新增版块":"编辑版块")}})]),a("div",[a("Form",{ref:"paramsForm",attrs:{model:t.paramsForm,rules:t.validate,"label-width":100}},[a("Form-item",{attrs:{label:"案例标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入案例标题"},model:{value:t.paramsForm.title,callback:function(e){t.$set(t.paramsForm,"title",e)},expression:"paramsForm.title"}})],1),a("Form-item",{attrs:{label:"案例图片：",prop:"img"}},[a("SingleImage",{attrs:{src:t.paramsForm.img,preview:!0},on:{"update:src":function(e){return t.$set(t.paramsForm,"img",e)}}})],1),a("Form-item",{attrs:{label:"品牌名称：",prop:"brand"}},[a("Input",{attrs:{placeholder:"请输入案例品牌名称"},model:{value:t.paramsForm.brand,callback:function(e){t.$set(t.paramsForm,"brand",e)},expression:"paramsForm.brand"}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{size:"large"},on:{click:function(e){return t.closeModal("paramsForm")}}},[t._v("取消")]),a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.operation("paramsForm",t.operateType)}}},[t._v("确定")])],1)])],1)},g=[],v=a("a6c3"),b=(a("ff51"),a("ed08")),w=(a("dfa4"),{components:{Loading:r["a"],SingleImage:v["a"]},props:{productId:{type:String,default:""}},computed:{swiper:function(){return this.$refs.caseList.swiper}},data:function(){return{pageLoading:!1,swiperOption:{notNextTick:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",slidesPerView:5,spaceBetween:30,freeMode:!0},caseIndex:0,caseList:[],operateType:0,showModal:!1,caseInfo:{img:"",title:"",brand:"",updateTime:""},paramsForm:{img:"",title:"",brand:"",updateTime:""},validate:{title:[{required:!0,message:"案例名称不能为空",trigger:"blur"}]}}},created:function(){this.getCaseList(this.productId)},mounted:function(){console.log("this is current swiper instance object",this.swiper)},methods:{swiperPrev:function(){this.swiper.slidePrev()},swiperNext:function(){this.swiper.slideNext()},getCaseList:function(t){var e=this;u["a"].GetCaseList(this.productId).then((function(t){if(200==t.code){t.data;void 0==t.data?e.caseList=[]:(e.caseList=t.data,e.showThisCase(e.caseIndex))}else console.log(t)})).catch((function(t){return console.log(t)}))},showThisCase:function(t){this.caseIndex=t,this.caseInfo.title=this.caseList[t].title,this.caseInfo.brand=this.caseList[t].brand,this.caseInfo.updateTime=this.caseList[t].updateTime,this.caseInfo.img=this.caseList[this.caseIndex].img},closeModal:function(t){this.showModal=!1,this.$refs[t].resetFields()},openModel:function(){this.showModal=!0},editCase:function(){this.operateType=2,this.paramsForm.title=this.caseList[this.caseIndex].title,this.paramsForm.brand=this.caseList[this.caseIndex].brand,this.paramsForm.img=this.caseList[this.caseIndex].img,this.openModel()},addCase:function(){if(this.caseList.length>=5)return this.$Message.warning("最多只能添加5个案例！"),!1;this.operateType=1,this.paramsForm.title="",this.paramsForm.brand="",this.paramsForm.img="",this.openModel()},deleteCase:function(){var t=this;this.$Modal.confirm({okText:"确认",render:function(t){return t("p",{},"是否确认删除？")},onOk:function(){var e=t.caseList.length-1;u["a"].DelCase(t.productId,t.caseIndex).then((function(a){200==a.code?(t.caseIndex==e&&t.caseIndex--,t.$Message.success("删除成功!"),t.getCaseList(t.productId)):console.log(a)})).catch((function(t){return console.log(t)}))}})},operation:function(t,e){var a=this;this.$refs[t].validate((function(s){s?(a.paramsForm.updateTime=Object(b["h"])(new Date),1==e?u["a"].AddCase(a.paramsForm,a.productId).then((function(e){200==e.code?(a.closeModal(t),a.$Message.success("新增成功!"),a.getCaseList(a.productId)):console.log(e)})).catch((function(t){return console.log(t)})):2==e&&u["a"].EditCase(a.paramsForm,a.productId,a.caseIndex).then((function(e){200==e.code?(a.closeModal(t),a.$Message.success("编辑成功!"),a.getCaseList(a.productId)):console.log(e)})).catch((function(t){return console.log(t)}))):a.$Message.error("提交失败！填写有误")}))},notFoundPic:function(t){Object(b["p"])(t,2)}}}),I=w,C=(a("39d3"),Object(p["a"])(I,h,g,!1,null,null,null)),F=C.exports,L={components:{ProductInfo:m,CaseList:F},data:function(){return{productId:""}},created:function(){this.$store.commit("SET_BREADCRUMB",[{name:"首页",path:"/Home"},{name:"产品列表",path:"/Examples/ProductManage/List"},{name:"产品详情",path:""}]),this.productId=Object(b["k"])("id")},methods:{}},_=L,P=(a("21b1"),Object(p["a"])(_,s,n,!1,null,"20e19774",null));e["default"]=P.exports},dfa4:function(t,e,a){}}]);