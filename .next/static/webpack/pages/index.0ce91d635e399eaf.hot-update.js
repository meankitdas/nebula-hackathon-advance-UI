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

/***/ "./components/animation/starAnimation.js":
/*!***********************************************!*\
  !*** ./components/animation/starAnimation.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst color = \"#000\";\nconst Icosahedron = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        \"rotation-x\": 0.35,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"icosahedronGeometry\", {\n                args: [\n                    1,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                wireframe: true,\n                color: color\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n_c = Icosahedron;\nvar Star = function(_a) {\n    _s();\n    var p = _a.p;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {\n        var distance = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(2, 3.5, Math.random());\n        var yAngle = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)((0,popmotion__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(80), (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(100), Math.random());\n        var xAngle = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(360) * p;\n        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                args: [\n                    0.05,\n                    0.05,\n                    0.05\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                wireframe: true,\n                color: color\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n};\n_s(Star, \"JkctLsMDw5W2MbVlMaFRM76c/8g=\");\n_c1 = Star;\nfunction Scene(param) {\n    let { numStars =100  } = param;\n    _s1();\n    var gl = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree)(function(state) {\n        return state.gl;\n    });\n    var { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    var yAngle = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.001,\n        (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(180)\n    ]);\n    var distance = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        20,\n        3\n    ]);\n    var time = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTime)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function(_a) {\n        var camera = _a.camera;\n        camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);\n        camera.updateProjectionMatrix();\n        camera.lookAt(0, 0, 0);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>gl.setPixelRatio(0.3));\n    const stars = [];\n    for(let i = 0; i < numStars; i++){\n        stars.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Star, {\n            p: (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.progress)(0, numStars, i)\n        }, void 0, false, {\n            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n            lineNumber: 58,\n            columnNumber: 16\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icosahedron, {}, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            stars\n        ]\n    }, void 0, true);\n}\n_s1(Scene, \"YuuJmTFuhJ+EbDJe7DdMpzLXQ0M=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTime,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame\n    ];\n});\n_c2 = Scene;\nfunction StarAnimation() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container fixed w-1/2 h- right-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n            gl: {\n                antialias: false\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {}, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/animation/starAnimation.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_c3 = StarAnimation;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Icosahedron\");\n$RefreshReg$(_c1, \"Star\");\n$RefreshReg$(_c2, \"Scene\");\n$RefreshReg$(_c3, \"StarAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9zdGFyQW5pbWF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdFO0FBQ2hCO0FBQ2lCO0FBQ0w7QUFFNUQsTUFBTVcsUUFBUTtBQUVkLE1BQU1DLGNBQWMsa0JBQ2xCLDhEQUFDQztRQUFLQyxjQUFZOzswQkFDaEIsOERBQUNDO2dCQUFvQkMsTUFBTTtvQkFBQztvQkFBRztpQkFBRTs7Ozs7OzBCQUNqQyw4REFBQ0M7Z0JBQWtCQyxTQUFTO2dCQUFDUCxPQUFPQTs7Ozs7Ozs7Ozs7O0tBSGxDQztBQVNOLElBQUlPLE9BQU8sU0FBVUMsRUFBRSxFQUFFOztJQUNyQixJQUFJQyxJQUFJRCxHQUFHQyxDQUFDO0lBQ1osSUFBSUMsTUFBTW5CLDZDQUFNQSxDQUFDLElBQUk7SUFDckJDLHNEQUFlQSxDQUFDLFdBQVk7UUFDeEIsSUFBSW1CLFdBQVdiLDhDQUFHQSxDQUFDLEdBQUcsS0FBS2MsS0FBS0MsTUFBTTtRQUN0QyxJQUFJQyxTQUFTaEIsOENBQUdBLENBQUNGLDJEQUFnQkEsQ0FBQyxLQUFLQSwyREFBZ0JBLENBQUMsTUFBTWdCLEtBQUtDLE1BQU07UUFDekUsSUFBSUUsU0FBU25CLDJEQUFnQkEsQ0FBQyxPQUFPYTtRQUNyQ0MsSUFBSU0sT0FBTyxDQUFDQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDUCxVQUFVRyxRQUFRQztJQUNsRTtJQUVBLHFCQUNJLDhEQUFDZDtRQUFLUyxLQUFLQTs7MEJBQ1QsOERBQUNTO2dCQUFZZixNQUFNO29CQUFDO29CQUFNO29CQUFNO2lCQUFLOzs7Ozs7MEJBQ3JDLDhEQUFDQztnQkFBa0JDLFNBQVM7Z0JBQUNQLE9BQU9BOzs7Ozs7Ozs7Ozs7QUFLOUM7R0FsQklRO01BQUFBO0FBcUJKLFNBQVNhLE1BQU0sS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxVQUFXLElBQUcsRUFBRSxHQUFsQjs7SUFDWCxJQUFJQyxLQUFLakMsNERBQVFBLENBQUMsU0FBVWtDLEtBQUssRUFBRTtRQUFFLE9BQU9BLE1BQU1ELEVBQUU7SUFBRTtJQUN0RCxJQUFJLEVBQUNFLGdCQUFlLEVBQUMsR0FBRzlCLHdEQUFTQTtJQUNqQyxJQUFJb0IsU0FBU3JCLDJEQUFZQSxDQUFDK0IsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFPNUIsMkRBQWdCQSxDQUFDO0tBQUs7SUFDakYsSUFBSWUsV0FBV2xCLDJEQUFZQSxDQUFDK0IsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFJO0tBQUU7SUFDNUQsSUFBSUMsT0FBTzlCLHNEQUFPQTtJQUdsQkwsNERBQVFBLENBQUMsU0FBVWtCLEVBQUUsRUFBRTtRQUNuQixJQUFJa0IsU0FBU2xCLEdBQUdrQixNQUFNO1FBQ3RCQSxPQUFPVCxRQUFRLENBQUNDLHNCQUFzQixDQUFDUCxTQUFTZ0IsR0FBRyxJQUFJYixPQUFPYSxHQUFHLElBQUlGLEtBQUtFLEdBQUcsS0FBSztRQUNsRkQsT0FBT0Usc0JBQXNCO1FBQzdCRixPQUFPRyxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQ3hCO0lBR0ZyQyxzREFBZUEsQ0FBQyxJQUFNOEIsR0FBR1EsYUFBYSxDQUFDO0lBRXZDLE1BQU1DLFFBQVEsRUFBRTtJQUNoQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVgsVUFBVVcsSUFBSztRQUNqQ0QsTUFBTUUsSUFBSSxlQUFDLDhEQUFDMUI7WUFBS0UsR0FBR1osbURBQVFBLENBQUMsR0FBR3dCLFVBQVVXOzs7Ozs7SUFDNUM7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNoQzs7Ozs7WUFDQStCOzs7QUFHUDtJQTdCU1g7O1FBQ0kvQix3REFBUUE7UUFDT0ssb0RBQVNBO1FBQ3BCRCx1REFBWUE7UUFDVkEsdURBQVlBO1FBQ2hCRSxrREFBT0E7UUFHbEJMLHdEQUFRQTs7O01BUkg4QjtBQStCTSxTQUFTYyxnQkFBZ0I7SUFDdEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNoRCxzREFBTUE7WUFBQ2tDLElBQUk7Z0JBQUVlLFdBQVcsS0FBSztZQUFDO3NCQUM3Qiw0RUFBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO01BUnVCYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9zdGFyQW5pbWF0aW9uLmpzPzk1MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzLCB1c2VUaHJlZSwgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNmb3JtLCB1c2VTY3JvbGwsIHVzZVRpbWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgZGVncmVlc1RvUmFkaWFucywgcHJvZ3Jlc3MsIG1peCB9IGZyb20gXCJwb3Btb3Rpb25cIjtcblxuY29uc3QgY29sb3IgPSBcIiMwMDBcIjtcblxuY29uc3QgSWNvc2FoZWRyb24gPSAoKSA9PiAoXG4gIDxtZXNoIHJvdGF0aW9uLXg9ezAuMzV9PlxuICAgIDxpY29zYWhlZHJvbkdlb21ldHJ5IGFyZ3M9e1sxLCAwXX0gLz5cbiAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgd2lyZWZyYW1lIGNvbG9yPXtjb2xvcn0gLz5cbiAgPC9tZXNoPlxuKTtcblxuXG5cbnZhciBTdGFyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHAgPSBfYS5wO1xuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbWl4KDIsIDMuNSwgTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHZhciB5QW5nbGUgPSBtaXgoZGVncmVlc1RvUmFkaWFucyg4MCksIGRlZ3JlZXNUb1JhZGlhbnMoMTAwKSwgTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHZhciB4QW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKDM2MCkgKiBwO1xuICAgICAgICByZWYuY3VycmVudC5wb3NpdGlvbi5zZXRGcm9tU3BoZXJpY2FsQ29vcmRzKGRpc3RhbmNlLCB5QW5nbGUsIHhBbmdsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWVzaCByZWY9e3JlZn0+XG4gICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1swLjA1LCAwLjA1LCAwLjA1XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgd2lyZWZyYW1lIGNvbG9yPXtjb2xvcn0gLz5cbiAgICAgICAgPC9tZXNoPlxuICAgICAgKTtcbiAgICBcblxufTtcblxuXG5mdW5jdGlvbiBTY2VuZSh7IG51bVN0YXJzID0gMTAwIH0pIHtcbiAgICB2YXIgZ2wgPSB1c2VUaHJlZShmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmdsOyB9KTtcbiAgICB2YXIge3Njcm9sbFlQcm9ncmVzc30gPSB1c2VTY3JvbGwoKTtcbiAgICB2YXIgeUFuZ2xlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMC4wMDEsIGRlZ3JlZXNUb1JhZGlhbnMoMTgwKV0pO1xuICAgIHZhciBkaXN0YW5jZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzIwLCAzXSk7XG4gICAgdmFyIHRpbWUgPSB1c2VUaW1lKCk7XG4gICAgXG5cbiAgICB1c2VGcmFtZShmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNhbWVyYSA9IF9hLmNhbWVyYTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldEZyb21TcGhlcmljYWxDb29yZHMoZGlzdGFuY2UuZ2V0KCksIHlBbmdsZS5nZXQoKSwgdGltZS5nZXQoKSAqIDAuMDAwNSk7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQoMCwgMCwgMCk7XG4gICAgfSk7XG4gICAgXG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGdsLnNldFBpeGVsUmF0aW8oMC4zKSk7XG5cbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGFyczsgaSsrKSB7XG4gICAgc3RhcnMucHVzaCg8U3RhciBwPXtwcm9ncmVzcygwLCBudW1TdGFycywgaSl9IC8+KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJY29zYWhlZHJvbiAvPlxuICAgICAge3N0YXJzfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyQW5pbWF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZpeGVkIHctMS8yIGgtIHJpZ2h0LTBcIj5cbiAgICAgIDxDYW52YXMgZ2w9e3sgYW50aWFsaWFzOiBmYWxzZSB9fT5cbiAgICAgICAgPFNjZW5lIC8+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJ1c2VUaHJlZSIsInVzZUZyYW1lIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlVHJhbnNmb3JtIiwidXNlU2Nyb2xsIiwidXNlVGltZSIsImRlZ3JlZXNUb1JhZGlhbnMiLCJwcm9ncmVzcyIsIm1peCIsImNvbG9yIiwiSWNvc2FoZWRyb24iLCJtZXNoIiwicm90YXRpb24teCIsImljb3NhaGVkcm9uR2VvbWV0cnkiLCJhcmdzIiwibWVzaEJhc2ljTWF0ZXJpYWwiLCJ3aXJlZnJhbWUiLCJTdGFyIiwiX2EiLCJwIiwicmVmIiwiZGlzdGFuY2UiLCJNYXRoIiwicmFuZG9tIiwieUFuZ2xlIiwieEFuZ2xlIiwiY3VycmVudCIsInBvc2l0aW9uIiwic2V0RnJvbVNwaGVyaWNhbENvb3JkcyIsImJveEdlb21ldHJ5IiwiU2NlbmUiLCJudW1TdGFycyIsImdsIiwic3RhdGUiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0aW1lIiwiY2FtZXJhIiwiZ2V0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImxvb2tBdCIsInNldFBpeGVsUmF0aW8iLCJzdGFycyIsImkiLCJwdXNoIiwiU3RhckFuaW1hdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImFudGlhbGlhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animation/starAnimation.js\n"));

/***/ })

});