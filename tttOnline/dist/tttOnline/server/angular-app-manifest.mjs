
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/multiplayer"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 434, hash: '85b2c1e469b242c97fe14b2d300d7e6c1a8537a53bfdb886bb9231b1334b8528', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '94921270ccae8799d62db6b45e6d7bcf724230ba77a1b29e5fbdcf0a46b18636', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2624, hash: 'f30214c09339cd0e2951654cbcf756752782074e988bf64e2a367d1b47c6cfa2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 3651, hash: '39b2a846e733c93c64d171cb99f1da40e2791c9dce7cb8f1488537cc8cd59ca1', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
