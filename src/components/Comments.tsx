import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import moment from 'moment'
import { kFormatter } from '../utils/helpers'
import { fetchComments } from '../utils/api'
import { mockComments } from '../utils/mockData'

const Comments = ({ videoId }: { videoId: string }) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['comments', videoId],
		queryFn: () => fetchComments(videoId),
		staleTime: 1000 * 60 * 5,
		enabled: !!videoId,
	})

	if (isLoading) return <div>Loading comments...</div>
	if (error instanceof Error) return <div>Error: {error.message}</div>

	const comments = data || mockComments

	return (
		<CommentContainer>
			<p>{comments?.length} Comments</p>
			{comments?.map((comment) => {
				const {
					authorDisplayName,
					authorProfileImageUrl,
					textDisplay,
					publishedAt,
					likeCount,
				} = comment?.snippet?.topLevelComment?.snippet

				return (
					<CommentWrapper key={comment?.id}>
						<AuthorImage src={authorProfileImageUrl} alt="author" />
						<CommentContent>
							<AuthorInfo>
								<AuthorName>{authorDisplayName}</AuthorName>
								<PublishedAt>{moment(publishedAt).fromNow()}</PublishedAt>
							</AuthorInfo>
							<CommentText>{textDisplay}</CommentText>
							<ActionsWrapper>
								<AiOutlineLike />
								{kFormatter(likeCount)}
								<AiOutlineDislike />
							</ActionsWrapper>
						</CommentContent>
					</CommentWrapper>
				)
			})}
		</CommentContainer>
	)
}

// Styled components
const CommentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const CommentWrapper = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
`

const AuthorImage = styled.img`
	border-radius: 50%;
	height: 40px;
	width: 40px;
`

const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
`

const AuthorInfo = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`

const AuthorName = styled.h3`
	font-size: 16px;
	font-weight: 600;
	color: #374151; /* gray-700 */
`

const PublishedAt = styled.p`
	font-size: 12px;
	color: #6b7280; /* gray-500 */
`

const CommentText = styled.p`
	font-size: 14px;
	color: #000;
`

const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

export default Comments
