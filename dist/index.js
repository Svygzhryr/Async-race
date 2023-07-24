(()=>{var e={192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"body{color:#aaafc4;background:#16161e;font-family:sans-serif}.car{width:50px;height:50px}body{background-color:#16161e}.app{text-align:center;background:#16161e}.menu{margin-bottom:75px}.btn{width:150px;height:40px;background-color:#262838;border:none;margin:10px;font-size:20px;transition:all .2s ease-in-out}.btn:hover{background-color:#aaafc4;color:#16161e;cursor:pointer}.btn_garage{color:#f8c455}.btn_winners{color:#8360ff}.inactive{display:none}form{margin-top:10px;display:flex;align-items:center;justify-content:center}.btn_garage-menu{height:30px;min-width:70px;background-color:#262838;font-weight:700;color:#aaafc4;font-size:16px;padding:5px;margin:0 10px;border:none;transition:all .2s ease-in-out}.btn_garage-menu:hover{background-color:#f8c455;color:#16161e;cursor:pointer}.garage__input{background-color:#262838;color:#aaafc4;font-size:20px;height:30px;margin:0 10px;border:none}.garage__color{background-color:#aaafc4;height:30px;margin:0 10px;border:none;transition:all .2s ease-in-out}.garage__color:hover{background-color:#f8c455;cursor:pointer}.garage__title{margin-top:50px}.garage__item{text-align:left;border-bottom:2px dashed #aaafc4;margin:50px;font-size:24px;text-shadow:#aaafc4 0px 0px 1px,#aaafc4 0px 0px 1px,#aaafc4 0px 0px 1px,#aaafc4 0px 0px 1px,#aaafc4 0px 0px 1px,#aaafc4 0px 0px 1px}.car{width:100px;margin-top:10px;margin-bottom:-8px}.btn-car{background-color:#262838;border:none;color:#aaafc4;font-size:16px;padding:5px 10px;margin-bottom:5px;transition:all .2s ease-in-out;font-weight:700}.btn-car:hover{cursor:pointer}.btn_prev,.btn_next{font-size:30px;width:unset;color:#aaafc4}.btn-car_select:hover{background-color:#f8c455;color:#262838}.btn-car_remove{margin-left:10px}.btn-car_remove:hover{background-color:#e25441;color:#262838}.btn-car_start:hover{background-color:#8360ff;color:#262838}.btn-car_stop{margin-left:10px}.btn-car_stop:hover{background-color:#e25441;color:#262838}.input_inactive{opacity:.3;pointer-events:none}.winner-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}@keyframes driving{0%{margin-left:10px}100%{margin-left:1000px}}.winners__title{font-size:30px}.winners__table{margin:10px auto}td,th{border:1px solid #aaafc4;padding:10px}",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{"use strict";var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],r=0;r<e.length;r++){var c=e[r],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=o(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,t),references:1}),a.push(u)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,f=0;function m(e,t){var n,a,r;if(t.singleton){var i=f++;n=h||(h=s(t)),a=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=s(t),a=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=o(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}},754:e=>{e.exports='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet"><metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata><g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3 -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64 -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302 140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22 259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1 -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50 680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332 -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66 -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36 -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83 54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134 274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"></path><path d="M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262 -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493 -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23 86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50 -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220 1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360 0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"></path><path d="M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120 -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"></path><path d="M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28 22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"></path><path d="M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0 165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"></path><path d="M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0 165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"></path><path d="M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58 -13 0 -29 -8 -34 -18z"></path><path d="M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9 153 -71 153 -27 0 -44 -8 -66 -29z"></path><path d="M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z"></path><path d="M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z"></path><path d="M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"></path><path d="M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"></path><path d="M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z"></path><path d="M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7 0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"></path><path d="M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232 -230 231 -3 0 -11 -3 -17 -6z"></path><path d="M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z"></path><path d="M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80 119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"></path><path d="M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163 84 -207 91 l-43 7 0 -162z"></path><path d="M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"></path><path d="M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88 241 -108 241 -4 0 -57 -51 -119 -112z"></path><path d="M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10 68 -14 2 -31 -3 -38 -10z"></path><path d="M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44 -6 -64 -31z"></path><path d="M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"></path><path d="M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24 13 -3 0 -14 -6 -24 -13z"></path><path d="M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"></path><path d="M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"></path><path d="M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z"></path><path d="M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"></path><path d="M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239 98 16 10 -216 242 -234 235z"></path></g></svg>'}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=["Abarth","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti","Cadillac","Chevrolet","Chrysler","Citroën","Dacia","Daewoo","Daihatsu","Dodge","Donkervoort","DS","Ferrari","Fiat","Fisker","Ford","Honda","Hummer","Hyundai","Infiniti","Iveco","Jaguar","Jeep","Kia","KTM","Lada","Lamborghini","Lancia","Land Rover","Landwind","Lexus","Lotus","Maserati","Maybach","Mazda","McLaren","Mercedes-Benz","MG","Mini","Mitsubishi","Morgan","Nissan","Opel","Peugeot","Porsche","Renault","Rolls-Royce","Rover","Saab","Seat","Skoda","Smart","SsangYong","Subaru","Suzuki","Tesla","Toyota","Volkswagen","Volvo"],t=["DB9","Type-S","350Z","Maxima","GT-R","X5","X6","CX-5","MX-5","RX-8","HR-V","BR-V"];var a=n(754),r=n.n(a),i=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function c(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))},o=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&c[0]?a.return:c[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,c[1])).done)return r;switch(a=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,a=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],a=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};const c=function(){function e(e,t,n){this.carData=e,this.getCars=t,this.currentPage=n,this.animation=null}return e.prototype.initCar=function(e){var t=this,n=document.createElement("div");n.className="garage__item",n.innerHTML=this.carData.name,n.style.color=this.carData.color,e.appendChild(n),n.appendChild(document.createElement("br"));var a=document.createElement("button");a.className="btn-car btn-car_select",a.innerHTML="Select",a.addEventListener("click",(function(){t.selectCar(t.carData.id)})),n.appendChild(a);var i=document.createElement("button");i.className="btn-car btn-car_remove",i.innerHTML="Remove",i.addEventListener("click",(function(){t.removeCar(t.carData.id)})),n.appendChild(i),n.appendChild(document.createElement("br"));var o=document.createElement("button");o.className="btn-car btn-car_start",o.innerHTML="A",o.addEventListener("click",(function(e){t.startEngine(t.carData.id,e.target)})),n.appendChild(o);var c=document.createElement("button");c.className="btn-car btn-car_stop input_inactive",c.innerHTML="B",c.addEventListener("click",(function(e){t.stopEngine(t.carData.id,e)})),n.appendChild(c);var s=document.createElement("div");s.innerHTML=r(),s.className="car",s.style.fill=this.carData.color,n.appendChild(s)},e.prototype.removeCar=function(e){return i(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,fetch("http://127.0.0.1:3000/garage/".concat(e),{method:"DELETE"})];case 1:return t.sent(),this.getCars(),[2]}}))}))},e.prototype.selectCar=function(e){var t;return i(this,void 0,void 0,(function(){return o(this,(function(n){return sessionStorage.setItem("selectedCarId",e.toString()),null===(t=document.querySelector(".update-wrapper"))||void 0===t||t.classList.remove("input_inactive"),[2]}))}))},e.prototype.startEngine=function(e,t,n){var a,r,c,s,l;return i(this,void 0,void 0,(function(){var i,u,d,p,h,f,m,g,v,b,y,w,x,C,M,_;return o(this,(function(o){switch(o.label){case 0:return i=t,u=null===(s=null===(c=null===(r=null===(a=null==t?void 0:t.previousSibling)||void 0===a?void 0:a.previousSibling)||void 0===r?void 0:r.previousSibling)||void 0===c?void 0:c.previousSibling)||void 0===s?void 0:s.previousSibling,d=u.textContent,p=i.nextSibling,h=null===(l=i.nextSibling)||void 0===l?void 0:l.nextSibling,[4,fetch("http://127.0.0.1:3000/engine?id=".concat(e,"&status=started"),{method:"PATCH"})];case 1:return f=o.sent(),p.classList.remove("input_inactive"),[4,f.json()];case 2:m=o.sent(),g=0;try{v=document.querySelector(".garage__item"),b=+getComputedStyle(v).width.slice(0,-2),g=b-100}catch(e){}return y=[{marginLeft:"0px"},{marginLeft:"".concat(g,"px")}],w=m.distance/m.velocity,x=h.animate(y,{duration:w}),this.animation=x,x.addEventListener("finish",(function(){h.style.marginLeft="".concat(g,"px")})),null==i||i.classList.add("input_inactive"),[4,fetch("http://127.0.0.1:3000/engine?id=".concat(e,"&status=drive"),{method:"PATCH"})];case 3:return 500===(C=o.sent()).status&&(console.log("Car has been broken!"),M=getComputedStyle(h).marginLeft,x.pause(),x.cancel(),h.style.marginLeft=M,p.classList.add("input_inactive")),p.classList.add("input_inactive"),n&&C.ok&&(_=(w/1e3).toFixed(2),console.log("".concat(d," finished in ").concat(_," seconds!"))),[2]}}))}))},e.prototype.stopEngine=function(e,t){return i(this,void 0,void 0,(function(){var n,a;return o(this,(function(r){switch(r.label){case 0:return n=t.target,a=n.previousSibling,[4,fetch("http://127.0.0.1:3000/engine?id=".concat(e,"&status=stopped"),{method:"PATCH"})];case 1:return r.sent().ok&&(this.animation&&this.animation.cancel(),a.classList.remove("input_inactive"),n.classList.add("input_inactive")),[2]}}))}))},e}();var s=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function c(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))},l=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&c[0]?a.return:c[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,c[1])).done)return r;switch(a=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,a=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],a=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};const u=function(){function n(){this.app=document.querySelector(".app"),this.menu=document.querySelector(".menu"),this.garageUi=document.createElement("div"),this.carsIds=[],this.currentPage=1,this.totalItems=1,this.carsOnPage=[]}return n.prototype.setUp=function(){var e,t=document.createElement("button");t.className="btn_garage btn",t.innerHTML="Garage",null===(e=this.menu)||void 0===e||e.appendChild(t),this.garageView(),t.addEventListener("click",this.garageSelect)},n.prototype.garageView=function(){var e,t,n=this;if(this.garageUi){this.garageUi.className="garage-wrapper",null===(e=this.app)||void 0===e||e.appendChild(this.garageUi);var a=document.createElement("form"),r=document.createElement("form"),i=document.createElement("form");a.className="create-wrapper",r.className="update-wrapper input_inactive",i.className="submenu-wrapper",this.garageUi.appendChild(a),this.garageUi.appendChild(r),this.garageUi.appendChild(i);var o=document.createElement("input");o.className="garage__input";var c=document.createElement("input");c.className="garage__color",c.setAttribute("type","color");var s=document.createElement("button");s.className="btn_reset btn_garage-menu",s.className="btn_garage-menu",s.setAttribute("type","button"),a.appendChild(o.cloneNode()),a.appendChild(c.cloneNode());var l=s.cloneNode();l.innerHTML="Create",a.appendChild(l),l.addEventListener("click",(function(){n.createCar()})),r.appendChild(o.cloneNode()),r.appendChild(c.cloneNode());var u=s.cloneNode();u.innerHTML="Update",u.addEventListener("click",(function(){n.updateCar()})),r.appendChild(u),s.className="btn_garage-menu";var d=s.cloneNode();d.addEventListener("click",(function(){n.race()}));var p=s.cloneNode(),h=s.cloneNode();d.innerHTML="Race",p.innerHTML="Reset",p.addEventListener("click",(function(){n.reset()})),h.innerHTML="Generate Cars",h.addEventListener("click",(function(){n.generateCars()})),i.appendChild(d),i.appendChild(p),i.appendChild(h);var f=document.createElement("h2");f.className="garage__title",f.innerHTML="Garage (checking...)",this.garageUi.appendChild(f);var m=document.createElement("div");m.className="car__items",null===(t=this.garageUi)||void 0===t||t.appendChild(m),this.getCars()}},n.prototype.garageSelect=function(){var e=document.querySelector(".garage-wrapper"),t=document.querySelector(".winners-wrapper");null==e||e.classList.remove("inactive"),null==t||t.classList.add("inactive")},n.prototype.getCars=function(){return s(this,void 0,void 0,(function(){var e,t,n,a,r,i,o,s,u,d=this;return l(this,(function(l){switch(l.label){case 0:return this.carsOnPage=[],e=7,[4,fetch("http://127.0.0.1:3000/garage?_page=".concat(this.currentPage,"&_limit=").concat(e),{method:"GET"})];case 1:return t=l.sent(),[4,fetch("http://127.0.0.1:3000/garage",{method:"GET"})];case 2:return n=l.sent(),a=document.createElement("h3"),[4,t.json()];case 3:return r=l.sent(),[4,n.json()];case 4:return l.sent().forEach((function(e){try{d.carsIds.push(e.id)}catch(e){console.log("Cant get more ids at this page.. i guess")}})),i=t.headers.get("X-Total-Count"),this.totalItems=+i,(o=document.querySelector(".car__items")).innerHTML="",o.appendChild(a),a.innerHTML="Page: ".concat(this.currentPage),document.querySelector(".garage__title").innerHTML="Garage (".concat(this.totalItems,")"),(s=document.createElement("button")).className="btn btn_prev",s.innerHTML="←",s.addEventListener("click",(function(){d.currentPage>1&&d.currentPage--,d.getCars()})),o.appendChild(s),(u=document.createElement("button")).className="btn btn_next",u.innerHTML="→",u.addEventListener("click",(function(){var t=Math.ceil(d.totalItems/e);d.currentPage<t&&d.currentPage++,d.getCars()})),o.appendChild(u),r.forEach((function(e){var t=new c(e,d.getCars,d.currentPage);d.carsOnPage.push(t),t.initCar(o)})),[2]}}))}))},n.prototype.generateCarId=function(){for(var e=1;this.carsIds.includes(e);)e++;return this.carsIds.push(e),e},n.prototype.createCar=function(){return s(this,void 0,void 0,(function(){var e,t;return l(this,(function(n){switch(n.label){case 0:return e=document.querySelector(".create-wrapper .garage__input"),t=document.querySelector(".create-wrapper .garage__color"),[4,fetch("http://127.0.0.1:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.value,color:t.value,id:this.generateCarId()})})];case 1:return n.sent(),this.getCars(),[2]}}))}))},n.prototype.generateCars=function(){return s(this,void 0,void 0,(function(){var n,a,r,i,o;return l(this,(function(c){switch(c.label){case 0:n=1,c.label=1;case 1:return n<=100?(a=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)],i=function(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}(),o=this.generateCarId(),[4,fetch("http://127.0.0.1:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(a," ").concat(r),color:i,id:o})})]):[3,4];case 2:c.sent(),this.carsIds.push(o),c.label=3;case 3:return n++,[3,1];case 4:return this.getCars(),[2]}}))}))},n.prototype.updateCar=function(){var e;return s(this,void 0,void 0,(function(){var t,n,a;return l(this,(function(r){switch(r.label){case 0:return t=document.querySelector(".update-wrapper .garage__input"),n=document.querySelector(".update-wrapper .garage__color"),a=sessionStorage.getItem("selectedCarId"),[4,fetch("http://127.0.0.1:3000/garage/".concat(a),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.value,color:n.value})})];case 1:return r.sent(),this.getCars(),null===(e=document.querySelector(".update-wrapper"))||void 0===e||e.classList.add("input_inactive"),[2]}}))}))},n.prototype.race=function(){return s(this,void 0,void 0,(function(){var e,t,n,a,r,i=this;return l(this,(function(o){for(e=document.querySelectorAll(".btn-car_start"),t=this.carsOnPage,n=[],a=function(a){var r=new Promise((function(n,r){var i=t[a].carData.id,o=t[a].startEngine(i,e[a],!0);o&&n(o),r("broken")}));n.push(r)},r=0;r<this.carsOnPage.length;r++)a(r);return Promise.race(n).then((function(e){var t;if(console.log("resolved - "+e),e){var n=document.createElement("div");n.className="winner-modal",n.innerHTML=e,null===(t=i.app)||void 0===t||t.appendChild(n)}})).catch((function(e){console.log(e)})),[2]}))}))},n.prototype.reset=function(){return s(this,void 0,void 0,(function(){return l(this,(function(e){return document.querySelectorAll(".car").forEach((function(e){e.style.marginLeft="0"})),document.querySelectorAll(".btn-car_start").forEach((function(e){e.classList.remove("input_inactive")})),[2]}))}))},n}();const d=function(){function e(){this.app=document.querySelector(".app"),this.menu=document.querySelector(".menu"),this.winnersUi=document.createElement("div")}return e.prototype.setUp=function(){var e,t=document.createElement("button");t.className="btn_winners btn",t.innerHTML="Winners",null===(e=this.menu)||void 0===e||e.appendChild(t),this.winnersView(),t.addEventListener("click",this.winnersSelect)},e.prototype.winnersView=function(){var e,t,n;if(this.winnersUi){this.winnersUi.className="winners-wrapper inactive",null===(e=this.app)||void 0===e||e.appendChild(this.winnersUi);var a=document.createElement("h2");a.className="winners__title",a.innerHTML="Winners",this.winnersUi.appendChild(a);var r=document.createElement("h3");r.innerHTML="Page ".concat(1),null===(t=this.winnersUi)||void 0===t||t.appendChild(r);var i=document.createElement("table");i.className="winners__table",null===(n=this.winnersUi)||void 0===n||n.appendChild(i);var o=document.createElement("tr");i.appendChild(o);var c=document.createElement("th");c.innerHTML="№",o.appendChild(c);var s=document.createElement("th");s.innerHTML="Car image",o.appendChild(s);var l=document.createElement("th");l.innerHTML="Name",o.appendChild(l);var u=document.createElement("th");u.innerHTML="Wins",o.appendChild(u);var d=document.createElement("th");d.innerHTML="Best time",o.appendChild(d),this.getWinners(a,r)}},e.prototype.winnersSelect=function(){var e=document.querySelector(".garage-wrapper"),t=document.querySelector(".winners-wrapper");null==e||e.classList.add("inactive"),null==t||t.classList.remove("inactive")},e.prototype.getWinners=function(e,t){return n=this,a=void 0,i=function(){var n,a,r,i=this;return function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&c[0]?a.return:c[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,c[1])).done)return r;switch(a=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,a=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],a=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}(this,(function(o){switch(o.label){case 0:return[4,fetch("http://127.0.0.1:3000/winners?_page=1&_limit=7")];case 1:return[4,(n=o.sent()).json()];case 2:return a=o.sent(),r=n.headers.get("X-Total-Count"),e.innerHTML="Winners (".concat(r,")"),t.innerHTML="Page ".concat(1),a.forEach((function(e){var t,n=document.createElement("div");n.className="winners__item",null===(t=i.winnersUi)||void 0===t||t.appendChild(n),n.innerHTML="".concat(e.id," ").concat(e.time," ").concat(e.wins)})),[2]}}))},new((r=void 0)||(r=Promise))((function(e,t){function o(e){try{s(i.next(e))}catch(e){t(e)}}function c(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,c)}s((i=i.apply(n,a||[])).next())}));var n,a,r,i},e}();var p=function(){function e(){}return e.prototype.start=function(){var e=document.createElement("div");e.className="app",document.body.appendChild(e);var t=document.createElement("div");t.className="menu",e.appendChild(t);var n=new u,a=new d;n.setUp(),a.setUp()},e}();const h=p;var f=n(379),m=n.n(f),g=n(192);m()(g.Z,{insert:"head",singleton:!1}),g.Z.locals,(new h).start()})()})();