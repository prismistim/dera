import type { Track } from './Track'
import type { Author } from './Author'

export interface Articles {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}

export interface Article {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  author: Author
  contents: ContentItem[]
}

export interface ContentItem {
  fieldId: string
  heading?: string
  description?: string
  track?: Track
  playlist?: Playlist[]
  image?: Image
}

export interface Image {
  url: string
  height: number
  width: number
  description: string
}

export interface Playlist {
  fieldId: string
  track: Track
}
