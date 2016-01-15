function readTextFile(t){var r=new XMLHttpRequest;r.open("GET",t,!1);var n="";return r.onreadystatechange=function(){if(4===r.readyState&&(200===r.status||0===r.status)){var t=r.responseText;n=t}},r.send(null),n}function createArray(t){var r=new Array(t||0),n=t;if(arguments.length>1)for(var a=Array.prototype.slice.call(arguments,1);n--;)r[t-1-n]=createArray.apply(this,a);return r}function day1a(t){for(var r=0,n=0;n<t.length;n++)"("===t[n]?r++:r--;return r}function day1b(t){for(var r=0,n=0;n<t.length&&("("===t[n]?r++:r--,-1!==r);n++);return n+1}function day2a(t){function r(t){var r=t.split("x");return{l:r[0],w:r[1],h:r[2]}}function n(t){return{paper:2*(t.l*t.w+t.w*t.h+t.h*t.l),slack:Math.min(t.l*t.w,t.w*t.h,t.h*t.l),f:function(){return this.paper+this.slack}}}var a=t.split("\n").map(r).map(n).reduce(function(t,r){return t+r.f()},0);return a}function day2b(t){function r(t){var r=t.split("x").sort(function(t,r){return t-r});return{l:r[0],w:r[1],h:r[2]}}function n(t){return{ribbon:2*t.l+2*t.w,bow:t.l*t.w*t.h,f:function(){return this.ribbon+this.bow}}}var a=t.split("\n").map(r).map(n).reduce(function(t,r){return t+r.f()},0);return a}function day3a(t){function r(r){for(var n={},a=0,e={"0:0":0},u=0;r>u;u++)n[u]={x:0,y:0},e["0:0"]++;for(var o=0;o<t.length;o++){switch(t[o]){case"^":n[a].y++;break;case">":n[a].x++;break;case"v":n[a].y--;break;case"<":n[a].x--}var c=n[a].x+":"+n[a].y;e[c]?e[c]++:e[c]=1,a=a==Object.keys(n).length-1?0:a+1}return Object.keys(e).length}return r(1)}function day3b(t){for(var r=0,n=createArray(999,999),a=0;999>a;a++)for(var e=0;999>e;e++)n[a][e]=0;var u=499,o=499,c=499,i=499;n[u][o]++;for(var f=0;f<t.length;f+=2){switch(t[f]){case">":n[u][++o]++;break;case"<":n[u][--o]++;break;case"v":n[++u][o]++;break;case"^":n[--u][o]++}switch(t[f+1]){case">":n[c][++i]++;break;case"<":n[c][--i]++;break;case"v":n[++c][i]++;break;case"^":n[--c][i]++}}for(a=0;999>a;a++)for(e=0;999>e;e++)n[a][e]>0&&r++;return r}function day4a(t){for(var r=0,n="";;){if(n=t.concat(r),n=String(CryptoJS.MD5(n)),n.match(/^00000/gi))break;r++}return r}function day4b(t){for(var r=0,n="";;){if(n=t.concat(r),n=String(CryptoJS.MD5(n)),n.match(/^000000/gi))break;r++}return r}function day5a(t){function r(t){return null!=t.match(/(a|e|i|o|u)/g)?t.match(/(a|e|i|o|u)/g).length>=3:!1}function n(t){return Boolean(t.match(/([a-z])\1+/g))}function a(t){return Boolean(t.match(/ab|cd|pq|xy/g))}for(var e=0,u=t.split("\n"),o=0;o<u.length;o++)r(u[o])&&!a(u[o])&&n(u[o])&&e++;return e}function day5b(t){function r(t){return Boolean(t.match(/([a-z]{2}).*\1+/))}function n(t){return Boolean(t.match(/([a-z]).\1+/))}for(var a=0,e=t.split("\n"),u=0;u<e.length;u++)r(e[u])&&n(e[u])&&a++;return a}function day6a(t){function r(t){var r=t.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);return{action:r[1],start:{x:Math.min(r[2],r[4]),y:Math.min(r[3],r[5])},end:{x:Math.max(r[2],r[4]),y:Math.max(r[3],r[5])}}}function n(t,r){for(var n=r.start.x;n<=r.end.x;n++)for(var a=r.start.y;a<=r.end.y;a++)switch(void 0==t[n]&&(t[n]=[]),void 0==t[n][a]&&(t[n][a]=!1),r.action){case"turn on":t[n][a]=!0;break;case"turn off":t[n][a]=!1;break;case"toggle":t[n][a]=!t[n][a]}return t}var a=t.split("\n").filter(function(t){return t.length>0}),e=a.map(r).reduce(n,[]).reduce(function(t,r){return t+r.filter(function(t){return t}).length},0);return e}function day6b(t){function r(t){var r=t.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);return{action:r[1],start:{x:Math.min(r[2],r[4]),y:Math.min(r[3],r[5])},end:{x:Math.max(r[2],r[4]),y:Math.max(r[3],r[5])}}}function n(t,r){for(var n=r.start.x;n<=r.end.x;n++)for(var a=r.start.y;a<=r.end.y;a++)switch(void 0==t[n]&&(t[n]=[]),void 0==t[n][a]&&(t[n][a]=0),r.action){case"turn on":t[n][a]+=1;break;case"turn off":t[n][a]>0&&(t[n][a]-=1);break;case"toggle":t[n][a]+=2}return t}var a=t.split("\n").filter(function(t){return t.length>0}),e=a.map(r).reduce(n,[]).reduce(function(t,r){return t+r.reduce(function(t,r){return t+r},0)},0);return e}window.onload=function(){var t="input.txt",r="";r=readTextFile(t),document.getElementById("output").innerHTML=day3a(r).toString()};