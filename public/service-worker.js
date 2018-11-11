"use strict";var precacheConfig=[["assets/data/index.json","d050e1ba82075fbe02a03e2e3c46396b"],["assets/images/buynow.png","0807a89017382d8e3894d33f8aeda9f4"],["assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["assets/images/features-mobile.jpg","23a4bcb202b53c98218a397a9d6c49e8"],["assets/images/features-tiny-mobile.jpg","759a574160eaa55ba4ba165d49be4dd0"],["assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["assets/images/hero-mobile.jpg","1d0fe3b53dbe609033fe2d350ef8da75"],["assets/images/hero-tiny-mobile.jpg","b97b80fe42b2caf3c959f94908a02216"],["assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["assets/images/holidaybanner-desktop.png","36ec52e5a777338c4bc3994138166f81"],["assets/images/holidaybanner-mobile.png","15aa950f21dbde42bb1eb69a7d2d733c"],["assets/images/holidaybanner-tablet.png","be8bae9e506ec7e9908c358803e3d1f4"],["assets/images/holidaybanner.png","be8bae9e506ec7e9908c358803e3d1f4"],["assets/images/holidayflyer-mobile.png","6d90cf31446f91e511eda07f7136a9cf"],["assets/images/holidayflyer-tablet.png","045d33e1a7dcf77dcb4105e28438d6d0"],["assets/images/holidayflyer.png","045d33e1a7dcf77dcb4105e28438d6d0"],["assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["icon_96x96.png","05356f78334acfb2471d3035f280615a"],["index.html","0afcd8587cf5698b0b4736f4d4d9bf02"],["manifest.json","5732abf7b314facbde71a00e20260bcc"],["scripts/index.js","3fbc49194b5ce7a39665185123491781"],["scripts/vendors~index.js","cbfd18e5520871dfd7a3fe1bbb221e4d"],["styles/1c3892f529fd5ccd0e03.css","df01fa2ef0c73a8f13d79a0406b4a4c2"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("D:Githubwiagkcpublicindex.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});