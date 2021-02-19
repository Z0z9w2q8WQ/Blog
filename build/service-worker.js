/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "74460a05e7fce9a7d67987cfa0378518"
  },
  {
    "url": "assets/css/0.styles.3e3728f7.css",
    "revision": "2cd40d96efb8947929464120bdfb16b8"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.65a0b400.js",
    "revision": "489177754c997560e42f95c6e3dada38"
  },
  {
    "url": "assets/js/10.e43db72c.js",
    "revision": "601a5d2dd46930f559b751d77af52684"
  },
  {
    "url": "assets/js/11.e9d0c165.js",
    "revision": "00bb68c33df82a960e5ff08d4f49a246"
  },
  {
    "url": "assets/js/12.b8d29bf6.js",
    "revision": "47001103d6191f78dbe343f24f223696"
  },
  {
    "url": "assets/js/13.1608b663.js",
    "revision": "79962f119002c0f9ad3512ff49e26de3"
  },
  {
    "url": "assets/js/14.d3f263b3.js",
    "revision": "aae8a9e8efc84ecd17848c9bb22b2f9a"
  },
  {
    "url": "assets/js/15.37242b00.js",
    "revision": "42b2322f0885a0db9351e9ce6d64ae66"
  },
  {
    "url": "assets/js/16.ca5f7128.js",
    "revision": "c1b5add1fcce918e242568c1f582e111"
  },
  {
    "url": "assets/js/17.ef1f5272.js",
    "revision": "c126705d99b204a6b85eb61a37c0e54a"
  },
  {
    "url": "assets/js/18.fae763d1.js",
    "revision": "9048381b039b8c0ab464da49a5c351ef"
  },
  {
    "url": "assets/js/19.1fa37893.js",
    "revision": "5b26c099f85348547da473e24c96d3d3"
  },
  {
    "url": "assets/js/20.3346da22.js",
    "revision": "fc4de962a477e428a3f5965948ce8434"
  },
  {
    "url": "assets/js/21.94e079b1.js",
    "revision": "0f1bbb128b1f28d4a0ae7c12d349b1d6"
  },
  {
    "url": "assets/js/22.dd944e59.js",
    "revision": "71b41c786a322171930bb2c171764eac"
  },
  {
    "url": "assets/js/23.844c57f1.js",
    "revision": "998995c7bbee2b06645c788f36ab8f85"
  },
  {
    "url": "assets/js/24.7b6a7f93.js",
    "revision": "4ab9e5ab949399b2fe2858f6cb876d43"
  },
  {
    "url": "assets/js/25.1885c6d5.js",
    "revision": "3b543805a39da4af53d83bf49a52de99"
  },
  {
    "url": "assets/js/26.082e9a3d.js",
    "revision": "09b29b8bbfd379272b8c9345b3c2c644"
  },
  {
    "url": "assets/js/27.c79e901c.js",
    "revision": "30d2bc6c05f07dcaa9f63135ad408a5c"
  },
  {
    "url": "assets/js/28.b908a594.js",
    "revision": "b7261b6e9faac6a1d79ab550da39135e"
  },
  {
    "url": "assets/js/29.56ac4724.js",
    "revision": "86f1a8100b8993dbcd3f1e5fc7107d4d"
  },
  {
    "url": "assets/js/30.ebe7019f.js",
    "revision": "24eb9b0e920dc617cb9fc1920a437062"
  },
  {
    "url": "assets/js/31.26e5a8c8.js",
    "revision": "71b4a5e3fb882649807d4e4a4f9b4742"
  },
  {
    "url": "assets/js/32.8fe84f02.js",
    "revision": "8757a837e92c5e84b113ab8fcea6c3ae"
  },
  {
    "url": "assets/js/4.67fd90f4.js",
    "revision": "298b7505caf3de4b15b21227568fab12"
  },
  {
    "url": "assets/js/5.94d713fa.js",
    "revision": "7bbf2ebb6411cf60c8c0d8f6f67d5565"
  },
  {
    "url": "assets/js/6.39f896f9.js",
    "revision": "9d4d2b69d072d57315b9d133870e2734"
  },
  {
    "url": "assets/js/7.ab58ec55.js",
    "revision": "209af877827f53d9869b04aa41c628b3"
  },
  {
    "url": "assets/js/8.d6dab1f6.js",
    "revision": "bc001548d0b01b7af643ea599629a5de"
  },
  {
    "url": "assets/js/9.58635bd4.js",
    "revision": "a2ec88201cf90f6e270912cb7342e13b"
  },
  {
    "url": "assets/js/app.b6b564a5.js",
    "revision": "0eb88915e10ea3fae107f2b3ebc3346e"
  },
  {
    "url": "assets/js/vendors~flowchart.8b59b666.js",
    "revision": "d1d978e32f3ef4709d3695da1ebc6f72"
  },
  {
    "url": "categories/模板/index.html",
    "revision": "22e67aeafbf063aa93e018bee9cd54e6"
  },
  {
    "url": "categories/index.html",
    "revision": "e9860bddd1424486a3b23ca09ffdfe3c"
  },
  {
    "url": "categories/Vue 通信/index.html",
    "revision": "c74ae82c3b311ccbcb20f3c1d836f082"
  },
  {
    "url": "categories/Vue 指令/index.html",
    "revision": "e4feb809c0d573ee9df2be129ca94c20"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "e83b824d81a048f3c99a9e0d8a85c348"
  },
  {
    "url": "categories/Vue/page/2/index.html",
    "revision": "5d7922fe285895f700de10912e0aadd3"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "1d47d90ede7957fc1b2f75ab2a9a809f"
  },
  {
    "url": "docs/React/index.html",
    "revision": "226a9d8da85a0fbc8dc565361b7c1f6c"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "c159a2939029bd1963498cd7cc94a4a7"
  },
  {
    "url": "docs/TimeLine/index.html",
    "revision": "1de946628c2ac2b0ef96ceb725f34d68"
  },
  {
    "url": "docs/Vue/Communication/attrs.html",
    "revision": "9383c7b641e373b23881f86394858128"
  },
  {
    "url": "docs/Vue/Communication/children.html",
    "revision": "6289c50f831e3ac4ab107a354f166782"
  },
  {
    "url": "docs/Vue/Communication/emit.html",
    "revision": "be0ef0c1361c3c159494bc207afb9d8d"
  },
  {
    "url": "docs/Vue/Communication/eventBus.html",
    "revision": "fdaae07c40b177247dd006f988208d90"
  },
  {
    "url": "docs/Vue/Communication/listeners.html",
    "revision": "d01d3dff40bb796f61ea7b96c6258eb0"
  },
  {
    "url": "docs/Vue/Communication/parent.html",
    "revision": "c1a670164873f8da237d6185f060aa6e"
  },
  {
    "url": "docs/Vue/Communication/props.html",
    "revision": "030a9768a449f07fe78e455895e3b381"
  },
  {
    "url": "docs/Vue/Communication/provide_inject.html",
    "revision": "7e39f9679ecfb763b16700aeb15725da"
  },
  {
    "url": "docs/Vue/Communication/ref.html",
    "revision": "e86924d67457e3ce1abeb63da386d927"
  },
  {
    "url": "docs/Vue/Communication/vuex.html",
    "revision": "0a261b3ee533df5c9e0b6241edca4cba"
  },
  {
    "url": "docs/Vue/Directive/debounce.html",
    "revision": "d8d5f6278572a6a5c1aafa69b96822ab"
  },
  {
    "url": "docs/Vue/Directive/hidden.html",
    "revision": "980e13a3f33efb060b7d86c9bd56bf66"
  },
  {
    "url": "docs/Vue/Directive/permission.html",
    "revision": "caf48f509f870239f2cc58582a5ffe2d"
  },
  {
    "url": "docs/Vue/Directive/throttle.html",
    "revision": "b5bf03877fef860056d7afa167d20e3f"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "2137aa38bbebeb4e3333dc9787a471ae"
  },
  {
    "url": "images/avatar.png",
    "revision": "aca13312fa1be3b96924d12833b23c65"
  },
  {
    "url": "images/hero.png",
    "revision": "d47da165832465e7ef07735f8d0e28da"
  },
  {
    "url": "images/logo.png",
    "revision": "d47da165832465e7ef07735f8d0e28da"
  },
  {
    "url": "index.html",
    "revision": "99ab6e61102018c139ed48664a163072"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "6b42a20b371a48b8c9320d5f2d15134a"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "584a89febe627e2dcb2e2c7709cb6e82"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "69a4c4a54cdd16dcdda74b254944e09c"
  },
  {
    "url": "tag/index.html",
    "revision": "e4a4b4fd6db9be756ee04a954636f93d"
  },
  {
    "url": "tag/Vue 通信/index.html",
    "revision": "df3c8ac11cddc34b55cd13a1c1226f15"
  },
  {
    "url": "tag/Vue 指令/index.html",
    "revision": "4c3bb8d012607071ac5cee752bdc5716"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "50b30382886cad2f7b4f44a515b4233b"
  },
  {
    "url": "tag/Vue/page/2/index.html",
    "revision": "dd5199b475180be3f14793efc97c51ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "01b35cfed72c773e774b6b242bbdc0f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
