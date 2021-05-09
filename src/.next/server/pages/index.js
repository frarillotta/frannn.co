(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Button\\Button.tsx";


function Button({
  text,
  link
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: link,
    className: `${(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().link)} ${(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().linkDia)}`,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}



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
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Header\\Header.tsx";



function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerWrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        text: "Hello I am a button",
        link: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        text: "What I do",
        link: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}



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

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\components\\Shader\\Shader.tsx";

function Shader({
  fragCode
}) {
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



/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shaders": function() { return /* binding */ shaders; }
/* harmony export */ });
const shaders = {
  fbm: `#ifdef GL_ES
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
        vec2 ratiost = ratio(st, u_resolution);
    
    
        float noise = fbm(vec3(ratiost, u_time/40.));
        float noise2 = fbm(vec3(ratiost, noise));
        float noise3 = fbm(vec3(ratiost, noise2));
        // float noise4 = fbm(vec3(st, noise3)); 
    
        vec3 color = vec3(0.);
    
        color = vec3(ratiost.x,ratiost.y, 1.);
        color += noise3;
    
        color -= distance(vec2(st.y, st.x), vec2(0., st.x))*3.;
    
        gl_FragColor = vec4(color,1.);
    }`
};


/***/ }),

/***/ "./pages/Homepage/Homepage.tsx":
/*!*************************************!*\
  !*** ./pages/Homepage/Homepage.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Shader/Shader */ "./components/Shader/Shader.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants.ts");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/App.module.css */ "./styles/App.module.css");
/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.tsx");

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\pages\\Homepage\\Homepage.tsx";





function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_4___default().background),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shader_Shader__WEBPACK_IMPORTED_MODULE_1__.Shader, {
        fragCode: _constants__WEBPACK_IMPORTED_MODULE_2__.shaders.fbm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Homepage_Homepage_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage/Homepage.tsx */ "./pages/Homepage/Homepage.tsx");

var _jsxFileName = "C:\\Users\\frari\\Desktop\\dev\\personal-site\\src\\pages\\index.js";



function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        type: "text/javascript",
        src: "https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Homepage_Homepage_tsx__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Button/Button.module.css":
/*!*********************************************!*\
  !*** ./components/Button/Button.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"link": "Button_link__1D65U",
	"linkDia": "Button_linkDia__2eD-f"
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

/***/ "./styles/App.module.css":
/*!*******************************!*\
  !*** ./styles/App.module.css ***!
  \*******************************/
/***/ (function(module) {

// Exports
module.exports = {
	"background": "App_background__1087Y"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFkZXIvU2hhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZXBhZ2UvSG9tZXBhZ2UudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9BcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRleHQiLCJsaW5rIiwic3R5bGVzIiwiSGVhZGVyIiwiU2hhZGVyIiwiZnJhZ0NvZGUiLCJ3aWR0aCIsImhlaWdodCIsInNoYWRlcnMiLCJmYm0iLCJBcHAiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQWhCLEVBQThCO0FBRTFCLHNCQUFPO0FBQUcsUUFBSSxFQUFFQSxJQUFUO0FBQWUsYUFBUyxFQUFHLEdBQUVDLGdFQUFZLElBQUdBLG1FQUFlLEVBQTNEO0FBQUEsY0FBK0RGO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBOztBQUVBLFNBQVNHLE1BQVQsR0FBa0I7QUFFZCxzQkFFSTtBQUFJLGFBQVMsRUFBRUQseUVBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQVEsWUFBSSxFQUFFLHFCQUFkO0FBQXFDLFlBQUksRUFBRTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFRLFlBQUksRUFBRSxXQUFkO0FBQTJCLFlBQUksRUFBRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBV0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxTQUFTRSxNQUFULENBQWdCO0FBQUNDO0FBQUQsQ0FBaEIsRUFBNEI7QUFFMUIsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUUsTUFBUjtBQUFnQkMsWUFBTSxFQUFFO0FBQXhCLEtBRlQ7QUFHRSxhQUFTLEVBQUMsWUFIWjtBQUlFLHFCQUFlRixRQUpqQjtBQUtFLFNBQUssRUFBQyxLQUxSO0FBTUUsVUFBTSxFQUFDO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsTUFBTUcsT0FBTyxHQUFHO0FBQ1pDLEtBQUcsRUFBRztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNYZ0IsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxHQUFULEdBQWU7QUFDWCxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFUiwwRUFBaEI7QUFBQSw2QkFDSSw4REFBQyw2REFBRDtBQUFRLGdCQUFRLEVBQUVNLG1EQUFXQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUksOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0FBRUQsK0RBQWVDLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVULDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQVEsWUFBSSxFQUFDLGlCQUFiO0FBQStCLFdBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCxDOzs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oe3RleHQsIGxpbmt9KSB7XHJcbiAgICBcclxuICAgIHJldHVybiA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSAke3N0eWxlcy5saW5rRGlhfWB9Pnt0ZXh0fTwvYT5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7QnV0dG9ufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIkhlbGxvIEkgYW0gYSBidXR0b25cIn0gbGluaz17XCIjXCJ9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiV2hhdCBJIGRvXCJ9IGxpbms9e1wiI1wifT48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQge0hlYWRlcn0iLCJcclxuXHJcbmZ1bmN0aW9uIFNoYWRlcih7ZnJhZ0NvZGV9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Y2FudmFzIFxyXG4gICAgICBpZD1cImdsc2xDYW52YXNcIlxyXG4gICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19XHJcbiAgICAgIGNsYXNzTmFtZT1cImdsc2xDYW52YXNcIlxyXG4gICAgICBkYXRhLWZyYWdtZW50PXtmcmFnQ29kZX0gXHJcbiAgICAgIHdpZHRoPVwiNTAwXCIgXHJcbiAgICAgIGhlaWdodD1cIjUwMFwiXHJcbiAgICAgIC8+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtTaGFkZXJ9IiwiY29uc3Qgc2hhZGVycyA9IHtcclxuICAgIGZibTogYCNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX01PRDI4OVxyXG4gICAgI2RlZmluZSBGTkNfTU9EMjg5XHJcbiAgICBmbG9hdCBtb2QyODkoaW4gZmxvYXQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMyIG1vZDI4OShpbiB2ZWMyIHgpIHtcclxuICAgICAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuIC8gMjg5LikpICogMjg5LjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVjMyBtb2QyODkoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLiAvIDI4OS4pKSAqIDI4OS47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgbW9kMjg5KGluIHZlYzQgeCkge1xyXG4gICAgICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4gLyAyODkuKSkgKiAyODkuO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICAjaWZuZGVmIEZOQ19QRVJNVVRFXHJcbiAgICAjZGVmaW5lIEZOQ19QRVJNVVRFXHJcbiAgICBmbG9hdCBwZXJtdXRlKGluIGZsb2F0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHBlcm11dGUoaW4gdmVjMyB4KSB7XHJcbiAgICAgIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzQgcGVybXV0ZShpbiB2ZWM0IHgpIHtcclxuICAgICAgICAgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4pICsgMS4pKngpO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRk5DX1RBWUxPUklOVlNRUlRcclxuICAgICNkZWZpbmUgRk5DX1RBWUxPUklOVlNRUlRcclxuICAgIGZsb2F0IHRheWxvckludlNxcnQoaW4gZmxvYXQgcikge1xyXG4gICAgICByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWM0IHRheWxvckludlNxcnQoaW4gdmVjNCByKSB7XHJcbiAgICAgIHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7XHJcbiAgICB9XHJcbiAgICAjZW5kaWZcclxuICAgICNpZm5kZWYgRk5DX0dSQUQ0XHJcbiAgICAjZGVmaW5lIEZOQ19HUkFENFxyXG4gICAgdmVjNCBncmFkNChmbG9hdCBqLCB2ZWM0IGlwKSB7XHJcbiAgICAgICAgY29uc3QgdmVjNCBvbmVzID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAtMS4wKTtcclxuICAgICAgICB2ZWM0IHAscztcclxuICAgIFxyXG4gICAgICAgIHAueHl6ID0gZmxvb3IoIGZyYWN0ICh2ZWMzKGopICogaXAueHl6KSAqIDcuMCkgKiBpcC56IC0gMS4wO1xyXG4gICAgICAgIHAudyA9IDEuNSAtIGRvdChhYnMocC54eXopLCBvbmVzLnh5eik7XHJcbiAgICAgICAgcyA9IHZlYzQobGVzc1RoYW4ocCwgdmVjNCgwLjApKSk7XHJcbiAgICAgICAgcC54eXogPSBwLnh5eiArIChzLnh5eioyLjAgLSAxLjApICogcy53d3c7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBhdXRob3I6IFtJYW4gTWNFd2FuLCBBc2hpbWEgQXJ0c11cclxuICAgIGRlc2NyaXB0aW9uOiBTaW1wbGV4IE5vaXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2hpbWEvd2ViZ2wtbm9pc2VcclxuICAgIHVzZTogc25vaXNlKDx2ZWMyfHZlYzN8dmVjND4gcG9zKVxyXG4gICAgbGljZW5zZTogfFxyXG4gICAgICBDb3B5cmlnaHQgKEMpIDIwMTEgQXNoaW1hIEFydHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgIENvcHlyaWdodCAoQykgMjAxMS0yMDE2IGJ5IFN0ZWZhbiBHdXN0YXZzb24gKENsYXNzaWMgbm9pc2UgYW5kIG90aGVycylcclxuICAgICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAgICAgIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICAgICAgTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgR1BVSW1hZ2UgZnJhbWV3b3JrIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAgICAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gIFxyXG4gICAgKi9cclxuICAgIFxyXG4gICAgI2lmbmRlZiBGTkNfU05PSVNFXHJcbiAgICAjZGVmaW5lIEZOQ19TTk9JU0VcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWMyIHYpIHtcclxuICAgICAgICBjb25zdCB2ZWM0IEMgPSB2ZWM0KDAuMjExMzI0ODY1NDA1MTg3LCAgLy8gKDMuMC1zcXJ0KDMuMCkpLzYuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4zNjYwMjU0MDM3ODQ0MzksICAvLyAwLjUqKHNxcnQoMy4wKS0xLjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC41NzczNTAyNjkxODk2MjYsICAvLyAtMS4wICsgMi4wICogQy54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAyNDM5MDI0MzkwMjQzOSk7IC8vIDEuMCAvIDQxLjBcclxuICAgICAgICAvLyBGaXJzdCBjb3JuZXJcclxuICAgICAgICB2ZWMyIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5KSApO1xyXG4gICAgICAgIHZlYzIgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHgpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gT3RoZXIgY29ybmVyc1xyXG4gICAgICAgIHZlYzIgaTE7XHJcbiAgICAgICAgLy9pMS54ID0gc3RlcCggeDAueSwgeDAueCApOyAvLyB4MC54ID4geDAueSA/IDEuMCA6IDAuMFxyXG4gICAgICAgIC8vaTEueSA9IDEuMCAtIGkxLng7XHJcbiAgICAgICAgaTEgPSAoeDAueCA+IHgwLnkpID8gdmVjMigxLjAsIDAuMCkgOiB2ZWMyKDAuMCwgMS4wKTtcclxuICAgICAgICAvLyB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eCA7XHJcbiAgICAgICAgLy8geDEgPSB4MCAtIGkxICsgMS4wICogQy54eCA7XHJcbiAgICAgICAgLy8geDIgPSB4MCAtIDEuMCArIDIuMCAqIEMueHggO1xyXG4gICAgICAgIHZlYzQgeDEyID0geDAueHl4eSArIEMueHh6ejtcclxuICAgICAgICB4MTIueHkgLT0gaTE7XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpOyAvLyBBdm9pZCB0cnVuY2F0aW9uIGVmZmVjdHMgaW4gcGVybXV0YXRpb25cclxuICAgICAgICB2ZWMzIHAgPSBwZXJtdXRlKCBwZXJtdXRlKCBpLnkgKyB2ZWMzKDAuMCwgaTEueSwgMS4wICkpXHJcbiAgICAgICAgKyBpLnggKyB2ZWMzKDAuMCwgaTEueCwgMS4wICkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjMyBtID0gbWF4KDAuNSAtIHZlYzMoZG90KHgwLHgwKSwgZG90KHgxMi54eSx4MTIueHkpLCBkb3QoeDEyLnp3LHgxMi56dykpLCAwLjApO1xyXG4gICAgICAgIG0gPSBtKm0gO1xyXG4gICAgICAgIG0gPSBtKm0gO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR3JhZGllbnRzOiA0MSBwb2ludHMgdW5pZm9ybWx5IG92ZXIgYSBsaW5lLCBtYXBwZWQgb250byBhIGRpYW1vbmQuXHJcbiAgICAgICAgLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQxICg0MSo3ID0gMjg3KVxyXG4gICAgXHJcbiAgICAgICAgdmVjMyB4ID0gMi4wICogZnJhY3QocCAqIEMud3d3KSAtIDEuMDtcclxuICAgICAgICB2ZWMzIGggPSBhYnMoeCkgLSAwLjU7XHJcbiAgICAgICAgdmVjMyBveCA9IGZsb29yKHggKyAwLjUpO1xyXG4gICAgICAgIHZlYzMgYTAgPSB4IC0gb3g7XHJcbiAgICBcclxuICAgICAgICAvLyBOb3JtYWxpc2UgZ3JhZGllbnRzIGltcGxpY2l0bHkgYnkgc2NhbGluZyBtXHJcbiAgICAgICAgLy8gQXBwcm94aW1hdGlvbiBvZjogbSAqPSBpbnZlcnNlc3FydCggYTAqYTAgKyBoKmggKTtcclxuICAgICAgICBtICo9IDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogKCBhMCphMCArIGgqaCApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ29tcHV0ZSBmaW5hbCBub2lzZSB2YWx1ZSBhdCBQXHJcbiAgICAgICAgdmVjMyBnO1xyXG4gICAgICAgIGcueCAgPSBhMC54ICAqIHgwLnggICsgaC54ICAqIHgwLnk7XHJcbiAgICAgICAgZy55eiA9IGEwLnl6ICogeDEyLnh6ICsgaC55eiAqIHgxMi55dztcclxuICAgICAgICByZXR1cm4gMTMwLjAgKiBkb3QobSwgZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZmxvYXQgc25vaXNlKGluIHZlYzMgdikge1xyXG4gICAgICAgIGNvbnN0IHZlYzIgIEMgPSB2ZWMyKDEuMC82LjAsIDEuMC8zLjApIDtcclxuICAgICAgICBjb25zdCB2ZWM0ICBEID0gdmVjNCgwLjAsIDAuNSwgMS4wLCAyLjApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjMyBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eXkpICk7XHJcbiAgICAgICAgdmVjMyB4MCA9ICAgdiAtIGkgKyBkb3QoaSwgQy54eHgpIDtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgICAgICB2ZWMzIGcgPSBzdGVwKHgwLnl6eCwgeDAueHl6KTtcclxuICAgICAgICB2ZWMzIGwgPSAxLjAgLSBnO1xyXG4gICAgICAgIHZlYzMgaTEgPSBtaW4oIGcueHl6LCBsLnp4eSApO1xyXG4gICAgICAgIHZlYzMgaTIgPSBtYXgoIGcueHl6LCBsLnp4eSApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MiA9IHgwIC0gaTIgICsgMi4wICogQy54eHg7XHJcbiAgICAgICAgLy8gICB4MyA9IHgwIC0gMS4wICsgMy4wICogQy54eHg7XHJcbiAgICAgICAgdmVjMyB4MSA9IHgwIC0gaTEgKyBDLnh4eDtcclxuICAgICAgICB2ZWMzIHgyID0geDAgLSBpMiArIEMueXl5OyAvLyAyLjAqQy54ID0gMS8zID0gQy55XHJcbiAgICAgICAgdmVjMyB4MyA9IHgwIC0gRC55eXk7ICAgICAgLy8gLTEuMCszLjAqQy54ID0gLTAuNSA9IC1ELnlcclxuICAgIFxyXG4gICAgICAgIC8vIFBlcm11dGF0aW9uc1xyXG4gICAgICAgIGkgPSBtb2QyODkoaSk7XHJcbiAgICAgICAgdmVjNCBwID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShcclxuICAgICAgICAgICAgICAgICAgICBpLnogKyB2ZWM0KDAuMCwgaTEueiwgaTIueiwgMS4wICkpXHJcbiAgICAgICAgICAgICAgICArIGkueSArIHZlYzQoMC4wLCBpMS55LCBpMi55LCAxLjAgKSlcclxuICAgICAgICAgICAgICAgICsgaS54ICsgdmVjNCgwLjAsIGkxLngsIGkyLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogN3g3IHBvaW50cyBvdmVyIGEgc3F1YXJlLCBtYXBwZWQgb250byBhbiBvY3RhaGVkcm9uLlxyXG4gICAgICAgIC8vIFRoZSByaW5nIHNpemUgMTcqMTcgPSAyODkgaXMgY2xvc2UgdG8gYSBtdWx0aXBsZSBvZiA0OSAoNDkqNiA9IDI5NClcclxuICAgICAgICBmbG9hdCBuXyA9IDAuMTQyODU3MTQyODU3OyAvLyAxLjAvNy4wXHJcbiAgICAgICAgdmVjMyAgbnMgPSBuXyAqIEQud3l6IC0gRC54eng7XHJcbiAgICBcclxuICAgICAgICB2ZWM0IGogPSBwIC0gNDkuMCAqIGZsb29yKHAgKiBucy56ICogbnMueik7ICAvLyAgbW9kKHAsNyo3KVxyXG4gICAgXHJcbiAgICAgICAgdmVjNCB4XyA9IGZsb29yKGogKiBucy56KTtcclxuICAgICAgICB2ZWM0IHlfID0gZmxvb3IoaiAtIDcuMCAqIHhfICk7ICAgIC8vIG1vZChqLE4pXHJcbiAgICBcclxuICAgICAgICB2ZWM0IHggPSB4XyAqbnMueCArIG5zLnl5eXk7XHJcbiAgICAgICAgdmVjNCB5ID0geV8gKm5zLnggKyBucy55eXl5O1xyXG4gICAgICAgIHZlYzQgaCA9IDEuMCAtIGFicyh4KSAtIGFicyh5KTtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgYjAgPSB2ZWM0KCB4Lnh5LCB5Lnh5ICk7XHJcbiAgICAgICAgdmVjNCBiMSA9IHZlYzQoIHguencsIHkuencgKTtcclxuICAgIFxyXG4gICAgICAgIC8vdmVjNCBzMCA9IHZlYzQobGVzc1RoYW4oYjAsMC4wKSkqMi4wIC0gMS4wO1xyXG4gICAgICAgIC8vdmVjNCBzMSA9IHZlYzQobGVzc1RoYW4oYjEsMC4wKSkqMi4wIC0gMS4wO1xyXG4gICAgICAgIHZlYzQgczAgPSBmbG9vcihiMCkqMi4wICsgMS4wO1xyXG4gICAgICAgIHZlYzQgczEgPSBmbG9vcihiMSkqMi4wICsgMS4wO1xyXG4gICAgICAgIHZlYzQgc2ggPSAtc3RlcChoLCB2ZWM0KDAuMCkpO1xyXG4gICAgXHJcbiAgICAgICAgdmVjNCBhMCA9IGIwLnh6eXcgKyBzMC54enl3KnNoLnh4eXkgO1xyXG4gICAgICAgIHZlYzQgYTEgPSBiMS54enl3ICsgczEueHp5dypzaC56end3IDtcclxuICAgIFxyXG4gICAgICAgIHZlYzMgcDAgPSB2ZWMzKGEwLnh5LGgueCk7XHJcbiAgICAgICAgdmVjMyBwMSA9IHZlYzMoYTAuencsaC55KTtcclxuICAgICAgICB2ZWMzIHAyID0gdmVjMyhhMS54eSxoLnopO1xyXG4gICAgICAgIHZlYzMgcDMgPSB2ZWMzKGExLnp3LGgudyk7XHJcbiAgICBcclxuICAgICAgICAvL05vcm1hbGlzZSBncmFkaWVudHNcclxuICAgICAgICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcclxuICAgICAgICBwMCAqPSBub3JtLng7XHJcbiAgICAgICAgcDEgKj0gbm9ybS55O1xyXG4gICAgICAgIHAyICo9IG5vcm0uejtcclxuICAgICAgICBwMyAqPSBub3JtLnc7XHJcbiAgICBcclxuICAgICAgICAvLyBNaXggZmluYWwgbm9pc2UgdmFsdWVcclxuICAgICAgICB2ZWM0IG0gPSBtYXgoMC42IC0gdmVjNChkb3QoeDAseDApLCBkb3QoeDEseDEpLCBkb3QoeDIseDIpLCBkb3QoeDMseDMpKSwgMC4wKTtcclxuICAgICAgICBtID0gbSAqIG07XHJcbiAgICAgICAgcmV0dXJuIDQyLjAgKiBkb3QoIG0qbSwgdmVjNCggZG90KHAwLHgwKSwgZG90KHAxLHgxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90KHAyLHgyKSwgZG90KHAzLHgzKSApICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZsb2F0IHNub2lzZShpbiB2ZWM0IHYpIHtcclxuICAgICAgICBjb25zdCB2ZWM0ICBDID0gdmVjNCggMC4xMzgxOTY2MDExMjUwMTEsICAvLyAoNSAtIHNxcnQoNSkpLzIwICBHNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNzYzOTMyMDIyNTAwMjEsICAvLyAyICogRzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNDE0NTg5ODAzMzc1MDMyLCAgLy8gMyAqIEc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMC40NDcyMTM1OTU0OTk5NTgpOyAvLyAtMSArIDQgKiBHNFxyXG4gICAgXHJcbiAgICAgICAgLy8gRmlyc3QgY29ybmVyXHJcbiAgICAgICAgdmVjNCBpICA9IGZsb29yKHYgKyBkb3QodiwgdmVjNCguMzA5MDE2OTk0Mzc0OTQ3NDUxKSkgKTsgLy8gKHNxcnQoNSkgLSAxKS80XHJcbiAgICAgICAgdmVjNCB4MCA9IHYgLSAgIGkgKyBkb3QoaSwgQy54eHh4KTtcclxuICAgIFxyXG4gICAgICAgIC8vIE90aGVyIGNvcm5lcnNcclxuICAgIFxyXG4gICAgICAgIC8vIFJhbmsgc29ydGluZyBvcmlnaW5hbGx5IGNvbnRyaWJ1dGVkIGJ5IEJpbGwgTGljZWEtS2FuZSwgQU1EIChmb3JtZXJseSBBVEkpXHJcbiAgICAgICAgdmVjNCBpMDtcclxuICAgICAgICB2ZWMzIGlzWCA9IHN0ZXAoIHgwLnl6dywgeDAueHh4ICk7XHJcbiAgICAgICAgdmVjMyBpc1laID0gc3RlcCggeDAuend3LCB4MC55eXogKTtcclxuICAgICAgICAvLyAgaTAueCA9IGRvdCggaXNYLCB2ZWMzKCAxLjAgKSApO1xyXG4gICAgICAgIGkwLnggPSBpc1gueCArIGlzWC55ICsgaXNYLno7XHJcbiAgICAgICAgaTAueXp3ID0gMS4wIC0gaXNYO1xyXG4gICAgICAgIC8vICBpMC55ICs9IGRvdCggaXNZWi54eSwgdmVjMiggMS4wICkgKTtcclxuICAgICAgICBpMC55ICs9IGlzWVoueCArIGlzWVoueTtcclxuICAgICAgICBpMC56dyArPSAxLjAgLSBpc1laLnh5O1xyXG4gICAgICAgIGkwLnogKz0gaXNZWi56O1xyXG4gICAgICAgIGkwLncgKz0gMS4wIC0gaXNZWi56O1xyXG4gICAgXHJcbiAgICAgICAgLy8gaTAgbm93IGNvbnRhaW5zIHRoZSB1bmlxdWUgdmFsdWVzIDAsMSwyLDMgaW4gZWFjaCBjaGFubmVsXHJcbiAgICAgICAgdmVjNCBpMyA9IGNsYW1wKCBpMCwgMC4wLCAxLjAgKTtcclxuICAgICAgICB2ZWM0IGkyID0gY2xhbXAoIGkwLTEuMCwgMC4wLCAxLjAgKTtcclxuICAgICAgICB2ZWM0IGkxID0gY2xhbXAoIGkwLTIuMCwgMC4wLCAxLjAgKTtcclxuICAgIFxyXG4gICAgICAgIC8vICB4MCA9IHgwIC0gMC4wICsgMC4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHgxID0geDAgLSBpMSAgKyAxLjAgKiBDLnh4eHhcclxuICAgICAgICAvLyAgeDIgPSB4MCAtIGkyICArIDIuMCAqIEMueHh4eFxyXG4gICAgICAgIC8vICB4MyA9IHgwIC0gaTMgICsgMy4wICogQy54eHh4XHJcbiAgICAgICAgLy8gIHg0ID0geDAgLSAxLjAgKyA0LjAgKiBDLnh4eHhcclxuICAgICAgICB2ZWM0IHgxID0geDAgLSBpMSArIEMueHh4eDtcclxuICAgICAgICB2ZWM0IHgyID0geDAgLSBpMiArIEMueXl5eTtcclxuICAgICAgICB2ZWM0IHgzID0geDAgLSBpMyArIEMuenp6ejtcclxuICAgICAgICB2ZWM0IHg0ID0geDAgKyBDLnd3d3c7XHJcbiAgICBcclxuICAgICAgICAvLyBQZXJtdXRhdGlvbnNcclxuICAgICAgICBpID0gbW9kMjg5KGkpO1xyXG4gICAgICAgIGZsb2F0IGowID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShpLncpICsgaS56KSArIGkueSkgKyBpLngpO1xyXG4gICAgICAgIHZlYzQgajEgPSBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlIChcclxuICAgICAgICAgICAgICAgICAgICBpLncgKyB2ZWM0KGkxLncsIGkyLncsIGkzLncsIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnogKyB2ZWM0KGkxLnosIGkyLnosIGkzLnosIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnkgKyB2ZWM0KGkxLnksIGkyLnksIGkzLnksIDEuMCApKVxyXG4gICAgICAgICAgICAgICAgKyBpLnggKyB2ZWM0KGkxLngsIGkyLngsIGkzLngsIDEuMCApKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEdyYWRpZW50czogN3g3eDYgcG9pbnRzIG92ZXIgYSBjdWJlLCBtYXBwZWQgb250byBhIDQtY3Jvc3MgcG9seXRvcGVcclxuICAgICAgICAvLyA3KjcqNiA9IDI5NCwgd2hpY2ggaXMgY2xvc2UgdG8gdGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OS5cclxuICAgICAgICB2ZWM0IGlwID0gdmVjNCgxLjAvMjk0LjAsIDEuMC80OS4wLCAxLjAvNy4wLCAwLjApIDtcclxuICAgIFxyXG4gICAgICAgIHZlYzQgcDAgPSBncmFkNChqMCwgICBpcCk7XHJcbiAgICAgICAgdmVjNCBwMSA9IGdyYWQ0KGoxLngsIGlwKTtcclxuICAgICAgICB2ZWM0IHAyID0gZ3JhZDQoajEueSwgaXApO1xyXG4gICAgICAgIHZlYzQgcDMgPSBncmFkNChqMS56LCBpcCk7XHJcbiAgICAgICAgdmVjNCBwNCA9IGdyYWQ0KGoxLncsIGlwKTtcclxuICAgIFxyXG4gICAgICAgIC8vIE5vcm1hbGlzZSBncmFkaWVudHNcclxuICAgICAgICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcclxuICAgICAgICBwMCAqPSBub3JtLng7XHJcbiAgICAgICAgcDEgKj0gbm9ybS55O1xyXG4gICAgICAgIHAyICo9IG5vcm0uejtcclxuICAgICAgICBwMyAqPSBub3JtLnc7XHJcbiAgICAgICAgcDQgKj0gdGF5bG9ySW52U3FydChkb3QocDQscDQpKTtcclxuICAgIFxyXG4gICAgICAgIC8vIE1peCBjb250cmlidXRpb25zIGZyb20gdGhlIGZpdmUgY29ybmVyc1xyXG4gICAgICAgIHZlYzMgbTAgPSBtYXgoMC42IC0gdmVjMyhkb3QoeDAseDApLCBkb3QoeDEseDEpLCBkb3QoeDIseDIpKSwgMC4wKTtcclxuICAgICAgICB2ZWMyIG0xID0gbWF4KDAuNiAtIHZlYzIoZG90KHgzLHgzKSwgZG90KHg0LHg0KSAgICAgICAgICAgICksIDAuMCk7XHJcbiAgICAgICAgbTAgPSBtMCAqIG0wO1xyXG4gICAgICAgIG0xID0gbTEgKiBtMTtcclxuICAgICAgICByZXR1cm4gNDkuMCAqICggZG90KG0wKm0wLCB2ZWMzKCBkb3QoIHAwLCB4MCApLCBkb3QoIHAxLCB4MSApLCBkb3QoIHAyLCB4MiApKSlcclxuICAgICAgICAgICAgICAgICAgICArIGRvdChtMSptMSwgdmVjMiggZG90KCBwMywgeDMgKSwgZG90KCBwNCwgeDQgKSApICkgKSA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZlYzMgc25vaXNlMyggdmVjMyB4ICl7XHJcbiAgICAgICAgZmxvYXQgcyAgPSBzbm9pc2UodmVjMyggeCApKTtcclxuICAgICAgICBmbG9hdCBzMSA9IHNub2lzZSh2ZWMzKCB4LnkgLSAxOS4xICwgeC56ICsgMzMuNCAsIHgueCArIDQ3LjIgKSk7XHJcbiAgICAgICAgZmxvYXQgczIgPSBzbm9pc2UodmVjMyggeC56ICsgNzQuMiAsIHgueCAtIDEyNC41ICwgeC55ICsgOTkuNCApKTtcclxuICAgICAgICB2ZWMzIGMgPSB2ZWMzKCBzICwgczEgLCBzMiApO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2ZWMzIHNub2lzZTMoIHZlYzQgeCApe1xyXG4gICAgICAgIGZsb2F0IHMgID0gc25vaXNlKHZlYzQoIHggKSk7XHJcbiAgICAgICAgZmxvYXQgczEgPSBzbm9pc2UodmVjNCggeC55IC0gMTkuMSAsIHgueiArIDMzLjQgLCB4LnggKyA0Ny4yLCB4LncgKSk7XHJcbiAgICAgICAgZmxvYXQgczIgPSBzbm9pc2UodmVjNCggeC56ICsgNzQuMiAsIHgueCAtIDEyNC41ICwgeC55ICsgOTkuNCwgeC53ICkpO1xyXG4gICAgICAgIHZlYzMgYyA9IHZlYzMoIHMgLCBzMSAsIHMyICk7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICBcclxuICAgIHVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XHJcbiAgICB1bmlmb3JtIHZlYzIgdV9tb3VzZTsgXHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfdGltZTtcclxuICAgIHZlYzIgcmF0aW8oaW4gdmVjMiBzdCwgaW4gdmVjMiBzKSB7XHJcbiAgICAgICAgcmV0dXJuIG1peCggdmVjMigoc3QueCpzLngvcy55KS0ocy54Ki41LXMueSouNSkvcy55LHN0LnkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlYzIoc3QueCxzdC55KihzLnkvcy54KS0ocy55Ki41LXMueCouNSkvcy54KSxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwKHMueCxzLnkpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fT0NUQVZFU1xyXG4gICAgI2RlZmluZSBGQk1fT0NUQVZFUyA0XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fTk9JU0VfRk5DXHJcbiAgICAjZGVmaW5lIEZCTV9OT0lTRV9GTkMoUE9TX1VWKSBzbm9pc2UoUE9TX1VWKVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgICNpZm5kZWYgRkJNX1ZBTFVFX0lOSVRJQUxcclxuICAgICNkZWZpbmUgRkJNX1ZBTFVFX0lOSVRJQUwgMC4wXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fU0NBTEVfU0NBTEFSXHJcbiAgICAjZGVmaW5lIEZCTV9TQ0FMRV9TQ0FMQVIgMi4wXHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2lmbmRlZiBGQk1fQU1QTElUVURfSU5JVElBTFxyXG4gICAgI2RlZmluZSBGQk1fQU1QTElUVURfSU5JVElBTCAwLjVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZCTV9BTVBMSVRVRF9TQ0FMQVJcclxuICAgICNkZWZpbmUgRkJNX0FNUExJVFVEX1NDQUxBUiAwLjVcclxuICAgICNlbmRpZlxyXG4gICAgXHJcbiAgICAjaWZuZGVmIEZOQ19GQk1cclxuICAgICNkZWZpbmUgRk5DX0ZCTVxyXG4gICAgZmxvYXQgZmJtKGluIHZlYzIgc3QpIHtcclxuICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xyXG4gICAgICAgIGZsb2F0IHZhbHVlID0gRkJNX1ZBTFVFX0lOSVRJQUw7XHJcbiAgICAgICAgZmxvYXQgYW1wbGl0dWQgPSBGQk1fQU1QTElUVURfSU5JVElBTDtcclxuICAgIFxyXG4gICAgICAgIC8vIExvb3Agb2Ygb2N0YXZlc1xyXG4gICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgRkJNX09DVEFWRVM7IGkrKykge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSBhbXBsaXR1ZCAqIEZCTV9OT0lTRV9GTkMoc3QpO1xyXG4gICAgICAgICAgICBzdCAqPSBGQk1fU0NBTEVfU0NBTEFSO1xyXG4gICAgICAgICAgICBhbXBsaXR1ZCAqPSBGQk1fQU1QTElUVURfU0NBTEFSO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZsb2F0IGZibShpbiB2ZWMzIHBvcykge1xyXG4gICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgZmxvYXQgdmFsdWUgPSBGQk1fVkFMVUVfSU5JVElBTDtcclxuICAgICAgICBmbG9hdCBhbXBsaXR1ZCA9IEZCTV9BTVBMSVRVRF9JTklUSUFMO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTG9vcCBvZiBvY3RhdmVzXHJcbiAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBGQk1fT0NUQVZFUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGFtcGxpdHVkICogRkJNX05PSVNFX0ZOQyhwb3MpO1xyXG4gICAgICAgICAgICBwb3MgKj0gRkJNX1NDQUxFX1NDQUxBUjtcclxuICAgICAgICAgICAgYW1wbGl0dWQgKj0gRkJNX0FNUExJVFVEX1NDQUxBUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgI2VuZGlmXHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcclxuICAgICAgICB2ZWMyIHJhdGlvc3QgPSByYXRpbyhzdCwgdV9yZXNvbHV0aW9uKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgZmxvYXQgbm9pc2UgPSBmYm0odmVjMyhyYXRpb3N0LCB1X3RpbWUvNDAuKSk7XHJcbiAgICAgICAgZmxvYXQgbm9pc2UyID0gZmJtKHZlYzMocmF0aW9zdCwgbm9pc2UpKTtcclxuICAgICAgICBmbG9hdCBub2lzZTMgPSBmYm0odmVjMyhyYXRpb3N0LCBub2lzZTIpKTtcclxuICAgICAgICAvLyBmbG9hdCBub2lzZTQgPSBmYm0odmVjMyhzdCwgbm9pc2UzKSk7IFxyXG4gICAgXHJcbiAgICAgICAgdmVjMyBjb2xvciA9IHZlYzMoMC4pO1xyXG4gICAgXHJcbiAgICAgICAgY29sb3IgPSB2ZWMzKHJhdGlvc3QueCxyYXRpb3N0LnksIDEuKTtcclxuICAgICAgICBjb2xvciArPSBub2lzZTM7XHJcbiAgICBcclxuICAgICAgICBjb2xvciAtPSBkaXN0YW5jZSh2ZWMyKHN0LnksIHN0LngpLCB2ZWMyKDAuLCBzdC54KSkqMy47XHJcbiAgICBcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLDEuKTtcclxuICAgIH1gXHJcbn1cclxuXHJcblxyXG5leHBvcnQge3NoYWRlcnN9IiwiaW1wb3J0IHtTaGFkZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NoYWRlci9TaGFkZXJcIlxyXG5pbXBvcnQge3NoYWRlcnN9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQXBwLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgPFNoYWRlciBmcmFnQ29kZT17c2hhZGVycy5mYm19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vSG9tZXBhZ2UvSG9tZXBhZ2UudHN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cHM6Ly9yYXdnaXQuY29tL3BhdHJpY2lvZ29uemFsZXp2aXZvL2dsc2xDYW52YXMvbWFzdGVyL2Rpc3QvR2xzbENhbnZhcy5qc1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhvbWVwYWdlLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua1wiOiBcIkJ1dHRvbl9saW5rX18xRDY1VVwiLFxuXHRcImxpbmtEaWFcIjogXCJCdXR0b25fbGlua0RpYV9fMmVELWZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlcldyYXBwZXJcIjogXCJIZWFkZXJfaGVhZGVyV3JhcHBlcl9fMm1TZVVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhY2tncm91bmRcIjogXCJBcHBfYmFja2dyb3VuZF9fMTA4N1lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=