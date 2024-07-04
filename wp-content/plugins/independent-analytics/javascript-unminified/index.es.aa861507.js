// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5h0rg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AElement", function() {
    return AElement;
});
parcelHelpers.export(exports, "AnimateColorElement", function() {
    return AnimateColorElement;
});
parcelHelpers.export(exports, "AnimateElement", function() {
    return AnimateElement;
});
parcelHelpers.export(exports, "AnimateTransformElement", function() {
    return AnimateTransformElement;
});
parcelHelpers.export(exports, "BoundingBox", function() {
    return BoundingBox;
});
parcelHelpers.export(exports, "CB1", function() {
    return CB1;
});
parcelHelpers.export(exports, "CB2", function() {
    return CB2;
});
parcelHelpers.export(exports, "CB3", function() {
    return CB3;
});
parcelHelpers.export(exports, "CB4", function() {
    return CB4;
});
parcelHelpers.export(exports, "Canvg", function() {
    return Canvg;
});
parcelHelpers.export(exports, "CircleElement", function() {
    return CircleElement;
});
parcelHelpers.export(exports, "ClipPathElement", function() {
    return ClipPathElement;
});
parcelHelpers.export(exports, "DefsElement", function() {
    return DefsElement;
});
parcelHelpers.export(exports, "DescElement", function() {
    return DescElement;
});
parcelHelpers.export(exports, "Document", function() {
    return Document;
});
parcelHelpers.export(exports, "Element", function() {
    return Element;
});
parcelHelpers.export(exports, "EllipseElement", function() {
    return EllipseElement;
});
parcelHelpers.export(exports, "FeColorMatrixElement", function() {
    return FeColorMatrixElement;
});
parcelHelpers.export(exports, "FeCompositeElement", function() {
    return FeCompositeElement;
});
parcelHelpers.export(exports, "FeDropShadowElement", function() {
    return FeDropShadowElement;
});
parcelHelpers.export(exports, "FeGaussianBlurElement", function() {
    return FeGaussianBlurElement;
});
parcelHelpers.export(exports, "FeMorphologyElement", function() {
    return FeMorphologyElement;
});
parcelHelpers.export(exports, "FilterElement", function() {
    return FilterElement;
});
parcelHelpers.export(exports, "Font", function() {
    return Font;
});
parcelHelpers.export(exports, "FontElement", function() {
    return FontElement;
});
parcelHelpers.export(exports, "FontFaceElement", function() {
    return FontFaceElement;
});
parcelHelpers.export(exports, "GElement", function() {
    return GElement;
});
parcelHelpers.export(exports, "GlyphElement", function() {
    return GlyphElement;
});
parcelHelpers.export(exports, "GradientElement", function() {
    return GradientElement;
});
parcelHelpers.export(exports, "ImageElement", function() {
    return ImageElement;
});
parcelHelpers.export(exports, "LineElement", function() {
    return LineElement;
});
parcelHelpers.export(exports, "LinearGradientElement", function() {
    return LinearGradientElement;
});
parcelHelpers.export(exports, "MarkerElement", function() {
    return MarkerElement;
});
parcelHelpers.export(exports, "MaskElement", function() {
    return MaskElement;
});
parcelHelpers.export(exports, "Matrix", function() {
    return Matrix;
});
parcelHelpers.export(exports, "MissingGlyphElement", function() {
    return MissingGlyphElement;
});
parcelHelpers.export(exports, "Mouse", function() {
    return Mouse;
});
parcelHelpers.export(exports, "PSEUDO_ZERO", function() {
    return PSEUDO_ZERO;
});
parcelHelpers.export(exports, "Parser", function() {
    return Parser;
});
parcelHelpers.export(exports, "PathElement", function() {
    return PathElement;
});
parcelHelpers.export(exports, "PathParser", function() {
    return PathParser;
});
parcelHelpers.export(exports, "PatternElement", function() {
    return PatternElement;
});
parcelHelpers.export(exports, "Point", function() {
    return Point;
});
parcelHelpers.export(exports, "PolygonElement", function() {
    return PolygonElement;
});
parcelHelpers.export(exports, "PolylineElement", function() {
    return PolylineElement;
});
parcelHelpers.export(exports, "Property", function() {
    return Property;
});
parcelHelpers.export(exports, "QB1", function() {
    return QB1;
});
parcelHelpers.export(exports, "QB2", function() {
    return QB2;
});
parcelHelpers.export(exports, "QB3", function() {
    return QB3;
});
parcelHelpers.export(exports, "RadialGradientElement", function() {
    return RadialGradientElement;
});
parcelHelpers.export(exports, "RectElement", function() {
    return RectElement;
});
parcelHelpers.export(exports, "RenderedElement", function() {
    return RenderedElement;
});
parcelHelpers.export(exports, "Rotate", function() {
    return Rotate;
});
parcelHelpers.export(exports, "SVGElement", function() {
    return SVGElement;
});
parcelHelpers.export(exports, "SVGFontLoader", function() {
    return SVGFontLoader;
});
parcelHelpers.export(exports, "Scale", function() {
    return Scale;
});
parcelHelpers.export(exports, "Screen", function() {
    return Screen;
});
parcelHelpers.export(exports, "Skew", function() {
    return Skew;
});
parcelHelpers.export(exports, "SkewX", function() {
    return SkewX;
});
parcelHelpers.export(exports, "SkewY", function() {
    return SkewY;
});
parcelHelpers.export(exports, "StopElement", function() {
    return StopElement;
});
parcelHelpers.export(exports, "StyleElement", function() {
    return StyleElement;
});
parcelHelpers.export(exports, "SymbolElement", function() {
    return SymbolElement;
});
parcelHelpers.export(exports, "TRefElement", function() {
    return TRefElement;
});
parcelHelpers.export(exports, "TSpanElement", function() {
    return TSpanElement;
});
parcelHelpers.export(exports, "TextElement", function() {
    return TextElement;
});
parcelHelpers.export(exports, "TextPathElement", function() {
    return TextPathElement;
});
parcelHelpers.export(exports, "TitleElement", function() {
    return TitleElement;
});
parcelHelpers.export(exports, "Transform", function() {
    return Transform;
});
parcelHelpers.export(exports, "Translate", function() {
    return Translate;
});
parcelHelpers.export(exports, "UnknownElement", function() {
    return UnknownElement;
});
parcelHelpers.export(exports, "UseElement", function() {
    return UseElement;
});
parcelHelpers.export(exports, "ViewPort", function() {
    return ViewPort;
});
parcelHelpers.export(exports, "compressSpaces", function() {
    return compressSpaces;
});
parcelHelpers.export(exports, "default", function() {
    return Canvg;
});
parcelHelpers.export(exports, "getSelectorSpecificity", function() {
    return getSelectorSpecificity;
});
parcelHelpers.export(exports, "normalizeAttributeName", function() {
    return normalizeAttributeName;
});
parcelHelpers.export(exports, "normalizeColor", function() {
    return normalizeColor;
});
parcelHelpers.export(exports, "parseExternalUrl", function() {
    return parseExternalUrl;
});
parcelHelpers.export(exports, "presets", function() {
    return index;
});
parcelHelpers.export(exports, "toNumbers", function() {
    return toNumbers;
});
parcelHelpers.export(exports, "trimLeft", function() {
    return trimLeft;
});
parcelHelpers.export(exports, "trimRight", function() {
    return trimRight;
});
parcelHelpers.export(exports, "vectorMagnitude", function() {
    return vectorMagnitude;
});
parcelHelpers.export(exports, "vectorsAngle", function() {
    return vectorsAngle;
});
parcelHelpers.export(exports, "vectorsRatio", function() {
    return vectorsRatio;
});
var _assertThisInitialized = require("@swc/helpers/_/_assert_this_initialized");
var _classCallCheck = require("@swc/helpers/_/_class_call_check");
var _createClass = require("@swc/helpers/_/_create_class");
var _get = require("@swc/helpers/_/_get");
var _getPrototypeOf = require("@swc/helpers/_/_get_prototype_of");
var _inherits = require("@swc/helpers/_/_inherits");
var _possibleConstructorReturn = require("@swc/helpers/_/_possible_constructor_return");
var _slicedToArray = require("@swc/helpers/_/_sliced_to_array");
var _toConsumableArray = require("@swc/helpers/_/_to_consumable_array");
var _wrapNativeSuper = require("@swc/helpers/_/_wrap_native_super");
var _createSuper = require("@swc/helpers/_/_create_super");
var _tsGenerator = require("@swc/helpers/_/_ts_generator");
var _esPromiseJs = require("core-js/modules/es.promise.js");
var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _esStringMatchJs = require("core-js/modules/es.string.match.js");
var _esStringReplaceJs = require("core-js/modules/es.string.replace.js");
var _esStringStartsWithJs = require("core-js/modules/es.string.starts-with.js");
var _esArrayIteratorJs = require("core-js/modules/es.array.iterator.js");
var _webDomCollectionsIteratorJs = require("core-js/modules/web.dom-collections.iterator.js");
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _esArrayReduceJs = require("core-js/modules/es.array.reduce.js");
var _esStringEndsWithJs = require("core-js/modules/es.string.ends-with.js");
var _esStringSplitJs = require("core-js/modules/es.string.split.js");
var _raf = require("raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _esStringTrimJs = require("core-js/modules/es.string.trim.js");
var _rgbcolor = require("rgbcolor");
var _rgbcolorDefault = parcelHelpers.interopDefault(_rgbcolor);
var _esArrayIndexOfJs = require("core-js/modules/es.array.index-of.js");
var _esStringIncludesJs = require("core-js/modules/es.string.includes.js");
var _esArrayReverseJs = require("core-js/modules/es.array.reverse.js");
var _svgPathdata = require("svg-pathdata");
var _esRegexpToStringJs = require("core-js/modules/es.regexp.to-string.js");
var _stackblurCanvas = require("stackblur-canvas");
var process = require("30151051fd6339d4");
/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */ function offscreen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, DOMParserFallback = _ref.DOMParser;
    var preset = {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParserFallback,
        createCanvas: function(width, height) {
            return new OffscreenCanvas(width, height);
        },
        createImage: function(url) {
            return (0, _asyncToGeneratorDefault.default)(function() {
                var response, blob, img;
                return (0, _tsGenerator._)(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                fetch(url)
                            ];
                        case 1:
                            response = _state.sent();
                            return [
                                4,
                                response.blob()
                            ];
                        case 2:
                            blob = _state.sent();
                            return [
                                4,
                                createImageBitmap(blob)
                            ];
                        case 3:
                            img = _state.sent();
                            return [
                                2,
                                img
                            ];
                    }
                });
            })();
        }
    };
    if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") Reflect.deleteProperty(preset, "DOMParser");
    return preset;
}
/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */ function node(_ref) {
    var _$DOMParser = _ref.DOMParser, canvas = _ref.canvas, _$fetch = _ref.fetch;
    return {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: _$DOMParser,
        fetch: _$fetch,
        createCanvas: canvas.createCanvas,
        createImage: canvas.loadImage
    };
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    offscreen: offscreen,
    node: node
});
/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */ function compressSpaces(str) {
    return str.replace(/(?!\u3000)\s+/gm, " ");
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimLeft(str) {
    return str.replace(/^[\n \t]+/, "");
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimRight(str) {
    return str.replace(/[\n \t]+$/, "");
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */ function toNumbers(str) {
    var matches = (str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
    return matches.map(parseFloat);
} // Microsoft Edge fix
var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */ function normalizeAttributeName(name) {
    if (allUppercase.test(name)) return name.toLowerCase();
    return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */ function parseExternalUrl(url) {
    //                      single quotes [2]
    //                      v         double quotes [3]
    //                      v         v         no quotes [4]
    //                      v         v         v
    var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
    return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */ function normalizeColor(color) {
    if (!color.startsWith("rgb")) return color;
    var rgbParts = 3;
    var normalizedColor = color.replace(/\d+(\.\d+)?/g, function(num, isFloat) {
        return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
    });
    return normalizedColor;
}
// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;
function findSelectorMatch(selector, regex) {
    var matches = regex.exec(selector);
    if (!matches) return [
        selector,
        0
    ];
    return [
        selector.replace(regex, " "),
        matches.length
    ];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */ function getSelectorSpecificity(selector) {
    var specificity = [
        0,
        0,
        0
    ];
    var currentSelector = selector.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
    var delta = 0;
    var ref;
    ref = (0, _slicedToArray._)(findSelectorMatch(currentSelector, attributeRegex), 2), currentSelector = ref[0], delta = ref[1], ref;
    specificity[1] += delta;
    var ref1;
    ref1 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, idRegex), 2), currentSelector = ref1[0], delta = ref1[1], ref1;
    specificity[0] += delta;
    var ref2;
    ref2 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, classRegex), 2), currentSelector = ref2[0], delta = ref2[1], ref2;
    specificity[1] += delta;
    var ref3;
    ref3 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, pseudoElementRegex), 2), currentSelector = ref3[0], delta = ref3[1], ref3;
    specificity[2] += delta;
    var ref4;
    ref4 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex), 2), currentSelector = ref4[0], delta = ref4[1], ref4;
    specificity[1] += delta;
    var ref5;
    ref5 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, pseudoClassRegex), 2), currentSelector = ref5[0], delta = ref5[1], ref5;
    specificity[1] += delta;
    currentSelector = currentSelector.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ");
    var ref6;
    ref6 = (0, _slicedToArray._)(findSelectorMatch(currentSelector, elementRegex), 2), currentSelector = ref6[0], delta = ref6[1], ref6; // lgtm [js/useless-assignment-to-local]
    specificity[2] += delta;
    return specificity.join("");
}
var PSEUDO_ZERO = .00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */ function vectorMagnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsRatio(u, v) {
    return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
    return t * t * t;
}
function CB2(t) {
    return 3 * t * t * (1 - t);
}
function CB3(t) {
    return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
    return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
    return t * t;
}
function QB2(t) {
    return 2 * t * (1 - t);
}
function QB3(t) {
    return (1 - t) * (1 - t);
}
var Property = /*#__PURE__*/ function() {
    "use strict";
    function Property(document1, name, value) {
        (0, _classCallCheck._)(this, Property);
        this.document = document1;
        this.name = name;
        this.value = value;
        this.isNormalizedColor = false;
    }
    (0, _createClass._)(Property, [
        {
            key: "split",
            value: function split() {
                var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
                var _this = this, document1 = _this.document, name = _this.name;
                return compressSpaces(this.getString()).trim().split(separator).map(function(value) {
                    return new Property(document1, name, value);
                });
            }
        },
        {
            key: "hasValue",
            value: function hasValue(zeroIsValue) {
                var value = this.value;
                return value !== null && value !== "" && (zeroIsValue || value !== 0) && typeof value !== "undefined";
            }
        },
        {
            key: "isString",
            value: function isString(regexp) {
                var value = this.value;
                var result = typeof value === "string";
                if (!result || !regexp) return result;
                return regexp.test(value);
            }
        },
        {
            key: "isUrlDefinition",
            value: function isUrlDefinition() {
                return this.isString(/^url\(/);
            }
        },
        {
            key: "isPixels",
            value: function isPixels() {
                if (!this.hasValue()) return false;
                var asString = this.getString();
                switch(true){
                    case asString.endsWith("px"):
                    case /^[0-9]+$/.test(asString):
                        return true;
                    default:
                        return false;
                }
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
                return this;
            }
        },
        {
            key: "getValue",
            value: function getValue(def) {
                if (typeof def === "undefined" || this.hasValue()) return this.value;
                return def;
            }
        },
        {
            key: "getNumber",
            value: function getNumber(def) {
                if (!this.hasValue()) {
                    if (typeof def === "undefined") return 0;
                    return parseFloat(def);
                }
                var value = this.value;
                var n = parseFloat(value);
                if (this.isString(/%$/)) n /= 100.0;
                return n;
            }
        },
        {
            key: "getString",
            value: function getString(def) {
                if (typeof def === "undefined" || this.hasValue()) return typeof this.value === "undefined" ? "" : String(this.value);
                return String(def);
            }
        },
        {
            key: "getColor",
            value: function getColor(def) {
                var color = this.getString(def);
                if (this.isNormalizedColor) return color;
                this.isNormalizedColor = true;
                color = normalizeColor(color);
                this.value = color;
                return color;
            }
        },
        {
            key: "getDpi",
            value: function getDpi() {
                return 96.0; // TODO: compute?
            }
        },
        {
            key: "getRem",
            value: function getRem() {
                return this.document.rootEmSize;
            }
        },
        {
            key: "getEm",
            value: function getEm() {
                return this.document.emSize;
            }
        },
        {
            key: "getUnits",
            value: function getUnits() {
                return this.getString().replace(/[0-9.-]/g, "");
            }
        },
        {
            key: "getPixels",
            value: function getPixels(axisOrIsFontSize) {
                var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!this.hasValue()) return 0;
                var _ref = (0, _slicedToArray._)(typeof axisOrIsFontSize === "boolean" ? [
                    undefined,
                    axisOrIsFontSize
                ] : [
                    axisOrIsFontSize
                ], 2), axis = _ref[0], isFontSize = _ref[1];
                var viewPort = this.document.screen.viewPort;
                switch(true){
                    case this.isString(/vmin$/):
                        return this.getNumber() / 100.0 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));
                    case this.isString(/vmax$/):
                        return this.getNumber() / 100.0 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));
                    case this.isString(/vw$/):
                        return this.getNumber() / 100.0 * viewPort.computeSize("x");
                    case this.isString(/vh$/):
                        return this.getNumber() / 100.0 * viewPort.computeSize("y");
                    case this.isString(/rem$/):
                        return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                        return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                        return this.getNumber() * this.getEm() / 2.0;
                    case this.isString(/px$/):
                        return this.getNumber();
                    case this.isString(/pt$/):
                        return this.getNumber() * this.getDpi() * (1.0 / 72.0);
                    case this.isString(/pc$/):
                        return this.getNumber() * 15;
                    case this.isString(/cm$/):
                        return this.getNumber() * this.getDpi() / 2.54;
                    case this.isString(/mm$/):
                        return this.getNumber() * this.getDpi() / 25.4;
                    case this.isString(/in$/):
                        return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && isFontSize:
                        return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                        return this.getNumber() * viewPort.computeSize(axis);
                    default:
                        var n = this.getNumber();
                        if (processPercent && n < 1.0) return n * viewPort.computeSize(axis);
                        return n;
                }
            }
        },
        {
            key: "getMilliseconds",
            value: function getMilliseconds() {
                if (!this.hasValue()) return 0;
                if (this.isString(/ms$/)) return this.getNumber();
                return this.getNumber() * 1000;
            }
        },
        {
            key: "getRadians",
            value: function getRadians() {
                if (!this.hasValue()) return 0;
                switch(true){
                    case this.isString(/deg$/):
                        return this.getNumber() * (Math.PI / 180.0);
                    case this.isString(/grad$/):
                        return this.getNumber() * (Math.PI / 200.0);
                    case this.isString(/rad$/):
                        return this.getNumber();
                    default:
                        return this.getNumber() * (Math.PI / 180.0);
                }
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                var asString = this.getString();
                var name = /#([^)'"]+)/.exec(asString);
                if (name) name = name[1];
                if (!name) name = asString;
                return this.document.definitions[name];
            }
        },
        {
            key: "getFillStyleDefinition",
            value: function getFillStyleDefinition(element, opacity) {
                var def = this.getDefinition();
                if (!def) return null;
                 // gradient
                if (typeof def.createGradient === "function") return def.createGradient(this.document.ctx, element, opacity);
                 // pattern
                if (typeof def.createPattern === "function") {
                    if (def.getHrefAttribute().hasValue()) {
                        var patternTransform = def.getAttribute("patternTransform");
                        def = def.getHrefAttribute().getDefinition();
                        if (patternTransform.hasValue()) def.getAttribute("patternTransform", true).setValue(patternTransform.value);
                    }
                    return def.createPattern(this.document.ctx, element, opacity);
                }
                return null;
            }
        },
        {
            key: "getTextBaseline",
            value: function getTextBaseline() {
                if (!this.hasValue()) return null;
                return Property.textBaselineMapping[this.getString()];
            }
        },
        {
            key: "addOpacity",
            value: function addOpacity(opacity) {
                var value = this.getColor();
                var len = value.length;
                var commas = 0; // Simulate old RGBColor version, which can't parse rgba.
                for(var i = 0; i < len; i++){
                    if (value[i] === ",") commas++;
                    if (commas === 3) break;
                }
                if (opacity.hasValue() && this.isString() && commas !== 3) {
                    var color = new (0, _rgbcolorDefault.default)(value);
                    if (color.ok) {
                        color.alpha = opacity.getNumber();
                        value = color.toRGBA();
                    }
                }
                return new Property(this.document, this.name, value);
            }
        }
    ], [
        {
            key: "empty",
            value: function empty(document1) {
                return new Property(document1, "EMPTY", "");
            }
        }
    ]);
    return Property;
}();
Property.textBaselineMapping = {
    "baseline": "alphabetic",
    "before-edge": "top",
    "text-before-edge": "top",
    "middle": "middle",
    "central": "middle",
    "after-edge": "bottom",
    "text-after-edge": "bottom",
    "ideographic": "ideographic",
    "alphabetic": "alphabetic",
    "hanging": "hanging",
    "mathematical": "alphabetic"
};
var ViewPort = /*#__PURE__*/ function() {
    "use strict";
    function ViewPort() {
        (0, _classCallCheck._)(this, ViewPort);
        this.viewPorts = [];
    }
    (0, _createClass._)(ViewPort, [
        {
            key: "clear",
            value: function clear() {
                this.viewPorts = [];
            }
        },
        {
            key: "setCurrent",
            value: function setCurrent(width, height) {
                this.viewPorts.push({
                    width: width,
                    height: height
                });
            }
        },
        {
            key: "removeCurrent",
            value: function removeCurrent() {
                this.viewPorts.pop();
            }
        },
        {
            key: "getCurrent",
            value: function getCurrent() {
                var viewPorts = this.viewPorts;
                return viewPorts[viewPorts.length - 1];
            }
        },
        {
            key: "width",
            get: function get() {
                return this.getCurrent().width;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.getCurrent().height;
            }
        },
        {
            key: "computeSize",
            value: function computeSize(d) {
                if (typeof d === "number") return d;
                if (d === "x") return this.width;
                if (d === "y") return this.height;
                return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
            }
        }
    ]);
    return ViewPort;
}();
var Point = /*#__PURE__*/ function() {
    "use strict";
    function Point(x, y) {
        (0, _classCallCheck._)(this, Point);
        this.x = x;
        this.y = y;
    }
    (0, _createClass._)(Point, [
        {
            key: "angleTo",
            value: function angleTo(point) {
                return Math.atan2(point.y - this.y, point.x - this.x);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var _this = this, x = _this.x, y = _this.y;
                var xp = x * transform[0] + y * transform[2] + transform[4];
                var yp = x * transform[1] + y * transform[3] + transform[5];
                this.x = xp;
                this.y = yp;
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(point) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var _toNumbers = (0, _slicedToArray._)(toNumbers(point), 2), tmp = _toNumbers[0], x = tmp === void 0 ? defaultValue : tmp, tmp1 = _toNumbers[1], y = tmp1 === void 0 ? defaultValue : tmp1;
                return new Point(x, y);
            }
        },
        {
            key: "parseScale",
            value: function parseScale(scale) {
                var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var _toNumbers = (0, _slicedToArray._)(toNumbers(scale), 2), tmp = _toNumbers[0], x = tmp === void 0 ? defaultValue : tmp, tmp1 = _toNumbers[1], y = tmp1 === void 0 ? x : tmp1;
                return new Point(x, y);
            }
        },
        {
            key: "parsePath",
            value: function parsePath(path) {
                var points = toNumbers(path);
                var len = points.length;
                var pathPoints = [];
                for(var i = 0; i < len; i += 2)pathPoints.push(new Point(points[i], points[i + 1]));
                return pathPoints;
            }
        }
    ]);
    return Point;
}();
var Mouse = /*#__PURE__*/ function() {
    "use strict";
    function Mouse(screen) {
        (0, _classCallCheck._)(this, Mouse);
        this.screen = screen;
        this.working = false;
        this.events = [];
        this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    (0, _createClass._)(Mouse, [
        {
            key: "isWorking",
            value: function isWorking() {
                return this.working;
            }
        },
        {
            key: "start",
            value: function start() {
                if (this.working) return;
                var _this = this, screen = _this.screen, onClick = _this.onClick, onMouseMove = _this.onMouseMove;
                var canvas = screen.ctx.canvas;
                canvas.onclick = onClick;
                canvas.onmousemove = onMouseMove;
                this.working = true;
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (!this.working) return;
                var canvas = this.screen.ctx.canvas;
                this.working = false;
                canvas.onclick = null;
                canvas.onmousemove = null;
            }
        },
        {
            key: "hasEvents",
            value: function hasEvents() {
                return this.working && this.events.length > 0;
            }
        },
        {
            key: "runEvents",
            value: function runEvents() {
                if (!this.working) return;
                var _this = this, document1 = _this.screen, events = _this.events, eventElements = _this.eventElements;
                var style = document1.ctx.canvas.style;
                if (style) style.cursor = "";
                events.forEach(function(_ref, i) {
                    var run = _ref.run;
                    var element = eventElements[i];
                    while(element){
                        run(element);
                        element = element.parent;
                    }
                }); // done running, clear
                this.events = [];
                this.eventElements = [];
            }
        },
        {
            key: "checkPath",
            value: function checkPath(element, ctx) {
                if (!this.working || !ctx) return;
                var _this = this, events = _this.events, eventElements = _this.eventElements;
                events.forEach(function(_ref2, i) {
                    var x = _ref2.x, y = _ref2.y;
                    if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "checkBoundingBox",
            value: function checkBoundingBox(element, boundingBox) {
                if (!this.working || !boundingBox) return;
                var _this = this, events = _this.events, eventElements = _this.eventElements;
                events.forEach(function(_ref3, i) {
                    var x = _ref3.x, y = _ref3.y;
                    if (!eventElements[i] && boundingBox.isPointInBox(x, y)) eventElements[i] = element;
                });
            }
        },
        {
            key: "mapXY",
            value: function mapXY(x, y) {
                var _this_screen = this.screen, _$window = _this_screen.window, ctx = _this_screen.ctx;
                var point = new Point(x, y);
                var element = ctx.canvas;
                while(element){
                    point.x -= element.offsetLeft;
                    point.y -= element.offsetTop;
                    element = element.offsetParent;
                }
                if (_$window.scrollX) point.x += _$window.scrollX;
                if (_$window.scrollY) point.y += _$window.scrollY;
                return point;
            }
        },
        {
            key: "onClick",
            value: function onClick(event) {
                var _this_mapXY = this.mapXY(event.clientX, event.clientY), x = _this_mapXY.x, y = _this_mapXY.y;
                this.events.push({
                    type: "onclick",
                    x: x,
                    y: y,
                    run: function(eventTarget) {
                        if (eventTarget.onClick) eventTarget.onClick();
                    }
                });
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(event) {
                var _this_mapXY = this.mapXY(event.clientX, event.clientY), x = _this_mapXY.x, y = _this_mapXY.y;
                this.events.push({
                    type: "onmousemove",
                    x: x,
                    y: y,
                    run: function(eventTarget) {
                        if (eventTarget.onMouseMove) eventTarget.onMouseMove();
                    }
                });
            }
        }
    ]);
    return Mouse;
}();
var defaultWindow = typeof window !== "undefined" ? window : null;
var defaultFetch$1 = typeof fetch !== "undefined" ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
 : null;
var Screen = /*#__PURE__*/ function() {
    "use strict";
    function Screen(ctx) {
        (0, _classCallCheck._)(this, Screen);
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref_fetch = _ref.fetch, _$fetch = _ref_fetch === void 0 ? defaultFetch$1 : _ref_fetch, _ref_window = _ref.window, _$window = _ref_window === void 0 ? defaultWindow : _ref_window;
        this.ctx = ctx;
        this.FRAMERATE = 30;
        this.MAX_VIRTUAL_PIXELS = 30000;
        this.CLIENT_WIDTH = 800;
        this.CLIENT_HEIGHT = 600;
        this.viewPort = new ViewPort();
        this.mouse = new Mouse(this);
        this.animations = [];
        this.waits = [];
        this.frameDuration = 0;
        this.isReadyLock = false;
        this.isFirstRender = true;
        this.intervalId = null;
        this.window = _$window;
        this.fetch = _$fetch;
    }
    (0, _createClass._)(Screen, [
        {
            key: "wait",
            value: function wait(checker) {
                this.waits.push(checker);
            }
        },
        {
            key: "ready",
            value: function ready() {
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                if (!this.readyPromise) return Promise.resolve();
                return this.readyPromise;
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                if (this.isReadyLock) return true;
                var isReadyLock = this.waits.every(function(_) {
                    return _();
                });
                if (isReadyLock) {
                    this.waits = [];
                    if (this.resolveReady) this.resolveReady();
                }
                this.isReadyLock = isReadyLock;
                return isReadyLock;
            }
        },
        {
            key: "setDefaults",
            value: function setDefaults(ctx) {
                // initial values and defaults
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 4;
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(_ref) {
                var document1 = _ref.document, ctx = _ref.ctx, aspectRatio = _ref.aspectRatio, width = _ref.width, desiredWidth = _ref.desiredWidth, height = _ref.height, desiredHeight = _ref.desiredHeight, _ref_minX = _ref.minX, minX = _ref_minX === void 0 ? 0 : _ref_minX, _ref_minY = _ref.minY, minY = _ref_minY === void 0 ? 0 : _ref_minY, refX = _ref.refX, refY = _ref.refY, _ref_clip = _ref.clip, clip = _ref_clip === void 0 ? false : _ref_clip, _ref_clipX = _ref.clipX, clipX = _ref_clipX === void 0 ? 0 : _ref_clipX, _ref_clipY = _ref.clipY, clipY = _ref_clipY === void 0 ? 0 : _ref_clipY;
                // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
                var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ""); // ignore defer
                var _cleanAspectRatio_split = (0, _slicedToArray._)(cleanAspectRatio.split(" "), 2), aspectRatioAlign = _cleanAspectRatio_split[0], aspectRatioMeetOrSlice = _cleanAspectRatio_split[1];
                var align = aspectRatioAlign || "xMidYMid";
                var meetOrSlice = aspectRatioMeetOrSlice || "meet"; // calculate scale
                var scaleX = width / desiredWidth;
                var scaleY = height / desiredHeight;
                var scaleMin = Math.min(scaleX, scaleY);
                var scaleMax = Math.max(scaleX, scaleY);
                var finalDesiredWidth = desiredWidth;
                var finalDesiredHeight = desiredHeight;
                if (meetOrSlice === "meet") {
                    finalDesiredWidth *= scaleMin;
                    finalDesiredHeight *= scaleMin;
                }
                if (meetOrSlice === "slice") {
                    finalDesiredWidth *= scaleMax;
                    finalDesiredHeight *= scaleMax;
                }
                var refXProp = new Property(document1, "refX", refX);
                var refYProp = new Property(document1, "refY", refY);
                var hasRefs = refXProp.hasValue() && refYProp.hasValue();
                if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
                if (clip) {
                    var scaledClipX = scaleMin * clipX;
                    var scaledClipY = scaleMin * clipY;
                    ctx.beginPath();
                    ctx.moveTo(scaledClipX, scaledClipY);
                    ctx.lineTo(width, scaledClipY);
                    ctx.lineTo(width, height);
                    ctx.lineTo(scaledClipX, height);
                    ctx.closePath();
                    ctx.clip();
                }
                if (!hasRefs) {
                    var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
                    var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
                    var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
                    var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
                    if (align.startsWith("xMid") && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
                    if (align.endsWith("YMid") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
                    if (align.startsWith("xMax") && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
                    if (align.endsWith("YMax") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
                } // scale
                switch(true){
                    case align === "none":
                        ctx.scale(scaleX, scaleY);
                        break;
                    case meetOrSlice === "meet":
                        ctx.scale(scaleMin, scaleMin);
                        break;
                    case meetOrSlice === "slice":
                        ctx.scale(scaleMax, scaleMax);
                        break;
                } // translate
                ctx.translate(-minX, -minY);
            }
        },
        {
            key: "start",
            value: function start(element) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref_enableRedraw = _ref.enableRedraw, enableRedraw = _ref_enableRedraw === void 0 ? false : _ref_enableRedraw, _ref_ignoreMouse = _ref.ignoreMouse, ignoreMouse = _ref_ignoreMouse === void 0 ? false : _ref_ignoreMouse, _ref_ignoreAnimation = _ref.ignoreAnimation, ignoreAnimation = _ref_ignoreAnimation === void 0 ? false : _ref_ignoreAnimation, _ref_ignoreDimensions = _ref.ignoreDimensions, ignoreDimensions = _ref_ignoreDimensions === void 0 ? false : _ref_ignoreDimensions, _ref_ignoreClear = _ref.ignoreClear, ignoreClear = _ref_ignoreClear === void 0 ? false : _ref_ignoreClear, forceRedraw = _ref.forceRedraw, scaleWidth = _ref.scaleWidth, scaleHeight = _ref.scaleHeight, offsetX = _ref.offsetX, offsetY = _ref.offsetY;
                var _this1 = this, FRAMERATE = _this1.FRAMERATE, mouse = _this1.mouse;
                var frameDuration = 1000 / FRAMERATE;
                this.frameDuration = frameDuration;
                this.readyPromise = new Promise(function(resolve) {
                    _this.resolveReady = resolve;
                });
                if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                if (!enableRedraw) return;
                var now = Date.now();
                var then = now;
                var delta = 0;
                var tick = function() {
                    now = Date.now();
                    delta = now - then;
                    if (delta >= frameDuration) {
                        then = now - delta % frameDuration;
                        if (_this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                            _this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                            mouse.runEvents();
                        }
                    }
                    _this.intervalId = (0, _rafDefault.default)(tick);
                };
                if (!ignoreMouse) mouse.start();
                this.intervalId = (0, _rafDefault.default)(tick);
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.intervalId) {
                    (0, _rafDefault.default).cancel(this.intervalId);
                    this.intervalId = null;
                }
                this.mouse.stop();
            }
        },
        {
            key: "shouldUpdate",
            value: function shouldUpdate(ignoreAnimation, forceRedraw) {
                // need update from animations?
                if (!ignoreAnimation) {
                    var frameDuration = this.frameDuration;
                    var shouldUpdate = this.animations.reduce(function(shouldUpdate, animation) {
                        return animation.update(frameDuration) || shouldUpdate;
                    }, false);
                    if (shouldUpdate) return true;
                } // need update from redraw?
                if (typeof forceRedraw === "function" && forceRedraw()) return true;
                if (!this.isReadyLock && this.isReady()) return true;
                 // need update from mouse events?
                if (this.mouse.hasEvents()) return true;
                return false;
            }
        },
        {
            key: "render",
            value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
                var _this = this, CLIENT_WIDTH = _this.CLIENT_WIDTH, CLIENT_HEIGHT = _this.CLIENT_HEIGHT, viewPort = _this.viewPort, ctx = _this.ctx, isFirstRender = _this.isFirstRender;
                var canvas = ctx.canvas;
                viewPort.clear();
                if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height);
                else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
                var widthStyle = element.getStyle("width");
                var heightStyle = element.getStyle("height");
                if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
                    // set canvas size
                    if (widthStyle.hasValue()) {
                        canvas.width = widthStyle.getPixels("x");
                        if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
                    }
                    if (heightStyle.hasValue()) {
                        canvas.height = heightStyle.getPixels("y");
                        if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
                    }
                }
                var cWidth = canvas.clientWidth || canvas.width;
                var cHeight = canvas.clientHeight || canvas.height;
                if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
                    cWidth = widthStyle.getPixels("x");
                    cHeight = heightStyle.getPixels("y");
                }
                viewPort.setCurrent(cWidth, cHeight);
                if (typeof offsetX === "number") element.getAttribute("x", true).setValue(offsetX);
                if (typeof offsetY === "number") element.getAttribute("y", true).setValue(offsetY);
                if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
                    var viewBox = toNumbers(element.getAttribute("viewBox").getString());
                    var xRatio = 0;
                    var yRatio = 0;
                    if (typeof scaleWidth === "number") {
                        var _widthStyle = element.getStyle("width");
                        if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels("x") / scaleWidth;
                        else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
                    }
                    if (typeof scaleHeight === "number") {
                        var _heightStyle = element.getStyle("height");
                        if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels("y") / scaleHeight;
                        else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
                    }
                    if (!xRatio) xRatio = yRatio;
                    if (!yRatio) yRatio = xRatio;
                    element.getAttribute("width", true).setValue(scaleWidth);
                    element.getAttribute("height", true).setValue(scaleHeight);
                    var transformStyle = element.getStyle("transform", true, true);
                    transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
                } // clear and render
                if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
                element.render(ctx);
                if (isFirstRender) this.isFirstRender = false;
            }
        }
    ]);
    return Screen;
}();
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;
var defaultFetch = Screen.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
var Parser = /*#__PURE__*/ function() {
    "use strict";
    function Parser() {
        (0, _classCallCheck._)(this, Parser);
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref_fetch = _ref.fetch, _$fetch = _ref_fetch === void 0 ? defaultFetch : _ref_fetch, _ref_DOMParser = _ref.DOMParser, _$DOMParser = _ref_DOMParser === void 0 ? DefaultDOMParser : _ref_DOMParser;
        this.fetch = _$fetch;
        this.DOMParser = _$DOMParser;
    }
    (0, _createClass._)(Parser, [
        {
            key: "parse",
            value: function parse(resource) {
                var _this = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    return (0, _tsGenerator._)(this, function(_state) {
                        if (resource.startsWith("<")) return [
                            2,
                            _this.parseFromString(resource)
                        ];
                        return [
                            2,
                            _this.load(resource)
                        ];
                    });
                })();
            }
        },
        {
            key: "parseFromString",
            value: function parseFromString(xml) {
                var parser = new this.DOMParser();
                try {
                    return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
                } catch (err) {
                    return this.checkDocument(parser.parseFromString(xml, "text/xml"));
                }
            }
        },
        {
            key: "checkDocument",
            value: function checkDocument(document1) {
                var parserError = document1.getElementsByTagName("parsererror")[0];
                if (parserError) throw new Error(parserError.textContent);
                return document1;
            }
        },
        {
            key: "load",
            value: function load(url) {
                var _this2 = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var response, xml;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this2.fetch(url)
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    4,
                                    response.text()
                                ];
                            case 2:
                                xml = _state.sent();
                                return [
                                    2,
                                    _this2.parseFromString(xml)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Parser;
}();
var Translate = /*#__PURE__*/ function() {
    "use strict";
    function Translate(_, point) {
        (0, _classCallCheck._)(this, Translate);
        this.type = "translate";
        this.point = null;
        this.point = Point.parse(point);
    }
    (0, _createClass._)(Translate, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this_point = this.point, x = _this_point.x, y = _this_point.y;
                ctx.translate(x || 0.0, y || 0.0);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this_point = this.point, x = _this_point.x, y = _this_point.y;
                ctx.translate(-1 * x || 0.0, -1 * y || 0.0);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this_point = this.point, x = _this_point.x, y = _this_point.y;
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    x || 0.0,
                    y || 0.0
                ]);
            }
        }
    ]);
    return Translate;
}();
var Rotate = /*#__PURE__*/ function() {
    "use strict";
    function Rotate(document1, rotate, transformOrigin) {
        (0, _classCallCheck._)(this, Rotate);
        this.type = "rotate";
        this.angle = null;
        this.originX = null;
        this.originY = null;
        this.cx = 0;
        this.cy = 0;
        var numbers = toNumbers(rotate);
        this.angle = new Property(document1, "angle", numbers[0]);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
        this.cx = numbers[1] || 0;
        this.cy = numbers[2] || 0;
    }
    (0, _createClass._)(Rotate, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this = this, cx = _this.cx, cy = _this.cy, originX = _this.originX, originY = _this.originY, angle = _this.angle;
                var tx = cx + originX.getPixels("x");
                var ty = cy + originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.rotate(angle.getRadians());
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this = this, cx = _this.cx, cy = _this.cy, originX = _this.originX, originY = _this.originY, angle = _this.angle;
                var tx = cx + originX.getPixels("x");
                var ty = cy + originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.rotate(-1 * angle.getRadians());
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this = this, cx = _this.cx, cy = _this.cy, angle = _this.angle;
                var rad = angle.getRadians();
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    cx || 0.0,
                    cy || 0.0 // this.p.y
                ]);
                point.applyTransform([
                    Math.cos(rad),
                    Math.sin(rad),
                    -Math.sin(rad),
                    Math.cos(rad),
                    0,
                    0
                ]);
                point.applyTransform([
                    1,
                    0,
                    0,
                    1,
                    -cx || 0.0,
                    -cy || 0.0 // -this.p.y
                ]);
            }
        }
    ]);
    return Rotate;
}();
var Scale = /*#__PURE__*/ function() {
    "use strict";
    function Scale(_, scale, transformOrigin) {
        (0, _classCallCheck._)(this, Scale);
        this.type = "scale";
        this.scale = null;
        this.originX = null;
        this.originY = null;
        var scaleSize = Point.parseScale(scale); // Workaround for node-canvas
        if (scaleSize.x === 0 || scaleSize.y === 0) {
            scaleSize.x = PSEUDO_ZERO;
            scaleSize.y = PSEUDO_ZERO;
        }
        this.scale = scaleSize;
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    (0, _createClass._)(Scale, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this = this, _this_scale = _this.scale, x = _this_scale.x, y = _this_scale.y, originX = _this.originX, originY = _this.originY;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.scale(x, y || x);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this = this, _this_scale = _this.scale, x = _this_scale.x, y = _this_scale.y, originX = _this.originX, originY = _this.originY;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.scale(1.0 / x, 1.0 / y || x);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var _this_scale = this.scale, x = _this_scale.x, y = _this_scale.y;
                point.applyTransform([
                    x || 0.0,
                    0,
                    0,
                    y || 0.0,
                    0,
                    0
                ]);
            }
        }
    ]);
    return Scale;
}();
var Matrix = /*#__PURE__*/ function() {
    "use strict";
    function Matrix(_, matrix, transformOrigin) {
        (0, _classCallCheck._)(this, Matrix);
        this.type = "matrix";
        this.matrix = [];
        this.originX = null;
        this.originY = null;
        this.matrix = toNumbers(matrix);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    (0, _createClass._)(Matrix, [
        {
            key: "apply",
            value: function apply(ctx) {
                var _this = this, originX = _this.originX, originY = _this.originY, matrix = _this.matrix;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var _this = this, originX = _this.originX, originY = _this.originY, matrix = _this.matrix;
                var a = matrix[0];
                var b = matrix[2];
                var c = matrix[4];
                var d = matrix[1];
                var e = matrix[3];
                var f = matrix[5];
                var g = 0.0;
                var h = 0.0;
                var i = 1.0;
                var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
                ctx.translate(-tx, -ty);
            }
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                point.applyTransform(this.matrix);
            }
        }
    ]);
    return Matrix;
}();
var Skew = /*#__PURE__*/ function(Matrix) {
    "use strict";
    (0, _inherits._)(Skew, Matrix);
    var _super = (0, _createSuper._)(Skew);
    function Skew(document1, skew, transformOrigin) {
        (0, _classCallCheck._)(this, Skew);
        var _this;
        _this = _super.call(this, document1, skew, transformOrigin);
        _this.type = "skew";
        _this.angle = null;
        _this.angle = new Property(document1, "angle", skew);
        return _this;
    }
    return Skew;
}(Matrix);
var SkewX = /*#__PURE__*/ function(Skew) {
    "use strict";
    (0, _inherits._)(SkewX, Skew);
    var _super = (0, _createSuper._)(SkewX);
    function SkewX(document1, skew, transformOrigin) {
        (0, _classCallCheck._)(this, SkewX);
        var _this;
        _this = _super.call(this, document1, skew, transformOrigin);
        _this.type = "skewX";
        _this.matrix = [
            1,
            0,
            Math.tan(_this.angle.getRadians()),
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewX;
}(Skew);
var SkewY = /*#__PURE__*/ function(Skew) {
    "use strict";
    (0, _inherits._)(SkewY, Skew);
    var _super = (0, _createSuper._)(SkewY);
    function SkewY(document1, skew, transformOrigin) {
        (0, _classCallCheck._)(this, SkewY);
        var _this;
        _this = _super.call(this, document1, skew, transformOrigin);
        _this.type = "skewY";
        _this.matrix = [
            1,
            Math.tan(_this.angle.getRadians()),
            0,
            1,
            0,
            0
        ];
        return _this;
    }
    return SkewY;
}(Skew);
function parseTransforms(transform) {
    return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
    var _transform_split = (0, _slicedToArray._)(transform.split("("), 2), type = _transform_split[0], value = _transform_split[1];
    return [
        type.trim(),
        value.trim().replace(")", "")
    ];
}
var Transform = /*#__PURE__*/ function() {
    "use strict";
    function Transform(document1, transform, transformOrigin) {
        var _this = this;
        (0, _classCallCheck._)(this, Transform);
        this.document = document1;
        this.transforms = [];
        var data = parseTransforms(transform);
        data.forEach(function(transform) {
            if (transform === "none") return;
            var _parseTransform = (0, _slicedToArray._)(parseTransform(transform), 2), type = _parseTransform[0], value = _parseTransform[1];
            var TransformType = Transform.transformTypes[type];
            if (typeof TransformType !== "undefined") _this.transforms.push(new TransformType(_this.document, value, transformOrigin));
        });
    }
    (0, _createClass._)(Transform, [
        {
            key: "apply",
            value: function apply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].apply(ctx);
            }
        },
        {
            key: "unapply",
            value: function unapply(ctx) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = len - 1; i >= 0; i--)transforms[i].unapply(ctx);
            } // TODO: applyToPoint unused ... remove?
        },
        {
            key: "applyToPoint",
            value: function applyToPoint(point) {
                var transforms = this.transforms;
                var len = transforms.length;
                for(var i = 0; i < len; i++)transforms[i].applyToPoint(point);
            }
        }
    ], [
        {
            key: "fromElement",
            value: function fromElement(document1, element) {
                var transformStyle = element.getStyle("transform", false, true);
                var _element_getStyle_split = (0, _slicedToArray._)(element.getStyle("transform-origin", false, true).split(), 2), transformOriginXProperty = _element_getStyle_split[0], tmp = _element_getStyle_split[1], transformOriginYProperty = tmp === void 0 ? transformOriginXProperty : tmp;
                var transformOrigin = [
                    transformOriginXProperty,
                    transformOriginYProperty
                ];
                if (transformStyle.hasValue()) return new Transform(document1, transformStyle.getString(), transformOrigin);
                return null;
            }
        }
    ]);
    return Transform;
}();
Transform.transformTypes = {
    translate: Translate,
    rotate: Rotate,
    scale: Scale,
    matrix: Matrix,
    skewX: SkewX,
    skewY: SkewY
};
var Element = /*#__PURE__*/ function() {
    "use strict";
    function Element(document1, node) {
        var _this = this;
        (0, _classCallCheck._)(this, Element);
        var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.document = document1;
        this.node = node;
        this.captureTextNodes = captureTextNodes;
        this.attributes = {};
        this.styles = {};
        this.stylesSpecificity = {};
        this.animationFrozen = false;
        this.animationFrozenValue = "";
        this.parent = null;
        this.children = [];
        if (!node || node.nodeType !== 1) // ELEMENT_NODE
        return;
         // add attributes
        Array.from(node.attributes).forEach(function(attribute) {
            var nodeName = normalizeAttributeName(attribute.nodeName);
            _this.attributes[nodeName] = new Property(document1, nodeName, attribute.value);
        });
        this.addStylesFromStyleDefinition(); // add inline styles
        if (this.getAttribute("style").hasValue()) {
            var styles = this.getAttribute("style").getString().split(";").map(function(_) {
                return _.trim();
            });
            styles.forEach(function(style) {
                if (!style) return;
                var _style_split_map = (0, _slicedToArray._)(style.split(":").map(function(_) {
                    return _.trim();
                }), 2), name = _style_split_map[0], value = _style_split_map[1];
                _this.styles[name] = new Property(document1, name, value);
            });
        }
        var definitions = document1.definitions;
        var id = this.getAttribute("id"); // add id
        if (id.hasValue()) {
            if (!definitions[id.getString()]) definitions[id.getString()] = this;
        }
        Array.from(node.childNodes).forEach(function(childNode) {
            if (childNode.nodeType === 1) _this.addChild(childNode); // ELEMENT_NODE
            else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
                var textNode = document1.createTextNode(childNode);
                if (textNode.getText().length > 0) _this.addChild(textNode); // TEXT_NODE
            }
        });
    }
    (0, _createClass._)(Element, [
        {
            key: "getAttribute",
            value: function getAttribute(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var attr = this.attributes[name];
                if (!attr && createIfNotExists) {
                    var _attr = new Property(this.document, name, "");
                    this.attributes[name] = _attr;
                    return _attr;
                }
                return attr || Property.empty(this.document);
            }
        },
        {
            key: "getHrefAttribute",
            value: function getHrefAttribute() {
                for(var key in this.attributes){
                    if (key === "href" || key.endsWith(":href")) return this.attributes[key];
                }
                return Property.empty(this.document);
            }
        },
        {
            key: "getStyle",
            value: function getStyle(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var style = this.styles[name];
                if (style) return style;
                var attr = this.getAttribute(name);
                if (attr !== null && attr !== void 0 && attr.hasValue()) {
                    this.styles[name] = attr; // move up to me to cache
                    return attr;
                }
                if (!skipAncestors) {
                    var parent = this.parent;
                    if (parent) {
                        var parentStyle = parent.getStyle(name);
                        if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) return parentStyle;
                    }
                }
                if (createIfNotExists) {
                    var _style = new Property(this.document, name, "");
                    this.styles[name] = _style;
                    return _style;
                }
                return style || Property.empty(this.document);
            }
        },
        {
            key: "render",
            value: function render(ctx) {
                // don't render display=none
                // don't render visibility=hidden
                if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") return;
                ctx.save();
                if (this.getStyle("mask").hasValue()) {
                    // mask
                    var mask = this.getStyle("mask").getDefinition();
                    if (mask) {
                        this.applyEffects(ctx);
                        mask.apply(ctx, this);
                    }
                } else if (this.getStyle("filter").getValue("none") !== "none") {
                    // filter
                    var filter = this.getStyle("filter").getDefinition();
                    if (filter) {
                        this.applyEffects(ctx);
                        filter.apply(ctx, this);
                    }
                } else {
                    this.setContext(ctx);
                    this.renderChildren(ctx);
                    this.clearContext(ctx);
                }
                ctx.restore();
            }
        },
        {
            key: "setContext",
            value: function setContext(_) {}
        },
        {
            key: "applyEffects",
            value: function applyEffects(ctx) {
                // transform
                var transform = Transform.fromElement(this.document, this);
                if (transform) transform.apply(ctx);
                 // clip
                var clipPathStyleProp = this.getStyle("clip-path", false, true);
                if (clipPathStyleProp.hasValue()) {
                    var clip = clipPathStyleProp.getDefinition();
                    if (clip) clip.apply(ctx);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(_) {}
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.children.forEach(function(child) {
                    child.render(ctx);
                });
            }
        },
        {
            key: "addChild",
            value: function addChild(childNode) {
                var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
                child.parent = this;
                if (!Element.ignoreChildTypes.includes(child.type)) this.children.push(child);
            }
        },
        {
            key: "matchesSelector",
            value: function matchesSelector(selector) {
                var _node$getAttribute;
                var _$node = this.node;
                if (typeof _$node.matches === "function") return _$node.matches(selector);
                var styleClasses = (_node$getAttribute = _$node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(_$node, "class");
                if (!styleClasses || styleClasses === "") return false;
                return styleClasses.split(" ").some(function(styleClass) {
                    return ".".concat(styleClass) === selector;
                });
            }
        },
        {
            key: "addStylesFromStyleDefinition",
            value: function addStylesFromStyleDefinition() {
                var _this_document = this.document, styles = _this_document.styles, stylesSpecificity = _this_document.stylesSpecificity;
                for(var selector in styles)if (!selector.startsWith("@") && this.matchesSelector(selector)) {
                    var style = styles[selector];
                    var specificity = stylesSpecificity[selector];
                    if (style) for(var name in style){
                        var existingSpecificity = this.stylesSpecificity[name];
                        if (typeof existingSpecificity === "undefined") existingSpecificity = "000";
                        if (specificity >= existingSpecificity) {
                            this.styles[name] = style[name];
                            this.stylesSpecificity[name] = specificity;
                        }
                    }
                }
            }
        },
        {
            key: "removeStyles",
            value: function removeStyles(element, ignoreStyles) {
                var toRestore = ignoreStyles.reduce(function(toRestore, name) {
                    var styleProp = element.getStyle(name);
                    if (!styleProp.hasValue()) return toRestore;
                    var value = styleProp.getString();
                    styleProp.setValue("");
                    return (0, _toConsumableArray._)(toRestore).concat([
                        [
                            name,
                            value
                        ]
                    ]);
                }, []);
                return toRestore;
            }
        },
        {
            key: "restoreStyles",
            value: function restoreStyles(element, styles) {
                styles.forEach(function(_ref) {
                    var _$_ref = (0, _slicedToArray._)(_ref, 2), name = _$_ref[0], value = _$_ref[1];
                    element.getStyle(name, true).setValue(value);
                });
            }
        },
        {
            key: "isFirstChild",
            value: function isFirstChild() {
                var _this$parent;
                return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
            }
        }
    ]);
    return Element;
}();
Element.ignoreChildTypes = [
    "title"
];
var UnknownElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(UnknownElement, Element);
    var _super = (0, _createSuper._)(UnknownElement);
    function UnknownElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, UnknownElement);
        return _super.call(this, document1, node, captureTextNodes);
    }
    return UnknownElement;
}((0, _wrapNativeSuper._)(Element));
function wrapFontFamily(fontFamily) {
    var trimmed = fontFamily.trim();
    return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
}
function prepareFontFamily(fontFamily) {
    return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */ function prepareFontStyle(fontStyle) {
    if (!fontStyle) return "";
    var targetFontStyle = fontStyle.trim().toLowerCase();
    switch(targetFontStyle){
        case "normal":
        case "italic":
        case "oblique":
        case "inherit":
        case "initial":
        case "unset":
            return targetFontStyle;
        default:
            if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
            return "";
    }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */ function prepareFontWeight(fontWeight) {
    if (!fontWeight) return "";
    var targetFontWeight = fontWeight.trim().toLowerCase();
    switch(targetFontWeight){
        case "normal":
        case "bold":
        case "lighter":
        case "bolder":
        case "inherit":
        case "initial":
        case "unset":
            return targetFontWeight;
        default:
            if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
            return "";
    }
}
var Font = /*#__PURE__*/ function() {
    "use strict";
    function Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        (0, _classCallCheck._)(this, Font);
        var inheritFont = inherit ? typeof inherit === "string" ? Font.parse(inherit) : inherit : {};
        this.fontFamily = fontFamily || inheritFont.fontFamily;
        this.fontSize = fontSize || inheritFont.fontSize;
        this.fontStyle = fontStyle || inheritFont.fontStyle;
        this.fontWeight = fontWeight || inheritFont.fontWeight;
        this.fontVariant = fontVariant || inheritFont.fontVariant;
    }
    (0, _createClass._)(Font, [
        {
            key: "toString",
            value: function toString() {
                return [
                    prepareFontStyle(this.fontStyle),
                    this.fontVariant,
                    prepareFontWeight(this.fontWeight),
                    this.fontSize,
                    prepareFontFamily(this.fontFamily)
                ].join(" ").trim();
            }
        }
    ], [
        {
            key: "parse",
            value: function parse() {
                var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var inherit = arguments.length > 1 ? arguments[1] : undefined;
                var fontStyle = "";
                var fontVariant = "";
                var fontWeight = "";
                var fontSize = "";
                var fontFamily = "";
                var parts = compressSpaces(font).trim().split(" ");
                var set = {
                    fontSize: false,
                    fontStyle: false,
                    fontWeight: false,
                    fontVariant: false
                };
                parts.forEach(function(part) {
                    switch(true){
                        case !set.fontStyle && Font.styles.includes(part):
                            if (part !== "inherit") fontStyle = part;
                            set.fontStyle = true;
                            break;
                        case !set.fontVariant && Font.variants.includes(part):
                            if (part !== "inherit") fontVariant = part;
                            set.fontStyle = true;
                            set.fontVariant = true;
                            break;
                        case !set.fontWeight && Font.weights.includes(part):
                            if (part !== "inherit") fontWeight = part;
                            set.fontStyle = true;
                            set.fontVariant = true;
                            set.fontWeight = true;
                            break;
                        case !set.fontSize:
                            var ref;
                            if (part !== "inherit") ref = (0, _slicedToArray._)(part.split("/"), 1), fontSize = ref[0], ref;
                            set.fontStyle = true;
                            set.fontVariant = true;
                            set.fontWeight = true;
                            set.fontSize = true;
                            break;
                        default:
                            if (part !== "inherit") fontFamily += part;
                    }
                });
                return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
            }
        }
    ]);
    return Font;
}();
Font.styles = "normal|italic|oblique|inherit";
Font.variants = "normal|small-caps|inherit";
Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
var BoundingBox = /*#__PURE__*/ function() {
    "use strict";
    function BoundingBox() {
        (0, _classCallCheck._)(this, BoundingBox);
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    (0, _createClass._)(BoundingBox, [
        {
            key: "x",
            get: function get() {
                return this.x1;
            }
        },
        {
            key: "y",
            get: function get() {
                return this.y1;
            }
        },
        {
            key: "width",
            get: function get() {
                return this.x2 - this.x1;
            }
        },
        {
            key: "height",
            get: function get() {
                return this.y2 - this.y1;
            }
        },
        {
            key: "addPoint",
            value: function addPoint(x, y) {
                if (typeof x !== "undefined") {
                    if (isNaN(this.x1) || isNaN(this.x2)) {
                        this.x1 = x;
                        this.x2 = x;
                    }
                    if (x < this.x1) this.x1 = x;
                    if (x > this.x2) this.x2 = x;
                }
                if (typeof y !== "undefined") {
                    if (isNaN(this.y1) || isNaN(this.y2)) {
                        this.y1 = y;
                        this.y2 = y;
                    }
                    if (y < this.y1) this.y1 = y;
                    if (y > this.y2) this.y2 = y;
                }
            }
        },
        {
            key: "addX",
            value: function addX(x) {
                this.addPoint(x, null);
            }
        },
        {
            key: "addY",
            value: function addY(y) {
                this.addPoint(null, y);
            }
        },
        {
            key: "addBoundingBox",
            value: function addBoundingBox(boundingBox) {
                if (!boundingBox) return;
                var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2;
                this.addPoint(x1, y1);
                this.addPoint(x2, y2);
            }
        },
        {
            key: "sumCubic",
            value: function sumCubic(t, p0, p1, p2, p3) {
                return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
            }
        },
        {
            key: "bezierCurveAdd",
            value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
                var b = 6 * p0 - 12 * p1 + 6 * p2;
                var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
                var c = 3 * p1 - 3 * p0;
                if (a === 0) {
                    if (b === 0) return;
                    var t = -c / b;
                    if (0 < t && t < 1) {
                        if (forX) this.addX(this.sumCubic(t, p0, p1, p2, p3));
                        else this.addY(this.sumCubic(t, p0, p1, p2, p3));
                    }
                    return;
                }
                var b2ac = Math.pow(b, 2) - 4 * c * a;
                if (b2ac < 0) return;
                var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                if (0 < t1 && t1 < 1) {
                    if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
                }
                var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                if (0 < t2 && t2 < 1) {
                    if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3));
                    else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
                }
            } // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
        },
        {
            key: "addBezierCurve",
            value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
                this.addPoint(p0x, p0y);
                this.addPoint(p3x, p3y);
                this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
                this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
            }
        },
        {
            key: "addQuadraticCurve",
            value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
                var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
                var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
                this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
            }
        },
        {
            key: "isPointInBox",
            value: function isPointInBox(x, y) {
                var _this = this, x1 = _this.x1, y1 = _this.y1, x2 = _this.x2, y2 = _this.y2;
                return x1 <= x && x <= x2 && y1 <= y && y <= y2;
            }
        }
    ]);
    return BoundingBox;
}();
var PathParser = /*#__PURE__*/ function(SVGPathData) {
    "use strict";
    (0, _inherits._)(PathParser, SVGPathData);
    var _super = (0, _createSuper._)(PathParser);
    function PathParser(path) {
        (0, _classCallCheck._)(this, PathParser);
        var _this;
        _this = _super.call(this, path // Fix spaces after signs.
        .replace(/([+\-.])\s+/gm, "$1") // Remove invalid part.
        .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""));
        _this.control = null;
        _this.start = null;
        _this.current = null;
        _this.command = null;
        _this.commands = _this.commands;
        _this.i = -1;
        _this.previousCommand = null;
        _this.points = [];
        _this.angles = [];
        return _this;
    }
    (0, _createClass._)(PathParser, [
        {
            key: "reset",
            value: function reset() {
                this.i = -1;
                this.command = null;
                this.previousCommand = null;
                this.start = new Point(0, 0);
                this.control = new Point(0, 0);
                this.current = new Point(0, 0);
                this.points = [];
                this.angles = [];
            }
        },
        {
            key: "isEnd",
            value: function isEnd() {
                var _this = this, i = _this.i, commands = _this.commands;
                return i >= commands.length - 1;
            }
        },
        {
            key: "next",
            value: function next() {
                var command = this.commands[++this.i];
                this.previousCommand = this.command;
                this.command = command;
                return command;
            }
        },
        {
            key: "getPoint",
            value: function getPoint() {
                var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
                var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y";
                var point = new Point(this.command[xProp], this.command[yProp]);
                return this.makeAbsolute(point);
            }
        },
        {
            key: "getAsControlPoint",
            value: function getAsControlPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.control = point;
                return point;
            }
        },
        {
            key: "getAsCurrentPoint",
            value: function getAsCurrentPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.current = point;
                return point;
            }
        },
        {
            key: "getReflectedControlPoint",
            value: function getReflectedControlPoint() {
                var previousCommand = this.previousCommand.type;
                if (previousCommand !== (0, _svgPathdata.SVGPathData).CURVE_TO && previousCommand !== (0, _svgPathdata.SVGPathData).SMOOTH_CURVE_TO && previousCommand !== (0, _svgPathdata.SVGPathData).QUAD_TO && previousCommand !== (0, _svgPathdata.SVGPathData).SMOOTH_QUAD_TO) return this.current;
                 // reflect point
                var _this = this, _this_current = _this.current, cx = _this_current.x, cy = _this_current.y, _this_control = _this.control, ox = _this_control.x, oy = _this_control.y;
                var point = new Point(2 * cx - ox, 2 * cy - oy);
                return point;
            }
        },
        {
            key: "makeAbsolute",
            value: function makeAbsolute(point) {
                if (this.command.relative) {
                    var _this_current = this.current, x = _this_current.x, y = _this_current.y;
                    point.x += x;
                    point.y += y;
                }
                return point;
            }
        },
        {
            key: "addMarker",
            value: function addMarker(point, from, priorTo) {
                var _this = this, points = _this.points, angles = _this.angles; // if the last angle isn't filled in because we didn't have this point yet ...
                if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
                this.addMarkerAngle(point, from ? from.angleTo(point) : null);
            }
        },
        {
            key: "addMarkerAngle",
            value: function addMarkerAngle(point, angle) {
                this.points.push(point);
                this.angles.push(angle);
            }
        },
        {
            key: "getMarkerPoints",
            value: function getMarkerPoints() {
                return this.points;
            }
        },
        {
            key: "getMarkerAngles",
            value: function getMarkerAngles() {
                var angles = this.angles;
                var len = angles.length;
                for(var i = 0; i < len; i++)if (!angles[i]) {
                    for(var j = i + 1; j < len; j++)if (angles[j]) {
                        angles[i] = angles[j];
                        break;
                    }
                }
                return angles;
            }
        }
    ]);
    return PathParser;
}((0, _svgPathdata.SVGPathData));
var RenderedElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(RenderedElement, Element);
    var _super = (0, _createSuper._)(RenderedElement);
    function RenderedElement() {
        (0, _classCallCheck._)(this, RenderedElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.modifiedEmSizeStack = false;
        return _this;
    }
    (0, _createClass._)(RenderedElement, [
        {
            key: "calculateOpacity",
            value: function calculateOpacity() {
                var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
                var element = this;
                while(element){
                    var opacityStyle = element.getStyle("opacity", false, true); // no ancestors on style call
                    if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
                    element = element.parent;
                }
                return opacity;
            }
        },
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                if (!fromMeasure) {
                    // causes stack overflow when measuring text with gradients
                    // fill
                    var fillStyleProp = this.getStyle("fill");
                    var fillOpacityStyleProp = this.getStyle("fill-opacity");
                    var strokeStyleProp = this.getStyle("stroke");
                    var strokeOpacityProp = this.getStyle("stroke-opacity");
                    if (fillStyleProp.isUrlDefinition()) {
                        var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
                        if (fillStyle) ctx.fillStyle = fillStyle;
                    } else if (fillStyleProp.hasValue()) {
                        if (fillStyleProp.getString() === "currentColor") fillStyleProp.setValue(this.getStyle("color").getColor());
                        var _fillStyle = fillStyleProp.getColor();
                        if (_fillStyle !== "inherit") ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
                    }
                    if (fillOpacityStyleProp.hasValue()) {
                        var _fillStyle2 = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
                        ctx.fillStyle = _fillStyle2;
                    } // stroke
                    if (strokeStyleProp.isUrlDefinition()) {
                        var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
                        if (strokeStyle) ctx.strokeStyle = strokeStyle;
                    } else if (strokeStyleProp.hasValue()) {
                        if (strokeStyleProp.getString() === "currentColor") strokeStyleProp.setValue(this.getStyle("color").getColor());
                        var _strokeStyle = strokeStyleProp.getString();
                        if (_strokeStyle !== "inherit") ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
                    }
                    if (strokeOpacityProp.hasValue()) {
                        var _strokeStyle2 = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
                        ctx.strokeStyle = _strokeStyle2;
                    }
                    var strokeWidthStyleProp = this.getStyle("stroke-width");
                    if (strokeWidthStyleProp.hasValue()) {
                        var newLineWidth = strokeWidthStyleProp.getPixels();
                        ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
                         : newLineWidth;
                    }
                    var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
                    var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
                    var strokeMiterlimitProp = this.getStyle("stroke-miterlimit"); // NEED TEST
                    // const pointOrderStyleProp = this.getStyle('paint-order');
                    var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
                    var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
                    if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
                    if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
                    if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
                     // NEED TEST
                    // if (pointOrderStyleProp.hasValue()) {
                    // 	// ?
                    // 	ctx.paintOrder = pointOrderStyleProp.getValue();
                    // }
                    if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
                        var gaps = toNumbers(strokeDasharrayStyleProp.getString());
                        if (typeof ctx.setLineDash !== "undefined") ctx.setLineDash(gaps);
                        else if (typeof ctx.webkitLineDash !== "undefined") // @ts-expect-error Handle browser prefix.
                        ctx.webkitLineDash = gaps;
                        else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) // @ts-expect-error Handle browser prefix.
                        ctx.mozDash = gaps;
                        var offset = strokeDashoffsetProp.getPixels();
                        if (typeof ctx.lineDashOffset !== "undefined") ctx.lineDashOffset = offset;
                        else if (typeof ctx.webkitLineDashOffset !== "undefined") // @ts-expect-error Handle browser prefix.
                        ctx.webkitLineDashOffset = offset;
                        else if (typeof ctx.mozDashOffset !== "undefined") // @ts-expect-error Handle browser prefix.
                        ctx.mozDashOffset = offset;
                    }
                } // font
                this.modifiedEmSizeStack = false;
                if (typeof ctx.font !== "undefined") {
                    var fontStyleProp = this.getStyle("font");
                    var fontStyleStyleProp = this.getStyle("font-style");
                    var fontVariantStyleProp = this.getStyle("font-variant");
                    var fontWeightStyleProp = this.getStyle("font-weight");
                    var fontSizeStyleProp = this.getStyle("font-size");
                    var fontFamilyStyleProp = this.getStyle("font-family");
                    var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
                    fontStyleStyleProp.setValue(font.fontStyle);
                    fontVariantStyleProp.setValue(font.fontVariant);
                    fontWeightStyleProp.setValue(font.fontWeight);
                    fontSizeStyleProp.setValue(font.fontSize);
                    fontFamilyStyleProp.setValue(font.fontFamily);
                    ctx.font = font.toString();
                    if (fontSizeStyleProp.isPixels()) {
                        this.document.emSize = fontSizeStyleProp.getPixels();
                        this.modifiedEmSizeStack = true;
                    }
                }
                if (!fromMeasure) {
                    // effects
                    this.applyEffects(ctx); // opacity
                    ctx.globalAlpha = this.calculateOpacity();
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                (0, _get._)((0, _getPrototypeOf._)(RenderedElement.prototype), "clearContext", this).call(this, ctx);
                if (this.modifiedEmSizeStack) this.document.popEmSize();
            }
        }
    ]);
    return RenderedElement;
}((0, _wrapNativeSuper._)(Element));
var PathElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(PathElement, RenderedElement);
    var _super = (0, _createSuper._)(PathElement);
    function PathElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, PathElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "path";
        _this.pathParser = null;
        _this.pathParser = new PathParser(_this.getAttribute("d").getString());
        return _this;
    }
    (0, _createClass._)(PathElement, [
        {
            key: "path",
            value: function path(ctx) {
                var pathParser = this.pathParser;
                var boundingBox = new BoundingBox();
                pathParser.reset();
                if (ctx) ctx.beginPath();
                while(!pathParser.isEnd())switch(pathParser.next().type){
                    case PathParser.MOVE_TO:
                        this.pathM(ctx, boundingBox);
                        break;
                    case PathParser.LINE_TO:
                        this.pathL(ctx, boundingBox);
                        break;
                    case PathParser.HORIZ_LINE_TO:
                        this.pathH(ctx, boundingBox);
                        break;
                    case PathParser.VERT_LINE_TO:
                        this.pathV(ctx, boundingBox);
                        break;
                    case PathParser.CURVE_TO:
                        this.pathC(ctx, boundingBox);
                        break;
                    case PathParser.SMOOTH_CURVE_TO:
                        this.pathS(ctx, boundingBox);
                        break;
                    case PathParser.QUAD_TO:
                        this.pathQ(ctx, boundingBox);
                        break;
                    case PathParser.SMOOTH_QUAD_TO:
                        this.pathT(ctx, boundingBox);
                        break;
                    case PathParser.ARC:
                        this.pathA(ctx, boundingBox);
                        break;
                    case PathParser.CLOSE_PATH:
                        this.pathZ(ctx, boundingBox);
                        break;
                }
                return boundingBox;
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(_) {
                return this.path();
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var pathParser = this.pathParser;
                var points = pathParser.getMarkerPoints();
                var angles = pathParser.getMarkerAngles();
                var markers = points.map(function(point, i) {
                    return [
                        point,
                        angles[i]
                    ];
                });
                return markers;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.path(ctx);
                this.document.screen.mouse.checkPath(this, ctx);
                var fillRuleStyleProp = this.getStyle("fill-rule");
                if (ctx.fillStyle !== "") {
                    if (fillRuleStyleProp.getString("inherit") !== "inherit") ctx.fill(fillRuleStyleProp.getString());
                    else ctx.fill();
                }
                if (ctx.strokeStyle !== "") {
                    if (this.getAttribute("vector-effect").getString() === "non-scaling-stroke") {
                        ctx.save();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.stroke();
                        ctx.restore();
                    } else ctx.stroke();
                }
                var markers = this.getMarkers();
                if (markers) {
                    var markersLastIndex = markers.length - 1;
                    var markerStartStyleProp = this.getStyle("marker-start");
                    var markerMidStyleProp = this.getStyle("marker-mid");
                    var markerEndStyleProp = this.getStyle("marker-end");
                    if (markerStartStyleProp.isUrlDefinition()) {
                        var marker = markerStartStyleProp.getDefinition();
                        var _markers_ = (0, _slicedToArray._)(markers[0], 2), point = _markers_[0], angle = _markers_[1];
                        marker.render(ctx, point, angle);
                    }
                    if (markerMidStyleProp.isUrlDefinition()) {
                        var _marker = markerMidStyleProp.getDefinition();
                        for(var i = 1; i < markersLastIndex; i++){
                            var _markers_i = (0, _slicedToArray._)(markers[i], 2), _point = _markers_i[0], _angle = _markers_i[1];
                            _marker.render(ctx, _point, _angle);
                        }
                    }
                    if (markerEndStyleProp.isUrlDefinition()) {
                        var _marker2 = markerEndStyleProp.getDefinition();
                        var _markers_markersLastIndex = (0, _slicedToArray._)(markers[markersLastIndex], 2), _point2 = _markers_markersLastIndex[0], _angle2 = _markers_markersLastIndex[1];
                        _marker2.render(ctx, _point2, _angle2);
                    }
                }
            }
        },
        {
            key: "pathM",
            value: function pathM(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var point = PathElement.pathM(pathParser).point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.moveTo(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathL = PathElement.pathL(pathParser), current = _PathElement_pathL.current, point = _PathElement_pathL.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathH",
            value: function pathH(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathH = PathElement.pathH(pathParser), current = _PathElement_pathH.current, point = _PathElement_pathH.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathV",
            value: function pathV(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathV = PathElement.pathV(pathParser), current = _PathElement_pathV.current, point = _PathElement_pathV.point;
                var x = point.x, y = point.y;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
        },
        {
            key: "pathC",
            value: function pathC(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathC = PathElement.pathC(pathParser), current = _PathElement_pathC.current, point = _PathElement_pathC.point, controlPoint = _PathElement_pathC.controlPoint, currentPoint = _PathElement_pathC.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathS = PathElement.pathS(pathParser), current = _PathElement_pathS.current, point = _PathElement_pathS.point, controlPoint = _PathElement_pathS.controlPoint, currentPoint = _PathElement_pathS.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathQ",
            value: function pathQ(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathQ = PathElement.pathQ(pathParser), current = _PathElement_pathQ.current, controlPoint = _PathElement_pathQ.controlPoint, currentPoint = _PathElement_pathQ.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathT = PathElement.pathT(pathParser), current = _PathElement_pathT.current, controlPoint = _PathElement_pathT.controlPoint, currentPoint = _PathElement_pathT.currentPoint;
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathA",
            value: function pathA(ctx, boundingBox) {
                var pathParser = this.pathParser;
                var _PathElement_pathA = PathElement.pathA(pathParser), currentPoint = _PathElement_pathA.currentPoint, rX = _PathElement_pathA.rX, rY = _PathElement_pathA.rY, sweepFlag = _PathElement_pathA.sweepFlag, xAxisRotation = _PathElement_pathA.xAxisRotation, centp = _PathElement_pathA.centp, a1 = _PathElement_pathA.a1, ad = _PathElement_pathA.ad; // for markers
                var dir = 1 - sweepFlag ? 1.0 : -1;
                var ah = a1 + dir * (ad / 2.0);
                var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
                pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
                boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better
                if (ctx && !isNaN(a1) && !isNaN(ad)) {
                    var r = rX > rY ? rX : rY;
                    var sx = rX > rY ? 1 : rX / rY;
                    var sy = rX > rY ? rY / rX : 1;
                    ctx.translate(centp.x, centp.y);
                    ctx.rotate(xAxisRotation);
                    ctx.scale(sx, sy);
                    ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
                    ctx.scale(1 / sx, 1 / sy);
                    ctx.rotate(-xAxisRotation);
                    ctx.translate(-centp.x, -centp.y);
                }
            }
        },
        {
            key: "pathZ",
            value: function pathZ(ctx, boundingBox) {
                PathElement.pathZ(this.pathParser);
                if (ctx) // only close path if it is not a straight line
                {
                    if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
                }
            }
        }
    ], [
        {
            key: "pathM",
            value: function pathM(pathParser) {
                var point = pathParser.getAsCurrentPoint();
                pathParser.start = pathParser.current;
                return {
                    point: point
                };
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
                pathParser.current = point;
                return {
                    current: current,
                    point: point
                };
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getPoint("x1", "y1");
                var controlPoint = pathParser.getAsControlPoint("x2", "y2");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser) {
                var current = pathParser.current;
                var point = pathParser.getReflectedControlPoint();
                var controlPoint = pathParser.getAsControlPoint("x2", "y2");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    point: point,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getAsControlPoint("x1", "y1");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser) {
                var current = pathParser.current;
                var controlPoint = pathParser.getReflectedControlPoint();
                pathParser.control = controlPoint;
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current: current,
                    controlPoint: controlPoint,
                    currentPoint: currentPoint
                };
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var current = pathParser.current, command = pathParser.command;
                var rX = command.rX, rY = command.rY, xRot = command.xRot, lArcFlag = command.lArcFlag, sweepFlag = command.sweepFlag;
                var xAxisRotation = xRot * (Math.PI / 180.0);
                var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                // x1', y1'
                var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii
                var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
                if (l > 1) {
                    rX *= Math.sqrt(l);
                    rY *= Math.sqrt(l);
                } // cx', cy'
                var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
                if (isNaN(s)) s = 0;
                var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy
                var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle
                var a1 = vectorsAngle([
                    1,
                    0
                ], [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ]); // θ1
                // angle delta
                var u = [
                    (currp.x - cpp.x) / rX,
                    (currp.y - cpp.y) / rY
                ];
                var v = [
                    (-currp.x - cpp.x) / rX,
                    (-currp.y - cpp.y) / rY
                ];
                var ad = vectorsAngle(u, v); // Δθ
                if (vectorsRatio(u, v) <= -1) ad = Math.PI;
                if (vectorsRatio(u, v) >= 1) ad = 0;
                return {
                    currentPoint: currentPoint,
                    rX: rX,
                    rY: rY,
                    sweepFlag: sweepFlag,
                    xAxisRotation: xAxisRotation,
                    centp: centp,
                    a1: a1,
                    ad: ad
                };
            }
        },
        {
            key: "pathZ",
            value: function pathZ(pathParser) {
                pathParser.current = pathParser.start;
            }
        }
    ]);
    return PathElement;
}(RenderedElement);
var GlyphElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(GlyphElement, PathElement);
    var _super = (0, _createSuper._)(GlyphElement);
    function GlyphElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, GlyphElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "glyph";
        _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
        _this.unicode = _this.getAttribute("unicode").getString();
        _this.arabicForm = _this.getAttribute("arabic-form").getString();
        return _this;
    }
    return GlyphElement;
}(PathElement);
var TextElement = /*#__PURE__*/ function _target(RenderedElement) {
    "use strict";
    (0, _inherits._)(TextElement, RenderedElement);
    var _super = (0, _createSuper._)(TextElement);
    function TextElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, TextElement);
        var _this;
        _this = _super.call(this, document1, node, (this instanceof TextElement ? this.constructor : void 0) === TextElement ? true : captureTextNodes);
        _this.type = "text";
        _this.x = 0;
        _this.y = 0;
        _this.measureCache = -1;
        return _this;
    }
    (0, _createClass._)(TextElement, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                (0, _get._)((0, _getPrototypeOf._)(TextElement.prototype), "setContext", this).call(this, ctx, fromMeasure);
                var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
                if (textBaseline) ctx.textBaseline = textBaseline;
            }
        },
        {
            key: "initializeCoordinates",
            value: function initializeCoordinates() {
                this.x = 0;
                this.y = 0;
                this.leafTexts = [];
                this.textChunkStart = 0;
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var _this = this;
                if (this.type !== "text") return this.getTElementBoundingBox(ctx);
                 // first, calculate child positions
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx);
                var boundingBox = null; // then calculate bounding box
                this.children.forEach(function(_, i) {
                    var childBoundingBox = _this.getChildBoundingBox(ctx, _this, _this, i);
                    if (!boundingBox) boundingBox = childBoundingBox;
                    else boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "getFontSize",
            value: function getFontSize() {
                var _this = this, document1 = _this.document, parent = _this.parent;
                var inheritFontSize = Font.parse(document1.ctx.font).fontSize;
                var fontSize = parent.getStyle("font-size").getNumber(inheritFontSize);
                return fontSize;
            }
        },
        {
            key: "getTElementBoundingBox",
            value: function getTElementBoundingBox(ctx) {
                var fontSize = this.getFontSize();
                return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
            }
        },
        {
            key: "getGlyph",
            value: function getGlyph(font, text, i) {
                var char = text[i];
                var glyph = null;
                if (font.isArabic) {
                    var len = text.length;
                    var prevChar = text[i - 1];
                    var nextChar = text[i + 1];
                    var arabicForm = "isolated";
                    if ((i === 0 || prevChar === " ") && i < len - 1 && nextChar !== " ") arabicForm = "terminal";
                    if (i > 0 && prevChar !== " " && i < len - 1 && nextChar !== " ") arabicForm = "medial";
                    if (i > 0 && prevChar !== " " && (i === len - 1 || nextChar === " ")) arabicForm = "initial";
                    if (typeof font.glyphs[char] !== "undefined") {
                        // NEED TEST
                        var maybeGlyph = font.glyphs[char];
                        glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
                    }
                } else glyph = font.glyphs[char];
                if (!glyph) glyph = font.missingGlyph;
                return glyph;
            }
        },
        {
            key: "getText",
            value: function getText() {
                return "";
            }
        },
        {
            key: "getTextFromNode",
            value: function getTextFromNode(node) {
                var textNode = node || this.node;
                var childNodes = Array.from(textNode.parentNode.childNodes);
                var index = childNodes.indexOf(textNode);
                var lastIndex = childNodes.length - 1;
                var text = compressSpaces(// || textNode.text
                textNode.textContent || "");
                if (index === 0) text = trimLeft(text);
                if (index === lastIndex) text = trimRight(text);
                return text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _this = this;
                if (this.type !== "text") {
                    this.renderTElementChildren(ctx);
                    return;
                } // first, calculate child positions
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx); // then render
                this.children.forEach(function(_, i) {
                    _this.renderChild(ctx, _this, _this, i);
                });
                var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.
                if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
            }
        },
        {
            key: "renderTElementChildren",
            value: function renderTElementChildren(ctx) {
                var _this = this, document1 = _this.document, parent = _this.parent;
                var renderText = this.getText();
                var customFont = parent.getStyle("font-family").getDefinition();
                if (customFont) {
                    var unitsPerEm = customFont.fontFace.unitsPerEm;
                    var ctxFont = Font.parse(document1.ctx.font);
                    var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
                    var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
                    var scale = fontSize / unitsPerEm;
                    var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
                    var dx = toNumbers(parent.getAttribute("dx").getString());
                    var len = text.length;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        ctx.translate(this.x, this.y);
                        ctx.scale(scale, -scale);
                        var lw = ctx.lineWidth;
                        ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
                        if (fontStyle === "italic") ctx.transform(1, 0, .4, 1, 0, 0);
                        glyph.render(ctx);
                        if (fontStyle === "italic") ctx.transform(1, 0, -0.4, 1, 0, 0);
                        ctx.lineWidth = lw;
                        ctx.scale(1 / scale, -1 / scale);
                        ctx.translate(-this.x, -this.y);
                        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
                        if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) this.x += dx[i];
                    }
                    return;
                }
                var _this1 = this, x = _this1.x, y = _this1.y; // NEED TEST
                // if (ctx.paintOrder === 'stroke') {
                // 	if (ctx.strokeStyle) {
                // 		ctx.strokeText(renderText, x, y);
                // 	}
                // 	if (ctx.fillStyle) {
                // 		ctx.fillText(renderText, x, y);
                // 	}
                // } else {
                if (ctx.fillStyle) ctx.fillText(renderText, x, y);
                if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
                 // }
            }
        },
        {
            key: "applyAnchoring",
            value: function applyAnchoring() {
                if (this.textChunkStart >= this.leafTexts.length) return;
                 // This is basically the "Apply anchoring" part of https://www.w3.org/TR/SVG2/text.html#TextLayoutAlgorithm.
                // The difference is that we apply the anchoring as soon as a chunk is finished. This saves some extra looping.
                // Vertical text is not supported.
                var firstElement = this.leafTexts[this.textChunkStart];
                var textAnchor = firstElement.getStyle("text-anchor").getString("start");
                var isRTL = false; // we treat RTL like LTR
                var shift = 0;
                if (textAnchor === "start" && !isRTL || textAnchor === "end" && isRTL) shift = firstElement.x - this.minX;
                else if (textAnchor === "end" && !isRTL || textAnchor === "start" && isRTL) shift = firstElement.x - this.maxX;
                else shift = firstElement.x - (this.minX + this.maxX) / 2;
                for(var i = this.textChunkStart; i < this.leafTexts.length; i++)this.leafTexts[i].x += shift;
                 // start new chunk
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
                this.textChunkStart = this.leafTexts.length;
            }
        },
        {
            key: "adjustChildCoordinatesRecursive",
            value: function adjustChildCoordinatesRecursive(ctx) {
                var _this = this;
                this.children.forEach(function(_, i) {
                    _this.adjustChildCoordinatesRecursiveCore(ctx, _this, _this, i);
                });
                this.applyAnchoring();
            }
        },
        {
            key: "adjustChildCoordinatesRecursiveCore",
            value: function adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (child.children.length > 0) child.children.forEach(function(_, i) {
                    textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i);
                });
                else // only leafs are relevant
                this.adjustChildCoordinates(ctx, textParent, parent, i);
            }
        },
        {
            key: "adjustChildCoordinates",
            value: function adjustChildCoordinates(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (typeof child.measureText !== "function") return child;
                ctx.save();
                child.setContext(ctx, true);
                var xAttr = child.getAttribute("x");
                var yAttr = child.getAttribute("y");
                var dxAttr = child.getAttribute("dx");
                var dyAttr = child.getAttribute("dy");
                var customFont = child.getStyle("font-family").getDefinition();
                var isRTL = Boolean(customFont) && customFont.isRTL;
                if (i === 0) {
                    // First children inherit attributes from parent(s). Positional attributes
                    // are only inherited from a parent to it's first child.
                    if (!xAttr.hasValue()) xAttr.setValue(child.getInheritedAttribute("x"));
                    if (!yAttr.hasValue()) yAttr.setValue(child.getInheritedAttribute("y"));
                    if (!dxAttr.hasValue()) dxAttr.setValue(child.getInheritedAttribute("dx"));
                    if (!dyAttr.hasValue()) dyAttr.setValue(child.getInheritedAttribute("dy"));
                }
                var width = child.measureText(ctx);
                if (isRTL) textParent.x -= width;
                if (xAttr.hasValue()) {
                    // an "x" attribute marks the start of a new chunk
                    textParent.applyAnchoring();
                    child.x = xAttr.getPixels("x");
                    if (dxAttr.hasValue()) child.x += dxAttr.getPixels("x");
                } else {
                    if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels("x");
                    child.x = textParent.x;
                }
                textParent.x = child.x;
                if (!isRTL) textParent.x += width;
                if (yAttr.hasValue()) {
                    child.y = yAttr.getPixels("y");
                    if (dyAttr.hasValue()) child.y += dyAttr.getPixels("y");
                } else {
                    if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels("y");
                    child.y = textParent.y;
                }
                textParent.y = child.y; // update the current chunk and it's bounds
                textParent.leafTexts.push(child);
                textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
                textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
                child.clearContext(ctx);
                ctx.restore();
                return child;
            }
        },
        {
            key: "getChildBoundingBox",
            value: function getChildBoundingBox(ctx, textParent, parent, i) {
                var child = parent.children[i]; // not a text node?
                if (typeof child.getBoundingBox !== "function") return null;
                var boundingBox = child.getBoundingBox(ctx);
                if (!boundingBox) return null;
                child.children.forEach(function(_, i) {
                    var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
                    boundingBox.addBoundingBox(childBoundingBox);
                });
                return boundingBox;
            }
        },
        {
            key: "renderChild",
            value: function renderChild(ctx, textParent, parent, i) {
                var child = parent.children[i];
                child.render(ctx);
                child.children.forEach(function(_, i) {
                    textParent.renderChild(ctx, textParent, child, i);
                });
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx) {
                var measureCache = this.measureCache;
                if (~measureCache) return measureCache;
                var renderText = this.getText();
                var measure = this.measureTargetText(ctx, renderText);
                this.measureCache = measure;
                return measure;
            }
        },
        {
            key: "measureTargetText",
            value: function measureTargetText(ctx, targetText) {
                if (!targetText.length) return 0;
                var parent = this.parent;
                var customFont = parent.getStyle("font-family").getDefinition();
                if (customFont) {
                    var fontSize = this.getFontSize();
                    var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
                    var dx = toNumbers(parent.getAttribute("dx").getString());
                    var len = text.length;
                    var _measure = 0;
                    for(var i = 0; i < len; i++){
                        var glyph = this.getGlyph(customFont, text, i);
                        _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) _measure += dx[i];
                    }
                    return _measure;
                }
                if (!ctx.measureText) return targetText.length * 10;
                ctx.save();
                this.setContext(ctx, true);
                var _ctx_measureText = ctx.measureText(targetText), measure = _ctx_measureText.width;
                this.clearContext(ctx);
                ctx.restore();
                return measure;
            }
        },
        {
            /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */ key: "getInheritedAttribute",
            value: function getInheritedAttribute(name) {
                // eslint-disable-next-line @typescript-eslint/no-this-alias,consistent-this
                var current = this;
                while(current instanceof TextElement && current.isFirstChild()){
                    var parentAttr = current.parent.getAttribute(name);
                    if (parentAttr.hasValue(true)) return parentAttr.getValue("0");
                    current = current.parent;
                }
                return null;
            }
        }
    ]);
    return TextElement;
}(RenderedElement);
var TSpanElement = /*#__PURE__*/ function _target(TextElement) {
    "use strict";
    (0, _inherits._)(TSpanElement, TextElement);
    var _super = (0, _createSuper._)(TSpanElement);
    function TSpanElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, TSpanElement);
        var _this;
        _this = _super.call(this, document1, node, (this instanceof TSpanElement ? this.constructor : void 0) === TSpanElement ? true : captureTextNodes);
        _this.type = "tspan"; // if this node has children, then they own the text
        _this.text = _this.children.length > 0 ? "" : _this.getTextFromNode();
        return _this;
    }
    (0, _createClass._)(TSpanElement, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        }
    ]);
    return TSpanElement;
}(TextElement);
var TextNode = /*#__PURE__*/ function(TSpanElement) {
    "use strict";
    (0, _inherits._)(TextNode, TSpanElement);
    var _super = (0, _createSuper._)(TextNode);
    function TextNode() {
        (0, _classCallCheck._)(this, TextNode);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "textNode";
        return _this;
    }
    return TextNode;
}(TSpanElement);
var SVGElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(SVGElement, RenderedElement);
    var _super = (0, _createSuper._)(SVGElement);
    function SVGElement() {
        (0, _classCallCheck._)(this, SVGElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "svg";
        _this.root = false;
        return _this;
    }
    (0, _createClass._)(SVGElement, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                var _this$node$parentNode;
                var document1 = this.document;
                var screen = document1.screen, _$window = document1.window;
                var canvas = ctx.canvas;
                screen.setDefaults(ctx);
                if (canvas.style && typeof ctx.font !== "undefined" && _$window && typeof _$window.getComputedStyle !== "undefined") {
                    ctx.font = _$window.getComputedStyle(canvas).getPropertyValue("font");
                    var fontSizeProp = new Property(document1, "fontSize", Font.parse(ctx.font).fontSize);
                    if (fontSizeProp.hasValue()) {
                        document1.rootEmSize = fontSizeProp.getPixels("y");
                        document1.emSize = document1.rootEmSize;
                    }
                } // create new view port
                if (!this.getAttribute("x").hasValue()) this.getAttribute("x", true).setValue(0);
                if (!this.getAttribute("y").hasValue()) this.getAttribute("y", true).setValue(0);
                var _screen_viewPort = screen.viewPort, width = _screen_viewPort.width, height = _screen_viewPort.height;
                if (!this.getStyle("width").hasValue()) this.getStyle("width", true).setValue("100%");
                if (!this.getStyle("height").hasValue()) this.getStyle("height", true).setValue("100%");
                if (!this.getStyle("color").hasValue()) this.getStyle("color", true).setValue("black");
                var refXAttr = this.getAttribute("refX");
                var refYAttr = this.getAttribute("refY");
                var viewBoxAttr = this.getAttribute("viewBox");
                var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
                var clip = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible";
                var minX = 0;
                var minY = 0;
                var clipX = 0;
                var clipY = 0;
                if (viewBox) {
                    minX = viewBox[0];
                    minY = viewBox[1];
                }
                if (!this.root) {
                    width = this.getStyle("width").getPixels("x");
                    height = this.getStyle("height").getPixels("y");
                    if (this.type === "marker") {
                        clipX = minX;
                        clipY = minY;
                        minX = 0;
                        minY = 0;
                    }
                }
                screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
                // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin
                if (this.node // is not temporary SVGElement
                 && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue()) this.getStyle("transform-origin", true, true).setValue("50% 50%");
                (0, _get._)((0, _getPrototypeOf._)(SVGElement.prototype), "setContext", this).call(this, ctx);
                ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
                if (viewBox) {
                    width = viewBox[2];
                    height = viewBox[3];
                }
                document1.setViewBox({
                    ctx: ctx,
                    aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                    width: screen.viewPort.width,
                    desiredWidth: width,
                    height: screen.viewPort.height,
                    desiredHeight: height,
                    minX: minX,
                    minY: minY,
                    refX: refXAttr.getValue(),
                    refY: refYAttr.getValue(),
                    clip: clip,
                    clipX: clipX,
                    clipY: clipY
                });
                if (viewBox) {
                    screen.viewPort.removeCurrent();
                    screen.viewPort.setCurrent(width, height);
                }
            }
        },
        {
            key: "clearContext",
            value: function clearContext(ctx) {
                (0, _get._)((0, _getPrototypeOf._)(SVGElement.prototype), "clearContext", this).call(this, ctx);
                this.document.screen.viewPort.removeCurrent();
            }
        },
        {
            /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */ key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var widthAttr = this.getAttribute("width", true);
                var heightAttr = this.getAttribute("height", true);
                var viewBoxAttr = this.getAttribute("viewBox");
                var styleAttr = this.getAttribute("style");
                var originWidth = widthAttr.getNumber(0);
                var originHeight = heightAttr.getNumber(0);
                if (preserveAspectRatio) {
                    if (typeof preserveAspectRatio === "string") this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio);
                    else {
                        var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
                        if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
                    }
                }
                widthAttr.setValue(width);
                heightAttr.setValue(height);
                if (!viewBoxAttr.hasValue()) viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
                if (styleAttr.hasValue()) {
                    var widthStyle = this.getStyle("width");
                    var heightStyle = this.getStyle("height");
                    if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
                    if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
                }
            }
        }
    ]);
    return SVGElement;
}(RenderedElement);
var RectElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(RectElement, PathElement);
    var _super = (0, _createSuper._)(RectElement);
    function RectElement() {
        (0, _classCallCheck._)(this, RectElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "rect";
        return _this;
    }
    (0, _createClass._)(RectElement, [
        {
            key: "path",
            value: function path(ctx) {
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width", false, true).getPixels("x");
                var height = this.getStyle("height", false, true).getPixels("y");
                var rxAttr = this.getAttribute("rx");
                var ryAttr = this.getAttribute("ry");
                var rx = rxAttr.getPixels("x");
                var ry = ryAttr.getPixels("y");
                if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
                if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
                rx = Math.min(rx, width / 2.0);
                ry = Math.min(ry, height / 2.0);
                if (ctx) {
                    var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                    ctx.beginPath(); // always start the path so we don't fill prior paths
                    if (height > 0 && width > 0) {
                        ctx.moveTo(x + rx, y);
                        ctx.lineTo(x + width - rx, y);
                        ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                        ctx.lineTo(x + width, y + height - ry);
                        ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                        ctx.lineTo(x + rx, y + height);
                        ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                        ctx.lineTo(x, y + ry);
                        ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                        ctx.closePath();
                    }
                }
                return new BoundingBox(x, y, x + width, y + height);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return RectElement;
}(PathElement);
var CircleElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(CircleElement, PathElement);
    var _super = (0, _createSuper._)(CircleElement);
    function CircleElement() {
        (0, _classCallCheck._)(this, CircleElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "circle";
        return _this;
    }
    (0, _createClass._)(CircleElement, [
        {
            key: "path",
            value: function path(ctx) {
                var cx = this.getAttribute("cx").getPixels("x");
                var cy = this.getAttribute("cy").getPixels("y");
                var r = this.getAttribute("r").getPixels();
                if (ctx && r > 0) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
                    ctx.closePath();
                }
                return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return CircleElement;
}(PathElement);
var EllipseElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(EllipseElement, PathElement);
    var _super = (0, _createSuper._)(EllipseElement);
    function EllipseElement() {
        (0, _classCallCheck._)(this, EllipseElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "ellipse";
        return _this;
    }
    (0, _createClass._)(EllipseElement, [
        {
            key: "path",
            value: function path(ctx) {
                var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                var rx = this.getAttribute("rx").getPixels("x");
                var ry = this.getAttribute("ry").getPixels("y");
                var cx = this.getAttribute("cx").getPixels("x");
                var cy = this.getAttribute("cy").getPixels("y");
                if (ctx && rx > 0 && ry > 0) {
                    ctx.beginPath();
                    ctx.moveTo(cx + rx, cy);
                    ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
                    ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
                    ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
                    ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
                    ctx.closePath();
                }
                return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                return null;
            }
        }
    ]);
    return EllipseElement;
}(PathElement);
var LineElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(LineElement, PathElement);
    var _super = (0, _createSuper._)(LineElement);
    function LineElement() {
        (0, _classCallCheck._)(this, LineElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "line";
        return _this;
    }
    (0, _createClass._)(LineElement, [
        {
            key: "getPoints",
            value: function getPoints() {
                return [
                    new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")),
                    new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))
                ];
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var _this_getPoints = (0, _slicedToArray._)(this.getPoints(), 2), _this_getPoints_ = _this_getPoints[0], x0 = _this_getPoints_.x, y0 = _this_getPoints_.y, _this_getPoints_1 = _this_getPoints[1], x1 = _this_getPoints_1.x, y1 = _this_getPoints_1.y;
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(x1, y1);
                }
                return new BoundingBox(x0, y0, x1, y1);
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var _this_getPoints = (0, _slicedToArray._)(this.getPoints(), 2), p0 = _this_getPoints[0], p1 = _this_getPoints[1];
                var a = p0.angleTo(p1);
                return [
                    [
                        p0,
                        a
                    ],
                    [
                        p1,
                        a
                    ]
                ];
            }
        }
    ]);
    return LineElement;
}(PathElement);
var PolylineElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(PolylineElement, PathElement);
    var _super = (0, _createSuper._)(PolylineElement);
    function PolylineElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, PolylineElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "polyline";
        _this.points = [];
        _this.points = Point.parsePath(_this.getAttribute("points").getString());
        return _this;
    }
    (0, _createClass._)(PolylineElement, [
        {
            key: "path",
            value: function path(ctx) {
                var points = this.points;
                var _points = (0, _slicedToArray._)(points, 1), _points_ = _points[0], x0 = _points_.x, y0 = _points_.y;
                var boundingBox = new BoundingBox(x0, y0);
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                }
                points.forEach(function(_ref) {
                    var x = _ref.x, y = _ref.y;
                    boundingBox.addPoint(x, y);
                    if (ctx) ctx.lineTo(x, y);
                });
                return boundingBox;
            }
        },
        {
            key: "getMarkers",
            value: function getMarkers() {
                var points = this.points;
                var lastIndex = points.length - 1;
                var markers = [];
                points.forEach(function(point, i) {
                    if (i === lastIndex) return;
                    markers.push([
                        point,
                        point.angleTo(points[i + 1])
                    ]);
                });
                if (markers.length > 0) markers.push([
                    points[points.length - 1],
                    markers[markers.length - 1][1]
                ]);
                return markers;
            }
        }
    ]);
    return PolylineElement;
}(PathElement);
var PolygonElement = /*#__PURE__*/ function(PolylineElement) {
    "use strict";
    (0, _inherits._)(PolygonElement, PolylineElement);
    var _super = (0, _createSuper._)(PolygonElement);
    function PolygonElement() {
        (0, _classCallCheck._)(this, PolygonElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "polygon";
        return _this;
    }
    (0, _createClass._)(PolygonElement, [
        {
            key: "path",
            value: function path(ctx) {
                var boundingBox = (0, _get._)((0, _getPrototypeOf._)(PolygonElement.prototype), "path", this).call(this, ctx);
                var _this_points = (0, _slicedToArray._)(this.points, 1), _this_points_ = _this_points[0], x = _this_points_.x, y = _this_points_.y;
                if (ctx) {
                    ctx.lineTo(x, y);
                    ctx.closePath();
                }
                return boundingBox;
            }
        }
    ]);
    return PolygonElement;
}(PolylineElement);
var PatternElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(PatternElement, Element);
    var _super = (0, _createSuper._)(PatternElement);
    function PatternElement() {
        (0, _classCallCheck._)(this, PatternElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "pattern";
        return _this;
    }
    (0, _createClass._)(PatternElement, [
        {
            key: "createPattern",
            value: function createPattern(ctx, _, parentOpacityProp) {
                var width = this.getStyle("width").getPixels("x", true);
                var height = this.getStyle("height").getPixels("y", true); // render me using a temporary svg element
                var patternSvg = new SVGElement(this.document, null);
                patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
                patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
                patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
                patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
                patternSvg.children = this.children;
                var patternCanvas = this.document.createCanvas(width, height);
                var patternCtx = patternCanvas.getContext("2d");
                var xAttr = this.getAttribute("x");
                var yAttr = this.getAttribute("y");
                if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
                if (parentOpacityProp.hasValue()) this.styles["fill-opacity"] = parentOpacityProp;
                else Reflect.deleteProperty(this.styles, "fill-opacity");
                 // render 3x3 grid so when we transform there's no white space on edges
                for(var x = -1; x <= 1; x++)for(var y = -1; y <= 1; y++){
                    patternCtx.save();
                    patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
                    patternSvg.attributes.y = new Property(this.document, "y", y * patternCanvas.height);
                    patternSvg.render(patternCtx);
                    patternCtx.restore();
                }
                var pattern = ctx.createPattern(patternCanvas, "repeat");
                return pattern;
            }
        }
    ]);
    return PatternElement;
}((0, _wrapNativeSuper._)(Element));
var MarkerElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(MarkerElement, Element);
    var _super = (0, _createSuper._)(MarkerElement);
    function MarkerElement() {
        (0, _classCallCheck._)(this, MarkerElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "marker";
        return _this;
    }
    (0, _createClass._)(MarkerElement, [
        {
            key: "render",
            value: function render(ctx, point, angle) {
                if (!point) return;
                var x = point.x, y = point.y;
                var orient = this.getAttribute("orient").getString("auto");
                var markerUnits = this.getAttribute("markerUnits").getString("strokeWidth");
                ctx.translate(x, y);
                if (orient === "auto") ctx.rotate(angle);
                if (markerUnits === "strokeWidth") ctx.scale(ctx.lineWidth, ctx.lineWidth);
                ctx.save(); // render me using a temporary svg element
                var markerSvg = new SVGElement(this.document, null);
                markerSvg.type = this.type;
                markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
                markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
                markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
                markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
                markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
                markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
                markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
                markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
                markerSvg.children = this.children;
                markerSvg.render(ctx);
                ctx.restore();
                if (markerUnits === "strokeWidth") ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
                if (orient === "auto") ctx.rotate(-angle);
                ctx.translate(-x, -y);
            }
        }
    ]);
    return MarkerElement;
}((0, _wrapNativeSuper._)(Element));
var DefsElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(DefsElement, Element);
    var _super = (0, _createSuper._)(DefsElement);
    function DefsElement() {
        (0, _classCallCheck._)(this, DefsElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "defs";
        return _this;
    }
    (0, _createClass._)(DefsElement, [
        {
            key: "render",
            value: function render() {}
        }
    ]);
    return DefsElement;
}((0, _wrapNativeSuper._)(Element));
var GElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(GElement, RenderedElement);
    var _super = (0, _createSuper._)(GElement);
    function GElement() {
        (0, _classCallCheck._)(this, GElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "g";
        return _this;
    }
    (0, _createClass._)(GElement, [
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var boundingBox = new BoundingBox();
                this.children.forEach(function(child) {
                    boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                });
                return boundingBox;
            }
        }
    ]);
    return GElement;
}(RenderedElement);
var GradientElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(GradientElement, Element);
    var _super = (0, _createSuper._)(GradientElement);
    function GradientElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, GradientElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.attributesToInherit = [
            "gradientUnits"
        ];
        _this.stops = [];
        var _$_assert_this_initialized = (0, _assertThisInitialized._)(_this), stops = _$_assert_this_initialized.stops, children = _$_assert_this_initialized.children;
        children.forEach(function(child) {
            if (child.type === "stop") stops.push(child);
        });
        return _this;
    }
    (0, _createClass._)(GradientElement, [
        {
            key: "getGradientUnits",
            value: function getGradientUnits() {
                return this.getAttribute("gradientUnits").getString("objectBoundingBox");
            }
        },
        {
            key: "createGradient",
            value: function createGradient(ctx, element, parentOpacityProp) {
                var _this = this;
                // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
                var stopsContainer = this;
                if (this.getHrefAttribute().hasValue()) {
                    stopsContainer = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(stopsContainer);
                }
                var stops = stopsContainer.stops;
                var gradient = this.getGradient(ctx, element);
                if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
                stops.forEach(function(stop) {
                    gradient.addColorStop(stop.offset, _this.addParentOpacity(parentOpacityProp, stop.color));
                });
                if (this.getAttribute("gradientTransform").hasValue()) {
                    // render as transformed pattern on temporary canvas
                    var document1 = this.document;
                    var _document_screen = document1.screen, MAX_VIRTUAL_PIXELS = _document_screen.MAX_VIRTUAL_PIXELS, viewPort = _document_screen.viewPort;
                    var _viewPort_viewPorts = (0, _slicedToArray._)(viewPort.viewPorts, 1), rootView = _viewPort_viewPorts[0];
                    var rect = new RectElement(document1, null);
                    rect.attributes.x = new Property(document1, "x", -MAX_VIRTUAL_PIXELS / 3.0);
                    rect.attributes.y = new Property(document1, "y", -MAX_VIRTUAL_PIXELS / 3.0);
                    rect.attributes.width = new Property(document1, "width", MAX_VIRTUAL_PIXELS);
                    rect.attributes.height = new Property(document1, "height", MAX_VIRTUAL_PIXELS);
                    var group = new GElement(document1, null);
                    group.attributes.transform = new Property(document1, "transform", this.getAttribute("gradientTransform").getValue());
                    group.children = [
                        rect
                    ];
                    var patternSvg = new SVGElement(document1, null);
                    patternSvg.attributes.x = new Property(document1, "x", 0);
                    patternSvg.attributes.y = new Property(document1, "y", 0);
                    patternSvg.attributes.width = new Property(document1, "width", rootView.width);
                    patternSvg.attributes.height = new Property(document1, "height", rootView.height);
                    patternSvg.children = [
                        group
                    ];
                    var patternCanvas = document1.createCanvas(rootView.width, rootView.height);
                    var patternCtx = patternCanvas.getContext("2d");
                    patternCtx.fillStyle = gradient;
                    patternSvg.render(patternCtx);
                    return patternCtx.createPattern(patternCanvas, "no-repeat");
                }
                return gradient;
            }
        },
        {
            key: "inheritStopContainer",
            value: function inheritStopContainer(stopsContainer) {
                var _this = this;
                this.attributesToInherit.forEach(function(attributeToInherit) {
                    if (!_this.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) _this.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
                });
            }
        },
        {
            key: "addParentOpacity",
            value: function addParentOpacity(parentOpacityProp, color) {
                if (parentOpacityProp.hasValue()) {
                    var colorProp = new Property(this.document, "color", color);
                    return colorProp.addOpacity(parentOpacityProp).getColor();
                }
                return color;
            }
        }
    ]);
    return GradientElement;
}((0, _wrapNativeSuper._)(Element));
var LinearGradientElement = /*#__PURE__*/ function(GradientElement) {
    "use strict";
    (0, _inherits._)(LinearGradientElement, GradientElement);
    var _super = (0, _createSuper._)(LinearGradientElement);
    function LinearGradientElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, LinearGradientElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "linearGradient";
        _this.attributesToInherit.push("x1", "y1", "x2", "y2");
        return _this;
    }
    (0, _createClass._)(LinearGradientElement, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
                var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
                    this.getAttribute("x1", true).setValue(0);
                    this.getAttribute("y1", true).setValue(0);
                    this.getAttribute("x2", true).setValue(1);
                    this.getAttribute("y2", true).setValue(0);
                }
                var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
                var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
                var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
                var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
                if (x1 === x2 && y1 === y2) return null;
                return ctx.createLinearGradient(x1, y1, x2, y2);
            }
        }
    ]);
    return LinearGradientElement;
}(GradientElement);
var RadialGradientElement = /*#__PURE__*/ function(GradientElement) {
    "use strict";
    (0, _inherits._)(RadialGradientElement, GradientElement);
    var _super = (0, _createSuper._)(RadialGradientElement);
    function RadialGradientElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, RadialGradientElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "radialGradient";
        _this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
        return _this;
    }
    (0, _createClass._)(RadialGradientElement, [
        {
            key: "getGradient",
            value: function getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
                var boundingBox = element.getBoundingBox(ctx);
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute("cx").hasValue()) this.getAttribute("cx", true).setValue("50%");
                if (!this.getAttribute("cy").hasValue()) this.getAttribute("cy", true).setValue("50%");
                if (!this.getAttribute("r").hasValue()) this.getAttribute("r", true).setValue("50%");
                var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
                var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
                var fx = cx;
                var fy = cy;
                if (this.getAttribute("fx").hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
                if (this.getAttribute("fy").hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
                var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
                var fr = this.getAttribute("fr").getPixels();
                return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
            }
        }
    ]);
    return RadialGradientElement;
}(GradientElement);
var StopElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(StopElement, Element);
    var _super = (0, _createSuper._)(StopElement);
    function StopElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, StopElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "stop";
        var offset = Math.max(0, Math.min(1, _this.getAttribute("offset").getNumber()));
        var stopOpacity = _this.getStyle("stop-opacity");
        var stopColor = _this.getStyle("stop-color", true);
        if (stopColor.getString() === "") stopColor.setValue("#000");
        if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
        _this.offset = offset;
        _this.color = stopColor.getColor();
        return _this;
    }
    return StopElement;
}((0, _wrapNativeSuper._)(Element));
var AnimateElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(AnimateElement, Element);
    var _super = (0, _createSuper._)(AnimateElement);
    function AnimateElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, AnimateElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "animate";
        _this.duration = 0;
        _this.initialValue = null;
        _this.initialUnits = "";
        _this.removed = false;
        _this.frozen = false;
        document1.screen.animations.push((0, _assertThisInitialized._)(_this));
        _this.begin = _this.getAttribute("begin").getMilliseconds();
        _this.maxDuration = _this.begin + _this.getAttribute("dur").getMilliseconds();
        _this.from = _this.getAttribute("from");
        _this.to = _this.getAttribute("to");
        _this.values = new Property(document1, "values", null);
        var valuesAttr = _this.getAttribute("values");
        if (valuesAttr.hasValue()) _this.values.setValue(valuesAttr.getString().split(";"));
        return _this;
    }
    (0, _createClass._)(AnimateElement, [
        {
            key: "getProperty",
            value: function getProperty() {
                var attributeType = this.getAttribute("attributeType").getString();
                var attributeName = this.getAttribute("attributeName").getString();
                if (attributeType === "CSS") return this.parent.getStyle(attributeName, true);
                return this.parent.getAttribute(attributeName, true);
            }
        },
        {
            key: "calcValue",
            value: function calcValue() {
                var initialUnits = this.initialUnits;
                var _this_getProgress = this.getProgress(), progress = _this_getProgress.progress, from = _this_getProgress.from, to = _this_getProgress.to; // tween value linearly
                var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
                if (initialUnits === "%") newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
                return "".concat(newValue).concat(initialUnits);
            }
        },
        {
            key: "update",
            value: function update(delta) {
                var parent = this.parent;
                var prop = this.getProperty(); // set initial value
                if (!this.initialValue) {
                    this.initialValue = prop.getString();
                    this.initialUnits = prop.getUnits();
                } // if we're past the end time
                if (this.duration > this.maxDuration) {
                    var fill = this.getAttribute("fill").getString("remove"); // loop for indefinitely repeating animations
                    if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0;
                    else if (fill === "freeze" && !this.frozen) {
                        this.frozen = true;
                        parent.animationFrozen = true;
                        parent.animationFrozenValue = prop.getString();
                    } else if (fill === "remove" && !this.removed) {
                        this.removed = true;
                        prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                        return true;
                    }
                    return false;
                }
                this.duration += delta; // if we're past the begin time
                var updated = false;
                if (this.begin < this.duration) {
                    var newValue = this.calcValue(); // tween
                    var typeAttr = this.getAttribute("type");
                    if (typeAttr.hasValue()) {
                        // for transform, etc.
                        var type = typeAttr.getString();
                        newValue = "".concat(type, "(").concat(newValue, ")");
                    }
                    prop.setValue(newValue);
                    updated = true;
                }
                return updated;
            }
        },
        {
            key: "getProgress",
            value: function getProgress() {
                var _this = this, document1 = _this.document, values = _this.values;
                var result = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (values.hasValue()) {
                    var p = result.progress * (values.getValue().length - 1);
                    var lb = Math.floor(p);
                    var ub = Math.ceil(p);
                    result.from = new Property(document1, "from", parseFloat(values.getValue()[lb]));
                    result.to = new Property(document1, "to", parseFloat(values.getValue()[ub]));
                    result.progress = (p - lb) / (ub - lb);
                } else {
                    result.from = this.from;
                    result.to = this.to;
                }
                return result;
            }
        }
    ]);
    return AnimateElement;
}((0, _wrapNativeSuper._)(Element));
var AnimateColorElement = /*#__PURE__*/ function(AnimateElement) {
    "use strict";
    (0, _inherits._)(AnimateColorElement, AnimateElement);
    var _super = (0, _createSuper._)(AnimateColorElement);
    function AnimateColorElement() {
        (0, _classCallCheck._)(this, AnimateColorElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "animateColor";
        return _this;
    }
    (0, _createClass._)(AnimateColorElement, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this_getProgress = this.getProgress(), progress = _this_getProgress.progress, from = _this_getProgress.from, to = _this_getProgress.to;
                var colorFrom = new (0, _rgbcolorDefault.default)(from.getColor());
                var colorTo = new (0, _rgbcolorDefault.default)(to.getColor());
                if (colorFrom.ok && colorTo.ok) {
                    // tween color linearly
                    var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
                    var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
                    var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha
                    return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
                }
                return this.getAttribute("from").getColor();
            }
        }
    ]);
    return AnimateColorElement;
}(AnimateElement);
var AnimateTransformElement = /*#__PURE__*/ function(AnimateElement) {
    "use strict";
    (0, _inherits._)(AnimateTransformElement, AnimateElement);
    var _super = (0, _createSuper._)(AnimateTransformElement);
    function AnimateTransformElement() {
        (0, _classCallCheck._)(this, AnimateTransformElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "animateTransform";
        return _this;
    }
    (0, _createClass._)(AnimateTransformElement, [
        {
            key: "calcValue",
            value: function calcValue() {
                var _this_getProgress = this.getProgress(), progress = _this_getProgress.progress, from = _this_getProgress.from, to = _this_getProgress.to; // tween value linearly
                var transformFrom = toNumbers(from.getString());
                var transformTo = toNumbers(to.getString());
                var newValue = transformFrom.map(function(from, i) {
                    var to = transformTo[i];
                    return from + (to - from) * progress;
                }).join(" ");
                return newValue;
            }
        }
    ]);
    return AnimateTransformElement;
}(AnimateElement);
var FontElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FontElement, Element);
    var _super = (0, _createSuper._)(FontElement);
    function FontElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, FontElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "font";
        _this.glyphs = {};
        _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
        var definitions = document1.definitions;
        var children = (0, _assertThisInitialized._)(_this).children;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                switch(child.type){
                    case "font-face":
                        _this.fontFace = child;
                        var fontFamilyStyle = child.getStyle("font-family");
                        if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = (0, _assertThisInitialized._)(_this);
                        break;
                    case "missing-glyph":
                        _this.missingGlyph = child;
                        break;
                    case "glyph":
                        var glyph = child;
                        if (glyph.arabicForm) {
                            _this.isRTL = true;
                            _this.isArabic = true;
                            if (typeof _this.glyphs[glyph.unicode] === "undefined") _this.glyphs[glyph.unicode] = {};
                            _this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                        } else _this.glyphs[glyph.unicode] = glyph;
                        break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return _this;
    }
    (0, _createClass._)(FontElement, [
        {
            key: "render",
            value: function render() {}
        }
    ]);
    return FontElement;
}((0, _wrapNativeSuper._)(Element));
var FontFaceElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FontFaceElement, Element);
    var _super = (0, _createSuper._)(FontFaceElement);
    function FontFaceElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, FontFaceElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "font-face";
        _this.ascent = _this.getAttribute("ascent").getNumber();
        _this.descent = _this.getAttribute("descent").getNumber();
        _this.unitsPerEm = _this.getAttribute("units-per-em").getNumber();
        return _this;
    }
    return FontFaceElement;
}((0, _wrapNativeSuper._)(Element));
var MissingGlyphElement = /*#__PURE__*/ function(PathElement) {
    "use strict";
    (0, _inherits._)(MissingGlyphElement, PathElement);
    var _super = (0, _createSuper._)(MissingGlyphElement);
    function MissingGlyphElement() {
        (0, _classCallCheck._)(this, MissingGlyphElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "missing-glyph";
        _this.horizAdvX = 0;
        return _this;
    }
    return MissingGlyphElement;
}(PathElement);
var TRefElement = /*#__PURE__*/ function(TextElement) {
    "use strict";
    (0, _inherits._)(TRefElement, TextElement);
    var _super = (0, _createSuper._)(TRefElement);
    function TRefElement() {
        (0, _classCallCheck._)(this, TRefElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "tref";
        return _this;
    }
    (0, _createClass._)(TRefElement, [
        {
            key: "getText",
            value: function getText() {
                var element = this.getHrefAttribute().getDefinition();
                if (element) {
                    var firstChild = element.children[0];
                    if (firstChild) return firstChild.getText();
                }
                return "";
            }
        }
    ]);
    return TRefElement;
}(TextElement);
var AElement = /*#__PURE__*/ function(TextElement) {
    "use strict";
    (0, _inherits._)(AElement, TextElement);
    var _super = (0, _createSuper._)(AElement);
    function AElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, AElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "a";
        var childNodes = node.childNodes;
        var firstChild = childNodes[0];
        var hasText = childNodes.length > 0 && Array.from(childNodes).every(function(node) {
            return node.nodeType === 3;
        });
        _this.hasText = hasText;
        _this.text = hasText ? _this.getTextFromNode(firstChild) : "";
        return _this;
    }
    (0, _createClass._)(AElement, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                if (this.hasText) {
                    // render as text element
                    (0, _get._)((0, _getPrototypeOf._)(AElement.prototype), "renderChildren", this).call(this, ctx);
                    var _this = this, document1 = _this.document, x = _this.x, y = _this.y;
                    var mouse = document1.screen.mouse;
                    var fontSize = new Property(document1, "fontSize", Font.parse(document1.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.
                    if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels("y"), x + this.measureText(ctx), y));
                } else if (this.children.length > 0) {
                    // render as temporary group
                    var g = new GElement(this.document, null);
                    g.children = this.children;
                    g.parent = this;
                    g.render(ctx);
                }
            }
        },
        {
            key: "onClick",
            value: function onClick() {
                var _$window = this.document.window;
                if (_$window) _$window.open(this.getHrefAttribute().getString());
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove() {
                var ctx = this.document.ctx;
                ctx.canvas.style.cursor = "pointer";
            }
        }
    ]);
    return AElement;
}(TextElement);
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys$2(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var TextPathElement = /*#__PURE__*/ function(TextElement) {
    "use strict";
    (0, _inherits._)(TextPathElement, TextElement);
    var _super = (0, _createSuper._)(TextPathElement);
    function TextPathElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, TextPathElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "textPath";
        _this.textWidth = 0;
        _this.textHeight = 0;
        _this.pathLength = -1;
        _this.glyphInfo = null;
        _this.letterSpacingCache = [];
        _this.measuresCache = new Map([
            [
                "",
                0
            ]
        ]);
        var pathElement = _this.getHrefAttribute().getDefinition();
        _this.text = _this.getTextFromNode();
        _this.dataArray = _this.parsePathData(pathElement);
        return _this;
    }
    (0, _createClass._)(TextPathElement, [
        {
            key: "getText",
            value: function getText() {
                return this.text;
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var dataArray = this.dataArray;
                if (ctx) ctx.beginPath();
                dataArray.forEach(function(_ref) {
                    var type = _ref.type, points = _ref.points;
                    switch(type){
                        case PathParser.LINE_TO:
                            if (ctx) ctx.lineTo(points[0], points[1]);
                            break;
                        case PathParser.MOVE_TO:
                            if (ctx) ctx.moveTo(points[0], points[1]);
                            break;
                        case PathParser.CURVE_TO:
                            if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                            break;
                        case PathParser.QUAD_TO:
                            if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                            break;
                        case PathParser.ARC:
                            var _points = (0, _slicedToArray._)(points, 8), cx = _points[0], cy = _points[1], rx = _points[2], ry = _points[3], theta = _points[4], dTheta = _points[5], psi = _points[6], fs = _points[7];
                            var r = rx > ry ? rx : ry;
                            var scaleX = rx > ry ? 1 : rx / ry;
                            var scaleY = rx > ry ? ry / rx : 1;
                            if (ctx) {
                                ctx.translate(cx, cy);
                                ctx.rotate(psi);
                                ctx.scale(scaleX, scaleY);
                                ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                                ctx.scale(1 / scaleX, 1 / scaleY);
                                ctx.rotate(-psi);
                                ctx.translate(-cx, -cy);
                            }
                            break;
                        case PathParser.CLOSE_PATH:
                            if (ctx) ctx.closePath();
                            break;
                    }
                });
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                this.setTextData(ctx);
                ctx.save();
                var textDecoration = this.parent.getStyle("text-decoration").getString();
                var fontSize = this.getFontSize();
                var glyphInfo = this.glyphInfo;
                var fill = ctx.fillStyle;
                if (textDecoration === "underline") ctx.beginPath();
                glyphInfo.forEach(function(glyph, i) {
                    var p0 = glyph.p0, p1 = glyph.p1, rotation = glyph.rotation, partialText = glyph.text;
                    ctx.save();
                    ctx.translate(p0.x, p0.y);
                    ctx.rotate(rotation);
                    if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
                    if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
                    ctx.restore();
                    if (textDecoration === "underline") {
                        if (i === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
                        ctx.lineTo(p1.x, p1.y + fontSize / 5);
                    } // // To assist with debugging visually, uncomment following
                //
                // ctx.beginPath();
                // if (i % 2)
                // 	ctx.strokeStyle = 'red';
                // else
                // 	ctx.strokeStyle = 'green';
                // ctx.moveTo(p0.x, p0.y);
                // ctx.lineTo(p1.x, p1.y);
                // ctx.stroke();
                // ctx.closePath();
                });
                if (textDecoration === "underline") {
                    ctx.lineWidth = fontSize / 20;
                    ctx.strokeStyle = fill;
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.restore();
            }
        },
        {
            key: "getLetterSpacingAt",
            value: function getLetterSpacingAt() {
                var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return this.letterSpacingCache[idx] || 0;
            }
        },
        {
            key: "findSegmentToFitChar",
            value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
                var offset = inputOffset;
                var glyphWidth = this.measureText(ctx, c);
                if (c === " " && anchor === "justify" && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
                if (charI > -1) offset += this.getLetterSpacingAt(charI);
                var splineStep = this.textHeight / 20;
                var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
                var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
                var segment = {
                    p0: p0,
                    p1: p1
                };
                var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
                if (dy) {
                    var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
                    var dyY = Math.cos(-rotation) * dy;
                    segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
                        x: p0.x + dyX,
                        y: p0.y + dyY
                    });
                    segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
                        x: p1.x + dyX,
                        y: p1.y + dyY
                    });
                }
                offset += glyphWidth;
                return {
                    offset: offset,
                    segment: segment,
                    rotation: rotation
                };
            }
        },
        {
            key: "measureText",
            value: function measureText(ctx, text) {
                var measuresCache = this.measuresCache;
                var targetText = text || this.getText();
                if (measuresCache.has(targetText)) return measuresCache.get(targetText);
                var measure = this.measureTargetText(ctx, targetText);
                measuresCache.set(targetText, measure);
                return measure;
            } // This method supposes what all custom fonts already loaded.
        },
        {
            // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
            // You need to call this method manually to update glyphs cache.
            key: "setTextData",
            value: function setTextData(ctx) {
                var _this = this;
                if (this.glyphInfo) return;
                var renderText = this.getText();
                var chars = renderText.split("");
                var spacesNumber = renderText.split(" ").length - 1;
                var dx = this.parent.getAttribute("dx").split().map(function(_) {
                    return _.getPixels("x");
                });
                var dy = this.parent.getAttribute("dy").getPixels("y");
                var anchor = this.parent.getStyle("text-anchor").getString("start");
                var thisSpacing = this.getStyle("letter-spacing");
                var parentSpacing = this.parent.getStyle("letter-spacing");
                var letterSpacing = 0;
                if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") letterSpacing = parentSpacing.getPixels();
                else if (thisSpacing.hasValue()) {
                    if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") letterSpacing = thisSpacing.getPixels();
                } // fill letter-spacing cache
                var letterSpacingCache = [];
                var textLen = renderText.length;
                this.letterSpacingCache = letterSpacingCache;
                for(var i = 0; i < textLen; i++)letterSpacingCache.push(typeof dx[i] !== "undefined" ? dx[i] : letterSpacing);
                var dxSum = letterSpacingCache.reduce(function(acc, cur, i) {
                    return i === 0 ? 0 : acc + cur || 0;
                }, 0);
                var textWidth = this.measureText(ctx);
                var textFullWidth = Math.max(textWidth + dxSum, 0);
                this.textWidth = textWidth;
                this.textHeight = this.getFontSize();
                this.glyphInfo = [];
                var fullPathWidth = this.getPathLength();
                var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
                var offset = 0;
                if (anchor === "middle" || anchor === "center") offset = -textFullWidth / 2;
                if (anchor === "end" || anchor === "right") offset = -textFullWidth;
                offset += startOffset;
                chars.forEach(function(char, i) {
                    // Find such segment what distance between p0 and p1 is approx. width of glyph
                    var _this_findSegmentToFitChar = _this.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i), nextOffset = _this_findSegmentToFitChar.offset, segment = _this_findSegmentToFitChar.segment, rotation = _this_findSegmentToFitChar.rotation;
                    offset = nextOffset;
                    if (!segment.p0 || !segment.p1) return;
                     // const width = this.getLineLength(
                    // 	segment.p0.x,
                    // 	segment.p0.y,
                    // 	segment.p1.x,
                    // 	segment.p1.y
                    // );
                    // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
                    // Can foresee having a rough pair table built in that the developer can override as needed.
                    // Or use "dx" attribute of the <text> node as a naive replacement
                    // const kern = 0;
                    // placeholder for future implementation
                    // const midpoint = this.getPointOnLine(
                    // 	kern + width / 2.0,
                    // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
                    // );
                    _this.glyphInfo.push({
                        // transposeX: midpoint.x,
                        // transposeY: midpoint.y,
                        text: chars[i],
                        p0: segment.p0,
                        p1: segment.p1,
                        rotation: rotation
                    });
                });
            }
        },
        {
            key: "parsePathData",
            value: function parsePathData(path) {
                this.pathLength = -1; // reset path length
                if (!path) return [];
                var pathCommands = [];
                var pathParser = path.pathParser;
                pathParser.reset(); // convert l, H, h, V, and v to L
                while(!pathParser.isEnd()){
                    var current = pathParser.current;
                    var startX = current ? current.x : 0;
                    var startY = current ? current.y : 0;
                    var command = pathParser.next();
                    var nextCommandType = command.type;
                    var points = [];
                    switch(command.type){
                        case PathParser.MOVE_TO:
                            this.pathM(pathParser, points);
                            break;
                        case PathParser.LINE_TO:
                            nextCommandType = this.pathL(pathParser, points);
                            break;
                        case PathParser.HORIZ_LINE_TO:
                            nextCommandType = this.pathH(pathParser, points);
                            break;
                        case PathParser.VERT_LINE_TO:
                            nextCommandType = this.pathV(pathParser, points);
                            break;
                        case PathParser.CURVE_TO:
                            this.pathC(pathParser, points);
                            break;
                        case PathParser.SMOOTH_CURVE_TO:
                            nextCommandType = this.pathS(pathParser, points);
                            break;
                        case PathParser.QUAD_TO:
                            this.pathQ(pathParser, points);
                            break;
                        case PathParser.SMOOTH_QUAD_TO:
                            nextCommandType = this.pathT(pathParser, points);
                            break;
                        case PathParser.ARC:
                            points = this.pathA(pathParser);
                            break;
                        case PathParser.CLOSE_PATH:
                            PathElement.pathZ(pathParser);
                            break;
                    }
                    if (command.type !== PathParser.CLOSE_PATH) pathCommands.push({
                        type: nextCommandType,
                        points: points,
                        start: {
                            x: startX,
                            y: startY
                        },
                        pathLength: this.calcLength(startX, startY, nextCommandType, points)
                    });
                    else pathCommands.push({
                        type: PathParser.CLOSE_PATH,
                        points: [],
                        pathLength: 0
                    });
                }
                return pathCommands;
            }
        },
        {
            key: "pathM",
            value: function pathM(pathParser, points) {
                var _PathElement_pathM_point = PathElement.pathM(pathParser).point, x = _PathElement_pathM_point.x, y = _PathElement_pathM_point.y;
                points.push(x, y);
            }
        },
        {
            key: "pathL",
            value: function pathL(pathParser, points) {
                var _PathElement_pathL_point = PathElement.pathL(pathParser).point, x = _PathElement_pathL_point.x, y = _PathElement_pathL_point.y;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
        },
        {
            key: "pathH",
            value: function pathH(pathParser, points) {
                var _PathElement_pathH_point = PathElement.pathH(pathParser).point, x = _PathElement_pathH_point.x, y = _PathElement_pathH_point.y;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
        },
        {
            key: "pathV",
            value: function pathV(pathParser, points) {
                var _PathElement_pathV_point = PathElement.pathV(pathParser).point, x = _PathElement_pathV_point.x, y = _PathElement_pathV_point.y;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
        },
        {
            key: "pathC",
            value: function pathC(pathParser, points) {
                var _PathElement_pathC = PathElement.pathC(pathParser), point = _PathElement_pathC.point, controlPoint = _PathElement_pathC.controlPoint, currentPoint = _PathElement_pathC.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathS",
            value: function pathS(pathParser, points) {
                var _PathElement_pathS = PathElement.pathS(pathParser), point = _PathElement_pathS.point, controlPoint = _PathElement_pathS.controlPoint, currentPoint = _PathElement_pathS.currentPoint;
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser.CURVE_TO;
            }
        },
        {
            key: "pathQ",
            value: function pathQ(pathParser, points) {
                var _PathElement_pathQ = PathElement.pathQ(pathParser), controlPoint = _PathElement_pathQ.controlPoint, currentPoint = _PathElement_pathQ.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
        },
        {
            key: "pathT",
            value: function pathT(pathParser, points) {
                var _PathElement_pathT = PathElement.pathT(pathParser), controlPoint = _PathElement_pathT.controlPoint, currentPoint = _PathElement_pathT.currentPoint;
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser.QUAD_TO;
            }
        },
        {
            key: "pathA",
            value: function pathA(pathParser) {
                var _PathElement_pathA = PathElement.pathA(pathParser), rX = _PathElement_pathA.rX, rY = _PathElement_pathA.rY, sweepFlag = _PathElement_pathA.sweepFlag, xAxisRotation = _PathElement_pathA.xAxisRotation, centp = _PathElement_pathA.centp, a1 = _PathElement_pathA.a1, ad = _PathElement_pathA.ad;
                if (sweepFlag === 0 && ad > 0) ad -= 2 * Math.PI;
                if (sweepFlag === 1 && ad < 0) ad += 2 * Math.PI;
                return [
                    centp.x,
                    centp.y,
                    rX,
                    rY,
                    a1,
                    ad,
                    xAxisRotation,
                    sweepFlag
                ];
            }
        },
        {
            key: "calcLength",
            value: function calcLength(x, y, commandType, points) {
                var len = 0;
                var p1 = null;
                var p2 = null;
                var t = 0;
                switch(commandType){
                    case PathParser.LINE_TO:
                        return this.getLineLength(x, y, points[0], points[1]);
                    case PathParser.CURVE_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0.0;
                        p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser.QUAD_TO:
                        // Approximates by breaking curve into 100 line segments
                        len = 0.0;
                        p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                        for(t = 0.01; t <= 1; t += 0.01){
                            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        return len;
                    case PathParser.ARC:
                        // Approximates by breaking curve into line segments
                        len = 0.0;
                        var start = points[4]; // 4 = theta
                        var dTheta = points[5]; // 5 = dTheta
                        var end = points[4] + dTheta;
                        var inc = Math.PI / 180.0; // 1 degree resolution
                        if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                         // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                        p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                        if (dTheta < 0) // clockwise
                        for(t = start - inc; t > end; t -= inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        else // counter-clockwise
                        for(t = start + inc; t < end; t += inc){
                            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                            p1 = p2;
                        }
                        p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        return len;
                }
                return 0;
            }
        },
        {
            key: "getPointOnLine",
            value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
                var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
                var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
                var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
                var run = Math.sqrt(dist * dist / (1 + m * m));
                if (p2x < p1x) run *= -1;
                var rise = m * run;
                var pt = null;
                if (p2x === p1x) // vertical line
                pt = {
                    x: fromX,
                    y: fromY + rise
                };
                else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) pt = {
                    x: fromX + run,
                    y: fromY + rise
                };
                else {
                    var ix = 0;
                    var iy = 0;
                    var len = this.getLineLength(p1x, p1y, p2x, p2y);
                    if (len < PSEUDO_ZERO) return null;
                    var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
                    u /= len * len;
                    ix = p1x + u * (p2x - p1x);
                    iy = p1y + u * (p2y - p1y);
                    var pRise = this.getLineLength(fromX, fromY, ix, iy);
                    var pRun = Math.sqrt(dist * dist - pRise * pRise);
                    run = Math.sqrt(pRun * pRun / (1 + m * m));
                    if (p2x < p1x) run *= -1;
                    rise = m * run;
                    pt = {
                        x: ix + run,
                        y: iy + rise
                    };
                }
                return pt;
            }
        },
        {
            key: "getPointOnPath",
            value: function getPointOnPath(distance) {
                var fullLen = this.getPathLength();
                var cumulativePathLength = 0;
                var p = null;
                if (distance < -0.00005 || distance - 0.00005 > fullLen) return null;
                var dataArray = this.dataArray;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = dataArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var command = _step.value;
                        if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
                            cumulativePathLength += command.pathLength;
                            continue;
                        }
                        var delta = distance - cumulativePathLength;
                        var currentT = 0;
                        switch(command.type){
                            case PathParser.LINE_TO:
                                p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                                break;
                            case PathParser.ARC:
                                var start = command.points[4]; // 4 = theta
                                var dTheta = command.points[5]; // 5 = dTheta
                                var end = command.points[4] + dTheta;
                                currentT = start + delta / command.pathLength * dTheta;
                                if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
                                p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                                break;
                            case PathParser.CURVE_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                                break;
                            case PathParser.QUAD_TO:
                                currentT = delta / command.pathLength;
                                if (currentT > 1) currentT = 1;
                                p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                                break;
                        }
                        if (p) return p;
                        break;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return null;
            }
        },
        {
            key: "getLineLength",
            value: function getLineLength(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
        },
        {
            key: "getPathLength",
            value: function getPathLength() {
                if (this.pathLength === -1) this.pathLength = this.dataArray.reduce(function(length, command) {
                    return command.pathLength > 0 ? length + command.pathLength : length;
                }, 0);
                return this.pathLength;
            }
        },
        {
            key: "getPointOnCubicBezier",
            value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
                var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
                var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnQuadraticBezier",
            value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
                var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
                var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
                return {
                    x: x,
                    y: y
                };
            }
        },
        {
            key: "getPointOnEllipticalArc",
            value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
                var cosPsi = Math.cos(psi);
                var sinPsi = Math.sin(psi);
                var pt = {
                    x: rx * Math.cos(theta),
                    y: ry * Math.sin(theta)
                };
                return {
                    x: cx + (pt.x * cosPsi - pt.y * sinPsi),
                    y: cy + (pt.x * sinPsi + pt.y * cosPsi)
                };
            } // TODO need some optimisations. possibly build cache only for curved segments?
        },
        {
            key: "buildEquidistantCache",
            value: function buildEquidistantCache(inputStep, inputPrecision) {
                var fullLen = this.getPathLength();
                var precision = inputPrecision || 0.25; // accuracy vs performance
                var step = inputStep || fullLen / 100;
                if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
                    // Prepare cache
                    this.equidistantCache = {
                        step: step,
                        precision: precision,
                        points: []
                    }; // Calculate points
                    var s = 0;
                    for(var l = 0; l <= fullLen; l += precision){
                        var p0 = this.getPointOnPath(l);
                        var p1 = this.getPointOnPath(l + precision);
                        if (!p0 || !p1) continue;
                        s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
                        if (s >= step) {
                            this.equidistantCache.points.push({
                                x: p0.x,
                                y: p0.y,
                                distance: l
                            });
                            s -= step;
                        }
                    }
                }
            }
        },
        {
            key: "getEquidistantPointOnPath",
            value: function getEquidistantPointOnPath(targetDistance, step, precision) {
                this.buildEquidistantCache(step, precision);
                if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) return null;
                var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
                return this.equidistantCache.points[idx] || null;
            }
        }
    ]);
    return TextPathElement;
}(TextElement);
var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var ImageElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(ImageElement, RenderedElement);
    var _super = (0, _createSuper._)(ImageElement);
    function ImageElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, ImageElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "image";
        _this.loaded = false;
        var href = _this.getHrefAttribute().getString();
        if (!href) return (0, _possibleConstructorReturn._)(_this);
        var isSvg = href.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(href);
        document1.images.push((0, _assertThisInitialized._)(_this));
        if (!isSvg) _this.loadImage(href);
        else _this.loadSvg(href);
        _this.isSvg = isSvg;
        return _this;
    }
    (0, _createClass._)(ImageElement, [
        {
            key: "loadImage",
            value: function loadImage(href) {
                var _this = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var image, err;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.document.createImage(href)
                                ];
                            case 1:
                                image = _state.sent();
                                _this.image = image;
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                err = _state.sent();
                                console.error('Error while loading image "'.concat(href, '":'), err);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                _this.loaded = true;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loadSvg",
            value: function loadSvg(href) {
                var _this2 = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var match, data, response, svg, err;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                match = dataUriRegex.exec(href);
                                if (!match) return [
                                    3,
                                    1
                                ];
                                data = match[5];
                                if (match[4] === "base64") _this2.image = atob(data);
                                else _this2.image = decodeURIComponent(data);
                                return [
                                    3,
                                    5
                                ];
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this2.document.fetch(href)
                                ];
                            case 2:
                                response = _state.sent();
                                return [
                                    4,
                                    response.text()
                                ];
                            case 3:
                                svg = _state.sent();
                                _this2.image = svg;
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                err = _state.sent();
                                console.error('Error while loading image "'.concat(href, '":'), err);
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                _this2.loaded = true;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _this = this, document1 = _this.document, image = _this.image, loaded = _this.loaded;
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                if (!loaded || !image || !width || !height) return;
                ctx.save();
                ctx.translate(x, y);
                if (this.isSvg) {
                    var subDocument = document1.canvg.forkString(ctx, this.image, {
                        ignoreMouse: true,
                        ignoreAnimation: true,
                        ignoreDimensions: true,
                        ignoreClear: true,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: width,
                        scaleHeight: height
                    });
                    subDocument.document.documentElement.parent = this;
                    subDocument.render();
                } else {
                    var _image = this.image;
                    document1.setViewBox({
                        ctx: ctx,
                        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                        width: width,
                        desiredWidth: _image.width,
                        height: height,
                        desiredHeight: _image.height
                    });
                    if (this.loaded) {
                        if (typeof _image.complete === "undefined" || _image.complete) ctx.drawImage(_image, 0, 0);
                    }
                }
                ctx.restore();
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox() {
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                return new BoundingBox(x, y, x + width, y + height);
            }
        }
    ]);
    return ImageElement;
}(RenderedElement);
var SymbolElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(SymbolElement, RenderedElement);
    var _super = (0, _createSuper._)(SymbolElement);
    function SymbolElement() {
        (0, _classCallCheck._)(this, SymbolElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "symbol";
        return _this;
    }
    (0, _createClass._)(SymbolElement, [
        {
            key: "render",
            value: function render(_) {}
        }
    ]);
    return SymbolElement;
}(RenderedElement);
var SVGFontLoader = /*#__PURE__*/ function() {
    "use strict";
    function SVGFontLoader(document1) {
        (0, _classCallCheck._)(this, SVGFontLoader);
        this.document = document1;
        this.loaded = false;
        document1.fonts.push(this);
    }
    (0, _createClass._)(SVGFontLoader, [
        {
            key: "load",
            value: function load(fontFamily, url) {
                var _this = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var document1, svgDocument, fonts, err;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                document1 = _this.document;
                                return [
                                    4,
                                    document1.canvg.parser.load(url)
                                ];
                            case 1:
                                svgDocument = _state.sent();
                                fonts = svgDocument.getElementsByTagName("font");
                                Array.from(fonts).forEach(function(fontNode) {
                                    var font = document1.createElement(fontNode);
                                    document1.definitions[fontFamily] = font;
                                });
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                err = _state.sent();
                                console.error('Error while loading font "'.concat(url, '":'), err);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                _this.loaded = true;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return SVGFontLoader;
}();
var StyleElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(StyleElement, Element);
    var _super = (0, _createSuper._)(StyleElement);
    function StyleElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, StyleElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "style";
        var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
        .map(function(_) {
            return _.textContent;
        }).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "") // remove comments
        .replace(/@import.*;/g, "") // remove imports
        );
        var cssDefs = css.split("}");
        cssDefs.forEach(function(_) {
            var def = _.trim();
            if (!def) return;
            var cssParts = def.split("{");
            var cssClasses = cssParts[0].split(",");
            var cssProps = cssParts[1].split(";");
            cssClasses.forEach(function(_) {
                var cssClass = _.trim();
                if (!cssClass) return;
                var props = document1.styles[cssClass] || {};
                cssProps.forEach(function(cssProp) {
                    var prop = cssProp.indexOf(":");
                    var name = cssProp.substr(0, prop).trim();
                    var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
                    if (name && value) props[name] = new Property(document1, name, value);
                });
                document1.styles[cssClass] = props;
                document1.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                if (cssClass === "@font-face") {
                    //  && !nodeEnv
                    var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
                    var srcs = props.src.getString().split(",");
                    srcs.forEach(function(src) {
                        if (src.indexOf('format("svg")') > 0) {
                            var url = parseExternalUrl(src);
                            if (url) new SVGFontLoader(document1).load(fontFamily, url);
                        }
                    });
                }
            });
        });
        return _this;
    }
    return StyleElement;
}((0, _wrapNativeSuper._)(Element));
StyleElement.parseExternalUrl = parseExternalUrl;
var UseElement = /*#__PURE__*/ function(RenderedElement) {
    "use strict";
    (0, _inherits._)(UseElement, RenderedElement);
    var _super = (0, _createSuper._)(UseElement);
    function UseElement() {
        (0, _classCallCheck._)(this, UseElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "use";
        return _this;
    }
    (0, _createClass._)(UseElement, [
        {
            key: "setContext",
            value: function setContext(ctx) {
                (0, _get._)((0, _getPrototypeOf._)(UseElement.prototype), "setContext", this).call(this, ctx);
                var xAttr = this.getAttribute("x");
                var yAttr = this.getAttribute("y");
                if (xAttr.hasValue()) ctx.translate(xAttr.getPixels("x"), 0);
                if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels("y"));
            }
        },
        {
            key: "path",
            value: function path(ctx) {
                var element = this.element;
                if (element) element.path(ctx);
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(ctx) {
                var _this = this, document1 = _this.document, element = _this.element;
                if (element) {
                    var tempSvg = element;
                    if (element.type === "symbol") {
                        // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                        tempSvg = new SVGElement(document1, null);
                        tempSvg.attributes.viewBox = new Property(document1, "viewBox", element.getAttribute("viewBox").getString());
                        tempSvg.attributes.preserveAspectRatio = new Property(document1, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
                        tempSvg.attributes.overflow = new Property(document1, "overflow", element.getAttribute("overflow").getString());
                        tempSvg.children = element.children; // element is still the parent of the children
                        element.styles.opacity = new Property(document1, "opacity", this.calculateOpacity());
                    }
                    if (tempSvg.type === "svg") {
                        var widthStyle = this.getStyle("width", false, true);
                        var heightStyle = this.getStyle("height", false, true); // if symbol or svg, inherit width/height from me
                        if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document1, "width", widthStyle.getString());
                        if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document1, "height", heightStyle.getString());
                    }
                    var oldParent = tempSvg.parent;
                    tempSvg.parent = this;
                    tempSvg.render(ctx);
                    tempSvg.parent = oldParent;
                }
            }
        },
        {
            key: "getBoundingBox",
            value: function getBoundingBox(ctx) {
                var element = this.element;
                if (element) return element.getBoundingBox(ctx);
                return null;
            }
        },
        {
            key: "elementTransform",
            value: function elementTransform() {
                var _this = this, document1 = _this.document, element = _this.element;
                return Transform.fromElement(document1, element);
            }
        },
        {
            key: "element",
            get: function get() {
                if (!this.cachedElement) this.cachedElement = this.getHrefAttribute().getDefinition();
                return this.cachedElement;
            }
        }
    ]);
    return UseElement;
}(RenderedElement);
function imGet(img, x, y, width, _height, rgba) {
    return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _height, rgba, val) {
    img[y * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i, v) {
    var mi = matrix[i];
    return mi * v;
}
function c(a, m1, m2, m3) {
    return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
var FeColorMatrixElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FeColorMatrixElement, Element);
    var _super = (0, _createSuper._)(FeColorMatrixElement);
    function FeColorMatrixElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, FeColorMatrixElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "feColorMatrix";
        var matrix = toNumbers(_this.getAttribute("values").getString());
        switch(_this.getAttribute("type").getString("matrix")){
            // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
            case "saturate":
                var s = matrix[0];
                /* eslint-disable array-element-newline */ matrix = [
                    0.213 + 0.787 * s,
                    0.715 - 0.715 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 + 0.285 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 - 0.715 * s,
                    0.072 + 0.928 * s,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case "hueRotate":
                var a = matrix[0] * Math.PI / 180.0;
                /* eslint-disable array-element-newline */ matrix = [
                    c(a, 0.213, 0.787, -0.213),
                    c(a, 0.715, -0.715, -0.715),
                    c(a, 0.072, -0.072, 0.928),
                    0,
                    0,
                    c(a, 0.213, -0.213, 0.143),
                    c(a, 0.715, 0.285, 0.140),
                    c(a, 0.072, -0.072, -0.283),
                    0,
                    0,
                    c(a, 0.213, -0.213, -0.787),
                    c(a, 0.715, -0.715, 0.715),
                    c(a, 0.072, 0.928, 0.072),
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case "luminanceToAlpha":
                /* eslint-disable array-element-newline */ matrix = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0.2125,
                    0.7154,
                    0.0721,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
        }
        _this.matrix = matrix;
        _this.includeOpacity = _this.getAttribute("includeOpacity").hasValue();
        return _this;
    }
    (0, _createClass._)(FeColorMatrixElement, [
        {
            key: "apply",
            value: function apply(ctx, _x, _y, width, height) {
                // assuming x==0 && y==0 for now
                var _this = this, includeOpacity = _this.includeOpacity, matrix = _this.matrix;
                var srcData = ctx.getImageData(0, 0, width, height);
                for(var y = 0; y < height; y++)for(var x = 0; x < width; x++){
                    var r = imGet(srcData.data, x, y, width, height, 0);
                    var g = imGet(srcData.data, x, y, width, height, 1);
                    var b = imGet(srcData.data, x, y, width, height, 2);
                    var a = imGet(srcData.data, x, y, width, height, 3);
                    var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
                    var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
                    var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
                    var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
                    if (includeOpacity) {
                        nr = 0;
                        ng = 0;
                        nb = 0;
                        na *= a / 255;
                    }
                    imSet(srcData.data, x, y, width, height, 0, nr);
                    imSet(srcData.data, x, y, width, height, 1, ng);
                    imSet(srcData.data, x, y, width, height, 2, nb);
                    imSet(srcData.data, x, y, width, height, 3, na);
                }
                ctx.clearRect(0, 0, width, height);
                ctx.putImageData(srcData, 0, 0);
            }
        }
    ]);
    return FeColorMatrixElement;
}((0, _wrapNativeSuper._)(Element));
var MaskElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(MaskElement, Element);
    var _super = (0, _createSuper._)(MaskElement);
    function MaskElement() {
        (0, _classCallCheck._)(this, MaskElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "mask";
        return _this;
    }
    (0, _createClass._)(MaskElement, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                var document1 = this.document; // render as temp svg
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                if (!width && !height) {
                    var boundingBox = new BoundingBox();
                    this.children.forEach(function(child) {
                        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                    });
                    x = Math.floor(boundingBox.x1);
                    y = Math.floor(boundingBox.y1);
                    width = Math.floor(boundingBox.width);
                    height = Math.floor(boundingBox.height);
                }
                var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
                var maskCanvas = document1.createCanvas(x + width, y + height);
                var maskCtx = maskCanvas.getContext("2d");
                document1.screen.setDefaults(maskCtx);
                this.renderChildren(maskCtx); // convert mask to alpha with a fake node
                // TODO: refactor out apply from feColorMatrix
                new FeColorMatrixElement(document1, {
                    nodeType: 1,
                    childNodes: [],
                    attributes: [
                        {
                            nodeName: "type",
                            value: "luminanceToAlpha"
                        },
                        {
                            nodeName: "includeOpacity",
                            value: "true"
                        }
                    ]
                }).apply(maskCtx, 0, 0, x + width, y + height);
                var tmpCanvas = document1.createCanvas(x + width, y + height);
                var tmpCtx = tmpCanvas.getContext("2d");
                document1.screen.setDefaults(tmpCtx);
                element.render(tmpCtx);
                tmpCtx.globalCompositeOperation = "destination-in";
                tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
                tmpCtx.fillRect(0, 0, x + width, y + height);
                ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
                ctx.fillRect(0, 0, x + width, y + height); // reassign mask
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {}
        }
    ]);
    return MaskElement;
}((0, _wrapNativeSuper._)(Element));
MaskElement.ignoreStyles = [
    "mask",
    "transform",
    "clip-path"
];
var noop = function() {};
var ClipPathElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(ClipPathElement, Element);
    var _super = (0, _createSuper._)(ClipPathElement);
    function ClipPathElement() {
        (0, _classCallCheck._)(this, ClipPathElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "clipPath";
        return _this;
    }
    (0, _createClass._)(ClipPathElement, [
        {
            key: "apply",
            value: function apply(ctx) {
                var document1 = this.document;
                var contextProto = Reflect.getPrototypeOf(ctx);
                var beginPath = ctx.beginPath, closePath = ctx.closePath;
                if (contextProto) {
                    contextProto.beginPath = noop;
                    contextProto.closePath = noop;
                }
                Reflect.apply(beginPath, ctx, []);
                this.children.forEach(function(child) {
                    if (typeof child.path === "undefined") return;
                    var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null; // handle <use />
                    if (!transform) transform = Transform.fromElement(document1, child);
                    if (transform) transform.apply(ctx);
                    child.path(ctx);
                    if (contextProto) contextProto.closePath = closePath;
                    if (transform) transform.unapply(ctx);
                });
                Reflect.apply(closePath, ctx, []);
                ctx.clip();
                if (contextProto) {
                    contextProto.beginPath = beginPath;
                    contextProto.closePath = closePath;
                }
            }
        },
        {
            key: "render",
            value: function render(_) {}
        }
    ]);
    return ClipPathElement;
}((0, _wrapNativeSuper._)(Element));
var FilterElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FilterElement, Element);
    var _super = (0, _createSuper._)(FilterElement);
    function FilterElement() {
        (0, _classCallCheck._)(this, FilterElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "filter";
        return _this;
    }
    (0, _createClass._)(FilterElement, [
        {
            key: "apply",
            value: function apply(ctx, element) {
                // render as temp svg
                var _this = this, document1 = _this.document, children = _this.children;
                var boundingBox = element.getBoundingBox(ctx);
                if (!boundingBox) return;
                var px = 0;
                var py = 0;
                children.forEach(function(child) {
                    var efd = child.extraFilterDistance || 0;
                    px = Math.max(px, efd);
                    py = Math.max(py, efd);
                });
                var width = Math.floor(boundingBox.width);
                var height = Math.floor(boundingBox.height);
                var tmpCanvasWidth = width + 2 * px;
                var tmpCanvasHeight = height + 2 * py;
                if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
                var x = Math.floor(boundingBox.x);
                var y = Math.floor(boundingBox.y);
                var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
                var tmpCanvas = document1.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
                var tmpCtx = tmpCanvas.getContext("2d");
                document1.screen.setDefaults(tmpCtx);
                tmpCtx.translate(-x + px, -y + py);
                element.render(tmpCtx); // apply filters
                children.forEach(function(child) {
                    if (typeof child.apply === "function") child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
                }); // render on me
                ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
                this.restoreStyles(element, ignoredStyles);
            }
        },
        {
            key: "render",
            value: function render(_) {}
        }
    ]);
    return FilterElement;
}((0, _wrapNativeSuper._)(Element));
FilterElement.ignoreStyles = [
    "filter",
    "transform",
    "clip-path"
];
var FeDropShadowElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FeDropShadowElement, Element);
    var _super = (0, _createSuper._)(FeDropShadowElement);
    function FeDropShadowElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, FeDropShadowElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "feDropShadow";
        _this.addStylesFromStyleDefinition();
        return _this;
    }
    (0, _createClass._)(FeDropShadowElement, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {}
        }
    ]);
    return FeDropShadowElement;
}((0, _wrapNativeSuper._)(Element));
var FeMorphologyElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FeMorphologyElement, Element);
    var _super = (0, _createSuper._)(FeMorphologyElement);
    function FeMorphologyElement() {
        (0, _classCallCheck._)(this, FeMorphologyElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "feMorphology";
        return _this;
    }
    (0, _createClass._)(FeMorphologyElement, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {}
        }
    ]);
    return FeMorphologyElement;
}((0, _wrapNativeSuper._)(Element));
var FeCompositeElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FeCompositeElement, Element);
    var _super = (0, _createSuper._)(FeCompositeElement);
    function FeCompositeElement() {
        (0, _classCallCheck._)(this, FeCompositeElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "feComposite";
        return _this;
    }
    (0, _createClass._)(FeCompositeElement, [
        {
            key: "apply",
            value: function apply(_, _x, _y, _width, _height) {}
        }
    ]);
    return FeCompositeElement;
}((0, _wrapNativeSuper._)(Element));
var FeGaussianBlurElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(FeGaussianBlurElement, Element);
    var _super = (0, _createSuper._)(FeGaussianBlurElement);
    function FeGaussianBlurElement(document1, node, captureTextNodes) {
        (0, _classCallCheck._)(this, FeGaussianBlurElement);
        var _this;
        _this = _super.call(this, document1, node, captureTextNodes);
        _this.type = "feGaussianBlur";
        _this.blurRadius = Math.floor(_this.getAttribute("stdDeviation").getNumber());
        _this.extraFilterDistance = _this.blurRadius;
        return _this;
    }
    (0, _createClass._)(FeGaussianBlurElement, [
        {
            key: "apply",
            value: function apply(ctx, x, y, width, height) {
                var _this = this, document1 = _this.document, blurRadius = _this.blurRadius;
                var body = document1.window ? document1.window.document.body : null;
                var canvas = ctx.canvas; // StackBlur requires canvas be on document
                canvas.id = document1.getUniqueId();
                if (body) {
                    canvas.style.display = "none";
                    body.appendChild(canvas);
                }
                (0, _stackblurCanvas.canvasRGBA)(canvas, x, y, width, height, blurRadius);
                if (body) body.removeChild(canvas);
            }
        }
    ]);
    return FeGaussianBlurElement;
}((0, _wrapNativeSuper._)(Element));
var TitleElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(TitleElement, Element);
    var _super = (0, _createSuper._)(TitleElement);
    function TitleElement() {
        (0, _classCallCheck._)(this, TitleElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "title";
        return _this;
    }
    return TitleElement;
}((0, _wrapNativeSuper._)(Element));
var DescElement = /*#__PURE__*/ function(Element) {
    "use strict";
    (0, _inherits._)(DescElement, Element);
    var _super = (0, _createSuper._)(DescElement);
    function DescElement() {
        (0, _classCallCheck._)(this, DescElement);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.type = "desc";
        return _this;
    }
    return DescElement;
}((0, _wrapNativeSuper._)(Element));
var elements = {
    "svg": SVGElement,
    "rect": RectElement,
    "circle": CircleElement,
    "ellipse": EllipseElement,
    "line": LineElement,
    "polyline": PolylineElement,
    "polygon": PolygonElement,
    "path": PathElement,
    "pattern": PatternElement,
    "marker": MarkerElement,
    "defs": DefsElement,
    "linearGradient": LinearGradientElement,
    "radialGradient": RadialGradientElement,
    "stop": StopElement,
    "animate": AnimateElement,
    "animateColor": AnimateColorElement,
    "animateTransform": AnimateTransformElement,
    "font": FontElement,
    "font-face": FontFaceElement,
    "missing-glyph": MissingGlyphElement,
    "glyph": GlyphElement,
    "text": TextElement,
    "tspan": TSpanElement,
    "tref": TRefElement,
    "a": AElement,
    "textPath": TextPathElement,
    "image": ImageElement,
    "g": GElement,
    "symbol": SymbolElement,
    "style": StyleElement,
    "use": UseElement,
    "mask": MaskElement,
    "clipPath": ClipPathElement,
    "filter": FilterElement,
    "feDropShadow": FeDropShadowElement,
    "feMorphology": FeMorphologyElement,
    "feComposite": FeCompositeElement,
    "feColorMatrix": FeColorMatrixElement,
    "feGaussianBlur": FeGaussianBlurElement,
    "title": TitleElement,
    "desc": DescElement
};
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys$1(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function createCanvas(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function createImage(_x) {
    return _createImage.apply(this, arguments);
}
function _createImage() {
    _createImage = (0, _asyncToGeneratorDefault.default)(function(src) {
        var anonymousCrossOrigin, image;
        var _arguments = arguments;
        return (0, _tsGenerator._)(this, function(_state) {
            anonymousCrossOrigin = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
            image = document.createElement("img");
            if (anonymousCrossOrigin) image.crossOrigin = "Anonymous";
            return [
                2,
                new Promise(function(resolve, reject) {
                    image.onload = function() {
                        resolve(image);
                    };
                    image.onerror = function(_event, _source, _lineno, _colno, error) {
                        reject(error);
                    };
                    image.src = src;
                })
            ];
        });
    });
    return _createImage.apply(this, arguments);
}
var Document = /*#__PURE__*/ function() {
    "use strict";
    function Document(canvg) {
        (0, _classCallCheck._)(this, Document);
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref_rootEmSize = _ref.rootEmSize, rootEmSize = _ref_rootEmSize === void 0 ? 12 : _ref_rootEmSize, _ref_emSize = _ref.emSize, emSize = _ref_emSize === void 0 ? 12 : _ref_emSize, _ref_createCanvas = _ref.createCanvas, _$createCanvas = _ref_createCanvas === void 0 ? Document.createCanvas : _ref_createCanvas, _ref_createImage = _ref.createImage, _$createImage = _ref_createImage === void 0 ? Document.createImage : _ref_createImage, anonymousCrossOrigin = _ref.anonymousCrossOrigin;
        this.canvg = canvg;
        this.definitions = {};
        this.styles = {};
        this.stylesSpecificity = {};
        this.images = [];
        this.fonts = [];
        this.emSizeStack = [];
        this.uniqueId = 0;
        this.screen = canvg.screen;
        this.rootEmSize = rootEmSize;
        this.emSize = emSize;
        this.createCanvas = _$createCanvas;
        this.createImage = this.bindCreateImage(_$createImage, anonymousCrossOrigin);
        this.screen.wait(this.isImagesLoaded.bind(this));
        this.screen.wait(this.isFontsLoaded.bind(this));
    }
    (0, _createClass._)(Document, [
        {
            key: "bindCreateImage",
            value: function bindCreateImage(createImage, anonymousCrossOrigin) {
                if (typeof anonymousCrossOrigin === "boolean") return function(source, forceAnonymousCrossOrigin) {
                    return createImage(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
                };
                return createImage;
            }
        },
        {
            key: "window",
            get: function get() {
                return this.screen.window;
            }
        },
        {
            key: "fetch",
            get: function get() {
                return this.screen.fetch;
            }
        },
        {
            key: "ctx",
            get: function get() {
                return this.screen.ctx;
            }
        },
        {
            key: "emSize",
            get: function get() {
                var emSizeStack = this.emSizeStack;
                return emSizeStack[emSizeStack.length - 1];
            },
            set: function set(value) {
                var emSizeStack = this.emSizeStack;
                emSizeStack.push(value);
            }
        },
        {
            key: "popEmSize",
            value: function popEmSize() {
                var emSizeStack = this.emSizeStack;
                emSizeStack.pop();
            }
        },
        {
            key: "getUniqueId",
            value: function getUniqueId() {
                return "canvg".concat(++this.uniqueId);
            }
        },
        {
            key: "isImagesLoaded",
            value: function isImagesLoaded() {
                return this.images.every(function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "isFontsLoaded",
            value: function isFontsLoaded() {
                return this.fonts.every(function(_) {
                    return _.loaded;
                });
            }
        },
        {
            key: "createDocumentElement",
            value: function createDocumentElement(document1) {
                var documentElement = this.createElement(document1.documentElement);
                documentElement.root = true;
                documentElement.addStylesFromStyleDefinition();
                this.documentElement = documentElement;
                return documentElement;
            }
        },
        {
            key: "createElement",
            value: function createElement(node) {
                var elementType = node.nodeName.replace(/^[^:]+:/, "");
                var ElementType = Document.elementTypes[elementType];
                if (typeof ElementType !== "undefined") return new ElementType(this, node);
                return new UnknownElement(this, node);
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(node) {
                return new TextNode(this, node);
            }
        },
        {
            key: "setViewBox",
            value: function setViewBox(config) {
                this.screen.setViewBox(_objectSpread$1({
                    document: this
                }, config));
            }
        }
    ]);
    return Document;
}();
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elements;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * SVG renderer on canvas.
 */ var Canvg = /*#__PURE__*/ function() {
    "use strict";
    function Canvg(ctx, svg) {
        (0, _classCallCheck._)(this, Canvg);
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.parser = new Parser(options);
        this.screen = new Screen(ctx, options);
        this.options = options;
        var document1 = new Document(this, options);
        var documentElement = document1.createDocumentElement(svg);
        this.document = document1;
        this.documentElement = documentElement;
    }
    (0, _createClass._)(Canvg, [
        {
            /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ key: "fork",
            value: function fork(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
            }
        },
        {
            /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ key: "forkString",
            value: function forkString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
            }
        },
        {
            /**
   * Document is ready promise.
   * @returns Ready promise.
   */ key: "ready",
            value: function ready() {
                return this.screen.ready();
            }
        },
        {
            /**
   * Document is ready value.
   * @returns Is ready or not.
   */ key: "isReady",
            value: function isReady() {
                return this.screen.isReady();
            }
        },
        {
            /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */ key: "render",
            value: function render() {
                var _arguments2 = arguments, _this = this;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var options;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
                                _this.start(_objectSpread({
                                    enableRedraw: true,
                                    ignoreAnimation: true,
                                    ignoreMouse: true
                                }, options));
                                return [
                                    4,
                                    _this.ready()
                                ];
                            case 1:
                                _state.sent();
                                _this.stop();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Start rendering.
   * @param options - Render options.
   */ key: "start",
            value: function start() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _this = this, documentElement = _this.documentElement, screen = _this.screen, baseOptions = _this.options;
                screen.start(documentElement, _objectSpread(_objectSpread({
                    enableRedraw: true
                }, baseOptions), options));
            }
        },
        {
            /**
   * Stop rendering.
   */ key: "stop",
            value: function stop() {
                this.screen.stop();
            }
        },
        {
            /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */ key: "resize",
            value: function resize(width) {
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                this.documentElement.resize(width, height, preserveAspectRatio);
            }
        }
    ], [
        {
            key: "from",
            value: /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ function from(ctx, svg) {
                var _arguments = arguments;
                return (0, _asyncToGeneratorDefault.default)(function() {
                    var options, parser, svgDocument;
                    return (0, _tsGenerator._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
                                parser = new Parser(options);
                                return [
                                    4,
                                    parser.parse(svg)
                                ];
                            case 1:
                                svgDocument = _state.sent();
                                return [
                                    2,
                                    new Canvg(ctx, svgDocument, options)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "fromString",
            value: /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ function fromString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var parser = new Parser(options);
                var svgDocument = parser.parseFromString(svg);
                return new Canvg(ctx, svgDocument, options);
            }
        }
    ]);
    return Canvg;
}();

},{"@swc/helpers/_/_assert_this_initialized":"kF73X","@swc/helpers/_/_class_call_check":"k6ej7","@swc/helpers/_/_create_class":"fqHsM","@swc/helpers/_/_get":"iTZ8I","@swc/helpers/_/_get_prototype_of":"iEvnd","@swc/helpers/_/_inherits":"8r9Rk","@swc/helpers/_/_possible_constructor_return":"fQ3NP","@swc/helpers/_/_sliced_to_array":"5rqad","@swc/helpers/_/_to_consumable_array":"bprJq","@swc/helpers/_/_wrap_native_super":"9mjOU","@swc/helpers/_/_create_super":"i7l9c","@swc/helpers/_/_ts_generator":"jlByh","30151051fd6339d4":"9rrIu","core-js/modules/es.promise.js":"dcEjJ","@babel/runtime/helpers/asyncToGenerator":"cuVAN","core-js/modules/es.string.match.js":"ghwDC","core-js/modules/es.string.replace.js":"bivd7","core-js/modules/es.string.starts-with.js":"4TbWv","core-js/modules/es.array.iterator.js":"fEW8z","core-js/modules/web.dom-collections.iterator.js":"3EbzG","@babel/runtime/helpers/defineProperty":"h0Gbc","core-js/modules/es.array.reduce.js":"2f08x","core-js/modules/es.string.ends-with.js":"aVgPi","core-js/modules/es.string.split.js":"3bddA","raf":"386Xm","core-js/modules/es.string.trim.js":"dtNtZ","rgbcolor":"057VV","core-js/modules/es.array.index-of.js":"8RSmP","core-js/modules/es.string.includes.js":"eI3aU","core-js/modules/es.array.reverse.js":"crHHL","svg-pathdata":"cDeAH","core-js/modules/es.regexp.to-string.js":"dJ6ub","stackblur-canvas":"eOl4r","@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"dcEjJ":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("71201fb984fca5e2");
require("944d2d67bf4aa279");
require("259dee16b78a9293");
require("bac68e84460cf44d");
require("35807fabff0322bf");
require("8713c69981abff7e");

},{"71201fb984fca5e2":"g22bw","944d2d67bf4aa279":"ln11F","259dee16b78a9293":"bVRet","bac68e84460cf44d":"3x9kF","35807fabff0322bf":"d2OUM","8713c69981abff7e":"6wJNV"}],"g22bw":[function(require,module,exports) {
"use strict";
var $ = require("cdd137752c5b4a8e");
var IS_PURE = require("27c8c7e1f0444fd2");
var IS_NODE = require("ac93fad4a8a220f8");
var global = require("7c41199cc64ef600");
var call = require("643c25bd5b0dfc21");
var defineBuiltIn = require("76c41f8cfb7124b7");
var setPrototypeOf = require("6f7c1c1190868f98");
var setToStringTag = require("8b9ff6cd5f4bf470");
var setSpecies = require("e2d999cd3139e29e");
var aCallable = require("37ba5f9496a9ce6f");
var isCallable = require("c754acf38f3fbf83");
var isObject = require("f9d3438feb00503");
var anInstance = require("eea1cec1753c28d3");
var speciesConstructor = require("2b3f8c9a01947fd4");
var task = require("d7da4b96347ff949").set;
var microtask = require("5967e7e0ab765b55");
var hostReportErrors = require("45c77ce65cdfa56e");
var perform = require("ed2bd3e4981b5b7f");
var Queue = require("67a62e6e19993e50");
var InternalStateModule = require("d047e80fbdc4abaf");
var NativePromiseConstructor = require("cb21f79465bb7a4f");
var PromiseConstructorDetection = require("d92ec88829ba956d");
var newPromiseCapabilityModule = require("f518fe10c60b8bee");
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
// helpers
var isThenable = function isThenable(it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
};
var callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state === FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
        if (handler) {
            if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
                if (domain) domain.enter();
                result = handler(value); // can throw
                if (domain) {
                    domain.exit();
                    exited = true;
                }
            }
            if (result === reaction.promise) reject(new TypeError("Promise-chain cycle"));
            else if (then = isThenable(result)) call(then, result, resolve, reject);
            else resolve(result);
        } else reject(value);
    } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
    }
};
var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while(reaction = reactions.get())callReaction(reaction, state);
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global["on" + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function onUnhandled(state) {
    call(task, global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit("unhandledRejection", value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function onHandleUnhandled(state) {
    call(task, global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit("rejectionHandled", promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function bind(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function internalResolve1(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
        anInstance(this, PromisePrototype);
        aCallable(executor);
        call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromisePrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new Queue(),
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process.domain : undefined;
        if (state.state === PENDING) state.reactions.add(reaction);
        else microtask(function() {
            callReaction(reaction, state);
        });
        return reaction.promise;
    });
    OwnPromiseCapability = function OwnPromiseCapability() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
                call(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, {
            unsafe: true
        });
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {}
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
}
$({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"cdd137752c5b4a8e":"eg2th","27c8c7e1f0444fd2":"5KUL8","ac93fad4a8a220f8":"dXTb7","7c41199cc64ef600":"feqQB","643c25bd5b0dfc21":"6kMRM","76c41f8cfb7124b7":"aSXv0","6f7c1c1190868f98":"hoQWf","8b9ff6cd5f4bf470":"aW7iM","e2d999cd3139e29e":"fDZWW","37ba5f9496a9ce6f":"8sXzR","c754acf38f3fbf83":"39xdi","f9d3438feb00503":"3v7K5","eea1cec1753c28d3":"7GDzw","2b3f8c9a01947fd4":"7Pd0k","d7da4b96347ff949":"9pyeG","5967e7e0ab765b55":"7LSwj","45c77ce65cdfa56e":"lwj38","ed2bd3e4981b5b7f":"kvYfw","67a62e6e19993e50":"lJd1L","d047e80fbdc4abaf":"oc7Oi","cb21f79465bb7a4f":"87nR6","d92ec88829ba956d":"8ftR7","f518fe10c60b8bee":"cPhhb"}],"eg2th":[function(require,module,exports) {
var _typeOf = require("@swc/helpers/_/_type_of");
"use strict";
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = global[TARGET] && global[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if ((typeof sourceProperty === "undefined" ? "undefined" : (0, _typeOf._)(sourceProperty)) == (typeof targetProperty === "undefined" ? "undefined" : (0, _typeOf._)(targetProperty))) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"@swc/helpers/_/_type_of":"h4q6w","6643b6592ad59b23":"feqQB","2ec751f39e500b85":"ljH3i","b4567636b28a3b3a":"fQRw3","50460aa43dd4048a":"aSXv0","581238c99f8c2c30":"978PB","566a383894c688bc":"ljWgh","f0e2e697f04e8ad9":"ddPYi"}],"feqQB":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function check(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"ljH3i":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"eXg3m","553ec943aa2a4554":"6kMRM","bbc5e69071aa2fbd":"bYgbM","1d2ffbfd99e01f41":"8qiYi","c4ea69a78a643d87":"caZWT","8ab18ff766aa2ab9":"2DXy7","3761c5d34b7aa48f":"6F393","c4dfcc26308f1b4a":"g4SgJ"}],"eXg3m":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function get() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"5MJto"}],"5MJto":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"6kMRM":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"cEwkz"}],"cEwkz":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"5MJto"}],"bYgbM":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"8qiYi":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"caZWT":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"j9uPp","f7224aed72953ac4":"gHatU"}],"j9uPp":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"186yI","df551e12a7c872dd":"5MJto","1d34ea813cebff9c":"avIcM"}],"186yI":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"cEwkz"}],"avIcM":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"186yI"}],"gHatU":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"8coYF"}],"8coYF":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"2DXy7":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"e9xz8","b992ca9cdcf7937b":"8GxHy"}],"e9xz8":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"6kMRM","46fb53dace408c8e":"3v7K5","677bdc4d74d2f983":"8GxHy","80395bcde336a28b":"hjzk2","49552a7324952190":"8ofph","aea01c71276624bf":"9cieE"}],"3v7K5":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"39xdi"}],"39xdi":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"8GxHy":[function(require,module,exports) {
var _typeOf = require("@swc/helpers/_/_type_of");
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return (typeof it === "undefined" ? "undefined" : (0, _typeOf._)(it)) == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"@swc/helpers/_/_type_of":"h4q6w","6b6c481cdfb7df35":"enMbK","2af44fcbdbf14c83":"39xdi","76e903e830c40e7c":"eYLJz","7e2fe930b3598e22":"fAlbR"}],"enMbK":[function(require,module,exports) {
"use strict";
var global = require("dd9e9ae04e8684f7");
var isCallable = require("f1d62079325906cb");
var aFunction = function aFunction(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"dd9e9ae04e8684f7":"feqQB","f1d62079325906cb":"39xdi"}],"eYLJz":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"186yI"}],"fAlbR":[function(require,module,exports) {
var _typeOf = require("@swc/helpers/_/_type_of");
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && (0, _typeOf._)(Symbol.iterator) == "symbol";

},{"@swc/helpers/_/_type_of":"h4q6w","da4a972af0214ea0":"8PrTv"}],"8PrTv":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ecc4d354cb42bea8");
var fails = require("b37df495bcdc1d99");
var global = require("d8adff9188ad5fee");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"ecc4d354cb42bea8":"4AI1E","b37df495bcdc1d99":"5MJto","d8adff9188ad5fee":"feqQB"}],"4AI1E":[function(require,module,exports) {
"use strict";
var global = require("705d79ce07ed8cf");
var userAgent = require("5afb83a49cd74e4c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"705d79ce07ed8cf":"feqQB","5afb83a49cd74e4c":"boIAp"}],"boIAp":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"hjzk2":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"8sXzR","492a86e2970f6a26":"8coYF"}],"8sXzR":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"39xdi","fce2a7573db493fa":"cYVyX"}],"cYVyX":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"8ofph":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"6kMRM","c96b3a89fec6248a":"39xdi","551615fda0214f1b":"3v7K5"}],"9cieE":[function(require,module,exports) {
"use strict";
var global = require("dbe74e87464035e3");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dbe74e87464035e3":"feqQB","6a2cda01df6b4c79":"cMf9y","dccc28ffa5beeb54":"6F393","48d6af1225853d44":"5NrZK","9f762329148684":"8PrTv","1ce268781e409df2":"fAlbR"}],"cMf9y":[function(require,module,exports) {
"use strict";
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"8GIyd"}],"8GIyd":[function(require,module,exports) {
"use strict";
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("8756de416b94afec");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.37.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"7b43004672b1879f":"5KUL8","8756de416b94afec":"feqQB","dfb72a1d809f7b02":"978PB"}],"5KUL8":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"978PB":[function(require,module,exports) {
"use strict";
var global = require("70259c1dd4aa0e14");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"70259c1dd4aa0e14":"feqQB"}],"6F393":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"186yI","ab17c4f45fcf0841":"doCas"}],"doCas":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"gHatU"}],"5NrZK":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"186yI"}],"g4SgJ":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function get() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"eXg3m","8aee5d88a5f9b6b5":"5MJto","1db4d60148afcf21":"117Vf"}],"117Vf":[function(require,module,exports) {
"use strict";
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"feqQB","824df78b2e007250":"3v7K5"}],"fQRw3":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"eXg3m","189ab650b8f71085":"fdwBP","1168c8162aa30435":"8qiYi"}],"fdwBP":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"eXg3m","d482f9e5478795e8":"g4SgJ","b6ad7537efb06f4b":"iQ9g4","16365a73399e7fe7":"18ynF","fab1d366c47796d9":"2DXy7"}],"iQ9g4":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"eXg3m","249a5b857c2dfccd":"5MJto"}],"18ynF":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"3v7K5"}],"aSXv0":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"39xdi","9ebb3e3004fccc0a":"fdwBP","f10cc812a3094053":"iWjsj","d354802d852d9c2b":"978PB"}],"iWjsj":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function makeBuiltIn(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"186yI","13360f2842eba261":"5MJto","103e488c0928755a":"39xdi","cbf9b0e0779cc368":"6F393","3f2eb7efeae2f72b":"eXg3m","548b10f284264c72":"97gqp","358f00f3103bd55b":"iDBZV","9b2ce14119fd2412":"oc7Oi"}],"97gqp":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"eXg3m","4eabfd8f83afc9d5":"6F393"}],"iDBZV":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"186yI","40ed9a4f6ae66648":"39xdi","485d48d6f4c6739e":"8GIyd"}],"oc7Oi":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function getterFor(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function set(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function get(it) {
        return store.get(it) || {};
    };
    has = function has(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function set(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function get(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function has(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"eJUuG","ca46b44b6201ccd7":"feqQB","f82e6cc0ac249fa5":"3v7K5","c0ae163eea4ef97":"fQRw3","6dea7358344877bb":"6F393","3e035a1241da2f0":"8GIyd","88d6ccc27e779e5a":"kZusK","d40b9b3abdbb956e":"kTArm"}],"eJUuG":[function(require,module,exports) {
"use strict";
var global = require("6bd2547a42528a9c");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6bd2547a42528a9c":"feqQB","aa77fff8d5ef0565":"39xdi"}],"kZusK":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"cMf9y","90b4ffb58508a6e5":"5NrZK"}],"kTArm":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"ljWgh":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"6F393","88cb809f98beddc6":"4gxuJ","10ea642aad5f7c21":"ljH3i","39ff598ce822187e":"fdwBP"}],"4gxuJ":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"enMbK","2b8e77cbdbe3db7a":"186yI","d703bcb62fcda216":"4Y5Be","157674bad2772c6d":"go3V8","a09e060b9cae3c6c":"18ynF"}],"4Y5Be":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"afidB","2c933f93dd98f385":"5uKMB"}],"afidB":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"186yI","3183fe0b0bf6f6ac":"6F393","28192ac12e934672":"caZWT","a5f9c5d8e993ccd6":"hMg8M","57775908f1581bc6":"kTArm"}],"hMg8M":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function createMethod(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"caZWT","212b13aecfa48226":"1rBGX","e5a8b3e1da4c5637":"6YcZB"}],"1rBGX":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"Veojw"}],"Veojw":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"gfd8C"}],"gfd8C":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"6YcZB":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"bcUQa"}],"bcUQa":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"Veojw"}],"5uKMB":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"go3V8":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"ddPYi":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function normalize(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"5MJto","8b1ecdaf59f07210":"39xdi"}],"dXTb7":[function(require,module,exports) {
"use strict";
var global = require("1b4555a3a97d5ef1");
var classof = require("779f783a397f138");
module.exports = classof(global.process) === "process";

},{"1b4555a3a97d5ef1":"feqQB","779f783a397f138":"avIcM"}],"hoQWf":[function(require,module,exports) {
"use strict";
/* eslint-disable no-proto -- safe */ var uncurryThisAccessor = require("995a94425a563d6");
var isObject = require("caa27fe2635f1f44");
var requireObjectCoercible = require("a751660a0fcdf70");
var aPossiblePrototype = require("6e2c833ee2a62cf6");
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);

},{"995a94425a563d6":"gsRLx","caa27fe2635f1f44":"3v7K5","a751660a0fcdf70":"gHatU","6e2c833ee2a62cf6":"heFtf"}],"gsRLx":[function(require,module,exports) {
"use strict";
var uncurryThis = require("27a2d181325e1926");
var aCallable = require("36b26076b1e2fac1");
module.exports = function(object, key, method) {
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {}
};

},{"27a2d181325e1926":"186yI","36b26076b1e2fac1":"8sXzR"}],"heFtf":[function(require,module,exports) {
"use strict";
var isPossiblePrototype = require("fcc5bbb526d602c6");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
};

},{"fcc5bbb526d602c6":"gVJNn"}],"gVJNn":[function(require,module,exports) {
"use strict";
var isObject = require("a504c97d35bacd6c");
module.exports = function(argument) {
    return isObject(argument) || argument === null;
};

},{"a504c97d35bacd6c":"3v7K5"}],"aW7iM":[function(require,module,exports) {
"use strict";
var defineProperty = require("93a3d85da48077c").f;
var hasOwn = require("2ebf7179e87d878f");
var wellKnownSymbol = require("5b1eb5d1639e9eb7");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
module.exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"93a3d85da48077c":"fdwBP","2ebf7179e87d878f":"6F393","5b1eb5d1639e9eb7":"9cieE"}],"fDZWW":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("b05e11590de6536b");
var defineBuiltInAccessor = require("5ccd92fa5628281e");
var wellKnownSymbol = require("5145e81a7788c772");
var DESCRIPTORS = require("19428004aa07279c");
var SPECIES = wellKnownSymbol("species");
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
        configurable: true,
        get: function get() {
            return this;
        }
    });
};

},{"b05e11590de6536b":"enMbK","5ccd92fa5628281e":"lSLDY","5145e81a7788c772":"9cieE","19428004aa07279c":"eXg3m"}],"lSLDY":[function(require,module,exports) {
"use strict";
var makeBuiltIn = require("5bd1cd8472955124");
var defineProperty = require("1413185c6323bbbc");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"5bd1cd8472955124":"iWjsj","1413185c6323bbbc":"fdwBP"}],"7GDzw":[function(require,module,exports) {
"use strict";
var isPrototypeOf = require("55f8840091c5bf21");
var $TypeError = TypeError;
module.exports = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError("Incorrect invocation");
};

},{"55f8840091c5bf21":"eYLJz"}],"7Pd0k":[function(require,module,exports) {
"use strict";
var anObject = require("1dd3546388607f52");
var aConstructor = require("1407b26f20411731");
var isNullOrUndefined = require("e59a7a10597b8e96");
var wellKnownSymbol = require("16c256a8cc3c03fd");
var SPECIES = wellKnownSymbol("species");
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"1dd3546388607f52":"18ynF","1407b26f20411731":"h4PXu","e59a7a10597b8e96":"8coYF","16c256a8cc3c03fd":"9cieE"}],"h4PXu":[function(require,module,exports) {
"use strict";
var isConstructor = require("f0753b26326019c1");
var tryToString = require("8e6a26f37529644e");
var $TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
module.exports = function(argument) {
    if (isConstructor(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a constructor");
};

},{"f0753b26326019c1":"9uZVq","8e6a26f37529644e":"cYVyX"}],"9uZVq":[function(require,module,exports) {
"use strict";
var uncurryThis = require("3b3e7fa8cfe4b3ac");
var fails = require("84df2127d2d40501");
var isCallable = require("ae35eceee587c4bc");
var classof = require("7bd40df22601ee7e");
var getBuiltIn = require("271ff92378cbc486");
var inspectSource = require("74840ba4357c1c30");
var noop = function noop() {};
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, [], argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"3b3e7fa8cfe4b3ac":"186yI","84df2127d2d40501":"5MJto","ae35eceee587c4bc":"39xdi","7bd40df22601ee7e":"3i5NS","271ff92378cbc486":"enMbK","74840ba4357c1c30":"iDBZV"}],"3i5NS":[function(require,module,exports) {
"use strict";
var TO_STRING_TAG_SUPPORT = require("397e535b3976d304");
var isCallable = require("eebd8012c2d2c3ae");
var classofRaw = require("8da113eeaf06c4ba");
var wellKnownSymbol = require("df252844008f634");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"397e535b3976d304":"3cPQZ","eebd8012c2d2c3ae":"39xdi","8da113eeaf06c4ba":"avIcM","df252844008f634":"9cieE"}],"3cPQZ":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("6306cd4835715127");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"6306cd4835715127":"9cieE"}],"9pyeG":[function(require,module,exports) {
"use strict";
var global = require("1e8ed58235e9956a");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("fdfdeccf85e81d4f");
var IS_NODE = require("fcf929779abbf29c");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function run(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function runner(id) {
    return function() {
        run(id);
    };
};
var eventListener = function eventListener(event) {
    run(event.data);
};
var globalPostMessageDefer = function globalPostMessageDefer(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function defer(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function defer(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function defer(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function defer(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"feqQB","e574be68c288c7c8":"70RGJ","df212787338802d3":"7RbPi","afdf018c2d01bbc6":"39xdi","35a3e849940fd612":"6F393","b8bf5434d2248ca7":"5MJto","731f9370cc21fc3b":"2mv3g","ec358060964e4bde":"gCvaI","907adb6d219da7a3":"117Vf","f398561ebd49a798":"csS29","fdfdeccf85e81d4f":"7IAid","fcf929779abbf29c":"dXTb7"}],"70RGJ":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"cEwkz"}],"7RbPi":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"jlH3X","547ee4f9dab0cc76":"8sXzR","5acd31cba656d393":"cEwkz"}],"jlH3X":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"avIcM","9daa4dbbca634c9e":"186yI"}],"2mv3g":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"enMbK"}],"gCvaI":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"186yI"}],"csS29":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"7IAid":[function(require,module,exports) {
"use strict";
var userAgent = require("d96985a79ddda108");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"boIAp"}],"7LSwj":[function(require,module,exports) {
"use strict";
var global = require("f9ebf18f73555047");
var safeGetBuiltIn = require("d65d53880ca448da");
var bind = require("c6f841b26dc6586e");
var macrotask = require("e7b8d665c6b82c12").set;
var Queue = require("78ca3b778736fc30");
var IS_IOS = require("78206ea6a34f1432");
var IS_IOS_PEBBLE = require("810a6a1623ff46c9");
var IS_WEBOS_WEBKIT = require("be9a795f3265135a");
var IS_NODE = require("a854b07044df85f9");
var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
var microtask = safeGetBuiltIn("queueMicrotask");
var notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!microtask) {
    var queue = new Queue();
    var flush = function flush() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(fn = queue.get())try {
            fn();
        } catch (error) {
            if (queue.head) notify();
            throw error;
        }
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
        toggle = true;
        node = document.createTextNode("");
        new MutationObserver(flush).observe(node, {
            characterData: true
        });
        notify = function notify() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise;
        then = bind(promise.then, promise);
        notify = function notify() {
            then(flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function notify() {
        process.nextTick(flush);
    };
    else {
        // `webpack` dev server bug on IE global methods - use bind(fn, global)
        macrotask = bind(macrotask, global);
        notify = function notify() {
            macrotask(flush);
        };
    }
    microtask = function microtask(fn) {
        if (!queue.head) notify();
        queue.add(fn);
    };
}
module.exports = microtask;

},{"f9ebf18f73555047":"feqQB","d65d53880ca448da":"i0y7w","c6f841b26dc6586e":"7RbPi","e7b8d665c6b82c12":"9pyeG","78ca3b778736fc30":"lJd1L","78206ea6a34f1432":"7IAid","810a6a1623ff46c9":"dW7ym","be9a795f3265135a":"6HUdA","a854b07044df85f9":"dXTb7"}],"i0y7w":[function(require,module,exports) {
"use strict";
var global = require("1dbee6089d53c11");
var DESCRIPTORS = require("8329936952af7ff");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Avoid NodeJS experimental warning
module.exports = function(name) {
    if (!DESCRIPTORS) return global[name];
    var descriptor = getOwnPropertyDescriptor(global, name);
    return descriptor && descriptor.value;
};

},{"1dbee6089d53c11":"feqQB","8329936952af7ff":"eXg3m"}],"lJd1L":[function(require,module,exports) {
"use strict";
var Queue = function Queue() {
    this.head = null;
    this.tail = null;
};
Queue.prototype = {
    add: function add(item) {
        var entry = {
            item: item,
            next: null
        };
        var tail = this.tail;
        if (tail) tail.next = entry;
        else this.head = entry;
        this.tail = entry;
    },
    get: function get() {
        var entry = this.head;
        if (entry) {
            var next = this.head = entry.next;
            if (next === null) this.tail = null;
            return entry.item;
        }
    }
};
module.exports = Queue;

},{}],"dW7ym":[function(require,module,exports) {
"use strict";
var userAgent = require("2c9b1afd0f0a383e");
module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";

},{"2c9b1afd0f0a383e":"boIAp"}],"6HUdA":[function(require,module,exports) {
"use strict";
var userAgent = require("da9a948bcd2e316f");
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"da9a948bcd2e316f":"boIAp"}],"lwj38":[function(require,module,exports) {
"use strict";
module.exports = function(a, b) {
    try {
        // eslint-disable-next-line no-console -- safe
        arguments.length === 1 ? console.error(a) : console.error(a, b);
    } catch (error) {}
};

},{}],"kvYfw":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"87nR6":[function(require,module,exports) {
"use strict";
var global = require("7f3b29f6ada6bd7c");
module.exports = global.Promise;

},{"7f3b29f6ada6bd7c":"feqQB"}],"8ftR7":[function(require,module,exports) {
"use strict";
var global = require("70b8e3d627774735");
var NativePromiseConstructor = require("914dda54bcca9f98");
var isCallable = require("9560dd8306c037cf");
var isForced = require("dc1381594b318fd4");
var inspectSource = require("f6b84f5d53cc51bf");
var wellKnownSymbol = require("28acb9f62af6dfc2");
var IS_BROWSER = require("365cfce89d7d1c43");
var IS_DENO = require("4978950dac02062d");
var IS_PURE = require("c00f2fe103f19409");
var V8_VERSION = require("290077ea0def54e8");
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        // Detect correctness of subclassing with @@species support
        var promise = new NativePromiseConstructor(function(resolve) {
            resolve(1);
        });
        var FakePromise = function FakePromise(exec) {
            exec(function() {}, function() {});
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {}) instanceof FakePromise;
        if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});
module.exports = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING: SUBCLASSING
};

},{"70b8e3d627774735":"feqQB","914dda54bcca9f98":"87nR6","9560dd8306c037cf":"39xdi","dc1381594b318fd4":"ddPYi","f6b84f5d53cc51bf":"iDBZV","28acb9f62af6dfc2":"9cieE","365cfce89d7d1c43":"g9RZN","4978950dac02062d":"eL8s4","c00f2fe103f19409":"5KUL8","290077ea0def54e8":"4AI1E"}],"g9RZN":[function(require,module,exports) {
"use strict";
var IS_DENO = require("eb45fdf61d6e295e");
var IS_NODE = require("29d6bb6efdcc2fba");
module.exports = !IS_DENO && !IS_NODE && typeof window == "object" && typeof document == "object";

},{"eb45fdf61d6e295e":"eL8s4","29d6bb6efdcc2fba":"dXTb7"}],"eL8s4":[function(require,module,exports) {
"use strict";
/* global Deno -- Deno case */ module.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";

},{}],"cPhhb":[function(require,module,exports) {
"use strict";
var aCallable = require("b85cb5089dafddf1");
var $TypeError = TypeError;
var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw new $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"b85cb5089dafddf1":"8sXzR"}],"ln11F":[function(require,module,exports) {
"use strict";
var $ = require("5fe91bc37669c5a0");
var call = require("f3e846242a85204b");
var aCallable = require("b44cc3ada152502d");
var newPromiseCapabilityModule = require("598afe33e3f52cb1");
var perform = require("e989f176969dcec5");
var iterate = require("3f72073566ddc960");
var PROMISE_STATICS_INCORRECT_ITERATION = require("881fce5de451c4fe");
// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({
    target: "Promise",
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                call($promiseResolve, C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"5fe91bc37669c5a0":"eg2th","f3e846242a85204b":"6kMRM","b44cc3ada152502d":"8sXzR","598afe33e3f52cb1":"cPhhb","e989f176969dcec5":"kvYfw","3f72073566ddc960":"4tCDT","881fce5de451c4fe":"isNKz"}],"4tCDT":[function(require,module,exports) {
"use strict";
var bind = require("2f267ed50e670495");
var call = require("c0af58bb1ef1cc62");
var anObject = require("7fa6542c03ca9239");
var tryToString = require("fa596d1a4c07b72a");
var isArrayIteratorMethod = require("fd753cc641a6f10a");
var lengthOfArrayLike = require("2a15dee148d3db96");
var isPrototypeOf = require("417f9a13deeb58a6");
var getIterator = require("43af53be1b24dae5");
var getIteratorMethod = require("bf7ad32b21aed0b4");
var iteratorClose = require("5241389e1d6eeb73");
var $TypeError = TypeError;
var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function stop(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
    };
    var callFn = function callFn(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"2f267ed50e670495":"7RbPi","c0af58bb1ef1cc62":"6kMRM","7fa6542c03ca9239":"18ynF","fa596d1a4c07b72a":"cYVyX","fd753cc641a6f10a":"7xXt0","2a15dee148d3db96":"6YcZB","417f9a13deeb58a6":"eYLJz","43af53be1b24dae5":"4ncoK","bf7ad32b21aed0b4":"5kkWj","5241389e1d6eeb73":"ie6gH"}],"7xXt0":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("85b004b6ab4bc5da");
var Iterators = require("6de391ad2976ca02");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"85b004b6ab4bc5da":"9cieE","6de391ad2976ca02":"gppd9"}],"gppd9":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"4ncoK":[function(require,module,exports) {
"use strict";
var call = require("132ebf774107ae29");
var aCallable = require("e248489b4825ceb7");
var anObject = require("18a343d2ef625577");
var tryToString = require("7e576a1564cef99e");
var getIteratorMethod = require("4a7b0311be0471b2");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + " is not iterable");
};

},{"132ebf774107ae29":"6kMRM","e248489b4825ceb7":"8sXzR","18a343d2ef625577":"18ynF","7e576a1564cef99e":"cYVyX","4a7b0311be0471b2":"5kkWj"}],"5kkWj":[function(require,module,exports) {
"use strict";
var classof = require("32d61dafd81dde78");
var getMethod = require("84e24a6ac7559d3a");
var isNullOrUndefined = require("f0707282c0d93eeb");
var Iterators = require("1c181d5c49efd5d1");
var wellKnownSymbol = require("d10d0e0ae49498c5");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
};

},{"32d61dafd81dde78":"3i5NS","84e24a6ac7559d3a":"hjzk2","f0707282c0d93eeb":"8coYF","1c181d5c49efd5d1":"gppd9","d10d0e0ae49498c5":"9cieE"}],"ie6gH":[function(require,module,exports) {
"use strict";
var call = require("a4a3a7d4a45c4219");
var anObject = require("feb876e7da2df7bd");
var getMethod = require("2e660cdfabd9c61f");
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"a4a3a7d4a45c4219":"6kMRM","feb876e7da2df7bd":"18ynF","2e660cdfabd9c61f":"hjzk2"}],"isNKz":[function(require,module,exports) {
"use strict";
var NativePromiseConstructor = require("d3fcaf55cfa61757");
var checkCorrectnessOfIteration = require("27318831369e2a7e");
var FORCED_PROMISE_CONSTRUCTOR = require("a7dca7fabf4d8c44").CONSTRUCTOR;
module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
    NativePromiseConstructor.all(iterable).then(undefined, function() {});
});

},{"d3fcaf55cfa61757":"87nR6","27318831369e2a7e":"ia0B9","a7dca7fabf4d8c44":"8ftR7"}],"ia0B9":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("a5154de5c7fcf21e");
var ITERATOR = wellKnownSymbol("iterator");
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function next() {
            return {
                done: !!called++
            };
        },
        "return": function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {}
module.exports = function(exec, SKIP_CLOSING) {
    try {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) {
        return false;
    } // workaround of old WebKit + `eval` bug
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[ITERATOR] = function() {
            return {
                next: function next() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
};

},{"a5154de5c7fcf21e":"9cieE"}],"bVRet":[function(require,module,exports) {
"use strict";
var $ = require("f9109f39e0c1eace");
var IS_PURE = require("b0f691f2694fd89e");
var FORCED_PROMISE_CONSTRUCTOR = require("f07c13c93306bd7f").CONSTRUCTOR;
var NativePromiseConstructor = require("31561c9d3d855c60");
var getBuiltIn = require("1ba3086b4a897ac4");
var isCallable = require("7dd264a6360c2a5a");
var defineBuiltIn = require("baa11ffea0878c3e");
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({
    target: "Promise",
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR,
    real: true
}, {
    "catch": function(onRejected) {
        return this.then(undefined, onRejected);
    }
});
// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn("Promise").prototype["catch"];
    if (NativePromisePrototype["catch"] !== method) defineBuiltIn(NativePromisePrototype, "catch", method, {
        unsafe: true
    });
}

},{"f9109f39e0c1eace":"eg2th","b0f691f2694fd89e":"5KUL8","f07c13c93306bd7f":"8ftR7","31561c9d3d855c60":"87nR6","1ba3086b4a897ac4":"enMbK","7dd264a6360c2a5a":"39xdi","baa11ffea0878c3e":"aSXv0"}],"3x9kF":[function(require,module,exports) {
"use strict";
var $ = require("4068f648151c1330");
var call = require("658417f940db2db2");
var aCallable = require("5199435aa17f3955");
var newPromiseCapabilityModule = require("f7224a0a89bb6794");
var perform = require("477a19c99b10aa32");
var iterate = require("970f1b07d9125958");
var PROMISE_STATICS_INCORRECT_ITERATION = require("d71553795a1298b8");
// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({
    target: "Promise",
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
                call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"4068f648151c1330":"eg2th","658417f940db2db2":"6kMRM","5199435aa17f3955":"8sXzR","f7224a0a89bb6794":"cPhhb","477a19c99b10aa32":"kvYfw","970f1b07d9125958":"4tCDT","d71553795a1298b8":"isNKz"}],"d2OUM":[function(require,module,exports) {
"use strict";
var $ = require("ec46f4bb3616ad7b");
var newPromiseCapabilityModule = require("3f8b88f93499a7cd");
var FORCED_PROMISE_CONSTRUCTOR = require("2ae203822949c331").CONSTRUCTOR;
// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({
    target: "Promise",
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        var capabilityReject = capability.reject;
        capabilityReject(r);
        return capability.promise;
    }
});

},{"ec46f4bb3616ad7b":"eg2th","3f8b88f93499a7cd":"cPhhb","2ae203822949c331":"8ftR7"}],"6wJNV":[function(require,module,exports) {
"use strict";
var $ = require("a4f3ef37c946dd2b");
var getBuiltIn = require("2794b78b0ca3694f");
var IS_PURE = require("c6e440c7abf54a3a");
var NativePromiseConstructor = require("c3eef09c8272b2fa");
var FORCED_PROMISE_CONSTRUCTOR = require("ca944314fb589e9b").CONSTRUCTOR;
var promiseResolve = require("95f41bf564123591");
var PromiseConstructorWrapper = getBuiltIn("Promise");
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({
    target: "Promise",
    stat: true,
    forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
}, {
    resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
    }
});

},{"a4f3ef37c946dd2b":"eg2th","2794b78b0ca3694f":"enMbK","c6e440c7abf54a3a":"5KUL8","c3eef09c8272b2fa":"87nR6","ca944314fb589e9b":"8ftR7","95f41bf564123591":"gdzNC"}],"gdzNC":[function(require,module,exports) {
"use strict";
var anObject = require("5304a07f7517b45f");
var isObject = require("6179ead91f16d16e");
var newPromiseCapability = require("1e7f70c2e43192d5");
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"5304a07f7517b45f":"18ynF","6179ead91f16d16e":"3v7K5","1e7f70c2e43192d5":"cPhhb"}],"cuVAN":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"ghwDC":[function(require,module,exports) {
"use strict";
var call = require("1a72ba86dc4099cd");
var fixRegExpWellKnownSymbolLogic = require("3e8300c8dcd37861");
var anObject = require("4e367ba2e602279b");
var isNullOrUndefined = require("a9817085717103ac");
var toLength = require("3ad5c9f9719d1735");
var toString = require("a1912f278569b4e6");
var requireObjectCoercible = require("d83ac9e10edfa0ef");
var getMethod = require("4fa13f5559b9cbba");
var advanceStringIndex = require("357167b0f8a6ba45");
var regExpExec = require("3b40f00a568e6a6b");
// @@match logic
fixRegExpWellKnownSymbolLogic("match", function(MATCH, nativeMatch, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
            return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function(string) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(nativeMatch, rx, S);
            if (res.done) return res.value;
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = toString(result[0]);
                A[n] = matchStr;
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"1a72ba86dc4099cd":"6kMRM","3e8300c8dcd37861":"4kJ2X","4e367ba2e602279b":"18ynF","a9817085717103ac":"8coYF","3ad5c9f9719d1735":"bcUQa","a1912f278569b4e6":"5gq4I","d83ac9e10edfa0ef":"gHatU","4fa13f5559b9cbba":"hjzk2","357167b0f8a6ba45":"jFULm","3b40f00a568e6a6b":"j1EpO"}],"4kJ2X":[function(require,module,exports) {
"use strict";
// TODO: Remove from `core-js@4` since it's moved to entry points
require("a7057ee05361671");
var call = require("771b9a32e3d08596");
var defineBuiltIn = require("5a9ef6cc43262548");
var regexpExec = require("b286e3fd8e91d745");
var fails = require("f56adef42dd3c42");
var wellKnownSymbol = require("39c5bea895574e43");
var createNonEnumerableProperty = require("1c6881441295e4f4");
var SPECIES = wellKnownSymbol("species");
var RegExpPrototype = RegExp.prototype;
module.exports = function(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegExp methods
        var O = {};
        O[SYMBOL] = function() {
            return 7;
        };
        return ""[KEY](O) !== 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        if (KEY === "split") {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {};
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function() {
                return re;
            };
            re.flags = "";
            re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
            execCalled = true;
            return null;
        };
        re[SYMBOL]("");
        return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: call(nativeRegExpMethod, regexp, str, arg2)
                };
                return {
                    done: true,
                    value: call(nativeMethod, str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        defineBuiltIn(String.prototype, KEY, methods[0]);
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
};

},{"a7057ee05361671":"15pfY","771b9a32e3d08596":"6kMRM","5a9ef6cc43262548":"aSXv0","b286e3fd8e91d745":"jvtlB","f56adef42dd3c42":"5MJto","39c5bea895574e43":"9cieE","1c6881441295e4f4":"fQRw3"}],"15pfY":[function(require,module,exports) {
"use strict";
var $ = require("72ba4de9841213e");
var exec = require("d4ebaff1663cc5b9");
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec
}, {
    exec: exec
});

},{"72ba4de9841213e":"eg2th","d4ebaff1663cc5b9":"jvtlB"}],"jvtlB":[function(require,module,exports) {
"use strict";
/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */ var call = require("698f504b4733b02d");
var uncurryThis = require("6d0d2df39383a10b");
var toString = require("382af5492ddc18e6");
var regexpFlags = require("96e0244464229d3");
var stickyHelpers = require("3bd1d72d4987e0ff");
var shared = require("12c3e6e355312395");
var create = require("38d060dff8e4ab54");
var getInternalState = require("aec1e11e2cd92d19").get;
var UNSUPPORTED_DOT_ALL = require("7d9db6b4177b833a");
var UNSUPPORTED_NCG = require("b26a8ca5152d0a8d");
var nativeReplace = shared("native-string-replace", String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis("".charAt);
var indexOf = uncurryThis("".indexOf);
var replace = uncurryThis("".replace);
var stringSlice = uncurryThis("".slice);
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    call(nativeExec, re1, "a");
    call(nativeExec, re2, "a");
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;
    if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
        flags = replace(flags, "y", "");
        if (indexOf(flags, "g") === -1) flags += "g";
        strCopy = stringSlice(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp("^(?:" + source + ")", flags);
    }
    if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
        if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
    call(nativeReplace, match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    if (match && groups) {
        match.groups = object = create(null);
        for(i = 0; i < groups.length; i++){
            group = groups[i];
            object[group[0]] = match[group[1]];
        }
    }
    return match;
};
module.exports = patchedExec;

},{"698f504b4733b02d":"6kMRM","6d0d2df39383a10b":"186yI","382af5492ddc18e6":"5gq4I","96e0244464229d3":"ll9tj","3bd1d72d4987e0ff":"374Lq","12c3e6e355312395":"cMf9y","38d060dff8e4ab54":"2aIW1","aec1e11e2cd92d19":"oc7Oi","7d9db6b4177b833a":"58C6j","b26a8ca5152d0a8d":"aPzgw"}],"5gq4I":[function(require,module,exports) {
"use strict";
var classof = require("3e4265f3f6994add");
var $String = String;
module.exports = function(argument) {
    if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
};

},{"3e4265f3f6994add":"3i5NS"}],"ll9tj":[function(require,module,exports) {
"use strict";
var anObject = require("136abace0aec2b5c");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"136abace0aec2b5c":"18ynF"}],"374Lq":[function(require,module,exports) {
"use strict";
var fails = require("797bef35e651cb5e");
var global = require("89bc0b5a5d5c9f99");
// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;
var UNSUPPORTED_Y = fails(function() {
    var re = $RegExp("a", "y");
    re.lastIndex = 2;
    return re.exec("abcd") !== null;
});
// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
    return !$RegExp("a", "y").sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp("^r", "gy");
    re.lastIndex = 2;
    return re.exec("str") !== null;
});
module.exports = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y
};

},{"797bef35e651cb5e":"5MJto","89bc0b5a5d5c9f99":"feqQB"}],"2aIW1":[function(require,module,exports) {
"use strict";
/* global ActiveXObject -- old IE, WSH */ var anObject = require("3bbe31d8f504111f");
var definePropertiesModule = require("a9712f03fc468b49");
var enumBugKeys = require("d9e0c389f84efa79");
var hiddenKeys = require("8a43b6a211717cde");
var html = require("78d31e3a50d79c6e");
var documentCreateElement = require("e29f7e32a0583f3");
var sharedKey = require("a6edaba97f293fc9");
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function EmptyConstructor() {};
var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(""));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function NullProtoObject1() {
    try {
        activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"3bbe31d8f504111f":"18ynF","a9712f03fc468b49":"43GLR","d9e0c389f84efa79":"5uKMB","8a43b6a211717cde":"kTArm","78d31e3a50d79c6e":"2mv3g","e29f7e32a0583f3":"117Vf","a6edaba97f293fc9":"kZusK"}],"43GLR":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("aa39c539d0a1ec3f");
var V8_PROTOTYPE_DEFINE_BUG = require("2e9118dcee7eb93e");
var definePropertyModule = require("d88f5f00164c2da2");
var anObject = require("12ac356c5e06e57d");
var toIndexedObject = require("3cbdc44082c2f8b8");
var objectKeys = require("634da70e74fce29b");
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"aa39c539d0a1ec3f":"eXg3m","2e9118dcee7eb93e":"iQ9g4","d88f5f00164c2da2":"fdwBP","12ac356c5e06e57d":"18ynF","3cbdc44082c2f8b8":"caZWT","634da70e74fce29b":"7AGNC"}],"7AGNC":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("fb982c683f43ec98");
var enumBugKeys = require("7cabc30df1982d48");
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"fb982c683f43ec98":"afidB","7cabc30df1982d48":"5uKMB"}],"58C6j":[function(require,module,exports) {
"use strict";
var fails = require("e4784e58ea762065");
var global = require("16fc714d526e0528");
// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp(".", "s");
    return !(re.dotAll && re.test("\n") && re.flags === "s");
});

},{"e4784e58ea762065":"5MJto","16fc714d526e0528":"feqQB"}],"aPzgw":[function(require,module,exports) {
"use strict";
var fails = require("b9b1a0fbdd999ded");
var global = require("504ba50ed83b9e32");
// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp("(?<a>b)", "g");
    return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
});

},{"b9b1a0fbdd999ded":"5MJto","504ba50ed83b9e32":"feqQB"}],"jFULm":[function(require,module,exports) {
"use strict";
var charAt = require("7830b1b106fe9c2f").charAt;
// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
};

},{"7830b1b106fe9c2f":"5gsET"}],"5gsET":[function(require,module,exports) {
"use strict";
var uncurryThis = require("8b9beff9818f042");
var toIntegerOrInfinity = require("d3e375e7697978fb");
var toString = require("545a72c28133c459");
var requireObjectCoercible = require("5bafa9e5b372669c");
var charAt = uncurryThis("".charAt);
var charCodeAt = uncurryThis("".charCodeAt);
var stringSlice = uncurryThis("".slice);
var createMethod = function createMethod(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
        first = charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"8b9beff9818f042":"186yI","d3e375e7697978fb":"Veojw","545a72c28133c459":"5gq4I","5bafa9e5b372669c":"gHatU"}],"j1EpO":[function(require,module,exports) {
"use strict";
var call = require("fe012fd0e62b041c");
var anObject = require("953f0ef3a583db2e");
var isCallable = require("7b1bebb22aa6d09f");
var classof = require("41458309d054e6d9");
var regexpExec = require("2da13aa8500d5870");
var $TypeError = TypeError;
// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
        var result = call(exec, R, S);
        if (result !== null) anObject(result);
        return result;
    }
    if (classof(R) === "RegExp") return call(regexpExec, R, S);
    throw new $TypeError("RegExp#exec called on incompatible receiver");
};

},{"fe012fd0e62b041c":"6kMRM","953f0ef3a583db2e":"18ynF","7b1bebb22aa6d09f":"39xdi","41458309d054e6d9":"avIcM","2da13aa8500d5870":"jvtlB"}],"bivd7":[function(require,module,exports) {
"use strict";
var apply = require("f8fd16f994f85406");
var call = require("b5234e1018cb2916");
var uncurryThis = require("c3560c75b4ad1ef2");
var fixRegExpWellKnownSymbolLogic = require("c4a2369a79c5aaa2");
var fails = require("daa534dec0372986");
var anObject = require("317f495e148be81e");
var isCallable = require("36464dd17d2a7224");
var isNullOrUndefined = require("cea091f017783d94");
var toIntegerOrInfinity = require("3847a5ff118f8ebb");
var toLength = require("effd88adfbb6b4bc");
var toString = require("953b724c90cd8db6");
var requireObjectCoercible = require("154963922e7c9354");
var advanceStringIndex = require("90f011aa61b831b4");
var getMethod = require("af552ab4c89e35be");
var getSubstitution = require("3726cfd8dc51c82c");
var regExpExec = require("6de55154ce28598");
var wellKnownSymbol = require("4b6a0c7e75a1080a");
var REPLACE = wellKnownSymbol("replace");
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis("".indexOf);
var stringSlice = uncurryThis("".slice);
var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
};
// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function() {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return "a".replace(/./, "$0") === "$0";
}();
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
    return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: "7"
        };
        return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return "".replace(re, "$<a>") !== "7";
});
// @@replace logic
fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
    return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
            return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function(string, replaceValue) {
            var rx = anObject(this);
            var S = toString(string);
            if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
                var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                if (res.done) return res.value;
            }
            var functionalReplace = isCallable(replaceValue);
            if (!functionalReplace) replaceValue = toString(replaceValue);
            var global = rx.global;
            var fullUnicode;
            if (global) {
                fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            var result;
            while(true){
                result = regExpExec(rx, S);
                if (result === null) break;
                push(results, result);
                if (!global) break;
                var matchStr = toString(result[0]);
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = toString(result[0]);
                var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                var captures = [];
                var replacement;
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)push(captures, maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = concat([
                        matched
                    ], captures, position, S);
                    if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
                    replacement = toString(apply(replaceValue, undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + stringSlice(S, nextSourcePosition);
        }
    ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

},{"f8fd16f994f85406":"70RGJ","b5234e1018cb2916":"6kMRM","c3560c75b4ad1ef2":"186yI","c4a2369a79c5aaa2":"4kJ2X","daa534dec0372986":"5MJto","317f495e148be81e":"18ynF","36464dd17d2a7224":"39xdi","cea091f017783d94":"8coYF","3847a5ff118f8ebb":"Veojw","effd88adfbb6b4bc":"bcUQa","953b724c90cd8db6":"5gq4I","154963922e7c9354":"gHatU","90f011aa61b831b4":"jFULm","af552ab4c89e35be":"hjzk2","3726cfd8dc51c82c":"h3nSw","6de55154ce28598":"j1EpO","4b6a0c7e75a1080a":"9cieE"}],"h3nSw":[function(require,module,exports) {
"use strict";
var uncurryThis = require("3cf51fea5d34c201");
var toObject = require("999f669befd62c27");
var floor = Math.floor;
var charAt = uncurryThis("".charAt);
var replace = uncurryThis("".replace);
var stringSlice = uncurryThis("".slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function(match, ch) {
        var capture;
        switch(charAt(ch, 0)){
            case "$":
                return "$";
            case "&":
                return matched;
            case "`":
                return stringSlice(str, 0, position);
            case "'":
                return stringSlice(str, tailPos);
            case "<":
                capture = namedCaptures[stringSlice(ch, 1, -1)];
                break;
            default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                    return match;
                }
                capture = captures[n - 1];
        }
        return capture === undefined ? "" : capture;
    });
};

},{"3cf51fea5d34c201":"186yI","999f669befd62c27":"doCas"}],"4TbWv":[function(require,module,exports) {
"use strict";
var $ = require("dde854d8a76d436d");
var uncurryThis = require("75ef62d12e51b46c");
var getOwnPropertyDescriptor = require("ff3b80c156be6132").f;
var toLength = require("573cc620487e2f6b");
var toString = require("3d6be1b7c00bafd");
var notARegExp = require("40ed833d044b85cd");
var requireObjectCoercible = require("7b57b8afdd10d7e4");
var correctIsRegExpLogic = require("80ffa3ecff44b920");
var IS_PURE = require("d76fe9fb1319d805");
var stringSlice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString(searchString);
        return stringSlice(that, index, index + search.length) === search;
    }
});

},{"dde854d8a76d436d":"eg2th","75ef62d12e51b46c":"jlH3X","ff3b80c156be6132":"ljH3i","573cc620487e2f6b":"bcUQa","3d6be1b7c00bafd":"5gq4I","40ed833d044b85cd":"6tdFT","7b57b8afdd10d7e4":"gHatU","80ffa3ecff44b920":"dagOn","d76fe9fb1319d805":"5KUL8"}],"6tdFT":[function(require,module,exports) {
"use strict";
var isRegExp = require("7b932b7711b6ae16");
var $TypeError = TypeError;
module.exports = function(it) {
    if (isRegExp(it)) throw new $TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"7b932b7711b6ae16":"89pu6"}],"89pu6":[function(require,module,exports) {
"use strict";
var isObject = require("4ca57df9821dbfa3");
var classof = require("b867bee476fc5018");
var wellKnownSymbol = require("42cd33b6dbd61bee");
var MATCH = wellKnownSymbol("match");
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === "RegExp");
};

},{"4ca57df9821dbfa3":"3v7K5","b867bee476fc5018":"avIcM","42cd33b6dbd61bee":"9cieE"}],"dagOn":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("303b9f26f388462e");
var MATCH = wellKnownSymbol("match");
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        "/./"[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return "/./"[METHOD_NAME](regexp);
        } catch (error2) {}
    }
    return false;
};

},{"303b9f26f388462e":"9cieE"}],"fEW8z":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("c8e067881939a0cb");
var addToUnscopables = require("275b8f0cb65b77aa");
var Iterators = require("21f4d3653c90f049");
var InternalStateModule = require("85efa8d5848315f6");
var defineProperty = require("94a17682acfdceb4").f;
var defineIterator = require("bb30bdef31147b17");
var createIterResultObject = require("d8384af5151f994c");
var IS_PURE = require("fdcc207797f592fe");
var DESCRIPTORS = require("11e42ff2bbda8d0a");
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, "Array", function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return createIterResultObject(undefined, true);
    }
    switch(state.kind){
        case "keys":
            return createIterResultObject(index, false);
        case "values":
            return createIterResultObject(target[index], false);
    }
    return createIterResultObject([
        index,
        target[index]
    ], false);
}, "values");
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
    defineProperty(values, "name", {
        value: "values"
    });
} catch (error) {}

},{"c8e067881939a0cb":"caZWT","275b8f0cb65b77aa":"8GkSN","21f4d3653c90f049":"gppd9","85efa8d5848315f6":"oc7Oi","94a17682acfdceb4":"fdwBP","bb30bdef31147b17":"tTU2w","d8384af5151f994c":"8NIAF","fdcc207797f592fe":"5KUL8","11e42ff2bbda8d0a":"eXg3m"}],"8GkSN":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("d4032cdcc50314e7");
var create = require("3ca2a6909ac2dcef");
var defineProperty = require("545ab457bf71d338").f;
var UNSCOPABLES = wellKnownSymbol("unscopables");
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"d4032cdcc50314e7":"9cieE","3ca2a6909ac2dcef":"2aIW1","545ab457bf71d338":"fdwBP"}],"tTU2w":[function(require,module,exports) {
"use strict";
var $ = require("923c1bf4a39ae90c");
var call = require("46a3f73465955199");
var IS_PURE = require("c1577e63189cf935");
var FunctionName = require("dc625e1bb584faf6");
var isCallable = require("d55d91c410baca17");
var createIteratorConstructor = require("3e4ae607dbb6e78b");
var getPrototypeOf = require("48ca4ae1d4998232");
var setPrototypeOf = require("1263258b63630933");
var setToStringTag = require("9b61caf69f87dfde");
var createNonEnumerableProperty = require("7f30a3ab1bf5e1c1");
var defineBuiltIn = require("c027b4da648348d3");
var wellKnownSymbol = require("d4ad91965213ee1");
var Iterators = require("b616a206eb405268");
var IteratorsCore = require("4f9ec7e9f5d20965");
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function returnThis() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return call(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    Iterators[NAME] = defaultIterator;
    return methods;
};

},{"923c1bf4a39ae90c":"eg2th","46a3f73465955199":"6kMRM","c1577e63189cf935":"5KUL8","dc625e1bb584faf6":"97gqp","d55d91c410baca17":"39xdi","3e4ae607dbb6e78b":"6w3Cj","48ca4ae1d4998232":"jjZqY","1263258b63630933":"hoQWf","9b61caf69f87dfde":"aW7iM","7f30a3ab1bf5e1c1":"fQRw3","c027b4da648348d3":"aSXv0","d4ad91965213ee1":"9cieE","b616a206eb405268":"gppd9","4f9ec7e9f5d20965":"hJ9OL"}],"6w3Cj":[function(require,module,exports) {
"use strict";
var IteratorPrototype = require("6d3197d79123a33d").IteratorPrototype;
var create = require("f19338a88747fb05");
var createPropertyDescriptor = require("cc176dfbf6ea0553");
var setToStringTag = require("bc433e6ab6880430");
var Iterators = require("2f833e0e1738e7e0");
var returnThis = function returnThis() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"6d3197d79123a33d":"hJ9OL","f19338a88747fb05":"2aIW1","cc176dfbf6ea0553":"8qiYi","bc433e6ab6880430":"aW7iM","2f833e0e1738e7e0":"gppd9"}],"hJ9OL":[function(require,module,exports) {
"use strict";
var fails = require("cdb9dcd93b52b3fc");
var isCallable = require("db955145706fc55a");
var isObject = require("83e5df3d56e8834f");
var create = require("45d6f1a3c372cdf6");
var getPrototypeOf = require("a97459767d74fdc3");
var defineBuiltIn = require("3bdf78f362001d7c");
var wellKnownSymbol = require("d3901e60df7842c9");
var IS_PURE = require("e736fd193ddc96e5");
var ITERATOR = wellKnownSymbol("iterator");
var BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
    return this;
});
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"cdb9dcd93b52b3fc":"5MJto","db955145706fc55a":"39xdi","83e5df3d56e8834f":"3v7K5","45d6f1a3c372cdf6":"2aIW1","a97459767d74fdc3":"jjZqY","3bdf78f362001d7c":"aSXv0","d3901e60df7842c9":"9cieE","e736fd193ddc96e5":"5KUL8"}],"jjZqY":[function(require,module,exports) {
"use strict";
var hasOwn = require("da54a59ea207dd");
var isCallable = require("71ab2a7bcc8c8fc8");
var toObject = require("7a3afd2bb40b0292");
var sharedKey = require("296d7a2db8e23969");
var CORRECT_PROTOTYPE_GETTER = require("58de29d5e883862f");
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
};

},{"da54a59ea207dd":"6F393","71ab2a7bcc8c8fc8":"39xdi","7a3afd2bb40b0292":"doCas","296d7a2db8e23969":"kZusK","58de29d5e883862f":"aUcsu"}],"aUcsu":[function(require,module,exports) {
"use strict";
var fails = require("85ffc28af2e8afc1");
module.exports = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"85ffc28af2e8afc1":"5MJto"}],"8NIAF":[function(require,module,exports) {
"use strict";
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function(value, done) {
    return {
        value: value,
        done: done
    };
};

},{}],"3EbzG":[function(require,module,exports) {
"use strict";
var global = require("bf384c7b7143ed0c");
var DOMIterables = require("b1dd6223fec045b2");
var DOMTokenListPrototype = require("2927608065790e8a");
var ArrayIteratorMethods = require("107ef5eaf95c92b0");
var createNonEnumerableProperty = require("2f02b421bbdb9eb4");
var setToStringTag = require("46e3db6eb678f758");
var wellKnownSymbol = require("6a4d2091548e6557");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
        }
        setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
};
for(var COLLECTION_NAME in DOMIterables)handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
handlePrototype(DOMTokenListPrototype, "DOMTokenList");

},{"bf384c7b7143ed0c":"feqQB","b1dd6223fec045b2":"dYIwu","2927608065790e8a":"f4u00","107ef5eaf95c92b0":"fEW8z","2f02b421bbdb9eb4":"fQRw3","46e3db6eb678f758":"aW7iM","6a4d2091548e6557":"9cieE"}],"dYIwu":[function(require,module,exports) {
"use strict";
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"f4u00":[function(require,module,exports) {
"use strict";
// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = require("a6fc44eba1875331");
var classList = documentCreateElement("span").classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

},{"a6fc44eba1875331":"117Vf"}],"h0Gbc":[function(require,module,exports) {
var toPropertyKey = require("29ac19868e7f119");
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"29ac19868e7f119":"cw3Mf"}],"cw3Mf":[function(require,module,exports) {
var _typeof = require("a14bd529aa4ac1cd")["default"];
var toPrimitive = require("2713647ce51d8c75");
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"a14bd529aa4ac1cd":"l5ibk","2713647ce51d8c75":"91eQv"}],"91eQv":[function(require,module,exports) {
var _typeof = require("e0211298897b2d31")["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"e0211298897b2d31":"l5ibk"}],"2f08x":[function(require,module,exports) {
"use strict";
var $ = require("aa6d80bc3b697f48");
var $reduce = require("1ee240c0462acdf8").left;
var arrayMethodIsStrict = require("161424d627b72094");
var CHROME_VERSION = require("380258b26b396256");
var IS_NODE = require("d0138b2fef72c463");
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: "Array",
    proto: true,
    forced: FORCED
}, {
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
});

},{"aa6d80bc3b697f48":"eg2th","1ee240c0462acdf8":"lY4Cc","161424d627b72094":"2VsWI","380258b26b396256":"4AI1E","d0138b2fef72c463":"dXTb7"}],"lY4Cc":[function(require,module,exports) {
"use strict";
var aCallable = require("93e7a99f8d3bc817");
var toObject = require("915d05570b61a3c9");
var IndexedObject = require("da310552be96f5db");
var lengthOfArrayLike = require("f4209260f2003c23");
var $TypeError = TypeError;
var REDUCE_EMPTY = "Reduce of empty array with no initial value";
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function createMethod(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = lengthOfArrayLike(O);
        aCallable(callbackfn);
        if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw new $TypeError(REDUCE_EMPTY);
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"93e7a99f8d3bc817":"8sXzR","915d05570b61a3c9":"doCas","da310552be96f5db":"j9uPp","f4209260f2003c23":"6YcZB"}],"2VsWI":[function(require,module,exports) {
"use strict";
var fails = require("77f0d106558781f");
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function() {
            return 1;
        }, 1);
    });
};

},{"77f0d106558781f":"5MJto"}],"aVgPi":[function(require,module,exports) {
"use strict";
var $ = require("b3cd31deb9d32a8c");
var uncurryThis = require("c719ddda901eac13");
var getOwnPropertyDescriptor = require("e75304a6599a5e3c").f;
var toLength = require("99883df659b0f5cb");
var toString = require("e5d8defa036db553");
var notARegExp = require("4c78f4ce8264459e");
var requireObjectCoercible = require("da4ce5f132e95194");
var correctIsRegExpLogic = require("58da9c5323c25a0f");
var IS_PURE = require("e85ff4c5cebafc14");
var slice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "endsWith");
    return descriptor && !descriptor.writable;
}();
// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = that.length;
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = toString(searchString);
        return slice(that, end - search.length, end) === search;
    }
});

},{"b3cd31deb9d32a8c":"eg2th","c719ddda901eac13":"jlH3X","e75304a6599a5e3c":"ljH3i","99883df659b0f5cb":"bcUQa","e5d8defa036db553":"5gq4I","4c78f4ce8264459e":"6tdFT","da4ce5f132e95194":"gHatU","58da9c5323c25a0f":"dagOn","e85ff4c5cebafc14":"5KUL8"}],"3bddA":[function(require,module,exports) {
"use strict";
var call = require("731f563170e1c210");
var uncurryThis = require("897d2896927b6e02");
var fixRegExpWellKnownSymbolLogic = require("508b20464a6b5517");
var anObject = require("f367d08a248e8be6");
var isNullOrUndefined = require("31434b1694b351f9");
var requireObjectCoercible = require("9311135c1a422443");
var speciesConstructor = require("55e35ece01e7fba0");
var advanceStringIndex = require("8bb35ae79f87add1");
var toLength = require("49f0536d42765acd");
var toString = require("b9744dd298874d6b");
var getMethod = require("7948c6f9df3714fb");
var regExpExec = require("2c9f875738c0535c");
var stickyHelpers = require("ff11a5dc8ee4e1e9");
var fails = require("1a700d67237f1f2b");
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis("".slice);
// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re);
    return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
});
var BUGGY = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
// @@split logic
fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit = "0".split(undefined, 0).length ? function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    } : nativeSplit;
    return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
            return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(string, limit) {
            var rx = anObject(this);
            var S = toString(string);
            if (!BUGGY) {
                var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
                if (res.done) return res.value;
            }
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return regExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    push(A, stringSlice(S, p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        push(A, z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            push(A, stringSlice(S, p));
            return A;
        }
    ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

},{"731f563170e1c210":"6kMRM","897d2896927b6e02":"186yI","508b20464a6b5517":"4kJ2X","f367d08a248e8be6":"18ynF","31434b1694b351f9":"8coYF","9311135c1a422443":"gHatU","55e35ece01e7fba0":"7Pd0k","8bb35ae79f87add1":"jFULm","49f0536d42765acd":"bcUQa","b9744dd298874d6b":"5gq4I","7948c6f9df3714fb":"hjzk2","2c9f875738c0535c":"j1EpO","ff11a5dc8ee4e1e9":"374Lq","1a700d67237f1f2b":"5MJto"}],"386Xm":[function(require,module,exports) {
var global = arguments[3];
var now = require("cf76948a525d1513"), root = typeof window === "undefined" ? global : window, vendors = [
    "moz",
    "webkit"
], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + "Request" + suffix];
    caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function raf(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i = 0; i < cp.length; i++){
                    if (!cp[i].cancelled) try {
                        cp[i].callback(last);
                    } catch (e) {
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function caf(handle) {
        for(var i = 0; i < queue.length; i++)if (queue[i].handle === handle) queue[i].cancelled = true;
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) object = root;
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};

},{"cf76948a525d1513":"av1yH"}],"av1yH":[function(require,module,exports) {
var process = require("f348cfb52b253442");
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function getNanoSeconds() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{"f348cfb52b253442":"9rrIu"}],"dtNtZ":[function(require,module,exports) {
"use strict";
var $ = require("4a60febef79e9fd2");
var $trim = require("aa85dc53780a7a31").trim;
var forcedStringTrimMethod = require("d62e07fb0a0f0c26");
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: "String",
    proto: true,
    forced: forcedStringTrimMethod("trim")
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"4a60febef79e9fd2":"eg2th","aa85dc53780a7a31":"1nxeS","d62e07fb0a0f0c26":"kmFTq"}],"1nxeS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("17f5a3ff1a1c6ce6");
var requireObjectCoercible = require("56083d5e0450dab9");
var toString = require("3c5616504c7d56e9");
var whitespaces = require("eacd32ca91d3c555");
var replace = uncurryThis("".replace);
var ltrim = RegExp("^[" + whitespaces + "]+");
var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function createMethod(TYPE) {
    return function($this) {
        var string = toString(requireObjectCoercible($this));
        if (TYPE & 1) string = replace(string, ltrim, "");
        if (TYPE & 2) string = replace(string, rtrim, "$1");
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"17f5a3ff1a1c6ce6":"186yI","56083d5e0450dab9":"gHatU","3c5616504c7d56e9":"5gq4I","eacd32ca91d3c555":"67XyU"}],"67XyU":[function(require,module,exports) {
"use strict";
// a string of all valid unicode whitespaces
module.exports = "	\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

},{}],"kmFTq":[function(require,module,exports) {
"use strict";
var PROPER_FUNCTION_NAME = require("9e0c4c0dbddf03dd").PROPER;
var fails = require("92328d780355dc79");
var whitespaces = require("8c0d7fed4094a2b6");
var non = "\u200B\x85\u180E";
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"9e0c4c0dbddf03dd":"97gqp","92328d780355dc79":"5MJto","8c0d7fed4094a2b6":"67XyU"}],"057VV":[function(require,module,exports) {
/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/ module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;
    // strip any leading #
    if (color_string.charAt(0) == "#") color_string = color_string.substr(1, 6);
    color_string = color_string.replace(/ /g, "");
    color_string = color_string.toLowerCase();
    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors
    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [
                "rgba(123, 234, 45, 0.8)",
                "rgba(255,234,245,1.0)"
            ],
            process: function process(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                "rgb(123, 234, 45)",
                "rgb(255,234,245)"
            ],
            process: function process(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [
                "#00ff00",
                "336699"
            ],
            process: function process(bits) {
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [
                "#fb0",
                "f0f"
            ],
            process: function process(bits) {
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];
    // search through the definitions to find a match
    for(var i = 0; i < color_defs.length; i++){
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) this.alpha = channels[3];
            this.ok = true;
        }
    }
    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha;
    // some getters
    this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    this.toRGBA = function() {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    };
    this.toHex = function() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        return "#" + r + g + b;
    };
    // help
    this.getHelpXML = function() {
        var examples = new Array();
        // add regexps
        for(var i = 0; i < color_defs.length; i++){
            var example = color_defs[i].example;
            for(var j = 0; j < example.length; j++)examples[examples.length] = example[j];
        }
        // add type-in colors
        for(var sc in simple_colors)examples[examples.length] = sc;
        var xml = document.createElement("ul");
        xml.setAttribute("id", "rgbcolor-examples");
        for(var i = 0; i < examples.length; i++)try {
            var list_item = document.createElement("li");
            var list_color = new RGBColor(examples[i]);
            var example_div = document.createElement("div");
            example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + "; " + "color:" + list_color.toHex();
            example_div.appendChild(document.createTextNode("test"));
            var list_item_value = document.createTextNode(" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
            list_item.appendChild(example_div);
            list_item.appendChild(list_item_value);
            xml.appendChild(list_item);
        } catch (e) {}
        return xml;
    };
};

},{}],"8RSmP":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require("9d4bf984c01e8ef7");
var uncurryThis = require("ff94ec157dbe45f");
var $indexOf = require("84db9b100b66a9f4").indexOf;
var arrayMethodIsStrict = require("928c12f9f760e965");
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([
    1
], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: "Array",
    proto: true,
    forced: FORCED
}, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
});

},{"9d4bf984c01e8ef7":"eg2th","ff94ec157dbe45f":"jlH3X","84db9b100b66a9f4":"hMg8M","928c12f9f760e965":"2VsWI"}],"eI3aU":[function(require,module,exports) {
"use strict";
var $ = require("1cde7a4fbe24deb1");
var uncurryThis = require("d9ff51b37cd276ef");
var notARegExp = require("b1c9b74814a0e4ee");
var requireObjectCoercible = require("36f262aff4650984");
var toString = require("c6f2de0a65cb2a09");
var correctIsRegExpLogic = require("30dec888dfe829e2");
var stringIndexOf = uncurryThis("".indexOf);
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: "String",
    proto: true,
    forced: !correctIsRegExpLogic("includes")
}, {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"1cde7a4fbe24deb1":"eg2th","d9ff51b37cd276ef":"186yI","b1c9b74814a0e4ee":"6tdFT","36f262aff4650984":"gHatU","c6f2de0a65cb2a09":"5gq4I","30dec888dfe829e2":"dagOn"}],"crHHL":[function(require,module,exports) {
"use strict";
var $ = require("96e1bf170d634a10");
var uncurryThis = require("ccf1d267c2b85a6");
var isArray = require("683c722e26101e35");
var nativeReverse = uncurryThis([].reverse);
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: "Array",
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse(this);
    }
});

},{"96e1bf170d634a10":"eg2th","ccf1d267c2b85a6":"186yI","683c722e26101e35":"2fbSH"}],"2fbSH":[function(require,module,exports) {
"use strict";
var classof = require("ccb261b2d73a4fca");
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) === "Array";
};

},{"ccb261b2d73a4fca":"avIcM"}],"cDeAH":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMMAND_ARG_COUNTS", function() {
    return N;
});
parcelHelpers.export(exports, "SVGPathData", function() {
    return _;
});
parcelHelpers.export(exports, "SVGPathDataParser", function() {
    return f;
});
parcelHelpers.export(exports, "SVGPathDataTransformer", function() {
    return u;
});
parcelHelpers.export(exports, "encodeSVGPath", function() {
    return e;
});
var _typeOf = require("@swc/helpers/_/_type_of");
var t = function t1(r, e) {
    return (t = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, r) {
        t.__proto__ = r;
    } || function(t, r) {
        for(var _$e in r)Object.prototype.hasOwnProperty.call(r, _$e) && (t[_$e] = r[_$e]);
    })(r, e);
};
function r(r, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function i() {
        this.constructor = r;
    }
    t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
}
function e(t) {
    var r = "";
    Array.isArray(t) || (t = [
        t
    ]);
    for(var e = 0; e < t.length; e++){
        var i = t[e];
        if (i.type === _.CLOSE_PATH) r += "z";
        else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;
        else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;
        else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y;
        else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y;
        else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
        else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
        else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;
        else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y;
        else {
            if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
            r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
        }
    }
    return r;
}
function i(t, r) {
    var e = t[0], i = t[1];
    return [
        e * Math.cos(r) - i * Math.sin(r),
        e * Math.sin(r) + i * Math.cos(r)
    ];
}
function a() {
    for(var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r];
    for(var e = 0; e < t.length; e++)if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + (0, _typeOf._)(t[e]) + " == typeof " + t[e]);
    return !0;
}
var n = Math.PI;
function o(t, r, e) {
    t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
    var a = t.rX, o = t.rY, s = t.x, u = t.y;
    a = Math.abs(t.rX), o = Math.abs(t.rY);
    var h = i([
        (r - s) / 2,
        (e - u) / 2
    ], -t.xRot / 180 * n), c = h[0], y = h[1], p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
    1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
    var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2), O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)), l = a * y / o * O, T = -o * c / a * O, v = i([
        l,
        T
    ], t.xRot / 180 * n);
    t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
}
function s(t, r, e) {
    a(t, r, e);
    var i = t * t + r * r - e * e;
    if (0 > i) return [];
    if (0 === i) return [
        [
            t * e / (t * t + r * r),
            r * e / (t * t + r * r)
        ]
    ];
    var n = Math.sqrt(i);
    return [
        [
            (t * e + r * n) / (t * t + r * r),
            (r * e - t * n) / (t * t + r * r)
        ],
        [
            (t * e - r * n) / (t * t + r * r),
            (r * e + t * n) / (t * t + r * r)
        ]
    ];
}
var u, h = Math.PI / 180;
function c(t, r, e) {
    return (1 - e) * t + e * r;
}
function y(t, r, e, i) {
    return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
}
function p(t, r, e, i) {
    var a = 1e-6, n = r - t, o = e - r, s = 3 * n + 3 * (i - e) - 6 * o, u = 6 * (o - n), h = 3 * n;
    return Math.abs(s) < a ? [
        -h / u
    ] : function(t, r, e) {
        void 0 === e && (e = 1e-6);
        var _$i = t * t / 4 - r;
        if (_$i < -e) return [];
        if (_$i <= e) return [
            -t / 2
        ];
        var a = Math.sqrt(_$i);
        return [
            -t / 2 - a,
            -t / 2 + a
        ];
    }(u / s, h / s, a);
}
function m(t, r, e, i, a) {
    var n = 1 - a;
    return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
}
!function(t) {
    function r() {
        return u(function(t, r, e) {
            return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
        });
    }
    function e() {
        var _$t = NaN, _$r = NaN, _$e = NaN, i = NaN;
        return u(function(a, n, o) {
            return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, _$t = isNaN(_$t) ? n : _$t, _$r = isNaN(_$r) ? o : _$r, a.x1 = a.relative ? n - _$t : 2 * n - _$t, a.y1 = a.relative ? o - _$r : 2 * o - _$r), a.type & _.CURVE_TO ? (_$t = a.relative ? n + a.x2 : a.x2, _$r = a.relative ? o + a.y2 : a.y2) : (_$t = NaN, _$r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, _$e = isNaN(_$e) ? n : _$e, i = isNaN(i) ? o : i, a.x1 = a.relative ? n - _$e : 2 * n - _$e, a.y1 = a.relative ? o - i : 2 * o - i), a.type & _.QUAD_TO ? (_$e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (_$e = NaN, i = NaN), a;
        });
    }
    function n() {
        var _$t = NaN, _$r = NaN;
        return u(function(e, i, a) {
            if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, _$t = isNaN(_$t) ? i : _$t, _$r = isNaN(_$r) ? a : _$r, e.x1 = e.relative ? i - _$t : 2 * i - _$t, e.y1 = e.relative ? a - _$r : 2 * a - _$r), e.type & _.QUAD_TO) {
                _$t = e.relative ? i + e.x1 : e.x1, _$r = e.relative ? a + e.y1 : e.y1;
                var _$n = e.x1, o = e.y1;
                e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * _$n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, e.x2 = (e.x + 2 * _$n) / 3, e.y2 = (e.y + 2 * o) / 3;
            } else _$t = NaN, _$r = NaN;
            return e;
        });
    }
    function u(t) {
        var _$r = 0, _$e = 0, i = NaN, a = NaN;
        return function(n) {
            if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            var o = t(n, _$r, _$e, i, a);
            return n.type & _.CLOSE_PATH && (_$r = i, _$e = a), void 0 !== n.x && (_$r = n.relative ? _$r + n.x : n.x), void 0 !== n.y && (_$e = n.relative ? _$e + n.y : n.y), n.type & _.MOVE_TO && (i = _$r, a = _$e), o;
        };
    }
    function O(t, r, e, i, n, o) {
        return a(t, r, e, i, n, o), u(function(a, s, u, h) {
            var c = a.x1, y = a.x2, p = a.relative && !isNaN(h), m = void 0 !== a.x ? a.x : p ? 0 : s, _$O = void 0 !== a.y ? a.y : p ? 0 : u;
            function l(t) {
                return t * t;
            }
            a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), void 0 !== a.x && (a.x = a.x * t + _$O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
            var T = t * i - r * e;
            if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) {
                if (0 === T) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO;
                else {
                    var v = a.xRot * Math.PI / 180, f = Math.sin(v), N = Math.cos(v), x = 1 / l(a.rX), d = 1 / l(a.rY), E = l(N) * x + l(f) * d, A = 2 * f * N * (x - d), C = l(f) * x + l(N) * d, M = E * i * i - A * r * i + C * r * r, R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r), g = E * e * e - A * t * e + C * t * t, I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2, S = Math.sin(I), L = Math.cos(I);
                    a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), a.xRot = 180 * I / Math.PI;
                }
            }
            return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
        });
    }
    function l() {
        return function(t) {
            var _$r = {};
            for(var _$e in t)_$r[_$e] = t[_$e];
            return _$r;
        };
    }
    t.ROUND = function(t) {
        function r(r) {
            return Math.round(r * t) / t;
        }
        return void 0 === t && (t = 1e13), a(t), function(t) {
            return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
        };
    }, t.TO_ABS = r, t.TO_REL = function() {
        return u(function(t, r, e) {
            return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
        });
    }, t.NORMALIZE_HVZ = function(t, r, e) {
        return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), u(function(i, a, n, o, s) {
            if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i;
        });
    }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function(t) {
        void 0 === t && (t = 0), a(t);
        var _$r = NaN, _$e = NaN, i = NaN, _$n = NaN;
        return u(function(a, o, s, u, h) {
            var c = Math.abs, y = !1, p = 0, m = 0;
            if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(_$r) ? 0 : o - _$r, m = isNaN(_$e) ? 0 : s - _$e), a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (_$r = a.relative ? o + a.x2 : a.x2, _$e = a.relative ? s + a.y2 : a.y2) : (_$r = NaN, _$e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, _$n = isNaN(_$n) ? s : 2 * s - _$n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, _$n = a.relative ? s + a.y1 : a.y2) : (i = NaN, _$n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
                var _$O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o, _$l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
                p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(_$n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : _$n - s;
                var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o, v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
                c(_$O) <= t && c(_$l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
            }
            return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
        });
    }, t.MATRIX = O, t.ROTATE = function(t, r, e) {
        void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
        var i = Math.sin(t), _$n = Math.cos(t);
        return O(_$n, i, -i, _$n, r - r * _$n + e * i, e - r * i - e * _$n);
    }, t.TRANSLATE = function(t, r) {
        return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
    }, t.SCALE = function(t, r) {
        return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
    }, t.SKEW_X = function(t) {
        return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
    }, t.SKEW_Y = function(t) {
        return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
    }, t.X_AXIS_SYMMETRY = function(t) {
        return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
    }, t.Y_AXIS_SYMMETRY = function(t) {
        return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
    }, t.A_TO_C = function() {
        return u(function(t, r, e) {
            return _.ARC === t.type ? function(t, r, e) {
                var a, _$n, s, _$u;
                t.cX || o(t, r, e);
                for(var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), _$O = new Array(m), _$l = r, T = e, v = 0; v < m; v++){
                    var f = c(t.phi1, t.phi2, v / m), N = c(t.phi1, t.phi2, (v + 1) / m), x = N - f, d = 4 / 3 * Math.tan(x * h / 4), E = [
                        Math.cos(f * h) - d * Math.sin(f * h),
                        Math.sin(f * h) + d * Math.cos(f * h)
                    ], A = E[0], C = E[1], M = [
                        Math.cos(N * h),
                        Math.sin(N * h)
                    ], R = M[0], g = M[1], I = [
                        R + d * Math.sin(N * h),
                        g - d * Math.cos(N * h)
                    ], S = I[0], L = I[1];
                    _$O[v] = {
                        relative: t.relative,
                        type: _.CURVE_TO
                    };
                    var H = function H(r, e) {
                        var a = i([
                            r * t.rX,
                            e * t.rY
                        ], t.xRot), _$n = a[0], _$o = a[1];
                        return [
                            t.cX + _$n,
                            t.cY + _$o
                        ];
                    };
                    a = H(A, C), _$O[v].x1 = a[0], _$O[v].y1 = a[1], _$n = H(S, L), _$O[v].x2 = _$n[0], _$O[v].y2 = _$n[1], s = H(R, g), _$O[v].x = s[0], _$O[v].y = s[1], t.relative && (_$O[v].x1 -= _$l, _$O[v].y1 -= T, _$O[v].x2 -= _$l, _$O[v].y2 -= T, _$O[v].x -= _$l, _$O[v].y -= T), _$l = (_$u = [
                        _$O[v].x,
                        _$O[v].y
                    ])[0], T = _$u[1];
                }
                return _$O;
            }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
        });
    }, t.ANNOTATE_ARCS = function() {
        return u(function(t, r, e) {
            return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
        });
    }, t.CLONE = l, t.CALCULATE_BOUNDS = function() {
        var _$t = function t(t) {
            var _$r = {};
            for(var _$e in t)_$r[_$e] = t[_$e];
            return _$r;
        }, i = r(), a = n(), h = e(), c = u(function(r, e, n) {
            var _$u = h(a(i(_$t(r))));
            function O(t) {
                t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
            }
            function l(t) {
                t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
            }
            if (_$u.type & _.DRAWING_COMMANDS && (O(e), l(n)), _$u.type & _.HORIZ_LINE_TO && O(_$u.x), _$u.type & _.VERT_LINE_TO && l(_$u.y), _$u.type & _.LINE_TO && (O(_$u.x), l(_$u.y)), _$u.type & _.CURVE_TO) {
                O(_$u.x), l(_$u.y);
                for(var T = 0, v = p(e, _$u.x1, _$u.x2, _$u.x); T < v.length; T++)0 < (w = v[T]) && 1 > w && O(m(e, _$u.x1, _$u.x2, _$u.x, w));
                for(var f = 0, N = p(n, _$u.y1, _$u.y2, _$u.y); f < N.length; f++)0 < (w = N[f]) && 1 > w && l(m(n, _$u.y1, _$u.y2, _$u.y, w));
            }
            if (_$u.type & _.ARC) {
                O(_$u.x), l(_$u.y), o(_$u, e, n);
                for(var x = _$u.xRot / 180 * Math.PI, d = Math.cos(x) * _$u.rX, E = Math.sin(x) * _$u.rX, A = -Math.sin(x) * _$u.rY, C = Math.cos(x) * _$u.rY, M = _$u.phi1 < _$u.phi2 ? [
                    _$u.phi1,
                    _$u.phi2
                ] : -180 > _$u.phi2 ? [
                    _$u.phi2 + 360,
                    _$u.phi1 + 360
                ] : [
                    _$u.phi2,
                    _$u.phi1
                ], R = M[0], g = M[1], I = function I(t) {
                    var _$r = t[0], _$e = t[1], i = 180 * Math.atan2(_$e, _$r) / Math.PI;
                    return i < R ? i + 360 : i;
                }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++)(w = L[S]) > R && w < g && O(y(_$u.cX, d, A, w));
                for(var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++){
                    var w;
                    (w = U[H]) > R && w < g && l(y(_$u.cY, E, C, w));
                }
            }
            return r;
        });
        return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
    };
}(u || (u = {}));
var O, l = function() {
    function t() {}
    return t.prototype.round = function(t) {
        return this.transform(u.ROUND(t));
    }, t.prototype.toAbs = function() {
        return this.transform(u.TO_ABS());
    }, t.prototype.toRel = function() {
        return this.transform(u.TO_REL());
    }, t.prototype.normalizeHVZ = function(t, r, e) {
        return this.transform(u.NORMALIZE_HVZ(t, r, e));
    }, t.prototype.normalizeST = function() {
        return this.transform(u.NORMALIZE_ST());
    }, t.prototype.qtToC = function() {
        return this.transform(u.QT_TO_C());
    }, t.prototype.aToC = function() {
        return this.transform(u.A_TO_C());
    }, t.prototype.sanitize = function(t) {
        return this.transform(u.SANITIZE(t));
    }, t.prototype.translate = function(t, r) {
        return this.transform(u.TRANSLATE(t, r));
    }, t.prototype.scale = function(t, r) {
        return this.transform(u.SCALE(t, r));
    }, t.prototype.rotate = function(t, r, e) {
        return this.transform(u.ROTATE(t, r, e));
    }, t.prototype.matrix = function(t, r, e, i, a, n) {
        return this.transform(u.MATRIX(t, r, e, i, a, n));
    }, t.prototype.skewX = function(t) {
        return this.transform(u.SKEW_X(t));
    }, t.prototype.skewY = function(t) {
        return this.transform(u.SKEW_Y(t));
    }, t.prototype.xSymmetry = function(t) {
        return this.transform(u.X_AXIS_SYMMETRY(t));
    }, t.prototype.ySymmetry = function(t) {
        return this.transform(u.Y_AXIS_SYMMETRY(t));
    }, t.prototype.annotateArcs = function() {
        return this.transform(u.ANNOTATE_ARCS());
    }, t;
}(), T = function T(t) {
    return " " === t || "	" === t || "\r" === t || "\n" === t;
}, v = function v(t) {
    return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
}, f = function(t) {
    function e() {
        var _$r = t.call(this) || this;
        return _$r.curNumber = "", _$r.curCommandType = -1, _$r.curCommandRelative = !1, _$r.canParseCommandOrComma = !0, _$r.curNumberHasExp = !1, _$r.curNumberHasExpDigits = !1, _$r.curNumberHasDecimal = !1, _$r.curArgs = [], _$r;
    }
    return r(e, t), e.prototype.finish = function(t) {
        if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
        return t;
    }, e.prototype.parse = function(t, r) {
        var _$e = this;
        void 0 === r && (r = []);
        for(var i = function i(t) {
            r.push(t), _$e.curArgs.length = 0, _$e.canParseCommandOrComma = !0;
        }, a = 0; a < t.length; a++){
            var n = t[a], o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s = v(n) && ("0" === this.curNumber && "0" === n || o);
            if (!v(n) || s) {
                if ("e" !== n && "E" !== n) {
                    if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                        if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                            if (this.curNumber && -1 !== this.curCommandType) {
                                var u = Number(this.curNumber);
                                if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                                if (this.curCommandType === _.ARC) {
                                    if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                        if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                                    } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                                }
                                this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                                    type: _.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: u
                                }) : _.VERT_LINE_TO === this.curCommandType ? i({
                                    type: _.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: u
                                }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1]
                                }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                                    type: _.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5]
                                }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                                    type: _.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                }) : this.curCommandType === _.QUAD_TO ? i({
                                    type: _.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                }) : this.curCommandType === _.ARC && i({
                                    type: _.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6]
                                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                            }
                            if (!T(n)) {
                                if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                                else if ("+" !== n && "-" !== n && "." !== n) {
                                    if (s) this.curNumber = n, this.curNumberHasDecimal = !1;
                                    else {
                                        if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                                        if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                                        if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) {
                                            if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;
                                            else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n;
                                            else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n;
                                            else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n;
                                            else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n;
                                            else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;
                                            else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n;
                                            else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;
                                            else {
                                                if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                                                this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                                            }
                                        } else r.push({
                                            type: _.CLOSE_PATH
                                        }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                                    }
                                } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
                            }
                        } else this.curNumber += n, this.curNumberHasDecimal = !0;
                    } else this.curNumber += n;
                } else this.curNumber += n, this.curNumberHasExp = !0;
            } else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
        }
        return r;
    }, e.prototype.transform = function(t) {
        return Object.create(this, {
            parse: {
                value: function value(r, e) {
                    void 0 === e && (e = []);
                    for(var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++){
                        var n = a[i], o = t(n);
                        Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                    }
                    return e;
                }
            }
        });
    }, e;
}(l), _ = function(t) {
    function i(r) {
        var e = t.call(this) || this;
        return e.commands = "string" == typeof r ? i.parse(r) : r, e;
    }
    return r(i, t), i.prototype.encode = function() {
        return i.encode(this.commands);
    }, i.prototype.getBounds = function() {
        var _$t = u.CALCULATE_BOUNDS();
        return this.transform(_$t), _$t;
    }, i.prototype.transform = function(t) {
        for(var _$r = [], e = 0, _$i = this.commands; e < _$i.length; e++){
            var a = t(_$i[e]);
            Array.isArray(a) ? _$r.push.apply(_$r, a) : _$r.push(a);
        }
        return this.commands = _$r, this;
    }, i.encode = function(t) {
        return e(t);
    }, i.parse = function(t) {
        var _$r = new f, e = [];
        return _$r.parse(t, e), _$r.finish(e), e;
    }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, i;
}(l), N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);

},{"@swc/helpers/_/_type_of":"h4q6w","@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}],"dJ6ub":[function(require,module,exports) {
"use strict";
var PROPER_FUNCTION_NAME = require("9e28bead644082e").PROPER;
var defineBuiltIn = require("ffafe1474cec37ac");
var anObject = require("3135197806fbedfd");
var $toString = require("ce5dcf9b5e077a79");
var fails = require("577ada37101f923c");
var getRegExpFlags = require("7011e05c0011871a");
var TO_STRING = "toString";
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
    return nativeToString.call({
        source: "a",
        flags: "b"
    }) !== "/a/b";
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return "/" + pattern + "/" + flags;
}, {
    unsafe: true
});

},{"9e28bead644082e":"97gqp","ffafe1474cec37ac":"aSXv0","3135197806fbedfd":"18ynF","ce5dcf9b5e077a79":"5gq4I","577ada37101f923c":"5MJto","7011e05c0011871a":"cHc8d"}],"cHc8d":[function(require,module,exports) {
"use strict";
var call = require("fd54476372f3a204");
var hasOwn = require("a12d2126c329f45");
var isPrototypeOf = require("815509f48e0b1e36");
var regExpFlags = require("37fba4854c4ab846");
var RegExpPrototype = RegExp.prototype;
module.exports = function(R) {
    var flags = R.flags;
    return flags === undefined && !("flags" in RegExpPrototype) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};

},{"fd54476372f3a204":"6kMRM","a12d2126c329f45":"6F393","815509f48e0b1e36":"eYLJz","37fba4854c4ab846":"ll9tj"}],"eOl4r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlurStack", function() {
    return BlurStack;
});
parcelHelpers.export(exports, "canvasRGB", function() {
    return processCanvasRGB;
});
parcelHelpers.export(exports, "canvasRGBA", function() {
    return processCanvasRGBA;
});
parcelHelpers.export(exports, "image", function() {
    return processImage;
});
parcelHelpers.export(exports, "imageDataRGB", function() {
    return processImageDataRGB;
});
parcelHelpers.export(exports, "imageDataRGBA", function() {
    return processImageDataRGBA;
});
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/* eslint-disable no-bitwise -- used for calculations */ /* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */ /**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/ var mulTable = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
];
var shgTable = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */ function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
    if (typeof img === "string") img = document.getElementById(img);
    if (!img || Object.prototype.toString.call(img).slice(8, -1) === "HTMLImageElement" && !("naturalWidth" in img)) return;
    var dimensionType = useOffset ? "offset" : "natural";
    var w = img[dimensionType + "Width"];
    var h = img[dimensionType + "Height"]; // add ImageBitmap support,can blur texture source
    if (Object.prototype.toString.call(img).slice(8, -1) === "ImageBitmap") {
        w = img.width;
        h = img.height;
    }
    if (typeof canvas === "string") canvas = document.getElementById(canvas);
    if (!canvas || !("getContext" in canvas)) return;
    if (!skipStyles) {
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
    }
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
    if (isNaN(radius) || radius < 1) return;
    if (blurAlphaChannel) processCanvasRGBA(canvas, 0, 0, w, h, radius);
    else processCanvasRGB(canvas, 0, 0, w, h, radius);
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */ function getImageDataFromCanvas(canvas, topX, topY, width, height) {
    if (typeof canvas === "string") canvas = document.getElementById(canvas);
    if (!canvas || _typeof(canvas) !== "object" || !("getContext" in canvas)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
    var context = canvas.getContext("2d");
    try {
        return context.getImageData(topX, topY, width, height);
    } catch (e) {
        throw new Error("unable to access image data: " + e);
    }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
    canvas.getContext("2d").putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null, stackOut = null, yw = 0, yi = 0;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    for(var y = 0; y < height; y++){
        stack = stackStart;
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
        for(var _i = 0; _i < radiusPlus1; _i++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
        for(var _i2 = 1; _i2 < radiusPlus1; _i2++){
            var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
            var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
            var rbs = radiusPlus1 - _i2;
            rSum += (stack.r = r) * rbs;
            gSum += (stack.g = g) * rbs;
            bSum += (stack.b = b) * rbs;
            aSum += (stack.a = a) * rbs;
            rInSum += r;
            gInSum += g;
            bInSum += b;
            aInSum += a;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            var paInitial = aSum * mulSum >>> shgSum;
            pixels[yi + 3] = paInitial;
            if (paInitial !== 0) {
                var _a2 = 255 / paInitial;
                pixels[yi] = (rSum * mulSum >>> shgSum) * _a2;
                pixels[yi + 1] = (gSum * mulSum >>> shgSum) * _a2;
                pixels[yi + 2] = (bSum * mulSum >>> shgSum) * _a2;
            } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            aSum -= aOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            aOutSum -= stackIn.a;
            var _p = x + radius + 1;
            _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[_p];
            gInSum += stackIn.g = pixels[_p + 1];
            bInSum += stackIn.b = pixels[_p + 2];
            aInSum += stackIn.a = pixels[_p + 3];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            aSum += aInSum;
            stackIn = stackIn.next;
            var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
            rOutSum += _r;
            gOutSum += _g;
            bOutSum += _b;
            aOutSum += _a;
            rInSum -= _r;
            gInSum -= _g;
            bInSum -= _b;
            aInSum -= _a;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x = 0; _x < width; _x++){
        yi = _x << 2;
        var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
        stack = stackStart;
        for(var _i3 = 0; _i3 < radiusPlus1; _i3++){
            stack.r = _pr;
            stack.g = _pg;
            stack.b = _pb;
            stack.a = _pa;
            stack = stack.next;
        }
        var yp = width;
        var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
        for(var _i4 = 1; _i4 <= radius; _i4++){
            yi = yp + _x << 2;
            var _rbs = radiusPlus1 - _i4;
            _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
            _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
            _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
            _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
            _rInSum += _pr;
            _gInSum += _pg;
            _bInSum += _pb;
            _aInSum += _pa;
            stack = stack.next;
            if (_i4 < heightMinus1) yp += width;
        }
        yi = _x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y = 0; _y < height; _y++){
            var _p2 = yi << 2;
            pixels[_p2 + 3] = _pa = _aSum * mulSum >>> shgSum;
            if (_pa > 0) {
                _pa = 255 / _pa;
                pixels[_p2] = (_rSum * mulSum >>> shgSum) * _pa;
                pixels[_p2 + 1] = (_gSum * mulSum >>> shgSum) * _pa;
                pixels[_p2 + 2] = (_bSum * mulSum >>> shgSum) * _pa;
            } else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
            _rSum -= _rOutSum;
            _gSum -= _gOutSum;
            _bSum -= _bOutSum;
            _aSum -= _aOutSum;
            _rOutSum -= stackIn.r;
            _gOutSum -= stackIn.g;
            _bOutSum -= stackIn.b;
            _aOutSum -= stackIn.a;
            _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
            _rSum += _rInSum += stackIn.r = pixels[_p2];
            _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
            _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
            _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
            stackIn = stackIn.next;
            _rOutSum += _pr = stackOut.r;
            _gOutSum += _pg = stackOut.g;
            _bOutSum += _pb = stackOut.b;
            _aOutSum += _pa = stackOut.a;
            _rInSum -= _pr;
            _gInSum -= _pg;
            _bInSum -= _pb;
            _aInSum -= _pa;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGB(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
    canvas.getContext("2d").putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGB(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    var p, rbs;
    var yw = 0, yi = 0;
    for(var y = 0; y < height; y++){
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb;
        stack = stackStart;
        for(var _i5 = 0; _i5 < radiusPlus1; _i5++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0;
        for(var _i6 = 1; _i6 < radiusPlus1; _i6++){
            p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
            rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
            gSum += (stack.g = pg = pixels[p + 1]) * rbs;
            bSum += (stack.b = pb = pixels[p + 2]) * rbs;
            rInSum += pr;
            gInSum += pg;
            bInSum += pb;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            pixels[yi] = rSum * mulSum >>> shgSum;
            pixels[yi + 1] = gSum * mulSum >>> shgSum;
            pixels[yi + 2] = bSum * mulSum >>> shgSum;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[p];
            gInSum += stackIn.g = pixels[p + 1];
            bInSum += stackIn.b = pixels[p + 2];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            stackIn = stackIn.next;
            rOutSum += pr = stackOut.r;
            gOutSum += pg = stackOut.g;
            bOutSum += pb = stackOut.b;
            rInSum -= pr;
            gInSum -= pg;
            bInSum -= pb;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x2 = 0; _x2 < width; _x2++){
        yi = _x2 << 2;
        var _pr2 = pixels[yi], _pg2 = pixels[yi + 1], _pb2 = pixels[yi + 2], _rOutSum2 = radiusPlus1 * _pr2, _gOutSum2 = radiusPlus1 * _pg2, _bOutSum2 = radiusPlus1 * _pb2, _rSum2 = sumFactor * _pr2, _gSum2 = sumFactor * _pg2, _bSum2 = sumFactor * _pb2;
        stack = stackStart;
        for(var _i7 = 0; _i7 < radiusPlus1; _i7++){
            stack.r = _pr2;
            stack.g = _pg2;
            stack.b = _pb2;
            stack = stack.next;
        }
        var _rInSum2 = 0, _gInSum2 = 0, _bInSum2 = 0;
        for(var _i8 = 1, yp = width; _i8 <= radius; _i8++){
            yi = yp + _x2 << 2;
            _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
            _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
            _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
            _rInSum2 += _pr2;
            _gInSum2 += _pg2;
            _bInSum2 += _pb2;
            stack = stack.next;
            if (_i8 < heightMinus1) yp += width;
        }
        yi = _x2;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y2 = 0; _y2 < height; _y2++){
            p = yi << 2;
            pixels[p] = _rSum2 * mulSum >>> shgSum;
            pixels[p + 1] = _gSum2 * mulSum >>> shgSum;
            pixels[p + 2] = _bSum2 * mulSum >>> shgSum;
            _rSum2 -= _rOutSum2;
            _gSum2 -= _gOutSum2;
            _bSum2 -= _bOutSum2;
            _rOutSum2 -= stackIn.r;
            _gOutSum2 -= stackIn.g;
            _bOutSum2 -= stackIn.b;
            p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            _rSum2 += _rInSum2 += stackIn.r = pixels[p];
            _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
            _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
            stackIn = stackIn.next;
            _rOutSum2 += _pr2 = stackOut.r;
            _gOutSum2 += _pg2 = stackOut.g;
            _bOutSum2 += _pb2 = stackOut.b;
            _rInSum2 -= _pr2;
            _gInSum2 -= _pg2;
            _bInSum2 -= _pb2;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 *
 */ var BlurStack = /**
 * Set properties.
 */ function BlurStack() {
    _classCallCheck(this, BlurStack);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jIm8e"}]},[], null, "parcelRequirec571")

//# sourceMappingURL=index.es.aa861507.js.map
