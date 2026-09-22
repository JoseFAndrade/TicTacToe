
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
    'index.csr.html': {size: 444, hash: '16e5e7f2d31ef506ac0673e5f680da438e8a774bc0724b848c18a3e090cffb14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'b754a8999112ff07d83464c1afdfb146399e1775c42ccfa60927965789b7d110', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2644, hash: '92c30b85881568ea26cc1a7268cfba56c3b7028370f7ec8cac5853f4fe2cc013', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 3586, hash: '12f04162f9b80e218ed1b5492186e45316cc4310aa0e2a8c3e74d4dd191d01c5', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
