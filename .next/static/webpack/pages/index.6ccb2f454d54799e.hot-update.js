/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/animation/slider.js":
/*!****************************************!*\
  !*** ./components/animation/slider.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/speakerPage/themePage.js":
/*!*********************************************!*\
  !*** ./components/speakerPage/themePage.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ThemePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _themeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeBox */ \"./components/speakerPage/themeBox.js\");\n/* harmony import */ var _animation_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/slider */ \"./components/animation/slider.js\");\n/* harmony import */ var _animation_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_slider__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ThemePage() {\n    const theme1 = [\n        {\n            name: \"Theme 1\"\n        },\n        {\n            name: \"Theme 2\"\n        },\n        {\n            name: \"Theme 3\"\n        }\n    ];\n    const theme2 = [\n        {\n            name: \"Theme 4\"\n        },\n        {\n            name: \"Theme 5\"\n        },\n        {\n            name: \"Theme 6\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/3 w-2/3 flex text-xs md:text-sm justify-center items-center m-2 md:ml-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:ml-10 w-full h-full bg-red-700 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_animation_slider__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-2/3 w-1/3 flex md:text-8xl text-2xl items-center justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-secondary\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Themes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankitdas/Documents/GitHub/nebula-full/components/speakerPage/themePage.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = ThemePage;\nvar _c;\n$RefreshReg$(_c, \"ThemePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwZWFrZXJQYWdlL3RoZW1lUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNPO0FBRTFCLFNBQVNFLFlBQVk7SUFDbEMsTUFBTUMsU0FBUztRQUNiO1lBQUVDLE1BQU07UUFBVTtRQUNsQjtZQUFFQSxNQUFNO1FBQVU7UUFDbEI7WUFBRUEsTUFBTTtRQUFVO0tBQ25CO0lBRUQsTUFBTUMsU0FBUztRQUNiO1lBQUVELE1BQU07UUFBVTtRQUNsQjtZQUFFQSxNQUFNO1FBQVU7UUFDbEI7WUFBRUEsTUFBTTtRQUFVO0tBQ25CO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDRTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBWWIsNEVBQUNOLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDSztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZCxDQUFDO0tBdEN1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVha2VyUGFnZS90aGVtZVBhZ2UuanM/NzE5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWVCb3ggZnJvbSBcIi4vdGhlbWVCb3hcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL2FuaW1hdGlvbi9zbGlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVQYWdlKCkge1xuICBjb25zdCB0aGVtZTEgPSBbXG4gICAgeyBuYW1lOiBcIlRoZW1lIDFcIiB9LFxuICAgIHsgbmFtZTogXCJUaGVtZSAyXCIgfSxcbiAgICB7IG5hbWU6IFwiVGhlbWUgM1wiIH0sXG4gIF07XG5cbiAgY29uc3QgdGhlbWUyID0gW1xuICAgIHsgbmFtZTogXCJUaGVtZSA0XCIgfSxcbiAgICB7IG5hbWU6IFwiVGhlbWUgNVwiIH0sXG4gICAgeyBuYW1lOiBcIlRoZW1lIDZcIiB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzMgdy0yLzMgZmxleCB0ZXh0LXhzIG1kOnRleHQtc20ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMiAgbWQ6bWwtMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptbC0xMCB3LWZ1bGwgaC1mdWxsIGJnLXJlZC03MDAgIFwiPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIHctZnVsbCBoLTEvMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHt0aGVtZTEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxUaGVtZUJveCBsaXN0PXtpdGVtLm5hbWV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtMS8yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAge3RoZW1lMi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFRoZW1lQm94IGxpc3Q9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgIDxTbGlkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0yLzMgdy0xLzMgZmxleCBtZDp0ZXh0LTh4bCB0ZXh0LTJ4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICA8aDE+VGhlbWVzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUaGVtZUJveCIsIlNsaWRlciIsIlRoZW1lUGFnZSIsInRoZW1lMSIsIm5hbWUiLCJ0aGVtZTIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/speakerPage/themePage.js\n"));

/***/ })

});