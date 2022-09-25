(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[2282],{44981:(Q,N,g)=>{"use strict";Q.exports=g(5582)},5582:function(Q,N,g){(function(l,A){Q.exports=A(g(53547),g(78384),g(74764))})(this,function(l,A,E){return function(o){var h={};function t(a){if(h[a])return h[a].exports;var n=h[a]={i:a,l:!1,exports:{}};return o[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=o,t.c=h,t.d=function(a,n,f){t.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:f})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,n){if(1&n&&(a=t(a)),8&n||4&n&&typeof a=="object"&&a&&a.__esModule)return a;var f=Object.create(null);if(t.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&n&&typeof a!="string")for(var u in a)t.d(f,u,function(v){return a[v]}.bind(null,u));return f},t.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(n,"a",n),n},t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},t.p="",t(t.s=112)}({0:function(o,h,t){o.exports=t(19)()},1:function(o,h){o.exports=l},10:function(o,h,t){var a=t(25),n=t(26),f=t(22),u=t(27);o.exports=function(v,d){return a(v)||n(v,d)||f(v,d)||u()},o.exports.default=o.exports,o.exports.__esModule=!0},112:function(o,h,t){"use strict";t.r(h),t.d(h,"Crumb",function(){return H}),t.d(h,"Breadcrumbs",function(){return $});var a,n=t(4),f=t.n(n),u=t(3),v=t.n(u),d=t(1),y=t.n(d),M=t(0),S=t.n(M),i=t(2),P=t.n(i),j=t(50),b=t.n(j),x=t(8),C=t(6),e=t(9),r=t(18),s=["children","label"],U=P()(e.Flex)(a||(a=v()([`
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
`])),function(k){return k.theme.colors.neutral300},C.Box),H=function(k){var V=k.children;return y.a.createElement(U,{inline:!0,as:"li"},y.a.createElement(x.Typography,{fontWeight:"bold",color:"neutral800"},V),y.a.createElement(C.Box,{paddingLeft:3,paddingRight:3},y.a.createElement(b.a,null)))};H.displayName="Crumb",H.propTypes={children:S.a.string.isRequired};var q=S.a.shape({type:S.a.oneOf([H])}),$=function(k){var V=k.children,_=k.label,ee=f()(k,s);return y.a.createElement(e.Flex,ee,y.a.createElement(r.VisuallyHidden,null,_),y.a.createElement("ol",{"aria-hidden":!0},V))};$.displayName="Breadcrumbs",$.propTypes={children:S.a.oneOfType([S.a.arrayOf(q),q]).isRequired,label:S.a.string.isRequired}},13:function(o,h){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(n){return typeof n},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o.exports.default=o.exports,o.exports.__esModule=!0),t(a)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},18:function(o,h,t){"use strict";t.r(h),t.d(h,"VisuallyHidden",function(){return v});var a,n=t(3),f=t.n(n),u=t(2),v=t.n(u).a.div(a||(a=f()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(o,h,t){"use strict";var a=t(20);function n(){}function f(){}f.resetWarningCache=n,o.exports=function(){function u(y,M,S,i,P,j){if(j!==a){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}function v(){return u}u.isRequired=u;var d={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:v,element:u,elementType:u,instanceOf:v,node:u,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:f,resetWarningCache:n};return d.PropTypes=d,d}},2:function(o,h){o.exports=A},20:function(o,h,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,h){o.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,f=new Array(a);n<a;n++)f[n]=t[n];return f},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,h,t){var a=t(21);o.exports=function(n,f){if(n){if(typeof n=="string")return a(n,f);var u=Object.prototype.toString.call(n).slice(8,-1);return u==="Object"&&n.constructor&&(u=n.constructor.name),u==="Map"||u==="Set"?Array.from(n):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?a(n,f):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,h){o.exports=function(t,a){if(t==null)return{};var n,f,u={},v=Object.keys(t);for(f=0;f<v.length;f++)n=v[f],a.indexOf(n)>=0||(u[n]=t[n]);return u},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,h){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,h){o.exports=function(t,a){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var f,u,v=[],d=!0,y=!1;try{for(n=n.call(t);!(d=(f=n.next()).done)&&(v.push(f.value),!a||v.length!==a);d=!0);}catch(M){y=!0,u=M}finally{try{d||n.return==null||n.return()}finally{if(y)throw u}}return v}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,h){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,h){o.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,h,t){var a=t(24);o.exports=function(n,f){if(n==null)return{};var u,v,d=a(n,f);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(n);for(v=0;v<y.length;v++)u=y[v],f.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(n,u)&&(d[u]=n[u])}return d},o.exports.default=o.exports,o.exports.__esModule=!0},50:function(o,h){o.exports=E},6:function(o,h,t){"use strict";t.r(h),t.d(h,"Box",function(){return C});var a,n=t(3),f=t.n(n),u=t(2),v=t.n(u),d=t(7),y=t(1),M=t.n(y),S=t(0),i=t.n(S),P=function(e){return M.a.createElement("div",e)},j={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])};P.defaultProps=j,P.propTypes=b;var x={color:!0},C=v.a.div.withConfig({shouldForwardProp:function(e,r){return!x[e]&&r(e)}})(a||(a=f()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,s=e.background;return r.colors[s]},function(e){var r=e.theme,s=e.color;return r.colors[s]},function(e){var r=e.theme,s=e.padding;return Object(d.a)("padding",s,r)},function(e){var r=e.theme,s=e.paddingTop;return Object(d.a)("padding-top",s,r)},function(e){var r=e.theme,s=e.paddingRight;return Object(d.a)("padding-right",s,r)},function(e){var r=e.theme,s=e.paddingBottom;return Object(d.a)("padding-bottom",s,r)},function(e){var r=e.theme,s=e.paddingLeft;return Object(d.a)("padding-left",s,r)},function(e){var r=e.theme,s=e.marginLeft;return Object(d.a)("margin-left",s,r)},function(e){var r=e.theme,s=e.marginRight;return Object(d.a)("margin-right",s,r)},function(e){var r=e.theme,s=e.marginTop;return Object(d.a)("margin-top",s,r)},function(e){var r=e.theme,s=e.marginBottom;return Object(d.a)("margin-bottom",s,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,s=e.hasRadius,U=e.borderRadius;return s?r.borderRadius:U},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,s=e.borderColor,U=e.borderStyle,H=e.borderWidth;if(s&&!U&&!H)return"1px solid ".concat(r.colors[s])},function(e){var r=e.theme,s=e.shadow;return r.shadows[s]},function(e){return e.pointerEvents},function(e){var r=e._hover,s=e.theme;return r?r(s):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});C.defaultProps=j,C.propTypes=b},7:function(o,h,t){"use strict";var a=t(10),n=t.n(a),f=t(13),u=t.n(f);h.a=function(v,d,y){var M=d;if(Array.isArray(d)||u()(d)!=="object"||(M=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),M!==void 0){if(Array.isArray(M)){var S=M,i=n()(S,3),P=i[0],j=i[1],b=i[2],x="".concat(v,": ").concat(y.spaces[P],";");return j!==void 0&&(x+="".concat(y.mediaQueries.tablet,`{
          `).concat(v,": ").concat(y.spaces[j],`;
        }`)),b!==void 0&&(x+="".concat(y.mediaQueries.mobile,`{
          `).concat(v,": ").concat(y.spaces[b],`;
        }`)),x}var C=y.spaces[M]||M;return"".concat(v,": ").concat(C,";")}}},8:function(o,h,t){"use strict";t.r(h),t.d(h,"Typography",function(){return C});var a,n=t(3),f=t.n(n),u=t(2),v=t.n(u),d=["alpha","beta","delta","epsilon","omega","pi","sigma"],y=t(1),M=t.n(y),S=t(0),i=t.n(S),P=function(e){return M.a.createElement("div",e)},j={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},b={ellipsis:i.a.bool,fontSize:i.a.oneOfType([i.a.number,i.a.string]),fontWeight:i.a.string,lineHeight:i.a.oneOfType([i.a.number,i.a.string]),textColor:i.a.string,textTransform:i.a.string,variant:i.a.oneOf(d)};P.defaultProps=j,P.propTypes=b;var x={fontSize:!0,fontWeight:!0},C=v.a.span.withConfig({shouldForwardProp:function(e,r){return!x[e]&&r(e)}})(a||(a=f()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var r=e.theme,s=e.fontWeight;return r.fontWeights[s]},function(e){var r=e.theme,s=e.fontSize;return r.fontSizes[s]},function(e){var r=e.theme,s=e.lineHeight;return r.lineHeights[s]},function(e){var r=e.theme,s=e.textColor;return r.colors[s||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var r=e.variant,s=e.theme;switch(r){case"alpha":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[5],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[4],`;
        line-height: `).concat(s.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(s.fontWeights.semiBold,`;
        font-size: `).concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(s.fontSizes[2],`;
        line-height: `).concat(s.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(s.fontSizes[1],`;
        line-height: `).concat(s.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[0],`;
        line-height: `).concat(s.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(s.fontSizes[2],`;
      `)}});C.defaultProps=j,C.propTypes=b},9:function(o,h,t){"use strict";t.r(h),t.d(h,"Flex",function(){return e});var a,n=t(3),f=t.n(n),u=t(2),v=t.n(u),d=t(6),y=t(7),M=t(1),S=t.n(M),i=t(0),P=t.n(i),j=function(r){return S.a.createElement("div",r)},b={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},x={alignItems:P.a.string,basis:P.a.oneOfType([P.a.string,P.a.number]),direction:P.a.string,gap:P.a.oneOfType([P.a.shape({desktop:P.a.number,mobile:P.a.number,tablet:P.a.number}),P.a.number,P.a.arrayOf(P.a.number),P.a.string]),inline:P.a.bool,justifyContent:P.a.string,reverse:P.a.bool,wrap:P.a.string};j.defaultProps=b,j.propTypes=x;var C={direction:!0},e=v()(d.Box).withConfig({shouldForwardProp:function(r,s){return!C[r]&&s(r)}})(a||(a=f()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(r){return r.alignItems},function(r){return r.inline?"inline-flex":"flex"},function(r){return r.direction},function(r){return r.wrap},function(r){var s=r.gap,U=r.theme;return Object(y.a)("gap",s,U)},function(r){return r.justifyContent});e.defaultProps=b,e.propTypes=x}})})},8884:(Q,N,g)=>{"use strict";g.r(N),g.d(N,{ProvidersPage:()=>Pe,default:()=>Ze});var l=g(53547),A=g(97132),E=g(68547),o=g(18721),h=g.n(o),t=g(11700),a=g.n(t),n=g(67814),f=g(35395),u=g(80117),v=g(67422),d=g(43546),y=g(33483),M=g(19631),S=g(49549),i=g(56204),P=g.n(i),j=g(23724),b=g(53209),x=g(42722);const C={id:(0,x.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},e={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},r={id:(0,x.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},s={id:(0,x.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},U={id:(0,x.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},H={id:(0,x.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},q={id:(0,x.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},$={id:(0,x.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},V={email:{form:[[{intlLabel:s,name:"enabled",type:"bool",description:r,size:6}]],schema:b.object().shape({enabled:b.bool().required(E.translatedErrors.required)})},providers:{form:[[{intlLabel:s,name:"enabled",type:"bool",description:r,size:6,validations:{required:!0}}],[{intlLabel:U,name:"key",type:"text",placeholder:q,size:12,validations:{required:!0}}],[{intlLabel:$,name:"secret",type:"text",placeholder:q,size:12,validations:{required:!0}}],[{intlLabel:C,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:H,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.object().shape({enabled:b.bool().required(E.translatedErrors.required),key:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()}),secret:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()}),callback:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()})})},providersWithSubdomain:{form:[[{intlLabel:s,name:"enabled",type:"bool",description:r,size:6,validations:{required:!0}}],[{intlLabel:U,name:"key",type:"text",placeholder:q,size:12,validations:{required:!0}}],[{intlLabel:$,name:"secret",type:"text",placeholder:q,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,x.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,x.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:C,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:H,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.object().shape({enabled:b.bool().required(E.translatedErrors.required),key:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()}),secret:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()}),subdomain:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()}),callback:b.string().when("enabled",{is:!0,then:b.string().required(E.translatedErrors.required),otherwise:b.string()})})}};var _=(c,p,m)=>new Promise((z,R)=>{var F=w=>{try{I(m.next(w))}catch(T){R(T)}},B=w=>{try{I(m.throw(w))}catch(T){R(T)}},I=w=>w.done?z(w.value):Promise.resolve(w.value).then(F,B);I((m=m.apply(c,p)).next())});const ee=c=>_(void 0,null,function*(){try{const{data:p}=yield x.be.get((0,x.Gc)("providers"));return p}catch(p){throw c({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Ee=c=>x.be.put((0,x.Gc)("providers"),c);var Te=g(96486);const Me=c=>(0,Te.sortBy)(Object.keys(c).reduce((p,m)=>{const{icon:z,enabled:R,subdomain:F}=c[m],B=z==="envelope"?["fas","envelope"]:["fab",z];return F!==void 0?p.push({name:m,icon:B,enabled:R,subdomain:F}):p.push({name:m,icon:B,enabled:R}),p},[]),"name");var ue=g(51725),de=g(64459),Se=g(9524),ce=g(44981),pe=g(39272),K=g(68991),we=g(45697),O=g.n(we),Re=g(80831),je=g(53575),Ce=g(99136),Be=Object.defineProperty,fe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(c,p,m)=>p in c?Be(c,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[p]=m,te=(c,p)=>{for(var m in p||(p={}))Le.call(p,m)&&me(c,m,p[m]);if(fe)for(var m of fe(p))ze.call(p,m)&&me(c,m,p[m]);return c};const re=({description:c,disabled:p,intlLabel:m,error:z,name:R,onChange:F,placeholder:B,providerToEditName:I,type:w,value:T})=>{const{formatMessage:W}=(0,A.useIntl)(),G=R==="noName"?`${strapi.backendURL}/api/connect/${I}/callback`:T,X=W({id:m.id,defaultMessage:m.defaultMessage},te({provider:I},m.values)),D=c?W({id:c.id,defaultMessage:c.defaultMessage},te({provider:I},c.values)):"";if(w==="bool")return l.createElement(je.ToggleInput,{"aria-label":R,checked:T,disabled:p,hint:D,label:X,name:R,offLabel:W({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:W({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:Z=>{F({target:{name:R,value:Z.target.checked}})}});const ae=B?W({id:B.id,defaultMessage:B.defaultMessage},te({},B.values)):"",ie=z?W({id:z,defaultMessage:z}):"";return l.createElement(Ce.TextInput,{"aria-label":R,disabled:p,error:ie,label:X,name:R,onChange:F,placeholder:ae,type:w,value:G})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:O().shape({id:O().string.isRequired,defaultMessage:O().string.isRequired,values:O().object}),disabled:O().bool,error:O().string,intlLabel:O().shape({id:O().string.isRequired,defaultMessage:O().string.isRequired,values:O().object}).isRequired,name:O().string.isRequired,onChange:O().func.isRequired,placeholder:O().shape({id:O().string.isRequired,defaultMessage:O().string.isRequired,values:O().object}),providerToEditName:O().string.isRequired,type:O().string.isRequired,value:O().oneOfType([O().bool,O().string])};const Ie=re;var Fe=Object.defineProperty,Ae=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,ve=(c,p,m)=>p in c?Fe(c,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[p]=m,He=(c,p)=>{for(var m in p||(p={}))We.call(p,m)&&ve(c,m,p[m]);if(ge)for(var m of ge(p))De.call(p,m)&&ve(c,m,p[m]);return c},Ne=(c,p)=>Ae(c,Ue(p));const ne=({headerBreadcrumbs:c,initialData:p,isSubmiting:m,layout:z,isOpen:R,onSubmit:F,onToggle:B,providerToEditName:I})=>{const{formatMessage:w}=(0,A.useIntl)();return R?l.createElement(K.ModalLayout,{onClose:B,labelledBy:"title"},l.createElement(K.ModalHeader,null,l.createElement(ce.Breadcrumbs,{label:c.join(", ")},c.map(T=>l.createElement(ce.Crumb,{key:T},T)))),l.createElement(Re.Formik,{onSubmit:T=>F(T),initialValues:p,validationSchema:z.schema,validateOnChange:!1},({errors:T,handleChange:W,values:G})=>l.createElement(E.Form,null,l.createElement(K.ModalBody,null,l.createElement(Se.Stack,{spacing:1},l.createElement(pe.Grid,{gap:5},z.form.map(X=>X.map(D=>l.createElement(pe.GridItem,{key:D.name,col:D.size,xs:12},l.createElement(Ie,Ne(He({},D),{error:T[D.name],onChange:W,value:G[D.name],providerToEditName:I})))))))),l.createElement(K.ModalFooter,{startActions:l.createElement(de.Button,{variant:"tertiary",onClick:B,type:"button"},w({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:l.createElement(l.Fragment,null,l.createElement(de.Button,{type:"submit",loading:m},w({id:"global.save",defaultMessage:"Save"})))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:O().arrayOf(O().string).isRequired,initialData:O().object,layout:O().shape({form:O().arrayOf(O().array),schema:O().object}).isRequired,isOpen:O().bool.isRequired,isSubmiting:O().bool.isRequired,onSubmit:O().func.isRequired,onToggle:O().func.isRequired,providerToEditName:O().string};const ke=ne;var qe=Object.defineProperty,Ve=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,be=(c,p,m)=>p in c?qe(c,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[p]=m,oe=(c,p)=>{for(var m in p||(p={}))Qe.call(p,m)&&be(c,m,p[m]);if(he)for(var m of he(p))$e.call(p,m)&&be(c,m,p[m]);return c},Xe=(c,p)=>Ve(c,Ge(p)),ye=(c,p,m)=>new Promise((z,R)=>{var F=w=>{try{I(m.next(w))}catch(T){R(T)}},B=w=>{try{I(m.throw(w))}catch(T){R(T)}},I=w=>w.done?z(w.value):Promise.resolve(w.value).then(F,B);I((m=m.apply(c,p)).next())});const Pe=()=>{const{formatMessage:c}=(0,A.useIntl)();(0,E.useFocusWhenNavigate)();const{notifyStatus:p}=(0,v.useNotifyAT)(),m=(0,j.useQueryClient)(),{trackUsage:z}=(0,E.useTracking)(),R=(0,l.useRef)(z),[F,B]=(0,l.useState)(!1),[I,w]=(0,l.useState)(!1),[T,W]=(0,l.useState)(null),G=(0,E.useNotification)(),{lockApp:X,unlockApp:D}=(0,E.useOverlayBlocker)(),ae=(0,l.useMemo)(()=>({update:ue.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:Z}}=(0,E.useRBAC)(ae),{isLoading:Ke,data:Y,isFetching:Ye}=(0,j.useQuery)("get-providers",()=>ee(G),{onSuccess:()=>{p(c({id:(0,x.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Je=Ke||Ye,_e=(0,j.useMutation)(Ee,{onSuccess:()=>ye(void 0,null,function*(){yield m.invalidateQueries("get-providers"),G({type:"info",message:{id:(0,x.OB)("notification.success.submit")}}),R.current("didEditAuthenticationProvider"),w(!1),se(),D()}),onError:()=>{G({type:"warning",message:{id:"notification.error"}}),D(),w(!1)},refetchActive:!1}),J=(0,l.useMemo)(()=>Me(Y),[Y]),et=J.length,xe=(0,l.useMemo)(()=>{if(!T)return!1;const L=J.find(le=>le.name===T);return h()(L,"subdomain")},[J,T]),tt=c({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,l.useMemo)(()=>T==="email"?V.email:xe?V.providersWithSubdomain:V.providers,[T,xe]),se=()=>{B(L=>!L)},Oe=L=>{Z&&(W(L.name),se())},nt=L=>ye(void 0,null,function*(){w(!0),X(),R.current("willEditAuthenticationProvider");const le=Xe(oe({},Y),{[T]:L});_e.mutate({providers:le})});return l.createElement(f.Layout,null,l.createElement(E.SettingsPageTitle,{name:tt}),l.createElement(u.Main,null,l.createElement(f.HeaderLayout,{title:c({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Je||ie?l.createElement(E.LoadingIndicatorPage,null):l.createElement(f.ContentLayout,null,l.createElement(d.Table,{colCount:4,rowCount:et+1},l.createElement(d.Thead,null,l.createElement(d.Tr,null,l.createElement(d.Th,null,l.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},l.createElement(M.VisuallyHidden,null,c({id:(0,x.OB)("Providers.image"),defaultMessage:"Image"})))),l.createElement(d.Th,null,l.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),l.createElement(d.Th,null,l.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},c({id:(0,x.OB)("Providers.status"),defaultMessage:"Status"}))),l.createElement(d.Th,null,l.createElement(y.Typography,{variant:"sigma"},l.createElement(M.VisuallyHidden,null,c({id:"global.settings",defaultMessage:"Settings"})))))),l.createElement(d.Tbody,null,J.map(L=>l.createElement(d.Tr,oe({key:L.name},(0,E.onRowClick)({fn:()=>Oe(L),condition:Z})),l.createElement(d.Td,{width:""},l.createElement(n.G,{icon:L.icon})),l.createElement(d.Td,{width:"45%"},l.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral800"},L.name)),l.createElement(d.Td,{width:"65%"},l.createElement(y.Typography,{textColor:L.enabled?"success600":"danger600","data-testid":`enable-${L.name}`},L.enabled?c({id:"global.enabled",defaultMessage:"Enabled"}):c({id:"global.disabled",defaultMessage:"Disabled"}))),l.createElement(d.Td,oe({},E.stopPropagation),Z&&l.createElement(S.IconButton,{onClick:()=>Oe(L),noBorder:!0,icon:l.createElement(P(),null),label:"Edit"})))))))),l.createElement(ke,{initialData:Y[T],isOpen:F,isSubmiting:I,layout:rt,headerBreadcrumbs:[c({id:(0,x.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),a()(T)],onToggle:se,onSubmit:nt,providerToEditName:T}))},Ze=()=>l.createElement(E.CheckPagePermissions,{permissions:ue.Z.readProviders},l.createElement(Pe,null))},65772:(Q,N,g)=>{"use strict";g.d(N,{Z:()=>a});var l=g(9669),A=g.n(l),E=g(68547),o=g.n(E),h=(n,f,u)=>new Promise((v,d)=>{var y=i=>{try{S(u.next(i))}catch(P){d(P)}},M=i=>{try{S(u.throw(i))}catch(P){d(P)}},S=i=>i.done?v(i.value):Promise.resolve(i.value).then(y,M);S((u=u.apply(n,f)).next())});const t=A().create({baseURL:""});t.interceptors.request.use(n=>h(void 0,null,function*(){return n.headers={Authorization:`Bearer ${E.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},n}),n=>{Promise.reject(n)}),t.interceptors.response.use(n=>n,n=>{var f;throw((f=n.response)==null?void 0:f.status)===401&&(E.auth.clearAppStorage(),window.location.reload()),n});const a=t},42722:(Q,N,g)=>{"use strict";g.d(N,{be:()=>l.Z,YX:()=>o,Gc:()=>a,OB:()=>n.Z});var l=g(65772),A=g(96486);const o=f=>Object.keys(f).reduce((u,v)=>{const d=f[v].controllers,y=Object.keys(d).reduce((M,S)=>((0,A.isEmpty)(d[S])||(M[S]=d[S]),M),{});return(0,A.isEmpty)(y)||(u[v]={controllers:y}),u},{});var h=g(83086);const a=f=>`/${h.Z}/${f}`;var n=g(97961)}}]);
