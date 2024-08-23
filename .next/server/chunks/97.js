"use strict";
exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 4097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2099);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function UpdateUser({ userData , isOpen , onClose  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: "Update user",
            isOpen: isOpen,
            onClose: ()=>onClose(),
            render: ({ handleOnSave  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpdateUserForm, {
                    userData: userData,
                    onClose: ()=>onClose(),
                    handleOnSave: handleOnSave
                })
        })
    });
}
const UpdateUserForm = ({ userData , onClose , handleOnSave  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        handleOnSave(()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().success("user updated successfully");
            onClose();
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        component: "form",
        sx: {
            "& > :not(style)": {
                m: 1,
                width: "25ch"
            }
        },
        noValidate: true,
        autoComplete: "off",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                id: "outlined-basic",
                label: "name",
                variant: "outlined",
                value: userData.name,
                size: "small"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                id: "outlined-basic",
                label: "email",
                variant: "outlined",
                value: userData.email,
                size: "small"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                id: "outlined-basic",
                label: "password",
                variant: "outlined",
                value: userData.courses,
                size: "small"
            })
        ]
    });
};


/***/ })

};
;