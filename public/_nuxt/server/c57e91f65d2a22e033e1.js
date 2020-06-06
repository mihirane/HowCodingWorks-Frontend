exports.ids=[6],exports.modules={100:function(t,e,n){"use strict";var r=n(104);e.a=r.a},118:function(t,e,n){"use strict";var r=n(1),o=n.n(r),l=(n(119),n(48)),c=n(6),h=n(15),d=n(49),v=n(5),f=n(0),m=n(3);var w=Object(m.a)(c.a,Object(h.b)(["absolute","fixed","top","bottom"]),d.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.$vuetify.rtl?"right":"left"]:Object(f.f)(this.normalizedValue,"%"),width:Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?l.c:l.d},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const slot=Object(f.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize:t=>t<0?0:t>100?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},119:function(t,e){t.exports={}},120:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return h}));var r=n(121),o=n(0);const l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),h=Object(o.g)("v-card__text"),d=Object(o.g)("v-card__title");r.a},121:function(t,e,n){"use strict";n(122);var r=n(50),o=n(118),l=n(14),c=n(3);e.a=Object(c.a)(o.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...l.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...r.a.options.computed.classes.call(this)}},styles(){const style={...r.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},122:function(t,e){t.exports={}},123:function(t,e){t.exports={}},124:function(t,e){t.exports={}},139:function(t,e,n){"use strict";n.r(e);var r=n(123),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},140:function(t,e,n){"use strict";n.r(e);var r=n(124),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},141:function(t,e){t.exports={}},144:function(t,e,n){"use strict";var r={name:"PostCard",components:{},props:{postId:{type:String,default:null},postTopicName:{type:String,default:null},postTitle:{type:String,default:null},postCaption:{type:String,default:null}},computed:{getTopicName(){return this.$props.postTopicName.match(/[A-Z][a-z]+|[0-9]+/g).join(" ").toUpperCase()}},methods:{goToBlogPost(){return this.$router.push("/"+this.$props.postTopicName+"/"+this.$props.postTitle.split(" ").join("_")+"--"+this.$props.postId)}}},o=n(12),l=n(25),c=n.n(l),h=n(121),d=n(120),v=n(39);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"post-card",on:{click:function(e){return t.goToBlogPost()}}},[n("v-card-subtitle",{staticClass:"pb-0",staticStyle:{"letter-spacing":"1px"}},[t._v("\n    "+t._s(t.getTopicName)+"\n  ")]),t._v(" "),n("v-responsive",{staticClass:"px-4 pt-2 pb-0 title",staticStyle:{"line-height":"28px"}},[t._v("\n    "+t._s(t.postTitle)+"\n  ")]),t._v(" "),n("v-card-text",{staticClass:"pt-3"},[t._v("\n    "+t._s(t.postCaption)+"\n  ")])],1)}),[],!1,(function(t){var e=n(139);e.__inject__&&e.__inject__(t)}),"190f3ae7","5dcd6574");e.a=component.exports;c()(component,{VCard:h.a,VCardSubtitle:d.a,VCardText:d.b,VResponsive:v.a})},145:function(t,e,n){"use strict";var r={name:"TopicCard",props:{topicName:{type:String,default:null},topicThumbnailLink:{type:String,default:null},topicFollowersCount:{type:Number,default:0},hasUserFollowedTopic:{type:Boolean,default:!1}},computed:{getTopicName(){return this.$props.topicName.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}},mounted(){const t=document.getElementById("follow-btn"),e=document.getElementById("unfollow-btn");this.$props.hasUserFollowedTopic?(t.style="display: none;",e.style="display: initial;"):(t.style="display: initial;",e.style="display: none;")},methods:{navigateToTopic(){return this.$router.push("/"+this.$props.topicName)},async followTopic(){try{if(this.$store.state.currentUser.uid&&null!=this.$store.state.currentUser.uid){if(!(await this.$topicContainerViewModel.followTopic(this.$store.state.currentUser.uid,this.$props.topicName)).data)throw new Error("Some error occurred while following topic");const t=document.getElementById("follow-btn"),e=document.getElementById("unfollow-btn");t.style="display: none;",e.style="display: initial;";const n=document.getElementById("follow-count"),r=document.getElementById("follow-count-increment"),o=document.getElementById("follow-count-decrement");this.$props.hasUserFollowedTopic?(n.style="display: initial;",r.style="display: none;",o.style="display: none;"):(n.style="display: none;",r.style="display: initial;",o.style="display: none;")}else this.$router.push("/signUp")}catch(t){console.log(t)}},async unfollowTopic(){try{if(this.$store.state.currentUser.uid&&null!=this.$store.state.currentUser.uid){if(!(await this.$topicContainerViewModel.unfollowTopic(this.$store.state.currentUser.uid,this.$props.topicName)).data)throw new Error("Some error occurred while unfollowing topic");const t=document.getElementById("follow-btn"),e=document.getElementById("unfollow-btn");t.style="display: initial;",e.style="display: none;";const n=document.getElementById("follow-count"),r=document.getElementById("follow-count-increment"),o=document.getElementById("follow-count-decrement");this.$props.hasUserFollowedTopic?(n.style="display: none;",r.style="display: none;",o.style="display: initial;"):(n.style="display: initial;",r.style="display: none;",o.style="display: none;")}else this.$router.push("/signUp")}catch(t){console.log(t)}}}},o=n(12),l=n(25),c=n.n(l),h=n(104),d=n(62),v=n(20),f=n(42),m=n(43),w=n(8);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"52px",left:""},on:{click:function(e){return t.navigateToTopic()}}},[n("v-img",{attrs:{src:t.$props.topicThumbnailLink,alt:t.getTopicName+"Thumbnail"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"mb-0 pb-0 title",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.navigateToTopic()}}},[t._v("\n      "+t._s(t.getTopicName)+"\n    ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light subtitle-1"},[n("span",{attrs:{id:"follow-count"}},[t._v(t._s(t.$props.topicFollowersCount))]),t._v(" "),n("span",{staticStyle:{display:"none"},attrs:{id:"follow-count-increment"}},[t._v(t._s(t.$props.topicFollowersCount+1))]),t._v(" "),n("span",{staticStyle:{display:"none"},attrs:{id:"follow-count-decrement"}},[t._v(t._s(t.$props.topicFollowersCount-1))]),t._v(" "),n("span",[t._v("Following")])])],1),t._v(" "),n("v-list-item-action",{staticClass:"d-flex justify-center"},[n("v-btn",{attrs:{id:"follow-btn",small:"",outlined:""},on:{click:function(e){return t.followTopic()}}},[t._v("\n      Follow\n    ")]),t._v(" "),n("v-btn",{staticClass:"elevation-0",attrs:{id:"unfollow-btn",small:"",color:"primary"},on:{click:function(e){return t.unfollowTopic()}}},[t._v("\n      Following\n    ")])],1)],1)}),[],!1,(function(t){var e=n(140);e.__inject__&&e.__inject__(t)}),"e3c7f3a8","7c396e4e");e.a=component.exports;c()(component,{VBtn:h.a,VImg:d.a,VListItem:v.a,VListItemAction:f.a,VListItemAvatar:m.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c})},159:function(t,e,n){"use strict";n.r(e);var r=n(141),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},160:function(t,e){t.exports={}},161:function(t,e){t.exports={}},162:function(t,e){t.exports={}},171:function(t,e,n){"use strict";n.r(e);var r=n(144),o=n(145),l={name:"Profile",layout:"default",middleware:"auth",components:{PostCard:r.a,TopicCard:o.a},async asyncData({app:t,params:e,store:n,error:r}){try{const e=await t.$userProfileViewModel.getUserProfileData(n.state.currentUser.uid);if(e&&e.data)return{apolloData:e.data};r({statusCode:404,message:"Topic not found"})}catch(t){console.log(t)}},data:()=>({tab:null})},c=n(12),h=n(25),d=n.n(h),v=n(40),f=n(102),m=n(26),w=n(14),y=n(5),_=n(0),$=n(3);var x=Object($.a)(w.a,Object(m.a)("tabsBar"),y.a).extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...w.a.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){t=this.$router.resolve(this.to,this.$route,this.append).href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.attrs={...data.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},data.on={...data.on,keydown:t=>{t.keyCode===_.r.enter&&this.click(t),this.$emit("keydown",t)}},t(e,data,this.$slots.default)}}),C=n(34);function T(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),(t=>{const{touchstartX:e,touchendX:n,touchstartY:r,touchendY:o}=t;t.offsetX=n-e,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))})(e)}function B(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>function(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e),touchend:t=>T(t,e),touchmove:t=>function(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}var O={inserted:function(t,e,n){const r=e.value,o=r.parent?t.parentElement:t,l=r.options||{passive:!0};if(!o)return;const c=B(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[n.context._uid]=c,Object(_.s)(c).forEach(t=>{o.addEventListener(t,c[t],l)})},unbind:function(t,e,n){const r=e.value.parent?t.parentElement:t;if(!r||!r._touchHandlers)return;const o=r._touchHandlers[n.context._uid];Object(_.s)(o).forEach(t=>{r.removeEventListener(t,o[t])}),delete r._touchHandlers[n.context._uid]}};var S=Object($.a)(C.a,Object(m.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:O},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:()=>({isActive:!1,inTransition:!1}),computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(_.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(_.f)(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),k=S.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=S.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),I=(n(160),n(161),n(47)),E=n(48),j=n(29),N=n(53);const A=Object($.a)(j.a).extend({name:"base-slide-group",directives:{Resize:N.a,Touch:O},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...j.a.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:content,wrapper:t}=this.widths;return content>Math.abs(this.scrollOffset)+t},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[slot])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const n=this["has"+`${t[0].toUpperCase()}${t.slice(1)}`];return this.showArrows||n?this.$createElement(I.a,{props:{disabled:!n}},this[e+"Icon"]):null},genPrev(){const slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[slot])},genTransition(t){return this.$createElement(E.c,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,n,r){const o=n?-1:1,l=o*r+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:content}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:content,wrapper:t}=this.$refs,e=content.clientWidth-t.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-e&&(this.scrollOffset=-e):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=e&&(this.scrollOffset=e)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,n,r){const o=t.clientWidth,l=n?e.content-t.offsetLeft-o:t.offsetLeft;n&&(r=-r);const c=e.wrapper+r,h=o+l,d=.4*o;return l<r?r=Math.max(l-d,0):c<h&&(r=Math.min(r-(c-h-d),e.content-e.wrapper)),n?-r:r},calculateCenteredOffset(t,e,n){const{offsetLeft:r,clientWidth:o}=t;if(n){const t=e.content-r-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=r+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:content,wrapper:t}=this.$refs;this.widths={content:content?content.clientWidth:0,wrapper:t?t.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});A.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var V=n(33),P=Object($.a)(A,V.a,y.a).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...A.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=A.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const n=this.items,r=t.path,o=e.path;let l=!1,c=!1;for(const t of n)if(t.to===r?l=!0:t.to===o&&(c=!0),l&&c)break;!l&&c&&(this.internalValue=void 0)}},render(t){const e=A.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),z=(n(162),n(100)),R=j.a.extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:O},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:()=>({changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}),computed:{isActive(){return this.transitionCount>0},classes(){return{...j.a.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x";return`v-window-${t}${(this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse)?"-reverse":""}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,i)=>this.internalValue===this.getValue(t,i))},internalReverse(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,n){return this.$createElement("div",{staticClass:"v-window__"+t},[this.$createElement(z.a,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},on:{click:()=>{this.changedByDelimiters=!0,n()}}},[this.$createElement(I.a,{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){const n=this.genIcon("prev",e,this.prev);n&&t.push(n)}const n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"==typeof n){const e=this.genIcon("next",n,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};data.directives.push({name:"touch",value:t})}return t("div",data,[this.genContainer()])}}),L=R.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...R.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,i){return t.id||j.a.options.methods.getValue.call(this,t,i)}}}),U=n(6),W=Object($.a)(U.a).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),D=n(49);var X=Object($.a)(U.a,D.a,y.a).extend().extend({name:"v-tabs",directives:{Resize:N.a},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:()=>({resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}),computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(_.f)(this.slider.height),left:this.isReversed?void 0:Object(_.f)(this.slider.left),right:this.isReversed?Object(_.f)(this.slider.right):void 0,top:this.vertical?Object(_.f)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(_.f)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const data={style:{height:Object(_.f)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,data),this.setBackgroundColor(this.backgroundColor,data),this.$createElement(P,data,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(L,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(W,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const n=[],r=[],slot=this.$slots.default||[],o=slot.length;for(let i=0;i<o;i++){const o=slot[i];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":n.push(o);break;default:r.push(o)}else r.push(o)}return{tab:r,slider:e,items:t,item:n}}},render(t){const{tab:e,slider:n,items:r,item:o}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,n),this.genItems(r,o)])}});var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-0 pa-0"},[t._ssrNode('<div class="d-flex flex-column align-center justify-space-between mb-8" data-v-c366888e>',"</div>",[n("v-avatar",{staticClass:"mb-4",attrs:{size:"80"}},[n("img",{attrs:{src:t.$store.state.currentUser.photoURL,alt:t.$store.state.currentUser.displayName}})]),t._ssrNode(' <span class="headline font-weight-bold" data-v-c366888e>'+t._ssrEscape(t._s(t.$store.state.currentUser.displayName))+'</span> <span class="subtitle-1" style="color: grey;" data-v-c366888e>'+t._ssrEscape(t._s(t.$store.state.currentUser.email))+"</span>")],2),t._ssrNode(" "),n("v-tabs",{attrs:{"background-color":"#121212"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v("Saved Posts")]),t._v(" "),n("v-tab",[t._v("Followed Topics")])],1),t._ssrNode(" "),n("v-divider"),t._ssrNode(" "),n("v-tabs-items",{staticClass:"pt-1",staticStyle:{backgroundColor:"#121212"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticClass:"px-3"},[n("div",{staticClass:"posts-grid-container"},t._l(t.apolloData.getAllSavedPostsByUser,(function(t){return n("div",{key:t.id,staticClass:"ma-0 pa-0"},[n("post-card",{attrs:{"post-topic-name":t.topic.name,"post-id":t.id,"post-title":t.title,"post-caption":t.caption}})],1)})),0)]),t._v(" "),n("v-tab-item",t._l(t.apolloData.getAllFollowedTopicsByUser,(function(t){return n("div",{key:t.name,staticClass:"ma-0 pa-0"},[n("topic-card",{attrs:{"topic-name":t.name,"topic-thumbnail-link":t.thumbnailLink,"topic-followers-count":t.followersCount,"has-user-followed-topic":!0}})],1)})),0)],1)],2)}),[],!1,(function(t){var e=n(159);e.__inject__&&e.__inject__(t)}),"c366888e","5fba505e");e.default=component.exports;d()(component,{VAvatar:v.a,VDivider:f.a,VTab:x,VTabItem:k,VTabs:X,VTabsItems:L})}};