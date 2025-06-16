export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname === '/' ? '/index.html' : url.pathname

    try {
      const asset = await env.ASSETS.fetch(path)
      if (asset.status === 404) {
        return new Response('Not Found', { status: 404 })
      }
      return asset
    } catch (e) {
      return new Response('Internal Server Error', { status: 500 })
    }
  }
} 