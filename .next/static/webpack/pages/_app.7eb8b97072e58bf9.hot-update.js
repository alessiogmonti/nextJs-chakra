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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Jet = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.5 // + 4.8\n            ;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 500);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0x404040, 1);\n            scene.add(ambientLight);\n            var geom = new three__WEBPACK_IMPORTED_MODULE_4__.SphereGeometry(5, 20);\n            var mat = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n                color: \"black\"\n            });\n            var sphere = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geom, mat);\n            console.log(sphere);\n            scene.add(sphere);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/jet.glb\", {\n                receiveShadow: true,\n                castShadow: true\n            }, new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n                color: \"black\"\n            })).then(function() {\n                console.log(scene);\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * matchMedia.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"jet\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            1240\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        borderWidth: \"1px\",\n        borderRadius: \"lg\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px -var(--spinner-size)/2\",\n                mt: \"calc(opx -var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n                lineNumber: 115,\n                columnNumber: 17\n            }, _this),\n            \"Jet!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, _this);\n};\n_s(Jet, \"A3qZKHvekiMemH4vfTEIhTmJ0Qo=\");\n_c = Jet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jet);\nvar _c;\n$RefreshReg$(_c, \"Jet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQzthQUNuQztZQUVELE9BQU8sV0FBTTtnQkFDVGlDLG9CQUFvQixDQUFDWCxHQUFHLENBQUM7Z0JBQ3pCdEQsU0FBUSxDQUFDa0UsT0FBTyxFQUFFO2FBQ3JCO1NBQ0o7S0FDSixFQUFFLEVBQUUsQ0FBQztJQUNOLHFCQUNJLDhEQUFDaEYsaURBQUc7UUFBQ2lGLEdBQUcsRUFBRXRFLFlBQVk7UUFDdEJ1RSxTQUFTLEVBQUMsS0FBSztRQUNmQyxDQUFDLEVBQUMsTUFBTTtRQUNSQyxFQUFFLEVBQUU7WUFBQyxPQUFPO1lBQUUsT0FBTztZQUFFLFFBQVE7U0FBQztRQUNoQ0MsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLFFBQVE7WUFBRSxRQUFRO1NBQUM7UUFDakNDLENBQUMsRUFBRztBQUFDLGVBQUc7QUFBRSxlQUFHO0FBQUUsZ0JBQUk7U0FBQztRQUNwQkMsQ0FBQyxFQUFHO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbkJ2QyxRQUFRLEVBQUcsVUFBVTtRQUNyQndDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxZQUFZLEVBQUUsSUFBSTs7WUFFYjdFLE9BQU8sa0JBQ0osOERBQUNYLHFEQUFPO2dCQUFDeUYsSUFBSSxFQUFDLElBQUk7Z0JBQ2xCMUMsUUFBUSxFQUFDLFVBQVU7Z0JBQ25CMkMsSUFBSSxFQUFDLEtBQUs7Z0JBQ1ZDLEdBQUcsRUFBQyxLQUFLO2dCQUNUQyxFQUFFLEVBQUMsaUNBQWlDO2dCQUNwQ0MsRUFBRSxFQUFDLGdDQUFnQzs7Ozs7cUJBQUU7WUFDdkMsTUFFTjs7Ozs7O2FBQU0sQ0FDVDtDQUNKO0dBbEhLcEYsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBb0hULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvamV0LmpzP2QyODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgSmV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKVxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcil7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjUgLy8gKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwLCAxKVxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgICAgICAgY29uc3QgZ2VvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSg1LCAyMCk7XG4gICAgICAgICAgICBjb25zdCBtYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe2NvbG9yOidibGFjayd9KVxuICAgICAgICAgICAgY29uc3Qgc3BoZXJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbSwgbWF0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3BoZXJlKVxuICAgICAgICAgICAgc2NlbmUuYWRkKHNwaGVyZSlcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgXCIvamV0LmdsYlwiLCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjonYmxhY2snfSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjZW5lKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lKzEgOiBmcmFtZVxuICAgICAgICAgICAgICAgIGlmIChmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lLzEyMCkgKiBNYXRoLlBJICogMjBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIG1hdGNoTWVkaWEuY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0gcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gXG4gICAgICAgIGNsYXNzTmFtZT0namV0JyBcbiAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMjAwcHhcIl19XG4gICAgICAgIHc9IHtbMjgwLCA0ODAsIDEyNDBdfVxuICAgICAgICBoPSB7WzI4MCwgNDgwLCA2NDBdfVxuICAgICAgICBwb3NpdGlvbiA9IFwicmVsYXRpdmVcIlxuICAgICAgICBib3JkZXJXaWR0aD17XCIxcHhcIn1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcImxnXCJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCIgXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLXZhcigtLXNwaW5uZXItc2l6ZSkvMlwiIFxuICAgICAgICAgICAgICAgIG10PVwiY2FsYyhvcHggLXZhcigtLXNwaW5uZXItc2l6ZSkpXCIvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIEpldCFcbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZXQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJKZXQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImdlb20iLCJTcGhlcmVHZW9tZXRyeSIsIm1hdCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJzcGhlcmUiLCJNZXNoIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsInJlcSIsImZyYW1lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwibWF0Y2hNZWRpYSIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jet.js\n");

/***/ })

});