webpackJsonp([4],{0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"0QgP":function(t,e){},"4kLZ":function(t,e,n){t.exports=n.p+"static/img/c4bd07c5f2e537a97202dc347d025c5c.6232c06.jpg"},AOhu:function(t,e){},FCw4:function(t,e,n){"use strict";var o={name:"websiteHeader",props:{currentIndex:{type:[Number,String],default:0}},data:function(){return{navList:[{id:1,name:"home",title:"首页",url:"/"},{id:2,name:"iview",title:"iview",url:"/iview"},{id:3,name:"example",title:"实例",url:"/example"},{id:4,name:"about",title:"关于",url:"/about"}]}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"websiteHeader"}},[n("ul",{staticClass:"nav"},t._l(t.navList,function(e,o){return n("li",{key:e.id,staticClass:"nav-item"},[n("router-link",{staticClass:"nav-item-link",class:{active:t.currentIndex==o},attrs:{name:e.name,to:e.url}},[t._v(t._s(e.title))])],1)}))])},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("AOhu")},"data-v-357a233d",null);e.a=a.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("5K15"),a=n.n(s),i=n("BTaQ"),r=n.n(i),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App"},l,!1,function(t){n("0QgP")},null,null).exports,c=n("/ocq"),d=n("FCw4"),p=n("OtbX"),f=null,m={name:"rotationChart",props:{loopsList:{type:Array,default:function(){return[]}},loopsIndex:{type:Number,default:0},autoplaySpeed:{type:Number,default:3e3},autoPlay:{type:Boolean,default:!0},radiusDot:{type:Boolean,default:!0}},data:function(){return{loopsCurrentIndex:this.$props.loopsIndex}},methods:{getElementTags:function(){var t=void 0,e=void 0,n=void 0;return(e=(t=document.getElementById("loops-box")).getElementsByClassName("loops-item")).length>0&&(n={loops_box:t,loops_item:e,loops_box_offsetWidth:t.offsetWidth,loops_item_offsetWidth:e[0].offsetWidth,length:e.length,currentIndex:this.loopsCurrentIndex}),n},setAutoPlay:function(){var t=this,e=t.getElementTags();t.autoPlay&&e?f=setInterval(function(){t.loopsCurrentIndex++,t.loopsCurrentIndex>=e.length&&(t.loopsCurrentIndex=0),e.loops_box.style.left=-e.loops_item_offsetWidth*t.loopsCurrentIndex+"px"},t.autoplaySpeed||5e3):clearInterval(f)},arrowLeft:function(){var t=this.getElementTags();t.currentIndex>=t.length-1?this.loopsCurrentIndex=0:this.loopsCurrentIndex++,t.loops_box.style.left=-this.loopsCurrentIndex*t.loops_item_offsetWidth+"px"},arrowRight:function(){var t=this.getElementTags();t.currentIndex=this.loopsCurrentIndex-1,this.loopsCurrentIndex--,t.currentIndex<0&&(t.currentIndex=t.length-1,this.loopsCurrentIndex=t.length-1),t.loops_box.style.left=-t.currentIndex*t.loops_item_offsetWidth+"px"},setNeedle:function(t){var e=this.getElementTags();this.loopsCurrentIndex=t,e.loops_box.style.left=-e.loops_box_offsetWidth*t+"px"},setStopAutoPlay:function(){clearInterval(f)},initPage:function(){this.loopsList.length>0&&this.setAutoPlay()}},mounted:function(){this.initPage()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loopsList.length>0,expression:"loopsList.length > 0"}],staticClass:"container",attrs:{id:"container"},on:{mouseover:t.setStopAutoPlay,mouseout:t.setAutoPlay}},[n("button",{staticClass:"arrow left",on:{click:t.arrowLeft}},[t._v("<")]),t._v(" "),n("ul",{staticClass:"loops-box",staticStyle:{left:"0"},attrs:{id:"loops-box"}},t._l(t.loopsList,function(e,o){return n("li",{key:e.id,staticClass:"loops-item",class:{active:t.loopsCurrentIndex==o}},[n("a",{staticClass:"loops-item-link",attrs:{href:e.url?e.url:"javascript:void(0);"}},[n("img",{staticClass:"img",attrs:{src:e.img,alt:""}})])])})),t._v(" "),n("button",{staticClass:"arrow right",on:{click:t.arrowRight}},[t._v(">")]),t._v(" "),t.radiusDot?n("ul",{staticClass:"needle"},t._l(t.loopsList,function(e,o){return n("li",{key:e.id,staticClass:"needle-item",class:{active:t.loopsCurrentIndex==o},on:{click:function(e){t.setNeedle(o)}}})})):t._e()])},staticRenderFns:[]};var v=n("VU/8")(m,h,!1,function(t){n("Re0W")},"data-v-7bf74c6f",null).exports,x={name:"websiteHome",metaInfo:{title:"官网",meta:[{name:"keywords",content:"首页"},{name:"description",content:"这是一个首页"}]},data:function(){return{setting:{loopsList:[{id:1,url:"",img:n("tBuW")},{id:2,url:"",img:n("aUFB")},{id:3,url:"",img:n("4kLZ")}],loopsIndex:0,autoplaySpeed:3e3,autoPlay:!0,radiusDot:!0}}},components:{SystemHeader:d.a,SystemFooter:p.a,RotationChart:v},methods:{}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"websiteHome"}},[e("SystemHeader"),this._v(" "),e("section",{staticClass:"banner-section"},[e("RotationChart",{staticClass:"loops-height",attrs:{loopsList:this.setting.loopsList,loopsIndex:this.setting.loopsIndex,autoplaySpeed:this.setting.autoplaySpeed,autoPlay:this.setting.autoPlay,radiusDot:this.setting.radiusDot}})],1),this._v(" "),e("SystemFooter")],1)},staticRenderFns:[]};var _=n("VU/8")(x,b,!1,function(t){n("PODj")},"data-v-6a547e9a",null).exports,g={name:"websiteAbout",metaInfo:{title:"关于",meta:[{name:"keywords",content:"关键字，关于"},{name:"description",content:"这是一个关于页面"}]},data:function(){return{}},components:{SystemHeader:d.a,SystemFooter:p.a}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"websiteAbout"}},[e("SystemHeader",{attrs:{currentIndex:3}}),this._v(" "),e("h2",[this._v("关于")]),this._v(" "),e("SystemFooter")],1)},staticRenderFns:[]};var I=n("VU/8")(g,y,!1,function(t){n("XiBW")},"data-v-8e442844",null).exports,w=[{path:"/example",component:function(){return n.e(0).then(n.bind(null,"RLuK"))}},{path:"/example/select",component:function(){return n.e(0).then(n.bind(null,"Qxpi"))}},{path:"/example/lazyload",component:function(){return n.e(0).then(n.bind(null,"TW3J"))}},{path:"/example/websocket",component:function(){return n.e(0).then(n.bind(null,"gv7n"))}},{path:"/example/date",component:function(){return n.e(0).then(n.bind(null,"opc+"))}}],C=[{path:"/iview",component:function(){return n.e(1).then(n.bind(null,"u5HV"))}},{path:"/iview/datepicker",component:function(){return n.e(1).then(n.bind(null,"j1v1"))}},{path:"/iview/table",component:function(){return n.e(1).then(n.bind(null,"T59Z"))}}];o.default.use(c.a);var L=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:I},{path:"*",component:function(){return n.e(2).then(n.bind(null,"JQIS"))}}]});L.addRoutes(w),L.addRoutes(C);var W,S=L,P=(n("j1ja"),n("mtWM")),k=n.n(P),E=(W="http://localhost:3000","locahost"===window.location.hostname&&(W="http://localhost:3000"),W);k.a.defaults.baseURL=E;var F=k.a;n("erWL");o.default.config.productionTip=!1,o.default.prototype.$http=F,o.default.use(a.a),o.default.use(r.a),new o.default({el:"#app",router:S,components:{App:u},template:"<App/>",mounted:function(){document.dispatchEvent(new Event("render-event"))}})},OtbX:function(t,e,n){"use strict";var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"websiteFooter"}},[e("h2",[this._v("页脚")])])}]};var s=n("VU/8")({name:"websiteFooter"},o,!1,function(t){n("d3eI")},"data-v-4acc84f0",null);e.a=s.exports},PODj:function(t,e){},Re0W:function(t,e){},XiBW:function(t,e){},aUFB:function(t,e,n){t.exports=n.p+"static/img/25cbcabf0e8083869e693db485552710.34728dd.jpg"},d3eI:function(t,e){},erWL:function(t,e){},tBuW:function(t,e,n){t.exports=n.p+"static/img/153828952.cb09a67.jpg"}},[0]);