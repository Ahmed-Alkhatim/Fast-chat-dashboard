"use strict";
exports.id = 503;
exports.ids = [503];
exports.modules = {

/***/ 2503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
// ** MUI Imports




const FallbackSpinner = ({ sx  })=>{
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: 82,
                height: 56.375,
                viewBox: "0 0 32 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: theme.palette.primary.main,
                        d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#161616",
                        opacity: 0.06,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#161616",
                        opacity: 0.06,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: theme.palette.primary.main,
                        d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default()), {
                disableShrink: true,
                sx: {
                    mt: 6
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackSpinner);


/***/ })

};
;