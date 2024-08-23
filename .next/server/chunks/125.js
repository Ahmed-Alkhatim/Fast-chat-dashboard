"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 4125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2099);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);






function AddUser() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                sx: {
                    marginBottom: "10px"
                },
                onClick: ()=>setIsOpen(true),
                color: "primary",
                variant: "contained",
                children: "Add User"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Dialog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Add user",
                isOpen: isOpen,
                onClose: ()=>{
                    setIsOpen(false);
                },
                render: ({ handleOnSave  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddUserForm, {
                        onClose: ()=>{
                            setIsOpen(false);
                        },
                        handleOnSave: handleOnSave
                    })
            })
        ]
    });
}
const AddUserForm = ({ onClose , handleOnSave  })=>{
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        handleOnSave(()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success("user added successfully");
            onClose();
        });
    }, []);
    const handleChange = ()=>{
        setUserData({});
    };
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
                onClick: handleChange,
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