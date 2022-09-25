(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[3148],{31512:(R,F,g)=>{"use strict";R.exports=g(7189)},7189:function(R,F,g){(function(s,I){R.exports=I(g(53547),g(78384),g(39711))})(this,function(s,I,P){return function(n){var a={};function t(i){if(a[i])return a[i].exports;var r=a[i]={i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=a,t.d=function(i,r,p){t.o(i,r)||Object.defineProperty(i,r,{enumerable:!0,get:p})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,r){if(1&r&&(i=t(i)),8&r||4&r&&typeof i=="object"&&i&&i.__esModule)return i;var p=Object.create(null);if(t.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&r&&typeof i!="string")for(var c in i)t.d(p,c,function(d){return i[d]}.bind(null,c));return p},t.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(r,"a",r),r},t.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},t.p="",t(t.s=116)}({0:function(n,a,t){n.exports=t(19)()},1:function(n,a){n.exports=s},10:function(n,a,t){var i=t(25),r=t(26),p=t(22),c=t(27);n.exports=function(d,m){return i(d)||r(d,m)||p(d,m)||c()},n.exports.default=n.exports,n.exports.__esModule=!0},116:function(n,a,t){"use strict";t.r(a),t.d(a,"LinkButton",function(){return k});var i,r=t(5),p=t.n(r),c=t(4),d=t.n(c),m=t(3),y=t.n(m),b=t(1),x=t.n(b),u=t(37),f=t(2),h=t.n(f),T=t(0),S=t.n(T),j=t(8),e=t(6),o=t(33),l=t(17),B=t(38),A=["variant","startIcon","endIcon","disabled","children","size","href","to"],N=h()(B.BaseButtonWrapper)(i||(i=y()([`
  padding: `,`;
  background: `,`;
  border: 1px solid `,`;
  border-radius: `,`;
  `,` {
    display: flex;
    align-items: center;
  }
  `,` {
    color: `,`;
  }
  &[aria-disabled='true'] {
    `,`
    &:active {
      `,`
    }
  }
  &:hover {
    `,`
  }
  &:active {
    `,`
  }
  `,`
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: `,`;
`])),function(v){var H=v.theme,U=v.size;return"".concat(U==="S"?H.spaces[2]:"10px"," ").concat(H.spaces[4])},function(v){return v.theme.colors.buttonPrimary600},function(v){return v.theme.colors.buttonPrimary600},function(v){return v.theme.borderRadius},e.Box,j.Typography,function(v){return v.theme.colors.buttonNeutral0},o.b,o.b,o.c,o.a,o.d,function(v){return v.disabled?"none":void 0}),k=x.a.forwardRef(function(v,H){var U=v.variant,V=v.startIcon,X=v.endIcon,W=v.disabled,Y=v.children,J=v.size,$=v.href,K=v.to,q=d()(v,A),Z=$?"_blank":void 0,E=$?"noreferrer noopener":void 0;return x.a.createElement(N,p()({ref:H,"aria-disabled":W,size:J,variant:U,target:Z,rel:E,to:W?void 0:K,href:W?"#":$},q,{as:K&&!W?u.NavLink:"a"}),V&&x.a.createElement(e.Box,{"aria-hidden":!0,paddingRight:2},V),J==="S"?x.a.createElement(j.Typography,{variant:"pi",fontWeight:"bold"},Y):x.a.createElement(j.Typography,{fontWeight:"bold"},Y),X&&x.a.createElement(e.Box,{"aria-hidden":!0,paddingLeft:2},X))});k.displayName="LinkButton",k.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},k.propTypes={children:S.a.string.isRequired,disabled:S.a.bool,endIcon:S.a.element,href:function(v){if(!v.disabled&&!v.to&&!v.href)return new Error("href must be defined")},onClick:S.a.func,size:S.a.oneOf(l.a),startIcon:S.a.element,to:function(v){if(!v.disabled&&!v.href&&!v.to)return new Error("to must be defined")},variant:S.a.oneOf(l.k)}},13:function(n,a){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(r){return typeof r},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n.exports.default=n.exports,n.exports.__esModule=!0),t(i)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,a,t){"use strict";t.d(a,"b",function(){return i}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return p});var i=function(c){return function(d){var m=d.theme,y=d.size;return m.sizes[c][y]}},r=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(d){var m=d.theme,y=d.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(c,`:focus-within {
        border: 1px solid `).concat(y?m.colors.danger600:m.colors.primary600,`;
        box-shadow: `).concat(y?m.colors.danger600:m.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},p=function(c){var d=c.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(d.colors.primary600,`;
    }
  }
`)}},17:function(n,a,t){"use strict";t.d(a,"i",function(){return i}),t.d(a,"c",function(){return r}),t.d(a,"d",function(){return p}),t.d(a,"j",function(){return c}),t.d(a,"g",function(){return d}),t.d(a,"b",function(){return m}),t.d(a,"h",function(){return y}),t.d(a,"e",function(){return b}),t.d(a,"f",function(){return x}),t.d(a,"k",function(){return u}),t.d(a,"a",function(){return f});var i="success-light",r="danger-light",p="default",c="tertiary",d="secondary",m="danger",y="success",b="ghost",x=[i,r],u=[p,c,d,m,y,b].concat(x),f=["S","L"]},19:function(n,a,t){"use strict";var i=t(20);function r(){}function p(){}p.resetWarningCache=r,n.exports=function(){function c(y,b,x,u,f,h){if(h!==i){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}function d(){return c}c.isRequired=c;var m={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:p,resetWarningCache:r};return m.PropTypes=m,m}},2:function(n,a){n.exports=I},20:function(n,a,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,a){n.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,p=new Array(i);r<i;r++)p[r]=t[r];return p},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,a,t){var i=t(21);n.exports=function(r,p){if(r){if(typeof r=="string")return i(r,p);var c=Object.prototype.toString.call(r).slice(8,-1);return c==="Object"&&r.constructor&&(c=r.constructor.name),c==="Map"||c==="Set"?Array.from(r):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(r,p):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,a){n.exports=function(t,i){if(t==null)return{};var r,p,c={},d=Object.keys(t);for(p=0;p<d.length;p++)r=d[p],i.indexOf(r)>=0||(c[r]=t[r]);return c},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,a){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,a){n.exports=function(t,i){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var p,c,d=[],m=!0,y=!1;try{for(r=r.call(t);!(m=(p=r.next()).done)&&(d.push(p.value),!i||d.length!==i);m=!0);}catch(b){y=!0,c=b}finally{try{m||r.return==null||r.return()}finally{if(y)throw c}}return d}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,a){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,a,t){var i=t(42),r=t(43),p=t(22),c=t(44);n.exports=function(d){return i(d)||r(d)||p(d)||c()},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,a){n.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},33:function(n,a,t){"use strict";t.d(a,"b",function(){return m}),t.d(a,"c",function(){return y}),t.d(a,"a",function(){return b}),t.d(a,"d",function(){return x});var i=t(29),r=t.n(i),p=t(8),c=t(17),d=function(u){return c.f.includes(u)?u.substring(0,u.lastIndexOf("-")):u===c.j?"neutral":[c.d,c.g].includes(u)||!c.k.includes(u)?"primary":u},m=function(u){var f=u.theme;return`
    border: 1px solid `.concat(f.colors.neutral200,`;
    background: `).concat(f.colors.neutral150,`;
    `).concat(p.Typography,` {
      color: `).concat(f.colors.neutral600,`;
    }
    svg {
      > g, path {
        fill: `).concat(f.colors.neutral600,`;
      }
    }
  `)},y=function(u){var f=u.theme,h=u.variant;return[].concat(r()(c.f),[c.g]).includes(h)?`
      background-color: `.concat(f.colors.neutral0,`;
    `):h===c.j||h===c.e?`
      background-color: `.concat(f.colors.neutral100,`;
    `):h===c.d?`
      border: 1px solid `.concat(f.colors.buttonPrimary500,`;
      background: `).concat(f.colors.buttonPrimary500,`;
    `):`
    border: 1px solid `.concat(f.colors["".concat(d(h),"500")],`;
    background: `).concat(f.colors["".concat(d(h),"500")],`;
  `)},b=function(u){var f=u.theme,h=u.variant;return[].concat(r()(c.f),[c.g]).includes(h)?`
      background-color: `.concat(f.colors.neutral0,`;
      border: 1px solid `).concat(f.colors["".concat(d(h),"600")],`;
      `).concat(p.Typography,` {
        color: `).concat(f.colors["".concat(d(h),"600")],`;
      }
      svg {
        > g, path {
          fill: `).concat(f.colors["".concat(d(h),"600")],`;
        }
      }
    `):h===c.j?`
      background-color: `.concat(f.colors.neutral150,`;
    `):`
    border: 1px solid `.concat(f.colors["".concat(d(h),"600")],`;
    background: `).concat(f.colors["".concat(d(h),"600")],`;
  `)},x=function(u){var f=u.theme,h=u.variant;switch(h){case c.c:case c.i:case c.g:return`
          border: 1px solid `.concat(f.colors["".concat(d(h),"200")],`;
          background: `).concat(f.colors["".concat(d(h),"100")],`;
          `).concat(p.Typography,` {
            color: `).concat(f.colors["".concat(d(h),"700")],`;
          }
          svg {
            > g, path {
              fill: `).concat(f.colors["".concat(d(h),"700")],`;
            }
          }
        `);case c.j:return`
          border: 1px solid `.concat(f.colors.neutral200,`;
          background: `).concat(f.colors.neutral0,`;
          `).concat(p.Typography,` {
            color: `).concat(f.colors.neutral800,`;
          }
          svg {
            > g, path {
              fill: `).concat(f.colors.neutral800,`;
            }
          }
        `);case c.e:return`
        border: 1px solid transparent;
        background: transparent;

        `.concat(p.Typography,` {
          color: `).concat(f.colors.neutral800,`;
        }

        svg {
          > g, path {
            fill: `).concat(f.colors.neutral500,`;
          }
        }
      `);case c.h:case c.b:return`
          border: 1px solid `.concat(f.colors["".concat(d(h),"600")],`;
          background: `).concat(f.colors["".concat(d(h),"600")],`;
          `).concat(p.Typography,` {
            color: `).concat(f.colors.neutral0,`;
          }
        `);default:return`
          svg {
            > g, path {
              fill: `.concat(f.colors.buttonNeutral0,`;
            }
          }
        `)}}},37:function(n,a){n.exports=P},38:function(n,a,t){"use strict";t.r(a),t.d(a,"BaseButtonWrapper",function(){return e}),t.d(a,"BaseButton",function(){return o});var i,r=t(5),p=t.n(r),c=t(4),d=t.n(c),m=t(3),y=t.n(m),b=t(1),x=t.n(b),u=t(0),f=t.n(u),h=t(2),T=t.n(h),S=t(16),j=["disabled","children"],e=T.a.button(i||(i=y()([`
  display: flex;
  cursor: pointer;
  padding: `,`;
  border-radius: `,`;
  background: `,`;
  border: 1px solid `,`;
  svg {
    height: `,`;
    width: `,`;
  }
  svg {
    > g,
    path {
      fill: `,`;
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;
  }

  `,`
`])),function(l){return l.theme.spaces[2]},function(l){return l.theme.borderRadius},function(l){return l.theme.colors.neutral0},function(l){return l.theme.colors.neutral200},function(l){return l.theme.spaces[3]},function(l){return l.theme.spaces[3]},function(l){return l.theme.colors.neutral0},S.a),o=x.a.forwardRef(function(l,B){var A=l.disabled,N=l.children,k=d()(l,j);return x.a.createElement(e,p()({ref:B,"aria-disabled":A,type:"button",disabled:A},k),N)});o.displayName="BaseButton",o.defaultProps={disabled:!1},o.propTypes={children:f.a.node.isRequired,disabled:f.a.bool}},4:function(n,a,t){var i=t(24);n.exports=function(r,p){if(r==null)return{};var c,d,m=i(r,p);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(d=0;d<y.length;d++)c=y[d],p.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(r,c)&&(m[c]=r[c])}return m},n.exports.default=n.exports,n.exports.__esModule=!0},42:function(n,a,t){var i=t(21);n.exports=function(r){if(Array.isArray(r))return i(r)},n.exports.default=n.exports,n.exports.__esModule=!0},43:function(n,a){n.exports=function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)},n.exports.default=n.exports,n.exports.__esModule=!0},44:function(n,a){n.exports=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,a){function t(){return n.exports=t=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var p=arguments[r];for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&(i[c]=p[c])}return i},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,a,t){"use strict";t.r(a),t.d(a,"Box",function(){return j});var i,r=t(3),p=t.n(r),c=t(2),d=t.n(c),m=t(7),y=t(1),b=t.n(y),x=t(0),u=t.n(x),f=function(e){return b.a.createElement("div",e)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},T={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};f.defaultProps=h,f.propTypes=T;var S={color:!0},j=d.a.div.withConfig({shouldForwardProp:function(e,o){return!S[e]&&o(e)}})(i||(i=p()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,l=e.background;return o.colors[l]},function(e){var o=e.theme,l=e.color;return o.colors[l]},function(e){var o=e.theme,l=e.padding;return Object(m.a)("padding",l,o)},function(e){var o=e.theme,l=e.paddingTop;return Object(m.a)("padding-top",l,o)},function(e){var o=e.theme,l=e.paddingRight;return Object(m.a)("padding-right",l,o)},function(e){var o=e.theme,l=e.paddingBottom;return Object(m.a)("padding-bottom",l,o)},function(e){var o=e.theme,l=e.paddingLeft;return Object(m.a)("padding-left",l,o)},function(e){var o=e.theme,l=e.marginLeft;return Object(m.a)("margin-left",l,o)},function(e){var o=e.theme,l=e.marginRight;return Object(m.a)("margin-right",l,o)},function(e){var o=e.theme,l=e.marginTop;return Object(m.a)("margin-top",l,o)},function(e){var o=e.theme,l=e.marginBottom;return Object(m.a)("margin-bottom",l,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,l=e.hasRadius,B=e.borderRadius;return l?o.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,l=e.borderColor,B=e.borderStyle,A=e.borderWidth;if(l&&!B&&!A)return"1px solid ".concat(o.colors[l])},function(e){var o=e.theme,l=e.shadow;return o.shadows[l]},function(e){return e.pointerEvents},function(e){var o=e._hover,l=e.theme;return o?o(l):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});j.defaultProps=h,j.propTypes=T},7:function(n,a,t){"use strict";var i=t(10),r=t.n(i),p=t(13),c=t.n(p);a.a=function(d,m,y){var b=m;if(Array.isArray(m)||c()(m)!=="object"||(b=[m==null?void 0:m.desktop,m==null?void 0:m.tablet,m==null?void 0:m.mobile]),b!==void 0){if(Array.isArray(b)){var x=b,u=r()(x,3),f=u[0],h=u[1],T=u[2],S="".concat(d,": ").concat(y.spaces[f],";");return h!==void 0&&(S+="".concat(y.mediaQueries.tablet,`{
          `).concat(d,": ").concat(y.spaces[h],`;
        }`)),T!==void 0&&(S+="".concat(y.mediaQueries.mobile,`{
          `).concat(d,": ").concat(y.spaces[T],`;
        }`)),S}var j=y.spaces[b]||b;return"".concat(d,": ").concat(j,";")}}},8:function(n,a,t){"use strict";t.r(a),t.d(a,"Typography",function(){return j});var i,r=t(3),p=t.n(r),c=t(2),d=t.n(c),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],y=t(1),b=t.n(y),x=t(0),u=t.n(x),f=function(e){return b.a.createElement("div",e)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},T={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(m)};f.defaultProps=h,f.propTypes=T;var S={fontSize:!0,fontWeight:!0},j=d.a.span.withConfig({shouldForwardProp:function(e,o){return!S[e]&&o(e)}})(i||(i=p()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,l=e.fontWeight;return o.fontWeights[l]},function(e){var o=e.theme,l=e.fontSize;return o.fontSizes[l]},function(e){var o=e.theme,l=e.lineHeight;return o.lineHeights[l]},function(e){var o=e.theme,l=e.textColor;return o.colors[l||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,l=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[5],`;
        line-height: `).concat(l.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[4],`;
        line-height: `).concat(l.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(l.fontWeights.semiBold,`;
        font-size: `).concat(l.fontSizes[3],`;
        line-height: `).concat(l.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(l.fontSizes[3],`;
        line-height: `).concat(l.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(l.fontSizes[2],`;
        line-height: `).concat(l.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(l.fontSizes[1],`;
        line-height: `).concat(l.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(l.fontWeights.bold,`;
        font-size: `).concat(l.fontSizes[0],`;
        line-height: `).concat(l.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(l.fontSizes[2],`;
      `)}});j.defaultProps=h,j.propTypes=T}})})},97557:function(R,F,g){(function(s,I){R.exports=I(g(53547))})(this,function(s){return function(I){var P={};function n(a){if(P[a])return P[a].exports;var t=P[a]={i:a,l:!1,exports:{}};return I[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=I,n.c=P,n.d=function(a,t,i){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:i})},n.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t||4&t&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&t&&typeof a!="string")for(var r in a)n.d(i,r,function(p){return a[p]}.bind(null,r));return i},n.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="",n(n.s=97)}({0:function(I,P){I.exports=s},97:function(I,P,n){"use strict";n.r(P);var a=n(0);function t(){return(t=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var p=arguments[r];for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&(i[c]=p[c])}return i}).apply(this,arguments)}P.default=function(i){return a.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),a.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#4945FF"}),a.createElement("path",{d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 01-.474.942 1.705 1.705 0 01-.887.504 1.64 1.64 0 01-1.002-.105 1.76 1.76 0 01-.778-.678A1.924 1.924 0 0114 9.841a1.9 1.9 0 01.508-1.302c.325-.345.766-.539 1.225-.539zM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24z",fill:"#fff"}))}}})})},73148:(R,F,g)=>{"use strict";g.r(F),g.d(F,{default:()=>Z});var s=g(53547),I=g(49656),P=g(68547),n=g(53603),a=g.n(n),t=g(94117),i=g(97132),r=g(29759),p=(E,w,O)=>new Promise((Q,L)=>{var D=M=>{try{z(O.next(M))}catch(C){L(C)}},G=M=>{try{z(O.throw(M))}catch(C){L(C)}},z=M=>M.done?Q(M.value):Promise.resolve(M.value).then(D,G);z((O=O.apply(E,w)).next())});const c=()=>p(void 0,null,function*(){try{return yield(0,P.request)(`/${a()}/component`,{method:"GET"})}catch(E){return null}}),d=()=>p(void 0,null,function*(){try{return yield(0,P.request)(`/${a()}/content-types`,{method:"GET"})}catch(E){return null}}),m=()=>p(void 0,null,function*(){try{return(yield(0,P.request)(`/${a()}/component`,{method:"POST"},!0)).json()}catch(E){return null}});var y=g(40264),b=g(31512),x=g(33483),u=g(92543),f=g(43546),h=g(89326),T=g.n(h),S=g(22754),j=g.n(S),e=g(9102),o=g(1738),l=g(96486),B=g.n(l);const N=({contentTypes:E})=>{const{formatMessage:w}=(0,i.useIntl)();return s.createElement(s.Fragment,null,s.createElement(t.Box,{padding:8},s.createElement(o.TabGroup,{label:"label",id:"tabs"},s.createElement(o.Tabs,null,s.createElement(o.Tab,null,s.createElement(x.Typography,{variant:"omega"}," Collection Types")),s.createElement(o.Tab,null,s.createElement(x.Typography,{variant:"omega"}," Single Types"))),s.createElement(o.TabPanels,null,s.createElement(o.TabPanel,null,s.createElement(f.Table,{colCount:2,rowCount:E.collectionTypes.length},s.createElement(f.Thead,null,s.createElement(f.Tr,null,s.createElement(f.Th,null,s.createElement(x.Typography,{variant:"sigma"},"Name")))),s.createElement(f.Tbody,null,E&&E.collectionTypes&&!B().isEmpty(E.collectionTypes)?E.collectionTypes.map(O=>s.createElement(f.Tr,{key:O.uid},s.createElement(f.Td,null,s.createElement(x.Typography,{textColor:"neutral800"},O.globalId)),s.createElement(f.Td,null,s.createElement(y.Flex,{justifyContent:"right",alignItems:"right"},O.seo?s.createElement(b.LinkButton,{disabled:!0,startIcon:s.createElement(j(),null)},w({id:(0,r.O)("SEOPage.info.added"),defaultMessage:"Added"})):s.createElement(b.LinkButton,{startIcon:s.createElement(T(),null),variant:"secondary",to:`/plugins/content-type-builder/content-types/${O.uid}`},w({id:(0,r.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):s.createElement(t.Box,{padding:8,background:"neutral0"},s.createElement(u.EmptyStateLayout,{icon:s.createElement(e.w,null),content:w({id:(0,r.O)("SEOPage.info.no-collection-types"),defaultMessage:"You don't have any collection-types yet..."}),action:s.createElement(b.LinkButton,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:s.createElement(T(),null)},w({id:(0,r.O)("SEOPage.info.create-collection-type"),defaultMessage:"Create your first collection-type"}))}))))),s.createElement(o.TabPanel,null,s.createElement(f.Table,{colCount:2,rowCount:E.singleTypes.length},s.createElement(f.Thead,null,s.createElement(f.Tr,null,s.createElement(f.Th,null,s.createElement(x.Typography,{variant:"sigma"},"Name")))),s.createElement(f.Tbody,null,E&&E.singleTypes&&!B().isEmpty(E.singleTypes)?E.singleTypes.map(O=>s.createElement(f.Tr,{key:O.uid},s.createElement(f.Td,null,s.createElement(x.Typography,{textColor:"neutral800"},O.globalId)),s.createElement(f.Td,null,s.createElement(y.Flex,{justifyContent:"right",alignItems:"right"},O.seo?s.createElement(b.LinkButton,{disabled:!0,startIcon:s.createElement(j(),null)},w({id:(0,r.O)("SEOPage.info.added"),defaultMessage:"Added"})):s.createElement(b.LinkButton,{startIcon:s.createElement(T(),null),variant:"secondary",to:`/plugins/content-type-builder/content-types/${O.uid}`},w({id:(0,r.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):s.createElement(t.Box,{padding:8,background:"neutral0"},s.createElement(u.EmptyStateLayout,{icon:s.createElement(e.w,null),content:w({id:(0,r.O)("SEOPage.info.no-single-types"),defaultMessage:"You don't have any single-types yet..."}),action:s.createElement(b.LinkButton,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:s.createElement(T(),null)},w({id:(0,r.O)("SEOPage.info.create-single-type"),defaultMessage:"Create your first single-type"}))})))))))))};var k=g(35395),v=g(56204),H=g.n(v);const V=E=>{const{formatMessage:w}=(0,i.useIntl)();return s.createElement(t.Box,{background:"neutral100"},s.createElement(k.BaseHeaderLayout,{secondaryAction:E?null:s.createElement(b.LinkButton,{variant:"tertiary",to:"/plugins/content-type-builder/component-categories/shared/shared.seo",startIcon:s.createElement(H(),null)},w({id:(0,r.O)("SEOPage.header.button.edit-component"),defaultMessage:"Edit SEO component"})),title:w({id:(0,r.O)("SEOPage.header.title"),defaultMessage:"SEO"}),subtitle:w({id:(0,r.O)("SEOPage.header.subtitle"),defaultMessage:"Optimize your content to be SEO friendly"}),as:"h2"}))};var X=g(97557),W=g.n(X),Y=g(25108),J=(E,w,O)=>new Promise((Q,L)=>{var D=M=>{try{z(O.next(M))}catch(C){L(C)}},G=M=>{try{z(O.throw(M))}catch(C){L(C)}},z=M=>M.done?Q(M.value):Promise.resolve(M.value).then(D,G);z((O=O.apply(E,w)).next())});const $=()=>{const{formatMessage:E}=(0,i.useIntl)(),{lockAppWithAutoreload:w,unlockAppWithAutoreload:O}=(0,P.useAutoReloadOverlayBlocker)(),[Q,L]=(0,s.useState)(!0),[D,G]=(0,s.useState)(!1),z=(0,s.useRef)({}),M=(0,s.useRef)({});return(0,s.useEffect)(()=>J(void 0,null,function*(){if(z.current=yield c(),M.current=yield d(),!z.current)try{w(),yield m()}catch(C){Y.log(C)}finally{O(),G(!0)}L(!1)}),[D]),Q?s.createElement(P.LoadingIndicatorPage,null):s.createElement(s.Fragment,null,s.createElement(V,{seoComponent:z.current}),s.createElement(t.Box,{paddingLeft:8,paddingRigth:8},s.createElement(P.ContentBox,{title:E({id:"Information",defaultMessage:"Information"}),subtitle:E({id:(0,r.O)("SEOPage.info.information"),defaultMessage:"When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."}),icon:s.createElement(W(),null),iconBackground:"primary100"})),s.createElement(N,{contentTypes:M.current}))},K=(0,s.memo)($),Z=()=>s.createElement("div",null,s.createElement(I.Switch,null,s.createElement(I.Route,{path:`/plugins/${a()}`,component:K,exact:!0}),s.createElement(I.Route,{component:P.NotFound})))}}]);
