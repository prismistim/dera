import type { Track } from './Track'
import type { Author } from './Author'

export interface Root {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}

export interface Content {
  id: string
  createdAt: string
  upstringdAt: string
  publishedAt: string
  revisedAt: string
  author: Author
  track: Track
  description: string
}
