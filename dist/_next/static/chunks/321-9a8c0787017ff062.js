(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{149:function(e,t,r){"use strict";r.d(t,{y1:function(){return ae}});var n=r(3500),o=r(2265),f=r(7437),i={version:"1.2.1"},chunk_KUTI7W2Y_A=(e,t,r)=>{let[f,u]=(0,o.useState)(()=>new n.e(e,t.current,r)),s=(0,o.useCallback)(async()=>{let o=new n.e(e,t.current,r);return o.load(),o},[t]);return r?.lottieRef&&(0,o.useImperativeHandle)(r.lottieRef,()=>({play:(e,t)=>{f.play(e,t)},previous:e=>{f.previous(e)},next:e=>{f.next(e)},reset:()=>{f.reset()},getManifest:()=>f.getManifest(),getState:()=>f.getState(),getCurrentAnimationId:()=>f.currentAnimationId,getLottie:()=>f.getAnimationInstance(),getVersions:()=>({lottieWebVersion:n.e.getLottieWebVersion(),dotLottieReactVersion:`${i.version}`}),setDefaultTheme:e=>{f.setDefaultTheme(e)},setBackground:e=>{f.setBackground(e)},setAutoplay:e=>{f.setAutoplay(e)},setDirection:e=>{f.setDirection(e)},setHover:e=>{f.setHover(e)},setIntermission:e=>{f.setIntermission(e)},setLoop:e=>{f.setLoop(e)},setPlayMode:e=>{f.setMode(e)},setSpeed:e=>{f.setSpeed(e)},revertToManifestValues:e=>{f.revertToManifestValues(e)},pause:()=>{f.pause()},seek:e=>{f.seek(e)},getContainer:()=>f.container,goToAndPlay:(e,t,r)=>{f.goToAndPlay(e,t,r)},goToAndStop:(e,t,r)=>{f.goToAndStop(e,t,r)},stop:()=>{f.stop()},togglePlay:()=>{f.togglePlay()},resize:()=>{f.resize()}}),[r.lottieRef.current,f]),(0,o.useEffect)(()=>((async()=>u(await s()))(),()=>{f.destroy()}),[s]),f};function v(e,t){let r=(0,o.useCallback)(()=>t(e.getState()),[t,e]),f=(0,o.useCallback)(t=>e.state.subscribe(t),[e]);return(0,n.f)(f,r,()=>t(n.d))}var ae=({onEvent:e,activeAnimationId:t,autoplay:r,background:i="transparent",direction:u,intermission:s,loop:a,playMode:c,hover:h,speed:l,renderer:p="svg",rendererSettings:y={},lottieRef:d,src:g,className:B,testId:m,children:b,defaultTheme:w,...E})=>{let A=(0,o.useRef)(null),T=chunk_KUTI7W2Y_A(g,A,{lottieRef:d,renderer:p,activeAnimationId:t,rendererSettings:{clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0,...y},hover:h,loop:a,direction:u,speed:l,intermission:s,background:i,playMode:c,autoplay:!h&&r,testId:m,defaultTheme:w}),k=v(T,e=>e.currentState),I=v(T,e=>e.frame),U=v(T,e=>e.seeker),L=v(T,e=>e.currentAnimationId);return(0,o.useEffect)(()=>{typeof a>"u"?T.revertToManifestValues(["loop"]):T.setLoop(a)},[a]),(0,o.useEffect)(()=>{typeof r>"u"?T.revertToManifestValues(["autoplay"]):T.setAutoplay(r)},[r]),(0,o.useEffect)(()=>{typeof u>"u"?T.revertToManifestValues(["direction"]):T.setDirection(u)},[u]),(0,o.useEffect)(()=>{typeof l>"u"?T.revertToManifestValues(["speed"]):T.setSpeed(l)},[l]),(0,o.useEffect)(()=>{typeof c>"u"?T.revertToManifestValues(["playMode"]):T.setMode(c)},[c]),(0,o.useEffect)(()=>{typeof h>"u"?T.revertToManifestValues(["hover"]):T.setHover(h)},[h]),(0,o.useEffect)(()=>{typeof i>"u"?T.setBackground("transparent"):T.setBackground(i)},[i]),(0,o.useEffect)(()=>{typeof s>"u"?T.revertToManifestValues(["intermission"]):T.setIntermission(s)},[s]),(0,o.useEffect)(()=>{typeof w>"u"||!w?T.revertToManifestValues(["defaultTheme"]):T.setDefaultTheme(w)},[w]),(0,o.useEffect)(()=>{t&&T.play(t)},[t]),(0,o.useEffect)(()=>(T.addEventListener("DOMLoaded",()=>{e?.(n.a.Ready)}),T.addEventListener("data_ready",()=>{e?.(n.a.DataReady)}),T.addEventListener("data_failed",()=>{e?.(n.a.DataFail)}),T.addEventListener("complete",()=>{T.currentState!==n.b.Playing&&e?.(n.a.Complete)}),T.addEventListener("loopComplete",()=>{e?.(n.a.LoopComplete)}),()=>{T.destroy()}),[T]),(0,o.useEffect)(()=>{switch(k){case n.b.Stopped:e?.(n.a.Stop);break;case n.b.Paused:e?.(n.a.Pause);break;case n.b.Playing:e?.(n.a.Play);break;case n.b.Frozen:e?.(n.a.Freeze);break;case n.b.Error:e?.(n.a.Error)}},[k]),(0,o.useEffect)(()=>{e?.(n.a.Frame,{frame:I,seeker:U})},[I]),(0,f.jsx)(n.g,{value:T,children:(0,f.jsxs)("div",{className:`dotlottie-container main ${b?"controls":""} ${B}`,lang:"en",...m&&{"data-testid":m},...E,children:[(0,f.jsx)("div",{ref:A,"data-name":`${L}`,role:"figure",className:`animation ${b?"controls":""}`,style:{position:"relative"},...m&&{"data-testid":"animation"},children:k===n.b.Error&&(0,f.jsx)("div",{...m&&{"data-testid":"error"},className:"error",children:"⚠️"})}),b]})})}},4699:function(e,t){"use strict";t.byteLength=function(e){var t=getLens(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,f=getLens(e),i=f[0],u=f[1],s=new o((i+u)*3/4-u),a=0,c=u>0?i-4:i;for(r=0;r<c;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===u&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===u&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,f=[],i=0,u=n-o;i<u;i+=16383)f.push(function(e,t,n){for(var o,f=[],i=t;i<n;i+=3)f.push(r[(o=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return f.join("")}(e,i,i+16383>u?u:i+16383));return 1===o?f.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===o&&f.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),f.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,u=f.length;i<u;++i)r[i]=f[i],n[f.charCodeAt(i)]=i;function getLens(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},7133:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=r(4699),o=r(9087),f="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,Buffer.prototype),t}function Buffer(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(e)}return from(e,t,r)}function from(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!Buffer.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|byteLength(e,t),n=createBuffer(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(isInstance(e,Uint8Array)){var t=new Uint8Array(e);return fromArrayBuffer(t.buffer,t.byteOffset,t.byteLength)}return fromArrayLike(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer)))return fromArrayBuffer(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return Buffer.from(n,t,r);var o=function(e){if(Buffer.isBuffer(e)){var t,r=0|checked(e.length),n=createBuffer(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?createBuffer(0):fromArrayLike(e):"Buffer"===e.type&&Array.isArray(e.data)?fromArrayLike(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Buffer.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function assertSize(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function allocUnsafe(e){return assertSize(e),createBuffer(e<0?0:0|checked(e))}function fromArrayLike(e){for(var t=e.length<0?0:0|checked(e.length),r=createBuffer(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function fromArrayBuffer(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Buffer.prototype),n}function checked(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function byteLength(e,t){if(Buffer.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return base64ToBytes(e).length;default:if(o)return n?-1:utf8ToBytes(e).length;t=(""+t).toLowerCase(),o=!0}}function slowToString(e,t,r){var o,f,i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",f=t;f<r;++f)o+=u[e[f]];return o}(this,t,r);case"utf8":case"utf-8":return utf8Slice(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return o=t,f=r,0===o&&f===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,f));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),o="",f=0;f<n.length-1;f+=2)o+=String.fromCharCode(n[f]+256*n[f+1]);return o}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function swap(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function bidirectionalIndexOf(e,t,r,n,o){var f;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(f=r=+r)!=f&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof t&&(t=Buffer.from(t,n)),Buffer.isBuffer(t))return 0===t.length?-1:arrayIndexOf(e,t,r,n,o);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):arrayIndexOf(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,t,r,n,o){var f,i=1,u=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;i=2,u/=2,s/=2,r/=2}function read(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(o){var a=-1;for(f=r;f<u;f++)if(read(e,f)===read(t,-1===a?0:f-a)){if(-1===a&&(a=f),f-a+1===s)return a*i}else -1!==a&&(f-=f-a),a=-1}else for(r+s>u&&(r=u-s),f=r;f>=0;f--){for(var c=!0,h=0;h<s;h++)if(read(e,f+h)!==read(t,h)){c=!1;break}if(c)return f}return -1}function utf8Slice(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var f,i,u,s,a=e[o],c=null,h=a>239?4:a>223?3:a>191?2:1;if(o+h<=r)switch(h){case 1:a<128&&(c=a);break;case 2:(192&(f=e[o+1]))==128&&(s=(31&a)<<6|63&f)>127&&(c=s);break;case 3:f=e[o+1],i=e[o+2],(192&f)==128&&(192&i)==128&&(s=(15&a)<<12|(63&f)<<6|63&i)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:f=e[o+1],i=e[o+2],u=e[o+3],(192&f)==128&&(192&i)==128&&(192&u)==128&&(s=(15&a)<<18|(63&f)<<12|(63&i)<<6|63&u)>65535&&s<1114112&&(c=s)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function checkOffset(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function checkInt(e,t,r,n,o,f){if(!Buffer.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<f)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function checkIEEE754(e,t,r,n,o,f){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function writeFloat(e,t,r,n,f){return t=+t,r>>>=0,f||checkIEEE754(e,t,r,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,r,n,23,4),r+4}function writeDouble(e,t,r,n,f){return t=+t,r>>>=0,f||checkIEEE754(e,t,r,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,r,n,52,8),r+8}t.lW=Buffer,t.h2=50,Buffer.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(e,t,r){return from(e,t,r)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(e,t,r){return(assertSize(e),e<=0)?createBuffer(e):void 0!==t?"string"==typeof r?createBuffer(e).fill(t,r):createBuffer(e).fill(t):createBuffer(e)},Buffer.allocUnsafe=function(e){return allocUnsafe(e)},Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)},Buffer.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Buffer.prototype},Buffer.compare=function(e,t){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),!Buffer.isBuffer(e)||!Buffer.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,f=Math.min(r,n);o<f;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Buffer.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=Buffer.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var f=e[r];if(isInstance(f,Uint8Array))o+f.length>n.length?Buffer.from(f).copy(n,o):Uint8Array.prototype.set.call(n,f,o);else if(Buffer.isBuffer(f))f.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=f.length}return n},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)swap(this,t,t+1);return this},Buffer.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)swap(this,t,t+3),swap(this,t+1,t+2);return this},Buffer.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)swap(this,t,t+7),swap(this,t+1,t+6),swap(this,t+2,t+5),swap(this,t+3,t+4);return this},Buffer.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?utf8Slice(this,0,e):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(e){if(!Buffer.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===Buffer.compare(this,e)},Buffer.prototype.inspect=function(){var e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},f&&(Buffer.prototype[f]=Buffer.prototype.inspect),Buffer.prototype.compare=function(e,t,r,n,o){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),!Buffer.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var f=o-n,i=r-t,u=Math.min(f,i),s=this.slice(n,o),a=e.slice(t,r),c=0;c<u;++c)if(s[c]!==a[c]){f=s[c],i=a[c];break}return f<i?-1:i<f?1:0},Buffer.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},Buffer.prototype.indexOf=function(e,t,r){return bidirectionalIndexOf(this,e,t,r,!0)},Buffer.prototype.lastIndexOf=function(e,t,r){return bidirectionalIndexOf(this,e,t,r,!1)},Buffer.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,f,i,u,s,a,c,h,l=this.length-t;if((void 0===r||r>l)&&(r=l),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var f=t.length;n>f/2&&(n=f/2);for(var i=0;i<n;++i){var u=parseInt(t.substr(2*i,2),16);if(u!=u)break;e[r+i]=u}return i}(this,e,t,r);case"utf8":case"utf-8":return o=t,f=r,blitBuffer(utf8ToBytes(e,this.length-o),this,o,f);case"ascii":case"latin1":case"binary":return i=t,u=r,blitBuffer(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,i,u);case"base64":return s=t,a=r,blitBuffer(base64ToBytes(e),this,s,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,blitBuffer(function(e,t){for(var r,n,o=[],f=0;f<e.length&&!((t-=2)<0);++f)n=(r=e.charCodeAt(f))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,h);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,Buffer.prototype),n},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||checkOffset(e,t,this.length);for(var n=this[e],o=1,f=0;++f<t&&(o*=256);)n+=this[e+f]*o;return n},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||checkOffset(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(e,t){return e>>>=0,t||checkOffset(e,1,this.length),this[e]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(e,t){return e>>>=0,t||checkOffset(e,2,this.length),this[e]|this[e+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(e,t){return e>>>=0,t||checkOffset(e,2,this.length),this[e]<<8|this[e+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Buffer.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||checkOffset(e,t,this.length);for(var n=this[e],o=1,f=0;++f<t&&(o*=256);)n+=this[e+f]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},Buffer.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||checkOffset(e,t,this.length);for(var n=t,o=1,f=this[e+--n];n>0&&(o*=256);)f+=this[e+--n]*o;return f>=(o*=128)&&(f-=Math.pow(2,8*t)),f},Buffer.prototype.readInt8=function(e,t){return(e>>>=0,t||checkOffset(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},Buffer.prototype.readInt16LE=function(e,t){e>>>=0,t||checkOffset(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt16BE=function(e,t){e>>>=0,t||checkOffset(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt32LE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Buffer.prototype.readInt32BE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Buffer.prototype.readFloatLE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),o.read(this,e,!0,23,4)},Buffer.prototype.readFloatBE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),o.read(this,e,!1,23,4)},Buffer.prototype.readDoubleLE=function(e,t){return e>>>=0,t||checkOffset(e,8,this.length),o.read(this,e,!0,52,8)},Buffer.prototype.readDoubleBE=function(e,t){return e>>>=0,t||checkOffset(e,8,this.length),o.read(this,e,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;checkInt(this,e,t,r,o,0)}var f=1,i=0;for(this[t]=255&e;++i<r&&(f*=256);)this[t+i]=e/f&255;return t+r},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;checkInt(this,e,t,r,o,0)}var f=r-1,i=1;for(this[t+f]=255&e;--f>=0&&(i*=256);)this[t+f]=e/i&255;return t+r},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,1,255,0),this[t]=255&e,t+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Buffer.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);checkInt(this,e,t,r,o-1,-o)}var f=0,i=1,u=0;for(this[t]=255&e;++f<r&&(i*=256);)e<0&&0===u&&0!==this[t+f-1]&&(u=1),this[t+f]=(e/i>>0)-u&255;return t+r},Buffer.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);checkInt(this,e,t,r,o-1,-o)}var f=r-1,i=1,u=0;for(this[t+f]=255&e;--f>=0&&(i*=256);)e<0&&0===u&&0!==this[t+f+1]&&(u=1),this[t+f]=(e/i>>0)-u&255;return t+r},Buffer.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Buffer.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Buffer.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Buffer.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Buffer.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||checkInt(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Buffer.prototype.writeFloatLE=function(e,t,r){return writeFloat(this,e,t,!0,r)},Buffer.prototype.writeFloatBE=function(e,t,r){return writeFloat(this,e,t,!1,r)},Buffer.prototype.writeDoubleLE=function(e,t,r){return writeDouble(this,e,t,!0,r)},Buffer.prototype.writeDoubleBE=function(e,t,r){return writeDouble(this,e,t,!1,r)},Buffer.prototype.copy=function(e,t,r,n){if(!Buffer.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},Buffer.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,f=e.charCodeAt(0);("utf8"===n&&f<128||"latin1"===n)&&(e=f)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var i=Buffer.isBuffer(e)?e:Buffer.from(e,n),u=i.length;if(0===u)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%u]}return this};var i=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(e,t){t=t||1/0;for(var r,n=e.length,o=null,f=[],i=0;i<n;++i){if((r=e.charCodeAt(i))>55295&&r<57344){if(!o){if(r>56319||i+1===n){(t-=3)>-1&&f.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&f.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&f.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;f.push(r)}else if(r<2048){if((t-=2)<0)break;f.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;f.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;f.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return f}function base64ToBytes(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(i,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function blitBuffer(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}function isInstance(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var u=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}()},9087:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,o){var f,i,u=8*o-n-1,s=(1<<u)-1,a=s>>1,c=-7,h=r?o-1:0,l=r?-1:1,p=e[t+h];for(h+=l,f=p&(1<<-c)-1,p>>=-c,c+=u;c>0;f=256*f+e[t+h],h+=l,c-=8);for(i=f&(1<<-c)-1,f>>=-c,c+=n;c>0;i=256*i+e[t+h],h+=l,c-=8);if(0===f)f=1-a;else{if(f===s)return i?NaN:(p?-1:1)*(1/0);i+=Math.pow(2,n),f-=a}return(p?-1:1)*i*Math.pow(2,f-n)},t.write=function(e,t,r,n,o,f){var i,u,s,a=8*f-o-1,c=(1<<a)-1,h=c>>1,l=23===o?5960464477539062e-23:0,p=n?0:f-1,y=n?1:-1,d=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(u=isNaN(t)?1:0,i=c):(i=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-i))<1&&(i--,s*=2),i+h>=1?t+=l/s:t+=l*Math.pow(2,1-h),t*s>=2&&(i++,s/=2),i+h>=c?(u=0,i=c):i+h>=1?(u=(t*s-1)*Math.pow(2,o),i+=h):(u=t*Math.pow(2,h-1)*Math.pow(2,o),i=0));o>=8;e[r+p]=255&u,p+=y,u/=256,o-=8);for(i=i<<o|u,a+=o;a>0;e[r+p]=255&i,p+=y,i/=256,a-=8);e[r+p-y]|=128*d}},2601:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(8960)},2834:function(){},8960:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var f=[],i=!1,u=-1;function cleanUpNextTick(){i&&n&&(i=!1,n.length?f=n.concat(f):u=-1,f.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=f.length;t;){for(n=f,f=[];++u<t;)n&&n[u].run();u=-1,t=f.length}n=null,i=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new Item(e,t)),1!==f.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function __nccwpck_require__(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},f=!0;try{t[e](o,o.exports,__nccwpck_require__),f=!1}finally{f&&delete r[e]}return o.exports}__nccwpck_require__.ab="//";var n=__nccwpck_require__(229);e.exports=n}()}}]);