(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Cursor/Cursor.tsx":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cursor": function() { return /* binding */ Cursor; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cursor_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cursor.module.css */ "./components/Cursor/Cursor.module.css");
/* harmony import */ var _Cursor_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cursor_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Cursor\\Cursor.tsx";


function Cursor() {
  //shamelessly inspired by the amazing https://reh.at/
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Cursor_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),
    id: "cursor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cursor/Cursor */ "./components/Cursor/Cursor.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils.ts");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const {
    router
  } = pageProps;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.cursorTracker)();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__.PageTransition, {
      timeout: 300,
      classNames: "page-transition",
      children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__.Cursor, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

MyApp.getInitialProps = async ({
  Component,
  router,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.router = router;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ "./components/Cursor/Cursor.module.css":
/*!*********************************************!*\
  !*** ./components/Cursor/Cursor.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "Cursor_wrapper__2AOjt"
};


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-page-transitions");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZVwiIl0sIm5hbWVzIjpbIkN1cnNvciIsInN0eWxlcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlRWZmZWN0IiwiY3Vyc29yVHJhY2tlciIsInJvdXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY3Vyc29yIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiY2xpZW50WSIsIm1vdXNlT3V0SW5FdmVudExpc3RlbmVyIiwiZWwiLCJtb3VzZW92ZXJFdmVudCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImNsaWNrRXZlbnQiLCJtb3VzZW91dEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlclNoYWRlciIsImNhbnZhcyIsImZyYWdtZW50U2hhZGVyIiwidGV4dHVyZSIsInJlbmRlcmVyIiwiVEhSRUUiLCJhdXRvQ2xlYXJDb2xvciIsImNhbWVyYSIsInNjZW5lIiwicGxhbmUiLCJ0ZXgiLCJ0ZXh0dXJlTG9hZGVyIiwibG9hZCIsInVuaWZvcm1zIiwidV90aW1lIiwidmFsdWUiLCJ1X3Jlc29sdXRpb24iLCJ1X3RleHR1cmVfMSIsInR5cGUiLCJtYXRlcmlhbCIsImFkZCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIm5lZWRSZXNpemUiLCJzZXRTaXplIiwicmVuZGVyIiwidGltZSIsInNldCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBRWQ7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsbUVBQWhCO0FBQWdDLE1BQUUsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFJSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTTtBQUFDQztBQUFELE1BQVdELFNBQWpCO0FBQ0FFLGtEQUFTLENBQUMsTUFBSTtBQUNaQyx5REFBYTtBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLGlFQUFEO0FBQWdCLGFBQU8sRUFBRSxHQUF6QjtBQUE4QixnQkFBVSxFQUFDLGlCQUF6QztBQUFBLDZCQUNFLHFEQUFDLFNBQUQsa0NBQWVILFNBQWY7QUFBMEIsV0FBRyxFQUFFQyxNQUFNLENBQUNHLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYs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ZnJvbSBcIi4vQ3Vyc29yLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEN1cnNvcigpIHtcclxuXHJcbiAgICAvL3NoYW1lbGVzc2x5IGluc3BpcmVkIGJ5IHRoZSBhbWF6aW5nIGh0dHBzOi8vcmVoLmF0L1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGlkPVwiY3Vyc29yXCIvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtDdXJzb3J9IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7Q3Vyc29yfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yXCI7XG5pbXBvcnQge2N1cnNvclRyYWNrZXJ9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB7cm91dGVyfSA9IHBhZ2VQcm9wcztcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY3Vyc29yVHJhY2tlcigpO1xuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgXG4gICAgICA8UGFnZVRyYW5zaXRpb24gdGltZW91dD17MzAwfSBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XG4gICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgPEN1cnNvci8+XG4gICAgPC8+XG4gIClcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSA9PiB7XG4gIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIH1cblxuICBwYWdlUHJvcHMucm91dGVyID0gcm91dGVyO1xuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmxldCBjdXJzb3I7XHJcblxyXG5mdW5jdGlvbiBjdXJzb3JUcmFja2VyKCkge1xyXG5cclxuICAgIGN1cnNvciA9IGN1cnNvciB8fCB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIik7XHJcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSk9PntcclxuICAgICAgICBcclxuICAgICAgICBjdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2UuY2xpZW50WH1weCwgJHtlLmNsaWVudFl9cHgpYDtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VPdXRJbkV2ZW50TGlzdGVuZXIoZWwpIHtcclxuXHJcbiAgICBjdXJzb3IgPSBjdXJzb3IgfHwgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyc29yXCIpO1xyXG4gICAgY29uc3QgbW91c2VvdmVyRXZlbnQgPSBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTQwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItNDBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiODBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI4MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTIwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItMjBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtb3VzZW91dEV2ZW50ID0gZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IFwiLTIwcHhcIjsgICAgICAgIFxyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0gXCItMjBweFwiOyAgICAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyAgXHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICB9KTsgXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZW91dEV2ZW50KTtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZW92ZXJFdmVudCk7XHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNoYWRlcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBmcmFnbWVudFNoYWRlcjogc3RyaW5nLCB0ZXh0dXJlOiBzdHJpbmcgPSBcIlwiKSB7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7Y2FudmFzfSk7XHJcbiAgICByZW5kZXJlci5hdXRvQ2xlYXJDb2xvciA9IGZhbHNlO1xyXG4gICBcclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgIC0xLCAvLyBsZWZ0XHJcbiAgICAgICAxLCAvLyByaWdodFxyXG4gICAgICAgMSwgLy8gdG9wXHJcbiAgICAgIC0xLCAvLyBib3R0b21cclxuICAgICAgLTEsIC8vIG5lYXIsXHJcbiAgICAgICAxLCAvLyBmYXJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIGNvbnN0IHBsYW5lID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMiwgMik7XHJcbiAgICBsZXQgdGV4ID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGV4dHVyZSkge1xyXG4gICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgdGV4ID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgICAgIHVfdGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICB1X3Jlc29sdXRpb246ICB7IHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygpIH0sXHJcbiAgICAgIHVfdGV4dHVyZV8xOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogdGV4IH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICBmcmFnbWVudFNoYWRlcixcclxuICAgICAgdW5pZm9ybXMsXHJcbiAgICB9KTtcclxuICAgIHNjZW5lLmFkZChuZXcgVEhSRUUuTWVzaChwbGFuZSwgbWF0ZXJpYWwpKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZShyZW5kZXJlcikge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgbmVlZFJlc2l6ZSA9IGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0O1xyXG4gICAgICBpZiAobmVlZFJlc2l6ZSkge1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZWVkUmVzaXplO1xyXG4gICAgfTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgIHRpbWUgKj0gMC4wMDE7ICAvLyBjb252ZXJ0IHRvIHNlY29uZHNcclxuICBcclxuICAgICAgcmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKTtcclxuICBcclxuICAgICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuICAgICAgdW5pZm9ybXMudV9yZXNvbHV0aW9uLnZhbHVlLnNldChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIDEpO1xyXG4gICAgICB1bmlmb3Jtcy51X3RpbWUudmFsdWUgPSB0aW1lO1xyXG4gIFxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y3Vyc29yVHJhY2tlciwgbW91c2VPdXRJbkV2ZW50TGlzdGVuZXIsIHJlbmRlclNoYWRlcn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiQ3Vyc29yX3dyYXBwZXJfXzJBT2p0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhyZWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=