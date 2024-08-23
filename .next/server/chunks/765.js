"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 5765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
// ** React Imports

// ** MUI Components


// Styled Components
const MaskImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("img")(()=>({
        bottom: 0,
        zIndex: -1,
        height: 260,
        width: "100%",
        position: "absolute"
    }));
const FooterIllustrations = (props)=>{
    // ** Props
    const { image  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // ** Vars
    const hidden = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down("md"));
    if (!hidden) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: !image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                alt: "mask",
                src: `/images/pages/misc-mask-${theme.palette.mode}.png`
            }) : typeof image === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                alt: "mask",
                src: image
            }) : image
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterIllustrations);


/***/ })

};
;