"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opactiy: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: \"variants\",\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            \" \",\n                            title,\n                            \" = NAME NAME\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/layouts/article.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/layouts/article.js\",\n                    lineNumber: 16,\n                    columnNumber: 25\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/layouts/article.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/layouts/article.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW9DO0FBQ1I7QUFDZ0I7QUFFNUMsSUFBTUcsUUFBUSxHQUFHO0lBQ2JDLE1BQU0sRUFBRTtRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUMsQ0FBQztRQUFFQyxDQUFDLEVBQUMsRUFBRTtLQUFDO0lBQy9CQyxLQUFLLEVBQUU7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUgsQ0FBQyxFQUFDLENBQUM7UUFBRUMsQ0FBQyxFQUFDLENBQUM7S0FBQztJQUM3QkcsSUFBSSxFQUFFO1FBQUNMLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBQyxDQUFDO1FBQUVDLENBQUMsRUFBQyxFQUFFO0tBQUM7Q0FDaEM7QUFFRCxJQUFNSSxNQUFNLEdBQUc7UUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5QkFDNUIsOERBQUNiLHlEQUFjO1FBQ1hlLE9BQU8sRUFBQyxRQUFRO1FBQUNDLE9BQU8sRUFBQyxPQUFPO1FBQUNOLElBQUksRUFBQyxNQUFNO1FBQUNQLFFBQVEsRUFBRSxVQUFVO1FBQUVjLFVBQVUsRUFBRTtZQUFDQyxRQUFRLEVBQUMsR0FBRztZQUFFQyxJQUFJLEVBQUMsV0FBVztTQUFDO1FBQUVDLEtBQUssRUFBRTtZQUFDQyxRQUFRLEVBQUUsVUFBVTtTQUFFO2tCQUUvSTs7Z0JBQ0tSLEtBQUssa0JBQU0sOERBQUNaLGtEQUFJOzhCQUNiLDRFQUFDWSxPQUFLOzs0QkFBQyxHQUFDOzRCQUFDQSxLQUFLOzRCQUFDLGNBQVk7Ozs7Ozs2QkFBUTs7Ozs7eUJBQ2hDO2dCQUNORCxRQUFROzhCQUNULDhEQUFDVixxREFBYTs7Ozt5QkFBRzs7d0JBQ2xCOzs7OzthQUNVO0NBRXBCO0FBYktTLEtBQUFBLE1BQU07QUFlWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gJy4uL2dyaWQtaXRlbSdcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7b3BhY2l0eTogMCwgeDowLCB5OjIwfSxcbiAgICBlbnRlcjoge29wYWN0aXk6IDEsIHg6MCwgeTowfSxcbiAgICBleGl0OiB7b3BhY2l0eTogMCwgeDowLCB5OjIwfVxufVxuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJlbnRlclwiIGV4aXQ9XCJleGl0XCIgdmFyaWFudHM9e1widmFyaWFudHNcIn0gdHJhbnNpdGlvbj17e2R1cmF0aW9uOjAuNCwgdHlwZTonZWFzZUluT3V0J319IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgID5cbiAgICAgICAgPD4gXG4gICAgICAgICAgICB7dGl0bGUgJiYgKCA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+IHt0aXRsZX0gPSBOQU1FIE5BTUU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPil9XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8R3JpZEl0ZW1TdHlsZSAvPlxuICAgICAgICA8Lz5cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwiR3JpZEl0ZW1TdHlsZSIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsIngiLCJ5IiwiZW50ZXIiLCJvcGFjdGl5IiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ })

});