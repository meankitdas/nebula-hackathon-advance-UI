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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_mainPage_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mainPage/mainPage */ \"./components/mainPage/mainPage.js\");\n/* harmony import */ var _components_speakerPage_speakerPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/speakerPage/speakerPage */ \"./components/speakerPage/speakerPage.js\");\n/* harmony import */ var _components_timelinePage_timelinePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/timelinePage/timelinePage */ \"./components/timelinePage/timelinePage.js\");\n\n\n\n\n\n// import { isMobile } from \"react-device-detect\";\nfunction Home() {\n    var _s = $RefreshSig$();\n    function ParallaxText(_a) {\n        _s();\n        var children = _a.children, _b = _a.baseVelocity, baseVelocity = _b === void 0 ? 100 : _b;\n        var baseX = useMotionValue(0);\n        var scrollY = useScroll().scrollY;\n        var scrollVelocity = useVelocity(scrollY);\n        var smoothVelocity = useSpring(scrollVelocity, {\n            damping: 50,\n            stiffness: 400\n        });\n        var velocityFactor = useTransform(smoothVelocity, [\n            0,\n            1000\n        ], [\n            0,\n            5\n        ], {\n            clamp: false\n        });\n        /**\n     * This is a magic wrapping for the length of the text - you\n     * have to replace for wrapping that works for you or dynamically\n     * calculate\n     */ var x = useTransform(baseX, function(v) {\n            return \"\".concat(wrap(-20, -45, v), \"%\");\n        });\n        var directionFactor = useRef(1);\n        useAnimationFrame(function(t, delta) {\n            var moveBy = directionFactor.current * baseVelocity * (delta / 1000);\n            /**\n         * This is what changes the direction of the scroll once we\n         * switch scrolling directions.\n         */ if (velocityFactor.get() < 0) {\n                directionFactor.current = -1;\n            } else if (velocityFactor.get() > 0) {\n                directionFactor.current = 1;\n            }\n            moveBy += directionFactor.current * moveBy * velocityFactor.get();\n            baseX.set(baseX.get() + moveBy);\n        });\n        /**\n     * The number of times to repeat the child text should be dynamically calculated\n     * based on the size of the text and viewport. Likewise, the x motion value is\n     * currently wrapped between -20 and -45% - this 25% is derived from the fact\n     * we have four children (100% / 4). This would also want deriving from the\n     * dynamically generated number of children.\n     */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"parallax\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {\n                className: \"scroller\",\n                style: {\n                    x\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n    _s(ParallaxText, \"nFXOolKxrZ5EXtV1dzQUoNaoxCA=\", true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-primary text-black font-dosis\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainPage_mainPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_speakerPage_speakerPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_timelinePage_timelinePage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBRTBCO0FBQ1M7QUFDRztBQUNuRSxrREFBa0Q7QUFJbkMsU0FBU0ksT0FBTzs7SUFFN0IsU0FBU0MsYUFBYUMsRUFBRSxFQUFFOztRQUN4QixJQUFJQyxXQUFXRCxHQUFHQyxRQUFRLEVBQUVDLEtBQUtGLEdBQUdHLFlBQVksRUFBRUEsZUFBZUQsT0FBTyxLQUFLLElBQUksTUFBTUEsRUFBRTtRQUN6RixJQUFJRSxRQUFRQyxlQUFlO1FBQzNCLElBQUlDLFVBQVVDLFlBQVlELE9BQU87UUFDakMsSUFBSUUsaUJBQWlCQyxZQUFZSDtRQUNqQyxJQUFJSSxpQkFBaUJDLFVBQVVILGdCQUFnQjtZQUMzQ0ksU0FBUztZQUNUQyxXQUFXO1FBQ2Y7UUFDQSxJQUFJQyxpQkFBaUJDLGFBQWFMLGdCQUFnQjtZQUFDO1lBQUc7U0FBSyxFQUFFO1lBQUM7WUFBRztTQUFFLEVBQUU7WUFDakVNLE9BQU8sS0FBSztRQUNoQjtRQUNBOzs7O0tBSUMsR0FDRCxJQUFJQyxJQUFJRixhQUFhWCxPQUFPLFNBQVVjLENBQUMsRUFBRTtZQUFFLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUlGLElBQUk7UUFBTTtRQUNyRixJQUFJRyxrQkFBa0JDLE9BQU87UUFDN0JDLGtCQUFrQixTQUFVQyxDQUFDLEVBQUVDLEtBQUssRUFBRTtZQUNsQyxJQUFJQyxTQUFTTCxnQkFBZ0JNLE9BQU8sR0FBR3hCLGVBQWdCc0IsQ0FBQUEsUUFBUSxJQUFHO1lBQ2xFOzs7U0FHQyxHQUNELElBQUlYLGVBQWVjLEdBQUcsS0FBSyxHQUFHO2dCQUMxQlAsZ0JBQWdCTSxPQUFPLEdBQUcsQ0FBQztZQUMvQixPQUNLLElBQUliLGVBQWVjLEdBQUcsS0FBSyxHQUFHO2dCQUMvQlAsZ0JBQWdCTSxPQUFPLEdBQUc7WUFDOUIsQ0FBQztZQUNERCxVQUFVTCxnQkFBZ0JNLE9BQU8sR0FBR0QsU0FBU1osZUFBZWMsR0FBRztZQUMvRHhCLE1BQU15QixHQUFHLENBQUN6QixNQUFNd0IsR0FBRyxLQUFLRjtRQUM1QjtRQUNBOzs7Ozs7S0FNQyxHQUNELHFCQUNFLDhEQUFDSTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQyxPQUFPRixHQUFHO2dCQUFDQyxXQUFVO2dCQUFXRSxPQUFPO29CQUFFaEI7Z0JBQUU7O2tDQUMxQyw4REFBQ2lCOzs0QkFBTWpDOzRCQUFTOzs7Ozs7O2tDQUNoQiw4REFBQ2lDOzs0QkFBTWpDOzRCQUFTOzs7Ozs7O2tDQUNoQiw4REFBQ2lDOzs0QkFBTWpDOzRCQUFTOzs7Ozs7O2tDQUNoQiw4REFBQ2lDOzs0QkFBTWpDOzRCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHMUI7T0FsRFdGO0lBc0RULHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUlBOztrQ0FDSCw4REFBQ3lDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLWCxXQUFVOztrQ0FDZCw4REFBQ3BDLHFFQUFRQTs7Ozs7a0NBQ1QsOERBQUNDLDJFQUFXQTs7Ozs7a0NBQ1osOERBQUNDLDZFQUFZQTs7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO0tBdkV1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluUGFnZS9tYWluUGFnZVwiO1xuaW1wb3J0IFNwZWFrZXJQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3NwZWFrZXJQYWdlL3NwZWFrZXJQYWdlXCI7XG5pbXBvcnQgVGltZWxpbmVQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3RpbWVsaW5lUGFnZS90aW1lbGluZVBhZ2VcIjtcbi8vIGltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgZnVuY3Rpb24gUGFyYWxsYXhUZXh0KF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIF9iID0gX2EuYmFzZVZlbG9jaXR5LCBiYXNlVmVsb2NpdHkgPSBfYiA9PT0gdm9pZCAwID8gMTAwIDogX2I7XG4gICAgdmFyIGJhc2VYID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gICAgdmFyIHNjcm9sbFkgPSB1c2VTY3JvbGwoKS5zY3JvbGxZO1xuICAgIHZhciBzY3JvbGxWZWxvY2l0eSA9IHVzZVZlbG9jaXR5KHNjcm9sbFkpO1xuICAgIHZhciBzbW9vdGhWZWxvY2l0eSA9IHVzZVNwcmluZyhzY3JvbGxWZWxvY2l0eSwge1xuICAgICAgICBkYW1waW5nOiA1MCxcbiAgICAgICAgc3RpZmZuZXNzOiA0MDBcbiAgICB9KTtcbiAgICB2YXIgdmVsb2NpdHlGYWN0b3IgPSB1c2VUcmFuc2Zvcm0oc21vb3RoVmVsb2NpdHksIFswLCAxMDAwXSwgWzAsIDVdLCB7XG4gICAgICAgIGNsYW1wOiBmYWxzZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBtYWdpYyB3cmFwcGluZyBmb3IgdGhlIGxlbmd0aCBvZiB0aGUgdGV4dCAtIHlvdVxuICAgICAqIGhhdmUgdG8gcmVwbGFjZSBmb3Igd3JhcHBpbmcgdGhhdCB3b3JrcyBmb3IgeW91IG9yIGR5bmFtaWNhbGx5XG4gICAgICogY2FsY3VsYXRlXG4gICAgICovXG4gICAgdmFyIHggPSB1c2VUcmFuc2Zvcm0oYmFzZVgsIGZ1bmN0aW9uICh2KSB7IHJldHVybiBcIlwiLmNvbmNhdCh3cmFwKC0yMCwgLTQ1LCB2KSwgXCIlXCIpOyB9KTtcbiAgICB2YXIgZGlyZWN0aW9uRmFjdG9yID0gdXNlUmVmKDEpO1xuICAgIHVzZUFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICh0LCBkZWx0YSkge1xuICAgICAgICB2YXIgbW92ZUJ5ID0gZGlyZWN0aW9uRmFjdG9yLmN1cnJlbnQgKiBiYXNlVmVsb2NpdHkgKiAoZGVsdGEgLyAxMDAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgd2hhdCBjaGFuZ2VzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNjcm9sbCBvbmNlIHdlXG4gICAgICAgICAqIHN3aXRjaCBzY3JvbGxpbmcgZGlyZWN0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh2ZWxvY2l0eUZhY3Rvci5nZXQoKSA8IDApIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmVsb2NpdHlGYWN0b3IuZ2V0KCkgPiAwKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgbW92ZUJ5ICs9IGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ICogbW92ZUJ5ICogdmVsb2NpdHlGYWN0b3IuZ2V0KCk7XG4gICAgICAgIGJhc2VYLnNldChiYXNlWC5nZXQoKSArIG1vdmVCeSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIGNoaWxkIHRleHQgc2hvdWxkIGJlIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZWRcbiAgICAgKiBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgdGV4dCBhbmQgdmlld3BvcnQuIExpa2V3aXNlLCB0aGUgeCBtb3Rpb24gdmFsdWUgaXNcbiAgICAgKiBjdXJyZW50bHkgd3JhcHBlZCBiZXR3ZWVuIC0yMCBhbmQgLTQ1JSAtIHRoaXMgMjUlIGlzIGRlcml2ZWQgZnJvbSB0aGUgZmFjdFxuICAgICAqIHdlIGhhdmUgZm91ciBjaGlsZHJlbiAoMTAwJSAvIDQpLiBUaGlzIHdvdWxkIGFsc28gd2FudCBkZXJpdmluZyBmcm9tIHRoZVxuICAgICAqIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBudW1iZXIgb2YgY2hpbGRyZW4uXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXhcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwic2Nyb2xsZXJcIiBzdHlsZT17eyB4IH19PlxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj4pXG59XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtYmxhY2sgZm9udC1kb3Npc1wiPlxuICAgICAgICA8TWFpblBhZ2UgLz5cbiAgICAgICAgPFNwZWFrZXJQYWdlIC8+XG4gICAgICAgIDxUaW1lbGluZVBhZ2UgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTWFpblBhZ2UiLCJTcGVha2VyUGFnZSIsIlRpbWVsaW5lUGFnZSIsIkhvbWUiLCJQYXJhbGxheFRleHQiLCJfYSIsImNoaWxkcmVuIiwiX2IiLCJiYXNlVmVsb2NpdHkiLCJiYXNlWCIsInVzZU1vdGlvblZhbHVlIiwic2Nyb2xsWSIsInVzZVNjcm9sbCIsInNjcm9sbFZlbG9jaXR5IiwidXNlVmVsb2NpdHkiLCJzbW9vdGhWZWxvY2l0eSIsInVzZVNwcmluZyIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eUZhY3RvciIsInVzZVRyYW5zZm9ybSIsImNsYW1wIiwieCIsInYiLCJjb25jYXQiLCJ3cmFwIiwiZGlyZWN0aW9uRmFjdG9yIiwidXNlUmVmIiwidXNlQW5pbWF0aW9uRnJhbWUiLCJ0IiwiZGVsdGEiLCJtb3ZlQnkiLCJjdXJyZW50IiwiZ2V0Iiwic2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibW90aW9uIiwic3R5bGUiLCJzcGFuIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});