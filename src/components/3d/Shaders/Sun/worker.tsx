import React from 'react'
import { render } from '@react-three/offscreen'
import { ShaderBase } from '../ShaderBase'

const fragmentShader = /*glsl*/`
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;

    #ifdef GL_ES
    precision highp float;
    #endif

    #ifndef FNC_STROKE
    #define FNC_STROKE

    float stroke(float x, float s, float w) {
        float d= step(s, x+w*.5) - step(s, x-w*.5);
        return clamp(d, 0., 1.);
    }

    #endif
    #ifdef GL_ES
    precision highp float;
    #endif

    #ifndef FNC_FILL
    #define FNC_FILL

    float fill(float x, float size) {
        return 1.-step(size, x);
    }

    #endif
    #ifdef GL_ES
    precision highp float;
    #endif

    #ifndef FNC_TRISDF
    #define FNC_TRISDF

    float triSDF(vec2 st) {

        st = (st*2.-1.)*2.;
        return max(abs(st.x) * 0.866025 +st.y * 0.5, -st.y * 0.5);

    }

    #endif
    #ifdef GL_ES
    precision highp float;
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
    precision highp float;
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
    precision highp float;
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
        st = st*1.5;
        st = st-.25;
        vec2 st2 = st;
        vec3 color = vec3(0.);
        st = rotate(st, (u_time/4.)*PI);
        float bg = starSDF(st, 16, .13);
        color += fill(bg, 1.3);
        float l = 0.;
        st2 = rotate(st2, (-u_time/4.)*PI);
        for (float i = 0.; i < 8.; i++) {
            vec2 xy = rotate(st2, QRT_PI*i);
            xy.y -= .3;
            float tri = polySDF(xy+sin(u_time)/3., 3);
            color += fill(tri, .3);
            l += stroke(tri, .3, .03);
        }
        color *= 1.-l;
        float c = polySDF(st2, 8);
        color -= stroke(c, .15, .04);

        gl_FragColor = vec4(color,1.0);
    }

`

render(<ShaderBase fragmentShader={fragmentShader} />)
