// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import('C:\\Users\\guggi\\PROGRAMMING\\GATSBY\\belleandbass\\.cache\\dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */),
  'component---src-pages-404-tsx': () =>
    import('C:\\Users\\guggi\\PROGRAMMING\\GATSBY\\belleandbass\\src\\pages\\404.tsx' /* webpackChunkName: "component---src-pages-404-tsx" */),
  'component---src-pages-index-tsx': () =>
    import('C:\\Users\\guggi\\PROGRAMMING\\GATSBY\\belleandbass\\src\\pages\\index.tsx' /* webpackChunkName: "component---src-pages-index-tsx" */),
};

exports.data = () =>
  import(/* webpackChunkName: "pages-manifest" */ 'C:\\Users\\guggi\\PROGRAMMING\\GATSBY\\belleandbass\\.cache\\data.json');
