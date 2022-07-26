/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/armalite_rifle-webfont.woff */ "./src/assets/armalite_rifle-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'ArmaliteRifle';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: 'ArmaliteRifle', 'sans-serif';\n  background-color: #e9eef4;\n}\n\n.place-ships {\n  position: absolute;\n  height: 100%;\n  width: 100%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  display: flex;\n}\n\n.ship:hover {\n  cursor: move;\n} \n\n.place-cell {\n  z-index: 1;\n  height: 3rem;\n  width: 3rem;\n  background-color: white;\n  border: 3px solid #60a4a6;\n}\n\n\n.flex {\n  display: flex;\n}\n\n\n/* header */\n.image-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 12rem;\n}\n\n.faq-container {\n  position: absolute;\n  right: 0;\n  padding: 2rem;\n  text-decoration: underline;\n  font-size: 1.25rem;\n}\n\n.faq-container:hover {\n  cursor: pointer;\n}\n\n.popup {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n}\n.popup-overlay {\n\theight: 100vh;\n\twidth: 100%;\n\tposition: absolute;\n}\n.main-popup {\n\tposition: absolute;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100%;\n\tz-index: 1;\n\tbackground: #e9eef4;\n\tpadding: 30px 20px;\n\tline-height: 1rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransform: translateX(-100%);\n}\n.close-btn {\n\tpadding: 10px;\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tfont-size: 2rem;\n\tcursor: pointer;\n\ttransition: .5s ease all;\n}\n\n.popup-content {\n  text-align: center;\n}\n\n.popup-content h1 {\n  font-size: 3rem;\n}\n\n\n.popup-content p {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n@keyframes slide-in {\n\t0% {\n\t\ttransform: translateX(-100%);\n\t}\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n@keyframes slide-out {\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n\t100% {\n\t\ttransform: translateX(-100%);\n\t}\n}\n\n.title-icon {\n  height: 100%;\n}\n\n/* boards */\n.main-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n}\n\n.board-name-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-name-container h1 {\n  text-decoration: underline;\n  font-size: 2rem;\n}\n\n.your-name {\n  color: green;\n}\n\n.computer-name {\n  color: red;\n}\n\n.board-container {\n  position: relative;\n  border: 4px solid #a9a9a9;\n  margin: 5rem;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.start-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(2px);\n}\n\n.btn {\n  border: none;\n  padding: 0.6rem;\n  border-radius: 1rem;\n  background-color: lightblue\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n.start-btn {\n  font-size: 2rem;\n  padding: 1rem;\n}\n\n\n.place-container {\n  position: absolute;\n  bottom: 0;\n}\n\n.cell {\n  height: 3rem;\n  width: 3rem;\n  border: 1px solid #a9a9a9;\n  background-color: white;\n}\n\n.ship {\n  background-color: #60a4a6;\n}\n\n.cell-hover:hover {\n  background-color: #ff000090;\n  cursor: pointer;\n}\n\n.cell-missed{\n  height: 0.7rem;\n  width: 0.7rem;\n  background-color: #808080;\n  border-radius: 50%;\n  margin: 18px auto;\n}\n\n.cell-hit {\n  height: 2rem;\n  width: 2rem;\n  padding: .5rem;\n  border: solid 0.2em #c00;\n  border-radius: 50%;\n  align-items: center;\n  margin: 8px auto;\n  background-color: #c00;\n  background-clip: content-box;\n}\n\n.cell-hit-bg {\n  background-color: #ffcccb;\n}\n\n.cell-sunk {\n  background-color: #d3d3d390;\n}\n\n.cell-blur {\n  backdrop-filter: blur(10px);\n}\n\n.win-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(10px);\n\n}\n\n.win-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid black;\n  border-radius: 10px;\n  height: 30%;\n  width: 45%;\n  background-color:#a9a9a9;\n}\n\n.play-again {\n  margin: 2rem;\n  font-size: 2.5rem;\n}\n\n.reserved {\n  background-color: #ff000085;\n}\n\n.hide {\n  display: none;\n}\n\n/* footer */\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  text-align: center;\n}\n\n.footer-contents span a{\n  color: black;\n  text-decoration: none;\n}\n\n.footer-contents span:nth-child(2) {\n  padding: 0 2rem;\n}\n\n@media only screen and (max-width: 1300px) {\n  .place-cell {\n    z-index: 1;\n    height: 2rem;\n    width: 2rem;\n    background-color: white;\n    border: 3px solid #60a4a6;\n  }\n  \n  /* header */\n  .image-container {\n    height: 8rem;\n  }\n  \n  .faq-container {\n    font-size: 1rem;\n  }\n\n  .close-btn {\n    font-size: 1.25rem;\n  }\n  \n  .popup-content h1 {\n    font-size: 2.5rem;\n  }\n\n  .popup-content p {\n    font-size: 1rem;\n    line-height: 2rem;\n  }\n  \n  /* boards */\n  .board-name-container h1 {\n    text-decoration: underline;\n    font-size: 1.5rem;\n  }\n  \n  .start-btn {\n    font-size: 1.5rem;\n  }\n  \n  \n  .cell {\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  .cell-missed{\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 11px auto;\n  }\n  \n  .cell-hit {\n    height: 1.25rem;\n    width: 1.25rem;\n    padding: .3rem;\n    margin: 6px auto;\n  }\n  \n  .win-message h1{\n    font-size: 1.5rem;\n  }\n  \n  .play-again {\n    margin: 1.75rem;\n    font-size: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .place-ships {\n    display: none;\n  }\n\n  /* header */\n  .image-container {\n    height: 6rem;\n    margin-left: 3rem;\n  }\n  \n  .faq-container {\n    position: relative;\n    right: 0;\n    margin: 0;\n    font-size: 0.75rem;\n  }\n\n  .close-btn {\n    font-size: 1rem;\n  }\n  \n  \n  .popup-content h1 {\n    font-size: 2.25rem;\n  }\n  \n  .popup-content p {\n    font-size: 1rem;\n    line-height: 1.75rem;\n  }\n  \n  /* boards */\n  .main-section {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .board-name-container h1 {\n    text-decoration: underline;\n    font-size: 1.25rem;\n  }\n  \n  .btn {\n    padding: 0.4rem;\n  }\n  \n  .start-btn {\n    font-size: 1.5rem;\n    padding: 0.9rem;\n  }\n  \n  .cell {\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  .cell-missed{\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 11px auto;\n  }\n  \n  .cell-hit {\n    height: 1.25rem;\n    width: 1.25rem;\n    padding: .3rem;\n    margin: 6px auto;\n  }\n\n  .win-message h1{\n    font-size: 1.3rem;\n  }\n  \n  .play-again {\n    margin: 1.5rem;\n    font-size: 1.2rem;\n  }\n  \n  /* footer */\n  .footer {\n    position: relative;\n  }\n  \n  .footer-contents span {\n    font-size: 0.75rem\n  }\n  \n  .footer-contents span:nth-child(2) {\n    padding: 0 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'ArmaliteRifle';\n  src: url('../assets/armalite_rifle-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: 'ArmaliteRifle', 'sans-serif';\n  background-color: #e9eef4;\n}\n\n.place-ships {\n  position: absolute;\n  height: 100%;\n  width: 100%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  display: flex;\n}\n\n.ship:hover {\n  cursor: move;\n} \n\n.place-cell {\n  z-index: 1;\n  height: 3rem;\n  width: 3rem;\n  background-color: white;\n  border: 3px solid #60a4a6;\n}\n\n\n.flex {\n  display: flex;\n}\n\n\n/* header */\n.image-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 12rem;\n}\n\n.faq-container {\n  position: absolute;\n  right: 0;\n  padding: 2rem;\n  text-decoration: underline;\n  font-size: 1.25rem;\n}\n\n.faq-container:hover {\n  cursor: pointer;\n}\n\n.popup {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n}\n.popup-overlay {\n\theight: 100vh;\n\twidth: 100%;\n\tposition: absolute;\n}\n.main-popup {\n\tposition: absolute;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 100%;\n\tz-index: 1;\n\tbackground: #e9eef4;\n\tpadding: 30px 20px;\n\tline-height: 1rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransform: translateX(-100%);\n}\n.close-btn {\n\tpadding: 10px;\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tfont-size: 2rem;\n\tcursor: pointer;\n\ttransition: .5s ease all;\n}\n\n.popup-content {\n  text-align: center;\n}\n\n.popup-content h1 {\n  font-size: 3rem;\n}\n\n\n.popup-content p {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n@keyframes slide-in {\n\t0% {\n\t\ttransform: translateX(-100%);\n\t}\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n@keyframes slide-out {\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n\t100% {\n\t\ttransform: translateX(-100%);\n\t}\n}\n\n.title-icon {\n  height: 100%;\n}\n\n/* boards */\n.main-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n}\n\n.board-name-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-name-container h1 {\n  text-decoration: underline;\n  font-size: 2rem;\n}\n\n.your-name {\n  color: green;\n}\n\n.computer-name {\n  color: red;\n}\n\n.board-container {\n  position: relative;\n  border: 4px solid #a9a9a9;\n  margin: 5rem;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.start-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(2px);\n}\n\n.btn {\n  border: none;\n  padding: 0.6rem;\n  border-radius: 1rem;\n  background-color: lightblue\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n.start-btn {\n  font-size: 2rem;\n  padding: 1rem;\n}\n\n\n.place-container {\n  position: absolute;\n  bottom: 0;\n}\n\n.cell {\n  height: 3rem;\n  width: 3rem;\n  border: 1px solid #a9a9a9;\n  background-color: white;\n}\n\n.ship {\n  background-color: #60a4a6;\n}\n\n.cell-hover:hover {\n  background-color: #ff000090;\n  cursor: pointer;\n}\n\n.cell-missed{\n  height: 0.7rem;\n  width: 0.7rem;\n  background-color: #808080;\n  border-radius: 50%;\n  margin: 18px auto;\n}\n\n.cell-hit {\n  height: 2rem;\n  width: 2rem;\n  padding: .5rem;\n  border: solid 0.2em #c00;\n  border-radius: 50%;\n  align-items: center;\n  margin: 8px auto;\n  background-color: #c00;\n  background-clip: content-box;\n}\n\n.cell-hit-bg {\n  background-color: #ffcccb;\n}\n\n.cell-sunk {\n  background-color: #d3d3d390;\n}\n\n.cell-blur {\n  backdrop-filter: blur(10px);\n}\n\n.win-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(10px);\n\n}\n\n.win-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid black;\n  border-radius: 10px;\n  height: 30%;\n  width: 45%;\n  background-color:#a9a9a9;\n}\n\n.play-again {\n  margin: 2rem;\n  font-size: 2.5rem;\n}\n\n.reserved {\n  background-color: #ff000085;\n}\n\n.hide {\n  display: none;\n}\n\n/* footer */\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  text-align: center;\n}\n\n.footer-contents span a{\n  color: black;\n  text-decoration: none;\n}\n\n.footer-contents span:nth-child(2) {\n  padding: 0 2rem;\n}\n\n@media only screen and (max-width: 1300px) {\n  .place-cell {\n    z-index: 1;\n    height: 2rem;\n    width: 2rem;\n    background-color: white;\n    border: 3px solid #60a4a6;\n  }\n  \n  /* header */\n  .image-container {\n    height: 8rem;\n  }\n  \n  .faq-container {\n    font-size: 1rem;\n  }\n\n  .close-btn {\n    font-size: 1.25rem;\n  }\n  \n  .popup-content h1 {\n    font-size: 2.5rem;\n  }\n\n  .popup-content p {\n    font-size: 1rem;\n    line-height: 2rem;\n  }\n  \n  /* boards */\n  .board-name-container h1 {\n    text-decoration: underline;\n    font-size: 1.5rem;\n  }\n  \n  .start-btn {\n    font-size: 1.5rem;\n  }\n  \n  \n  .cell {\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  .cell-missed{\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 11px auto;\n  }\n  \n  .cell-hit {\n    height: 1.25rem;\n    width: 1.25rem;\n    padding: .3rem;\n    margin: 6px auto;\n  }\n  \n  .win-message h1{\n    font-size: 1.5rem;\n  }\n  \n  .play-again {\n    margin: 1.75rem;\n    font-size: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .place-ships {\n    display: none;\n  }\n\n  /* header */\n  .image-container {\n    height: 6rem;\n    margin-left: 3rem;\n  }\n  \n  .faq-container {\n    position: relative;\n    right: 0;\n    margin: 0;\n    font-size: 0.75rem;\n  }\n\n  .close-btn {\n    font-size: 1rem;\n  }\n  \n  \n  .popup-content h1 {\n    font-size: 2.25rem;\n  }\n  \n  .popup-content p {\n    font-size: 1rem;\n    line-height: 1.75rem;\n  }\n  \n  /* boards */\n  .main-section {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .board-name-container h1 {\n    text-decoration: underline;\n    font-size: 1.25rem;\n  }\n  \n  .btn {\n    padding: 0.4rem;\n  }\n  \n  .start-btn {\n    font-size: 1.5rem;\n    padding: 0.9rem;\n  }\n  \n  .cell {\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  .cell-missed{\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 11px auto;\n  }\n  \n  .cell-hit {\n    height: 1.25rem;\n    width: 1.25rem;\n    padding: .3rem;\n    margin: 6px auto;\n  }\n\n  .win-message h1{\n    font-size: 1.3rem;\n  }\n  \n  .play-again {\n    margin: 1.5rem;\n    font-size: 1.2rem;\n  }\n  \n  /* footer */\n  .footer {\n    position: relative;\n  }\n  \n  .footer-contents span {\n    font-size: 0.75rem\n  }\n  \n  .footer-contents span:nth-child(2) {\n    padding: 0 0.5rem;\n  }\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/scripts/DOM.js":
/*!****************************!*\
  !*** ./src/scripts/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");



let player;
let computer;
let playerBoard;
let computerBoard;
let shipRendered = 5;

function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}

function clearShipFactory() {
  const shipFactory = document.querySelector('.ship-factory');
  const ship = document.querySelector('.ship');
  const placeCells = document.querySelectorAll('.place-cell');
  placeCells.forEach((cell) => {
    ship.removeChild(cell);
  });
  shipFactory.removeChild(ship);
}

function clearShips(board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell.ship) {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.remove('ship');
      }
    });
  });
}

function createDragShips(length) {
  const shipFactory = document.querySelector('.ship-factory');
  const shipDiv = document.createElement('div');

  shipDiv.classList.add('ship');
  shipDiv.setAttribute('data-length', length);
  shipDiv.setAttribute('draggable', true);
  shipFactory.appendChild(shipDiv);

  for (let i = 0; i < length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('place-cell');
    shipDiv.appendChild(cell);
  }
}

function addShipRotate() {
  const placeShip = document.querySelector('.ship');
  placeShip.addEventListener('click', () => {
    if (placeShip.classList.contains('column')) {
      placeShip.style.flexDirection = 'row';
      placeShip.classList.toggle('column');
    } else {
      placeShip.style.flexDirection = 'column';
      placeShip.classList.toggle('column');
    }
  });
}

function resetBoard(board) {
  clearShips(board);
  board.createBoard();
  clearShipFactory();
  createDragShips(5);
  addShipRotate();
  shipRendered = 5;

  const startBtn = document.getElementById('startBtn');
  startBtn.classList.add('hide');
}

function showStartBtn() {
  const startBtn = document.getElementById('startBtn');
  startBtn.classList.remove('hide');
}

function renderRandomFleet(board) {
  resetBoard(board);
  board.randomFleet();

  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell.ship) {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.add('ship');
      }
    });
  });

  showStartBtn();
}

function removeHighlight() {
  playerBoard.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 'reserved') {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.remove('reserved');
      }
    });
  });
}

function hideRandomReset() {
  const mainContainer = document.getElementById('playerContainer');
  const placeContainer = document.getElementById('placeContainer');
  mainContainer.removeChild(placeContainer);
}

function activateComputerBoard() {
  computerBoard.randomFleet();
  const startContainer = document.getElementById('startContainer');
  const boardName = document.getElementById('computerBoard');
  boardName.removeChild(startContainer);
  if (shipRendered === 5) {
    hideRandomReset();
  }
}

function hideShipFactory() {
  const factContainer = document.querySelector('.place-ships');
  if (!factContainer.classList.contains('hide'))
    factContainer.classList.toggle('hide');
}

function showShipFactory() {
  const factContainer = document.querySelector('.place-ships');
  if (factContainer.classList.contains('hide'))
    factContainer.classList.toggle('hide');
}

function addBtnListener() {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', () => {
    renderRandomFleet(playerBoard);
    hideShipFactory();
  });

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    resetBoard(playerBoard);
    showShipFactory();
  });

  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', () => {
    activateComputerBoard(computerBoard);
  });
}

function updateBoard(boardName, board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      const selectedCell = document.querySelector(
        `#${boardName} [data-x="${x}"][data-y ="${y}"]`,
      );
      if (cell.ship) {
        if (
          cell.ship.shipBody[cell.shipCount] === 'hit' &&
          !selectedCell.classList.contains('marked')
        ) {
          const hitDiv = document.createElement('div');
          hitDiv.classList.add('cell-hit');
          selectedCell.appendChild(hitDiv);
          selectedCell.classList.remove('cell-hover');
          selectedCell.classList.add('cell-hit-bg');
          selectedCell.classList.add('marked');
        }
      } else if (
        cell === 'miss' &&
        !selectedCell.classList.contains('marked')
      ) {
        const missDiv = document.createElement('div');
        missDiv.classList.add('cell-missed');
        selectedCell.appendChild(missDiv);
        selectedCell.classList.remove('cell-hover');
        selectedCell.classList.add('marked');
      }
    });
  });
}

function displayWinner(winner) {
  const msgContainer = document.getElementById('winContainer');
  const message = document.getElementById('message');
  const playAgain = document.getElementById('playAgain');
  playAgain.addEventListener('click', () => {
    window.location.reload();
  });
  if (winner === 'player') {
    message.textContent = 'You have destroyed enemy fleet!';
  } else {
    message.textContent = 'Your fleet has been destroyed!';
  }
  msgContainer.classList.toggle('hide');
}

async function attackEvent(cell) {
  const x = cell.getAttribute('data-x');
  const y = cell.getAttribute('data-y');
  player.attack(computer, computerBoard, x, y);
  await delay(150);

  updateBoard('computerBoard', computerBoard);
  cell.style.pointerEvents = 'none';
  if (computerBoard.allShipSunk(computerBoard.board)) {
    displayWinner('player');
  }
  while (computer.isTurn) {
    await delay(150);
    computer.randomAttack(player, playerBoard);
    updateBoard('playerBoard', playerBoard);
    if (playerBoard.allShipSunk(playerBoard.board)) {
      displayWinner('computer');
    }
  }
}

function renderShips(board, l) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell.ship) {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.add('ship');
      }
    });
  });
  clearShipFactory();
  if (l > 2 && shipRendered === 3) {
    createDragShips(l);
    addShipRotate();
  } else if (l > 2) {
    createDragShips(l - 1);
    addShipRotate();
  } else {
    showStartBtn();
    hideRandomReset();
  }
}

function dropShip(e) {
  const ship = document.querySelector('.ship');
  let length = ship.getAttribute('data-length');
  length = parseInt(length, 8);

  let x = e.getAttribute('data-x');
  x = parseInt(x, 10);

  let y = e.getAttribute('data-y');
  y = parseInt(y, 10);

  let dir;
  if (ship.classList.contains('column')) {
    dir = 'vertical';
  } else {
    dir = 'horizontal';
  }

  playerBoard.placeShip(length, dir, x, y);

  if (playerBoard.board[x][y] !== 0 && playerBoard.board[x][y] !== 'reserved') {
    renderShips(playerBoard, length);
    shipRendered -= 1;
  }
}

function initializeBoard(board) {
  const boardClass = document.querySelector(`#${board}`);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', i);
      cell.setAttribute('data-y', j);
      if (board === 'computerBoard') {
        cell.classList.add('cell-hover');

        cell.addEventListener('click', (e) => {
          attackEvent(e.target);
        });
      } else if (board === 'playerBoard') {
        boardClass.classList.add('cell-blur');
        cell.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          dropShip(e.target);
          removeHighlight();
        });
      }
      boardClass.appendChild(cell);
    }
  }
}

function highlightReserved(board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 'reserved') {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.add('reserved');
      }
    });
  });
}

function dragShips() {
  const draggables = document.querySelectorAll('.ship-factory');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      highlightReserved(playerBoard);
    });

    draggable.addEventListener('dragend', () => {
      removeHighlight();
    });
  });
}

function activateFaq() {
  const openBtn = document.querySelector('.faq-container');
  const closeBtn = document.querySelector('.close-btn');
  const popup = document.querySelector('.popup');
  const mainPopup = document.querySelector('.main-popup');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    mainPopup.style.cssText =
      'animation:slide-in .5s ease; animation-fill-mode: forwards;';
  });

  closeBtn.addEventListener('click', () => {
    mainPopup.style.cssText =
      'animation:slide-out .5s ease; animation-fill-mode: forwards;';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });

  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.popup-overlay')) {
      mainPopup.style.cssText =
        'animation:slide-out .5s ease; animation-fill-mode: forwards;';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }
  });
}

function init() {
  player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('You');
  computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('Computer');

  playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  computer.swapTurn(player); // start off the game with player turn
  initializeBoard('playerBoard');
  initializeBoard('computerBoard');
  activateFaq();
  dragShips();
  createDragShips(5);
  addBtnListener();
  addShipRotate();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


const GameBoard = () => {
  const board = [];
  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push(0);
      }
    }
  };

  const reserveTiles = (x, y) => {
    function cell(n1, n2) {
      if (x + n1 > 9 || x + n1 < 0) return;
      if (board[x + n1][y + n2] === 0) board[x + n1][y + n2] = 'reserved';
    }
    function reserveCell(row) {
      cell(row, -1);
      cell(row, 0);
      cell(row, 1);
    }
    reserveCell(-1);
    reserveCell(0);
    reserveCell(1);
  };

  const placeShip = (length, direction, x, y) => {
    if (board[x][y]) return false;
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    if (direction === 'horizontal') {
      if (y + ship.length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (board[x][y + i] === 'reserved') return false;
      }
      let shipCount = 0;
      for (let i = y; i < y + ship.length; i++) {
        board[x].splice(i, 1, { ship, shipCount });
        reserveTiles(x, y + shipCount);
        shipCount += 1;
      }
    }
    if (direction === 'vertical') {
      if (x + ship.length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (board[x + i][y] === 'reserved') return false;
      }
      let shipCount = 0;
      for (let i = x; i < x + ship.length; i++) {
        board[i].splice(y, 1, { ship, shipCount });
        reserveTiles(x + shipCount, y);
        shipCount += 1;
      }
    }
  };

  const recieveAttack = (x, y) => {
    if (board[x][y] === 'miss' || board[x][y] === 'hit') return false;
    // split this and mark reserved coordinate as a special miss
    if (!board[x][y] || board[x][y] === 'reserved') {
      board[x][y] = 'miss';
    } else {
      board[x][y].ship.hit(board[x][y].shipCount);
    }
  };

  const allShipSunk = (arrBoard) => {
    let shipsNotSunk = false;
    arrBoard.forEach((arr) => {
      arr.forEach((coordinate) => {
        if (
          coordinate === 0 ||
          coordinate === 'miss' ||
          coordinate === 'hit' ||
          coordinate === 'reserved'
        )
          return;
        if (coordinate.ship.isSunk() === false) shipsNotSunk = true;
      });
    });
    return !shipsNotSunk;
  };

  const randomShip = (l) => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = 'horizontal';
      if (placeShip(l, dir, x, y) === false) return false;
    }

    if (dir === 1) {
      dir = 'vertical';
      if (placeShip(l, dir, x, y) === false) return false;
    }
  };

  const randomFleet = () => {
    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 2; ) {
        if (randomShip(i) === false) continue;
        if (i !== 3) break; // only the length of 3 ship will loop twice
        j++;
      }
    }
  };

  createBoard();
  return {
    board,
    createBoard,
    placeShip,
    recieveAttack,
    allShipSunk,
    randomFleet,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (n) => {
  const name = n;
  let turn = false;

  const swapTurn = (enemy) => {
    turn = false;
    enemy.isTurn = true;
  };

  const attack = (enemyPlayer, enemyBoard, x, y) => {
    if (turn) {
      enemyBoard.recieveAttack(x, y);
      if (enemyBoard.board[x][y] === 'miss') {
        swapTurn(enemyPlayer);
      }
    }
  };

  const attacksMade = [{}];

  const randomAttack = (enemyPlayer, enemyBoard) => {
    if (!turn) return false;
    const coordinates = { x: undefined, y: undefined };
    let x = 0;
    while (x < 100) {
      coordinates.x = Math.floor(Math.random() * 10);
      coordinates.y = Math.floor(Math.random() * 10);
      if (
        !attacksMade.some(
          (attacks) =>
            attacks.x === coordinates.x && attacks.y === coordinates.y,
        )
      ) {
        attacksMade.push(coordinates);
        attack(enemyPlayer, enemyBoard, coordinates.x, coordinates.y);
        break;
      }
      x++;
    }
  };

  return {
    name,
    get isTurn() {
      return turn;
    },
    set isTurn(value) {
      turn = value;
    },
    swapTurn,
    attack,
    attacksMade,
    randomAttack,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (l) => {
  const length = l;

  const shipBody = [...new Array(length).keys()];
  let hitCount = 0;

  const hit = (position) => {
    if (shipBody[position] === 'hit') return false;
    shipBody.splice(position, 1, 'hit');
    hitCount += 1;
  };

  const isSunk = () => {
    let sunk = false;
    if (shipBody.length === hitCount) sunk = true;
    return sunk;
  };

  return {
    length,
    shipBody,
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/assets/armalite_rifle-webfont.woff":
/*!************************************************!*\
  !*** ./src/assets/armalite_rifle-webfont.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46239646087ea9f4b947.woff";

/***/ }),

/***/ "./src/assets/title.png":
/*!******************************!*\
  !*** ./src/assets/title.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b90906911573c5bd78c9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_title_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/title.png */ "./src/assets/title.png");
/* harmony import */ var _scripts_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/DOM */ "./src/scripts/DOM.js");




const titleImage = document.querySelector('.title-icon');

titleImage.src = _assets_title_png__WEBPACK_IMPORTED_MODULE_1__;

(0,_scripts_DOM__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map