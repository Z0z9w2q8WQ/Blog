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
    "revision": "b33513e3b735daa32cb4409e2446ee0f"
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
    "url": "assets/js/1.dd370494.js",
    "revision": "9e1592286410c5f9c98af2b4f3a11d43"
  },
  {
    "url": "assets/js/10.dbdec4a2.js",
    "revision": "19eab4a895db2e27a791d72f4f94aadb"
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
    "url": "assets/js/13.66691e21.js",
    "revision": "4bf2519249d15d0074c462a4608518bc"
  },
  {
    "url": "assets/js/14.8b322fd7.js",
    "revision": "5037bcefab0527cbfa34651d0eaa89da"
  },
  {
    "url": "assets/js/15.8344d448.js",
    "revision": "66d3f9543f5b070053d3e614c7abd540"
  },
  {
    "url": "assets/js/16.ca5f7128.js",
    "revision": "c1b5add1fcce918e242568c1f582e111"
  },
  {
    "url": "assets/js/17.38536759.js",
    "revision": "62e3d988edd13836862fd4bcebc29c2e"
  },
  {
    "url": "assets/js/18.ee8900ec.js",
    "revision": "e6b20406151678a70555bf4d26790911"
  },
  {
    "url": "assets/js/19.66c3c6da.js",
    "revision": "b5027c84eccc484eb5276465e5363043"
  },
  {
    "url": "assets/js/20.94fa05e9.js",
    "revision": "b041016d91785e7020c4f55073a2ebb8"
  },
  {
    "url": "assets/js/21.dec7591e.js",
    "revision": "84c6a60b9d5e154ae51a88cd220487e5"
  },
  {
    "url": "assets/js/22.5e2f3749.js",
    "revision": "fd81bf5bcdef1fff78d096470c74169f"
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
    "url": "assets/js/9.dc3dd293.js",
    "revision": "c562bd24fa7e5180db3bc513f85c22a6"
  },
  {
    "url": "assets/js/app.3bd110ef.js",
    "revision": "021d9f1af64a763a0f8a8cf892e70b6d"
  },
  {
    "url": "assets/js/vendors~flowchart.8b59b666.js",
    "revision": "d1d978e32f3ef4709d3695da1ebc6f72"
  },
  {
    "url": "categories/博客/index.html",
    "revision": "5c346540796122c6e023cb7453a7ffd2"
  },
  {
    "url": "categories/模板/index.html",
    "revision": "5d379903b9bdfcf1f3e98abadc4cf7c4"
  },
  {
    "url": "categories/index.html",
    "revision": "e93c9347f481910f7a2b78543f6d3e3b"
  },
  {
    "url": "categories/Vue 指令/index.html",
    "revision": "9db0f2122c8ab9187452f1a206864e2a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "259294162a2195a6c55c6a4039b9e86c"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "95294fab63978dbbcf14cc72fbb58088"
  },
  {
    "url": "docs/React/index.html",
    "revision": "7070d5ace462c11235d0139b51315497"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "c6cd2d240c01aee20b5261b0e24e710b"
  },
  {
    "url": "docs/TimeLine/index.html",
    "revision": "71ab18ead94d086e8522f566b2756f43"
  },
  {
    "url": "docs/Vue/directive/debounce.html",
    "revision": "4a07de3282aeaef2f8a02e1d9cf7320c"
  },
  {
    "url": "docs/Vue/directive/hidden.html",
    "revision": "0ddc408183b6b24b5f40315d51c0b25a"
  },
  {
    "url": "docs/Vue/directive/permission.html",
    "revision": "c91e48787e2399023a41a12516fe2e17"
  },
  {
    "url": "docs/Vue/directive/throttle.html",
    "revision": "d1ef09dde8a51ea693a38888a802917a"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "16aeb8b95647059f1e59f6699117c21c"
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
    "revision": "2f41e9f794f9d4adb706b21292e0bee7"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "6b42a20b371a48b8c9320d5f2d15134a"
  },
  {
    "url": "js/sidebar.js",
    "revision": "a19302a47a363bb439cc1d671192be85"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "aae713a0b8bcc03c97823b06498d5d62"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "85b9ac561317055574c3b0edc3e5e875"
  },
  {
    "url": "tag/index.html",
    "revision": "7cbde75d7dd6a524cff978a7a49163c7"
  },
  {
    "url": "tag/Vue 指令/index.html",
    "revision": "a46e31bad5acb08ff39a7a617ec0410e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ddc7182e7ac4df749b2861f66e172650"
  },
  {
    "url": "timeline/index.html",
    "revision": "53756b9a706900c732aab805c4d23c9e"
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
