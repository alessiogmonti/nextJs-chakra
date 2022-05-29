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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Jet = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/jet.gltf\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                setLoading(false);\n                console.log(\"loaded\");\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * matchMedia.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"jet\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px -var(--spinner-size)/2\",\n                mt: \"calc(opx -var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n                lineNumber: 108,\n                columnNumber: 17\n            }, _this),\n            \"Jet!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergiomonti95/Documents/AlessioCode/2022/NextJsWebsite/tutorialwebsite/components/jet.js\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, _this);\n};\n_s(Jet, \"GHM7lfc/OGoJ1HHpB3wYg2/f0+g=\");\n_c = Jet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jet);\nvar _c;\n$RefreshReg$(_c, \"Jet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNuQkMsQ0FBQyxFQUFHO0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbkJoQyxRQUFRLEVBQUcsVUFBVTs7WUFFaEJwQyxPQUFPLGtCQUNKLDhEQUFDWCxxREFBTztnQkFBQ2dGLElBQUksRUFBQyxJQUFJO2dCQUNsQmpDLFFBQVEsRUFBQyxVQUFVO2dCQUNuQmtDLElBQUksRUFBQyxLQUFLO2dCQUNWQyxHQUFHLEVBQUMsS0FBSztnQkFDVEMsRUFBRSxFQUFDLGlDQUFpQztnQkFDcENDLEVBQUUsRUFBQyxnQ0FBZ0M7Ozs7O3FCQUFFO1lBQ3ZDLE1BRU47Ozs7OzthQUFNLENBQ1Q7Q0FDSjtHQTNHSzNFLEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQTZHVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pldC5qcz9kMjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tICcuLi9saWIvbW9kZWwnXG5cbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXG59XG5cbmNvbnN0IEpldCA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3JlbmRlcmVyLCBzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcil7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgNTAwMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsIFwiL2pldC5nbHRmXCIsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lKzEgOiBmcmFtZVxuICAgICAgICAgICAgICAgIGlmIChmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lLzEyMCkgKiBNYXRoLlBJICogMjBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIG1hdGNoTWVkaWEuY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgfSByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfSBcbiAgICAgICAgY2xhc3NOYW1lPSdqZXQnIFxuICAgICAgICBtPVwiYXV0b1wiIFxuICAgICAgICBhdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX0gXG4gICAgICAgIG1iPXtbXCItNDBweFwiLCBcIi0xNDBweFwiLCBcIi0yMDBweFwiXX1cbiAgICAgICAgdz0ge1syODAsIDQ4MCwgNjQwXX1cbiAgICAgICAgaD0ge1syODAsIDQ4MCwgNjQwXX1cbiAgICAgICAgcG9zaXRpb24gPSBcInJlbGF0aXZlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtdmFyKC0tc3Bpbm5lci1zaXplKS8yXCIgXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKG9weCAtdmFyKC0tc3Bpbm5lci1zaXplKSlcIi8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgSmV0IVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpldCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIkpldCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcSIsImZyYW1lIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwibWF0Y2hNZWRpYSIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jet.js\n");

/***/ })

});