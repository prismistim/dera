import type { Article, Articles } from '#shared/types/Article'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return microcmsClient.getList<Article>({
    endpoint: 'articles',
    queries: {
      limit: Number(query.limit ?? 10),
      offset: Number(query.offset ?? 0),
      orders: '-publishedAt'
    }
  })
})
