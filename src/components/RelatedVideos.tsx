import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

import { fetchRelatedVideos } from '../utils/api'
import { mostPopular } from '../utils/mockData'
import { useAppContext } from '../globalStates'
import RelatedVideoCard from './RelatedVideoCard'

type Props = {
	videoId: string
}

export default function RelatedVideos({ videoId }: Props) {
	const { state } = useAppContext()

	const filter = state?.search

	const {
		data,
		// isLoading, error
	} = useQuery({
		queryKey: ['videos' + videoId],
		queryFn: () => fetchRelatedVideos(filter),
		enabled: !!videoId,
	})

	const videos = (data && data?.length && data) || mostPopular

	return (
		<Wrapper>
			{videos &&
				videos?.map((video) => {
					const videoId =
						typeof video.id === 'object' && video.id !== null
							? video.id.videoId
							: video.id

					return <RelatedVideoCard key={videoId} video={video} />
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
