goog.provide('hx.hooks');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('goog.object');
/**
 * Like `React.useState`, but the update function returned can be used similar
 *   to `swap!`.
 * 
 *   Example:
 *   ```
 *   (let [[state set-state] (useState {:count 0})]
 * ;; ...
 * (set-state update :count inc))
 *   ```
 * 
 *   If `eq?` is passed in, will use that function to determine whether to update
 *   the React state. If it returns `true`, it will keep the old state, `false` it
 *   will render with new state.
 */
hx.hooks.useState = (function hx$hooks$useState(var_args){
var G__26849 = arguments.length;
switch (G__26849) {
case 1:
return hx.hooks.useState.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useState.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useState.cljs$core$IFn$_invoke$arity$1 = (function (initial){
var vec__26851 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851,(1),null);
var updater = module$node_modules$react$index.useCallback((function() {
var hx$hooks$updater = null;
var hx$hooks$updater__1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var hx$hooks$updater__2 = (function() { 
var G__26911__delegate = function (f,xs){
return hx$hooks$updater.cljs$core$IFn$_invoke$arity$1((function hx$hooks$updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
}));
};
var G__26911 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__26912__i = 0, G__26912__a = new Array(arguments.length -  1);
while (G__26912__i < G__26912__a.length) {G__26912__a[G__26912__i] = arguments[G__26912__i + 1]; ++G__26912__i;}
  xs = new cljs.core.IndexedSeq(G__26912__a,0,null);
} 
return G__26911__delegate.call(this,f,xs);};
G__26911.cljs$lang$maxFixedArity = 1;
G__26911.cljs$lang$applyTo = (function (arglist__26913){
var f = cljs.core.first(arglist__26913);
var xs = cljs.core.rest(arglist__26913);
return G__26911__delegate(f,xs);
});
G__26911.cljs$core$IFn$_invoke$arity$variadic = G__26911__delegate;
return G__26911;
})()
;
hx$hooks$updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return hx$hooks$updater__1.call(this,f);
default:
var G__26914 = null;
if (arguments.length > 1) {
var G__26915__i = 0, G__26915__a = new Array(arguments.length -  1);
while (G__26915__i < G__26915__a.length) {G__26915__a[G__26915__i] = arguments[G__26915__i + 1]; ++G__26915__i;}
G__26914 = new cljs.core.IndexedSeq(G__26915__a,0,null);
}
return hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hx$hooks$updater.cljs$lang$maxFixedArity = 1;
hx$hooks$updater.cljs$lang$applyTo = hx$hooks$updater__2.cljs$lang$applyTo;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$1 = hx$hooks$updater__1;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$variadic = hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic;
return hx$hooks$updater;
})()
,[u]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
}));

(hx.hooks.useState.cljs$core$IFn$_invoke$arity$2 = (function (initial,eq_QMARK_){
var vec__26855 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(1),null);
var updater = module$node_modules$react$index.useCallback((function() {
var hx$hooks$updater = null;
var hx$hooks$updater__1 = (function (x){
if((!(cljs.core.ifn_QMARK_(x)))){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
} else {
var G__26858 = (function hx$hooks$updater_$_update(current_state){
var new_state = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(current_state) : x.call(null,current_state));
if(cljs.core.truth_((eq_QMARK_.cljs$core$IFn$_invoke$arity$2 ? eq_QMARK_.cljs$core$IFn$_invoke$arity$2(current_state,new_state) : eq_QMARK_.call(null,current_state,new_state)))){
return current_state;
} else {
return new_state;
}
});
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__26858) : u.call(null,G__26858));
}
});
var hx$hooks$updater__2 = (function() { 
var G__26921__delegate = function (f,xs){
return hx$hooks$updater.cljs$core$IFn$_invoke$arity$1((function hx$hooks$updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
}));
};
var G__26921 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__26922__i = 0, G__26922__a = new Array(arguments.length -  1);
while (G__26922__i < G__26922__a.length) {G__26922__a[G__26922__i] = arguments[G__26922__i + 1]; ++G__26922__i;}
  xs = new cljs.core.IndexedSeq(G__26922__a,0,null);
} 
return G__26921__delegate.call(this,f,xs);};
G__26921.cljs$lang$maxFixedArity = 1;
G__26921.cljs$lang$applyTo = (function (arglist__26925){
var f = cljs.core.first(arglist__26925);
var xs = cljs.core.rest(arglist__26925);
return G__26921__delegate(f,xs);
});
G__26921.cljs$core$IFn$_invoke$arity$variadic = G__26921__delegate;
return G__26921;
})()
;
hx$hooks$updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return hx$hooks$updater__1.call(this,f);
default:
var G__26926 = null;
if (arguments.length > 1) {
var G__26927__i = 0, G__26927__a = new Array(arguments.length -  1);
while (G__26927__i < G__26927__a.length) {G__26927__a[G__26927__i] = arguments[G__26927__i + 1]; ++G__26927__i;}
G__26926 = new cljs.core.IndexedSeq(G__26927__a,0,null);
}
return hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__26926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hx$hooks$updater.cljs$lang$maxFixedArity = 1;
hx$hooks$updater.cljs$lang$applyTo = hx$hooks$updater__2.cljs$lang$applyTo;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$1 = hx$hooks$updater__1;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$variadic = hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic;
return hx$hooks$updater;
})()
,[u]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
}));

(hx.hooks.useState.cljs$lang$maxFixedArity = 2);

/**
 * Takes an initial value. Returns an atom that will _NOT_ re-render component
 *   on change.
 */
hx.hooks.useIRef = (function hx$hooks$useIRef(initial){
var sentinel = module$node_modules$react$index.useRef(({}));
return module$node_modules$react$index.useMemo((function (){
var x26862 = ({"current": initial});
(x26862.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x26862.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x26862.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x26862.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",v);
}));

(x26862.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x26862.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__26863 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26863) : f.call(null,G__26863));
})());
}));

(x26862.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__26864 = this$__$1.current;
var G__26865 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26864,G__26865) : f.call(null,G__26864,G__26865));
})());
}));

(x26862.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__26866 = this$__$1.current;
var G__26867 = a;
var G__26868 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26866,G__26867,G__26868) : f.call(null,G__26866,G__26867,G__26868));
})());
}));

(x26862.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x26862;
}),[sentinel]);
});
/**
 * Just react/useReducer.
 */
hx.hooks.useReducer = (function hx$hooks$useReducer(var_args){
var G__26870 = arguments.length;
switch (G__26870) {
case 2:
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3(reducer,init_state,undefined);
}));

(hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
return module$node_modules$react$index.useReducer(module$node_modules$react$index.useMemo((function (){
if((((!(cljs.core.fn_QMARK_(reducer)))) && (cljs.core.ifn_QMARK_(reducer)))){
return (function hx$hooks$wrap_ifn(state,action){
return (reducer.cljs$core$IFn$_invoke$arity$2 ? reducer.cljs$core$IFn$_invoke$arity$2(state,action) : reducer.call(null,state,action));
});
} else {
return reducer;
}
}),[reducer]),init_state,init);
}));

(hx.hooks.useReducer.cljs$lang$maxFixedArity = 3);

/**
 * Caches `x`. When a new `x` is passed in, returns new `x` only if it is
 *   not structurally equal to the previous `x`.
 * 
 *   Useful for optimizing `<-effect` et. al. when you have two values that might
 *   be structurally equal by referentially different.
 */
hx.hooks.useValue = (function hx$hooks$useValue(x){
var _x = module$node_modules$react$index.useRef(x);
var x_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,_x.current))?_x.current:x);
module$node_modules$react$index.useEffect((function (){
(_x.current = x);

return undefined;
}),[x_SINGLEQUOTE_]);

return x_SINGLEQUOTE_;
});
hx.hooks.wrap_fx = (function hx$hooks$wrap_fx(f){
return (function hx$hooks$wrap_fx_$_wrap_fx_return(){
var x = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return undefined;
}
});
});
/**
 * Just react/useEffect
 */
hx.hooks.useEffect = (function hx$hooks$useEffect(var_args){
var G__26876 = arguments.length;
switch (G__26876) {
case 1:
return hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(hx.hooks.wrap_fx(f));
}));

(hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useEffect(hx.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(hx.hooks.useEffect.cljs$lang$maxFixedArity = 2);

/**
 * Just react/useContext
 */
hx.hooks.useContext = module$node_modules$react$index.useContext;
/**
 * Just react/useMemo
 */
hx.hooks.useMemo = module$node_modules$react$index.useMemo;
/**
 * Just react/useCallback
 */
hx.hooks.useCallback = (function hx$hooks$useCallback(var_args){
var G__26878 = arguments.length;
switch (G__26878) {
case 1:
return hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useCallback(f);
}));

(hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useCallback(f,cljs.core.to_array(deps));
}));

(hx.hooks.useCallback.cljs$lang$maxFixedArity = 2);

/**
 * Just react/useImperativeHandle
 */
hx.hooks.useImperativeHandle = (function hx$hooks$useImperativeHandle(var_args){
var G__26886 = arguments.length;
switch (G__26886) {
case 2:
return hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle);
}));

(hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle,cljs.core.to_array(deps));
}));

(hx.hooks.useImperativeHandle.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useLayoutEffect
 */
hx.hooks.useLayoutEffect = (function hx$hooks$useLayoutEffect(var_args){
var G__26896 = arguments.length;
switch (G__26896) {
case 1:
return hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(f);
}));

(hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useLayoutEffect(f,cljs.core.to_array(deps));
}));

(hx.hooks.useLayoutEffect.cljs$lang$maxFixedArity = 2);

/**
 * Just react/useDebugValue
 */
hx.hooks.useDebugValue = module$node_modules$react$index.useDebugValue;
hx.hooks._LT__state = hx.hooks.useState;
hx.hooks._LT__ref = hx.hooks.useIRef;
/**
 * Takes an atom. Returns the currently derefed value of the atom, and re-renders
 *   the component on change.
 */
hx.hooks._LT__deref = (function hx$hooks$_LT__deref(a){
var vec__26902 = module$node_modules$react$index.useState(cljs.core.deref(a));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26902,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26902,(1),null);
module$node_modules$react$index.useEffect((function (){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("<-deref");
cljs.core.add_watch(a,k,(function (_,___$1,___$2,v_SINGLEQUOTE_){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(v_SINGLEQUOTE_) : u.call(null,v_SINGLEQUOTE_));
}));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),v)){
var G__26905_26994 = cljs.core.deref(a);
(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__26905_26994) : u.call(null,G__26905_26994));
} else {
}

return (function (){
return cljs.core.remove_watch(a,k);
});
}),[a]);

return v;
});
hx.hooks._LT__effect = hx.hooks.useEffect;
/**
 * Just react/useReducer.
 */
hx.hooks._LT__reducer = hx.hooks.useReducer;
hx.hooks._LT__value = hx.hooks.useValue;
/**
 * Just react/useContext
 */
hx.hooks._LT__context = module$node_modules$react$index.useContext;
/**
 * Just react/useMemo
 */
hx.hooks._LT__memo = module$node_modules$react$index.useMemo;
hx.hooks._LT__callback = hx.hooks.useCallback;
hx.hooks._LT__imperative_handle = hx.hooks.useImperativeHandle;
/**
 * Just react/useDebugValue
 */
hx.hooks._LT__debug_value = module$node_modules$react$index.useDebugValue;
hx.hooks._LT__layout_effect = hx.hooks.useLayoutEffect;

//# sourceMappingURL=hx.hooks.js.map
