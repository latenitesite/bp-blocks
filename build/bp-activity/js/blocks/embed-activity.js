parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function t(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,n=!1,l=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(e.push(i.value),!r||e.length!==r);o=!0);}catch(u){n=!0,l=u}finally{try{o||null==a.return||a.return()}finally{if(n)throw l}}return e}}module.exports=t;
},{}],"Rom6":[function(require,module,exports) {
function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}module.exports=t;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),i=require("./nonIterableRest");function t(t,a){return r(t)||e(t,a)||i()}module.exports=t;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./nonIterableRest":"Rom6"}],"hBDw":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/helpers/slicedToArray"));function t(e){return e&&e.__esModule?e:{default:e}}var i=wp.blocks.registerBlockType,r=wp.element,n=r.createElement,s=r.Fragment,o=r.useState,a=r.useEffect,l=r.Component,c=wp.i18n.__,d=wp.components,u=d.Placeholder,p=d.SandBox,b=d.Button,m=d.ExternalLink,y=d.Spinner,v=d.Toolbar,f=d.ToolbarButton,g=wp.compose.compose,h=wp.data.withSelect,w=wp.blockEditor,k=w.RichText,E=w.BlockControls,_=function(t){var i=t.attributes,r=t.setAttributes,a=t.bpSettings,l=t.preview,d=t.fetching,g=i.url,h=(i.caption,a.embedScriptURL),w=c("BuddyPress Activity URL","buddypress"),k=o(g),_=(0,e.default)(k,2),S=_[0],N=_[1],P=o(!g),B=(0,e.default)(P,2),L=B[0],R=B[1];return L?n(u,{icon:"buddicons-activity",label:w,className:"wp-block-embed",instructions:c("Paste the link to the activity content you want to display on your site.","buddypress")},n("form",{onSubmit:function(e){e&&e.preventDefault(),R(!1),r({url:S})}},n("input",{type:"url",value:S||"",className:"components-placeholder__input","aria-label":w,placeholder:c("Enter URL to embed here…","buddypress"),onChange:function(e){return N(e.target.value)}}),n(b,{isPrimary:!0,type:"submit"},c("Embed","buddypress"))),n("div",{className:"components-placeholder__learn-more"},n(m,{href:c("https://codex.buddypress.org/activity-embeds/")},c("Learn more about activity embeds","buddypress")))):d?n("div",{className:"wp-block-embed is-loading"},n(y,null),n("p",null,c("Embedding…","buddypress"))):n(s,null,!L&&n(E,null,n(v,null,n(f,{icon:"edit",title:c("Edit URL","buddypress"),onClick:function(e){e&&e.preventDefault(),R(!0),N(""),r({url:""})}}))),n("div",{className:"wp-block-embed__wrapper"},n(p,{html:l&&l.html?l.html:"",scripts:[h]})))},S=g([h(function(e,t){var i=t.attributes.url,r=e("core/editor").getEditorSettings(),n=e("core"),s=n.getEmbedPreview,o=n.isRequestingEmbedPreview,a=n.isPreviewEmbedFallback,l=void 0!==i&&s(i),c=void 0!==i&&a(i),d=void 0!==i&&o(i);return{bpSettings:r.bp.activity||{},preview:l,fetching:d,fallback:c}})])(_);i("bp/embed-activity",{title:c("Embed an activity","buddypress"),description:c("Add a block that displays the activity content pulled from this or other community sites.","buddypress"),icon:"buddicons-activity",category:"buddypress",attributes:{url:{type:"string"},caption:{type:"string",source:"html",selector:"figcaption"}},supports:{align:!0},edit:S,save:function(e){var t=e.attributes,i=t.url,r=t.caption;return i?n("figure",{className:"wp-block-embed is-type-bp-activity"},n("div",{className:"wp-block-embed__wrapper"},"\n".concat(i,"\n")),!k.isEmpty(r)&&n(k.Content,{tagName:"figcaption",value:r})):null}});
},{"@babel/runtime/helpers/slicedToArray":"HETk"}]},{},["hBDw"], null)