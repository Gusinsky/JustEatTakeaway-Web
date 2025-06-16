export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static files from the build directory
    if (url.pathname.startsWith('/static/') || 
        url.pathname.startsWith('/asset-manifest.json') ||
        url.pathname.startsWith('/manifest.json') ||
        url.pathname.startsWith('/favicon.ico')) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve index.html
    return env.ASSETS.fetch(new Request(new URL('/index.html', url.origin)));
  }
}; 