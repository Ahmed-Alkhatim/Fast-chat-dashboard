"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 6290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var src_views_pages_misc_FooterIllustrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5765);
// ** React Imports

// ** Next Import

// ** MUI Components




// ** Layout Import

// ** Demo Imports

// ** Styled Components
const BoxWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>({
        [theme.breakpoints.down("md")]: {
            width: "90vw"
        }
    }));
const Img = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("img")(({ theme  })=>({
        [theme.breakpoints.down("lg")]: {
            height: 450,
            marginTop: theme.spacing(10)
        },
        [theme.breakpoints.down("md")]: {
            height: 400
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: theme.spacing(20)
        }
    }));
const Error401 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "content-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                sx: {
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                variant: "h4",
                                sx: {
                                    mb: 1.5
                                },
                                children: "You are not authorized!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: "You do not have permission to view this page using the credentials that you have provided while login."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    mb: 6,
                                    color: "text.secondary"
                                },
                                children: "Please contact your site administrator."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
                                variant: "contained",
                                children: "Back to Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                        height: "500",
                        alt: "error-illustration",
                        src: "/images/pages/401.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_views_pages_misc_FooterIllustrations__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
Error401.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error401);


/***/ })

};
;