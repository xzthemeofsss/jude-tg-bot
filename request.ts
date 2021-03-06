import got from 'got'

const CUBOX_API = process.env.CUBOX_API

const client = got.extend({
  prefixUrl: CUBOX_API,
  responseType: 'json',
})

async function saveUrl(body: {
  content: string
  title?: string
  description?: string
  tags?: string
}) {
  const res = await client.post('', { json: { ...body, type: 'url', folder: 'Telegram 收藏' } })
}
async function saveMemo(body: { content: string; title?: String }) {
  await client.post('', { json: { ...body, type: 'memo' } })
}

export { saveUrl, saveMemo }
