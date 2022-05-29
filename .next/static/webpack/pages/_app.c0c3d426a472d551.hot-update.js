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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Jet = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"../3D/dracoJet.gltf\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * matchMedia.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"jet\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px -var(--spinner-size)/2\",\n                mt: \"calc(opx -var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n                lineNumber: 107,\n                columnNumber: 17\n            }, _this),\n            \"Jet!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, _this);\n};\n_s(Jet, \"GHM7lfc/OGoJ1HHpB3wYg2/f0+g=\");\n_c = Jet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jet);\nvar _c;\n$RefreshReg$(_c, \"Jet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkJDLENBQUMsRUFBRztBQUFDLGVBQUc7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ25COUIsUUFBUSxFQUFHLFVBQVU7O1lBRWhCcEMsT0FBTyxrQkFDSiw4REFBQ1gscURBQU87Z0JBQUM4RSxJQUFJLEVBQUMsSUFBSTtnQkFDbEIvQixRQUFRLEVBQUMsVUFBVTtnQkFDbkJnQyxJQUFJLEVBQUMsS0FBSztnQkFDVkMsR0FBRyxFQUFDLEtBQUs7Z0JBQ1RDLEVBQUUsRUFBQyxpQ0FBaUM7Z0JBQ3BDQyxFQUFFLEVBQUMsZ0NBQWdDOzs7OztxQkFBRTtZQUN2QyxNQUVOOzs7Ozs7YUFBTSxDQUNUO0NBQ0o7R0ExR0t6RSxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUE0R1QsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qZXQuanM/ZDI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBKZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXG4gICAgICAgIClcbiAgICApXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpe1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxuXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnLi4vM0QvZHJhY29KZXQuZ2x0ZicsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSsxIDogZnJhbWVcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8xMjApICogTWF0aC5QSSAqIDIwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBtYXRjaE1lZGlhLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0gcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gXG4gICAgICAgIGNsYXNzTmFtZT0namV0JyBcbiAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMjAwcHhcIl19XG4gICAgICAgIHc9IHtbMjgwLCA0ODAsIDY0MF19XG4gICAgICAgIGg9IHtbMjgwLCA0ODAsIDY0MF19XG4gICAgICAgIHBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCIgXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLXZhcigtLXNwaW5uZXItc2l6ZSkvMlwiIFxuICAgICAgICAgICAgICAgIG10PVwiY2FsYyhvcHggLXZhcigtLXNwaW5uZXItc2l6ZSkpXCIvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIEpldCFcbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZXQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJKZXQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsInJlcSIsImZyYW1lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwibWF0Y2hNZWRpYSIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jet.js\n");

/***/ })

});