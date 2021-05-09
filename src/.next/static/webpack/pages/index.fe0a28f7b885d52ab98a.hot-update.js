self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Shader/Shader.tsx":
/*!**************************************!*\
  !*** ./components/Shader/Shader.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shader": function() { return /* binding */ Shader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Shader\\Shader.tsx";

function Shader(_ref) {
  var fragCode = _ref.fragCode;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
    id: "glslCanvas",
    style: {
      width: "100%",
      height: "100%"
    },
    className: "glslCanvas",
    "data-fragment": fragCode,
    width: "500",
    height: "500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Shader;


var _c;

$RefreshReg$(_c, "Shader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shaders": function() { return /* binding */ shaders; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var shaders = {
  fbm: "#ifdef GL_ES\n    precision mediump float;\n    #endif\n    #ifndef FNC_MOD289\n    #define FNC_MOD289\n    float mod289(in float x) {\n      return x - floor(x * (1. / 289.)) * 289.;\n    }\n    \n    vec2 mod289(in vec2 x) {\n      return x - floor(x * (1. / 289.)) * 289.;\n    }\n    \n    vec3 mod289(in vec3 x) {\n      return x - floor(x * (1. / 289.)) * 289.;\n    }\n    \n    vec4 mod289(in vec4 x) {\n      return x - floor(x * (1. / 289.)) * 289.;\n    }\n    #endif\n    #ifndef FNC_PERMUTE\n    #define FNC_PERMUTE\n    float permute(in float x) {\n         return mod289(((x * 34.) + 1.)*x);\n    }\n    \n    vec3 permute(in vec3 x) {\n      return mod289(((x*34.0)+1.0)*x);\n    }\n    \n    vec4 permute(in vec4 x) {\n         return mod289(((x * 34.) + 1.)*x);\n    }\n    #endif\n    \n    #ifndef FNC_TAYLORINVSQRT\n    #define FNC_TAYLORINVSQRT\n    float taylorInvSqrt(in float r) {\n      return 1.79284291400159 - 0.85373472095314 * r;\n    }\n    \n    vec4 taylorInvSqrt(in vec4 r) {\n      return 1.79284291400159 - 0.85373472095314 * r;\n    }\n    #endif\n    #ifndef FNC_GRAD4\n    #define FNC_GRAD4\n    vec4 grad4(float j, vec4 ip) {\n        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n        vec4 p,s;\n    \n        p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n        s = vec4(lessThan(p, vec4(0.0)));\n        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n    \n        return p;\n    }\n    #endif\n    \n    \n    /*\n    author: [Ian McEwan, Ashima Arts]\n    description: Simplex Noise https://github.com/ashima/webgl-noise\n    use: snoise(<vec2|vec3|vec4> pos)\n    license: |\n      Copyright (C) 2011 Ashima Arts. All rights reserved.\n      Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)\n      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n      Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n      Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n      Neither the name of the GPUImage framework nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  \n    */\n    \n    #ifndef FNC_SNOISE\n    #define FNC_SNOISE\n    float snoise(in vec2 v) {\n        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                            -0.577350269189626,  // -1.0 + 2.0 * C.x\n                            0.024390243902439); // 1.0 / 41.0\n        // First corner\n        vec2 i  = floor(v + dot(v, C.yy) );\n        vec2 x0 = v -   i + dot(i, C.xx);\n    \n        // Other corners\n        vec2 i1;\n        //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n        //i1.y = 1.0 - i1.x;\n        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n        // x0 = x0 - 0.0 + 0.0 * C.xx ;\n        // x1 = x0 - i1 + 1.0 * C.xx ;\n        // x2 = x0 - 1.0 + 2.0 * C.xx ;\n        vec4 x12 = x0.xyxy + C.xxzz;\n        x12.xy -= i1;\n    \n        // Permutations\n        i = mod289(i); // Avoid truncation effects in permutation\n        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n        + i.x + vec3(0.0, i1.x, 1.0 ));\n    \n        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n        m = m*m ;\n        m = m*m ;\n    \n        // Gradients: 41 points uniformly over a line, mapped onto a diamond.\n        // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n    \n        vec3 x = 2.0 * fract(p * C.www) - 1.0;\n        vec3 h = abs(x) - 0.5;\n        vec3 ox = floor(x + 0.5);\n        vec3 a0 = x - ox;\n    \n        // Normalise gradients implicitly by scaling m\n        // Approximation of: m *= inversesqrt( a0*a0 + h*h );\n        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n    \n        // Compute final noise value at P\n        vec3 g;\n        g.x  = a0.x  * x0.x  + h.x  * x0.y;\n        g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n        return 130.0 * dot(m, g);\n    }\n    \n    \n    float snoise(in vec3 v) {\n        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n        // First corner\n        vec3 i  = floor(v + dot(v, C.yyy) );\n        vec3 x0 =   v - i + dot(i, C.xxx) ;\n    \n        // Other corners\n        vec3 g = step(x0.yzx, x0.xyz);\n        vec3 l = 1.0 - g;\n        vec3 i1 = min( g.xyz, l.zxy );\n        vec3 i2 = max( g.xyz, l.zxy );\n    \n        //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n        //   x1 = x0 - i1  + 1.0 * C.xxx;\n        //   x2 = x0 - i2  + 2.0 * C.xxx;\n        //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n        vec3 x1 = x0 - i1 + C.xxx;\n        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n    \n        // Permutations\n        i = mod289(i);\n        vec4 p = permute( permute( permute(\n                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n        // Gradients: 7x7 points over a square, mapped onto an octahedron.\n        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n        float n_ = 0.142857142857; // 1.0/7.0\n        vec3  ns = n_ * D.wyz - D.xzx;\n    \n        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n    \n        vec4 x_ = floor(j * ns.z);\n        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n    \n        vec4 x = x_ *ns.x + ns.yyyy;\n        vec4 y = y_ *ns.x + ns.yyyy;\n        vec4 h = 1.0 - abs(x) - abs(y);\n    \n        vec4 b0 = vec4( x.xy, y.xy );\n        vec4 b1 = vec4( x.zw, y.zw );\n    \n        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n        vec4 s0 = floor(b0)*2.0 + 1.0;\n        vec4 s1 = floor(b1)*2.0 + 1.0;\n        vec4 sh = -step(h, vec4(0.0));\n    \n        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n        vec3 p0 = vec3(a0.xy,h.x);\n        vec3 p1 = vec3(a0.zw,h.y);\n        vec3 p2 = vec3(a1.xy,h.z);\n        vec3 p3 = vec3(a1.zw,h.w);\n    \n        //Normalise gradients\n        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n        p0 *= norm.x;\n        p1 *= norm.y;\n        p2 *= norm.z;\n        p3 *= norm.w;\n    \n        // Mix final noise value\n        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n        m = m * m;\n        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                    dot(p2,x2), dot(p3,x3) ) );\n    }\n    \n    float snoise(in vec4 v) {\n        const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                            0.276393202250021,  // 2 * G4\n                            0.414589803375032,  // 3 * G4\n                            -0.447213595499958); // -1 + 4 * G4\n    \n        // First corner\n        vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); // (sqrt(5) - 1)/4\n        vec4 x0 = v -   i + dot(i, C.xxxx);\n    \n        // Other corners\n    \n        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n        vec4 i0;\n        vec3 isX = step( x0.yzw, x0.xxx );\n        vec3 isYZ = step( x0.zww, x0.yyz );\n        //  i0.x = dot( isX, vec3( 1.0 ) );\n        i0.x = isX.x + isX.y + isX.z;\n        i0.yzw = 1.0 - isX;\n        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n        i0.y += isYZ.x + isYZ.y;\n        i0.zw += 1.0 - isYZ.xy;\n        i0.z += isYZ.z;\n        i0.w += 1.0 - isYZ.z;\n    \n        // i0 now contains the unique values 0,1,2,3 in each channel\n        vec4 i3 = clamp( i0, 0.0, 1.0 );\n        vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n        vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n    \n        //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n        //  x1 = x0 - i1  + 1.0 * C.xxxx\n        //  x2 = x0 - i2  + 2.0 * C.xxxx\n        //  x3 = x0 - i3  + 3.0 * C.xxxx\n        //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n        vec4 x1 = x0 - i1 + C.xxxx;\n        vec4 x2 = x0 - i2 + C.yyyy;\n        vec4 x3 = x0 - i3 + C.zzzz;\n        vec4 x4 = x0 + C.wwww;\n    \n        // Permutations\n        i = mod289(i);\n        float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n        vec4 j1 = permute( permute( permute( permute (\n                    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n                + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n                + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n    \n        // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n    \n        vec4 p0 = grad4(j0,   ip);\n        vec4 p1 = grad4(j1.x, ip);\n        vec4 p2 = grad4(j1.y, ip);\n        vec4 p3 = grad4(j1.z, ip);\n        vec4 p4 = grad4(j1.w, ip);\n    \n        // Normalise gradients\n        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n        p0 *= norm.x;\n        p1 *= norm.y;\n        p2 *= norm.z;\n        p3 *= norm.w;\n        p4 *= taylorInvSqrt(dot(p4,p4));\n    \n        // Mix contributions from the five corners\n        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n        m0 = m0 * m0;\n        m1 = m1 * m1;\n        return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n    }\n    \n    vec3 snoise3( vec3 x ){\n        float s  = snoise(vec3( x ));\n        float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n        float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n        vec3 c = vec3( s , s1 , s2 );\n        return c;\n    }\n    \n    vec3 snoise3( vec4 x ){\n        float s  = snoise(vec4( x ));\n        float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));\n        float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));\n        vec3 c = vec3( s , s1 , s2 );\n        return c;\n    }\n    \n    #endif\n    \n    \n    uniform vec2 u_resolution;\n    uniform vec2 u_mouse; \n    uniform float u_time;\n    vec2 ratio(in vec2 st, in vec2 s) {\n        return mix( vec2((st.x*s.x/s.y)-(s.x*.5-s.y*.5)/s.y,st.y),\n                    vec2(st.x,st.y*(s.y/s.x)-(s.y*.5-s.x*.5)/s.x),\n                    step(s.x,s.y));\n    }\n    \n    #ifndef FBM_OCTAVES\n    #define FBM_OCTAVES 4\n    #endif\n    \n    #ifndef FBM_NOISE_FNC\n    #define FBM_NOISE_FNC(POS_UV) snoise(POS_UV)\n    #endif\n    \n    #ifndef FBM_VALUE_INITIAL\n    #define FBM_VALUE_INITIAL 0.0\n    #endif\n    \n    #ifndef FBM_SCALE_SCALAR\n    #define FBM_SCALE_SCALAR 2.0\n    #endif\n    \n    #ifndef FBM_AMPLITUD_INITIAL\n    #define FBM_AMPLITUD_INITIAL 0.5\n    #endif\n    \n    #ifndef FBM_AMPLITUD_SCALAR\n    #define FBM_AMPLITUD_SCALAR 0.5\n    #endif\n    \n    #ifndef FNC_FBM\n    #define FNC_FBM\n    float fbm(in vec2 st) {\n        // Initial values\n        float value = FBM_VALUE_INITIAL;\n        float amplitud = FBM_AMPLITUD_INITIAL;\n    \n        // Loop of octaves\n        for (int i = 0; i < FBM_OCTAVES; i++) {\n            value += amplitud * FBM_NOISE_FNC(st);\n            st *= FBM_SCALE_SCALAR;\n            amplitud *= FBM_AMPLITUD_SCALAR;\n        }\n        return value;\n    }\n    \n    float fbm(in vec3 pos) {\n        // Initial values\n        float value = FBM_VALUE_INITIAL;\n        float amplitud = FBM_AMPLITUD_INITIAL;\n    \n        // Loop of octaves\n        for (int i = 0; i < FBM_OCTAVES; i++) {\n            value += amplitud * FBM_NOISE_FNC(pos);\n            pos *= FBM_SCALE_SCALAR;\n            amplitud *= FBM_AMPLITUD_SCALAR;\n        }\n        return value;\n    }\n    #endif\n    \n    void main() {\n        vec2 st = gl_FragCoord.xy/u_resolution.xy;\n        vec2 ratiost = ratio(st, u_resolution);\n    \n    \n        float noise = fbm(vec3(ratiost, u_time/40.));\n        float noise2 = fbm(vec3(ratiost, noise));\n        float noise3 = fbm(vec3(ratiost, noise2));\n        // float noise4 = fbm(vec3(st, noise3)); \n    \n        vec3 color = vec3(0.);\n    \n        color = vec3(ratiost.x,ratiost.y, 1.);\n        color += noise3;\n    \n        color -= distance(vec2(st.y, st.x), vec2(0., st.x))*3.;\n    \n        gl_FragColor = vec4(color,1.);\n    }"
};


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/Homepage/Homepage.tsx":
/*!*************************************!*\
  !*** ./pages/Homepage/Homepage.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Shader/Shader */ "./components/Shader/Shader.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants.ts");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\pages\\Homepage\\Homepage.tsx";




function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__.Shader, {
      fragCode: _constants__WEBPACK_IMPORTED_MODULE_2__.shaders.fbm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFkZXIvU2hhZGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib21lcGFnZS9Ib21lcGFnZS50c3giXSwibmFtZXMiOlsiU2hhZGVyIiwiZnJhZ0NvZGUiLCJ3aWR0aCIsImhlaWdodCIsInNoYWRlcnMiLCJmYm0iLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxNQUFULE9BQTRCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBRTFCLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLFlBREw7QUFFRSxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFlBQU0sRUFBRTtBQUF4QixLQUZUO0FBR0UsYUFBUyxFQUFDLFlBSFo7QUFJRSxxQkFBZUYsUUFKakI7QUFLRSxTQUFLLEVBQUMsS0FMUjtBQU1FLFVBQU0sRUFBQztBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztLQWJRRCxNO0FBZVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsSUFBTUksT0FBTyxHQUFHO0FBQ1pDLEtBQUc7QUFEUyxDQUFoQjtBQStYQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9YQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0MsR0FBVCxHQUFlO0FBQ1gsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyw2REFBRDtBQUFRLGNBQVEsRUFBRUYsbURBQVdDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztLQVBRQyxHO0FBU1QsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmUwYTI4ZjdiODg1ZDUyYWI5OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gU2hhZGVyKHtmcmFnQ29kZX0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxjYW52YXMgXHJcbiAgICAgIGlkPVwiZ2xzbENhbnZhc1wiXHJcbiAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX1cclxuICAgICAgY2xhc3NOYW1lPVwiZ2xzbENhbnZhc1wiXHJcbiAgICAgIGRhdGEtZnJhZ21lbnQ9e2ZyYWdDb2RlfSBcclxuICAgICAgd2lkdGg9XCI1MDBcIiBcclxuICAgICAgaGVpZ2h0PVwiNTAwXCJcclxuICAgICAgLz5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQge1NoYWRlcn0iLCJjb25zdCBzaGFkZXJzID0ge1xyXG4gICAgZmJtOiBgI2lmZGVmIEdMX0VTXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgICNlbmRpZlxyXG4gICAgI2lmbmRlZiBGTkNfTU9EMjg5XHJcbiAgICAjZGVmaW5lIEZOQ19NT0QyODlcclxuICAgIGZsb2F0IG1vZDI4OShpbiBmbG9hdCB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzIgbW9kMjg5KGluIHZlYzIgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIG1vZDI4OShpbiB2ZWMzIHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjNCBtb2QyODkoaW4gdmVjNCB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX1BFUk1VVEVcclxuICAgICNkZWZpbmUgRk5DX1BFUk1VVEVcclxuICAgIGZsb2F0IHBlcm11dGUoaW4gZmxvYXQgeCkge1xyXG4gICAgICAgICByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LikgKyAxLikqeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgcGVybXV0ZShpbiB2ZWMzIHgpIHtcclxuICAgICAgcmV0dXJuIG1vZDI4OSgoKHgqMzQuMCkrMS4wKSp4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjNCBwZXJtdXRlKGluIHZlYzQgeCkge1xyXG4gICAgICAgICByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LikgKyAxLikqeCk7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfVEFZTE9SSU5WU1FSVFxyXG4gICAgI2RlZmluZSBGTkNfVEFZTE9SSU5WU1FSVFxyXG4gICAgZmxvYXQgdGF5bG9ySW52U3FydChpbiBmbG9hdCByKSB7XHJcbiAgICAgIHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgdGF5bG9ySW52U3FydChpbiB2ZWM0IHIpIHtcclxuICAgICAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgI2lmbmRlZiBGTkNfR1JBRDRcclxuICAgICNkZWZpbmUgRk5DX0dSQUQ0XHJcbiAgICB2ZWM0IGdyYWQ0KGZsb2F0IGosIHZlYzQgaXApIHtcclxuICAgICAgICBjb25zdCB2ZWM0IG9uZXMgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIC0xLjApO1xyXG4gICAgICAgIHZlYzQgcCxzO1xyXG4gICAgXHJcbiAgICAgICAgcC54eXogPSBmbG9vciggZnJhY3QgKHZlYzMoaikgKiBpcC54eXopICogNy4wKSAqIGlwLnogLSAxLjA7XHJcbiAgICAgICAgcC53ID0gMS41IC0gZG90KGFicyhwLnh5eiksIG9uZXMueHl6KTtcclxuICAgICAgICBzID0gdmVjNChsZXNzVGhhbihwLCB2ZWM0KDAuMCkpKTtcclxuICAgICAgICBwLnh5eiA9IHAueHl6ICsgKHMueHl6KjIuMCAtIDEuMCkgKiBzLnd3dztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIFxyXG4gICAgLypcclxuICAgIGF1dGhvcjogW0lhbiBNY0V3YW4sIEFzaGltYSBBcnRzXVxyXG4gICAgZGVzY3JpcHRpb246IFNpbXBsZXggTm9pc2UgaHR0cHM6Ly9naXRodWIuY29tL2FzaGltYS93ZWJnbC1ub2lzZVxyXG4gICAgdXNlOiBzbm9pc2UoPHZlYzJ8dmVjM3x2ZWM0PiBwb3MpXHJcbiAgICBsaWNlbnNlOiB8XHJcbiAgICAgIENvcHlyaWdodCAoQykgMjAxMSBBc2hpbWEgQXJ0cy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgQ29weXJpZ2h0IChDKSAyMDExLTIwMTYgYnkgU3RlZmFuIEd1c3RhdnNvbiAoQ2xhc3NpYyBub2lzZSBhbmQgb3RoZXJzKVxyXG4gICAgICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAgICAgIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICAgICAgUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gICAgICBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBHUFVJbWFnZSBmcmFtZXdvcmsgbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICAgICAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLiAgXHJcbiAgICAqL1xyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19TTk9JU0VcclxuICAgICNkZWZpbmUgRk5DX1NOT0lTRVxyXG4gICAgZmxvYXQgc25vaXNlKGluIHZlYzIgdikge1xyXG4gICAgICAgIGNvbnN0IHZlYzQgQyA9IHZlYzQoMC4yMTEzMjQ4NjU0MDUxODcsICAvLyAoMy4wLXNxcnQoMy4wKSkvNi4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjM2NjAyNTQwMzc4NDQzOSwgIC8vIDAuNSooc3FydCgzLjApLTEuMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3NzM1MDI2OTE4OTYyNiwgIC8vIC0xLjAgKyAyLjAgKiBDLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDI0MzkwMjQzOTAyNDM5KTsgLy8gMS4wIC8gNDEuMFxyXG4gICAgICAgIC8vIEZpcnN0IGNvcm5lclxyXG4gICAgICAgIHZlYzIgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXkpICk7XHJcbiAgICAgICAgdmVjMiB4MCA9IHYgLSAgIGkgKyBkb3QoaSwgQy54eCk7XHJcbiAgICBcclxuICAgICAgICAvLyBPdGhlciBjb3JuZXJzXHJcbiAgICAgICAgdmVjMiBpMTtcclxuICAgICAgICAvL2kxLnggPSBzdGVwKCB4MC55LCB4MC54ICk7IC8vIHgwLnggPiB4MC55ID8gMS4wIDogMC4wXHJcbiAgICAgICAgLy9pMS55ID0gMS4wIC0gaTEueDtcclxuICAgICAgICBpMSA9ICh4MC54ID4geDAueSkgPyB2ZWMyKDEuMCwgMC4wKSA6IHZlYzIoMC4wLCAxLjApO1xyXG4gICAgICAgIC8vIHgwID0geDAgLSAwLjAgKyAwLjAgKiBDLnh4IDtcclxuICAgICAgICAvLyB4MSA9IHgwIC0gaTEgKyAxLjAgKiBDLnh4IDtcclxuICAgICAgICAvLyB4MiA9IHgwIC0gMS4wICsgMi4wICogQy54eCA7XHJcbiAgICAgICAgdmVjNCB4MTIgPSB4MC54eXh5ICsgQy54eHp6O1xyXG4gICAgICAgIHgxMi54eSAtPSBpMTtcclxuICAgIFxyXG4gICAgICAgIC8vIFBlcm11dGF0aW9uc1xyXG4gICAgICAgIGkgPSBtb2QyODkoaSk7IC8vIEF2b2lkIHRydW5jYXRpb24gZWZmZWN0cyBpbiBwZXJtdXRhdGlvblxyXG4gICAgICAgIHZlYzMgcCA9IHBlcm11dGUoIHBlcm11dGUoIGkueSArIHZlYzMoMC4wLCBpMS55LCAxLjAgKSlcclxuICAgICAgICArIGkueCArIHZlYzMoMC4wLCBpMS54LCAxLjAgKSk7XHJcbiAgICBcclxuICAgICAgICB2ZWMzIG0gPSBtYXgoMC41IC0gdmVjMyhkb3QoeDAseDApLCBkb3QoeDEyLnh5LHgxMi54eSksIGRvdCh4MTIuencseDEyLnp3KSksIDAuMCk7XHJcbiAgICAgICAgbSA9IG0qbSA7XHJcbiAgICAgICAgbSA9IG0qbSA7XHJcbiAgICBcclxuICAgICAgICAvLyBHcmFkaWVudHM6IDQxIHBvaW50cyB1bmlmb3JtbHkgb3ZlciBhIGxpbmUsIG1hcHBlZCBvbnRvIGEgZGlhbW9uZC5cclxuICAgICAgICAvLyBUaGUgcmluZyBzaXplIDE3KjE3ID0gMjg5IGlzIGNsb3NlIHRvIGEgbXVsdGlwbGUgb2YgNDEgKDQxKjcgPSAyODcpXHJcbiAgICBcclxuICAgICAgICB2ZWMzIHggPSAyLjAgKiBmcmFjdChwICogQy53d3cpIC0gMS4wO1xyXG4gICAgICAgIHZlYzMgaCA9IGFicyh4KSAtIDAuNTtcclxuICAgICAgICB2ZWMzIG94ID0gZmxvb3IoeCArIDAuNSk7XHJcbiAgICAgICAgdmVjMyBhMCA9IHggLSBveDtcclxuICAgIFxyXG4gICAgICAgIC8vIE5vcm1hbGlzZSBncmFkaWVudHMgaW1wbGljaXRseSBieSBzY2FsaW5nIG1cclxuICAgICAgICAvLyBBcHByb3hpbWF0aW9uIG9mOiBtICo9IGludmVyc2VzcXJ0KCBhMCphMCArIGgqaCApO1xyXG4gICAgICAgIG0gKj0gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiAoIGEwKmEwICsgaCpoICk7XHJcbiAgICBcclxuICAgICAgICAvLyBDb21wdXRlIGZpbmFsIG5vaXNlIHZhbHVlIGF0IFBcclxuICAgICAgICB2ZWMzIGc7XHJcbiAgICAgICAgZy54ICA9IGEwLnggICogeDAueCAgKyBoLnggICogeDAueTtcclxuICAgICAgICBnLnl6ID0gYTAueXogKiB4MTIueHogKyBoLnl6ICogeDEyLnl3O1xyXG4gICAgICAgIHJldHVybiAxMzAuMCAqIGRvdChtLCBnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBmbG9hdCBzbm9pc2UoaW4gdmVjMyB2KSB7XHJcbiAgICAgICAgY29uc3QgdmVjMiAgQyA9IHZlYzIoMS4wLzYuMCwgMS4wLzMuMCkgO1xyXG4gICAgICAgIGNvbnN0IHZlYzQgIEQgPSB2ZWM0KDAuMCwgMC41LCAxLjAsIDIuMCk7XHJcbiAgICBcclxuICAgICAgICAvLyBGaXJzdCBjb3JuZXJcclxuICAgICAgICB2ZWMzIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5eSkgKTtcclxuICAgICAgICB2ZWMzIHgwID0gICB2IC0gaSArIGRvdChpLCBDLnh4eCkgO1xyXG4gICAgXHJcbiAgICAgICAgLy8gT3RoZXIgY29ybmVyc1xyXG4gICAgICAgIHZlYzMgZyA9IHN0ZXAoeDAueXp4LCB4MC54eXopO1xyXG4gICAgICAgIHZlYzMgbCA9IDEuMCAtIGc7XHJcbiAgICAgICAgdmVjMyBpMSA9IG1pbiggZy54eXosIGwuenh5ICk7XHJcbiAgICAgICAgdmVjMyBpMiA9IG1heCggZy54eXosIGwuenh5ICk7XHJcbiAgICBcclxuICAgICAgICAvLyAgIHgwID0geDAgLSAwLjAgKyAwLjAgKiBDLnh4eDtcclxuICAgICAgICAvLyAgIHgxID0geDAgLSBpMSAgKyAxLjAgKiBDLnh4eDtcclxuICAgICAgICAvLyAgIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eDtcclxuICAgICAgICAvLyAgIHgzID0geDAgLSAxLjAgKyAzLjAgKiBDLnh4eDtcclxuICAgICAgICB2ZWMzIHgxID0geDAgLSBpMSArIEMueHh4O1xyXG4gICAgICAgIHZlYzMgeDIgPSB4MCAtIGkyICsgQy55eXk7IC8vIDIuMCpDLnggPSAxLzMgPSBDLnlcclxuICAgICAgICB2ZWMzIHgzID0geDAgLSBELnl5eTsgICAgICAvLyAtMS4wKzMuMCpDLnggPSAtMC41ID0gLUQueVxyXG4gICAgXHJcbiAgICAgICAgLy8gUGVybXV0YXRpb25zXHJcbiAgICAgICAgaSA9IG1vZDI4OShpKTtcclxuICAgICAgICB2ZWM0IHAgPSBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIGkueiArIHZlYzQoMC4wLCBpMS56LCBpMi56LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS55ICsgdmVjNCgwLjAsIGkxLnksIGkyLnksIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnggKyB2ZWM0KDAuMCwgaTEueCwgaTIueCwgMS4wICkpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR3JhZGllbnRzOiA3eDcgcG9pbnRzIG92ZXIgYSBzcXVhcmUsIG1hcHBlZCBvbnRvIGFuIG9jdGFoZWRyb24uXHJcbiAgICAgICAgLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQ5ICg0OSo2ID0gMjk0KVxyXG4gICAgICAgIGZsb2F0IG5fID0gMC4xNDI4NTcxNDI4NTc7IC8vIDEuMC83LjBcclxuICAgICAgICB2ZWMzICBucyA9IG5fICogRC53eXogLSBELnh6eDtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgaiA9IHAgLSA0OS4wICogZmxvb3IocCAqIG5zLnogKiBucy56KTsgIC8vICBtb2QocCw3KjcpXHJcbiAgICBcclxuICAgICAgICB2ZWM0IHhfID0gZmxvb3IoaiAqIG5zLnopO1xyXG4gICAgICAgIHZlYzQgeV8gPSBmbG9vcihqIC0gNy4wICogeF8gKTsgICAgLy8gbW9kKGosTilcclxuICAgIFxyXG4gICAgICAgIHZlYzQgeCA9IHhfICpucy54ICsgbnMueXl5eTtcclxuICAgICAgICB2ZWM0IHkgPSB5XyAqbnMueCArIG5zLnl5eXk7XHJcbiAgICAgICAgdmVjNCBoID0gMS4wIC0gYWJzKHgpIC0gYWJzKHkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBiMCA9IHZlYzQoIHgueHksIHkueHkgKTtcclxuICAgICAgICB2ZWM0IGIxID0gdmVjNCggeC56dywgeS56dyApO1xyXG4gICAgXHJcbiAgICAgICAgLy92ZWM0IHMwID0gdmVjNChsZXNzVGhhbihiMCwwLjApKSoyLjAgLSAxLjA7XHJcbiAgICAgICAgLy92ZWM0IHMxID0gdmVjNChsZXNzVGhhbihiMSwwLjApKSoyLjAgLSAxLjA7XHJcbiAgICAgICAgdmVjNCBzMCA9IGZsb29yKGIwKSoyLjAgKyAxLjA7XHJcbiAgICAgICAgdmVjNCBzMSA9IGZsb29yKGIxKSoyLjAgKyAxLjA7XHJcbiAgICAgICAgdmVjNCBzaCA9IC1zdGVwKGgsIHZlYzQoMC4wKSk7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IGEwID0gYjAueHp5dyArIHMwLnh6eXcqc2gueHh5eSA7XHJcbiAgICAgICAgdmVjNCBhMSA9IGIxLnh6eXcgKyBzMS54enl3KnNoLnp6d3cgO1xyXG4gICAgXHJcbiAgICAgICAgdmVjMyBwMCA9IHZlYzMoYTAueHksaC54KTtcclxuICAgICAgICB2ZWMzIHAxID0gdmVjMyhhMC56dyxoLnkpO1xyXG4gICAgICAgIHZlYzMgcDIgPSB2ZWMzKGExLnh5LGgueik7XHJcbiAgICAgICAgdmVjMyBwMyA9IHZlYzMoYTEuencsaC53KTtcclxuICAgIFxyXG4gICAgICAgIC8vTm9ybWFsaXNlIGdyYWRpZW50c1xyXG4gICAgICAgIHZlYzQgbm9ybSA9IHRheWxvckludlNxcnQodmVjNChkb3QocDAscDApLCBkb3QocDEscDEpLCBkb3QocDIsIHAyKSwgZG90KHAzLHAzKSkpO1xyXG4gICAgICAgIHAwICo9IG5vcm0ueDtcclxuICAgICAgICBwMSAqPSBub3JtLnk7XHJcbiAgICAgICAgcDIgKj0gbm9ybS56O1xyXG4gICAgICAgIHAzICo9IG5vcm0udztcclxuICAgIFxyXG4gICAgICAgIC8vIE1peCBmaW5hbCBub2lzZSB2YWx1ZVxyXG4gICAgICAgIHZlYzQgbSA9IG1heCgwLjYgLSB2ZWM0KGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MiksIGRvdCh4Myx4MykpLCAwLjApO1xyXG4gICAgICAgIG0gPSBtICogbTtcclxuICAgICAgICByZXR1cm4gNDIuMCAqIGRvdCggbSptLCB2ZWM0KCBkb3QocDAseDApLCBkb3QocDEseDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3QocDIseDIpLCBkb3QocDMseDMpICkgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmxvYXQgc25vaXNlKGluIHZlYzQgdikge1xyXG4gICAgICAgIGNvbnN0IHZlYzQgIEMgPSB2ZWM0KCAwLjEzODE5NjYwMTEyNTAxMSwgIC8vICg1IC0gc3FydCg1KSkvMjAgIEc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI3NjM5MzIwMjI1MDAyMSwgIC8vIDIgKiBHNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC40MTQ1ODk4MDMzNzUwMzIsICAvLyAzICogRzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ0NzIxMzU5NTQ5OTk1OCk7IC8vIC0xICsgNCAqIEc0XHJcbiAgICBcclxuICAgICAgICAvLyBGaXJzdCBjb3JuZXJcclxuICAgICAgICB2ZWM0IGkgID0gZmxvb3IodiArIGRvdCh2LCB2ZWM0KC4zMDkwMTY5OTQzNzQ5NDc0NTEpKSApOyAvLyAoc3FydCg1KSAtIDEpLzRcclxuICAgICAgICB2ZWM0IHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4eHgpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gT3RoZXIgY29ybmVyc1xyXG4gICAgXHJcbiAgICAgICAgLy8gUmFuayBzb3J0aW5nIG9yaWdpbmFsbHkgY29udHJpYnV0ZWQgYnkgQmlsbCBMaWNlYS1LYW5lLCBBTUQgKGZvcm1lcmx5IEFUSSlcclxuICAgICAgICB2ZWM0IGkwO1xyXG4gICAgICAgIHZlYzMgaXNYID0gc3RlcCggeDAueXp3LCB4MC54eHggKTtcclxuICAgICAgICB2ZWMzIGlzWVogPSBzdGVwKCB4MC56d3csIHgwLnl5eiApO1xyXG4gICAgICAgIC8vICBpMC54ID0gZG90KCBpc1gsIHZlYzMoIDEuMCApICk7XHJcbiAgICAgICAgaTAueCA9IGlzWC54ICsgaXNYLnkgKyBpc1guejtcclxuICAgICAgICBpMC55encgPSAxLjAgLSBpc1g7XHJcbiAgICAgICAgLy8gIGkwLnkgKz0gZG90KCBpc1laLnh5LCB2ZWMyKCAxLjAgKSApO1xyXG4gICAgICAgIGkwLnkgKz0gaXNZWi54ICsgaXNZWi55O1xyXG4gICAgICAgIGkwLnp3ICs9IDEuMCAtIGlzWVoueHk7XHJcbiAgICAgICAgaTAueiArPSBpc1laLno7XHJcbiAgICAgICAgaTAudyArPSAxLjAgLSBpc1laLno7XHJcbiAgICBcclxuICAgICAgICAvLyBpMCBub3cgY29udGFpbnMgdGhlIHVuaXF1ZSB2YWx1ZXMgMCwxLDIsMyBpbiBlYWNoIGNoYW5uZWxcclxuICAgICAgICB2ZWM0IGkzID0gY2xhbXAoIGkwLCAwLjAsIDEuMCApO1xyXG4gICAgICAgIHZlYzQgaTIgPSBjbGFtcCggaTAtMS4wLCAwLjAsIDEuMCApO1xyXG4gICAgICAgIHZlYzQgaTEgPSBjbGFtcCggaTAtMi4wLCAwLjAsIDEuMCApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gIHgwID0geDAgLSAwLjAgKyAwLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDEgPSB4MCAtIGkxICArIDEuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4MiA9IHgwIC0gaTIgICsgMi4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHgzID0geDAgLSBpMyAgKyAzLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDQgPSB4MCAtIDEuMCArIDQuMCAqIEMueHh4eFxyXG4gICAgICAgIHZlYzQgeDEgPSB4MCAtIGkxICsgQy54eHh4O1xyXG4gICAgICAgIHZlYzQgeDIgPSB4MCAtIGkyICsgQy55eXl5O1xyXG4gICAgICAgIHZlYzQgeDMgPSB4MCAtIGkzICsgQy56enp6O1xyXG4gICAgICAgIHZlYzQgeDQgPSB4MCArIEMud3d3dztcclxuICAgIFxyXG4gICAgICAgIC8vIFBlcm11dGF0aW9uc1xyXG4gICAgICAgIGkgPSBtb2QyODkoaSk7XHJcbiAgICAgICAgZmxvYXQgajAgPSBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKGkudykgKyBpLnopICsgaS55KSArIGkueCk7XHJcbiAgICAgICAgdmVjNCBqMSA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUgKFxyXG4gICAgICAgICAgICAgICAgICAgIGkudyArIHZlYzQoaTEudywgaTIudywgaTMudywgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueiArIHZlYzQoaTEueiwgaTIueiwgaTMueiwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueSArIHZlYzQoaTEueSwgaTIueSwgaTMueSwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueCArIHZlYzQoaTEueCwgaTIueCwgaTMueCwgMS4wICkpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR3JhZGllbnRzOiA3eDd4NiBwb2ludHMgb3ZlciBhIGN1YmUsIG1hcHBlZCBvbnRvIGEgNC1jcm9zcyBwb2x5dG9wZVxyXG4gICAgICAgIC8vIDcqNyo2ID0gMjk0LCB3aGljaCBpcyBjbG9zZSB0byB0aGUgcmluZyBzaXplIDE3KjE3ID0gMjg5LlxyXG4gICAgICAgIHZlYzQgaXAgPSB2ZWM0KDEuMC8yOTQuMCwgMS4wLzQ5LjAsIDEuMC83LjAsIDAuMCkgO1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBwMCA9IGdyYWQ0KGowLCAgIGlwKTtcclxuICAgICAgICB2ZWM0IHAxID0gZ3JhZDQoajEueCwgaXApO1xyXG4gICAgICAgIHZlYzQgcDIgPSBncmFkNChqMS55LCBpcCk7XHJcbiAgICAgICAgdmVjNCBwMyA9IGdyYWQ0KGoxLnosIGlwKTtcclxuICAgICAgICB2ZWM0IHA0ID0gZ3JhZDQoajEudywgaXApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTm9ybWFsaXNlIGdyYWRpZW50c1xyXG4gICAgICAgIHZlYzQgbm9ybSA9IHRheWxvckludlNxcnQodmVjNChkb3QocDAscDApLCBkb3QocDEscDEpLCBkb3QocDIsIHAyKSwgZG90KHAzLHAzKSkpO1xyXG4gICAgICAgIHAwICo9IG5vcm0ueDtcclxuICAgICAgICBwMSAqPSBub3JtLnk7XHJcbiAgICAgICAgcDIgKj0gbm9ybS56O1xyXG4gICAgICAgIHAzICo9IG5vcm0udztcclxuICAgICAgICBwNCAqPSB0YXlsb3JJbnZTcXJ0KGRvdChwNCxwNCkpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTWl4IGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgZml2ZSBjb3JuZXJzXHJcbiAgICAgICAgdmVjMyBtMCA9IG1heCgwLjYgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MikpLCAwLjApO1xyXG4gICAgICAgIHZlYzIgbTEgPSBtYXgoMC42IC0gdmVjMihkb3QoeDMseDMpLCBkb3QoeDQseDQpICAgICAgICAgICAgKSwgMC4wKTtcclxuICAgICAgICBtMCA9IG0wICogbTA7XHJcbiAgICAgICAgbTEgPSBtMSAqIG0xO1xyXG4gICAgICAgIHJldHVybiA0OS4wICogKCBkb3QobTAqbTAsIHZlYzMoIGRvdCggcDAsIHgwICksIGRvdCggcDEsIHgxICksIGRvdCggcDIsIHgyICkpKVxyXG4gICAgICAgICAgICAgICAgICAgICsgZG90KG0xKm0xLCB2ZWMyKCBkb3QoIHAzLCB4MyApLCBkb3QoIHA0LCB4NCApICkgKSApIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBzbm9pc2UzKCB2ZWMzIHggKXtcclxuICAgICAgICBmbG9hdCBzICA9IHNub2lzZSh2ZWMzKCB4ICkpO1xyXG4gICAgICAgIGZsb2F0IHMxID0gc25vaXNlKHZlYzMoIHgueSAtIDE5LjEgLCB4LnogKyAzMy40ICwgeC54ICsgNDcuMiApKTtcclxuICAgICAgICBmbG9hdCBzMiA9IHNub2lzZSh2ZWMzKCB4LnogKyA3NC4yICwgeC54IC0gMTI0LjUgLCB4LnkgKyA5OS40ICkpO1xyXG4gICAgICAgIHZlYzMgYyA9IHZlYzMoIHMgLCBzMSAsIHMyICk7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgc25vaXNlMyggdmVjNCB4ICl7XHJcbiAgICAgICAgZmxvYXQgcyAgPSBzbm9pc2UodmVjNCggeCApKTtcclxuICAgICAgICBmbG9hdCBzMSA9IHNub2lzZSh2ZWM0KCB4LnkgLSAxOS4xICwgeC56ICsgMzMuNCAsIHgueCArIDQ3LjIsIHgudyApKTtcclxuICAgICAgICBmbG9hdCBzMiA9IHNub2lzZSh2ZWM0KCB4LnogKyA3NC4yICwgeC54IC0gMTI0LjUgLCB4LnkgKyA5OS40LCB4LncgKSk7XHJcbiAgICAgICAgdmVjMyBjID0gdmVjMyggcyAsIHMxICwgczIgKTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIFxyXG4gICAgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcclxuICAgIHVuaWZvcm0gdmVjMiB1X21vdXNlOyBcclxuICAgIHVuaWZvcm0gZmxvYXQgdV90aW1lO1xyXG4gICAgdmVjMiByYXRpbyhpbiB2ZWMyIHN0LCBpbiB2ZWMyIHMpIHtcclxuICAgICAgICByZXR1cm4gbWl4KCB2ZWMyKChzdC54KnMueC9zLnkpLShzLngqLjUtcy55Ki41KS9zLnksc3QueSksXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjMihzdC54LHN0LnkqKHMueS9zLngpLShzLnkqLjUtcy54Ki41KS9zLngpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAocy54LHMueSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9PQ1RBVkVTXHJcbiAgICAjZGVmaW5lIEZCTV9PQ1RBVkVTIDRcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9OT0lTRV9GTkNcclxuICAgICNkZWZpbmUgRkJNX05PSVNFX0ZOQyhQT1NfVVYpIHNub2lzZShQT1NfVVYpXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fVkFMVUVfSU5JVElBTFxyXG4gICAgI2RlZmluZSBGQk1fVkFMVUVfSU5JVElBTCAwLjBcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9TQ0FMRV9TQ0FMQVJcclxuICAgICNkZWZpbmUgRkJNX1NDQUxFX1NDQUxBUiAyLjBcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9BTVBMSVRVRF9JTklUSUFMXHJcbiAgICAjZGVmaW5lIEZCTV9BTVBMSVRVRF9JTklUSUFMIDAuNVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX0FNUExJVFVEX1NDQUxBUlxyXG4gICAgI2RlZmluZSBGQk1fQU1QTElUVURfU0NBTEFSIDAuNVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX0ZCTVxyXG4gICAgI2RlZmluZSBGTkNfRkJNXHJcbiAgICBmbG9hdCBmYm0oaW4gdmVjMiBzdCkge1xyXG4gICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgZmxvYXQgdmFsdWUgPSBGQk1fVkFMVUVfSU5JVElBTDtcclxuICAgICAgICBmbG9hdCBhbXBsaXR1ZCA9IEZCTV9BTVBMSVRVRF9JTklUSUFMO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTG9vcCBvZiBvY3RhdmVzXHJcbiAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBGQk1fT0NUQVZFUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGFtcGxpdHVkICogRkJNX05PSVNFX0ZOQyhzdCk7XHJcbiAgICAgICAgICAgIHN0ICo9IEZCTV9TQ0FMRV9TQ0FMQVI7XHJcbiAgICAgICAgICAgIGFtcGxpdHVkICo9IEZCTV9BTVBMSVRVRF9TQ0FMQVI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmxvYXQgZmJtKGluIHZlYzMgcG9zKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcclxuICAgICAgICBmbG9hdCB2YWx1ZSA9IEZCTV9WQUxVRV9JTklUSUFMO1xyXG4gICAgICAgIGZsb2F0IGFtcGxpdHVkID0gRkJNX0FNUExJVFVEX0lOSVRJQUw7XHJcbiAgICBcclxuICAgICAgICAvLyBMb29wIG9mIG9jdGF2ZXNcclxuICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IEZCTV9PQ1RBVkVTOyBpKyspIHtcclxuICAgICAgICAgICAgdmFsdWUgKz0gYW1wbGl0dWQgKiBGQk1fTk9JU0VfRk5DKHBvcyk7XHJcbiAgICAgICAgICAgIHBvcyAqPSBGQk1fU0NBTEVfU0NBTEFSO1xyXG4gICAgICAgICAgICBhbXBsaXR1ZCAqPSBGQk1fQU1QTElUVURfU0NBTEFSO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xyXG4gICAgICAgIHZlYzIgcmF0aW9zdCA9IHJhdGlvKHN0LCB1X3Jlc29sdXRpb24pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBmbG9hdCBub2lzZSA9IGZibSh2ZWMzKHJhdGlvc3QsIHVfdGltZS80MC4pKTtcclxuICAgICAgICBmbG9hdCBub2lzZTIgPSBmYm0odmVjMyhyYXRpb3N0LCBub2lzZSkpO1xyXG4gICAgICAgIGZsb2F0IG5vaXNlMyA9IGZibSh2ZWMzKHJhdGlvc3QsIG5vaXNlMikpO1xyXG4gICAgICAgIC8vIGZsb2F0IG5vaXNlNCA9IGZibSh2ZWMzKHN0LCBub2lzZTMpKTsgXHJcbiAgICBcclxuICAgICAgICB2ZWMzIGNvbG9yID0gdmVjMygwLik7XHJcbiAgICBcclxuICAgICAgICBjb2xvciA9IHZlYzMocmF0aW9zdC54LHJhdGlvc3QueSwgMS4pO1xyXG4gICAgICAgIGNvbG9yICs9IG5vaXNlMztcclxuICAgIFxyXG4gICAgICAgIGNvbG9yIC09IGRpc3RhbmNlKHZlYzIoc3QueSwgc3QueCksIHZlYzIoMC4sIHN0LngpKSozLjtcclxuICAgIFxyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4pO1xyXG4gICAgfWBcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2hhZGVyc30iLCJpbXBvcnQge1NoYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhZGVyL1NoYWRlclwiXHJcbmltcG9ydCB7c2hhZGVyc30gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BcHAubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCJcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxTaGFkZXIgZnJhZ0NvZGU9e3NoYWRlcnMuZmJtfS8+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9