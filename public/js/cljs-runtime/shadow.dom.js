goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33621 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33621(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33626 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33626(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32585 = coll;
var G__32586 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32585,G__32586) : shadow.dom.lazy_native_coll_seq.call(null,G__32585,G__32586));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32660 = arguments.length;
switch (G__32660) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32682 = arguments.length;
switch (G__32682) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32693 = arguments.length;
switch (G__32693) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32701 = arguments.length;
switch (G__32701) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32712){if((e32712 instanceof Object)){
var e = e32712;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32712;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32725 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32726 = null;
var count__32727 = (0);
var i__32728 = (0);
while(true){
if((i__32728 < count__32727)){
var el = chunk__32726.cljs$core$IIndexed$_nth$arity$2(null,i__32728);
var handler_33672__$1 = ((function (seq__32725,chunk__32726,count__32727,i__32728,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32725,chunk__32726,count__32727,i__32728,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33672__$1);


var G__33673 = seq__32725;
var G__33674 = chunk__32726;
var G__33675 = count__32727;
var G__33676 = (i__32728 + (1));
seq__32725 = G__33673;
chunk__32726 = G__33674;
count__32727 = G__33675;
i__32728 = G__33676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32725);
if(temp__5735__auto__){
var seq__32725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32725__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32725__$1);
var G__33678 = cljs.core.chunk_rest(seq__32725__$1);
var G__33679 = c__4556__auto__;
var G__33680 = cljs.core.count(c__4556__auto__);
var G__33681 = (0);
seq__32725 = G__33678;
chunk__32726 = G__33679;
count__32727 = G__33680;
i__32728 = G__33681;
continue;
} else {
var el = cljs.core.first(seq__32725__$1);
var handler_33683__$1 = ((function (seq__32725,chunk__32726,count__32727,i__32728,el,seq__32725__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32725,chunk__32726,count__32727,i__32728,el,seq__32725__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33683__$1);


var G__33685 = cljs.core.next(seq__32725__$1);
var G__33686 = null;
var G__33687 = (0);
var G__33688 = (0);
seq__32725 = G__33685;
chunk__32726 = G__33686;
count__32727 = G__33687;
i__32728 = G__33688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32750 = arguments.length;
switch (G__32750) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32771 = cljs.core.seq(events);
var chunk__32772 = null;
var count__32773 = (0);
var i__32774 = (0);
while(true){
if((i__32774 < count__32773)){
var vec__32796 = chunk__32772.cljs$core$IIndexed$_nth$arity$2(null,i__32774);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33694 = seq__32771;
var G__33695 = chunk__32772;
var G__33696 = count__32773;
var G__33697 = (i__32774 + (1));
seq__32771 = G__33694;
chunk__32772 = G__33695;
count__32773 = G__33696;
i__32774 = G__33697;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32771);
if(temp__5735__auto__){
var seq__32771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32771__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32771__$1);
var G__33700 = cljs.core.chunk_rest(seq__32771__$1);
var G__33701 = c__4556__auto__;
var G__33702 = cljs.core.count(c__4556__auto__);
var G__33703 = (0);
seq__32771 = G__33700;
chunk__32772 = G__33701;
count__32773 = G__33702;
i__32774 = G__33703;
continue;
} else {
var vec__32810 = cljs.core.first(seq__32771__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32810,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33706 = cljs.core.next(seq__32771__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__32771 = G__33706;
chunk__32772 = G__33707;
count__32773 = G__33708;
i__32774 = G__33709;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32819 = cljs.core.seq(styles);
var chunk__32820 = null;
var count__32821 = (0);
var i__32822 = (0);
while(true){
if((i__32822 < count__32821)){
var vec__32843 = chunk__32820.cljs$core$IIndexed$_nth$arity$2(null,i__32822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32843,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33712 = seq__32819;
var G__33713 = chunk__32820;
var G__33714 = count__32821;
var G__33715 = (i__32822 + (1));
seq__32819 = G__33712;
chunk__32820 = G__33713;
count__32821 = G__33714;
i__32822 = G__33715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32819);
if(temp__5735__auto__){
var seq__32819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32819__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32819__$1);
var G__33718 = cljs.core.chunk_rest(seq__32819__$1);
var G__33719 = c__4556__auto__;
var G__33720 = cljs.core.count(c__4556__auto__);
var G__33721 = (0);
seq__32819 = G__33718;
chunk__32820 = G__33719;
count__32821 = G__33720;
i__32822 = G__33721;
continue;
} else {
var vec__32853 = cljs.core.first(seq__32819__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32853,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33723 = cljs.core.next(seq__32819__$1);
var G__33724 = null;
var G__33725 = (0);
var G__33726 = (0);
seq__32819 = G__33723;
chunk__32820 = G__33724;
count__32821 = G__33725;
i__32822 = G__33726;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32865_33728 = key;
var G__32865_33729__$1 = (((G__32865_33728 instanceof cljs.core.Keyword))?G__32865_33728.fqn:null);
switch (G__32865_33729__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33734 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33734,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33734,"aria-");
}
})())){
el.setAttribute(ks_33734,value);
} else {
(el[ks_33734] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32906){
var map__32907 = p__32906;
var map__32907__$1 = (((((!((map__32907 == null))))?(((((map__32907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32907):map__32907);
var props = map__32907__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32907__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32910 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32914 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32914,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32914;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32922){
var vec__32924 = p__32922;
var seq__32925 = cljs.core.seq(vec__32924);
var first__32926 = cljs.core.first(seq__32925);
var seq__32925__$1 = cljs.core.next(seq__32925);
var nn = first__32926;
var first__32926__$1 = cljs.core.first(seq__32925__$1);
var seq__32925__$2 = cljs.core.next(seq__32925__$1);
var np = first__32926__$1;
var nc = seq__32925__$2;
var node = vec__32924;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32942 = nn;
var G__32943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32942,G__32943) : create_fn.call(null,G__32942,G__32943));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32944 = nn;
var G__32945 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32944,G__32945) : create_fn.call(null,G__32944,G__32945));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32949 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32949,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32949,(1),null);
var seq__32952_33753 = cljs.core.seq(node_children);
var chunk__32953_33754 = null;
var count__32954_33755 = (0);
var i__32955_33756 = (0);
while(true){
if((i__32955_33756 < count__32954_33755)){
var child_struct_33758 = chunk__32953_33754.cljs$core$IIndexed$_nth$arity$2(null,i__32955_33756);
var children_33759 = shadow.dom.dom_node(child_struct_33758);
if(cljs.core.seq_QMARK_(children_33759)){
var seq__33012_33760 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33759));
var chunk__33014_33761 = null;
var count__33015_33762 = (0);
var i__33016_33763 = (0);
while(true){
if((i__33016_33763 < count__33015_33762)){
var child_33764 = chunk__33014_33761.cljs$core$IIndexed$_nth$arity$2(null,i__33016_33763);
if(cljs.core.truth_(child_33764)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33764);


var G__33766 = seq__33012_33760;
var G__33767 = chunk__33014_33761;
var G__33768 = count__33015_33762;
var G__33769 = (i__33016_33763 + (1));
seq__33012_33760 = G__33766;
chunk__33014_33761 = G__33767;
count__33015_33762 = G__33768;
i__33016_33763 = G__33769;
continue;
} else {
var G__33770 = seq__33012_33760;
var G__33771 = chunk__33014_33761;
var G__33772 = count__33015_33762;
var G__33773 = (i__33016_33763 + (1));
seq__33012_33760 = G__33770;
chunk__33014_33761 = G__33771;
count__33015_33762 = G__33772;
i__33016_33763 = G__33773;
continue;
}
} else {
var temp__5735__auto___33774 = cljs.core.seq(seq__33012_33760);
if(temp__5735__auto___33774){
var seq__33012_33775__$1 = temp__5735__auto___33774;
if(cljs.core.chunked_seq_QMARK_(seq__33012_33775__$1)){
var c__4556__auto___33776 = cljs.core.chunk_first(seq__33012_33775__$1);
var G__33777 = cljs.core.chunk_rest(seq__33012_33775__$1);
var G__33778 = c__4556__auto___33776;
var G__33779 = cljs.core.count(c__4556__auto___33776);
var G__33780 = (0);
seq__33012_33760 = G__33777;
chunk__33014_33761 = G__33778;
count__33015_33762 = G__33779;
i__33016_33763 = G__33780;
continue;
} else {
var child_33781 = cljs.core.first(seq__33012_33775__$1);
if(cljs.core.truth_(child_33781)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33781);


var G__33782 = cljs.core.next(seq__33012_33775__$1);
var G__33783 = null;
var G__33784 = (0);
var G__33785 = (0);
seq__33012_33760 = G__33782;
chunk__33014_33761 = G__33783;
count__33015_33762 = G__33784;
i__33016_33763 = G__33785;
continue;
} else {
var G__33786 = cljs.core.next(seq__33012_33775__$1);
var G__33787 = null;
var G__33788 = (0);
var G__33789 = (0);
seq__33012_33760 = G__33786;
chunk__33014_33761 = G__33787;
count__33015_33762 = G__33788;
i__33016_33763 = G__33789;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33759);
}


var G__33791 = seq__32952_33753;
var G__33792 = chunk__32953_33754;
var G__33793 = count__32954_33755;
var G__33794 = (i__32955_33756 + (1));
seq__32952_33753 = G__33791;
chunk__32953_33754 = G__33792;
count__32954_33755 = G__33793;
i__32955_33756 = G__33794;
continue;
} else {
var temp__5735__auto___33796 = cljs.core.seq(seq__32952_33753);
if(temp__5735__auto___33796){
var seq__32952_33797__$1 = temp__5735__auto___33796;
if(cljs.core.chunked_seq_QMARK_(seq__32952_33797__$1)){
var c__4556__auto___33798 = cljs.core.chunk_first(seq__32952_33797__$1);
var G__33799 = cljs.core.chunk_rest(seq__32952_33797__$1);
var G__33800 = c__4556__auto___33798;
var G__33801 = cljs.core.count(c__4556__auto___33798);
var G__33802 = (0);
seq__32952_33753 = G__33799;
chunk__32953_33754 = G__33800;
count__32954_33755 = G__33801;
i__32955_33756 = G__33802;
continue;
} else {
var child_struct_33803 = cljs.core.first(seq__32952_33797__$1);
var children_33804 = shadow.dom.dom_node(child_struct_33803);
if(cljs.core.seq_QMARK_(children_33804)){
var seq__33035_33805 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33804));
var chunk__33037_33806 = null;
var count__33038_33807 = (0);
var i__33039_33808 = (0);
while(true){
if((i__33039_33808 < count__33038_33807)){
var child_33809 = chunk__33037_33806.cljs$core$IIndexed$_nth$arity$2(null,i__33039_33808);
if(cljs.core.truth_(child_33809)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33809);


var G__33810 = seq__33035_33805;
var G__33811 = chunk__33037_33806;
var G__33812 = count__33038_33807;
var G__33813 = (i__33039_33808 + (1));
seq__33035_33805 = G__33810;
chunk__33037_33806 = G__33811;
count__33038_33807 = G__33812;
i__33039_33808 = G__33813;
continue;
} else {
var G__33814 = seq__33035_33805;
var G__33815 = chunk__33037_33806;
var G__33816 = count__33038_33807;
var G__33817 = (i__33039_33808 + (1));
seq__33035_33805 = G__33814;
chunk__33037_33806 = G__33815;
count__33038_33807 = G__33816;
i__33039_33808 = G__33817;
continue;
}
} else {
var temp__5735__auto___33820__$1 = cljs.core.seq(seq__33035_33805);
if(temp__5735__auto___33820__$1){
var seq__33035_33821__$1 = temp__5735__auto___33820__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33035_33821__$1)){
var c__4556__auto___33822 = cljs.core.chunk_first(seq__33035_33821__$1);
var G__33823 = cljs.core.chunk_rest(seq__33035_33821__$1);
var G__33824 = c__4556__auto___33822;
var G__33825 = cljs.core.count(c__4556__auto___33822);
var G__33826 = (0);
seq__33035_33805 = G__33823;
chunk__33037_33806 = G__33824;
count__33038_33807 = G__33825;
i__33039_33808 = G__33826;
continue;
} else {
var child_33827 = cljs.core.first(seq__33035_33821__$1);
if(cljs.core.truth_(child_33827)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33827);


var G__33829 = cljs.core.next(seq__33035_33821__$1);
var G__33830 = null;
var G__33831 = (0);
var G__33832 = (0);
seq__33035_33805 = G__33829;
chunk__33037_33806 = G__33830;
count__33038_33807 = G__33831;
i__33039_33808 = G__33832;
continue;
} else {
var G__33833 = cljs.core.next(seq__33035_33821__$1);
var G__33834 = null;
var G__33835 = (0);
var G__33836 = (0);
seq__33035_33805 = G__33833;
chunk__33037_33806 = G__33834;
count__33038_33807 = G__33835;
i__33039_33808 = G__33836;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33804);
}


var G__33837 = cljs.core.next(seq__32952_33797__$1);
var G__33838 = null;
var G__33839 = (0);
var G__33840 = (0);
seq__32952_33753 = G__33837;
chunk__32953_33754 = G__33838;
count__32954_33755 = G__33839;
i__32955_33756 = G__33840;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33067 = cljs.core.seq(node);
var chunk__33068 = null;
var count__33069 = (0);
var i__33070 = (0);
while(true){
if((i__33070 < count__33069)){
var n = chunk__33068.cljs$core$IIndexed$_nth$arity$2(null,i__33070);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33850 = seq__33067;
var G__33851 = chunk__33068;
var G__33852 = count__33069;
var G__33853 = (i__33070 + (1));
seq__33067 = G__33850;
chunk__33068 = G__33851;
count__33069 = G__33852;
i__33070 = G__33853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33067);
if(temp__5735__auto__){
var seq__33067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33067__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33067__$1);
var G__33854 = cljs.core.chunk_rest(seq__33067__$1);
var G__33855 = c__4556__auto__;
var G__33856 = cljs.core.count(c__4556__auto__);
var G__33857 = (0);
seq__33067 = G__33854;
chunk__33068 = G__33855;
count__33069 = G__33856;
i__33070 = G__33857;
continue;
} else {
var n = cljs.core.first(seq__33067__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33860 = cljs.core.next(seq__33067__$1);
var G__33861 = null;
var G__33862 = (0);
var G__33863 = (0);
seq__33067 = G__33860;
chunk__33068 = G__33861;
count__33069 = G__33862;
i__33070 = G__33863;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33083 = arguments.length;
switch (G__33083) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33103 = arguments.length;
switch (G__33103) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33879 = arguments.length;
var i__4737__auto___33880 = (0);
while(true){
if((i__4737__auto___33880 < len__4736__auto___33879)){
args__4742__auto__.push((arguments[i__4737__auto___33880]));

var G__33882 = (i__4737__auto___33880 + (1));
i__4737__auto___33880 = G__33882;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33146_33888 = cljs.core.seq(nodes);
var chunk__33147_33889 = null;
var count__33148_33890 = (0);
var i__33149_33891 = (0);
while(true){
if((i__33149_33891 < count__33148_33890)){
var node_33893 = chunk__33147_33889.cljs$core$IIndexed$_nth$arity$2(null,i__33149_33891);
fragment.appendChild(shadow.dom._to_dom(node_33893));


var G__33895 = seq__33146_33888;
var G__33896 = chunk__33147_33889;
var G__33897 = count__33148_33890;
var G__33898 = (i__33149_33891 + (1));
seq__33146_33888 = G__33895;
chunk__33147_33889 = G__33896;
count__33148_33890 = G__33897;
i__33149_33891 = G__33898;
continue;
} else {
var temp__5735__auto___33900 = cljs.core.seq(seq__33146_33888);
if(temp__5735__auto___33900){
var seq__33146_33902__$1 = temp__5735__auto___33900;
if(cljs.core.chunked_seq_QMARK_(seq__33146_33902__$1)){
var c__4556__auto___33903 = cljs.core.chunk_first(seq__33146_33902__$1);
var G__33904 = cljs.core.chunk_rest(seq__33146_33902__$1);
var G__33905 = c__4556__auto___33903;
var G__33906 = cljs.core.count(c__4556__auto___33903);
var G__33907 = (0);
seq__33146_33888 = G__33904;
chunk__33147_33889 = G__33905;
count__33148_33890 = G__33906;
i__33149_33891 = G__33907;
continue;
} else {
var node_33909 = cljs.core.first(seq__33146_33902__$1);
fragment.appendChild(shadow.dom._to_dom(node_33909));


var G__33911 = cljs.core.next(seq__33146_33902__$1);
var G__33912 = null;
var G__33913 = (0);
var G__33914 = (0);
seq__33146_33888 = G__33911;
chunk__33147_33889 = G__33912;
count__33148_33890 = G__33913;
i__33149_33891 = G__33914;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33143){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33143));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33155_33923 = cljs.core.seq(scripts);
var chunk__33156_33924 = null;
var count__33157_33925 = (0);
var i__33158_33926 = (0);
while(true){
if((i__33158_33926 < count__33157_33925)){
var vec__33173_33927 = chunk__33156_33924.cljs$core$IIndexed$_nth$arity$2(null,i__33158_33926);
var script_tag_33928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173_33927,(0),null);
var script_body_33929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173_33927,(1),null);
eval(script_body_33929);


var G__33930 = seq__33155_33923;
var G__33931 = chunk__33156_33924;
var G__33932 = count__33157_33925;
var G__33933 = (i__33158_33926 + (1));
seq__33155_33923 = G__33930;
chunk__33156_33924 = G__33931;
count__33157_33925 = G__33932;
i__33158_33926 = G__33933;
continue;
} else {
var temp__5735__auto___33934 = cljs.core.seq(seq__33155_33923);
if(temp__5735__auto___33934){
var seq__33155_33935__$1 = temp__5735__auto___33934;
if(cljs.core.chunked_seq_QMARK_(seq__33155_33935__$1)){
var c__4556__auto___33936 = cljs.core.chunk_first(seq__33155_33935__$1);
var G__33937 = cljs.core.chunk_rest(seq__33155_33935__$1);
var G__33938 = c__4556__auto___33936;
var G__33939 = cljs.core.count(c__4556__auto___33936);
var G__33940 = (0);
seq__33155_33923 = G__33937;
chunk__33156_33924 = G__33938;
count__33157_33925 = G__33939;
i__33158_33926 = G__33940;
continue;
} else {
var vec__33181_33941 = cljs.core.first(seq__33155_33935__$1);
var script_tag_33942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181_33941,(0),null);
var script_body_33943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33181_33941,(1),null);
eval(script_body_33943);


var G__33944 = cljs.core.next(seq__33155_33935__$1);
var G__33945 = null;
var G__33946 = (0);
var G__33947 = (0);
seq__33155_33923 = G__33944;
chunk__33156_33924 = G__33945;
count__33157_33925 = G__33946;
i__33158_33926 = G__33947;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33185){
var vec__33187 = p__33185;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33208 = arguments.length;
switch (G__33208) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33216 = cljs.core.seq(style_keys);
var chunk__33217 = null;
var count__33218 = (0);
var i__33219 = (0);
while(true){
if((i__33219 < count__33218)){
var it = chunk__33217.cljs$core$IIndexed$_nth$arity$2(null,i__33219);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33954 = seq__33216;
var G__33955 = chunk__33217;
var G__33956 = count__33218;
var G__33957 = (i__33219 + (1));
seq__33216 = G__33954;
chunk__33217 = G__33955;
count__33218 = G__33956;
i__33219 = G__33957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33216);
if(temp__5735__auto__){
var seq__33216__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33216__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33216__$1);
var G__33958 = cljs.core.chunk_rest(seq__33216__$1);
var G__33959 = c__4556__auto__;
var G__33960 = cljs.core.count(c__4556__auto__);
var G__33961 = (0);
seq__33216 = G__33958;
chunk__33217 = G__33959;
count__33218 = G__33960;
i__33219 = G__33961;
continue;
} else {
var it = cljs.core.first(seq__33216__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33962 = cljs.core.next(seq__33216__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33216 = G__33962;
chunk__33217 = G__33963;
count__33218 = G__33964;
i__33219 = G__33965;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33235,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33253 = k33235;
var G__33253__$1 = (((G__33253 instanceof cljs.core.Keyword))?G__33253.fqn:null);
switch (G__33253__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33235,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33257){
var vec__33260 = p__33257;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33234){
var self__ = this;
var G__33234__$1 = this;
return (new cljs.core.RecordIter((0),G__33234__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33237,other33238){
var self__ = this;
var this33237__$1 = this;
return (((!((other33238 == null)))) && ((this33237__$1.constructor === other33238.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33237__$1.x,other33238.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33237__$1.y,other33238.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33237__$1.__extmap,other33238.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33234){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33291 = cljs.core.keyword_identical_QMARK_;
var expr__33293 = k__4388__auto__;
if(cljs.core.truth_((pred__33291.cljs$core$IFn$_invoke$arity$2 ? pred__33291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33293) : pred__33291.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33293)))){
return (new shadow.dom.Coordinate(G__33234,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33291.cljs$core$IFn$_invoke$arity$2 ? pred__33291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33293) : pred__33291.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33293)))){
return (new shadow.dom.Coordinate(self__.x,G__33234,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33234),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33234){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33234,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33242){
var extmap__4419__auto__ = (function (){var G__33309 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33242,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33242)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33309);
} else {
return G__33309;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33242),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33242),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33313,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33322 = k33313;
var G__33322__$1 = (((G__33322 instanceof cljs.core.Keyword))?G__33322.fqn:null);
switch (G__33322__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33313,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33323){
var vec__33324 = p__33323;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33312){
var self__ = this;
var G__33312__$1 = this;
return (new cljs.core.RecordIter((0),G__33312__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33314,other33315){
var self__ = this;
var this33314__$1 = this;
return (((!((other33315 == null)))) && ((this33314__$1.constructor === other33315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33314__$1.w,other33315.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33314__$1.h,other33315.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33314__$1.__extmap,other33315.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33312){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33331 = cljs.core.keyword_identical_QMARK_;
var expr__33332 = k__4388__auto__;
if(cljs.core.truth_((pred__33331.cljs$core$IFn$_invoke$arity$2 ? pred__33331.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33332) : pred__33331.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33332)))){
return (new shadow.dom.Size(G__33312,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33331.cljs$core$IFn$_invoke$arity$2 ? pred__33331.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33332) : pred__33331.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33332)))){
return (new shadow.dom.Size(self__.w,G__33312,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33312),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33312){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33312,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33316){
var extmap__4419__auto__ = (function (){var G__33349 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33316,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33349);
} else {
return G__33349;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33316),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33316),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34052 = (i + (1));
var G__34053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34052;
ret = G__34053;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33377){
var vec__33378 = p__33377;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33378,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33384 = arguments.length;
switch (G__33384) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34063 = ps;
var G__34064 = (i + (1));
el__$1 = G__34063;
i = G__34064;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33409 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33409,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33409,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33409,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33415_34069 = cljs.core.seq(props);
var chunk__33416_34070 = null;
var count__33417_34071 = (0);
var i__33418_34072 = (0);
while(true){
if((i__33418_34072 < count__33417_34071)){
var vec__33441_34075 = chunk__33416_34070.cljs$core$IIndexed$_nth$arity$2(null,i__33418_34072);
var k_34076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33441_34075,(0),null);
var v_34077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33441_34075,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34076);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34076),v_34077);


var G__34079 = seq__33415_34069;
var G__34080 = chunk__33416_34070;
var G__34081 = count__33417_34071;
var G__34082 = (i__33418_34072 + (1));
seq__33415_34069 = G__34079;
chunk__33416_34070 = G__34080;
count__33417_34071 = G__34081;
i__33418_34072 = G__34082;
continue;
} else {
var temp__5735__auto___34083 = cljs.core.seq(seq__33415_34069);
if(temp__5735__auto___34083){
var seq__33415_34086__$1 = temp__5735__auto___34083;
if(cljs.core.chunked_seq_QMARK_(seq__33415_34086__$1)){
var c__4556__auto___34087 = cljs.core.chunk_first(seq__33415_34086__$1);
var G__34088 = cljs.core.chunk_rest(seq__33415_34086__$1);
var G__34089 = c__4556__auto___34087;
var G__34090 = cljs.core.count(c__4556__auto___34087);
var G__34091 = (0);
seq__33415_34069 = G__34088;
chunk__33416_34070 = G__34089;
count__33417_34071 = G__34090;
i__33418_34072 = G__34091;
continue;
} else {
var vec__33448_34092 = cljs.core.first(seq__33415_34086__$1);
var k_34093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33448_34092,(0),null);
var v_34094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33448_34092,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34093);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34093),v_34094);


var G__34095 = cljs.core.next(seq__33415_34086__$1);
var G__34096 = null;
var G__34097 = (0);
var G__34098 = (0);
seq__33415_34069 = G__34095;
chunk__33416_34070 = G__34096;
count__33417_34071 = G__34097;
i__33418_34072 = G__34098;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33464 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(1),null);
var seq__33467_34099 = cljs.core.seq(node_children);
var chunk__33469_34100 = null;
var count__33470_34101 = (0);
var i__33471_34102 = (0);
while(true){
if((i__33471_34102 < count__33470_34101)){
var child_struct_34104 = chunk__33469_34100.cljs$core$IIndexed$_nth$arity$2(null,i__33471_34102);
if((!((child_struct_34104 == null)))){
if(typeof child_struct_34104 === 'string'){
var text_34105 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34105),child_struct_34104].join(''));
} else {
var children_34106 = shadow.dom.svg_node(child_struct_34104);
if(cljs.core.seq_QMARK_(children_34106)){
var seq__33516_34107 = cljs.core.seq(children_34106);
var chunk__33518_34108 = null;
var count__33519_34109 = (0);
var i__33520_34110 = (0);
while(true){
if((i__33520_34110 < count__33519_34109)){
var child_34111 = chunk__33518_34108.cljs$core$IIndexed$_nth$arity$2(null,i__33520_34110);
if(cljs.core.truth_(child_34111)){
node.appendChild(child_34111);


var G__34112 = seq__33516_34107;
var G__34113 = chunk__33518_34108;
var G__34114 = count__33519_34109;
var G__34115 = (i__33520_34110 + (1));
seq__33516_34107 = G__34112;
chunk__33518_34108 = G__34113;
count__33519_34109 = G__34114;
i__33520_34110 = G__34115;
continue;
} else {
var G__34116 = seq__33516_34107;
var G__34117 = chunk__33518_34108;
var G__34118 = count__33519_34109;
var G__34119 = (i__33520_34110 + (1));
seq__33516_34107 = G__34116;
chunk__33518_34108 = G__34117;
count__33519_34109 = G__34118;
i__33520_34110 = G__34119;
continue;
}
} else {
var temp__5735__auto___34120 = cljs.core.seq(seq__33516_34107);
if(temp__5735__auto___34120){
var seq__33516_34121__$1 = temp__5735__auto___34120;
if(cljs.core.chunked_seq_QMARK_(seq__33516_34121__$1)){
var c__4556__auto___34122 = cljs.core.chunk_first(seq__33516_34121__$1);
var G__34123 = cljs.core.chunk_rest(seq__33516_34121__$1);
var G__34124 = c__4556__auto___34122;
var G__34125 = cljs.core.count(c__4556__auto___34122);
var G__34126 = (0);
seq__33516_34107 = G__34123;
chunk__33518_34108 = G__34124;
count__33519_34109 = G__34125;
i__33520_34110 = G__34126;
continue;
} else {
var child_34127 = cljs.core.first(seq__33516_34121__$1);
if(cljs.core.truth_(child_34127)){
node.appendChild(child_34127);


var G__34128 = cljs.core.next(seq__33516_34121__$1);
var G__34129 = null;
var G__34130 = (0);
var G__34131 = (0);
seq__33516_34107 = G__34128;
chunk__33518_34108 = G__34129;
count__33519_34109 = G__34130;
i__33520_34110 = G__34131;
continue;
} else {
var G__34132 = cljs.core.next(seq__33516_34121__$1);
var G__34133 = null;
var G__34134 = (0);
var G__34135 = (0);
seq__33516_34107 = G__34132;
chunk__33518_34108 = G__34133;
count__33519_34109 = G__34134;
i__33520_34110 = G__34135;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34106);
}
}


var G__34136 = seq__33467_34099;
var G__34137 = chunk__33469_34100;
var G__34138 = count__33470_34101;
var G__34139 = (i__33471_34102 + (1));
seq__33467_34099 = G__34136;
chunk__33469_34100 = G__34137;
count__33470_34101 = G__34138;
i__33471_34102 = G__34139;
continue;
} else {
var G__34140 = seq__33467_34099;
var G__34141 = chunk__33469_34100;
var G__34142 = count__33470_34101;
var G__34143 = (i__33471_34102 + (1));
seq__33467_34099 = G__34140;
chunk__33469_34100 = G__34141;
count__33470_34101 = G__34142;
i__33471_34102 = G__34143;
continue;
}
} else {
var temp__5735__auto___34144 = cljs.core.seq(seq__33467_34099);
if(temp__5735__auto___34144){
var seq__33467_34145__$1 = temp__5735__auto___34144;
if(cljs.core.chunked_seq_QMARK_(seq__33467_34145__$1)){
var c__4556__auto___34146 = cljs.core.chunk_first(seq__33467_34145__$1);
var G__34147 = cljs.core.chunk_rest(seq__33467_34145__$1);
var G__34148 = c__4556__auto___34146;
var G__34149 = cljs.core.count(c__4556__auto___34146);
var G__34150 = (0);
seq__33467_34099 = G__34147;
chunk__33469_34100 = G__34148;
count__33470_34101 = G__34149;
i__33471_34102 = G__34150;
continue;
} else {
var child_struct_34151 = cljs.core.first(seq__33467_34145__$1);
if((!((child_struct_34151 == null)))){
if(typeof child_struct_34151 === 'string'){
var text_34153 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34153),child_struct_34151].join(''));
} else {
var children_34154 = shadow.dom.svg_node(child_struct_34151);
if(cljs.core.seq_QMARK_(children_34154)){
var seq__33535_34156 = cljs.core.seq(children_34154);
var chunk__33537_34157 = null;
var count__33538_34158 = (0);
var i__33539_34159 = (0);
while(true){
if((i__33539_34159 < count__33538_34158)){
var child_34160 = chunk__33537_34157.cljs$core$IIndexed$_nth$arity$2(null,i__33539_34159);
if(cljs.core.truth_(child_34160)){
node.appendChild(child_34160);


var G__34161 = seq__33535_34156;
var G__34162 = chunk__33537_34157;
var G__34163 = count__33538_34158;
var G__34164 = (i__33539_34159 + (1));
seq__33535_34156 = G__34161;
chunk__33537_34157 = G__34162;
count__33538_34158 = G__34163;
i__33539_34159 = G__34164;
continue;
} else {
var G__34165 = seq__33535_34156;
var G__34166 = chunk__33537_34157;
var G__34167 = count__33538_34158;
var G__34168 = (i__33539_34159 + (1));
seq__33535_34156 = G__34165;
chunk__33537_34157 = G__34166;
count__33538_34158 = G__34167;
i__33539_34159 = G__34168;
continue;
}
} else {
var temp__5735__auto___34169__$1 = cljs.core.seq(seq__33535_34156);
if(temp__5735__auto___34169__$1){
var seq__33535_34171__$1 = temp__5735__auto___34169__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33535_34171__$1)){
var c__4556__auto___34172 = cljs.core.chunk_first(seq__33535_34171__$1);
var G__34173 = cljs.core.chunk_rest(seq__33535_34171__$1);
var G__34174 = c__4556__auto___34172;
var G__34175 = cljs.core.count(c__4556__auto___34172);
var G__34176 = (0);
seq__33535_34156 = G__34173;
chunk__33537_34157 = G__34174;
count__33538_34158 = G__34175;
i__33539_34159 = G__34176;
continue;
} else {
var child_34177 = cljs.core.first(seq__33535_34171__$1);
if(cljs.core.truth_(child_34177)){
node.appendChild(child_34177);


var G__34178 = cljs.core.next(seq__33535_34171__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__33535_34156 = G__34178;
chunk__33537_34157 = G__34179;
count__33538_34158 = G__34180;
i__33539_34159 = G__34181;
continue;
} else {
var G__34182 = cljs.core.next(seq__33535_34171__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33535_34156 = G__34182;
chunk__33537_34157 = G__34183;
count__33538_34158 = G__34184;
i__33539_34159 = G__34185;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34154);
}
}


var G__34186 = cljs.core.next(seq__33467_34145__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__33467_34099 = G__34186;
chunk__33469_34100 = G__34187;
count__33470_34101 = G__34188;
i__33471_34102 = G__34189;
continue;
} else {
var G__34192 = cljs.core.next(seq__33467_34145__$1);
var G__34193 = null;
var G__34194 = (0);
var G__34195 = (0);
seq__33467_34099 = G__34192;
chunk__33469_34100 = G__34193;
count__33470_34101 = G__34194;
i__33471_34102 = G__34195;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34200 = arguments.length;
var i__4737__auto___34201 = (0);
while(true){
if((i__4737__auto___34201 < len__4736__auto___34200)){
args__4742__auto__.push((arguments[i__4737__auto___34201]));

var G__34202 = (i__4737__auto___34201 + (1));
i__4737__auto___34201 = G__34202;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33556){
var G__33557 = cljs.core.first(seq33556);
var seq33556__$1 = cljs.core.next(seq33556);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33557,seq33556__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33566 = arguments.length;
switch (G__33566) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29687__auto___34214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (1))){
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33577__$1,(2),once_or_cleanup);
} else {
if((state_val_33578 === (2))){
var inst_33574 = (state_33577[(2)]);
var inst_33575 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33577__$1 = (function (){var statearr_33595 = state_33577;
(statearr_33595[(7)] = inst_33574);

return statearr_33595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33577__$1,inst_33575);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29549__auto__ = null;
var shadow$dom$state_machine__29549__auto____0 = (function (){
var statearr_33596 = [null,null,null,null,null,null,null,null];
(statearr_33596[(0)] = shadow$dom$state_machine__29549__auto__);

(statearr_33596[(1)] = (1));

return statearr_33596;
});
var shadow$dom$state_machine__29549__auto____1 = (function (state_33577){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_33577);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e33597){var ex__29552__auto__ = e33597;
var statearr_33598_34217 = state_33577;
(statearr_33598_34217[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_33577[(4)]))){
var statearr_33600_34218 = state_33577;
(statearr_33600_34218[(1)] = cljs.core.first((state_33577[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34220 = state_33577;
state_33577 = G__34220;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
shadow$dom$state_machine__29549__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29549__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29549__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29549__auto____0;
shadow$dom$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29549__auto____1;
return shadow$dom$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_33602 = f__29688__auto__();
(statearr_33602[(6)] = c__29687__auto___34214);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
