
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
    'index.csr.html': {size: 10428, hash: 'd4a43948b205733a25fe11154ca040bf18e651c11b7a1eea18ed25d43cf4bb73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'cf8869b407b7adf7db773316f36da38146e454914bd7e58c903fc801ebe10542', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14188, hash: '45a327903ebd7fd08aa4c840fdb493d377ef62f88b3dce9980ae2a6a74141aa2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 15998, hash: 'de9daf0cdfddb2f099b52d679312b28e077852bcd65cf875994397223139422e', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-TL7WDLQA.css': {size: 10015, hash: 'fJpv/jEeqZE', text: () => import('./assets-chunks/styles-TL7WDLQA_css.mjs').then(m => m.default)}
  },
};
