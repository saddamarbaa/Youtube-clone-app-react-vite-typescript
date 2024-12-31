import styled from 'styled-components'
import moment from 'moment'
import { useState } from 'react'

import { kFormatter } from '../utils/helpers'
import Comments from './Comments'
import { YouTubeVideo } from '../types'
import { useSearchParams } from 'react-router'

type Props = {
	video: YouTubeVideo
}
export default function VideoPreview({ video }: Props) {
	const [showDescription, setShowDescription] = useState(false)
	const [searchParams] = useSearchParams()

	const { snippet, statistics } = video
	const { channelTitle, title, thumbnails, publishedAt, description } =
		snippet || {}
	const thumbnail = thumbnails?.high || thumbnails?.medium
	const subscribers =
		statistics?.viewCount + statistics?.likeCount ||
		statistics?.commentCount ||
		20

	const subscriberCount = kFormatter(subscribers || 0)
	const formattedViewCount = kFormatter(statistics?.viewCount || 0)
	const formattedPublishedAt = moment(publishedAt).fromNow()
	const truncatedDescription = showDescription
		? description
		: `${description?.substring(0, 200)}...`
	const toggleDescription = () => setShowDescription(!showDescription)
	const buttonText = showDescription ? 'less' : 'more'

	const videoId =
		typeof video.id === 'object' && video.id !== null
			? video.id.videoId
			: video.id

	const finalId = searchParams.get('v') || videoId

	return (
		<Wrapper>
			<VideoContainer>
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${finalId}?autoplay=1&mute=1`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</VideoContainer>
			<VideoDetail>
				<VideoTitle>{title}</VideoTitle>
				<ChannelInfo>
					<ChannelImage src={thumbnail?.url} alt="Channel Thumbnail" />
					<div>
						<ChannelName>{channelTitle}</ChannelName>
						<Description>
							{subscriberCount}
							{' 							subscribers'}
						</Description>
					</div>
				</ChannelInfo>
				<ChannelDescriptionInfo>
					<MetaData>
						{formattedViewCount} views • {formattedPublishedAt}
					</MetaData>

					<MetaDataDescription>
						{truncatedDescription}
						{showDescription && <br />}
						<button className="font-semibold" onClick={toggleDescription}>
							Show {buttonText}
						</button>
					</MetaDataDescription>
				</ChannelDescriptionInfo>
				<Comments videoId={videoId} />
			</VideoDetail>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex: 0.7;
	gap: 1rem;
	padding: 1rem;

	@media (max-width: 768px) {
		flex: 1;
	}
`

const VideoContainer = styled.div`
	flex: 1;
	height: 80vh;
	min-height: 400px;
	max-height: 1400px;

	@media (max-width: 768px) {
		font-size: 1.3rem;
		height: 60vh;
		min-height: 400px;
		max-height: 400px;
	}
`
const VideoDetail = styled.div`
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`

const VideoTitle = styled.h3`
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
`

const ChannelInfo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`

const ChannelName = styled(VideoTitle)`
	font-size: 1rem;
	font-weight: bold;
`

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
`

const Description = styled.p`
	font-size: 0.9rem;
	color: #666;
	/* margin: 8px 0; */
`

const ChannelDescriptionInfo = styled.div`
	padding: 1rem;
	background-color: #f3f4f6;
	border-radius: 8px;
	padding: 8px;
	margin-top: 8px;
`

const MetaDataDescription = styled.div`
	font-size: 0.8rem;

	button {
		padding: 0.5rem 1rem;
		margin: 0 0.4rem;
		border-radius: 8px;
		border: none;
		background-color: #e0e0e0;
	}
`

const MetaData = styled.p`
	color: #777;
	font-size: 0.85rem;
	/* margin-top: 4px; */
`
