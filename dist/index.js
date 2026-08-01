"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=c(function(F,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-sin/dist'),P=require('@stdlib/math-base-special-abs2/dist'),_=require('@stdlib/constants-float64-pi/dist'),a=_/4;function d(e,r,t){var n;return u(e)||u(r)||u(t)||t<=0?NaN:(n=(e-r)/t,n<=-a?0:n>=a?1:P(I(n+a)))}s.exports=d
});var y=c(function(h,o){
var p=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-sin/dist'),R=require('@stdlib/math-base-special-abs2/dist'),b=require('@stdlib/constants-float64-pi/dist'),f=b/4;function E(e,r){if(v(e)||v(r)||r<=0)return p(NaN);return t;function t(n){var i;return v(n)?NaN:(i=(n-e)/r,i<=-f?0:i>=f?1:R(O(i+f)))}}o.exports=E
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=q(),l=y();V(N,"factory",l);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
