"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[890],{1890:function(e,a,r){r.r(a),r.d(a,{default:function(){return ae}});var n=r(885),t=r(2791),l=r(501),i=r(6871),s=r(8735),d=r(8950),o=r(5223),u=r(1340),c=r(6831),p=r(9611),m=r(9113);function v(){return v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function f(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}var h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],y=["getRootProps","htmlProps"],b=(0,p.kr)({strict:!1,name:"FormControlContext"}),g=b[0],x=b[1];var I=(0,u.Gp)((function(e,a){var r=(0,u.jC)("Form",e),n=function(e){var a=e.id,r=e.isRequired,n=e.isInvalid,l=e.isDisabled,i=e.isReadOnly,s=f(e,h),d=(0,o.Me)(),u=a||"field-"+d,m=u+"-label",y=u+"-feedback",b=u+"-helptext",g=t.useState(!1),x=g[0],I=g[1],_=t.useState(!1),E=_[0],N=_[1],R=(0,o.kt)(),k=R[0],q=R[1],T=t.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),v({id:b},e,{ref:(0,p.lq)(a,(function(e){e&&N(!0)}))})}),[b]),j=t.useCallback((function(e,a){var r,t;return void 0===e&&(e={}),void 0===a&&(a=null),v({},e,{ref:a,"data-focus":(0,c.PB)(k),"data-disabled":(0,c.PB)(l),"data-invalid":(0,c.PB)(n),"data-readonly":(0,c.PB)(i),id:null!=(r=e.id)?r:m,htmlFor:null!=(t=e.htmlFor)?t:u})}),[u,l,k,n,i,m]),F=t.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),v({id:y},e,{ref:(0,p.lq)(a,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[y]),O=t.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),v({},e,s,{ref:a,role:"group"})}),[s]),P=t.useCallback((function(e,a){return void 0===e&&(e={}),void 0===a&&(a=null),v({},e,{ref:a,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!i,isDisabled:!!l,isFocused:!!k,onFocus:q.on,onBlur:q.off,hasFeedbackText:x,setHasFeedbackText:I,hasHelpText:E,setHasHelpText:N,id:u,labelId:m,feedbackId:y,helpTextId:b,htmlProps:s,getHelpTextProps:T,getErrorMessageProps:F,getRootProps:O,getLabelProps:j,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),l=n.getRootProps;n.htmlProps;var i=f(n,y),s=(0,c.cx)("chakra-form-control",e.className);return t.createElement(g,{value:i},t.createElement(u.Fo,{value:r},t.createElement(u.m$.div,v({},l({},a),{className:s,__css:r.container}))))}));c.Ts&&(I.displayName="FormControl");var _=(0,u.Gp)((function(e,a){var r=x(),n=(0,u.yK)(),l=(0,c.cx)("chakra-form__helper-text",e.className);return t.createElement(u.m$.div,v({},null==r?void 0:r.getHelpTextProps(e,a),{__css:n.helperText,className:l}))}));c.Ts&&(_.displayName="FormHelperText");var E=["isDisabled","isInvalid","isReadOnly","isRequired"],N=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function R(e){var a=function(e){var a,r,n,t=x(),l=e.id,i=e.disabled,s=e.readOnly,d=e.required,o=e.isRequired,u=e.isInvalid,p=e.isReadOnly,m=e.isDisabled,h=e.onFocus,y=e.onBlur,b=f(e,N),g=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=t&&t.hasFeedbackText&&null!=t&&t.isInvalid&&g.push(t.feedbackId);null!=t&&t.hasHelpText&&g.push(t.helpTextId);return v({},b,{"aria-describedby":g.join(" ")||void 0,id:null!=l?l:null==t?void 0:t.id,isDisabled:null!=(a=null!=i?i:m)?a:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=s?s:p)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(n=null!=d?d:o)?n:null==t?void 0:t.isRequired,isInvalid:null!=u?u:null==t?void 0:t.isInvalid,onFocus:(0,c.v0)(null==t?void 0:t.onFocus,h),onBlur:(0,c.v0)(null==t?void 0:t.onBlur,y)})}(e),r=a.isDisabled,n=a.isInvalid,t=a.isReadOnly,l=a.isRequired;return v({},f(a,E),{disabled:r,readOnly:t,required:l,"aria-invalid":(0,c.Qm)(n),"aria-required":(0,c.Qm)(l),"aria-readonly":(0,c.Qm)(t)})}var k=(0,u.Gp)((function(e,a){var r=(0,u.jC)("FormError",e),n=(0,u.Lr)(e),l=x();return null!=l&&l.isInvalid?t.createElement(u.Fo,{value:r},t.createElement(u.m$.div,v({},null==l?void 0:l.getErrorMessageProps(n,a),{className:(0,c.cx)("chakra-form__error-message",e.className),__css:v({display:"flex",alignItems:"center"},r.text)}))):null}));c.Ts&&(k.displayName="FormErrorMessage");var q=(0,u.Gp)((function(e,a){var r=(0,u.yK)(),n=x();if(null==n||!n.isInvalid)return null;var l=(0,c.cx)("chakra-form__error-icon",e.className);return t.createElement(m.ZP,v({ref:a,"aria-hidden":!0},e,{__css:r.icon,className:l}),t.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));c.Ts&&(q.displayName="FormErrorIcon");var T=["className","children","requiredIndicator","optionalIndicator"],j=(0,u.Gp)((function(e,a){var r,n=(0,u.mq)("FormLabel",e),l=(0,u.Lr)(e);l.className;var i=l.children,s=l.requiredIndicator,d=void 0===s?t.createElement(F,null):s,o=l.optionalIndicator,p=void 0===o?null:o,m=f(l,T),h=x(),y=null!=(r=null==h?void 0:h.getLabelProps(m,a))?r:v({ref:a},m);return t.createElement(u.m$.label,v({},y,{className:(0,c.cx)("chakra-form__label",l.className),__css:v({display:"block",textAlign:"start"},n)}),i,null!=h&&h.isRequired?d:p)}));c.Ts&&(j.displayName="FormLabel");var F=(0,u.Gp)((function(e,a){var r=x(),n=(0,u.yK)();if(null==r||!r.isRequired)return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return t.createElement(u.m$.span,v({},null==r?void 0:r.getRequiredIndicatorProps(e,a),{__css:n.requiredIndicator,className:l}))}));function O(){return O=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function P(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}c.Ts&&(F.displayName="RequiredIndicator");var S=["htmlSize"],C=(0,u.Gp)((function(e,a){var r=e.htmlSize,n=P(e,S),l=(0,u.jC)("Input",n),i=R((0,u.Lr)(n)),s=(0,c.cx)("chakra-input",e.className);return t.createElement(u.m$.input,O({size:r},i,{__css:l.field,ref:a,className:s}))}));c.Ts&&(C.displayName="Input"),C.id="Input";var L=["placement"],G={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},w=(0,u.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),A=(0,u.Gp)((function(e,a){var r,n=e.placement,l=void 0===n?"left":n,i=P(e,L),s=null!=(r=G[l])?r:{},d=(0,u.yK)();return t.createElement(w,O({ref:a},i,{__css:O({},d.addon,s)}))}));c.Ts&&(A.displayName="InputAddon");var z=(0,u.Gp)((function(e,a){return t.createElement(A,O({ref:a,placement:"left"},e,{className:(0,c.cx)("chakra-input__left-addon",e.className)}))}));c.Ts&&(z.displayName="InputLeftAddon"),z.id="InputLeftAddon";var B=(0,u.Gp)((function(e,a){return t.createElement(A,O({ref:a,placement:"right"},e,{className:(0,c.cx)("chakra-input__right-addon",e.className)}))}));c.Ts&&(B.displayName="InputRightAddon"),B.id="InputRightAddon";var D=["children","className"],H=(0,u.Gp)((function(e,a){var r=(0,u.jC)("Input",e),n=(0,u.Lr)(e),l=n.children,i=n.className,s=P(n,D),d=(0,c.cx)("chakra-input__group",i),o={},m=(0,p.WR)(l),v=r.field;m.forEach((function(e){if(r){var a,n;if(v&&"InputLeftElement"===e.type.id)o.paddingStart=null!=(a=v.height)?a:v.h;if(v&&"InputRightElement"===e.type.id)o.paddingEnd=null!=(n=v.height)?n:v.h;"InputRightAddon"===e.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(o.borderStartRadius=0)}}));var f=m.map((function(a){var r,n,l=(0,c.YU)({size:(null==(r=a.props)?void 0:r.size)||e.size,variant:(null==(n=a.props)?void 0:n.variant)||e.variant});return"Input"!==a.type.id?t.cloneElement(a,l):t.cloneElement(a,Object.assign(l,o,a.props))}));return t.createElement(u.m$.div,O({className:d,ref:a,__css:{width:"100%",display:"flex",position:"relative"}},s),t.createElement(u.Fo,{value:r},f))}));c.Ts&&(H.displayName="InputGroup");var $=["placement"],M=["className"],Z=["className"],K=(0,u.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Q=(0,u.Gp)((function(e,a){var r,n,l,i=e.placement,s=void 0===i?"left":i,d=P(e,$),o=(0,u.yK)(),c=o.field,p=O(((l={})["left"===s?"insetStart":"insetEnd"]="0",l.width=null!=(r=null==c?void 0:c.height)?r:null==c?void 0:c.h,l.height=null!=(n=null==c?void 0:c.height)?n:null==c?void 0:c.h,l.fontSize=null==c?void 0:c.fontSize,l),o.element);return t.createElement(K,O({ref:a,__css:p},d))}));Q.id="InputElement",c.Ts&&(Q.displayName="InputElement");var U=(0,u.Gp)((function(e,a){var r=e.className,n=P(e,M),l=(0,c.cx)("chakra-input__left-element",r);return t.createElement(Q,O({ref:a,placement:"left",className:l},n))}));U.id="InputLeftElement",c.Ts&&(U.displayName="InputLeftElement");var W=(0,u.Gp)((function(e,a){var r=e.className,n=P(e,Z),l=(0,c.cx)("chakra-input__right-element",r);return t.createElement(Q,O({ref:a,placement:"right",className:l},n))}));W.id="InputRightElement",c.Ts&&(W.displayName="InputRightElement");var Y=r(1399),J=r(5272),V=r(184);var X=function(e){var a=e.searchHandler,r=(0,t.useState)(""),l=(0,n.Z)(r,2),i=l[0],d=l[1];return(0,V.jsx)(s.xu,{as:"form",mb:"5",onSubmit:function(e){if(e.preventDefault(),""===i.trim())return alert("Enter your request, please");a(i)},children:(0,V.jsxs)(H,{children:[(0,V.jsx)(C,{value:i,onChange:function(e){return d(e.target.value.toLowerCase())},placeholder:"Searh Movies",_placeholder:{opacity:.5,color:"teal"},size:"md"}),(0,V.jsx)(W,{width:"4.5rem",children:(0,V.jsx)(Y.hU,{type:"submit","aria-label":"Search database",size:"sm",icon:(0,V.jsx)(J.W1,{})})})]})})},ee=r(4148);var ae=function(){var e=(0,t.useState)(""),a=(0,n.Z)(e,2),r=a[0],o=a[1],u=(0,l.lr)(),c=(0,n.Z)(u,2),p=c[0],m=c[1],v=(0,d.$G)(r),f=v.filmsBySearch,h=v.isLoading,y=p.get("query");return(0,t.useEffect)((function(){y?o(y):m({query:r})}),[y,r,m,o]),(0,V.jsxs)(s.xu,{p:4,children:[(0,V.jsx)(X,{searchHandler:function(e){o(e),m({query:e})}}),h&&"...Loading",!h&&(0,V.jsx)(ee.Z,{films:f}),(0,V.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=890.7d28bb05.chunk.js.map