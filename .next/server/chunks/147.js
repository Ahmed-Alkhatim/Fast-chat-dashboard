"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ UsersProvider),
  "Z": () => (/* binding */ useUsersContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/services/userService.ts
class UsersService {
    fetchUsers = async ()=>{
        try {
            // const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());;
            return users;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    async deleteUser(userId) {
        try {
            await fetch(`/users/${userId}`).then((response)=>{
                response.json;
            });
        } catch (error) {
            console.error(`Failed to delete user with ID ${userId}`, error);
            throw error;
        }
    }
}
/* harmony default export */ const userService = (new UsersService());
const users = [
    {
        "id": "1",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/john.jpg",
        "bio": "Experienced Flutter Developer",
        "courses": [
            "courseId1",
            "courseId3"
        ],
        "created_at": "2024-08-01T10:00:00Z",
        "updated_at": "2024-08-15T12:00:00Z"
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/jane.jpg",
        "bio": "Aspiring Web Developer",
        "courses": [
            "courseId2",
            "courseId4"
        ],
        "created_at": "2024-07-21T08:30:00Z",
        "updated_at": "2024-08-10T09:45:00Z"
    },
    {
        "id": "3",
        "name": "Michael Johnson",
        "email": "michael@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/michael.jpg",
        "bio": "Senior JavaScript Developer",
        "courses": [
            "courseId5",
            "courseId6"
        ],
        "created_at": "2024-06-15T11:20:00Z",
        "updated_at": "2024-07-28T14:00:00Z"
    },
    {
        "id": "4",
        "name": "Emily Davis",
        "email": "emily@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/emily.jpg",
        "bio": "Learning Python and Data Science",
        "courses": [
            "courseId7",
            "courseId8"
        ],
        "created_at": "2024-05-10T13:50:00Z",
        "updated_at": "2024-08-05T11:35:00Z"
    },
    {
        "id": "5",
        "name": "David Wilson",
        "email": "david@example.com",
        "role": "admin",
        "profile_picture": "https://example.com/profile/david.jpg",
        "bio": "Platform Administrator",
        "courses": [],
        "created_at": "2024-04-01T07:10:00Z",
        "updated_at": "2024-08-18T16:20:00Z"
    },
    {
        "id": "6",
        "name": "Sophia Martinez",
        "email": "sophia@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/sophia.jpg",
        "bio": "Data Science and AI Expert",
        "courses": [
            "courseId9",
            "courseId10"
        ],
        "created_at": "2024-03-22T09:00:00Z",
        "updated_at": "2024-07-29T10:10:00Z"
    },
    {
        "id": "7",
        "name": "James Brown",
        "email": "james@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/james.jpg",
        "bio": "Frontend Developer Enthusiast",
        "courses": [
            "courseId11",
            "courseId12"
        ],
        "created_at": "2024-02-18T15:30:00Z",
        "updated_at": "2024-08-12T12:55:00Z"
    }
];

;// CONCATENATED MODULE: ./src/context/UsersContext.tsx



const UsersContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const UsersProvider = ({ children  })=>{
    const [users, setUsers] = (0,external_react_.useState)();
    const fetchUsers = async ()=>{
        await userService.fetchUsers().then(setUsers).catch();
    };
    const deleteUser = async (userId)=>{
        console.log("The user with id " + userId + "will be deleted");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(UsersContext.Provider, {
        value: {
            users,
            fetchUsers,
            deleteUser
        },
        children: children
    });
};
const useUsersContext = ()=>{
    const context = (0,external_react_.useContext)(UsersContext);
    if (!context) {
        throw new Error("useUsers must be used within a UsersProvider");
    }
    return context;
};


/***/ }),

/***/ 5147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsersView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_context_UsersContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8290);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_13__);














function UsersView({ onUpdateUser  }) {
    const { users , fetchUsers , deleteUser  } = (0,src_context_UsersContext__WEBPACK_IMPORTED_MODULE_8__/* .useUsersContext */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        fetchUsers();
    }, []);
    const handleDelete = (userId)=>{
        deleteUser(userId);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_11___default().success("Deleted Successfully");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4___default()), {
            component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    minWidth: 650
                },
                ariaLabel: "simple table",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: " Name "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: " Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: " ٌRole"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    children: " Courses"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: users?.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6___default()), {
                                sx: {
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        component: "th",
                                        scope: "row",
                                        children: user.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        children: [
                                            " ",
                                            user.email,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        children: [
                                            " ",
                                            user.role,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        children: [
                                            " ",
                                            user.courses.join(),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonsContainer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                    sx: {
                                                        fontSize: 20,
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>onUpdateUser(user),
                                                    Outlined: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    sx: {
                                                        fontSize: 20,
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>handleDelete(user.id),
                                                    Outlined: true
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, user.name))
                    })
                ]
            })
        })
    });
}
const ButtonsContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__.styled)("div")({
    display: "flex",
    justifyContent: "space-around"
});


/***/ })

};
;