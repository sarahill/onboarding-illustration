// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pivotal/onboarding-illustration/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/pivotal/onboarding-illustration/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pivotal/onboarding-illustration/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/pivotal/onboarding-illustration/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/pivotal/onboarding-illustration/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/layout-index.json"),
  "404.json": require("/Users/pivotal/onboarding-illustration/.cache/json/404.json"),
  "layout-index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/layout-index.json"),
  "index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/index.json"),
  "layout-index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/pivotal/onboarding-illustration/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/pivotal/onboarding-illustration/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/pivotal/onboarding-illustration/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/pivotal/onboarding-illustration/.cache/layouts/index.js"))
}