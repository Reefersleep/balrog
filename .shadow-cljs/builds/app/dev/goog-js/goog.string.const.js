["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/const.js"],"~:js","goog.provide(\"goog.string.Const\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.string.TypedString\");\n/**\n * @final\n * @struct\n * @constructor\n * @implements {goog.string.TypedString}\n * @param {Object=} opt_token\n * @param {string=} opt_content\n */\ngoog.string.Const = function(opt_token, opt_content) {\n  /** @private @type {string} */ this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = opt_token === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && opt_content || \"\";\n  /** @private @const @type {!Object} */ this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;\n};\n/** @const @override */ goog.string.Const.prototype.implementsGoogStringTypedString = true;\n/** @override */ goog.string.Const.prototype.getTypedStringValue = function() {\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n};\nif (goog.DEBUG) {\n  /** @override */ goog.string.Const.prototype.toString = function() {\n    return \"Const{\" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + \"}\";\n  };\n}\n/**\n * @param {!goog.string.Const} stringConst\n * @return {string}\n */\ngoog.string.Const.unwrap = function(stringConst) {\n  if (stringConst instanceof goog.string.Const && stringConst.constructor === goog.string.Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {\n    return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n  } else {\n    goog.asserts.fail(\"expected object of type Const, got '\" + stringConst + \"'\");\n    return \"type_error:Const\";\n  }\n};\n/**\n * @param {string} s\n * @return {!goog.string.Const}\n */\ngoog.string.Const.from = function(s) {\n  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\n};\n/** @private @const @type {!Object} */ goog.string.Const.TYPE_MARKER_ = {};\n/** @private @const @type {!Object} */ goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\n/** @const @type {!goog.string.Const} */ goog.string.Const.EMPTY = goog.string.Const.from(\"\");\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide('goog.string.Const');\n\ngoog.require('goog.asserts');\ngoog.require('goog.string.TypedString');\n\n\n\n/**\n * Wrapper for compile-time-constant strings.\n *\n * Const is a wrapper for strings that can only be created from program\n * constants (i.e., string literals).  This property relies on a custom Closure\n * compiler check that `goog.string.Const.from` is only invoked on\n * compile-time-constant expressions.\n *\n * Const is useful in APIs whose correct and secure use requires that certain\n * arguments are not attacker controlled: Compile-time constants are inherently\n * under the control of the application and not under control of external\n * attackers, and hence are safe to use in such contexts.\n *\n * Instances of this type must be created via its factory method\n * `goog.string.Const.from` and not by invoking its constructor.  The\n * constructor intentionally takes no parameters and the type is immutable;\n * hence only a default instance corresponding to the empty string can be\n * obtained via constructor invocation.  Use goog.string.Const.EMPTY\n * instead of using this constructor to get an empty Const string.\n *\n * @see goog.string.Const#from\n * @constructor\n * @final\n * @struct\n * @implements {goog.string.TypedString}\n * @param {Object=} opt_token package-internal implementation detail.\n * @param {string=} opt_content package-internal implementation detail.\n */\ngoog.string.Const = function(opt_token, opt_content) {\n  /**\n   * The wrapped value of this Const object.  The field has a purposely ugly\n   * name to make (non-compiled) code that attempts to directly access this\n   * field stand out.\n   * @private {string}\n   */\n  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =\n      ((opt_token ===\n        goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_) &&\n       opt_content) ||\n      '';\n\n  /**\n   * A type marker used to implement additional run-time type checking.\n   * @see goog.string.Const#unwrap\n   * @const {!Object}\n   * @private\n   */\n  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =\n      goog.string.Const.TYPE_MARKER_;\n};\n\n\n/**\n * @override\n * @const\n */\ngoog.string.Const.prototype.implementsGoogStringTypedString = true;\n\n\n/**\n * Returns this Const's value a string.\n *\n * IMPORTANT: In code where it is security-relevant that an object's type is\n * indeed `goog.string.Const`, use `goog.string.Const.unwrap`\n * instead of this method.\n *\n * @see goog.string.Const#unwrap\n * @override\n */\ngoog.string.Const.prototype.getTypedStringValue = function() {\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a debug-string representation of this value.\n   *\n   * To obtain the actual string value wrapped inside an object of this type,\n   * use `goog.string.Const.unwrap`.\n   *\n   * @see goog.string.Const#unwrap\n   * @override\n   */\n  goog.string.Const.prototype.toString = function() {\n    return 'Const{' +\n        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +\n        '}';\n  };\n}\n\n\n/**\n * Performs a runtime check that the provided object is indeed an instance\n * of `goog.string.Const`, and returns its value.\n * @param {!goog.string.Const} stringConst The object to extract from.\n * @return {string} The Const object's contained string, unless the run-time\n *     type check fails. In that case, `unwrap` returns an innocuous\n *     string, or, if assertions are enabled, throws\n *     `goog.asserts.AssertionError`.\n */\ngoog.string.Const.unwrap = function(stringConst) {\n  // Perform additional run-time type-checking to ensure that stringConst is\n  // indeed an instance of the expected type.  This provides some additional\n  // protection against security bugs due to application code that disables type\n  // checks.\n  if (stringConst instanceof goog.string.Const &&\n      stringConst.constructor === goog.string.Const &&\n      stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===\n          goog.string.Const.TYPE_MARKER_) {\n    return stringConst\n        .stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n  } else {\n    goog.asserts.fail(\n        'expected object of type Const, got \\'' + stringConst + '\\'');\n    return 'type_error:Const';\n  }\n};\n\n\n/**\n * Creates a Const object from a compile-time constant string.\n *\n * It is illegal to invoke this function on an expression whose\n * compile-time-constant value cannot be determined by the Closure compiler.\n *\n * Correct invocations include,\n * <pre>\n *   var s = goog.string.Const.from('hello');\n *   var t = goog.string.Const.from('hello' + 'world');\n * </pre>\n *\n * In contrast, the following are illegal:\n * <pre>\n *   var s = goog.string.Const.from(getHello());\n *   var t = goog.string.Const.from('hello' + world);\n * </pre>\n *\n * @param {string} s A constant string from which to create a Const.\n * @return {!goog.string.Const} A Const object initialized to stringConst.\n */\ngoog.string.Const.from = function(s) {\n  return new goog.string.Const(\n      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\n};\n\n/**\n * Type marker for the Const type, used to implement additional run-time\n * type checking.\n * @const {!Object}\n * @private\n */\ngoog.string.Const.TYPE_MARKER_ = {};\n\n/**\n * @type {!Object}\n * @private\n * @const\n */\ngoog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\n\n/**\n * A Const instance wrapping the empty string.\n * @const {!goog.string.Const}\n */\ngoog.string.Const.EMPTY = goog.string.Const.from('');\n","~:compiled-at",1589054877297,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.const.js\",\n\"lineCount\":47,\n\"mappings\":\"AAcAA,IAAAC,QAAA,CAAa,mBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,cAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,yBAAb,CAAA;AAgCA;;;;;;;;AAAAF,IAAAG,OAAAC,MAAA,GAAoBC,QAAQ,CAACC,SAAD,EAAYC,WAAZ,CAAyB;AAOnD,iCAAA,IAAAC,iEAAA,GACMF,SADN,KAEMN,IAAAG,OAAAC,MAAAK,uCAFN,IAGKF,WAHL,IAII,EAJJ;AAYA,yCAAA,IAAAG,wDAAA,GACIV,IAAAG,OAAAC,MAAAO,aADJ;AAnBmD,CAArD;AA4BA,wBAAAX,IAAAG,OAAAC,MAAAQ,UAAAC,gCAAA,GAA8D,IAA9D;AAaA,iBAAAb,IAAAG,OAAAC,MAAAQ,UAAAE,oBAAA,GAAkDC,QAAQ,EAAG;AAC3D,SAAO,IAAAP,iEAAP;AAD2D,CAA7D;AAKA,IAAIR,IAAAgB,MAAJ;AAUE,mBAAAhB,IAAAG,OAAAC,MAAAQ,UAAAK,SAAA,GAAuCC,QAAQ,EAAG;AAChD,WAAO,QAAP,GACI,IAAAV,iEADJ,GAEI,GAFJ;AADgD,GAAlD;AAVF;AA2BA;;;;AAAAR,IAAAG,OAAAC,MAAAe,OAAA,GAA2BC,QAAQ,CAACC,WAAD,CAAc;AAK/C,MAAIA,WAAJ,YAA2BrB,IAAAG,OAAAC,MAA3B,IACIiB,WAAAC,YADJ,KACgCtB,IAAAG,OAAAC,MADhC,IAEIiB,WAAAX,wDAFJ,KAGQV,IAAAG,OAAAC,MAAAO,aAHR;AAIE,WAAOU,WAAAb,iEAAP;AAJF,QAMO;AACLR,QAAAuB,QAAAC,KAAA,CACI,sCADJ,GAC8CH,WAD9C,GAC4D,GAD5D,CAAA;AAEA,WAAO,kBAAP;AAHK;AAXwC,CAAjD;AAwCA;;;;AAAArB,IAAAG,OAAAC,MAAAqB,KAAA,GAAyBC,QAAQ,CAACC,CAAD,CAAI;AACnC,SAAO,IAAI3B,IAAAG,OAAAC,MAAJ,CACHJ,IAAAG,OAAAC,MAAAK,uCADG,EACuDkB,CADvD,CAAP;AADmC,CAArC;AAWA,uCAAA3B,IAAAG,OAAAC,MAAAO,aAAA,GAAiC,EAAjC;AAOA,uCAAAX,IAAAG,OAAAC,MAAAK,uCAAA,GAA2D,EAA3D;AAMA,yCAAAT,IAAAG,OAAAC,MAAAwB,MAAA,GAA0B5B,IAAAG,OAAAC,MAAAqB,KAAA,CAAuB,EAAvB,CAA1B;;\",\n\"sources\":[\"goog/string/const.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide('goog.string.Const');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.string.TypedString');\\n\\n\\n\\n/**\\n * Wrapper for compile-time-constant strings.\\n *\\n * Const is a wrapper for strings that can only be created from program\\n * constants (i.e., string literals).  This property relies on a custom Closure\\n * compiler check that `goog.string.Const.from` is only invoked on\\n * compile-time-constant expressions.\\n *\\n * Const is useful in APIs whose correct and secure use requires that certain\\n * arguments are not attacker controlled: Compile-time constants are inherently\\n * under the control of the application and not under control of external\\n * attackers, and hence are safe to use in such contexts.\\n *\\n * Instances of this type must be created via its factory method\\n * `goog.string.Const.from` and not by invoking its constructor.  The\\n * constructor intentionally takes no parameters and the type is immutable;\\n * hence only a default instance corresponding to the empty string can be\\n * obtained via constructor invocation.  Use goog.string.Const.EMPTY\\n * instead of using this constructor to get an empty Const string.\\n *\\n * @see goog.string.Const#from\\n * @constructor\\n * @final\\n * @struct\\n * @implements {goog.string.TypedString}\\n * @param {Object=} opt_token package-internal implementation detail.\\n * @param {string=} opt_content package-internal implementation detail.\\n */\\ngoog.string.Const = function(opt_token, opt_content) {\\n  /**\\n   * The wrapped value of this Const object.  The field has a purposely ugly\\n   * name to make (non-compiled) code that attempts to directly access this\\n   * field stand out.\\n   * @private {string}\\n   */\\n  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =\\n      ((opt_token ===\\n        goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_) &&\\n       opt_content) ||\\n      '';\\n\\n  /**\\n   * A type marker used to implement additional run-time type checking.\\n   * @see goog.string.Const#unwrap\\n   * @const {!Object}\\n   * @private\\n   */\\n  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =\\n      goog.string.Const.TYPE_MARKER_;\\n};\\n\\n\\n/**\\n * @override\\n * @const\\n */\\ngoog.string.Const.prototype.implementsGoogStringTypedString = true;\\n\\n\\n/**\\n * Returns this Const's value a string.\\n *\\n * IMPORTANT: In code where it is security-relevant that an object's type is\\n * indeed `goog.string.Const`, use `goog.string.Const.unwrap`\\n * instead of this method.\\n *\\n * @see goog.string.Const#unwrap\\n * @override\\n */\\ngoog.string.Const.prototype.getTypedStringValue = function() {\\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a debug-string representation of this value.\\n   *\\n   * To obtain the actual string value wrapped inside an object of this type,\\n   * use `goog.string.Const.unwrap`.\\n   *\\n   * @see goog.string.Const#unwrap\\n   * @override\\n   */\\n  goog.string.Const.prototype.toString = function() {\\n    return 'Const{' +\\n        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +\\n        '}';\\n  };\\n}\\n\\n\\n/**\\n * Performs a runtime check that the provided object is indeed an instance\\n * of `goog.string.Const`, and returns its value.\\n * @param {!goog.string.Const} stringConst The object to extract from.\\n * @return {string} The Const object's contained string, unless the run-time\\n *     type check fails. In that case, `unwrap` returns an innocuous\\n *     string, or, if assertions are enabled, throws\\n *     `goog.asserts.AssertionError`.\\n */\\ngoog.string.Const.unwrap = function(stringConst) {\\n  // Perform additional run-time type-checking to ensure that stringConst is\\n  // indeed an instance of the expected type.  This provides some additional\\n  // protection against security bugs due to application code that disables type\\n  // checks.\\n  if (stringConst instanceof goog.string.Const &&\\n      stringConst.constructor === goog.string.Const &&\\n      stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===\\n          goog.string.Const.TYPE_MARKER_) {\\n    return stringConst\\n        .stringConstValueWithSecurityContract__googStringSecurityPrivate_;\\n  } else {\\n    goog.asserts.fail(\\n        'expected object of type Const, got \\\\'' + stringConst + '\\\\'');\\n    return 'type_error:Const';\\n  }\\n};\\n\\n\\n/**\\n * Creates a Const object from a compile-time constant string.\\n *\\n * It is illegal to invoke this function on an expression whose\\n * compile-time-constant value cannot be determined by the Closure compiler.\\n *\\n * Correct invocations include,\\n * <pre>\\n *   var s = goog.string.Const.from('hello');\\n *   var t = goog.string.Const.from('hello' + 'world');\\n * </pre>\\n *\\n * In contrast, the following are illegal:\\n * <pre>\\n *   var s = goog.string.Const.from(getHello());\\n *   var t = goog.string.Const.from('hello' + world);\\n * </pre>\\n *\\n * @param {string} s A constant string from which to create a Const.\\n * @return {!goog.string.Const} A Const object initialized to stringConst.\\n */\\ngoog.string.Const.from = function(s) {\\n  return new goog.string.Const(\\n      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\\n};\\n\\n/**\\n * Type marker for the Const type, used to implement additional run-time\\n * type checking.\\n * @const {!Object}\\n * @private\\n */\\ngoog.string.Const.TYPE_MARKER_ = {};\\n\\n/**\\n * @type {!Object}\\n * @private\\n * @const\\n */\\ngoog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\\n\\n/**\\n * A Const instance wrapping the empty string.\\n * @const {!goog.string.Const}\\n */\\ngoog.string.Const.EMPTY = goog.string.Const.from('');\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"string\",\"Const\",\"goog.string.Const\",\"opt_token\",\"opt_content\",\"stringConstValueWithSecurityContract__googStringSecurityPrivate_\",\"GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_\",\"STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_\",\"TYPE_MARKER_\",\"prototype\",\"implementsGoogStringTypedString\",\"getTypedStringValue\",\"goog.string.Const.prototype.getTypedStringValue\",\"DEBUG\",\"toString\",\"goog.string.Const.prototype.toString\",\"unwrap\",\"goog.string.Const.unwrap\",\"stringConst\",\"constructor\",\"asserts\",\"fail\",\"from\",\"goog.string.Const.from\",\"s\",\"EMPTY\"]\n}\n"]