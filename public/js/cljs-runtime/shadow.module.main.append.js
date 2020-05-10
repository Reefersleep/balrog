
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.main.init(); } catch (e) { console.error("An error occurred when calling (app.main/init)"); throw(e); }