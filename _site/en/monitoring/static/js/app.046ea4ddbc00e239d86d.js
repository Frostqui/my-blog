webpackJsonp([1],{"14xJ":function(t,e,n){"use strict";function i(t){var e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,n=t.match(e);return!(!n||11!=n[7].length)&&n[7]}var a=n("INCx"),s=n.n(a);e.a={name:"MainPage",data:function(){return{videos:[],video:"",n_videos:0,width:0,height:0,empty:!1}},methods:{add:function(t){""!==this.video?(this.videos.push("https://www.youtube.com/embed/"+i(this.video)+"?autoplay=1&mute=1"),this.video="",this.n_videos=s()(Math.sqrt(this.videos.length+3)),this.width=1280/this.n_videos,this.height=720/this.n_videos,this.empty=!1):this.empty=!0}}}},"1VJL":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("br"),t._v(" "),n("small",{staticClass:"advice"},[t._v("Please use this page on a desktop device")]),t._v(" "),n("router-view"),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("span",[t._v("Made with "),n("span",{staticStyle:{"margin-left":"5px","margin-right":"5px"}},[t._v("❤️")]),t._v(" by Frostq")])])}],s={render:i,staticRenderFns:a};e.a=s},"4Uux":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"logo"},[t._v("Camera monitoring")]),t._v(" "),n("p",[t._v("Please enter the URL of the youtube video")]),t._v(" "),n("div",{staticClass:"InputAddOn"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.video,expression:"video"}],staticClass:"input_source InputAddOn-field",attrs:{type:"text"},domProps:{value:t.video},on:{input:function(e){e.target.composing||(t.video=e.target.value)}}}),t._v(" "),n("button",{staticClass:"InputAddOn-item cyan",on:{click:t.add}},[t._v("Add +")])]),t._v(" "),t.empty?n("p",{staticStyle:{color:"red"}},[t._v("You have not entered a url")]):t._e(),t._v(" "),n("div",{staticClass:"videos"},t._l(t.videos,function(e){return n("iframe",{attrs:{width:t.width,height:t.height,src:e,frameborder:"0",allowfullscreen:""}})}))])},a=[],s={render:i,staticRenderFns:a};e.a=s},M93x:function(t,e,n){"use strict";function i(t){n("wb+U")}var a=n("xJD8"),s=n("1VJL"),o=n("VU/8"),r=i,u=o(a.a,s.a,r,null,null);e.a=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),s=n("YaEn");i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},US8T:function(t,e,n){"use strict";function i(t){n("nCRq")}var a=n("14xJ"),s=n("4Uux"),o=n("VU/8"),r=i,u=o(a.a,s.a,r,"data-v-1332bffd",null);e.a=u.exports},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),a=n("/ocq"),s=n("US8T");i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"MainPage",component:s.a}]})},nCRq:function(t,e){},"wb+U":function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.046ea4ddbc00e239d86d.js.map