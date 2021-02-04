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
    "revision": "f6cbd3d5d0e07c8bcc18a5e4e92d168f"
  },
  {
    "url": "assets/css/0.styles.647fccdb.css",
    "revision": "605688a88d34b1fcc77c06a6ea6274fc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3e4124b3.js",
    "revision": "5efe3b20f64ef3d0f97287ead6e71326"
  },
  {
    "url": "assets/js/10.17be72d5.js",
    "revision": "a393d5377583daaa06e82d8683cb05b7"
  },
  {
    "url": "assets/js/11.2a29b157.js",
    "revision": "a94bfd8f811b59868e97c48b4c4acca6"
  },
  {
    "url": "assets/js/12.8a57bdc7.js",
    "revision": "315f23c3b0991b27c052698bc1b09bb1"
  },
  {
    "url": "assets/js/13.c847cd7f.js",
    "revision": "aa0f4ff81ed5b363f70334fabb0d9931"
  },
  {
    "url": "assets/js/14.0457d7ed.js",
    "revision": "d483aa50209a6f67d5f3ee8d1fbe61a4"
  },
  {
    "url": "assets/js/15.1d075bfc.js",
    "revision": "c870b02fe2c4265b04caad1051dbf9e0"
  },
  {
    "url": "assets/js/16.c5f7af8d.js",
    "revision": "a86fe9f86364c171996bb63d7c2732c1"
  },
  {
    "url": "assets/js/17.7afa7dcd.js",
    "revision": "c515de48acd841800fab59b8b273f883"
  },
  {
    "url": "assets/js/18.90fcf58f.js",
    "revision": "b2247534f4ce161ecb2874cd16e8169a"
  },
  {
    "url": "assets/js/19.5f8f3af9.js",
    "revision": "240d260e4469b5e0cbe9c7debbe1f8ff"
  },
  {
    "url": "assets/js/20.176886d5.js",
    "revision": "857e002fc6b2db04e5f63ffe5b6fb503"
  },
  {
    "url": "assets/js/21.b6475d87.js",
    "revision": "cda4db6c05b2de34aca35993d93b8d7d"
  },
  {
    "url": "assets/js/22.cf2c344c.js",
    "revision": "984253107b44452a61fa2ac897c22913"
  },
  {
    "url": "assets/js/23.3783eb56.js",
    "revision": "51b2b1af33fe3c8be18f682188cc284c"
  },
  {
    "url": "assets/js/24.60b3dba1.js",
    "revision": "023db71f845c50d990b6c840da10937d"
  },
  {
    "url": "assets/js/25.36421510.js",
    "revision": "88e7a6051c7c07fd238248c08f8cbbf8"
  },
  {
    "url": "assets/js/3.dbf85789.js",
    "revision": "7894588781307373b64bb2a5f20bc3f2"
  },
  {
    "url": "assets/js/4.65068e34.js",
    "revision": "9e53c2c061aa786b619deaa3bdb38346"
  },
  {
    "url": "assets/js/5.17663a2b.js",
    "revision": "b25c236f9e1a36db9510b04d80f95800"
  },
  {
    "url": "assets/js/6.f96082b7.js",
    "revision": "70f24d3a643763855f5a6a435379fbb2"
  },
  {
    "url": "assets/js/7.34dcce9a.js",
    "revision": "c00bd211a930fde9668b6e04376e7902"
  },
  {
    "url": "assets/js/8.ab4880dd.js",
    "revision": "423f61142e885e8d0c5e5af676e88512"
  },
  {
    "url": "assets/js/9.85fa97a8.js",
    "revision": "3a985166ec8f83fd8105f0b1080e158a"
  },
  {
    "url": "assets/js/app.2739cdf6.js",
    "revision": "f6f2a8186074311104215fcfd2b148ed"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "f9b221604d21707dd95145ca31547bc7"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "74a842498730e9227dd17c53cdfa880f"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "1a3496fd93c569d3a68662929abe5022"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "5bed77db1fd053f7eafb389d54e670f7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "e7294b5cd55d647f95421d2c87c9c127"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "ef4cbf24520ccdc9e0cc3ce276e12fc7"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "b33e14a1358f584bbd54c2e2dc369228"
  },
  {
    "url": "categories/index.html",
    "revision": "96d3aed100ea9db66328872e04c30e9c"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "6bc79f8c2fed26f2fccd019c5359b58d"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "f78cf323e5c0bd3b0661ec394da7b36b"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "8c1835db62dd3dc4dab199538ded67a0"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "06dce22edd77f5bc33033b90f399301c"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "61853979a7b47ced7d1a764f11bbb79a"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "a7ff716cabbca231ad493a7a17464fc2"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "a686c33407d44ecb653f40c4e54b4355"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "e553c8a2da9335b624ffe943995b5761"
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
    "revision": "428ad3bb662be2dcf311df33b3ff015a"
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
    "url": "tag/index.html",
    "revision": "4b8ad262170f9eb3869cf660b90967a7"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "3404dd12dce2d688e5229ca609b68f9a"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "8bb6643f759d47e07dfc5d92e96724ad"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "b57b2c3a2277940a5349a161ea995b70"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "7157bba37005fa2a3445d93e57882ff8"
  },
  {
    "url": "timeline/index.html",
    "revision": "16e4c175135a3e2ec2da72f119c00a95"
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
