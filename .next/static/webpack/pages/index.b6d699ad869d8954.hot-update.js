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

/***/ "./src/components/Nav/handlers.js":
/*!****************************************!*\
  !*** ./src/components/Nav/handlers.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Handlers Nav Menu\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{\n    const initHeight = 30;\n    // Props\n    // const {\n    // } = props\n    const selectedNavMenu = (e)=>{\n        const tagValue = e.target.getAttribute('tag');\n        if (!tagValue) return;\n        const allTags = document.querySelectorAll('[tag]');\n        allTags.forEach((el)=>el.classList.remove('active'));\n        e.target.classList.add('active');\n    };\n    return {\n        selectedNavMenu: selectedNavMenu\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvaGFuZGxlcnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9CQUFvQjtBQUNwQixpRUFBZSxDQUFDQTtJQUNaLE1BQU1DLGFBQWE7SUFFbkIsUUFBUTtJQUNSLFVBQVU7SUFFVixZQUFZO0lBRVosTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3JCLE1BQU1DLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0YsVUFBVTtRQUNmLE1BQU1HLFVBQVVDLFNBQVNDLGdCQUFnQixDQUFDO1FBQzFDRixRQUFRRyxPQUFPLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDNUNWLEVBQUVFLE1BQU0sQ0FBQ08sU0FBUyxDQUFDRSxHQUFHLENBQUM7SUFDM0I7SUFFQSxPQUFPO1FBQ0haLGlCQUFpQkE7SUFDckI7QUFDSixHQUFDIiwic291cmNlcyI6WyIvaG9tZS9jcmlzdGlhbmsvbWFsdmFvbmxpbmUvc3JjL2NvbXBvbmVudHMvTmF2L2hhbmRsZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbmRsZXJzIE5hdiBNZW51XG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpbml0SGVpZ2h0ID0gMzBcbiAgICBcbiAgICAvLyBQcm9wc1xuICAgIC8vIGNvbnN0IHtcbiAgICAgXG4gICAgLy8gfSA9IHByb3BzXG5cbiAgICBjb25zdCBzZWxlY3RlZE5hdk1lbnUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YWdWYWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFnJyk7XG4gICAgICAgIGlmICghdGFnVmFsdWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgYWxsVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWddJyk7XG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWROYXZNZW51OiBzZWxlY3RlZE5hdk1lbnVcbiAgICB9XG59Il0sIm5hbWVzIjpbInByb3BzIiwiaW5pdEhlaWdodCIsInNlbGVjdGVkTmF2TWVudSIsImUiLCJ0YWdWYWx1ZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImFsbFRhZ3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/handlers.js\n"));

/***/ })

});