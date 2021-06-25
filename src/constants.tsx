import {P5Props, Roles} from "./types";
import {Anchor} from "./components/Anchor/Anchor";
import {Shader} from "./components/Shader/Shader";
import {TextCarousel} from "./components/TextCarousel/TextCarousel";

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
    texture: "/anseladams.jpg"
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

const p5: Record<string, P5Props> = {
  sea: {
    setup: function setup (p5, canvasParentRef) {
      p5.createCanvas(canvasParentRef.clientWidth, 500, p5.WEBGL).parent(canvasParentRef);
    },
    windowResized: function windowResized (p5) {
      p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, 500);
    },
    draw: function draw (p5) {
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
          p5.box(70, Math.sin(p5.frameCount * 0.02 + j*0.5 + i*0.5)  * 60 + 90, 70);
          p5.pop();
        }
        p5.pop();
    
      }
    }
  }
}

const aboutPageContent = {

  text: <>
    <p>
      YEa i definitely need to write some shit in here, idk what tho
    </p>
    <p>
      did this shit update?
    </p> 
  </>
  
}

const roles: Roles[] = [
  {
    company: <Anchor href={"https://www.ynap.com/"}>Yoox Net-a-Porter</Anchor>,
    title: "Frontend Developer",
    location: "Bologna, Italy",
    date: "May 2021 - Present",
    children: <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </p> 
      <p> 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>,  
    shader: <Shader shader={shaders.raymarching}/>
  }, {
    company: <Anchor href={"https://www.sovrn.com/"}>Sovrn</Anchor>,
    title: "Full-stack Software Engineer",
    location: "London, United Kingdom",
    date: "July 2020 - April 2021",
    children: <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </p> 
      <p> 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>,    
    shader: <Shader shader={shaders.fullscreenFbm}/>
  }, {
    company: <Anchor href={"https://www.sovrn.com/"}>Sovrn</Anchor>,
    title: "Implementation Engineer II, Market Dev",
    location: "London, United Kingdom",
    date: "January 2020 - June 2020",
    children: <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </p> 
      <p> 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>,    
    shader: <Shader shader={shaders.sun}/>
  }, {
    company: <Anchor href={"https://www.sovrn.com/"}>Sovrn</Anchor>,
    title: "Solutions Engineer",
    location: "London, United Kingdom",
    date: "May 2019 - December 2019",
    children: <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </p> 
      <p> 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>,     
    shader: <Shader shader={shaders.ditherTexture}/>
  }, {
    company: <Anchor href={"https://www.sovrn.com/"}>Sovrn</Anchor>,
    title: "Operations Specialist",
    location: "London, United Kingdom",
    date: "August 2018 - May 2019",
    children: <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      </p> 
      <p> 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>, 
    shader: <Shader shader={shaders.simplexNoise}/>
  }
];

const terms = ["writing code", "listening to music", "watching a film", "possibly sleeping"];

const homepageText = <>Hi, I'm Fran. As you read this, I am <TextCarousel terms={terms} color={"hsl(212deg 90% 64%)"}/> in <del>London</del> Bologna, Italy.</>

export {shaders, p5, roles, terms, homepageText, aboutPageContent}