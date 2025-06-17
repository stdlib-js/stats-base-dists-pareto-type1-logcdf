"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(R,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-log1p/dist'),a=require('@stdlib/math-base-special-pow/dist'),g=require('@stdlib/constants-float64-ninf/dist');function y(e,r,i){return n(e)||n(r)||n(i)||r<=0||i<=0?NaN:e<i?g:N(-a(i/e,r))}c.exports=y
});var q=o(function(j,s){
var d=require('@stdlib/utils-constant-function/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-log1p/dist'),F=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/constants-float64-ninf/dist');function I(e,r){if(t(e)||t(r)||e<=0||r<=0)return d(NaN);return i;function i(u){return t(u)?NaN:u<r?w:p(-F(r/u,e))}}s.exports=I
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=f(),m=q();l(v,"factory",m);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
