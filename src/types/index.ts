export interface YouTubeThumbnail {
	url: string
	width: number
	height: number
}

export interface YouTubeThumbnails {
	default: YouTubeThumbnail
	medium: YouTubeThumbnail
	high: YouTubeThumbnail
	standard?: YouTubeThumbnail
	maxres?: YouTubeThumbnail
}

export interface YouTubeSnippet {
	publishedAt: string
	channelId: string
	title: string
	description: string
	thumbnails: {
		default: {
			url: string
			width: number
			height: number
		}
		medium: {
			url: string
			width: number
			height: number
		}
		high: {
			url: string
			width: number
			height: number
		}
		standard?: {
			url: string
			width: number
			height: number
		}
		maxres?: {
			url: string
			width: number
			height: number
		}
		publishTime?: string
		defaultLanguage?: string
	}
	publishTime?: string
	channelTitle: string
	tags: string[]
	categoryId: string
	liveBroadcastContent: string
	localized: {
		title: string
		description: string
	}
	defaultAudioLanguage: string
	defaultLanguage: string
}

export interface YouTubeContentDetails {
	duration: string
	dimension: string
	definition: string
	caption: string
	licensedContent: boolean
	contentRating: Record<string, unknown>
	projection: string
}

export interface YouTubeStatistics {
	viewCount: string
	likeCount: string
	favoriteCount: string
	commentCount: string
}

export interface YouTubeVideo {
	kind: string
	etag: string
	id:
		| string
		| {
				kind: string
				videoId: string
		  }
	snippet: YouTubeSnippet
	contentDetails: YouTubeContentDetails
	statistics: YouTubeStatistics
}

export interface YouTubeCommentThreadListResponse {
	kind: string
	etag: string
	nextPageToken?: string
	pageInfo: PageInfo
	items: YouTubeVideoComment[]
}

interface PageInfo {
	totalResults: number
	resultsPerPage: number
}

export interface YouTubeVideoComment {
	kind: string
	etag: string
	id: string
	snippet: CommentThreadSnippet
}

interface CommentThreadSnippet {
	channelId: string
	videoId: string
	topLevelComment: TopLevelComment
	canReply: boolean
	totalReplyCount: number
	isPublic: boolean
}

interface TopLevelComment {
	kind: string
	etag: string
	id: string
	snippet: TopLevelCommentSnippet
}

interface TopLevelCommentSnippet {
	channelId: string
	videoId: string
	textDisplay: string
	textOriginal: string
	authorDisplayName: string
	authorProfileImageUrl: string
	authorChannelUrl: string
	authorChannelId: AuthorChannelId
	canRate: boolean
	viewerRating: string
	likeCount: number
	publishedAt: string
	updatedAt: string
}

interface AuthorChannelId {
	value: string
}
