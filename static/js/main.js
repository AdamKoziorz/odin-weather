"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Regular.ttf */ "./src/assets/fonts/OpenSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Light.ttf */ "./src/assets/fonts/OpenSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/OpenSans-Medium.ttf */ "./src/assets/fonts/OpenSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: light;
  font-weight: 300;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: medium;
  font-weight: 500;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-color: rgb(120, 120, 120);
  height: 100vh;
  width: auto;
  overflow: hidden;
}

.main-info {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 2rem;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
}

.attribution {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
}

@media (max-width: 500px) {
  .main-info {
    margin: 1rem;
    max-width: 500px;
    justify-content: center;
  }
  .attribution {
    bottom: 1rem;
    right: 1rem;
  }
}
#searchLocation {
  background: transparent;
  padding: 6px;
  padding-left: 0px;
  width: 250px;
  font-size: 1.2rem;
  border: 0;
  outline: 0;
  border-bottom: 2px solid white;
  color: white;
}

#searchLocation::placeholder {
  color: rgb(247, 247, 247);
}

span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.i_icon {
  max-width: 120px;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

span:not(.i_icon) {
  color: white;
  font-family: "Open Sans", sans-serif;
}

span.i_description {
  font-size: 2rem;
}

span.i_temperature {
  font-size: 4rem;
  margin-bottom: 20px;
}

span.i_location, span.i_date, span.i_time {
  font-size: 1.2rem;
}

span.i_time {
  margin-bottom: 30px;
}

span.error {
  color: rgb(228, 228, 228);
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/main.scss","webpack://./src/style/fonts.scss","webpack://./src/style/base.scss","webpack://./src/style/layout.scss","webpack://./src/style/forms.scss","webpack://./src/style/content.scss"],"names":[],"mappings":"AAAA;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACAD;;ADEA,gDAAA;AACA;;EAEC,cAAA;ACCD;;ADCA;EACC,cAAA;ACED;;ADAA;EACC,gBAAA;ACGD;;ADDA;EACC,YAAA;ACID;;ADFA;;EAEC,WAAA;EACA,aAAA;ACKD;;ADHA;EACC,yBAAA;EACA,iBAAA;ACMD;;ACpDA;EACI,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ADuDJ;ACpDA;EACI,wBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ADsDJ;ACnDA;EACI,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ADqDJ;AE1EA;EACI,8BAAA;EACA,2BAAA;EACA,yBAAA;EACA,sBAAA;EACA,wBAAA;EACA,4BAAA;EACA,oCAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;AF4EJ;;AGtFA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,QAAA;EACA,qCAAA;EACA,6CAAA;EACA,2BAAA;EACA,mCAAA;EACA,mBAAA;EACA,qCAAA;AHyFJ;;AGtFA;EACI,eAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,qCAAA;EACA,6CAAA;EACA,2BAAA;EACA,mCAAA;EACA,mBAAA;EACA,qCAAA;AHyFJ;;AGtFA;EACI;IACI,YAAA;IACA,gBAAA;IACA,uBAAA;EHyFN;EGtFE;IACI,YAAA;IACA,WAAA;EHwFN;AACF;AI9HA;EACI,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,YAAA;AJgIJ;;AI7HA;EACI,yBAAA;AJgIJ;;AK7IA;EACE,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;ALgJF;;AK7IA;EACI,gBAAA;EACA,2BAAA;EACA,4BAAA;EACA,uBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;ALgJJ;;AK7IA;EACI,YAAA;EACA,oCAAA;ALgJJ;;AK7IA;EACI,eAAA;ALgJJ;;AK7IA;EACI,eAAA;EACA,mBAAA;ALgJJ;;AK7IA;EACI,iBAAA;ALgJJ;;AK7IA;EACI,mBAAA;ALgJJ;;AK7IA;EACI,yBAAA;EACA,aAAA;ALgJJ","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Regular.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: light;\n  font-weight: 300;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Light.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Open Sans\";\n  font-style: medium;\n  font-weight: 500;\n  font-display: swap;\n  src: url(../assets/fonts/OpenSans-Medium.ttf) format(\"truetype\");\n}\nbody {\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-color: rgb(120, 120, 120);\n  height: 100vh;\n  width: auto;\n  overflow: hidden;\n}\n\n.main-info {\n  margin: 3rem;\n  display: flex;\n  flex-direction: column;\n  max-width: 250px;\n  padding: 2rem;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.03);\n  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.18);\n}\n\n.attribution {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.03);\n  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.18);\n}\n\n@media (max-width: 500px) {\n  .main-info {\n    margin: 1rem;\n    max-width: 500px;\n    justify-content: center;\n  }\n  .attribution {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n#searchLocation {\n  background: transparent;\n  padding: 6px;\n  padding-left: 0px;\n  width: 250px;\n  font-size: 1.2rem;\n  border: 0;\n  outline: 0;\n  border-bottom: 2px solid white;\n  color: white;\n}\n\n#searchLocation::placeholder {\n  color: rgb(247, 247, 247);\n}\n\nspan {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.i_icon {\n  max-width: 120px;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\nspan:not(.i_icon) {\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nspan.i_description {\n  font-size: 2rem;\n}\n\nspan.i_temperature {\n  font-size: 4rem;\n  margin-bottom: 20px;\n}\n\nspan.i_location, span.i_date, span.i_time {\n  font-size: 1.2rem;\n}\n\nspan.i_time {\n  margin-bottom: 30px;\n}\n\nspan.error {\n  color: rgb(228, 228, 228);\n  display: none;\n}","@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Regular.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: light;\r\n    font-weight: 300;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Light.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Open Sans';\r\n    font-style: medium;\r\n    font-weight: 500;\r\n    font-display: swap;\r\n    src: url(../assets/fonts/OpenSans-Medium.ttf) format('truetype');\r\n}","body {\r\n    -webkit-background-size: cover;\r\n    -moz-background-size:  cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-color: rgb(120, 120, 120);\r\n    height: 100vh;\r\n    width: auto;\r\n    overflow: hidden;\r\n}\r\n",".main-info {\r\n    margin: 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 250px;\r\n    padding: 2rem;\r\n    gap: 8px;\r\n    background: rgba( 255, 255, 255, 0.03 );\r\n    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);\r\n    backdrop-filter: blur( 10px );\r\n    -webkit-backdrop-filter: blur( 10px );\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.attribution {\r\n    position: fixed;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n    padding: 1rem;\r\n    background: rgba( 255, 255, 255, 0.03 );\r\n    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);\r\n    backdrop-filter: blur( 10px );\r\n    -webkit-backdrop-filter: blur( 10px );\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .main-info {\r\n        margin: 1rem;\r\n        max-width: 500px;\r\n        justify-content: center;\r\n    }\r\n\r\n    .attribution {\r\n        bottom: 1rem;\r\n        right: 1rem;\r\n    }\r\n }","#searchLocation {\r\n    background: transparent;\r\n    padding: 6px;\r\n    padding-left: 0px;\r\n    width: 250px;\r\n    font-size: 1.2rem;\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid white;\r\n    color: white;\r\n}\r\n\r\n#searchLocation::placeholder {\r\n    color: rgb(247, 247, 247);\r\n}","span {\r\n  -webkit-user-select: none;  \r\n  -moz-user-select: none;    \r\n  -ms-user-select: none;      \r\n  user-select: none;\r\n}\r\n\r\n.i_icon {\r\n    max-width: 120px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    -webkit-user-drag: none;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\nspan:not(.i_icon) {\r\n    color: white;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nspan.i_description {\r\n    font-size: 2rem;\r\n}\r\n\r\nspan.i_temperature {\r\n    font-size: 4rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nspan.i_location, span.i_date, span.i_time {\r\n    font-size: 1.2rem;\r\n}\r\n\r\nspan.i_time {\r\n    margin-bottom: 30px;\r\n}\r\n\r\nspan.error {\r\n    color: rgb(228, 228, 228);\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ "./src/modules/weatherapi.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/modules/view.js");



const search = document.getElementById('searchLocation');

async function update(location) {
  try {
      const data = await (0,_weatherapi__WEBPACK_IMPORTED_MODULE_0__.getForecast)(location);
      const isNight = await (0,_weatherapi__WEBPACK_IMPORTED_MODULE_0__.getAstronomy)(location);
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.updateView)(data, isNight);
  } catch(err) {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showError)();
  }
}

search.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      await update(search.value);
      search.value = "";
    }
  });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (update);


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/modules/controller.js");



(0,_controller__WEBPACK_IMPORTED_MODULE_1__["default"])('Toronto');

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLocation: () => (/* binding */ createLocation),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatTime12: () => (/* binding */ formatTime12),
/* harmony export */   isNight: () => (/* binding */ isNight),
/* harmony export */   padZeroToTime: () => (/* binding */ padZeroToTime)
/* harmony export */ });
function formatDate(datetime) {
  const dateParts = datetime.split("-");
  const year = dateParts[0];
  let month = dateParts[1];
  let day = dateParts[2].slice(0, 2);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month = months[month - 1];
  day = day.replace(/^0+/, "");

  return `${month} ${day}, ${year}`;
}
  
function formatTime12(datetime) {
  const timeParts = datetime.split(" ")[1].split(":");
  let hour = timeParts[0];
  const minutes = timeParts[1];
  const suffix = parseInt(hour, 10) < 12 ? "AM" : "PM";
  
  hour = hour === "0" ? "12" : hour;
  hour = parseInt(hour, 10) < 13 ? hour : `${parseInt(hour, 10) - 12}`;
  return `${hour}:${minutes} ${suffix}`;
}
  
function formatTime24(time) {
  const [noperiod, period] = time.split(" ");
  let [hours] = noperiod.split(":").map(Number);
  const minutes = noperiod.split(":")[1]
    ? parseInt(noperiod.split(":")[1], 10)
    : 0;
  
  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }
  
  return { hours, minutes };
}
  
function createLocation(city, region, country) {
  let location = "";
  if (city) {
    location += `${city}, `;
  }
  if (region) {
    location += `${region}, `;
    }
  if (country) {
    location += country;
  }
  return location;
}
  
function padZeroToTime(time) {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour < 10) {
    return `0${time}`;
  }
  return time;
}
  
function isNight(time, sunrise, sunset) {
  const time24 = formatTime24(time);
  const sunrise24 = formatTime24(sunrise);
  const sunset24 = formatTime24(sunset);
  
  const timeMins = time24.hours * 60 + time24.minutes;
  const sunriseMins = sunrise24.hours * 60 + sunrise24.minutes;
  const sunsetMins = sunset24.hours * 60 + sunset24.minutes;
  
  return !(timeMins >= sunriseMins && timeMins <= sunsetMins);
}
  

  

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showError: () => (/* binding */ showError),
/* harmony export */   updateView: () => (/* binding */ updateView)
/* harmony export */ });
/* harmony import */ var _assets_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/weather-cloudy.svg */ "./src/assets/icons/weather-cloudy.svg");
/* harmony import */ var _assets_icons_weather_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/weather-partly-cloudy.svg */ "./src/assets/icons/weather-partly-cloudy.svg");
/* harmony import */ var _assets_icons_weather_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/weather-night-partly-cloudy.svg */ "./src/assets/icons/weather-night-partly-cloudy.svg");
/* harmony import */ var _assets_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/weather-rainy.svg */ "./src/assets/icons/weather-rainy.svg");
/* harmony import */ var _assets_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/weather-pouring.svg */ "./src/assets/icons/weather-pouring.svg");
/* harmony import */ var _assets_icons_weather_snowy_rainy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/weather-snowy-rainy.svg */ "./src/assets/icons/weather-snowy-rainy.svg");
/* harmony import */ var _assets_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/weather-sunny.svg */ "./src/assets/icons/weather-sunny.svg");
/* harmony import */ var _assets_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/weather-night.svg */ "./src/assets/icons/weather-night.svg");
/* harmony import */ var _assets_icons_weather_fog_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/weather-fog.svg */ "./src/assets/icons/weather-fog.svg");
/* harmony import */ var _assets_icons_weather_cloudy_alert_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/weather-cloudy-alert.svg */ "./src/assets/icons/weather-cloudy-alert.svg");
/* harmony import */ var _assets_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/weather-snowy.svg */ "./src/assets/icons/weather-snowy.svg");
/* harmony import */ var _assets_icons_weather_snowy_heavy_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/weather-snowy-heavy.svg */ "./src/assets/icons/weather-snowy-heavy.svg");
/* harmony import */ var _assets_icons_weather_hail_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/weather-hail.svg */ "./src/assets/icons/weather-hail.svg");
/* harmony import */ var _assets_icons_weather_lightning_rainy_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/weather-lightning-rainy.svg */ "./src/assets/icons/weather-lightning-rainy.svg");
/* harmony import */ var _assets_images_raining_background_gif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/raining_background.gif */ "./src/assets/images/raining_background.gif");
/* harmony import */ var _assets_images_cloudy_background_gif__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/cloudy_background.gif */ "./src/assets/images/cloudy_background.gif");
/* harmony import */ var _assets_images_overcast_background_gif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/images/overcast_background.gif */ "./src/assets/images/overcast_background.gif");
/* harmony import */ var _assets_images_snowy_background_gif__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/images/snowy_background.gif */ "./src/assets/images/snowy_background.gif");
/* harmony import */ var _assets_images_default_background_gif__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/images/default_background.gif */ "./src/assets/images/default_background.gif");
/* harmony import */ var _assets_images_clear_background_gif__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/images/clear_background.gif */ "./src/assets/images/clear_background.gif");
/* harmony import */ var _assets_images_sunny_background_gif__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/images/sunny_background.gif */ "./src/assets/images/sunny_background.gif");























const { body } = document;
const currentIcon = document.querySelector(".i_icon");
const descriptionSpan = document.querySelector(".i_description");
const locationSpan = document.querySelector(".i_location");
const dateSpan = document.querySelector(".i_date");
const timeSpan = document.querySelector(".i_time");
const temperatureSpan = document.querySelector(".i_temperature");
const errorSpan = document.querySelector(".error");
const attributionText = document.querySelector(".attribution-text");

function setAesthetic(description, isNight) {
  // Set Icons
  switch (description) {
    case "Cloudy":
    case "Overcast":
      currentIcon.src = _assets_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__;
      body.style.backgroundImage = `url(${_assets_images_overcast_background_gif__WEBPACK_IMPORTED_MODULE_16__})`;
      attributionText.innerText = "Background: agilefoolhardyjoey";
      break;
    case "Partly cloudy":
      currentIcon.src = isNight ? _assets_icons_weather_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ : _assets_icons_weather_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;
      body.style.backgroundImage = isNight
        ? `url(${_assets_images_clear_background_gif__WEBPACK_IMPORTED_MODULE_19__})`
        : `url(${_assets_images_cloudy_background_gif__WEBPACK_IMPORTED_MODULE_15__})`;
      attributionText.innerText = "Background: u/kmm625";
      break;
    case "Patchy light drizzle":
    case "Light drizzle":
    case "Patchy light rain":
    case "Light rain":
    case "Moderate rain at times":
    case "Moderate rain":
    case "Light rain shower":
    case "Rain":
    case "Freezing drizzle":
      currentIcon.src = _assets_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_3__;
      body.style.backgroundImage = `url(${_assets_images_raining_background_gif__WEBPACK_IMPORTED_MODULE_14__})`;
      attributionText.innerText = "Background by Daydreamer94";
      break;
    case "Heavy rain at times":
    case "Heavy rain":
    case "Moderate or heavy rain shower":
    case "Torrential rain shower":
    case "Heavy freezing drizzle":
      currentIcon.src = _assets_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_4__;
      body.style.backgroundImage = `url(${_assets_images_raining_background_gif__WEBPACK_IMPORTED_MODULE_14__})`;
      attributionText.innerText = "Background by Daydreamer94";
      break;
    case "Light sleet showers":
    case "Moderate or heavy sleet showers":
    case "Light snow showers":
    case "Moderate or heavy snow showers":
      currentIcon.src = _assets_icons_weather_snowy_rainy_svg__WEBPACK_IMPORTED_MODULE_5__;
      break;
    case "Light sleet":
    case "Moderate or heavy sleet":
    case "Ice pellets":
    case "Light showers of ice pellets":
    case "Moderate or heavy showers of ice pellets":
      currentIcon.src = _assets_icons_weather_hail_svg__WEBPACK_IMPORTED_MODULE_12__;
      break;
    case "Patchy light rain with thunder":
    case "Moderate or heavy rain with thunder":
      currentIcon.src = _assets_icons_weather_lightning_rainy_svg__WEBPACK_IMPORTED_MODULE_13__;
      body.style.backgroundImage = `url(${_assets_images_raining_background_gif__WEBPACK_IMPORTED_MODULE_14__})`;
      attributionText.innerText = "Background by Daydreamer94";
      break;
    case "Sunny":
      currentIcon.src = _assets_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_6__;
      body.style.backgroundImage = `url(${_assets_images_sunny_background_gif__WEBPACK_IMPORTED_MODULE_20__})`;
      attributionText.innerText = "Background by 1041uuu";
      break;
    case "Clear":
      currentIcon.src = _assets_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_7__;
      body.style.backgroundImage = `url(${_assets_images_clear_background_gif__WEBPACK_IMPORTED_MODULE_19__})`;
      attributionText.innerText = "Background by 1041uuu";
      break;
    case "Mist":
    case "Fog":
    case "Freezing fog":
      currentIcon.src = _assets_icons_weather_fog_svg__WEBPACK_IMPORTED_MODULE_8__;
      break;
    case "Patchy rain possible":
    case "Patchy snow possible":
    case "Patchy sleet possible":
    case "Patchy freezing drizzle possible":
    case "Thundry outbreaks possible":
      currentIcon.src = _assets_icons_weather_cloudy_alert_svg__WEBPACK_IMPORTED_MODULE_9__;
      body.style.abckgroundImage = `url(${_assets_images_overcast_background_gif__WEBPACK_IMPORTED_MODULE_16__})`;
      attributionText.innerText = "Background: agilefoolhardyjoey";
      break;
    case "Patchy light snow":
    case "Light snow":
    case "Moderate snow":
    case "Patchy light snow with thunder":
      currentIcon.src = _assets_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10__;
      body.style.backgroundImage = `url(${_assets_images_snowy_background_gif__WEBPACK_IMPORTED_MODULE_17__})`;
      attributionText.innerText = "Background by Ryan Haight";
      break;
    case "Blowing snow":
    case "Patchy heavy snow":
    case "Heavy snow":
    case "Blizzard":
    case "Moderate or heavy snow with thunder":
      currentIcon.src = _assets_icons_weather_snowy_heavy_svg__WEBPACK_IMPORTED_MODULE_11__;
      body.style.backgroundImage = `url(${_assets_images_snowy_background_gif__WEBPACK_IMPORTED_MODULE_17__})`;
      attributionText.innerText = "Background by Ryan Haight";
      break;
    default:
      currentIcon.src = "";
      body.style.backgroundImage = `url(${_assets_images_default_background_gif__WEBPACK_IMPORTED_MODULE_18__})`;
      attributionText.innerText = "";
  }

  body.style.backgroundBlendMode = isNight ? "multiply" : "normal";
  currentIcon.alt = "";
}

function updateView(data, isNight) {
  setAesthetic(data.description, isNight);
  descriptionSpan.innerText = data.description;
  locationSpan.innerText = data.location;
  dateSpan.innerText = data.date;
  timeSpan.innerText = data.time;
  temperatureSpan.innerText = data.temperature;
  errorSpan.style.display = "none";
}

function showError() {
  errorSpan.style.display = "inline";
}



/***/ }),

/***/ "./src/modules/weatherapi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAstronomy: () => (/* binding */ getAstronomy),
/* harmony export */   getForecast: () => (/* binding */ getForecast)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");


const API_KEY = "567d5d6aedf54166a62222242231408";
const API_BASE_URL = "https://api.weatherapi.com/v1";

function transformForecastData(rawData) {
  return {
    description: rawData.current.condition.text,
    location: (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createLocation)(
      rawData.location.name,
      rawData.location.region,
      rawData.location.country,
    ),
    date: (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.formatDate)(rawData.location.localtime),
    time: (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.formatTime12)(rawData.location.localtime),
    temperature: `${Math.round(rawData.current.temp_c)}°C`,
  };
}

function transformAstronomyData(rawData) {
  return (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.isNight)(
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.padZeroToTime)((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.formatTime12)(rawData.location.localtime)),
    rawData.astronomy.astro.sunrise,
    rawData.astronomy.astro.sunset,
  );
}

async function getForecastData(region) {
  const response = await fetch(
    `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${region}&days=3`,
    { mode: "cors" },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Place does not exist");
  }
  return data;
}

async function getAstronomyData(region) {
  const response = await fetch(
    `${API_BASE_URL}/astronomy.json?key=${API_KEY}&q=${region}&dt=`,
    { mode: "cors" },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Place does not exist");
  }
  return data;
}

async function getForecast(region) {
  const rawData = await getForecastData(region);
  const cleanData = transformForecastData(rawData);
  return cleanData;
}

async function getAstronomy(region) {
  const rawData = await getAstronomyData(region);
  const cleanData = transformAstronomyData(rawData);
  return cleanData;
}




/***/ }),

/***/ "./src/assets/fonts/OpenSans-Light.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Light.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba19b360bc99b580b45b.ttf";

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Medium.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Medium.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b0a682fe3717764627e.ttf";

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a6cfa5890d7f3eef585.ttf";

/***/ }),

/***/ "./src/assets/icons/weather-cloudy-alert.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/weather-cloudy-alert.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0169b6f626f4d871814.svg";

/***/ }),

/***/ "./src/assets/icons/weather-cloudy.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/weather-cloudy.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61f4fa4a648600a870bc.svg";

/***/ }),

/***/ "./src/assets/icons/weather-fog.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/weather-fog.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47164957694fba949bfe.svg";

/***/ }),

/***/ "./src/assets/icons/weather-hail.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/weather-hail.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9d241bb7ef02941223b.svg";

/***/ }),

/***/ "./src/assets/icons/weather-lightning-rainy.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/weather-lightning-rainy.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d4a024adbfe51ece1d8.svg";

/***/ }),

/***/ "./src/assets/icons/weather-night-partly-cloudy.svg":
/*!**********************************************************!*\
  !*** ./src/assets/icons/weather-night-partly-cloudy.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f96e0fd7bc4c3862b6d2.svg";

/***/ }),

/***/ "./src/assets/icons/weather-night.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/weather-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb20161f2edd76b679c2.svg";

/***/ }),

/***/ "./src/assets/icons/weather-partly-cloudy.svg":
/*!****************************************************!*\
  !*** ./src/assets/icons/weather-partly-cloudy.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f046b8aeee84e1835fb.svg";

/***/ }),

/***/ "./src/assets/icons/weather-pouring.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/weather-pouring.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d805148446e7e761a5e.svg";

/***/ }),

/***/ "./src/assets/icons/weather-rainy.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/weather-rainy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fde585484beb531b9334.svg";

/***/ }),

/***/ "./src/assets/icons/weather-snowy-heavy.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/weather-snowy-heavy.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ba991383e574e2bcb5c.svg";

/***/ }),

/***/ "./src/assets/icons/weather-snowy-rainy.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/weather-snowy-rainy.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90dbbada5d7aa3d5974a.svg";

/***/ }),

/***/ "./src/assets/icons/weather-snowy.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/weather-snowy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03d93595d067184cda76.svg";

/***/ }),

/***/ "./src/assets/icons/weather-sunny.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/weather-sunny.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e8627fa19549eb8b9e4.svg";

/***/ }),

/***/ "./src/assets/images/clear_background.gif":
/*!************************************************!*\
  !*** ./src/assets/images/clear_background.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67cfc6494f279e3d9f7f.gif";

/***/ }),

/***/ "./src/assets/images/cloudy_background.gif":
/*!*************************************************!*\
  !*** ./src/assets/images/cloudy_background.gif ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f646cd2eac39982fa46e.gif";

/***/ }),

/***/ "./src/assets/images/default_background.gif":
/*!**************************************************!*\
  !*** ./src/assets/images/default_background.gif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2662badb3448bb9ec8ad.gif";

/***/ }),

/***/ "./src/assets/images/overcast_background.gif":
/*!***************************************************!*\
  !*** ./src/assets/images/overcast_background.gif ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34e5f9e4ba5af11365f7.gif";

/***/ }),

/***/ "./src/assets/images/raining_background.gif":
/*!**************************************************!*\
  !*** ./src/assets/images/raining_background.gif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30cce430c1e7b4e2e77b.gif";

/***/ }),

/***/ "./src/assets/images/snowy_background.gif":
/*!************************************************!*\
  !*** ./src/assets/images/snowy_background.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3f3b1deed971d4f0294.gif";

/***/ }),

/***/ "./src/assets/images/sunny_background.gif":
/*!************************************************!*\
  !*** ./src/assets/images/sunny_background.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6847bd937fe7a0d2d796.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzL21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9KQUF1RDtBQUNuRyw0Q0FBNEMsZ0pBQXFEO0FBQ2pHLDRDQUE0QyxrSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRTQUE0UyxLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdB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QTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFRO0FBQ2hDLDBDQUEwQyxpRUFBZSxDQUFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFhO0FBQ3JDLDBDQUEwQyxpRUFBZSxDQUFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1FQUFpQixDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSnFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0RBQVU7QUFDcEIsVUFBVSx3REFBWTtBQUN0QixvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtREFBTztBQUNoQixJQUFJLHlEQUFhLENBQUMsd0RBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGFBQWEscUJBQXFCLFFBQVEsS0FBSyxPQUFPO0FBQzdELE1BQU0sY0FBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sYUFBYSxzQkFBc0IsUUFBUSxLQUFLLE9BQU87QUFDOUQsTUFBTSxjQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXJhcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvT3BlblNhbnMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBsaWdodDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuYm9keSB7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLWluZm8ge1xuICBtYXJnaW46IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xuICBib3gtc2hhZG93OiAwIDE2cHggMzJweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5hdHRyaWJ1dGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1haW4taW5mbyB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmF0dHJpYnV0aW9uIHtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cbn1cbiNzZWFyY2hMb2NhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jc2VhcmNoTG9jYXRpb246OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbn1cblxuc3BhbiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5pX2ljb24ge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG5zcGFuOm5vdCguaV9pY29uKSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbnNwYW4uaV9kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuc3Bhbi5pX3RlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zcGFuLmlfbG9jYXRpb24sIHNwYW4uaV9kYXRlLCBzcGFuLmlfdGltZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5zcGFuLmlfdGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbnNwYW4uZXJyb3Ige1xuICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xuICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9mb3Jtcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29udGVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FEOztBREVBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0NEOztBRENBO0VBQ0MsY0FBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7QUNHRDs7QUREQTtFQUNDLFlBQUE7QUNJRDs7QURGQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ0tEOztBREhBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ01EOztBQ3BEQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUR1REo7QUNwREE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FEc0RKO0FDbkRBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBRHFESjtBRTFFQTtFQUNJLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRjRFSjs7QUd0RkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBSHlGSjs7QUd0RkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FIeUZKOztBR3RGQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUh5Rk47RUd0RkU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFSHdGTjtBQUNGO0FJOUhBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBSmdJSjs7QUk3SEE7RUFDSSx5QkFBQTtBSmdJSjs7QUs3SUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBTGdKRjs7QUs3SUE7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FMZ0pKOztBSzdJQTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtBTGdKSjs7QUs3SUE7RUFDSSxlQUFBO0FMZ0pKOztBSzdJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBTGdKSjs7QUs3SUE7RUFDSSxpQkFBQTtBTGdKSjs7QUs3SUE7RUFDSSxtQkFBQTtBTGdKSjs7QUs3SUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUxnSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGxpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9PcGVuU2Fucy1MaWdodC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLU1lZGl1bS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuYm9keSB7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XFxuICBib3gtc2hhZG93OiAwIDE2cHggMzJweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4taW5mbyB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuYXR0cmlidXRpb24ge1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgfVxcbn1cXG4jc2VhcmNoTG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NlYXJjaExvY2F0aW9uOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbn1cXG5cXG5zcGFuIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5pX2ljb24ge1xcbiAgbWF4LXdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbnNwYW46bm90KC5pX2ljb24pIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuc3Bhbi5pX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuc3Bhbi5pX3RlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbnNwYW4uaV9sb2NhdGlvbiwgc3Bhbi5pX2RhdGUsIHNwYW4uaV90aW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5zcGFuLmlfdGltZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG5zcGFuLmVycm9yIHtcXG4gIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvT3BlblNhbnMtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcXHJcXG4gICAgZm9udC1zdHlsZTogbGlnaHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBtZWRpdW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5zLU1lZGl1bS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XCIsXCJib2R5IHtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogIGNvdmVyO1xcclxcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblwiLFwiLm1haW4taW5mbyB7XFxyXFxuICAgIG1hcmdpbjogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMDMgKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEwcHggKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEwcHggKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDJyZW07XFxyXFxuICAgIHJpZ2h0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjAzICk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxMHB4ICk7XFxyXFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxMHB4ICk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAubWFpbi1pbmZvIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXR0cmlidXRpb24ge1xcclxcbiAgICAgICAgYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gfVwiLFwiI3NlYXJjaExvY2F0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hMb2NhdGlvbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcclxcbn1cIixcInNwYW4ge1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIFxcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgXFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlfaWNvbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW46bm90KC5pX2ljb24pIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaV9kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5pX3RlbXBlcmF0dXJlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmlfbG9jYXRpb24sIHNwYW4uaV9kYXRlLCBzcGFuLmlfdGltZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmlfdGltZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4uZXJyb3Ige1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0Rm9yZWNhc3QsIGdldEFzdHJvbm9teSB9IGZyb20gJy4vd2VhdGhlcmFwaSdcclxuaW1wb3J0IHsgdXBkYXRlVmlldywgc2hvd0Vycm9yIH0gZnJvbSAnLi92aWV3J1xyXG5cclxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaExvY2F0aW9uJyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3QobG9jYXRpb24pO1xyXG4gICAgICBjb25zdCBpc05pZ2h0ID0gYXdhaXQgZ2V0QXN0cm9ub215KGxvY2F0aW9uKTtcclxuICAgICAgdXBkYXRlVmlldyhkYXRhLCBpc05pZ2h0KTtcclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICB9XHJcbn1cclxuXHJcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBhd2FpdCB1cGRhdGUoc2VhcmNoLnZhbHVlKTtcclxuICAgICAgc2VhcmNoLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZS9tYWluLnNjc3MnO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG51cGRhdGUoJ1Rvcm9udG8nKTsiLCJmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGV0aW1lKSB7XHJcbiAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZXRpbWUuc3BsaXQoXCItXCIpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlUGFydHNbMF07XHJcbiAgbGV0IG1vbnRoID0gZGF0ZVBhcnRzWzFdO1xyXG4gIGxldCBkYXkgPSBkYXRlUGFydHNbMl0uc2xpY2UoMCwgMik7XHJcblxyXG4gIGNvbnN0IG1vbnRocyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcblxyXG4gIG1vbnRoID0gbW9udGhzW21vbnRoIC0gMV07XHJcbiAgZGF5ID0gZGF5LnJlcGxhY2UoL14wKy8sIFwiXCIpO1xyXG5cclxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XHJcbn1cclxuICBcclxuZnVuY3Rpb24gZm9ybWF0VGltZTEyKGRhdGV0aW1lKSB7XHJcbiAgY29uc3QgdGltZVBhcnRzID0gZGF0ZXRpbWUuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiOlwiKTtcclxuICBsZXQgaG91ciA9IHRpbWVQYXJ0c1swXTtcclxuICBjb25zdCBtaW51dGVzID0gdGltZVBhcnRzWzFdO1xyXG4gIGNvbnN0IHN1ZmZpeCA9IHBhcnNlSW50KGhvdXIsIDEwKSA8IDEyID8gXCJBTVwiIDogXCJQTVwiO1xyXG4gIFxyXG4gIGhvdXIgPSBob3VyID09PSBcIjBcIiA/IFwiMTJcIiA6IGhvdXI7XHJcbiAgaG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKSA8IDEzID8gaG91ciA6IGAke3BhcnNlSW50KGhvdXIsIDEwKSAtIDEyfWA7XHJcbiAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlc30gJHtzdWZmaXh9YDtcclxufVxyXG4gIFxyXG5mdW5jdGlvbiBmb3JtYXRUaW1lMjQodGltZSkge1xyXG4gIGNvbnN0IFtub3BlcmlvZCwgcGVyaW9kXSA9IHRpbWUuc3BsaXQoXCIgXCIpO1xyXG4gIGxldCBbaG91cnNdID0gbm9wZXJpb2Quc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBub3BlcmlvZC5zcGxpdChcIjpcIilbMV1cclxuICAgID8gcGFyc2VJbnQobm9wZXJpb2Quc3BsaXQoXCI6XCIpWzFdLCAxMClcclxuICAgIDogMDtcclxuICBcclxuICBpZiAocGVyaW9kID09PSBcIlBNXCIgJiYgaG91cnMgIT09IDEyKSB7XHJcbiAgICBob3VycyArPSAxMjtcclxuICB9IGVsc2UgaWYgKHBlcmlvZCA9PT0gXCJBTVwiICYmIGhvdXJzID09PSAxMikge1xyXG4gICAgaG91cnMgPSAwO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4geyBob3VycywgbWludXRlcyB9O1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGNpdHksIHJlZ2lvbiwgY291bnRyeSkge1xyXG4gIGxldCBsb2NhdGlvbiA9IFwiXCI7XHJcbiAgaWYgKGNpdHkpIHtcclxuICAgIGxvY2F0aW9uICs9IGAke2NpdHl9LCBgO1xyXG4gIH1cclxuICBpZiAocmVnaW9uKSB7XHJcbiAgICBsb2NhdGlvbiArPSBgJHtyZWdpb259LCBgO1xyXG4gICAgfVxyXG4gIGlmIChjb3VudHJ5KSB7XHJcbiAgICBsb2NhdGlvbiArPSBjb3VudHJ5O1xyXG4gIH1cclxuICByZXR1cm4gbG9jYXRpb247XHJcbn1cclxuICBcclxuZnVuY3Rpb24gcGFkWmVyb1RvVGltZSh0aW1lKSB7XHJcbiAgY29uc3QgaG91ciA9IHBhcnNlSW50KHRpbWUuc3BsaXQoXCI6XCIpWzBdLCAxMCk7XHJcbiAgaWYgKGhvdXIgPCAxMCkge1xyXG4gICAgcmV0dXJuIGAwJHt0aW1lfWA7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGlzTmlnaHQodGltZSwgc3VucmlzZSwgc3Vuc2V0KSB7XHJcbiAgY29uc3QgdGltZTI0ID0gZm9ybWF0VGltZTI0KHRpbWUpO1xyXG4gIGNvbnN0IHN1bnJpc2UyNCA9IGZvcm1hdFRpbWUyNChzdW5yaXNlKTtcclxuICBjb25zdCBzdW5zZXQyNCA9IGZvcm1hdFRpbWUyNChzdW5zZXQpO1xyXG4gIFxyXG4gIGNvbnN0IHRpbWVNaW5zID0gdGltZTI0LmhvdXJzICogNjAgKyB0aW1lMjQubWludXRlcztcclxuICBjb25zdCBzdW5yaXNlTWlucyA9IHN1bnJpc2UyNC5ob3VycyAqIDYwICsgc3VucmlzZTI0Lm1pbnV0ZXM7XHJcbiAgY29uc3Qgc3Vuc2V0TWlucyA9IHN1bnNldDI0LmhvdXJzICogNjAgKyBzdW5zZXQyNC5taW51dGVzO1xyXG4gIFxyXG4gIHJldHVybiAhKHRpbWVNaW5zID49IHN1bnJpc2VNaW5zICYmIHRpbWVNaW5zIDw9IHN1bnNldE1pbnMpO1xyXG59XHJcbiAgXHJcbmV4cG9ydCB7IGZvcm1hdERhdGUsIGZvcm1hdFRpbWUxMiwgY3JlYXRlTG9jYXRpb24sIGlzTmlnaHQsIHBhZFplcm9Ub1RpbWUgfTtcclxuICAiLCJpbXBvcnQgT3ZlcmNhc3RJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2VhdGhlci1jbG91ZHkuc3ZnXCI7XHJcbmltcG9ydCBQYXJ0bHlDbG91ZHlJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2VhdGhlci1wYXJ0bHktY2xvdWR5LnN2Z1wiO1xyXG5pbXBvcnQgUGFydGx5Q2xvdWR5TmlnaHRJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2VhdGhlci1uaWdodC1wYXJ0bHktY2xvdWR5LnN2Z1wiO1xyXG5pbXBvcnQgUmFpbkljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLXJhaW55LnN2Z1wiO1xyXG5pbXBvcnQgUG91cmluZ0ljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLXBvdXJpbmcuc3ZnXCI7XHJcbmltcG9ydCBNaXhlZFByZWNpcEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLXNub3d5LXJhaW55LnN2Z1wiO1xyXG5pbXBvcnQgU3VubnlJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2VhdGhlci1zdW5ueS5zdmdcIjtcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3dlYXRoZXItbmlnaHQuc3ZnXCI7XHJcbmltcG9ydCBNaXN0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3dlYXRoZXItZm9nLnN2Z1wiO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLWNsb3VkeS1hbGVydC5zdmdcIjtcclxuaW1wb3J0IFNub3dJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2VhdGhlci1zbm93eS5zdmdcIjtcclxuaW1wb3J0IEhlYXZ5U25vd0ljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLXNub3d5LWhlYXZ5LnN2Z1wiO1xyXG5pbXBvcnQgSGFpbEljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLWhhaWwuc3ZnXCI7XHJcbmltcG9ydCBSYWluVGh1bmRlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy93ZWF0aGVyLWxpZ2h0bmluZy1yYWlueS5zdmdcIjtcclxuXHJcbmltcG9ydCBSYWluQmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9yYWluaW5nX2JhY2tncm91bmQuZ2lmXCI7XHJcbmltcG9ydCBQYXJ0Q2xvdWRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2Nsb3VkeV9iYWNrZ3JvdW5kLmdpZlwiO1xyXG5pbXBvcnQgT3ZlcmNhc3RCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL292ZXJjYXN0X2JhY2tncm91bmQuZ2lmXCI7XHJcbmltcG9ydCBTbm93eUJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvc25vd3lfYmFja2dyb3VuZC5naWZcIjtcclxuaW1wb3J0IERlZmF1bHRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHRfYmFja2dyb3VuZC5naWZcIjtcclxuaW1wb3J0IENsZWFyQmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9jbGVhcl9iYWNrZ3JvdW5kLmdpZlwiO1xyXG5pbXBvcnQgU3VubnlCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3N1bm55X2JhY2tncm91bmQuZ2lmXCI7XHJcblxyXG5jb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xyXG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaV9pY29uXCIpO1xyXG5jb25zdCBkZXNjcmlwdGlvblNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlfZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGxvY2F0aW9uU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaV9sb2NhdGlvblwiKTtcclxuY29uc3QgZGF0ZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlfZGF0ZVwiKTtcclxuY29uc3QgdGltZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlfdGltZVwiKTtcclxuY29uc3QgdGVtcGVyYXR1cmVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pX3RlbXBlcmF0dXJlXCIpO1xyXG5jb25zdCBlcnJvclNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xyXG5jb25zdCBhdHRyaWJ1dGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF0dHJpYnV0aW9uLXRleHRcIik7XHJcblxyXG5mdW5jdGlvbiBzZXRBZXN0aGV0aWMoZGVzY3JpcHRpb24sIGlzTmlnaHQpIHtcclxuICAvLyBTZXQgSWNvbnNcclxuICBzd2l0Y2ggKGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjYXNlIFwiQ2xvdWR5XCI6XHJcbiAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcclxuICAgICAgY3VycmVudEljb24uc3JjID0gT3ZlcmNhc3RJY29uO1xyXG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtPdmVyY2FzdEJhY2tncm91bmR9KWA7XHJcbiAgICAgIGF0dHJpYnV0aW9uVGV4dC5pbm5lclRleHQgPSBcIkJhY2tncm91bmQ6IGFnaWxlZm9vbGhhcmR5am9leVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQYXJ0bHkgY2xvdWR5XCI6XHJcbiAgICAgIGN1cnJlbnRJY29uLnNyYyA9IGlzTmlnaHQgPyBQYXJ0bHlDbG91ZHlOaWdodEljb24gOiBQYXJ0bHlDbG91ZHlJY29uO1xyXG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGlzTmlnaHRcclxuICAgICAgICA/IGB1cmwoJHtDbGVhckJhY2tncm91bmR9KWBcclxuICAgICAgICA6IGB1cmwoJHtQYXJ0Q2xvdWRCYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJCYWNrZ3JvdW5kOiB1L2ttbTYyNVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiOlxyXG4gICAgY2FzZSBcIkxpZ2h0IGRyaXp6bGVcIjpcclxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpblwiOlxyXG4gICAgY2FzZSBcIkxpZ2h0IHJhaW5cIjpcclxuICAgIGNhc2UgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCI6XHJcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpblwiOlxyXG4gICAgY2FzZSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCI6XHJcbiAgICBjYXNlIFwiUmFpblwiOlxyXG4gICAgY2FzZSBcIkZyZWV6aW5nIGRyaXp6bGVcIjpcclxuICAgICAgY3VycmVudEljb24uc3JjID0gUmFpbkljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1JhaW5CYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJCYWNrZ3JvdW5kIGJ5IERheWRyZWFtZXI5NFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJIZWF2eSByYWluIGF0IHRpbWVzXCI6XHJcbiAgICBjYXNlIFwiSGVhdnkgcmFpblwiOlxyXG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCI6XHJcbiAgICBjYXNlIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiOlxyXG4gICAgY2FzZSBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIjpcclxuICAgICAgY3VycmVudEljb24uc3JjID0gUG91cmluZ0ljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1JhaW5CYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJCYWNrZ3JvdW5kIGJ5IERheWRyZWFtZXI5NFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJMaWdodCBzbGVldCBzaG93ZXJzXCI6XHJcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiOlxyXG4gICAgY2FzZSBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiOlxyXG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiOlxyXG4gICAgICBjdXJyZW50SWNvbi5zcmMgPSBNaXhlZFByZWNpcEljb247XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0XCI6XHJcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIjpcclxuICAgIGNhc2UgXCJJY2UgcGVsbGV0c1wiOlxyXG4gICAgY2FzZSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIjpcclxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCI6XHJcbiAgICAgIGN1cnJlbnRJY29uLnNyYyA9IEhhaWxJY29uO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIjpcclxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiOlxyXG4gICAgICBjdXJyZW50SWNvbi5zcmMgPSBSYWluVGh1bmRlckljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1JhaW5CYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJCYWNrZ3JvdW5kIGJ5IERheWRyZWFtZXI5NFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJTdW5ueVwiOlxyXG4gICAgICBjdXJyZW50SWNvbi5zcmMgPSBTdW5ueUljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1N1bm55QmFja2dyb3VuZH0pYDtcclxuICAgICAgYXR0cmlidXRpb25UZXh0LmlubmVyVGV4dCA9IFwiQmFja2dyb3VuZCBieSAxMDQxdXV1XCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkNsZWFyXCI6XHJcbiAgICAgIGN1cnJlbnRJY29uLnNyYyA9IENsZWFySWNvbjtcclxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Q2xlYXJCYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJCYWNrZ3JvdW5kIGJ5IDEwNDF1dXVcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiTWlzdFwiOlxyXG4gICAgY2FzZSBcIkZvZ1wiOlxyXG4gICAgY2FzZSBcIkZyZWV6aW5nIGZvZ1wiOlxyXG4gICAgICBjdXJyZW50SWNvbi5zcmMgPSBNaXN0SWNvbjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIjpcclxuICAgIGNhc2UgXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiOlxyXG4gICAgY2FzZSBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiOlxyXG4gICAgY2FzZSBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCI6XHJcbiAgICBjYXNlIFwiVGh1bmRyeSBvdXRicmVha3MgcG9zc2libGVcIjpcclxuICAgICAgY3VycmVudEljb24uc3JjID0gV2FybmluZ0ljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYWJja2dyb3VuZEltYWdlID0gYHVybCgke092ZXJjYXN0QmFja2dyb3VuZH0pYDtcclxuICAgICAgYXR0cmlidXRpb25UZXh0LmlubmVyVGV4dCA9IFwiQmFja2dyb3VuZDogYWdpbGVmb29saGFyZHlqb2V5XCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93XCI6XHJcbiAgICBjYXNlIFwiTGlnaHQgc25vd1wiOlxyXG4gICAgY2FzZSBcIk1vZGVyYXRlIHNub3dcIjpcclxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIjpcclxuICAgICAgY3VycmVudEljb24uc3JjID0gU25vd0ljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1Nub3d5QmFja2dyb3VuZH0pYDtcclxuICAgICAgYXR0cmlidXRpb25UZXh0LmlubmVyVGV4dCA9IFwiQmFja2dyb3VuZCBieSBSeWFuIEhhaWdodFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJCbG93aW5nIHNub3dcIjpcclxuICAgIGNhc2UgXCJQYXRjaHkgaGVhdnkgc25vd1wiOlxyXG4gICAgY2FzZSBcIkhlYXZ5IHNub3dcIjpcclxuICAgIGNhc2UgXCJCbGl6emFyZFwiOlxyXG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCI6XHJcbiAgICAgIGN1cnJlbnRJY29uLnNyYyA9IEhlYXZ5U25vd0ljb247XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1Nub3d5QmFja2dyb3VuZH0pYDtcclxuICAgICAgYXR0cmlidXRpb25UZXh0LmlubmVyVGV4dCA9IFwiQmFja2dyb3VuZCBieSBSeWFuIEhhaWdodFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGN1cnJlbnRJY29uLnNyYyA9IFwiXCI7XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0RlZmF1bHRCYWNrZ3JvdW5kfSlgO1xyXG4gICAgICBhdHRyaWJ1dGlvblRleHQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZEJsZW5kTW9kZSA9IGlzTmlnaHQgPyBcIm11bHRpcGx5XCIgOiBcIm5vcm1hbFwiO1xyXG4gIGN1cnJlbnRJY29uLmFsdCA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVZpZXcoZGF0YSwgaXNOaWdodCkge1xyXG4gIHNldEFlc3RoZXRpYyhkYXRhLmRlc2NyaXB0aW9uLCBpc05pZ2h0KTtcclxuICBkZXNjcmlwdGlvblNwYW4uaW5uZXJUZXh0ID0gZGF0YS5kZXNjcmlwdGlvbjtcclxuICBsb2NhdGlvblNwYW4uaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbjtcclxuICBkYXRlU3Bhbi5pbm5lclRleHQgPSBkYXRhLmRhdGU7XHJcbiAgdGltZVNwYW4uaW5uZXJUZXh0ID0gZGF0YS50aW1lO1xyXG4gIHRlbXBlcmF0dXJlU3Bhbi5pbm5lclRleHQgPSBkYXRhLnRlbXBlcmF0dXJlO1xyXG4gIGVycm9yU3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dFcnJvcigpIHtcclxuICBlcnJvclNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHVwZGF0ZVZpZXcsIHNob3dFcnJvciB9OyIsImltcG9ydCB7XHJcbiAgZm9ybWF0RGF0ZSxcclxuICBmb3JtYXRUaW1lMTIsXHJcbiAgY3JlYXRlTG9jYXRpb24sXHJcbiAgaXNOaWdodCxcclxuICBwYWRaZXJvVG9UaW1lLFxyXG59IGZyb20gXCIuL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgQVBJX0tFWSA9IFwiNTY3ZDVkNmFlZGY1NDE2NmE2MjIyMjI0MjIzMTQwOFwiO1xyXG5jb25zdCBBUElfQkFTRV9VUkwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XHJcblxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JlY2FzdERhdGEocmF3RGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXNjcmlwdGlvbjogcmF3RGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgbG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uKFxyXG4gICAgICByYXdEYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgIHJhd0RhdGEubG9jYXRpb24ucmVnaW9uLFxyXG4gICAgICByYXdEYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICApLFxyXG4gICAgZGF0ZTogZm9ybWF0RGF0ZShyYXdEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSksXHJcbiAgICB0aW1lOiBmb3JtYXRUaW1lMTIocmF3RGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLFxyXG4gICAgdGVtcGVyYXR1cmU6IGAke01hdGgucm91bmQocmF3RGF0YS5jdXJyZW50LnRlbXBfYyl9wrBDYCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1Bc3Ryb25vbXlEYXRhKHJhd0RhdGEpIHtcclxuICByZXR1cm4gaXNOaWdodChcclxuICAgIHBhZFplcm9Ub1RpbWUoZm9ybWF0VGltZTEyKHJhd0RhdGEubG9jYXRpb24ubG9jYWx0aW1lKSksXHJcbiAgICByYXdEYXRhLmFzdHJvbm9teS5hc3Ryby5zdW5yaXNlLFxyXG4gICAgcmF3RGF0YS5hc3Ryb25vbXkuYXN0cm8uc3Vuc2V0LFxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShyZWdpb24pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7QVBJX0JBU0VfVVJMfS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtyZWdpb259JmRheXM9M2AsXHJcbiAgICB7IG1vZGU6IFwiY29yc1wiIH0sXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsYWNlIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QXN0cm9ub215RGF0YShyZWdpb24pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7QVBJX0JBU0VfVVJMfS9hc3Ryb25vbXkuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7cmVnaW9ufSZkdD1gLFxyXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9LFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGFjZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KHJlZ2lvbikge1xyXG4gIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEocmVnaW9uKTtcclxuICBjb25zdCBjbGVhbkRhdGEgPSB0cmFuc2Zvcm1Gb3JlY2FzdERhdGEocmF3RGF0YSk7XHJcbiAgcmV0dXJuIGNsZWFuRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QXN0cm9ub215KHJlZ2lvbikge1xyXG4gIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRBc3Ryb25vbXlEYXRhKHJlZ2lvbik7XHJcbiAgY29uc3QgY2xlYW5EYXRhID0gdHJhbnNmb3JtQXN0cm9ub215RGF0YShyYXdEYXRhKTtcclxuICByZXR1cm4gY2xlYW5EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRGb3JlY2FzdCwgZ2V0QXN0cm9ub215IH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==