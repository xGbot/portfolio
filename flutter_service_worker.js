'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a20106452e275e0b0fc6a6717285f1ae",
"assets/AssetManifest.bin.json": "33e51e4a96213f9a6ff1cde76d7d6dc0",
"assets/AssetManifest.json": "c07b29f41639beead74b28e77d19bebb",
"assets/assets/about/aboutme.txt": "e5be83b29a9638628ec3a64a2c8dccff",
"assets/assets/about/me.jpg": "bfd0a725aa44f066776d84470f907840",
"assets/assets/career/first_career.txt": "e6e7a017263c8fddb8ea8f96807df371",
"assets/assets/career/fourth_career.txt": "8e44082d04e39014c2f07a1a0d69560c",
"assets/assets/career/second_career.txt": "f491a977ff7ced5653b187ec06a016f5",
"assets/assets/career/third_career.txt": "9108894f80bf6c26bbdaf7d02e9a54a4",
"assets/assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/icons/linkedin.png": "0dfdf900b4949bfe7a038c3121e99376",
"assets/assets/projects/BuyHub/buyhub.txt": "21cea034aac93b56e9ef61e8f4f9bd50",
"assets/assets/projects/BuyHub/BuyHub_1.png": "6c1a3124164e79027006891f36388bc6",
"assets/assets/projects/BuyHub/BuyHub_2.png": "960edc724307b647e64427d7c9454311",
"assets/assets/projects/DistributedMusicPlayer/musicapp.txt": "605a529ac5eb476b541b35452ad4b77c",
"assets/assets/projects/DistributedMusicPlayer/music_player_1.png": "463f9a2285f7705ce7ac692a25ab8407",
"assets/assets/projects/DistributedMusicPlayer/music_player_2.png": "be92304b9366ff17dca94fd12a4c7194",
"assets/assets/projects/HotelDBSystem/hoteldbsystem.txt": "9933d16517edfb7b7e7656b9fc1fa0fb",
"assets/assets/projects/HotelDBSystem/hotel_dbsys.png": "5135dc18dc7311aca89e569ecd44e94c",
"assets/assets/projects/NoteMe/noteme.txt": "3f0338d5b980dbe747d9391ebb35f41b",
"assets/assets/projects/NoteMe/noteme_1.png": "002090c2471047fdeeeba74a8ddeb124",
"assets/assets/projects/NoteMe/noteme_2.png": "4fd9aea74a5ceb3ab643f4229a24fba2",
"assets/assets/skills/cplus.png": "682c3fddcab3e6c9f5d37c5eb6d9e80f",
"assets/assets/skills/csharp.png": "499168a5b048a4f8904fbac238bd9895",
"assets/assets/skills/firebase.png": "de1546f8bcc43f9252f70ff7509e468b",
"assets/assets/skills/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/skills/git.png": "3646ba479abba83300728055e1dcb42a",
"assets/assets/skills/html_css.png": "3b08eee473a57ee4e169e2eccb24b8d1",
"assets/assets/skills/java.png": "93a86e72cf37bc6430e5acc06954247d",
"assets/assets/skills/javascript.png": "73395a03d7891820d5fb1d7fcbcaa651",
"assets/assets/skills/mysql.png": "c941a1be913227b0ede871c24c52541e",
"assets/assets/skills/php.png": "2551467d6fb16770a75823e2a88ad2a7",
"assets/assets/skills/python.png": "7ee9d69e77a54aa45633fe705e772c6c",
"assets/assets/skills/react.png": "d2cbe9901351debebde49b66e675b272",
"assets/assets/skills/strings/cplus.txt": "3234eb58b5373a2acdcf83f5e7abf018",
"assets/assets/skills/strings/csharp.txt": "c3087475cacd79bcf414869010fe52fa",
"assets/assets/skills/strings/firebase.txt": "469882c736e2576410afe83de351d260",
"assets/assets/skills/strings/flutter.txt": "7d5a959e7c39e6bca2bb53e15f8e508b",
"assets/assets/skills/strings/git.txt": "f23931cafda214e5c64a7a5000dcc671",
"assets/assets/skills/strings/html_css.txt": "ed29209fa876b82b115b6a4dfa50944c",
"assets/assets/skills/strings/java.txt": "aca2c98f35ce480e0d8150240990f45a",
"assets/assets/skills/strings/js.txt": "227eceb7e8d49c99f7a20f3b28510b37",
"assets/assets/skills/strings/mysql.txt": "77aac5f5b9972edda811d692fe0d4f49",
"assets/assets/skills/strings/php.txt": "2ff2b55416dd84435b6fc9b206351e19",
"assets/assets/skills/strings/python.txt": "526f105ef6f0ad51d84f220cf4404cd1",
"assets/assets/skills/strings/react.txt": "5630baa744e8dc21982efc875927afd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3061ede55f506ebcd131d693b9eb8884",
"assets/NOTICES": "d75a5203662855d936b6aeef0a8db108",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "bfe5b35e2e324e98853299399ad9098e",
"canvaskit/canvaskit.wasm": "3e05c126f3b05d3e58cfacfbdbbc2efb",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "5781e1286bd92ff76563a7c4743348c6",
"canvaskit/chromium/canvaskit.wasm": "82387ece3381c2b46a0629fd9de50f00",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "016a880a747a593960785246eab4d7b9",
"canvaskit/skwasm.wasm": "b8708f0f4a96eeb9b841e8dbc9e66f9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "060781711a8ccb96d018669ba6e6b888",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a970a43ded144417e3ae21a3fe053d85",
"/": "a970a43ded144417e3ae21a3fe053d85",
"main.dart.js": "5ef790e34136d61d635dfdb00889a284",
"manifest.json": "2c266787b75e983ffa388c5d56770932",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
