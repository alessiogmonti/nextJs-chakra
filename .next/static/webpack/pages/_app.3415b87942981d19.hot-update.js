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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGLTFModel\": function() { return /* binding */ loadGLTFModel; }\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\nfunction loadGLTFModel(scene, mypath) {\n    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {\n        receiveShadow: true,\n        castShadow: true\n    }, material = arguments.length > 3 ? arguments[3] : void 0;\n    var receiveShadow = options.receiveShadow, castShadow = options.castShadow;\n    return new Promise(function(resolve, reject) {\n        var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\n        loader.load(mypath, function(gltf) {\n            var obj = gltf.scene;\n            obj.name = \"jet\";\n            obj.position.y = 0;\n            obj.position.x = 0;\n            obj.receiveShadow = receiveShadow;\n            obj.castShadow = castShadow;\n            obj.scale = [\n                0.1,\n                0.1,\n                0.1\n            ];\n            scene.add(obj);\n            obj.traverse(function(child) {\n                if (child.isMesh) {\n                    child.castShadow = castShadow;\n                    child.receiveShadow = receiveShadow;\n                    child.material = material;\n                    child.scale = 0.1;\n                }\n            });\n            resolve(obj);\n        }, undefined, function(error) {\n            reject(error);\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFFMUQsU0FBU0MsYUFBYSxDQUN6QkMsS0FBSyxFQUNMQyxNQUFNLEVBS1I7UUFKRUMsT0FBTyxHQUFQQSwrQ0FFQyxrQkFGUztRQUNOQyxhQUFhLEVBQUUsSUFBSTtRQUFFQyxVQUFVLEVBQUUsSUFBSTtLQUN4QyxFQUNEQyxRQUFRO0lBRVIsSUFBUUYsYUFBYSxHQUFnQkQsT0FBTyxDQUFwQ0MsYUFBYSxFQUFFQyxVQUFVLEdBQUlGLE9BQU8sQ0FBckJFLFVBQVU7SUFDakMsT0FBTyxJQUFJRSxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDcEMsSUFBTUMsTUFBTSxHQUFHLElBQUlYLDZFQUFVLEVBQUU7UUFFL0JXLE1BQU0sQ0FBQ0MsSUFBSSxDQUNQVCxNQUFNLEVBQ05VLFNBQUFBLElBQUksRUFBSTtZQUNKLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDWCxLQUFLO1lBQ3RCWSxHQUFHLENBQUNDLElBQUksR0FBRyxLQUFLO1lBQ2hCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7WUFDbEJILEdBQUcsQ0FBQ0UsUUFBUSxDQUFDRSxDQUFDLEdBQUcsQ0FBQztZQUNsQkosR0FBRyxDQUFDVCxhQUFhLEdBQUdBLGFBQWE7WUFDakNTLEdBQUcsQ0FBQ1IsVUFBVSxHQUFHQSxVQUFVO1lBQzNCUSxHQUFHLENBQUNLLEtBQUssR0FBRztBQUFDLG1CQUFHO0FBQUMsbUJBQUc7QUFBQyxtQkFBRzthQUFDO1lBQ3pCakIsS0FBSyxDQUFDa0IsR0FBRyxDQUFDTixHQUFHLENBQUM7WUFDZEEsR0FBRyxDQUFDTyxRQUFRLENBQUMsU0FBU0MsS0FBSyxFQUFDO2dCQUN4QixJQUFHQSxLQUFLLENBQUNDLE1BQU0sRUFBQztvQkFDWkQsS0FBSyxDQUFDaEIsVUFBVSxHQUFHQSxVQUFVO29CQUM3QmdCLEtBQUssQ0FBQ2pCLGFBQWEsR0FBR0EsYUFBYTtvQkFDbkNpQixLQUFLLENBQUNmLFFBQVEsR0FBR0EsUUFBUTtvQkFDekJlLEtBQUssQ0FBQ0gsS0FBSyxHQUFHLEdBQUc7aUJBQ3BCO2FBQ0osQ0FBQztZQUVGVixPQUFPLENBQUNLLEdBQUcsQ0FBQztTQUNmLEVBQ0RVLFNBQVMsRUFDVCxTQUFTQyxLQUFLLEVBQUM7WUFDWGYsTUFBTSxDQUFDZSxLQUFLLENBQUM7U0FDaEIsQ0FDSjtLQUNKLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvbW9kZWwuanM/MGEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHTFRGTG9hZGVyfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdMVEZNb2RlbChcbiAgICBzY2VuZSxcbiAgICBteXBhdGgsXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogdHJ1ZSwgY2FzdFNoYWRvdzogdHJ1ZVxuICAgIH0sXG4gICAgbWF0ZXJpYWxcbikge1xuICAgIGNvbnN0IHsgcmVjZWl2ZVNoYWRvdywgY2FzdFNoYWRvd30gPSBvcHRpb25zXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuXG4gICAgICAgIGxvYWRlci5sb2FkKFxuICAgICAgICAgICAgbXlwYXRoLFxuICAgICAgICAgICAgZ2x0ZiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gZ2x0Zi5zY2VuZVxuICAgICAgICAgICAgICAgIG9iai5uYW1lID0gJ2pldCdcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24ueSA9IDBcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3dcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcbiAgICAgICAgICAgICAgICBvYmouc2NhbGUgPSBbMC4xLDAuMSwwLjFdXG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkKG9iailcbiAgICAgICAgICAgICAgICBvYmoudHJhdmVyc2UoZnVuY3Rpb24oY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICBpZihjaGlsZC5pc01lc2gpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zY2FsZSA9IDAuMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxufSJdLCJuYW1lcyI6WyJHTFRGTG9hZGVyIiwibG9hZEdMVEZNb2RlbCIsInNjZW5lIiwibXlwYXRoIiwib3B0aW9ucyIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwibWF0ZXJpYWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwib2JqIiwibmFtZSIsInBvc2l0aW9uIiwieSIsIngiLCJzY2FsZSIsImFkZCIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/model.js\n");

/***/ })

});