//http://glsl.heroku.com/e#15689.0

uniform sampler2D texture;

void main()
{
    vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
    gl_FragColor = pixel - vec4( step(3.0,mod(gl_FragCoord.y,4.0)) );
}