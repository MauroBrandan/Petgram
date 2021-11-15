import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
	from{
		filter: blur(5px);
		opacity: 0;
	}
	to{
		filter: blur(0)
		opacity: 1;
	}
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${fadeInKeyframes} ${type};
	`

const bounceDownKeyFrames = keyframes`
		0%   { transform: translateY(-10px); }
        50%  { transform: translateY(50px); }
        100% { transform: scale(0.7) translateY(-10px); }
`

export const bounceDown = ({ time = '0.3s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${bounceDownKeyFrames} ${type};
	`
