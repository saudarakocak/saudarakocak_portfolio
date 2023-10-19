'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f69de25504e33ca5b3db08400e32d15d",
"assets/AssetManifest.json": "8bb78c67196d2e2b1c4ceaf711b5c653",
"assets/assets/1.png": "079800b5832688cb6c439ec451aa7375",
"assets/assets/10.jpg": "486ab9944dbc14ecc40a5d2fd0e8df80",
"assets/assets/2.jpg": "9a91d363221d983665b240992e5ea60d",
"assets/assets/3.jpg": "06590aa90c60b3db90b8d11d9d7b9a8e",
"assets/assets/4.jpeg": "b92c2f1f8e29693ec4a8a190ff797ebe",
"assets/assets/5.jpg": "bd7f8b52c684684cef78cdbdab582f7f",
"assets/assets/6.png": "b777e50f1a222ba2e95a586da37223c5",
"assets/assets/7.jpg": "48f929164b78c4eee4b683ab357afaee",
"assets/assets/8.png": "2345b28f9ebb24e697c23b4c825aa9dd",
"assets/assets/9.png": "ad32a461f916a7931e2237ad22e473eb",
"assets/assets/aplikasiBencanaAlama/karakter.png": "38fafbad6bb8c2b643345047e04e04a6",
"assets/assets/aplikasiFotosintesis/icon.png": "d067c941706d3dad0ec231310e4de709",
"assets/assets/aplikasiRambu/icon.png": "9cc4007b8f87ed55b09dac34c7b9b4a1",
"assets/assets/blockBlaster/1.jpg": "dd6449ba496adbccd9ad4553411ff18b",
"assets/assets/blockBlaster/Icon.png": "5c0ebc5f85a99c497986d5b190f053b5",
"assets/assets/blockBlaster/Thumbnail.png": "4e23b859f5d9fad7700be28076bf8294",
"assets/assets/blockBlaster/turoial%2520UI%2520fix.png": "47acb65009b605ec9f4b54a34df409a3",
"assets/assets/blockBlaster/turoial%2520UI%2520fix2.png": "61dab2fc0bbb559e9b9e01bb72295e76",
"assets/assets/blockBlaster/Tutorial.png": "af18d7188b0a65ae8616c4fe6d45a3a3",
"assets/assets/Csharp.png": "28bdc3a1421aaf4a73350a65003e6b7d",
"assets/assets/Dart.png": "10f5a553cbadc92e154be55a0e03f027",
"assets/assets/dreamed/1.png": "9ba5c22b4af8fd90227425f7fafafcfb",
"assets/assets/dreamed/3.png": "59289078901a7fa98609866f741aba7d",
"assets/assets/dreamed/Icon.png": "27ccae6bcef7facc68b28e0c426c9e45",
"assets/assets/dreamed/Tutorial.jpg": "6a29b8ac7ad88ce12d4ee64eb6f4fe6b",
"assets/assets/figma.png": "c1c05f5f76b79b5c6aab7d8b6e4fa559",
"assets/assets/flappyLokan/1.png": "0ea6a0f145841b8c23d829dc97b0d4ae",
"assets/assets/flappyLokan/2.png": "fa5fbfc26211bfe762e3839410d7a3c9",
"assets/assets/flappyLokan/3.png": "1c49247de1887b9a0ebb00f829d90171",
"assets/assets/flappyLokan/4.jpg": "78c41829665e774629d77dff23b9bf4a",
"assets/assets/flappyLokan/5.jpg": "0f59325095965d4b235ba5b7e209403d",
"assets/assets/flappyLokan/fitur.jpg": "69e2e75fa00a946e0dda7ddcba27281b",
"assets/assets/flappyLokan/Logo.png": "a41f7f6eec891cff8d56d6c88e7c7001",
"assets/assets/flutter.png": "3700ac1e453e187a217a0fb3b4430009",
"assets/assets/Github.png": "611c8ccb733ff7b43d6820e555a15076",
"assets/assets/icon/galery.png": "7610f6444e0a850d7d152ad56eb241fc",
"assets/assets/icon/home.png": "d08f39254f0b35f0365d7cb3650db9ce",
"assets/assets/icon/network.png": "5d50d1b4fdb96da51cbb0648d4aba21f",
"assets/assets/icon/project.png": "eece0d88686cfc6fe7147089f8d69be0",
"assets/assets/icon/skill.png": "10b5cd58e52ebdb40ae65776c995ff9c",
"assets/assets/IG.png": "5c3d1699e8110aa72e45d9f944a9845b",
"assets/assets/IN.png": "c13b5ec3650868c3b3bde2861d4d0211",
"assets/assets/jadwalShalat/gambar%25201.jpg": "f0fa457214c0717d78abf282e9de20dd",
"assets/assets/jadwalShalat/gambar%25202.jpg": "22e9c4f72d86494b1cd5c9dca12a8a53",
"assets/assets/jadwalShalat/mockup%25201.png": "5cb25b82a802edd2e5d715fbbb67006d",
"assets/assets/jadwalShalat/mockup%25202.png": "05002f4c728ccf7b935a3db14cdba1e7",
"assets/assets/jadwalShalat/pray.png": "7ef19d42b253d00ffdb987dd554bb336",
"assets/assets/java.png": "4d42545b0aabb0d9bef5cc7551f52dbc",
"assets/assets/landingProject/1.jpg": "751f74f72d9875757fc1c1d50339f48d",
"assets/assets/landingProject/2.jpg": "63c55e973ebdc988ca5c80e2ceafa7b5",
"assets/assets/landingProject/3.jpg": "73605d20ec0b71746cc0818e0077f31a",
"assets/assets/landingProject/Fitur.jpg": "ad947152140c0d04ce245ff576f3cf6b",
"assets/assets/landingProject/LOGO%2520GAME.jpg": "e851b215ea6719c99b611f2fc491e9f2",
"assets/assets/miniItem/Github.png": "a76fc0c46c56f37b7d12d3685a66df33",
"assets/assets/miniItem/IG.png": "30a82dbdf5a7df771c3bcd6057c78d49",
"assets/assets/miniItem/IN.png": "705fb4e15ec7db1d626f2a7c09650363",
"assets/assets/miniItem/Profile.png": "1b57bfaa9fc7a91207ce65e2c6100fbd",
"assets/assets/miniItem/PS.png": "c0710e5b1bd3797463ee818553943371",
"assets/assets/miniItem/To%2520Github.png": "d07549e6adffeb827d836e0f63e8e8e5",
"assets/assets/miniItem/To%2520Instagram.png": "f52c3fb996ca184d46d42d151f5abf17",
"assets/assets/miniItem/To%2520LinkedIn.png": "39e915e71f6aa7fceb149780fdea9b7d",
"assets/assets/miniItem/To%2520Playstore.png": "4e1ac1e746042b747f9ed32fc9390160",
"assets/assets/playstore.png": "b61f9e44da262178da80cefc6cf9ba3e",
"assets/assets/pp.png": "268f5f6f733d8924bb30276e690928fe",
"assets/assets/sai.png": "1b4492c424c1ae1ea952959c96c181b6",
"assets/assets/stickTwerk/1.jpg": "ed167e1b1059a000d2cab29c24d2c085",
"assets/assets/stickTwerk/2.jpg": "6a48129d8ce5fd8f60b6238544f5f565",
"assets/assets/stickTwerk/Logo%2520Game.png": "0256992a77f7a6ae2dbe66be73801690",
"assets/assets/stickTwerk/Screenshot%25202023-01-12%2520012846.jpg": "44d90e8bf4f0977fe6f704323f51ab06",
"assets/assets/stickTwerk/Screenshot%25202023-01-12%2520012946.jpg": "b04455351d96f681f7f9b4700dc84c95",
"assets/assets/toDO/perspective-view-phone-screen-mockup-template.png": "7bcb61638d7144d369bb782c8d61ffcb",
"assets/assets/toDO/Screenshot%25202023-07-12%2520045640.jpg": "d2ea19571d4ece3e39ff1cb97abb6482",
"assets/assets/toDO/Screenshot%25202023-07-12%2520045727.jpg": "b238af9fa4b5c4372328c34c6e79a61b",
"assets/assets/toDO/Screenshot%25202023-07-12%2520045816.jpg": "86e4b86a750556ccf33ac42bf4962f3d",
"assets/assets/toDO/Screenshot%25202023-07-12%2520045841.jpg": "7bbc422e3fb47daf3b997a3a72d9d7c9",
"assets/assets/toDO/shadow-overlay-two-iphone-13-on-concrete-surface-mockup-template@2x.jpeg": "c54b1c8be7d7462a9cc936f42209682d",
"assets/assets/toDO/thumbnail.png": "d480beda962938067a2f6539e6128cae",
"assets/assets/unity.png": "96e4f7f26a72c74ac543ae2efca84849",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "3f6e5a90a46d3ae9ec2c81a0ff92e234",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "f6e48480c3ce4514001e942bc754f3ea",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "1cc343ef2c6f1f9aeb059914b96c8d63",
"icons/Icon-512.png": "0339fc06c843dad13f5add2fc0f59d5f",
"icons/Icon-maskable-192.png": "e3254956afe4e6990426e6786432c640",
"icons/Icon-maskable-512.png": "8f5b1b755aa6c634be1b5fddc9c3a327",
"index.html": "b57ed5c1fd220403433c110727d87b65",
"/": "b57ed5c1fd220403433c110727d87b65",
"main.dart.js": "f898f010a14badd10b259b72f4c93671",
"manifest.json": "981f88990489844bc887cc7d1387ee11",
"version.json": "6032fe19a1eca1a906afb00ee48498b9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
