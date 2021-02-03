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
    "revision": "ca20fe8cba72ef48a4ca30b1180aafd0"
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
    "url": "assets/js/12.8a57bdc7.js",
    "revision": "315f23c3b0991b27c052698bc1b09bb1"
  },
  {
    "url": "assets/js/13.c847cd7f.js",
    "revision": "aa0f4ff81ed5b363f70334fabb0d9931"
  },
  {
    "url": "assets/js/14.ef9eb2b8.js",
    "revision": "34dd30bb8a4620cbe489af1f43bbd080"
  },
  {
    "url": "assets/js/15.ac9c237c.js",
    "revision": "c3d3bf189ed09c08802aaf1f30d739b0"
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
    "url": "assets/js/18.b581bbaa.js",
    "revision": "f4eb85e7acf264b8feb1e671c55ecd7d"
  },
  {
    "url": "assets/js/19.31a5889b.js",
    "revision": "d26432dae64f56a394b492ccac521fc2"
  },
  {
    "url": "assets/js/20.4f7dd2c6.js",
    "revision": "b6ba7eccbdc491be40eb5434a09ef29e"
  },
  {
    "url": "assets/js/21.47f871e3.js",
    "revision": "14802a87e1f245acca87acc9bc9e18e0"
  },
  {
    "url": "assets/js/22.101cb657.js",
    "revision": "f89339f3a92da31696bc014136cfa039"
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
    "url": "assets/js/app.7ae5e194.js",
    "revision": "720d58f3202598d2f7610aae8454e214"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "15392dcc1f5f947c4b261b05301897ed"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "9f130eeea8b809fb8a4ef0edef9ef039"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "c7b09bc76945f049574b5092576e375b"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "b11c6bc431a84b7ea6d1141d9af40bff"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "f50af1dcfd39d64df2f0f5ee3792ba18"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "8681707a3294f68ab07a1a76f0de21b1"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "366355bdde147161723fd06ce30b9082"
  },
  {
    "url": "categories/index.html",
    "revision": "03273c50b28989373789aa1ce67fdb7f"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "e5c8f32abd9068b5de5fff3171cb0b4a"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "b14c48e56cd723bc07c7239a096c17cc"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "63d74f5086c78541b3650f557ae45d0b"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "c8b84e553481755370908727529e1e9f"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "8171c211e96332609705372021304e7c"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "f6a5dc1bf9b3572d13d9cab4854a1191"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "ebb2dd2ecbfce4950fbad4ed7a006514"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "78e89f061faca38ca61062e443362439"
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
    "revision": "021d320105caab78bd126707e6a4a5c6"
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
    "revision": "f8d434999bd18386ebaeea359c90065b"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "4f8d2e069b51f8bc17a73f4a993d23d0"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "f38c71ba181868e62785e9621562d180"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d9ac85e64748d856121dc1b1fec1ec66"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "cf9c48b094327fe1815a008336bda45a"
  },
  {
    "url": "timeline/index.html",
    "revision": "b03c5de947b8023d59540f54c5757a7a"
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
