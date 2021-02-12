'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/demo_dark.webp": "bebbba11bae80ca12e2d8553161bd11a",
"assets/assets/demo.webp": "93c78aa2880fede19eaff53a7b96c1ff",
"assets/good_job_utils/assets/AnotherIcons.ttf": "ee7981c050a035223f579fbd034e69ac",
"assets/good_job_utils/assets/google_sans.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/AssetManifest.json": "00a87f609c3373f4cd0804645894f9cf",
"assets/FontManifest.json": "34f99920f07de693dc360573c64cd279",
"assets/good_job_news/assets/dump.gif": "71ddf17305cef14911b59ac5d4caae2d",
"assets/good_job_news/assets/expand_habit.gif": "32b3bf64e1c2395d2f41c648151e2917",
"assets/good_job_news/assets/reminders.webp": "fcd4bc680629b78e41bdd724bd51e42a",
"assets/good_job_news/assets/steps_count.webp": "81d32392b03daec805c92cf9fce5b949",
"assets/good_job_news/assets/disabling_notifications.webp": "3bb84a517ee195b2a0bda1f526fe3fd2",
"assets/good_job_news/assets/color_scheme.webp": "ccc73e745eb490c773f582155e38ddde",
"assets/good_job_news/assets/monochrome_background.webp": "caa906811369ebcb24456c6ed68a42ed",
"assets/good_job_news/assets/pdf_tracker.png": "60104b301400fb3c0d8327754b194ed0",
"assets/good_job_news/assets/change_period.webp": "8d3254652b460d7c4e9e41c8f3245bcd",
"assets/good_job_news/assets/max_progress_2.webp": "afb0d73fee12613d8c41cb6615ea0d3c",
"assets/good_job_news/assets/dense_habits.webp": "377d1aab1d5485570471f43477cc8243",
"assets/good_job_news/assets/notification_action.webp": "7e8cf956eda847285325fe8df715fe2d",
"assets/good_job_news/assets/telegram.webp": "f2aec4e3439c7967fa6302fd4885589c",
"assets/good_job_news/assets/change_start_date.webp": "75b766f41590bb301ae275b8be64d936",
"assets/good_job_news/assets/reordering.webp": "11fc704f3bac1f731e6fde164d6bb828",
"assets/good_job_news/assets/beta_testing.webp": "1c1a6262f775bd8adfa532cbec44ce2d",
"assets/good_job_news/assets/periodicity.webp": "4b53df77abaa4bb6197bac77e587dcbd",
"assets/good_job_news/assets/period_dows.webp": "e41ef32228fee36c7087b13370863986",
"assets/good_job_news/assets/flexible_periodicity.gif": "1949f3f13787ca854b5df247c2ee8e25",
"assets/good_job_news/assets/demo_web_site.webp": "19ad856129fa1f8ae7f6eb2b42fbf682",
"assets/good_job_news/assets/app_widget.webp": "1cc5eaa146c35672c6a923963465ab7f",
"assets/good_job_news/assets/hiden_motivational_phrase.webp": "2fa08a47c82a83712bcea4c33d61049a",
"assets/good_job_news/assets/set_of_reading_people.webp": "4b33317ce0ee5709ba45b4c0471caa84",
"assets/good_job_news/assets/stories.png": "c168d60b0801b3d47dd3e9544d06c15b",
"assets/good_job_news/assets/web_site.webp": "4c243bfefc9ef9474d5ba8aa420c9200",
"assets/good_job_news/assets/instagram.webp": "5918201ad12169de44320f656057e7c9",
"assets/good_job_news/assets/future_habits.webp": "d07607959fdb6ea965963345a73e939e",
"assets/good_job_news/assets/max_progress.webp": "f09888cc2fe07cde16221261183f5b8f",
"assets/good_job_news/assets/half_year.webp": "8f62e0a5aee0209b0cad82fbb3e65a66",
"assets/good_job_news/assets/habit_scrips.webp": "c6be4f98ac95bb1d3c1601d9aa4ae118",
"assets/good_job_news/assets/letters_21.webp": "4b580425da4f63baa5fc2bfa36dd3265",
"assets/good_job_news/assets/rainbow_gradient.webp": "9d10de05794db7c7c16564f28ffc1b86",
"assets/good_job_news/assets/skip_days.webp": "891c43e5136ad368de0d351719efe0a4",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "51e1eaacdaaf884269c714e121aa009b",
"index.html": "77bc1d88edbcb7cb894a28333dbb7d32",
"/": "77bc1d88edbcb7cb894a28333dbb7d32",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf6468ff7e3ed15f88fab871f5abe8be",
"version.json": "917192b92e3e2fa5050636b4e08bf38c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "7dade57d14c9863b8ad6dde8d8c7b944"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
