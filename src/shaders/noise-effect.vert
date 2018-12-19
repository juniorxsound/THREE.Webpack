#pragma glslify: pnoise3 = require(glsl-noise/periodic/3d)

uniform float time;
varying vec3 vPos;

void main(void) {
    vec3 pos = position;
    pos += pnoise3(vec3(sin(time * 0.1)), vec3(sin(position * 0.1)));

    gl_PointSize = 2.0;
    vec4 MVP =  projectionMatrix * modelViewMatrix * vec4(pos,1.0);
    vPos = MVP.xyz;
    gl_Position = MVP;
}