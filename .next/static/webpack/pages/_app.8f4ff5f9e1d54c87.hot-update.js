"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/model.js":
/*!**********************!*\
  !*** ./lib/model.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGLTFModel\": function() { return /* binding */ loadGLTFModel; }\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\nfunction loadGLTFModel(scene, mypath) {\n    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {\n        receiveShadow: true,\n        castShadow: true\n    };\n    var receiveShadow = options.receiveShadow, castShadow = options.castShadow;\n    return new Promise(function(resolve, reject) {\n        var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\n        loader.load(mypath, function(gltf) {\n            var obj = gltf.scene;\n            obj.name = \"jet\";\n            obj.position.y = 0;\n            obj.position.x = 0;\n            obj.receiveShadow = receiveShadow;\n            obj.castShadow = castShadow;\n            scene.add(obj);\n            obj.traverse(function(child) {\n                if (child.isMesh) {\n                    child.castShadow = castShadow;\n                    child.receiveShadow = receiveShadow;\n                }\n            });\n            resolve(obj);\n        }, undefined, function(error) {\n            reject(error);\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFFMUQsU0FBU0MsYUFBYSxDQUN6QkMsS0FBSyxFQUNMQyxNQUFNLEVBR0g7UUFGSEMsT0FBTyxHQUFQQSwrQ0FFQyxrQkFGUztRQUNOQyxhQUFhLEVBQUUsSUFBSTtRQUFFQyxVQUFVLEVBQUUsSUFBSTtLQUN4QztJQUNELElBQVFELGFBQWEsR0FBZ0JELE9BQU8sQ0FBcENDLGFBQWEsRUFBRUMsVUFBVSxHQUFJRixPQUFPLENBQXJCRSxVQUFVO0lBQ2pDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3BDLElBQU1DLE1BQU0sR0FBRyxJQUFJViw2RUFBVSxFQUFFO1FBRS9CVSxNQUFNLENBQUNDLElBQUksQ0FDUFIsTUFBTSxFQUNOUyxTQUFBQSxJQUFJLEVBQUk7WUFDSixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ1YsS0FBSztZQUN0QlcsR0FBRyxDQUFDQyxJQUFJLEdBQUcsS0FBSztZQUNoQkQsR0FBRyxDQUFDRSxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1lBQ2xCSCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUM7WUFDbEJKLEdBQUcsQ0FBQ1IsYUFBYSxHQUFHQSxhQUFhO1lBQ2pDUSxHQUFHLENBQUNQLFVBQVUsR0FBR0EsVUFBVTtZQUMzQkosS0FBSyxDQUFDZ0IsR0FBRyxDQUFDTCxHQUFHLENBQUM7WUFDZEEsR0FBRyxDQUFDTSxRQUFRLENBQUMsU0FBU0MsS0FBSyxFQUFDO2dCQUN4QixJQUFHQSxLQUFLLENBQUNDLE1BQU0sRUFBQztvQkFDWkQsS0FBSyxDQUFDZCxVQUFVLEdBQUdBLFVBQVU7b0JBQzdCYyxLQUFLLENBQUNmLGFBQWEsR0FBR0EsYUFBYTtpQkFDdEM7YUFDSixDQUFDO1lBRUZHLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO1NBQ2YsRUFDRFMsU0FBUyxFQUNULFNBQVNDLEtBQUssRUFBQztZQUNYZCxNQUFNLENBQUNjLEtBQUssQ0FBQztTQUNoQixDQUNKO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9tb2RlbC5qcz8wYTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdMVEZMb2FkZXJ9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR0xURk1vZGVsKFxuICAgIHNjZW5lLFxuICAgIG15cGF0aCxcbiAgICBvcHRpb25zID0ge1xuICAgICAgICByZWNlaXZlU2hhZG93OiB0cnVlLCBjYXN0U2hhZG93OiB0cnVlXG4gICAgfSkge1xuICAgIGNvbnN0IHsgcmVjZWl2ZVNoYWRvdywgY2FzdFNoYWRvd30gPSBvcHRpb25zXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuXG4gICAgICAgIGxvYWRlci5sb2FkKFxuICAgICAgICAgICAgbXlwYXRoLFxuICAgICAgICAgICAgZ2x0ZiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gZ2x0Zi5zY2VuZVxuICAgICAgICAgICAgICAgIG9iai5uYW1lID0gJ2pldCdcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24ueSA9IDBcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3dcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGQob2JqKVxuICAgICAgICAgICAgICAgIG9iai50cmF2ZXJzZShmdW5jdGlvbihjaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkLmlzTWVzaCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKG9iailcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcbn0iXSwibmFtZXMiOlsiR0xURkxvYWRlciIsImxvYWRHTFRGTW9kZWwiLCJzY2VuZSIsIm15cGF0aCIsIm9wdGlvbnMiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJvYmoiLCJuYW1lIiwicG9zaXRpb24iLCJ5IiwieCIsImFkZCIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/model.js\n");

/***/ })

});