"use strict";var precacheConfig=[["/6db0bc6ec3de1d6d778f.css","8d4b221e384f496393ed38d776992810"],["/_redirects","6a02faf7ea2a9584134ffe15779a0e44"],["/assets/data/home.json","e7ab31267effa6da2336d3f03f252b06"],["/assets/data/index.json","7d9ec2d179e5eda967a4c18adeee66ca"],["/assets/images/caricom.png","6d254a4163b85b95bb2a139ca8e0555a"],["/assets/images/features-mobile.jpg","23a4bcb202b53c98218a397a9d6c49e8"],["/assets/images/features-tiny-mobile.jpg","759a574160eaa55ba4ba165d49be4dd0"],["/assets/images/features.jpg","663ce13714fa30ee15dfb3ebf873e00e"],["/assets/images/hero-mobile.jpg","1d0fe3b53dbe609033fe2d350ef8da75"],["/assets/images/hero-tiny-mobile.jpg","b97b80fe42b2caf3c959f94908a02216"],["/assets/images/hero.jpg","4e0b7f32c2a3d1cd28d309b4bf63fc85"],["/assets/images/jerkfest.jpg","604b760c4a236acc9a01b6c6ebbf16e2"],["/assets/images/logo-text.png","000b4a929957fef9abebfcbdaa209d0d"],["/assets/images/logo.png","e72246640d9f1f52c4994af9af40367d"],["/assets/images/picnic.jpg","0008f235a1bd000c5999271e181c8d58"],["/favicon.png","67e12350cefc900597fb8f62c2ca4bb7"],["/icon_128x128.png","b799292c5619988dea1aa7f30233a357"],["/icon_192x192.png","354e937b498aeec25f3684dca4f7889d"],["/icon_256x256.png","2876ae6ecfd1010d3ef1629e838afd8e"],["/icon_384x384.png","3d8355ae3b0ab67179fb070d3acd7df6"],["/icon_512x512.png","0df7201b8b3fb045a17f1145effbc785"],["/icon_96x96.png","05356f78334acfb2471d3035f280615a"],["/index.html","73cbb6f0a4067d9fb2ccd8c9e404e711"],["/manifest.json","83ca2108b94adc9da5f02cc9e3f2246c"],["/scripts/0.js","84c7fcd4bd80ff48393699a21e4bd7ac"],["/scripts/1.js","00d46f511a4034d46f5641063ad9a8ee"],["/scripts/10.js","b7f6bf0673f4e71972a3e127caf345bf"],["/scripts/11.js","11c08b83d1f63b8353903f69ca7edcc2"],["/scripts/4.js","cbe9bcf98d460ad3e3db44d1d22bb5ce"],["/scripts/5.js","adb771f67130718ab2fea269667edd69"],["/scripts/6.js","c002efd0936b5c7ee708f67accd3bb74"],["/scripts/7.js","6cd96799fbec00ecf1104be1b1bf29ab"],["/scripts/8.js","50a48a5da2e53a9dbcfa491d08f672a1"],["/scripts/9.js","39a7f96856df03f81145228c31294655"],["/scripts/index.js","8e8eab43cdd3ab5e81863e70ad516c27"],["/scripts/vendors~index.js","ff249fcb3885476b57278c48576cfe96"],["/styles/6db0bc6ec3de1d6d778f.css","fdf22927efc7e23669aca6cf8d153b4e"]],cacheName="sw-precache-v3-holiday-update-2018-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));var t="C:UsersjayloDocumentsAshleywiakcwiagkcpublicindex.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});