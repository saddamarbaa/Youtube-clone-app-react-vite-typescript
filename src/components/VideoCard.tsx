import styled from 'styled-components'
import moment from 'moment/moment'

import { YouTubeVideo } from '../types'
import { getRandomIntNumberBetween } from '../utils/lib'
import { kFormatter } from '../utils/helpers'

interface Props {
	video: YouTubeVideo
	filter?: string | null
}

export default function VideoCard({ video }: Props) {
	const { snippet, statistics } = video
	const { channelTitle, title, thumbnails, publishedAt } = snippet

	// Extracting thumbnail URL and its dimensions dynamically
	const thumbnail = thumbnails?.high || thumbnails?.medium

	return (
		<CardContainer>
			{/* Pass the width and height dynamically */}
			<Thumbnail
				src={thumbnail.url}
				alt="Video Thumbnail"
				width={350}
				height={250}
			/>
			<ChannelInfo>
				<ChannelImage src={thumbnail.url} alt="Channel Thumbnail" />
				<div>
					<VideoTitle>{channelTitle}</VideoTitle>
					<Description>{title}</Description>
					<MetaData>
						{kFormatter(
							statistics?.viewCount ||
								statistics?.favoriteCount ||
								statistics?.commentCount ||
								statistics?.likeCount ||
								getRandomIntNumberBetween(1200000, 0),
						)}{' '}
						views • {moment(publishedAt).fromNow()}
					</MetaData>
				</div>
			</ChannelInfo>
		</CardContainer>
	)
}

// Styled Components
const ChannelInfo = styled.div`
	display: flex;
	gap: 1rem;
	/* align-items: center; */
`

const CardContainer = styled.div`
	width: 100%;
	min-width: 300px;
	border-radius: 12px;
	margin: 16px;
	overflow: hidden;
	cursor: pointer;
	transition: box-shadow 0.3s ease, transform 0.3s ease;

	&:hover {
		/* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);  */
		transform: translateY(-5px);
		opacity: 0.95;
	}
`

const Thumbnail = styled.img<{ width?: number; height?: number }>`
	width: ${({ width = 320 }) => width}px;
	height: ${({ height = 180 }) => height}px;
	border-radius: 12px;
	object-fit: cover;
	max-height: 220px;
	margin-bottom: 4px;
	min-width: 320px;
`

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
`

const VideoTitle = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	margin: 0;
`

const Description = styled.p`
	font-size: 0.9rem;
	color: #666;
	margin: 8px 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

const MetaData = styled.p`
	color: #777;
	font-size: 0.85rem;
	/* margin-top: 4px; */
`
