import styled from 'styled-components'
import loadingSpinner from '../assets/svg/loading-spinner.svg'

export default function Spinner() {
	return (
		<Overlay>
			<div>
				<SpinnerImage src={loadingSpinner} alt="Loading..." />
			</div>
		</Overlay>
	)
}

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	position: fixed;
	inset: 0;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
`

const SpinnerImage = styled.img`
	height: 8rem;
	width: 8rem;
	cursor: pointer;
`
