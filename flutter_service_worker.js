'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7adb8a1e2ca5ccb7ba40a9673a10b1a",
"index.html": "ee9c4baad829da7da4a37cda0f82b7eb",
"/": "ee9c4baad829da7da4a37cda0f82b7eb",
"main.dart.js": "5aab344c713c41f1ec5f3bc3ccee4b70",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fda125eba8ba4ea067096ff6331bf2e",
".git/config": "9a7bc7722e7e4f08c297501e510c97e5",
".git/objects/59/9f9ed4d75acf2143b3c5ae9002b603674feb5b": "273a82010b3155b078fe2a4d7a7e71b5",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/6e1ee7cf77715a2d89b8cf7ef4f486b3a3bc5a": "63c0ddb0345d81cd972d88f93973adca",
".git/objects/9e/c6a7ffbdd9e5a4137d89b2090e09b09aed4d0d": "57cfe9868b1da015ecd10e80bf555b67",
".git/objects/35/84cf1de60ccdbe3501463222e77746abd06ef1": "a2462294b04a3dd9e3656d18d28f7bea",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/02e3b0453bd364ae4802dc466c6aeb76c5e736": "a6f54e3663aac832d7012f13404a9138",
".git/objects/3d/3a88717b874ee708326fe04b918bc32d2f2f84": "839f27bedd0d14d4b6b2eee225839d78",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/05/1e3a0fbd2befeb2c0c30572fd88eb28f078bd0": "5322a00334f6d762987881098cacf685",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/4003bf76f180c4cf5ad40034278897eb707eb0": "72881beb35f08777be0202df00948085",
".git/objects/ad/329beec0b5daf5e830cfaea0fb2763ada7b63b": "3281d64d2598c06089d0fc9693574562",
".git/objects/df/6ef8861670fb111fa3e5cf1a0f114960cafbfb": "083b30c30f2e07a91bbe4d11510550f8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/3b7e01e3f09761094bf2c3f828638052948ac2": "62aa168a49aef4a84e3c339586280c32",
".git/objects/c9/3cd37942dc5d7b3eda24eecb78f0cbba956967": "bbddd6cdb4a6887e134b1dbe8cc234e1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/c6/00aa3636bcc3f1f97fbd3df32f95b0ee10b22a": "591ec552cade15f31722b88f97d3a06a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/2dd7cbceebcbc572942d1d56fc10dccec2c7b7": "33507d48b1891f35706ee7281d4b7d76",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/708d169051bd14e71d44bc8655851607070f8b": "a56e7e70e6d8e4afadaade5d322a5f1c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/9c6424ee38de68a3d70cbb1084dcad98661b47": "54ec6576410c8940d8786535616a371a",
".git/objects/5c/6bb336e6e2e42dac43e94bec00210054b95f6d": "1ef20d5b588c27b9fc62e857d52911ba",
".git/objects/91/48e9828fb8c79d6ffc4f2e78022fb454fcf79b": "4fda405fa6764c712a123af8b8411cbf",
".git/objects/99/92f1adeccea5b280604a939210344fa3b584dd": "f6ad158c15f3249bcd977ff71446f802",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/10b9c887c1464d43aa8de98b0b074bbea92f64": "27b105881358a086dcb4b9bfa8331bf4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d5/9ebf2d41ffa0eae55357b6f49ef537e685ce7b": "54177e50096d5bca72166cf1ea3a8f55",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/21c427c422f265df1d5d506fddcd91fc7460bc": "8637d7d7504d303123fabd984b2c8391",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/027e223165f255c8b83bc3c852523b0f420fc7": "d112249098c690140b67dd7c9785f10b",
".git/objects/ef/7f34d7b74dc9bb0e2cc0f3df5794960319e093": "42dae93d46f177488df0428ba0873e15",
".git/objects/ef/3f4ac5042e698c922d6b06cc8b7dbcd772934d": "1000aec62274f93fb719a2d8c1a7d07c",
".git/objects/c3/726db3d04be1a68bd529795af7b9efe4331b76": "0eea02c25cbdcc0472e24f4ef362d3b0",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/43a075aefa5ce9edd6f44d6a3be55f5516b558": "045f507ade720ed17fad3b3938f1073b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/2529bde9fa4f18a0643d90a9006c0bb7e5c5ea": "5934cae6b4c8c94b9db3518b9f9c3c16",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/5229a2835dc98ae7cddc6fa9098c6b4b19a86c": "40190d01fe136ddde140f17a1932f6d4",
".git/objects/f1/66500323eb0cb19cc5f289131f7636ca8684f6": "5d1572126b1005b8c81d8fc4a7c211f3",
".git/objects/f1/1f08423120f180bedb847ba8fe28d5d8e4b458": "5753fa8e9fc24783ef1aa6c31271ea47",
".git/objects/e7/b0dac917e52d02f078b15766628d9bb914877c": "24dbc9b1f28fbb1a800a4e51e473630e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8b9df1c6c475145b01e1dae915c8548ed05d35": "12af3cd73fc5a00e997abf1a33935e8f",
".git/objects/41/c73e4713a08fb6dda87967bb18f0e1ede2e437": "1bd20e85dbe43ccc69dd4187132ed088",
".git/objects/41/12880c0debcfebaf7420b1463cfc21b5c03982": "5506ccd43dfc767dac0d578f5a4a4ef3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8d/880cd5a437edd997ffe9178dfeb90783cd260e": "1644e4a6d8fa35399d740deb650b16b6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2e/8df6ea8c95ba36f562dc8b5de3e054772b59b1": "df2837006623566479a486a7068f9126",
".git/objects/7a/84e20fb305c10a1899ce639404cbe96aeb4f14": "3d623e05914d5ce6705145f89894fdbe",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e19c7e43903b080fc623e3e8d7fba305",
".git/logs/refs/heads/main": "e19c7e43903b080fc623e3e8d7fba305",
".git/logs/refs/remotes/origin/main": "3c5d88af934dc77f8f019201dedf9cc6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4061a8405862208d82d4434d86027e8b",
".git/refs/remotes/origin/main": "4061a8405862208d82d4434d86027e8b",
".git/index": "6d86d63b2cfcf6b915cda6fb21c99c43",
".git/COMMIT_EDITMSG": "b00140cfc5231e631b4ae0c9d0504579",
"assets/AssetManifest.json": "2fc370921bd1edc45d2062f1d7b7e0b5",
"assets/NOTICES": "e4ab5ae0483f15e8e53e2ddd6799190d",
"assets/FontManifest.json": "a722570b08ccd0c5c0209209d952c87b",
"assets/AssetManifest.bin.json": "9c2e6a3574de812bc7355531f8023299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8de7c1aa84514b1b4177ebd64d612c68",
"assets/fonts/Paperlogy-5Medium.ttf": "30a942b93f5a6ecf2b27b787f840279f",
"assets/fonts/Paperlogy-4Regular.ttf": "67dd2a3d593c24ed0b69c989054a333d",
"assets/fonts/Paperlogy-3Light.ttf": "40ed0d9e45beb088add6e7a9cd99d8f1",
"assets/fonts/Paperlogy-2ExtraLight.ttf": "de725d81a672f5d7a2c2212a198aa429",
"assets/fonts/Paperlogy-1Thin.ttf": "abfe06b700b90c1923aae5b4450afad3",
"assets/fonts/Paperlogy-9Black.ttf": "8b7ebc2fdf4ac14ce6d3558b126aa171",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/fonts/Paperlogy-6SemiBold.ttf": "140bcc17b6275d62a4614fcc10043131",
"assets/fonts/Paperlogy-8ExtraBold.ttf": "5c6d6a813f24fabe0c5e775848e4844b",
"assets/fonts/Paperlogy-7Bold.ttf": "c6c38df66d68dddca0af0590a4a6fd93",
"assets/assets/chzzk.gif": "50fbebf40514b4e634fc2d6984536604",
"assets/assets/bg.png": "f552c10d2801a3531f78207c3429e959",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
