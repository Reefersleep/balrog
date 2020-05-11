goog.provide('hx.react');
goog.require('cljs.core');
goog.require('goog.object');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('hx.hiccup');
goog.require('hx.utils');
hx.react.props__GT_clj = hx.utils.props__GT_clj;
hx.react.props = (function hx$react$props(el,first_arg,props_QMARK_){
if(cljs.core.truth_(((typeof el === 'string')?props_QMARK_:false))){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$1(first_arg);
} else {
if(cljs.core.truth_(props_QMARK_)){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$2(first_arg,false);
} else {
return null;

}
}
});
hx.react.fn_as_child = (function hx$react$fn_as_child(config,first_child,args){
return (function() { 
var G__27040__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__27040 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__27041__i = 0, G__27041__a = new Array(arguments.length -  0);
while (G__27041__i < G__27041__a.length) {G__27041__a[G__27041__i] = arguments[G__27041__i + 0]; ++G__27041__i;}
  args__$1 = new cljs.core.IndexedSeq(G__27041__a,0,null);
} 
return G__27040__delegate.call(this,args__$1);};
G__27040.cljs$lang$maxFixedArity = 0;
G__27040.cljs$lang$applyTo = (function (arglist__27042){
var args__$1 = cljs.core.seq(arglist__27042);
return G__27040__delegate(args__$1);
});
G__27040.cljs$core$IFn$_invoke$arity$variadic = G__27040__delegate;
return G__27040;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__26995 = cljs.core.count(children);
switch (G__26995) {
case (0):
return module$node_modules$react$index.createElement(el,props);

break;
case (1):
if(goog.isFunction(first_child)){
return module$node_modules$react$index.createElement(el,props,hx.react.fn_as_child(config,first_child,args));
} else {
return module$node_modules$react$index.createElement(el,props,hx.hiccup._as_element(first_child,config));
}

break;
default:
return module$node_modules$react$index.createElement.apply(null,(function (){var a = [el,props];
var c = children;
while(true){
if((!((c == null)))){
a.push(hx.hiccup._as_element(cljs.core._first(c),config));

var G__27044 = a;
var G__27045 = cljs.core._next(c);
a = G__27044;
c = G__27045;
continue;
} else {
return a;
}
break;
}
})());

}
});
hx.react.react_hiccup_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-element","create-element",193243064),hx.react.create_element,new cljs.core.Keyword(null,"is-element?","is-element?",-1231778016),module$node_modules$react$index.isValidElement,new cljs.core.Keyword(null,"fragment","fragment",826775688),module$node_modules$react$index.Fragment], null);
hx.react.f = (function hx$react$f(form){
return hx.hiccup.parse(hx.react.react_hiccup_config,form);
});
hx.react.parse_body = (function hx$react$parse_body(body){
if(cljs.core.vector_QMARK_(body)){
return hx.react.f(body);
} else {
return body;
}
});
hx.react.fragment = module$node_modules$react$index.Fragment;
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"<>","<>",1280186386),hx.react.fragment);
hx.react.Provider = (function hx$react$Provider(props__26968__auto__,maybe_ref__26969__auto__){
var vec__26997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26968__auto__) : hx.react.props__GT_clj.call(null,props__26968__auto__)),maybe_ref__26969__auto__], null);
var map__27000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26997,(0),null);
var map__27000__$1 = (((((!((map__27000 == null))))?(((((map__27000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27000):map__27000);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27058 = arguments.length;
var i__4737__auto___27059 = (0);
while(true){
if((i__4737__auto___27059 < len__4736__auto___27058)){
args__4742__auto__.push((arguments[i__4737__auto___27059]));

var G__27060 = (i__4737__auto___27059 + (1));
i__4737__auto___27059 = G__27060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return hx.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(hx.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,args){
return hx.hiccup.make_element(hx.react.react_hiccup_config,el,args);
}));

(hx.react.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hx.react.$.cljs$lang$applyTo = (function (seq27002){
var G__27003 = cljs.core.first(seq27002);
var seq27002__$1 = cljs.core.next(seq27002);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27003,seq27002__$1);
}));

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__27004_27062 = cljs.core.seq(method_map);
var chunk__27005_27063 = null;
var count__27006_27064 = (0);
var i__27007_27065 = (0);
while(true){
if((i__27007_27065 < count__27006_27064)){
var vec__27014_27066 = chunk__27005_27063.cljs$core$IIndexed$_nth$arity$2(null,i__27007_27065);
var method_name_27067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27014_27066,(0),null);
var method_fn_27068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27014_27066,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_27067)),method_fn_27068);


var G__27069 = seq__27004_27062;
var G__27070 = chunk__27005_27063;
var G__27071 = count__27006_27064;
var G__27072 = (i__27007_27065 + (1));
seq__27004_27062 = G__27069;
chunk__27005_27063 = G__27070;
count__27006_27064 = G__27071;
i__27007_27065 = G__27072;
continue;
} else {
var temp__5735__auto___27073 = cljs.core.seq(seq__27004_27062);
if(temp__5735__auto___27073){
var seq__27004_27074__$1 = temp__5735__auto___27073;
if(cljs.core.chunked_seq_QMARK_(seq__27004_27074__$1)){
var c__4556__auto___27075 = cljs.core.chunk_first(seq__27004_27074__$1);
var G__27076 = cljs.core.chunk_rest(seq__27004_27074__$1);
var G__27077 = c__4556__auto___27075;
var G__27078 = cljs.core.count(c__4556__auto___27075);
var G__27079 = (0);
seq__27004_27062 = G__27076;
chunk__27005_27063 = G__27077;
count__27006_27064 = G__27078;
i__27007_27065 = G__27079;
continue;
} else {
var vec__27017_27080 = cljs.core.first(seq__27004_27074__$1);
var method_name_27081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017_27080,(0),null);
var method_fn_27082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017_27080,(1),null);
goog.object.set(class$.prototype,cljs.core.munge(cljs.core.name(method_name_27081)),method_fn_27082);


var G__27083 = cljs.core.next(seq__27004_27074__$1);
var G__27084 = null;
var G__27085 = (0);
var G__27086 = (0);
seq__27004_27062 = G__27083;
chunk__27005_27063 = G__27084;
count__27006_27064 = G__27085;
i__27007_27065 = G__27086;
continue;
}
} else {
}
}
break;
}

return class$;
});
hx.react.create_class = (function hx$react$create_class(super_class,init_fn,static_properties,method_names){
var ctor = (function (props){
var this$ = this;
var seq__27020_27087 = cljs.core.seq(method_names);
var chunk__27021_27088 = null;
var count__27022_27089 = (0);
var i__27023_27090 = (0);
while(true){
if((i__27023_27090 < count__27022_27089)){
var method_27091 = chunk__27021_27088.cljs$core$IIndexed$_nth$arity$2(null,i__27023_27090);
goog.object.set(this$,cljs.core.munge(method_27091),goog.object.get(this$,cljs.core.munge(method_27091)).bind(this$));


var G__27092 = seq__27020_27087;
var G__27093 = chunk__27021_27088;
var G__27094 = count__27022_27089;
var G__27095 = (i__27023_27090 + (1));
seq__27020_27087 = G__27092;
chunk__27021_27088 = G__27093;
count__27022_27089 = G__27094;
i__27023_27090 = G__27095;
continue;
} else {
var temp__5735__auto___27096 = cljs.core.seq(seq__27020_27087);
if(temp__5735__auto___27096){
var seq__27020_27097__$1 = temp__5735__auto___27096;
if(cljs.core.chunked_seq_QMARK_(seq__27020_27097__$1)){
var c__4556__auto___27098 = cljs.core.chunk_first(seq__27020_27097__$1);
var G__27099 = cljs.core.chunk_rest(seq__27020_27097__$1);
var G__27100 = c__4556__auto___27098;
var G__27101 = cljs.core.count(c__4556__auto___27098);
var G__27102 = (0);
seq__27020_27087 = G__27099;
chunk__27021_27088 = G__27100;
count__27022_27089 = G__27101;
i__27023_27090 = G__27102;
continue;
} else {
var method_27103 = cljs.core.first(seq__27020_27097__$1);
goog.object.set(this$,cljs.core.munge(method_27103),goog.object.get(this$,cljs.core.munge(method_27103)).bind(this$));


var G__27104 = cljs.core.next(seq__27020_27097__$1);
var G__27105 = null;
var G__27106 = (0);
var G__27107 = (0);
seq__27020_27087 = G__27104;
chunk__27021_27088 = G__27105;
count__27022_27089 = G__27106;
i__27023_27090 = G__27107;
continue;
}
} else {
}
}
break;
}

return (init_fn.cljs$core$IFn$_invoke$arity$2 ? init_fn.cljs$core$IFn$_invoke$arity$2(this$,props) : init_fn.call(null,this$,props));
});
goog.inherits(ctor,super_class);

var seq__27024_27109 = cljs.core.seq(static_properties);
var chunk__27025_27110 = null;
var count__27026_27111 = (0);
var i__27027_27112 = (0);
while(true){
if((i__27027_27112 < count__27026_27111)){
var vec__27034_27113 = chunk__27025_27110.cljs$core$IIndexed$_nth$arity$2(null,i__27027_27112);
var k_27114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27034_27113,(0),null);
var v_27115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27034_27113,(1),null);
goog.object.set(ctor,k_27114,v_27115);


var G__27116 = seq__27024_27109;
var G__27117 = chunk__27025_27110;
var G__27118 = count__27026_27111;
var G__27119 = (i__27027_27112 + (1));
seq__27024_27109 = G__27116;
chunk__27025_27110 = G__27117;
count__27026_27111 = G__27118;
i__27027_27112 = G__27119;
continue;
} else {
var temp__5735__auto___27121 = cljs.core.seq(seq__27024_27109);
if(temp__5735__auto___27121){
var seq__27024_27122__$1 = temp__5735__auto___27121;
if(cljs.core.chunked_seq_QMARK_(seq__27024_27122__$1)){
var c__4556__auto___27123 = cljs.core.chunk_first(seq__27024_27122__$1);
var G__27124 = cljs.core.chunk_rest(seq__27024_27122__$1);
var G__27125 = c__4556__auto___27123;
var G__27126 = cljs.core.count(c__4556__auto___27123);
var G__27127 = (0);
seq__27024_27109 = G__27124;
chunk__27025_27110 = G__27125;
count__27026_27111 = G__27126;
i__27027_27112 = G__27127;
continue;
} else {
var vec__27037_27128 = cljs.core.first(seq__27024_27122__$1);
var k_27129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27037_27128,(0),null);
var v_27130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27037_27128,(1),null);
goog.object.set(ctor,k_27129,v_27130);


var G__27131 = cljs.core.next(seq__27024_27122__$1);
var G__27132 = null;
var G__27133 = (0);
var G__27134 = (0);
seq__27024_27109 = G__27131;
chunk__27025_27110 = G__27132;
count__27026_27111 = G__27133;
i__27027_27112 = G__27134;
continue;
}
} else {
}
}
break;
}

return ctor;
});
hx.react.create_component = (function hx$react$create_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.Component,init_fn,static_properties,method_names);
});
hx.react.create_pure_component = (function hx$react$create_pure_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.PureComponent,init_fn,static_properties,method_names);
});
/**
 * Just react/createContext
 */
hx.react.create_context = module$node_modules$react$index.createContext;
/**
 * Takes a React component, and creates a function that returns
 *   a new React element
 */
hx.react.factory = (function hx$react$factory(component){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hx.react.$,component);
});

//# sourceMappingURL=hx.react.js.map
