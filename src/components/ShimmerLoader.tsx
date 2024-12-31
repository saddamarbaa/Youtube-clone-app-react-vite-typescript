import styled, { keyframes } from 'styled-components'

import ShimmerHeader from './ShimmerHeader'
import loadingSpinner from '../assets/svg/loading-spinner.svg'

export default function ShimmerLoader() {
	const loadingItems = Array(16).fill(null)

	return (
		<FeedWrapper>
			<ShimmerHeader />
			<Grid>
				{loadingItems.map((_, index) => {
					return (
						<ShimmerContainer key={index}>
							<ShimmerThumbnail />
							<ShimmerChannelInfo>
								<ShimmerCircle />
								<div>
									<ShimmerText width="220px" />
									<ShimmerText width="100px" />
								</div>
							</ShimmerChannelInfo>
						</ShimmerContainer>
					)
				})}
			</Grid>

			<Overlay>
				<div>
					<SpinnerImage src={loadingSpinner} alt="Loading..." />
				</div>
			</Overlay>
		</FeedWrapper>
	)
}

// Keyframes for shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
	gap: 20px;
	margin: 3rem;
`

const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

const ShimmerContainer = styled.div`
	width: 100%;
	max-width: 350px;
	border-radius: 12px;
	overflow: hidden;
	background-color: #f0f0f0;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	display: grid;
	gap: 1rem;
	cursor: pointer;
`

const ShimmerThumbnail = styled.div`
	width: 100%;
	height: 180px;
	background-color: #e0e0e0;
	background-image: linear-gradient(
		to right,
		#f0f0f0 0%,
		#e0e0e0 20%,
		#f0f0f0 40%,
		#f0f0f0 100%
	);
	background-repeat: no-repeat;
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 12px;
`

const ShimmerChannelInfo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`

const ShimmerCircle = styled.div`
	width: 36px;
	height: 36px;
	background-color: #e0e0e0;
	background-image: linear-gradient(
		to right,
		#f0f0f0 0%,
		#e0e0e0 20%,
		#f0f0f0 40%,
		#f0f0f0 100%
	);
	background-repeat: no-repeat;
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 50%;
`

const ShimmerText = styled.div<{ width?: string }>`
	width: ${({ width }) => width || '100%'};
	height: 16px;
	background-color: #e0e0e0;
	background-image: linear-gradient(
		to right,
		#f0f0f0 0%,
		#e0e0e0 20%,
		#f0f0f0 40%,
		#f0f0f0 100%
	);
	background-repeat: no-repeat;
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 6px;
	margin-bottom: 8px;
`

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
	cursor: pointer;
	/* backdrop-filter: blur(3px); */
`

const SpinnerImage = styled.img`
	height: 8rem;
	width: 8rem;
	cursor: pointer;
`
