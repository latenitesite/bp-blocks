parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"b9XL":[function(require,module,exports) {
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}function t(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?module.exports=t=function(t){return o(t)}:module.exports=t=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},t(n)}module.exports=t;
},{}],"E7HD":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e;
},{}],"pxk2":[function(require,module,exports) {
var e=require("../helpers/typeof"),r=require("./assertThisInitialized");function t(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?r(t):i}module.exports=t;
},{"../helpers/typeof":"b9XL","./assertThisInitialized":"E7HD"}],"UJE0":[function(require,module,exports) {
function t(e){return module.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}module.exports=t;
},{}],"AkAO":[function(require,module,exports) {
function t(o,e){return module.exports=t=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},t(o,e)}module.exports=t;
},{}],"d4H2":[function(require,module,exports) {
var e=require("./setPrototypeOf");function r(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}module.exports=r;
},{"./setPrototypeOf":"AkAO"}],"xHsb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@babel/runtime/helpers/classCallCheck")),t=o(require("@babel/runtime/helpers/createClass")),a=o(require("@babel/runtime/helpers/possibleConstructorReturn")),r=o(require("@babel/runtime/helpers/getPrototypeOf")),s=o(require("@babel/runtime/helpers/assertThisInitialized")),n=o(require("@babel/runtime/helpers/inherits"));function o(e){return e&&e.__esModule?e:{default:e}}var l=wp.element,u=l.Component,i=l.Fragment,m=l.createElement,c=wp.components.Popover,p=wp,h=p.apiFetch,d=wp.i18n.__,_=function(o){function l(){var t;return(0,e.default)(this,l),(t=(0,a.default)(this,(0,r.default)(l).apply(this,arguments))).state={search:"",items:[],error:""},t.searchItemName=t.searchItemName.bind((0,s.default)(t)),t.selectItemName=t.selectItemName.bind((0,s.default)(t)),t}return(0,n.default)(l,o),(0,t.default)(l,[{key:"searchItemName",value:function(e){var t=this,a=this.state.search,r=this.props.component;this.setState({search:e}),e.length<a.length&&this.setState({items:[]});var s="/buddypress/v1/"+r;e&&(s+="?search="+encodeURIComponent(e)),h({path:s}).then(function(e){t.setState({items:e})},function(e){t.setState({error:e.message})})}},{key:"selectItemName",value:function(e,t){var a=this.props.onSelectItem;return e.preventDefault(),this.setState({search:"",items:[],error:""}),a({itemID:t})}},{key:"render",value:function(){var e,t=this,a=this.state,r=a.search,s=a.items,n=this.props,o=n.ariaLabel,l=n.placeholder,u=n.useAvatar;return o||(o=d("Item's name","buddypress")),l||(l=d("Enter Item's name here…","buddypress")),s.length&&(e=s.map(function(e){return m("button",{type:"button",key:"editor-autocompleters__item-item-"+e.id,role:"option","aria-selected":"true",className:"components-button components-autocomplete__result editor-autocompleters__user",onClick:function(a){return t.selectItemName(a,e.id)}},u&&m("img",{key:"avatar",className:"editor-autocompleters__user-avatar",alt:"",src:e.avatar_urls.thumb}),m("span",{key:"name",className:"editor-autocompleters__user-name"},e.name),e.mention_name&&m("span",{key:"slug",className:"editor-autocompleters__user-slug"},e.mention_name))})),m(i,null,m("input",{type:"text",value:r,className:"components-placeholder__input","aria-label":o,placeholder:l,onChange:function(e){return t.searchItemName(e.target.value)}}),0!==s.length&&m(c,{className:"components-autocomplete__popover",focusOnMount:!1,position:"bottom left"},m("div",{className:"components-autocomplete__results"},e)))}}]),l}(u),b=_;exports.default=b;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2"}],"TmUL":[function(require,module,exports) {
"use strict";var e=t(require("../../../bp-core/js/blocks/bp-autocompleter"));function t(e){return e&&e.__esModule?e:{default:e}}var n=wp.blocks.registerBlockType,s=wp.element,r=s.createElement,l=s.Fragment,a=wp.components,i=a.Placeholder,o=a.Disabled,u=a.PanelBody,d=a.SelectControl,p=a.ToggleControl,b=wp.blockEditor.InspectorControls,y=wp.data.withSelect,c=wp.compose.compose,m=wp.editor.ServerSideRender,g=wp.i18n.__,h=[{label:g("None","buddypress"),value:"none"},{label:g("Thumb","buddypress"),value:"thumb"},{label:g("Full","buddypress"),value:"full"}],f=function(t){var n=t.attributes,s=t.setAttributes,a=t.bpSettings,y=a.isAvatarEnabled,c=a.isMentionEnabled,f=n.avatarSize,S=n.displayMentionSlug,v=n.displayActionButton;return n.itemID?r(l,null,r(b,null,y&&r(u,{title:g("Avatar settings","buddypress")},r(d,{label:g("Size","buddypress"),value:f,options:h,onChange:function(e){s({avatarSize:e})}})),c&&r(u,{title:g("Mention settings","buddypress")},r(p,{label:g("Display Mention slug","buddypress"),checked:!!S,onChange:function(){s({displayMentionSlug:!S})},help:g(S?"Include the user's mention name under their display name.":"Toggle to display the user's mention name under their display name.","buddypress")})),r(u,{title:g("Profile button settings","buddypress")},r(p,{label:g("Display Profile button","buddypress"),checked:!!v,onChange:function(){s({displayActionButton:!v})},help:g(S?"Include a link to the user's profile page under their display name.":"Toggle to display a link to the user's profile page under their display name.","buddypress")}))),r(o,null,r(m,{block:"bp/member",attributes:n}))):r(i,{icon:"admin-users",label:g("BuddyPress Member","buddypress"),instructions:g("Start typing the name of the member you want to feature into this post.","buddypress")},r(e.default,{component:"members",ariaLabel:g("Member's username","buddypress"),placeholder:g("Enter Member's username here…","buddypress"),onSelectItem:s,useAvatar:y}))},S=c([y(function(e){return{bpSettings:e("core/editor").getEditorSettings().bp.members||{}}})])(f);n("bp/member",{title:g("Member","buddypress"),description:g("BuddyPress Member.","buddypress"),icon:"admin-users",category:"buddypress",attributes:{itemID:{type:"integer",default:0},avatarSize:{type:"string",default:"full"},displayMentionSlug:{type:"boolean",default:!0},displayActionButton:{type:"boolean",default:!0}},edit:S,save:function(){return null}});
},{"../../../bp-core/js/blocks/bp-autocompleter":"xHsb"}]},{},["TmUL"], null)