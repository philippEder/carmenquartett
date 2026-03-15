
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5564, hash: '0fd330039187d7a4c009e1adf7500d7cd4e2453dc88e98a0040072eaafcf25a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5393, hash: 'f6fe24f731fc81baadaacef8acc8396fa1eec29781a2bd4e4f161913f0dce53b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.css': {size: 78357, hash: 'wgKNnhOvXJY', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
