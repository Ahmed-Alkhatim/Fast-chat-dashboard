"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 2099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title , isOpen , onClose , render  })=>{
    const [onSave, setOnSave] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        callback: ()=>{
            console.log("initial onSave");
        }
    });
    const handleSave = ()=>{
        onSave.callback();
    };
    const handleOnSave = (callback)=>{
        setOnSave({
            callback: ()=>callback()
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()), {
            open: isOpen,
            onClose: onClose,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default()), {
                    id: "alert-dialog-title",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: render({
                        handleOnSave
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                            onClick: ()=>onClose(),
                            children: "close"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                            onClick: ()=>handleSave(),
                            autoFocus: true,
                            children: "Save"
                        })
                    ]
                })
            ]
        })
    });
});


/***/ })

};
;