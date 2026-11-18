
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
    'index.csr.html': {size: 10428, hash: 'f20e45f4ec61ff389c71f704cf26ab7747bc3a10c650bfb8927fa2b8c9e70e5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: 'ff32c3553ceb9605c1dec15586bad90c9d2d3e978dff81a8f97ec24920318c92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13245, hash: 'c3c142fa2c3d839b74e7419121995902db19149ae7699ff2a6f1ae13b0624d53', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 15998, hash: 'ccde655bfc65400520e54032ba198746349e63d95931446172f066dd3516f7a8', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-TL7WDLQA.css': {size: 10015, hash: 'fJpv/jEeqZE', text: () => import('./assets-chunks/styles-TL7WDLQA_css.mjs').then(m => m.default)}
  },
};
