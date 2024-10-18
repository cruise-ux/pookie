'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "68e18e64894c2a90a464b44e1cc1a3f0",
".git/config": "a662cb85ab6bc1bd5666cc7c359cc308",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6258dc2cddda91340f6a53f80c1044e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cdb1047397d163320e967a503a2bbacb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "473356c6b4afe7d0697f9e009cfc6143",
".git/logs/refs/heads/main": "37719965c0399f9f39dcceb61a0f20db",
".git/logs/refs/remotes/origin/main": "64f84fe9573e32c824ef807f9d70ed2d",
".git/objects/03/11cdc5667c9ede307ba71b9420aa28a1aaeffb": "f89cec56a53cacfd005d270df294f3f6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/965b6b4e2feed71f673375fee7fe44c39dcba5": "8a4c17e119426c8eb0888713dbf56bbc",
".git/objects/17/4fcf2e20d15e1be172fc184f2f1d06ab8467e3": "7af72169ce475a902e6d02a9e4bf19de",
".git/objects/1d/e54d0a6e0180199d93ff4bde68b81d7b48e4cc": "7fea05771da4e52b99849ca73b05f8fc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/3d087e447f8a6c34f15ed39d655327b6fc3c74": "e9c38a5a3ecaaee3520aa3c165be6813",
".git/objects/2c/51d3653793c963278bdd36ea4558ae1402b6af": "a409270f9f25fd7af092cb3631dd3281",
".git/objects/2f/3dd03fe7dae8d0489256d671b08e972e955492": "92c02d931d801f67320f882c4ab2ed34",
".git/objects/32/1795e879a17a0521e9a5d26388dc4fa2ef4ec4": "aa541111b61c6eb2d306c3c97cc75218",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/20e1cbf734c7a6761a348796f33fe5010c2b26": "f947eac706b8bb26c91dbe807802f24f",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/3d1f950b17301c38cbc869c35dfc7faff1ad06": "e0bf4bf9a672fd21c0d7439d5cb550cf",
".git/objects/5f/48b7695a8a8ca19cea01ee978eb5cb79fa111c": "3feda2e1c66793f491feaf085d799b44",
".git/objects/60/f146996da6be177e532b125e675c4a96b93599": "6dbffafbed994310e72d448cfb5efadf",
".git/objects/63/02ff5fab1e1e44f236b6494069943e79619605": "5aa0d49744f45f2ef300c4d2f156cdcf",
".git/objects/68/da76f32ccd8788caf6c59ba8e6c513b13ef538": "0c11103e5bf9dd7f1294db3d56e0ab2d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7a/f575e2d7591b441d89ad60093833b4e7d4203d": "e37918388a6e84139bbc69b3a86f8b42",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/3a11f50ab0ef78fccd1c31a35d12b0fe4ca9cd": "dd00a4dd71c65b78302fbe0483a08710",
".git/objects/95/5c74e6cf0d16ffafb9db4291414b99c765feb2": "d8ff70f1c7aca228c83bf01e0a71133e",
".git/objects/96/5de86fd34be8889afae03e8cfcc0036f772b44": "fabc16fb64b3bd754f08ec2c37485807",
".git/objects/98/15b67827eeca114b02e4b5f19fccdca19c8dd6": "85804034067101a366c29a294d36e506",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/9d60faf9d368d24a399b532659582da0cc701a": "e0567ed16c97538dcdccfcbf4260c66b",
".git/objects/a4/cbdf26751008fdf3914efbd9426ed674abc996": "77f1ca2c90af5ad011757edfaad8b30c",
".git/objects/b1/13fd70a363611056b0ebd78dc2f4b0b7df50a2": "124c89dc0813e5de8e7beb2adbbb59c0",
".git/objects/b1/2d3b79c68d78d1f116b6c6a7780ab642e09e95": "9fdf77a9019f51d6d31af8b89cb01815",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/5f9fd36a06d2120cbb46f5d10781d75a613a3f": "ab6650cee10a2ddc28ff3b661139326b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/b233be67ce45789e0948a7a1359ad9ffda9d39": "233855fb04fc0921f647050ebda29253",
".git/objects/c1/37da3872710160ba3bbfc79c1450a31251f569": "98a5c49b5dd7eeda39ed2dc5bbdb293c",
".git/objects/c2/33c966ae6eb691df35d6ecb45d01c175845f9b": "01b8a4cbfa4d5d47edbd47480b19c60f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cf/2a384732403c308f88b229263521b93de1f40c": "b77dddcbfeacd57a07d20e155f01f278",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e43f9b511ff391c442db293662975d7c77f461": "a96a37e2fa6eb55442e942ed7d2b3dd5",
".git/objects/d9/48d4d23d3f6931ca786eb6a3f24c044f0060e9": "0fd7f8e134e4567947cf123a5ea87742",
".git/objects/da/5f26b61f7704970c56f6ccc1dd45c6b418aae5": "1485fa1d5b74d1be9de167fd85fd11f2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/393ed63ea9f38cec42ccc0111fba60af0a8125": "d3821ab12b9188f6bca8e36164c3a525",
".git/objects/e2/5b0129350080652a1161e84131da5fa188e492": "5e94b475e99216bd41270e91d9c5f942",
".git/objects/e2/7526cb57e07d9c4d31fdb11a3e91ae8ca0e3d1": "212c08cf87a75fbddc54a33b2a73c76b",
".git/objects/e6/f0b1cc2c70c05e363c9ca57f940b8b5d31e82f": "f82c8eec4e3217a7cc2b715be21762e0",
".git/objects/e7/4179771b38a4155ff0a9300f5a23516609c646": "ec6878e6e4fad3d9dd21f8f0311d527b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/424719f5da16432172e9560e5c467a3b4a5a6a": "9ea873753220ff356d17315c8e7de43d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/ORIG_HEAD": "ab2131718bfe9b3eb441830d17405c20",
".git/refs/heads/main": "1a31f32c345fd67d0eaffae68b9c1d6c",
".git/refs/remotes/origin/main": "1a31f32c345fd67d0eaffae68b9c1d6c",
"assets/AssetManifest.bin": "883daeb8dc14c5fb93fbc651a13e7890",
"assets/AssetManifest.bin.json": "f69800208cc7f032cfff3ff7d2cea682",
"assets/AssetManifest.json": "27b46fba3179c9d7be159dcdaf23fff3",
"assets/assets/another.jpg": "5f718656e56d65560e72641d137383a7",
"assets/assets/loli.jpg": "e782d7c81ada39b64e35d201a719d3d0",
"assets/assets/love.jpg": "3ada202e2ceb76d383cd0d005cbdc475",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "992db8458ceeb6743aae6247400b9ae2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8083dfbddce3091830092ed571fa32b3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "694967995e9cd755bd277b8ffafa6721",
"/": "694967995e9cd755bd277b8ffafa6721",
"main.dart.js": "0a12278979fbb1bd95e8a4f967854dee",
"manifest.json": "6d26198caee47f706ff71cb3a2b20a63",
"version.json": "0ba8f043675a650caeb4d6d965dd5f38"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
