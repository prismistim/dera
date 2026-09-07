import { createClient } from 'microcms-js-sdk'

const config = useRuntimeConfig()

export const microcmsClient = createClient({
  serviceDomain: config.microcmsServerDomain,
  apiKey: config.microcmsApiKey,
  retry: true,
})
