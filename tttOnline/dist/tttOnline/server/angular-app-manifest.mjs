
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
    'index.csr.html': {size: 10428, hash: '3407003becd6a7d34a6d0081ec23f811a1d9181617c1652a37ab9b0913e66e44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '2f43f4ef0acd66e41efb1be5fbcbe32f5ac2d4bd0b4f47fdb1124742bf8e66fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12648, hash: '7e86872165ce0409aa886cab5aab271b9c033b87b2eb80baacfc4028434e20a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'multiplayer/index.html': {size: 15998, hash: '2a5dbc177a8886041b5a4837ea8a34201980cbc085b46cb331a33d4378d09e0f', text: () => import('./assets-chunks/multiplayer_index_html.mjs').then(m => m.default)},
    'styles-TL7WDLQA.css': {size: 10015, hash: 'fJpv/jEeqZE', text: () => import('./assets-chunks/styles-TL7WDLQA_css.mjs').then(m => m.default)}
  },
};
