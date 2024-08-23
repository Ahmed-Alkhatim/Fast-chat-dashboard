"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 2713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5863);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
// ** Icon Imports


const IconifyIcon = ({ icon , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon,
        fontSize: "1.375rem",
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconifyIcon);


/***/ }),

/***/ 4737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J6": () => (/* binding */ SettingsContext),
/* harmony export */   "ix": () => (/* binding */ SettingsConsumer),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9734);
// ** React Imports


// ** ThemeConfig Import

const initialSettings = {
    themeColor: "primary",
    mode: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].mode */ .Z.mode,
    skin: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].skin */ .Z.skin,
    footer: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].footer */ .Z.footer,
    layout: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].layout */ .Z.layout,
    lastLayout: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].layout */ .Z.layout,
    direction: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].direction */ .Z.direction,
    navHidden: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].navHidden */ .Z.navHidden,
    appBarBlur: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].appBarBlur */ .Z.appBarBlur,
    navCollapsed: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].navCollapsed */ .Z.navCollapsed,
    contentWidth: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].contentWidth */ .Z.contentWidth,
    toastPosition: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].toastPosition */ .Z.toastPosition,
    verticalNavToggleType: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].verticalNavToggleType */ .Z.verticalNavToggleType,
    appBar: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].layout */ .Z.layout === "horizontal" && src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].appBar */ .Z.appBar === "hidden" ? "fixed" : src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].appBar */ .Z.appBar
};
const staticSettings = {
    appBar: initialSettings.appBar,
    footer: initialSettings.footer,
    layout: initialSettings.layout,
    navHidden: initialSettings.navHidden,
    lastLayout: initialSettings.lastLayout,
    toastPosition: initialSettings.toastPosition
};
const restoreSettings = ()=>{
    let settings = null;
    try {
        const storedData = window.localStorage.getItem("settings");
        if (storedData) {
            settings = {
                ...JSON.parse(storedData),
                ...staticSettings
            };
        } else {
            settings = initialSettings;
        }
    } catch (err) {
        console.error(err);
    }
    return settings;
};
// set settings in localStorage
const storeSettings = (settings)=>{
    const initSettings = Object.assign({}, settings);
    delete initSettings.appBar;
    delete initSettings.footer;
    delete initSettings.layout;
    delete initSettings.navHidden;
    delete initSettings.lastLayout;
    delete initSettings.toastPosition;
    window.localStorage.setItem("settings", JSON.stringify(initSettings));
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    saveSettings: ()=>null,
    settings: initialSettings
});
const SettingsProvider = ({ children , pageSettings  })=>{
    // ** State
    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ...initialSettings
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const restoredSettings = restoreSettings();
        if (restoredSettings) {
            setSettings({
                ...restoredSettings
            });
        }
        if (pageSettings) {
            setSettings({
                ...settings,
                ...pageSettings
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pageSettings
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (settings.layout === "horizontal" && settings.mode === "semi-dark") {
            saveSettings({
                ...settings,
                mode: "light"
            });
        }
        if (settings.layout === "horizontal" && settings.appBar === "hidden") {
            saveSettings({
                ...settings,
                appBar: "fixed"
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.layout
    ]);
    const saveSettings = (updatedSettings)=>{
        storeSettings(updatedSettings);
        setSettings(updatedSettings);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 1268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_core_context_settingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4737);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_core_context_settingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6);


/***/ }),

/***/ 9734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */ // ** MUI Imports
const themeConfig = {
    // ** Layout Configs
    templateName: "" /* App Name */ ,
    layout: "vertical" /* vertical | horizontal */ ,
    mode: "light",
    direction: "ltr" /* ltr | rtl */ ,
    skin: "default" /* default | bordered */ ,
    contentWidth: "boxed" /* full | boxed */ ,
    footer: "static" /* fixed | static | hidden */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    navHidden: false,
    menuTextTruncate: true,
    navSubItemIcon: "tabler:circle" /* Icon */ ,
    verticalNavToggleType: "accordion" /* accordion | collapse /*! Note: This is for Vertical navigation menu only */ ,
    navCollapsed: false,
    navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    collapsedNavigationSize: 82 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    afterVerticalNavMenuContentPosition: "fixed" /* fixed | static */ ,
    beforeVerticalNavMenuContentPosition: "fixed" /* fixed | static */ ,
    horizontalMenuToggle: "hover" /* click | hover /*! Note: This is for Horizontal navigation menu only */ ,
    horizontalMenuAnimation: true,
    // ** AppBar Configs
    appBar: "fixed" /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */ ,
    appBarBlur: true,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false,
    disableCustomizer: true,
    toastPosition: "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */ 
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ })

};
;