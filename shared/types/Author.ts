export interface Author {
  id: string
  createdAt: string
  upstringdAt: string
  publishedAt: string
  revisedAt: string
  name: string
  icon: Icon
  description: string
  url1: string
}

export interface Icon {
  url: string
  height: number
  width: number
}
