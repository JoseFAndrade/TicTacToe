
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
    'index.csr.html': {size: 444, hash: 'e6fba0a79e36996e62e002faefa7816fbafdd03585fb61d15d80d20d6742df86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'ae066f025676de0bbbaaf632d61cb16cfc8a734bfc014b52d25820f46518c7e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2644, hash: 'b78a41f0be1438499135c1f6547e687e9428da6732ee9ea1c0d39820b00f2edb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 3907, hash: 'a387b7cb147f75682bbf607ee3c20b2662be0afe1acf76d2b5411c8480ab853f', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
