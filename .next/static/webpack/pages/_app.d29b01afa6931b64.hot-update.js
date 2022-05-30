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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _jet_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jet-loader */ \"./components/jet-loader.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Jet = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            // camera.position.z = 100;\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0x404040, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/dog.glb\", {\n                receiveShadow: true,\n                castShadow: true\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                // renderer.forceContextLoss()\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_jet_loader__WEBPACK_IMPORTED_MODULE_4__.JetContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_jet_loader__WEBPACK_IMPORTED_MODULE_4__.JetSpinner, {}, void 0, false, {\n            fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n            lineNumber: 116,\n            columnNumber: 25\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, _this);\n};\n_s(Jet, \"jL4OH5WLVzTLFbPsDwD26Uk/DDk=\");\n_c = Jet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jet);\nvar _c;\n$RefreshReg$(_c, \"Jet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDekIsOEJBQThCO2dCQUM5Qi9DLFNBQVEsQ0FBQ3lELE9BQU8sRUFBRTthQUNyQjtTQUNKO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFFTjFFLGdEQUFTLENBQUMsV0FBTTtRQUNaMkMsTUFBTSxDQUFDZ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFNUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzVELE9BQU8sV0FBTTtZQUNUWSxNQUFNLENBQUNpQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU3QyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7U0FDbEU7S0FDSixFQUFFO1FBQUNkLFFBQVE7UUFBRWMsa0JBQWtCO0tBQUMsQ0FBQztJQUNsQyxxQkFDSSw4REFBQ3hCLHFEQUFZO1FBQUNzRSxHQUFHLEVBQUUvRCxZQUFZO2tCQUMxQkMsT0FBTyxrQkFBSSw4REFBQ1QsbURBQVU7Ozs7aUJBQUU7Ozs7O2FBQ2QsQ0FDbEI7Q0FDSjtHQTVHS08sR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBOEdULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvamV0LmpzP2QyODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgSmV0U3Bpbm5lciwgSmV0Q29udGFpbmVyIH0gZnJvbSAnLi9qZXQtbG9hZGVyJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBKZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyMCogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXG4gICAgXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgICAgICB9XG4gICAgfSwgW3JlbmRlcmVyXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcil7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICAvLyBjYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCwgMSlcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsIFwiL2RvZy5nbGJcIiwge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogdHJ1ZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUrMSA6IGZyYW1lXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUvMTIwKSAqIE1hdGguUEkgKiAyMFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJlci5mb3JjZUNvbnRleHRMb3NzKClcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8SmV0Q29udGFpbmVyIHJlZj17cmVmQ29udGFpbmVyfT4gXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8SmV0U3Bpbm5lci8+fVxuICAgICAgICA8L0pldENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpldCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIkpldFNwaW5uZXIiLCJKZXRDb250YWluZXIiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIkpldCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jet.js\n");

/***/ })

});