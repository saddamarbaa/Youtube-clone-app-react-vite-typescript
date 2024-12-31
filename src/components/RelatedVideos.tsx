import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

import { fetchRelatedVideos } from '../utils/api'
import { mostPopular } from '../utils/mockData'
import moment from 'moment'
import { kFormatter } from '../utils/helpers'
import { useNavigate } from 'react-router'
import { useAppContext } from '../globalStates'
import { getRandomIntNumberBetween } from '../utils/lib'

type Props = {
	videoId: string
}

export default function RelatedVideos({ videoId }: Props) {
	const history = useNavigate()

	const { state } = useAppContext()

	const filter = state?.search

	const { data, isLoading, error } = useQuery({
		queryKey: ['videos' + videoId],
		queryFn: () => fetchRelatedVideos(filter),
		enabled: !!videoId,
	})

	const videos = (data && data?.length && data) || mostPopular

	const onHandleClick = (id: string) => {
		history('/watch?v=' + id)
	}

	return (
		<Wrapper>
			{videos &&
				videos?.map((video) => {
					const { snippet, statistics } = video
					const { channelTitle, title, thumbnails, publishedAt } = snippet

					const thumbnail = thumbnails?.high || thumbnails?.medium
					const videoId =
						typeof video.id === 'object' && video.id !== null
							? video.id.videoId
							: video.id

					return (
						<CardContainer
							key={videoId}
							onClick={() => {
								onHandleClick(videoId)
							}}>
							<Thumbnail
								src={thumbnail.url}
								alt="Video Thumbnail"
								width={thumbnail.width}
								height={thumbnail.height}
							/>
							<VideoDetail>
								<VideoTitle>{title}</VideoTitle>

								<VideoMeta>
									{kFormatter(
										statistics?.viewCount ||
											statistics?.favoriteCount ||
											statistics?.commentCount ||
											statistics?.likeCount ||
											getRandomIntNumberBetween(1200000, 0),
									)}{' '}
									views • {moment(publishedAt).fromNow()}
								</VideoMeta>

								<VideoDescription>Prime Video</VideoDescription>
							</VideoDetail>
						</CardContainer>
					)
				})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex: 0.3;
	margin-top: 1rem;
	/* gap: 0.5rem; */
	max-width: 600px;
	@media (max-width: 768px) {
		display: none;
	}
`

const CardContainer = styled.div`
	width: 100%;
	border-radius: 12px;
	margin-bottom: 16px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	/* gap: 1rem; */
	background-color: #fff;
	transition: box-shadow 0.3s ease, transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		opacity: 0.95;
		background-color: #f5f5f5;
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

const VideoTitle = styled.p`
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 1.3;
	color: #333;
	overflow: hidden;
`

const VideoMeta = styled.p`
	font-size: 1rem;
	color: #777;
	line-height: 1.5;
`

const VideoDescription = styled.p`
	font-size: 0.95rem;
	color: #444;
	font-weight: 500;
`
