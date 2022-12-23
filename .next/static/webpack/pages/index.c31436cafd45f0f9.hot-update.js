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

/***/ "./components/speakerPage/speakerPage.js":
/*!***********************************************!*\
  !*** ./components/speakerPage/speakerPage.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _birthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthPage */ \"./components/speakerPage/birthPage.js\");\n/* harmony import */ var _themePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themePage */ \"./components/speakerPage/themePage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @motionone/utils */ \"./node_modules/@motionone/utils/dist/index.es.js\");\n\n\n\n\n\n\nfunction SpeakerPage() {\n    var _s = $RefreshSig$();\n    function ParallaxText(_a) {\n        _s();\n        var children = _a.children, _b = _a.baseVelocity, baseVelocity = _b === void 0 ? 100 : _b;\n        var baseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(0);\n        var scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)().scrollY;\n        var scrollVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useVelocity)(scrollY);\n        var smoothVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(scrollVelocity, {\n            damping: 50,\n            stiffness: 400\n        });\n        var velocityFactor = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(smoothVelocity, [\n            0,\n            1000\n        ], [\n            0,\n            5\n        ], {\n            clamp: false\n        });\n        /**\n     * This is a magic wrapping for the length of the text - you\n     * have to replace for wrapping that works for you or dynamically\n     * calculate\n     */ var x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(baseX, function(v) {\n            return \"\".concat((0,_motionone_utils__WEBPACK_IMPORTED_MODULE_5__.wrap)(-20, -45, v), \"%\");\n        });\n        var directionFactor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(1);\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimationFrame)(function(t, delta) {\n            var moveBy = directionFactor.current * baseVelocity * (delta / 1000);\n            /**\n       * This is what changes the direction of the scroll once we\n       * switch scrolling directions.\n       */ if (velocityFactor.get() < 0) {\n                directionFactor.current = -1;\n            } else if (velocityFactor.get() > 0) {\n                directionFactor.current = 1;\n            }\n            moveBy += directionFactor.current * moveBy * velocityFactor.get();\n            baseX.set(baseX.get() + moveBy);\n        });\n        /**\n     * The number of times to repeat the child text should be dynamically calculated\n     * based on the size of the text and viewport. Likewise, the x motion value is\n     * currently wrapped between -20 and -45% - this 25% is derived from the fact\n     * we have four children (100% / 4). This would also want deriving from the\n     * dynamically generated number of children.\n     */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"parallax overflow-hidden -tracking-wider leading-5 m-0 whitespace-nowrap flex flex-nowrap\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"scroller flex whitespace-nowrap flex-nowrap\",\n                style: {\n                    x\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"block mr-10\",\n                        children: [\n                            children,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this);\n    }\n    _s(ParallaxText, \"nFXOolKxrZ5EXtV1dzQUoNaoxCA=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useVelocity,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimationFrame\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \" min-h-screen p-0 bg-white md:block\",\n        id: \"speaker\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-secondary text-4xl relative font-sans \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ParallaxText, {\n                    baseVelocity: 2,\n                    children: \"nebula hackathon\"\n                }, void 0, false, {\n                    fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-screen \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full h-1/2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_birthPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-secondary text-4xl relative font-sans \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ParallaxText, {\n                            baseVelocity: -2,\n                            children: \"India's Biggest hackathon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full h-1/2 bg-primary ove\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/speakerPage.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_c = SpeakerPage;\nvar _c;\n$RefreshReg$(_c, \"SpeakerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwZWFrZXJQYWdlL3NwZWFrZXJQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9DO0FBQ0E7QUFFTDtBQVNSO0FBQ2lCO0FBRXpCLFNBQVNXLGNBQWM7O0lBQ3BDLFNBQVNDLGFBQWFDLEVBQUUsRUFBRTs7UUFDeEIsSUFBSUMsV0FBV0QsR0FBR0MsUUFBUSxFQUN4QkMsS0FBS0YsR0FBR0csWUFBWSxFQUNwQkEsZUFBZUQsT0FBTyxLQUFLLElBQUksTUFBTUEsRUFBRTtRQUN6QyxJQUFJRSxRQUFRViw2REFBY0EsQ0FBQztRQUMzQixJQUFJVyxVQUFVZCx3REFBU0EsR0FBR2MsT0FBTztRQUNqQyxJQUFJQyxpQkFBaUJYLDBEQUFXQSxDQUFDVTtRQUNqQyxJQUFJRSxpQkFBaUJmLHdEQUFTQSxDQUFDYyxnQkFBZ0I7WUFDN0NFLFNBQVM7WUFDVEMsV0FBVztRQUNiO1FBQ0EsSUFBSUMsaUJBQWlCakIsMkRBQVlBLENBQUNjLGdCQUFnQjtZQUFDO1lBQUc7U0FBSyxFQUFFO1lBQUM7WUFBRztTQUFFLEVBQUU7WUFDbkVJLE9BQU8sS0FBSztRQUNkO1FBQ0E7Ozs7S0FJQyxHQUNELElBQUlDLElBQUluQiwyREFBWUEsQ0FBQ1csT0FBTyxTQUFVUyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxHQUFHQyxNQUFNLENBQUNqQixzREFBSUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJZ0IsSUFBSTtRQUN0QztRQUNBLElBQUlFLGtCQUFrQjFCLDZDQUFNQSxDQUFDO1FBQzdCTyxnRUFBaUJBLENBQUMsU0FBVW9CLENBQUMsRUFBRUMsS0FBSyxFQUFFO1lBQ3BDLElBQUlDLFNBQVNILGdCQUFnQkksT0FBTyxHQUFHaEIsZUFBZ0JjLENBQUFBLFFBQVEsSUFBRztZQUNsRTs7O09BR0MsR0FDRCxJQUFJUCxlQUFlVSxHQUFHLEtBQUssR0FBRztnQkFDNUJMLGdCQUFnQkksT0FBTyxHQUFHLENBQUM7WUFDN0IsT0FBTyxJQUFJVCxlQUFlVSxHQUFHLEtBQUssR0FBRztnQkFDbkNMLGdCQUFnQkksT0FBTyxHQUFHO1lBQzVCLENBQUM7WUFDREQsVUFBVUgsZ0JBQWdCSSxPQUFPLEdBQUdELFNBQVNSLGVBQWVVLEdBQUc7WUFDL0RoQixNQUFNaUIsR0FBRyxDQUFDakIsTUFBTWdCLEdBQUcsS0FBS0Y7UUFDMUI7UUFDQTs7Ozs7O0tBTUMsR0FDRCxxQkFDRSw4REFBQ0k7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ2pDLHFEQUFVO2dCQUNUaUMsV0FBVTtnQkFDVkMsT0FBTztvQkFBRVo7Z0JBQUU7O2tDQUVYLDhEQUFDYTt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7OztrQ0FDeEMsOERBQUN3Qjt3QkFBS0YsV0FBVTs7NEJBQWV0Qjs0QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhEO09BakVTRjs7WUFJS0wseURBQWNBO1lBQ1pILG9EQUFTQTtZQUNGSSxzREFBV0E7WUFDWEgsb0RBQVNBO1lBSVRDLHVEQUFZQTtZQVF6QkEsdURBQVlBO1lBSXBCRyw0REFBaUJBOzs7SUEyQ25CLHFCQUNFLDhEQUFDOEI7UUFBUUgsV0FBVTtRQUF3Q0ksSUFBRzs7MEJBQzVELDhEQUFDTDtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ3hCO29CQUFhSSxjQUFjOzhCQUFHOzs7Ozs7Ozs7OzswQkFFakMsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDcEMsa0RBQVNBOzs7Ozs7Ozs7O2tDQUVaLDhEQUFDbUM7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUN4Qjs0QkFBYUksY0FBYyxDQUFDO3NDQUFHOzs7Ozs7Ozs7OztrQ0FNbEMsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ25DLGtEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQixDQUFDO0tBM0Z1QlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVha2VyUGFnZS9zcGVha2VyUGFnZS5qcz8xMDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaXJ0aFBhZ2UgZnJvbSBcIi4vYmlydGhQYWdlXCI7XG5pbXBvcnQgVGhlbWVQYWdlIGZyb20gXCIuL3RoZW1lUGFnZVwiO1xuXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlU2Nyb2xsLFxuICB1c2VTcHJpbmcsXG4gIHVzZVRyYW5zZm9ybSxcbiAgdXNlTW90aW9uVmFsdWUsXG4gIHVzZVZlbG9jaXR5LFxuICB1c2VBbmltYXRpb25GcmFtZSxcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwiQG1vdGlvbm9uZS91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2VyUGFnZSgpIHtcbiAgZnVuY3Rpb24gUGFyYWxsYXhUZXh0KF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBfYiA9IF9hLmJhc2VWZWxvY2l0eSxcbiAgICAgIGJhc2VWZWxvY2l0eSA9IF9iID09PSB2b2lkIDAgPyAxMDAgOiBfYjtcbiAgICB2YXIgYmFzZVggPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICB2YXIgc2Nyb2xsWSA9IHVzZVNjcm9sbCgpLnNjcm9sbFk7XG4gICAgdmFyIHNjcm9sbFZlbG9jaXR5ID0gdXNlVmVsb2NpdHkoc2Nyb2xsWSk7XG4gICAgdmFyIHNtb290aFZlbG9jaXR5ID0gdXNlU3ByaW5nKHNjcm9sbFZlbG9jaXR5LCB7XG4gICAgICBkYW1waW5nOiA1MCxcbiAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgIH0pO1xuICAgIHZhciB2ZWxvY2l0eUZhY3RvciA9IHVzZVRyYW5zZm9ybShzbW9vdGhWZWxvY2l0eSwgWzAsIDEwMDBdLCBbMCwgNV0sIHtcbiAgICAgIGNsYW1wOiBmYWxzZSxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgbWFnaWMgd3JhcHBpbmcgZm9yIHRoZSBsZW5ndGggb2YgdGhlIHRleHQgLSB5b3VcbiAgICAgKiBoYXZlIHRvIHJlcGxhY2UgZm9yIHdyYXBwaW5nIHRoYXQgd29ya3MgZm9yIHlvdSBvciBkeW5hbWljYWxseVxuICAgICAqIGNhbGN1bGF0ZVxuICAgICAqL1xuICAgIHZhciB4ID0gdXNlVHJhbnNmb3JtKGJhc2VYLCBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHdyYXAoLTIwLCAtNDUsIHYpLCBcIiVcIik7XG4gICAgfSk7XG4gICAgdmFyIGRpcmVjdGlvbkZhY3RvciA9IHVzZVJlZigxKTtcbiAgICB1c2VBbmltYXRpb25GcmFtZShmdW5jdGlvbiAodCwgZGVsdGEpIHtcbiAgICAgIHZhciBtb3ZlQnkgPSBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCAqIGJhc2VWZWxvY2l0eSAqIChkZWx0YSAvIDEwMDApO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIHdoYXQgY2hhbmdlcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGwgb25jZSB3ZVxuICAgICAgICogc3dpdGNoIHNjcm9sbGluZyBkaXJlY3Rpb25zLlxuICAgICAgICovXG4gICAgICBpZiAodmVsb2NpdHlGYWN0b3IuZ2V0KCkgPCAwKSB7XG4gICAgICAgIGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ID0gLTE7XG4gICAgICB9IGVsc2UgaWYgKHZlbG9jaXR5RmFjdG9yLmdldCgpID4gMCkge1xuICAgICAgICBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCA9IDE7XG4gICAgICB9XG4gICAgICBtb3ZlQnkgKz0gZGlyZWN0aW9uRmFjdG9yLmN1cnJlbnQgKiBtb3ZlQnkgKiB2ZWxvY2l0eUZhY3Rvci5nZXQoKTtcbiAgICAgIGJhc2VYLnNldChiYXNlWC5nZXQoKSArIG1vdmVCeSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIGNoaWxkIHRleHQgc2hvdWxkIGJlIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZWRcbiAgICAgKiBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgdGV4dCBhbmQgdmlld3BvcnQuIExpa2V3aXNlLCB0aGUgeCBtb3Rpb24gdmFsdWUgaXNcbiAgICAgKiBjdXJyZW50bHkgd3JhcHBlZCBiZXR3ZWVuIC0yMCBhbmQgLTQ1JSAtIHRoaXMgMjUlIGlzIGRlcml2ZWQgZnJvbSB0aGUgZmFjdFxuICAgICAqIHdlIGhhdmUgZm91ciBjaGlsZHJlbiAoMTAwJSAvIDQpLiBUaGlzIHdvdWxkIGFsc28gd2FudCBkZXJpdmluZyBmcm9tIHRoZVxuICAgICAqIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBudW1iZXIgb2YgY2hpbGRyZW4uXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXggb3ZlcmZsb3ctaGlkZGVuIC10cmFja2luZy13aWRlciBsZWFkaW5nLTUgbS0wIHdoaXRlc3BhY2Utbm93cmFwIGZsZXggZmxleC1ub3dyYXBcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGxlciBmbGV4IHdoaXRlc3BhY2Utbm93cmFwIGZsZXgtbm93cmFwXCJcbiAgICAgICAgICBzdHlsZT17eyB4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtci0xMFwiPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1yLTEwXCI+e2NoaWxkcmVufSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbXItMTBcIj57Y2hpbGRyZW59IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtci0xMFwiPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1yLTEwXCI+e2NoaWxkcmVufSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbXItMTBcIj57Y2hpbGRyZW59IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtci0xMFwiPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1yLTEwXCI+e2NoaWxkcmVufSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbXItMTBcIj57Y2hpbGRyZW59IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtci0xMFwiPntjaGlsZHJlbn0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1yLTEwXCI+e2NoaWxkcmVufSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbXItMTBcIj57Y2hpbGRyZW59IDwvc3Bhbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIiBtaW4taC1zY3JlZW4gcC0wICBiZy13aGl0ZSAgbWQ6YmxvY2tcIiBpZD1cInNwZWFrZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC00eGwgcmVsYXRpdmUgZm9udC1zYW5zICBcIj5cbiAgICAgICAgey8qIDxQYXJhbGxheFRleHQgYmFzZVZlbG9jaXR5PXstNX0+TmVidWxhIFRlY2hmZXN0PC9QYXJhbGxheFRleHQ+ICovfVxuICAgICAgICA8UGFyYWxsYXhUZXh0IGJhc2VWZWxvY2l0eT17Mn0+bmVidWxhIGhhY2thdGhvbjwvUGFyYWxsYXhUZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLXNjcmVlbiBcIj5cbiAgICAgICAgey8qIGJpcnRoIG9mIElubm92YXRvciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLTEvMiBcIj5cbiAgICAgICAgICA8QmlydGhQYWdlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtNHhsIHJlbGF0aXZlIGZvbnQtc2FucyAgIFwiPlxuICAgICAgICAgIDxQYXJhbGxheFRleHQgYmFzZVZlbG9jaXR5PXstMn0+XG4gICAgICAgICAgICBJbmRpYSdzIEJpZ2dlc3QgaGFja2F0aG9uXG4gICAgICAgICAgPC9QYXJhbGxheFRleHQ+XG4gICAgICAgICAgey8qIDxQYXJhbGxheFRleHQgYmFzZVZlbG9jaXR5PXsyfT5uZWJ1bGEgaGFja2F0aG9uPC9QYXJhbGxheFRleHQ+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIHRoZW1lICAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLTEvMiBiZy1wcmltYXJ5IG92ZVwiPlxuICAgICAgICAgIDxUaGVtZVBhZ2UgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmlydGhQYWdlIiwiVGhlbWVQYWdlIiwidXNlUmVmIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwidXNlVHJhbnNmb3JtIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VWZWxvY2l0eSIsInVzZUFuaW1hdGlvbkZyYW1lIiwid3JhcCIsIlNwZWFrZXJQYWdlIiwiUGFyYWxsYXhUZXh0IiwiX2EiLCJjaGlsZHJlbiIsIl9iIiwiYmFzZVZlbG9jaXR5IiwiYmFzZVgiLCJzY3JvbGxZIiwic2Nyb2xsVmVsb2NpdHkiLCJzbW9vdGhWZWxvY2l0eSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eUZhY3RvciIsImNsYW1wIiwieCIsInYiLCJjb25jYXQiLCJkaXJlY3Rpb25GYWN0b3IiLCJ0IiwiZGVsdGEiLCJtb3ZlQnkiLCJjdXJyZW50IiwiZ2V0Iiwic2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzcGFuIiwic2VjdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/speakerPage/speakerPage.js\n"));

/***/ })

});