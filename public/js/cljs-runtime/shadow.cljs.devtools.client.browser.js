goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35421 = arguments.length;
var i__4737__auto___35422 = (0);
while(true){
if((i__4737__auto___35422 < len__4736__auto___35421)){
args__4742__auto__.push((arguments[i__4737__auto___35422]));

var G__35423 = (i__4737__auto___35422 + (1));
i__4737__auto___35422 = G__35423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35235){
var G__35236 = cljs.core.first(seq35235);
var seq35235__$1 = cljs.core.next(seq35235);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35236,seq35235__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35239 = cljs.core.seq(sources);
var chunk__35240 = null;
var count__35241 = (0);
var i__35242 = (0);
while(true){
if((i__35242 < count__35241)){
var map__35251 = chunk__35240.cljs$core$IIndexed$_nth$arity$2(null,i__35242);
var map__35251__$1 = (((((!((map__35251 == null))))?(((((map__35251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35251):map__35251);
var src = map__35251__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35256){var e_35425 = e35256;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35425);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35425.message)].join('')));
}

var G__35426 = seq__35239;
var G__35427 = chunk__35240;
var G__35428 = count__35241;
var G__35429 = (i__35242 + (1));
seq__35239 = G__35426;
chunk__35240 = G__35427;
count__35241 = G__35428;
i__35242 = G__35429;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35239);
if(temp__5735__auto__){
var seq__35239__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35239__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35239__$1);
var G__35430 = cljs.core.chunk_rest(seq__35239__$1);
var G__35431 = c__4556__auto__;
var G__35432 = cljs.core.count(c__4556__auto__);
var G__35433 = (0);
seq__35239 = G__35430;
chunk__35240 = G__35431;
count__35241 = G__35432;
i__35242 = G__35433;
continue;
} else {
var map__35258 = cljs.core.first(seq__35239__$1);
var map__35258__$1 = (((((!((map__35258 == null))))?(((((map__35258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35258):map__35258);
var src = map__35258__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35261){var e_35439 = e35261;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35439);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35439.message)].join('')));
}

var G__35440 = cljs.core.next(seq__35239__$1);
var G__35441 = null;
var G__35442 = (0);
var G__35443 = (0);
seq__35239 = G__35440;
chunk__35240 = G__35441;
count__35241 = G__35442;
i__35242 = G__35443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35265 = cljs.core.seq(js_requires);
var chunk__35266 = null;
var count__35267 = (0);
var i__35268 = (0);
while(true){
if((i__35268 < count__35267)){
var js_ns = chunk__35266.cljs$core$IIndexed$_nth$arity$2(null,i__35268);
var require_str_35444 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35444);


var G__35445 = seq__35265;
var G__35446 = chunk__35266;
var G__35447 = count__35267;
var G__35448 = (i__35268 + (1));
seq__35265 = G__35445;
chunk__35266 = G__35446;
count__35267 = G__35447;
i__35268 = G__35448;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35265);
if(temp__5735__auto__){
var seq__35265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35265__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35265__$1);
var G__35449 = cljs.core.chunk_rest(seq__35265__$1);
var G__35450 = c__4556__auto__;
var G__35451 = cljs.core.count(c__4556__auto__);
var G__35452 = (0);
seq__35265 = G__35449;
chunk__35266 = G__35450;
count__35267 = G__35451;
i__35268 = G__35452;
continue;
} else {
var js_ns = cljs.core.first(seq__35265__$1);
var require_str_35453 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35453);


var G__35454 = cljs.core.next(seq__35265__$1);
var G__35455 = null;
var G__35456 = (0);
var G__35457 = (0);
seq__35265 = G__35454;
chunk__35266 = G__35455;
count__35267 = G__35456;
i__35268 = G__35457;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35269 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35269) : callback.call(null,G__35269));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35271){
var map__35272 = p__35271;
var map__35272__$1 = (((((!((map__35272 == null))))?(((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35272):map__35272);
var msg = map__35272__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35274(s__35275){
return (new cljs.core.LazySeq(null,(function (){
var s__35275__$1 = s__35275;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35275__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35280 = cljs.core.first(xs__6292__auto__);
var map__35280__$1 = (((((!((map__35280 == null))))?(((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35280):map__35280);
var src = map__35280__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35275__$1,map__35280,map__35280__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35272,map__35272__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35274_$_iter__35276(s__35277){
return (new cljs.core.LazySeq(null,((function (s__35275__$1,map__35280,map__35280__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35272,map__35272__$1,msg,info,reload_info){
return (function (){
var s__35277__$1 = s__35277;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35277__$1);
if(temp__5735__auto____$1){
var s__35277__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35277__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35277__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35279 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35278 = (0);
while(true){
if((i__35278 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35278);
cljs.core.chunk_append(b__35279,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35458 = (i__35278 + (1));
i__35278 = G__35458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35279),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35274_$_iter__35276(cljs.core.chunk_rest(s__35277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35279),null);
}
} else {
var warning = cljs.core.first(s__35277__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35274_$_iter__35276(cljs.core.rest(s__35277__$2)));
}
} else {
return null;
}
break;
}
});})(s__35275__$1,map__35280,map__35280__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35272,map__35272__$1,msg,info,reload_info))
,null,null));
});})(s__35275__$1,map__35280,map__35280__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35272,map__35272__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35274(cljs.core.rest(s__35275__$1)));
} else {
var G__35460 = cljs.core.rest(s__35275__$1);
s__35275__$1 = G__35460;
continue;
}
} else {
var G__35462 = cljs.core.rest(s__35275__$1);
s__35275__$1 = G__35462;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35285_35463 = cljs.core.seq(warnings);
var chunk__35286_35464 = null;
var count__35287_35465 = (0);
var i__35288_35466 = (0);
while(true){
if((i__35288_35466 < count__35287_35465)){
var map__35297_35469 = chunk__35286_35464.cljs$core$IIndexed$_nth$arity$2(null,i__35288_35466);
var map__35297_35470__$1 = (((((!((map__35297_35469 == null))))?(((((map__35297_35469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297_35469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35297_35469):map__35297_35469);
var w_35471 = map__35297_35470__$1;
var msg_35473__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297_35470__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297_35470__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297_35470__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297_35470__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35476)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35474),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35475),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35473__$1)].join(''));


var G__35477 = seq__35285_35463;
var G__35478 = chunk__35286_35464;
var G__35479 = count__35287_35465;
var G__35480 = (i__35288_35466 + (1));
seq__35285_35463 = G__35477;
chunk__35286_35464 = G__35478;
count__35287_35465 = G__35479;
i__35288_35466 = G__35480;
continue;
} else {
var temp__5735__auto___35481 = cljs.core.seq(seq__35285_35463);
if(temp__5735__auto___35481){
var seq__35285_35482__$1 = temp__5735__auto___35481;
if(cljs.core.chunked_seq_QMARK_(seq__35285_35482__$1)){
var c__4556__auto___35483 = cljs.core.chunk_first(seq__35285_35482__$1);
var G__35484 = cljs.core.chunk_rest(seq__35285_35482__$1);
var G__35485 = c__4556__auto___35483;
var G__35486 = cljs.core.count(c__4556__auto___35483);
var G__35487 = (0);
seq__35285_35463 = G__35484;
chunk__35286_35464 = G__35485;
count__35287_35465 = G__35486;
i__35288_35466 = G__35487;
continue;
} else {
var map__35299_35488 = cljs.core.first(seq__35285_35482__$1);
var map__35299_35489__$1 = (((((!((map__35299_35488 == null))))?(((((map__35299_35488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35299_35488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35299_35488):map__35299_35488);
var w_35490 = map__35299_35489__$1;
var msg_35491__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299_35489__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299_35489__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299_35489__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35299_35489__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35494)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35492),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35493),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35491__$1)].join(''));


var G__35495 = cljs.core.next(seq__35285_35482__$1);
var G__35496 = null;
var G__35497 = (0);
var G__35498 = (0);
seq__35285_35463 = G__35495;
chunk__35286_35464 = G__35496;
count__35287_35465 = G__35497;
i__35288_35466 = G__35498;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35270_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35270_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35304){
var map__35305 = p__35304;
var map__35305__$1 = (((((!((map__35305 == null))))?(((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35305):map__35305);
var msg = map__35305__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35307 = cljs.core.seq(updates);
var chunk__35309 = null;
var count__35310 = (0);
var i__35311 = (0);
while(true){
if((i__35311 < count__35310)){
var path = chunk__35309.cljs$core$IIndexed$_nth$arity$2(null,i__35311);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35347_35501 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35350_35502 = null;
var count__35351_35503 = (0);
var i__35352_35504 = (0);
while(true){
if((i__35352_35504 < count__35351_35503)){
var node_35505 = chunk__35350_35502.cljs$core$IIndexed$_nth$arity$2(null,i__35352_35504);
var path_match_35506 = shadow.cljs.devtools.client.browser.match_paths(node_35505.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35506)){
var new_link_35507 = (function (){var G__35363 = node_35505.cloneNode(true);
G__35363.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35506),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35363;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35506], 0));

goog.dom.insertSiblingAfter(new_link_35507,node_35505);

goog.dom.removeNode(node_35505);


var G__35508 = seq__35347_35501;
var G__35509 = chunk__35350_35502;
var G__35510 = count__35351_35503;
var G__35511 = (i__35352_35504 + (1));
seq__35347_35501 = G__35508;
chunk__35350_35502 = G__35509;
count__35351_35503 = G__35510;
i__35352_35504 = G__35511;
continue;
} else {
var G__35512 = seq__35347_35501;
var G__35513 = chunk__35350_35502;
var G__35514 = count__35351_35503;
var G__35515 = (i__35352_35504 + (1));
seq__35347_35501 = G__35512;
chunk__35350_35502 = G__35513;
count__35351_35503 = G__35514;
i__35352_35504 = G__35515;
continue;
}
} else {
var temp__5735__auto___35516 = cljs.core.seq(seq__35347_35501);
if(temp__5735__auto___35516){
var seq__35347_35517__$1 = temp__5735__auto___35516;
if(cljs.core.chunked_seq_QMARK_(seq__35347_35517__$1)){
var c__4556__auto___35518 = cljs.core.chunk_first(seq__35347_35517__$1);
var G__35519 = cljs.core.chunk_rest(seq__35347_35517__$1);
var G__35520 = c__4556__auto___35518;
var G__35521 = cljs.core.count(c__4556__auto___35518);
var G__35522 = (0);
seq__35347_35501 = G__35519;
chunk__35350_35502 = G__35520;
count__35351_35503 = G__35521;
i__35352_35504 = G__35522;
continue;
} else {
var node_35523 = cljs.core.first(seq__35347_35517__$1);
var path_match_35524 = shadow.cljs.devtools.client.browser.match_paths(node_35523.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35524)){
var new_link_35525 = (function (){var G__35364 = node_35523.cloneNode(true);
G__35364.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35524),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35364;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35524], 0));

goog.dom.insertSiblingAfter(new_link_35525,node_35523);

goog.dom.removeNode(node_35523);


var G__35526 = cljs.core.next(seq__35347_35517__$1);
var G__35527 = null;
var G__35528 = (0);
var G__35529 = (0);
seq__35347_35501 = G__35526;
chunk__35350_35502 = G__35527;
count__35351_35503 = G__35528;
i__35352_35504 = G__35529;
continue;
} else {
var G__35530 = cljs.core.next(seq__35347_35517__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__35347_35501 = G__35530;
chunk__35350_35502 = G__35531;
count__35351_35503 = G__35532;
i__35352_35504 = G__35533;
continue;
}
}
} else {
}
}
break;
}


var G__35534 = seq__35307;
var G__35535 = chunk__35309;
var G__35536 = count__35310;
var G__35537 = (i__35311 + (1));
seq__35307 = G__35534;
chunk__35309 = G__35535;
count__35310 = G__35536;
i__35311 = G__35537;
continue;
} else {
var G__35538 = seq__35307;
var G__35539 = chunk__35309;
var G__35540 = count__35310;
var G__35541 = (i__35311 + (1));
seq__35307 = G__35538;
chunk__35309 = G__35539;
count__35310 = G__35540;
i__35311 = G__35541;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35307);
if(temp__5735__auto__){
var seq__35307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35307__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35307__$1);
var G__35542 = cljs.core.chunk_rest(seq__35307__$1);
var G__35543 = c__4556__auto__;
var G__35544 = cljs.core.count(c__4556__auto__);
var G__35545 = (0);
seq__35307 = G__35542;
chunk__35309 = G__35543;
count__35310 = G__35544;
i__35311 = G__35545;
continue;
} else {
var path = cljs.core.first(seq__35307__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35366_35546 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35369_35547 = null;
var count__35370_35548 = (0);
var i__35371_35549 = (0);
while(true){
if((i__35371_35549 < count__35370_35548)){
var node_35550 = chunk__35369_35547.cljs$core$IIndexed$_nth$arity$2(null,i__35371_35549);
var path_match_35551 = shadow.cljs.devtools.client.browser.match_paths(node_35550.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35551)){
var new_link_35552 = (function (){var G__35376 = node_35550.cloneNode(true);
G__35376.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35551),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35376;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35551], 0));

goog.dom.insertSiblingAfter(new_link_35552,node_35550);

goog.dom.removeNode(node_35550);


var G__35553 = seq__35366_35546;
var G__35554 = chunk__35369_35547;
var G__35555 = count__35370_35548;
var G__35556 = (i__35371_35549 + (1));
seq__35366_35546 = G__35553;
chunk__35369_35547 = G__35554;
count__35370_35548 = G__35555;
i__35371_35549 = G__35556;
continue;
} else {
var G__35557 = seq__35366_35546;
var G__35558 = chunk__35369_35547;
var G__35559 = count__35370_35548;
var G__35560 = (i__35371_35549 + (1));
seq__35366_35546 = G__35557;
chunk__35369_35547 = G__35558;
count__35370_35548 = G__35559;
i__35371_35549 = G__35560;
continue;
}
} else {
var temp__5735__auto___35561__$1 = cljs.core.seq(seq__35366_35546);
if(temp__5735__auto___35561__$1){
var seq__35366_35562__$1 = temp__5735__auto___35561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35366_35562__$1)){
var c__4556__auto___35563 = cljs.core.chunk_first(seq__35366_35562__$1);
var G__35564 = cljs.core.chunk_rest(seq__35366_35562__$1);
var G__35565 = c__4556__auto___35563;
var G__35566 = cljs.core.count(c__4556__auto___35563);
var G__35567 = (0);
seq__35366_35546 = G__35564;
chunk__35369_35547 = G__35565;
count__35370_35548 = G__35566;
i__35371_35549 = G__35567;
continue;
} else {
var node_35568 = cljs.core.first(seq__35366_35562__$1);
var path_match_35569 = shadow.cljs.devtools.client.browser.match_paths(node_35568.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35569)){
var new_link_35570 = (function (){var G__35379 = node_35568.cloneNode(true);
G__35379.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35569),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35379;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35569], 0));

goog.dom.insertSiblingAfter(new_link_35570,node_35568);

goog.dom.removeNode(node_35568);


var G__35571 = cljs.core.next(seq__35366_35562__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35366_35546 = G__35571;
chunk__35369_35547 = G__35572;
count__35370_35548 = G__35573;
i__35371_35549 = G__35574;
continue;
} else {
var G__35575 = cljs.core.next(seq__35366_35562__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__35366_35546 = G__35575;
chunk__35369_35547 = G__35576;
count__35370_35548 = G__35577;
i__35371_35549 = G__35578;
continue;
}
}
} else {
}
}
break;
}


var G__35579 = cljs.core.next(seq__35307__$1);
var G__35580 = null;
var G__35581 = (0);
var G__35582 = (0);
seq__35307 = G__35579;
chunk__35309 = G__35580;
count__35310 = G__35581;
i__35311 = G__35582;
continue;
} else {
var G__35583 = cljs.core.next(seq__35307__$1);
var G__35584 = null;
var G__35585 = (0);
var G__35586 = (0);
seq__35307 = G__35583;
chunk__35309 = G__35584;
count__35310 = G__35585;
i__35311 = G__35586;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35380){
var map__35381 = p__35380;
var map__35381__$1 = (((((!((map__35381 == null))))?(((((map__35381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35381):map__35381);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35383,done){
var map__35384 = p__35383;
var map__35384__$1 = (((((!((map__35384 == null))))?(((((map__35384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35384):map__35384);
var msg = map__35384__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35384__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35386){
var map__35387 = p__35386;
var map__35387__$1 = (((((!((map__35387 == null))))?(((((map__35387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35387):map__35387);
var src = map__35387__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35387__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35389){var e = e35389;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35390,done){
var map__35391 = p__35390;
var map__35391__$1 = (((((!((map__35391 == null))))?(((((map__35391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35391):map__35391);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35393){
var map__35394 = p__35393;
var map__35394__$1 = (((((!((map__35394 == null))))?(((((map__35394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35394):map__35394);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35394__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35398,done){
var map__35399 = p__35398;
var map__35399__$1 = (((((!((map__35399 == null))))?(((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35399):map__35399);
var msg = map__35399__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35401_35591 = type;
var G__35401_35592__$1 = (((G__35401_35591 instanceof cljs.core.Keyword))?G__35401_35591.fqn:null);
switch (G__35401_35592__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35410 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35410.cljs$core$IFn$_invoke$arity$1 ? fexpr__35410.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35410.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35412){var e = e35412;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35597 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35597)){
var s_35598 = temp__5735__auto___35597;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35598.onclose = (function (e){
return null;
}));

s_35598.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
