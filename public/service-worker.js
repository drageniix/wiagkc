"use strict";var precacheConfig=[["/_redirects","6a02faf7ea2a9584134ffe15779a0e44"],["/assets/data/home.json","e7ab31267effa6da2336d3f03f252b06"],["/assets/data/index.json","692dd7876d468d764d9d1dda80a25901"],["/assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["/assets/images/features-mobile.jpg","23a4bcb202b53c98218a397a9d6c49e8"],["/assets/images/features-tiny-mobile.jpg","759a574160eaa55ba4ba165d49be4dd0"],["/assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["/assets/images/hero-mobile.jpg","1d0fe3b53dbe609033fe2d350ef8da75"],["/assets/images/hero-tiny-mobile.jpg","b97b80fe42b2caf3c959f94908a02216"],["/assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["/assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["/assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["/assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["/assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["/favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["/google3e1f00fabf7287e7.html","197817bd2bbf5779ddf6f7bacf363883"],["/icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["/icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["/icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["/icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["/icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["/icon_96x96.png","05356f78334acfb2471d3035f280615a"],["/index.html","33e07082cf97d6ca30104c3f166b753f"],["/manifest.json","83ca2108b94adc9da5f02cc9e3f2246c"],["/scripts/0.js","5ab31d9eb0f4b4f942dd0041257e0f4c"],["/scripts/1.js","508104ea6237fc8ab25b6d6659f45c96"],["/scripts/10.js","2f52e4e66b0037b449f98e1b00e14b26"],["/scripts/11.js","b8ec764dd0c3daddee73c15dca1a95e6"],["/scripts/12.js","218f721f2580f54cfbc1dc67e0e18406"],["/scripts/13.js","471fbde4672f0f7f7a83c3b6018131af"],["/scripts/14.js","eb3657049113fbe8c6fba5777a79efe0"],["/scripts/2.js","89876e2270b2720d1f1dd0399cb9ad89"],["/scripts/3.js","45fcaeedc9cc169b7079b0eb1e8803c7"],["/scripts/4.js","6dcbd1ce31e907e10bcb3f4733af76e2"],["/scripts/5.js","898f4ea23ce886a41ae673093c9fb54b"],["/scripts/8.js","1771073652f7bbee5169016a27c84dd9"],["/scripts/9.js","47268c0e4cf1a601ea8d102542a919e6"],["/scripts/index.js","c0a6737758e0c1bf9a07e6e29ad6d972"],["/scripts/vendors~index.js","35501e77986eb2e09c13061a02d2b0d7"],["/sitemap.xml","341620bd58868b980f7e2d4d58fa20bd"],["/styles/8-ca3f503fb177b90cc4dd.css","80a1f205df8668a2fa2710f3f7f39318"],["/styles/ca3f503fb177b90cc4dd.css","5a2e82bcb2cf09982807b1563873ffe2"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));var t="C:UsersjayloDocumentsAshleywiakcwiagkcpublicindex.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});