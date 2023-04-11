#version 430

out vec4 FragColor;
in vec4 glPosition;

void main(main){
	FragColor = vec4 (abs(glPosition.xy), 0, 1.0);
}