
export default /*glsl*/`
// https://inconvergent.net/2021/volumetric-light/
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse; 
uniform float u_time;
float TIME = 0.0;
vec2 RUV = vec2(0.0);

float nrand( vec2 n )
{
	return fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float n1rand( vec2 n )
{
    TIME *= 1.01;
	float t = fract( TIME );
	float nrnd0 = nrand( RUV + vec2(0.07*t, -0.07*t) );
	return nrnd0;
}

float sdBox(in vec3 p, in vec3 b) {
    vec3 d = abs(p) - b;
    return length(max(d, 0.)) + min(max(d.x, max(d.y, d.z)), 0.);
}

float sdPlane(in vec3 p, in vec3 n, in float o) {
    return dot(p, n)-o;
}

float opU(in float d1, in float d2) {
    return min(d1, d2);
}

float opS(in float d1, in float d2) {
    return max(-d1, d2);
}

float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
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

float map(in vec3 p) {
    vec3 q = p;
    float res = sdPlane(q, vec3(0., 1., 0.), -2.);


    vec2 size = vec2(.5, .01);
    vec3 offset = vec3(0., 0.0, 0.8);
    res = opU(res, sdTorus(rotate(q + offset * -0.5 , vec3(1., 0., 0.), 3.14/2.), size + offset.z * 0.5 ));
    res = opU(res, sdTorus(rotate(q + offset * -3. , vec3(1., 0., 0.), 3.14/2.), size + offset.z * 1. ));
    res = opU(res, sdTorus(rotate(q + offset * 2. , vec3(1., 0., 0.), 3.14/2.), size + offset.z * 2. ));
        
    return res;
}

// float opTwist( float sd, vec3 p )
// {
//     const float k = 10.0; // or some other amount
//     float c = cos(k*p.y);
//     float s = sin(k*p.y);
//     mat2  m = mat2(c,-s,s,c);
//     vec3  q = vec3(m*p.xz,p.y);
//     return primitive(q);
// }

// float map(in vec3 p) {
//   vec3 q = p;

//   float res = sdTorus(q, vec2(.5, .2));
  
//   return res;
// }

vec3 march(in vec3 ro, in vec3 rd, in float maxD) {
    float minD=0.;
    float threshold = 0.0001;
    
    float d=minD;
    for(int i=0;i<32;i++){
        vec3 pos = ro + rd*d;
        float tmp = map(pos);
        if(tmp <threshold || maxD<tmp) break;
        d += tmp;
    }
    
    if (maxD < d) return vec3(maxD);
    return ro + rd * clamp(d, 0., maxD);
}

vec3 calcNormal(in vec3 p) {
	vec2 e = vec2(1.0, -1.0)*0.00001;
    return normalize(vec3(
    	e.xyy*map(p+e.xyy) +
    	e.yxy*map(p+e.yxy) +
    	e.yyx*map(p+e.yyx) +
    	e.xxx*map(p+e.xxx)
    ));
}

vec3 render(in vec3 ro, in vec3 rd) {
    vec3 p = ro;
    vec3 hit = march(ro, rd, 100.0);
    float d = distance(hit, p);

    float pix = 0.;

    int n = 8;

    for (int i = 0; i < n; ++i) {

        vec3 smaple = mix(p, hit, n1rand(ro.xy * 0.01));
        
        vec3 light = vec3(0., .1, sin(-u_time * 0.5) * 1.7);
        float maxD = distance(smaple, light);

        if (march(smaple, normalize(light - smaple), maxD).x == maxD) {
            pix += d / pow(1. + maxD, 2.);
        }

    }
    
    pix *= 1.0 / float(n);
    
    return vec3(pix);
}

mat3 lookAt(in vec3 eye, in vec3 tar, in float r) {
    vec3 cw = normalize(tar - eye);// camera w
    vec3 cp = vec3(0, 1.0, 0.);// camera up
    vec3 cu = normalize(cross(cw, cp));// camera u
    vec3 cv = normalize(cross(cu, cw));// camera v
    return mat3(cu, cv, cw);
}

void main() {
    TIME = u_time;
    
    vec2 p = (gl_FragCoord.xy-0.5*u_resolution.xy)/min(u_resolution.x, u_resolution.y);
    RUV = p;
    
    float ang = 0.6;
    vec3 ro = vec3(cos(ang), 0.0, sin(ang)) * 10.; // camera pos
    ro.y = 15.;
    
    vec3 tar = vec3(0.); // eye target
    
    vec3 rd_orth = normalize(tar - ro);// ray direction via orthographic projection
    
    mat3 cam = lookAt(rd_orth, tar, 0.0);
    vec3 ro_orth = ro + cam * vec3(p * 10., 0.);// ray origin 

    // rendering
    vec3 col = render(ro_orth, rd_orth);
    
    gl_FragColor = vec4(col,1.0);
}

`
