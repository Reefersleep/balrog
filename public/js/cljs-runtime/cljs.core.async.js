goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29791 = arguments.length;
switch (G__29791) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29792 = (function (f,blockable,meta29793){
this.f = f;
this.blockable = blockable;
this.meta29793 = meta29793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29794,meta29793__$1){
var self__ = this;
var _29794__$1 = this;
return (new cljs.core.async.t_cljs$core$async29792(self__.f,self__.blockable,meta29793__$1));
}));

(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29794){
var self__ = this;
var _29794__$1 = this;
return self__.meta29793;
}));

(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29793","meta29793",1357374531,null)], null);
}));

(cljs.core.async.t_cljs$core$async29792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29792");

(cljs.core.async.t_cljs$core$async29792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29792.
 */
cljs.core.async.__GT_t_cljs$core$async29792 = (function cljs$core$async$__GT_t_cljs$core$async29792(f__$1,blockable__$1,meta29793){
return (new cljs.core.async.t_cljs$core$async29792(f__$1,blockable__$1,meta29793));
});

}

return (new cljs.core.async.t_cljs$core$async29792(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29812 = arguments.length;
switch (G__29812) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29821 = arguments.length;
switch (G__29821) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29836 = arguments.length;
switch (G__29836) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32430 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32430) : fn1.call(null,val_32430));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32430) : fn1.call(null,val_32430));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29881 = arguments.length;
switch (G__29881) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32447 = n;
var x_32448 = (0);
while(true){
if((x_32448 < n__4613__auto___32447)){
(a[x_32448] = x_32448);

var G__32449 = (x_32448 + (1));
x_32448 = G__32449;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29899 = (function (flag,meta29900){
this.flag = flag;
this.meta29900 = meta29900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29901,meta29900__$1){
var self__ = this;
var _29901__$1 = this;
return (new cljs.core.async.t_cljs$core$async29899(self__.flag,meta29900__$1));
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29901){
var self__ = this;
var _29901__$1 = this;
return self__.meta29900;
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29900","meta29900",881546046,null)], null);
}));

(cljs.core.async.t_cljs$core$async29899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29899");

(cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29899.
 */
cljs.core.async.__GT_t_cljs$core$async29899 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29899(flag__$1,meta29900){
return (new cljs.core.async.t_cljs$core$async29899(flag__$1,meta29900));
});

}

return (new cljs.core.async.t_cljs$core$async29899(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29924 = (function (flag,cb,meta29925){
this.flag = flag;
this.cb = cb;
this.meta29925 = meta29925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29926,meta29925__$1){
var self__ = this;
var _29926__$1 = this;
return (new cljs.core.async.t_cljs$core$async29924(self__.flag,self__.cb,meta29925__$1));
}));

(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29926){
var self__ = this;
var _29926__$1 = this;
return self__.meta29925;
}));

(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29925","meta29925",931805341,null)], null);
}));

(cljs.core.async.t_cljs$core$async29924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29924");

(cljs.core.async.t_cljs$core$async29924.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29924.
 */
cljs.core.async.__GT_t_cljs$core$async29924 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29924(flag__$1,cb__$1,meta29925){
return (new cljs.core.async.t_cljs$core$async29924(flag__$1,cb__$1,meta29925));
});

}

return (new cljs.core.async.t_cljs$core$async29924(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29950_SHARP_){
var G__29955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29950_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29955) : fret.call(null,G__29955));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29951_SHARP_){
var G__29956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29951_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29956) : fret.call(null,G__29956));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32483 = (i + (1));
i = G__32483;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32492 = arguments.length;
var i__4737__auto___32493 = (0);
while(true){
if((i__4737__auto___32493 < len__4736__auto___32492)){
args__4742__auto__.push((arguments[i__4737__auto___32493]));

var G__32494 = (i__4737__auto___32493 + (1));
i__4737__auto___32493 = G__32494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29966){
var map__29967 = p__29966;
var map__29967__$1 = (((((!((map__29967 == null))))?(((((map__29967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29967):map__29967);
var opts = map__29967__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29961){
var G__29963 = cljs.core.first(seq29961);
var seq29961__$1 = cljs.core.next(seq29961);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29963,seq29961__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29988 = arguments.length;
switch (G__29988) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29687__auto___32513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30049){
var state_val_30050 = (state_30049[(1)]);
if((state_val_30050 === (7))){
var inst_30039 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
var statearr_30056_32515 = state_30049__$1;
(statearr_30056_32515[(2)] = inst_30039);

(statearr_30056_32515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (1))){
var state_30049__$1 = state_30049;
var statearr_30058_32519 = state_30049__$1;
(statearr_30058_32519[(2)] = null);

(statearr_30058_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (4))){
var inst_30018 = (state_30049[(7)]);
var inst_30018__$1 = (state_30049[(2)]);
var inst_30021 = (inst_30018__$1 == null);
var state_30049__$1 = (function (){var statearr_30065 = state_30049;
(statearr_30065[(7)] = inst_30018__$1);

return statearr_30065;
})();
if(cljs.core.truth_(inst_30021)){
var statearr_30066_32522 = state_30049__$1;
(statearr_30066_32522[(1)] = (5));

} else {
var statearr_30067_32523 = state_30049__$1;
(statearr_30067_32523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (13))){
var state_30049__$1 = state_30049;
var statearr_30068_32524 = state_30049__$1;
(statearr_30068_32524[(2)] = null);

(statearr_30068_32524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (6))){
var inst_30018 = (state_30049[(7)]);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30049__$1,(11),to,inst_30018);
} else {
if((state_val_30050 === (3))){
var inst_30041 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30049__$1,inst_30041);
} else {
if((state_val_30050 === (12))){
var state_30049__$1 = state_30049;
var statearr_30069_32528 = state_30049__$1;
(statearr_30069_32528[(2)] = null);

(statearr_30069_32528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (2))){
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30049__$1,(4),from);
} else {
if((state_val_30050 === (11))){
var inst_30032 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
if(cljs.core.truth_(inst_30032)){
var statearr_30073_32530 = state_30049__$1;
(statearr_30073_32530[(1)] = (12));

} else {
var statearr_30074_32531 = state_30049__$1;
(statearr_30074_32531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (9))){
var state_30049__$1 = state_30049;
var statearr_30075_32532 = state_30049__$1;
(statearr_30075_32532[(2)] = null);

(statearr_30075_32532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (5))){
var state_30049__$1 = state_30049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30076_32533 = state_30049__$1;
(statearr_30076_32533[(1)] = (8));

} else {
var statearr_30077_32534 = state_30049__$1;
(statearr_30077_32534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (14))){
var inst_30037 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
var statearr_30078_32549 = state_30049__$1;
(statearr_30078_32549[(2)] = inst_30037);

(statearr_30078_32549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (10))){
var inst_30027 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
var statearr_30080_32568 = state_30049__$1;
(statearr_30080_32568[(2)] = inst_30027);

(statearr_30080_32568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (8))){
var inst_30024 = cljs.core.async.close_BANG_(to);
var state_30049__$1 = state_30049;
var statearr_30081_32571 = state_30049__$1;
(statearr_30081_32571[(2)] = inst_30024);

(statearr_30081_32571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_30082 = [null,null,null,null,null,null,null,null];
(statearr_30082[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_30082[(1)] = (1));

return statearr_30082;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_30049){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30049);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30087){var ex__29552__auto__ = e30087;
var statearr_30088_32574 = state_30049;
(statearr_30088_32574[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30049[(4)]))){
var statearr_30090_32575 = state_30049;
(statearr_30090_32575[(1)] = cljs.core.first((state_30049[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32576 = state_30049;
state_30049 = G__32576;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_30049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_30049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30091 = f__29688__auto__();
(statearr_30091[(6)] = c__29687__auto___32513);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30096){
var vec__30097 = p__30096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(1),null);
var job = vec__30097;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29687__auto___32579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30104){
var state_val_30105 = (state_30104[(1)]);
if((state_val_30105 === (1))){
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30104__$1,(2),res,v);
} else {
if((state_val_30105 === (2))){
var inst_30101 = (state_30104[(2)]);
var inst_30102 = cljs.core.async.close_BANG_(res);
var state_30104__$1 = (function (){var statearr_30106 = state_30104;
(statearr_30106[(7)] = inst_30101);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30104__$1,inst_30102);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_30107 = [null,null,null,null,null,null,null,null];
(statearr_30107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__);

(statearr_30107[(1)] = (1));

return statearr_30107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1 = (function (state_30104){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30104);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30108){var ex__29552__auto__ = e30108;
var statearr_30109_32584 = state_30104;
(statearr_30109_32584[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30104[(4)]))){
var statearr_30111_32587 = state_30104;
(statearr_30111_32587[(1)] = cljs.core.first((state_30104[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32594 = state_30104;
state_30104 = G__32594;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30119 = f__29688__auto__();
(statearr_30119[(6)] = c__29687__auto___32579);

return statearr_30119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30125){
var vec__30126 = p__30125;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30126,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30126,(1),null);
var job = vec__30126;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32600 = n;
var __32601 = (0);
while(true){
if((__32601 < n__4613__auto___32600)){
var G__30129_32602 = type;
var G__30129_32603__$1 = (((G__30129_32602 instanceof cljs.core.Keyword))?G__30129_32602.fqn:null);
switch (G__30129_32603__$1) {
case "compute":
var c__29687__auto___32605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32601,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = ((function (__32601,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function (state_30142){
var state_val_30143 = (state_30142[(1)]);
if((state_val_30143 === (1))){
var state_30142__$1 = state_30142;
var statearr_30145_32607 = state_30142__$1;
(statearr_30145_32607[(2)] = null);

(statearr_30145_32607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (2))){
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30142__$1,(4),jobs);
} else {
if((state_val_30143 === (3))){
var inst_30140 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30142__$1,inst_30140);
} else {
if((state_val_30143 === (4))){
var inst_30132 = (state_30142[(2)]);
var inst_30133 = process(inst_30132);
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30133)){
var statearr_30146_32612 = state_30142__$1;
(statearr_30146_32612[(1)] = (5));

} else {
var statearr_30147_32613 = state_30142__$1;
(statearr_30147_32613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (5))){
var state_30142__$1 = state_30142;
var statearr_30148_32614 = state_30142__$1;
(statearr_30148_32614[(2)] = null);

(statearr_30148_32614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (6))){
var state_30142__$1 = state_30142;
var statearr_30149_32615 = state_30142__$1;
(statearr_30149_32615[(2)] = null);

(statearr_30149_32615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (7))){
var inst_30138 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30151_32616 = state_30142__$1;
(statearr_30151_32616[(2)] = inst_30138);

(statearr_30151_32616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32601,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
;
return ((function (__32601,switch__29548__auto__,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_30152 = [null,null,null,null,null,null,null];
(statearr_30152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__);

(statearr_30152[(1)] = (1));

return statearr_30152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1 = (function (state_30142){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30142);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30153){var ex__29552__auto__ = e30153;
var statearr_30155_32621 = state_30142;
(statearr_30155_32621[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30142[(4)]))){
var statearr_30156_32622 = state_30142;
(statearr_30156_32622[(1)] = cljs.core.first((state_30142[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32623 = state_30142;
state_30142 = G__32623;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__;
})()
;})(__32601,switch__29548__auto__,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
})();
var state__29689__auto__ = (function (){var statearr_30157 = f__29688__auto__();
(statearr_30157[(6)] = c__29687__auto___32605);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
});})(__32601,c__29687__auto___32605,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
);


break;
case "async":
var c__29687__auto___32633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32601,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = ((function (__32601,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function (state_30173){
var state_val_30174 = (state_30173[(1)]);
if((state_val_30174 === (1))){
var state_30173__$1 = state_30173;
var statearr_30185_32642 = state_30173__$1;
(statearr_30185_32642[(2)] = null);

(statearr_30185_32642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (2))){
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30173__$1,(4),jobs);
} else {
if((state_val_30174 === (3))){
var inst_30171 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30173__$1,inst_30171);
} else {
if((state_val_30174 === (4))){
var inst_30163 = (state_30173[(2)]);
var inst_30164 = async(inst_30163);
var state_30173__$1 = state_30173;
if(cljs.core.truth_(inst_30164)){
var statearr_30186_32647 = state_30173__$1;
(statearr_30186_32647[(1)] = (5));

} else {
var statearr_30187_32648 = state_30173__$1;
(statearr_30187_32648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (5))){
var state_30173__$1 = state_30173;
var statearr_30191_32653 = state_30173__$1;
(statearr_30191_32653[(2)] = null);

(statearr_30191_32653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (6))){
var state_30173__$1 = state_30173;
var statearr_30196_32668 = state_30173__$1;
(statearr_30196_32668[(2)] = null);

(statearr_30196_32668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (7))){
var inst_30169 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30197_32670 = state_30173__$1;
(statearr_30197_32670[(2)] = inst_30169);

(statearr_30197_32670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32601,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
;
return ((function (__32601,switch__29548__auto__,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_30201 = [null,null,null,null,null,null,null];
(statearr_30201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__);

(statearr_30201[(1)] = (1));

return statearr_30201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1 = (function (state_30173){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30173);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30202){var ex__29552__auto__ = e30202;
var statearr_30203_32675 = state_30173;
(statearr_30203_32675[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30173[(4)]))){
var statearr_30204_32676 = state_30173;
(statearr_30204_32676[(1)] = cljs.core.first((state_30173[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32677 = state_30173;
state_30173 = G__32677;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = function(state_30173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1.call(this,state_30173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__;
})()
;})(__32601,switch__29548__auto__,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
})();
var state__29689__auto__ = (function (){var statearr_30209 = f__29688__auto__();
(statearr_30209[(6)] = c__29687__auto___32633);

return statearr_30209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
});})(__32601,c__29687__auto___32633,G__30129_32602,G__30129_32603__$1,n__4613__auto___32600,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30129_32603__$1)].join('')));

}

var G__32678 = (__32601 + (1));
__32601 = G__32678;
continue;
} else {
}
break;
}

var c__29687__auto___32680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30231){
var state_val_30232 = (state_30231[(1)]);
if((state_val_30232 === (7))){
var inst_30227 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
var statearr_30233_32684 = state_30231__$1;
(statearr_30233_32684[(2)] = inst_30227);

(statearr_30233_32684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (1))){
var state_30231__$1 = state_30231;
var statearr_30234_32686 = state_30231__$1;
(statearr_30234_32686[(2)] = null);

(statearr_30234_32686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (4))){
var inst_30212 = (state_30231[(7)]);
var inst_30212__$1 = (state_30231[(2)]);
var inst_30213 = (inst_30212__$1 == null);
var state_30231__$1 = (function (){var statearr_30244 = state_30231;
(statearr_30244[(7)] = inst_30212__$1);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30213)){
var statearr_30245_32687 = state_30231__$1;
(statearr_30245_32687[(1)] = (5));

} else {
var statearr_30246_32689 = state_30231__$1;
(statearr_30246_32689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (6))){
var inst_30212 = (state_30231[(7)]);
var inst_30217 = (state_30231[(8)]);
var inst_30217__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30219 = [inst_30212,inst_30217__$1];
var inst_30220 = (new cljs.core.PersistentVector(null,2,(5),inst_30218,inst_30219,null));
var state_30231__$1 = (function (){var statearr_30247 = state_30231;
(statearr_30247[(8)] = inst_30217__$1);

return statearr_30247;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30231__$1,(8),jobs,inst_30220);
} else {
if((state_val_30232 === (3))){
var inst_30229 = (state_30231[(2)]);
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30231__$1,inst_30229);
} else {
if((state_val_30232 === (2))){
var state_30231__$1 = state_30231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30231__$1,(4),from);
} else {
if((state_val_30232 === (9))){
var inst_30224 = (state_30231[(2)]);
var state_30231__$1 = (function (){var statearr_30252 = state_30231;
(statearr_30252[(9)] = inst_30224);

return statearr_30252;
})();
var statearr_30253_32694 = state_30231__$1;
(statearr_30253_32694[(2)] = null);

(statearr_30253_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (5))){
var inst_30215 = cljs.core.async.close_BANG_(jobs);
var state_30231__$1 = state_30231;
var statearr_30254_32695 = state_30231__$1;
(statearr_30254_32695[(2)] = inst_30215);

(statearr_30254_32695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30232 === (8))){
var inst_30217 = (state_30231[(8)]);
var inst_30222 = (state_30231[(2)]);
var state_30231__$1 = (function (){var statearr_30255 = state_30231;
(statearr_30255[(10)] = inst_30222);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30231__$1,(9),results,inst_30217);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_30256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__);

(statearr_30256[(1)] = (1));

return statearr_30256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1 = (function (state_30231){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30231);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30257){var ex__29552__auto__ = e30257;
var statearr_30258_32696 = state_30231;
(statearr_30258_32696[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30231[(4)]))){
var statearr_30259_32697 = state_30231;
(statearr_30259_32697[(1)] = cljs.core.first((state_30231[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32729 = state_30231;
state_30231 = G__32729;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = function(state_30231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1.call(this,state_30231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30260 = f__29688__auto__();
(statearr_30260[(6)] = c__29687__auto___32680);

return statearr_30260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


var c__29687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30298){
var state_val_30299 = (state_30298[(1)]);
if((state_val_30299 === (7))){
var inst_30294 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30300_32734 = state_30298__$1;
(statearr_30300_32734[(2)] = inst_30294);

(statearr_30300_32734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (20))){
var state_30298__$1 = state_30298;
var statearr_30301_32743 = state_30298__$1;
(statearr_30301_32743[(2)] = null);

(statearr_30301_32743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (1))){
var state_30298__$1 = state_30298;
var statearr_30302_32745 = state_30298__$1;
(statearr_30302_32745[(2)] = null);

(statearr_30302_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (4))){
var inst_30263 = (state_30298[(7)]);
var inst_30263__$1 = (state_30298[(2)]);
var inst_30264 = (inst_30263__$1 == null);
var state_30298__$1 = (function (){var statearr_30303 = state_30298;
(statearr_30303[(7)] = inst_30263__$1);

return statearr_30303;
})();
if(cljs.core.truth_(inst_30264)){
var statearr_30304_32748 = state_30298__$1;
(statearr_30304_32748[(1)] = (5));

} else {
var statearr_30305_32751 = state_30298__$1;
(statearr_30305_32751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (15))){
var inst_30276 = (state_30298[(8)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30298__$1,(18),to,inst_30276);
} else {
if((state_val_30299 === (21))){
var inst_30289 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30307_32752 = state_30298__$1;
(statearr_30307_32752[(2)] = inst_30289);

(statearr_30307_32752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (13))){
var inst_30291 = (state_30298[(2)]);
var state_30298__$1 = (function (){var statearr_30310 = state_30298;
(statearr_30310[(9)] = inst_30291);

return statearr_30310;
})();
var statearr_30311_32758 = state_30298__$1;
(statearr_30311_32758[(2)] = null);

(statearr_30311_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (6))){
var inst_30263 = (state_30298[(7)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30298__$1,(11),inst_30263);
} else {
if((state_val_30299 === (17))){
var inst_30284 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
if(cljs.core.truth_(inst_30284)){
var statearr_30313_32762 = state_30298__$1;
(statearr_30313_32762[(1)] = (19));

} else {
var statearr_30314_32763 = state_30298__$1;
(statearr_30314_32763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (3))){
var inst_30296 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30298__$1,inst_30296);
} else {
if((state_val_30299 === (12))){
var inst_30273 = (state_30298[(10)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30298__$1,(14),inst_30273);
} else {
if((state_val_30299 === (2))){
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30298__$1,(4),results);
} else {
if((state_val_30299 === (19))){
var state_30298__$1 = state_30298;
var statearr_30329_32769 = state_30298__$1;
(statearr_30329_32769[(2)] = null);

(statearr_30329_32769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (11))){
var inst_30273 = (state_30298[(2)]);
var state_30298__$1 = (function (){var statearr_30330 = state_30298;
(statearr_30330[(10)] = inst_30273);

return statearr_30330;
})();
var statearr_30331_32775 = state_30298__$1;
(statearr_30331_32775[(2)] = null);

(statearr_30331_32775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (9))){
var state_30298__$1 = state_30298;
var statearr_30332_32795 = state_30298__$1;
(statearr_30332_32795[(2)] = null);

(statearr_30332_32795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (5))){
var state_30298__$1 = state_30298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30333_32799 = state_30298__$1;
(statearr_30333_32799[(1)] = (8));

} else {
var statearr_30334_32800 = state_30298__$1;
(statearr_30334_32800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (14))){
var inst_30276 = (state_30298[(8)]);
var inst_30276__$1 = (state_30298[(2)]);
var inst_30277 = (inst_30276__$1 == null);
var inst_30278 = cljs.core.not(inst_30277);
var state_30298__$1 = (function (){var statearr_30335 = state_30298;
(statearr_30335[(8)] = inst_30276__$1);

return statearr_30335;
})();
if(inst_30278){
var statearr_30336_32803 = state_30298__$1;
(statearr_30336_32803[(1)] = (15));

} else {
var statearr_30337_32804 = state_30298__$1;
(statearr_30337_32804[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (16))){
var state_30298__$1 = state_30298;
var statearr_30338_32809 = state_30298__$1;
(statearr_30338_32809[(2)] = false);

(statearr_30338_32809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (10))){
var inst_30270 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30339_32813 = state_30298__$1;
(statearr_30339_32813[(2)] = inst_30270);

(statearr_30339_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (18))){
var inst_30281 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30340_32815 = state_30298__$1;
(statearr_30340_32815[(2)] = inst_30281);

(statearr_30340_32815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (8))){
var inst_30267 = cljs.core.async.close_BANG_(to);
var state_30298__$1 = state_30298;
var statearr_30341_32818 = state_30298__$1;
(statearr_30341_32818[(2)] = inst_30267);

(statearr_30341_32818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_30346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__);

(statearr_30346[(1)] = (1));

return statearr_30346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1 = (function (state_30298){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30298);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30348){var ex__29552__auto__ = e30348;
var statearr_30349_32829 = state_30298;
(statearr_30349_32829[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30298[(4)]))){
var statearr_30350_32830 = state_30298;
(statearr_30350_32830[(1)] = cljs.core.first((state_30298[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32831 = state_30298;
state_30298 = G__32831;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__ = function(state_30298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1.call(this,state_30298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30356 = f__29688__auto__();
(statearr_30356[(6)] = c__29687__auto__);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

return c__29687__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30362 = arguments.length;
switch (G__30362) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30370 = arguments.length;
switch (G__30370) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30387 = arguments.length;
switch (G__30387) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29687__auto___32873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30439_32876 = state_30432__$1;
(statearr_30439_32876[(2)] = inst_30428);

(statearr_30439_32876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30442_32877 = state_30432__$1;
(statearr_30442_32877[(2)] = null);

(statearr_30442_32877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30409 = (state_30432[(7)]);
var inst_30409__$1 = (state_30432[(2)]);
var inst_30410 = (inst_30409__$1 == null);
var state_30432__$1 = (function (){var statearr_30445 = state_30432;
(statearr_30445[(7)] = inst_30409__$1);

return statearr_30445;
})();
if(cljs.core.truth_(inst_30410)){
var statearr_30446_32878 = state_30432__$1;
(statearr_30446_32878[(1)] = (5));

} else {
var statearr_30447_32880 = state_30432__$1;
(statearr_30447_32880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (13))){
var state_30432__$1 = state_30432;
var statearr_30449_32881 = state_30432__$1;
(statearr_30449_32881[(2)] = null);

(statearr_30449_32881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30409 = (state_30432[(7)]);
var inst_30415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30409) : p.call(null,inst_30409));
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30415)){
var statearr_30450_32882 = state_30432__$1;
(statearr_30450_32882[(1)] = (9));

} else {
var statearr_30451_32883 = state_30432__$1;
(statearr_30451_32883[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (12))){
var state_30432__$1 = state_30432;
var statearr_30452_32886 = state_30432__$1;
(statearr_30452_32886[(2)] = null);

(statearr_30452_32886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30432__$1,(4),ch);
} else {
if((state_val_30433 === (11))){
var inst_30409 = (state_30432[(7)]);
var inst_30419 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30432__$1,(8),inst_30419,inst_30409);
} else {
if((state_val_30433 === (9))){
var state_30432__$1 = state_30432;
var statearr_30455_32892 = state_30432__$1;
(statearr_30455_32892[(2)] = tc);

(statearr_30455_32892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (5))){
var inst_30412 = cljs.core.async.close_BANG_(tc);
var inst_30413 = cljs.core.async.close_BANG_(fc);
var state_30432__$1 = (function (){var statearr_30465 = state_30432;
(statearr_30465[(8)] = inst_30412);

return statearr_30465;
})();
var statearr_30468_32895 = state_30432__$1;
(statearr_30468_32895[(2)] = inst_30413);

(statearr_30468_32895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (14))){
var inst_30426 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30471_32898 = state_30432__$1;
(statearr_30471_32898[(2)] = inst_30426);

(statearr_30471_32898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (10))){
var state_30432__$1 = state_30432;
var statearr_30476_32899 = state_30432__$1;
(statearr_30476_32899[(2)] = fc);

(statearr_30476_32899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30421 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30421)){
var statearr_30477_32900 = state_30432__$1;
(statearr_30477_32900[(1)] = (12));

} else {
var statearr_30478_32901 = state_30432__$1;
(statearr_30478_32901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_30480 = [null,null,null,null,null,null,null,null,null];
(statearr_30480[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_30480[(1)] = (1));

return statearr_30480;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_30432){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30432);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30484){var ex__29552__auto__ = e30484;
var statearr_30485_32903 = state_30432;
(statearr_30485_32903[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30432[(4)]))){
var statearr_30486_32904 = state_30432;
(statearr_30486_32904[(1)] = cljs.core.first((state_30432[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_30432;
state_30432 = G__32905;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30488 = f__29688__auto__();
(statearr_30488[(6)] = c__29687__auto___32873);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30519){
var state_val_30520 = (state_30519[(1)]);
if((state_val_30520 === (7))){
var inst_30515 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30521_32909 = state_30519__$1;
(statearr_30521_32909[(2)] = inst_30515);

(statearr_30521_32909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (1))){
var inst_30495 = init;
var inst_30496 = inst_30495;
var state_30519__$1 = (function (){var statearr_30522 = state_30519;
(statearr_30522[(7)] = inst_30496);

return statearr_30522;
})();
var statearr_30523_32913 = state_30519__$1;
(statearr_30523_32913[(2)] = null);

(statearr_30523_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (4))){
var inst_30499 = (state_30519[(8)]);
var inst_30499__$1 = (state_30519[(2)]);
var inst_30503 = (inst_30499__$1 == null);
var state_30519__$1 = (function (){var statearr_30525 = state_30519;
(statearr_30525[(8)] = inst_30499__$1);

return statearr_30525;
})();
if(cljs.core.truth_(inst_30503)){
var statearr_30526_32917 = state_30519__$1;
(statearr_30526_32917[(1)] = (5));

} else {
var statearr_30527_32918 = state_30519__$1;
(statearr_30527_32918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (6))){
var inst_30499 = (state_30519[(8)]);
var inst_30496 = (state_30519[(7)]);
var inst_30506 = (state_30519[(9)]);
var inst_30506__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30496,inst_30499) : f.call(null,inst_30496,inst_30499));
var inst_30507 = cljs.core.reduced_QMARK_(inst_30506__$1);
var state_30519__$1 = (function (){var statearr_30528 = state_30519;
(statearr_30528[(9)] = inst_30506__$1);

return statearr_30528;
})();
if(inst_30507){
var statearr_30529_32919 = state_30519__$1;
(statearr_30529_32919[(1)] = (8));

} else {
var statearr_30531_32920 = state_30519__$1;
(statearr_30531_32920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (3))){
var inst_30517 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30519__$1,inst_30517);
} else {
if((state_val_30520 === (2))){
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30519__$1,(4),ch);
} else {
if((state_val_30520 === (9))){
var inst_30506 = (state_30519[(9)]);
var inst_30496 = inst_30506;
var state_30519__$1 = (function (){var statearr_30534 = state_30519;
(statearr_30534[(7)] = inst_30496);

return statearr_30534;
})();
var statearr_30535_32921 = state_30519__$1;
(statearr_30535_32921[(2)] = null);

(statearr_30535_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (5))){
var inst_30496 = (state_30519[(7)]);
var state_30519__$1 = state_30519;
var statearr_30538_32923 = state_30519__$1;
(statearr_30538_32923[(2)] = inst_30496);

(statearr_30538_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (10))){
var inst_30513 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30539_32931 = state_30519__$1;
(statearr_30539_32931[(2)] = inst_30513);

(statearr_30539_32931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (8))){
var inst_30506 = (state_30519[(9)]);
var inst_30509 = cljs.core.deref(inst_30506);
var state_30519__$1 = state_30519;
var statearr_30542_32936 = state_30519__$1;
(statearr_30542_32936[(2)] = inst_30509);

(statearr_30542_32936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29549__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29549__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = cljs$core$async$reduce_$_state_machine__29549__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var cljs$core$async$reduce_$_state_machine__29549__auto____1 = (function (state_30519){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30519);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30546){var ex__29552__auto__ = e30546;
var statearr_30548_32946 = state_30519;
(statearr_30548_32946[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30519[(4)]))){
var statearr_30549_32947 = state_30519;
(statearr_30549_32947[(1)] = cljs.core.first((state_30519[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32948 = state_30519;
state_30519 = G__32948;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29549__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29549__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29549__auto____0;
cljs$core$async$reduce_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29549__auto____1;
return cljs$core$async$reduce_$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30553 = f__29688__auto__();
(statearr_30553[(6)] = c__29687__auto__);

return statearr_30553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

return c__29687__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30565){
var state_val_30566 = (state_30565[(1)]);
if((state_val_30566 === (1))){
var inst_30559 = cljs.core.async.reduce(f__$1,init,ch);
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30565__$1,(2),inst_30559);
} else {
if((state_val_30566 === (2))){
var inst_30562 = (state_30565[(2)]);
var inst_30563 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30562) : f__$1.call(null,inst_30562));
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30565__$1,inst_30563);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29549__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29549__auto____0 = (function (){
var statearr_30568 = [null,null,null,null,null,null,null];
(statearr_30568[(0)] = cljs$core$async$transduce_$_state_machine__29549__auto__);

(statearr_30568[(1)] = (1));

return statearr_30568;
});
var cljs$core$async$transduce_$_state_machine__29549__auto____1 = (function (state_30565){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30565);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30569){var ex__29552__auto__ = e30569;
var statearr_30570_32965 = state_30565;
(statearr_30570_32965[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30565[(4)]))){
var statearr_30571_32966 = state_30565;
(statearr_30571_32966[(1)] = cljs.core.first((state_30565[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32967 = state_30565;
state_30565 = G__32967;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29549__auto__ = function(state_30565){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29549__auto____1.call(this,state_30565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29549__auto____0;
cljs$core$async$transduce_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29549__auto____1;
return cljs$core$async$transduce_$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30576 = f__29688__auto__();
(statearr_30576[(6)] = c__29687__auto__);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

return c__29687__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30578 = arguments.length;
switch (G__30578) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (7))){
var inst_30592 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30617_32981 = state_30610__$1;
(statearr_30617_32981[(2)] = inst_30592);

(statearr_30617_32981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (1))){
var inst_30586 = cljs.core.seq(coll);
var inst_30587 = inst_30586;
var state_30610__$1 = (function (){var statearr_30618 = state_30610;
(statearr_30618[(7)] = inst_30587);

return statearr_30618;
})();
var statearr_30619_32988 = state_30610__$1;
(statearr_30619_32988[(2)] = null);

(statearr_30619_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (4))){
var inst_30587 = (state_30610[(7)]);
var inst_30590 = cljs.core.first(inst_30587);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30610__$1,(7),ch,inst_30590);
} else {
if((state_val_30611 === (13))){
var inst_30604 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30624_32992 = state_30610__$1;
(statearr_30624_32992[(2)] = inst_30604);

(statearr_30624_32992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (6))){
var inst_30595 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30595)){
var statearr_30627_32993 = state_30610__$1;
(statearr_30627_32993[(1)] = (8));

} else {
var statearr_30628_32994 = state_30610__$1;
(statearr_30628_32994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (3))){
var inst_30608 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30610__$1,inst_30608);
} else {
if((state_val_30611 === (12))){
var state_30610__$1 = state_30610;
var statearr_30635_32995 = state_30610__$1;
(statearr_30635_32995[(2)] = null);

(statearr_30635_32995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (2))){
var inst_30587 = (state_30610[(7)]);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30587)){
var statearr_30636_32996 = state_30610__$1;
(statearr_30636_32996[(1)] = (4));

} else {
var statearr_30642_32997 = state_30610__$1;
(statearr_30642_32997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (11))){
var inst_30601 = cljs.core.async.close_BANG_(ch);
var state_30610__$1 = state_30610;
var statearr_30645_32998 = state_30610__$1;
(statearr_30645_32998[(2)] = inst_30601);

(statearr_30645_32998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (9))){
var state_30610__$1 = state_30610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30649_32999 = state_30610__$1;
(statearr_30649_32999[(1)] = (11));

} else {
var statearr_30650_33002 = state_30610__$1;
(statearr_30650_33002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (5))){
var inst_30587 = (state_30610[(7)]);
var state_30610__$1 = state_30610;
var statearr_30651_33007 = state_30610__$1;
(statearr_30651_33007[(2)] = inst_30587);

(statearr_30651_33007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (10))){
var inst_30606 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30653_33010 = state_30610__$1;
(statearr_30653_33010[(2)] = inst_30606);

(statearr_30653_33010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (8))){
var inst_30587 = (state_30610[(7)]);
var inst_30597 = cljs.core.next(inst_30587);
var inst_30587__$1 = inst_30597;
var state_30610__$1 = (function (){var statearr_30656 = state_30610;
(statearr_30656[(7)] = inst_30587__$1);

return statearr_30656;
})();
var statearr_30657_33011 = state_30610__$1;
(statearr_30657_33011[(2)] = null);

(statearr_30657_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_30660 = [null,null,null,null,null,null,null,null];
(statearr_30660[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_30660[(1)] = (1));

return statearr_30660;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_30610){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30610);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e30662){var ex__29552__auto__ = e30662;
var statearr_30663_33018 = state_30610;
(statearr_30663_33018[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30610[(4)]))){
var statearr_30664_33019 = state_30610;
(statearr_30664_33019[(1)] = cljs.core.first((state_30610[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33020 = state_30610;
state_30610 = G__33020;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_30666 = f__29688__auto__();
(statearr_30666[(6)] = c__29687__auto__);

return statearr_30666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

return c__29687__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33024 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33024(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33030 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33030(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33031 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33031(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33041 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33041(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30694 = (function (ch,cs,meta30695){
this.ch = ch;
this.cs = cs;
this.meta30695 = meta30695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30696,meta30695__$1){
var self__ = this;
var _30696__$1 = this;
return (new cljs.core.async.t_cljs$core$async30694(self__.ch,self__.cs,meta30695__$1));
}));

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30696){
var self__ = this;
var _30696__$1 = this;
return self__.meta30695;
}));

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30694.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30695","meta30695",1532074891,null)], null);
}));

(cljs.core.async.t_cljs$core$async30694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30694");

(cljs.core.async.t_cljs$core$async30694.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30694.
 */
cljs.core.async.__GT_t_cljs$core$async30694 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30694(ch__$1,cs__$1,meta30695){
return (new cljs.core.async.t_cljs$core$async30694(ch__$1,cs__$1,meta30695));
});

}

return (new cljs.core.async.t_cljs$core$async30694(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29687__auto___33053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_30871){
var state_val_30874 = (state_30871[(1)]);
if((state_val_30874 === (7))){
var inst_30865 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30880_33054 = state_30871__$1;
(statearr_30880_33054[(2)] = inst_30865);

(statearr_30880_33054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (20))){
var inst_30763 = (state_30871[(7)]);
var inst_30777 = cljs.core.first(inst_30763);
var inst_30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30777,(0),null);
var inst_30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30777,(1),null);
var state_30871__$1 = (function (){var statearr_30882 = state_30871;
(statearr_30882[(8)] = inst_30778);

return statearr_30882;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30884_33056 = state_30871__$1;
(statearr_30884_33056[(1)] = (22));

} else {
var statearr_30886_33057 = state_30871__$1;
(statearr_30886_33057[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (27))){
var inst_30719 = (state_30871[(9)]);
var inst_30815 = (state_30871[(10)]);
var inst_30807 = (state_30871[(11)]);
var inst_30809 = (state_30871[(12)]);
var inst_30815__$1 = cljs.core._nth(inst_30807,inst_30809);
var inst_30816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30815__$1,inst_30719,done);
var state_30871__$1 = (function (){var statearr_30891 = state_30871;
(statearr_30891[(10)] = inst_30815__$1);

return statearr_30891;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_30893_33059 = state_30871__$1;
(statearr_30893_33059[(1)] = (30));

} else {
var statearr_30895_33060 = state_30871__$1;
(statearr_30895_33060[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (1))){
var state_30871__$1 = state_30871;
var statearr_30900_33061 = state_30871__$1;
(statearr_30900_33061[(2)] = null);

(statearr_30900_33061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (24))){
var inst_30763 = (state_30871[(7)]);
var inst_30784 = (state_30871[(2)]);
var inst_30785 = cljs.core.next(inst_30763);
var inst_30728 = inst_30785;
var inst_30729 = null;
var inst_30730 = (0);
var inst_30731 = (0);
var state_30871__$1 = (function (){var statearr_30902 = state_30871;
(statearr_30902[(13)] = inst_30728);

(statearr_30902[(14)] = inst_30730);

(statearr_30902[(15)] = inst_30784);

(statearr_30902[(16)] = inst_30731);

(statearr_30902[(17)] = inst_30729);

return statearr_30902;
})();
var statearr_30906_33062 = state_30871__$1;
(statearr_30906_33062[(2)] = null);

(statearr_30906_33062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (39))){
var state_30871__$1 = state_30871;
var statearr_30916_33063 = state_30871__$1;
(statearr_30916_33063[(2)] = null);

(statearr_30916_33063[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (4))){
var inst_30719 = (state_30871[(9)]);
var inst_30719__$1 = (state_30871[(2)]);
var inst_30720 = (inst_30719__$1 == null);
var state_30871__$1 = (function (){var statearr_30917 = state_30871;
(statearr_30917[(9)] = inst_30719__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30720)){
var statearr_30918_33065 = state_30871__$1;
(statearr_30918_33065[(1)] = (5));

} else {
var statearr_30919_33066 = state_30871__$1;
(statearr_30919_33066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (15))){
var inst_30728 = (state_30871[(13)]);
var inst_30730 = (state_30871[(14)]);
var inst_30731 = (state_30871[(16)]);
var inst_30729 = (state_30871[(17)]);
var inst_30757 = (state_30871[(2)]);
var inst_30758 = (inst_30731 + (1));
var tmp30911 = inst_30728;
var tmp30913 = inst_30730;
var tmp30914 = inst_30729;
var inst_30728__$1 = tmp30911;
var inst_30729__$1 = tmp30914;
var inst_30730__$1 = tmp30913;
var inst_30731__$1 = inst_30758;
var state_30871__$1 = (function (){var statearr_30924 = state_30871;
(statearr_30924[(13)] = inst_30728__$1);

(statearr_30924[(18)] = inst_30757);

(statearr_30924[(14)] = inst_30730__$1);

(statearr_30924[(16)] = inst_30731__$1);

(statearr_30924[(17)] = inst_30729__$1);

return statearr_30924;
})();
var statearr_30925_33071 = state_30871__$1;
(statearr_30925_33071[(2)] = null);

(statearr_30925_33071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (21))){
var inst_30788 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30931_33072 = state_30871__$1;
(statearr_30931_33072[(2)] = inst_30788);

(statearr_30931_33072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (31))){
var inst_30815 = (state_30871[(10)]);
var inst_30819 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30815);
var state_30871__$1 = state_30871;
var statearr_30934_33073 = state_30871__$1;
(statearr_30934_33073[(2)] = inst_30819);

(statearr_30934_33073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (32))){
var inst_30808 = (state_30871[(19)]);
var inst_30806 = (state_30871[(20)]);
var inst_30807 = (state_30871[(11)]);
var inst_30809 = (state_30871[(12)]);
var inst_30821 = (state_30871[(2)]);
var inst_30822 = (inst_30809 + (1));
var tmp30928 = inst_30808;
var tmp30929 = inst_30806;
var tmp30930 = inst_30807;
var inst_30806__$1 = tmp30929;
var inst_30807__$1 = tmp30930;
var inst_30808__$1 = tmp30928;
var inst_30809__$1 = inst_30822;
var state_30871__$1 = (function (){var statearr_30936 = state_30871;
(statearr_30936[(19)] = inst_30808__$1);

(statearr_30936[(20)] = inst_30806__$1);

(statearr_30936[(21)] = inst_30821);

(statearr_30936[(11)] = inst_30807__$1);

(statearr_30936[(12)] = inst_30809__$1);

return statearr_30936;
})();
var statearr_30939_33074 = state_30871__$1;
(statearr_30939_33074[(2)] = null);

(statearr_30939_33074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (40))){
var inst_30837 = (state_30871[(22)]);
var inst_30841 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30837);
var state_30871__$1 = state_30871;
var statearr_30940_33075 = state_30871__$1;
(statearr_30940_33075[(2)] = inst_30841);

(statearr_30940_33075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (33))){
var inst_30825 = (state_30871[(23)]);
var inst_30829 = cljs.core.chunked_seq_QMARK_(inst_30825);
var state_30871__$1 = state_30871;
if(inst_30829){
var statearr_30945_33076 = state_30871__$1;
(statearr_30945_33076[(1)] = (36));

} else {
var statearr_30947_33077 = state_30871__$1;
(statearr_30947_33077[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (13))){
var inst_30750 = (state_30871[(24)]);
var inst_30753 = cljs.core.async.close_BANG_(inst_30750);
var state_30871__$1 = state_30871;
var statearr_30949_33079 = state_30871__$1;
(statearr_30949_33079[(2)] = inst_30753);

(statearr_30949_33079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (22))){
var inst_30778 = (state_30871[(8)]);
var inst_30781 = cljs.core.async.close_BANG_(inst_30778);
var state_30871__$1 = state_30871;
var statearr_30952_33081 = state_30871__$1;
(statearr_30952_33081[(2)] = inst_30781);

(statearr_30952_33081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (36))){
var inst_30825 = (state_30871[(23)]);
var inst_30831 = cljs.core.chunk_first(inst_30825);
var inst_30832 = cljs.core.chunk_rest(inst_30825);
var inst_30833 = cljs.core.count(inst_30831);
var inst_30806 = inst_30832;
var inst_30807 = inst_30831;
var inst_30808 = inst_30833;
var inst_30809 = (0);
var state_30871__$1 = (function (){var statearr_30955 = state_30871;
(statearr_30955[(19)] = inst_30808);

(statearr_30955[(20)] = inst_30806);

(statearr_30955[(11)] = inst_30807);

(statearr_30955[(12)] = inst_30809);

return statearr_30955;
})();
var statearr_30956_33084 = state_30871__$1;
(statearr_30956_33084[(2)] = null);

(statearr_30956_33084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (41))){
var inst_30825 = (state_30871[(23)]);
var inst_30843 = (state_30871[(2)]);
var inst_30844 = cljs.core.next(inst_30825);
var inst_30806 = inst_30844;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30871__$1 = (function (){var statearr_30957 = state_30871;
(statearr_30957[(19)] = inst_30808);

(statearr_30957[(20)] = inst_30806);

(statearr_30957[(25)] = inst_30843);

(statearr_30957[(11)] = inst_30807);

(statearr_30957[(12)] = inst_30809);

return statearr_30957;
})();
var statearr_30958_33085 = state_30871__$1;
(statearr_30958_33085[(2)] = null);

(statearr_30958_33085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (43))){
var state_30871__$1 = state_30871;
var statearr_30959_33086 = state_30871__$1;
(statearr_30959_33086[(2)] = null);

(statearr_30959_33086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (29))){
var inst_30853 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30967_33088 = state_30871__$1;
(statearr_30967_33088[(2)] = inst_30853);

(statearr_30967_33088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (44))){
var inst_30862 = (state_30871[(2)]);
var state_30871__$1 = (function (){var statearr_30969 = state_30871;
(statearr_30969[(26)] = inst_30862);

return statearr_30969;
})();
var statearr_30970_33090 = state_30871__$1;
(statearr_30970_33090[(2)] = null);

(statearr_30970_33090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (6))){
var inst_30798 = (state_30871[(27)]);
var inst_30797 = cljs.core.deref(cs);
var inst_30798__$1 = cljs.core.keys(inst_30797);
var inst_30799 = cljs.core.count(inst_30798__$1);
var inst_30800 = cljs.core.reset_BANG_(dctr,inst_30799);
var inst_30805 = cljs.core.seq(inst_30798__$1);
var inst_30806 = inst_30805;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30871__$1 = (function (){var statearr_30976 = state_30871;
(statearr_30976[(19)] = inst_30808);

(statearr_30976[(28)] = inst_30800);

(statearr_30976[(20)] = inst_30806);

(statearr_30976[(11)] = inst_30807);

(statearr_30976[(12)] = inst_30809);

(statearr_30976[(27)] = inst_30798__$1);

return statearr_30976;
})();
var statearr_30977_33091 = state_30871__$1;
(statearr_30977_33091[(2)] = null);

(statearr_30977_33091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (28))){
var inst_30825 = (state_30871[(23)]);
var inst_30806 = (state_30871[(20)]);
var inst_30825__$1 = cljs.core.seq(inst_30806);
var state_30871__$1 = (function (){var statearr_30984 = state_30871;
(statearr_30984[(23)] = inst_30825__$1);

return statearr_30984;
})();
if(inst_30825__$1){
var statearr_30985_33092 = state_30871__$1;
(statearr_30985_33092[(1)] = (33));

} else {
var statearr_30988_33093 = state_30871__$1;
(statearr_30988_33093[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (25))){
var inst_30808 = (state_30871[(19)]);
var inst_30809 = (state_30871[(12)]);
var inst_30812 = (inst_30809 < inst_30808);
var inst_30813 = inst_30812;
var state_30871__$1 = state_30871;
if(cljs.core.truth_(inst_30813)){
var statearr_30989_33095 = state_30871__$1;
(statearr_30989_33095[(1)] = (27));

} else {
var statearr_30993_33097 = state_30871__$1;
(statearr_30993_33097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (34))){
var state_30871__$1 = state_30871;
var statearr_30995_33099 = state_30871__$1;
(statearr_30995_33099[(2)] = null);

(statearr_30995_33099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (17))){
var state_30871__$1 = state_30871;
var statearr_30996_33100 = state_30871__$1;
(statearr_30996_33100[(2)] = null);

(statearr_30996_33100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (3))){
var inst_30867 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30871__$1,inst_30867);
} else {
if((state_val_30874 === (12))){
var inst_30793 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30998_33102 = state_30871__$1;
(statearr_30998_33102[(2)] = inst_30793);

(statearr_30998_33102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (2))){
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30871__$1,(4),ch);
} else {
if((state_val_30874 === (23))){
var state_30871__$1 = state_30871;
var statearr_31000_33106 = state_30871__$1;
(statearr_31000_33106[(2)] = null);

(statearr_31000_33106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (35))){
var inst_30851 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_31003_33108 = state_30871__$1;
(statearr_31003_33108[(2)] = inst_30851);

(statearr_31003_33108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (19))){
var inst_30763 = (state_30871[(7)]);
var inst_30769 = cljs.core.chunk_first(inst_30763);
var inst_30770 = cljs.core.chunk_rest(inst_30763);
var inst_30771 = cljs.core.count(inst_30769);
var inst_30728 = inst_30770;
var inst_30729 = inst_30769;
var inst_30730 = inst_30771;
var inst_30731 = (0);
var state_30871__$1 = (function (){var statearr_31006 = state_30871;
(statearr_31006[(13)] = inst_30728);

(statearr_31006[(14)] = inst_30730);

(statearr_31006[(16)] = inst_30731);

(statearr_31006[(17)] = inst_30729);

return statearr_31006;
})();
var statearr_31007_33109 = state_30871__$1;
(statearr_31007_33109[(2)] = null);

(statearr_31007_33109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (11))){
var inst_30728 = (state_30871[(13)]);
var inst_30763 = (state_30871[(7)]);
var inst_30763__$1 = cljs.core.seq(inst_30728);
var state_30871__$1 = (function (){var statearr_31013 = state_30871;
(statearr_31013[(7)] = inst_30763__$1);

return statearr_31013;
})();
if(inst_30763__$1){
var statearr_31014_33110 = state_30871__$1;
(statearr_31014_33110[(1)] = (16));

} else {
var statearr_31015_33111 = state_30871__$1;
(statearr_31015_33111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (9))){
var inst_30795 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_31017_33112 = state_30871__$1;
(statearr_31017_33112[(2)] = inst_30795);

(statearr_31017_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (5))){
var inst_30726 = cljs.core.deref(cs);
var inst_30727 = cljs.core.seq(inst_30726);
var inst_30728 = inst_30727;
var inst_30729 = null;
var inst_30730 = (0);
var inst_30731 = (0);
var state_30871__$1 = (function (){var statearr_31022 = state_30871;
(statearr_31022[(13)] = inst_30728);

(statearr_31022[(14)] = inst_30730);

(statearr_31022[(16)] = inst_30731);

(statearr_31022[(17)] = inst_30729);

return statearr_31022;
})();
var statearr_31025_33115 = state_30871__$1;
(statearr_31025_33115[(2)] = null);

(statearr_31025_33115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (14))){
var state_30871__$1 = state_30871;
var statearr_31026_33116 = state_30871__$1;
(statearr_31026_33116[(2)] = null);

(statearr_31026_33116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (45))){
var inst_30859 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_31028_33117 = state_30871__$1;
(statearr_31028_33117[(2)] = inst_30859);

(statearr_31028_33117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (26))){
var inst_30798 = (state_30871[(27)]);
var inst_30855 = (state_30871[(2)]);
var inst_30856 = cljs.core.seq(inst_30798);
var state_30871__$1 = (function (){var statearr_31031 = state_30871;
(statearr_31031[(29)] = inst_30855);

return statearr_31031;
})();
if(inst_30856){
var statearr_31032_33118 = state_30871__$1;
(statearr_31032_33118[(1)] = (42));

} else {
var statearr_31033_33119 = state_30871__$1;
(statearr_31033_33119[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (16))){
var inst_30763 = (state_30871[(7)]);
var inst_30767 = cljs.core.chunked_seq_QMARK_(inst_30763);
var state_30871__$1 = state_30871;
if(inst_30767){
var statearr_31038_33120 = state_30871__$1;
(statearr_31038_33120[(1)] = (19));

} else {
var statearr_31040_33121 = state_30871__$1;
(statearr_31040_33121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (38))){
var inst_30848 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_31042_33122 = state_30871__$1;
(statearr_31042_33122[(2)] = inst_30848);

(statearr_31042_33122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (30))){
var state_30871__$1 = state_30871;
var statearr_31045_33123 = state_30871__$1;
(statearr_31045_33123[(2)] = null);

(statearr_31045_33123[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (10))){
var inst_30731 = (state_30871[(16)]);
var inst_30729 = (state_30871[(17)]);
var inst_30748 = cljs.core._nth(inst_30729,inst_30731);
var inst_30750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30748,(0),null);
var inst_30751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30748,(1),null);
var state_30871__$1 = (function (){var statearr_31046 = state_30871;
(statearr_31046[(24)] = inst_30750);

return statearr_31046;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_31047_33124 = state_30871__$1;
(statearr_31047_33124[(1)] = (13));

} else {
var statearr_31048_33125 = state_30871__$1;
(statearr_31048_33125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (18))){
var inst_30791 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_31052_33130 = state_30871__$1;
(statearr_31052_33130[(2)] = inst_30791);

(statearr_31052_33130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (42))){
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30871__$1,(45),dchan);
} else {
if((state_val_30874 === (37))){
var inst_30837 = (state_30871[(22)]);
var inst_30825 = (state_30871[(23)]);
var inst_30719 = (state_30871[(9)]);
var inst_30837__$1 = cljs.core.first(inst_30825);
var inst_30838 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30837__$1,inst_30719,done);
var state_30871__$1 = (function (){var statearr_31057 = state_30871;
(statearr_31057[(22)] = inst_30837__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_31061_33139 = state_30871__$1;
(statearr_31061_33139[(1)] = (39));

} else {
var statearr_31063_33140 = state_30871__$1;
(statearr_31063_33140[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (8))){
var inst_30730 = (state_30871[(14)]);
var inst_30731 = (state_30871[(16)]);
var inst_30741 = (inst_30731 < inst_30730);
var inst_30742 = inst_30741;
var state_30871__$1 = state_30871;
if(cljs.core.truth_(inst_30742)){
var statearr_31068_33141 = state_30871__$1;
(statearr_31068_33141[(1)] = (10));

} else {
var statearr_31070_33142 = state_30871__$1;
(statearr_31070_33142[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29549__auto__ = null;
var cljs$core$async$mult_$_state_machine__29549__auto____0 = (function (){
var statearr_31074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31074[(0)] = cljs$core$async$mult_$_state_machine__29549__auto__);

(statearr_31074[(1)] = (1));

return statearr_31074;
});
var cljs$core$async$mult_$_state_machine__29549__auto____1 = (function (state_30871){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_30871);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31076){var ex__29552__auto__ = e31076;
var statearr_31077_33144 = state_30871;
(statearr_31077_33144[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_30871[(4)]))){
var statearr_31080_33145 = state_30871;
(statearr_31080_33145[(1)] = cljs.core.first((state_30871[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33150 = state_30871;
state_30871 = G__33150;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29549__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29549__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29549__auto____0;
cljs$core$async$mult_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29549__auto____1;
return cljs$core$async$mult_$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31081 = f__29688__auto__();
(statearr_31081[(6)] = c__29687__auto___33053);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31083 = arguments.length;
switch (G__31083) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33153 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33153(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33154 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33154(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33159 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33159(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33167 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33167(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33177 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33177(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33184 = arguments.length;
var i__4737__auto___33186 = (0);
while(true){
if((i__4737__auto___33186 < len__4736__auto___33184)){
args__4742__auto__.push((arguments[i__4737__auto___33186]));

var G__33190 = (i__4737__auto___33186 + (1));
i__4737__auto___33186 = G__33190;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31117){
var map__31118 = p__31117;
var map__31118__$1 = (((((!((map__31118 == null))))?(((((map__31118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31118):map__31118);
var opts = map__31118__$1;
var statearr_31124_33191 = state;
(statearr_31124_33191[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31125_33193 = state;
(statearr_31125_33193[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31126_33194 = state;
(statearr_31126_33194[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31110){
var G__31111 = cljs.core.first(seq31110);
var seq31110__$1 = cljs.core.next(seq31110);
var G__31112 = cljs.core.first(seq31110__$1);
var seq31110__$2 = cljs.core.next(seq31110__$1);
var G__31113 = cljs.core.first(seq31110__$2);
var seq31110__$3 = cljs.core.next(seq31110__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31111,G__31112,G__31113,seq31110__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31135 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31136){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31136 = meta31136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31137,meta31136__$1){
var self__ = this;
var _31137__$1 = this;
return (new cljs.core.async.t_cljs$core$async31135(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31136__$1));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31137){
var self__ = this;
var _31137__$1 = this;
return self__.meta31136;
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31136","meta31136",1556118478,null)], null);
}));

(cljs.core.async.t_cljs$core$async31135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31135");

(cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31135.
 */
cljs.core.async.__GT_t_cljs$core$async31135 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31135(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31136){
return (new cljs.core.async.t_cljs$core$async31135(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31136));
});

}

return (new cljs.core.async.t_cljs$core$async31135(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29687__auto___33209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31286){
var state_val_31287 = (state_31286[(1)]);
if((state_val_31287 === (7))){
var inst_31182 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31289_33211 = state_31286__$1;
(statearr_31289_33211[(2)] = inst_31182);

(statearr_31289_33211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (20))){
var inst_31194 = (state_31286[(7)]);
var state_31286__$1 = state_31286;
var statearr_31290_33212 = state_31286__$1;
(statearr_31290_33212[(2)] = inst_31194);

(statearr_31290_33212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (27))){
var state_31286__$1 = state_31286;
var statearr_31292_33213 = state_31286__$1;
(statearr_31292_33213[(2)] = null);

(statearr_31292_33213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (1))){
var inst_31165 = (state_31286[(8)]);
var inst_31165__$1 = calc_state();
var inst_31171 = (inst_31165__$1 == null);
var inst_31172 = cljs.core.not(inst_31171);
var state_31286__$1 = (function (){var statearr_31293 = state_31286;
(statearr_31293[(8)] = inst_31165__$1);

return statearr_31293;
})();
if(inst_31172){
var statearr_31294_33214 = state_31286__$1;
(statearr_31294_33214[(1)] = (2));

} else {
var statearr_31295_33215 = state_31286__$1;
(statearr_31295_33215[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (24))){
var inst_31231 = (state_31286[(9)]);
var inst_31259 = (state_31286[(10)]);
var inst_31245 = (state_31286[(11)]);
var inst_31259__$1 = (inst_31231.cljs$core$IFn$_invoke$arity$1 ? inst_31231.cljs$core$IFn$_invoke$arity$1(inst_31245) : inst_31231.call(null,inst_31245));
var state_31286__$1 = (function (){var statearr_31296 = state_31286;
(statearr_31296[(10)] = inst_31259__$1);

return statearr_31296;
})();
if(cljs.core.truth_(inst_31259__$1)){
var statearr_31297_33220 = state_31286__$1;
(statearr_31297_33220[(1)] = (29));

} else {
var statearr_31298_33221 = state_31286__$1;
(statearr_31298_33221[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (4))){
var inst_31185 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31185)){
var statearr_31300_33222 = state_31286__$1;
(statearr_31300_33222[(1)] = (8));

} else {
var statearr_31301_33223 = state_31286__$1;
(statearr_31301_33223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (15))){
var inst_31223 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31223)){
var statearr_31307_33224 = state_31286__$1;
(statearr_31307_33224[(1)] = (19));

} else {
var statearr_31311_33225 = state_31286__$1;
(statearr_31311_33225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (21))){
var inst_31228 = (state_31286[(12)]);
var inst_31228__$1 = (state_31286[(2)]);
var inst_31231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31228__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31228__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31228__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31286__$1 = (function (){var statearr_31313 = state_31286;
(statearr_31313[(13)] = inst_31232);

(statearr_31313[(12)] = inst_31228__$1);

(statearr_31313[(9)] = inst_31231);

return statearr_31313;
})();
return cljs.core.async.ioc_alts_BANG_(state_31286__$1,(22),inst_31233);
} else {
if((state_val_31287 === (31))){
var inst_31268 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31268)){
var statearr_31316_33228 = state_31286__$1;
(statearr_31316_33228[(1)] = (32));

} else {
var statearr_31317_33229 = state_31286__$1;
(statearr_31317_33229[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (32))){
var inst_31244 = (state_31286[(14)]);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31286__$1,(35),out,inst_31244);
} else {
if((state_val_31287 === (33))){
var inst_31228 = (state_31286[(12)]);
var inst_31194 = inst_31228;
var state_31286__$1 = (function (){var statearr_31318 = state_31286;
(statearr_31318[(7)] = inst_31194);

return statearr_31318;
})();
var statearr_31319_33233 = state_31286__$1;
(statearr_31319_33233[(2)] = null);

(statearr_31319_33233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (13))){
var inst_31194 = (state_31286[(7)]);
var inst_31208 = inst_31194.cljs$lang$protocol_mask$partition0$;
var inst_31210 = (inst_31208 & (64));
var inst_31214 = inst_31194.cljs$core$ISeq$;
var inst_31215 = (cljs.core.PROTOCOL_SENTINEL === inst_31214);
var inst_31216 = ((inst_31210) || (inst_31215));
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31216)){
var statearr_31320_33241 = state_31286__$1;
(statearr_31320_33241[(1)] = (16));

} else {
var statearr_31321_33243 = state_31286__$1;
(statearr_31321_33243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (22))){
var inst_31244 = (state_31286[(14)]);
var inst_31245 = (state_31286[(11)]);
var inst_31239 = (state_31286[(2)]);
var inst_31244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31239,(0),null);
var inst_31245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31239,(1),null);
var inst_31246 = (inst_31244__$1 == null);
var inst_31247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31245__$1,change);
var inst_31248 = ((inst_31246) || (inst_31247));
var state_31286__$1 = (function (){var statearr_31323 = state_31286;
(statearr_31323[(14)] = inst_31244__$1);

(statearr_31323[(11)] = inst_31245__$1);

return statearr_31323;
})();
if(cljs.core.truth_(inst_31248)){
var statearr_31324_33247 = state_31286__$1;
(statearr_31324_33247[(1)] = (23));

} else {
var statearr_31325_33248 = state_31286__$1;
(statearr_31325_33248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (36))){
var inst_31228 = (state_31286[(12)]);
var inst_31194 = inst_31228;
var state_31286__$1 = (function (){var statearr_31327 = state_31286;
(statearr_31327[(7)] = inst_31194);

return statearr_31327;
})();
var statearr_31328_33249 = state_31286__$1;
(statearr_31328_33249[(2)] = null);

(statearr_31328_33249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (29))){
var inst_31259 = (state_31286[(10)]);
var state_31286__$1 = state_31286;
var statearr_31330_33252 = state_31286__$1;
(statearr_31330_33252[(2)] = inst_31259);

(statearr_31330_33252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (6))){
var state_31286__$1 = state_31286;
var statearr_31331_33255 = state_31286__$1;
(statearr_31331_33255[(2)] = false);

(statearr_31331_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (28))){
var inst_31255 = (state_31286[(2)]);
var inst_31256 = calc_state();
var inst_31194 = inst_31256;
var state_31286__$1 = (function (){var statearr_31332 = state_31286;
(statearr_31332[(7)] = inst_31194);

(statearr_31332[(15)] = inst_31255);

return statearr_31332;
})();
var statearr_31333_33256 = state_31286__$1;
(statearr_31333_33256[(2)] = null);

(statearr_31333_33256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (25))){
var inst_31282 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31334_33258 = state_31286__$1;
(statearr_31334_33258[(2)] = inst_31282);

(statearr_31334_33258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (34))){
var inst_31280 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31335_33263 = state_31286__$1;
(statearr_31335_33263[(2)] = inst_31280);

(statearr_31335_33263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (17))){
var state_31286__$1 = state_31286;
var statearr_31338_33264 = state_31286__$1;
(statearr_31338_33264[(2)] = false);

(statearr_31338_33264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (3))){
var state_31286__$1 = state_31286;
var statearr_31341_33265 = state_31286__$1;
(statearr_31341_33265[(2)] = false);

(statearr_31341_33265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (12))){
var inst_31284 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31286__$1,inst_31284);
} else {
if((state_val_31287 === (2))){
var inst_31165 = (state_31286[(8)]);
var inst_31174 = inst_31165.cljs$lang$protocol_mask$partition0$;
var inst_31175 = (inst_31174 & (64));
var inst_31176 = inst_31165.cljs$core$ISeq$;
var inst_31177 = (cljs.core.PROTOCOL_SENTINEL === inst_31176);
var inst_31178 = ((inst_31175) || (inst_31177));
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31178)){
var statearr_31342_33266 = state_31286__$1;
(statearr_31342_33266[(1)] = (5));

} else {
var statearr_31343_33267 = state_31286__$1;
(statearr_31343_33267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (23))){
var inst_31244 = (state_31286[(14)]);
var inst_31250 = (inst_31244 == null);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31250)){
var statearr_31344_33268 = state_31286__$1;
(statearr_31344_33268[(1)] = (26));

} else {
var statearr_31345_33270 = state_31286__$1;
(statearr_31345_33270[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (35))){
var inst_31271 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31271)){
var statearr_31346_33271 = state_31286__$1;
(statearr_31346_33271[(1)] = (36));

} else {
var statearr_31347_33273 = state_31286__$1;
(statearr_31347_33273[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (19))){
var inst_31194 = (state_31286[(7)]);
var inst_31225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31194);
var state_31286__$1 = state_31286;
var statearr_31348_33274 = state_31286__$1;
(statearr_31348_33274[(2)] = inst_31225);

(statearr_31348_33274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (11))){
var inst_31194 = (state_31286[(7)]);
var inst_31205 = (inst_31194 == null);
var inst_31206 = cljs.core.not(inst_31205);
var state_31286__$1 = state_31286;
if(inst_31206){
var statearr_31351_33275 = state_31286__$1;
(statearr_31351_33275[(1)] = (13));

} else {
var statearr_31353_33276 = state_31286__$1;
(statearr_31353_33276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (9))){
var inst_31165 = (state_31286[(8)]);
var state_31286__$1 = state_31286;
var statearr_31355_33277 = state_31286__$1;
(statearr_31355_33277[(2)] = inst_31165);

(statearr_31355_33277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (5))){
var state_31286__$1 = state_31286;
var statearr_31356_33278 = state_31286__$1;
(statearr_31356_33278[(2)] = true);

(statearr_31356_33278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (14))){
var state_31286__$1 = state_31286;
var statearr_31357_33279 = state_31286__$1;
(statearr_31357_33279[(2)] = false);

(statearr_31357_33279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (26))){
var inst_31245 = (state_31286[(11)]);
var inst_31252 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31245);
var state_31286__$1 = state_31286;
var statearr_31358_33282 = state_31286__$1;
(statearr_31358_33282[(2)] = inst_31252);

(statearr_31358_33282[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (16))){
var state_31286__$1 = state_31286;
var statearr_31359_33283 = state_31286__$1;
(statearr_31359_33283[(2)] = true);

(statearr_31359_33283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (38))){
var inst_31276 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31360_33286 = state_31286__$1;
(statearr_31360_33286[(2)] = inst_31276);

(statearr_31360_33286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (30))){
var inst_31232 = (state_31286[(13)]);
var inst_31231 = (state_31286[(9)]);
var inst_31245 = (state_31286[(11)]);
var inst_31263 = cljs.core.empty_QMARK_(inst_31231);
var inst_31264 = (inst_31232.cljs$core$IFn$_invoke$arity$1 ? inst_31232.cljs$core$IFn$_invoke$arity$1(inst_31245) : inst_31232.call(null,inst_31245));
var inst_31265 = cljs.core.not(inst_31264);
var inst_31266 = ((inst_31263) && (inst_31265));
var state_31286__$1 = state_31286;
var statearr_31363_33287 = state_31286__$1;
(statearr_31363_33287[(2)] = inst_31266);

(statearr_31363_33287[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (10))){
var inst_31165 = (state_31286[(8)]);
var inst_31190 = (state_31286[(2)]);
var inst_31191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31190,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31190,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31190,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31194 = inst_31165;
var state_31286__$1 = (function (){var statearr_31364 = state_31286;
(statearr_31364[(7)] = inst_31194);

(statearr_31364[(16)] = inst_31192);

(statearr_31364[(17)] = inst_31193);

(statearr_31364[(18)] = inst_31191);

return statearr_31364;
})();
var statearr_31365_33298 = state_31286__$1;
(statearr_31365_33298[(2)] = null);

(statearr_31365_33298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (18))){
var inst_31220 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31366_33299 = state_31286__$1;
(statearr_31366_33299[(2)] = inst_31220);

(statearr_31366_33299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (37))){
var state_31286__$1 = state_31286;
var statearr_31368_33300 = state_31286__$1;
(statearr_31368_33300[(2)] = null);

(statearr_31368_33300[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (8))){
var inst_31165 = (state_31286[(8)]);
var inst_31187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31165);
var state_31286__$1 = state_31286;
var statearr_31372_33301 = state_31286__$1;
(statearr_31372_33301[(2)] = inst_31187);

(statearr_31372_33301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29549__auto__ = null;
var cljs$core$async$mix_$_state_machine__29549__auto____0 = (function (){
var statearr_31373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31373[(0)] = cljs$core$async$mix_$_state_machine__29549__auto__);

(statearr_31373[(1)] = (1));

return statearr_31373;
});
var cljs$core$async$mix_$_state_machine__29549__auto____1 = (function (state_31286){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31286);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31374){var ex__29552__auto__ = e31374;
var statearr_31376_33302 = state_31286;
(statearr_31376_33302[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31286[(4)]))){
var statearr_31378_33304 = state_31286;
(statearr_31378_33304[(1)] = cljs.core.first((state_31286[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33305 = state_31286;
state_31286 = G__33305;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29549__auto__ = function(state_31286){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29549__auto____1.call(this,state_31286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29549__auto____0;
cljs$core$async$mix_$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29549__auto____1;
return cljs$core$async$mix_$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31381 = f__29688__auto__();
(statearr_31381[(6)] = c__29687__auto___33209);

return statearr_31381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33310 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33310(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33311 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33311(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33317 = (function() {
var G__33318 = null;
var G__33318__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33318__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33318 = function(p,v){
switch(arguments.length){
case 1:
return G__33318__1.call(this,p);
case 2:
return G__33318__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33318.cljs$core$IFn$_invoke$arity$1 = G__33318__1;
G__33318.cljs$core$IFn$_invoke$arity$2 = G__33318__2;
return G__33318;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31416 = arguments.length;
switch (G__31416) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33317(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33317(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31421 = arguments.length;
switch (G__31421) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31418_SHARP_){
if(cljs.core.truth_((p1__31418_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31418_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31418_SHARP_.call(null,topic)))){
return p1__31418_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31418_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31427 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31428){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31428 = meta31428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31429,meta31428__$1){
var self__ = this;
var _31429__$1 = this;
return (new cljs.core.async.t_cljs$core$async31427(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31428__$1));
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31429){
var self__ = this;
var _31429__$1 = this;
return self__.meta31428;
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31428","meta31428",572797462,null)], null);
}));

(cljs.core.async.t_cljs$core$async31427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31427");

(cljs.core.async.t_cljs$core$async31427.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31427.
 */
cljs.core.async.__GT_t_cljs$core$async31427 = (function cljs$core$async$__GT_t_cljs$core$async31427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31428){
return (new cljs.core.async.t_cljs$core$async31427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31428));
});

}

return (new cljs.core.async.t_cljs$core$async31427(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29687__auto___33334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31530){
var state_val_31531 = (state_31530[(1)]);
if((state_val_31531 === (7))){
var inst_31525 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31535_33336 = state_31530__$1;
(statearr_31535_33336[(2)] = inst_31525);

(statearr_31535_33336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (20))){
var state_31530__$1 = state_31530;
var statearr_31536_33337 = state_31530__$1;
(statearr_31536_33337[(2)] = null);

(statearr_31536_33337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (1))){
var state_31530__$1 = state_31530;
var statearr_31537_33338 = state_31530__$1;
(statearr_31537_33338[(2)] = null);

(statearr_31537_33338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (24))){
var inst_31508 = (state_31530[(7)]);
var inst_31517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31508);
var state_31530__$1 = state_31530;
var statearr_31538_33339 = state_31530__$1;
(statearr_31538_33339[(2)] = inst_31517);

(statearr_31538_33339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (4))){
var inst_31456 = (state_31530[(8)]);
var inst_31456__$1 = (state_31530[(2)]);
var inst_31457 = (inst_31456__$1 == null);
var state_31530__$1 = (function (){var statearr_31539 = state_31530;
(statearr_31539[(8)] = inst_31456__$1);

return statearr_31539;
})();
if(cljs.core.truth_(inst_31457)){
var statearr_31540_33340 = state_31530__$1;
(statearr_31540_33340[(1)] = (5));

} else {
var statearr_31541_33341 = state_31530__$1;
(statearr_31541_33341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (15))){
var inst_31502 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31542_33342 = state_31530__$1;
(statearr_31542_33342[(2)] = inst_31502);

(statearr_31542_33342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (21))){
var inst_31522 = (state_31530[(2)]);
var state_31530__$1 = (function (){var statearr_31543 = state_31530;
(statearr_31543[(9)] = inst_31522);

return statearr_31543;
})();
var statearr_31544_33343 = state_31530__$1;
(statearr_31544_33343[(2)] = null);

(statearr_31544_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (13))){
var inst_31484 = (state_31530[(10)]);
var inst_31486 = cljs.core.chunked_seq_QMARK_(inst_31484);
var state_31530__$1 = state_31530;
if(inst_31486){
var statearr_31545_33344 = state_31530__$1;
(statearr_31545_33344[(1)] = (16));

} else {
var statearr_31546_33345 = state_31530__$1;
(statearr_31546_33345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (22))){
var inst_31514 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
if(cljs.core.truth_(inst_31514)){
var statearr_31547_33346 = state_31530__$1;
(statearr_31547_33346[(1)] = (23));

} else {
var statearr_31548_33347 = state_31530__$1;
(statearr_31548_33347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (6))){
var inst_31508 = (state_31530[(7)]);
var inst_31456 = (state_31530[(8)]);
var inst_31510 = (state_31530[(11)]);
var inst_31508__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31456) : topic_fn.call(null,inst_31456));
var inst_31509 = cljs.core.deref(mults);
var inst_31510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31509,inst_31508__$1);
var state_31530__$1 = (function (){var statearr_31550 = state_31530;
(statearr_31550[(7)] = inst_31508__$1);

(statearr_31550[(11)] = inst_31510__$1);

return statearr_31550;
})();
if(cljs.core.truth_(inst_31510__$1)){
var statearr_31552_33348 = state_31530__$1;
(statearr_31552_33348[(1)] = (19));

} else {
var statearr_31553_33350 = state_31530__$1;
(statearr_31553_33350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (25))){
var inst_31519 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31554_33351 = state_31530__$1;
(statearr_31554_33351[(2)] = inst_31519);

(statearr_31554_33351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (17))){
var inst_31484 = (state_31530[(10)]);
var inst_31493 = cljs.core.first(inst_31484);
var inst_31494 = cljs.core.async.muxch_STAR_(inst_31493);
var inst_31495 = cljs.core.async.close_BANG_(inst_31494);
var inst_31496 = cljs.core.next(inst_31484);
var inst_31466 = inst_31496;
var inst_31467 = null;
var inst_31468 = (0);
var inst_31469 = (0);
var state_31530__$1 = (function (){var statearr_31557 = state_31530;
(statearr_31557[(12)] = inst_31469);

(statearr_31557[(13)] = inst_31466);

(statearr_31557[(14)] = inst_31468);

(statearr_31557[(15)] = inst_31495);

(statearr_31557[(16)] = inst_31467);

return statearr_31557;
})();
var statearr_31558_33353 = state_31530__$1;
(statearr_31558_33353[(2)] = null);

(statearr_31558_33353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (3))){
var inst_31527 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31530__$1,inst_31527);
} else {
if((state_val_31531 === (12))){
var inst_31504 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31565_33354 = state_31530__$1;
(statearr_31565_33354[(2)] = inst_31504);

(statearr_31565_33354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (2))){
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31530__$1,(4),ch);
} else {
if((state_val_31531 === (23))){
var state_31530__$1 = state_31530;
var statearr_31566_33356 = state_31530__$1;
(statearr_31566_33356[(2)] = null);

(statearr_31566_33356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (19))){
var inst_31456 = (state_31530[(8)]);
var inst_31510 = (state_31530[(11)]);
var inst_31512 = cljs.core.async.muxch_STAR_(inst_31510);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31530__$1,(22),inst_31512,inst_31456);
} else {
if((state_val_31531 === (11))){
var inst_31484 = (state_31530[(10)]);
var inst_31466 = (state_31530[(13)]);
var inst_31484__$1 = cljs.core.seq(inst_31466);
var state_31530__$1 = (function (){var statearr_31569 = state_31530;
(statearr_31569[(10)] = inst_31484__$1);

return statearr_31569;
})();
if(inst_31484__$1){
var statearr_31570_33357 = state_31530__$1;
(statearr_31570_33357[(1)] = (13));

} else {
var statearr_31571_33358 = state_31530__$1;
(statearr_31571_33358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (9))){
var inst_31506 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31572_33359 = state_31530__$1;
(statearr_31572_33359[(2)] = inst_31506);

(statearr_31572_33359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (5))){
var inst_31463 = cljs.core.deref(mults);
var inst_31464 = cljs.core.vals(inst_31463);
var inst_31465 = cljs.core.seq(inst_31464);
var inst_31466 = inst_31465;
var inst_31467 = null;
var inst_31468 = (0);
var inst_31469 = (0);
var state_31530__$1 = (function (){var statearr_31573 = state_31530;
(statearr_31573[(12)] = inst_31469);

(statearr_31573[(13)] = inst_31466);

(statearr_31573[(14)] = inst_31468);

(statearr_31573[(16)] = inst_31467);

return statearr_31573;
})();
var statearr_31574_33360 = state_31530__$1;
(statearr_31574_33360[(2)] = null);

(statearr_31574_33360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (14))){
var state_31530__$1 = state_31530;
var statearr_31578_33361 = state_31530__$1;
(statearr_31578_33361[(2)] = null);

(statearr_31578_33361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (16))){
var inst_31484 = (state_31530[(10)]);
var inst_31488 = cljs.core.chunk_first(inst_31484);
var inst_31489 = cljs.core.chunk_rest(inst_31484);
var inst_31490 = cljs.core.count(inst_31488);
var inst_31466 = inst_31489;
var inst_31467 = inst_31488;
var inst_31468 = inst_31490;
var inst_31469 = (0);
var state_31530__$1 = (function (){var statearr_31579 = state_31530;
(statearr_31579[(12)] = inst_31469);

(statearr_31579[(13)] = inst_31466);

(statearr_31579[(14)] = inst_31468);

(statearr_31579[(16)] = inst_31467);

return statearr_31579;
})();
var statearr_31580_33362 = state_31530__$1;
(statearr_31580_33362[(2)] = null);

(statearr_31580_33362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (10))){
var inst_31469 = (state_31530[(12)]);
var inst_31466 = (state_31530[(13)]);
var inst_31468 = (state_31530[(14)]);
var inst_31467 = (state_31530[(16)]);
var inst_31478 = cljs.core._nth(inst_31467,inst_31469);
var inst_31479 = cljs.core.async.muxch_STAR_(inst_31478);
var inst_31480 = cljs.core.async.close_BANG_(inst_31479);
var inst_31481 = (inst_31469 + (1));
var tmp31575 = inst_31466;
var tmp31576 = inst_31468;
var tmp31577 = inst_31467;
var inst_31466__$1 = tmp31575;
var inst_31467__$1 = tmp31577;
var inst_31468__$1 = tmp31576;
var inst_31469__$1 = inst_31481;
var state_31530__$1 = (function (){var statearr_31582 = state_31530;
(statearr_31582[(12)] = inst_31469__$1);

(statearr_31582[(13)] = inst_31466__$1);

(statearr_31582[(14)] = inst_31468__$1);

(statearr_31582[(17)] = inst_31480);

(statearr_31582[(16)] = inst_31467__$1);

return statearr_31582;
})();
var statearr_31583_33363 = state_31530__$1;
(statearr_31583_33363[(2)] = null);

(statearr_31583_33363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (18))){
var inst_31499 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31584_33364 = state_31530__$1;
(statearr_31584_33364[(2)] = inst_31499);

(statearr_31584_33364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (8))){
var inst_31469 = (state_31530[(12)]);
var inst_31468 = (state_31530[(14)]);
var inst_31471 = (inst_31469 < inst_31468);
var inst_31472 = inst_31471;
var state_31530__$1 = state_31530;
if(cljs.core.truth_(inst_31472)){
var statearr_31585_33365 = state_31530__$1;
(statearr_31585_33365[(1)] = (10));

} else {
var statearr_31588_33366 = state_31530__$1;
(statearr_31588_33366[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_31590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31590[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_31590[(1)] = (1));

return statearr_31590;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_31530){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31530);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31591){var ex__29552__auto__ = e31591;
var statearr_31592_33367 = state_31530;
(statearr_31592_33367[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31530[(4)]))){
var statearr_31596_33368 = state_31530;
(statearr_31596_33368[(1)] = cljs.core.first((state_31530[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33369 = state_31530;
state_31530 = G__33369;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31597 = f__29688__auto__();
(statearr_31597[(6)] = c__29687__auto___33334);

return statearr_31597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31602 = arguments.length;
switch (G__31602) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31614 = arguments.length;
switch (G__31614) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31618 = arguments.length;
switch (G__31618) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29687__auto___33387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31672){
var state_val_31673 = (state_31672[(1)]);
if((state_val_31673 === (7))){
var state_31672__$1 = state_31672;
var statearr_31675_33388 = state_31672__$1;
(statearr_31675_33388[(2)] = null);

(statearr_31675_33388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (1))){
var state_31672__$1 = state_31672;
var statearr_31676_33390 = state_31672__$1;
(statearr_31676_33390[(2)] = null);

(statearr_31676_33390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (4))){
var inst_31625 = (state_31672[(7)]);
var inst_31624 = (state_31672[(8)]);
var inst_31627 = (inst_31625 < inst_31624);
var state_31672__$1 = state_31672;
if(cljs.core.truth_(inst_31627)){
var statearr_31677_33391 = state_31672__$1;
(statearr_31677_33391[(1)] = (6));

} else {
var statearr_31678_33392 = state_31672__$1;
(statearr_31678_33392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (15))){
var inst_31657 = (state_31672[(9)]);
var inst_31663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31657);
var state_31672__$1 = state_31672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31672__$1,(17),out,inst_31663);
} else {
if((state_val_31673 === (13))){
var inst_31657 = (state_31672[(9)]);
var inst_31657__$1 = (state_31672[(2)]);
var inst_31658 = cljs.core.some(cljs.core.nil_QMARK_,inst_31657__$1);
var state_31672__$1 = (function (){var statearr_31679 = state_31672;
(statearr_31679[(9)] = inst_31657__$1);

return statearr_31679;
})();
if(cljs.core.truth_(inst_31658)){
var statearr_31680_33393 = state_31672__$1;
(statearr_31680_33393[(1)] = (14));

} else {
var statearr_31681_33394 = state_31672__$1;
(statearr_31681_33394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (6))){
var state_31672__$1 = state_31672;
var statearr_31682_33396 = state_31672__$1;
(statearr_31682_33396[(2)] = null);

(statearr_31682_33396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (17))){
var inst_31665 = (state_31672[(2)]);
var state_31672__$1 = (function (){var statearr_31691 = state_31672;
(statearr_31691[(10)] = inst_31665);

return statearr_31691;
})();
var statearr_31692_33397 = state_31672__$1;
(statearr_31692_33397[(2)] = null);

(statearr_31692_33397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (3))){
var inst_31670 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31672__$1,inst_31670);
} else {
if((state_val_31673 === (12))){
var _ = (function (){var statearr_31693 = state_31672;
(statearr_31693[(4)] = cljs.core.rest((state_31672[(4)])));

return statearr_31693;
})();
var state_31672__$1 = state_31672;
var ex31690 = (state_31672__$1[(2)]);
var statearr_31694_33399 = state_31672__$1;
(statearr_31694_33399[(5)] = ex31690);


if((ex31690 instanceof Object)){
var statearr_31696_33400 = state_31672__$1;
(statearr_31696_33400[(1)] = (11));

(statearr_31696_33400[(5)] = null);

} else {
throw ex31690;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (2))){
var inst_31623 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31624 = cnt;
var inst_31625 = (0);
var state_31672__$1 = (function (){var statearr_31697 = state_31672;
(statearr_31697[(11)] = inst_31623);

(statearr_31697[(7)] = inst_31625);

(statearr_31697[(8)] = inst_31624);

return statearr_31697;
})();
var statearr_31698_33401 = state_31672__$1;
(statearr_31698_33401[(2)] = null);

(statearr_31698_33401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (11))){
var inst_31634 = (state_31672[(2)]);
var inst_31635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31672__$1 = (function (){var statearr_31699 = state_31672;
(statearr_31699[(12)] = inst_31634);

return statearr_31699;
})();
var statearr_31700_33402 = state_31672__$1;
(statearr_31700_33402[(2)] = inst_31635);

(statearr_31700_33402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (9))){
var inst_31625 = (state_31672[(7)]);
var _ = (function (){var statearr_31701 = state_31672;
(statearr_31701[(4)] = cljs.core.cons((12),(state_31672[(4)])));

return statearr_31701;
})();
var inst_31641 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31625) : chs__$1.call(null,inst_31625));
var inst_31642 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31625) : done.call(null,inst_31625));
var inst_31643 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31641,inst_31642);
var ___$1 = (function (){var statearr_31702 = state_31672;
(statearr_31702[(4)] = cljs.core.rest((state_31672[(4)])));

return statearr_31702;
})();
var state_31672__$1 = state_31672;
var statearr_31703_33403 = state_31672__$1;
(statearr_31703_33403[(2)] = inst_31643);

(statearr_31703_33403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (5))){
var inst_31654 = (state_31672[(2)]);
var state_31672__$1 = (function (){var statearr_31704 = state_31672;
(statearr_31704[(13)] = inst_31654);

return statearr_31704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31672__$1,(13),dchan);
} else {
if((state_val_31673 === (14))){
var inst_31660 = cljs.core.async.close_BANG_(out);
var state_31672__$1 = state_31672;
var statearr_31705_33404 = state_31672__$1;
(statearr_31705_33404[(2)] = inst_31660);

(statearr_31705_33404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (16))){
var inst_31668 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
var statearr_31707_33406 = state_31672__$1;
(statearr_31707_33406[(2)] = inst_31668);

(statearr_31707_33406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (10))){
var inst_31625 = (state_31672[(7)]);
var inst_31646 = (state_31672[(2)]);
var inst_31647 = (inst_31625 + (1));
var inst_31625__$1 = inst_31647;
var state_31672__$1 = (function (){var statearr_31708 = state_31672;
(statearr_31708[(7)] = inst_31625__$1);

(statearr_31708[(14)] = inst_31646);

return statearr_31708;
})();
var statearr_31709_33407 = state_31672__$1;
(statearr_31709_33407[(2)] = null);

(statearr_31709_33407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31673 === (8))){
var inst_31651 = (state_31672[(2)]);
var state_31672__$1 = state_31672;
var statearr_31710_33408 = state_31672__$1;
(statearr_31710_33408[(2)] = inst_31651);

(statearr_31710_33408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_31713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31713[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_31713[(1)] = (1));

return statearr_31713;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_31672){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31672);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31714){var ex__29552__auto__ = e31714;
var statearr_31715_33412 = state_31672;
(statearr_31715_33412[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31672[(4)]))){
var statearr_31716_33414 = state_31672;
(statearr_31716_33414[(1)] = cljs.core.first((state_31672[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33420 = state_31672;
state_31672 = G__33420;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_31672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_31672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31720 = f__29688__auto__();
(statearr_31720[(6)] = c__29687__auto___33387);

return statearr_31720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31723 = arguments.length;
switch (G__31723) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31755){
var state_val_31756 = (state_31755[(1)]);
if((state_val_31756 === (7))){
var inst_31735 = (state_31755[(7)]);
var inst_31734 = (state_31755[(8)]);
var inst_31734__$1 = (state_31755[(2)]);
var inst_31735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31734__$1,(0),null);
var inst_31736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31734__$1,(1),null);
var inst_31737 = (inst_31735__$1 == null);
var state_31755__$1 = (function (){var statearr_31757 = state_31755;
(statearr_31757[(7)] = inst_31735__$1);

(statearr_31757[(8)] = inst_31734__$1);

(statearr_31757[(9)] = inst_31736);

return statearr_31757;
})();
if(cljs.core.truth_(inst_31737)){
var statearr_31758_33434 = state_31755__$1;
(statearr_31758_33434[(1)] = (8));

} else {
var statearr_31759_33435 = state_31755__$1;
(statearr_31759_33435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (1))){
var inst_31724 = cljs.core.vec(chs);
var inst_31725 = inst_31724;
var state_31755__$1 = (function (){var statearr_31761 = state_31755;
(statearr_31761[(10)] = inst_31725);

return statearr_31761;
})();
var statearr_31762_33437 = state_31755__$1;
(statearr_31762_33437[(2)] = null);

(statearr_31762_33437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (4))){
var inst_31725 = (state_31755[(10)]);
var state_31755__$1 = state_31755;
return cljs.core.async.ioc_alts_BANG_(state_31755__$1,(7),inst_31725);
} else {
if((state_val_31756 === (6))){
var inst_31751 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31763_33439 = state_31755__$1;
(statearr_31763_33439[(2)] = inst_31751);

(statearr_31763_33439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (3))){
var inst_31753 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31755__$1,inst_31753);
} else {
if((state_val_31756 === (2))){
var inst_31725 = (state_31755[(10)]);
var inst_31727 = cljs.core.count(inst_31725);
var inst_31728 = (inst_31727 > (0));
var state_31755__$1 = state_31755;
if(cljs.core.truth_(inst_31728)){
var statearr_31765_33445 = state_31755__$1;
(statearr_31765_33445[(1)] = (4));

} else {
var statearr_31771_33446 = state_31755__$1;
(statearr_31771_33446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (11))){
var inst_31725 = (state_31755[(10)]);
var inst_31744 = (state_31755[(2)]);
var tmp31764 = inst_31725;
var inst_31725__$1 = tmp31764;
var state_31755__$1 = (function (){var statearr_31772 = state_31755;
(statearr_31772[(10)] = inst_31725__$1);

(statearr_31772[(11)] = inst_31744);

return statearr_31772;
})();
var statearr_31773_33447 = state_31755__$1;
(statearr_31773_33447[(2)] = null);

(statearr_31773_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (9))){
var inst_31735 = (state_31755[(7)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31755__$1,(11),out,inst_31735);
} else {
if((state_val_31756 === (5))){
var inst_31749 = cljs.core.async.close_BANG_(out);
var state_31755__$1 = state_31755;
var statearr_31781_33451 = state_31755__$1;
(statearr_31781_33451[(2)] = inst_31749);

(statearr_31781_33451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (10))){
var inst_31747 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31782_33452 = state_31755__$1;
(statearr_31782_33452[(2)] = inst_31747);

(statearr_31782_33452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (8))){
var inst_31735 = (state_31755[(7)]);
var inst_31734 = (state_31755[(8)]);
var inst_31725 = (state_31755[(10)]);
var inst_31736 = (state_31755[(9)]);
var inst_31739 = (function (){var cs = inst_31725;
var vec__31730 = inst_31734;
var v = inst_31735;
var c = inst_31736;
return (function (p1__31721_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31721_SHARP_);
});
})();
var inst_31740 = cljs.core.filterv(inst_31739,inst_31725);
var inst_31725__$1 = inst_31740;
var state_31755__$1 = (function (){var statearr_31783 = state_31755;
(statearr_31783[(10)] = inst_31725__$1);

return statearr_31783;
})();
var statearr_31784_33456 = state_31755__$1;
(statearr_31784_33456[(2)] = null);

(statearr_31784_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_31787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31787[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_31787[(1)] = (1));

return statearr_31787;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_31755){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31755);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31788){var ex__29552__auto__ = e31788;
var statearr_31789_33461 = state_31755;
(statearr_31789_33461[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31755[(4)]))){
var statearr_31790_33462 = state_31755;
(statearr_31790_33462[(1)] = cljs.core.first((state_31755[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33463 = state_31755;
state_31755 = G__33463;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_31755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_31755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31791 = f__29688__auto__();
(statearr_31791[(6)] = c__29687__auto___33428);

return statearr_31791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31797 = arguments.length;
switch (G__31797) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31825){
var state_val_31826 = (state_31825[(1)]);
if((state_val_31826 === (7))){
var inst_31807 = (state_31825[(7)]);
var inst_31807__$1 = (state_31825[(2)]);
var inst_31808 = (inst_31807__$1 == null);
var inst_31809 = cljs.core.not(inst_31808);
var state_31825__$1 = (function (){var statearr_31827 = state_31825;
(statearr_31827[(7)] = inst_31807__$1);

return statearr_31827;
})();
if(inst_31809){
var statearr_31828_33482 = state_31825__$1;
(statearr_31828_33482[(1)] = (8));

} else {
var statearr_31829_33483 = state_31825__$1;
(statearr_31829_33483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (1))){
var inst_31802 = (0);
var state_31825__$1 = (function (){var statearr_31830 = state_31825;
(statearr_31830[(8)] = inst_31802);

return statearr_31830;
})();
var statearr_31831_33491 = state_31825__$1;
(statearr_31831_33491[(2)] = null);

(statearr_31831_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (4))){
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31825__$1,(7),ch);
} else {
if((state_val_31826 === (6))){
var inst_31820 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31838_33495 = state_31825__$1;
(statearr_31838_33495[(2)] = inst_31820);

(statearr_31838_33495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (3))){
var inst_31822 = (state_31825[(2)]);
var inst_31823 = cljs.core.async.close_BANG_(out);
var state_31825__$1 = (function (){var statearr_31839 = state_31825;
(statearr_31839[(9)] = inst_31822);

return statearr_31839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31825__$1,inst_31823);
} else {
if((state_val_31826 === (2))){
var inst_31802 = (state_31825[(8)]);
var inst_31804 = (inst_31802 < n);
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31804)){
var statearr_31840_33496 = state_31825__$1;
(statearr_31840_33496[(1)] = (4));

} else {
var statearr_31841_33498 = state_31825__$1;
(statearr_31841_33498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (11))){
var inst_31802 = (state_31825[(8)]);
var inst_31812 = (state_31825[(2)]);
var inst_31813 = (inst_31802 + (1));
var inst_31802__$1 = inst_31813;
var state_31825__$1 = (function (){var statearr_31845 = state_31825;
(statearr_31845[(8)] = inst_31802__$1);

(statearr_31845[(10)] = inst_31812);

return statearr_31845;
})();
var statearr_31846_33506 = state_31825__$1;
(statearr_31846_33506[(2)] = null);

(statearr_31846_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (9))){
var state_31825__$1 = state_31825;
var statearr_31847_33509 = state_31825__$1;
(statearr_31847_33509[(2)] = null);

(statearr_31847_33509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (5))){
var state_31825__$1 = state_31825;
var statearr_31848_33511 = state_31825__$1;
(statearr_31848_33511[(2)] = null);

(statearr_31848_33511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (10))){
var inst_31817 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31849_33512 = state_31825__$1;
(statearr_31849_33512[(2)] = inst_31817);

(statearr_31849_33512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (8))){
var inst_31807 = (state_31825[(7)]);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31825__$1,(11),out,inst_31807);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_31855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31855[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_31855[(1)] = (1));

return statearr_31855;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_31825){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31825);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31861){var ex__29552__auto__ = e31861;
var statearr_31862_33513 = state_31825;
(statearr_31862_33513[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31825[(4)]))){
var statearr_31863_33514 = state_31825;
(statearr_31863_33514[(1)] = cljs.core.first((state_31825[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33515 = state_31825;
state_31825 = G__33515;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_31825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_31825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31864 = f__29688__auto__();
(statearr_31864[(6)] = c__29687__auto___33481);

return statearr_31864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31866 = (function (f,ch,meta31867){
this.f = f;
this.ch = ch;
this.meta31867 = meta31867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31868,meta31867__$1){
var self__ = this;
var _31868__$1 = this;
return (new cljs.core.async.t_cljs$core$async31866(self__.f,self__.ch,meta31867__$1));
}));

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31868){
var self__ = this;
var _31868__$1 = this;
return self__.meta31867;
}));

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31873 = (function (f,ch,meta31867,_,fn1,meta31874){
this.f = f;
this.ch = ch;
this.meta31867 = meta31867;
this._ = _;
this.fn1 = fn1;
this.meta31874 = meta31874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31875,meta31874__$1){
var self__ = this;
var _31875__$1 = this;
return (new cljs.core.async.t_cljs$core$async31873(self__.f,self__.ch,self__.meta31867,self__._,self__.fn1,meta31874__$1));
}));

(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31875){
var self__ = this;
var _31875__$1 = this;
return self__.meta31874;
}));

(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31865_SHARP_){
var G__31876 = (((p1__31865_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31865_SHARP_) : self__.f.call(null,p1__31865_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31876) : f1.call(null,G__31876));
});
}));

(cljs.core.async.t_cljs$core$async31873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31867","meta31867",1041325128,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31866","cljs.core.async/t_cljs$core$async31866",-1865223299,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31874","meta31874",1974957830,null)], null);
}));

(cljs.core.async.t_cljs$core$async31873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31873");

(cljs.core.async.t_cljs$core$async31873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31873.
 */
cljs.core.async.__GT_t_cljs$core$async31873 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31873(f__$1,ch__$1,meta31867__$1,___$2,fn1__$1,meta31874){
return (new cljs.core.async.t_cljs$core$async31873(f__$1,ch__$1,meta31867__$1,___$2,fn1__$1,meta31874));
});

}

return (new cljs.core.async.t_cljs$core$async31873(self__.f,self__.ch,self__.meta31867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31878 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31878) : self__.f.call(null,G__31878));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31867","meta31867",1041325128,null)], null);
}));

(cljs.core.async.t_cljs$core$async31866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31866");

(cljs.core.async.t_cljs$core$async31866.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31866.
 */
cljs.core.async.__GT_t_cljs$core$async31866 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31866(f__$1,ch__$1,meta31867){
return (new cljs.core.async.t_cljs$core$async31866(f__$1,ch__$1,meta31867));
});

}

return (new cljs.core.async.t_cljs$core$async31866(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31882 = (function (f,ch,meta31883){
this.f = f;
this.ch = ch;
this.meta31883 = meta31883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31884,meta31883__$1){
var self__ = this;
var _31884__$1 = this;
return (new cljs.core.async.t_cljs$core$async31882(self__.f,self__.ch,meta31883__$1));
}));

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31884){
var self__ = this;
var _31884__$1 = this;
return self__.meta31883;
}));

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31883","meta31883",-887919143,null)], null);
}));

(cljs.core.async.t_cljs$core$async31882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31882");

(cljs.core.async.t_cljs$core$async31882.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31882.
 */
cljs.core.async.__GT_t_cljs$core$async31882 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31882(f__$1,ch__$1,meta31883){
return (new cljs.core.async.t_cljs$core$async31882(f__$1,ch__$1,meta31883));
});

}

return (new cljs.core.async.t_cljs$core$async31882(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31895 = (function (p,ch,meta31896){
this.p = p;
this.ch = ch;
this.meta31896 = meta31896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31897,meta31896__$1){
var self__ = this;
var _31897__$1 = this;
return (new cljs.core.async.t_cljs$core$async31895(self__.p,self__.ch,meta31896__$1));
}));

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31897){
var self__ = this;
var _31897__$1 = this;
return self__.meta31896;
}));

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31896","meta31896",-1998807831,null)], null);
}));

(cljs.core.async.t_cljs$core$async31895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31895");

(cljs.core.async.t_cljs$core$async31895.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31895.
 */
cljs.core.async.__GT_t_cljs$core$async31895 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31895(p__$1,ch__$1,meta31896){
return (new cljs.core.async.t_cljs$core$async31895(p__$1,ch__$1,meta31896));
});

}

return (new cljs.core.async.t_cljs$core$async31895(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31933 = arguments.length;
switch (G__31933) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_31956){
var state_val_31957 = (state_31956[(1)]);
if((state_val_31957 === (7))){
var inst_31952 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31960_33560 = state_31956__$1;
(statearr_31960_33560[(2)] = inst_31952);

(statearr_31960_33560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (1))){
var state_31956__$1 = state_31956;
var statearr_31962_33561 = state_31956__$1;
(statearr_31962_33561[(2)] = null);

(statearr_31962_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (4))){
var inst_31937 = (state_31956[(7)]);
var inst_31937__$1 = (state_31956[(2)]);
var inst_31938 = (inst_31937__$1 == null);
var state_31956__$1 = (function (){var statearr_31964 = state_31956;
(statearr_31964[(7)] = inst_31937__$1);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31938)){
var statearr_31965_33562 = state_31956__$1;
(statearr_31965_33562[(1)] = (5));

} else {
var statearr_31966_33564 = state_31956__$1;
(statearr_31966_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (6))){
var inst_31937 = (state_31956[(7)]);
var inst_31942 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31937) : p.call(null,inst_31937));
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31942)){
var statearr_31967_33567 = state_31956__$1;
(statearr_31967_33567[(1)] = (8));

} else {
var statearr_31968_33568 = state_31956__$1;
(statearr_31968_33568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (3))){
var inst_31954 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31956__$1,inst_31954);
} else {
if((state_val_31957 === (2))){
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31956__$1,(4),ch);
} else {
if((state_val_31957 === (11))){
var inst_31946 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31971_33569 = state_31956__$1;
(statearr_31971_33569[(2)] = inst_31946);

(statearr_31971_33569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (9))){
var state_31956__$1 = state_31956;
var statearr_31972_33570 = state_31956__$1;
(statearr_31972_33570[(2)] = null);

(statearr_31972_33570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (5))){
var inst_31940 = cljs.core.async.close_BANG_(out);
var state_31956__$1 = state_31956;
var statearr_31975_33571 = state_31956__$1;
(statearr_31975_33571[(2)] = inst_31940);

(statearr_31975_33571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (10))){
var inst_31949 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31976 = state_31956;
(statearr_31976[(8)] = inst_31949);

return statearr_31976;
})();
var statearr_31978_33572 = state_31956__$1;
(statearr_31978_33572[(2)] = null);

(statearr_31978_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (8))){
var inst_31937 = (state_31956[(7)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31956__$1,(11),out,inst_31937);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_31979 = [null,null,null,null,null,null,null,null,null];
(statearr_31979[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_31979[(1)] = (1));

return statearr_31979;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_31956){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_31956);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e31980){var ex__29552__auto__ = e31980;
var statearr_31981_33579 = state_31956;
(statearr_31981_33579[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_31956[(4)]))){
var statearr_31982_33580 = state_31956;
(statearr_31982_33580[(1)] = cljs.core.first((state_31956[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33581 = state_31956;
state_31956 = G__33581;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_31983 = f__29688__auto__();
(statearr_31983[(6)] = c__29687__auto___33559);

return statearr_31983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31990 = arguments.length;
switch (G__31990) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_32060){
var state_val_32061 = (state_32060[(1)]);
if((state_val_32061 === (7))){
var inst_32056 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32065_33599 = state_32060__$1;
(statearr_32065_33599[(2)] = inst_32056);

(statearr_32065_33599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (20))){
var inst_32023 = (state_32060[(7)]);
var inst_32037 = (state_32060[(2)]);
var inst_32038 = cljs.core.next(inst_32023);
var inst_32008 = inst_32038;
var inst_32009 = null;
var inst_32010 = (0);
var inst_32011 = (0);
var state_32060__$1 = (function (){var statearr_32066 = state_32060;
(statearr_32066[(8)] = inst_32009);

(statearr_32066[(9)] = inst_32011);

(statearr_32066[(10)] = inst_32008);

(statearr_32066[(11)] = inst_32037);

(statearr_32066[(12)] = inst_32010);

return statearr_32066;
})();
var statearr_32067_33603 = state_32060__$1;
(statearr_32067_33603[(2)] = null);

(statearr_32067_33603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (1))){
var state_32060__$1 = state_32060;
var statearr_32068_33604 = state_32060__$1;
(statearr_32068_33604[(2)] = null);

(statearr_32068_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (4))){
var inst_31997 = (state_32060[(13)]);
var inst_31997__$1 = (state_32060[(2)]);
var inst_31998 = (inst_31997__$1 == null);
var state_32060__$1 = (function (){var statearr_32069 = state_32060;
(statearr_32069[(13)] = inst_31997__$1);

return statearr_32069;
})();
if(cljs.core.truth_(inst_31998)){
var statearr_32070_33608 = state_32060__$1;
(statearr_32070_33608[(1)] = (5));

} else {
var statearr_32071_33609 = state_32060__$1;
(statearr_32071_33609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (15))){
var state_32060__$1 = state_32060;
var statearr_32075_33610 = state_32060__$1;
(statearr_32075_33610[(2)] = null);

(statearr_32075_33610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (21))){
var state_32060__$1 = state_32060;
var statearr_32080_33612 = state_32060__$1;
(statearr_32080_33612[(2)] = null);

(statearr_32080_33612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (13))){
var inst_32009 = (state_32060[(8)]);
var inst_32011 = (state_32060[(9)]);
var inst_32008 = (state_32060[(10)]);
var inst_32010 = (state_32060[(12)]);
var inst_32019 = (state_32060[(2)]);
var inst_32020 = (inst_32011 + (1));
var tmp32072 = inst_32009;
var tmp32073 = inst_32008;
var tmp32074 = inst_32010;
var inst_32008__$1 = tmp32073;
var inst_32009__$1 = tmp32072;
var inst_32010__$1 = tmp32074;
var inst_32011__$1 = inst_32020;
var state_32060__$1 = (function (){var statearr_32081 = state_32060;
(statearr_32081[(8)] = inst_32009__$1);

(statearr_32081[(9)] = inst_32011__$1);

(statearr_32081[(10)] = inst_32008__$1);

(statearr_32081[(14)] = inst_32019);

(statearr_32081[(12)] = inst_32010__$1);

return statearr_32081;
})();
var statearr_32086_33615 = state_32060__$1;
(statearr_32086_33615[(2)] = null);

(statearr_32086_33615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (22))){
var state_32060__$1 = state_32060;
var statearr_32087_33618 = state_32060__$1;
(statearr_32087_33618[(2)] = null);

(statearr_32087_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (6))){
var inst_31997 = (state_32060[(13)]);
var inst_32006 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31997) : f.call(null,inst_31997));
var inst_32007 = cljs.core.seq(inst_32006);
var inst_32008 = inst_32007;
var inst_32009 = null;
var inst_32010 = (0);
var inst_32011 = (0);
var state_32060__$1 = (function (){var statearr_32092 = state_32060;
(statearr_32092[(8)] = inst_32009);

(statearr_32092[(9)] = inst_32011);

(statearr_32092[(10)] = inst_32008);

(statearr_32092[(12)] = inst_32010);

return statearr_32092;
})();
var statearr_32093_33620 = state_32060__$1;
(statearr_32093_33620[(2)] = null);

(statearr_32093_33620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (17))){
var inst_32023 = (state_32060[(7)]);
var inst_32030 = cljs.core.chunk_first(inst_32023);
var inst_32031 = cljs.core.chunk_rest(inst_32023);
var inst_32032 = cljs.core.count(inst_32030);
var inst_32008 = inst_32031;
var inst_32009 = inst_32030;
var inst_32010 = inst_32032;
var inst_32011 = (0);
var state_32060__$1 = (function (){var statearr_32102 = state_32060;
(statearr_32102[(8)] = inst_32009);

(statearr_32102[(9)] = inst_32011);

(statearr_32102[(10)] = inst_32008);

(statearr_32102[(12)] = inst_32010);

return statearr_32102;
})();
var statearr_32103_33622 = state_32060__$1;
(statearr_32103_33622[(2)] = null);

(statearr_32103_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (3))){
var inst_32058 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32060__$1,inst_32058);
} else {
if((state_val_32061 === (12))){
var inst_32046 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32106_33629 = state_32060__$1;
(statearr_32106_33629[(2)] = inst_32046);

(statearr_32106_33629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (2))){
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32060__$1,(4),in$);
} else {
if((state_val_32061 === (23))){
var inst_32054 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32107_33630 = state_32060__$1;
(statearr_32107_33630[(2)] = inst_32054);

(statearr_32107_33630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (19))){
var inst_32041 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32108_33631 = state_32060__$1;
(statearr_32108_33631[(2)] = inst_32041);

(statearr_32108_33631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (11))){
var inst_32008 = (state_32060[(10)]);
var inst_32023 = (state_32060[(7)]);
var inst_32023__$1 = cljs.core.seq(inst_32008);
var state_32060__$1 = (function (){var statearr_32110 = state_32060;
(statearr_32110[(7)] = inst_32023__$1);

return statearr_32110;
})();
if(inst_32023__$1){
var statearr_32111_33635 = state_32060__$1;
(statearr_32111_33635[(1)] = (14));

} else {
var statearr_32112_33636 = state_32060__$1;
(statearr_32112_33636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (9))){
var inst_32048 = (state_32060[(2)]);
var inst_32049 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32060__$1 = (function (){var statearr_32117 = state_32060;
(statearr_32117[(15)] = inst_32048);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32049)){
var statearr_32118_33637 = state_32060__$1;
(statearr_32118_33637[(1)] = (21));

} else {
var statearr_32119_33638 = state_32060__$1;
(statearr_32119_33638[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (5))){
var inst_32000 = cljs.core.async.close_BANG_(out);
var state_32060__$1 = state_32060;
var statearr_32120_33641 = state_32060__$1;
(statearr_32120_33641[(2)] = inst_32000);

(statearr_32120_33641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (14))){
var inst_32023 = (state_32060[(7)]);
var inst_32028 = cljs.core.chunked_seq_QMARK_(inst_32023);
var state_32060__$1 = state_32060;
if(inst_32028){
var statearr_32121_33643 = state_32060__$1;
(statearr_32121_33643[(1)] = (17));

} else {
var statearr_32122_33644 = state_32060__$1;
(statearr_32122_33644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (16))){
var inst_32044 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32123_33645 = state_32060__$1;
(statearr_32123_33645[(2)] = inst_32044);

(statearr_32123_33645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (10))){
var inst_32009 = (state_32060[(8)]);
var inst_32011 = (state_32060[(9)]);
var inst_32017 = cljs.core._nth(inst_32009,inst_32011);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32060__$1,(13),out,inst_32017);
} else {
if((state_val_32061 === (18))){
var inst_32023 = (state_32060[(7)]);
var inst_32035 = cljs.core.first(inst_32023);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32060__$1,(20),out,inst_32035);
} else {
if((state_val_32061 === (8))){
var inst_32011 = (state_32060[(9)]);
var inst_32010 = (state_32060[(12)]);
var inst_32013 = (inst_32011 < inst_32010);
var inst_32014 = inst_32013;
var state_32060__$1 = state_32060;
if(cljs.core.truth_(inst_32014)){
var statearr_32127_33650 = state_32060__$1;
(statearr_32127_33650[(1)] = (10));

} else {
var statearr_32128_33651 = state_32060__$1;
(statearr_32128_33651[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____1 = (function (state_32060){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_32060);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e32130){var ex__29552__auto__ = e32130;
var statearr_32131_33654 = state_32060;
(statearr_32131_33654[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_32060[(4)]))){
var statearr_32136_33655 = state_32060;
(statearr_32136_33655[(1)] = cljs.core.first((state_32060[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33656 = state_32060;
state_32060 = G__33656;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__ = function(state_32060){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____1.call(this,state_32060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29549__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_32144 = f__29688__auto__();
(statearr_32144[(6)] = c__29687__auto__);

return statearr_32144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));

return c__29687__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32152 = arguments.length;
switch (G__32152) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32165 = arguments.length;
switch (G__32165) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32173 = arguments.length;
switch (G__32173) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_32200){
var state_val_32201 = (state_32200[(1)]);
if((state_val_32201 === (7))){
var inst_32195 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32202_33682 = state_32200__$1;
(statearr_32202_33682[(2)] = inst_32195);

(statearr_32202_33682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (1))){
var inst_32176 = null;
var state_32200__$1 = (function (){var statearr_32204 = state_32200;
(statearr_32204[(7)] = inst_32176);

return statearr_32204;
})();
var statearr_32205_33684 = state_32200__$1;
(statearr_32205_33684[(2)] = null);

(statearr_32205_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (4))){
var inst_32179 = (state_32200[(8)]);
var inst_32179__$1 = (state_32200[(2)]);
var inst_32181 = (inst_32179__$1 == null);
var inst_32182 = cljs.core.not(inst_32181);
var state_32200__$1 = (function (){var statearr_32206 = state_32200;
(statearr_32206[(8)] = inst_32179__$1);

return statearr_32206;
})();
if(inst_32182){
var statearr_32207_33690 = state_32200__$1;
(statearr_32207_33690[(1)] = (5));

} else {
var statearr_32208_33691 = state_32200__$1;
(statearr_32208_33691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (6))){
var state_32200__$1 = state_32200;
var statearr_32209_33692 = state_32200__$1;
(statearr_32209_33692[(2)] = null);

(statearr_32209_33692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (3))){
var inst_32197 = (state_32200[(2)]);
var inst_32198 = cljs.core.async.close_BANG_(out);
var state_32200__$1 = (function (){var statearr_32212 = state_32200;
(statearr_32212[(9)] = inst_32197);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32200__$1,inst_32198);
} else {
if((state_val_32201 === (2))){
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32200__$1,(4),ch);
} else {
if((state_val_32201 === (11))){
var inst_32179 = (state_32200[(8)]);
var inst_32189 = (state_32200[(2)]);
var inst_32176 = inst_32179;
var state_32200__$1 = (function (){var statearr_32213 = state_32200;
(statearr_32213[(7)] = inst_32176);

(statearr_32213[(10)] = inst_32189);

return statearr_32213;
})();
var statearr_32214_33693 = state_32200__$1;
(statearr_32214_33693[(2)] = null);

(statearr_32214_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (9))){
var inst_32179 = (state_32200[(8)]);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32200__$1,(11),out,inst_32179);
} else {
if((state_val_32201 === (5))){
var inst_32176 = (state_32200[(7)]);
var inst_32179 = (state_32200[(8)]);
var inst_32184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32179,inst_32176);
var state_32200__$1 = state_32200;
if(inst_32184){
var statearr_32216_33698 = state_32200__$1;
(statearr_32216_33698[(1)] = (8));

} else {
var statearr_32217_33699 = state_32200__$1;
(statearr_32217_33699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (10))){
var inst_32192 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32218_33704 = state_32200__$1;
(statearr_32218_33704[(2)] = inst_32192);

(statearr_32218_33704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (8))){
var inst_32176 = (state_32200[(7)]);
var tmp32215 = inst_32176;
var inst_32176__$1 = tmp32215;
var state_32200__$1 = (function (){var statearr_32219 = state_32200;
(statearr_32219[(7)] = inst_32176__$1);

return statearr_32219;
})();
var statearr_32220_33711 = state_32200__$1;
(statearr_32220_33711[(2)] = null);

(statearr_32220_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_32200){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_32200);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e32222){var ex__29552__auto__ = e32222;
var statearr_32223_33716 = state_32200;
(statearr_32223_33716[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_32200[(4)]))){
var statearr_32224_33717 = state_32200;
(statearr_32224_33717[(1)] = cljs.core.first((state_32200[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33722 = state_32200;
state_32200 = G__33722;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_32225 = f__29688__auto__();
(statearr_32225[(6)] = c__29687__auto___33677);

return statearr_32225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32227 = arguments.length;
switch (G__32227) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_32280){
var state_val_32281 = (state_32280[(1)]);
if((state_val_32281 === (7))){
var inst_32276 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32288_33732 = state_32280__$1;
(statearr_32288_33732[(2)] = inst_32276);

(statearr_32288_33732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (1))){
var inst_32234 = (new Array(n));
var inst_32235 = inst_32234;
var inst_32236 = (0);
var state_32280__$1 = (function (){var statearr_32290 = state_32280;
(statearr_32290[(7)] = inst_32236);

(statearr_32290[(8)] = inst_32235);

return statearr_32290;
})();
var statearr_32291_33733 = state_32280__$1;
(statearr_32291_33733[(2)] = null);

(statearr_32291_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (4))){
var inst_32239 = (state_32280[(9)]);
var inst_32239__$1 = (state_32280[(2)]);
var inst_32240 = (inst_32239__$1 == null);
var inst_32241 = cljs.core.not(inst_32240);
var state_32280__$1 = (function (){var statearr_32292 = state_32280;
(statearr_32292[(9)] = inst_32239__$1);

return statearr_32292;
})();
if(inst_32241){
var statearr_32293_33735 = state_32280__$1;
(statearr_32293_33735[(1)] = (5));

} else {
var statearr_32294_33736 = state_32280__$1;
(statearr_32294_33736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (15))){
var inst_32270 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32295_33738 = state_32280__$1;
(statearr_32295_33738[(2)] = inst_32270);

(statearr_32295_33738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (13))){
var state_32280__$1 = state_32280;
var statearr_32296_33739 = state_32280__$1;
(statearr_32296_33739[(2)] = null);

(statearr_32296_33739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (6))){
var inst_32236 = (state_32280[(7)]);
var inst_32266 = (inst_32236 > (0));
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32266)){
var statearr_32297_33741 = state_32280__$1;
(statearr_32297_33741[(1)] = (12));

} else {
var statearr_32298_33742 = state_32280__$1;
(statearr_32298_33742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (3))){
var inst_32278 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32280__$1,inst_32278);
} else {
if((state_val_32281 === (12))){
var inst_32235 = (state_32280[(8)]);
var inst_32268 = cljs.core.vec(inst_32235);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(15),out,inst_32268);
} else {
if((state_val_32281 === (2))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32280__$1,(4),ch);
} else {
if((state_val_32281 === (11))){
var inst_32251 = (state_32280[(2)]);
var inst_32261 = (new Array(n));
var inst_32235 = inst_32261;
var inst_32236 = (0);
var state_32280__$1 = (function (){var statearr_32299 = state_32280;
(statearr_32299[(7)] = inst_32236);

(statearr_32299[(10)] = inst_32251);

(statearr_32299[(8)] = inst_32235);

return statearr_32299;
})();
var statearr_32300_33744 = state_32280__$1;
(statearr_32300_33744[(2)] = null);

(statearr_32300_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (9))){
var inst_32235 = (state_32280[(8)]);
var inst_32249 = cljs.core.vec(inst_32235);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(11),out,inst_32249);
} else {
if((state_val_32281 === (5))){
var inst_32236 = (state_32280[(7)]);
var inst_32244 = (state_32280[(11)]);
var inst_32235 = (state_32280[(8)]);
var inst_32239 = (state_32280[(9)]);
var inst_32243 = (inst_32235[inst_32236] = inst_32239);
var inst_32244__$1 = (inst_32236 + (1));
var inst_32245 = (inst_32244__$1 < n);
var state_32280__$1 = (function (){var statearr_32307 = state_32280;
(statearr_32307[(11)] = inst_32244__$1);

(statearr_32307[(12)] = inst_32243);

return statearr_32307;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32308_33746 = state_32280__$1;
(statearr_32308_33746[(1)] = (8));

} else {
var statearr_32309_33747 = state_32280__$1;
(statearr_32309_33747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (14))){
var inst_32273 = (state_32280[(2)]);
var inst_32274 = cljs.core.async.close_BANG_(out);
var state_32280__$1 = (function (){var statearr_32311 = state_32280;
(statearr_32311[(13)] = inst_32273);

return statearr_32311;
})();
var statearr_32312_33749 = state_32280__$1;
(statearr_32312_33749[(2)] = inst_32274);

(statearr_32312_33749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (10))){
var inst_32264 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32313_33750 = state_32280__$1;
(statearr_32313_33750[(2)] = inst_32264);

(statearr_32313_33750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (8))){
var inst_32244 = (state_32280[(11)]);
var inst_32235 = (state_32280[(8)]);
var tmp32310 = inst_32235;
var inst_32235__$1 = tmp32310;
var inst_32236 = inst_32244;
var state_32280__$1 = (function (){var statearr_32314 = state_32280;
(statearr_32314[(7)] = inst_32236);

(statearr_32314[(8)] = inst_32235__$1);

return statearr_32314;
})();
var statearr_32315_33751 = state_32280__$1;
(statearr_32315_33751[(2)] = null);

(statearr_32315_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_32316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32316[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_32316[(1)] = (1));

return statearr_32316;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_32280){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_32280);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e32317){var ex__29552__auto__ = e32317;
var statearr_32318_33752 = state_32280;
(statearr_32318_33752[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_32280[(4)]))){
var statearr_32319_33757 = state_32280;
(statearr_32319_33757[(1)] = cljs.core.first((state_32280[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33819 = state_32280;
state_32280 = G__33819;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_32280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_32280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_32324 = f__29688__auto__();
(statearr_32324[(6)] = c__29687__auto___33731);

return statearr_32324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32326 = arguments.length;
switch (G__32326) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29687__auto___33841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29688__auto__ = (function (){var switch__29548__auto__ = (function (state_32368){
var state_val_32369 = (state_32368[(1)]);
if((state_val_32369 === (7))){
var inst_32364 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32371_33845 = state_32368__$1;
(statearr_32371_33845[(2)] = inst_32364);

(statearr_32371_33845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (1))){
var inst_32327 = [];
var inst_32328 = inst_32327;
var inst_32329 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32368__$1 = (function (){var statearr_32372 = state_32368;
(statearr_32372[(7)] = inst_32328);

(statearr_32372[(8)] = inst_32329);

return statearr_32372;
})();
var statearr_32373_33849 = state_32368__$1;
(statearr_32373_33849[(2)] = null);

(statearr_32373_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (4))){
var inst_32332 = (state_32368[(9)]);
var inst_32332__$1 = (state_32368[(2)]);
var inst_32333 = (inst_32332__$1 == null);
var inst_32334 = cljs.core.not(inst_32333);
var state_32368__$1 = (function (){var statearr_32374 = state_32368;
(statearr_32374[(9)] = inst_32332__$1);

return statearr_32374;
})();
if(inst_32334){
var statearr_32375_33858 = state_32368__$1;
(statearr_32375_33858[(1)] = (5));

} else {
var statearr_32376_33859 = state_32368__$1;
(statearr_32376_33859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (15))){
var inst_32358 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32377_33864 = state_32368__$1;
(statearr_32377_33864[(2)] = inst_32358);

(statearr_32377_33864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (13))){
var state_32368__$1 = state_32368;
var statearr_32378_33865 = state_32368__$1;
(statearr_32378_33865[(2)] = null);

(statearr_32378_33865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (6))){
var inst_32328 = (state_32368[(7)]);
var inst_32353 = inst_32328.length;
var inst_32354 = (inst_32353 > (0));
var state_32368__$1 = state_32368;
if(cljs.core.truth_(inst_32354)){
var statearr_32379_33870 = state_32368__$1;
(statearr_32379_33870[(1)] = (12));

} else {
var statearr_32380_33871 = state_32368__$1;
(statearr_32380_33871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (3))){
var inst_32366 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32368__$1,inst_32366);
} else {
if((state_val_32369 === (12))){
var inst_32328 = (state_32368[(7)]);
var inst_32356 = cljs.core.vec(inst_32328);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32368__$1,(15),out,inst_32356);
} else {
if((state_val_32369 === (2))){
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32368__$1,(4),ch);
} else {
if((state_val_32369 === (11))){
var inst_32332 = (state_32368[(9)]);
var inst_32336 = (state_32368[(10)]);
var inst_32346 = (state_32368[(2)]);
var inst_32347 = [];
var inst_32348 = inst_32347.push(inst_32332);
var inst_32328 = inst_32347;
var inst_32329 = inst_32336;
var state_32368__$1 = (function (){var statearr_32381 = state_32368;
(statearr_32381[(7)] = inst_32328);

(statearr_32381[(11)] = inst_32346);

(statearr_32381[(12)] = inst_32348);

(statearr_32381[(8)] = inst_32329);

return statearr_32381;
})();
var statearr_32382_33875 = state_32368__$1;
(statearr_32382_33875[(2)] = null);

(statearr_32382_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (9))){
var inst_32328 = (state_32368[(7)]);
var inst_32344 = cljs.core.vec(inst_32328);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32368__$1,(11),out,inst_32344);
} else {
if((state_val_32369 === (5))){
var inst_32332 = (state_32368[(9)]);
var inst_32336 = (state_32368[(10)]);
var inst_32329 = (state_32368[(8)]);
var inst_32336__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32332) : f.call(null,inst_32332));
var inst_32337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32336__$1,inst_32329);
var inst_32338 = cljs.core.keyword_identical_QMARK_(inst_32329,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32339 = ((inst_32337) || (inst_32338));
var state_32368__$1 = (function (){var statearr_32383 = state_32368;
(statearr_32383[(10)] = inst_32336__$1);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32384_33881 = state_32368__$1;
(statearr_32384_33881[(1)] = (8));

} else {
var statearr_32385_33883 = state_32368__$1;
(statearr_32385_33883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (14))){
var inst_32361 = (state_32368[(2)]);
var inst_32362 = cljs.core.async.close_BANG_(out);
var state_32368__$1 = (function (){var statearr_32387 = state_32368;
(statearr_32387[(13)] = inst_32361);

return statearr_32387;
})();
var statearr_32388_33892 = state_32368__$1;
(statearr_32388_33892[(2)] = inst_32362);

(statearr_32388_33892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (10))){
var inst_32351 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32389_33894 = state_32368__$1;
(statearr_32389_33894[(2)] = inst_32351);

(statearr_32389_33894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (8))){
var inst_32332 = (state_32368[(9)]);
var inst_32328 = (state_32368[(7)]);
var inst_32336 = (state_32368[(10)]);
var inst_32341 = inst_32328.push(inst_32332);
var tmp32386 = inst_32328;
var inst_32328__$1 = tmp32386;
var inst_32329 = inst_32336;
var state_32368__$1 = (function (){var statearr_32391 = state_32368;
(statearr_32391[(7)] = inst_32328__$1);

(statearr_32391[(14)] = inst_32341);

(statearr_32391[(8)] = inst_32329);

return statearr_32391;
})();
var statearr_32392_33899 = state_32368__$1;
(statearr_32392_33899[(2)] = null);

(statearr_32392_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29549__auto__ = null;
var cljs$core$async$state_machine__29549__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32393[(0)] = cljs$core$async$state_machine__29549__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var cljs$core$async$state_machine__29549__auto____1 = (function (state_32368){
while(true){
var ret_value__29550__auto__ = (function (){try{while(true){
var result__29551__auto__ = switch__29548__auto__(state_32368);
if(cljs.core.keyword_identical_QMARK_(result__29551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29551__auto__;
}
break;
}
}catch (e32394){var ex__29552__auto__ = e32394;
var statearr_32395_33908 = state_32368;
(statearr_32395_33908[(2)] = ex__29552__auto__);


if(cljs.core.seq((state_32368[(4)]))){
var statearr_32396_33910 = state_32368;
(statearr_32396_33910[(1)] = cljs.core.first((state_32368[(4)])));

} else {
throw ex__29552__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33917 = state_32368;
state_32368 = G__33917;
continue;
} else {
return ret_value__29550__auto__;
}
break;
}
});
cljs$core$async$state_machine__29549__auto__ = function(state_32368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29549__auto____1.call(this,state_32368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29549__auto____0;
cljs$core$async$state_machine__29549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29549__auto____1;
return cljs$core$async$state_machine__29549__auto__;
})()
})();
var state__29689__auto__ = (function (){var statearr_32399 = f__29688__auto__();
(statearr_32399[(6)] = c__29687__auto___33841);

return statearr_32399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29689__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
