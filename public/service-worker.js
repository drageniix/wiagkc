"use strict";var precacheConfig=[["assets/data/index.json","8a248e441cedece9209c9a8135731a77"],["assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["assets/images/floral-pattern.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["assets/images/junkanoo.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["icon_128x128.png","c171bc143d1a950b71a14a34b9e44657"],["icon_192x192.png","8c6a43960c911fd4b883722643e9fab2"],["icon_256x256.png","abe015e170f89152df341fd47358e342"],["icon_384x384.png","77b71c74c8415a7eadb48a7333b43fe3"],["icon_512x512.png","baef05c26c2b26ff544ddf7ee9534a88"],["icon_96x96.png","3e5a4b2716e0faa46e639f1ae3a52282"],["index.html","d6f8f18c8b4963fbb50bd535dd31f655"],["manifest.json","439bce82e438760d3561a213f03e0922"],["scripts/index.js","2ed479b8cb2f911ac0ea4665d19ed316"],["scripts/vendors~index.js","c2aa69424494534d9e0dbd69a3305387"],["styles/6f4ed9de2cbaac954ab2.css","d343927be851424e23a0df6dc5f9f870"]],cacheName="sw-precache-v3-sample-cache-id-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("D:Githubwiagkcpublicindex.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});