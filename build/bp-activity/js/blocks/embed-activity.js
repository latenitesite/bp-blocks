parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function t(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,n=!1,l=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(e.push(i.value),!r||e.length!==r);o=!0);}catch(u){n=!0,l=u}finally{try{o||null==a.return||a.return()}finally{if(n)throw l}}return e}}module.exports=t;
},{}],"Rom6":[function(require,module,exports) {
function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}module.exports=t;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),i=require("./nonIterableRest");function t(t,a){return r(t)||e(t,a)||i()}module.exports=t;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./nonIterableRest":"Rom6"}],"Sjre":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@babel/runtime/helpers/slicedToArray"));function t(e){return e&&e.__esModule?e:{default:e}}var i=wp,r=i.element,o=r.createElement,n=r.Fragment,s=r.useState,a=i.i18n.__,l=i.components,d=l.Placeholder,u=l.SandBox,c=l.Button,p=l.ExternalLink,b=l.Spinner,m=l.Toolbar,y=l.ToolbarButton,v=i.compose.compose,h=i.data.withSelect,f=i.blockEditor,g=f.RichText,_=f.BlockControls,w=function(t){var i=t.attributes,r=t.setAttributes,l=t.isSelected,v=t.bpSettings,h=t.preview,f=t.fetching,w=i.url,E=i.caption,k=v.embedScriptURL,S=a("BuddyPress Activity URL","buddypress"),x=s(w),P=(0,e.default)(x,2),L=P[0],N=P[1],R=s(!w),B=(0,e.default)(R,2),T=B[0],U=B[1],A=o(_,null,o(m,null,o(y,{icon:"edit",title:a("Edit URL","buddypress"),onClick:function(e){e&&e.preventDefault(),U(!0)}})));return T?o(d,{icon:"buddicons-activity",label:S,className:"wp-block-embed",instructions:a("Paste the link to the activity content you want to display on your site.","buddypress")},o("form",{onSubmit:function(e){e&&e.preventDefault(),U(!1),r({url:L})}},o("input",{type:"url",value:L||"",className:"components-placeholder__input","aria-label":S,placeholder:a("Enter URL to embed here…","buddypress"),onChange:function(e){return N(e.target.value)}}),o(c,{isPrimary:!0,type:"submit"},a("Embed","buddypress"))),o("div",{className:"components-placeholder__learn-more"},o(p,{href:a("https://codex.buddypress.org/activity-embeds/")},a("Learn more about activity embeds","buddypress")))):f?o("div",{className:"wp-block-embed is-loading"},o(b,null),o("p",null,a("Embedding…","buddypress"))):h&&h.x_buddypress&&"activity"===h.x_buddypress?o(n,null,!T&&A,o("figure",{className:"wp-block-embed is-type-bp-activity"},o("div",{className:"wp-block-embed__wrapper"},o(u,{html:h&&h.html?h.html:"",scripts:[k]})),(!g.isEmpty(E)||l)&&o(g,{tagName:"figcaption",placeholder:a("Write caption…","buddypress"),value:E,onChange:function(e){return r({caption:e})},inlineToolbar:!0}))):(r({url:""}),o(n,null,A,o(d,{icon:"buddicons-activity",label:S},o("p",{className:"components-placeholder__error"},a("The URL you provided is not a permalink to a BuddyPress Activity. Please use another URL.","buddypress")))))},E=v([h(function(e,t){var i=t.attributes.url,r=e("core/editor").getEditorSettings(),o=e("core"),n=o.getEmbedPreview,s=o.isRequestingEmbedPreview,a=void 0!==i&&n(i),l=void 0!==i&&s(i);return{bpSettings:r.bp.activity||{},preview:a,fetching:l}})])(w),k=E;exports.default=k;
},{"@babel/runtime/helpers/slicedToArray":"HETk"}],"zmBI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=wp,t=e.blockEditor.RichText,a=e.element.createElement,r=function(e){var r=e.attributes,i=r.url,c=r.caption;return i?a("figure",{className:"wp-block-embed is-type-bp-activity"},a("div",{className:"wp-block-embed__wrapper"},"\n".concat(i,"\n")),!t.isEmpty(c)&&a(t.Content,{tagName:"figcaption",value:c})):null},i=r;exports.default=i;
},{}],"hBDw":[function(require,module,exports) {
"use strict";var t=i(require("./embed-activity/edit")),e=i(require("./embed-activity/save"));function i(t){return t&&t.__esModule?t:{default:t}}var s=wp,r=s.i18n.__,d=s.blocks.registerBlockType;d("bp/embed-activity",{title:r("Embed an activity","buddypress"),description:r("Add a block that displays the activity content pulled from this or other community sites.","buddypress"),icon:"buddicons-activity",category:"buddypress",attributes:{url:{type:"string"},caption:{type:"string",source:"html",selector:"figcaption"}},supports:{align:!0},edit:t.default,save:e.default});
},{"./embed-activity/edit":"Sjre","./embed-activity/save":"zmBI"}]},{},["hBDw"], null)