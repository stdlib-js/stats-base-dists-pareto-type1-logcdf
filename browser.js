// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=t;function y(r){return r!=r}var p,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"";p=v&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return b.call(r);n=r[w],u=w,t=null!=(o=r)&&d.call(o,u);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)};var s,_=p,A="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(A&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U,N=s,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=U,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),n=t,r=(E&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,65536,65537]),n=t,r=(P&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V={uint16:H,uint8:G};(M=new V.uint16(1))[0]=4660;var W=52===new V.uint8(M.buffer)[0],k=!0===W?1:0,Y=new S(1),q=new N(Y.buffer);function C(r){return Y[0]=r,q[k]}var z=!0===W?1:0,B=new S(1),D=new N(B.buffer);function J(r,t){return B[0]=r,D[z]=t>>>0,B[0]}var K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,R=1023,X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var t,n,e,o,u,i,f,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return Q;if(r===K)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=C(c=1+r))>>20)-R)>0?1-(c-r):r-(c-1),u/=c):(l=((n=C(c=r))>>20)-R,u=0),(n&=1048575)<434334?c=J(c,1072693248|n):(l+=1,c=J(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*X+(u+=l*Z):l*X-((a=t*(1-.6666666666666666*o))-(l*Z+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?o-(t-i*(t+a)):l*X-(t-(i*(t+a)+(l*Z+u))-o))}var rr=Math.floor;function tr(r){return rr(r)===r}function nr(r){return tr(r/2)}function er(r){return nr(r>0?r-1:r+1)}function or(r){return r===K||r===Q}var ur,ir,fr=Math.sqrt;function ar(r){return Math.abs(r)}!0===W?(ur=1,ir=0):(ur=0,ir=1);var cr={HIGH:ur,LOW:ir},lr=new S(1),yr=new N(lr.buffer),pr=cr.HIGH,vr=cr.LOW;function br(r,t){return lr[0]=t,r[0]=yr[pr],r[1]=yr[vr],r}function dr(r,t){return 1===arguments.length?br([0,0],r):br(r,t)}var wr,sr,_r=!0===W?0:1,Ar=new S(1),mr=new N(Ar.buffer);function hr(r,t){return Ar[0]=r,mr[_r]=t>>>0,Ar[0]}function Ur(r){return 0|r}!0===W?(wr=1,sr=0):(wr=0,sr=1);var Nr={HIGH:wr,LOW:sr},gr=new S(1),jr=new N(gr.buffer),Ir=Nr.HIGH,Or=Nr.LOW;function Sr(r,t){return jr[Ir]=r,jr[Or]=t,gr[0]}var Er=[0,0];function Fr(r,t){var n,e;return dr(Er,r),n=Er[0],n&=2147483647,e=C(t),Sr(n|=e&=2147483648,Er[1])}var Tr=1048576,Hr=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];function xr(r,t){return y(t)||or(t)?(r[0]=t,r[1]=0,r):0!==t&&ar(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Lr=[0,0],Mr=[0,0];function Vr(r,t){var n,e;return 0===t||0===r||y(r)||or(r)?r:(function(r,t){1===arguments.length?xr([0,0],r):xr(r,t)}(Lr,r),t+=Lr[1],t+=function(r){var t=C(r);return(t=(2146435072&t)>>>20)-R|0}(r=Lr[0]),t<-1074?Fr(0,r):t>1023?r<0?Q:K:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr(Mr,r),n=Mr[0],n&=2148532223,e*Sr(n|=t+R<<20,Mr[1])))}var Wr=2147483647,kr=1048575,Yr=1048576,qr=2147483647,Cr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,t){var n,e,o,u,i,f,a,c,l,p,v,b,d,w;if(y(r)||y(t))return NaN;if(dr(Dr,t),i=Dr[0],0===Dr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return fr(r);if(-.5===t)return 1/fr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(or(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(t===K)?0:K}(r,t)}if(dr(Dr,r),u=Dr[0],0===Dr[1]){if(0===u)return function(r,t){return t===Q?K:t===K?0:t>0?er(t)?r:0:er(t)?Fr(K,r):K}(r,t);if(1===r)return 1;if(-1===r&&er(t))return-1;if(or(r))return r===Q?Kr(-0,-t):t<0?0:K}if(r<0&&!1===tr(t))return(r-r)/(r-r);if(o=ar(r),n=u&qr|0,e=i&qr|0,a=i>>>31|0,f=(f=u>>>31|0)&&er(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&C(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*zr*zr:f*Br*Br;if(n>1072693248)return 0===a?f*zr*zr:f*Br*Br;v=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=hr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Jr,o)}else v=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,h,U,N;return m=0,n<Tr&&(m-=53,n=C(t*=9007199254740992)),m+=(n>>20)-R|0,n=1072693248|(h=1048575&n|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,n-=Tr),i=hr(o=(_=(t=J(t,n))-(c=Hr[U]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),a=J(0,e+=U<<18),s=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=hr(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=hr(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Pr[U])-((b=hr(b=(p=.9617967009544373*y)+v+(l=Gr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Jr,o,n);if(p=(t-(c=hr(t,0)))*v[0]+t*v[1],l=c*v[0],dr(Dr,b=p+l),d=Ur(Dr[0]),w=Ur(Dr[1]),d>=Cr){if(0!=(d-Cr|w))return f*zr*zr;if(p+8008566259537294e-32>b-l)return f*zr*zr}else if((d&qr)>=1083231232){if(0!=(d-3230714880|w))return f*Br*Br;if(p<=b-l)return f*Br*Br}return b=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Wr|0)>>20)-R|0,c=0,l>1071644672&&(o=J(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&Wr)>>20)-R|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=Ur(r=C(a=1-((a=(u=.6931471824645996*(o=hr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Vr(a,c):J(a,r)}(d,l,p),f*b}function Qr(r,t,n){return y(r)||y(t)||y(n)||t<=0||n<=0?NaN:r<n?Q:$(-Kr(n/r,t))}function Rr(r,t){return y(r)||y(t)||r<=0||t<=0?(n=NaN,function(){return n}):function(n){return y(n)?NaN:n<t?Q:$(-Kr(t/n,r))};var n}l(Qr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Rr}),r.default=Qr,r.factory=Rr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).logcdf={});
//# sourceMappingURL=browser.js.map
