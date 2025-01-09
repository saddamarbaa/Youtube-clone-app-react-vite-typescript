import { useNavigate } from 'react-router'
import styled from 'styled-components'
import moment from 'moment'
import { kFormatter } from '../utils/helpers'
import { getRandomIntNumberBetween } from '../utils/lib'
import { YouTubeVideo } from '../types'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

type Props = {
	video: YouTubeVideo
}

export default function RelatedVideoCard({ video }: Props) {
	const history = useNavigate()
	const { theme } = useThemeContext()

	const { snippet, statistics } = video
	const { title, thumbnails, publishedAt } = snippet

	const thumbnail = thumbnails?.high || thumbnails?.medium
	const videoId =
		typeof video.id === 'object' && video.id !== null
			? video.id.videoId
			: video.id

	const onHandleClick = (id: string) => {
		history('/watch?v=' + id)
	}

	return (
		<CardContainer
			key={videoId}
			onClick={() => {
				onHandleClick(videoId)
			}}
			isDarkTheme={theme === 'dark'} // Pass boolean directly for dark theme
		>
			<Thumbnail
				src={thumbnail.url}
				alt="Video Thumbnail"
				width={thumbnail.width}
				height={thumbnail.height}
			/>
			<VideoDetail>
				<VideoTitle isDarkTheme={theme === 'dark'}>{title}</VideoTitle>

				<VideoMeta isDarkTheme={theme === 'dark'}>
					{kFormatter(
						statistics?.viewCount ||
							statistics?.favoriteCount ||
							statistics?.commentCount ||
							statistics?.likeCount ||
							getRandomIntNumberBetween(1200000, 0),
					)}{' '}
					views • {moment(publishedAt).fromNow()}
				</VideoMeta>

				<VideoDescription isDarkTheme={theme === 'dark'}>
					Prime Video
				</VideoDescription>
			</VideoDetail>
		</CardContainer>
	)
}

const CardContainer = styled.div<{ isDarkTheme: boolean }>`
	width: 100%;
	border-radius: 12px;
	margin-bottom: 16px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	background-color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#333' : '#fff'}; // Toggle background color based on theme
	transition: box-shadow 0.3s ease, transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		opacity: 0.95;
		background-color: ${({ isDarkTheme }) =>
			isDarkTheme ? '#444' : '#f5f5f5'}; // Toggle hover background color
	}
`

const Thumbnail = styled.img<{ width?: number; height?: number }>`
	width: 300px;
	min-width: 300px;
	height: 200px;
	object-fit: cover;
	border-radius: 12px;
`

const VideoDetail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 8px;
`

const VideoTitle = styled.p<{ isDarkTheme: boolean }>`
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 1.3;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#fff' : '#333'}; // Toggle text color based on theme
	overflow: hidden;
`

const VideoMeta = styled.p<{ isDarkTheme: boolean }>`
	font-size: 1rem;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#bbb' : '#777'}; // Adjust for dark/light mode
	line-height: 1.5;
`

const VideoDescription = styled.p<{ isDarkTheme: boolean }>`
	font-size: 0.95rem;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#ddd' : '#444'}; // Toggle text color based on theme
	font-weight: 500;
`
