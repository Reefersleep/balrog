goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36662){
var map__36663 = p__36662;
var map__36663__$1 = (((((!((map__36663 == null))))?(((((map__36663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36663):map__36663);
var m = map__36663__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36666_36878 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36667_36879 = null;
var count__36668_36880 = (0);
var i__36669_36881 = (0);
while(true){
if((i__36669_36881 < count__36668_36880)){
var f_36882 = chunk__36667_36879.cljs$core$IIndexed$_nth$arity$2(null,i__36669_36881);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36882], 0));


var G__36883 = seq__36666_36878;
var G__36884 = chunk__36667_36879;
var G__36885 = count__36668_36880;
var G__36886 = (i__36669_36881 + (1));
seq__36666_36878 = G__36883;
chunk__36667_36879 = G__36884;
count__36668_36880 = G__36885;
i__36669_36881 = G__36886;
continue;
} else {
var temp__5735__auto___36887 = cljs.core.seq(seq__36666_36878);
if(temp__5735__auto___36887){
var seq__36666_36888__$1 = temp__5735__auto___36887;
if(cljs.core.chunked_seq_QMARK_(seq__36666_36888__$1)){
var c__4556__auto___36889 = cljs.core.chunk_first(seq__36666_36888__$1);
var G__36890 = cljs.core.chunk_rest(seq__36666_36888__$1);
var G__36891 = c__4556__auto___36889;
var G__36892 = cljs.core.count(c__4556__auto___36889);
var G__36893 = (0);
seq__36666_36878 = G__36890;
chunk__36667_36879 = G__36891;
count__36668_36880 = G__36892;
i__36669_36881 = G__36893;
continue;
} else {
var f_36894 = cljs.core.first(seq__36666_36888__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36894], 0));


var G__36895 = cljs.core.next(seq__36666_36888__$1);
var G__36896 = null;
var G__36897 = (0);
var G__36898 = (0);
seq__36666_36878 = G__36895;
chunk__36667_36879 = G__36896;
count__36668_36880 = G__36897;
i__36669_36881 = G__36898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36899], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36899)))?cljs.core.second(arglists_36899):arglists_36899)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36674_36901 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36675_36902 = null;
var count__36676_36903 = (0);
var i__36677_36904 = (0);
while(true){
if((i__36677_36904 < count__36676_36903)){
var vec__36690_36905 = chunk__36675_36902.cljs$core$IIndexed$_nth$arity$2(null,i__36677_36904);
var name_36906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36690_36905,(0),null);
var map__36693_36907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36690_36905,(1),null);
var map__36693_36908__$1 = (((((!((map__36693_36907 == null))))?(((((map__36693_36907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36693_36907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36693_36907):map__36693_36907);
var doc_36909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693_36908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36693_36908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36906], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36910], 0));

if(cljs.core.truth_(doc_36909)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36909], 0));
} else {
}


var G__36911 = seq__36674_36901;
var G__36912 = chunk__36675_36902;
var G__36913 = count__36676_36903;
var G__36914 = (i__36677_36904 + (1));
seq__36674_36901 = G__36911;
chunk__36675_36902 = G__36912;
count__36676_36903 = G__36913;
i__36677_36904 = G__36914;
continue;
} else {
var temp__5735__auto___36915 = cljs.core.seq(seq__36674_36901);
if(temp__5735__auto___36915){
var seq__36674_36916__$1 = temp__5735__auto___36915;
if(cljs.core.chunked_seq_QMARK_(seq__36674_36916__$1)){
var c__4556__auto___36917 = cljs.core.chunk_first(seq__36674_36916__$1);
var G__36918 = cljs.core.chunk_rest(seq__36674_36916__$1);
var G__36919 = c__4556__auto___36917;
var G__36920 = cljs.core.count(c__4556__auto___36917);
var G__36921 = (0);
seq__36674_36901 = G__36918;
chunk__36675_36902 = G__36919;
count__36676_36903 = G__36920;
i__36677_36904 = G__36921;
continue;
} else {
var vec__36695_36922 = cljs.core.first(seq__36674_36916__$1);
var name_36923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695_36922,(0),null);
var map__36698_36924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695_36922,(1),null);
var map__36698_36925__$1 = (((((!((map__36698_36924 == null))))?(((((map__36698_36924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36698_36924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36698_36924):map__36698_36924);
var doc_36926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36698_36925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36698_36925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36923], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36927], 0));

if(cljs.core.truth_(doc_36926)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36926], 0));
} else {
}


var G__36928 = cljs.core.next(seq__36674_36916__$1);
var G__36929 = null;
var G__36930 = (0);
var G__36931 = (0);
seq__36674_36901 = G__36928;
chunk__36675_36902 = G__36929;
count__36676_36903 = G__36930;
i__36677_36904 = G__36931;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36702 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36703 = null;
var count__36704 = (0);
var i__36705 = (0);
while(true){
if((i__36705 < count__36704)){
var role = chunk__36703.cljs$core$IIndexed$_nth$arity$2(null,i__36705);
var temp__5735__auto___36932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36932__$1)){
var spec_36933 = temp__5735__auto___36932__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36933)], 0));
} else {
}


var G__36934 = seq__36702;
var G__36935 = chunk__36703;
var G__36936 = count__36704;
var G__36937 = (i__36705 + (1));
seq__36702 = G__36934;
chunk__36703 = G__36935;
count__36704 = G__36936;
i__36705 = G__36937;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36702);
if(temp__5735__auto____$1){
var seq__36702__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36702__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36702__$1);
var G__36938 = cljs.core.chunk_rest(seq__36702__$1);
var G__36939 = c__4556__auto__;
var G__36940 = cljs.core.count(c__4556__auto__);
var G__36941 = (0);
seq__36702 = G__36938;
chunk__36703 = G__36939;
count__36704 = G__36940;
i__36705 = G__36941;
continue;
} else {
var role = cljs.core.first(seq__36702__$1);
var temp__5735__auto___36942__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36942__$2)){
var spec_36943 = temp__5735__auto___36942__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36943)], 0));
} else {
}


var G__36944 = cljs.core.next(seq__36702__$1);
var G__36945 = null;
var G__36946 = (0);
var G__36947 = (0);
seq__36702 = G__36944;
chunk__36703 = G__36945;
count__36704 = G__36946;
i__36705 = G__36947;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36949 = cljs.core.ex_cause(t);
via = G__36948;
t = G__36949;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36728 = datafied_throwable;
var map__36728__$1 = (((((!((map__36728 == null))))?(((((map__36728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36728):map__36728);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36728__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36729 = cljs.core.last(via);
var map__36729__$1 = (((((!((map__36729 == null))))?(((((map__36729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36729):map__36729);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36730 = data;
var map__36730__$1 = (((((!((map__36730 == null))))?(((((map__36730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36730):map__36730);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36730__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36730__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36730__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36731 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36731__$1 = (((((!((map__36731 == null))))?(((((map__36731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36731):map__36731);
var top_data = map__36731__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36731__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36743 = phase;
var G__36743__$1 = (((G__36743 instanceof cljs.core.Keyword))?G__36743.fqn:null);
switch (G__36743__$1) {
case "read-source":
var map__36744 = data;
var map__36744__$1 = (((((!((map__36744 == null))))?(((((map__36744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36744):map__36744);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36753__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36753,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36753);
var G__36753__$2 = (cljs.core.truth_((function (){var fexpr__36761 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36761.cljs$core$IFn$_invoke$arity$1 ? fexpr__36761.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36761.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36753__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36753__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36753__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36753__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36762 = top_data;
var G__36762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36762);
var G__36762__$2 = (cljs.core.truth_((function (){var fexpr__36763 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36763.cljs$core$IFn$_invoke$arity$1 ? fexpr__36763.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36763.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36762__$1);
var G__36762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36762__$2);
var G__36762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(3),null);
var G__36778 = top_data;
var G__36778__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36778);
var G__36778__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36778__$1);
var G__36778__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36778__$2);
var G__36778__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36778__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36778__$4;
}

break;
case "execution":
var vec__36792 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36718_SHARP_){
var or__4126__auto__ = (p1__36718_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36796.cljs$core$IFn$_invoke$arity$1 ? fexpr__36796.cljs$core$IFn$_invoke$arity$1(p1__36718_SHARP_) : fexpr__36796.call(null,p1__36718_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36804 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36804__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36804,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36804);
var G__36804__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36804__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36804__$1);
var G__36804__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36804__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36804__$2);
var G__36804__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36804__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36804__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36804__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36804__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36743__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36829){
var map__36830 = p__36829;
var map__36830__$1 = (((((!((map__36830 == null))))?(((((map__36830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36830):map__36830);
var triage_data = map__36830__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36830__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36837 = phase;
var G__36837__$1 = (((G__36837 instanceof cljs.core.Keyword))?G__36837.fqn:null);
switch (G__36837__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36840 = loc;
var G__36841 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36842_36960 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36843_36961 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36844_36962 = true;
var _STAR_print_fn_STAR__temp_val__36845_36963 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36844_36962);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36845_36963);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36819_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36819_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36843_36961);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36842_36960);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36838,G__36839,G__36840,G__36841) : format.call(null,G__36838,G__36839,G__36840,G__36841));

break;
case "macroexpansion":
var G__36847 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36848 = cause_type;
var G__36849 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36850 = loc;
var G__36851 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36847,G__36848,G__36849,G__36850,G__36851) : format.call(null,G__36847,G__36848,G__36849,G__36850,G__36851));

break;
case "compile-syntax-check":
var G__36852 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36853 = cause_type;
var G__36854 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36855 = loc;
var G__36856 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36852,G__36853,G__36854,G__36855,G__36856) : format.call(null,G__36852,G__36853,G__36854,G__36855,G__36856));

break;
case "compilation":
var G__36857 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36858 = cause_type;
var G__36859 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36860 = loc;
var G__36861 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36857,G__36858,G__36859,G__36860,G__36861) : format.call(null,G__36857,G__36858,G__36859,G__36860,G__36861));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36862 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36863 = symbol;
var G__36864 = loc;
var G__36865 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36866_36965 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36867_36966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36868_36967 = true;
var _STAR_print_fn_STAR__temp_val__36869_36968 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36868_36967);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36869_36968);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36824_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36824_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36867_36966);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36866_36965);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36862,G__36863,G__36864,G__36865) : format.call(null,G__36862,G__36863,G__36864,G__36865));
} else {
var G__36871 = "Execution error%s at %s(%s).\n%s\n";
var G__36872 = cause_type;
var G__36873 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36874 = loc;
var G__36875 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36871,G__36872,G__36873,G__36874,G__36875) : format.call(null,G__36871,G__36872,G__36873,G__36874,G__36875));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36837__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
