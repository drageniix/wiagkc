"use strict";var precacheConfig=[["assets/data/index.json","970e81c0aa4b27d3a47d7b591cd2d407"],["assets/images/buynow.png","0807a89017382d8e3894d33f8aeda9f4"],["assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["assets/images/holidaybanner-desktop.png","36ec52e5a777338c4bc3994138166f81"],["assets/images/holidaybanner-mobile.png","15aa950f21dbde42bb1eb69a7d2d733c"],["assets/images/holidaybanner-tablet.png","be8bae9e506ec7e9908c358803e3d1f4"],["assets/images/holidaybanner.png","be8bae9e506ec7e9908c358803e3d1f4"],["assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["icon_96x96.png","05356f78334acfb2471d3035f280615a"],["index.html","7d998130e8e1ad49353a33aaaaa13d93"],["manifest.json","5732abf7b314facbde71a00e20260bcc"],["scripts/index.js","388be8469e0e3767b754e4f792b46554"],["scripts/vendors~index.js","6728eb66adb34c12808add057a98ba27"],["styles/5532a60d381cecddf905.css","214b57fd74698c1a746b8552c80d4086"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("D:Githubwiagkcpublicindex.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});