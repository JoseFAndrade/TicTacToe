
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TicTacToe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TicTacToe"
  },
  {
    "renderMode": 2,
    "route": "/TicTacToe/multiplayer"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 444, hash: '41a0011a4b2d2ec9f04789c58f4afe3c52b93368faca5b8b0ca1538ca7cdccbc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'e5f9fbd2c621d539eb1c798f930cebc73b7f936459850403488c2346a9e4b868', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2644, hash: '73d1077627b925a08995b97612aa3e4e28daf636dabaf9d0432cff0acce74df1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 3864, hash: 'bb02818c87caadb0d4219ea520af5a5b5ca43fc99f63d3966ce21d1d78b8eeaa', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
