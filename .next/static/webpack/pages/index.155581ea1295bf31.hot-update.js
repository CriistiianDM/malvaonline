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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Handlers Nav Menu\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{\n    const initHeight = 30;\n    // Props\n    const { setSelected } = props;\n    const selectedNavMenu = (e)=>{\n        console.log(Number(e.target.id));\n        setSelected(Number(e.target.id));\n        const tagValue = e.target.getAttribute('tag');\n        if (!tagValue) return;\n        const allTags = document.querySelectorAll('[tag]');\n        allTags.forEach((el)=>el.classList.remove('active'));\n        e.target.classList.add('active');\n    };\n    return {\n        selectedNavMenu: selectedNavMenu\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvaGFuZGxlcnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9CQUFvQjtBQUNwQixpRUFBZSxDQUFDQTtJQUNaLE1BQU1DLGFBQWE7SUFFbkIsUUFBUTtJQUNSLE1BQU0sRUFDRkMsV0FBVyxFQUNkLEdBQUdGO0lBRUosTUFBTUcsa0JBQWtCLENBQUNDO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNDLE9BQU9ILEVBQUVJLE1BQU0sQ0FBQ0MsRUFBRTtRQUM5QlAsWUFBWUssT0FBT0gsRUFBRUksTUFBTSxDQUFDQyxFQUFFO1FBQzlCLE1BQU1DLFdBQVdOLEVBQUVJLE1BQU0sQ0FBQ0csWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0QsVUFBVTtRQUVmLE1BQU1FLFVBQVVDLFNBQVNDLGdCQUFnQixDQUFDO1FBQzFDRixRQUFRRyxPQUFPLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDNUNkLEVBQUVJLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDRSxHQUFHLENBQUM7SUFDM0I7SUFFQSxPQUFPO1FBQ0hoQixpQkFBaUJBO0lBQ3JCO0FBQ0osR0FBQyIsInNvdXJjZXMiOlsiL2hvbWUvY3Jpc3RpYW5rL21hbHZhb25saW5lL3NyYy9jb21wb25lbnRzL05hdi9oYW5kbGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYW5kbGVycyBOYXYgTWVudVxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaW5pdEhlaWdodCA9IDMwXG4gICAgXG4gICAgLy8gUHJvcHNcbiAgICBjb25zdCB7XG4gICAgICAgIHNldFNlbGVjdGVkXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBzZWxlY3RlZE5hdk1lbnUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhOdW1iZXIoZS50YXJnZXQuaWQpKVxuICAgICAgICBzZXRTZWxlY3RlZChOdW1iZXIoZS50YXJnZXQuaWQpKVxuICAgICAgICBjb25zdCB0YWdWYWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFnJyk7XG4gICAgICAgIGlmICghdGFnVmFsdWUpIHJldHVybjtcblxuICAgICAgICBjb25zdCBhbGxUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3RhZ10nKTtcbiAgICAgICAgYWxsVGFncy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZE5hdk1lbnU6IHNlbGVjdGVkTmF2TWVudVxuICAgIH1cbn0iXSwibmFtZXMiOlsicHJvcHMiLCJpbml0SGVpZ2h0Iiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZE5hdk1lbnUiLCJlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsInRhcmdldCIsImlkIiwidGFnVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJhbGxUYWdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav/handlers.js\n"));

/***/ })

});