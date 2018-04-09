var c;c||(c=typeof Module !== 'undefined' ? Module : {});var g={},m;for(m in c)c.hasOwnProperty(m)&&(g[m]=c[m]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var p=!1,q=!1,u=!1,v=!1;
if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)p=!0;else if("WORKER"===c.ENVIRONMENT)q=!0;else if("NODE"===c.ENVIRONMENT)u=!0;else if("SHELL"===c.ENVIRONMENT)v=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else p="object"===typeof window,q="function"===typeof importScripts,u="object"===typeof process&&"function"===typeof require&&!p&&!q,v=!p&&!u&&!q;
if(u){var w,x;c.read=function(a,b){w||(w=require("fs"));x||(x=require("path"));a=x.normalize(a);a=w.readFileSync(a);return b?a:a.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof y))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});c.inspect=function(){return"[Emscripten Module object]"}}else if(v)"undefined"!=typeof read&&(c.read=function(a){return read(a)}),c.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)});else if(p||q)c.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(c.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),c.readAsync=function(a,b,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=typeof arguments&&(c.arguments=arguments),c.setWindowTitle=
function(a){document.title=a};c.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;c.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||c.print;c.print=c.print;c.printErr=c.printErr;for(m in g)g.hasOwnProperty(m)&&(c[m]=g[m]);g=void 0;function aa(a){var b;b||(b=16);return Math.ceil(a/b)*b}var z=0;function assert(a,b){a||A("Assertion failed: "+b)}"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");
"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function B(a,b){0<a%b&&(a+=b-a%b);return a}var buffer,C,D,E,G,H,I,ba,ca;function J(){c.HEAP8=C=new Int8Array(buffer);c.HEAP16=E=new Int16Array(buffer);c.HEAP32=H=new Int32Array(buffer);c.HEAPU8=D=new Uint8Array(buffer);c.HEAPU16=G=new Uint16Array(buffer);c.HEAPU32=I=new Uint32Array(buffer);c.HEAPF32=ba=new Float32Array(buffer);c.HEAPF64=ca=new Float64Array(buffer)}var K,L,da,ea,N,fa,ha,O;K=L=ea=N=fa=ha=O=0;da=!1;
c.reallocBuffer||(c.reallocBuffer=function(a){try{if(ArrayBuffer.j)var b=ArrayBuffer.j(buffer,a);else{var d=C;b=new ArrayBuffer(a);(new Int8Array(b)).set(d)}}catch(e){return!1}return ia(b)?b:!1});var ja;try{ja=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get),ja(new ArrayBuffer(4))}catch(a){ja=function(b){return b.byteLength}}var ka=c.TOTAL_STACK||5242880,P=c.TOTAL_MEMORY||16777216;
P<ka&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+P+"! (TOTAL_STACK="+ka+")");c.buffer?buffer=c.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(c.wasmMemory=new WebAssembly.Memory({initial:P/65536}),buffer=c.wasmMemory.buffer):buffer=new ArrayBuffer(P),c.buffer=buffer);J();H[0]=1668509029;E[1]=25459;if(115!==D[2]||99!==D[3])throw"Runtime error: expected the system to be little-endian!";
function Q(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.g;"number"===typeof d?void 0===b.b?c.dynCall_v(d):c.dynCall_vi(d,b.b):d(void 0===b.b?null:b.b)}}}var la=[],ma=[],na=[],oa=[],pa=[],qa=!1;function ra(){var a=c.preRun.shift();la.unshift(a)}var R=0,sa=null,S=null;c.preloadedImages={};c.preloadedAudios={};
function ta(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(a){function b(a){f=a.exports;if(f.memory){a=f.memory;var b=c.buffer;a.byteLength<b.byteLength&&c.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);c.buffer=buffer=a;J()}c.asm=f;c.usingWasm=!0;R--;c.monitorRunDependencies&&c.monitorRunDependencies(R);0==R&&(null!==sa&&(clearInterval(sa),sa=null),S&&(a=S,S=null,a()))}if("object"!==typeof WebAssembly)return c.printErr("no native wasm support detected"),
!1;if(!(c.wasmMemory instanceof WebAssembly.Memory))return c.printErr("no native wasm Memory in use"),!1;a.memory=c.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;R++;c.monitorRunDependencies&&c.monitorRunDependencies(R);if(c.instantiateWasm)try{return c.instantiateWasm(h,b)}catch(F){return c.printErr("Module.instantiateWasm callback failed with error: "+F),!1}try{var e=WebAssembly.Instance,r=WebAssembly.Module;a:{try{if(c.wasmBinary){var k=new Uint8Array(c.wasmBinary);
break a}if(c.readBinary){k=c.readBinary(d);break a}throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(F){A(F)}k=void 0}var n=new e(new r(k),h)}catch(F){return c.printErr("failed to compile wasm module: "+F),0<=F.toString().indexOf("imported Memory with incompatible size")&&c.printErr("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time)."),
!1}b(n);return f}var b="Module.wast",d="Module.wasm",e="Module.temp.asm.js";"function"===typeof c.locateFile&&(ta(b)||(b=c.locateFile(b)),ta(d)||(d=c.locateFile(d)),ta(e)||(e=c.locateFile(e)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:c},f=null;c.asmPreload=c.asm;var k=c.reallocBuffer;c.reallocBuffer=function(a){if("asmjs"===n)var b=k(a);else a:{a=B(a,c.usingWasm?65536:16777216);var d=c.buffer.byteLength;if(c.usingWasm)try{b=
-1!==c.wasmMemory.grow((a-d)/65536)?c.buffer=c.wasmMemory.buffer:null;break a}catch(M){b=null;break a}b=void 0}return b};var n="";c.asm=function(b,d){if(!d.table){b=c.wasmTableSize;void 0===b&&(b=1024);var e=c.wasmMaxTableSize;d.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:b,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);c.wasmTable=d.table}d.memoryBase||(d.memoryBase=c.STATIC_BASE);
d.tableBase||(d.tableBase=0);(d=a(d))||A("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return d}})();K=1024;L=K+3792;ma.push({g:function(){ua()}});c.STATIC_BASE=K;c.STATIC_BUMP=3792;L+=16;function va(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var wa=void 0;
function T(a){for(var b="";D[a];)b+=wa[D[a++]];return b}var xa={},ya={},za={};function Aa(a,b){if(void 0===a)a="_unknown";else{a=a.replace(/[^a-zA-Z0-9_]/g,"$");var d=a.charCodeAt(0);a=48<=d&&57>=d?"_"+a:a}return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ba(a){var b=Error,d=Aa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(b.prototype);d.prototype.constructor=d;d.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}var Ca=void 0;function U(a){throw new Ca(a);}
function V(a,b,d){d=d||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||U('type "'+e+'" must have a positive integer typeid pointer');if(ya.hasOwnProperty(a)){if(d.h)return;U("Cannot register type '"+e+"' twice")}ya[a]=b;delete za[a];xa.hasOwnProperty(a)&&(b=xa[a],delete xa[a],b.forEach(function(a){a()}))}var Da=[],W=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ea(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Da.length?Da.pop():W.length;W[b]={i:1,value:a};return b}}function Fa(a){return this.fromWireType(I[a>>2])}function Ga(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Ha(a,b){switch(b){case 2:return function(a){return this.fromWireType(ba[a>>2])};case 3:return function(a){return this.fromWireType(ca[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Ia(a,b,d){switch(b){case 0:return d?function(a){return C[a]}:function(a){return D[a]};case 1:return d?function(a){return E[a>>1]}:function(a){return G[a>>1]};case 2:return d?function(a){return H[a>>2]}:function(a){return I[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}for(var Ja=Array(256),X=0;256>X;++X)Ja[X]=String.fromCharCode(X);wa=Ja;Ca=c.BindingError=Ba("BindingError");c.InternalError=Ba("InternalError");
c.count_emval_handles=function(){for(var a=0,b=5;b<W.length;++b)void 0!==W[b]&&++a;return a};c.get_first_emval=function(){for(var a=5;a<W.length;++a)if(void 0!==W[a])return W[a];return null};assert(!da);var Ka=L;L=L+4+15&-16;O=Ka;ea=N=aa(L);fa=ea+ka;ha=aa(fa);H[O>>2]=ha;da=!0;c.wasmTableSize=24;c.wasmMaxTableSize=24;c.c={};
c.f={abort:A,enlargeMemory:function(){var a=c.usingWasm?65536:16777216,b=2147483648-a;if(H[O>>2]>b)return!1;var d=P;for(P=Math.max(P,16777216);P<H[O>>2];)536870912>=P?P=B(2*P,a):P=Math.min(B((3*P+2147483648)/4,a),b);a=c.reallocBuffer(P);if(!a||a.byteLength!=P)return P=d,!1;c.buffer=buffer=a;J();return!0},getTotalMemory:function(){return P},abortOnCannotGrowMemory:function(){A("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+P+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},
___setErrNo:function(a){c.___errno_location&&(H[c.___errno_location()>>2]=a);return a},__embind_register_bool:function(a,b,d,e,h){var f=va(d);b=T(b);V(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:h},argPackAdvance:8,readValueFromPointer:function(a){if(1===d)var e=C;else if(2===d)e=E;else if(4===d)e=H;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>f])},a:null})},__embind_register_emval:function(a,b){b=T(b);V(a,{name:b,fromWireType:function(a){var b=
W[a].value;4<a&&0===--W[a].i&&(W[a]=void 0,Da.push(a));return b},toWireType:function(a,b){return Ea(b)},argPackAdvance:8,readValueFromPointer:Fa,a:null})},__embind_register_float:function(a,b,d){d=va(d);b=T(b);V(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+Ga(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Ha(b,d),a:null})},__embind_register_integer:function(a,b,d,e,h){function f(a){return a}
b=T(b);-1===h&&(h=4294967295);var k=va(d);if(0===e){var n=32-8*d;f=function(a){return a<<n>>>n}}var r=-1!=b.indexOf("unsigned");V(a,{name:b,fromWireType:f,toWireType:function(a,d){if("number"!==typeof d&&"boolean"!==typeof d)throw new TypeError('Cannot convert "'+Ga(d)+'" to '+this.name);if(d<e||d>h)throw new TypeError('Passing a number "'+Ga(d)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+h+"]!");return r?d>>>0:d|0},argPackAdvance:8,readValueFromPointer:Ia(b,
k,0!==e),a:null})},__embind_register_memory_view:function(a,b,d){function e(a){a>>=2;var b=I;return new h(b.buffer,b[a+1],b[a])}var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];d=T(d);V(a,{name:d,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{h:!0})},__embind_register_std_string:function(a,b){b=T(b);V(a,{name:b,fromWireType:function(a){for(var b=I[a>>2],d=Array(b),f=0;f<b;++f)d[f]=String.fromCharCode(D[a+4+f]);Y(a);return d.join("")},
toWireType:function(a,b){function d(a,b){return a[b]}function e(a,b){return a.charCodeAt(b)}b instanceof ArrayBuffer&&(b=new Uint8Array(b));var k;b instanceof Uint8Array?k=d:b instanceof Uint8ClampedArray?k=d:b instanceof Int8Array?k=d:"string"===typeof b?k=e:U("Cannot pass non-string to std::string");var n=b.length,r=La(4+n);I[r>>2]=n;for(var l=0;l<n;++l){var t=k(b,l);255<t&&(Y(r),U("String has UTF-16 code units that do not fit in 8 bits"));D[r+4+l]=t}null!==a&&a.push(Y,r);return r},argPackAdvance:8,
readValueFromPointer:Fa,a:function(a){Y(a)}})},__embind_register_std_wstring:function(a,b,d){d=T(d);if(2===b){var e=function(){return G};var h=1}else 4===b&&(e=function(){return I},h=2);V(a,{name:d,fromWireType:function(a){for(var b=e(),d=I[a>>2],f=Array(d),l=a+4>>h,t=0;t<d;++t)f[t]=String.fromCharCode(b[l+t]);Y(a);return f.join("")},toWireType:function(a,d){var f=e(),k=d.length,l=La(4+k*b);I[l>>2]=k;for(var t=l+4>>h,M=0;M<k;++M)f[t+M]=d.charCodeAt(M);null!==a&&a.push(Y,l);return l},argPackAdvance:8,
readValueFromPointer:Fa,a:function(a){Y(a)}})},__embind_register_void:function(a,b){b=T(b);V(a,{l:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},_emscripten_memcpy_big:function(a,b,d){D.set(D.subarray(b,b+d),a);return a},DYNAMICTOP_PTR:O,STACKTOP:N};var Z=c.asm(c.c,c.f,buffer),ua=c.__GLOBAL__sub_I_bind_cpp=Z.__GLOBAL__sub_I_bind_cpp;c.___errno_location=Z.___errno_location;c.___getTypeName=Z.___getTypeName;
var ia=c._emscripten_replace_memory=Z._emscripten_replace_memory,Y=c._free=Z._free,La=c._malloc=Z._malloc;c.dynCall_vi=Z.dynCall_vi;c.asm=Z;function y(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}y.prototype=Error();y.prototype.constructor=y;S=function Ma(){c.calledRun||Na();c.calledRun||(S=Ma)};
function Na(){function a(){if(!c.calledRun&&(c.calledRun=!0,!z)){qa||(qa=!0,Q(ma));Q(na);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var a=c.postRun.shift();pa.unshift(a)}Q(pa)}}if(!(0<R)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ra();Q(la);0<R||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);
a()},1)):a())}}c.run=Na;c.exit=function(a,b){if(!b||!c.noExitRuntime||0!==a){if(!c.noExitRuntime&&(z=!0,N=void 0,Q(oa),c.onExit))c.onExit(a);u&&process.exit(a);c.quit(a,new y(a))}};function A(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";z=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}c.abort=A;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();c.noExitRuntime=!0;Na();
