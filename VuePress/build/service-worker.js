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
    "revision": "64b4390443f9d6cc3a6cb9068e3c0ff8"
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
    "url": "assets/js/11.9adcb1f9.js",
    "revision": "6b538981f1a2c1f54aa7ea1b5c1abe95"
  },
  {
    "url": "assets/js/12.c7bb31de.js",
    "revision": "a840c34737be9596cbbcd876a382288d"
  },
  {
    "url": "assets/js/13.82d970cb.js",
    "revision": "6020ec30986c2788bd87ecad7159fb11"
  },
  {
    "url": "assets/js/14.06d93a29.js",
    "revision": "7ffae9180e0d650da8929253a6e926cb"
  },
  {
    "url": "assets/js/15.cce87948.js",
    "revision": "5b5c90dacd0d9a993256ca4fa675a4ac"
  },
  {
    "url": "assets/js/16.b65699d0.js",
    "revision": "01325c5145604e0ab05b6429f825aedc"
  },
  {
    "url": "assets/js/17.fc3957cb.js",
    "revision": "f98565813888b8dc707b0b86746ac969"
  },
  {
    "url": "assets/js/18.278b2380.js",
    "revision": "f4eb85e7acf264b8feb1e671c55ecd7d"
  },
  {
    "url": "assets/js/19.f34dca7b.js",
    "revision": "21c3fa410d2c7419808fe42b226d988b"
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
    "url": "assets/js/23.55899b4f.js",
    "revision": "b6dceaaf0ef7ff1e2bb95c18f62fdfeb"
  },
  {
    "url": "assets/js/24.a91d0887.js",
    "revision": "34dc9d79bad2e54eafbb49b8d36efdb9"
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
    "url": "assets/js/app.eb2044d9.js",
    "revision": "d5e46009bcaede0d15ea4b62d35f9004"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "9a9302caceae85d9eb108f066b0e5352"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "df2ebe593b94454e4991756dfb948c66"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "067ca4a595ec18db38181c65a267def4"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "3884f82ec9c87327b916ea9358df6300"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "2c4836bd7edec64d32c6b8c119e0e470"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "4d1b93ad9b0a36c9509e995ec2bd7b5d"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "a0bdc05ff2e9c379a01709d45cfaf04f"
  },
  {
    "url": "categories/index.html",
    "revision": "bfbab052b9e0adc68280d2b473cd0eb0"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "856cb6354086d1ff44acc6af7868d1ca"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "b092de4b967f0c4fad078871f9a5b015"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "6604b17e25066165a1a80d7b9fc84736"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "1e6bab4cdccd57576b56c0d877dc86de"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "274a6af3028fc4b98bc4da64383a038f"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "e9281a1cc60032da9b593759b9c627b1"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "70fb7052e77b46558bcd424e5a313a77"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "f1449bb5d4d06f12cfd9b8ea6a54ae87"
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
    "revision": "5ac4fb06f33c75feb9cd1872117bd6ef"
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
    "revision": "b41a3bce7467ff75a1b9c745ff19ad93"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "60b844a339d2468411eb1de8d5ed50e7"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "e41cfebd17be17077dcc69d8c77be902"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d382e8ab11b9198f9b7bf8fc806efa6d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "ffd64dfe77c7e3dd59fbd25ecac3f35c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6f55beca529a2b283001a6e5c971886"
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
