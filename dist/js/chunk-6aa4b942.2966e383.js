(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aa4b942"],{"0693":function(t,e,n){"use strict";var i=n("cdf1"),o=n.n(i);o.a},"0da8":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,o=n("69f3"),s=n("7dd0"),r="String Iterator",a=o.set,c=o.getterFor(r);s(String,"String",(function(t){a(this,{type:r,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=i(n,o),e.index+=t.length,{value:t,done:!1})}))},"44ab":function(t,e,n){"use strict";var i=n("0da8"),o=n.n(i);o.a},"4df4":function(t,e,n){"use strict";var i=n("0366"),o=n("7b0b"),s=n("9bdd"),r=n("e95a"),a=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,h,m=o(t),p="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,g=void 0!==b,w=l(m),y=0;if(g&&(b=i(b,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&r(w))for(e=a(m.length),n=new p(e);e>y;y++)h=g?b(m[y],y):m[y],c(n,y,h);else for(d=w.call(m),f=d.next,n=new p;!(u=f.call(d)).done;y++)h=g?s(d,b,[u.value,y],!0):u.value,c(n,y,h);return n.length=y,n}},5022:function(t,e,n){"use strict";var i=n("f930"),o=n.n(i);o.a},"529d":function(t,e,n){"use strict";var i=n("efa5"),o=n.n(i);o.a},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"6d71":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t){return n("GoodsListItem",{attrs:{"goods-item":t}})})),1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],attrs:{alt:""},on:{load:t.imageLoad}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},r=[],a={name:"GoodsListItem",data:function(){return{showId:null}},props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imageLoad:function(){this.$bus.$emit("imageLoad")},itemClick:function(){this.goodsItem.iid?this.showId=this.goodsItem.iid:(console.log(this.goodsItem.shop_id),this.showId=this.goodsItem.shop_id),this.$router.push({path:"/detail/"+this.showId})}}},c=a,l=(n("44ab"),n("2877")),u=Object(l["a"])(c,s,r,!1,null,"5ece243a",null),d=u.exports,f={name:"GoodsList",components:{GoodsListItem:d},props:{goods:{type:Array,default:function(){return[]}}}},h=f,m=(n("b9ad"),Object(l["a"])(h,i,o,!1,null,"1ee20d3e",null));e["a"]=m.exports},"732e":function(t,e,n){"use strict";var i=n("b3b8"),o=n.n(i);o.a},"812c":function(t,e,n){},"898e":function(t,e,n){},"8e36":function(t,e,n){"use strict";var i=n("9469"),o=n.n(i);o.a},9469:function(t,e,n){},"9bd0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,i){return n("div",{staticClass:"tab-control-item",class:{active:i===t.currentIndex},on:{click:function(e){return t.itemClick(i)}}},[n("span",[t._v(t._s(e))])])})),0)},o=[],s={name:"TabControl",data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}},props:{titles:{type:Array,default:function(){return[]}}}},r=s,a=(n("732e"),n("2877")),c=Object(a["a"])(r,i,o,!1,null,"a37d3592",null);e["a"]=c.exports},a630:function(t,e,n){var i=n("23e7"),o=n("4df4"),s=n("1c7e"),r=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:o})},b3b8:function(t,e,n){},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control Fixed",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("BScroll",{ref:"scroll",attrs:{prototype:3,pullUpLoad:!0},on:{scroll:t.contentScroll,addPage:t.addPage}},[n("home-swiper",{attrs:{banners:t.banner},on:{swiperImageLoad:t.showOffset}}),n("recommend-view",{attrs:{recommends:t.recommend}}),n("FeatureView"),n("TabControl",{ref:"tabControl2",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return s(t)||r(t)||a()}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",t._l(t.banners,(function(e){return n("swiper-item",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},u=[],d=n("dc2c"),f=(n("db27"),{name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:d["a"],SwiperItem:d["b"]},methods:{imageLoad:function(){this.isLoad||(console.log("----轮播图"),this.$emit("swiperImageLoad"),this.isLoad=!0)}}}),h=f,m=n("2877"),p=Object(m["a"])(h,l,u,!1,null,"b475ad34",null),v=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return n("div",{staticClass:"recommendItem"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},g=[],w={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},y=w,I=(n("5022"),Object(m["a"])(y,b,g,!1,null,"cebc54d0",null)),x=I.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"feature"},[i("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[i("img",{attrs:{src:n("5cbe"),alt:""}})])])}],T={name:"FeatureView"},S=T,k=(n("8e36"),Object(m["a"])(S,C,_,!1,null,"1571e5d4",null)),$=k.exports,O=n("a7ac"),j=n("9be1"),L=n("9bd0"),E=n("6d71"),A=n("eecb"),G=n("1bab");function W(){return Object(G["b"])({url:"/home/multidata"})}function H(t,e){return Object(G["a"])({url:"/home/data",params:{type:t,page:e}})}var N={name:"Home",components:{HomeSwiper:v,RecommendView:x,FeatureView:$,NavBar:O["a"],TabControl:L["a"],GoodsList:E["a"],BScroll:j["a"]},mixins:[A["b"],A["a"]],data:function(){return{banner:[],recommend:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",offsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},created:function(){this.getHomeMultiData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.scroll.y,this.$bus.$off("imageLoad",this.refresh)},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.listenShowBackTop(t),this.isTabFixed=-t.y>=this.offsetTop},addPage:function(){this.getHomeGoods(this.currentType)},showOffset:function(){this.offsetTop=this.$refs.tabControl2.$el.offsetTop-44},getHomeMultiData:function(){var t=this;W().then((function(e){console.log(e),t.banner=e.data.data.banner.list,t.recommend=e.data.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;H(t,n).then((function(i){var o;(o=e.goods[t].list).push.apply(o,c(i.data.list)),e.goods[t].page=n,e.$refs.scroll.finishPullUp()}))}}},B=N,F=(n("529d"),Object(m["a"])(B,i,o,!1,null,"50c339d0",null));e["default"]=F.exports},b9ad:function(t,e,n){"use strict";var i=n("812c"),o=n.n(i);o.a},cdf1:function(t,e,n){},d28b:function(t,e,n){var i=n("746f");i("iterator")},dc2c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},o=[],s=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:4,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!0}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),r=s,a=(n("e8c8"),n("2877")),c=Object(a["a"])(r,i,o,!1,null,"383da82c",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],f={name:"Slide"},h=f,m=(n("0693"),Object(a["a"])(h,u,d,!1,null,"376fae32",null)),p=m.exports;n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}))},ddb0:function(t,e,n){var i=n("da84"),o=n("fdbc"),s=n("e260"),r=n("9112"),a=n("b622"),c=a("iterator"),l=a("toStringTag"),u=s.values;for(var d in o){var f=i[d],h=f&&f.prototype;if(h){if(h[c]!==u)try{r(h,c,u)}catch(p){h[c]=u}if(h[l]||r(h,l,d),o[d])for(var m in s)if(h[m]!==s[m])try{r(h,m,s[m])}catch(p){h[m]=s[m]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),o=n("83ab"),s=n("da84"),r=n("5135"),a=n("861d"),c=n("9bf2").f,l=n("e893"),u=s.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var h=f.prototype=u.prototype;h.constructor=f;var m=h.toString,p="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=m.call(t);if(r(d,t))return"";var n=p?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},e8c8:function(t,e,n){"use strict";var i=n("898e"),o=n.n(i);o.a},efa5:function(t,e,n){},f930:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6aa4b942.2966e383.js.map