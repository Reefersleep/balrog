goog.provide('app.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('hx.react');
goog.require('hx.hooks');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react_dnd_cjs$lib$index=shadow.js.require("module$node_modules$react_dnd_cjs$lib$index", {});
var module$node_modules$react_dnd_html5_backend$dist$cjs$index=shadow.js.require("module$node_modules$react_dnd_html5_backend$dist$cjs$index", {});
app.main.Knight = (function app$main$Knight(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
return hx.react.parse_body((function (){var vec__32269 = module$node_modules$react_dnd_cjs$lib$index.useDrag(({"item": ({"type": "knight"}), "collect": (function (monitor){
return ({"isDragging": (monitor.isDragging.cljs$core$IFn$_invoke$arity$0 ? monitor.isDragging.cljs$core$IFn$_invoke$arity$0() : monitor.isDragging.call(null))});
})}));
var map__32272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(0),null);
var map__32272__$1 = (((((!((map__32272 == null))))?(((((map__32272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32272):map__32272);
var isDragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,new cljs.core.Keyword(null,"isDragging","isDragging",1575128704));
var drag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),drag,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(isDragging)?0.5:(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(50),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null)], null),"\u2658"], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.Knight,"displayName","app.main/Knight");
} else {
}
app.main.Square = (function app$main$Square(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
var map__32278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32275,(0),null);
var map__32278__$1 = (((((!((map__32278 == null))))?(((((map__32278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32278):map__32278);
var black = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32278__$1,new cljs.core.Keyword(null,"black","black",1294279647));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(black)?"black":"white"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(black)?"white":"black")], null)], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.Square,"displayName","app.main/Square");
} else {
}
app.main.BoardSquare = (function app$main$BoardSquare(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
var map__32284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32281,(0),null);
var map__32284__$1 = (((((!((map__32284 == null))))?(((((map__32284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32284):map__32284);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32284__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var moveKnight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32284__$1,new cljs.core.Keyword(null,"moveKnight","moveKnight",1742096963));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body((function (){var vec__32286 = module$node_modules$react_dnd_cjs$lib$index.useDrop(({"accept": "knight", "drop": (function (){
return (moveKnight.cljs$core$IFn$_invoke$arity$1 ? moveKnight.cljs$core$IFn$_invoke$arity$1(position) : moveKnight.call(null,position));
}), "collect": (function (monitor){
if(cljs.core.truth_((monitor.isOver.cljs$core$IFn$_invoke$arity$0 ? monitor.isOver.cljs$core$IFn$_invoke$arity$0() : monitor.isOver.call(null)))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["it's true!"], 0));
} else {
}

return ({"isOver": (monitor.isOver.cljs$core$IFn$_invoke$arity$0 ? monitor.isOver.cljs$core$IFn$_invoke$arity$0() : monitor.isOver.call(null))});
})}));
var map__32289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(0),null);
var map__32289__$1 = (((((!((map__32289 == null))))?(((((map__32289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32289):map__32289);
var isOver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32289__$1,new cljs.core.Keyword(null,"isOver","isOver",124719126));
var drop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(1),null);
var black = cljs.core.odd_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,position));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),drop,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.Square,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"black","black",1294279647),black], null),children], null),(cljs.core.truth_(isOver)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow"], null)], null)], null):null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.BoardSquare,"displayName","app.main/BoardSquare");
} else {
}
app.main.renderPiece = (function app$main$renderPiece(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
var map__32295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(0),null);
var map__32295__$1 = (((((!((map__32295 == null))))?(((((map__32295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32295):map__32295);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var knightPosition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243));
return hx.react.parse_body(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,knightPosition))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.Knight], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),"empty"], null)));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.renderPiece,"displayName","app.main/renderPiece");
} else {
}
app.main.renderSquare = (function app$main$renderSquare(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
var map__32301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32298,(0),null);
var map__32301__$1 = (((((!((map__32301 == null))))?(((((map__32301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32301):map__32301);
var moveKnight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301__$1,new cljs.core.Keyword(null,"moveKnight","moveKnight",1742096963));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var knightPosition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301__$1,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243));
return hx.react.parse_body((function (){var x = cljs.core.rem(i,(8));
var y = Math.floor((i / (8)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"12.5%",new cljs.core.Keyword(null,"height","height",1025178622),"12.5%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.BoardSquare,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"moveKnight","moveKnight",1742096963),moveKnight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.renderPiece,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),knightPosition], null)], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.renderSquare,"displayName","app.main/renderSquare");
} else {
}
app.main.Board = (function app$main$Board(props__26811__auto__,maybe_ref__26812__auto__){
var vec__32304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26811__auto__) : hx.react.props__GT_clj.call(null,props__26811__auto__)),maybe_ref__26812__auto__], null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32304,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_dnd_cjs$lib$index.DndProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backend","backend",-847489124),goog.object.get(module$node_modules$react_dnd_html5_backend$dist$cjs$index,"default")], null),(function (){var vec__32307 = hx.hooks.useState.cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32307,(0),null);
var update_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32307,(1),null);
var squares = (function (){var iter__4529__auto__ = (function app$main$Board_$_iter__32310(s__32311){
return (new cljs.core.LazySeq(null,(function (){
var s__32311__$1 = s__32311;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32311__$1);
if(temp__5735__auto__){
var s__32311__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32311__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32311__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32313 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32312 = (0);
while(true){
if((i__32312 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__32312);
cljs.core.chunk_append(b__32313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.renderSquare,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"moveKnight","moveKnight",1742096963),((function (i__32312,i,c__4527__auto__,size__4528__auto__,b__32313,s__32311__$2,temp__5735__auto__,vec__32307,state__$1,update_state,vec__32304,state){
return (function (position){
var G__32314 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),position);
return (update_state.cljs$core$IFn$_invoke$arity$1 ? update_state.cljs$core$IFn$_invoke$arity$1(G__32314) : update_state.call(null,G__32314));
});})(i__32312,i,c__4527__auto__,size__4528__auto__,b__32313,s__32311__$2,temp__5735__auto__,vec__32307,state__$1,update_state,vec__32304,state))
], null)], null));

var G__32316 = (i__32312 + (1));
i__32312 = G__32316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32313),app$main$Board_$_iter__32310(cljs.core.chunk_rest(s__32311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32313),null);
}
} else {
var i = cljs.core.first(s__32311__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.renderSquare,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"moveKnight","moveKnight",1742096963),((function (i,s__32311__$2,temp__5735__auto__,vec__32307,state__$1,update_state,vec__32304,state){
return (function (position){
var G__32315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),position);
return (update_state.cljs$core$IFn$_invoke$arity$1 ? update_state.cljs$core$IFn$_invoke$arity$1(G__32315) : update_state.call(null,G__32315));
});})(i,s__32311__$2,temp__5735__auto__,vec__32307,state__$1,update_state,vec__32304,state))
], null)], null),app$main$Board_$_iter__32310(cljs.core.rest(s__32311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((64)));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null),squares], null);
})()], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(app.main.Board,"displayName","app.main/Board");
} else {
}
app.main.on_reload = (function app$main$on_reload(){
return module$node_modules$react_dom$index.render(hx.react.f(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"knightPosition","knightPosition",467945243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)),document.getElementById("app"));
});
app.main.init = (function app$main$init(){
return app.main.on_reload();
});
goog.exportSymbol('app.main.init', app.main.init);

//# sourceMappingURL=app.main.js.map
