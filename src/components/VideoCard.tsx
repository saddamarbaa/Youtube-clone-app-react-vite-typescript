import styled from 'styled-components'
import moment from 'moment/moment'

import { YouTubeVideo } from '../types'
import { getRandomIntNumberBetween } from '../utils/lib'
import { kFormatter } from '../utils/helpers'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

interface Props {
	video: YouTubeVideo
	filter?: string | null
}

export default function VideoCard({ video }: Props) {
	const { snippet, statistics } = video
	const { channelTitle, title, thumbnails, publishedAt } = snippet

	const { theme } = useThemeContext()
	const isDarkTheme = theme === 'dark'

	// Extracting thumbnail URL and its dimensions dynamically
	const thumbnail = thumbnails?.high || thumbnails?.medium

	return (
		<CardContainer isDarkTheme={isDarkTheme}>
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
					<VideoTitle isDarkTheme={isDarkTheme}>{channelTitle}</VideoTitle>
					<Description isDarkTheme={isDarkTheme}>{title}</Description>
					<MetaData isDarkTheme={isDarkTheme}>
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

const CardContainer = styled.div<{ isDarkTheme: boolean }>`
	width: 100%;
	min-width: 300px;
	border-radius: 12px;
	margin: 16px;
	overflow: hidden;
	cursor: pointer;
	color: ${({ isDarkTheme }) => (isDarkTheme ? '#fff' : '#000')};
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

const VideoTitle = styled.p<{ isDarkTheme: boolean }>`
	font-size: 1.2rem;
	font-weight: bold;
	margin: 0;
	color: ${({ isDarkTheme }) => (isDarkTheme ? '#ddd' : '#000')};
`

const Description = styled.p<{ isDarkTheme: boolean }>`
	font-size: 0.9rem;
	color: ${({ isDarkTheme }) => (isDarkTheme ? '#aaa' : '#666')};
	margin: 8px 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

const MetaData = styled.p<{ isDarkTheme: boolean }>`
	color: ${({ isDarkTheme }) => (isDarkTheme ? '#888' : '#777')};
	font-size: 0.85rem;
	/* margin-top: 4px; */
`
