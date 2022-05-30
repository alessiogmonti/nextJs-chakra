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

/***/ "./components/jet.js":
/*!***************************!*\
  !*** ./components/jet.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Jet = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            // camera.position.z = 100;\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0x404040, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/jet.gltf\", {\n                receiveShadow: true,\n                castShadow: true,\n                material: new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n                    color: black\n                })\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"jet\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        borderWidth: \"1px\",\n        borderRadius: \"lg\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px -var(--spinner-size)/2\",\n                mt: \"calc(opx -var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n                lineNumber: 112,\n                columnNumber: 17\n            }, _this),\n            \"Jet!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, _this);\n};\n_s(Jet, \"A3qZKHvekiMemH4vfTEIhTmJ0Qo=\");\n_c = Jet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jet);\nvar _c;\n$RefreshReg$(_c, \"Jet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLFFBQVE7WUFBRSxRQUFRO1NBQUM7UUFDakNDLENBQUMsRUFBRztBQUFDLGVBQUc7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ25CQyxDQUFDLEVBQUc7QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNuQmhDLFFBQVEsRUFBRyxVQUFVO1FBQ3JCaUMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFlBQVksRUFBRSxJQUFJOztZQUVidEUsT0FBTyxrQkFDSiw4REFBQ1oscURBQU87Z0JBQUNtRixJQUFJLEVBQUMsSUFBSTtnQkFDbEJuQyxRQUFRLEVBQUMsVUFBVTtnQkFDbkJvQyxJQUFJLEVBQUMsS0FBSztnQkFDVkMsR0FBRyxFQUFDLEtBQUs7Z0JBQ1RDLEVBQUUsRUFBQyxpQ0FBaUM7Z0JBQ3BDQyxFQUFFLEVBQUMsZ0NBQWdDOzs7OztxQkFBRTtZQUN2QyxNQUVOOzs7Ozs7YUFBTSxDQUNUO0NBQ0o7R0E5R0s3RSxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUFnSFQsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qZXQuanM/ZDI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgTWVzaEJhc2ljTWF0ZXJpYWwgfSBmcm9tICd0aHJlZSdcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgSmV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKVxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcil7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgNTAwMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgIC8vIGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwLCAxKVxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgXCIvamV0LmdsdGZcIiwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjpibGFja30pXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSsxIDogZnJhbWVcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8xMjApICogTWF0aC5QSSAqIDIwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gXG4gICAgICAgIGNsYXNzTmFtZT0namV0JyBcbiAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMjAwcHhcIl19XG4gICAgICAgIHc9IHtbMjgwLCA0ODAsIDY0MF19XG4gICAgICAgIGg9IHtbMjgwLCA0ODAsIDY0MF19XG4gICAgICAgIHBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiXG4gICAgICAgIGJvcmRlcldpZHRoPXtcIjFweFwifVxuICAgICAgICBib3JkZXJSYWRpdXM9e1wibGdcIn1cbiAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtdmFyKC0tc3Bpbm5lci1zaXplKS8yXCIgXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKG9weCAtdmFyKC0tc3Bpbm5lci1zaXplKSlcIi8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgSmV0IVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpldCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiSmV0IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsIm1hdGVyaWFsIiwiY29sb3IiLCJibGFjayIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jet.js\n");

/***/ })

});