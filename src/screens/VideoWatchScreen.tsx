import { useSearchParams } from 'react-router'
import styled from 'styled-components'

import Layout from '../layouts'
import VideoPreview from '../components/VideoPreview'
import ErrorCard from '../components/ErrorCard'
import RelatedVideos from '../components/RelatedVideos'
import { useQuery } from '@tanstack/react-query'
import { fetchVideo } from '../utils/api'
import { mockVideo } from '../utils/mockData'
import ShimmerLoader from '../components/ShimmerLoader'

export default function VideoWatchScreen() {
	const [searchParams] = useSearchParams()
	const videoId = searchParams.get('v')
	const {
		data,
		isLoading,
		// error
	} = useQuery({
		queryKey: ['videos' + videoId],
		queryFn: () => fetchVideo(videoId),
		enabled: !!videoId,
	})

	if (isLoading) return <ShimmerLoader />

	return (
		<Layout>
			<Wrapper>
				{!videoId ? (
					<ErrorCard message={'Video not found'} />
				) : (
					<>
						<VideoPreview video={data || mockVideo} />
						<RelatedVideos videoId={videoId} />
					</>
				)}
			</Wrapper>
		</Layout>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
	align-items: stretch;
	gap: 1rem;
	/* max-width: 90.75rem; */
	overflow: hidden;
	margin: 0 auto;
	padding: 0 1rem;
`
