webpackJsonp([1],{"14xJ":function(t,e,i){"use strict";function n(t){var e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,i=t.match(e);return!(!i||11!=i[7].length)&&i[7]}var a=i("INCx"),s=i.n(a);e.a={name:"MainPage",data:function(){return{videos:[],video:"",n_videos:0,width:0,height:0,empty:!1}},methods:{add:function(t){""!==this.video?(this.videos.push("https://www.youtube.com/embed/"+n(this.video)+"?autoplay=1&mute=1"),this.video="",this.n_videos=s()(Math.sqrt(this.videos.length+3)),this.width=1280/this.n_videos,this.height=720/this.n_videos,this.empty=!1):this.empty=!0}}}},"1VJL":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("br"),t._v(" "),i("small",{staticClass:"advice"},[t._v("Please use this page on a desktop device")]),t._v(" "),i("router-view"),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("span",[t._v("Made with "),i("span",{staticStyle:{"margin-left":"5px","margin-right":"5px"}},[t._v("❤️")]),t._v(" by Frostq")])])}],s={render:n,staticRenderFns:a};e.a=s},"4Uux":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("img",{staticClass:"logo",attrs:{src:i("7Otq")}}),t._v(" "),n("p",[t._v("Please enter the URL of the youtube video")]),t._v(" "),n("div",{staticClass:"InputAddOn"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.video,expression:"video"}],staticClass:"input_source InputAddOn-field",attrs:{type:"text"},domProps:{value:t.video},on:{input:function(e){e.target.composing||(t.video=e.target.value)}}}),t._v(" "),n("button",{staticClass:"InputAddOn-item cyan",on:{click:t.add}},[t._v("Add +")])]),t._v(" "),t.empty?n("p",{staticStyle:{color:"red"}},[t._v("You have not entered a url")]):t._e(),t._v(" "),n("div",{staticClass:"videos"},t._l(t.videos,function(e){return n("iframe",{attrs:{width:t.width,height:t.height,src:e,frameborder:"0",allowfullscreen:""}})}))])},a=[],s={render:n,staticRenderFns:a};e.a=s},"7Otq":function(t,e,i){t.exports=i.p+"static/img/logo.d5394a5.png"},M93x:function(t,e,i){"use strict";function n(t){i("wb+U")}var a=i("xJD8"),s=i("1VJL"),o=i("VU/8"),r=n,u=o(a.a,s.a,r,null,null);e.a=u.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("M93x"),s=i("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},US8T:function(t,e,i){"use strict";function n(t){i("nCRq")}var a=i("14xJ"),s=i("4Uux"),o=i("VU/8"),r=n,u=o(a.a,s.a,r,"data-v-1332bffd",null);e.a=u.exports},YaEn:function(t,e,i){"use strict";var n=i("7+uW"),a=i("/ocq"),s=i("US8T");n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"MainPage",component:s.a}]})},nCRq:function(t,e){},"wb+U":function(t,e){},xJD8:function(t,e,i){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.2b1e718bc0361aa82cab.js.map