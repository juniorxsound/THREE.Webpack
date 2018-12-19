#pragma glslify: noise3 = require(glsl-noise/simplex/3d)

uniform float time;
varying vec3 vPos;

void main(void)	{
    gl_FragColor = vec4(vec3(noise3(vPos) + 0.9), 1.0);
}