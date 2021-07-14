export const raymarching = {

  fragmentShader: `#ifdef GL_ES
    precision highp float;
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
    }`,
  shaderLink: ""
}