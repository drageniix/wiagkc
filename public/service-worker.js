"use strict";var precacheConfig=[["/_redirects","6a02faf7ea2a9584134ffe15779a0e44"],["/a52139b307f2b142669f.css","c7276e2df5406ff54537eff71add9d5e"],["/assets/data/home.json","e7ab31267effa6da2336d3f03f252b06"],["/assets/data/index.json","673aa7aecefb616bb2a9543373924402"],["/assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["/assets/images/features-mobile.jpg","23a4bcb202b53c98218a397a9d6c49e8"],["/assets/images/features-tiny-mobile.jpg","759a574160eaa55ba4ba165d49be4dd0"],["/assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["/assets/images/hero-mobile.jpg","1d0fe3b53dbe609033fe2d350ef8da75"],["/assets/images/hero-tiny-mobile.jpg","b97b80fe42b2caf3c959f94908a02216"],["/assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["/assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["/assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["/assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["/assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["/favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["/icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["/icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["/icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["/icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["/icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["/icon_96x96.png","05356f78334acfb2471d3035f280615a"],["/index.html","47fcbf7a98cdb8e1d67788274d353fed"],["/manifest.json","83ca2108b94adc9da5f02cc9e3f2246c"],["/scripts/0.js","35b6a8820e3270c70724ad86e8a3b371"],["/scripts/1.js","8890c03443daa2156268943fa36a403f"],["/scripts/10.js","b1ce975db699ab71ae46917292b546b6"],["/scripts/11.js","3f2bb1b8e0417b323683f6feef0ee920"],["/scripts/12.js","4c80902308318df583f99ed89e4db09b"],["/scripts/13.js","c55c2c59fc7339b977a2caaccec47ea1"],["/scripts/2.js","a3bb07e2c0c1b82efed9f0acf78ded0e"],["/scripts/3.js","dbd81d23466824909aa8b41c6612e89d"],["/scripts/4.js","ab470f903750c1392386d8b81dc0dae2"],["/scripts/7.js","f6716d40b44fa66938ed78a897400018"],["/scripts/8.js","f7f70c7c2644b1a8490f692e3a98796b"],["/scripts/9.js","54259ee34188f4d4338895370c236825"],["/scripts/index.js","513a50b1559aba90f07bab099ee7c2b0"],["/scripts/vendors~index.js","1475af5a5493bfbfad5f2bfc2f6b9406"],["/styles/a52139b307f2b142669f.css","629c4fb3c274a670ad542c964b7ab4fe"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));var t="C:UsersjayloDocumentsAshleywiakcwiagkcpublicindex.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});