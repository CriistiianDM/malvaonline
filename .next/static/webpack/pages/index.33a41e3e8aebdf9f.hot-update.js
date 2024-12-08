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

/***/ "./src/components/Nav/Nav.jsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ \"./src/components/Nav/handlers.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ \"./src/components/Nav/const.js\");\n/* harmony import */ var _shared_For__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/For */ \"./src/shared/For.jsx\");\n/* harmony import */ var _shared_Show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/Show */ \"./src/shared/Show.jsx\");\n/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n/**\n * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>\n * @copyright:  2024 \n*/ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n// Handlers\n\n// Const \n\n// Components\n\n\n\n/** Menu Nav */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_s((param)=>{\n    let { closeNav } = param;\n    _s();\n    const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(4);\n    const handlers = (0,_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        ...{\n            setSelected\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: closeNav,\n                tag: \"close-nav\"\n            }, void 0, false, {\n                fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                tag: \"nav-menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        tag: \"head-nav\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_For__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            func: BodyNavMenu,\n                            list: _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sections,\n                            shared: handlers\n                        }, void 0, false, {\n                            fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        tag: \"content-nav\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_For__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            func: BodyNavItems,\n                            list: _const__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sections,\n                            shared: handlers\n                        }, void 0, false, {\n                            fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n}, \"kxHSUQsFvutGU2d2qdDrMFhA9rM=\"));\n/** Body Nav Menu */ const BodyNavMenu = (element, index, shared)=>{\n    _s1();\n    const handler = shared ? react__WEBPACK_IMPORTED_MODULE_1___default().useCallback({\n        \"BodyNavMenu.useCallback\": (e)=>{\n            var _shared_element_callback;\n            return (_shared_element_callback = shared[element === null || element === void 0 ? void 0 : element.callback]) === null || _shared_element_callback === void 0 ? void 0 : _shared_element_callback.call(shared, e);\n        }\n    }[\"BodyNavMenu.useCallback\"], [\n        shared,\n        element === null || element === void 0 ? void 0 : element.callback\n    ]) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        id: element === null || element === void 0 ? void 0 : element.id,\n        onClick: handler,\n        className: element === null || element === void 0 ? void 0 : element.class,\n        tag: element === null || element === void 0 ? void 0 : element.tag,\n        children: element === null || element === void 0 ? void 0 : element.content\n    }, index, false, {\n        fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(BodyNavMenu, \"epj4qY15NHsef74wNqHIp5fdZmg=\");\n_c = BodyNavMenu;\n/** Body Nav Menu */ const BodyNavItems = (element, index, shared)=>{\n    _s2();\n    const handler = shared ? react__WEBPACK_IMPORTED_MODULE_1___default().useCallback({\n        \"BodyNavItems.useCallback\": (e)=>{\n            var _shared_element_callback;\n            return (_shared_element_callback = shared[element === null || element === void 0 ? void 0 : element.callback]) === null || _shared_element_callback === void 0 ? void 0 : _shared_element_callback.call(shared, e);\n        }\n    }[\"BodyNavItems.useCallback\"], [\n        shared,\n        element === null || element === void 0 ? void 0 : element.callback\n    ]) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        id: element === null || element === void 0 ? void 0 : element.id,\n        onClick: handler,\n        className: element === null || element === void 0 ? void 0 : element.class,\n        tag: element === null || element === void 0 ? void 0 : element.tag,\n        children: element === null || element === void 0 ? void 0 : element.content\n    }, index, false, {\n        fileName: \"/home/cristiank/malvaonline/src/components/Nav/Nav.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s2(BodyNavItems, \"epj4qY15NHsef74wNqHIp5fdZmg=\");\n_c1 = BodyNavItems;\nvar _c, _c1;\n$RefreshReg$(_c, \"BodyNavMenu\");\n$RefreshReg$(_c1, \"BodyNavItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBOztBQUN5QjtBQUV6QixXQUFXO0FBQzJCO0FBRXRDLFNBQVM7QUFDa0I7QUFFM0IsYUFBYTtBQUNxQjtBQUNFO0FBQ0o7QUFFaEMsYUFBYSxHQUNiLGlFQUFlO1FBQUMsRUFBRU0sUUFBUSxFQUFFOztJQUN4QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IscURBQWMsQ0FBQztJQUMvQyxNQUFNVSxXQUFXVCxxREFBYUEsQ0FBQztRQUFDLEdBQUc7WUFBQ087UUFBVyxDQUFDO0lBQUE7SUFDaEQscUJBQ0ksOERBQUNSLHVEQUFjOzswQkFDWCw4REFBQ1k7Z0JBQUVDLFNBQVNQO2dCQUFVUSxLQUFJOzs7Ozs7MEJBQzFCLDhEQUFDQztnQkFBSUQsS0FBSTs7a0NBQ0wsOERBQUNFO3dCQUFJRixLQUFJO2tDQUNMLDRFQUFDWCxtREFBR0E7NEJBQUNjLE1BQU1DOzRCQUFhQyxNQUFNakIsdURBQWM7NEJBQUVtQixRQUFRWDs7Ozs7Ozs7Ozs7a0NBRTFELDhEQUFDTTt3QkFBSUYsS0FBSTtrQ0FDTCw0RUFBQ1gsbURBQUdBOzRCQUFDYyxNQUFNSzs0QkFBY0gsTUFBTWpCLHVEQUFjOzRCQUFFbUIsUUFBUVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNFLG9DQUFDO0FBRUQsa0JBQWtCLEdBQ2xCLE1BQU1RLGNBQWMsQ0FBQ0ssU0FBU0MsT0FBT0g7O0lBQ2pDLE1BQU1JLFVBQVVKLFNBQ2RyQix3REFBaUI7bUNBQUMsQ0FBQzJCO2dCQUFNTjtvQkFBQUEsMkJBQUFBLE1BQU0sQ0FBQ0Usb0JBQUFBLDhCQUFBQSxRQUFTSyxRQUFRLENBQUMsY0FBekJQLCtDQUFBQSw4QkFBQUEsUUFBNEJNOztrQ0FBSTtRQUFDTjtRQUFRRSxvQkFBQUEsOEJBQUFBLFFBQVNLLFFBQVE7S0FBQyxJQUNwRjtJQUVGLHFCQUNJLDhEQUFDaEI7UUFBRWlCLEVBQUUsRUFBRU4sb0JBQUFBLDhCQUFBQSxRQUFTTSxFQUFFO1FBQUVoQixTQUFTWTtRQUFTSyxTQUFTLEVBQUVQLG9CQUFBQSw4QkFBQUEsUUFBU1EsS0FBSztRQUFFakIsR0FBRyxFQUFFUyxvQkFBQUEsOEJBQUFBLFFBQVNULEdBQUc7a0JBQzdFUyxvQkFBQUEsOEJBQUFBLFFBQVNTLE9BQU87T0FEb0VSOzs7OztBQUlqRztJQVZNTjtLQUFBQTtBQVlOLGtCQUFrQixHQUNsQixNQUFNSSxlQUFlLENBQUNDLFNBQVNDLE9BQU9IOztJQUNsQyxNQUFNSSxVQUFVSixTQUNkckIsd0RBQWlCO29DQUFDLENBQUMyQjtnQkFBTU47b0JBQUFBLDJCQUFBQSxNQUFNLENBQUNFLG9CQUFBQSw4QkFBQUEsUUFBU0ssUUFBUSxDQUFDLGNBQXpCUCwrQ0FBQUEsOEJBQUFBLFFBQTRCTTs7bUNBQUk7UUFBQ047UUFBUUUsb0JBQUFBLDhCQUFBQSxRQUFTSyxRQUFRO0tBQUMsSUFDcEY7SUFFRixxQkFDSSw4REFBQ2hCO1FBQUVpQixFQUFFLEVBQUVOLG9CQUFBQSw4QkFBQUEsUUFBU00sRUFBRTtRQUFFaEIsU0FBU1k7UUFBU0ssU0FBUyxFQUFFUCxvQkFBQUEsOEJBQUFBLFFBQVNRLEtBQUs7UUFBRWpCLEdBQUcsRUFBRVMsb0JBQUFBLDhCQUFBQSxRQUFTVCxHQUFHO2tCQUM3RVMsb0JBQUFBLDhCQUFBQSxRQUFTUyxPQUFPO09BRG9FUjs7Ozs7QUFJakc7SUFWTUY7TUFBQUEiLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aWFuay9tYWx2YW9ubGluZS9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3I6IENyaXN0aWFuIE1hY2hhZG8gPGNyaXN0aWFuLm1hY2hhZG9AY29ycmVvdW5pdmFsbGUuZWR1LmNvPlxuICogQGNvcHlyaWdodDogIDIwMjQgXG4qL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBIYW5kbGVyc1xuaW1wb3J0IGhhbmRsZXJzRnVuY3MgZnJvbSAnLi9oYW5kbGVycydcblxuLy8gQ29uc3QgXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEZvciBmcm9tICcuLi8uLi9zaGFyZWQvRm9yJ1xuaW1wb3J0IFNob3cgZnJvbSAnLi4vLi4vc2hhcmVkL1Nob3cnXG5pbXBvcnQgTmF2TWVudSBmcm9tICcuLi9OYXYvTmF2J1xuXG4vKiogTWVudSBOYXYgKi9cbmV4cG9ydCBkZWZhdWx0ICh7IGNsb3NlTmF2IH0pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKDQpXG4gICAgY29uc3QgaGFuZGxlcnMgPSBoYW5kbGVyc0Z1bmNzKHsuLi57c2V0U2VsZWN0ZWR9fSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdn0gdGFnPVwiY2xvc2UtbmF2XCIvPlxuICAgICAgICAgICAgPG5hdiB0YWc9XCJuYXYtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdGFnPVwiaGVhZC1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvciBmdW5jPXtCb2R5TmF2TWVudX0gbGlzdD17Q29uc3Quc2VjdGlvbnN9IHNoYXJlZD17aGFuZGxlcnN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiB0YWc9XCJjb250ZW50LW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9yIGZ1bmM9e0JvZHlOYXZJdGVtc30gbGlzdD17Q29uc3Quc2VjdGlvbnN9IHNoYXJlZD17aGFuZGxlcnN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbi8qKiBCb2R5IE5hdiBNZW51ICovXG5jb25zdCBCb2R5TmF2TWVudSA9IChlbGVtZW50LCBpbmRleCwgc2hhcmVkKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoYXJlZCBcbiAgICA/IFJlYWN0LnVzZUNhbGxiYWNrKChlKSA9PiBzaGFyZWRbZWxlbWVudD8uY2FsbGJhY2tdPy4oZSksIFtzaGFyZWQsIGVsZW1lbnQ/LmNhbGxiYWNrXSlcbiAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBpZD17ZWxlbWVudD8uaWR9IG9uQ2xpY2s9e2hhbmRsZXJ9IGNsYXNzTmFtZT17ZWxlbWVudD8uY2xhc3N9IHRhZz17ZWxlbWVudD8udGFnfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtlbGVtZW50Py5jb250ZW50fVxuICAgICAgICA8L2E+XG4gICAgKVxufVxuXG4vKiogQm9keSBOYXYgTWVudSAqL1xuY29uc3QgQm9keU5hdkl0ZW1zID0gKGVsZW1lbnQsIGluZGV4LCBzaGFyZWQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hhcmVkIFxuICAgID8gUmVhY3QudXNlQ2FsbGJhY2soKGUpID0+IHNoYXJlZFtlbGVtZW50Py5jYWxsYmFja10/LihlKSwgW3NoYXJlZCwgZWxlbWVudD8uY2FsbGJhY2tdKVxuICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGlkPXtlbGVtZW50Py5pZH0gb25DbGljaz17aGFuZGxlcn0gY2xhc3NOYW1lPXtlbGVtZW50Py5jbGFzc30gdGFnPXtlbGVtZW50Py50YWd9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2VsZW1lbnQ/LmNvbnRlbnR9XG4gICAgICAgIDwvYT5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiaGFuZGxlcnNGdW5jcyIsIkNvbnN0IiwiRm9yIiwiU2hvdyIsIk5hdk1lbnUiLCJjbG9zZU5hdiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZXJzIiwiRnJhZ21lbnQiLCJhIiwib25DbGljayIsInRhZyIsIm5hdiIsImRpdiIsImZ1bmMiLCJCb2R5TmF2TWVudSIsImxpc3QiLCJzZWN0aW9ucyIsInNoYXJlZCIsIkJvZHlOYXZJdGVtcyIsImVsZW1lbnQiLCJpbmRleCIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJjYWxsYmFjayIsImlkIiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJjb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav/Nav.jsx\n"));

/***/ })

});