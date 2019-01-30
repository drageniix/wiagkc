"use strict";var precacheConfig=[["/_redirects","6a02faf7ea2a9584134ffe15779a0e44"],["/assets/data/home.json","e7ab31267effa6da2336d3f03f252b06"],["/assets/data/index.json","692dd7876d468d764d9d1dda80a25901"],["/assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["/assets/images/features-mobile.jpg","23a4bcb202b53c98218a397a9d6c49e8"],["/assets/images/features-tiny-mobile.jpg","759a574160eaa55ba4ba165d49be4dd0"],["/assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["/assets/images/hero-mobile.jpg","1d0fe3b53dbe609033fe2d350ef8da75"],["/assets/images/hero-tiny-mobile.jpg","b97b80fe42b2caf3c959f94908a02216"],["/assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["/assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["/assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["/assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["/assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["/favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["/google3e1f00fabf7287e7.html","197817bd2bbf5779ddf6f7bacf363883"],["/icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["/icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["/icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["/icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["/icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["/icon_96x96.png","05356f78334acfb2471d3035f280615a"],["/index.html","9cb660c4301e7198a9d8012bb621b02e"],["/manifest.json","83ca2108b94adc9da5f02cc9e3f2246c"],["/scripts/0.js","5ab31d9eb0f4b4f942dd0041257e0f4c"],["/scripts/1.js","cda9f50f8acbbe147863a039c678411b"],["/scripts/10.js","188c0c922bcae656110a4fe18009c5b7"],["/scripts/11.js","1755d1b1dcbdf91ab631160dac498501"],["/scripts/12.js","d75809e91ca0748725a8a9f9183ab04f"],["/scripts/13.js","d5203f02b3140ec3ce7837164b64e472"],["/scripts/14.js","c3759154907de34d07cfede1ebe2c33d"],["/scripts/2.js","7d2b6117538e7fd16968c6d6eaf5b7d6"],["/scripts/3.js","9913e89dc3b777a49a33e095807a0bb9"],["/scripts/4.js","7e1503a659e4d87804a98b5713dfeeed"],["/scripts/5.js","cf29219e8265b790395324c487ddb1c5"],["/scripts/8.js","1771073652f7bbee5169016a27c84dd9"],["/scripts/9.js","99f89812da1a5cc6d8986dc1dcd8a840"],["/scripts/index.js","787901e8e2414757fe00b6c375d2b240"],["/scripts/vendors~index.js","4ed2ac39359c6d49cdb43f7f74ec6b87"],["/sitemap.xml","341620bd58868b980f7e2d4d58fa20bd"],["/styles/2e99acb957ff0a1c2cc7.css","8f42e471570a5ae0592fccb055eea516"],["/styles/8-2e99acb957ff0a1c2cc7.css","dbb0ff16c2b1cfae5705b700ccef5f48"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));var t="C:UsersjayloDocumentsAshleywiakcwiagkcpublicindex.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});