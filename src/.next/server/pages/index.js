(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!********************************************************************!*\
  !*** ../node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/request-idle-callback.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../node_modules/next/dist/client/route-loader.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/route-loader.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/use-intersection.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/client/use-intersection.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "../node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "../node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?9d88"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!************************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "../node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./components/Anchor/Anchor.tsx":
/*!**************************************!*\
  !*** ./components/Anchor/Anchor.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchor": function() { return /* binding */ Anchor; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils.ts");

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Anchor\\Anchor.tsx";




const Anchor = ({
  href,
  children
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const el = ref.current;
    const eventsCleanup = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mouseOutInEventListener)(el);
    return () => {
      eventsCleanup();
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      ref: ref,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};



/***/ }),

/***/ "./components/HeaderLink/HeaderLink.tsx":
/*!**********************************************!*\
  !*** ./components/HeaderLink/HeaderLink.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLink": function() { return /* binding */ HeaderLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Anchor/Anchor */ "./components/Anchor/Anchor.tsx");
/* harmony import */ var _HeaderLink_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderLink.module.css */ "./components/HeaderLink/HeaderLink.module.css");
/* harmony import */ var _HeaderLink_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HeaderLink_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\HeaderLink\\HeaderLink.tsx";



const HeaderLink = ({
  href,
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: `${(_HeaderLink_module_css__WEBPACK_IMPORTED_MODULE_2___default().link)} ${(_HeaderLink_module_css__WEBPACK_IMPORTED_MODULE_2___default().linkDia)}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
      href: href,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 66
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};



/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeaderLink/HeaderLink */ "./components/HeaderLink/HeaderLink.tsx");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Header\\Header.tsx";



const Header = ({
  variant = "black"
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerWrapper),
    style: {
      color: `${variant}`
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_1__.HeaderLink, {
        text: "Home",
        href: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_1__.HeaderLink, {
        text: "About",
        href: "/about"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_1__.HeaderLink, {
        text: "Work",
        href: "/work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};



/***/ }),

/***/ "./components/Shader/Shader.tsx":
/*!**************************************!*\
  !*** ./components/Shader/Shader.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shader": function() { return /* binding */ Shader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils.ts");

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Shader\\Shader.tsx";



const Shader = ({
  shader
}) => {
  const {
    fragmentShader,
    texture
  } = shader;
  let canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(node => {
    canvas.current = node;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!canvas.current) return;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.renderShader)(canvas.current, fragmentShader, texture);
  }, [canvas.current]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%"
    },
    className: "glslCanvas",
    width: "500",
    height: "500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/TextCarousel/TextCarousel.tsx":
/*!**************************************************!*\
  !*** ./components/TextCarousel/TextCarousel.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextCarousel": function() { return /* binding */ TextCarousel; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextCarousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextCarousel.module.css */ "./components/TextCarousel/TextCarousel.module.css");
/* harmony import */ var _TextCarousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextCarousel_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\TextCarousel\\TextCarousel.tsx";



const variants = {
  enter: {
    y: 30,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    y: -30,
    opacity: 0
  }
};

const TextCarousel = ({
  terms,
  color
}) => {
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const activeEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const parentEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (index === terms.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3500);
    return () => clearInterval(interval);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (activeEl.current) {
      parentEl.current.style.width = `${activeEl.current.clientWidth}px`;
    }
  }, [index]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    ref: parentEl,
    style: {
      width: `${activeEl.current && activeEl.current.clientWidth}px`
    },
    className: (_TextCarousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().termWrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
      initial: false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        style: {
          color: color
        },
        className: (_TextCarousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().term),
        ref: activeEl,
        initial: "enter",
        animate: "center",
        exit: "exit",
        variants: variants,
        transition: {
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          opacity: {
            duration: 0.4
          }
        },
        children: terms[index]
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};



/***/ }),

/***/ "./constants.tsx":
/*!***********************!*\
  !*** ./constants.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shaders": function() { return /* binding */ shaders; },
/* harmony export */   "p5": function() { return /* binding */ p5; },
/* harmony export */   "roles": function() { return /* binding */ roles; },
/* harmony export */   "terms": function() { return /* binding */ terms; },
/* harmony export */   "homepageText": function() { return /* binding */ homepageText; },
/* harmony export */   "aboutPageContent": function() { return /* binding */ aboutPageContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Anchor/Anchor */ "./components/Anchor/Anchor.tsx");
/* harmony import */ var _components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Shader/Shader */ "./components/Shader/Shader.tsx");
/* harmony import */ var _components_TextCarousel_TextCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TextCarousel/TextCarousel */ "./components/TextCarousel/TextCarousel.tsx");


var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\constants.tsx";



const shaders = {
  fullscreenFbm: {
    fragmentShader: `#ifdef GL_ES
    precision mediump float;
    #endif
    #ifndef FNC_MOD289
    #define FNC_MOD289
    float mod289(in float x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec2 mod289(in vec2 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec3 mod289(in vec3 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec4 mod289(in vec4 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    #endif
    #ifndef FNC_PERMUTE
    #define FNC_PERMUTE
    float permute(in float x) {
         return mod289(((x * 34.) + 1.)*x);
    }
    
    vec3 permute(in vec3 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 permute(in vec4 x) {
         return mod289(((x * 34.) + 1.)*x);
    }
    #endif
    
    #ifndef FNC_TAYLORINVSQRT
    #define FNC_TAYLORINVSQRT
    float taylorInvSqrt(in float r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec4 taylorInvSqrt(in vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    #endif
    #ifndef FNC_GRAD4
    #define FNC_GRAD4
    vec4 grad4(float j, vec4 ip) {
        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
        vec4 p,s;
    
        p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p, vec4(0.0)));
        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    
        return p;
    }
    #endif
    
    
    /*
    author: [Ian McEwan, Ashima Arts]
    description: Simplex Noise https://github.com/ashima/webgl-noise
    use: snoise(<vec2|vec3|vec4> pos)
    license: |
      Copyright (C) 2011 Ashima Arts. All rights reserved.
      Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      Neither the name of the GPUImage framework nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  
    */
    
    #ifndef FNC_SNOISE
    #define FNC_SNOISE
    float snoise(in vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
    
        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
    
        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
    
        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
    
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
    
        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    
        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
    
    
    float snoise(in vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
    
        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
    
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
    
        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
    
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
    
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
    
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
    
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
    
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
    
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
    
        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
    
        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    float snoise(in vec4 v) {
        const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                            0.276393202250021,  // 2 * G4
                            0.414589803375032,  // 3 * G4
                            -0.447213595499958); // -1 + 4 * G4
    
        // First corner
        vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); // (sqrt(5) - 1)/4
        vec4 x0 = v -   i + dot(i, C.xxxx);
    
        // Other corners
    
        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
        vec4 i0;
        vec3 isX = step( x0.yzw, x0.xxx );
        vec3 isYZ = step( x0.zww, x0.yyz );
        //  i0.x = dot( isX, vec3( 1.0 ) );
        i0.x = isX.x + isX.y + isX.z;
        i0.yzw = 1.0 - isX;
        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
        i0.y += isYZ.x + isYZ.y;
        i0.zw += 1.0 - isYZ.xy;
        i0.z += isYZ.z;
        i0.w += 1.0 - isYZ.z;
    
        // i0 now contains the unique values 0,1,2,3 in each channel
        vec4 i3 = clamp( i0, 0.0, 1.0 );
        vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
        vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );
    
        //  x0 = x0 - 0.0 + 0.0 * C.xxxx
        //  x1 = x0 - i1  + 1.0 * C.xxxx
        //  x2 = x0 - i2  + 2.0 * C.xxxx
        //  x3 = x0 - i3  + 3.0 * C.xxxx
        //  x4 = x0 - 1.0 + 4.0 * C.xxxx
        vec4 x1 = x0 - i1 + C.xxxx;
        vec4 x2 = x0 - i2 + C.yyyy;
        vec4 x3 = x0 - i3 + C.zzzz;
        vec4 x4 = x0 + C.wwww;
    
        // Permutations
        i = mod289(i);
        float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
        vec4 j1 = permute( permute( permute( permute (
                    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    
        // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
    
        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);
    
        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        p4 *= taylorInvSqrt(dot(p4,p4));
    
        // Mix contributions from the five corners
        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
        m0 = m0 * m0;
        m1 = m1 * m1;
        return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
    }
    
    vec3 snoise3( vec3 x ){
        float s  = snoise(vec3( x ));
        float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
        float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    vec3 snoise3( vec4 x ){
        float s  = snoise(vec4( x ));
        float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
        float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    #endif
    
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse; 
    uniform float u_time;
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    
    #ifndef FBM_OCTAVES
    #define FBM_OCTAVES 4
    #endif
    
    #ifndef FBM_NOISE_FNC
    #define FBM_NOISE_FNC(POS_UV) snoise(POS_UV)
    #endif
    
    #ifndef FBM_VALUE_INITIAL
    #define FBM_VALUE_INITIAL 0.0
    #endif
    
    #ifndef FBM_SCALE_SCALAR
    #define FBM_SCALE_SCALAR 2.0
    #endif
    
    #ifndef FBM_AMPLITUD_INITIAL
    #define FBM_AMPLITUD_INITIAL 0.5
    #endif
    
    #ifndef FBM_AMPLITUD_SCALAR
    #define FBM_AMPLITUD_SCALAR 0.5
    #endif
    
    #ifndef FNC_FBM
    #define FNC_FBM
    float fbm(in vec2 st) {
        // Initial values
        float value = FBM_VALUE_INITIAL;
        float amplitud = FBM_AMPLITUD_INITIAL;
    
        // Loop of octaves
        for (int i = 0; i < FBM_OCTAVES; i++) {
            value += amplitud * FBM_NOISE_FNC(st);
            st *= FBM_SCALE_SCALAR;
            amplitud *= FBM_AMPLITUD_SCALAR;
        }
        return value;
    }
    
    float fbm(in vec3 pos) {
        // Initial values
        float value = FBM_VALUE_INITIAL;
        float amplitud = FBM_AMPLITUD_INITIAL;
    
        // Loop of octaves
        for (int i = 0; i < FBM_OCTAVES; i++) {
            value += amplitud * FBM_NOISE_FNC(pos);
            pos *= FBM_SCALE_SCALAR;
            amplitud *= FBM_AMPLITUD_SCALAR;
        }
        return value;
    }
    #endif
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st = ratio(st, u_resolution);
    
        float n = 0.4 + snoise(vec3(st, u_time)) * 0.8;
    
        float noise = fbm(vec3(st, u_time/10.));
        float noise2 = fbm(vec3(st, noise));
        float noise3 = fbm(vec3(st, noise2));
        float noise4 = fbm(vec3(st, noise3));
    
        vec3 color = vec3(st.x,st.y, 1.);
    
        color += noise4;
    
        gl_FragColor = vec4(color,1.0);
    }`
  },
  raymarching: {
    fragmentShader: `#ifdef GL_ES
    precision mediump float;
    #endif
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    float PI = 3.14155925;
    
    #ifndef FNC_RATIO
    #define FNC_RATIO
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    #endif
    
    
    
    float sdSphere(vec3 p, float r) {
        return length(p)-r;
    }
    
    vec2 mousePos = (u_mouse/u_resolution.xy)-.5;
    
    mat4 rotationMatrix(vec3 axis, float angle) {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
        
        return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                    0.0,                                0.0,                                0.0,                                1.0);
    }
    
    vec3 rotate(vec3 v, vec3 axis, float angle) {
      mat4 m = rotationMatrix(axis, angle);
      return (m * vec4(v, 1.0)).xyz;
    }
    
    float sdBox( vec3 p, vec3 b )
    {
      vec3 q = abs(p) - b;
      return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    }
    
    // polynomial smooth min (k = 0.1);
    float smin( float a, float b, float k )
    {
        float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
        return mix( b, a, h ) - k*h*(1.0-h);
    }
    
    float sdf(vec3 p) {
        vec3 p1 = rotate(p, vec3(1.), u_time/2.);
        // float box = sdBox(p1, vec3(0.3));
        float box = smin(sdBox(p1, vec3(0.2)), sdSphere(p, 0.2), .2);
    
        float sphere = sdSphere(p - vec3(.5, .491, 0.), 0.2);
    
        return smin(box, sphere, .4);
    }
    
    vec3 calcNormal( in vec3 p ) // for function f(p)
    {
        const float eps = 0.0001; // or some other value
        const vec2 h = vec2(eps,0);
        return normalize( vec3(sdf(p+h.xyy) - sdf(p-h.xyy),
                               sdf(p+h.yxy) - sdf(p-h.yxy),
                               sdf(p+h.yyx) - sdf(p-h.yyx) ) );
    }
    
    
    
    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }
    
    float luma(vec4 color) {
      return dot(color.rgb, vec3(0.299, 0.587, 0.114));
    }
    
    
    float dither8x8(vec2 position, float brightness) {
      int x = int(mod(position.x, 8.0));
      int y = int(mod(position.y, 8.0));
      int index = x + y * 8;
      float limit = 0.0;
    
      if (x < 8) {
        if (index == 0) limit = 0.015625;
        if (index == 1) limit = 0.515625;
        if (index == 2) limit = 0.140625;
        if (index == 3) limit = 0.640625;
        if (index == 4) limit = 0.046875;
        if (index == 5) limit = 0.546875;
        if (index == 6) limit = 0.171875;
        if (index == 7) limit = 0.671875;
        if (index == 8) limit = 0.765625;
        if (index == 9) limit = 0.265625;
        if (index == 10) limit = 0.890625;
        if (index == 11) limit = 0.390625;
        if (index == 12) limit = 0.796875;
        if (index == 13) limit = 0.296875;
        if (index == 14) limit = 0.921875;
        if (index == 15) limit = 0.421875;
        if (index == 16) limit = 0.203125;
        if (index == 17) limit = 0.703125;
        if (index == 18) limit = 0.078125;
        if (index == 19) limit = 0.578125;
        if (index == 20) limit = 0.234375;
        if (index == 21) limit = 0.734375;
        if (index == 22) limit = 0.109375;
        if (index == 23) limit = 0.609375;
        if (index == 24) limit = 0.953125;
        if (index == 25) limit = 0.453125;
        if (index == 26) limit = 0.828125;
        if (index == 27) limit = 0.328125;
        if (index == 28) limit = 0.984375;
        if (index == 29) limit = 0.484375;
        if (index == 30) limit = 0.859375;
        if (index == 31) limit = 0.359375;
        if (index == 32) limit = 0.0625;
        if (index == 33) limit = 0.5625;
        if (index == 34) limit = 0.1875;
        if (index == 35) limit = 0.6875;
        if (index == 36) limit = 0.03125;
        if (index == 37) limit = 0.53125;
        if (index == 38) limit = 0.15625;
        if (index == 39) limit = 0.65625;
        if (index == 40) limit = 0.8125;
        if (index == 41) limit = 0.3125;
        if (index == 42) limit = 0.9375;
        if (index == 43) limit = 0.4375;
        if (index == 44) limit = 0.78125;
        if (index == 45) limit = 0.28125;
        if (index == 46) limit = 0.90625;
        if (index == 47) limit = 0.40625;
        if (index == 48) limit = 0.25;
        if (index == 49) limit = 0.75;
        if (index == 50) limit = 0.125;
        if (index == 51) limit = 0.625;
        if (index == 52) limit = 0.21875;
        if (index == 53) limit = 0.71875;
        if (index == 54) limit = 0.09375;
        if (index == 55) limit = 0.59375;
        if (index == 56) limit = 1.0;
        if (index == 57) limit = 0.5;
        if (index == 58) limit = 0.875;
        if (index == 59) limit = 0.375;
        if (index == 60) limit = 0.96875;
        if (index == 61) limit = 0.46875;
        if (index == 62) limit = 0.84375;
        if (index == 63) limit = 0.34375;
      }
    
      return brightness < limit ? 0.0 : 1.0;
    }
    
    vec3 dither8x8(vec2 position, vec3 color) {
      return color * dither8x8(position, luma(color));
    }
    
    vec4 dither8x8(vec2 position, vec4 color) {
      return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
    }
    
    
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st = ratio(st, u_resolution);
        vec3 color = vec3(0.);
    
        float dist = length(st - vec2(0.5));
        vec3 bg = mix(vec3(0.), vec3(.3), dist);
        vec3 camPos = vec3(0., 0., 3.);
        vec3 ray = normalize(vec3(st - .5, -1.5));
    
        vec3 rayPos = camPos;
        float t = 0.;
        float tMax = 5.;
        for (int i = 0; i < 256; i++) {
            vec3 pos = camPos + t*ray;
            float h = sdf(pos);
            if (h < 0.0001 || t > tMax) {
                break; 
            }
            t += h;
        }
    
        // color = bg; 
    
        if (t < tMax) {
            vec3 pos = camPos + t*ray;
            color = vec3(1.);
            vec3 normal = calcNormal(pos);
            color = normal;
            float diff = dot(vec3(1.), normal);
            color = vec3(diff);
            float fresnel = pow(1. + dot(ray, normal), 1.);
            color = vec3(fresnel);
            color = mix(color, bg, -fresnel);
        }
        color = vec3(dither8x8(gl_FragCoord.xy, color));
    
    
        gl_FragColor = vec4(color,1.0);
    }`
  },
  fbm: {
    fragmentShader: `#ifdef GL_ES
    precision mediump float;
    #endif
    #ifndef FNC_MOD289
    #define FNC_MOD289
    float mod289(in float x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec2 mod289(in vec2 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec3 mod289(in vec3 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec4 mod289(in vec4 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    #endif
    #ifndef FNC_PERMUTE
    #define FNC_PERMUTE
    float permute(in float x) {
        return mod289(((x * 34.) + 1.)*x);
    }
    
    vec3 permute(in vec3 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 permute(in vec4 x) {
        return mod289(((x * 34.) + 1.)*x);
    }
    #endif
    
    #ifndef FNC_TAYLORINVSQRT
    #define FNC_TAYLORINVSQRT
    float taylorInvSqrt(in float r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec4 taylorInvSqrt(in vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    #endif
    #ifndef FNC_GRAD4
    #define FNC_GRAD4
    vec4 grad4(float j, vec4 ip) {
        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
        vec4 p,s;
    
        p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p, vec4(0.0)));
        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    
        return p;
    }
    #endif
    
    
    /*
    author: [Ian McEwan, Ashima Arts]
    description: Simplex Noise https://github.com/ashima/webgl-noise
    use: snoise(<vec2|vec3|vec4> pos)
    license: |
      Copyright (C) 2011 Ashima Arts. All rights reserved.
      Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      Neither the name of the GPUImage framework nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  
    */
    
    #ifndef FNC_SNOISE
    #define FNC_SNOISE
    float snoise(in vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
    
        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
    
        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
    
        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
    
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
    
        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    
        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
    
    
    float snoise(in vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
    
        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
    
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
    
        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
    
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
    
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
    
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
    
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
    
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
    
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
    
        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
    
        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    float snoise(in vec4 v) {
        const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                            0.276393202250021,  // 2 * G4
                            0.414589803375032,  // 3 * G4
                            -0.447213595499958); // -1 + 4 * G4
    
        // First corner
        vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); // (sqrt(5) - 1)/4
        vec4 x0 = v -   i + dot(i, C.xxxx);
    
        // Other corners
    
        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
        vec4 i0;
        vec3 isX = step( x0.yzw, x0.xxx );
        vec3 isYZ = step( x0.zww, x0.yyz );
        //  i0.x = dot( isX, vec3( 1.0 ) );
        i0.x = isX.x + isX.y + isX.z;
        i0.yzw = 1.0 - isX;
        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
        i0.y += isYZ.x + isYZ.y;
        i0.zw += 1.0 - isYZ.xy;
        i0.z += isYZ.z;
        i0.w += 1.0 - isYZ.z;
    
        // i0 now contains the unique values 0,1,2,3 in each channel
        vec4 i3 = clamp( i0, 0.0, 1.0 );
        vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
        vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );
    
        //  x0 = x0 - 0.0 + 0.0 * C.xxxx
        //  x1 = x0 - i1  + 1.0 * C.xxxx
        //  x2 = x0 - i2  + 2.0 * C.xxxx
        //  x3 = x0 - i3  + 3.0 * C.xxxx
        //  x4 = x0 - 1.0 + 4.0 * C.xxxx
        vec4 x1 = x0 - i1 + C.xxxx;
        vec4 x2 = x0 - i2 + C.yyyy;
        vec4 x3 = x0 - i3 + C.zzzz;
        vec4 x4 = x0 + C.wwww;
    
        // Permutations
        i = mod289(i);
        float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
        vec4 j1 = permute( permute( permute( permute (
                    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    
        // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
    
        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);
    
        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        p4 *= taylorInvSqrt(dot(p4,p4));
    
        // Mix contributions from the five corners
        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
        m0 = m0 * m0;
        m1 = m1 * m1;
        return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
    }
    
    vec3 snoise3( vec3 x ){
        float s  = snoise(vec3( x ));
        float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
        float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    vec3 snoise3( vec4 x ){
        float s  = snoise(vec4( x ));
        float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
        float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    #endif
    
    
    uniform vec2 u_resolution;
    uniform float u_time;
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    
    #ifndef FBM_OCTAVES
    #define FBM_OCTAVES 4
    #endif
    
    #ifndef FBM_NOISE_FNC
    #define FBM_NOISE_FNC(POS_UV) snoise(POS_UV)
    #endif
    
    #ifndef FBM_VALUE_INITIAL
    #define FBM_VALUE_INITIAL 0.0
    #endif
    
    #ifndef FBM_SCALE_SCALAR
    #define FBM_SCALE_SCALAR 2.0
    #endif
    
    #ifndef FBM_AMPLITUD_INITIAL
    #define FBM_AMPLITUD_INITIAL 0.5
    #endif
    
    #ifndef FBM_AMPLITUD_SCALAR
    #define FBM_AMPLITUD_SCALAR 0.5
    #endif
    
    #ifndef FNC_FBM
    #define FNC_FBM
    float fbm(in vec2 st) {
        // Initial values
        float value = FBM_VALUE_INITIAL;
        float amplitud = FBM_AMPLITUD_INITIAL;
    
        // Loop of octaves
        for (int i = 0; i < FBM_OCTAVES; i++) {
            value += amplitud * FBM_NOISE_FNC(st);
            st *= FBM_SCALE_SCALAR;
            amplitud *= FBM_AMPLITUD_SCALAR;
        }
        return value;
    }
    
    float fbm(in vec3 pos) {
        // Initial values
        float value = FBM_VALUE_INITIAL;
        float amplitud = FBM_AMPLITUD_INITIAL;
    
        // Loop of octaves
        for (int i = 0; i < FBM_OCTAVES; i++) {
            value += amplitud * FBM_NOISE_FNC(pos);
            pos *= FBM_SCALE_SCALAR;
            amplitud *= FBM_AMPLITUD_SCALAR;
        }
        return value;
    }
    #endif
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        vec2 ratiost = ratio(st, u_resolution);
    
    
        float noise = fbm(vec3(ratiost, u_time/40.));
        float noise2 = fbm(vec3(ratiost, noise));
        float noise3 = fbm(vec3(ratiost, noise2));
    
        vec3 color = vec3(0.);
    
        color = vec3(ratiost.x,ratiost.y, 1.);
        color += noise3;
    
        color -= distance(vec2(st.y, st.x), vec2(0., st.x))*3.;
    
        gl_FragColor = vec4(color,1.);
    }`
  },
  template: {
    fragmentShader: `#ifdef GL_ES
    precision mediump float;
    #endif
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse; 
    uniform float u_time;
    
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        vec3 color = vec3(0.);
    
        color = vec3(st.x,st.y,abs(sin(u_time)));
    
        gl_FragColor = vec4(color,1.0);
    }`
  },
  ditherTexture: {
    fragmentShader: `// Author:
    // Title:
    
    precision mediump float;
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse; 
    uniform float u_time;
    
    uniform sampler2D u_texture_1;
    uniform vec2 u_texture_1_Resolution;
    
    
    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }
    
    float luma(vec4 color) {
      return dot(color.rgb, vec3(0.299, 0.587, 0.114));
    }
    
    
    float dither8x8(vec2 position, float brightness) {
      int x = int(mod(position.x, 8.0));
      int y = int(mod(position.y, 8.0));
      int index = x + y * 8;
      float limit = 0.0;
    
      if (x < 8) {
        if (index == 0) limit = 0.015625;
        if (index == 1) limit = 0.515625;
        if (index == 2) limit = 0.140625;
        if (index == 3) limit = 0.640625;
        if (index == 4) limit = 0.046875;
        if (index == 5) limit = 0.546875;
        if (index == 6) limit = 0.171875;
        if (index == 7) limit = 0.671875;
        if (index == 8) limit = 0.765625;
        if (index == 9) limit = 0.265625;
        if (index == 10) limit = 0.890625;
        if (index == 11) limit = 0.390625;
        if (index == 12) limit = 0.796875;
        if (index == 13) limit = 0.296875;
        if (index == 14) limit = 0.921875;
        if (index == 15) limit = 0.421875;
        if (index == 16) limit = 0.203125;
        if (index == 17) limit = 0.703125;
        if (index == 18) limit = 0.078125;
        if (index == 19) limit = 0.578125;
        if (index == 20) limit = 0.234375;
        if (index == 21) limit = 0.734375;
        if (index == 22) limit = 0.109375;
        if (index == 23) limit = 0.609375;
        if (index == 24) limit = 0.953125;
        if (index == 25) limit = 0.453125;
        if (index == 26) limit = 0.828125;
        if (index == 27) limit = 0.328125;
        if (index == 28) limit = 0.984375;
        if (index == 29) limit = 0.484375;
        if (index == 30) limit = 0.859375;
        if (index == 31) limit = 0.359375;
        if (index == 32) limit = 0.0625;
        if (index == 33) limit = 0.5625;
        if (index == 34) limit = 0.1875;
        if (index == 35) limit = 0.6875;
        if (index == 36) limit = 0.03125;
        if (index == 37) limit = 0.53125;
        if (index == 38) limit = 0.15625;
        if (index == 39) limit = 0.65625;
        if (index == 40) limit = 0.8125;
        if (index == 41) limit = 0.3125;
        if (index == 42) limit = 0.9375;
        if (index == 43) limit = 0.4375;
        if (index == 44) limit = 0.78125;
        if (index == 45) limit = 0.28125;
        if (index == 46) limit = 0.90625;
        if (index == 47) limit = 0.40625;
        if (index == 48) limit = 0.25;
        if (index == 49) limit = 0.75;
        if (index == 50) limit = 0.125;
        if (index == 51) limit = 0.625;
        if (index == 52) limit = 0.21875;
        if (index == 53) limit = 0.71875;
        if (index == 54) limit = 0.09375;
        if (index == 55) limit = 0.59375;
        if (index == 56) limit = 1.0;
        if (index == 57) limit = 0.5;
        if (index == 58) limit = 0.875;
        if (index == 59) limit = 0.375;
        if (index == 60) limit = 0.96875;
        if (index == 61) limit = 0.46875;
        if (index == 62) limit = 0.84375;
        if (index == 63) limit = 0.34375;
      }
    
      return brightness < limit ? 0.0 : 1.0;
    }
    
    vec3 dither8x8(vec2 position, vec3 color) {
      return color * dither8x8(position, luma(color));
    }
    
    vec4 dither8x8(vec2 position, vec4 color) {
      return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
    }
    
    
    #ifndef FNC_RATIO
    #define FNC_RATIO
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    #endif
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st = ratio(st, u_resolution);
        vec4 color = vec4(st.x,st.y,0.0,1.0);
    
    
        float grid = u_resolution.x/3.5;
        vec2 st_f = fract(st);
        vec2 st_i = floor(st * grid)/grid;
        // st_i = st;
        
        // color = vec4(st.x,st.y,abs(sin(u_time)), 1.);
        color = texture2D(u_texture_1,st_i);
        color = vec4(dither8x8(gl_FragCoord.xy, color));
    
    
        gl_FragColor = color;
    }`,
    texture: "/assets/pictures/a.jpg"
  },
  simplexNoise: {
    fragmentShader: ` #ifdef GL_ES
    precision mediump float;
    #endif
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    
    #ifndef FNC_RATIO
    #define FNC_RATIO
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    #endif
    #ifndef FNC_HSV2RGB
    #define FNC_HSV2RGB
    vec3 hsv2rgb(in vec3 hsb) {
        vec3 rgb = clamp(abs(mod(hsb.x * 6. + vec3(0., 4., 2.), 
                                6.) - 3.) - 1.,
                          0.,
                          1.);
        #ifdef HSV2RGB_SMOOTH
        rgb = rgb*rgb*(3. - 2. * rgb);
        #endif
        return hsb.z * mix(vec3(1.), rgb, hsb.y);
    }
    
    vec4 hsv2rgb(in vec4 hsb) {
        return vec4(hsv2rgb(hsb.rgb), hsb.a);
    }
    #endif
    
    #ifndef FNC_MOD289
    #define FNC_MOD289
    float mod289(in float x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec2 mod289(in vec2 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec3 mod289(in vec3 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    
    vec4 mod289(in vec4 x) {
      return x - floor(x * (1. / 289.)) * 289.;
    }
    #endif
    
    #ifndef FNC_PERMUTE
    #define FNC_PERMUTE
    float permute(in float x) {
         return mod289(((x * 34.) + 1.)*x);
    }
    
    vec3 permute(in vec3 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 permute(in vec4 x) {
         return mod289(((x * 34.) + 1.)*x);
    }
    #endif
    
    
    #ifndef FNC_TAYLORINVSQRT
    #define FNC_TAYLORINVSQRT
    float taylorInvSqrt(in float r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec4 taylorInvSqrt(in vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    #endif
    
    #ifndef FNC_GRAD4
    #define FNC_GRAD4
    vec4 grad4(float j, vec4 ip) {
        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
        vec4 p,s;
    
        p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p, vec4(0.0)));
        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    
        return p;
    }
    #endif
    
    
    /*
    author: [Ian McEwan, Ashima Arts]
    description: Simplex Noise https://github.com/ashima/webgl-noise
    use: snoise(<vec2|vec3|vec4> pos)
    license: |
      Copyright (C) 2011 Ashima Arts. All rights reserved.
      Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      Neither the name of the GPUImage framework nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  
    */
    
    #ifndef FNC_SNOISE
    #define FNC_SNOISE
    float snoise(in vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
    
        // Other corners
        vec2 i1;
        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
        //i1.y = 1.0 - i1.x;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        // x0 = x0 - 0.0 + 0.0 * C.xx ;
        // x1 = x0 - i1 + 1.0 * C.xx ;
        // x2 = x0 - 1.0 + 2.0 * C.xx ;
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
    
        // Permutations
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
    
        // Gradients: 41 points uniformly over a line, mapped onto a diamond.
        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
    
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
    
        // Normalise gradients implicitly by scaling m
        // Approximation of: m *= inversesqrt( a0*a0 + h*h );
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    
        // Compute final noise value at P
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
    
    
    float snoise(in vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
    
        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
    
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
    
        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
    
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
    
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
    
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
    
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
    
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
    
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
    
        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
    
        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    float snoise(in vec4 v) {
        const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                            0.276393202250021,  // 2 * G4
                            0.414589803375032,  // 3 * G4
                            -0.447213595499958); // -1 + 4 * G4
    
        // First corner
        vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); // (sqrt(5) - 1)/4
        vec4 x0 = v -   i + dot(i, C.xxxx);
    
        // Other corners
    
        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
        vec4 i0;
        vec3 isX = step( x0.yzw, x0.xxx );
        vec3 isYZ = step( x0.zww, x0.yyz );
        //  i0.x = dot( isX, vec3( 1.0 ) );
        i0.x = isX.x + isX.y + isX.z;
        i0.yzw = 1.0 - isX;
        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
        i0.y += isYZ.x + isYZ.y;
        i0.zw += 1.0 - isYZ.xy;
        i0.z += isYZ.z;
        i0.w += 1.0 - isYZ.z;
    
        // i0 now contains the unique values 0,1,2,3 in each channel
        vec4 i3 = clamp( i0, 0.0, 1.0 );
        vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
        vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );
    
        //  x0 = x0 - 0.0 + 0.0 * C.xxxx
        //  x1 = x0 - i1  + 1.0 * C.xxxx
        //  x2 = x0 - i2  + 2.0 * C.xxxx
        //  x3 = x0 - i3  + 3.0 * C.xxxx
        //  x4 = x0 - 1.0 + 4.0 * C.xxxx
        vec4 x1 = x0 - i1 + C.xxxx;
        vec4 x2 = x0 - i2 + C.yyyy;
        vec4 x3 = x0 - i3 + C.zzzz;
        vec4 x4 = x0 + C.wwww;
    
        // Permutations
        i = mod289(i);
        float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
        vec4 j1 = permute( permute( permute( permute (
                    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    
        // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
    
        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);
    
        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        p4 *= taylorInvSqrt(dot(p4,p4));
    
        // Mix contributions from the five corners
        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
        m0 = m0 * m0;
        m1 = m1 * m1;
        return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
    }
    
    vec3 snoise3( vec3 x ){
        float s  = snoise(vec3( x ));
        float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
        float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    vec3 snoise3( vec4 x ){
        float s  = snoise(vec4( x ));
        float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
        float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
        vec3 c = vec3( s , s1 , s2 );
        return c;
    }
    
    #endif
    
    
    void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st = ratio(st, u_resolution);
        vec3 color = vec3(0.);
    
        float grid = u_resolution.x/50.;
        vec2 st_i = floor(st * grid)/grid;
    
        float n = 0.4 + snoise(vec3(st_i, u_time)) * 0.8;
          
        color += hsv2rgb(vec3(n * .41, 1., 1.));
    
        gl_FragColor = vec4(color,1.0);
    }
    `
  },
  sun: {
    fragmentShader: `#ifdef GL_ES
    precision mediump float;
    #endif
    
    
    uniform vec2 u_resolution;
    uniform vec2 u_mouse; 
    uniform float u_time;
    
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_STROKE
    #define FNC_STROKE
    
    float stroke(float x, float s, float w) {
        float d= step(s, x+w*.5) - step(s, x-w*.5);
        return clamp(d, 0., 1.);
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_CIRCLESDF
    #define FNC_CIRCLESDF
    
    float circleSDF(vec2 st) {
    
        return length(st-.5)*2.;
    
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_FILL
    #define FNC_FILL
    
    float fill(float x, float size) {
        return 1.-step(size, x);
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_TRISDF
    #define FNC_TRISDF
    
    float triSDF(vec2 st) {
    
        st = (st*2.-1.)*2.;
        return max(abs(st.x) * 0.866025 +st.y * 0.5, -st.y * 0.5);
    
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_ROTATE
    #define FNC_ROTATE
    
    vec2 rotate(vec2 st, float a) {
        st = mat2(cos(a), -sin(a),
                    sin(a), cos(a))*(st-.5);
        return st+.5;
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_POLYSDF
    #define FNC_POLYSDF
    
    #ifndef PI
    #define PI 3.1415926535897932384626433832795
    #endif
    
    #ifndef TAU
    #define TAU 6.2831853071795864769252867665590
    #endif
    
    float polySDF(vec2 st, int V) {
    
        st = st*2.-1.;
        float a = atan(st.x, st.y)+PI;
        float r = length(st);
        float v = TAU/float(V);
        return cos(floor(.5+a/v)*v-a)*r;
    
    }
    
    #endif
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #ifndef FNC_STARSDF
    #define FNC_STARSDF
    
    #ifndef PI
    #define PI 3.1415926535897932384626433832795
    #endif
    
    #ifndef TAU
    #define TAU 6.2831853071795864769252867665590
    #endif
    
    float starSDF(vec2 st, int V, float s) {
    
        st = st*4.-2.;
        float a = atan(st.y, st.x)/TAU;
        float seg = a * float(V);
        a = ((floor(seg) + .5)/float(V) + 
            mix(s, -s, step(.5, fract(seg))))
            * TAU;
        return abs(dot(vec2(cos(a), sin(a)), 
            st));
    
    }
    
    #endif
    
    #ifndef FNC_RATIO
    #define FNC_RATIO
    vec2 ratio(in vec2 st, in vec2 s) {
        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),
                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),
                    step(s.x,s.y));
    }
    #endif
    
    
    void main() {
        float QRT_PI = PI/4.;
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st = ratio(st, u_resolution);
        vec3 color = vec3(0.);
    
        st = st*1.5;
        st = st-.25;
    
        float bg = starSDF(st, 16, .1);
        color += fill(bg, 1.3);
        float l = 0.;
        for (float i = 0.; i < 8.; i++) {
            vec2 xy = rotate(st, QRT_PI*i);
            xy.y -= .3;
            float tri = polySDF(xy, 3);
            color += fill(tri, .3);
            l += stroke(tri, .3, .03);
        }
        color *= 1.-l;
        float c = polySDF(st, 8);
        color -= stroke(c, .15, .04);
    
        gl_FragColor = vec4(color,1.0);
    }`
  }
};
const p5 = {
  sea: {
    setup: function setup(p5, canvasParentRef) {
      p5.createCanvas(canvasParentRef.clientWidth, 500, p5.WEBGL).parent(canvasParentRef);
    },
    windowResized: function windowResized(p5) {
      p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, 500);
    },
    draw: function draw(p5) {
      p5.background(1050);
      p5.strokeWeight(3);
      p5.translate(800, 200, -90);
      p5.rotateY(-90);

      for (let i = 0; i < 15; i++) {
        p5.push();

        for (let j = 0; j < 15; j++) {
          if (j < i) continue;
          p5.push();
          p5.translate(i * 75, 0, j * 75);
          p5.box(70, Math.sin(p5.frameCount * 0.02 + j * 0.5 + i * 0.5) * 60 + 90, 70);
          p5.pop();
        }

        p5.pop();
      }
    }
  }
};
const aboutPageContent = {
  text: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["This site was made by me, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
        href: "https://www.linkedin.com/in/francesco-arillotta-104aa8122/",
        children: "Francesco Arillotta."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1690,
        columnNumber: 33
      }, undefined), " Think of it as a fun weekend project to know me - a sort of expressive experiment through the weird crap I do."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1689,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "I used a mix of technologies that I am very passionate about. Among those technologies are: Next.js, React, Typescript, GLSL, Three.js, P5.js, Framer/motion."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1692,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1695,
      columnNumber: 5
    }, undefined)]
  }, void 0, true)
};
const roles = [{
  company: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    href: "https://www.ynap.com/",
    children: "Yoox Net-a-Porter"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1704,
    columnNumber: 14
  }, undefined),
  title: "Frontend Developer",
  location: "Bologna, Italy",
  date: "May 2021 - Present",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1709,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1712,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 1708,
    columnNumber: 15
  }, undefined),
  shader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__.Shader, {
    shader: shaders.fullscreenFbm
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1716,
    columnNumber: 13
  }, undefined)
}, {
  company: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    href: "https://www.sovrn.com/",
    children: "Sovrn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1718,
    columnNumber: 14
  }, undefined),
  title: "Fullstack Software Engineer",
  location: "London, United Kingdom",
  date: "July 2020 - April 2021",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1723,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1726,
      columnNumber: 7
    }, undefined)]
  }, void 0, true),
  shader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__.Shader, {
    shader: shaders.sun
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1730,
    columnNumber: 13
  }, undefined)
}, {
  company: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    href: "https://www.sovrn.com/",
    children: "Sovrn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1732,
    columnNumber: 14
  }, undefined),
  title: "Implementation Engineer II, Market Dev",
  location: "London, United Kingdom",
  date: "January 2020 - June 2020",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1737,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1740,
      columnNumber: 7
    }, undefined)]
  }, void 0, true),
  shader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__.Shader, {
    shader: shaders.ditherTexture
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1744,
    columnNumber: 13
  }, undefined)
}, {
  company: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    href: "https://www.sovrn.com/",
    children: "Sovrn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1746,
    columnNumber: 14
  }, undefined),
  title: "Solutions Engineer",
  location: "London, United Kingdom",
  date: "May 2019 - December 2019",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1751,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1754,
      columnNumber: 7
    }, undefined)]
  }, void 0, true),
  shader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__.Shader, {
    shader: shaders.simplexNoise
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1758,
    columnNumber: 13
  }, undefined)
}, {
  company: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    href: "https://www.sovrn.com/",
    children: "Sovrn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1760,
    columnNumber: 14
  }, undefined),
  title: "Operations Specialist",
  location: "London, United Kingdom",
  date: "August 2018 - May 2019",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1765,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1768,
      columnNumber: 7
    }, undefined)]
  }, void 0, true),
  shader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_2__.Shader, {
    shader: shaders.raymarching
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1772,
    columnNumber: 13
  }, undefined)
}];
const terms = ["writing code", "listening to music", "watching a film", "possibly sleeping"];

const homepageText = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: ["Hi, I'm Fran. As you read this, I am ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextCarousel_TextCarousel__WEBPACK_IMPORTED_MODULE_3__.TextCarousel, {
    terms: terms,
    color: "hsl(212deg 90% 64%)"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1778,
    columnNumber: 61
  }, undefined), " in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("del", {
    children: "London"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1778,
    columnNumber: 124
  }, undefined), " Bologna, Italy."]
}, void 0, true);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Shader/Shader */ "./components/Shader/Shader.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.tsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.tsx");

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\pages\\index.js";




function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().background),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__.Shader, {
        shader: _constants__WEBPACK_IMPORTED_MODULE_2__.shaders.fbm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {
      variant: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().spacer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().hi)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().article),
        children: _constants__WEBPACK_IMPORTED_MODULE_2__.homepageText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursorTracker": function() { return /* binding */ cursorTracker; },
/* harmony export */   "mouseOutInEventListener": function() { return /* binding */ mouseOutInEventListener; },
/* harmony export */   "renderShader": function() { return /* binding */ renderShader; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

let cursor;

function cursorTracker() {
  cursor = cursor || window.document.getElementById("cursor");
  window.document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

function mouseOutInEventListener(el) {
  cursor = cursor || window.document.getElementById("cursor");
  const mouseoverEvent = el.addEventListener("mouseover", () => {
    cursor.style.top = "-40px";
    cursor.style.left = "-40px";
    cursor.style.height = "80px";
    cursor.style.width = "80px";
  });
  const clickEvent = el.addEventListener("click", () => {
    cursor.style.top = "-20px";
    cursor.style.left = "-20px";
    cursor.style.height = "40px";
    cursor.style.width = "40px";
  });
  const mouseoutEvent = el.addEventListener("mouseout", () => {
    cursor.style.top = "-20px";
    cursor.style.left = "-20px";
    cursor.style.height = "40px";
    cursor.style.width = "40px";
  });
  return () => {
    el.removeEventListener('mouseout', mouseoutEvent);
    el.removeEventListener('mouseover', mouseoverEvent);
    el.removeEventListener('click', clickEvent);
  };
}

function renderShader(canvas, fragmentShader, texture = "") {
  const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    canvas
  });
  renderer.autoClearColor = false;
  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, // left
  1, // right
  1, // top
  -1, // bottom
  -1, // near,
  1);
  const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
  const plane = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(2, 2);
  let tex = null;

  if (texture) {
    const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
    tex = textureLoader.load(texture);
  }

  const uniforms = {
    u_time: {
      value: 0
    },
    u_resolution: {
      value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3()
    },
    u_texture_1: {
      type: "t",
      value: tex
    }
  };
  const material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
    fragmentShader,
    uniforms
  });
  scene.add(new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(plane, material));

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
    }

    return needResize;
  }

  ;

  function render(time) {
    time *= 0.001; // convert to seconds

    resizeRendererToDisplaySize(renderer);
    const canvas = renderer.domElement;
    uniforms.u_resolution.value.set(canvas.width, canvas.height, 1);
    uniforms.u_time.value = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}



/***/ }),

/***/ "./components/HeaderLink/HeaderLink.module.css":
/*!*****************************************************!*\
  !*** ./components/HeaderLink/HeaderLink.module.css ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"link": "HeaderLink_link__15XIz",
	"linkDia": "HeaderLink_linkDia__3eBOz"
};


/***/ }),

/***/ "./components/Header/Header.module.css":
/*!*********************************************!*\
  !*** ./components/Header/Header.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"headerWrapper": "Header_headerWrapper__2mSeU"
};


/***/ }),

/***/ "./components/TextCarousel/TextCarousel.module.css":
/*!*********************************************************!*\
  !*** ./components/TextCarousel/TextCarousel.module.css ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"termWrapper": "TextCarousel_termWrapper__BmcAH",
	"term": "TextCarousel_term__w3WXT"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"background": "Home_background__-lAKF",
	"main": "Home_main__1x8gC",
	"spacer": "Home_spacer__2RAZ-",
	"article": "Home_article__O1Srv"
};


/***/ }),

/***/ "../node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("three");;

/***/ }),

/***/ "?9d88":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuY2hvci9BbmNob3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyTGluay9IZWFkZXJMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhZGVyL1NoYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0Q2Fyb3VzZWwvVGV4dENhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyTGluay9IZWFkZXJMaW5rLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0Q2Fyb3VzZWwvVGV4dENhcm91c2VsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZVwiIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcZnJhcmlcXERlc2t0b3BcXGRldlxccGVyc29uYWwtc2l0ZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQW5jaG9yIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImV2ZW50c0NsZWFudXAiLCJtb3VzZU91dEluRXZlbnRMaXN0ZW5lciIsIkhlYWRlckxpbmsiLCJIZWFkZXIiLCJ2YXJpYW50IiwiY29sb3IiLCJTaGFkZXIiLCJzaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInRleHR1cmUiLCJjYW52YXMiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJyZW5kZXJTaGFkZXIiLCJ3aWR0aCIsImhlaWdodCIsInZhcmlhbnRzIiwiZW50ZXIiLCJvcGFjaXR5IiwiY2VudGVyIiwiZXhpdCIsInpJbmRleCIsIlRleHRDYXJvdXNlbCIsInRlcm1zIiwiaW5kZXgiLCJzZXRJbmRleCIsInVzZVN0YXRlIiwiYWN0aXZlRWwiLCJwYXJlbnRFbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJjbGllbnRXaWR0aCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJzaGFkZXJzIiwiZnVsbHNjcmVlbkZibSIsInJheW1hcmNoaW5nIiwiZmJtIiwidGVtcGxhdGUiLCJkaXRoZXJUZXh0dXJlIiwic2ltcGxleE5vaXNlIiwic3VuIiwicDUiLCJzZWEiLCJzZXR1cCIsImNhbnZhc1BhcmVudFJlZiIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwicGFyZW50Iiwid2luZG93UmVzaXplZCIsInJlc2l6ZUNhbnZhcyIsInBhcmVudEVsZW1lbnQiLCJkcmF3IiwiYmFja2dyb3VuZCIsInN0cm9rZVdlaWdodCIsInRyYW5zbGF0ZSIsInJvdGF0ZVkiLCJqIiwiYm94Iiwic2luIiwiZnJhbWVDb3VudCIsInBvcCIsImFib3V0UGFnZUNvbnRlbnQiLCJyb2xlcyIsImNvbXBhbnkiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGF0ZSIsImhvbWVwYWdlVGV4dCIsIkhvbWUiLCJoaSIsImN1cnNvciIsImN1cnNvclRyYWNrZXIiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiY2xpZW50WSIsIm1vdXNlb3ZlckV2ZW50IiwidG9wIiwibGVmdCIsImNsaWNrRXZlbnQiLCJtb3VzZW91dEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlcmVyIiwiVEhSRUUiLCJhdXRvQ2xlYXJDb2xvciIsImNhbWVyYSIsInNjZW5lIiwicGxhbmUiLCJ0ZXgiLCJ0ZXh0dXJlTG9hZGVyIiwibG9hZCIsInVuaWZvcm1zIiwidV90aW1lIiwidV9yZXNvbHV0aW9uIiwidV90ZXh0dXJlXzEiLCJtYXRlcmlhbCIsImFkZCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJuZWVkUmVzaXplIiwic2V0U2l6ZSIsInJlbmRlciIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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LEVBQUU7QUFDYmhDLGtCQUFjLEVBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6WGlCLEdBREQ7QUE0WGRpQyxhQUFXLEVBQUU7QUFDWGpDLGtCQUFjLEVBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwTmUsR0E1WEM7QUFrbEJka0MsS0FBRyxFQUFFO0FBQ0hsQyxrQkFBYyxFQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBelhPLEdBbGxCUztBQTY4QmRtQyxVQUFRLEVBQUU7QUFDUm5DLGtCQUFjLEVBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQlksR0E3OEJJO0FBZytCZG9DLGVBQWEsRUFBRTtBQUNicEMsa0JBQWMsRUFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQXRJaUI7QUF1SWJDLFdBQU8sRUFBRTtBQXZJSSxHQWgrQkQ7QUF5bUNkb0MsY0FBWSxFQUFFO0FBQ1pyQyxrQkFBYyxFQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6VmdCLEdBem1DQTtBQW84Q2RzQyxLQUFHLEVBQUU7QUFDSHRDLGtCQUFjLEVBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhLTztBQXA4Q1MsQ0FBaEI7QUFnbkRBLE1BQU11QyxFQUEyQixHQUFHO0FBQ2xDQyxLQUFHLEVBQUU7QUFDSEMsU0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZ0JGLEVBQWhCLEVBQW9CRyxlQUFwQixFQUFxQztBQUMxQ0gsUUFBRSxDQUFDSSxZQUFILENBQWdCRCxlQUFlLENBQUNoQixXQUFoQyxFQUE2QyxHQUE3QyxFQUFrRGEsRUFBRSxDQUFDSyxLQUFyRCxFQUE0REMsTUFBNUQsQ0FBbUVILGVBQW5FO0FBQ0QsS0FIRTtBQUlISSxpQkFBYSxFQUFFLFNBQVNBLGFBQVQsQ0FBd0JQLEVBQXhCLEVBQTRCO0FBQ3pDQSxRQUFFLENBQUNRLFlBQUgsQ0FBZ0JSLEVBQUUsQ0FBQyxRQUFELENBQUYsQ0FBYVMsYUFBYixDQUEyQnRCLFdBQTNDLEVBQXdELEdBQXhEO0FBQ0QsS0FORTtBQU9IdUIsUUFBSSxFQUFFLFNBQVNBLElBQVQsQ0FBZVYsRUFBZixFQUFtQjtBQUN2QkEsUUFBRSxDQUFDVyxVQUFILENBQWMsSUFBZDtBQUNBWCxRQUFFLENBQUNZLFlBQUgsQ0FBZ0IsQ0FBaEI7QUFFQVosUUFBRSxDQUFDYSxTQUFILENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixDQUFDLEVBQXhCO0FBRUFiLFFBQUUsQ0FBQ2MsT0FBSCxDQUFXLENBQUMsRUFBWjs7QUFFQSxXQUFLLElBQUlsRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCb0UsVUFBRSxDQUFDbEssSUFBSDs7QUFDRixhQUFLLElBQUlpTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLGNBQUlBLENBQUMsR0FBR25GLENBQVIsRUFBVztBQUNYb0UsWUFBRSxDQUFDbEssSUFBSDtBQUNBa0ssWUFBRSxDQUFDYSxTQUFILENBQWFqRixDQUFDLEdBQUcsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0JtRixDQUFDLEdBQUcsRUFBNUI7QUFDQWYsWUFBRSxDQUFDZ0IsR0FBSCxDQUFPLEVBQVAsRUFBV25YLElBQUksQ0FBQ29YLEdBQUwsQ0FBU2pCLEVBQUUsQ0FBQ2tCLFVBQUgsR0FBZ0IsSUFBaEIsR0FBdUJILENBQUMsR0FBQyxHQUF6QixHQUErQm5GLENBQUMsR0FBQyxHQUExQyxJQUFrRCxFQUFsRCxHQUF1RCxFQUFsRSxFQUFzRSxFQUF0RTtBQUNBb0UsWUFBRSxDQUFDbUIsR0FBSDtBQUNEOztBQUNEbkIsVUFBRSxDQUFDbUIsR0FBSDtBQUVEO0FBQ0Y7QUEzQkU7QUFENkIsQ0FBcEM7QUFnQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFFdkIzVSxNQUFJLGVBQUU7QUFBQSw0QkFDSjtBQUFBLDREQUM0Qiw4REFBQyw2REFBRDtBQUFRLFlBQUksRUFBRSw0REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJLGVBSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkksZUFPSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSTtBQUFBO0FBRmlCLENBQXpCO0FBZ0JBLE1BQU00VSxLQUFjLEdBQUcsQ0FDckI7QUFDRUMsU0FBTyxlQUFFLDhEQUFDLDZEQUFEO0FBQVEsUUFBSSxFQUFFLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFg7QUFFRUMsT0FBSyxFQUFFLG9CQUZUO0FBR0VDLFVBQVEsRUFBRSxnQkFIWjtBQUlFQyxNQUFJLEVBQUUsb0JBSlI7QUFLRXpaLFVBQVEsZUFBRTtBQUFBLDRCQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLGVBSVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTFo7QUFhRXdWLFFBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFRLFVBQU0sRUFBRWdDLE9BQU8sQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJWLENBRHFCLEVBZWxCO0FBQ0Q2QixTQUFPLGVBQUUsOERBQUMsNkRBQUQ7QUFBUSxRQUFJLEVBQUUsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUjtBQUVEQyxPQUFLLEVBQUUsNkJBRk47QUFHREMsVUFBUSxFQUFFLHdCQUhUO0FBSURDLE1BQUksRUFBRSx3QkFKTDtBQUtEelosVUFBUSxlQUFFO0FBQUEsNEJBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFEsZUFJUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUTtBQUFBLGtCQUxUO0FBYUR3VixRQUFNLGVBQUUsOERBQUMsNkRBQUQ7QUFBUSxVQUFNLEVBQUVnQyxPQUFPLENBQUNPO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiUCxDQWZrQixFQTZCbEI7QUFDRHVCLFNBQU8sZUFBRSw4REFBQyw2REFBRDtBQUFRLFFBQUksRUFBRSx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBRURDLE9BQUssRUFBRSx3Q0FGTjtBQUdEQyxVQUFRLEVBQUUsd0JBSFQ7QUFJREMsTUFBSSxFQUFFLDBCQUpMO0FBS0R6WixVQUFRLGVBQUU7QUFBQSw0QkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUlSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpRO0FBQUEsa0JBTFQ7QUFhRHdWLFFBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFRLFVBQU0sRUFBRWdDLE9BQU8sQ0FBQ0s7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJQLENBN0JrQixFQTJDbEI7QUFDRHlCLFNBQU8sZUFBRSw4REFBQyw2REFBRDtBQUFRLFFBQUksRUFBRSx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBRURDLE9BQUssRUFBRSxvQkFGTjtBQUdEQyxVQUFRLEVBQUUsd0JBSFQ7QUFJREMsTUFBSSxFQUFFLDBCQUpMO0FBS0R6WixVQUFRLGVBQUU7QUFBQSw0QkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUlSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpRO0FBQUEsa0JBTFQ7QUFhRHdWLFFBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFRLFVBQU0sRUFBRWdDLE9BQU8sQ0FBQ007QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJQLENBM0NrQixFQXlEbEI7QUFDRHdCLFNBQU8sZUFBRSw4REFBQyw2REFBRDtBQUFRLFFBQUksRUFBRSx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBRURDLE9BQUssRUFBRSx1QkFGTjtBQUdEQyxVQUFRLEVBQUUsd0JBSFQ7QUFJREMsTUFBSSxFQUFFLHdCQUpMO0FBS0R6WixVQUFRLGVBQUU7QUFBQSw0QkFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUlSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpRO0FBQUEsa0JBTFQ7QUFhRHdWLFFBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFRLFVBQU0sRUFBRWdDLE9BQU8sQ0FBQ0U7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJQLENBekRrQixDQUF2QjtBQTBFQSxNQUFNbEIsS0FBSyxHQUFHLENBQUMsY0FBRCxFQUFpQixvQkFBakIsRUFBdUMsaUJBQXZDLEVBQTBELG1CQUExRCxDQUFkOztBQUVBLE1BQU1rRCxZQUFZLGdCQUFHO0FBQUEsbUVBQXVDLDhEQUFDLCtFQUFEO0FBQWMsU0FBSyxFQUFFbEQsS0FBckI7QUFBNEIsU0FBSyxFQUFFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkMsdUJBQXNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRHO0FBQUEsZ0JBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2p2REE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTbUQsSUFBVCxHQUFnQjtBQUU3QixzQkFDRTtBQUFLLGFBQVMsRUFBRXBVLDBFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSwyRUFBaEI7QUFBQSw2QkFDSSw4REFBQyw2REFBRDtBQUFRLGNBQU0sRUFBRWlTLG1EQUFXRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsNkRBQUQ7QUFBUSxhQUFPLEVBQUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBTSxlQUFTLEVBQUVwUyxxRUFBakI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHVFQUFoQjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBRUEsbUVBQVNxVTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBUyxpQkFBUyxFQUFFclUsd0VBQXBCO0FBQUEsa0JBQ0ltVSxvREFBWUE7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFFQSxJQUFJRyxNQUFKOztBQUVBLFNBQVNDLGFBQVQsR0FBeUI7QUFFckJELFFBQU0sR0FBR0EsTUFBTSxJQUFJalgsTUFBTSxDQUFDRCxRQUFQLENBQWdCb1gsY0FBaEIsQ0FBK0IsUUFBL0IsQ0FBbkI7QUFDQW5YLFFBQU0sQ0FBQ0QsUUFBUCxDQUFnQnFYLGdCQUFoQixDQUFpQyxXQUFqQyxFQUErQzdiLENBQUQsSUFBSztBQUUvQzBiLFVBQU0sQ0FBQzNDLEtBQVAsQ0FBYStDLFNBQWIsR0FBMEIsYUFBWTliLENBQUMsQ0FBQytiLE9BQVEsT0FBTS9iLENBQUMsQ0FBQ2djLE9BQVEsS0FBaEU7QUFFSCxHQUpEO0FBTUg7O0FBRUQsU0FBU2pGLHVCQUFULENBQWlDNVUsRUFBakMsRUFBcUM7QUFFakN1WixRQUFNLEdBQUdBLE1BQU0sSUFBSWpYLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQm9YLGNBQWhCLENBQStCLFFBQS9CLENBQW5CO0FBQ0EsUUFBTUssY0FBYyxHQUFHOVosRUFBRSxDQUFDMFosZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUMsTUFBSTtBQUV4REgsVUFBTSxDQUFDM0MsS0FBUCxDQUFhbUQsR0FBYixHQUFtQixPQUFuQjtBQUNBUixVQUFNLENBQUMzQyxLQUFQLENBQWFvRCxJQUFiLEdBQW9CLE9BQXBCO0FBQ0FULFVBQU0sQ0FBQzNDLEtBQVAsQ0FBYWxCLE1BQWIsR0FBc0IsTUFBdEI7QUFDQTZELFVBQU0sQ0FBQzNDLEtBQVAsQ0FBYW5CLEtBQWIsR0FBcUIsTUFBckI7QUFFSCxHQVBzQixDQUF2QjtBQVNBLFFBQU13RSxVQUFVLEdBQUdqYSxFQUFFLENBQUMwWixnQkFBSCxDQUFvQixPQUFwQixFQUE2QixNQUFJO0FBRWhESCxVQUFNLENBQUMzQyxLQUFQLENBQWFtRCxHQUFiLEdBQW1CLE9BQW5CO0FBQ0FSLFVBQU0sQ0FBQzNDLEtBQVAsQ0FBYW9ELElBQWIsR0FBb0IsT0FBcEI7QUFDQVQsVUFBTSxDQUFDM0MsS0FBUCxDQUFhbEIsTUFBYixHQUFzQixNQUF0QjtBQUNBNkQsVUFBTSxDQUFDM0MsS0FBUCxDQUFhbkIsS0FBYixHQUFxQixNQUFyQjtBQUVILEdBUGtCLENBQW5CO0FBU0EsUUFBTXlFLGFBQWEsR0FBR2xhLEVBQUUsQ0FBQzBaLGdCQUFILENBQW9CLFVBQXBCLEVBQWdDLE1BQUk7QUFFdERILFVBQU0sQ0FBQzNDLEtBQVAsQ0FBYW1ELEdBQWIsR0FBbUIsT0FBbkI7QUFDQVIsVUFBTSxDQUFDM0MsS0FBUCxDQUFhb0QsSUFBYixHQUFvQixPQUFwQjtBQUNBVCxVQUFNLENBQUMzQyxLQUFQLENBQWFsQixNQUFiLEdBQXNCLE1BQXRCO0FBQ0E2RCxVQUFNLENBQUMzQyxLQUFQLENBQWFuQixLQUFiLEdBQXFCLE1BQXJCO0FBRUgsR0FQcUIsQ0FBdEI7QUFTQSxTQUFPLE1BQU07QUFFVHpWLE1BQUUsQ0FBQ21hLG1CQUFILENBQXVCLFVBQXZCLEVBQW1DRCxhQUFuQztBQUNBbGEsTUFBRSxDQUFDbWEsbUJBQUgsQ0FBdUIsV0FBdkIsRUFBb0NMLGNBQXBDO0FBQ0E5WixNQUFFLENBQUNtYSxtQkFBSCxDQUF1QixPQUF2QixFQUFnQ0YsVUFBaEM7QUFFSCxHQU5EO0FBUUg7O0FBR0QsU0FBU3pFLFlBQVQsQ0FBc0JILE1BQXRCLEVBQWlERixjQUFqRCxFQUF5RUMsT0FBZSxHQUFHLEVBQTNGLEVBQStGO0FBRTNGLFFBQU1nRixRQUFRLEdBQUcsSUFBSUMsZ0RBQUosQ0FBd0I7QUFBQ2hGO0FBQUQsR0FBeEIsQ0FBakI7QUFDQStFLFVBQVEsQ0FBQ0UsY0FBVCxHQUEwQixLQUExQjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxJQUFJRixxREFBSixDQUNiLENBQUMsQ0FEWSxFQUNUO0FBQ0gsR0FGWSxFQUVUO0FBQ0gsR0FIWSxFQUdUO0FBQ0osR0FBQyxDQUpZLEVBSVQ7QUFDSixHQUFDLENBTFksRUFLVDtBQUNILEdBTlksQ0FBZjtBQVNBLFFBQU1HLEtBQUssR0FBRyxJQUFJSCx3Q0FBSixFQUFkO0FBQ0EsUUFBTUksS0FBSyxHQUFHLElBQUlKLGdEQUFKLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQWQ7QUFDQSxNQUFJSyxHQUFHLEdBQUcsSUFBVjs7QUFFQSxNQUFJdEYsT0FBSixFQUFhO0FBQ1gsVUFBTXVGLGFBQWEsR0FBRyxJQUFJTixnREFBSixFQUF0QjtBQUNBSyxPQUFHLEdBQUdDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQnhGLE9BQW5CLENBQU47QUFDRDs7QUFFRCxRQUFNeUYsUUFBUSxHQUFHO0FBQ2ZDLFVBQU0sRUFBRTtBQUFFM1ksV0FBSyxFQUFFO0FBQVQsS0FETztBQUVmNFksZ0JBQVksRUFBRztBQUFFNVksV0FBSyxFQUFFLElBQUlrWSwwQ0FBSjtBQUFULEtBRkE7QUFHZlcsZUFBVyxFQUFFO0FBQUVsRSxVQUFJLEVBQUUsR0FBUjtBQUFhM1UsV0FBSyxFQUFFdVk7QUFBcEI7QUFIRSxHQUFqQjtBQU1BLFFBQU1PLFFBQVEsR0FBRyxJQUFJWixpREFBSixDQUF5QjtBQUN4Q2xGLGtCQUR3QztBQUV4QzBGO0FBRndDLEdBQXpCLENBQWpCO0FBSUFMLE9BQUssQ0FBQ1UsR0FBTixDQUFVLElBQUliLHVDQUFKLENBQWVJLEtBQWYsRUFBc0JRLFFBQXRCLENBQVY7O0FBRUEsV0FBU0UsMkJBQVQsQ0FBcUNmLFFBQXJDLEVBQStDO0FBQzdDLFVBQU0vRSxNQUFNLEdBQUcrRSxRQUFRLENBQUNnQixVQUF4QjtBQUNBLFVBQU0zRixLQUFLLEdBQUdKLE1BQU0sQ0FBQ3dCLFdBQXJCO0FBQ0EsVUFBTW5CLE1BQU0sR0FBR0wsTUFBTSxDQUFDZ0csWUFBdEI7QUFDQSxVQUFNQyxVQUFVLEdBQUdqRyxNQUFNLENBQUNJLEtBQVAsS0FBaUJBLEtBQWpCLElBQTBCSixNQUFNLENBQUNLLE1BQVAsS0FBa0JBLE1BQS9EOztBQUNBLFFBQUk0RixVQUFKLEVBQWdCO0FBQ2RsQixjQUFRLENBQUNtQixPQUFULENBQWlCOUYsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDLEtBQWhDO0FBQ0Q7O0FBQ0QsV0FBTzRGLFVBQVA7QUFDRDs7QUFBQTs7QUFFRCxXQUFTRSxNQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNwQkEsUUFBSSxJQUFJLEtBQVIsQ0FEb0IsQ0FDSjs7QUFFaEJOLCtCQUEyQixDQUFDZixRQUFELENBQTNCO0FBRUEsVUFBTS9FLE1BQU0sR0FBRytFLFFBQVEsQ0FBQ2dCLFVBQXhCO0FBQ0FQLFlBQVEsQ0FBQ0UsWUFBVCxDQUFzQjVZLEtBQXRCLENBQTRCME4sR0FBNUIsQ0FBZ0N3RixNQUFNLENBQUNJLEtBQXZDLEVBQThDSixNQUFNLENBQUNLLE1BQXJELEVBQTZELENBQTdEO0FBQ0FtRixZQUFRLENBQUNDLE1BQVQsQ0FBZ0IzWSxLQUFoQixHQUF3QnNaLElBQXhCO0FBRUFyQixZQUFRLENBQUNvQixNQUFULENBQWdCaEIsS0FBaEIsRUFBdUJELE1BQXZCO0FBRUFtQix5QkFBcUIsQ0FBQ0YsTUFBRCxDQUFyQjtBQUNEOztBQUVERSx1QkFBcUIsQ0FBQ0YsTUFBRCxDQUFyQjtBQUVIOzs7Ozs7Ozs7Ozs7QUN0SEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLDBHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHttb3VzZU91dEluRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7QW5jaG9yUHJvcHN9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgQW5jaG9yID0gKHtocmVmLCBjaGlsZHJlbn06IEFuY2hvclByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBldmVudHNDbGVhbnVwID0gbW91c2VPdXRJbkV2ZW50TGlzdGVuZXIoZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudHNDbGVhbnVwKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSByZWY9e3JlZn0+e2NoaWxkcmVufTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQge0FuY2hvcn0iLCJpbXBvcnQge0FuY2hvcn0gZnJvbSBcIi4uL0FuY2hvci9BbmNob3JcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXJMaW5rLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtIZWFkZXJMaW5rUHJvcHN9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlckxpbmsgPSAoe2hyZWYsIHRleHR9OiBIZWFkZXJMaW5rUHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtzdHlsZXMubGlua0RpYX1gfSA+PEFuY2hvciBocmVmPXtocmVmfT57dGV4dH08L0FuY2hvcj48L3NwYW4+XHJcblxyXG59XHJcblxyXG5leHBvcnQge0hlYWRlckxpbmt9IiwiaW1wb3J0IHtIZWFkZXJMaW5rfSBmcm9tIFwiLi4vSGVhZGVyTGluay9IZWFkZXJMaW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtIZWFkZXJQcm9wc30gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe3ZhcmlhbnQgPSBcImJsYWNrXCJ9OiBIZWFkZXJQcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyV3JhcHBlcn0gc3R5bGU9e3tjb2xvcjogYCR7dmFyaWFudH1gfX0+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJMaW5rIHRleHQ9e1wiSG9tZVwifSBocmVmPXtcIi9cIn0vPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTGluayB0ZXh0PXtcIkFib3V0XCJ9IGhyZWY9e1wiL2Fib3V0XCJ9Lz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckxpbmsgdGV4dD17XCJXb3JrXCJ9IGhyZWY9e1wiL3dvcmtcIn0vPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCB7SGVhZGVyfSIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3JlbmRlclNoYWRlcn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7VGhyZWVGcmFnU2hhZGVyUHJvcHN9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgU2hhZGVyID0gKHtzaGFkZXJ9OiBUaHJlZUZyYWdTaGFkZXJQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7ZnJhZ21lbnRTaGFkZXIsIHRleHR1cmV9ID0gc2hhZGVyO1xyXG5cclxuICBsZXQgY2FudmFzID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHJlZiA9IHVzZUNhbGxiYWNrKChub2RlKT0+e1xyXG4gICAgY2FudmFzLmN1cnJlbnQgPSBub2RlO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgaWYgKCFjYW52YXMuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgIHJlbmRlclNoYWRlcihjYW52YXMuY3VycmVudCwgZnJhZ21lbnRTaGFkZXIsIHRleHR1cmUpXHJcblxyXG4gIH0sIFtjYW52YXMuY3VycmVudF0pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxjYW52YXMgXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19XHJcbiAgICAgIGNsYXNzTmFtZT1cImdsc2xDYW52YXNcIlxyXG4gICAgICB3aWR0aD1cIjUwMFwiIFxyXG4gICAgICBoZWlnaHQ9XCI1MDBcIlxyXG4gICAgLz5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQge1NoYWRlcn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UZXh0Q2Fyb3VzZWwubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7VGV4dENhcm91c2VsUHJvcHN9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICBlbnRlcjogIHtcclxuICAgICAgICB5OiAgMzAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSxcclxuICAgIGNlbnRlcjoge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSxcclxuICAgIGV4aXQ6IHtcclxuICAgICAgICB6SW5kZXg6IDAsXHJcbiAgICAgICAgeTogLTMwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUZXh0Q2Fyb3VzZWwgPSAoe3Rlcm1zLCBjb2xvcn06IFRleHRDYXJvdXNlbFByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmVFbCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBwYXJlbnRFbCA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGVybXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SW5kZXgoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbmRleChpbmRleCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDM1MDApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlRWwuY3VycmVudCkgeyBcclxuICAgICAgICAgICAgcGFyZW50RWwuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke2FjdGl2ZUVsLmN1cnJlbnQuY2xpZW50V2lkdGh9cHhgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgcmVmPXtwYXJlbnRFbH0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHthY3RpdmVFbC5jdXJyZW50ICYmIGFjdGl2ZUVsLmN1cnJlbnQuY2xpZW50V2lkdGh9cHhgfX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRlcm1XcmFwcGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17YWN0aXZlRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICB4OiB7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiAzMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuNCB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGVybXNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQge1RleHRDYXJvdXNlbH0iLCJpbXBvcnQge1A1UHJvcHMsIFJvbGVzfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQge0FuY2hvcn0gZnJvbSBcIi4vY29tcG9uZW50cy9BbmNob3IvQW5jaG9yXCI7XHJcbmltcG9ydCB7U2hhZGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL1NoYWRlci9TaGFkZXJcIjtcclxuaW1wb3J0IHtUZXh0Q2Fyb3VzZWx9IGZyb20gXCIuL2NvbXBvbmVudHMvVGV4dENhcm91c2VsL1RleHRDYXJvdXNlbFwiO1xyXG5cclxuY29uc3Qgc2hhZGVycyA9IHtcclxuICBmdWxsc2NyZWVuRmJtOiB7XHJcbiAgICBmcmFnbWVudFNoYWRlcjogYCNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX01PRDI4OVxyXG4gICAgI2RlZmluZSBGTkNfTU9EMjg5XHJcbiAgICBmbG9hdCBtb2QyODkoaW4gZmxvYXQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMyIG1vZDI4OShpbiB2ZWMyIHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBtb2QyODkoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgbW9kMjg5KGluIHZlYzQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZuZGVmIEZOQ19QRVJNVVRFXHJcbiAgICAjZGVmaW5lIEZOQ19QRVJNVVRFXHJcbiAgICBmbG9hdCBwZXJtdXRlKGluIGZsb2F0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHBlcm11dGUoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgcGVybXV0ZShpbiB2ZWM0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1RBWUxPUklOVlNRUlRcclxuICAgICNkZWZpbmUgRk5DX1RBWUxPUklOVlNRUlRcclxuICAgIGZsb2F0IHRheWxvckludlNxcnQoaW4gZmxvYXQgcikge1xyXG4gICAgICByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWM0IHRheWxvckludlNxcnQoaW4gdmVjNCByKSB7XHJcbiAgICAgIHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX0dSQUQ0XHJcbiAgICAjZGVmaW5lIEZOQ19HUkFENFxyXG4gICAgdmVjNCBncmFkNChmbG9hdCBqLCB2ZWM0IGlwKSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCBvbmVzID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAtMS4wKTtcclxuICAgICAgICB2ZWM0IHAscztcclxuICAgIFxyXG4gICAgICAgIHAueHl6ID0gZmxvb3IoIGZyYWN0ICh2ZWMzKGopICogaXAueHl6KSAqIDcuMCkgKiBpcC56IC0gMS4wO1xyXG4gICAgICAgIHAudyA9IDEuNSAtIGRvdChhYnMocC54eXopLCBvbmVzLnh5eik7XHJcbiAgICAgICAgcyA9IHZlYzQobGVzc1RoYW4ocCwgdmVjNCgwLjApKSk7XHJcbiAgICAgICAgcC54eXogPSBwLnh5eiArIChzLnh5eioyLjAgLSAxLjApICogcy53d3c7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBhdXRob3I6IFtJYW4gTWNFd2FuLCBBc2hpbWEgQXJ0c11cclxuICAgIGRlc2NyaXB0aW9uOiBTaW1wbGV4IE5vaXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2hpbWEvd2ViZ2wtbm9pc2VcclxuICAgIHVzZTogc25vaXNlKDx2ZWMyfHZlYzN8dmVjND4gcG9zKVxyXG4gICAgbGljZW5zZTogfFxyXG4gICAgICBDb3B5cmlnaHQgKEMpIDIwMTEgQXNoaW1hIEFydHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgIENvcHlyaWdodCAoQykgMjAxMS0yMDE2IGJ5IFN0ZWZhbiBHdXN0YXZzb24gKENsYXNzaWMgbm9pc2UgYW5kIG90aGVycylcclxuICAgICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAgICAgIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICAgICAgTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgR1BVSW1hZ2UgZnJhbWV3b3JrIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAgICAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gIFxyXG4gICAgKi9cclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfU05PSVNFXHJcbiAgICAjZGVmaW5lIEZOQ19TTk9JU0VcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWMyIHYpIHtcclxuICAgICAgICBjb25zdCB2ZWM0IEMgPSB2ZWM0KDAuMjExMzI0ODY1NDA1MTg3LCAgLy8gKDMuMC1zcXJ0KDMuMCkpLzYuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4zNjYwMjU0MDM3ODQ0MzksICAvLyAwLjUqKHNxcnQoMy4wKS0xLjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41NzczNTAyNjkxODk2MjYsICAvLyAtMS4wICsgMi4wICogQy54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAyNDM5MDI0MzkwMjQzOSk7IC8vIDEuMCAvIDQxLjBcclxuICAgICAgICAvLyBGaXJzdCBjb3JuZXJcclxuICAgICAgICB2ZWMyIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5KSApO1xyXG4gICAgICAgIHZlYzIgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHgpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gT3RoZXIgY29ybmVyc1xyXG4gICAgICAgIHZlYzIgaTE7XHJcbiAgICAgICAgLy9pMS54ID0gc3RlcCggeDAueSwgeDAueCApOyAvLyB4MC54ID4geDAueSA/IDEuMCA6IDAuMFxyXG4gICAgICAgIC8vaTEueSA9IDEuMCAtIGkxLng7XHJcbiAgICAgICAgaTEgPSAoeDAueCA+IHgwLnkpID8gdmVjMigxLjAsIDAuMCkgOiB2ZWMyKDAuMCwgMS4wKTtcclxuICAgICAgICAvLyB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eCA7XHJcbiAgICAgICAgLy8geDEgPSB4MCAtIGkxICsgMS4wICogQy54eCA7XHJcbiAgICAgICAgLy8geDIgPSB4MCAtIDEuMCArIDIuMCAqIEMueHggO1xyXG4gICAgICAgIHZlYzQgeDEyID0geDAueHl4eSArIEMueHh6ejtcclxuICAgICAgICB4MTIueHkgLT0gaTE7XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpOyAvLyBBdm9pZCB0cnVuY2F0aW9uIGVmZmVjdHMgaW4gcGVybXV0YXRpb25cclxuICAgICAgICB2ZWMzIHAgPSBwZXJtdXRlKCBwZXJtdXRlKCBpLnkgKyB2ZWMzKDAuMCwgaTEueSwgMS4wICkpXHJcbiAgICAgICAgKyBpLnggKyB2ZWMzKDAuMCwgaTEueCwgMS4wICkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjMyBtID0gbWF4KDAuNSAtIHZlYzMoZG90KHgwLHgwKSwgZG90KHgxMi54eSx4MTIueHkpLCBkb3QoeDEyLnp3LHgxMi56dykpLCAwLjApO1xyXG4gICAgICAgIG0gPSBtKm0gO1xyXG4gICAgICAgIG0gPSBtKm0gO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR3JhZGllbnRzOiA0MSBwb2ludHMgdW5pZm9ybWx5IG92ZXIgYSBsaW5lLCBtYXBwZWQgb250byBhIGRpYW1vbmQuXHJcbiAgICAgICAgLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQxICg0MSo3ID0gMjg3KVxyXG4gICAgXHJcbiAgICAgICAgdmVjMyB4ID0gMi4wICogZnJhY3QocCAqIEMud3d3KSAtIDEuMDtcclxuICAgICAgICB2ZWMzIGggPSBhYnMoeCkgLSAwLjU7XHJcbiAgICAgICAgdmVjMyBveCA9IGZsb29yKHggKyAwLjUpO1xyXG4gICAgICAgIHZlYzMgYTAgPSB4IC0gb3g7XHJcbiAgICBcclxuICAgICAgICAvLyBOb3JtYWxpc2UgZ3JhZGllbnRzIGltcGxpY2l0bHkgYnkgc2NhbGluZyBtXHJcbiAgICAgICAgLy8gQXBwcm94aW1hdGlvbiBvZjogbSAqPSBpbnZlcnNlc3FydCggYTAqYTAgKyBoKmggKTtcclxuICAgICAgICBtICo9IDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogKCBhMCphMCArIGgqaCApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ29tcHV0ZSBmaW5hbCBub2lzZSB2YWx1ZSBhdCBQXHJcbiAgICAgICAgdmVjMyBnO1xyXG4gICAgICAgIGcueCAgPSBhMC54ICAqIHgwLnggICsgaC54ICAqIHgwLnk7XHJcbiAgICAgICAgZy55eiA9IGEwLnl6ICogeDEyLnh6ICsgaC55eiAqIHgxMi55dztcclxuICAgICAgICByZXR1cm4gMTMwLjAgKiBkb3QobSwgZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZmxvYXQgc25vaXNlKGluIHZlYzMgdikge1xyXG4gICAgICAgIGNvbnN0IHZlYzIgIEMgPSB2ZWMyKDEuMC82LjAsIDEuMC8zLjApIDtcclxuICAgICAgICBjb25zdCB2ZWM0ICBEID0gdmVjNCgwLjAsIDAuNSwgMS4wLCAyLjApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjMyBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eXkpICk7XHJcbiAgICAgICAgdmVjMyB4MCA9ICAgdiAtIGkgKyBkb3QoaSwgQy54eHgpIDtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgICAgICB2ZWMzIGcgPSBzdGVwKHgwLnl6eCwgeDAueHl6KTtcclxuICAgICAgICB2ZWMzIGwgPSAxLjAgLSBnO1xyXG4gICAgICAgIHZlYzMgaTEgPSBtaW4oIGcueHl6LCBsLnp4eSApO1xyXG4gICAgICAgIHZlYzMgaTIgPSBtYXgoIGcueHl6LCBsLnp4eSApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MiA9IHgwIC0gaTIgICsgMi4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MyA9IHgwIC0gMS4wICsgMy4wICogQy54eHg7XHJcbiAgICAgICAgdmVjMyB4MSA9IHgwIC0gaTEgKyBDLnh4eDtcclxuICAgICAgICB2ZWMzIHgyID0geDAgLSBpMiArIEMueXl5OyAvLyAyLjAqQy54ID0gMS8zID0gQy55XHJcbiAgICAgICAgdmVjMyB4MyA9IHgwIC0gRC55eXk7ICAgICAgLy8gLTEuMCszLjAqQy54ID0gLTAuNSA9IC1ELnlcclxuICAgIFxyXG4gICAgICAgIC8vIFBlcm11dGF0aW9uc1xyXG4gICAgICAgIGkgPSBtb2QyODkoaSk7XHJcbiAgICAgICAgdmVjNCBwID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShcclxuICAgICAgICAgICAgICAgICAgICBpLnogKyB2ZWM0KDAuMCwgaTEueiwgaTIueiwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueSArIHZlYzQoMC4wLCBpMS55LCBpMi55LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS54ICsgdmVjNCgwLjAsIGkxLngsIGkyLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogN3g3IHBvaW50cyBvdmVyIGEgc3F1YXJlLCBtYXBwZWQgb250byBhbiBvY3RhaGVkcm9uLlxyXG4gICAgICAgIC8vIFRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkgaXMgY2xvc2UgdG8gYSBtdWx0aXBsZSBvZiA0OSAoNDkqNiA9IDI5NClcclxuICAgICAgICBmbG9hdCBuXyA9IDAuMTQyODU3MTQyODU3OyAvLyAxLjAvNy4wXHJcbiAgICAgICAgdmVjMyAgbnMgPSBuXyAqIEQud3l6IC0gRC54eng7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IGogPSBwIC0gNDkuMCAqIGZsb29yKHAgKiBucy56ICogbnMueik7ICAvLyAgbW9kKHAsNyo3KVxyXG4gICAgXHJcbiAgICAgICAgdmVjNCB4XyA9IGZsb29yKGogKiBucy56KTtcclxuICAgICAgICB2ZWM0IHlfID0gZmxvb3IoaiAtIDcuMCAqIHhfICk7ICAgIC8vIG1vZChqLE4pXHJcbiAgICBcclxuICAgICAgICB2ZWM0IHggPSB4XyAqbnMueCArIG5zLnl5eXk7XHJcbiAgICAgICAgdmVjNCB5ID0geV8gKm5zLnggKyBucy55eXl5O1xyXG4gICAgICAgIHZlYzQgaCA9IDEuMCAtIGFicyh4KSAtIGFicyh5KTtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgYjAgPSB2ZWM0KCB4Lnh5LCB5Lnh5ICk7XHJcbiAgICAgICAgdmVjNCBiMSA9IHZlYzQoIHguencsIHkuencgKTtcclxuICAgIFxyXG4gICAgICAgIC8vdmVjNCBzMCA9IHZlYzQobGVzc1RoYW4oYjAsMC4wKSkqMi4wIC0gMS4wO1xyXG4gICAgICAgIC8vdmVjNCBzMSA9IHZlYzQobGVzc1RoYW4oYjEsMC4wKSkqMi4wIC0gMS4wO1xyXG4gICAgICAgIHZlYzQgczAgPSBmbG9vcihiMCkqMi4wICsgMS4wO1xyXG4gICAgICAgIHZlYzQgczEgPSBmbG9vcihiMSkqMi4wICsgMS4wO1xyXG4gICAgICAgIHZlYzQgc2ggPSAtc3RlcChoLCB2ZWM0KDAuMCkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBhMCA9IGIwLnh6eXcgKyBzMC54enl3KnNoLnh4eXkgO1xyXG4gICAgICAgIHZlYzQgYTEgPSBiMS54enl3ICsgczEueHp5dypzaC56end3IDtcclxuICAgIFxyXG4gICAgICAgIHZlYzMgcDAgPSB2ZWMzKGEwLnh5LGgueCk7XHJcbiAgICAgICAgdmVjMyBwMSA9IHZlYzMoYTAuencsaC55KTtcclxuICAgICAgICB2ZWMzIHAyID0gdmVjMyhhMS54eSxoLnopO1xyXG4gICAgICAgIHZlYzMgcDMgPSB2ZWMzKGExLnp3LGgudyk7XHJcbiAgICBcclxuICAgICAgICAvL05vcm1hbGlzZSBncmFkaWVudHNcclxuICAgICAgICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcclxuICAgICAgICBwMCAqPSBub3JtLng7XHJcbiAgICAgICAgcDEgKj0gbm9ybS55O1xyXG4gICAgICAgIHAyICo9IG5vcm0uejtcclxuICAgICAgICBwMyAqPSBub3JtLnc7XHJcbiAgICBcclxuICAgICAgICAvLyBNaXggZmluYWwgbm9pc2UgdmFsdWVcclxuICAgICAgICB2ZWM0IG0gPSBtYXgoMC42IC0gdmVjNChkb3QoeDAseDApLCBkb3QoeDEseDEpLCBkb3QoeDIseDIpLCBkb3QoeDMseDMpKSwgMC4wKTtcclxuICAgICAgICBtID0gbSAqIG07XHJcbiAgICAgICAgcmV0dXJuIDQyLjAgKiBkb3QoIG0qbSwgdmVjNCggZG90KHAwLHgwKSwgZG90KHAxLHgxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90KHAyLHgyKSwgZG90KHAzLHgzKSApICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWM0IHYpIHtcclxuICAgICAgICBjb25zdCB2ZWM0ICBDID0gdmVjNCggMC4xMzgxOTY2MDExMjUwMTEsICAvLyAoNSAtIHNxcnQoNSkpLzIwICBHNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNzYzOTMyMDIyNTAwMjEsICAvLyAyICogRzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNDE0NTg5ODAzMzc1MDMyLCAgLy8gMyAqIEc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC40NDcyMTM1OTU0OTk5NTgpOyAvLyAtMSArIDQgKiBHNFxyXG4gICAgXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjNCBpICA9IGZsb29yKHYgKyBkb3QodiwgdmVjNCguMzA5MDE2OTk0Mzc0OTQ3NDUxKSkgKTsgLy8gKHNxcnQoNSkgLSAxKS80XHJcbiAgICAgICAgdmVjNCB4MCA9IHYgLSAgIGkgKyBkb3QoaSwgQy54eHh4KTtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgIFxyXG4gICAgICAgIC8vIFJhbmsgc29ydGluZyBvcmlnaW5hbGx5IGNvbnRyaWJ1dGVkIGJ5IEJpbGwgTGljZWEtS2FuZSwgQU1EIChmb3JtZXJseSBBVEkpXHJcbiAgICAgICAgdmVjNCBpMDtcclxuICAgICAgICB2ZWMzIGlzWCA9IHN0ZXAoIHgwLnl6dywgeDAueHh4ICk7XHJcbiAgICAgICAgdmVjMyBpc1laID0gc3RlcCggeDAuend3LCB4MC55eXogKTtcclxuICAgICAgICAvLyAgaTAueCA9IGRvdCggaXNYLCB2ZWMzKCAxLjAgKSApO1xyXG4gICAgICAgIGkwLnggPSBpc1gueCArIGlzWC55ICsgaXNYLno7XHJcbiAgICAgICAgaTAueXp3ID0gMS4wIC0gaXNYO1xyXG4gICAgICAgIC8vICBpMC55ICs9IGRvdCggaXNZWi54eSwgdmVjMiggMS4wICkgKTtcclxuICAgICAgICBpMC55ICs9IGlzWVoueCArIGlzWVoueTtcclxuICAgICAgICBpMC56dyArPSAxLjAgLSBpc1laLnh5O1xyXG4gICAgICAgIGkwLnogKz0gaXNZWi56O1xyXG4gICAgICAgIGkwLncgKz0gMS4wIC0gaXNZWi56O1xyXG4gICAgXHJcbiAgICAgICAgLy8gaTAgbm93IGNvbnRhaW5zIHRoZSB1bmlxdWUgdmFsdWVzIDAsMSwyLDMgaW4gZWFjaCBjaGFubmVsXHJcbiAgICAgICAgdmVjNCBpMyA9IGNsYW1wKCBpMCwgMC4wLCAxLjAgKTtcclxuICAgICAgICB2ZWM0IGkyID0gY2xhbXAoIGkwLTEuMCwgMC4wLCAxLjAgKTtcclxuICAgICAgICB2ZWM0IGkxID0gY2xhbXAoIGkwLTIuMCwgMC4wLCAxLjAgKTtcclxuICAgIFxyXG4gICAgICAgIC8vICB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHgxID0geDAgLSBpMSAgKyAxLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDIgPSB4MCAtIGkyICArIDIuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4MyA9IHgwIC0gaTMgICsgMy4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHg0ID0geDAgLSAxLjAgKyA0LjAgKiBDLnh4eHhcclxuICAgICAgICB2ZWM0IHgxID0geDAgLSBpMSArIEMueHh4eDtcclxuICAgICAgICB2ZWM0IHgyID0geDAgLSBpMiArIEMueXl5eTtcclxuICAgICAgICB2ZWM0IHgzID0geDAgLSBpMyArIEMuenp6ejtcclxuICAgICAgICB2ZWM0IHg0ID0geDAgKyBDLnd3d3c7XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpO1xyXG4gICAgICAgIGZsb2F0IGowID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShpLncpICsgaS56KSArIGkueSkgKyBpLngpO1xyXG4gICAgICAgIHZlYzQgajEgPSBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlIChcclxuICAgICAgICAgICAgICAgICAgICBpLncgKyB2ZWM0KGkxLncsIGkyLncsIGkzLncsIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnogKyB2ZWM0KGkxLnosIGkyLnosIGkzLnosIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnkgKyB2ZWM0KGkxLnksIGkyLnksIGkzLnksIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnggKyB2ZWM0KGkxLngsIGkyLngsIGkzLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogN3g3eDYgcG9pbnRzIG92ZXIgYSBjdWJlLCBtYXBwZWQgb250byBhIDQtY3Jvc3MgcG9seXRvcGVcclxuICAgICAgICAvLyA3KjcqNiA9IDI5NCwgd2hpY2ggaXMgY2xvc2UgdG8gdGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OS5cclxuICAgICAgICB2ZWM0IGlwID0gdmVjNCgxLjAvMjk0LjAsIDEuMC80OS4wLCAxLjAvNy4wLCAwLjApIDtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgcDAgPSBncmFkNChqMCwgICBpcCk7XHJcbiAgICAgICAgdmVjNCBwMSA9IGdyYWQ0KGoxLngsIGlwKTtcclxuICAgICAgICB2ZWM0IHAyID0gZ3JhZDQoajEueSwgaXApO1xyXG4gICAgICAgIHZlYzQgcDMgPSBncmFkNChqMS56LCBpcCk7XHJcbiAgICAgICAgdmVjNCBwNCA9IGdyYWQ0KGoxLncsIGlwKTtcclxuICAgIFxyXG4gICAgICAgIC8vIE5vcm1hbGlzZSBncmFkaWVudHNcclxuICAgICAgICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcclxuICAgICAgICBwMCAqPSBub3JtLng7XHJcbiAgICAgICAgcDEgKj0gbm9ybS55O1xyXG4gICAgICAgIHAyICo9IG5vcm0uejtcclxuICAgICAgICBwMyAqPSBub3JtLnc7XHJcbiAgICAgICAgcDQgKj0gdGF5bG9ySW52U3FydChkb3QocDQscDQpKTtcclxuICAgIFxyXG4gICAgICAgIC8vIE1peCBjb250cmlidXRpb25zIGZyb20gdGhlIGZpdmUgY29ybmVyc1xyXG4gICAgICAgIHZlYzMgbTAgPSBtYXgoMC42IC0gdmVjMyhkb3QoeDAseDApLCBkb3QoeDEseDEpLCBkb3QoeDIseDIpKSwgMC4wKTtcclxuICAgICAgICB2ZWMyIG0xID0gbWF4KDAuNiAtIHZlYzIoZG90KHgzLHgzKSwgZG90KHg0LHg0KSAgICAgICAgICAgICksIDAuMCk7XHJcbiAgICAgICAgbTAgPSBtMCAqIG0wO1xyXG4gICAgICAgIG0xID0gbTEgKiBtMTtcclxuICAgICAgICByZXR1cm4gNDkuMCAqICggZG90KG0wKm0wLCB2ZWMzKCBkb3QoIHAwLCB4MCApLCBkb3QoIHAxLCB4MSApLCBkb3QoIHAyLCB4MiApKSlcclxuICAgICAgICAgICAgICAgICAgICArIGRvdChtMSptMSwgdmVjMiggZG90KCBwMywgeDMgKSwgZG90KCBwNCwgeDQgKSApICkgKSA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgc25vaXNlMyggdmVjMyB4ICl7XHJcbiAgICAgICAgZmxvYXQgcyAgPSBzbm9pc2UodmVjMyggeCApKTtcclxuICAgICAgICBmbG9hdCBzMSA9IHNub2lzZSh2ZWMzKCB4LnkgLSAxOS4xICwgeC56ICsgMzMuNCAsIHgueCArIDQ3LjIgKSk7XHJcbiAgICAgICAgZmxvYXQgczIgPSBzbm9pc2UodmVjMyggeC56ICsgNzQuMiAsIHgueCAtIDEyNC41ICwgeC55ICsgOTkuNCApKTtcclxuICAgICAgICB2ZWMzIGMgPSB2ZWMzKCBzICwgczEgLCBzMiApO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHNub2lzZTMoIHZlYzQgeCApe1xyXG4gICAgICAgIGZsb2F0IHMgID0gc25vaXNlKHZlYzQoIHggKSk7XHJcbiAgICAgICAgZmxvYXQgczEgPSBzbm9pc2UodmVjNCggeC55IC0gMTkuMSAsIHgueiArIDMzLjQgLCB4LnggKyA0Ny4yLCB4LncgKSk7XHJcbiAgICAgICAgZmxvYXQgczIgPSBzbm9pc2UodmVjNCggeC56ICsgNzQuMiAsIHgueCAtIDEyNC41ICwgeC55ICsgOTkuNCwgeC53ICkpO1xyXG4gICAgICAgIHZlYzMgYyA9IHZlYzMoIHMgLCBzMSAsIHMyICk7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICBcclxuICAgIHVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XHJcbiAgICB1bmlmb3JtIHZlYzIgdV9tb3VzZTsgXHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfdGltZTtcclxuICAgIHZlYzIgcmF0aW8oaW4gdmVjMiBzdCwgaW4gdmVjMiBzKSB7XHJcbiAgICAgICAgcmV0dXJuIG1peCggdmVjMigoc3QueCpzLngvcy55KS0ocy54Ki41LXMueSouNSkvcy55LHN0LnkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlYzIoc3QueCxzdC55KihzLnkvcy54KS0ocy55Ki41LXMueCouNSkvcy54KSxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwKHMueCxzLnkpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fT0NUQVZFU1xyXG4gICAgI2RlZmluZSBGQk1fT0NUQVZFUyA0XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fTk9JU0VfRk5DXHJcbiAgICAjZGVmaW5lIEZCTV9OT0lTRV9GTkMoUE9TX1VWKSBzbm9pc2UoUE9TX1VWKVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX1ZBTFVFX0lOSVRJQUxcclxuICAgICNkZWZpbmUgRkJNX1ZBTFVFX0lOSVRJQUwgMC4wXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fU0NBTEVfU0NBTEFSXHJcbiAgICAjZGVmaW5lIEZCTV9TQ0FMRV9TQ0FMQVIgMi4wXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fQU1QTElUVURfSU5JVElBTFxyXG4gICAgI2RlZmluZSBGQk1fQU1QTElUVURfSU5JVElBTCAwLjVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9BTVBMSVRVRF9TQ0FMQVJcclxuICAgICNkZWZpbmUgRkJNX0FNUExJVFVEX1NDQUxBUiAwLjVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19GQk1cclxuICAgICNkZWZpbmUgRk5DX0ZCTVxyXG4gICAgZmxvYXQgZmJtKGluIHZlYzIgc3QpIHtcclxuICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xyXG4gICAgICAgIGZsb2F0IHZhbHVlID0gRkJNX1ZBTFVFX0lOSVRJQUw7XHJcbiAgICAgICAgZmxvYXQgYW1wbGl0dWQgPSBGQk1fQU1QTElUVURfSU5JVElBTDtcclxuICAgIFxyXG4gICAgICAgIC8vIExvb3Agb2Ygb2N0YXZlc1xyXG4gICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgRkJNX09DVEFWRVM7IGkrKykge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSBhbXBsaXR1ZCAqIEZCTV9OT0lTRV9GTkMoc3QpO1xyXG4gICAgICAgICAgICBzdCAqPSBGQk1fU0NBTEVfU0NBTEFSO1xyXG4gICAgICAgICAgICBhbXBsaXR1ZCAqPSBGQk1fQU1QTElUVURfU0NBTEFSO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZsb2F0IGZibShpbiB2ZWMzIHBvcykge1xyXG4gICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgZmxvYXQgdmFsdWUgPSBGQk1fVkFMVUVfSU5JVElBTDtcclxuICAgICAgICBmbG9hdCBhbXBsaXR1ZCA9IEZCTV9BTVBMSVRVRF9JTklUSUFMO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTG9vcCBvZiBvY3RhdmVzXHJcbiAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBGQk1fT0NUQVZFUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGFtcGxpdHVkICogRkJNX05PSVNFX0ZOQyhwb3MpO1xyXG4gICAgICAgICAgICBwb3MgKj0gRkJNX1NDQUxFX1NDQUxBUjtcclxuICAgICAgICAgICAgYW1wbGl0dWQgKj0gRkJNX0FNUExJVFVEX1NDQUxBUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcclxuICAgICAgICBzdCA9IHJhdGlvKHN0LCB1X3Jlc29sdXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgZmxvYXQgbiA9IDAuNCArIHNub2lzZSh2ZWMzKHN0LCB1X3RpbWUpKSAqIDAuODtcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IG5vaXNlID0gZmJtKHZlYzMoc3QsIHVfdGltZS8xMC4pKTtcclxuICAgICAgICBmbG9hdCBub2lzZTIgPSBmYm0odmVjMyhzdCwgbm9pc2UpKTtcclxuICAgICAgICBmbG9hdCBub2lzZTMgPSBmYm0odmVjMyhzdCwgbm9pc2UyKSk7XHJcbiAgICAgICAgZmxvYXQgbm9pc2U0ID0gZmJtKHZlYzMoc3QsIG5vaXNlMykpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjMyBjb2xvciA9IHZlYzMoc3QueCxzdC55LCAxLik7XHJcbiAgICBcclxuICAgICAgICBjb2xvciArPSBub2lzZTQ7XHJcbiAgICBcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLDEuMCk7XHJcbiAgICB9YFxyXG4gIH0sXHJcbiAgcmF5bWFyY2hpbmc6IHtcclxuICAgIGZyYWdtZW50U2hhZGVyOiBgI2lmZGVmIEdMX0VTXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICB1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gICAgdW5pZm9ybSB2ZWMyIHVfbW91c2U7XHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfdGltZTtcclxuICAgIGZsb2F0IFBJID0gMy4xNDE1NTkyNTtcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfUkFUSU9cclxuICAgICNkZWZpbmUgRk5DX1JBVElPXHJcbiAgICB2ZWMyIHJhdGlvKGluIHZlYzIgc3QsIGluIHZlYzIgcykge1xyXG4gICAgICAgIHJldHVybiBtaXgoIHZlYzIoKHN0Lngqcy54L3MueSktKHMueCouNS1zLnkqLjUpL3MueSxzdC55KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZWMyKHN0Lngsc3QueSoocy55L3MueCktKHMueSouNS1zLngqLjUpL3MueCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChzLngscy55KSk7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGZsb2F0IHNkU3BoZXJlKHZlYzMgcCwgZmxvYXQgcikge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGgocCktcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMiBtb3VzZVBvcyA9ICh1X21vdXNlL3VfcmVzb2x1dGlvbi54eSktLjU7XHJcbiAgICBcclxuICAgIG1hdDQgcm90YXRpb25NYXRyaXgodmVjMyBheGlzLCBmbG9hdCBhbmdsZSkge1xyXG4gICAgICAgIGF4aXMgPSBub3JtYWxpemUoYXhpcyk7XHJcbiAgICAgICAgZmxvYXQgcyA9IHNpbihhbmdsZSk7XHJcbiAgICAgICAgZmxvYXQgYyA9IGNvcyhhbmdsZSk7XHJcbiAgICAgICAgZmxvYXQgb2MgPSAxLjAgLSBjO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtYXQ0KG9jICogYXhpcy54ICogYXhpcy54ICsgYywgICAgICAgICAgIG9jICogYXhpcy54ICogYXhpcy55IC0gYXhpcy56ICogcywgIG9jICogYXhpcy56ICogYXhpcy54ICsgYXhpcy55ICogcywgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICBvYyAqIGF4aXMueCAqIGF4aXMueSArIGF4aXMueiAqIHMsICBvYyAqIGF4aXMueSAqIGF4aXMueSArIGMsICAgICAgICAgICBvYyAqIGF4aXMueSAqIGF4aXMueiAtIGF4aXMueCAqIHMsICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgb2MgKiBheGlzLnogKiBheGlzLnggLSBheGlzLnkgKiBzLCAgb2MgKiBheGlzLnkgKiBheGlzLnogKyBheGlzLnggKiBzLCAgb2MgKiBheGlzLnogKiBheGlzLnogKyBjLCAgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgcm90YXRlKHZlYzMgdiwgdmVjMyBheGlzLCBmbG9hdCBhbmdsZSkge1xyXG4gICAgICBtYXQ0IG0gPSByb3RhdGlvbk1hdHJpeChheGlzLCBhbmdsZSk7XHJcbiAgICAgIHJldHVybiAobSAqIHZlYzQodiwgMS4wKSkueHl6O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBzZEJveCggdmVjMyBwLCB2ZWMzIGIgKVxyXG4gICAge1xyXG4gICAgICB2ZWMzIHEgPSBhYnMocCkgLSBiO1xyXG4gICAgICByZXR1cm4gbGVuZ3RoKG1heChxLDAuMCkpICsgbWluKG1heChxLngsbWF4KHEueSxxLnopKSwwLjApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBwb2x5bm9taWFsIHNtb290aCBtaW4gKGsgPSAwLjEpO1xyXG4gICAgZmxvYXQgc21pbiggZmxvYXQgYSwgZmxvYXQgYiwgZmxvYXQgayApXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQgaCA9IGNsYW1wKCAwLjUrMC41KihiLWEpL2ssIDAuMCwgMS4wICk7XHJcbiAgICAgICAgcmV0dXJuIG1peCggYiwgYSwgaCApIC0gaypoKigxLjAtaCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZsb2F0IHNkZih2ZWMzIHApIHtcclxuICAgICAgICB2ZWMzIHAxID0gcm90YXRlKHAsIHZlYzMoMS4pLCB1X3RpbWUvMi4pO1xyXG4gICAgICAgIC8vIGZsb2F0IGJveCA9IHNkQm94KHAxLCB2ZWMzKDAuMykpO1xyXG4gICAgICAgIGZsb2F0IGJveCA9IHNtaW4oc2RCb3gocDEsIHZlYzMoMC4yKSksIHNkU3BoZXJlKHAsIDAuMiksIC4yKTtcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IHNwaGVyZSA9IHNkU3BoZXJlKHAgLSB2ZWMzKC41LCAuNDkxLCAwLiksIDAuMik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gc21pbihib3gsIHNwaGVyZSwgLjQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIGNhbGNOb3JtYWwoIGluIHZlYzMgcCApIC8vIGZvciBmdW5jdGlvbiBmKHApXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgZXBzID0gMC4wMDAxOyAvLyBvciBzb21lIG90aGVyIHZhbHVlXHJcbiAgICAgICAgY29uc3QgdmVjMiBoID0gdmVjMihlcHMsMCk7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSggdmVjMyhzZGYocCtoLnh5eSkgLSBzZGYocC1oLnh5eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZGYocCtoLnl4eSkgLSBzZGYocC1oLnl4eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZGYocCtoLnl5eCkgLSBzZGYocC1oLnl5eCkgKSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgZmxvYXQgbHVtYSh2ZWMzIGNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBkb3QoY29sb3IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBsdW1hKHZlYzQgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGRvdChjb2xvci5yZ2IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZsb2F0IGRpdGhlcjh4OCh2ZWMyIHBvc2l0aW9uLCBmbG9hdCBicmlnaHRuZXNzKSB7XHJcbiAgICAgIGludCB4ID0gaW50KG1vZChwb3NpdGlvbi54LCA4LjApKTtcclxuICAgICAgaW50IHkgPSBpbnQobW9kKHBvc2l0aW9uLnksIDguMCkpO1xyXG4gICAgICBpbnQgaW5kZXggPSB4ICsgeSAqIDg7XHJcbiAgICAgIGZsb2F0IGxpbWl0ID0gMC4wO1xyXG4gICAgXHJcbiAgICAgIGlmICh4IDwgOCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSBsaW1pdCA9IDAuMDE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKSBsaW1pdCA9IDAuNTE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyKSBsaW1pdCA9IDAuMTQwNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzKSBsaW1pdCA9IDAuNjQwNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0KSBsaW1pdCA9IDAuMDQ2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1KSBsaW1pdCA9IDAuNTQ2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA2KSBsaW1pdCA9IDAuMTcxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA3KSBsaW1pdCA9IDAuNjcxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA4KSBsaW1pdCA9IDAuNzY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA5KSBsaW1pdCA9IDAuMjY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxMCkgbGltaXQgPSAwLjg5MDYyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTEpIGxpbWl0ID0gMC4zOTA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEyKSBsaW1pdCA9IDAuNzk2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxMykgbGltaXQgPSAwLjI5Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTQpIGxpbWl0ID0gMC45MjE4NzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDE1KSBsaW1pdCA9IDAuNDIxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxNikgbGltaXQgPSAwLjIwMzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTcpIGxpbWl0ID0gMC43MDMxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDE4KSBsaW1pdCA9IDAuMDc4MTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxOSkgbGltaXQgPSAwLjU3ODEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjApIGxpbWl0ID0gMC4yMzQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDIxKSBsaW1pdCA9IDAuNzM0Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyMikgbGltaXQgPSAwLjEwOTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjMpIGxpbWl0ID0gMC42MDkzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDI0KSBsaW1pdCA9IDAuOTUzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyNSkgbGltaXQgPSAwLjQ1MzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjYpIGxpbWl0ID0gMC44MjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDI3KSBsaW1pdCA9IDAuMzI4MTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyOCkgbGltaXQgPSAwLjk4NDM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjkpIGxpbWl0ID0gMC40ODQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDMwKSBsaW1pdCA9IDAuODU5Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzMSkgbGltaXQgPSAwLjM1OTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMzIpIGxpbWl0ID0gMC4wNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzMykgbGltaXQgPSAwLjU2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDM0KSBsaW1pdCA9IDAuMTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMzUpIGxpbWl0ID0gMC42ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzNikgbGltaXQgPSAwLjAzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzNykgbGltaXQgPSAwLjUzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzOCkgbGltaXQgPSAwLjE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzOSkgbGltaXQgPSAwLjY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0MCkgbGltaXQgPSAwLjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQxKSBsaW1pdCA9IDAuMzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNDIpIGxpbWl0ID0gMC45Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0MykgbGltaXQgPSAwLjQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ0KSBsaW1pdCA9IDAuNzgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ1KSBsaW1pdCA9IDAuMjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ2KSBsaW1pdCA9IDAuOTA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ3KSBsaW1pdCA9IDAuNDA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ4KSBsaW1pdCA9IDAuMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ5KSBsaW1pdCA9IDAuNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDUwKSBsaW1pdCA9IDAuMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1MSkgbGltaXQgPSAwLjYyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTIpIGxpbWl0ID0gMC4yMTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTMpIGxpbWl0ID0gMC43MTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTQpIGxpbWl0ID0gMC4wOTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTUpIGxpbWl0ID0gMC41OTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTYpIGxpbWl0ID0gMS4wO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1NykgbGltaXQgPSAwLjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDU4KSBsaW1pdCA9IDAuODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1OSkgbGltaXQgPSAwLjM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjApIGxpbWl0ID0gMC45Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjEpIGxpbWl0ID0gMC40Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjIpIGxpbWl0ID0gMC44NDM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjMpIGxpbWl0ID0gMC4zNDM3NTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiBicmlnaHRuZXNzIDwgbGltaXQgPyAwLjAgOiAxLjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgZGl0aGVyOHg4KHZlYzIgcG9zaXRpb24sIHZlYzMgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGNvbG9yICogZGl0aGVyOHg4KHBvc2l0aW9uLCBsdW1hKGNvbG9yKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgZGl0aGVyOHg4KHZlYzIgcG9zaXRpb24sIHZlYzQgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIHZlYzQoY29sb3IucmdiICogZGl0aGVyOHg4KHBvc2l0aW9uLCBsdW1hKGNvbG9yKSksIDEuMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XHJcbiAgICAgICAgc3QgPSByYXRpbyhzdCwgdV9yZXNvbHV0aW9uKTtcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKHN0IC0gdmVjMigwLjUpKTtcclxuICAgICAgICB2ZWMzIGJnID0gbWl4KHZlYzMoMC4pLCB2ZWMzKC4zKSwgZGlzdCk7XHJcbiAgICAgICAgdmVjMyBjYW1Qb3MgPSB2ZWMzKDAuLCAwLiwgMy4pO1xyXG4gICAgICAgIHZlYzMgcmF5ID0gbm9ybWFsaXplKHZlYzMoc3QgLSAuNSwgLTEuNSkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjMyByYXlQb3MgPSBjYW1Qb3M7XHJcbiAgICAgICAgZmxvYXQgdCA9IDAuO1xyXG4gICAgICAgIGZsb2F0IHRNYXggPSA1LjtcclxuICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZlYzMgcG9zID0gY2FtUG9zICsgdCpyYXk7XHJcbiAgICAgICAgICAgIGZsb2F0IGggPSBzZGYocG9zKTtcclxuICAgICAgICAgICAgaWYgKGggPCAwLjAwMDEgfHwgdCA+IHRNYXgpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ICs9IGg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29sb3IgPSBiZzsgXHJcbiAgICBcclxuICAgICAgICBpZiAodCA8IHRNYXgpIHtcclxuICAgICAgICAgICAgdmVjMyBwb3MgPSBjYW1Qb3MgKyB0KnJheTtcclxuICAgICAgICAgICAgY29sb3IgPSB2ZWMzKDEuKTtcclxuICAgICAgICAgICAgdmVjMyBub3JtYWwgPSBjYWxjTm9ybWFsKHBvcyk7XHJcbiAgICAgICAgICAgIGNvbG9yID0gbm9ybWFsO1xyXG4gICAgICAgICAgICBmbG9hdCBkaWZmID0gZG90KHZlYzMoMS4pLCBub3JtYWwpO1xyXG4gICAgICAgICAgICBjb2xvciA9IHZlYzMoZGlmZik7XHJcbiAgICAgICAgICAgIGZsb2F0IGZyZXNuZWwgPSBwb3coMS4gKyBkb3QocmF5LCBub3JtYWwpLCAxLik7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdmVjMyhmcmVzbmVsKTtcclxuICAgICAgICAgICAgY29sb3IgPSBtaXgoY29sb3IsIGJnLCAtZnJlc25lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbG9yID0gdmVjMyhkaXRoZXI4eDgoZ2xfRnJhZ0Nvb3JkLnh5LCBjb2xvcikpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLDEuMCk7XHJcbiAgICB9YFxyXG4gIH0sXHJcbiAgZmJtOiB7XHJcbiAgICBmcmFnbWVudFNoYWRlcjogYCNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX01PRDI4OVxyXG4gICAgI2RlZmluZSBGTkNfTU9EMjg5XHJcbiAgICBmbG9hdCBtb2QyODkoaW4gZmxvYXQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMyIG1vZDI4OShpbiB2ZWMyIHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBtb2QyODkoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgbW9kMjg5KGluIHZlYzQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZuZGVmIEZOQ19QRVJNVVRFXHJcbiAgICAjZGVmaW5lIEZOQ19QRVJNVVRFXHJcbiAgICBmbG9hdCBwZXJtdXRlKGluIGZsb2F0IHgpIHtcclxuICAgICAgICByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LikgKyAxLikqeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgcGVybXV0ZShpbiB2ZWMzIHgpIHtcclxuICAgICAgcmV0dXJuIG1vZDI4OSgoKHgqMzQuMCkrMS4wKSp4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjNCBwZXJtdXRlKGluIHZlYzQgeCkge1xyXG4gICAgICAgIHJldHVybiBtb2QyODkoKCh4ICogMzQuKSArIDEuKSp4KTtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19UQVlMT1JJTlZTUVJUXHJcbiAgICAjZGVmaW5lIEZOQ19UQVlMT1JJTlZTUVJUXHJcbiAgICBmbG9hdCB0YXlsb3JJbnZTcXJ0KGluIGZsb2F0IHIpIHtcclxuICAgICAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjNCB0YXlsb3JJbnZTcXJ0KGluIHZlYzQgcikge1xyXG4gICAgICByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZuZGVmIEZOQ19HUkFENFxyXG4gICAgI2RlZmluZSBGTkNfR1JBRDRcclxuICAgIHZlYzQgZ3JhZDQoZmxvYXQgaiwgdmVjNCBpcCkge1xyXG4gICAgICAgIGNvbnN0IHZlYzQgb25lcyA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgLTEuMCk7XHJcbiAgICAgICAgdmVjNCBwLHM7XHJcbiAgICBcclxuICAgICAgICBwLnh5eiA9IGZsb29yKCBmcmFjdCAodmVjMyhqKSAqIGlwLnh5eikgKiA3LjApICogaXAueiAtIDEuMDtcclxuICAgICAgICBwLncgPSAxLjUgLSBkb3QoYWJzKHAueHl6KSwgb25lcy54eXopO1xyXG4gICAgICAgIHMgPSB2ZWM0KGxlc3NUaGFuKHAsIHZlYzQoMC4wKSkpO1xyXG4gICAgICAgIHAueHl6ID0gcC54eXogKyAocy54eXoqMi4wIC0gMS4wKSAqIHMud3d3O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgYXV0aG9yOiBbSWFuIE1jRXdhbiwgQXNoaW1hIEFydHNdXHJcbiAgICBkZXNjcmlwdGlvbjogU2ltcGxleCBOb2lzZSBodHRwczovL2dpdGh1Yi5jb20vYXNoaW1hL3dlYmdsLW5vaXNlXHJcbiAgICB1c2U6IHNub2lzZSg8dmVjMnx2ZWMzfHZlYzQ+IHBvcylcclxuICAgIGxpY2Vuc2U6IHxcclxuICAgICAgQ29weXJpZ2h0IChDKSAyMDExIEFzaGltYSBBcnRzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxNiBieSBTdGVmYW4gR3VzdGF2c29uIChDbGFzc2ljIG5vaXNlIGFuZCBvdGhlcnMpXHJcbiAgICAgIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICAgICAgUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gICAgICBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAgICAgIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIEdQVUltYWdlIGZyYW1ld29yayBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gICAgICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuICBcclxuICAgICovXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1NOT0lTRVxyXG4gICAgI2RlZmluZSBGTkNfU05PSVNFXHJcbiAgICBmbG9hdCBzbm9pc2UoaW4gdmVjMiB2KSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCBDID0gdmVjNCgwLjIxMTMyNDg2NTQwNTE4NywgIC8vICgzLjAtc3FydCgzLjApKS82LjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzY2MDI1NDAzNzg0NDM5LCAgLy8gMC41KihzcXJ0KDMuMCktMS4wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTc3MzUwMjY5MTg5NjI2LCAgLy8gLTEuMCArIDIuMCAqIEMueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wMjQzOTAyNDM5MDI0MzkpOyAvLyAxLjAgLyA0MS4wXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjMiBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eSkgKTtcclxuICAgICAgICB2ZWMyIHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4KTtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgICAgICB2ZWMyIGkxO1xyXG4gICAgICAgIC8vaTEueCA9IHN0ZXAoIHgwLnksIHgwLnggKTsgLy8geDAueCA+IHgwLnkgPyAxLjAgOiAwLjBcclxuICAgICAgICAvL2kxLnkgPSAxLjAgLSBpMS54O1xyXG4gICAgICAgIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XHJcbiAgICAgICAgLy8geDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHggO1xyXG4gICAgICAgIC8vIHgxID0geDAgLSBpMSArIDEuMCAqIEMueHggO1xyXG4gICAgICAgIC8vIHgyID0geDAgLSAxLjAgKyAyLjAgKiBDLnh4IDtcclxuICAgICAgICB2ZWM0IHgxMiA9IHgwLnh5eHkgKyBDLnh4eno7XHJcbiAgICAgICAgeDEyLnh5IC09IGkxO1xyXG4gICAgXHJcbiAgICAgICAgLy8gUGVybXV0YXRpb25zXHJcbiAgICAgICAgaSA9IG1vZDI4OShpKTsgLy8gQXZvaWQgdHJ1bmNhdGlvbiBlZmZlY3RzIGluIHBlcm11dGF0aW9uXHJcbiAgICAgICAgdmVjMyBwID0gcGVybXV0ZSggcGVybXV0ZSggaS55ICsgdmVjMygwLjAsIGkxLnksIDEuMCApKVxyXG4gICAgICAgICsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSwgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcclxuICAgICAgICBtID0gbSptIDtcclxuICAgICAgICBtID0gbSptIDtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogNDEgcG9pbnRzIHVuaWZvcm1seSBvdmVyIGEgbGluZSwgbWFwcGVkIG9udG8gYSBkaWFtb25kLlxyXG4gICAgICAgIC8vIFRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkgaXMgY2xvc2UgdG8gYSBtdWx0aXBsZSBvZiA0MSAoNDEqNyA9IDI4NylcclxuICAgIFxyXG4gICAgICAgIHZlYzMgeCA9IDIuMCAqIGZyYWN0KHAgKiBDLnd3dykgLSAxLjA7XHJcbiAgICAgICAgdmVjMyBoID0gYWJzKHgpIC0gMC41O1xyXG4gICAgICAgIHZlYzMgb3ggPSBmbG9vcih4ICsgMC41KTtcclxuICAgICAgICB2ZWMzIGEwID0geCAtIG94O1xyXG4gICAgXHJcbiAgICAgICAgLy8gTm9ybWFsaXNlIGdyYWRpZW50cyBpbXBsaWNpdGx5IGJ5IHNjYWxpbmcgbVxyXG4gICAgICAgIC8vIEFwcHJveGltYXRpb24gb2Y6IG0gKj0gaW52ZXJzZXNxcnQoIGEwKmEwICsgaCpoICk7XHJcbiAgICAgICAgbSAqPSAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqICggYTAqYTAgKyBoKmggKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENvbXB1dGUgZmluYWwgbm9pc2UgdmFsdWUgYXQgUFxyXG4gICAgICAgIHZlYzMgZztcclxuICAgICAgICBnLnggID0gYTAueCAgKiB4MC54ICArIGgueCAgKiB4MC55O1xyXG4gICAgICAgIGcueXogPSBhMC55eiAqIHgxMi54eiArIGgueXogKiB4MTIueXc7XHJcbiAgICAgICAgcmV0dXJuIDEzMC4wICogZG90KG0sIGcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWMzIHYpIHtcclxuICAgICAgICBjb25zdCB2ZWMyICBDID0gdmVjMigxLjAvNi4wLCAxLjAvMy4wKSA7XHJcbiAgICAgICAgY29uc3QgdmVjNCAgRCA9IHZlYzQoMC4wLCAwLjUsIDEuMCwgMi4wKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEZpcnN0IGNvcm5lclxyXG4gICAgICAgIHZlYzMgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXl5KSApO1xyXG4gICAgICAgIHZlYzMgeDAgPSAgIHYgLSBpICsgZG90KGksIEMueHh4KSA7XHJcbiAgICBcclxuICAgICAgICAvLyBPdGhlciBjb3JuZXJzXHJcbiAgICAgICAgdmVjMyBnID0gc3RlcCh4MC55engsIHgwLnh5eik7XHJcbiAgICAgICAgdmVjMyBsID0gMS4wIC0gZztcclxuICAgICAgICB2ZWMzIGkxID0gbWluKCBnLnh5eiwgbC56eHkgKTtcclxuICAgICAgICB2ZWMzIGkyID0gbWF4KCBnLnh5eiwgbC56eHkgKTtcclxuICAgIFxyXG4gICAgICAgIC8vICAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDEgPSB4MCAtIGkxICArIDEuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDIgPSB4MCAtIGkyICArIDIuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEMueHh4O1xyXG4gICAgICAgIHZlYzMgeDEgPSB4MCAtIGkxICsgQy54eHg7XHJcbiAgICAgICAgdmVjMyB4MiA9IHgwIC0gaTIgKyBDLnl5eTsgLy8gMi4wKkMueCA9IDEvMyA9IEMueVxyXG4gICAgICAgIHZlYzMgeDMgPSB4MCAtIEQueXl5OyAgICAgIC8vIC0xLjArMy4wKkMueCA9IC0wLjUgPSAtRC55XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpO1xyXG4gICAgICAgIHZlYzQgcCA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgaS56ICsgdmVjNCgwLjAsIGkxLnosIGkyLnosIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnkgKyB2ZWM0KDAuMCwgaTEueSwgaTIueSwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueCArIHZlYzQoMC4wLCBpMS54LCBpMi54LCAxLjAgKSk7XHJcbiAgICBcclxuICAgICAgICAvLyBHcmFkaWVudHM6IDd4NyBwb2ludHMgb3ZlciBhIHNxdWFyZSwgbWFwcGVkIG9udG8gYW4gb2N0YWhlZHJvbi5cclxuICAgICAgICAvLyBUaGUgcmluZyBzaXplIDE3KjE3ID0gMjg5IGlzIGNsb3NlIHRvIGEgbXVsdGlwbGUgb2YgNDkgKDQ5KjYgPSAyOTQpXHJcbiAgICAgICAgZmxvYXQgbl8gPSAwLjE0Mjg1NzE0Mjg1NzsgLy8gMS4wLzcuMFxyXG4gICAgICAgIHZlYzMgIG5zID0gbl8gKiBELnd5eiAtIEQueHp4O1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBqID0gcCAtIDQ5LjAgKiBmbG9vcihwICogbnMueiAqIG5zLnopOyAgLy8gIG1vZChwLDcqNylcclxuICAgIFxyXG4gICAgICAgIHZlYzQgeF8gPSBmbG9vcihqICogbnMueik7XHJcbiAgICAgICAgdmVjNCB5XyA9IGZsb29yKGogLSA3LjAgKiB4XyApOyAgICAvLyBtb2QoaixOKVxyXG4gICAgXHJcbiAgICAgICAgdmVjNCB4ID0geF8gKm5zLnggKyBucy55eXl5O1xyXG4gICAgICAgIHZlYzQgeSA9IHlfICpucy54ICsgbnMueXl5eTtcclxuICAgICAgICB2ZWM0IGggPSAxLjAgLSBhYnMoeCkgLSBhYnMoeSk7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IGIwID0gdmVjNCggeC54eSwgeS54eSApO1xyXG4gICAgICAgIHZlYzQgYjEgPSB2ZWM0KCB4Lnp3LCB5Lnp3ICk7XHJcbiAgICBcclxuICAgICAgICAvL3ZlYzQgczAgPSB2ZWM0KGxlc3NUaGFuKGIwLDAuMCkpKjIuMCAtIDEuMDtcclxuICAgICAgICAvL3ZlYzQgczEgPSB2ZWM0KGxlc3NUaGFuKGIxLDAuMCkpKjIuMCAtIDEuMDtcclxuICAgICAgICB2ZWM0IHMwID0gZmxvb3IoYjApKjIuMCArIDEuMDtcclxuICAgICAgICB2ZWM0IHMxID0gZmxvb3IoYjEpKjIuMCArIDEuMDtcclxuICAgICAgICB2ZWM0IHNoID0gLXN0ZXAoaCwgdmVjNCgwLjApKTtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgYTAgPSBiMC54enl3ICsgczAueHp5dypzaC54eHl5IDtcclxuICAgICAgICB2ZWM0IGExID0gYjEueHp5dyArIHMxLnh6eXcqc2guenp3dyA7XHJcbiAgICBcclxuICAgICAgICB2ZWMzIHAwID0gdmVjMyhhMC54eSxoLngpO1xyXG4gICAgICAgIHZlYzMgcDEgPSB2ZWMzKGEwLnp3LGgueSk7XHJcbiAgICAgICAgdmVjMyBwMiA9IHZlYzMoYTEueHksaC56KTtcclxuICAgICAgICB2ZWMzIHAzID0gdmVjMyhhMS56dyxoLncpO1xyXG4gICAgXHJcbiAgICAgICAgLy9Ob3JtYWxpc2UgZ3JhZGllbnRzXHJcbiAgICAgICAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChwMCxwMCksIGRvdChwMSxwMSksIGRvdChwMiwgcDIpLCBkb3QocDMscDMpKSk7XHJcbiAgICAgICAgcDAgKj0gbm9ybS54O1xyXG4gICAgICAgIHAxICo9IG5vcm0ueTtcclxuICAgICAgICBwMiAqPSBub3JtLno7XHJcbiAgICAgICAgcDMgKj0gbm9ybS53O1xyXG4gICAgXHJcbiAgICAgICAgLy8gTWl4IGZpbmFsIG5vaXNlIHZhbHVlXHJcbiAgICAgICAgdmVjNCBtID0gbWF4KDAuNiAtIHZlYzQoZG90KHgwLHgwKSwgZG90KHgxLHgxKSwgZG90KHgyLHgyKSwgZG90KHgzLHgzKSksIDAuMCk7XHJcbiAgICAgICAgbSA9IG0gKiBtO1xyXG4gICAgICAgIHJldHVybiA0Mi4wICogZG90KCBtKm0sIHZlYzQoIGRvdChwMCx4MCksIGRvdChwMSx4MSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdChwMix4MiksIGRvdChwMyx4MykgKSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBzbm9pc2UoaW4gdmVjNCB2KSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCAgQyA9IHZlYzQoIDAuMTM4MTk2NjAxMTI1MDExLCAgLy8gKDUgLSBzcXJ0KDUpKS8yMCAgRzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjc2MzkzMjAyMjUwMDIxLCAgLy8gMiAqIEc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjQxNDU4OTgwMzM3NTAzMiwgIC8vIDMgKiBHNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDQ3MjEzNTk1NDk5OTU4KTsgLy8gLTEgKyA0ICogRzRcclxuICAgIFxyXG4gICAgICAgIC8vIEZpcnN0IGNvcm5lclxyXG4gICAgICAgIHZlYzQgaSAgPSBmbG9vcih2ICsgZG90KHYsIHZlYzQoLjMwOTAxNjk5NDM3NDk0NzQ1MSkpICk7IC8vIChzcXJ0KDUpIC0gMSkvNFxyXG4gICAgICAgIHZlYzQgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHh4eCk7XHJcbiAgICBcclxuICAgICAgICAvLyBPdGhlciBjb3JuZXJzXHJcbiAgICBcclxuICAgICAgICAvLyBSYW5rIHNvcnRpbmcgb3JpZ2luYWxseSBjb250cmlidXRlZCBieSBCaWxsIExpY2VhLUthbmUsIEFNRCAoZm9ybWVybHkgQVRJKVxyXG4gICAgICAgIHZlYzQgaTA7XHJcbiAgICAgICAgdmVjMyBpc1ggPSBzdGVwKCB4MC55encsIHgwLnh4eCApO1xyXG4gICAgICAgIHZlYzMgaXNZWiA9IHN0ZXAoIHgwLnp3dywgeDAueXl6ICk7XHJcbiAgICAgICAgLy8gIGkwLnggPSBkb3QoIGlzWCwgdmVjMyggMS4wICkgKTtcclxuICAgICAgICBpMC54ID0gaXNYLnggKyBpc1gueSArIGlzWC56O1xyXG4gICAgICAgIGkwLnl6dyA9IDEuMCAtIGlzWDtcclxuICAgICAgICAvLyAgaTAueSArPSBkb3QoIGlzWVoueHksIHZlYzIoIDEuMCApICk7XHJcbiAgICAgICAgaTAueSArPSBpc1laLnggKyBpc1laLnk7XHJcbiAgICAgICAgaTAuencgKz0gMS4wIC0gaXNZWi54eTtcclxuICAgICAgICBpMC56ICs9IGlzWVouejtcclxuICAgICAgICBpMC53ICs9IDEuMCAtIGlzWVouejtcclxuICAgIFxyXG4gICAgICAgIC8vIGkwIG5vdyBjb250YWlucyB0aGUgdW5pcXVlIHZhbHVlcyAwLDEsMiwzIGluIGVhY2ggY2hhbm5lbFxyXG4gICAgICAgIHZlYzQgaTMgPSBjbGFtcCggaTAsIDAuMCwgMS4wICk7XHJcbiAgICAgICAgdmVjNCBpMiA9IGNsYW1wKCBpMC0xLjAsIDAuMCwgMS4wICk7XHJcbiAgICAgICAgdmVjNCBpMSA9IGNsYW1wKCBpMC0yLjAsIDAuMCwgMS4wICk7XHJcbiAgICBcclxuICAgICAgICAvLyAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDMgPSB4MCAtIGkzICArIDMuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4NCA9IHgwIC0gMS4wICsgNC4wICogQy54eHh4XHJcbiAgICAgICAgdmVjNCB4MSA9IHgwIC0gaTEgKyBDLnh4eHg7XHJcbiAgICAgICAgdmVjNCB4MiA9IHgwIC0gaTIgKyBDLnl5eXk7XHJcbiAgICAgICAgdmVjNCB4MyA9IHgwIC0gaTMgKyBDLnp6eno7XHJcbiAgICAgICAgdmVjNCB4NCA9IHgwICsgQy53d3d3O1xyXG4gICAgXHJcbiAgICAgICAgLy8gUGVybXV0YXRpb25zXHJcbiAgICAgICAgaSA9IG1vZDI4OShpKTtcclxuICAgICAgICBmbG9hdCBqMCA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoaS53KSArIGkueikgKyBpLnkpICsgaS54KTtcclxuICAgICAgICB2ZWM0IGoxID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgaS53ICsgdmVjNChpMS53LCBpMi53LCBpMy53LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS56ICsgdmVjNChpMS56LCBpMi56LCBpMy56LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS55ICsgdmVjNChpMS55LCBpMi55LCBpMy55LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS54ICsgdmVjNChpMS54LCBpMi54LCBpMy54LCAxLjAgKSk7XHJcbiAgICBcclxuICAgICAgICAvLyBHcmFkaWVudHM6IDd4N3g2IHBvaW50cyBvdmVyIGEgY3ViZSwgbWFwcGVkIG9udG8gYSA0LWNyb3NzIHBvbHl0b3BlXHJcbiAgICAgICAgLy8gNyo3KjYgPSAyOTQsIHdoaWNoIGlzIGNsb3NlIHRvIHRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkuXHJcbiAgICAgICAgdmVjNCBpcCA9IHZlYzQoMS4wLzI5NC4wLCAxLjAvNDkuMCwgMS4wLzcuMCwgMC4wKSA7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IHAwID0gZ3JhZDQoajAsICAgaXApO1xyXG4gICAgICAgIHZlYzQgcDEgPSBncmFkNChqMS54LCBpcCk7XHJcbiAgICAgICAgdmVjNCBwMiA9IGdyYWQ0KGoxLnksIGlwKTtcclxuICAgICAgICB2ZWM0IHAzID0gZ3JhZDQoajEueiwgaXApO1xyXG4gICAgICAgIHZlYzQgcDQgPSBncmFkNChqMS53LCBpcCk7XHJcbiAgICBcclxuICAgICAgICAvLyBOb3JtYWxpc2UgZ3JhZGllbnRzXHJcbiAgICAgICAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChwMCxwMCksIGRvdChwMSxwMSksIGRvdChwMiwgcDIpLCBkb3QocDMscDMpKSk7XHJcbiAgICAgICAgcDAgKj0gbm9ybS54O1xyXG4gICAgICAgIHAxICo9IG5vcm0ueTtcclxuICAgICAgICBwMiAqPSBub3JtLno7XHJcbiAgICAgICAgcDMgKj0gbm9ybS53O1xyXG4gICAgICAgIHA0ICo9IHRheWxvckludlNxcnQoZG90KHA0LHA0KSk7XHJcbiAgICBcclxuICAgICAgICAvLyBNaXggY29udHJpYnV0aW9ucyBmcm9tIHRoZSBmaXZlIGNvcm5lcnNcclxuICAgICAgICB2ZWMzIG0wID0gbWF4KDAuNiAtIHZlYzMoZG90KHgwLHgwKSwgZG90KHgxLHgxKSwgZG90KHgyLHgyKSksIDAuMCk7XHJcbiAgICAgICAgdmVjMiBtMSA9IG1heCgwLjYgLSB2ZWMyKGRvdCh4Myx4MyksIGRvdCh4NCx4NCkgICAgICAgICAgICApLCAwLjApO1xyXG4gICAgICAgIG0wID0gbTAgKiBtMDtcclxuICAgICAgICBtMSA9IG0xICogbTE7XHJcbiAgICAgICAgcmV0dXJuIDQ5LjAgKiAoIGRvdChtMCptMCwgdmVjMyggZG90KCBwMCwgeDAgKSwgZG90KCBwMSwgeDEgKSwgZG90KCBwMiwgeDIgKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgKyBkb3QobTEqbTEsIHZlYzIoIGRvdCggcDMsIHgzICksIGRvdCggcDQsIHg0ICkgKSApICkgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHNub2lzZTMoIHZlYzMgeCApe1xyXG4gICAgICAgIGZsb2F0IHMgID0gc25vaXNlKHZlYzMoIHggKSk7XHJcbiAgICAgICAgZmxvYXQgczEgPSBzbm9pc2UodmVjMyggeC55IC0gMTkuMSAsIHgueiArIDMzLjQgLCB4LnggKyA0Ny4yICkpO1xyXG4gICAgICAgIGZsb2F0IHMyID0gc25vaXNlKHZlYzMoIHgueiArIDc0LjIgLCB4LnggLSAxMjQuNSAsIHgueSArIDk5LjQgKSk7XHJcbiAgICAgICAgdmVjMyBjID0gdmVjMyggcyAsIHMxICwgczIgKTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBzbm9pc2UzKCB2ZWM0IHggKXtcclxuICAgICAgICBmbG9hdCBzICA9IHNub2lzZSh2ZWM0KCB4ICkpO1xyXG4gICAgICAgIGZsb2F0IHMxID0gc25vaXNlKHZlYzQoIHgueSAtIDE5LjEgLCB4LnogKyAzMy40ICwgeC54ICsgNDcuMiwgeC53ICkpO1xyXG4gICAgICAgIGZsb2F0IHMyID0gc25vaXNlKHZlYzQoIHgueiArIDc0LjIgLCB4LnggLSAxMjQuNSAsIHgueSArIDk5LjQsIHgudyApKTtcclxuICAgICAgICB2ZWMzIGMgPSB2ZWMzKCBzICwgczEgLCBzMiApO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICB1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gICAgdW5pZm9ybSBmbG9hdCB1X3RpbWU7XHJcbiAgICB2ZWMyIHJhdGlvKGluIHZlYzIgc3QsIGluIHZlYzIgcykge1xyXG4gICAgICAgIHJldHVybiBtaXgoIHZlYzIoKHN0Lngqcy54L3MueSktKHMueCouNS1zLnkqLjUpL3MueSxzdC55KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZWMyKHN0Lngsc3QueSoocy55L3MueCktKHMueSouNS1zLngqLjUpL3MueCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChzLngscy55KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX09DVEFWRVNcclxuICAgICNkZWZpbmUgRkJNX09DVEFWRVMgNFxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX05PSVNFX0ZOQ1xyXG4gICAgI2RlZmluZSBGQk1fTk9JU0VfRk5DKFBPU19VVikgc25vaXNlKFBPU19VVilcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9WQUxVRV9JTklUSUFMXHJcbiAgICAjZGVmaW5lIEZCTV9WQUxVRV9JTklUSUFMIDAuMFxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX1NDQUxFX1NDQUxBUlxyXG4gICAgI2RlZmluZSBGQk1fU0NBTEVfU0NBTEFSIDIuMFxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX0FNUExJVFVEX0lOSVRJQUxcclxuICAgICNkZWZpbmUgRkJNX0FNUExJVFVEX0lOSVRJQUwgMC41XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fQU1QTElUVURfU0NBTEFSXHJcbiAgICAjZGVmaW5lIEZCTV9BTVBMSVRVRF9TQ0FMQVIgMC41XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfRkJNXHJcbiAgICAjZGVmaW5lIEZOQ19GQk1cclxuICAgIGZsb2F0IGZibShpbiB2ZWMyIHN0KSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcclxuICAgICAgICBmbG9hdCB2YWx1ZSA9IEZCTV9WQUxVRV9JTklUSUFMO1xyXG4gICAgICAgIGZsb2F0IGFtcGxpdHVkID0gRkJNX0FNUExJVFVEX0lOSVRJQUw7XHJcbiAgICBcclxuICAgICAgICAvLyBMb29wIG9mIG9jdGF2ZXNcclxuICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IEZCTV9PQ1RBVkVTOyBpKyspIHtcclxuICAgICAgICAgICAgdmFsdWUgKz0gYW1wbGl0dWQgKiBGQk1fTk9JU0VfRk5DKHN0KTtcclxuICAgICAgICAgICAgc3QgKj0gRkJNX1NDQUxFX1NDQUxBUjtcclxuICAgICAgICAgICAgYW1wbGl0dWQgKj0gRkJNX0FNUExJVFVEX1NDQUxBUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBmYm0oaW4gdmVjMyBwb3MpIHtcclxuICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xyXG4gICAgICAgIGZsb2F0IHZhbHVlID0gRkJNX1ZBTFVFX0lOSVRJQUw7XHJcbiAgICAgICAgZmxvYXQgYW1wbGl0dWQgPSBGQk1fQU1QTElUVURfSU5JVElBTDtcclxuICAgIFxyXG4gICAgICAgIC8vIExvb3Agb2Ygb2N0YXZlc1xyXG4gICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgRkJNX09DVEFWRVM7IGkrKykge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSBhbXBsaXR1ZCAqIEZCTV9OT0lTRV9GTkMocG9zKTtcclxuICAgICAgICAgICAgcG9zICo9IEZCTV9TQ0FMRV9TQ0FMQVI7XHJcbiAgICAgICAgICAgIGFtcGxpdHVkICo9IEZCTV9BTVBMSVRVRF9TQ0FMQVI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XHJcbiAgICAgICAgdmVjMiByYXRpb3N0ID0gcmF0aW8oc3QsIHVfcmVzb2x1dGlvbik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IG5vaXNlID0gZmJtKHZlYzMocmF0aW9zdCwgdV90aW1lLzQwLikpO1xyXG4gICAgICAgIGZsb2F0IG5vaXNlMiA9IGZibSh2ZWMzKHJhdGlvc3QsIG5vaXNlKSk7XHJcbiAgICAgICAgZmxvYXQgbm9pc2UzID0gZmJtKHZlYzMocmF0aW9zdCwgbm9pc2UyKSk7XHJcbiAgICBcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBjb2xvciA9IHZlYzMocmF0aW9zdC54LHJhdGlvc3QueSwgMS4pO1xyXG4gICAgICAgIGNvbG9yICs9IG5vaXNlMztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yIC09IGRpc3RhbmNlKHZlYzIoc3QueSwgc3QueCksIHZlYzIoMC4sIHN0LngpKSozLjtcclxuICAgIFxyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4pO1xyXG4gICAgfWBcclxuICB9LFxyXG4gIHRlbXBsYXRlOiB7XHJcbiAgICBmcmFnbWVudFNoYWRlcjogYCNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcclxuICAgIHVuaWZvcm0gdmVjMiB1X21vdXNlOyBcclxuICAgIHVuaWZvcm0gZmxvYXQgdV90aW1lO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBjb2xvciA9IHZlYzMoc3QueCxzdC55LGFicyhzaW4odV90aW1lKSkpO1xyXG4gICAgXHJcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwxLjApO1xyXG4gICAgfWBcclxuICB9LFxyXG4gIGRpdGhlclRleHR1cmU6IHtcclxuICAgIGZyYWdtZW50U2hhZGVyOiBgLy8gQXV0aG9yOlxyXG4gICAgLy8gVGl0bGU6XHJcbiAgICBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgXHJcbiAgICB1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gICAgdW5pZm9ybSB2ZWMyIHVfbW91c2U7IFxyXG4gICAgdW5pZm9ybSBmbG9hdCB1X3RpbWU7XHJcbiAgICBcclxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZV8xO1xyXG4gICAgdW5pZm9ybSB2ZWMyIHVfdGV4dHVyZV8xX1Jlc29sdXRpb247XHJcbiAgICBcclxuICAgIFxyXG4gICAgZmxvYXQgbHVtYSh2ZWMzIGNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBkb3QoY29sb3IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBsdW1hKHZlYzQgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGRvdChjb2xvci5yZ2IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZsb2F0IGRpdGhlcjh4OCh2ZWMyIHBvc2l0aW9uLCBmbG9hdCBicmlnaHRuZXNzKSB7XHJcbiAgICAgIGludCB4ID0gaW50KG1vZChwb3NpdGlvbi54LCA4LjApKTtcclxuICAgICAgaW50IHkgPSBpbnQobW9kKHBvc2l0aW9uLnksIDguMCkpO1xyXG4gICAgICBpbnQgaW5kZXggPSB4ICsgeSAqIDg7XHJcbiAgICAgIGZsb2F0IGxpbWl0ID0gMC4wO1xyXG4gICAgXHJcbiAgICAgIGlmICh4IDwgOCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSBsaW1pdCA9IDAuMDE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKSBsaW1pdCA9IDAuNTE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyKSBsaW1pdCA9IDAuMTQwNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzKSBsaW1pdCA9IDAuNjQwNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0KSBsaW1pdCA9IDAuMDQ2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1KSBsaW1pdCA9IDAuNTQ2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA2KSBsaW1pdCA9IDAuMTcxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA3KSBsaW1pdCA9IDAuNjcxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA4KSBsaW1pdCA9IDAuNzY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA5KSBsaW1pdCA9IDAuMjY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxMCkgbGltaXQgPSAwLjg5MDYyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTEpIGxpbWl0ID0gMC4zOTA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEyKSBsaW1pdCA9IDAuNzk2ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxMykgbGltaXQgPSAwLjI5Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTQpIGxpbWl0ID0gMC45MjE4NzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDE1KSBsaW1pdCA9IDAuNDIxODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxNikgbGltaXQgPSAwLjIwMzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMTcpIGxpbWl0ID0gMC43MDMxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDE4KSBsaW1pdCA9IDAuMDc4MTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxOSkgbGltaXQgPSAwLjU3ODEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjApIGxpbWl0ID0gMC4yMzQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDIxKSBsaW1pdCA9IDAuNzM0Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyMikgbGltaXQgPSAwLjEwOTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjMpIGxpbWl0ID0gMC42MDkzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDI0KSBsaW1pdCA9IDAuOTUzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyNSkgbGltaXQgPSAwLjQ1MzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjYpIGxpbWl0ID0gMC44MjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDI3KSBsaW1pdCA9IDAuMzI4MTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAyOCkgbGltaXQgPSAwLjk4NDM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMjkpIGxpbWl0ID0gMC40ODQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDMwKSBsaW1pdCA9IDAuODU5Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzMSkgbGltaXQgPSAwLjM1OTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMzIpIGxpbWl0ID0gMC4wNjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzMykgbGltaXQgPSAwLjU2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDM0KSBsaW1pdCA9IDAuMTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMzUpIGxpbWl0ID0gMC42ODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzNikgbGltaXQgPSAwLjAzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzNykgbGltaXQgPSAwLjUzMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzOCkgbGltaXQgPSAwLjE1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzOSkgbGltaXQgPSAwLjY1NjI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0MCkgbGltaXQgPSAwLjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQxKSBsaW1pdCA9IDAuMzEyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNDIpIGxpbWl0ID0gMC45Mzc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA0MykgbGltaXQgPSAwLjQzNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ0KSBsaW1pdCA9IDAuNzgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ1KSBsaW1pdCA9IDAuMjgxMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ2KSBsaW1pdCA9IDAuOTA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ3KSBsaW1pdCA9IDAuNDA2MjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ4KSBsaW1pdCA9IDAuMjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDQ5KSBsaW1pdCA9IDAuNzU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDUwKSBsaW1pdCA9IDAuMTI1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1MSkgbGltaXQgPSAwLjYyNTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTIpIGxpbWl0ID0gMC4yMTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTMpIGxpbWl0ID0gMC43MTg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTQpIGxpbWl0ID0gMC4wOTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTUpIGxpbWl0ID0gMC41OTM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNTYpIGxpbWl0ID0gMS4wO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1NykgbGltaXQgPSAwLjU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDU4KSBsaW1pdCA9IDAuODc1O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSA1OSkgbGltaXQgPSAwLjM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjApIGxpbWl0ID0gMC45Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjEpIGxpbWl0ID0gMC40Njg3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjIpIGxpbWl0ID0gMC44NDM3NTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gNjMpIGxpbWl0ID0gMC4zNDM3NTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiBicmlnaHRuZXNzIDwgbGltaXQgPyAwLjAgOiAxLjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgZGl0aGVyOHg4KHZlYzIgcG9zaXRpb24sIHZlYzMgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGNvbG9yICogZGl0aGVyOHg4KHBvc2l0aW9uLCBsdW1hKGNvbG9yKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgZGl0aGVyOHg4KHZlYzIgcG9zaXRpb24sIHZlYzQgY29sb3IpIHtcclxuICAgICAgcmV0dXJuIHZlYzQoY29sb3IucmdiICogZGl0aGVyOHg4KHBvc2l0aW9uLCBsdW1hKGNvbG9yKSksIDEuMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfUkFUSU9cclxuICAgICNkZWZpbmUgRk5DX1JBVElPXHJcbiAgICB2ZWMyIHJhdGlvKGluIHZlYzIgc3QsIGluIHZlYzIgcykge1xyXG4gICAgICAgIHJldHVybiBtaXgoIHZlYzIoKHN0Lngqcy54L3MueSktKHMueCouNS1zLnkqLjUpL3MueSxzdC55KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZWMyKHN0Lngsc3QueSoocy55L3MueCktKHMueSouNS1zLngqLjUpL3MueCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChzLngscy55KSk7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xyXG4gICAgICAgIHN0ID0gcmF0aW8oc3QsIHVfcmVzb2x1dGlvbik7XHJcbiAgICAgICAgdmVjNCBjb2xvciA9IHZlYzQoc3QueCxzdC55LDAuMCwxLjApO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBmbG9hdCBncmlkID0gdV9yZXNvbHV0aW9uLngvMy41O1xyXG4gICAgICAgIHZlYzIgc3RfZiA9IGZyYWN0KHN0KTtcclxuICAgICAgICB2ZWMyIHN0X2kgPSBmbG9vcihzdCAqIGdyaWQpL2dyaWQ7XHJcbiAgICAgICAgLy8gc3RfaSA9IHN0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbG9yID0gdmVjNChzdC54LHN0LnksYWJzKHNpbih1X3RpbWUpKSwgMS4pO1xyXG4gICAgICAgIGNvbG9yID0gdGV4dHVyZTJEKHVfdGV4dHVyZV8xLHN0X2kpO1xyXG4gICAgICAgIGNvbG9yID0gdmVjNChkaXRoZXI4eDgoZ2xfRnJhZ0Nvb3JkLnh5LCBjb2xvcikpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcclxuICAgIH1gLFxyXG4gICAgdGV4dHVyZTogXCIvYXNzZXRzL3BpY3R1cmVzL2EuanBnXCJcclxuICB9LFxyXG4gIHNpbXBsZXhOb2lzZToge1xyXG4gICAgZnJhZ21lbnRTaGFkZXI6IGAgI2lmZGVmIEdMX0VTXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICB1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gICAgdW5pZm9ybSB2ZWMyIHVfbW91c2U7XHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfdGltZTtcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfUkFUSU9cclxuICAgICNkZWZpbmUgRk5DX1JBVElPXHJcbiAgICB2ZWMyIHJhdGlvKGluIHZlYzIgc3QsIGluIHZlYzIgcykge1xyXG4gICAgICAgIHJldHVybiBtaXgoIHZlYzIoKHN0Lngqcy54L3MueSktKHMueCouNS1zLnkqLjUpL3MueSxzdC55KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZWMyKHN0Lngsc3QueSoocy55L3MueCktKHMueSouNS1zLngqLjUpL3MueCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChzLngscy55KSk7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX0hTVjJSR0JcclxuICAgICNkZWZpbmUgRk5DX0hTVjJSR0JcclxuICAgIHZlYzMgaHN2MnJnYihpbiB2ZWMzIGhzYikge1xyXG4gICAgICAgIHZlYzMgcmdiID0gY2xhbXAoYWJzKG1vZChoc2IueCAqIDYuICsgdmVjMygwLiwgNC4sIDIuKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNi4pIC0gMy4pIC0gMS4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMC4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMS4pO1xyXG4gICAgICAgICNpZmRlZiBIU1YyUkdCX1NNT09USFxyXG4gICAgICAgIHJnYiA9IHJnYipyZ2IqKDMuIC0gMi4gKiByZ2IpO1xyXG4gICAgICAgICNlbmRpZlxyXG4gICAgICAgIHJldHVybiBoc2IueiAqIG1peCh2ZWMzKDEuKSwgcmdiLCBoc2IueSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgaHN2MnJnYihpbiB2ZWM0IGhzYikge1xyXG4gICAgICAgIHJldHVybiB2ZWM0KGhzdjJyZ2IoaHNiLnJnYiksIGhzYi5hKTtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19NT0QyODlcclxuICAgICNkZWZpbmUgRk5DX01PRDI4OVxyXG4gICAgZmxvYXQgbW9kMjg5KGluIGZsb2F0IHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMiBtb2QyODkoaW4gdmVjMiB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgbW9kMjg5KGluIHZlYzMgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWM0IG1vZDI4OShpbiB2ZWM0IHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19QRVJNVVRFXHJcbiAgICAjZGVmaW5lIEZOQ19QRVJNVVRFXHJcbiAgICBmbG9hdCBwZXJtdXRlKGluIGZsb2F0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHBlcm11dGUoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgcGVybXV0ZShpbiB2ZWM0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfVEFZTE9SSU5WU1FSVFxyXG4gICAgI2RlZmluZSBGTkNfVEFZTE9SSU5WU1FSVFxyXG4gICAgZmxvYXQgdGF5bG9ySW52U3FydChpbiBmbG9hdCByKSB7XHJcbiAgICAgIHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgdGF5bG9ySW52U3FydChpbiB2ZWM0IHIpIHtcclxuICAgICAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19HUkFENFxyXG4gICAgI2RlZmluZSBGTkNfR1JBRDRcclxuICAgIHZlYzQgZ3JhZDQoZmxvYXQgaiwgdmVjNCBpcCkge1xyXG4gICAgICAgIGNvbnN0IHZlYzQgb25lcyA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgLTEuMCk7XHJcbiAgICAgICAgdmVjNCBwLHM7XHJcbiAgICBcclxuICAgICAgICBwLnh5eiA9IGZsb29yKCBmcmFjdCAodmVjMyhqKSAqIGlwLnh5eikgKiA3LjApICogaXAueiAtIDEuMDtcclxuICAgICAgICBwLncgPSAxLjUgLSBkb3QoYWJzKHAueHl6KSwgb25lcy54eXopO1xyXG4gICAgICAgIHMgPSB2ZWM0KGxlc3NUaGFuKHAsIHZlYzQoMC4wKSkpO1xyXG4gICAgICAgIHAueHl6ID0gcC54eXogKyAocy54eXoqMi4wIC0gMS4wKSAqIHMud3d3O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgYXV0aG9yOiBbSWFuIE1jRXdhbiwgQXNoaW1hIEFydHNdXHJcbiAgICBkZXNjcmlwdGlvbjogU2ltcGxleCBOb2lzZSBodHRwczovL2dpdGh1Yi5jb20vYXNoaW1hL3dlYmdsLW5vaXNlXHJcbiAgICB1c2U6IHNub2lzZSg8dmVjMnx2ZWMzfHZlYzQ+IHBvcylcclxuICAgIGxpY2Vuc2U6IHxcclxuICAgICAgQ29weXJpZ2h0IChDKSAyMDExIEFzaGltYSBBcnRzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxNiBieSBTdGVmYW4gR3VzdGF2c29uIChDbGFzc2ljIG5vaXNlIGFuZCBvdGhlcnMpXHJcbiAgICAgIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICAgICAgUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gICAgICBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAgICAgIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIEdQVUltYWdlIGZyYW1ld29yayBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gICAgICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuICBcclxuICAgICovXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1NOT0lTRVxyXG4gICAgI2RlZmluZSBGTkNfU05PSVNFXHJcbiAgICBmbG9hdCBzbm9pc2UoaW4gdmVjMiB2KSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCBDID0gdmVjNCgwLjIxMTMyNDg2NTQwNTE4NywgIC8vICgzLjAtc3FydCgzLjApKS82LjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMzY2MDI1NDAzNzg0NDM5LCAgLy8gMC41KihzcXJ0KDMuMCktMS4wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTc3MzUwMjY5MTg5NjI2LCAgLy8gLTEuMCArIDIuMCAqIEMueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wMjQzOTAyNDM5MDI0MzkpOyAvLyAxLjAgLyA0MS4wXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjMiBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eSkgKTtcclxuICAgICAgICB2ZWMyIHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4KTtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgICAgICB2ZWMyIGkxO1xyXG4gICAgICAgIC8vaTEueCA9IHN0ZXAoIHgwLnksIHgwLnggKTsgLy8geDAueCA+IHgwLnkgPyAxLjAgOiAwLjBcclxuICAgICAgICAvL2kxLnkgPSAxLjAgLSBpMS54O1xyXG4gICAgICAgIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XHJcbiAgICAgICAgLy8geDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHggO1xyXG4gICAgICAgIC8vIHgxID0geDAgLSBpMSArIDEuMCAqIEMueHggO1xyXG4gICAgICAgIC8vIHgyID0geDAgLSAxLjAgKyAyLjAgKiBDLnh4IDtcclxuICAgICAgICB2ZWM0IHgxMiA9IHgwLnh5eHkgKyBDLnh4eno7XHJcbiAgICAgICAgeDEyLnh5IC09IGkxO1xyXG4gICAgXHJcbiAgICAgICAgLy8gUGVybXV0YXRpb25zXHJcbiAgICAgICAgaSA9IG1vZDI4OShpKTsgLy8gQXZvaWQgdHJ1bmNhdGlvbiBlZmZlY3RzIGluIHBlcm11dGF0aW9uXHJcbiAgICAgICAgdmVjMyBwID0gcGVybXV0ZSggcGVybXV0ZSggaS55ICsgdmVjMygwLjAsIGkxLnksIDEuMCApKVxyXG4gICAgICAgICsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSwgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcclxuICAgICAgICBtID0gbSptIDtcclxuICAgICAgICBtID0gbSptIDtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogNDEgcG9pbnRzIHVuaWZvcm1seSBvdmVyIGEgbGluZSwgbWFwcGVkIG9udG8gYSBkaWFtb25kLlxyXG4gICAgICAgIC8vIFRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkgaXMgY2xvc2UgdG8gYSBtdWx0aXBsZSBvZiA0MSAoNDEqNyA9IDI4NylcclxuICAgIFxyXG4gICAgICAgIHZlYzMgeCA9IDIuMCAqIGZyYWN0KHAgKiBDLnd3dykgLSAxLjA7XHJcbiAgICAgICAgdmVjMyBoID0gYWJzKHgpIC0gMC41O1xyXG4gICAgICAgIHZlYzMgb3ggPSBmbG9vcih4ICsgMC41KTtcclxuICAgICAgICB2ZWMzIGEwID0geCAtIG94O1xyXG4gICAgXHJcbiAgICAgICAgLy8gTm9ybWFsaXNlIGdyYWRpZW50cyBpbXBsaWNpdGx5IGJ5IHNjYWxpbmcgbVxyXG4gICAgICAgIC8vIEFwcHJveGltYXRpb24gb2Y6IG0gKj0gaW52ZXJzZXNxcnQoIGEwKmEwICsgaCpoICk7XHJcbiAgICAgICAgbSAqPSAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqICggYTAqYTAgKyBoKmggKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENvbXB1dGUgZmluYWwgbm9pc2UgdmFsdWUgYXQgUFxyXG4gICAgICAgIHZlYzMgZztcclxuICAgICAgICBnLnggID0gYTAueCAgKiB4MC54ICArIGgueCAgKiB4MC55O1xyXG4gICAgICAgIGcueXogPSBhMC55eiAqIHgxMi54eiArIGgueXogKiB4MTIueXc7XHJcbiAgICAgICAgcmV0dXJuIDEzMC4wICogZG90KG0sIGcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWMzIHYpIHtcclxuICAgICAgICBjb25zdCB2ZWMyICBDID0gdmVjMigxLjAvNi4wLCAxLjAvMy4wKSA7XHJcbiAgICAgICAgY29uc3QgdmVjNCAgRCA9IHZlYzQoMC4wLCAwLjUsIDEuMCwgMi4wKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEZpcnN0IGNvcm5lclxyXG4gICAgICAgIHZlYzMgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXl5KSApO1xyXG4gICAgICAgIHZlYzMgeDAgPSAgIHYgLSBpICsgZG90KGksIEMueHh4KSA7XHJcbiAgICBcclxuICAgICAgICAvLyBPdGhlciBjb3JuZXJzXHJcbiAgICAgICAgdmVjMyBnID0gc3RlcCh4MC55engsIHgwLnh5eik7XHJcbiAgICAgICAgdmVjMyBsID0gMS4wIC0gZztcclxuICAgICAgICB2ZWMzIGkxID0gbWluKCBnLnh5eiwgbC56eHkgKTtcclxuICAgICAgICB2ZWMzIGkyID0gbWF4KCBnLnh5eiwgbC56eHkgKTtcclxuICAgIFxyXG4gICAgICAgIC8vICAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDEgPSB4MCAtIGkxICArIDEuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDIgPSB4MCAtIGkyICArIDIuMCAqIEMueHh4O1xyXG4gICAgICAgIC8vICAgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEMueHh4O1xyXG4gICAgICAgIHZlYzMgeDEgPSB4MCAtIGkxICsgQy54eHg7XHJcbiAgICAgICAgdmVjMyB4MiA9IHgwIC0gaTIgKyBDLnl5eTsgLy8gMi4wKkMueCA9IDEvMyA9IEMueVxyXG4gICAgICAgIHZlYzMgeDMgPSB4MCAtIEQueXl5OyAgICAgIC8vIC0xLjArMy4wKkMueCA9IC0wLjUgPSAtRC55XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpO1xyXG4gICAgICAgIHZlYzQgcCA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgaS56ICsgdmVjNCgwLjAsIGkxLnosIGkyLnosIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnkgKyB2ZWM0KDAuMCwgaTEueSwgaTIueSwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueCArIHZlYzQoMC4wLCBpMS54LCBpMi54LCAxLjAgKSk7XHJcbiAgICBcclxuICAgICAgICAvLyBHcmFkaWVudHM6IDd4NyBwb2ludHMgb3ZlciBhIHNxdWFyZSwgbWFwcGVkIG9udG8gYW4gb2N0YWhlZHJvbi5cclxuICAgICAgICAvLyBUaGUgcmluZyBzaXplIDE3KjE3ID0gMjg5IGlzIGNsb3NlIHRvIGEgbXVsdGlwbGUgb2YgNDkgKDQ5KjYgPSAyOTQpXHJcbiAgICAgICAgZmxvYXQgbl8gPSAwLjE0Mjg1NzE0Mjg1NzsgLy8gMS4wLzcuMFxyXG4gICAgICAgIHZlYzMgIG5zID0gbl8gKiBELnd5eiAtIEQueHp4O1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBqID0gcCAtIDQ5LjAgKiBmbG9vcihwICogbnMueiAqIG5zLnopOyAgLy8gIG1vZChwLDcqNylcclxuICAgIFxyXG4gICAgICAgIHZlYzQgeF8gPSBmbG9vcihqICogbnMueik7XHJcbiAgICAgICAgdmVjNCB5XyA9IGZsb29yKGogLSA3LjAgKiB4XyApOyAgICAvLyBtb2QoaixOKVxyXG4gICAgXHJcbiAgICAgICAgdmVjNCB4ID0geF8gKm5zLnggKyBucy55eXl5O1xyXG4gICAgICAgIHZlYzQgeSA9IHlfICpucy54ICsgbnMueXl5eTtcclxuICAgICAgICB2ZWM0IGggPSAxLjAgLSBhYnMoeCkgLSBhYnMoeSk7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IGIwID0gdmVjNCggeC54eSwgeS54eSApO1xyXG4gICAgICAgIHZlYzQgYjEgPSB2ZWM0KCB4Lnp3LCB5Lnp3ICk7XHJcbiAgICBcclxuICAgICAgICAvL3ZlYzQgczAgPSB2ZWM0KGxlc3NUaGFuKGIwLDAuMCkpKjIuMCAtIDEuMDtcclxuICAgICAgICAvL3ZlYzQgczEgPSB2ZWM0KGxlc3NUaGFuKGIxLDAuMCkpKjIuMCAtIDEuMDtcclxuICAgICAgICB2ZWM0IHMwID0gZmxvb3IoYjApKjIuMCArIDEuMDtcclxuICAgICAgICB2ZWM0IHMxID0gZmxvb3IoYjEpKjIuMCArIDEuMDtcclxuICAgICAgICB2ZWM0IHNoID0gLXN0ZXAoaCwgdmVjNCgwLjApKTtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgYTAgPSBiMC54enl3ICsgczAueHp5dypzaC54eHl5IDtcclxuICAgICAgICB2ZWM0IGExID0gYjEueHp5dyArIHMxLnh6eXcqc2guenp3dyA7XHJcbiAgICBcclxuICAgICAgICB2ZWMzIHAwID0gdmVjMyhhMC54eSxoLngpO1xyXG4gICAgICAgIHZlYzMgcDEgPSB2ZWMzKGEwLnp3LGgueSk7XHJcbiAgICAgICAgdmVjMyBwMiA9IHZlYzMoYTEueHksaC56KTtcclxuICAgICAgICB2ZWMzIHAzID0gdmVjMyhhMS56dyxoLncpO1xyXG4gICAgXHJcbiAgICAgICAgLy9Ob3JtYWxpc2UgZ3JhZGllbnRzXHJcbiAgICAgICAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChwMCxwMCksIGRvdChwMSxwMSksIGRvdChwMiwgcDIpLCBkb3QocDMscDMpKSk7XHJcbiAgICAgICAgcDAgKj0gbm9ybS54O1xyXG4gICAgICAgIHAxICo9IG5vcm0ueTtcclxuICAgICAgICBwMiAqPSBub3JtLno7XHJcbiAgICAgICAgcDMgKj0gbm9ybS53O1xyXG4gICAgXHJcbiAgICAgICAgLy8gTWl4IGZpbmFsIG5vaXNlIHZhbHVlXHJcbiAgICAgICAgdmVjNCBtID0gbWF4KDAuNiAtIHZlYzQoZG90KHgwLHgwKSwgZG90KHgxLHgxKSwgZG90KHgyLHgyKSwgZG90KHgzLHgzKSksIDAuMCk7XHJcbiAgICAgICAgbSA9IG0gKiBtO1xyXG4gICAgICAgIHJldHVybiA0Mi4wICogZG90KCBtKm0sIHZlYzQoIGRvdChwMCx4MCksIGRvdChwMSx4MSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdChwMix4MiksIGRvdChwMyx4MykgKSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmbG9hdCBzbm9pc2UoaW4gdmVjNCB2KSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCAgQyA9IHZlYzQoIDAuMTM4MTk2NjAxMTI1MDExLCAgLy8gKDUgLSBzcXJ0KDUpKS8yMCAgRzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjc2MzkzMjAyMjUwMDIxLCAgLy8gMiAqIEc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjQxNDU4OTgwMzM3NTAzMiwgIC8vIDMgKiBHNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDQ3MjEzNTk1NDk5OTU4KTsgLy8gLTEgKyA0ICogRzRcclxuICAgIFxyXG4gICAgICAgIC8vIEZpcnN0IGNvcm5lclxyXG4gICAgICAgIHZlYzQgaSAgPSBmbG9vcih2ICsgZG90KHYsIHZlYzQoLjMwOTAxNjk5NDM3NDk0NzQ1MSkpICk7IC8vIChzcXJ0KDUpIC0gMSkvNFxyXG4gICAgICAgIHZlYzQgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHh4eCk7XHJcbiAgICBcclxuICAgICAgICAvLyBPdGhlciBjb3JuZXJzXHJcbiAgICBcclxuICAgICAgICAvLyBSYW5rIHNvcnRpbmcgb3JpZ2luYWxseSBjb250cmlidXRlZCBieSBCaWxsIExpY2VhLUthbmUsIEFNRCAoZm9ybWVybHkgQVRJKVxyXG4gICAgICAgIHZlYzQgaTA7XHJcbiAgICAgICAgdmVjMyBpc1ggPSBzdGVwKCB4MC55encsIHgwLnh4eCApO1xyXG4gICAgICAgIHZlYzMgaXNZWiA9IHN0ZXAoIHgwLnp3dywgeDAueXl6ICk7XHJcbiAgICAgICAgLy8gIGkwLnggPSBkb3QoIGlzWCwgdmVjMyggMS4wICkgKTtcclxuICAgICAgICBpMC54ID0gaXNYLnggKyBpc1gueSArIGlzWC56O1xyXG4gICAgICAgIGkwLnl6dyA9IDEuMCAtIGlzWDtcclxuICAgICAgICAvLyAgaTAueSArPSBkb3QoIGlzWVoueHksIHZlYzIoIDEuMCApICk7XHJcbiAgICAgICAgaTAueSArPSBpc1laLnggKyBpc1laLnk7XHJcbiAgICAgICAgaTAuencgKz0gMS4wIC0gaXNZWi54eTtcclxuICAgICAgICBpMC56ICs9IGlzWVouejtcclxuICAgICAgICBpMC53ICs9IDEuMCAtIGlzWVouejtcclxuICAgIFxyXG4gICAgICAgIC8vIGkwIG5vdyBjb250YWlucyB0aGUgdW5pcXVlIHZhbHVlcyAwLDEsMiwzIGluIGVhY2ggY2hhbm5lbFxyXG4gICAgICAgIHZlYzQgaTMgPSBjbGFtcCggaTAsIDAuMCwgMS4wICk7XHJcbiAgICAgICAgdmVjNCBpMiA9IGNsYW1wKCBpMC0xLjAsIDAuMCwgMS4wICk7XHJcbiAgICAgICAgdmVjNCBpMSA9IGNsYW1wKCBpMC0yLjAsIDAuMCwgMS4wICk7XHJcbiAgICBcclxuICAgICAgICAvLyAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDMgPSB4MCAtIGkzICArIDMuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4NCA9IHgwIC0gMS4wICsgNC4wICogQy54eHh4XHJcbiAgICAgICAgdmVjNCB4MSA9IHgwIC0gaTEgKyBDLnh4eHg7XHJcbiAgICAgICAgdmVjNCB4MiA9IHgwIC0gaTIgKyBDLnl5eXk7XHJcbiAgICAgICAgdmVjNCB4MyA9IHgwIC0gaTMgKyBDLnp6eno7XHJcbiAgICAgICAgdmVjNCB4NCA9IHgwICsgQy53d3d3O1xyXG4gICAgXHJcbiAgICAgICAgLy8gUGVybXV0YXRpb25zXHJcbiAgICAgICAgaSA9IG1vZDI4OShpKTtcclxuICAgICAgICBmbG9hdCBqMCA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoaS53KSArIGkueikgKyBpLnkpICsgaS54KTtcclxuICAgICAgICB2ZWM0IGoxID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgaS53ICsgdmVjNChpMS53LCBpMi53LCBpMy53LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS56ICsgdmVjNChpMS56LCBpMi56LCBpMy56LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS55ICsgdmVjNChpMS55LCBpMi55LCBpMy55LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS54ICsgdmVjNChpMS54LCBpMi54LCBpMy54LCAxLjAgKSk7XHJcbiAgICBcclxuICAgICAgICAvLyBHcmFkaWVudHM6IDd4N3g2IHBvaW50cyBvdmVyIGEgY3ViZSwgbWFwcGVkIG9udG8gYSA0LWNyb3NzIHBvbHl0b3BlXHJcbiAgICAgICAgLy8gNyo3KjYgPSAyOTQsIHdoaWNoIGlzIGNsb3NlIHRvIHRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkuXHJcbiAgICAgICAgdmVjNCBpcCA9IHZlYzQoMS4wLzI5NC4wLCAxLjAvNDkuMCwgMS4wLzcuMCwgMC4wKSA7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IHAwID0gZ3JhZDQoajAsICAgaXApO1xyXG4gICAgICAgIHZlYzQgcDEgPSBncmFkNChqMS54LCBpcCk7XHJcbiAgICAgICAgdmVjNCBwMiA9IGdyYWQ0KGoxLnksIGlwKTtcclxuICAgICAgICB2ZWM0IHAzID0gZ3JhZDQoajEueiwgaXApO1xyXG4gICAgICAgIHZlYzQgcDQgPSBncmFkNChqMS53LCBpcCk7XHJcbiAgICBcclxuICAgICAgICAvLyBOb3JtYWxpc2UgZ3JhZGllbnRzXHJcbiAgICAgICAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChwMCxwMCksIGRvdChwMSxwMSksIGRvdChwMiwgcDIpLCBkb3QocDMscDMpKSk7XHJcbiAgICAgICAgcDAgKj0gbm9ybS54O1xyXG4gICAgICAgIHAxICo9IG5vcm0ueTtcclxuICAgICAgICBwMiAqPSBub3JtLno7XHJcbiAgICAgICAgcDMgKj0gbm9ybS53O1xyXG4gICAgICAgIHA0ICo9IHRheWxvckludlNxcnQoZG90KHA0LHA0KSk7XHJcbiAgICBcclxuICAgICAgICAvLyBNaXggY29udHJpYnV0aW9ucyBmcm9tIHRoZSBmaXZlIGNvcm5lcnNcclxuICAgICAgICB2ZWMzIG0wID0gbWF4KDAuNiAtIHZlYzMoZG90KHgwLHgwKSwgZG90KHgxLHgxKSwgZG90KHgyLHgyKSksIDAuMCk7XHJcbiAgICAgICAgdmVjMiBtMSA9IG1heCgwLjYgLSB2ZWMyKGRvdCh4Myx4MyksIGRvdCh4NCx4NCkgICAgICAgICAgICApLCAwLjApO1xyXG4gICAgICAgIG0wID0gbTAgKiBtMDtcclxuICAgICAgICBtMSA9IG0xICogbTE7XHJcbiAgICAgICAgcmV0dXJuIDQ5LjAgKiAoIGRvdChtMCptMCwgdmVjMyggZG90KCBwMCwgeDAgKSwgZG90KCBwMSwgeDEgKSwgZG90KCBwMiwgeDIgKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgKyBkb3QobTEqbTEsIHZlYzIoIGRvdCggcDMsIHgzICksIGRvdCggcDQsIHg0ICkgKSApICkgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHNub2lzZTMoIHZlYzMgeCApe1xyXG4gICAgICAgIGZsb2F0IHMgID0gc25vaXNlKHZlYzMoIHggKSk7XHJcbiAgICAgICAgZmxvYXQgczEgPSBzbm9pc2UodmVjMyggeC55IC0gMTkuMSAsIHgueiArIDMzLjQgLCB4LnggKyA0Ny4yICkpO1xyXG4gICAgICAgIGZsb2F0IHMyID0gc25vaXNlKHZlYzMoIHgueiArIDc0LjIgLCB4LnggLSAxMjQuNSAsIHgueSArIDk5LjQgKSk7XHJcbiAgICAgICAgdmVjMyBjID0gdmVjMyggcyAsIHMxICwgczIgKTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBzbm9pc2UzKCB2ZWM0IHggKXtcclxuICAgICAgICBmbG9hdCBzICA9IHNub2lzZSh2ZWM0KCB4ICkpO1xyXG4gICAgICAgIGZsb2F0IHMxID0gc25vaXNlKHZlYzQoIHgueSAtIDE5LjEgLCB4LnogKyAzMy40ICwgeC54ICsgNDcuMiwgeC53ICkpO1xyXG4gICAgICAgIGZsb2F0IHMyID0gc25vaXNlKHZlYzQoIHgueiArIDc0LjIgLCB4LnggLSAxMjQuNSAsIHgueSArIDk5LjQsIHgudyApKTtcclxuICAgICAgICB2ZWMzIGMgPSB2ZWMzKCBzICwgczEgLCBzMiApO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XHJcbiAgICAgICAgc3QgPSByYXRpbyhzdCwgdV9yZXNvbHV0aW9uKTtcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBmbG9hdCBncmlkID0gdV9yZXNvbHV0aW9uLngvNTAuO1xyXG4gICAgICAgIHZlYzIgc3RfaSA9IGZsb29yKHN0ICogZ3JpZCkvZ3JpZDtcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IG4gPSAwLjQgKyBzbm9pc2UodmVjMyhzdF9pLCB1X3RpbWUpKSAqIDAuODtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbG9yICs9IGhzdjJyZ2IodmVjMyhuICogLjQxLCAxLiwgMS4pKTtcclxuICAgIFxyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4wKTtcclxuICAgIH1cclxuICAgIGBcclxuICB9LFxyXG4gIHN1bjoge1xyXG4gICAgZnJhZ21lbnRTaGFkZXI6IGAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIFxyXG4gICAgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcclxuICAgIHVuaWZvcm0gdmVjMiB1X21vdXNlOyBcclxuICAgIHVuaWZvcm0gZmxvYXQgdV90aW1lO1xyXG4gICAgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1NUUk9LRVxyXG4gICAgI2RlZmluZSBGTkNfU1RST0tFXHJcbiAgICBcclxuICAgIGZsb2F0IHN0cm9rZShmbG9hdCB4LCBmbG9hdCBzLCBmbG9hdCB3KSB7XHJcbiAgICAgICAgZmxvYXQgZD0gc3RlcChzLCB4K3cqLjUpIC0gc3RlcChzLCB4LXcqLjUpO1xyXG4gICAgICAgIHJldHVybiBjbGFtcChkLCAwLiwgMS4pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5kaWZcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfQ0lSQ0xFU0RGXHJcbiAgICAjZGVmaW5lIEZOQ19DSVJDTEVTREZcclxuICAgIFxyXG4gICAgZmxvYXQgY2lyY2xlU0RGKHZlYzIgc3QpIHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBsZW5ndGgoc3QtLjUpKjIuO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICNlbmRpZlxyXG4gICAgI2lmZGVmIEdMX0VTXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19GSUxMXHJcbiAgICAjZGVmaW5lIEZOQ19GSUxMXHJcbiAgICBcclxuICAgIGZsb2F0IGZpbGwoZmxvYXQgeCwgZmxvYXQgc2l6ZSkge1xyXG4gICAgICAgIHJldHVybiAxLi1zdGVwKHNpemUsIHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5kaWZcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfVFJJU0RGXHJcbiAgICAjZGVmaW5lIEZOQ19UUklTREZcclxuICAgIFxyXG4gICAgZmxvYXQgdHJpU0RGKHZlYzIgc3QpIHtcclxuICAgIFxyXG4gICAgICAgIHN0ID0gKHN0KjIuLTEuKSoyLjtcclxuICAgICAgICByZXR1cm4gbWF4KGFicyhzdC54KSAqIDAuODY2MDI1ICtzdC55ICogMC41LCAtc3QueSAqIDAuNSk7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1JPVEFURVxyXG4gICAgI2RlZmluZSBGTkNfUk9UQVRFXHJcbiAgICBcclxuICAgIHZlYzIgcm90YXRlKHZlYzIgc3QsIGZsb2F0IGEpIHtcclxuICAgICAgICBzdCA9IG1hdDIoY29zKGEpLCAtc2luKGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbihhKSwgY29zKGEpKSooc3QtLjUpO1xyXG4gICAgICAgIHJldHVybiBzdCsuNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1BPTFlTREZcclxuICAgICNkZWZpbmUgRk5DX1BPTFlTREZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBQSVxyXG4gICAgI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIFRBVVxyXG4gICAgI2RlZmluZSBUQVUgNi4yODMxODUzMDcxNzk1ODY0NzY5MjUyODY3NjY1NTkwXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgZmxvYXQgcG9seVNERih2ZWMyIHN0LCBpbnQgVikge1xyXG4gICAgXHJcbiAgICAgICAgc3QgPSBzdCoyLi0xLjtcclxuICAgICAgICBmbG9hdCBhID0gYXRhbihzdC54LCBzdC55KStQSTtcclxuICAgICAgICBmbG9hdCByID0gbGVuZ3RoKHN0KTtcclxuICAgICAgICBmbG9hdCB2ID0gVEFVL2Zsb2F0KFYpO1xyXG4gICAgICAgIHJldHVybiBjb3MoZmxvb3IoLjUrYS92KSp2LWEpKnI7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1NUQVJTREZcclxuICAgICNkZWZpbmUgRk5DX1NUQVJTREZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBQSVxyXG4gICAgI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIFRBVVxyXG4gICAgI2RlZmluZSBUQVUgNi4yODMxODUzMDcxNzk1ODY0NzY5MjUyODY3NjY1NTkwXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgZmxvYXQgc3RhclNERih2ZWMyIHN0LCBpbnQgViwgZmxvYXQgcykge1xyXG4gICAgXHJcbiAgICAgICAgc3QgPSBzdCo0Li0yLjtcclxuICAgICAgICBmbG9hdCBhID0gYXRhbihzdC55LCBzdC54KS9UQVU7XHJcbiAgICAgICAgZmxvYXQgc2VnID0gYSAqIGZsb2F0KFYpO1xyXG4gICAgICAgIGEgPSAoKGZsb29yKHNlZykgKyAuNSkvZmxvYXQoVikgKyBcclxuICAgICAgICAgICAgbWl4KHMsIC1zLCBzdGVwKC41LCBmcmFjdChzZWcpKSkpXHJcbiAgICAgICAgICAgICogVEFVO1xyXG4gICAgICAgIHJldHVybiBhYnMoZG90KHZlYzIoY29zKGEpLCBzaW4oYSkpLCBcclxuICAgICAgICAgICAgc3QpKTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfUkFUSU9cclxuICAgICNkZWZpbmUgRk5DX1JBVElPXHJcbiAgICB2ZWMyIHJhdGlvKGluIHZlYzIgc3QsIGluIHZlYzIgcykge1xyXG4gICAgICAgIHJldHVybiBtaXgoIHZlYzIoKHN0Lngqcy54L3MueSktKHMueCouNS1zLnkqLjUpL3MueSxzdC55KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZWMyKHN0Lngsc3QueSoocy55L3MueCktKHMueSouNS1zLngqLjUpL3MueCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcChzLngscy55KSk7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgZmxvYXQgUVJUX1BJID0gUEkvNC47XHJcbiAgICAgICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XHJcbiAgICAgICAgc3QgPSByYXRpbyhzdCwgdV9yZXNvbHV0aW9uKTtcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBzdCA9IHN0KjEuNTtcclxuICAgICAgICBzdCA9IHN0LS4yNTtcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IGJnID0gc3RhclNERihzdCwgMTYsIC4xKTtcclxuICAgICAgICBjb2xvciArPSBmaWxsKGJnLCAxLjMpO1xyXG4gICAgICAgIGZsb2F0IGwgPSAwLjtcclxuICAgICAgICBmb3IgKGZsb2F0IGkgPSAwLjsgaSA8IDguOyBpKyspIHtcclxuICAgICAgICAgICAgdmVjMiB4eSA9IHJvdGF0ZShzdCwgUVJUX1BJKmkpO1xyXG4gICAgICAgICAgICB4eS55IC09IC4zO1xyXG4gICAgICAgICAgICBmbG9hdCB0cmkgPSBwb2x5U0RGKHh5LCAzKTtcclxuICAgICAgICAgICAgY29sb3IgKz0gZmlsbCh0cmksIC4zKTtcclxuICAgICAgICAgICAgbCArPSBzdHJva2UodHJpLCAuMywgLjAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sb3IgKj0gMS4tbDtcclxuICAgICAgICBmbG9hdCBjID0gcG9seVNERihzdCwgOCk7XHJcbiAgICAgICAgY29sb3IgLT0gc3Ryb2tlKGMsIC4xNSwgLjA0KTtcclxuICAgIFxyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4wKTtcclxuICAgIH1gXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcDU6IFJlY29yZDxzdHJpbmcsIFA1UHJvcHM+ID0ge1xyXG4gIHNlYToge1xyXG4gICAgc2V0dXA6IGZ1bmN0aW9uIHNldHVwIChwNSwgY2FudmFzUGFyZW50UmVmKSB7XHJcbiAgICAgIHA1LmNyZWF0ZUNhbnZhcyhjYW52YXNQYXJlbnRSZWYuY2xpZW50V2lkdGgsIDUwMCwgcDUuV0VCR0wpLnBhcmVudChjYW52YXNQYXJlbnRSZWYpO1xyXG4gICAgfSxcclxuICAgIHdpbmRvd1Jlc2l6ZWQ6IGZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZWQgKHA1KSB7XHJcbiAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNVtcImNhbnZhc1wiXS5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLCA1MDApO1xyXG4gICAgfSxcclxuICAgIGRyYXc6IGZ1bmN0aW9uIGRyYXcgKHA1KSB7XHJcbiAgICAgIHA1LmJhY2tncm91bmQoMTA1MCk7XHJcbiAgICAgIHA1LnN0cm9rZVdlaWdodCgzKTtcclxuXHJcbiAgICAgIHA1LnRyYW5zbGF0ZSg4MDAsIDIwMCwgLTkwKTtcclxuICAgICAgXHJcbiAgICAgIHA1LnJvdGF0ZVkoLTkwKTtcclxuICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgIHA1LnB1c2goKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE1OyBqKyspIHtcclxuICAgICAgICAgIGlmIChqIDwgaSkgY29udGludWU7XHJcbiAgICAgICAgICBwNS5wdXNoKCk7XHJcbiAgICAgICAgICBwNS50cmFuc2xhdGUoaSAqIDc1LCAwLCBqICogNzUpO1xyXG4gICAgICAgICAgcDUuYm94KDcwLCBNYXRoLnNpbihwNS5mcmFtZUNvdW50ICogMC4wMiArIGoqMC41ICsgaSowLjUpICAqIDYwICsgOTAsIDcwKTtcclxuICAgICAgICAgIHA1LnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwNS5wb3AoKTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhYm91dFBhZ2VDb250ZW50ID0ge1xyXG5cclxuICB0ZXh0OiA8PlxyXG4gICAgPHA+XHJcbiAgICAgIFRoaXMgc2l0ZSB3YXMgbWFkZSBieSBtZSwgPEFuY2hvciBocmVmPXtcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9mcmFuY2VzY28tYXJpbGxvdHRhLTEwNGFhODEyMi9cIn0+RnJhbmNlc2NvIEFyaWxsb3R0YS48L0FuY2hvcj4gVGhpbmsgb2YgaXQgYXMgYSBmdW4gd2Vla2VuZCBwcm9qZWN0IHRvIGtub3cgbWUgLSBhIHNvcnQgb2YgZXhwcmVzc2l2ZSBleHBlcmltZW50IHRocm91Z2ggdGhlIHdlaXJkIGNyYXAgSSBkby5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICBJIHVzZWQgYSBtaXggb2YgdGVjaG5vbG9naWVzIHRoYXQgSSBhbSB2ZXJ5IHBhc3Npb25hdGUgYWJvdXQuIEFtb25nIHRob3NlIHRlY2hub2xvZ2llcyBhcmU6IE5leHQuanMsIFJlYWN0LCBUeXBlc2NyaXB0LCBHTFNMLCBUaHJlZS5qcywgUDUuanMsIEZyYW1lci9tb3Rpb24uICBcclxuICAgIDwvcD4gXHJcbiAgICA8cD4gXHJcbiAgICAgIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgIDwvcD5cclxuICA8Lz5cclxuICBcclxufVxyXG5cclxuY29uc3Qgcm9sZXM6IFJvbGVzW10gPSBbXHJcbiAge1xyXG4gICAgY29tcGFueTogPEFuY2hvciBocmVmPXtcImh0dHBzOi8vd3d3LnluYXAuY29tL1wifT5Zb294IE5ldC1hLVBvcnRlcjwvQW5jaG9yPixcclxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BlclwiLFxyXG4gICAgbG9jYXRpb246IFwiQm9sb2duYSwgSXRhbHlcIixcclxuICAgIGRhdGU6IFwiTWF5IDIwMjEgLSBQcmVzZW50XCIsXHJcbiAgICBjaGlsZHJlbjogPGRpdj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcyxcclxuICAgICAgPC9wPiBcclxuICAgICAgPHA+IFxyXG4gICAgICAgIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+LCAgXHJcbiAgICBzaGFkZXI6IDxTaGFkZXIgc2hhZGVyPXtzaGFkZXJzLmZ1bGxzY3JlZW5GYm19Lz5cclxuICB9LCB7XHJcbiAgICBjb21wYW55OiA8QW5jaG9yIGhyZWY9e1wiaHR0cHM6Ly93d3cuc292cm4uY29tL1wifT5Tb3ZybjwvQW5jaG9yPixcclxuICAgIHRpdGxlOiBcIkZ1bGxzdGFjayBTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgbG9jYXRpb246IFwiTG9uZG9uLCBVbml0ZWQgS2luZ2RvbVwiLFxyXG4gICAgZGF0ZTogXCJKdWx5IDIwMjAgLSBBcHJpbCAyMDIxXCIsXHJcbiAgICBjaGlsZHJlbjogPD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcyxcclxuICAgICAgPC9wPiBcclxuICAgICAgPHA+IFxyXG4gICAgICAgIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgICAgPC9wPlxyXG4gICAgPC8+LCAgICBcclxuICAgIHNoYWRlcjogPFNoYWRlciBzaGFkZXI9e3NoYWRlcnMuc3VufS8+XHJcbiAgfSwge1xyXG4gICAgY29tcGFueTogPEFuY2hvciBocmVmPXtcImh0dHBzOi8vd3d3LnNvdnJuLmNvbS9cIn0+U292cm48L0FuY2hvcj4sXHJcbiAgICB0aXRsZTogXCJJbXBsZW1lbnRhdGlvbiBFbmdpbmVlciBJSSwgTWFya2V0IERldlwiLFxyXG4gICAgbG9jYXRpb246IFwiTG9uZG9uLCBVbml0ZWQgS2luZ2RvbVwiLFxyXG4gICAgZGF0ZTogXCJKYW51YXJ5IDIwMjAgLSBKdW5lIDIwMjBcIixcclxuICAgIGNoaWxkcmVuOiA8PlxyXG4gICAgICA8cD5cclxuICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLFxyXG4gICAgICA8L3A+IFxyXG4gICAgICA8cD4gXHJcbiAgICAgICAgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxyXG4gICAgICA8L3A+XHJcbiAgICA8Lz4sICAgIFxyXG4gICAgc2hhZGVyOiA8U2hhZGVyIHNoYWRlcj17c2hhZGVycy5kaXRoZXJUZXh0dXJlfS8+XHJcbiAgfSwge1xyXG4gICAgY29tcGFueTogPEFuY2hvciBocmVmPXtcImh0dHBzOi8vd3d3LnNvdnJuLmNvbS9cIn0+U292cm48L0FuY2hvcj4sXHJcbiAgICB0aXRsZTogXCJTb2x1dGlvbnMgRW5naW5lZXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkxvbmRvbiwgVW5pdGVkIEtpbmdkb21cIixcclxuICAgIGRhdGU6IFwiTWF5IDIwMTkgLSBEZWNlbWJlciAyMDE5XCIsXHJcbiAgICBjaGlsZHJlbjogPD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcyxcclxuICAgICAgPC9wPiBcclxuICAgICAgPHA+IFxyXG4gICAgICAgIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgICAgPC9wPlxyXG4gICAgPC8+LCAgICAgXHJcbiAgICBzaGFkZXI6IDxTaGFkZXIgc2hhZGVyPXtzaGFkZXJzLnNpbXBsZXhOb2lzZX0vPlxyXG4gIH0sIHtcclxuICAgIGNvbXBhbnk6IDxBbmNob3IgaHJlZj17XCJodHRwczovL3d3dy5zb3Zybi5jb20vXCJ9PlNvdnJuPC9BbmNob3I+LFxyXG4gICAgdGl0bGU6IFwiT3BlcmF0aW9ucyBTcGVjaWFsaXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJMb25kb24sIFVuaXRlZCBLaW5nZG9tXCIsXHJcbiAgICBkYXRlOiBcIkF1Z3VzdCAyMDE4IC0gTWF5IDIwMTlcIixcclxuICAgIGNoaWxkcmVuOiA8PlxyXG4gICAgICA8cD5cclxuICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLFxyXG4gICAgICA8L3A+IFxyXG4gICAgICA8cD4gXHJcbiAgICAgICAgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxyXG4gICAgICA8L3A+XHJcbiAgICA8Lz4sIFxyXG4gICAgc2hhZGVyOiA8U2hhZGVyIHNoYWRlcj17c2hhZGVycy5yYXltYXJjaGluZ30vPlxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHRlcm1zID0gW1wid3JpdGluZyBjb2RlXCIsIFwibGlzdGVuaW5nIHRvIG11c2ljXCIsIFwid2F0Y2hpbmcgYSBmaWxtXCIsIFwicG9zc2libHkgc2xlZXBpbmdcIl07XHJcblxyXG5jb25zdCBob21lcGFnZVRleHQgPSA8PkhpLCBJJ20gRnJhbi4gQXMgeW91IHJlYWQgdGhpcywgSSBhbSA8VGV4dENhcm91c2VsIHRlcm1zPXt0ZXJtc30gY29sb3I9e1wiaHNsKDIxMmRlZyA5MCUgNjQlKVwifS8+IGluIDxkZWw+TG9uZG9uPC9kZWw+IEJvbG9nbmEsIEl0YWx5LjwvPlxyXG5cclxuZXhwb3J0IHtzaGFkZXJzLCBwNSwgcm9sZXMsIHRlcm1zLCBob21lcGFnZVRleHQsIGFib3V0UGFnZUNvbnRlbnR9IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQge1NoYWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhZGVyL1NoYWRlclwiXG5pbXBvcnQge3NoYWRlcnMsIGhvbWVwYWdlVGV4dH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQge0hlYWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxuICAgICAgICAgIDxTaGFkZXIgc2hhZGVyPXtzaGFkZXJzLmZibX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8SGVhZGVyIHZhcmlhbnQ9e1wid2hpdGVcIn0vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGl9PlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cbiAgICAgICAgICAge2hvbWVwYWdlVGV4dH1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmxldCBjdXJzb3I7XHJcblxyXG5mdW5jdGlvbiBjdXJzb3JUcmFja2VyKCkge1xyXG5cclxuICAgIGN1cnNvciA9IGN1cnNvciB8fCB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIik7XHJcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2UuY2xpZW50WH1weCwgJHtlLmNsaWVudFl9cHgpYDtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VPdXRJbkV2ZW50TGlzdGVuZXIoZWwpIHtcclxuXHJcbiAgICBjdXJzb3IgPSBjdXJzb3IgfHwgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyc29yXCIpO1xyXG4gICAgY29uc3QgbW91c2VvdmVyRXZlbnQgPSBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTQwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItNDBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiODBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI4MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTIwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItMjBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtb3VzZW91dEV2ZW50ID0gZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTIwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItMjBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTsgXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dEV2ZW50KTtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXJFdmVudCk7XHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNoYWRlcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmcmFnbWVudFNoYWRlcjogc3RyaW5nLCB0ZXh0dXJlOiBzdHJpbmcgPSBcIlwiKSB7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7Y2FudmFzfSk7XHJcbiAgICByZW5kZXJlci5hdXRvQ2xlYXJDb2xvciA9IGZhbHNlO1xyXG4gICBcclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgIC0xLCAvLyBsZWZ0XHJcbiAgICAgICAxLCAvLyByaWdodFxyXG4gICAgICAgMSwgLy8gdG9wXHJcbiAgICAgIC0xLCAvLyBib3R0b21cclxuICAgICAgLTEsIC8vIG5lYXIsXHJcbiAgICAgICAxLCAvLyBmYXJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIGNvbnN0IHBsYW5lID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMiwgMik7XHJcbiAgICBsZXQgdGV4ID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGV4dHVyZSkge1xyXG4gICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgdGV4ID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgICAgIHVfdGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICB1X3Jlc29sdXRpb246ICB7IHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygpIH0sXHJcbiAgICAgIHVfdGV4dHVyZV8xOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogdGV4IH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICBmcmFnbWVudFNoYWRlcixcclxuICAgICAgdW5pZm9ybXMsXHJcbiAgICB9KTtcclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuTWVzaChwbGFuZSwgbWF0ZXJpYWwpKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZShyZW5kZXJlcikge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgbmVlZFJlc2l6ZSA9IGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0O1xyXG4gICAgICBpZiAobmVlZFJlc2l6ZSkge1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZWVkUmVzaXplO1xyXG4gICAgfTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgIHRpbWUgKj0gMC4wMDE7ICAvLyBjb252ZXJ0IHRvIHNlY29uZHNcclxuICBcclxuICAgICAgcmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKTtcclxuICBcclxuICAgICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuICAgICAgdW5pZm9ybXMudV9yZXNvbHV0aW9uLnZhbHVlLnNldChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIDEpO1xyXG4gICAgICB1bmlmb3Jtcy51X3RpbWUudmFsdWUgPSB0aW1lO1xyXG4gIFxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y3Vyc29yVHJhY2tlciwgbW91c2VPdXRJbkV2ZW50TGlzdGVuZXIsIHJlbmRlclNoYWRlcn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rXCI6IFwiSGVhZGVyTGlua19saW5rX18xNVhJelwiLFxuXHRcImxpbmtEaWFcIjogXCJIZWFkZXJMaW5rX2xpbmtEaWFfXzNlQk96XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJXcmFwcGVyXCI6IFwiSGVhZGVyX2hlYWRlcldyYXBwZXJfXzJtU2VVXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXJtV3JhcHBlclwiOiBcIlRleHRDYXJvdXNlbF90ZXJtV3JhcHBlcl9fQm1jQUhcIixcblx0XCJ0ZXJtXCI6IFwiVGV4dENhcm91c2VsX3Rlcm1fX3czV1hUXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiSG9tZV9iYWNrZ3JvdW5kX18tbEFLRlwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwic3BhY2VyXCI6IFwiSG9tZV9zcGFjZXJfXzJSQVotXCIsXG5cdFwiYXJ0aWNsZVwiOiBcIkhvbWVfYXJ0aWNsZV9fTzFTcnZcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aHJlZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==