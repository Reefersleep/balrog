goog.provide('app.main');
goog.require('cljs.core');
goog.require('reagent.core');
app.main.app = (function app$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"600px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"hi"], null)], null);
});
app.main.start = (function app$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.app], null),document.getElementById("app"));
});
app.main.init = (function app$main$init(){
return app.main.start();
});
goog.exportSymbol('app.main.init', app.main.init);

//# sourceMappingURL=app.main.js.map
