"use strict";var precacheConfig=[["/index.html","f53e389e595323c442f32c8c5a1dfe9f"],["/static/css/main.85c35a23.css","6da998e5333faee7729243e0062719f7"],["/static/js/main.06223113.js","f7996de9438152a06e7ef345c36344ff"],["/static/media/coup_3.3de52bd1.png","3de52bd1f6a7eb9872a6aa74105744e9"],["/static/media/faceles_1.7ea585ac.png","7ea585ac4e75aee78b7dc7b774d4e15d"],["/static/media/faceles_2.fb55fffa.png","fb55fffaa9e35f9ba93140e6bf85eb8d"],["/static/media/faceles_3.ccfa6194.png","ccfa61947d30dcab44ac6f6d9bbe7487"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/getkaset_2.267a3366.png","267a336624667c56b6e7e2919c1118f6"],["/static/media/getkaset_3.24c258ee.png","24c258ee9465f68e2c6ccbb2075c5af1"],["/static/media/html.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/static/media/incident_1.ff98f8a6.png","ff98f8a616e43e6e1c7fa231ae147f80"],["/static/media/incident_2.7a44ea10.png","7a44ea10e366f516860f93c2b78d01a7"],["/static/media/java.6c030968.png","6c030968930fd7301ac907ba6a04599e"],["/static/media/me.7018a3f2.jpg","7018a3f29b26d421a115d35b8484e2f3"],["/static/media/medicon_2.95a6cb51.png","95a6cb511d00d926b9860cbf667fbf88"],["/static/media/medicon_3.5e8066cf.png","5e8066cfff11fddd8fec2f7b32a22792"],["/static/media/php.7bcc989e.png","7bcc989e088229d2a4586fc6174043d8"],["/static/media/pokemon_1.b426a8fc.png","b426a8fc34fbab2735df31406d284b94"],["/static/media/pokemon_2.cb497d81.png","cb497d81f784c476ea1976193892ed06"],["/static/media/pokemon_3.1301cdd6.png","1301cdd660a4e3ff36e0c7e9019a6a04"],["/static/media/ruby.41cd17c5.png","41cd17c589bea8064bfbbb638e535fae"],["/static/media/shoot_ghost_1.0fba118f.png","0fba118f1cb8e8e137d26fd03610877e"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/swift.f5968760.png","f596876017c9cbcaba2bc52a3e921fff"],["/static/media/tic_tac_toe_1.f07ab511.png","f07ab51178a515cf9b0fc84482364ae3"],["/static/media/tic_tac_toe_2.700469e2.png","700469e2e718676e8284e47f5269f004"],["/static/media/vote_1.afbf7484.png","afbf748447bd94a62f6c0c7b61686318"],["/static/media/vote_2.b3f2ee32.png","b3f2ee32a5eb8284a0c5fea5d19792de"],["/static/media/wallet_1.7226e0d6.png","7226e0d65f7c083705e9cbda0f34c1cf"],["/static/media/wallet_2.c2e0d7c8.png","c2e0d7c8d00659755137da1a9d4a53e4"],["/static/media/wtf_1.209b93a9.png","209b93a9e0c2e943ecef3ea237933d63"],["/static/media/wtf_2.6953c4dc.png","6953c4dc8a6a3cb916e8589559ba9540"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});