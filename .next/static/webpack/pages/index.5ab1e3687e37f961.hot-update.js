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

/***/ "./src/components/Header/handlers.js":
/*!*******************************************!*\
  !*** ./src/components/Header/handlers.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Handlers Header\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{\n    const initHeight = 30;\n    // Props\n    const { SetEnableClass, openNav, SetCloseNav } = props;\n    const eventScroll = ()=>{\n        const handleScroll = ()=>{\n            SetEnableClass(initHeight <= window.scrollY);\n        };\n        window.addEventListener('scroll', handleScroll);\n        return ()=>{\n            window.removeEventListener('scroll', handleScroll);\n        };\n    };\n    const closeNav = ()=>SetCloseNav(!openNav);\n    return {\n        eventScroll: eventScroll,\n        closeNav: closeNav\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGFuZGxlcnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtCQUFrQjtBQUNsQixpRUFBZSxDQUFDQTtJQUNaLE1BQU1DLGFBQWE7SUFFbkIsUUFBUTtJQUNSLE1BQU0sRUFDRkMsY0FBYyxFQUNkQyxPQUFPLEVBQ1BDLFdBQVcsRUFDZCxHQUFHSjtJQUVKLE1BQU1LLGNBQWM7UUFDaEIsTUFBTUMsZUFBZTtZQUNqQkosZUFBZUQsY0FBY00sT0FBT0MsT0FBTztRQUMvQztRQUNBRCxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0hDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3pDO0lBQ0o7SUFFQSxNQUFNSyxXQUFXLElBQU1QLFlBQVksQ0FBQ0Q7SUFFcEMsT0FBTztRQUNIRSxhQUFhQTtRQUNiTSxVQUFVQTtJQUNkO0FBQ0osR0FBQyIsInNvdXJjZXMiOlsiL2hvbWUvY3Jpc3RpYW5rL21hbHZhb25saW5lL3NyYy9jb21wb25lbnRzL0hlYWRlci9oYW5kbGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYW5kbGVycyBIZWFkZXJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGluaXRIZWlnaHQgPSAzMFxuICAgIFxuICAgIC8vIFByb3BzXG4gICAgY29uc3Qge1xuICAgICAgICBTZXRFbmFibGVDbGFzcyxcbiAgICAgICAgb3Blbk5hdiwgXG4gICAgICAgIFNldENsb3NlTmF2XG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBldmVudFNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgU2V0RW5hYmxlQ2xhc3MoaW5pdEhlaWdodCA8PSB3aW5kb3cuc2Nyb2xsWSlcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VOYXYgPSAoKSA9PiBTZXRDbG9zZU5hdighb3Blbk5hdilcblxuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50U2Nyb2xsOiBldmVudFNjcm9sbCxcbiAgICAgICAgY2xvc2VOYXY6IGNsb3NlTmF2LFxuICAgIH1cbn0iXSwibmFtZXMiOlsicHJvcHMiLCJpbml0SGVpZ2h0IiwiU2V0RW5hYmxlQ2xhc3MiLCJvcGVuTmF2IiwiU2V0Q2xvc2VOYXYiLCJldmVudFNjcm9sbCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlTmF2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/handlers.js\n"));

/***/ })

});