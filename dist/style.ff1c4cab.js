// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/icons/global__logo.svg":[["global__logo.3e1fcedd.svg","assets/imgs/icons/global__logo.svg"],"assets/imgs/icons/global__logo.svg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/icons/ico__search.svg":[["ico__search.d5ff355e.svg","assets/imgs/icons/ico__search.svg"],"assets/imgs/icons/ico__search.svg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/icons/ico__cart.svg":[["ico__cart.c146e822.svg","assets/imgs/icons/ico__cart.svg"],"assets/imgs/icons/ico__cart.svg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13-pro--sm.jpeg":[["iphone13-pro--sm.c6f7b0dc.jpeg","assets/imgs/main__imgs/iphone13-pro--sm.jpeg"],"assets/imgs/main__imgs/iphone13-pro--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13--sm.jpeg":[["iphone13--sm.bf7e5895.jpeg","assets/imgs/main__imgs/iphone13--sm.jpeg"],"assets/imgs/main__imgs/iphone13--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/watch--sm.jpeg":[["watch--sm.1e9fe491.jpeg","assets/imgs/main__imgs/watch--sm.jpeg"],"assets/imgs/main__imgs/watch--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/series7--sm.png":[["series7--sm.70e242e9.png","assets/imgs/main__imgs/series7--sm.png"],"assets/imgs/main__imgs/series7--sm.png"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad-mini--sm.jpeg":[["ipad-mini--sm.adba5246.jpeg","assets/imgs/main__imgs/ipad-mini--sm.jpeg"],"assets/imgs/main__imgs/ipad-mini--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad-mini__title--sm.png":[["ipad-mini__title--sm.ebbdc07f.png","assets/imgs/main__imgs/ipad-mini__title--sm.png"],"assets/imgs/main__imgs/ipad-mini__title--sm.png"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad--sm.jpeg":[["ipad--sm.c29e247e.jpeg","assets/imgs/main__imgs/ipad--sm.jpeg"],"assets/imgs/main__imgs/ipad--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/mac-pro--sm.jpeg":[["mac-pro--sm.5820a30c.jpeg","assets/imgs/main__imgs/mac-pro--sm.jpeg"],"assets/imgs/main__imgs/mac-pro--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/mac-air--sm.jpeg":[["mac-air--sm.5118e896.jpeg","assets/imgs/main__imgs/mac-air--sm.jpeg"],"assets/imgs/main__imgs/mac-air--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/air-tag--sm.jpeg":[["air-tag--sm.159e776b.jpeg","assets/imgs/main__imgs/air-tag--sm.jpeg"],"assets/imgs/main__imgs/air-tag--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/imac--sm.jpeg":[["imac--sm.f32637f7.jpeg","assets/imgs/main__imgs/imac--sm.jpeg"],"assets/imgs/main__imgs/imac--sm.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13-pro--md.jpeg":[["iphone13-pro--md.7bcd39e4.jpeg","assets/imgs/main__imgs/iphone13-pro--md.jpeg"],"assets/imgs/main__imgs/iphone13-pro--md.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13--md.jpeg":[["iphone13--md.4f139103.jpeg","assets/imgs/main__imgs/iphone13--md.jpeg"],"assets/imgs/main__imgs/iphone13--md.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/watch--md.jpeg":[["watch--md.3a234a64.jpeg","assets/imgs/main__imgs/watch--md.jpeg"],"assets/imgs/main__imgs/watch--md.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/series7--md.png":[["series7--md.ddae110b.png","assets/imgs/main__imgs/series7--md.png"],"assets/imgs/main__imgs/series7--md.png"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13-pro--lg.jpeg":[["iphone13-pro--lg.f5b7a219.jpeg","assets/imgs/main__imgs/iphone13-pro--lg.jpeg"],"assets/imgs/main__imgs/iphone13-pro--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iphone13--lg.jpeg":[["iphone13--lg.21b0763d.jpeg","assets/imgs/main__imgs/iphone13--lg.jpeg"],"assets/imgs/main__imgs/iphone13--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/watch--lg.jpeg":[["watch--lg.439fb993.jpeg","assets/imgs/main__imgs/watch--lg.jpeg"],"assets/imgs/main__imgs/watch--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad-mini--lg.jpeg":[["ipad-mini--lg.513dbf14.jpeg","assets/imgs/main__imgs/ipad-mini--lg.jpeg"],"assets/imgs/main__imgs/ipad-mini--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad-mini__title--lg.png":[["ipad-mini__title--lg.a16a0a2a.png","assets/imgs/main__imgs/ipad-mini__title--lg.png"],"assets/imgs/main__imgs/ipad-mini__title--lg.png"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/ipad--lg.jpeg":[["ipad--lg.4b4fc85b.jpeg","assets/imgs/main__imgs/ipad--lg.jpeg"],"assets/imgs/main__imgs/ipad--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/mac-pro--lg.jpeg":[["mac-pro--lg.cb63c091.jpeg","assets/imgs/main__imgs/mac-pro--lg.jpeg"],"assets/imgs/main__imgs/mac-pro--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/mac-air--lg.jpeg":[["mac-air--lg.90a49a7e.jpeg","assets/imgs/main__imgs/mac-air--lg.jpeg"],"assets/imgs/main__imgs/mac-air--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/air-tag--lg.jpeg":[["air-tag--lg.d1d36b98.jpeg","assets/imgs/main__imgs/air-tag--lg.jpeg"],"assets/imgs/main__imgs/air-tag--lg.jpeg"],"/Users/jeongs/Desktop/projects/practice/appleClone/assets/imgs/main__imgs/iMac--lg.jpeg":[["iMac--lg.3edce1f1.jpeg","assets/imgs/main__imgs/iMac--lg.jpeg"],"assets/imgs/main__imgs/iMac--lg.jpeg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51242" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.ff1c4cab.js.map