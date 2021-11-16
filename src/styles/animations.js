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

const bounceDownKeyframes = keyframes`
		0%   { transform: translateY(-10px); }
        50%  { transform: translateY(50px); }
        100% { transform: scale(0.7) translateY(-10px); }
`

export const bounceDown = ({ time = '0.3s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${bounceDownKeyframes} ${type};
	`

const skeletonLoadingKeyframes = keyframes`
    from {
        background-position:0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`

export const skeletonLoading = () => css`
	background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
	background-size: 400% 400%;
	animation: ${skeletonLoadingKeyframes} 0.5s ease-in-out infinite;
`
