"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/DetailModal.tsx":
/*!********************************************!*\
  !*** ./src/app/components/DetailModal.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DetailModal: function() { return /* binding */ DetailModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,IconButton,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,IconButton,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,IconButton,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,IconButton,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _barrel_optimize_names_CloseOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CloseOutlined!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/CloseOutlined.js\");\n/* harmony import */ var _ModalBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalBox */ \"(app-pages-browser)/./src/app/components/ModalBox.tsx\");\n\n\n\n\n\nconst DetailModal = (param)=>{\n    let { showDetailModal, handleDetailClose, selectedPost } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBox__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n        \"aria-labelledby\": \"unstyled-modal-title\",\n        \"aria-describedby\": \"unstyled-modal-description\",\n        open: showDetailModal,\n        onClose: handleDetailClose,\n        slots: {\n            backdrop: _ModalBox__WEBPACK_IMPORTED_MODULE_2__.StyledBackdrop\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBox__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n            sx: {\n                width: \"70%\",\n                padding: \"50px\",\n                height: \"90vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    direction: \"row\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    variant: \"h4\",\n                                    color: \"primary\",\n                                    children: selectedPost.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    variant: \"subtitle2\",\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \" \",\n                                        \"Posted on \".concat(selectedPost.date, \" at \").concat(selectedPost.time),\n                                        \"  \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            size: \"large\",\n                            onClick: handleDetailClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CloseOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_IconButton_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        whiteSpace: \"pre-line\",\n                        overflowY: \"auto\",\n                        padding: \"10px 0\"\n                    },\n                    children: selectedPost.body\n                }, void 0, false, {\n                    fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adebayooriyomi/Documents/MyProjects/aiBlog/frontend/src/app/components/DetailModal.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_c = DetailModal;\nvar _c;\n$RefreshReg$(_c, \"DetailModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9EZXRhaWxNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkM7QUFDbkI7QUFDYTtBQUcxRCxNQUFNUyxjQUFjO1FBQUMsRUFDeEJDLGVBQWUsRUFDZkMsaUJBQWlCLEVBQ2pCQyxZQUFZLEVBS2Y7SUFFRyxxQkFDSSw4REFBQ0wsNENBQUtBO1FBQ0ZNLG1CQUFnQjtRQUNoQkMsb0JBQWlCO1FBQ2pCQyxNQUFNTDtRQUNOTSxTQUFTTDtRQUNUTSxPQUFPO1lBQUVDLFVBQVVaLHFEQUFjQTtRQUFDO2tCQUV0Qyw0RUFBQ0UsbURBQVlBO1lBQUNXLElBQUk7Z0JBQUVDLE9BQU87Z0JBQU9DLFNBQVE7Z0JBQVFDLFFBQVE7WUFBTzs7OEJBQzdELDhEQUFDbkIsK0dBQUtBO29CQUFDb0IsV0FBVTtvQkFBTUMsZ0JBQWU7b0JBQWdCQyxZQUFXOztzQ0FDakUsOERBQUN0QiwrR0FBS0E7OzhDQUNGLDhEQUFDRCwrR0FBVUE7b0NBQUN3QixTQUFRO29DQUFLQyxPQUFNOzhDQUFXZixhQUFhZ0IsS0FBSzs7Ozs7OzhDQUM1RCw4REFBQzFCLCtHQUFVQTtvQ0FBQ3dCLFNBQVE7b0NBQVlDLE9BQU07O3dDQUFpQjt3Q0FBRyxhQUFvQ2YsT0FBeEJBLGFBQWFpQixJQUFJLEVBQUMsUUFBd0IsT0FBbEJqQixhQUFha0IsSUFBSTt3Q0FBRzs7Ozs7Ozs7Ozs7OztzQ0FFdEgsOERBQUMxQiwrR0FBVUE7NEJBQUMyQixNQUFLOzRCQUFRQyxTQUFTckI7c0NBQzlCLDRFQUFDTiwrRkFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDSiwrR0FBT0E7Ozs7OzhCQUNSLDhEQUFDQywrR0FBVUE7b0JBQUNpQixJQUFJO3dCQUFDYyxZQUFZO3dCQUFZQyxXQUFXO3dCQUFRYixTQUFTO29CQUFROzhCQUFJVCxhQUFhdUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUcsRUFBQztLQWpDWTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9EZXRhaWxNb2RhbC50c3g/MGM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGl2aWRlciwgVHlwb2dyYXBoeSwgU3RhY2ssIEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcbmltcG9ydCB7IFN0eWxlZEJhY2tkcm9wICwgTW9kYWwsIE1vZGFsQ29udGVudCB9IGZyb20gJy4vTW9kYWxCb3gnXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uL3BhZ2UnXG5cbmV4cG9ydCBjb25zdCBEZXRhaWxNb2RhbCA9ICh7XG4gICAgc2hvd0RldGFpbE1vZGFsLCBcbiAgICBoYW5kbGVEZXRhaWxDbG9zZSwgXG4gICAgc2VsZWN0ZWRQb3N0XG59OiB7XG4gICAgc2hvd0RldGFpbE1vZGFsOiBib29sZWFuOyBcbiAgICBoYW5kbGVEZXRhaWxDbG9zZTogKCk9PnZvaWQ7IFxuICAgIHNlbGVjdGVkUG9zdDogUG9zdFR5cGU7XG59KSA9PiB7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidW5zdHlsZWQtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVuc3R5bGVkLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIG9wZW49e3Nob3dEZXRhaWxNb2RhbH1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURldGFpbENsb3NlfVxuICAgICAgICAgICAgc2xvdHM9e3sgYmFja2Ryb3A6IFN0eWxlZEJhY2tkcm9wIH19XG4gICAgICAgID5cbiAgICAgICAgPE1vZGFsQ29udGVudCBzeD17eyB3aWR0aDogJzcwJScsIHBhZGRpbmc6JzUwcHgnLCBoZWlnaHQ6ICc5MHZoJyB9fT5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9XCJwcmltYXJ5XCI+e3NlbGVjdGVkUG9zdC50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj4ge2BQb3N0ZWQgb24gJHtzZWxlY3RlZFBvc3QuZGF0ZX0gYXQgJHtzZWxlY3RlZFBvc3QudGltZX1gfSAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e2hhbmRsZURldGFpbENsb3NlfT5cbiAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17e3doaXRlU3BhY2U6ICdwcmUtbGluZScsIG92ZXJmbG93WTogJ2F1dG8nLCBwYWRkaW5nOiAnMTBweCAwJ319PntzZWxlY3RlZFBvc3QuYm9keX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgICA8L01vZGFsPlxuICAgIClcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGl2aWRlciIsIlR5cG9ncmFwaHkiLCJTdGFjayIsIkljb25CdXR0b24iLCJDbG9zZU91dGxpbmVkIiwiU3R5bGVkQmFja2Ryb3AiLCJNb2RhbCIsIk1vZGFsQ29udGVudCIsIkRldGFpbE1vZGFsIiwic2hvd0RldGFpbE1vZGFsIiwiaGFuZGxlRGV0YWlsQ2xvc2UiLCJzZWxlY3RlZFBvc3QiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib3BlbiIsIm9uQ2xvc2UiLCJzbG90cyIsImJhY2tkcm9wIiwic3giLCJ3aWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ2YXJpYW50IiwiY29sb3IiLCJ0aXRsZSIsImRhdGUiLCJ0aW1lIiwic2l6ZSIsIm9uQ2xpY2siLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3dZIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/DetailModal.tsx\n"));

/***/ })

});