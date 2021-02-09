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
    "revision": "b1d23b649a566d2685a2c57087eb0d9e"
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
    "url": "assets/js/13.a3b99664.js",
    "revision": "b77ae7ad5c4acf0d23a178c7ad32788b"
  },
  {
    "url": "assets/js/14.3b0edefc.js",
    "revision": "9324980eebde9f573c028406adb0a3f8"
  },
  {
    "url": "assets/js/15.37242b00.js",
    "revision": "42b2322f0885a0db9351e9ce6d64ae66"
  },
  {
    "url": "assets/js/16.2bd07d73.js",
    "revision": "10fb0bc65b0dd1f4b565da536a40a274"
  },
  {
    "url": "assets/js/17.fd1b2e0e.js",
    "revision": "3e9c3d21aeef69edbf397bbac4fac53d"
  },
  {
    "url": "assets/js/18.efc18595.js",
    "revision": "3ba99ff22146815a379c9d2ea0b877e5"
  },
  {
    "url": "assets/js/19.da1baad3.js",
    "revision": "d4a5743605d2f0277daeb4e01a5151ae"
  },
  {
    "url": "assets/js/20.f5c8b25e.js",
    "revision": "4e7c98514c46efa2f71044bdec0099eb"
  },
  {
    "url": "assets/js/21.381ad95e.js",
    "revision": "df5b7c1683e8cfef069fc049cb2b125e"
  },
  {
    "url": "assets/js/22.b8614af0.js",
    "revision": "2d7bc6fa0a6a97c1162b1f98074ce01e"
  },
  {
    "url": "assets/js/23.d2bf4474.js",
    "revision": "273c8e4f37f36016bbedf4020077a239"
  },
  {
    "url": "assets/js/24.5c713d47.js",
    "revision": "738c6c4775441fb023dbb902d6fd97c7"
  },
  {
    "url": "assets/js/25.66b38e71.js",
    "revision": "cc5f0c34d2b1fbf8f5220f20130710af"
  },
  {
    "url": "assets/js/26.082e9a3d.js",
    "revision": "09b29b8bbfd379272b8c9345b3c2c644"
  },
  {
    "url": "assets/js/27.69bbb324.js",
    "revision": "6f4dc69790f92331c1020eb818ce9122"
  },
  {
    "url": "assets/js/28.847e13f9.js",
    "revision": "13fa2985622967bc3975fa24bce4fa27"
  },
  {
    "url": "assets/js/29.8f1ef4f8.js",
    "revision": "3b6166910600ba6ffdeefc4e00e9cb26"
  },
  {
    "url": "assets/js/30.b9b27d57.js",
    "revision": "84846f33ce029a40d8941113018a1951"
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
    "url": "assets/js/app.cce7fa88.js",
    "revision": "1c923c45b82a1be03a922ae071f51139"
  },
  {
    "url": "assets/js/vendors~flowchart.8b59b666.js",
    "revision": "d1d978e32f3ef4709d3695da1ebc6f72"
  },
  {
    "url": "categories/模板/index.html",
    "revision": "2a299ab514af7e9108ba6bd3a78213d7"
  },
  {
    "url": "categories/index.html",
    "revision": "42804226e1d7dc8fea6f3d1769da4112"
  },
  {
    "url": "categories/Vue 通信/index.html",
    "revision": "086589ec78a13ac63c337b4787b49314"
  },
  {
    "url": "categories/Vue 指令/index.html",
    "revision": "b9a53d6a20b8c252e022d8e1b8d7450f"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "44ebde810fcdf61ab0f39229493d8467"
  },
  {
    "url": "categories/Vue/page/2/index.html",
    "revision": "fa24e3c1bafa4e65f2037b6ef58d757d"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "599c155f83caeeb8805473937886c0c5"
  },
  {
    "url": "docs/React/index.html",
    "revision": "a7c2268f8a67b19793e113ca635ed73e"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "a3bc042bc00ed18b0f79faa93c5f656e"
  },
  {
    "url": "docs/TimeLine/index.html",
    "revision": "f0ca5cc5512fda1b3eb85a9bb64a746f"
  },
  {
    "url": "docs/Vue/Communication/attrs.html",
    "revision": "5f000d23cfd48dfb9a7368b4d34d4650"
  },
  {
    "url": "docs/Vue/Communication/children.html",
    "revision": "d629351b8a3a108baa844278af45a02c"
  },
  {
    "url": "docs/Vue/Communication/emit.html",
    "revision": "7bb17e1bc92cf7d0fe3849475fd882ed"
  },
  {
    "url": "docs/Vue/Communication/eventBus.html",
    "revision": "15db7c4cfba3dae2bc079e4d315c9efc"
  },
  {
    "url": "docs/Vue/Communication/listeners.html",
    "revision": "d3128c5457152583c4848f785543e2cf"
  },
  {
    "url": "docs/Vue/Communication/parent.html",
    "revision": "aa20761e729b94f3efd8b08a0e0edc58"
  },
  {
    "url": "docs/Vue/Communication/props.html",
    "revision": "2b48632ecf990a6b5e9c1225d319bfe2"
  },
  {
    "url": "docs/Vue/Communication/provide_inject.html",
    "revision": "b2a6a068d2239a4a30a7f558aee3e173"
  },
  {
    "url": "docs/Vue/Communication/ref.html",
    "revision": "6f588ce37f1c5d1692f79a3b73269487"
  },
  {
    "url": "docs/Vue/Communication/vuex.html",
    "revision": "dfbe279fb9d961a786c323fa65466af7"
  },
  {
    "url": "docs/Vue/Directive/debounce.html",
    "revision": "bebb693e5df193c17a55a40b58cd2c41"
  },
  {
    "url": "docs/Vue/Directive/hidden.html",
    "revision": "2aa5b7408135dc6e444c3fb49d1c1b92"
  },
  {
    "url": "docs/Vue/Directive/permission.html",
    "revision": "05aa2a6e64fe57d88cd61a31b94397c6"
  },
  {
    "url": "docs/Vue/Directive/throttle.html",
    "revision": "824e92cbe3d706e17d726fd536b14428"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "1a94286829829e8b1b17a839606127a0"
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
    "revision": "9d110cbddbc0294310977a78cbab6a80"
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
    "revision": "d3cad0e180d6e7902252bed61de14ff8"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "b5d4c5767aae0b189ad2385210594859"
  },
  {
    "url": "tag/index.html",
    "revision": "fa64e7498b25988f2b84c77b544a53e9"
  },
  {
    "url": "tag/Vue 通信/index.html",
    "revision": "496d4bea80d0efbf8271353360bf3f0c"
  },
  {
    "url": "tag/Vue 指令/index.html",
    "revision": "a69079b9963b3de9fe58f165ac9f7388"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "d822072b8474d858b909a387bd9de85a"
  },
  {
    "url": "tag/Vue/page/2/index.html",
    "revision": "2948406b86a668a9bdebca5920f512de"
  },
  {
    "url": "timeline/index.html",
    "revision": "92565fcabcb4229a0be17f4f35de997a"
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
