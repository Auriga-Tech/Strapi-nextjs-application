(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[8418],{44981:(U,A,p)=>{"use strict";U.exports=p(5582)},5582:function(U,A,p){(function(l,O){U.exports=O(p(53547),p(78384),p(74764))})(this,function(l,O,M){return function(n){var s={};function t(a){if(s[a])return s[a].exports;var o=s[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=s,t.d=function(a,o,i){t.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:i})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,o){if(1&o&&(a=t(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var d in a)t.d(i,d,function(f){return a[f]}.bind(null,d));return i},t.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(o,"a",o),o},t.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},t.p="",t(t.s=112)}({0:function(n,s,t){n.exports=t(19)()},1:function(n,s){n.exports=l},10:function(n,s,t){var a=t(25),o=t(26),i=t(22),d=t(27);n.exports=function(f,m){return a(f)||o(f,m)||i(f,m)||d()},n.exports.default=n.exports,n.exports.__esModule=!0},112:function(n,s,t){"use strict";t.r(s),t.d(s,"Crumb",function(){return W}),t.d(s,"Breadcrumbs",function(){return Z});var a,o=t(4),i=t.n(o),d=t(3),f=t.n(d),m=t(1),x=t.n(m),b=t(0),v=t.n(b),u=t(2),E=t.n(u),j=t(50),S=t.n(j),C=t(8),w=t(6),e=t(9),r=t(18),c=["children","label"],H=E()(e.Flex)(a||(a=f()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(F){return F.theme.colors.neutral300},w.Box),W=function(F){var N=F.children;return x.a.createElement(H,{inline:!0,as:"li"},x.a.createElement(C.Typography,{fontWeight:"bold",color:"neutral800"},N),x.a.createElement(w.Box,{paddingLeft:3,paddingRight:3},x.a.createElement(S.a,null)))};W.displayName="Crumb",W.propTypes={children:v.a.string.isRequired};var Q=v.a.shape({type:v.a.oneOf([W])}),Z=function(F){var N=F.children,V=F.label,X=i()(F,c);return x.a.createElement(e.Flex,X,x.a.createElement(r.VisuallyHidden,null,V),x.a.createElement("ol",{"aria-hidden":!0},N))};Z.displayName="Breadcrumbs",Z.propTypes={children:v.a.oneOfType([v.a.arrayOf(Q),Q]).isRequired,label:v.a.string.isRequired}},13:function(n,s){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},18:function(n,s,t){"use strict";t.r(s),t.d(s,"VisuallyHidden",function(){return f});var a,o=t(3),i=t.n(o),d=t(2),f=t.n(d).a.div(a||(a=i()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(n,s,t){"use strict";var a=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function d(x,b,v,u,E,j){if(j!==a){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function f(){return d}d.isRequired=d;var m={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:f,element:d,elementType:d,instanceOf:f,node:d,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:i,resetWarningCache:o};return m.PropTypes=m,m}},2:function(n,s){n.exports=O},20:function(n,s,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,s){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var o=0,i=new Array(a);o<a;o++)i[o]=t[o];return i},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,s,t){var a=t(21);n.exports=function(o,i){if(o){if(typeof o=="string")return a(o,i);var d=Object.prototype.toString.call(o).slice(8,-1);return d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set"?Array.from(o):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?a(o,i):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,s){n.exports=function(t,a){if(t==null)return{};var o,i,d={},f=Object.keys(t);for(i=0;i<f.length;i++)o=f[i],a.indexOf(o)>=0||(d[o]=t[o]);return d},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,s){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,s){n.exports=function(t,a){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var i,d,f=[],m=!0,x=!1;try{for(o=o.call(t);!(m=(i=o.next()).done)&&(f.push(i.value),!a||f.length!==a);m=!0);}catch(b){x=!0,d=b}finally{try{m||o.return==null||o.return()}finally{if(x)throw d}}return f}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,s){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,s){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,s,t){var a=t(24);n.exports=function(o,i){if(o==null)return{};var d,f,m=a(o,i);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(o);for(f=0;f<x.length;f++)d=x[f],i.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(o,d)&&(m[d]=o[d])}return m},n.exports.default=n.exports,n.exports.__esModule=!0},50:function(n,s){n.exports=M},6:function(n,s,t){"use strict";t.r(s),t.d(s,"Box",function(){return w});var a,o=t(3),i=t.n(o),d=t(2),f=t.n(d),m=t(7),x=t(1),b=t.n(x),v=t(0),u=t.n(v),E=function(e){return b.a.createElement("div",e)},j={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};E.defaultProps=j,E.propTypes=S;var C={color:!0},w=f.a.div.withConfig({shouldForwardProp:function(e,r){return!C[e]&&r(e)}})(a||(a=i()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,c=e.background;return r.colors[c]},function(e){var r=e.theme,c=e.color;return r.colors[c]},function(e){var r=e.theme,c=e.padding;return Object(m.a)("padding",c,r)},function(e){var r=e.theme,c=e.paddingTop;return Object(m.a)("padding-top",c,r)},function(e){var r=e.theme,c=e.paddingRight;return Object(m.a)("padding-right",c,r)},function(e){var r=e.theme,c=e.paddingBottom;return Object(m.a)("padding-bottom",c,r)},function(e){var r=e.theme,c=e.paddingLeft;return Object(m.a)("padding-left",c,r)},function(e){var r=e.theme,c=e.marginLeft;return Object(m.a)("margin-left",c,r)},function(e){var r=e.theme,c=e.marginRight;return Object(m.a)("margin-right",c,r)},function(e){var r=e.theme,c=e.marginTop;return Object(m.a)("margin-top",c,r)},function(e){var r=e.theme,c=e.marginBottom;return Object(m.a)("margin-bottom",c,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,c=e.hasRadius,H=e.borderRadius;return c?r.borderRadius:H},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,c=e.borderColor,H=e.borderStyle,W=e.borderWidth;if(c&&!H&&!W)return"1px solid ".concat(r.colors[c])},function(e){var r=e.theme,c=e.shadow;return r.shadows[c]},function(e){return e.pointerEvents},function(e){var r=e._hover,c=e.theme;return r?r(c):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});w.defaultProps=j,w.propTypes=S},7:function(n,s,t){"use strict";var a=t(10),o=t.n(a),i=t(13),d=t.n(i);s.a=function(f,m,x){var b=m;if(Array.isArray(m)||d()(m)!=="object"||(b=[m==null?void 0:m.desktop,m==null?void 0:m.tablet,m==null?void 0:m.mobile]),b!==void 0){if(Array.isArray(b)){var v=b,u=o()(v,3),E=u[0],j=u[1],S=u[2],C="".concat(f,": ").concat(x.spaces[E],";");return j!==void 0&&(C+="".concat(x.mediaQueries.tablet,`{
          `).concat(f,": ").concat(x.spaces[j],`;
        }`)),S!==void 0&&(C+="".concat(x.mediaQueries.mobile,`{
          `).concat(f,": ").concat(x.spaces[S],`;
        }`)),C}var w=x.spaces[b]||b;return"".concat(f,": ").concat(w,";")}}},8:function(n,s,t){"use strict";t.r(s),t.d(s,"Typography",function(){return w});var a,o=t(3),i=t.n(o),d=t(2),f=t.n(d),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],x=t(1),b=t.n(x),v=t(0),u=t.n(v),E=function(e){return b.a.createElement("div",e)},j={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},S={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(m)};E.defaultProps=j,E.propTypes=S;var C={fontSize:!0,fontWeight:!0},w=f.a.span.withConfig({shouldForwardProp:function(e,r){return!C[e]&&r(e)}})(a||(a=i()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var r=e.theme,c=e.fontWeight;return r.fontWeights[c]},function(e){var r=e.theme,c=e.fontSize;return r.fontSizes[c]},function(e){var r=e.theme,c=e.lineHeight;return r.lineHeights[c]},function(e){var r=e.theme,c=e.textColor;return r.colors[c||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var r=e.variant,c=e.theme;switch(r){case"alpha":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[5],`;
        line-height: `).concat(c.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[4],`;
        line-height: `).concat(c.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(c.fontWeights.semiBold,`;
        font-size: `).concat(c.fontSizes[3],`;
        line-height: `).concat(c.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(c.fontSizes[3],`;
        line-height: `).concat(c.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(c.fontSizes[2],`;
        line-height: `).concat(c.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(c.fontSizes[1],`;
        line-height: `).concat(c.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(c.fontWeights.bold,`;
        font-size: `).concat(c.fontSizes[0],`;
        line-height: `).concat(c.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(c.fontSizes[2],`;
      `)}});w.defaultProps=j,w.propTypes=S},9:function(n,s,t){"use strict";t.r(s),t.d(s,"Flex",function(){return e});var a,o=t(3),i=t.n(o),d=t(2),f=t.n(d),m=t(6),x=t(7),b=t(1),v=t.n(b),u=t(0),E=t.n(u),j=function(r){return v.a.createElement("div",r)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},C={alignItems:E.a.string,basis:E.a.oneOfType([E.a.string,E.a.number]),direction:E.a.string,gap:E.a.oneOfType([E.a.shape({desktop:E.a.number,mobile:E.a.number,tablet:E.a.number}),E.a.number,E.a.arrayOf(E.a.number),E.a.string]),inline:E.a.bool,justifyContent:E.a.string,reverse:E.a.bool,wrap:E.a.string};j.defaultProps=S,j.propTypes=C;var w={direction:!0},e=f()(m.Box).withConfig({shouldForwardProp:function(r,c){return!w[r]&&c(r)}})(a||(a=i()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(r){return r.alignItems},function(r){return r.inline?"inline-flex":"flex"},function(r){return r.direction},function(r){return r.wrap},function(r){var c=r.gap,H=r.theme;return Object(x.a)("gap",c,H)},function(r){return r.justifyContent});e.defaultProps=S,e.propTypes=C}})})},79274:function(U,A,p){(function(l,O){U.exports=O(p(53547))})(this,function(l){return function(O){var M={};function n(s){if(M[s])return M[s].exports;var t=M[s]={i:s,l:!1,exports:{}};return O[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=O,n.c=M,n.d=function(s,t,a){n.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:a})},n.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},n.t=function(s,t){if(1&t&&(s=n(s)),8&t||4&t&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&t&&typeof s!="string")for(var o in s)n.d(a,o,function(i){return s[i]}.bind(null,o));return a},n.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(t,"a",t),t},n.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},n.p="",n(n.s=154)}({0:function(O,M){O.exports=l},154:function(O,M,n){"use strict";n.r(M);var s=n(0);function t(){return(t=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a}).apply(this,arguments)}M.default=function(a){return s.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},84210:(U,A,p)=>{"use strict";p.r(A),p.d(A,{default:()=>Te});var l=p(53547),O=p(23724),M=p(97132),n=p(68547),s=p(67422),t=p(80117),a=p(35395),o=p(51725),i=p(42722),d=(h,y,g)=>new Promise((B,T)=>{var R=P=>{try{L(g.next(P))}catch(z){T(z)}},I=P=>{try{L(g.throw(P))}catch(z){T(z)}},L=P=>P.done?B(P.value):Promise.resolve(P.value).then(R,I);L((g=g.apply(h,y)).next())});const f=()=>d(void 0,null,function*(){const{data:h}=yield i.be.get((0,i.Gc)("email-templates"));return h}),m=h=>i.be.put((0,i.Gc)("email-templates"),h);var x=p(45697),b=p.n(x),v=p(43546),u=p(19631),E=p(33483),j=p(49549),S=p(33699),C=p(56204),w=p.n(C),e=p(79274),r=p.n(e),c=p(22754),H=p.n(c),W=Object.defineProperty,Q=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,N=(h,y,g)=>y in h?W(h,y,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[y]=g,V=(h,y)=>{for(var g in y||(y={}))Z.call(y,g)&&N(h,g,y[g]);if(Q)for(var g of Q(y))F.call(y,g)&&N(h,g,y[g]);return h};const X=({canUpdate:h,onEditClick:y})=>{const{formatMessage:g}=(0,M.useIntl)();return l.createElement(v.Table,{colCount:3,rowCount:3},l.createElement(v.Thead,null,l.createElement(v.Tr,null,l.createElement(v.Th,{width:"1%"},l.createElement(u.VisuallyHidden,null,g({id:(0,i.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),l.createElement(v.Th,null,l.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},g({id:(0,i.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),l.createElement(v.Th,{width:"1%"},l.createElement(u.VisuallyHidden,null,g({id:(0,i.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),l.createElement(v.Tbody,null,l.createElement(v.Tr,V({},(0,n.onRowClick)({fn:()=>y("reset_password")})),l.createElement(v.Td,null,l.createElement(S.Icon,null,l.createElement(r(),{"aria-label":g({id:"global.reset-password",defaultMessage:"Reset password"})}))),l.createElement(v.Td,null,l.createElement(E.Typography,null,g({id:"global.reset-password",defaultMessage:"Reset password"}))),l.createElement(v.Td,V({},n.stopPropagation),l.createElement(j.IconButton,{onClick:()=>y("reset_password"),label:g({id:(0,i.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:h&&l.createElement(w(),null)}))),l.createElement(v.Tr,V({},(0,n.onRowClick)({fn:()=>y("email_confirmation")})),l.createElement(v.Td,null,l.createElement(S.Icon,null,l.createElement(H(),{"aria-label":g({id:(0,i.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),l.createElement(v.Td,null,l.createElement(E.Typography,null,g({id:(0,i.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),l.createElement(v.Td,V({},n.stopPropagation),l.createElement(j.IconButton,{onClick:()=>y("email_confirmation"),label:g({id:(0,i.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:h&&l.createElement(w(),null)})))))};X.propTypes={canUpdate:b().bool.isRequired,onEditClick:b().func.isRequired};const le=X;var ue=p(80831),k=p(68991),$=p(39272),ne=p(64459),ee=p(44981),ce=p(78607),D=p(53209);const de=D.object().shape({options:D.object().shape({from:D.object().shape({name:D.string().required(n.translatedErrors.required),email:D.string().email(n.translatedErrors.email).required(n.translatedErrors.required)}).required(),response_email:D.string().email(n.translatedErrors.email),object:D.string().required(n.translatedErrors.required),message:D.string().required(n.translatedErrors.required)}).required(n.translatedErrors.required)}),re=({template:h,onToggle:y,onSubmit:g})=>{const{formatMessage:B}=(0,M.useIntl)();return l.createElement(k.ModalLayout,{onClose:y,labelledBy:`${B({id:(0,i.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${B({id:(0,i.OB)(h.display),defaultMessage:h.display})}`},l.createElement(k.ModalHeader,null,l.createElement(ee.Breadcrumbs,{label:`${B({id:(0,i.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${B({id:(0,i.OB)(h.display),defaultMessage:h.display})}`},l.createElement(ee.Crumb,null,B({id:(0,i.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),l.createElement(ee.Crumb,null,B({id:(0,i.OB)(h.display),defaultMessage:h.display})))),l.createElement(ue.Formik,{onSubmit:g,initialValues:h,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:T,values:R,handleChange:I,isSubmitting:L})=>{var P,z,K,Y,J,q,_;return l.createElement(n.Form,null,l.createElement(k.ModalBody,null,l.createElement($.Grid,{gap:5},l.createElement($.GridItem,{col:6,s:12},l.createElement(n.GenericInput,{intlLabel:{id:(0,i.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:I,value:R.options.from.name,error:(z=(P=T==null?void 0:T.options)==null?void 0:P.from)==null?void 0:z.name,type:"text"})),l.createElement($.GridItem,{col:6,s:12},l.createElement(n.GenericInput,{intlLabel:{id:(0,i.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:I,value:R.options.from.email,error:(Y=(K=T==null?void 0:T.options)==null?void 0:K.from)==null?void 0:Y.email,type:"text"})),l.createElement($.GridItem,{col:6,s:12},l.createElement(n.GenericInput,{intlLabel:{id:(0,i.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:I,value:R.options.response_email,error:(J=T==null?void 0:T.options)==null?void 0:J.response_email,type:"text"})),l.createElement($.GridItem,{col:6,s:12},l.createElement(n.GenericInput,{intlLabel:{id:(0,i.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:I,value:R.options.object,error:(q=T==null?void 0:T.options)==null?void 0:q.object,type:"text"})),l.createElement($.GridItem,{col:12,s:12},l.createElement(ce.Textarea,{label:B({id:(0,i.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:I,value:R.options.message,error:((_=T==null?void 0:T.options)==null?void 0:_.message)&&B({id:T.options.message,defaultMessage:T.options.message})})))),l.createElement(k.ModalFooter,{startActions:l.createElement(ne.Button,{onClick:y,variant:"tertiary"},"Cancel"),endActions:l.createElement(ne.Button,{loading:L,type:"submit"},"Finish")}))}))};re.propTypes={template:b().shape({display:b().string,icon:b().string,options:b().shape({from:b().shape({name:b().string,email:b().string}),message:b().string,object:b().string,response_email:b().string})}).isRequired,onSubmit:b().func.isRequired,onToggle:b().func.isRequired};const pe=re;var me=Object.defineProperty,fe=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(h,y,g)=>y in h?me(h,y,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[y]=g,ye=(h,y)=>{for(var g in y||(y={}))he.call(y,g)&&ae(h,g,y[g]);if(oe)for(var g of oe(y))ve.call(y,g)&&ae(h,g,y[g]);return h},be=(h,y)=>fe(h,ge(y)),Ee=(h,y,g)=>new Promise((B,T)=>{var R=P=>{try{L(g.next(P))}catch(z){T(z)}},I=P=>{try{L(g.throw(P))}catch(z){T(z)}},L=P=>P.done?B(P.value):Promise.resolve(P.value).then(R,I);L((g=g.apply(h,y)).next())});const xe=()=>l.createElement(n.CheckPagePermissions,{permissions:o.Z.readEmailTemplates},l.createElement(Oe,null)),Oe=()=>{const{formatMessage:h}=(0,M.useIntl)(),{trackUsage:y}=(0,n.useTracking)(),{notifyStatus:g}=(0,s.useNotifyAT)(),B=(0,n.useNotification)(),{lockApp:T,unlockApp:R}=(0,n.useOverlayBlocker)(),I=(0,l.useRef)(y),L=(0,O.useQueryClient)();(0,n.useFocusWhenNavigate)();const[P,z]=(0,l.useState)(!1),[K,Y]=(0,l.useState)(null),J=(0,l.useMemo)(()=>({update:o.Z.updateEmailTemplates}),[]),{isLoading:q,allowedActions:{canUpdate:_}}=(0,n.useRBAC)(J),{status:Pe,data:ie}=(0,O.useQuery)("email-templates",()=>f(),{onSuccess:()=>{g(h({id:(0,i.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Me=q||Pe!=="success",te=()=>{z(G=>!G)},Se=G=>{Y(G),te()},se=(0,O.useMutation)(G=>m({"email-templates":G}),{onSuccess:()=>Ee(void 0,null,function*(){yield L.invalidateQueries("email-templates"),B({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),I.current("didEditEmailTemplates"),R(),te()}),onError:()=>{B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),R()},refetchActive:!0}),{isLoading:je}=se,we=G=>{T(),I.current("willEditEmailTemplates");const Be=be(ye({},ie),{[K]:G});se.mutate(Be)};return Me?l.createElement(t.Main,{"aria-busy":"true"},l.createElement(n.SettingsPageTitle,{name:h({id:(0,i.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),l.createElement(a.HeaderLayout,{title:h({id:(0,i.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),l.createElement(a.ContentLayout,null,l.createElement(n.LoadingIndicatorPage,null))):l.createElement(t.Main,{"aria-busy":je},l.createElement(n.SettingsPageTitle,{name:h({id:(0,i.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),l.createElement(a.HeaderLayout,{title:h({id:(0,i.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),l.createElement(a.ContentLayout,null,l.createElement(le,{onEditClick:Se,canUpdate:_}),P&&l.createElement(pe,{template:ie[K],onToggle:te,onSubmit:we})))},Te=xe},65772:(U,A,p)=>{"use strict";p.d(A,{Z:()=>a});var l=p(9669),O=p.n(l),M=p(68547),n=p.n(M),s=(o,i,d)=>new Promise((f,m)=>{var x=u=>{try{v(d.next(u))}catch(E){m(E)}},b=u=>{try{v(d.throw(u))}catch(E){m(E)}},v=u=>u.done?f(u.value):Promise.resolve(u.value).then(x,b);v((d=d.apply(o,i)).next())});const t=O().create({baseURL:""});t.interceptors.request.use(o=>s(void 0,null,function*(){return o.headers={Authorization:`Bearer ${M.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},o}),o=>{Promise.reject(o)}),t.interceptors.response.use(o=>o,o=>{var i;throw((i=o.response)==null?void 0:i.status)===401&&(M.auth.clearAppStorage(),window.location.reload()),o});const a=t},42722:(U,A,p)=>{"use strict";p.d(A,{be:()=>l.Z,YX:()=>n,Gc:()=>a,OB:()=>o.Z});var l=p(65772),O=p(96486);const n=i=>Object.keys(i).reduce((d,f)=>{const m=i[f].controllers,x=Object.keys(m).reduce((b,v)=>((0,O.isEmpty)(m[v])||(b[v]=m[v]),b),{});return(0,O.isEmpty)(x)||(d[f]={controllers:x}),d},{});var s=p(83086);const a=i=>`/${s.Z}/${i}`;var o=p(97961)}}]);
